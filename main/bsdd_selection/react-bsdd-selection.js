var Bm = Object.defineProperty;
var jm = (e, t, n) => t in e ? Bm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => (jm(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as I from "react";
import b, { createContext as Ut, useContext as ft, useState as q, useRef as z, useEffect as G, useMemo as kt, useCallback as Q, useLayoutEffect as bo, useId as Iu, forwardRef as ie, cloneElement as ln, Children as zm, createElement as Pc } from "react";
import * as Vm from "react-dom";
import Ru, { flushSync as Ds, createPortal as Wm, unstable_batchedUpdates as Gm } from "react-dom";
function Ou(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Au = { exports: {} }, yo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hm = b, Um = Symbol.for("react.element"), qm = Symbol.for("react.fragment"), Km = Object.prototype.hasOwnProperty, Ym = Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nu(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Km.call(t, r) && !Jm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Um, type: e, key: i, ref: s, props: o, _owner: Ym.current };
}
yo.Fragment = qm;
yo.jsx = Nu;
yo.jsxs = Nu;
Au.exports = yo;
var k = Au.exports, Qi = {}, Dc = Ru;
Qi.createRoot = Dc.createRoot, Qi.hydrateRoot = Dc.hydrateRoot;
var $u = { exports: {} }, Tu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = b;
function Xm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Qm = typeof Object.is == "function" ? Object.is : Xm, Zm = fr.useSyncExternalStore, eg = fr.useRef, tg = fr.useEffect, ng = fr.useMemo, rg = fr.useDebugValue;
Tu.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = eg(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = ng(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, Qm(u, p))
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
  var a = Zm(e, i[0], i[1]);
  return tg(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), rg(a), a;
};
$u.exports = Tu;
var og = $u.exports, Be = (
  // prettier-ignore
  // @ts-ignore
  "default" in I ? I.default : I
), Ic = Symbol.for("react-redux-context"), Rc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ig() {
  if (!Be.createContext)
    return {};
  const e = Rc[Ic] ?? (Rc[Ic] = /* @__PURE__ */ new Map());
  let t = e.get(Be.createContext);
  return t || (t = Be.createContext(
    null
  ), e.set(Be.createContext, t)), t;
}
var jt = /* @__PURE__ */ ig(), sg = () => {
  throw new Error("uSES not initialized!");
};
function Is(e = jt) {
  return function() {
    return Be.useContext(e);
  };
}
var Lu = /* @__PURE__ */ Is(), Mu = sg, ag = (e) => {
  Mu = e;
}, cg = (e, t) => e === t;
function lg(e = jt) {
  const t = e === jt ? Lu : Is(e), n = (r, o = {}) => {
    const { equalityFn: i = cg, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
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
    ), p = Mu(
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
var ug = /* @__PURE__ */ lg();
function dg(e) {
  e();
}
function fg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      dg(() => {
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
var Oc = {
  notify() {
  },
  get: () => []
};
function pg(e, t) {
  let n, r = Oc, o = 0, i = !1;
  function s(g) {
    u();
    const h = r.subscribe(g);
    let v = !1;
    return () => {
      v || (v = !0, h(), d());
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = fg());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Oc);
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
var mg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", gg = mg ? Be.useLayoutEffect : Be.useEffect;
function hg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Be.useMemo(() => {
    const l = pg(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Be.useMemo(() => e.getState(), [e]);
  gg(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || jt;
  return /* @__PURE__ */ Be.createElement(c.Provider, { value: s }, n);
}
var bg = hg;
function ku(e = jt) {
  const t = e === jt ? Lu : (
    // @ts-ignore
    Is(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var yg = /* @__PURE__ */ ku();
function vg(e = jt) {
  const t = e === jt ? yg : ku(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var wg = /* @__PURE__ */ vg();
ag(og.useSyncExternalStoreWithSelector);
const xg = {
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
class Wr {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || xg, this.options = n, this.debug = n.debug;
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
    return new Wr(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Wr(this.logger, t);
  }
}
var gt = new Wr();
class vo {
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
function Fn() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Ac(e) {
  return e == null ? "" : "" + e;
}
function Sg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function Rs(e, t, n) {
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
function Nc(e, t, n) {
  const {
    obj: r,
    k: o
  } = Rs(e, t, Object);
  r[o] = n;
}
function Cg(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = Rs(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function Gr(e, t) {
  const {
    obj: n,
    k: r
  } = Rs(e, t);
  if (n)
    return n[r];
}
function Eg(e, t, n) {
  const r = Gr(e, n);
  return r !== void 0 ? r : Gr(t, n);
}
function _u(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : _u(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function pn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Pg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Dg(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Pg[t]) : e;
}
const Ig = [" ", ",", "?", "!", ";"];
function Rg(e, t, n) {
  t = t || "", n = n || "";
  const r = Ig.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
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
function Hr(e, t) {
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
      return l ? Hr(c, l, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function Ur(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class $c extends vo {
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
    const c = Gr(this.data, a);
    return c || !s || typeof r != "string" ? c : Hr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), Nc(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
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
    let c = Gr(this.data, a) || {};
    o ? _u(c, r, i) : c = {
      ...c,
      ...r
    }, Nc(this.data, a, c), s.silent || this.emit("added", t, n, r);
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
var Fu = {
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
const Tc = {};
class qr extends vo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Sg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = gt.create("translator");
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
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Rg(t, r, o);
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
        const w = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${w}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: l,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(n)
        } : `${c}${w}${s}`;
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
    const p = d && d.usedKey || s, m = d && d.exactUsedKey || s, g = Object.prototype.toString.apply(f), h = ["[object Number]", "[object Function]", "[object RegExp]"], v = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (x && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && h.indexOf(g) < 0 && !(typeof v == "string" && g === "[object Array]")) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = w, d.usedParams = this.getUsedParamsDetails(n), d) : w;
      }
      if (i) {
        const w = g === "[object Array]", S = w ? [] : {}, C = w ? m : p;
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
    } else if (x && typeof v == "string" && g === "[object Array]")
      f = f.join(v), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let w = !1, S = !1;
      const C = n.count !== void 0 && typeof n.count != "string", P = qr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", N = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", $ = n[`defaultValue${E}`] || n[`defaultValue${N}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (w = !0, f = $), this.isValidLookup(f) || (S = !0, f = s);
      const M = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, _ = P && $ !== f && this.options.updateMissing;
      if (S || w || _) {
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
          const K = P && H !== f ? H : M;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, c, A, K, _, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(F, c, A, K, _, n), this.emit("missingKey", F, c, A, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? O.forEach((F) => {
          this.pluralResolver.getSuffixes(F, n).forEach((A) => {
            R([F], s + A, n[`defaultValue${A}`] || $);
          });
        }) : R(O, s, $));
      }
      f = this.extendTranslation(f, t, n, d, r), S && f === s && this.options.appendNamespaceToMissingKey && (f = `${c}:${s}`), (S || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${s}` : s, w ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
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
    return t != null && c && c.length && r.applyPostProcessor !== !1 && (t = Fu.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(r) || (a = h, !Tc[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Tc[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((v) => {
          if (this.isValidLookup(r))
            return;
          s = v;
          const x = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(x, u, v, h, n);
          else {
            let w;
            f && (w = this.pluralResolver.getSuffix(v, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (x.push(u + w), n.ordinal && w.indexOf(C) === 0 && x.push(u + w.replace(C, this.options.pluralSeparator)), p && x.push(u + S)), m) {
              const P = `${u}${this.options.contextSeparator}${n.context}`;
              x.push(P), f && (x.push(P + w), n.ordinal && w.indexOf(C) === 0 && x.push(P + w.replace(C, this.options.pluralSeparator)), p && x.push(P + S));
            }
          }
          let y;
          for (; y = x.pop(); )
            this.isValidLookup(r) || (i = y, r = this.getResource(v, h, y, n));
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
class Lc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = gt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Ur(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Ur(t), !t || t.indexOf("-") < 0)
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
let Og = [{
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
}], Ag = {
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
const Ng = ["v1", "v2", "v3"], $g = ["v4"], Mc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Tg() {
  const e = {};
  return Og.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: Ag[t.fc]
      };
    });
  }), e;
}
class Lg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = gt.create("pluralResolver"), (!this.options.compatibilityJSON || $g.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Tg();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Ur(t), {
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Mc[o] - Mc[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    return !Ng.includes(this.options.compatibilityJSON);
  }
}
function kc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Eg(e, t, n);
  return !i && o && typeof n == "string" && (i = Hr(e, n, r), i === void 0 && (i = Hr(t, n, r))), i;
}
class Mg {
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
    this.escape = n.escape !== void 0 ? n.escape : Dg, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? pn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? pn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? pn(n.nestingPrefix) : n.nestingPrefixEscaped || pn("$t("), this.nestingSuffix = n.nestingSuffix ? pn(n.nestingSuffix) : n.nestingSuffixEscaped || pn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
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
        const x = kc(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : x;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), v = g.join(this.formatSeparator).trim();
      return this.format(kc(n, c, h, this.options.keySeparator, this.options.ignoreJSONStructure), v, r, {
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
            const v = d(t, i, o);
            s = typeof v == "string" ? v : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            s = "";
          else if (f) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = Ac(s));
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
      typeof i != "string" && (i = Ac(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function kg(e) {
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
    return a || (a = e(Ur(o), i), t[s] = a), a(r);
  };
}
class _g {
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
      } = kg(c);
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
function Fg(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Bg extends vo {
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
      Cg(c.loaded, [i], s), Fg(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
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
function _c() {
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
function Fc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Ir() {
}
function jg(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Yn extends vo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Fc(t), this.services = {}, this.logger = gt, this.modules = {
      external: []
    }, jg(this), n && !this.isInitialized && !t.isClone) {
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
    const o = _c();
    this.options = {
      ...o,
      ...this.options,
      ...Fc(n)
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
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = _g);
      const d = new Lc(this.options);
      this.store = new $c(this.options.resources, this.options);
      const f = this.services;
      f.logger = gt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Lg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Mg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Bg(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new qr(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Ir), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = Fn(), l = () => {
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
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ir;
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
    const o = Fn();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Ir), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Fu.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = Fn();
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
    const r = Fn();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Fn();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Lc(_c());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Yn(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ir;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new Yn(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new $c(this.store.data, o), i.services.resourceStore = i.store), i.translator = new qr(i.services, o), i.translator.on("*", function(a) {
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
const be = Yn.createInstance();
be.createInstance = Yn.createInstance;
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
function zg() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Bc = {};
function Zi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Bc[t[0]] || (typeof t[0] == "string" && (Bc[t[0]] = /* @__PURE__ */ new Date()), zg(...t));
}
const Bu = (e, t) => () => {
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
function jc(e, t, n) {
  e.loadNamespaces(t, Bu(e, n));
}
function zc(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Bu(e, r));
}
function Vg(e, t) {
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
function Wg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Zi("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : Vg(e, t, n);
}
const Gg = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Hg = {
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
}, Ug = (e) => Hg[e], qg = (e) => e.replace(Gg, Ug);
let es = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: qg
};
function Kg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  es = {
    ...es,
    ...e
  };
}
function Yg() {
  return es;
}
let ju;
function Jg(e) {
  ju = e;
}
function Xg() {
  return ju;
}
const Qg = {
  type: "3rdParty",
  init(e) {
    Kg(e.options.react), Jg(e);
  }
}, Zg = Ut();
class eh {
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
const th = (e, t) => {
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
  } = ft(Zg) || {}, i = n || r || Xg();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new eh()), !i) {
    Zi("You will need to pass in an i18next instance by using initReactI18next");
    const y = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, w = [y, {}, !1];
    return w.t = y, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && Zi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Yg(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = e || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((y) => Wg(y, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, p] = q(d);
  let m = l.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = th(m), h = z(!0);
  G(() => {
    const {
      bindI18n: y,
      bindI18nStore: w
    } = s;
    h.current = !0, !u && !a && (t.lng ? zc(i, t.lng, l, () => {
      h.current && p(d);
    }) : jc(i, l, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function S() {
      h.current && p(d);
    }
    return y && i && i.on(y, S), w && i && i.store.on(w, S), () => {
      h.current = !1, y && i && y.split(" ").forEach((C) => i.off(C, S)), w && i && w.split(" ").forEach((C) => i.store.off(C, S));
    };
  }, [i, m]);
  const v = z(!0);
  G(() => {
    h.current && !v.current && p(d), v.current = !1;
  }, [i, c]);
  const x = [f, i, u];
  if (x.t = f, x.i18n = i, x.ready = u, u || !u && !a)
    return x;
  throw new Promise((y) => {
    t.lng ? zc(i, t.lng, l, () => y()) : jc(i, l, () => y());
  });
}
be.use(Qg).init({
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
function bt(e) {
  return Object.keys(e);
}
function Si(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Os(e, t) {
  const n = { ...e }, r = t;
  return Si(e) && Si(t) && Object.keys(t).forEach((o) => {
    Si(r[o]) && o in e ? n[o] = Os(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function nh(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function rh(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function oh(e) {
  const t = rh(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function Ci(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function zu(e, { shouldScale: t = !1 } = {}) {
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
const D = zu("rem", { shouldScale: !0 }), Vc = zu("em");
function As(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Vu(e) {
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
function Ns(e = null) {
  const t = Ut(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => ft(t)];
}
function Kr(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function ts(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function ih(e, t, n) {
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
function sh(e, t, n) {
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
function ah(e, t, n) {
  return ts(e, n) === ts(t, n);
}
function Wu({
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
      ((m = ts(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => ah(a.currentTarget, g, e)), l = c.findIndex((g) => a.currentTarget === g), u = sh(l, c, r), d = ih(l, c, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
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
const ch = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function pr(e) {
  return ch[e];
}
const lh = () => {
};
function uh(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || lh : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function se(e, t = "size", n = !0) {
  if (e !== void 0)
    return Vu(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function Gu(e) {
  return se(e, "mantine-spacing");
}
function Me(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : se(e, "mantine-radius");
}
function ze(e) {
  return se(e, "mantine-font-size");
}
function dh(e) {
  return se(e, "mantine-line-height", !1);
}
function fh(e) {
  if (e)
    return se(e, "mantine-shadow", !1);
}
function Yr(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Hu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Hu(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function xt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Hu(e)) && (r && (r += " "), r += t);
  return r;
}
const ph = {};
function mh(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = xt(t[r], o) : t[r] = o;
    });
  }), t;
}
function wo({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || ph
  );
  return mh(i);
}
function Jr({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function Uu() {
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
function xo(e, t) {
  const n = tn(e), r = z(0);
  return G(() => () => window.clearTimeout(r.current), []), Q(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const Wc = ["mousedown", "touchstart"];
function gh(e, t, n) {
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
    return (t || Wc).forEach((i) => document.addEventListener(i, o)), () => {
      (t || Wc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function hh(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function bh(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function yh(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = q(
    n ? t : bh(e, t)
  ), i = z();
  return G(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), hh(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const mr = typeof document < "u" ? bo : G;
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
function vh({ opened: e, shouldReturnFocus: t = !0 }) {
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
function wh(e, t = "body > :not(script)") {
  const n = Uu(), r = Array.from(
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
const xh = /input|select|textarea|button|object/, qu = "a, input, select, textarea, button, object, [tabindex]";
function Sh(e) {
  return e.style.display === "none";
}
function Ch(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (Sh(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function Ku(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function ns(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(Ku(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (xh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && Ch(e);
}
function Yu(e) {
  const t = Ku(e);
  return (Number.isNaN(t) || t >= 0) && ns(e);
}
function Eh(e) {
  return Array.from(e.querySelectorAll(qu)).filter(Yu);
}
function Ph(e, t) {
  const n = Eh(e);
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
function Dh(e = !0) {
  const t = z(), n = z(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(qu));
      s = a.find(Yu) || a.find(ns) || null, !s && ns(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = Q(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = wh(i), t.current !== i && (i ? (setTimeout(() => {
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
      s.key === "Tab" && t.current && Ph(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const Ih = b["useId".toString()] || (() => {
});
function Rh() {
  const e = Ih();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function St(e) {
  const t = Rh(), [n, r] = q(t);
  return mr(() => {
    r(Uu());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function Ju(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Xu(...e) {
  return (t) => {
    e.forEach((n) => Ju(n, t));
  };
}
function Ae(...e) {
  return Q(Xu(...e), e);
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
function Qu(e, t) {
  return yh("(prefers-reduced-motion: reduce)", e, t);
}
function Oh(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = q(e), s = Q(() => {
    i((l) => l || (n == null || n(), !0));
  }, [n]), a = Q(() => {
    i((l) => l && (r == null || r(), !1));
  }, [r]), c = Q(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: c }];
}
const Zu = Ut(null);
function $s() {
  const e = ft(Zu);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Ah() {
  return $s().cssVariablesResolver;
}
function Nh() {
  return $s().classNamesPrefix;
}
function Ts() {
  return $s().getStyleNonce;
}
function $h(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function Th(e) {
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
function Lh(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function Mh(e) {
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
function ed(e) {
  return $h(e) ? Th(e) : e.startsWith("rgb") ? Lh(e) : e.startsWith("hsl") ? Mh(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Rr(e, t) {
  if (e.startsWith("var("))
    return e;
  const { r: n, g: r, b: o, a: i } = ed(e), s = 1 - t, a = (c) => Math.round(c * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function rs(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function So({
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
    value: i !== void 0 ? t.colors[r][i] : t.colors[r][rs(t, n || "light")],
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
  const n = So({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function os(e, t) {
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
  const { r: n, g: r, b: o } = ed(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const kh = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = So({ color: e, theme: t });
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
      hover: Rr(e, 0.1),
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
    hover: Rr(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Rr(t.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Rr(t.white, 0.01),
    color: e,
    border: `${D(1)} solid transparent`
  } : n === "gradient" ? {
    background: os(r, t),
    hover: os(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${D(1)} solid var(--mantine-color-default-border)`
  } : {};
}, _h = {
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
}, Gc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Ls = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: _h,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: kh,
  fontFamily: Gc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Gc,
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
function Hc(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Fh({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return Hc(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && Hc(r.newValue) && n(r.newValue);
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
const Bh = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Uc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Ei(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function qc(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Bh);
  if (typeof e.primaryShade == "object" && (!Ei(e.primaryShade.dark) || !Ei(e.primaryShade.light)))
    throw new Error(Uc);
  if (typeof e.primaryShade == "number" && !Ei(e.primaryShade))
    throw new Error(Uc);
}
function jh(e, t) {
  var r;
  if (!t)
    return qc(e), e;
  const n = Os(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), qc(n), n;
}
const Ms = Ut(null), zh = () => ft(Ms) || Ls;
function pt() {
  const e = ft(Ms);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function td({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = zh(), o = kt(
    () => jh(n ? r : Ls, e),
    [e, r, n]
  );
  return /* @__PURE__ */ b.createElement(Ms.Provider, { value: o }, t);
}
td.displayName = "@mantine/core/MantineThemeProvider";
function Vh() {
  const e = pt(), t = Ts(), n = bt(e.breakpoints).reduce((r, o) => {
    const i = oh(e.breakpoints[o]);
    return `${r}@media (max-width: ${Vc(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Vc(
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
function Wh(e, t) {
  const n = Pi(e.variables), r = n ? Di(t, n) : "", o = Pi(e.dark), i = o ? Di(`${t}[data-mantine-color-scheme="dark"]`, o) : "", s = Pi(e.light), a = s ? Di(`${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function gn(e, t, n) {
  bt(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const nd = (e) => {
  const t = rs(e, "dark"), n = rs(e, "light"), r = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : D(e.defaultRadius), o = {
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
function Gh({ theme: e, generator: t }) {
  const n = nd(e), r = t == null ? void 0 : t(e);
  return r ? Os(n, r) : n;
}
const Ii = nd(Ls);
function Hh(e) {
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
function Uh(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function rd({ cssVariablesSelector: e }) {
  const t = pt(), n = Ts(), r = Ah(), o = Gh({ theme: t, generator: r }), i = e === ":root", s = i ? Hh(o) : o, a = Wh(s, e);
  return a ? /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${a}${i ? "" : Uh(e)}`
      }
    }
  ) : null;
}
rd.displayName = "@mantine/CssVariables";
function qh() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function Bn(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function Kh({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = z(), [i, s] = q(() => e.get(t)), a = r || i, c = Q(
    (u) => {
      r || (Bn(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), l = Q(() => {
    s(t), Bn(t, n), e.clear();
  }, [e.clear, t]);
  return G(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), mr(() => {
    Bn(e.get(t), n);
  }, []), G(() => {
    var d;
    if (r)
      return Bn(r, n), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && Bn(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function Yh({
  respectReducedMotion: e,
  getRootElement: t
}) {
  mr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
qh();
function od({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = Fh(),
  defaultColorScheme: a = "light",
  getRootElement: c = () => document.documentElement,
  cssVariablesResolver: l,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = Kh({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: c
  });
  return Yh({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: c
  }), /* @__PURE__ */ b.createElement(
    Zu.Provider,
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
    /* @__PURE__ */ b.createElement(td, { theme: e }, r && /* @__PURE__ */ b.createElement(rd, { cssVariablesSelector: o }), /* @__PURE__ */ b.createElement(Vh, null), t)
  );
}
od.displayName = "@mantine/core/MantineProvider";
function id({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = pt();
  return {
    resolvedClassNames: wo({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0
    }),
    resolvedStyles: Jr({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const Jh = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Xh({ theme: e, options: t, unstyled: n }) {
  return xt(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || Jh[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function Qh({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return wo({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e];
}
function Zh({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return wo({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function eb({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function tb({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function nb({
  themeName: e,
  classNamesPrefix: t,
  selector: n
}) {
  return e.map((r) => `${t}-${r}-${n}`);
}
function rb({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (i) => {
      var s, a;
      return (a = wo({
        theme: t,
        classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function ob({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function ib({
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
    Xh({ theme: e, options: t, unstyled: a }),
    rb({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    ob({ options: t, classes: s, selector: r, unstyled: a }),
    Zh({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    Qh({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    eb({ rootSelector: l, selector: r, className: c }),
    tb({ selector: r, classes: s, unstyled: a }),
    nb({ themeName: n, classNamesPrefix: o, selector: r }),
    t == null ? void 0 : t.className
  );
}
function sb({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (i) => {
      var s;
      return Jr({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, s) => ({ ...i, ...s }), {});
}
function is({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...is({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function ab(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...As(n[r]) };
  }), t), {});
}
function cb({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s
}) {
  var a;
  return (a = ab([
    t == null ? void 0 : t(n, r, o),
    ...s.map((c) => {
      var l, u, d;
      return (d = (u = (l = n.components) == null ? void 0 : l[c]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : a[i];
}
function lb({
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
    ...sb({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...Jr({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...Jr({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...cb({ theme: e, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? is({ style: c, theme: e }) : null,
    ...is({ style: r == null ? void 0 : r.style, theme: e })
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
  const f = pt(), p = Nh(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: ib({
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
    style: lb({
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
  return { ...t, ...i, ...As(n) };
}
function Kc(e) {
  return bt(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${nh(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function ub({ selector: e, styles: t, media: n }) {
  const r = t ? Kc(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${Kc(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function db({ selector: e, styles: t, media: n }) {
  const r = Ts();
  return /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: ub({ selector: e, styles: t, media: n }) }
    }
  );
}
function gr(e) {
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
    opacity: v,
    ff: x,
    fz: y,
    fw: w,
    lts: S,
    ta: C,
    lh: P,
    fs: E,
    tt: N,
    td: $,
    w: T,
    miw: M,
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
  return { styleProps: As({
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
    opacity: v,
    ff: x,
    fz: y,
    fw: w,
    lts: S,
    ta: C,
    lh: P,
    fs: E,
    tt: N,
    td: $,
    w: T,
    miw: M,
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
const fb = {
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
function pb(e, t) {
  const n = So({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : n.variable ? `var(${n.variable})` : n.color;
}
function mb(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? D(e) : e;
}
function gb(e) {
  return e;
}
function hb(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : e;
}
function bb(e) {
  return typeof e == "number" ? D(e) : e;
}
function yb(e, t) {
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
  color: pb,
  fontSize: mb,
  spacing: yb,
  identity: gb,
  size: bb,
  lineHeight: hb
};
function Yc(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function vb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(Yc(o)) - Number(Yc(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function wb(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function xb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Sb(e) {
  return typeof e == "object" && e !== null ? bt(e).filter((t) => t !== "base") : [];
}
function Cb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function Eb({
  styleProps: e,
  data: t,
  theme: n
}) {
  return vb(
    bt(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = xb(e[o]);
        if (!wb(e[o]))
          return s.forEach((l) => {
            r.inlineStyles[l] = Ri[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = Sb(e[o]);
        return s.forEach((l) => {
          a && (r.styles[l] = Ri[i.type](a, n)), c.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: Ri[i.type](
                Cb(e[o], u),
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
function Pb() {
  return `__m__-${Iu().replace(/:/g, "")}`;
}
function ks(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ks(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function sd(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function Db(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[sd(n)] = e[n]), t;
  }, {});
}
function ad(e) {
  return e ? typeof e == "string" ? { [sd(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...ad(n) }),
    {}
  ) : Db(e) : null;
}
function ss(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ss(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Ib({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = ss(t, e), i = ss(n, e);
  return { ...o, ...i, ...r };
}
const cd = ie(
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
    const m = pt(), g = e || "div", { styleProps: h, rest: v } = gr(f), x = Pb(), y = Eb({
      styleProps: h,
      theme: m,
      data: fb
    }), w = {
      ref: p,
      style: Ib({
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
      "data-size": Vu(s) ? void 0 : s || void 0,
      ...ad(i),
      ...v
    };
    return /* @__PURE__ */ b.createElement(b.Fragment, null, y.hasResponsiveStyles && /* @__PURE__ */ b.createElement(
      db,
      {
        selector: `.${x}`,
        styles: y.styles,
        media: y.media
      }
    ), typeof d == "function" ? d(w) : /* @__PURE__ */ b.createElement(g, { ...w }));
  }
);
cd.displayName = "@mantine/core/Box";
const V = cd;
function ld(e) {
  return e;
}
function U(e) {
  const t = ie(e);
  return t.extend = ld, t;
}
function At(e) {
  const t = ie(e);
  return t.extend = ld, t;
}
const Rb = Ut({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function hr() {
  return ft(Rb);
}
function Ob(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Oi(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const jn = typeof window < "u" && window.requestAnimationFrame;
function Ab({
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
    Ds(() => c(m));
  }, u = (m) => {
    l((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || Ob(m)}ms ${t}`
    };
  }
  zt(() => {
    typeof jn == "function" && jn(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), jn(() => {
        const m = Oi(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Oi(o);
      u({ ...d(m), willChange: "height", height: m }), jn(() => u({ height: i, overflow: "hidden" }));
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
    const v = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: Xu(o, v),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const Nb = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, ud = U((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = j("Collapse", Nb, e), u = pt(), d = Qu(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = Ab({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ b.createElement(V, { ...l }, n) : null : /* @__PURE__ */ b.createElement(V, { ...m({ style: ks(s, u), ref: t, ...l }) }, /* @__PURE__ */ b.createElement(
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
ud.displayName = "@mantine/core/Collapse";
const [$b, tt] = Kt(
  "ScrollArea.Root component was not found in tree"
);
function yn(e, t) {
  const n = tn(t);
  mr(() => {
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
const Tb = b.forwardRef((e, t) => {
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
}), Lb = b.forwardRef(
  (e, t) => {
    const n = tt(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ b.createElement(Tb, { ...e, ref: t }) : null;
  }
), Mb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, dd = ie((e, t) => {
  const n = j("ScrollAreaRoot", Mb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, c] = q(null), [l, u] = q(null), [d, f] = q(null), [p, m] = q(null), [g, h] = q(null), [v, x] = q(0), [y, w] = q(0), [S, C] = q(!1), [P, E] = q(!1), N = Ae(t, ($) => c($));
  return /* @__PURE__ */ b.createElement(
    $b,
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
        onCornerHeightChange: w
      }
    },
    /* @__PURE__ */ b.createElement(
      V,
      {
        ...s,
        ref: N,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${v}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${y}px`
        }
      }
    )
  );
});
dd.displayName = "@mantine/core/ScrollAreaRoot";
function fd(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Co(e) {
  const t = fd(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function pd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function kb(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Jc(e, t, n = "ltr") {
  const r = Co(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = kb(e, c);
  return pd([0, s], [0, a])(l);
}
function _b(e, t, n, r = "ltr") {
  const o = Co(n), i = o / 2, s = t || i, a = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return pd([c, l], d)(e);
}
function md(e, t) {
  return e > 0 && e < t;
}
function Xr(e) {
  return e ? parseInt(e, 10) : 0;
}
function rn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [Fb, gd] = Kt(
  "ScrollAreaScrollbar was not found in tree"
), hd = ie((e, t) => {
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
  } = e, f = tt(), [p, m] = b.useState(null), g = Ae(t, (E) => m(E)), h = b.useRef(null), v = b.useRef(""), { viewport: x } = f, y = n.content - n.viewport, w = tn(l), S = tn(a), C = xo(u, 10), P = (E) => {
    if (h.current) {
      const N = E.clientX - h.current.left, $ = E.clientY - h.current.top;
      c({ x: N, y: $ });
    }
  };
  return G(() => {
    const E = (N) => {
      const $ = N.target;
      (p == null ? void 0 : p.contains($)) && w(N, y);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [x, p, y, w]), G(S, [n, S]), yn(p, C), yn(f.content, C), /* @__PURE__ */ b.createElement(
    Fb,
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
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), v.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(E));
        }),
        onPointerMove: rn(e.onPointerMove, P),
        onPointerUp: rn(e.onPointerUp, (E) => {
          const N = E.target;
          N.hasPointerCapture(E.pointerId) && N.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = v.current, h.current = null;
        })
      }
    )
  );
}), Bb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = q(), l = z(null), u = Ae(t, l, s.onScrollbarXChange);
    return G(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      hd,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${Co(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), md(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: Xr(a.paddingLeft),
              paddingEnd: Xr(a.paddingRight)
            }
          });
        }
      }
    );
  }
), jb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = tt(), [a, c] = b.useState(), l = z(null), u = Ae(t, l, s.onScrollbarYChange);
    return G(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      hd,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${Co(n)}px`,
          ...o
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), md(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: Xr(a.paddingTop),
              paddingEnd: Xr(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), _s = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = hr(), i = tt(), s = z(null), a = z(0), [c, l] = q({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = fd(c.viewport, c.content), d = {
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
  }, f = (p, m) => _b(p, a.current, c, m);
  return n === "horizontal" ? /* @__PURE__ */ b.createElement(
    Bb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = Jc(p, c, o);
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
    jb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = Jc(p, c);
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
}), bd = ie(
  (e, t) => {
    const n = tt(), { forceMount: r, ...o } = e, [i, s] = q(!1), a = e.orientation === "horizontal", c = xo(() => {
      if (n.viewport) {
        const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return yn(n.viewport, c), yn(n.content, c), r || i ? /* @__PURE__ */ b.createElement(
      _s,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), zb = ie(
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
      bd,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Vb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), i = e.orientation === "horizontal", [s, a] = q("hidden"), c = xo(() => a("idle"), 100);
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
      _s,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: rn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: rn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Xc = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = tt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return b.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ b.createElement(zb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ b.createElement(Vb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ b.createElement(bd, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ b.createElement(_s, { ...r, ref: t }) : null;
  }
);
function Wb(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Gb = ie((e, t) => {
  const { style: n, ...r } = e, o = tt(), i = gd(), { onThumbPositionChange: s } = i, a = Ae(t, (u) => i.onThumbChange(u)), c = z(), l = xo(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return G(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = Wb(u, s);
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
}), Qc = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = gd();
    return n || o.hasThumb ? /* @__PURE__ */ b.createElement(Gb, { ref: t, ...r }) : null;
  }
), yd = ie(
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
yd.displayName = "@mantine/core/ScrollAreaViewport";
var Fs = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const vd = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Hb = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), br = U((e, t) => {
  const n = j("ScrollArea", vd, e), {
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
    scrollbars: v,
    ...x
  } = n, [y, w] = q(!1), S = J({
    name: "ScrollArea",
    props: n,
    classes: Fs,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Hb
  });
  return /* @__PURE__ */ b.createElement(
    dd,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: v,
      ...S("root"),
      ...x
    },
    /* @__PURE__ */ b.createElement(
      yd,
      {
        ...f,
        ...S("viewport"),
        ref: p,
        "data-offset-scrollbars": h === !0 ? "xy" : h || void 0,
        "data-scrollbars": v || void 0,
        onScroll: typeof m == "function" ? ({ currentTarget: C }) => m({
          x: C.scrollLeft,
          y: C.scrollTop
        }) : void 0
      },
      g
    ),
    (v === "xy" || v === "x") && /* @__PURE__ */ b.createElement(
      Xc,
      {
        ...S("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1)
      },
      /* @__PURE__ */ b.createElement(Qc, { ...S("thumb") })
    ),
    (v === "xy" || v === "y") && /* @__PURE__ */ b.createElement(
      Xc,
      {
        ...S("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1)
      },
      /* @__PURE__ */ b.createElement(Qc, { ...S("thumb") })
    ),
    /* @__PURE__ */ b.createElement(
      Lb,
      {
        ...S("corner"),
        "data-hovered": y || void 0,
        "data-hidden": u === "never" || void 0
      }
    )
  );
});
br.displayName = "@mantine/core/ScrollArea";
const Bs = U((e, t) => {
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
    vars: v,
    ...x
  } = j("ScrollAreaAutosize", vd, e);
  return /* @__PURE__ */ b.createElement(V, { ...x, ref: t, style: [{ display: "flex" }, h] }, /* @__PURE__ */ b.createElement(V, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ b.createElement(
    br,
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
      vars: v,
      scrollbars: g
    },
    n
  )));
});
br.classes = Fs;
Bs.displayName = "@mantine/core/ScrollAreaAutosize";
Bs.classes = Fs;
br.Autosize = Bs;
var wd = { root: "m-87cf2631" };
const Ub = {
  __staticSelector: "UnstyledButton"
}, un = At(
  (e, t) => {
    const n = j("UnstyledButton", Ub, e), {
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
      classes: wd,
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
un.classes = wd;
un.displayName = "@mantine/core/UnstyledButton";
const ut = Math.min, xe = Math.max, Qr = Math.round, Or = Math.floor, Vt = (e) => ({
  x: e,
  y: e
}), qb = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Kb = {
  start: "end",
  end: "start"
};
function as(e, t, n) {
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
function js(e) {
  return e === "x" ? "y" : "x";
}
function zs(e) {
  return e === "y" ? "height" : "width";
}
function dn(e) {
  return ["top", "bottom"].includes(dt(e)) ? "y" : "x";
}
function Vs(e) {
  return js(dn(e));
}
function Yb(e, t, n) {
  n === void 0 && (n = !1);
  const r = On(e), o = Vs(e), i = zs(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Zr(s)), [s, Zr(s)];
}
function Jb(e) {
  const t = Zr(e);
  return [cs(e), t, cs(t)];
}
function cs(e) {
  return e.replace(/start|end/g, (t) => Kb[t]);
}
function Xb(e, t, n) {
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
function Qb(e, t, n, r) {
  const o = On(e);
  let i = Xb(dt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(cs)))), i;
}
function Zr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qb[t]);
}
function Zb(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ws(e) {
  return typeof e != "number" ? Zb(e) : {
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
function Zc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = dn(t), s = Vs(t), a = zs(s), c = dt(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const ey = async (e, t, n) => {
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
  } = Zc(l, r, c), f = r, p = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: h,
      fn: v
    } = a[g], {
      x,
      y,
      data: w,
      reset: S
    } = await v({
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
        ...w
      }
    }, S && m <= 50) {
      m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: u,
        y: d
      } = Zc(l, f, c)), g = -1;
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
async function Gs(e, t) {
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
  } = Dt(t, e), m = Ws(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], v = vn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), w = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
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
    top: (v.top - S.top + m.top) / w.y,
    bottom: (S.bottom - v.bottom + m.bottom) / w.y,
    left: (v.left - S.left + m.left) / w.x,
    right: (S.right - v.right + m.right) / w.x
  };
}
const el = (e) => ({
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
    const d = Ws(u), f = {
      x: n,
      y: r
    }, p = Vs(o), m = zs(p), g = await s.getDimensions(l), h = p === "y", v = h ? "top" : "left", x = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", w = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = C ? C[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[y] || i.floating[m]);
    const E = w / 2 - S / 2, N = P / 2 - g[m] / 2 - 1, $ = ut(d[v], N), T = ut(d[x], N), M = $, _ = P - g[m] - T, O = P / 2 - g[m] / 2 + E, L = as(M, O, _), R = !c.arrow && On(o) != null && O != L && i.reference[m] / 2 - (O < M ? $ : T) - g[m] / 2 < 0, F = R ? O < M ? O - M : O - _ : 0;
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
}), xd = function(e) {
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
      const v = dt(o), x = dt(a) === a, y = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), w = f || (x || !g ? [Zr(a)] : Jb(a));
      !f && m !== "none" && w.push(...Qb(a, g, m, y));
      const S = [a, ...w], C = await Gs(t, h), P = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(C[v]), d) {
        const M = Yb(o, s, y);
        P.push(C[M[0]], C[M[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((M) => M <= 0)) {
        var N, $;
        const M = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, _ = S[M];
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
function Sd(e) {
  const t = ut(...e.map((i) => i.left)), n = ut(...e.map((i) => i.top)), r = xe(...e.map((i) => i.right)), o = xe(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function ty(e) {
  const t = e.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => vn(Sd(o)));
}
const Cd = function(e) {
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
      } = Dt(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = ty(u), f = vn(Sd(u)), p = Ws(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((h) => c > h.left - p.left && c < h.right + p.right && l > h.top - p.top && l < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (dn(n) === "y") {
            const $ = d[0], T = d[d.length - 1], M = dt(n) === "top", _ = $.top, O = T.bottom, L = M ? $.left : T.left, R = M ? $.right : T.right, F = R - L, A = O - _;
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
          const h = dt(n) === "left", v = xe(...d.map(($) => $.right)), x = ut(...d.map(($) => $.left)), y = d.filter(($) => h ? $.left === x : $.right === v), w = y[0].top, S = y[y.length - 1].bottom, C = x, P = v, E = P - C, N = S - w;
          return {
            top: w,
            bottom: S,
            left: C,
            right: P,
            width: E,
            height: N,
            x: C,
            y: w
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
async function ny(e, t) {
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
const Ed = function(e) {
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
      } = t, c = await ny(t, e);
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
}, Hs = function(e) {
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
              x: v,
              y: x
            } = h;
            return {
              x: v,
              y: x
            };
          }
        },
        ...c
      } = Dt(e, t), l = {
        x: n,
        y: r
      }, u = await Gs(t, c), d = dn(dt(o)), f = js(d);
      let p = l[f], m = l[d];
      if (i) {
        const h = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", x = p + u[h], y = p - u[v];
        p = as(x, p, y);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", x = m + u[h], y = m - u[v];
        m = as(x, m, y);
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
}, ry = function(e) {
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
      }, d = dn(o), f = js(d);
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
        const y = f === "y" ? "height" : "width", w = i.reference[f] - i.floating[y] + h.mainAxis, S = i.reference[f] + i.reference[y] - h.mainAxis;
        p < w ? p = w : p > S && (p = S);
      }
      if (l) {
        var v, x;
        const y = f === "y" ? "width" : "height", w = ["top", "left"].includes(dt(o)), S = i.reference[d] - i.floating[y] + (w && ((v = s.offset) == null ? void 0 : v[d]) || 0) + (w ? 0 : h.crossAxis), C = i.reference[d] + i.reference[y] + (w ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (w ? h.crossAxis : 0);
        m < S ? m = S : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, oy = function(e) {
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
      } = Dt(e, t), c = await Gs(t, a), l = dt(n), u = On(n), d = dn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const h = p - c[m], v = f - c[g], x = !t.middlewareData.shift;
      let y = h, w = v;
      if (d) {
        const C = f - c.left - c.right;
        w = u || x ? ut(v, C) : C;
      } else {
        const C = p - c.top - c.bottom;
        y = u || x ? ut(h, C) : C;
      }
      if (x && !u) {
        const C = xe(c.left, 0), P = xe(c.right, 0), E = xe(c.top, 0), N = xe(c.bottom, 0);
        d ? w = f - 2 * (C !== 0 || P !== 0 ? C + P : xe(c.left, c.right)) : y = p - 2 * (E !== 0 || N !== 0 ? E + N : xe(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: w,
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
  return Pd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ve(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nt(e) {
  var t;
  return (t = (Pd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pd(e) {
  return e instanceof Node || e instanceof Ve(e).Node;
}
function It(e) {
  return e instanceof Element || e instanceof Ve(e).Element;
}
function wt(e) {
  return e instanceof HTMLElement || e instanceof Ve(e).HTMLElement;
}
function tl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ve(e).ShadowRoot;
}
function yr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function iy(e) {
  return ["table", "td", "th"].includes(Wt(e));
}
function Us(e) {
  const t = qs(), n = et(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function sy(e) {
  let t = wn(e);
  for (; wt(t) && !Eo(t); ) {
    if (Us(t))
      return t;
    t = wn(t);
  }
  return null;
}
function qs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Eo(e) {
  return ["html", "body", "#document"].includes(Wt(e));
}
function et(e) {
  return Ve(e).getComputedStyle(e);
}
function Po(e) {
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
    tl(e) && e.host || // Fallback.
    Nt(e)
  );
  return tl(t) ? t.host : t;
}
function Dd(e) {
  const t = wn(e);
  return Eo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && yr(t) ? t : Dd(t);
}
function Ct(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Dd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ve(o);
  return i ? t.concat(s, s.visualViewport || [], yr(o) ? o : [], s.frameElement && n ? Ct(s.frameElement) : []) : t.concat(o, Ct(o, [], n));
}
function Id(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = wt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Qr(n) !== i || Qr(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ks(e) {
  return It(e) ? e : e.contextElement;
}
function bn(e) {
  const t = Ks(e);
  if (!wt(t))
    return Vt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Id(t);
  let s = (i ? Qr(n.width) : n.width) / r, a = (i ? Qr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const ay = /* @__PURE__ */ Vt(0);
function Rd(e) {
  const t = Ve(e);
  return !qs() || !t.visualViewport ? ay : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function cy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ve(e) ? !1 : t;
}
function sn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ks(e);
  let s = Vt(1);
  t && (r ? It(r) && (s = bn(r)) : s = bn(e));
  const a = cy(i, n, r) ? Rd(i) : Vt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Ve(i), p = r && It(r) ? Ve(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = bn(m), h = m.getBoundingClientRect(), v = et(m), x = h.left + (m.clientLeft + parseFloat(v.paddingLeft)) * g.x, y = h.top + (m.clientTop + parseFloat(v.paddingTop)) * g.y;
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
function ly(e) {
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
  if ((o || !o && r !== "fixed") && ((Wt(n) !== "body" || yr(i)) && (s = Po(n)), wt(n))) {
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
function uy(e) {
  return Array.from(e.getClientRects());
}
function Od(e) {
  return sn(Nt(e)).left + Po(e).scrollLeft;
}
function dy(e) {
  const t = Nt(e), n = Po(e), r = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Od(e);
  const a = -n.scrollTop;
  return et(r).direction === "rtl" && (s += xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function fy(e, t) {
  const n = Ve(e), r = Nt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = qs();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function py(e, t) {
  const n = sn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = wt(e) ? bn(e) : Vt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function nl(e, t, n) {
  let r;
  if (t === "viewport")
    r = fy(e, n);
  else if (t === "document")
    r = dy(Nt(e));
  else if (It(t))
    r = py(t, n);
  else {
    const o = Rd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vn(r);
}
function Ad(e, t) {
  const n = wn(e);
  return n === t || !It(n) || Eo(n) ? !1 : et(n).position === "fixed" || Ad(n, t);
}
function my(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ct(e, [], !1).filter((a) => It(a) && Wt(a) !== "body"), o = null;
  const i = et(e).position === "fixed";
  let s = i ? wn(e) : e;
  for (; It(s) && !Eo(s); ) {
    const a = et(s), c = Us(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || yr(s) && !c && Ad(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = wn(s);
  }
  return t.set(e, r), r;
}
function gy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? my(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, u) => {
    const d = nl(t, u, o);
    return l.top = xe(d.top, l.top), l.right = ut(d.right, l.right), l.bottom = ut(d.bottom, l.bottom), l.left = xe(d.left, l.left), l;
  }, nl(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function hy(e) {
  return Id(e);
}
function by(e, t, n) {
  const r = wt(t), o = Nt(t), i = n === "fixed", s = sn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Vt(0);
  if (r || !r && !i)
    if ((Wt(t) !== "body" || yr(o)) && (a = Po(t)), r) {
      const l = sn(t, !0, i, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Od(o));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function rl(e, t) {
  return !wt(e) || et(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Nd(e, t) {
  const n = Ve(e);
  if (!wt(e))
    return n;
  let r = rl(e, t);
  for (; r && iy(r) && et(r).position === "static"; )
    r = rl(r, t);
  return r && (Wt(r) === "html" || Wt(r) === "body" && et(r).position === "static" && !Us(r)) ? n : r || sy(e) || n;
}
const yy = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Nd, i = this.getDimensions;
  return {
    reference: by(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function vy(e) {
  return et(e).direction === "rtl";
}
const wy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ly,
  getDocumentElement: Nt,
  getClippingRect: gy,
  getOffsetParent: Nd,
  getElementRects: yy,
  getClientRects: uy,
  getDimensions: hy,
  getScale: bn,
  isElement: It,
  isRTL: vy
};
function xy(e, t) {
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
    const p = Or(u), m = Or(o.clientWidth - (l + d)), g = Or(o.clientHeight - (u + f)), h = Or(l), x = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: xe(0, ut(1, c)) || 1
    };
    let y = !0;
    function w(S) {
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
      n = new IntersectionObserver(w, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Sy(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Ks(e), u = o || i ? [...l ? Ct(l) : [], ...Ct(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = l && a ? xy(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((v) => {
    let [x] = v;
    x && x.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, g = c ? sn(e) : null;
  c && h();
  function h() {
    const v = sn(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((v) => {
      o && v.removeEventListener("scroll", n), i && v.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const Cy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: wy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return ey(e, t, {
    ...o,
    platform: i
  });
}, $d = (e) => {
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
      return r && t(r) ? r.current != null ? el({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? el({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var _r = typeof document < "u" ? bo : G;
function eo(e, t) {
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
        if (!eo(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !eo(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Td(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ol(e, t) {
  const n = Td(e);
  return Math.round(t * n) / n;
}
function il(e) {
  const t = I.useRef(e);
  return _r(() => {
    t.current = e;
  }), t;
}
function Ey(e) {
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
  eo(f, r) || p(r);
  const [m, g] = I.useState(null), [h, v] = I.useState(null), x = I.useCallback((R) => {
    R != C.current && (C.current = R, g(R));
  }, [g]), y = I.useCallback((R) => {
    R !== P.current && (P.current = R, v(R));
  }, [v]), w = i || m, S = s || h, C = I.useRef(null), P = I.useRef(null), E = I.useRef(u), N = il(c), $ = il(o), T = I.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const R = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (R.platform = $.current), Cy(C.current, P.current, R).then((F) => {
      const A = {
        ...F,
        isPositioned: !0
      };
      M.current && !eo(E.current, A) && (E.current = A, Vm.flushSync(() => {
        d(A);
      }));
    });
  }, [f, t, n, $]);
  _r(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((R) => ({
      ...R,
      isPositioned: !1
    })));
  }, [l]);
  const M = I.useRef(!1);
  _r(() => (M.current = !0, () => {
    M.current = !1;
  }), []), _r(() => {
    if (w && (C.current = w), S && (P.current = S), w && S) {
      if (N.current)
        return N.current(w, S, T);
      T();
    }
  }, [w, S, T, N]);
  const _ = I.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: x,
    setFloating: y
  }), [x, y]), O = I.useMemo(() => ({
    reference: w,
    floating: S
  }), [w, S]), L = I.useMemo(() => {
    const R = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return R;
    const F = ol(O.floating, u.x), A = ol(O.floating, u.y);
    return a ? {
      ...R,
      transform: "translate(" + F + "px, " + A + "px)",
      ...Td(O.floating) >= 1.5 && {
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
var Et = typeof document < "u" ? bo : G;
let Ai = !1, Py = 0;
const sl = () => "floating-ui-" + Py++;
function Dy() {
  const [e, t] = I.useState(() => Ai ? sl() : void 0);
  return Et(() => {
    e == null && t(sl());
  }, []), I.useEffect(() => {
    Ai || (Ai = !0);
  }, []), e;
}
const Iy = I[/* @__PURE__ */ "useId".toString()], Ld = Iy || Dy;
function Ry() {
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
const Oy = /* @__PURE__ */ I.createContext(null), Ay = /* @__PURE__ */ I.createContext(null), Md = () => {
  var e;
  return ((e = I.useContext(Oy)) == null ? void 0 : e.id) || null;
}, Ys = () => I.useContext(Ay);
function Mt(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Ny() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function $y() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function Do(e) {
  return Mt(e).defaultView || window;
}
function ht(e) {
  return e ? e instanceof Element || e instanceof Do(e).Element : !1;
}
function kd(e) {
  return e ? e instanceof HTMLElement || e instanceof Do(e).HTMLElement : !1;
}
function Ty(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = Do(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ly(e) {
  if (e.mozInputSource === 0 && e.isTrusted)
    return !0;
  const t = /Android/i;
  return (t.test(Ny()) || t.test($y())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function My(e) {
  return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function _d(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function ky(e) {
  return "nativeEvent" in e;
}
function ls(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Ty(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Fd(e) {
  return "data-floating-ui-" + e;
}
function al(e) {
  const t = z(e);
  return Et(() => {
    t.current = e;
  }), t;
}
const cl = /* @__PURE__ */ Fd("safe-polygon");
function Fr(e, t, n) {
  return n && !_d(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function _y(e, t) {
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
  } = t, g = Ys(), h = Md(), v = al(d), x = al(u), y = I.useRef(), w = I.useRef(), S = I.useRef(), C = I.useRef(), P = I.useRef(!0), E = I.useRef(!1), N = I.useRef(() => {
  }), $ = I.useCallback(() => {
    var O;
    const L = (O = o.current.openEvent) == null ? void 0 : O.type;
    return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
  }, [o]);
  I.useEffect(() => {
    if (!l)
      return;
    function O() {
      clearTimeout(w.current), clearTimeout(C.current), P.current = !0;
    }
    return i.on("dismiss", O), () => {
      i.off("dismiss", O);
    };
  }, [l, i]), I.useEffect(() => {
    if (!l || !v.current || !n)
      return;
    function O(R) {
      $() && r(!1, R);
    }
    const L = Mt(a).documentElement;
    return L.addEventListener("mouseleave", O), () => {
      L.removeEventListener("mouseleave", O);
    };
  }, [a, n, r, l, v, o, $]);
  const T = I.useCallback(function(O, L) {
    L === void 0 && (L = !0);
    const R = Fr(x.current, "close", y.current);
    R && !S.current ? (clearTimeout(w.current), w.current = setTimeout(() => r(!1, O), R)) : L && (clearTimeout(w.current), r(!1, O));
  }, [x, r]), M = I.useCallback(() => {
    N.current(), S.current = void 0;
  }, []), _ = I.useCallback(() => {
    if (E.current) {
      const O = Mt(c.floating.current).body;
      O.style.pointerEvents = "", O.removeAttribute(cl), E.current = !1;
    }
  }, [c]);
  return I.useEffect(() => {
    if (!l)
      return;
    function O() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function L(A) {
      if (clearTimeout(w.current), P.current = !1, f && !_d(y.current) || p > 0 && Fr(x.current, "open") === 0)
        return;
      const H = Fr(x.current, "open", y.current);
      H ? w.current = setTimeout(() => {
        r(!0, A);
      }, H) : r(!0, A);
    }
    function R(A) {
      if (O())
        return;
      N.current();
      const H = Mt(a);
      if (clearTimeout(C.current), v.current) {
        n || clearTimeout(w.current), S.current = v.current({
          ...e,
          tree: g,
          x: A.clientX,
          y: A.clientY,
          onClose() {
            _(), M(), T(A);
          }
        });
        const ne = S.current;
        H.addEventListener("mousemove", ne), N.current = () => {
          H.removeEventListener("mousemove", ne);
        };
        return;
      }
      (y.current === "touch" ? !ls(a, A.relatedTarget) : !0) && T(A);
    }
    function F(A) {
      O() || v.current == null || v.current({
        ...e,
        tree: g,
        x: A.clientX,
        y: A.clientY,
        onClose() {
          _(), M(), T(A);
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
  }, [s, a, l, e, f, p, m, T, M, _, r, n, g, x, v, o]), Et(() => {
    var O;
    if (l && n && (O = v.current) != null && O.__options.blockPointerEvents && $()) {
      const F = Mt(a).body;
      if (F.setAttribute(cl, ""), F.style.pointerEvents = "none", E.current = !0, ht(s) && a) {
        var L, R;
        const A = s, H = g == null || (L = g.nodesRef.current.find((K) => K.id === h)) == null || (R = L.context) == null ? void 0 : R.elements.floating;
        return H && (H.style.pointerEvents = ""), A.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          A.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, h, a, s, g, v, o, $]), Et(() => {
    n || (y.current = void 0, M(), _());
  }, [n, M, _]), I.useEffect(() => () => {
    M(), clearTimeout(w.current), clearTimeout(C.current), _();
  }, [l, M, _]), I.useMemo(() => {
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
          clearTimeout(w.current);
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
const Bd = /* @__PURE__ */ I.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), jd = () => I.useContext(Bd), Fy = (e) => {
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
  }, [o.currentId]), /* @__PURE__ */ I.createElement(Bd.Provider, {
    value: I.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, By = (e, t) => {
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
  } = jd();
  Et(() => {
    i && (c({
      delay: {
        open: 1,
        close: Fr(a, "close")
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
function jy(e) {
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
function zy(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const Vy = I[/* @__PURE__ */ "useInsertionEffect".toString()], Wy = Vy || ((e) => e());
function Br(e) {
  const t = I.useRef(() => {
  });
  return Wy(() => {
    t.current = e;
  }), I.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function jr(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
const Gy = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, Hy = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, Uy = (e) => {
  var t, n;
  return {
    escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function qy(e, t) {
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
    bubbles: v
  } = t, x = Ys(), y = Md() != null, w = Br(typeof f == "function" ? f : () => !1), S = typeof f == "function" ? w : f, C = I.useRef(!1), {
    escapeKeyBubbles: P,
    outsidePressBubbles: E
  } = Uy(v), N = Br((T) => {
    if (!n || !u || !d || T.key !== "Escape")
      return;
    const M = x ? Ni(x.nodesRef.current, i) : [];
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
    }), r(!1, ky(T) ? T.nativeEvent : T);
  }), $ = Br((T) => {
    const M = C.current;
    if (C.current = !1, M || typeof S == "function" && !S(T))
      return;
    const _ = zy(T);
    if (kd(_) && c) {
      const R = _.clientWidth > 0 && _.scrollWidth > _.clientWidth, F = _.clientHeight > 0 && _.scrollHeight > _.clientHeight;
      let A = F && T.offsetX > _.clientWidth;
      if (F && Do(c).getComputedStyle(_).direction === "rtl" && (A = T.offsetX <= _.offsetWidth - _.clientWidth), A || R && T.offsetY > _.clientHeight)
        return;
    }
    const O = x && Ni(x.nodesRef.current, i).some((R) => {
      var F;
      return jr(T, (F = R.context) == null ? void 0 : F.elements.floating);
    });
    if (jr(T, c) || jr(T, a) || O)
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
        } : Ly(T) || My(T)
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
    const M = Mt(c);
    d && M.addEventListener("keydown", N), S && M.addEventListener(p, $);
    let _ = [];
    return h && (ht(a) && (_ = Ct(a)), ht(c) && (_ = _.concat(Ct(c))), !ht(s) && s && s.contextElement && (_ = _.concat(Ct(s.contextElement)))), _ = _.filter((O) => {
      var L;
      return O !== ((L = M.defaultView) == null ? void 0 : L.visualViewport);
    }), _.forEach((O) => {
      O.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      d && M.removeEventListener("keydown", N), S && M.removeEventListener(p, $), _.forEach((O) => {
        O.removeEventListener("scroll", T);
      });
    };
  }, [l, c, a, s, d, S, p, n, r, h, u, P, E, N, $]), I.useEffect(() => {
    C.current = !1;
  }, [S, p]), I.useMemo(() => u ? {
    reference: {
      onKeyDown: N,
      [Gy[g]]: (T) => {
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
      [Hy[p]]: () => {
        C.current = !0;
      }
    }
  } : {}, [u, o, m, p, g, r, N]);
}
function Js(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = I.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, c = Ey(e), l = Ys(), u = Br((w, S) => {
    w && (f.current.openEvent = S), r == null || r(w, S);
  }), d = I.useRef(null), f = I.useRef({}), p = I.useState(() => Ry())[0], m = Ld(), g = I.useCallback((w) => {
    const S = ht(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    c.refs.setReference(S);
  }, [c.refs]), h = I.useCallback((w) => {
    (ht(w) || w === null) && (d.current = w, s(w)), (ht(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !ht(w)) && c.refs.setReference(w);
  }, [c.refs]), v = I.useMemo(() => ({
    ...c.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [c.refs, h, g]), x = I.useMemo(() => ({
    ...c.elements,
    domReference: a
  }), [c.elements, a]), y = I.useMemo(() => ({
    ...c,
    refs: v,
    elements: x,
    dataRef: f,
    nodeId: o,
    floatingId: m,
    events: p,
    open: n,
    onOpenChange: u
  }), [c, o, m, p, n, u, v, x]);
  return Et(() => {
    const w = l == null ? void 0 : l.nodesRef.current.find((S) => S.id === o);
    w && (w.context = y);
  }), I.useMemo(() => ({
    ...c,
    context: y,
    refs: v,
    elements: x
  }), [c, v, x, y]);
}
function Ky(e, t) {
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
      !n && kd(c) && c === jy(Mt(c)) && (f.current = !0);
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
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && jr(o.current.openEvent, c) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = ht(g) && g.hasAttribute(Fd("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          ls(s.floating.current, g) || ls(c, g) || h || r(!1, m.nativeEvent);
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
function Yy(e) {
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
function Jy(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, s = Ld();
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
function zd(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function ll(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function ul(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const Xy = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Qy({
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
    [Xy[c]]: D(r)
  }, d = D(-t / 2);
  return c === "left" ? {
    ...u,
    ...ll(l, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...ll(l, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...ul(l, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...ul(l, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Xs = ie(
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
    const { dir: d } = hr();
    return i ? /* @__PURE__ */ b.createElement(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Qy({
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
Xs.displayName = "@mantine/core/FloatingArrow";
const [Zy, Vd] = Kt(
  "Popover component was not found in the tree"
);
function Wd({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = Dh(t), o = Ae(r, e == null ? void 0 : e.ref);
  return qt(e) ? ln(e, { [n]: o }) : e;
}
Wd.displayName = "@mantine/core/FocusTrap";
function ev(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const tv = {}, Gd = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", tv, e), [i, s] = q(!1), a = z(null);
  return mr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : ev(o), Ju(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : Wm(/* @__PURE__ */ b.createElement(b.Fragment, null, n), a.current);
});
Gd.displayName = "@mantine/core/Portal";
function Io({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ b.createElement(Gd, { ...n }, t) : /* @__PURE__ */ b.createElement(b.Fragment, null, t);
}
Io.displayName = "@mantine/core/OptionalPortal";
const zn = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${D(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Ar = {
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
    ...zn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...zn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...zn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...zn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...zn("top"),
    common: { transformOrigin: "top right" }
  }
}, dl = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function nv({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in Ar ? {
    transitionProperty: Ar[e].transitionProperty,
    ...o,
    ...Ar[e].common,
    ...Ar[e][dl[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[dl[t]]
  };
}
function rv({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a
}) {
  const c = pt(), l = Qu(), u = c.respectReducedMotion ? l : !1, [d, f] = q(u ? 0 : e), [p, m] = q(r ? "entered" : "exited"), g = z(-1), h = (v) => {
    const x = v ? o : i, y = v ? s : a;
    m(v ? "pre-entering" : "pre-exiting"), window.clearTimeout(g.current);
    const w = u ? 0 : v ? e : t;
    if (f(w), w === 0)
      typeof x == "function" && x(), typeof y == "function" && y(), m(v ? "entered" : "exited");
    else {
      const S = window.setTimeout(() => {
        typeof x == "function" && x(), m(v ? "entering" : "exiting");
      }, 10);
      g.current = window.setTimeout(() => {
        window.clearTimeout(S), typeof y == "function" && y(), m(v ? "entered" : "exited");
      }, w);
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
function Ro({
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
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = rv({
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
    nv({
      transition: t,
      duration: d,
      state: f,
      timingFunction: p
    })
  ));
}
Ro.displayName = "@mantine/core/Transition";
var Hd = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const ov = {}, Qs = U((e, t) => {
  var h, v, x, y;
  const n = j("PopoverDropdown", ov, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = n, f = Vd(), p = vh({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Ae(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ b.createElement(Io, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ b.createElement(
    Ro,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((v = f.transitionProps) == null ? void 0 : v.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((x = f.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? f.transitionProps.exitDuration : (y = f.transitionProps) == null ? void 0 : y.duration
    },
    (w) => /* @__PURE__ */ b.createElement(Wd, { active: f.trapFocus }, /* @__PURE__ */ b.createElement(
      V,
      {
        ...m,
        ...d,
        variant: c,
        ref: g,
        onKeyDownCapture: uh(f.onClose, {
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
              ...w,
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
        Xs,
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
Qs.classes = Hd;
Qs.displayName = "@mantine/core/PopoverDropdown";
const iv = {
  refProp: "ref",
  popupType: "dialog"
}, Ud = U((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    iv,
    e
  );
  if (!qt(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Vd(), c = Ae(a.reference, n.ref, t), l = a.withRoles ? {
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
Ud.displayName = "@mantine/core/PopoverTarget";
function qd({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = q(0);
  G(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return Sy(
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
function sv(e, t) {
  var r, o, i, s;
  const n = [Ed(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(Hs({ limiter: ry() })), (o = e.middlewares) != null && o.flip && n.push(xd()), (i = e.middlewares) != null && i.inline && n.push(Cd()), n.push($d({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    oy({
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
function av(e) {
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
  }, i = Js({
    placement: e.position,
    middleware: sv(e, () => i)
  });
  return qd({
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
const cv = {
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
  zIndex: pr("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, lv = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : Me(t),
    "--popover-shadow": fh(n)
  }
});
function mt(e) {
  var $t, Ye, Pe, me, Tt, Jt;
  const t = j("Popover", cv, e), {
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
    classNames: v,
    styles: x,
    closeOnClickOutside: y,
    withinPortal: w,
    portalProps: S,
    closeOnEscape: C,
    clickOutsideEvents: P,
    trapFocus: E,
    onClose: N,
    onOpen: $,
    onChange: T,
    zIndex: M,
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
    classes: Hd,
    classNames: v,
    styles: x,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: lv
  }), re = z(null), [we, ke] = q(null), [Ce, Ee] = q(null), { dir: _e } = hr(), ce = St(L), X = av({
    middlewares: u,
    width: l,
    position: zd(_e, r),
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
  gh(() => y && X.onClose(), P, [
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
    Zy,
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
        withinPortal: w,
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
        targetProps: Ne,
        __staticSelector: F,
        classNames: v,
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
mt.Target = Ud;
mt.Dropdown = Qs;
mt.displayName = "@mantine/core/Popover";
mt.extend = (e) => e;
var st = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const uv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: xt(st.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: st.bar }), /* @__PURE__ */ b.createElement("span", { className: st.bar }), /* @__PURE__ */ b.createElement("span", { className: st.bar }))), dv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: xt(st.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: st.dot }), /* @__PURE__ */ b.createElement("span", { className: st.dot }), /* @__PURE__ */ b.createElement("span", { className: st.dot }))), fv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: xt(st.ovalLoader, e), ...t, ref: n })), Kd = {
  bars: uv,
  oval: fv,
  dots: dv
}, pv = {
  loaders: Kd,
  type: "oval"
}, mv = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": se(t, "loader-size"),
    "--loader-color": n ? vt(n, e) : void 0
  }
}), An = U((e, t) => {
  const n = j("Loader", pv, e), {
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
    varsResolver: mv
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
An.defaultLoaders = Kd;
An.classes = st;
An.displayName = "@mantine/core/Loader";
var Oo = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const fl = {
  orientation: "horizontal"
}, gv = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), Zs = U((e, t) => {
  const n = j("ActionIconGroup", fl, e), {
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
  } = j("ActionIconGroup", fl, e), p = J({
    name: "ActionIconGroup",
    props: n,
    classes: Oo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: gv,
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
Zs.classes = Oo;
Zs.displayName = "@mantine/core/ActionIconGroup";
const hv = {}, bv = (e, { size: t, radius: n, variant: r, gradient: o, color: i }) => {
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
}, Jn = At((e, t) => {
  const n = j("ActionIcon", hv, e), {
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
    children: v,
    disabled: x,
    "data-disabled": y,
    ...w
  } = n, S = J({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: c,
    classes: Oo,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: bv
  });
  return /* @__PURE__ */ b.createElement(
    un,
    {
      ...S("root", { active: !x && !l && !y }),
      ...w,
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
    ) : v
  );
});
Jn.classes = Oo;
Jn.displayName = "@mantine/core/ActionIcon";
Jn.Group = Zs;
const Yd = ie(
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
Yd.displayName = "@mantine/core/CloseIcon";
var Jd = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const yv = {
  variant: "subtle"
}, vv = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": se(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : Me(n),
    "--cb-icon-size": D(r)
  }
}), vr = At((e, t) => {
  const n = j("CloseButton", yv, e), {
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
    classes: Jd,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: vv
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
    /* @__PURE__ */ b.createElement(Yd, null),
    o
  );
});
vr.classes = Jd;
vr.displayName = "@mantine/core/CloseButton";
function wv(e) {
  return zm.toArray(e).filter(Boolean);
}
var Xd = { root: "m-4081bf90" };
const xv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Sv = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": Gu(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), xn = U((e, t) => {
  const n = j("Group", xv, e), {
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
    __size: v,
    ...x
  } = n, y = wv(c), w = y.length, S = Gu(l ?? "md"), P = { childWidth: `calc(${100 / w}% - (${S} - ${S} / ${w}))` }, E = J({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: i,
    classes: Xd,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: Sv
  });
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...E("root"),
      ref: t,
      variant: h,
      mod: { grow: p },
      size: v,
      ...x
    },
    y
  );
});
xn.classes = Xd;
xn.displayName = "@mantine/core/Group";
var Qd = { root: "m-9814e45f" };
const Cv = {
  zIndex: pr("modal")
}, Ev = (e, { gradient: t, color: n, backgroundOpacity: r, blur: o, radius: i, zIndex: s }) => ({
  root: {
    "--overlay-bg": t || (n !== void 0 || r !== void 0) && Re(n || "#000", r ?? 0.6) || void 0,
    "--overlay-filter": o ? `blur(${D(o)})` : void 0,
    "--overlay-radius": i === void 0 ? void 0 : Me(i),
    "--overlay-z-index": s == null ? void 0 : s.toString()
  }
}), to = At((e, t) => {
  const n = j("Overlay", Cv, e), {
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
    backgroundOpacity: v,
    ...x
  } = n, y = J({
    name: "Overlay",
    props: n,
    classes: Qd,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Ev
  });
  return /* @__PURE__ */ b.createElement(V, { ref: t, ...y("root"), mod: { center: u, fixed: l }, ...x }, d);
});
to.classes = Qd;
to.displayName = "@mantine/core/Overlay";
const [Pv, Nn] = Ns({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var nt = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const pl = {}, Dv = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${ze(t)} - ${D(2)})`
  }
}), Ao = U((e, t) => {
  const n = j("InputDescription", pl, e), {
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
  } = j("InputDescription", pl, n), m = Nn(), g = J({
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
    varsResolver: Dv
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
Ao.classes = nt;
Ao.displayName = "@mantine/core/InputDescription";
const Iv = {}, Rv = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${ze(t)} - ${D(2)})`
  }
}), No = U((e, t) => {
  const n = j("InputError", Iv, e), {
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
    varsResolver: Rv
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
No.classes = nt;
No.displayName = "@mantine/core/InputError";
const ml = {
  labelElement: "label"
}, Ov = (e, { size: t }) => ({
  label: {
    "--input-label-size": ze(t),
    "--input-asterisk-color": void 0
  }
}), $o = U((e, t) => {
  const n = j("InputLabel", ml, e), {
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
    ...v
  } = j("InputLabel", ml, n), x = J({
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
    varsResolver: Ov
  }), y = Nn(), w = (y == null ? void 0 : y.getStyles) || x;
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...w("label"),
      component: l,
      variant: h,
      size: u,
      ref: t,
      htmlFor: l === "label" ? f : void 0,
      mod: { required: d },
      onMouseDown: (S) => {
        p == null || p(S), !S.defaultPrevented && S.detail > 1 && S.preventDefault();
      },
      ...v
    },
    m,
    d && /* @__PURE__ */ b.createElement("span", { ...w("required"), "aria-hidden": !0 }, " *")
  );
});
$o.classes = nt;
$o.displayName = "@mantine/core/InputLabel";
const gl = {}, ea = U((e, t) => {
  const n = j("InputPlaceholder", gl, e), {
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
  } = j("InputPlaceholder", gl, n), p = J({
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
ea.classes = nt;
ea.displayName = "@mantine/core/InputPlaceholder";
function Av(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((c) => c === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const Nv = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, $v = (e, { size: t }) => ({
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
}), ta = U((e, t) => {
  const n = j("InputWrapper", Nv, e), {
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
    labelProps: v,
    descriptionProps: x,
    errorProps: y,
    labelElement: w,
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
    varsResolver: $v
  }), M = {
    size: l,
    variant: u,
    __staticSelector: d
  }, _ = St(P), O = typeof C == "boolean" ? C : E, L = (y == null ? void 0 : y.id) || `${_}-error`, R = (x == null ? void 0 : x.id) || `${_}-description`, F = _, A = !!g && typeof g != "boolean", H = !!h, K = `${A ? L : ""} ${H ? R : ""}`, ne = K.trim().length > 0 ? K.trim() : void 0, ye = (v == null ? void 0 : v.id) || `${_}-label`, ue = m && /* @__PURE__ */ b.createElement(
    $o,
    {
      key: "label",
      labelElement: w,
      id: ye,
      htmlFor: F,
      required: O,
      ...M,
      ...v
    },
    m
  ), Ne = H && /* @__PURE__ */ b.createElement(
    Ao,
    {
      key: "description",
      ...x,
      ...M,
      size: (x == null ? void 0 : x.size) || M.size,
      id: (x == null ? void 0 : x.id) || R
    },
    h
  ), ve = /* @__PURE__ */ b.createElement(b.Fragment, { key: "input" }, f(S)), re = A && /* @__PURE__ */ b.createElement(
    No,
    {
      ...y,
      ...M,
      size: (y == null ? void 0 : y.size) || M.size,
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
    Pv,
    {
      value: {
        getStyles: T,
        describedBy: ne,
        inputId: F,
        labelId: ye,
        ...Av(p, { hasDescription: H, hasError: A })
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
ta.classes = nt;
ta.displayName = "@mantine/core/InputWrapper";
const Tv = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Lv = (e, t, n) => ({
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
  const n = j("Input", Tv, e), {
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
    leftSectionWidth: v,
    rightSection: x,
    rightSectionProps: y,
    rightSectionWidth: w,
    rightSectionPointerEvents: S,
    leftSectionPointerEvents: C,
    variant: P,
    vars: E,
    pointer: N,
    multiline: $,
    radius: T,
    id: M,
    withAria: _,
    withErrorStyles: O,
    ...L
  } = n, { styleProps: R, rest: F } = gr(L), A = Nn(), H = { offsetBottom: A == null ? void 0 : A.offsetBottom, offsetTop: A == null ? void 0 : A.offsetTop }, K = J({
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
    varsResolver: Lv
  }), ne = _ ? {
    required: c,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": A == null ? void 0 : A.describedBy,
    id: (A == null ? void 0 : A.inputId) || M
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
Se.Wrapper = ta;
Se.Label = $o;
Se.Error = No;
Se.Description = Ao;
Se.Placeholder = ea;
Se.displayName = "@mantine/core/Input";
function Mv(e, t, n) {
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
    wrapperProps: v,
    id: x,
    size: y,
    style: w,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    vars: N,
    ...$
  } = r, { styleProps: T, rest: M } = gr($), _ = {
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
    style: w,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    id: x,
    ...v
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
      id: x
    }
  };
}
const kv = {
  __staticSelector: "InputBase",
  withAria: !0
}, Yt = At((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = Mv("InputBase", kv, e);
  return /* @__PURE__ */ b.createElement(Se.Wrapper, { ...r }, /* @__PURE__ */ b.createElement(Se, { ...n, ...o, ref: t }));
});
Yt.classes = { ...Se.classes, ...Se.Wrapper.classes };
Yt.displayName = "@mantine/core/InputBase";
const [_v, na] = Kt(
  "Accordion component was not found in the tree"
);
function ra({ style: e, size: t = 16, ...n }) {
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
ra.displayName = "@mantine/core/AccordionChevron";
const [Fv, Zd] = Kt("Accordion.Item component was not found in the tree");
var wr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const Bv = {}, oa = U((e, t) => {
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
  } = j("AccordionControl", Bv, e), { value: m } = Zd(), g = na(), h = g.isItemActive(m), v = typeof g.order == "number", x = `h${g.order}`, y = /* @__PURE__ */ b.createElement(
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
      onClick: (w) => {
        l == null || l(w), g.onChange(m);
      },
      type: "button",
      disabled: f,
      "aria-expanded": h,
      "aria-controls": g.getRegionId(m),
      id: g.getControlId(m),
      onKeyDown: Wu({
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
  return v ? /* @__PURE__ */ b.createElement(x, { ...g.getStyles("itemTitle", { classNames: n, styles: i }) }, y) : y;
});
oa.displayName = "@mantine/core/AccordionControl";
oa.classes = wr;
const jv = {}, ia = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...c } = j(
    "AccordionItem",
    jv,
    e
  ), l = na();
  return /* @__PURE__ */ b.createElement(Fv, { value: { value: a } }, /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      mod: { active: l.isItemActive(a) },
      ...l.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: l.variant }),
      ...c
    }
  ));
});
ia.displayName = "@mantine/core/AccordionItem";
ia.classes = wr;
const zv = {}, sa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...c } = j(
    "AccordionPanel",
    zv,
    e
  ), { value: l } = Zd(), u = na();
  return /* @__PURE__ */ b.createElement(
    ud,
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
sa.displayName = "@mantine/core/AccordionPanel";
sa.classes = wr;
const Vv = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ b.createElement(ra, null)
}, Wv = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : Me(r)
  }
});
function oe(e) {
  const t = j("Accordion", Vv, e), {
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
    chevronPosition: v,
    chevronSize: x,
    order: y,
    chevron: w,
    variant: S,
    radius: C,
    ...P
  } = t, E = St(p), [N, $] = Pt({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), T = (O) => Array.isArray(N) ? N.includes(O) : O === N, M = (O) => {
    const L = Array.isArray(N) ? N.includes(O) ? N.filter((R) => R !== O) : [...N, O] : O === N ? null : O;
    $(L);
  }, _ = J({
    name: "Accordion",
    classes: wr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: Wv
  });
  return /* @__PURE__ */ b.createElement(
    _v,
    {
      value: {
        isItemActive: T,
        onChange: M,
        getControlId: Kr(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: Kr(
          `${E}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: h,
        chevronPosition: v,
        order: y,
        chevron: w,
        loop: m,
        getStyles: _,
        variant: S,
        unstyled: s
      }
    },
    /* @__PURE__ */ b.createElement(V, { ..._("root"), id: E, ...P, variant: S, "data-accordion": !0 }, c)
  );
}
const Gv = (e) => e;
oe.extend = Gv;
oe.classes = wr;
oe.displayName = "@mantine/core/Accordion";
oe.Item = ia;
oe.Panel = sa;
oe.Control = oa;
oe.Chevron = ra;
var ef = { root: "m-66836ed3", "root--filled": "m-12b2e6d5", "root--white": "m-cffd1856", wrapper: "m-a5d60502", body: "m-667c2793", title: "m-6a03f287", label: "m-698f4f23", icon: "m-667f2a6a", message: "m-7fa78076", closeButton: "m-87f54839" };
const Hv = {}, Uv = (e, { radius: t, color: n, variant: r }) => {
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
}, aa = U((e, t) => {
  const n = j("Alert", Hv, e), {
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
    closeButtonLabel: v,
    variant: x,
    ...y
  } = n, w = J({
    name: "Alert",
    classes: ef,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Uv
  }), S = St(p), C = d && `${S}-title` || void 0, P = `${S}-body`;
  return /* @__PURE__ */ b.createElement(
    V,
    {
      id: S,
      ...w("root", { variant: x }),
      variant: x,
      ref: t,
      ...y,
      role: "alert",
      "aria-describedby": P,
      "aria-labelledby": C
    },
    /* @__PURE__ */ b.createElement("div", { ...w("wrapper") }, m && /* @__PURE__ */ b.createElement("div", { ...w("icon") }, m), /* @__PURE__ */ b.createElement("div", { ...w("body") }, d && /* @__PURE__ */ b.createElement("div", { ...w("title"), "data-with-close-button": g || void 0 }, /* @__PURE__ */ b.createElement("span", { id: C, ...w("label") }, d)), f && /* @__PURE__ */ b.createElement("div", { id: P, ...w("message") }, f)), g && /* @__PURE__ */ b.createElement(
      vr,
      {
        ...w("closeButton"),
        onClick: h,
        variant: "transparent",
        size: 16,
        iconSize: 16,
        "aria-label": v,
        unstyled: a
      }
    ))
  );
});
aa.classes = ef;
aa.displayName = "@mantine/core/Alert";
var tf = { root: "m-b6d8b162" };
function qv(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const Kv = {
  inherit: !1
}, Yv = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": ze(o),
    "--text-lh": dh(o),
    "--text-gradient": t === "gradient" ? os(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? vt(i, e) : void 0
  }
}), Qe = At((e, t) => {
  const n = j("Text", Kv, e), {
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
    mod: v,
    size: x,
    ...y
  } = n, w = J({
    name: ["Text", l],
    props: n,
    classes: tf,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: Yv
  });
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...w("root", { focusable: !0 }),
      ref: t,
      component: c ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": qv(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s
        },
        v
      ],
      size: x,
      ...y
    }
  );
});
Qe.classes = tf;
Qe.displayName = "@mantine/core/Text";
function nf(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => nf(t))
  } : e;
}
function rf(e) {
  return e ? e.map(nf) : [];
}
function ca(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...ca(n.items) } : (t[n.value] = n, t), {});
}
var Oe = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const Jv = {
  error: null
}, Xv = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": se(t, "combobox-chevron-size")
  }
}), la = U((e, t) => {
  const n = j("ComboboxChevron", Jv, e), { size: r, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, ...d } = n, f = J({
    name: "ComboboxChevron",
    classes: Oe,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: Xv,
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
la.classes = Oe;
la.displayName = "@mantine/core/ComboboxChevron";
const [Qv, rt] = Kt(
  "Combobox component was not found in tree"
), of = ie(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ b.createElement(
    vr,
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
of.displayName = "@mantine/core/ComboboxClearButton";
const Zv = {}, ua = U((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    Zv,
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
ua.classes = Oe;
ua.displayName = "@mantine/core/ComboboxDropdown";
const ew = {
  refProp: "ref"
}, sf = U((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", ew, e);
  if (rt(), !qt(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ b.createElement(mt.Target, { ref: t, refProp: r }, n);
});
sf.displayName = "@mantine/core/ComboboxDropdownTarget";
const tw = {}, da = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    tw,
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
da.classes = Oe;
da.displayName = "@mantine/core/ComboboxEmpty";
function fa({
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
const nw = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, af = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxEventsTarget", nw, e);
  if (!qt(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = fa({
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
af.displayName = "@mantine/core/ComboboxEventsTarget";
const rw = {}, pa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    rw,
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
pa.classes = Oe;
pa.displayName = "@mantine/core/ComboboxFooter";
const ow = {}, ma = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: c, ...l } = j(
    "ComboboxGroup",
    ow,
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
ma.classes = Oe;
ma.displayName = "@mantine/core/ComboboxGroup";
const iw = {}, ga = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    iw,
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
ga.classes = Oe;
ga.displayName = "@mantine/core/ComboboxHeader";
const sw = {}, ha = U((e, t) => {
  const n = j("ComboboxOption", sw, e), {
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
  } = n, h = rt(), v = Iu(), x = l || v;
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
        var w;
        p ? y.preventDefault() : ((w = h.onOptionSubmit) == null || w.call(h, n.value, n), c == null || c(y));
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
ha.classes = Oe;
ha.displayName = "@mantine/core/ComboboxOption";
const aw = {}, ba = U((e, t) => {
  const n = j("ComboboxOptions", aw, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = n, d = rt(), f = St(a);
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
ba.classes = Oe;
ba.displayName = "@mantine/core/ComboboxOptions";
const cw = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ya = U((e, t) => {
  const n = j("ComboboxSearch", cw, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = n, f = rt(), p = f.getStyles("search"), m = fa({
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
ya.classes = Oe;
ya.displayName = "@mantine/core/ComboboxSearch";
const lw = {
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
  } = j("ComboboxTarget", lw, e);
  if (!qt(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = rt(), u = fa({
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
cf.displayName = "@mantine/core/ComboboxTarget";
function uw(e, t, n) {
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
function dw(e, t, n) {
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
function fw(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function va({
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
  ), v = Q(
    (R = "unknown") => {
      a && (c(!1), r == null || r(R));
    },
    [c, r, a]
  ), x = Q(
    (R = "unknown") => {
      a ? v(R) : h(R);
    },
    [v, h, a]
  ), y = Q(() => {
    const R = document.querySelector(`#${l.current} [data-combobox-selected]`);
    R == null || R.removeAttribute("data-combobox-selected"), R == null || R.removeAttribute("aria-selected");
  }, []), w = Q(
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
      return w(A);
    }
    return w(0);
  }, [w]), C = Q(
    () => w(
      dw(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), P = Q(
    () => w(
      uw(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), E = Q(
    () => w(
      fw(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
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
  }, []), M = Q((R) => {
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
    closeDropdown: v,
    toggleDropdown: x,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: L,
    selectOption: w,
    selectFirstOption: E,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: P,
    resetSelectedOption: $,
    updateSelectedOptionIndex: N,
    listId: l.current,
    setListId: M,
    clickSelectedOption: T,
    searchRef: d,
    focusSearchInput: _,
    targetRef: f,
    focusTarget: O
  };
}
const pw = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, mw = (e, { size: t, dropdownPadding: n }) => ({
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
  const t = j("Combobox", pw, e), {
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
  } = t, g = va(), h = s || g, v = J({
    name: f || "Combobox",
    classes: Oe,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: mw
  });
  return /* @__PURE__ */ b.createElement(
    Qv,
    {
      value: {
        getStyles: v,
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
const gw = (e) => e;
Z.extend = gw;
Z.classes = Oe;
Z.displayName = "@mantine/core/Combobox";
Z.Target = cf;
Z.Dropdown = ua;
Z.Options = ba;
Z.Option = ha;
Z.Search = ya;
Z.Empty = da;
Z.Chevron = la;
Z.Footer = pa;
Z.Header = ga;
Z.EventsTarget = af;
Z.DropdownTarget = sf;
Z.Group = ma;
Z.ClearButton = of;
var lf = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const hw = lf, uf = ie(
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
    ...v
  }, x) => {
    const y = J({
      name: e,
      props: t,
      className: n,
      style: g,
      classes: lf,
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
        ...v
      },
      /* @__PURE__ */ b.createElement("div", { ...y("body") }, s, /* @__PURE__ */ b.createElement("div", { ...y("labelWrapper"), "data-disabled": u || void 0 }, a && /* @__PURE__ */ b.createElement("label", { ...y("label"), "data-disabled": u || void 0, htmlFor: l }, a), c && /* @__PURE__ */ b.createElement(Se.Description, { size: f, __inheritStyles: !1, ...y("description") }, c), d && d !== "boolean" && /* @__PURE__ */ b.createElement(Se.Error, { size: f, __inheritStyles: !1, ...y("error") }, d)))
    );
  }
);
uf.displayName = "@mantine/core/InlineInput";
const df = Ut(null), bw = df.Provider, yw = () => ft(df);
function vw({ children: e, role: t }) {
  const n = Nn();
  return n ? /* @__PURE__ */ b.createElement("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy }, e) : /* @__PURE__ */ b.createElement(b.Fragment, null, e);
}
const ww = {}, wa = U((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: i, wrapperProps: s, children: a, ...c } = j(
    "CheckboxGroup",
    ww,
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
  return /* @__PURE__ */ b.createElement(bw, { value: { value: l, onChange: d, size: i } }, /* @__PURE__ */ b.createElement(
    Se.Wrapper,
    {
      size: i,
      ref: t,
      ...s,
      ...c,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ b.createElement(vw, { role: "group" }, a)
  ));
});
wa.classes = Se.Wrapper.classes;
wa.displayName = "@mantine/core/CheckboxGroup";
function ff({ size: e, style: t, ...n }) {
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
function xw({ indeterminate: e, ...t }) {
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
  ) : /* @__PURE__ */ b.createElement(ff, { ...t });
}
var pf = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const Sw = {
  labelPosition: "right",
  icon: xw
}, Cw = (e, { radius: t, color: n, size: r, iconColor: o, variant: i }) => {
  const s = So({ color: n || e.primaryColor, theme: e }), a = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": se(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Me(t),
      "--checkbox-color": i === "outline" ? a : vt(n, e),
      "--checkbox-icon-color": o ? vt(o, e) : void 0
    }
  };
}, To = U((e, t) => {
  const n = j("Checkbox", Sw, e), {
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
    labelPosition: v,
    description: x,
    error: y,
    disabled: w,
    variant: S,
    indeterminate: C,
    icon: P,
    rootRef: E,
    iconColor: N,
    onChange: $,
    ...T
  } = n, M = yw(), _ = f || (M == null ? void 0 : M.size), O = P, L = J({
    name: "Checkbox",
    props: n,
    classes: pf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Cw
  }), { styleProps: R, rest: F } = gr(T), A = St(d), H = M ? {
    checked: M.value.includes(F.value),
    onChange: (K) => {
      M.onChange(K), $ == null || $(K);
    }
  } : {};
  return /* @__PURE__ */ b.createElement(
    uf,
    {
      ...L("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: A,
      size: _,
      labelPosition: v,
      label: u,
      description: x,
      error: y,
      disabled: w,
      classNames: r,
      styles: s,
      unstyled: a,
      "data-checked": H.checked || h || void 0,
      variant: S,
      ref: E,
      ...R,
      ...m
    },
    /* @__PURE__ */ b.createElement(V, { ...L("inner"), mod: { "data-label-position": v } }, /* @__PURE__ */ b.createElement(
      V,
      {
        component: "input",
        id: A,
        ref: t,
        checked: h,
        disabled: w,
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
To.classes = { ...pf, ...hw };
To.displayName = "@mantine/core/Checkbox";
To.Group = wa;
function Sn(e) {
  return "group" in e;
}
function mf({
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
      items: mf({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), Sn(s) || s.label.toLowerCase().includes(r) && o.push(s);
  }
  return o;
}
function Ew(e) {
  if (e.length === 0)
    return !0;
  for (const t of e)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function gf(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Sn(n))
        gf(n.items, t);
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
function hf({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!Sn(e)) {
    const s = t && Ti(n, e.value) && /* @__PURE__ */ b.createElement(ff, { className: Oe.optionsDropdownCheckIcon });
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
    hf,
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
function bf({
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
  gf(e);
  const h = typeof o == "string" ? (r || mf)({
    options: e,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : e, v = Ew(h), x = h.map((y) => /* @__PURE__ */ b.createElement(
    hf,
    {
      data: y,
      key: Sn(y) ? y.group : y.value,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ b.createElement(Z.Dropdown, { hidden: t || n && v }, /* @__PURE__ */ b.createElement(Z.Options, { labelledBy: m }, a ? /* @__PURE__ */ b.createElement(
    br.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Oe.optionsDropdownScrollArea
    },
    x
  ) : x, v && f && /* @__PURE__ */ b.createElement(Z.Empty, null, f)));
}
var Lo = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const hl = {
  orientation: "horizontal"
}, Pw = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), xa = U((e, t) => {
  const n = j("ButtonGroup", hl, e), {
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
  } = j("ButtonGroup", hl, e), p = J({
    name: "ButtonGroup",
    props: n,
    classes: Lo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Pw,
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
xa.classes = Lo;
xa.displayName = "@mantine/core/ButtonGroup";
const Dw = {}, Iw = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s }) => {
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
}, Xn = At((e, t) => {
  const n = j("Button", Dw, e), {
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
    classNames: v,
    styles: x,
    unstyled: y,
    "data-disabled": w,
    ...S
  } = n, C = J({
    name: "Button",
    props: n,
    classes: Lo,
    className: i,
    style: r,
    classNames: v,
    styles: x,
    unstyled: y,
    vars: o,
    varsResolver: Iw
  }), P = !!l, E = !!u;
  return /* @__PURE__ */ b.createElement(
    un,
    {
      ref: t,
      ...C("root", { active: !a && !m && !w }),
      unstyled: y,
      variant: f,
      disabled: a || m,
      mod: {
        disabled: a || w,
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
Xn.classes = Lo;
Xn.displayName = "@mantine/core/Button";
Xn.Group = xa;
var yf = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const bl = {
  withShadow: !0
}, Rw = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : Me(t),
    "--cs-size": D(n)
  }
}), Qn = At((e, t) => {
  const n = j("ColorSwatch", bl, e), {
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
  } = j("ColorSwatch", bl, n), h = J({
    name: "ColorSwatch",
    props: n,
    classes: yf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Rw
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
Qn.classes = yf;
Qn.displayName = "@mantine/core/ColorSwatch";
var vf = { root: "m-7485cace" };
const Ow = {}, Aw = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : se(t, "container-size")
  }
}), Sa = U((e, t) => {
  const n = j("Container", Ow, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, ...u } = n, d = J({
    name: "Container",
    classes: vf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Aw
  });
  return /* @__PURE__ */ b.createElement(V, { ref: t, mod: { fluid: l }, ...d("root"), ...u });
});
Sa.classes = vf;
Sa.displayName = "@mantine/core/Container";
function Nw({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = z(-1), i = z(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, c = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return G(() => s, []), { openDropdown: a, closeDropdown: c };
}
const [$w, wf] = Kt(
  "HoverCard component was not found in the tree"
), Tw = {};
function xf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    Tw,
    e
  ), i = wf(), s = Yr(n, i.openDropdown), a = Yr(r, i.closeDropdown);
  return /* @__PURE__ */ b.createElement(mt.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
xf.displayName = "@mantine/core/HoverCardDropdown";
const Lw = {
  refProp: "ref"
}, Sf = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    Lw,
    e
  );
  if (!qt(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = wf(), a = Yr(n.props.onMouseEnter, s.openDropdown), c = Yr(n.props.onMouseLeave, s.closeDropdown), l = { onMouseEnter: a, onMouseLeave: c };
  return /* @__PURE__ */ b.createElement(mt.Target, { refProp: r, ref: t, ...i }, ln(
    n,
    o ? { [o]: l } : l
  ));
});
Sf.displayName = "@mantine/core/HoverCardTarget";
const Mw = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function on(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = j(
    "HoverCard",
    Mw,
    e
  ), [c, { open: l, close: u }] = Oh(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = Nw({ open: l, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ b.createElement($w, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ b.createElement(mt, { ...a, opened: c, __staticSelector: "HoverCard" }, t));
}
on.displayName = "@mantine/core/HoverCard";
on.Target = Sf;
on.Dropdown = xf;
on.extend = (e) => e;
function Cf(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ef = { root: "m-6e45937b", loader: "m-e8eb006c", overlay: "m-df587f17" };
const yl = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: pr("overlay")
}, kw = (e, { zIndex: t }) => ({
  root: {
    "--lo-z-index": t == null ? void 0 : t.toString()
  }
}), Ca = U((e, t) => {
  const n = j("LoadingOverlay", yl, e), {
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
    classes: Ef,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: kw
  }), v = { ...yl.overlayProps, ...d };
  return /* @__PURE__ */ b.createElement(Ro, { transition: "fade", ...l, mounted: !!f }, (x) => /* @__PURE__ */ b.createElement(V, { ...h("root", { style: x }), ref: t, ...m }, /* @__PURE__ */ b.createElement(An, { ...h("loader"), unstyled: a, ...u }), /* @__PURE__ */ b.createElement(
    to,
    {
      ...v,
      ...h("overlay"),
      "data-light": !0,
      unstyled: a,
      color: (d == null ? void 0 : d.color) || g.white
    }
  ), /* @__PURE__ */ b.createElement(
    to,
    {
      ...v,
      ...h("overlay"),
      "data-dark": !0,
      unstyled: a,
      color: (d == null ? void 0 : d.color) || g.colors.dark[5]
    }
  )));
});
Ca.classes = Ef;
Ca.displayName = "@mantine/core/LoadingOverlay";
const [_w, Ea] = Ns(), [Fw, Bw] = Ns();
var Mo = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const jw = {}, zw = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? se(t) : se(n, "pg-gap")
  }
}), Pa = U((e, t) => {
  const n = j("PillGroup", jw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, size: l, disabled: u, ...d } = n, f = Ea(), p = (f == null ? void 0 : f.size) || l || void 0, m = J({
    name: "PillGroup",
    classes: Mo,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: zw,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(Fw, { value: { size: p, disabled: u } }, /* @__PURE__ */ b.createElement(V, { ref: t, size: p, ...m("group"), ...d }));
});
Pa.classes = Mo;
Pa.displayName = "@mantine/core/PillGroup";
const Vw = {
  variant: "default"
}, Ww = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": se(n, "pill-fz"),
    "--pill-height": se(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : Me(t)
  }
}), Zn = U((e, t) => {
  const n = j("Pill", Vw, e), {
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
    ...v
  } = n, x = Bw(), y = Ea(), w = g || (x == null ? void 0 : x.size) || void 0, S = (y == null ? void 0 : y.variant) === "filled" ? "contrast" : l || "default", C = J({
    name: "Pill",
    classes: Mo,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Ww,
    stylesCtx: { size: w }
  });
  return /* @__PURE__ */ b.createElement(
    V,
    {
      component: "span",
      ref: t,
      variant: S,
      size: w,
      ...C("root", { variant: S }),
      mod: { "with-remove": d, disabled: h || (x == null ? void 0 : x.disabled) },
      ...v
    },
    /* @__PURE__ */ b.createElement("span", { ...C("label") }, u),
    d && /* @__PURE__ */ b.createElement(
      vr,
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
Zn.classes = Mo;
Zn.displayName = "@mantine/core/Pill";
Zn.Group = Pa;
var Pf = { field: "m-45c4369d" };
const Gw = {
  type: "visible"
}, Da = U((e, t) => {
  const n = j("PillsInputField", Gw, e), {
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
  } = n, m = Ea(), g = Nn(), h = J({
    name: "PillsInputField",
    classes: Pf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "field"
  }), v = u || (m == null ? void 0 : m.disabled);
  return /* @__PURE__ */ b.createElement(
    V,
    {
      component: "input",
      ref: Ae(t, m == null ? void 0 : m.fieldRef),
      "data-type": l,
      disabled: v,
      mod: { disabled: v, pointer: f },
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
Da.classes = Pf;
Da.displayName = "@mantine/core/PillsInputField";
const Hw = {}, no = U((e, t) => {
  const n = j("PillsInput", Hw, e), {
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
  return /* @__PURE__ */ b.createElement(_w, { value: { fieldRef: f, size: s, disabled: a, hasError: !!l, variant: u } }, /* @__PURE__ */ b.createElement(
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
no.displayName = "@mantine/core/PillsInput";
no.Field = Da;
function Uw({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (Sn(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const qw = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, Un = U((e, t) => {
  const n = j("MultiSelect", qw, e), {
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
    defaultDropdownOpened: v,
    onDropdownOpen: x,
    onDropdownClose: y,
    selectFirstOptionOnChange: w,
    onOptionSubmit: S,
    comboboxProps: C,
    filter: P,
    limit: E,
    withScrollArea: N,
    maxDropdownHeight: $,
    searchValue: T,
    defaultSearchValue: M,
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
    withErrorStyles: Pm,
    name: Dm,
    form: Im,
    id: Rm,
    clearable: Om,
    clearButtonProps: Am,
    hiddenInputProps: Nm,
    placeholder: vc,
    hiddenInputValuesDivider: $m,
    ...Tm
  } = n, bi = St(Rm), yi = rf(g), Er = ca(yi), Fe = va({
    opened: h,
    defaultOpened: v,
    onDropdownOpen: x,
    onDropdownClose: () => {
      y == null || y(), Fe.resetSelectedOption();
    }
  }), {
    styleProps: Lm,
    rest: { type: MI, ...Mm }
  } = gr(Tm), [$e, _n] = Pt({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [Pr, Dr] = Pt({
    value: T,
    defaultValue: M,
    finalValue: "",
    onChange: _
  }), vi = J({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: wc, resolvedStyles: xc } = id({
    props: n,
    styles: s,
    classNames: r
  }), km = (le) => {
    p == null || p(le), le.key === " " && !me && (le.preventDefault(), Fe.toggleDropdown()), le.key === "Backspace" && Pr.length === 0 && $e.length > 0 && _n($e.slice(0, $e.length - 1));
  }, _m = $e.map((le, wi) => {
    var Ec;
    return /* @__PURE__ */ b.createElement(
      Zn,
      {
        key: `${le}-${wi}`,
        withRemoveButton: !O,
        onRemove: () => _n($e.filter((Fm) => le !== Fm)),
        unstyled: a,
        ...vi("pill")
      },
      ((Ec = Er[le]) == null ? void 0 : Ec.label) || le
    );
  });
  G(() => {
    w && Fe.selectFirstOption();
  }, [w, $e]);
  const Sc = Om && $e.length > 0 && !L && !O && /* @__PURE__ */ b.createElement(
    Z.ClearButton,
    {
      size: l,
      ...Am,
      onClear: () => {
        _n([]), Dr("");
      }
    }
  ), Cc = Uw({ data: yi, value: $e });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    Z,
    {
      store: Fe,
      classNames: wc,
      styles: xc,
      unstyled: a,
      size: l,
      readOnly: O,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (le) => {
        S == null || S(le), Dr(""), Fe.updateSelectedOptionIndex("selected"), $e.includes(Er[le].value) ? _n($e.filter((wi) => wi !== Er[le].value)) : $e.length < Pe && _n([...$e, Er[le].value]);
      },
      ...C
    },
    /* @__PURE__ */ b.createElement(Z.DropdownTarget, null, /* @__PURE__ */ b.createElement(
      no,
      {
        ...Lm,
        __staticSelector: "MultiSelect",
        classNames: wc,
        styles: xc,
        unstyled: a,
        size: l,
        className: o,
        style: i,
        variant: m,
        disabled: L,
        radius: H,
        rightSection: K || Sc || /* @__PURE__ */ b.createElement(Z.Chevron, { size: l, error: Ye, unstyled: a }),
        rightSectionPointerEvents: ye || (Sc ? "all" : "none"),
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
        withErrorStyles: Pm,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? Fe.openDropdown() : Fe.toggleDropdown(),
        "data-expanded": Fe.dropdownOpened || void 0,
        id: bi
      },
      /* @__PURE__ */ b.createElement(Zn.Group, { disabled: L, unstyled: a, ...vi("pillsList") }, _m, /* @__PURE__ */ b.createElement(Z.EventsTarget, null, /* @__PURE__ */ b.createElement(
        no.Field,
        {
          ...Mm,
          ref: t,
          id: bi,
          placeholder: vc,
          type: !me && !vc ? "hidden" : "visible",
          ...vi("inputField"),
          unstyled: a,
          onFocus: (le) => {
            R == null || R(le), me && Fe.openDropdown();
          },
          onBlur: (le) => {
            F == null || F(le), Fe.closeDropdown(), me && Fe.closeDropdown(), Dr("");
          },
          onKeyDown: km,
          value: Pr,
          onChange: (le) => {
            Dr(le.currentTarget.value), me && Fe.openDropdown(), w && Fe.selectFirstOption();
          },
          disabled: L,
          readOnly: O || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ b.createElement(
      bf,
      {
        data: Lt ? Cc : yi,
        hidden: O || L,
        filter: P,
        search: Pr,
        limit: E,
        hiddenWhenEmpty: !me || !Tt || Lt && Cc.length === 0 && Pr.trim().length === 0,
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
      name: Dm,
      value: $e.join($m),
      form: Im,
      disabled: L,
      ...Nm
    }
  ));
});
Un.classes = { ...Yt.classes, ...Z.classes };
Un.displayName = "@mantine/core/MultiSelect";
const Kw = {
  duration: 100,
  transition: "fade"
};
function Yw(e, t) {
  return { ...Kw, ...t, ...e };
}
function Jw({
  offset: e,
  position: t
}) {
  const [n, r] = q(!1), o = z(), { x: i, y: s, elements: a, refs: c, update: l, placement: u } = Js({
    placement: t,
    middleware: [
      Hs({
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
var ko = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const Xw = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: pr("popover")
}, Qw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Me(t),
    "--tooltip-bg": n ? vt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Ia = U((e, t) => {
  const n = j("TooltipFloating", Xw, e), {
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
    zIndex: v,
    disabled: x,
    variant: y,
    vars: w,
    portalProps: S,
    ...C
  } = n, P = pt(), E = J({
    name: "TooltipFloating",
    props: n,
    classes: ko,
    className: a,
    style: s,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: w,
    varsResolver: Qw
  }), { handleMouseMove: N, x: $, y: T, opened: M, boundaryRef: _, floating: O, setOpened: L } = Jw({
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
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Io, { ...S, withinPortal: i }, /* @__PURE__ */ b.createElement(
    V,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ...ks(s, P),
          zIndex: v,
          display: !x && M ? "block" : "none",
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
Ia.classes = ko;
Ia.displayName = "@mantine/core/TooltipFloating";
const Df = Ut(!1), Zw = Df.Provider, e0 = () => ft(Df), t0 = {
  openDelay: 0,
  closeDelay: 0
};
function If(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", t0, e);
  return /* @__PURE__ */ b.createElement(Zw, { value: !0 }, /* @__PURE__ */ b.createElement(Fy, { delay: { open: t, close: n } }, r));
}
If.displayName = "@mantine/core/TooltipGroup";
function n0(e) {
  var C, P, E;
  const [t, n] = q(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = e0(), s = St(), { delay: a, currentId: c, setCurrentId: l } = jd(), u = Q(
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
    middlewareData: { arrow: { x: v, y: x } = {} }
  } = Js({
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      Ed(e.offset),
      Hs({ padding: 8 }),
      xd(),
      $d({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [Cd()] : []
    ]
  }), { getReferenceProps: y, getFloatingProps: w } = Yy([
    _y(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((P = e.events) != null && P.touch)
    }),
    Ky(p, { enabled: (E = e.events) == null ? void 0 : E.focus, keyboardOnly: !0 }),
    Jy(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    qy(p, { enabled: typeof e.opened > "u" }),
    By(p, { id: s })
  ]);
  qd({
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
    arrowX: v,
    arrowY: x,
    reference: m.setReference,
    floating: m.setFloating,
    getFloatingProps: w,
    getReferenceProps: y,
    isGroupPhase: S,
    opened: o,
    placement: h
  };
}
const vl = {
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
  zIndex: pr("popover"),
  positionDependencies: []
}, r0 = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Me(t),
    "--tooltip-bg": n ? vt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Cn = U((e, t) => {
  const n = j("Tooltip", vl, e), {
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
    style: v,
    className: x,
    withArrow: y,
    arrowSize: w,
    arrowOffset: S,
    arrowRadius: C,
    arrowPosition: P,
    offset: E,
    transitionProps: N,
    multiline: $,
    events: T,
    zIndex: M,
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
  } = j("Tooltip", vl, n), { dir: Ne } = hr(), ve = z(null), re = n0({
    position: zd(Ne, o),
    closeDelay: c,
    openDelay: a,
    onPositionChange: l,
    opened: u,
    events: T,
    arrowRef: ve,
    arrowOffset: S,
    offset: typeof E == "number" ? E + (y ? w / 2 : 0) : E,
    positionDependencies: [...O, r],
    inline: A
  }), we = J({
    name: "Tooltip",
    props: n,
    classes: ko,
    className: x,
    style: v,
    classNames: m,
    styles: g,
    unstyled: h,
    rootSelector: "tooltip",
    vars: ne,
    varsResolver: r0
  });
  if (!qt(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const ke = Ae(re.reference, r.ref, t), Ce = Yw(N, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Io, { ...ye, withinPortal: d }, /* @__PURE__ */ b.createElement(
    Ro,
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
            zIndex: M,
            top: re.y ?? 0,
            left: re.x ?? 0
          }
        })
      },
      s,
      /* @__PURE__ */ b.createElement(
        Xs,
        {
          ref: ve,
          arrowX: re.arrowX,
          arrowY: re.arrowY,
          visible: y,
          position: re.placement,
          arrowSize: w,
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
Cn.classes = ko;
Cn.displayName = "@mantine/core/Tooltip";
Cn.Floating = Ia;
Cn.Group = If;
const o0 = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Ra = U((e, t) => {
  const n = j("Select", o0, e), {
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
    defaultValue: v,
    selectFirstOptionOnChange: x,
    onOptionSubmit: y,
    comboboxProps: w,
    readOnly: S,
    disabled: C,
    filter: P,
    limit: E,
    withScrollArea: N,
    maxDropdownHeight: $,
    size: T,
    searchable: M,
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
  } = n, Ee = kt(() => rf(g), [g]), _e = kt(() => ca(Ee), [Ee]), ce = St(ve), [X, fn] = Pt({
    value: h,
    defaultValue: v,
    finalValue: null,
    onChange: m
  }), Ke = typeof X == "string" ? _e[X] : void 0, [$t, Ye] = Pt({
    value: H,
    defaultValue: K,
    finalValue: Ke ? Ke.label : "",
    onChange: ne
  }), Pe = va({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: Tt } = id({
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
      ...w
    },
    /* @__PURE__ */ b.createElement(Z.Target, { targetType: M ? "input" : "button" }, /* @__PURE__ */ b.createElement(
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
        readOnly: S || !M,
        value: $t,
        onChange: (ae) => {
          Ye(ae.currentTarget.value), Pe.openDropdown(), x && Pe.selectFirstOption();
        },
        onFocus: (ae) => {
          M && Pe.openDropdown(), d == null || d(ae);
        },
        onBlur: (ae) => {
          var Lt;
          M && Pe.closeDropdown(), Ye(X != null && ((Lt = _e[X]) == null ? void 0 : Lt.label) || ""), f == null || f(ae);
        },
        onClick: (ae) => {
          M ? Pe.openDropdown() : Pe.toggleDropdown(), p == null || p(ae);
        },
        classNames: me,
        styles: Tt,
        unstyled: i,
        pointer: !M,
        error: ue
      }
    )),
    /* @__PURE__ */ b.createElement(
      bf,
      {
        data: Ee,
        hidden: S || C,
        filter: P,
        search: $t,
        limit: E,
        hiddenWhenEmpty: !M || !R,
        withScrollArea: N,
        maxDropdownHeight: $,
        filterOptions: M && (Ke == null ? void 0 : Ke.label) !== $t,
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
Ra.classes = { ...Yt.classes, ...Z.classes };
Ra.displayName = "@mantine/core/Select";
const i0 = {}, er = U((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", i0, e);
  return /* @__PURE__ */ b.createElement(V, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
er.displayName = "@mantine/core/Space";
const [s0, Oa] = Kt(
  "Tabs component was not found in the tree"
);
var xr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const a0 = {}, Aa = U((e, t) => {
  const n = j("TabsList", a0, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: c, style: l, ...u } = n, d = Oa();
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
Aa.classes = xr;
Aa.displayName = "@mantine/core/TabsList";
const c0 = {}, Na = U((e, t) => {
  const n = j("TabsPanel", c0, e), { children: r, className: o, value: i, classNames: s, styles: a, style: c, ...l } = n, u = Oa(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
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
Na.classes = xr;
Na.displayName = "@mantine/core/TabsPanel";
const l0 = {}, $a = U((e, t) => {
  const n = j("TabsTab", l0, e), {
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
  } = n, v = pt(), { dir: x } = hr(), y = Oa(), w = a === y.value, S = (P) => {
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
        active: w,
        disabled: u,
        orientation: y.orientation,
        inverted: y.inverted,
        placement: y.orientation === "vertical" && y.placement
      },
      ref: t,
      role: "tab",
      id: y.getTabId(a),
      "aria-selected": w,
      tabIndex: w || y.value === null ? 0 : -1,
      "aria-controls": y.getPanelId(a),
      onClick: S,
      __vars: { "--tabs-color": d ? vt(d, v) : void 0 },
      onKeyDown: Wu({
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
$a.classes = xr;
$a.displayName = "@mantine/core/TabsTab";
const wl = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", u0 = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, d0 = (e, { radius: t, color: n }) => ({
  root: {
    "--tabs-radius": Me(t),
    "--tabs-color": vt(n, e)
  }
}), at = U((e, t) => {
  const n = j("Tabs", u0, e), {
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
    keepMounted: v,
    classNames: x,
    styles: y,
    unstyled: w,
    className: S,
    style: C,
    vars: P,
    ...E
  } = n, N = St(l), [$, T] = Pt({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), M = J({
    name: "Tabs",
    props: n,
    classes: xr,
    className: S,
    style: C,
    classNames: x,
    styles: y,
    unstyled: w,
    vars: P,
    varsResolver: d0
  });
  return /* @__PURE__ */ b.createElement(
    s0,
    {
      value: {
        placement: h,
        value: $,
        orientation: s,
        id: N,
        loop: c,
        activateTabWithKeyboard: u,
        getTabId: Kr(`${N}-tab`, wl),
        getPanelId: Kr(`${N}-panel`, wl),
        onChange: T,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: v,
        unstyled: w,
        getStyles: M
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
        ...M("root"),
        ...E
      },
      a
    )
  );
});
at.classes = xr;
at.displayName = "@mantine/core/Tabs";
at.Tab = $a;
at.Panel = Na;
at.List = Aa;
const f0 = {}, Ta = U((e, t) => {
  const n = j("TextInput", f0, e);
  return /* @__PURE__ */ b.createElement(Yt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
Ta.classes = Yt.classes;
Ta.displayName = "@mantine/core/TextInput";
const p0 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function m0(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return p0.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: D(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var Rf = { root: "m-8a5d1357" };
const g0 = {
  order: 1
}, h0 = (e, { order: t, size: n, lineClamp: r }) => {
  const o = m0(t, n);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0
    }
  };
}, $n = U((e, t) => {
  const n = j("Title", g0, e), {
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
    classes: Rf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: h0
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
$n.classes = Rf;
$n.displayName = "@mantine/core/Title";
const b0 = {
  /** Put your mantine theme override here */
}, y0 = "production";
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var v0 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), xl = v0, Li = () => Math.random().toString(36).substring(7).split("").join("."), w0 = {
  INIT: `@@redux/INIT${Li()}`,
  REPLACE: `@@redux/REPLACE${Li()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Li()}`
}, ro = w0;
function La(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Of(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(Of)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, c = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((h, v) => {
      s.set(v, h);
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
    let v = !0;
    l();
    const x = a++;
    return s.set(x, h), function() {
      if (v) {
        if (c)
          throw new Error(ge(6));
        v = !1, l(), s.delete(x), i = null;
      }
    };
  }
  function f(h) {
    if (!La(h))
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
      type: ro.REPLACE
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
      subscribe(v) {
        if (typeof v != "object" || v === null)
          throw new Error(ge(11));
        function x() {
          const w = v;
          w.next && w.next(u());
        }
        return x(), {
          unsubscribe: h(x)
        };
      },
      [xl]() {
        return this;
      }
    };
  }
  return f({
    type: ro.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [xl]: m
  };
}
function x0(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: ro.INIT
    }) > "u")
      throw new Error(ge(12));
    if (typeof n(void 0, {
      type: ro.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ge(13));
  });
}
function S0(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    x0(n);
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
function oo(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function C0(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ge(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(s));
    return i = oo(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function E0(e) {
  return La(e) && "type" in e && typeof e.type == "string";
}
var Af = Symbol.for("immer-nothing"), Sl = Symbol.for("immer-draftable"), He = Symbol.for("immer-state");
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
  return e ? Nf(e) || Array.isArray(e) || !!e[Sl] || !!((t = e.constructor) != null && t[Sl]) || Fo(e) || Bo(e) : !1;
}
var P0 = Object.prototype.constructor.toString();
function Nf(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = En(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === P0;
}
function tr(e, t) {
  _o(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function _o(e) {
  const t = e[He];
  return t ? t.type_ : Array.isArray(e) ? 1 : Fo(e) ? 2 : Bo(e) ? 3 : 0;
}
function us(e, t) {
  return _o(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function $f(e, t, n) {
  const r = _o(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function D0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Fo(e) {
  return e instanceof Map;
}
function Bo(e) {
  return e instanceof Set;
}
function Zt(e) {
  return e.copy_ || e.base_;
}
function ds(e, t) {
  if (Fo(e))
    return new Map(e);
  if (Bo(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Nf(e))
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
function Ma(e, t = !1) {
  return jo(e) || Gt(e) || !Rt(e) || (_o(e) > 1 && (e.set = e.add = e.clear = e.delete = I0), Object.freeze(e), t && tr(e, (n, r) => Ma(r, !0))), e;
}
function I0() {
  it(2);
}
function jo(e) {
  return Object.isFrozen(e);
}
var R0 = {};
function an(e) {
  const t = R0[e];
  return t || it(0, e), t;
}
var nr;
function Tf() {
  return nr;
}
function O0(e, t) {
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
function Cl(e, t) {
  t && (an("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function fs(e) {
  ps(e), e.drafts_.forEach(A0), e.drafts_ = null;
}
function ps(e) {
  e === nr && (nr = e.parent_);
}
function El(e) {
  return nr = O0(nr, e);
}
function A0(e) {
  const t = e[He];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Pl(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[He].modified_ && (fs(t), it(4)), Rt(e) && (e = io(t, e), t.parent_ || so(t, e)), t.patches_ && an("Patches").generateReplacementPatches_(
    n[He].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = io(t, n, []), fs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Af ? e : void 0;
}
function io(e, t, n) {
  if (jo(t))
    return t;
  const r = t[He];
  if (!r)
    return tr(
      t,
      (o, i) => Dl(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return so(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), tr(
      i,
      (a, c) => Dl(e, r, o, a, c, n, s)
    ), so(e, o, !1), n && e.patches_ && an("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Dl(e, t, n, r, o, i, s) {
  if (Gt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !us(t.assigned_, r) ? i.concat(r) : void 0, c = io(e, o, a);
    if ($f(n, r, c), Gt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (Rt(o) && !jo(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    io(e, o), (!t || !t.scope_.parent_) && so(e, o);
  }
}
function so(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ma(t, n);
}
function N0(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Tf(),
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
  let o = r, i = ka;
  n && (o = [r], i = rr);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var ka = {
  get(e, t) {
    if (t === He)
      return e;
    const n = Zt(e);
    if (!us(n, t))
      return $0(e, n, t);
    const r = n[t];
    return e.finalized_ || !Rt(r) ? r : r === Mi(e.base_, t) ? (ki(e), e.copy_[t] = gs(r, e)) : r;
  },
  has(e, t) {
    return t in Zt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Zt(e));
  },
  set(e, t, n) {
    const r = Lf(Zt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Mi(Zt(e), t), i = o == null ? void 0 : o[He];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (D0(n, o) && (n !== void 0 || us(e.base_, t)))
        return !0;
      ki(e), ms(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Mi(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ki(e), ms(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
}, rr = {};
tr(ka, (e, t) => {
  rr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
rr.deleteProperty = function(e, t) {
  return rr.set.call(this, e, t, void 0);
};
rr.set = function(e, t, n) {
  return ka.set.call(this, e[0], t, n, e[0]);
};
function Mi(e, t) {
  const n = e[He];
  return (n ? Zt(n) : e)[t];
}
function $0(e, t, n) {
  var o;
  const r = Lf(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Lf(e, t) {
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
function ms(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ms(e.parent_));
}
function ki(e) {
  e.copy_ || (e.copy_ = ds(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var T0 = class {
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
        const i = El(this), s = gs(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? fs(i) : ps(i);
        }
        return Cl(i, r), Pl(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Af && (o = void 0), this.autoFreeze_ && Ma(o, !0), r) {
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
    Rt(e) || it(8), Gt(e) && (e = Mf(e));
    const t = El(this), n = gs(e, void 0);
    return n[He].isManual_ = !0, ps(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[He];
    (!n || !n.isManual_) && it(9);
    const { scope_: r } = n;
    return Cl(r, t), Pl(void 0, r);
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
function gs(e, t) {
  const n = Fo(e) ? an("MapSet").proxyMap_(e, t) : Bo(e) ? an("MapSet").proxySet_(e, t) : N0(e, t);
  return (t ? t.scope_ : Tf()).drafts_.push(n), n;
}
function Mf(e) {
  return Gt(e) || it(10, e), kf(e);
}
function kf(e) {
  if (!Rt(e) || jo(e))
    return e;
  const t = e[He];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = ds(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = ds(e, !0);
  return tr(n, (r, o) => {
    $f(n, r, kf(o));
  }), t && (t.finalized_ = !1), n;
}
var Ue = new T0(), _f = Ue.produce;
Ue.produceWithPatches.bind(
  Ue
);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
Ue.applyPatches.bind(Ue);
Ue.createDraft.bind(Ue);
Ue.finishDraft.bind(Ue);
function L0(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function M0(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function k0(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Il = (e) => Array.isArray(e) ? e : [e];
function _0(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return k0(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function F0(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var B0 = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, j0 = typeof WeakRef < "u" ? WeakRef : B0, z0 = 0, Rl = 1;
function Nr() {
  return {
    s: z0,
    v: void 0,
    o: null,
    p: null
  };
}
function _a(e, t = {}) {
  let n = Nr();
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
        h === void 0 ? (a = Nr(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = Nr(), g.set(m, a)) : a = h;
      }
    }
    const l = a;
    let u;
    if (a.s === Rl ? u = a.v : (u = e.apply(null, arguments), i++), l.s = Rl, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new j0(u) : u;
    }
    return l.v = u, u;
  }
  return s.clearCache = () => {
    n = Nr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Ff(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), L0(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...n,
      ...c
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = _a,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = Il(f), v = Il(m), x = _0(o), y = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h), w = p(function() {
      s++;
      const C = F0(
        x,
        arguments
      );
      return a = y.apply(null, C), a;
    }, ...v);
    return Object.assign(w, {
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
var Tn = /* @__PURE__ */ Ff(_a), V0 = Object.assign(
  (e, t = Tn) => {
    M0(
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
  { withTypes: () => V0 }
);
function Bf(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var W0 = Bf(), G0 = Bf, H0 = (...e) => {
  const t = Ff(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(Gt(s) ? Mf(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
H0(_a);
var U0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? oo : oo.apply(null, arguments);
}, q0 = (e) => e && typeof e.match == "function";
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => E0(r) && r.type === e, n;
}
var jf = class Hn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Hn.prototype);
  }
  static get [Symbol.species]() {
    return Hn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Hn(...t[0].concat(this)) : new Hn(...t.concat(this));
  }
};
function Ol(e) {
  return Rt(e) ? _f(e, () => {
  }) : e;
}
function Al(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Le(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function K0(e) {
  return typeof e == "boolean";
}
var Y0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new jf();
  return n && (K0(n) ? s.push(W0) : s.push(G0(n.extraArgument))), s;
}, J0 = "RTK_autoBatch", zf = (e) => (t) => {
  setTimeout(t, e);
}, X0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : zf(10), Q0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? X0 : e.type === "callback" ? e.queueNotification : zf(e.timeout), l = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[J0]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Z0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new jf(e);
  return r && o.push(Q0(typeof r == "object" ? r : void 0)), o;
}, ex = !0;
function tx(e) {
  const t = Y0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (La(n))
    a = S0(n);
  else
    throw new Error(Le(1));
  let c;
  typeof r == "function" ? c = r(t) : c = t();
  let l = oo;
  o && (l = U0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !ex,
    ...typeof o == "object" && o
  }));
  const u = C0(...c), d = Z0(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = l(...f);
  return Of(a, i, p);
}
function Vf(e) {
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
function nx(e) {
  return typeof e == "function";
}
function rx(e, t) {
  let [n, r, o] = Vf(t), i;
  if (nx(e))
    i = () => Ol(e());
  else {
    const a = Ol(e);
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
            return _f(u, (f) => d(f, c));
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
var ox = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Wf = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += ox[Math.random() * 64 | 0];
  return t;
}, ix = (e, t) => q0(e) ? e.match(t) : e(t);
function sx(...e) {
  return (t) => e.some((n) => ix(n, t));
}
var ax = ["name", "message", "stack", "code"], _i = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Nl = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, cx = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of ax)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, zo = /* @__PURE__ */ (() => {
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
      error: (r && r.serializeError || cx)(c || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(c) : Wf(), p = new AbortController();
        let m, g;
        function h(x) {
          g = x, p.abort();
        }
        const v = async function() {
          var w, S;
          let x;
          try {
            let C = (w = r == null ? void 0 : r.condition) == null ? void 0 : w.call(r, c, {
              getState: u,
              extra: d
            });
            if (ux(C) && (C = await C), C === !1 || p.signal.aborted)
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
              fulfillWithValue: (E, N) => new Nl(E, N)
            })).then((E) => {
              if (E instanceof _i)
                throw E;
              return E instanceof Nl ? o(E.payload, f, c, E.meta) : o(E, f, c);
            })]);
          } catch (C) {
            x = C instanceof _i ? s(null, f, c, C.payload, C.meta) : s(C, f, c);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(x) && x.meta.condition || l(x), x;
        }();
        return Object.assign(v, {
          abort: h,
          requestId: f,
          arg: c,
          unwrap() {
            return v.then(lx);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: sx(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function lx(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function ux(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var dx = Symbol.for("rtk-slice-createasyncthunk");
function fx(e, t) {
  return `${e}/${t}`;
}
function px({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[dx];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Le(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(gx()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(y, w) {
        const S = typeof y == "string" ? y : y.type;
        if (!S)
          throw new Error(Le(12));
        if (S in l.sliceCaseReducersByType)
          throw new Error(Le(13));
        return l.sliceCaseReducersByType[S] = w, u;
      },
      addMatcher(y, w) {
        return l.sliceMatchers.push({
          matcher: y,
          reducer: w
        }), u;
      },
      exposeAction(y, w) {
        return l.actionCreators[y] = w, u;
      },
      exposeCaseReducer(y, w) {
        return l.sliceCaseReducersByName[y] = w, u;
      }
    };
    c.forEach((y) => {
      const w = a[y], S = {
        reducerName: y,
        type: fx(i, y),
        createNotation: typeof o.reducers == "function"
      };
      bx(w) ? vx(S, w, u, t) : hx(S, w, u);
    });
    function d() {
      const [y = {}, w = [], S = void 0] = typeof o.extraReducers == "function" ? Vf(o.extraReducers) : [o.extraReducers], C = {
        ...y,
        ...l.sliceCaseReducersByType
      };
      return rx(o.initialState, (P) => {
        for (let E in C)
          P.addCase(E, C[E]);
        for (let E of l.sliceMatchers)
          P.addMatcher(E.matcher, E.reducer);
        for (let E of w)
          P.addMatcher(E.matcher, E.reducer);
        S && P.addDefaultCase(S);
      });
    }
    const f = (y) => y, p = /* @__PURE__ */ new Map();
    let m;
    function g(y, w) {
      return m || (m = d()), m(y, w);
    }
    function h() {
      return m || (m = d()), m.getInitialState();
    }
    function v(y, w = !1) {
      function S(P) {
        let E = P[y];
        return typeof E > "u" && w && (E = h()), E;
      }
      function C(P = f) {
        const E = Al(p, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Al(E, P, {
          insert: () => {
            const N = {};
            for (const [$, T] of Object.entries(o.selectors ?? {}))
              N[$] = mx(T, P, h, w);
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
      ...v(s),
      injectInto(y, {
        reducerPath: w,
        ...S
      } = {}) {
        const C = w ?? s;
        return y.inject({
          reducerPath: C,
          reducer: g
        }, S), {
          ...x,
          ...v(C, !0)
        };
      }
    };
    return x;
  };
}
function mx(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var Fa = px();
function gx() {
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
function hx({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !yx(r))
      throw new Error(Le(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? yt(e, s) : yt(e));
}
function bx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function yx(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function vx({
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
    fulfilled: s || $r,
    pending: a || $r,
    rejected: c || $r,
    settled: l || $r
  });
}
function $r() {
}
var wx = (e, t) => {
  if (typeof e != "function")
    throw new Error(Le(32));
}, Ba = "listenerMiddleware", xx = (e) => {
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
  return wx(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, Sx = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = xx(e);
  return {
    id: Wf(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Le(22));
    }
  };
}, {
  withTypes: () => Sx
}), Cx = Object.assign(yt(`${Ba}/add`), {
  withTypes: () => Cx
});
yt(`${Ba}/removeAll`);
var Ex = Object.assign(yt(`${Ba}/remove`), {
  withTypes: () => Ex
});
function Le(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class Px {
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
        const v = m ? await g[m]().then((x) => (h.ok ? h.data = x : h.error = x, h)).catch((x) => (h.error = x, h)) : h;
        if (c && this.abortControllers.delete(c), !g.ok)
          throw v;
        return v;
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
class Dx extends Px {
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
class ja extends Dx {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const Ix = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, Rx = {
  bsddApiEnvironment: y0,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: !1
}, $l = (e, t) => {
  e.language = t.payload, be.changeLanguage(t.payload);
}, za = yt("settings/setSettings"), Gf = Fa({
  name: "settings",
  initialState: Rx,
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
    setLanguage: $l,
    setIncludeTestDictionaries: (e, t) => {
      e.includeTestDictionaries = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(
      za,
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
        JSON.stringify(t.bsddApiEnvironment) !== JSON.stringify(n) && (t.bsddApiEnvironment = n), JSON.stringify(t.mainDictionary) !== JSON.stringify(r) && (t.mainDictionary = r), JSON.stringify(t.ifcDictionary) !== JSON.stringify(o) && (t.ifcDictionary = o), JSON.stringify(t.filterDictionaries) !== JSON.stringify(i) && (t.filterDictionaries = i), JSON.stringify(t.language) !== JSON.stringify(s) && $l(t, { payload: s, type: "setLanguage" }), JSON.stringify(t.includeTestDictionaries) !== JSON.stringify(a) && (t.includeTestDictionaries = a);
      }
    );
  }
}), Hf = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? Ix[t] : null;
}, Uf = Tn(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.ifcDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t, n) => {
    const r = [e, t, ...n].filter(Boolean), o = new Map(r.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
);
Tn(
  Uf,
  (e) => e.map((t) => t.ifcClassification.location)
);
const Ox = (e) => e.settings.mainDictionary, Ax = (e) => e.settings.includeTestDictionaries;
Gf.actions;
const Nx = Gf.reducer, hs = 500, $x = 500;
let nn = null, zr = {};
const Tl = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, Tx = (e) => {
  const t = Hf(e);
  return t && (!nn || nn.baseUrl !== t) && (nn = new ja(t)), nn;
}, bs = zo("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (console.log("fetchDictionaries", e), !e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new ja(e), o = $x;
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
async function Ll(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: hs,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const qf = zo(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (zr[e])
      return await zr[e];
    const o = (async () => {
      const i = Tx(t());
      if (!i)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let a = 0;
      const c = await Ll(i, e, a), l = c.classesTotalCount;
      if (l == null)
        throw new Error("Total count is null or undefined");
      s.push(...c.classes ?? []);
      const u = [];
      for (a = hs; a < l; a += hs)
        u.push(
          Ll(i, e, a).then((d) => {
            s.push(...d.classes ?? []);
          })
        );
      return await Promise.all(u), n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: s } }), s;
    })();
    return zr[e] = o, o;
  }
), Kf = Fa({
  name: "bsdd",
  initialState: Tl,
  reducers: {
    resetState: () => Tl,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(bs.pending, (t) => {
      t.loaded = !1;
    }).addCase(bs.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(qf.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
zo("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
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
const Yf = (e, t) => e.bsdd.dictionaries[t], Lx = (e, t) => e.bsdd.dictionaryClasses[t], Jf = (e) => e.bsdd.dictionaries, Mx = (e) => e.bsdd.loaded, { resetState: kx } = Kf.actions;
function _x(e) {
  return (t) => {
    nn = new ja(e), zr = {}, t(kx());
  };
}
const Fx = Kf.reducer;
function Va(e) {
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
const Bx = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = Lx(t, e.location);
  if (r)
    return r;
  const o = await n(qf(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function jx(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function hn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function zx(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return hn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await Bx(e.referencedSource, n, t);
  if (!r)
    return hn("Failed to fetch classes for the referencedSource location", e);
  const o = jx(e, r);
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
  const l = Yf(n, c.referencedSource.location);
  return l ? (c.referencedSource = Va(l), {
    ifcClassificationReference: c,
    validationState: "fixed",
    message: null
  }) : hn("Failed to find a matching dictionary for the matched class", c);
}
function Ml(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = Yf(e, t.ifcClassification.location), r = Va(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Wa = wg, ct = ug, Vx = {
  ifcEntities: null
}, Xf = Fa({
  name: "ifcData",
  initialState: Vx,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), Wx = (e) => e.ifcData.ifcEntities, { setIfcData: Gx } = Xf.actions;
function Hx(e) {
  return e.endsWith("Type") ? e.slice(0, -4) : e;
}
function Ux(e, t) {
  return (e ?? "") + (t ?? "");
}
function qx(e, t) {
  return {
    type: "IfcClassificationReference",
    identification: Ux(e.type, e.predefinedType),
    referencedSource: t
  };
}
async function Kx(e, t, n) {
  return (await Promise.all(
    e.map(async (o) => {
      if (o.type === "IfcClassificationReference") {
        const { ifcClassificationReference: i, validationState: s, message: a } = await zx(
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
const Yx = zo(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        var c;
        i.type && (i.type = Hx(i.type));
        const s = [
          ...i.hasAssociations || [],
          qx(i, (c = r.settings.ifcDictionary) == null ? void 0 : c.ifcClassification)
        ], a = await Kx(s, t, r);
        return { ...i, hasAssociations: a };
      })
    );
    t(Gx(o));
  }
), Jx = Xf.reducer;
var Qf = { exports: {} }, Xx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Qx = Xx, Zx = Qx;
function Zf() {
}
function ep() {
}
ep.resetWarningCache = Zf;
var eS = function() {
  function e(r, o, i, s, a, c) {
    if (c !== Zx) {
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
    checkPropTypes: ep,
    resetWarningCache: Zf
  };
  return n.PropTypes = n, n;
};
Qf.exports = eS();
var tS = Qf.exports;
const Xt = /* @__PURE__ */ Ou(tS);
var nS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, rS = Object.defineProperty, oS = Object.defineProperties, iS = Object.getOwnPropertyDescriptors, ao = Object.getOwnPropertySymbols, tp = Object.prototype.hasOwnProperty, np = Object.prototype.propertyIsEnumerable, kl = (e, t, n) => t in e ? rS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _l = (e, t) => {
  for (var n in t || (t = {}))
    tp.call(t, n) && kl(e, n, t[n]);
  if (ao)
    for (var n of ao(t))
      np.call(t, n) && kl(e, n, t[n]);
  return e;
}, sS = (e, t) => oS(e, iS(t)), aS = (e, t) => {
  var n = {};
  for (var r in e)
    tp.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ao)
    for (var r of ao(e))
      t.indexOf(r) < 0 && np.call(e, r) && (n[r] = e[r]);
  return n;
}, Vo = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = aS(s, ["color", "size", "stroke", "children"]);
      return Pc(
        "svg",
        _l(sS(_l({
          ref: i
        }, nS), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => Pc(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Xt.string,
    size: Xt.oneOfType([Xt.string, Xt.number]),
    stroke: Xt.oneOfType([Xt.string, Xt.number])
  }, r.displayName = `${t}`, r;
}, cS = Vo("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), lS = Vo("info-circle", "IconInfoCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 9h.01", key: "svg-1" }],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), uS = Vo("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), dS = Vo("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
const ys = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
function fS(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function pS(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function mS(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return fS(i) && pS(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function gS({ item: e, index: t, setCardColor: n }) {
  var m;
  const { t: r } = Ot(), o = ct(Uf), i = ct(Ox), [s, a] = q("grey"), [c, l] = q([]), [u, d] = q([]);
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
      o.map((g) => mS(e, g))
    );
  }, [e, o]);
  function f(g) {
    var v;
    console.log("Open bsddSearch", g);
    const h = JSON.stringify(g);
    (v = window == null ? void 0 : window.bsddBridge) == null || v.bsddSearch(h);
  }
  function p(g) {
    var v;
    const h = JSON.stringify(g);
    (v = window == null ? void 0 : window.bsddBridge) == null || v.bsddSelect(h);
  }
  return /* @__PURE__ */ k.jsxs(xn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ k.jsx(Qn, { size: "1.5em", color: ys[s] }),
    /* @__PURE__ */ k.jsxs(on, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ k.jsx(on.Target, { children: /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Qe, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ k.jsxs(on.Dropdown, { children: [
        /* @__PURE__ */ k.jsxs(Qe, { children: [
          r("dictionaryValidationSummaryLabel"),
          ":"
        ] }),
        o.map((g, h) => {
          const v = g.ifcClassification.location || h;
          return /* @__PURE__ */ k.jsxs(xn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
            /* @__PURE__ */ k.jsx(Qn, { size: "1em", color: ys[u[h]] }),
            /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Qe, { className: "truncate", children: g.ifcClassification.name }) })
          ] }, v);
        })
      ] })
    ] }),
    /* @__PURE__ */ k.jsx(Cn, { label: r("attachToType"), children: /* @__PURE__ */ k.jsx(
      Jn,
      {
        radius: "xl",
        onClick: () => f(e),
        disabled: !((m = i == null ? void 0 : i.ifcClassification) != null && m.location),
        children: /* @__PURE__ */ k.jsx(uS, { size: 20 })
      }
    ) }),
    /* @__PURE__ */ k.jsx(Cn, { label: r("selectObjects"), children: /* @__PURE__ */ k.jsx(Jn, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ k.jsx(dS, { size: 20 }) }) })
  ] });
}
function hS({ category: e, items: t, index: n }) {
  const { t: r } = Ot(), [o, i] = q("grey"), [s, a] = q(new Array(t.length).fill("grey")), c = Q((l, u) => {
    a((d) => {
      const f = [...d];
      return f[l] = u, f;
    });
  }, []);
  return G(() => {
    s.includes("orange") || s.includes("red") && s.includes("green") ? i("orange") : s.every((l) => l === "red") ? i("red") : s.every((l) => l === "green") && i("green");
  }, [s]), /* @__PURE__ */ k.jsxs(oe.Item, { value: n, children: [
    /* @__PURE__ */ k.jsx(oe.Control, { children: /* @__PURE__ */ k.jsxs(xn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ k.jsx(Qn, { size: "1.5em", color: ys[o], children: /* @__PURE__ */ k.jsx(Qe, { size: "xs", c: "white", children: t.length }) }),
      /* @__PURE__ */ k.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ k.jsx(Qe, { className: "truncate", children: e.length > 0 ? e : r("noDescription") }) })
    ] }) }),
    /* @__PURE__ */ k.jsx(oe.Panel, { mt: "-xs", pl: "xl", children: t.map((l, u) => /* @__PURE__ */ k.jsx(gS, { item: l, index: u, setCardColor: c }, u)) })
  ] }, e);
}
function bS(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function yS({ loading: e }) {
  const { t } = Ot(), n = ct(Wx), r = kt(() => n ? Object.entries(bS(n, "description")).map(([s, a], c) => /* @__PURE__ */ k.jsx(hS, { category: s, items: a, index: s || c.toString() }, s)) : [], [n]), o = /* @__PURE__ */ k.jsx(lS, {});
  return /* @__PURE__ */ k.jsx(at.Panel, { value: "link", children: /* @__PURE__ */ k.jsxs(V, { pos: "relative", style: { height: "100vh" }, children: [
    /* @__PURE__ */ k.jsx(Ca, { visible: e || !n }),
    n && r.length === 0 ? /* @__PURE__ */ k.jsxs(aa, { title: "No entities selected...", icon: o, mt: "xl", children: [
      t("entitySelectionInstruction"),
      /* @__PURE__ */ k.jsx(er, { h: "md" }),
      t("needHelp"),
      " ",
      /* @__PURE__ */ k.jsx(
        "a",
        {
          href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",
          target: "_blank",
          rel: "noreferrer",
          children: t("checkDocumentation")
        }
      )
    ] }) : /* @__PURE__ */ k.jsx(oe, { chevronPosition: "left", children: r })
  ] }) });
}
const rp = "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/", vS = "Export Type to IFC As";
function Fl(e, t) {
  return Object.values(e).find((n) => n.uri === t);
}
function Fi(e, t, n = "") {
  if (!e)
    return null;
  const r = t.find((o) => o.ifcClassification.location === e.uri);
  return r || {
    ifcClassification: Va(e),
    parameterMapping: n
  };
}
const Ga = Tn(
  Jf,
  (e) => Object.values(e).map((t) => ({
    value: t.uri,
    label: `${t.name} (${t.version})`
  }))
), wS = Tn(
  Ga,
  (e) => e.filter((t) => t.value.startsWith(rp))
), xS = Tn(
  Ga,
  (e) => e.filter((t) => !t.value.startsWith(rp))
);
function SS({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r,
  setIsLoading: o
}) {
  const { t: i } = Ot(), s = ct(Jf), a = ct(Ga), c = ct(wS), l = ct(xS), u = kt(() => {
    var v, x;
    const h = t == null ? void 0 : t.mainDictionary;
    return h ? [
      {
        value: ((v = h.ifcClassification) == null ? void 0 : v.location) || "",
        label: ((x = h.ifcClassification) == null ? void 0 : x.location) || ""
      }
    ] : [];
  }, [t]), d = kt(() => {
    var v, x;
    const h = t == null ? void 0 : t.ifcDictionary;
    return h ? [
      {
        value: ((v = h.ifcClassification) == null ? void 0 : v.location) || "",
        label: ((x = h.ifcClassification) == null ? void 0 : x.location) || ""
      }
    ] : [];
  }, [t]), f = kt(() => (t == null ? void 0 : t.filterDictionaries.map(
    (h) => ({
      value: h.ifcClassification.location || "",
      label: h.ifcClassification.location || ""
    })
  )) || [], [t]), p = Q(
    (h) => {
      const v = h[0], x = Fl(Object.values(s), v) || null, y = Fi(
        x,
        t.mainDictionary ? [t.mainDictionary] : []
      ), w = t.filterDictionaries.filter(
        (S) => S.ifcClassification.location !== v
      );
      n({
        ...t,
        mainDictionary: y || null,
        filterDictionaries: w
      }), r(!0);
    },
    [s, t, n, r]
  ), m = Q(
    (h) => {
      var C;
      const v = h[0], x = Fl(Object.values(s), v) || null, y = ((C = t.ifcDictionary) == null ? void 0 : C.parameterMapping) || vS, w = Fi(
        x,
        t.ifcDictionary ? [t.ifcDictionary] : [],
        y
      ), S = t.filterDictionaries.filter(
        (P) => P.ifcClassification.location !== v
      );
      n({
        ...t,
        ifcDictionary: w || null,
        filterDictionaries: S
      }), r(!0);
    },
    [s, t, n, r]
  ), g = Q(
    (h) => {
      const v = Object.values(s).filter((S) => h.includes(S.uri)).map((S) => Fi(S, (t == null ? void 0 : t.filterDictionaries) || [])).filter(
        (S) => {
          var C, P;
          return S !== null && S.ifcClassification.location !== ((C = t == null ? void 0 : t.mainDictionary) == null ? void 0 : C.ifcClassification.location) && S.ifcClassification.location !== ((P = t == null ? void 0 : t.ifcDictionary) == null ? void 0 : P.ifcClassification.location);
        }
      ), x = (S, C) => {
        var P;
        return S && h.includes((P = S[0]) == null ? void 0 : P.value) ? null : C;
      }, y = x(u, t == null ? void 0 : t.mainDictionary), w = x(d, t == null ? void 0 : t.ifcDictionary);
      n({
        ...t,
        mainDictionary: y || null,
        ifcDictionary: w || null,
        filterDictionaries: v
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
  }, [a, o]), /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: i("dictionarySelectionLabel") }),
      /* @__PURE__ */ k.jsx(Qe, { size: "xs", c: "dimmed", children: i("dictionarySelectionInstruction") })
    ] }),
    /* @__PURE__ */ k.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ k.jsx(
        Un,
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
      /* @__PURE__ */ k.jsx(er, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        Un,
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
      /* @__PURE__ */ k.jsx(er, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        Un,
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
function or(e) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, or(e);
}
function CS(e, t) {
  if (or(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (or(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ES(e) {
  var t = CS(e, "string");
  return or(t) == "symbol" ? t : String(t);
}
function PS(e, t, n) {
  return t = ES(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Bl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bl(Object(n), !0).forEach(function(r) {
      PS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var zl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Bi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Vl = {
  INIT: "@@redux/INIT" + Bi(),
  REPLACE: "@@redux/REPLACE" + Bi(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Bi();
  }
};
function DS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function op(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Te(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Te(1));
    return n(op)(e, t);
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
    if (!DS(g))
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
    for (var h = s = a, v = 0; v < h.length; v++) {
      var x = h[v];
      x();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Te(10));
    o = g, f({
      type: Vl.REPLACE
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
        var w = h(y);
        return {
          unsubscribe: w
        };
      }
    }, g[zl] = function() {
      return this;
    }, g;
  }
  return f({
    type: Vl.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[zl] = m, r;
}
function Wl(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Gl(e, t) {
  if (typeof e == "function")
    return Wl(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Te(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Wl(o, t));
  }
  return n;
}
function ip() {
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
function IS() {
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
      return i = ip.apply(void 0, a)(o.dispatch), jl(jl({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var sp = { exports: {} }, ap = {};
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
function RS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var OS = typeof Object.is == "function" ? Object.is : RS, AS = Pn.useState, NS = Pn.useEffect, $S = Pn.useLayoutEffect, TS = Pn.useDebugValue;
function LS(e, t) {
  var n = t(), r = AS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return $S(function() {
    o.value = n, o.getSnapshot = t, ji(o) && i({ inst: o });
  }, [e, n, t]), NS(function() {
    return ji(o) && i({ inst: o }), e(function() {
      ji(o) && i({ inst: o });
    });
  }, [e]), TS(n), n;
}
function ji(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !OS(e, n);
  } catch {
    return !0;
  }
}
function MS(e, t) {
  return t();
}
var kS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? MS : LS;
ap.useSyncExternalStore = Pn.useSyncExternalStore !== void 0 ? Pn.useSyncExternalStore : kS;
sp.exports = ap;
var cp = sp.exports, _S = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo = b, FS = cp;
function BS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var jS = typeof Object.is == "function" ? Object.is : BS, zS = FS.useSyncExternalStore, VS = Wo.useRef, WS = Wo.useEffect, GS = Wo.useMemo, HS = Wo.useDebugValue;
_S.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = VS(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = GS(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, jS(u, p))
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
  var a = zS(e, i[0], i[1]);
  return WS(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), HS(a), a;
};
function US(e) {
  e();
}
let lp = US;
const qS = (e) => lp = e, KS = () => lp, Hl = Symbol.for("react-redux-context"), Ul = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function YS() {
  var e;
  if (!I.createContext)
    return {};
  const t = (e = Ul[Hl]) != null ? e : Ul[Hl] = /* @__PURE__ */ new Map();
  let n = t.get(I.createContext);
  return n || (n = I.createContext(null), t.set(I.createContext, n)), n;
}
const up = /* @__PURE__ */ YS(), JS = () => {
  throw new Error("uSES not initialized!");
};
var dp = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe = typeof Symbol == "function" && Symbol.for, Ha = pe ? Symbol.for("react.element") : 60103, Ua = pe ? Symbol.for("react.portal") : 60106, Go = pe ? Symbol.for("react.fragment") : 60107, Ho = pe ? Symbol.for("react.strict_mode") : 60108, Uo = pe ? Symbol.for("react.profiler") : 60114, qo = pe ? Symbol.for("react.provider") : 60109, Ko = pe ? Symbol.for("react.context") : 60110, qa = pe ? Symbol.for("react.async_mode") : 60111, Yo = pe ? Symbol.for("react.concurrent_mode") : 60111, Jo = pe ? Symbol.for("react.forward_ref") : 60112, Xo = pe ? Symbol.for("react.suspense") : 60113, XS = pe ? Symbol.for("react.suspense_list") : 60120, Qo = pe ? Symbol.for("react.memo") : 60115, Zo = pe ? Symbol.for("react.lazy") : 60116, QS = pe ? Symbol.for("react.block") : 60121, ZS = pe ? Symbol.for("react.fundamental") : 60117, eC = pe ? Symbol.for("react.responder") : 60118, tC = pe ? Symbol.for("react.scope") : 60119;
function qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ha:
        switch (e = e.type, e) {
          case qa:
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
      case Ua:
        return t;
    }
  }
}
function fp(e) {
  return qe(e) === Yo;
}
ee.AsyncMode = qa;
ee.ConcurrentMode = Yo;
ee.ContextConsumer = Ko;
ee.ContextProvider = qo;
ee.Element = Ha;
ee.ForwardRef = Jo;
ee.Fragment = Go;
ee.Lazy = Zo;
ee.Memo = Qo;
ee.Portal = Ua;
ee.Profiler = Uo;
ee.StrictMode = Ho;
ee.Suspense = Xo;
ee.isAsyncMode = function(e) {
  return fp(e) || qe(e) === qa;
};
ee.isConcurrentMode = fp;
ee.isContextConsumer = function(e) {
  return qe(e) === Ko;
};
ee.isContextProvider = function(e) {
  return qe(e) === qo;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ha;
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
  return qe(e) === Ua;
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
  return typeof e == "string" || typeof e == "function" || e === Go || e === Yo || e === Uo || e === Ho || e === Xo || e === XS || typeof e == "object" && e !== null && (e.$$typeof === Zo || e.$$typeof === Qo || e.$$typeof === qo || e.$$typeof === Ko || e.$$typeof === Jo || e.$$typeof === ZS || e.$$typeof === eC || e.$$typeof === tC || e.$$typeof === QS);
};
ee.typeOf = qe;
dp.exports = ee;
var nC = dp.exports, Ka = nC, rC = {
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
}, oC = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, iC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, pp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ya = {};
Ya[Ka.ForwardRef] = iC;
Ya[Ka.Memo] = pp;
function ql(e) {
  return Ka.isMemo(e) ? pp : Ya[e.$$typeof] || rC;
}
var sC = Object.defineProperty, aC = Object.getOwnPropertyNames, Kl = Object.getOwnPropertySymbols, cC = Object.getOwnPropertyDescriptor, lC = Object.getPrototypeOf, Yl = Object.prototype;
function mp(e, t, n) {
  if (typeof t != "string") {
    if (Yl) {
      var r = lC(t);
      r && r !== Yl && mp(e, r, n);
    }
    var o = aC(t);
    Kl && (o = o.concat(Kl(t)));
    for (var i = ql(e), s = ql(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!oC[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = cC(t, c);
        try {
          sC(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var uC = mp;
const Jl = /* @__PURE__ */ Ou(uC);
var gp = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja = Symbol.for("react.element"), Xa = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), ti = Symbol.for("react.strict_mode"), ni = Symbol.for("react.profiler"), ri = Symbol.for("react.provider"), oi = Symbol.for("react.context"), dC = Symbol.for("react.server_context"), ii = Symbol.for("react.forward_ref"), si = Symbol.for("react.suspense"), ai = Symbol.for("react.suspense_list"), ci = Symbol.for("react.memo"), li = Symbol.for("react.lazy"), fC = Symbol.for("react.offscreen"), hp;
hp = Symbol.for("react.module.reference");
function ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ja:
        switch (e = e.type, e) {
          case ei:
          case ni:
          case ti:
          case si:
          case ai:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case dC:
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
      case Xa:
        return t;
    }
  }
}
te.ContextConsumer = oi;
te.ContextProvider = ri;
te.Element = Ja;
te.ForwardRef = ii;
te.Fragment = ei;
te.Lazy = li;
te.Memo = ci;
te.Portal = Xa;
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
  return typeof e == "object" && e !== null && e.$$typeof === Ja;
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
  return ot(e) === Xa;
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
  return typeof e == "string" || typeof e == "function" || e === ei || e === ni || e === ti || e === si || e === ai || e === fC || typeof e == "object" && e !== null && (e.$$typeof === li || e.$$typeof === ci || e.$$typeof === ri || e.$$typeof === oi || e.$$typeof === ii || e.$$typeof === hp || e.getModuleId !== void 0);
};
te.typeOf = ot;
gp.exports = te;
var pC = gp.exports;
const mC = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function gC(e, t, n, r, {
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
  function v(x, y) {
    const w = !i(y, l), S = !o(x, c, y, l);
    return c = x, l = y, w && S ? m() : w ? g() : S ? h() : f;
  }
  return function(y, w) {
    return a ? v(y, w) : p(y, w);
  };
}
function hC(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = Cf(t, mC);
  const s = n(e, i), a = r(e, i), c = o(e, i);
  return gC(s, a, c, e, i);
}
function bC(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function vs(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Xl(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function bp(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = Xl(e);
      let l = i(a, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = Xl(l), l = i(a, c)), l;
    }, i;
  };
}
function Qa(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function yC(e) {
  return e && typeof e == "object" ? vs((t) => (
    // @ts-ignore
    bC(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    bp(e)
  ) : Qa(e, "mapDispatchToProps") : vs((t) => ({
    dispatch: t
  }));
}
function vC(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    bp(e)
  ) : Qa(e, "mapStateToProps") : vs(() => ({}));
}
function wC(e, t, n) {
  return _t({}, n, e, t);
}
function xC(e) {
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
function SC(e) {
  return e ? typeof e == "function" ? xC(e) : Qa(e, "mergeProps") : () => wC;
}
function CC() {
  const e = KS();
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
const Ql = {
  notify() {
  },
  get: () => []
};
function yp(e, t) {
  let n, r = Ql, o = 0, i = !1;
  function s(g) {
    u();
    const h = r.subscribe(g);
    let v = !1;
    return () => {
      v || (v = !0, h(), d());
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = CC());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Ql);
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
const EC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", co = EC ? I.useLayoutEffect : I.useEffect;
function Zl(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function zi(e, t) {
  if (Zl(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Zl(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const PC = ["reactReduxForwardedRef"];
let vp = JS;
const DC = (e) => {
  vp = e;
}, IC = [null, null];
function RC(e, t, n) {
  co(() => e(...t), n);
}
function OC(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function AC(e, t, n, r, o, i, s, a, c, l, u) {
  if (!e)
    return () => {
    };
  let d = !1, f = null;
  const p = () => {
    if (d || !a.current)
      return;
    const g = t.getState();
    let h, v;
    try {
      h = r(g, o.current);
    } catch (x) {
      v = x, f = x;
    }
    v || (f = null), h === i.current ? s.current || l() : (i.current = h, c.current = h, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function NC(e, t) {
  return e === t;
}
function wp(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = NC,
  areOwnPropsEqual: i = zi,
  areStatePropsEqual: s = zi,
  areMergedPropsEqual: a = zi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = up
} = {}) {
  const u = l, d = vC(e), f = yC(t), p = SC(n), m = !!e;
  return (h) => {
    const v = h.displayName || h.name || "Component", x = `Connect(${v})`, y = {
      shouldHandleStateChanges: m,
      displayName: x,
      wrappedComponentName: v,
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
    function w(P) {
      const [E, N, $] = I.useMemo(() => {
        const {
          reactReduxForwardedRef: ce
        } = P, X = Cf(P, PC);
        return [P.context, ce, X];
      }, [P]), T = I.useMemo(() => E && E.Consumer && // @ts-ignore
      pC.isContextConsumer(/* @__PURE__ */ I.createElement(E.Consumer, null)) ? E : u, [E, u]), M = I.useContext(T), _ = !!P.store && !!P.store.getState && !!P.store.dispatch, O = !!M && !!M.store, L = _ ? P.store : M.store, R = O ? M.getServerState : L.getState, F = I.useMemo(() => hC(L.dispatch, y), [L]), [A, H] = I.useMemo(() => {
        if (!m)
          return IC;
        const ce = yp(L, _ ? void 0 : M.subscription), X = ce.notifyNestedSubs.bind(ce);
        return [ce, X];
      }, [L, _, M]), K = I.useMemo(() => _ ? M : _t({}, M, {
        subscription: A
      }), [_, M, A]), ne = I.useRef(), ye = I.useRef($), ue = I.useRef(), Ne = I.useRef(!1);
      I.useRef(!1);
      const ve = I.useRef(!1), re = I.useRef();
      co(() => (ve.current = !0, () => {
        ve.current = !1;
      }), []);
      const we = I.useMemo(() => () => ue.current && $ === ye.current ? ue.current : F(L.getState(), $), [L, $]), ke = I.useMemo(() => (X) => A ? AC(
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
      RC(OC, [ye, ne, Ne, $, ue, H]);
      let Ce;
      try {
        Ce = vp(
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
      co(() => {
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
    const C = I.memo(w);
    if (C.WrappedComponent = h, C.displayName = w.displayName = x, c) {
      const E = I.forwardRef(function($, T) {
        return /* @__PURE__ */ I.createElement(C, _t({}, $, {
          reactReduxForwardedRef: T
        }));
      });
      return E.displayName = x, E.WrappedComponent = h, Jl(E, h);
    }
    return Jl(C, h);
  };
}
function $C({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = I.useMemo(() => {
    const l = yp(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = I.useMemo(() => e.getState(), [e]);
  co(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || up;
  return /* @__PURE__ */ I.createElement(c.Provider, {
    value: s
  }, n);
}
DC(cp.useSyncExternalStore);
qS(Gm);
function TC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function xp(e, t) {
  var n = q(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = z(!0), o = z(n), i = r.current || !!(t && o.current.inputs && TC(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return G(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function LC(e, t) {
  return xp(function() {
    return e;
  }, t);
}
var Y = xp, W = LC, MC = !0, Vi = "Invariant failed";
function kC(e, t) {
  if (!e) {
    if (MC)
      throw new Error(Vi);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Vi, ": ").concat(n) : Vi;
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
}, Za = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, eu = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, _C = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Wi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, ec = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Wi : r, i = t.border, s = i === void 0 ? Wi : i, a = t.padding, c = a === void 0 ? Wi : a, l = lt(Za(n, o)), u = lt(eu(n, s)), d = lt(eu(u, c));
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
  return isNaN(o) && kC(!1), o;
}, FC = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, lo = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = _C(r, n);
  return ec({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, uo = function(t, n) {
  return n === void 0 && (n = FC()), lo(t, n);
}, Sp = function(t, n) {
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
  return ec({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Cp = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Sp(n, r);
}, tu = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function BC(e, t) {
  return !!(e === t || tu(e) && tu(t));
}
function jC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!BC(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = jC);
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
var zC = function(t) {
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
const ir = zC;
function Ep(e, t) {
}
Ep.bind(null, "warn");
Ep.bind(null, "error");
function Ft() {
}
function VC(e, t) {
  return {
    ...e,
    ...t
  };
}
function Xe(e, t, n) {
  const r = t.map((o) => {
    const i = VC(n, o.options);
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
const WC = "Invariant failed";
class fo extends Error {
}
fo.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  if (!e)
    throw new fo(WC);
}
class GC extends b.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Ft, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof fo && n.preventDefault();
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
    if (t instanceof fo) {
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
const HC = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, po = (e) => e + 1, UC = (e) => `
  You have lifted an item in position ${po(e.source.index)}
`, Pp = (e, t) => {
  const n = e.droppableId === t.droppableId, r = po(e.index), o = po(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Dp = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, qC = (e) => {
  const t = e.destination;
  if (t)
    return Pp(e.source, t);
  const n = e.combine;
  return n ? Dp(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, nu = (e) => `
  The item has returned to its starting position
  of ${po(e.index)}
`, KC = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${nu(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Pp(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Dp(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${nu(e.source)}
  `;
}, YC = {
  dragHandleUsageInstructions: HC,
  onDragStart: UC,
  onDragUpdate: qC,
  onDragEnd: KC
};
var Vr = YC;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), je = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Bt = (e, t) => e.x === t.x && e.y === t.y, Ln = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), cn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, sr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ru = (e, t) => Math.min(...t.map((n) => sr(e, n))), Ip = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var JC = (e, t) => {
  const n = lt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Sr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), ou = (e) => [{
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
}], XC = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, QC = (e, t) => t ? Sr(e, t.scroll.diff.displacement) : e, ZC = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, e1 = (e, t) => t && t.shouldClipSubject ? JC(t.pageMarginBox, e) : lt(e);
var Dn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = QC(e.marginBox, r), i = ZC(o, n, t), s = e1(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, tc = (e, t) => {
  e.frame || B(!1);
  const n = e.frame, r = je(t, n.scroll.initial), o = Ln(r), i = {
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
const Rp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Op = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ui = de((e) => Object.values(e)), t1 = de((e) => Object.values(e));
var Mn = de((e, t) => t1(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function nc(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function di(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var fi = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), n1 = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !nc(o))
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
}, kn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Ap = {
  point: fe,
  value: 0
}, ar = {
  invisible: {},
  visible: {},
  all: []
}, r1 = {
  displaced: ar,
  displacedBy: Ap,
  at: null
};
var o1 = r1, Ze = (e, t) => (n) => e <= n && n <= t, Np = (e) => {
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
}, i1 = (e) => {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const rc = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, $p = {
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
var s1 = (e) => (t) => {
  const n = Ze(t.top, t.bottom), r = Ze(t.left, t.right);
  return (o) => e === rc ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const a1 = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return Sr(e, n);
}, c1 = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, l1 = (e, t, n) => n(t)(e), oc = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? a1(e, t) : e;
  return c1(i, t, o) && l1(i, n, o);
}, u1 = (e) => oc({
  ...e,
  isVisibleThroughFrameFn: Np
}), Tp = (e) => oc({
  ...e,
  isVisibleThroughFrameFn: i1
}), d1 = (e) => oc({
  ...e,
  isVisibleThroughFrameFn: s1(e.destination.axis)
}), f1 = (e, t, n) => {
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
function p1(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return lt(Za(n, r));
}
function cr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const l = p1(c, n), u = c.descriptor.id;
    if (a.all.push(u), !u1({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = f1(u, i, o), p = {
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
function m1(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function iu({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = m1(e, {
    inHomeList: t
  });
  return {
    displaced: ar,
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
function mo({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const c = kn(e, n);
  if (s == null)
    return iu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return iu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = fi(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: cr({
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
var g1 = ({
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
}, h1 = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, b1 = ({
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
    const d = h1({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : mo({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = g1({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : mo({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, y1 = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return Ht(n, t) ? o ? fe : Ln(r.point) : o ? r.point : fe;
}, v1 = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = di(t);
  r || B(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = y1({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const Lp = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, w1 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, ic = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, su = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => cn(e.line, t.marginBox[e.end] + Lp(e, n), ic(e, t.marginBox, n)), au = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => cn(e.line, t.marginBox[e.start] - w1(e, n), ic(e, t.marginBox, n)), x1 = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => cn(e.line, t.contentBox[e.start] + Lp(e, n), ic(e, t.contentBox, n));
var S1 = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Mn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return x1({
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
      return au({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = lo(f.page, l.point);
    return au({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (Ht(d.descriptor.id, o)) {
    const f = lo(d.page, Ln(o.displacedBy.point));
    return su({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return su({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, ws = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const C1 = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? S1({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : v1({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var pi = (e) => {
  const t = C1(e), n = e.droppable;
  return n ? ws(n, t) : t;
}, Mp = (e, t) => {
  const n = je(t, e.scroll.initial), r = Ln(n);
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
function cu(e, t) {
  return e.map((n) => t[n]);
}
function E1(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var P1 = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Mp(t, he(t.scroll.current, o)), s = n.frame ? tc(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, c = cr({
    afterDragging: cu(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = cr({
    afterDragging: cu(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = E1(m, f);
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
}, D1 = (e, t) => he(e.scroll.diff.displacement, t), sc = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = D1(n, e), o = je(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, kp = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = je(n, e.page.borderBox.center), c = {
    target: Sr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? d1(c) : Tp(c);
}, I1 = ({
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
  const l = Mn(n.descriptor.id, r), u = kn(t, n), d = n1({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || b1({
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
  if (kp({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: sc({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = je(f, s), g = P1({
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
var R1 = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = Ze(i[s.start], i[s.end]), c = ui(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Np(o.frame)(Ie(u))).filter((u) => {
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
    const f = ru(t, ou(Ie(u))), p = ru(t, ou(Ie(d)));
    return f !== p ? f - p : Ie(u)[s.start] - Ie(d)[s.start];
  })[0];
};
const lu = (e, t) => {
  const n = e.page.borderBox.center;
  return Ht(e.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
}, O1 = (e, t) => {
  const n = e.page.borderBox;
  return Ht(e.descriptor.id, t) ? Sr(n, Ln(t.displacedBy.point)) : n;
};
var A1 = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => Tp({
  target: O1(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = sr(e, ws(n, lu(s, o))), l = sr(e, ws(n, lu(a, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, Cr = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: cn(t.line, r)
  };
});
const N1 = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return cn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Mn(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : cn(r.line, c);
}, _p = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Fp = (e, t, n) => {
  const r = e.frame;
  kn(t, e) && B(!1), e.subject.withPlaceholder && B(!1);
  const o = Cr(e.axis, t.displaceBy).point, i = N1(e, o, n), s = {
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
  const a = i ? he(r.scroll.max, i) : r.scroll.max, c = _p(r, a), l = Dn({
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
}, $1 = (e) => {
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
  const o = _p(n, r), i = Dn({
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
var T1 = ({
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
      displaced: ar,
      displacedBy: Ap,
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
    }), p = kn(r, i) ? i : Fp(i, r, o);
    return kp({
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
  })(), u = Cr(i.axis, r.displaceBy);
  return mo({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: ar,
    index: l
  });
}, L1 = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = R1({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = Mn(c.descriptor.id, o), u = A1({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = T1({
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
    clientSelection: sc({
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
const M1 = (e, t) => {
  const n = We(e);
  return n ? t[n] : null;
};
var k1 = ({
  state: e,
  type: t
}) => {
  const n = M1(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? I1({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : L1({
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
function Bp(e) {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function _1(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function F1({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = cn(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: sr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function B1({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = ui(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !_1(e, i))
      return !1;
    if (Bp(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], u = Ze(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : F1({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const jp = (e, t) => lt(Sr(e, t));
var j1 = (e, t) => {
  const n = e.frame;
  return n ? jp(t, n.scroll.diff.value) : t;
};
function zp({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function z1({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var V1 = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, c = Cr(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = fi(t, r).find((g) => {
    const h = g.descriptor.id, v = g.page.borderBox.center[a.line], x = Ht(h, s), y = zp({
      displaced: o,
      id: h
    });
    return x ? y ? d <= v : u < v - l : y ? d <= v + l : u < v;
  }) || null, m = z1({
    draggable: t,
    closest: p,
    inHomeList: kn(t, n)
  });
  return mo({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: m
  });
};
const W1 = 4;
var G1 = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = Cr(r.axis, e.displaceBy), c = a.value, l = t[s.start], u = t[s.end], f = fi(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[s.size] / W1, y = Ht(g, i), w = zp({
      displaced: n.displaced,
      id: g
    });
    return y ? w ? u > h[s.start] + x && u < h[s.end] - x : l > h[s.start] - c + x && l < h[s.end] - c - x : w ? u > h[s.start] + c + x && u < h[s.end] + c - x : l > h[s.start] + x && l < h[s.end] - x;
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
}, Vp = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = jp(t.page.borderBox, e), c = B1({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return o1;
  const l = r[c], u = Mn(l.descriptor.id, n), d = j1(l, a);
  return G1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }) || V1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, ac = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const H1 = ({
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
  const s = $1(i);
  return ac(n, s);
};
var U1 = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = H1({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = We(o);
  if (!s)
    return i;
  const a = n[s];
  if (kn(e, a) || a.subject.withPlaceholder)
    return i;
  const c = Fp(a, e, t);
  return ac(i, c);
}, qn = ({
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
  const p = a.draggables[e.critical.draggable.id], m = o || Vp({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = U1({
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
function q1(e, t) {
  return e.map((n) => t[n]);
}
var Wp = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = q1(i.all, n), a = cr({
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
}, Gp = ({
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
  return sc({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Hp = ({
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
  const u = a[l], d = Wp({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Gp({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return qn({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, K1 = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Up = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Cr(t.axis, e.displaceBy), i = Mn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && B(!1);
  const a = i.slice(s + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: cr({
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
        destination: K1(e.descriptor)
      }
    },
    afterCritical: l
  };
}, Y1 = (e, t) => ({
  draggables: e.draggables,
  droppables: ac(e.droppables, t)
}), J1 = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = lo(e.client, t), o = uo(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, X1 = (e) => {
  const t = e.frame;
  return t || B(!1), t;
}, Q1 = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = X1(s).scroll.diff.value, l = he(r, c);
    return J1({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, Z1 = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((v) => {
    const x = e.dimensions.droppables[v.droppableId];
    return tc(x, v.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Rp(n)
  }, o = Op(Q1({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((v) => {
    delete i[v];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = We(e.impact), c = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Up({
    draggable: l,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = Vp({
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
const xs = (e) => e.movementMode === "SNAP", Gi = (e, t, n) => {
  const r = Y1(e.dimensions, t);
  return !xs(e) || n ? qn({
    state: e,
    dimensions: r
  }) : Hp({
    state: e,
    dimensions: r
  });
};
function Hi(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const uu = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var eE = (e = uu, t) => {
  if (t.type === "FLUSH")
    return {
      ...uu,
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
    } = Up({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || B(!1), Z1({
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
    return Bt(n, e.current.client.selection) ? e : qn({
      state: e,
      clientSelection: n,
      impact: xs(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Hi(e);
    en(e) || B(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = tc(o, r);
    return Gi(e, i, !1);
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
    return Gi(e, i, !0);
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
    return Gi(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    en(e) || B(!1), e.isWindowScrollAllowed || B(!1);
    const n = t.payload.newScroll;
    if (Bt(e.viewport.scroll.current, n))
      return Hi(e);
    const r = Mp(e.viewport, n);
    return xs(e) ? Hp({
      state: e,
      viewport: r
    }) : qn({
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
    const n = k1({
      state: e,
      type: t.type
    });
    return n ? qn({
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
const tE = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), nE = (e) => ({
  type: "LIFT",
  payload: e
}), rE = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), oE = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), iE = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), sE = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), aE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), cE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), qp = (e) => ({
  type: "MOVE",
  payload: e
}), lE = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), uE = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), dE = () => ({
  type: "MOVE_UP",
  payload: null
}), fE = () => ({
  type: "MOVE_DOWN",
  payload: null
}), pE = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), mE = () => ({
  type: "MOVE_LEFT",
  payload: null
}), cc = () => ({
  type: "FLUSH",
  payload: null
}), gE = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), lc = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Kp = (e) => ({
  type: "DROP",
  payload: e
}), hE = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Yp = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var bE = (e) => ({
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
  c.phase === "DROP_ANIMATING" && n(lc({
    completed: c.completed
  })), t().phase !== "IDLE" && B(!1), n(cc()), n(tE({
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
  n(rE({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, yE = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const uc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, lr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Jp = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Qt = `${Jp.outOfTheWay}s ${uc.outOfTheWay}`, Kn = {
  fluid: `opacity ${Qt}`,
  snap: `transform ${Qt}, opacity ${Qt}`,
  drop: (e) => {
    const t = `${e}s ${uc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Qt}`,
  placeholder: `height ${Qt}, width ${Qt}, margin ${Qt}`
}, du = (e) => Bt(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, Ss = {
  moveTo: du,
  drop: (e, t) => {
    const n = du(e);
    if (n)
      return t ? `${n} scale(${lr.scale.drop})` : n;
  }
}, {
  minDropTime: Cs,
  maxDropTime: Xp
} = Jp, vE = Xp - Cs, fu = 1500, wE = 0.6;
var xE = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = sr(e, t);
  if (r <= 0)
    return Cs;
  if (r >= fu)
    return Xp;
  const o = r / fu, i = Cs + vE * o, s = n === "CANCEL" ? i * wE : i;
  return Number(s.toFixed(2));
}, SE = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = We(e), c = a ? s[a] : null, l = s[t.descriptor.droppableId], u = Gp({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return je(u, t.client.borderBox.center);
}, CE = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Wp({
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
    displaced: ar
  },
  didDropInsideDroppable: !0
};
const EE = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(hE({
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
  } = CE({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? nc(u) : null, p = d ? di(u) : null, m = {
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
  }, h = SE({
    impact: u,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), v = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: u
  };
  if (!(!Bt(o.current.client.offset, h) || !!g.combine)) {
    t(lc({
      completed: v
    }));
    return;
  }
  const y = xE({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(gE({
    newHomeClientOffset: h,
    dropDuration: y,
    completed: v
  }));
};
var PE = EE, Qp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function DE(e) {
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
function IE({
  onWindowScroll: e
}) {
  function t() {
    e(Qp());
  }
  const n = ir(t), r = DE(n);
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
const RE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", OE = (e) => {
  const t = IE({
    onWindowScroll: (n) => {
      e.dispatch(lE({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && RE(r) && t.stop(), n(r);
  };
};
var AE = OE, NE = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, $E = () => {
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
const TE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, LE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, ME = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Vn = (e, t) => {
  t();
}, Tr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Ui(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = NE(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var kE = (e, t) => {
  const n = $E();
  let r = null;
  const o = (d, f) => {
    r && B(!1), Vn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && B(!1), Vn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Tr(d, f));
    });
  }, s = (d, f) => {
    r && B(!1);
    const p = Tr(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Vn("onDragStart", () => Ui(e().onDragStart, p, t, Vr.onDragStart));
    });
  }, a = (d, f) => {
    const p = nc(f), m = di(f);
    r || B(!1);
    const g = !ME(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !TE(r.lastLocation, p);
    h && (r.lastLocation = p);
    const v = !LE(r.lastCombine, m);
    if (v && (r.lastCombine = m), !g && !h && !v)
      return;
    const x = {
      ...Tr(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Vn("onDragUpdate", () => Ui(e().onDragUpdate, x, t, Vr.onDragUpdate));
    });
  }, c = () => {
    r || B(!1), n.flush();
  }, l = (d) => {
    r || B(!1), r = null, Vn("onDragEnd", () => Ui(e().onDragEnd, d, t, Vr.onDragEnd));
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
        ...Tr(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, _E = (e, t) => {
  const n = kE(e, t);
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
const FE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && B(!1), e.dispatch(lc({
    completed: r.completed
  }));
};
var BE = FE;
const jE = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Yp());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = Xe(window, [s]);
    });
  };
};
var zE = jE, VE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, WE = (e) => {
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
const GE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var HE = (e) => (t) => (n) => (r) => {
  if (GE(r)) {
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
const UE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Kp({
    reason: r.reason
  })));
};
var qE = UE;
const KE = ip;
var YE = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => op(eE, KE(IS(yE(n), VE(e), bE(e), PE, BE, zE, qE, HE(i), AE, WE(t), _E(r, o))));
const qi = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function JE({
  registry: e,
  callbacks: t
}) {
  let n = qi(), r = null;
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
      n = qi(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = qi());
    }
  };
}
var Zp = ({
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
}, em = () => {
  const e = document.documentElement;
  return e || B(!1), e;
}, tm = () => {
  const e = em();
  return Zp({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, XE = () => {
  const e = Qp(), t = tm(), n = e.y, r = e.x, o = em(), i = o.clientWidth, s = o.clientHeight, a = r + i, c = n + s;
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
}, QE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = XE(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: Op(a),
      droppables: Rp(s)
    },
    critical: e,
    viewport: r
  };
};
function pu(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var ZE = (e, t) => {
  let n = null;
  const r = JE({
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
    f.type === "ADDITION" && pu(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && pu(e, p, f.value) && r.remove(f.value);
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
      }, QE({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, nm = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", eP = (e) => {
  window.scrollBy(e.x, e.y);
};
const tP = de((e) => ui(e).filter((t) => !(!t.isEnabled || !t.frame))), nP = (e, t) => tP(t).find((r) => (r.frame || B(!1), Bp(r.frame.pageMarginBox)(e))) || null;
var rP = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return nP(e, n);
};
const ur = {
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
var oP = (e, t, n = () => ur) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, rm = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, dc = 1, iP = (e, t, n = () => ur) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return dc;
  const i = 1 - rm({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, sP = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return dc;
  const u = rm({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, mu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = iP(e, t, o);
  return i === 0 ? 0 : r ? Math.max(sP(i, n, o), dc) : i;
}, gu = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = oP(e, r, i);
  return t[r.end] < t[r.start] ? mu({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * mu({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, aP = ({
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
const cP = Ip((e) => e === 0 ? 0 : e);
var om = ({
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
  }, a = gu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: rc,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = gu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: $p,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = cP({
    x: c,
    y: a
  });
  if (Bt(l, fe))
    return null;
  const u = aP({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? Bt(u, fe) ? null : u : null;
};
const lP = Ip((e) => e === 0 ? 0 : e > 0 ? 1 : -1), fc = (() => {
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
})(), im = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = lP(n), i = fc({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, pc = (e, t) => im({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), uP = (e, t) => {
  if (!pc(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return fc({
    current: r,
    max: n,
    change: t
  });
}, mc = (e, t) => {
  const n = e.frame;
  return n ? im({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, dP = (e, t) => {
  const n = e.frame;
  return !n || !mc(e, t) ? null : fc({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var fP = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = om({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && pc(e, s) ? s : null;
}, pP = ({
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
  const a = om({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && mc(e, a) ? a : null;
}, hu = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = fP({
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
  const l = rP({
    center: s,
    destination: We(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = pP({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(l.descriptor.id, u);
}, mP = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => ur
}) => {
  const r = ir(e), o = ir(t);
  let i = null;
  const s = (l) => {
    i || B(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    hu({
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
      hu({
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
}, gP = ({
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
    if (!mc(a, c))
      return c;
    const l = dP(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = je(c, l);
    return t(a.descriptor.id, u), je(c, u);
  }, i = (a, c, l) => {
    if (!a || !pc(c, l))
      return l;
    const u = uP(c, l);
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
}, hP = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = mP({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = gP({
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
})(), Es = (() => {
  const e = `${In}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), bP = (() => {
  const e = `${In}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), bu = {
  contextId: `${In}-scroll-container-context-id`
}, yP = (e) => (t) => `[${t}="${e}"]`, Wn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), vP = "pointer-events: none;";
var wP = (e) => {
  const t = yP(e), n = (() => {
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
        dragging: vP,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Kn.outOfTheWay};
    `;
    return {
      selector: t(Es.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(bP.contextId),
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
    always: Wn(s, "always"),
    resting: Wn(s, "resting"),
    dragging: Wn(s, "dragging"),
    dropAnimating: Wn(s, "dropAnimating"),
    userCancel: Wn(s, "userCancel")
  };
};
const xP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? bo : G;
var Ge = xP;
const Ki = () => {
  const e = document.querySelector("head");
  return e || B(!1), e;
}, yu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function SP(e, t) {
  const n = Y(() => wP(e), [e]), r = z(null), o = z(null), i = W(de((d) => {
    const f = o.current;
    f || B(!1), f.textContent = d;
  }), []), s = W((d) => {
    const f = r.current;
    f || B(!1), f.textContent = d;
  }, []);
  Ge(() => {
    !r.current && !o.current || B(!1);
    const d = yu(t), f = yu(t);
    return r.current = d, o.current = f, d.setAttribute(`${In}-always`, e), f.setAttribute(`${In}-dynamic`, e), Ki().appendChild(d), Ki().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || B(!1), Ki().removeChild(g), m.current = null;
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
function sm(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var am = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function mi(e) {
  return e instanceof am(e).HTMLElement;
}
function CP(e, t) {
  const n = `[${Rn.contextId}="${e}"]`, r = sm(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(Rn.draggableId) === t);
  return !o || !mi(o) ? null : o;
}
function EP(e) {
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
    const p = CP(e, f);
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
function PP() {
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
function DP() {
  const e = Y(PP, []);
  return G(() => function() {
    b.version.startsWith("16") || b.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var gc = b.createContext(null), go = () => {
  const e = document.body;
  return e || B(!1), e;
};
const IP = {
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
var RP = IP;
const OP = (e) => `rfd-announcement-${e}`;
function AP(e) {
  const t = Y(() => OP(e), [e]), n = z(null);
  return G(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), _t(i.style, RP), go().appendChild(i), function() {
      setTimeout(function() {
        const c = go();
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
let NP = 0;
const cm = {
  separator: "::"
};
function $P(e, t = cm) {
  return Y(() => `${e}${t.separator}${NP++}`, [t.separator, e]);
}
function TP(e, t = cm) {
  const n = b.useId();
  return Y(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var hc = "useId" in b ? TP : $P;
function LP({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function MP({
  contextId: e,
  text: t
}) {
  const n = hc("hidden-text", {
    separator: "-"
  }), r = Y(() => LP({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return G(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", go().appendChild(i), function() {
      const a = go();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var gi = b.createContext(null);
function lm(e) {
  const t = z(e);
  return G(() => {
    t.current = e;
  }), t;
}
function kP() {
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
function dr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const _P = 9, FP = 13, bc = 27, um = 32, BP = 33, jP = 34, zP = 35, VP = 36, WP = 37, GP = 38, HP = 39, UP = 40, qP = {
  [FP]: !0,
  [_P]: !0
};
var dm = (e) => {
  qP[e.keyCode] && e.preventDefault();
};
const KP = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var hi = KP;
const fm = 0, vu = 5;
function YP(e, t) {
  return Math.abs(t.x - e.x) >= vu || Math.abs(t.y - e.y) >= vu;
}
const wu = {
  type: "IDLE"
};
function JP({
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
      if (i !== fm)
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
      if (!YP(u, c))
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
      if (o.keyCode === bc) {
        o.preventDefault(), e();
        return;
      }
      dm(o);
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
function XP(e) {
  const t = z(wu), n = z(Ft), r = Y(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== fm || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
    t.current.type !== "IDLE" && (t.current = wu, n.current(), i());
  }, [i]), a = W(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), c = W(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = JP({
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
function QP() {
}
const ZP = {
  [jP]: !0,
  [BP]: !0,
  [VP]: !0,
  [zP]: !0
};
function eD(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === bc) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === um) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === UP) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === GP) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === HP) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === WP) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (ZP[o.keyCode]) {
        o.preventDefault();
        return;
      }
      dm(o);
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
function tD(e) {
  const t = z(QP), n = Y(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== um)
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
      t.current = Xe(window, eD(l, u), {
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
const Yi = {
  type: "IDLE"
}, nD = 120, rD = 0.15;
function oD({
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
      n.keyCode === bc && n.preventDefault(), e();
    }
  }, {
    eventName: hi,
    fn: e
  }];
}
function iD({
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
      if (!i || !(i.force >= rD))
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
function sD(e) {
  const t = z(Yi), n = z(Ft), r = W(function() {
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
        clientX: v,
        clientY: x
      } = h, y = {
        x: v,
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
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Yi), n.current(), s());
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
    }, g = Xe(window, iD(m), p), h = Xe(window, oD(m), p);
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
    const g = setTimeout(u, nD);
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
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Yi));
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
const aD = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function pm(e, t) {
  if (t == null)
    return !1;
  if (aD.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : pm(e, t.parentElement);
}
function cD(e, t) {
  const n = t.target;
  return mi(n) ? pm(e, n) : !1;
}
var lD = (e) => lt(e.getBoundingClientRect()).center;
function uD(e) {
  return e instanceof am(e).Element;
}
const dD = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function mm(e, t) {
  return e == null ? null : e[dD](t) ? e : mm(e.parentElement, t);
}
function fD(e, t) {
  return e.closest ? e.closest(t) : mm(e, t);
}
function pD(e) {
  return `[${Rn.contextId}="${e}"]`;
}
function mD(e, t) {
  const n = t.target;
  if (!uD(n))
    return null;
  const r = pD(e), o = fD(n, r);
  return !o || !mi(o) ? null : o;
}
function gD(e, t) {
  const n = mD(e, t);
  return n ? n.getAttribute(Rn.draggableId) : null;
}
function hD(e, t) {
  const n = `[${Es.contextId}="${e}"]`, o = sm(document, n).find((i) => i.getAttribute(Es.id) === t);
  return !o || !mi(o) ? null : o;
}
function bD(e) {
  e.preventDefault();
}
function Lr({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return !(!n() || e !== t);
}
function gm({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !nm(t.getState(), r));
}
function yD({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!gm({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = hD(t, c.descriptor.id);
  if (!l || s && !c.options.canDragInteractiveElements && cD(l, s))
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
    Lr({
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
    d !== "PRE_DRAG" && (C(), B(!1)), n.dispatch(nE(S.liftActionArgs)), d = "DRAGGING";
    function P(E, N = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), N.shouldBlockNextClick) {
        const $ = Xe(window, [{
          eventName: "click",
          fn: bD,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      C(), n.dispatch(Kp({
        reason: E
      }));
    }
    return {
      isActive: () => Lr({
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
  function v(S) {
    const C = ir((E) => {
      g(() => qp({
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
      moveUp: () => g(dE),
      moveRight: () => g(pE),
      moveDown: () => g(fE),
      moveLeft: () => g(mE)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: lD(l),
        movementMode: "SNAP"
      },
      cleanup: Ft,
      actions: S
    });
  }
  function y() {
    Lr({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Lr({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: v,
    snapLift: x,
    abort: y
  };
}
const vD = [XP, tD, sD];
function wD({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? vD : [], ...r || []], s = q(() => kP())[0], a = W(function(h, v) {
    dr(h) && !dr(v) && s.tryAbandon();
  }, [s]);
  Ge(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [s, t, a]), Ge(() => s.tryAbandon, [s.tryAbandon]);
  const c = W((g) => gm({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), l = W((g, h, v) => yD({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: v && v.sourceEvent ? v.sourceEvent : null
  }), [e, s, n, t]), u = W((g) => gD(e, g), [e]), d = W((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = W(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(cc()));
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
const xD = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    b.version.startsWith("16") || b.version.startsWith("17") ? n() : Ds(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), SD = (e) => ({
  ...ur,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...ur.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Gn(e) {
  return e.current || B(!1), e.current;
}
function CD(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = z(null), a = lm(e), c = W(() => xD(a.current), [a]), l = W(() => SD(a.current), [a]), u = AP(t), d = MP({
    contextId: t,
    text: i
  }), f = SP(t, o), p = W(($) => {
    Gn(s).dispatch($);
  }, []), m = Y(() => Gl({
    publishWhileDragging: oE,
    updateDroppableScroll: sE,
    updateDroppableIsEnabled: aE,
    updateDroppableIsCombineEnabled: cE,
    collectionStarting: iE
  }, p), [p]), g = DP(), h = Y(() => ZE(g, m), [g, m]), v = Y(() => hP({
    scrollWindow: eP,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Gl({
      move: qp
    }, p)
  }), [h.scrollDroppable, p, l]), x = EP(t), y = Y(() => YE({
    announce: u,
    autoScroller: v,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: f
  }), [u, v, h, x, c, f]);
  s.current = y;
  const w = W(() => {
    const $ = Gn(s);
    $.getState().phase !== "IDLE" && $.dispatch(cc());
  }, []), S = W(() => {
    const $ = Gn(s).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = Y(() => ({
    isDragging: S,
    tryAbort: w
  }), [S, w]);
  n(C);
  const P = W(($) => nm(Gn(s).getState(), $), []), E = W(() => en(Gn(s).getState()), []), N = Y(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: P,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, x, P, E, g]);
  return wD({
    contextId: t,
    store: y,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), G(() => w, [w]), b.createElement(gi.Provider, {
    value: N
  }, b.createElement($C, {
    context: gc,
    store: y
  }, e.children));
}
let ED = 0;
function PD() {
  return Y(() => `${ED++}`, []);
}
function DD() {
  return b.useId();
}
var ID = "useId" in b ? DD : PD;
function RD(e) {
  const t = ID(), n = e.dragHandleUsageInstructions || Vr.dragHandleUsageInstructions;
  return b.createElement(GC, null, (r) => b.createElement(CD, {
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
const xu = {
  dragging: 5e3,
  dropAnimating: 4500
}, OD = (e, t) => t ? Kn.drop(t.duration) : e ? Kn.snap : Kn.fluid, AD = (e, t) => {
  if (e)
    return t ? lr.opacity.drop : lr.opacity.combining;
}, ND = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function $D(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = ND(e), c = !!i, l = c ? Ss.drop(r, s) : Ss.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: OD(a, i),
    transform: l,
    opacity: AD(s, c),
    zIndex: c ? xu.dropAnimating : xu.dragging,
    pointerEvents: "none"
  };
}
function TD(e) {
  return {
    transform: Ss.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function LD(e) {
  return e.type === "DRAGGING" ? $D(e) : TD(e);
}
function MD(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Sp(o, r), s = uo(i, n), a = {
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
function kD(e) {
  const t = hc("draggable"), {
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
    return m || B(!1), MD(n, m, p);
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
var yc = b.createContext(null);
function ho(e) {
  const t = ft(e);
  return t || B(!1), t;
}
function _D(e) {
  e.preventDefault();
}
const FD = (e) => {
  const t = z(null), n = W((C = null) => {
    t.current = C;
  }, []), r = W(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = ho(gi), {
    type: a,
    droppableId: c
  } = ho(yc), l = Y(() => ({
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
    dropAnimationFinished: v
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
    kD(C);
  }
  const x = Y(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: _D
  } : null, [o, i, d, f]), y = W((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (b.version.startsWith("16") || b.version.startsWith("17") ? v() : Ds(v));
  }, [v, h]), w = Y(() => {
    const C = LD(h), P = h.type === "DRAGGING" && h.dropping ? y : void 0;
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
  return b.createElement(b.Fragment, null, u(w, h.snapshot, S));
};
var BD = FD, hm = (e, t) => e === t, bm = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const jD = (e) => e.combine ? e.combine.draggableId : null, zD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function VD() {
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
    if (dr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = We(o.impact), l = zD(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, u = l.mode, d = bm(l), f = jD(l), m = {
        duration: o.dropDuration,
        curve: uc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? lr.opacity.drop : null,
        scale: f ? lr.scale.drop : null
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
function ym(e = null) {
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
const WD = {
  mapped: {
    type: "SECONDARY",
    offset: fe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: ym(null)
  }
};
function GD() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(ym), n = de((s, a = null, c) => ({
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
      const h = Ln(l.displacedBy.point), v = e(h.x, h.y);
      return n(v, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (dr(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const HD = () => {
  const e = VD(), t = GD();
  return (r, o) => e(r, o) || t(r, o) || WD;
}, UD = {
  dropAnimationFinished: Yp
}, qD = wp(HD, UD, null, {
  context: gc,
  areStatePropsEqual: hm
})(BD);
var KD = qD;
function vm(e) {
  return ho(yc).isUsingCloneFor === e.draggableId && !e.isClone ? null : b.createElement(KD, e);
}
function YD(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return b.createElement(vm, _t({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const wm = (e) => (t) => e === t, JD = wm("scroll"), XD = wm("auto"), Su = (e, t) => t(e.overflowX) || t(e.overflowY), QD = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return Su(n, JD) || Su(n, XD);
}, ZD = () => !1, xm = (e) => e == null ? null : e === document.body ? ZD() ? e : null : e === document.documentElement ? null : QD(e) ? e : xm(e.parentElement);
var eI = xm, Ps = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Sm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Sm(e.parentElement) : !1;
var tI = (e) => {
  const t = eI(e), n = Sm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, nI = ({
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
    } = a, m = Zp({
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
  })(), l = o === "vertical" ? rc : $p, u = Dn({
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
const rI = (e, t) => {
  const n = Cp(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = Za({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return ec({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var oI = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = rI(e, c), u = uo(l, r), d = (() => {
    if (!c)
      return null;
    const p = Cp(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: uo(p, r),
      scroll: Ps(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return nI({
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
const iI = {
  passive: !1
}, sI = {
  passive: !0
};
var Cu = (e) => e.shouldPublishImmediately ? iI : sI;
const Mr = (e) => e && e.env.closestScrollable || null;
function aI(e) {
  const t = z(null), n = ho(gi), r = hc("droppable"), {
    registry: o,
    marshal: i
  } = n, s = lm(e), a = Y(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = z(a), l = Y(() => de((w, S) => {
    t.current || B(!1);
    const C = {
      x: w,
      y: S
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = W(() => {
    const w = t.current;
    return !w || !w.env.closestScrollable ? fe : Ps(w.env.closestScrollable);
  }, []), d = W(() => {
    const w = u();
    l(w.x, w.y);
  }, [u, l]), f = Y(() => ir(d), [d]), p = W(() => {
    const w = t.current, S = Mr(w);
    if (w && S || B(!1), w.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = W((w, S) => {
    t.current && B(!1);
    const C = s.current, P = C.getDroppableRef();
    P || B(!1);
    const E = tI(P), N = {
      ref: P,
      descriptor: a,
      env: E,
      scrollOptions: S
    };
    t.current = N;
    const $ = oI({
      ref: P,
      descriptor: a,
      env: E,
      windowScroll: w,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), T = E.closestScrollable;
    return T && (T.setAttribute(bu.contextId, n.contextId), T.addEventListener("scroll", p, Cu(N.scrollOptions))), $;
  }, [n.contextId, a, p, s]), g = W(() => {
    const w = t.current, S = Mr(w);
    return w && S || B(!1), Ps(S);
  }, []), h = W(() => {
    const w = t.current;
    w || B(!1);
    const S = Mr(w);
    t.current = null, S && (f.cancel(), S.removeAttribute(bu.contextId), S.removeEventListener("scroll", p, Cu(w.scrollOptions)));
  }, [p, f]), v = W((w) => {
    const S = t.current;
    S || B(!1);
    const C = Mr(S);
    C || B(!1), C.scrollTop += w.y, C.scrollLeft += w.x;
  }, []), x = Y(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: v
  }), [h, m, g, v]), y = Y(() => ({
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
function Ji() {
}
const Eu = {
  width: 0,
  height: 0,
  margin: XC
}, cI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Eu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, lI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = cI({
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
    transition: n !== "none" ? Kn.placeholder : null
  };
}, uI = (e) => {
  const t = z(null), n = W(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = q(e.animate === "open");
  G(() => a ? r !== "open" ? (n(), c(!1), Ji) : t.current ? Ji : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : Ji, [r, a, n]);
  const l = W((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = lI({
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
var dI = b.memo(uI);
class fI extends b.PureComponent {
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
const pI = (e) => {
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
    getContainerForClone: v
  } = e, x = W(() => o.current, []), y = W((T = null) => {
    o.current = T;
  }, []);
  W(() => i.current, []);
  const w = W((T = null) => {
    i.current = T;
  }, []), S = W(() => {
    r() && h({
      maxScroll: tm()
    });
  }, [r, h]);
  aI({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = Y(() => b.createElement(fI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: M,
    animate: _
  }) => b.createElement(dI, {
    placeholder: M,
    onClose: T,
    innerRef: w,
    animate: _,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, w]), P = Y(() => ({
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
      render: M
    } = g, _ = b.createElement(vm, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (O, L) => M(O, L, T));
    return Ru.createPortal(_, v());
  }
  return b.createElement(yc.Provider, {
    value: N
  }, s(P, m), $());
};
var mI = pI;
function gI() {
  return document.body || B(!1), document.body;
}
const Pu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: gI
}, Cm = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Pu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Pu[n]
    });
  return t;
}, Xi = (e, t) => e === t.droppable.type, Du = (e, t) => t.draggables[e.draggable.id], hI = () => {
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
    const a = Cm(s), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (dr(i)) {
      const f = i.critical;
      if (!Xi(l, f))
        return t;
      const p = Du(f, i.dimensions), m = We(i.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Xi(l, f.critical))
        return t;
      const p = Du(f.critical, i.dimensions);
      return r(c, u, bm(f.result) === c, We(f.impact) === c, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Xi(l, f.critical))
        return t;
      const p = We(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, bI = {
  updateViewportMaxScroll: uE
}, yI = wp(hI, bI, (e, t, n) => ({
  ...Cm(n),
  ...e,
  ...t
}), {
  context: gc,
  areStatePropsEqual: hm
})(mI);
var vI = yI;
function Em(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Em(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function wI() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Em(e)) && (r && (r += " "), r += t);
  return r;
}
const xI = "_item_1o9ja_1", SI = "_itemDragging_1o9ja_12", CI = "_symbol_1o9ja_16", EI = "_dragHandle_1o9ja_22", kr = {
  item: xI,
  itemDragging: SI,
  symbol: CI,
  dragHandle: EI
};
function PI({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Ot(), i = t ? t.filterDictionaries : [], s = (c) => {
    if (!t || !c.destination)
      return;
    const l = Array.from(i), [u] = l.splice(c.source.index, 1);
    l.splice(c.destination.index, 0, u), n({ ...t, filterDictionaries: l }), r(!0);
  }, a = i.map((c, l) => /* @__PURE__ */ k.jsx(YD, { index: l, draggableId: c.ifcClassification.location, children: (u, d) => /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: wI(kr.item, { [kr.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ k.jsx("div", { ...u.dragHandleProps, className: kr.dragHandle, children: /* @__PURE__ */ k.jsx(cS, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ k.jsx(Qe, { className: kr.uri, children: c.ifcClassification.location })
      ]
    }
  ) }, c.ifcClassification.location));
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: o("sortFilterDictionariesLabel") }),
      /* @__PURE__ */ k.jsx(Qe, { size: "xs", c: "dimmed", children: o("sortFilterDictionariesInstruction") })
    ] }),
    /* @__PURE__ */ k.jsx(oe.Panel, { children: /* @__PURE__ */ k.jsx(RD, { onDragEnd: s, children: /* @__PURE__ */ k.jsx(vI, { droppableId: "dnd-list", direction: "vertical", children: (c) => /* @__PURE__ */ k.jsxs("div", { ...c.droppableProps, ref: c.innerRef, children: [
      a,
      c.placeholder
    ] }) }) }) })
  ] }, e);
}
function DI({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = Ot(), i = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ k.jsx(
    Ra,
    {
      label: r("language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("selectLanguageInstruction")
    }
  );
}
function II({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Ot(), i = Wa(), s = ct(Hf), a = ct(Ax), c = z();
  return G(() => {
    s && i(_x(s));
  }, [i, s]), G(() => {
    if (!s)
      return;
    const l = {
      bsddApiEnvironment: s,
      includeTestDictionaries: a
    };
    c.current && c.current.bsddApiEnvironment === l.bsddApiEnvironment && c.current.includeTestDictionaries === l.includeTestDictionaries || (i(bs(l)), c.current = l);
  }, [i, s, a]), /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: o("generalSettingsLabel") }),
      /* @__PURE__ */ k.jsx(Qe, { size: "xs", c: "dimmed", children: o("generalSettingsInstruction") })
    ] }),
    /* @__PURE__ */ k.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ k.jsx(DI, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ k.jsx(er, { h: "xs" }),
      /* @__PURE__ */ k.jsx(
        To,
        {
          label: o("ShowPreview"),
          checked: t ? t.includeTestDictionaries : !1,
          type: "checkbox",
          onChange: (l) => {
            t && (n({ ...t, includeTestDictionaries: l.currentTarget.checked }), r(!0));
          }
        }
      )
    ] })
  ] }, e);
}
function RI({
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
  return /* @__PURE__ */ k.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ k.jsxs(oe.Control, { children: [
      /* @__PURE__ */ k.jsx($n, { order: 5, children: o("parameterMappingLabel") }),
      /* @__PURE__ */ k.jsx(Qe, { size: "xs", c: "dimmed", children: o("parameterMappingInstruction") })
    ] }),
    /* @__PURE__ */ k.jsx(oe.Panel, { children: a.map((u, d) => {
      const f = u.ifcClassification.location || d;
      return /* @__PURE__ */ k.jsxs("div", { style: { marginBottom: "1em" }, children: [
        /* @__PURE__ */ k.jsx(
          Ta,
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
function OI() {
  var u, d;
  const e = Wa(), t = ct((f) => f.settings), [n, r] = q(t), [o, i] = q(!1), [s, a] = q(!0);
  G(() => {
    r(t);
  }, [t]);
  const c = () => {
    var f;
    console.log("Saving", n), n && (e(za(n)), (f = window == null ? void 0 : window.bsddBridge) == null || f.saveSettings(JSON.stringify(n)), i(!1));
  }, l = () => {
    r(t), i(!1);
  };
  return /* @__PURE__ */ k.jsxs(at.Panel, { value: "settings", children: [
    /* @__PURE__ */ k.jsxs(oe, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ k.jsx(
        II,
        {
          id: 1,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ k.jsx(
        SS,
        {
          id: 2,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i,
          setIsLoading: a
        }
      ),
      /* @__PURE__ */ k.jsx(
        RI,
        {
          id: 3,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ k.jsx(
        PI,
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
        Xn,
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
      /* @__PURE__ */ k.jsx(Xn, { fullWidth: !0, variant: "light", onClick: l, disabled: !o, children: "Cancel" })
    ] })
  ] });
}
let AI;
const NI = (e) => async (t, n) => {
  const r = n(), o = Ml(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Ml(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(za(s));
};
function $I() {
  const e = Wa(), { t } = Ot(), n = ct(Mx), [r, o] = q(null), [i, s] = q(null), [a, c] = q(!0);
  return G(() => {
    (async () => {
      try {
      } catch (u) {
        console.error("Error connecting to bsddBridge:", u);
      }
    })();
  }, []), G(() => {
    n && r && (e(NI(r)), o(null), c(!1));
  }, [n, r, e]), G(() => {
    !a && i && (e(Yx(i)), s(null));
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
  }, /* @__PURE__ */ k.jsx(Sa, { size: "40rem", children: /* @__PURE__ */ k.jsxs(at, { defaultValue: "link", children: [
    /* @__PURE__ */ k.jsxs(at.List, { grow: !0, children: [
      /* @__PURE__ */ k.jsx(at.Tab, { value: "link", children: t("linkTabTitle") }),
      /* @__PURE__ */ k.jsx(at.Tab, { value: "settings", children: t("settingsTabTitle") })
    ] }),
    /* @__PURE__ */ k.jsx(yS, { loading: a }),
    /* @__PURE__ */ k.jsx(OI, {})
  ] }) });
}
function TI() {
  return /* @__PURE__ */ k.jsx(od, { theme: b0, children: /* @__PURE__ */ k.jsx($I, {}) });
}
const LI = tx({
  reducer: {
    settings: Nx,
    ifcData: Jx,
    bsdd: Fx
  }
});
Qi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ k.jsx(b.StrictMode, { children: /* @__PURE__ */ k.jsx(bg, { store: LI, children: /* @__PURE__ */ k.jsx(TI, {}) }) })
);
