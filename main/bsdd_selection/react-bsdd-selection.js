var jm = Object.defineProperty;
var zm = (e, t, n) => t in e ? jm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => (zm(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as I from "react";
import b, { createContext as Ut, useContext as ft, useState as q, useRef as z, useEffect as G, useMemo as kt, useCallback as Q, useLayoutEffect as vo, useId as Ru, forwardRef as ie, cloneElement as ln, Children as Vm, createElement as Dc } from "react";
import * as Wm from "react-dom";
import Ou, { flushSync as Is, createPortal as Gm, unstable_batchedUpdates as Hm } from "react-dom";
function Au(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nu = { exports: {} }, wo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Um = b, qm = Symbol.for("react.element"), Km = Symbol.for("react.fragment"), Ym = Object.prototype.hasOwnProperty, Jm = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function $u(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Ym.call(t, r) && !Xm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: qm, type: e, key: i, ref: s, props: o, _owner: Jm.current };
}
wo.Fragment = Km;
wo.jsx = $u;
wo.jsxs = $u;
Nu.exports = wo;
var M = Nu.exports, Zi = {}, Ic = Ou;
Zi.createRoot = Ic.createRoot, Zi.hydrateRoot = Ic.hydrateRoot;
var Tu = { exports: {} }, Lu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr = b;
function Qm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Zm = typeof Object.is == "function" ? Object.is : Qm, eg = pr.useSyncExternalStore, tg = pr.useRef, ng = pr.useEffect, rg = pr.useMemo, og = pr.useDebugValue;
Lu.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = tg(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = rg(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, Zm(u, p))
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
  var a = eg(e, i[0], i[1]);
  return ng(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), og(a), a;
};
Tu.exports = Lu;
var ig = Tu.exports, Be = (
  // prettier-ignore
  // @ts-ignore
  "default" in I ? I.default : I
), Rc = Symbol.for("react-redux-context"), Oc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function sg() {
  if (!Be.createContext)
    return {};
  const e = Oc[Rc] ?? (Oc[Rc] = /* @__PURE__ */ new Map());
  let t = e.get(Be.createContext);
  return t || (t = Be.createContext(
    null
  ), e.set(Be.createContext, t)), t;
}
var jt = /* @__PURE__ */ sg(), ag = () => {
  throw new Error("uSES not initialized!");
};
function Rs(e = jt) {
  return function() {
    return Be.useContext(e);
  };
}
var Mu = /* @__PURE__ */ Rs(), ku = ag, cg = (e) => {
  ku = e;
}, lg = (e, t) => e === t;
function ug(e = jt) {
  const t = e === jt ? Mu : Rs(e), n = (r, o = {}) => {
    const { equalityFn: i = lg, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = t();
    Be.useRef(!0);
    const f = Be.useCallback(
      {
        [r.name](m) {
          return r(m);
        }
      }[r.name],
      [r, u, s.stabilityCheck]
    ), p = ku(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      f,
      i
    );
    return Be.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var dg = /* @__PURE__ */ ug();
function fg(e) {
  e();
}
function pg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      fg(() => {
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
var Ac = {
  notify() {
  },
  get: () => []
};
function mg(e, t) {
  let n, r = Ac, o = 0, i = !1;
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = pg());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Ac);
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
var gg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", hg = gg ? Be.useLayoutEffect : Be.useEffect;
function bg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Be.useMemo(() => {
    const l = mg(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Be.useMemo(() => e.getState(), [e]);
  hg(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || jt;
  return /* @__PURE__ */ Be.createElement(c.Provider, { value: s }, n);
}
var yg = bg;
function _u(e = jt) {
  const t = e === jt ? Mu : (
    // @ts-ignore
    Rs(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var vg = /* @__PURE__ */ _u();
function wg(e = jt) {
  const t = e === jt ? vg : _u(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var xg = /* @__PURE__ */ wg();
cg(ig.useSyncExternalStoreWithSelector);
const Sg = {
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
class Hr {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || Sg, this.options = n, this.debug = n.debug;
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
    return new Hr(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Hr(this.logger, t);
  }
}
var gt = new Hr();
class xo {
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
function Bn() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Nc(e) {
  return e == null ? "" : "" + e;
}
function Cg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function Os(e, t, n) {
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
function $c(e, t, n) {
  const {
    obj: r,
    k: o
  } = Os(e, t, Object);
  r[o] = n;
}
function Eg(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = Os(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function Ur(e, t) {
  const {
    obj: n,
    k: r
  } = Os(e, t);
  if (n)
    return n[r];
}
function Pg(e, t, n) {
  const r = Ur(e, n);
  return r !== void 0 ? r : Ur(t, n);
}
function Fu(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Fu(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function pn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Dg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Ig(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Dg[t]) : e;
}
const Rg = [" ", ",", "?", "!", ";"];
function Og(e, t, n) {
  t = t || "", n = n || "";
  const r = Rg.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
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
function qr(e, t) {
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
      return l ? qr(c, l, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function Kr(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class Tc extends xo {
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
    const c = Ur(this.data, a);
    return c || !s || typeof r != "string" ? c : qr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), $c(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
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
    let c = Ur(this.data, a) || {};
    o ? Fu(c, r, i) : c = {
      ...c,
      ...r
    }, $c(this.data, a, c), s.silent || this.emit("added", t, n, r);
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
var Bu = {
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
const Lc = {};
class Yr extends xo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Cg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = gt.create("translator");
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
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Og(t, r, o);
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
    const p = d && d.usedKey || s, m = d && d.exactUsedKey || s, g = Object.prototype.toString.apply(f), h = ["[object Number]", "[object Function]", "[object RegExp]"], w = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (x && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && h.indexOf(g) < 0 && !(typeof w == "string" && g === "[object Array]")) {
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
    } else if (x && typeof w == "string" && g === "[object Array]")
      f = f.join(w), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let v = !1, S = !1;
      const C = n.count !== void 0 && typeof n.count != "string", P = Yr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", N = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", $ = n[`defaultValue${E}`] || n[`defaultValue${N}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (v = !0, f = $), this.isValidLookup(f) || (S = !0, f = s);
      const k = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, _ = P && $ !== f && this.options.updateMissing;
      if (S || v || _) {
        if (this.logger.log(_ ? "updateKey" : "missingKey", l, c, s, _ ? $ : f), i) {
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
        const R = (F, A, H) => {
          const K = P && H !== f ? H : k;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, c, A, K, _, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(F, c, A, K, _, n), this.emit("missingKey", F, c, A, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? O.forEach((F) => {
          this.pluralResolver.getSuffixes(F, n).forEach((A) => {
            R([F], s + A, n[`defaultValue${A}`] || $);
          });
        }) : R(O, s, $));
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
    return t != null && c && c.length && r.applyPostProcessor !== !1 && (t = Bu.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(r) || (a = h, !Lc[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Lc[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((w) => {
          if (this.isValidLookup(r))
            return;
          s = w;
          const x = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(x, u, w, h, n);
          else {
            let v;
            f && (v = this.pluralResolver.getSuffix(w, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (x.push(u + v), n.ordinal && v.indexOf(C) === 0 && x.push(u + v.replace(C, this.options.pluralSeparator)), p && x.push(u + S)), m) {
              const P = `${u}${this.options.contextSeparator}${n.context}`;
              x.push(P), f && (x.push(P + v), n.ordinal && v.indexOf(C) === 0 && x.push(P + v.replace(C, this.options.pluralSeparator)), p && x.push(P + S));
            }
          }
          let y;
          for (; y = x.pop(); )
            this.isValidLookup(r) || (i = y, r = this.getResource(w, h, y, n));
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
function xi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Mc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = gt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Kr(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Kr(t), !t || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = xi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = xi(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = xi(r[2].toLowerCase()))), r.join("-");
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
let Ag = [{
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
}], Ng = {
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
const $g = ["v1", "v2", "v3"], Tg = ["v4"], kc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Lg() {
  const e = {};
  return Ag.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: Ng[t.fc]
      };
    });
  }), e;
}
class Mg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = gt.create("pluralResolver"), (!this.options.compatibilityJSON || Tg.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Lg();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Kr(t), {
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => kc[o] - kc[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    return !$g.includes(this.options.compatibilityJSON);
  }
}
function _c(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Pg(e, t, n);
  return !i && o && typeof n == "string" && (i = qr(e, n, r), i === void 0 && (i = qr(t, n, r))), i;
}
class kg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = gt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const n = t.interpolation;
    this.escape = n.escape !== void 0 ? n.escape : Ig, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? pn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? pn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? pn(n.nestingPrefix) : n.nestingPrefixEscaped || pn("$t("), this.nestingSuffix = n.nestingSuffix ? pn(n.nestingSuffix) : n.nestingSuffixEscaped || pn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
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
        const x = _c(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : x;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), w = g.join(this.formatSeparator).trim();
      return this.format(_c(n, c, h, this.options.keySeparator, this.options.ignoreJSONStructure), w, r, {
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
          typeof s != "string" && !this.useRawValueToEscape && (s = Nc(s));
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
      typeof i != "string" && (i = Nc(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function _g(e) {
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
function mn(e) {
  const t = {};
  return function(r, o, i) {
    const s = o + JSON.stringify(i);
    let a = t[s];
    return a || (a = e(Kr(o), i), t[s] = a), a(r);
  };
}
class Fg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = gt.create("formatter"), this.options = t, this.formats = {
      number: mn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      currency: mn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: mn((n, r) => {
        const o = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      relativetime: mn((n, r) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i, r.range || "day");
      }),
      list: mn((n, r) => {
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
    this.formats[t.toLowerCase().trim()] = mn(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = _g(c);
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
function Bg(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class jg extends xo {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = gt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
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
      Eg(c.loaded, [i], s), Bg(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
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
function Fc() {
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
function Bc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Or() {
}
function zg(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Jn extends xo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Bc(t), this.services = {}, this.logger = gt, this.modules = {
      external: []
    }, zg(this), n && !this.isInitialized && !t.isClone) {
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
    const o = Fc();
    this.options = {
      ...o,
      ...this.options,
      ...Bc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? gt.init(i(this.modules.logger), this.options) : gt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Fg);
      const d = new Mc(this.options);
      this.store = new Tc(this.options.resources, this.options);
      const f = this.services;
      f.logger = gt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Mg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new kg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new jg(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Yr(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Or), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = Bn(), l = () => {
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
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Or;
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
    const o = Bn();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Or), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Bu.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = Bn();
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
    const r = Bn();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Bn();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Mc(Fc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Jn(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Or;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Jn(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new Tc(this.store.data, o), i.services.resourceStore = i.store), i.translator = new Yr(i.services, o), i.translator.on("*", function(a) {
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
const be = Jn.createInstance();
be.createInstance = Jn.createInstance;
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
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _t.apply(this, arguments);
}
function Vg() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const jc = {};
function es() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && jc[t[0]] || (typeof t[0] == "string" && (jc[t[0]] = /* @__PURE__ */ new Date()), Vg(...t));
}
const ju = (e, t) => () => {
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
function zc(e, t, n) {
  e.loadNamespaces(t, ju(e, n));
}
function Vc(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, ju(e, r));
}
function Wg(e, t) {
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
function Gg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (es("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : Wg(e, t, n);
}
const Hg = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ug = {
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
}, qg = (e) => Ug[e], Kg = (e) => e.replace(Hg, qg);
let ts = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Kg
};
function Yg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ts = {
    ...ts,
    ...e
  };
}
function Jg() {
  return ts;
}
let zu;
function Xg(e) {
  zu = e;
}
function Qg() {
  return zu;
}
const Zg = {
  type: "3rdParty",
  init(e) {
    Yg(e.options.react), Xg(e);
  }
}, eh = Ut();
class th {
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
const nh = (e, t) => {
  const n = z();
  return G(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function Ot(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = ft(eh) || {}, i = n || r || Qg();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new th()), !i) {
    es("You will need to pass in an i18next instance by using initReactI18next");
    const y = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, v = [y, {}, !1];
    return v.t = y, v.i18n = {}, v.ready = !1, v;
  }
  i.options.react && i.options.react.wait !== void 0 && es("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Jg(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = e || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((y) => Gg(y, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, p] = q(d);
  let m = l.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = nh(m), h = z(!0);
  G(() => {
    const {
      bindI18n: y,
      bindI18nStore: v
    } = s;
    h.current = !0, !u && !a && (t.lng ? Vc(i, t.lng, l, () => {
      h.current && p(d);
    }) : zc(i, l, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function S() {
      h.current && p(d);
    }
    return y && i && i.on(y, S), v && i && i.store.on(v, S), () => {
      h.current = !1, y && i && y.split(" ").forEach((C) => i.off(C, S)), v && i && v.split(" ").forEach((C) => i.store.off(C, S));
    };
  }, [i, m]);
  const w = z(!0);
  G(() => {
    h.current && !w.current && p(d), w.current = !1;
  }, [i, c]);
  const x = [f, i, u];
  if (x.t = f, x.i18n = i, x.ready = u, u || !u && !a)
    return x;
  throw new Promise((y) => {
    t.lng ? Vc(i, t.lng, l, () => y()) : zc(i, l, () => y());
  });
}
be.use(Zg).init({
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
function bt(e) {
  return Object.keys(e);
}
function Si(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function As(e, t) {
  const n = { ...e }, r = t;
  return Si(e) && Si(t) && Object.keys(t).forEach((o) => {
    Si(r[o]) && o in e ? n[o] = As(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function rh(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function oh(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function ih(e) {
  const t = oh(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function Ci(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function Vu(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return "0";
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Ci(o) : o;
    }
    if (typeof r == "string") {
      if (r.startsWith("calc(") || r.startsWith("var(") || r.startsWith("clamp("))
        return r;
      if (r.includes(" "))
        return r.split(" ").map((i) => n(i)).join(" ");
      if (r.includes(e))
        return t ? Ci(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? Ci(i) : i;
      }
    }
    return r;
  }
  return n;
}
const D = Vu("rem", { shouldScale: !0 }), Wc = Vu("em");
function Ns(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Wu(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function qt(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== b.Fragment : !1;
}
function Kt(e) {
  const t = Ut(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => {
    const o = ft(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function $s(e = null) {
  const t = Ut(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => ft(t)];
}
function Jr(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function ns(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function sh(e, t, n) {
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
function ah(e, t, n) {
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
function ch(e, t, n) {
  return ns(e, n) === ns(t, n);
}
function Gu({
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
      ((m = ns(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => ch(a.currentTarget, g, e)), l = c.findIndex((g) => a.currentTarget === g), u = ah(l, c, r), d = sh(l, c, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
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
const lh = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function mr(e) {
  return lh[e];
}
const uh = () => {
};
function dh(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || uh : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function se(e, t = "size", n = !0) {
  if (e !== void 0)
    return Wu(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function Hu(e) {
  return se(e, "mantine-spacing");
}
function Me(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : se(e, "mantine-radius");
}
function ze(e) {
  return se(e, "mantine-font-size");
}
function fh(e) {
  return se(e, "mantine-line-height", !1);
}
function ph(e) {
  if (e)
    return se(e, "mantine-shadow", !1);
}
function Xr(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Uu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Uu(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function xt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Uu(e)) && (r && (r += " "), r += t);
  return r;
}
const mh = {};
function gh(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = xt(t[r], o) : t[r] = o;
    });
  }), t;
}
function So({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || mh
  );
  return gh(i);
}
function Qr({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function qu() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function tn(e) {
  const t = z(e);
  return G(() => {
    t.current = e;
  }), kt(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Co(e, t) {
  const n = tn(e), r = z(0);
  return G(() => () => window.clearTimeout(r.current), []), Q(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const Gc = ["mousedown", "touchstart"];
function hh(e, t, n) {
  const r = z();
  return G(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((l) => !!l && !i.composedPath().includes(l)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || Gc).forEach((i) => document.addEventListener(i, o)), () => {
      (t || Gc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function bh(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function yh(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function vh(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = q(
    n ? t : yh(e, t)
  ), i = z();
  return G(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), bh(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const gr = typeof document < "u" ? vo : G;
function zt(e, t) {
  const n = z(!1);
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
function wh({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = z(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return zt(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [e, t]), r;
}
function xh(e, t = "body > :not(script)") {
  const n = qu(), r = Array.from(
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
const Sh = /input|select|textarea|button|object/, Ku = "a, input, select, textarea, button, object, [tabindex]";
function Ch(e) {
  return e.style.display === "none";
}
function Eh(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (Ch(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function Yu(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function rs(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(Yu(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Sh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && Eh(e);
}
function Ju(e) {
  const t = Yu(e);
  return (Number.isNaN(t) || t >= 0) && rs(e);
}
function Ph(e) {
  return Array.from(e.querySelectorAll(Ku)).filter(Ju);
}
function Dh(e, t) {
  const n = Ph(e);
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
function Ih(e = !0) {
  const t = z(), n = z(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Ku));
      s = a.find(Ju) || a.find(rs) || null, !s && rs(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = Q(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = xh(i), t.current !== i && (i ? (setTimeout(() => {
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
      s.key === "Tab" && t.current && Dh(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const Rh = b["useId".toString()] || (() => {
});
function Oh() {
  const e = Rh();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function St(e) {
  const t = Oh(), [n, r] = q(t);
  return gr(() => {
    r(qu());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function Xu(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Qu(...e) {
  return (t) => {
    e.forEach((n) => Xu(n, t));
  };
}
function Ae(...e) {
  return Q(Qu(...e), e);
}
function Pt({
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
function Zu(e, t) {
  return vh("(prefers-reduced-motion: reduce)", e, t);
}
function Ah(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = q(e), s = Q(() => {
    i((l) => l || (n == null || n(), !0));
  }, [n]), a = Q(() => {
    i((l) => l && (r == null || r(), !1));
  }, [r]), c = Q(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: c }];
}
const ed = Ut(null);
function Ts() {
  const e = ft(ed);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Nh() {
  return Ts().cssVariablesResolver;
}
function $h() {
  return Ts().classNamesPrefix;
}
function Ls() {
  return Ts().getStyleNonce;
}
function Th(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function Lh(e) {
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
function Mh(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function kh(e) {
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
function td(e) {
  return Th(e) ? Lh(e) : e.startsWith("rgb") ? Mh(e) : e.startsWith("hsl") ? kh(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Ar(e, t) {
  if (e.startsWith("var("))
    return e;
  const { r: n, g: r, b: o, a: i } = td(e), s = 1 - t, a = (c) => Math.round(c * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function os(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function Eo({
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
    value: i !== void 0 ? t.colors[r][i] : t.colors[r][os(t, n || "light")],
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
function vt(e, t) {
  const n = Eo({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function is(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = vt(n.from, t), o = vt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Re(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: n, g: r, b: o } = td(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const _h = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = Eo({ color: e, theme: t });
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
      hover: Ar(e, 0.1),
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
        background: Re(i, 0.1),
        hover: Re(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: Re(e, 0.1),
      hover: Re(e, 0.12),
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
      hover: Re(t.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${D(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: Re(e, 0.05),
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
        hover: Re(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Re(e, 0.12),
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
    hover: Ar(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Ar(t.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Ar(t.white, 0.01),
    color: e,
    border: `${D(1)} solid transparent`
  } : n === "gradient" ? {
    background: is(r, t),
    hover: is(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${D(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Fh = {
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
}, Hc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Ms = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Fh,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: _h,
  fontFamily: Hc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Hc,
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
function Uc(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Bh({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return Uc(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && Uc(r.newValue) && n(r.newValue);
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
const jh = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", qc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Ei(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Kc(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(jh);
  if (typeof e.primaryShade == "object" && (!Ei(e.primaryShade.dark) || !Ei(e.primaryShade.light)))
    throw new Error(qc);
  if (typeof e.primaryShade == "number" && !Ei(e.primaryShade))
    throw new Error(qc);
}
function zh(e, t) {
  var r;
  if (!t)
    return Kc(e), e;
  const n = As(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Kc(n), n;
}
const ks = Ut(null), Vh = () => ft(ks) || Ms;
function pt() {
  const e = ft(ks);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function nd({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = Vh(), o = kt(
    () => zh(n ? r : Ms, e),
    [e, r, n]
  );
  return /* @__PURE__ */ b.createElement(ks.Provider, { value: o }, t);
}
nd.displayName = "@mantine/core/MantineThemeProvider";
function Wh() {
  const e = pt(), t = Ls(), n = bt(e.breakpoints).reduce((r, o) => {
    const i = ih(e.breakpoints[o]);
    return `${r}@media (max-width: ${Wc(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Wc(
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
function Pi(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function Di(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Gh(e, t) {
  const n = Pi(e.variables), r = n ? Di(t, n) : "", o = Pi(e.dark), i = o ? Di(`${t}[data-mantine-color-scheme="dark"]`, o) : "", s = Pi(e.light), a = s ? Di(`${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function gn(e, t, n) {
  bt(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const rd = (e) => {
  const t = os(e, "dark"), n = os(e, "light"), r = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : D(e.defaultRadius), o = {
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
  gn(o.variables, e.breakpoints, "breakpoint"), gn(o.variables, e.spacing, "spacing"), gn(o.variables, e.fontSizes, "font-size"), gn(o.variables, e.lineHeights, "line-height"), gn(o.variables, e.shadows, "shadow"), gn(o.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((s, a) => {
    o.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${e.primaryColor}-${a})`;
  }), bt(e.colors).forEach((s) => {
    e.colors[s].forEach((l, u) => {
      o.variables[`--mantine-color-${s}-${u}`] = l;
    });
    const a = `var(--mantine-color-${s}-${n === 9 ? 8 : n + 1})`, c = `var(--mantine-color-${s}-${t === 9 ? 8 : t + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-filled-hover`] = a, o.light[`--mantine-color-${s}-light`] = Re(
      e.colors[s][n],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = Re(
      e.colors[s][n],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline-hover`] = Re(
      e.colors[s][n],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.dark[`--mantine-color-${s}-filled-hover`] = c, o.dark[`--mantine-color-${s}-light`] = Re(
      e.colors[s][Math.max(0, t - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = Re(
      e.colors[s][Math.max(0, t - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      t - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      t - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = Re(
      e.colors[s][Math.max(t - 4, 0)],
      0.05
    );
  });
  const i = e.headings.sizes;
  return bt(i).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = i[s].fontSize, o.variables[`--mantine-${s}-line-height`] = i[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = i[s].fontWeight || e.headings.fontWeight;
  }), o;
};
function Hh({ theme: e, generator: t }) {
  const n = rd(e), r = t == null ? void 0 : t(e);
  return r ? As(n, r) : n;
}
const Ii = rd(Ms);
function Uh(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return bt(e.variables).forEach((n) => {
    Ii.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), bt(e.light).forEach((n) => {
    Ii.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), bt(e.dark).forEach((n) => {
    Ii.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function qh(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function od({ cssVariablesSelector: e }) {
  const t = pt(), n = Ls(), r = Nh(), o = Hh({ theme: t, generator: r }), i = e === ":root", s = i ? Uh(o) : o, a = Gh(s, e);
  return a ? /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${a}${i ? "" : qh(e)}`
      }
    }
  ) : null;
}
od.displayName = "@mantine/CssVariables";
function Kh() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function jn(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function Yh({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = z(), [i, s] = q(() => e.get(t)), a = r || i, c = Q(
    (u) => {
      r || (jn(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), l = Q(() => {
    s(t), jn(t, n), e.clear();
  }, [e.clear, t]);
  return G(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), gr(() => {
    jn(e.get(t), n);
  }, []), G(() => {
    var d;
    if (r)
      return jn(r, n), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && jn(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function Jh({
  respectReducedMotion: e,
  getRootElement: t
}) {
  gr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
Kh();
function id({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = Bh(),
  defaultColorScheme: a = "light",
  getRootElement: c = () => document.documentElement,
  cssVariablesResolver: l,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = Yh({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: c
  });
  return Jh({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: c
  }), /* @__PURE__ */ b.createElement(
    ed.Provider,
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
    /* @__PURE__ */ b.createElement(nd, { theme: e }, r && /* @__PURE__ */ b.createElement(od, { cssVariablesSelector: o }), /* @__PURE__ */ b.createElement(Wh, null), t)
  );
}
id.displayName = "@mantine/core/MantineProvider";
function sd({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = pt();
  return {
    resolvedClassNames: So({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0
    }),
    resolvedStyles: Qr({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const Xh = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Qh({ theme: e, options: t, unstyled: n }) {
  return xt(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || Xh[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function Zh({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return So({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e];
}
function eb({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return So({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function tb({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function nb({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function rb({
  themeName: e,
  classNamesPrefix: t,
  selector: n
}) {
  return e.map((r) => `${t}-${r}-${n}`);
}
function ob({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (i) => {
      var s, a;
      return (a = So({
        theme: t,
        classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function ib({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function sb({
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
  return xt(
    Qh({ theme: e, options: t, unstyled: a }),
    ob({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    ib({ options: t, classes: s, selector: r, unstyled: a }),
    eb({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    Zh({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    tb({ rootSelector: l, selector: r, className: c }),
    nb({ selector: r, classes: s, unstyled: a }),
    rb({ themeName: n, classNamesPrefix: o, selector: r }),
    t == null ? void 0 : t.className
  );
}
function ab({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (i) => {
      var s;
      return Qr({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, s) => ({ ...i, ...s }), {});
}
function ss({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ss({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function cb(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...Ns(n[r]) };
  }), t), {});
}
function lb({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s
}) {
  var a;
  return (a = cb([
    t == null ? void 0 : t(n, r, o),
    ...s.map((c) => {
      var l, u, d;
      return (d = (u = (l = n.components) == null ? void 0 : l[c]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : a[i];
}
function ub({
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
    ...ab({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...Qr({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...Qr({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...lb({ theme: e, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? ss({ style: c, theme: e }) : null,
    ...ss({ style: r == null ? void 0 : r.style, theme: e })
  };
}
function J({
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
  const f = pt(), p = $h(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: sb({
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
    style: ub({
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
  const r = pt(), o = (s = r.components[e]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...Ns(n) };
}
function Yc(e) {
  return bt(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${rh(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function db({ selector: e, styles: t, media: n }) {
  const r = t ? Yc(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${Yc(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function fb({ selector: e, styles: t, media: n }) {
  const r = Ls();
  return /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: db({ selector: e, styles: t, media: n }) }
    }
  );
}
function hr(e) {
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
    ff: x,
    fz: y,
    fw: v,
    lts: S,
    ta: C,
    lh: P,
    fs: E,
    tt: N,
    td: $,
    w: T,
    miw: k,
    maw: _,
    h: O,
    mih: L,
    mah: R,
    bgsz: F,
    bgp: A,
    bgr: H,
    bga: K,
    pos: ne,
    top: ye,
    left: ue,
    bottom: Ne,
    right: ve,
    inset: re,
    display: we,
    hiddenFrom: ke,
    visibleFrom: Ce,
    lightHidden: Ee,
    darkHidden: _e,
    ...ce
  } = e;
  return { styleProps: Ns({
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
    ff: x,
    fz: y,
    fw: v,
    lts: S,
    ta: C,
    lh: P,
    fs: E,
    tt: N,
    td: $,
    w: T,
    miw: k,
    maw: _,
    h: O,
    mih: L,
    mah: R,
    bgsz: F,
    bgp: A,
    bgr: H,
    bga: K,
    pos: ne,
    top: ye,
    left: ue,
    bottom: Ne,
    right: ve,
    inset: re,
    display: we,
    hiddenFrom: ke,
    visibleFrom: Ce,
    lightHidden: Ee,
    darkHidden: _e
  }), rest: ce };
}
const pb = {
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
function mb(e, t) {
  const n = Eo({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : n.variable ? `var(${n.variable})` : n.color;
}
function gb(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? D(e) : e;
}
function hb(e) {
  return e;
}
function bb(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : e;
}
function yb(e) {
  return typeof e == "number" ? D(e) : e;
}
function vb(e, t) {
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
const Ri = {
  color: mb,
  fontSize: gb,
  spacing: vb,
  identity: hb,
  size: yb,
  lineHeight: bb
};
function Jc(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function wb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(Jc(o)) - Number(Jc(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function xb(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function Sb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Cb(e) {
  return typeof e == "object" && e !== null ? bt(e).filter((t) => t !== "base") : [];
}
function Eb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function Pb({
  styleProps: e,
  data: t,
  theme: n
}) {
  return wb(
    bt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = Sb(e[o]);
        if (!xb(e[o]))
          return s.forEach((l) => {
            r.inlineStyles[l] = Ri[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = Cb(e[o]);
        return s.forEach((l) => {
          a && (r.styles[l] = Ri[i.type](a, n)), c.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: Ri[i.type](
                Eb(e[o], u),
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
function Db() {
  return `__m__-${Ru().replace(/:/g, "")}`;
}
function _s(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ..._s(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function ad(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function Ib(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[ad(n)] = e[n]), t;
  }, {});
}
function cd(e) {
  return e ? typeof e == "string" ? { [ad(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...cd(n) }),
    {}
  ) : Ib(e) : null;
}
function as(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...as(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Rb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = as(t, e), i = as(n, e);
  return { ...o, ...i, ...r };
}
const ld = ie(
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
    const m = pt(), g = e || "div", { styleProps: h, rest: w } = hr(f), x = Db(), y = Pb({
      styleProps: h,
      theme: m,
      data: pb
    }), v = {
      ref: p,
      style: Rb({
        theme: m,
        style: t,
        vars: n,
        styleProps: y.inlineStyles
      }),
      className: xt(r, {
        [x]: y.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Wu(s) ? void 0 : s || void 0,
      ...cd(i),
      ...w
    };
    return /* @__PURE__ */ b.createElement(b.Fragment, null, y.hasResponsiveStyles && /* @__PURE__ */ b.createElement(
      fb,
      {
        selector: `.${x}`,
        styles: y.styles,
        media: y.media
      }
    ), typeof d == "function" ? d(v) : /* @__PURE__ */ b.createElement(g, { ...v }));
  }
);
ld.displayName = "@mantine/core/Box";
const V = ld;
function ud(e) {
  return e;
}
function U(e) {
  const t = ie(e);
  return t.extend = ud, t;
}
function At(e) {
  const t = ie(e);
  return t.extend = ud, t;
}
const Ob = Ut({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function br() {
  return ft(Ob);
}
function Ab(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Oi(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const zn = typeof window < "u" && window.requestAnimationFrame;
function Nb({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {
  },
  opened: r
}) {
  const o = z(null), i = 0, s = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [a, c] = q(r ? {} : s), l = (m) => {
    Is(() => c(m));
  }, u = (m) => {
    l((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || Ab(m)}ms ${t}`
    };
  }
  zt(() => {
    typeof zn == "function" && zn(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), zn(() => {
        const m = Oi(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Oi(o);
      u({ ...d(m), willChange: "height", height: m }), zn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Oi(o);
        g === a.height ? l({}) : u({ height: g }), n();
      } else
        a.height === i && (l(s), n());
  };
  function p({ style: m = {}, refKey: g = "ref", ...h } = {}) {
    const w = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: Qu(o, w),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const $b = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, dd = U((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = j("Collapse", $b, e), u = pt(), d = Zu(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = Nb({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ b.createElement(V, { ...l }, n) : null : /* @__PURE__ */ b.createElement(V, { ...m({ style: _s(s, u), ref: t, ...l }) }, /* @__PURE__ */ b.createElement(
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
dd.displayName = "@mantine/core/Collapse";
const [Tb, tt] = Kt(
  "ScrollArea.Root component was not found in tree"
);
function yn(e, t) {
  const n = tn(t);
  gr(() => {
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
const Lb = b.forwardRef((e, t) => {
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
}), Mb = b.forwardRef(
  (e, t) => {
    const n = tt(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ b.createElement(Lb, { ...e, ref: t }) : null;
  }
), kb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, fd = ie((e, t) => {
  const n = j("ScrollAreaRoot", kb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, c] = q(null), [l, u] = q(null), [d, f] = q(null), [p, m] = q(null), [g, h] = q(null), [w, x] = q(0), [y, v] = q(0), [S, C] = q(!1), [P, E] = q(!1), N = Ae(t, ($) => c($));
  return /* @__PURE__ */ b.createElement(
    Tb,
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
        onCornerWidthChange: x,
        onCornerHeightChange: v
      }
    },
    /* @__PURE__ */ b.createElement(
      V,
      {
        ...s,
        ref: N,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${w}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${y}px`
        }
      }
    )
  );
});
fd.displayName = "@mantine/core/ScrollAreaRoot";
function pd(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Po(e) {
  const t = pd(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function md(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function _b(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Xc(e, t, n = "ltr") {
  const r = Po(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = _b(e, c);
  return md([0, s], [0, a])(l);
}
function Fb(e, t, n, r = "ltr") {
  const o = Po(n), i = o / 2, s = t || i, a = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return md([c, l], d)(e);
}
function gd(e, t) {
  return e > 0 && e < t;
}
function Zr(e) {
  return e ? parseInt(e, 10) : 0;
}
function rn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [Bb, hd] = Kt(
  "ScrollAreaScrollbar was not found in tree"
), bd = ie((e, t) => {
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
  } = e, f = tt(), [p, m] = b.useState(null), g = Ae(t, (E) => m(E)), h = b.useRef(null), w = b.useRef(""), { viewport: x } = f, y = n.content - n.viewport, v = tn(l), S = tn(a), C = Co(u, 10), P = (E) => {
    if (h.current) {
      const N = E.clientX - h.current.left, $ = E.clientY - h.current.top;
      c({ x: N, y: $ });
    }
  };
  return G(() => {
    const E = (N) => {
      const $ = N.target;
      (p == null ? void 0 : p.contains($)) && v(N, y);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [x, p, y, v]), G(S, [n, S]), yn(p, C), yn(f.content, C), /* @__PURE__ */ b.createElement(
    Bb,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: tn(o),
        onThumbPointerUp: tn(i),
        onThumbPositionChange: S,
        onThumbPointerDown: tn(s)
      }
    },
    /* @__PURE__ */ b.createElement(
      "div",
      {
        ...d,
        ref: g,
        style: { position: "absolute", ...d.style },
        onPointerDown: rn(e.onPointerDown, (E) => {
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(E));
        }),
        onPointerMove: rn(e.onPointerMove, P),
        onPointerUp: rn(e.onPointerUp, (E) => {
          const N = E.target;
          N.hasPointerCapture(E.pointerId) && N.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = w.current, h.current = null;
        })
      }
    )
  );
}), jb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = q(), l = z(null), u = Ae(t, l, s.onScrollbarXChange);
    return G(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      bd,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${Po(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), gd(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: Zr(a.paddingLeft),
              paddingEnd: Zr(a.paddingRight)
            }
          });
        }
      }
    );
  }
), zb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = b.useState(), l = z(null), u = Ae(t, l, s.onScrollbarYChange);
    return G(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      bd,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${Po(n)}px`,
          ...o
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), gd(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: Zr(a.paddingTop),
              paddingEnd: Zr(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), Fs = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = br(), i = tt(), s = z(null), a = z(0), [c, l] = q({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = pd(c.viewport, c.content), d = {
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
  }, f = (p, m) => Fb(p, a.current, c, m);
  return n === "horizontal" ? /* @__PURE__ */ b.createElement(
    jb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = Xc(p, c, o);
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
    zb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = Xc(p, c);
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
}), yd = ie(
  (e, t) => {
    const n = tt(), { forceMount: r, ...o } = e, [i, s] = q(!1), a = e.orientation === "horizontal", c = Co(() => {
      if (n.viewport) {
        const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return yn(n.viewport, c), yn(n.content, c), r || i ? /* @__PURE__ */ b.createElement(
      Fs,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), Vb = ie(
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
      yd,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Wb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), i = e.orientation === "horizontal", [s, a] = q("hidden"), c = Co(() => a("idle"), 100);
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
      Fs,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: rn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: rn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Qc = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return b.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ b.createElement(Vb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ b.createElement(Wb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ b.createElement(yd, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ b.createElement(Fs, { ...r, ref: t }) : null;
  }
);
function Gb(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Hb = ie((e, t) => {
  const { style: n, ...r } = e, o = tt(), i = hd(), { onThumbPositionChange: s } = i, a = Ae(t, (u) => i.onThumbChange(u)), c = z(), l = Co(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return G(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = Gb(u, s);
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
      onPointerDownCapture: rn(e.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), p = u.clientX - f.left, m = u.clientY - f.top;
        i.onThumbPointerDown({ x: p, y: m });
      }),
      onPointerUp: rn(e.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Zc = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = hd();
    return n || o.hasThumb ? /* @__PURE__ */ b.createElement(Hb, { ref: t, ...r }) : null;
  }
), vd = ie(
  ({ children: e, style: t, ...n }, r) => {
    const o = tt(), i = Ae(r, o.onViewportChange);
    return /* @__PURE__ */ b.createElement(
      V,
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
vd.displayName = "@mantine/core/ScrollAreaViewport";
var Bs = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const wd = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Ub = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), yr = U((e, t) => {
  const n = j("ScrollArea", wd, e), {
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
    ...x
  } = n, [y, v] = q(!1), S = J({
    name: "ScrollArea",
    props: n,
    classes: Bs,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Ub
  });
  return /* @__PURE__ */ b.createElement(
    fd,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: w,
      ...S("root"),
      ...x
    },
    /* @__PURE__ */ b.createElement(
      vd,
      {
        ...f,
        ...S("viewport"),
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
    (w === "xy" || w === "x") && /* @__PURE__ */ b.createElement(
      Qc,
      {
        ...S("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(Zc, { ...S("thumb") })
    ),
    (w === "xy" || w === "y") && /* @__PURE__ */ b.createElement(
      Qc,
      {
        ...S("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(Zc, { ...S("thumb") })
    ),
    /* @__PURE__ */ b.createElement(
      Mb,
      {
        ...S("corner"),
        "data-hovered": y || void 0,
        "data-hidden": u === "never" || void 0
      }
    )
  );
});
yr.displayName = "@mantine/core/ScrollArea";
const js = U((e, t) => {
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
    ...x
  } = j("ScrollAreaAutosize", wd, e);
  return /* @__PURE__ */ b.createElement(V, { ...x, ref: t, style: [{ display: "flex" }, h] }, /* @__PURE__ */ b.createElement(V, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ b.createElement(
    yr,
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
yr.classes = Bs;
js.displayName = "@mantine/core/ScrollAreaAutosize";
js.classes = Bs;
yr.Autosize = js;
var xd = { root: "m-87cf2631" };
const qb = {
  __staticSelector: "UnstyledButton"
}, un = At(
  (e, t) => {
    const n = j("UnstyledButton", qb, e), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: c,
      style: l,
      ...u
    } = n, d = J({
      name: i,
      props: n,
      classes: xd,
      className: r,
      style: l,
      classNames: a,
      styles: c,
      unstyled: s
    });
    return /* @__PURE__ */ b.createElement(
      V,
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
un.classes = xd;
un.displayName = "@mantine/core/UnstyledButton";
const ut = Math.min, xe = Math.max, eo = Math.round, Nr = Math.floor, Vt = (e) => ({
  x: e,
  y: e
}), Kb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yb = {
  start: "end",
  end: "start"
};
function cs(e, t, n) {
  return xe(e, ut(t, n));
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dt(e) {
  return e.split("-")[0];
}
function On(e) {
  return e.split("-")[1];
}
function zs(e) {
  return e === "x" ? "y" : "x";
}
function Vs(e) {
  return e === "y" ? "height" : "width";
}
function dn(e) {
  return ["top", "bottom"].includes(dt(e)) ? "y" : "x";
}
function Ws(e) {
  return zs(dn(e));
}
function Jb(e, t, n) {
  n === void 0 && (n = !1);
  const r = On(e), o = Ws(e), i = Vs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = to(s)), [s, to(s)];
}
function Xb(e) {
  const t = to(e);
  return [ls(e), t, ls(t)];
}
function ls(e) {
  return e.replace(/start|end/g, (t) => Yb[t]);
}
function Qb(e, t, n) {
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
function Zb(e, t, n, r) {
  const o = On(e);
  let i = Qb(dt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(ls)))), i;
}
function to(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Kb[t]);
}
function ey(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gs(e) {
  return typeof e != "number" ? ey(e) : {
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
function el(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = dn(t), s = Ws(t), a = Vs(s), c = dt(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const ty = async (e, t, n) => {
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
  } = el(l, r, c), f = r, p = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: h,
      fn: w
    } = a[g], {
      x,
      y,
      data: v,
      reset: S
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
    if (u = x ?? u, d = y ?? d, p = {
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
      } = el(l, f, c)), g = -1;
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
async function Hs(e, t) {
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
  } = Dt(t, e), m = Gs(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], w = vn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
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
    rect: x,
    offsetParent: y,
    strategy: c
  }) : x);
  return {
    top: (w.top - S.top + m.top) / v.y,
    bottom: (S.bottom - w.bottom + m.bottom) / v.y,
    left: (w.left - S.left + m.left) / v.x,
    right: (S.right - w.right + m.right) / v.x
  };
}
const tl = (e) => ({
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
    } = Dt(e, t) || {};
    if (l == null)
      return {};
    const d = Gs(u), f = {
      x: n,
      y: r
    }, p = Ws(o), m = Vs(p), g = await s.getDimensions(l), h = p === "y", w = h ? "top" : "left", x = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", v = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = C ? C[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[y] || i.floating[m]);
    const E = v / 2 - S / 2, N = P / 2 - g[m] / 2 - 1, $ = ut(d[w], N), T = ut(d[x], N), k = $, _ = P - g[m] - T, O = P / 2 - g[m] / 2 + E, L = cs(k, O, _), R = !c.arrow && On(o) != null && O != L && i.reference[m] / 2 - (O < k ? $ : T) - g[m] / 2 < 0, F = R ? O < k ? O - k : O - _ : 0;
    return {
      [p]: f[p] + F,
      data: {
        [p]: L,
        centerOffset: O - L - F,
        ...R && {
          alignmentOffset: F
        }
      },
      reset: R
    };
  }
}), Sd = function(e) {
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
      } = Dt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = dt(o), x = dt(a) === a, y = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), v = f || (x || !g ? [to(a)] : Xb(a));
      !f && m !== "none" && v.push(...Zb(a, g, m, y));
      const S = [a, ...v], C = await Hs(t, h), P = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(C[w]), d) {
        const k = Jb(o, s, y);
        P.push(C[k[0]], C[k[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((k) => k <= 0)) {
        var N, $;
        const k = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, _ = S[k];
        if (_)
          return {
            data: {
              index: k,
              overflows: E
            },
            reset: {
              placement: _
            }
          };
        let O = ($ = E.filter((L) => L.overflows[0] <= 0).sort((L, R) => L.overflows[1] - R.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!O)
          switch (p) {
            case "bestFit": {
              var T;
              const L = (T = E.map((R) => [R.placement, R.overflows.filter((F) => F > 0).reduce((F, A) => F + A, 0)]).sort((R, F) => R[1] - F[1])[0]) == null ? void 0 : T[0];
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
function Cd(e) {
  const t = ut(...e.map((i) => i.left)), n = ut(...e.map((i) => i.top)), r = xe(...e.map((i) => i.right)), o = xe(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function ny(e) {
  const t = e.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => vn(Cd(o)));
}
const Ed = function(e) {
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
      } = Dt(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = ny(u), f = vn(Cd(u)), p = Gs(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((h) => c > h.left - p.left && c < h.right + p.right && l > h.top - p.top && l < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (dn(n) === "y") {
            const $ = d[0], T = d[d.length - 1], k = dt(n) === "top", _ = $.top, O = T.bottom, L = k ? $.left : T.left, R = k ? $.right : T.right, F = R - L, A = O - _;
            return {
              top: _,
              bottom: O,
              left: L,
              right: R,
              width: F,
              height: A,
              x: L,
              y: _
            };
          }
          const h = dt(n) === "left", w = xe(...d.map(($) => $.right)), x = ut(...d.map(($) => $.left)), y = d.filter(($) => h ? $.left === x : $.right === w), v = y[0].top, S = y[y.length - 1].bottom, C = x, P = w, E = P - C, N = S - v;
          return {
            top: v,
            bottom: S,
            left: C,
            right: P,
            width: E,
            height: N,
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
async function ry(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = dt(n), a = On(n), c = dn(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, d = Dt(t, e);
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
const Pd = function(e) {
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
      } = t, c = await ry(t, e);
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
}, Us = function(e) {
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
              y: x
            } = h;
            return {
              x: w,
              y: x
            };
          }
        },
        ...c
      } = Dt(e, t), l = {
        x: n,
        y: r
      }, u = await Hs(t, c), d = dn(dt(o)), f = zs(d);
      let p = l[f], m = l[d];
      if (i) {
        const h = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", x = p + u[h], y = p - u[w];
        p = cs(x, p, y);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", x = m + u[h], y = m - u[w];
        m = cs(x, m, y);
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
}, oy = function(e) {
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
      } = Dt(e, t), u = {
        x: n,
        y: r
      }, d = dn(o), f = zs(d);
      let p = u[f], m = u[d];
      const g = Dt(a, t), h = typeof g == "number" ? {
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
        var w, x;
        const y = f === "y" ? "width" : "height", v = ["top", "left"].includes(dt(o)), S = i.reference[d] - i.floating[y] + (v && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (v ? 0 : h.crossAxis), C = i.reference[d] + i.reference[y] + (v ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (v ? h.crossAxis : 0);
        m < S ? m = S : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, iy = function(e) {
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
      } = Dt(e, t), c = await Hs(t, a), l = dt(n), u = On(n), d = dn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const h = p - c[m], w = f - c[g], x = !t.middlewareData.shift;
      let y = h, v = w;
      if (d) {
        const C = f - c.left - c.right;
        v = u || x ? ut(w, C) : C;
      } else {
        const C = p - c.top - c.bottom;
        y = u || x ? ut(h, C) : C;
      }
      if (x && !u) {
        const C = xe(c.left, 0), P = xe(c.right, 0), E = xe(c.top, 0), N = xe(c.bottom, 0);
        d ? v = f - 2 * (C !== 0 || P !== 0 ? C + P : xe(c.left, c.right)) : y = p - 2 * (E !== 0 || N !== 0 ? E + N : xe(c.top, c.bottom));
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
function Wt(e) {
  return Dd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nt(e) {
  var t;
  return (t = (Dd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dd(e) {
  return e instanceof Node || e instanceof Ve(e).Node;
}
function It(e) {
  return e instanceof Element || e instanceof Ve(e).Element;
}
function wt(e) {
  return e instanceof HTMLElement || e instanceof Ve(e).HTMLElement;
}
function nl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function vr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function sy(e) {
  return ["table", "td", "th"].includes(Wt(e));
}
function qs(e) {
  const t = Ks(), n = et(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ay(e) {
  let t = wn(e);
  for (; wt(t) && !Do(t); ) {
    if (qs(t))
      return t;
    t = wn(t);
  }
  return null;
}
function Ks() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Do(e) {
  return ["html", "body", "#document"].includes(Wt(e));
}
function et(e) {
  return Ve(e).getComputedStyle(e);
}
function Io(e) {
  return It(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function wn(e) {
  if (Wt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    nl(e) && e.host || // Fallback.
    Nt(e)
  );
  return nl(t) ? t.host : t;
}
function Id(e) {
  const t = wn(e);
  return Do(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && vr(t) ? t : Id(t);
}
function Ct(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Id(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ve(o);
  return i ? t.concat(s, s.visualViewport || [], vr(o) ? o : [], s.frameElement && n ? Ct(s.frameElement) : []) : t.concat(o, Ct(o, [], n));
}
function Rd(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = wt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = eo(n) !== i || eo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ys(e) {
  return It(e) ? e : e.contextElement;
}
function bn(e) {
  const t = Ys(e);
  if (!wt(t))
    return Vt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Rd(t);
  let s = (i ? eo(n.width) : n.width) / r, a = (i ? eo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const cy = /* @__PURE__ */ Vt(0);
function Od(e) {
  const t = Ve(e);
  return !Ks() || !t.visualViewport ? cy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ly(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ve(e) ? !1 : t;
}
function sn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ys(e);
  let s = Vt(1);
  t && (r ? It(r) && (s = bn(r)) : s = bn(e));
  const a = ly(i, n, r) ? Od(i) : Vt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Ve(i), p = r && It(r) ? Ve(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = bn(m), h = m.getBoundingClientRect(), w = et(m), x = h.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, y = h.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, d *= g.y, c += x, l += y, m = Ve(m).frameElement;
    }
  }
  return vn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function uy(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = wt(n), i = Nt(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Vt(1);
  const c = Vt(0);
  if ((o || !o && r !== "fixed") && ((Wt(n) !== "body" || vr(i)) && (s = Io(n)), wt(n))) {
    const l = sn(n);
    a = bn(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + c.x,
    y: t.y * a.y - s.scrollTop * a.y + c.y
  };
}
function dy(e) {
  return Array.from(e.getClientRects());
}
function Ad(e) {
  return sn(Nt(e)).left + Io(e).scrollLeft;
}
function fy(e) {
  const t = Nt(e), n = Io(e), r = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ad(e);
  const a = -n.scrollTop;
  return et(r).direction === "rtl" && (s += xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function py(e, t) {
  const n = Ve(e), r = Nt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Ks();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function my(e, t) {
  const n = sn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = wt(e) ? bn(e) : Vt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function rl(e, t, n) {
  let r;
  if (t === "viewport")
    r = py(e, n);
  else if (t === "document")
    r = fy(Nt(e));
  else if (It(t))
    r = my(t, n);
  else {
    const o = Od(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vn(r);
}
function Nd(e, t) {
  const n = wn(e);
  return n === t || !It(n) || Do(n) ? !1 : et(n).position === "fixed" || Nd(n, t);
}
function gy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ct(e, [], !1).filter((a) => It(a) && Wt(a) !== "body"), o = null;
  const i = et(e).position === "fixed";
  let s = i ? wn(e) : e;
  for (; It(s) && !Do(s); ) {
    const a = et(s), c = qs(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || vr(s) && !c && Nd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = wn(s);
  }
  return t.set(e, r), r;
}
function hy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? gy(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, u) => {
    const d = rl(t, u, o);
    return l.top = xe(d.top, l.top), l.right = ut(d.right, l.right), l.bottom = ut(d.bottom, l.bottom), l.left = xe(d.left, l.left), l;
  }, rl(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function by(e) {
  return Rd(e);
}
function yy(e, t, n) {
  const r = wt(t), o = Nt(t), i = n === "fixed", s = sn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Vt(0);
  if (r || !r && !i)
    if ((Wt(t) !== "body" || vr(o)) && (a = Io(t)), r) {
      const l = sn(t, !0, i, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Ad(o));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function ol(e, t) {
  return !wt(e) || et(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function $d(e, t) {
  const n = Ve(e);
  if (!wt(e))
    return n;
  let r = ol(e, t);
  for (; r && sy(r) && et(r).position === "static"; )
    r = ol(r, t);
  return r && (Wt(r) === "html" || Wt(r) === "body" && et(r).position === "static" && !qs(r)) ? n : r || ay(e) || n;
}
const vy = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || $d, i = this.getDimensions;
  return {
    reference: yy(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function wy(e) {
  return et(e).direction === "rtl";
}
const xy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uy,
  getDocumentElement: Nt,
  getClippingRect: hy,
  getOffsetParent: $d,
  getElementRects: vy,
  getClientRects: dy,
  getDimensions: by,
  getScale: bn,
  isElement: It,
  isRTL: wy
};
function Sy(e, t) {
  let n = null, r;
  const o = Nt(e);
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
    const p = Nr(u), m = Nr(o.clientWidth - (l + d)), g = Nr(o.clientHeight - (u + f)), h = Nr(l), x = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: xe(0, ut(1, c)) || 1
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
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(v, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Cy(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Ys(e), u = o || i ? [...l ? Ct(l) : [], ...Ct(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = l && a ? Sy(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, g = c ? sn(e) : null;
  c && h();
  function h() {
    const w = sn(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const Ey = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: xy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ty(e, t, {
    ...o,
    platform: i
  });
}, Td = (e) => {
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
      return r && t(r) ? r.current != null ? tl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? tl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Br = typeof document < "u" ? vo : G;
function no(e, t) {
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
        if (!no(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !no(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ld(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function il(e, t) {
  const n = Ld(e);
  return Math.round(t * n) / n;
}
function sl(e) {
  const t = I.useRef(e);
  return Br(() => {
    t.current = e;
  }), t;
}
function Py(e) {
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
  } = e, [u, d] = I.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = I.useState(r);
  no(f, r) || p(r);
  const [m, g] = I.useState(null), [h, w] = I.useState(null), x = I.useCallback((R) => {
    R != C.current && (C.current = R, g(R));
  }, [g]), y = I.useCallback((R) => {
    R !== P.current && (P.current = R, w(R));
  }, [w]), v = i || m, S = s || h, C = I.useRef(null), P = I.useRef(null), E = I.useRef(u), N = sl(c), $ = sl(o), T = I.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (R.platform = $.current), Ey(C.current, P.current, R).then((F) => {
      const A = {
        ...F,
        isPositioned: !0
      };
      k.current && !no(E.current, A) && (E.current = A, Wm.flushSync(() => {
        d(A);
      }));
    });
  }, [f, t, n, $]);
  Br(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const k = I.useRef(!1);
  Br(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Br(() => {
    if (v && (C.current = v), S && (P.current = S), v && S) {
      if (N.current)
        return N.current(v, S, T);
      T();
    }
  }, [v, S, T, N]);
  const _ = I.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: x,
    setFloating: y
  }), [x, y]), O = I.useMemo(() => ({
    reference: v,
    floating: S
  }), [v, S]), L = I.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return R;
    const F = il(O.floating, u.x), A = il(O.floating, u.y);
    return a ? {
      ...R,
      transform: "translate(" + F + "px, " + A + "px)",
      ...Ld(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: A
    };
  }, [n, a, O.floating, u.x, u.y]);
  return I.useMemo(() => ({
    ...u,
    update: T,
    refs: _,
    elements: O,
    floatingStyles: L
  }), [u, T, _, O, L]);
}
var Et = typeof document < "u" ? vo : G;
let Ai = !1, Dy = 0;
const al = () => "floating-ui-" + Dy++;
function Iy() {
  const [e, t] = I.useState(() => Ai ? al() : void 0);
  return Et(() => {
    e == null && t(al());
  }, []), I.useEffect(() => {
    Ai || (Ai = !0);
  }, []), e;
}
const Ry = I[/* @__PURE__ */ "useId".toString()], Md = Ry || Iy;
function Oy() {
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
const Ay = /* @__PURE__ */ I.createContext(null), Ny = /* @__PURE__ */ I.createContext(null), kd = () => {
  var e;
  return ((e = I.useContext(Ay)) == null ? void 0 : e.id) || null;
}, Js = () => I.useContext(Ny);
function Mt(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function $y() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Ty() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function Ro(e) {
  return Mt(e).defaultView || window;
}
function ht(e) {
  return e ? e instanceof Element || e instanceof Ro(e).Element : !1;
}
function _d(e) {
  return e ? e instanceof HTMLElement || e instanceof Ro(e).HTMLElement : !1;
}
function Ly(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Ro(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function My(e) {
  if (e.mozInputSource === 0 && e.isTrusted)
    return !0;
  const t = /Android/i;
  return (t.test($y()) || t.test(Ty())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function ky(e) {
  return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Fd(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function _y(e) {
  return "nativeEvent" in e;
}
function us(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ly(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Bd(e) {
  return "data-floating-ui-" + e;
}
function cl(e) {
  const t = z(e);
  return Et(() => {
    t.current = e;
  }), t;
}
const ll = /* @__PURE__ */ Bd("safe-polygon");
function jr(e, t, n) {
  return n && !Fd(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Fy(e, t) {
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
  } = t, g = Js(), h = kd(), w = cl(d), x = cl(u), y = I.useRef(), v = I.useRef(), S = I.useRef(), C = I.useRef(), P = I.useRef(!0), E = I.useRef(!1), N = I.useRef(() => {
  }), $ = I.useCallback(() => {
    var O;
    const L = (O = o.current.openEvent) == null ? void 0 : O.type;
    return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
  }, [o]);
  I.useEffect(() => {
    if (!l)
      return;
    function O() {
      clearTimeout(v.current), clearTimeout(C.current), P.current = !0;
    }
    return i.on("dismiss", O), () => {
      i.off("dismiss", O);
    };
  }, [l, i]), I.useEffect(() => {
    if (!l || !w.current || !n)
      return;
    function O(R) {
      $() && r(!1, R);
    }
    const L = Mt(a).documentElement;
    return L.addEventListener("mouseleave", O), () => {
      L.removeEventListener("mouseleave", O);
    };
  }, [a, n, r, l, w, o, $]);
  const T = I.useCallback(function(O, L) {
    L === void 0 && (L = !0);
    const R = jr(x.current, "close", y.current);
    R && !S.current ? (clearTimeout(v.current), v.current = setTimeout(() => r(!1, O), R)) : L && (clearTimeout(v.current), r(!1, O));
  }, [x, r]), k = I.useCallback(() => {
    N.current(), S.current = void 0;
  }, []), _ = I.useCallback(() => {
    if (E.current) {
      const O = Mt(c.floating.current).body;
      O.style.pointerEvents = "", O.removeAttribute(ll), E.current = !1;
    }
  }, [c]);
  return I.useEffect(() => {
    if (!l)
      return;
    function O() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function L(A) {
      if (clearTimeout(v.current), P.current = !1, f && !Fd(y.current) || p > 0 && jr(x.current, "open") === 0)
        return;
      const H = jr(x.current, "open", y.current);
      H ? v.current = setTimeout(() => {
        r(!0, A);
      }, H) : r(!0, A);
    }
    function R(A) {
      if (O())
        return;
      N.current();
      const H = Mt(a);
      if (clearTimeout(C.current), w.current) {
        n || clearTimeout(v.current), S.current = w.current({
          ...e,
          tree: g,
          x: A.clientX,
          y: A.clientY,
          onClose() {
            _(), k(), T(A);
          }
        });
        const ne = S.current;
        H.addEventListener("mousemove", ne), N.current = () => {
          H.removeEventListener("mousemove", ne);
        };
        return;
      }
      (y.current === "touch" ? !us(a, A.relatedTarget) : !0) && T(A);
    }
    function F(A) {
      O() || w.current == null || w.current({
        ...e,
        tree: g,
        x: A.clientX,
        y: A.clientY,
        onClose() {
          _(), k(), T(A);
        }
      })(A);
    }
    if (ht(s)) {
      const A = s;
      return n && A.addEventListener("mouseleave", F), a == null || a.addEventListener("mouseleave", F), m && A.addEventListener("mousemove", L, {
        once: !0
      }), A.addEventListener("mouseenter", L), A.addEventListener("mouseleave", R), () => {
        n && A.removeEventListener("mouseleave", F), a == null || a.removeEventListener("mouseleave", F), m && A.removeEventListener("mousemove", L), A.removeEventListener("mouseenter", L), A.removeEventListener("mouseleave", R);
      };
    }
  }, [s, a, l, e, f, p, m, T, k, _, r, n, g, x, w, o]), Et(() => {
    var O;
    if (l && n && (O = w.current) != null && O.__options.blockPointerEvents && $()) {
      const F = Mt(a).body;
      if (F.setAttribute(ll, ""), F.style.pointerEvents = "none", E.current = !0, ht(s) && a) {
        var L, R;
        const A = s, H = g == null || (L = g.nodesRef.current.find((K) => K.id === h)) == null || (R = L.context) == null ? void 0 : R.elements.floating;
        return H && (H.style.pointerEvents = ""), A.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          A.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, h, a, s, g, w, o, $]), Et(() => {
    n || (y.current = void 0, k(), _());
  }, [n, k, _]), I.useEffect(() => () => {
    k(), clearTimeout(v.current), clearTimeout(C.current), _();
  }, [l, k, _]), I.useMemo(() => {
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
const jd = /* @__PURE__ */ I.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), zd = () => I.useContext(jd), By = (e) => {
  let {
    children: t,
    delay: n,
    timeoutMs: r = 0
  } = e;
  const [o, i] = I.useReducer((c, l) => ({
    ...c,
    ...l
  }), {
    delay: n,
    timeoutMs: r,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), s = I.useRef(null), a = I.useCallback((c) => {
    i({
      currentId: c
    });
  }, []);
  return Et(() => {
    o.currentId ? s.current === null ? s.current = o.currentId : i({
      isInstantPhase: !0
    }) : (i({
      isInstantPhase: !1
    }), s.current = null);
  }, [o.currentId]), /* @__PURE__ */ I.createElement(jd.Provider, {
    value: I.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, jy = (e, t) => {
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
  } = zd();
  Et(() => {
    i && (c({
      delay: {
        open: 1,
        close: jr(a, "close")
      }
    }), i !== o && r(!1));
  }, [o, r, c, i, a]), Et(() => {
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
  }, [n, c, i, o, r, a, l]), Et(() => {
    n && s(o);
  }, [n, s, o]);
};
function zy(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Ni(e, t) {
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
function Vy(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Wy = I[/* @__PURE__ */ "useInsertionEffect".toString()], Gy = Wy || ((e) => e());
function zr(e) {
  const t = I.useRef(() => {
  });
  return Gy(() => {
    t.current = e;
  }), I.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function Vr(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
const Hy = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Uy = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, qy = (e) => {
  var t, n;
  return {
    escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function Ky(e, t) {
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
  } = t, x = Js(), y = kd() != null, v = zr(typeof f == "function" ? f : () => !1), S = typeof f == "function" ? v : f, C = I.useRef(!1), {
    escapeKeyBubbles: P,
    outsidePressBubbles: E
  } = qy(w), N = zr((T) => {
    if (!n || !u || !d || T.key !== "Escape")
      return;
    const k = x ? Ni(x.nodesRef.current, i) : [];
    if (!P && (T.stopPropagation(), k.length > 0)) {
      let _ = !0;
      if (k.forEach((O) => {
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
    }), r(!1, _y(T) ? T.nativeEvent : T);
  }), $ = zr((T) => {
    const k = C.current;
    if (C.current = !1, k || typeof S == "function" && !S(T))
      return;
    const _ = Vy(T);
    if (_d(_) && c) {
      const R = _.clientWidth > 0 && _.scrollWidth > _.clientWidth, F = _.clientHeight > 0 && _.scrollHeight > _.clientHeight;
      let A = F && T.offsetX > _.clientWidth;
      if (F && Ro(c).getComputedStyle(_).direction === "rtl" && (A = T.offsetX <= _.offsetWidth - _.clientWidth), A || R && T.offsetY > _.clientHeight)
        return;
    }
    const O = x && Ni(x.nodesRef.current, i).some((R) => {
      var F;
      return Vr(T, (F = R.context) == null ? void 0 : F.elements.floating);
    });
    if (Vr(T, c) || Vr(T, a) || O)
      return;
    const L = x ? Ni(x.nodesRef.current, i) : [];
    if (L.length > 0) {
      let R = !0;
      if (L.forEach((F) => {
        var A;
        if ((A = F.context) != null && A.open && !F.context.dataRef.current.__outsidePressBubbles) {
          R = !1;
          return;
        }
      }), !R)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: y ? {
          preventScroll: !0
        } : My(T) || ky(T)
      }
    }), r(!1, T);
  });
  return I.useEffect(() => {
    if (!n || !u)
      return;
    l.current.__escapeKeyBubbles = P, l.current.__outsidePressBubbles = E;
    function T(O) {
      r(!1, O);
    }
    const k = Mt(c);
    d && k.addEventListener("keydown", N), S && k.addEventListener(p, $);
    let _ = [];
    return h && (ht(a) && (_ = Ct(a)), ht(c) && (_ = _.concat(Ct(c))), !ht(s) && s && s.contextElement && (_ = _.concat(Ct(s.contextElement)))), _ = _.filter((O) => {
      var L;
      return O !== ((L = k.defaultView) == null ? void 0 : L.visualViewport);
    }), _.forEach((O) => {
      O.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      d && k.removeEventListener("keydown", N), S && k.removeEventListener(p, $), _.forEach((O) => {
        O.removeEventListener("scroll", T);
      });
    };
  }, [l, c, a, s, d, S, p, n, r, h, u, P, E, N, $]), I.useEffect(() => {
    C.current = !1;
  }, [S, p]), I.useMemo(() => u ? {
    reference: {
      onKeyDown: N,
      [Hy[g]]: (T) => {
        m && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, T.nativeEvent));
      }
    },
    floating: {
      onKeyDown: N,
      [Uy[p]]: () => {
        C.current = !0;
      }
    }
  } : {}, [u, o, m, p, g, r, N]);
}
function Xs(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = I.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, c = Py(e), l = Js(), u = zr((v, S) => {
    v && (f.current.openEvent = S), r == null || r(v, S);
  }), d = I.useRef(null), f = I.useRef({}), p = I.useState(() => Oy())[0], m = Md(), g = I.useCallback((v) => {
    const S = ht(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c.refs.setReference(S);
  }, [c.refs]), h = I.useCallback((v) => {
    (ht(v) || v === null) && (d.current = v, s(v)), (ht(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !ht(v)) && c.refs.setReference(v);
  }, [c.refs]), w = I.useMemo(() => ({
    ...c.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [c.refs, h, g]), x = I.useMemo(() => ({
    ...c.elements,
    domReference: a
  }), [c.elements, a]), y = I.useMemo(() => ({
    ...c,
    refs: w,
    elements: x,
    dataRef: f,
    nodeId: o,
    floatingId: m,
    events: p,
    open: n,
    onOpenChange: u
  }), [c, o, m, p, n, u, w, x]);
  return Et(() => {
    const v = l == null ? void 0 : l.nodesRef.current.find((S) => S.id === o);
    v && (v.context = y);
  }), I.useMemo(() => ({
    ...c,
    context: y,
    refs: w,
    elements: x
  }), [c, w, x, y]);
}
function Yy(e, t) {
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
  } = t, d = I.useRef(""), f = I.useRef(!1), p = I.useRef();
  return I.useEffect(() => {
    if (!l)
      return;
    const g = Mt(a).defaultView || window;
    function h() {
      !n && _d(c) && c === zy(Mt(c)) && (f.current = !0);
    }
    return g.addEventListener("blur", h), () => {
      g.removeEventListener("blur", h);
    };
  }, [a, c, n, l]), I.useEffect(() => {
    if (!l)
      return;
    function m(g) {
      (g.type === "referencePress" || g.type === "escapeKey") && (f.current = !0);
    }
    return i.on("dismiss", m), () => {
      i.off("dismiss", m);
    };
  }, [i, l]), I.useEffect(() => () => {
    clearTimeout(p.current);
  }, []), I.useMemo(() => l ? {
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
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && Vr(o.current.openEvent, c) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = ht(g) && g.hasAttribute(Bd("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          us(s.floating.current, g) || us(c, g) || h || r(!1, m.nativeEvent);
        });
      }
    }
  } : {}, [l, u, c, s, o, r]);
}
function $i(e, t, n) {
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
function Jy(e) {
  e === void 0 && (e = []);
  const t = e, n = I.useCallback(
    (i) => $i(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = I.useCallback(
    (i) => $i(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = I.useCallback(
    (i) => $i(i, e, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((i) => i == null ? void 0 : i.item)
  );
  return I.useMemo(() => ({
    getReferenceProps: n,
    getFloatingProps: r,
    getItemProps: o
  }), [n, r, o]);
}
function Xy(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, s = Md();
  return I.useMemo(() => {
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
function Vd(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function ul(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function dl(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const Qy = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Zy({
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
    [Qy[c]]: D(r)
  }, d = D(-t / 2);
  return c === "left" ? {
    ...u,
    ...ul(l, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...ul(l, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...dl(l, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...dl(l, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Qs = ie(
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
    const { dir: d } = br();
    return i ? /* @__PURE__ */ b.createElement(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Zy({
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
Qs.displayName = "@mantine/core/FloatingArrow";
const [ev, Wd] = Kt(
  "Popover component was not found in the tree"
);
function Gd({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = Ih(t), o = Ae(r, e == null ? void 0 : e.ref);
  return qt(e) ? ln(e, { [n]: o }) : e;
}
Gd.displayName = "@mantine/core/FocusTrap";
function tv(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const nv = {}, Hd = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", nv, e), [i, s] = q(!1), a = z(null);
  return gr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : tv(o), Xu(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : Gm(/* @__PURE__ */ b.createElement(b.Fragment, null, n), a.current);
});
Hd.displayName = "@mantine/core/Portal";
function Oo({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ b.createElement(Hd, { ...n }, t) : /* @__PURE__ */ b.createElement(b.Fragment, null, t);
}
Oo.displayName = "@mantine/core/OptionalPortal";
const Vn = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${D(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), $r = {
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
    ...Vn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Vn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Vn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Vn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Vn("top"),
    common: { transformOrigin: "top right" }
  }
}, fl = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function rv({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in $r ? {
    transitionProperty: $r[e].transitionProperty,
    ...o,
    ...$r[e].common,
    ...$r[e][fl[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[fl[t]]
  };
}
function ov({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a
}) {
  const c = pt(), l = Zu(), u = c.respectReducedMotion ? l : !1, [d, f] = q(u ? 0 : e), [p, m] = q(r ? "entered" : "exited"), g = z(-1), h = (w) => {
    const x = w ? o : i, y = w ? s : a;
    m(w ? "pre-entering" : "pre-exiting"), window.clearTimeout(g.current);
    const v = u ? 0 : w ? e : t;
    if (f(v), v === 0)
      typeof x == "function" && x(), typeof y == "function" && y(), m(w ? "entered" : "exited");
    else {
      const S = window.setTimeout(() => {
        typeof x == "function" && x(), m(w ? "entering" : "exiting");
      }, 10);
      g.current = window.setTimeout(() => {
        window.clearTimeout(S), typeof y == "function" && y(), m(w ? "entered" : "exited");
      }, v);
    }
  };
  return zt(() => {
    h(r);
  }, [r]), G(() => () => window.clearTimeout(g.current), []), {
    transitionDuration: d,
    transitionStatus: p,
    transitionTimingFunction: n || "ease"
  };
}
function Ao({
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
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = ov({
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
    rv({
      transition: t,
      duration: d,
      state: f,
      timingFunction: p
    })
  ));
}
Ao.displayName = "@mantine/core/Transition";
var Ud = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const iv = {}, Zs = U((e, t) => {
  var h, w, x, y;
  const n = j("PopoverDropdown", iv, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = n, f = Wd(), p = wh({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Ae(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ b.createElement(Oo, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ b.createElement(
    Ao,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((x = f.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? f.transitionProps.exitDuration : (y = f.transitionProps) == null ? void 0 : y.duration
    },
    (v) => /* @__PURE__ */ b.createElement(Gd, { active: f.trapFocus }, /* @__PURE__ */ b.createElement(
      V,
      {
        ...m,
        ...d,
        variant: c,
        ref: g,
        onKeyDownCapture: dh(f.onClose, {
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
        Qs,
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
Zs.classes = Ud;
Zs.displayName = "@mantine/core/PopoverDropdown";
const sv = {
  refProp: "ref",
  popupType: "dialog"
}, qd = U((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    sv,
    e
  );
  if (!qt(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Wd(), c = Ae(a.reference, n.ref, t), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return ln(n, {
    ...s,
    ...l,
    ...a.targetProps,
    className: xt(a.targetProps.className, s.className, n.props.className),
    [r]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
qd.displayName = "@mantine/core/PopoverTarget";
function Kd({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = q(0);
  G(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return Cy(
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
  ]), zt(() => {
    t.update();
  }, r), zt(() => {
    i((s) => s + 1);
  }, [e]);
}
function av(e, t) {
  var r, o, i, s;
  const n = [Pd(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(Us({ limiter: oy() })), (o = e.middlewares) != null && o.flip && n.push(Sd()), (i = e.middlewares) != null && i.inline && n.push(Ed()), n.push(Td({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    iy({
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
function cv(e) {
  const [t, n] = Pt({
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
  }, i = Xs({
    placement: e.position,
    middleware: av(e, () => i)
  });
  return Kd({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), zt(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), zt(() => {
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
const lv = {
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
  zIndex: mr("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, uv = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : Me(t),
    "--popover-shadow": ph(n)
  }
});
function mt(e) {
  var $t, Ye, Pe, me, Tt, Jt;
  const t = j("Popover", lv, e), {
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
    styles: x,
    closeOnClickOutside: y,
    withinPortal: v,
    portalProps: S,
    closeOnEscape: C,
    clickOutsideEvents: P,
    trapFocus: E,
    onClose: N,
    onOpen: $,
    onChange: T,
    zIndex: k,
    radius: _,
    shadow: O,
    id: L,
    defaultOpened: R,
    __staticSelector: F,
    withRoles: A,
    disabled: H,
    returnFocus: K,
    variant: ne,
    keepMounted: ye,
    vars: ue,
    ...Ne
  } = t, ve = J({
    name: F,
    props: t,
    classes: Ud,
    classNames: w,
    styles: x,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: uv
  }), re = z(null), [we, ke] = q(null), [Ce, Ee] = q(null), { dir: _e } = br(), ce = St(L), X = cv({
    middlewares: u,
    width: l,
    position: Vd(_e, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: re,
    arrowOffset: p,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: R,
    onChange: T,
    onOpen: $,
    onClose: N
  });
  hh(() => y && X.onClose(), P, [
    we,
    Ce
  ]);
  const fn = Q(
    (ae) => {
      ke(ae), X.floating.refs.setReference(ae);
    },
    [X.floating.refs.setReference]
  ), Ke = Q(
    (ae) => {
      Ee(ae), X.floating.refs.setFloating(ae);
    },
    [X.floating.refs.setFloating]
  );
  return /* @__PURE__ */ b.createElement(
    ev,
    {
      value: {
        returnFocus: K,
        disabled: H,
        controlled: X.controlled,
        reference: fn,
        floating: Ke,
        x: X.floating.x,
        y: X.floating.y,
        arrowX: (Pe = (Ye = ($t = X.floating) == null ? void 0 : $t.middlewareData) == null ? void 0 : Ye.arrow) == null ? void 0 : Pe.x,
        arrowY: (Jt = (Tt = (me = X.floating) == null ? void 0 : me.middlewareData) == null ? void 0 : Tt.arrow) == null ? void 0 : Jt.y,
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
        zIndex: k,
        radius: _,
        shadow: O,
        closeOnEscape: C,
        onClose: X.onClose,
        onToggle: X.onToggle,
        getTargetId: () => `${ce}-target`,
        getDropdownId: () => `${ce}-dropdown`,
        withRoles: A,
        targetProps: Ne,
        __staticSelector: F,
        classNames: w,
        styles: x,
        unstyled: h,
        variant: ne,
        keepMounted: ye,
        getStyles: ve
      }
    },
    n
  );
}
mt.Target = qd;
mt.Dropdown = Zs;
mt.displayName = "@mantine/core/Popover";
mt.extend = (e) => e;
var st = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const dv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: xt(st.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: st.bar }), /* @__PURE__ */ b.createElement("span", { className: st.bar }), /* @__PURE__ */ b.createElement("span", { className: st.bar }))), fv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: xt(st.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: st.dot }), /* @__PURE__ */ b.createElement("span", { className: st.dot }), /* @__PURE__ */ b.createElement("span", { className: st.dot }))), pv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: xt(st.ovalLoader, e), ...t, ref: n })), Yd = {
  bars: dv,
  oval: pv,
  dots: fv
}, mv = {
  loaders: Yd,
  type: "oval"
}, gv = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": se(t, "loader-size"),
    "--loader-color": n ? vt(n, e) : void 0
  }
}), An = U((e, t) => {
  const n = j("Loader", mv, e), {
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
  } = n, h = J({
    name: "Loader",
    props: n,
    classes: st,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: gv
  });
  return m ? /* @__PURE__ */ b.createElement(V, { ...h("root"), ref: t, ...g }, m) : /* @__PURE__ */ b.createElement(
    V,
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
An.defaultLoaders = Yd;
An.classes = st;
An.displayName = "@mantine/core/Loader";
var No = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const pl = {
  orientation: "horizontal"
}, hv = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), ea = U((e, t) => {
  const n = j("ActionIconGroup", pl, e), {
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
  } = j("ActionIconGroup", pl, e), p = J({
    name: "ActionIconGroup",
    props: n,
    classes: No,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: hv,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(
    V,
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
ea.classes = No;
ea.displayName = "@mantine/core/ActionIconGroup";
const bv = {}, yv = (e, { size: t, radius: n, variant: r, gradient: o, color: i }) => {
  const s = e.variantColorResolver({
    color: i || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled"
  });
  return {
    root: {
      "--ai-size": se(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : Me(n),
      "--ai-bg": i || r ? s.background : void 0,
      "--ai-hover": i || r ? s.hover : void 0,
      "--ai-hover-color": i || r ? s.hoverColor : void 0,
      "--ai-color": i || r ? s.color : void 0,
      "--ai-bd": i || r ? s.border : void 0
    }
  };
}, Xn = At((e, t) => {
  const n = j("ActionIcon", bv, e), {
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
    disabled: x,
    "data-disabled": y,
    ...v
  } = n, S = J({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: c,
    classes: No,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: yv
  });
  return /* @__PURE__ */ b.createElement(
    un,
    {
      ...S("root", { active: !x && !l && !y }),
      ...v,
      unstyled: o,
      variant: i,
      size: d,
      disabled: x || l,
      ref: t,
      mod: { loading: l, disabled: x || y }
    },
    l ? /* @__PURE__ */ b.createElement(
      An,
      {
        ...S("loader"),
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)",
        ...u
      }
    ) : w
  );
});
Xn.classes = No;
Xn.displayName = "@mantine/core/ActionIcon";
Xn.Group = ea;
const Jd = ie(
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
Jd.displayName = "@mantine/core/CloseIcon";
var Xd = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const vv = {
  variant: "subtle"
}, wv = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": se(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : Me(n),
    "--cb-icon-size": D(r)
  }
}), wr = At((e, t) => {
  const n = j("CloseButton", vv, e), {
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
  } = n, h = J({
    name: "CloseButton",
    props: n,
    className: a,
    style: l,
    classes: Xd,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: wv
  });
  return /* @__PURE__ */ b.createElement(
    un,
    {
      ref: t,
      ...g,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: { disabled: p || f },
      ...h("root", { variant: m, active: !0 })
    },
    /* @__PURE__ */ b.createElement(Jd, null),
    o
  );
});
wr.classes = Xd;
wr.displayName = "@mantine/core/CloseButton";
function xv(e) {
  return Vm.toArray(e).filter(Boolean);
}
var Qd = { root: "m-4081bf90" };
const Sv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Cv = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": Hu(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), xn = U((e, t) => {
  const n = j("Group", Sv, e), {
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
    ...x
  } = n, y = xv(c), v = y.length, S = Hu(l ?? "md"), P = { childWidth: `calc(${100 / v}% - (${S} - ${S} / ${v}))` }, E = J({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: i,
    classes: Qd,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: Cv
  });
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...E("root"),
      ref: t,
      variant: h,
      mod: { grow: p },
      size: w,
      ...x
    },
    y
  );
});
xn.classes = Qd;
xn.displayName = "@mantine/core/Group";
var Zd = { root: "m-9814e45f" };
const Ev = {
  zIndex: mr("modal")
}, Pv = (e, { gradient: t, color: n, backgroundOpacity: r, blur: o, radius: i, zIndex: s }) => ({
  root: {
    "--overlay-bg": t || (n !== void 0 || r !== void 0) && Re(n || "#000", r ?? 0.6) || void 0,
    "--overlay-filter": o ? `blur(${D(o)})` : void 0,
    "--overlay-radius": i === void 0 ? void 0 : Me(i),
    "--overlay-z-index": s == null ? void 0 : s.toString()
  }
}), ro = At((e, t) => {
  const n = j("Overlay", Ev, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    fixed: l,
    center: u,
    children: d,
    radius: f,
    zIndex: p,
    gradient: m,
    blur: g,
    color: h,
    backgroundOpacity: w,
    ...x
  } = n, y = J({
    name: "Overlay",
    props: n,
    classes: Zd,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Pv
  });
  return /* @__PURE__ */ b.createElement(V, { ref: t, ...y("root"), mod: { center: u, fixed: l }, ...x }, d);
});
ro.classes = Zd;
ro.displayName = "@mantine/core/Overlay";
const [Dv, Nn] = $s({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var nt = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const ml = {}, Iv = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${ze(t)} - ${D(2)})`
  }
}), $o = U((e, t) => {
  const n = j("InputDescription", ml, e), {
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
  } = j("InputDescription", ml, n), m = Nn(), g = J({
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
    varsResolver: Iv
  }), h = d && (m == null ? void 0 : m.getStyles) || g;
  return /* @__PURE__ */ b.createElement(
    V,
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
$o.classes = nt;
$o.displayName = "@mantine/core/InputDescription";
const Rv = {}, Ov = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${ze(t)} - ${D(2)})`
  }
}), To = U((e, t) => {
  const n = j("InputError", Rv, e), {
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
  } = n, m = J({
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
    varsResolver: Ov
  }), g = Nn(), h = d && (g == null ? void 0 : g.getStyles) || m;
  return /* @__PURE__ */ b.createElement(
    V,
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
To.classes = nt;
To.displayName = "@mantine/core/InputError";
const gl = {
  labelElement: "label"
}, Av = (e, { size: t }) => ({
  label: {
    "--input-label-size": ze(t),
    "--input-asterisk-color": void 0
  }
}), Lo = U((e, t) => {
  const n = j("InputLabel", gl, e), {
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
  } = j("InputLabel", gl, n), x = J({
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
    varsResolver: Av
  }), y = Nn(), v = (y == null ? void 0 : y.getStyles) || x;
  return /* @__PURE__ */ b.createElement(
    V,
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
      ...w
    },
    m,
    d && /* @__PURE__ */ b.createElement("span", { ...v("required"), "aria-hidden": !0 }, " *")
  );
});
Lo.classes = nt;
Lo.displayName = "@mantine/core/InputLabel";
const hl = {}, ta = U((e, t) => {
  const n = j("InputPlaceholder", hl, e), {
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
  } = j("InputPlaceholder", hl, n), p = J({
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
    V,
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
ta.classes = nt;
ta.displayName = "@mantine/core/InputPlaceholder";
function Nv(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((c) => c === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const $v = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Tv = (e, { size: t }) => ({
  label: {
    "--input-label-size": ze(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${ze(t)} - ${D(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${ze(t)} - ${D(2)})`
  }
}), na = U((e, t) => {
  const n = j("InputWrapper", $v, e), {
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
    descriptionProps: x,
    errorProps: y,
    labelElement: v,
    children: S,
    withAsterisk: C,
    id: P,
    required: E,
    __stylesApiProps: N,
    ...$
  } = n, T = J({
    name: ["InputWrapper", d],
    props: N || n,
    classes: nt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Tv
  }), k = {
    size: l,
    variant: u,
    __staticSelector: d
  }, _ = St(P), O = typeof C == "boolean" ? C : E, L = (y == null ? void 0 : y.id) || `${_}-error`, R = (x == null ? void 0 : x.id) || `${_}-description`, F = _, A = !!g && typeof g != "boolean", H = !!h, K = `${A ? L : ""} ${H ? R : ""}`, ne = K.trim().length > 0 ? K.trim() : void 0, ye = (w == null ? void 0 : w.id) || `${_}-label`, ue = m && /* @__PURE__ */ b.createElement(
    Lo,
    {
      key: "label",
      labelElement: v,
      id: ye,
      htmlFor: F,
      required: O,
      ...k,
      ...w
    },
    m
  ), Ne = H && /* @__PURE__ */ b.createElement(
    $o,
    {
      key: "description",
      ...x,
      ...k,
      size: (x == null ? void 0 : x.size) || k.size,
      id: (x == null ? void 0 : x.id) || R
    },
    h
  ), ve = /* @__PURE__ */ b.createElement(b.Fragment, { key: "input" }, f(S)), re = A && /* @__PURE__ */ b.createElement(
    To,
    {
      ...y,
      ...k,
      size: (y == null ? void 0 : y.size) || k.size,
      key: "error",
      id: (y == null ? void 0 : y.id) || L
    },
    g
  ), we = p.map((ke) => {
    switch (ke) {
      case "label":
        return ue;
      case "input":
        return ve;
      case "description":
        return Ne;
      case "error":
        return re;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ b.createElement(
    Dv,
    {
      value: {
        getStyles: T,
        describedBy: ne,
        inputId: F,
        labelId: ye,
        ...Nv(p, { hasDescription: H, hasError: A })
      }
    },
    /* @__PURE__ */ b.createElement(
      V,
      {
        ref: t,
        variant: u,
        size: l,
        mod: { error: !!g },
        ...T("root"),
        ...$
      },
      we
    )
  );
});
na.classes = nt;
na.displayName = "@mantine/core/InputWrapper";
const Lv = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Mv = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": se(t.size, "input-height"),
    "--input-fz": ze(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : Me(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? D(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? D(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? se(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), Se = At((e, t) => {
  const n = j("Input", Lv, e), {
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
    rightSection: x,
    rightSectionProps: y,
    rightSectionWidth: v,
    rightSectionPointerEvents: S,
    leftSectionPointerEvents: C,
    variant: P,
    vars: E,
    pointer: N,
    multiline: $,
    radius: T,
    id: k,
    withAria: _,
    withErrorStyles: O,
    ...L
  } = n, { styleProps: R, rest: F } = hr(L), A = Nn(), H = { offsetBottom: A == null ? void 0 : A.offsetBottom, offsetTop: A == null ? void 0 : A.offsetTop }, K = J({
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
    varsResolver: Mv
  }), ne = _ ? {
    required: c,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": A == null ? void 0 : A.describedBy,
    id: (A == null ? void 0 : A.inputId) || k
  } : {};
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...K("wrapper"),
      ...R,
      ...f,
      mod: {
        error: !!p && O,
        pointer: N,
        disabled: m,
        multiline: $,
        "data-with-right-section": !!x,
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
      V,
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
    x && /* @__PURE__ */ b.createElement(
      "div",
      {
        ...y,
        "data-position": "right",
        ...K("section", {
          className: y == null ? void 0 : y.className,
          style: y == null ? void 0 : y.style
        })
      },
      x
    )
  );
});
Se.classes = nt;
Se.Wrapper = na;
Se.Label = Lo;
Se.Error = To;
Se.Description = $o;
Se.Placeholder = ta;
Se.displayName = "@mantine/core/Input";
function kv(e, t, n) {
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
    id: x,
    size: y,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    vars: N,
    ...$
  } = r, { styleProps: T, rest: k } = hr($), _ = {
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
    id: x,
    ...w
  };
  return {
    ...k,
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
      id: x
    }
  };
}
const _v = {
  __staticSelector: "InputBase",
  withAria: !0
}, Yt = At((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = kv("InputBase", _v, e);
  return /* @__PURE__ */ b.createElement(Se.Wrapper, { ...r }, /* @__PURE__ */ b.createElement(Se, { ...n, ...o, ref: t }));
});
Yt.classes = { ...Se.classes, ...Se.Wrapper.classes };
Yt.displayName = "@mantine/core/InputBase";
const [Fv, ra] = Kt(
  "Accordion component was not found in the tree"
);
function oa({ style: e, size: t = 16, ...n }) {
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
oa.displayName = "@mantine/core/AccordionChevron";
const [Bv, ef] = Kt("Accordion.Item component was not found in the tree");
var xr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const jv = {}, ia = U((e, t) => {
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
  } = j("AccordionControl", jv, e), { value: m } = ef(), g = ra(), h = g.isItemActive(m), w = typeof g.order == "number", x = `h${g.order}`, y = /* @__PURE__ */ b.createElement(
    un,
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
      onKeyDown: Gu({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: g.loop,
        orientation: "vertical",
        onKeyDown: u
      })
    },
    /* @__PURE__ */ b.createElement(
      V,
      {
        component: "span",
        mod: { rotate: !g.disableChevronRotation && h, position: g.chevronPosition },
        ...g.getStyles("chevron", { classNames: n, styles: i })
      },
      a || g.chevron
    ),
    /* @__PURE__ */ b.createElement("span", { ...g.getStyles("label", { classNames: n, styles: i }) }, d),
    c && /* @__PURE__ */ b.createElement(
      V,
      {
        component: "span",
        mod: { "chevron-position": g.chevronPosition },
        ...g.getStyles("icon", { classNames: n, styles: i })
      },
      c
    )
  );
  return w ? /* @__PURE__ */ b.createElement(x, { ...g.getStyles("itemTitle", { classNames: n, styles: i }) }, y) : y;
});
ia.displayName = "@mantine/core/AccordionControl";
ia.classes = xr;
const zv = {}, sa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...c } = j(
    "AccordionItem",
    zv,
    e
  ), l = ra();
  return /* @__PURE__ */ b.createElement(Bv, { value: { value: a } }, /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      mod: { active: l.isItemActive(a) },
      ...l.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: l.variant }),
      ...c
    }
  ));
});
sa.displayName = "@mantine/core/AccordionItem";
sa.classes = xr;
const Vv = {}, aa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...c } = j(
    "AccordionPanel",
    Vv,
    e
  ), { value: l } = ef(), u = ra();
  return /* @__PURE__ */ b.createElement(
    dd,
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
aa.displayName = "@mantine/core/AccordionPanel";
aa.classes = xr;
const Wv = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ b.createElement(oa, null)
}, Gv = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : Me(r)
  }
});
function oe(e) {
  const t = j("Accordion", Wv, e), {
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
    chevronSize: x,
    order: y,
    chevron: v,
    variant: S,
    radius: C,
    ...P
  } = t, E = St(p), [N, $] = Pt({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), T = (O) => Array.isArray(N) ? N.includes(O) : O === N, k = (O) => {
    const L = Array.isArray(N) ? N.includes(O) ? N.filter((R) => R !== O) : [...N, O] : O === N ? null : O;
    $(L);
  }, _ = J({
    name: "Accordion",
    classes: xr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: Gv
  });
  return /* @__PURE__ */ b.createElement(
    Fv,
    {
      value: {
        isItemActive: T,
        onChange: k,
        getControlId: Jr(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Jr(
          `${E}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: h,
        chevronPosition: w,
        order: y,
        chevron: v,
        loop: m,
        getStyles: _,
        variant: S,
        unstyled: s
      }
    },
    /* @__PURE__ */ b.createElement(V, { ..._("root"), id: E, ...P, variant: S, "data-accordion": !0 }, c)
  );
}
const Hv = (e) => e;
oe.extend = Hv;
oe.classes = xr;
oe.displayName = "@mantine/core/Accordion";
oe.Item = sa;
oe.Panel = aa;
oe.Control = ia;
oe.Chevron = oa;
var tf = { root: "m-66836ed3", "root--filled": "m-12b2e6d5", "root--white": "m-cffd1856", wrapper: "m-a5d60502", body: "m-667c2793", title: "m-6a03f287", label: "m-698f4f23", icon: "m-667f2a6a", message: "m-7fa78076", closeButton: "m-87f54839" };
const Uv = {}, qv = (e, { radius: t, color: n, variant: r }) => {
  const o = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    variant: r || "light"
  });
  return {
    root: {
      "--alert-radius": t === void 0 ? void 0 : Me(t),
      "--alert-bg": n || r ? o.background : void 0,
      "--alert-color": n || r ? o.color : void 0,
      "--alert-bd": n || r ? o.border : void 0
    }
  };
}, ca = U((e, t) => {
  const n = j("Alert", Uv, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    radius: l,
    color: u,
    title: d,
    children: f,
    id: p,
    icon: m,
    withCloseButton: g,
    onClose: h,
    closeButtonLabel: w,
    variant: x,
    ...y
  } = n, v = J({
    name: "Alert",
    classes: tf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: qv
  }), S = St(p), C = d && `${S}-title` || void 0, P = `${S}-body`;
  return /* @__PURE__ */ b.createElement(
    V,
    {
      id: S,
      ...v("root", { variant: x }),
      variant: x,
      ref: t,
      ...y,
      role: "alert",
      "aria-describedby": P,
      "aria-labelledby": C
    },
    /* @__PURE__ */ b.createElement("div", { ...v("wrapper") }, m && /* @__PURE__ */ b.createElement("div", { ...v("icon") }, m), /* @__PURE__ */ b.createElement("div", { ...v("body") }, d && /* @__PURE__ */ b.createElement("div", { ...v("title"), "data-with-close-button": g || void 0 }, /* @__PURE__ */ b.createElement("span", { id: C, ...v("label") }, d)), f && /* @__PURE__ */ b.createElement("div", { id: P, ...v("message") }, f)), g && /* @__PURE__ */ b.createElement(
      wr,
      {
        ...v("closeButton"),
        onClick: h,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": w,
        unstyled: a
      }
    ))
  );
});
ca.classes = tf;
ca.displayName = "@mantine/core/Alert";
var nf = { root: "m-b6d8b162" };
function Kv(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const Yv = {
  inherit: !1
}, Jv = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": ze(o),
    "--text-lh": fh(o),
    "--text-gradient": t === "gradient" ? is(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? vt(i, e) : void 0
  }
}), Qe = At((e, t) => {
  const n = j("Text", Yv, e), {
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
    size: x,
    ...y
  } = n, v = J({
    name: ["Text", l],
    props: n,
    classes: nf,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: Jv
  });
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...v("root", { focusable: !0 }),
      ref: t,
      component: c ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": Kv(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s
        },
        w
      ],
      size: x,
      ...y
    }
  );
});
Qe.classes = nf;
Qe.displayName = "@mantine/core/Text";
function rf(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => rf(t))
  } : e;
}
function of(e) {
  return e ? e.map(rf) : [];
}
function la(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...la(n.items) } : (t[n.value] = n, t), {});
}
var Oe = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const Xv = {
  error: null
}, Qv = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": se(t, "combobox-chevron-size")
  }
}), ua = U((e, t) => {
  const n = j("ComboboxChevron", Xv, e), { size: r, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, ...d } = n, f = J({
    name: "ComboboxChevron",
    classes: Oe,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: Qv,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ b.createElement(
    V,
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
ua.classes = Oe;
ua.displayName = "@mantine/core/ComboboxChevron";
const [Zv, rt] = Kt(
  "Combobox component was not found in tree"
), sf = ie(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ b.createElement(
    wr,
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
sf.displayName = "@mantine/core/ComboboxClearButton";
const ew = {}, da = U((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    ew,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    mt.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": s || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: n, styles: r })
    }
  );
});
da.classes = Oe;
da.displayName = "@mantine/core/ComboboxDropdown";
const tw = {
  refProp: "ref"
}, af = U((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", tw, e);
  if (rt(), !qt(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ b.createElement(mt.Target, { ref: t, refProp: r }, n);
});
af.displayName = "@mantine/core/ComboboxDropdownTarget";
const nw = {}, fa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    nw,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...c.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
fa.classes = Oe;
fa.displayName = "@mantine/core/ComboboxEmpty";
function pa({
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
const rw = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, cf = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxEventsTarget", rw, e);
  if (!qt(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = pa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  });
  return ln(n, {
    ...u,
    ...c,
    [r]: Ae(t, l.store.targetRef, n == null ? void 0 : n.ref)
  });
});
cf.displayName = "@mantine/core/ComboboxEventsTarget";
const ow = {}, ma = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    ow,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...c.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
ma.classes = Oe;
ma.displayName = "@mantine/core/ComboboxFooter";
const iw = {}, ga = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: c, ...l } = j(
    "ComboboxGroup",
    iw,
    e
  ), u = rt();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: i }),
      ...l
    },
    c && /* @__PURE__ */ b.createElement("div", { ...u.getStyles("groupLabel", { classNames: n, styles: i }) }, c),
    a
  );
});
ga.classes = Oe;
ga.displayName = "@mantine/core/ComboboxGroup";
const sw = {}, ha = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    sw,
    e
  ), c = rt();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...c.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
ha.classes = Oe;
ha.displayName = "@mantine/core/ComboboxHeader";
const aw = {}, ba = U((e, t) => {
  const n = j("ComboboxOption", aw, e), {
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
  } = n, h = rt(), w = Ru(), x = l || w;
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...h.getStyles("option", { className: o, classNames: r, styles: s, style: i }),
      ...g,
      ref: t,
      id: x,
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
ba.classes = Oe;
ba.displayName = "@mantine/core/ComboboxOption";
const cw = {}, ya = U((e, t) => {
  const n = j("ComboboxOptions", cw, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = n, d = rt(), f = St(a);
  return G(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ b.createElement(
    V,
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
ya.classes = Oe;
ya.displayName = "@mantine/core/ComboboxOptions";
const lw = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, va = U((e, t) => {
  const n = j("ComboboxSearch", lw, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = n, f = rt(), p = f.getStyles("search"), m = pa({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c
  });
  return /* @__PURE__ */ b.createElement(
    Se,
    {
      ref: Ae(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
va.classes = Oe;
va.displayName = "@mantine/core/ComboboxSearch";
const uw = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, lf = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxTarget", uw, e);
  if (!qt(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = pa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  }), d = ln(n, {
    ...u,
    ...c
  });
  return /* @__PURE__ */ b.createElement(mt.Target, { ref: Ae(t, l.store.targetRef) }, d);
});
lf.displayName = "@mantine/core/ComboboxTarget";
function dw(e, t, n) {
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
function fw(e, t, n) {
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
function pw(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function wa({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, c] = Pt({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), l = z(null), u = z(-1), d = z(null), f = z(null), p = z(-1), m = z(-1), g = z(-1), h = Q(
    (R = "unknown") => {
      a || (c(!0), o == null || o(R));
    },
    [c, o, a]
  ), w = Q(
    (R = "unknown") => {
      a && (c(!1), r == null || r(R));
    },
    [c, r, a]
  ), x = Q(
    (R = "unknown") => {
      a ? w(R) : h(R);
    },
    [w, h, a]
  ), y = Q(() => {
    const R = document.querySelector(`#${l.current} [data-combobox-selected]`);
    R == null || R.removeAttribute("data-combobox-selected"), R == null || R.removeAttribute("aria-selected");
  }, []), v = Q(
    (R) => {
      const F = document.getElementById(l.current), A = F == null ? void 0 : F.querySelectorAll("[data-combobox-option]");
      if (!A)
        return null;
      const H = R >= A.length ? 0 : R < 0 ? A.length - 1 : R;
      return u.current = H, A != null && A[H] && !A[H].hasAttribute("data-combobox-disabled") ? (y(), A[H].setAttribute("data-combobox-selected", "true"), A[H].setAttribute("aria-selected", "true"), A[H].scrollIntoView({ block: "nearest", behavior: s }), A[H].id) : null;
    },
    [s, y]
  ), S = Q(() => {
    const R = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (R) {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), A = Array.from(F).findIndex((H) => H === R);
      return v(A);
    }
    return v(0);
  }, [v]), C = Q(
    () => v(
      fw(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), P = Q(
    () => v(
      dw(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), E = Q(
    () => v(
      pw(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), N = Q((R = "selected") => {
    g.current = window.setTimeout(() => {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), A = Array.from(F).findIndex(
        (H) => H.hasAttribute(`data-combobox-${R}`)
      );
      u.current = A;
    }, 0);
  }, []), $ = Q(() => {
    u.current = -1, y();
  }, [y]), T = Q(() => {
    const R = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), F = R == null ? void 0 : R[u.current];
    F == null || F.click();
  }, []), k = Q((R) => {
    l.current = R;
  }, []), _ = Q(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), O = Q(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), L = Q(() => u.current, []);
  return G(
    () => () => {
      window.clearTimeout(p.current), window.clearTimeout(m.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: h,
    closeDropdown: w,
    toggleDropdown: x,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: L,
    selectOption: v,
    selectFirstOption: E,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: P,
    resetSelectedOption: $,
    updateSelectedOptionIndex: N,
    listId: l.current,
    setListId: k,
    clickSelectedOption: T,
    searchRef: d,
    focusSearchInput: _,
    targetRef: f,
    focusTarget: O
  };
}
const mw = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, gw = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": ze(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : D(n),
    "--combobox-option-fz": ze(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  }
});
function Z(e) {
  const t = j("Combobox", mw, e), {
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
  } = t, g = wa(), h = s || g, w = J({
    name: f || "Combobox",
    classes: Oe,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: gw
  });
  return /* @__PURE__ */ b.createElement(
    Zv,
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
    /* @__PURE__ */ b.createElement(
      mt,
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
const hw = (e) => e;
Z.extend = hw;
Z.classes = Oe;
Z.displayName = "@mantine/core/Combobox";
Z.Target = lf;
Z.Dropdown = da;
Z.Options = ya;
Z.Option = ba;
Z.Search = va;
Z.Empty = fa;
Z.Chevron = ua;
Z.Footer = ma;
Z.Header = ha;
Z.EventsTarget = cf;
Z.DropdownTarget = af;
Z.Group = ga;
Z.ClearButton = sf;
var uf = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const bw = uf, df = ie(
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
    ...w
  }, x) => {
    const y = J({
      name: e,
      props: t,
      className: n,
      style: g,
      classes: uf,
      classNames: r,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ b.createElement(
      V,
      {
        ...y("root"),
        ref: x,
        __vars: {
          "--label-fz": ze(f),
          "--label-lh": se(f, "label-lh")
        },
        mod: { "label-position": p },
        variant: m,
        size: f,
        ...w
      },
      /* @__PURE__ */ b.createElement("div", { ...y("body") }, s, /* @__PURE__ */ b.createElement("div", { ...y("labelWrapper"), "data-disabled": u || void 0 }, a && /* @__PURE__ */ b.createElement("label", { ...y("label"), "data-disabled": u || void 0, htmlFor: l }, a), c && /* @__PURE__ */ b.createElement(Se.Description, { size: f, __inheritStyles: !1, ...y("description") }, c), d && d !== "boolean" && /* @__PURE__ */ b.createElement(Se.Error, { size: f, __inheritStyles: !1, ...y("error") }, d)))
    );
  }
);
df.displayName = "@mantine/core/InlineInput";
const ff = Ut(null), yw = ff.Provider, vw = () => ft(ff);
function ww({ children: e, role: t }) {
  const n = Nn();
  return n ? /* @__PURE__ */ b.createElement("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy }, e) : /* @__PURE__ */ b.createElement(b.Fragment, null, e);
}
const xw = {}, xa = U((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: i, wrapperProps: s, children: a, ...c } = j(
    "CheckboxGroup",
    xw,
    e
  ), [l, u] = Pt({
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
  return /* @__PURE__ */ b.createElement(yw, { value: { value: l, onChange: d, size: i } }, /* @__PURE__ */ b.createElement(
    Se.Wrapper,
    {
      size: i,
      ref: t,
      ...s,
      ...c,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ b.createElement(ww, { role: "group" }, a)
  ));
});
xa.classes = Se.Wrapper.classes;
xa.displayName = "@mantine/core/CheckboxGroup";
function pf({ size: e, style: t, ...n }) {
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
function Sw({ indeterminate: e, ...t }) {
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
  ) : /* @__PURE__ */ b.createElement(pf, { ...t });
}
var mf = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const Cw = {
  labelPosition: "right",
  icon: Sw
}, Ew = (e, { radius: t, color: n, size: r, iconColor: o, variant: i }) => {
  const s = Eo({ color: n || e.primaryColor, theme: e }), a = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": se(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Me(t),
      "--checkbox-color": i === "outline" ? a : vt(n, e),
      "--checkbox-icon-color": o ? vt(o, e) : void 0
    }
  };
}, Sr = U((e, t) => {
  const n = j("Checkbox", Cw, e), {
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
    labelPosition: w,
    description: x,
    error: y,
    disabled: v,
    variant: S,
    indeterminate: C,
    icon: P,
    rootRef: E,
    iconColor: N,
    onChange: $,
    ...T
  } = n, k = vw(), _ = f || (k == null ? void 0 : k.size), O = P, L = J({
    name: "Checkbox",
    props: n,
    classes: mf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Ew
  }), { styleProps: R, rest: F } = hr(T), A = St(d), H = k ? {
    checked: k.value.includes(F.value),
    onChange: (K) => {
      k.onChange(K), $ == null || $(K);
    }
  } : {};
  return /* @__PURE__ */ b.createElement(
    df,
    {
      ...L("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: A,
      size: _,
      labelPosition: w,
      label: u,
      description: x,
      error: y,
      disabled: v,
      classNames: r,
      styles: s,
      unstyled: a,
      "data-checked": H.checked || h || void 0,
      variant: S,
      ref: E,
      ...R,
      ...m
    },
    /* @__PURE__ */ b.createElement(V, { ...L("inner"), mod: { "data-label-position": w } }, /* @__PURE__ */ b.createElement(
      V,
      {
        component: "input",
        id: A,
        ref: t,
        checked: h,
        disabled: v,
        mod: { error: !!y, indeterminate: C },
        ...L("input", { focusable: !0, variant: S }),
        onChange: $,
        ...F,
        ...H,
        type: "checkbox"
      }
    ), /* @__PURE__ */ b.createElement(O, { indeterminate: C, ...L("icon") }))
  );
});
Sr.classes = { ...mf, ...bw };
Sr.displayName = "@mantine/core/Checkbox";
Sr.Group = xa;
function Sn(e) {
  return "group" in e;
}
function gf({
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
      items: gf({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), Sn(s) || s.label.toLowerCase().includes(r) && o.push(s);
  }
  return o;
}
function Pw(e) {
  if (e.length === 0)
    return !0;
  for (const t of e)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function hf(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Sn(n))
        hf(n.items, t);
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
function Ti(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function bf({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!Sn(e)) {
    const s = t && Ti(n, e.value) && /* @__PURE__ */ b.createElement(pf, { className: Oe.optionsDropdownCheckIcon });
    return /* @__PURE__ */ b.createElement(
      Z.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: xt({ [Oe.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": Ti(n, e.value) || void 0,
        "aria-selected": Ti(n, e.value)
      },
      r === "left" && s,
      /* @__PURE__ */ b.createElement("span", null, e.label),
      r === "right" && s
    );
  }
  const i = e.items.map((s) => /* @__PURE__ */ b.createElement(
    bf,
    {
      data: s,
      value: n,
      key: s.value,
      unstyled: o,
      withCheckIcon: t,
      checkIconPosition: r
    }
  ));
  return /* @__PURE__ */ b.createElement(Z.Group, { label: e.group }, i);
}
function yf({
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
  hf(e);
  const h = typeof o == "string" ? (r || gf)({
    options: e,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : e, w = Pw(h), x = h.map((y) => /* @__PURE__ */ b.createElement(
    bf,
    {
      data: y,
      key: Sn(y) ? y.group : y.value,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ b.createElement(Z.Dropdown, { hidden: t || n && w }, /* @__PURE__ */ b.createElement(Z.Options, { labelledBy: m }, a ? /* @__PURE__ */ b.createElement(
    yr.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Oe.optionsDropdownScrollArea
    },
    x
  ) : x, w && f && /* @__PURE__ */ b.createElement(Z.Empty, null, f)));
}
var Mo = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const bl = {
  orientation: "horizontal"
}, Dw = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), Sa = U((e, t) => {
  const n = j("ButtonGroup", bl, e), {
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
  } = j("ButtonGroup", bl, e), p = J({
    name: "ButtonGroup",
    props: n,
    classes: Mo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Dw,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(
    V,
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
Sa.classes = Mo;
Sa.displayName = "@mantine/core/ButtonGroup";
const Iw = {}, Rw = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s }) => {
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
      "--button-fz": i != null && i.includes("compact") ? ze(i.replace("compact-", "")) : ze(i),
      "--button-radius": t === void 0 ? void 0 : Me(t),
      "--button-bg": n || o ? a.background : void 0,
      "--button-hover": n || o ? a.hover : void 0,
      "--button-color": n || o ? a.color : void 0,
      "--button-bd": n || o ? a.border : void 0,
      "--button-hover-color": n || o ? a.hoverColor : void 0
    }
  };
}, Qn = At((e, t) => {
  const n = j("Button", Iw, e), {
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
    styles: x,
    unstyled: y,
    "data-disabled": v,
    ...S
  } = n, C = J({
    name: "Button",
    props: n,
    classes: Mo,
    className: i,
    style: r,
    classNames: w,
    styles: x,
    unstyled: y,
    vars: o,
    varsResolver: Rw
  }), P = !!l, E = !!u;
  return /* @__PURE__ */ b.createElement(
    un,
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
    /* @__PURE__ */ b.createElement(V, { component: "span", ...C("loader"), "aria-hidden": !0 }, /* @__PURE__ */ b.createElement(
      An,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...g
      }
    )),
    /* @__PURE__ */ b.createElement("span", { ...C("inner") }, l && /* @__PURE__ */ b.createElement(V, { component: "span", ...C("section"), mod: { position: "left" } }, l), /* @__PURE__ */ b.createElement(V, { component: "span", mod: { loading: m }, ...C("label") }, c), u && /* @__PURE__ */ b.createElement(V, { component: "span", ...C("section"), mod: { position: "right" } }, u))
  );
});
Qn.classes = Mo;
Qn.displayName = "@mantine/core/Button";
Qn.Group = Sa;
var vf = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const yl = {
  withShadow: !0
}, Ow = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : Me(t),
    "--cs-size": D(n)
  }
}), Zn = At((e, t) => {
  const n = j("ColorSwatch", yl, e), {
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
  } = j("ColorSwatch", yl, n), h = J({
    name: "ColorSwatch",
    props: n,
    classes: vf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Ow
  });
  return /* @__PURE__ */ b.createElement(
    V,
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
Zn.classes = vf;
Zn.displayName = "@mantine/core/ColorSwatch";
var wf = { root: "m-7485cace" };
const Aw = {}, Nw = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : se(t, "container-size")
  }
}), Ca = U((e, t) => {
  const n = j("Container", Aw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, ...u } = n, d = J({
    name: "Container",
    classes: wf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Nw
  });
  return /* @__PURE__ */ b.createElement(V, { ref: t, mod: { fluid: l }, ...d("root"), ...u });
});
Ca.classes = wf;
Ca.displayName = "@mantine/core/Container";
function $w({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = z(-1), i = z(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, c = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return G(() => s, []), { openDropdown: a, closeDropdown: c };
}
const [Tw, xf] = Kt(
  "HoverCard component was not found in the tree"
), Lw = {};
function Sf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    Lw,
    e
  ), i = xf(), s = Xr(n, i.openDropdown), a = Xr(r, i.closeDropdown);
  return /* @__PURE__ */ b.createElement(mt.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
Sf.displayName = "@mantine/core/HoverCardDropdown";
const Mw = {
  refProp: "ref"
}, Cf = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    Mw,
    e
  );
  if (!qt(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = xf(), a = Xr(n.props.onMouseEnter, s.openDropdown), c = Xr(n.props.onMouseLeave, s.closeDropdown), l = { onMouseEnter: a, onMouseLeave: c };
  return /* @__PURE__ */ b.createElement(mt.Target, { refProp: r, ref: t, ...i }, ln(
    n,
    o ? { [o]: l } : l
  ));
});
Cf.displayName = "@mantine/core/HoverCardTarget";
const kw = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function on(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = j(
    "HoverCard",
    kw,
    e
  ), [c, { open: l, close: u }] = Ah(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = $w({ open: l, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ b.createElement(Tw, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ b.createElement(mt, { ...a, opened: c, __staticSelector: "HoverCard" }, t));
}
on.displayName = "@mantine/core/HoverCard";
on.Target = Cf;
on.Dropdown = Sf;
on.extend = (e) => e;
function Ef(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Pf = { root: "m-6e45937b", loader: "m-e8eb006c", overlay: "m-df587f17" };
const vl = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: mr("overlay")
}, _w = (e, { zIndex: t }) => ({
  root: {
    "--lo-z-index": t == null ? void 0 : t.toString()
  }
}), Ea = U((e, t) => {
  const n = j("LoadingOverlay", vl, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    transitionProps: l,
    loaderProps: u,
    overlayProps: d,
    visible: f,
    zIndex: p,
    ...m
  } = n, g = pt(), h = J({
    name: "LoadingOverlay",
    classes: Pf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: _w
  }), w = { ...vl.overlayProps, ...d };
  return /* @__PURE__ */ b.createElement(Ao, { transition: "fade", ...l, mounted: !!f }, (x) => /* @__PURE__ */ b.createElement(V, { ...h("root", { style: x }), ref: t, ...m }, /* @__PURE__ */ b.createElement(An, { ...h("loader"), unstyled: a, ...u }), /* @__PURE__ */ b.createElement(
    ro,
    {
      ...w,
      ...h("overlay"),
      "data-light": !0,
      unstyled: a,
      color: (d == null ? void 0 : d.color) || g.white
    }
  ), /* @__PURE__ */ b.createElement(
    ro,
    {
      ...w,
      ...h("overlay"),
      "data-dark": !0,
      unstyled: a,
      color: (d == null ? void 0 : d.color) || g.colors.dark[5]
    }
  )));
});
Ea.classes = Pf;
Ea.displayName = "@mantine/core/LoadingOverlay";
const [Fw, Pa] = $s(), [Bw, jw] = $s();
var ko = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const zw = {}, Vw = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? se(t) : se(n, "pg-gap")
  }
}), Da = U((e, t) => {
  const n = j("PillGroup", zw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, size: l, disabled: u, ...d } = n, f = Pa(), p = (f == null ? void 0 : f.size) || l || void 0, m = J({
    name: "PillGroup",
    classes: ko,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Vw,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(Bw, { value: { size: p, disabled: u } }, /* @__PURE__ */ b.createElement(V, { ref: t, size: p, ...m("group"), ...d }));
});
Da.classes = ko;
Da.displayName = "@mantine/core/PillGroup";
const Ww = {
  variant: "default"
}, Gw = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": se(n, "pill-fz"),
    "--pill-height": se(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : Me(t)
  }
}), er = U((e, t) => {
  const n = j("Pill", Ww, e), {
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
  } = n, x = jw(), y = Pa(), v = g || (x == null ? void 0 : x.size) || void 0, S = (y == null ? void 0 : y.variant) === "filled" ? "contrast" : l || "default", C = J({
    name: "Pill",
    classes: ko,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Gw,
    stylesCtx: { size: v }
  });
  return /* @__PURE__ */ b.createElement(
    V,
    {
      component: "span",
      ref: t,
      variant: S,
      size: v,
      ...C("root", { variant: S }),
      mod: { "with-remove": d, disabled: h || (x == null ? void 0 : x.disabled) },
      ...w
    },
    /* @__PURE__ */ b.createElement("span", { ...C("label") }, u),
    d && /* @__PURE__ */ b.createElement(
      wr,
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
er.classes = ko;
er.displayName = "@mantine/core/Pill";
er.Group = Da;
var Df = { field: "m-45c4369d" };
const Hw = {
  type: "visible"
}, Ia = U((e, t) => {
  const n = j("PillsInputField", Hw, e), {
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
  } = n, m = Pa(), g = Nn(), h = J({
    name: "PillsInputField",
    classes: Df,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "field"
  }), w = u || (m == null ? void 0 : m.disabled);
  return /* @__PURE__ */ b.createElement(
    V,
    {
      component: "input",
      ref: Ae(t, m == null ? void 0 : m.fieldRef),
      "data-type": l,
      disabled: w,
      mod: { disabled: w, pointer: f },
      ...h("field"),
      ...p,
      id: (g == null ? void 0 : g.inputId) || d,
      "aria-invalid": m == null ? void 0 : m.hasError,
      "aria-describedby": g == null ? void 0 : g.describedBy,
      type: "text",
      onMouseDown: (x) => !f && x.stopPropagation()
    }
  );
});
Ia.classes = Df;
Ia.displayName = "@mantine/core/PillsInputField";
const Uw = {}, oo = U((e, t) => {
  const n = j("PillsInput", Uw, e), {
    children: r,
    onMouseDown: o,
    onClick: i,
    size: s,
    disabled: a,
    __staticSelector: c,
    error: l,
    variant: u,
    ...d
  } = n, f = z();
  return /* @__PURE__ */ b.createElement(Fw, { value: { fieldRef: f, size: s, disabled: a, hasError: !!l, variant: u } }, /* @__PURE__ */ b.createElement(
    Yt,
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
oo.displayName = "@mantine/core/PillsInput";
oo.Field = Ia;
function qw({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (Sn(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const Kw = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, qn = U((e, t) => {
  const n = j("MultiSelect", Kw, e), {
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
    onDropdownOpen: x,
    onDropdownClose: y,
    selectFirstOptionOnChange: v,
    onOptionSubmit: S,
    comboboxProps: C,
    filter: P,
    limit: E,
    withScrollArea: N,
    maxDropdownHeight: $,
    searchValue: T,
    defaultSearchValue: k,
    onSearchChange: _,
    readOnly: O,
    disabled: L,
    onFocus: R,
    onBlur: F,
    onPaste: A,
    radius: H,
    rightSection: K,
    rightSectionWidth: ne,
    rightSectionPointerEvents: ye,
    rightSectionProps: ue,
    leftSection: Ne,
    leftSectionWidth: ve,
    leftSectionPointerEvents: re,
    leftSectionProps: we,
    inputContainer: ke,
    inputWrapperOrder: Ce,
    withAsterisk: Ee,
    labelProps: _e,
    descriptionProps: ce,
    errorProps: X,
    wrapperProps: fn,
    description: Ke,
    label: $t,
    error: Ye,
    maxValues: Pe,
    searchable: me,
    nothingFoundMessage: Tt,
    withCheckIcon: Jt,
    checkIconPosition: ae,
    hidePickedOptions: Lt,
    withErrorStyles: Dm,
    name: Im,
    form: Rm,
    id: Om,
    clearable: Am,
    clearButtonProps: Nm,
    hiddenInputProps: $m,
    placeholder: wc,
    hiddenInputValuesDivider: Tm,
    ...Lm
  } = n, bi = St(Om), yi = of(g), Dr = la(yi), Fe = wa({
    opened: h,
    defaultOpened: w,
    onDropdownOpen: x,
    onDropdownClose: () => {
      y == null || y(), Fe.resetSelectedOption();
    }
  }), {
    styleProps: Mm,
    rest: { type: zI, ...km }
  } = hr(Lm), [$e, Fn] = Pt({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [Ir, Rr] = Pt({
    value: T,
    defaultValue: k,
    finalValue: "",
    onChange: _
  }), vi = J({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: xc, resolvedStyles: Sc } = sd({
    props: n,
    styles: s,
    classNames: r
  }), _m = (le) => {
    p == null || p(le), le.key === " " && !me && (le.preventDefault(), Fe.toggleDropdown()), le.key === "Backspace" && Ir.length === 0 && $e.length > 0 && Fn($e.slice(0, $e.length - 1));
  }, Fm = $e.map((le, wi) => {
    var Pc;
    return /* @__PURE__ */ b.createElement(
      er,
      {
        key: `${le}-${wi}`,
        withRemoveButton: !O,
        onRemove: () => Fn($e.filter((Bm) => le !== Bm)),
        unstyled: a,
        ...vi("pill")
      },
      ((Pc = Dr[le]) == null ? void 0 : Pc.label) || le
    );
  });
  G(() => {
    v && Fe.selectFirstOption();
  }, [v, $e]);
  const Cc = Am && $e.length > 0 && !L && !O && /* @__PURE__ */ b.createElement(
    Z.ClearButton,
    {
      size: l,
      ...Nm,
      onClear: () => {
        Fn([]), Rr("");
      }
    }
  ), Ec = qw({ data: yi, value: $e });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    Z,
    {
      store: Fe,
      classNames: xc,
      styles: Sc,
      unstyled: a,
      size: l,
      readOnly: O,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (le) => {
        S == null || S(le), Rr(""), Fe.updateSelectedOptionIndex("selected"), $e.includes(Dr[le].value) ? Fn($e.filter((wi) => wi !== Dr[le].value)) : $e.length < Pe && Fn([...$e, Dr[le].value]);
      },
      ...C
    },
    /* @__PURE__ */ b.createElement(Z.DropdownTarget, null, /* @__PURE__ */ b.createElement(
      oo,
      {
        ...Mm,
        __staticSelector: "MultiSelect",
        classNames: xc,
        styles: Sc,
        unstyled: a,
        size: l,
        className: o,
        style: i,
        variant: m,
        disabled: L,
        radius: H,
        rightSection: K || Cc || /* @__PURE__ */ b.createElement(Z.Chevron, { size: l, error: Ye, unstyled: a }),
        rightSectionPointerEvents: ye || (Cc ? "all" : "none"),
        rightSectionWidth: ne,
        rightSectionProps: ue,
        leftSection: Ne,
        leftSectionWidth: ve,
        leftSectionPointerEvents: re,
        leftSectionProps: we,
        inputContainer: ke,
        inputWrapperOrder: Ce,
        withAsterisk: Ee,
        labelProps: _e,
        descriptionProps: ce,
        errorProps: X,
        wrapperProps: fn,
        description: Ke,
        label: $t,
        error: Ye,
        multiline: !0,
        withErrorStyles: Dm,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? Fe.openDropdown() : Fe.toggleDropdown(),
        "data-expanded": Fe.dropdownOpened || void 0,
        id: bi
      },
      /* @__PURE__ */ b.createElement(er.Group, { disabled: L, unstyled: a, ...vi("pillsList") }, Fm, /* @__PURE__ */ b.createElement(Z.EventsTarget, null, /* @__PURE__ */ b.createElement(
        oo.Field,
        {
          ...km,
          ref: t,
          id: bi,
          placeholder: wc,
          type: !me && !wc ? "hidden" : "visible",
          ...vi("inputField"),
          unstyled: a,
          onFocus: (le) => {
            R == null || R(le), me && Fe.openDropdown();
          },
          onBlur: (le) => {
            F == null || F(le), Fe.closeDropdown(), me && Fe.closeDropdown(), Rr("");
          },
          onKeyDown: _m,
          value: Ir,
          onChange: (le) => {
            Rr(le.currentTarget.value), me && Fe.openDropdown(), v && Fe.selectFirstOption();
          },
          disabled: L,
          readOnly: O || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ b.createElement(
      yf,
      {
        data: Lt ? Ec : yi,
        hidden: O || L,
        filter: P,
        search: Ir,
        limit: E,
        hiddenWhenEmpty: !me || !Tt || Lt && Ec.length === 0 && Ir.trim().length === 0,
        withScrollArea: N,
        maxDropdownHeight: $,
        filterOptions: me,
        value: $e,
        checkIconPosition: ae,
        withCheckIcon: Jt,
        nothingFoundMessage: Tt,
        unstyled: a,
        labelId: `${bi}-label`
      }
    )
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "hidden",
      name: Im,
      value: $e.join(Tm),
      form: Rm,
      disabled: L,
      ...$m
    }
  ));
});
qn.classes = { ...Yt.classes, ...Z.classes };
qn.displayName = "@mantine/core/MultiSelect";
const Yw = {
  duration: 100,
  transition: "fade"
};
function Jw(e, t) {
  return { ...Yw, ...t, ...e };
}
function Xw({
  offset: e,
  position: t
}) {
  const [n, r] = q(!1), o = z(), { x: i, y: s, elements: a, refs: c, update: l, placement: u } = Xs({
    placement: t,
    middleware: [
      Us({
        crossAxis: !0,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  }), d = u.includes("right") ? e : t.includes("left") ? e * -1 : 0, f = u.includes("bottom") ? e : t.includes("top") ? e * -1 : 0, p = Q(
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
      const g = Ct(c.floating.current);
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
var _o = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const Qw = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: mr("popover")
}, Zw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Me(t),
    "--tooltip-bg": n ? vt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Ra = U((e, t) => {
  const n = j("TooltipFloating", Qw, e), {
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
    disabled: x,
    variant: y,
    vars: v,
    portalProps: S,
    ...C
  } = n, P = pt(), E = J({
    name: "TooltipFloating",
    props: n,
    classes: _o,
    className: a,
    style: s,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: v,
    varsResolver: Zw
  }), { handleMouseMove: N, x: $, y: T, opened: k, boundaryRef: _, floating: O, setOpened: L } = Xw({
    offset: m,
    position: g
  });
  if (!qt(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const R = Ae(_, r.ref, t), F = (H) => {
    var K, ne;
    (ne = (K = r.props).onMouseEnter) == null || ne.call(K, H), N(H), L(!0);
  }, A = (H) => {
    var K, ne;
    (ne = (K = r.props).onMouseLeave) == null || ne.call(K, H), L(!1);
  };
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Oo, { ...S, withinPortal: i }, /* @__PURE__ */ b.createElement(
    V,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ..._s(s, P),
          zIndex: w,
          display: !x && k ? "block" : "none",
          top: (T && Math.round(T)) ?? "",
          left: ($ && Math.round($)) ?? ""
        }
      }),
      variant: y,
      ref: O
    },
    p
  )), ln(r, {
    ...r.props,
    [o]: R,
    onMouseEnter: F,
    onMouseLeave: A
  }));
});
Ra.classes = _o;
Ra.displayName = "@mantine/core/TooltipFloating";
const If = Ut(!1), e0 = If.Provider, t0 = () => ft(If), n0 = {
  openDelay: 0,
  closeDelay: 0
};
function Rf(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", n0, e);
  return /* @__PURE__ */ b.createElement(e0, { value: !0 }, /* @__PURE__ */ b.createElement(By, { delay: { open: t, close: n } }, r));
}
Rf.displayName = "@mantine/core/TooltipGroup";
function r0(e) {
  var C, P, E;
  const [t, n] = q(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = t0(), s = St(), { delay: a, currentId: c, setCurrentId: l } = zd(), u = Q(
    (N) => {
      n(N), N && l(s);
    },
    [l, s]
  ), {
    x: d,
    y: f,
    context: p,
    refs: m,
    update: g,
    placement: h,
    middlewareData: { arrow: { x: w, y: x } = {} }
  } = Xs({
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      Pd(e.offset),
      Us({ padding: 8 }),
      Sd(),
      Td({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [Ed()] : []
    ]
  }), { getReferenceProps: y, getFloatingProps: v } = Jy([
    Fy(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((P = e.events) != null && P.touch)
    }),
    Yy(p, { enabled: (E = e.events) == null ? void 0 : E.focus, keyboardOnly: !0 }),
    Xy(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    Ky(p, { enabled: typeof e.opened > "u" }),
    jy(p, { id: s })
  ]);
  Kd({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), zt(() => {
    var N;
    (N = e.onPositionChange) == null || N.call(e, h);
  }, [h]);
  const S = o && c && c !== s;
  return {
    x: d,
    y: f,
    arrowX: w,
    arrowY: x,
    reference: m.setReference,
    floating: m.setFloating,
    getFloatingProps: v,
    getReferenceProps: y,
    isGroupPhase: S,
    opened: o,
    placement: h
  };
}
const wl = {
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
  zIndex: mr("popover"),
  positionDependencies: []
}, o0 = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Me(t),
    "--tooltip-bg": n ? vt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Cn = U((e, t) => {
  const n = j("Tooltip", wl, e), {
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
    className: x,
    withArrow: y,
    arrowSize: v,
    arrowOffset: S,
    arrowRadius: C,
    arrowPosition: P,
    offset: E,
    transitionProps: N,
    multiline: $,
    events: T,
    zIndex: k,
    disabled: _,
    positionDependencies: O,
    onClick: L,
    onMouseEnter: R,
    onMouseLeave: F,
    inline: A,
    variant: H,
    keepMounted: K,
    vars: ne,
    portalProps: ye,
    ...ue
  } = j("Tooltip", wl, n), { dir: Ne } = br(), ve = z(null), re = r0({
    position: Vd(Ne, o),
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
  }), we = J({
    name: "Tooltip",
    props: n,
    classes: _o,
    className: x,
    style: w,
    classNames: m,
    styles: g,
    unstyled: h,
    rootSelector: "tooltip",
    vars: ne,
    varsResolver: o0
  });
  if (!qt(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const ke = Ae(re.reference, r.ref, t), Ce = Jw(N, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Oo, { ...ye, withinPortal: d }, /* @__PURE__ */ b.createElement(
    Ao,
    {
      ...Ce,
      keepMounted: K,
      mounted: !_ && !!re.opened,
      duration: re.isGroupPhase ? 10 : Ce.duration
    },
    (Ee) => /* @__PURE__ */ b.createElement(
      V,
      {
        ...ue,
        variant: H,
        mod: { multiline: $ },
        ...re.getFloatingProps({
          ref: re.floating,
          className: we("tooltip").className,
          style: {
            ...we("tooltip").style,
            ...Ee,
            zIndex: k,
            top: re.y ?? 0,
            left: re.x ?? 0
          }
        })
      },
      s,
      /* @__PURE__ */ b.createElement(
        Qs,
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
  )), ln(
    r,
    re.getReferenceProps({
      onClick: L,
      onMouseEnter: R,
      onMouseLeave: F,
      onMouseMove: n.onMouseMove,
      onPointerDown: n.onPointerDown,
      onPointerEnter: n.onPointerEnter,
      [i]: ke,
      className: xt(x, r.props.className),
      ...r.props
    })
  ));
});
Cn.classes = _o;
Cn.displayName = "@mantine/core/Tooltip";
Cn.Floating = Ra;
Cn.Group = Rf;
const i0 = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Oa = U((e, t) => {
  const n = j("Select", i0, e), {
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
    selectFirstOptionOnChange: x,
    onOptionSubmit: y,
    comboboxProps: v,
    readOnly: S,
    disabled: C,
    filter: P,
    limit: E,
    withScrollArea: N,
    maxDropdownHeight: $,
    size: T,
    searchable: k,
    rightSection: _,
    checkIconPosition: O,
    withCheckIcon: L,
    nothingFoundMessage: R,
    name: F,
    form: A,
    searchValue: H,
    defaultSearchValue: K,
    onSearchChange: ne,
    allowDeselect: ye,
    error: ue,
    rightSectionPointerEvents: Ne,
    id: ve,
    clearable: re,
    clearButtonProps: we,
    hiddenInputProps: ke,
    ...Ce
  } = n, Ee = kt(() => of(g), [g]), _e = kt(() => la(Ee), [Ee]), ce = St(ve), [X, fn] = Pt({
    value: h,
    defaultValue: w,
    finalValue: null,
    onChange: m
  }), Ke = typeof X == "string" ? _e[X] : void 0, [$t, Ye] = Pt({
    value: H,
    defaultValue: K,
    finalValue: Ke ? Ke.label : "",
    onChange: ne
  }), Pe = wa({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: Tt } = sd({
    props: n,
    styles: o,
    classNames: r
  });
  G(() => {
    x && Pe.selectFirstOption();
  }, [x, X]), G(() => {
    h === null && Ye(""), typeof h == "string" && Ke && Ye(Ke.label);
  }, [h, Ke]);
  const Jt = re && !!X && !C && !S && /* @__PURE__ */ b.createElement(
    Z.ClearButton,
    {
      size: T,
      ...we,
      onClear: () => {
        fn(null), Ye("");
      }
    }
  );
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    Z,
    {
      store: Pe,
      __staticSelector: "Select",
      classNames: me,
      styles: Tt,
      unstyled: i,
      readOnly: S,
      onOptionSubmit: (ae) => {
        y == null || y(ae);
        const Lt = ye && _e[ae].value === X ? null : _e[ae].value;
        fn(Lt), Ye(typeof Lt == "string" ? _e[ae].label : ""), Pe.closeDropdown();
      },
      size: T,
      ...v
    },
    /* @__PURE__ */ b.createElement(Z.Target, { targetType: k ? "input" : "button" }, /* @__PURE__ */ b.createElement(
      Yt,
      {
        id: ce,
        ref: t,
        rightSection: _ || Jt || /* @__PURE__ */ b.createElement(Z.Chevron, { size: T, error: ue, unstyled: i }),
        rightSectionPointerEvents: Ne || (Jt ? "all" : "none"),
        ...Ce,
        size: T,
        __staticSelector: "Select",
        disabled: C,
        readOnly: S || !k,
        value: $t,
        onChange: (ae) => {
          Ye(ae.currentTarget.value), Pe.openDropdown(), x && Pe.selectFirstOption();
        },
        onFocus: (ae) => {
          k && Pe.openDropdown(), d == null || d(ae);
        },
        onBlur: (ae) => {
          var Lt;
          k && Pe.closeDropdown(), Ye(X != null && ((Lt = _e[X]) == null ? void 0 : Lt.label) || ""), f == null || f(ae);
        },
        onClick: (ae) => {
          k ? Pe.openDropdown() : Pe.toggleDropdown(), p == null || p(ae);
        },
        classNames: me,
        styles: Tt,
        unstyled: i,
        pointer: !k,
        error: ue
      }
    )),
    /* @__PURE__ */ b.createElement(
      yf,
      {
        data: Ee,
        hidden: S || C,
        filter: P,
        search: $t,
        limit: E,
        hiddenWhenEmpty: !k || !R,
        withScrollArea: N,
        maxDropdownHeight: $,
        filterOptions: k && (Ke == null ? void 0 : Ke.label) !== $t,
        value: X,
        checkIconPosition: O,
        withCheckIcon: L,
        nothingFoundMessage: R,
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
      ...ke
    }
  ));
});
Oa.classes = { ...Yt.classes, ...Z.classes };
Oa.displayName = "@mantine/core/Select";
const s0 = {}, tr = U((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", s0, e);
  return /* @__PURE__ */ b.createElement(V, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
tr.displayName = "@mantine/core/Space";
const [a0, Aa] = Kt(
  "Tabs component was not found in the tree"
);
var Cr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const c0 = {}, Na = U((e, t) => {
  const n = j("TabsList", c0, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: c, style: l, ...u } = n, d = Aa();
  return /* @__PURE__ */ b.createElement(
    V,
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
Na.classes = Cr;
Na.displayName = "@mantine/core/TabsList";
const l0 = {}, $a = U((e, t) => {
  const n = j("TabsPanel", l0, e), { children: r, className: o, value: i, classNames: s, styles: a, style: c, ...l } = n, u = Aa(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
  return /* @__PURE__ */ b.createElement(
    V,
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
$a.classes = Cr;
$a.displayName = "@mantine/core/TabsPanel";
const u0 = {}, Ta = U((e, t) => {
  const n = j("TabsTab", u0, e), {
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
  } = n, w = pt(), { dir: x } = br(), y = Aa(), v = a === y.value, S = (P) => {
    y.onChange(y.allowTabDeactivation && a === y.value ? null : a), c == null || c(P);
  }, C = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ b.createElement(
    un,
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
      __vars: { "--tabs-color": d ? vt(d, w) : void 0 },
      onKeyDown: Gu({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: y.activateTabWithKeyboard,
        loop: y.loop,
        orientation: y.orientation || "horizontal",
        dir: x,
        onKeyDown: l
      })
    },
    s && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabSection", C), "data-position": "left" }, s),
    o && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabLabel", C) }, o),
    i && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabSection", C), "data-position": "right" }, i)
  );
});
Ta.classes = Cr;
Ta.displayName = "@mantine/core/TabsTab";
const xl = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", d0 = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, f0 = (e, { radius: t, color: n }) => ({
  root: {
    "--tabs-radius": Me(t),
    "--tabs-color": vt(n, e)
  }
}), at = U((e, t) => {
  const n = j("Tabs", d0, e), {
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
    classNames: x,
    styles: y,
    unstyled: v,
    className: S,
    style: C,
    vars: P,
    ...E
  } = n, N = St(l), [$, T] = Pt({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), k = J({
    name: "Tabs",
    props: n,
    classes: Cr,
    className: S,
    style: C,
    classNames: x,
    styles: y,
    unstyled: v,
    vars: P,
    varsResolver: f0
  });
  return /* @__PURE__ */ b.createElement(
    a0,
    {
      value: {
        placement: h,
        value: $,
        orientation: s,
        id: N,
        loop: c,
        activateTabWithKeyboard: u,
        getTabId: Jr(`${N}-tab`, xl),
        getPanelId: Jr(`${N}-panel`, xl),
        onChange: T,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: w,
        unstyled: v,
        getStyles: k
      }
    },
    /* @__PURE__ */ b.createElement(
      V,
      {
        ref: t,
        id: N,
        variant: f,
        mod: {
          orientation: s,
          inverted: s === "horizontal" && g,
          placement: s === "vertical" && h
        },
        ...k("root"),
        ...E
      },
      a
    )
  );
});
at.classes = Cr;
at.displayName = "@mantine/core/Tabs";
at.Tab = Ta;
at.Panel = $a;
at.List = Na;
const p0 = {}, La = U((e, t) => {
  const n = j("TextInput", p0, e);
  return /* @__PURE__ */ b.createElement(Yt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
La.classes = Yt.classes;
La.displayName = "@mantine/core/TextInput";
const m0 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function g0(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return m0.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: D(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var Of = { root: "m-8a5d1357" };
const h0 = {
  order: 1
}, b0 = (e, { order: t, size: n, lineClamp: r }) => {
  const o = g0(t, n);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0
    }
  };
}, $n = U((e, t) => {
  const n = j("Title", h0, e), {
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
  } = n, m = J({
    name: "Title",
    props: n,
    classes: Of,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: b0
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ b.createElement(
    V,
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
$n.classes = Of;
$n.displayName = "@mantine/core/Title";
var Af = { exports: {} }, y0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", v0 = y0, w0 = v0;
function Nf() {
}
function $f() {
}
$f.resetWarningCache = Nf;
var x0 = function() {
  function e(r, o, i, s, a, c) {
    if (c !== w0) {
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
    checkPropTypes: $f,
    resetWarningCache: Nf
  };
  return n.PropTypes = n, n;
};
Af.exports = x0();
var S0 = Af.exports;
const Xt = /* @__PURE__ */ Au(S0);
var C0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, E0 = Object.defineProperty, P0 = Object.defineProperties, D0 = Object.getOwnPropertyDescriptors, io = Object.getOwnPropertySymbols, Tf = Object.prototype.hasOwnProperty, Lf = Object.prototype.propertyIsEnumerable, Sl = (e, t, n) => t in e ? E0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cl = (e, t) => {
  for (var n in t || (t = {}))
    Tf.call(t, n) && Sl(e, n, t[n]);
  if (io)
    for (var n of io(t))
      Lf.call(t, n) && Sl(e, n, t[n]);
  return e;
}, I0 = (e, t) => P0(e, D0(t)), R0 = (e, t) => {
  var n = {};
  for (var r in e)
    Tf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && io)
    for (var r of io(e))
      t.indexOf(r) < 0 && Lf.call(e, r) && (n[r] = e[r]);
  return n;
}, Tn = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = R0(s, ["color", "size", "stroke", "children"]);
      return Dc(
        "svg",
        Cl(I0(Cl({
          ref: i
        }, C0), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => Dc(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Xt.string,
    size: Xt.oneOfType([Xt.string, Xt.number]),
    stroke: Xt.oneOfType([Xt.string, Xt.number])
  }, r.displayName = `${t}`, r;
}, O0 = Tn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), A0 = Tn("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]), N0 = Tn("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), $0 = Tn("info-circle", "IconInfoCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 9h.01", key: "svg-1" }],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), T0 = Tn("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), L0 = Tn("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function M0({ indeterminate: e, ...t }) {
  return e ? /* @__PURE__ */ M.jsx(A0, { ...t }) : /* @__PURE__ */ M.jsx(O0, { ...t });
}
const k0 = {
  components: {
    Checkbox: Sr.extend({
      defaultProps: {
        icon: M0,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
};
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var _0 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), El = _0, Li = () => Math.random().toString(36).substring(7).split("").join("."), F0 = {
  INIT: `@@redux/INIT${Li()}`,
  REPLACE: `@@redux/REPLACE${Li()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Li()}`
}, so = F0;
function Ma(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Mf(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(Mf)(e, t);
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
    const x = a++;
    return s.set(x, h), function() {
      if (w) {
        if (c)
          throw new Error(ge(6));
        w = !1, l(), s.delete(x), i = null;
      }
    };
  }
  function f(h) {
    if (!Ma(h))
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
    return (i = s).forEach((x) => {
      x();
    }), h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(ge(10));
    r = h, f({
      type: so.REPLACE
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
        function x() {
          const v = w;
          v.next && v.next(u());
        }
        return x(), {
          unsubscribe: h(x)
        };
      },
      [El]() {
        return this;
      }
    };
  }
  return f({
    type: so.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [El]: m
  };
}
function B0(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: so.INIT
    }) > "u")
      throw new Error(ge(12));
    if (typeof n(void 0, {
      type: so.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ge(13));
  });
}
function j0(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    B0(n);
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
function ao(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function z0(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ge(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(s));
    return i = ao(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function V0(e) {
  return Ma(e) && "type" in e && typeof e.type == "string";
}
var kf = Symbol.for("immer-nothing"), Pl = Symbol.for("immer-draftable"), He = Symbol.for("immer-state");
function it(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var En = Object.getPrototypeOf;
function Gt(e) {
  return !!e && !!e[He];
}
function Rt(e) {
  var t;
  return e ? _f(e) || Array.isArray(e) || !!e[Pl] || !!((t = e.constructor) != null && t[Pl]) || Bo(e) || jo(e) : !1;
}
var W0 = Object.prototype.constructor.toString();
function _f(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = En(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === W0;
}
function nr(e, t) {
  Fo(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Fo(e) {
  const t = e[He];
  return t ? t.type_ : Array.isArray(e) ? 1 : Bo(e) ? 2 : jo(e) ? 3 : 0;
}
function ds(e, t) {
  return Fo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ff(e, t, n) {
  const r = Fo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function G0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Bo(e) {
  return e instanceof Map;
}
function jo(e) {
  return e instanceof Set;
}
function Zt(e) {
  return e.copy_ || e.base_;
}
function fs(e, t) {
  if (Bo(e))
    return new Map(e);
  if (jo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && _f(e))
    return En(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[He];
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
function ka(e, t = !1) {
  return zo(e) || Gt(e) || !Rt(e) || (Fo(e) > 1 && (e.set = e.add = e.clear = e.delete = H0), Object.freeze(e), t && nr(e, (n, r) => ka(r, !0))), e;
}
function H0() {
  it(2);
}
function zo(e) {
  return Object.isFrozen(e);
}
var U0 = {};
function an(e) {
  const t = U0[e];
  return t || it(0, e), t;
}
var rr;
function Bf() {
  return rr;
}
function q0(e, t) {
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
function Dl(e, t) {
  t && (an("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ps(e) {
  ms(e), e.drafts_.forEach(K0), e.drafts_ = null;
}
function ms(e) {
  e === rr && (rr = e.parent_);
}
function Il(e) {
  return rr = q0(rr, e);
}
function K0(e) {
  const t = e[He];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Rl(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[He].modified_ && (ps(t), it(4)), Rt(e) && (e = co(t, e), t.parent_ || lo(t, e)), t.patches_ && an("Patches").generateReplacementPatches_(
    n[He].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = co(t, n, []), ps(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== kf ? e : void 0;
}
function co(e, t, n) {
  if (zo(t))
    return t;
  const r = t[He];
  if (!r)
    return nr(
      t,
      (o, i) => Ol(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return lo(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), nr(
      i,
      (a, c) => Ol(e, r, o, a, c, n, s)
    ), lo(e, o, !1), n && e.patches_ && an("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Ol(e, t, n, r, o, i, s) {
  if (Gt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ds(t.assigned_, r) ? i.concat(r) : void 0, c = co(e, o, a);
    if (Ff(n, r, c), Gt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (Rt(o) && !zo(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    co(e, o), (!t || !t.scope_.parent_) && lo(e, o);
  }
}
function lo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ka(t, n);
}
function Y0(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Bf(),
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
  let o = r, i = _a;
  n && (o = [r], i = or);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var _a = {
  get(e, t) {
    if (t === He)
      return e;
    const n = Zt(e);
    if (!ds(n, t))
      return J0(e, n, t);
    const r = n[t];
    return e.finalized_ || !Rt(r) ? r : r === Mi(e.base_, t) ? (ki(e), e.copy_[t] = hs(r, e)) : r;
  },
  has(e, t) {
    return t in Zt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Zt(e));
  },
  set(e, t, n) {
    const r = jf(Zt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Mi(Zt(e), t), i = o == null ? void 0 : o[He];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (G0(n, o) && (n !== void 0 || ds(e.base_, t)))
        return !0;
      ki(e), gs(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Mi(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ki(e), gs(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = Zt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
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
}, or = {};
nr(_a, (e, t) => {
  or[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
or.deleteProperty = function(e, t) {
  return or.set.call(this, e, t, void 0);
};
or.set = function(e, t, n) {
  return _a.set.call(this, e[0], t, n, e[0]);
};
function Mi(e, t) {
  const n = e[He];
  return (n ? Zt(n) : e)[t];
}
function J0(e, t, n) {
  var o;
  const r = jf(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function jf(e, t) {
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
function gs(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && gs(e.parent_));
}
function ki(e) {
  e.copy_ || (e.copy_ = fs(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var X0 = class {
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
        const i = Il(this), s = hs(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? ps(i) : ms(i);
        }
        return Dl(i, r), Rl(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === kf && (o = void 0), this.autoFreeze_ && ka(o, !0), r) {
          const i = [], s = [];
          an("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
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
    Rt(e) || it(8), Gt(e) && (e = zf(e));
    const t = Il(this), n = hs(e, void 0);
    return n[He].isManual_ = !0, ms(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[He];
    (!n || !n.isManual_) && it(9);
    const { scope_: r } = n;
    return Dl(r, t), Rl(void 0, r);
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
    const r = an("Patches").applyPatches_;
    return Gt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function hs(e, t) {
  const n = Bo(e) ? an("MapSet").proxyMap_(e, t) : jo(e) ? an("MapSet").proxySet_(e, t) : Y0(e, t);
  return (t ? t.scope_ : Bf()).drafts_.push(n), n;
}
function zf(e) {
  return Gt(e) || it(10, e), Vf(e);
}
function Vf(e) {
  if (!Rt(e) || zo(e))
    return e;
  const t = e[He];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = fs(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = fs(e, !0);
  return nr(n, (r, o) => {
    Ff(n, r, Vf(o));
  }), t && (t.finalized_ = !1), n;
}
var Ue = new X0(), Wf = Ue.produce;
Ue.produceWithPatches.bind(
  Ue
);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
Ue.applyPatches.bind(Ue);
Ue.createDraft.bind(Ue);
Ue.finishDraft.bind(Ue);
function Q0(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Z0(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function ex(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Al = (e) => Array.isArray(e) ? e : [e];
function tx(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return ex(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function nx(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var rx = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, ox = typeof WeakRef < "u" ? WeakRef : rx, ix = 0, Nl = 1;
function Tr() {
  return {
    s: ix,
    v: void 0,
    o: null,
    p: null
  };
}
function Fa(e, t = {}) {
  let n = Tr();
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
        h === void 0 ? (a = Tr(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = Tr(), g.set(m, a)) : a = h;
      }
    }
    const l = a;
    let u;
    if (a.s === Nl ? u = a.v : (u = e.apply(null, arguments), i++), l.s = Nl, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new ox(u) : u;
    }
    return l.v = u, u;
  }
  return s.clearCache = () => {
    n = Tr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Gf(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), Q0(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...n,
      ...c
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Fa,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = Al(f), w = Al(m), x = tx(o), y = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h), v = p(function() {
      s++;
      const C = nx(
        x,
        arguments
      );
      return a = y.apply(null, C), a;
    }, ...w);
    return Object.assign(v, {
      resultFunc: l,
      memoizedResultFunc: y,
      dependencies: x,
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
var Ln = /* @__PURE__ */ Gf(Fa), sx = Object.assign(
  (e, t = Ln) => {
    Z0(
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
  { withTypes: () => sx }
);
function Hf(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var ax = Hf(), cx = Hf, lx = (...e) => {
  const t = Gf(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(Gt(s) ? zf(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
lx(Fa);
var ux = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ao : ao.apply(null, arguments);
}, dx = (e) => e && typeof e.match == "function";
function yt(e, t) {
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => V0(r) && r.type === e, n;
}
var Uf = class Un extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Un.prototype);
  }
  static get [Symbol.species]() {
    return Un;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Un(...t[0].concat(this)) : new Un(...t.concat(this));
  }
};
function $l(e) {
  return Rt(e) ? Wf(e, () => {
  }) : e;
}
function Tl(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Le(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function fx(e) {
  return typeof e == "boolean";
}
var px = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Uf();
  return n && (fx(n) ? s.push(ax) : s.push(cx(n.extraArgument))), s;
}, mx = "RTK_autoBatch", qf = (e) => (t) => {
  setTimeout(t, e);
}, gx = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : qf(10), hx = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? gx : e.type === "callback" ? e.queueNotification : qf(e.timeout), l = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[mx]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, bx = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Uf(e);
  return r && o.push(hx(typeof r == "object" ? r : void 0)), o;
}, yx = !0;
function vx(e) {
  const t = px(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Ma(n))
    a = j0(n);
  else
    throw new Error(Le(1));
  let c;
  typeof r == "function" ? c = r(t) : c = t();
  let l = ao;
  o && (l = ux({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !yx,
    ...typeof o == "object" && o
  }));
  const u = z0(...c), d = bx(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = l(...f);
  return Mf(a, i, p);
}
function Kf(e) {
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
function wx(e) {
  return typeof e == "function";
}
function xx(e, t) {
  let [n, r, o] = Kf(t), i;
  if (wx(e))
    i = () => $l(e());
  else {
    const a = $l(e);
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
        if (Gt(u)) {
          const p = d(u, c);
          return p === void 0 ? u : p;
        } else {
          if (Rt(u))
            return Wf(u, (f) => d(f, c));
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
var Sx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Yf = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Sx[Math.random() * 64 | 0];
  return t;
}, Cx = (e, t) => dx(e) ? e.match(t) : e(t);
function Ex(...e) {
  return (t) => e.some((n) => Cx(n, t));
}
var Px = ["name", "message", "stack", "code"], _i = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Ll = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Dx = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of Px)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Vo = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = yt(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = yt(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), s = yt(t + "/rejected", (c, l, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || Dx)(c || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(c) : Yf(), p = new AbortController();
        let m, g;
        function h(x) {
          g = x, p.abort();
        }
        const w = async function() {
          var v, S;
          let x;
          try {
            let C = (v = r == null ? void 0 : r.condition) == null ? void 0 : v.call(r, c, {
              getState: u,
              extra: d
            });
            if (Rx(C) && (C = await C), C === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const P = new Promise((E, N) => {
              m = () => {
                N({
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
            }))), x = await Promise.race([P, Promise.resolve(n(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: h,
              rejectWithValue: (E, N) => new _i(E, N),
              fulfillWithValue: (E, N) => new Ll(E, N)
            })).then((E) => {
              if (E instanceof _i)
                throw E;
              return E instanceof Ll ? o(E.payload, f, c, E.meta) : o(E, f, c);
            })]);
          } catch (C) {
            x = C instanceof _i ? s(null, f, c, C.payload, C.meta) : s(C, f, c);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(x) && x.meta.condition || l(x), x;
        }();
        return Object.assign(w, {
          abort: h,
          requestId: f,
          arg: c,
          unwrap() {
            return w.then(Ix);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: Ex(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Ix(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Rx(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Ox = Symbol.for("rtk-slice-createasyncthunk");
function Ax(e, t) {
  return `${e}/${t}`;
}
function Nx({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Ox];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Le(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(Tx()) : o.reducers) || {}, c = Object.keys(a), l = {
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
        type: Ax(i, y),
        createNotation: typeof o.reducers == "function"
      };
      Mx(v) ? _x(S, v, u, t) : Lx(S, v, u);
    });
    function d() {
      const [y = {}, v = [], S = void 0] = typeof o.extraReducers == "function" ? Kf(o.extraReducers) : [o.extraReducers], C = {
        ...y,
        ...l.sliceCaseReducersByType
      };
      return xx(o.initialState, (P) => {
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
    function w(y, v = !1) {
      function S(P) {
        let E = P[y];
        return typeof E > "u" && v && (E = h()), E;
      }
      function C(P = f) {
        const E = Tl(p, v, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Tl(E, P, {
          insert: () => {
            const N = {};
            for (const [$, T] of Object.entries(o.selectors ?? {}))
              N[$] = $x(T, P, h, v);
            return N;
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
    const x = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...w(s),
      injectInto(y, {
        reducerPath: v,
        ...S
      } = {}) {
        const C = v ?? s;
        return y.inject({
          reducerPath: C,
          reducer: g
        }, S), {
          ...x,
          ...w(C, !0)
        };
      }
    };
    return x;
  };
}
function $x(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var Ba = Nx();
function Tx() {
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
function Lx({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !kx(r))
      throw new Error(Le(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? yt(e, s) : yt(e));
}
function Mx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function kx(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function _x({
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
    fulfilled: s || Lr,
    pending: a || Lr,
    rejected: c || Lr,
    settled: l || Lr
  });
}
function Lr() {
}
var Fx = (e, t) => {
  if (typeof e != "function")
    throw new Error(Le(32));
}, ja = "listenerMiddleware", Bx = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = yt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(Le(21));
  return Fx(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, jx = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = Bx(e);
  return {
    id: Yf(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Le(22));
    }
  };
}, {
  withTypes: () => jx
}), zx = Object.assign(yt(`${ja}/add`), {
  withTypes: () => zx
});
yt(`${ja}/removeAll`);
var Vx = Object.assign(yt(`${ja}/remove`), {
  withTypes: () => Vx
});
function Le(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class Wx {
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
        const w = m ? await g[m]().then((x) => (h.ok ? h.data = x : h.error = x, h)).catch((x) => (h.error = x, h)) : h;
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
 * <p>API to access the buildingSMART Data Dictionary.</p><p>For manually uploading import files, please go to <a href="https://manage.bsdd.buildingsmart.org">bSDD Management portal</a>. Version history can be found at <a href="https://github.com/buildingSMART/bSDD/blob/master/API%20version%20history.md">Version history</a>.</p><p>Keep an eye on (planned) updates: <a href="https://forums.buildingsmart.org/t/bsdd-tech-updates/4889">bSDD tech updates</a></p><h3>For client developers</h3><p>If you're creating a desktop client that only calls the not secured APIs, you're ready to go.<br/>If you don't use the secured APIs but want to call the other APIs from your website or SPA, then we need the URL of your website to allow CORS.</p><p>If you are going to build a client that is going to use secured APIs, you must request a Client ID. You can do so by sending us an email and give:</p><ul><li>the name of the client application</li><li>type of application:<ul><li>Web application</li><li>Single-page application</li><li>iOS / macOS, Object-C, Swift, Xamarin</li><li>Adroid - Java, Kotlin, Xamarin</li><li>Mobile/desktop</li></ul> <li>which development language are you using? (sometimes the redirectUri to be configured depends on the used library)</li><li>if it is a website or SPA, specify the return url (the login page will redirect to this url after user has logged in)</li></ul>
 */
class Gx extends Wx {
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
class za extends Gx {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const Hx = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, Ux = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Ml = (e, t) => {
  e.language = t.payload, be.changeLanguage(t.payload);
}, Va = yt("settings/setSettings"), Jf = Ba({
  name: "settings",
  initialState: Ux,
  reducers: {
    setBsddApiEnvironment: (e, { payload: t }) => {
      e.bsddApiEnvironment = t;
    },
    setMainDictionary: (e, { payload: t }) => {
      e.mainDictionary = t;
    },
    setIfcDictionary: (e, { payload: t }) => {
      e.mainDictionary = t;
    },
    setFilterDictionaries: (e, { payload: t }) => {
      e.filterDictionaries = t;
    },
    setLanguage: Ml,
    setIncludeTestDictionaries: (e, t) => {
      e.includeTestDictionaries = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(
      Va,
      (t, {
        payload: {
          bsddApiEnvironment: n,
          mainDictionary: r,
          ifcDictionary: o,
          filterDictionaries: i,
          language: s,
          includeTestDictionaries: a
        }
      }) => {
        JSON.stringify(t.bsddApiEnvironment) !== JSON.stringify(n) && (t.bsddApiEnvironment = n), JSON.stringify(t.mainDictionary) !== JSON.stringify(r) && (t.mainDictionary = r), JSON.stringify(t.ifcDictionary) !== JSON.stringify(o) && (t.ifcDictionary = o), JSON.stringify(t.filterDictionaries) !== JSON.stringify(i) && (t.filterDictionaries = i), JSON.stringify(t.language) !== JSON.stringify(s) && Ml(t, { payload: s, type: "setLanguage" }), JSON.stringify(t.includeTestDictionaries) !== JSON.stringify(a) && (t.includeTestDictionaries = a);
      }
    );
  }
}), Xf = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? Hx[t] : null;
}, Qf = Ln(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.ifcDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t, n) => {
    const r = [e, t, ...n].filter(Boolean), o = new Map(r.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
);
Ln(
  Qf,
  (e) => e.map((t) => t.ifcClassification.location)
);
const qx = (e) => e.settings.mainDictionary, Kx = (e) => e.settings.includeTestDictionaries, {
  setBsddApiEnvironment: Yx,
  setMainDictionary: HI,
  setFilterDictionaries: UI,
  setLanguage: Jx,
  setIncludeTestDictionaries: Xx
} = Jf.actions, Qx = Jf.reducer, bs = 500, Zx = 500;
let nn = null, Wr = {};
const kl = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, eS = (e) => {
  const t = Xf(e);
  return t && (!nn || nn.baseUrl !== t) && (nn = new za(t)), nn;
}, ys = Vo("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (console.log("fetchDictionaries", e), !e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new za(e), o = Zx;
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
async function _l(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: bs,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const Zf = Vo(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (Wr[e])
      return await Wr[e];
    const o = (async () => {
      const i = eS(t());
      if (!i)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let a = 0;
      const c = await _l(i, e, a), l = c.classesTotalCount;
      if (l == null)
        throw new Error("Total count is null or undefined");
      s.push(...c.classes ?? []);
      const u = [];
      for (a = bs; a < l; a += bs)
        u.push(
          _l(i, e, a).then((d) => {
            s.push(...d.classes ?? []);
          })
        );
      return await Promise.all(u), n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: s } }), s;
    })();
    return Wr[e] = o, o;
  }
), ep = Ba({
  name: "bsdd",
  initialState: kl,
  reducers: {
    resetState: () => kl,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(ys.pending, (t) => {
      t.loaded = !1;
    }).addCase(ys.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Zf.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
Vo("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
  const r = t();
  if (r.bsdd.classes[e])
    return r.bsdd.classes[e];
  if (!nn)
    throw new Error("BsddApi is not initialized");
  const o = await nn.api.classV1List({
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
const tp = (e, t) => e.bsdd.dictionaries[t], tS = (e, t) => e.bsdd.dictionaryClasses[t], np = (e) => e.bsdd.dictionaries, nS = (e) => e.bsdd.loaded, { resetState: rS } = ep.actions;
function oS(e) {
  return (t) => {
    nn = new za(e), Wr = {}, t(rS());
  };
}
const iS = ep.reducer;
function Wa(e) {
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
const sS = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = tS(t, e.location);
  if (r)
    return r;
  const o = await n(Zf(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function aS(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function hn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function cS(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return hn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await sS(e.referencedSource, n, t);
  if (!r)
    return hn("Failed to fetch classes for the referencedSource location", e);
  const o = aS(e, r);
  if (!o)
    return hn(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      e
    );
  if (!o.uri)
    return hn("Failed to find a URI for the matched class", e);
  const { uri: i, code: s, name: a } = o, c = {
    ...e,
    location: i ?? void 0,
    identification: s ?? void 0,
    name: a ?? void 0
  };
  if (!c.referencedSource || !c.referencedSource.location)
    return hn("referencedSource or its location is missing", c);
  const l = tp(n, c.referencedSource.location);
  return l ? (c.referencedSource = Wa(l), {
    ifcClassificationReference: c,
    validationState: "fixed",
    message: null
  }) : hn("Failed to find a matching dictionary for the matched class", c);
}
function Fl(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = tp(e, t.ifcClassification.location), r = Wa(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Ga = xg, ct = dg, lS = {
  ifcEntities: null
}, rp = Ba({
  name: "ifcData",
  initialState: lS,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), uS = (e) => e.ifcData.ifcEntities, { setIfcData: dS } = rp.actions;
function fS(e) {
  return e.endsWith("Type") ? e.slice(0, -4) : e;
}
function pS(e, t) {
  return (e ?? "") + (t ?? "");
}
function mS(e, t) {
  return {
    type: "IfcClassificationReference",
    identification: pS(e.type, e.predefinedType),
    referencedSource: t
  };
}
async function gS(e, t, n) {
  return (await Promise.all(
    e.map(async (o) => {
      if (o.type === "IfcClassificationReference") {
        const { ifcClassificationReference: i, validationState: s, message: a } = await cS(
          o,
          t,
          n
        );
        return s === "invalid" ? null : i;
      }
      return o;
    })
  )).filter((o) => o !== null);
}
const hS = Vo(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        var c;
        i.type && (i.type = fS(i.type));
        const s = [
          ...i.hasAssociations || [],
          mS(i, (c = r.settings.ifcDictionary) == null ? void 0 : c.ifcClassification)
        ], a = await gS(s, t, r);
        return { ...i, hasAssociations: a };
      })
    );
    t(dS(o));
  }
), bS = rp.reducer, vs = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
function yS(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function vS(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function wS(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return yS(i) && vS(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function xS({ item: e, index: t, setCardColor: n }) {
  var m;
  const { t: r } = Ot(), o = ct(Qf), i = ct(qx), [s, a] = q("grey"), [c, l] = q([]), [u, d] = q([]);
  G(() => {
    function g(h) {
      a(h), n(t, h);
    }
    c.every((h) => h !== null) ? g("green") : c.some((h) => h !== null) ? g("orange") : g("red");
  }, [c, t, n]), G(() => {
    const g = c.map((h) => h !== null ? "green" : "red");
    d(g);
  }, [c]), G(() => {
    l(
      o.map((g) => wS(e, g))
    );
  }, [e, o]);
  function f(g) {
    var w;
    console.log("Open bsddSearch", g);
    const h = JSON.stringify(g);
    (w = window == null ? void 0 : window.bsddBridge) == null || w.bsddSearch(h);
  }
  function p(g) {
    var w;
    const h = JSON.stringify(g);
    (w = window == null ? void 0 : window.bsddBridge) == null || w.bsddSelect(h);
  }
  return /* @__PURE__ */ M.jsxs(xn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ M.jsx(Zn, { size: "1.5em", color: vs[s] }),
    /* @__PURE__ */ M.jsxs(on, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ M.jsx(on.Target, { children: /* @__PURE__ */ M.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ M.jsx(Qe, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ M.jsxs(on.Dropdown, { children: [
        /* @__PURE__ */ M.jsxs(Qe, { children: [
          r("dictionaryValidationSummaryLabel"),
          ":"
        ] }),
        o.map((g, h) => {
          const w = g.ifcClassification.location || h;
          return /* @__PURE__ */ M.jsxs(xn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
            /* @__PURE__ */ M.jsx(Zn, { size: "1em", color: vs[u[h]] }),
            /* @__PURE__ */ M.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ M.jsx(Qe, { className: "truncate", children: g.ifcClassification.name }) })
          ] }, w);
        })
      ] })
    ] }),
    /* @__PURE__ */ M.jsx(Cn, { label: r("attachToType"), children: /* @__PURE__ */ M.jsx(
      Xn,
      {
        radius: "xl",
        onClick: () => f(e),
        disabled: !((m = i == null ? void 0 : i.ifcClassification) != null && m.location),
        children: /* @__PURE__ */ M.jsx(T0, { size: 20 })
      }
    ) }),
    /* @__PURE__ */ M.jsx(Cn, { label: r("selectObjects"), children: /* @__PURE__ */ M.jsx(Xn, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ M.jsx(L0, { size: 20 }) }) })
  ] });
}
function SS({ category: e, items: t, index: n }) {
  const { t: r } = Ot(), [o, i] = q("grey"), [s, a] = q(new Array(t.length).fill("grey")), c = Q((l, u) => {
    a((d) => {
      const f = [...d];
      return f[l] = u, f;
    });
  }, []);
  return G(() => {
    s.includes("orange") || s.includes("red") && s.includes("green") ? i("orange") : s.every((l) => l === "red") ? i("red") : s.every((l) => l === "green") && i("green");
  }, [s]), /* @__PURE__ */ M.jsxs(oe.Item, { value: n, children: [
    /* @__PURE__ */ M.jsx(oe.Control, { children: /* @__PURE__ */ M.jsxs(xn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ M.jsx(Zn, { size: "1.5em", color: vs[o], children: /* @__PURE__ */ M.jsx(Qe, { size: "xs", c: "white", children: t.length }) }),
      /* @__PURE__ */ M.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ M.jsx(Qe, { className: "truncate", children: e.length > 0 ? e : r("noDescription") }) })
    ] }) }),
    /* @__PURE__ */ M.jsx(oe.Panel, { mt: "-xs", pl: "xl", children: t.map((l, u) => /* @__PURE__ */ M.jsx(xS, { item: l, index: u, setCardColor: c }, u)) })
  ] }, e);
}
function CS(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function ES({ loading: e }) {
  const { t } = Ot(), n = ct(uS), r = kt(() => n ? Object.entries(CS(n, "description")).map(([s, a], c) => /* @__PURE__ */ M.jsx(SS, { category: s, items: a, index: s || c.toString() }, s)) : [], [n]), o = /* @__PURE__ */ M.jsx($0, {});
  return /* @__PURE__ */ M.jsx(at.Panel, { value: "link", children: /* @__PURE__ */ M.jsxs(V, { pos: "relative", style: { height: "100vh" }, children: [
    /* @__PURE__ */ M.jsx(Ea, { visible: e || !n }),
    n && r.length === 0 ? /* @__PURE__ */ M.jsxs(ca, { title: "No entities selected...", icon: o, mt: "xl", children: [
      t("entitySelectionInstruction"),
      /* @__PURE__ */ M.jsx(tr, { h: "md" }),
      t("needHelp"),
      " ",
      /* @__PURE__ */ M.jsx(
        "a",
        {
          href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",
          target: "_blank",
          rel: "noreferrer",
          children: t("checkDocumentation")
        }
      )
    ] }) : /* @__PURE__ */ M.jsx(oe, { chevronPosition: "left", children: r })
  ] }) });
}
const op = "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/", PS = "Export Type to IFC As";
function Bl(e, t) {
  return Object.values(e).find((n) => n.uri === t);
}
function Fi(e, t, n = "") {
  if (!e)
    return null;
  const r = t.find((o) => o.ifcClassification.location === e.uri);
  return r || {
    ifcClassification: Wa(e),
    parameterMapping: n
  };
}
const Ha = Ln(
  np,
  (e) => Object.values(e).map(
    (t) => ({
      value: t.uri,
      label: `${t.name} (${t.version})`
    })
  )
), Bi = (e) => e && e.ifcClassification && e.ifcClassification.location ? [
  {
    value: e.ifcClassification.location,
    label: e.ifcClassification.name || ""
  }
] : [], DS = Ln(
  Ha,
  (e) => e.filter((t) => t.value.startsWith(op))
), IS = Ln(
  Ha,
  (e) => e.filter((t) => !t.value.startsWith(op))
);
function RS({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r,
  setIsLoading: o
}) {
  const { t: i } = Ot(), s = ct(np), a = ct(Ha), c = ct(DS), l = ct(IS), u = kt(() => Bi(t == null ? void 0 : t.mainDictionary), [t == null ? void 0 : t.mainDictionary]), d = kt(() => Bi(t == null ? void 0 : t.ifcDictionary), [t == null ? void 0 : t.ifcDictionary]), f = kt(() => (t == null ? void 0 : t.filterDictionaries.filter((h) => h.ifcClassification && h.ifcClassification.location).map(Bi).flat()) || [], [t == null ? void 0 : t.filterDictionaries]), p = Q(
    (h) => {
      const w = h[0], x = Bl(Object.values(s), w) || null, y = Fi(
        x,
        t.mainDictionary ? [t.mainDictionary] : []
      ), v = t.filterDictionaries.filter(
        (S) => S.ifcClassification.location !== w
      );
      n({
        ...t,
        mainDictionary: y || null,
        filterDictionaries: v
      }), r(!0);
    },
    [s, t, n, r]
  ), m = Q(
    (h) => {
      var C;
      const w = h[0], x = Bl(Object.values(s), w) || null, y = ((C = t.ifcDictionary) == null ? void 0 : C.parameterMapping) || PS, v = Fi(
        x,
        t.ifcDictionary ? [t.ifcDictionary] : [],
        y
      ), S = t.filterDictionaries.filter(
        (P) => P.ifcClassification.location !== w
      );
      n({
        ...t,
        ifcDictionary: v || null,
        filterDictionaries: S
      }), r(!0);
    },
    [s, t, n, r]
  ), g = Q(
    (h) => {
      const w = Object.values(s).filter((S) => h.includes(S.uri)).map((S) => Fi(S, (t == null ? void 0 : t.filterDictionaries) || [])).filter(
        (S) => {
          var C, P;
          return S !== null && S.ifcClassification.location !== ((C = t == null ? void 0 : t.mainDictionary) == null ? void 0 : C.ifcClassification.location) && S.ifcClassification.location !== ((P = t == null ? void 0 : t.ifcDictionary) == null ? void 0 : P.ifcClassification.location);
        }
      ), x = (S, C) => {
        var P;
        return S && h.includes((P = S[0]) == null ? void 0 : P.value) ? null : C;
      }, y = x(u, t == null ? void 0 : t.mainDictionary), v = x(d, t == null ? void 0 : t.ifcDictionary);
      n({
        ...t,
        mainDictionary: y || null,
        ifcDictionary: v || null,
        filterDictionaries: w
      }), r(!0);
    },
    [
      s,
      u,
      t,
      d,
      n,
      r
    ]
  );
  return G(() => {
    a.length !== 0 && o(!1);
  }, [a, o]), /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx($n, { order: 5, children: i("dictionarySelectionLabel") }),
      /* @__PURE__ */ M.jsx(Qe, { size: "xs", c: "dimmed", children: i("dictionarySelectionInstruction") })
    ] }),
    /* @__PURE__ */ M.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ M.jsx(
        qn,
        {
          id: "mainDictionary",
          label: i("selectMainDictionary"),
          value: u.map((h) => h.value),
          onChange: p,
          placeholder: "Select main dictionary",
          data: l,
          maxValues: 1,
          searchable: !0,
          clearable: !0
        },
        "mainDictionary-select"
      ),
      /* @__PURE__ */ M.jsx(tr, { h: "xs" }),
      /* @__PURE__ */ M.jsx(
        qn,
        {
          id: "ifcDictionary",
          label: i("Selection IFC dictionary"),
          value: d.map((h) => h.value),
          onChange: m,
          placeholder: "Select filter dictionaries",
          data: c,
          maxValues: 1,
          searchable: !0,
          clearable: !0
        },
        "ifcDictionary-select"
      ),
      /* @__PURE__ */ M.jsx(tr, { h: "xs" }),
      /* @__PURE__ */ M.jsx(
        qn,
        {
          id: "filterDictionaries",
          label: i("selectFilterDictionaries"),
          value: f.map((h) => h.value),
          onChange: g,
          placeholder: "Select filter dictionaries",
          data: l,
          searchable: !0,
          clearable: !0
        },
        "filterDictionaries-select"
      )
    ] })
  ] }, e);
}
function ir(e) {
  "@babel/helpers - typeof";
  return ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ir(e);
}
function OS(e, t) {
  if (ir(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ir(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AS(e) {
  var t = OS(e, "string");
  return ir(t) == "symbol" ? t : String(t);
}
function NS(e, t, n) {
  return t = AS(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function jl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function zl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jl(Object(n), !0).forEach(function(r) {
      NS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Vl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), ji = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Wl = {
  INIT: "@@redux/INIT" + ji(),
  REPLACE: "@@redux/REPLACE" + ji(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + ji();
  }
};
function $S(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function ip(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Te(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Te(1));
    return n(ip)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Te(2));
  var o = e, i = t, s = [], a = s, c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function u() {
    if (c)
      throw new Error(Te(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Te(4));
    if (c)
      throw new Error(Te(5));
    var h = !0;
    return l(), a.push(g), function() {
      if (h) {
        if (c)
          throw new Error(Te(6));
        h = !1, l();
        var x = a.indexOf(g);
        a.splice(x, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!$S(g))
      throw new Error(Te(7));
    if (typeof g.type > "u")
      throw new Error(Te(8));
    if (c)
      throw new Error(Te(9));
    try {
      c = !0, i = o(i, g);
    } finally {
      c = !1;
    }
    for (var h = s = a, w = 0; w < h.length; w++) {
      var x = h[w];
      x();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Te(10));
    o = g, f({
      type: Wl.REPLACE
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
      subscribe: function(x) {
        if (typeof x != "object" || x === null)
          throw new Error(Te(11));
        function y() {
          x.next && x.next(u());
        }
        y();
        var v = h(y);
        return {
          unsubscribe: v
        };
      }
    }, g[Vl] = function() {
      return this;
    }, g;
  }
  return f({
    type: Wl.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[Vl] = m, r;
}
function Gl(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Hl(e, t) {
  if (typeof e == "function")
    return Gl(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Te(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Gl(o, t));
  }
  return n;
}
function sp() {
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
function TS() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(Te(15));
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(s);
      });
      return i = sp.apply(void 0, a)(o.dispatch), zl(zl({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var ap = { exports: {} }, cp = {};
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
function LS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var MS = typeof Object.is == "function" ? Object.is : LS, kS = Pn.useState, _S = Pn.useEffect, FS = Pn.useLayoutEffect, BS = Pn.useDebugValue;
function jS(e, t) {
  var n = t(), r = kS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return FS(function() {
    o.value = n, o.getSnapshot = t, zi(o) && i({ inst: o });
  }, [e, n, t]), _S(function() {
    return zi(o) && i({ inst: o }), e(function() {
      zi(o) && i({ inst: o });
    });
  }, [e]), BS(n), n;
}
function zi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !MS(e, n);
  } catch {
    return !0;
  }
}
function zS(e, t) {
  return t();
}
var VS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? zS : jS;
cp.useSyncExternalStore = Pn.useSyncExternalStore !== void 0 ? Pn.useSyncExternalStore : VS;
ap.exports = cp;
var lp = ap.exports, WS = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo = b, GS = lp;
function HS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var US = typeof Object.is == "function" ? Object.is : HS, qS = GS.useSyncExternalStore, KS = Wo.useRef, YS = Wo.useEffect, JS = Wo.useMemo, XS = Wo.useDebugValue;
WS.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = KS(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = JS(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, US(u, p))
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
  var a = qS(e, i[0], i[1]);
  return YS(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), XS(a), a;
};
function QS(e) {
  e();
}
let up = QS;
const ZS = (e) => up = e, eC = () => up, Ul = Symbol.for("react-redux-context"), ql = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function tC() {
  var e;
  if (!I.createContext)
    return {};
  const t = (e = ql[Ul]) != null ? e : ql[Ul] = /* @__PURE__ */ new Map();
  let n = t.get(I.createContext);
  return n || (n = I.createContext(null), t.set(I.createContext, n)), n;
}
const dp = /* @__PURE__ */ tC(), nC = () => {
  throw new Error("uSES not initialized!");
};
var fp = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe = typeof Symbol == "function" && Symbol.for, Ua = pe ? Symbol.for("react.element") : 60103, qa = pe ? Symbol.for("react.portal") : 60106, Go = pe ? Symbol.for("react.fragment") : 60107, Ho = pe ? Symbol.for("react.strict_mode") : 60108, Uo = pe ? Symbol.for("react.profiler") : 60114, qo = pe ? Symbol.for("react.provider") : 60109, Ko = pe ? Symbol.for("react.context") : 60110, Ka = pe ? Symbol.for("react.async_mode") : 60111, Yo = pe ? Symbol.for("react.concurrent_mode") : 60111, Jo = pe ? Symbol.for("react.forward_ref") : 60112, Xo = pe ? Symbol.for("react.suspense") : 60113, rC = pe ? Symbol.for("react.suspense_list") : 60120, Qo = pe ? Symbol.for("react.memo") : 60115, Zo = pe ? Symbol.for("react.lazy") : 60116, oC = pe ? Symbol.for("react.block") : 60121, iC = pe ? Symbol.for("react.fundamental") : 60117, sC = pe ? Symbol.for("react.responder") : 60118, aC = pe ? Symbol.for("react.scope") : 60119;
function qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ua:
        switch (e = e.type, e) {
          case Ka:
          case Yo:
          case Go:
          case Uo:
          case Ho:
          case Xo:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ko:
              case Jo:
              case Zo:
              case Qo:
              case qo:
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
function pp(e) {
  return qe(e) === Yo;
}
ee.AsyncMode = Ka;
ee.ConcurrentMode = Yo;
ee.ContextConsumer = Ko;
ee.ContextProvider = qo;
ee.Element = Ua;
ee.ForwardRef = Jo;
ee.Fragment = Go;
ee.Lazy = Zo;
ee.Memo = Qo;
ee.Portal = qa;
ee.Profiler = Uo;
ee.StrictMode = Ho;
ee.Suspense = Xo;
ee.isAsyncMode = function(e) {
  return pp(e) || qe(e) === Ka;
};
ee.isConcurrentMode = pp;
ee.isContextConsumer = function(e) {
  return qe(e) === Ko;
};
ee.isContextProvider = function(e) {
  return qe(e) === qo;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
};
ee.isForwardRef = function(e) {
  return qe(e) === Jo;
};
ee.isFragment = function(e) {
  return qe(e) === Go;
};
ee.isLazy = function(e) {
  return qe(e) === Zo;
};
ee.isMemo = function(e) {
  return qe(e) === Qo;
};
ee.isPortal = function(e) {
  return qe(e) === qa;
};
ee.isProfiler = function(e) {
  return qe(e) === Uo;
};
ee.isStrictMode = function(e) {
  return qe(e) === Ho;
};
ee.isSuspense = function(e) {
  return qe(e) === Xo;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Go || e === Yo || e === Uo || e === Ho || e === Xo || e === rC || typeof e == "object" && e !== null && (e.$$typeof === Zo || e.$$typeof === Qo || e.$$typeof === qo || e.$$typeof === Ko || e.$$typeof === Jo || e.$$typeof === iC || e.$$typeof === sC || e.$$typeof === aC || e.$$typeof === oC);
};
ee.typeOf = qe;
fp.exports = ee;
var cC = fp.exports, Ya = cC, lC = {
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
}, uC = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, dC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, mp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ja = {};
Ja[Ya.ForwardRef] = dC;
Ja[Ya.Memo] = mp;
function Kl(e) {
  return Ya.isMemo(e) ? mp : Ja[e.$$typeof] || lC;
}
var fC = Object.defineProperty, pC = Object.getOwnPropertyNames, Yl = Object.getOwnPropertySymbols, mC = Object.getOwnPropertyDescriptor, gC = Object.getPrototypeOf, Jl = Object.prototype;
function gp(e, t, n) {
  if (typeof t != "string") {
    if (Jl) {
      var r = gC(t);
      r && r !== Jl && gp(e, r, n);
    }
    var o = pC(t);
    Yl && (o = o.concat(Yl(t)));
    for (var i = Kl(e), s = Kl(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!uC[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = mC(t, c);
        try {
          fC(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var hC = gp;
const Xl = /* @__PURE__ */ Au(hC);
var hp = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa = Symbol.for("react.element"), Qa = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), ti = Symbol.for("react.strict_mode"), ni = Symbol.for("react.profiler"), ri = Symbol.for("react.provider"), oi = Symbol.for("react.context"), bC = Symbol.for("react.server_context"), ii = Symbol.for("react.forward_ref"), si = Symbol.for("react.suspense"), ai = Symbol.for("react.suspense_list"), ci = Symbol.for("react.memo"), li = Symbol.for("react.lazy"), yC = Symbol.for("react.offscreen"), bp;
bp = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Xa:
        switch (e = e.type, e) {
          case ei:
          case ni:
          case ti:
          case si:
          case ai:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case bC:
              case oi:
              case ii:
              case li:
              case ci:
              case ri:
                return e;
              default:
                return t;
            }
        }
      case Qa:
        return t;
    }
  }
}
te.ContextConsumer = oi;
te.ContextProvider = ri;
te.Element = Xa;
te.ForwardRef = ii;
te.Fragment = ei;
te.Lazy = li;
te.Memo = ci;
te.Portal = Qa;
te.Profiler = ni;
te.StrictMode = ti;
te.Suspense = si;
te.SuspenseList = ai;
te.isAsyncMode = function() {
  return !1;
};
te.isConcurrentMode = function() {
  return !1;
};
te.isContextConsumer = function(e) {
  return ot(e) === oi;
};
te.isContextProvider = function(e) {
  return ot(e) === ri;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xa;
};
te.isForwardRef = function(e) {
  return ot(e) === ii;
};
te.isFragment = function(e) {
  return ot(e) === ei;
};
te.isLazy = function(e) {
  return ot(e) === li;
};
te.isMemo = function(e) {
  return ot(e) === ci;
};
te.isPortal = function(e) {
  return ot(e) === Qa;
};
te.isProfiler = function(e) {
  return ot(e) === ni;
};
te.isStrictMode = function(e) {
  return ot(e) === ti;
};
te.isSuspense = function(e) {
  return ot(e) === si;
};
te.isSuspenseList = function(e) {
  return ot(e) === ai;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ei || e === ni || e === ti || e === si || e === ai || e === yC || typeof e == "object" && e !== null && (e.$$typeof === li || e.$$typeof === ci || e.$$typeof === ri || e.$$typeof === oi || e.$$typeof === ii || e.$$typeof === bp || e.getModuleId !== void 0);
};
te.typeOf = ot;
hp.exports = te;
var vC = hp.exports;
const wC = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function xC(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, c, l, u, d, f;
  function p(x, y) {
    return c = x, l = y, u = e(c, l), d = t(r, l), f = n(u, d, l), a = !0, f;
  }
  function m() {
    return u = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function h() {
    const x = e(c, l), y = !s(x, u);
    return u = x, y && (f = n(u, d, l)), f;
  }
  function w(x, y) {
    const v = !i(y, l), S = !o(x, c, y, l);
    return c = x, l = y, v && S ? m() : v ? g() : S ? h() : f;
  }
  return function(y, v) {
    return a ? w(y, v) : p(y, v);
  };
}
function SC(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = Ef(t, wC);
  const s = n(e, i), a = r(e, i), c = o(e, i);
  return xC(s, a, c, e, i);
}
function CC(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function ws(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ql(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function yp(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Ql(e);
      let l = i(a, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Ql(l), l = i(a, c)), l;
    }, i;
  };
}
function Za(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function EC(e) {
  return e && typeof e == "object" ? ws((t) => (
    // @ts-ignore
    CC(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    yp(e)
  ) : Za(e, "mapDispatchToProps") : ws((t) => ({
    dispatch: t
  }));
}
function PC(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    yp(e)
  ) : Za(e, "mapStateToProps") : ws(() => ({}));
}
function DC(e, t, n) {
  return _t({}, n, e, t);
}
function IC(e) {
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
function RC(e) {
  return e ? typeof e == "function" ? IC(e) : Za(e, "mergeProps") : () => DC;
}
function OC() {
  const e = eC();
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
const Zl = {
  notify() {
  },
  get: () => []
};
function vp(e, t) {
  let n, r = Zl, o = 0, i = !1;
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = OC());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Zl);
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
const AC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", uo = AC ? I.useLayoutEffect : I.useEffect;
function eu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Vi(e, t) {
  if (eu(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !eu(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const NC = ["reactReduxForwardedRef"];
let wp = nC;
const $C = (e) => {
  wp = e;
}, TC = [null, null];
function LC(e, t, n) {
  uo(() => e(...t), n);
}
function MC(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function kC(e, t, n, r, o, i, s, a, c, l, u) {
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
    } catch (x) {
      w = x, f = x;
    }
    w || (f = null), h === i.current ? s.current || l() : (i.current = h, c.current = h, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function _C(e, t) {
  return e === t;
}
function xp(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = _C,
  areOwnPropsEqual: i = Vi,
  areStatePropsEqual: s = Vi,
  areMergedPropsEqual: a = Vi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = dp
} = {}) {
  const u = l, d = PC(e), f = EC(t), p = RC(n), m = !!e;
  return (h) => {
    const w = h.displayName || h.name || "Component", x = `Connect(${w})`, y = {
      shouldHandleStateChanges: m,
      displayName: x,
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
    function v(P) {
      const [E, N, $] = I.useMemo(() => {
        const {
          reactReduxForwardedRef: ce
        } = P, X = Ef(P, NC);
        return [P.context, ce, X];
      }, [P]), T = I.useMemo(() => E && E.Consumer && // @ts-ignore
      vC.isContextConsumer(/* @__PURE__ */ I.createElement(E.Consumer, null)) ? E : u, [E, u]), k = I.useContext(T), _ = !!P.store && !!P.store.getState && !!P.store.dispatch, O = !!k && !!k.store, L = _ ? P.store : k.store, R = O ? k.getServerState : L.getState, F = I.useMemo(() => SC(L.dispatch, y), [L]), [A, H] = I.useMemo(() => {
        if (!m)
          return TC;
        const ce = vp(L, _ ? void 0 : k.subscription), X = ce.notifyNestedSubs.bind(ce);
        return [ce, X];
      }, [L, _, k]), K = I.useMemo(() => _ ? k : _t({}, k, {
        subscription: A
      }), [_, k, A]), ne = I.useRef(), ye = I.useRef($), ue = I.useRef(), Ne = I.useRef(!1);
      I.useRef(!1);
      const ve = I.useRef(!1), re = I.useRef();
      uo(() => (ve.current = !0, () => {
        ve.current = !1;
      }), []);
      const we = I.useMemo(() => () => ue.current && $ === ye.current ? ue.current : F(L.getState(), $), [L, $]), ke = I.useMemo(() => (X) => A ? kC(
        m,
        L,
        A,
        // @ts-ignore
        F,
        ye,
        ne,
        Ne,
        ve,
        ue,
        H,
        X
      ) : () => {
      }, [A]);
      LC(MC, [ye, ne, Ne, $, ue, H]);
      let Ce;
      try {
        Ce = wp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ke,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          we,
          R ? () => F(R(), $) : we
        );
      } catch (ce) {
        throw re.current && (ce.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), ce;
      }
      uo(() => {
        re.current = void 0, ue.current = void 0, ne.current = Ce;
      });
      const Ee = I.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ I.createElement(h, _t({}, Ce, {
          ref: N
        }))
      ), [N, h, Ce]);
      return I.useMemo(() => m ? /* @__PURE__ */ I.createElement(T.Provider, {
        value: K
      }, Ee) : Ee, [T, Ee, K]);
    }
    const C = I.memo(v);
    if (C.WrappedComponent = h, C.displayName = v.displayName = x, c) {
      const E = I.forwardRef(function($, T) {
        return /* @__PURE__ */ I.createElement(C, _t({}, $, {
          reactReduxForwardedRef: T
        }));
      });
      return E.displayName = x, E.WrappedComponent = h, Xl(E, h);
    }
    return Xl(C, h);
  };
}
function FC({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = I.useMemo(() => {
    const l = vp(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = I.useMemo(() => e.getState(), [e]);
  uo(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || dp;
  return /* @__PURE__ */ I.createElement(c.Provider, {
    value: s
  }, n);
}
$C(lp.useSyncExternalStore);
ZS(Hm);
function BC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Sp(e, t) {
  var n = q(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = z(!0), o = z(n), i = r.current || !!(t && o.current.inputs && BC(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return G(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function jC(e, t) {
  return Sp(function() {
    return e;
  }, t);
}
var Y = Sp, W = jC, zC = !0, Wi = "Invariant failed";
function VC(e, t) {
  if (!e) {
    if (zC)
      throw new Error(Wi);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Wi, ": ").concat(n) : Wi;
    throw new Error(r);
  }
}
var lt = function(t) {
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
}, ec = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, tu = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, WC = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Gi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, tc = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Gi : r, i = t.border, s = i === void 0 ? Gi : i, a = t.padding, c = a === void 0 ? Gi : a, l = lt(ec(n, o)), u = lt(tu(n, s)), d = lt(tu(u, c));
  return {
    marginBox: l,
    borderBox: lt(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: c
  };
}, Je = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && VC(!1), o;
}, GC = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, fo = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = WC(r, n);
  return tc({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, po = function(t, n) {
  return n === void 0 && (n = GC()), fo(t, n);
}, Cp = function(t, n) {
  var r = {
    top: Je(n.marginTop),
    right: Je(n.marginRight),
    bottom: Je(n.marginBottom),
    left: Je(n.marginLeft)
  }, o = {
    top: Je(n.paddingTop),
    right: Je(n.paddingRight),
    bottom: Je(n.paddingBottom),
    left: Je(n.paddingLeft)
  }, i = {
    top: Je(n.borderTopWidth),
    right: Je(n.borderRightWidth),
    bottom: Je(n.borderBottomWidth),
    left: Je(n.borderLeftWidth)
  };
  return tc({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Ep = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Cp(n, r);
}, nu = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function HC(e, t) {
  return !!(e === t || nu(e) && nu(t));
}
function UC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!HC(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = UC);
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
var qC = function(t) {
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
const sr = qC;
function Pp(e, t) {
}
Pp.bind(null, "warn");
Pp.bind(null, "error");
function Ft() {
}
function KC(e, t) {
  return {
    ...e,
    ...t
  };
}
function Xe(e, t, n) {
  const r = t.map((o) => {
    const i = KC(n, o.options);
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
const YC = "Invariant failed";
class mo extends Error {
}
mo.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  if (!e)
    throw new mo(YC);
}
class JC extends b.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Ft, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof mo && n.preventDefault();
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
    if (t instanceof mo) {
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
const XC = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, go = (e) => e + 1, QC = (e) => `
  You have lifted an item in position ${go(e.source.index)}
`, Dp = (e, t) => {
  const n = e.droppableId === t.droppableId, r = go(e.index), o = go(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Ip = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, ZC = (e) => {
  const t = e.destination;
  if (t)
    return Dp(e.source, t);
  const n = e.combine;
  return n ? Ip(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, ru = (e) => `
  The item has returned to its starting position
  of ${go(e.index)}
`, e1 = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${ru(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Dp(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Ip(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${ru(e.source)}
  `;
}, t1 = {
  dragHandleUsageInstructions: XC,
  onDragStart: QC,
  onDragUpdate: ZC,
  onDragEnd: e1
};
var Gr = t1;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), je = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Bt = (e, t) => e.x === t.x && e.y === t.y, Mn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), cn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, ar = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ou = (e, t) => Math.min(...t.map((n) => ar(e, n))), Rp = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var n1 = (e, t) => {
  const n = lt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Er = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), iu = (e) => [{
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
}], r1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, o1 = (e, t) => t ? Er(e, t.scroll.diff.displacement) : e, i1 = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, s1 = (e, t) => t && t.shouldClipSubject ? n1(t.pageMarginBox, e) : lt(e);
var Dn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = o1(e.marginBox, r), i = i1(o, n, t), s = s1(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, nc = (e, t) => {
  e.frame || B(!1);
  const n = e.frame, r = je(t, n.scroll.initial), o = Mn(r), i = {
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
const Op = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ap = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ui = de((e) => Object.values(e)), a1 = de((e) => Object.values(e));
var kn = de((e, t) => a1(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function rc(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function di(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var fi = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), c1 = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !rc(o))
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
  const l = fi(t, r);
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
}, _n = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Np = {
  point: fe,
  value: 0
}, cr = {
  invisible: {},
  visible: {},
  all: []
}, l1 = {
  displaced: cr,
  displacedBy: Np,
  at: null
};
var u1 = l1, Ze = (e, t) => (n) => e <= n && n <= t, $p = (e) => {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && s || l && i;
  };
}, d1 = (e) => {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const oc = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Tp = {
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
var f1 = (e) => (t) => {
  const n = Ze(t.top, t.bottom), r = Ze(t.left, t.right);
  return (o) => e === oc ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const p1 = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return Er(e, n);
}, m1 = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, g1 = (e, t, n) => n(t)(e), ic = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? p1(e, t) : e;
  return m1(i, t, o) && g1(i, n, o);
}, h1 = (e) => ic({
  ...e,
  isVisibleThroughFrameFn: $p
}), Lp = (e) => ic({
  ...e,
  isVisibleThroughFrameFn: d1
}), b1 = (e) => ic({
  ...e,
  isVisibleThroughFrameFn: f1(e.destination.axis)
}), y1 = (e, t, n) => {
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
function v1(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return lt(ec(n, r));
}
function lr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const l = v1(c, n), u = c.descriptor.id;
    if (a.all.push(u), !h1({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = y1(u, i, o), p = {
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
function w1(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function su({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = w1(e, {
    inHomeList: t
  });
  return {
    displaced: cr,
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
function ho({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const c = _n(e, n);
  if (s == null)
    return su({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return su({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = fi(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: lr({
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
function Ht(e, t) {
  return !!t.effected[e];
}
var x1 = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return Ht(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, S1 = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, C1 = ({
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
    const d = S1({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : ho({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = x1({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : ho({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, E1 = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Ht(n, t) ? o ? fe : Mn(r.point) : o ? r.point : fe;
}, P1 = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = di(t);
  r || B(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = E1({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const Mp = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, D1 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, sc = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, au = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => cn(e.line, t.marginBox[e.end] + Mp(e, n), sc(e, t.marginBox, n)), cu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => cn(e.line, t.marginBox[e.start] - D1(e, n), sc(e, t.marginBox, n)), I1 = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => cn(e.line, t.contentBox[e.start] + Mp(e, n), sc(e, t.contentBox, n));
var R1 = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = kn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return I1({
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
    if (Ht(u, o))
      return cu({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = fo(f.page, l.point);
    return cu({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Ht(d.descriptor.id, o)) {
    const f = fo(d.page, Mn(o.displacedBy.point));
    return au({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return au({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, xs = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const O1 = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? R1({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : P1({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var pi = (e) => {
  const t = O1(e), n = e.droppable;
  return n ? xs(n, t) : t;
}, kp = (e, t) => {
  const n = je(t, e.scroll.initial), r = Mn(n);
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
function lu(e, t) {
  return e.map((n) => t[n]);
}
function A1(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var N1 = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = kp(t, he(t.scroll.current, o)), s = n.frame ? nc(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, c = lr({
    afterDragging: lu(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = lr({
    afterDragging: lu(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = A1(m, f);
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
}, $1 = (e, t) => he(e.scroll.diff.displacement, t), ac = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = $1(n, e), o = je(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, _p = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = je(n, e.page.borderBox.center), c = {
    target: Er(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? b1(c) : Lp(c);
}, T1 = ({
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
  const l = kn(n.descriptor.id, r), u = _n(t, n), d = c1({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || C1({
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
  const f = pi({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (_p({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: ac({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = je(f, s), g = N1({
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
const Ie = (e) => {
  const t = e.subject.active;
  return t || B(!1), t;
};
var L1 = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = Ze(i[s.start], i[s.end]), c = ui(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => $p(o.frame)(Ie(u))).filter((u) => {
    const d = Ie(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = Ie(u), f = Ze(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = Ie(u)[s.crossAxisStart], p = Ie(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => Ie(u)[s.crossAxisStart] === Ie(f[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => Ze(Ie(u)[s.start], Ie(u)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => Ie(u)[s.start] - Ie(d)[s.start])[0] : c.sort((u, d) => {
    const f = ou(t, iu(Ie(u))), p = ou(t, iu(Ie(d)));
    return f !== p ? f - p : Ie(u)[s.start] - Ie(d)[s.start];
  })[0];
};
const uu = (e, t) => {
  const n = e.page.borderBox.center;
  return Ht(e.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
}, M1 = (e, t) => {
  const n = e.page.borderBox;
  return Ht(e.descriptor.id, t) ? Er(n, Mn(t.displacedBy.point)) : n;
};
var k1 = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => Lp({
  target: M1(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = ar(e, xs(n, uu(s, o))), l = ar(e, xs(n, uu(a, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, Pr = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: cn(t.line, r)
  };
});
const _1 = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return cn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = kn(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : cn(r.line, c);
}, Fp = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Bp = (e, t, n) => {
  const r = e.frame;
  _n(t, e) && B(!1), e.subject.withPlaceholder && B(!1);
  const o = Pr(e.axis, t.displaceBy).point, i = _1(e, o, n), s = {
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
  const a = i ? he(r.scroll.max, i) : r.scroll.max, c = Fp(r, a), l = Dn({
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
}, F1 = (e) => {
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
  const o = Fp(n, r), i = Dn({
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
var B1 = ({
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
      displaced: cr,
      displacedBy: Np,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = pi({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = _n(r, i) ? i : Bp(i, r, o);
    return _p({
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
  })(), u = Pr(i.axis, r.displaceBy);
  return ho({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: cr,
    index: l
  });
}, j1 = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = L1({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = kn(c.descriptor.id, o), u = k1({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = B1({
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
  const f = pi({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: ac({
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
const z1 = (e, t) => {
  const n = We(e);
  return n ? t[n] : null;
};
var V1 = ({
  state: e,
  type: t
}) => {
  const n = z1(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? T1({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : j1({
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
function en(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function jp(e) {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function W1(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function G1({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = cn(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: ar(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function H1({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = ui(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !W1(e, i))
      return !1;
    if (jp(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], u = Ze(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : G1({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const zp = (e, t) => lt(Er(e, t));
var U1 = (e, t) => {
  const n = e.frame;
  return n ? zp(t, n.scroll.diff.value) : t;
};
function Vp({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function q1({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var K1 = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, c = Pr(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = fi(t, r).find((g) => {
    const h = g.descriptor.id, w = g.page.borderBox.center[a.line], x = Ht(h, s), y = Vp({
      displaced: o,
      id: h
    });
    return x ? y ? d <= w : u < w - l : y ? d <= w + l : u < w;
  }) || null, m = q1({
    draggable: t,
    closest: p,
    inHomeList: _n(t, n)
  });
  return ho({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: m
  });
};
const Y1 = 4;
var J1 = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = Pr(r.axis, e.displaceBy), c = a.value, l = t[s.start], u = t[s.end], f = fi(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[s.size] / Y1, y = Ht(g, i), v = Vp({
      displaced: n.displaced,
      id: g
    });
    return y ? v ? u > h[s.start] + x && u < h[s.end] - x : l > h[s.start] - c + x && l < h[s.end] - c - x : v ? u > h[s.start] + c + x && u < h[s.end] + c - x : l > h[s.start] + x && l < h[s.end] - x;
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
}, Wp = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = zp(t.page.borderBox, e), c = H1({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return u1;
  const l = r[c], u = kn(l.descriptor.id, n), d = U1(l, a);
  return J1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }) || K1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, cc = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const X1 = ({
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
  const s = F1(i);
  return cc(n, s);
};
var Q1 = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = X1({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = We(o);
  if (!s)
    return i;
  const a = n[s];
  if (_n(e, a) || a.subject.withPlaceholder)
    return i;
  const c = Bp(a, e, t);
  return cc(i, c);
}, Kn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = je(c, e.initial.client.selection), u = {
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
  const p = a.draggables[e.critical.draggable.id], m = o || Wp({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = Q1({
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
function Z1(e, t) {
  return e.map((n) => t[n]);
}
var Gp = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = Z1(i.all, n), a = lr({
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
}, Hp = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = pi({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return ac({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Up = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && B(!1);
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, c = s[e.critical.draggable.id], l = We(r);
  l || B(!1);
  const u = a[l], d = Gp({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Hp({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Kn({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, eE = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), qp = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Pr(t.axis, e.displaceBy), i = kn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && B(!1);
  const a = i.slice(s + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: lr({
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
        destination: eE(e.descriptor)
      }
    },
    afterCritical: l
  };
}, tE = (e, t) => ({
  draggables: e.draggables,
  droppables: cc(e.droppables, t)
}), nE = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = fo(e.client, t), o = po(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, rE = (e) => {
  const t = e.frame;
  return t || B(!1), t;
}, oE = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = rE(s).scroll.diff.value, l = he(r, c);
    return nE({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, iE = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((w) => {
    const x = e.dimensions.droppables[w.droppableId];
    return nc(x, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Op(n)
  }, o = Ap(oE({
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
  } = qp({
    draggable: l,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = Wp({
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
const Ss = (e) => e.movementMode === "SNAP", Hi = (e, t, n) => {
  const r = tE(e.dimensions, t);
  return !Ss(e) || n ? Kn({
    state: e,
    dimensions: r
  }) : Up({
    state: e,
    dimensions: r
  });
};
function Ui(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const du = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var sE = (e = du, t) => {
  if (t.type === "FLUSH")
    return {
      ...du,
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
    }, d = ui(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = qp({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || B(!1), iE({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    en(e) || B(!1);
    const {
      client: n
    } = t.payload;
    return Bt(n, e.current.client.selection) ? e : Kn({
      state: e,
      clientSelection: n,
      impact: Ss(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Ui(e);
    en(e) || B(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = nc(o, r);
    return Hi(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    en(e) || B(!1);
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || B(!1), o.isEnabled === r && B(!1);
    const i = {
      ...o,
      isEnabled: r
    };
    return Hi(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    en(e) || B(!1);
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || B(!1), o.isCombineEnabled === r && B(!1);
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Hi(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    en(e) || B(!1), e.isWindowScrollAllowed || B(!1);
    const n = t.payload.newScroll;
    if (Bt(e.viewport.scroll.current, n))
      return Ui(e);
    const r = kp(e.viewport, n);
    return Ss(e) ? Up({
      state: e,
      viewport: r
    }) : Kn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!en(e))
      return e;
    const n = t.payload.maxScroll;
    if (Bt(n, e.viewport.scroll.max))
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
    const n = V1({
      state: e,
      type: t.type
    });
    return n ? Kn({
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
const aE = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), cE = (e) => ({
  type: "LIFT",
  payload: e
}), lE = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), uE = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), dE = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), fE = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), pE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), mE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), Kp = (e) => ({
  type: "MOVE",
  payload: e
}), gE = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), hE = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), bE = () => ({
  type: "MOVE_UP",
  payload: null
}), yE = () => ({
  type: "MOVE_DOWN",
  payload: null
}), vE = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), wE = () => ({
  type: "MOVE_LEFT",
  payload: null
}), lc = () => ({
  type: "FLUSH",
  payload: null
}), xE = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), uc = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Yp = (e) => ({
  type: "DROP",
  payload: e
}), SE = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Jp = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var CE = (e) => ({
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
  c.phase === "DROP_ANIMATING" && n(uc({
    completed: c.completed
  })), t().phase !== "IDLE" && B(!1), n(lc()), n(aE({
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
  n(lE({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, EE = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const dc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, ur = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Xp = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Qt = `${Xp.outOfTheWay}s ${dc.outOfTheWay}`, Yn = {
  fluid: `opacity ${Qt}`,
  snap: `transform ${Qt}, opacity ${Qt}`,
  drop: (e) => {
    const t = `${e}s ${dc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Qt}`,
  placeholder: `height ${Qt}, width ${Qt}, margin ${Qt}`
}, fu = (e) => Bt(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Cs = {
  moveTo: fu,
  drop: (e, t) => {
    const n = fu(e);
    if (n)
      return t ? `${n} scale(${ur.scale.drop})` : n;
  }
}, {
  minDropTime: Es,
  maxDropTime: Qp
} = Xp, PE = Qp - Es, pu = 1500, DE = 0.6;
var IE = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = ar(e, t);
  if (r <= 0)
    return Es;
  if (r >= pu)
    return Qp;
  const o = r / pu, i = Es + PE * o, s = n === "CANCEL" ? i * DE : i;
  return Number(s.toFixed(2));
}, RE = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = We(e), c = a ? s[a] : null, l = s[t.descriptor.droppableId], u = Hp({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return je(u, t.client.borderBox.center);
}, OE = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Gp({
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
    displaced: cr
  },
  didDropInsideDroppable: !0
};
const AE = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(SE({
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
  } = OE({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? rc(u) : null, p = d ? di(u) : null, m = {
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
  }, h = RE({
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
  if (!(!Bt(o.current.client.offset, h) || !!g.combine)) {
    t(uc({
      completed: w
    }));
    return;
  }
  const y = IE({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(xE({
    newHomeClientOffset: h,
    dropDuration: y,
    completed: w
  }));
};
var NE = AE, Zp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function $E(e) {
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
function TE({
  onWindowScroll: e
}) {
  function t() {
    e(Zp());
  }
  const n = sr(t), r = $E(n);
  let o = Ft;
  function i() {
    return o !== Ft;
  }
  function s() {
    i() && B(!1), o = Xe(window, [r]);
  }
  function a() {
    i() || B(!1), n.cancel(), o(), o = Ft;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const LE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", ME = (e) => {
  const t = TE({
    onWindowScroll: (n) => {
      e.dispatch(gE({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && LE(r) && t.stop(), n(r);
  };
};
var kE = ME, _E = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, FE = () => {
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
const BE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, jE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, zE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Wn = (e, t) => {
  t();
}, Mr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function qi(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = _E(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var VE = (e, t) => {
  const n = FE();
  let r = null;
  const o = (d, f) => {
    r && B(!1), Wn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && B(!1), Wn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Mr(d, f));
    });
  }, s = (d, f) => {
    r && B(!1);
    const p = Mr(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Wn("onDragStart", () => qi(e().onDragStart, p, t, Gr.onDragStart));
    });
  }, a = (d, f) => {
    const p = rc(f), m = di(f);
    r || B(!1);
    const g = !zE(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !BE(r.lastLocation, p);
    h && (r.lastLocation = p);
    const w = !jE(r.lastCombine, m);
    if (w && (r.lastCombine = m), !g && !h && !w)
      return;
    const x = {
      ...Mr(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Wn("onDragUpdate", () => qi(e().onDragUpdate, x, t, Gr.onDragUpdate));
    });
  }, c = () => {
    r || B(!1), n.flush();
  }, l = (d) => {
    r || B(!1), r = null, Wn("onDragEnd", () => qi(e().onDragEnd, d, t, Gr.onDragEnd));
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
        ...Mr(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, WE = (e, t) => {
  const n = VE(e, t);
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
const GE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && B(!1), e.dispatch(uc({
    completed: r.completed
  }));
};
var HE = GE;
const UE = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Jp());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Xe(window, [s]);
    });
  };
};
var qE = UE, KE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, YE = (e) => {
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
const JE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var XE = (e) => (t) => (n) => (r) => {
  if (JE(r)) {
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
const QE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Yp({
    reason: r.reason
  })));
};
var ZE = QE;
const eP = sp;
var tP = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => ip(sE, eP(TS(EE(n), KE(e), CE(e), NE, HE, qE, ZE, XE(i), kE, YE(t), WE(r, o))));
const Ki = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function nP({
  registry: e,
  callbacks: t
}) {
  let n = Ki(), r = null;
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
      n = Ki(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = Ki());
    }
  };
}
var em = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = je({
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
}, tm = () => {
  const e = document.documentElement;
  return e || B(!1), e;
}, nm = () => {
  const e = tm();
  return em({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, rP = () => {
  const e = Zp(), t = nm(), n = e.y, r = e.x, o = tm(), i = o.clientWidth, s = o.clientHeight, a = r + i, c = n + s;
  return {
    frame: lt({
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
}, oP = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = rP(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: Ap(a),
      droppables: Op(s)
    },
    critical: e,
    viewport: r
  };
};
function mu(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var iP = (e, t) => {
  let n = null;
  const r = nP({
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
    f.type === "ADDITION" && mu(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && mu(e, p, f.value) && r.remove(f.value);
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
      }, oP({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, rm = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", sP = (e) => {
  window.scrollBy(e.x, e.y);
};
const aP = de((e) => ui(e).filter((t) => !(!t.isEnabled || !t.frame))), cP = (e, t) => aP(t).find((r) => (r.frame || B(!1), jp(r.frame.pageMarginBox)(e))) || null;
var lP = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return cP(e, n);
};
const dr = {
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
var uP = (e, t, n = () => dr) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, om = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, fc = 1, dP = (e, t, n = () => dr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return fc;
  const i = 1 - om({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, fP = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return fc;
  const u = om({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, gu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = dP(e, t, o);
  return i === 0 ? 0 : r ? Math.max(fP(i, n, o), fc) : i;
}, hu = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = uP(e, r, i);
  return t[r.end] < t[r.start] ? gu({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * gu({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, pP = ({
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
const mP = Rp((e) => e === 0 ? 0 : e);
var im = ({
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
  }, a = hu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: oc,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = hu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Tp,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = mP({
    x: c,
    y: a
  });
  if (Bt(l, fe))
    return null;
  const u = pP({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? Bt(u, fe) ? null : u : null;
};
const gP = Rp((e) => e === 0 ? 0 : e > 0 ? 1 : -1), pc = (() => {
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
    return Bt(i, fe) ? null : i;
  };
})(), sm = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = gP(n), i = pc({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, mc = (e, t) => sm({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), hP = (e, t) => {
  if (!mc(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return pc({
    current: r,
    max: n,
    change: t
  });
}, gc = (e, t) => {
  const n = e.frame;
  return n ? sm({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, bP = (e, t) => {
  const n = e.frame;
  return !n || !gc(e, t) ? null : pc({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var yP = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = im({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && mc(e, s) ? s : null;
}, vP = ({
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
  const a = im({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && gc(e, a) ? a : null;
}, bu = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = yP({
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
  const l = lP({
    center: s,
    destination: We(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = vP({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(l.descriptor.id, u);
}, wP = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => dr
}) => {
  const r = sr(e), o = sr(t);
  let i = null;
  const s = (l) => {
    i || B(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    bu({
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
      bu({
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
}, xP = ({
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
    if (!gc(a, c))
      return c;
    const l = bP(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = je(c, l);
    return t(a.descriptor.id, u), je(c, u);
  }, i = (a, c, l) => {
    if (!a || !mc(c, l))
      return l;
    const u = hP(c, l);
    if (!u)
      return n(l), null;
    const d = je(l, u);
    return n(d), je(l, d);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = We(a.impact);
    l || B(!1);
    const u = o(a.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, SP = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = wP({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = xP({
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
const In = "data-rfd", Rn = (() => {
  const e = `${In}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ps = (() => {
  const e = `${In}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), CP = (() => {
  const e = `${In}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), yu = {
  contextId: `${In}-scroll-container-context-id`
}, EP = (e) => (t) => `[${t}="${e}"]`, Gn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), PP = "pointer-events: none;";
var DP = (e) => {
  const t = EP(e), n = (() => {
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
        dragging: PP,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Yn.outOfTheWay};
    `;
    return {
      selector: t(Ps.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(CP.contextId),
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
    always: Gn(s, "always"),
    resting: Gn(s, "resting"),
    dragging: Gn(s, "dragging"),
    dropAnimating: Gn(s, "dropAnimating"),
    userCancel: Gn(s, "userCancel")
  };
};
const IP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? vo : G;
var Ge = IP;
const Yi = () => {
  const e = document.querySelector("head");
  return e || B(!1), e;
}, vu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function RP(e, t) {
  const n = Y(() => DP(e), [e]), r = z(null), o = z(null), i = W(de((d) => {
    const f = o.current;
    f || B(!1), f.textContent = d;
  }), []), s = W((d) => {
    const f = r.current;
    f || B(!1), f.textContent = d;
  }, []);
  Ge(() => {
    !r.current && !o.current || B(!1);
    const d = vu(t), f = vu(t);
    return r.current = d, o.current = f, d.setAttribute(`${In}-always`, e), f.setAttribute(`${In}-dynamic`, e), Yi().appendChild(d), Yi().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || B(!1), Yi().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = W(() => i(n.dragging), [i, n.dragging]), c = W((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = W(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return Y(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function am(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var cm = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function mi(e) {
  return e instanceof cm(e).HTMLElement;
}
function OP(e, t) {
  const n = `[${Rn.contextId}="${e}"]`, r = am(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(Rn.draggableId) === t);
  return !o || !mi(o) ? null : o;
}
function AP(e) {
  const t = z({}), n = z(null), r = z(null), o = z(!1), i = W(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), s = W(function(f) {
    const p = OP(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = W(function(f, p) {
    n.current === f && (n.current = p);
  }, []), c = W(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), l = W(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Rn.draggableId) === f && (n.current = f);
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
function NP() {
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
function $P() {
  const e = Y(NP, []);
  return G(() => function() {
    b.version.startsWith("16") || b.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var hc = b.createContext(null), bo = () => {
  const e = document.body;
  return e || B(!1), e;
};
const TP = {
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
var LP = TP;
const MP = (e) => `rfd-announcement-${e}`;
function kP(e) {
  const t = Y(() => MP(e), [e]), n = z(null);
  return G(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), _t(i.style, LP), bo().appendChild(i), function() {
      setTimeout(function() {
        const c = bo();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), W((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
  }, []);
}
let _P = 0;
const lm = {
  separator: "::"
};
function FP(e, t = lm) {
  return Y(() => `${e}${t.separator}${_P++}`, [t.separator, e]);
}
function BP(e, t = lm) {
  const n = b.useId();
  return Y(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var bc = "useId" in b ? BP : FP;
function jP({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function zP({
  contextId: e,
  text: t
}) {
  const n = bc("hidden-text", {
    separator: "-"
  }), r = Y(() => jP({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return G(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", bo().appendChild(i), function() {
      const a = bo();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var gi = b.createContext(null);
function um(e) {
  const t = z(e);
  return G(() => {
    t.current = e;
  }), t;
}
function VP() {
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
function fr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const WP = 9, GP = 13, yc = 27, dm = 32, HP = 33, UP = 34, qP = 35, KP = 36, YP = 37, JP = 38, XP = 39, QP = 40, ZP = {
  [GP]: !0,
  [WP]: !0
};
var fm = (e) => {
  ZP[e.keyCode] && e.preventDefault();
};
const eD = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var hi = eD;
const pm = 0, wu = 5;
function tD(e, t) {
  return Math.abs(t.x - e.x) >= wu || Math.abs(t.y - e.y) >= wu;
}
const xu = {
  type: "IDLE"
};
function nD({
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
      if (i !== pm)
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
      if (!tD(u, c))
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
      if (o.keyCode === yc) {
        o.preventDefault(), e();
        return;
      }
      fm(o);
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
    eventName: hi,
    fn: e
  }];
}
function rD(e) {
  const t = z(xu), n = z(Ft), r = Y(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== pm || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
  }), [e]), i = W(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = Xe(window, [o, r], d);
  }, [o, r]), s = W(() => {
    t.current.type !== "IDLE" && (t.current = xu, n.current(), i());
  }, [i]), a = W(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), c = W(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = nD({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = Xe(window, f, d);
  }, [a, s]), l = W(function(d, f) {
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
function oD() {
}
const iD = {
  [UP]: !0,
  [HP]: !0,
  [KP]: !0,
  [qP]: !0
};
function sD(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === yc) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === dm) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === QP) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === JP) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === XP) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === YP) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (iD[o.keyCode]) {
        o.preventDefault();
        return;
      }
      fm(o);
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
    eventName: hi,
    fn: n
  }];
}
function aD(e) {
  const t = z(oD), n = Y(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== dm)
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
      t.current = Xe(window, sD(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = W(function() {
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
const Ji = {
  type: "IDLE"
}, cD = 120, lD = 0.15;
function uD({
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
      n.keyCode === yc && n.preventDefault(), e();
    }
  }, {
    eventName: hi,
    fn: e
  }];
}
function dD({
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
      if (!i || !(i.force >= lD))
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
    eventName: hi,
    fn: e
  }];
}
function fD(e) {
  const t = z(Ji), n = z(Ft), r = W(function() {
    return t.current;
  }, []), o = W(function(p) {
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
        clientX: w,
        clientY: x
      } = h, y = {
        x: w,
        y: x
      };
      n.current(), d(g, y);
    }
  }), [e]), s = W(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = Xe(window, [i], p);
  }, [i]), a = W(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Ji), n.current(), s());
  }, [s, o]), c = W(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = W(function() {
    const p = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: c,
      completed: a,
      getPhase: r
    }, g = Xe(window, dD(m), p), h = Xe(window, uD(m), p);
    n.current = function() {
      g(), h();
    };
  }, [c, r, a]), u = W(function() {
    const p = r();
    p.type !== "PENDING" && B(!1);
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = W(function(p, m) {
    r().type !== "IDLE" && B(!1);
    const g = setTimeout(u, cD);
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
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Ji));
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
const pD = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function mm(e, t) {
  if (t == null)
    return !1;
  if (pD.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : mm(e, t.parentElement);
}
function mD(e, t) {
  const n = t.target;
  return mi(n) ? mm(e, n) : !1;
}
var gD = (e) => lt(e.getBoundingClientRect()).center;
function hD(e) {
  return e instanceof cm(e).Element;
}
const bD = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function gm(e, t) {
  return e == null ? null : e[bD](t) ? e : gm(e.parentElement, t);
}
function yD(e, t) {
  return e.closest ? e.closest(t) : gm(e, t);
}
function vD(e) {
  return `[${Rn.contextId}="${e}"]`;
}
function wD(e, t) {
  const n = t.target;
  if (!hD(n))
    return null;
  const r = vD(e), o = yD(n, r);
  return !o || !mi(o) ? null : o;
}
function xD(e, t) {
  const n = wD(e, t);
  return n ? n.getAttribute(Rn.draggableId) : null;
}
function SD(e, t) {
  const n = `[${Ps.contextId}="${e}"]`, o = am(document, n).find((i) => i.getAttribute(Ps.id) === t);
  return !o || !mi(o) ? null : o;
}
function CD(e) {
  e.preventDefault();
}
function kr({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return !(!n() || e !== t);
}
function hm({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !rm(t.getState(), r));
}
function ED({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!hm({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = SD(t, c.descriptor.id);
  if (!l || s && !c.options.canDragInteractiveElements && mD(l, s))
    return null;
  const u = e.claim(i || Ft);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(S, C) {
    kr({
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
    d !== "PRE_DRAG" && (C(), B(!1)), n.dispatch(cE(S.liftActionArgs)), d = "DRAGGING";
    function P(E, N = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), N.shouldBlockNextClick) {
        const $ = Xe(window, [{
          eventName: "click",
          fn: CD,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      C(), n.dispatch(Yp({
        reason: E
      }));
    }
    return {
      isActive: () => kr({
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
  function w(S) {
    const C = sr((E) => {
      g(() => Kp({
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
  function x() {
    const S = {
      moveUp: () => g(bE),
      moveRight: () => g(vE),
      moveDown: () => g(yE),
      moveLeft: () => g(wE)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: gD(l),
        movementMode: "SNAP"
      },
      cleanup: Ft,
      actions: S
    });
  }
  function y() {
    kr({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => kr({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: w,
    snapLift: x,
    abort: y
  };
}
const PD = [rD, aD, fD];
function DD({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? PD : [], ...r || []], s = q(() => VP())[0], a = W(function(h, w) {
    fr(h) && !fr(w) && s.tryAbandon();
  }, [s]);
  Ge(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [s, t, a]), Ge(() => s.tryAbandon, [s.tryAbandon]);
  const c = W((g) => hm({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), l = W((g, h, w) => ED({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, s, n, t]), u = W((g) => xD(e, g), [e]), d = W((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = W(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(lc()));
  }, [s, t]), p = W(() => s.isClaimed(), [s]), m = Y(() => ({
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
const ID = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    b.version.startsWith("16") || b.version.startsWith("17") ? n() : Is(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), RD = (e) => ({
  ...dr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...dr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Hn(e) {
  return e.current || B(!1), e.current;
}
function OD(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = z(null), a = um(e), c = W(() => ID(a.current), [a]), l = W(() => RD(a.current), [a]), u = kP(t), d = zP({
    contextId: t,
    text: i
  }), f = RP(t, o), p = W(($) => {
    Hn(s).dispatch($);
  }, []), m = Y(() => Hl({
    publishWhileDragging: uE,
    updateDroppableScroll: fE,
    updateDroppableIsEnabled: pE,
    updateDroppableIsCombineEnabled: mE,
    collectionStarting: dE
  }, p), [p]), g = $P(), h = Y(() => iP(g, m), [g, m]), w = Y(() => SP({
    scrollWindow: sP,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Hl({
      move: Kp
    }, p)
  }), [h.scrollDroppable, p, l]), x = AP(t), y = Y(() => tP({
    announce: u,
    autoScroller: w,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: f
  }), [u, w, h, x, c, f]);
  s.current = y;
  const v = W(() => {
    const $ = Hn(s);
    $.getState().phase !== "IDLE" && $.dispatch(lc());
  }, []), S = W(() => {
    const $ = Hn(s).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = Y(() => ({
    isDragging: S,
    tryAbort: v
  }), [S, v]);
  n(C);
  const P = W(($) => rm(Hn(s).getState(), $), []), E = W(() => en(Hn(s).getState()), []), N = Y(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: P,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, x, P, E, g]);
  return DD({
    contextId: t,
    store: y,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), G(() => v, [v]), b.createElement(gi.Provider, {
    value: N
  }, b.createElement(FC, {
    context: hc,
    store: y
  }, e.children));
}
let AD = 0;
function ND() {
  return Y(() => `${AD++}`, []);
}
function $D() {
  return b.useId();
}
var TD = "useId" in b ? $D : ND;
function LD(e) {
  const t = TD(), n = e.dragHandleUsageInstructions || Gr.dragHandleUsageInstructions;
  return b.createElement(JC, null, (r) => b.createElement(OD, {
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
const Su = {
  dragging: 5e3,
  dropAnimating: 4500
}, MD = (e, t) => t ? Yn.drop(t.duration) : e ? Yn.snap : Yn.fluid, kD = (e, t) => {
  if (e)
    return t ? ur.opacity.drop : ur.opacity.combining;
}, _D = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function FD(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = _D(e), c = !!i, l = c ? Cs.drop(r, s) : Cs.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: MD(a, i),
    transform: l,
    opacity: kD(s, c),
    zIndex: c ? Su.dropAnimating : Su.dragging,
    pointerEvents: "none"
  };
}
function BD(e) {
  return {
    transform: Cs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function jD(e) {
  return e.type === "DRAGGING" ? FD(e) : BD(e);
}
function zD(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Cp(o, r), s = po(i, n), a = {
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
function VD(e) {
  const t = bc("draggable"), {
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
  }), [i, a, s]), l = W((p) => {
    const m = o();
    return m || B(!1), zD(n, m, p);
  }, [n, o]), u = Y(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = z(u), f = z(!0);
  Ge(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ge(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var vc = b.createContext(null);
function yo(e) {
  const t = ft(e);
  return t || B(!1), t;
}
function WD(e) {
  e.preventDefault();
}
const GD = (e) => {
  const t = z(null), n = W((C = null) => {
    t.current = C;
  }, []), r = W(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = yo(gi), {
    type: a,
    droppableId: c
  } = yo(vc), l = Y(() => ({
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
    const C = Y(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, s, r, m, p, f]);
    VD(C);
  }
  const x = Y(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: WD
  } : null, [o, i, d, f]), y = W((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (b.version.startsWith("16") || b.version.startsWith("17") ? w() : Is(w));
  }, [w, h]), v = Y(() => {
    const C = jD(h), P = h.type === "DRAGGING" && h.dropping ? y : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: C,
        onTransitionEnd: P
      },
      dragHandleProps: x
    };
  }, [o, x, d, h, y, n]), S = Y(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return b.createElement(b.Fragment, null, u(v, h.snapshot, S));
};
var HD = GD, bm = (e, t) => e === t, ym = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const UD = (e) => e.combine ? e.combine.draggableId : null, qD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function KD() {
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
    if (fr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = We(o.impact), l = qD(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, u = l.mode, d = ym(l), f = UD(l), m = {
        duration: o.dropDuration,
        curve: dc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? ur.opacity.drop : null,
        scale: f ? ur.scale.drop : null
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
function vm(e = null) {
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
const YD = {
  mapped: {
    type: "SECONDARY",
    offset: fe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: vm(null)
  }
};
function JD() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(vm), n = de((s, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(fe, s, !0) : null, o = (s, a, c, l) => {
    const u = c.displaced.visible[s], d = !!(l.inVirtualList && l.effected[s]), f = di(c), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (c.displaced.invisible[s])
        return null;
      const h = Mn(l.displacedBy.point), w = e(h.x, h.y);
      return n(w, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (fr(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const XD = () => {
  const e = KD(), t = JD();
  return (r, o) => e(r, o) || t(r, o) || YD;
}, QD = {
  dropAnimationFinished: Jp
}, ZD = xp(XD, QD, null, {
  context: hc,
  areStatePropsEqual: bm
})(HD);
var eI = ZD;
function wm(e) {
  return yo(vc).isUsingCloneFor === e.draggableId && !e.isClone ? null : b.createElement(eI, e);
}
function tI(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return b.createElement(wm, _t({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const xm = (e) => (t) => e === t, nI = xm("scroll"), rI = xm("auto"), Cu = (e, t) => t(e.overflowX) || t(e.overflowY), oI = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Cu(n, nI) || Cu(n, rI);
}, iI = () => !1, Sm = (e) => e == null ? null : e === document.body ? iI() ? e : null : e === document.documentElement ? null : oI(e) ? e : Sm(e.parentElement);
var sI = Sm, Ds = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Cm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Cm(e.parentElement) : !1;
var aI = (e) => {
  const t = sI(e), n = Cm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, cI = ({
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
    } = a, m = em({
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
  })(), l = o === "vertical" ? oc : Tp, u = Dn({
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
const lI = (e, t) => {
  const n = Ep(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = ec({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return tc({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var uI = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = lI(e, c), u = po(l, r), d = (() => {
    if (!c)
      return null;
    const p = Ep(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: po(p, r),
      scroll: Ds(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return cI({
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
const dI = {
  passive: !1
}, fI = {
  passive: !0
};
var Eu = (e) => e.shouldPublishImmediately ? dI : fI;
const _r = (e) => e && e.env.closestScrollable || null;
function pI(e) {
  const t = z(null), n = yo(gi), r = bc("droppable"), {
    registry: o,
    marshal: i
  } = n, s = um(e), a = Y(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = z(a), l = Y(() => de((v, S) => {
    t.current || B(!1);
    const C = {
      x: v,
      y: S
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = W(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? fe : Ds(v.env.closestScrollable);
  }, []), d = W(() => {
    const v = u();
    l(v.x, v.y);
  }, [u, l]), f = Y(() => sr(d), [d]), p = W(() => {
    const v = t.current, S = _r(v);
    if (v && S || B(!1), v.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = W((v, S) => {
    t.current && B(!1);
    const C = s.current, P = C.getDroppableRef();
    P || B(!1);
    const E = aI(P), N = {
      ref: P,
      descriptor: a,
      env: E,
      scrollOptions: S
    };
    t.current = N;
    const $ = uI({
      ref: P,
      descriptor: a,
      env: E,
      windowScroll: v,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), T = E.closestScrollable;
    return T && (T.setAttribute(yu.contextId, n.contextId), T.addEventListener("scroll", p, Eu(N.scrollOptions))), $;
  }, [n.contextId, a, p, s]), g = W(() => {
    const v = t.current, S = _r(v);
    return v && S || B(!1), Ds(S);
  }, []), h = W(() => {
    const v = t.current;
    v || B(!1);
    const S = _r(v);
    t.current = null, S && (f.cancel(), S.removeAttribute(yu.contextId), S.removeEventListener("scroll", p, Eu(v.scrollOptions)));
  }, [p, f]), w = W((v) => {
    const S = t.current;
    S || B(!1);
    const C = _r(S);
    C || B(!1), C.scrollTop += v.y, C.scrollLeft += v.x;
  }, []), x = Y(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: w
  }), [h, m, g, w]), y = Y(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: x
  }), [x, a, r]);
  Ge(() => (c.current = y.descriptor, o.droppable.register(y), () => {
    t.current && h(), o.droppable.unregister(y);
  }), [x, a, h, y, i, o.droppable]), Ge(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ge(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Xi() {
}
const Pu = {
  width: 0,
  height: 0,
  margin: r1
}, mI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Pu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, gI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = mI({
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
    transition: n !== "none" ? Yn.placeholder : null
  };
}, hI = (e) => {
  const t = z(null), n = W(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = q(e.animate === "open");
  G(() => a ? r !== "open" ? (n(), c(!1), Xi) : t.current ? Xi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Xi, [r, a, n]);
  const l = W((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = gI({
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
var bI = b.memo(hI);
class yI extends b.PureComponent {
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
const vI = (e) => {
  const t = ft(gi);
  t || B(!1);
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = z(null), i = z(null), {
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
  } = e, x = W(() => o.current, []), y = W((T = null) => {
    o.current = T;
  }, []);
  W(() => i.current, []);
  const v = W((T = null) => {
    i.current = T;
  }, []), S = W(() => {
    r() && h({
      maxScroll: nm()
    });
  }, [r, h]);
  pI({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = Y(() => b.createElement(yI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: k,
    animate: _
  }) => b.createElement(bI, {
    placeholder: k,
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
  }), [n, a, C, y]), E = g ? g.dragging.draggableId : null, N = Y(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: E
  }), [a, E, c]);
  function $() {
    if (!g)
      return null;
    const {
      dragging: T,
      render: k
    } = g, _ = b.createElement(wm, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (O, L) => k(O, L, T));
    return Ou.createPortal(_, w());
  }
  return b.createElement(vc.Provider, {
    value: N
  }, s(P, m), $());
};
var wI = vI;
function xI() {
  return document.body || B(!1), document.body;
}
const Du = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: xI
}, Em = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Du)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Du[n]
    });
  return t;
}, Qi = (e, t) => e === t.droppable.type, Iu = (e, t) => t.draggables[e.draggable.id], SI = () => {
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
    const a = Em(s), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (fr(i)) {
      const f = i.critical;
      if (!Qi(l, f))
        return t;
      const p = Iu(f, i.dimensions), m = We(i.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Qi(l, f.critical))
        return t;
      const p = Iu(f.critical, i.dimensions);
      return r(c, u, ym(f.result) === c, We(f.impact) === c, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Qi(l, f.critical))
        return t;
      const p = We(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, CI = {
  updateViewportMaxScroll: hE
}, EI = xp(SI, CI, (e, t, n) => ({
  ...Em(n),
  ...e,
  ...t
}), {
  context: hc,
  areStatePropsEqual: bm
})(wI);
var PI = EI;
function Pm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Pm(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function DI() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Pm(e)) && (r && (r += " "), r += t);
  return r;
}
const II = "_item_1o9ja_1", RI = "_itemDragging_1o9ja_12", OI = "_symbol_1o9ja_16", AI = "_dragHandle_1o9ja_22", Fr = {
  item: II,
  itemDragging: RI,
  symbol: OI,
  dragHandle: AI
};
function NI({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Ot(), i = t ? t.filterDictionaries : [], s = (c) => {
    if (!t || !c.destination)
      return;
    const l = Array.from(i), [u] = l.splice(c.source.index, 1);
    l.splice(c.destination.index, 0, u), n({ ...t, filterDictionaries: l }), r(!0);
  }, a = i.map((c, l) => /* @__PURE__ */ M.jsx(tI, { index: l, draggableId: c.ifcClassification.location, children: (u, d) => /* @__PURE__ */ M.jsxs(
    "div",
    {
      className: DI(Fr.item, { [Fr.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ M.jsx("div", { ...u.dragHandleProps, className: Fr.dragHandle, children: /* @__PURE__ */ M.jsx(N0, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ M.jsx(Qe, { className: Fr.uri, children: c.ifcClassification.location })
      ]
    }
  ) }, c.ifcClassification.location));
  return /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx($n, { order: 5, children: o("sortFilterDictionariesLabel") }),
      /* @__PURE__ */ M.jsx(Qe, { size: "xs", c: "dimmed", children: o("sortFilterDictionariesInstruction") })
    ] }),
    /* @__PURE__ */ M.jsx(oe.Panel, { children: /* @__PURE__ */ M.jsx(LD, { onDragEnd: s, children: /* @__PURE__ */ M.jsx(PI, { droppableId: "dnd-list", direction: "vertical", children: (c) => /* @__PURE__ */ M.jsxs("div", { ...c.droppableProps, ref: c.innerRef, children: [
      a,
      c.placeholder
    ] }) }) }) })
  ] }, e);
}
function $I({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = Ot(), i = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ M.jsx(
    Oa,
    {
      label: r("language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("selectLanguageInstruction")
    }
  );
}
function TI({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Ot(), i = Ga(), s = ct(Xf), a = ct(Kx), c = z();
  return G(() => {
    s && i(oS(s));
  }, [i, s]), G(() => {
    if (!s || a === null)
      return;
    const l = {
      bsddApiEnvironment: s,
      includeTestDictionaries: a
    };
    c.current && c.current.bsddApiEnvironment === l.bsddApiEnvironment && c.current.includeTestDictionaries === l.includeTestDictionaries || (i(ys(l)), c.current = l);
  }, [i, s, a]), /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx($n, { order: 5, children: o("generalSettingsLabel") }),
      /* @__PURE__ */ M.jsx(Qe, { size: "xs", c: "dimmed", children: o("generalSettingsInstruction") })
    ] }),
    /* @__PURE__ */ M.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ M.jsx($I, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ M.jsx(tr, { h: "xs" }),
      /* @__PURE__ */ M.jsx(
        Sr,
        {
          label: o("ShowPreview"),
          checked: t && t.includeTestDictionaries ? t.includeTestDictionaries : !1,
          indeterminate: !t || t.includeTestDictionaries === null,
          type: "checkbox",
          onChange: (l) => {
            t && (n({ ...t, includeTestDictionaries: l.currentTarget.checked }), r(!0));
          }
        }
      )
    ] })
  ] }, e);
}
function LI({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r
}) {
  const { t: o } = Ot(), { mainDictionary: i, filterDictionaries: s } = t, [a, c] = q([]);
  G(() => {
    const u = [i, ...s].filter(Boolean), d = new Map(u.map((p) => [p.ifcClassification.location, p])), f = Array.from(d.values());
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
  return /* @__PURE__ */ M.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ M.jsxs(oe.Control, { children: [
      /* @__PURE__ */ M.jsx($n, { order: 5, children: o("parameterMappingLabel") }),
      /* @__PURE__ */ M.jsx(Qe, { size: "xs", c: "dimmed", children: o("parameterMappingInstruction") })
    ] }),
    /* @__PURE__ */ M.jsx(oe.Panel, { children: a.map((u, d) => {
      const f = u.ifcClassification.location || d;
      return /* @__PURE__ */ M.jsxs("div", { style: { marginBottom: "1em" }, children: [
        /* @__PURE__ */ M.jsx(
          La,
          {
            label: u.ifcClassification.location,
            placeholder: "Enter a revit type parameter",
            value: u.parameterMapping,
            onChange: (p) => l(u.ifcClassification.location, p.currentTarget.value)
          }
        ),
        " "
      ] }, f);
    }) })
  ] }, e);
}
function MI() {
  var u, d;
  const e = Ga(), t = ct((f) => f.settings), [n, r] = q(t), [o, i] = q(!1), [s, a] = q(!0);
  G(() => {
    r(t);
  }, [t]);
  const c = () => {
    var f;
    console.log("Saving", n), n && (e(Va(n)), (f = window == null ? void 0 : window.bsddBridge) == null || f.saveSettings(JSON.stringify(n)), i(!1));
  }, l = () => {
    r(t), i(!1);
  };
  return /* @__PURE__ */ M.jsxs(at.Panel, { value: "settings", children: [
    /* @__PURE__ */ M.jsxs(oe, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ M.jsx(
        TI,
        {
          id: 1,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ M.jsx(
        RS,
        {
          id: 2,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i,
          setIsLoading: a
        }
      ),
      /* @__PURE__ */ M.jsx(
        LI,
        {
          id: 3,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ M.jsx(
        NI,
        {
          id: 4,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs(xn, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ M.jsx(
        Qn,
        {
          fullWidth: !0,
          loading: s,
          onClick: c,
          disabled: !o || !((d = (u = n == null ? void 0 : n.mainDictionary) == null ? void 0 : u.ifcClassification) != null && d.location),
          variant: s ? "light" : "filled",
          loaderProps: { type: "dots" },
          children: "Save"
        }
      ),
      /* @__PURE__ */ M.jsx(Qn, { fullWidth: !0, variant: "light", onClick: l, disabled: !o, children: "Cancel" })
    ] })
  ] });
}
let kI;
const _I = (e) => async (t, n) => {
  const r = n(), o = Fl(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Fl(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(Va(s));
};
function FI() {
  const e = Ga(), { t } = Ot(), n = ct(nS), [r, o] = q(null), [i, s] = q(null), [a, c] = q(!0);
  return G(() => {
    (async () => {
      try {
      } catch (u) {
        console.error("Error connecting to bsddBridge:", u);
      }
    })();
  }, []), G(() => {
    r && (n ? (e(_I(r)), o(null), c(!1)) : (r != null && r.bsddApiEnvironment && e(Yx(r.bsddApiEnvironment)), (r == null ? void 0 : r.includeTestDictionaries) !== null && e(Xx(r.includeTestDictionaries)), r != null && r.language && e(Jx(r.language))));
  }, [n, r, e]), G(() => {
    !a && i && (e(hS(i)), s(null));
  }, [a, i, e]), G(() => {
    s([]);
  }, []), G(() => {
    (async () => {
      var d;
      const u = await ((d = window == null ? void 0 : window.bsddBridge) == null ? void 0 : d.loadSettings());
      if (u) {
        const f = JSON.parse(u);
        console.log("initial loadSettings selection", f), o(f);
      }
    })();
  }, []), window.updateSelection = (l) => {
    console.log("updateSelection", l), s(l);
  }, window.updateSettings = (l) => {
    console.log("updateSettings", l), o(l);
  }, /* @__PURE__ */ M.jsx(Ca, { size: "40rem", children: /* @__PURE__ */ M.jsxs(at, { defaultValue: "link", children: [
    /* @__PURE__ */ M.jsxs(at.List, { grow: !0, children: [
      /* @__PURE__ */ M.jsx(at.Tab, { value: "link", children: t("linkTabTitle") }),
      /* @__PURE__ */ M.jsx(at.Tab, { value: "settings", children: t("settingsTabTitle") })
    ] }),
    /* @__PURE__ */ M.jsx(ES, { loading: a }),
    /* @__PURE__ */ M.jsx(MI, {})
  ] }) });
}
function BI() {
  return /* @__PURE__ */ M.jsx(id, { theme: k0, children: /* @__PURE__ */ M.jsx(FI, {}) });
}
const jI = vx({
  reducer: {
    settings: Qx,
    ifcData: bS,
    bsdd: iS
  }
});
Zi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ M.jsx(b.StrictMode, { children: /* @__PURE__ */ M.jsx(yg, { store: jI, children: /* @__PURE__ */ M.jsx(BI, {}) }) })
);
