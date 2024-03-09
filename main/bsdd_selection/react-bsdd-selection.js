var wm = Object.defineProperty;
var Sm = (e, t, n) => t in e ? wm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Pe = (e, t, n) => (Sm(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as R from "react";
import v, { createContext as an, useContext as bt, useState as U, useRef as V, useEffect as W, useMemo as Gn, useCallback as Z, useLayoutEffect as fo, useId as gu, forwardRef as ie, cloneElement as ln, Children as xm, createElement as hl } from "react";
import * as Cm from "react-dom";
import hu, { flushSync as ys, createPortal as Em, unstable_batchedUpdates as Pm } from "react-dom";
function bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yu = { exports: {} }, po = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm = v, Rm = Symbol.for("react.element"), Im = Symbol.for("react.fragment"), Am = Object.prototype.hasOwnProperty, Om = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $m = { key: !0, ref: !0, __self: !0, __source: !0 };
function vu(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Am.call(t, r) && !$m.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Rm, type: e, key: i, ref: s, props: o, _owner: Om.current };
}
po.Fragment = Im;
po.jsx = vu;
po.jsxs = vu;
yu.exports = po;
var k = yu.exports, Hi = {}, bl = hu;
Hi.createRoot = bl.createRoot, Hi.hydrateRoot = bl.hydrateRoot;
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
var ar = v;
function Nm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Tm = typeof Object.is == "function" ? Object.is : Nm, Lm = ar.useSyncExternalStore, Mm = ar.useRef, _m = ar.useEffect, km = ar.useMemo, Fm = ar.useDebugValue;
Su.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Mm(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = km(function() {
    function l(p) {
      if (!c) {
        if (c = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, Tm(u, p))
        return m;
      var g = r(p);
      return o !== void 0 && o(m, g) ? m : (u = p, d = g);
    }
    var c = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, o]);
  var a = Lm(e, i[0], i[1]);
  return _m(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), Fm(a), a;
};
wu.exports = Su;
var Bm = wu.exports, Fe = (
  // prettier-ignore
  // @ts-ignore
  "default" in R ? R.default : R
), yl = Symbol.for("react-redux-context"), vl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function jm() {
  if (!Fe.createContext)
    return {};
  const e = vl[yl] ?? (vl[yl] = /* @__PURE__ */ new Map());
  let t = e.get(Fe.createContext);
  return t || (t = Fe.createContext(
    null
  ), e.set(Fe.createContext, t)), t;
}
var Lt = /* @__PURE__ */ jm(), Vm = () => {
  throw new Error("uSES not initialized!");
};
function vs(e = Lt) {
  return function() {
    return Fe.useContext(e);
  };
}
var xu = /* @__PURE__ */ vs(), Cu = Vm, zm = (e) => {
  Cu = e;
}, Wm = (e, t) => e === t;
function Gm(e = Lt) {
  const t = e === Lt ? xu : vs(e), n = (r, o = {}) => {
    const { equalityFn: i = Wm, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: l,
      getServerState: c,
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
      l.addNestedSub,
      a.getState,
      c || a.getState,
      f,
      i
    );
    return Fe.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Hm = /* @__PURE__ */ Gm();
function Um(e) {
  e();
}
function qm() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Um(() => {
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
var wl = {
  notify() {
  },
  get: () => []
};
function Km(e, t) {
  let n, r = wl, o = 0, i = !1;
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
  function l() {
    m.onStateChange && m.onStateChange();
  }
  function c() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = qm());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = wl);
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
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
var Ym = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xm = Ym ? Fe.useLayoutEffect : Fe.useEffect;
function Jm({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Fe.useMemo(() => {
    const c = Km(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Fe.useMemo(() => e.getState(), [e]);
  Xm(() => {
    const { subscription: c } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || Lt;
  return /* @__PURE__ */ Fe.createElement(l.Provider, { value: s }, n);
}
var Qm = Jm;
function Eu(e = Lt) {
  const t = e === Lt ? xu : (
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
var Zm = /* @__PURE__ */ Eu();
function eg(e = Lt) {
  const t = e === Lt ? Zm : Eu(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var tg = /* @__PURE__ */ eg();
zm(Bm.useSyncExternalStoreWithSelector);
const ng = {
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
class Br {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || ng, this.options = n, this.debug = n.debug;
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
    return new Br(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Br(this.logger, t);
  }
}
var pt = new Br();
class mo {
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
function Ln() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Sl(e) {
  return e == null ? "" : "" + e;
}
function rg(e, t, n) {
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
function xl(e, t, n) {
  const {
    obj: r,
    k: o
  } = ws(e, t, Object);
  r[o] = n;
}
function og(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = ws(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function jr(e, t) {
  const {
    obj: n,
    k: r
  } = ws(e, t);
  if (n)
    return n[r];
}
function ig(e, t, n) {
  const r = jr(e, n);
  return r !== void 0 ? r : jr(t, n);
}
function Pu(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Pu(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function fn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var sg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function ag(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => sg[t]) : e;
}
const lg = [" ", ",", "?", "!", ";"];
function cg(e, t, n) {
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
function Vr(e, t) {
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
      let s = 2, a = r.slice(i, i + s).join(n), l = o[a];
      for (; l === void 0 && r.length > i + s; )
        s++, a = r.slice(i, i + s).join(n), l = o[a];
      if (l === void 0)
        return;
      if (l === null)
        return null;
      if (t.endsWith(a)) {
        if (typeof l == "string")
          return l;
        if (a && typeof l[a] == "string")
          return l[a];
      }
      const c = r.slice(i + s).join(n);
      return c ? Vr(l, c, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function zr(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class Cl extends mo {
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
    const l = jr(this.data, a);
    return l || !s || typeof r != "string" ? l : Vr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), xl(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
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
    let l = jr(this.data, a) || {};
    o ? Pu(l, r, i) : l = {
      ...l,
      ...r
    }, xl(this.data, a, l), s.silent || this.emit("added", t, n, r);
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
const El = {};
class Wr extends mo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), rg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = pt.create("translator");
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
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !cg(t, r, o);
    if (s && !a) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: i
        };
      const c = t.split(r);
      (r !== o || r === o && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), t = c.join(o);
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
    } = this.extractFromKey(t[t.length - 1], n), l = a[a.length - 1], c = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (u) {
        const y = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${l}${y}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${y}${s}`;
      }
      return o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: c,
        usedNS: l,
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
        for (const P in f)
          if (Object.prototype.hasOwnProperty.call(f, P)) {
            const E = `${C}${i}${P}`;
            x[P] = this.translate(E, {
              ...n,
              joinArrays: !1,
              ns: a
            }), x[P] === E && (x[P] = f[P]);
          }
        f = x;
      }
    } else if (S && typeof w == "string" && g === "[object Array]")
      f = f.join(w), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let y = !1, x = !1;
      const C = n.count !== void 0 && typeof n.count != "string", P = Wr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(c, n.count, n) : "", O = n.ordinal && C ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", T = n[`defaultValue${E}`] || n[`defaultValue${O}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (y = !0, f = T), this.isValidLookup(f) || (x = !0, f = s);
      const M = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && x ? void 0 : f, _ = P && T !== f && this.options.updateMissing;
      if (x || y || _) {
        if (this.logger.log(_ ? "updateKey" : "missingKey", c, l, s, _ ? T : f), i) {
          const B = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          B && B.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let A = [];
        const L = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && L && L[0])
          for (let B = 0; B < L.length; B++)
            A.push(L[B]);
        else
          this.options.saveMissingTo === "all" ? A = this.languageUtils.toResolveHierarchy(n.lng || this.language) : A.push(n.lng || this.language);
        const I = (B, $, H) => {
          const X = P && H !== f ? H : M;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(B, l, $, X, _, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(B, l, $, X, _, n), this.emit("missingKey", B, l, $, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? A.forEach((B) => {
          this.pluralResolver.getSuffixes(B, n).forEach(($) => {
            I([B], s + $, n[`defaultValue${$}`] || T);
          });
        }) : I(A, s, T));
      }
      f = this.extendTranslation(f, t, n, d, r), x && f === s && this.options.appendNamespaceToMissingKey && (f = `${l}:${s}`), (x || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, y ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
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
      const c = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (c) {
        const f = t.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language, r), c) {
        const f = t.match(this.interpolator.nestingRegexp), p = f && f.length;
        u < p && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (r.lng = o.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var f = arguments.length, p = new Array(f), m = 0; m < f; m++)
          p[m] = arguments[m];
        return i && i[0] === p[0] && !r.context ? (s.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`), null) : s.translate(...p, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = typeof a == "string" ? [a] : a;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = Du.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, o, i, s, a;
    return typeof t == "string" && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r))
        return;
      const c = this.extractFromKey(l, n), u = c.key;
      o = u;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", p = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", g = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((h) => {
        this.isValidLookup(r) || (a = h, !El[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (El[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((w) => {
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
              const P = `${u}${this.options.contextSeparator}${n.context}`;
              S.push(P), f && (S.push(P + y), n.ordinal && y.indexOf(C) === 0 && S.push(P + y.replace(C, this.options.pluralSeparator)), p && S.push(P + x));
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
class Pl {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = pt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = zr(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = zr(t), !t || t.indexOf("-") < 0)
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
let ug = [{
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
}], dg = {
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
const fg = ["v1", "v2", "v3"], pg = ["v4"], Dl = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function mg() {
  const e = {};
  return ug.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: dg[t.fc]
      };
    });
  }), e;
}
class gg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = pt.create("pluralResolver"), (!this.options.compatibilityJSON || pg.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = mg();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(zr(t), {
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Dl[o] - Dl[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    return !fg.includes(this.options.compatibilityJSON);
  }
}
function Rl(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = ig(e, t, n);
  return !i && o && typeof n == "string" && (i = Vr(e, n, r), i === void 0 && (i = Vr(t, n, r))), i;
}
class hg {
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
    this.escape = n.escape !== void 0 ? n.escape : ag, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? fn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? fn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? fn(n.nestingPrefix) : n.nestingPrefixEscaped || fn("$t("), this.nestingSuffix = n.nestingSuffix ? fn(n.nestingSuffix) : n.nestingSuffixEscaped || fn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
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
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function c(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const S = Rl(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(S, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : S;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), w = g.join(this.formatSeparator).trim();
      return this.format(Rl(n, l, h, this.options.keySeparator, this.options.ignoreJSONStructure), w, r, {
        ...o,
        ...n,
        interpolationkey: h
      });
    };
    this.resetRegExp();
    const d = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, f = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (m) => c(m)
    }, {
      regex: this.regexp,
      safeValue: (m) => this.escapeValue ? c(this.escape(m)) : c(m)
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
          typeof s != "string" && !this.useRawValueToEscape && (s = Sl(s));
        const h = m.safeValue(s);
        if (t = t.replace(i[0], h), f ? (m.regex.lastIndex += s.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, i, s;
    function a(l, c) {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0)
        return l;
      const d = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, s);
      const p = f.match(/'/g), m = f.match(/"/g);
      (p && p.length % 2 === 0 && !m || m.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        s = JSON.parse(f), c && (s = {
          ...c,
          ...s
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, g), `${l}${u}${f}`;
      }
      return delete s.defaultValue, l;
    }
    for (; o = this.nestingRegexp.exec(t); ) {
      let l = [];
      s = {
        ...r
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let c = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((d) => d.trim());
        o[1] = u.shift(), l = u, c = !0;
      }
      if (i = n(a.call(this, o[1].trim(), s), s), i && o[0] === t && typeof i != "string")
        return i;
      typeof i != "string" && (i = Sl(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), c && (i = l.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function bg(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((s) => {
      if (!s)
        return;
      const [a, ...l] = s.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, "");
      n[a.trim()] || (n[a.trim()] = c), c === "false" && (n[a.trim()] = !1), c === "true" && (n[a.trim()] = !0), isNaN(c) || (n[a.trim()] = parseInt(c, 10));
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
    return a || (a = e(zr(o), i), t[s] = a), a(r);
  };
}
class yg {
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
    return n.split(this.formatSeparator).reduce((a, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = bg(l);
      if (this.formats[c]) {
        let d = a;
        try {
          const f = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, p = f.locale || f.lng || o.locale || o.lng || r;
          d = this.formats[c](a, p, {
            ...u,
            ...o,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, t);
  }
}
function vg(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class wg extends mo {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = pt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const i = {}, s = {}, a = {}, l = {};
    return t.forEach((c) => {
      let u = !0;
      n.forEach((d) => {
        const f = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? s[f] === void 0 && (s[f] = !0) : (this.state[f] = 1, u = !1, s[f] === void 0 && (s[f] = !0), i[f] === void 0 && (i[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), u || (a[c] = !0);
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
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const o = t.split("|"), i = o[0], s = o[1];
    n && this.emit("failedLoading", i, s, n), r && this.store.addResourceBundle(i, s, r), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((l) => {
      og(l.loaded, [i], s), vg(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((d) => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
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
    const a = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && u && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, o + 1, i * 2, s);
        }, i);
        return;
      }
      s(c, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(t, n);
        c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(t, n, a);
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
        const l = {
          ...s,
          isUpdate: i
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(t, n, r, o, l) : u = c(t, n, r, o), u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          c(t, n, r, o, a, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, o);
    }
  }
}
function Il() {
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
function Al(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Cr() {
}
function Sg(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Hn extends mo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Al(t), this.services = {}, this.logger = pt, this.modules = {
      external: []
    }, Sg(this), n && !this.isInitialized && !t.isClone) {
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
    const o = Il();
    this.options = {
      ...o,
      ...this.options,
      ...Al(n)
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
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = yg);
      const d = new Pl(this.options);
      this.store = new Cl(this.options.resources, this.options);
      const f = this.services;
      f.logger = pt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new gg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new hg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new wg(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Wr(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Cr), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const l = Ln(), c = () => {
      const u = (d, f) => {
        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cr;
    const o = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const i = [], s = (a) => {
        if (!a || a === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
          c !== "cimode" && i.indexOf(c) < 0 && i.push(c);
        });
      };
      o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => s(l)), this.options.preload && this.options.preload.forEach((a) => s(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const o = Ln();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Cr), this.services.backendConnector.reload(t, n, (i) => {
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
    const o = Ln();
    this.emit("languageChanging", t);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, s = (l, c) => {
      c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      !t && !l && this.services.languageDetector && (l = []);
      const c = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (u) => {
        s(u, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), o;
  }
  getFixedT(t, n, r) {
    var o = this;
    const i = function(s, a) {
      let l;
      if (typeof a != "object") {
        for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++)
          u[d - 2] = arguments[d];
        l = o.options.overloadTranslationOptionHandler([s, a].concat(u));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix = l.keyPrefix || r || i.keyPrefix;
      const f = o.options.keySeparator || ".";
      let p;
      return l.keyPrefix && Array.isArray(s) ? p = s.map((m) => `${l.keyPrefix}${f}${m}`) : p = l.keyPrefix ? `${l.keyPrefix}${f}${s}` : s, o.t(p, l);
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
    const s = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, s);
      if (a !== void 0)
        return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(r, t) && (!o || s(i, t)));
  }
  loadNamespaces(t, n) {
    const r = Ln();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Ln();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Pl(Il());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Hn(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cr;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Hn(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new Cl(this.store.data, o), i.services.resourceStore = i.store), i.translator = new Wr(i.services, o), i.translator.on("*", function(a) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
        c[u - 1] = arguments[u];
      i.emit(a, ...c);
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
const Se = Hn.createInstance();
Se.createInstance = Hn.createInstance;
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
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $t.apply(this, arguments);
}
function xg() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Ol = {};
function Ui() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Ol[t[0]] || (typeof t[0] == "string" && (Ol[t[0]] = /* @__PURE__ */ new Date()), xg(...t));
}
const Ru = (e, t) => () => {
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
function $l(e, t, n) {
  e.loadNamespaces(t, Ru(e, n));
}
function Nl(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Ru(e, r));
}
function Cg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], o = t.options ? t.options.fallbackLng : !1, i = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  const s = (a, l) => {
    const c = t.services.backendConnector.state[`${a}|${l}`];
    return c === -1 || c === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !s(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!o || s(i, e)));
}
function Eg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Ui("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : Cg(e, t, n);
}
const Pg = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Dg = {
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
}, Rg = (e) => Dg[e], Ig = (e) => e.replace(Pg, Rg);
let qi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ig
};
function Ag() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  qi = {
    ...qi,
    ...e
  };
}
function Og() {
  return qi;
}
let Iu;
function $g(e) {
  Iu = e;
}
function Ng() {
  return Iu;
}
const Tg = {
  type: "3rdParty",
  init(e) {
    Ag(e.options.react), $g(e);
  }
}, Lg = an();
class Mg {
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
const _g = (e, t) => {
  const n = V();
  return W(() => {
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
  } = bt(Lg) || {}, i = n || r || Ng();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new Mg()), !i) {
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
    keyPrefix: l
  } = s;
  let c = e || o || i.options && i.options.defaultNS;
  c = typeof c == "string" ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((b) => Eg(b, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? c : c[0], l);
  }
  const [f, p] = U(d);
  let m = c.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = _g(m), h = V(!0);
  W(() => {
    const {
      bindI18n: b,
      bindI18nStore: y
    } = s;
    h.current = !0, !u && !a && (t.lng ? Nl(i, t.lng, c, () => {
      h.current && p(d);
    }) : $l(i, c, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function x() {
      h.current && p(d);
    }
    return b && i && i.on(b, x), y && i && i.store.on(y, x), () => {
      h.current = !1, b && i && b.split(" ").forEach((C) => i.off(C, x)), y && i && y.split(" ").forEach((C) => i.store.off(C, x));
    };
  }, [i, m]);
  const w = V(!0);
  W(() => {
    h.current && !w.current && p(d), w.current = !1;
  }, [i, l]);
  const S = [f, i, u];
  if (S.t = f, S.i18n = i, S.ready = u, u || !u && !a)
    return S;
  throw new Promise((b) => {
    t.lng ? Nl(i, t.lng, c, () => b()) : $l(i, c, () => b());
  });
}
Se.use(Tg).init({
  resources: {
    EN: {
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
    "nl-NL": {
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
  lng: "EN",
  fallbackLng: "nl-NL",
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
function kg(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function Fg(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function Bg(e) {
  const t = Fg(e);
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
const D = Au("rem", { shouldScale: !0 }), Tl = Au("em");
function xs(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Ou(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Wt(e) {
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
function Gr(e, t) {
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
function jg(e, t, n) {
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
function Vg(e, t, n) {
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
function zg(e, t, n) {
  return Ki(e, n) === Ki(t, n);
}
function $u({
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
    const l = Array.from(
      ((m = Ki(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => zg(a.currentTarget, g, e)), c = l.findIndex((g) => a.currentTarget === g), u = Vg(c, l, r), d = jg(c, l, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
    switch (a.key) {
      case "ArrowRight": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), l[f].focus(), o && l[f].click());
        break;
      }
      case "ArrowLeft": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), l[p].focus(), o && l[p].click());
        break;
      }
      case "ArrowUp": {
        s === "vertical" && (a.stopPropagation(), a.preventDefault(), l[d].focus(), o && l[d].click());
        break;
      }
      case "ArrowDown": {
        s === "vertical" && (a.stopPropagation(), a.preventDefault(), l[u].focus(), o && l[u].click());
        break;
      }
      case "Home": {
        a.stopPropagation(), a.preventDefault(), !l[0].disabled && l[0].focus();
        break;
      }
      case "End": {
        a.stopPropagation(), a.preventDefault();
        const g = l.length - 1;
        !l[g].disabled && l[g].focus();
        break;
      }
    }
  };
}
const Wg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Es(e) {
  return Wg[e];
}
const Gg = () => {
};
function Hg(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || Gg : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function ce(e, t = "size", n = !0) {
  if (e !== void 0)
    return Ou(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function Nu(e) {
  return ce(e, "mantine-spacing");
}
function dt(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : ce(e, "mantine-radius");
}
function Xe(e) {
  return ce(e, "mantine-font-size");
}
function Ug(e) {
  return ce(e, "mantine-line-height", !1);
}
function qg(e) {
  if (e)
    return ce(e, "mantine-shadow", !1);
}
function Hr(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Tu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Tu(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function yt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Tu(e)) && (r && (r += " "), r += t);
  return r;
}
const Kg = {};
function Yg(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = yt(t[r], o) : t[r] = o;
    });
  }), t;
}
function go({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || Kg
  );
  return Yg(i);
}
function Ur({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function Lu() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Zt(e) {
  const t = V(e);
  return W(() => {
    t.current = e;
  }), Gn(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ho(e, t) {
  const n = Zt(e), r = V(0);
  return W(() => () => window.clearTimeout(r.current), []), Z(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const Ll = ["mousedown", "touchstart"];
function Xg(e, t, n) {
  const r = V();
  return W(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((c) => !!c && !i.composedPath().includes(c)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || Ll).forEach((i) => document.addEventListener(i, o)), () => {
      (t || Ll).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function Jg(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function Qg(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function Zg(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = U(
    n ? t : Qg(e, t)
  ), i = V();
  return W(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), Jg(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const lr = typeof document < "u" ? fo : W;
function Mt(e, t) {
  const n = V(!1);
  W(
    () => () => {
      n.current = !1;
    },
    []
  ), W(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
function eh({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = V(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Mt(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [e, t]), r;
}
function th(e, t = "body > :not(script)") {
  const n = Lu(), r = Array.from(
    document.querySelectorAll(t)
  ).map((o) => {
    var l;
    if ((l = o == null ? void 0 : o.shadowRoot) != null && l.contains(e) || o.contains(e))
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
const nh = /input|select|textarea|button|object/, Mu = "a, input, select, textarea, button, object, [tabindex]";
function rh(e) {
  return e.style.display === "none";
}
function oh(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (rh(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function _u(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Yi(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(_u(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (nh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && oh(e);
}
function ku(e) {
  const t = _u(e);
  return (Number.isNaN(t) || t >= 0) && Yi(e);
}
function ih(e) {
  return Array.from(e.querySelectorAll(Mu)).filter(ku);
}
function sh(e, t) {
  const n = ih(e);
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
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus();
}
function ah(e = !0) {
  const t = V(), n = V(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Mu));
      s = a.find(ku) || a.find(Yi) || null, !s && Yi(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = Z(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = th(i), t.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i);
        }), t.current = i) : t.current = null);
      }
    },
    [e]
  );
  return W(() => {
    if (!e)
      return;
    t.current && setTimeout(() => r(t.current));
    const i = (s) => {
      s.key === "Tab" && t.current && sh(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const lh = v["useId".toString()] || (() => {
});
function ch() {
  const e = lh();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Ht(e) {
  const t = ch(), [n, r] = U(t);
  return lr(() => {
    r(Lu());
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
function Ie(...e) {
  return Z(Bu(...e), e);
}
function _t({
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
  return Zg("(prefers-reduced-motion: reduce)", e, t);
}
function uh(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = U(e), s = Z(() => {
    i((c) => c || (n == null || n(), !0));
  }, [n]), a = Z(() => {
    i((c) => c && (r == null || r(), !1));
  }, [r]), l = Z(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: l }];
}
const Vu = an(null);
function Ps() {
  const e = bt(Vu);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function dh() {
  return Ps().cssVariablesResolver;
}
function fh() {
  return Ps().classNamesPrefix;
}
function Ds() {
  return Ps().getStyleNonce;
}
function ph(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function mh(e) {
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
function gh(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function hh(e) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = e.match(t);
  if (!n)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(n[1], 10), o = parseInt(n[2], 10) / 100, i = parseInt(n[3], 10) / 100, s = n[5] ? parseFloat(n[5]) : void 0, a = (1 - Math.abs(2 * i - 1)) * o, l = r / 60, c = a * (1 - Math.abs(l % 2 - 1)), u = i - a / 2;
  let d, f, p;
  return l >= 0 && l < 1 ? (d = a, f = c, p = 0) : l >= 1 && l < 2 ? (d = c, f = a, p = 0) : l >= 2 && l < 3 ? (d = 0, f = a, p = c) : l >= 3 && l < 4 ? (d = 0, f = c, p = a) : l >= 4 && l < 5 ? (d = c, f = 0, p = a) : (d = a, f = 0, p = c), {
    r: Math.round((d + u) * 255),
    g: Math.round((f + u) * 255),
    b: Math.round((p + u) * 255),
    a: s || 1
  };
}
function zu(e) {
  return ph(e) ? mh(e) : e.startsWith("rgb") ? gh(e) : e.startsWith("hsl") ? hh(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Er(e, t) {
  if (e.startsWith("var("))
    return e;
  const { r: n, g: r, b: o, a: i } = zu(e), s = 1 - t, a = (l) => Math.round(l * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function Xi(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function Rs({
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
function kt(e, t) {
  const n = Rs({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Ji(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = kt(n.from, t), o = kt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Ne(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: n, g: r, b: o } = zu(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const bh = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = Rs({ color: e, theme: t });
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
      hover: Er(e, 0.1),
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
    hover: Er(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Er(t.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Er(t.white, 0.01),
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
}, yh = {
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
}, Ml = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Is = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: yh,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: bh,
  fontFamily: Ml,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Ml,
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
function _l(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function vh({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return _l(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && _l(r.newValue) && n(r.newValue);
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
const wh = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", kl = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function yi(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Fl(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(wh);
  if (typeof e.primaryShade == "object" && (!yi(e.primaryShade.dark) || !yi(e.primaryShade.light)))
    throw new Error(kl);
  if (typeof e.primaryShade == "number" && !yi(e.primaryShade))
    throw new Error(kl);
}
function Sh(e, t) {
  var r;
  if (!t)
    return Fl(e), e;
  const n = Ss(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Fl(n), n;
}
const As = an(null), xh = () => bt(As) || Is;
function vt() {
  const e = bt(As);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Wu({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = xh(), o = Gn(
    () => Sh(n ? r : Is, e),
    [e, r, n]
  );
  return /* @__PURE__ */ v.createElement(As.Provider, { value: o }, t);
}
Wu.displayName = "@mantine/core/MantineThemeProvider";
function Ch() {
  const e = vt(), t = Ds(), n = gt(e.breakpoints).reduce((r, o) => {
    const i = Bg(e.breakpoints[o]);
    return `${r}@media (max-width: ${Tl(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Tl(
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
function Eh(e, t) {
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
    e.colors[s].forEach((c, u) => {
      o.variables[`--mantine-color-${s}-${u}`] = c;
    });
    const a = `var(--mantine-color-${s}-${n === 9 ? 8 : n + 1})`, l = `var(--mantine-color-${s}-${t === 9 ? 8 : t + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-filled-hover`] = a, o.light[`--mantine-color-${s}-light`] = Ne(
      e.colors[s][n],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = Ne(
      e.colors[s][n],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline-hover`] = Ne(
      e.colors[s][n],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.dark[`--mantine-color-${s}-filled-hover`] = l, o.dark[`--mantine-color-${s}-light`] = Ne(
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
function Ph({ theme: e, generator: t }) {
  const n = Gu(e), r = t == null ? void 0 : t(e);
  return r ? Ss(n, r) : n;
}
const Si = Gu(Is);
function Dh(e) {
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
  const t = vt(), n = Ds(), r = dh(), o = Ph({ theme: t, generator: r }), i = e === ":root", s = i ? Dh(o) : o, a = Eh(s, e);
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
function Ih() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function Mn(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function Ah({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = V(), [i, s] = U(() => e.get(t)), a = r || i, l = Z(
    (u) => {
      r || (Mn(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), c = Z(() => {
    s(t), Mn(t, n), e.clear();
  }, [e.clear, t]);
  return W(() => (e.subscribe(l), e.unsubscribe), [e.subscribe, e.unsubscribe]), lr(() => {
    Mn(e.get(t), n);
  }, []), W(() => {
    var d;
    if (r)
      return Mn(r, n), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && Mn(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: l, clearColorScheme: c };
}
function Oh({
  respectReducedMotion: e,
  getRootElement: t
}) {
  lr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
Ih();
function Uu({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = vh(),
  defaultColorScheme: a = "light",
  getRootElement: l = () => document.documentElement,
  cssVariablesResolver: c,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = Ah({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: l
  });
  return Oh({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: l
  }), /* @__PURE__ */ v.createElement(
    Vu.Provider,
    {
      value: {
        colorSchemeManager: s,
        colorScheme: d,
        setColorScheme: f,
        clearColorScheme: p,
        getRootElement: l,
        classNamesPrefix: i,
        getStyleNonce: n,
        cssVariablesResolver: c,
        cssVariablesSelector: o
      }
    },
    /* @__PURE__ */ v.createElement(Wu, { theme: e }, r && /* @__PURE__ */ v.createElement(Hu, { cssVariablesSelector: o }), /* @__PURE__ */ v.createElement(Ch, null), t)
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
    resolvedClassNames: go({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0
    }),
    resolvedStyles: Ur({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const $h = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Nh({ theme: e, options: t, unstyled: n }) {
  return yt(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || $h[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function Th({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return go({
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
  return go({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function Mh({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function _h({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function kh({
  themeName: e,
  classNamesPrefix: t,
  selector: n
}) {
  return e.map((r) => `${t}-${r}-${n}`);
}
function Fh({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (i) => {
      var s, a;
      return (a = go({
        theme: t,
        classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function Bh({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function jh({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: i,
  classes: s,
  unstyled: a,
  className: l,
  rootSelector: c,
  props: u,
  stylesCtx: d
}) {
  return yt(
    Nh({ theme: e, options: t, unstyled: a }),
    Fh({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    Bh({ options: t, classes: s, selector: r, unstyled: a }),
    Lh({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    Th({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    Mh({ rootSelector: c, selector: r, className: l }),
    _h({ selector: r, classes: s, unstyled: a }),
    kh({ themeName: n, classNamesPrefix: o, selector: r }),
    t == null ? void 0 : t.className
  );
}
function Vh({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (i) => {
      var s;
      return Ur({
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
function zh(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...xs(n[r]) };
  }), t), {});
}
function Wh({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s
}) {
  var a;
  return (a = zh([
    t == null ? void 0 : t(n, r, o),
    ...s.map((l) => {
      var c, u, d;
      return (d = (u = (c = n.components) == null ? void 0 : c[l]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : a[i];
}
function Gh({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: i,
  rootSelector: s,
  styles: a,
  style: l,
  vars: c,
  varsResolver: u
}) {
  return {
    ...Vh({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...Ur({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...Ur({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...Wh({ theme: e, props: o, stylesCtx: i, vars: c, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? Qi({ style: l, theme: e }) : null,
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
  classNames: l,
  styles: c,
  vars: u,
  varsResolver: d
}) {
  const f = vt(), p = fh(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: jh({
      theme: f,
      options: h,
      themeName: m,
      selector: g,
      classNamesPrefix: p,
      classNames: l,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: s,
      props: n,
      stylesCtx: r
    }),
    style: Gh({
      theme: f,
      themeName: m,
      selector: g,
      options: h,
      props: n,
      stylesCtx: r,
      rootSelector: s,
      styles: c,
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
function Bl(e) {
  return gt(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${kg(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function Hh({ selector: e, styles: t, media: n }) {
  const r = t ? Bl(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${Bl(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function Uh({ selector: e, styles: t, media: n }) {
  const r = Ds();
  return /* @__PURE__ */ v.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: Hh({ selector: e, styles: t, media: n }) }
    }
  );
}
function bo(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    p: l,
    px: c,
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
    lh: P,
    fs: E,
    tt: O,
    td: T,
    w: N,
    miw: M,
    maw: _,
    h: A,
    mih: L,
    mah: I,
    bgsz: B,
    bgp: $,
    bgr: H,
    bga: X,
    pos: ne,
    top: be,
    left: ue,
    bottom: Ae,
    right: ye,
    inset: re,
    display: ve,
    hiddenFrom: Me,
    visibleFrom: xe,
    lightHidden: Ce,
    darkHidden: _e,
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
    p: l,
    px: c,
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
    lh: P,
    fs: E,
    tt: O,
    td: T,
    w: N,
    miw: M,
    maw: _,
    h: A,
    mih: L,
    mah: I,
    bgsz: B,
    bgp: $,
    bgr: H,
    bga: X,
    pos: ne,
    top: be,
    left: ue,
    bottom: Ae,
    right: ye,
    inset: re,
    display: ve,
    hiddenFrom: Me,
    visibleFrom: xe,
    lightHidden: Ce,
    darkHidden: _e
  }), rest: ae };
}
const qh = {
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
function Kh(e, t) {
  const n = Rs({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : n.variable ? `var(${n.variable})` : n.color;
}
function Yh(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? D(e) : e;
}
function Xh(e) {
  return e;
}
function Jh(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : e;
}
function Qh(e) {
  return typeof e == "number" ? D(e) : e;
}
function Zh(e, t) {
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
  color: Kh,
  fontSize: Yh,
  spacing: Zh,
  identity: Xh,
  size: Qh,
  lineHeight: Jh
};
function jl(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function eb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(jl(o)) - Number(jl(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function tb(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function nb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function rb(e) {
  return typeof e == "object" && e !== null ? gt(e).filter((t) => t !== "base") : [];
}
function ob(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function ib({
  styleProps: e,
  data: t,
  theme: n
}) {
  return eb(
    gt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = nb(e[o]);
        if (!tb(e[o]))
          return s.forEach((c) => {
            r.inlineStyles[c] = xi[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const l = rb(e[o]);
        return s.forEach((c) => {
          a && (r.styles[c] = xi[i.type](a, n)), l.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [c]: xi[i.type](
                ob(e[o], u),
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
function sb() {
  return `__m__-${gu().replace(/:/g, "")}`;
}
function Os(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Os(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Ku(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function ab(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[Ku(n)] = e[n]), t;
  }, {});
}
function Yu(e) {
  return e ? typeof e == "string" ? { [Ku(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...Yu(n) }),
    {}
  ) : ab(e) : null;
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
    visibleFrom: l,
    lightHidden: c,
    darkHidden: u,
    renderRoot: d,
    ...f
  }, p) => {
    const m = vt(), g = e || "div", { styleProps: h, rest: w } = bo(f), S = sb(), b = ib({
      styleProps: h,
      theme: m,
      data: qh
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
        "mantine-light-hidden": c,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${l}`]: l
      }),
      "data-variant": o,
      "data-size": Ou(s) ? void 0 : s || void 0,
      ...Yu(i),
      ...w
    };
    return /* @__PURE__ */ v.createElement(v.Fragment, null, b.hasResponsiveStyles && /* @__PURE__ */ v.createElement(
      Uh,
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
const cb = an({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function cr() {
  return bt(cb);
}
function ub(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Ci(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const _n = typeof window < "u" && window.requestAnimationFrame;
function db({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {
  },
  opened: r
}) {
  const o = V(null), i = 0, s = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [a, l] = U(r ? {} : s), c = (m) => {
    ys(() => l(m));
  }, u = (m) => {
    c((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || ub(m)}ms ${t}`
    };
  }
  Mt(() => {
    typeof _n == "function" && _n(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), _n(() => {
        const m = Ci(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Ci(o);
      u({ ...d(m), willChange: "height", height: m }), _n(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Ci(o);
        g === a.height ? c({}) : u({ height: g }), n();
      } else
        a.height === i && (c(s), n());
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
const fb = {
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
    animateOpacity: l,
    ...c
  } = j("Collapse", fb, e), u = vt(), d = ju(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = db({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ v.createElement(G, { ...c }, n) : null : /* @__PURE__ */ v.createElement(G, { ...m({ style: Os(s, u), ref: t, ...c }) }, /* @__PURE__ */ v.createElement(
    "div",
    {
      style: {
        opacity: r || !l ? 1 : 0,
        transition: l ? `opacity ${p}ms ${i}` : "none"
      }
    },
    n
  ));
});
Qu.displayName = "@mantine/core/Collapse";
const [pb, tt] = Gt(
  "ScrollArea.Root component was not found in tree"
);
function bn(e, t) {
  const n = Zt(t);
  lr(() => {
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
const mb = v.forwardRef((e, t) => {
  const { style: n, ...r } = e, o = tt(), [i, s] = v.useState(0), [a, l] = v.useState(0), c = !!(i && a);
  return bn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), l(u);
  }), bn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), c ? /* @__PURE__ */ v.createElement("div", { ...r, ref: t, style: { ...n, width: i, height: a } }) : null;
}), gb = v.forwardRef(
  (e, t) => {
    const n = tt(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ v.createElement(mb, { ...e, ref: t }) : null;
  }
), hb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Zu = ie((e, t) => {
  const n = j("ScrollAreaRoot", hb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, l] = U(null), [c, u] = U(null), [d, f] = U(null), [p, m] = U(null), [g, h] = U(null), [w, S] = U(0), [b, y] = U(0), [x, C] = U(!1), [P, E] = U(!1), O = Ie(t, (T) => l(T));
  return /* @__PURE__ */ v.createElement(
    pb,
    {
      value: {
        type: r,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: c,
        onViewportChange: u,
        content: d,
        onContentChange: f,
        scrollbarX: p,
        onScrollbarXChange: m,
        scrollbarXEnabled: x,
        onScrollbarXEnabledChange: C,
        scrollbarY: g,
        onScrollbarYChange: h,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: S,
        onCornerHeightChange: y
      }
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        ...s,
        ref: O,
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
function yo(e) {
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
function bb(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Vl(e, t, n = "ltr") {
  const r = yo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, l = n === "ltr" ? [0, s] : [s * -1, 0], c = bb(e, l);
  return td([0, s], [0, a])(c);
}
function yb(e, t, n, r = "ltr") {
  const o = yo(n), i = o / 2, s = t || i, a = o - s, l = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return td([l, c], d)(e);
}
function nd(e, t) {
  return e > 0 && e < t;
}
function qr(e) {
  return e ? parseInt(e, 10) : 0;
}
function tn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [vb, rd] = Gt(
  "ScrollAreaScrollbar was not found in tree"
), od = ie((e, t) => {
  const {
    sizes: n,
    hasThumb: r,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: a,
    onDragScroll: l,
    onWheelScroll: c,
    onResize: u,
    ...d
  } = e, f = tt(), [p, m] = v.useState(null), g = Ie(t, (E) => m(E)), h = v.useRef(null), w = v.useRef(""), { viewport: S } = f, b = n.content - n.viewport, y = Zt(c), x = Zt(a), C = ho(u, 10), P = (E) => {
    if (h.current) {
      const O = E.clientX - h.current.left, T = E.clientY - h.current.top;
      l({ x: O, y: T });
    }
  };
  return W(() => {
    const E = (O) => {
      const T = O.target;
      (p == null ? void 0 : p.contains(T)) && y(O, b);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [S, p, b, y]), W(x, [n, x]), bn(p, C), bn(f.content, C), /* @__PURE__ */ v.createElement(
    vb,
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
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(E));
        }),
        onPointerMove: tn(e.onPointerMove, P),
        onPointerUp: tn(e.onPointerUp, (E) => {
          const O = E.target;
          O.hasPointerCapture(E.pointerId) && O.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = w.current, h.current = null;
        })
      }
    )
  );
}), wb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, l] = U(), c = V(null), u = Ie(t, c, s.onScrollbarXChange);
    return W(() => {
      c.current && l(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ v.createElement(
      od,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${yo(n)}px`
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
          c.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: c.current.clientWidth,
              paddingStart: qr(a.paddingLeft),
              paddingEnd: qr(a.paddingRight)
            }
          });
        }
      }
    );
  }
), Sb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, l] = v.useState(), c = V(null), u = Ie(t, c, s.onScrollbarYChange);
    return W(() => {
      c.current && l(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ v.createElement(
      od,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${yo(n)}px`,
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
          c.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: c.current.clientHeight,
              paddingStart: qr(a.paddingTop),
              paddingEnd: qr(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), $s = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = cr(), i = tt(), s = V(null), a = V(0), [l, c] = U({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = ed(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: c,
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
  }, f = (p, m) => yb(p, a.current, l, m);
  return n === "horizontal" ? /* @__PURE__ */ v.createElement(
    wb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = Vl(p, l, o);
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
    Sb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = Vl(p, l);
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
    const n = tt(), { forceMount: r, ...o } = e, [i, s] = U(!1), a = e.orientation === "horizontal", l = ho(() => {
      if (n.viewport) {
        const c = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? c : u);
      }
    }, 10);
    return bn(n.viewport, l), bn(n.content, l), r || i ? /* @__PURE__ */ v.createElement(
      $s,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), xb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), [i, s] = U(!1);
    return W(() => {
      const { scrollArea: a } = o;
      let l = 0;
      if (a) {
        const c = () => {
          window.clearTimeout(l), s(!0);
        }, u = () => {
          l = window.setTimeout(() => s(!1), o.scrollHideDelay);
        };
        return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", u), () => {
          window.clearTimeout(l), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", u);
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
), Cb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), i = e.orientation === "horizontal", [s, a] = U("hidden"), l = ho(() => a("idle"), 100);
    return W(() => {
      if (s === "idle") {
        const c = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(c);
      }
    }, [s, o.scrollHideDelay]), W(() => {
      const { viewport: c } = o, u = i ? "scrollLeft" : "scrollTop";
      if (c) {
        let d = c[u];
        const f = () => {
          const p = c[u];
          d !== p && (a("scrolling"), l()), d = p;
        };
        return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
      }
    }, [o.viewport, i, l]), n || s !== "hidden" ? /* @__PURE__ */ v.createElement(
      $s,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: tn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: tn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), zl = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return v.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ v.createElement(xb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ v.createElement(Cb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ v.createElement(id, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ v.createElement($s, { ...r, ref: t }) : null;
  }
);
function Eb(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Pb = ie((e, t) => {
  const { style: n, ...r } = e, o = tt(), i = rd(), { onThumbPositionChange: s } = i, a = Ie(t, (u) => i.onThumbChange(u)), l = V(), c = ho(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (c(), !l.current) {
          const f = Eb(u, s);
          l.current = f, s();
        }
      };
      return s(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, c, s]), /* @__PURE__ */ v.createElement(
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
}), Wl = v.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = rd();
    return n || o.hasThumb ? /* @__PURE__ */ v.createElement(Pb, { ref: t, ...r }) : null;
  }
), sd = ie(
  ({ children: e, style: t, ...n }, r) => {
    const o = tt(), i = Ie(r, o.onViewportChange);
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
}, Db = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), ur = q((e, t) => {
  const n = j("ScrollArea", ad, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    scrollbarSize: l,
    vars: c,
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
    vars: c,
    varsResolver: Db
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
      zl,
      {
        ...x("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1)
      },
      /* @__PURE__ */ v.createElement(Wl, { ...x("thumb") })
    ),
    (w === "xy" || w === "y") && /* @__PURE__ */ v.createElement(
      zl,
      {
        ...x("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1)
      },
      /* @__PURE__ */ v.createElement(Wl, { ...x("thumb") })
    ),
    /* @__PURE__ */ v.createElement(
      gb,
      {
        ...x("corner"),
        "data-hovered": b || void 0,
        "data-hidden": u === "never" || void 0
      }
    )
  );
});
ur.displayName = "@mantine/core/ScrollArea";
const Ts = q((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: a,
    dir: l,
    offsetScrollbars: c,
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
    ur,
    {
      classNames: r,
      styles: o,
      scrollHideDelay: s,
      scrollbarSize: i,
      type: a,
      dir: l,
      offsetScrollbars: c,
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
ur.classes = Ns;
Ts.displayName = "@mantine/core/ScrollAreaAutosize";
Ts.classes = Ns;
ur.Autosize = Ts;
var ld = { root: "m-87cf2631" };
const Rb = {
  __staticSelector: "UnstyledButton"
}, cn = Ut(
  (e, t) => {
    const n = j("UnstyledButton", Rb, e), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: l,
      style: c,
      ...u
    } = n, d = Q({
      name: i,
      props: n,
      classes: ld,
      className: r,
      style: c,
      classNames: a,
      styles: l,
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
cn.classes = ld;
cn.displayName = "@mantine/core/UnstyledButton";
const ct = Math.min, we = Math.max, Kr = Math.round, Pr = Math.floor, Ft = (e) => ({
  x: e,
  y: e
}), Ib = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ab = {
  start: "end",
  end: "start"
};
function es(e, t, n) {
  return we(e, ct(t, n));
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ut(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function Ls(e) {
  return e === "x" ? "y" : "x";
}
function Ms(e) {
  return e === "y" ? "height" : "width";
}
function un(e) {
  return ["top", "bottom"].includes(ut(e)) ? "y" : "x";
}
function _s(e) {
  return Ls(un(e));
}
function Ob(e, t, n) {
  n === void 0 && (n = !1);
  const r = In(e), o = _s(e), i = Ms(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Yr(s)), [s, Yr(s)];
}
function $b(e) {
  const t = Yr(e);
  return [ts(e), t, ts(t)];
}
function ts(e) {
  return e.replace(/start|end/g, (t) => Ab[t]);
}
function Nb(e, t, n) {
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
function Tb(e, t, n, r) {
  const o = In(e);
  let i = Nb(ut(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ts)))), i;
}
function Yr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ib[t]);
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
function ks(e) {
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
function Gl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = un(t), s = _s(t), a = Ms(s), l = ut(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let p;
  switch (l) {
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
  switch (In(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const Mb = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Gl(c, r, l), f = r, p = {}, m = 0;
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
      rects: c,
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
      m++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (c = x.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : x.rects), {
        x: u,
        y: d
      } = Gl(c, f, l)), g = -1;
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
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Ct(t, e), m = ks(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], w = yn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
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
    strategy: l
  }) : S);
  return {
    top: (w.top - x.top + m.top) / y.y,
    bottom: (x.bottom - w.bottom + m.bottom) / y.y,
    left: (w.left - x.left + m.left) / y.x,
    right: (x.right - w.right + m.right) / y.x
  };
}
const Hl = (e) => ({
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
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Ct(e, t) || {};
    if (c == null)
      return {};
    const d = ks(u), f = {
      x: n,
      y: r
    }, p = _s(o), m = Ms(p), g = await s.getDimensions(c), h = p === "y", w = h ? "top" : "left", S = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", y = i.reference[m] + i.reference[p] - f[p] - i.floating[m], x = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = C ? C[b] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[b] || i.floating[m]);
    const E = y / 2 - x / 2, O = P / 2 - g[m] / 2 - 1, T = ct(d[w], O), N = ct(d[S], O), M = T, _ = P - g[m] - N, A = P / 2 - g[m] / 2 + E, L = es(M, A, _), I = !l.arrow && In(o) != null && A != L && i.reference[m] / 2 - (A < M ? T : N) - g[m] / 2 < 0, B = I ? A < M ? A - M : A - _ : 0;
    return {
      [p]: f[p] + B,
      data: {
        [p]: L,
        centerOffset: A - L - B,
        ...I && {
          alignmentOffset: B
        }
      },
      reset: I
    };
  }
}), cd = function(e) {
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
        platform: l,
        elements: c
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
      const w = ut(o), S = ut(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), y = f || (S || !g ? [Yr(a)] : $b(a));
      !f && m !== "none" && y.push(...Tb(a, g, m, b));
      const x = [a, ...y], C = await Fs(t, h), P = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(C[w]), d) {
        const M = Ob(o, s, b);
        P.push(C[M[0]], C[M[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((M) => M <= 0)) {
        var O, T;
        const M = (((O = i.flip) == null ? void 0 : O.index) || 0) + 1, _ = x[M];
        if (_)
          return {
            data: {
              index: M,
              overflows: E
            },
            reset: {
              placement: _
            }
          };
        let A = (T = E.filter((L) => L.overflows[0] <= 0).sort((L, I) => L.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var N;
              const L = (N = E.map((I) => [I.placement, I.overflows.filter((B) => B > 0).reduce((B, $) => B + $, 0)]).sort((I, B) => I[1] - B[1])[0]) == null ? void 0 : N[0];
              L && (A = L);
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
  const t = ct(...e.map((i) => i.left)), n = ct(...e.map((i) => i.top)), r = we(...e.map((i) => i.right)), o = we(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function _b(e) {
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
        x: l,
        y: c
      } = Ct(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = _b(u), f = yn(ud(u)), p = ks(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && l != null && c != null)
          return d.find((h) => l > h.left - p.left && l < h.right + p.right && c > h.top - p.top && c < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (un(n) === "y") {
            const T = d[0], N = d[d.length - 1], M = ut(n) === "top", _ = T.top, A = N.bottom, L = M ? T.left : N.left, I = M ? T.right : N.right, B = I - L, $ = A - _;
            return {
              top: _,
              bottom: A,
              left: L,
              right: I,
              width: B,
              height: $,
              x: L,
              y: _
            };
          }
          const h = ut(n) === "left", w = we(...d.map((T) => T.right)), S = ct(...d.map((T) => T.left)), b = d.filter((T) => h ? T.left === S : T.right === w), y = b[0].top, x = b[b.length - 1].bottom, C = S, P = w, E = P - C, O = x - y;
          return {
            top: y,
            bottom: x,
            left: C,
            right: P,
            width: E,
            height: O,
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
async function kb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ut(n), a = In(n), l = un(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = Ct(t, e);
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
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), l ? {
    x: p * u,
    y: f * c
  } : {
    x: f * c,
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
      } = t, l = await kb(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
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
        ...l
      } = Ct(e, t), c = {
        x: n,
        y: r
      }, u = await Fs(t, l), d = un(ut(o)), f = Ls(d);
      let p = c[f], m = c[d];
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
}, Fb = function(e) {
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
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Ct(e, t), u = {
        x: n,
        y: r
      }, d = un(o), f = Ls(d);
      let p = u[f], m = u[d];
      const g = Ct(a, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const b = f === "y" ? "height" : "width", y = i.reference[f] - i.floating[b] + h.mainAxis, x = i.reference[f] + i.reference[b] - h.mainAxis;
        p < y ? p = y : p > x && (p = x);
      }
      if (c) {
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
}, Bb = function(e) {
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
      } = Ct(e, t), l = await Fs(t, a), c = ut(n), u = In(n), d = un(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      c === "top" || c === "bottom" ? (m = c, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = c, m = u === "end" ? "top" : "bottom");
      const h = p - l[m], w = f - l[g], S = !t.middlewareData.shift;
      let b = h, y = w;
      if (d) {
        const C = f - l.left - l.right;
        y = u || S ? ct(w, C) : C;
      } else {
        const C = p - l.top - l.bottom;
        b = u || S ? ct(h, C) : C;
      }
      if (S && !u) {
        const C = we(l.left, 0), P = we(l.right, 0), E = we(l.top, 0), O = we(l.bottom, 0);
        d ? y = f - 2 * (C !== 0 || P !== 0 ? C + P : we(l.left, l.right)) : b = p - 2 * (E !== 0 || O !== 0 ? E + O : we(l.top, l.bottom));
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
function Ul(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof je(e).ShadowRoot;
}
function dr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function jb(e) {
  return ["table", "td", "th"].includes(Bt(e));
}
function js(e) {
  const t = Vs(), n = Ze(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Vb(e) {
  let t = vn(e);
  for (; ht(t) && !vo(t); ) {
    if (js(t))
      return t;
    t = vn(t);
  }
  return null;
}
function Vs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vo(e) {
  return ["html", "body", "#document"].includes(Bt(e));
}
function Ze(e) {
  return je(e).getComputedStyle(e);
}
function wo(e) {
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
    Ul(e) && e.host || // Fallback.
    Dt(e)
  );
  return Ul(t) ? t.host : t;
}
function md(e) {
  const t = vn(e);
  return vo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ht(t) && dr(t) ? t : md(t);
}
function wt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = md(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = je(o);
  return i ? t.concat(s, s.visualViewport || [], dr(o) ? o : [], s.frameElement && n ? wt(s.frameElement) : []) : t.concat(o, wt(o, [], n));
}
function gd(e) {
  const t = Ze(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ht(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Kr(n) !== i || Kr(r) !== s;
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
  let s = (i ? Kr(n.width) : n.width) / r, a = (i ? Kr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const zb = /* @__PURE__ */ Ft(0);
function hd(e) {
  const t = je(e);
  return !Vs() || !t.visualViewport ? zb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== je(e) ? !1 : t;
}
function rn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zs(e);
  let s = Ft(1);
  t && (r ? Et(r) && (s = hn(r)) : s = hn(e));
  const a = Wb(i, n, r) ? hd(i) : Ft(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = je(i), p = r && Et(r) ? je(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = hn(m), h = m.getBoundingClientRect(), w = Ze(m), S = h.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, b = h.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, d *= g.y, l += S, c += b, m = je(m).frameElement;
    }
  }
  return yn({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Gb(e) {
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
  const l = Ft(0);
  if ((o || !o && r !== "fixed") && ((Bt(n) !== "body" || dr(i)) && (s = wo(n)), ht(n))) {
    const c = rn(n);
    a = hn(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + l.x,
    y: t.y * a.y - s.scrollTop * a.y + l.y
  };
}
function Hb(e) {
  return Array.from(e.getClientRects());
}
function bd(e) {
  return rn(Dt(e)).left + wo(e).scrollLeft;
}
function Ub(e) {
  const t = Dt(e), n = wo(e), r = e.ownerDocument.body, o = we(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = we(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bd(e);
  const a = -n.scrollTop;
  return Ze(r).direction === "rtl" && (s += we(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function qb(e, t) {
  const n = je(e), r = Dt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Vs();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Kb(e, t) {
  const n = rn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = ht(e) ? hn(e) : Ft(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function ql(e, t, n) {
  let r;
  if (t === "viewport")
    r = qb(e, n);
  else if (t === "document")
    r = Ub(Dt(e));
  else if (Et(t))
    r = Kb(t, n);
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
  return n === t || !Et(n) || vo(n) ? !1 : Ze(n).position === "fixed" || yd(n, t);
}
function Yb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = wt(e, [], !1).filter((a) => Et(a) && Bt(a) !== "body"), o = null;
  const i = Ze(e).position === "fixed";
  let s = i ? vn(e) : e;
  for (; Et(s) && !vo(s); ) {
    const a = Ze(s), l = js(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || dr(s) && !l && yd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = vn(s);
  }
  return t.set(e, r), r;
}
function Xb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Yb(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const d = ql(t, u, o);
    return c.top = we(d.top, c.top), c.right = ct(d.right, c.right), c.bottom = ct(d.bottom, c.bottom), c.left = we(d.left, c.left), c;
  }, ql(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Jb(e) {
  return gd(e);
}
function Qb(e, t, n) {
  const r = ht(t), o = Dt(t), i = n === "fixed", s = rn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ft(0);
  if (r || !r && !i)
    if ((Bt(t) !== "body" || dr(o)) && (a = wo(t)), r) {
      const c = rn(t, !0, i, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      o && (l.x = bd(o));
  return {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Kl(e, t) {
  return !ht(e) || Ze(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function vd(e, t) {
  const n = je(e);
  if (!ht(e))
    return n;
  let r = Kl(e, t);
  for (; r && jb(r) && Ze(r).position === "static"; )
    r = Kl(r, t);
  return r && (Bt(r) === "html" || Bt(r) === "body" && Ze(r).position === "static" && !js(r)) ? n : r || Vb(e) || n;
}
const Zb = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || vd, i = this.getDimensions;
  return {
    reference: Qb(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function ey(e) {
  return Ze(e).direction === "rtl";
}
const ty = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gb,
  getDocumentElement: Dt,
  getClippingRect: Xb,
  getOffsetParent: vd,
  getElementRects: Zb,
  getClientRects: Hb,
  getDimensions: Jb,
  getScale: hn,
  isElement: Et,
  isRTL: ey
};
function ny(e, t) {
  let n = null, r;
  const o = Dt(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: c,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (a || t(), !d || !f)
      return;
    const p = Pr(u), m = Pr(o.clientWidth - (c + d)), g = Pr(o.clientHeight - (u + f)), h = Pr(c), S = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: we(0, ct(1, l)) || 1
    };
    let b = !0;
    function y(x) {
      const C = x[0].intersectionRatio;
      if (C !== l) {
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
function ry(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = zs(e), u = o || i ? [...c ? wt(c) : [], ...wt(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = c && a ? ny(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [S] = w;
    S && S.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let m, g = l ? rn(e) : null;
  l && h();
  function h() {
    const w = rn(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const oy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ty,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Mb(e, t, {
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
      return r && t(r) ? r.current != null ? Hl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Hl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Tr = typeof document < "u" ? fo : W;
function Xr(e, t) {
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
        if (!Xr(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Xr(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Sd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yl(e, t) {
  const n = Sd(e);
  return Math.round(t * n) / n;
}
function Xl(e) {
  const t = R.useRef(e);
  return Tr(() => {
    t.current = e;
  }), t;
}
function iy(e) {
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
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = R.useState(r);
  Xr(f, r) || p(r);
  const [m, g] = R.useState(null), [h, w] = R.useState(null), S = R.useCallback((I) => {
    I != C.current && (C.current = I, g(I));
  }, [g]), b = R.useCallback((I) => {
    I !== P.current && (P.current = I, w(I));
  }, [w]), y = i || m, x = s || h, C = R.useRef(null), P = R.useRef(null), E = R.useRef(u), O = Xl(l), T = Xl(o), N = R.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: f
    };
    T.current && (I.platform = T.current), oy(C.current, P.current, I).then((B) => {
      const $ = {
        ...B,
        isPositioned: !0
      };
      M.current && !Xr(E.current, $) && (E.current = $, Cm.flushSync(() => {
        d($);
      }));
    });
  }, [f, t, n, T]);
  Tr(() => {
    c === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [c]);
  const M = R.useRef(!1);
  Tr(() => (M.current = !0, () => {
    M.current = !1;
  }), []), Tr(() => {
    if (y && (C.current = y), x && (P.current = x), y && x) {
      if (O.current)
        return O.current(y, x, N);
      N();
    }
  }, [y, x, N, O]);
  const _ = R.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: S,
    setFloating: b
  }), [S, b]), A = R.useMemo(() => ({
    reference: y,
    floating: x
  }), [y, x]), L = R.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return I;
    const B = Yl(A.floating, u.x), $ = Yl(A.floating, u.y);
    return a ? {
      ...I,
      transform: "translate(" + B + "px, " + $ + "px)",
      ...Sd(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: B,
      top: $
    };
  }, [n, a, A.floating, u.x, u.y]);
  return R.useMemo(() => ({
    ...u,
    update: N,
    refs: _,
    elements: A,
    floatingStyles: L
  }), [u, N, _, A, L]);
}
var St = typeof document < "u" ? fo : W;
let Ei = !1, sy = 0;
const Jl = () => "floating-ui-" + sy++;
function ay() {
  const [e, t] = R.useState(() => Ei ? Jl() : void 0);
  return St(() => {
    e == null && t(Jl());
  }, []), R.useEffect(() => {
    Ei || (Ei = !0);
  }, []), e;
}
const ly = R[/* @__PURE__ */ "useId".toString()], xd = ly || ay;
function cy() {
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
const uy = /* @__PURE__ */ R.createContext(null), dy = /* @__PURE__ */ R.createContext(null), Cd = () => {
  var e;
  return ((e = R.useContext(uy)) == null ? void 0 : e.id) || null;
}, Ws = () => R.useContext(dy);
function Ot(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function fy() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function py() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function So(e) {
  return Ot(e).defaultView || window;
}
function mt(e) {
  return e ? e instanceof Element || e instanceof So(e).Element : !1;
}
function Ed(e) {
  return e ? e instanceof HTMLElement || e instanceof So(e).HTMLElement : !1;
}
function my(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = So(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gy(e) {
  if (e.mozInputSource === 0 && e.isTrusted)
    return !0;
  const t = /Android/i;
  return (t.test(fy()) || t.test(py())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function hy(e) {
  return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Pd(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function by(e) {
  return "nativeEvent" in e;
}
function ns(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && my(n)) {
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
function Ql(e) {
  const t = V(e);
  return St(() => {
    t.current = e;
  }), t;
}
const Zl = /* @__PURE__ */ Dd("safe-polygon");
function Lr(e, t, n) {
  return n && !Pd(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function yy(e, t) {
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
    refs: l
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: d = null,
    mouseOnly: f = !1,
    restMs: p = 0,
    move: m = !0
  } = t, g = Ws(), h = Cd(), w = Ql(d), S = Ql(u), b = R.useRef(), y = R.useRef(), x = R.useRef(), C = R.useRef(), P = R.useRef(!0), E = R.useRef(!1), O = R.useRef(() => {
  }), T = R.useCallback(() => {
    var A;
    const L = (A = o.current.openEvent) == null ? void 0 : A.type;
    return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
  }, [o]);
  R.useEffect(() => {
    if (!c)
      return;
    function A() {
      clearTimeout(y.current), clearTimeout(C.current), P.current = !0;
    }
    return i.on("dismiss", A), () => {
      i.off("dismiss", A);
    };
  }, [c, i]), R.useEffect(() => {
    if (!c || !w.current || !n)
      return;
    function A(I) {
      T() && r(!1, I);
    }
    const L = Ot(a).documentElement;
    return L.addEventListener("mouseleave", A), () => {
      L.removeEventListener("mouseleave", A);
    };
  }, [a, n, r, c, w, o, T]);
  const N = R.useCallback(function(A, L) {
    L === void 0 && (L = !0);
    const I = Lr(S.current, "close", b.current);
    I && !x.current ? (clearTimeout(y.current), y.current = setTimeout(() => r(!1, A), I)) : L && (clearTimeout(y.current), r(!1, A));
  }, [S, r]), M = R.useCallback(() => {
    O.current(), x.current = void 0;
  }, []), _ = R.useCallback(() => {
    if (E.current) {
      const A = Ot(l.floating.current).body;
      A.style.pointerEvents = "", A.removeAttribute(Zl), E.current = !1;
    }
  }, [l]);
  return R.useEffect(() => {
    if (!c)
      return;
    function A() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function L($) {
      if (clearTimeout(y.current), P.current = !1, f && !Pd(b.current) || p > 0 && Lr(S.current, "open") === 0)
        return;
      const H = Lr(S.current, "open", b.current);
      H ? y.current = setTimeout(() => {
        r(!0, $);
      }, H) : r(!0, $);
    }
    function I($) {
      if (A())
        return;
      O.current();
      const H = Ot(a);
      if (clearTimeout(C.current), w.current) {
        n || clearTimeout(y.current), x.current = w.current({
          ...e,
          tree: g,
          x: $.clientX,
          y: $.clientY,
          onClose() {
            _(), M(), N($);
          }
        });
        const ne = x.current;
        H.addEventListener("mousemove", ne), O.current = () => {
          H.removeEventListener("mousemove", ne);
        };
        return;
      }
      (b.current === "touch" ? !ns(a, $.relatedTarget) : !0) && N($);
    }
    function B($) {
      A() || w.current == null || w.current({
        ...e,
        tree: g,
        x: $.clientX,
        y: $.clientY,
        onClose() {
          _(), M(), N($);
        }
      })($);
    }
    if (mt(s)) {
      const $ = s;
      return n && $.addEventListener("mouseleave", B), a == null || a.addEventListener("mouseleave", B), m && $.addEventListener("mousemove", L, {
        once: !0
      }), $.addEventListener("mouseenter", L), $.addEventListener("mouseleave", I), () => {
        n && $.removeEventListener("mouseleave", B), a == null || a.removeEventListener("mouseleave", B), m && $.removeEventListener("mousemove", L), $.removeEventListener("mouseenter", L), $.removeEventListener("mouseleave", I);
      };
    }
  }, [s, a, c, e, f, p, m, N, M, _, r, n, g, S, w, o]), St(() => {
    var A;
    if (c && n && (A = w.current) != null && A.__options.blockPointerEvents && T()) {
      const B = Ot(a).body;
      if (B.setAttribute(Zl, ""), B.style.pointerEvents = "none", E.current = !0, mt(s) && a) {
        var L, I;
        const $ = s, H = g == null || (L = g.nodesRef.current.find((X) => X.id === h)) == null || (I = L.context) == null ? void 0 : I.elements.floating;
        return H && (H.style.pointerEvents = ""), $.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          $.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, h, a, s, g, w, o, T]), St(() => {
    n || (b.current = void 0, M(), _());
  }, [n, M, _]), R.useEffect(() => () => {
    M(), clearTimeout(y.current), clearTimeout(C.current), _();
  }, [c, M, _]), R.useMemo(() => {
    if (!c)
      return {};
    function A(L) {
      b.current = L.pointerType;
    }
    return {
      reference: {
        onPointerDown: A,
        onPointerEnter: A,
        onMouseMove(L) {
          n || p === 0 || (clearTimeout(C.current), C.current = setTimeout(() => {
            P.current || r(!0, L.nativeEvent);
          }, p));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(y.current);
        },
        onMouseLeave(L) {
          i.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: !1
            }
          }), N(L.nativeEvent, !1);
        }
      }
    };
  }, [i, c, p, n, r, N]);
}
const Rd = /* @__PURE__ */ R.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), Id = () => R.useContext(Rd), vy = (e) => {
  let {
    children: t,
    delay: n,
    timeoutMs: r = 0
  } = e;
  const [o, i] = R.useReducer((l, c) => ({
    ...l,
    ...c
  }), {
    delay: n,
    timeoutMs: r,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), s = R.useRef(null), a = R.useCallback((l) => {
    i({
      currentId: l
    });
  }, []);
  return St(() => {
    o.currentId ? s.current === null ? s.current = o.currentId : i({
      isInstantPhase: !0
    }) : (i({
      isInstantPhase: !1
    }), s.current = null);
  }, [o.currentId]), /* @__PURE__ */ R.createElement(Rd.Provider, {
    value: R.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, wy = (e, t) => {
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
    setState: l,
    timeoutMs: c
  } = Id();
  St(() => {
    i && (l({
      delay: {
        open: 1,
        close: Lr(a, "close")
      }
    }), i !== o && r(!1));
  }, [o, r, l, i, a]), St(() => {
    function u() {
      r(!1), l({
        delay: a,
        currentId: null
      });
    }
    if (!n && i === o)
      if (c) {
        const d = window.setTimeout(u, c);
        return () => {
          clearTimeout(d);
        };
      } else
        u();
  }, [n, l, i, o, r, a, c]), St(() => {
    n && s(o);
  }, [n, s, o]);
};
function Sy(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Pi(e, t) {
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
function xy(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Cy = R[/* @__PURE__ */ "useInsertionEffect".toString()], Ey = Cy || ((e) => e());
function Mr(e) {
  const t = R.useRef(() => {
  });
  return Ey(() => {
    t.current = e;
  }), R.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function _r(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
const Py = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Dy = {
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
function Iy(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    nodeId: i,
    elements: {
      reference: s,
      domReference: a,
      floating: l
    },
    dataRef: c
  } = e, {
    enabled: u = !0,
    escapeKey: d = !0,
    outsidePress: f = !0,
    outsidePressEvent: p = "pointerdown",
    referencePress: m = !1,
    referencePressEvent: g = "pointerdown",
    ancestorScroll: h = !1,
    bubbles: w
  } = t, S = Ws(), b = Cd() != null, y = Mr(typeof f == "function" ? f : () => !1), x = typeof f == "function" ? y : f, C = R.useRef(!1), {
    escapeKeyBubbles: P,
    outsidePressBubbles: E
  } = Ry(w), O = Mr((N) => {
    if (!n || !u || !d || N.key !== "Escape")
      return;
    const M = S ? Pi(S.nodesRef.current, i) : [];
    if (!P && (N.stopPropagation(), M.length > 0)) {
      let _ = !0;
      if (M.forEach((A) => {
        var L;
        if ((L = A.context) != null && L.open && !A.context.dataRef.current.__escapeKeyBubbles) {
          _ = !1;
          return;
        }
      }), !_)
        return;
    }
    o.emit("dismiss", {
      type: "escapeKey",
      data: {
        returnFocus: {
          preventScroll: !1
        }
      }
    }), r(!1, by(N) ? N.nativeEvent : N);
  }), T = Mr((N) => {
    const M = C.current;
    if (C.current = !1, M || typeof x == "function" && !x(N))
      return;
    const _ = xy(N);
    if (Ed(_) && l) {
      const I = _.clientWidth > 0 && _.scrollWidth > _.clientWidth, B = _.clientHeight > 0 && _.scrollHeight > _.clientHeight;
      let $ = B && N.offsetX > _.clientWidth;
      if (B && So(l).getComputedStyle(_).direction === "rtl" && ($ = N.offsetX <= _.offsetWidth - _.clientWidth), $ || I && N.offsetY > _.clientHeight)
        return;
    }
    const A = S && Pi(S.nodesRef.current, i).some((I) => {
      var B;
      return _r(N, (B = I.context) == null ? void 0 : B.elements.floating);
    });
    if (_r(N, l) || _r(N, a) || A)
      return;
    const L = S ? Pi(S.nodesRef.current, i) : [];
    if (L.length > 0) {
      let I = !0;
      if (L.forEach((B) => {
        var $;
        if (($ = B.context) != null && $.open && !B.context.dataRef.current.__outsidePressBubbles) {
          I = !1;
          return;
        }
      }), !I)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: b ? {
          preventScroll: !0
        } : gy(N) || hy(N)
      }
    }), r(!1, N);
  });
  return R.useEffect(() => {
    if (!n || !u)
      return;
    c.current.__escapeKeyBubbles = P, c.current.__outsidePressBubbles = E;
    function N(A) {
      r(!1, A);
    }
    const M = Ot(l);
    d && M.addEventListener("keydown", O), x && M.addEventListener(p, T);
    let _ = [];
    return h && (mt(a) && (_ = wt(a)), mt(l) && (_ = _.concat(wt(l))), !mt(s) && s && s.contextElement && (_ = _.concat(wt(s.contextElement)))), _ = _.filter((A) => {
      var L;
      return A !== ((L = M.defaultView) == null ? void 0 : L.visualViewport);
    }), _.forEach((A) => {
      A.addEventListener("scroll", N, {
        passive: !0
      });
    }), () => {
      d && M.removeEventListener("keydown", O), x && M.removeEventListener(p, T), _.forEach((A) => {
        A.removeEventListener("scroll", N);
      });
    };
  }, [c, l, a, s, d, x, p, n, r, h, u, P, E, O, T]), R.useEffect(() => {
    C.current = !1;
  }, [x, p]), R.useMemo(() => u ? {
    reference: {
      onKeyDown: O,
      [Py[g]]: (N) => {
        m && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, N.nativeEvent));
      }
    },
    floating: {
      onKeyDown: O,
      [Dy[p]]: () => {
        C.current = !0;
      }
    }
  } : {}, [u, o, m, p, g, r, O]);
}
function Gs(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = R.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, l = iy(e), c = Ws(), u = Mr((y, x) => {
    y && (f.current.openEvent = x), r == null || r(y, x);
  }), d = R.useRef(null), f = R.useRef({}), p = R.useState(() => cy())[0], m = xd(), g = R.useCallback((y) => {
    const x = mt(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    l.refs.setReference(x);
  }, [l.refs]), h = R.useCallback((y) => {
    (mt(y) || y === null) && (d.current = y, s(y)), (mt(l.refs.reference.current) || l.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !mt(y)) && l.refs.setReference(y);
  }, [l.refs]), w = R.useMemo(() => ({
    ...l.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [l.refs, h, g]), S = R.useMemo(() => ({
    ...l.elements,
    domReference: a
  }), [l.elements, a]), b = R.useMemo(() => ({
    ...l,
    refs: w,
    elements: S,
    dataRef: f,
    nodeId: o,
    floatingId: m,
    events: p,
    open: n,
    onOpenChange: u
  }), [l, o, m, p, n, u, w, S]);
  return St(() => {
    const y = c == null ? void 0 : c.nodesRef.current.find((x) => x.id === o);
    y && (y.context = b);
  }), R.useMemo(() => ({
    ...l,
    context: b,
    refs: w,
    elements: S
  }), [l, w, S, b]);
}
function Ay(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    refs: s,
    elements: {
      floating: a,
      domReference: l
    }
  } = e, {
    enabled: c = !0,
    keyboardOnly: u = !0
  } = t, d = R.useRef(""), f = R.useRef(!1), p = R.useRef();
  return R.useEffect(() => {
    if (!c)
      return;
    const g = Ot(a).defaultView || window;
    function h() {
      !n && Ed(l) && l === Sy(Ot(l)) && (f.current = !0);
    }
    return g.addEventListener("blur", h), () => {
      g.removeEventListener("blur", h);
    };
  }, [a, l, n, c]), R.useEffect(() => {
    if (!c)
      return;
    function m(g) {
      (g.type === "referencePress" || g.type === "escapeKey") && (f.current = !0);
    }
    return i.on("dismiss", m), () => {
      i.off("dismiss", m);
    };
  }, [i, c]), R.useEffect(() => () => {
    clearTimeout(p.current);
  }, []), R.useMemo(() => c ? {
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
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && _r(o.current.openEvent, l) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = mt(g) && g.hasAttribute(Dd("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          ns(s.floating.current, g) || ns(l, g) || h || r(!1, m.nativeEvent);
        });
      }
    }
  } : {}, [c, u, l, s, o, r]);
}
function Di(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...e,
    ...t.map((o) => o ? o[n] : null).concat(e).reduce((o, i) => (i && Object.entries(i).forEach((s) => {
      let [a, l] = s;
      if (a.indexOf("on") === 0) {
        if (r.has(a) || r.set(a, []), typeof l == "function") {
          var c;
          (c = r.get(a)) == null || c.push(l), o[a] = function() {
            for (var u, d = arguments.length, f = new Array(d), p = 0; p < d; p++)
              f[p] = arguments[p];
            return (u = r.get(a)) == null ? void 0 : u.map((m) => m(...f)).find((m) => m !== void 0);
          };
        }
      } else
        o[a] = l;
    }), o), {})
  };
}
function Oy(e) {
  e === void 0 && (e = []);
  const t = e, n = R.useCallback(
    (i) => Di(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = R.useCallback(
    (i) => Di(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = R.useCallback(
    (i) => Di(i, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((i) => i == null ? void 0 : i.item)
  );
  return R.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
function $y(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, s = xd();
  return R.useMemo(() => {
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
function ec(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function tc(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const Ny = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Ty({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: i,
  arrowY: s,
  dir: a
}) {
  const [l, c = "center"] = e.split("-"), u = {
    width: D(t),
    height: D(t),
    transform: "rotate(45deg)",
    position: "absolute",
    [Ny[l]]: D(r)
  }, d = D(-t / 2);
  return l === "left" ? {
    ...u,
    ...ec(c, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : l === "right" ? {
    ...u,
    ...ec(c, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : l === "top" ? {
    ...u,
    ...tc(c, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : l === "bottom" ? {
    ...u,
    ...tc(c, i, n, o, a),
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
    style: l,
    ...c
  }, u) => {
    const { dir: d } = cr();
    return i ? /* @__PURE__ */ v.createElement(
      "div",
      {
        ...c,
        ref: u,
        style: {
          ...l,
          ...Ty({
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
const [Ly, Od] = Gt(
  "Popover component was not found in the tree"
);
function $d({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = ah(t), o = Ie(r, e == null ? void 0 : e.ref);
  return Wt(e) ? ln(e, { [n]: o }) : e;
}
$d.displayName = "@mantine/core/FocusTrap";
function My(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const _y = {}, Nd = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", _y, e), [i, s] = U(!1), a = V(null);
  return lr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : My(o), Fu(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : Em(/* @__PURE__ */ v.createElement(v.Fragment, null, n), a.current);
});
Nd.displayName = "@mantine/core/Portal";
function xo({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ v.createElement(Nd, { ...n }, t) : /* @__PURE__ */ v.createElement(v.Fragment, null, t);
}
xo.displayName = "@mantine/core/OptionalPortal";
const kn = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${D(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Dr = {
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
}, nc = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function ky({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in Dr ? {
    transitionProperty: Dr[e].transitionProperty,
    ...o,
    ...Dr[e].common,
    ...Dr[e][nc[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[nc[t]]
  };
}
function Fy({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a
}) {
  const l = vt(), c = ju(), u = l.respectReducedMotion ? c : !1, [d, f] = U(u ? 0 : e), [p, m] = U(r ? "entered" : "exited"), g = V(-1), h = (w) => {
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
  return Mt(() => {
    h(r);
  }, [r]), W(() => () => window.clearTimeout(g.current), []), {
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
  onEntered: l,
  onEnter: c,
  onExited: u
}) {
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = Fy({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: a,
    onEntered: l,
    onEnter: c,
    onExited: u
  });
  return d === 0 ? o ? /* @__PURE__ */ v.createElement(v.Fragment, null, i({})) : e ? i({ display: "none" }) : null : f === "exited" ? e ? i({ display: "none" }) : null : /* @__PURE__ */ v.createElement(v.Fragment, null, i(
    ky({
      transition: t,
      duration: d,
      state: f,
      timingFunction: p
    })
  ));
}
Us.displayName = "@mantine/core/Transition";
var Td = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const By = {}, qs = q((e, t) => {
  var h, w, S, b;
  const n = j("PopoverDropdown", By, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: l,
    classNames: c,
    styles: u,
    ...d
  } = n, f = Od(), p = eh({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Ie(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ v.createElement(xo, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ v.createElement(
    Us,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((S = f.transitionProps) == null ? void 0 : S.exitDuration) == "number" ? f.transitionProps.exitDuration : (b = f.transitionProps) == null ? void 0 : b.duration
    },
    (y) => /* @__PURE__ */ v.createElement($d, { active: f.trapFocus }, /* @__PURE__ */ v.createElement(
      G,
      {
        ...m,
        ...d,
        variant: l,
        ref: g,
        onKeyDownCapture: Hg(f.onClose, {
          active: f.closeOnEscape,
          onTrigger: p,
          onKeyDown: a
        }),
        "data-position": f.placement,
        ...f.getStyles("dropdown", {
          className: r,
          props: n,
          classNames: c,
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
            classNames: c,
            styles: u
          })
        }
      )
    ))
  ));
});
qs.classes = Td;
qs.displayName = "@mantine/core/PopoverDropdown";
const jy = {
  refProp: "ref",
  popupType: "dialog"
}, Ld = q((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    jy,
    e
  );
  if (!Wt(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Od(), l = Ie(a.reference, n.ref, t), c = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return ln(n, {
    ...s,
    ...c,
    ...a.targetProps,
    className: yt(a.targetProps.className, s.className, n.props.className),
    [r]: l,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
Ld.displayName = "@mantine/core/PopoverTarget";
function Md({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = U(0);
  W(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return ry(
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
  ]), Mt(() => {
    t.update();
  }, r), Mt(() => {
    i((s) => s + 1);
  }, [e]);
}
function Vy(e, t) {
  var r, o, i, s;
  const n = [fd(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(Bs({ limiter: Fb() })), (o = e.middlewares) != null && o.flip && n.push(cd()), (i = e.middlewares) != null && i.inline && n.push(dd()), n.push(wd({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    Bb({
      apply({ rects: a, availableWidth: l, availableHeight: c }) {
        var f, p;
        const d = ((f = t().refs.floating.current) == null ? void 0 : f.style) ?? {};
        (p = e.middlewares) != null && p.size && Object.assign(d, {
          maxWidth: `${l}px`,
          maxHeight: `${c}px`
        }), e.width === "target" && Object.assign(d, {
          width: `${a.reference.width}px`
        });
      }
    })
  ), n;
}
function zy(e) {
  const [t, n] = _t({
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
    middleware: Vy(e, () => i)
  });
  return Md({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), Mt(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), Mt(() => {
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
const Wy = {
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
}, Gy = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : dt(t),
    "--popover-shadow": qg(n)
  }
});
function ft(e) {
  var Rt, qe, Ee, me, It, Kt;
  const t = j("Popover", Wy, e), {
    children: n,
    position: r,
    offset: o,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    transitionProps: l,
    width: c,
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
    clickOutsideEvents: P,
    trapFocus: E,
    onClose: O,
    onOpen: T,
    onChange: N,
    zIndex: M,
    radius: _,
    shadow: A,
    id: L,
    defaultOpened: I,
    __staticSelector: B,
    withRoles: $,
    disabled: H,
    returnFocus: X,
    variant: ne,
    keepMounted: be,
    vars: ue,
    ...Ae
  } = t, ye = Q({
    name: B,
    props: t,
    classes: Td,
    classNames: w,
    styles: S,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: Gy
  }), re = V(null), [ve, Me] = U(null), [xe, Ce] = U(null), { dir: _e } = cr(), ae = Ht(L), Y = zy({
    middlewares: u,
    width: c,
    position: Ad(_e, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: re,
    arrowOffset: p,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: I,
    onChange: N,
    onOpen: T,
    onClose: O
  });
  Xg(() => b && Y.onClose(), P, [
    ve,
    xe
  ]);
  const dn = Z(
    (se) => {
      Me(se), Y.floating.refs.setReference(se);
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
        arrowX: (Ee = (qe = (Rt = Y.floating) == null ? void 0 : Rt.middlewareData) == null ? void 0 : qe.arrow) == null ? void 0 : Ee.x,
        arrowY: (Kt = (It = (me = Y.floating) == null ? void 0 : me.middlewareData) == null ? void 0 : It.arrow) == null ? void 0 : Kt.y,
        opened: Y.opened,
        arrowRef: re,
        transitionProps: l,
        width: c,
        withArrow: d,
        arrowSize: f,
        arrowOffset: p,
        arrowRadius: m,
        arrowPosition: g,
        placement: Y.floating.placement,
        trapFocus: E,
        withinPortal: y,
        portalProps: x,
        zIndex: M,
        radius: _,
        shadow: A,
        closeOnEscape: C,
        onClose: Y.onClose,
        onToggle: Y.onToggle,
        getTargetId: () => `${ae}-target`,
        getDropdownId: () => `${ae}-dropdown`,
        withRoles: $,
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
ft.Target = Ld;
ft.Dropdown = qs;
ft.displayName = "@mantine/core/Popover";
ft.extend = (e) => e;
var st = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const Hy = ie(({ className: e, ...t }, n) => /* @__PURE__ */ v.createElement(G, { component: "span", className: yt(st.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ v.createElement("span", { className: st.bar }), /* @__PURE__ */ v.createElement("span", { className: st.bar }), /* @__PURE__ */ v.createElement("span", { className: st.bar }))), Uy = ie(({ className: e, ...t }, n) => /* @__PURE__ */ v.createElement(G, { component: "span", className: yt(st.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ v.createElement("span", { className: st.dot }), /* @__PURE__ */ v.createElement("span", { className: st.dot }), /* @__PURE__ */ v.createElement("span", { className: st.dot }))), qy = ie(({ className: e, ...t }, n) => /* @__PURE__ */ v.createElement(G, { component: "span", className: yt(st.ovalLoader, e), ...t, ref: n })), _d = {
  bars: Hy,
  oval: qy,
  dots: Uy
}, Ky = {
  loaders: _d,
  type: "oval"
}, Yy = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": ce(t, "loader-size"),
    "--loader-color": n ? kt(n, e) : void 0
  }
}), fr = q((e, t) => {
  const n = j("Loader", Ky, e), {
    size: r,
    color: o,
    type: i,
    vars: s,
    className: a,
    style: l,
    classNames: c,
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
    style: l,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: Yy
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
fr.defaultLoaders = _d;
fr.classes = st;
fr.displayName = "@mantine/core/Loader";
var Co = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const rc = {
  orientation: "horizontal"
}, Xy = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), Ks = q((e, t) => {
  const n = j("ActionIconGroup", rc, e), {
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: l,
    vars: c,
    borderWidth: u,
    variant: d,
    ...f
  } = j("ActionIconGroup", rc, e), p = Q({
    name: "ActionIconGroup",
    props: n,
    classes: Co,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Xy,
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...p("group"),
      ref: t,
      variant: d,
      mod: { "data-orientation": l },
      role: "group",
      ...f
    }
  );
});
Ks.classes = Co;
Ks.displayName = "@mantine/core/ActionIconGroup";
const Jy = {}, Qy = (e, { size: t, radius: n, variant: r, gradient: o, color: i }) => {
  const s = e.variantColorResolver({
    color: i || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled"
  });
  return {
    root: {
      "--ai-size": ce(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : dt(n),
      "--ai-bg": i || r ? s.background : void 0,
      "--ai-hover": i || r ? s.hover : void 0,
      "--ai-hover-color": i || r ? s.hoverColor : void 0,
      "--ai-color": i || r ? s.color : void 0,
      "--ai-bd": i || r ? s.border : void 0
    }
  };
}, Un = Ut((e, t) => {
  const n = j("ActionIcon", Jy, e), {
    className: r,
    unstyled: o,
    variant: i,
    classNames: s,
    styles: a,
    style: l,
    loading: c,
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
    style: l,
    classes: Co,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: Qy
  });
  return /* @__PURE__ */ v.createElement(
    cn,
    {
      ...x("root", { active: !S && !c && !b }),
      ...y,
      unstyled: o,
      variant: i,
      size: d,
      disabled: S || c,
      ref: t,
      mod: { loading: c, disabled: S || b }
    },
    c ? /* @__PURE__ */ v.createElement(
      fr,
      {
        ...x("loader"),
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)",
        ...u
      }
    ) : w
  );
});
Un.classes = Co;
Un.displayName = "@mantine/core/ActionIcon";
Un.Group = Ks;
const kd = ie(
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
kd.displayName = "@mantine/core/CloseIcon";
var Fd = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const Zy = {
  variant: "subtle"
}, ev = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": ce(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : dt(n),
    "--cb-icon-size": D(r)
  }
}), Eo = Ut((e, t) => {
  const n = j("CloseButton", Zy, e), {
    iconSize: r,
    children: o,
    vars: i,
    radius: s,
    className: a,
    classNames: l,
    style: c,
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
    style: c,
    classes: Fd,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: ev
  });
  return /* @__PURE__ */ v.createElement(
    cn,
    {
      ref: t,
      ...g,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: { disabled: p || f },
      ...h("root", { variant: m, active: !0 })
    },
    /* @__PURE__ */ v.createElement(kd, null),
    o
  );
});
Eo.classes = Fd;
Eo.displayName = "@mantine/core/CloseButton";
function tv(e) {
  return xm.toArray(e).filter(Boolean);
}
var Bd = { root: "m-4081bf90" };
const nv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, rv = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": Nu(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), wn = q((e, t) => {
  const n = j("Group", nv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    children: l,
    gap: c,
    align: u,
    justify: d,
    wrap: f,
    grow: p,
    preventGrowOverflow: m,
    vars: g,
    variant: h,
    __size: w,
    ...S
  } = n, b = tv(l), y = b.length, x = Nu(c ?? "md"), P = { childWidth: `calc(${100 / y}% - (${x} - ${x} / ${y}))` }, E = Q({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: i,
    classes: Bd,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: rv
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
const [ov, pr] = Cs({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var nt = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const oc = {}, iv = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Xe(t)} - ${D(2)})`
  }
}), Po = q((e, t) => {
  const n = j("InputDescription", oc, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    size: c,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...p
  } = j("InputDescription", oc, n), m = pr(), g = Q({
    name: ["InputWrapper", u],
    props: n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: l,
    varsResolver: iv
  }), h = d && (m == null ? void 0 : m.getStyles) || g;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...h("description"),
      ...p
    }
  );
});
Po.classes = nt;
Po.displayName = "@mantine/core/InputDescription";
const sv = {}, av = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Xe(t)} - ${D(2)})`
  }
}), Do = q((e, t) => {
  const n = j("InputError", sv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    size: c,
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
    vars: l,
    varsResolver: av
  }), g = pr(), h = d && (g == null ? void 0 : g.getStyles) || m;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...h("error"),
      ...p
    }
  );
});
Do.classes = nt;
Do.displayName = "@mantine/core/InputError";
const ic = {
  labelElement: "label"
}, lv = (e, { size: t }) => ({
  label: {
    "--input-label-size": Xe(t),
    "--input-asterisk-color": void 0
  }
}), Ro = q((e, t) => {
  const n = j("InputLabel", ic, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    labelElement: c,
    size: u,
    required: d,
    htmlFor: f,
    onMouseDown: p,
    children: m,
    __staticSelector: g,
    variant: h,
    ...w
  } = j("InputLabel", ic, n), S = Q({
    name: ["InputWrapper", g],
    props: n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: l,
    varsResolver: lv
  }), b = pr(), y = (b == null ? void 0 : b.getStyles) || S;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...y("label"),
      component: c,
      variant: h,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
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
Ro.classes = nt;
Ro.displayName = "@mantine/core/InputLabel";
const sc = {}, Ys = q((e, t) => {
  const n = j("InputPlaceholder", sc, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    __staticSelector: c,
    variant: u,
    error: d,
    ...f
  } = j("InputPlaceholder", sc, n), p = Q({
    name: ["InputPlaceholder", c],
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
function cv(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((l) => l === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const uv = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, dv = (e, { size: t }) => ({
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
  const n = j("InputWrapper", uv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    size: c,
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
    id: P,
    required: E,
    __stylesApiProps: O,
    ...T
  } = n, N = Q({
    name: ["InputWrapper", d],
    props: O || n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: dv
  }), M = {
    size: c,
    variant: u,
    __staticSelector: d
  }, _ = Ht(P), A = typeof C == "boolean" ? C : E, L = (b == null ? void 0 : b.id) || `${_}-error`, I = (S == null ? void 0 : S.id) || `${_}-description`, B = _, $ = !!g && typeof g != "boolean", H = !!h, X = `${$ ? L : ""} ${H ? I : ""}`, ne = X.trim().length > 0 ? X.trim() : void 0, be = (w == null ? void 0 : w.id) || `${_}-label`, ue = m && /* @__PURE__ */ v.createElement(
    Ro,
    {
      key: "label",
      labelElement: y,
      id: be,
      htmlFor: B,
      required: A,
      ...M,
      ...w
    },
    m
  ), Ae = H && /* @__PURE__ */ v.createElement(
    Po,
    {
      key: "description",
      ...S,
      ...M,
      size: (S == null ? void 0 : S.size) || M.size,
      id: (S == null ? void 0 : S.id) || I
    },
    h
  ), ye = /* @__PURE__ */ v.createElement(v.Fragment, { key: "input" }, f(x)), re = $ && /* @__PURE__ */ v.createElement(
    Do,
    {
      ...b,
      ...M,
      size: (b == null ? void 0 : b.size) || M.size,
      key: "error",
      id: (b == null ? void 0 : b.id) || L
    },
    g
  ), ve = p.map((Me) => {
    switch (Me) {
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
    ov,
    {
      value: {
        getStyles: N,
        describedBy: ne,
        inputId: B,
        labelId: be,
        ...cv(p, { hasDescription: H, hasError: $ })
      }
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        ref: t,
        variant: u,
        size: c,
        mod: { error: !!g },
        ...N("root"),
        ...T
      },
      ve
    )
  );
});
Xs.classes = nt;
Xs.displayName = "@mantine/core/InputWrapper";
const fv = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, pv = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": ce(t.size, "input-height"),
    "--input-fz": Xe(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : dt(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? D(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? D(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? ce(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), et = Ut((e, t) => {
  const n = j("Input", fv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    required: l,
    __staticSelector: c,
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
    variant: P,
    vars: E,
    pointer: O,
    multiline: T,
    radius: N,
    id: M,
    withAria: _,
    withErrorStyles: A,
    ...L
  } = n, { styleProps: I, rest: B } = bo(L), $ = pr(), H = { offsetBottom: $ == null ? void 0 : $.offsetBottom, offsetTop: $ == null ? void 0 : $.offsetTop }, X = Q({
    name: ["Input", c],
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
    varsResolver: pv
  }), ne = _ ? {
    required: l,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": $ == null ? void 0 : $.describedBy,
    id: ($ == null ? void 0 : $.inputId) || M
  } : {};
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...X("wrapper"),
      ...I,
      ...f,
      mod: {
        error: !!p && A,
        pointer: O,
        disabled: m,
        multiline: T,
        "data-with-right-section": !!S,
        "data-with-left-section": !!g
      },
      variant: P,
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
        required: l,
        mod: { disabled: m, error: !!p && A },
        variant: P,
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
et.Label = Ro;
et.Error = Do;
et.Description = Po;
et.Placeholder = Ys;
et.displayName = "@mantine/core/Input";
function mv(e, t, n) {
  const r = j(e, t, n), {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: l,
    styles: c,
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
    withAsterisk: P,
    variant: E,
    vars: O,
    ...T
  } = r, { styleProps: N, rest: M } = bo(T), _ = {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: l,
    className: u,
    __staticSelector: f,
    __stylesApiProps: p || r,
    errorProps: m,
    labelProps: g,
    descriptionProps: h,
    unstyled: d,
    styles: c,
    size: b,
    style: y,
    inputContainer: x,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    id: S,
    ...w
  };
  return {
    ...M,
    classNames: l,
    styles: c,
    unstyled: d,
    wrapperProps: { ..._, ...N },
    inputProps: {
      required: a,
      classNames: l,
      styles: c,
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
const gv = {
  __staticSelector: "InputBase",
  withAria: !0
}, qt = Ut((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = mv("InputBase", gv, e);
  return /* @__PURE__ */ v.createElement(et.Wrapper, { ...r }, /* @__PURE__ */ v.createElement(et, { ...n, ...o, ref: t }));
});
qt.classes = { ...et.classes, ...et.Wrapper.classes };
qt.displayName = "@mantine/core/InputBase";
const [hv, Js] = Gt(
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
const [bv, jd] = Gt("Accordion.Item component was not found in the tree");
var mr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const yv = {}, Zs = q((e, t) => {
  const {
    classNames: n,
    className: r,
    style: o,
    styles: i,
    vars: s,
    chevron: a,
    icon: l,
    onClick: c,
    onKeyDown: u,
    children: d,
    disabled: f,
    ...p
  } = j("AccordionControl", yv, e), { value: m } = jd(), g = Js(), h = g.isItemActive(m), w = typeof g.order == "number", S = `h${g.order}`, b = /* @__PURE__ */ v.createElement(
    cn,
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
        c == null || c(y), g.onChange(m);
      },
      type: "button",
      disabled: f,
      "aria-expanded": h,
      "aria-controls": g.getRegionId(m),
      id: g.getControlId(m),
      onKeyDown: $u({
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
    l && /* @__PURE__ */ v.createElement(
      G,
      {
        component: "span",
        mod: { "chevron-position": g.chevronPosition },
        ...g.getStyles("icon", { classNames: n, styles: i })
      },
      l
    )
  );
  return w ? /* @__PURE__ */ v.createElement(S, { ...g.getStyles("itemTitle", { classNames: n, styles: i }) }, b) : b;
});
Zs.displayName = "@mantine/core/AccordionControl";
Zs.classes = mr;
const vv = {}, ea = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...l } = j(
    "AccordionItem",
    vv,
    e
  ), c = Js();
  return /* @__PURE__ */ v.createElement(bv, { value: { value: a } }, /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      mod: { active: c.isItemActive(a) },
      ...c.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: c.variant }),
      ...l
    }
  ));
});
ea.displayName = "@mantine/core/AccordionItem";
ea.classes = mr;
const wv = {}, ta = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...l } = j(
    "AccordionPanel",
    wv,
    e
  ), { value: c } = jd(), u = Js();
  return /* @__PURE__ */ v.createElement(
    Qu,
    {
      ref: t,
      ...u.getStyles("panel", { className: r, classNames: n, style: o, styles: i }),
      ...l,
      in: u.isItemActive(c),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(c),
      "aria-labelledby": u.getControlId(c)
    },
    /* @__PURE__ */ v.createElement("div", { ...u.getStyles("content", { classNames: n, styles: i }) }, a)
  );
});
ta.displayName = "@mantine/core/AccordionPanel";
ta.classes = mr;
const Sv = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ v.createElement(Qs, null)
}, xv = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : dt(r)
  }
});
function oe(e) {
  const t = j("Accordion", Sv, e), {
    classNames: n,
    className: r,
    style: o,
    styles: i,
    unstyled: s,
    vars: a,
    children: l,
    multiple: c,
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
    ...P
  } = t, E = Ht(p), [O, T] = _t({
    value: u,
    defaultValue: d,
    finalValue: c ? [] : null,
    onChange: f
  }), N = (A) => Array.isArray(O) ? O.includes(A) : A === O, M = (A) => {
    const L = Array.isArray(O) ? O.includes(A) ? O.filter((I) => I !== A) : [...O, A] : A === O ? null : A;
    T(L);
  }, _ = Q({
    name: "Accordion",
    classes: mr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: xv
  });
  return /* @__PURE__ */ v.createElement(
    hv,
    {
      value: {
        isItemActive: N,
        onChange: M,
        getControlId: Gr(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Gr(
          `${E}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: h,
        chevronPosition: w,
        order: b,
        chevron: y,
        loop: m,
        getStyles: _,
        variant: x,
        unstyled: s
      }
    },
    /* @__PURE__ */ v.createElement(G, { ..._("root"), id: E, ...P, variant: x, "data-accordion": !0 }, l)
  );
}
const Cv = (e) => e;
oe.extend = Cv;
oe.classes = mr;
oe.displayName = "@mantine/core/Accordion";
oe.Item = ea;
oe.Panel = ta;
oe.Control = Zs;
oe.Chevron = Qs;
var Vd = { root: "m-b6d8b162" };
function Ev(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const Pv = {
  inherit: !1
}, Dv = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": Xe(o),
    "--text-lh": Ug(o),
    "--text-gradient": t === "gradient" ? Ji(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? kt(i, e) : void 0
  }
}), Je = Ut((e, t) => {
  const n = j("Text", Pv, e), {
    lineClamp: r,
    truncate: o,
    inline: i,
    inherit: s,
    gradient: a,
    span: l,
    __staticSelector: c,
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
    name: ["Text", c],
    props: n,
    classes: Vd,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: Dv
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...y("root", { focusable: !0 }),
      ref: t,
      component: l ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": Ev(o),
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
Je.classes = Vd;
Je.displayName = "@mantine/core/Text";
function zd(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => zd(t))
  } : e;
}
function Wd(e) {
  return e ? e.map(zd) : [];
}
function na(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...na(n.items) } : (t[n.value] = n, t), {});
}
var Re = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const Rv = {
  error: null
}, Iv = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": ce(t, "combobox-chevron-size")
  }
}), ra = q((e, t) => {
  const n = j("ComboboxChevron", Rv, e), { size: r, error: o, style: i, className: s, classNames: a, styles: l, unstyled: c, vars: u, ...d } = n, f = Q({
    name: "ComboboxChevron",
    classes: Re,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: l,
    unstyled: c,
    vars: u,
    varsResolver: Iv,
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
ra.classes = Re;
ra.displayName = "@mantine/core/ComboboxChevron";
const [Av, rt] = Gt(
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
const Ov = {}, oa = q((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    Ov,
    e
  ), l = rt();
  return /* @__PURE__ */ v.createElement(
    ft.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": s || void 0,
      ...l.getStyles("dropdown", { className: o, style: i, classNames: n, styles: r })
    }
  );
});
oa.classes = Re;
oa.displayName = "@mantine/core/ComboboxDropdown";
const $v = {
  refProp: "ref"
}, Hd = q((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", $v, e);
  if (rt(), !Wt(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ v.createElement(ft.Target, { ref: t, refProp: r }, n);
});
Hd.displayName = "@mantine/core/ComboboxDropdownTarget";
const Nv = {}, ia = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    Nv,
    e
  ), l = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...l.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
ia.classes = Re;
ia.displayName = "@mantine/core/ComboboxEmpty";
function sa({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o
}) {
  const i = rt(), [s, a] = U(null), l = (u) => {
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
    onKeyDown: l
  };
}
const Tv = {
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
    ...l
  } = j("ComboboxEventsTarget", Tv, e);
  if (!Wt(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const c = rt(), u = sa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  });
  return ln(n, {
    ...u,
    ...l,
    [r]: Ie(t, c.store.targetRef, n == null ? void 0 : n.ref)
  });
});
Ud.displayName = "@mantine/core/ComboboxEventsTarget";
const Lv = {}, aa = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    Lv,
    e
  ), l = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...l.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
aa.classes = Re;
aa.displayName = "@mantine/core/ComboboxFooter";
const Mv = {}, la = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: l, ...c } = j(
    "ComboboxGroup",
    Mv,
    e
  ), u = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: i }),
      ...c
    },
    l && /* @__PURE__ */ v.createElement("div", { ...u.getStyles("groupLabel", { classNames: n, styles: i }) }, l),
    a
  );
});
la.classes = Re;
la.displayName = "@mantine/core/ComboboxGroup";
const _v = {}, ca = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    _v,
    e
  ), l = rt();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...l.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
ca.classes = Re;
ca.displayName = "@mantine/core/ComboboxHeader";
const kv = {}, ua = q((e, t) => {
  const n = j("ComboboxOption", kv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    vars: a,
    onClick: l,
    id: c,
    active: u,
    onMouseDown: d,
    onMouseOver: f,
    disabled: p,
    selected: m,
    ...g
  } = n, h = rt(), w = gu(), S = c || w;
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
        p ? b.preventDefault() : ((y = h.onOptionSubmit) == null || y.call(h, n.value, n), l == null || l(b));
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
ua.classes = Re;
ua.displayName = "@mantine/core/ComboboxOption";
const Fv = {}, da = q((e, t) => {
  const n = j("ComboboxOptions", Fv, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: l, labelledBy: c, ...u } = n, d = rt(), f = Ht(a);
  return W(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ v.createElement(
    G,
    {
      ref: t,
      ...d.getStyles("options", { className: o, style: i, classNames: r, styles: s }),
      ...u,
      id: f,
      role: "listbox",
      "aria-labelledby": c,
      onMouseDown: (p) => {
        p.preventDefault(), l == null || l(p);
      }
    }
  );
});
da.classes = Re;
da.displayName = "@mantine/core/ComboboxOptions";
const Bv = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, fa = q((e, t) => {
  const n = j("ComboboxSearch", Bv, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: l,
    withKeyboardNavigation: c,
    size: u,
    ...d
  } = n, f = rt(), p = f.getStyles("search"), m = sa({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: c,
    withExpandedAttribute: !1,
    onKeyDown: l
  });
  return /* @__PURE__ */ v.createElement(
    et,
    {
      ref: Ie(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
fa.classes = Re;
fa.displayName = "@mantine/core/ComboboxSearch";
const jv = {
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
    ...l
  } = j("ComboboxTarget", jv, e);
  if (!Wt(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const c = rt(), u = sa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  }), d = ln(n, {
    ...u,
    ...l
  });
  return /* @__PURE__ */ v.createElement(ft.Target, { ref: Ie(t, c.store.targetRef) }, d);
});
qd.displayName = "@mantine/core/ComboboxTarget";
function Vv(e, t, n) {
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
function zv(e, t, n) {
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
function Wv(e) {
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
  const [a, l] = _t({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), c = V(null), u = V(-1), d = V(null), f = V(null), p = V(-1), m = V(-1), g = V(-1), h = Z(
    (I = "unknown") => {
      a || (l(!0), o == null || o(I));
    },
    [l, o, a]
  ), w = Z(
    (I = "unknown") => {
      a && (l(!1), r == null || r(I));
    },
    [l, r, a]
  ), S = Z(
    (I = "unknown") => {
      a ? w(I) : h(I);
    },
    [w, h, a]
  ), b = Z(() => {
    const I = document.querySelector(`#${c.current} [data-combobox-selected]`);
    I == null || I.removeAttribute("data-combobox-selected"), I == null || I.removeAttribute("aria-selected");
  }, []), y = Z(
    (I) => {
      const B = document.getElementById(c.current), $ = B == null ? void 0 : B.querySelectorAll("[data-combobox-option]");
      if (!$)
        return null;
      const H = I >= $.length ? 0 : I < 0 ? $.length - 1 : I;
      return u.current = H, $ != null && $[H] && !$[H].hasAttribute("data-combobox-disabled") ? (b(), $[H].setAttribute("data-combobox-selected", "true"), $[H].setAttribute("aria-selected", "true"), $[H].scrollIntoView({ block: "nearest", behavior: s }), $[H].id) : null;
    },
    [s, b]
  ), x = Z(() => {
    const I = document.querySelector(
      `#${c.current} [data-combobox-active]`
    );
    if (I) {
      const B = document.querySelectorAll(
        `#${c.current} [data-combobox-option]`
      ), $ = Array.from(B).findIndex((H) => H === I);
      return y($);
    }
    return y(0);
  }, [y]), C = Z(
    () => y(
      zv(
        u.current,
        document.querySelectorAll(`#${c.current} [data-combobox-option]`),
        i
      )
    ),
    [y, i]
  ), P = Z(
    () => y(
      Vv(
        u.current,
        document.querySelectorAll(`#${c.current} [data-combobox-option]`),
        i
      )
    ),
    [y, i]
  ), E = Z(
    () => y(
      Wv(
        document.querySelectorAll(`#${c.current} [data-combobox-option]`)
      )
    ),
    [y]
  ), O = Z((I = "selected") => {
    g.current = window.setTimeout(() => {
      const B = document.querySelectorAll(
        `#${c.current} [data-combobox-option]`
      ), $ = Array.from(B).findIndex(
        (H) => H.hasAttribute(`data-combobox-${I}`)
      );
      u.current = $;
    }, 0);
  }, []), T = Z(() => {
    u.current = -1, b();
  }, [b]), N = Z(() => {
    const I = document.querySelectorAll(
      `#${c.current} [data-combobox-option]`
    ), B = I == null ? void 0 : I[u.current];
    B == null || B.click();
  }, []), M = Z((I) => {
    c.current = I;
  }, []), _ = Z(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), A = Z(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), L = Z(() => u.current, []);
  return W(
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
    getSelectedOptionIndex: L,
    selectOption: y,
    selectFirstOption: E,
    selectActiveOption: x,
    selectNextOption: C,
    selectPreviousOption: P,
    resetSelectedOption: T,
    updateSelectedOptionIndex: O,
    listId: c.current,
    setListId: M,
    clickSelectedOption: N,
    searchRef: d,
    focusSearchInput: _,
    targetRef: f,
    focusTarget: A
  };
}
const Gv = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, Hv = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": Xe(t),
    "--combobox-option-padding": ce(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : D(n),
    "--combobox-option-fz": Xe(t),
    "--combobox-option-padding": ce(t, "combobox-option-padding")
  }
});
function J(e) {
  const t = j("Combobox", Gv, e), {
    classNames: n,
    styles: r,
    unstyled: o,
    children: i,
    store: s,
    vars: a,
    onOptionSubmit: l,
    size: c,
    dropdownPadding: u,
    resetSelectionOnOptionHover: d,
    __staticSelector: f,
    readOnly: p,
    ...m
  } = t, g = pa(), h = s || g, w = Q({
    name: f || "Combobox",
    classes: Re,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: Hv
  });
  return /* @__PURE__ */ v.createElement(
    Av,
    {
      value: {
        getStyles: w,
        store: h,
        onOptionSubmit: l,
        size: c,
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
const Uv = (e) => e;
J.extend = Uv;
J.classes = Re;
J.displayName = "@mantine/core/Combobox";
J.Target = qd;
J.Dropdown = oa;
J.Options = da;
J.Option = ua;
J.Search = fa;
J.Empty = ia;
J.Chevron = ra;
J.Footer = aa;
J.Header = ca;
J.EventsTarget = Ud;
J.DropdownTarget = Hd;
J.Group = la;
J.ClearButton = Gd;
function qv({ size: e, style: t, ...n }) {
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
function Kv(e) {
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
function Ri(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function Xd({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!Sn(e)) {
    const s = t && Ri(n, e.value) && /* @__PURE__ */ v.createElement(qv, { className: Re.optionsDropdownCheckIcon });
    return /* @__PURE__ */ v.createElement(
      J.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: yt({ [Re.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": Ri(n, e.value) || void 0,
        "aria-selected": Ri(n, e.value)
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
  filterOptions: l = !0,
  withCheckIcon: c = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: f,
  unstyled: p,
  labelId: m
}) {
  Yd(e);
  const h = typeof o == "string" ? (r || Kd)({
    options: e,
    search: l ? o : "",
    limit: i ?? 1 / 0
  }) : e, w = Kv(h), S = h.map((b) => /* @__PURE__ */ v.createElement(
    Xd,
    {
      data: b,
      key: Sn(b) ? b.group : b.value,
      withCheckIcon: c,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ v.createElement(J.Dropdown, { hidden: t || n && w }, /* @__PURE__ */ v.createElement(J.Options, { labelledBy: m }, a ? /* @__PURE__ */ v.createElement(
    ur.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Re.optionsDropdownScrollArea
    },
    S
  ) : S, w && f && /* @__PURE__ */ v.createElement(J.Empty, null, f)));
}
var Io = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const ac = {
  orientation: "horizontal"
}, Yv = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), ma = q((e, t) => {
  const n = j("ButtonGroup", ac, e), {
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: l,
    vars: c,
    borderWidth: u,
    variant: d,
    ...f
  } = j("ButtonGroup", ac, e), p = Q({
    name: "ButtonGroup",
    props: n,
    classes: Io,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Yv,
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...p("group"),
      ref: t,
      variant: d,
      mod: { "data-orientation": l },
      role: "group",
      ...f
    }
  );
});
ma.classes = Io;
ma.displayName = "@mantine/core/ButtonGroup";
const Xv = {}, Jv = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s }) => {
  const a = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    gradient: r,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": ce(i, "button-height"),
      "--button-padding-x": ce(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? Xe(i.replace("compact-", "")) : Xe(i),
      "--button-radius": t === void 0 ? void 0 : dt(t),
      "--button-bg": n || o ? a.background : void 0,
      "--button-hover": n || o ? a.hover : void 0,
      "--button-color": n || o ? a.color : void 0,
      "--button-bd": n || o ? a.border : void 0,
      "--button-hover-color": n || o ? a.hoverColor : void 0
    }
  };
}, qn = Ut((e, t) => {
  const n = j("Button", Xv, e), {
    style: r,
    vars: o,
    className: i,
    color: s,
    disabled: a,
    children: l,
    leftSection: c,
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
    classes: Io,
    className: i,
    style: r,
    classNames: w,
    styles: S,
    unstyled: b,
    vars: o,
    varsResolver: Jv
  }), P = !!c, E = !!u;
  return /* @__PURE__ */ v.createElement(
    cn,
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
        "with-left-section": P,
        "with-right-section": E
      },
      ...x
    },
    /* @__PURE__ */ v.createElement(G, { component: "span", ...C("loader"), "aria-hidden": !0 }, /* @__PURE__ */ v.createElement(
      fr,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...g
      }
    )),
    /* @__PURE__ */ v.createElement("span", { ...C("inner") }, c && /* @__PURE__ */ v.createElement(G, { component: "span", ...C("section"), mod: { position: "left" } }, c), /* @__PURE__ */ v.createElement(G, { component: "span", mod: { loading: m }, ...C("label") }, l), u && /* @__PURE__ */ v.createElement(G, { component: "span", ...C("section"), mod: { position: "right" } }, u))
  );
});
qn.classes = Io;
qn.displayName = "@mantine/core/Button";
qn.Group = ma;
var Qd = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const lc = {
  withShadow: !0
}, Qv = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : dt(t),
    "--cs-size": D(n)
  }
}), Kn = Ut((e, t) => {
  const n = j("ColorSwatch", lc, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    color: c,
    size: u,
    radius: d,
    withShadow: f,
    children: p,
    variant: m,
    ...g
  } = j("ColorSwatch", lc, n), h = Q({
    name: "ColorSwatch",
    props: n,
    classes: Qd,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Qv
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
    /* @__PURE__ */ v.createElement("span", { ...h("colorOverlay", { style: { backgroundColor: c } }) }),
    /* @__PURE__ */ v.createElement("span", { ...h("childrenOverlay") }, p)
  );
});
Kn.classes = Qd;
Kn.displayName = "@mantine/core/ColorSwatch";
var Zd = { root: "m-7485cace" };
const Zv = {}, ew = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : ce(t, "container-size")
  }
}), ga = q((e, t) => {
  const n = j("Container", Zv, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, fluid: c, ...u } = n, d = Q({
    name: "Container",
    classes: Zd,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: ew
  });
  return /* @__PURE__ */ v.createElement(G, { ref: t, mod: { fluid: c }, ...d("root"), ...u });
});
ga.classes = Zd;
ga.displayName = "@mantine/core/Container";
function tw({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = V(-1), i = V(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, l = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return W(() => s, []), { openDropdown: a, closeDropdown: l };
}
const [nw, ef] = Gt(
  "HoverCard component was not found in the tree"
), rw = {};
function tf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    rw,
    e
  ), i = ef(), s = Hr(n, i.openDropdown), a = Hr(r, i.closeDropdown);
  return /* @__PURE__ */ v.createElement(ft.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
tf.displayName = "@mantine/core/HoverCardDropdown";
const ow = {
  refProp: "ref"
}, nf = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    ow,
    e
  );
  if (!Wt(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = ef(), a = Hr(n.props.onMouseEnter, s.openDropdown), l = Hr(n.props.onMouseLeave, s.closeDropdown), c = { onMouseEnter: a, onMouseLeave: l };
  return /* @__PURE__ */ v.createElement(ft.Target, { refProp: r, ref: t, ...i }, ln(
    n,
    o ? { [o]: c } : c
  ));
});
nf.displayName = "@mantine/core/HoverCardTarget";
const iw = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function nn(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = j(
    "HoverCard",
    iw,
    e
  ), [l, { open: c, close: u }] = uh(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = tw({ open: c, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ v.createElement(nw, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ v.createElement(ft, { ...a, opened: l, __staticSelector: "HoverCard" }, t));
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
const [sw, ha] = Cs(), [aw, lw] = Cs();
var Ao = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const cw = {}, uw = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? ce(t) : ce(n, "pg-gap")
  }
}), ba = q((e, t) => {
  const n = j("PillGroup", cw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, size: c, disabled: u, ...d } = n, f = ha(), p = (f == null ? void 0 : f.size) || c || void 0, m = Q({
    name: "PillGroup",
    classes: Ao,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: uw,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ v.createElement(aw, { value: { size: p, disabled: u } }, /* @__PURE__ */ v.createElement(G, { ref: t, size: p, ...m("group"), ...d }));
});
ba.classes = Ao;
ba.displayName = "@mantine/core/PillGroup";
const dw = {
  variant: "default"
}, fw = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": ce(n, "pill-fz"),
    "--pill-height": ce(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : dt(t)
  }
}), Yn = q((e, t) => {
  const n = j("Pill", dw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    variant: c,
    children: u,
    withRemoveButton: d,
    onRemove: f,
    removeButtonProps: p,
    radius: m,
    size: g,
    disabled: h,
    ...w
  } = n, S = lw(), b = ha(), y = g || (S == null ? void 0 : S.size) || void 0, x = (b == null ? void 0 : b.variant) === "filled" ? "contrast" : c || "default", C = Q({
    name: "Pill",
    classes: Ao,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: fw,
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
        onMouseDown: (P) => {
          var E;
          P.preventDefault(), P.stopPropagation(), (E = p == null ? void 0 : p.onMouseDown) == null || E.call(p, P);
        },
        onClick: (P) => {
          var E;
          P.stopPropagation(), f == null || f(), (E = p == null ? void 0 : p.onClick) == null || E.call(p, P);
        }
      }
    )
  );
});
Yn.classes = Ao;
Yn.displayName = "@mantine/core/Pill";
Yn.Group = ba;
var of = { field: "m-45c4369d" };
const pw = {
  type: "visible"
}, ya = q((e, t) => {
  const n = j("PillsInputField", pw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    type: c,
    disabled: u,
    id: d,
    pointer: f,
    ...p
  } = n, m = ha(), g = pr(), h = Q({
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
      ref: Ie(t, m == null ? void 0 : m.fieldRef),
      "data-type": c,
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
const mw = {}, Jr = q((e, t) => {
  const n = j("PillsInput", mw, e), {
    children: r,
    onMouseDown: o,
    onClick: i,
    size: s,
    disabled: a,
    __staticSelector: l,
    error: c,
    variant: u,
    ...d
  } = n, f = V();
  return /* @__PURE__ */ v.createElement(sw, { value: { fieldRef: f, size: s, disabled: a, hasError: !!c, variant: u } }, /* @__PURE__ */ v.createElement(
    qt,
    {
      size: s,
      error: c,
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
      __staticSelector: l || "PillsInput",
      withAria: !1
    },
    r
  ));
});
Jr.displayName = "@mantine/core/PillsInput";
Jr.Field = ya;
function gw({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (Sn(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const hw = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, va = q((e, t) => {
  const n = j("MultiSelect", hw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    size: c,
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
    filter: P,
    limit: E,
    withScrollArea: O,
    maxDropdownHeight: T,
    searchValue: N,
    defaultSearchValue: M,
    onSearchChange: _,
    readOnly: A,
    disabled: L,
    onFocus: I,
    onBlur: B,
    onPaste: $,
    radius: H,
    rightSection: X,
    rightSectionWidth: ne,
    rightSectionPointerEvents: be,
    rightSectionProps: ue,
    leftSection: Ae,
    leftSectionWidth: ye,
    leftSectionPointerEvents: re,
    leftSectionProps: ve,
    inputContainer: Me,
    inputWrapperOrder: xe,
    withAsterisk: Ce,
    labelProps: _e,
    descriptionProps: ae,
    errorProps: Y,
    wrapperProps: dn,
    description: Ue,
    label: Rt,
    error: qe,
    maxValues: Ee,
    searchable: me,
    nothingFoundMessage: It,
    withCheckIcon: Kt,
    checkIconPosition: se,
    hidePickedOptions: At,
    withErrorStyles: sm,
    name: am,
    form: lm,
    id: cm,
    clearable: um,
    clearButtonProps: dm,
    hiddenInputProps: fm,
    placeholder: ul,
    hiddenInputValuesDivider: pm,
    ...mm
  } = n, di = Ht(cm), fi = Wd(g), wr = na(fi), ke = pa({
    opened: h,
    defaultOpened: w,
    onDropdownOpen: S,
    onDropdownClose: () => {
      b == null || b(), ke.resetSelectedOption();
    }
  }), {
    styleProps: gm,
    rest: { type: ZD, ...hm }
  } = bo(mm), [Oe, Tn] = _t({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [Sr, xr] = _t({
    value: N,
    defaultValue: M,
    finalValue: "",
    onChange: _
  }), pi = Q({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: dl, resolvedStyles: fl } = qu({
    props: n,
    styles: s,
    classNames: r
  }), bm = (le) => {
    p == null || p(le), le.key === " " && !me && (le.preventDefault(), ke.toggleDropdown()), le.key === "Backspace" && Sr.length === 0 && Oe.length > 0 && Tn(Oe.slice(0, Oe.length - 1));
  }, ym = Oe.map((le, mi) => {
    var gl;
    return /* @__PURE__ */ v.createElement(
      Yn,
      {
        key: `${le}-${mi}`,
        withRemoveButton: !A,
        onRemove: () => Tn(Oe.filter((vm) => le !== vm)),
        unstyled: a,
        ...pi("pill")
      },
      ((gl = wr[le]) == null ? void 0 : gl.label) || le
    );
  });
  W(() => {
    y && ke.selectFirstOption();
  }, [y, Oe]);
  const pl = um && Oe.length > 0 && !L && !A && /* @__PURE__ */ v.createElement(
    J.ClearButton,
    {
      size: c,
      ...dm,
      onClear: () => {
        Tn([]), xr("");
      }
    }
  ), ml = gw({ data: fi, value: Oe });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(
    J,
    {
      store: ke,
      classNames: dl,
      styles: fl,
      unstyled: a,
      size: c,
      readOnly: A,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (le) => {
        x == null || x(le), xr(""), ke.updateSelectedOptionIndex("selected"), Oe.includes(wr[le].value) ? Tn(Oe.filter((mi) => mi !== wr[le].value)) : Oe.length < Ee && Tn([...Oe, wr[le].value]);
      },
      ...C
    },
    /* @__PURE__ */ v.createElement(J.DropdownTarget, null, /* @__PURE__ */ v.createElement(
      Jr,
      {
        ...gm,
        __staticSelector: "MultiSelect",
        classNames: dl,
        styles: fl,
        unstyled: a,
        size: c,
        className: o,
        style: i,
        variant: m,
        disabled: L,
        radius: H,
        rightSection: X || pl || /* @__PURE__ */ v.createElement(J.Chevron, { size: c, error: qe, unstyled: a }),
        rightSectionPointerEvents: be || (pl ? "all" : "none"),
        rightSectionWidth: ne,
        rightSectionProps: ue,
        leftSection: Ae,
        leftSectionWidth: ye,
        leftSectionPointerEvents: re,
        leftSectionProps: ve,
        inputContainer: Me,
        inputWrapperOrder: xe,
        withAsterisk: Ce,
        labelProps: _e,
        descriptionProps: ae,
        errorProps: Y,
        wrapperProps: dn,
        description: Ue,
        label: Rt,
        error: qe,
        multiline: !0,
        withErrorStyles: sm,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? ke.openDropdown() : ke.toggleDropdown(),
        "data-expanded": ke.dropdownOpened || void 0,
        id: di
      },
      /* @__PURE__ */ v.createElement(Yn.Group, { disabled: L, unstyled: a, ...pi("pillsList") }, ym, /* @__PURE__ */ v.createElement(J.EventsTarget, null, /* @__PURE__ */ v.createElement(
        Jr.Field,
        {
          ...hm,
          ref: t,
          id: di,
          placeholder: ul,
          type: !me && !ul ? "hidden" : "visible",
          ...pi("inputField"),
          unstyled: a,
          onFocus: (le) => {
            I == null || I(le), me && ke.openDropdown();
          },
          onBlur: (le) => {
            B == null || B(le), ke.closeDropdown(), me && ke.closeDropdown(), xr("");
          },
          onKeyDown: bm,
          value: Sr,
          onChange: (le) => {
            xr(le.currentTarget.value), me && ke.openDropdown(), y && ke.selectFirstOption();
          },
          disabled: L,
          readOnly: A || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ v.createElement(
      Jd,
      {
        data: At ? ml : fi,
        hidden: A || L,
        filter: P,
        search: Sr,
        limit: E,
        hiddenWhenEmpty: !me || !It || At && ml.length === 0 && Sr.trim().length === 0,
        withScrollArea: O,
        maxDropdownHeight: T,
        filterOptions: me,
        value: Oe,
        checkIconPosition: se,
        withCheckIcon: Kt,
        nothingFoundMessage: It,
        unstyled: a,
        labelId: `${di}-label`
      }
    )
  ), /* @__PURE__ */ v.createElement(
    "input",
    {
      type: "hidden",
      name: am,
      value: Oe.join(pm),
      form: lm,
      disabled: L,
      ...fm
    }
  ));
});
va.classes = { ...qt.classes, ...J.classes };
va.displayName = "@mantine/core/MultiSelect";
const bw = {
  duration: 100,
  transition: "fade"
};
function yw(e, t) {
  return { ...bw, ...t, ...e };
}
function vw({
  offset: e,
  position: t
}) {
  const [n, r] = U(!1), o = V(), { x: i, y: s, elements: a, refs: l, update: c, placement: u } = Gs({
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
      l.setPositionReference({
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
  return W(() => {
    if (l.floating.current) {
      const m = o.current;
      m.addEventListener("mousemove", p);
      const g = wt(l.floating.current);
      return g.forEach((h) => {
        h.addEventListener("scroll", c);
      }), () => {
        m.removeEventListener("mousemove", p), g.forEach((h) => {
          h.removeEventListener("scroll", c);
        });
      };
    }
  }, [a.reference, l.floating.current, c, p, n]), { handleMouseMove: p, x: i, y: s, opened: n, setOpened: r, boundaryRef: o, floating: l.setFloating };
}
var Oo = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const ww = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: Es("popover")
}, Sw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : dt(t),
    "--tooltip-bg": n ? kt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), wa = q((e, t) => {
  const n = j("TooltipFloating", ww, e), {
    children: r,
    refProp: o,
    withinPortal: i,
    style: s,
    className: a,
    classNames: l,
    styles: c,
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
  } = n, P = vt(), E = Q({
    name: "TooltipFloating",
    props: n,
    classes: Oo,
    className: a,
    style: s,
    classNames: l,
    styles: c,
    unstyled: u,
    rootSelector: "tooltip",
    vars: y,
    varsResolver: Sw
  }), { handleMouseMove: O, x: T, y: N, opened: M, boundaryRef: _, floating: A, setOpened: L } = vw({
    offset: m,
    position: g
  });
  if (!Wt(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const I = Ie(_, r.ref, t), B = (H) => {
    var X, ne;
    (ne = (X = r.props).onMouseEnter) == null || ne.call(X, H), O(H), L(!0);
  }, $ = (H) => {
    var X, ne;
    (ne = (X = r.props).onMouseLeave) == null || ne.call(X, H), L(!1);
  };
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(xo, { ...x, withinPortal: i }, /* @__PURE__ */ v.createElement(
    G,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ...Os(s, P),
          zIndex: w,
          display: !S && M ? "block" : "none",
          top: (N && Math.round(N)) ?? "",
          left: (T && Math.round(T)) ?? ""
        }
      }),
      variant: b,
      ref: A
    },
    p
  )), ln(r, {
    ...r.props,
    [o]: I,
    onMouseEnter: B,
    onMouseLeave: $
  }));
});
wa.classes = Oo;
wa.displayName = "@mantine/core/TooltipFloating";
const sf = an(!1), xw = sf.Provider, Cw = () => bt(sf), Ew = {
  openDelay: 0,
  closeDelay: 0
};
function af(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", Ew, e);
  return /* @__PURE__ */ v.createElement(xw, { value: !0 }, /* @__PURE__ */ v.createElement(vy, { delay: { open: t, close: n } }, r));
}
af.displayName = "@mantine/core/TooltipGroup";
function Pw(e) {
  var C, P, E;
  const [t, n] = U(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = Cw(), s = Ht(), { delay: a, currentId: l, setCurrentId: c } = Id(), u = Z(
    (O) => {
      n(O), O && c(s);
    },
    [c, s]
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
      cd(),
      wd({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [dd()] : []
    ]
  }), { getReferenceProps: b, getFloatingProps: y } = Oy([
    yy(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((P = e.events) != null && P.touch)
    }),
    Ay(p, { enabled: (E = e.events) == null ? void 0 : E.focus, keyboardOnly: !0 }),
    $y(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    Iy(p, { enabled: typeof e.opened > "u" }),
    wy(p, { id: s })
  ]);
  Md({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), Mt(() => {
    var O;
    (O = e.onPositionChange) == null || O.call(e, h);
  }, [h]);
  const x = o && l && l !== s;
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
const cc = {
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
}, Dw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : dt(t),
    "--tooltip-bg": n ? kt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), xn = q((e, t) => {
  const n = j("Tooltip", cc, e), {
    children: r,
    position: o,
    refProp: i,
    label: s,
    openDelay: a,
    closeDelay: l,
    onPositionChange: c,
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
    arrowPosition: P,
    offset: E,
    transitionProps: O,
    multiline: T,
    events: N,
    zIndex: M,
    disabled: _,
    positionDependencies: A,
    onClick: L,
    onMouseEnter: I,
    onMouseLeave: B,
    inline: $,
    variant: H,
    keepMounted: X,
    vars: ne,
    portalProps: be,
    ...ue
  } = j("Tooltip", cc, n), { dir: Ae } = cr(), ye = V(null), re = Pw({
    position: Ad(Ae, o),
    closeDelay: l,
    openDelay: a,
    onPositionChange: c,
    opened: u,
    events: N,
    arrowRef: ye,
    arrowOffset: x,
    offset: typeof E == "number" ? E + (b ? y / 2 : 0) : E,
    positionDependencies: [...A, r],
    inline: $
  }), ve = Q({
    name: "Tooltip",
    props: n,
    classes: Oo,
    className: S,
    style: w,
    classNames: m,
    styles: g,
    unstyled: h,
    rootSelector: "tooltip",
    vars: ne,
    varsResolver: Dw
  });
  if (!Wt(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const Me = Ie(re.reference, r.ref, t), xe = yw(O, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(xo, { ...be, withinPortal: d }, /* @__PURE__ */ v.createElement(
    Us,
    {
      ...xe,
      keepMounted: X,
      mounted: !_ && !!re.opened,
      duration: re.isGroupPhase ? 10 : xe.duration
    },
    (Ce) => /* @__PURE__ */ v.createElement(
      G,
      {
        ...ue,
        variant: H,
        mod: { multiline: T },
        ...re.getFloatingProps({
          ref: re.floating,
          className: ve("tooltip").className,
          style: {
            ...ve("tooltip").style,
            ...Ce,
            zIndex: M,
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
          arrowPosition: P,
          ...ve("arrow")
        }
      )
    )
  )), ln(
    r,
    re.getReferenceProps({
      onClick: L,
      onMouseEnter: I,
      onMouseLeave: B,
      onMouseMove: n.onMouseMove,
      onPointerDown: n.onPointerDown,
      onPointerEnter: n.onPointerEnter,
      [i]: Me,
      className: yt(S, r.props.className),
      ...r.props
    })
  ));
});
xn.classes = Oo;
xn.displayName = "@mantine/core/Tooltip";
xn.Floating = wa;
xn.Group = af;
const Rw = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, gr = q((e, t) => {
  const n = j("Select", Rw, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    dropdownOpened: a,
    defaultDropdownOpened: l,
    onDropdownClose: c,
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
    filter: P,
    limit: E,
    withScrollArea: O,
    maxDropdownHeight: T,
    size: N,
    searchable: M,
    rightSection: _,
    checkIconPosition: A,
    withCheckIcon: L,
    nothingFoundMessage: I,
    name: B,
    form: $,
    searchValue: H,
    defaultSearchValue: X,
    onSearchChange: ne,
    allowDeselect: be,
    error: ue,
    rightSectionPointerEvents: Ae,
    id: ye,
    clearable: re,
    clearButtonProps: ve,
    hiddenInputProps: Me,
    ...xe
  } = n, Ce = Gn(() => Wd(g), [g]), _e = Gn(() => na(Ce), [Ce]), ae = Ht(ye), [Y, dn] = _t({
    value: h,
    defaultValue: w,
    finalValue: null,
    onChange: m
  }), Ue = typeof Y == "string" ? _e[Y] : void 0, [Rt, qe] = _t({
    value: H,
    defaultValue: X,
    finalValue: Ue ? Ue.label : "",
    onChange: ne
  }), Ee = pa({
    opened: a,
    defaultOpened: l,
    onDropdownOpen: u,
    onDropdownClose: () => {
      c == null || c(), Ee.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: It } = qu({
    props: n,
    styles: o,
    classNames: r
  });
  W(() => {
    S && Ee.selectFirstOption();
  }, [S, Y]), W(() => {
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
      styles: It,
      unstyled: i,
      readOnly: x,
      onOptionSubmit: (se) => {
        b == null || b(se);
        const At = be && _e[se].value === Y ? null : _e[se].value;
        dn(At), qe(typeof At == "string" ? _e[se].label : ""), Ee.closeDropdown();
      },
      size: N,
      ...y
    },
    /* @__PURE__ */ v.createElement(J.Target, { targetType: M ? "input" : "button" }, /* @__PURE__ */ v.createElement(
      qt,
      {
        id: ae,
        ref: t,
        rightSection: _ || Kt || /* @__PURE__ */ v.createElement(J.Chevron, { size: N, error: ue, unstyled: i }),
        rightSectionPointerEvents: Ae || (Kt ? "all" : "none"),
        ...xe,
        size: N,
        __staticSelector: "Select",
        disabled: C,
        readOnly: x || !M,
        value: Rt,
        onChange: (se) => {
          qe(se.currentTarget.value), Ee.openDropdown(), S && Ee.selectFirstOption();
        },
        onFocus: (se) => {
          M && Ee.openDropdown(), d == null || d(se);
        },
        onBlur: (se) => {
          var At;
          M && Ee.closeDropdown(), qe(Y != null && ((At = _e[Y]) == null ? void 0 : At.label) || ""), f == null || f(se);
        },
        onClick: (se) => {
          M ? Ee.openDropdown() : Ee.toggleDropdown(), p == null || p(se);
        },
        classNames: me,
        styles: It,
        unstyled: i,
        pointer: !M,
        error: ue
      }
    )),
    /* @__PURE__ */ v.createElement(
      Jd,
      {
        data: Ce,
        hidden: x || C,
        filter: P,
        search: Rt,
        limit: E,
        hiddenWhenEmpty: !M || !I,
        withScrollArea: O,
        maxDropdownHeight: T,
        filterOptions: M && (Ue == null ? void 0 : Ue.label) !== Rt,
        value: Y,
        checkIconPosition: A,
        withCheckIcon: L,
        nothingFoundMessage: I,
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
      form: $,
      disabled: C,
      ...Me
    }
  ));
});
gr.classes = { ...qt.classes, ...J.classes };
gr.displayName = "@mantine/core/Select";
const Iw = {}, Sa = q((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", Iw, e);
  return /* @__PURE__ */ v.createElement(G, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
Sa.displayName = "@mantine/core/Space";
const [Aw, xa] = Gt(
  "Tabs component was not found in the tree"
);
var hr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const Ow = {}, Ca = q((e, t) => {
  const n = j("TabsList", Ow, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: l, style: c, ...u } = n, d = xa();
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...u,
      ...d.getStyles("list", {
        className: o,
        style: c,
        classNames: a,
        styles: l,
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
Ca.classes = hr;
Ca.displayName = "@mantine/core/TabsList";
const $w = {}, Ea = q((e, t) => {
  const n = j("TabsPanel", $w, e), { children: r, className: o, value: i, classNames: s, styles: a, style: l, ...c } = n, u = xa(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
  return /* @__PURE__ */ v.createElement(
    G,
    {
      ...c,
      ...u.getStyles("panel", {
        className: o,
        classNames: s,
        styles: a,
        style: [l, d ? void 0 : { display: "none" }],
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
Ea.classes = hr;
Ea.displayName = "@mantine/core/TabsPanel";
const Nw = {}, Pa = q((e, t) => {
  const n = j("TabsTab", Nw, e), {
    className: r,
    children: o,
    rightSection: i,
    leftSection: s,
    value: a,
    onClick: l,
    onKeyDown: c,
    disabled: u,
    color: d,
    style: f,
    classNames: p,
    styles: m,
    vars: g,
    ...h
  } = n, w = vt(), { dir: S } = cr(), b = xa(), y = a === b.value, x = (P) => {
    b.onChange(b.allowTabDeactivation && a === b.value ? null : a), l == null || l(P);
  }, C = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ v.createElement(
    cn,
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
      __vars: { "--tabs-color": d ? kt(d, w) : void 0 },
      onKeyDown: $u({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: b.activateTabWithKeyboard,
        loop: b.loop,
        orientation: b.orientation || "horizontal",
        dir: S,
        onKeyDown: c
      })
    },
    s && /* @__PURE__ */ v.createElement("span", { ...b.getStyles("tabSection", C), "data-position": "left" }, s),
    o && /* @__PURE__ */ v.createElement("span", { ...b.getStyles("tabLabel", C) }, o),
    i && /* @__PURE__ */ v.createElement("span", { ...b.getStyles("tabSection", C), "data-position": "right" }, i)
  );
});
Pa.classes = hr;
Pa.displayName = "@mantine/core/TabsTab";
const uc = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", Tw = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, Lw = (e, { radius: t, color: n }) => ({
  root: {
    "--tabs-radius": dt(t),
    "--tabs-color": kt(n, e)
  }
}), at = q((e, t) => {
  const n = j("Tabs", Tw, e), {
    defaultValue: r,
    value: o,
    onChange: i,
    orientation: s,
    children: a,
    loop: l,
    id: c,
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
    vars: P,
    ...E
  } = n, O = Ht(c), [T, N] = _t({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), M = Q({
    name: "Tabs",
    props: n,
    classes: hr,
    className: x,
    style: C,
    classNames: S,
    styles: b,
    unstyled: y,
    vars: P,
    varsResolver: Lw
  });
  return /* @__PURE__ */ v.createElement(
    Aw,
    {
      value: {
        placement: h,
        value: T,
        orientation: s,
        id: O,
        loop: l,
        activateTabWithKeyboard: u,
        getTabId: Gr(`${O}-tab`, uc),
        getPanelId: Gr(`${O}-panel`, uc),
        onChange: N,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: w,
        unstyled: y,
        getStyles: M
      }
    },
    /* @__PURE__ */ v.createElement(
      G,
      {
        ref: t,
        id: O,
        variant: f,
        mod: {
          orientation: s,
          inverted: s === "horizontal" && g,
          placement: s === "vertical" && h
        },
        ...M("root"),
        ...E
      },
      a
    )
  );
});
at.classes = hr;
at.displayName = "@mantine/core/Tabs";
at.Tab = Pa;
at.Panel = Ea;
at.List = Ca;
const Mw = {}, Da = q((e, t) => {
  const n = j("TextInput", Mw, e);
  return /* @__PURE__ */ v.createElement(qt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
Da.classes = qt.classes;
Da.displayName = "@mantine/core/TextInput";
const _w = ["h1", "h2", "h3", "h4", "h5", "h6"];
function kw(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return _w.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: D(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var lf = { root: "m-8a5d1357" };
const Fw = {
  order: 1
}, Bw = (e, { order: t, size: n, lineClamp: r }) => {
  const o = kw(t, n);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0
    }
  };
}, An = q((e, t) => {
  const n = j("Title", Fw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    order: l,
    vars: c,
    size: u,
    variant: d,
    lineClamp: f,
    ...p
  } = n, m = Q({
    name: "Title",
    props: n,
    classes: lf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Bw
  });
  return [1, 2, 3, 4, 5, 6].includes(l) ? /* @__PURE__ */ v.createElement(
    G,
    {
      ...m("root"),
      component: `h${l}`,
      variant: d,
      ref: t,
      mod: { order: l, "data-line-clamp": typeof f == "number" },
      size: u,
      ...p
    }
  ) : null;
});
An.classes = lf;
An.displayName = "@mantine/core/Title";
const jw = {
  /** Put your mantine theme override here */
};
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Vw = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), dc = Vw, Ii = () => Math.random().toString(36).substring(7).split("").join("."), zw = {
  INIT: `@@redux/INIT${Ii()}`,
  REPLACE: `@@redux/REPLACE${Ii()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ii()}`
}, Qr = zw;
function Ra(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function cf(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(cf)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, l = !1;
  function c() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, w) => {
      s.set(w, h);
    }));
  }
  function u() {
    if (l)
      throw new Error(ge(3));
    return o;
  }
  function d(h) {
    if (typeof h != "function")
      throw new Error(ge(4));
    if (l)
      throw new Error(ge(5));
    let w = !0;
    c();
    const S = a++;
    return s.set(S, h), function() {
      if (w) {
        if (l)
          throw new Error(ge(6));
        w = !1, c(), s.delete(S), i = null;
      }
    };
  }
  function f(h) {
    if (!Ra(h))
      throw new Error(ge(7));
    if (typeof h.type > "u")
      throw new Error(ge(8));
    if (typeof h.type != "string")
      throw new Error(ge(17));
    if (l)
      throw new Error(ge(9));
    try {
      l = !0, o = r(o, h);
    } finally {
      l = !1;
    }
    return (i = s).forEach((S) => {
      S();
    }), h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(ge(10));
    r = h, f({
      type: Qr.REPLACE
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
      [dc]() {
        return this;
      }
    };
  }
  return f({
    type: Qr.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [dc]: m
  };
}
function Ww(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Qr.INIT
    }) > "u")
      throw new Error(ge(12));
    if (typeof n(void 0, {
      type: Qr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ge(13));
  });
}
function Gw(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    Ww(n);
  } catch (i) {
    o = i;
  }
  return function(s = {}, a) {
    if (o)
      throw o;
    let l = !1;
    const c = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u], f = n[d], p = s[d], m = f(p, a);
      if (typeof m > "u")
        throw a && a.type, new Error(ge(14));
      c[d] = m, l = l || m !== p;
    }
    return l = l || r.length !== Object.keys(s).length, l ? c : s;
  };
}
function Zr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Hw(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ge(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (l, ...c) => i(l, ...c)
    }, a = e.map((l) => l(s));
    return i = Zr(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function Uw(e) {
  return Ra(e) && "type" in e && typeof e.type == "string";
}
var uf = Symbol.for("immer-nothing"), fc = Symbol.for("immer-draftable"), We = Symbol.for("immer-state");
function it(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Cn = Object.getPrototypeOf;
function jt(e) {
  return !!e && !!e[We];
}
function Pt(e) {
  var t;
  return e ? df(e) || Array.isArray(e) || !!e[fc] || !!((t = e.constructor) != null && t[fc]) || No(e) || To(e) : !1;
}
var qw = Object.prototype.constructor.toString();
function df(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Cn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === qw;
}
function Xn(e, t) {
  $o(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function $o(e) {
  const t = e[We];
  return t ? t.type_ : Array.isArray(e) ? 1 : No(e) ? 2 : To(e) ? 3 : 0;
}
function rs(e, t) {
  return $o(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function ff(e, t, n) {
  const r = $o(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Kw(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function No(e) {
  return e instanceof Map;
}
function To(e) {
  return e instanceof Set;
}
function Jt(e) {
  return e.copy_ || e.base_;
}
function os(e, t) {
  if (No(e))
    return new Map(e);
  if (To(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && df(e))
    return Cn(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[We];
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
  return Object.create(Cn(e), n);
}
function Ia(e, t = !1) {
  return Lo(e) || jt(e) || !Pt(e) || ($o(e) > 1 && (e.set = e.add = e.clear = e.delete = Yw), Object.freeze(e), t && Xn(e, (n, r) => Ia(r, !0))), e;
}
function Yw() {
  it(2);
}
function Lo(e) {
  return Object.isFrozen(e);
}
var Xw = {};
function on(e) {
  const t = Xw[e];
  return t || it(0, e), t;
}
var Jn;
function pf() {
  return Jn;
}
function Jw(e, t) {
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
function pc(e, t) {
  t && (on("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function is(e) {
  ss(e), e.drafts_.forEach(Qw), e.drafts_ = null;
}
function ss(e) {
  e === Jn && (Jn = e.parent_);
}
function mc(e) {
  return Jn = Jw(Jn, e);
}
function Qw(e) {
  const t = e[We];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function gc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[We].modified_ && (is(t), it(4)), Pt(e) && (e = eo(t, e), t.parent_ || to(t, e)), t.patches_ && on("Patches").generateReplacementPatches_(
    n[We].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = eo(t, n, []), is(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== uf ? e : void 0;
}
function eo(e, t, n) {
  if (Lo(t))
    return t;
  const r = t[We];
  if (!r)
    return Xn(
      t,
      (o, i) => hc(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return to(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Xn(
      i,
      (a, l) => hc(e, r, o, a, l, n, s)
    ), to(e, o, !1), n && e.patches_ && on("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function hc(e, t, n, r, o, i, s) {
  if (jt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !rs(t.assigned_, r) ? i.concat(r) : void 0, l = eo(e, o, a);
    if (ff(n, r, l), jt(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (Pt(o) && !Lo(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    eo(e, o), (!t || !t.scope_.parent_) && to(e, o);
  }
}
function to(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ia(t, n);
}
function Zw(e, t) {
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
  n && (o = [r], i = Qn);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var Aa = {
  get(e, t) {
    if (t === We)
      return e;
    const n = Jt(e);
    if (!rs(n, t))
      return e0(e, n, t);
    const r = n[t];
    return e.finalized_ || !Pt(r) ? r : r === Ai(e.base_, t) ? (Oi(e), e.copy_[t] = ls(r, e)) : r;
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
      const o = Ai(Jt(e), t), i = o == null ? void 0 : o[We];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Kw(n, o) && (n !== void 0 || rs(e.base_, t)))
        return !0;
      Oi(e), as(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ai(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Oi(e), as(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    return Cn(e.base_);
  },
  setPrototypeOf() {
    it(12);
  }
}, Qn = {};
Xn(Aa, (e, t) => {
  Qn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Qn.deleteProperty = function(e, t) {
  return Qn.set.call(this, e, t, void 0);
};
Qn.set = function(e, t, n) {
  return Aa.set.call(this, e[0], t, n, e[0]);
};
function Ai(e, t) {
  const n = e[We];
  return (n ? Jt(n) : e)[t];
}
function e0(e, t, n) {
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
  let n = Cn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Cn(n);
  }
}
function as(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && as(e.parent_));
}
function Oi(e) {
  e.copy_ || (e.copy_ = os(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var t0 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const s = this;
        return function(l = i, ...c) {
          return s.produce(l, (u) => n.call(this, u, ...c));
        };
      }
      typeof n != "function" && it(6), r !== void 0 && typeof r != "function" && it(7);
      let o;
      if (Pt(t)) {
        const i = mc(this), s = ls(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? is(i) : ss(i);
        }
        return pc(i, r), gc(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === uf && (o = void 0), this.autoFreeze_ && Ia(o, !0), r) {
          const i = [], s = [];
          on("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        it(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
      let r, o;
      return [this.produce(t, n, (s, a) => {
        r = s, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Pt(e) || it(8), jt(e) && (e = gf(e));
    const t = mc(this), n = ls(e, void 0);
    return n[We].isManual_ = !0, ss(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[We];
    (!n || !n.isManual_) && it(9);
    const { scope_: r } = n;
    return pc(r, t), gc(void 0, r);
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
function ls(e, t) {
  const n = No(e) ? on("MapSet").proxyMap_(e, t) : To(e) ? on("MapSet").proxySet_(e, t) : Zw(e, t);
  return (t ? t.scope_ : pf()).drafts_.push(n), n;
}
function gf(e) {
  return jt(e) || it(10, e), hf(e);
}
function hf(e) {
  if (!Pt(e) || Lo(e))
    return e;
  const t = e[We];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = os(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = os(e, !0);
  return Xn(n, (r, o) => {
    ff(n, r, hf(o));
  }), t && (t.finalized_ = !1), n;
}
var Ge = new t0(), bf = Ge.produce;
Ge.produceWithPatches.bind(
  Ge
);
Ge.setAutoFreeze.bind(Ge);
Ge.setUseStrictShallowCopy.bind(Ge);
Ge.applyPatches.bind(Ge);
Ge.createDraft.bind(Ge);
Ge.finishDraft.bind(Ge);
function n0(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function r0(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function o0(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var bc = (e) => Array.isArray(e) ? e : [e];
function i0(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return o0(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function s0(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var a0 = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, l0 = typeof WeakRef < "u" ? WeakRef : a0, c0 = 0, yc = 1;
function Rr() {
  return {
    s: c0,
    v: void 0,
    o: null,
    p: null
  };
}
function Oa(e, t = {}) {
  let n = Rr();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function s() {
    var d;
    let a = n;
    const { length: l } = arguments;
    for (let f = 0, p = l; f < p; f++) {
      const m = arguments[f];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let g = a.o;
        g === null && (a.o = g = /* @__PURE__ */ new WeakMap());
        const h = g.get(m);
        h === void 0 ? (a = Rr(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = Rr(), g.set(m, a)) : a = h;
      }
    }
    const c = a;
    let u;
    if (a.s === yc ? u = a.v : (u = e.apply(null, arguments), i++), c.s = yc, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new l0(u) : u;
    }
    return c.v = u, u;
  }
  return s.clearCache = () => {
    n = Rr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function yf(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, l = {}, c = o.pop();
    typeof c == "object" && (l = c, c = o.pop()), n0(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const u = {
      ...n,
      ...l
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Oa,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = bc(f), w = bc(m), S = i0(o), b = d(function() {
      return i++, c.apply(
        null,
        arguments
      );
    }, ...h), y = p(function() {
      s++;
      const C = s0(
        S,
        arguments
      );
      return a = b.apply(null, C), a;
    }, ...w);
    return Object.assign(y, {
      resultFunc: c,
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
var vf = /* @__PURE__ */ yf(Oa), u0 = Object.assign(
  (e, t = vf) => {
    r0(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (i) => e[i]
    );
    return t(
      r,
      (...i) => i.reduce((s, a, l) => (s[n[l]] = a, s), {})
    );
  },
  { withTypes: () => u0 }
);
function wf(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var d0 = wf(), f0 = wf, p0 = (...e) => {
  const t = yf(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(jt(s) ? gf(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
p0(Oa);
var m0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Zr : Zr.apply(null, arguments);
}, g0 = (e) => e && typeof e.match == "function";
function xt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Le(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => Uw(r) && r.type === e, n;
}
var Sf = class Vn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Vn.prototype);
  }
  static get [Symbol.species]() {
    return Vn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Vn(...t[0].concat(this)) : new Vn(...t.concat(this));
  }
};
function vc(e) {
  return Pt(e) ? bf(e, () => {
  }) : e;
}
function wc(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Le(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function h0(e) {
  return typeof e == "boolean";
}
var b0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Sf();
  return n && (h0(n) ? s.push(d0) : s.push(f0(n.extraArgument))), s;
}, y0 = "RTK_autoBatch", xf = (e) => (t) => {
  setTimeout(t, e);
}, v0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : xf(10), w0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? v0 : e.type === "callback" ? e.queueNotification : xf(e.timeout), c = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[y0]), i = !o, i && (s || (s = !0, l(c))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, S0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Sf(e);
  return r && o.push(w0(typeof r == "object" ? r : void 0)), o;
}, x0 = !0;
function C0(e) {
  const t = b0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Ra(n))
    a = Gw(n);
  else
    throw new Error(Le(1));
  let l;
  typeof r == "function" ? l = r(t) : l = t();
  let c = Zr;
  o && (c = m0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !x0,
    ...typeof o == "object" && o
  }));
  const u = Hw(...l), d = S0(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = c(...f);
  return cf(a, i, p);
}
function Cf(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(Le(28));
      if (a in t)
        throw new Error(Le(29));
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
function E0(e) {
  return typeof e == "function";
}
function P0(e, t) {
  let [n, r, o] = Cf(t), i;
  if (E0(e))
    i = () => vc(e());
  else {
    const a = vc(e);
    i = () => a;
  }
  function s(a = i(), l) {
    let c = [n[l.type], ...r.filter(({
      matcher: u
    }) => u(l)).map(({
      reducer: u
    }) => u)];
    return c.filter((u) => !!u).length === 0 && (c = [o]), c.reduce((u, d) => {
      if (d)
        if (jt(u)) {
          const p = d(u, l);
          return p === void 0 ? u : p;
        } else {
          if (Pt(u))
            return bf(u, (f) => d(f, l));
          {
            const f = d(u, l);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(Le(9));
            }
            return f;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var D0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ef = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += D0[Math.random() * 64 | 0];
  return t;
}, R0 = (e, t) => g0(e) ? e.match(t) : e(t);
function I0(...e) {
  return (t) => e.some((n) => R0(n, t));
}
var A0 = ["name", "message", "stack", "code"], $i = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Pe(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Sc = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Pe(this, "_type");
    this.payload = e, this.meta = t;
  }
}, O0 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of A0)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Mo = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = xt(t + "/fulfilled", (l, c, u, d) => ({
      payload: l,
      meta: {
        ...d || {},
        arg: u,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), i = xt(t + "/pending", (l, c, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: c,
        requestId: l,
        requestStatus: "pending"
      }
    })), s = xt(t + "/rejected", (l, c, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || O0)(l || "Rejected"),
      meta: {
        ...f || {},
        arg: u,
        requestId: c,
        rejectedWithValue: !!d,
        requestStatus: "rejected",
        aborted: (l == null ? void 0 : l.name) === "AbortError",
        condition: (l == null ? void 0 : l.name) === "ConditionError"
      }
    }));
    function a(l) {
      return (c, u, d) => {
        const f = r != null && r.idGenerator ? r.idGenerator(l) : Ef(), p = new AbortController();
        let m, g;
        function h(S) {
          g = S, p.abort();
        }
        const w = async function() {
          var y, x;
          let S;
          try {
            let C = (y = r == null ? void 0 : r.condition) == null ? void 0 : y.call(r, l, {
              getState: u,
              extra: d
            });
            if (N0(C) && (C = await C), C === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const P = new Promise((E, O) => {
              m = () => {
                O({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, p.signal.addEventListener("abort", m);
            });
            c(i(f, l, (x = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : x.call(r, {
              requestId: f,
              arg: l
            }, {
              getState: u,
              extra: d
            }))), S = await Promise.race([P, Promise.resolve(n(l, {
              dispatch: c,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: h,
              rejectWithValue: (E, O) => new $i(E, O),
              fulfillWithValue: (E, O) => new Sc(E, O)
            })).then((E) => {
              if (E instanceof $i)
                throw E;
              return E instanceof Sc ? o(E.payload, f, l, E.meta) : o(E, f, l);
            })]);
          } catch (C) {
            S = C instanceof $i ? s(null, f, l, C.payload, C.meta) : s(C, f, l);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(S) && S.meta.condition || c(S), S;
        }();
        return Object.assign(w, {
          abort: h,
          requestId: f,
          arg: l,
          unwrap() {
            return w.then($0);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: I0(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function $0(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function N0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var T0 = Symbol.for("rtk-slice-createasyncthunk");
function L0(e, t) {
  return `${e}/${t}`;
}
function M0({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[T0];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Le(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(k0()) : o.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(b, y) {
        const x = typeof b == "string" ? b : b.type;
        if (!x)
          throw new Error(Le(12));
        if (x in c.sliceCaseReducersByType)
          throw new Error(Le(13));
        return c.sliceCaseReducersByType[x] = y, u;
      },
      addMatcher(b, y) {
        return c.sliceMatchers.push({
          matcher: b,
          reducer: y
        }), u;
      },
      exposeAction(b, y) {
        return c.actionCreators[b] = y, u;
      },
      exposeCaseReducer(b, y) {
        return c.sliceCaseReducersByName[b] = y, u;
      }
    };
    l.forEach((b) => {
      const y = a[b], x = {
        reducerName: b,
        type: L0(i, b),
        createNotation: typeof o.reducers == "function"
      };
      B0(y) ? V0(x, y, u, t) : F0(x, y, u);
    });
    function d() {
      const [b = {}, y = [], x = void 0] = typeof o.extraReducers == "function" ? Cf(o.extraReducers) : [o.extraReducers], C = {
        ...b,
        ...c.sliceCaseReducersByType
      };
      return P0(o.initialState, (P) => {
        for (let E in C)
          P.addCase(E, C[E]);
        for (let E of c.sliceMatchers)
          P.addMatcher(E.matcher, E.reducer);
        for (let E of y)
          P.addMatcher(E.matcher, E.reducer);
        x && P.addDefaultCase(x);
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
      function x(P) {
        let E = P[b];
        return typeof E > "u" && y && (E = h()), E;
      }
      function C(P = f) {
        const E = wc(p, y, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return wc(E, P, {
          insert: () => {
            const O = {};
            for (const [T, N] of Object.entries(o.selectors ?? {}))
              O[T] = _0(N, P, h, y);
            return O;
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
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
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
function _0(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var $a = M0();
function k0() {
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
function F0({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !j0(r))
      throw new Error(Le(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? xt(e, s) : xt(e));
}
function B0(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function j0(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function V0({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Le(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: l,
    settled: c,
    options: u
  } = n, d = o(e, i, u);
  r.exposeAction(t, d), s && r.addCase(d.fulfilled, s), a && r.addCase(d.pending, a), l && r.addCase(d.rejected, l), c && r.addMatcher(d.settled, c), r.exposeCaseReducer(t, {
    fulfilled: s || Ir,
    pending: a || Ir,
    rejected: l || Ir,
    settled: c || Ir
  });
}
function Ir() {
}
var z0 = (e, t) => {
  if (typeof e != "function")
    throw new Error(Le(32));
}, Na = "listenerMiddleware", W0 = (e) => {
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
    throw new Error(Le(21));
  return z0(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, G0 = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = W0(e);
  return {
    id: Ef(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Le(22));
    }
  };
}, {
  withTypes: () => G0
}), H0 = Object.assign(xt(`${Na}/add`), {
  withTypes: () => H0
});
xt(`${Na}/removeAll`);
var U0 = Object.assign(xt(`${Na}/remove`), {
  withTypes: () => U0
});
function Le(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class q0 {
  constructor(t = {}) {
    Pe(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Pe(this, "securityData", null);
    Pe(this, "securityWorker");
    Pe(this, "abortControllers", /* @__PURE__ */ new Map());
    Pe(this, "customFetch", (...t) => fetch(...t));
    Pe(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Pe(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    Pe(this, "contentFormatters", {
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
    Pe(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const r = this.abortControllers.get(t);
        return r ? r.signal : void 0;
      }
      const n = new AbortController();
      return this.abortControllers.set(t, n), n.signal;
    });
    Pe(this, "abortRequest", (t) => {
      const n = this.abortControllers.get(t);
      n && (n.abort(), this.abortControllers.delete(t));
    });
    Pe(this, "request", async ({
      body: t,
      secure: n,
      path: r,
      type: o,
      query: i,
      format: s,
      baseUrl: a,
      cancelToken: l,
      ...c
    }) => {
      const u = (typeof n == "boolean" ? n : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, d = this.mergeRequestParams(c, u), f = i && this.toQueryString(i), p = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], m = s || d.format;
      return this.customFetch(`${a || this.baseUrl || ""}${r}${f ? `?${f}` : ""}`, {
        ...d,
        headers: {
          ...d.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (l ? this.createAbortSignal(l) : d.signal) || null,
        body: typeof t > "u" || t === null ? null : p(t)
      }).then(async (g) => {
        const h = g;
        h.data = null, h.error = null;
        const w = m ? await g[m]().then((S) => (h.ok ? h.data = S : h.error = S, h)).catch((S) => (h.error = S, h)) : h;
        if (l && this.abortControllers.delete(l), !g.ok)
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
 * <p>API to access the buildingSMART Data Dictionary.</p><p>For manually uploading import files, please go to <a href="https://manage.bsdd.buildingsmart.org">bSDD Management portal</a>. Version history can be found at <a href="https://github.com/buildingSMART/bSDD/blob/master/API%20version%20history.md">Version history</a>.</p><p>Keep an eye on (planned) updates: <a href="https://forums.buildingsmart.org/t/bsdd-tech-updates/4889">bSDD tech updates</a></p><h3>For client developers</h3><p>If you're creating a desktop client that only calls the not secured APIs, you're ready to go.<br/>If you don't use the secured APIs but want to call the other APIs from your website or SPA, then we need the URL of your website to allow CORS.</p><p>If you are going to build a client that is going to use secured APIs, you must request a Client ID. You can do so by sending us an email and give:</p><ul><li>the name of the client application</li><li>type of application:<ul><li>Web application</li><li>Single-page application</li><li>iOS / macOS, Object-C, Swift, Xamarin</li><li>Adroid - Java, Kotlin, Xamarin</li><li>Mobile/desktop</li></ul> <li>which development language are you using? (sometimes the redirectUri to be configured depends on the used library)</li><li>if it is a website or SPA, specify the return url (the login page will redirect to this url after user has logged in)</li></ul>
 */
class K0 extends q0 {
  constructor() {
    super(...arguments);
    Pe(this, "api", {
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
class br extends K0 {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const Y0 = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, X0 = {
  bsddApiEnvironment: "test",
  mainDictionary: null,
  filterDictionaries: [],
  language: "EN"
}, Pf = $a({
  name: "settings",
  initialState: X0,
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
}), _o = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? Y0[t] : null;
}, J0 = vf(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t) => e ? [e, ...t] : t
), Ta = (e) => e.settings.mainDictionary, Df = (e) => e.settings.filterDictionaries, Q0 = (e) => e.settings.language, Z0 = (e) => e.settings.bsddApiEnvironment, { setSettings: Rf, setBsddApiEnvironment: rR, setMainDictionary: oR, setFilterDictionaries: iR, setLanguage: sR } = Pf.actions, eS = Pf.reducer, If = 500, tS = 500;
let en = null, kr = {};
const xc = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, nS = (e) => {
  const t = _o(e);
  return t && (!en || en.baseUrl !== t) && (en = new br(t)), en;
}, cs = Mo("bsdd/fetchDictionaries", (e, t) => {
  if (console.log("fetchDictionaries", e), !e)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new br(e), r = tS;
  let o = 0;
  const i = [];
  return new Promise((s, a) => {
    function l() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: !0, Limit: r, Offset: o }).then((c) => {
        c.ok || a(new Error(`HTTP error! status: ${c.status}`));
        const { data: { dictionaries: u, totalCount: d } = {} } = c;
        if (u && typeof d < "u")
          if (i.push(...u), o += r, i.length >= d) {
            const f = i.reduce((p, m) => (p[m.uri] = m, p), {});
            s(f);
          } else
            l();
        else
          a(new Error(`bSDD API error! status: ${c.status}`));
      });
    }
    l();
  });
}), Af = Mo(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (kr[e])
      return await kr[e];
    const o = (async () => {
      const s = nS(t());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const a = [];
      let l = 0, c;
      for (; ; ) {
        const u = await rS(s, e, l), d = u.classes ?? [];
        if (a.push(...d), l === 0 && (c = u.classesTotalCount, c == null))
          throw new Error("Total count is null or undefined");
        if (c != null && a.length >= c)
          break;
        l += If;
      }
      return n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: a } }), a;
    })();
    return kr[e] = o, await o;
  }
), Of = $a({
  name: "bsdd",
  initialState: xc,
  reducers: {
    resetState: () => xc,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(cs.pending, (t) => {
      t.loaded = !1;
    }).addCase(cs.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Af.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
Mo("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
  const r = t();
  if (r.bsdd.classes[e])
    return r.bsdd.classes[e];
  if (!en)
    throw new Error("BsddApi is not initialized");
  const o = await en.api.classV1List({
    Uri: e,
    IncludeClassProperties: !0,
    IncludeChildClassReferences: !0,
    IncludeClassRelations: !0
    // IncludeReverseRelations: true,
    // languageCode: languageCode || undefined,
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  const { data: i } = o;
  return n({ type: "bsdd/addClass", payload: { uri: e, data: i } }), i;
});
async function rS(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: If,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const $f = (e, t) => e.bsdd.dictionaries[t], oS = (e, t) => e.bsdd.dictionaryClasses[t], iS = (e) => e.bsdd.dictionaries, sS = (e) => e.bsdd.loaded, { resetState: aS } = Of.actions;
function lS(e) {
  return (t) => {
    en = new br(e), kr = {}, t(aS());
  };
}
const cS = Of.reducer;
function La(e) {
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
const uS = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = oS(t, e.location);
  if (r)
    return r;
  const o = await n(Af(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function dS(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function gn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function fS(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return gn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await uS(e.referencedSource, n, t);
  if (!r)
    return gn("Failed to fetch classes for the referencedSource location", e);
  const o = dS(e, r);
  if (!o)
    return gn(
      "Failed to find a match for the IfcClassificationReference name or code in the classes",
      e
    );
  if (!o.uri)
    return gn("Failed to find a URI for the matched class", e);
  const { uri: i, code: s, name: a } = o, l = {
    ...e,
    location: i ?? void 0,
    identification: s ?? void 0,
    name: a ?? void 0
  };
  if (!l.referencedSource || !l.referencedSource.location)
    return gn("referencedSource or its location is missing", l);
  const c = $f(n, l.referencedSource.location);
  return c ? (l.referencedSource = La(c), {
    ifcClassificationReference: l,
    validationState: "fixed",
    message: null
  }) : gn("Failed to find a matching dictionary for the matched class", l);
}
function Cc(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = $f(e, t.ifcClassification.location), r = La(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Nf = tg, Te = Hm, pS = {
  ifcEntities: []
}, Tf = $a({
  name: "ifcData",
  initialState: pS,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), mS = (e) => e.ifcData.ifcEntities, { setIfcData: gS } = Tf.actions, hS = Mo(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        const { hasAssociations: s } = i;
        if (s) {
          const a = (await Promise.all(
            s.map(async (l) => {
              if (l.type === "IfcClassificationReference") {
                const { validationState: c, ifcClassificationReference: u, message: d } = await fS(l, t, r);
                return c === "invalid" ? null : u;
              }
              return l;
            })
          )).filter((l) => l !== null);
          return { ...i, hasAssociations: a };
        }
        return i;
      })
    );
    t(gS(o));
  }
), bS = Tf.reducer;
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
var Lf = { exports: {} }, yS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", vS = yS, wS = vS;
function Mf() {
}
function _f() {
}
_f.resetWarningCache = Mf;
var SS = function() {
  function e(r, o, i, s, a, l) {
    if (l !== wS) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw c.name = "Invariant Violation", c;
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
    checkPropTypes: _f,
    resetWarningCache: Mf
  };
  return n.PropTypes = n, n;
};
Lf.exports = SS();
var xS = Lf.exports;
const Yt = /* @__PURE__ */ bu(xS);
var CS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, ES = Object.defineProperty, PS = Object.defineProperties, DS = Object.getOwnPropertyDescriptors, no = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, Ff = Object.prototype.propertyIsEnumerable, Ec = (e, t, n) => t in e ? ES(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pc = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && Ec(e, n, t[n]);
  if (no)
    for (var n of no(t))
      Ff.call(t, n) && Ec(e, n, t[n]);
  return e;
}, RS = (e, t) => PS(e, DS(t)), IS = (e, t) => {
  var n = {};
  for (var r in e)
    kf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && no)
    for (var r of no(e))
      t.indexOf(r) < 0 && Ff.call(e, r) && (n[r] = e[r]);
  return n;
}, Ma = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: l = 24, stroke: c = 2, children: u } = s, d = IS(s, ["color", "size", "stroke", "children"]);
      return hl(
        "svg",
        Pc(RS(Pc({
          ref: i
        }, CS), {
          width: l,
          height: l,
          stroke: a,
          strokeWidth: c,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => hl(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Yt.string,
    size: Yt.oneOfType([Yt.string, Yt.number]),
    stroke: Yt.oneOfType([Yt.string, Yt.number])
  }, r.displayName = `${t}`, r;
}, AS = Ma("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), OS = Ma("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), $S = Ma("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function NS(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function TS(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function LS(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return NS(i) && TS(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function MS({ item: e, bsddClass: t, index: n, setCardColor: r }) {
  const { t: o } = zt(), i = Te(J0), [s, a] = U("grey"), [l, c] = U([]), [u, d] = U([]);
  W(() => {
    function m(g) {
      a(g), r(n, g);
    }
    l.every((g) => g !== null) ? m("green") : l.some((g) => g !== null) ? m("orange") : m("red");
  }, [l, n, r]), W(() => {
    const m = l.map((g) => g !== null ? "green" : "red");
    d(m);
  }, [l]), W(() => {
    c(
      i.map((m) => LS(e, m))
    );
  }, [e, i]);
  function f(m) {
    var h;
    const g = JSON.stringify(m);
    (h = window == null ? void 0 : window.bsddBridge) == null || h.bsddSearch(g);
  }
  function p(m) {
    var h;
    const g = JSON.stringify(m);
    (h = window == null ? void 0 : window.bsddBridge) == null || h.bsddSelect(g);
  }
  return /* @__PURE__ */ k.jsxs(wn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ k.jsx(Kn, { size: "1.5em", color: us[s] }),
    /* @__PURE__ */ k.jsxs(nn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ k.jsx(nn.Target, { children: /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Je, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ k.jsxs(nn.Dropdown, { children: [
        /* @__PURE__ */ k.jsxs(Je, { children: [
          o("Validation per dictionary"),
          ":"
        ] }),
        i.map((m, g) => /* @__PURE__ */ k.jsxs(wn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
          /* @__PURE__ */ k.jsx(Kn, { size: "1em", color: us[u[g]] }),
          /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Je, { className: "truncate", children: m.ifcClassification.name }) })
        ] }, m.ifcClassification.location))
      ] })
    ] }),
    /* @__PURE__ */ k.jsx(xn, { label: o("Attach to type"), children: /* @__PURE__ */ k.jsx(Un, { radius: "xl", onClick: () => f(e), children: /* @__PURE__ */ k.jsx(OS, { size: 20 }) }) }),
    /* @__PURE__ */ k.jsx(xn, { label: o("Select objects"), children: /* @__PURE__ */ k.jsx(Un, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ k.jsx($S, { size: 20 }) }) })
  ] });
}
function _S(e, t) {
  const n = t.find((r) => r.code === e);
  return n || !1;
}
function kS({ category: e, bbbr: t, items: n, index: r }) {
  const { t: o } = zt(), [i, s] = U(), [a, l] = U("grey"), [c, u] = U(new Array(n.length).fill("grey")), d = Te(_o), f = Z((p, m) => {
    u((g) => {
      const h = [...g];
      return h[p] = m, h;
    });
  }, []);
  return W(() => {
    const p = _S(e, t);
    if (d && p) {
      const m = p;
      new br(d).api.classV1List({
        Uri: m.uri,
        IncludeClassProperties: !0,
        IncludeChildClassReferences: !0,
        IncludeClassRelations: !0
        // languageCode: languageCode || undefined,
      }).then((h) => {
        if (!h.ok)
          throw new Error(`HTTP error! status: ${h.status}`);
        h.data && s(h.data);
      }).catch((h) => {
        throw new Error(`bSDD API error! status: ${h}`);
      });
    }
  }, [e, t, d]), W(() => {
    c.includes("orange") || c.includes("red") && c.includes("green") ? l("orange") : c.every((p) => p === "red") ? l("red") : c.every((p) => p === "green") && l("green");
  }, [c]), /* @__PURE__ */ k.jsxs(oe.Item, { value: r, children: [
    /* @__PURE__ */ k.jsx(oe.Control, { children: /* @__PURE__ */ k.jsxs(wn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ k.jsx(Kn, { size: "1.5em", color: us[a], children: /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "white", children: n.length }) }),
      /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Je, { className: "truncate", children: e.length > 0 ? e : o("No description") }) })
    ] }) }),
    /* @__PURE__ */ k.jsx(oe.Panel, { mt: "-xs", pl: "xl", children: n.map((p, m) => /* @__PURE__ */ k.jsx(
      MS,
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
let FS;
function BS(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function jS() {
  const e = Te(Ta), t = Te(_o), n = Te(mS), r = Gn(() => BS(n, "description"), [n]), [o, i] = U([]);
  return W(() => {
    (async () => {
      try {
      } catch (a) {
        console.error(a.message);
      }
    })();
  }, []), W(() => {
    var l;
    if (!t || !e)
      return;
    const s = (l = e == null ? void 0 : e.ifcClassification) == null ? void 0 : l.location;
    if (!s)
      return;
    new br(t).api.dictionaryV1ClassesList({
      Uri: s
      // languageCode: languageCode || undefined
    }).then((c) => {
      if (!c.ok)
        throw new Error(`HTTP error! status: ${c.status}`);
      c.data && c.data.classes && i(c.data.classes);
    }).catch((c) => {
      throw new Error(`bSDD API error! status: ${c}`);
    });
  }, [e, t]), /* @__PURE__ */ k.jsx(at.Panel, { value: "link", children: /* @__PURE__ */ k.jsx(oe, { chevronPosition: "left", children: Object.entries(r).map(([s, a], l) => /* @__PURE__ */ k.jsx(
    kS,
    {
      category: s,
      items: a,
      bbbr: o,
      index: s || l.toString()
    },
    s
  )) }) });
}
function Dc(e, t) {
  const n = t.find((r) => r.ifcClassification.location === e.uri);
  return n || {
    ifcClassification: La(e),
    parameterMapping: ""
  };
}
function VS({ id: e, settings: t, setSettings: n, setUnsavedChanges: r, setIsLoading: o }) {
  var m;
  const { t: i } = zt(), s = Te(iS), a = Te(Ta), [l, c] = U([]), [u, d] = U([]);
  W(() => {
    c(
      Object.values(s).map((g) => ({ value: g.uri, label: `${g.name} (${g.version})` }))
    );
  }, [s, c]), W(() => {
    t && d(
      t.filterDictionaries.map((g) => ({
        value: g.ifcClassification.location || "",
        label: g.ifcClassification.location || ""
      }))
    );
  }, [t == null ? void 0 : t.filterDictionaries, d]), W(() => {
    l.length == 0 || !a || o(!1);
  }, [l, a]);
  const f = (g) => {
    const h = Object.values(s).find(
      (S) => S.uri === g
    );
    if (!h || !t)
      return;
    const w = [];
    t.mainDictionary && w.push(t.mainDictionary), n({ ...t, mainDictionary: Dc(h, w) }), r(!0);
  }, p = (g) => {
    if (t) {
      const h = Object.values(s).filter((w) => g.includes(w.uri)).map((w) => Dc(w, t.filterDictionaries));
      n({ ...t, filterDictionaries: h }), r(!0);
    }
  };
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx(An, { order: 5, children: i("Dictionary selection") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: i("Dictionary selection help text") })
    ] }),
    /* @__PURE__ */ k.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ k.jsx(
        gr,
        {
          id: "mainDictionary",
          label: i("Main dictionary"),
          value: (m = t == null ? void 0 : t.mainDictionary) == null ? void 0 : m.ifcClassification.location,
          onChange: f,
          placeholder: "Select main dictionary",
          data: l,
          searchable: !0,
          clearable: !0
        }
      ),
      /* @__PURE__ */ k.jsx(Sa, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        va,
        {
          id: "filterDictionaries",
          label: i("Selection filter dictionaries"),
          value: u.map((g) => g.value),
          onChange: (g) => {
            p(g);
          },
          placeholder: "Select filter dictionaries",
          data: l,
          searchable: !0,
          clearable: !0,
          hidePickedOptions: !0
        }
      )
    ] })
  ] }, e);
}
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function zS(e, t) {
  if (Zn(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Zn(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function WS(e) {
  var t = zS(e, "string");
  return Zn(t) == "symbol" ? t : String(t);
}
function GS(e, t, n) {
  return t = WS(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Rc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ic(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rc(Object(n), !0).forEach(function(r) {
      GS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $e(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ac = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Ni = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Oc = {
  INIT: "@@redux/INIT" + Ni(),
  REPLACE: "@@redux/REPLACE" + Ni(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Ni();
  }
};
function HS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Bf(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error($e(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error($e(1));
    return n(Bf)(e, t);
  }
  if (typeof e != "function")
    throw new Error($e(2));
  var o = e, i = t, s = [], a = s, l = !1;
  function c() {
    a === s && (a = s.slice());
  }
  function u() {
    if (l)
      throw new Error($e(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error($e(4));
    if (l)
      throw new Error($e(5));
    var h = !0;
    return c(), a.push(g), function() {
      if (h) {
        if (l)
          throw new Error($e(6));
        h = !1, c();
        var S = a.indexOf(g);
        a.splice(S, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!HS(g))
      throw new Error($e(7));
    if (typeof g.type > "u")
      throw new Error($e(8));
    if (l)
      throw new Error($e(9));
    try {
      l = !0, i = o(i, g);
    } finally {
      l = !1;
    }
    for (var h = s = a, w = 0; w < h.length; w++) {
      var S = h[w];
      S();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error($e(10));
    o = g, f({
      type: Oc.REPLACE
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
          throw new Error($e(11));
        function b() {
          S.next && S.next(u());
        }
        b();
        var y = h(b);
        return {
          unsubscribe: y
        };
      }
    }, g[Ac] = function() {
      return this;
    }, g;
  }
  return f({
    type: Oc.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[Ac] = m, r;
}
function $c(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Nc(e, t) {
  if (typeof e == "function")
    return $c(e, t);
  if (typeof e != "object" || e === null)
    throw new Error($e(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = $c(o, t));
  }
  return n;
}
function jf() {
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
function US() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error($e(15));
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(l) {
        return l(s);
      });
      return i = jf.apply(void 0, a)(o.dispatch), Ic(Ic({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var Vf = { exports: {} }, zf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En = v;
function qS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var KS = typeof Object.is == "function" ? Object.is : qS, YS = En.useState, XS = En.useEffect, JS = En.useLayoutEffect, QS = En.useDebugValue;
function ZS(e, t) {
  var n = t(), r = YS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return JS(function() {
    o.value = n, o.getSnapshot = t, Ti(o) && i({ inst: o });
  }, [e, n, t]), XS(function() {
    return Ti(o) && i({ inst: o }), e(function() {
      Ti(o) && i({ inst: o });
    });
  }, [e]), QS(n), n;
}
function Ti(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !KS(e, n);
  } catch {
    return !0;
  }
}
function ex(e, t) {
  return t();
}
var tx = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? ex : ZS;
zf.useSyncExternalStore = En.useSyncExternalStore !== void 0 ? En.useSyncExternalStore : tx;
Vf.exports = zf;
var Wf = Vf.exports, nx = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko = v, rx = Wf;
function ox(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ix = typeof Object.is == "function" ? Object.is : ox, sx = rx.useSyncExternalStore, ax = ko.useRef, lx = ko.useEffect, cx = ko.useMemo, ux = ko.useDebugValue;
nx.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = ax(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = cx(function() {
    function l(p) {
      if (!c) {
        if (c = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, ix(u, p))
        return m;
      var g = r(p);
      return o !== void 0 && o(m, g) ? m : (u = p, d = g);
    }
    var c = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, o]);
  var a = sx(e, i[0], i[1]);
  return lx(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), ux(a), a;
};
function dx(e) {
  e();
}
let Gf = dx;
const fx = (e) => Gf = e, px = () => Gf, Tc = Symbol.for("react-redux-context"), Lc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function mx() {
  var e;
  if (!R.createContext)
    return {};
  const t = (e = Lc[Tc]) != null ? e : Lc[Tc] = /* @__PURE__ */ new Map();
  let n = t.get(R.createContext);
  return n || (n = R.createContext(null), t.set(R.createContext, n)), n;
}
const Hf = /* @__PURE__ */ mx(), gx = () => {
  throw new Error("uSES not initialized!");
};
var Uf = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe = typeof Symbol == "function" && Symbol.for, _a = pe ? Symbol.for("react.element") : 60103, ka = pe ? Symbol.for("react.portal") : 60106, Fo = pe ? Symbol.for("react.fragment") : 60107, Bo = pe ? Symbol.for("react.strict_mode") : 60108, jo = pe ? Symbol.for("react.profiler") : 60114, Vo = pe ? Symbol.for("react.provider") : 60109, zo = pe ? Symbol.for("react.context") : 60110, Fa = pe ? Symbol.for("react.async_mode") : 60111, Wo = pe ? Symbol.for("react.concurrent_mode") : 60111, Go = pe ? Symbol.for("react.forward_ref") : 60112, Ho = pe ? Symbol.for("react.suspense") : 60113, hx = pe ? Symbol.for("react.suspense_list") : 60120, Uo = pe ? Symbol.for("react.memo") : 60115, qo = pe ? Symbol.for("react.lazy") : 60116, bx = pe ? Symbol.for("react.block") : 60121, yx = pe ? Symbol.for("react.fundamental") : 60117, vx = pe ? Symbol.for("react.responder") : 60118, wx = pe ? Symbol.for("react.scope") : 60119;
function He(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _a:
        switch (e = e.type, e) {
          case Fa:
          case Wo:
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
              case Vo:
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
function qf(e) {
  return He(e) === Wo;
}
ee.AsyncMode = Fa;
ee.ConcurrentMode = Wo;
ee.ContextConsumer = zo;
ee.ContextProvider = Vo;
ee.Element = _a;
ee.ForwardRef = Go;
ee.Fragment = Fo;
ee.Lazy = qo;
ee.Memo = Uo;
ee.Portal = ka;
ee.Profiler = jo;
ee.StrictMode = Bo;
ee.Suspense = Ho;
ee.isAsyncMode = function(e) {
  return qf(e) || He(e) === Fa;
};
ee.isConcurrentMode = qf;
ee.isContextConsumer = function(e) {
  return He(e) === zo;
};
ee.isContextProvider = function(e) {
  return He(e) === Vo;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _a;
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
  return typeof e == "string" || typeof e == "function" || e === Fo || e === Wo || e === jo || e === Bo || e === Ho || e === hx || typeof e == "object" && e !== null && (e.$$typeof === qo || e.$$typeof === Uo || e.$$typeof === Vo || e.$$typeof === zo || e.$$typeof === Go || e.$$typeof === yx || e.$$typeof === vx || e.$$typeof === wx || e.$$typeof === bx);
};
ee.typeOf = He;
Uf.exports = ee;
var Sx = Uf.exports, Ba = Sx, xx = {
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
}, Cx = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ex = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Kf = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ja = {};
ja[Ba.ForwardRef] = Ex;
ja[Ba.Memo] = Kf;
function Mc(e) {
  return Ba.isMemo(e) ? Kf : ja[e.$$typeof] || xx;
}
var Px = Object.defineProperty, Dx = Object.getOwnPropertyNames, _c = Object.getOwnPropertySymbols, Rx = Object.getOwnPropertyDescriptor, Ix = Object.getPrototypeOf, kc = Object.prototype;
function Yf(e, t, n) {
  if (typeof t != "string") {
    if (kc) {
      var r = Ix(t);
      r && r !== kc && Yf(e, r, n);
    }
    var o = Dx(t);
    _c && (o = o.concat(_c(t)));
    for (var i = Mc(e), s = Mc(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!Cx[l] && !(n && n[l]) && !(s && s[l]) && !(i && i[l])) {
        var c = Rx(t, l);
        try {
          Px(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ax = Yf;
const Fc = /* @__PURE__ */ bu(Ax);
var Xf = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va = Symbol.for("react.element"), za = Symbol.for("react.portal"), Ko = Symbol.for("react.fragment"), Yo = Symbol.for("react.strict_mode"), Xo = Symbol.for("react.profiler"), Jo = Symbol.for("react.provider"), Qo = Symbol.for("react.context"), Ox = Symbol.for("react.server_context"), Zo = Symbol.for("react.forward_ref"), ei = Symbol.for("react.suspense"), ti = Symbol.for("react.suspense_list"), ni = Symbol.for("react.memo"), ri = Symbol.for("react.lazy"), $x = Symbol.for("react.offscreen"), Jf;
Jf = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Va:
        switch (e = e.type, e) {
          case Ko:
          case Xo:
          case Yo:
          case ei:
          case ti:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ox:
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
      case za:
        return t;
    }
  }
}
te.ContextConsumer = Qo;
te.ContextProvider = Jo;
te.Element = Va;
te.ForwardRef = Zo;
te.Fragment = Ko;
te.Lazy = ri;
te.Memo = ni;
te.Portal = za;
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
  return typeof e == "object" && e !== null && e.$$typeof === Va;
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
  return ot(e) === za;
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
  return typeof e == "string" || typeof e == "function" || e === Ko || e === Xo || e === Yo || e === ei || e === ti || e === $x || typeof e == "object" && e !== null && (e.$$typeof === ri || e.$$typeof === ni || e.$$typeof === Jo || e.$$typeof === Qo || e.$$typeof === Zo || e.$$typeof === Jf || e.getModuleId !== void 0);
};
te.typeOf = ot;
Xf.exports = te;
var Nx = Xf.exports;
const Tx = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function Lx(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, l, c, u, d, f;
  function p(S, b) {
    return l = S, c = b, u = e(l, c), d = t(r, c), f = n(u, d, c), a = !0, f;
  }
  function m() {
    return u = e(l, c), t.dependsOnOwnProps && (d = t(r, c)), f = n(u, d, c), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(l, c)), t.dependsOnOwnProps && (d = t(r, c)), f = n(u, d, c), f;
  }
  function h() {
    const S = e(l, c), b = !s(S, u);
    return u = S, b && (f = n(u, d, c)), f;
  }
  function w(S, b) {
    const y = !i(b, c), x = !o(S, l, b, c);
    return l = S, c = b, y && x ? m() : y ? g() : x ? h() : f;
  }
  return function(b, y) {
    return a ? w(b, y) : p(b, y);
  };
}
function Mx(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = rf(t, Tx);
  const s = n(e, i), a = r(e, i), l = o(e, i);
  return Lx(s, a, l, e, i);
}
function _x(e, t) {
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
function Bc(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function Qf(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, l) {
      return i.dependsOnOwnProps ? i.mapToProps(a, l) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Bc(e);
      let c = i(a, l);
      return typeof c == "function" && (i.mapToProps = c, i.dependsOnOwnProps = Bc(c), c = i(a, l)), c;
    }, i;
  };
}
function Wa(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function kx(e) {
  return e && typeof e == "object" ? ds((t) => (
    // @ts-ignore
    _x(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    Qf(e)
  ) : Wa(e, "mapDispatchToProps") : ds((t) => ({
    dispatch: t
  }));
}
function Fx(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    Qf(e)
  ) : Wa(e, "mapStateToProps") : ds(() => ({}));
}
function Bx(e, t, n) {
  return $t({}, n, e, t);
}
function jx(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let i = !1, s;
    return function(l, c, u) {
      const d = e(l, c, u);
      return i ? o(d, s) || (s = d) : (i = !0, s = d), s;
    };
  };
}
function Vx(e) {
  return e ? typeof e == "function" ? jx(e) : Wa(e, "mergeProps") : () => Bx;
}
function zx() {
  const e = px();
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
const jc = {
  notify() {
  },
  get: () => []
};
function Zf(e, t) {
  let n, r = jc, o = 0, i = !1;
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
  function l() {
    m.onStateChange && m.onStateChange();
  }
  function c() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = zx());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = jc);
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
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
const Wx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ro = Wx ? R.useLayoutEffect : R.useEffect;
function Vc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Li(e, t) {
  if (Vc(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Vc(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const Gx = ["reactReduxForwardedRef"];
let ep = gx;
const Hx = (e) => {
  ep = e;
}, Ux = [null, null];
function qx(e, t, n) {
  ro(() => e(...t), n);
}
function Kx(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function Yx(e, t, n, r, o, i, s, a, l, c, u) {
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
    w || (f = null), h === i.current ? s.current || c() : (i.current = h, l.current = h, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function Xx(e, t) {
  return e === t;
}
function tp(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = Xx,
  areOwnPropsEqual: i = Li,
  areStatePropsEqual: s = Li,
  areMergedPropsEqual: a = Li,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: c = Hf
} = {}) {
  const u = c, d = Fx(e), f = kx(t), p = Vx(n), m = !!e;
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
    function y(P) {
      const [E, O, T] = R.useMemo(() => {
        const {
          reactReduxForwardedRef: ae
        } = P, Y = rf(P, Gx);
        return [P.context, ae, Y];
      }, [P]), N = R.useMemo(() => E && E.Consumer && // @ts-ignore
      Nx.isContextConsumer(/* @__PURE__ */ R.createElement(E.Consumer, null)) ? E : u, [E, u]), M = R.useContext(N), _ = !!P.store && !!P.store.getState && !!P.store.dispatch, A = !!M && !!M.store, L = _ ? P.store : M.store, I = A ? M.getServerState : L.getState, B = R.useMemo(() => Mx(L.dispatch, b), [L]), [$, H] = R.useMemo(() => {
        if (!m)
          return Ux;
        const ae = Zf(L, _ ? void 0 : M.subscription), Y = ae.notifyNestedSubs.bind(ae);
        return [ae, Y];
      }, [L, _, M]), X = R.useMemo(() => _ ? M : $t({}, M, {
        subscription: $
      }), [_, M, $]), ne = R.useRef(), be = R.useRef(T), ue = R.useRef(), Ae = R.useRef(!1);
      R.useRef(!1);
      const ye = R.useRef(!1), re = R.useRef();
      ro(() => (ye.current = !0, () => {
        ye.current = !1;
      }), []);
      const ve = R.useMemo(() => () => ue.current && T === be.current ? ue.current : B(L.getState(), T), [L, T]), Me = R.useMemo(() => (Y) => $ ? Yx(
        m,
        L,
        $,
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
      }, [$]);
      qx(Kx, [be, ne, Ae, T, ue, H]);
      let xe;
      try {
        xe = ep(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Me,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          ve,
          I ? () => B(I(), T) : ve
        );
      } catch (ae) {
        throw re.current && (ae.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), ae;
      }
      ro(() => {
        re.current = void 0, ue.current = void 0, ne.current = xe;
      });
      const Ce = R.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ R.createElement(h, $t({}, xe, {
          ref: O
        }))
      ), [O, h, xe]);
      return R.useMemo(() => m ? /* @__PURE__ */ R.createElement(N.Provider, {
        value: X
      }, Ce) : Ce, [N, Ce, X]);
    }
    const C = R.memo(y);
    if (C.WrappedComponent = h, C.displayName = y.displayName = S, l) {
      const E = R.forwardRef(function(T, N) {
        return /* @__PURE__ */ R.createElement(C, $t({}, T, {
          reactReduxForwardedRef: N
        }));
      });
      return E.displayName = S, E.WrappedComponent = h, Fc(E, h);
    }
    return Fc(C, h);
  };
}
function Jx({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = R.useMemo(() => {
    const c = Zf(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = R.useMemo(() => e.getState(), [e]);
  ro(() => {
    const {
      subscription: c
    } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || Hf;
  return /* @__PURE__ */ R.createElement(l.Provider, {
    value: s
  }, n);
}
Hx(Wf.useSyncExternalStore);
fx(Pm);
function Qx(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function np(e, t) {
  var n = U(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = V(!0), o = V(n), i = r.current || !!(t && o.current.inputs && Qx(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return W(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function Zx(e, t) {
  return np(function() {
    return e;
  }, t);
}
var K = np, z = Zx, eC = !0, Mi = "Invariant failed";
function tC(e, t) {
  if (!e) {
    if (eC)
      throw new Error(Mi);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Mi, ": ").concat(n) : Mi;
    throw new Error(r);
  }
}
var lt = function(t) {
  var n = t.top, r = t.right, o = t.bottom, i = t.left, s = r - i, a = o - n, l = {
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
  return l;
}, Ga = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, zc = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, nC = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, _i = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Ha = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? _i : r, i = t.border, s = i === void 0 ? _i : i, a = t.padding, l = a === void 0 ? _i : a, c = lt(Ga(n, o)), u = lt(zc(n, s)), d = lt(zc(u, l));
  return {
    marginBox: c,
    borderBox: lt(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: l
  };
}, Ke = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && tC(!1), o;
}, rC = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, oo = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = nC(r, n);
  return Ha({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, io = function(t, n) {
  return n === void 0 && (n = rC()), oo(t, n);
}, rp = function(t, n) {
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
  return Ha({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, op = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return rp(n, r);
}, Wc = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function oC(e, t) {
  return !!(e === t || Wc(e) && Wc(t));
}
function iC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!oC(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = iC);
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
var sC = function(t) {
  var n = [], r = null, o = function() {
    for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const er = sC;
function ip(e, t) {
}
ip.bind(null, "warn");
ip.bind(null, "error");
function Nt() {
}
function aC(e, t) {
  return {
    ...e,
    ...t
  };
}
function Ye(e, t, n) {
  const r = t.map((o) => {
    const i = aC(n, o.options);
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
const lC = "Invariant failed";
class so extends Error {
}
so.prototype.toString = function() {
  return this.message;
};
function F(e, t) {
  if (!e)
    throw new so(lC);
}
class cC extends v.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Nt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof so && n.preventDefault();
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
    if (t instanceof so) {
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
const uC = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, ao = (e) => e + 1, dC = (e) => `
  You have lifted an item in position ${ao(e.source.index)}
`, sp = (e, t) => {
  const n = e.droppableId === t.droppableId, r = ao(e.index), o = ao(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, ap = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, fC = (e) => {
  const t = e.destination;
  if (t)
    return sp(e.source, t);
  const n = e.combine;
  return n ? ap(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Gc = (e) => `
  The item has returned to its starting position
  of ${ao(e.index)}
`, pC = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Gc(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${sp(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${ap(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Gc(e.source)}
  `;
}, mC = {
  dragHandleUsageInstructions: uC,
  onDragStart: dC,
  onDragUpdate: fC,
  onDragEnd: pC
};
var Fr = mC;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Be = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Tt = (e, t) => e.x === t.x && e.y === t.y, On = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), sn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, tr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Hc = (e, t) => Math.min(...t.map((n) => tr(e, n))), lp = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var gC = (e, t) => {
  const n = lt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const yr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), Uc = (e) => [{
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
}], hC = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, bC = (e, t) => t ? yr(e, t.scroll.diff.displacement) : e, yC = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, vC = (e, t) => t && t.shouldClipSubject ? gC(t.pageMarginBox, e) : lt(e);
var Pn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = bC(e.marginBox, r), i = yC(o, n, t), s = vC(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Ua = (e, t) => {
  e.frame || F(!1);
  const n = e.frame, r = Be(t, n.scroll.initial), o = On(r), i = {
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
  }, s = Pn({
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
const cp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), up = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), oi = de((e) => Object.values(e)), wC = de((e) => Object.values(e));
var $n = de((e, t) => wC(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function qa(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function ii(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var si = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), SC = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !qa(o))
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
  const a = o.displaced.all, l = a.length ? a[0] : null;
  if (e)
    return l ? s(l) : null;
  const c = si(t, r);
  if (!l) {
    if (!c.length)
      return null;
    const p = c[c.length - 1];
    return s(p.descriptor.id);
  }
  const u = c.findIndex((p) => p.descriptor.id === l);
  u === -1 && F(!1);
  const d = u - 1;
  if (d < 0)
    return null;
  const f = c[d];
  return s(f.descriptor.id);
}, Nn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const dp = {
  point: fe,
  value: 0
}, nr = {
  invisible: {},
  visible: {},
  all: []
}, xC = {
  displaced: nr,
  displacedBy: dp,
  at: null
};
var CC = xC, Qe = (e, t) => (n) => e <= n && n <= t, fp = (e) => {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const l = r.top < e.top && r.bottom > e.bottom, c = r.left < e.left && r.right > e.right;
    return l && c ? !0 : l && s || c && i;
  };
}, EC = (e) => {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Ka = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, pp = {
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
var PC = (e) => (t) => {
  const n = Qe(t.top, t.bottom), r = Qe(t.left, t.right);
  return (o) => e === Ka ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const DC = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return yr(e, n);
}, RC = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, IC = (e, t, n) => n(t)(e), Ya = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? DC(e, t) : e;
  return RC(i, t, o) && IC(i, n, o);
}, AC = (e) => Ya({
  ...e,
  isVisibleThroughFrameFn: fp
}), mp = (e) => Ya({
  ...e,
  isVisibleThroughFrameFn: EC
}), OC = (e) => Ya({
  ...e,
  isVisibleThroughFrameFn: PC(e.destination.axis)
}), $C = (e, t, n) => {
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
function NC(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return lt(Ga(n, r));
}
function rr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, l) {
    const c = NC(l, n), u = l.descriptor.id;
    if (a.all.push(u), !AC({
      target: c,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[l.descriptor.id] = !0, a;
    const f = $C(u, i, o), p = {
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
function TC(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function qc({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = TC(e, {
    inHomeList: t
  });
  return {
    displaced: nr,
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
function lo({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const l = Nn(e, n);
  if (s == null)
    return qc({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const c = t.find((m) => m.descriptor.index === s);
  if (!c)
    return qc({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const u = si(e, t), d = t.indexOf(c), f = u.slice(d);
  return {
    displaced: rr({
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
function Vt(e, t) {
  return !!t.effected[e];
}
var LC = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return Vt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, MC = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, l = t ? a : a + 1;
  return i < s || i > l ? null : i;
}, _C = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: i,
  previousImpact: s,
  viewport: a,
  afterCritical: l
}) => {
  const c = s.at;
  if (c || F(!1), c.type === "REORDER") {
    const d = MC({
      isMovingForward: e,
      isInHomeList: t,
      location: c.destination,
      insideDestination: i
    });
    return d == null ? null : lo({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = LC({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: c.combine,
    afterCritical: l
  });
  return u == null ? null : lo({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, kC = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Vt(n, t) ? o ? fe : On(r.point) : o ? r.point : fe;
}, FC = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = ii(t);
  r || F(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = kC({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const gp = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, BC = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, Xa = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, Kc = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => sn(e.line, t.marginBox[e.end] + gp(e, n), Xa(e, t.marginBox, n)), Yc = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => sn(e.line, t.marginBox[e.start] - BC(e, n), Xa(e, t.marginBox, n)), jC = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => sn(e.line, t.contentBox[e.start] + gp(e, n), Xa(e, t.contentBox, n));
var VC = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = $n(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return jC({
      axis: a,
      moveInto: r.page,
      isMoving: s
    });
  const {
    displaced: l,
    displacedBy: c
  } = e, u = l.all[0];
  if (u) {
    const f = n[u];
    if (Vt(u, o))
      return Yc({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = oo(f.page, c.point);
    return Yc({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Vt(d.descriptor.id, o)) {
    const f = oo(d.page, On(o.displacedBy.point));
    return Kc({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return Kc({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, fs = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const zC = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? VC({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : FC({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var ai = (e) => {
  const t = zC(e), n = e.droppable;
  return n ? fs(n, t) : t;
}, hp = (e, t) => {
  const n = Be(t, e.scroll.initial), r = On(n);
  return {
    frame: lt({
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
function Xc(e, t) {
  return e.map((n) => t[n]);
}
function WC(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var GC = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = hp(t, he(t.scroll.current, o)), s = n.frame ? Ua(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, l = rr({
    afterDragging: Xc(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), c = rr({
    afterDragging: Xc(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, l, c];
  return a.all.forEach((m) => {
    const g = WC(m, f);
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
}, HC = (e, t) => he(e.scroll.diff.displacement, t), Ja = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = HC(n, e), o = Be(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, bp = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = Be(n, e.page.borderBox.center), l = {
    target: yr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? OC(l) : mp(l);
}, UC = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: i,
  previousPageBorderBoxCenter: s,
  previousClientSelection: a,
  afterCritical: l
}) => {
  if (!n.isEnabled)
    return null;
  const c = $n(n.descriptor.id, r), u = Nn(t, n), d = SC({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: c,
    previousImpact: o
  }) || _C({
    isMovingForward: e,
    isInHomeList: u,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: c,
    previousImpact: o,
    viewport: i,
    afterCritical: l
  });
  if (!d)
    return null;
  const f = ai({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: l
  });
  if (bp({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Ja({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = Be(f, s), g = GC({
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
var qC = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = Qe(i[s.start], i[s.end]), l = oi(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => fp(o.frame)(De(u))).filter((u) => {
    const d = De(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = De(u), f = Qe(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = De(u)[s.crossAxisStart], p = De(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => De(u)[s.crossAxisStart] === De(f[0])[s.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const c = l.filter((u) => Qe(De(u)[s.start], De(u)[s.end])(t[s.line]));
  return c.length === 1 ? c[0] : c.length > 1 ? c.sort((u, d) => De(u)[s.start] - De(d)[s.start])[0] : l.sort((u, d) => {
    const f = Hc(t, Uc(De(u))), p = Hc(t, Uc(De(d)));
    return f !== p ? f - p : De(u)[s.start] - De(d)[s.start];
  })[0];
};
const Jc = (e, t) => {
  const n = e.page.borderBox.center;
  return Vt(e.descriptor.id, t) ? Be(n, t.displacedBy.point) : n;
}, KC = (e, t) => {
  const n = e.page.borderBox;
  return Vt(e.descriptor.id, t) ? yr(n, On(t.displacedBy.point)) : n;
};
var YC = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => mp({
  target: KC(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const l = tr(e, fs(n, Jc(s, o))), c = tr(e, fs(n, Jc(a, o)));
  return l < c ? -1 : c < l ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, vr = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: sn(t.line, r)
  };
});
const XC = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return sn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], l = $n(e.descriptor.id, n).reduce((c, u) => c + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return l <= 0 ? null : sn(r.line, l);
}, yp = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), vp = (e, t, n) => {
  const r = e.frame;
  Nn(t, e) && F(!1), e.subject.withPlaceholder && F(!1);
  const o = vr(e.axis, t.displaceBy).point, i = XC(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = Pn({
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
  const a = i ? he(r.scroll.max, i) : r.scroll.max, l = yp(r, a), c = Pn({
    page: e.subject.page,
    withPlaceholder: s,
    axis: e.axis,
    frame: l
  });
  return {
    ...e,
    subject: c,
    frame: l
  };
}, JC = (e) => {
  const t = e.subject.withPlaceholder;
  t || F(!1);
  const n = e.frame;
  if (!n) {
    const s = Pn({
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
  const o = yp(n, r), i = Pn({
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
var QC = ({
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
      displaced: nr,
      displacedBy: dp,
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
    }), p = Nn(r, i) ? i : vp(i, r, o);
    return bp({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: s.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const l = e[i.axis.line] <= t.page.borderBox.center[i.axis.line], c = (() => {
    const d = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || l ? d : d + 1;
  })(), u = vr(i.axis, r.displaceBy);
  return lo({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: nr,
    index: c
  });
}, ZC = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const l = qC({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!l)
    return null;
  const c = $n(l.descriptor.id, o), u = YC({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: l,
    insideDestination: c,
    afterCritical: a
  }), d = QC({
    previousPageBorderBoxCenter: t,
    destination: l,
    draggable: n,
    draggables: o,
    moveRelativeTo: u,
    insideDestination: c,
    viewport: s,
    afterCritical: a
  });
  if (!d)
    return null;
  const f = ai({
    impact: d,
    draggable: n,
    droppable: l,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Ja({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ve = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const e1 = (e, t) => {
  const n = Ve(e);
  return n ? t[n] : null;
};
var t1 = ({
  state: e,
  type: t
}) => {
  const n = e1(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", c = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? UC({
    isMovingForward: l,
    previousPageBorderBoxCenter: u,
    draggable: c,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : ZC({
    isMovingForward: l,
    previousPageBorderBoxCenter: u,
    draggable: c,
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
function wp(e) {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function n1(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function r1({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = sn(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: tr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function o1({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = oi(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !n1(e, i))
      return !1;
    if (wp(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], l = e[s.crossAxisStart], c = e[s.crossAxisEnd], u = Qe(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(l), f = u(c);
    return !d && !f ? !0 : d ? l < a : c > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : r1({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Sp = (e, t) => lt(yr(e, t));
var i1 = (e, t) => {
  const n = e.frame;
  return n ? Sp(t, n.scroll.diff.value) : t;
};
function xp({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function s1({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var a1 = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, l = vr(n.axis, t.displaceBy), c = l.value, u = e[a.start], d = e[a.end], p = si(t, r).find((g) => {
    const h = g.descriptor.id, w = g.page.borderBox.center[a.line], S = Vt(h, s), b = xp({
      displaced: o,
      id: h
    });
    return S ? b ? d <= w : u < w - c : b ? d <= w + c : u < w;
  }) || null, m = s1({
    draggable: t,
    closest: p,
    inHomeList: Nn(t, n)
  });
  return lo({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: l,
    index: m
  });
};
const l1 = 4;
var c1 = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = vr(r.axis, e.displaceBy), l = a.value, c = t[s.start], u = t[s.end], f = si(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, S = h[s.size] / l1, b = Vt(g, i), y = xp({
      displaced: n.displaced,
      id: g
    });
    return b ? y ? u > h[s.start] + S && u < h[s.end] - S : c > h[s.start] - l + S && c < h[s.end] - l - S : y ? u > h[s.start] + l + S && u < h[s.end] + l - S : c > h[s.start] + S && c < h[s.end] - S;
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
}, Cp = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = Sp(t.page.borderBox, e), l = o1({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!l)
    return CC;
  const c = r[l], u = $n(c.descriptor.id, n), d = i1(c, a);
  return c1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }) || a1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: c,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, Qa = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const u1 = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ve(e), o = Ve(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = JC(i);
  return Qa(n, s);
};
var d1 = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = u1({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = Ve(o);
  if (!s)
    return i;
  const a = n[s];
  if (Nn(e, a) || a.subject.withPlaceholder)
    return i;
  const l = vp(a, e, t);
  return Qa(i, l);
}, zn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, l = t || e.current.client.selection, c = Be(l, e.initial.client.selection), u = {
    offset: c,
    selection: l,
    borderBoxCenter: he(e.initial.client.borderBoxCenter, c)
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
  const p = a.draggables[e.critical.draggable.id], m = o || Cp({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = d1({
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
function f1(e, t) {
  return e.map((n) => t[n]);
}
var Ep = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = f1(i.all, n), a = rr({
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
}, Pp = ({
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
  return Ja({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Dp = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && F(!1);
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, l = s[e.critical.draggable.id], c = Ve(r);
  c || F(!1);
  const u = a[c], d = Ep({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Pp({
    impact: d,
    draggable: l,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return zn({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, p1 = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Rp = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = vr(t.axis, e.displaceBy), i = $n(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && F(!1);
  const a = i.slice(s + 1), l = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), c = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: rr({
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
        destination: p1(e.descriptor)
      }
    },
    afterCritical: c
  };
}, m1 = (e, t) => ({
  draggables: e.draggables,
  droppables: Qa(e.droppables, t)
}), g1 = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = oo(e.client, t), o = io(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, h1 = (e) => {
  const t = e.frame;
  return t || F(!1), t;
}, b1 = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], l = h1(s).scroll.diff.value, c = he(r, l);
    return g1({
      draggable: o,
      offset: c,
      initialWindowScroll: n.scroll.initial
    });
  });
}, y1 = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((w) => {
    const S = e.dimensions.droppables[w.droppableId];
    return Ua(S, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...cp(n)
  }, o = up(b1({
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
  }, a = Ve(e.impact), l = a ? s.droppables[a] : null, c = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Rp({
    draggable: c,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : d, m = Cp({
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
const ps = (e) => e.movementMode === "SNAP", ki = (e, t, n) => {
  const r = m1(e.dimensions, t);
  return !ps(e) || n ? zn({
    state: e,
    dimensions: r
  }) : Dp({
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
const Qc = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var v1 = (e = Qc, t) => {
  if (t.type === "FLUSH")
    return {
      ...Qc,
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
    } = t.payload, a = i.draggables[n.draggable.id], l = i.droppables[n.droppable.id], c = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: fe
    }, u = {
      client: c,
      page: {
        selection: he(c.selection, o.scroll.initial),
        borderBoxCenter: he(c.selection, o.scroll.initial),
        offset: he(c.selection, o.scroll.diff.value)
      }
    }, d = oi(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Rp({
      draggable: a,
      home: l,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || F(!1), y1({
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
    return Tt(n, e.current.client.selection) ? e : zn({
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
    const i = Ua(o, r);
    return ki(e, i, !1);
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
    return ki(e, i, !0);
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
    return ki(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Qt(e) || F(!1), e.isWindowScrollAllowed || F(!1);
    const n = t.payload.newScroll;
    if (Tt(e.viewport.scroll.current, n))
      return Fi(e);
    const r = hp(e.viewport, n);
    return ps(e) ? Dp({
      state: e,
      viewport: r
    }) : zn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Qt(e))
      return e;
    const n = t.payload.maxScroll;
    if (Tt(n, e.viewport.scroll.max))
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
    const n = t1({
      state: e,
      type: t.type
    });
    return n ? zn({
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
const w1 = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), S1 = (e) => ({
  type: "LIFT",
  payload: e
}), x1 = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), C1 = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), E1 = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), P1 = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), D1 = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), R1 = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Ip = (e) => ({
  type: "MOVE",
  payload: e
}), I1 = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), A1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), O1 = () => ({
  type: "MOVE_UP",
  payload: null
}), $1 = () => ({
  type: "MOVE_DOWN",
  payload: null
}), N1 = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), T1 = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Za = () => ({
  type: "FLUSH",
  payload: null
}), L1 = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), el = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Ap = (e) => ({
  type: "DROP",
  payload: e
}), M1 = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Op = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var _1 = (e) => ({
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
  } = o.payload, l = t();
  l.phase === "DROP_ANIMATING" && n(el({
    completed: l.completed
  })), t().phase !== "IDLE" && F(!1), n(Za()), n(w1({
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
  n(x1({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, k1 = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const tl = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, or = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, $p = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Xt = `${$p.outOfTheWay}s ${tl.outOfTheWay}`, Wn = {
  fluid: `opacity ${Xt}`,
  snap: `transform ${Xt}, opacity ${Xt}`,
  drop: (e) => {
    const t = `${e}s ${tl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Xt}`,
  placeholder: `height ${Xt}, width ${Xt}, margin ${Xt}`
}, Zc = (e) => Tt(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ms = {
  moveTo: Zc,
  drop: (e, t) => {
    const n = Zc(e);
    if (n)
      return t ? `${n} scale(${or.scale.drop})` : n;
  }
}, {
  minDropTime: gs,
  maxDropTime: Np
} = $p, F1 = Np - gs, eu = 1500, B1 = 0.6;
var j1 = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = tr(e, t);
  if (r <= 0)
    return gs;
  if (r >= eu)
    return Np;
  const o = r / eu, i = gs + F1 * o, s = n === "CANCEL" ? i * B1 : i;
  return Number(s.toFixed(2));
}, V1 = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = Ve(e), l = a ? s[a] : null, c = s[t.descriptor.droppableId], u = Pp({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || c,
    viewport: r
  });
  return Be(u, t.client.borderBox.center);
}, z1 = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Ep({
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
    displaced: nr
  },
  didDropInsideDroppable: !0
};
const W1 = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(M1({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && F(!1), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || F(!1);
  const a = o.critical, l = o.dimensions, c = l.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = z1({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? qa(u) : null, p = d ? ii(u) : null, m = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, g = {
    draggableId: c.descriptor.id,
    type: c.descriptor.type,
    source: m,
    reason: i,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, h = V1({
    impact: u,
    draggable: c,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), w = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: u
  };
  if (!(!Tt(o.current.client.offset, h) || !!g.combine)) {
    t(el({
      completed: w
    }));
    return;
  }
  const b = j1({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(L1({
    newHomeClientOffset: h,
    dropDuration: b,
    completed: w
  }));
};
var G1 = W1, Tp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function H1(e) {
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
function U1({
  onWindowScroll: e
}) {
  function t() {
    e(Tp());
  }
  const n = er(t), r = H1(n);
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
const q1 = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", K1 = (e) => {
  const t = U1({
    onWindowScroll: (n) => {
      e.dispatch(I1({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && q1(r) && t.stop(), n(r);
  };
};
var Y1 = K1, X1 = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, J1 = () => {
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
const Q1 = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Z1 = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, eE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Fn = (e, t) => {
  t();
}, Ar = (e, t) => ({
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
  const o = X1(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var tE = (e, t) => {
  const n = J1();
  let r = null;
  const o = (d, f) => {
    r && F(!1), Fn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && F(!1), Fn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Ar(d, f));
    });
  }, s = (d, f) => {
    r && F(!1);
    const p = Ar(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Fn("onDragStart", () => Bi(e().onDragStart, p, t, Fr.onDragStart));
    });
  }, a = (d, f) => {
    const p = qa(f), m = ii(f);
    r || F(!1);
    const g = !eE(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !Q1(r.lastLocation, p);
    h && (r.lastLocation = p);
    const w = !Z1(r.lastCombine, m);
    if (w && (r.lastCombine = m), !g && !h && !w)
      return;
    const S = {
      ...Ar(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Fn("onDragUpdate", () => Bi(e().onDragUpdate, S, t, Fr.onDragUpdate));
    });
  }, l = () => {
    r || F(!1), n.flush();
  }, c = (d) => {
    r || F(!1), r = null, Fn("onDragEnd", () => Bi(e().onDragEnd, d, t, Fr.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: i,
    start: s,
    update: a,
    flush: l,
    drop: c,
    abort: () => {
      if (!r)
        return;
      const d = {
        ...Ar(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      c(d);
    }
  };
}, nE = (e, t) => {
  const n = tE(e, t);
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
const rE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && F(!1), e.dispatch(el({
    completed: r.completed
  }));
};
var oE = rE;
const iE = (e) => {
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
var sE = iE, aE = (e) => () => (t) => (n) => {
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
const cE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var uE = (e) => (t) => (n) => (r) => {
  if (cE(r)) {
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
const dE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Ap({
    reason: r.reason
  })));
};
var fE = dE;
const pE = jf;
var mE = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Bf(v1, pE(US(k1(n), aE(e), _1(e), G1, oE, sE, fE, uE(i), Y1, lE(t), nE(r, o))));
const ji = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function gE({
  registry: e,
  callbacks: t
}) {
  let n = ji(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null;
      const {
        additions: l,
        removals: c,
        modified: u
      } = n, d = Object.keys(l).map((m) => e.draggable.getById(m).getDimension(fe)).sort((m, g) => m.descriptor.index - g.descriptor.index), f = Object.keys(u).map((m) => {
        const h = e.droppable.getById(m).callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: h
        };
      }), p = {
        additions: d,
        removals: Object.keys(c),
        modified: f
      };
      n = ji(), t.publish(p);
    }));
  };
  return {
    add: (l) => {
      const c = l.descriptor.id;
      n.additions[c] = l, n.modified[l.descriptor.droppableId] = !0, n.removals[c] && delete n.removals[c], o();
    },
    remove: (l) => {
      const c = l.descriptor;
      n.removals[c.id] = !0, n.modified[c.droppableId] = !0, n.additions[c.id] && delete n.additions[c.id], o();
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
}, Mp = () => {
  const e = document.documentElement;
  return e || F(!1), e;
}, _p = () => {
  const e = Mp();
  return Lp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, hE = () => {
  const e = Tp(), t = _p(), n = e.y, r = e.x, o = Mp(), i = o.clientWidth, s = o.clientHeight, a = r + i, l = n + s;
  return {
    frame: lt({
      top: n,
      left: r,
      right: a,
      bottom: l
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
}, bE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = hE(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: up(a),
      droppables: cp(s)
    },
    critical: e,
    viewport: r
  };
};
function tu(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var yE = (e, t) => {
  let n = null;
  const r = gE({
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
  }, l = () => {
    if (!n)
      return;
    r.stop();
    const f = n.critical.droppable;
    e.droppable.getAllByType(f.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, c = (f) => {
    n || F(!1);
    const p = n.critical.draggable;
    f.type === "ADDITION" && tu(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && tu(e, p, f.value) && r.remove(f.value);
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
      }, h = e.subscribe(c);
      return n = {
        critical: g,
        unsubscribe: h
      }, bE({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: l
  };
}, kp = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", vE = (e) => {
  window.scrollBy(e.x, e.y);
};
const wE = de((e) => oi(e).filter((t) => !(!t.isEnabled || !t.frame))), SE = (e, t) => wE(t).find((r) => (r.frame || F(!1), wp(r.frame.pageMarginBox)(e))) || null;
var xE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return SE(e, n);
};
const ir = {
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
var CE = (e, t, n = () => ir) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, Fp = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, nl = 1, EE = (e, t, n = () => ir) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return nl;
  const i = 1 - Fp({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, PE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, c = Date.now() - s;
  if (c >= i)
    return e;
  if (c < o)
    return nl;
  const u = Fp({
    startOfRange: o,
    endOfRange: a,
    current: c
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, nu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = EE(e, t, o);
  return i === 0 ? 0 : r ? Math.max(PE(i, n, o), nl) : i;
}, ru = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = CE(e, r, i);
  return t[r.end] < t[r.start] ? nu({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * nu({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, DE = ({
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
var Bp = ({
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
  }, a = ru({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Ka,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = ru({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: pp,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = RE({
    x: l,
    y: a
  });
  if (Tt(c, fe))
    return null;
  const u = DE({
    container: t,
    subject: n,
    proposedScroll: c
  });
  return u ? Tt(u, fe) ? null : u : null;
};
const IE = lp((e) => e === 0 ? 0 : e > 0 ? 1 : -1), rl = (() => {
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
    return Tt(i, fe) ? null : i;
  };
})(), jp = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = IE(n), i = rl({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, ol = (e, t) => jp({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), AE = (e, t) => {
  if (!ol(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return rl({
    current: r,
    max: n,
    change: t
  });
}, il = (e, t) => {
  const n = e.frame;
  return n ? jp({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, OE = (e, t) => {
  const n = e.frame;
  return !n || !il(e, t) ? null : rl({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var $E = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Bp({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && ol(e, s) ? s : null;
}, NE = ({
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
  const a = Bp({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && il(e, a) ? a : null;
}, ou = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = $E({
      dragStartTime: t,
      viewport: d,
      subject: l,
      center: s,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: i
    });
    if (f) {
      r(f);
      return;
    }
  }
  const c = xE({
    center: s,
    destination: Ve(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!c)
    return;
  const u = NE({
    dragStartTime: t,
    droppable: c,
    subject: l,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(c.descriptor.id, u);
}, TE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ir
}) => {
  const r = er(e), o = er(t);
  let i = null;
  const s = (c) => {
    i || F(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    ou({
      state: c,
      scrollWindow: r,
      scrollDroppable: o,
      dragStartTime: d,
      shouldUseTimeDampening: u,
      getAutoScrollerOptions: n
    });
  };
  return {
    start: (c) => {
      i && F(!1);
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      ou({
        state: c,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), i = {
        dragStartTime: u,
        shouldUseTimeDampening: d
      }, d && s(c);
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
  const r = (a, l) => {
    const c = he(a.current.client.selection, l);
    e({
      client: c
    });
  }, o = (a, l) => {
    if (!il(a, l))
      return l;
    const c = OE(a, l);
    if (!c)
      return t(a.descriptor.id, l), null;
    const u = Be(l, c);
    return t(a.descriptor.id, u), Be(l, u);
  }, i = (a, l, c) => {
    if (!a || !ol(l, c))
      return c;
    const u = AE(l, c);
    if (!u)
      return n(c), null;
    const d = Be(c, u);
    return n(d), Be(c, d);
  };
  return (a) => {
    const l = a.scrollJumpRequest;
    if (!l)
      return;
    const c = Ve(a.impact);
    c || F(!1);
    const u = o(a.dimensions.droppables[c], l);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, ME = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = TE({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = LE({
    move: n,
    scrollWindow: t,
    scrollDroppable: e
  });
  return {
    scroll: (l) => {
      if (!(r().disabled || l.phase !== "DRAGGING")) {
        if (l.movementMode === "FLUID") {
          o.scroll(l);
          return;
        }
        l.scrollJumpRequest && i(l);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Dn = "data-rfd", Rn = (() => {
  const e = `${Dn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), hs = (() => {
  const e = `${Dn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), _E = (() => {
  const e = `${Dn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), iu = {
  contextId: `${Dn}-scroll-container-context-id`
}, kE = (e) => (t) => `[${t}="${e}"]`, Bn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), FE = "pointer-events: none;";
var BE = (e) => {
  const t = kE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Rn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: FE,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Wn.outOfTheWay};
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
    selector: t(_E.contextId),
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
    always: Bn(s, "always"),
    resting: Bn(s, "resting"),
    dragging: Bn(s, "dragging"),
    dropAnimating: Bn(s, "dropAnimating"),
    userCancel: Bn(s, "userCancel")
  };
};
const jE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? fo : W;
var ze = jE;
const Vi = () => {
  const e = document.querySelector("head");
  return e || F(!1), e;
}, su = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function VE(e, t) {
  const n = K(() => BE(e), [e]), r = V(null), o = V(null), i = z(de((d) => {
    const f = o.current;
    f || F(!1), f.textContent = d;
  }), []), s = z((d) => {
    const f = r.current;
    f || F(!1), f.textContent = d;
  }, []);
  ze(() => {
    !r.current && !o.current || F(!1);
    const d = su(t), f = su(t);
    return r.current = d, o.current = f, d.setAttribute(`${Dn}-always`, e), f.setAttribute(`${Dn}-dynamic`, e), Vi().appendChild(d), Vi().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || F(!1), Vi().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = z(() => i(n.dragging), [i, n.dragging]), l = z((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), c = z(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return K(() => ({
    dragging: a,
    dropping: l,
    resting: c
  }), [a, l, c]);
}
function Vp(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var zp = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function li(e) {
  return e instanceof zp(e).HTMLElement;
}
function zE(e, t) {
  const n = `[${Rn.contextId}="${e}"]`, r = Vp(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(Rn.draggableId) === t);
  return !o || !li(o) ? null : o;
}
function WE(e) {
  const t = V({}), n = V(null), r = V(null), o = V(!1), i = z(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), s = z(function(f) {
    const p = zE(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = z(function(f, p) {
    n.current === f && (n.current = p);
  }, []), l = z(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), c = z(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Rn.draggableId) === f && (n.current = f);
  }, []);
  return ze(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), K(() => ({
    register: i,
    tryRecordFocus: c,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: a
  }), [i, c, l, a]);
}
function GE() {
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
  function l(d) {
    const f = a(d);
    return f || F(!1), f;
  }
  const c = {
    register: (d) => {
      e.droppables[d.descriptor.id] = d;
    },
    unregister: (d) => {
      const f = a(d.descriptor.id);
      f && d.uniqueId === f.uniqueId && delete e.droppables[d.descriptor.id];
    },
    getById: l,
    findById: a,
    exists: (d) => !!a(d),
    getAllByType: (d) => Object.values(e.droppables).filter((f) => f.descriptor.type === d)
  };
  function u() {
    e.draggables = {}, e.droppables = {}, t.length = 0;
  }
  return {
    draggable: s,
    droppable: c,
    subscribe: n,
    clean: u
  };
}
function HE() {
  const e = K(GE, []);
  return W(() => function() {
    v.version.startsWith("16") || v.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var sl = v.createContext(null), co = () => {
  const e = document.body;
  return e || F(!1), e;
};
const UE = {
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
var qE = UE;
const KE = (e) => `rfd-announcement-${e}`;
function YE(e) {
  const t = K(() => KE(e), [e]), n = V(null);
  return W(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), $t(i.style, qE), co().appendChild(i), function() {
      setTimeout(function() {
        const l = co();
        l.contains(i) && l.removeChild(i), i === n.current && (n.current = null);
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
let XE = 0;
const Wp = {
  separator: "::"
};
function JE(e, t = Wp) {
  return K(() => `${e}${t.separator}${XE++}`, [t.separator, e]);
}
function QE(e, t = Wp) {
  const n = v.useId();
  return K(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var al = "useId" in v ? QE : JE;
function ZE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function eP({
  contextId: e,
  text: t
}) {
  const n = al("hidden-text", {
    separator: "-"
  }), r = K(() => ZE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return W(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", co().appendChild(i), function() {
      const a = co();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var ci = v.createContext(null);
function Gp(e) {
  const t = V(e);
  return W(() => {
    t.current = e;
  }), t;
}
function tP() {
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
function sr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const nP = 9, rP = 13, ll = 27, Hp = 32, oP = 33, iP = 34, sP = 35, aP = 36, lP = 37, cP = 38, uP = 39, dP = 40, fP = {
  [rP]: !0,
  [nP]: !0
};
var Up = (e) => {
  fP[e.keyCode] && e.preventDefault();
};
const pP = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var ui = pP;
const qp = 0, au = 5;
function mP(e, t) {
  return Math.abs(t.x - e.x) >= au || Math.abs(t.y - e.y) >= au;
}
const lu = {
  type: "IDLE"
};
function gP({
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
      if (i !== qp)
        return;
      const l = {
        x: s,
        y: a
      }, c = n();
      if (c.type === "DRAGGING") {
        o.preventDefault(), c.actions.move(l);
        return;
      }
      c.type !== "PENDING" && F(!1);
      const u = c.point;
      if (!mP(u, l))
        return;
      o.preventDefault();
      const d = c.actions.fluidLift(l);
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
      if (o.keyCode === ll) {
        o.preventDefault(), e();
        return;
      }
      Up(o);
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
function hP(e) {
  const t = V(lu), n = V(Nt), r = K(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== qp || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
      n.current(), c(p, m);
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
    t.current.type !== "IDLE" && (t.current = lu, n.current(), i());
  }, [i]), a = z(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), l = z(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = gP({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = Ye(window, f, d);
  }, [a, s]), c = z(function(d, f) {
    t.current.type !== "IDLE" && F(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, l();
  }, [l]);
  ze(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function bP() {
}
const yP = {
  [iP]: !0,
  [oP]: !0,
  [aP]: !0,
  [sP]: !0
};
function vP(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ll) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Hp) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === dP) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === cP) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === uP) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === lP) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (yP[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Up(o);
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
function wP(e) {
  const t = V(bP), n = K(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Hp)
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
      let l = !0;
      const c = a.snapLift();
      t.current();
      function u() {
        l || F(!1), l = !1, t.current(), r();
      }
      t.current = Ye(window, vP(c, u), {
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
}, SP = 120, xP = 0.15;
function CP({
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
      n.keyCode === ll && n.preventDefault(), e();
    }
  }, {
    eventName: ui,
    fn: e
  }];
}
function EP({
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
      if (!i || !(i.force >= xP))
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
function PP(e) {
  const t = V(zi), n = V(Nt), r = z(function() {
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
  }, [s, o]), l = z(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = z(function() {
    const p = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: l,
      completed: a,
      getPhase: r
    }, g = Ye(window, EP(m), p), h = Ye(window, CP(m), p);
    n.current = function() {
      g(), h();
    };
  }, [l, r, a]), u = z(function() {
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
    const g = setTimeout(u, SP);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), c();
  }, [c, r, o, u]);
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
const DP = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Kp(e, t) {
  if (t == null)
    return !1;
  if (DP.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Kp(e, t.parentElement);
}
function RP(e, t) {
  const n = t.target;
  return li(n) ? Kp(e, n) : !1;
}
var IP = (e) => lt(e.getBoundingClientRect()).center;
function AP(e) {
  return e instanceof zp(e).Element;
}
const OP = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Yp(e, t) {
  return e == null ? null : e[OP](t) ? e : Yp(e.parentElement, t);
}
function $P(e, t) {
  return e.closest ? e.closest(t) : Yp(e, t);
}
function NP(e) {
  return `[${Rn.contextId}="${e}"]`;
}
function TP(e, t) {
  const n = t.target;
  if (!AP(n))
    return null;
  const r = NP(e), o = $P(n, r);
  return !o || !li(o) ? null : o;
}
function LP(e, t) {
  const n = TP(e, t);
  return n ? n.getAttribute(Rn.draggableId) : null;
}
function MP(e, t) {
  const n = `[${hs.contextId}="${e}"]`, o = Vp(document, n).find((i) => i.getAttribute(hs.id) === t);
  return !o || !li(o) ? null : o;
}
function _P(e) {
  e.preventDefault();
}
function Or({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return !(!n() || e !== t);
}
function Xp({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !kp(t.getState(), r));
}
function kP({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!Xp({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const l = r.draggable.getById(o), c = MP(t, l.descriptor.id);
  if (!c || s && !l.options.canDragInteractiveElements && RP(c, s))
    return null;
  const u = e.claim(i || Nt);
  let d = "PRE_DRAG";
  function f() {
    return l.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(x, C) {
    Or({
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
    d !== "PRE_DRAG" && (C(), F(!1)), n.dispatch(S1(x.liftActionArgs)), d = "DRAGGING";
    function P(E, O = {
      shouldBlockNextClick: !1
    }) {
      if (x.cleanup(), O.shouldBlockNextClick) {
        const T = Ye(window, [{
          eventName: "click",
          fn: _P,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(T);
      }
      C(), n.dispatch(Ap({
        reason: E
      }));
    }
    return {
      isActive: () => Or({
        expected: "DRAGGING",
        phase: d,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (E) => P("DROP", E),
      cancel: (E) => P("CANCEL", E),
      ...x.actions
    };
  }
  function w(x) {
    const C = er((E) => {
      g(() => Ip({
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
      moveUp: () => g(O1),
      moveRight: () => g(N1),
      moveDown: () => g($1),
      moveLeft: () => g(T1)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: IP(c),
        movementMode: "SNAP"
      },
      cleanup: Nt,
      actions: x
    });
  }
  function b() {
    Or({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Or({
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
const FP = [hP, wP, PP];
function BP({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? FP : [], ...r || []], s = U(() => tP())[0], a = z(function(h, w) {
    sr(h) && !sr(w) && s.tryAbandon();
  }, [s]);
  ze(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const S = t.getState();
      a(h, S), h = S;
    });
  }, [s, t, a]), ze(() => s.tryAbandon, [s.tryAbandon]);
  const l = z((g) => Xp({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), c = z((g, h, w) => kP({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, s, n, t]), u = z((g) => LP(e, g), [e]), d = z((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = z(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Za()));
  }, [s, t]), p = z(() => s.isClaimed(), [s]), m = K(() => ({
    canGetLock: l,
    tryGetLock: c,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [l, c, u, d, f, p]);
  for (let g = 0; g < i.length; g++)
    i[g](m);
}
const jP = (e) => ({
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
}), VP = (e) => ({
  ...ir,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...ir.durationDampening,
    ...e.autoScrollerOptions
  }
});
function jn(e) {
  return e.current || F(!1), e.current;
}
function zP(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = V(null), a = Gp(e), l = z(() => jP(a.current), [a]), c = z(() => VP(a.current), [a]), u = YE(t), d = eP({
    contextId: t,
    text: i
  }), f = VE(t, o), p = z((T) => {
    jn(s).dispatch(T);
  }, []), m = K(() => Nc({
    publishWhileDragging: C1,
    updateDroppableScroll: P1,
    updateDroppableIsEnabled: D1,
    updateDroppableIsCombineEnabled: R1,
    collectionStarting: E1
  }, p), [p]), g = HE(), h = K(() => yE(g, m), [g, m]), w = K(() => ME({
    scrollWindow: vE,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: c,
    ...Nc({
      move: Ip
    }, p)
  }), [h.scrollDroppable, p, c]), S = WE(t), b = K(() => mE({
    announce: u,
    autoScroller: w,
    dimensionMarshal: h,
    focusMarshal: S,
    getResponders: l,
    styleMarshal: f
  }), [u, w, h, S, l, f]);
  s.current = b;
  const y = z(() => {
    const T = jn(s);
    T.getState().phase !== "IDLE" && T.dispatch(Za());
  }, []), x = z(() => {
    const T = jn(s).getState();
    return T.phase === "DROP_ANIMATING" ? !0 : T.phase === "IDLE" ? !1 : T.isDragging;
  }, []), C = K(() => ({
    isDragging: x,
    tryAbort: y
  }), [x, y]);
  n(C);
  const P = z((T) => kp(jn(s).getState(), T), []), E = z(() => Qt(jn(s).getState()), []), O = K(() => ({
    marshal: h,
    focus: S,
    contextId: t,
    canLift: P,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, S, P, E, g]);
  return BP({
    contextId: t,
    store: b,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), W(() => y, [y]), v.createElement(ci.Provider, {
    value: O
  }, v.createElement(Jx, {
    context: sl,
    store: b
  }, e.children));
}
let WP = 0;
function GP() {
  return K(() => `${WP++}`, []);
}
function HP() {
  return v.useId();
}
var UP = "useId" in v ? HP : GP;
function qP(e) {
  const t = UP(), n = e.dragHandleUsageInstructions || Fr.dragHandleUsageInstructions;
  return v.createElement(cC, null, (r) => v.createElement(zP, {
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
}, KP = (e, t) => t ? Wn.drop(t.duration) : e ? Wn.snap : Wn.fluid, YP = (e, t) => {
  if (e)
    return t ? or.opacity.drop : or.opacity.combining;
}, XP = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function JP(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = XP(e), l = !!i, c = l ? ms.drop(r, s) : ms.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: KP(a, i),
    transform: c,
    opacity: YP(s, l),
    zIndex: l ? cu.dropAnimating : cu.dragging,
    pointerEvents: "none"
  };
}
function QP(e) {
  return {
    transform: ms.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function ZP(e) {
  return e.type === "DRAGGING" ? JP(e) : QP(e);
}
function eD(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = rp(o, r), s = io(i, n), a = {
    client: i,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, l = {
    x: i.marginBox.width,
    y: i.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: l,
    client: i,
    page: s
  };
}
function tD(e) {
  const t = al("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, l = K(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), c = z((p) => {
    const m = o();
    return m || F(!1), eD(n, m, p);
  }, [n, o]), u = K(() => ({
    uniqueId: t,
    descriptor: n,
    options: l,
    getDimension: c
  }), [n, c, l, t]), d = V(u), f = V(!0);
  ze(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), ze(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var cl = v.createContext(null);
function uo(e) {
  const t = bt(e);
  return t || F(!1), t;
}
function nD(e) {
  e.preventDefault();
}
const rD = (e) => {
  const t = V(null), n = z((C = null) => {
    t.current = C;
  }, []), r = z(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = uo(ci), {
    type: a,
    droppableId: l
  } = uo(cl), c = K(() => ({
    id: e.draggableId,
    index: e.index,
    type: a,
    droppableId: l
  }), [e.draggableId, e.index, a, l]), {
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
      descriptor: c,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [c, s, r, m, p, f]);
    tD(C);
  }
  const S = K(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: nD
  } : null, [o, i, d, f]), b = z((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (v.version.startsWith("16") || v.version.startsWith("17") ? w() : ys(w));
  }, [w, h]), y = K(() => {
    const C = ZP(h), P = h.type === "DRAGGING" && h.dropping ? b : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: C,
        onTransitionEnd: P
      },
      dragHandleProps: S
    };
  }, [o, S, d, h, b, n]), x = K(() => ({
    draggableId: c.id,
    type: c.type,
    source: {
      index: c.index,
      droppableId: c.droppableId
    }
  }), [c.droppableId, c.id, c.index, c.type]);
  return v.createElement(v.Fragment, null, u(y, h.snapshot, x));
};
var oD = rD, Jp = (e, t) => e === t, Qp = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const iD = (e) => e.combine ? e.combine.draggableId : null, sD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function aD() {
  const e = de((o, i) => ({
    x: o,
    y: i
  })), t = de((o, i, s = null, a = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), n = de((o, i, s, a, l = null, c = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: l,
      combineWith: c,
      mode: i,
      offset: o,
      dimension: s,
      forceShouldAnimate: u,
      snapshot: t(i, a, l, c, null)
    }
  }));
  return (o, i) => {
    if (sr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], l = Ve(o.impact), c = sD(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, l, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, l = o.dimensions.draggables[i.draggableId], c = s.result, u = c.mode, d = Qp(c), f = iD(c), m = {
        duration: o.dropDuration,
        curve: tl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? or.opacity.drop : null,
        scale: f ? or.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: o.newHomeClientOffset,
          dimension: l,
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
function Zp(e = null) {
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
    snapshot: Zp(null)
  }
};
function cD() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(Zp), n = de((s, a = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: l,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(fe, s, !0) : null, o = (s, a, l, c) => {
    const u = l.displaced.visible[s], d = !!(c.inVirtualList && c.effected[s]), f = ii(l), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (l.displaced.invisible[s])
        return null;
      const h = On(c.displacedBy.point), w = e(h.x, h.y);
      return n(w, p, !0);
    }
    if (d)
      return r(p);
    const m = l.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (sr(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const l = s.completed;
      return l.result.draggableId === a.draggableId ? null : o(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const uD = () => {
  const e = aD(), t = cD();
  return (r, o) => e(r, o) || t(r, o) || lD;
}, dD = {
  dropAnimationFinished: Op
}, fD = tp(uD, dD, null, {
  context: sl,
  areStatePropsEqual: Jp
})(oD);
var pD = fD;
function em(e) {
  return uo(cl).isUsingCloneFor === e.draggableId && !e.isClone ? null : v.createElement(pD, e);
}
function mD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return v.createElement(em, $t({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const tm = (e) => (t) => e === t, gD = tm("scroll"), hD = tm("auto"), uu = (e, t) => t(e.overflowX) || t(e.overflowY), bD = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return uu(n, gD) || uu(n, hD);
}, yD = () => !1, nm = (e) => e == null ? null : e === document.body ? yD() ? e : null : e === document.documentElement ? null : bD(e) ? e : nm(e.parentElement);
var vD = nm, bs = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const rm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : rm(e.parentElement) : !1;
var wD = (e) => {
  const t = vD(e), n = rm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, SD = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: i,
  page: s,
  closest: a
}) => {
  const l = (() => {
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
  })(), c = o === "vertical" ? Ka : pp, u = Pn({
    page: s,
    withPlaceholder: null,
    axis: c,
    frame: l
  });
  return {
    descriptor: e,
    isCombineEnabled: n,
    isFixedOnPage: r,
    axis: c,
    isEnabled: t,
    client: i,
    page: s,
    frame: l,
    subject: u
  };
};
const xD = (e, t) => {
  const n = op(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, l = Ga({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Ha({
    borderBox: l,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var CD = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const l = n.closestScrollable, c = xD(e, l), u = io(c, r), d = (() => {
    if (!l)
      return null;
    const p = op(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: io(p, r),
      scroll: bs(l),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return SD({
    descriptor: t,
    isEnabled: !i,
    isCombineEnabled: s,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: c,
    page: u,
    closest: d
  });
};
const ED = {
  passive: !1
}, PD = {
  passive: !0
};
var du = (e) => e.shouldPublishImmediately ? ED : PD;
const $r = (e) => e && e.env.closestScrollable || null;
function DD(e) {
  const t = V(null), n = uo(ci), r = al("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Gp(e), a = K(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = V(a), c = K(() => de((y, x) => {
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
    c(y.x, y.y);
  }, [u, c]), f = K(() => er(d), [d]), p = z(() => {
    const y = t.current, x = $r(y);
    if (y && x || F(!1), y.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = z((y, x) => {
    t.current && F(!1);
    const C = s.current, P = C.getDroppableRef();
    P || F(!1);
    const E = wD(P), O = {
      ref: P,
      descriptor: a,
      env: E,
      scrollOptions: x
    };
    t.current = O;
    const T = CD({
      ref: P,
      descriptor: a,
      env: E,
      windowScroll: y,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), N = E.closestScrollable;
    return N && (N.setAttribute(iu.contextId, n.contextId), N.addEventListener("scroll", p, du(O.scrollOptions))), T;
  }, [n.contextId, a, p, s]), g = z(() => {
    const y = t.current, x = $r(y);
    return y && x || F(!1), bs(x);
  }, []), h = z(() => {
    const y = t.current;
    y || F(!1);
    const x = $r(y);
    t.current = null, x && (f.cancel(), x.removeAttribute(iu.contextId), x.removeEventListener("scroll", p, du(y.scrollOptions)));
  }, [p, f]), w = z((y) => {
    const x = t.current;
    x || F(!1);
    const C = $r(x);
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
  ze(() => (l.current = b.descriptor, o.droppable.register(b), () => {
    t.current && h(), o.droppable.unregister(b);
  }), [S, a, h, b, i, o.droppable]), ze(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), ze(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Wi() {
}
const fu = {
  width: 0,
  height: 0,
  margin: hC
}, RD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? fu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, ID = ({
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
    transition: n !== "none" ? Wn.placeholder : null
  };
}, AD = (e) => {
  const t = V(null), n = z(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, l] = U(e.animate === "open");
  W(() => a ? r !== "open" ? (n(), l(!1), Wi) : t.current ? Wi : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), n) : Wi, [r, a, n]);
  const c = z((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = ID({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return v.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: c,
    ref: e.innerRef
  });
};
var OD = v.memo(AD);
class $D extends v.PureComponent {
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
const ND = (e) => {
  const t = bt(ci);
  t || F(!1);
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = V(null), i = V(null), {
    children: s,
    droppableId: a,
    type: l,
    mode: c,
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
      maxScroll: _p()
    });
  }, [r, h]);
  DD({
    droppableId: a,
    type: l,
    mode: c,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: S
  });
  const C = K(() => v.createElement($D, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: N,
    data: M,
    animate: _
  }) => v.createElement(OD, {
    placeholder: M,
    onClose: N,
    innerRef: y,
    animate: _,
    contextId: n,
    onTransitionEnd: x
  })), [n, x, e.placeholder, e.shouldAnimatePlaceholder, y]), P = K(() => ({
    innerRef: b,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, b]), E = g ? g.dragging.draggableId : null, O = K(() => ({
    droppableId: a,
    type: l,
    isUsingCloneFor: E
  }), [a, E, l]);
  function T() {
    if (!g)
      return null;
    const {
      dragging: N,
      render: M
    } = g, _ = v.createElement(em, {
      draggableId: N.draggableId,
      index: N.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (A, L) => M(A, L, N));
    return hu.createPortal(_, w());
  }
  return v.createElement(cl.Provider, {
    value: O
  }, s(P, m), T());
};
var TD = ND;
function LD() {
  return document.body || F(!1), document.body;
}
const pu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: LD
}, om = (e) => {
  let t = {
    ...e
  }, n;
  for (n in pu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: pu[n]
    });
  return t;
}, Gi = (e, t) => e === t.droppable.type, mu = (e, t) => t.draggables[e.draggable.id], MD = () => {
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
  })), r = de((i, s, a, l, c, u) => {
    const d = c.descriptor.id;
    if (c.descriptor.droppableId === i) {
      const m = u ? {
        render: u,
        dragging: n(c.descriptor)
      } : null, g = {
        isDraggingOver: a,
        draggingOverWith: a ? d : null,
        draggingFromThisWith: d,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: g,
        useClone: m
      };
    }
    if (!s)
      return t;
    if (!l)
      return e;
    const p = {
      isDraggingOver: a,
      draggingOverWith: d,
      draggingFromThisWith: null,
      isUsingPlaceholder: !0
    };
    return {
      placeholder: c.placeholder,
      shouldAnimatePlaceholder: !0,
      snapshot: p,
      useClone: null
    };
  });
  return (i, s) => {
    const a = om(s), l = a.droppableId, c = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (sr(i)) {
      const f = i.critical;
      if (!Gi(c, f))
        return t;
      const p = mu(f, i.dimensions), m = Ve(i.impact) === l;
      return r(l, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Gi(c, f.critical))
        return t;
      const p = mu(f.critical, i.dimensions);
      return r(l, u, Qp(f.result) === l, Ve(f.impact) === l, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Gi(c, f.critical))
        return t;
      const p = Ve(f.impact) === l, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === l;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, _D = {
  updateViewportMaxScroll: A1
}, kD = tp(MD, _D, (e, t, n) => ({
  ...om(n),
  ...e,
  ...t
}), {
  context: sl,
  areStatePropsEqual: Jp
})(TD);
var FD = kD;
function im(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = im(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function BD() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = im(e)) && (r && (r += " "), r += t);
  return r;
}
const jD = "_item_1o9ja_1", VD = "_itemDragging_1o9ja_12", zD = "_symbol_1o9ja_16", WD = "_dragHandle_1o9ja_22", Nr = {
  item: jD,
  itemDragging: VD,
  symbol: zD,
  dragHandle: WD
};
function GD({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = zt(), i = Te(Df), s = (l) => {
    if (!t || !l.destination)
      return;
    const c = Array.from(i), [u] = c.splice(l.source.index, 1);
    c.splice(l.destination.index, 0, u), n({ ...t, filterDictionaries: c }), r(!0);
  }, a = i.map((l, c) => /* @__PURE__ */ k.jsx(mD, { index: c, draggableId: l.ifcClassification.location, children: (u, d) => /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: BD(Nr.item, { [Nr.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ k.jsx("div", { ...u.dragHandleProps, className: Nr.dragHandle, children: /* @__PURE__ */ k.jsx(AS, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ k.jsx(Je, { className: Nr.uri, children: l.ifcClassification.location })
      ]
    }
  ) }, l.ifcClassification.location));
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx(An, { order: 5, children: o("Sort filter dictionaries") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: o("Sort filter dictionaries help text") })
    ] }),
    /* @__PURE__ */ k.jsx(oe.Panel, { children: /* @__PURE__ */ k.jsx(qP, { onDragEnd: s, children: /* @__PURE__ */ k.jsx(FD, { droppableId: "dnd-list", direction: "vertical", children: (l) => /* @__PURE__ */ k.jsxs("div", { ...l.droppableProps, ref: l.innerRef, children: [
      a,
      l.placeholder
    ] }) }) }) })
  ] }, e);
}
function HD({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = zt(), i = [
    { value: "EN", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ k.jsx(
    gr,
    {
      label: r("Language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("Select language")
    }
  );
}
function UD({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = zt(), i = (s) => {
    !s || !t || (n({ ...t, bsddApiEnvironment: s }), r(!0));
  };
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx(An, { order: 5, children: o("General settings") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: o("General settings help text") })
    ] }),
    /* @__PURE__ */ k.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ k.jsx(HD, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ k.jsx(Sa, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        gr,
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
function qD({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = zt(), { mainDictionary: i, filterDictionaries: s } = t || { mainDictionary: null, filterDictionaries: [] }, a = i ? [i, ...s] : s, l = (c, u) => {
    var f;
    if (!t)
      return;
    let d = { ...t };
    if (((f = d.mainDictionary) == null ? void 0 : f.ifcClassification.location) === c) {
      const p = {
        ...d.mainDictionary,
        parameterMapping: u
      };
      d.mainDictionary = p;
    } else
      d.filterDictionaries = d.filterDictionaries.map((p) => p.ifcClassification.location === c ? { ...p, parameterMapping: u } : p);
    n(d), r(!0);
  };
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx(An, { order: 5, children: o("Parameter mapping") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: o("Parameter mapping help text") })
    ] }),
    /* @__PURE__ */ k.jsx(oe.Panel, { children: a.map((c) => /* @__PURE__ */ k.jsxs("div", { style: { marginBottom: "1em" }, children: [
      /* @__PURE__ */ k.jsx(
        Da,
        {
          label: c.ifcClassification.location,
          placeholder: "Enter a revit type parameter",
          value: c.parameterMapping,
          onChange: (u) => l(c.ifcClassification.location, u.currentTarget.value)
        }
      ),
      " "
    ] }, c.ifcClassification.location)) })
  ] }, e);
}
function KD() {
  const e = Nf(), t = Te(Ta), n = Te(Df), r = Te(Q0), o = Te(Z0), i = Te(_o), [s, a] = U(), [l, c] = U(!1), [u, d] = U(!0);
  W(() => {
    i && (e(lS(i)), e(cs(i)));
  }, [e, i]), W(() => {
    a({
      bsddApiEnvironment: o,
      mainDictionary: t,
      filterDictionaries: n,
      language: r
    });
  }, [t, n, o, r]);
  const f = () => {
    var m;
    s && (e(Rf(s)), (m = window == null ? void 0 : window.bsddBridge) == null || m.saveSettings(JSON.stringify(s)), c(!1));
  }, p = () => {
    c(!1);
  };
  return /* @__PURE__ */ k.jsxs(at.Panel, { value: "settings", children: [
    /* @__PURE__ */ k.jsxs(oe, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ k.jsx(
        UD,
        {
          id: 1,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c
        }
      ),
      /* @__PURE__ */ k.jsx(
        VS,
        {
          id: 2,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c,
          setIsLoading: d
        }
      ),
      /* @__PURE__ */ k.jsx(
        qD,
        {
          id: 3,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c
        }
      ),
      /* @__PURE__ */ k.jsx(
        GD,
        {
          id: 4,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c
        }
      )
    ] }),
    /* @__PURE__ */ k.jsxs(wn, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ k.jsx(
        qn,
        {
          fullWidth: !0,
          loading: u,
          onClick: f,
          disabled: !l,
          variant: u ? "light" : "filled",
          loaderProps: { type: "dots" },
          children: "Save"
        }
      ),
      /* @__PURE__ */ k.jsx(qn, { fullWidth: !0, variant: "light", onClick: p, disabled: !l, children: "Cancel" })
    ] })
  ] });
}
const YD = (e) => async (t, n) => {
  const r = n(), o = Cc(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Cc(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(Rf(s));
};
function XD() {
  const e = Nf(), { t } = zt(), n = Te(sS), [r, o] = U(null), i = (s) => {
    o(s);
  };
  return W(() => {
    n && r && (e(YD(r)), o(null));
  }, [n, r, e]), W(() => {
  }, [e]), W(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const a = await window.bsddBridge.loadSettings(), l = JSON.parse(a);
        console.log("initial loadSettings", l), i(l);
      }
    })();
  }, []), window.updateSelection = (s) => {
    console.log("updateSelection", s), e(hS(s));
  }, window.updateSettings = (s) => {
    console.log("updateSettings", s), i(s);
  }, /* @__PURE__ */ k.jsx(ga, { size: "40rem", children: /* @__PURE__ */ k.jsxs(at, { defaultValue: "link", children: [
    /* @__PURE__ */ k.jsxs(at.List, { grow: !0, children: [
      /* @__PURE__ */ k.jsx(at.Tab, { value: "link", children: t("Link") }),
      /* @__PURE__ */ k.jsx(at.Tab, { value: "settings", children: t("Settings") })
    ] }),
    /* @__PURE__ */ k.jsx(jS, {}),
    /* @__PURE__ */ k.jsx(KD, {})
  ] }) });
}
function JD() {
  return /* @__PURE__ */ k.jsx(Uu, { theme: jw, children: /* @__PURE__ */ k.jsx(XD, {}) });
}
const QD = C0({
  reducer: {
    settings: eS,
    ifcData: bS,
    bsdd: cS
  }
});
Hi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ k.jsx(v.StrictMode, { children: /* @__PURE__ */ k.jsx(Qm, { store: QD, children: /* @__PURE__ */ k.jsx(JD, {}) }) })
);
