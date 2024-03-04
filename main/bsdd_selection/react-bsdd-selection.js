var Sm = Object.defineProperty;
var xm = (e, t, n) => t in e ? Sm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ie = (e, t, n) => (xm(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as P from "react";
import v, { createContext as an, useContext as bt, useState as U, useRef as W, useEffect as V, useMemo as Vn, useCallback as Z, useLayoutEffect as uo, useId as gu, forwardRef as ie, cloneElement as cn, Children as Cm, createElement as gc } from "react";
import * as Em from "react-dom";
import hu, { flushSync as ys, createPortal as Im, unstable_batchedUpdates as Dm } from "react-dom";
function bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yu = { exports: {} }, fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pm = v, Rm = Symbol.for("react.element"), Am = Symbol.for("react.fragment"), Tm = Object.prototype.hasOwnProperty, Om = Pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function vu(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Tm.call(t, r) && !Nm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Rm, type: e, key: i, ref: s, props: o, _owner: Om.current };
}
fo.Fragment = Am;
fo.jsx = vu;
fo.jsxs = vu;
yu.exports = fo;
var M = yu.exports, Hi = {}, hc = hu;
Hi.createRoot = hc.createRoot, Hi.hydrateRoot = hc.hydrateRoot;
var wu = { exports: {} }, Su = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir = v;
function $m(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var _m = typeof Object.is == "function" ? Object.is : $m, Lm = ir.useSyncExternalStore, km = ir.useRef, Mm = ir.useEffect, Fm = ir.useMemo, Bm = ir.useDebugValue;
Su.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = km(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = Fm(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, _m(u, p))
        return m;
      var g = r(p);
      return o !== void 0 && o(m, g) ? m : (u = p, d = g);
    }
    var l = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return c(t());
    }, f === null ? void 0 : function() {
      return c(f());
    }];
  }, [t, n, r, o]);
  var a = Lm(e, i[0], i[1]);
  return Mm(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), Bm(a), a;
};
wu.exports = Su;
var jm = wu.exports, Fe = (
  // prettier-ignore
  // @ts-ignore
  "default" in P ? P.default : P
), bc = Symbol.for("react-redux-context"), yc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Wm() {
  if (!Fe.createContext)
    return {};
  const e = yc[bc] ?? (yc[bc] = /* @__PURE__ */ new Map());
  let t = e.get(Fe.createContext);
  return t || (t = Fe.createContext(
    null
  ), e.set(Fe.createContext, t)), t;
}
var _t = /* @__PURE__ */ Wm(), zm = () => {
  throw new Error("uSES not initialized!");
};
function vs(e = _t) {
  return function() {
    return Fe.useContext(e);
  };
}
var xu = /* @__PURE__ */ vs(), Cu = zm, Vm = (e) => {
  Cu = e;
}, Gm = (e, t) => e === t;
function Hm(e = _t) {
  const t = e === _t ? xu : vs(e), n = (r, o = {}) => {
    const { equalityFn: i = Gm, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = t();
    Fe.useRef(!0);
    const f = Fe.useCallback(
      {
        [r.name](m) {
          return r(m);
        }
      }[r.name],
      [r, u, s.stabilityCheck]
    ), p = Cu(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      f,
      i
    );
    return Fe.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Um = /* @__PURE__ */ Hm();
function qm(e) {
  e();
}
function Km() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      qm(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var vc = {
  notify() {
  },
  get: () => []
};
function Ym(e, t) {
  let n, r = vc, o = 0, i = !1;
  function s(g) {
    u();
    const h = r.subscribe(g);
    let w = !1;
    return () => {
      w || (w = !0, h(), d());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Km());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = vc);
  }
  function f() {
    i || (i = !0, u());
  }
  function p() {
    i && (i = !1, d());
  }
  const m = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
var Xm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Jm = Xm ? Fe.useLayoutEffect : Fe.useEffect;
function Qm({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Fe.useMemo(() => {
    const l = Ym(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Fe.useMemo(() => e.getState(), [e]);
  Jm(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || _t;
  return /* @__PURE__ */ Fe.createElement(c.Provider, { value: s }, n);
}
var Zm = Qm;
function Eu(e = _t) {
  const t = e === _t ? xu : (
    // @ts-ignore
    vs(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var eg = /* @__PURE__ */ Eu();
function tg(e = _t) {
  const t = e === _t ? eg : Eu(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ng = /* @__PURE__ */ tg();
Vm(jm.useSyncExternalStoreWithSelector);
const rg = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class Fr {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || rg, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, o) {
    return o && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Fr(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Fr(this.logger, t);
  }
}
var pt = new Fr();
class po {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] = this.observers[r] || [], this.observers[r].push(n);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t] = this.observers[t].filter((r) => r !== n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    this.observers[t] && [].concat(this.observers[t]).forEach((s) => {
      s(...r);
    }), this.observers["*"] && [].concat(this.observers["*"]).forEach((s) => {
      s.apply(s, [t, ...r]);
    });
  }
}
function $n() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function wc(e) {
  return e == null ? "" : "" + e;
}
function og(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function ws(e, t, n) {
  function r(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function o() {
    return !e || typeof e == "string";
  }
  const i = typeof t != "string" ? [].concat(t) : t.split(".");
  for (; i.length > 1; ) {
    if (o())
      return {};
    const s = r(i.shift());
    !e[s] && n && (e[s] = new n()), Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {};
  }
  return o() ? {} : {
    obj: e,
    k: r(i.shift())
  };
}
function Sc(e, t, n) {
  const {
    obj: r,
    k: o
  } = ws(e, t, Object);
  r[o] = n;
}
function ig(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = ws(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function Br(e, t) {
  const {
    obj: n,
    k: r
  } = ws(e, t);
  if (n)
    return n[r];
}
function sg(e, t, n) {
  const r = Br(e, n);
  return r !== void 0 ? r : Br(t, n);
}
function Iu(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Iu(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function fn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var ag = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function cg(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => ag[t]) : e;
}
const lg = [" ", ",", "?", "!", ";"];
function ug(e, t, n) {
  t = t || "", n = n || "";
  const r = lg.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0)
    return !0;
  const o = new RegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let i = !o.test(e);
  if (!i) {
    const s = e.indexOf(n);
    s > 0 && !o.test(e.substring(0, s)) && (i = !0);
  }
  return i;
}
function jr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e)
    return;
  if (e[t])
    return e[t];
  const r = t.split(n);
  let o = e;
  for (let i = 0; i < r.length; ++i) {
    if (!o || typeof o[r[i]] == "string" && i + 1 < r.length)
      return;
    if (o[r[i]] === void 0) {
      let s = 2, a = r.slice(i, i + s).join(n), c = o[a];
      for (; c === void 0 && r.length > i + s; )
        s++, a = r.slice(i, i + s).join(n), c = o[a];
      if (c === void 0)
        return;
      if (c === null)
        return null;
      if (t.endsWith(a)) {
        if (typeof c == "string")
          return c;
        if (a && typeof c[a] == "string")
          return c[a];
      }
      const l = r.slice(i + s).join(n);
      return l ? jr(c, l, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function Wr(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class xc extends po {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a = [t, n];
    r && typeof r != "string" && (a = a.concat(r)), r && typeof r == "string" && (a = a.concat(i ? r.split(i) : r)), t.indexOf(".") > -1 && (a = t.split("."));
    const c = Br(this.data, a);
    return c || !s || typeof r != "string" ? c : jr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), Sc(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (typeof r[i] == "string" || Object.prototype.toString.apply(r[i]) === "[object Array]") && this.addResource(t, n, i, r[i], {
        silent: !0
      });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), o = r, r = n, n = a[1]), this.addNamespaces(n);
    let c = Br(this.data, a) || {};
    o ? Iu(c, r, i) : c = {
      ...c,
      ...r
    }, Sc(this.data, a, c), s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((o) => n[o] && Object.keys(n[o]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Du = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return e.forEach((i) => {
      this.processors[i] && (t = this.processors[i].process(t, n, r, o));
    }), t;
  }
};
const Cc = {};
class zr extends po {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), og(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = pt.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !ug(t, r, o);
    if (s && !a) {
      const c = t.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: t,
          namespaces: i
        };
      const l = t.split(r);
      (r !== o || r === o && this.options.ns.indexOf(l[0]) > -1) && (i = l.shift()), t = l.join(o);
    }
    return typeof i == "string" && (i = [i]), {
      key: t,
      namespaces: i
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null)
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], n), c = a[a.length - 1], l = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (u) {
        const y = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${y}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: l,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(n)
        } : `${c}${y}${s}`;
      }
      return o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: l,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(n)
      } : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const p = d && d.usedKey || s, m = d && d.exactUsedKey || s, g = Object.prototype.toString.apply(f), h = ["[object Number]", "[object Function]", "[object RegExp]"], w = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, S = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (S && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && h.indexOf(g) < 0 && !(typeof w == "string" && g === "[object Array]")) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = y, d.usedParams = this.getUsedParamsDetails(n), d) : y;
      }
      if (i) {
        const y = g === "[object Array]", x = y ? [] : {}, C = y ? m : p;
        for (const I in f)
          if (Object.prototype.hasOwnProperty.call(f, I)) {
            const E = `${C}${i}${I}`;
            x[I] = this.translate(E, {
              ...n,
              joinArrays: !1,
              ns: a
            }), x[I] === E && (x[I] = f[I]);
          }
        f = x;
      }
    } else if (S && typeof w == "string" && g === "[object Array]")
      f = f.join(w), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let y = !1, x = !1;
      const C = n.count !== void 0 && typeof n.count != "string", I = zr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", T = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", $ = n[`defaultValue${E}`] || n[`defaultValue${T}`] || n.defaultValue;
      !this.isValidLookup(f) && I && (y = !0, f = $), this.isValidLookup(f) || (x = !0, f = s);
      const L = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : f, k = I && $ !== f && this.options.updateMissing;
      if (x || y || k) {
        if (this.logger.log(k ? "updateKey" : "missingKey", l, c, s, k ? $ : f), i) {
          const B = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let A = [];
        const _ = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && _ && _[0])
          for (let B = 0; B < _.length; B++)
            A.push(_[B]);
        else
          this.options.saveMissingTo === "all" ? A = this.languageUtils.toResolveHierarchy(n.lng || this.language) : A.push(n.lng || this.language);
        const R = (B, O, H) => {
          const X = I && H !== f ? H : L;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(B, c, O, X, k, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(B, c, O, X, k, n), this.emit("missingKey", B, c, O, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? A.forEach((B) => {
          this.pluralResolver.getSuffixes(B, n).forEach((O) => {
            R([B], s + O, n[`defaultValue${O}`] || $);
          });
        }) : R(A, s, $));
      }
      f = this.extendTranslation(f, t, n, d, r), x && f === s && this.options.appendNamespaceToMissingKey && (f = `${c}:${s}`), (x || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${s}` : s, y ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return o ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, o, i) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || o.usedLng, o.usedNS, o.usedKey, {
        resolved: o
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const l = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (l) {
        const f = t.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language, r), l) {
        const f = t.match(this.interpolator.nestingRegexp), p = f && f.length;
        u < p && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = o.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var f = arguments.length, p = new Array(f), m = 0; m < f; m++)
          p[m] = arguments[m];
        return i && i[0] === p[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`), null) : s.translate(...p, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, c = typeof a == "string" ? [a] : a;
    return t != null && c && c.length && r.applyPostProcessor !== !1 && (t = Du.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, o, i, s, a;
    return typeof t == "string" && (t = [t]), t.forEach((c) => {
      if (this.isValidLookup(r))
        return;
      const l = this.extractFromKey(c, n), u = l.key;
      o = u;
      let d = l.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", p = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", g = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((h) => {
        this.isValidLookup(r) || (a = h, !Cc[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Cc[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((w) => {
          if (this.isValidLookup(r))
            return;
          s = w;
          const S = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(S, u, w, h, n);
          else {
            let y;
            f && (y = this.pluralResolver.getSuffix(w, n.count, n));
            const x = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (S.push(u + y), n.ordinal && y.indexOf(C) === 0 && S.push(u + y.replace(C, this.options.pluralSeparator)), p && S.push(u + x)), m) {
              const I = `${u}${this.options.contextSeparator}${n.context}`;
              S.push(I), f && (S.push(I + y), n.ordinal && y.indexOf(C) === 0 && S.push(I + y.replace(C, this.options.pluralSeparator)), p && S.push(I + x));
            }
          }
          let b;
          for (; b = S.pop(); )
            this.isValidLookup(r) || (i = b, r = this.getResource(w, h, b, n));
        }));
      });
    }), {
      res: r,
      usedKey: o,
      exactUsedKey: i,
      usedLng: s,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, o) : this.resourceStore.getResource(t, n, r, o);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let o = r ? t.replace : t;
    if (r && typeof t.count < "u" && (o.count = t.count), this.options.interpolation.defaultVariables && (o = {
      ...this.options.interpolation.defaultVariables,
      ...o
    }), !r) {
      o = {
        ...o
      };
      for (const i of n)
        delete o[i];
    }
    return o;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function gi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Ec {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = pt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Wr(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Wr(t), !t || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = gi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = gi(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = gi(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t)
      return null;
    let n;
    return t.forEach((r) => {
      if (n)
        return;
      const o = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(o)) && (n = o);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n)
        return;
      const o = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(o))
        return n = o;
      n = this.options.supportedLngs.find((i) => {
        if (i === o)
          return i;
        if (!(i.indexOf("-") < 0 && o.indexOf("-") < 0) && i.indexOf(o) === 0)
          return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t)
      return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Object.prototype.toString.apply(t) === "[object Array]")
      return t;
    if (!n)
      return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), o = [], i = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), r.forEach((s) => {
      o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
    }), o;
  }
}
let dg = [{
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
}], fg = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const pg = ["v1", "v2", "v3"], mg = ["v4"], Ic = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function gg() {
  const e = {};
  return dg.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: fg[t.fc]
      };
    });
  }), e;
}
class hg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = pt.create("pluralResolver"), (!this.options.compatibilityJSON || mg.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = gg();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Wr(t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((o) => `${n}${o}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Ic[o] - Ic[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const o = this.getRule(t, r);
    return o ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${o.select(n)}` : this.getSuffixRetroCompatible(o, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let o = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
    const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !pg.includes(this.options.compatibilityJSON);
  }
}
function Dc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = sg(e, t, n);
  return !i && o && typeof n == "string" && (i = jr(e, n, r), i === void 0 && (i = jr(t, n, r))), i;
}
class bg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = pt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const n = t.interpolation;
    this.escape = n.escape !== void 0 ? n.escape : cg, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? fn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? fn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? fn(n.nestingPrefix) : n.nestingPrefixEscaped || fn("$t("), this.nestingSuffix = n.nestingSuffix ? fn(n.nestingSuffix) : n.nestingSuffixEscaped || fn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = `${this.prefix}(.+?)${this.suffix}`;
    this.regexp = new RegExp(t, "g");
    const n = `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;
    this.regexpUnescape = new RegExp(n, "g");
    const r = `${this.nestingPrefix}(.+?)${this.nestingSuffix}`;
    this.nestingRegexp = new RegExp(r, "g");
  }
  interpolate(t, n, r, o) {
    let i, s, a;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const S = Dc(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(S, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : S;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), w = g.join(this.formatSeparator).trim();
      return this.format(Dc(n, c, h, this.options.keySeparator, this.options.ignoreJSONStructure), w, r, {
        ...o,
        ...n,
        interpolationkey: h
      });
    };
    this.resetRegExp();
    const d = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, f = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => l(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? l(this.escape(m)) : l(m)
    }].forEach((m) => {
      for (a = 0; i = m.regex.exec(t); ) {
        const g = i[1].trim();
        if (s = u(g), s === void 0)
          if (typeof d == "function") {
            const w = d(t, i, o);
            s = typeof w == "string" ? w : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            s = "";
          else if (f) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = wc(s));
        const h = m.safeValue(s);
        if (t = t.replace(i[0], h), f ? (m.regex.lastIndex += s.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, i, s;
    function a(c, l) {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0)
        return c;
      const d = c.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      c = d[0], f = this.interpolate(f, s);
      const p = f.match(/'/g), m = f.match(/"/g);
      (p && p.length % 2 === 0 && !m || m.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), l && (s = {
          ...l,
          ...s
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, g), `${c}${u}${f}`;
      }
      return delete s.defaultValue, c;
    }
    for (; o = this.nestingRegexp.exec(t); ) {
      let c = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((d) => d.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (i = n(a.call(this, o[1].trim(), s), s), i && o[0] === t && typeof i != "string")
        return i;
      typeof i != "string" && (i = wc(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function yg(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((s) => {
      if (!s)
        return;
      const [a, ...c] = s.split(":"), l = c.join(":").trim().replace(/^'+|'+$/g, "");
      n[a.trim()] || (n[a.trim()] = l), l === "false" && (n[a.trim()] = !1), l === "true" && (n[a.trim()] = !0), isNaN(l) || (n[a.trim()] = parseInt(l, 10));
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function pn(e) {
  const t = {};
  return function(r, o, i) {
    const s = o + JSON.stringify(i);
    let a = t[s];
    return a || (a = e(Wr(o), i), t[s] = a), a(r);
  };
}
class vg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = pt.create("formatter"), this.options = t, this.formats = {
      number: pn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      currency: pn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: pn((n, r) => {
        const o = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      relativetime: pn((n, r) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i, r.range || "day");
      }),
      list: pn((n, r) => {
        const o = new Intl.ListFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = pn(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = yg(c);
      if (this.formats[l]) {
        let d = a;
        try {
          const f = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, p = f.locale || f.lng || o.locale || o.lng || r;
          d = this.formats[l](a, p, {
            ...u,
            ...o,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, t);
  }
}
function wg(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Sg extends po {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = pt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {}, s = {}, a = {}, c = {};
    return t.forEach((l) => {
      let u = !0;
      n.forEach((d) => {
        const f = `${l}|${d}`;
        !r.reload && this.store.hasResourceBundle(l, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, u = !1, s[f] === void 0 && (s[f] = !0), i[f] === void 0 && (i[f] = !0), c[d] === void 0 && (c[d] = !0)));
      }), u || (a[l] = !0);
    }), (Object.keys(i).length || Object.keys(s).length) && this.queue.push({
      pending: s,
      pendingCount: Object.keys(s).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(s),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(t, n, r) {
    const o = t.split("|"), i = o[0], s = o[1];
    n && this.emit("failedLoading", i, s, n), r && this.store.addResourceBundle(i, s, r), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((c) => {
      ig(c.loaded, [i], s), wg(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((d) => {
          a[l][d] === void 0 && (a[l][d] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((c) => !c.done);
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length)
      return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: i,
        callback: s
      });
      return;
    }
    this.readingCalls++;
    const a = (l, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (l && u && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, o + 1, i * 2, s);
        }, i);
        return;
      }
      s(l, u);
    }, c = this.backend[r].bind(this.backend);
    if (c.length === 2) {
      try {
        const l = c(t, n);
        l && typeof l.then == "function" ? l.then((u) => a(null, u)).catch(a) : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return c(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const i = this.queueLoad(t, n, r, o);
    if (!i.toLoad.length)
      return i.pending.length || o(), null;
    i.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), o = r[0], i = r[1];
    this.read(o, i, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`, s), !s && a && this.logger.log(`${n}loaded namespace ${i} for language ${o}`, a), this.loaded(t, s, a);
    });
  }
  saveMissing(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const c = {
          ...s,
          isUpdate: i
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let u;
            l.length === 5 ? u = l(t, n, r, o, c) : u = l(t, n, r, o), u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          l(t, n, r, o, a, c);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
function Pc() {
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
    overloadTranslationOptionHandler: function(t) {
      let n = {};
      if (typeof t[1] == "object" && (n = t[1]), typeof t[1] == "string" && (n.defaultValue = t[1]), typeof t[2] == "string" && (n.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
        const r = t[3] || t[2];
        Object.keys(r).forEach((o) => {
          n[o] = r[o];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e, t, n, r) => e,
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
function Rc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function xr() {
}
function xg(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Gn extends po {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Rc(t), this.services = {}, this.logger = pt, this.modules = {
      external: []
    }, xg(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const o = Pc();
    this.options = {
      ...o,
      ...this.options,
      ...Rc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? pt.init(i(this.modules.logger), this.options) : pt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = vg);
      const d = new Ec(this.options);
      this.store = new xc(this.options.resources, this.options);
      const f = this.services;
      f.logger = pt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new hg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new bg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Sg(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new zr(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = xr), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = function() {
        return t.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = function() {
        return t.store[u](...arguments), t;
      };
    });
    const c = $n(), l = () => {
      const u = (d, f) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xr;
    const o = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const i = [], s = (a) => {
        if (!a || a === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
          l !== "cimode" && i.indexOf(l) < 0 && i.push(l);
        });
      };
      o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => s(c)), this.options.preload && this.options.preload.forEach((a) => s(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const o = $n();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = xr), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Du.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const o = $n();
    this.emit("languageChanging", t);
    const i = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, s = (c, l) => {
      l ? (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return r.t(...arguments);
      }), n && n(c, function() {
        return r.t(...arguments);
      });
    }, a = (c) => {
      !t && !c && this.services.languageDetector && (c = []);
      const l = typeof c == "string" ? c : this.services.languageUtils.getBestMatchFromCodes(c);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (u) => {
        s(u, l);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), o;
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function(s, a) {
      let c;
      if (typeof a != "object") {
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), d = 2; d < l; d++)
          u[d - 2] = arguments[d];
        c = o.options.overloadTranslationOptionHandler([s, a].concat(u));
      } else
        c = {
          ...a
        };
      c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix = c.keyPrefix || r || i.keyPrefix;
      const f = o.options.keySeparator || ".";
      let p;
      return c.keyPrefix && Array.isArray(s) ? p = s.map((m) => `${c.keyPrefix}${f}${m}`) : p = c.keyPrefix ? `${c.keyPrefix}${f}${s}` : s, o.t(p, c);
    };
    return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
      return !0;
    const s = (a, c) => {
      const l = this.services.backendConnector.state[`${a}|${c}`];
      return l === -1 || l === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0)
        return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!o || s(i, t)));
  }
  loadNamespaces(t, n) {
    const r = $n();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = $n();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Ec(Pc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Gn(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xr;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Gn(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new xc(this.store.data, o), i.services.resourceStore = i.store), i.translator = new zr(i.services, o), i.translator.on("*", function(a) {
      for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++)
        l[u - 1] = arguments[u];
      i.emit(a, ...l);
    }), i.init(o, n), i.translator.options = o, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
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
const Se = Gn.createInstance();
Se.createInstance = Gn.createInstance;
Se.createInstance;
Se.dir;
Se.init;
Se.loadResources;
Se.reloadResources;
Se.use;
Se.changeLanguage;
Se.getFixedT;
Se.t;
Se.exists;
Se.setDefaultNamespace;
Se.hasLoadedNamespace;
Se.loadNamespaces;
Se.loadLanguages;
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ot.apply(this, arguments);
}
function Cg() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Ac = {};
function Ui() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Ac[t[0]] || (typeof t[0] == "string" && (Ac[t[0]] = /* @__PURE__ */ new Date()), Cg(...t));
}
const Pu = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Tc(e, t, n) {
  e.loadNamespaces(t, Pu(e, n));
}
function Oc(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Pu(e, r));
}
function Eg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], o = t.options ? t.options.fallbackLng : !1, i = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  const s = (a, c) => {
    const l = t.services.backendConnector.state[`${a}|${c}`];
    return l === -1 || l === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!o || s(i, e)));
}
function Ig(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Ui("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : Eg(e, t, n);
}
const Dg = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Pg = {
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
}, Rg = (e) => Pg[e], Ag = (e) => e.replace(Dg, Rg);
let qi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ag
};
function Tg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  qi = {
    ...qi,
    ...e
  };
}
function Og() {
  return qi;
}
let Ru;
function Ng(e) {
  Ru = e;
}
function $g() {
  return Ru;
}
const _g = {
  type: "3rdParty",
  init(e) {
    Tg(e.options.react), Ng(e);
  }
}, Lg = an();
class kg {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Mg = (e, t) => {
  const n = W();
  return V(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function zt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = bt(Lg) || {}, i = n || r || $g();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new kg()), !i) {
    Ui("You will need to pass in an i18next instance by using initReactI18next");
    const b = (x, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(x) ? x[x.length - 1] : x, y = [b, {}, !1];
    return y.t = b, y.i18n = {}, y.ready = !1, y;
  }
  i.options.react && i.options.react.wait !== void 0 && Ui("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Og(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = e || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((b) => Ig(b, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, p] = U(d);
  let m = l.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = Mg(m), h = W(!0);
  V(() => {
    const {
      bindI18n: b,
      bindI18nStore: y
    } = s;
    h.current = !0, !u && !a && (t.lng ? Oc(i, t.lng, l, () => {
      h.current && p(d);
    }) : Tc(i, l, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function x() {
      h.current && p(d);
    }
    return b && i && i.on(b, x), y && i && i.store.on(y, x), () => {
      h.current = !1, b && i && b.split(" ").forEach((C) => i.off(C, x)), y && i && y.split(" ").forEach((C) => i.store.off(C, x));
    };
  }, [i, m]);
  const w = W(!0);
  V(() => {
    h.current && !w.current && p(d), w.current = !1;
  }, [i, c]);
  const S = [f, i, u];
  if (S.t = f, S.i18n = i, S.ready = u, u || !u && !a)
    return S;
  throw new Promise((b) => {
    t.lng ? Oc(i, t.lng, l, () => b()) : Tc(i, l, () => b());
  });
}
Se.use(_g).init({
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
function gt(e) {
  return Object.keys(e);
}
function hi(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Ss(e, t) {
  const n = { ...e }, r = t;
  return hi(e) && hi(t) && Object.keys(t).forEach((o) => {
    hi(r[o]) && o in e ? n[o] = Ss(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function Fg(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function Bg(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function jg(e) {
  const t = Bg(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function bi(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function Au(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return "0";
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? bi(o) : o;
    }
    if (typeof r == "string") {
      if (r.startsWith("calc(") || r.startsWith("var(") || r.startsWith("clamp("))
        return r;
      if (r.includes(" "))
        return r.split(" ").map((i) => n(i)).join(" ");
      if (r.includes(e))
        return t ? bi(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? bi(i) : i;
      }
    }
    return r;
  }
  return n;
}
const D = Au("rem", { shouldScale: !0 }), Nc = Au("em");
function xs(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Tu(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Vt(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== v.Fragment : !1;
}
function Gt(e) {
  const t = an(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ v.createElement(t.Provider, { value: i }, o), () => {
    const o = bt(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Cs(e = null) {
  const t = an(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ v.createElement(t.Provider, { value: i }, o), () => bt(t)];
}
function Vr(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function Ki(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function Wg(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].disabled)
      return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].disabled)
        return r;
  }
  return e;
}
function zg(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].disabled)
      return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].disabled)
        return r;
  }
  return e;
}
function Vg(e, t, n) {
  return Ki(e, n) === Ki(t, n);
}
function Ou({
  parentSelector: e,
  siblingSelector: t,
  onKeyDown: n,
  loop: r = !0,
  activateOnFocus: o = !1,
  dir: i = "rtl",
  orientation: s
}) {
  return (a) => {
    var m;
    n == null || n(a);
    const c = Array.from(
      ((m = Ki(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => Vg(a.currentTarget, g, e)), l = c.findIndex((g) => a.currentTarget === g), u = zg(l, c, r), d = Wg(l, c, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
    switch (a.key) {
      case "ArrowRight": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[f].focus(), o && c[f].click());
        break;
      }
      case "ArrowLeft": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[p].focus(), o && c[p].click());
        break;
      }
      case "ArrowUp": {
        s === "vertical" && (a.stopPropagation(), a.preventDefault(), c[d].focus(), o && c[d].click());
        break;
      }
      case "ArrowDown": {
        s === "vertical" && (a.stopPropagation(), a.preventDefault(), c[u].focus(), o && c[u].click());
        break;
      }
      case "Home": {
        a.stopPropagation(), a.preventDefault(), !c[0].disabled && c[0].focus();
        break;
      }
      case "End": {
        a.stopPropagation(), a.preventDefault();
        const g = c.length - 1;
        !c[g].disabled && c[g].focus();
        break;
      }
    }
  };
}
const Gg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Es(e) {
  return Gg[e];
}
const Hg = () => {
};
function Ug(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || Hg : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function le(e, t = "size", n = !0) {
  if (e !== void 0)
    return Tu(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function Nu(e) {
  return le(e, "mantine-spacing");
}
function dt(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : le(e, "mantine-radius");
}
function Xe(e) {
  return le(e, "mantine-font-size");
}
function qg(e) {
  return le(e, "mantine-line-height", !1);
}
function Kg(e) {
  if (e)
    return le(e, "mantine-shadow", !1);
}
function Gr(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function $u(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = $u(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function yt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = $u(e)) && (r && (r += " "), r += t);
  return r;
}
const Yg = {};
function Xg(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = yt(t[r], o) : t[r] = o;
    });
  }), t;
}
function mo({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || Yg
  );
  return Xg(i);
}
function Hr({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function _u() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Zt(e) {
  const t = W(e);
  return V(() => {
    t.current = e;
  }), Vn(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function go(e, t) {
  const n = Zt(e), r = W(0);
  return V(() => () => window.clearTimeout(r.current), []), Z(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const $c = ["mousedown", "touchstart"];
function Jg(e, t, n) {
  const r = W();
  return V(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((l) => !!l && !i.composedPath().includes(l)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || $c).forEach((i) => document.addEventListener(i, o)), () => {
      (t || $c).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function Qg(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Zg(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function eh(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = U(
    n ? t : Zg(e, t)
  ), i = W();
  return V(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), Qg(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const sr = typeof document < "u" ? uo : V;
function Lt(e, t) {
  const n = W(!1);
  V(
    () => () => {
      n.current = !1;
    },
    []
  ), V(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
function th({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = W(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Lt(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [e, t]), r;
}
function nh(e, t = "body > :not(script)") {
  const n = _u(), r = Array.from(
    document.querySelectorAll(t)
  ).map((o) => {
    var c;
    if ((c = o == null ? void 0 : o.shadowRoot) != null && c.contains(e) || o.contains(e))
      return;
    const i = o.getAttribute("aria-hidden"), s = o.getAttribute("data-hidden"), a = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", n), i === null || i === "false" ? o.setAttribute("aria-hidden", "true") : !s && !a && o.setAttribute("data-hidden", i), {
      node: o,
      ariaHidden: s || null
    };
  });
  return () => {
    r.forEach((o) => {
      !o || n !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const rh = /input|select|textarea|button|object/, Lu = "a, input, select, textarea, button, object, [tabindex]";
function oh(e) {
  return e.style.display === "none";
}
function ih(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (oh(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function ku(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Yi(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(ku(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (rh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && ih(e);
}
function Mu(e) {
  const t = ku(e);
  return (Number.isNaN(t) || t >= 0) && Yi(e);
}
function sh(e) {
  return Array.from(e.querySelectorAll(Lu)).filter(Mu);
}
function ah(e, t) {
  const n = sh(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1], o = e.getRootNode();
  let i = r === o.activeElement || e === o.activeElement;
  const s = o.activeElement;
  if (s.tagName === "INPUT" && s.getAttribute("type") === "radio" && (i = n.filter(
    (u) => u.getAttribute("type") === "radio" && u.getAttribute("name") === s.getAttribute("name")
  ).includes(r)), !i)
    return;
  t.preventDefault();
  const c = n[t.shiftKey ? n.length - 1 : 0];
  c && c.focus();
}
function ch(e = !0) {
  const t = W(), n = W(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Lu));
      s = a.find(Mu) || a.find(Yi) || null, !s && Yi(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = Z(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = nh(i), t.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i);
        }), t.current = i) : t.current = null);
      }
    },
    [e]
  );
  return V(() => {
    if (!e)
      return;
    t.current && setTimeout(() => r(t.current));
    const i = (s) => {
      s.key === "Tab" && t.current && ah(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const lh = v["useId".toString()] || (() => {
});
function uh() {
  const e = lh();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Ht(e) {
  const t = uh(), [n, r] = U(t);
  return sr(() => {
    r(_u());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function Fu(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Bu(...e) {
  return (t) => {
    e.forEach((n) => Fu(n, t));
  };
}
function Re(...e) {
  return Z(Bu(...e), e);
}
function kt({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {
  }
}) {
  const [o, i] = U(
    t !== void 0 ? t : n
  ), s = (a) => {
    i(a), r == null || r(a);
  };
  return e !== void 0 ? [e, r, !0] : [o, s, !1];
}
function ju(e, t) {
  return eh("(prefers-reduced-motion: reduce)", e, t);
}
function dh(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = U(e), s = Z(() => {
    i((l) => l || (n == null || n(), !0));
  }, [n]), a = Z(() => {
    i((l) => l && (r == null || r(), !1));
  }, [r]), c = Z(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: c }];
}
const Wu = an(null);
function Is() {
  const e = bt(Wu);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function fh() {
  return Is().cssVariablesResolver;
}
function ph() {
  return Is().classNamesPrefix;
}
function Ds() {
  return Is().getStyleNonce;
}
function mh(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function gh(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const s = t.split("");
    t = [
      s[0],
      s[0],
      s[1],
      s[1],
      s[2],
      s[2]
    ].join("");
  }
  const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, i = n & 255;
  return {
    r,
    g: o,
    b: i,
    a: 1
  };
}
function hh(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function bh(e) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = e.match(t);
  if (!n)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(n[1], 10), o = parseInt(n[2], 10) / 100, i = parseInt(n[3], 10) / 100, s = n[5] ? parseFloat(n[5]) : void 0, a = (1 - Math.abs(2 * i - 1)) * o, c = r / 60, l = a * (1 - Math.abs(c % 2 - 1)), u = i - a / 2;
  let d, f, p;
  return c >= 0 && c < 1 ? (d = a, f = l, p = 0) : c >= 1 && c < 2 ? (d = l, f = a, p = 0) : c >= 2 && c < 3 ? (d = 0, f = a, p = l) : c >= 3 && c < 4 ? (d = 0, f = l, p = a) : c >= 4 && c < 5 ? (d = l, f = 0, p = a) : (d = a, f = 0, p = l), {
    r: Math.round((d + u) * 255),
    g: Math.round((f + u) * 255),
    b: Math.round((p + u) * 255),
    a: s || 1
  };
}
function zu(e) {
  return mh(e) ? gh(e) : e.startsWith("rgb") ? hh(e) : e.startsWith("hsl") ? bh(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Cr(e, t) {
  if (e.startsWith("var("))
    return e;
  const { r: n, g: r, b: o, a: i } = zu(e), s = 1 - t, a = (c) => Math.round(c * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function Xi(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function Ps({
  color: e,
  theme: t,
  colorScheme: n
}) {
  if (typeof e != "string")
    throw new Error(`[@mantine/core] Failed to parse color. Instead got ${typeof e}`);
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      variable: `--mantine-color-${e}`
    };
  const [r, o] = e.split("."), i = o ? Number(o) : void 0, s = r in t.colors;
  return s ? {
    color: r,
    value: i !== void 0 ? t.colors[r][i] : t.colors[r][Xi(t, n || "light")],
    shade: i,
    isThemeColor: s,
    variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`
  } : {
    color: e,
    value: e,
    isThemeColor: s,
    shade: i,
    variable: void 0
  };
}
function Mt(e, t) {
  const n = Ps({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Ji(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = Mt(n.from, t), o = Mt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Ne(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: n, g: r, b: o } = zu(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const yh = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = Ps({ color: e, theme: t });
  if (n === "filled")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: `var(--mantine-color-${e}-filled)`,
      hover: `var(--mantine-color-${e}-filled-hover)`,
      color: "var(--mantine-color-white)",
      border: `${D(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${o.color}-${o.shade})`,
      hover: `var(--mantine-color-${o.color}-${o.shade === 9 ? 8 : o.shade + 1})`,
      color: "var(--mantine-color-white)",
      border: `${D(1)} solid transparent`
    } : {
      background: e,
      hover: Cr(e, 0.1),
      color: "var(--mantine-color-white)",
      border: `${D(1)} solid transparent`
    };
  if (n === "light") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: `var(--mantine-color-${e}-light)`,
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${D(1)} solid transparent`
        };
      const i = t.colors[o.color][o.shade];
      return {
        background: Ne(i, 0.1),
        hover: Ne(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: Ne(e, 0.1),
      hover: Ne(e, 0.12),
      color: e,
      border: `${D(1)} solid transparent`
    };
  }
  if (n === "outline")
    return o.isThemeColor ? o.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${e}-outline-hover)`,
      color: `var(--mantine-color-${e}-outline)`,
      border: `${D(1)} solid var(--mantine-color-${e}-outline)`
    } : {
      background: "transparent",
      hover: Ne(t.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${D(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: Ne(e, 0.05),
      color: e,
      border: `${D(1)} solid ${e}`
    };
  if (n === "subtle") {
    if (o.isThemeColor) {
      if (o.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${D(1)} solid transparent`
        };
      const i = t.colors[o.color][o.shade];
      return {
        background: "transparent",
        hover: Ne(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Ne(e, 0.12),
      color: e,
      border: `${D(1)} solid transparent`
    };
  }
  return n === "transparent" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${e}-light-color)`,
    border: `${D(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
    border: `${D(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: e,
    border: `${D(1)} solid transparent`
  } : n === "white" ? o.isThemeColor ? o.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Cr(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Cr(t.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Cr(t.white, 0.01),
    color: e,
    border: `${D(1)} solid transparent`
  } : n === "gradient" ? {
    background: Ji(r, t),
    hover: Ji(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${D(1)} solid var(--mantine-color-default-border)`
  } : {};
}, vh = {
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
}, _c = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Rs = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: vh,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: yh,
  fontFamily: _c,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: _c,
    fontWeight: "700",
    sizes: {
      h1: { fontSize: D(34), lineHeight: "1.3" },
      h2: { fontSize: D(26), lineHeight: "1.35" },
      h3: { fontSize: D(22), lineHeight: "1.4" },
      h4: { fontSize: D(18), lineHeight: "1.45" },
      h5: { fontSize: D(16), lineHeight: "1.5" },
      h6: { fontSize: D(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: D(12),
    sm: D(14),
    md: D(16),
    lg: D(18),
    xl: D(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: D(2),
    sm: D(4),
    md: D(8),
    lg: D(16),
    xl: D(32)
  },
  spacing: {
    xs: D(10),
    sm: D(12),
    md: D(16),
    lg: D(20),
    xl: D(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${D(1)} ${D(3)} rgba(0, 0, 0, 0.05), 0 ${D(1)} ${D(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${D(1)} ${D(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${D(10)} ${D(
      15
    )} ${D(-5)}, rgba(0, 0, 0, 0.04) 0 ${D(7)} ${D(7)} ${D(-5)}`,
    md: `0 ${D(1)} ${D(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${D(20)} ${D(
      25
    )} ${D(-5)}, rgba(0, 0, 0, 0.04) 0 ${D(10)} ${D(10)} ${D(-5)}`,
    lg: `0 ${D(1)} ${D(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${D(28)} ${D(
      23
    )} ${D(-7)}, rgba(0, 0, 0, 0.04) 0 ${D(12)} ${D(12)} ${D(-7)}`,
    xl: `0 ${D(1)} ${D(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${D(36)} ${D(
      28
    )} ${D(-7)}, rgba(0, 0, 0, 0.04) 0 ${D(17)} ${D(17)} ${D(-7)}`
  },
  other: {},
  components: {}
};
function Lc(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function wh({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return Lc(r) ? r : n;
      } catch {
        return n;
      }
    },
    set: (n) => {
      try {
        window.localStorage.setItem(e, n);
      } catch (r) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          r
        );
      }
    },
    subscribe: (n) => {
      t = (r) => {
        r.storageArea === window.localStorage && r.key === e && Lc(r.newValue) && n(r.newValue);
      }, window.addEventListener("storage", t);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", t);
    },
    clear: () => {
      window.localStorage.removeItem(e);
    }
  };
}
const Sh = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", kc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function yi(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Mc(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Sh);
  if (typeof e.primaryShade == "object" && (!yi(e.primaryShade.dark) || !yi(e.primaryShade.light)))
    throw new Error(kc);
  if (typeof e.primaryShade == "number" && !yi(e.primaryShade))
    throw new Error(kc);
}
function xh(e, t) {
  var r;
  if (!t)
    return Mc(e), e;
  const n = Ss(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Mc(n), n;
}
const As = an(null), Ch = () => bt(As) || Rs;
function vt() {
  const e = bt(As);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Vu({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = Ch(), o = Vn(
    () => xh(n ? r : Rs, e),
    [e, r, n]
  );
  return /* @__PURE__ */ v.createElement(As.Provider, { value: o }, t);
}
Vu.displayName = "@mantine/core/MantineThemeProvider";
function Eh() {
  const e = vt(), t = Ds(), n = gt(e.breakpoints).reduce((r, o) => {
    const i = jg(e.breakpoints[o]);
    return `${r}@media (max-width: ${Nc(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Nc(
      i
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ v.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function vi(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function wi(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Ih(e, t) {
  const n = vi(e.variables), r = n ? wi(t, n) : "", o = vi(e.dark), i = o ? wi(`${t}[data-mantine-color-scheme="dark"]`, o) : "", s = vi(e.light), a = s ? wi(`${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function mn(e, t, n) {
  gt(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const Gu = (e) => {
  const t = Xi(e, "dark"), n = Xi(e, "light"), r = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : D(e.defaultRadius), o = {
    variables: {
      "--mantine-scale": e.scale.toString(),
      "--mantine-cursor-type": e.cursorType,
      "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
      "--mantine-color-scheme": "light dark",
      "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": e.white,
      "--mantine-color-black": e.black,
      "--mantine-line-height": e.lineHeights.md,
      "--mantine-font-family": e.fontFamily,
      "--mantine-font-family-monospace": e.fontFamilyMonospace,
      "--mantine-font-family-headings": e.headings.fontFamily,
      "--mantine-heading-font-weight": e.headings.fontWeight,
      "--mantine-radius-default": r,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": e.black,
      "--mantine-color-body": e.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${n})`,
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
      "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)"
    }
  };
  mn(o.variables, e.breakpoints, "breakpoint"), mn(o.variables, e.spacing, "spacing"), mn(o.variables, e.fontSizes, "font-size"), mn(o.variables, e.lineHeights, "line-height"), mn(o.variables, e.shadows, "shadow"), mn(o.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((s, a) => {
    o.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${e.primaryColor}-${a})`;
  }), gt(e.colors).forEach((s) => {
    e.colors[s].forEach((l, u) => {
      o.variables[`--mantine-color-${s}-${u}`] = l;
    });
    const a = `var(--mantine-color-${s}-${n === 9 ? 8 : n + 1})`, c = `var(--mantine-color-${s}-${t === 9 ? 8 : t + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-filled-hover`] = a, o.light[`--mantine-color-${s}-light`] = Ne(
      e.colors[s][n],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = Ne(
      e.colors[s][n],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline-hover`] = Ne(
      e.colors[s][n],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.dark[`--mantine-color-${s}-filled-hover`] = c, o.dark[`--mantine-color-${s}-light`] = Ne(
      e.colors[s][Math.max(0, t - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = Ne(
      e.colors[s][Math.max(0, t - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      t - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      t - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = Ne(
      e.colors[s][Math.max(t - 4, 0)],
      0.05
    );
  });
  const i = e.headings.sizes;
  return gt(i).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = i[s].fontSize, o.variables[`--mantine-${s}-line-height`] = i[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = i[s].fontWeight || e.headings.fontWeight;
  }), o;
};
function Dh({ theme: e, generator: t }) {
  const n = Gu(e), r = t == null ? void 0 : t(e);
  return r ? Ss(n, r) : n;
}
const Si = Gu(Rs);
function Ph(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return gt(e.variables).forEach((n) => {
    Si.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), gt(e.light).forEach((n) => {
    Si.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), gt(e.dark).forEach((n) => {
    Si.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function Rh(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Hu({ cssVariablesSelector: e }) {
  const t = vt(), n = Ds(), r = fh(), o = Dh({ theme: t, generator: r }), i = e === ":root", s = i ? Ph(o) : o, a = Ih(s, e);
  return a ? /* @__PURE__ */ v.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${a}${i ? "" : Rh(e)}`
      }
    }
  ) : null;
}
Hu.displayName = "@mantine/CssVariables";
function Ah() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function _n(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function Th({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = W(), [i, s] = U(() => e.get(t)), a = r || i, c = Z(
    (u) => {
      r || (_n(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), l = Z(() => {
    s(t), _n(t, n), e.clear();
  }, [e.clear, t]);
  return V(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), sr(() => {
    _n(e.get(t), n);
  }, []), V(() => {
    var d;
    if (r)
      return _n(r, n), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && _n(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function Oh({
  respectReducedMotion: e,
  getRootElement: t
}) {
  sr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
Ah();
function Uu({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = wh(),
  defaultColorScheme: a = "light",
  getRootElement: c = () => document.documentElement,
  cssVariablesResolver: l,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = Th({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: c
  });
  return Oh({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: c
  }), /* @__PURE__ */ v.createElement(
    Wu.Provider,
    {
      value: {
        colorSchemeManager: s,
        colorScheme: d,
        setColorScheme: f,
        clearColorScheme: p,
        getRootElement: c,
        classNamesPrefix: i,
        getStyleNonce: n,
        cssVariablesResolver: l,
        cssVariablesSelector: o
      }
    },
    /* @__PURE__ */ v.createElement(Vu, { theme: e }, r && /* @__PURE__ */ v.createElement(Hu, { cssVariablesSelector: o }), /* @__PURE__ */ v.createElement(Eh, null), t)
  );
}
Uu.displayName = "@mantine/core/MantineProvider";
function qu({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = vt();
  return {
    resolvedClassNames: mo({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0
    }),
    resolvedStyles: Hr({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const Nh = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function $h({ theme: e, options: t, unstyled: n }) {
  return yt(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || Nh[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function _h({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return mo({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e];
}
function Lh({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return mo({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function kh({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function Mh({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function Fh({
  themeName: e,
  classNamesPrefix: t,
  selector: n
}) {
  return e.map((r) => `${t}-${r}-${n}`);
}
function Bh({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (i) => {
      var s, a;
      return (a = mo({
        theme: t,
        classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function jh({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function Wh({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: s,
  unstyled: a,
  className: c,
  rootSelector: l,
  props: u,
  stylesCtx: d
}) {
  return yt(
    $h({ theme: e, options: t, unstyled: a }),
    Bh({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    jh({ options: t, classes: s, selector: r, unstyled: a }),
    Lh({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    _h({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    kh({ rootSelector: l, selector: r, className: c }),
    Mh({ selector: r, classes: s, unstyled: a }),
    Fh({ themeName: n, classNamesPrefix: o, selector: r }),
    t == null ? void 0 : t.className
  );
}
function zh({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (i) => {
      var s;
      return Hr({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, s) => ({ ...i, ...s }), {});
}
function Qi({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Qi({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Vh(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...xs(n[r]) };
  }), t), {});
}
function Gh({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s
}) {
  var a;
  return (a = Vh([
    t == null ? void 0 : t(n, r, o),
    ...s.map((c) => {
      var l, u, d;
      return (d = (u = (l = n.components) == null ? void 0 : l[c]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : a[i];
}
function Hh({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: s,
  styles: a,
  style: c,
  vars: l,
  varsResolver: u
}) {
  return {
    ...zh({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...Hr({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...Hr({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...Gh({ theme: e, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? Qi({ style: c, theme: e }) : null,
    ...Qi({ style: r == null ? void 0 : r.style, theme: e })
  };
}
function Q({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: i,
  rootSelector: s = "root",
  unstyled: a,
  classNames: c,
  styles: l,
  vars: u,
  varsResolver: d
}) {
  const f = vt(), p = ph(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: Wh({
      theme: f,
      options: h,
      themeName: m,
      selector: g,
      classNamesPrefix: p,
      classNames: c,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: s,
      props: n,
      stylesCtx: r
    }),
    style: Hh({
      theme: f,
      themeName: m,
      selector: g,
      options: h,
      props: n,
      stylesCtx: r,
      rootSelector: s,
      styles: l,
      style: i,
      vars: u,
      varsResolver: d
    })
  });
}
function j(e, t, n) {
  var s;
  const r = vt(), o = (s = r.components[e]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...xs(n) };
}
function Fc(e) {
  return gt(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${Fg(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function Uh({ selector: e, styles: t, media: n }) {
  const r = t ? Fc(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${Fc(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function qh({ selector: e, styles: t, media: n }) {
  const r = Ds();
  return /* @__PURE__ */ v.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: Uh({ selector: e, styles: t, media: n }) }
    }
  );
}
function ho(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    p: c,
    px: l,
    py: u,
    pt: d,
    pb: f,
    pl: p,
    pr: m,
    bg: g,
    c: h,
    opacity: w,
    ff: S,
    fz: b,
    fw: y,
    lts: x,
    ta: C,
    lh: I,
    fs: E,
    tt: T,
    td: $,
    w: N,
    miw: L,
    maw: k,
    h: A,
    mih: _,
    mah: R,
    bgsz: B,
    bgp: O,
    bgr: H,
    bga: X,
    pos: ne,
    top: be,
    left: ue,
    bottom: Ae,
    right: ye,
    inset: re,
    display: ve,
    hiddenFrom: Le,
    visibleFrom: xe,
    lightHidden: Ce,
    darkHidden: ke,
    ...ae
  } = e;
  return { styleProps: xs({
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    p: c,
    px: l,
    py: u,
    pt: d,
    pb: f,
    pl: p,
    pr: m,
    bg: g,
    c: h,
    opacity: w,
    ff: S,
    fz: b,
    fw: y,
    lts: x,
    ta: C,
    lh: I,
    fs: E,
    tt: T,
    td: $,
    w: N,
    miw: L,
    maw: k,
    h: A,
    mih: _,
    mah: R,
    bgsz: B,
    bgp: O,
    bgr: H,
    bga: X,
    pos: ne,
    top: be,
    left: ue,
    bottom: Ae,
    right: ye,
    inset: re,
    display: ve,
    hiddenFrom: Le,
    visibleFrom: xe,
    lightHidden: Ce,
    darkHidden: ke
  }), rest: ae };
}
const Kh = {
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
function Yh(e, t) {
  const n = Ps({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : n.variable ? `var(${n.variable})` : n.color;
}
function Xh(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? D(e) : e;
}
function Jh(e) {
  return e;
}
function Qh(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : e;
}
function Zh(e) {
  return typeof e == "number" ? D(e) : e;
}
function eb(e, t) {
  if (typeof e == "number")
    return D(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing))
      return D(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const xi = {
  color: Yh,
  fontSize: Xh,
  spacing: eb,
  identity: Jh,
  size: Zh,
  lineHeight: Qh
};
function Bc(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function tb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(Bc(o)) - Number(Bc(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function nb(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function rb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function ob(e) {
  return typeof e == "object" && e !== null ? gt(e).filter((t) => t !== "base") : [];
}
function ib(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function sb({
  styleProps: e,
  data: t,
  theme: n
}) {
  return tb(
    gt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = rb(e[o]);
        if (!nb(e[o]))
          return s.forEach((l) => {
            r.inlineStyles[l] = xi[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = ob(e[o]);
        return s.forEach((l) => {
          a && (r.styles[l] = xi[i.type](a, n)), c.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: xi[i.type](
                ib(e[o], u),
                n
              )
            };
          });
        }), r;
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
function ab() {
  return `__m__-${gu().replace(/:/g, "")}`;
}
function Ts(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Ts(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Ku(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function cb(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[Ku(n)] = e[n]), t;
  }, {});
}
function Yu(e) {
  return e ? typeof e == "string" ? { [Ku(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...Yu(n) }),
    {}
  ) : cb(e) : null;
}
function Zi(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Zi(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function lb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = Zi(t, e), i = Zi(n, e);
  return { ...o, ...i, ...r };
}
const Xu = ie(
  ({
    component: e,
    style: t,
    __vars: n,
    className: r,
    variant: o,
    mod: i,
    size: s,
    hiddenFrom: a,
    visibleFrom: c,
    lightHidden: l,
    darkHidden: u,
    renderRoot: d,
    ...f
  }, p) => {
    const m = vt(), g = e || "div", { styleProps: h, rest: w } = ho(f), S = ab(), b = sb({
      styleProps: h,
      theme: m,
      data: Kh
    }), y = {
      ref: p,
      style: lb({
        theme: m,
        style: t,
        vars: n,
        styleProps: b.inlineStyles
      }),
      className: yt(r, {
        [S]: b.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Tu(s) ? void 0 : s || void 0,
      ...Yu(i),
      ...w
    };
    return /* @__PURE__ */ v.createElement(v.Fragment, null, b.hasResponsiveStyles && /* @__PURE__ */ v.createElement(
      qh,
      {
        selector: `.${S}`,
        styles: b.styles,
        media: b.media
      }
    ), typeof d == "function" ? d(y) : /* @__PURE__ */ v.createElement(g, { ...y }));
  }
);
Xu.displayName = "@mantine/core/Box";
const G = Xu;
function Ju(e) {
  return e;
}
function q(e) {
  const t = ie(e);
  return t.extend = Ju, t;
}
function Ut(e) {
  const t = ie(e);
  return t.extend = Ju, t;
}
const ub = an({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function ar() {
  return bt(ub);
}
function db(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ci(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const Ln = typeof window < "u" && window.requestAnimationFrame;
function fb({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {
  },
  opened: r
}) {
  const o = W(null), i = 0, s = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [a, c] = U(r ? {} : s), l = (m) => {
    ys(() => c(m));
  }, u = (m) => {
    l((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || db(m)}ms ${t}`
    };
  }
  Lt(() => {
    typeof Ln == "function" && Ln(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), Ln(() => {
        const m = Ci(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Ci(o);
      u({ ...d(m), willChange: "height", height: m }), Ln(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Ci(o);
        g === a.height ? l({}) : u({ height: g }), n();
      } else
        a.height === i && (l(s), n());
  };
  function p({ style: m = {}, refKey: g = "ref", ...h } = {}) {
    const w = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: Bu(o, w),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const pb = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Qu = q((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = j("Collapse", pb, e), u = vt(), d = ju(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = fb({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ v.createElement(G, { ...l }, n) : null : /* @__PURE__ */ v.createElement(G, { ...m({ style: Ts(s, u), ref: t, ...l }) }, /* @__PURE__ */ v.createElement(
    "div",
    {
      style: {
        opacity: r || !c ? 1 : 0,
        transition: c ? `opacity ${p}ms ${i}` : "none"
      }
    },
    n
  ));
});
Qu.displayName = "@mantine/core/Collapse";
const [mb, tt] = Gt(
  "ScrollArea.Root component was not found in tree"
);
function bn(e, t) {
  const n = Zt(t);
  sr(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
const gb = v.forwardRef((e, t) => {
  const { style: n, ...r } = e, o = tt(), [i, s] = v.useState(0), [a, c] = v.useState(0), l = !!(i && a);
  return bn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), bn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ v.createElement("div", { ...r, ref: t, style: { ...n, width: i, height: a } }) : null;
}), hb = v.forwardRef(
  (e, t) => {
    const n = tt(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ v.createElement(gb, { ...e, ref: t }) : null;
  }
), bb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Zu = ie((e, t) => {
  const n = j("ScrollAreaRoot", bb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, c] = U(null), [l, u] = U(null), [d, f] = U(null), [p, m] = U(null), [g, h] = U(null), [w, S] = U(0), [b, y] = U(0), [x, C] = U(!1), [I, E] = U(!1), T = Re(t, ($) => c($));
  return /* @__PURE__ */ v.createElement(
    mb,
    {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: l,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: m,
        scrollbarXEnabled: x,
        onScrollbarXEnabledChange: C,
        scrollbarY: g,
        onScrollbarYChange: h,
        scrollbarYEnabled: I,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: S,
        onCornerHeightChange: y
      }
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        ...s,
        ref: T,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${w}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${b}px`
        }
      }
    )
  );
});
Zu.displayName = "@mantine/core/ScrollAreaRoot";
function ed(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function bo(e) {
  const t = ed(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function td(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function yb(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function jc(e, t, n = "ltr") {
  const r = bo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = yb(e, c);
  return td([0, s], [0, a])(l);
}
function vb(e, t, n, r = "ltr") {
  const o = bo(n), i = o / 2, s = t || i, a = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return td([c, l], d)(e);
}
function nd(e, t) {
  return e > 0 && e < t;
}
function Ur(e) {
  return e ? parseInt(e, 10) : 0;
}
function tn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [wb, rd] = Gt(
  "ScrollAreaScrollbar was not found in tree"
), od = ie((e, t) => {
  const {
    sizes: n,
    hasThumb: r,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: a,
    onDragScroll: c,
    onWheelScroll: l,
    onResize: u,
    ...d
  } = e, f = tt(), [p, m] = v.useState(null), g = Re(t, (E) => m(E)), h = v.useRef(null), w = v.useRef(""), { viewport: S } = f, b = n.content - n.viewport, y = Zt(l), x = Zt(a), C = go(u, 10), I = (E) => {
    if (h.current) {
      const T = E.clientX - h.current.left, $ = E.clientY - h.current.top;
      c({ x: T, y: $ });
    }
  };
  return V(() => {
    const E = (T) => {
      const $ = T.target;
      (p == null ? void 0 : p.contains($)) && y(T, b);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [S, p, b, y]), V(x, [n, x]), bn(p, C), bn(f.content, C), /* @__PURE__ */ v.createElement(
    wb,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: Zt(o),
        onThumbPointerUp: Zt(i),
        onThumbPositionChange: x,
        onThumbPointerDown: Zt(s)
      }
    },
    /* @__PURE__ */ v.createElement(
      "div",
      {
        ...d,
        ref: g,
        style: { position: "absolute", ...d.style },
        onPointerDown: tn(e.onPointerDown, (E) => {
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", I(E));
        }),
        onPointerMove: tn(e.onPointerMove, I),
        onPointerUp: tn(e.onPointerUp, (E) => {
          const T = E.target;
          T.hasPointerCapture(E.pointerId) && T.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = w.current, h.current = null;
        })
      }
    )
  );
}), Sb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = U(), l = W(null), u = Re(t, l, s.onScrollbarXChange);
    return V(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ v.createElement(
      od,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${bo(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), nd(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: Ur(a.paddingLeft),
              paddingEnd: Ur(a.paddingRight)
            }
          });
        }
      }
    );
  }
), xb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = v.useState(), l = W(null), u = Re(t, l, s.onScrollbarYChange);
    return V(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ v.createElement(
      od,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${bo(n)}px`,
          ...o
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), nd(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: Ur(a.paddingTop),
              paddingEnd: Ur(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), Os = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = ar(), i = tt(), s = W(null), a = W(0), [c, l] = U({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = ed(c.viewport, c.content), d = {
    ...r,
    sizes: c,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => {
      s.current = p;
    },
    onThumbPointerUp: () => {
      a.current = 0;
    },
    onThumbPointerDown: (p) => {
      a.current = p;
    }
  }, f = (p, m) => vb(p, a.current, c, m);
  return n === "horizontal" ? /* @__PURE__ */ v.createElement(
    Sb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = jc(p, c, o);
          s.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        i.viewport && (i.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        i.viewport && (i.viewport.scrollLeft = f(p, o));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ v.createElement(
    xb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = jc(p, c);
          s.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        i.viewport && (i.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        i.viewport && (i.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), id = ie(
  (e, t) => {
    const n = tt(), { forceMount: r, ...o } = e, [i, s] = U(!1), a = e.orientation === "horizontal", c = go(() => {
      if (n.viewport) {
        const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return bn(n.viewport, c), bn(n.content, c), r || i ? /* @__PURE__ */ v.createElement(
      Os,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), Cb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), [i, s] = U(!1);
    return V(() => {
      const { scrollArea: a } = o;
      let c = 0;
      if (a) {
        const l = () => {
          window.clearTimeout(c), s(!0);
        }, u = () => {
          c = window.setTimeout(() => s(!1), o.scrollHideDelay);
        };
        return a.addEventListener("pointerenter", l), a.addEventListener("pointerleave", u), () => {
          window.clearTimeout(c), a.removeEventListener("pointerenter", l), a.removeEventListener("pointerleave", u);
        };
      }
    }, [o.scrollArea, o.scrollHideDelay]), n || i ? /* @__PURE__ */ v.createElement(
      id,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Eb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), i = e.orientation === "horizontal", [s, a] = U("hidden"), c = go(() => a("idle"), 100);
    return V(() => {
      if (s === "idle") {
        const l = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [s, o.scrollHideDelay]), V(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let d = l[u];
        const f = () => {
          const p = l[u];
          d !== p && (a("scrolling"), c()), d = p;
        };
        return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
      }
    }, [o.viewport, i, c]), n || s !== "hidden" ? /* @__PURE__ */ v.createElement(
      Os,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: tn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: tn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Wc = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return v.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ v.createElement(Cb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ v.createElement(Eb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ v.createElement(id, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ v.createElement(Os, { ...r, ref: t }) : null;
  }
);
function Ib(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Db = ie((e, t) => {
  const { style: n, ...r } = e, o = tt(), i = rd(), { onThumbPositionChange: s } = i, a = Re(t, (u) => i.onThumbChange(u)), c = W(), l = go(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return V(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = Ib(u, s);
          c.current = f, s();
        }
      };
      return s(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, l, s]), /* @__PURE__ */ v.createElement(
    "div",
    {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...r,
      ref: a,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...n
      },
      onPointerDownCapture: tn(e.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), p = u.clientX - f.left, m = u.clientY - f.top;
        i.onThumbPointerDown({ x: p, y: m });
      }),
      onPointerUp: tn(e.onPointerUp, i.onThumbPointerUp)
    }
  );
}), zc = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = rd();
    return n || o.hasThumb ? /* @__PURE__ */ v.createElement(Db, { ref: t, ...r }) : null;
  }
), sd = ie(
  ({ children: e, style: t, ...n }, r) => {
    const o = tt(), i = Re(r, o.onViewportChange);
    return /* @__PURE__ */ v.createElement(
      G,
      {
        ...n,
        ref: i,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        }
      },
      /* @__PURE__ */ v.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange }, e)
    );
  }
);
sd.displayName = "@mantine/core/ScrollAreaViewport";
var Ns = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const ad = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Pb = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), cr = q((e, t) => {
  const n = j("ScrollArea", ad, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    scrollbarSize: c,
    vars: l,
    type: u,
    scrollHideDelay: d,
    viewportProps: f,
    viewportRef: p,
    onScrollPositionChange: m,
    children: g,
    offsetScrollbars: h,
    scrollbars: w,
    ...S
  } = n, [b, y] = U(!1), x = Q({
    name: "ScrollArea",
    props: n,
    classes: Ns,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Pb
  });
  return /* @__PURE__ */ v.createElement(
    Zu,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: w,
      ...x("root"),
      ...S
    },
    /* @__PURE__ */ v.createElement(
      sd,
      {
        ...f,
        ...x("viewport"),
        ref: p,
        "data-offset-scrollbars": h === !0 ? "xy" : h || void 0,
        "data-scrollbars": w || void 0,
        onScroll: typeof m == "function" ? ({ currentTarget: C }) => m({
          x: C.scrollLeft,
          y: C.scrollTop
        }) : void 0
      },
      g
    ),
    (w === "xy" || w === "x") && /* @__PURE__ */ v.createElement(
      Wc,
      {
        ...x("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1)
      },
      /* @__PURE__ */ v.createElement(zc, { ...x("thumb") })
    ),
    (w === "xy" || w === "y") && /* @__PURE__ */ v.createElement(
      Wc,
      {
        ...x("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1)
      },
      /* @__PURE__ */ v.createElement(zc, { ...x("thumb") })
    ),
    /* @__PURE__ */ v.createElement(
      hb,
      {
        ...x("corner"),
        "data-hovered": b || void 0,
        "data-hidden": u === "never" || void 0
      }
    )
  );
});
cr.displayName = "@mantine/core/ScrollArea";
const $s = q((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: a,
    dir: c,
    offsetScrollbars: l,
    viewportRef: u,
    onScrollPositionChange: d,
    unstyled: f,
    variant: p,
    viewportProps: m,
    scrollbars: g,
    style: h,
    vars: w,
    ...S
  } = j("ScrollAreaAutosize", ad, e);
  return /* @__PURE__ */ v.createElement(G, { ...S, ref: t, style: [{ display: "flex" }, h] }, /* @__PURE__ */ v.createElement(G, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ v.createElement(
    cr,
    {
      classNames: r,
      styles: o,
      scrollHideDelay: s,
      scrollbarSize: i,
      type: a,
      dir: c,
      offsetScrollbars: l,
      viewportRef: u,
      onScrollPositionChange: d,
      unstyled: f,
      variant: p,
      viewportProps: m,
      vars: w,
      scrollbars: g
    },
    n
  )));
});
cr.classes = Ns;
$s.displayName = "@mantine/core/ScrollAreaAutosize";
$s.classes = Ns;
cr.Autosize = $s;
var cd = { root: "m-87cf2631" };
const Rb = {
  __staticSelector: "UnstyledButton"
}, ln = Ut(
  (e, t) => {
    const n = j("UnstyledButton", Rb, e), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: c,
      style: l,
      ...u
    } = n, d = Q({
      name: i,
      props: n,
      classes: cd,
      className: r,
      style: l,
      classNames: a,
      styles: c,
      unstyled: s
    });
    return /* @__PURE__ */ v.createElement(
      G,
      {
        ...d("root", { focusable: !0 }),
        component: o,
        ref: t,
        type: o === "button" ? "button" : void 0,
        ...u
      }
    );
  }
);
ln.classes = cd;
ln.displayName = "@mantine/core/UnstyledButton";
const lt = Math.min, we = Math.max, qr = Math.round, Er = Math.floor, Ft = (e) => ({
  x: e,
  y: e
}), Ab = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Tb = {
  start: "end",
  end: "start"
};
function es(e, t, n) {
  return we(e, lt(t, n));
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ut(e) {
  return e.split("-")[0];
}
function Pn(e) {
  return e.split("-")[1];
}
function _s(e) {
  return e === "x" ? "y" : "x";
}
function Ls(e) {
  return e === "y" ? "height" : "width";
}
function un(e) {
  return ["top", "bottom"].includes(ut(e)) ? "y" : "x";
}
function ks(e) {
  return _s(un(e));
}
function Ob(e, t, n) {
  n === void 0 && (n = !1);
  const r = Pn(e), o = ks(e), i = Ls(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Kr(s)), [s, Kr(s)];
}
function Nb(e) {
  const t = Kr(e);
  return [ts(e), t, ts(t)];
}
function ts(e) {
  return e.replace(/start|end/g, (t) => Tb[t]);
}
function $b(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function _b(e, t, n, r) {
  const o = Pn(e);
  let i = $b(ut(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ts)))), i;
}
function Kr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ab[t]);
}
function Lb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ms(e) {
  return typeof e != "number" ? Lb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function yn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Vc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = un(t), s = ks(t), a = Ls(s), c = ut(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Pn(t)) {
    case "start":
      p[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const kb = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Vc(l, r, c), f = r, p = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: h,
      fn: w
    } = a[g], {
      x: S,
      y: b,
      data: y,
      reset: x
    } = await w({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = S ?? u, d = b ?? d, p = {
      ...p,
      [h]: {
        ...p[h],
        ...y
      }
    }, x && m <= 50) {
      m++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : x.rects), {
        x: u,
        y: d
      } = Vc(l, f, c)), g = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function Fs(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Ct(t, e), m = Ms(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], w = yn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), S = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), y = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = yn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: S,
    offsetParent: b,
    strategy: c
  }) : S);
  return {
    top: (w.top - x.top + m.top) / y.y,
    bottom: (x.bottom - w.bottom + m.bottom) / y.y,
    left: (w.left - x.left + m.left) / y.x,
    right: (x.right - w.right + m.right) / y.x
  };
}
const Gc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Ct(e, t) || {};
    if (l == null)
      return {};
    const d = Ms(u), f = {
      x: n,
      y: r
    }, p = ks(o), m = Ls(p), g = await s.getDimensions(l), h = p === "y", w = h ? "top" : "left", S = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", y = i.reference[m] + i.reference[p] - f[p] - i.floating[m], x = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let I = C ? C[b] : 0;
    (!I || !await (s.isElement == null ? void 0 : s.isElement(C))) && (I = a.floating[b] || i.floating[m]);
    const E = y / 2 - x / 2, T = I / 2 - g[m] / 2 - 1, $ = lt(d[w], T), N = lt(d[S], T), L = $, k = I - g[m] - N, A = I / 2 - g[m] / 2 + E, _ = es(L, A, k), R = !c.arrow && Pn(o) != null && A != _ && i.reference[m] / 2 - (A < L ? $ : N) - g[m] / 2 < 0, B = R ? A < L ? A - L : A - k : 0;
    return {
      [p]: f[p] + B,
      data: {
        [p]: _,
        centerOffset: A - _ - B,
        ...R && {
          alignmentOffset: B
        }
      },
      reset: R
    };
  }
}), ld = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...h
      } = Ct(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = ut(o), S = ut(a) === a, b = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), y = f || (S || !g ? [Kr(a)] : Nb(a));
      !f && m !== "none" && y.push(..._b(a, g, m, b));
      const x = [a, ...y], C = await Fs(t, h), I = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && I.push(C[w]), d) {
        const L = Ob(o, s, b);
        I.push(C[L[0]], C[L[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: I
      }], !I.every((L) => L <= 0)) {
        var T, $;
        const L = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, k = x[L];
        if (k)
          return {
            data: {
              index: L,
              overflows: E
            },
            reset: {
              placement: k
            }
          };
        let A = ($ = E.filter((_) => _.overflows[0] <= 0).sort((_, R) => _.overflows[1] - R.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var N;
              const _ = (N = E.map((R) => [R.placement, R.overflows.filter((B) => B > 0).reduce((B, O) => B + O, 0)]).sort((R, B) => R[1] - B[1])[0]) == null ? void 0 : N[0];
              _ && (A = _);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function ud(e) {
  const t = lt(...e.map((i) => i.left)), n = lt(...e.map((i) => i.top)), r = we(...e.map((i) => i.right)), o = we(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function Mb(e) {
  const t = e.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => yn(ud(o)));
}
const dd = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: r,
        rects: o,
        platform: i,
        strategy: s
      } = t, {
        padding: a = 2,
        x: c,
        y: l
      } = Ct(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = Mb(u), f = yn(ud(u)), p = Ms(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((h) => c > h.left - p.left && c < h.right + p.right && l > h.top - p.top && l < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (un(n) === "y") {
            const $ = d[0], N = d[d.length - 1], L = ut(n) === "top", k = $.top, A = N.bottom, _ = L ? $.left : N.left, R = L ? $.right : N.right, B = R - _, O = A - k;
            return {
              top: k,
              bottom: A,
              left: _,
              right: R,
              width: B,
              height: O,
              x: _,
              y: k
            };
          }
          const h = ut(n) === "left", w = we(...d.map(($) => $.right)), S = lt(...d.map(($) => $.left)), b = d.filter(($) => h ? $.left === S : $.right === w), y = b[0].top, x = b[b.length - 1].bottom, C = S, I = w, E = I - C, T = x - y;
          return {
            top: y,
            bottom: x,
            left: C,
            right: I,
            width: E,
            height: T,
            x: C,
            y
          };
        }
        return f;
      }
      const g = await i.getElementRects({
        reference: {
          getBoundingClientRect: m
        },
        floating: r.floating,
        strategy: s
      });
      return o.reference.x !== g.reference.x || o.reference.y !== g.reference.y || o.reference.width !== g.reference.width || o.reference.height !== g.reference.height ? {
        reset: {
          rects: g
        }
      } : {};
    }
  };
};
async function Fb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ut(n), a = Pn(n), c = un(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, d = Ct(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), c ? {
    x: p * u,
    y: f * l
  } : {
    x: f * l,
    y: p * u
  };
}
const fd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, c = await Fb(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Bs = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (h) => {
            let {
              x: w,
              y: S
            } = h;
            return {
              x: w,
              y: S
            };
          }
        },
        ...c
      } = Ct(e, t), l = {
        x: n,
        y: r
      }, u = await Fs(t, c), d = un(ut(o)), f = _s(d);
      let p = l[f], m = l[d];
      if (i) {
        const h = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", S = p + u[h], b = p - u[w];
        p = es(S, p, b);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", S = m + u[h], b = m - u[w];
        m = es(S, m, b);
      }
      const g = a.fn({
        ...t,
        [f]: p,
        [d]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, Bb = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Ct(e, t), u = {
        x: n,
        y: r
      }, d = un(o), f = _s(d);
      let p = u[f], m = u[d];
      const g = Ct(a, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const b = f === "y" ? "height" : "width", y = i.reference[f] - i.floating[b] + h.mainAxis, x = i.reference[f] + i.reference[b] - h.mainAxis;
        p < y ? p = y : p > x && (p = x);
      }
      if (l) {
        var w, S;
        const b = f === "y" ? "width" : "height", y = ["top", "left"].includes(ut(o)), x = i.reference[d] - i.floating[b] + (y && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (y ? 0 : h.crossAxis), C = i.reference[d] + i.reference[b] + (y ? 0 : ((S = s.offset) == null ? void 0 : S[d]) || 0) - (y ? h.crossAxis : 0);
        m < x ? m = x : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, jb = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = Ct(e, t), c = await Fs(t, a), l = ut(n), u = Pn(n), d = un(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const h = p - c[m], w = f - c[g], S = !t.middlewareData.shift;
      let b = h, y = w;
      if (d) {
        const C = f - c.left - c.right;
        y = u || S ? lt(w, C) : C;
      } else {
        const C = p - c.top - c.bottom;
        b = u || S ? lt(h, C) : C;
      }
      if (S && !u) {
        const C = we(c.left, 0), I = we(c.right, 0), E = we(c.top, 0), T = we(c.bottom, 0);
        d ? y = f - 2 * (C !== 0 || I !== 0 ? C + I : we(c.left, c.right)) : b = p - 2 * (E !== 0 || T !== 0 ? E + T : we(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: y,
        availableHeight: b
      });
      const x = await o.getDimensions(i.floating);
      return f !== x.width || p !== x.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Bt(e) {
  return pd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dt(e) {
  var t;
  return (t = (pd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pd(e) {
  return e instanceof Node || e instanceof je(e).Node;
}
function Et(e) {
  return e instanceof Element || e instanceof je(e).Element;
}
function ht(e) {
  return e instanceof HTMLElement || e instanceof je(e).HTMLElement;
}
function Hc(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
function lr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Wb(e) {
  return ["table", "td", "th"].includes(Bt(e));
}
function js(e) {
  const t = Ws(), n = Ze(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function zb(e) {
  let t = vn(e);
  for (; ht(t) && !yo(t); ) {
    if (js(t))
      return t;
    t = vn(t);
  }
  return null;
}
function Ws() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function yo(e) {
  return ["html", "body", "#document"].includes(Bt(e));
}
function Ze(e) {
  return je(e).getComputedStyle(e);
}
function vo(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function vn(e) {
  if (Bt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Hc(e) && e.host || // Fallback.
    Dt(e)
  );
  return Hc(t) ? t.host : t;
}
function md(e) {
  const t = vn(e);
  return yo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && lr(t) ? t : md(t);
}
function wt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = md(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = je(o);
  return i ? t.concat(s, s.visualViewport || [], lr(o) ? o : [], s.frameElement && n ? wt(s.frameElement) : []) : t.concat(o, wt(o, [], n));
}
function gd(e) {
  const t = Ze(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = qr(n) !== i || qr(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function zs(e) {
  return Et(e) ? e : e.contextElement;
}
function hn(e) {
  const t = zs(e);
  if (!ht(t))
    return Ft(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = gd(t);
  let s = (i ? qr(n.width) : n.width) / r, a = (i ? qr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Vb = /* @__PURE__ */ Ft(0);
function hd(e) {
  const t = je(e);
  return !Ws() || !t.visualViewport ? Vb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== je(e) ? !1 : t;
}
function rn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zs(e);
  let s = Ft(1);
  t && (r ? Et(r) && (s = hn(r)) : s = hn(e));
  const a = Gb(i, n, r) ? hd(i) : Ft(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = je(i), p = r && Et(r) ? je(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = hn(m), h = m.getBoundingClientRect(), w = Ze(m), S = h.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, b = h.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, d *= g.y, c += S, l += b, m = je(m).frameElement;
    }
  }
  return yn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Hb(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = ht(n), i = Dt(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Ft(1);
  const c = Ft(0);
  if ((o || !o && r !== "fixed") && ((Bt(n) !== "body" || lr(i)) && (s = vo(n)), ht(n))) {
    const l = rn(n);
    a = hn(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + c.x,
    y: t.y * a.y - s.scrollTop * a.y + c.y
  };
}
function Ub(e) {
  return Array.from(e.getClientRects());
}
function bd(e) {
  return rn(Dt(e)).left + vo(e).scrollLeft;
}
function qb(e) {
  const t = Dt(e), n = vo(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bd(e);
  const a = -n.scrollTop;
  return Ze(r).direction === "rtl" && (s += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Kb(e, t) {
  const n = je(e), r = Dt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Ws();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Yb(e, t) {
  const n = rn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ht(e) ? hn(e) : Ft(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Uc(e, t, n) {
  let r;
  if (t === "viewport")
    r = Kb(e, n);
  else if (t === "document")
    r = qb(Dt(e));
  else if (Et(t))
    r = Yb(t, n);
  else {
    const o = hd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return yn(r);
}
function yd(e, t) {
  const n = vn(e);
  return n === t || !Et(n) || yo(n) ? !1 : Ze(n).position === "fixed" || yd(n, t);
}
function Xb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = wt(e, [], !1).filter((a) => Et(a) && Bt(a) !== "body"), o = null;
  const i = Ze(e).position === "fixed";
  let s = i ? vn(e) : e;
  for (; Et(s) && !yo(s); ) {
    const a = Ze(s), c = js(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || lr(s) && !c && yd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = vn(s);
  }
  return t.set(e, r), r;
}
function Jb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Xb(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, u) => {
    const d = Uc(t, u, o);
    return l.top = we(d.top, l.top), l.right = lt(d.right, l.right), l.bottom = lt(d.bottom, l.bottom), l.left = we(d.left, l.left), l;
  }, Uc(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Qb(e) {
  return gd(e);
}
function Zb(e, t, n) {
  const r = ht(t), o = Dt(t), i = n === "fixed", s = rn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ft(0);
  if (r || !r && !i)
    if ((Bt(t) !== "body" || lr(o)) && (a = vo(t)), r) {
      const l = rn(t, !0, i, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = bd(o));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function qc(e, t) {
  return !ht(e) || Ze(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function vd(e, t) {
  const n = je(e);
  if (!ht(e))
    return n;
  let r = qc(e, t);
  for (; r && Wb(r) && Ze(r).position === "static"; )
    r = qc(r, t);
  return r && (Bt(r) === "html" || Bt(r) === "body" && Ze(r).position === "static" && !js(r)) ? n : r || zb(e) || n;
}
const ey = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || vd, i = this.getDimensions;
  return {
    reference: Zb(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function ty(e) {
  return Ze(e).direction === "rtl";
}
const ny = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Hb,
  getDocumentElement: Dt,
  getClippingRect: Jb,
  getOffsetParent: vd,
  getElementRects: ey,
  getClientRects: Ub,
  getDimensions: Qb,
  getScale: hn,
  isElement: Et,
  isRTL: ty
};
function ry(e, t) {
  let n = null, r;
  const o = Dt(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (a || t(), !d || !f)
      return;
    const p = Er(u), m = Er(o.clientWidth - (l + d)), g = Er(o.clientHeight - (u + f)), h = Er(l), S = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: we(0, lt(1, c)) || 1
    };
    let b = !0;
    function y(x) {
      const C = x[0].intersectionRatio;
      if (C !== c) {
        if (!b)
          return s();
        C ? s(!1, C) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(y, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(y, S);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function oy(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = zs(e), u = o || i ? [...l ? wt(l) : [], ...wt(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = l && a ? ry(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [S] = w;
    S && S.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, g = c ? rn(e) : null;
  c && h();
  function h() {
    const w = rn(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const iy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ny,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return kb(e, t, {
    ...o,
    platform: i
  });
}, wd = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Gc({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Gc({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Nr = typeof document < "u" ? uo : V;
function Yr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!Yr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Yr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Sd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kc(e, t) {
  const n = Sd(e);
  return Math.round(t * n) / n;
}
function Yc(e) {
  const t = P.useRef(e);
  return Nr(() => {
    t.current = e;
  }), t;
}
function sy(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = P.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = P.useState(r);
  Yr(f, r) || p(r);
  const [m, g] = P.useState(null), [h, w] = P.useState(null), S = P.useCallback((R) => {
    R != C.current && (C.current = R, g(R));
  }, [g]), b = P.useCallback((R) => {
    R !== I.current && (I.current = R, w(R));
  }, [w]), y = i || m, x = s || h, C = P.useRef(null), I = P.useRef(null), E = P.useRef(u), T = Yc(c), $ = Yc(o), N = P.useCallback(() => {
    if (!C.current || !I.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (R.platform = $.current), iy(C.current, I.current, R).then((B) => {
      const O = {
        ...B,
        isPositioned: !0
      };
      L.current && !Yr(E.current, O) && (E.current = O, Em.flushSync(() => {
        d(O);
      }));
    });
  }, [f, t, n, $]);
  Nr(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const L = P.useRef(!1);
  Nr(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Nr(() => {
    if (y && (C.current = y), x && (I.current = x), y && x) {
      if (T.current)
        return T.current(y, x, N);
      N();
    }
  }, [y, x, N, T]);
  const k = P.useMemo(() => ({
    reference: C,
    floating: I,
    setReference: S,
    setFloating: b
  }), [S, b]), A = P.useMemo(() => ({
    reference: y,
    floating: x
  }), [y, x]), _ = P.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return R;
    const B = Kc(A.floating, u.x), O = Kc(A.floating, u.y);
    return a ? {
      ...R,
      transform: "translate(" + B + "px, " + O + "px)",
      ...Sd(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: B,
      top: O
    };
  }, [n, a, A.floating, u.x, u.y]);
  return P.useMemo(() => ({
    ...u,
    update: N,
    refs: k,
    elements: A,
    floatingStyles: _
  }), [u, N, k, A, _]);
}
var St = typeof document < "u" ? uo : V;
let Ei = !1, ay = 0;
const Xc = () => "floating-ui-" + ay++;
function cy() {
  const [e, t] = P.useState(() => Ei ? Xc() : void 0);
  return St(() => {
    e == null && t(Xc());
  }, []), P.useEffect(() => {
    Ei || (Ei = !0);
  }, []), e;
}
const ly = P[/* @__PURE__ */ "useId".toString()], xd = ly || cy;
function uy() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((o) => o(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((o) => o !== n)) || []);
    }
  };
}
const dy = /* @__PURE__ */ P.createContext(null), fy = /* @__PURE__ */ P.createContext(null), Cd = () => {
  var e;
  return ((e = P.useContext(dy)) == null ? void 0 : e.id) || null;
}, Vs = () => P.useContext(fy);
function Tt(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function py() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function my() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function wo(e) {
  return Tt(e).defaultView || window;
}
function mt(e) {
  return e ? e instanceof Element || e instanceof wo(e).Element : !1;
}
function Ed(e) {
  return e ? e instanceof HTMLElement || e instanceof wo(e).HTMLElement : !1;
}
function gy(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = wo(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hy(e) {
  if (e.mozInputSource === 0 && e.isTrusted)
    return !0;
  const t = /Android/i;
  return (t.test(py()) || t.test(my())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function by(e) {
  return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Id(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function yy(e) {
  return "nativeEvent" in e;
}
function ns(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && gy(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Dd(e) {
  return "data-floating-ui-" + e;
}
function Jc(e) {
  const t = W(e);
  return St(() => {
    t.current = e;
  }), t;
}
const Qc = /* @__PURE__ */ Dd("safe-polygon");
function $r(e, t, n) {
  return n && !Id(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function vy(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    elements: {
      domReference: s,
      floating: a
    },
    refs: c
  } = e, {
    enabled: l = !0,
    delay: u = 0,
    handleClose: d = null,
    mouseOnly: f = !1,
    restMs: p = 0,
    move: m = !0
  } = t, g = Vs(), h = Cd(), w = Jc(d), S = Jc(u), b = P.useRef(), y = P.useRef(), x = P.useRef(), C = P.useRef(), I = P.useRef(!0), E = P.useRef(!1), T = P.useRef(() => {
  }), $ = P.useCallback(() => {
    var A;
    const _ = (A = o.current.openEvent) == null ? void 0 : A.type;
    return (_ == null ? void 0 : _.includes("mouse")) && _ !== "mousedown";
  }, [o]);
  P.useEffect(() => {
    if (!l)
      return;
    function A() {
      clearTimeout(y.current), clearTimeout(C.current), I.current = !0;
    }
    return i.on("dismiss", A), () => {
      i.off("dismiss", A);
    };
  }, [l, i]), P.useEffect(() => {
    if (!l || !w.current || !n)
      return;
    function A(R) {
      $() && r(!1, R);
    }
    const _ = Tt(a).documentElement;
    return _.addEventListener("mouseleave", A), () => {
      _.removeEventListener("mouseleave", A);
    };
  }, [a, n, r, l, w, o, $]);
  const N = P.useCallback(function(A, _) {
    _ === void 0 && (_ = !0);
    const R = $r(S.current, "close", b.current);
    R && !x.current ? (clearTimeout(y.current), y.current = setTimeout(() => r(!1, A), R)) : _ && (clearTimeout(y.current), r(!1, A));
  }, [S, r]), L = P.useCallback(() => {
    T.current(), x.current = void 0;
  }, []), k = P.useCallback(() => {
    if (E.current) {
      const A = Tt(c.floating.current).body;
      A.style.pointerEvents = "", A.removeAttribute(Qc), E.current = !1;
    }
  }, [c]);
  return P.useEffect(() => {
    if (!l)
      return;
    function A() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function _(O) {
      if (clearTimeout(y.current), I.current = !1, f && !Id(b.current) || p > 0 && $r(S.current, "open") === 0)
        return;
      const H = $r(S.current, "open", b.current);
      H ? y.current = setTimeout(() => {
        r(!0, O);
      }, H) : r(!0, O);
    }
    function R(O) {
      if (A())
        return;
      T.current();
      const H = Tt(a);
      if (clearTimeout(C.current), w.current) {
        n || clearTimeout(y.current), x.current = w.current({
          ...e,
          tree: g,
          x: O.clientX,
          y: O.clientY,
          onClose() {
            k(), L(), N(O);
          }
        });
        const ne = x.current;
        H.addEventListener("mousemove", ne), T.current = () => {
          H.removeEventListener("mousemove", ne);
        };
        return;
      }
      (b.current === "touch" ? !ns(a, O.relatedTarget) : !0) && N(O);
    }
    function B(O) {
      A() || w.current == null || w.current({
        ...e,
        tree: g,
        x: O.clientX,
        y: O.clientY,
        onClose() {
          k(), L(), N(O);
        }
      })(O);
    }
    if (mt(s)) {
      const O = s;
      return n && O.addEventListener("mouseleave", B), a == null || a.addEventListener("mouseleave", B), m && O.addEventListener("mousemove", _, {
        once: !0
      }), O.addEventListener("mouseenter", _), O.addEventListener("mouseleave", R), () => {
        n && O.removeEventListener("mouseleave", B), a == null || a.removeEventListener("mouseleave", B), m && O.removeEventListener("mousemove", _), O.removeEventListener("mouseenter", _), O.removeEventListener("mouseleave", R);
      };
    }
  }, [s, a, l, e, f, p, m, N, L, k, r, n, g, S, w, o]), St(() => {
    var A;
    if (l && n && (A = w.current) != null && A.__options.blockPointerEvents && $()) {
      const B = Tt(a).body;
      if (B.setAttribute(Qc, ""), B.style.pointerEvents = "none", E.current = !0, mt(s) && a) {
        var _, R;
        const O = s, H = g == null || (_ = g.nodesRef.current.find((X) => X.id === h)) == null || (R = _.context) == null ? void 0 : R.elements.floating;
        return H && (H.style.pointerEvents = ""), O.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          O.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, h, a, s, g, w, o, $]), St(() => {
    n || (b.current = void 0, L(), k());
  }, [n, L, k]), P.useEffect(() => () => {
    L(), clearTimeout(y.current), clearTimeout(C.current), k();
  }, [l, L, k]), P.useMemo(() => {
    if (!l)
      return {};
    function A(_) {
      b.current = _.pointerType;
    }
    return {
      reference: {
        onPointerDown: A,
        onPointerEnter: A,
        onMouseMove(_) {
          n || p === 0 || (clearTimeout(C.current), C.current = setTimeout(() => {
            I.current || r(!0, _.nativeEvent);
          }, p));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(y.current);
        },
        onMouseLeave(_) {
          i.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: !1
            }
          }), N(_.nativeEvent, !1);
        }
      }
    };
  }, [i, l, p, n, r, N]);
}
const Pd = /* @__PURE__ */ P.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), Rd = () => P.useContext(Pd), wy = (e) => {
  let {
    children: t,
    delay: n,
    timeoutMs: r = 0
  } = e;
  const [o, i] = P.useReducer((c, l) => ({
    ...c,
    ...l
  }), {
    delay: n,
    timeoutMs: r,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), s = P.useRef(null), a = P.useCallback((c) => {
    i({
      currentId: c
    });
  }, []);
  return St(() => {
    o.currentId ? s.current === null ? s.current = o.currentId : i({
      isInstantPhase: !0
    }) : (i({
      isInstantPhase: !1
    }), s.current = null);
  }, [o.currentId]), /* @__PURE__ */ P.createElement(Pd.Provider, {
    value: P.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, Sy = (e, t) => {
  let {
    open: n,
    onOpenChange: r
  } = e, {
    id: o
  } = t;
  const {
    currentId: i,
    setCurrentId: s,
    initialDelay: a,
    setState: c,
    timeoutMs: l
  } = Rd();
  St(() => {
    i && (c({
      delay: {
        open: 1,
        close: $r(a, "close")
      }
    }), i !== o && r(!1));
  }, [o, r, c, i, a]), St(() => {
    function u() {
      r(!1), c({
        delay: a,
        currentId: null
      });
    }
    if (!n && i === o)
      if (l) {
        const d = window.setTimeout(u, l);
        return () => {
          clearTimeout(d);
        };
      } else
        u();
  }, [n, c, i, o, r, a, l]), St(() => {
    n && s(o);
  }, [n, s, o]);
};
function xy(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Ii(e, t) {
  let n = e.filter((o) => {
    var i;
    return o.parentId === t && ((i = o.context) == null ? void 0 : i.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var i;
      return (i = r) == null ? void 0 : i.some((s) => {
        var a;
        return o.parentId === s.id && ((a = o.context) == null ? void 0 : a.open);
      });
    }), n = n.concat(r);
  return n;
}
function Cy(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Ey = P[/* @__PURE__ */ "useInsertionEffect".toString()], Iy = Ey || ((e) => e());
function _r(e) {
  const t = P.useRef(() => {
  });
  return Iy(() => {
    t.current = e;
  }), P.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Lr(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
const Dy = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Py = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Ry = (e) => {
  var t, n;
  return {
    escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Ay(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    nodeId: i,
    elements: {
      reference: s,
      domReference: a,
      floating: c
    },
    dataRef: l
  } = e, {
    enabled: u = !0,
    escapeKey: d = !0,
    outsidePress: f = !0,
    outsidePressEvent: p = "pointerdown",
    referencePress: m = !1,
    referencePressEvent: g = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: w
  } = t, S = Vs(), b = Cd() != null, y = _r(typeof f == "function" ? f : () => !1), x = typeof f == "function" ? y : f, C = P.useRef(!1), {
    escapeKeyBubbles: I,
    outsidePressBubbles: E
  } = Ry(w), T = _r((N) => {
    if (!n || !u || !d || N.key !== "Escape")
      return;
    const L = S ? Ii(S.nodesRef.current, i) : [];
    if (!I && (N.stopPropagation(), L.length > 0)) {
      let k = !0;
      if (L.forEach((A) => {
        var _;
        if ((_ = A.context) != null && _.open && !A.context.dataRef.current.__escapeKeyBubbles) {
          k = !1;
          return;
        }
      }), !k)
        return;
    }
    o.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), r(!1, yy(N) ? N.nativeEvent : N);
  }), $ = _r((N) => {
    const L = C.current;
    if (C.current = !1, L || typeof x == "function" && !x(N))
      return;
    const k = Cy(N);
    if (Ed(k) && c) {
      const R = k.clientWidth > 0 && k.scrollWidth > k.clientWidth, B = k.clientHeight > 0 && k.scrollHeight > k.clientHeight;
      let O = B && N.offsetX > k.clientWidth;
      if (B && wo(c).getComputedStyle(k).direction === "rtl" && (O = N.offsetX <= k.offsetWidth - k.clientWidth), O || R && N.offsetY > k.clientHeight)
        return;
    }
    const A = S && Ii(S.nodesRef.current, i).some((R) => {
      var B;
      return Lr(N, (B = R.context) == null ? void 0 : B.elements.floating);
    });
    if (Lr(N, c) || Lr(N, a) || A)
      return;
    const _ = S ? Ii(S.nodesRef.current, i) : [];
    if (_.length > 0) {
      let R = !0;
      if (_.forEach((B) => {
        var O;
        if ((O = B.context) != null && O.open && !B.context.dataRef.current.__outsidePressBubbles) {
          R = !1;
          return;
        }
      }), !R)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: b ? {
          preventScroll: !0
        } : hy(N) || by(N)
      }
    }), r(!1, N);
  });
  return P.useEffect(() => {
    if (!n || !u)
      return;
    l.current.__escapeKeyBubbles = I, l.current.__outsidePressBubbles = E;
    function N(A) {
      r(!1, A);
    }
    const L = Tt(c);
    d && L.addEventListener("keydown", T), x && L.addEventListener(p, $);
    let k = [];
    return h && (mt(a) && (k = wt(a)), mt(c) && (k = k.concat(wt(c))), !mt(s) && s && s.contextElement && (k = k.concat(wt(s.contextElement)))), k = k.filter((A) => {
      var _;
      return A !== ((_ = L.defaultView) == null ? void 0 : _.visualViewport);
    }), k.forEach((A) => {
      A.addEventListener("scroll", N, {
        passive: !0
      });
    }), () => {
      d && L.removeEventListener("keydown", T), x && L.removeEventListener(p, $), k.forEach((A) => {
        A.removeEventListener("scroll", N);
      });
    };
  }, [l, c, a, s, d, x, p, n, r, h, u, I, E, T, $]), P.useEffect(() => {
    C.current = !1;
  }, [x, p]), P.useMemo(() => u ? {
    reference: {
      onKeyDown: T,
      [Dy[g]]: (N) => {
        m && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, N.nativeEvent));
      }
    },
    floating: {
      onKeyDown: T,
      [Py[p]]: () => {
        C.current = !0;
      }
    }
  } : {}, [u, o, m, p, g, r, T]);
}
function Gs(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = P.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, c = sy(e), l = Vs(), u = _r((y, x) => {
    y && (f.current.openEvent = x), r == null || r(y, x);
  }), d = P.useRef(null), f = P.useRef({}), p = P.useState(() => uy())[0], m = xd(), g = P.useCallback((y) => {
    const x = mt(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    c.refs.setReference(x);
  }, [c.refs]), h = P.useCallback((y) => {
    (mt(y) || y === null) && (d.current = y, s(y)), (mt(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !mt(y)) && c.refs.setReference(y);
  }, [c.refs]), w = P.useMemo(() => ({
    ...c.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [c.refs, h, g]), S = P.useMemo(() => ({
    ...c.elements,
    domReference: a
  }), [c.elements, a]), b = P.useMemo(() => ({
    ...c,
    refs: w,
    elements: S,
    dataRef: f,
    nodeId: o,
    floatingId: m,
    events: p,
    open: n,
    onOpenChange: u
  }), [c, o, m, p, n, u, w, S]);
  return St(() => {
    const y = l == null ? void 0 : l.nodesRef.current.find((x) => x.id === o);
    y && (y.context = b);
  }), P.useMemo(() => ({
    ...c,
    context: b,
    refs: w,
    elements: S
  }), [c, w, S, b]);
}
function Ty(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    refs: s,
    elements: {
      floating: a,
      domReference: c
    }
  } = e, {
    enabled: l = !0,
    keyboardOnly: u = !0
  } = t, d = P.useRef(""), f = P.useRef(!1), p = P.useRef();
  return P.useEffect(() => {
    if (!l)
      return;
    const g = Tt(a).defaultView || window;
    function h() {
      !n && Ed(c) && c === xy(Tt(c)) && (f.current = !0);
    }
    return g.addEventListener("blur", h), () => {
      g.removeEventListener("blur", h);
    };
  }, [a, c, n, l]), P.useEffect(() => {
    if (!l)
      return;
    function m(g) {
      (g.type === "referencePress" || g.type === "escapeKey") && (f.current = !0);
    }
    return i.on("dismiss", m), () => {
      i.off("dismiss", m);
    };
  }, [i, l]), P.useEffect(() => () => {
    clearTimeout(p.current);
  }, []), P.useMemo(() => l ? {
    reference: {
      onPointerDown(m) {
        let {
          pointerType: g
        } = m;
        d.current = g, f.current = !!(g && u);
      },
      onMouseLeave() {
        f.current = !1;
      },
      onFocus(m) {
        var g;
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && Lr(o.current.openEvent, c) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = mt(g) && g.hasAttribute(Dd("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          ns(s.floating.current, g) || ns(c, g) || h || r(!1, m.nativeEvent);
        });
      }
    }
  } : {}, [l, u, c, s, o, r]);
}
function Di(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((o) => o ? o[n] : null).concat(e).reduce((o, i) => (i && Object.entries(i).forEach((s) => {
      let [a, c] = s;
      if (a.indexOf("on") === 0) {
        if (r.has(a) || r.set(a, []), typeof c == "function") {
          var l;
          (l = r.get(a)) == null || l.push(c), o[a] = function() {
            for (var u, d = arguments.length, f = new Array(d), p = 0; p < d; p++)
              f[p] = arguments[p];
            return (u = r.get(a)) == null ? void 0 : u.map((m) => m(...f)).find((m) => m !== void 0);
          };
        }
      } else
        o[a] = c;
    }), o), {})
  };
}
function Oy(e) {
  e === void 0 && (e = []);
  const t = e, n = P.useCallback(
    (i) => Di(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = P.useCallback(
    (i) => Di(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = P.useCallback(
    (i) => Di(i, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((i) => i == null ? void 0 : i.item)
  );
  return P.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
function Ny(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, s = xd();
  return P.useMemo(() => {
    const a = {
      id: r,
      role: i
    };
    return o ? i === "tooltip" ? {
      reference: {
        "aria-describedby": n ? r : void 0
      },
      floating: a
    } : {
      reference: {
        "aria-expanded": n ? "true" : "false",
        "aria-haspopup": i === "alertdialog" ? "dialog" : i,
        "aria-controls": n ? r : void 0,
        ...i === "listbox" && {
          role: "combobox"
        },
        ...i === "menu" && {
          id: s
        }
      },
      floating: {
        ...a,
        ...i === "menu" && {
          "aria-labelledby": s
        }
      }
    } : {};
  }, [o, i, n, r, s]);
}
function Ad(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function Zc(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function el(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const $y = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function _y({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: i,
  arrowY: s,
  dir: a
}) {
  const [c, l = "center"] = e.split("-"), u = {
    width: D(t),
    height: D(t),
    transform: "rotate(45deg)",
    position: "absolute",
    [$y[c]]: D(r)
  }, d = D(-t / 2);
  return c === "left" ? {
    ...u,
    ...Zc(l, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...Zc(l, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...el(l, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...el(l, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Hs = ie(
  ({
    position: e,
    arrowSize: t,
    arrowOffset: n,
    arrowRadius: r,
    arrowPosition: o,
    visible: i,
    arrowX: s,
    arrowY: a,
    style: c,
    ...l
  }, u) => {
    const { dir: d } = ar();
    return i ? /* @__PURE__ */ v.createElement(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ..._y({
            position: e,
            arrowSize: t,
            arrowOffset: n,
            arrowRadius: r,
            arrowPosition: o,
            dir: d,
            arrowX: s,
            arrowY: a
          })
        }
      }
    ) : null;
  }
);
Hs.displayName = "@mantine/core/FloatingArrow";
const [Ly, Td] = Gt(
  "Popover component was not found in the tree"
);
function Od({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = ch(t), o = Re(r, e == null ? void 0 : e.ref);
  return Vt(e) ? cn(e, { [n]: o }) : e;
}
Od.displayName = "@mantine/core/FocusTrap";
function ky(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const My = {}, Nd = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", My, e), [i, s] = U(!1), a = W(null);
  return sr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : ky(o), Fu(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : Im(/* @__PURE__ */ v.createElement(v.Fragment, null, n), a.current);
});
Nd.displayName = "@mantine/core/Portal";
function So({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ v.createElement(Nd, { ...n }, t) : /* @__PURE__ */ v.createElement(v.Fragment, null, t);
}
So.displayName = "@mantine/core/OptionalPortal";
const kn = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${D(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Ir = {
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
    out: { opacity: 0, transform: `translateY(-${D(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${D(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${D(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${D(20)}) rotate(5deg)` },
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
    ...kn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...kn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...kn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...kn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...kn("top"),
    common: { transformOrigin: "top right" }
  }
}, tl = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Fy({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in Ir ? {
    transitionProperty: Ir[e].transitionProperty,
    ...o,
    ...Ir[e].common,
    ...Ir[e][tl[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[tl[t]]
  };
}
function By({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a
}) {
  const c = vt(), l = ju(), u = c.respectReducedMotion ? l : !1, [d, f] = U(u ? 0 : e), [p, m] = U(r ? "entered" : "exited"), g = W(-1), h = (w) => {
    const S = w ? o : i, b = w ? s : a;
    m(w ? "pre-entering" : "pre-exiting"), window.clearTimeout(g.current);
    const y = u ? 0 : w ? e : t;
    if (f(y), y === 0)
      typeof S == "function" && S(), typeof b == "function" && b(), m(w ? "entered" : "exited");
    else {
      const x = window.setTimeout(() => {
        typeof S == "function" && S(), m(w ? "entering" : "exiting");
      }, 10);
      g.current = window.setTimeout(() => {
        window.clearTimeout(x), typeof b == "function" && b(), m(w ? "entered" : "exited");
      }, y);
    }
  };
  return Lt(() => {
    h(r);
  }, [r]), V(() => () => window.clearTimeout(g.current), []), {
    transitionDuration: d,
    transitionStatus: p,
    transitionTimingFunction: n || "ease"
  };
}
function Us({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: i,
  timingFunction: s = "ease",
  onExit: a,
  onEntered: c,
  onEnter: l,
  onExited: u
}) {
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = By({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: a,
    onEntered: c,
    onEnter: l,
    onExited: u
  });
  return d === 0 ? o ? /* @__PURE__ */ v.createElement(v.Fragment, null, i({})) : e ? i({ display: "none" }) : null : f === "exited" ? e ? i({ display: "none" }) : null : /* @__PURE__ */ v.createElement(v.Fragment, null, i(
    Fy({
      transition: t,
      duration: d,
      state: f,
      timingFunction: p
    })
  ));
}
Us.displayName = "@mantine/core/Transition";
var $d = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const jy = {}, qs = q((e, t) => {
  var h, w, S, b;
  const n = j("PopoverDropdown", jy, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = n, f = Td(), p = th({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Re(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ v.createElement(So, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ v.createElement(
    Us,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((S = f.transitionProps) == null ? void 0 : S.exitDuration) == "number" ? f.transitionProps.exitDuration : (b = f.transitionProps) == null ? void 0 : b.duration
    },
    (y) => /* @__PURE__ */ v.createElement(Od, { active: f.trapFocus }, /* @__PURE__ */ v.createElement(
      G,
      {
        ...m,
        ...d,
        variant: c,
        ref: g,
        onKeyDownCapture: Ug(f.onClose, {
          active: f.closeOnEscape,
          onTrigger: p,
          onKeyDown: a
        }),
        "data-position": f.placement,
        ...f.getStyles("dropdown", {
          className: r,
          props: n,
          classNames: l,
          styles: u,
          style: [
            {
              ...y,
              zIndex: f.zIndex,
              top: f.y ?? 0,
              left: f.x ?? 0,
              width: f.width === "target" ? void 0 : D(f.width)
            },
            o
          ]
        })
      },
      s,
      /* @__PURE__ */ v.createElement(
        Hs,
        {
          ref: f.arrowRef,
          arrowX: f.arrowX,
          arrowY: f.arrowY,
          visible: f.withArrow,
          position: f.placement,
          arrowSize: f.arrowSize,
          arrowRadius: f.arrowRadius,
          arrowOffset: f.arrowOffset,
          arrowPosition: f.arrowPosition,
          ...f.getStyles("arrow", {
            props: n,
            classNames: l,
            styles: u
          })
        }
      )
    ))
  ));
});
qs.classes = $d;
qs.displayName = "@mantine/core/PopoverDropdown";
const Wy = {
  refProp: "ref",
  popupType: "dialog"
}, _d = q((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    Wy,
    e
  );
  if (!Vt(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Td(), c = Re(a.reference, n.ref, t), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return cn(n, {
    ...s,
    ...l,
    ...a.targetProps,
    className: yt(a.targetProps.className, s.className, n.props.className),
    [r]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
_d.displayName = "@mantine/core/PopoverTarget";
function Ld({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = U(0);
  V(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return oy(
        t.refs.reference.current,
        t.refs.floating.current,
        t.update
      );
  }, [
    t.refs.reference.current,
    t.refs.floating.current,
    e,
    o,
    n
  ]), Lt(() => {
    t.update();
  }, r), Lt(() => {
    i((s) => s + 1);
  }, [e]);
}
function zy(e, t) {
  var r, o, i, s;
  const n = [fd(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(Bs({ limiter: Bb() })), (o = e.middlewares) != null && o.flip && n.push(ld()), (i = e.middlewares) != null && i.inline && n.push(dd()), n.push(wd({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    jb({
      apply({ rects: a, availableWidth: c, availableHeight: l }) {
        var f, p;
        const d = ((f = t().refs.floating.current) == null ? void 0 : f.style) ?? {};
        (p = e.middlewares) != null && p.size && Object.assign(d, {
          maxWidth: `${c}px`,
          maxHeight: `${l}px`
        }), e.width === "target" && Object.assign(d, {
          width: `${a.reference.width}px`
        });
      }
    })
  ), n;
}
function Vy(e) {
  const [t, n] = kt({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), r = () => {
    var s;
    t && ((s = e.onClose) == null || s.call(e), n(!1));
  }, o = () => {
    var s, a;
    t ? ((s = e.onClose) == null || s.call(e), n(!1)) : ((a = e.onOpen) == null || a.call(e), n(!0));
  }, i = Gs({
    placement: e.position,
    middleware: zy(e, () => i)
  });
  return Ld({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), Lt(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), Lt(() => {
    var s, a;
    e.opened ? (a = e.onOpen) == null || a.call(e) : (s = e.onClose) == null || s.call(e);
  }, [e.opened]), {
    floating: i,
    controlled: typeof e.opened == "boolean",
    opened: t,
    onClose: r,
    onToggle: o
  };
}
const Gy = {
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
  zIndex: Es("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Hy = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : dt(t),
    "--popover-shadow": Kg(n)
  }
});
function ft(e) {
  var Pt, qe, Ee, me, Rt, Kt;
  const t = j("Popover", Gy, e), {
    children: n,
    position: r,
    offset: o,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    transitionProps: c,
    width: l,
    middlewares: u,
    withArrow: d,
    arrowSize: f,
    arrowOffset: p,
    arrowRadius: m,
    arrowPosition: g,
    unstyled: h,
    classNames: w,
    styles: S,
    closeOnClickOutside: b,
    withinPortal: y,
    portalProps: x,
    closeOnEscape: C,
    clickOutsideEvents: I,
    trapFocus: E,
    onClose: T,
    onOpen: $,
    onChange: N,
    zIndex: L,
    radius: k,
    shadow: A,
    id: _,
    defaultOpened: R,
    __staticSelector: B,
    withRoles: O,
    disabled: H,
    returnFocus: X,
    variant: ne,
    keepMounted: be,
    vars: ue,
    ...Ae
  } = t, ye = Q({
    name: B,
    props: t,
    classes: $d,
    classNames: w,
    styles: S,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: Hy
  }), re = W(null), [ve, Le] = U(null), [xe, Ce] = U(null), { dir: ke } = ar(), ae = Ht(_), Y = Vy({
    middlewares: u,
    width: l,
    position: Ad(ke, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: re,
    arrowOffset: p,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: R,
    onChange: N,
    onOpen: $,
    onClose: T
  });
  Jg(() => b && Y.onClose(), I, [
    ve,
    xe
  ]);
  const dn = Z(
    (se) => {
      Le(se), Y.floating.refs.setReference(se);
    },
    [Y.floating.refs.setReference]
  ), Ue = Z(
    (se) => {
      Ce(se), Y.floating.refs.setFloating(se);
    },
    [Y.floating.refs.setFloating]
  );
  return /* @__PURE__ */ v.createElement(
    Ly,
    {
      value: {
        returnFocus: X,
        disabled: H,
        controlled: Y.controlled,
        reference: dn,
        floating: Ue,
        x: Y.floating.x,
        y: Y.floating.y,
        arrowX: (Ee = (qe = (Pt = Y.floating) == null ? void 0 : Pt.middlewareData) == null ? void 0 : qe.arrow) == null ? void 0 : Ee.x,
        arrowY: (Kt = (Rt = (me = Y.floating) == null ? void 0 : me.middlewareData) == null ? void 0 : Rt.arrow) == null ? void 0 : Kt.y,
        opened: Y.opened,
        arrowRef: re,
        transitionProps: c,
        width: l,
        withArrow: d,
        arrowSize: f,
        arrowOffset: p,
        arrowRadius: m,
        arrowPosition: g,
        placement: Y.floating.placement,
        trapFocus: E,
        withinPortal: y,
        portalProps: x,
        zIndex: L,
        radius: k,
        shadow: A,
        closeOnEscape: C,
        onClose: Y.onClose,
        onToggle: Y.onToggle,
        getTargetId: () => `${ae}-target`,
        getDropdownId: () => `${ae}-dropdown`,
        withRoles: O,
        targetProps: Ae,
        __staticSelector: B,
        classNames: w,
        styles: S,
        unstyled: h,
        variant: ne,
        keepMounted: be,
        getStyles: ye
      }
    },
    n
  );
}
ft.Target = _d;
ft.Dropdown = qs;
ft.displayName = "@mantine/core/Popover";
ft.extend = (e) => e;
var st = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const Uy = ie(({ className: e, ...t }, n) => /* @__PURE__ */ v.createElement(G, { component: "span", className: yt(st.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ v.createElement("span", { className: st.bar }), /* @__PURE__ */ v.createElement("span", { className: st.bar }), /* @__PURE__ */ v.createElement("span", { className: st.bar }))), qy = ie(({ className: e, ...t }, n) => /* @__PURE__ */ v.createElement(G, { component: "span", className: yt(st.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ v.createElement("span", { className: st.dot }), /* @__PURE__ */ v.createElement("span", { className: st.dot }), /* @__PURE__ */ v.createElement("span", { className: st.dot }))), Ky = ie(({ className: e, ...t }, n) => /* @__PURE__ */ v.createElement(G, { component: "span", className: yt(st.ovalLoader, e), ...t, ref: n })), kd = {
  bars: Uy,
  oval: Ky,
  dots: qy
}, Yy = {
  loaders: kd,
  type: "oval"
}, Xy = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": le(t, "loader-size"),
    "--loader-color": n ? Mt(n, e) : void 0
  }
}), ur = q((e, t) => {
  const n = j("Loader", Yy, e), {
    size: r,
    color: o,
    type: i,
    vars: s,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    loaders: f,
    variant: p,
    children: m,
    ...g
  } = n, h = Q({
    name: "Loader",
    props: n,
    classes: st,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: Xy
  });
  return m ? /* @__PURE__ */ v.createElement(G, { ...h("root"), ref: t, ...g }, m) : /* @__PURE__ */ v.createElement(
    G,
    {
      ...h("root"),
      ref: t,
      component: f[i],
      variant: p,
      size: r,
      ...g
    }
  );
});
ur.defaultLoaders = kd;
ur.classes = st;
ur.displayName = "@mantine/core/Loader";
var xo = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const nl = {
  orientation: "horizontal"
}, Jy = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), Ks = q((e, t) => {
  const n = j("ActionIconGroup", nl, e), {
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    ...f
  } = j("ActionIconGroup", nl, e), p = Q({
    name: "ActionIconGroup",
    props: n,
    classes: xo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Jy,
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...p("group"),
      ref: t,
      variant: d,
      mod: { "data-orientation": c },
      role: "group",
      ...f
    }
  );
});
Ks.classes = xo;
Ks.displayName = "@mantine/core/ActionIconGroup";
const Qy = {}, Zy = (e, { size: t, radius: n, variant: r, gradient: o, color: i }) => {
  const s = e.variantColorResolver({
    color: i || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled"
  });
  return {
    root: {
      "--ai-size": le(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : dt(n),
      "--ai-bg": i || r ? s.background : void 0,
      "--ai-hover": i || r ? s.hover : void 0,
      "--ai-hover-color": i || r ? s.hoverColor : void 0,
      "--ai-color": i || r ? s.color : void 0,
      "--ai-bd": i || r ? s.border : void 0
    }
  };
}, Co = Ut((e, t) => {
  const n = j("ActionIcon", Qy, e), {
    className: r,
    unstyled: o,
    variant: i,
    classNames: s,
    styles: a,
    style: c,
    loading: l,
    loaderProps: u,
    size: d,
    color: f,
    radius: p,
    __staticSelector: m,
    gradient: g,
    vars: h,
    children: w,
    disabled: S,
    "data-disabled": b,
    ...y
  } = n, x = Q({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: c,
    classes: xo,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: Zy
  });
  return /* @__PURE__ */ v.createElement(
    ln,
    {
      ...x("root", { active: !S && !l && !b }),
      ...y,
      unstyled: o,
      variant: i,
      size: d,
      disabled: S || l,
      ref: t,
      mod: { loading: l, disabled: S || b }
    },
    l ? /* @__PURE__ */ v.createElement(
      ur,
      {
        ...x("loader"),
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)",
        ...u
      }
    ) : w
  );
});
Co.classes = xo;
Co.displayName = "@mantine/core/ActionIcon";
Co.Group = Ks;
const Md = ie(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) => /* @__PURE__ */ v.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n
    },
    /* @__PURE__ */ v.createElement(
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
Md.displayName = "@mantine/core/CloseIcon";
var Fd = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const e0 = {
  variant: "subtle"
}, t0 = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": le(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : dt(n),
    "--cb-icon-size": D(r)
  }
}), Eo = Ut((e, t) => {
  const n = j("CloseButton", e0, e), {
    iconSize: r,
    children: o,
    vars: i,
    radius: s,
    className: a,
    classNames: c,
    style: l,
    styles: u,
    unstyled: d,
    "data-disabled": f,
    disabled: p,
    variant: m,
    ...g
  } = n, h = Q({
    name: "CloseButton",
    props: n,
    className: a,
    style: l,
    classes: Fd,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: t0
  });
  return /* @__PURE__ */ v.createElement(
    ln,
    {
      ref: t,
      ...g,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: { disabled: p || f },
      ...h("root", { variant: m, active: !0 })
    },
    /* @__PURE__ */ v.createElement(Md, null),
    o
  );
});
Eo.classes = Fd;
Eo.displayName = "@mantine/core/CloseButton";
function n0(e) {
  return Cm.toArray(e).filter(Boolean);
}
var Bd = { root: "m-4081bf90" };
const r0 = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, o0 = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": Nu(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), wn = q((e, t) => {
  const n = j("Group", r0, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    children: c,
    gap: l,
    align: u,
    justify: d,
    wrap: f,
    grow: p,
    preventGrowOverflow: m,
    vars: g,
    variant: h,
    __size: w,
    ...S
  } = n, b = n0(c), y = b.length, x = Nu(l ?? "md"), I = { childWidth: `calc(${100 / y}% - (${x} - ${x} / ${y}))` }, E = Q({
    name: "Group",
    props: n,
    stylesCtx: I,
    className: o,
    style: i,
    classes: Bd,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: o0
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...E("root"),
      ref: t,
      variant: h,
      mod: { grow: p },
      size: w,
      ...S
    },
    b
  );
});
wn.classes = Bd;
wn.displayName = "@mantine/core/Group";
const [i0, dr] = Cs({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var nt = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const rl = {}, s0 = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Xe(t)} - ${D(2)})`
  }
}), Io = q((e, t) => {
  const n = j("InputDescription", rl, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...p
  } = j("InputDescription", rl, n), m = dr(), g = Q({
    name: ["InputWrapper", u],
    props: n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: c,
    varsResolver: s0
  }), h = d && (m == null ? void 0 : m.getStyles) || g;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "p",
      ref: t,
      variant: f,
      size: l,
      ...h("description"),
      ...p
    }
  );
});
Io.classes = nt;
Io.displayName = "@mantine/core/InputDescription";
const a0 = {}, c0 = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Xe(t)} - ${D(2)})`
  }
}), Do = q((e, t) => {
  const n = j("InputError", a0, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...p
  } = n, m = Q({
    name: ["InputWrapper", u],
    props: n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "error",
    vars: c,
    varsResolver: c0
  }), g = dr(), h = d && (g == null ? void 0 : g.getStyles) || m;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "p",
      ref: t,
      variant: f,
      size: l,
      ...h("error"),
      ...p
    }
  );
});
Do.classes = nt;
Do.displayName = "@mantine/core/InputError";
const ol = {
  labelElement: "label"
}, l0 = (e, { size: t }) => ({
  label: {
    "--input-label-size": Xe(t),
    "--input-asterisk-color": void 0
  }
}), Po = q((e, t) => {
  const n = j("InputLabel", ol, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    labelElement: l,
    size: u,
    required: d,
    htmlFor: f,
    onMouseDown: p,
    children: m,
    __staticSelector: g,
    variant: h,
    ...w
  } = j("InputLabel", ol, n), S = Q({
    name: ["InputWrapper", g],
    props: n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: c,
    varsResolver: l0
  }), b = dr(), y = (b == null ? void 0 : b.getStyles) || S;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...y("label"),
      component: l,
      variant: h,
      size: u,
      ref: t,
      htmlFor: l === "label" ? f : void 0,
      mod: { required: d },
      onMouseDown: (x) => {
        p == null || p(x), !x.defaultPrevented && x.detail > 1 && x.preventDefault();
      },
      ...w
    },
    m,
    d && /* @__PURE__ */ v.createElement("span", { ...y("required"), "aria-hidden": !0 }, " *")
  );
});
Po.classes = nt;
Po.displayName = "@mantine/core/InputLabel";
const il = {}, Ys = q((e, t) => {
  const n = j("InputPlaceholder", il, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: d,
    ...f
  } = j("InputPlaceholder", il, n), p = Q({
    name: ["InputPlaceholder", l],
    props: n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...p("placeholder"),
      mod: { error: !!d },
      component: "span",
      variant: u,
      ref: t,
      ...f
    }
  );
});
Ys.classes = nt;
Ys.displayName = "@mantine/core/InputPlaceholder";
function u0(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((c) => c === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const d0 = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, f0 = (e, { size: t }) => ({
  label: {
    "--input-label-size": Xe(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Xe(t)} - ${D(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Xe(t)} - ${D(2)})`
  }
}), Xs = q((e, t) => {
  const n = j("InputWrapper", d0, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    variant: u,
    __staticSelector: d,
    inputContainer: f,
    inputWrapperOrder: p,
    label: m,
    error: g,
    description: h,
    labelProps: w,
    descriptionProps: S,
    errorProps: b,
    labelElement: y,
    children: x,
    withAsterisk: C,
    id: I,
    required: E,
    __stylesApiProps: T,
    ...$
  } = n, N = Q({
    name: ["InputWrapper", d],
    props: T || n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: f0
  }), L = {
    size: l,
    variant: u,
    __staticSelector: d
  }, k = Ht(I), A = typeof C == "boolean" ? C : E, _ = (b == null ? void 0 : b.id) || `${k}-error`, R = (S == null ? void 0 : S.id) || `${k}-description`, B = k, O = !!g && typeof g != "boolean", H = !!h, X = `${O ? _ : ""} ${H ? R : ""}`, ne = X.trim().length > 0 ? X.trim() : void 0, be = (w == null ? void 0 : w.id) || `${k}-label`, ue = m && /* @__PURE__ */ v.createElement(
    Po,
    {
      key: "label",
      labelElement: y,
      id: be,
      htmlFor: B,
      required: A,
      ...L,
      ...w
    },
    m
  ), Ae = H && /* @__PURE__ */ v.createElement(
    Io,
    {
      key: "description",
      ...S,
      ...L,
      size: (S == null ? void 0 : S.size) || L.size,
      id: (S == null ? void 0 : S.id) || R
    },
    h
  ), ye = /* @__PURE__ */ v.createElement(v.Fragment, { key: "input" }, f(x)), re = O && /* @__PURE__ */ v.createElement(
    Do,
    {
      ...b,
      ...L,
      size: (b == null ? void 0 : b.size) || L.size,
      key: "error",
      id: (b == null ? void 0 : b.id) || _
    },
    g
  ), ve = p.map((Le) => {
    switch (Le) {
      case "label":
        return ue;
      case "input":
        return ye;
      case "description":
        return Ae;
      case "error":
        return re;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ v.createElement(
    i0,
    {
      value: {
        getStyles: N,
        describedBy: ne,
        inputId: B,
        labelId: be,
        ...u0(p, { hasDescription: H, hasError: O })
      }
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        ref: t,
        variant: u,
        size: l,
        mod: { error: !!g },
        ...N("root"),
        ...$
      },
      ve
    )
  );
});
Xs.classes = nt;
Xs.displayName = "@mantine/core/InputWrapper";
const p0 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, m0 = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": le(t.size, "input-height"),
    "--input-fz": Xe(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : dt(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? D(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? D(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? le(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), et = Ut((e, t) => {
  const n = j("Input", p0, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    required: c,
    __staticSelector: l,
    __stylesApiProps: u,
    size: d,
    wrapperProps: f,
    error: p,
    disabled: m,
    leftSection: g,
    leftSectionProps: h,
    leftSectionWidth: w,
    rightSection: S,
    rightSectionProps: b,
    rightSectionWidth: y,
    rightSectionPointerEvents: x,
    leftSectionPointerEvents: C,
    variant: I,
    vars: E,
    pointer: T,
    multiline: $,
    radius: N,
    id: L,
    withAria: k,
    withErrorStyles: A,
    ..._
  } = n, { styleProps: R, rest: B } = ho(_), O = dr(), H = { offsetBottom: O == null ? void 0 : O.offsetBottom, offsetTop: O == null ? void 0 : O.offsetTop }, X = Q({
    name: ["Input", l],
    props: u || n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    stylesCtx: H,
    rootSelector: "wrapper",
    vars: E,
    varsResolver: m0
  }), ne = k ? {
    required: c,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": O == null ? void 0 : O.describedBy,
    id: (O == null ? void 0 : O.inputId) || L
  } : {};
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...X("wrapper"),
      ...R,
      ...f,
      mod: {
        error: !!p && A,
        pointer: T,
        disabled: m,
        multiline: $,
        "data-with-right-section": !!S,
        "data-with-left-section": !!g
      },
      variant: I,
      size: d
    },
    g && /* @__PURE__ */ v.createElement(
      "div",
      {
        ...h,
        "data-position": "left",
        ...X("section", {
          className: h == null ? void 0 : h.className,
          style: h == null ? void 0 : h.style
        })
      },
      g
    ),
    /* @__PURE__ */ v.createElement(
      G,
      {
        component: "input",
        ...B,
        ...ne,
        ref: t,
        required: c,
        mod: { disabled: m, error: !!p && A },
        variant: I,
        ...X("input")
      }
    ),
    S && /* @__PURE__ */ v.createElement(
      "div",
      {
        ...b,
        "data-position": "right",
        ...X("section", {
          className: b == null ? void 0 : b.className,
          style: b == null ? void 0 : b.style
        })
      },
      S
    )
  );
});
et.classes = nt;
et.Wrapper = Xs;
et.Label = Po;
et.Error = Do;
et.Description = Io;
et.Placeholder = Ys;
et.displayName = "@mantine/core/Input";
function g0(e, t, n) {
  const r = j(e, t, n), {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: c,
    styles: l,
    className: u,
    unstyled: d,
    __staticSelector: f,
    __stylesApiProps: p,
    errorProps: m,
    labelProps: g,
    descriptionProps: h,
    wrapperProps: w,
    id: S,
    size: b,
    style: y,
    inputContainer: x,
    inputWrapperOrder: C,
    withAsterisk: I,
    variant: E,
    vars: T,
    ...$
  } = r, { styleProps: N, rest: L } = ho($), k = {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: c,
    className: u,
    __staticSelector: f,
    __stylesApiProps: p || r,
    errorProps: m,
    labelProps: g,
    descriptionProps: h,
    unstyled: d,
    styles: l,
    size: b,
    style: y,
    inputContainer: x,
    inputWrapperOrder: C,
    withAsterisk: I,
    variant: E,
    id: S,
    ...w
  };
  return {
    ...L,
    classNames: c,
    styles: l,
    unstyled: d,
    wrapperProps: { ...k, ...N },
    inputProps: {
      required: a,
      classNames: c,
      styles: l,
      unstyled: d,
      size: b,
      __staticSelector: f,
      __stylesApiProps: p || r,
      error: s,
      variant: E,
      id: S
    }
  };
}
const h0 = {
  __staticSelector: "InputBase",
  withAria: !0
}, qt = Ut((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = g0("InputBase", h0, e);
  return /* @__PURE__ */ v.createElement(et.Wrapper, { ...r }, /* @__PURE__ */ v.createElement(et, { ...n, ...o, ref: t }));
});
qt.classes = { ...et.classes, ...et.Wrapper.classes };
qt.displayName = "@mantine/core/InputBase";
const [b0, Js] = Gt(
  "Accordion component was not found in the tree"
);
function Qs({ style: e, size: t = 16, ...n }) {
  return /* @__PURE__ */ v.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: D(t), height: D(t), display: "block" },
      ...n
    },
    /* @__PURE__ */ v.createElement(
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
Qs.displayName = "@mantine/core/AccordionChevron";
const [y0, jd] = Gt("Accordion.Item component was not found in the tree");
var fr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const v0 = {}, Zs = q((e, t) => {
  const {
    classNames: n,
    className: r,
    style: o,
    styles: i,
    vars: s,
    chevron: a,
    icon: c,
    onClick: l,
    onKeyDown: u,
    children: d,
    disabled: f,
    ...p
  } = j("AccordionControl", v0, e), { value: m } = jd(), g = Js(), h = g.isItemActive(m), w = typeof g.order == "number", S = `h${g.order}`, b = /* @__PURE__ */ v.createElement(
    ln,
    {
      ...p,
      ...g.getStyles("control", { className: r, classNames: n, style: o, styles: i, variant: g.variant }),
      unstyled: g.unstyled,
      mod: [
        "accordion-control",
        { active: h, "chevron-position": g.chevronPosition, disabled: f }
      ],
      ref: t,
      onClick: (y) => {
        l == null || l(y), g.onChange(m);
      },
      type: "button",
      disabled: f,
      "aria-expanded": h,
      "aria-controls": g.getRegionId(m),
      id: g.getControlId(m),
      onKeyDown: Ou({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: g.loop,
        orientation: "vertical",
        onKeyDown: u
      })
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        component: "span",
        mod: { rotate: !g.disableChevronRotation && h, position: g.chevronPosition },
        ...g.getStyles("chevron", { classNames: n, styles: i })
      },
      a || g.chevron
    ),
    /* @__PURE__ */ v.createElement("span", { ...g.getStyles("label", { classNames: n, styles: i }) }, d),
    c && /* @__PURE__ */ v.createElement(
      G,
      {
        component: "span",
        mod: { "chevron-position": g.chevronPosition },
        ...g.getStyles("icon", { classNames: n, styles: i })
      },
      c
    )
  );
  return w ? /* @__PURE__ */ v.createElement(S, { ...g.getStyles("itemTitle", { classNames: n, styles: i }) }, b) : b;
});
Zs.displayName = "@mantine/core/AccordionControl";
Zs.classes = fr;
const w0 = {}, ea = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...c } = j(
    "AccordionItem",
    w0,
    e
  ), l = Js();
  return /* @__PURE__ */ v.createElement(y0, { value: { value: a } }, /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      mod: { active: l.isItemActive(a) },
      ...l.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: l.variant }),
      ...c
    }
  ));
});
ea.displayName = "@mantine/core/AccordionItem";
ea.classes = fr;
const S0 = {}, ta = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...c } = j(
    "AccordionPanel",
    S0,
    e
  ), { value: l } = jd(), u = Js();
  return /* @__PURE__ */ v.createElement(
    Qu,
    {
      ref: t,
      ...u.getStyles("panel", { className: r, classNames: n, style: o, styles: i }),
      ...c,
      in: u.isItemActive(l),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(l),
      "aria-labelledby": u.getControlId(l)
    },
    /* @__PURE__ */ v.createElement("div", { ...u.getStyles("content", { classNames: n, styles: i }) }, a)
  );
});
ta.displayName = "@mantine/core/AccordionPanel";
ta.classes = fr;
const x0 = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ v.createElement(Qs, null)
}, C0 = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : dt(r)
  }
});
function oe(e) {
  const t = j("Accordion", x0, e), {
    classNames: n,
    className: r,
    style: o,
    styles: i,
    unstyled: s,
    vars: a,
    children: c,
    multiple: l,
    value: u,
    defaultValue: d,
    onChange: f,
    id: p,
    loop: m,
    transitionDuration: g,
    disableChevronRotation: h,
    chevronPosition: w,
    chevronSize: S,
    order: b,
    chevron: y,
    variant: x,
    radius: C,
    ...I
  } = t, E = Ht(p), [T, $] = kt({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), N = (A) => Array.isArray(T) ? T.includes(A) : A === T, L = (A) => {
    const _ = Array.isArray(T) ? T.includes(A) ? T.filter((R) => R !== A) : [...T, A] : A === T ? null : A;
    $(_);
  }, k = Q({
    name: "Accordion",
    classes: fr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: C0
  });
  return /* @__PURE__ */ v.createElement(
    b0,
    {
      value: {
        isItemActive: N,
        onChange: L,
        getControlId: Vr(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Vr(
          `${E}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: h,
        chevronPosition: w,
        order: b,
        chevron: y,
        loop: m,
        getStyles: k,
        variant: x,
        unstyled: s
      }
    },
    /* @__PURE__ */ v.createElement(G, { ...k("root"), id: E, ...I, variant: x, "data-accordion": !0 }, c)
  );
}
const E0 = (e) => e;
oe.extend = E0;
oe.classes = fr;
oe.displayName = "@mantine/core/Accordion";
oe.Item = ea;
oe.Panel = ta;
oe.Control = Zs;
oe.Chevron = Qs;
var Wd = { root: "m-b6d8b162" };
function I0(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const D0 = {
  inherit: !1
}, P0 = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": Xe(o),
    "--text-lh": qg(o),
    "--text-gradient": t === "gradient" ? Ji(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? Mt(i, e) : void 0
  }
}), Je = Ut((e, t) => {
  const n = j("Text", D0, e), {
    lineClamp: r,
    truncate: o,
    inline: i,
    inherit: s,
    gradient: a,
    span: c,
    __staticSelector: l,
    vars: u,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    variant: h,
    mod: w,
    size: S,
    ...b
  } = n, y = Q({
    name: ["Text", l],
    props: n,
    classes: Wd,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: P0
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...y("root", { focusable: !0 }),
      ref: t,
      component: c ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": I0(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s
        },
        w
      ],
      size: S,
      ...b
    }
  );
});
Je.classes = Wd;
Je.displayName = "@mantine/core/Text";
function zd(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => zd(t))
  } : e;
}
function Vd(e) {
  return e ? e.map(zd) : [];
}
function na(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...na(n.items) } : (t[n.value] = n, t), {});
}
var Pe = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const R0 = {
  error: null
}, A0 = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": le(t, "combobox-chevron-size")
  }
}), ra = q((e, t) => {
  const n = j("ComboboxChevron", R0, e), { size: r, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, ...d } = n, f = Q({
    name: "ComboboxChevron",
    classes: Pe,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: A0,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "svg",
      ...d,
      ...f("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }],
      ref: t
    },
    /* @__PURE__ */ v.createElement(
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
ra.classes = Pe;
ra.displayName = "@mantine/core/ComboboxChevron";
const [T0, rt] = Gt(
  "Combobox component was not found in tree"
), Gd = ie(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ v.createElement(
    Eo,
    {
      ref: i,
      size: e || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...o,
      onMouseDown: (s) => {
        s.preventDefault(), t == null || t(s);
      },
      onClick: (s) => {
        r(), n == null || n(s);
      }
    }
  )
);
Gd.displayName = "@mantine/core/ComboboxClearButton";
const O0 = {}, oa = q((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    O0,
    e
  ), c = rt();
  return /* @__PURE__ */ v.createElement(
    ft.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": s || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: n, styles: r })
    }
  );
});
oa.classes = Pe;
oa.displayName = "@mantine/core/ComboboxDropdown";
const N0 = {
  refProp: "ref"
}, Hd = q((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", N0, e);
  if (rt(), !Vt(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ v.createElement(ft.Target, { ref: t, refProp: r }, n);
});
Hd.displayName = "@mantine/core/ComboboxDropdownTarget";
const $0 = {}, ia = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    $0,
    e
  ), c = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...c.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
ia.classes = Pe;
ia.displayName = "@mantine/core/ComboboxEmpty";
function sa({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o
}) {
  const i = rt(), [s, a] = U(null), c = (u) => {
    if (e == null || e(u), !i.readOnly && t) {
      if (u.nativeEvent.code === "ArrowDown" && (u.preventDefault(), i.store.dropdownOpened ? a(i.store.selectNextOption()) : (i.store.openDropdown("keyboard"), a(i.store.selectActiveOption()))), u.nativeEvent.code === "ArrowUp" && (u.preventDefault(), i.store.dropdownOpened ? a(i.store.selectPreviousOption()) : (i.store.openDropdown("keyboard"), a(i.store.selectActiveOption()))), u.nativeEvent.code === "Enter") {
        const d = i.store.getSelectedOptionIndex();
        i.store.dropdownOpened && d !== -1 ? (u.preventDefault(), i.store.clickSelectedOption()) : o === "button" && (u.preventDefault(), i.store.openDropdown("keyboard"));
      }
      u.nativeEvent.code === "Escape" && i.store.closeDropdown("keyboard"), u.nativeEvent.code === "Space" && o === "button" && (u.preventDefault(), i.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...n ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(i.store.listId && i.store.dropdownOpened) || void 0,
      "aria-controls": i.store.listId,
      "aria-activedescendant": i.store.dropdownOpened && s || void 0,
      autoComplete: "off",
      "data-expanded": i.store.dropdownOpened ? !0 : void 0
    } : {},
    onKeyDown: c
  };
}
const _0 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Ud = q((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxEventsTarget", _0, e);
  if (!Vt(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = sa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  });
  return cn(n, {
    ...u,
    ...c,
    [r]: Re(t, l.store.targetRef, n == null ? void 0 : n.ref)
  });
});
Ud.displayName = "@mantine/core/ComboboxEventsTarget";
const L0 = {}, aa = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    L0,
    e
  ), c = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...c.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
aa.classes = Pe;
aa.displayName = "@mantine/core/ComboboxFooter";
const k0 = {}, ca = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: c, ...l } = j(
    "ComboboxGroup",
    k0,
    e
  ), u = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: i }),
      ...l
    },
    c && /* @__PURE__ */ v.createElement("div", { ...u.getStyles("groupLabel", { classNames: n, styles: i }) }, c),
    a
  );
});
ca.classes = Pe;
ca.displayName = "@mantine/core/ComboboxGroup";
const M0 = {}, la = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    M0,
    e
  ), c = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...c.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
la.classes = Pe;
la.displayName = "@mantine/core/ComboboxHeader";
const F0 = {}, ua = q((e, t) => {
  const n = j("ComboboxOption", F0, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    vars: a,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: d,
    onMouseOver: f,
    disabled: p,
    selected: m,
    ...g
  } = n, h = rt(), w = gu(), S = l || w;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...h.getStyles("option", { className: o, classNames: r, styles: s, style: i }),
      ...g,
      ref: t,
      id: S,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": p, "combobox-selected": m }
      ],
      role: "option",
      onClick: (b) => {
        var y;
        p ? b.preventDefault() : ((y = h.onOptionSubmit) == null || y.call(h, n.value, n), c == null || c(b));
      },
      onMouseDown: (b) => {
        b.preventDefault(), d == null || d(b);
      },
      onMouseOver: (b) => {
        h.resetSelectionOnOptionHover && h.store.resetSelectedOption(), f == null || f(b);
      }
    }
  );
});
ua.classes = Pe;
ua.displayName = "@mantine/core/ComboboxOption";
const B0 = {}, da = q((e, t) => {
  const n = j("ComboboxOptions", B0, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = n, d = rt(), f = Ht(a);
  return V(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...d.getStyles("options", { className: o, style: i, classNames: r, styles: s }),
      ...u,
      id: f,
      role: "listbox",
      "aria-labelledby": l,
      onMouseDown: (p) => {
        p.preventDefault(), c == null || c(p);
      }
    }
  );
});
da.classes = Pe;
da.displayName = "@mantine/core/ComboboxOptions";
const j0 = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, fa = q((e, t) => {
  const n = j("ComboboxSearch", j0, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = n, f = rt(), p = f.getStyles("search"), m = sa({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c
  });
  return /* @__PURE__ */ v.createElement(
    et,
    {
      ref: Re(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
fa.classes = Pe;
fa.displayName = "@mantine/core/ComboboxSearch";
const W0 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, qd = q((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxTarget", W0, e);
  if (!Vt(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = sa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  }), d = cn(n, {
    ...u,
    ...c
  });
  return /* @__PURE__ */ v.createElement(ft.Target, { ref: Re(t, l.store.targetRef) }, d);
});
qd.displayName = "@mantine/core/ComboboxTarget";
function z0(e, t, n) {
  for (let r = e - 1; r >= 0; r -= 1)
    if (!t[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (n) {
    for (let r = t.length - 1; r > -1; r -= 1)
      if (!t[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return e;
}
function V0(e, t, n) {
  for (let r = e + 1; r < t.length; r += 1)
    if (!t[r].hasAttribute("data-combobox-disabled"))
      return r;
  if (n) {
    for (let r = 0; r < t.length; r += 1)
      if (!t[r].hasAttribute("data-combobox-disabled"))
        return r;
  }
  return e;
}
function G0(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function pa({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, c] = kt({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), l = W(null), u = W(-1), d = W(null), f = W(null), p = W(-1), m = W(-1), g = W(-1), h = Z(
    (R = "unknown") => {
      a || (c(!0), o == null || o(R));
    },
    [c, o, a]
  ), w = Z(
    (R = "unknown") => {
      a && (c(!1), r == null || r(R));
    },
    [c, r, a]
  ), S = Z(
    (R = "unknown") => {
      a ? w(R) : h(R);
    },
    [w, h, a]
  ), b = Z(() => {
    const R = document.querySelector(`#${l.current} [data-combobox-selected]`);
    R == null || R.removeAttribute("data-combobox-selected"), R == null || R.removeAttribute("aria-selected");
  }, []), y = Z(
    (R) => {
      const B = document.getElementById(l.current), O = B == null ? void 0 : B.querySelectorAll("[data-combobox-option]");
      if (!O)
        return null;
      const H = R >= O.length ? 0 : R < 0 ? O.length - 1 : R;
      return u.current = H, O != null && O[H] && !O[H].hasAttribute("data-combobox-disabled") ? (b(), O[H].setAttribute("data-combobox-selected", "true"), O[H].setAttribute("aria-selected", "true"), O[H].scrollIntoView({ block: "nearest", behavior: s }), O[H].id) : null;
    },
    [s, b]
  ), x = Z(() => {
    const R = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (R) {
      const B = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), O = Array.from(B).findIndex((H) => H === R);
      return y(O);
    }
    return y(0);
  }, [y]), C = Z(
    () => y(
      V0(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [y, i]
  ), I = Z(
    () => y(
      z0(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [y, i]
  ), E = Z(
    () => y(
      G0(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [y]
  ), T = Z((R = "selected") => {
    g.current = window.setTimeout(() => {
      const B = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), O = Array.from(B).findIndex(
        (H) => H.hasAttribute(`data-combobox-${R}`)
      );
      u.current = O;
    }, 0);
  }, []), $ = Z(() => {
    u.current = -1, b();
  }, [b]), N = Z(() => {
    const R = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), B = R == null ? void 0 : R[u.current];
    B == null || B.click();
  }, []), L = Z((R) => {
    l.current = R;
  }, []), k = Z(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), A = Z(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), _ = Z(() => u.current, []);
  return V(
    () => () => {
      window.clearTimeout(p.current), window.clearTimeout(m.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: h,
    closeDropdown: w,
    toggleDropdown: S,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: _,
    selectOption: y,
    selectFirstOption: E,
    selectActiveOption: x,
    selectNextOption: C,
    selectPreviousOption: I,
    resetSelectedOption: $,
    updateSelectedOptionIndex: T,
    listId: l.current,
    setListId: L,
    clickSelectedOption: N,
    searchRef: d,
    focusSearchInput: k,
    targetRef: f,
    focusTarget: A
  };
}
const H0 = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, U0 = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": Xe(t),
    "--combobox-option-padding": le(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : D(n),
    "--combobox-option-fz": Xe(t),
    "--combobox-option-padding": le(t, "combobox-option-padding")
  }
});
function J(e) {
  const t = j("Combobox", H0, e), {
    classNames: n,
    styles: r,
    unstyled: o,
    children: i,
    store: s,
    vars: a,
    onOptionSubmit: c,
    size: l,
    dropdownPadding: u,
    resetSelectionOnOptionHover: d,
    __staticSelector: f,
    readOnly: p,
    ...m
  } = t, g = pa(), h = s || g, w = Q({
    name: f || "Combobox",
    classes: Pe,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: U0
  });
  return /* @__PURE__ */ v.createElement(
    T0,
    {
      value: {
        getStyles: w,
        store: h,
        onOptionSubmit: c,
        size: l,
        resetSelectionOnOptionHover: d,
        readOnly: p
      }
    },
    /* @__PURE__ */ v.createElement(
      ft,
      {
        opened: h.dropdownOpened,
        ...m,
        onClose: h.closeDropdown,
        withRoles: !1,
        unstyled: o
      },
      i
    )
  );
}
const q0 = (e) => e;
J.extend = q0;
J.classes = Pe;
J.displayName = "@mantine/core/Combobox";
J.Target = qd;
J.Dropdown = oa;
J.Options = da;
J.Option = ua;
J.Search = fa;
J.Empty = ia;
J.Chevron = ra;
J.Footer = aa;
J.Header = la;
J.EventsTarget = Ud;
J.DropdownTarget = Hd;
J.Group = ca;
J.ClearButton = Gd;
function K0({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: D(e), height: D(e), ...t } : t;
  return /* @__PURE__ */ v.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
      "aria-hidden": !0,
      ...n
    },
    /* @__PURE__ */ v.createElement(
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
function Sn(e) {
  return "group" in e;
}
function Kd({
  options: e,
  search: t,
  limit: n
}) {
  const r = t.trim().toLowerCase(), o = [];
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i];
    if (o.length === n)
      return o;
    Sn(s) && o.push({
      group: s.group,
      items: Kd({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), Sn(s) || s.label.toLowerCase().includes(r) && o.push(s);
  }
  return o;
}
function Y0(e) {
  if (e.length === 0)
    return !0;
  for (const t of e)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function Yd(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Sn(n))
        Yd(n.items, t);
      else {
        if (typeof n.value > "u")
          throw new Error("[@mantine/core] Each option must have value property");
        if (typeof n.value != "string")
          throw new Error(
            `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof n.value}`
          );
        if (t.has(n.value))
          throw new Error(
            `[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`
          );
        t.add(n.value);
      }
}
function Pi(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function Xd({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!Sn(e)) {
    const s = t && Pi(n, e.value) && /* @__PURE__ */ v.createElement(K0, { className: Pe.optionsDropdownCheckIcon });
    return /* @__PURE__ */ v.createElement(
      J.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: yt({ [Pe.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": Pi(n, e.value) || void 0,
        "aria-selected": Pi(n, e.value)
      },
      r === "left" && s,
      /* @__PURE__ */ v.createElement("span", null, e.label),
      r === "right" && s
    );
  }
  const i = e.items.map((s) => /* @__PURE__ */ v.createElement(
    Xd,
    {
      data: s,
      value: n,
      key: s.value,
      unstyled: o,
      withCheckIcon: t,
      checkIconPosition: r
    }
  ));
  return /* @__PURE__ */ v.createElement(J.Group, { label: e.group }, i);
}
function Jd({
  data: e,
  hidden: t,
  hiddenWhenEmpty: n,
  filter: r,
  search: o,
  limit: i,
  maxDropdownHeight: s,
  withScrollArea: a = !0,
  filterOptions: c = !0,
  withCheckIcon: l = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: f,
  unstyled: p,
  labelId: m
}) {
  Yd(e);
  const h = typeof o == "string" ? (r || Kd)({
    options: e,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : e, w = Y0(h), S = h.map((b) => /* @__PURE__ */ v.createElement(
    Xd,
    {
      data: b,
      key: Sn(b) ? b.group : b.value,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ v.createElement(J.Dropdown, { hidden: t || n && w }, /* @__PURE__ */ v.createElement(J.Options, { labelledBy: m }, a ? /* @__PURE__ */ v.createElement(
    cr.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Pe.optionsDropdownScrollArea
    },
    S
  ) : S, w && f && /* @__PURE__ */ v.createElement(J.Empty, null, f)));
}
var Ro = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const sl = {
  orientation: "horizontal"
}, X0 = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), ma = q((e, t) => {
  const n = j("ButtonGroup", sl, e), {
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    ...f
  } = j("ButtonGroup", sl, e), p = Q({
    name: "ButtonGroup",
    props: n,
    classes: Ro,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: X0,
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...p("group"),
      ref: t,
      variant: d,
      mod: { "data-orientation": c },
      role: "group",
      ...f
    }
  );
});
ma.classes = Ro;
ma.displayName = "@mantine/core/ButtonGroup";
const J0 = {}, Q0 = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s }) => {
  const a = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    gradient: r,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": le(i, "button-height"),
      "--button-padding-x": le(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? Xe(i.replace("compact-", "")) : Xe(i),
      "--button-radius": t === void 0 ? void 0 : dt(t),
      "--button-bg": n || o ? a.background : void 0,
      "--button-hover": n || o ? a.hover : void 0,
      "--button-color": n || o ? a.color : void 0,
      "--button-bd": n || o ? a.border : void 0,
      "--button-hover-color": n || o ? a.hoverColor : void 0
    }
  };
}, Hn = Ut((e, t) => {
  const n = j("Button", J0, e), {
    style: r,
    vars: o,
    className: i,
    color: s,
    disabled: a,
    children: c,
    leftSection: l,
    rightSection: u,
    fullWidth: d,
    variant: f,
    radius: p,
    loading: m,
    loaderProps: g,
    gradient: h,
    classNames: w,
    styles: S,
    unstyled: b,
    "data-disabled": y,
    ...x
  } = n, C = Q({
    name: "Button",
    props: n,
    classes: Ro,
    className: i,
    style: r,
    classNames: w,
    styles: S,
    unstyled: b,
    vars: o,
    varsResolver: Q0
  }), I = !!l, E = !!u;
  return /* @__PURE__ */ v.createElement(
    ln,
    {
      ref: t,
      ...C("root", { active: !a && !m && !y }),
      unstyled: b,
      variant: f,
      disabled: a || m,
      mod: {
        disabled: a || y,
        loading: m,
        block: d,
        "with-left-section": I,
        "with-right-section": E
      },
      ...x
    },
    /* @__PURE__ */ v.createElement(G, { component: "span", ...C("loader"), "aria-hidden": !0 }, /* @__PURE__ */ v.createElement(
      ur,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...g
      }
    )),
    /* @__PURE__ */ v.createElement("span", { ...C("inner") }, l && /* @__PURE__ */ v.createElement(G, { component: "span", ...C("section"), mod: { position: "left" } }, l), /* @__PURE__ */ v.createElement(G, { component: "span", mod: { loading: m }, ...C("label") }, c), u && /* @__PURE__ */ v.createElement(G, { component: "span", ...C("section"), mod: { position: "right" } }, u))
  );
});
Hn.classes = Ro;
Hn.displayName = "@mantine/core/Button";
Hn.Group = ma;
var Qd = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const al = {
  withShadow: !0
}, Z0 = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : dt(t),
    "--cs-size": D(n)
  }
}), Un = Ut((e, t) => {
  const n = j("ColorSwatch", al, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    color: l,
    size: u,
    radius: d,
    withShadow: f,
    children: p,
    variant: m,
    ...g
  } = j("ColorSwatch", al, n), h = Q({
    name: "ColorSwatch",
    props: n,
    classes: Qd,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Z0
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      variant: m,
      size: u,
      ...h("root", { focusable: !0 }),
      ...g
    },
    /* @__PURE__ */ v.createElement("span", { ...h("alphaOverlay") }),
    f && /* @__PURE__ */ v.createElement("span", { ...h("shadowOverlay") }),
    /* @__PURE__ */ v.createElement("span", { ...h("colorOverlay", { style: { backgroundColor: l } }) }),
    /* @__PURE__ */ v.createElement("span", { ...h("childrenOverlay") }, p)
  );
});
Un.classes = Qd;
Un.displayName = "@mantine/core/ColorSwatch";
var Zd = { root: "m-7485cace" };
const ev = {}, tv = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : le(t, "container-size")
  }
}), ga = q((e, t) => {
  const n = j("Container", ev, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, ...u } = n, d = Q({
    name: "Container",
    classes: Zd,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: tv
  });
  return /* @__PURE__ */ v.createElement(G, { ref: t, mod: { fluid: l }, ...d("root"), ...u });
});
ga.classes = Zd;
ga.displayName = "@mantine/core/Container";
function nv({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = W(-1), i = W(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, c = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return V(() => s, []), { openDropdown: a, closeDropdown: c };
}
const [rv, ef] = Gt(
  "HoverCard component was not found in the tree"
), ov = {};
function tf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    ov,
    e
  ), i = ef(), s = Gr(n, i.openDropdown), a = Gr(r, i.closeDropdown);
  return /* @__PURE__ */ v.createElement(ft.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
tf.displayName = "@mantine/core/HoverCardDropdown";
const iv = {
  refProp: "ref"
}, nf = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    iv,
    e
  );
  if (!Vt(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = ef(), a = Gr(n.props.onMouseEnter, s.openDropdown), c = Gr(n.props.onMouseLeave, s.closeDropdown), l = { onMouseEnter: a, onMouseLeave: c };
  return /* @__PURE__ */ v.createElement(ft.Target, { refProp: r, ref: t, ...i }, cn(
    n,
    o ? { [o]: l } : l
  ));
});
nf.displayName = "@mantine/core/HoverCardTarget";
const sv = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function nn(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = j(
    "HoverCard",
    sv,
    e
  ), [c, { open: l, close: u }] = dh(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = nv({ open: l, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ v.createElement(rv, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ v.createElement(ft, { ...a, opened: c, __staticSelector: "HoverCard" }, t));
}
nn.displayName = "@mantine/core/HoverCard";
nn.Target = nf;
nn.Dropdown = tf;
nn.extend = (e) => e;
function rf(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const [av, ha] = Cs(), [cv, lv] = Cs();
var Ao = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const uv = {}, dv = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? le(t) : le(n, "pg-gap")
  }
}), ba = q((e, t) => {
  const n = j("PillGroup", uv, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, size: l, disabled: u, ...d } = n, f = ha(), p = (f == null ? void 0 : f.size) || l || void 0, m = Q({
    name: "PillGroup",
    classes: Ao,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: dv,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.createElement(cv, { value: { size: p, disabled: u } }, /* @__PURE__ */ v.createElement(G, { ref: t, size: p, ...m("group"), ...d }));
});
ba.classes = Ao;
ba.displayName = "@mantine/core/PillGroup";
const fv = {
  variant: "default"
}, pv = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": le(n, "pill-fz"),
    "--pill-height": le(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : dt(t)
  }
}), qn = q((e, t) => {
  const n = j("Pill", fv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    variant: l,
    children: u,
    withRemoveButton: d,
    onRemove: f,
    removeButtonProps: p,
    radius: m,
    size: g,
    disabled: h,
    ...w
  } = n, S = lv(), b = ha(), y = g || (S == null ? void 0 : S.size) || void 0, x = (b == null ? void 0 : b.variant) === "filled" ? "contrast" : l || "default", C = Q({
    name: "Pill",
    classes: Ao,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: pv,
    stylesCtx: { size: y }
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "span",
      ref: t,
      variant: x,
      size: y,
      ...C("root", { variant: x }),
      mod: { "with-remove": d, disabled: h || (S == null ? void 0 : S.disabled) },
      ...w
    },
    /* @__PURE__ */ v.createElement("span", { ...C("label") }, u),
    d && /* @__PURE__ */ v.createElement(
      Eo,
      {
        variant: "transparent",
        radius: m,
        tabIndex: -1,
        "aria-hidden": !0,
        unstyled: a,
        ...p,
        ...C("remove", {
          className: p == null ? void 0 : p.className,
          style: p == null ? void 0 : p.style
        }),
        onMouseDown: (I) => {
          var E;
          I.preventDefault(), I.stopPropagation(), (E = p == null ? void 0 : p.onMouseDown) == null || E.call(p, I);
        },
        onClick: (I) => {
          var E;
          I.stopPropagation(), f == null || f(), (E = p == null ? void 0 : p.onClick) == null || E.call(p, I);
        }
      }
    )
  );
});
qn.classes = Ao;
qn.displayName = "@mantine/core/Pill";
qn.Group = ba;
var of = { field: "m-45c4369d" };
const mv = {
  type: "visible"
}, ya = q((e, t) => {
  const n = j("PillsInputField", mv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    type: l,
    disabled: u,
    id: d,
    pointer: f,
    ...p
  } = n, m = ha(), g = dr(), h = Q({
    name: "PillsInputField",
    classes: of,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "field"
  }), w = u || (m == null ? void 0 : m.disabled);
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "input",
      ref: Re(t, m == null ? void 0 : m.fieldRef),
      "data-type": l,
      disabled: w,
      mod: { disabled: w, pointer: f },
      ...h("field"),
      ...p,
      id: (g == null ? void 0 : g.inputId) || d,
      "aria-invalid": m == null ? void 0 : m.hasError,
      "aria-describedby": g == null ? void 0 : g.describedBy,
      type: "text",
      onMouseDown: (S) => !f && S.stopPropagation()
    }
  );
});
ya.classes = of;
ya.displayName = "@mantine/core/PillsInputField";
const gv = {}, Xr = q((e, t) => {
  const n = j("PillsInput", gv, e), {
    children: r,
    onMouseDown: o,
    onClick: i,
    size: s,
    disabled: a,
    __staticSelector: c,
    error: l,
    variant: u,
    ...d
  } = n, f = W();
  return /* @__PURE__ */ v.createElement(av, { value: { fieldRef: f, size: s, disabled: a, hasError: !!l, variant: u } }, /* @__PURE__ */ v.createElement(
    qt,
    {
      size: s,
      error: l,
      variant: u,
      component: "div",
      ref: t,
      onMouseDown: (p) => {
        var m;
        p.preventDefault(), o == null || o(p), (m = f.current) == null || m.focus();
      },
      onClick: (p) => {
        var m;
        p.preventDefault(), i == null || i(p), (m = f.current) == null || m.focus();
      },
      ...d,
      multiline: !0,
      disabled: a,
      __staticSelector: c || "PillsInput",
      withAria: !1
    },
    r
  ));
});
Xr.displayName = "@mantine/core/PillsInput";
Xr.Field = ya;
function hv({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (Sn(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const bv = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, va = q((e, t) => {
  const n = j("MultiSelect", bv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    value: u,
    defaultValue: d,
    onChange: f,
    onKeyDown: p,
    variant: m,
    data: g,
    dropdownOpened: h,
    defaultDropdownOpened: w,
    onDropdownOpen: S,
    onDropdownClose: b,
    selectFirstOptionOnChange: y,
    onOptionSubmit: x,
    comboboxProps: C,
    filter: I,
    limit: E,
    withScrollArea: T,
    maxDropdownHeight: $,
    searchValue: N,
    defaultSearchValue: L,
    onSearchChange: k,
    readOnly: A,
    disabled: _,
    onFocus: R,
    onBlur: B,
    onPaste: O,
    radius: H,
    rightSection: X,
    rightSectionWidth: ne,
    rightSectionPointerEvents: be,
    rightSectionProps: ue,
    leftSection: Ae,
    leftSectionWidth: ye,
    leftSectionPointerEvents: re,
    leftSectionProps: ve,
    inputContainer: Le,
    inputWrapperOrder: xe,
    withAsterisk: Ce,
    labelProps: ke,
    descriptionProps: ae,
    errorProps: Y,
    wrapperProps: dn,
    description: Ue,
    label: Pt,
    error: qe,
    maxValues: Ee,
    searchable: me,
    nothingFoundMessage: Rt,
    withCheckIcon: Kt,
    checkIconPosition: se,
    hidePickedOptions: At,
    withErrorStyles: am,
    name: cm,
    form: lm,
    id: um,
    clearable: dm,
    clearButtonProps: fm,
    hiddenInputProps: pm,
    placeholder: lc,
    hiddenInputValuesDivider: mm,
    ...gm
  } = n, di = Ht(um), fi = Vd(g), vr = na(fi), Me = pa({
    opened: h,
    defaultOpened: w,
    onDropdownOpen: S,
    onDropdownClose: () => {
      b == null || b(), Me.resetSelectedOption();
    }
  }), {
    styleProps: hm,
    rest: { type: ZD, ...bm }
  } = ho(gm), [Te, Nn] = kt({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [wr, Sr] = kt({
    value: N,
    defaultValue: L,
    finalValue: "",
    onChange: k
  }), pi = Q({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: uc, resolvedStyles: dc } = qu({
    props: n,
    styles: s,
    classNames: r
  }), ym = (ce) => {
    p == null || p(ce), ce.key === " " && !me && (ce.preventDefault(), Me.toggleDropdown()), ce.key === "Backspace" && wr.length === 0 && Te.length > 0 && Nn(Te.slice(0, Te.length - 1));
  }, vm = Te.map((ce, mi) => {
    var mc;
    return /* @__PURE__ */ v.createElement(
      qn,
      {
        key: `${ce}-${mi}`,
        withRemoveButton: !A,
        onRemove: () => Nn(Te.filter((wm) => ce !== wm)),
        unstyled: a,
        ...pi("pill")
      },
      ((mc = vr[ce]) == null ? void 0 : mc.label) || ce
    );
  });
  V(() => {
    y && Me.selectFirstOption();
  }, [y, Te]);
  const fc = dm && Te.length > 0 && !_ && !A && /* @__PURE__ */ v.createElement(
    J.ClearButton,
    {
      size: l,
      ...fm,
      onClear: () => {
        Nn([]), Sr("");
      }
    }
  ), pc = hv({ data: fi, value: Te });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(
    J,
    {
      store: Me,
      classNames: uc,
      styles: dc,
      unstyled: a,
      size: l,
      readOnly: A,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (ce) => {
        x == null || x(ce), Sr(""), Me.updateSelectedOptionIndex("selected"), Te.includes(vr[ce].value) ? Nn(Te.filter((mi) => mi !== vr[ce].value)) : Te.length < Ee && Nn([...Te, vr[ce].value]);
      },
      ...C
    },
    /* @__PURE__ */ v.createElement(J.DropdownTarget, null, /* @__PURE__ */ v.createElement(
      Xr,
      {
        ...hm,
        __staticSelector: "MultiSelect",
        classNames: uc,
        styles: dc,
        unstyled: a,
        size: l,
        className: o,
        style: i,
        variant: m,
        disabled: _,
        radius: H,
        rightSection: X || fc || /* @__PURE__ */ v.createElement(J.Chevron, { size: l, error: qe, unstyled: a }),
        rightSectionPointerEvents: be || (fc ? "all" : "none"),
        rightSectionWidth: ne,
        rightSectionProps: ue,
        leftSection: Ae,
        leftSectionWidth: ye,
        leftSectionPointerEvents: re,
        leftSectionProps: ve,
        inputContainer: Le,
        inputWrapperOrder: xe,
        withAsterisk: Ce,
        labelProps: ke,
        descriptionProps: ae,
        errorProps: Y,
        wrapperProps: dn,
        description: Ue,
        label: Pt,
        error: qe,
        multiline: !0,
        withErrorStyles: am,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? Me.openDropdown() : Me.toggleDropdown(),
        "data-expanded": Me.dropdownOpened || void 0,
        id: di
      },
      /* @__PURE__ */ v.createElement(qn.Group, { disabled: _, unstyled: a, ...pi("pillsList") }, vm, /* @__PURE__ */ v.createElement(J.EventsTarget, null, /* @__PURE__ */ v.createElement(
        Xr.Field,
        {
          ...bm,
          ref: t,
          id: di,
          placeholder: lc,
          type: !me && !lc ? "hidden" : "visible",
          ...pi("inputField"),
          unstyled: a,
          onFocus: (ce) => {
            R == null || R(ce), me && Me.openDropdown();
          },
          onBlur: (ce) => {
            B == null || B(ce), Me.closeDropdown(), me && Me.closeDropdown(), Sr("");
          },
          onKeyDown: ym,
          value: wr,
          onChange: (ce) => {
            Sr(ce.currentTarget.value), me && Me.openDropdown(), y && Me.selectFirstOption();
          },
          disabled: _,
          readOnly: A || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ v.createElement(
      Jd,
      {
        data: At ? pc : fi,
        hidden: A || _,
        filter: I,
        search: wr,
        limit: E,
        hiddenWhenEmpty: !me || !Rt || At && pc.length === 0 && wr.trim().length === 0,
        withScrollArea: T,
        maxDropdownHeight: $,
        filterOptions: me,
        value: Te,
        checkIconPosition: se,
        withCheckIcon: Kt,
        nothingFoundMessage: Rt,
        unstyled: a,
        labelId: `${di}-label`
      }
    )
  ), /* @__PURE__ */ v.createElement(
    "input",
    {
      type: "hidden",
      name: cm,
      value: Te.join(mm),
      form: lm,
      disabled: _,
      ...pm
    }
  ));
});
va.classes = { ...qt.classes, ...J.classes };
va.displayName = "@mantine/core/MultiSelect";
const yv = {
  duration: 100,
  transition: "fade"
};
function vv(e, t) {
  return { ...yv, ...t, ...e };
}
function wv({
  offset: e,
  position: t
}) {
  const [n, r] = U(!1), o = W(), { x: i, y: s, elements: a, refs: c, update: l, placement: u } = Gs({
    placement: t,
    middleware: [
      Bs({
        crossAxis: !0,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  }), d = u.includes("right") ? e : t.includes("left") ? e * -1 : 0, f = u.includes("bottom") ? e : t.includes("top") ? e * -1 : 0, p = Z(
    ({ clientX: m, clientY: g }) => {
      c.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: m,
            y: g,
            left: m + d,
            top: g + f,
            right: m,
            bottom: g
          };
        }
      });
    },
    [a.reference]
  );
  return V(() => {
    if (c.floating.current) {
      const m = o.current;
      m.addEventListener("mousemove", p);
      const g = wt(c.floating.current);
      return g.forEach((h) => {
        h.addEventListener("scroll", l);
      }), () => {
        m.removeEventListener("mousemove", p), g.forEach((h) => {
          h.removeEventListener("scroll", l);
        });
      };
    }
  }, [a.reference, c.floating.current, l, p, n]), { handleMouseMove: p, x: i, y: s, opened: n, setOpened: r, boundaryRef: o, floating: c.setFloating };
}
var To = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const Sv = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: Es("popover")
}, xv = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : dt(t),
    "--tooltip-bg": n ? Mt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), wa = q((e, t) => {
  const n = j("TooltipFloating", Sv, e), {
    children: r,
    refProp: o,
    withinPortal: i,
    style: s,
    className: a,
    classNames: c,
    styles: l,
    unstyled: u,
    radius: d,
    color: f,
    label: p,
    offset: m,
    position: g,
    multiline: h,
    zIndex: w,
    disabled: S,
    variant: b,
    vars: y,
    portalProps: x,
    ...C
  } = n, I = vt(), E = Q({
    name: "TooltipFloating",
    props: n,
    classes: To,
    className: a,
    style: s,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: y,
    varsResolver: xv
  }), { handleMouseMove: T, x: $, y: N, opened: L, boundaryRef: k, floating: A, setOpened: _ } = wv({
    offset: m,
    position: g
  });
  if (!Vt(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const R = Re(k, r.ref, t), B = (H) => {
    var X, ne;
    (ne = (X = r.props).onMouseEnter) == null || ne.call(X, H), T(H), _(!0);
  }, O = (H) => {
    var X, ne;
    (ne = (X = r.props).onMouseLeave) == null || ne.call(X, H), _(!1);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(So, { ...x, withinPortal: i }, /* @__PURE__ */ v.createElement(
    G,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ...Ts(s, I),
          zIndex: w,
          display: !S && L ? "block" : "none",
          top: (N && Math.round(N)) ?? "",
          left: ($ && Math.round($)) ?? ""
        }
      }),
      variant: b,
      ref: A
    },
    p
  )), cn(r, {
    ...r.props,
    [o]: R,
    onMouseEnter: B,
    onMouseLeave: O
  }));
});
wa.classes = To;
wa.displayName = "@mantine/core/TooltipFloating";
const sf = an(!1), Cv = sf.Provider, Ev = () => bt(sf), Iv = {
  openDelay: 0,
  closeDelay: 0
};
function af(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", Iv, e);
  return /* @__PURE__ */ v.createElement(Cv, { value: !0 }, /* @__PURE__ */ v.createElement(wy, { delay: { open: t, close: n } }, r));
}
af.displayName = "@mantine/core/TooltipGroup";
function Dv(e) {
  var C, I, E;
  const [t, n] = U(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = Ev(), s = Ht(), { delay: a, currentId: c, setCurrentId: l } = Rd(), u = Z(
    (T) => {
      n(T), T && l(s);
    },
    [l, s]
  ), {
    x: d,
    y: f,
    context: p,
    refs: m,
    update: g,
    placement: h,
    middlewareData: { arrow: { x: w, y: S } = {} }
  } = Gs({
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      fd(e.offset),
      Bs({ padding: 8 }),
      ld(),
      wd({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [dd()] : []
    ]
  }), { getReferenceProps: b, getFloatingProps: y } = Oy([
    vy(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((I = e.events) != null && I.touch)
    }),
    Ty(p, { enabled: (E = e.events) == null ? void 0 : E.focus, keyboardOnly: !0 }),
    Ny(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    Ay(p, { enabled: typeof e.opened > "u" }),
    Sy(p, { id: s })
  ]);
  Ld({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), Lt(() => {
    var T;
    (T = e.onPositionChange) == null || T.call(e, h);
  }, [h]);
  const x = o && c && c !== s;
  return {
    x: d,
    y: f,
    arrowX: w,
    arrowY: S,
    reference: m.setReference,
    floating: m.setFloating,
    getFloatingProps: y,
    getReferenceProps: b,
    isGroupPhase: x,
    opened: o,
    placement: h
  };
}
const cl = {
  position: "top",
  refProp: "ref",
  withinPortal: !0,
  inline: !1,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: !0, focus: !1, touch: !1 },
  zIndex: Es("popover"),
  positionDependencies: []
}, Pv = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : dt(t),
    "--tooltip-bg": n ? Mt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), pr = q((e, t) => {
  const n = j("Tooltip", cl, e), {
    children: r,
    position: o,
    refProp: i,
    label: s,
    openDelay: a,
    closeDelay: c,
    onPositionChange: l,
    opened: u,
    withinPortal: d,
    radius: f,
    color: p,
    classNames: m,
    styles: g,
    unstyled: h,
    style: w,
    className: S,
    withArrow: b,
    arrowSize: y,
    arrowOffset: x,
    arrowRadius: C,
    arrowPosition: I,
    offset: E,
    transitionProps: T,
    multiline: $,
    events: N,
    zIndex: L,
    disabled: k,
    positionDependencies: A,
    onClick: _,
    onMouseEnter: R,
    onMouseLeave: B,
    inline: O,
    variant: H,
    keepMounted: X,
    vars: ne,
    portalProps: be,
    ...ue
  } = j("Tooltip", cl, n), { dir: Ae } = ar(), ye = W(null), re = Dv({
    position: Ad(Ae, o),
    closeDelay: c,
    openDelay: a,
    onPositionChange: l,
    opened: u,
    events: N,
    arrowRef: ye,
    arrowOffset: x,
    offset: typeof E == "number" ? E + (b ? y / 2 : 0) : E,
    positionDependencies: [...A, r],
    inline: O
  }), ve = Q({
    name: "Tooltip",
    props: n,
    classes: To,
    className: S,
    style: w,
    classNames: m,
    styles: g,
    unstyled: h,
    rootSelector: "tooltip",
    vars: ne,
    varsResolver: Pv
  });
  if (!Vt(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const Le = Re(re.reference, r.ref, t), xe = vv(T, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(So, { ...be, withinPortal: d }, /* @__PURE__ */ v.createElement(
    Us,
    {
      ...xe,
      keepMounted: X,
      mounted: !k && !!re.opened,
      duration: re.isGroupPhase ? 10 : xe.duration
    },
    (Ce) => /* @__PURE__ */ v.createElement(
      G,
      {
        ...ue,
        variant: H,
        mod: { multiline: $ },
        ...re.getFloatingProps({
          ref: re.floating,
          className: ve("tooltip").className,
          style: {
            ...ve("tooltip").style,
            ...Ce,
            zIndex: L,
            top: re.y ?? 0,
            left: re.x ?? 0
          }
        })
      },
      s,
      /* @__PURE__ */ v.createElement(
        Hs,
        {
          ref: ye,
          arrowX: re.arrowX,
          arrowY: re.arrowY,
          visible: b,
          position: re.placement,
          arrowSize: y,
          arrowOffset: x,
          arrowRadius: C,
          arrowPosition: I,
          ...ve("arrow")
        }
      )
    )
  )), cn(
    r,
    re.getReferenceProps({
      onClick: _,
      onMouseEnter: R,
      onMouseLeave: B,
      onMouseMove: n.onMouseMove,
      onPointerDown: n.onPointerDown,
      onPointerEnter: n.onPointerEnter,
      [i]: Le,
      className: yt(S, r.props.className),
      ...r.props
    })
  ));
});
pr.classes = To;
pr.displayName = "@mantine/core/Tooltip";
pr.Floating = wa;
pr.Group = af;
const Rv = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, mr = q((e, t) => {
  const n = j("Select", Rv, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    dropdownOpened: a,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: d,
    onBlur: f,
    onClick: p,
    onChange: m,
    data: g,
    value: h,
    defaultValue: w,
    selectFirstOptionOnChange: S,
    onOptionSubmit: b,
    comboboxProps: y,
    readOnly: x,
    disabled: C,
    filter: I,
    limit: E,
    withScrollArea: T,
    maxDropdownHeight: $,
    size: N,
    searchable: L,
    rightSection: k,
    checkIconPosition: A,
    withCheckIcon: _,
    nothingFoundMessage: R,
    name: B,
    form: O,
    searchValue: H,
    defaultSearchValue: X,
    onSearchChange: ne,
    allowDeselect: be,
    error: ue,
    rightSectionPointerEvents: Ae,
    id: ye,
    clearable: re,
    clearButtonProps: ve,
    hiddenInputProps: Le,
    ...xe
  } = n, Ce = Vn(() => Vd(g), [g]), ke = Vn(() => na(Ce), [Ce]), ae = Ht(ye), [Y, dn] = kt({
    value: h,
    defaultValue: w,
    finalValue: null,
    onChange: m
  }), Ue = typeof Y == "string" ? ke[Y] : void 0, [Pt, qe] = kt({
    value: H,
    defaultValue: X,
    finalValue: Ue ? Ue.label : "",
    onChange: ne
  }), Ee = pa({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Ee.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: Rt } = qu({
    props: n,
    styles: o,
    classNames: r
  });
  V(() => {
    S && Ee.selectFirstOption();
  }, [S, Y]), V(() => {
    h === null && qe(""), typeof h == "string" && Ue && qe(Ue.label);
  }, [h, Ue]);
  const Kt = re && !!Y && !C && !x && /* @__PURE__ */ v.createElement(
    J.ClearButton,
    {
      size: N,
      ...ve,
      onClear: () => {
        dn(null), qe("");
      }
    }
  );
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(
    J,
    {
      store: Ee,
      __staticSelector: "Select",
      classNames: me,
      styles: Rt,
      unstyled: i,
      readOnly: x,
      onOptionSubmit: (se) => {
        b == null || b(se);
        const At = be && ke[se].value === Y ? null : ke[se].value;
        dn(At), qe(typeof At == "string" ? ke[se].label : ""), Ee.closeDropdown();
      },
      size: N,
      ...y
    },
    /* @__PURE__ */ v.createElement(J.Target, { targetType: L ? "input" : "button" }, /* @__PURE__ */ v.createElement(
      qt,
      {
        id: ae,
        ref: t,
        rightSection: k || Kt || /* @__PURE__ */ v.createElement(J.Chevron, { size: N, error: ue, unstyled: i }),
        rightSectionPointerEvents: Ae || (Kt ? "all" : "none"),
        ...xe,
        size: N,
        __staticSelector: "Select",
        disabled: C,
        readOnly: x || !L,
        value: Pt,
        onChange: (se) => {
          qe(se.currentTarget.value), Ee.openDropdown(), S && Ee.selectFirstOption();
        },
        onFocus: (se) => {
          L && Ee.openDropdown(), d == null || d(se);
        },
        onBlur: (se) => {
          var At;
          L && Ee.closeDropdown(), qe(Y != null && ((At = ke[Y]) == null ? void 0 : At.label) || ""), f == null || f(se);
        },
        onClick: (se) => {
          L ? Ee.openDropdown() : Ee.toggleDropdown(), p == null || p(se);
        },
        classNames: me,
        styles: Rt,
        unstyled: i,
        pointer: !L,
        error: ue
      }
    )),
    /* @__PURE__ */ v.createElement(
      Jd,
      {
        data: Ce,
        hidden: x || C,
        filter: I,
        search: Pt,
        limit: E,
        hiddenWhenEmpty: !L || !R,
        withScrollArea: T,
        maxDropdownHeight: $,
        filterOptions: L && (Ue == null ? void 0 : Ue.label) !== Pt,
        value: Y,
        checkIconPosition: A,
        withCheckIcon: _,
        nothingFoundMessage: R,
        unstyled: i,
        labelId: `${ae}-label`
      }
    )
  ), /* @__PURE__ */ v.createElement(
    "input",
    {
      type: "hidden",
      name: B,
      value: Y || "",
      form: O,
      disabled: C,
      ...Le
    }
  ));
});
mr.classes = { ...qt.classes, ...J.classes };
mr.displayName = "@mantine/core/Select";
const Av = {}, Sa = q((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", Av, e);
  return /* @__PURE__ */ v.createElement(G, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
Sa.displayName = "@mantine/core/Space";
const [Tv, xa] = Gt(
  "Tabs component was not found in the tree"
);
var gr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const Ov = {}, Ca = q((e, t) => {
  const n = j("TabsList", Ov, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: c, style: l, ...u } = n, d = xa();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...u,
      ...d.getStyles("list", {
        className: o,
        style: l,
        classNames: a,
        styles: c,
        props: n,
        variant: d.variant
      }),
      ref: t,
      role: "tablist",
      variant: d.variant,
      mod: {
        grow: i,
        orientation: d.orientation,
        placement: d.orientation === "vertical" && d.placement,
        inverted: d.inverted
      },
      "aria-orientation": d.orientation,
      __vars: { "--tabs-justify": s }
    },
    r
  );
});
Ca.classes = gr;
Ca.displayName = "@mantine/core/TabsList";
const Nv = {}, Ea = q((e, t) => {
  const n = j("TabsPanel", Nv, e), { children: r, className: o, value: i, classNames: s, styles: a, style: c, ...l } = n, u = xa(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...l,
      ...u.getStyles("panel", {
        className: o,
        classNames: s,
        styles: a,
        style: [c, d ? void 0 : { display: "none" }],
        props: n
      }),
      ref: t,
      mod: { orientation: u.orientation },
      role: "tabpanel",
      id: u.getPanelId(i),
      "aria-labelledby": u.getTabId(i)
    },
    f
  );
});
Ea.classes = gr;
Ea.displayName = "@mantine/core/TabsPanel";
const $v = {}, Ia = q((e, t) => {
  const n = j("TabsTab", $v, e), {
    className: r,
    children: o,
    rightSection: i,
    leftSection: s,
    value: a,
    onClick: c,
    onKeyDown: l,
    disabled: u,
    color: d,
    style: f,
    classNames: p,
    styles: m,
    vars: g,
    ...h
  } = n, w = vt(), { dir: S } = ar(), b = xa(), y = a === b.value, x = (I) => {
    b.onChange(b.allowTabDeactivation && a === b.value ? null : a), c == null || c(I);
  }, C = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ v.createElement(
    ln,
    {
      ...h,
      ...b.getStyles("tab", { className: r, style: f, variant: b.variant, ...C }),
      disabled: u,
      unstyled: b.unstyled,
      variant: b.variant,
      mod: {
        active: y,
        disabled: u,
        orientation: b.orientation,
        inverted: b.inverted,
        placement: b.orientation === "vertical" && b.placement
      },
      ref: t,
      role: "tab",
      id: b.getTabId(a),
      "aria-selected": y,
      tabIndex: y || b.value === null ? 0 : -1,
      "aria-controls": b.getPanelId(a),
      onClick: x,
      __vars: { "--tabs-color": d ? Mt(d, w) : void 0 },
      onKeyDown: Ou({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: b.activateTabWithKeyboard,
        loop: b.loop,
        orientation: b.orientation || "horizontal",
        dir: S,
        onKeyDown: l
      })
    },
    s && /* @__PURE__ */ v.createElement("span", { ...b.getStyles("tabSection", C), "data-position": "left" }, s),
    o && /* @__PURE__ */ v.createElement("span", { ...b.getStyles("tabLabel", C) }, o),
    i && /* @__PURE__ */ v.createElement("span", { ...b.getStyles("tabSection", C), "data-position": "right" }, i)
  );
});
Ia.classes = gr;
Ia.displayName = "@mantine/core/TabsTab";
const ll = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", _v = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, Lv = (e, { radius: t, color: n }) => ({
  root: {
    "--tabs-radius": dt(t),
    "--tabs-color": Mt(n, e)
  }
}), at = q((e, t) => {
  const n = j("Tabs", _v, e), {
    defaultValue: r,
    value: o,
    onChange: i,
    orientation: s,
    children: a,
    loop: c,
    id: l,
    activateTabWithKeyboard: u,
    allowTabDeactivation: d,
    variant: f,
    color: p,
    radius: m,
    inverted: g,
    placement: h,
    keepMounted: w,
    classNames: S,
    styles: b,
    unstyled: y,
    className: x,
    style: C,
    vars: I,
    ...E
  } = n, T = Ht(l), [$, N] = kt({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), L = Q({
    name: "Tabs",
    props: n,
    classes: gr,
    className: x,
    style: C,
    classNames: S,
    styles: b,
    unstyled: y,
    vars: I,
    varsResolver: Lv
  });
  return /* @__PURE__ */ v.createElement(
    Tv,
    {
      value: {
        placement: h,
        value: $,
        orientation: s,
        id: T,
        loop: c,
        activateTabWithKeyboard: u,
        getTabId: Vr(`${T}-tab`, ll),
        getPanelId: Vr(`${T}-panel`, ll),
        onChange: N,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: w,
        unstyled: y,
        getStyles: L
      }
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        ref: t,
        id: T,
        variant: f,
        mod: {
          orientation: s,
          inverted: s === "horizontal" && g,
          placement: s === "vertical" && h
        },
        ...L("root"),
        ...E
      },
      a
    )
  );
});
at.classes = gr;
at.displayName = "@mantine/core/Tabs";
at.Tab = Ia;
at.Panel = Ea;
at.List = Ca;
const kv = {}, Da = q((e, t) => {
  const n = j("TextInput", kv, e);
  return /* @__PURE__ */ v.createElement(qt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
Da.classes = qt.classes;
Da.displayName = "@mantine/core/TextInput";
const Mv = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Fv(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return Mv.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: D(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var cf = { root: "m-8a5d1357" };
const Bv = {
  order: 1
}, jv = (e, { order: t, size: n, lineClamp: r }) => {
  const o = Fv(t, n);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0
    }
  };
}, Rn = q((e, t) => {
  const n = j("Title", Bv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    order: c,
    vars: l,
    size: u,
    variant: d,
    lineClamp: f,
    ...p
  } = n, m = Q({
    name: "Title",
    props: n,
    classes: cf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: jv
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ v.createElement(
    G,
    {
      ...m("root"),
      component: `h${c}`,
      variant: d,
      ref: t,
      mod: { order: c, "data-line-clamp": typeof f == "number" },
      size: u,
      ...p
    }
  ) : null;
});
Rn.classes = cf;
Rn.displayName = "@mantine/core/Title";
const Wv = {
  /** Put your mantine theme override here */
};
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var zv = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), ul = zv, Ri = () => Math.random().toString(36).substring(7).split("").join("."), Vv = {
  INIT: `@@redux/INIT${Ri()}`,
  REPLACE: `@@redux/REPLACE${Ri()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ri()}`
}, Jr = Vv;
function Pa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function lf(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(lf)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, c = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, w) => {
      s.set(w, h);
    }));
  }
  function u() {
    if (c)
      throw new Error(ge(3));
    return o;
  }
  function d(h) {
    if (typeof h != "function")
      throw new Error(ge(4));
    if (c)
      throw new Error(ge(5));
    let w = !0;
    l();
    const S = a++;
    return s.set(S, h), function() {
      if (w) {
        if (c)
          throw new Error(ge(6));
        w = !1, l(), s.delete(S), i = null;
      }
    };
  }
  function f(h) {
    if (!Pa(h))
      throw new Error(ge(7));
    if (typeof h.type > "u")
      throw new Error(ge(8));
    if (typeof h.type != "string")
      throw new Error(ge(17));
    if (c)
      throw new Error(ge(9));
    try {
      c = !0, o = r(o, h);
    } finally {
      c = !1;
    }
    return (i = s).forEach((S) => {
      S();
    }), h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(ge(10));
    r = h, f({
      type: Jr.REPLACE
    });
  }
  function m() {
    const h = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(w) {
        if (typeof w != "object" || w === null)
          throw new Error(ge(11));
        function S() {
          const y = w;
          y.next && y.next(u());
        }
        return S(), {
          unsubscribe: h(S)
        };
      },
      [ul]() {
        return this;
      }
    };
  }
  return f({
    type: Jr.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [ul]: m
  };
}
function Gv(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Jr.INIT
    }) > "u")
      throw new Error(ge(12));
    if (typeof n(void 0, {
      type: Jr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ge(13));
  });
}
function Hv(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Gv(n);
  } catch (i) {
    o = i;
  }
  return function(s = {}, a) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u], f = n[d], p = s[d], m = f(p, a);
      if (typeof m > "u")
        throw a && a.type, new Error(ge(14));
      l[d] = m, c = c || m !== p;
    }
    return c = c || r.length !== Object.keys(s).length, c ? l : s;
  };
}
function Qr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Uv(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ge(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(s));
    return i = Qr(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function qv(e) {
  return Pa(e) && "type" in e && typeof e.type == "string";
}
var uf = Symbol.for("immer-nothing"), dl = Symbol.for("immer-draftable"), Ve = Symbol.for("immer-state");
function it(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var xn = Object.getPrototypeOf;
function jt(e) {
  return !!e && !!e[Ve];
}
function It(e) {
  var t;
  return e ? df(e) || Array.isArray(e) || !!e[dl] || !!((t = e.constructor) != null && t[dl]) || No(e) || $o(e) : !1;
}
var Kv = Object.prototype.constructor.toString();
function df(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = xn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Kv;
}
function Kn(e, t) {
  Oo(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Oo(e) {
  const t = e[Ve];
  return t ? t.type_ : Array.isArray(e) ? 1 : No(e) ? 2 : $o(e) ? 3 : 0;
}
function rs(e, t) {
  return Oo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ff(e, t, n) {
  const r = Oo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Yv(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function No(e) {
  return e instanceof Map;
}
function $o(e) {
  return e instanceof Set;
}
function Jt(e) {
  return e.copy_ || e.base_;
}
function os(e, t) {
  if (No(e))
    return new Map(e);
  if ($o(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && df(e))
    return xn(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[Ve];
  let r = Reflect.ownKeys(n);
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = n[i];
    s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: s.enumerable,
      value: e[i]
    });
  }
  return Object.create(xn(e), n);
}
function Ra(e, t = !1) {
  return _o(e) || jt(e) || !It(e) || (Oo(e) > 1 && (e.set = e.add = e.clear = e.delete = Xv), Object.freeze(e), t && Kn(e, (n, r) => Ra(r, !0))), e;
}
function Xv() {
  it(2);
}
function _o(e) {
  return Object.isFrozen(e);
}
var Jv = {};
function on(e) {
  const t = Jv[e];
  return t || it(0, e), t;
}
var Yn;
function pf() {
  return Yn;
}
function Qv(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function fl(e, t) {
  t && (on("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function is(e) {
  ss(e), e.drafts_.forEach(Zv), e.drafts_ = null;
}
function ss(e) {
  e === Yn && (Yn = e.parent_);
}
function pl(e) {
  return Yn = Qv(Yn, e);
}
function Zv(e) {
  const t = e[Ve];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function ml(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Ve].modified_ && (is(t), it(4)), It(e) && (e = Zr(t, e), t.parent_ || eo(t, e)), t.patches_ && on("Patches").generateReplacementPatches_(
    n[Ve].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Zr(t, n, []), is(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== uf ? e : void 0;
}
function Zr(e, t, n) {
  if (_o(t))
    return t;
  const r = t[Ve];
  if (!r)
    return Kn(
      t,
      (o, i) => gl(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return eo(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Kn(
      i,
      (a, c) => gl(e, r, o, a, c, n, s)
    ), eo(e, o, !1), n && e.patches_ && on("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function gl(e, t, n, r, o, i, s) {
  if (jt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !rs(t.assigned_, r) ? i.concat(r) : void 0, c = Zr(e, o, a);
    if (ff(n, r, c), jt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (It(o) && !_o(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Zr(e, o), (!t || !t.scope_.parent_) && eo(e, o);
  }
}
function eo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ra(t, n);
}
function ew(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : pf(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = r, i = Aa;
  n && (o = [r], i = Xn);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var Aa = {
  get(e, t) {
    if (t === Ve)
      return e;
    const n = Jt(e);
    if (!rs(n, t))
      return tw(e, n, t);
    const r = n[t];
    return e.finalized_ || !It(r) ? r : r === Ai(e.base_, t) ? (Ti(e), e.copy_[t] = cs(r, e)) : r;
  },
  has(e, t) {
    return t in Jt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Jt(e));
  },
  set(e, t, n) {
    const r = mf(Jt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Ai(Jt(e), t), i = o == null ? void 0 : o[Ve];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Yv(n, o) && (n !== void 0 || rs(e.base_, t)))
        return !0;
      Ti(e), as(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ai(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ti(e), as(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Jt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    it(11);
  },
  getPrototypeOf(e) {
    return xn(e.base_);
  },
  setPrototypeOf() {
    it(12);
  }
}, Xn = {};
Kn(Aa, (e, t) => {
  Xn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Xn.deleteProperty = function(e, t) {
  return Xn.set.call(this, e, t, void 0);
};
Xn.set = function(e, t, n) {
  return Aa.set.call(this, e[0], t, n, e[0]);
};
function Ai(e, t) {
  const n = e[Ve];
  return (n ? Jt(n) : e)[t];
}
function tw(e, t, n) {
  var o;
  const r = mf(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function mf(e, t) {
  if (!(t in e))
    return;
  let n = xn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = xn(n);
  }
}
function as(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && as(e.parent_));
}
function Ti(e) {
  e.copy_ || (e.copy_ = os(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var nw = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function(c = i, ...l) {
          return s.produce(c, (u) => n.call(this, u, ...l));
        };
      }
      typeof n != "function" && it(6), r !== void 0 && typeof r != "function" && it(7);
      let o;
      if (It(t)) {
        const i = pl(this), s = cs(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? is(i) : ss(i);
        }
        return fl(i, r), ml(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === uf && (o = void 0), this.autoFreeze_ && Ra(o, !0), r) {
          const i = [], s = [];
          on("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        it(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (c) => t(c, ...a));
      let r, o;
      return [this.produce(t, n, (s, a) => {
        r = s, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    It(e) || it(8), jt(e) && (e = gf(e));
    const t = pl(this), n = cs(e, void 0);
    return n[Ve].isManual_ = !0, ss(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ve];
    (!n || !n.isManual_) && it(9);
    const { scope_: r } = n;
    return fl(r, t), ml(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = on("Patches").applyPatches_;
    return jt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function cs(e, t) {
  const n = No(e) ? on("MapSet").proxyMap_(e, t) : $o(e) ? on("MapSet").proxySet_(e, t) : ew(e, t);
  return (t ? t.scope_ : pf()).drafts_.push(n), n;
}
function gf(e) {
  return jt(e) || it(10, e), hf(e);
}
function hf(e) {
  if (!It(e) || _o(e))
    return e;
  const t = e[Ve];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = os(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = os(e, !0);
  return Kn(n, (r, o) => {
    ff(n, r, hf(o));
  }), t && (t.finalized_ = !1), n;
}
var Ge = new nw(), bf = Ge.produce;
Ge.produceWithPatches.bind(
  Ge
);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseStrictShallowCopy.bind(Ge);
Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);
function rw(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function ow(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function iw(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var hl = (e) => Array.isArray(e) ? e : [e];
function sw(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return iw(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function aw(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var cw = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, lw = typeof WeakRef < "u" ? WeakRef : cw, uw = 0, bl = 1;
function Dr() {
  return {
    s: uw,
    v: void 0,
    o: null,
    p: null
  };
}
function Ta(e, t = {}) {
  let n = Dr();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function s() {
    var d;
    let a = n;
    const { length: c } = arguments;
    for (let f = 0, p = c; f < p; f++) {
      const m = arguments[f];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let g = a.o;
        g === null && (a.o = g = /* @__PURE__ */ new WeakMap());
        const h = g.get(m);
        h === void 0 ? (a = Dr(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = Dr(), g.set(m, a)) : a = h;
      }
    }
    const l = a;
    let u;
    if (a.s === bl ? u = a.v : (u = e.apply(null, arguments), i++), l.s = bl, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new lw(u) : u;
    }
    return l.v = u, u;
  }
  return s.clearCache = () => {
    n = Dr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function yf(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), rw(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...n,
      ...c
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Ta,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = hl(f), w = hl(m), S = sw(o), b = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h), y = p(function() {
      s++;
      const C = aw(
        S,
        arguments
      );
      return a = b.apply(null, C), a;
    }, ...w);
    return Object.assign(y, {
      resultFunc: l,
      memoizedResultFunc: b,
      dependencies: S,
      dependencyRecomputations: () => s,
      resetDependencyRecomputations: () => {
        s = 0;
      },
      lastResult: () => a,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: d,
      argsMemoize: p
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var vf = /* @__PURE__ */ yf(Ta), dw = Object.assign(
  (e, t = vf) => {
    ow(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (i) => e[i]
    );
    return t(
      r,
      (...i) => i.reduce((s, a, c) => (s[n[c]] = a, s), {})
    );
  },
  { withTypes: () => dw }
);
function wf(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var fw = wf(), pw = wf, mw = (...e) => {
  const t = yf(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(jt(s) ? gf(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
mw(Ta);
var gw = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Qr : Qr.apply(null, arguments);
}, hw = (e) => e && typeof e.match == "function";
function xt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(_e(0));
      return {
        type: e,
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
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => qv(r) && r.type === e, n;
}
var Sf = class jn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, jn.prototype);
  }
  static get [Symbol.species]() {
    return jn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new jn(...t[0].concat(this)) : new jn(...t.concat(this));
  }
};
function yl(e) {
  return It(e) ? bf(e, () => {
  }) : e;
}
function vl(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(_e(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function bw(e) {
  return typeof e == "boolean";
}
var yw = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Sf();
  return n && (bw(n) ? s.push(fw) : s.push(pw(n.extraArgument))), s;
}, vw = "RTK_autoBatch", xf = (e) => (t) => {
  setTimeout(t, e);
}, ww = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : xf(10), Sw = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? ww : e.type === "callback" ? e.queueNotification : xf(e.timeout), l = () => {
    s = !1, i && (i = !1, a.forEach((u) => u()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => o && u(), f = r.subscribe(d);
      return a.add(u), () => {
        f(), a.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var d;
      try {
        return o = !((d = u == null ? void 0 : u.meta) != null && d[vw]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, xw = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Sf(e);
  return r && o.push(Sw(typeof r == "object" ? r : void 0)), o;
}, Cw = !0;
function Ew(e) {
  const t = yw(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Pa(n))
    a = Hv(n);
  else
    throw new Error(_e(1));
  let c;
  typeof r == "function" ? c = r(t) : c = t();
  let l = Qr;
  o && (l = gw({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Cw,
    ...typeof o == "object" && o
  }));
  const u = Uv(...c), d = xw(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = l(...f);
  return lf(a, i, p);
}
function Cf(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(_e(28));
      if (a in t)
        throw new Error(_e(29));
      return t[a] = s, o;
    },
    addMatcher(i, s) {
      return n.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function Iw(e) {
  return typeof e == "function";
}
function Dw(e, t) {
  let [n, r, o] = Cf(t), i;
  if (Iw(e))
    i = () => yl(e());
  else {
    const a = yl(e);
    i = () => a;
  }
  function s(a = i(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, d) => {
      if (d)
        if (jt(u)) {
          const p = d(u, c);
          return p === void 0 ? u : p;
        } else {
          if (It(u))
            return bf(u, (f) => d(f, c));
          {
            const f = d(u, c);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(_e(9));
            }
            return f;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var Pw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ef = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Pw[Math.random() * 64 | 0];
  return t;
}, Rw = (e, t) => hw(e) ? e.match(t) : e(t);
function Aw(...e) {
  return (t) => e.some((n) => Rw(n, t));
}
var Tw = ["name", "message", "stack", "code"], Oi = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ie(this, "_type");
    this.payload = e, this.meta = t;
  }
}, wl = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ie(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Ow = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of Tw)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Lo = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = xt(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = xt(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), s = xt(t + "/rejected", (c, l, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || Ow)(c || "Rejected"),
      meta: {
        ...f || {},
        arg: u,
        requestId: l,
        rejectedWithValue: !!d,
        requestStatus: "rejected",
        aborted: (c == null ? void 0 : c.name) === "AbortError",
        condition: (c == null ? void 0 : c.name) === "ConditionError"
      }
    }));
    function a(c) {
      return (l, u, d) => {
        const f = r != null && r.idGenerator ? r.idGenerator(c) : Ef(), p = new AbortController();
        let m, g;
        function h(S) {
          g = S, p.abort();
        }
        const w = async function() {
          var y, x;
          let S;
          try {
            let C = (y = r == null ? void 0 : r.condition) == null ? void 0 : y.call(r, c, {
              getState: u,
              extra: d
            });
            if ($w(C) && (C = await C), C === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const I = new Promise((E, T) => {
              m = () => {
                T({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, p.signal.addEventListener("abort", m);
            });
            l(i(f, c, (x = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : x.call(r, {
              requestId: f,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), S = await Promise.race([I, Promise.resolve(n(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: h,
              rejectWithValue: (E, T) => new Oi(E, T),
              fulfillWithValue: (E, T) => new wl(E, T)
            })).then((E) => {
              if (E instanceof Oi)
                throw E;
              return E instanceof wl ? o(E.payload, f, c, E.meta) : o(E, f, c);
            })]);
          } catch (C) {
            S = C instanceof Oi ? s(null, f, c, C.payload, C.meta) : s(C, f, c);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(S) && S.meta.condition || l(S), S;
        }();
        return Object.assign(w, {
          abort: h,
          requestId: f,
          arg: c,
          unwrap() {
            return w.then(Nw);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: Aw(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Nw(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function $w(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var _w = Symbol.for("rtk-slice-createasyncthunk");
function Lw(e, t) {
  return `${e}/${t}`;
}
function kw({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[_w];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(_e(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(Fw()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(b, y) {
        const x = typeof b == "string" ? b : b.type;
        if (!x)
          throw new Error(_e(12));
        if (x in l.sliceCaseReducersByType)
          throw new Error(_e(13));
        return l.sliceCaseReducersByType[x] = y, u;
      },
      addMatcher(b, y) {
        return l.sliceMatchers.push({
          matcher: b,
          reducer: y
        }), u;
      },
      exposeAction(b, y) {
        return l.actionCreators[b] = y, u;
      },
      exposeCaseReducer(b, y) {
        return l.sliceCaseReducersByName[b] = y, u;
      }
    };
    c.forEach((b) => {
      const y = a[b], x = {
        reducerName: b,
        type: Lw(i, b),
        createNotation: typeof o.reducers == "function"
      };
      jw(y) ? zw(x, y, u, t) : Bw(x, y, u);
    });
    function d() {
      const [b = {}, y = [], x = void 0] = typeof o.extraReducers == "function" ? Cf(o.extraReducers) : [o.extraReducers], C = {
        ...b,
        ...l.sliceCaseReducersByType
      };
      return Dw(o.initialState, (I) => {
        for (let E in C)
          I.addCase(E, C[E]);
        for (let E of l.sliceMatchers)
          I.addMatcher(E.matcher, E.reducer);
        for (let E of y)
          I.addMatcher(E.matcher, E.reducer);
        x && I.addDefaultCase(x);
      });
    }
    const f = (b) => b, p = /* @__PURE__ */ new Map();
    let m;
    function g(b, y) {
      return m || (m = d()), m(b, y);
    }
    function h() {
      return m || (m = d()), m.getInitialState();
    }
    function w(b, y = !1) {
      function x(I) {
        let E = I[b];
        return typeof E > "u" && y && (E = h()), E;
      }
      function C(I = f) {
        const E = vl(p, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return vl(E, I, {
          insert: () => {
            const T = {};
            for (const [$, N] of Object.entries(o.selectors ?? {}))
              T[$] = Mw(N, I, h, y);
            return T;
          }
        });
      }
      return {
        reducerPath: b,
        getSelectors: C,
        get selectors() {
          return C(x);
        },
        selectSlice: x
      };
    }
    const S = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...w(s),
      injectInto(b, {
        reducerPath: y,
        ...x
      } = {}) {
        const C = y ?? s;
        return b.inject({
          reducerPath: C,
          reducer: g
        }, x), {
          ...S,
          ...w(C, !0)
        };
      }
    };
    return S;
  };
}
function Mw(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var Oa = kw();
function Fw() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function Bw({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !Ww(r))
      throw new Error(_e(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? xt(e, s) : xt(e));
}
function jw(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Ww(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function zw({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(_e(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = n, d = o(e, i, u);
  r.exposeAction(t, d), s && r.addCase(d.fulfilled, s), a && r.addCase(d.pending, a), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
    fulfilled: s || Pr,
    pending: a || Pr,
    rejected: c || Pr,
    settled: l || Pr
  });
}
function Pr() {
}
var Vw = (e, t) => {
  if (typeof e != "function")
    throw new Error(_e(32));
}, Na = "listenerMiddleware", Gw = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = xt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(_e(21));
  return Vw(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, Hw = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Gw(e);
  return {
    id: Ef(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(_e(22));
    }
  };
}, {
  withTypes: () => Hw
}), Uw = Object.assign(xt(`${Na}/add`), {
  withTypes: () => Uw
});
xt(`${Na}/removeAll`);
var qw = Object.assign(xt(`${Na}/remove`), {
  withTypes: () => qw
});
function _e(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class Kw {
  constructor(t = {}) {
    Ie(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Ie(this, "securityData", null);
    Ie(this, "securityWorker");
    Ie(this, "abortControllers", /* @__PURE__ */ new Map());
    Ie(this, "customFetch", (...t) => fetch(...t));
    Ie(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Ie(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    Ie(this, "contentFormatters", {
      "application/json": (t) => t !== null && (typeof t == "object" || typeof t == "string") ? JSON.stringify(t) : t,
      "text/plain": (t) => t !== null && typeof t != "string" ? JSON.stringify(t) : t,
      "multipart/form-data": (t) => Object.keys(t || {}).reduce((n, r) => {
        const o = t[r];
        return n.append(
          r,
          o instanceof Blob ? o : typeof o == "object" && o !== null ? JSON.stringify(o) : `${o}`
        ), n;
      }, new FormData()),
      "application/x-www-form-urlencoded": (t) => this.toQueryString(t)
    });
    Ie(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const r = this.abortControllers.get(t);
        return r ? r.signal : void 0;
      }
      const n = new AbortController();
      return this.abortControllers.set(t, n), n.signal;
    });
    Ie(this, "abortRequest", (t) => {
      const n = this.abortControllers.get(t);
      n && (n.abort(), this.abortControllers.delete(t));
    });
    Ie(this, "request", async ({
      body: t,
      secure: n,
      path: r,
      type: o,
      query: i,
      format: s,
      baseUrl: a,
      cancelToken: c,
      ...l
    }) => {
      const u = (typeof n == "boolean" ? n : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, d = this.mergeRequestParams(l, u), f = i && this.toQueryString(i), p = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], m = s || d.format;
      return this.customFetch(`${a || this.baseUrl || ""}${r}${f ? `?${f}` : ""}`, {
        ...d,
        headers: {
          ...d.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (c ? this.createAbortSignal(c) : d.signal) || null,
        body: typeof t > "u" || t === null ? null : p(t)
      }).then(async (g) => {
        const h = g;
        h.data = null, h.error = null;
        const w = m ? await g[m]().then((S) => (h.ok ? h.data = S : h.error = S, h)).catch((S) => (h.error = S, h)) : h;
        if (c && this.abortControllers.delete(c), !g.ok)
          throw w;
        return w;
      });
    });
    Object.assign(this, t);
  }
  encodeQueryParam(t, n) {
    return `${encodeURIComponent(t)}=${encodeURIComponent(typeof n == "number" ? n : `${n}`)}`;
  }
  addQueryParam(t, n) {
    return this.encodeQueryParam(n, t[n]);
  }
  addArrayQueryParam(t, n) {
    return t[n].map((o) => this.encodeQueryParam(n, o)).join("&");
  }
  toQueryString(t) {
    const n = t || {};
    return Object.keys(n).filter((o) => typeof n[o] < "u").map((o) => Array.isArray(n[o]) ? this.addArrayQueryParam(n, o) : this.addQueryParam(n, o)).join("&");
  }
  addQueryParams(t) {
    const n = this.toQueryString(t);
    return n ? `?${n}` : "";
  }
  mergeRequestParams(t, n) {
    return {
      ...this.baseApiParams,
      ...t,
      ...n || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...t.headers || {},
        ...n && n.headers || {}
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
 * <p>API to access the buildingSMART Data Dictionary.</p><p>For manually uploading import files, please go to <a href="https://manage.bsdd.buildingsmart.org">bSDD Management portal</a>. Version history can be found at <a href="https://github.com/buildingSMART/bSDD/blob/master/API%20version%20history.md">Version history</a>.</p><p>If you have any questions or need further assistance, feel free to send us an e-mail</p> <p>In case you want to try out secured APIs via this swagger portal, you need to enter client ID <span style="white-space: nowrap;">b222e220-1f71-4962-9184-05e0481a390d</span>. If you create your own tool
 *   that needs to access secured APIs, please contact us via e-mail.</p>
 */
class Yw extends Kw {
  constructor() {
    super(...arguments);
    Ie(this, "api", {
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
      classV1List: (n, r = {}) => this.request({
        path: "/api/Class/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      dictionaryV1List: (n, r = {}) => this.request({
        path: "/api/Dictionary/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      dictionaryV1ClassesList: (n, r = {}) => this.request({
        path: "/api/Dictionary/v1/Classes",
        method: "GET",
        query: n,
        format: "json",
        ...r
      }),
      /**
       * No description
       *
       * @tags Dictionary
       * @name DictionaryV1PropertiesList
       * @summary Get Dictionary with its properties
       * @request GET:/api/Dictionary/v1/Properties
       */
      dictionaryV1PropertiesList: (n, r = {}) => this.request({
        path: "/api/Dictionary/v1/Properties",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      dictionaryDownloadSketchupV1Create: (n, r = {}) => this.request({
        path: "/api/DictionaryDownload/sketchup/v1",
        method: "POST",
        query: n,
        secure: !0,
        format: "json",
        ...r
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
      uploadImportFileV1Create: (n, r = {}) => this.request({
        path: "/api/UploadImportFile/v1",
        method: "POST",
        body: n,
        secure: !0,
        type: "multipart/form-data",
        format: "json",
        ...r
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
      dictionaryV1Update: (n, r, o, i, s = {}) => this.request({
        path: `/api/Dictionary/v1/${n}/${r}/${o}`,
        method: "PUT",
        body: i,
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
      dictionaryV1Delete: (n, r, o, i = {}) => this.request({
        path: `/api/Dictionary/v1/${n}/${r}/${o}`,
        method: "DELETE",
        secure: !0,
        ...i
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
      dictionaryV1Delete2: (n, r, o = {}) => this.request({
        path: `/api/Dictionary/v1/${n}/${r}`,
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
      propertyV4List: (n, r = {}) => this.request({
        path: "/api/Property/v4",
        method: "GET",
        query: n,
        format: "json",
        ...r
      }),
      /**
       * No description
       *
       * @tags Property
       * @name PropertyValueV2List
       * @summary Get Property Value details
       * @request GET:/api/PropertyValue/v2
       */
      propertyValueV2List: (n, r = {}) => this.request({
        path: "/api/PropertyValue/v2",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      textSearchV1List: (n, r = {}) => this.request({
        path: "/api/TextSearch/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      searchInDictionaryV1List: (n, r = {}) => this.request({
        path: "/api/SearchInDictionary/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      classSearchV1List: (n, r = {}) => this.request({
        path: "/api/Class/Search/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name UnitV1List
       * @summary Get list of all units
       * @request GET:/api/Unit/v1
       */
      unitV1List: (n = {}) => this.request({
        path: "/api/Unit/v1",
        method: "GET",
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name ReferenceDocumentV1List
       * @summary Get list of all ReferenceDocuments
       * @request GET:/api/ReferenceDocument/v1
       */
      referenceDocumentV1List: (n = {}) => this.request({
        path: "/api/ReferenceDocument/v1",
        method: "GET",
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name LanguageV1List
       * @summary Get list of available Languages
       * @request GET:/api/Language/v1
       */
      languageV1List: (n = {}) => this.request({
        path: "/api/Language/v1",
        method: "GET",
        format: "json",
        ...n
      }),
      /**
       * No description
       *
       * @tags z Lookup data
       * @name CountryV1List
       * @summary Get list of all Countries
       * @request GET:/api/Country/v1
       */
      countryV1List: (n = {}) => this.request({
        path: "/api/Country/v1",
        method: "GET",
        format: "json",
        ...n
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
      textSearchListOpenV6List: (n, r = {}) => this.request({
        path: "/api/TextSearchListOpen/v6",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      textSearchListOpenV5List: (n, r = {}) => this.request({
        path: "/api/TextSearchListOpen/v5",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      searchListV2List: (n, r = {}) => this.request({
        path: "/api/SearchList/v2",
        method: "GET",
        query: n,
        secure: !0,
        format: "json",
        ...r
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
      searchListOpenV2List: (n, r = {}) => this.request({
        path: "/api/SearchListOpen/v2",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      requestExportFilePreviewCreate: (n, r = {}) => this.request({
        path: "/api/RequestExportFile/preview",
        method: "POST",
        query: n,
        secure: !0,
        format: "json",
        ...r
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
      propertyV3List: (n, r = {}) => this.request({
        path: "/api/Property/v3",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      propertyV2List: (n, r = {}) => this.request({
        path: "/api/Property/v2",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      propertyValueV1List: (n, r = {}) => this.request({
        path: "/api/PropertyValue/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      materialV2List: (n, r = {}) => this.request({
        path: "/api/Material/v2",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      materialV1List: (n, r = {}) => this.request({
        path: "/api/Material/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      materialSearchOpenPreviewList: (n, r = {}) => this.request({
        path: "/api/Material/SearchOpen/preview",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      domainV3List: (n, r = {}) => this.request({
        path: "/api/Domain/v3",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      domainV3ClassificationsList: (n, r = {}) => this.request({
        path: "/api/Domain/v3/Classifications",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      domainV3Update: (n, r, o, i, s = {}) => this.request({
        path: `/api/Domain/v3/${n}/${r}/${o}`,
        method: "PUT",
        body: i,
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
      domainV3Delete: (n, r, o, i = {}) => this.request({
        path: `/api/Domain/v3/${n}/${r}/${o}`,
        method: "DELETE",
        secure: !0,
        ...i
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
      domainV3Delete2: (n, r, o = {}) => this.request({
        path: `/api/Domain/v3/${n}/${r}`,
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
      domainV2List: (n, r = {}) => this.request({
        path: "/api/Domain/v2",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      domainV2ClassificationsList: (n, r = {}) => this.request({
        path: "/api/Domain/v2/Classifications",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      classificationV4List: (n, r = {}) => this.request({
        path: "/api/Classification/v4",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      classificationV3List: (n, r = {}) => this.request({
        path: "/api/Classification/v3",
        method: "GET",
        query: n,
        format: "json",
        ...r
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
      classificationSearchOpenV1List: (n, r = {}) => this.request({
        path: "/api/ClassificationSearchOpen/v1",
        method: "GET",
        query: n,
        format: "json",
        ...r
      })
    });
  }
}
class hr extends Yw {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const Xw = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
};
function $a(e) {
  return {
    type: "IfcClassification",
    source: e == null ? void 0 : e.organizationCodeOwner,
    edition: (e == null ? void 0 : e.version) || void 0,
    editionDate: (e == null ? void 0 : e.releaseDate) || void 0,
    name: e == null ? void 0 : e.name,
    location: e == null ? void 0 : e.uri
    // specification: bsddDictionary?.uri,
  };
}
const Jw = {
  bsddApiEnvironment: "test",
  mainDictionary: null,
  filterDictionaries: [],
  language: "EN"
};
function Sl(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = Of(e, t.ifcClassification.location), r = $a(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Qw = (e) => async (t, n) => {
  const r = n();
  console.log("settings", e);
  const o = Sl(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Sl(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(Pf(s));
}, If = Oa({
  name: "settings",
  initialState: Jw,
  reducers: {
    setSettings: (e, t) => {
      e.bsddApiEnvironment = t.payload.bsddApiEnvironment, e.mainDictionary = t.payload.mainDictionary, e.filterDictionaries = t.payload.filterDictionaries, e.language = t.payload.language;
    },
    setBsddApiEnvironment: (e, t) => {
      e.bsddApiEnvironment = t.payload;
    },
    setMainDictionary: (e, t) => {
      e.mainDictionary = t.payload;
    },
    setFilterDictionaries: (e, t) => {
      e.filterDictionaries = t.payload;
    },
    setLanguage: (e, t) => {
      e.language = t.payload;
    }
  }
}), ko = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? Xw[t] : null;
}, Zw = vf(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t) => e ? [e, ...t] : t
), _a = (e) => e.settings.mainDictionary, Df = (e) => e.settings.filterDictionaries, eS = (e) => e.settings.language, tS = (e) => e.settings.bsddApiEnvironment, { setSettings: Pf, setBsddApiEnvironment: rP, setMainDictionary: oP, setFilterDictionaries: iP, setLanguage: sP } = If.actions, nS = If.reducer, Rf = 500, rS = 500;
let en = null, kr = {};
const xl = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, oS = (e) => {
  const t = ko(e);
  return t && (!en || en.baseUrl !== t) && (en = new hr(t)), en;
};
function iS(e) {
  return (t) => {
    en = new hr(e), kr = {}, t(uS());
  };
}
const Af = Oa({
  name: "bsdd",
  initialState: xl,
  reducers: {
    resetState: () => xl,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(ls.pending, (t) => {
      t.loaded = !1;
    }).addCase(ls.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Tf.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
Lo("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
  const r = t();
  if (r.bsdd.classes[e])
    return r.bsdd.classes[e];
  if (!en)
    throw new Error("BsddApi is not initialized");
  const o = await en.api.classV1List({
    uri: e,
    includeClassProperties: !0,
    includeChildClassReferences: !0,
    includeClassRelations: !0
    // languageCode: languageCode || undefined,
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  const i = o.data;
  return n({ type: "bsdd/addClass", payload: { uri: e, data: i } }), i;
});
const ls = Lo(
  "bsdd/fetchDictionaries",
  async (e, t) => {
    if (console.log("fetchDictionaries", e), !e)
      return t.rejectWithValue("No bsddApiEnvironment provided");
    const n = new hr(e), r = rS;
    let o = 0, i = [];
    for (; ; ) {
      const a = await n.api.dictionaryV1List({ Limit: r, Offset: o });
      if (!a.ok)
        throw new Error(`HTTP error! status: ${a.status}`);
      const { data: { dictionaries: c, totalCount: l } = {} } = a;
      if (c && typeof l < "u") {
        if (i.push(...c), o += r, i.length >= l)
          break;
      } else
        throw new Error(`bSDD API error! status: ${a.status}`);
    }
    return i.reduce((a, c) => (a[c.uri] = c, a), {});
  }
);
async function sS(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: Rf,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const Tf = Lo(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (kr[e])
      return await kr[e];
    const o = (async () => {
      const s = oS(t());
      if (!s)
        throw new Error("BsddApi is not initialized");
      let a = [], c = 0, l;
      for (; ; ) {
        const u = await sS(s, e, c), d = u.classes ?? [];
        if (a.push(...d), c === 0 && (l = u.classesTotalCount, l == null))
          throw new Error("Total count is null or undefined");
        if (l != null && a.length >= l)
          break;
        c += Rf;
      }
      return n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: a } }), a;
    })();
    return kr[e] = o, await o;
  }
), Of = (e, t) => e.bsdd.dictionaries[t], aS = (e, t) => e.bsdd.dictionaryClasses[t], cS = (e) => e.bsdd.dictionaries, lS = (e) => e.bsdd.loaded, { resetState: uS } = Af.actions, dS = Af.reducer, fS = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  let r = aS(t, e.location);
  if (r)
    return r;
  const o = await n(Tf(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function pS(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function gn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function mS(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return gn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await fS(e.referencedSource, n, t);
  if (!r)
    return gn("Failed to fetch classes for the referencedSource location", e);
  const o = pS(e, r);
  if (!o)
    return gn(
      "Failed to find a match for the IfcClassificationReference name or code in the classes",
      e
    );
  if (!o.uri)
    return gn("Failed to find a URI for the matched class", e);
  const { uri: i, code: s, name: a } = o;
  if (e = {
    ...e,
    location: i ?? void 0,
    identification: s ?? void 0,
    name: a ?? void 0
  }, !e.referencedSource || !e.referencedSource.location)
    return gn("referencedSource or its location is missing", e);
  const c = Of(n, e.referencedSource.location);
  return c ? (e.referencedSource = $a(c), {
    ifcClassificationReference: e,
    validationState: "fixed",
    message: null
  }) : gn("Failed to find a matching dictionary for the matched class", e);
}
const Cl = Lo(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        const { hasAssociations: s } = i;
        if (s) {
          const a = (await Promise.all(
            s.map(async (c) => {
              if (c.type === "IfcClassificationReference") {
                const { validationState: l, ifcClassificationReference: u, message: d } = await mS(c, t, r);
                return l === "invalid" ? null : u;
              }
              return c;
            })
          )).filter((c) => c !== null);
          return { ...i, hasAssociations: a };
        }
        return i;
      })
    );
    t(bS(o));
  }
), gS = {
  ifcEntities: []
}, Nf = Oa({
  name: "ifcData",
  initialState: gS,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), hS = (e) => e.ifcData.ifcEntities, { setIfcData: bS } = Nf.actions, yS = Nf.reducer, vS = {
  settings: {
    bsddApiEnvironment: "test",
    mainDictionary: {
      ifcClassification: {
        type: "IfcClassification",
        location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0",
        editionDate: "0001-01-01T00:00:00",
        name: "Basis bouwproducten"
      },
      parameterMapping: "Description"
    },
    filterDictionaries: [
      {
        ifcClassification: {
          type: "IfcClassification",
          location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3",
          editionDate: "0001-01-01T00:00:00",
          name: "IFC"
        },
        parameterMapping: "IfcExportAs"
      },
      {
        ifcClassification: {
          type: "IfcClassification",
          location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021",
          editionDate: "0001-01-01T00:00:00",
          name: "DigiBase Demo NL-SfB tabel 1"
        },
        parameterMapping: "Assembly Code"
      }
    ],
    language: "NL"
  },
  ifcData: [
    {
      type: "IfcObject",
      name: "NLRS_00_SI_nulpunt_vws - nulpunt",
      description: "Project nulpunt",
      tag: "307327",
      hasAssociations: [
        {
          identification: "Project nulpunt",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "Project nulpunt"
        },
        {
          identification: "IfcObject",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcObject"
        },
        {
          identification: "0.0",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "0.0"
        }
      ]
    },
    {
      type: "IfcWasteTerminal",
      name: "NLRS_52_PF_bakgoot_gen_vws - bakgoot",
      description: "bakgoot",
      tag: "798190",
      hasAssociations: [
        {
          identification: "bakgoot",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "bakgoot"
        },
        {
          identification: "IfcWasteTerminal",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWasteTerminal"
        }
      ]
    },
    {
      type: "IfcWasteTerminal",
      name: "NLRS_52_PF_LB_bakgoot_beugel_B44_gen_vws - N47_VWS_beugel_bakgoot_B44",
      description: "beugel bakgoot",
      tag: "798257",
      hasAssociations: [
        {
          identification: "beugel bakgoot",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "beugel bakgoot"
        },
        {
          identification: "IfcWasteTerminal",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWasteTerminal"
        },
        {
          identification: "52.10",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "52.10"
        }
      ]
    },
    {
      type: "IfcWasteTerminal",
      name: "NLRS_52_PF_LB_bakgoot_goot_gen_vws - N47_VWS_bakgoot",
      description: "bakgoot",
      tag: "798256",
      hasAssociations: [
        {
          identification: "bakgoot",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "bakgoot"
        },
        {
          identification: "IfcWasteTerminal",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWasteTerminal"
        },
        {
          identification: "52.10",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "52.10"
        }
      ]
    },
    {
      name: "NLRS_52_PF_FB_bakgoot_hwa_gen_vws - N47_VWS_hwa_bakgoot",
      description: "hwa bakgoot",
      tag: "798259",
      hasAssociations: [
        {
          identification: "hwa bakgoot",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "hwa bakgoot"
        },
        {
          identification: "52.10",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "52.10"
        }
      ]
    },
    {
      name: "NLRS_52_PF_LB_bakgoot_eindstuk_gen_vws - N47_VWS_eindstuk_bakgoot",
      description: "bakgoot eindstuk",
      tag: "798258",
      hasAssociations: [
        {
          identification: "bakgoot eindstuk",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "bakgoot eindstuk"
        },
        {
          identification: "52.10",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "52.10"
        }
      ]
    },
    {
      type: "IfcWall",
      name: "gevelafwerking_baksteen - NLRS_21_WA_TLB_metselwerk waalformaat_gen_vws",
      description: "gevelafwerking_baksteen",
      tag: "692064",
      hasAssociations: [
        {
          identification: "gevelafwerking_baksteen",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "gevelafwerking_baksteen"
        },
        {
          identification: "IfcWall",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWall"
        },
        {
          identification: "21.12",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "21.12"
        }
      ]
    },
    {
      type: "IfcWall",
      name: "Basic Wall - NLRS_21_WA_TLB_beton prefab 100mm_gen_vws",
      description: "beton prefab 150mm",
      tag: "692066",
      hasAssociations: [
        {
          identification: "beton prefab 150mm",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "beton prefab 150mm"
        },
        {
          identification: "IfcWall",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWall"
        }
      ]
    },
    {
      type: "IfcWall",
      name: "Basic Wall - NLRS_21_WA_TLB_isolatie 131mm_gen_vws",
      description: "isolatie Mupan Ultra Xs 138mm",
      tag: "692068",
      hasAssociations: [
        {
          identification: "isolatie Mupan Ultra Xs 138mm",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "isolatie Mupan Ultra Xs 138mm"
        },
        {
          identification: "IfcWall",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWall"
        }
      ]
    },
    {
      type: "IfcElementAssembly",
      name: "NLRS_31_gevel-sparingsmaker_3HW_vws - raam",
      description: "gevel-sparingsmaker spouwwand",
      tag: "692070",
      hasAssociations: [
        {
          identification: "gevel-sparingsmaker spouwwand",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "gevel-sparingsmaker spouwwand"
        },
        {
          identification: "IfcElementAssembly",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcElementAssembly"
        },
        {
          identification: "31",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31"
        }
      ]
    },
    {
      type: "IfcElementAssembly",
      name: "NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - buitenbladsparing, betonnen waterslag + stalen latei",
      description: "gevel-sparingsmaker bladsparing",
      tag: "693977",
      hasAssociations: [
        {
          identification: "gevel-sparingsmaker bladsparing",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "gevel-sparingsmaker bladsparing"
        },
        {
          identification: "IfcElementAssembly",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcElementAssembly"
        },
        {
          identification: "31",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31"
        }
      ]
    },
    {
      type: "IfcElementAssembly",
      name: "NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - isolatiesparing, stelkozijn",
      description: "gevel-sparingsmaker bladsparing",
      tag: "693976",
      hasAssociations: [
        {
          identification: "gevel-sparingsmaker bladsparing",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "gevel-sparingsmaker bladsparing"
        },
        {
          identification: "IfcElementAssembly",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcElementAssembly"
        },
        {
          identification: "31",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31"
        }
      ]
    },
    {
      type: "IfcElementAssembly",
      name: "NRLS_30_WI_UN_wandsparing-sam-rechthoek-VW - binnenbladsparing, vensterbank",
      description: "gevel-sparingsmaker bladsparing",
      tag: "693978",
      hasAssociations: [
        {
          identification: "gevel-sparingsmaker bladsparing",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "gevel-sparingsmaker bladsparing"
        },
        {
          identification: "IfcElementAssembly",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcElementAssembly"
        },
        {
          identification: "31",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31"
        }
      ]
    },
    {
      type: "IfcElementAssembly",
      name: "NLRS_30_GS_wand_bui_sparing_omranding_RE_leeg - standaard",
      description: "gevelsparingsmaker omkadering bladsparing buiten",
      tag: "693969",
      hasAssociations: [
        {
          identification: "gevelsparingsmaker omkadering bladsparing buiten",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "gevelsparingsmaker omkadering bladsparing buiten"
        },
        {
          identification: "IfcElementAssembly",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcElementAssembly"
        }
      ]
    },
    {
      name: "NLRS_00_GM_WPB_LEEG_ISR - std",
      description: "ISR leeg",
      tag: "693963",
      hasAssociations: [
        {
          identification: "ISR leeg",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "ISR leeg"
        }
      ]
    },
    {
      name: "NLRS_28_Stalen-latei_vws - NLRS_28_Stalen-latei_vws",
      description: "? ",
      tag: "694001",
      hasAssociations: [
        {
          identification: "? ",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "? "
        }
      ]
    },
    {
      name: "NLRS_41_GM_raamdorpelsteen_beton_vws - RD50/94x160",
      description: "? ",
      tag: "693973",
      hasAssociations: [
        {
          identification: "? ",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "? "
        }
      ]
    },
    {
      name: "NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof boven",
      description: "? ",
      tag: "693982",
      hasAssociations: [
        {
          identification: "? ",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "? "
        }
      ]
    },
    {
      name: "NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof onder",
      description: "? ",
      tag: "693980",
      hasAssociations: [
        {
          identification: "? ",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "? "
        }
      ]
    },
    {
      name: "NLRS_31_GM_WPB_spouwlat met sponning_gen_vws - kunststof zijkant",
      description: "? ",
      tag: "693981",
      hasAssociations: [
        {
          identification: "? ",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "? "
        }
      ]
    },
    {
      name: "NLRS_31_GM_WPB_vensterbank_gen_vws - 20x200mm multiplex",
      description: "? ",
      tag: "693960",
      hasAssociations: [
        {
          identification: "? ",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "? "
        },
        {
          identification: "31.20",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31.20"
        }
      ]
    },
    {
      type: "IfcWindow",
      name: "NLRS_31_WI_WPB_kozijn_2vlaks_gen_vws - D2 - transcarbo",
      description: "JA01-00",
      tag: "692071",
      hasAssociations: [
        {
          identification: "JA01-00",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "JA01-00"
        },
        {
          identification: "IfcWindow",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWindow"
        },
        {
          identification: "31.31",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31.31"
        }
      ]
    },
    {
      name: "NLRS_30_WI_WP_kozijn draaideel_vws - kunststof_dubbel",
      tag: "693992",
      hasAssociations: [
        {
          identification: "31.25",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31.25"
        }
      ]
    },
    {
      name: "NLRS_30_WI_WP_kozijn draairichting_gen_vws - kozijn_draairichting",
      description: "draairichting raamkozijn",
      tag: "693984",
      hasAssociations: [
        {
          identification: "draairichting raamkozijn",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "draairichting raamkozijn"
        },
        {
          identification: "31.20",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31.20"
        }
      ]
    },
    {
      name: "NLRS_30_WI_WPB_vlakvulling_vast_vws - dubbel",
      description: "isolerend glas",
      tag: "693989",
      hasAssociations: [
        {
          identification: "isolerend glas",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "isolerend glas"
        },
        {
          identification: "31.20",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "31.20"
        }
      ]
    },
    {
      name: "Floor - NLRS_23_FL_LB_kanaalplaatvloer_200_gen_vws",
      description: "kanaalplaatvloer 200mm",
      tag: "798289",
      hasAssociations: [
        {
          identification: "kanaalplaatvloer 200mm",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "kanaalplaatvloer 200mm"
        }
      ]
    },
    {
      name: "Basic Roof - NLRS_47_RO_pannen+panlatten_074_gen_vws",
      description: "dakpannen en panlatten 74mm",
      tag: "798292",
      hasAssociations: [
        {
          identification: "dakpannen en panlatten 74mm",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "dakpannen en panlatten 74mm"
        }
      ]
    },
    {
      type: "IfcRoof",
      name: "NLRS_27_GM_LB_knieschot_gen_vws - regels 30x58/spaanplaat 11mm",
      description: "knieschot",
      tag: "798290",
      hasAssociations: [
        {
          identification: "knieschot",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "knieschot"
        },
        {
          identification: "IfcRoof",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcRoof"
        }
      ]
    },
    {
      type: "IfcRoof",
      name: "NLRS_27_GM_FWB_muurplaat rond_anker_gen_vws - ronde muurplaat",
      description: "muurplaat",
      tag: "798293",
      hasAssociations: [
        {
          identification: "muurplaat",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "muurplaat"
        },
        {
          identification: "IfcRoof",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcRoof"
        }
      ]
    },
    {
      type: "IfcRoof",
      name: "NLRS_27_GM_FWB_muurplaatanker_gen_vws - h=100 / b=50",
      description: "muurplaat",
      tag: "798254",
      hasAssociations: [
        {
          identification: "muurplaat",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "muurplaat"
        },
        {
          identification: "IfcRoof",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcRoof"
        },
        {
          identification: "27.22",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "27.22"
        }
      ]
    },
    {
      name: "NLRS_27_GM_FWB_muurplaat_rond_gen_vws - b=70 / h=140",
      tag: "798191",
      hasAssociations: [
        {
          identification: "27.22",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "27.22"
        }
      ]
    },
    {
      name: "Floor - NLRS_43_FL_LB_cementdekvloer_070_gen_vws",
      description: "cementdekvloer 70mm",
      tag: "798287",
      hasAssociations: [
        {
          identification: "cementdekvloer 70mm",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "cementdekvloer 70mm"
        }
      ]
    },
    {
      type: "IfcSlab",
      name: "Floor - NLRS_23_FL_LB_kanaalplaatvloer_geïsoleerd_320_gen_vws",
      tag: "1003479",
      hasAssociations: [
        {
          identification: "IfcSlab",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcSlab"
        },
        {
          identification: "21.21",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "21.21"
        }
      ]
    },
    {
      type: "IfcRoof",
      name: "Basic Roof - NLRS_27_RO_dakplaat_scharnierkap_302_gen_vws",
      description: "dak_hout_scharnierkap",
      tag: "798291",
      hasAssociations: [
        {
          identification: "dak_hout_scharnierkap",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "dak_hout_scharnierkap"
        },
        {
          identification: "IfcRoof",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcRoof"
        }
      ]
    },
    {
      type: "IfcWall",
      name: "wand_hout_HSB_opbouw_ntb - NLRS_22_WA_TLB_HSB_070_gen_vws",
      description: "wand_hout_HSB_opbouw_ntb",
      tag: "1010468",
      hasAssociations: [
        {
          identification: "wand_hout_HSB_opbouw_ntb",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "wand_hout_HSB_opbouw_ntb"
        },
        {
          identification: "IfcWall",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWall"
        },
        {
          identification: "22.20",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "22.20"
        }
      ]
    },
    {
      type: "IfcWall",
      name: "wand_gips_metalstud - NLRS_22_WA_TLB_metal-stud_geïsoleerd_250mm_2x_gips_gen_vws",
      description: "wand_gips_metalstud",
      tag: "1013164",
      hasAssociations: [
        {
          identification: "wand_gips_metalstud",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "wand_gips_metalstud"
        },
        {
          identification: "IfcWall",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcWall"
        },
        {
          identification: "22.20",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "22.20"
        }
      ]
    },
    {
      type: "IfcDoor",
      name: "NLRS_32_DO_WB_reinaerdt_binnendeur_Model 3(bovenlicht_afgeslankte_bovendorpel)_gen_vws - 880x2315 rod=28/wd70/opdek/stijl_hoogte 2600",
      description: "deurkozijn_staal_bovenlicht_deurblad",
      tag: "1010313",
      hasAssociations: [
        {
          identification: "deurkozijn_staal_bovenlicht_deurblad",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/basisbouwproducten/0.8.0"
          },
          type: "IfcClassificationReference",
          name: "deurkozijn_staal_bovenlicht_deurblad"
        },
        {
          identification: "IfcDoor",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/4.3"
          },
          type: "IfcClassificationReference",
          name: "IfcDoor"
        },
        {
          identification: "32.31",
          referencedSource: {
            type: "IfcClassification",
            editionDate: "0001-01-01T00:00:00",
            location: "https://identifier.buildingsmart.org/uri/digibase/nlsfb/12.2021"
          },
          type: "IfcClassificationReference",
          name: "32.31"
        }
      ]
    }
  ]
}, $f = ng, $e = Um;
const us = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
var _f = { exports: {} }, wS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", SS = wS, xS = SS;
function Lf() {
}
function kf() {
}
kf.resetWarningCache = Lf;
var CS = function() {
  function e(r, o, i, s, a, c) {
    if (c !== xS) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw l.name = "Invariant Violation", l;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
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
    checkPropTypes: kf,
    resetWarningCache: Lf
  };
  return n.PropTypes = n, n;
};
_f.exports = CS();
var ES = _f.exports;
const Yt = /* @__PURE__ */ bu(ES);
var IS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, DS = Object.defineProperty, PS = Object.defineProperties, RS = Object.getOwnPropertyDescriptors, to = Object.getOwnPropertySymbols, Mf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable, El = (e, t, n) => t in e ? DS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Il = (e, t) => {
  for (var n in t || (t = {}))
    Mf.call(t, n) && El(e, n, t[n]);
  if (to)
    for (var n of to(t))
      Ff.call(t, n) && El(e, n, t[n]);
  return e;
}, AS = (e, t) => PS(e, RS(t)), TS = (e, t) => {
  var n = {};
  for (var r in e)
    Mf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && to)
    for (var r of to(e))
      t.indexOf(r) < 0 && Ff.call(e, r) && (n[r] = e[r]);
  return n;
}, Bf = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = TS(s, ["color", "size", "stroke", "children"]);
      return gc(
        "svg",
        Il(AS(Il({
          ref: i
        }, IS), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => gc(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Yt.string,
    size: Yt.oneOfType([Yt.string, Yt.number]),
    stroke: Yt.oneOfType([Yt.string, Yt.number])
  }, r.displayName = `${t}`, r;
}, OS = Bf("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), NS = Bf("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]);
function $S(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function _S(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function LS(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return $S(i) && _S(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function kS({ item: e, bsddClass: t, index: n, setCardColor: r }) {
  const { t: o } = zt(), i = $e(Zw), [s, a] = U("grey"), [c, l] = U([]), [u, d] = U([]);
  V(() => {
    function p(m) {
      a(m), r(n, m);
    }
    c.every((m) => m !== null) ? p("green") : c.some((m) => m !== null) ? p("orange") : p("red");
  }, [c, n, r]), V(() => {
    const p = c.map((m) => m !== null ? "green" : "red");
    d(p);
  }, [c]), V(() => {
    l(
      i.map((p) => LS(e, p))
    );
  }, [e, i]);
  function f(p) {
    var g;
    const m = JSON.stringify(p);
    (g = window == null ? void 0 : window.bsddBridge) == null || g.bsddSearch(m);
  }
  return /* @__PURE__ */ M.jsxs(wn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ M.jsx(Un, { size: "1.5em", color: us[s] }),
    /* @__PURE__ */ M.jsxs(nn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ M.jsx(nn.Target, { children: /* @__PURE__ */ M.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ M.jsx(Je, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ M.jsxs(nn.Dropdown, { children: [
        /* @__PURE__ */ M.jsxs(Je, { children: [
          o("Validation per dictionary"),
          ":"
        ] }),
        i.map((p, m) => /* @__PURE__ */ M.jsxs(wn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
          /* @__PURE__ */ M.jsx(Un, { size: "1em", color: us[u[m]] }),
          /* @__PURE__ */ M.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ M.jsx(Je, { className: "truncate", children: p.ifcClassification.name }) })
        ] }, p.ifcClassification.location))
      ] })
    ] }),
    /* @__PURE__ */ M.jsx(pr, { label: o("Attach to type"), children: /* @__PURE__ */ M.jsx(Co, { radius: "xl", onClick: () => f(e), children: /* @__PURE__ */ M.jsx(NS, { size: 20 }) }) })
  ] });
}
function MS(e, t) {
  const n = t.find((r) => r.code === e);
  return n || !1;
}
function FS({ category: e, bbbr: t, items: n, index: r }) {
  const { t: o } = zt(), [i, s] = U(), [a, c] = U("grey"), [l, u] = U(new Array(n.length).fill("grey")), d = $e(ko), f = Z((p, m) => {
    u((g) => {
      const h = [...g];
      return h[p] = m, h;
    });
  }, []);
  return V(() => {
    const p = MS(e, t);
    if (d && p) {
      const m = p;
      new hr(d).api.classV1List({
        uri: m.uri,
        includeClassProperties: !0,
        includeChildClassReferences: !0,
        includeClassRelations: !0
        // languageCode: languageCode || undefined,
      }).then((h) => {
        if (!h.ok)
          throw new Error(`HTTP error! status: ${h.status}`);
        h.data && s(h.data);
      }).catch((h) => {
        throw new Error(`bSDD API error! status: ${h}`);
      });
    }
  }, [e, t, d]), V(() => {
    l.includes("orange") || l.includes("red") && l.includes("green") ? c("orange") : l.every((p) => p === "red") ? c("red") : l.every((p) => p === "green") && c("green");
  }, [l]), /* @__PURE__ */ M.jsxs(oe.Item, { value: r, children: [
    /* @__PURE__ */ M.jsx(oe.Control, { children: /* @__PURE__ */ M.jsxs(wn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ M.jsx(Un, { size: "1.5em", color: us[a], children: /* @__PURE__ */ M.jsx(Je, { size: "xs", c: "white", children: n.length }) }),
      /* @__PURE__ */ M.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ M.jsx(Je, { className: "truncate", children: e.length > 0 ? e : o("No description") }) })
    ] }) }),
    /* @__PURE__ */ M.jsx(oe.Panel, { mt: "-xs", pl: "xl", children: n.map((p, m) => /* @__PURE__ */ M.jsx(
      kS,
      {
        item: p,
        bsddClass: i,
        index: m,
        setCardColor: f
      },
      m
    )) })
  ] }, e);
}
let BS;
function jS(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function WS() {
  const e = $e(_a), t = $e(ko), n = $e(hS), r = Vn(() => jS(n, "description"), [n]), [o, i] = U([]);
  return V(() => {
    (async () => {
      try {
      } catch (a) {
        console.error(a.message);
      }
    })();
  }, []), V(() => {
    var c;
    if (!t || !e)
      return;
    const s = (c = e == null ? void 0 : e.ifcClassification) == null ? void 0 : c.location;
    if (!s)
      return;
    new hr(t).api.dictionaryV1ClassesList({
      Uri: s
      // languageCode: languageCode || undefined
    }).then((l) => {
      if (!l.ok)
        throw new Error(`HTTP error! status: ${l.status}`);
      l.data && l.data.classes && i(l.data.classes);
    }).catch((l) => {
      throw new Error(`bSDD API error! status: ${l}`);
    });
  }, [e, t]), /* @__PURE__ */ M.jsx(at.Panel, { value: "link", children: /* @__PURE__ */ M.jsx(oe, { chevronPosition: "left", children: Object.entries(r).map(([s, a], c) => /* @__PURE__ */ M.jsx(
    FS,
    {
      category: s,
      items: a,
      bbbr: o,
      index: s || c.toString()
    },
    s
  )) }) });
}
function zS({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = zt(), { mainDictionary: i, filterDictionaries: s } = t || { mainDictionary: null, filterDictionaries: [] }, a = i ? [i, ...s] : s, c = (l, u) => {
    var f;
    if (!t)
      return;
    let d = { ...t };
    if (((f = d.mainDictionary) == null ? void 0 : f.ifcClassification.location) === l) {
      const p = {
        ...d.mainDictionary,
        parameterMapping: u
      };
      d.mainDictionary = p;
    } else
      d.filterDictionaries = d.filterDictionaries.map((p) => p.ifcClassification.location === l ? { ...p, parameterMapping: u } : p);
    n(d), r(!0);
  };
  return /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx(Rn, { order: 5, children: o("Parameter mapping") }),
      /* @__PURE__ */ M.jsx(Je, { size: "xs", c: "dimmed", children: o("Parameter mapping help text") })
    ] }),
    /* @__PURE__ */ M.jsx(oe.Panel, { children: a.map((l) => /* @__PURE__ */ M.jsxs("div", { style: { marginBottom: "1em" }, children: [
      /* @__PURE__ */ M.jsx(
        Da,
        {
          label: l.ifcClassification.location,
          placeholder: "Enter a revit type parameter",
          value: l.parameterMapping,
          onChange: (u) => c(l.ifcClassification.location, u.currentTarget.value)
        }
      ),
      " "
    ] }, l.ifcClassification.location)) })
  ] }, e);
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function VS(e, t) {
  if (Jn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Jn(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GS(e) {
  var t = VS(e, "string");
  return Jn(t) == "symbol" ? t : String(t);
}
function HS(e, t, n) {
  return t = GS(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Dl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dl(Object(n), !0).forEach(function(r) {
      HS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Oe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Rl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ni = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Al = {
  INIT: "@@redux/INIT" + Ni(),
  REPLACE: "@@redux/REPLACE" + Ni(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ni();
  }
};
function US(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function jf(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Oe(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Oe(1));
    return n(jf)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Oe(2));
  var o = e, i = t, s = [], a = s, c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function u() {
    if (c)
      throw new Error(Oe(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Oe(4));
    if (c)
      throw new Error(Oe(5));
    var h = !0;
    return l(), a.push(g), function() {
      if (h) {
        if (c)
          throw new Error(Oe(6));
        h = !1, l();
        var S = a.indexOf(g);
        a.splice(S, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!US(g))
      throw new Error(Oe(7));
    if (typeof g.type > "u")
      throw new Error(Oe(8));
    if (c)
      throw new Error(Oe(9));
    try {
      c = !0, i = o(i, g);
    } finally {
      c = !1;
    }
    for (var h = s = a, w = 0; w < h.length; w++) {
      var S = h[w];
      S();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Oe(10));
    o = g, f({
      type: Al.REPLACE
    });
  }
  function m() {
    var g, h = d;
    return g = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(S) {
        if (typeof S != "object" || S === null)
          throw new Error(Oe(11));
        function b() {
          S.next && S.next(u());
        }
        b();
        var y = h(b);
        return {
          unsubscribe: y
        };
      }
    }, g[Rl] = function() {
      return this;
    }, g;
  }
  return f({
    type: Al.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[Rl] = m, r;
}
function Tl(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Ol(e, t) {
  if (typeof e == "function")
    return Tl(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Oe(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Tl(o, t));
  }
  return n;
}
function Wf() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0 ? function(r) {
    return r;
  } : t.length === 1 ? t[0] : t.reduce(function(r, o) {
    return function() {
      return r(o.apply(void 0, arguments));
    };
  });
}
function qS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(Oe(15));
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(s);
      });
      return i = Wf.apply(void 0, a)(o.dispatch), Pl(Pl({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var zf = { exports: {} }, Vf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn = v;
function KS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var YS = typeof Object.is == "function" ? Object.is : KS, XS = Cn.useState, JS = Cn.useEffect, QS = Cn.useLayoutEffect, ZS = Cn.useDebugValue;
function e1(e, t) {
  var n = t(), r = XS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return QS(function() {
    o.value = n, o.getSnapshot = t, $i(o) && i({ inst: o });
  }, [e, n, t]), JS(function() {
    return $i(o) && i({ inst: o }), e(function() {
      $i(o) && i({ inst: o });
    });
  }, [e]), ZS(n), n;
}
function $i(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !YS(e, n);
  } catch {
    return !0;
  }
}
function t1(e, t) {
  return t();
}
var n1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? t1 : e1;
Vf.useSyncExternalStore = Cn.useSyncExternalStore !== void 0 ? Cn.useSyncExternalStore : n1;
zf.exports = Vf;
var Gf = zf.exports, r1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo = v, o1 = Gf;
function i1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var s1 = typeof Object.is == "function" ? Object.is : i1, a1 = o1.useSyncExternalStore, c1 = Mo.useRef, l1 = Mo.useEffect, u1 = Mo.useMemo, d1 = Mo.useDebugValue;
r1.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = c1(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = u1(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, s1(u, p))
        return m;
      var g = r(p);
      return o !== void 0 && o(m, g) ? m : (u = p, d = g);
    }
    var l = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return c(t());
    }, f === null ? void 0 : function() {
      return c(f());
    }];
  }, [t, n, r, o]);
  var a = a1(e, i[0], i[1]);
  return l1(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), d1(a), a;
};
function f1(e) {
  e();
}
let Hf = f1;
const p1 = (e) => Hf = e, m1 = () => Hf, Nl = Symbol.for("react-redux-context"), $l = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function g1() {
  var e;
  if (!P.createContext)
    return {};
  const t = (e = $l[Nl]) != null ? e : $l[Nl] = /* @__PURE__ */ new Map();
  let n = t.get(P.createContext);
  return n || (n = P.createContext(null), t.set(P.createContext, n)), n;
}
const Uf = /* @__PURE__ */ g1(), h1 = () => {
  throw new Error("uSES not initialized!");
};
var qf = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe = typeof Symbol == "function" && Symbol.for, La = pe ? Symbol.for("react.element") : 60103, ka = pe ? Symbol.for("react.portal") : 60106, Fo = pe ? Symbol.for("react.fragment") : 60107, Bo = pe ? Symbol.for("react.strict_mode") : 60108, jo = pe ? Symbol.for("react.profiler") : 60114, Wo = pe ? Symbol.for("react.provider") : 60109, zo = pe ? Symbol.for("react.context") : 60110, Ma = pe ? Symbol.for("react.async_mode") : 60111, Vo = pe ? Symbol.for("react.concurrent_mode") : 60111, Go = pe ? Symbol.for("react.forward_ref") : 60112, Ho = pe ? Symbol.for("react.suspense") : 60113, b1 = pe ? Symbol.for("react.suspense_list") : 60120, Uo = pe ? Symbol.for("react.memo") : 60115, qo = pe ? Symbol.for("react.lazy") : 60116, y1 = pe ? Symbol.for("react.block") : 60121, v1 = pe ? Symbol.for("react.fundamental") : 60117, w1 = pe ? Symbol.for("react.responder") : 60118, S1 = pe ? Symbol.for("react.scope") : 60119;
function He(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case La:
        switch (e = e.type, e) {
          case Ma:
          case Vo:
          case Fo:
          case jo:
          case Bo:
          case Ho:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case zo:
              case Go:
              case qo:
              case Uo:
              case Wo:
                return e;
              default:
                return t;
            }
        }
      case ka:
        return t;
    }
  }
}
function Kf(e) {
  return He(e) === Vo;
}
ee.AsyncMode = Ma;
ee.ConcurrentMode = Vo;
ee.ContextConsumer = zo;
ee.ContextProvider = Wo;
ee.Element = La;
ee.ForwardRef = Go;
ee.Fragment = Fo;
ee.Lazy = qo;
ee.Memo = Uo;
ee.Portal = ka;
ee.Profiler = jo;
ee.StrictMode = Bo;
ee.Suspense = Ho;
ee.isAsyncMode = function(e) {
  return Kf(e) || He(e) === Ma;
};
ee.isConcurrentMode = Kf;
ee.isContextConsumer = function(e) {
  return He(e) === zo;
};
ee.isContextProvider = function(e) {
  return He(e) === Wo;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === La;
};
ee.isForwardRef = function(e) {
  return He(e) === Go;
};
ee.isFragment = function(e) {
  return He(e) === Fo;
};
ee.isLazy = function(e) {
  return He(e) === qo;
};
ee.isMemo = function(e) {
  return He(e) === Uo;
};
ee.isPortal = function(e) {
  return He(e) === ka;
};
ee.isProfiler = function(e) {
  return He(e) === jo;
};
ee.isStrictMode = function(e) {
  return He(e) === Bo;
};
ee.isSuspense = function(e) {
  return He(e) === Ho;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Fo || e === Vo || e === jo || e === Bo || e === Ho || e === b1 || typeof e == "object" && e !== null && (e.$$typeof === qo || e.$$typeof === Uo || e.$$typeof === Wo || e.$$typeof === zo || e.$$typeof === Go || e.$$typeof === v1 || e.$$typeof === w1 || e.$$typeof === S1 || e.$$typeof === y1);
};
ee.typeOf = He;
qf.exports = ee;
var x1 = qf.exports, Fa = x1, C1 = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, E1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, I1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Yf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ba = {};
Ba[Fa.ForwardRef] = I1;
Ba[Fa.Memo] = Yf;
function _l(e) {
  return Fa.isMemo(e) ? Yf : Ba[e.$$typeof] || C1;
}
var D1 = Object.defineProperty, P1 = Object.getOwnPropertyNames, Ll = Object.getOwnPropertySymbols, R1 = Object.getOwnPropertyDescriptor, A1 = Object.getPrototypeOf, kl = Object.prototype;
function Xf(e, t, n) {
  if (typeof t != "string") {
    if (kl) {
      var r = A1(t);
      r && r !== kl && Xf(e, r, n);
    }
    var o = P1(t);
    Ll && (o = o.concat(Ll(t)));
    for (var i = _l(e), s = _l(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!E1[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = R1(t, c);
        try {
          D1(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var T1 = Xf;
const Ml = /* @__PURE__ */ bu(T1);
var Jf = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja = Symbol.for("react.element"), Wa = Symbol.for("react.portal"), Ko = Symbol.for("react.fragment"), Yo = Symbol.for("react.strict_mode"), Xo = Symbol.for("react.profiler"), Jo = Symbol.for("react.provider"), Qo = Symbol.for("react.context"), O1 = Symbol.for("react.server_context"), Zo = Symbol.for("react.forward_ref"), ei = Symbol.for("react.suspense"), ti = Symbol.for("react.suspense_list"), ni = Symbol.for("react.memo"), ri = Symbol.for("react.lazy"), N1 = Symbol.for("react.offscreen"), Qf;
Qf = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ja:
        switch (e = e.type, e) {
          case Ko:
          case Xo:
          case Yo:
          case ei:
          case ti:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case O1:
              case Qo:
              case Zo:
              case ri:
              case ni:
              case Jo:
                return e;
              default:
                return t;
            }
        }
      case Wa:
        return t;
    }
  }
}
te.ContextConsumer = Qo;
te.ContextProvider = Jo;
te.Element = ja;
te.ForwardRef = Zo;
te.Fragment = Ko;
te.Lazy = ri;
te.Memo = ni;
te.Portal = Wa;
te.Profiler = Xo;
te.StrictMode = Yo;
te.Suspense = ei;
te.SuspenseList = ti;
te.isAsyncMode = function() {
  return !1;
};
te.isConcurrentMode = function() {
  return !1;
};
te.isContextConsumer = function(e) {
  return ot(e) === Qo;
};
te.isContextProvider = function(e) {
  return ot(e) === Jo;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ja;
};
te.isForwardRef = function(e) {
  return ot(e) === Zo;
};
te.isFragment = function(e) {
  return ot(e) === Ko;
};
te.isLazy = function(e) {
  return ot(e) === ri;
};
te.isMemo = function(e) {
  return ot(e) === ni;
};
te.isPortal = function(e) {
  return ot(e) === Wa;
};
te.isProfiler = function(e) {
  return ot(e) === Xo;
};
te.isStrictMode = function(e) {
  return ot(e) === Yo;
};
te.isSuspense = function(e) {
  return ot(e) === ei;
};
te.isSuspenseList = function(e) {
  return ot(e) === ti;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ko || e === Xo || e === Yo || e === ei || e === ti || e === N1 || typeof e == "object" && e !== null && (e.$$typeof === ri || e.$$typeof === ni || e.$$typeof === Jo || e.$$typeof === Qo || e.$$typeof === Zo || e.$$typeof === Qf || e.getModuleId !== void 0);
};
te.typeOf = ot;
Jf.exports = te;
var $1 = Jf.exports;
const _1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function L1(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, c, l, u, d, f;
  function p(S, b) {
    return c = S, l = b, u = e(c, l), d = t(r, l), f = n(u, d, l), a = !0, f;
  }
  function m() {
    return u = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function h() {
    const S = e(c, l), b = !s(S, u);
    return u = S, b && (f = n(u, d, l)), f;
  }
  function w(S, b) {
    const y = !i(b, l), x = !o(S, c, b, l);
    return c = S, l = b, y && x ? m() : y ? g() : x ? h() : f;
  }
  return function(b, y) {
    return a ? w(b, y) : p(b, y);
  };
}
function k1(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = rf(t, _1);
  const s = n(e, i), a = r(e, i), c = o(e, i);
  return L1(s, a, c, e, i);
}
function M1(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function ds(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Fl(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Zf(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Fl(e);
      let l = i(a, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Fl(l), l = i(a, c)), l;
    }, i;
  };
}
function za(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function F1(e) {
  return e && typeof e == "object" ? ds((t) => (
    // @ts-ignore
    M1(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Zf(e)
  ) : za(e, "mapDispatchToProps") : ds((t) => ({
    dispatch: t
  }));
}
function B1(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Zf(e)
  ) : za(e, "mapStateToProps") : ds(() => ({}));
}
function j1(e, t, n) {
  return Ot({}, n, e, t);
}
function W1(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(c, l, u) {
      const d = e(c, l, u);
      return i ? o(d, s) || (s = d) : (i = !0, s = d), s;
    };
  };
}
function z1(e) {
  return e ? typeof e == "function" ? W1(e) : za(e, "mergeProps") : () => j1;
}
function V1() {
  const e = m1();
  let t = null, n = null;
  return {
    clear() {
      t = null, n = null;
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      let r = [], o = t;
      for (; o; )
        r.push(o), o = o.next;
      return r;
    },
    subscribe(r) {
      let o = !0, i = n = {
        callback: r,
        next: null,
        prev: n
      };
      return i.prev ? i.prev.next = i : t = i, function() {
        !o || t === null || (o = !1, i.next ? i.next.prev = i.prev : n = i.prev, i.prev ? i.prev.next = i.next : t = i.next);
      };
    }
  };
}
const Bl = {
  notify() {
  },
  get: () => []
};
function ep(e, t) {
  let n, r = Bl, o = 0, i = !1;
  function s(g) {
    u();
    const h = r.subscribe(g);
    let w = !1;
    return () => {
      w || (w = !0, h(), d());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = V1());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Bl);
  }
  function f() {
    i || (i = !0, u());
  }
  function p() {
    i && (i = !1, d());
  }
  const m = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
const G1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", no = G1 ? P.useLayoutEffect : P.useEffect;
function jl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _i(e, t) {
  if (jl(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !jl(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const H1 = ["reactReduxForwardedRef"];
let tp = h1;
const U1 = (e) => {
  tp = e;
}, q1 = [null, null];
function K1(e, t, n) {
  no(() => e(...t), n);
}
function Y1(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function X1(e, t, n, r, o, i, s, a, c, l, u) {
  if (!e)
    return () => {
    };
  let d = !1, f = null;
  const p = () => {
    if (d || !a.current)
      return;
    const g = t.getState();
    let h, w;
    try {
      h = r(g, o.current);
    } catch (S) {
      w = S, f = S;
    }
    w || (f = null), h === i.current ? s.current || l() : (i.current = h, c.current = h, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function J1(e, t) {
  return e === t;
}
function np(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = J1,
  areOwnPropsEqual: i = _i,
  areStatePropsEqual: s = _i,
  areMergedPropsEqual: a = _i,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = Uf
} = {}) {
  const u = l, d = B1(e), f = F1(t), p = z1(n), m = !!e;
  return (h) => {
    const w = h.displayName || h.name || "Component", S = `Connect(${w})`, b = {
      shouldHandleStateChanges: m,
      displayName: S,
      wrappedComponentName: w,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: d,
      // @ts-ignore
      initMapDispatchToProps: f,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: s,
      areOwnPropsEqual: i,
      areMergedPropsEqual: a
    };
    function y(I) {
      const [E, T, $] = P.useMemo(() => {
        const {
          reactReduxForwardedRef: ae
        } = I, Y = rf(I, H1);
        return [I.context, ae, Y];
      }, [I]), N = P.useMemo(() => E && E.Consumer && // @ts-ignore
      $1.isContextConsumer(/* @__PURE__ */ P.createElement(E.Consumer, null)) ? E : u, [E, u]), L = P.useContext(N), k = !!I.store && !!I.store.getState && !!I.store.dispatch, A = !!L && !!L.store, _ = k ? I.store : L.store, R = A ? L.getServerState : _.getState, B = P.useMemo(() => k1(_.dispatch, b), [_]), [O, H] = P.useMemo(() => {
        if (!m)
          return q1;
        const ae = ep(_, k ? void 0 : L.subscription), Y = ae.notifyNestedSubs.bind(ae);
        return [ae, Y];
      }, [_, k, L]), X = P.useMemo(() => k ? L : Ot({}, L, {
        subscription: O
      }), [k, L, O]), ne = P.useRef(), be = P.useRef($), ue = P.useRef(), Ae = P.useRef(!1);
      P.useRef(!1);
      const ye = P.useRef(!1), re = P.useRef();
      no(() => (ye.current = !0, () => {
        ye.current = !1;
      }), []);
      const ve = P.useMemo(() => () => ue.current && $ === be.current ? ue.current : B(_.getState(), $), [_, $]), Le = P.useMemo(() => (Y) => O ? X1(
        m,
        _,
        O,
        // @ts-ignore
        B,
        be,
        ne,
        Ae,
        ye,
        ue,
        H,
        Y
      ) : () => {
      }, [O]);
      K1(Y1, [be, ne, Ae, $, ue, H]);
      let xe;
      try {
        xe = tp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Le,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ve,
          R ? () => B(R(), $) : ve
        );
      } catch (ae) {
        throw re.current && (ae.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), ae;
      }
      no(() => {
        re.current = void 0, ue.current = void 0, ne.current = xe;
      });
      const Ce = P.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ P.createElement(h, Ot({}, xe, {
          ref: T
        }))
      ), [T, h, xe]);
      return P.useMemo(() => m ? /* @__PURE__ */ P.createElement(N.Provider, {
        value: X
      }, Ce) : Ce, [N, Ce, X]);
    }
    const C = P.memo(y);
    if (C.WrappedComponent = h, C.displayName = y.displayName = S, c) {
      const E = P.forwardRef(function($, N) {
        return /* @__PURE__ */ P.createElement(C, Ot({}, $, {
          reactReduxForwardedRef: N
        }));
      });
      return E.displayName = S, E.WrappedComponent = h, Ml(E, h);
    }
    return Ml(C, h);
  };
}
function Q1({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = P.useMemo(() => {
    const l = ep(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = P.useMemo(() => e.getState(), [e]);
  no(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || Uf;
  return /* @__PURE__ */ P.createElement(c.Provider, {
    value: s
  }, n);
}
U1(Gf.useSyncExternalStore);
p1(Dm);
function Z1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function rp(e, t) {
  var n = U(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = W(!0), o = W(n), i = r.current || !!(t && o.current.inputs && Z1(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return V(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function ex(e, t) {
  return rp(function() {
    return e;
  }, t);
}
var K = rp, z = ex, tx = !0, Li = "Invariant failed";
function nx(e, t) {
  if (!e) {
    if (tx)
      throw new Error(Li);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Li, ": ").concat(n) : Li;
    throw new Error(r);
  }
}
var ct = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, a = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: i,
    width: s,
    height: a,
    x: i,
    y: n,
    center: {
      x: (r + i) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, Va = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Wl = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, rx = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, ki = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ga = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? ki : r, i = t.border, s = i === void 0 ? ki : i, a = t.padding, c = a === void 0 ? ki : a, l = ct(Va(n, o)), u = ct(Wl(n, s)), d = ct(Wl(u, c));
  return {
    marginBox: l,
    borderBox: ct(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: c
  };
}, Ke = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && nx(!1), o;
}, ox = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, ro = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = rx(r, n);
  return Ga({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, oo = function(t, n) {
  return n === void 0 && (n = ox()), ro(t, n);
}, op = function(t, n) {
  var r = {
    top: Ke(n.marginTop),
    right: Ke(n.marginRight),
    bottom: Ke(n.marginBottom),
    left: Ke(n.marginLeft)
  }, o = {
    top: Ke(n.paddingTop),
    right: Ke(n.paddingRight),
    bottom: Ke(n.paddingBottom),
    left: Ke(n.paddingLeft)
  }, i = {
    top: Ke(n.borderTopWidth),
    right: Ke(n.borderRightWidth),
    bottom: Ke(n.borderBottomWidth),
    left: Ke(n.borderLeftWidth)
  };
  return Ga({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, ip = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return op(n, r);
}, zl = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function ix(e, t) {
  return !!(e === t || zl(e) && zl(t));
}
function sx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!ix(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = sx);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++)
      o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var s = e.apply(this, o);
    return n = {
      lastResult: s,
      lastArgs: o,
      lastThis: this
    }, s;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var ax = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, a = new Array(s), c = 0; c < s; c++)
      a[c] = arguments[c];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Qn = ax;
function sp(e, t) {
}
sp.bind(null, "warn");
sp.bind(null, "error");
function Nt() {
}
function cx(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ye(e, t, n) {
  const r = t.map((o) => {
    const i = cx(n, o.options);
    return e.addEventListener(o.eventName, o.fn, i), function() {
      e.removeEventListener(o.eventName, o.fn, i);
    };
  });
  return function() {
    r.forEach((i) => {
      i();
    });
  };
}
const lx = "Invariant failed";
class io extends Error {
}
io.prototype.toString = function() {
  return this.message;
};
function F(e, t) {
  if (!e)
    throw new io(lx);
}
class ux extends v.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Nt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof io && n.preventDefault();
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = Ye(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof io) {
      this.setState({});
      return;
    }
    throw t;
  }
  componentWillUnmount() {
    this.unbind();
  }
  render() {
    return this.props.children(this.setCallbacks);
  }
}
const dx = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, so = (e) => e + 1, fx = (e) => `
  You have lifted an item in position ${so(e.source.index)}
`, ap = (e, t) => {
  const n = e.droppableId === t.droppableId, r = so(e.index), o = so(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, cp = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, px = (e) => {
  const t = e.destination;
  if (t)
    return ap(e.source, t);
  const n = e.combine;
  return n ? cp(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Vl = (e) => `
  The item has returned to its starting position
  of ${so(e.index)}
`, mx = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Vl(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${ap(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${cp(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Vl(e.source)}
  `;
}, gx = {
  dragHandleUsageInstructions: dx,
  onDragStart: fx,
  onDragUpdate: px,
  onDragEnd: mx
};
var Mr = gx;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Be = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), $t = (e, t) => e.x === t.x && e.y === t.y, An = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), sn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Zn = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Gl = (e, t) => Math.min(...t.map((n) => Zn(e, n))), lp = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var hx = (e, t) => {
  const n = ct({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const br = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Hl = (e) => [{
  x: e.left,
  y: e.top
}, {
  x: e.right,
  y: e.top
}, {
  x: e.left,
  y: e.bottom
}, {
  x: e.right,
  y: e.bottom
}], bx = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, yx = (e, t) => t ? br(e, t.scroll.diff.displacement) : e, vx = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, wx = (e, t) => t && t.shouldClipSubject ? hx(t.pageMarginBox, e) : ct(e);
var En = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = yx(e.marginBox, r), i = vx(o, n, t), s = wx(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Ha = (e, t) => {
  e.frame || F(!1);
  const n = e.frame, r = Be(t, n.scroll.initial), o = An(r), i = {
    ...n,
    scroll: {
      initial: n.scroll.initial,
      current: t,
      diff: {
        value: r,
        displacement: o
      },
      max: n.scroll.max
    }
  }, s = En({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: i
  });
  return {
    ...e,
    frame: i,
    subject: s
  };
};
const up = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), dp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), oi = de((e) => Object.values(e)), Sx = de((e) => Object.values(e));
var Tn = de((e, t) => Sx(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Ua(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function ii(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var si = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), xx = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Ua(o))
    return null;
  function s(p) {
    const m = {
      type: "COMBINE",
      combine: {
        draggableId: p,
        droppableId: n.descriptor.id
      }
    };
    return {
      ...o,
      at: m
    };
  }
  const a = o.displaced.all, c = a.length ? a[0] : null;
  if (e)
    return c ? s(c) : null;
  const l = si(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const u = l.findIndex((p) => p.descriptor.id === c);
  u === -1 && F(!1);
  const d = u - 1;
  if (d < 0)
    return null;
  const f = l[d];
  return s(f.descriptor.id);
}, On = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const fp = {
  point: fe,
  value: 0
}, er = {
  invisible: {},
  visible: {},
  all: []
}, Cx = {
  displaced: er,
  displacedBy: fp,
  at: null
};
var Ex = Cx, Qe = (e, t) => (n) => e <= n && n <= t, pp = (e) => {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && s || l && i;
  };
}, Ix = (e) => {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const qa = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, mp = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var Dx = (e) => (t) => {
  const n = Qe(t.top, t.bottom), r = Qe(t.left, t.right);
  return (o) => e === qa ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const Px = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return br(e, n);
}, Rx = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, Ax = (e, t, n) => n(t)(e), Ka = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? Px(e, t) : e;
  return Rx(i, t, o) && Ax(i, n, o);
}, Tx = (e) => Ka({
  ...e,
  isVisibleThroughFrameFn: pp
}), gp = (e) => Ka({
  ...e,
  isVisibleThroughFrameFn: Ix
}), Ox = (e) => Ka({
  ...e,
  isVisibleThroughFrameFn: Dx(e.destination.axis)
}), Nx = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  if (!t)
    return !0;
  const {
    invisible: r,
    visible: o
  } = t;
  if (r[e])
    return !1;
  const i = o[e];
  return i ? i.shouldAnimate : !0;
};
function $x(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ct(Va(n, r));
}
function tr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const l = $x(c, n), u = c.descriptor.id;
    if (a.all.push(u), !Tx({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = Nx(u, i, o), p = {
      draggableId: u,
      shouldAnimate: f
    };
    return a.visible[u] = p, a;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function _x(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Ul({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = _x(e, {
    inHomeList: t
  });
  return {
    displaced: er,
    displacedBy: n,
    at: {
      type: "REORDER",
      destination: {
        droppableId: r.descriptor.id,
        index: o
      }
    }
  };
}
function ao({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const c = On(e, n);
  if (s == null)
    return Ul({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return Ul({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = si(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: tr({
      afterDragging: f,
      destination: n,
      displacedBy: o,
      last: i,
      viewport: r.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: s
      }
    }
  };
}
function Wt(e, t) {
  return !!t.effected[e];
}
var Lx = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return Wt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, kx = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, Mx = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: a,
  afterCritical: c
}) => {
  const l = s.at;
  if (l || F(!1), l.type === "REORDER") {
    const d = kx({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : ao({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = Lx({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : ao({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, Fx = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Wt(n, t) ? o ? fe : An(r.point) : o ? r.point : fe;
}, Bx = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = ii(t);
  r || F(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = Fx({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const hp = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, jx = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Ya = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, ql = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => sn(e.line, t.marginBox[e.end] + hp(e, n), Ya(e, t.marginBox, n)), Kl = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => sn(e.line, t.marginBox[e.start] - jx(e, n), Ya(e, t.marginBox, n)), Wx = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => sn(e.line, t.contentBox[e.start] + hp(e, n), Ya(e, t.contentBox, n));
var zx = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Tn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return Wx({
      axis: a,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, u = c.all[0];
  if (u) {
    const f = n[u];
    if (Wt(u, o))
      return Kl({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = ro(f.page, l.point);
    return Kl({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Wt(d.descriptor.id, o)) {
    const f = ro(d.page, An(o.displacedBy.point));
    return ql({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return ql({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, fs = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const Vx = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? zx({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : Bx({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var ai = (e) => {
  const t = Vx(e), n = e.droppable;
  return n ? fs(n, t) : t;
}, bp = (e, t) => {
  const n = Be(t, e.scroll.initial), r = An(n);
  return {
    frame: ct({
      top: t.y,
      bottom: t.y + e.frame.height,
      left: t.x,
      right: t.x + e.frame.width
    }),
    scroll: {
      initial: e.scroll.initial,
      max: e.scroll.max,
      current: t,
      diff: {
        value: n,
        displacement: r
      }
    }
  };
};
function Yl(e, t) {
  return e.map((n) => t[n]);
}
function Gx(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Hx = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = bp(t, he(t.scroll.current, o)), s = n.frame ? Ha(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, c = tr({
    afterDragging: Yl(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = tr({
    afterDragging: Yl(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = Gx(m, f);
    if (g) {
      d[m] = g;
      return;
    }
    u[m] = !0;
  }), {
    ...e,
    displaced: {
      all: a.all,
      invisible: u,
      visible: d
    }
  };
}, Ux = (e, t) => he(e.scroll.diff.displacement, t), Xa = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Ux(n, e), o = Be(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, yp = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = Be(n, e.page.borderBox.center), c = {
    target: br(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? Ox(c) : gp(c);
}, qx = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = Tn(n.descriptor.id, r), u = On(t, n), d = xx({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || Mx({
    isMovingForward: e,
    isInHomeList: u,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: i,
    afterCritical: c
  });
  if (!d)
    return null;
  const f = ai({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (yp({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Xa({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = Be(f, s), g = Hx({
    impact: d,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: m
  });
  return {
    clientSelection: a,
    impact: g,
    scrollJumpRequest: m
  };
};
const De = (e) => {
  const t = e.subject.active;
  return t || F(!1), t;
};
var Kx = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = Qe(i[s.start], i[s.end]), c = oi(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => pp(o.frame)(De(u))).filter((u) => {
    const d = De(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = De(u), f = Qe(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = De(u)[s.crossAxisStart], p = De(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => De(u)[s.crossAxisStart] === De(f[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => Qe(De(u)[s.start], De(u)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => De(u)[s.start] - De(d)[s.start])[0] : c.sort((u, d) => {
    const f = Gl(t, Hl(De(u))), p = Gl(t, Hl(De(d)));
    return f !== p ? f - p : De(u)[s.start] - De(d)[s.start];
  })[0];
};
const Xl = (e, t) => {
  const n = e.page.borderBox.center;
  return Wt(e.descriptor.id, t) ? Be(n, t.displacedBy.point) : n;
}, Yx = (e, t) => {
  const n = e.page.borderBox;
  return Wt(e.descriptor.id, t) ? br(n, An(t.displacedBy.point)) : n;
};
var Xx = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => gp({
  target: Yx(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = Zn(e, fs(n, Xl(s, o))), l = Zn(e, fs(n, Xl(a, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, yr = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: sn(t.line, r)
  };
});
const Jx = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return sn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Tn(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : sn(r.line, c);
}, vp = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), wp = (e, t, n) => {
  const r = e.frame;
  On(t, e) && F(!1), e.subject.withPlaceholder && F(!1);
  const o = yr(e.axis, t.displaceBy).point, i = Jx(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = En({
      page: e.subject.page,
      withPlaceholder: s,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: u
    };
  }
  const a = i ? he(r.scroll.max, i) : r.scroll.max, c = vp(r, a), l = En({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: l,
    frame: c
  };
}, Qx = (e) => {
  const t = e.subject.withPlaceholder;
  t || F(!1);
  const n = e.frame;
  if (!n) {
    const s = En({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: s
    };
  }
  const r = t.oldFrameMaxScroll;
  r || F(!1);
  const o = vp(n, r), i = En({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: i,
    frame: o
  };
};
var Zx = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: i,
  viewport: s,
  afterCritical: a
}) => {
  if (!t) {
    if (n.length)
      return null;
    const d = {
      displaced: er,
      displacedBy: fp,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = ai({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = On(r, i) ? i : wp(i, r, o);
    return yp({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const c = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], l = (() => {
    const d = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? d : d + 1;
  })(), u = yr(i.axis, r.displaceBy);
  return ao({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: er,
    index: l
  });
}, eC = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = Kx({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = Tn(c.descriptor.id, o), u = Xx({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = Zx({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: u,
    insideDestination: l,
    viewport: s,
    afterCritical: a
  });
  if (!d)
    return null;
  const f = ai({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Xa({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, We = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const tC = (e, t) => {
  const n = We(e);
  return n ? t[n] : null;
};
var nC = ({
  state: e,
  type: t
}) => {
  const n = tC(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? qx({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : eC({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    isOver: i,
    draggables: d,
    droppables: f,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function Qt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Sp(e) {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function rC(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function oC({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = sn(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Zn(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function iC({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = oi(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !rC(e, i))
      return !1;
    if (Sp(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], u = Qe(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : oC({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const xp = (e, t) => ct(br(e, t));
var sC = (e, t) => {
  const n = e.frame;
  return n ? xp(t, n.scroll.diff.value) : t;
};
function Cp({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function aC({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var cC = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, c = yr(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = si(t, r).find((g) => {
    const h = g.descriptor.id, w = g.page.borderBox.center[a.line], S = Wt(h, s), b = Cp({
      displaced: o,
      id: h
    });
    return S ? b ? d <= w : u < w - l : b ? d <= w + l : u < w;
  }) || null, m = aC({
    draggable: t,
    closest: p,
    inHomeList: On(t, n)
  });
  return ao({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: m
  });
};
const lC = 4;
var uC = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = yr(r.axis, e.displaceBy), c = a.value, l = t[s.start], u = t[s.end], f = si(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, S = h[s.size] / lC, b = Wt(g, i), y = Cp({
      displaced: n.displaced,
      id: g
    });
    return b ? y ? u > h[s.start] + S && u < h[s.end] - S : l > h[s.start] - c + S && l < h[s.end] - c - S : y ? u > h[s.start] + c + S && u < h[s.end] + c - S : l > h[s.start] + S && l < h[s.end] - S;
  });
  return f ? {
    displacedBy: a,
    displaced: n.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: f.descriptor.id,
        droppableId: r.descriptor.id
      }
    }
  } : null;
}, Ep = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = xp(t.page.borderBox, e), c = iC({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return Ex;
  const l = r[c], u = Tn(l.descriptor.id, n), d = sC(l, a);
  return uC({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }) || cC({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, Ja = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const dC = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = We(e), o = We(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = Qx(i);
  return Ja(n, s);
};
var fC = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = dC({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = We(o);
  if (!s)
    return i;
  const a = n[s];
  if (On(e, a) || a.subject.withPlaceholder)
    return i;
  const c = wp(a, e, t);
  return Ja(i, c);
}, Wn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = Be(c, e.initial.client.selection), u = {
    offset: l,
    selection: c,
    borderBoxCenter: he(e.initial.client.borderBoxCenter, l)
  }, d = {
    selection: he(u.selection, s.scroll.current),
    borderBoxCenter: he(u.borderBoxCenter, s.scroll.current),
    offset: he(u.offset, s.scroll.diff.value)
  }, f = {
    client: u,
    page: d
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: s,
      current: f
    };
  const p = a.draggables[e.critical.draggable.id], m = o || Ep({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = fC({
    draggable: p,
    impact: m,
    previousImpact: e.impact,
    draggables: a.draggables,
    droppables: a.droppables
  });
  return {
    ...e,
    current: f,
    dimensions: {
      draggables: a.draggables,
      droppables: g
    },
    impact: m,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function pC(e, t) {
  return e.map((n) => t[n]);
}
var Ip = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = pC(i.all, n), a = tr({
    afterDragging: s,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: i
  });
  return {
    ...e,
    displaced: a
  };
}, Dp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = ai({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Xa({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Pp = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && F(!1);
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, c = s[e.critical.draggable.id], l = We(r);
  l || F(!1);
  const u = a[l], d = Ip({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Dp({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Wn({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, mC = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Rp = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = yr(t.axis, e.displaceBy), i = Tn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && F(!1);
  const a = i.slice(s + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: tr({
        afterDragging: a,
        destination: t,
        displacedBy: o,
        last: null,
        viewport: r.frame,
        forceShouldAnimate: !1
      }),
      displacedBy: o,
      at: {
        type: "REORDER",
        destination: mC(e.descriptor)
      }
    },
    afterCritical: l
  };
}, gC = (e, t) => ({
  draggables: e.draggables,
  droppables: Ja(e.droppables, t)
}), hC = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = ro(e.client, t), o = oo(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, bC = (e) => {
  const t = e.frame;
  return t || F(!1), t;
}, yC = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = bC(s).scroll.diff.value, l = he(r, c);
    return hC({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, vC = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((w) => {
    const S = e.dimensions.droppables[w.droppableId];
    return Ha(S, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...up(n)
  }, o = dp(yC({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((w) => {
    delete i[w];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = We(e.impact), c = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Rp({
    draggable: l,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = Ep({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  }), g = {
    ...e,
    phase: "DRAGGING",
    impact: m,
    onLiftImpact: d,
    dimensions: s,
    afterCritical: f,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? g : {
    ...g,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const ps = (e) => e.movementMode === "SNAP", Mi = (e, t, n) => {
  const r = gC(e.dimensions, t);
  return !ps(e) || n ? Wn({
    state: e,
    dimensions: r
  }) : Pp({
    state: e,
    dimensions: r
  });
};
function Fi(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Jl = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var wC = (e = Jl, t) => {
  if (t.type === "FLUSH")
    return {
      ...Jl,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && F(!1);
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: s
    } = t.payload, a = i.draggables[n.draggable.id], c = i.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: fe
    }, u = {
      client: l,
      page: {
        selection: he(l.selection, o.scroll.initial),
        borderBoxCenter: he(l.selection, o.scroll.initial),
        offset: he(l.selection, o.scroll.diff.value)
      }
    }, d = oi(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Rp({
      draggable: a,
      home: c,
      draggables: i.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: s,
      dimensions: i,
      initial: u,
      current: u,
      isWindowScrollAllowed: d,
      impact: f,
      afterCritical: p,
      onLiftImpact: f,
      viewport: o,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
  }
  if (t.type === "COLLECTION_STARTING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && F(!1), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || F(!1), vC({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || F(!1);
    const {
      client: n
    } = t.payload;
    return $t(n, e.current.client.selection) ? e : Wn({
      state: e,
      clientSelection: n,
      impact: ps(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Fi(e);
    Qt(e) || F(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Ha(o, r);
    return Mi(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || F(!1);
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || F(!1), o.isEnabled === r && F(!1);
    const i = {
      ...o,
      isEnabled: r
    };
    return Mi(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Qt(e) || F(!1);
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || F(!1), o.isCombineEnabled === r && F(!1);
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Mi(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Qt(e) || F(!1), e.isWindowScrollAllowed || F(!1);
    const n = t.payload.newScroll;
    if ($t(e.viewport.scroll.current, n))
      return Fi(e);
    const r = bp(e.viewport, n);
    return ps(e) ? Pp({
      state: e,
      viewport: r
    }) : Wn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Qt(e))
      return e;
    const n = t.payload.maxScroll;
    if ($t(n, e.viewport.scroll.max))
      return e;
    const r = {
      ...e.viewport,
      scroll: {
        ...e.viewport.scroll,
        max: n
      }
    };
    return {
      ...e,
      viewport: r
    };
  }
  if (t.type === "MOVE_UP" || t.type === "MOVE_DOWN" || t.type === "MOVE_LEFT" || t.type === "MOVE_RIGHT") {
    if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
      return e;
    e.phase !== "DRAGGING" && F(!1);
    const n = nC({
      state: e,
      type: t.type
    });
    return n ? Wn({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && F(!1), {
      ...e,
      phase: "DROP_PENDING",
      isWaiting: !0,
      reason: n
    };
  }
  if (t.type === "DROP_ANIMATE") {
    const {
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o
    } = t.payload;
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || F(!1), {
      phase: "DROP_ANIMATING",
      completed: n,
      dropDuration: r,
      newHomeClientOffset: o,
      dimensions: e.dimensions
    };
  }
  if (t.type === "DROP_COMPLETE") {
    const {
      completed: n
    } = t.payload;
    return {
      phase: "IDLE",
      completed: n,
      shouldFlush: !1
    };
  }
  return e;
};
const SC = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), xC = (e) => ({
  type: "LIFT",
  payload: e
}), CC = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), EC = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), IC = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), DC = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), PC = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), RC = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ap = (e) => ({
  type: "MOVE",
  payload: e
}), AC = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), TC = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), OC = () => ({
  type: "MOVE_UP",
  payload: null
}), NC = () => ({
  type: "MOVE_DOWN",
  payload: null
}), $C = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), _C = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Qa = () => ({
  type: "FLUSH",
  payload: null
}), LC = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Za = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Tp = (e) => ({
  type: "DROP",
  payload: e
}), kC = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Op = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var MC = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (o.type !== "LIFT") {
    r(o);
    return;
  }
  const {
    id: i,
    clientSelection: s,
    movementMode: a
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(Za({
    completed: c.completed
  })), t().phase !== "IDLE" && F(!1), n(Qa()), n(SC({
    draggableId: i,
    movementMode: a
  }));
  const u = {
    draggableId: i,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: d,
    dimensions: f,
    viewport: p
  } = e.startPublishing(u);
  n(CC({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, FC = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const ec = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, nr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Np = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Xt = `${Np.outOfTheWay}s ${ec.outOfTheWay}`, zn = {
  fluid: `opacity ${Xt}`,
  snap: `transform ${Xt}, opacity ${Xt}`,
  drop: (e) => {
    const t = `${e}s ${ec.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Xt}`,
  placeholder: `height ${Xt}, width ${Xt}, margin ${Xt}`
}, Ql = (e) => $t(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ms = {
  moveTo: Ql,
  drop: (e, t) => {
    const n = Ql(e);
    if (n)
      return t ? `${n} scale(${nr.scale.drop})` : n;
  }
}, {
  minDropTime: gs,
  maxDropTime: $p
} = Np, BC = $p - gs, Zl = 1500, jC = 0.6;
var WC = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Zn(e, t);
  if (r <= 0)
    return gs;
  if (r >= Zl)
    return $p;
  const o = r / Zl, i = gs + BC * o, s = n === "CANCEL" ? i * jC : i;
  return Number(s.toFixed(2));
}, zC = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = We(e), c = a ? s[a] : null, l = s[t.descriptor.droppableId], u = Dp({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Be(u, t.client.borderBox.center);
}, VC = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Ip({
    draggables: e,
    impact: i,
    destination: r,
    viewport: o,
    forceShouldAnimate: !0
  }),
  didDropInsideDroppable: !1
} : n.at.type === "REORDER" ? {
  impact: n,
  didDropInsideDroppable: !0
} : {
  impact: {
    ...n,
    displaced: er
  },
  didDropInsideDroppable: !0
};
const GC = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(kC({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && F(!1), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || F(!1);
  const a = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = VC({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? Ua(u) : null, p = d ? ii(u) : null, m = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, g = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: m,
    reason: i,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, h = zC({
    impact: u,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), w = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: u
  };
  if (!(!$t(o.current.client.offset, h) || !!g.combine)) {
    t(Za({
      completed: w
    }));
    return;
  }
  const b = WC({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(LC({
    newHomeClientOffset: h,
    dropDuration: b,
    completed: w
  }));
};
var HC = GC, _p = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function UC(e) {
  return {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: (t) => {
      t.target !== window && t.target !== window.document || e();
    }
  };
}
function qC({
  onWindowScroll: e
}) {
  function t() {
    e(_p());
  }
  const n = Qn(t), r = UC(n);
  let o = Nt;
  function i() {
    return o !== Nt;
  }
  function s() {
    i() && F(!1), o = Ye(window, [r]);
  }
  function a() {
    i() || F(!1), n.cancel(), o(), o = Nt;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const KC = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", YC = (e) => {
  const t = qC({
    onWindowScroll: (n) => {
      e.dispatch(AC({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && KC(r) && t.stop(), n(r);
  };
};
var XC = YC, JC = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, QC = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && F(!1);
    const [s] = e.splice(i, 1);
    s.callback();
  };
  return {
    add: (o) => {
      const i = setTimeout(() => t(i)), s = {
        timerId: i,
        callback: o
      };
      e.push(s);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((i) => {
        clearTimeout(i.timerId), i.callback();
      });
    }
  };
};
const ZC = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, eE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, tE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Mn = (e, t) => {
  t();
}, Rr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Bi(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = JC(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var nE = (e, t) => {
  const n = QC();
  let r = null;
  const o = (d, f) => {
    r && F(!1), Mn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && F(!1), Mn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Rr(d, f));
    });
  }, s = (d, f) => {
    r && F(!1);
    const p = Rr(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Mn("onDragStart", () => Bi(e().onDragStart, p, t, Mr.onDragStart));
    });
  }, a = (d, f) => {
    const p = Ua(f), m = ii(f);
    r || F(!1);
    const g = !tE(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !ZC(r.lastLocation, p);
    h && (r.lastLocation = p);
    const w = !eE(r.lastCombine, m);
    if (w && (r.lastCombine = m), !g && !h && !w)
      return;
    const S = {
      ...Rr(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Mn("onDragUpdate", () => Bi(e().onDragUpdate, S, t, Mr.onDragUpdate));
    });
  }, c = () => {
    r || F(!1), n.flush();
  }, l = (d) => {
    r || F(!1), r = null, Mn("onDragEnd", () => Bi(e().onDragEnd, d, t, Mr.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: a,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const d = {
        ...Rr(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, rE = (e, t) => {
  const n = nE(e, t);
  return (r) => (o) => (i) => {
    if (i.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(i.payload.draggableId, i.payload.movementMode);
      return;
    }
    if (i.type === "INITIAL_PUBLISH") {
      const a = i.payload.critical;
      n.beforeStart(a, i.payload.movementMode), o(i), n.start(a, i.payload.movementMode);
      return;
    }
    if (i.type === "DROP_COMPLETE") {
      const a = i.payload.completed.result;
      n.flush(), o(i), n.drop(a);
      return;
    }
    if (o(i), i.type === "FLUSH") {
      n.abort();
      return;
    }
    const s = r.getState();
    s.phase === "DRAGGING" && n.update(s.critical, s.impact);
  };
};
const oE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && F(!1), e.dispatch(Za({
    completed: r.completed
  }));
};
var iE = oE;
const sE = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (i) => {
    if ((i.type === "FLUSH" || i.type === "DROP_COMPLETE" || i.type === "DROP_ANIMATION_FINISHED") && r(), o(i), i.type !== "DROP_ANIMATE")
      return;
    const s = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Op());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Ye(window, [s]);
    });
  };
};
var aE = sE, cE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, lE = (e) => {
  let t = !1;
  return () => (n) => (r) => {
    if (r.type === "INITIAL_PUBLISH") {
      t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), e.tryRestoreFocusRecorded();
      return;
    }
    if (n(r), !!t) {
      if (r.type === "FLUSH") {
        t = !1, e.tryRestoreFocusRecorded();
        return;
      }
      if (r.type === "DROP_COMPLETE") {
        t = !1;
        const o = r.payload.completed.result;
        o.combine && e.tryShiftRecord(o.draggableId, o.combine.draggableId), e.tryRestoreFocusRecorded();
      }
    }
  };
};
const uE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var dE = (e) => (t) => (n) => (r) => {
  if (uE(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && F(!1), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const fE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Tp({
    reason: r.reason
  })));
};
var pE = fE;
const mE = Wf;
var gE = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => jf(wC, mE(qS(FC(n), cE(e), MC(e), HC, iE, aE, pE, dE(i), XC, lE(t), rE(r, o))));
const ji = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function hE({
  registry: e,
  callbacks: t
}) {
  let n = ji(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null;
      const {
        additions: c,
        removals: l,
        modified: u
      } = n, d = Object.keys(c).map((m) => e.draggable.getById(m).getDimension(fe)).sort((m, g) => m.descriptor.index - g.descriptor.index), f = Object.keys(u).map((m) => {
        const h = e.droppable.getById(m).callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: h
        };
      }), p = {
        additions: d,
        removals: Object.keys(l),
        modified: f
      };
      n = ji(), t.publish(p);
    }));
  };
  return {
    add: (c) => {
      const l = c.descriptor.id;
      n.additions[l] = c, n.modified[c.descriptor.droppableId] = !0, n.removals[l] && delete n.removals[l], o();
    },
    remove: (c) => {
      const l = c.descriptor;
      n.removals[l.id] = !0, n.modified[l.droppableId] = !0, n.additions[l.id] && delete n.additions[l.id], o();
    },
    stop: () => {
      r && (cancelAnimationFrame(r), r = null, n = ji());
    }
  };
}
var Lp = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = Be({
    x: t,
    y: e
  }, {
    x: r,
    y: n
  });
  return {
    x: Math.max(0, o.x),
    y: Math.max(0, o.y)
  };
}, kp = () => {
  const e = document.documentElement;
  return e || F(!1), e;
}, Mp = () => {
  const e = kp();
  return Lp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, bE = () => {
  const e = _p(), t = Mp(), n = e.y, r = e.x, o = kp(), i = o.clientWidth, s = o.clientHeight, a = r + i, c = n + s;
  return {
    frame: ct({
      top: n,
      left: r,
      right: a,
      bottom: c
    }),
    scroll: {
      initial: e,
      current: e,
      max: t,
      diff: {
        value: fe,
        displacement: fe
      }
    }
  };
}, yE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = bE(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: dp(a),
      droppables: up(s)
    },
    critical: e,
    viewport: r
  };
};
function eu(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var vE = (e, t) => {
  let n = null;
  const r = hE({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || F(!1), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || F(!1), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || F(!1), t.updateDroppableScroll({
      id: f,
      newScroll: p
    }));
  }, a = (f, p) => {
    n && e.droppable.getById(f).callbacks.scroll(p);
  }, c = () => {
    if (!n)
      return;
    r.stop();
    const f = n.critical.droppable;
    e.droppable.getAllByType(f.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, l = (f) => {
    n || F(!1);
    const p = n.critical.draggable;
    f.type === "ADDITION" && eu(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && eu(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (f) => {
      n && F(!1);
      const p = e.draggable.getById(f.draggableId), m = e.droppable.getById(p.descriptor.droppableId), g = {
        draggable: p.descriptor,
        droppable: m.descriptor
      }, h = e.subscribe(l);
      return n = {
        critical: g,
        unsubscribe: h
      }, yE({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Fp = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", wE = (e) => {
  window.scrollBy(e.x, e.y);
};
const SE = de((e) => oi(e).filter((t) => !(!t.isEnabled || !t.frame))), xE = (e, t) => SE(t).find((r) => (r.frame || F(!1), Sp(r.frame.pageMarginBox)(e))) || null;
var CE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return xE(e, n);
};
const rr = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: (e) => e ** 2,
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  },
  disabled: !1
};
var EE = (e, t, n = () => rr) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Bp = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, tc = 1, IE = (e, t, n = () => rr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return tc;
  const i = 1 - Bp({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, DE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return tc;
  const u = Bp({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, tu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = IE(e, t, o);
  return i === 0 ? 0 : r ? Math.max(DE(i, n, o), tc) : i;
}, nu = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = EE(e, r, i);
  return t[r.end] < t[r.start] ? tu({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * tu({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, PE = ({
  container: e,
  subject: t,
  proposedScroll: n
}) => {
  const r = t.height > e.height, o = t.width > e.width;
  return !o && !r ? n : o && r ? null : {
    x: o ? 0 : n.x,
    y: r ? 0 : n.y
  };
};
const RE = lp((e) => e === 0 ? 0 : e);
var jp = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, a = nu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: qa,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = nu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: mp,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = RE({
    x: c,
    y: a
  });
  if ($t(l, fe))
    return null;
  const u = PE({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? $t(u, fe) ? null : u : null;
};
const AE = lp((e) => e === 0 ? 0 : e > 0 ? 1 : -1), nc = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = he(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return $t(i, fe) ? null : i;
  };
})(), Wp = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = AE(n), i = nc({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, rc = (e, t) => Wp({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), TE = (e, t) => {
  if (!rc(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return nc({
    current: r,
    max: n,
    change: t
  });
}, oc = (e, t) => {
  const n = e.frame;
  return n ? Wp({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, OE = (e, t) => {
  const n = e.frame;
  return !n || !oc(e, t) ? null : nc({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var NE = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = jp({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && rc(e, s) ? s : null;
}, $E = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.frame;
  if (!s)
    return null;
  const a = jp({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && oc(e, a) ? a : null;
}, ru = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = NE({
      dragStartTime: t,
      viewport: d,
      subject: c,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (f) {
      r(f);
      return;
    }
  }
  const l = CE({
    center: s,
    destination: We(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = $E({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(l.descriptor.id, u);
}, _E = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => rr
}) => {
  const r = Qn(e), o = Qn(t);
  let i = null;
  const s = (l) => {
    i || F(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    ru({
      state: l,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: d,
      shouldUseTimeDampening: u,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (l) => {
      i && F(!1);
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      ru({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: u,
        shouldUseTimeDampening: d
      }, d && s(l);
    },
    stop: () => {
      i && (r.cancel(), o.cancel(), i = null);
    },
    scroll: s
  };
}, LE = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, c) => {
    const l = he(a.current.client.selection, c);
    e({
      client: l
    });
  }, o = (a, c) => {
    if (!oc(a, c))
      return c;
    const l = OE(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = Be(c, l);
    return t(a.descriptor.id, u), Be(c, u);
  }, i = (a, c, l) => {
    if (!a || !rc(c, l))
      return l;
    const u = TE(c, l);
    if (!u)
      return n(l), null;
    const d = Be(l, u);
    return n(d), Be(l, d);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = We(a.impact);
    l || F(!1);
    const u = o(a.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, kE = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = _E({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = LE({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (c) => {
      if (!(r().disabled || c.phase !== "DRAGGING")) {
        if (c.movementMode === "FLUID") {
          o.scroll(c);
          return;
        }
        c.scrollJumpRequest && i(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const In = "data-rfd", Dn = (() => {
  const e = `${In}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), hs = (() => {
  const e = `${In}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ME = (() => {
  const e = `${In}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ou = {
  contextId: `${In}-scroll-container-context-id`
}, FE = (e) => (t) => `[${t}="${e}"]`, Fn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), BE = "pointer-events: none;";
var jE = (e) => {
  const t = FE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Dn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: BE,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${zn.outOfTheWay};
    `;
    return {
      selector: t(hs.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(ME.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, s = [r, n, o, {
    selector: "body",
    styles: {
      dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `
    }
  }];
  return {
    always: Fn(s, "always"),
    resting: Fn(s, "resting"),
    dragging: Fn(s, "dragging"),
    dropAnimating: Fn(s, "dropAnimating"),
    userCancel: Fn(s, "userCancel")
  };
};
const WE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? uo : V;
var ze = WE;
const Wi = () => {
  const e = document.querySelector("head");
  return e || F(!1), e;
}, iu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function zE(e, t) {
  const n = K(() => jE(e), [e]), r = W(null), o = W(null), i = z(de((d) => {
    const f = o.current;
    f || F(!1), f.textContent = d;
  }), []), s = z((d) => {
    const f = r.current;
    f || F(!1), f.textContent = d;
  }, []);
  ze(() => {
    !r.current && !o.current || F(!1);
    const d = iu(t), f = iu(t);
    return r.current = d, o.current = f, d.setAttribute(`${In}-always`, e), f.setAttribute(`${In}-dynamic`, e), Wi().appendChild(d), Wi().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || F(!1), Wi().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = z(() => i(n.dragging), [i, n.dragging]), c = z((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = z(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return K(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function zp(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Vp = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function ci(e) {
  return e instanceof Vp(e).HTMLElement;
}
function VE(e, t) {
  const n = `[${Dn.contextId}="${e}"]`, r = zp(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(Dn.draggableId) === t);
  return !o || !ci(o) ? null : o;
}
function GE(e) {
  const t = W({}), n = W(null), r = W(null), o = W(!1), i = z(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), s = z(function(f) {
    const p = VE(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = z(function(f, p) {
    n.current === f && (n.current = p);
  }, []), c = z(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), l = z(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Dn.draggableId) === f && (n.current = f);
  }, []);
  return ze(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), K(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [i, l, c, a]);
}
function HE() {
  const e = {
    draggables: {},
    droppables: {}
  }, t = [];
  function n(d) {
    return t.push(d), function() {
      const p = t.indexOf(d);
      p !== -1 && t.splice(p, 1);
    };
  }
  function r(d) {
    t.length && t.forEach((f) => f(d));
  }
  function o(d) {
    return e.draggables[d] || null;
  }
  function i(d) {
    const f = o(d);
    return f || F(!1), f;
  }
  const s = {
    register: (d) => {
      e.draggables[d.descriptor.id] = d, r({
        type: "ADDITION",
        value: d
      });
    },
    update: (d, f) => {
      const p = e.draggables[f.descriptor.id];
      p && p.uniqueId === d.uniqueId && (delete e.draggables[f.descriptor.id], e.draggables[d.descriptor.id] = d);
    },
    unregister: (d) => {
      const f = d.descriptor.id, p = o(f);
      p && d.uniqueId === p.uniqueId && (delete e.draggables[f], e.droppables[d.descriptor.droppableId] && r({
        type: "REMOVAL",
        value: d
      }));
    },
    getById: i,
    findById: o,
    exists: (d) => !!o(d),
    getAllByType: (d) => Object.values(e.draggables).filter((f) => f.descriptor.type === d)
  };
  function a(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    const f = a(d);
    return f || F(!1), f;
  }
  const l = {
    register: (d) => {
      e.droppables[d.descriptor.id] = d;
    },
    unregister: (d) => {
      const f = a(d.descriptor.id);
      f && d.uniqueId === f.uniqueId && delete e.droppables[d.descriptor.id];
    },
    getById: c,
    findById: a,
    exists: (d) => !!a(d),
    getAllByType: (d) => Object.values(e.droppables).filter((f) => f.descriptor.type === d)
  };
  function u() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: l,
    subscribe: n,
    clean: u
  };
}
function UE() {
  const e = K(HE, []);
  return V(() => function() {
    v.version.startsWith("16") || v.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var ic = v.createContext(null), co = () => {
  const e = document.body;
  return e || F(!1), e;
};
const qE = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var KE = qE;
const YE = (e) => `rfd-announcement-${e}`;
function XE(e) {
  const t = K(() => YE(e), [e]), n = W(null);
  return V(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ot(i.style, KE), co().appendChild(i), function() {
      setTimeout(function() {
        const c = co();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), z((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
  }, []);
}
let JE = 0;
const Gp = {
  separator: "::"
};
function QE(e, t = Gp) {
  return K(() => `${e}${t.separator}${JE++}`, [t.separator, e]);
}
function ZE(e, t = Gp) {
  const n = v.useId();
  return K(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var sc = "useId" in v ? ZE : QE;
function eI({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function tI({
  contextId: e,
  text: t
}) {
  const n = sc("hidden-text", {
    separator: "-"
  }), r = K(() => eI({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return V(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", co().appendChild(i), function() {
      const a = co();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var li = v.createContext(null);
function Hp(e) {
  const t = W(e);
  return V(() => {
    t.current = e;
  }), t;
}
function nI() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && F(!1);
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || F(!1), e = null;
  }
  function i() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: i
  };
}
function or(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const rI = 9, oI = 13, ac = 27, Up = 32, iI = 33, sI = 34, aI = 35, cI = 36, lI = 37, uI = 38, dI = 39, fI = 40, pI = {
  [oI]: !0,
  [rI]: !0
};
var qp = (e) => {
  pI[e.keyCode] && e.preventDefault();
};
const mI = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var ui = mI;
const Kp = 0, su = 5;
function gI(e, t) {
  return Math.abs(t.x - e.x) >= su || Math.abs(t.y - e.y) >= su;
}
const au = {
  type: "IDLE"
};
function hI({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: i,
        clientX: s,
        clientY: a
      } = o;
      if (i !== Kp)
        return;
      const c = {
        x: s,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && F(!1);
      const u = l.point;
      if (!gI(u, c))
        return;
      o.preventDefault();
      const d = l.actions.fluidLift(c);
      r({
        type: "DRAGGING",
        actions: d
      });
    }
  }, {
    eventName: "mouseup",
    fn: (o) => {
      const i = n();
      if (i.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), i.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "mousedown",
    fn: (o) => {
      n().type === "DRAGGING" && o.preventDefault(), e();
    }
  }, {
    eventName: "keydown",
    fn: (o) => {
      if (n().type === "PENDING") {
        e();
        return;
      }
      if (o.keyCode === ac) {
        o.preventDefault(), e();
        return;
      }
      qp(o);
    }
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "scroll",
    options: {
      passive: !0,
      capture: !1
    },
    fn: () => {
      n().type === "PENDING" && e();
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: (o) => {
      const i = n();
      if (i.type === "IDLE" && F(!1), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function bI(e) {
  const t = W(au), n = W(Nt), r = K(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== Kp || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
        return;
      const f = e.findClosestDraggableId(d);
      if (!f)
        return;
      const p = e.tryGetLock(f, s, {
        sourceEvent: d
      });
      if (!p)
        return;
      d.preventDefault();
      const m = {
        x: d.clientX,
        y: d.clientY
      };
      n.current(), l(p, m);
    }
  }), [e]), o = K(() => ({
    eventName: "webkitmouseforcewillbegin",
    fn: (u) => {
      if (u.defaultPrevented)
        return;
      const d = e.findClosestDraggableId(u);
      if (!d)
        return;
      const f = e.findOptionsForDraggable(d);
      f && (f.shouldRespectForcePress || e.canGetLock(d) && u.preventDefault());
    }
  }), [e]), i = z(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = Ye(window, [o, r], d);
  }, [o, r]), s = z(() => {
    t.current.type !== "IDLE" && (t.current = au, n.current(), i());
  }, [i]), a = z(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), c = z(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = hI({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = Ye(window, f, d);
  }, [a, s]), l = z(function(d, f) {
    t.current.type !== "IDLE" && F(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, c();
  }, [c]);
  ze(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function yI() {
}
const vI = {
  [sI]: !0,
  [iI]: !0,
  [cI]: !0,
  [aI]: !0
};
function wI(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ac) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Up) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === fI) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === uI) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === dI) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === lI) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (vI[o.keyCode]) {
        o.preventDefault();
        return;
      }
      qp(o);
    }
  }, {
    eventName: "mousedown",
    fn: n
  }, {
    eventName: "mouseup",
    fn: n
  }, {
    eventName: "click",
    fn: n
  }, {
    eventName: "touchstart",
    fn: n
  }, {
    eventName: "resize",
    fn: n
  }, {
    eventName: "wheel",
    fn: n,
    options: {
      passive: !0
    }
  }, {
    eventName: ui,
    fn: n
  }];
}
function SI(e) {
  const t = W(yI), n = K(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Up)
        return;
      const s = e.findClosestDraggableId(i);
      if (!s)
        return;
      const a = e.tryGetLock(s, u, {
        sourceEvent: i
      });
      if (!a)
        return;
      i.preventDefault();
      let c = !0;
      const l = a.snapLift();
      t.current();
      function u() {
        c || F(!1), c = !1, t.current(), r();
      }
      t.current = Ye(window, wI(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = z(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Ye(window, [n], i);
  }, [n]);
  ze(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const zi = {
  type: "IDLE"
}, xI = 120, CI = 0.15;
function EI({
  cancel: e,
  getPhase: t
}) {
  return [{
    eventName: "orientationchange",
    fn: e
  }, {
    eventName: "resize",
    fn: e
  }, {
    eventName: "contextmenu",
    fn: (n) => {
      n.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: (n) => {
      if (t().type !== "DRAGGING") {
        e();
        return;
      }
      n.keyCode === ac && n.preventDefault(), e();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function II({
  cancel: e,
  completed: t,
  getPhase: n
}) {
  return [{
    eventName: "touchmove",
    options: {
      capture: !1
    },
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      o.hasMoved = !0;
      const {
        clientX: i,
        clientY: s
      } = r.touches[0], a = {
        x: i,
        y: s
      };
      r.preventDefault(), o.actions.move(a);
    }
  }, {
    eventName: "touchend",
    fn: (r) => {
      const o = n();
      if (o.type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), o.actions.drop({
        shouldBlockNextClick: !0
      }), t();
    }
  }, {
    eventName: "touchcancel",
    fn: (r) => {
      if (n().type !== "DRAGGING") {
        e();
        return;
      }
      r.preventDefault(), e();
    }
  }, {
    eventName: "touchforcechange",
    fn: (r) => {
      const o = n();
      o.type === "IDLE" && F(!1);
      const i = r.touches[0];
      if (!i || !(i.force >= CI))
        return;
      const a = o.actions.shouldRespectForcePress();
      if (o.type === "PENDING") {
        a && e();
        return;
      }
      if (a) {
        if (o.hasMoved) {
          r.preventDefault();
          return;
        }
        e();
        return;
      }
      r.preventDefault();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function DI(e) {
  const t = W(zi), n = W(Nt), r = z(function() {
    return t.current;
  }, []), o = z(function(p) {
    t.current = p;
  }, []), i = K(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const m = e.findClosestDraggableId(p);
      if (!m)
        return;
      const g = e.tryGetLock(m, a, {
        sourceEvent: p
      });
      if (!g)
        return;
      const h = p.touches[0], {
        clientX: w,
        clientY: S
      } = h, b = {
        x: w,
        y: S
      };
      n.current(), d(g, b);
    }
  }), [e]), s = z(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = Ye(window, [i], p);
  }, [i]), a = z(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(zi), n.current(), s());
  }, [s, o]), c = z(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = z(function() {
    const p = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: c,
      completed: a,
      getPhase: r
    }, g = Ye(window, II(m), p), h = Ye(window, EI(m), p);
    n.current = function() {
      g(), h();
    };
  }, [c, r, a]), u = z(function() {
    const p = r();
    p.type !== "PENDING" && F(!1);
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = z(function(p, m) {
    r().type !== "IDLE" && F(!1);
    const g = setTimeout(u, xI);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), l();
  }, [l, r, o, u]);
  ze(function() {
    return s(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(zi));
    };
  }, [r, s, o]), ze(function() {
    return Ye(window, [{
      eventName: "touchmove",
      fn: () => {
      },
      options: {
        capture: !1,
        passive: !1
      }
    }]);
  }, []);
}
const PI = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Yp(e, t) {
  if (t == null)
    return !1;
  if (PI.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Yp(e, t.parentElement);
}
function RI(e, t) {
  const n = t.target;
  return ci(n) ? Yp(e, n) : !1;
}
var AI = (e) => ct(e.getBoundingClientRect()).center;
function TI(e) {
  return e instanceof Vp(e).Element;
}
const OI = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Xp(e, t) {
  return e == null ? null : e[OI](t) ? e : Xp(e.parentElement, t);
}
function NI(e, t) {
  return e.closest ? e.closest(t) : Xp(e, t);
}
function $I(e) {
  return `[${Dn.contextId}="${e}"]`;
}
function _I(e, t) {
  const n = t.target;
  if (!TI(n))
    return null;
  const r = $I(e), o = NI(n, r);
  return !o || !ci(o) ? null : o;
}
function LI(e, t) {
  const n = _I(e, t);
  return n ? n.getAttribute(Dn.draggableId) : null;
}
function kI(e, t) {
  const n = `[${hs.contextId}="${e}"]`, o = zp(document, n).find((i) => i.getAttribute(hs.id) === t);
  return !o || !ci(o) ? null : o;
}
function MI(e) {
  e.preventDefault();
}
function Ar({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return !(!n() || e !== t);
}
function Jp({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !Fp(t.getState(), r));
}
function FI({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!Jp({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = kI(t, c.descriptor.id);
  if (!l || s && !c.options.canDragInteractiveElements && RI(l, s))
    return null;
  const u = e.claim(i || Nt);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(x, C) {
    Ar({
      expected: x,
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(C());
  }
  const g = m.bind(null, "DRAGGING");
  function h(x) {
    function C() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (C(), F(!1)), n.dispatch(xC(x.liftActionArgs)), d = "DRAGGING";
    function I(E, T = {
      shouldBlockNextClick: !1
    }) {
      if (x.cleanup(), T.shouldBlockNextClick) {
        const $ = Ye(window, [{
          eventName: "click",
          fn: MI,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      C(), n.dispatch(Tp({
        reason: E
      }));
    }
    return {
      isActive: () => Ar({
        expected: "DRAGGING",
        phase: d,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (E) => I("DROP", E),
      cancel: (E) => I("CANCEL", E),
      ...x.actions
    };
  }
  function w(x) {
    const C = Qn((E) => {
      g(() => Ap({
        client: E
      }));
    });
    return {
      ...h({
        liftActionArgs: {
          id: o,
          clientSelection: x,
          movementMode: "FLUID"
        },
        cleanup: () => C.cancel(),
        actions: {
          move: C
        }
      }),
      move: C
    };
  }
  function S() {
    const x = {
      moveUp: () => g(OC),
      moveRight: () => g($C),
      moveDown: () => g(NC),
      moveLeft: () => g(_C)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: AI(l),
        movementMode: "SNAP"
      },
      cleanup: Nt,
      actions: x
    });
  }
  function b() {
    Ar({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Ar({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: w,
    snapLift: S,
    abort: b
  };
}
const BI = [bI, SI, DI];
function jI({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? BI : [], ...r || []], s = U(() => nI())[0], a = z(function(h, w) {
    or(h) && !or(w) && s.tryAbandon();
  }, [s]);
  ze(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const S = t.getState();
      a(h, S), h = S;
    });
  }, [s, t, a]), ze(() => s.tryAbandon, [s.tryAbandon]);
  const c = z((g) => Jp({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), l = z((g, h, w) => FI({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, s, n, t]), u = z((g) => LI(e, g), [e]), d = z((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = z(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Qa()));
  }, [s, t]), p = z(() => s.isClaimed(), [s]), m = K(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [c, l, u, d, f, p]);
  for (let g = 0; g < i.length; g++)
    i[g](m);
}
const WI = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    v.version.startsWith("16") || v.version.startsWith("17") ? n() : ys(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), zI = (e) => ({
  ...rr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...rr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Bn(e) {
  return e.current || F(!1), e.current;
}
function VI(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = W(null), a = Hp(e), c = z(() => WI(a.current), [a]), l = z(() => zI(a.current), [a]), u = XE(t), d = tI({
    contextId: t,
    text: i
  }), f = zE(t, o), p = z(($) => {
    Bn(s).dispatch($);
  }, []), m = K(() => Ol({
    publishWhileDragging: EC,
    updateDroppableScroll: DC,
    updateDroppableIsEnabled: PC,
    updateDroppableIsCombineEnabled: RC,
    collectionStarting: IC
  }, p), [p]), g = UE(), h = K(() => vE(g, m), [g, m]), w = K(() => kE({
    scrollWindow: wE,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Ol({
      move: Ap
    }, p)
  }), [h.scrollDroppable, p, l]), S = GE(t), b = K(() => gE({
    announce: u,
    autoScroller: w,
    dimensionMarshal: h,
    focusMarshal: S,
    getResponders: c,
    styleMarshal: f
  }), [u, w, h, S, c, f]);
  s.current = b;
  const y = z(() => {
    const $ = Bn(s);
    $.getState().phase !== "IDLE" && $.dispatch(Qa());
  }, []), x = z(() => {
    const $ = Bn(s).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = K(() => ({
    isDragging: x,
    tryAbort: y
  }), [x, y]);
  n(C);
  const I = z(($) => Fp(Bn(s).getState(), $), []), E = z(() => Qt(Bn(s).getState()), []), T = K(() => ({
    marshal: h,
    focus: S,
    contextId: t,
    canLift: I,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, S, I, E, g]);
  return jI({
    contextId: t,
    store: b,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), V(() => y, [y]), v.createElement(li.Provider, {
    value: T
  }, v.createElement(Q1, {
    context: ic,
    store: b
  }, e.children));
}
let GI = 0;
function HI() {
  return K(() => `${GI++}`, []);
}
function UI() {
  return v.useId();
}
var qI = "useId" in v ? UI : HI;
function KI(e) {
  const t = qI(), n = e.dragHandleUsageInstructions || Mr.dragHandleUsageInstructions;
  return v.createElement(ux, null, (r) => v.createElement(VI, {
    nonce: e.nonce,
    contextId: t,
    setCallbacks: r,
    dragHandleUsageInstructions: n,
    enableDefaultSensors: e.enableDefaultSensors,
    sensors: e.sensors,
    onBeforeCapture: e.onBeforeCapture,
    onBeforeDragStart: e.onBeforeDragStart,
    onDragStart: e.onDragStart,
    onDragUpdate: e.onDragUpdate,
    onDragEnd: e.onDragEnd,
    autoScrollerOptions: e.autoScrollerOptions
  }, e.children));
}
const cu = {
  dragging: 5e3,
  dropAnimating: 4500
}, YI = (e, t) => t ? zn.drop(t.duration) : e ? zn.snap : zn.fluid, XI = (e, t) => {
  if (e)
    return t ? nr.opacity.drop : nr.opacity.combining;
}, JI = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function QI(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = JI(e), c = !!i, l = c ? ms.drop(r, s) : ms.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: YI(a, i),
    transform: l,
    opacity: XI(s, c),
    zIndex: c ? cu.dropAnimating : cu.dragging,
    pointerEvents: "none"
  };
}
function ZI(e) {
  return {
    transform: ms.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function eD(e) {
  return e.type === "DRAGGING" ? QI(e) : ZI(e);
}
function tD(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = op(o, r), s = oo(i, n), a = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, c = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: c,
    client: i,
    page: s
  };
}
function nD(e) {
  const t = sc("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, c = K(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), l = z((p) => {
    const m = o();
    return m || F(!1), tD(n, m, p);
  }, [n, o]), u = K(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = W(u), f = W(!0);
  ze(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), ze(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var cc = v.createContext(null);
function lo(e) {
  const t = bt(e);
  return t || F(!1), t;
}
function rD(e) {
  e.preventDefault();
}
const oD = (e) => {
  const t = W(null), n = z((C = null) => {
    t.current = C;
  }, []), r = z(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = lo(li), {
    type: a,
    droppableId: c
  } = lo(cc), l = K(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: c
  }), [e.draggableId, e.index, a, c]), {
    children: u,
    draggableId: d,
    isEnabled: f,
    shouldRespectForcePress: p,
    canDragInteractiveElements: m,
    isClone: g,
    mapped: h,
    dropAnimationFinished: w
  } = e;
  if (!g) {
    const C = K(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, s, r, m, p, f]);
    nD(C);
  }
  const S = K(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: rD
  } : null, [o, i, d, f]), b = z((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (v.version.startsWith("16") || v.version.startsWith("17") ? w() : ys(w));
  }, [w, h]), y = K(() => {
    const C = eD(h), I = h.type === "DRAGGING" && h.dropping ? b : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: C,
        onTransitionEnd: I
      },
      dragHandleProps: S
    };
  }, [o, S, d, h, b, n]), x = K(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return v.createElement(v.Fragment, null, u(y, h.snapshot, x));
};
var iD = oD, Qp = (e, t) => e === t, Zp = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const sD = (e) => e.combine ? e.combine.draggableId : null, aD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function cD() {
  const e = de((o, i) => ({
    x: o,
    y: i
  })), t = de((o, i, s = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), n = de((o, i, s, a, c = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: u,
      snapshot: t(i, a, c, l, null)
    }
  }));
  return (o, i) => {
    if (or(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = We(o.impact), l = aD(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, u = l.mode, d = Zp(l), f = sD(l), m = {
        duration: o.dropDuration,
        curve: ec.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? nr.opacity.drop : null,
        scale: f ? nr.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: c,
          dropping: m,
          draggingOver: d,
          combineWith: f,
          mode: u,
          forceShouldAnimate: null,
          snapshot: t(u, a, d, f, m)
        }
      };
    }
    return null;
  };
}
function em(e = null) {
  return {
    isDragging: !1,
    isDropAnimating: !1,
    isClone: !1,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: e,
    combineWith: null
  };
}
const lD = {
  mapped: {
    type: "SECONDARY",
    offset: fe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: em(null)
  }
};
function uD() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(em), n = de((s, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(fe, s, !0) : null, o = (s, a, c, l) => {
    const u = c.displaced.visible[s], d = !!(l.inVirtualList && l.effected[s]), f = ii(c), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (c.displaced.invisible[s])
        return null;
      const h = An(l.displacedBy.point), w = e(h.x, h.y);
      return n(w, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (or(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const dD = () => {
  const e = cD(), t = uD();
  return (r, o) => e(r, o) || t(r, o) || lD;
}, fD = {
  dropAnimationFinished: Op
}, pD = np(dD, fD, null, {
  context: ic,
  areStatePropsEqual: Qp
})(iD);
var mD = pD;
function tm(e) {
  return lo(cc).isUsingCloneFor === e.draggableId && !e.isClone ? null : v.createElement(mD, e);
}
function gD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return v.createElement(tm, Ot({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const nm = (e) => (t) => e === t, hD = nm("scroll"), bD = nm("auto"), lu = (e, t) => t(e.overflowX) || t(e.overflowY), yD = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return lu(n, hD) || lu(n, bD);
}, vD = () => !1, rm = (e) => e == null ? null : e === document.body ? vD() ? e : null : e === document.documentElement ? null : yD(e) ? e : rm(e.parentElement);
var wD = rm, bs = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const om = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : om(e.parentElement) : !1;
var SD = (e) => {
  const t = wD(e), n = om(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, xD = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: s,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: f,
      client: p
    } = a, m = Lp({
      scrollHeight: f.scrollHeight,
      scrollWidth: f.scrollWidth,
      height: p.paddingBox.height,
      width: p.paddingBox.width
    });
    return {
      pageMarginBox: a.page.marginBox,
      frameClient: p,
      scrollSize: f,
      shouldClipSubject: a.shouldClipSubject,
      scroll: {
        initial: a.scroll,
        current: a.scroll,
        max: m,
        diff: {
          value: fe,
          displacement: fe
        }
      }
    };
  })(), l = o === "vertical" ? qa : mp, u = En({
    page: s,
    withPlaceholder: null,
    axis: l,
    frame: c
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: l,
    isEnabled: t,
    client: i,
    page: s,
    frame: c,
    subject: u
  };
};
const CD = (e, t) => {
  const n = ip(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = Va({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Ga({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var ED = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = CD(e, c), u = oo(l, r), d = (() => {
    if (!c)
      return null;
    const p = ip(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: oo(p, r),
      scroll: bs(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return xD({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: u,
    closest: d
  });
};
const ID = {
  passive: !1
}, DD = {
  passive: !0
};
var uu = (e) => e.shouldPublishImmediately ? ID : DD;
const Tr = (e) => e && e.env.closestScrollable || null;
function PD(e) {
  const t = W(null), n = lo(li), r = sc("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Hp(e), a = K(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = W(a), l = K(() => de((y, x) => {
    t.current || F(!1);
    const C = {
      x: y,
      y: x
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = z(() => {
    const y = t.current;
    return !y || !y.env.closestScrollable ? fe : bs(y.env.closestScrollable);
  }, []), d = z(() => {
    const y = u();
    l(y.x, y.y);
  }, [u, l]), f = K(() => Qn(d), [d]), p = z(() => {
    const y = t.current, x = Tr(y);
    if (y && x || F(!1), y.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = z((y, x) => {
    t.current && F(!1);
    const C = s.current, I = C.getDroppableRef();
    I || F(!1);
    const E = SD(I), T = {
      ref: I,
      descriptor: a,
      env: E,
      scrollOptions: x
    };
    t.current = T;
    const $ = ED({
      ref: I,
      descriptor: a,
      env: E,
      windowScroll: y,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), N = E.closestScrollable;
    return N && (N.setAttribute(ou.contextId, n.contextId), N.addEventListener("scroll", p, uu(T.scrollOptions))), $;
  }, [n.contextId, a, p, s]), g = z(() => {
    const y = t.current, x = Tr(y);
    return y && x || F(!1), bs(x);
  }, []), h = z(() => {
    const y = t.current;
    y || F(!1);
    const x = Tr(y);
    t.current = null, x && (f.cancel(), x.removeAttribute(ou.contextId), x.removeEventListener("scroll", p, uu(y.scrollOptions)));
  }, [p, f]), w = z((y) => {
    const x = t.current;
    x || F(!1);
    const C = Tr(x);
    C || F(!1), C.scrollTop += y.y, C.scrollLeft += y.x;
  }, []), S = K(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: w
  }), [h, m, g, w]), b = K(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: S
  }), [S, a, r]);
  ze(() => (c.current = b.descriptor, o.droppable.register(b), () => {
    t.current && h(), o.droppable.unregister(b);
  }), [S, a, h, b, i, o.droppable]), ze(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ze(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Vi() {
}
const du = {
  width: 0,
  height: 0,
  margin: bx
}, RD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? du : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, AD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = RD({
    isAnimatingOpenOnMount: e,
    placeholder: t,
    animate: n
  });
  return {
    display: t.display,
    boxSizing: "border-box",
    width: r.width,
    height: r.height,
    marginTop: r.margin.top,
    marginRight: r.margin.right,
    marginBottom: r.margin.bottom,
    marginLeft: r.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: n !== "none" ? zn.placeholder : null
  };
}, TD = (e) => {
  const t = W(null), n = z(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = U(e.animate === "open");
  V(() => a ? r !== "open" ? (n(), c(!1), Vi) : t.current ? Vi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Vi, [r, a, n]);
  const l = z((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = AD({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return v.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var OD = v.memo(TD);
class ND extends v.PureComponent {
  constructor(...t) {
    super(...t), this.state = {
      isVisible: !!this.props.on,
      data: this.props.on,
      animate: this.props.shouldAnimate && this.props.on ? "open" : "none"
    }, this.onClose = () => {
      this.state.animate === "close" && this.setState({
        isVisible: !1
      });
    };
  }
  static getDerivedStateFromProps(t, n) {
    return t.shouldAnimate ? t.on ? {
      isVisible: !0,
      data: t.on,
      animate: "open"
    } : n.isVisible ? {
      isVisible: !0,
      data: n.data,
      animate: "close"
    } : {
      isVisible: !1,
      animate: "close",
      data: null
    } : {
      isVisible: !!t.on,
      data: t.on,
      animate: "none"
    };
  }
  render() {
    if (!this.state.isVisible)
      return null;
    const t = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(t);
  }
}
const $D = (e) => {
  const t = bt(li);
  t || F(!1);
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = W(null), i = W(null), {
    children: s,
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    ignoreContainerClipping: d,
    isDropDisabled: f,
    isCombineEnabled: p,
    snapshot: m,
    useClone: g,
    updateViewportMaxScroll: h,
    getContainerForClone: w
  } = e, S = z(() => o.current, []), b = z((N = null) => {
    o.current = N;
  }, []);
  z(() => i.current, []);
  const y = z((N = null) => {
    i.current = N;
  }, []), x = z(() => {
    r() && h({
      maxScroll: Mp()
    });
  }, [r, h]);
  PD({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: S
  });
  const C = K(() => v.createElement(ND, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: N,
    data: L,
    animate: k
  }) => v.createElement(OD, {
    placeholder: L,
    onClose: N,
    innerRef: y,
    animate: k,
    contextId: n,
    onTransitionEnd: x
  })), [n, x, e.placeholder, e.shouldAnimatePlaceholder, y]), I = K(() => ({
    innerRef: b,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, b]), E = g ? g.dragging.draggableId : null, T = K(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: E
  }), [a, E, c]);
  function $() {
    if (!g)
      return null;
    const {
      dragging: N,
      render: L
    } = g, k = v.createElement(tm, {
      draggableId: N.draggableId,
      index: N.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (A, _) => L(A, _, N));
    return hu.createPortal(k, w());
  }
  return v.createElement(cc.Provider, {
    value: T
  }, s(I, m), $());
};
var _D = $D;
function LD() {
  return document.body || F(!1), document.body;
}
const fu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: LD
}, im = (e) => {
  let t = {
    ...e
  }, n;
  for (n in fu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: fu[n]
    });
  return t;
}, Gi = (e, t) => e === t.droppable.type, pu = (e, t) => t.draggables[e.draggable.id], kD = () => {
  const e = {
    placeholder: null,
    shouldAnimatePlaceholder: !0,
    snapshot: {
      isDraggingOver: !1,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: !1
    },
    useClone: null
  }, t = {
    ...e,
    shouldAnimatePlaceholder: !1
  }, n = de((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = de((i, s, a, c, l, u) => {
    const d = l.descriptor.id;
    if (l.descriptor.droppableId === i) {
      const m = u ? {
        render: u,
        dragging: n(l.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? d : null,
        draggingFromThisWith: d,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: l.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: m
      };
    }
    if (!s)
      return t;
    if (!c)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: d,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: l.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, s) => {
    const a = im(s), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (or(i)) {
      const f = i.critical;
      if (!Gi(l, f))
        return t;
      const p = pu(f, i.dimensions), m = We(i.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Gi(l, f.critical))
        return t;
      const p = pu(f.critical, i.dimensions);
      return r(c, u, Zp(f.result) === c, We(f.impact) === c, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Gi(l, f.critical))
        return t;
      const p = We(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, MD = {
  updateViewportMaxScroll: TC
}, FD = np(kD, MD, (e, t, n) => ({
  ...im(n),
  ...e,
  ...t
}), {
  context: ic,
  areStatePropsEqual: Qp
})(_D);
var BD = FD;
function sm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = sm(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function jD() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = sm(e)) && (r && (r += " "), r += t);
  return r;
}
const WD = "_item_1o9ja_1", zD = "_itemDragging_1o9ja_12", VD = "_symbol_1o9ja_16", GD = "_dragHandle_1o9ja_22", Or = {
  item: WD,
  itemDragging: zD,
  symbol: VD,
  dragHandle: GD
};
function HD({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = zt(), i = $e(Df), s = (c) => {
    if (!t || !c.destination)
      return;
    const l = Array.from(i), [u] = l.splice(c.source.index, 1);
    l.splice(c.destination.index, 0, u), n({ ...t, filterDictionaries: l }), r(!0);
  }, a = i.map((c, l) => /* @__PURE__ */ M.jsx(gD, { index: l, draggableId: c.ifcClassification.location, children: (u, d) => /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: jD(Or.item, { [Or.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ M.jsx("div", { ...u.dragHandleProps, className: Or.dragHandle, children: /* @__PURE__ */ M.jsx(OS, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ M.jsx(Je, { className: Or.uri, children: c.ifcClassification.location })
      ]
    }
  ) }, c.ifcClassification.location));
  return /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx(Rn, { order: 5, children: o("Sort filter dictionaries") }),
      /* @__PURE__ */ M.jsx(Je, { size: "xs", c: "dimmed", children: o("Sort filter dictionaries help text") })
    ] }),
    /* @__PURE__ */ M.jsx(oe.Panel, { children: /* @__PURE__ */ M.jsx(KI, { onDragEnd: s, children: /* @__PURE__ */ M.jsx(BD, { droppableId: "dnd-list", direction: "vertical", children: (c) => /* @__PURE__ */ M.jsxs("div", { ...c.droppableProps, ref: c.innerRef, children: [
      a,
      c.placeholder
    ] }) }) }) })
  ] }, e);
}
function mu(e, t) {
  const n = t.find((r) => r.ifcClassification.location === e.uri);
  return n || {
    ifcClassification: $a(e),
    parameterMapping: ""
  };
}
function UD({ id: e, settings: t, setSettings: n, setUnsavedChanges: r, setIsLoading: o }) {
  var m;
  const { t: i } = zt(), s = $e(cS), a = $e(_a), [c, l] = U([]), [u, d] = U([]);
  V(() => {
    l(
      Object.values(s).map((g) => ({ value: g.uri, label: `${g.name} (${g.version})` }))
    );
  }, [s, l]), V(() => {
    t && d(
      t.filterDictionaries.map((g) => ({
        value: g.ifcClassification.location || "",
        label: g.ifcClassification.location || ""
      }))
    );
  }, [t == null ? void 0 : t.filterDictionaries, d]), V(() => {
    c.length == 0 || !a || o(!1);
  }, [c, a]);
  const f = (g) => {
    const h = Object.values(s).find(
      (S) => S.uri === g
    );
    if (!h || !t)
      return;
    const w = [];
    t.mainDictionary && w.push(t.mainDictionary), n({ ...t, mainDictionary: mu(h, w) }), r(!0);
  }, p = (g) => {
    if (t) {
      const h = Object.values(s).filter((w) => g.includes(w.uri)).map((w) => mu(w, t.filterDictionaries));
      n({ ...t, filterDictionaries: h }), r(!0);
    }
  };
  return /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx(Rn, { order: 5, children: i("Dictionary selection") }),
      /* @__PURE__ */ M.jsx(Je, { size: "xs", c: "dimmed", children: i("Dictionary selection help text") })
    ] }),
    /* @__PURE__ */ M.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ M.jsx(
        mr,
        {
          id: "mainDictionary",
          label: i("Main dictionary"),
          value: (m = t == null ? void 0 : t.mainDictionary) == null ? void 0 : m.ifcClassification.location,
          onChange: f,
          placeholder: "Select main dictionary",
          data: c,
          searchable: !0,
          clearable: !0
        }
      ),
      /* @__PURE__ */ M.jsx(Sa, { h: "xs" }),
      /* @__PURE__ */ M.jsx(
        va,
        {
          id: "filterDictionaries",
          label: i("Selection filter dictionaries"),
          value: u.map((g) => g.value),
          onChange: (g) => {
            p(g);
          },
          placeholder: "Select filter dictionaries",
          data: c,
          searchable: !0,
          clearable: !0,
          hidePickedOptions: !0
        }
      )
    ] })
  ] }, e);
}
const qD = ({ settings: e, setSettings: t, setUnsavedChanges: n }) => {
  const { t: r, i18n: o } = zt(), i = [
    { value: "en", label: "English" },
    { value: "nl", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ M.jsx(
    mr,
    {
      label: r("Language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("Select language")
    }
  );
};
function KD({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = zt(), i = (s) => {
    !s || !t || (n({ ...t, bsddApiEnvironment: s }), r(!0));
  };
  return /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx(Rn, { order: 5, children: o("General settings") }),
      /* @__PURE__ */ M.jsx(Je, { size: "xs", c: "dimmed", children: o("General settings help text") })
    ] }),
    /* @__PURE__ */ M.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ M.jsx(qD, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ M.jsx(Sa, { h: "xs" }),
      /* @__PURE__ */ M.jsx(
        mr,
        {
          label: o("bSDD environment"),
          data: ["production", "test"],
          value: t == null ? void 0 : t.bsddApiEnvironment,
          placeholder: "Select an option",
          onChange: i
        }
      )
    ] })
  ] }, e);
}
function YD({}) {
  const e = $f(), t = $e(_a), n = $e(Df), r = $e(eS), o = $e(tS), i = $e(ko), [s, a] = U(), [c, l] = U(!1), [u, d] = U(!0);
  V(() => {
    console.log("isLoading", u);
  }, [u]), V(() => {
    i && (e(iS(i)), e(ls(i)));
  }, [e, i]), V(() => {
    a({
      bsddApiEnvironment: o,
      mainDictionary: t,
      filterDictionaries: n,
      language: r
    });
  }, [t, n, o, r]);
  const f = () => {
    s && (e(Pf(s)), l(!1));
  }, p = () => {
    l(!1);
  };
  return V(() => {
    var g;
    if (!o || !t)
      return;
    const m = {
      bsddApiEnvironment: o,
      mainDictionary: t,
      filterDictionaries: n,
      language: r
    };
    console.log("Save settings", m), (g = window == null ? void 0 : window.bsddBridge) == null || g.saveSettings(JSON.stringify(m));
  }, [o, t, n, r]), /* @__PURE__ */ M.jsx(M.Fragment, { children: /* @__PURE__ */ M.jsxs(at.Panel, { value: "settings", children: [
    /* @__PURE__ */ M.jsxs(oe, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ M.jsx(
        KD,
        {
          id: 1,
          settings: s,
          setSettings: a,
          setUnsavedChanges: l
        }
      ),
      /* @__PURE__ */ M.jsx(
        UD,
        {
          id: 2,
          settings: s,
          setSettings: a,
          setUnsavedChanges: l,
          setIsLoading: d
        }
      ),
      /* @__PURE__ */ M.jsx(
        zS,
        {
          id: 3,
          settings: s,
          setSettings: a,
          setUnsavedChanges: l
        }
      ),
      /* @__PURE__ */ M.jsx(
        HD,
        {
          id: 4,
          settings: s,
          setSettings: a,
          setUnsavedChanges: l
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs(wn, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ M.jsx(
        Hn,
        {
          fullWidth: !0,
          loading: u,
          onClick: f,
          disabled: !c,
          variant: u ? "light" : "filled",
          loaderProps: { type: "dots" },
          children: "Save"
        }
      ),
      /* @__PURE__ */ M.jsx(Hn, { fullWidth: !0, variant: "light", onClick: p, disabled: !c, children: "Cancel" })
    ] })
  ] }) });
}
function XD() {
  const e = $f(), { t } = zt(), n = $e(lS), [r, o] = U(null), i = (s) => {
    o(s);
  };
  return V(() => {
    n && r && (e(Qw(r)), o(null));
  }, [n, r, e]), V(() => {
    const { settings: s, ifcData: a } = vS;
    e(Cl(a)), i(s);
  }, [e]), V(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const a = await window.bsddBridge.loadSettings();
        console.log("settings", a), i(JSON.parse(a));
      }
    })();
  }, []), window.updateSelection = (s) => {
    e(Cl(s));
  }, window.updateSettings = (s) => {
    console.log("updateSettings", s);
  }, /* @__PURE__ */ M.jsx(ga, { size: "40rem", children: /* @__PURE__ */ M.jsxs(at, { defaultValue: "link", children: [
    /* @__PURE__ */ M.jsxs(at.List, { grow: !0, children: [
      /* @__PURE__ */ M.jsx(at.Tab, { value: "link", children: t("Link") }),
      /* @__PURE__ */ M.jsx(at.Tab, { value: "settings", children: t("Settings") })
    ] }),
    /* @__PURE__ */ M.jsx(WS, {}),
    /* @__PURE__ */ M.jsx(YD, {})
  ] }) });
}
function JD() {
  return /* @__PURE__ */ M.jsx(Uu, { theme: Wv, children: /* @__PURE__ */ M.jsx(XD, {}) });
}
const QD = Ew({
  reducer: {
    settings: nS,
    ifcData: yS,
    bsdd: dS
  }
});
Hi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ M.jsx(v.StrictMode, { children: /* @__PURE__ */ M.jsx(Zm, { store: QD, children: /* @__PURE__ */ M.jsx(JD, {}) }) })
);
