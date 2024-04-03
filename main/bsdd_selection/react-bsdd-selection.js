var Om = Object.defineProperty;
var Am = (e, t, n) => t in e ? Om(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => (Am(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as R from "react";
import b, { createContext as Gt, useContext as dt, useState as q, useRef as V, useEffect as G, useMemo as bn, useCallback as Z, useLayoutEffect as fo, useId as Cu, forwardRef as ie, cloneElement as cn, Children as $m, createElement as xc } from "react";
import * as Nm from "react-dom";
import Eu, { flushSync as xs, createPortal as Tm, unstable_batchedUpdates as Lm } from "react-dom";
function Pu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Du = { exports: {} }, po = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm = b, _m = Symbol.for("react.element"), km = Symbol.for("react.fragment"), Fm = Object.prototype.hasOwnProperty, Bm = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ru(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Fm.call(t, r) && !jm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: _m, type: e, key: i, ref: s, props: o, _owner: Bm.current };
}
po.Fragment = km;
po.jsx = Ru;
po.jsxs = Ru;
Du.exports = po;
var k = Du.exports, qi = {}, Sc = Eu;
qi.createRoot = Sc.createRoot, qi.hydrateRoot = Sc.hydrateRoot;
var Iu = { exports: {} }, Ou = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr = b;
function Vm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zm = typeof Object.is == "function" ? Object.is : Vm, Gm = cr.useSyncExternalStore, Wm = cr.useRef, Hm = cr.useEffect, Um = cr.useMemo, qm = cr.useDebugValue;
Ou.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Wm(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = Um(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, zm(u, p))
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
  var a = Gm(e, i[0], i[1]);
  return Hm(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), qm(a), a;
};
Iu.exports = Ou;
var Km = Iu.exports, Fe = (
  // prettier-ignore
  // @ts-ignore
  "default" in R ? R.default : R
), Cc = Symbol.for("react-redux-context"), Ec = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ym() {
  if (!Fe.createContext)
    return {};
  const e = Ec[Cc] ?? (Ec[Cc] = /* @__PURE__ */ new Map());
  let t = e.get(Fe.createContext);
  return t || (t = Fe.createContext(
    null
  ), e.set(Fe.createContext, t)), t;
}
var kt = /* @__PURE__ */ Ym(), Xm = () => {
  throw new Error("uSES not initialized!");
};
function Ss(e = kt) {
  return function() {
    return Fe.useContext(e);
  };
}
var Au = /* @__PURE__ */ Ss(), $u = Xm, Jm = (e) => {
  $u = e;
}, Qm = (e, t) => e === t;
function Zm(e = kt) {
  const t = e === kt ? Au : Ss(e), n = (r, o = {}) => {
    const { equalityFn: i = Qm, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
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
    ), p = $u(
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
var eg = /* @__PURE__ */ Zm();
function tg(e) {
  e();
}
function ng() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      tg(() => {
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
var Pc = {
  notify() {
  },
  get: () => []
};
function rg(e, t) {
  let n, r = Pc, o = 0, i = !1;
  function s(g) {
    u();
    const h = r.subscribe(g);
    let x = !1;
    return () => {
      x || (x = !0, h(), d());
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = ng());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Pc);
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
var og = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ig = og ? Fe.useLayoutEffect : Fe.useEffect;
function sg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Fe.useMemo(() => {
    const l = rg(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Fe.useMemo(() => e.getState(), [e]);
  ig(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || kt;
  return /* @__PURE__ */ Fe.createElement(c.Provider, { value: s }, n);
}
var ag = sg;
function Nu(e = kt) {
  const t = e === kt ? Au : (
    // @ts-ignore
    Ss(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var cg = /* @__PURE__ */ Nu();
function lg(e = kt) {
  const t = e === kt ? cg : Nu(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ug = /* @__PURE__ */ lg();
Jm(Km.useSyncExternalStoreWithSelector);
const dg = {
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
    this.prefix = n.prefix || "i18next:", this.logger = t || dg, this.options = n, this.debug = n.debug;
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
function _n() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Dc(e) {
  return e == null ? "" : "" + e;
}
function fg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function Cs(e, t, n) {
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
function Rc(e, t, n) {
  const {
    obj: r,
    k: o
  } = Cs(e, t, Object);
  r[o] = n;
}
function pg(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = Cs(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function jr(e, t) {
  const {
    obj: n,
    k: r
  } = Cs(e, t);
  if (n)
    return n[r];
}
function mg(e, t, n) {
  const r = jr(e, n);
  return r !== void 0 ? r : jr(t, n);
}
function Tu(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Tu(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function fn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var gg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function hg(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => gg[t]) : e;
}
const bg = [" ", ",", "?", "!", ";"];
function yg(e, t, n) {
  t = t || "", n = n || "";
  const r = bg.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
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
      return l ? Vr(c, l, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function zr(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class Ic extends mo {
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
    const c = jr(this.data, a);
    return c || !s || typeof r != "string" ? c : Vr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), Rc(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
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
    let c = jr(this.data, a) || {};
    o ? Tu(c, r, i) : c = {
      ...c,
      ...r
    }, Rc(this.data, a, c), s.silent || this.emit("added", t, n, r);
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
var Lu = {
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
const Oc = {};
class Gr extends mo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), fg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = pt.create("translator");
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
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !yg(t, r, o);
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
        const v = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${v}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: l,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(n)
        } : `${c}${v}${s}`;
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
    const p = d && d.usedKey || s, m = d && d.exactUsedKey || s, g = Object.prototype.toString.apply(f), h = ["[object Number]", "[object Function]", "[object RegExp]"], x = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, w = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (w && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && h.indexOf(g) < 0 && !(typeof x == "string" && g === "[object Array]")) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = v, d.usedParams = this.getUsedParamsDetails(n), d) : v;
      }
      if (i) {
        const v = g === "[object Array]", S = v ? [] : {}, C = v ? m : p;
        for (const P in f)
          if (Object.prototype.hasOwnProperty.call(f, P)) {
            const E = `${C}${i}${P}`;
            S[P] = this.translate(E, {
              ...n,
              joinArrays: !1,
              ns: a
            }), S[P] === E && (S[P] = f[P]);
          }
        f = S;
      }
    } else if (w && typeof x == "string" && g === "[object Array]")
      f = f.join(x), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let v = !1, S = !1;
      const C = n.count !== void 0 && typeof n.count != "string", P = Gr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", $ = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", N = n[`defaultValue${E}`] || n[`defaultValue${$}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (v = !0, f = N), this.isValidLookup(f) || (S = !0, f = s);
      const M = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, _ = P && N !== f && this.options.updateMissing;
      if (S || v || _) {
        if (this.logger.log(_ ? "updateKey" : "missingKey", l, c, s, _ ? N : f), i) {
          const F = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let O = [];
        const L = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && L && L[0])
          for (let F = 0; F < L.length; F++)
            O.push(L[F]);
        else
          this.options.saveMissingTo === "all" ? O = this.languageUtils.toResolveHierarchy(n.lng || this.language) : O.push(n.lng || this.language);
        const I = (F, A, H) => {
          const K = P && H !== f ? H : M;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, c, A, K, _, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(F, c, A, K, _, n), this.emit("missingKey", F, c, A, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? O.forEach((F) => {
          this.pluralResolver.getSuffixes(F, n).forEach((A) => {
            I([F], s + A, n[`defaultValue${A}`] || N);
          });
        }) : I(O, s, N));
      }
      f = this.extendTranslation(f, t, n, d, r), S && f === s && this.options.appendNamespaceToMissingKey && (f = `${c}:${s}`), (S || v) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${s}` : s, v ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
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
    return t != null && c && c.length && r.applyPostProcessor !== !1 && (t = Lu.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(r) || (a = h, !Oc[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Oc[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((x) => {
          if (this.isValidLookup(r))
            return;
          s = x;
          const w = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, u, x, h, n);
          else {
            let v;
            f && (v = this.pluralResolver.getSuffix(x, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (w.push(u + v), n.ordinal && v.indexOf(C) === 0 && w.push(u + v.replace(C, this.options.pluralSeparator)), p && w.push(u + S)), m) {
              const P = `${u}${this.options.contextSeparator}${n.context}`;
              w.push(P), f && (w.push(P + v), n.ordinal && v.indexOf(C) === 0 && w.push(P + v.replace(C, this.options.pluralSeparator)), p && w.push(P + S));
            }
          }
          let y;
          for (; y = w.pop(); )
            this.isValidLookup(r) || (i = y, r = this.getResource(x, h, y, n));
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
function bi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Ac {
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
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = bi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = bi(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = bi(r[2].toLowerCase()))), r.join("-");
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
let vg = [{
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
}], wg = {
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
const xg = ["v1", "v2", "v3"], Sg = ["v4"], $c = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Cg() {
  const e = {};
  return vg.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: wg[t.fc]
      };
    });
  }), e;
}
class Eg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = pt.create("pluralResolver"), (!this.options.compatibilityJSON || Sg.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Cg();
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => $c[o] - $c[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    return !xg.includes(this.options.compatibilityJSON);
  }
}
function Nc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = mg(e, t, n);
  return !i && o && typeof n == "string" && (i = Vr(e, n, r), i === void 0 && (i = Vr(t, n, r))), i;
}
class Pg {
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
    this.escape = n.escape !== void 0 ? n.escape : hg, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? fn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? fn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? fn(n.nestingPrefix) : n.nestingPrefixEscaped || fn("$t("), this.nestingSuffix = n.nestingSuffix ? fn(n.nestingSuffix) : n.nestingSuffixEscaped || fn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
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
        const w = Nc(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : w;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), x = g.join(this.formatSeparator).trim();
      return this.format(Nc(n, c, h, this.options.keySeparator, this.options.ignoreJSONStructure), x, r, {
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
            const x = d(t, i, o);
            s = typeof x == "string" ? x : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            s = "";
          else if (f) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = Dc(s));
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
      typeof i != "string" && (i = Dc(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function Dg(e) {
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
    return a || (a = e(zr(o), i), t[s] = a), a(r);
  };
}
class Rg {
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
      } = Dg(c);
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
function Ig(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Og extends mo {
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
      pg(c.loaded, [i], s), Ig(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
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
function Tc() {
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
function Lc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Cr() {
}
function Ag(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Un extends mo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Lc(t), this.services = {}, this.logger = pt, this.modules = {
      external: []
    }, Ag(this), n && !this.isInitialized && !t.isClone) {
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
    const o = Tc();
    this.options = {
      ...o,
      ...this.options,
      ...Lc(n)
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
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Rg);
      const d = new Ac(this.options);
      this.store = new Ic(this.options.resources, this.options);
      const f = this.services;
      f.logger = pt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Eg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Pg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Og(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Gr(this.services, this.options), this.translator.on("*", function(p) {
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
    const c = _n(), l = () => {
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
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cr;
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
    const o = _n();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Cr), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Lu.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = _n();
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
    const r = _n();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = _n();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Ac(Tc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Un(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cr;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Un(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new Ic(this.store.data, o), i.services.resourceStore = i.store), i.translator = new Gr(i.services, o), i.translator.on("*", function(a) {
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
const be = Un.createInstance();
be.createInstance = Un.createInstance;
be.createInstance;
be.dir;
be.init;
be.loadResources;
be.reloadResources;
be.use;
be.changeLanguage;
be.getFixedT;
be.t;
be.exists;
be.setDefaultNamespace;
be.hasLoadedNamespace;
be.loadNamespaces;
be.loadLanguages;
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function $g() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Mc = {};
function Ki() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Mc[t[0]] || (typeof t[0] == "string" && (Mc[t[0]] = /* @__PURE__ */ new Date()), $g(...t));
}
const Mu = (e, t) => () => {
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
function _c(e, t, n) {
  e.loadNamespaces(t, Mu(e, n));
}
function kc(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Mu(e, r));
}
function Ng(e, t) {
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
function Tg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Ki("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : Ng(e, t, n);
}
const Lg = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Mg = {
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
}, _g = (e) => Mg[e], kg = (e) => e.replace(Lg, _g);
let Yi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: kg
};
function Fg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Yi = {
    ...Yi,
    ...e
  };
}
function Bg() {
  return Yi;
}
let _u;
function jg(e) {
  _u = e;
}
function Vg() {
  return _u;
}
const zg = {
  type: "3rdParty",
  init(e) {
    Fg(e.options.react), jg(e);
  }
}, Gg = Gt();
class Wg {
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
const Hg = (e, t) => {
  const n = V();
  return G(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function Wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = dt(Gg) || {}, i = n || r || Vg();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new Wg()), !i) {
    Ki("You will need to pass in an i18next instance by using initReactI18next");
    const y = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, v = [y, {}, !1];
    return v.t = y, v.i18n = {}, v.ready = !1, v;
  }
  i.options.react && i.options.react.wait !== void 0 && Ki("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Bg(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = e || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((y) => Tg(y, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, p] = q(d);
  let m = l.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = Hg(m), h = V(!0);
  G(() => {
    const {
      bindI18n: y,
      bindI18nStore: v
    } = s;
    h.current = !0, !u && !a && (t.lng ? kc(i, t.lng, l, () => {
      h.current && p(d);
    }) : _c(i, l, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function S() {
      h.current && p(d);
    }
    return y && i && i.on(y, S), v && i && i.store.on(v, S), () => {
      h.current = !1, y && i && y.split(" ").forEach((C) => i.off(C, S)), v && i && v.split(" ").forEach((C) => i.store.off(C, S));
    };
  }, [i, m]);
  const x = V(!0);
  G(() => {
    h.current && !x.current && p(d), x.current = !1;
  }, [i, c]);
  const w = [f, i, u];
  if (w.t = f, w.i18n = i, w.ready = u, u || !u && !a)
    return w;
  throw new Promise((y) => {
    t.lng ? kc(i, t.lng, l, () => y()) : _c(i, l, () => y());
  });
}
be.use(zg).init({
  resources: {
    "en-GB": {
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
        Propertysets: "Property sets",
        ShowPreview: "Show preview dictionaries"
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
        Propertysets: "Eigenschappen sets",
        ShowPreview: "Toon voorbeeld domeinen"
      }
    }
  },
  lng: "en-GB",
  fallbackLng: "nl-NL",
  interpolation: {
    escapeValue: !1
  }
});
function gt(e) {
  return Object.keys(e);
}
function yi(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Es(e, t) {
  const n = { ...e }, r = t;
  return yi(e) && yi(t) && Object.keys(t).forEach((o) => {
    yi(r[o]) && o in e ? n[o] = Es(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function Ug(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function qg(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function Kg(e) {
  const t = qg(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function vi(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function ku(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return "0";
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? vi(o) : o;
    }
    if (typeof r == "string") {
      if (r.startsWith("calc(") || r.startsWith("var(") || r.startsWith("clamp("))
        return r;
      if (r.includes(" "))
        return r.split(" ").map((i) => n(i)).join(" ");
      if (r.includes(e))
        return t ? vi(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? vi(i) : i;
      }
    }
    return r;
  }
  return n;
}
const D = ku("rem", { shouldScale: !0 }), Fc = ku("em");
function Ps(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Fu(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Ht(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== b.Fragment : !1;
}
function Ut(e) {
  const t = Gt(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => {
    const o = dt(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Ds(e = null) {
  const t = Gt(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => dt(t)];
}
function Wr(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function Xi(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function Yg(e, t, n) {
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
function Xg(e, t, n) {
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
function Jg(e, t, n) {
  return Xi(e, n) === Xi(t, n);
}
function Bu({
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
      ((m = Xi(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => Jg(a.currentTarget, g, e)), l = c.findIndex((g) => a.currentTarget === g), u = Xg(l, c, r), d = Yg(l, c, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
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
const Qg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Rs(e) {
  return Qg[e];
}
const Zg = () => {
};
function eh(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || Zg : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function se(e, t = "size", n = !0) {
  if (e !== void 0)
    return Fu(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function ju(e) {
  return se(e, "mantine-spacing");
}
function et(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : se(e, "mantine-radius");
}
function je(e) {
  return se(e, "mantine-font-size");
}
function th(e) {
  return se(e, "mantine-line-height", !1);
}
function nh(e) {
  if (e)
    return se(e, "mantine-shadow", !1);
}
function Hr(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Vu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Vu(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function vt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Vu(e)) && (r && (r += " "), r += t);
  return r;
}
const rh = {};
function oh(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = vt(t[r], o) : t[r] = o;
    });
  }), t;
}
function go({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || rh
  );
  return oh(i);
}
function Ur({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function zu() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function en(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), bn(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ho(e, t) {
  const n = en(e), r = V(0);
  return G(() => () => window.clearTimeout(r.current), []), Z(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const Bc = ["mousedown", "touchstart"];
function ih(e, t, n) {
  const r = V();
  return G(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((l) => !!l && !i.composedPath().includes(l)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || Bc).forEach((i) => document.addEventListener(i, o)), () => {
      (t || Bc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function sh(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function ah(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function ch(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = q(
    n ? t : ah(e, t)
  ), i = V();
  return G(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), sh(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const lr = typeof document < "u" ? fo : G;
function Ft(e, t) {
  const n = V(!1);
  G(
    () => () => {
      n.current = !1;
    },
    []
  ), G(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
function lh({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = V(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Ft(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [e, t]), r;
}
function uh(e, t = "body > :not(script)") {
  const n = zu(), r = Array.from(
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
const dh = /input|select|textarea|button|object/, Gu = "a, input, select, textarea, button, object, [tabindex]";
function fh(e) {
  return e.style.display === "none";
}
function ph(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (fh(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function Wu(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Ji(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(Wu(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (dh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && ph(e);
}
function Hu(e) {
  const t = Wu(e);
  return (Number.isNaN(t) || t >= 0) && Ji(e);
}
function mh(e) {
  return Array.from(e.querySelectorAll(Gu)).filter(Hu);
}
function gh(e, t) {
  const n = mh(e);
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
function hh(e = !0) {
  const t = V(), n = V(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Gu));
      s = a.find(Hu) || a.find(Ji) || null, !s && Ji(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = Z(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = uh(i), t.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i);
        }), t.current = i) : t.current = null);
      }
    },
    [e]
  );
  return G(() => {
    if (!e)
      return;
    t.current && setTimeout(() => r(t.current));
    const i = (s) => {
      s.key === "Tab" && t.current && gh(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const bh = b["useId".toString()] || (() => {
});
function yh() {
  const e = bh();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function It(e) {
  const t = yh(), [n, r] = q(t);
  return lr(() => {
    r(zu());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function Uu(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function qu(...e) {
  return (t) => {
    e.forEach((n) => Uu(n, t));
  };
}
function Oe(...e) {
  return Z(qu(...e), e);
}
function Et({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {
  }
}) {
  const [o, i] = q(
    t !== void 0 ? t : n
  ), s = (a) => {
    i(a), r == null || r(a);
  };
  return e !== void 0 ? [e, r, !0] : [o, s, !1];
}
function Ku(e, t) {
  return ch("(prefers-reduced-motion: reduce)", e, t);
}
function vh(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = q(e), s = Z(() => {
    i((l) => l || (n == null || n(), !0));
  }, [n]), a = Z(() => {
    i((l) => l && (r == null || r(), !1));
  }, [r]), c = Z(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: c }];
}
const Yu = Gt(null);
function Is() {
  const e = dt(Yu);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function wh() {
  return Is().cssVariablesResolver;
}
function xh() {
  return Is().classNamesPrefix;
}
function Os() {
  return Is().getStyleNonce;
}
function Sh(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function Ch(e) {
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
function Eh(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function Ph(e) {
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
function Xu(e) {
  return Sh(e) ? Ch(e) : e.startsWith("rgb") ? Eh(e) : e.startsWith("hsl") ? Ph(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Er(e, t) {
  if (e.startsWith("var("))
    return e;
  const { r: n, g: r, b: o, a: i } = Xu(e), s = 1 - t, a = (c) => Math.round(c * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function Qi(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function bo({
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
    value: i !== void 0 ? t.colors[r][i] : t.colors[r][Qi(t, n || "light")],
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
function bt(e, t) {
  const n = bo({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Zi(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = bt(n.from, t), o = bt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Te(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: n, g: r, b: o } = Xu(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Dh = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = bo({ color: e, theme: t });
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
        background: Te(i, 0.1),
        hover: Te(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: Te(e, 0.1),
      hover: Te(e, 0.12),
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
      hover: Te(t.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${D(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: Te(e, 0.05),
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
        hover: Te(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Te(e, 0.12),
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
    background: Zi(r, t),
    hover: Zi(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${D(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Rh = {
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
}, jc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", As = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Rh,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Dh,
  fontFamily: jc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: jc,
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
function Vc(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Ih({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return Vc(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && Vc(r.newValue) && n(r.newValue);
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
const Oh = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", zc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function wi(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Gc(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Oh);
  if (typeof e.primaryShade == "object" && (!wi(e.primaryShade.dark) || !wi(e.primaryShade.light)))
    throw new Error(zc);
  if (typeof e.primaryShade == "number" && !wi(e.primaryShade))
    throw new Error(zc);
}
function Ah(e, t) {
  var r;
  if (!t)
    return Gc(e), e;
  const n = Es(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Gc(n), n;
}
const $s = Gt(null), $h = () => dt($s) || As;
function wt() {
  const e = dt($s);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Ju({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = $h(), o = bn(
    () => Ah(n ? r : As, e),
    [e, r, n]
  );
  return /* @__PURE__ */ b.createElement($s.Provider, { value: o }, t);
}
Ju.displayName = "@mantine/core/MantineThemeProvider";
function Nh() {
  const e = wt(), t = Os(), n = gt(e.breakpoints).reduce((r, o) => {
    const i = Kg(e.breakpoints[o]);
    return `${r}@media (max-width: ${Fc(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Fc(
      i
    )}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function xi(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function Si(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Th(e, t) {
  const n = xi(e.variables), r = n ? Si(t, n) : "", o = xi(e.dark), i = o ? Si(`${t}[data-mantine-color-scheme="dark"]`, o) : "", s = xi(e.light), a = s ? Si(`${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function mn(e, t, n) {
  gt(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const Qu = (e) => {
  const t = Qi(e, "dark"), n = Qi(e, "light"), r = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : D(e.defaultRadius), o = {
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
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-filled-hover`] = a, o.light[`--mantine-color-${s}-light`] = Te(
      e.colors[s][n],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = Te(
      e.colors[s][n],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline-hover`] = Te(
      e.colors[s][n],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.dark[`--mantine-color-${s}-filled-hover`] = c, o.dark[`--mantine-color-${s}-light`] = Te(
      e.colors[s][Math.max(0, t - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = Te(
      e.colors[s][Math.max(0, t - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      t - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      t - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = Te(
      e.colors[s][Math.max(t - 4, 0)],
      0.05
    );
  });
  const i = e.headings.sizes;
  return gt(i).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = i[s].fontSize, o.variables[`--mantine-${s}-line-height`] = i[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = i[s].fontWeight || e.headings.fontWeight;
  }), o;
};
function Lh({ theme: e, generator: t }) {
  const n = Qu(e), r = t == null ? void 0 : t(e);
  return r ? Es(n, r) : n;
}
const Ci = Qu(As);
function Mh(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return gt(e.variables).forEach((n) => {
    Ci.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), gt(e.light).forEach((n) => {
    Ci.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), gt(e.dark).forEach((n) => {
    Ci.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function _h(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Zu({ cssVariablesSelector: e }) {
  const t = wt(), n = Os(), r = wh(), o = Lh({ theme: t, generator: r }), i = e === ":root", s = i ? Mh(o) : o, a = Th(s, e);
  return a ? /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${a}${i ? "" : _h(e)}`
      }
    }
  ) : null;
}
Zu.displayName = "@mantine/CssVariables";
function kh() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function kn(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function Fh({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = V(), [i, s] = q(() => e.get(t)), a = r || i, c = Z(
    (u) => {
      r || (kn(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), l = Z(() => {
    s(t), kn(t, n), e.clear();
  }, [e.clear, t]);
  return G(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), lr(() => {
    kn(e.get(t), n);
  }, []), G(() => {
    var d;
    if (r)
      return kn(r, n), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && kn(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function Bh({
  respectReducedMotion: e,
  getRootElement: t
}) {
  lr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
kh();
function ed({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = Ih(),
  defaultColorScheme: a = "light",
  getRootElement: c = () => document.documentElement,
  cssVariablesResolver: l,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = Fh({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: c
  });
  return Bh({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: c
  }), /* @__PURE__ */ b.createElement(
    Yu.Provider,
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
    /* @__PURE__ */ b.createElement(Ju, { theme: e }, r && /* @__PURE__ */ b.createElement(Zu, { cssVariablesSelector: o }), /* @__PURE__ */ b.createElement(Nh, null), t)
  );
}
ed.displayName = "@mantine/core/MantineProvider";
function td({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = wt();
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
const jh = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Vh({ theme: e, options: t, unstyled: n }) {
  return vt(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || jh[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function zh({
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
function Gh({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return go({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function Wh({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function Hh({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function Uh({
  themeName: e,
  classNamesPrefix: t,
  selector: n
}) {
  return e.map((r) => `${t}-${r}-${n}`);
}
function qh({
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
function Kh({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function Yh({
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
  return vt(
    Vh({ theme: e, options: t, unstyled: a }),
    qh({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    Kh({ options: t, classes: s, selector: r, unstyled: a }),
    Gh({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    zh({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    Wh({ rootSelector: l, selector: r, className: c }),
    Hh({ selector: r, classes: s, unstyled: a }),
    Uh({ themeName: n, classNamesPrefix: o, selector: r }),
    t == null ? void 0 : t.className
  );
}
function Xh({
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
function es({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...es({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Jh(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...Ps(n[r]) };
  }), t), {});
}
function Qh({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s
}) {
  var a;
  return (a = Jh([
    t == null ? void 0 : t(n, r, o),
    ...s.map((c) => {
      var l, u, d;
      return (d = (u = (l = n.components) == null ? void 0 : l[c]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : a[i];
}
function Zh({
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
    ...Xh({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...Ur({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...Ur({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...Qh({ theme: e, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? es({ style: c, theme: e }) : null,
    ...es({ style: r == null ? void 0 : r.style, theme: e })
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
  const f = wt(), p = xh(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: Yh({
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
    style: Zh({
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
  const r = wt(), o = (s = r.components[e]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...Ps(n) };
}
function Wc(e) {
  return gt(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${Ug(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function eb({ selector: e, styles: t, media: n }) {
  const r = t ? Wc(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${Wc(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function tb({ selector: e, styles: t, media: n }) {
  const r = Os();
  return /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: eb({ selector: e, styles: t, media: n }) }
    }
  );
}
function ur(e) {
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
    opacity: x,
    ff: w,
    fz: y,
    fw: v,
    lts: S,
    ta: C,
    lh: P,
    fs: E,
    tt: $,
    td: N,
    w: T,
    miw: M,
    maw: _,
    h: O,
    mih: L,
    mah: I,
    bgsz: F,
    bgp: A,
    bgr: H,
    bga: K,
    pos: ne,
    top: ye,
    left: ue,
    bottom: Ae,
    right: ve,
    inset: re,
    display: we,
    hiddenFrom: Me,
    visibleFrom: Ce,
    lightHidden: Ee,
    darkHidden: _e,
    ...ce
  } = e;
  return { styleProps: Ps({
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
    opacity: x,
    ff: w,
    fz: y,
    fw: v,
    lts: S,
    ta: C,
    lh: P,
    fs: E,
    tt: $,
    td: N,
    w: T,
    miw: M,
    maw: _,
    h: O,
    mih: L,
    mah: I,
    bgsz: F,
    bgp: A,
    bgr: H,
    bga: K,
    pos: ne,
    top: ye,
    left: ue,
    bottom: Ae,
    right: ve,
    inset: re,
    display: we,
    hiddenFrom: Me,
    visibleFrom: Ce,
    lightHidden: Ee,
    darkHidden: _e
  }), rest: ce };
}
const nb = {
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
function rb(e, t) {
  const n = bo({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : n.variable ? `var(${n.variable})` : n.color;
}
function ob(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? D(e) : e;
}
function ib(e) {
  return e;
}
function sb(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : e;
}
function ab(e) {
  return typeof e == "number" ? D(e) : e;
}
function cb(e, t) {
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
const Ei = {
  color: rb,
  fontSize: ob,
  spacing: cb,
  identity: ib,
  size: ab,
  lineHeight: sb
};
function Hc(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function lb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(Hc(o)) - Number(Hc(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function ub(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function db(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function fb(e) {
  return typeof e == "object" && e !== null ? gt(e).filter((t) => t !== "base") : [];
}
function pb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function mb({
  styleProps: e,
  data: t,
  theme: n
}) {
  return lb(
    gt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = db(e[o]);
        if (!ub(e[o]))
          return s.forEach((l) => {
            r.inlineStyles[l] = Ei[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = fb(e[o]);
        return s.forEach((l) => {
          a && (r.styles[l] = Ei[i.type](a, n)), c.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: Ei[i.type](
                pb(e[o], u),
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
function gb() {
  return `__m__-${Cu().replace(/:/g, "")}`;
}
function Ns(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Ns(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function nd(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function hb(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[nd(n)] = e[n]), t;
  }, {});
}
function rd(e) {
  return e ? typeof e == "string" ? { [nd(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...rd(n) }),
    {}
  ) : hb(e) : null;
}
function ts(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ts(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function bb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = ts(t, e), i = ts(n, e);
  return { ...o, ...i, ...r };
}
const od = ie(
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
    const m = wt(), g = e || "div", { styleProps: h, rest: x } = ur(f), w = gb(), y = mb({
      styleProps: h,
      theme: m,
      data: nb
    }), v = {
      ref: p,
      style: bb({
        theme: m,
        style: t,
        vars: n,
        styleProps: y.inlineStyles
      }),
      className: vt(r, {
        [w]: y.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Fu(s) ? void 0 : s || void 0,
      ...rd(i),
      ...x
    };
    return /* @__PURE__ */ b.createElement(b.Fragment, null, y.hasResponsiveStyles && /* @__PURE__ */ b.createElement(
      tb,
      {
        selector: `.${w}`,
        styles: y.styles,
        media: y.media
      }
    ), typeof d == "function" ? d(v) : /* @__PURE__ */ b.createElement(g, { ...v }));
  }
);
od.displayName = "@mantine/core/Box";
const W = od;
function id(e) {
  return e;
}
function U(e) {
  const t = ie(e);
  return t.extend = id, t;
}
function qt(e) {
  const t = ie(e);
  return t.extend = id, t;
}
const yb = Gt({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function dr() {
  return dt(yb);
}
function vb(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Pi(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const Fn = typeof window < "u" && window.requestAnimationFrame;
function wb({
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
  }, [a, c] = q(r ? {} : s), l = (m) => {
    xs(() => c(m));
  }, u = (m) => {
    l((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || vb(m)}ms ${t}`
    };
  }
  Ft(() => {
    typeof Fn == "function" && Fn(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), Fn(() => {
        const m = Pi(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Pi(o);
      u({ ...d(m), willChange: "height", height: m }), Fn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Pi(o);
        g === a.height ? l({}) : u({ height: g }), n();
      } else
        a.height === i && (l(s), n());
  };
  function p({ style: m = {}, refKey: g = "ref", ...h } = {}) {
    const x = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: qu(o, x),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const xb = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, sd = U((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = j("Collapse", xb, e), u = wt(), d = Ku(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = wb({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ b.createElement(W, { ...l }, n) : null : /* @__PURE__ */ b.createElement(W, { ...m({ style: Ns(s, u), ref: t, ...l }) }, /* @__PURE__ */ b.createElement(
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
sd.displayName = "@mantine/core/Collapse";
const [Sb, tt] = Ut(
  "ScrollArea.Root component was not found in tree"
);
function yn(e, t) {
  const n = en(t);
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
const Cb = b.forwardRef((e, t) => {
  const { style: n, ...r } = e, o = tt(), [i, s] = b.useState(0), [a, c] = b.useState(0), l = !!(i && a);
  return yn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), yn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ b.createElement("div", { ...r, ref: t, style: { ...n, width: i, height: a } }) : null;
}), Eb = b.forwardRef(
  (e, t) => {
    const n = tt(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ b.createElement(Cb, { ...e, ref: t }) : null;
  }
), Pb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, ad = ie((e, t) => {
  const n = j("ScrollAreaRoot", Pb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, c] = q(null), [l, u] = q(null), [d, f] = q(null), [p, m] = q(null), [g, h] = q(null), [x, w] = q(0), [y, v] = q(0), [S, C] = q(!1), [P, E] = q(!1), $ = Oe(t, (N) => c(N));
  return /* @__PURE__ */ b.createElement(
    Sb,
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
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: C,
        scrollbarY: g,
        onScrollbarYChange: h,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: w,
        onCornerHeightChange: v
      }
    },
    /* @__PURE__ */ b.createElement(
      W,
      {
        ...s,
        ref: $,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${x}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${y}px`
        }
      }
    )
  );
});
ad.displayName = "@mantine/core/ScrollAreaRoot";
function cd(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function yo(e) {
  const t = cd(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function ld(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Db(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Uc(e, t, n = "ltr") {
  const r = yo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = Db(e, c);
  return ld([0, s], [0, a])(l);
}
function Rb(e, t, n, r = "ltr") {
  const o = yo(n), i = o / 2, s = t || i, a = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return ld([c, l], d)(e);
}
function ud(e, t) {
  return e > 0 && e < t;
}
function qr(e) {
  return e ? parseInt(e, 10) : 0;
}
function nn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [Ib, dd] = Ut(
  "ScrollAreaScrollbar was not found in tree"
), fd = ie((e, t) => {
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
  } = e, f = tt(), [p, m] = b.useState(null), g = Oe(t, (E) => m(E)), h = b.useRef(null), x = b.useRef(""), { viewport: w } = f, y = n.content - n.viewport, v = en(l), S = en(a), C = ho(u, 10), P = (E) => {
    if (h.current) {
      const $ = E.clientX - h.current.left, N = E.clientY - h.current.top;
      c({ x: $, y: N });
    }
  };
  return G(() => {
    const E = ($) => {
      const N = $.target;
      (p == null ? void 0 : p.contains(N)) && v($, y);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [w, p, y, v]), G(S, [n, S]), yn(p, C), yn(f.content, C), /* @__PURE__ */ b.createElement(
    Ib,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: en(o),
        onThumbPointerUp: en(i),
        onThumbPositionChange: S,
        onThumbPointerDown: en(s)
      }
    },
    /* @__PURE__ */ b.createElement(
      "div",
      {
        ...d,
        ref: g,
        style: { position: "absolute", ...d.style },
        onPointerDown: nn(e.onPointerDown, (E) => {
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(E));
        }),
        onPointerMove: nn(e.onPointerMove, P),
        onPointerUp: nn(e.onPointerUp, (E) => {
          const $ = E.target;
          $.hasPointerCapture(E.pointerId) && $.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = x.current, h.current = null;
        })
      }
    )
  );
}), Ob = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = q(), l = V(null), u = Oe(t, l, s.onScrollbarXChange);
    return G(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      fd,
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
            e.onWheelScroll(p), ud(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: qr(a.paddingLeft),
              paddingEnd: qr(a.paddingRight)
            }
          });
        }
      }
    );
  }
), Ab = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = b.useState(), l = V(null), u = Oe(t, l, s.onScrollbarYChange);
    return G(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      fd,
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
            e.onWheelScroll(p), ud(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: qr(a.paddingTop),
              paddingEnd: qr(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), Ts = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = dr(), i = tt(), s = V(null), a = V(0), [c, l] = q({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = cd(c.viewport, c.content), d = {
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
  }, f = (p, m) => Rb(p, a.current, c, m);
  return n === "horizontal" ? /* @__PURE__ */ b.createElement(
    Ob,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = Uc(p, c, o);
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
  ) : n === "vertical" ? /* @__PURE__ */ b.createElement(
    Ab,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = Uc(p, c);
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
}), pd = ie(
  (e, t) => {
    const n = tt(), { forceMount: r, ...o } = e, [i, s] = q(!1), a = e.orientation === "horizontal", c = ho(() => {
      if (n.viewport) {
        const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return yn(n.viewport, c), yn(n.content, c), r || i ? /* @__PURE__ */ b.createElement(
      Ts,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), $b = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), [i, s] = q(!1);
    return G(() => {
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
    }, [o.scrollArea, o.scrollHideDelay]), n || i ? /* @__PURE__ */ b.createElement(
      pd,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Nb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), i = e.orientation === "horizontal", [s, a] = q("hidden"), c = ho(() => a("idle"), 100);
    return G(() => {
      if (s === "idle") {
        const l = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [s, o.scrollHideDelay]), G(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let d = l[u];
        const f = () => {
          const p = l[u];
          d !== p && (a("scrolling"), c()), d = p;
        };
        return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
      }
    }, [o.viewport, i, c]), n || s !== "hidden" ? /* @__PURE__ */ b.createElement(
      Ts,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: nn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: nn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), qc = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return b.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ b.createElement($b, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ b.createElement(Nb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ b.createElement(pd, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ b.createElement(Ts, { ...r, ref: t }) : null;
  }
);
function Tb(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Lb = ie((e, t) => {
  const { style: n, ...r } = e, o = tt(), i = dd(), { onThumbPositionChange: s } = i, a = Oe(t, (u) => i.onThumbChange(u)), c = V(), l = ho(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return G(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = Tb(u, s);
          c.current = f, s();
        }
      };
      return s(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, l, s]), /* @__PURE__ */ b.createElement(
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
      onPointerDownCapture: nn(e.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), p = u.clientX - f.left, m = u.clientY - f.top;
        i.onThumbPointerDown({ x: p, y: m });
      }),
      onPointerUp: nn(e.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Kc = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = dd();
    return n || o.hasThumb ? /* @__PURE__ */ b.createElement(Lb, { ref: t, ...r }) : null;
  }
), md = ie(
  ({ children: e, style: t, ...n }, r) => {
    const o = tt(), i = Oe(r, o.onViewportChange);
    return /* @__PURE__ */ b.createElement(
      W,
      {
        ...n,
        ref: i,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        }
      },
      /* @__PURE__ */ b.createElement("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange }, e)
    );
  }
);
md.displayName = "@mantine/core/ScrollAreaViewport";
var Ls = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const gd = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Mb = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), fr = U((e, t) => {
  const n = j("ScrollArea", gd, e), {
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
    scrollbars: x,
    ...w
  } = n, [y, v] = q(!1), S = Q({
    name: "ScrollArea",
    props: n,
    classes: Ls,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Mb
  });
  return /* @__PURE__ */ b.createElement(
    ad,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: x,
      ...S("root"),
      ...w
    },
    /* @__PURE__ */ b.createElement(
      md,
      {
        ...f,
        ...S("viewport"),
        ref: p,
        "data-offset-scrollbars": h === !0 ? "xy" : h || void 0,
        "data-scrollbars": x || void 0,
        onScroll: typeof m == "function" ? ({ currentTarget: C }) => m({
          x: C.scrollLeft,
          y: C.scrollTop
        }) : void 0
      },
      g
    ),
    (x === "xy" || x === "x") && /* @__PURE__ */ b.createElement(
      qc,
      {
        ...S("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(Kc, { ...S("thumb") })
    ),
    (x === "xy" || x === "y") && /* @__PURE__ */ b.createElement(
      qc,
      {
        ...S("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(Kc, { ...S("thumb") })
    ),
    /* @__PURE__ */ b.createElement(
      Eb,
      {
        ...S("corner"),
        "data-hovered": y || void 0,
        "data-hidden": u === "never" || void 0
      }
    )
  );
});
fr.displayName = "@mantine/core/ScrollArea";
const Ms = U((e, t) => {
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
    vars: x,
    ...w
  } = j("ScrollAreaAutosize", gd, e);
  return /* @__PURE__ */ b.createElement(W, { ...w, ref: t, style: [{ display: "flex" }, h] }, /* @__PURE__ */ b.createElement(W, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ b.createElement(
    fr,
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
      vars: x,
      scrollbars: g
    },
    n
  )));
});
fr.classes = Ls;
Ms.displayName = "@mantine/core/ScrollAreaAutosize";
Ms.classes = Ls;
fr.Autosize = Ms;
var hd = { root: "m-87cf2631" };
const _b = {
  __staticSelector: "UnstyledButton"
}, ln = qt(
  (e, t) => {
    const n = j("UnstyledButton", _b, e), {
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
      classes: hd,
      className: r,
      style: l,
      classNames: a,
      styles: c,
      unstyled: s
    });
    return /* @__PURE__ */ b.createElement(
      W,
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
ln.classes = hd;
ln.displayName = "@mantine/core/UnstyledButton";
const lt = Math.min, xe = Math.max, Kr = Math.round, Pr = Math.floor, Bt = (e) => ({
  x: e,
  y: e
}), kb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fb = {
  start: "end",
  end: "start"
};
function ns(e, t, n) {
  return xe(e, lt(t, n));
}
function Pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ut(e) {
  return e.split("-")[0];
}
function On(e) {
  return e.split("-")[1];
}
function _s(e) {
  return e === "x" ? "y" : "x";
}
function ks(e) {
  return e === "y" ? "height" : "width";
}
function un(e) {
  return ["top", "bottom"].includes(ut(e)) ? "y" : "x";
}
function Fs(e) {
  return _s(un(e));
}
function Bb(e, t, n) {
  n === void 0 && (n = !1);
  const r = On(e), o = Fs(e), i = ks(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Yr(s)), [s, Yr(s)];
}
function jb(e) {
  const t = Yr(e);
  return [rs(e), t, rs(t)];
}
function rs(e) {
  return e.replace(/start|end/g, (t) => Fb[t]);
}
function Vb(e, t, n) {
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
function zb(e, t, n, r) {
  const o = On(e);
  let i = Vb(ut(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(rs)))), i;
}
function Yr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => kb[t]);
}
function Gb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Bs(e) {
  return typeof e != "number" ? Gb(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Yc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = un(t), s = Fs(t), a = ks(s), c = ut(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (On(t)) {
    case "start":
      p[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Wb = async (e, t, n) => {
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
  } = Yc(l, r, c), f = r, p = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: h,
      fn: x
    } = a[g], {
      x: w,
      y,
      data: v,
      reset: S
    } = await x({
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
    if (u = w ?? u, d = y ?? d, p = {
      ...p,
      [h]: {
        ...p[h],
        ...v
      }
    }, S && m <= 50) {
      m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: u,
        y: d
      } = Yc(l, f, c)), g = -1;
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
async function js(e, t) {
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
  } = Pt(t, e), m = Bs(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], x = vn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), w = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), v = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = vn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: y,
    strategy: c
  }) : w);
  return {
    top: (x.top - S.top + m.top) / v.y,
    bottom: (S.bottom - x.bottom + m.bottom) / v.y,
    left: (x.left - S.left + m.left) / v.x,
    right: (S.right - x.right + m.right) / v.x
  };
}
const Xc = (e) => ({
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
    } = Pt(e, t) || {};
    if (l == null)
      return {};
    const d = Bs(u), f = {
      x: n,
      y: r
    }, p = Fs(o), m = ks(p), g = await s.getDimensions(l), h = p === "y", x = h ? "top" : "left", w = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", v = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = C ? C[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[y] || i.floating[m]);
    const E = v / 2 - S / 2, $ = P / 2 - g[m] / 2 - 1, N = lt(d[x], $), T = lt(d[w], $), M = N, _ = P - g[m] - T, O = P / 2 - g[m] / 2 + E, L = ns(M, O, _), I = !c.arrow && On(o) != null && O != L && i.reference[m] / 2 - (O < M ? N : T) - g[m] / 2 < 0, F = I ? O < M ? O - M : O - _ : 0;
    return {
      [p]: f[p] + F,
      data: {
        [p]: L,
        centerOffset: O - L - F,
        ...I && {
          alignmentOffset: F
        }
      },
      reset: I
    };
  }
}), bd = function(e) {
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
      } = Pt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const x = ut(o), w = ut(a) === a, y = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), v = f || (w || !g ? [Yr(a)] : jb(a));
      !f && m !== "none" && v.push(...zb(a, g, m, y));
      const S = [a, ...v], C = await js(t, h), P = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(C[x]), d) {
        const M = Bb(o, s, y);
        P.push(C[M[0]], C[M[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((M) => M <= 0)) {
        var $, N;
        const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, _ = S[M];
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
        let O = (N = E.filter((L) => L.overflows[0] <= 0).sort((L, I) => L.overflows[1] - I.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!O)
          switch (p) {
            case "bestFit": {
              var T;
              const L = (T = E.map((I) => [I.placement, I.overflows.filter((F) => F > 0).reduce((F, A) => F + A, 0)]).sort((I, F) => I[1] - F[1])[0]) == null ? void 0 : T[0];
              L && (O = L);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function yd(e) {
  const t = lt(...e.map((i) => i.left)), n = lt(...e.map((i) => i.top)), r = xe(...e.map((i) => i.right)), o = xe(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function Hb(e) {
  const t = e.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => vn(yd(o)));
}
const vd = function(e) {
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
      } = Pt(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = Hb(u), f = vn(yd(u)), p = Bs(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((h) => c > h.left - p.left && c < h.right + p.right && l > h.top - p.top && l < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (un(n) === "y") {
            const N = d[0], T = d[d.length - 1], M = ut(n) === "top", _ = N.top, O = T.bottom, L = M ? N.left : T.left, I = M ? N.right : T.right, F = I - L, A = O - _;
            return {
              top: _,
              bottom: O,
              left: L,
              right: I,
              width: F,
              height: A,
              x: L,
              y: _
            };
          }
          const h = ut(n) === "left", x = xe(...d.map((N) => N.right)), w = lt(...d.map((N) => N.left)), y = d.filter((N) => h ? N.left === w : N.right === x), v = y[0].top, S = y[y.length - 1].bottom, C = w, P = x, E = P - C, $ = S - v;
          return {
            top: v,
            bottom: S,
            left: C,
            right: P,
            width: E,
            height: $,
            x: C,
            y: v
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
async function Ub(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = ut(n), a = On(n), c = un(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, d = Pt(t, e);
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
const wd = function(e) {
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
      } = t, c = await Ub(t, e);
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
}, Vs = function(e) {
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
              x,
              y: w
            } = h;
            return {
              x,
              y: w
            };
          }
        },
        ...c
      } = Pt(e, t), l = {
        x: n,
        y: r
      }, u = await js(t, c), d = un(ut(o)), f = _s(d);
      let p = l[f], m = l[d];
      if (i) {
        const h = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", w = p + u[h], y = p - u[x];
        p = ns(w, p, y);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", w = m + u[h], y = m - u[x];
        m = ns(w, m, y);
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
}, qb = function(e) {
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
      } = Pt(e, t), u = {
        x: n,
        y: r
      }, d = un(o), f = _s(d);
      let p = u[f], m = u[d];
      const g = Pt(a, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const y = f === "y" ? "height" : "width", v = i.reference[f] - i.floating[y] + h.mainAxis, S = i.reference[f] + i.reference[y] - h.mainAxis;
        p < v ? p = v : p > S && (p = S);
      }
      if (l) {
        var x, w;
        const y = f === "y" ? "width" : "height", v = ["top", "left"].includes(ut(o)), S = i.reference[d] - i.floating[y] + (v && ((x = s.offset) == null ? void 0 : x[d]) || 0) + (v ? 0 : h.crossAxis), C = i.reference[d] + i.reference[y] + (v ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (v ? h.crossAxis : 0);
        m < S ? m = S : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, Kb = function(e) {
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
      } = Pt(e, t), c = await js(t, a), l = ut(n), u = On(n), d = un(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const h = p - c[m], x = f - c[g], w = !t.middlewareData.shift;
      let y = h, v = x;
      if (d) {
        const C = f - c.left - c.right;
        v = u || w ? lt(x, C) : C;
      } else {
        const C = p - c.top - c.bottom;
        y = u || w ? lt(h, C) : C;
      }
      if (w && !u) {
        const C = xe(c.left, 0), P = xe(c.right, 0), E = xe(c.top, 0), $ = xe(c.bottom, 0);
        d ? v = f - 2 * (C !== 0 || P !== 0 ? C + P : xe(c.left, c.right)) : y = p - 2 * (E !== 0 || $ !== 0 ? E + $ : xe(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: v,
        availableHeight: y
      });
      const S = await o.getDimensions(i.floating);
      return f !== S.width || p !== S.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function jt(e) {
  return xd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ot(e) {
  var t;
  return (t = (xd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function xd(e) {
  return e instanceof Node || e instanceof Ve(e).Node;
}
function Dt(e) {
  return e instanceof Element || e instanceof Ve(e).Element;
}
function yt(e) {
  return e instanceof HTMLElement || e instanceof Ve(e).HTMLElement;
}
function Jc(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function pr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ze(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Yb(e) {
  return ["table", "td", "th"].includes(jt(e));
}
function zs(e) {
  const t = Gs(), n = Ze(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Xb(e) {
  let t = wn(e);
  for (; yt(t) && !vo(t); ) {
    if (zs(t))
      return t;
    t = wn(t);
  }
  return null;
}
function Gs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function vo(e) {
  return ["html", "body", "#document"].includes(jt(e));
}
function Ze(e) {
  return Ve(e).getComputedStyle(e);
}
function wo(e) {
  return Dt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function wn(e) {
  if (jt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jc(e) && e.host || // Fallback.
    Ot(e)
  );
  return Jc(t) ? t.host : t;
}
function Sd(e) {
  const t = wn(e);
  return vo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : yt(t) && pr(t) ? t : Sd(t);
}
function xt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Sd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ve(o);
  return i ? t.concat(s, s.visualViewport || [], pr(o) ? o : [], s.frameElement && n ? xt(s.frameElement) : []) : t.concat(o, xt(o, [], n));
}
function Cd(e) {
  const t = Ze(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = yt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Kr(n) !== i || Kr(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ws(e) {
  return Dt(e) ? e : e.contextElement;
}
function hn(e) {
  const t = Ws(e);
  if (!yt(t))
    return Bt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Cd(t);
  let s = (i ? Kr(n.width) : n.width) / r, a = (i ? Kr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Jb = /* @__PURE__ */ Bt(0);
function Ed(e) {
  const t = Ve(e);
  return !Gs() || !t.visualViewport ? Jb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ve(e) ? !1 : t;
}
function on(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ws(e);
  let s = Bt(1);
  t && (r ? Dt(r) && (s = hn(r)) : s = hn(e));
  const a = Qb(i, n, r) ? Ed(i) : Bt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Ve(i), p = r && Dt(r) ? Ve(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = hn(m), h = m.getBoundingClientRect(), x = Ze(m), w = h.left + (m.clientLeft + parseFloat(x.paddingLeft)) * g.x, y = h.top + (m.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, d *= g.y, c += w, l += y, m = Ve(m).frameElement;
    }
  }
  return vn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Zb(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = yt(n), i = Ot(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Bt(1);
  const c = Bt(0);
  if ((o || !o && r !== "fixed") && ((jt(n) !== "body" || pr(i)) && (s = wo(n)), yt(n))) {
    const l = on(n);
    a = hn(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + c.x,
    y: t.y * a.y - s.scrollTop * a.y + c.y
  };
}
function ey(e) {
  return Array.from(e.getClientRects());
}
function Pd(e) {
  return on(Ot(e)).left + wo(e).scrollLeft;
}
function ty(e) {
  const t = Ot(e), n = wo(e), r = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Pd(e);
  const a = -n.scrollTop;
  return Ze(r).direction === "rtl" && (s += xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ny(e, t) {
  const n = Ve(e), r = Ot(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Gs();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function ry(e, t) {
  const n = on(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = yt(e) ? hn(e) : Bt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Qc(e, t, n) {
  let r;
  if (t === "viewport")
    r = ny(e, n);
  else if (t === "document")
    r = ty(Ot(e));
  else if (Dt(t))
    r = ry(t, n);
  else {
    const o = Ed(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vn(r);
}
function Dd(e, t) {
  const n = wn(e);
  return n === t || !Dt(n) || vo(n) ? !1 : Ze(n).position === "fixed" || Dd(n, t);
}
function oy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xt(e, [], !1).filter((a) => Dt(a) && jt(a) !== "body"), o = null;
  const i = Ze(e).position === "fixed";
  let s = i ? wn(e) : e;
  for (; Dt(s) && !vo(s); ) {
    const a = Ze(s), c = zs(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || pr(s) && !c && Dd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = wn(s);
  }
  return t.set(e, r), r;
}
function iy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? oy(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, u) => {
    const d = Qc(t, u, o);
    return l.top = xe(d.top, l.top), l.right = lt(d.right, l.right), l.bottom = lt(d.bottom, l.bottom), l.left = xe(d.left, l.left), l;
  }, Qc(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function sy(e) {
  return Cd(e);
}
function ay(e, t, n) {
  const r = yt(t), o = Ot(t), i = n === "fixed", s = on(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Bt(0);
  if (r || !r && !i)
    if ((jt(t) !== "body" || pr(o)) && (a = wo(t)), r) {
      const l = on(t, !0, i, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Pd(o));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Zc(e, t) {
  return !yt(e) || Ze(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Rd(e, t) {
  const n = Ve(e);
  if (!yt(e))
    return n;
  let r = Zc(e, t);
  for (; r && Yb(r) && Ze(r).position === "static"; )
    r = Zc(r, t);
  return r && (jt(r) === "html" || jt(r) === "body" && Ze(r).position === "static" && !zs(r)) ? n : r || Xb(e) || n;
}
const cy = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Rd, i = this.getDimensions;
  return {
    reference: ay(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function ly(e) {
  return Ze(e).direction === "rtl";
}
const uy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zb,
  getDocumentElement: Ot,
  getClippingRect: iy,
  getOffsetParent: Rd,
  getElementRects: cy,
  getClientRects: ey,
  getDimensions: sy,
  getScale: hn,
  isElement: Dt,
  isRTL: ly
};
function dy(e, t) {
  let n = null, r;
  const o = Ot(e);
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
    const p = Pr(u), m = Pr(o.clientWidth - (l + d)), g = Pr(o.clientHeight - (u + f)), h = Pr(l), w = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: xe(0, lt(1, c)) || 1
    };
    let y = !0;
    function v(S) {
      const C = S[0].intersectionRatio;
      if (C !== c) {
        if (!y)
          return s();
        C ? s(!1, C) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(v, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function fy(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Ws(e), u = o || i ? [...l ? xt(l) : [], ...xt(t)] : [];
  u.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), i && x.addEventListener("resize", n);
  });
  const d = l && a ? dy(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, g = c ? on(e) : null;
  c && h();
  function h() {
    const x = on(e);
    g && (x.x !== g.x || x.y !== g.y || x.width !== g.width || x.height !== g.height) && n(), g = x, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const py = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: uy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Wb(e, t, {
    ...o,
    platform: i
  });
}, Id = (e) => {
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
      return r && t(r) ? r.current != null ? Xc({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Xc({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Tr = typeof document < "u" ? fo : G;
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
function Od(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function el(e, t) {
  const n = Od(e);
  return Math.round(t * n) / n;
}
function tl(e) {
  const t = R.useRef(e);
  return Tr(() => {
    t.current = e;
  }), t;
}
function my(e) {
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
  } = e, [u, d] = R.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = R.useState(r);
  Xr(f, r) || p(r);
  const [m, g] = R.useState(null), [h, x] = R.useState(null), w = R.useCallback((I) => {
    I != C.current && (C.current = I, g(I));
  }, [g]), y = R.useCallback((I) => {
    I !== P.current && (P.current = I, x(I));
  }, [x]), v = i || m, S = s || h, C = R.useRef(null), P = R.useRef(null), E = R.useRef(u), $ = tl(c), N = tl(o), T = R.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: f
    };
    N.current && (I.platform = N.current), py(C.current, P.current, I).then((F) => {
      const A = {
        ...F,
        isPositioned: !0
      };
      M.current && !Xr(E.current, A) && (E.current = A, Nm.flushSync(() => {
        d(A);
      }));
    });
  }, [f, t, n, N]);
  Tr(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((I) => ({
      ...I,
      isPositioned: !1
    })));
  }, [l]);
  const M = R.useRef(!1);
  Tr(() => (M.current = !0, () => {
    M.current = !1;
  }), []), Tr(() => {
    if (v && (C.current = v), S && (P.current = S), v && S) {
      if ($.current)
        return $.current(v, S, T);
      T();
    }
  }, [v, S, T, $]);
  const _ = R.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: w,
    setFloating: y
  }), [w, y]), O = R.useMemo(() => ({
    reference: v,
    floating: S
  }), [v, S]), L = R.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return I;
    const F = el(O.floating, u.x), A = el(O.floating, u.y);
    return a ? {
      ...I,
      transform: "translate(" + F + "px, " + A + "px)",
      ...Od(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: A
    };
  }, [n, a, O.floating, u.x, u.y]);
  return R.useMemo(() => ({
    ...u,
    update: T,
    refs: _,
    elements: O,
    floatingStyles: L
  }), [u, T, _, O, L]);
}
var St = typeof document < "u" ? fo : G;
let Di = !1, gy = 0;
const nl = () => "floating-ui-" + gy++;
function hy() {
  const [e, t] = R.useState(() => Di ? nl() : void 0);
  return St(() => {
    e == null && t(nl());
  }, []), R.useEffect(() => {
    Di || (Di = !0);
  }, []), e;
}
const by = R[/* @__PURE__ */ "useId".toString()], Ad = by || hy;
function yy() {
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
const vy = /* @__PURE__ */ R.createContext(null), wy = /* @__PURE__ */ R.createContext(null), $d = () => {
  var e;
  return ((e = R.useContext(vy)) == null ? void 0 : e.id) || null;
}, Hs = () => R.useContext(wy);
function Tt(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function xy() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Sy() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function xo(e) {
  return Tt(e).defaultView || window;
}
function mt(e) {
  return e ? e instanceof Element || e instanceof xo(e).Element : !1;
}
function Nd(e) {
  return e ? e instanceof HTMLElement || e instanceof xo(e).HTMLElement : !1;
}
function Cy(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = xo(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ey(e) {
  if (e.mozInputSource === 0 && e.isTrusted)
    return !0;
  const t = /Android/i;
  return (t.test(xy()) || t.test(Sy())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Py(e) {
  return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Td(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function Dy(e) {
  return "nativeEvent" in e;
}
function os(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Cy(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Ld(e) {
  return "data-floating-ui-" + e;
}
function rl(e) {
  const t = V(e);
  return St(() => {
    t.current = e;
  }), t;
}
const ol = /* @__PURE__ */ Ld("safe-polygon");
function Lr(e, t, n) {
  return n && !Td(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Ry(e, t) {
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
  } = t, g = Hs(), h = $d(), x = rl(d), w = rl(u), y = R.useRef(), v = R.useRef(), S = R.useRef(), C = R.useRef(), P = R.useRef(!0), E = R.useRef(!1), $ = R.useRef(() => {
  }), N = R.useCallback(() => {
    var O;
    const L = (O = o.current.openEvent) == null ? void 0 : O.type;
    return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
  }, [o]);
  R.useEffect(() => {
    if (!l)
      return;
    function O() {
      clearTimeout(v.current), clearTimeout(C.current), P.current = !0;
    }
    return i.on("dismiss", O), () => {
      i.off("dismiss", O);
    };
  }, [l, i]), R.useEffect(() => {
    if (!l || !x.current || !n)
      return;
    function O(I) {
      N() && r(!1, I);
    }
    const L = Tt(a).documentElement;
    return L.addEventListener("mouseleave", O), () => {
      L.removeEventListener("mouseleave", O);
    };
  }, [a, n, r, l, x, o, N]);
  const T = R.useCallback(function(O, L) {
    L === void 0 && (L = !0);
    const I = Lr(w.current, "close", y.current);
    I && !S.current ? (clearTimeout(v.current), v.current = setTimeout(() => r(!1, O), I)) : L && (clearTimeout(v.current), r(!1, O));
  }, [w, r]), M = R.useCallback(() => {
    $.current(), S.current = void 0;
  }, []), _ = R.useCallback(() => {
    if (E.current) {
      const O = Tt(c.floating.current).body;
      O.style.pointerEvents = "", O.removeAttribute(ol), E.current = !1;
    }
  }, [c]);
  return R.useEffect(() => {
    if (!l)
      return;
    function O() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function L(A) {
      if (clearTimeout(v.current), P.current = !1, f && !Td(y.current) || p > 0 && Lr(w.current, "open") === 0)
        return;
      const H = Lr(w.current, "open", y.current);
      H ? v.current = setTimeout(() => {
        r(!0, A);
      }, H) : r(!0, A);
    }
    function I(A) {
      if (O())
        return;
      $.current();
      const H = Tt(a);
      if (clearTimeout(C.current), x.current) {
        n || clearTimeout(v.current), S.current = x.current({
          ...e,
          tree: g,
          x: A.clientX,
          y: A.clientY,
          onClose() {
            _(), M(), T(A);
          }
        });
        const ne = S.current;
        H.addEventListener("mousemove", ne), $.current = () => {
          H.removeEventListener("mousemove", ne);
        };
        return;
      }
      (y.current === "touch" ? !os(a, A.relatedTarget) : !0) && T(A);
    }
    function F(A) {
      O() || x.current == null || x.current({
        ...e,
        tree: g,
        x: A.clientX,
        y: A.clientY,
        onClose() {
          _(), M(), T(A);
        }
      })(A);
    }
    if (mt(s)) {
      const A = s;
      return n && A.addEventListener("mouseleave", F), a == null || a.addEventListener("mouseleave", F), m && A.addEventListener("mousemove", L, {
        once: !0
      }), A.addEventListener("mouseenter", L), A.addEventListener("mouseleave", I), () => {
        n && A.removeEventListener("mouseleave", F), a == null || a.removeEventListener("mouseleave", F), m && A.removeEventListener("mousemove", L), A.removeEventListener("mouseenter", L), A.removeEventListener("mouseleave", I);
      };
    }
  }, [s, a, l, e, f, p, m, T, M, _, r, n, g, w, x, o]), St(() => {
    var O;
    if (l && n && (O = x.current) != null && O.__options.blockPointerEvents && N()) {
      const F = Tt(a).body;
      if (F.setAttribute(ol, ""), F.style.pointerEvents = "none", E.current = !0, mt(s) && a) {
        var L, I;
        const A = s, H = g == null || (L = g.nodesRef.current.find((K) => K.id === h)) == null || (I = L.context) == null ? void 0 : I.elements.floating;
        return H && (H.style.pointerEvents = ""), A.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          A.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, h, a, s, g, x, o, N]), St(() => {
    n || (y.current = void 0, M(), _());
  }, [n, M, _]), R.useEffect(() => () => {
    M(), clearTimeout(v.current), clearTimeout(C.current), _();
  }, [l, M, _]), R.useMemo(() => {
    if (!l)
      return {};
    function O(L) {
      y.current = L.pointerType;
    }
    return {
      reference: {
        onPointerDown: O,
        onPointerEnter: O,
        onMouseMove(L) {
          n || p === 0 || (clearTimeout(C.current), C.current = setTimeout(() => {
            P.current || r(!0, L.nativeEvent);
          }, p));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(v.current);
        },
        onMouseLeave(L) {
          i.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: !1
            }
          }), T(L.nativeEvent, !1);
        }
      }
    };
  }, [i, l, p, n, r, T]);
}
const Md = /* @__PURE__ */ R.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), _d = () => R.useContext(Md), Iy = (e) => {
  let {
    children: t,
    delay: n,
    timeoutMs: r = 0
  } = e;
  const [o, i] = R.useReducer((c, l) => ({
    ...c,
    ...l
  }), {
    delay: n,
    timeoutMs: r,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), s = R.useRef(null), a = R.useCallback((c) => {
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
  }, [o.currentId]), /* @__PURE__ */ R.createElement(Md.Provider, {
    value: R.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, Oy = (e, t) => {
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
  } = _d();
  St(() => {
    i && (c({
      delay: {
        open: 1,
        close: Lr(a, "close")
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
function Ay(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Ri(e, t) {
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
function $y(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Ny = R[/* @__PURE__ */ "useInsertionEffect".toString()], Ty = Ny || ((e) => e());
function Mr(e) {
  const t = R.useRef(() => {
  });
  return Ty(() => {
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
const Ly = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, My = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, _y = (e) => {
  var t, n;
  return {
    escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function ky(e, t) {
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
    bubbles: x
  } = t, w = Hs(), y = $d() != null, v = Mr(typeof f == "function" ? f : () => !1), S = typeof f == "function" ? v : f, C = R.useRef(!1), {
    escapeKeyBubbles: P,
    outsidePressBubbles: E
  } = _y(x), $ = Mr((T) => {
    if (!n || !u || !d || T.key !== "Escape")
      return;
    const M = w ? Ri(w.nodesRef.current, i) : [];
    if (!P && (T.stopPropagation(), M.length > 0)) {
      let _ = !0;
      if (M.forEach((O) => {
        var L;
        if ((L = O.context) != null && L.open && !O.context.dataRef.current.__escapeKeyBubbles) {
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
    }), r(!1, Dy(T) ? T.nativeEvent : T);
  }), N = Mr((T) => {
    const M = C.current;
    if (C.current = !1, M || typeof S == "function" && !S(T))
      return;
    const _ = $y(T);
    if (Nd(_) && c) {
      const I = _.clientWidth > 0 && _.scrollWidth > _.clientWidth, F = _.clientHeight > 0 && _.scrollHeight > _.clientHeight;
      let A = F && T.offsetX > _.clientWidth;
      if (F && xo(c).getComputedStyle(_).direction === "rtl" && (A = T.offsetX <= _.offsetWidth - _.clientWidth), A || I && T.offsetY > _.clientHeight)
        return;
    }
    const O = w && Ri(w.nodesRef.current, i).some((I) => {
      var F;
      return _r(T, (F = I.context) == null ? void 0 : F.elements.floating);
    });
    if (_r(T, c) || _r(T, a) || O)
      return;
    const L = w ? Ri(w.nodesRef.current, i) : [];
    if (L.length > 0) {
      let I = !0;
      if (L.forEach((F) => {
        var A;
        if ((A = F.context) != null && A.open && !F.context.dataRef.current.__outsidePressBubbles) {
          I = !1;
          return;
        }
      }), !I)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: y ? {
          preventScroll: !0
        } : Ey(T) || Py(T)
      }
    }), r(!1, T);
  });
  return R.useEffect(() => {
    if (!n || !u)
      return;
    l.current.__escapeKeyBubbles = P, l.current.__outsidePressBubbles = E;
    function T(O) {
      r(!1, O);
    }
    const M = Tt(c);
    d && M.addEventListener("keydown", $), S && M.addEventListener(p, N);
    let _ = [];
    return h && (mt(a) && (_ = xt(a)), mt(c) && (_ = _.concat(xt(c))), !mt(s) && s && s.contextElement && (_ = _.concat(xt(s.contextElement)))), _ = _.filter((O) => {
      var L;
      return O !== ((L = M.defaultView) == null ? void 0 : L.visualViewport);
    }), _.forEach((O) => {
      O.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      d && M.removeEventListener("keydown", $), S && M.removeEventListener(p, N), _.forEach((O) => {
        O.removeEventListener("scroll", T);
      });
    };
  }, [l, c, a, s, d, S, p, n, r, h, u, P, E, $, N]), R.useEffect(() => {
    C.current = !1;
  }, [S, p]), R.useMemo(() => u ? {
    reference: {
      onKeyDown: $,
      [Ly[g]]: (T) => {
        m && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, T.nativeEvent));
      }
    },
    floating: {
      onKeyDown: $,
      [My[p]]: () => {
        C.current = !0;
      }
    }
  } : {}, [u, o, m, p, g, r, $]);
}
function Us(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = R.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, c = my(e), l = Hs(), u = Mr((v, S) => {
    v && (f.current.openEvent = S), r == null || r(v, S);
  }), d = R.useRef(null), f = R.useRef({}), p = R.useState(() => yy())[0], m = Ad(), g = R.useCallback((v) => {
    const S = mt(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c.refs.setReference(S);
  }, [c.refs]), h = R.useCallback((v) => {
    (mt(v) || v === null) && (d.current = v, s(v)), (mt(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !mt(v)) && c.refs.setReference(v);
  }, [c.refs]), x = R.useMemo(() => ({
    ...c.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [c.refs, h, g]), w = R.useMemo(() => ({
    ...c.elements,
    domReference: a
  }), [c.elements, a]), y = R.useMemo(() => ({
    ...c,
    refs: x,
    elements: w,
    dataRef: f,
    nodeId: o,
    floatingId: m,
    events: p,
    open: n,
    onOpenChange: u
  }), [c, o, m, p, n, u, x, w]);
  return St(() => {
    const v = l == null ? void 0 : l.nodesRef.current.find((S) => S.id === o);
    v && (v.context = y);
  }), R.useMemo(() => ({
    ...c,
    context: y,
    refs: x,
    elements: w
  }), [c, x, w, y]);
}
function Fy(e, t) {
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
  } = t, d = R.useRef(""), f = R.useRef(!1), p = R.useRef();
  return R.useEffect(() => {
    if (!l)
      return;
    const g = Tt(a).defaultView || window;
    function h() {
      !n && Nd(c) && c === Ay(Tt(c)) && (f.current = !0);
    }
    return g.addEventListener("blur", h), () => {
      g.removeEventListener("blur", h);
    };
  }, [a, c, n, l]), R.useEffect(() => {
    if (!l)
      return;
    function m(g) {
      (g.type === "referencePress" || g.type === "escapeKey") && (f.current = !0);
    }
    return i.on("dismiss", m), () => {
      i.off("dismiss", m);
    };
  }, [i, l]), R.useEffect(() => () => {
    clearTimeout(p.current);
  }, []), R.useMemo(() => l ? {
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
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && _r(o.current.openEvent, c) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = mt(g) && g.hasAttribute(Ld("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          os(s.floating.current, g) || os(c, g) || h || r(!1, m.nativeEvent);
        });
      }
    }
  } : {}, [l, u, c, s, o, r]);
}
function Ii(e, t, n) {
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
function By(e) {
  e === void 0 && (e = []);
  const t = e, n = R.useCallback(
    (i) => Ii(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = R.useCallback(
    (i) => Ii(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = R.useCallback(
    (i) => Ii(i, e, "item"),
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
function jy(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, s = Ad();
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
function kd(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function il(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function sl(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const Vy = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function zy({
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
    [Vy[c]]: D(r)
  }, d = D(-t / 2);
  return c === "left" ? {
    ...u,
    ...il(l, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...il(l, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...sl(l, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...sl(l, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const qs = ie(
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
    const { dir: d } = dr();
    return i ? /* @__PURE__ */ b.createElement(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...zy({
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
qs.displayName = "@mantine/core/FloatingArrow";
const [Gy, Fd] = Ut(
  "Popover component was not found in the tree"
);
function Bd({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = hh(t), o = Oe(r, e == null ? void 0 : e.ref);
  return Ht(e) ? cn(e, { [n]: o }) : e;
}
Bd.displayName = "@mantine/core/FocusTrap";
function Wy(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const Hy = {}, jd = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", Hy, e), [i, s] = q(!1), a = V(null);
  return lr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : Wy(o), Uu(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : Tm(/* @__PURE__ */ b.createElement(b.Fragment, null, n), a.current);
});
jd.displayName = "@mantine/core/Portal";
function So({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ b.createElement(jd, { ...n }, t) : /* @__PURE__ */ b.createElement(b.Fragment, null, t);
}
So.displayName = "@mantine/core/OptionalPortal";
const Bn = (e) => ({
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
    ...Bn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Bn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Bn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Bn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Bn("top"),
    common: { transformOrigin: "top right" }
  }
}, al = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Uy({
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
    ...Dr[e][al[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[al[t]]
  };
}
function qy({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a
}) {
  const c = wt(), l = Ku(), u = c.respectReducedMotion ? l : !1, [d, f] = q(u ? 0 : e), [p, m] = q(r ? "entered" : "exited"), g = V(-1), h = (x) => {
    const w = x ? o : i, y = x ? s : a;
    m(x ? "pre-entering" : "pre-exiting"), window.clearTimeout(g.current);
    const v = u ? 0 : x ? e : t;
    if (f(v), v === 0)
      typeof w == "function" && w(), typeof y == "function" && y(), m(x ? "entered" : "exited");
    else {
      const S = window.setTimeout(() => {
        typeof w == "function" && w(), m(x ? "entering" : "exiting");
      }, 10);
      g.current = window.setTimeout(() => {
        window.clearTimeout(S), typeof y == "function" && y(), m(x ? "entered" : "exited");
      }, v);
    }
  };
  return Ft(() => {
    h(r);
  }, [r]), G(() => () => window.clearTimeout(g.current), []), {
    transitionDuration: d,
    transitionStatus: p,
    transitionTimingFunction: n || "ease"
  };
}
function Ks({
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
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = qy({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: a,
    onEntered: c,
    onEnter: l,
    onExited: u
  });
  return d === 0 ? o ? /* @__PURE__ */ b.createElement(b.Fragment, null, i({})) : e ? i({ display: "none" }) : null : f === "exited" ? e ? i({ display: "none" }) : null : /* @__PURE__ */ b.createElement(b.Fragment, null, i(
    Uy({
      transition: t,
      duration: d,
      state: f,
      timingFunction: p
    })
  ));
}
Ks.displayName = "@mantine/core/Transition";
var Vd = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const Ky = {}, Ys = U((e, t) => {
  var h, x, w, y;
  const n = j("PopoverDropdown", Ky, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = n, f = Fd(), p = lh({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Oe(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ b.createElement(So, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ b.createElement(
    Ks,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((x = f.transitionProps) == null ? void 0 : x.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((w = f.transitionProps) == null ? void 0 : w.exitDuration) == "number" ? f.transitionProps.exitDuration : (y = f.transitionProps) == null ? void 0 : y.duration
    },
    (v) => /* @__PURE__ */ b.createElement(Bd, { active: f.trapFocus }, /* @__PURE__ */ b.createElement(
      W,
      {
        ...m,
        ...d,
        variant: c,
        ref: g,
        onKeyDownCapture: eh(f.onClose, {
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
              ...v,
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
      /* @__PURE__ */ b.createElement(
        qs,
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
Ys.classes = Vd;
Ys.displayName = "@mantine/core/PopoverDropdown";
const Yy = {
  refProp: "ref",
  popupType: "dialog"
}, zd = U((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    Yy,
    e
  );
  if (!Ht(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Fd(), c = Oe(a.reference, n.ref, t), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return cn(n, {
    ...s,
    ...l,
    ...a.targetProps,
    className: vt(a.targetProps.className, s.className, n.props.className),
    [r]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
zd.displayName = "@mantine/core/PopoverTarget";
function Gd({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = q(0);
  G(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return fy(
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
  ]), Ft(() => {
    t.update();
  }, r), Ft(() => {
    i((s) => s + 1);
  }, [e]);
}
function Xy(e, t) {
  var r, o, i, s;
  const n = [wd(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(Vs({ limiter: qb() })), (o = e.middlewares) != null && o.flip && n.push(bd()), (i = e.middlewares) != null && i.inline && n.push(vd()), n.push(Id({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    Kb({
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
function Jy(e) {
  const [t, n] = Et({
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
  }, i = Us({
    placement: e.position,
    middleware: Xy(e, () => i)
  });
  return Gd({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), Ft(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), Ft(() => {
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
const Qy = {
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
  zIndex: Rs("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Zy = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : et(t),
    "--popover-shadow": nh(n)
  }
});
function ft(e) {
  var At, Ke, Pe, me, $t, Yt;
  const t = j("Popover", Qy, e), {
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
    classNames: x,
    styles: w,
    closeOnClickOutside: y,
    withinPortal: v,
    portalProps: S,
    closeOnEscape: C,
    clickOutsideEvents: P,
    trapFocus: E,
    onClose: $,
    onOpen: N,
    onChange: T,
    zIndex: M,
    radius: _,
    shadow: O,
    id: L,
    defaultOpened: I,
    __staticSelector: F,
    withRoles: A,
    disabled: H,
    returnFocus: K,
    variant: ne,
    keepMounted: ye,
    vars: ue,
    ...Ae
  } = t, ve = Q({
    name: F,
    props: t,
    classes: Vd,
    classNames: x,
    styles: w,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: Zy
  }), re = V(null), [we, Me] = q(null), [Ce, Ee] = q(null), { dir: _e } = dr(), ce = It(L), X = Jy({
    middlewares: u,
    width: l,
    position: kd(_e, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: re,
    arrowOffset: p,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: I,
    onChange: T,
    onOpen: N,
    onClose: $
  });
  ih(() => y && X.onClose(), P, [
    we,
    Ce
  ]);
  const dn = Z(
    (ae) => {
      Me(ae), X.floating.refs.setReference(ae);
    },
    [X.floating.refs.setReference]
  ), qe = Z(
    (ae) => {
      Ee(ae), X.floating.refs.setFloating(ae);
    },
    [X.floating.refs.setFloating]
  );
  return /* @__PURE__ */ b.createElement(
    Gy,
    {
      value: {
        returnFocus: K,
        disabled: H,
        controlled: X.controlled,
        reference: dn,
        floating: qe,
        x: X.floating.x,
        y: X.floating.y,
        arrowX: (Pe = (Ke = (At = X.floating) == null ? void 0 : At.middlewareData) == null ? void 0 : Ke.arrow) == null ? void 0 : Pe.x,
        arrowY: (Yt = ($t = (me = X.floating) == null ? void 0 : me.middlewareData) == null ? void 0 : $t.arrow) == null ? void 0 : Yt.y,
        opened: X.opened,
        arrowRef: re,
        transitionProps: c,
        width: l,
        withArrow: d,
        arrowSize: f,
        arrowOffset: p,
        arrowRadius: m,
        arrowPosition: g,
        placement: X.floating.placement,
        trapFocus: E,
        withinPortal: v,
        portalProps: S,
        zIndex: M,
        radius: _,
        shadow: O,
        closeOnEscape: C,
        onClose: X.onClose,
        onToggle: X.onToggle,
        getTargetId: () => `${ce}-target`,
        getDropdownId: () => `${ce}-dropdown`,
        withRoles: A,
        targetProps: Ae,
        __staticSelector: F,
        classNames: x,
        styles: w,
        unstyled: h,
        variant: ne,
        keepMounted: ye,
        getStyles: ve
      }
    },
    n
  );
}
ft.Target = zd;
ft.Dropdown = Ys;
ft.displayName = "@mantine/core/Popover";
ft.extend = (e) => e;
var st = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const ev = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(W, { component: "span", className: vt(st.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: st.bar }), /* @__PURE__ */ b.createElement("span", { className: st.bar }), /* @__PURE__ */ b.createElement("span", { className: st.bar }))), tv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(W, { component: "span", className: vt(st.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: st.dot }), /* @__PURE__ */ b.createElement("span", { className: st.dot }), /* @__PURE__ */ b.createElement("span", { className: st.dot }))), nv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(W, { component: "span", className: vt(st.ovalLoader, e), ...t, ref: n })), Wd = {
  bars: ev,
  oval: nv,
  dots: tv
}, rv = {
  loaders: Wd,
  type: "oval"
}, ov = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": se(t, "loader-size"),
    "--loader-color": n ? bt(n, e) : void 0
  }
}), mr = U((e, t) => {
  const n = j("Loader", rv, e), {
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
    varsResolver: ov
  });
  return m ? /* @__PURE__ */ b.createElement(W, { ...h("root"), ref: t, ...g }, m) : /* @__PURE__ */ b.createElement(
    W,
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
mr.defaultLoaders = Wd;
mr.classes = st;
mr.displayName = "@mantine/core/Loader";
var Co = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const cl = {
  orientation: "horizontal"
}, iv = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), Xs = U((e, t) => {
  const n = j("ActionIconGroup", cl, e), {
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
  } = j("ActionIconGroup", cl, e), p = Q({
    name: "ActionIconGroup",
    props: n,
    classes: Co,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: iv,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(
    W,
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
Xs.classes = Co;
Xs.displayName = "@mantine/core/ActionIconGroup";
const sv = {}, av = (e, { size: t, radius: n, variant: r, gradient: o, color: i }) => {
  const s = e.variantColorResolver({
    color: i || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled"
  });
  return {
    root: {
      "--ai-size": se(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : et(n),
      "--ai-bg": i || r ? s.background : void 0,
      "--ai-hover": i || r ? s.hover : void 0,
      "--ai-hover-color": i || r ? s.hoverColor : void 0,
      "--ai-color": i || r ? s.color : void 0,
      "--ai-bd": i || r ? s.border : void 0
    }
  };
}, qn = qt((e, t) => {
  const n = j("ActionIcon", sv, e), {
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
    children: x,
    disabled: w,
    "data-disabled": y,
    ...v
  } = n, S = Q({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: c,
    classes: Co,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: av
  });
  return /* @__PURE__ */ b.createElement(
    ln,
    {
      ...S("root", { active: !w && !l && !y }),
      ...v,
      unstyled: o,
      variant: i,
      size: d,
      disabled: w || l,
      ref: t,
      mod: { loading: l, disabled: w || y }
    },
    l ? /* @__PURE__ */ b.createElement(
      mr,
      {
        ...S("loader"),
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)",
        ...u
      }
    ) : x
  );
});
qn.classes = Co;
qn.displayName = "@mantine/core/ActionIcon";
qn.Group = Xs;
const Hd = ie(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) => /* @__PURE__ */ b.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n
    },
    /* @__PURE__ */ b.createElement(
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
Hd.displayName = "@mantine/core/CloseIcon";
var Ud = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const cv = {
  variant: "subtle"
}, lv = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": se(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : et(n),
    "--cb-icon-size": D(r)
  }
}), Eo = qt((e, t) => {
  const n = j("CloseButton", cv, e), {
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
    classes: Ud,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: lv
  });
  return /* @__PURE__ */ b.createElement(
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
    /* @__PURE__ */ b.createElement(Hd, null),
    o
  );
});
Eo.classes = Ud;
Eo.displayName = "@mantine/core/CloseButton";
function uv(e) {
  return $m.toArray(e).filter(Boolean);
}
var qd = { root: "m-4081bf90" };
const dv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, fv = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": ju(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), xn = U((e, t) => {
  const n = j("Group", dv, e), {
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
    __size: x,
    ...w
  } = n, y = uv(c), v = y.length, S = ju(l ?? "md"), P = { childWidth: `calc(${100 / v}% - (${S} - ${S} / ${v}))` }, E = Q({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: i,
    classes: qd,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: fv
  });
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...E("root"),
      ref: t,
      variant: h,
      mod: { grow: p },
      size: x,
      ...w
    },
    y
  );
});
xn.classes = qd;
xn.displayName = "@mantine/core/Group";
const [pv, An] = Ds({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var nt = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const ll = {}, mv = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${je(t)} - ${D(2)})`
  }
}), Po = U((e, t) => {
  const n = j("InputDescription", ll, e), {
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
  } = j("InputDescription", ll, n), m = An(), g = Q({
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
    varsResolver: mv
  }), h = d && (m == null ? void 0 : m.getStyles) || g;
  return /* @__PURE__ */ b.createElement(
    W,
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
Po.classes = nt;
Po.displayName = "@mantine/core/InputDescription";
const gv = {}, hv = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${je(t)} - ${D(2)})`
  }
}), Do = U((e, t) => {
  const n = j("InputError", gv, e), {
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
    varsResolver: hv
  }), g = An(), h = d && (g == null ? void 0 : g.getStyles) || m;
  return /* @__PURE__ */ b.createElement(
    W,
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
const ul = {
  labelElement: "label"
}, bv = (e, { size: t }) => ({
  label: {
    "--input-label-size": je(t),
    "--input-asterisk-color": void 0
  }
}), Ro = U((e, t) => {
  const n = j("InputLabel", ul, e), {
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
    ...x
  } = j("InputLabel", ul, n), w = Q({
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
    varsResolver: bv
  }), y = An(), v = (y == null ? void 0 : y.getStyles) || w;
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...v("label"),
      component: l,
      variant: h,
      size: u,
      ref: t,
      htmlFor: l === "label" ? f : void 0,
      mod: { required: d },
      onMouseDown: (S) => {
        p == null || p(S), !S.defaultPrevented && S.detail > 1 && S.preventDefault();
      },
      ...x
    },
    m,
    d && /* @__PURE__ */ b.createElement("span", { ...v("required"), "aria-hidden": !0 }, " *")
  );
});
Ro.classes = nt;
Ro.displayName = "@mantine/core/InputLabel";
const dl = {}, Js = U((e, t) => {
  const n = j("InputPlaceholder", dl, e), {
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
  } = j("InputPlaceholder", dl, n), p = Q({
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
  return /* @__PURE__ */ b.createElement(
    W,
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
Js.classes = nt;
Js.displayName = "@mantine/core/InputPlaceholder";
function yv(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((c) => c === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const vv = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, wv = (e, { size: t }) => ({
  label: {
    "--input-label-size": je(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${je(t)} - ${D(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${je(t)} - ${D(2)})`
  }
}), Qs = U((e, t) => {
  const n = j("InputWrapper", vv, e), {
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
    labelProps: x,
    descriptionProps: w,
    errorProps: y,
    labelElement: v,
    children: S,
    withAsterisk: C,
    id: P,
    required: E,
    __stylesApiProps: $,
    ...N
  } = n, T = Q({
    name: ["InputWrapper", d],
    props: $ || n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: wv
  }), M = {
    size: l,
    variant: u,
    __staticSelector: d
  }, _ = It(P), O = typeof C == "boolean" ? C : E, L = (y == null ? void 0 : y.id) || `${_}-error`, I = (w == null ? void 0 : w.id) || `${_}-description`, F = _, A = !!g && typeof g != "boolean", H = !!h, K = `${A ? L : ""} ${H ? I : ""}`, ne = K.trim().length > 0 ? K.trim() : void 0, ye = (x == null ? void 0 : x.id) || `${_}-label`, ue = m && /* @__PURE__ */ b.createElement(
    Ro,
    {
      key: "label",
      labelElement: v,
      id: ye,
      htmlFor: F,
      required: O,
      ...M,
      ...x
    },
    m
  ), Ae = H && /* @__PURE__ */ b.createElement(
    Po,
    {
      key: "description",
      ...w,
      ...M,
      size: (w == null ? void 0 : w.size) || M.size,
      id: (w == null ? void 0 : w.id) || I
    },
    h
  ), ve = /* @__PURE__ */ b.createElement(b.Fragment, { key: "input" }, f(S)), re = A && /* @__PURE__ */ b.createElement(
    Do,
    {
      ...y,
      ...M,
      size: (y == null ? void 0 : y.size) || M.size,
      key: "error",
      id: (y == null ? void 0 : y.id) || L
    },
    g
  ), we = p.map((Me) => {
    switch (Me) {
      case "label":
        return ue;
      case "input":
        return ve;
      case "description":
        return Ae;
      case "error":
        return re;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ b.createElement(
    pv,
    {
      value: {
        getStyles: T,
        describedBy: ne,
        inputId: F,
        labelId: ye,
        ...yv(p, { hasDescription: H, hasError: A })
      }
    },
    /* @__PURE__ */ b.createElement(
      W,
      {
        ref: t,
        variant: u,
        size: l,
        mod: { error: !!g },
        ...T("root"),
        ...N
      },
      we
    )
  );
});
Qs.classes = nt;
Qs.displayName = "@mantine/core/InputWrapper";
const xv = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Sv = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": se(t.size, "input-height"),
    "--input-fz": je(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : et(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? D(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? D(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? se(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), Se = qt((e, t) => {
  const n = j("Input", xv, e), {
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
    leftSectionWidth: x,
    rightSection: w,
    rightSectionProps: y,
    rightSectionWidth: v,
    rightSectionPointerEvents: S,
    leftSectionPointerEvents: C,
    variant: P,
    vars: E,
    pointer: $,
    multiline: N,
    radius: T,
    id: M,
    withAria: _,
    withErrorStyles: O,
    ...L
  } = n, { styleProps: I, rest: F } = ur(L), A = An(), H = { offsetBottom: A == null ? void 0 : A.offsetBottom, offsetTop: A == null ? void 0 : A.offsetTop }, K = Q({
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
    varsResolver: Sv
  }), ne = _ ? {
    required: c,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": A == null ? void 0 : A.describedBy,
    id: (A == null ? void 0 : A.inputId) || M
  } : {};
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...K("wrapper"),
      ...I,
      ...f,
      mod: {
        error: !!p && O,
        pointer: $,
        disabled: m,
        multiline: N,
        "data-with-right-section": !!w,
        "data-with-left-section": !!g
      },
      variant: P,
      size: d
    },
    g && /* @__PURE__ */ b.createElement(
      "div",
      {
        ...h,
        "data-position": "left",
        ...K("section", {
          className: h == null ? void 0 : h.className,
          style: h == null ? void 0 : h.style
        })
      },
      g
    ),
    /* @__PURE__ */ b.createElement(
      W,
      {
        component: "input",
        ...F,
        ...ne,
        ref: t,
        required: c,
        mod: { disabled: m, error: !!p && O },
        variant: P,
        ...K("input")
      }
    ),
    w && /* @__PURE__ */ b.createElement(
      "div",
      {
        ...y,
        "data-position": "right",
        ...K("section", {
          className: y == null ? void 0 : y.className,
          style: y == null ? void 0 : y.style
        })
      },
      w
    )
  );
});
Se.classes = nt;
Se.Wrapper = Qs;
Se.Label = Ro;
Se.Error = Do;
Se.Description = Po;
Se.Placeholder = Js;
Se.displayName = "@mantine/core/Input";
function Cv(e, t, n) {
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
    wrapperProps: x,
    id: w,
    size: y,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    vars: $,
    ...N
  } = r, { styleProps: T, rest: M } = ur(N), _ = {
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
    size: y,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    id: w,
    ...x
  };
  return {
    ...M,
    classNames: c,
    styles: l,
    unstyled: d,
    wrapperProps: { ..._, ...T },
    inputProps: {
      required: a,
      classNames: c,
      styles: l,
      unstyled: d,
      size: y,
      __staticSelector: f,
      __stylesApiProps: p || r,
      error: s,
      variant: E,
      id: w
    }
  };
}
const Ev = {
  __staticSelector: "InputBase",
  withAria: !0
}, Kt = qt((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = Cv("InputBase", Ev, e);
  return /* @__PURE__ */ b.createElement(Se.Wrapper, { ...r }, /* @__PURE__ */ b.createElement(Se, { ...n, ...o, ref: t }));
});
Kt.classes = { ...Se.classes, ...Se.Wrapper.classes };
Kt.displayName = "@mantine/core/InputBase";
const [Pv, Zs] = Ut(
  "Accordion component was not found in the tree"
);
function ea({ style: e, size: t = 16, ...n }) {
  return /* @__PURE__ */ b.createElement(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: D(t), height: D(t), display: "block" },
      ...n
    },
    /* @__PURE__ */ b.createElement(
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
ea.displayName = "@mantine/core/AccordionChevron";
const [Dv, Kd] = Ut("Accordion.Item component was not found in the tree");
var gr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const Rv = {}, ta = U((e, t) => {
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
  } = j("AccordionControl", Rv, e), { value: m } = Kd(), g = Zs(), h = g.isItemActive(m), x = typeof g.order == "number", w = `h${g.order}`, y = /* @__PURE__ */ b.createElement(
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
      onClick: (v) => {
        l == null || l(v), g.onChange(m);
      },
      type: "button",
      disabled: f,
      "aria-expanded": h,
      "aria-controls": g.getRegionId(m),
      id: g.getControlId(m),
      onKeyDown: Bu({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: g.loop,
        orientation: "vertical",
        onKeyDown: u
      })
    },
    /* @__PURE__ */ b.createElement(
      W,
      {
        component: "span",
        mod: { rotate: !g.disableChevronRotation && h, position: g.chevronPosition },
        ...g.getStyles("chevron", { classNames: n, styles: i })
      },
      a || g.chevron
    ),
    /* @__PURE__ */ b.createElement("span", { ...g.getStyles("label", { classNames: n, styles: i }) }, d),
    c && /* @__PURE__ */ b.createElement(
      W,
      {
        component: "span",
        mod: { "chevron-position": g.chevronPosition },
        ...g.getStyles("icon", { classNames: n, styles: i })
      },
      c
    )
  );
  return x ? /* @__PURE__ */ b.createElement(w, { ...g.getStyles("itemTitle", { classNames: n, styles: i }) }, y) : y;
});
ta.displayName = "@mantine/core/AccordionControl";
ta.classes = gr;
const Iv = {}, na = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...c } = j(
    "AccordionItem",
    Iv,
    e
  ), l = Zs();
  return /* @__PURE__ */ b.createElement(Dv, { value: { value: a } }, /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      mod: { active: l.isItemActive(a) },
      ...l.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: l.variant }),
      ...c
    }
  ));
});
na.displayName = "@mantine/core/AccordionItem";
na.classes = gr;
const Ov = {}, ra = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...c } = j(
    "AccordionPanel",
    Ov,
    e
  ), { value: l } = Kd(), u = Zs();
  return /* @__PURE__ */ b.createElement(
    sd,
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
    /* @__PURE__ */ b.createElement("div", { ...u.getStyles("content", { classNames: n, styles: i }) }, a)
  );
});
ra.displayName = "@mantine/core/AccordionPanel";
ra.classes = gr;
const Av = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ b.createElement(ea, null)
}, $v = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : et(r)
  }
});
function oe(e) {
  const t = j("Accordion", Av, e), {
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
    chevronPosition: x,
    chevronSize: w,
    order: y,
    chevron: v,
    variant: S,
    radius: C,
    ...P
  } = t, E = It(p), [$, N] = Et({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), T = (O) => Array.isArray($) ? $.includes(O) : O === $, M = (O) => {
    const L = Array.isArray($) ? $.includes(O) ? $.filter((I) => I !== O) : [...$, O] : O === $ ? null : O;
    N(L);
  }, _ = Q({
    name: "Accordion",
    classes: gr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: $v
  });
  return /* @__PURE__ */ b.createElement(
    Pv,
    {
      value: {
        isItemActive: T,
        onChange: M,
        getControlId: Wr(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Wr(
          `${E}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: h,
        chevronPosition: x,
        order: y,
        chevron: v,
        loop: m,
        getStyles: _,
        variant: S,
        unstyled: s
      }
    },
    /* @__PURE__ */ b.createElement(W, { ..._("root"), id: E, ...P, variant: S, "data-accordion": !0 }, c)
  );
}
const Nv = (e) => e;
oe.extend = Nv;
oe.classes = gr;
oe.displayName = "@mantine/core/Accordion";
oe.Item = na;
oe.Panel = ra;
oe.Control = ta;
oe.Chevron = ea;
var Yd = { root: "m-b6d8b162" };
function Tv(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const Lv = {
  inherit: !1
}, Mv = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": je(o),
    "--text-lh": th(o),
    "--text-gradient": t === "gradient" ? Zi(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? bt(i, e) : void 0
  }
}), Je = qt((e, t) => {
  const n = j("Text", Lv, e), {
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
    mod: x,
    size: w,
    ...y
  } = n, v = Q({
    name: ["Text", l],
    props: n,
    classes: Yd,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: Mv
  });
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...v("root", { focusable: !0 }),
      ref: t,
      component: c ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": Tv(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s
        },
        x
      ],
      size: w,
      ...y
    }
  );
});
Je.classes = Yd;
Je.displayName = "@mantine/core/Text";
function Xd(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => Xd(t))
  } : e;
}
function Jd(e) {
  return e ? e.map(Xd) : [];
}
function oa(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...oa(n.items) } : (t[n.value] = n, t), {});
}
var Ie = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const _v = {
  error: null
}, kv = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": se(t, "combobox-chevron-size")
  }
}), ia = U((e, t) => {
  const n = j("ComboboxChevron", _v, e), { size: r, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, ...d } = n, f = Q({
    name: "ComboboxChevron",
    classes: Ie,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: kv,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ b.createElement(
    W,
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
    /* @__PURE__ */ b.createElement(
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
ia.classes = Ie;
ia.displayName = "@mantine/core/ComboboxChevron";
const [Fv, rt] = Ut(
  "Combobox component was not found in tree"
), Qd = ie(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ b.createElement(
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
Qd.displayName = "@mantine/core/ComboboxClearButton";
const Bv = {}, sa = U((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    Bv,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
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
sa.classes = Ie;
sa.displayName = "@mantine/core/ComboboxDropdown";
const jv = {
  refProp: "ref"
}, Zd = U((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", jv, e);
  if (rt(), !Ht(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ b.createElement(ft.Target, { ref: t, refProp: r }, n);
});
Zd.displayName = "@mantine/core/ComboboxDropdownTarget";
const Vv = {}, aa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    Vv,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...c.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
aa.classes = Ie;
aa.displayName = "@mantine/core/ComboboxEmpty";
function ca({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o
}) {
  const i = rt(), [s, a] = q(null), c = (u) => {
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
const zv = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, ef = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxEventsTarget", zv, e);
  if (!Ht(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = ca({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  });
  return cn(n, {
    ...u,
    ...c,
    [r]: Oe(t, l.store.targetRef, n == null ? void 0 : n.ref)
  });
});
ef.displayName = "@mantine/core/ComboboxEventsTarget";
const Gv = {}, la = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    Gv,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...c.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
la.classes = Ie;
la.displayName = "@mantine/core/ComboboxFooter";
const Wv = {}, ua = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: c, ...l } = j(
    "ComboboxGroup",
    Wv,
    e
  ), u = rt();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: i }),
      ...l
    },
    c && /* @__PURE__ */ b.createElement("div", { ...u.getStyles("groupLabel", { classNames: n, styles: i }) }, c),
    a
  );
});
ua.classes = Ie;
ua.displayName = "@mantine/core/ComboboxGroup";
const Hv = {}, da = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    Hv,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...c.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
da.classes = Ie;
da.displayName = "@mantine/core/ComboboxHeader";
const Uv = {}, fa = U((e, t) => {
  const n = j("ComboboxOption", Uv, e), {
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
  } = n, h = rt(), x = Cu(), w = l || x;
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...h.getStyles("option", { className: o, classNames: r, styles: s, style: i }),
      ...g,
      ref: t,
      id: w,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": p, "combobox-selected": m }
      ],
      role: "option",
      onClick: (y) => {
        var v;
        p ? y.preventDefault() : ((v = h.onOptionSubmit) == null || v.call(h, n.value, n), c == null || c(y));
      },
      onMouseDown: (y) => {
        y.preventDefault(), d == null || d(y);
      },
      onMouseOver: (y) => {
        h.resetSelectionOnOptionHover && h.store.resetSelectedOption(), f == null || f(y);
      }
    }
  );
});
fa.classes = Ie;
fa.displayName = "@mantine/core/ComboboxOption";
const qv = {}, pa = U((e, t) => {
  const n = j("ComboboxOptions", qv, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = n, d = rt(), f = It(a);
  return G(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ b.createElement(
    W,
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
pa.classes = Ie;
pa.displayName = "@mantine/core/ComboboxOptions";
const Kv = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ma = U((e, t) => {
  const n = j("ComboboxSearch", Kv, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = n, f = rt(), p = f.getStyles("search"), m = ca({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c
  });
  return /* @__PURE__ */ b.createElement(
    Se,
    {
      ref: Oe(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
ma.classes = Ie;
ma.displayName = "@mantine/core/ComboboxSearch";
const Yv = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, tf = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxTarget", Yv, e);
  if (!Ht(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = ca({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  }), d = cn(n, {
    ...u,
    ...c
  });
  return /* @__PURE__ */ b.createElement(ft.Target, { ref: Oe(t, l.store.targetRef) }, d);
});
tf.displayName = "@mantine/core/ComboboxTarget";
function Xv(e, t, n) {
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
function Jv(e, t, n) {
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
function Qv(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function ga({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, c] = Et({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), l = V(null), u = V(-1), d = V(null), f = V(null), p = V(-1), m = V(-1), g = V(-1), h = Z(
    (I = "unknown") => {
      a || (c(!0), o == null || o(I));
    },
    [c, o, a]
  ), x = Z(
    (I = "unknown") => {
      a && (c(!1), r == null || r(I));
    },
    [c, r, a]
  ), w = Z(
    (I = "unknown") => {
      a ? x(I) : h(I);
    },
    [x, h, a]
  ), y = Z(() => {
    const I = document.querySelector(`#${l.current} [data-combobox-selected]`);
    I == null || I.removeAttribute("data-combobox-selected"), I == null || I.removeAttribute("aria-selected");
  }, []), v = Z(
    (I) => {
      const F = document.getElementById(l.current), A = F == null ? void 0 : F.querySelectorAll("[data-combobox-option]");
      if (!A)
        return null;
      const H = I >= A.length ? 0 : I < 0 ? A.length - 1 : I;
      return u.current = H, A != null && A[H] && !A[H].hasAttribute("data-combobox-disabled") ? (y(), A[H].setAttribute("data-combobox-selected", "true"), A[H].setAttribute("aria-selected", "true"), A[H].scrollIntoView({ block: "nearest", behavior: s }), A[H].id) : null;
    },
    [s, y]
  ), S = Z(() => {
    const I = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (I) {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), A = Array.from(F).findIndex((H) => H === I);
      return v(A);
    }
    return v(0);
  }, [v]), C = Z(
    () => v(
      Jv(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), P = Z(
    () => v(
      Xv(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), E = Z(
    () => v(
      Qv(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), $ = Z((I = "selected") => {
    g.current = window.setTimeout(() => {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), A = Array.from(F).findIndex(
        (H) => H.hasAttribute(`data-combobox-${I}`)
      );
      u.current = A;
    }, 0);
  }, []), N = Z(() => {
    u.current = -1, y();
  }, [y]), T = Z(() => {
    const I = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), F = I == null ? void 0 : I[u.current];
    F == null || F.click();
  }, []), M = Z((I) => {
    l.current = I;
  }, []), _ = Z(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), O = Z(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), L = Z(() => u.current, []);
  return G(
    () => () => {
      window.clearTimeout(p.current), window.clearTimeout(m.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: h,
    closeDropdown: x,
    toggleDropdown: w,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: L,
    selectOption: v,
    selectFirstOption: E,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: P,
    resetSelectedOption: N,
    updateSelectedOptionIndex: $,
    listId: l.current,
    setListId: M,
    clickSelectedOption: T,
    searchRef: d,
    focusSearchInput: _,
    targetRef: f,
    focusTarget: O
  };
}
const Zv = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, ew = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": je(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : D(n),
    "--combobox-option-fz": je(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  }
});
function J(e) {
  const t = j("Combobox", Zv, e), {
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
  } = t, g = ga(), h = s || g, x = Q({
    name: f || "Combobox",
    classes: Ie,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: ew
  });
  return /* @__PURE__ */ b.createElement(
    Fv,
    {
      value: {
        getStyles: x,
        store: h,
        onOptionSubmit: c,
        size: l,
        resetSelectionOnOptionHover: d,
        readOnly: p
      }
    },
    /* @__PURE__ */ b.createElement(
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
const tw = (e) => e;
J.extend = tw;
J.classes = Ie;
J.displayName = "@mantine/core/Combobox";
J.Target = tf;
J.Dropdown = sa;
J.Options = pa;
J.Option = fa;
J.Search = ma;
J.Empty = aa;
J.Chevron = ia;
J.Footer = la;
J.Header = da;
J.EventsTarget = ef;
J.DropdownTarget = Zd;
J.Group = ua;
J.ClearButton = Qd;
var nf = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const nw = nf, rf = ie(
  ({
    __staticSelector: e,
    __stylesApiProps: t,
    className: n,
    classNames: r,
    styles: o,
    unstyled: i,
    children: s,
    label: a,
    description: c,
    id: l,
    disabled: u,
    error: d,
    size: f,
    labelPosition: p = "left",
    variant: m,
    style: g,
    vars: h,
    ...x
  }, w) => {
    const y = Q({
      name: e,
      props: t,
      className: n,
      style: g,
      classes: nf,
      classNames: r,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ b.createElement(
      W,
      {
        ...y("root"),
        ref: w,
        __vars: {
          "--label-fz": je(f),
          "--label-lh": se(f, "label-lh")
        },
        mod: { "label-position": p },
        variant: m,
        size: f,
        ...x
      },
      /* @__PURE__ */ b.createElement("div", { ...y("body") }, s, /* @__PURE__ */ b.createElement("div", { ...y("labelWrapper"), "data-disabled": u || void 0 }, a && /* @__PURE__ */ b.createElement("label", { ...y("label"), "data-disabled": u || void 0, htmlFor: l }, a), c && /* @__PURE__ */ b.createElement(Se.Description, { size: f, __inheritStyles: !1, ...y("description") }, c), d && d !== "boolean" && /* @__PURE__ */ b.createElement(Se.Error, { size: f, __inheritStyles: !1, ...y("error") }, d)))
    );
  }
);
rf.displayName = "@mantine/core/InlineInput";
const of = Gt(null), rw = of.Provider, ow = () => dt(of);
function iw({ children: e, role: t }) {
  const n = An();
  return n ? /* @__PURE__ */ b.createElement("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy }, e) : /* @__PURE__ */ b.createElement(b.Fragment, null, e);
}
const sw = {}, ha = U((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: i, wrapperProps: s, children: a, ...c } = j(
    "CheckboxGroup",
    sw,
    e
  ), [l, u] = Et({
    value: n,
    defaultValue: r,
    finalValue: [],
    onChange: o
  }), d = (f) => {
    const p = f.currentTarget.value;
    u(
      l.includes(p) ? l.filter((m) => m !== p) : [...l, p]
    );
  };
  return /* @__PURE__ */ b.createElement(rw, { value: { value: l, onChange: d, size: i } }, /* @__PURE__ */ b.createElement(
    Se.Wrapper,
    {
      size: i,
      ref: t,
      ...s,
      ...c,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ b.createElement(iw, { role: "group" }, a)
  ));
});
ha.classes = Se.Wrapper.classes;
ha.displayName = "@mantine/core/CheckboxGroup";
function sf({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: D(e), height: D(e), ...t } : t;
  return /* @__PURE__ */ b.createElement(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
      "aria-hidden": !0,
      ...n
    },
    /* @__PURE__ */ b.createElement(
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
function aw({ indeterminate: e, ...t }) {
  return e ? /* @__PURE__ */ b.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...t
    },
    /* @__PURE__ */ b.createElement("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
  ) : /* @__PURE__ */ b.createElement(sf, { ...t });
}
var af = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const cw = {
  labelPosition: "right",
  icon: aw
}, lw = (e, { radius: t, color: n, size: r, iconColor: o, variant: i }) => {
  const s = bo({ color: n || e.primaryColor, theme: e }), a = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": se(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : et(t),
      "--checkbox-color": i === "outline" ? a : bt(n, e),
      "--checkbox-icon-color": o ? bt(o, e) : void 0
    }
  };
}, Io = U((e, t) => {
  const n = j("Checkbox", cw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    color: l,
    label: u,
    id: d,
    size: f,
    radius: p,
    wrapperProps: m,
    children: g,
    checked: h,
    labelPosition: x,
    description: w,
    error: y,
    disabled: v,
    variant: S,
    indeterminate: C,
    icon: P,
    rootRef: E,
    iconColor: $,
    onChange: N,
    ...T
  } = n, M = ow(), _ = f || (M == null ? void 0 : M.size), O = P, L = Q({
    name: "Checkbox",
    props: n,
    classes: af,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: lw
  }), { styleProps: I, rest: F } = ur(T), A = It(d), H = M ? {
    checked: M.value.includes(F.value),
    onChange: (K) => {
      M.onChange(K), N == null || N(K);
    }
  } : {};
  return /* @__PURE__ */ b.createElement(
    rf,
    {
      ...L("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: A,
      size: _,
      labelPosition: x,
      label: u,
      description: w,
      error: y,
      disabled: v,
      classNames: r,
      styles: s,
      unstyled: a,
      "data-checked": H.checked || h || void 0,
      variant: S,
      ref: E,
      ...I,
      ...m
    },
    /* @__PURE__ */ b.createElement(W, { ...L("inner"), mod: { "data-label-position": x } }, /* @__PURE__ */ b.createElement(
      W,
      {
        component: "input",
        id: A,
        ref: t,
        checked: h,
        disabled: v,
        mod: { error: !!y, indeterminate: C },
        ...L("input", { focusable: !0, variant: S }),
        onChange: N,
        ...F,
        ...H,
        type: "checkbox"
      }
    ), /* @__PURE__ */ b.createElement(O, { indeterminate: C, ...L("icon") }))
  );
});
Io.classes = { ...af, ...nw };
Io.displayName = "@mantine/core/Checkbox";
Io.Group = ha;
function Sn(e) {
  return "group" in e;
}
function cf({
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
      items: cf({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), Sn(s) || s.label.toLowerCase().includes(r) && o.push(s);
  }
  return o;
}
function uw(e) {
  if (e.length === 0)
    return !0;
  for (const t of e)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function lf(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Sn(n))
        lf(n.items, t);
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
function Oi(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function uf({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!Sn(e)) {
    const s = t && Oi(n, e.value) && /* @__PURE__ */ b.createElement(sf, { className: Ie.optionsDropdownCheckIcon });
    return /* @__PURE__ */ b.createElement(
      J.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: vt({ [Ie.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": Oi(n, e.value) || void 0,
        "aria-selected": Oi(n, e.value)
      },
      r === "left" && s,
      /* @__PURE__ */ b.createElement("span", null, e.label),
      r === "right" && s
    );
  }
  const i = e.items.map((s) => /* @__PURE__ */ b.createElement(
    uf,
    {
      data: s,
      value: n,
      key: s.value,
      unstyled: o,
      withCheckIcon: t,
      checkIconPosition: r
    }
  ));
  return /* @__PURE__ */ b.createElement(J.Group, { label: e.group }, i);
}
function df({
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
  lf(e);
  const h = typeof o == "string" ? (r || cf)({
    options: e,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : e, x = uw(h), w = h.map((y) => /* @__PURE__ */ b.createElement(
    uf,
    {
      data: y,
      key: Sn(y) ? y.group : y.value,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ b.createElement(J.Dropdown, { hidden: t || n && x }, /* @__PURE__ */ b.createElement(J.Options, { labelledBy: m }, a ? /* @__PURE__ */ b.createElement(
    fr.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Ie.optionsDropdownScrollArea
    },
    w
  ) : w, x && f && /* @__PURE__ */ b.createElement(J.Empty, null, f)));
}
var Oo = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const fl = {
  orientation: "horizontal"
}, dw = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), ba = U((e, t) => {
  const n = j("ButtonGroup", fl, e), {
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
  } = j("ButtonGroup", fl, e), p = Q({
    name: "ButtonGroup",
    props: n,
    classes: Oo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: dw,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(
    W,
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
ba.classes = Oo;
ba.displayName = "@mantine/core/ButtonGroup";
const fw = {}, pw = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s }) => {
  const a = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    gradient: r,
    variant: o || "filled"
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": se(i, "button-height"),
      "--button-padding-x": se(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? je(i.replace("compact-", "")) : je(i),
      "--button-radius": t === void 0 ? void 0 : et(t),
      "--button-bg": n || o ? a.background : void 0,
      "--button-hover": n || o ? a.hover : void 0,
      "--button-color": n || o ? a.color : void 0,
      "--button-bd": n || o ? a.border : void 0,
      "--button-hover-color": n || o ? a.hoverColor : void 0
    }
  };
}, Kn = qt((e, t) => {
  const n = j("Button", fw, e), {
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
    classNames: x,
    styles: w,
    unstyled: y,
    "data-disabled": v,
    ...S
  } = n, C = Q({
    name: "Button",
    props: n,
    classes: Oo,
    className: i,
    style: r,
    classNames: x,
    styles: w,
    unstyled: y,
    vars: o,
    varsResolver: pw
  }), P = !!l, E = !!u;
  return /* @__PURE__ */ b.createElement(
    ln,
    {
      ref: t,
      ...C("root", { active: !a && !m && !v }),
      unstyled: y,
      variant: f,
      disabled: a || m,
      mod: {
        disabled: a || v,
        loading: m,
        block: d,
        "with-left-section": P,
        "with-right-section": E
      },
      ...S
    },
    /* @__PURE__ */ b.createElement(W, { component: "span", ...C("loader"), "aria-hidden": !0 }, /* @__PURE__ */ b.createElement(
      mr,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...g
      }
    )),
    /* @__PURE__ */ b.createElement("span", { ...C("inner") }, l && /* @__PURE__ */ b.createElement(W, { component: "span", ...C("section"), mod: { position: "left" } }, l), /* @__PURE__ */ b.createElement(W, { component: "span", mod: { loading: m }, ...C("label") }, c), u && /* @__PURE__ */ b.createElement(W, { component: "span", ...C("section"), mod: { position: "right" } }, u))
  );
});
Kn.classes = Oo;
Kn.displayName = "@mantine/core/Button";
Kn.Group = ba;
var ff = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const pl = {
  withShadow: !0
}, mw = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : et(t),
    "--cs-size": D(n)
  }
}), Yn = qt((e, t) => {
  const n = j("ColorSwatch", pl, e), {
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
  } = j("ColorSwatch", pl, n), h = Q({
    name: "ColorSwatch",
    props: n,
    classes: ff,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: mw
  });
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      variant: m,
      size: u,
      ...h("root", { focusable: !0 }),
      ...g
    },
    /* @__PURE__ */ b.createElement("span", { ...h("alphaOverlay") }),
    f && /* @__PURE__ */ b.createElement("span", { ...h("shadowOverlay") }),
    /* @__PURE__ */ b.createElement("span", { ...h("colorOverlay", { style: { backgroundColor: l } }) }),
    /* @__PURE__ */ b.createElement("span", { ...h("childrenOverlay") }, p)
  );
});
Yn.classes = ff;
Yn.displayName = "@mantine/core/ColorSwatch";
var pf = { root: "m-7485cace" };
const gw = {}, hw = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : se(t, "container-size")
  }
}), ya = U((e, t) => {
  const n = j("Container", gw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, ...u } = n, d = Q({
    name: "Container",
    classes: pf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: hw
  });
  return /* @__PURE__ */ b.createElement(W, { ref: t, mod: { fluid: l }, ...d("root"), ...u });
});
ya.classes = pf;
ya.displayName = "@mantine/core/Container";
function bw({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = V(-1), i = V(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, c = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return G(() => s, []), { openDropdown: a, closeDropdown: c };
}
const [yw, mf] = Ut(
  "HoverCard component was not found in the tree"
), vw = {};
function gf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    vw,
    e
  ), i = mf(), s = Hr(n, i.openDropdown), a = Hr(r, i.closeDropdown);
  return /* @__PURE__ */ b.createElement(ft.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
gf.displayName = "@mantine/core/HoverCardDropdown";
const ww = {
  refProp: "ref"
}, hf = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    ww,
    e
  );
  if (!Ht(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = mf(), a = Hr(n.props.onMouseEnter, s.openDropdown), c = Hr(n.props.onMouseLeave, s.closeDropdown), l = { onMouseEnter: a, onMouseLeave: c };
  return /* @__PURE__ */ b.createElement(ft.Target, { refProp: r, ref: t, ...i }, cn(
    n,
    o ? { [o]: l } : l
  ));
});
hf.displayName = "@mantine/core/HoverCardTarget";
const xw = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function rn(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = j(
    "HoverCard",
    xw,
    e
  ), [c, { open: l, close: u }] = vh(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = bw({ open: l, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ b.createElement(yw, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ b.createElement(ft, { ...a, opened: c, __staticSelector: "HoverCard" }, t));
}
rn.displayName = "@mantine/core/HoverCard";
rn.Target = hf;
rn.Dropdown = gf;
rn.extend = (e) => e;
function bf(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const [Sw, va] = Ds(), [Cw, Ew] = Ds();
var Ao = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const Pw = {}, Dw = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? se(t) : se(n, "pg-gap")
  }
}), wa = U((e, t) => {
  const n = j("PillGroup", Pw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, size: l, disabled: u, ...d } = n, f = va(), p = (f == null ? void 0 : f.size) || l || void 0, m = Q({
    name: "PillGroup",
    classes: Ao,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Dw,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(Cw, { value: { size: p, disabled: u } }, /* @__PURE__ */ b.createElement(W, { ref: t, size: p, ...m("group"), ...d }));
});
wa.classes = Ao;
wa.displayName = "@mantine/core/PillGroup";
const Rw = {
  variant: "default"
}, Iw = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": se(n, "pill-fz"),
    "--pill-height": se(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : et(t)
  }
}), Xn = U((e, t) => {
  const n = j("Pill", Rw, e), {
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
    ...x
  } = n, w = Ew(), y = va(), v = g || (w == null ? void 0 : w.size) || void 0, S = (y == null ? void 0 : y.variant) === "filled" ? "contrast" : l || "default", C = Q({
    name: "Pill",
    classes: Ao,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Iw,
    stylesCtx: { size: v }
  });
  return /* @__PURE__ */ b.createElement(
    W,
    {
      component: "span",
      ref: t,
      variant: S,
      size: v,
      ...C("root", { variant: S }),
      mod: { "with-remove": d, disabled: h || (w == null ? void 0 : w.disabled) },
      ...x
    },
    /* @__PURE__ */ b.createElement("span", { ...C("label") }, u),
    d && /* @__PURE__ */ b.createElement(
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
Xn.classes = Ao;
Xn.displayName = "@mantine/core/Pill";
Xn.Group = wa;
var yf = { field: "m-45c4369d" };
const Ow = {
  type: "visible"
}, xa = U((e, t) => {
  const n = j("PillsInputField", Ow, e), {
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
  } = n, m = va(), g = An(), h = Q({
    name: "PillsInputField",
    classes: yf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "field"
  }), x = u || (m == null ? void 0 : m.disabled);
  return /* @__PURE__ */ b.createElement(
    W,
    {
      component: "input",
      ref: Oe(t, m == null ? void 0 : m.fieldRef),
      "data-type": l,
      disabled: x,
      mod: { disabled: x, pointer: f },
      ...h("field"),
      ...p,
      id: (g == null ? void 0 : g.inputId) || d,
      "aria-invalid": m == null ? void 0 : m.hasError,
      "aria-describedby": g == null ? void 0 : g.describedBy,
      type: "text",
      onMouseDown: (w) => !f && w.stopPropagation()
    }
  );
});
xa.classes = yf;
xa.displayName = "@mantine/core/PillsInputField";
const Aw = {}, Jr = U((e, t) => {
  const n = j("PillsInput", Aw, e), {
    children: r,
    onMouseDown: o,
    onClick: i,
    size: s,
    disabled: a,
    __staticSelector: c,
    error: l,
    variant: u,
    ...d
  } = n, f = V();
  return /* @__PURE__ */ b.createElement(Sw, { value: { fieldRef: f, size: s, disabled: a, hasError: !!l, variant: u } }, /* @__PURE__ */ b.createElement(
    Kt,
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
Jr.displayName = "@mantine/core/PillsInput";
Jr.Field = xa;
function $w({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (Sn(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const Nw = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, Sa = U((e, t) => {
  const n = j("MultiSelect", Nw, e), {
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
    defaultDropdownOpened: x,
    onDropdownOpen: w,
    onDropdownClose: y,
    selectFirstOptionOnChange: v,
    onOptionSubmit: S,
    comboboxProps: C,
    filter: P,
    limit: E,
    withScrollArea: $,
    maxDropdownHeight: N,
    searchValue: T,
    defaultSearchValue: M,
    onSearchChange: _,
    readOnly: O,
    disabled: L,
    onFocus: I,
    onBlur: F,
    onPaste: A,
    radius: H,
    rightSection: K,
    rightSectionWidth: ne,
    rightSectionPointerEvents: ye,
    rightSectionProps: ue,
    leftSection: Ae,
    leftSectionWidth: ve,
    leftSectionPointerEvents: re,
    leftSectionProps: we,
    inputContainer: Me,
    inputWrapperOrder: Ce,
    withAsterisk: Ee,
    labelProps: _e,
    descriptionProps: ce,
    errorProps: X,
    wrapperProps: dn,
    description: qe,
    label: At,
    error: Ke,
    maxValues: Pe,
    searchable: me,
    nothingFoundMessage: $t,
    withCheckIcon: Yt,
    checkIconPosition: ae,
    hidePickedOptions: Nt,
    withErrorStyles: gm,
    name: hm,
    form: bm,
    id: ym,
    clearable: vm,
    clearButtonProps: wm,
    hiddenInputProps: xm,
    placeholder: gc,
    hiddenInputValuesDivider: Sm,
    ...Cm
  } = n, pi = It(ym), mi = Jd(g), wr = oa(mi), ke = ga({
    opened: h,
    defaultOpened: x,
    onDropdownOpen: w,
    onDropdownClose: () => {
      y == null || y(), ke.resetSelectedOption();
    }
  }), {
    styleProps: Em,
    rest: { type: mR, ...Pm }
  } = ur(Cm), [$e, Mn] = Et({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [xr, Sr] = Et({
    value: T,
    defaultValue: M,
    finalValue: "",
    onChange: _
  }), gi = Q({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: hc, resolvedStyles: bc } = td({
    props: n,
    styles: s,
    classNames: r
  }), Dm = (le) => {
    p == null || p(le), le.key === " " && !me && (le.preventDefault(), ke.toggleDropdown()), le.key === "Backspace" && xr.length === 0 && $e.length > 0 && Mn($e.slice(0, $e.length - 1));
  }, Rm = $e.map((le, hi) => {
    var wc;
    return /* @__PURE__ */ b.createElement(
      Xn,
      {
        key: `${le}-${hi}`,
        withRemoveButton: !O,
        onRemove: () => Mn($e.filter((Im) => le !== Im)),
        unstyled: a,
        ...gi("pill")
      },
      ((wc = wr[le]) == null ? void 0 : wc.label) || le
    );
  });
  G(() => {
    v && ke.selectFirstOption();
  }, [v, $e]);
  const yc = vm && $e.length > 0 && !L && !O && /* @__PURE__ */ b.createElement(
    J.ClearButton,
    {
      size: l,
      ...wm,
      onClear: () => {
        Mn([]), Sr("");
      }
    }
  ), vc = $w({ data: mi, value: $e });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    J,
    {
      store: ke,
      classNames: hc,
      styles: bc,
      unstyled: a,
      size: l,
      readOnly: O,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (le) => {
        S == null || S(le), Sr(""), ke.updateSelectedOptionIndex("selected"), $e.includes(wr[le].value) ? Mn($e.filter((hi) => hi !== wr[le].value)) : $e.length < Pe && Mn([...$e, wr[le].value]);
      },
      ...C
    },
    /* @__PURE__ */ b.createElement(J.DropdownTarget, null, /* @__PURE__ */ b.createElement(
      Jr,
      {
        ...Em,
        __staticSelector: "MultiSelect",
        classNames: hc,
        styles: bc,
        unstyled: a,
        size: l,
        className: o,
        style: i,
        variant: m,
        disabled: L,
        radius: H,
        rightSection: K || yc || /* @__PURE__ */ b.createElement(J.Chevron, { size: l, error: Ke, unstyled: a }),
        rightSectionPointerEvents: ye || (yc ? "all" : "none"),
        rightSectionWidth: ne,
        rightSectionProps: ue,
        leftSection: Ae,
        leftSectionWidth: ve,
        leftSectionPointerEvents: re,
        leftSectionProps: we,
        inputContainer: Me,
        inputWrapperOrder: Ce,
        withAsterisk: Ee,
        labelProps: _e,
        descriptionProps: ce,
        errorProps: X,
        wrapperProps: dn,
        description: qe,
        label: At,
        error: Ke,
        multiline: !0,
        withErrorStyles: gm,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? ke.openDropdown() : ke.toggleDropdown(),
        "data-expanded": ke.dropdownOpened || void 0,
        id: pi
      },
      /* @__PURE__ */ b.createElement(Xn.Group, { disabled: L, unstyled: a, ...gi("pillsList") }, Rm, /* @__PURE__ */ b.createElement(J.EventsTarget, null, /* @__PURE__ */ b.createElement(
        Jr.Field,
        {
          ...Pm,
          ref: t,
          id: pi,
          placeholder: gc,
          type: !me && !gc ? "hidden" : "visible",
          ...gi("inputField"),
          unstyled: a,
          onFocus: (le) => {
            I == null || I(le), me && ke.openDropdown();
          },
          onBlur: (le) => {
            F == null || F(le), ke.closeDropdown(), me && ke.closeDropdown(), Sr("");
          },
          onKeyDown: Dm,
          value: xr,
          onChange: (le) => {
            Sr(le.currentTarget.value), me && ke.openDropdown(), v && ke.selectFirstOption();
          },
          disabled: L,
          readOnly: O || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ b.createElement(
      df,
      {
        data: Nt ? vc : mi,
        hidden: O || L,
        filter: P,
        search: xr,
        limit: E,
        hiddenWhenEmpty: !me || !$t || Nt && vc.length === 0 && xr.trim().length === 0,
        withScrollArea: $,
        maxDropdownHeight: N,
        filterOptions: me,
        value: $e,
        checkIconPosition: ae,
        withCheckIcon: Yt,
        nothingFoundMessage: $t,
        unstyled: a,
        labelId: `${pi}-label`
      }
    )
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "hidden",
      name: hm,
      value: $e.join(Sm),
      form: bm,
      disabled: L,
      ...xm
    }
  ));
});
Sa.classes = { ...Kt.classes, ...J.classes };
Sa.displayName = "@mantine/core/MultiSelect";
const Tw = {
  duration: 100,
  transition: "fade"
};
function Lw(e, t) {
  return { ...Tw, ...t, ...e };
}
function Mw({
  offset: e,
  position: t
}) {
  const [n, r] = q(!1), o = V(), { x: i, y: s, elements: a, refs: c, update: l, placement: u } = Us({
    placement: t,
    middleware: [
      Vs({
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
  return G(() => {
    if (c.floating.current) {
      const m = o.current;
      m.addEventListener("mousemove", p);
      const g = xt(c.floating.current);
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
var $o = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const _w = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: Rs("popover")
}, kw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : et(t),
    "--tooltip-bg": n ? bt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Ca = U((e, t) => {
  const n = j("TooltipFloating", _w, e), {
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
    zIndex: x,
    disabled: w,
    variant: y,
    vars: v,
    portalProps: S,
    ...C
  } = n, P = wt(), E = Q({
    name: "TooltipFloating",
    props: n,
    classes: $o,
    className: a,
    style: s,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: v,
    varsResolver: kw
  }), { handleMouseMove: $, x: N, y: T, opened: M, boundaryRef: _, floating: O, setOpened: L } = Mw({
    offset: m,
    position: g
  });
  if (!Ht(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const I = Oe(_, r.ref, t), F = (H) => {
    var K, ne;
    (ne = (K = r.props).onMouseEnter) == null || ne.call(K, H), $(H), L(!0);
  }, A = (H) => {
    var K, ne;
    (ne = (K = r.props).onMouseLeave) == null || ne.call(K, H), L(!1);
  };
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(So, { ...S, withinPortal: i }, /* @__PURE__ */ b.createElement(
    W,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ...Ns(s, P),
          zIndex: x,
          display: !w && M ? "block" : "none",
          top: (T && Math.round(T)) ?? "",
          left: (N && Math.round(N)) ?? ""
        }
      }),
      variant: y,
      ref: O
    },
    p
  )), cn(r, {
    ...r.props,
    [o]: I,
    onMouseEnter: F,
    onMouseLeave: A
  }));
});
Ca.classes = $o;
Ca.displayName = "@mantine/core/TooltipFloating";
const vf = Gt(!1), Fw = vf.Provider, Bw = () => dt(vf), jw = {
  openDelay: 0,
  closeDelay: 0
};
function wf(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", jw, e);
  return /* @__PURE__ */ b.createElement(Fw, { value: !0 }, /* @__PURE__ */ b.createElement(Iy, { delay: { open: t, close: n } }, r));
}
wf.displayName = "@mantine/core/TooltipGroup";
function Vw(e) {
  var C, P, E;
  const [t, n] = q(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = Bw(), s = It(), { delay: a, currentId: c, setCurrentId: l } = _d(), u = Z(
    ($) => {
      n($), $ && l(s);
    },
    [l, s]
  ), {
    x: d,
    y: f,
    context: p,
    refs: m,
    update: g,
    placement: h,
    middlewareData: { arrow: { x, y: w } = {} }
  } = Us({
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      wd(e.offset),
      Vs({ padding: 8 }),
      bd(),
      Id({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [vd()] : []
    ]
  }), { getReferenceProps: y, getFloatingProps: v } = By([
    Ry(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((P = e.events) != null && P.touch)
    }),
    Fy(p, { enabled: (E = e.events) == null ? void 0 : E.focus, keyboardOnly: !0 }),
    jy(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    ky(p, { enabled: typeof e.opened > "u" }),
    Oy(p, { id: s })
  ]);
  Gd({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), Ft(() => {
    var $;
    ($ = e.onPositionChange) == null || $.call(e, h);
  }, [h]);
  const S = o && c && c !== s;
  return {
    x: d,
    y: f,
    arrowX: x,
    arrowY: w,
    reference: m.setReference,
    floating: m.setFloating,
    getFloatingProps: v,
    getReferenceProps: y,
    isGroupPhase: S,
    opened: o,
    placement: h
  };
}
const ml = {
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
  zIndex: Rs("popover"),
  positionDependencies: []
}, zw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : et(t),
    "--tooltip-bg": n ? bt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Cn = U((e, t) => {
  const n = j("Tooltip", ml, e), {
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
    style: x,
    className: w,
    withArrow: y,
    arrowSize: v,
    arrowOffset: S,
    arrowRadius: C,
    arrowPosition: P,
    offset: E,
    transitionProps: $,
    multiline: N,
    events: T,
    zIndex: M,
    disabled: _,
    positionDependencies: O,
    onClick: L,
    onMouseEnter: I,
    onMouseLeave: F,
    inline: A,
    variant: H,
    keepMounted: K,
    vars: ne,
    portalProps: ye,
    ...ue
  } = j("Tooltip", ml, n), { dir: Ae } = dr(), ve = V(null), re = Vw({
    position: kd(Ae, o),
    closeDelay: c,
    openDelay: a,
    onPositionChange: l,
    opened: u,
    events: T,
    arrowRef: ve,
    arrowOffset: S,
    offset: typeof E == "number" ? E + (y ? v / 2 : 0) : E,
    positionDependencies: [...O, r],
    inline: A
  }), we = Q({
    name: "Tooltip",
    props: n,
    classes: $o,
    className: w,
    style: x,
    classNames: m,
    styles: g,
    unstyled: h,
    rootSelector: "tooltip",
    vars: ne,
    varsResolver: zw
  });
  if (!Ht(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const Me = Oe(re.reference, r.ref, t), Ce = Lw($, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(So, { ...ye, withinPortal: d }, /* @__PURE__ */ b.createElement(
    Ks,
    {
      ...Ce,
      keepMounted: K,
      mounted: !_ && !!re.opened,
      duration: re.isGroupPhase ? 10 : Ce.duration
    },
    (Ee) => /* @__PURE__ */ b.createElement(
      W,
      {
        ...ue,
        variant: H,
        mod: { multiline: N },
        ...re.getFloatingProps({
          ref: re.floating,
          className: we("tooltip").className,
          style: {
            ...we("tooltip").style,
            ...Ee,
            zIndex: M,
            top: re.y ?? 0,
            left: re.x ?? 0
          }
        })
      },
      s,
      /* @__PURE__ */ b.createElement(
        qs,
        {
          ref: ve,
          arrowX: re.arrowX,
          arrowY: re.arrowY,
          visible: y,
          position: re.placement,
          arrowSize: v,
          arrowOffset: S,
          arrowRadius: C,
          arrowPosition: P,
          ...we("arrow")
        }
      )
    )
  )), cn(
    r,
    re.getReferenceProps({
      onClick: L,
      onMouseEnter: I,
      onMouseLeave: F,
      onMouseMove: n.onMouseMove,
      onPointerDown: n.onPointerDown,
      onPointerEnter: n.onPointerEnter,
      [i]: Me,
      className: vt(w, r.props.className),
      ...r.props
    })
  ));
});
Cn.classes = $o;
Cn.displayName = "@mantine/core/Tooltip";
Cn.Floating = Ca;
Cn.Group = wf;
const Gw = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, No = U((e, t) => {
  const n = j("Select", Gw, e), {
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
    defaultValue: x,
    selectFirstOptionOnChange: w,
    onOptionSubmit: y,
    comboboxProps: v,
    readOnly: S,
    disabled: C,
    filter: P,
    limit: E,
    withScrollArea: $,
    maxDropdownHeight: N,
    size: T,
    searchable: M,
    rightSection: _,
    checkIconPosition: O,
    withCheckIcon: L,
    nothingFoundMessage: I,
    name: F,
    form: A,
    searchValue: H,
    defaultSearchValue: K,
    onSearchChange: ne,
    allowDeselect: ye,
    error: ue,
    rightSectionPointerEvents: Ae,
    id: ve,
    clearable: re,
    clearButtonProps: we,
    hiddenInputProps: Me,
    ...Ce
  } = n, Ee = bn(() => Jd(g), [g]), _e = bn(() => oa(Ee), [Ee]), ce = It(ve), [X, dn] = Et({
    value: h,
    defaultValue: x,
    finalValue: null,
    onChange: m
  }), qe = typeof X == "string" ? _e[X] : void 0, [At, Ke] = Et({
    value: H,
    defaultValue: K,
    finalValue: qe ? qe.label : "",
    onChange: ne
  }), Pe = ga({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: $t } = td({
    props: n,
    styles: o,
    classNames: r
  });
  G(() => {
    w && Pe.selectFirstOption();
  }, [w, X]), G(() => {
    h === null && Ke(""), typeof h == "string" && qe && Ke(qe.label);
  }, [h, qe]);
  const Yt = re && !!X && !C && !S && /* @__PURE__ */ b.createElement(
    J.ClearButton,
    {
      size: T,
      ...we,
      onClear: () => {
        dn(null), Ke("");
      }
    }
  );
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    J,
    {
      store: Pe,
      __staticSelector: "Select",
      classNames: me,
      styles: $t,
      unstyled: i,
      readOnly: S,
      onOptionSubmit: (ae) => {
        y == null || y(ae);
        const Nt = ye && _e[ae].value === X ? null : _e[ae].value;
        dn(Nt), Ke(typeof Nt == "string" ? _e[ae].label : ""), Pe.closeDropdown();
      },
      size: T,
      ...v
    },
    /* @__PURE__ */ b.createElement(J.Target, { targetType: M ? "input" : "button" }, /* @__PURE__ */ b.createElement(
      Kt,
      {
        id: ce,
        ref: t,
        rightSection: _ || Yt || /* @__PURE__ */ b.createElement(J.Chevron, { size: T, error: ue, unstyled: i }),
        rightSectionPointerEvents: Ae || (Yt ? "all" : "none"),
        ...Ce,
        size: T,
        __staticSelector: "Select",
        disabled: C,
        readOnly: S || !M,
        value: At,
        onChange: (ae) => {
          Ke(ae.currentTarget.value), Pe.openDropdown(), w && Pe.selectFirstOption();
        },
        onFocus: (ae) => {
          M && Pe.openDropdown(), d == null || d(ae);
        },
        onBlur: (ae) => {
          var Nt;
          M && Pe.closeDropdown(), Ke(X != null && ((Nt = _e[X]) == null ? void 0 : Nt.label) || ""), f == null || f(ae);
        },
        onClick: (ae) => {
          M ? Pe.openDropdown() : Pe.toggleDropdown(), p == null || p(ae);
        },
        classNames: me,
        styles: $t,
        unstyled: i,
        pointer: !M,
        error: ue
      }
    )),
    /* @__PURE__ */ b.createElement(
      df,
      {
        data: Ee,
        hidden: S || C,
        filter: P,
        search: At,
        limit: E,
        hiddenWhenEmpty: !M || !I,
        withScrollArea: $,
        maxDropdownHeight: N,
        filterOptions: M && (qe == null ? void 0 : qe.label) !== At,
        value: X,
        checkIconPosition: O,
        withCheckIcon: L,
        nothingFoundMessage: I,
        unstyled: i,
        labelId: `${ce}-label`
      }
    )
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "hidden",
      name: F,
      value: X || "",
      form: A,
      disabled: C,
      ...Me
    }
  ));
});
No.classes = { ...Kt.classes, ...J.classes };
No.displayName = "@mantine/core/Select";
const Ww = {}, Ea = U((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", Ww, e);
  return /* @__PURE__ */ b.createElement(W, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
Ea.displayName = "@mantine/core/Space";
const [Hw, Pa] = Ut(
  "Tabs component was not found in the tree"
);
var hr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const Uw = {}, Da = U((e, t) => {
  const n = j("TabsList", Uw, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: c, style: l, ...u } = n, d = Pa();
  return /* @__PURE__ */ b.createElement(
    W,
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
Da.classes = hr;
Da.displayName = "@mantine/core/TabsList";
const qw = {}, Ra = U((e, t) => {
  const n = j("TabsPanel", qw, e), { children: r, className: o, value: i, classNames: s, styles: a, style: c, ...l } = n, u = Pa(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
  return /* @__PURE__ */ b.createElement(
    W,
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
Ra.classes = hr;
Ra.displayName = "@mantine/core/TabsPanel";
const Kw = {}, Ia = U((e, t) => {
  const n = j("TabsTab", Kw, e), {
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
  } = n, x = wt(), { dir: w } = dr(), y = Pa(), v = a === y.value, S = (P) => {
    y.onChange(y.allowTabDeactivation && a === y.value ? null : a), c == null || c(P);
  }, C = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ b.createElement(
    ln,
    {
      ...h,
      ...y.getStyles("tab", { className: r, style: f, variant: y.variant, ...C }),
      disabled: u,
      unstyled: y.unstyled,
      variant: y.variant,
      mod: {
        active: v,
        disabled: u,
        orientation: y.orientation,
        inverted: y.inverted,
        placement: y.orientation === "vertical" && y.placement
      },
      ref: t,
      role: "tab",
      id: y.getTabId(a),
      "aria-selected": v,
      tabIndex: v || y.value === null ? 0 : -1,
      "aria-controls": y.getPanelId(a),
      onClick: S,
      __vars: { "--tabs-color": d ? bt(d, x) : void 0 },
      onKeyDown: Bu({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: y.activateTabWithKeyboard,
        loop: y.loop,
        orientation: y.orientation || "horizontal",
        dir: w,
        onKeyDown: l
      })
    },
    s && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabSection", C), "data-position": "left" }, s),
    o && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabLabel", C) }, o),
    i && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabSection", C), "data-position": "right" }, i)
  );
});
Ia.classes = hr;
Ia.displayName = "@mantine/core/TabsTab";
const gl = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", Yw = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, Xw = (e, { radius: t, color: n }) => ({
  root: {
    "--tabs-radius": et(t),
    "--tabs-color": bt(n, e)
  }
}), at = U((e, t) => {
  const n = j("Tabs", Yw, e), {
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
    keepMounted: x,
    classNames: w,
    styles: y,
    unstyled: v,
    className: S,
    style: C,
    vars: P,
    ...E
  } = n, $ = It(l), [N, T] = Et({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), M = Q({
    name: "Tabs",
    props: n,
    classes: hr,
    className: S,
    style: C,
    classNames: w,
    styles: y,
    unstyled: v,
    vars: P,
    varsResolver: Xw
  });
  return /* @__PURE__ */ b.createElement(
    Hw,
    {
      value: {
        placement: h,
        value: N,
        orientation: s,
        id: $,
        loop: c,
        activateTabWithKeyboard: u,
        getTabId: Wr(`${$}-tab`, gl),
        getPanelId: Wr(`${$}-panel`, gl),
        onChange: T,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: x,
        unstyled: v,
        getStyles: M
      }
    },
    /* @__PURE__ */ b.createElement(
      W,
      {
        ref: t,
        id: $,
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
at.Tab = Ia;
at.Panel = Ra;
at.List = Da;
const Jw = {}, Oa = U((e, t) => {
  const n = j("TextInput", Jw, e);
  return /* @__PURE__ */ b.createElement(Kt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
Oa.classes = Kt.classes;
Oa.displayName = "@mantine/core/TextInput";
const Qw = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Zw(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return Qw.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: D(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var xf = { root: "m-8a5d1357" };
const e0 = {
  order: 1
}, t0 = (e, { order: t, size: n, lineClamp: r }) => {
  const o = Zw(t, n);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0
    }
  };
}, $n = U((e, t) => {
  const n = j("Title", e0, e), {
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
    classes: xf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: t0
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ b.createElement(
    W,
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
$n.classes = xf;
$n.displayName = "@mantine/core/Title";
const n0 = {
  /** Put your mantine theme override here */
}, r0 = "production";
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var o0 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), hl = o0, Ai = () => Math.random().toString(36).substring(7).split("").join("."), i0 = {
  INIT: `@@redux/INIT${Ai()}`,
  REPLACE: `@@redux/REPLACE${Ai()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ai()}`
}, Qr = i0;
function Aa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Sf(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(Sf)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, c = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, x) => {
      s.set(x, h);
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
    let x = !0;
    l();
    const w = a++;
    return s.set(w, h), function() {
      if (x) {
        if (c)
          throw new Error(ge(6));
        x = !1, l(), s.delete(w), i = null;
      }
    };
  }
  function f(h) {
    if (!Aa(h))
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
    return (i = s).forEach((w) => {
      w();
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
      subscribe(x) {
        if (typeof x != "object" || x === null)
          throw new Error(ge(11));
        function w() {
          const v = x;
          v.next && v.next(u());
        }
        return w(), {
          unsubscribe: h(w)
        };
      },
      [hl]() {
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
    [hl]: m
  };
}
function s0(e) {
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
function a0(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    s0(n);
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
function Zr(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function c0(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ge(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(s));
    return i = Zr(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function l0(e) {
  return Aa(e) && "type" in e && typeof e.type == "string";
}
var Cf = Symbol.for("immer-nothing"), bl = Symbol.for("immer-draftable"), We = Symbol.for("immer-state");
function it(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var En = Object.getPrototypeOf;
function Vt(e) {
  return !!e && !!e[We];
}
function Rt(e) {
  var t;
  return e ? Ef(e) || Array.isArray(e) || !!e[bl] || !!((t = e.constructor) != null && t[bl]) || Lo(e) || Mo(e) : !1;
}
var u0 = Object.prototype.constructor.toString();
function Ef(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = En(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === u0;
}
function Jn(e, t) {
  To(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function To(e) {
  const t = e[We];
  return t ? t.type_ : Array.isArray(e) ? 1 : Lo(e) ? 2 : Mo(e) ? 3 : 0;
}
function is(e, t) {
  return To(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Pf(e, t, n) {
  const r = To(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function d0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Lo(e) {
  return e instanceof Map;
}
function Mo(e) {
  return e instanceof Set;
}
function Qt(e) {
  return e.copy_ || e.base_;
}
function ss(e, t) {
  if (Lo(e))
    return new Map(e);
  if (Mo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Ef(e))
    return En(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
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
  return Object.create(En(e), n);
}
function $a(e, t = !1) {
  return _o(e) || Vt(e) || !Rt(e) || (To(e) > 1 && (e.set = e.add = e.clear = e.delete = f0), Object.freeze(e), t && Jn(e, (n, r) => $a(r, !0))), e;
}
function f0() {
  it(2);
}
function _o(e) {
  return Object.isFrozen(e);
}
var p0 = {};
function sn(e) {
  const t = p0[e];
  return t || it(0, e), t;
}
var Qn;
function Df() {
  return Qn;
}
function m0(e, t) {
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
function yl(e, t) {
  t && (sn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function as(e) {
  cs(e), e.drafts_.forEach(g0), e.drafts_ = null;
}
function cs(e) {
  e === Qn && (Qn = e.parent_);
}
function vl(e) {
  return Qn = m0(Qn, e);
}
function g0(e) {
  const t = e[We];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function wl(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[We].modified_ && (as(t), it(4)), Rt(e) && (e = eo(t, e), t.parent_ || to(t, e)), t.patches_ && sn("Patches").generateReplacementPatches_(
    n[We].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = eo(t, n, []), as(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Cf ? e : void 0;
}
function eo(e, t, n) {
  if (_o(t))
    return t;
  const r = t[We];
  if (!r)
    return Jn(
      t,
      (o, i) => xl(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return to(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Jn(
      i,
      (a, c) => xl(e, r, o, a, c, n, s)
    ), to(e, o, !1), n && e.patches_ && sn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function xl(e, t, n, r, o, i, s) {
  if (Vt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !is(t.assigned_, r) ? i.concat(r) : void 0, c = eo(e, o, a);
    if (Pf(n, r, c), Vt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (Rt(o) && !_o(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    eo(e, o), (!t || !t.scope_.parent_) && to(e, o);
  }
}
function to(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && $a(t, n);
}
function h0(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Df(),
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
  let o = r, i = Na;
  n && (o = [r], i = Zn);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var Na = {
  get(e, t) {
    if (t === We)
      return e;
    const n = Qt(e);
    if (!is(n, t))
      return b0(e, n, t);
    const r = n[t];
    return e.finalized_ || !Rt(r) ? r : r === $i(e.base_, t) ? (Ni(e), e.copy_[t] = us(r, e)) : r;
  },
  has(e, t) {
    return t in Qt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Qt(e));
  },
  set(e, t, n) {
    const r = Rf(Qt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = $i(Qt(e), t), i = o == null ? void 0 : o[We];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (d0(n, o) && (n !== void 0 || is(e.base_, t)))
        return !0;
      Ni(e), ls(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return $i(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ni(e), ls(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Qt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
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
    return En(e.base_);
  },
  setPrototypeOf() {
    it(12);
  }
}, Zn = {};
Jn(Na, (e, t) => {
  Zn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Zn.deleteProperty = function(e, t) {
  return Zn.set.call(this, e, t, void 0);
};
Zn.set = function(e, t, n) {
  return Na.set.call(this, e[0], t, n, e[0]);
};
function $i(e, t) {
  const n = e[We];
  return (n ? Qt(n) : e)[t];
}
function b0(e, t, n) {
  var o;
  const r = Rf(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Rf(e, t) {
  if (!(t in e))
    return;
  let n = En(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = En(n);
  }
}
function ls(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ls(e.parent_));
}
function Ni(e) {
  e.copy_ || (e.copy_ = ss(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var y0 = class {
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
      if (Rt(t)) {
        const i = vl(this), s = us(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? as(i) : cs(i);
        }
        return yl(i, r), wl(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Cf && (o = void 0), this.autoFreeze_ && $a(o, !0), r) {
          const i = [], s = [];
          sn("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
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
    Rt(e) || it(8), Vt(e) && (e = If(e));
    const t = vl(this), n = us(e, void 0);
    return n[We].isManual_ = !0, cs(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[We];
    (!n || !n.isManual_) && it(9);
    const { scope_: r } = n;
    return yl(r, t), wl(void 0, r);
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
    const r = sn("Patches").applyPatches_;
    return Vt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function us(e, t) {
  const n = Lo(e) ? sn("MapSet").proxyMap_(e, t) : Mo(e) ? sn("MapSet").proxySet_(e, t) : h0(e, t);
  return (t ? t.scope_ : Df()).drafts_.push(n), n;
}
function If(e) {
  return Vt(e) || it(10, e), Of(e);
}
function Of(e) {
  if (!Rt(e) || _o(e))
    return e;
  const t = e[We];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = ss(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = ss(e, !0);
  return Jn(n, (r, o) => {
    Pf(n, r, Of(o));
  }), t && (t.finalized_ = !1), n;
}
var He = new y0(), Af = He.produce;
He.produceWithPatches.bind(
  He
);
He.setAutoFreeze.bind(He);
He.setUseStrictShallowCopy.bind(He);
He.applyPatches.bind(He);
He.createDraft.bind(He);
He.finishDraft.bind(He);
function v0(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function w0(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function x0(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Sl = (e) => Array.isArray(e) ? e : [e];
function S0(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return x0(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function C0(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var E0 = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, P0 = typeof WeakRef < "u" ? WeakRef : E0, D0 = 0, Cl = 1;
function Rr() {
  return {
    s: D0,
    v: void 0,
    o: null,
    p: null
  };
}
function Ta(e, t = {}) {
  let n = Rr();
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
        h === void 0 ? (a = Rr(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = Rr(), g.set(m, a)) : a = h;
      }
    }
    const l = a;
    let u;
    if (a.s === Cl ? u = a.v : (u = e.apply(null, arguments), i++), l.s = Cl, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new P0(u) : u;
    }
    return l.v = u, u;
  }
  return s.clearCache = () => {
    n = Rr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function $f(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), v0(
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
    } = u, h = Sl(f), x = Sl(m), w = S0(o), y = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h), v = p(function() {
      s++;
      const C = C0(
        w,
        arguments
      );
      return a = y.apply(null, C), a;
    }, ...x);
    return Object.assign(v, {
      resultFunc: l,
      memoizedResultFunc: y,
      dependencies: w,
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
var La = /* @__PURE__ */ $f(Ta), R0 = Object.assign(
  (e, t = La) => {
    w0(
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
  { withTypes: () => R0 }
);
function Nf(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var I0 = Nf(), O0 = Nf, A0 = (...e) => {
  const t = $f(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(Vt(s) ? If(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
A0(Ta);
var $0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Zr : Zr.apply(null, arguments);
}, N0 = (e) => e && typeof e.match == "function";
function ht(e, t) {
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => l0(r) && r.type === e, n;
}
var Tf = class Gn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Gn.prototype);
  }
  static get [Symbol.species]() {
    return Gn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Gn(...t[0].concat(this)) : new Gn(...t.concat(this));
  }
};
function El(e) {
  return Rt(e) ? Af(e, () => {
  }) : e;
}
function Pl(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Le(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function T0(e) {
  return typeof e == "boolean";
}
var L0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Tf();
  return n && (T0(n) ? s.push(I0) : s.push(O0(n.extraArgument))), s;
}, M0 = "RTK_autoBatch", Lf = (e) => (t) => {
  setTimeout(t, e);
}, _0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Lf(10), k0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? _0 : e.type === "callback" ? e.queueNotification : Lf(e.timeout), l = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[M0]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, F0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Tf(e);
  return r && o.push(k0(typeof r == "object" ? r : void 0)), o;
}, B0 = !0;
function j0(e) {
  const t = L0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Aa(n))
    a = a0(n);
  else
    throw new Error(Le(1));
  let c;
  typeof r == "function" ? c = r(t) : c = t();
  let l = Zr;
  o && (l = $0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !B0,
    ...typeof o == "object" && o
  }));
  const u = c0(...c), d = F0(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = l(...f);
  return Sf(a, i, p);
}
function Mf(e) {
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
function V0(e) {
  return typeof e == "function";
}
function z0(e, t) {
  let [n, r, o] = Mf(t), i;
  if (V0(e))
    i = () => El(e());
  else {
    const a = El(e);
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
        if (Vt(u)) {
          const p = d(u, c);
          return p === void 0 ? u : p;
        } else {
          if (Rt(u))
            return Af(u, (f) => d(f, c));
          {
            const f = d(u, c);
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
var G0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", _f = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += G0[Math.random() * 64 | 0];
  return t;
}, W0 = (e, t) => N0(e) ? e.match(t) : e(t);
function H0(...e) {
  return (t) => e.some((n) => W0(n, t));
}
var U0 = ["name", "message", "stack", "code"], Ti = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Dl = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, q0 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of U0)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, ko = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = ht(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = ht(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), s = ht(t + "/rejected", (c, l, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || q0)(c || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(c) : _f(), p = new AbortController();
        let m, g;
        function h(w) {
          g = w, p.abort();
        }
        const x = async function() {
          var v, S;
          let w;
          try {
            let C = (v = r == null ? void 0 : r.condition) == null ? void 0 : v.call(r, c, {
              getState: u,
              extra: d
            });
            if (Y0(C) && (C = await C), C === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const P = new Promise((E, $) => {
              m = () => {
                $({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, p.signal.addEventListener("abort", m);
            });
            l(i(f, c, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: f,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), w = await Promise.race([P, Promise.resolve(n(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: h,
              rejectWithValue: (E, $) => new Ti(E, $),
              fulfillWithValue: (E, $) => new Dl(E, $)
            })).then((E) => {
              if (E instanceof Ti)
                throw E;
              return E instanceof Dl ? o(E.payload, f, c, E.meta) : o(E, f, c);
            })]);
          } catch (C) {
            w = C instanceof Ti ? s(null, f, c, C.payload, C.meta) : s(C, f, c);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(w) && w.meta.condition || l(w), w;
        }();
        return Object.assign(x, {
          abort: h,
          requestId: f,
          arg: c,
          unwrap() {
            return x.then(K0);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: H0(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function K0(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Y0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var X0 = Symbol.for("rtk-slice-createasyncthunk");
function J0(e, t) {
  return `${e}/${t}`;
}
function Q0({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[X0];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Le(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(ex()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(y, v) {
        const S = typeof y == "string" ? y : y.type;
        if (!S)
          throw new Error(Le(12));
        if (S in l.sliceCaseReducersByType)
          throw new Error(Le(13));
        return l.sliceCaseReducersByType[S] = v, u;
      },
      addMatcher(y, v) {
        return l.sliceMatchers.push({
          matcher: y,
          reducer: v
        }), u;
      },
      exposeAction(y, v) {
        return l.actionCreators[y] = v, u;
      },
      exposeCaseReducer(y, v) {
        return l.sliceCaseReducersByName[y] = v, u;
      }
    };
    c.forEach((y) => {
      const v = a[y], S = {
        reducerName: y,
        type: J0(i, y),
        createNotation: typeof o.reducers == "function"
      };
      nx(v) ? ox(S, v, u, t) : tx(S, v, u);
    });
    function d() {
      const [y = {}, v = [], S = void 0] = typeof o.extraReducers == "function" ? Mf(o.extraReducers) : [o.extraReducers], C = {
        ...y,
        ...l.sliceCaseReducersByType
      };
      return z0(o.initialState, (P) => {
        for (let E in C)
          P.addCase(E, C[E]);
        for (let E of l.sliceMatchers)
          P.addMatcher(E.matcher, E.reducer);
        for (let E of v)
          P.addMatcher(E.matcher, E.reducer);
        S && P.addDefaultCase(S);
      });
    }
    const f = (y) => y, p = /* @__PURE__ */ new Map();
    let m;
    function g(y, v) {
      return m || (m = d()), m(y, v);
    }
    function h() {
      return m || (m = d()), m.getInitialState();
    }
    function x(y, v = !1) {
      function S(P) {
        let E = P[y];
        return typeof E > "u" && v && (E = h()), E;
      }
      function C(P = f) {
        const E = Pl(p, v, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Pl(E, P, {
          insert: () => {
            const $ = {};
            for (const [N, T] of Object.entries(o.selectors ?? {}))
              $[N] = Z0(T, P, h, v);
            return $;
          }
        });
      }
      return {
        reducerPath: y,
        getSelectors: C,
        get selectors() {
          return C(S);
        },
        selectSlice: S
      };
    }
    const w = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...x(s),
      injectInto(y, {
        reducerPath: v,
        ...S
      } = {}) {
        const C = v ?? s;
        return y.inject({
          reducerPath: C,
          reducer: g
        }, S), {
          ...w,
          ...x(C, !0)
        };
      }
    };
    return w;
  };
}
function Z0(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var Ma = Q0();
function ex() {
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
function tx({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !rx(r))
      throw new Error(Le(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? ht(e, s) : ht(e));
}
function nx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function rx(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function ox({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Le(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = n, d = o(e, i, u);
  r.exposeAction(t, d), s && r.addCase(d.fulfilled, s), a && r.addCase(d.pending, a), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
    fulfilled: s || Ir,
    pending: a || Ir,
    rejected: c || Ir,
    settled: l || Ir
  });
}
function Ir() {
}
var ix = (e, t) => {
  if (typeof e != "function")
    throw new Error(Le(32));
}, _a = "listenerMiddleware", sx = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = ht(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(Le(21));
  return ix(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, ax = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = sx(e);
  return {
    id: _f(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Le(22));
    }
  };
}, {
  withTypes: () => ax
}), cx = Object.assign(ht(`${_a}/add`), {
  withTypes: () => cx
});
ht(`${_a}/removeAll`);
var lx = Object.assign(ht(`${_a}/remove`), {
  withTypes: () => lx
});
function Le(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class ux {
  constructor(t = {}) {
    De(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    De(this, "securityData", null);
    De(this, "securityWorker");
    De(this, "abortControllers", /* @__PURE__ */ new Map());
    De(this, "customFetch", (...t) => fetch(...t));
    De(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    De(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    De(this, "contentFormatters", {
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
    De(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const r = this.abortControllers.get(t);
        return r ? r.signal : void 0;
      }
      const n = new AbortController();
      return this.abortControllers.set(t, n), n.signal;
    });
    De(this, "abortRequest", (t) => {
      const n = this.abortControllers.get(t);
      n && (n.abort(), this.abortControllers.delete(t));
    });
    De(this, "request", async ({
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
        const x = m ? await g[m]().then((w) => (h.ok ? h.data = w : h.error = w, h)).catch((w) => (h.error = w, h)) : h;
        if (c && this.abortControllers.delete(c), !g.ok)
          throw x;
        return x;
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
class dx extends ux {
  constructor() {
    super(...arguments);
    De(this, "api", {
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
class br extends dx {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const fx = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, px = {
  bsddApiEnvironment: r0,
  mainDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: !1
}, Rl = (e, t) => {
  e.language = t.payload, be.changeLanguage(t.payload);
}, ka = ht("settings/setSettings"), kf = Ma({
  name: "settings",
  initialState: px,
  reducers: {
    setBsddApiEnvironment: (e, { payload: t }) => {
      e.bsddApiEnvironment = t;
    },
    setMainDictionary: (e, { payload: t }) => {
      e.mainDictionary = t;
    },
    setFilterDictionaries: (e, { payload: t }) => {
      e.filterDictionaries = t;
    },
    setLanguage: Rl,
    setIncludeTestDictionaries: (e, t) => {
      e.includeTestDictionaries = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(
      ka,
      (t, {
        payload: { bsddApiEnvironment: n, mainDictionary: r, filterDictionaries: o, language: i, includeTestDictionaries: s }
      }) => {
        JSON.stringify(t.bsddApiEnvironment) !== JSON.stringify(n) && (t.bsddApiEnvironment = n), JSON.stringify(t.mainDictionary) !== JSON.stringify(r) && (t.mainDictionary = r), JSON.stringify(t.filterDictionaries) !== JSON.stringify(o) && (t.filterDictionaries = o), JSON.stringify(t.language) !== JSON.stringify(i) && Rl(t, { payload: i, type: "setLanguage" }), JSON.stringify(t.includeTestDictionaries) !== JSON.stringify(s) && (t.includeTestDictionaries = s);
      }
    );
  }
}), Fo = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? fx[t] : null;
}, Ff = La(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t) => e ? [e, ...t] : t
);
La(
  Ff,
  (e) => e.map((t) => t.ifcClassification.location)
);
const mx = (e) => e.settings.mainDictionary;
kf.actions;
const gx = kf.reducer, ds = 500, hx = 500;
let tn = null, kr = {};
const Il = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, bx = (e) => {
  const t = Fo(e);
  return t && (!tn || tn.baseUrl !== t) && (tn = new br(t)), tn;
}, fs = ko("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (console.log("fetchDictionaries", e), !e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new br(e), o = hx;
  let i = 0;
  const s = [];
  return new Promise((a, c) => {
    function l() {
      r.api.dictionaryV1List({ IncludeTestDictionaries: t, Limit: o, Offset: i }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: d, totalCount: f } = {} } = u;
        if (d && typeof f < "u")
          if (s.push(...d), i += o, s.length >= f) {
            const p = s.reduce((m, g) => (m[g.uri] = g, m), {});
            a(p);
          } else
            l();
        else
          c(new Error(`bSDD API error! status: ${u.status}`));
      });
    }
    l();
  });
});
async function Ol(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: ds,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const Bf = ko(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (kr[e])
      return await kr[e];
    const o = (async () => {
      const i = bx(t());
      if (!i)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let a = 0;
      const c = await Ol(i, e, a), l = c.classesTotalCount;
      if (l == null)
        throw new Error("Total count is null or undefined");
      s.push(...c.classes ?? []);
      const u = [];
      for (a = ds; a < l; a += ds)
        u.push(
          Ol(i, e, a).then((d) => {
            s.push(...d.classes ?? []);
          })
        );
      return await Promise.all(u), n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: s } }), s;
    })();
    return kr[e] = o, o;
  }
), jf = Ma({
  name: "bsdd",
  initialState: Il,
  reducers: {
    resetState: () => Il,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(fs.pending, (t) => {
      t.loaded = !1;
    }).addCase(fs.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Bf.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
ko("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
  const r = t();
  if (r.bsdd.classes[e])
    return r.bsdd.classes[e];
  if (!tn)
    throw new Error("BsddApi is not initialized");
  const o = await tn.api.classV1List({
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
const Vf = (e, t) => e.bsdd.dictionaries[t], yx = (e, t) => e.bsdd.dictionaryClasses[t], vx = (e) => e.bsdd.dictionaries, wx = (e) => e.bsdd.loaded, { resetState: xx } = jf.actions;
function Sx(e) {
  return (t) => {
    tn = new br(e), kr = {}, t(xx());
  };
}
const Cx = jf.reducer;
function Fa(e) {
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
const Ex = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = yx(t, e.location);
  if (r)
    return r;
  const o = await n(Bf(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function Px(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function gn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function Dx(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return gn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await Ex(e.referencedSource, n, t);
  if (!r)
    return gn("Failed to fetch classes for the referencedSource location", e);
  const o = Px(e, r);
  if (!o)
    return gn(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      e
    );
  if (!o.uri)
    return gn("Failed to find a URI for the matched class", e);
  const { uri: i, code: s, name: a } = o, c = {
    ...e,
    location: i ?? void 0,
    identification: s ?? void 0,
    name: a ?? void 0
  };
  if (!c.referencedSource || !c.referencedSource.location)
    return gn("referencedSource or its location is missing", c);
  const l = Vf(n, c.referencedSource.location);
  return l ? (c.referencedSource = Fa(l), {
    ifcClassificationReference: c,
    validationState: "fixed",
    message: null
  }) : gn("Failed to find a matching dictionary for the matched class", c);
}
function Al(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = Vf(e, t.ifcClassification.location), r = Fa(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Ba = ug, Ct = eg, Rx = {
  ifcEntities: []
}, zf = Ma({
  name: "ifcData",
  initialState: Rx,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), Ix = (e) => e.ifcData.ifcEntities, { setIfcData: Ox } = zf.actions, Ax = ko(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        const { hasAssociations: s } = i;
        if (s) {
          const a = (await Promise.all(
            s.map(async (c) => {
              if (c.type === "IfcClassificationReference") {
                const { validationState: l, ifcClassificationReference: u, message: d } = await Dx(c, t, r);
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
    t(Ox(o));
  }
), $x = zf.reducer;
const ps = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
var Gf = { exports: {} }, Nx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Tx = Nx, Lx = Tx;
function Wf() {
}
function Hf() {
}
Hf.resetWarningCache = Wf;
var Mx = function() {
  function e(r, o, i, s, a, c) {
    if (c !== Lx) {
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
    checkPropTypes: Hf,
    resetWarningCache: Wf
  };
  return n.PropTypes = n, n;
};
Gf.exports = Mx();
var _x = Gf.exports;
const Xt = /* @__PURE__ */ Pu(_x);
var kx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, Fx = Object.defineProperty, Bx = Object.defineProperties, jx = Object.getOwnPropertyDescriptors, no = Object.getOwnPropertySymbols, Uf = Object.prototype.hasOwnProperty, qf = Object.prototype.propertyIsEnumerable, $l = (e, t, n) => t in e ? Fx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Nl = (e, t) => {
  for (var n in t || (t = {}))
    Uf.call(t, n) && $l(e, n, t[n]);
  if (no)
    for (var n of no(t))
      qf.call(t, n) && $l(e, n, t[n]);
  return e;
}, Vx = (e, t) => Bx(e, jx(t)), zx = (e, t) => {
  var n = {};
  for (var r in e)
    Uf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && no)
    for (var r of no(e))
      t.indexOf(r) < 0 && qf.call(e, r) && (n[r] = e[r]);
  return n;
}, ja = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = zx(s, ["color", "size", "stroke", "children"]);
      return xc(
        "svg",
        Nl(Vx(Nl({
          ref: i
        }, kx), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => xc(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Xt.string,
    size: Xt.oneOfType([Xt.string, Xt.number]),
    stroke: Xt.oneOfType([Xt.string, Xt.number])
  }, r.displayName = `${t}`, r;
}, Gx = ja("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), Wx = ja("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), Hx = ja("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function Ux(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function qx(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function Kx(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return Ux(i) && qx(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function Yx({ item: e, bsddClass: t, index: n, setCardColor: r }) {
  const { t: o } = Wt(), i = Ct(Ff), [s, a] = q("grey"), [c, l] = q([]), [u, d] = q([]);
  G(() => {
    function m(g) {
      a(g), r(n, g);
    }
    c.every((g) => g !== null) ? m("green") : c.some((g) => g !== null) ? m("orange") : m("red");
  }, [c, n, r]), G(() => {
    const m = c.map((g) => g !== null ? "green" : "red");
    d(m);
  }, [c]), G(() => {
    l(
      i.map((m) => Kx(e, m))
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
  return /* @__PURE__ */ k.jsxs(xn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ k.jsx(Yn, { size: "1.5em", color: ps[s] }),
    /* @__PURE__ */ k.jsxs(rn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ k.jsx(rn.Target, { children: /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Je, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ k.jsxs(rn.Dropdown, { children: [
        /* @__PURE__ */ k.jsxs(Je, { children: [
          o("Validation per dictionary"),
          ":"
        ] }),
        i.map((m, g) => /* @__PURE__ */ k.jsxs(xn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
          /* @__PURE__ */ k.jsx(Yn, { size: "1em", color: ps[u[g]] }),
          /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Je, { className: "truncate", children: m.ifcClassification.name }) })
        ] }, m.ifcClassification.location))
      ] })
    ] }),
    /* @__PURE__ */ k.jsx(Cn, { label: o("Attach to type"), children: /* @__PURE__ */ k.jsx(qn, { radius: "xl", onClick: () => f(e), children: /* @__PURE__ */ k.jsx(Wx, { size: 20 }) }) }),
    /* @__PURE__ */ k.jsx(Cn, { label: o("Select objects"), children: /* @__PURE__ */ k.jsx(qn, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ k.jsx(Hx, { size: 20 }) }) })
  ] });
}
function Xx(e, t) {
  const n = t.find((r) => r.code === e);
  return n || !1;
}
function Jx({ category: e, bbbr: t, items: n, index: r }) {
  const { t: o } = Wt(), [i, s] = q(), [a, c] = q("grey"), [l, u] = q(new Array(n.length).fill("grey")), d = Ct(Fo), f = Z((p, m) => {
    u((g) => {
      const h = [...g];
      return h[p] = m, h;
    });
  }, []);
  return G(() => {
    const p = Xx(e, t);
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
  }, [e, t, d]), G(() => {
    l.includes("orange") || l.includes("red") && l.includes("green") ? c("orange") : l.every((p) => p === "red") ? c("red") : l.every((p) => p === "green") && c("green");
  }, [l]), /* @__PURE__ */ k.jsxs(oe.Item, { value: r, children: [
    /* @__PURE__ */ k.jsx(oe.Control, { children: /* @__PURE__ */ k.jsxs(xn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ k.jsx(Yn, { size: "1.5em", color: ps[a], children: /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "white", children: n.length }) }),
      /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Je, { className: "truncate", children: e.length > 0 ? e : o("No description") }) })
    ] }) }),
    /* @__PURE__ */ k.jsx(oe.Panel, { mt: "-xs", pl: "xl", children: n.map((p, m) => /* @__PURE__ */ k.jsx(
      Yx,
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
let Qx;
function Zx(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function eS() {
  const e = Ct(mx), t = Ct(Fo), n = Ct(Ix), r = bn(() => Zx(n, "description"), [n]), [o, i] = q([]);
  return G(() => {
    (async () => {
      try {
      } catch (a) {
        console.error(a.message);
      }
    })();
  }, []), G(() => {
    var c;
    if (!t || !e)
      return;
    const s = (c = e == null ? void 0 : e.ifcClassification) == null ? void 0 : c.location;
    if (!s)
      return;
    new br(t).api.dictionaryV1ClassesList({
      Uri: s
      // languageCode: languageCode || undefined
    }).then((l) => {
      if (!l.ok)
        throw new Error(`HTTP error! status: ${l.status}`);
      l.data && l.data.classes && i(l.data.classes);
    }).catch((l) => {
      throw new Error(`bSDD API error! status: ${l}`);
    });
  }, [e, t]), /* @__PURE__ */ k.jsx(at.Panel, { value: "link", children: /* @__PURE__ */ k.jsx(oe, { chevronPosition: "left", children: Object.entries(r).map(([s, a], c) => /* @__PURE__ */ k.jsx(
    Jx,
    {
      category: s,
      items: a,
      bbbr: o,
      index: s || c.toString()
    },
    s
  )) }) });
}
function tS(e, t) {
  return Object.values(e).find((n) => n.uri === t);
}
function Tl(e, t) {
  if (!e)
    return null;
  const n = t.find((r) => r.ifcClassification.location === e.uri);
  return n || {
    ifcClassification: Fa(e),
    parameterMapping: ""
  };
}
function Ll(e, t, n, r, o) {
  e && (t({
    ...e,
    mainDictionary: r || null,
    filterDictionaries: o
  }), n(!0));
}
function nS({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r,
  setIsLoading: o
}) {
  var f;
  const { t: i } = Wt(), s = Ct(vx), a = Object.values(s).map((p) => ({
    value: p.uri,
    label: `${p.name} (${p.version})`
  })), c = ((f = t == null ? void 0 : t.mainDictionary) == null ? void 0 : f.ifcClassification.location) || null, l = bn(() => (t == null ? void 0 : t.filterDictionaries.map(
    (p) => ({
      value: p.ifcClassification.location || "",
      label: p.ifcClassification.location || ""
    })
  )) || [], [t]), u = Z(
    (p) => {
      console.log("changeMainDictionaryOption", p);
      const m = tS(Object.values(s), p) || null;
      if (!t)
        return;
      const g = t.mainDictionary ? [t.mainDictionary] : [], h = Tl(m, g), x = t.filterDictionaries.filter(
        (w) => w.ifcClassification.location !== p
      );
      Ll(t, n, r, h, x);
    },
    [s, t, n, r]
  ), d = Z(
    (p) => {
      const m = Object.values(s).filter((h) => p.includes(h.uri)).map((h) => Tl(h, (t == null ? void 0 : t.filterDictionaries) || [])).filter((h) => h !== null), g = c && p.includes(c) ? null : t == null ? void 0 : t.mainDictionary;
      Ll(t, n, r, g, m);
    },
    [s, t, n, r, c]
  );
  return G(() => {
    if (!t)
      return;
    const p = a.find((g) => g.value === c), m = l.every(
      (g) => a.some((h) => h.value === g.value)
    );
    if (!p || !m) {
      const g = p ? t.mainDictionary : null, h = t.filterDictionaries.filter(
        (x) => a.find((w) => w.value === x.ifcClassification.location)
      );
      n({
        ...t,
        mainDictionary: g,
        filterDictionaries: h
      }), r(!0);
    }
  }, [
    a,
    t,
    c,
    l,
    n,
    r
  ]), G(() => {
    a.length !== 0 && o(!1);
  }, [a, o]), /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: i("Dictionary selection") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: i("Dictionary selection help text") })
    ] }),
    /* @__PURE__ */ k.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ k.jsx(
        No,
        {
          id: "mainDictionary",
          label: i("Main dictionary"),
          value: c,
          onChange: u,
          placeholder: "Select main dictionary",
          data: a,
          searchable: !0,
          clearable: !0
        },
        c || "mainDictionary-select"
      ),
      /* @__PURE__ */ k.jsx(Ea, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        Sa,
        {
          id: "filterDictionaries",
          label: i("Selection filter dictionaries"),
          value: l.map((p) => p.value),
          onChange: (p) => {
            d(p);
          },
          placeholder: "Select filter dictionaries",
          data: a,
          searchable: !0,
          clearable: !0,
          hidePickedOptions: !0
        },
        "filterDictionaries-select"
      )
    ] })
  ] }, e);
}
function er(e) {
  "@babel/helpers - typeof";
  return er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, er(e);
}
function rS(e, t) {
  if (er(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (er(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function oS(e) {
  var t = rS(e, "string");
  return er(t) == "symbol" ? t : String(t);
}
function iS(e, t, n) {
  return t = oS(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ml(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ml(Object(n), !0).forEach(function(r) {
      iS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ml(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ne(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var kl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Li = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Fl = {
  INIT: "@@redux/INIT" + Li(),
  REPLACE: "@@redux/REPLACE" + Li(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Li();
  }
};
function sS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Kf(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Ne(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Ne(1));
    return n(Kf)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Ne(2));
  var o = e, i = t, s = [], a = s, c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function u() {
    if (c)
      throw new Error(Ne(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Ne(4));
    if (c)
      throw new Error(Ne(5));
    var h = !0;
    return l(), a.push(g), function() {
      if (h) {
        if (c)
          throw new Error(Ne(6));
        h = !1, l();
        var w = a.indexOf(g);
        a.splice(w, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!sS(g))
      throw new Error(Ne(7));
    if (typeof g.type > "u")
      throw new Error(Ne(8));
    if (c)
      throw new Error(Ne(9));
    try {
      c = !0, i = o(i, g);
    } finally {
      c = !1;
    }
    for (var h = s = a, x = 0; x < h.length; x++) {
      var w = h[x];
      w();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Ne(10));
    o = g, f({
      type: Fl.REPLACE
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
      subscribe: function(w) {
        if (typeof w != "object" || w === null)
          throw new Error(Ne(11));
        function y() {
          w.next && w.next(u());
        }
        y();
        var v = h(y);
        return {
          unsubscribe: v
        };
      }
    }, g[kl] = function() {
      return this;
    }, g;
  }
  return f({
    type: Fl.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[kl] = m, r;
}
function Bl(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function jl(e, t) {
  if (typeof e == "function")
    return Bl(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Ne(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Bl(o, t));
  }
  return n;
}
function Yf() {
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
function aS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(Ne(15));
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(s);
      });
      return i = Yf.apply(void 0, a)(o.dispatch), _l(_l({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var Xf = { exports: {} }, Jf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn = b;
function cS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var lS = typeof Object.is == "function" ? Object.is : cS, uS = Pn.useState, dS = Pn.useEffect, fS = Pn.useLayoutEffect, pS = Pn.useDebugValue;
function mS(e, t) {
  var n = t(), r = uS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return fS(function() {
    o.value = n, o.getSnapshot = t, Mi(o) && i({ inst: o });
  }, [e, n, t]), dS(function() {
    return Mi(o) && i({ inst: o }), e(function() {
      Mi(o) && i({ inst: o });
    });
  }, [e]), pS(n), n;
}
function Mi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lS(e, n);
  } catch {
    return !0;
  }
}
function gS(e, t) {
  return t();
}
var hS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? gS : mS;
Jf.useSyncExternalStore = Pn.useSyncExternalStore !== void 0 ? Pn.useSyncExternalStore : hS;
Xf.exports = Jf;
var Qf = Xf.exports, bS = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo = b, yS = Qf;
function vS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var wS = typeof Object.is == "function" ? Object.is : vS, xS = yS.useSyncExternalStore, SS = Bo.useRef, CS = Bo.useEffect, ES = Bo.useMemo, PS = Bo.useDebugValue;
bS.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = SS(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = ES(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, wS(u, p))
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
  var a = xS(e, i[0], i[1]);
  return CS(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), PS(a), a;
};
function DS(e) {
  e();
}
let Zf = DS;
const RS = (e) => Zf = e, IS = () => Zf, Vl = Symbol.for("react-redux-context"), zl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function OS() {
  var e;
  if (!R.createContext)
    return {};
  const t = (e = zl[Vl]) != null ? e : zl[Vl] = /* @__PURE__ */ new Map();
  let n = t.get(R.createContext);
  return n || (n = R.createContext(null), t.set(R.createContext, n)), n;
}
const ep = /* @__PURE__ */ OS(), AS = () => {
  throw new Error("uSES not initialized!");
};
var tp = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe = typeof Symbol == "function" && Symbol.for, Va = pe ? Symbol.for("react.element") : 60103, za = pe ? Symbol.for("react.portal") : 60106, jo = pe ? Symbol.for("react.fragment") : 60107, Vo = pe ? Symbol.for("react.strict_mode") : 60108, zo = pe ? Symbol.for("react.profiler") : 60114, Go = pe ? Symbol.for("react.provider") : 60109, Wo = pe ? Symbol.for("react.context") : 60110, Ga = pe ? Symbol.for("react.async_mode") : 60111, Ho = pe ? Symbol.for("react.concurrent_mode") : 60111, Uo = pe ? Symbol.for("react.forward_ref") : 60112, qo = pe ? Symbol.for("react.suspense") : 60113, $S = pe ? Symbol.for("react.suspense_list") : 60120, Ko = pe ? Symbol.for("react.memo") : 60115, Yo = pe ? Symbol.for("react.lazy") : 60116, NS = pe ? Symbol.for("react.block") : 60121, TS = pe ? Symbol.for("react.fundamental") : 60117, LS = pe ? Symbol.for("react.responder") : 60118, MS = pe ? Symbol.for("react.scope") : 60119;
function Ue(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Va:
        switch (e = e.type, e) {
          case Ga:
          case Ho:
          case jo:
          case zo:
          case Vo:
          case qo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Wo:
              case Uo:
              case Yo:
              case Ko:
              case Go:
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
function np(e) {
  return Ue(e) === Ho;
}
ee.AsyncMode = Ga;
ee.ConcurrentMode = Ho;
ee.ContextConsumer = Wo;
ee.ContextProvider = Go;
ee.Element = Va;
ee.ForwardRef = Uo;
ee.Fragment = jo;
ee.Lazy = Yo;
ee.Memo = Ko;
ee.Portal = za;
ee.Profiler = zo;
ee.StrictMode = Vo;
ee.Suspense = qo;
ee.isAsyncMode = function(e) {
  return np(e) || Ue(e) === Ga;
};
ee.isConcurrentMode = np;
ee.isContextConsumer = function(e) {
  return Ue(e) === Wo;
};
ee.isContextProvider = function(e) {
  return Ue(e) === Go;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Va;
};
ee.isForwardRef = function(e) {
  return Ue(e) === Uo;
};
ee.isFragment = function(e) {
  return Ue(e) === jo;
};
ee.isLazy = function(e) {
  return Ue(e) === Yo;
};
ee.isMemo = function(e) {
  return Ue(e) === Ko;
};
ee.isPortal = function(e) {
  return Ue(e) === za;
};
ee.isProfiler = function(e) {
  return Ue(e) === zo;
};
ee.isStrictMode = function(e) {
  return Ue(e) === Vo;
};
ee.isSuspense = function(e) {
  return Ue(e) === qo;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === jo || e === Ho || e === zo || e === Vo || e === qo || e === $S || typeof e == "object" && e !== null && (e.$$typeof === Yo || e.$$typeof === Ko || e.$$typeof === Go || e.$$typeof === Wo || e.$$typeof === Uo || e.$$typeof === TS || e.$$typeof === LS || e.$$typeof === MS || e.$$typeof === NS);
};
ee.typeOf = Ue;
tp.exports = ee;
var _S = tp.exports, Wa = _S, kS = {
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
}, FS = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, BS = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, rp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ha = {};
Ha[Wa.ForwardRef] = BS;
Ha[Wa.Memo] = rp;
function Gl(e) {
  return Wa.isMemo(e) ? rp : Ha[e.$$typeof] || kS;
}
var jS = Object.defineProperty, VS = Object.getOwnPropertyNames, Wl = Object.getOwnPropertySymbols, zS = Object.getOwnPropertyDescriptor, GS = Object.getPrototypeOf, Hl = Object.prototype;
function op(e, t, n) {
  if (typeof t != "string") {
    if (Hl) {
      var r = GS(t);
      r && r !== Hl && op(e, r, n);
    }
    var o = VS(t);
    Wl && (o = o.concat(Wl(t)));
    for (var i = Gl(e), s = Gl(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!FS[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = zS(t, c);
        try {
          jS(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var WS = op;
const Ul = /* @__PURE__ */ Pu(WS);
var ip = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua = Symbol.for("react.element"), qa = Symbol.for("react.portal"), Xo = Symbol.for("react.fragment"), Jo = Symbol.for("react.strict_mode"), Qo = Symbol.for("react.profiler"), Zo = Symbol.for("react.provider"), ei = Symbol.for("react.context"), HS = Symbol.for("react.server_context"), ti = Symbol.for("react.forward_ref"), ni = Symbol.for("react.suspense"), ri = Symbol.for("react.suspense_list"), oi = Symbol.for("react.memo"), ii = Symbol.for("react.lazy"), US = Symbol.for("react.offscreen"), sp;
sp = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ua:
        switch (e = e.type, e) {
          case Xo:
          case Qo:
          case Jo:
          case ni:
          case ri:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case HS:
              case ei:
              case ti:
              case ii:
              case oi:
              case Zo:
                return e;
              default:
                return t;
            }
        }
      case qa:
        return t;
    }
  }
}
te.ContextConsumer = ei;
te.ContextProvider = Zo;
te.Element = Ua;
te.ForwardRef = ti;
te.Fragment = Xo;
te.Lazy = ii;
te.Memo = oi;
te.Portal = qa;
te.Profiler = Qo;
te.StrictMode = Jo;
te.Suspense = ni;
te.SuspenseList = ri;
te.isAsyncMode = function() {
  return !1;
};
te.isConcurrentMode = function() {
  return !1;
};
te.isContextConsumer = function(e) {
  return ot(e) === ei;
};
te.isContextProvider = function(e) {
  return ot(e) === Zo;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
};
te.isForwardRef = function(e) {
  return ot(e) === ti;
};
te.isFragment = function(e) {
  return ot(e) === Xo;
};
te.isLazy = function(e) {
  return ot(e) === ii;
};
te.isMemo = function(e) {
  return ot(e) === oi;
};
te.isPortal = function(e) {
  return ot(e) === qa;
};
te.isProfiler = function(e) {
  return ot(e) === Qo;
};
te.isStrictMode = function(e) {
  return ot(e) === Jo;
};
te.isSuspense = function(e) {
  return ot(e) === ni;
};
te.isSuspenseList = function(e) {
  return ot(e) === ri;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Xo || e === Qo || e === Jo || e === ni || e === ri || e === US || typeof e == "object" && e !== null && (e.$$typeof === ii || e.$$typeof === oi || e.$$typeof === Zo || e.$$typeof === ei || e.$$typeof === ti || e.$$typeof === sp || e.getModuleId !== void 0);
};
te.typeOf = ot;
ip.exports = te;
var qS = ip.exports;
const KS = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function YS(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, c, l, u, d, f;
  function p(w, y) {
    return c = w, l = y, u = e(c, l), d = t(r, l), f = n(u, d, l), a = !0, f;
  }
  function m() {
    return u = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function h() {
    const w = e(c, l), y = !s(w, u);
    return u = w, y && (f = n(u, d, l)), f;
  }
  function x(w, y) {
    const v = !i(y, l), S = !o(w, c, y, l);
    return c = w, l = y, v && S ? m() : v ? g() : S ? h() : f;
  }
  return function(y, v) {
    return a ? x(y, v) : p(y, v);
  };
}
function XS(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = bf(t, KS);
  const s = n(e, i), a = r(e, i), c = o(e, i);
  return YS(s, a, c, e, i);
}
function JS(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function ms(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function ql(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ap(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = ql(e);
      let l = i(a, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = ql(l), l = i(a, c)), l;
    }, i;
  };
}
function Ka(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function QS(e) {
  return e && typeof e == "object" ? ms((t) => (
    // @ts-ignore
    JS(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ap(e)
  ) : Ka(e, "mapDispatchToProps") : ms((t) => ({
    dispatch: t
  }));
}
function ZS(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ap(e)
  ) : Ka(e, "mapStateToProps") : ms(() => ({}));
}
function eC(e, t, n) {
  return Lt({}, n, e, t);
}
function tC(e) {
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
function nC(e) {
  return e ? typeof e == "function" ? tC(e) : Ka(e, "mergeProps") : () => eC;
}
function rC() {
  const e = IS();
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
const Kl = {
  notify() {
  },
  get: () => []
};
function cp(e, t) {
  let n, r = Kl, o = 0, i = !1;
  function s(g) {
    u();
    const h = r.subscribe(g);
    let x = !1;
    return () => {
      x || (x = !0, h(), d());
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = rC());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Kl);
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
const oC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ro = oC ? R.useLayoutEffect : R.useEffect;
function Yl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _i(e, t) {
  if (Yl(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Yl(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const iC = ["reactReduxForwardedRef"];
let lp = AS;
const sC = (e) => {
  lp = e;
}, aC = [null, null];
function cC(e, t, n) {
  ro(() => e(...t), n);
}
function lC(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function uC(e, t, n, r, o, i, s, a, c, l, u) {
  if (!e)
    return () => {
    };
  let d = !1, f = null;
  const p = () => {
    if (d || !a.current)
      return;
    const g = t.getState();
    let h, x;
    try {
      h = r(g, o.current);
    } catch (w) {
      x = w, f = w;
    }
    x || (f = null), h === i.current ? s.current || l() : (i.current = h, c.current = h, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function dC(e, t) {
  return e === t;
}
function up(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = dC,
  areOwnPropsEqual: i = _i,
  areStatePropsEqual: s = _i,
  areMergedPropsEqual: a = _i,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = ep
} = {}) {
  const u = l, d = ZS(e), f = QS(t), p = nC(n), m = !!e;
  return (h) => {
    const x = h.displayName || h.name || "Component", w = `Connect(${x})`, y = {
      shouldHandleStateChanges: m,
      displayName: w,
      wrappedComponentName: x,
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
    function v(P) {
      const [E, $, N] = R.useMemo(() => {
        const {
          reactReduxForwardedRef: ce
        } = P, X = bf(P, iC);
        return [P.context, ce, X];
      }, [P]), T = R.useMemo(() => E && E.Consumer && // @ts-ignore
      qS.isContextConsumer(/* @__PURE__ */ R.createElement(E.Consumer, null)) ? E : u, [E, u]), M = R.useContext(T), _ = !!P.store && !!P.store.getState && !!P.store.dispatch, O = !!M && !!M.store, L = _ ? P.store : M.store, I = O ? M.getServerState : L.getState, F = R.useMemo(() => XS(L.dispatch, y), [L]), [A, H] = R.useMemo(() => {
        if (!m)
          return aC;
        const ce = cp(L, _ ? void 0 : M.subscription), X = ce.notifyNestedSubs.bind(ce);
        return [ce, X];
      }, [L, _, M]), K = R.useMemo(() => _ ? M : Lt({}, M, {
        subscription: A
      }), [_, M, A]), ne = R.useRef(), ye = R.useRef(N), ue = R.useRef(), Ae = R.useRef(!1);
      R.useRef(!1);
      const ve = R.useRef(!1), re = R.useRef();
      ro(() => (ve.current = !0, () => {
        ve.current = !1;
      }), []);
      const we = R.useMemo(() => () => ue.current && N === ye.current ? ue.current : F(L.getState(), N), [L, N]), Me = R.useMemo(() => (X) => A ? uC(
        m,
        L,
        A,
        // @ts-ignore
        F,
        ye,
        ne,
        Ae,
        ve,
        ue,
        H,
        X
      ) : () => {
      }, [A]);
      cC(lC, [ye, ne, Ae, N, ue, H]);
      let Ce;
      try {
        Ce = lp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Me,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          we,
          I ? () => F(I(), N) : we
        );
      } catch (ce) {
        throw re.current && (ce.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), ce;
      }
      ro(() => {
        re.current = void 0, ue.current = void 0, ne.current = Ce;
      });
      const Ee = R.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ R.createElement(h, Lt({}, Ce, {
          ref: $
        }))
      ), [$, h, Ce]);
      return R.useMemo(() => m ? /* @__PURE__ */ R.createElement(T.Provider, {
        value: K
      }, Ee) : Ee, [T, Ee, K]);
    }
    const C = R.memo(v);
    if (C.WrappedComponent = h, C.displayName = v.displayName = w, c) {
      const E = R.forwardRef(function(N, T) {
        return /* @__PURE__ */ R.createElement(C, Lt({}, N, {
          reactReduxForwardedRef: T
        }));
      });
      return E.displayName = w, E.WrappedComponent = h, Ul(E, h);
    }
    return Ul(C, h);
  };
}
function fC({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = R.useMemo(() => {
    const l = cp(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = R.useMemo(() => e.getState(), [e]);
  ro(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || ep;
  return /* @__PURE__ */ R.createElement(c.Provider, {
    value: s
  }, n);
}
sC(Qf.useSyncExternalStore);
RS(Lm);
function pC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function dp(e, t) {
  var n = q(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = V(!0), o = V(n), i = r.current || !!(t && o.current.inputs && pC(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return G(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function mC(e, t) {
  return dp(function() {
    return e;
  }, t);
}
var Y = dp, z = mC, gC = !0, ki = "Invariant failed";
function hC(e, t) {
  if (!e) {
    if (gC)
      throw new Error(ki);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(ki, ": ").concat(n) : ki;
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
}, Ya = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Xl = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, bC = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Fi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Xa = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Fi : r, i = t.border, s = i === void 0 ? Fi : i, a = t.padding, c = a === void 0 ? Fi : a, l = ct(Ya(n, o)), u = ct(Xl(n, s)), d = ct(Xl(u, c));
  return {
    marginBox: l,
    borderBox: ct(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: c
  };
}, Ye = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && hC(!1), o;
}, yC = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, oo = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = bC(r, n);
  return Xa({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, io = function(t, n) {
  return n === void 0 && (n = yC()), oo(t, n);
}, fp = function(t, n) {
  var r = {
    top: Ye(n.marginTop),
    right: Ye(n.marginRight),
    bottom: Ye(n.marginBottom),
    left: Ye(n.marginLeft)
  }, o = {
    top: Ye(n.paddingTop),
    right: Ye(n.paddingRight),
    bottom: Ye(n.paddingBottom),
    left: Ye(n.paddingLeft)
  }, i = {
    top: Ye(n.borderTopWidth),
    right: Ye(n.borderRightWidth),
    bottom: Ye(n.borderBottomWidth),
    left: Ye(n.borderLeftWidth)
  };
  return Xa({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, pp = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return fp(n, r);
}, Jl = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function vC(e, t) {
  return !!(e === t || Jl(e) && Jl(t));
}
function wC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!vC(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = wC);
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
var xC = function(t) {
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
const tr = xC;
function mp(e, t) {
}
mp.bind(null, "warn");
mp.bind(null, "error");
function Mt() {
}
function SC(e, t) {
  return {
    ...e,
    ...t
  };
}
function Xe(e, t, n) {
  const r = t.map((o) => {
    const i = SC(n, o.options);
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
const CC = "Invariant failed";
class so extends Error {
}
so.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  if (!e)
    throw new so(CC);
}
class EC extends b.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Mt, this.onWindowError = (n) => {
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
    this.unbind = Xe(window, [{
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
const PC = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, ao = (e) => e + 1, DC = (e) => `
  You have lifted an item in position ${ao(e.source.index)}
`, gp = (e, t) => {
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
}, hp = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, RC = (e) => {
  const t = e.destination;
  if (t)
    return gp(e.source, t);
  const n = e.combine;
  return n ? hp(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Ql = (e) => `
  The item has returned to its starting position
  of ${ao(e.index)}
`, IC = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Ql(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${gp(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${hp(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Ql(e.source)}
  `;
}, OC = {
  dragHandleUsageInstructions: PC,
  onDragStart: DC,
  onDragUpdate: RC,
  onDragEnd: IC
};
var Fr = OC;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), Be = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), _t = (e, t) => e.x === t.x && e.y === t.y, Nn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), an = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, nr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Zl = (e, t) => Math.min(...t.map((n) => nr(e, n))), bp = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var AC = (e, t) => {
  const n = ct({
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
}), eu = (e) => [{
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
}], $C = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, NC = (e, t) => t ? yr(e, t.scroll.diff.displacement) : e, TC = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, LC = (e, t) => t && t.shouldClipSubject ? AC(t.pageMarginBox, e) : ct(e);
var Dn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = NC(e.marginBox, r), i = TC(o, n, t), s = LC(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Ja = (e, t) => {
  e.frame || B(!1);
  const n = e.frame, r = Be(t, n.scroll.initial), o = Nn(r), i = {
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
  }, s = Dn({
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
const yp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), vp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), si = de((e) => Object.values(e)), MC = de((e) => Object.values(e));
var Tn = de((e, t) => MC(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Qa(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function ai(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var ci = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), _C = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Qa(o))
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
  const l = ci(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return s(p.descriptor.id);
  }
  const u = l.findIndex((p) => p.descriptor.id === c);
  u === -1 && B(!1);
  const d = u - 1;
  if (d < 0)
    return null;
  const f = l[d];
  return s(f.descriptor.id);
}, Ln = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const wp = {
  point: fe,
  value: 0
}, rr = {
  invisible: {},
  visible: {},
  all: []
}, kC = {
  displaced: rr,
  displacedBy: wp,
  at: null
};
var FC = kC, Qe = (e, t) => (n) => e <= n && n <= t, xp = (e) => {
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
}, BC = (e) => {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Za = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Sp = {
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
var jC = (e) => (t) => {
  const n = Qe(t.top, t.bottom), r = Qe(t.left, t.right);
  return (o) => e === Za ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const VC = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return yr(e, n);
}, zC = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, GC = (e, t, n) => n(t)(e), ec = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? VC(e, t) : e;
  return zC(i, t, o) && GC(i, n, o);
}, WC = (e) => ec({
  ...e,
  isVisibleThroughFrameFn: xp
}), Cp = (e) => ec({
  ...e,
  isVisibleThroughFrameFn: BC
}), HC = (e) => ec({
  ...e,
  isVisibleThroughFrameFn: jC(e.destination.axis)
}), UC = (e, t, n) => {
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
function qC(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return ct(Ya(n, r));
}
function or({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const l = qC(c, n), u = c.descriptor.id;
    if (a.all.push(u), !WC({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = UC(u, i, o), p = {
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
function KC(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function tu({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = KC(e, {
    inHomeList: t
  });
  return {
    displaced: rr,
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
function co({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const c = Ln(e, n);
  if (s == null)
    return tu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return tu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = ci(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: or({
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
function zt(e, t) {
  return !!t.effected[e];
}
var YC = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return zt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, XC = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, JC = ({
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
  if (l || B(!1), l.type === "REORDER") {
    const d = XC({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : co({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = YC({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : co({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, QC = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return zt(n, t) ? o ? fe : Nn(r.point) : o ? r.point : fe;
}, ZC = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = ai(t);
  r || B(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = QC({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const Ep = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, e1 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, tc = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, nu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => an(e.line, t.marginBox[e.end] + Ep(e, n), tc(e, t.marginBox, n)), ru = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => an(e.line, t.marginBox[e.start] - e1(e, n), tc(e, t.marginBox, n)), t1 = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => an(e.line, t.contentBox[e.start] + Ep(e, n), tc(e, t.contentBox, n));
var n1 = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Tn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return t1({
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
    if (zt(u, o))
      return ru({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = oo(f.page, l.point);
    return ru({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (zt(d.descriptor.id, o)) {
    const f = oo(d.page, Nn(o.displacedBy.point));
    return nu({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return nu({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, gs = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const r1 = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? n1({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : ZC({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var li = (e) => {
  const t = r1(e), n = e.droppable;
  return n ? gs(n, t) : t;
}, Pp = (e, t) => {
  const n = Be(t, e.scroll.initial), r = Nn(n);
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
function ou(e, t) {
  return e.map((n) => t[n]);
}
function o1(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var i1 = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Pp(t, he(t.scroll.current, o)), s = n.frame ? Ja(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, c = or({
    afterDragging: ou(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = or({
    afterDragging: ou(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = o1(m, f);
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
}, s1 = (e, t) => he(e.scroll.diff.displacement, t), nc = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = s1(n, e), o = Be(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, Dp = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = Be(n, e.page.borderBox.center), c = {
    target: yr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? HC(c) : Cp(c);
}, a1 = ({
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
  const l = Tn(n.descriptor.id, r), u = Ln(t, n), d = _C({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || JC({
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
  const f = li({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (Dp({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: nc({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = Be(f, s), g = i1({
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
const Re = (e) => {
  const t = e.subject.active;
  return t || B(!1), t;
};
var c1 = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = Qe(i[s.start], i[s.end]), c = si(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => xp(o.frame)(Re(u))).filter((u) => {
    const d = Re(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = Re(u), f = Qe(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = Re(u)[s.crossAxisStart], p = Re(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => Re(u)[s.crossAxisStart] === Re(f[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => Qe(Re(u)[s.start], Re(u)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => Re(u)[s.start] - Re(d)[s.start])[0] : c.sort((u, d) => {
    const f = Zl(t, eu(Re(u))), p = Zl(t, eu(Re(d)));
    return f !== p ? f - p : Re(u)[s.start] - Re(d)[s.start];
  })[0];
};
const iu = (e, t) => {
  const n = e.page.borderBox.center;
  return zt(e.descriptor.id, t) ? Be(n, t.displacedBy.point) : n;
}, l1 = (e, t) => {
  const n = e.page.borderBox;
  return zt(e.descriptor.id, t) ? yr(n, Nn(t.displacedBy.point)) : n;
};
var u1 = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => Cp({
  target: l1(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = nr(e, gs(n, iu(s, o))), l = nr(e, gs(n, iu(a, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, vr = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: an(t.line, r)
  };
});
const d1 = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return an(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Tn(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : an(r.line, c);
}, Rp = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Ip = (e, t, n) => {
  const r = e.frame;
  Ln(t, e) && B(!1), e.subject.withPlaceholder && B(!1);
  const o = vr(e.axis, t.displaceBy).point, i = d1(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = Dn({
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
  const a = i ? he(r.scroll.max, i) : r.scroll.max, c = Rp(r, a), l = Dn({
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
}, f1 = (e) => {
  const t = e.subject.withPlaceholder;
  t || B(!1);
  const n = e.frame;
  if (!n) {
    const s = Dn({
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
  r || B(!1);
  const o = Rp(n, r), i = Dn({
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
var p1 = ({
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
      displaced: rr,
      displacedBy: wp,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = li({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = Ln(r, i) ? i : Ip(i, r, o);
    return Dp({
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
  })(), u = vr(i.axis, r.displaceBy);
  return co({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: rr,
    index: l
  });
}, m1 = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = c1({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = Tn(c.descriptor.id, o), u = u1({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = p1({
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
  const f = li({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: nc({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, ze = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const g1 = (e, t) => {
  const n = ze(e);
  return n ? t[n] : null;
};
var h1 = ({
  state: e,
  type: t
}) => {
  const n = g1(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? a1({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : m1({
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
function Zt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Op(e) {
  const t = Qe(e.top, e.bottom), n = Qe(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function b1(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function y1({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = an(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: nr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function v1({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = si(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !b1(e, i))
      return !1;
    if (Op(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], u = Qe(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : y1({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Ap = (e, t) => ct(yr(e, t));
var w1 = (e, t) => {
  const n = e.frame;
  return n ? Ap(t, n.scroll.diff.value) : t;
};
function $p({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function x1({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var S1 = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, c = vr(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = ci(t, r).find((g) => {
    const h = g.descriptor.id, x = g.page.borderBox.center[a.line], w = zt(h, s), y = $p({
      displaced: o,
      id: h
    });
    return w ? y ? d <= x : u < x - l : y ? d <= x + l : u < x;
  }) || null, m = x1({
    draggable: t,
    closest: p,
    inHomeList: Ln(t, n)
  });
  return co({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: m
  });
};
const C1 = 4;
var E1 = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = vr(r.axis, e.displaceBy), c = a.value, l = t[s.start], u = t[s.end], f = ci(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, w = h[s.size] / C1, y = zt(g, i), v = $p({
      displaced: n.displaced,
      id: g
    });
    return y ? v ? u > h[s.start] + w && u < h[s.end] - w : l > h[s.start] - c + w && l < h[s.end] - c - w : v ? u > h[s.start] + c + w && u < h[s.end] + c - w : l > h[s.start] + w && l < h[s.end] - w;
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
}, Np = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = Ap(t.page.borderBox, e), c = v1({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return FC;
  const l = r[c], u = Tn(l.descriptor.id, n), d = w1(l, a);
  return E1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }) || S1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, rc = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const P1 = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = ze(e), o = ze(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = f1(i);
  return rc(n, s);
};
var D1 = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = P1({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = ze(o);
  if (!s)
    return i;
  const a = n[s];
  if (Ln(e, a) || a.subject.withPlaceholder)
    return i;
  const c = Ip(a, e, t);
  return rc(i, c);
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
  const p = a.draggables[e.critical.draggable.id], m = o || Np({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = D1({
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
function R1(e, t) {
  return e.map((n) => t[n]);
}
var Tp = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = R1(i.all, n), a = or({
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
}, Lp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = li({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return nc({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Mp = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && B(!1);
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, c = s[e.critical.draggable.id], l = ze(r);
  l || B(!1);
  const u = a[l], d = Tp({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Lp({
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
}, I1 = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), _p = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = vr(t.axis, e.displaceBy), i = Tn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && B(!1);
  const a = i.slice(s + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: or({
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
        destination: I1(e.descriptor)
      }
    },
    afterCritical: l
  };
}, O1 = (e, t) => ({
  draggables: e.draggables,
  droppables: rc(e.droppables, t)
}), A1 = ({
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
}, $1 = (e) => {
  const t = e.frame;
  return t || B(!1), t;
}, N1 = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = $1(s).scroll.diff.value, l = he(r, c);
    return A1({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, T1 = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((x) => {
    const w = e.dimensions.droppables[x.droppableId];
    return Ja(w, x.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...yp(n)
  }, o = vp(N1({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((x) => {
    delete i[x];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = ze(e.impact), c = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = _p({
    draggable: l,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = Np({
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
const hs = (e) => e.movementMode === "SNAP", Bi = (e, t, n) => {
  const r = O1(e.dimensions, t);
  return !hs(e) || n ? Wn({
    state: e,
    dimensions: r
  }) : Mp({
    state: e,
    dimensions: r
  });
};
function ji(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const su = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var L1 = (e = su, t) => {
  if (t.type === "FLUSH")
    return {
      ...su,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && B(!1);
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
    }, d = si(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = _p({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && B(!1), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || B(!1), T1({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    Zt(e) || B(!1);
    const {
      client: n
    } = t.payload;
    return _t(n, e.current.client.selection) ? e : Wn({
      state: e,
      clientSelection: n,
      impact: hs(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return ji(e);
    Zt(e) || B(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Ja(o, r);
    return Bi(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Zt(e) || B(!1);
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || B(!1), o.isEnabled === r && B(!1);
    const i = {
      ...o,
      isEnabled: r
    };
    return Bi(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    Zt(e) || B(!1);
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || B(!1), o.isCombineEnabled === r && B(!1);
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Bi(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Zt(e) || B(!1), e.isWindowScrollAllowed || B(!1);
    const n = t.payload.newScroll;
    if (_t(e.viewport.scroll.current, n))
      return ji(e);
    const r = Pp(e.viewport, n);
    return hs(e) ? Mp({
      state: e,
      viewport: r
    }) : Wn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Zt(e))
      return e;
    const n = t.payload.maxScroll;
    if (_t(n, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && B(!1);
    const n = h1({
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
    return e.phase !== "COLLECTING" && B(!1), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || B(!1), {
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
const M1 = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), _1 = (e) => ({
  type: "LIFT",
  payload: e
}), k1 = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), F1 = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), B1 = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), j1 = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), V1 = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), z1 = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), kp = (e) => ({
  type: "MOVE",
  payload: e
}), G1 = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), W1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), H1 = () => ({
  type: "MOVE_UP",
  payload: null
}), U1 = () => ({
  type: "MOVE_DOWN",
  payload: null
}), q1 = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), K1 = () => ({
  type: "MOVE_LEFT",
  payload: null
}), oc = () => ({
  type: "FLUSH",
  payload: null
}), Y1 = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), ic = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Fp = (e) => ({
  type: "DROP",
  payload: e
}), X1 = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Bp = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var J1 = (e) => ({
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
  c.phase === "DROP_ANIMATING" && n(ic({
    completed: c.completed
  })), t().phase !== "IDLE" && B(!1), n(oc()), n(M1({
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
  n(k1({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, Q1 = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const sc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, ir = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, jp = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Jt = `${jp.outOfTheWay}s ${sc.outOfTheWay}`, Hn = {
  fluid: `opacity ${Jt}`,
  snap: `transform ${Jt}, opacity ${Jt}`,
  drop: (e) => {
    const t = `${e}s ${sc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Jt}`,
  placeholder: `height ${Jt}, width ${Jt}, margin ${Jt}`
}, au = (e) => _t(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, bs = {
  moveTo: au,
  drop: (e, t) => {
    const n = au(e);
    if (n)
      return t ? `${n} scale(${ir.scale.drop})` : n;
  }
}, {
  minDropTime: ys,
  maxDropTime: Vp
} = jp, Z1 = Vp - ys, cu = 1500, eE = 0.6;
var tE = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = nr(e, t);
  if (r <= 0)
    return ys;
  if (r >= cu)
    return Vp;
  const o = r / cu, i = ys + Z1 * o, s = n === "CANCEL" ? i * eE : i;
  return Number(s.toFixed(2));
}, nE = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = ze(e), c = a ? s[a] : null, l = s[t.descriptor.droppableId], u = Lp({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return Be(u, t.client.borderBox.center);
}, rE = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Tp({
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
    displaced: rr
  },
  didDropInsideDroppable: !0
};
const oE = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(X1({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && B(!1), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || B(!1);
  const a = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = rE({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? Qa(u) : null, p = d ? ai(u) : null, m = {
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
  }, h = nE({
    impact: u,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), x = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: u
  };
  if (!(!_t(o.current.client.offset, h) || !!g.combine)) {
    t(ic({
      completed: x
    }));
    return;
  }
  const y = tE({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(Y1({
    newHomeClientOffset: h,
    dropDuration: y,
    completed: x
  }));
};
var iE = oE, zp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function sE(e) {
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
function aE({
  onWindowScroll: e
}) {
  function t() {
    e(zp());
  }
  const n = tr(t), r = sE(n);
  let o = Mt;
  function i() {
    return o !== Mt;
  }
  function s() {
    i() && B(!1), o = Xe(window, [r]);
  }
  function a() {
    i() || B(!1), n.cancel(), o(), o = Mt;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const cE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", lE = (e) => {
  const t = aE({
    onWindowScroll: (n) => {
      e.dispatch(G1({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && cE(r) && t.stop(), n(r);
  };
};
var uE = lE, dE = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, fE = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && B(!1);
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
const pE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, mE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, gE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, jn = (e, t) => {
  t();
}, Or = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Vi(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = dE(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var hE = (e, t) => {
  const n = fE();
  let r = null;
  const o = (d, f) => {
    r && B(!1), jn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && B(!1), jn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Or(d, f));
    });
  }, s = (d, f) => {
    r && B(!1);
    const p = Or(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      jn("onDragStart", () => Vi(e().onDragStart, p, t, Fr.onDragStart));
    });
  }, a = (d, f) => {
    const p = Qa(f), m = ai(f);
    r || B(!1);
    const g = !gE(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !pE(r.lastLocation, p);
    h && (r.lastLocation = p);
    const x = !mE(r.lastCombine, m);
    if (x && (r.lastCombine = m), !g && !h && !x)
      return;
    const w = {
      ...Or(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      jn("onDragUpdate", () => Vi(e().onDragUpdate, w, t, Fr.onDragUpdate));
    });
  }, c = () => {
    r || B(!1), n.flush();
  }, l = (d) => {
    r || B(!1), r = null, jn("onDragEnd", () => Vi(e().onDragEnd, d, t, Fr.onDragEnd));
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
        ...Or(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, bE = (e, t) => {
  const n = hE(e, t);
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
const yE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && B(!1), e.dispatch(ic({
    completed: r.completed
  }));
};
var vE = yE;
const wE = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Bp());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Xe(window, [s]);
    });
  };
};
var xE = wE, SE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, CE = (e) => {
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
const EE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var PE = (e) => (t) => (n) => (r) => {
  if (EE(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && B(!1), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const DE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Fp({
    reason: r.reason
  })));
};
var RE = DE;
const IE = Yf;
var OE = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Kf(L1, IE(aS(Q1(n), SE(e), J1(e), iE, vE, xE, RE, PE(i), uE, CE(t), bE(r, o))));
const zi = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function AE({
  registry: e,
  callbacks: t
}) {
  let n = zi(), r = null;
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
      n = zi(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = zi());
    }
  };
}
var Gp = ({
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
}, Wp = () => {
  const e = document.documentElement;
  return e || B(!1), e;
}, Hp = () => {
  const e = Wp();
  return Gp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, $E = () => {
  const e = zp(), t = Hp(), n = e.y, r = e.x, o = Wp(), i = o.clientWidth, s = o.clientHeight, a = r + i, c = n + s;
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
}, NE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = $E(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: vp(a),
      droppables: yp(s)
    },
    critical: e,
    viewport: r
  };
};
function lu(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var TE = (e, t) => {
  let n = null;
  const r = AE({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || B(!1), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || B(!1), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || B(!1), t.updateDroppableScroll({
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
    n || B(!1);
    const p = n.critical.draggable;
    f.type === "ADDITION" && lu(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && lu(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (f) => {
      n && B(!1);
      const p = e.draggable.getById(f.draggableId), m = e.droppable.getById(p.descriptor.droppableId), g = {
        draggable: p.descriptor,
        droppable: m.descriptor
      }, h = e.subscribe(l);
      return n = {
        critical: g,
        unsubscribe: h
      }, NE({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, Up = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", LE = (e) => {
  window.scrollBy(e.x, e.y);
};
const ME = de((e) => si(e).filter((t) => !(!t.isEnabled || !t.frame))), _E = (e, t) => ME(t).find((r) => (r.frame || B(!1), Op(r.frame.pageMarginBox)(e))) || null;
var kE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return _E(e, n);
};
const sr = {
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
var FE = (e, t, n = () => sr) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, qp = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, ac = 1, BE = (e, t, n = () => sr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return ac;
  const i = 1 - qp({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, jE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return ac;
  const u = qp({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, uu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = BE(e, t, o);
  return i === 0 ? 0 : r ? Math.max(jE(i, n, o), ac) : i;
}, du = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = FE(e, r, i);
  return t[r.end] < t[r.start] ? uu({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * uu({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, VE = ({
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
const zE = bp((e) => e === 0 ? 0 : e);
var Kp = ({
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
  }, a = du({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Za,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = du({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Sp,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = zE({
    x: c,
    y: a
  });
  if (_t(l, fe))
    return null;
  const u = VE({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? _t(u, fe) ? null : u : null;
};
const GE = bp((e) => e === 0 ? 0 : e > 0 ? 1 : -1), cc = (() => {
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
    return _t(i, fe) ? null : i;
  };
})(), Yp = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = GE(n), i = cc({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, lc = (e, t) => Yp({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), WE = (e, t) => {
  if (!lc(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return cc({
    current: r,
    max: n,
    change: t
  });
}, uc = (e, t) => {
  const n = e.frame;
  return n ? Yp({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, HE = (e, t) => {
  const n = e.frame;
  return !n || !uc(e, t) ? null : cc({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var UE = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Kp({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && lc(e, s) ? s : null;
}, qE = ({
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
  const a = Kp({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && uc(e, a) ? a : null;
}, fu = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = UE({
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
  const l = kE({
    center: s,
    destination: ze(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = qE({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(l.descriptor.id, u);
}, KE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => sr
}) => {
  const r = tr(e), o = tr(t);
  let i = null;
  const s = (l) => {
    i || B(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    fu({
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
      i && B(!1);
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      fu({
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
}, YE = ({
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
    if (!uc(a, c))
      return c;
    const l = HE(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = Be(c, l);
    return t(a.descriptor.id, u), Be(c, u);
  }, i = (a, c, l) => {
    if (!a || !lc(c, l))
      return l;
    const u = WE(c, l);
    if (!u)
      return n(l), null;
    const d = Be(l, u);
    return n(d), Be(l, d);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = ze(a.impact);
    l || B(!1);
    const u = o(a.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, XE = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = KE({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = YE({
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
const Rn = "data-rfd", In = (() => {
  const e = `${Rn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), vs = (() => {
  const e = `${Rn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), JE = (() => {
  const e = `${Rn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), pu = {
  contextId: `${Rn}-scroll-container-context-id`
}, QE = (e) => (t) => `[${t}="${e}"]`, Vn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), ZE = "pointer-events: none;";
var eP = (e) => {
  const t = QE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(In.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: ZE,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Hn.outOfTheWay};
    `;
    return {
      selector: t(vs.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(JE.contextId),
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
    always: Vn(s, "always"),
    resting: Vn(s, "resting"),
    dragging: Vn(s, "dragging"),
    dropAnimating: Vn(s, "dropAnimating"),
    userCancel: Vn(s, "userCancel")
  };
};
const tP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? fo : G;
var Ge = tP;
const Gi = () => {
  const e = document.querySelector("head");
  return e || B(!1), e;
}, mu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function nP(e, t) {
  const n = Y(() => eP(e), [e]), r = V(null), o = V(null), i = z(de((d) => {
    const f = o.current;
    f || B(!1), f.textContent = d;
  }), []), s = z((d) => {
    const f = r.current;
    f || B(!1), f.textContent = d;
  }, []);
  Ge(() => {
    !r.current && !o.current || B(!1);
    const d = mu(t), f = mu(t);
    return r.current = d, o.current = f, d.setAttribute(`${Rn}-always`, e), f.setAttribute(`${Rn}-dynamic`, e), Gi().appendChild(d), Gi().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || B(!1), Gi().removeChild(g), m.current = null;
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
  return Y(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function Xp(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Jp = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function ui(e) {
  return e instanceof Jp(e).HTMLElement;
}
function rP(e, t) {
  const n = `[${In.contextId}="${e}"]`, r = Xp(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(In.draggableId) === t);
  return !o || !ui(o) ? null : o;
}
function oP(e) {
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
    const p = rP(e, f);
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
    p && p.getAttribute(In.draggableId) === f && (n.current = f);
  }, []);
  return Ge(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), Y(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [i, l, c, a]);
}
function iP() {
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
    return f || B(!1), f;
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
    return f || B(!1), f;
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
function sP() {
  const e = Y(iP, []);
  return G(() => function() {
    b.version.startsWith("16") || b.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var dc = b.createContext(null), lo = () => {
  const e = document.body;
  return e || B(!1), e;
};
const aP = {
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
var cP = aP;
const lP = (e) => `rfd-announcement-${e}`;
function uP(e) {
  const t = Y(() => lP(e), [e]), n = V(null);
  return G(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Lt(i.style, cP), lo().appendChild(i), function() {
      setTimeout(function() {
        const c = lo();
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
let dP = 0;
const Qp = {
  separator: "::"
};
function fP(e, t = Qp) {
  return Y(() => `${e}${t.separator}${dP++}`, [t.separator, e]);
}
function pP(e, t = Qp) {
  const n = b.useId();
  return Y(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var fc = "useId" in b ? pP : fP;
function mP({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function gP({
  contextId: e,
  text: t
}) {
  const n = fc("hidden-text", {
    separator: "-"
  }), r = Y(() => mP({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return G(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", lo().appendChild(i), function() {
      const a = lo();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var di = b.createContext(null);
function Zp(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), t;
}
function hP() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && B(!1);
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || B(!1), e = null;
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
function ar(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const bP = 9, yP = 13, pc = 27, em = 32, vP = 33, wP = 34, xP = 35, SP = 36, CP = 37, EP = 38, PP = 39, DP = 40, RP = {
  [yP]: !0,
  [bP]: !0
};
var tm = (e) => {
  RP[e.keyCode] && e.preventDefault();
};
const IP = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var fi = IP;
const nm = 0, gu = 5;
function OP(e, t) {
  return Math.abs(t.x - e.x) >= gu || Math.abs(t.y - e.y) >= gu;
}
const hu = {
  type: "IDLE"
};
function AP({
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
      if (i !== nm)
        return;
      const c = {
        x: s,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && B(!1);
      const u = l.point;
      if (!OP(u, c))
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
      if (o.keyCode === pc) {
        o.preventDefault(), e();
        return;
      }
      tm(o);
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
      if (i.type === "IDLE" && B(!1), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: fi,
    fn: e
  }];
}
function $P(e) {
  const t = V(hu), n = V(Mt), r = Y(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== nm || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
  }), [e]), o = Y(() => ({
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
    n.current = Xe(window, [o, r], d);
  }, [o, r]), s = z(() => {
    t.current.type !== "IDLE" && (t.current = hu, n.current(), i());
  }, [i]), a = z(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), c = z(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = AP({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = Xe(window, f, d);
  }, [a, s]), l = z(function(d, f) {
    t.current.type !== "IDLE" && B(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, c();
  }, [c]);
  Ge(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function NP() {
}
const TP = {
  [wP]: !0,
  [vP]: !0,
  [SP]: !0,
  [xP]: !0
};
function LP(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === pc) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === em) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === DP) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === EP) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === PP) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === CP) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (TP[o.keyCode]) {
        o.preventDefault();
        return;
      }
      tm(o);
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
    eventName: fi,
    fn: n
  }];
}
function MP(e) {
  const t = V(NP), n = Y(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== em)
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
        c || B(!1), c = !1, t.current(), r();
      }
      t.current = Xe(window, LP(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = z(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Xe(window, [n], i);
  }, [n]);
  Ge(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Wi = {
  type: "IDLE"
}, _P = 120, kP = 0.15;
function FP({
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
      n.keyCode === pc && n.preventDefault(), e();
    }
  }, {
    eventName: fi,
    fn: e
  }];
}
function BP({
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
      o.type === "IDLE" && B(!1);
      const i = r.touches[0];
      if (!i || !(i.force >= kP))
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
    eventName: fi,
    fn: e
  }];
}
function jP(e) {
  const t = V(Wi), n = V(Mt), r = z(function() {
    return t.current;
  }, []), o = z(function(p) {
    t.current = p;
  }, []), i = Y(() => ({
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
        clientX: x,
        clientY: w
      } = h, y = {
        x,
        y: w
      };
      n.current(), d(g, y);
    }
  }), [e]), s = z(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = Xe(window, [i], p);
  }, [i]), a = z(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Wi), n.current(), s());
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
    }, g = Xe(window, BP(m), p), h = Xe(window, FP(m), p);
    n.current = function() {
      g(), h();
    };
  }, [c, r, a]), u = z(function() {
    const p = r();
    p.type !== "PENDING" && B(!1);
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = z(function(p, m) {
    r().type !== "IDLE" && B(!1);
    const g = setTimeout(u, _P);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), l();
  }, [l, r, o, u]);
  Ge(function() {
    return s(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Wi));
    };
  }, [r, s, o]), Ge(function() {
    return Xe(window, [{
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
const VP = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function rm(e, t) {
  if (t == null)
    return !1;
  if (VP.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : rm(e, t.parentElement);
}
function zP(e, t) {
  const n = t.target;
  return ui(n) ? rm(e, n) : !1;
}
var GP = (e) => ct(e.getBoundingClientRect()).center;
function WP(e) {
  return e instanceof Jp(e).Element;
}
const HP = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function om(e, t) {
  return e == null ? null : e[HP](t) ? e : om(e.parentElement, t);
}
function UP(e, t) {
  return e.closest ? e.closest(t) : om(e, t);
}
function qP(e) {
  return `[${In.contextId}="${e}"]`;
}
function KP(e, t) {
  const n = t.target;
  if (!WP(n))
    return null;
  const r = qP(e), o = UP(n, r);
  return !o || !ui(o) ? null : o;
}
function YP(e, t) {
  const n = KP(e, t);
  return n ? n.getAttribute(In.draggableId) : null;
}
function XP(e, t) {
  const n = `[${vs.contextId}="${e}"]`, o = Xp(document, n).find((i) => i.getAttribute(vs.id) === t);
  return !o || !ui(o) ? null : o;
}
function JP(e) {
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
function im({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !Up(t.getState(), r));
}
function QP({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!im({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = XP(t, c.descriptor.id);
  if (!l || s && !c.options.canDragInteractiveElements && zP(l, s))
    return null;
  const u = e.claim(i || Mt);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(S, C) {
    Ar({
      expected: S,
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && n.dispatch(C());
  }
  const g = m.bind(null, "DRAGGING");
  function h(S) {
    function C() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (C(), B(!1)), n.dispatch(_1(S.liftActionArgs)), d = "DRAGGING";
    function P(E, $ = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), $.shouldBlockNextClick) {
        const N = Xe(window, [{
          eventName: "click",
          fn: JP,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(N);
      }
      C(), n.dispatch(Fp({
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
      drop: (E) => P("DROP", E),
      cancel: (E) => P("CANCEL", E),
      ...S.actions
    };
  }
  function x(S) {
    const C = tr((E) => {
      g(() => kp({
        client: E
      }));
    });
    return {
      ...h({
        liftActionArgs: {
          id: o,
          clientSelection: S,
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
  function w() {
    const S = {
      moveUp: () => g(H1),
      moveRight: () => g(q1),
      moveDown: () => g(U1),
      moveLeft: () => g(K1)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: GP(l),
        movementMode: "SNAP"
      },
      cleanup: Mt,
      actions: S
    });
  }
  function y() {
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
    fluidLift: x,
    snapLift: w,
    abort: y
  };
}
const ZP = [$P, MP, jP];
function eD({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? ZP : [], ...r || []], s = q(() => hP())[0], a = z(function(h, x) {
    ar(h) && !ar(x) && s.tryAbandon();
  }, [s]);
  Ge(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const w = t.getState();
      a(h, w), h = w;
    });
  }, [s, t, a]), Ge(() => s.tryAbandon, [s.tryAbandon]);
  const c = z((g) => im({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), l = z((g, h, x) => QP({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: x && x.sourceEvent ? x.sourceEvent : null
  }), [e, s, n, t]), u = z((g) => YP(e, g), [e]), d = z((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = z(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(oc()));
  }, [s, t]), p = z(() => s.isClaimed(), [s]), m = Y(() => ({
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
const tD = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    b.version.startsWith("16") || b.version.startsWith("17") ? n() : xs(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), nD = (e) => ({
  ...sr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...sr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function zn(e) {
  return e.current || B(!1), e.current;
}
function rD(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = V(null), a = Zp(e), c = z(() => tD(a.current), [a]), l = z(() => nD(a.current), [a]), u = uP(t), d = gP({
    contextId: t,
    text: i
  }), f = nP(t, o), p = z((N) => {
    zn(s).dispatch(N);
  }, []), m = Y(() => jl({
    publishWhileDragging: F1,
    updateDroppableScroll: j1,
    updateDroppableIsEnabled: V1,
    updateDroppableIsCombineEnabled: z1,
    collectionStarting: B1
  }, p), [p]), g = sP(), h = Y(() => TE(g, m), [g, m]), x = Y(() => XE({
    scrollWindow: LE,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...jl({
      move: kp
    }, p)
  }), [h.scrollDroppable, p, l]), w = oP(t), y = Y(() => OE({
    announce: u,
    autoScroller: x,
    dimensionMarshal: h,
    focusMarshal: w,
    getResponders: c,
    styleMarshal: f
  }), [u, x, h, w, c, f]);
  s.current = y;
  const v = z(() => {
    const N = zn(s);
    N.getState().phase !== "IDLE" && N.dispatch(oc());
  }, []), S = z(() => {
    const N = zn(s).getState();
    return N.phase === "DROP_ANIMATING" ? !0 : N.phase === "IDLE" ? !1 : N.isDragging;
  }, []), C = Y(() => ({
    isDragging: S,
    tryAbort: v
  }), [S, v]);
  n(C);
  const P = z((N) => Up(zn(s).getState(), N), []), E = z(() => Zt(zn(s).getState()), []), $ = Y(() => ({
    marshal: h,
    focus: w,
    contextId: t,
    canLift: P,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, w, P, E, g]);
  return eD({
    contextId: t,
    store: y,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), G(() => v, [v]), b.createElement(di.Provider, {
    value: $
  }, b.createElement(fC, {
    context: dc,
    store: y
  }, e.children));
}
let oD = 0;
function iD() {
  return Y(() => `${oD++}`, []);
}
function sD() {
  return b.useId();
}
var aD = "useId" in b ? sD : iD;
function cD(e) {
  const t = aD(), n = e.dragHandleUsageInstructions || Fr.dragHandleUsageInstructions;
  return b.createElement(EC, null, (r) => b.createElement(rD, {
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
const bu = {
  dragging: 5e3,
  dropAnimating: 4500
}, lD = (e, t) => t ? Hn.drop(t.duration) : e ? Hn.snap : Hn.fluid, uD = (e, t) => {
  if (e)
    return t ? ir.opacity.drop : ir.opacity.combining;
}, dD = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function fD(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = dD(e), c = !!i, l = c ? bs.drop(r, s) : bs.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: lD(a, i),
    transform: l,
    opacity: uD(s, c),
    zIndex: c ? bu.dropAnimating : bu.dragging,
    pointerEvents: "none"
  };
}
function pD(e) {
  return {
    transform: bs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function mD(e) {
  return e.type === "DRAGGING" ? fD(e) : pD(e);
}
function gD(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = fp(o, r), s = io(i, n), a = {
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
function hD(e) {
  const t = fc("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, c = Y(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), l = z((p) => {
    const m = o();
    return m || B(!1), gD(n, m, p);
  }, [n, o]), u = Y(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = V(u), f = V(!0);
  Ge(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ge(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var mc = b.createContext(null);
function uo(e) {
  const t = dt(e);
  return t || B(!1), t;
}
function bD(e) {
  e.preventDefault();
}
const yD = (e) => {
  const t = V(null), n = z((C = null) => {
    t.current = C;
  }, []), r = z(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = uo(di), {
    type: a,
    droppableId: c
  } = uo(mc), l = Y(() => ({
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
    dropAnimationFinished: x
  } = e;
  if (!g) {
    const C = Y(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, s, r, m, p, f]);
    hD(C);
  }
  const w = Y(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: bD
  } : null, [o, i, d, f]), y = z((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (b.version.startsWith("16") || b.version.startsWith("17") ? x() : xs(x));
  }, [x, h]), v = Y(() => {
    const C = mD(h), P = h.type === "DRAGGING" && h.dropping ? y : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: C,
        onTransitionEnd: P
      },
      dragHandleProps: w
    };
  }, [o, w, d, h, y, n]), S = Y(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return b.createElement(b.Fragment, null, u(v, h.snapshot, S));
};
var vD = yD, sm = (e, t) => e === t, am = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const wD = (e) => e.combine ? e.combine.draggableId : null, xD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function SD() {
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
    if (ar(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = ze(o.impact), l = xD(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, u = l.mode, d = am(l), f = wD(l), m = {
        duration: o.dropDuration,
        curve: sc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? ir.opacity.drop : null,
        scale: f ? ir.scale.drop : null
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
function cm(e = null) {
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
const CD = {
  mapped: {
    type: "SECONDARY",
    offset: fe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: cm(null)
  }
};
function ED() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(cm), n = de((s, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(fe, s, !0) : null, o = (s, a, c, l) => {
    const u = c.displaced.visible[s], d = !!(l.inVirtualList && l.effected[s]), f = ai(c), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (c.displaced.invisible[s])
        return null;
      const h = Nn(l.displacedBy.point), x = e(h.x, h.y);
      return n(x, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (ar(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const PD = () => {
  const e = SD(), t = ED();
  return (r, o) => e(r, o) || t(r, o) || CD;
}, DD = {
  dropAnimationFinished: Bp
}, RD = up(PD, DD, null, {
  context: dc,
  areStatePropsEqual: sm
})(vD);
var ID = RD;
function lm(e) {
  return uo(mc).isUsingCloneFor === e.draggableId && !e.isClone ? null : b.createElement(ID, e);
}
function OD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return b.createElement(lm, Lt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const um = (e) => (t) => e === t, AD = um("scroll"), $D = um("auto"), yu = (e, t) => t(e.overflowX) || t(e.overflowY), ND = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return yu(n, AD) || yu(n, $D);
}, TD = () => !1, dm = (e) => e == null ? null : e === document.body ? TD() ? e : null : e === document.documentElement ? null : ND(e) ? e : dm(e.parentElement);
var LD = dm, ws = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const fm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : fm(e.parentElement) : !1;
var MD = (e) => {
  const t = LD(e), n = fm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, _D = ({
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
    } = a, m = Gp({
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
  })(), l = o === "vertical" ? Za : Sp, u = Dn({
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
const kD = (e, t) => {
  const n = pp(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = Ya({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Xa({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var FD = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = kD(e, c), u = io(l, r), d = (() => {
    if (!c)
      return null;
    const p = pp(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: io(p, r),
      scroll: ws(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return _D({
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
const BD = {
  passive: !1
}, jD = {
  passive: !0
};
var vu = (e) => e.shouldPublishImmediately ? BD : jD;
const $r = (e) => e && e.env.closestScrollable || null;
function VD(e) {
  const t = V(null), n = uo(di), r = fc("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Zp(e), a = Y(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = V(a), l = Y(() => de((v, S) => {
    t.current || B(!1);
    const C = {
      x: v,
      y: S
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = z(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? fe : ws(v.env.closestScrollable);
  }, []), d = z(() => {
    const v = u();
    l(v.x, v.y);
  }, [u, l]), f = Y(() => tr(d), [d]), p = z(() => {
    const v = t.current, S = $r(v);
    if (v && S || B(!1), v.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = z((v, S) => {
    t.current && B(!1);
    const C = s.current, P = C.getDroppableRef();
    P || B(!1);
    const E = MD(P), $ = {
      ref: P,
      descriptor: a,
      env: E,
      scrollOptions: S
    };
    t.current = $;
    const N = FD({
      ref: P,
      descriptor: a,
      env: E,
      windowScroll: v,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), T = E.closestScrollable;
    return T && (T.setAttribute(pu.contextId, n.contextId), T.addEventListener("scroll", p, vu($.scrollOptions))), N;
  }, [n.contextId, a, p, s]), g = z(() => {
    const v = t.current, S = $r(v);
    return v && S || B(!1), ws(S);
  }, []), h = z(() => {
    const v = t.current;
    v || B(!1);
    const S = $r(v);
    t.current = null, S && (f.cancel(), S.removeAttribute(pu.contextId), S.removeEventListener("scroll", p, vu(v.scrollOptions)));
  }, [p, f]), x = z((v) => {
    const S = t.current;
    S || B(!1);
    const C = $r(S);
    C || B(!1), C.scrollTop += v.y, C.scrollLeft += v.x;
  }, []), w = Y(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: x
  }), [h, m, g, x]), y = Y(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: w
  }), [w, a, r]);
  Ge(() => (c.current = y.descriptor, o.droppable.register(y), () => {
    t.current && h(), o.droppable.unregister(y);
  }), [w, a, h, y, i, o.droppable]), Ge(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ge(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Hi() {
}
const wu = {
  width: 0,
  height: 0,
  margin: $C
}, zD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? wu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, GD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = zD({
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
    transition: n !== "none" ? Hn.placeholder : null
  };
}, WD = (e) => {
  const t = V(null), n = z(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = q(e.animate === "open");
  G(() => a ? r !== "open" ? (n(), c(!1), Hi) : t.current ? Hi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Hi, [r, a, n]);
  const l = z((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = GD({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return b.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var HD = b.memo(WD);
class UD extends b.PureComponent {
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
const qD = (e) => {
  const t = dt(di);
  t || B(!1);
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = V(null), i = V(null), {
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
    getContainerForClone: x
  } = e, w = z(() => o.current, []), y = z((T = null) => {
    o.current = T;
  }, []);
  z(() => i.current, []);
  const v = z((T = null) => {
    i.current = T;
  }, []), S = z(() => {
    r() && h({
      maxScroll: Hp()
    });
  }, [r, h]);
  VD({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: w
  });
  const C = Y(() => b.createElement(UD, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: M,
    animate: _
  }) => b.createElement(HD, {
    placeholder: M,
    onClose: T,
    innerRef: v,
    animate: _,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, v]), P = Y(() => ({
    innerRef: y,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, y]), E = g ? g.dragging.draggableId : null, $ = Y(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: E
  }), [a, E, c]);
  function N() {
    if (!g)
      return null;
    const {
      dragging: T,
      render: M
    } = g, _ = b.createElement(lm, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (O, L) => M(O, L, T));
    return Eu.createPortal(_, x());
  }
  return b.createElement(mc.Provider, {
    value: $
  }, s(P, m), N());
};
var KD = qD;
function YD() {
  return document.body || B(!1), document.body;
}
const xu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: YD
}, pm = (e) => {
  let t = {
    ...e
  }, n;
  for (n in xu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: xu[n]
    });
  return t;
}, Ui = (e, t) => e === t.droppable.type, Su = (e, t) => t.draggables[e.draggable.id], XD = () => {
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
    const a = pm(s), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (ar(i)) {
      const f = i.critical;
      if (!Ui(l, f))
        return t;
      const p = Su(f, i.dimensions), m = ze(i.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Ui(l, f.critical))
        return t;
      const p = Su(f.critical, i.dimensions);
      return r(c, u, am(f.result) === c, ze(f.impact) === c, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Ui(l, f.critical))
        return t;
      const p = ze(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, JD = {
  updateViewportMaxScroll: W1
}, QD = up(XD, JD, (e, t, n) => ({
  ...pm(n),
  ...e,
  ...t
}), {
  context: dc,
  areStatePropsEqual: sm
})(KD);
var ZD = QD;
function mm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = mm(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function eR() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = mm(e)) && (r && (r += " "), r += t);
  return r;
}
const tR = "_item_1o9ja_1", nR = "_itemDragging_1o9ja_12", rR = "_symbol_1o9ja_16", oR = "_dragHandle_1o9ja_22", Nr = {
  item: tR,
  itemDragging: nR,
  symbol: rR,
  dragHandle: oR
};
function iR({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Wt(), i = t ? t.filterDictionaries : [], s = (c) => {
    if (!t || !c.destination)
      return;
    const l = Array.from(i), [u] = l.splice(c.source.index, 1);
    l.splice(c.destination.index, 0, u), n({ ...t, filterDictionaries: l }), r(!0);
  }, a = i.map((c, l) => /* @__PURE__ */ k.jsx(OD, { index: l, draggableId: c.ifcClassification.location, children: (u, d) => /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: eR(Nr.item, { [Nr.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ k.jsx("div", { ...u.dragHandleProps, className: Nr.dragHandle, children: /* @__PURE__ */ k.jsx(Gx, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ k.jsx(Je, { className: Nr.uri, children: c.ifcClassification.location })
      ]
    }
  ) }, c.ifcClassification.location));
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: o("Sort filter dictionaries") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: o("Sort filter dictionaries help text") })
    ] }),
    /* @__PURE__ */ k.jsx(oe.Panel, { children: /* @__PURE__ */ k.jsx(cD, { onDragEnd: s, children: /* @__PURE__ */ k.jsx(ZD, { droppableId: "dnd-list", direction: "vertical", children: (c) => /* @__PURE__ */ k.jsxs("div", { ...c.droppableProps, ref: c.innerRef, children: [
      a,
      c.placeholder
    ] }) }) }) })
  ] }, e);
}
function sR({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = Wt(), i = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ k.jsx(
    No,
    {
      label: r("Language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("Select language")
    }
  );
}
function aR({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Wt(), i = Ba(), s = Ct(Fo), a = t ? t.includeTestDictionaries : !1, c = V();
  return G(() => {
    s && i(Sx(s));
  }, [i, s]), G(() => {
    if (!s)
      return;
    const l = {
      bsddApiEnvironment: s,
      includeTestDictionaries: a
    };
    c.current && c.current.bsddApiEnvironment === l.bsddApiEnvironment && c.current.includeTestDictionaries === l.includeTestDictionaries || (i(fs(l)), c.current = l);
  }, [i, s, a]), /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: o("General settings") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: o("General settings help text") })
    ] }),
    /* @__PURE__ */ k.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ k.jsx(sR, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ k.jsx(Ea, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        Io,
        {
          label: o("ShowPreview"),
          checked: a,
          type: "checkbox",
          onChange: (l) => {
            t && (n({ ...t, includeTestDictionaries: l.currentTarget.checked }), r(!0));
          }
        }
      )
    ] })
  ] }, e);
}
function cR({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r
}) {
  const { t: o } = Wt(), { mainDictionary: i, filterDictionaries: s } = t || { mainDictionary: null, filterDictionaries: [] }, [a, c] = q([]);
  G(() => {
    const u = i ? [i, ...s] : s, d = new Map(u.map((p) => [p.ifcClassification.location, p])), f = Array.from(d.values());
    c(f);
  }, [i, s]);
  const l = (u, d) => {
    var p;
    if (!t)
      return;
    const f = { ...t };
    if (((p = f.mainDictionary) == null ? void 0 : p.ifcClassification.location) === u) {
      const m = {
        ...f.mainDictionary,
        parameterMapping: d
      };
      f.mainDictionary = m;
    } else
      f.filterDictionaries = f.filterDictionaries.map((m) => m.ifcClassification.location === u ? { ...m, parameterMapping: d } : m);
    n(f), r(!0);
  };
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: o("Parameter mapping") }),
      /* @__PURE__ */ k.jsx(Je, { size: "xs", c: "dimmed", children: o("Parameter mapping help text") })
    ] }),
    /* @__PURE__ */ k.jsx(oe.Panel, { children: a.map((u) => /* @__PURE__ */ k.jsxs("div", { style: { marginBottom: "1em" }, children: [
      /* @__PURE__ */ k.jsx(
        Oa,
        {
          label: u.ifcClassification.location,
          placeholder: "Enter a revit type parameter",
          value: u.parameterMapping,
          onChange: (d) => l(u.ifcClassification.location, d.currentTarget.value)
        }
      ),
      " "
    ] }, u.ifcClassification.location)) })
  ] }, e);
}
function lR() {
  const e = Ba(), t = Ct((u) => u.settings), [n, r] = q(), [o, i] = q(!1), [s, a] = q(!0);
  G(() => {
    r(t);
  }, [t]);
  const c = () => {
    var u;
    console.log("Saving", n), n && (e(ka(n)), (u = window == null ? void 0 : window.bsddBridge) == null || u.saveSettings(JSON.stringify(n)), i(!1));
  }, l = () => {
    r(t), i(!1);
  };
  return /* @__PURE__ */ k.jsxs(at.Panel, { value: "settings", children: [
    /* @__PURE__ */ k.jsxs(oe, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ k.jsx(
        aR,
        {
          id: 1,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ k.jsx(
        nS,
        {
          id: 2,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i,
          setIsLoading: a
        }
      ),
      /* @__PURE__ */ k.jsx(
        cR,
        {
          id: 3,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ k.jsx(
        iR,
        {
          id: 4,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      )
    ] }),
    /* @__PURE__ */ k.jsxs(xn, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ k.jsx(
        Kn,
        {
          fullWidth: !0,
          loading: s,
          onClick: c,
          disabled: !o,
          variant: s ? "light" : "filled",
          loaderProps: { type: "dots" },
          children: "Save"
        }
      ),
      /* @__PURE__ */ k.jsx(Kn, { fullWidth: !0, variant: "light", onClick: l, disabled: !o, children: "Cancel" })
    ] })
  ] });
}
const uR = (e) => async (t, n) => {
  const r = n(), o = Al(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Al(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(ka(s));
};
function dR() {
  const e = Ba(), { t } = Wt(), n = Ct(wx), [r, o] = q(null), i = (s) => {
    o(s);
  };
  return G(() => {
    n && r && e(uR(r));
  }, [n, r, e]), G(() => {
  }, [e]), G(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const a = await window.bsddBridge.loadSettings(), c = JSON.parse(a);
        console.log("initial loadSettings selection", c), i(c);
      }
    })();
  }, []), window.updateSelection = (s) => {
    console.log("updateSelection", s), e(Ax(s));
  }, window.updateSettings = (s) => {
    console.log("updateSettings", s), i(s);
  }, /* @__PURE__ */ k.jsx(ya, { size: "40rem", children: /* @__PURE__ */ k.jsxs(at, { defaultValue: "link", children: [
    /* @__PURE__ */ k.jsxs(at.List, { grow: !0, children: [
      /* @__PURE__ */ k.jsx(at.Tab, { value: "link", children: t("Link") }),
      /* @__PURE__ */ k.jsx(at.Tab, { value: "settings", children: t("Settings") })
    ] }),
    /* @__PURE__ */ k.jsx(eS, {}),
    /* @__PURE__ */ k.jsx(lR, {})
  ] }) });
}
function fR() {
  return /* @__PURE__ */ k.jsx(ed, { theme: n0, children: /* @__PURE__ */ k.jsx(dR, {}) });
}
const pR = j0({
  reducer: {
    settings: gx,
    ifcData: $x,
    bsdd: Cx
  }
});
qi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ k.jsx(b.StrictMode, { children: /* @__PURE__ */ k.jsx(ag, { store: pR, children: /* @__PURE__ */ k.jsx(fR, {}) }) })
);
