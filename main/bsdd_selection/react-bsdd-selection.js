var Zm = Object.defineProperty;
var eg = (e, t, n) => t in e ? Zm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Re = (e, t, n) => (eg(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as R from "react";
import b, { createContext as Kt, useContext as mt, useState as q, useRef as z, useEffect as W, useMemo as Ft, useCallback as Q, useLayoutEffect as Eo, useId as Vu, forwardRef as ie, cloneElement as un, Children as tg, createElement as kc } from "react";
import * as ng from "react-dom";
import zu, { flushSync as Ls, createPortal as rg, unstable_batchedUpdates as og } from "react-dom";
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wu = { exports: {} }, Po = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ig = b, sg = Symbol.for("react.element"), ag = Symbol.for("react.fragment"), cg = Object.prototype.hasOwnProperty, lg = ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ug = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hu(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    cg.call(t, r) && !ug.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: sg, type: e, key: i, ref: s, props: o, _owner: lg.current };
}
Po.Fragment = ag;
Po.jsx = Hu;
Po.jsxs = Hu;
Wu.exports = Po;
var I = Wu.exports, os = {}, _c = zu;
os.createRoot = _c.createRoot, os.hydrateRoot = _c.hydrateRoot;
var Uu = { exports: {} }, qu = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br = b;
function dg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var fg = typeof Object.is == "function" ? Object.is : dg, pg = br.useSyncExternalStore, mg = br.useRef, gg = br.useEffect, hg = br.useMemo, bg = br.useDebugValue;
qu.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = mg(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = hg(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, fg(u, p))
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
  var a = pg(e, i[0], i[1]);
  return gg(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), bg(a), a;
};
Uu.exports = qu;
var yg = Uu.exports, Ve = (
  // prettier-ignore
  // @ts-ignore
  "default" in R ? R.default : R
), Fc = Symbol.for("react-redux-context"), Bc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vg() {
  if (!Ve.createContext)
    return {};
  const e = Bc[Fc] ?? (Bc[Fc] = /* @__PURE__ */ new Map());
  let t = e.get(Ve.createContext);
  return t || (t = Ve.createContext(
    null
  ), e.set(Ve.createContext, t)), t;
}
var zt = /* @__PURE__ */ vg(), wg = () => {
  throw new Error("uSES not initialized!");
};
function Ms(e = zt) {
  return function() {
    return Ve.useContext(e);
  };
}
var Ku = /* @__PURE__ */ Ms(), Yu = wg, xg = (e) => {
  Yu = e;
}, Sg = (e, t) => e === t;
function Cg(e = zt) {
  const t = e === zt ? Ku : Ms(e), n = (r, o = {}) => {
    const { equalityFn: i = Sg, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = t();
    Ve.useRef(!0);
    const f = Ve.useCallback(
      {
        [r.name](m) {
          return r(m);
        }
      }[r.name],
      [r, u, s.stabilityCheck]
    ), p = Yu(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      f,
      i
    );
    return Ve.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Eg = /* @__PURE__ */ Cg();
function Pg(e) {
  e();
}
function Dg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Pg(() => {
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
var jc = {
  notify() {
  },
  get: () => []
};
function Ig(e, t) {
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
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = Dg());
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
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
var Rg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Og = Rg ? Ve.useLayoutEffect : Ve.useEffect;
function Ag({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Ve.useMemo(() => {
    const l = Ig(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Ve.useMemo(() => e.getState(), [e]);
  Og(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || zt;
  return /* @__PURE__ */ Ve.createElement(c.Provider, { value: s }, n);
}
var $g = Ag;
function Ju(e = zt) {
  const t = e === zt ? Ku : (
    // @ts-ignore
    Ms(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Ng = /* @__PURE__ */ Ju();
function Tg(e = zt) {
  const t = e === zt ? Ng : Ju(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Lg = /* @__PURE__ */ Tg();
xg(yg.useSyncExternalStoreWithSelector);
const Mg = {
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
class Yr {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || Mg, this.options = n, this.debug = n.debug;
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
    return new Yr(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Yr(this.logger, t);
  }
}
var bt = new Yr();
class Do {
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
function Vn() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Vc(e) {
  return e == null ? "" : "" + e;
}
function kg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function ks(e, t, n) {
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
function zc(e, t, n) {
  const {
    obj: r,
    k: o
  } = ks(e, t, Object);
  r[o] = n;
}
function _g(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = ks(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function Jr(e, t) {
  const {
    obj: n,
    k: r
  } = ks(e, t);
  if (n)
    return n[r];
}
function Fg(e, t, n) {
  const r = Jr(e, n);
  return r !== void 0 ? r : Jr(t, n);
}
function Xu(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Xu(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function hn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Bg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function jg(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Bg[t]) : e;
}
const Vg = [" ", ",", "?", "!", ";"];
function zg(e, t, n) {
  t = t || "", n = n || "";
  const r = Vg.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
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
function Xr(e, t) {
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
      return l ? Xr(c, l, n) : void 0;
    }
    o = o[r[i]];
  }
  return o;
}
function Qr(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class Gc extends Do {
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
    const c = Jr(this.data, a);
    return c || !s || typeof r != "string" ? c : Xr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), zc(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
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
    let c = Jr(this.data, a) || {};
    o ? Xu(c, r, i) : c = {
      ...c,
      ...r
    }, zc(this.data, a, c), s.silent || this.emit("added", t, n, r);
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
var Qu = {
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
const Wc = {};
class Zr extends Do {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), kg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = bt.create("translator");
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
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !zg(t, r, o);
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
      const C = n.count !== void 0 && typeof n.count != "string", P = Zr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", N = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", T = n[`defaultValue${E}`] || n[`defaultValue${N}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (v = !0, f = T), this.isValidLookup(f) || (S = !0, f = s);
      const k = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, _ = P && T !== f && this.options.updateMissing;
      if (S || v || _) {
        if (this.logger.log(_ ? "updateKey" : "missingKey", l, c, s, _ ? T : f), i) {
          const F = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let A = [];
        const M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && M && M[0])
          for (let F = 0; F < M.length; F++)
            A.push(M[F]);
        else
          this.options.saveMissingTo === "all" ? A = this.languageUtils.toResolveHierarchy(n.lng || this.language) : A.push(n.lng || this.language);
        const O = (F, $, H) => {
          const Y = P && H !== f ? H : k;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, c, $, Y, _, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(F, c, $, Y, _, n), this.emit("missingKey", F, c, $, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? A.forEach((F) => {
          this.pluralResolver.getSuffixes(F, n).forEach(($) => {
            O([F], s + $, n[`defaultValue${$}`] || T);
          });
        }) : O(A, s, T));
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
    return t != null && c && c.length && r.applyPostProcessor !== !1 && (t = Qu.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(r) || (a = h, !Wc[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Wc[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((w) => {
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
function Di(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Hc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = bt.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Qr(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Qr(t), !t || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Di(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Di(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Di(r[2].toLowerCase()))), r.join("-");
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
let Gg = [{
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
}], Wg = {
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
const Hg = ["v1", "v2", "v3"], Ug = ["v4"], Uc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function qg() {
  const e = {};
  return Gg.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: Wg[t.fc]
      };
    });
  }), e;
}
class Kg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = bt.create("pluralResolver"), (!this.options.compatibilityJSON || Ug.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = qg();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Qr(t), {
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Uc[o] - Uc[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    return !Hg.includes(this.options.compatibilityJSON);
  }
}
function qc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Fg(e, t, n);
  return !i && o && typeof n == "string" && (i = Xr(e, n, r), i === void 0 && (i = Xr(t, n, r))), i;
}
class Yg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = bt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const n = t.interpolation;
    this.escape = n.escape !== void 0 ? n.escape : jg, this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0, this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1, this.prefix = n.prefix ? hn(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? hn(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? hn(n.nestingPrefix) : n.nestingPrefixEscaped || hn("$t("), this.nestingSuffix = n.nestingSuffix ? hn(n.nestingSuffix) : n.nestingSuffixEscaped || hn(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1, this.resetRegExp();
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
        const x = qc(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : x;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), w = g.join(this.formatSeparator).trim();
      return this.format(qc(n, c, h, this.options.keySeparator, this.options.ignoreJSONStructure), w, r, {
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
          typeof s != "string" && !this.useRawValueToEscape && (s = Vc(s));
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
      typeof i != "string" && (i = Vc(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function Jg(e) {
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
function bn(e) {
  const t = {};
  return function(r, o, i) {
    const s = o + JSON.stringify(i);
    let a = t[s];
    return a || (a = e(Qr(o), i), t[s] = a), a(r);
  };
}
class Xg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = bt.create("formatter"), this.options = t, this.formats = {
      number: bn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      currency: bn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: bn((n, r) => {
        const o = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      relativetime: bn((n, r) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i, r.range || "day");
      }),
      list: bn((n, r) => {
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
    this.formats[t.toLowerCase().trim()] = bn(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = Jg(c);
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
function Qg(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Zg extends Do {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = bt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
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
      _g(c.loaded, [i], s), Qg(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
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
function Kc() {
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
function Yc(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Lr() {
}
function eh(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class er extends Do {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Yc(t), this.services = {}, this.logger = bt, this.modules = {
      external: []
    }, eh(this), n && !this.isInitialized && !t.isClone) {
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
    const o = Kc();
    this.options = {
      ...o,
      ...this.options,
      ...Yc(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? bt.init(i(this.modules.logger), this.options) : bt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Xg);
      const d = new Hc(this.options);
      this.store = new Gc(this.options.resources, this.options);
      const f = this.services;
      f.logger = bt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Kg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Yg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Zg(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Zr(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Lr), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = Vn(), l = () => {
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
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lr;
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
    const o = Vn();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Lr), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Qu.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = Vn();
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
    const r = Vn();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Vn();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Hc(Kc());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new er(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lr;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new er(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new Gc(this.store.data, o), i.services.resourceStore = i.store), i.translator = new Zr(i.services, o), i.translator.on("*", function(a) {
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
const be = er.createInstance();
be.createInstance = er.createInstance;
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
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
function th() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Jc = {};
function is() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Jc[t[0]] || (typeof t[0] == "string" && (Jc[t[0]] = /* @__PURE__ */ new Date()), th(...t));
}
const Zu = (e, t) => () => {
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
function Xc(e, t, n) {
  e.loadNamespaces(t, Zu(e, n));
}
function Qc(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Zu(e, r));
}
function nh(e, t) {
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
function rh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (is("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : nh(e, t, n);
}
const oh = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ih = {
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
}, sh = (e) => ih[e], ah = (e) => e.replace(oh, sh);
let ss = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: ah
};
function ch() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ss = {
    ...ss,
    ...e
  };
}
function lh() {
  return ss;
}
let ed;
function uh(e) {
  ed = e;
}
function dh() {
  return ed;
}
const fh = {
  type: "3rdParty",
  init(e) {
    ch(e.options.react), uh(e);
  }
}, ph = Kt();
class mh {
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
const gh = (e, t) => {
  const n = z();
  return W(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function St(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = mt(ph) || {}, i = n || r || dh();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new mh()), !i) {
    is("You will need to pass in an i18next instance by using initReactI18next");
    const y = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, v = [y, {}, !1];
    return v.t = y, v.i18n = {}, v.ready = !1, v;
  }
  i.options.react && i.options.react.wait !== void 0 && is("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...lh(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = e || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((y) => rh(y, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, p] = q(d);
  let m = l.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = gh(m), h = z(!0);
  W(() => {
    const {
      bindI18n: y,
      bindI18nStore: v
    } = s;
    h.current = !0, !u && !a && (t.lng ? Qc(i, t.lng, l, () => {
      h.current && p(d);
    }) : Xc(i, l, () => {
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
  W(() => {
    h.current && !w.current && p(d), w.current = !1;
  }, [i, c]);
  const x = [f, i, u];
  if (x.t = f, x.i18n = i, x.ready = u, u || !u && !a)
    return x;
  throw new Promise((y) => {
    t.lng ? Qc(i, t.lng, l, () => y()) : Xc(i, l, () => y());
  });
}
be.use(fh).init({
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
        checkDocumentation: "Check out our documentation",
        appInfoLabel: "App info",
        appInfoInstruction: "Information about this plugin"
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
function Ce(e) {
  return Object.keys(e);
}
function Ii(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function _s(e, t) {
  const n = { ...e }, r = t;
  return Ii(e) && Ii(t) && Object.keys(t).forEach((o) => {
    Ii(r[o]) && o in e ? n[o] = _s(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function hh(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function bh(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function as(e) {
  const t = bh(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function Ri(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function td(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return "0";
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Ri(o) : o;
    }
    if (typeof r == "string") {
      if (r.startsWith("calc(") || r.startsWith("var(") || r.startsWith("clamp("))
        return r;
      if (r.includes(" "))
        return r.split(" ").map((i) => n(i)).join(" ");
      if (r.includes(e))
        return t ? Ri(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? Ri(i) : i;
      }
    }
    return r;
  }
  return n;
}
const D = td("rem", { shouldScale: !0 }), Zc = td("em");
function yr(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function nd(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Yt(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== b.Fragment : !1;
}
function $t(e) {
  const t = Kt(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => {
    const o = mt(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Fs(e = null) {
  const t = Kt(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => mt(t)];
}
function eo(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function cs(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function yh(e, t, n) {
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
function vh(e, t, n) {
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
function wh(e, t, n) {
  return cs(e, n) === cs(t, n);
}
function rd({
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
      ((m = cs(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => wh(a.currentTarget, g, e)), l = c.findIndex((g) => a.currentTarget === g), u = vh(l, c, r), d = yh(l, c, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
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
const xh = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function vr(e) {
  return xh[e];
}
const Sh = () => {
};
function Ch(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || Sh : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function se(e, t = "size", n = !0) {
  if (e !== void 0)
    return nd(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function to(e) {
  return se(e, "mantine-spacing");
}
function _e(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : se(e, "mantine-radius");
}
function Ge(e) {
  return se(e, "mantine-font-size");
}
function Eh(e) {
  return se(e, "mantine-line-height", !1);
}
function Ph(e) {
  if (e)
    return se(e, "mantine-shadow", !1);
}
function no(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function Dh(e, t) {
  return e in t.breakpoints ? as(t.breakpoints[e]) : as(e);
}
function od(e, t) {
  const n = e.map((r) => ({
    value: r,
    px: Dh(r, t)
  }));
  return n.sort((r, o) => r.px - o.px), n;
}
function Kn(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function id(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = id(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function gt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = id(e)) && (r && (r += " "), r += t);
  return r;
}
const Ih = {};
function Rh(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = gt(t[r], o) : t[r] = o;
    });
  }), t;
}
function Io({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || Ih
  );
  return Rh(i);
}
function ro({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function sd() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function nn(e) {
  const t = z(e);
  return W(() => {
    t.current = e;
  }), Ft(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ro(e, t) {
  const n = nn(e), r = z(0);
  return W(() => () => window.clearTimeout(r.current), []), Q(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const el = ["mousedown", "touchstart"];
function Oh(e, t, n) {
  const r = z();
  return W(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((l) => !!l && !i.composedPath().includes(l)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || el).forEach((i) => document.addEventListener(i, o)), () => {
      (t || el).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function Ah(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function $h(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function Nh(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = q(
    n ? t : $h(e, t)
  ), i = z();
  return W(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), Ah(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const wr = typeof document < "u" ? Eo : W;
function Gt(e, t) {
  const n = z(!1);
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
function Th({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = z(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Gt(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [e, t]), r;
}
function Lh(e, t = "body > :not(script)") {
  const n = sd(), r = Array.from(
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
const Mh = /input|select|textarea|button|object/, ad = "a, input, select, textarea, button, object, [tabindex]";
function kh(e) {
  return e.style.display === "none";
}
function _h(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (kh(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function cd(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function ls(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(cd(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (Mh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && _h(e);
}
function ld(e) {
  const t = cd(e);
  return (Number.isNaN(t) || t >= 0) && ls(e);
}
function Fh(e) {
  return Array.from(e.querySelectorAll(ad)).filter(ld);
}
function Bh(e, t) {
  const n = Fh(e);
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
function jh(e = !0) {
  const t = z(), n = z(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(ad));
      s = a.find(ld) || a.find(ls) || null, !s && ls(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = Q(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = Lh(i), t.current !== i && (i ? (setTimeout(() => {
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
      s.key === "Tab" && t.current && Bh(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const Vh = b["useId".toString()] || (() => {
});
function zh() {
  const e = Vh();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Ct(e) {
  const t = zh(), [n, r] = q(t);
  return wr(() => {
    r(sd());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function ud(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function dd(...e) {
  return (t) => {
    e.forEach((n) => ud(n, t));
  };
}
function Ne(...e) {
  return Q(dd(...e), e);
}
function It({
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
function fd(e, t) {
  return Nh("(prefers-reduced-motion: reduce)", e, t);
}
function Gh(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = q(e), s = Q(() => {
    i((l) => l || (n == null || n(), !0));
  }, [n]), a = Q(() => {
    i((l) => l && (r == null || r(), !1));
  }, [r]), c = Q(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: c }];
}
const pd = Kt(null);
function Bs() {
  const e = mt(pd);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Wh() {
  return Bs().cssVariablesResolver;
}
function Hh() {
  return Bs().classNamesPrefix;
}
function js() {
  return Bs().getStyleNonce;
}
function Uh(e) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(e);
}
function qh(e) {
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
function Kh(e) {
  const [t, n, r, o] = e.replace(/[^0-9,.]/g, "").split(",").map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function Yh(e) {
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
function md(e) {
  return Uh(e) ? qh(e) : e.startsWith("rgb") ? Kh(e) : e.startsWith("hsl") ? Yh(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Mr(e, t) {
  if (e.startsWith("var("))
    return e;
  const { r: n, g: r, b: o, a: i } = md(e), s = 1 - t, a = (c) => Math.round(c * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function us(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function Oo({
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
    value: i !== void 0 ? t.colors[r][i] : t.colors[r][us(t, n || "light")],
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
function wt(e, t) {
  const n = Oo({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function ds(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = wt(n.from, t), o = wt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Ae(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: n, g: r, b: o } = md(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Jh = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = Oo({ color: e, theme: t });
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
      hover: Mr(e, 0.1),
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
        background: Ae(i, 0.1),
        hover: Ae(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: Ae(e, 0.1),
      hover: Ae(e, 0.12),
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
      hover: Ae(t.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${D(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: Ae(e, 0.05),
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
        hover: Ae(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Ae(e, 0.12),
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
    hover: Mr(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Mr(t.white, 0.01),
    color: `var(--mantine-color-${o.color}-${o.shade})`,
    border: `${D(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Mr(t.white, 0.01),
    color: e,
    border: `${D(1)} solid transparent`
  } : n === "gradient" ? {
    background: ds(r, t),
    hover: ds(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${D(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Xh = {
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
}, tl = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Vs = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Xh,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Jh,
  fontFamily: tl,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: tl,
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
function nl(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Qh({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return nl(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && nl(r.newValue) && n(r.newValue);
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
const Zh = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", rl = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function Oi(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function ol(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Zh);
  if (typeof e.primaryShade == "object" && (!Oi(e.primaryShade.dark) || !Oi(e.primaryShade.light)))
    throw new Error(rl);
  if (typeof e.primaryShade == "number" && !Oi(e.primaryShade))
    throw new Error(rl);
}
function eb(e, t) {
  var r;
  if (!t)
    return ol(e), e;
  const n = _s(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), ol(n), n;
}
const zs = Kt(null), tb = () => mt(zs) || Vs;
function Ye() {
  const e = mt(zs);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function gd({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = tb(), o = Ft(
    () => eb(n ? r : Vs, e),
    [e, r, n]
  );
  return /* @__PURE__ */ b.createElement(zs.Provider, { value: o }, t);
}
gd.displayName = "@mantine/core/MantineThemeProvider";
function nb() {
  const e = Ye(), t = js(), n = Ce(e.breakpoints).reduce((r, o) => {
    const i = as(e.breakpoints[o]);
    return `${r}@media (max-width: ${Zc(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Zc(
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
function Ai(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function $i(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function rb(e, t) {
  const n = Ai(e.variables), r = n ? $i(t, n) : "", o = Ai(e.dark), i = o ? $i(`${t}[data-mantine-color-scheme="dark"]`, o) : "", s = Ai(e.light), a = s ? $i(`${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function yn(e, t, n) {
  Ce(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const hd = (e) => {
  const t = us(e, "dark"), n = us(e, "light"), r = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : D(e.defaultRadius), o = {
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
  yn(o.variables, e.breakpoints, "breakpoint"), yn(o.variables, e.spacing, "spacing"), yn(o.variables, e.fontSizes, "font-size"), yn(o.variables, e.lineHeights, "line-height"), yn(o.variables, e.shadows, "shadow"), yn(o.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((s, a) => {
    o.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${e.primaryColor}-${a})`;
  }), Ce(e.colors).forEach((s) => {
    e.colors[s].forEach((l, u) => {
      o.variables[`--mantine-color-${s}-${u}`] = l;
    });
    const a = `var(--mantine-color-${s}-${n === 9 ? 8 : n + 1})`, c = `var(--mantine-color-${s}-${t === 9 ? 8 : t + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-filled-hover`] = a, o.light[`--mantine-color-${s}-light`] = Ae(
      e.colors[s][n],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = Ae(
      e.colors[s][n],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline-hover`] = Ae(
      e.colors[s][n],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.dark[`--mantine-color-${s}-filled-hover`] = c, o.dark[`--mantine-color-${s}-light`] = Ae(
      e.colors[s][Math.max(0, t - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = Ae(
      e.colors[s][Math.max(0, t - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      t - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      t - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = Ae(
      e.colors[s][Math.max(t - 4, 0)],
      0.05
    );
  });
  const i = e.headings.sizes;
  return Ce(i).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = i[s].fontSize, o.variables[`--mantine-${s}-line-height`] = i[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = i[s].fontWeight || e.headings.fontWeight;
  }), o;
};
function ob({ theme: e, generator: t }) {
  const n = hd(e), r = t == null ? void 0 : t(e);
  return r ? _s(n, r) : n;
}
const Ni = hd(Vs);
function ib(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return Ce(e.variables).forEach((n) => {
    Ni.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), Ce(e.light).forEach((n) => {
    Ni.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), Ce(e.dark).forEach((n) => {
    Ni.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function sb(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function bd({ cssVariablesSelector: e }) {
  const t = Ye(), n = js(), r = Wh(), o = ob({ theme: t, generator: r }), i = e === ":root", s = i ? ib(o) : o, a = rb(s, e);
  return a ? /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${a}${i ? "" : sb(e)}`
      }
    }
  ) : null;
}
bd.displayName = "@mantine/CssVariables";
function ab() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function zn(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function cb({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = z(), [i, s] = q(() => e.get(t)), a = r || i, c = Q(
    (u) => {
      r || (zn(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), l = Q(() => {
    s(t), zn(t, n), e.clear();
  }, [e.clear, t]);
  return W(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), wr(() => {
    zn(e.get(t), n);
  }, []), W(() => {
    var d;
    if (r)
      return zn(r, n), () => {
      };
    o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && zn(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function lb({
  respectReducedMotion: e,
  getRootElement: t
}) {
  wr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
ab();
function yd({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = Qh(),
  defaultColorScheme: a = "light",
  getRootElement: c = () => document.documentElement,
  cssVariablesResolver: l,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = cb({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: c
  });
  return lb({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: c
  }), /* @__PURE__ */ b.createElement(
    pd.Provider,
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
    /* @__PURE__ */ b.createElement(gd, { theme: e }, r && /* @__PURE__ */ b.createElement(bd, { cssVariablesSelector: o }), /* @__PURE__ */ b.createElement(nb, null), t)
  );
}
yd.displayName = "@mantine/core/MantineProvider";
function vd({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = Ye();
  return {
    resolvedClassNames: Io({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0
    }),
    resolvedStyles: ro({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const ub = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function db({ theme: e, options: t, unstyled: n }) {
  return gt(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || ub[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function fb({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return Io({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e];
}
function pb({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return Io({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function mb({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function gb({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function hb({
  themeName: e,
  classNamesPrefix: t,
  selector: n
}) {
  return e.map((r) => `${t}-${r}-${n}`);
}
function bb({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (i) => {
      var s, a;
      return (a = Io({
        theme: t,
        classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function yb({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function vb({
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
  return gt(
    db({ theme: e, options: t, unstyled: a }),
    bb({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    yb({ options: t, classes: s, selector: r, unstyled: a }),
    pb({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    fb({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    mb({ rootSelector: l, selector: r, className: c }),
    gb({ selector: r, classes: s, unstyled: a }),
    hb({ themeName: n, classNamesPrefix: o, selector: r }),
    t == null ? void 0 : t.className
  );
}
function wb({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (i) => {
      var s;
      return ro({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, s) => ({ ...i, ...s }), {});
}
function fs({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...fs({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function xb(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...yr(n[r]) };
  }), t), {});
}
function Sb({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s
}) {
  var a;
  return (a = xb([
    t == null ? void 0 : t(n, r, o),
    ...s.map((c) => {
      var l, u, d;
      return (d = (u = (l = n.components) == null ? void 0 : l[c]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : a[i];
}
function Cb({
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
    ...wb({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...ro({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...ro({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...Sb({ theme: e, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? fs({ style: c, theme: e }) : null,
    ...fs({ style: r == null ? void 0 : r.style, theme: e })
  };
}
function K({
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
  const f = Ye(), p = Hh(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: vb({
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
    style: Cb({
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
  const r = Ye(), o = (s = r.components[e]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...yr(n) };
}
function il(e) {
  return Ce(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${hh(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function Eb({ selector: e, styles: t, media: n }) {
  const r = t ? il(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${il(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function Gs({ selector: e, styles: t, media: n }) {
  const r = js();
  return /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: { __html: Eb({ selector: e, styles: t, media: n }) }
    }
  );
}
function xr(e) {
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
    td: T,
    w: L,
    miw: k,
    maw: _,
    h: A,
    mih: M,
    mah: O,
    bgsz: F,
    bgp: $,
    bgr: H,
    bga: Y,
    pos: re,
    top: ye,
    left: ue,
    bottom: Te,
    right: ve,
    inset: oe,
    display: we,
    hiddenFrom: Fe,
    visibleFrom: Pe,
    lightHidden: De,
    darkHidden: Be,
    ...ce
  } = e;
  return { styleProps: yr({
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
    td: T,
    w: L,
    miw: k,
    maw: _,
    h: A,
    mih: M,
    mah: O,
    bgsz: F,
    bgp: $,
    bgr: H,
    bga: Y,
    pos: re,
    top: ye,
    left: ue,
    bottom: Te,
    right: ve,
    inset: oe,
    display: we,
    hiddenFrom: Fe,
    visibleFrom: Pe,
    lightHidden: De,
    darkHidden: Be
  }), rest: ce };
}
const Pb = {
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
function Db(e, t) {
  const n = Oo({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : n.variable ? `var(${n.variable})` : n.color;
}
function Ib(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "number" || typeof e == "string" ? D(e) : e;
}
function Rb(e) {
  return e;
}
function Ob(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : e;
}
function Ab(e) {
  return typeof e == "number" ? D(e) : e;
}
function $b(e, t) {
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
const Ti = {
  color: Db,
  fontSize: Ib,
  spacing: $b,
  identity: Rb,
  size: Ab,
  lineHeight: Ob
};
function sl(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function Nb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(sl(o)) - Number(sl(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function Tb(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function Lb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Mb(e) {
  return typeof e == "object" && e !== null ? Ce(e).filter((t) => t !== "base") : [];
}
function kb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function _b({
  styleProps: e,
  data: t,
  theme: n
}) {
  return Nb(
    Ce(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = Lb(e[o]);
        if (!Tb(e[o]))
          return s.forEach((l) => {
            r.inlineStyles[l] = Ti[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = Mb(e[o]);
        return s.forEach((l) => {
          a && (r.styles[l] = Ti[i.type](a, n)), c.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: Ti[i.type](
                kb(e[o], u),
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
function Ws() {
  return `__m__-${Vu().replace(/:/g, "")}`;
}
function Hs(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Hs(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function wd(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function Fb(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[wd(n)] = e[n]), t;
  }, {});
}
function xd(e) {
  return e ? typeof e == "string" ? { [wd(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...xd(n) }),
    {}
  ) : Fb(e) : null;
}
function ps(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ps(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Bb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = ps(t, e), i = ps(n, e);
  return { ...o, ...i, ...r };
}
const Sd = ie(
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
    const m = Ye(), g = e || "div", { styleProps: h, rest: w } = xr(f), x = Ws(), y = _b({
      styleProps: h,
      theme: m,
      data: Pb
    }), v = {
      ref: p,
      style: Bb({
        theme: m,
        style: t,
        vars: n,
        styleProps: y.inlineStyles
      }),
      className: gt(r, {
        [x]: y.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": nd(s) ? void 0 : s || void 0,
      ...xd(i),
      ...w
    };
    return /* @__PURE__ */ b.createElement(b.Fragment, null, y.hasResponsiveStyles && /* @__PURE__ */ b.createElement(
      Gs,
      {
        selector: `.${x}`,
        styles: y.styles,
        media: y.media
      }
    ), typeof d == "function" ? d(v) : /* @__PURE__ */ b.createElement(g, { ...v }));
  }
);
Sd.displayName = "@mantine/core/Box";
const V = Sd;
function Cd(e) {
  return e;
}
function U(e) {
  const t = ie(e);
  return t.extend = Cd, t;
}
function Nt(e) {
  const t = ie(e);
  return t.extend = Cd, t;
}
const jb = Kt({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Sr() {
  return mt(jb);
}
function Vb(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Li(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const Gn = typeof window < "u" && window.requestAnimationFrame;
function zb({
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
    Ls(() => c(m));
  }, u = (m) => {
    l((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || Vb(m)}ms ${t}`
    };
  }
  Gt(() => {
    typeof Gn == "function" && Gn(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), Gn(() => {
        const m = Li(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Li(o);
      u({ ...d(m), willChange: "height", height: m }), Gn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Li(o);
        g === a.height ? l({}) : u({ height: g }), n();
      } else
        a.height === i && (l(s), n());
  };
  function p({ style: m = {}, refKey: g = "ref", ...h } = {}) {
    const w = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: dd(o, w),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const Gb = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, Ed = U((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = j("Collapse", Gb, e), u = Ye(), d = fd(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = zb({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ b.createElement(V, { ...l }, n) : null : /* @__PURE__ */ b.createElement(V, { ...m({ style: Hs(s, u), ref: t, ...l }) }, /* @__PURE__ */ b.createElement(
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
Ed.displayName = "@mantine/core/Collapse";
const [Wb, ot] = $t(
  "ScrollArea.Root component was not found in tree"
);
function xn(e, t) {
  const n = nn(t);
  wr(() => {
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
const Hb = b.forwardRef((e, t) => {
  const { style: n, ...r } = e, o = ot(), [i, s] = b.useState(0), [a, c] = b.useState(0), l = !!(i && a);
  return xn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), xn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ b.createElement("div", { ...r, ref: t, style: { ...n, width: i, height: a } }) : null;
}), Ub = b.forwardRef(
  (e, t) => {
    const n = ot(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ b.createElement(Hb, { ...e, ref: t }) : null;
  }
), qb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, Pd = ie((e, t) => {
  const n = j("ScrollAreaRoot", qb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, c] = q(null), [l, u] = q(null), [d, f] = q(null), [p, m] = q(null), [g, h] = q(null), [w, x] = q(0), [y, v] = q(0), [S, C] = q(!1), [P, E] = q(!1), N = Ne(t, (T) => c(T));
  return /* @__PURE__ */ b.createElement(
    Wb,
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
Pd.displayName = "@mantine/core/ScrollAreaRoot";
function Dd(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Ao(e) {
  const t = Dd(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Id(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Kb(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function al(e, t, n = "ltr") {
  const r = Ao(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = Kb(e, c);
  return Id([0, s], [0, a])(l);
}
function Yb(e, t, n, r = "ltr") {
  const o = Ao(n), i = o / 2, s = t || i, a = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return Id([c, l], d)(e);
}
function Rd(e, t) {
  return e > 0 && e < t;
}
function oo(e) {
  return e ? parseInt(e, 10) : 0;
}
function on(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [Jb, Od] = $t(
  "ScrollAreaScrollbar was not found in tree"
), Ad = ie((e, t) => {
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
  } = e, f = ot(), [p, m] = b.useState(null), g = Ne(t, (E) => m(E)), h = b.useRef(null), w = b.useRef(""), { viewport: x } = f, y = n.content - n.viewport, v = nn(l), S = nn(a), C = Ro(u, 10), P = (E) => {
    if (h.current) {
      const N = E.clientX - h.current.left, T = E.clientY - h.current.top;
      c({ x: N, y: T });
    }
  };
  return W(() => {
    const E = (N) => {
      const T = N.target;
      (p == null ? void 0 : p.contains(T)) && v(N, y);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [x, p, y, v]), W(S, [n, S]), xn(p, C), xn(f.content, C), /* @__PURE__ */ b.createElement(
    Jb,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: nn(o),
        onThumbPointerUp: nn(i),
        onThumbPositionChange: S,
        onThumbPointerDown: nn(s)
      }
    },
    /* @__PURE__ */ b.createElement(
      "div",
      {
        ...d,
        ref: g,
        style: { position: "absolute", ...d.style },
        onPointerDown: on(e.onPointerDown, (E) => {
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(E));
        }),
        onPointerMove: on(e.onPointerMove, P),
        onPointerUp: on(e.onPointerUp, (E) => {
          const N = E.target;
          N.hasPointerCapture(E.pointerId) && N.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = w.current, h.current = null;
        })
      }
    )
  );
}), Xb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = ot(), [a, c] = q(), l = z(null), u = Ne(t, l, s.onScrollbarXChange);
    return W(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      Ad,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${Ao(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), Rd(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: oo(a.paddingLeft),
              paddingEnd: oo(a.paddingRight)
            }
          });
        }
      }
    );
  }
), Qb = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = ot(), [a, c] = b.useState(), l = z(null), u = Ne(t, l, s.onScrollbarYChange);
    return W(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ b.createElement(
      Ad,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${Ao(n)}px`,
          ...o
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), Rd(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: oo(a.paddingTop),
              paddingEnd: oo(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), Us = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = Sr(), i = ot(), s = z(null), a = z(0), [c, l] = q({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Dd(c.viewport, c.content), d = {
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
  }, f = (p, m) => Yb(p, a.current, c, m);
  return n === "horizontal" ? /* @__PURE__ */ b.createElement(
    Xb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = al(p, c, o);
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
    Qb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = al(p, c);
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
}), $d = ie(
  (e, t) => {
    const n = ot(), { forceMount: r, ...o } = e, [i, s] = q(!1), a = e.orientation === "horizontal", c = Ro(() => {
      if (n.viewport) {
        const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return xn(n.viewport, c), xn(n.content, c), r || i ? /* @__PURE__ */ b.createElement(
      Us,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), Zb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ot(), [i, s] = q(!1);
    return W(() => {
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
      $d,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), ey = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ot(), i = e.orientation === "horizontal", [s, a] = q("hidden"), c = Ro(() => a("idle"), 100);
    return W(() => {
      if (s === "idle") {
        const l = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [s, o.scrollHideDelay]), W(() => {
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
      Us,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: on(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: on(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), cl = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ot(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return b.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ b.createElement(Zb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ b.createElement(ey, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ b.createElement($d, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ b.createElement(Us, { ...r, ref: t }) : null;
  }
);
function ty(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const ny = ie((e, t) => {
  const { style: n, ...r } = e, o = ot(), i = Od(), { onThumbPositionChange: s } = i, a = Ne(t, (u) => i.onThumbChange(u)), c = z(), l = Ro(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = ty(u, s);
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
      onPointerDownCapture: on(e.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), p = u.clientX - f.left, m = u.clientY - f.top;
        i.onThumbPointerDown({ x: p, y: m });
      }),
      onPointerUp: on(e.onPointerUp, i.onThumbPointerUp)
    }
  );
}), ll = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Od();
    return n || o.hasThumb ? /* @__PURE__ */ b.createElement(ny, { ref: t, ...r }) : null;
  }
), Nd = ie(
  ({ children: e, style: t, ...n }, r) => {
    const o = ot(), i = Ne(r, o.onViewportChange);
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
Nd.displayName = "@mantine/core/ScrollAreaViewport";
var qs = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const Td = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, ry = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), Cr = U((e, t) => {
  const n = j("ScrollArea", Td, e), {
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
  } = n, [y, v] = q(!1), S = K({
    name: "ScrollArea",
    props: n,
    classes: qs,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: ry
  });
  return /* @__PURE__ */ b.createElement(
    Pd,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: w,
      ...S("root"),
      ...x
    },
    /* @__PURE__ */ b.createElement(
      Nd,
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
      cl,
      {
        ...S("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(ll, { ...S("thumb") })
    ),
    (w === "xy" || w === "y") && /* @__PURE__ */ b.createElement(
      cl,
      {
        ...S("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(ll, { ...S("thumb") })
    ),
    /* @__PURE__ */ b.createElement(
      Ub,
      {
        ...S("corner"),
        "data-hovered": y || void 0,
        "data-hidden": u === "never" || void 0
      }
    )
  );
});
Cr.displayName = "@mantine/core/ScrollArea";
const Ks = U((e, t) => {
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
  } = j("ScrollAreaAutosize", Td, e);
  return /* @__PURE__ */ b.createElement(V, { ...x, ref: t, style: [{ display: "flex" }, h] }, /* @__PURE__ */ b.createElement(V, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ b.createElement(
    Cr,
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
Cr.classes = qs;
Ks.displayName = "@mantine/core/ScrollAreaAutosize";
Ks.classes = qs;
Cr.Autosize = Ks;
var Ld = { root: "m-87cf2631" };
const oy = {
  __staticSelector: "UnstyledButton"
}, dn = Nt(
  (e, t) => {
    const n = j("UnstyledButton", oy, e), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: c,
      style: l,
      ...u
    } = n, d = K({
      name: i,
      props: n,
      classes: Ld,
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
dn.classes = Ld;
dn.displayName = "@mantine/core/UnstyledButton";
const ft = Math.min, xe = Math.max, io = Math.round, kr = Math.floor, Wt = (e) => ({
  x: e,
  y: e
}), iy = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sy = {
  start: "end",
  end: "start"
};
function ms(e, t, n) {
  return xe(e, ft(t, n));
}
function Rt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pt(e) {
  return e.split("-")[0];
}
function Nn(e) {
  return e.split("-")[1];
}
function Ys(e) {
  return e === "x" ? "y" : "x";
}
function Js(e) {
  return e === "y" ? "height" : "width";
}
function fn(e) {
  return ["top", "bottom"].includes(pt(e)) ? "y" : "x";
}
function Xs(e) {
  return Ys(fn(e));
}
function ay(e, t, n) {
  n === void 0 && (n = !1);
  const r = Nn(e), o = Xs(e), i = Js(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = so(s)), [s, so(s)];
}
function cy(e) {
  const t = so(e);
  return [gs(e), t, gs(t)];
}
function gs(e) {
  return e.replace(/start|end/g, (t) => sy[t]);
}
function ly(e, t, n) {
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
function uy(e, t, n, r) {
  const o = Nn(e);
  let i = ly(pt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(gs)))), i;
}
function so(e) {
  return e.replace(/left|right|bottom|top/g, (t) => iy[t]);
}
function dy(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qs(e) {
  return typeof e != "number" ? dy(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Sn(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function ul(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = fn(t), s = Xs(t), a = Js(s), c = pt(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Nn(t)) {
    case "start":
      p[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const fy = async (e, t, n) => {
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
  } = ul(l, r, c), f = r, p = {}, m = 0;
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
      } = ul(l, f, c)), g = -1;
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
async function Zs(e, t) {
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
  } = Rt(t, e), m = Qs(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], w = Sn(await i.getClippingRect({
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
  }, S = Sn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const dl = (e) => ({
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
    } = Rt(e, t) || {};
    if (l == null)
      return {};
    const d = Qs(u), f = {
      x: n,
      y: r
    }, p = Xs(o), m = Js(p), g = await s.getDimensions(l), h = p === "y", w = h ? "top" : "left", x = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", v = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let P = C ? C[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[y] || i.floating[m]);
    const E = v / 2 - S / 2, N = P / 2 - g[m] / 2 - 1, T = ft(d[w], N), L = ft(d[x], N), k = T, _ = P - g[m] - L, A = P / 2 - g[m] / 2 + E, M = ms(k, A, _), O = !c.arrow && Nn(o) != null && A != M && i.reference[m] / 2 - (A < k ? T : L) - g[m] / 2 < 0, F = O ? A < k ? A - k : A - _ : 0;
    return {
      [p]: f[p] + F,
      data: {
        [p]: M,
        centerOffset: A - M - F,
        ...O && {
          alignmentOffset: F
        }
      },
      reset: O
    };
  }
}), Md = function(e) {
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
      } = Rt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = pt(o), x = pt(a) === a, y = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), v = f || (x || !g ? [so(a)] : cy(a));
      !f && m !== "none" && v.push(...uy(a, g, m, y));
      const S = [a, ...v], C = await Zs(t, h), P = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(C[w]), d) {
        const k = ay(o, s, y);
        P.push(C[k[0]], C[k[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((k) => k <= 0)) {
        var N, T;
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
        let A = (T = E.filter((M) => M.overflows[0] <= 0).sort((M, O) => M.overflows[1] - O.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var L;
              const M = (L = E.map((O) => [O.placement, O.overflows.filter((F) => F > 0).reduce((F, $) => F + $, 0)]).sort((O, F) => O[1] - F[1])[0]) == null ? void 0 : L[0];
              M && (A = M);
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
function kd(e) {
  const t = ft(...e.map((i) => i.left)), n = ft(...e.map((i) => i.top)), r = xe(...e.map((i) => i.right)), o = xe(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function py(e) {
  const t = e.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => Sn(kd(o)));
}
const _d = function(e) {
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
      } = Rt(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = py(u), f = Sn(kd(u)), p = Qs(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((h) => c > h.left - p.left && c < h.right + p.right && l > h.top - p.top && l < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (fn(n) === "y") {
            const T = d[0], L = d[d.length - 1], k = pt(n) === "top", _ = T.top, A = L.bottom, M = k ? T.left : L.left, O = k ? T.right : L.right, F = O - M, $ = A - _;
            return {
              top: _,
              bottom: A,
              left: M,
              right: O,
              width: F,
              height: $,
              x: M,
              y: _
            };
          }
          const h = pt(n) === "left", w = xe(...d.map((T) => T.right)), x = ft(...d.map((T) => T.left)), y = d.filter((T) => h ? T.left === x : T.right === w), v = y[0].top, S = y[y.length - 1].bottom, C = x, P = w, E = P - C, N = S - v;
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
async function my(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pt(n), a = Nn(n), c = fn(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, d = Rt(t, e);
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
const Fd = function(e) {
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
      } = t, c = await my(t, e);
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
}, ea = function(e) {
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
      } = Rt(e, t), l = {
        x: n,
        y: r
      }, u = await Zs(t, c), d = fn(pt(o)), f = Ys(d);
      let p = l[f], m = l[d];
      if (i) {
        const h = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", x = p + u[h], y = p - u[w];
        p = ms(x, p, y);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", x = m + u[h], y = m - u[w];
        m = ms(x, m, y);
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
}, gy = function(e) {
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
      } = Rt(e, t), u = {
        x: n,
        y: r
      }, d = fn(o), f = Ys(d);
      let p = u[f], m = u[d];
      const g = Rt(a, t), h = typeof g == "number" ? {
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
        const y = f === "y" ? "width" : "height", v = ["top", "left"].includes(pt(o)), S = i.reference[d] - i.floating[y] + (v && ((w = s.offset) == null ? void 0 : w[d]) || 0) + (v ? 0 : h.crossAxis), C = i.reference[d] + i.reference[y] + (v ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (v ? h.crossAxis : 0);
        m < S ? m = S : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, hy = function(e) {
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
      } = Rt(e, t), c = await Zs(t, a), l = pt(n), u = Nn(n), d = fn(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const h = p - c[m], w = f - c[g], x = !t.middlewareData.shift;
      let y = h, v = w;
      if (d) {
        const C = f - c.left - c.right;
        v = u || x ? ft(w, C) : C;
      } else {
        const C = p - c.top - c.bottom;
        y = u || x ? ft(h, C) : C;
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
function Ht(e) {
  return Bd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tt(e) {
  var t;
  return (t = (Bd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Bd(e) {
  return e instanceof Node || e instanceof We(e).Node;
}
function Ot(e) {
  return e instanceof Element || e instanceof We(e).Element;
}
function xt(e) {
  return e instanceof HTMLElement || e instanceof We(e).HTMLElement;
}
function fl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot;
}
function Er(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function by(e) {
  return ["table", "td", "th"].includes(Ht(e));
}
function ta(e) {
  const t = na(), n = rt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function yy(e) {
  let t = Cn(e);
  for (; xt(t) && !$o(t); ) {
    if (ta(t))
      return t;
    t = Cn(t);
  }
  return null;
}
function na() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function $o(e) {
  return ["html", "body", "#document"].includes(Ht(e));
}
function rt(e) {
  return We(e).getComputedStyle(e);
}
function No(e) {
  return Ot(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Cn(e) {
  if (Ht(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    fl(e) && e.host || // Fallback.
    Tt(e)
  );
  return fl(t) ? t.host : t;
}
function jd(e) {
  const t = Cn(e);
  return $o(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xt(t) && Er(t) ? t : jd(t);
}
function Pt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = jd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = We(o);
  return i ? t.concat(s, s.visualViewport || [], Er(o) ? o : [], s.frameElement && n ? Pt(s.frameElement) : []) : t.concat(o, Pt(o, [], n));
}
function Vd(e) {
  const t = rt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = xt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = io(n) !== i || io(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function ra(e) {
  return Ot(e) ? e : e.contextElement;
}
function wn(e) {
  const t = ra(e);
  if (!xt(t))
    return Wt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Vd(t);
  let s = (i ? io(n.width) : n.width) / r, a = (i ? io(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const vy = /* @__PURE__ */ Wt(0);
function zd(e) {
  const t = We(e);
  return !na() || !t.visualViewport ? vy : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function wy(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== We(e) ? !1 : t;
}
function an(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = ra(e);
  let s = Wt(1);
  t && (r ? Ot(r) && (s = wn(r)) : s = wn(e));
  const a = wy(i, n, r) ? zd(i) : Wt(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = We(i), p = r && Ot(r) ? We(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = wn(m), h = m.getBoundingClientRect(), w = rt(m), x = h.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, y = h.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      c *= g.x, l *= g.y, u *= g.x, d *= g.y, c += x, l += y, m = We(m).frameElement;
    }
  }
  return Sn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function xy(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = xt(n), i = Tt(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Wt(1);
  const c = Wt(0);
  if ((o || !o && r !== "fixed") && ((Ht(n) !== "body" || Er(i)) && (s = No(n)), xt(n))) {
    const l = an(n);
    a = wn(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + c.x,
    y: t.y * a.y - s.scrollTop * a.y + c.y
  };
}
function Sy(e) {
  return Array.from(e.getClientRects());
}
function Gd(e) {
  return an(Tt(e)).left + No(e).scrollLeft;
}
function Cy(e) {
  const t = Tt(e), n = No(e), r = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Gd(e);
  const a = -n.scrollTop;
  return rt(r).direction === "rtl" && (s += xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Ey(e, t) {
  const n = We(e), r = Tt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = na();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function Py(e, t) {
  const n = an(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = xt(e) ? wn(e) : Wt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function pl(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ey(e, n);
  else if (t === "document")
    r = Cy(Tt(e));
  else if (Ot(t))
    r = Py(t, n);
  else {
    const o = zd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Sn(r);
}
function Wd(e, t) {
  const n = Cn(e);
  return n === t || !Ot(n) || $o(n) ? !1 : rt(n).position === "fixed" || Wd(n, t);
}
function Dy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Pt(e, [], !1).filter((a) => Ot(a) && Ht(a) !== "body"), o = null;
  const i = rt(e).position === "fixed";
  let s = i ? Cn(e) : e;
  for (; Ot(s) && !$o(s); ) {
    const a = rt(s), c = ta(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Er(s) && !c && Wd(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Cn(s);
  }
  return t.set(e, r), r;
}
function Iy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Dy(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((l, u) => {
    const d = pl(t, u, o);
    return l.top = xe(d.top, l.top), l.right = ft(d.right, l.right), l.bottom = ft(d.bottom, l.bottom), l.left = xe(d.left, l.left), l;
  }, pl(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ry(e) {
  return Vd(e);
}
function Oy(e, t, n) {
  const r = xt(t), o = Tt(t), i = n === "fixed", s = an(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Wt(0);
  if (r || !r && !i)
    if ((Ht(t) !== "body" || Er(o)) && (a = No(t)), r) {
      const l = an(t, !0, i, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = Gd(o));
  return {
    x: s.left + a.scrollLeft - c.x,
    y: s.top + a.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function ml(e, t) {
  return !xt(e) || rt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Hd(e, t) {
  const n = We(e);
  if (!xt(e))
    return n;
  let r = ml(e, t);
  for (; r && by(r) && rt(r).position === "static"; )
    r = ml(r, t);
  return r && (Ht(r) === "html" || Ht(r) === "body" && rt(r).position === "static" && !ta(r)) ? n : r || yy(e) || n;
}
const Ay = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Hd, i = this.getDimensions;
  return {
    reference: Oy(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function $y(e) {
  return rt(e).direction === "rtl";
}
const Ny = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xy,
  getDocumentElement: Tt,
  getClippingRect: Iy,
  getOffsetParent: Hd,
  getElementRects: Ay,
  getClientRects: Sy,
  getDimensions: Ry,
  getScale: wn,
  isElement: Ot,
  isRTL: $y
};
function Ty(e, t) {
  let n = null, r;
  const o = Tt(e);
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
    const p = kr(u), m = kr(o.clientWidth - (l + d)), g = kr(o.clientHeight - (u + f)), h = kr(l), x = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: xe(0, ft(1, c)) || 1
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
function Ly(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ra(e), u = o || i ? [...l ? Pt(l) : [], ...Pt(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = l && a ? Ty(l, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, g = c ? an(e) : null;
  c && h();
  function h() {
    const w = an(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const My = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ny,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return fy(e, t, {
    ...o,
    platform: i
  });
}, Ud = (e) => {
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
      return r && t(r) ? r.current != null ? dl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? dl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Wr = typeof document < "u" ? Eo : W;
function ao(e, t) {
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
        if (!ao(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !ao(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function qd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gl(e, t) {
  const n = qd(e);
  return Math.round(t * n) / n;
}
function hl(e) {
  const t = R.useRef(e);
  return Wr(() => {
    t.current = e;
  }), t;
}
function ky(e) {
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
  ao(f, r) || p(r);
  const [m, g] = R.useState(null), [h, w] = R.useState(null), x = R.useCallback((O) => {
    O != C.current && (C.current = O, g(O));
  }, [g]), y = R.useCallback((O) => {
    O !== P.current && (P.current = O, w(O));
  }, [w]), v = i || m, S = s || h, C = R.useRef(null), P = R.useRef(null), E = R.useRef(u), N = hl(c), T = hl(o), L = R.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: f
    };
    T.current && (O.platform = T.current), My(C.current, P.current, O).then((F) => {
      const $ = {
        ...F,
        isPositioned: !0
      };
      k.current && !ao(E.current, $) && (E.current = $, ng.flushSync(() => {
        d($);
      }));
    });
  }, [f, t, n, T]);
  Wr(() => {
    l === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [l]);
  const k = R.useRef(!1);
  Wr(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Wr(() => {
    if (v && (C.current = v), S && (P.current = S), v && S) {
      if (N.current)
        return N.current(v, S, L);
      L();
    }
  }, [v, S, L, N]);
  const _ = R.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: x,
    setFloating: y
  }), [x, y]), A = R.useMemo(() => ({
    reference: v,
    floating: S
  }), [v, S]), M = R.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return O;
    const F = gl(A.floating, u.x), $ = gl(A.floating, u.y);
    return a ? {
      ...O,
      transform: "translate(" + F + "px, " + $ + "px)",
      ...qd(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: $
    };
  }, [n, a, A.floating, u.x, u.y]);
  return R.useMemo(() => ({
    ...u,
    update: L,
    refs: _,
    elements: A,
    floatingStyles: M
  }), [u, L, _, A, M]);
}
var Dt = typeof document < "u" ? Eo : W;
let Mi = !1, _y = 0;
const bl = () => "floating-ui-" + _y++;
function Fy() {
  const [e, t] = R.useState(() => Mi ? bl() : void 0);
  return Dt(() => {
    e == null && t(bl());
  }, []), R.useEffect(() => {
    Mi || (Mi = !0);
  }, []), e;
}
const By = R[/* @__PURE__ */ "useId".toString()], Kd = By || Fy;
function jy() {
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
const Vy = /* @__PURE__ */ R.createContext(null), zy = /* @__PURE__ */ R.createContext(null), Yd = () => {
  var e;
  return ((e = R.useContext(Vy)) == null ? void 0 : e.id) || null;
}, oa = () => R.useContext(zy);
function _t(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Gy() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Wy() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function To(e) {
  return _t(e).defaultView || window;
}
function yt(e) {
  return e ? e instanceof Element || e instanceof To(e).Element : !1;
}
function Jd(e) {
  return e ? e instanceof HTMLElement || e instanceof To(e).HTMLElement : !1;
}
function Hy(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = To(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Uy(e) {
  if (e.mozInputSource === 0 && e.isTrusted)
    return !0;
  const t = /Android/i;
  return (t.test(Gy()) || t.test(Wy())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function qy(e) {
  return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
}
function Xd(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function Ky(e) {
  return "nativeEvent" in e;
}
function hs(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Hy(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function Qd(e) {
  return "data-floating-ui-" + e;
}
function yl(e) {
  const t = z(e);
  return Dt(() => {
    t.current = e;
  }), t;
}
const vl = /* @__PURE__ */ Qd("safe-polygon");
function Hr(e, t, n) {
  return n && !Xd(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function Yy(e, t) {
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
  } = t, g = oa(), h = Yd(), w = yl(d), x = yl(u), y = R.useRef(), v = R.useRef(), S = R.useRef(), C = R.useRef(), P = R.useRef(!0), E = R.useRef(!1), N = R.useRef(() => {
  }), T = R.useCallback(() => {
    var A;
    const M = (A = o.current.openEvent) == null ? void 0 : A.type;
    return (M == null ? void 0 : M.includes("mouse")) && M !== "mousedown";
  }, [o]);
  R.useEffect(() => {
    if (!l)
      return;
    function A() {
      clearTimeout(v.current), clearTimeout(C.current), P.current = !0;
    }
    return i.on("dismiss", A), () => {
      i.off("dismiss", A);
    };
  }, [l, i]), R.useEffect(() => {
    if (!l || !w.current || !n)
      return;
    function A(O) {
      T() && r(!1, O);
    }
    const M = _t(a).documentElement;
    return M.addEventListener("mouseleave", A), () => {
      M.removeEventListener("mouseleave", A);
    };
  }, [a, n, r, l, w, o, T]);
  const L = R.useCallback(function(A, M) {
    M === void 0 && (M = !0);
    const O = Hr(x.current, "close", y.current);
    O && !S.current ? (clearTimeout(v.current), v.current = setTimeout(() => r(!1, A), O)) : M && (clearTimeout(v.current), r(!1, A));
  }, [x, r]), k = R.useCallback(() => {
    N.current(), S.current = void 0;
  }, []), _ = R.useCallback(() => {
    if (E.current) {
      const A = _t(c.floating.current).body;
      A.style.pointerEvents = "", A.removeAttribute(vl), E.current = !1;
    }
  }, [c]);
  return R.useEffect(() => {
    if (!l)
      return;
    function A() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function M($) {
      if (clearTimeout(v.current), P.current = !1, f && !Xd(y.current) || p > 0 && Hr(x.current, "open") === 0)
        return;
      const H = Hr(x.current, "open", y.current);
      H ? v.current = setTimeout(() => {
        r(!0, $);
      }, H) : r(!0, $);
    }
    function O($) {
      if (A())
        return;
      N.current();
      const H = _t(a);
      if (clearTimeout(C.current), w.current) {
        n || clearTimeout(v.current), S.current = w.current({
          ...e,
          tree: g,
          x: $.clientX,
          y: $.clientY,
          onClose() {
            _(), k(), L($);
          }
        });
        const re = S.current;
        H.addEventListener("mousemove", re), N.current = () => {
          H.removeEventListener("mousemove", re);
        };
        return;
      }
      (y.current === "touch" ? !hs(a, $.relatedTarget) : !0) && L($);
    }
    function F($) {
      A() || w.current == null || w.current({
        ...e,
        tree: g,
        x: $.clientX,
        y: $.clientY,
        onClose() {
          _(), k(), L($);
        }
      })($);
    }
    if (yt(s)) {
      const $ = s;
      return n && $.addEventListener("mouseleave", F), a == null || a.addEventListener("mouseleave", F), m && $.addEventListener("mousemove", M, {
        once: !0
      }), $.addEventListener("mouseenter", M), $.addEventListener("mouseleave", O), () => {
        n && $.removeEventListener("mouseleave", F), a == null || a.removeEventListener("mouseleave", F), m && $.removeEventListener("mousemove", M), $.removeEventListener("mouseenter", M), $.removeEventListener("mouseleave", O);
      };
    }
  }, [s, a, l, e, f, p, m, L, k, _, r, n, g, x, w, o]), Dt(() => {
    var A;
    if (l && n && (A = w.current) != null && A.__options.blockPointerEvents && T()) {
      const F = _t(a).body;
      if (F.setAttribute(vl, ""), F.style.pointerEvents = "none", E.current = !0, yt(s) && a) {
        var M, O;
        const $ = s, H = g == null || (M = g.nodesRef.current.find((Y) => Y.id === h)) == null || (O = M.context) == null ? void 0 : O.elements.floating;
        return H && (H.style.pointerEvents = ""), $.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          $.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [l, n, h, a, s, g, w, o, T]), Dt(() => {
    n || (y.current = void 0, k(), _());
  }, [n, k, _]), R.useEffect(() => () => {
    k(), clearTimeout(v.current), clearTimeout(C.current), _();
  }, [l, k, _]), R.useMemo(() => {
    if (!l)
      return {};
    function A(M) {
      y.current = M.pointerType;
    }
    return {
      reference: {
        onPointerDown: A,
        onPointerEnter: A,
        onMouseMove(M) {
          n || p === 0 || (clearTimeout(C.current), C.current = setTimeout(() => {
            P.current || r(!0, M.nativeEvent);
          }, p));
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(v.current);
        },
        onMouseLeave(M) {
          i.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: !1
            }
          }), L(M.nativeEvent, !1);
        }
      }
    };
  }, [i, l, p, n, r, L]);
}
const Zd = /* @__PURE__ */ R.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), ef = () => R.useContext(Zd), Jy = (e) => {
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
  return Dt(() => {
    o.currentId ? s.current === null ? s.current = o.currentId : i({
      isInstantPhase: !0
    }) : (i({
      isInstantPhase: !1
    }), s.current = null);
  }, [o.currentId]), /* @__PURE__ */ R.createElement(Zd.Provider, {
    value: R.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, Xy = (e, t) => {
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
  } = ef();
  Dt(() => {
    i && (c({
      delay: {
        open: 1,
        close: Hr(a, "close")
      }
    }), i !== o && r(!1));
  }, [o, r, c, i, a]), Dt(() => {
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
  }, [n, c, i, o, r, a, l]), Dt(() => {
    n && s(o);
  }, [n, s, o]);
};
function Qy(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null; ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function ki(e, t) {
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
function Zy(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const ev = R[/* @__PURE__ */ "useInsertionEffect".toString()], tv = ev || ((e) => e());
function Ur(e) {
  const t = R.useRef(() => {
  });
  return tv(() => {
    t.current = e;
  }), R.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function qr(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
const nv = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, rv = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, ov = (e) => {
  var t, n;
  return {
    escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function iv(e, t) {
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
  } = t, x = oa(), y = Yd() != null, v = Ur(typeof f == "function" ? f : () => !1), S = typeof f == "function" ? v : f, C = R.useRef(!1), {
    escapeKeyBubbles: P,
    outsidePressBubbles: E
  } = ov(w), N = Ur((L) => {
    if (!n || !u || !d || L.key !== "Escape")
      return;
    const k = x ? ki(x.nodesRef.current, i) : [];
    if (!P && (L.stopPropagation(), k.length > 0)) {
      let _ = !0;
      if (k.forEach((A) => {
        var M;
        if ((M = A.context) != null && M.open && !A.context.dataRef.current.__escapeKeyBubbles) {
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
    }), r(!1, Ky(L) ? L.nativeEvent : L);
  }), T = Ur((L) => {
    const k = C.current;
    if (C.current = !1, k || typeof S == "function" && !S(L))
      return;
    const _ = Zy(L);
    if (Jd(_) && c) {
      const O = _.clientWidth > 0 && _.scrollWidth > _.clientWidth, F = _.clientHeight > 0 && _.scrollHeight > _.clientHeight;
      let $ = F && L.offsetX > _.clientWidth;
      if (F && To(c).getComputedStyle(_).direction === "rtl" && ($ = L.offsetX <= _.offsetWidth - _.clientWidth), $ || O && L.offsetY > _.clientHeight)
        return;
    }
    const A = x && ki(x.nodesRef.current, i).some((O) => {
      var F;
      return qr(L, (F = O.context) == null ? void 0 : F.elements.floating);
    });
    if (qr(L, c) || qr(L, a) || A)
      return;
    const M = x ? ki(x.nodesRef.current, i) : [];
    if (M.length > 0) {
      let O = !0;
      if (M.forEach((F) => {
        var $;
        if (($ = F.context) != null && $.open && !F.context.dataRef.current.__outsidePressBubbles) {
          O = !1;
          return;
        }
      }), !O)
        return;
    }
    o.emit("dismiss", {
      type: "outsidePress",
      data: {
        returnFocus: y ? {
          preventScroll: !0
        } : Uy(L) || qy(L)
      }
    }), r(!1, L);
  });
  return R.useEffect(() => {
    if (!n || !u)
      return;
    l.current.__escapeKeyBubbles = P, l.current.__outsidePressBubbles = E;
    function L(A) {
      r(!1, A);
    }
    const k = _t(c);
    d && k.addEventListener("keydown", N), S && k.addEventListener(p, T);
    let _ = [];
    return h && (yt(a) && (_ = Pt(a)), yt(c) && (_ = _.concat(Pt(c))), !yt(s) && s && s.contextElement && (_ = _.concat(Pt(s.contextElement)))), _ = _.filter((A) => {
      var M;
      return A !== ((M = k.defaultView) == null ? void 0 : M.visualViewport);
    }), _.forEach((A) => {
      A.addEventListener("scroll", L, {
        passive: !0
      });
    }), () => {
      d && k.removeEventListener("keydown", N), S && k.removeEventListener(p, T), _.forEach((A) => {
        A.removeEventListener("scroll", L);
      });
    };
  }, [l, c, a, s, d, S, p, n, r, h, u, P, E, N, T]), R.useEffect(() => {
    C.current = !1;
  }, [S, p]), R.useMemo(() => u ? {
    reference: {
      onKeyDown: N,
      [nv[g]]: (L) => {
        m && (o.emit("dismiss", {
          type: "referencePress",
          data: {
            returnFocus: !1
          }
        }), r(!1, L.nativeEvent));
      }
    },
    floating: {
      onKeyDown: N,
      [rv[p]]: () => {
        C.current = !0;
      }
    }
  } : {}, [u, o, m, p, g, r, N]);
}
function ia(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = R.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, c = ky(e), l = oa(), u = Ur((v, S) => {
    v && (f.current.openEvent = S), r == null || r(v, S);
  }), d = R.useRef(null), f = R.useRef({}), p = R.useState(() => jy())[0], m = Kd(), g = R.useCallback((v) => {
    const S = yt(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c.refs.setReference(S);
  }, [c.refs]), h = R.useCallback((v) => {
    (yt(v) || v === null) && (d.current = v, s(v)), (yt(c.refs.reference.current) || c.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !yt(v)) && c.refs.setReference(v);
  }, [c.refs]), w = R.useMemo(() => ({
    ...c.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [c.refs, h, g]), x = R.useMemo(() => ({
    ...c.elements,
    domReference: a
  }), [c.elements, a]), y = R.useMemo(() => ({
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
  return Dt(() => {
    const v = l == null ? void 0 : l.nodesRef.current.find((S) => S.id === o);
    v && (v.context = y);
  }), R.useMemo(() => ({
    ...c,
    context: y,
    refs: w,
    elements: x
  }), [c, w, x, y]);
}
function sv(e, t) {
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
    const g = _t(a).defaultView || window;
    function h() {
      !n && Jd(c) && c === Qy(_t(c)) && (f.current = !0);
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
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && qr(o.current.openEvent, c) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = yt(g) && g.hasAttribute(Qd("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          hs(s.floating.current, g) || hs(c, g) || h || r(!1, m.nativeEvent);
        });
      }
    }
  } : {}, [l, u, c, s, o, r]);
}
function _i(e, t, n) {
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
function av(e) {
  e === void 0 && (e = []);
  const t = e, n = R.useCallback(
    (i) => _i(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = R.useCallback(
    (i) => _i(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = R.useCallback(
    (i) => _i(i, e, "item"),
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
function cv(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    floatingId: r
  } = e, {
    enabled: o = !0,
    role: i = "dialog"
  } = t, s = Kd();
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
function tf(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function wl(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function xl(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const lv = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function uv({
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
    [lv[c]]: D(r)
  }, d = D(-t / 2);
  return c === "left" ? {
    ...u,
    ...wl(l, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...wl(l, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...xl(l, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...xl(l, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const sa = ie(
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
    const { dir: d } = Sr();
    return i ? /* @__PURE__ */ b.createElement(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...uv({
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
sa.displayName = "@mantine/core/FloatingArrow";
const [dv, nf] = $t(
  "Popover component was not found in the tree"
);
function rf({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = jh(t), o = Ne(r, e == null ? void 0 : e.ref);
  return Yt(e) ? un(e, { [n]: o }) : e;
}
rf.displayName = "@mantine/core/FocusTrap";
function fv(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const pv = {}, of = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", pv, e), [i, s] = q(!1), a = z(null);
  return wr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : fv(o), ud(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : rg(/* @__PURE__ */ b.createElement(b.Fragment, null, n), a.current);
});
of.displayName = "@mantine/core/Portal";
function Lo({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ b.createElement(of, { ...n }, t) : /* @__PURE__ */ b.createElement(b.Fragment, null, t);
}
Lo.displayName = "@mantine/core/OptionalPortal";
const Wn = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${D(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), _r = {
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
    ...Wn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Wn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Wn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Wn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Wn("top"),
    common: { transformOrigin: "top right" }
  }
}, Sl = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function mv({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in _r ? {
    transitionProperty: _r[e].transitionProperty,
    ...o,
    ..._r[e].common,
    ..._r[e][Sl[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[Sl[t]]
  };
}
function gv({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a
}) {
  const c = Ye(), l = fd(), u = c.respectReducedMotion ? l : !1, [d, f] = q(u ? 0 : e), [p, m] = q(r ? "entered" : "exited"), g = z(-1), h = (w) => {
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
  return Gt(() => {
    h(r);
  }, [r]), W(() => () => window.clearTimeout(g.current), []), {
    transitionDuration: d,
    transitionStatus: p,
    transitionTimingFunction: n || "ease"
  };
}
function Mo({
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
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = gv({
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
    mv({
      transition: t,
      duration: d,
      state: f,
      timingFunction: p
    })
  ));
}
Mo.displayName = "@mantine/core/Transition";
var sf = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const hv = {}, aa = U((e, t) => {
  var h, w, x, y;
  const n = j("PopoverDropdown", hv, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = n, f = nf(), p = Th({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Ne(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ b.createElement(Lo, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ b.createElement(
    Mo,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((x = f.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? f.transitionProps.exitDuration : (y = f.transitionProps) == null ? void 0 : y.duration
    },
    (v) => /* @__PURE__ */ b.createElement(rf, { active: f.trapFocus }, /* @__PURE__ */ b.createElement(
      V,
      {
        ...m,
        ...d,
        variant: c,
        ref: g,
        onKeyDownCapture: Ch(f.onClose, {
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
        sa,
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
aa.classes = sf;
aa.displayName = "@mantine/core/PopoverDropdown";
const bv = {
  refProp: "ref",
  popupType: "dialog"
}, af = U((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    bv,
    e
  );
  if (!Yt(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = nf(), c = Ne(a.reference, n.ref, t), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return un(n, {
    ...s,
    ...l,
    ...a.targetProps,
    className: gt(a.targetProps.className, s.className, n.props.className),
    [r]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
af.displayName = "@mantine/core/PopoverTarget";
function cf({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = q(0);
  W(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return Ly(
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
  ]), Gt(() => {
    t.update();
  }, r), Gt(() => {
    i((s) => s + 1);
  }, [e]);
}
function yv(e, t) {
  var r, o, i, s;
  const n = [Fd(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(ea({ limiter: gy() })), (o = e.middlewares) != null && o.flip && n.push(Md()), (i = e.middlewares) != null && i.inline && n.push(_d()), n.push(Ud({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    hy({
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
function vv(e) {
  const [t, n] = It({
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
  }, i = ia({
    placement: e.position,
    middleware: yv(e, () => i)
  });
  return cf({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), Gt(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), Gt(() => {
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
const wv = {
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
  zIndex: vr("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, xv = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : _e(t),
    "--popover-shadow": Ph(n)
  }
});
function ht(e) {
  var Lt, Qe, Ie, me, Mt, Xt;
  const t = j("Popover", wv, e), {
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
    onOpen: T,
    onChange: L,
    zIndex: k,
    radius: _,
    shadow: A,
    id: M,
    defaultOpened: O,
    __staticSelector: F,
    withRoles: $,
    disabled: H,
    returnFocus: Y,
    variant: re,
    keepMounted: ye,
    vars: ue,
    ...Te
  } = t, ve = K({
    name: F,
    props: t,
    classes: sf,
    classNames: w,
    styles: x,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: xv
  }), oe = z(null), [we, Fe] = q(null), [Pe, De] = q(null), { dir: Be } = Sr(), ce = Ct(M), X = vv({
    middlewares: u,
    width: l,
    position: tf(Be, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: oe,
    arrowOffset: p,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: O,
    onChange: L,
    onOpen: T,
    onClose: N
  });
  Oh(() => y && X.onClose(), P, [
    we,
    Pe
  ]);
  const gn = Q(
    (ae) => {
      Fe(ae), X.floating.refs.setReference(ae);
    },
    [X.floating.refs.setReference]
  ), Xe = Q(
    (ae) => {
      De(ae), X.floating.refs.setFloating(ae);
    },
    [X.floating.refs.setFloating]
  );
  return /* @__PURE__ */ b.createElement(
    dv,
    {
      value: {
        returnFocus: Y,
        disabled: H,
        controlled: X.controlled,
        reference: gn,
        floating: Xe,
        x: X.floating.x,
        y: X.floating.y,
        arrowX: (Ie = (Qe = (Lt = X.floating) == null ? void 0 : Lt.middlewareData) == null ? void 0 : Qe.arrow) == null ? void 0 : Ie.x,
        arrowY: (Xt = (Mt = (me = X.floating) == null ? void 0 : me.middlewareData) == null ? void 0 : Mt.arrow) == null ? void 0 : Xt.y,
        opened: X.opened,
        arrowRef: oe,
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
        shadow: A,
        closeOnEscape: C,
        onClose: X.onClose,
        onToggle: X.onToggle,
        getTargetId: () => `${ce}-target`,
        getDropdownId: () => `${ce}-dropdown`,
        withRoles: $,
        targetProps: Te,
        __staticSelector: F,
        classNames: w,
        styles: x,
        unstyled: h,
        variant: re,
        keepMounted: ye,
        getStyles: ve
      }
    },
    n
  );
}
ht.Target = af;
ht.Dropdown = aa;
ht.displayName = "@mantine/core/Popover";
ht.extend = (e) => e;
var lt = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const Sv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: gt(lt.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: lt.bar }), /* @__PURE__ */ b.createElement("span", { className: lt.bar }), /* @__PURE__ */ b.createElement("span", { className: lt.bar }))), Cv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: gt(lt.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: lt.dot }), /* @__PURE__ */ b.createElement("span", { className: lt.dot }), /* @__PURE__ */ b.createElement("span", { className: lt.dot }))), Ev = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(V, { component: "span", className: gt(lt.ovalLoader, e), ...t, ref: n })), lf = {
  bars: Sv,
  oval: Ev,
  dots: Cv
}, Pv = {
  loaders: lf,
  type: "oval"
}, Dv = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": se(t, "loader-size"),
    "--loader-color": n ? wt(n, e) : void 0
  }
}), Tn = U((e, t) => {
  const n = j("Loader", Pv, e), {
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
  } = n, h = K({
    name: "Loader",
    props: n,
    classes: lt,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: Dv
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
Tn.defaultLoaders = lf;
Tn.classes = lt;
Tn.displayName = "@mantine/core/Loader";
var ko = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const Cl = {
  orientation: "horizontal"
}, Iv = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), ca = U((e, t) => {
  const n = j("ActionIconGroup", Cl, e), {
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
  } = j("ActionIconGroup", Cl, e), p = K({
    name: "ActionIconGroup",
    props: n,
    classes: ko,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Iv,
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
ca.classes = ko;
ca.displayName = "@mantine/core/ActionIconGroup";
const Rv = {}, Ov = (e, { size: t, radius: n, variant: r, gradient: o, color: i }) => {
  const s = e.variantColorResolver({
    color: i || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled"
  });
  return {
    root: {
      "--ai-size": se(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : _e(n),
      "--ai-bg": i || r ? s.background : void 0,
      "--ai-hover": i || r ? s.hover : void 0,
      "--ai-hover-color": i || r ? s.hoverColor : void 0,
      "--ai-color": i || r ? s.color : void 0,
      "--ai-bd": i || r ? s.border : void 0
    }
  };
}, tr = Nt((e, t) => {
  const n = j("ActionIcon", Rv, e), {
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
  } = n, S = K({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: c,
    classes: ko,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: Ov
  });
  return /* @__PURE__ */ b.createElement(
    dn,
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
      Tn,
      {
        ...S("loader"),
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)",
        ...u
      }
    ) : w
  );
});
tr.classes = ko;
tr.displayName = "@mantine/core/ActionIcon";
tr.Group = ca;
const uf = ie(
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
uf.displayName = "@mantine/core/CloseIcon";
var df = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const Av = {
  variant: "subtle"
}, $v = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": se(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : _e(n),
    "--cb-icon-size": D(r)
  }
}), Pr = Nt((e, t) => {
  const n = j("CloseButton", Av, e), {
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
  } = n, h = K({
    name: "CloseButton",
    props: n,
    className: a,
    style: l,
    classes: df,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: $v
  });
  return /* @__PURE__ */ b.createElement(
    dn,
    {
      ref: t,
      ...g,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: { disabled: p || f },
      ...h("root", { variant: m, active: !0 })
    },
    /* @__PURE__ */ b.createElement(uf, null),
    o
  );
});
Pr.classes = df;
Pr.displayName = "@mantine/core/CloseButton";
function Nv(e) {
  return tg.toArray(e).filter(Boolean);
}
var ff = { root: "m-4081bf90" };
const Tv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Lv = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": to(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), En = U((e, t) => {
  const n = j("Group", Tv, e), {
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
  } = n, y = Nv(c), v = y.length, S = to(l ?? "md"), P = { childWidth: `calc(${100 / v}% - (${S} - ${S} / ${v}))` }, E = K({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: i,
    classes: ff,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: Lv
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
En.classes = ff;
En.displayName = "@mantine/core/Group";
var pf = { root: "m-9814e45f" };
const Mv = {
  zIndex: vr("modal")
}, kv = (e, { gradient: t, color: n, backgroundOpacity: r, blur: o, radius: i, zIndex: s }) => ({
  root: {
    "--overlay-bg": t || (n !== void 0 || r !== void 0) && Ae(n || "#000", r ?? 0.6) || void 0,
    "--overlay-filter": o ? `blur(${D(o)})` : void 0,
    "--overlay-radius": i === void 0 ? void 0 : _e(i),
    "--overlay-z-index": s == null ? void 0 : s.toString()
  }
}), co = Nt((e, t) => {
  const n = j("Overlay", Mv, e), {
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
  } = n, y = K({
    name: "Overlay",
    props: n,
    classes: pf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: kv
  });
  return /* @__PURE__ */ b.createElement(V, { ref: t, ...y("root"), mod: { center: u, fixed: l }, ...x }, d);
});
co.classes = pf;
co.displayName = "@mantine/core/Overlay";
const [_v, Ln] = Fs({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var it = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const El = {}, Fv = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ge(t)} - ${D(2)})`
  }
}), _o = U((e, t) => {
  const n = j("InputDescription", El, e), {
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
  } = j("InputDescription", El, n), m = Ln(), g = K({
    name: ["InputWrapper", u],
    props: n,
    classes: it,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: c,
    varsResolver: Fv
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
_o.classes = it;
_o.displayName = "@mantine/core/InputDescription";
const Bv = {}, jv = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ge(t)} - ${D(2)})`
  }
}), Fo = U((e, t) => {
  const n = j("InputError", Bv, e), {
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
  } = n, m = K({
    name: ["InputWrapper", u],
    props: n,
    classes: it,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "error",
    vars: c,
    varsResolver: jv
  }), g = Ln(), h = d && (g == null ? void 0 : g.getStyles) || m;
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
Fo.classes = it;
Fo.displayName = "@mantine/core/InputError";
const Pl = {
  labelElement: "label"
}, Vv = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ge(t),
    "--input-asterisk-color": void 0
  }
}), Bo = U((e, t) => {
  const n = j("InputLabel", Pl, e), {
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
  } = j("InputLabel", Pl, n), x = K({
    name: ["InputWrapper", g],
    props: n,
    classes: it,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: c,
    varsResolver: Vv
  }), y = Ln(), v = (y == null ? void 0 : y.getStyles) || x;
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
Bo.classes = it;
Bo.displayName = "@mantine/core/InputLabel";
const Dl = {}, la = U((e, t) => {
  const n = j("InputPlaceholder", Dl, e), {
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
  } = j("InputPlaceholder", Dl, n), p = K({
    name: ["InputPlaceholder", l],
    props: n,
    classes: it,
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
la.classes = it;
la.displayName = "@mantine/core/InputPlaceholder";
function zv(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((c) => c === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const Gv = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Wv = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ge(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ge(t)} - ${D(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ge(t)} - ${D(2)})`
  }
}), ua = U((e, t) => {
  const n = j("InputWrapper", Gv, e), {
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
    ...T
  } = n, L = K({
    name: ["InputWrapper", d],
    props: N || n,
    classes: it,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Wv
  }), k = {
    size: l,
    variant: u,
    __staticSelector: d
  }, _ = Ct(P), A = typeof C == "boolean" ? C : E, M = (y == null ? void 0 : y.id) || `${_}-error`, O = (x == null ? void 0 : x.id) || `${_}-description`, F = _, $ = !!g && typeof g != "boolean", H = !!h, Y = `${$ ? M : ""} ${H ? O : ""}`, re = Y.trim().length > 0 ? Y.trim() : void 0, ye = (w == null ? void 0 : w.id) || `${_}-label`, ue = m && /* @__PURE__ */ b.createElement(
    Bo,
    {
      key: "label",
      labelElement: v,
      id: ye,
      htmlFor: F,
      required: A,
      ...k,
      ...w
    },
    m
  ), Te = H && /* @__PURE__ */ b.createElement(
    _o,
    {
      key: "description",
      ...x,
      ...k,
      size: (x == null ? void 0 : x.size) || k.size,
      id: (x == null ? void 0 : x.id) || O
    },
    h
  ), ve = /* @__PURE__ */ b.createElement(b.Fragment, { key: "input" }, f(S)), oe = $ && /* @__PURE__ */ b.createElement(
    Fo,
    {
      ...y,
      ...k,
      size: (y == null ? void 0 : y.size) || k.size,
      key: "error",
      id: (y == null ? void 0 : y.id) || M
    },
    g
  ), we = p.map((Fe) => {
    switch (Fe) {
      case "label":
        return ue;
      case "input":
        return ve;
      case "description":
        return Te;
      case "error":
        return oe;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ b.createElement(
    _v,
    {
      value: {
        getStyles: L,
        describedBy: re,
        inputId: F,
        labelId: ye,
        ...zv(p, { hasDescription: H, hasError: $ })
      }
    },
    /* @__PURE__ */ b.createElement(
      V,
      {
        ref: t,
        variant: u,
        size: l,
        mod: { error: !!g },
        ...L("root"),
        ...T
      },
      we
    )
  );
});
ua.classes = it;
ua.displayName = "@mantine/core/InputWrapper";
const Hv = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Uv = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": se(t.size, "input-height"),
    "--input-fz": Ge(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : _e(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? D(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? D(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? se(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), Ee = Nt((e, t) => {
  const n = j("Input", Hv, e), {
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
    multiline: T,
    radius: L,
    id: k,
    withAria: _,
    withErrorStyles: A,
    ...M
  } = n, { styleProps: O, rest: F } = xr(M), $ = Ln(), H = { offsetBottom: $ == null ? void 0 : $.offsetBottom, offsetTop: $ == null ? void 0 : $.offsetTop }, Y = K({
    name: ["Input", l],
    props: u || n,
    classes: it,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    stylesCtx: H,
    rootSelector: "wrapper",
    vars: E,
    varsResolver: Uv
  }), re = _ ? {
    required: c,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": $ == null ? void 0 : $.describedBy,
    id: ($ == null ? void 0 : $.inputId) || k
  } : {};
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ...Y("wrapper"),
      ...O,
      ...f,
      mod: {
        error: !!p && A,
        pointer: N,
        disabled: m,
        multiline: T,
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
        ...Y("section", {
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
        ...re,
        ref: t,
        required: c,
        mod: { disabled: m, error: !!p && A },
        variant: P,
        ...Y("input")
      }
    ),
    x && /* @__PURE__ */ b.createElement(
      "div",
      {
        ...y,
        "data-position": "right",
        ...Y("section", {
          className: y == null ? void 0 : y.className,
          style: y == null ? void 0 : y.style
        })
      },
      x
    )
  );
});
Ee.classes = it;
Ee.Wrapper = ua;
Ee.Label = Bo;
Ee.Error = Fo;
Ee.Description = _o;
Ee.Placeholder = la;
Ee.displayName = "@mantine/core/Input";
function qv(e, t, n) {
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
    ...T
  } = r, { styleProps: L, rest: k } = xr(T), _ = {
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
    wrapperProps: { ..._, ...L },
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
const Kv = {
  __staticSelector: "InputBase",
  withAria: !0
}, Jt = Nt((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = qv("InputBase", Kv, e);
  return /* @__PURE__ */ b.createElement(Ee.Wrapper, { ...r }, /* @__PURE__ */ b.createElement(Ee, { ...n, ...o, ref: t }));
});
Jt.classes = { ...Ee.classes, ...Ee.Wrapper.classes };
Jt.displayName = "@mantine/core/InputBase";
const [Yv, da] = $t(
  "Accordion component was not found in the tree"
);
function fa({ style: e, size: t = 16, ...n }) {
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
fa.displayName = "@mantine/core/AccordionChevron";
const [Jv, mf] = $t("Accordion.Item component was not found in the tree");
var Dr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const Xv = {}, pa = U((e, t) => {
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
  } = j("AccordionControl", Xv, e), { value: m } = mf(), g = da(), h = g.isItemActive(m), w = typeof g.order == "number", x = `h${g.order}`, y = /* @__PURE__ */ b.createElement(
    dn,
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
      onKeyDown: rd({
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
pa.displayName = "@mantine/core/AccordionControl";
pa.classes = Dr;
const Qv = {}, ma = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...c } = j(
    "AccordionItem",
    Qv,
    e
  ), l = da();
  return /* @__PURE__ */ b.createElement(Jv, { value: { value: a } }, /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      mod: { active: l.isItemActive(a) },
      ...l.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: l.variant }),
      ...c
    }
  ));
});
ma.displayName = "@mantine/core/AccordionItem";
ma.classes = Dr;
const Zv = {}, ga = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...c } = j(
    "AccordionPanel",
    Zv,
    e
  ), { value: l } = mf(), u = da();
  return /* @__PURE__ */ b.createElement(
    Ed,
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
ga.displayName = "@mantine/core/AccordionPanel";
ga.classes = Dr;
const ew = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ b.createElement(fa, null)
}, tw = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : _e(r)
  }
});
function ne(e) {
  const t = j("Accordion", ew, e), {
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
  } = t, E = Ct(p), [N, T] = It({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), L = (A) => Array.isArray(N) ? N.includes(A) : A === N, k = (A) => {
    const M = Array.isArray(N) ? N.includes(A) ? N.filter((O) => O !== A) : [...N, A] : A === N ? null : A;
    T(M);
  }, _ = K({
    name: "Accordion",
    classes: Dr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: tw
  });
  return /* @__PURE__ */ b.createElement(
    Yv,
    {
      value: {
        isItemActive: L,
        onChange: k,
        getControlId: eo(
          `${E}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: eo(
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
const nw = (e) => e;
ne.extend = nw;
ne.classes = Dr;
ne.displayName = "@mantine/core/Accordion";
ne.Item = ma;
ne.Panel = ga;
ne.Control = pa;
ne.Chevron = fa;
var gf = { root: "m-66836ed3", "root--filled": "m-12b2e6d5", "root--white": "m-cffd1856", wrapper: "m-a5d60502", body: "m-667c2793", title: "m-6a03f287", label: "m-698f4f23", icon: "m-667f2a6a", message: "m-7fa78076", closeButton: "m-87f54839" };
const rw = {}, ow = (e, { radius: t, color: n, variant: r }) => {
  const o = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    variant: r || "light"
  });
  return {
    root: {
      "--alert-radius": t === void 0 ? void 0 : _e(t),
      "--alert-bg": n || r ? o.background : void 0,
      "--alert-color": n || r ? o.color : void 0,
      "--alert-bd": n || r ? o.border : void 0
    }
  };
}, ha = U((e, t) => {
  const n = j("Alert", rw, e), {
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
  } = n, v = K({
    name: "Alert",
    classes: gf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: ow
  }), S = Ct(p), C = d && `${S}-title` || void 0, P = `${S}-body`;
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
      Pr,
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
ha.classes = gf;
ha.displayName = "@mantine/core/Alert";
var hf = { root: "m-b6d8b162" };
function iw(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const sw = {
  inherit: !1
}, aw = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": Ge(o),
    "--text-lh": Eh(o),
    "--text-gradient": t === "gradient" ? ds(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? wt(i, e) : void 0
  }
}), Se = Nt((e, t) => {
  const n = j("Text", sw, e), {
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
  } = n, v = K({
    name: ["Text", l],
    props: n,
    classes: hf,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: aw
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
          "data-truncate": iw(o),
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
Se.classes = hf;
Se.displayName = "@mantine/core/Text";
function bf(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => bf(t))
  } : e;
}
function yf(e) {
  return e ? e.map(bf) : [];
}
function ba(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...ba(n.items) } : (t[n.value] = n, t), {});
}
var $e = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const cw = {
  error: null
}, lw = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": se(t, "combobox-chevron-size")
  }
}), ya = U((e, t) => {
  const n = j("ComboboxChevron", cw, e), { size: r, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, ...d } = n, f = K({
    name: "ComboboxChevron",
    classes: $e,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: lw,
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
ya.classes = $e;
ya.displayName = "@mantine/core/ComboboxChevron";
const [uw, st] = $t(
  "Combobox component was not found in tree"
), vf = ie(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ b.createElement(
    Pr,
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
vf.displayName = "@mantine/core/ComboboxClearButton";
const dw = {}, va = U((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    dw,
    e
  ), c = st();
  return /* @__PURE__ */ b.createElement(
    ht.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": s || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: n, styles: r })
    }
  );
});
va.classes = $e;
va.displayName = "@mantine/core/ComboboxDropdown";
const fw = {
  refProp: "ref"
}, wf = U((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", fw, e);
  if (st(), !Yt(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ b.createElement(ht.Target, { ref: t, refProp: r }, n);
});
wf.displayName = "@mantine/core/ComboboxDropdownTarget";
const pw = {}, wa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    pw,
    e
  ), c = st();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...c.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
wa.classes = $e;
wa.displayName = "@mantine/core/ComboboxEmpty";
function xa({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o
}) {
  const i = st(), [s, a] = q(null), c = (u) => {
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
const mw = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, xf = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxEventsTarget", mw, e);
  if (!Yt(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = st(), u = xa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  });
  return un(n, {
    ...u,
    ...c,
    [r]: Ne(t, l.store.targetRef, n == null ? void 0 : n.ref)
  });
});
xf.displayName = "@mantine/core/ComboboxEventsTarget";
const gw = {}, Sa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    gw,
    e
  ), c = st();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...c.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
Sa.classes = $e;
Sa.displayName = "@mantine/core/ComboboxFooter";
const hw = {}, Ca = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: c, ...l } = j(
    "ComboboxGroup",
    hw,
    e
  ), u = st();
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
Ca.classes = $e;
Ca.displayName = "@mantine/core/ComboboxGroup";
const bw = {}, Ea = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    bw,
    e
  ), c = st();
  return /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...c.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
Ea.classes = $e;
Ea.displayName = "@mantine/core/ComboboxHeader";
const yw = {}, Pa = U((e, t) => {
  const n = j("ComboboxOption", yw, e), {
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
  } = n, h = st(), w = Vu(), x = l || w;
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
Pa.classes = $e;
Pa.displayName = "@mantine/core/ComboboxOption";
const vw = {}, Da = U((e, t) => {
  const n = j("ComboboxOptions", vw, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = n, d = st(), f = Ct(a);
  return W(() => {
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
Da.classes = $e;
Da.displayName = "@mantine/core/ComboboxOptions";
const ww = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, Ia = U((e, t) => {
  const n = j("ComboboxSearch", ww, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = n, f = st(), p = f.getStyles("search"), m = xa({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c
  });
  return /* @__PURE__ */ b.createElement(
    Ee,
    {
      ref: Ne(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
Ia.classes = $e;
Ia.displayName = "@mantine/core/ComboboxSearch";
const xw = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Sf = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...c
  } = j("ComboboxTarget", xw, e);
  if (!Yt(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const l = st(), u = xa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  }), d = un(n, {
    ...u,
    ...c
  });
  return /* @__PURE__ */ b.createElement(ht.Target, { ref: Ne(t, l.store.targetRef) }, d);
});
Sf.displayName = "@mantine/core/ComboboxTarget";
function Sw(e, t, n) {
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
function Cw(e, t, n) {
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
function Ew(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function Ra({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, c] = It({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), l = z(null), u = z(-1), d = z(null), f = z(null), p = z(-1), m = z(-1), g = z(-1), h = Q(
    (O = "unknown") => {
      a || (c(!0), o == null || o(O));
    },
    [c, o, a]
  ), w = Q(
    (O = "unknown") => {
      a && (c(!1), r == null || r(O));
    },
    [c, r, a]
  ), x = Q(
    (O = "unknown") => {
      a ? w(O) : h(O);
    },
    [w, h, a]
  ), y = Q(() => {
    const O = document.querySelector(`#${l.current} [data-combobox-selected]`);
    O == null || O.removeAttribute("data-combobox-selected"), O == null || O.removeAttribute("aria-selected");
  }, []), v = Q(
    (O) => {
      const F = document.getElementById(l.current), $ = F == null ? void 0 : F.querySelectorAll("[data-combobox-option]");
      if (!$)
        return null;
      const H = O >= $.length ? 0 : O < 0 ? $.length - 1 : O;
      return u.current = H, $ != null && $[H] && !$[H].hasAttribute("data-combobox-disabled") ? (y(), $[H].setAttribute("data-combobox-selected", "true"), $[H].setAttribute("aria-selected", "true"), $[H].scrollIntoView({ block: "nearest", behavior: s }), $[H].id) : null;
    },
    [s, y]
  ), S = Q(() => {
    const O = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (O) {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), $ = Array.from(F).findIndex((H) => H === O);
      return v($);
    }
    return v(0);
  }, [v]), C = Q(
    () => v(
      Cw(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), P = Q(
    () => v(
      Sw(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), E = Q(
    () => v(
      Ew(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), N = Q((O = "selected") => {
    g.current = window.setTimeout(() => {
      const F = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), $ = Array.from(F).findIndex(
        (H) => H.hasAttribute(`data-combobox-${O}`)
      );
      u.current = $;
    }, 0);
  }, []), T = Q(() => {
    u.current = -1, y();
  }, [y]), L = Q(() => {
    const O = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), F = O == null ? void 0 : O[u.current];
    F == null || F.click();
  }, []), k = Q((O) => {
    l.current = O;
  }, []), _ = Q(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), A = Q(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), M = Q(() => u.current, []);
  return W(
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
    getSelectedOptionIndex: M,
    selectOption: v,
    selectFirstOption: E,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: P,
    resetSelectedOption: T,
    updateSelectedOptionIndex: N,
    listId: l.current,
    setListId: k,
    clickSelectedOption: L,
    searchRef: d,
    focusSearchInput: _,
    targetRef: f,
    focusTarget: A
  };
}
const Pw = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, Dw = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": Ge(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : D(n),
    "--combobox-option-fz": Ge(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  }
});
function Z(e) {
  const t = j("Combobox", Pw, e), {
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
  } = t, g = Ra(), h = s || g, w = K({
    name: f || "Combobox",
    classes: $e,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: Dw
  });
  return /* @__PURE__ */ b.createElement(
    uw,
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
      ht,
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
const Iw = (e) => e;
Z.extend = Iw;
Z.classes = $e;
Z.displayName = "@mantine/core/Combobox";
Z.Target = Sf;
Z.Dropdown = va;
Z.Options = Da;
Z.Option = Pa;
Z.Search = Ia;
Z.Empty = wa;
Z.Chevron = ya;
Z.Footer = Sa;
Z.Header = Ea;
Z.EventsTarget = xf;
Z.DropdownTarget = wf;
Z.Group = Ca;
Z.ClearButton = vf;
var Cf = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const Rw = Cf, Ef = ie(
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
    const y = K({
      name: e,
      props: t,
      className: n,
      style: g,
      classes: Cf,
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
          "--label-fz": Ge(f),
          "--label-lh": se(f, "label-lh")
        },
        mod: { "label-position": p },
        variant: m,
        size: f,
        ...w
      },
      /* @__PURE__ */ b.createElement("div", { ...y("body") }, s, /* @__PURE__ */ b.createElement("div", { ...y("labelWrapper"), "data-disabled": u || void 0 }, a && /* @__PURE__ */ b.createElement("label", { ...y("label"), "data-disabled": u || void 0, htmlFor: l }, a), c && /* @__PURE__ */ b.createElement(Ee.Description, { size: f, __inheritStyles: !1, ...y("description") }, c), d && d !== "boolean" && /* @__PURE__ */ b.createElement(Ee.Error, { size: f, __inheritStyles: !1, ...y("error") }, d)))
    );
  }
);
Ef.displayName = "@mantine/core/InlineInput";
const Pf = Kt(null), Ow = Pf.Provider, Aw = () => mt(Pf);
function $w({ children: e, role: t }) {
  const n = Ln();
  return n ? /* @__PURE__ */ b.createElement("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy }, e) : /* @__PURE__ */ b.createElement(b.Fragment, null, e);
}
const Nw = {}, Oa = U((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: i, wrapperProps: s, children: a, ...c } = j(
    "CheckboxGroup",
    Nw,
    e
  ), [l, u] = It({
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
  return /* @__PURE__ */ b.createElement(Ow, { value: { value: l, onChange: d, size: i } }, /* @__PURE__ */ b.createElement(
    Ee.Wrapper,
    {
      size: i,
      ref: t,
      ...s,
      ...c,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ b.createElement($w, { role: "group" }, a)
  ));
});
Oa.classes = Ee.Wrapper.classes;
Oa.displayName = "@mantine/core/CheckboxGroup";
function Df({ size: e, style: t, ...n }) {
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
function Tw({ indeterminate: e, ...t }) {
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
  ) : /* @__PURE__ */ b.createElement(Df, { ...t });
}
var If = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const Lw = {
  labelPosition: "right",
  icon: Tw
}, Mw = (e, { radius: t, color: n, size: r, iconColor: o, variant: i }) => {
  const s = Oo({ color: n || e.primaryColor, theme: e }), a = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": se(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : _e(t),
      "--checkbox-color": i === "outline" ? a : wt(n, e),
      "--checkbox-icon-color": o ? wt(o, e) : void 0
    }
  };
}, Ir = U((e, t) => {
  const n = j("Checkbox", Lw, e), {
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
    onChange: T,
    ...L
  } = n, k = Aw(), _ = f || (k == null ? void 0 : k.size), A = P, M = K({
    name: "Checkbox",
    props: n,
    classes: If,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Mw
  }), { styleProps: O, rest: F } = xr(L), $ = Ct(d), H = k ? {
    checked: k.value.includes(F.value),
    onChange: (Y) => {
      k.onChange(Y), T == null || T(Y);
    }
  } : {};
  return /* @__PURE__ */ b.createElement(
    Ef,
    {
      ...M("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: $,
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
      ...O,
      ...m
    },
    /* @__PURE__ */ b.createElement(V, { ...M("inner"), mod: { "data-label-position": w } }, /* @__PURE__ */ b.createElement(
      V,
      {
        component: "input",
        id: $,
        ref: t,
        checked: h,
        disabled: v,
        mod: { error: !!y, indeterminate: C },
        ...M("input", { focusable: !0, variant: S }),
        onChange: T,
        ...F,
        ...H,
        type: "checkbox"
      }
    ), /* @__PURE__ */ b.createElement(A, { indeterminate: C, ...M("icon") }))
  );
});
Ir.classes = { ...If, ...Rw };
Ir.displayName = "@mantine/core/Checkbox";
Ir.Group = Oa;
function Pn(e) {
  return "group" in e;
}
function Rf({
  options: e,
  search: t,
  limit: n
}) {
  const r = t.trim().toLowerCase(), o = [];
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i];
    if (o.length === n)
      return o;
    Pn(s) && o.push({
      group: s.group,
      items: Rf({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), Pn(s) || s.label.toLowerCase().includes(r) && o.push(s);
  }
  return o;
}
function kw(e) {
  if (e.length === 0)
    return !0;
  for (const t of e)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function Of(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (Pn(n))
        Of(n.items, t);
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
function Fi(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function Af({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!Pn(e)) {
    const s = t && Fi(n, e.value) && /* @__PURE__ */ b.createElement(Df, { className: $e.optionsDropdownCheckIcon });
    return /* @__PURE__ */ b.createElement(
      Z.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: gt({ [$e.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": Fi(n, e.value) || void 0,
        "aria-selected": Fi(n, e.value)
      },
      r === "left" && s,
      /* @__PURE__ */ b.createElement("span", null, e.label),
      r === "right" && s
    );
  }
  const i = e.items.map((s) => /* @__PURE__ */ b.createElement(
    Af,
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
function $f({
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
  Of(e);
  const h = typeof o == "string" ? (r || Rf)({
    options: e,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : e, w = kw(h), x = h.map((y) => /* @__PURE__ */ b.createElement(
    Af,
    {
      data: y,
      key: Pn(y) ? y.group : y.value,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ b.createElement(Z.Dropdown, { hidden: t || n && w }, /* @__PURE__ */ b.createElement(Z.Options, { labelledBy: m }, a ? /* @__PURE__ */ b.createElement(
    Cr.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: $e.optionsDropdownScrollArea
    },
    x
  ) : x, w && f && /* @__PURE__ */ b.createElement(Z.Empty, null, f)));
}
var jo = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const Il = {
  orientation: "horizontal"
}, _w = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), Aa = U((e, t) => {
  const n = j("ButtonGroup", Il, e), {
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
  } = j("ButtonGroup", Il, e), p = K({
    name: "ButtonGroup",
    props: n,
    classes: jo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: _w,
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
Aa.classes = jo;
Aa.displayName = "@mantine/core/ButtonGroup";
const Fw = {}, Bw = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s }) => {
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
      "--button-fz": i != null && i.includes("compact") ? Ge(i.replace("compact-", "")) : Ge(i),
      "--button-radius": t === void 0 ? void 0 : _e(t),
      "--button-bg": n || o ? a.background : void 0,
      "--button-hover": n || o ? a.hover : void 0,
      "--button-color": n || o ? a.color : void 0,
      "--button-bd": n || o ? a.border : void 0,
      "--button-hover-color": n || o ? a.hoverColor : void 0
    }
  };
}, nr = Nt((e, t) => {
  const n = j("Button", Fw, e), {
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
  } = n, C = K({
    name: "Button",
    props: n,
    classes: jo,
    className: i,
    style: r,
    classNames: w,
    styles: x,
    unstyled: y,
    vars: o,
    varsResolver: Bw
  }), P = !!l, E = !!u;
  return /* @__PURE__ */ b.createElement(
    dn,
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
      Tn,
      {
        color: "var(--button-color)",
        size: "calc(var(--button-height) / 1.8)",
        ...g
      }
    )),
    /* @__PURE__ */ b.createElement("span", { ...C("inner") }, l && /* @__PURE__ */ b.createElement(V, { component: "span", ...C("section"), mod: { position: "left" } }, l), /* @__PURE__ */ b.createElement(V, { component: "span", mod: { loading: m }, ...C("label") }, c), u && /* @__PURE__ */ b.createElement(V, { component: "span", ...C("section"), mod: { position: "right" } }, u))
  );
});
nr.classes = jo;
nr.displayName = "@mantine/core/Button";
nr.Group = Aa;
var Nf = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const Rl = {
  withShadow: !0
}, jw = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : _e(t),
    "--cs-size": D(n)
  }
}), rr = Nt((e, t) => {
  const n = j("ColorSwatch", Rl, e), {
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
  } = j("ColorSwatch", Rl, n), h = K({
    name: "ColorSwatch",
    props: n,
    classes: Nf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: jw
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
rr.classes = Nf;
rr.displayName = "@mantine/core/ColorSwatch";
var Tf = { root: "m-7485cace" };
const Vw = {}, zw = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : se(t, "container-size")
  }
}), $a = U((e, t) => {
  const n = j("Container", Vw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, ...u } = n, d = K({
    name: "Container",
    classes: Tf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: zw
  });
  return /* @__PURE__ */ b.createElement(V, { ref: t, mod: { fluid: l }, ...d("root"), ...u });
});
$a.classes = Tf;
$a.displayName = "@mantine/core/Container";
function Gw({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = z(-1), i = z(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, c = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return W(() => s, []), { openDropdown: a, closeDropdown: c };
}
const [Ww, Lf] = $t(
  "Grid component was not found in tree"
), bs = (e, t) => e === "content" ? "auto" : e === "auto" ? "0rem" : e ? `${100 / (t / e)}%` : void 0, Ol = (e, t, n) => n || e === "auto" ? "100%" : e === "content" ? "unset" : bs(e, t), Al = (e, t) => {
  if (e)
    return e === "auto" || t ? "1" : "auto";
}, $l = (e, t) => e === 0 ? "0" : e ? `${100 / (t / e)}%` : void 0;
function Hw({ span: e, order: t, offset: n, selector: r }) {
  var f;
  const o = Ye(), i = Lf(), a = Kn(e) === void 0 ? 12 : Kn(e), c = yr({
    "--col-order": (f = Kn(t)) == null ? void 0 : f.toString(),
    "--col-flex-grow": Al(a, i.grow),
    "--col-flex-basis": bs(a, i.columns),
    "--col-width": a === "content" ? "auto" : void 0,
    "--col-max-width": Ol(a, i.columns, i.grow),
    "--col-offset": $l(Kn(n), i.columns)
  }), l = Ce(o.breakpoints).reduce(
    (p, m) => {
      var g;
      return p[m] || (p[m] = {}), typeof t == "object" && t[m] !== void 0 && (p[m]["--col-order"] = (g = t[m]) == null ? void 0 : g.toString()), typeof e == "object" && e[m] !== void 0 && (p[m]["--col-flex-grow"] = Al(e[m], i.grow), p[m]["--col-flex-basis"] = bs(e[m], i.columns), p[m]["--col-width"] = e[m] === "content" ? "auto" : void 0, p[m]["--col-max-width"] = Ol(
        e[m],
        i.columns,
        i.grow
      )), typeof n == "object" && n[m] !== void 0 && (p[m]["--col-offset"] = $l(n[m], i.columns)), p;
    },
    {}
  ), d = od(Ce(l), o).filter(
    (p) => Ce(l[p.value]).length > 0
  ).map((p) => ({
    query: `(min-width: ${o.breakpoints[p.value]})`,
    styles: l[p.value]
  }));
  return /* @__PURE__ */ b.createElement(Gs, { styles: c, media: d, selector: r });
}
var Na = { root: "m-410352e9", inner: "m-dee7bd2f", col: "m-96bdd299" };
const Uw = {
  span: 12
}, Ta = U((e, t) => {
  const n = j("GridCol", Uw, e), { classNames: r, className: o, style: i, styles: s, vars: a, span: c, order: l, offset: u, ...d } = n, f = Lf(), p = Ws();
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    Hw,
    {
      selector: `.${p}`,
      span: c,
      order: l,
      offset: u
    }
  ), /* @__PURE__ */ b.createElement(
    V,
    {
      ref: t,
      ...f.getStyles("col", {
        className: gt(o, p),
        style: i,
        classNames: r,
        styles: s
      }),
      ...d
    }
  ));
});
Ta.classes = Na;
Ta.displayName = "@mantine/core/GridCol";
function qw({ gutter: e, selector: t }) {
  const n = Ye(), r = yr({
    "--grid-gutter": to(Kn(e))
  }), o = Ce(n.breakpoints).reduce(
    (a, c) => (a[c] || (a[c] = {}), typeof e == "object" && e[c] !== void 0 && (a[c]["--grid-gutter"] = to(e[c])), a),
    {}
  ), s = od(Ce(o), n).filter(
    (a) => Ce(o[a.value]).length > 0
  ).map((a) => ({
    query: `(min-width: ${n.breakpoints[a.value]})`,
    styles: o[a.value]
  }));
  return /* @__PURE__ */ b.createElement(Gs, { styles: r, media: s, selector: t });
}
const Kw = {
  gutter: "md",
  grow: !1,
  columns: 12
}, Yw = (e, { justify: t, align: n, overflow: r }) => ({
  root: {
    "--grid-justify": t,
    "--grid-align": n,
    "--grid-overflow": r
  }
}), Et = U((e, t) => {
  const n = j("Grid", Kw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    grow: l,
    gutter: u,
    columns: d,
    align: f,
    justify: p,
    children: m,
    ...g
  } = n, h = K({
    name: "Grid",
    classes: Na,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Yw
  }), w = Ws();
  return /* @__PURE__ */ b.createElement(Ww, { value: { getStyles: h, grow: l, columns: d } }, /* @__PURE__ */ b.createElement(qw, { selector: `.${w}`, ...n }), /* @__PURE__ */ b.createElement(V, { ref: t, ...h("root", { className: w }), ...g }, /* @__PURE__ */ b.createElement("div", { ...h("inner") }, m)));
});
Et.classes = Na;
Et.displayName = "@mantine/core/Grid";
Et.Col = Ta;
const [Jw, Mf] = $t(
  "HoverCard component was not found in the tree"
), Xw = {};
function kf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    Xw,
    e
  ), i = Mf(), s = no(n, i.openDropdown), a = no(r, i.closeDropdown);
  return /* @__PURE__ */ b.createElement(ht.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
kf.displayName = "@mantine/core/HoverCardDropdown";
const Qw = {
  refProp: "ref"
}, _f = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    Qw,
    e
  );
  if (!Yt(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = Mf(), a = no(n.props.onMouseEnter, s.openDropdown), c = no(n.props.onMouseLeave, s.closeDropdown), l = { onMouseEnter: a, onMouseLeave: c };
  return /* @__PURE__ */ b.createElement(ht.Target, { refProp: r, ref: t, ...i }, un(
    n,
    o ? { [o]: l } : l
  ));
});
_f.displayName = "@mantine/core/HoverCardTarget";
const Zw = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function sn(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = j(
    "HoverCard",
    Zw,
    e
  ), [c, { open: l, close: u }] = Gh(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = Gw({ open: l, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ b.createElement(Jw, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ b.createElement(ht, { ...a, opened: c, __staticSelector: "HoverCard" }, t));
}
sn.displayName = "@mantine/core/HoverCard";
sn.Target = _f;
sn.Dropdown = kf;
sn.extend = (e) => e;
function Ff(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Bf = { root: "m-6e45937b", loader: "m-e8eb006c", overlay: "m-df587f17" };
const Nl = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: vr("overlay")
}, e0 = (e, { zIndex: t }) => ({
  root: {
    "--lo-z-index": t == null ? void 0 : t.toString()
  }
}), La = U((e, t) => {
  const n = j("LoadingOverlay", Nl, e), {
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
  } = n, g = Ye(), h = K({
    name: "LoadingOverlay",
    classes: Bf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: e0
  }), w = { ...Nl.overlayProps, ...d };
  return /* @__PURE__ */ b.createElement(Mo, { transition: "fade", ...l, mounted: !!f }, (x) => /* @__PURE__ */ b.createElement(V, { ...h("root", { style: x }), ref: t, ...m }, /* @__PURE__ */ b.createElement(Tn, { ...h("loader"), unstyled: a, ...u }), /* @__PURE__ */ b.createElement(
    co,
    {
      ...w,
      ...h("overlay"),
      "data-light": !0,
      unstyled: a,
      color: (d == null ? void 0 : d.color) || g.white
    }
  ), /* @__PURE__ */ b.createElement(
    co,
    {
      ...w,
      ...h("overlay"),
      "data-dark": !0,
      unstyled: a,
      color: (d == null ? void 0 : d.color) || g.colors.dark[5]
    }
  )));
});
La.classes = Bf;
La.displayName = "@mantine/core/LoadingOverlay";
const [t0, Ma] = Fs(), [n0, r0] = Fs();
var Vo = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const o0 = {}, i0 = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? se(t) : se(n, "pg-gap")
  }
}), ka = U((e, t) => {
  const n = j("PillGroup", o0, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: c, size: l, disabled: u, ...d } = n, f = Ma(), p = (f == null ? void 0 : f.size) || l || void 0, m = K({
    name: "PillGroup",
    classes: Vo,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: i0,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(n0, { value: { size: p, disabled: u } }, /* @__PURE__ */ b.createElement(V, { ref: t, size: p, ...m("group"), ...d }));
});
ka.classes = Vo;
ka.displayName = "@mantine/core/PillGroup";
const s0 = {
  variant: "default"
}, a0 = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": se(n, "pill-fz"),
    "--pill-height": se(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : _e(t)
  }
}), or = U((e, t) => {
  const n = j("Pill", s0, e), {
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
  } = n, x = r0(), y = Ma(), v = g || (x == null ? void 0 : x.size) || void 0, S = (y == null ? void 0 : y.variant) === "filled" ? "contrast" : l || "default", C = K({
    name: "Pill",
    classes: Vo,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: a0,
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
      Pr,
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
or.classes = Vo;
or.displayName = "@mantine/core/Pill";
or.Group = ka;
var jf = { field: "m-45c4369d" };
const c0 = {
  type: "visible"
}, _a = U((e, t) => {
  const n = j("PillsInputField", c0, e), {
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
  } = n, m = Ma(), g = Ln(), h = K({
    name: "PillsInputField",
    classes: jf,
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
      ref: Ne(t, m == null ? void 0 : m.fieldRef),
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
_a.classes = jf;
_a.displayName = "@mantine/core/PillsInputField";
const l0 = {}, lo = U((e, t) => {
  const n = j("PillsInput", l0, e), {
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
  return /* @__PURE__ */ b.createElement(t0, { value: { fieldRef: f, size: s, disabled: a, hasError: !!l, variant: u } }, /* @__PURE__ */ b.createElement(
    Jt,
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
lo.displayName = "@mantine/core/PillsInput";
lo.Field = _a;
function u0({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (Pn(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const d0 = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, Xn = U((e, t) => {
  const n = j("MultiSelect", d0, e), {
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
    maxDropdownHeight: T,
    searchValue: L,
    defaultSearchValue: k,
    onSearchChange: _,
    readOnly: A,
    disabled: M,
    onFocus: O,
    onBlur: F,
    onPaste: $,
    radius: H,
    rightSection: Y,
    rightSectionWidth: re,
    rightSectionPointerEvents: ye,
    rightSectionProps: ue,
    leftSection: Te,
    leftSectionWidth: ve,
    leftSectionPointerEvents: oe,
    leftSectionProps: we,
    inputContainer: Fe,
    inputWrapperOrder: Pe,
    withAsterisk: De,
    labelProps: Be,
    descriptionProps: ce,
    errorProps: X,
    wrapperProps: gn,
    description: Xe,
    label: Lt,
    error: Qe,
    maxValues: Ie,
    searchable: me,
    nothingFoundMessage: Mt,
    withCheckIcon: Xt,
    checkIconPosition: ae,
    hidePickedOptions: kt,
    withErrorStyles: Bm,
    name: jm,
    form: Vm,
    id: zm,
    clearable: Gm,
    clearButtonProps: Wm,
    hiddenInputProps: Hm,
    placeholder: Ac,
    hiddenInputValuesDivider: Um,
    ...qm
  } = n, Si = Ct(zm), Ci = yf(g), $r = ba(Ci), je = Ra({
    opened: h,
    defaultOpened: w,
    onDropdownOpen: x,
    onDropdownClose: () => {
      y == null || y(), je.resetSelectedOption();
    }
  }), {
    styleProps: Km,
    rest: { type: cR, ...Ym }
  } = xr(qm), [Le, jn] = It({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [Nr, Tr] = It({
    value: L,
    defaultValue: k,
    finalValue: "",
    onChange: _
  }), Ei = K({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: $c, resolvedStyles: Nc } = vd({
    props: n,
    styles: s,
    classNames: r
  }), Jm = (le) => {
    p == null || p(le), le.key === " " && !me && (le.preventDefault(), je.toggleDropdown()), le.key === "Backspace" && Nr.length === 0 && Le.length > 0 && jn(Le.slice(0, Le.length - 1));
  }, Xm = Le.map((le, Pi) => {
    var Mc;
    return /* @__PURE__ */ b.createElement(
      or,
      {
        key: `${le}-${Pi}`,
        withRemoveButton: !A,
        onRemove: () => jn(Le.filter((Qm) => le !== Qm)),
        unstyled: a,
        ...Ei("pill")
      },
      ((Mc = $r[le]) == null ? void 0 : Mc.label) || le
    );
  });
  W(() => {
    v && je.selectFirstOption();
  }, [v, Le]);
  const Tc = Gm && Le.length > 0 && !M && !A && /* @__PURE__ */ b.createElement(
    Z.ClearButton,
    {
      size: l,
      ...Wm,
      onClear: () => {
        jn([]), Tr("");
      }
    }
  ), Lc = u0({ data: Ci, value: Le });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    Z,
    {
      store: je,
      classNames: $c,
      styles: Nc,
      unstyled: a,
      size: l,
      readOnly: A,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (le) => {
        S == null || S(le), Tr(""), je.updateSelectedOptionIndex("selected"), Le.includes($r[le].value) ? jn(Le.filter((Pi) => Pi !== $r[le].value)) : Le.length < Ie && jn([...Le, $r[le].value]);
      },
      ...C
    },
    /* @__PURE__ */ b.createElement(Z.DropdownTarget, null, /* @__PURE__ */ b.createElement(
      lo,
      {
        ...Km,
        __staticSelector: "MultiSelect",
        classNames: $c,
        styles: Nc,
        unstyled: a,
        size: l,
        className: o,
        style: i,
        variant: m,
        disabled: M,
        radius: H,
        rightSection: Y || Tc || /* @__PURE__ */ b.createElement(Z.Chevron, { size: l, error: Qe, unstyled: a }),
        rightSectionPointerEvents: ye || (Tc ? "all" : "none"),
        rightSectionWidth: re,
        rightSectionProps: ue,
        leftSection: Te,
        leftSectionWidth: ve,
        leftSectionPointerEvents: oe,
        leftSectionProps: we,
        inputContainer: Fe,
        inputWrapperOrder: Pe,
        withAsterisk: De,
        labelProps: Be,
        descriptionProps: ce,
        errorProps: X,
        wrapperProps: gn,
        description: Xe,
        label: Lt,
        error: Qe,
        multiline: !0,
        withErrorStyles: Bm,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? je.openDropdown() : je.toggleDropdown(),
        "data-expanded": je.dropdownOpened || void 0,
        id: Si
      },
      /* @__PURE__ */ b.createElement(or.Group, { disabled: M, unstyled: a, ...Ei("pillsList") }, Xm, /* @__PURE__ */ b.createElement(Z.EventsTarget, null, /* @__PURE__ */ b.createElement(
        lo.Field,
        {
          ...Ym,
          ref: t,
          id: Si,
          placeholder: Ac,
          type: !me && !Ac ? "hidden" : "visible",
          ...Ei("inputField"),
          unstyled: a,
          onFocus: (le) => {
            O == null || O(le), me && je.openDropdown();
          },
          onBlur: (le) => {
            F == null || F(le), je.closeDropdown(), me && je.closeDropdown(), Tr("");
          },
          onKeyDown: Jm,
          value: Nr,
          onChange: (le) => {
            Tr(le.currentTarget.value), me && je.openDropdown(), v && je.selectFirstOption();
          },
          disabled: M,
          readOnly: A || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ b.createElement(
      $f,
      {
        data: kt ? Lc : Ci,
        hidden: A || M,
        filter: P,
        search: Nr,
        limit: E,
        hiddenWhenEmpty: !me || !Mt || kt && Lc.length === 0 && Nr.trim().length === 0,
        withScrollArea: N,
        maxDropdownHeight: T,
        filterOptions: me,
        value: Le,
        checkIconPosition: ae,
        withCheckIcon: Xt,
        nothingFoundMessage: Mt,
        unstyled: a,
        labelId: `${Si}-label`
      }
    )
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "hidden",
      name: jm,
      value: Le.join(Um),
      form: Vm,
      disabled: M,
      ...Hm
    }
  ));
});
Xn.classes = { ...Jt.classes, ...Z.classes };
Xn.displayName = "@mantine/core/MultiSelect";
const f0 = {
  duration: 100,
  transition: "fade"
};
function p0(e, t) {
  return { ...f0, ...t, ...e };
}
function m0({
  offset: e,
  position: t
}) {
  const [n, r] = q(!1), o = z(), { x: i, y: s, elements: a, refs: c, update: l, placement: u } = ia({
    placement: t,
    middleware: [
      ea({
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
  return W(() => {
    if (c.floating.current) {
      const m = o.current;
      m.addEventListener("mousemove", p);
      const g = Pt(c.floating.current);
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
var zo = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const g0 = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: vr("popover")
}, h0 = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : _e(t),
    "--tooltip-bg": n ? wt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Fa = U((e, t) => {
  const n = j("TooltipFloating", g0, e), {
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
  } = n, P = Ye(), E = K({
    name: "TooltipFloating",
    props: n,
    classes: zo,
    className: a,
    style: s,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: v,
    varsResolver: h0
  }), { handleMouseMove: N, x: T, y: L, opened: k, boundaryRef: _, floating: A, setOpened: M } = m0({
    offset: m,
    position: g
  });
  if (!Yt(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const O = Ne(_, r.ref, t), F = (H) => {
    var Y, re;
    (re = (Y = r.props).onMouseEnter) == null || re.call(Y, H), N(H), M(!0);
  }, $ = (H) => {
    var Y, re;
    (re = (Y = r.props).onMouseLeave) == null || re.call(Y, H), M(!1);
  };
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Lo, { ...S, withinPortal: i }, /* @__PURE__ */ b.createElement(
    V,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ...Hs(s, P),
          zIndex: w,
          display: !x && k ? "block" : "none",
          top: (L && Math.round(L)) ?? "",
          left: (T && Math.round(T)) ?? ""
        }
      }),
      variant: y,
      ref: A
    },
    p
  )), un(r, {
    ...r.props,
    [o]: O,
    onMouseEnter: F,
    onMouseLeave: $
  }));
});
Fa.classes = zo;
Fa.displayName = "@mantine/core/TooltipFloating";
const Vf = Kt(!1), b0 = Vf.Provider, y0 = () => mt(Vf), v0 = {
  openDelay: 0,
  closeDelay: 0
};
function zf(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", v0, e);
  return /* @__PURE__ */ b.createElement(b0, { value: !0 }, /* @__PURE__ */ b.createElement(Jy, { delay: { open: t, close: n } }, r));
}
zf.displayName = "@mantine/core/TooltipGroup";
function w0(e) {
  var C, P, E;
  const [t, n] = q(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = y0(), s = Ct(), { delay: a, currentId: c, setCurrentId: l } = ef(), u = Q(
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
  } = ia({
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      Fd(e.offset),
      ea({ padding: 8 }),
      Md(),
      Ud({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [_d()] : []
    ]
  }), { getReferenceProps: y, getFloatingProps: v } = av([
    Yy(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((P = e.events) != null && P.touch)
    }),
    sv(p, { enabled: (E = e.events) == null ? void 0 : E.focus, keyboardOnly: !0 }),
    cv(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    iv(p, { enabled: typeof e.opened > "u" }),
    Xy(p, { id: s })
  ]);
  cf({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), Gt(() => {
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
const Tl = {
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
  zIndex: vr("popover"),
  positionDependencies: []
}, x0 = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : _e(t),
    "--tooltip-bg": n ? wt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Dn = U((e, t) => {
  const n = j("Tooltip", Tl, e), {
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
    multiline: T,
    events: L,
    zIndex: k,
    disabled: _,
    positionDependencies: A,
    onClick: M,
    onMouseEnter: O,
    onMouseLeave: F,
    inline: $,
    variant: H,
    keepMounted: Y,
    vars: re,
    portalProps: ye,
    ...ue
  } = j("Tooltip", Tl, n), { dir: Te } = Sr(), ve = z(null), oe = w0({
    position: tf(Te, o),
    closeDelay: c,
    openDelay: a,
    onPositionChange: l,
    opened: u,
    events: L,
    arrowRef: ve,
    arrowOffset: S,
    offset: typeof E == "number" ? E + (y ? v / 2 : 0) : E,
    positionDependencies: [...A, r],
    inline: $
  }), we = K({
    name: "Tooltip",
    props: n,
    classes: zo,
    className: x,
    style: w,
    classNames: m,
    styles: g,
    unstyled: h,
    rootSelector: "tooltip",
    vars: re,
    varsResolver: x0
  });
  if (!Yt(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const Fe = Ne(oe.reference, r.ref, t), Pe = p0(N, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Lo, { ...ye, withinPortal: d }, /* @__PURE__ */ b.createElement(
    Mo,
    {
      ...Pe,
      keepMounted: Y,
      mounted: !_ && !!oe.opened,
      duration: oe.isGroupPhase ? 10 : Pe.duration
    },
    (De) => /* @__PURE__ */ b.createElement(
      V,
      {
        ...ue,
        variant: H,
        mod: { multiline: T },
        ...oe.getFloatingProps({
          ref: oe.floating,
          className: we("tooltip").className,
          style: {
            ...we("tooltip").style,
            ...De,
            zIndex: k,
            top: oe.y ?? 0,
            left: oe.x ?? 0
          }
        })
      },
      s,
      /* @__PURE__ */ b.createElement(
        sa,
        {
          ref: ve,
          arrowX: oe.arrowX,
          arrowY: oe.arrowY,
          visible: y,
          position: oe.placement,
          arrowSize: v,
          arrowOffset: S,
          arrowRadius: C,
          arrowPosition: P,
          ...we("arrow")
        }
      )
    )
  )), un(
    r,
    oe.getReferenceProps({
      onClick: M,
      onMouseEnter: O,
      onMouseLeave: F,
      onMouseMove: n.onMouseMove,
      onPointerDown: n.onPointerDown,
      onPointerEnter: n.onPointerEnter,
      [i]: Fe,
      className: gt(x, r.props.className),
      ...r.props
    })
  ));
});
Dn.classes = zo;
Dn.displayName = "@mantine/core/Tooltip";
Dn.Floating = Fa;
Dn.Group = zf;
const S0 = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Ba = U((e, t) => {
  const n = j("Select", S0, e), {
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
    maxDropdownHeight: T,
    size: L,
    searchable: k,
    rightSection: _,
    checkIconPosition: A,
    withCheckIcon: M,
    nothingFoundMessage: O,
    name: F,
    form: $,
    searchValue: H,
    defaultSearchValue: Y,
    onSearchChange: re,
    allowDeselect: ye,
    error: ue,
    rightSectionPointerEvents: Te,
    id: ve,
    clearable: oe,
    clearButtonProps: we,
    hiddenInputProps: Fe,
    ...Pe
  } = n, De = Ft(() => yf(g), [g]), Be = Ft(() => ba(De), [De]), ce = Ct(ve), [X, gn] = It({
    value: h,
    defaultValue: w,
    finalValue: null,
    onChange: m
  }), Xe = typeof X == "string" ? Be[X] : void 0, [Lt, Qe] = It({
    value: H,
    defaultValue: Y,
    finalValue: Xe ? Xe.label : "",
    onChange: re
  }), Ie = Ra({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Ie.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: Mt } = vd({
    props: n,
    styles: o,
    classNames: r
  });
  W(() => {
    x && Ie.selectFirstOption();
  }, [x, X]), W(() => {
    h === null && Qe(""), typeof h == "string" && Xe && Qe(Xe.label);
  }, [h, Xe]);
  const Xt = oe && !!X && !C && !S && /* @__PURE__ */ b.createElement(
    Z.ClearButton,
    {
      size: L,
      ...we,
      onClear: () => {
        gn(null), Qe("");
      }
    }
  );
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    Z,
    {
      store: Ie,
      __staticSelector: "Select",
      classNames: me,
      styles: Mt,
      unstyled: i,
      readOnly: S,
      onOptionSubmit: (ae) => {
        y == null || y(ae);
        const kt = ye && Be[ae].value === X ? null : Be[ae].value;
        gn(kt), Qe(typeof kt == "string" ? Be[ae].label : ""), Ie.closeDropdown();
      },
      size: L,
      ...v
    },
    /* @__PURE__ */ b.createElement(Z.Target, { targetType: k ? "input" : "button" }, /* @__PURE__ */ b.createElement(
      Jt,
      {
        id: ce,
        ref: t,
        rightSection: _ || Xt || /* @__PURE__ */ b.createElement(Z.Chevron, { size: L, error: ue, unstyled: i }),
        rightSectionPointerEvents: Te || (Xt ? "all" : "none"),
        ...Pe,
        size: L,
        __staticSelector: "Select",
        disabled: C,
        readOnly: S || !k,
        value: Lt,
        onChange: (ae) => {
          Qe(ae.currentTarget.value), Ie.openDropdown(), x && Ie.selectFirstOption();
        },
        onFocus: (ae) => {
          k && Ie.openDropdown(), d == null || d(ae);
        },
        onBlur: (ae) => {
          var kt;
          k && Ie.closeDropdown(), Qe(X != null && ((kt = Be[X]) == null ? void 0 : kt.label) || ""), f == null || f(ae);
        },
        onClick: (ae) => {
          k ? Ie.openDropdown() : Ie.toggleDropdown(), p == null || p(ae);
        },
        classNames: me,
        styles: Mt,
        unstyled: i,
        pointer: !k,
        error: ue
      }
    )),
    /* @__PURE__ */ b.createElement(
      $f,
      {
        data: De,
        hidden: S || C,
        filter: P,
        search: Lt,
        limit: E,
        hiddenWhenEmpty: !k || !O,
        withScrollArea: N,
        maxDropdownHeight: T,
        filterOptions: k && (Xe == null ? void 0 : Xe.label) !== Lt,
        value: X,
        checkIconPosition: A,
        withCheckIcon: M,
        nothingFoundMessage: O,
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
      form: $,
      disabled: C,
      ...Fe
    }
  ));
});
Ba.classes = { ...Jt.classes, ...Z.classes };
Ba.displayName = "@mantine/core/Select";
const C0 = {}, ir = U((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", C0, e);
  return /* @__PURE__ */ b.createElement(V, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
ir.displayName = "@mantine/core/Space";
const [E0, ja] = $t(
  "Tabs component was not found in the tree"
);
var Rr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const P0 = {}, Va = U((e, t) => {
  const n = j("TabsList", P0, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: c, style: l, ...u } = n, d = ja();
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
Va.classes = Rr;
Va.displayName = "@mantine/core/TabsList";
const D0 = {}, za = U((e, t) => {
  const n = j("TabsPanel", D0, e), { children: r, className: o, value: i, classNames: s, styles: a, style: c, ...l } = n, u = ja(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
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
za.classes = Rr;
za.displayName = "@mantine/core/TabsPanel";
const I0 = {}, Ga = U((e, t) => {
  const n = j("TabsTab", I0, e), {
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
  } = n, w = Ye(), { dir: x } = Sr(), y = ja(), v = a === y.value, S = (P) => {
    y.onChange(y.allowTabDeactivation && a === y.value ? null : a), c == null || c(P);
  }, C = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ b.createElement(
    dn,
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
      __vars: { "--tabs-color": d ? wt(d, w) : void 0 },
      onKeyDown: rd({
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
Ga.classes = Rr;
Ga.displayName = "@mantine/core/TabsTab";
const Ll = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", R0 = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, O0 = (e, { radius: t, color: n }) => ({
  root: {
    "--tabs-radius": _e(t),
    "--tabs-color": wt(n, e)
  }
}), ut = U((e, t) => {
  const n = j("Tabs", R0, e), {
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
  } = n, N = Ct(l), [T, L] = It({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), k = K({
    name: "Tabs",
    props: n,
    classes: Rr,
    className: S,
    style: C,
    classNames: x,
    styles: y,
    unstyled: v,
    vars: P,
    varsResolver: O0
  });
  return /* @__PURE__ */ b.createElement(
    E0,
    {
      value: {
        placement: h,
        value: T,
        orientation: s,
        id: N,
        loop: c,
        activateTabWithKeyboard: u,
        getTabId: eo(`${N}-tab`, Ll),
        getPanelId: eo(`${N}-panel`, Ll),
        onChange: L,
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
ut.classes = Rr;
ut.displayName = "@mantine/core/Tabs";
ut.Tab = Ga;
ut.Panel = za;
ut.List = Va;
const A0 = {}, Wa = U((e, t) => {
  const n = j("TextInput", A0, e);
  return /* @__PURE__ */ b.createElement(Jt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
Wa.classes = Jt.classes;
Wa.displayName = "@mantine/core/TextInput";
const $0 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function N0(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return $0.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: D(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var Gf = { root: "m-8a5d1357" };
const T0 = {
  order: 1
}, L0 = (e, { order: t, size: n, lineClamp: r }) => {
  const o = N0(t, n);
  return {
    root: {
      "--title-fw": o.fontWeight,
      "--title-lh": o.lineHeight,
      "--title-fz": o.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0
    }
  };
}, pn = U((e, t) => {
  const n = j("Title", T0, e), {
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
  } = n, m = K({
    name: "Title",
    props: n,
    classes: Gf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: L0
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
pn.classes = Gf;
pn.displayName = "@mantine/core/Title";
var Wf = { exports: {} }, M0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", k0 = M0, _0 = k0;
function Hf() {
}
function Uf() {
}
Uf.resetWarningCache = Hf;
var F0 = function() {
  function e(r, o, i, s, a, c) {
    if (c !== _0) {
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
    checkPropTypes: Uf,
    resetWarningCache: Hf
  };
  return n.PropTypes = n, n;
};
Wf.exports = F0();
var B0 = Wf.exports;
const Qt = /* @__PURE__ */ Gu(B0);
var j0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, V0 = Object.defineProperty, z0 = Object.defineProperties, G0 = Object.getOwnPropertyDescriptors, uo = Object.getOwnPropertySymbols, qf = Object.prototype.hasOwnProperty, Kf = Object.prototype.propertyIsEnumerable, Ml = (e, t, n) => t in e ? V0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kl = (e, t) => {
  for (var n in t || (t = {}))
    qf.call(t, n) && Ml(e, n, t[n]);
  if (uo)
    for (var n of uo(t))
      Kf.call(t, n) && Ml(e, n, t[n]);
  return e;
}, W0 = (e, t) => z0(e, G0(t)), H0 = (e, t) => {
  var n = {};
  for (var r in e)
    qf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && uo)
    for (var r of uo(e))
      t.indexOf(r) < 0 && Kf.call(e, r) && (n[r] = e[r]);
  return n;
}, Mn = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = H0(s, ["color", "size", "stroke", "children"]);
      return kc(
        "svg",
        kl(W0(kl({
          ref: i
        }, j0), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => kc(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Qt.string,
    size: Qt.oneOfType([Qt.string, Qt.number]),
    stroke: Qt.oneOfType([Qt.string, Qt.number])
  }, r.displayName = `${t}`, r;
}, U0 = Mn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), q0 = Mn("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]), K0 = Mn("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), Y0 = Mn("info-circle", "IconInfoCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 9h.01", key: "svg-1" }],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), J0 = Mn("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), X0 = Mn("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function Q0({ indeterminate: e, ...t }) {
  return e ? /* @__PURE__ */ I.jsx(q0, { ...t }) : /* @__PURE__ */ I.jsx(U0, { ...t });
}
const Z0 = {
  components: {
    Checkbox: Ir.extend({
      defaultProps: {
        icon: Q0,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, ex = "v1.2.0";
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var tx = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), _l = tx, Bi = () => Math.random().toString(36).substring(7).split("").join("."), nx = {
  INIT: `@@redux/INIT${Bi()}`,
  REPLACE: `@@redux/REPLACE${Bi()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bi()}`
}, fo = nx;
function Ha(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Yf(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(Yf)(e, t);
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
    if (!Ha(h))
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
      type: fo.REPLACE
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
      [_l]() {
        return this;
      }
    };
  }
  return f({
    type: fo.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [_l]: m
  };
}
function rx(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: fo.INIT
    }) > "u")
      throw new Error(ge(12));
    if (typeof n(void 0, {
      type: fo.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ge(13));
  });
}
function ox(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    rx(n);
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
function po(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ix(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(ge(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = e.map((c) => c(s));
    return i = po(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function sx(e) {
  return Ha(e) && "type" in e && typeof e.type == "string";
}
var Jf = Symbol.for("immer-nothing"), Fl = Symbol.for("immer-draftable"), qe = Symbol.for("immer-state");
function ct(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var In = Object.getPrototypeOf;
function Ut(e) {
  return !!e && !!e[qe];
}
function At(e) {
  var t;
  return e ? Xf(e) || Array.isArray(e) || !!e[Fl] || !!((t = e.constructor) != null && t[Fl]) || Wo(e) || Ho(e) : !1;
}
var ax = Object.prototype.constructor.toString();
function Xf(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = In(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === ax;
}
function sr(e, t) {
  Go(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Go(e) {
  const t = e[qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : Wo(e) ? 2 : Ho(e) ? 3 : 0;
}
function ys(e, t) {
  return Go(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Qf(e, t, n) {
  const r = Go(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function cx(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Wo(e) {
  return e instanceof Map;
}
function Ho(e) {
  return e instanceof Set;
}
function en(e) {
  return e.copy_ || e.base_;
}
function vs(e, t) {
  if (Wo(e))
    return new Map(e);
  if (Ho(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Xf(e))
    return In(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const n = Object.getOwnPropertyDescriptors(e);
  delete n[qe];
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
  return Object.create(In(e), n);
}
function Ua(e, t = !1) {
  return Uo(e) || Ut(e) || !At(e) || (Go(e) > 1 && (e.set = e.add = e.clear = e.delete = lx), Object.freeze(e), t && sr(e, (n, r) => Ua(r, !0))), e;
}
function lx() {
  ct(2);
}
function Uo(e) {
  return Object.isFrozen(e);
}
var ux = {};
function cn(e) {
  const t = ux[e];
  return t || ct(0, e), t;
}
var ar;
function Zf() {
  return ar;
}
function dx(e, t) {
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
function Bl(e, t) {
  t && (cn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ws(e) {
  xs(e), e.drafts_.forEach(fx), e.drafts_ = null;
}
function xs(e) {
  e === ar && (ar = e.parent_);
}
function jl(e) {
  return ar = dx(ar, e);
}
function fx(e) {
  const t = e[qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Vl(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[qe].modified_ && (ws(t), ct(4)), At(e) && (e = mo(t, e), t.parent_ || go(t, e)), t.patches_ && cn("Patches").generateReplacementPatches_(
    n[qe].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = mo(t, n, []), ws(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Jf ? e : void 0;
}
function mo(e, t, n) {
  if (Uo(t))
    return t;
  const r = t[qe];
  if (!r)
    return sr(
      t,
      (o, i) => zl(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return go(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), sr(
      i,
      (a, c) => zl(e, r, o, a, c, n, s)
    ), go(e, o, !1), n && e.patches_ && cn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function zl(e, t, n, r, o, i, s) {
  if (Ut(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ys(t.assigned_, r) ? i.concat(r) : void 0, c = mo(e, o, a);
    if (Qf(n, r, c), Ut(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (At(o) && !Uo(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    mo(e, o), (!t || !t.scope_.parent_) && go(e, o);
  }
}
function go(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ua(t, n);
}
function px(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Zf(),
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
  let o = r, i = qa;
  n && (o = [r], i = cr);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var qa = {
  get(e, t) {
    if (t === qe)
      return e;
    const n = en(e);
    if (!ys(n, t))
      return mx(e, n, t);
    const r = n[t];
    return e.finalized_ || !At(r) ? r : r === ji(e.base_, t) ? (Vi(e), e.copy_[t] = Cs(r, e)) : r;
  },
  has(e, t) {
    return t in en(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(en(e));
  },
  set(e, t, n) {
    const r = ep(en(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = ji(en(e), t), i = o == null ? void 0 : o[qe];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (cx(n, o) && (n !== void 0 || ys(e.base_, t)))
        return !0;
      Vi(e), Ss(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return ji(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Vi(e), Ss(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = en(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ct(11);
  },
  getPrototypeOf(e) {
    return In(e.base_);
  },
  setPrototypeOf() {
    ct(12);
  }
}, cr = {};
sr(qa, (e, t) => {
  cr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
cr.deleteProperty = function(e, t) {
  return cr.set.call(this, e, t, void 0);
};
cr.set = function(e, t, n) {
  return qa.set.call(this, e[0], t, n, e[0]);
};
function ji(e, t) {
  const n = e[qe];
  return (n ? en(n) : e)[t];
}
function mx(e, t, n) {
  var o;
  const r = ep(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function ep(e, t) {
  if (!(t in e))
    return;
  let n = In(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = In(n);
  }
}
function Ss(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ss(e.parent_));
}
function Vi(e) {
  e.copy_ || (e.copy_ = vs(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var gx = class {
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
      typeof n != "function" && ct(6), r !== void 0 && typeof r != "function" && ct(7);
      let o;
      if (At(t)) {
        const i = jl(this), s = Cs(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? ws(i) : xs(i);
        }
        return Bl(i, r), Vl(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Jf && (o = void 0), this.autoFreeze_ && Ua(o, !0), r) {
          const i = [], s = [];
          cn("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        ct(1, t);
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
    At(e) || ct(8), Ut(e) && (e = tp(e));
    const t = jl(this), n = Cs(e, void 0);
    return n[qe].isManual_ = !0, xs(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[qe];
    (!n || !n.isManual_) && ct(9);
    const { scope_: r } = n;
    return Bl(r, t), Vl(void 0, r);
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
    const r = cn("Patches").applyPatches_;
    return Ut(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function Cs(e, t) {
  const n = Wo(e) ? cn("MapSet").proxyMap_(e, t) : Ho(e) ? cn("MapSet").proxySet_(e, t) : px(e, t);
  return (t ? t.scope_ : Zf()).drafts_.push(n), n;
}
function tp(e) {
  return Ut(e) || ct(10, e), np(e);
}
function np(e) {
  if (!At(e) || Uo(e))
    return e;
  const t = e[qe];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = vs(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = vs(e, !0);
  return sr(n, (r, o) => {
    Qf(n, r, np(o));
  }), t && (t.finalized_ = !1), n;
}
var Ke = new gx(), rp = Ke.produce;
Ke.produceWithPatches.bind(
  Ke
);
Ke.setAutoFreeze.bind(Ke);
Ke.setUseStrictShallowCopy.bind(Ke);
Ke.applyPatches.bind(Ke);
Ke.createDraft.bind(Ke);
Ke.finishDraft.bind(Ke);
function hx(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function bx(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function yx(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Gl = (e) => Array.isArray(e) ? e : [e];
function vx(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return yx(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function wx(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var xx = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Sx = typeof WeakRef < "u" ? WeakRef : xx, Cx = 0, Wl = 1;
function Fr() {
  return {
    s: Cx,
    v: void 0,
    o: null,
    p: null
  };
}
function Ka(e, t = {}) {
  let n = Fr();
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
        h === void 0 ? (a = Fr(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = Fr(), g.set(m, a)) : a = h;
      }
    }
    const l = a;
    let u;
    if (a.s === Wl ? u = a.v : (u = e.apply(null, arguments), i++), l.s = Wl, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new Sx(u) : u;
    }
    return l.v = u, u;
  }
  return s.clearCache = () => {
    n = Fr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function op(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), hx(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...n,
      ...c
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Ka,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = Gl(f), w = Gl(m), x = vx(o), y = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...h), v = p(function() {
      s++;
      const C = wx(
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
var kn = /* @__PURE__ */ op(Ka), Ex = Object.assign(
  (e, t = kn) => {
    bx(
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
  { withTypes: () => Ex }
);
function ip(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var Px = ip(), Dx = ip, Ix = (...e) => {
  const t = op(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(Ut(s) ? tp(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
Ix(Ka);
var Rx = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? po : po.apply(null, arguments);
}, Ox = (e) => e && typeof e.match == "function";
function vt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(ke(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => sx(r) && r.type === e, n;
}
var sp = class Yn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Yn.prototype);
  }
  static get [Symbol.species]() {
    return Yn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Yn(...t[0].concat(this)) : new Yn(...t.concat(this));
  }
};
function Hl(e) {
  return At(e) ? rp(e, () => {
  }) : e;
}
function Ul(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(ke(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Ax(e) {
  return typeof e == "boolean";
}
var $x = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new sp();
  return n && (Ax(n) ? s.push(Px) : s.push(Dx(n.extraArgument))), s;
}, Nx = "RTK_autoBatch", ap = (e) => (t) => {
  setTimeout(t, e);
}, Tx = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : ap(10), Lx = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Tx : e.type === "callback" ? e.queueNotification : ap(e.timeout), l = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[Nx]), i = !o, i && (s || (s = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Mx = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new sp(e);
  return r && o.push(Lx(typeof r == "object" ? r : void 0)), o;
}, kx = !0;
function _x(e) {
  const t = $x(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Ha(n))
    a = ox(n);
  else
    throw new Error(ke(1));
  let c;
  typeof r == "function" ? c = r(t) : c = t();
  let l = po;
  o && (l = Rx({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !kx,
    ...typeof o == "object" && o
  }));
  const u = ix(...c), d = Mx(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = l(...f);
  return Yf(a, i, p);
}
function cp(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(ke(28));
      if (a in t)
        throw new Error(ke(29));
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
function Fx(e) {
  return typeof e == "function";
}
function Bx(e, t) {
  let [n, r, o] = cp(t), i;
  if (Fx(e))
    i = () => Hl(e());
  else {
    const a = Hl(e);
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
        if (Ut(u)) {
          const p = d(u, c);
          return p === void 0 ? u : p;
        } else {
          if (At(u))
            return rp(u, (f) => d(f, c));
          {
            const f = d(u, c);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(ke(9));
            }
            return f;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var jx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", lp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += jx[Math.random() * 64 | 0];
  return t;
}, Vx = (e, t) => Ox(e) ? e.match(t) : e(t);
function zx(...e) {
  return (t) => e.some((n) => Vx(n, t));
}
var Gx = ["name", "message", "stack", "code"], zi = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Re(this, "_type");
    this.payload = e, this.meta = t;
  }
}, ql = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Re(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Wx = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of Gx)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, mn = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = vt(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = vt(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), s = vt(t + "/rejected", (c, l, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || Wx)(c || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(c) : lp(), p = new AbortController();
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
            if (Ux(C) && (C = await C), C === !1 || p.signal.aborted)
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
              rejectWithValue: (E, N) => new zi(E, N),
              fulfillWithValue: (E, N) => new ql(E, N)
            })).then((E) => {
              if (E instanceof zi)
                throw E;
              return E instanceof ql ? o(E.payload, f, c, E.meta) : o(E, f, c);
            })]);
          } catch (C) {
            x = C instanceof zi ? s(null, f, c, C.payload, C.meta) : s(C, f, c);
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
            return w.then(Hx);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: zx(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Hx(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ux(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var qx = Symbol.for("rtk-slice-createasyncthunk");
function Kx(e, t) {
  return `${e}/${t}`;
}
function Yx({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[qx];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(ke(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(Xx()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(y, v) {
        const S = typeof y == "string" ? y : y.type;
        if (!S)
          throw new Error(ke(12));
        if (S in l.sliceCaseReducersByType)
          throw new Error(ke(13));
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
        type: Kx(i, y),
        createNotation: typeof o.reducers == "function"
      };
      Zx(v) ? tS(S, v, u, t) : Qx(S, v, u);
    });
    function d() {
      const [y = {}, v = [], S = void 0] = typeof o.extraReducers == "function" ? cp(o.extraReducers) : [o.extraReducers], C = {
        ...y,
        ...l.sliceCaseReducersByType
      };
      return Bx(o.initialState, (P) => {
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
        const E = Ul(p, v, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Ul(E, P, {
          insert: () => {
            const N = {};
            for (const [T, L] of Object.entries(o.selectors ?? {}))
              N[T] = Jx(L, P, h, v);
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
function Jx(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var Ya = Yx();
function Xx() {
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
function Qx({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !eS(r))
      throw new Error(ke(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? vt(e, s) : vt(e));
}
function Zx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function eS(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function tS({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(ke(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = n, d = o(e, i, u);
  r.exposeAction(t, d), s && r.addCase(d.fulfilled, s), a && r.addCase(d.pending, a), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
    fulfilled: s || Br,
    pending: a || Br,
    rejected: c || Br,
    settled: l || Br
  });
}
function Br() {
}
var nS = (e, t) => {
  if (typeof e != "function")
    throw new Error(ke(32));
}, Ja = "listenerMiddleware", rS = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = vt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(ke(21));
  return nS(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, oS = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = rS(e);
  return {
    id: lp(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(ke(22));
    }
  };
}, {
  withTypes: () => oS
}), iS = Object.assign(vt(`${Ja}/add`), {
  withTypes: () => iS
});
vt(`${Ja}/removeAll`);
var sS = Object.assign(vt(`${Ja}/remove`), {
  withTypes: () => sS
});
function ke(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class aS {
  constructor(t = {}) {
    Re(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Re(this, "securityData", null);
    Re(this, "securityWorker");
    Re(this, "abortControllers", /* @__PURE__ */ new Map());
    Re(this, "customFetch", (...t) => fetch(...t));
    Re(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Re(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    Re(this, "contentFormatters", {
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
    Re(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const r = this.abortControllers.get(t);
        return r ? r.signal : void 0;
      }
      const n = new AbortController();
      return this.abortControllers.set(t, n), n.signal;
    });
    Re(this, "abortRequest", (t) => {
      const n = this.abortControllers.get(t);
      n && (n.abort(), this.abortControllers.delete(t));
    });
    Re(this, "request", async ({
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
class cS extends aS {
  constructor() {
    super(...arguments);
    Re(this, "api", {
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
class qo extends cS {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const Xa = Lg, et = Eg, lS = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, uS = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Kl = (e, t) => {
  e.language = t.payload, be.changeLanguage(t.payload);
}, Qa = vt("settings/setSettings"), up = Ya({
  name: "settings",
  initialState: uS,
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
    setLanguage: Kl,
    setIncludeTestDictionaries: (e, t) => {
      e.includeTestDictionaries = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(
      Qa,
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
        JSON.stringify(t.bsddApiEnvironment) !== JSON.stringify(n) && (t.bsddApiEnvironment = n), JSON.stringify(t.mainDictionary) !== JSON.stringify(r) && (t.mainDictionary = r), JSON.stringify(t.ifcDictionary) !== JSON.stringify(o) && (t.ifcDictionary = o), JSON.stringify(t.filterDictionaries) !== JSON.stringify(i) && (t.filterDictionaries = i), JSON.stringify(t.language) !== JSON.stringify(s) && Kl(t, { payload: s, type: "setLanguage" }), JSON.stringify(t.includeTestDictionaries) !== JSON.stringify(a) && (t.includeTestDictionaries = a);
      }
    );
  }
}), dp = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? lS[t] : null;
}, fp = kn(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.ifcDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t, n) => {
    const r = [e, t, ...n].filter(Boolean), o = new Map(r.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
);
kn(
  fp,
  (e) => e.map((t) => t.ifcClassification.location)
);
const dS = (e) => e.settings.mainDictionary, fS = (e) => e.settings.language, pS = (e) => e.settings.includeTestDictionaries, {
  setBsddApiEnvironment: mS,
  setMainDictionary: fR,
  setFilterDictionaries: pR,
  setLanguage: gS,
  setIncludeTestDictionaries: hS
} = up.actions, bS = up.reducer, Es = 500, yS = 500;
let rn = null, Jn = {};
const Yl = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, vS = (e) => {
  const t = dp(e);
  return t && (!rn || rn.baseUrl !== t) && (rn = new qo(t)), rn;
};
mn("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (!e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new qo(e), o = yS;
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
const Ps = mn("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: e, dictionaryUris: t }, n) => {
  if (!e || !t || t.length === 0)
    return n.rejectWithValue("Invalid parameters");
  const r = new qo(e), o = {};
  return await Promise.all(
    t.map(async (i) => {
      var s;
      try {
        const a = await r.api.dictionaryV1List({ Uri: i });
        a.ok && a.data ? (s = a.data.dictionaries) == null || s.forEach((c) => {
          o[c.uri] = c;
        }) : console.error(`Failed to fetch dictionaries for URI: ${i}`);
      } catch (a) {
        console.error(`Error fetching dictionaries for URI: ${i}`, a);
      }
    })
  ), o;
});
async function Jl(e, t, n, r) {
  const o = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    ClassType: "Class",
    Offset: n,
    Limit: Es,
    languageCode: r || void 0
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const wS = async (e, t, n) => {
  const r = [];
  let o = 0;
  const i = await Jl(e, t, o, n), s = i.classesTotalCount;
  if (s == null)
    throw new Error("Total count is null or undefined");
  r.push(...i.classes ?? []);
  const a = [];
  for (o = Es; o < s; o += Es)
    a.push(Jl(e, t, o, n));
  return (await Promise.all(a)).forEach((l) => {
    r.push(...l.classes ?? []);
  }), r;
}, Za = mn(
  "bsdd/fetchDictionaryClasses",
  async ({ location: e, languageCode: t }, { getState: n, dispatch: r }) => {
    const o = n();
    if (o.bsdd.dictionaryClasses[e])
      return o.bsdd.dictionaryClasses[e];
    if (Jn[e])
      return Jn[e];
    const i = vS(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const s = wS(i, e, t).then((a) => (r({ type: "bsdd/addDictionaryClasses", payload: { uri: e, data: a } }), a)).finally(() => {
      delete Jn[e];
    });
    return Jn[e] = s, s;
  }
);
mn(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (e, { dispatch: t, rejectWithValue: n }) => {
    const { dictionaryUris: r, languageCode: o } = e;
    if (!r || r.length === 0)
      return n("No dictionary URIs provided");
    try {
      return await Promise.all(r.map((i) => t(Za({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return n("Failed to fetch dictionary classes");
    }
  }
);
mn(
  "bsdd/updateDictionaries",
  async (e) => e
);
const pp = Ya({
  name: "bsdd",
  initialState: Yl,
  reducers: {
    resetState: () => Yl,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(Ps.pending, (t) => {
      t.loaded = !1;
    }).addCase(Ps.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Za.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
mn("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
  const r = t(), o = et(fS);
  if (r.bsdd.classes[e])
    return r.bsdd.classes[e];
  if (!rn)
    throw new Error("BsddApi is not initialized");
  const i = await rn.api.classV1List({
    Uri: e,
    IncludeClassProperties: !0,
    IncludeChildClassReferences: !0,
    IncludeClassRelations: !0,
    // IncludeReverseRelations: true,
    languageCode: o || void 0
  });
  if (!i.ok)
    throw new Error(`HTTP error! status: ${i.status}`);
  const { data: s } = i;
  return n({ type: "bsdd/addClass", payload: { uri: e, data: s } }), s;
});
const mp = (e, t) => e.bsdd.dictionaries[t], xS = (e, t) => e.bsdd.dictionaryClasses[t], gp = (e) => e.bsdd.dictionaries, SS = (e) => e.bsdd.loaded, { resetState: CS } = pp.actions;
function ES(e) {
  return (t) => {
    rn = new qo(e), Jn = {}, t(CS());
  };
}
const PS = pp.reducer;
function ec(e) {
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
const DS = async (e, t, n) => {
  const r = t.settings.language;
  if (!(e != null && e.location))
    return null;
  const o = xS(t, e.location);
  if (o)
    return o;
  const i = await n(Za({ location: e.location, languageCode: r }));
  return i.payload ? i.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function IS(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function vn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function RS(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return vn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await DS(e.referencedSource, n, t);
  if (!r)
    return vn("Failed to fetch classes for the referencedSource location", e);
  const o = IS(e, r);
  if (!o)
    return vn(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      e
    );
  if (!o.uri)
    return vn("Failed to find a URI for the matched class", e);
  const { uri: i, code: s, name: a } = o, c = {
    ...e,
    location: i ?? void 0,
    identification: s ?? void 0,
    name: a ?? void 0
  };
  if (!c.referencedSource || !c.referencedSource.location)
    return vn("referencedSource or its location is missing", c);
  const l = mp(n, c.referencedSource.location);
  return l ? (c.referencedSource = ec(l), {
    ifcClassificationReference: c,
    validationState: "fixed",
    message: null
  }) : vn("Failed to find a matching dictionary for the matched class", c);
}
function Xl(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = mp(e, t.ifcClassification.location), r = ec(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const OS = {
  ifcEntities: null
}, hp = Ya({
  name: "ifcData",
  initialState: OS,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), AS = (e) => e.ifcData.ifcEntities, { setIfcData: $S } = hp.actions;
function NS(e) {
  return e.endsWith("Type") ? e.slice(0, -4) : e;
}
function TS(e, t) {
  return (e ?? "") + (t ?? "");
}
function LS(e, t) {
  return {
    type: "IfcClassificationReference",
    identification: TS(e.type, e.predefinedType),
    referencedSource: t
  };
}
async function MS(e, t, n) {
  return (await Promise.all(
    e.map(async (o) => {
      if (o.type === "IfcClassificationReference") {
        const { ifcClassificationReference: i, validationState: s, message: a } = await RS(
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
const kS = mn(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        var c;
        i.type && (i.type = NS(i.type));
        const s = [
          ...i.hasAssociations || [],
          LS(i, (c = r.settings.ifcDictionary) == null ? void 0 : c.ifcClassification)
        ], a = await MS(s, t, r);
        return { ...i, hasAssociations: a };
      })
    );
    t($S(o));
  }
), _S = hp.reducer, Ds = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
function FS(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function BS(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function jS(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return FS(i) && BS(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function VS({ item: e, index: t, setCardColor: n }) {
  var m;
  const { t: r } = St(), o = et(fp), i = et(dS), [s, a] = q("grey"), [c, l] = q([]), [u, d] = q([]);
  W(() => {
    function g(h) {
      a(h), n(t, h);
    }
    c.every((h) => h !== null) ? g("green") : c.some((h) => h !== null) ? g("orange") : g("red");
  }, [c, t, n]), W(() => {
    const g = c.map((h) => h !== null ? "green" : "red");
    d(g);
  }, [c]), W(() => {
    l(
      o.map((g) => jS(e, g))
    );
  }, [e, o]);
  function f(g) {
    var x;
    const h = { ...g };
    h.predefinedType === null && (h.predefinedType = ""), console.log("Open bsddSearch", h);
    const w = JSON.stringify(h);
    (x = window == null ? void 0 : window.bsddBridge) == null || x.bsddSearch(w);
  }
  function p(g) {
    var w;
    const h = JSON.stringify(g);
    (w = window == null ? void 0 : window.bsddBridge) == null || w.bsddSelect(h);
  }
  return /* @__PURE__ */ I.jsxs(En, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ I.jsx(rr, { size: "1.5em", color: Ds[s] }),
    /* @__PURE__ */ I.jsxs(sn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ I.jsx(sn.Target, { children: /* @__PURE__ */ I.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ I.jsx(Se, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ I.jsxs(sn.Dropdown, { children: [
        /* @__PURE__ */ I.jsxs(Se, { children: [
          r("dictionaryValidationSummaryLabel"),
          ":"
        ] }),
        o.map((g, h) => {
          const w = g.ifcClassification.location || h;
          return /* @__PURE__ */ I.jsxs(En, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
            /* @__PURE__ */ I.jsx(rr, { size: "1em", color: Ds[u[h]] }),
            /* @__PURE__ */ I.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ I.jsx(Se, { className: "truncate", children: g.ifcClassification.name }) })
          ] }, w);
        })
      ] })
    ] }),
    /* @__PURE__ */ I.jsx(Dn, { label: r("attachToType"), children: /* @__PURE__ */ I.jsx(
      tr,
      {
        radius: "xl",
        onClick: () => f(e),
        disabled: !((m = i == null ? void 0 : i.ifcClassification) != null && m.location),
        children: /* @__PURE__ */ I.jsx(J0, { size: 20 })
      }
    ) }),
    /* @__PURE__ */ I.jsx(Dn, { label: r("selectObjects"), children: /* @__PURE__ */ I.jsx(tr, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ I.jsx(X0, { size: 20 }) }) })
  ] });
}
function zS({ category: e, items: t, index: n }) {
  const { t: r } = St(), [o, i] = q("grey"), [s, a] = q(new Array(t.length).fill("grey")), c = Q((l, u) => {
    a((d) => {
      const f = [...d];
      return f[l] = u, f;
    });
  }, []);
  return W(() => {
    s.includes("orange") || s.includes("red") && s.includes("green") ? i("orange") : s.every((l) => l === "red") ? i("red") : s.every((l) => l === "green") && i("green");
  }, [s]), /* @__PURE__ */ I.jsxs(ne.Item, { value: n, children: [
    /* @__PURE__ */ I.jsx(ne.Control, { children: /* @__PURE__ */ I.jsxs(En, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ I.jsx(rr, { size: "1.5em", color: Ds[o], children: /* @__PURE__ */ I.jsx(Se, { size: "xs", c: "white", children: t.length }) }),
      /* @__PURE__ */ I.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ I.jsx(Se, { className: "truncate", children: e.length > 0 ? e : r("noDescription") }) })
    ] }) }),
    /* @__PURE__ */ I.jsx(ne.Panel, { mt: "-xs", pl: "xl", children: t.map((l, u) => /* @__PURE__ */ I.jsx(VS, { item: l, index: u, setCardColor: c }, u)) })
  ] }, e);
}
function GS(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function WS({ loading: e }) {
  const { t } = St(), n = et(AS), r = Ft(() => n ? Object.entries(GS(n, "description")).map(([s, a], c) => /* @__PURE__ */ I.jsx(zS, { category: s, items: a, index: s || c.toString() }, s)) : [], [n]), o = /* @__PURE__ */ I.jsx(Y0, {});
  return /* @__PURE__ */ I.jsx(ut.Panel, { value: "link", children: /* @__PURE__ */ I.jsxs(V, { pos: "relative", style: { height: "100vh" }, children: [
    /* @__PURE__ */ I.jsx(La, { visible: e || !n }),
    n && r.length === 0 ? /* @__PURE__ */ I.jsxs(ha, { title: "No entities selected...", icon: o, mt: "xl", children: [
      t("entitySelectionInstruction"),
      /* @__PURE__ */ I.jsx(ir, { h: "md" }),
      t("needHelp"),
      " ",
      /* @__PURE__ */ I.jsx(
        "a",
        {
          href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",
          target: "_blank",
          rel: "noreferrer",
          children: t("checkDocumentation")
        }
      )
    ] }) : /* @__PURE__ */ I.jsx(ne, { chevronPosition: "left", children: r })
  ] }) });
}
function HS({ id: e }) {
  const { t } = St();
  return /* @__PURE__ */ I.jsxs(ne.Item, { value: e.toString(), children: [
    /* @__PURE__ */ I.jsx(ne.Control, { children: /* @__PURE__ */ I.jsx(pn, { order: 5, children: t("appInfoLabel") }) }),
    /* @__PURE__ */ I.jsxs(ne.Panel, { children: [
      /* @__PURE__ */ I.jsxs(Et, { gutter: "md", children: [
        /* @__PURE__ */ I.jsx(Et.Col, { span: 3, children: /* @__PURE__ */ I.jsx(Se, { size: "xs", children: "UI App version:" }) }),
        /* @__PURE__ */ I.jsx(Et.Col, { span: 6, children: /* @__PURE__ */ I.jsx(Se, { size: "xs", children: ex }) })
      ] }),
      /* @__PURE__ */ I.jsxs(Et, { gutter: "md", children: [
        /* @__PURE__ */ I.jsx(Et.Col, { span: 3, children: /* @__PURE__ */ I.jsx(Se, { size: "xs", children: "Documentation:" }) }),
        /* @__PURE__ */ I.jsx(Et.Col, { span: 6, children: /* @__PURE__ */ I.jsx(Se, { size: "xs", children: /* @__PURE__ */ I.jsx(
          "a",
          {
            href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",
            target: "_blank",
            rel: "noreferrer",
            children: t("checkDocumentation")
          }
        ) }) })
      ] })
    ] })
  ] }, e);
}
const bp = "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/", US = "Export Type to IFC As";
function Ql(e, t) {
  return Object.values(e).find((n) => n.uri === t);
}
function Gi(e, t, n = "") {
  if (!e)
    return null;
  const r = t.find((o) => o.ifcClassification.location === e.uri);
  return r || {
    ifcClassification: ec(e),
    parameterMapping: n
  };
}
const tc = kn(
  gp,
  (e) => Object.values(e).map(
    (t) => ({
      value: t.uri,
      label: `${t.name} (${t.version})`
    })
  )
), Wi = (e) => e && e.ifcClassification && e.ifcClassification.location ? [
  {
    value: e.ifcClassification.location,
    label: e.ifcClassification.name || ""
  }
] : [], qS = kn(
  tc,
  (e) => e.filter((t) => t.value.startsWith(bp))
), KS = kn(
  tc,
  (e) => e.filter((t) => !t.value.startsWith(bp))
);
function YS({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r,
  setIsLoading: o
}) {
  const { t: i } = St(), s = et(gp), a = et(tc), c = et(qS), l = et(KS), u = Ft(() => Wi(t == null ? void 0 : t.mainDictionary), [t == null ? void 0 : t.mainDictionary]), d = Ft(() => Wi(t == null ? void 0 : t.ifcDictionary), [t == null ? void 0 : t.ifcDictionary]), f = Ft(() => (t == null ? void 0 : t.filterDictionaries.filter((h) => h.ifcClassification && h.ifcClassification.location).map(Wi).flat()) || [], [t == null ? void 0 : t.filterDictionaries]), p = Q(
    (h) => {
      const w = h[0], x = Ql(Object.values(s), w) || null, y = Gi(
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
      const w = h[0], x = Ql(Object.values(s), w) || null, y = ((C = t.ifcDictionary) == null ? void 0 : C.parameterMapping) || US, v = Gi(
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
      const w = Object.values(s).filter((S) => h.includes(S.uri)).map((S) => Gi(S, (t == null ? void 0 : t.filterDictionaries) || [])).filter(
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
  return W(() => {
    a.length !== 0 && o(!1);
  }, [a, o]), /* @__PURE__ */ I.jsxs(ne.Item, { value: e.toString(), children: [
    /* @__PURE__ */ I.jsxs(ne.Control, { children: [
      /* @__PURE__ */ I.jsx(pn, { order: 5, children: i("dictionarySelectionLabel") }),
      /* @__PURE__ */ I.jsx(Se, { size: "xs", c: "dimmed", children: i("dictionarySelectionInstruction") })
    ] }),
    /* @__PURE__ */ I.jsxs(ne.Panel, { children: [
      /* @__PURE__ */ I.jsx(
        Xn,
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
      /* @__PURE__ */ I.jsx(ir, { h: "xs" }),
      /* @__PURE__ */ I.jsx(
        Xn,
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
      /* @__PURE__ */ I.jsx(ir, { h: "xs" }),
      /* @__PURE__ */ I.jsx(
        Xn,
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
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
function JS(e, t) {
  if (lr(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (lr(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XS(e) {
  var t = JS(e, "string");
  return lr(t) == "symbol" ? t : String(t);
}
function QS(e, t, n) {
  return t = XS(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Zl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zl(Object(n), !0).forEach(function(r) {
      QS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Me(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var tu = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Hi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, nu = {
  INIT: "@@redux/INIT" + Hi(),
  REPLACE: "@@redux/REPLACE" + Hi(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Hi();
  }
};
function ZS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function yp(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Me(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Me(1));
    return n(yp)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Me(2));
  var o = e, i = t, s = [], a = s, c = !1;
  function l() {
    a === s && (a = s.slice());
  }
  function u() {
    if (c)
      throw new Error(Me(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Me(4));
    if (c)
      throw new Error(Me(5));
    var h = !0;
    return l(), a.push(g), function() {
      if (h) {
        if (c)
          throw new Error(Me(6));
        h = !1, l();
        var x = a.indexOf(g);
        a.splice(x, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!ZS(g))
      throw new Error(Me(7));
    if (typeof g.type > "u")
      throw new Error(Me(8));
    if (c)
      throw new Error(Me(9));
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
      throw new Error(Me(10));
    o = g, f({
      type: nu.REPLACE
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
          throw new Error(Me(11));
        function y() {
          x.next && x.next(u());
        }
        y();
        var v = h(y);
        return {
          unsubscribe: v
        };
      }
    }, g[tu] = function() {
      return this;
    }, g;
  }
  return f({
    type: nu.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[tu] = m, r;
}
function ru(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function ou(e, t) {
  if (typeof e == "function")
    return ru(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Me(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = ru(o, t));
  }
  return n;
}
function vp() {
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
function eC() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(Me(15));
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(s);
      });
      return i = vp.apply(void 0, a)(o.dispatch), eu(eu({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var wp = { exports: {} }, xp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn = b;
function tC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nC = typeof Object.is == "function" ? Object.is : tC, rC = Rn.useState, oC = Rn.useEffect, iC = Rn.useLayoutEffect, sC = Rn.useDebugValue;
function aC(e, t) {
  var n = t(), r = rC({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return iC(function() {
    o.value = n, o.getSnapshot = t, Ui(o) && i({ inst: o });
  }, [e, n, t]), oC(function() {
    return Ui(o) && i({ inst: o }), e(function() {
      Ui(o) && i({ inst: o });
    });
  }, [e]), sC(n), n;
}
function Ui(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nC(e, n);
  } catch {
    return !0;
  }
}
function cC(e, t) {
  return t();
}
var lC = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? cC : aC;
xp.useSyncExternalStore = Rn.useSyncExternalStore !== void 0 ? Rn.useSyncExternalStore : lC;
wp.exports = xp;
var Sp = wp.exports, uC = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko = b, dC = Sp;
function fC(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pC = typeof Object.is == "function" ? Object.is : fC, mC = dC.useSyncExternalStore, gC = Ko.useRef, hC = Ko.useEffect, bC = Ko.useMemo, yC = Ko.useDebugValue;
uC.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = gC(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = bC(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, pC(u, p))
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
  var a = mC(e, i[0], i[1]);
  return hC(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), yC(a), a;
};
function vC(e) {
  e();
}
let Cp = vC;
const wC = (e) => Cp = e, xC = () => Cp, iu = Symbol.for("react-redux-context"), su = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function SC() {
  var e;
  if (!R.createContext)
    return {};
  const t = (e = su[iu]) != null ? e : su[iu] = /* @__PURE__ */ new Map();
  let n = t.get(R.createContext);
  return n || (n = R.createContext(null), t.set(R.createContext, n)), n;
}
const Ep = /* @__PURE__ */ SC(), CC = () => {
  throw new Error("uSES not initialized!");
};
var Pp = { exports: {} }, ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pe = typeof Symbol == "function" && Symbol.for, nc = pe ? Symbol.for("react.element") : 60103, rc = pe ? Symbol.for("react.portal") : 60106, Yo = pe ? Symbol.for("react.fragment") : 60107, Jo = pe ? Symbol.for("react.strict_mode") : 60108, Xo = pe ? Symbol.for("react.profiler") : 60114, Qo = pe ? Symbol.for("react.provider") : 60109, Zo = pe ? Symbol.for("react.context") : 60110, oc = pe ? Symbol.for("react.async_mode") : 60111, ei = pe ? Symbol.for("react.concurrent_mode") : 60111, ti = pe ? Symbol.for("react.forward_ref") : 60112, ni = pe ? Symbol.for("react.suspense") : 60113, EC = pe ? Symbol.for("react.suspense_list") : 60120, ri = pe ? Symbol.for("react.memo") : 60115, oi = pe ? Symbol.for("react.lazy") : 60116, PC = pe ? Symbol.for("react.block") : 60121, DC = pe ? Symbol.for("react.fundamental") : 60117, IC = pe ? Symbol.for("react.responder") : 60118, RC = pe ? Symbol.for("react.scope") : 60119;
function Je(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case nc:
        switch (e = e.type, e) {
          case oc:
          case ei:
          case Yo:
          case Xo:
          case Jo:
          case ni:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Zo:
              case ti:
              case oi:
              case ri:
              case Qo:
                return e;
              default:
                return t;
            }
        }
      case rc:
        return t;
    }
  }
}
function Dp(e) {
  return Je(e) === ei;
}
ee.AsyncMode = oc;
ee.ConcurrentMode = ei;
ee.ContextConsumer = Zo;
ee.ContextProvider = Qo;
ee.Element = nc;
ee.ForwardRef = ti;
ee.Fragment = Yo;
ee.Lazy = oi;
ee.Memo = ri;
ee.Portal = rc;
ee.Profiler = Xo;
ee.StrictMode = Jo;
ee.Suspense = ni;
ee.isAsyncMode = function(e) {
  return Dp(e) || Je(e) === oc;
};
ee.isConcurrentMode = Dp;
ee.isContextConsumer = function(e) {
  return Je(e) === Zo;
};
ee.isContextProvider = function(e) {
  return Je(e) === Qo;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nc;
};
ee.isForwardRef = function(e) {
  return Je(e) === ti;
};
ee.isFragment = function(e) {
  return Je(e) === Yo;
};
ee.isLazy = function(e) {
  return Je(e) === oi;
};
ee.isMemo = function(e) {
  return Je(e) === ri;
};
ee.isPortal = function(e) {
  return Je(e) === rc;
};
ee.isProfiler = function(e) {
  return Je(e) === Xo;
};
ee.isStrictMode = function(e) {
  return Je(e) === Jo;
};
ee.isSuspense = function(e) {
  return Je(e) === ni;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Yo || e === ei || e === Xo || e === Jo || e === ni || e === EC || typeof e == "object" && e !== null && (e.$$typeof === oi || e.$$typeof === ri || e.$$typeof === Qo || e.$$typeof === Zo || e.$$typeof === ti || e.$$typeof === DC || e.$$typeof === IC || e.$$typeof === RC || e.$$typeof === PC);
};
ee.typeOf = Je;
Pp.exports = ee;
var OC = Pp.exports, ic = OC, AC = {
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
}, $C = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, NC = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ip = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, sc = {};
sc[ic.ForwardRef] = NC;
sc[ic.Memo] = Ip;
function au(e) {
  return ic.isMemo(e) ? Ip : sc[e.$$typeof] || AC;
}
var TC = Object.defineProperty, LC = Object.getOwnPropertyNames, cu = Object.getOwnPropertySymbols, MC = Object.getOwnPropertyDescriptor, kC = Object.getPrototypeOf, lu = Object.prototype;
function Rp(e, t, n) {
  if (typeof t != "string") {
    if (lu) {
      var r = kC(t);
      r && r !== lu && Rp(e, r, n);
    }
    var o = LC(t);
    cu && (o = o.concat(cu(t)));
    for (var i = au(e), s = au(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!$C[c] && !(n && n[c]) && !(s && s[c]) && !(i && i[c])) {
        var l = MC(t, c);
        try {
          TC(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var _C = Rp;
const uu = /* @__PURE__ */ Gu(_C);
var Op = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac = Symbol.for("react.element"), cc = Symbol.for("react.portal"), ii = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ai = Symbol.for("react.profiler"), ci = Symbol.for("react.provider"), li = Symbol.for("react.context"), FC = Symbol.for("react.server_context"), ui = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), fi = Symbol.for("react.suspense_list"), pi = Symbol.for("react.memo"), mi = Symbol.for("react.lazy"), BC = Symbol.for("react.offscreen"), Ap;
Ap = Symbol.for("react.module.reference");
function at(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ac:
        switch (e = e.type, e) {
          case ii:
          case ai:
          case si:
          case di:
          case fi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case FC:
              case li:
              case ui:
              case mi:
              case pi:
              case ci:
                return e;
              default:
                return t;
            }
        }
      case cc:
        return t;
    }
  }
}
te.ContextConsumer = li;
te.ContextProvider = ci;
te.Element = ac;
te.ForwardRef = ui;
te.Fragment = ii;
te.Lazy = mi;
te.Memo = pi;
te.Portal = cc;
te.Profiler = ai;
te.StrictMode = si;
te.Suspense = di;
te.SuspenseList = fi;
te.isAsyncMode = function() {
  return !1;
};
te.isConcurrentMode = function() {
  return !1;
};
te.isContextConsumer = function(e) {
  return at(e) === li;
};
te.isContextProvider = function(e) {
  return at(e) === ci;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ac;
};
te.isForwardRef = function(e) {
  return at(e) === ui;
};
te.isFragment = function(e) {
  return at(e) === ii;
};
te.isLazy = function(e) {
  return at(e) === mi;
};
te.isMemo = function(e) {
  return at(e) === pi;
};
te.isPortal = function(e) {
  return at(e) === cc;
};
te.isProfiler = function(e) {
  return at(e) === ai;
};
te.isStrictMode = function(e) {
  return at(e) === si;
};
te.isSuspense = function(e) {
  return at(e) === di;
};
te.isSuspenseList = function(e) {
  return at(e) === fi;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ii || e === ai || e === si || e === di || e === fi || e === BC || typeof e == "object" && e !== null && (e.$$typeof === mi || e.$$typeof === pi || e.$$typeof === ci || e.$$typeof === li || e.$$typeof === ui || e.$$typeof === Ap || e.getModuleId !== void 0);
};
te.typeOf = at;
Op.exports = te;
var jC = Op.exports;
const VC = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function zC(e, t, n, r, {
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
function GC(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = Ff(t, VC);
  const s = n(e, i), a = r(e, i), c = o(e, i);
  return zC(s, a, c, e, i);
}
function WC(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Is(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function du(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function $p(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, c) {
      return i.dependsOnOwnProps ? i.mapToProps(a, c) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, c) {
      i.mapToProps = e, i.dependsOnOwnProps = du(e);
      let l = i(a, c);
      return typeof l == "function" && (i.mapToProps = l, i.dependsOnOwnProps = du(l), l = i(a, c)), l;
    }, i;
  };
}
function lc(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function HC(e) {
  return e && typeof e == "object" ? Is((t) => (
    // @ts-ignore
    WC(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    $p(e)
  ) : lc(e, "mapDispatchToProps") : Is((t) => ({
    dispatch: t
  }));
}
function UC(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    $p(e)
  ) : lc(e, "mapStateToProps") : Is(() => ({}));
}
function qC(e, t, n) {
  return Bt({}, n, e, t);
}
function KC(e) {
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
function YC(e) {
  return e ? typeof e == "function" ? KC(e) : lc(e, "mergeProps") : () => qC;
}
function JC() {
  const e = xC();
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
const fu = {
  notify() {
  },
  get: () => []
};
function Np(e, t) {
  let n, r = fu, o = 0, i = !1;
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
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = JC());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = fu);
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
const XC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ho = XC ? R.useLayoutEffect : R.useEffect;
function pu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function qi(e, t) {
  if (pu(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !pu(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const QC = ["reactReduxForwardedRef"];
let Tp = CC;
const ZC = (e) => {
  Tp = e;
}, e1 = [null, null];
function t1(e, t, n) {
  ho(() => e(...t), n);
}
function n1(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function r1(e, t, n, r, o, i, s, a, c, l, u) {
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
function o1(e, t) {
  return e === t;
}
function Lp(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = o1,
  areOwnPropsEqual: i = qi,
  areStatePropsEqual: s = qi,
  areMergedPropsEqual: a = qi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = Ep
} = {}) {
  const u = l, d = UC(e), f = HC(t), p = YC(n), m = !!e;
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
      const [E, N, T] = R.useMemo(() => {
        const {
          reactReduxForwardedRef: ce
        } = P, X = Ff(P, QC);
        return [P.context, ce, X];
      }, [P]), L = R.useMemo(() => E && E.Consumer && // @ts-ignore
      jC.isContextConsumer(/* @__PURE__ */ R.createElement(E.Consumer, null)) ? E : u, [E, u]), k = R.useContext(L), _ = !!P.store && !!P.store.getState && !!P.store.dispatch, A = !!k && !!k.store, M = _ ? P.store : k.store, O = A ? k.getServerState : M.getState, F = R.useMemo(() => GC(M.dispatch, y), [M]), [$, H] = R.useMemo(() => {
        if (!m)
          return e1;
        const ce = Np(M, _ ? void 0 : k.subscription), X = ce.notifyNestedSubs.bind(ce);
        return [ce, X];
      }, [M, _, k]), Y = R.useMemo(() => _ ? k : Bt({}, k, {
        subscription: $
      }), [_, k, $]), re = R.useRef(), ye = R.useRef(T), ue = R.useRef(), Te = R.useRef(!1);
      R.useRef(!1);
      const ve = R.useRef(!1), oe = R.useRef();
      ho(() => (ve.current = !0, () => {
        ve.current = !1;
      }), []);
      const we = R.useMemo(() => () => ue.current && T === ye.current ? ue.current : F(M.getState(), T), [M, T]), Fe = R.useMemo(() => (X) => $ ? r1(
        m,
        M,
        $,
        // @ts-ignore
        F,
        ye,
        re,
        Te,
        ve,
        ue,
        H,
        X
      ) : () => {
      }, [$]);
      t1(n1, [ye, re, Te, T, ue, H]);
      let Pe;
      try {
        Pe = Tp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Fe,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          we,
          O ? () => F(O(), T) : we
        );
      } catch (ce) {
        throw oe.current && (ce.message += `
The error may be correlated with this previous error:
${oe.current.stack}

`), ce;
      }
      ho(() => {
        oe.current = void 0, ue.current = void 0, re.current = Pe;
      });
      const De = R.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ R.createElement(h, Bt({}, Pe, {
          ref: N
        }))
      ), [N, h, Pe]);
      return R.useMemo(() => m ? /* @__PURE__ */ R.createElement(L.Provider, {
        value: Y
      }, De) : De, [L, De, Y]);
    }
    const C = R.memo(v);
    if (C.WrappedComponent = h, C.displayName = v.displayName = x, c) {
      const E = R.forwardRef(function(T, L) {
        return /* @__PURE__ */ R.createElement(C, Bt({}, T, {
          reactReduxForwardedRef: L
        }));
      });
      return E.displayName = x, E.WrappedComponent = h, uu(E, h);
    }
    return uu(C, h);
  };
}
function i1({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = R.useMemo(() => {
    const l = Np(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = R.useMemo(() => e.getState(), [e]);
  ho(() => {
    const {
      subscription: l
    } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = t || Ep;
  return /* @__PURE__ */ R.createElement(c.Provider, {
    value: s
  }, n);
}
ZC(Sp.useSyncExternalStore);
wC(og);
function s1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Mp(e, t) {
  var n = q(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = z(!0), o = z(n), i = r.current || !!(t && o.current.inputs && s1(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return W(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function a1(e, t) {
  return Mp(function() {
    return e;
  }, t);
}
var J = Mp, G = a1, c1 = !0, Ki = "Invariant failed";
function l1(e, t) {
  if (!e) {
    if (c1)
      throw new Error(Ki);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Ki, ": ").concat(n) : Ki;
    throw new Error(r);
  }
}
var dt = function(t) {
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
}, uc = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, mu = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, u1 = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Yi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, dc = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Yi : r, i = t.border, s = i === void 0 ? Yi : i, a = t.padding, c = a === void 0 ? Yi : a, l = dt(uc(n, o)), u = dt(mu(n, s)), d = dt(mu(u, c));
  return {
    marginBox: l,
    borderBox: dt(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: c
  };
}, Ze = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && l1(!1), o;
}, d1 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, bo = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = u1(r, n);
  return dc({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, yo = function(t, n) {
  return n === void 0 && (n = d1()), bo(t, n);
}, kp = function(t, n) {
  var r = {
    top: Ze(n.marginTop),
    right: Ze(n.marginRight),
    bottom: Ze(n.marginBottom),
    left: Ze(n.marginLeft)
  }, o = {
    top: Ze(n.paddingTop),
    right: Ze(n.paddingRight),
    bottom: Ze(n.paddingBottom),
    left: Ze(n.paddingLeft)
  }, i = {
    top: Ze(n.borderTopWidth),
    right: Ze(n.borderRightWidth),
    bottom: Ze(n.borderBottomWidth),
    left: Ze(n.borderLeftWidth)
  };
  return dc({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, _p = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return kp(n, r);
}, gu = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function f1(e, t) {
  return !!(e === t || gu(e) && gu(t));
}
function p1(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!f1(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = p1);
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
var m1 = function(t) {
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
const ur = m1;
function Fp(e, t) {
}
Fp.bind(null, "warn");
Fp.bind(null, "error");
function jt() {
}
function g1(e, t) {
  return {
    ...e,
    ...t
  };
}
function tt(e, t, n) {
  const r = t.map((o) => {
    const i = g1(n, o.options);
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
const h1 = "Invariant failed";
class vo extends Error {
}
vo.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  if (!e)
    throw new vo(h1);
}
class b1 extends b.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = jt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof vo && n.preventDefault();
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = tt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof vo) {
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
const y1 = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, wo = (e) => e + 1, v1 = (e) => `
  You have lifted an item in position ${wo(e.source.index)}
`, Bp = (e, t) => {
  const n = e.droppableId === t.droppableId, r = wo(e.index), o = wo(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, jp = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, w1 = (e) => {
  const t = e.destination;
  if (t)
    return Bp(e.source, t);
  const n = e.combine;
  return n ? jp(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, hu = (e) => `
  The item has returned to its starting position
  of ${wo(e.index)}
`, x1 = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${hu(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Bp(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${jp(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${hu(e.source)}
  `;
}, S1 = {
  dragHandleUsageInstructions: y1,
  onDragStart: v1,
  onDragUpdate: w1,
  onDragEnd: x1
};
var Kr = S1;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), ze = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Vt = (e, t) => e.x === t.x && e.y === t.y, _n = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), ln = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, dr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), bu = (e, t) => Math.min(...t.map((n) => dr(e, n))), Vp = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var C1 = (e, t) => {
  const n = dt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Or = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), yu = (e) => [{
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
}], E1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, P1 = (e, t) => t ? Or(e, t.scroll.diff.displacement) : e, D1 = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, I1 = (e, t) => t && t.shouldClipSubject ? C1(t.pageMarginBox, e) : dt(e);
var On = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = P1(e.marginBox, r), i = D1(o, n, t), s = I1(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, fc = (e, t) => {
  e.frame || B(!1);
  const n = e.frame, r = ze(t, n.scroll.initial), o = _n(r), i = {
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
  }, s = On({
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
const zp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Gp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), gi = de((e) => Object.values(e)), R1 = de((e) => Object.values(e));
var Fn = de((e, t) => R1(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function pc(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function hi(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var bi = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), O1 = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !pc(o))
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
  const l = bi(t, r);
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
}, Bn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Wp = {
  point: fe,
  value: 0
}, fr = {
  invisible: {},
  visible: {},
  all: []
}, A1 = {
  displaced: fr,
  displacedBy: Wp,
  at: null
};
var $1 = A1, nt = (e, t) => (n) => e <= n && n <= t, Hp = (e) => {
  const t = nt(e.top, e.bottom), n = nt(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && s || l && i;
  };
}, N1 = (e) => {
  const t = nt(e.top, e.bottom), n = nt(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const mc = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Up = {
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
var T1 = (e) => (t) => {
  const n = nt(t.top, t.bottom), r = nt(t.left, t.right);
  return (o) => e === mc ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const L1 = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return Or(e, n);
}, M1 = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, k1 = (e, t, n) => n(t)(e), gc = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? L1(e, t) : e;
  return M1(i, t, o) && k1(i, n, o);
}, _1 = (e) => gc({
  ...e,
  isVisibleThroughFrameFn: Hp
}), qp = (e) => gc({
  ...e,
  isVisibleThroughFrameFn: N1
}), F1 = (e) => gc({
  ...e,
  isVisibleThroughFrameFn: T1(e.destination.axis)
}), B1 = (e, t, n) => {
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
function j1(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return dt(uc(n, r));
}
function pr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, c) {
    const l = j1(c, n), u = c.descriptor.id;
    if (a.all.push(u), !_1({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = B1(u, i, o), p = {
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
function V1(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function vu({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = V1(e, {
    inHomeList: t
  });
  return {
    displaced: fr,
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
function xo({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const c = Bn(e, n);
  if (s == null)
    return vu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === s);
  if (!l)
    return vu({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = bi(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: pr({
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
function qt(e, t) {
  return !!t.effected[e];
}
var z1 = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return qt(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, G1 = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return i < s || i > c ? null : i;
}, W1 = ({
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
    const d = G1({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: i
    });
    return d == null ? null : xo({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = z1({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : xo({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, H1 = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return qt(n, t) ? o ? fe : _n(r.point) : o ? r.point : fe;
}, U1 = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = hi(t);
  r || B(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = H1({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const Kp = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, q1 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, hc = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, wu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => ln(e.line, t.marginBox[e.end] + Kp(e, n), hc(e, t.marginBox, n)), xu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => ln(e.line, t.marginBox[e.start] - q1(e, n), hc(e, t.marginBox, n)), K1 = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => ln(e.line, t.contentBox[e.start] + Kp(e, n), hc(e, t.contentBox, n));
var Y1 = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Fn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return K1({
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
    if (qt(u, o))
      return xu({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = bo(f.page, l.point);
    return xu({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (qt(d.descriptor.id, o)) {
    const f = bo(d.page, _n(o.displacedBy.point));
    return wu({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return wu({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, Rs = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const J1 = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? Y1({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : U1({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var yi = (e) => {
  const t = J1(e), n = e.droppable;
  return n ? Rs(n, t) : t;
}, Yp = (e, t) => {
  const n = ze(t, e.scroll.initial), r = _n(n);
  return {
    frame: dt({
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
function Su(e, t) {
  return e.map((n) => t[n]);
}
function X1(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var Q1 = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Yp(t, he(t.scroll.current, o)), s = n.frame ? fc(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, c = pr({
    afterDragging: Su(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = pr({
    afterDragging: Su(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = X1(m, f);
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
}, Z1 = (e, t) => he(e.scroll.diff.displacement, t), bc = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = Z1(n, e), o = ze(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, Jp = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = ze(n, e.page.borderBox.center), c = {
    target: Or(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? F1(c) : qp(c);
}, eE = ({
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
  const l = Fn(n.descriptor.id, r), u = Bn(t, n), d = O1({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || W1({
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
  const f = yi({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (Jp({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: bc({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = ze(f, s), g = Q1({
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
const Oe = (e) => {
  const t = e.subject.active;
  return t || B(!1), t;
};
var tE = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = nt(i[s.start], i[s.end]), c = gi(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Hp(o.frame)(Oe(u))).filter((u) => {
    const d = Oe(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = Oe(u), f = nt(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = Oe(u)[s.crossAxisStart], p = Oe(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => Oe(u)[s.crossAxisStart] === Oe(f[0])[s.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => nt(Oe(u)[s.start], Oe(u)[s.end])(t[s.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => Oe(u)[s.start] - Oe(d)[s.start])[0] : c.sort((u, d) => {
    const f = bu(t, yu(Oe(u))), p = bu(t, yu(Oe(d)));
    return f !== p ? f - p : Oe(u)[s.start] - Oe(d)[s.start];
  })[0];
};
const Cu = (e, t) => {
  const n = e.page.borderBox.center;
  return qt(e.descriptor.id, t) ? ze(n, t.displacedBy.point) : n;
}, nE = (e, t) => {
  const n = e.page.borderBox;
  return qt(e.descriptor.id, t) ? Or(n, _n(t.displacedBy.point)) : n;
};
var rE = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => qp({
  target: nE(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const c = dr(e, Rs(n, Cu(s, o))), l = dr(e, Rs(n, Cu(a, o)));
  return c < l ? -1 : l < c ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, Ar = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: ln(t.line, r)
  };
});
const oE = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return ln(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Fn(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : ln(r.line, c);
}, Xp = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Qp = (e, t, n) => {
  const r = e.frame;
  Bn(t, e) && B(!1), e.subject.withPlaceholder && B(!1);
  const o = Ar(e.axis, t.displaceBy).point, i = oE(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = On({
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
  const a = i ? he(r.scroll.max, i) : r.scroll.max, c = Xp(r, a), l = On({
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
}, iE = (e) => {
  const t = e.subject.withPlaceholder;
  t || B(!1);
  const n = e.frame;
  if (!n) {
    const s = On({
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
  const o = Xp(n, r), i = On({
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
var sE = ({
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
      displaced: fr,
      displacedBy: Wp,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = yi({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = Bn(r, i) ? i : Qp(i, r, o);
    return Jp({
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
  })(), u = Ar(i.axis, r.displaceBy);
  return xo({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: fr,
    index: l
  });
}, aE = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const c = tE({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!c)
    return null;
  const l = Fn(c.descriptor.id, o), u = rE({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = sE({
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
  const f = yi({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: bc({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, He = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const cE = (e, t) => {
  const n = He(e);
  return n ? t[n] : null;
};
var lE = ({
  state: e,
  type: t
}) => {
  const n = cE(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? eE({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : aE({
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
function tn(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Zp(e) {
  const t = nt(e.top, e.bottom), n = nt(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function uE(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function dE({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = ln(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: dr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function fE({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = gi(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !uE(e, i))
      return !1;
    if (Zp(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], c = e[s.crossAxisStart], l = e[s.crossAxisEnd], u = nt(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : dE({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const em = (e, t) => dt(Or(e, t));
var pE = (e, t) => {
  const n = e.frame;
  return n ? em(t, n.scroll.diff.value) : t;
};
function tm({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function mE({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var gE = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, c = Ar(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = bi(t, r).find((g) => {
    const h = g.descriptor.id, w = g.page.borderBox.center[a.line], x = qt(h, s), y = tm({
      displaced: o,
      id: h
    });
    return x ? y ? d <= w : u < w - l : y ? d <= w + l : u < w;
  }) || null, m = mE({
    draggable: t,
    closest: p,
    inHomeList: Bn(t, n)
  });
  return xo({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: c,
    index: m
  });
};
const hE = 4;
var bE = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = Ar(r.axis, e.displaceBy), c = a.value, l = t[s.start], u = t[s.end], f = bi(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[s.size] / hE, y = qt(g, i), v = tm({
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
}, nm = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = em(t.page.borderBox, e), c = fE({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return $1;
  const l = r[c], u = Fn(l.descriptor.id, n), d = pE(l, a);
  return bE({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: s
  }) || gE({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, yc = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const yE = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = He(e), o = He(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = iE(i);
  return yc(n, s);
};
var vE = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = yE({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = He(o);
  if (!s)
    return i;
  const a = n[s];
  if (Bn(e, a) || a.subject.withPlaceholder)
    return i;
  const c = Qp(a, e, t);
  return yc(i, c);
}, Qn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = ze(c, e.initial.client.selection), u = {
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
  const p = a.draggables[e.critical.draggable.id], m = o || nm({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = vE({
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
function wE(e, t) {
  return e.map((n) => t[n]);
}
var rm = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = wE(i.all, n), a = pr({
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
}, om = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = yi({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return bc({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, im = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && B(!1);
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, c = s[e.critical.draggable.id], l = He(r);
  l || B(!1);
  const u = a[l], d = rm({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = om({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Qn({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, xE = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), sm = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Ar(t.axis, e.displaceBy), i = Fn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && B(!1);
  const a = i.slice(s + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: pr({
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
        destination: xE(e.descriptor)
      }
    },
    afterCritical: l
  };
}, SE = (e, t) => ({
  draggables: e.draggables,
  droppables: yc(e.droppables, t)
}), CE = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = bo(e.client, t), o = yo(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, EE = (e) => {
  const t = e.frame;
  return t || B(!1), t;
}, PE = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], c = EE(s).scroll.diff.value, l = he(r, c);
    return CE({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, DE = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((w) => {
    const x = e.dimensions.droppables[w.droppableId];
    return fc(x, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...zp(n)
  }, o = Gp(PE({
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
  }, a = He(e.impact), c = a ? s.droppables[a] : null, l = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = sm({
    draggable: l,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = nm({
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
const Os = (e) => e.movementMode === "SNAP", Ji = (e, t, n) => {
  const r = SE(e.dimensions, t);
  return !Os(e) || n ? Qn({
    state: e,
    dimensions: r
  }) : im({
    state: e,
    dimensions: r
  });
};
function Xi(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const Eu = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var IE = (e = Eu, t) => {
  if (t.type === "FLUSH")
    return {
      ...Eu,
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
    }, d = gi(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = sm({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || B(!1), DE({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    tn(e) || B(!1);
    const {
      client: n
    } = t.payload;
    return Vt(n, e.current.client.selection) ? e : Qn({
      state: e,
      clientSelection: n,
      impact: Os(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Xi(e);
    tn(e) || B(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = fc(o, r);
    return Ji(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    tn(e) || B(!1);
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || B(!1), o.isEnabled === r && B(!1);
    const i = {
      ...o,
      isEnabled: r
    };
    return Ji(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    tn(e) || B(!1);
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || B(!1), o.isCombineEnabled === r && B(!1);
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return Ji(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    tn(e) || B(!1), e.isWindowScrollAllowed || B(!1);
    const n = t.payload.newScroll;
    if (Vt(e.viewport.scroll.current, n))
      return Xi(e);
    const r = Yp(e.viewport, n);
    return Os(e) ? im({
      state: e,
      viewport: r
    }) : Qn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!tn(e))
      return e;
    const n = t.payload.maxScroll;
    if (Vt(n, e.viewport.scroll.max))
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
    const n = lE({
      state: e,
      type: t.type
    });
    return n ? Qn({
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
const RE = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), OE = (e) => ({
  type: "LIFT",
  payload: e
}), AE = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), $E = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), NE = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), TE = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), LE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), ME = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), am = (e) => ({
  type: "MOVE",
  payload: e
}), kE = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), _E = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), FE = () => ({
  type: "MOVE_UP",
  payload: null
}), BE = () => ({
  type: "MOVE_DOWN",
  payload: null
}), jE = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), VE = () => ({
  type: "MOVE_LEFT",
  payload: null
}), vc = () => ({
  type: "FLUSH",
  payload: null
}), zE = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), wc = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), cm = (e) => ({
  type: "DROP",
  payload: e
}), GE = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), lm = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var WE = (e) => ({
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
  c.phase === "DROP_ANIMATING" && n(wc({
    completed: c.completed
  })), t().phase !== "IDLE" && B(!1), n(vc()), n(RE({
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
  n(AE({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, HE = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const xc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, mr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, um = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, Zt = `${um.outOfTheWay}s ${xc.outOfTheWay}`, Zn = {
  fluid: `opacity ${Zt}`,
  snap: `transform ${Zt}, opacity ${Zt}`,
  drop: (e) => {
    const t = `${e}s ${xc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Zt}`,
  placeholder: `height ${Zt}, width ${Zt}, margin ${Zt}`
}, Pu = (e) => Vt(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, As = {
  moveTo: Pu,
  drop: (e, t) => {
    const n = Pu(e);
    if (n)
      return t ? `${n} scale(${mr.scale.drop})` : n;
  }
}, {
  minDropTime: $s,
  maxDropTime: dm
} = um, UE = dm - $s, Du = 1500, qE = 0.6;
var KE = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = dr(e, t);
  if (r <= 0)
    return $s;
  if (r >= Du)
    return dm;
  const o = r / Du, i = $s + UE * o, s = n === "CANCEL" ? i * qE : i;
  return Number(s.toFixed(2));
}, YE = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = He(e), c = a ? s[a] : null, l = s[t.descriptor.droppableId], u = om({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return ze(u, t.client.borderBox.center);
}, JE = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: rm({
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
    displaced: fr
  },
  didDropInsideDroppable: !0
};
const XE = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(GE({
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
  } = JE({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? pc(u) : null, p = d ? hi(u) : null, m = {
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
  }, h = YE({
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
  if (!(!Vt(o.current.client.offset, h) || !!g.combine)) {
    t(wc({
      completed: w
    }));
    return;
  }
  const y = KE({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(zE({
    newHomeClientOffset: h,
    dropDuration: y,
    completed: w
  }));
};
var QE = XE, fm = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function ZE(e) {
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
function eP({
  onWindowScroll: e
}) {
  function t() {
    e(fm());
  }
  const n = ur(t), r = ZE(n);
  let o = jt;
  function i() {
    return o !== jt;
  }
  function s() {
    i() && B(!1), o = tt(window, [r]);
  }
  function a() {
    i() || B(!1), n.cancel(), o(), o = jt;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const tP = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", nP = (e) => {
  const t = eP({
    onWindowScroll: (n) => {
      e.dispatch(kE({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && tP(r) && t.stop(), n(r);
  };
};
var rP = nP, oP = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, iP = () => {
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
const sP = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, aP = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, cP = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Hn = (e, t) => {
  t();
}, jr = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function Qi(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = oP(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var lP = (e, t) => {
  const n = iP();
  let r = null;
  const o = (d, f) => {
    r && B(!1), Hn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && B(!1), Hn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(jr(d, f));
    });
  }, s = (d, f) => {
    r && B(!1);
    const p = jr(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Hn("onDragStart", () => Qi(e().onDragStart, p, t, Kr.onDragStart));
    });
  }, a = (d, f) => {
    const p = pc(f), m = hi(f);
    r || B(!1);
    const g = !cP(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !sP(r.lastLocation, p);
    h && (r.lastLocation = p);
    const w = !aP(r.lastCombine, m);
    if (w && (r.lastCombine = m), !g && !h && !w)
      return;
    const x = {
      ...jr(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Hn("onDragUpdate", () => Qi(e().onDragUpdate, x, t, Kr.onDragUpdate));
    });
  }, c = () => {
    r || B(!1), n.flush();
  }, l = (d) => {
    r || B(!1), r = null, Hn("onDragEnd", () => Qi(e().onDragEnd, d, t, Kr.onDragEnd));
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
        ...jr(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, uP = (e, t) => {
  const n = lP(e, t);
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
const dP = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && B(!1), e.dispatch(wc({
    completed: r.completed
  }));
};
var fP = dP;
const pP = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(lm());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = tt(window, [s]);
    });
  };
};
var mP = pP, gP = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, hP = (e) => {
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
const bP = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var yP = (e) => (t) => (n) => (r) => {
  if (bP(r)) {
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
const vP = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(cm({
    reason: r.reason
  })));
};
var wP = vP;
const xP = vp;
var SP = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => yp(IE, xP(eC(HE(n), gP(e), WE(e), QE, fP, mP, wP, yP(i), rP, hP(t), uP(r, o))));
const Zi = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function CP({
  registry: e,
  callbacks: t
}) {
  let n = Zi(), r = null;
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
      n = Zi(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = Zi());
    }
  };
}
var pm = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = ze({
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
}, mm = () => {
  const e = document.documentElement;
  return e || B(!1), e;
}, gm = () => {
  const e = mm();
  return pm({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, EP = () => {
  const e = fm(), t = gm(), n = e.y, r = e.x, o = mm(), i = o.clientWidth, s = o.clientHeight, a = r + i, c = n + s;
  return {
    frame: dt({
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
}, PP = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = EP(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: Gp(a),
      droppables: zp(s)
    },
    critical: e,
    viewport: r
  };
};
function Iu(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var DP = (e, t) => {
  let n = null;
  const r = CP({
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
    f.type === "ADDITION" && Iu(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && Iu(e, p, f.value) && r.remove(f.value);
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
      }, PP({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, hm = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", IP = (e) => {
  window.scrollBy(e.x, e.y);
};
const RP = de((e) => gi(e).filter((t) => !(!t.isEnabled || !t.frame))), OP = (e, t) => RP(t).find((r) => (r.frame || B(!1), Zp(r.frame.pageMarginBox)(e))) || null;
var AP = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return OP(e, n);
};
const gr = {
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
var $P = (e, t, n = () => gr) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, bm = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, Sc = 1, NP = (e, t, n = () => gr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Sc;
  const i = 1 - bm({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, TP = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, l = Date.now() - s;
  if (l >= i)
    return e;
  if (l < o)
    return Sc;
  const u = bm({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, Ru = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = NP(e, t, o);
  return i === 0 ? 0 : r ? Math.max(TP(i, n, o), Sc) : i;
}, Ou = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = $P(e, r, i);
  return t[r.end] < t[r.start] ? Ru({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * Ru({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, LP = ({
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
const MP = Vp((e) => e === 0 ? 0 : e);
var ym = ({
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
  }, a = Ou({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: mc,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Ou({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Up,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = MP({
    x: c,
    y: a
  });
  if (Vt(l, fe))
    return null;
  const u = LP({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? Vt(u, fe) ? null : u : null;
};
const kP = Vp((e) => e === 0 ? 0 : e > 0 ? 1 : -1), Cc = (() => {
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
    return Vt(i, fe) ? null : i;
  };
})(), vm = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = kP(n), i = Cc({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, Ec = (e, t) => vm({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), _P = (e, t) => {
  if (!Ec(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return Cc({
    current: r,
    max: n,
    change: t
  });
}, Pc = (e, t) => {
  const n = e.frame;
  return n ? vm({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, FP = (e, t) => {
  const n = e.frame;
  return !n || !Pc(e, t) ? null : Cc({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var BP = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = ym({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && Ec(e, s) ? s : null;
}, jP = ({
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
  const a = ym({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && Pc(e, a) ? a : null;
}, Au = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = BP({
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
  const l = AP({
    center: s,
    destination: He(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = jP({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(l.descriptor.id, u);
}, VP = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => gr
}) => {
  const r = ur(e), o = ur(t);
  let i = null;
  const s = (l) => {
    i || B(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    Au({
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
      Au({
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
}, zP = ({
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
    if (!Pc(a, c))
      return c;
    const l = FP(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = ze(c, l);
    return t(a.descriptor.id, u), ze(c, u);
  }, i = (a, c, l) => {
    if (!a || !Ec(c, l))
      return l;
    const u = _P(c, l);
    if (!u)
      return n(l), null;
    const d = ze(l, u);
    return n(d), ze(l, d);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = He(a.impact);
    l || B(!1);
    const u = o(a.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, GP = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = VP({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = zP({
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
const An = "data-rfd", $n = (() => {
  const e = `${An}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), Ns = (() => {
  const e = `${An}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), WP = (() => {
  const e = `${An}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), $u = {
  contextId: `${An}-scroll-container-context-id`
}, HP = (e) => (t) => `[${t}="${e}"]`, Un = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), UP = "pointer-events: none;";
var qP = (e) => {
  const t = HP(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t($n.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: UP,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Zn.outOfTheWay};
    `;
    return {
      selector: t(Ns.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(WP.contextId),
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
    always: Un(s, "always"),
    resting: Un(s, "resting"),
    dragging: Un(s, "dragging"),
    dropAnimating: Un(s, "dropAnimating"),
    userCancel: Un(s, "userCancel")
  };
};
const KP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Eo : W;
var Ue = KP;
const es = () => {
  const e = document.querySelector("head");
  return e || B(!1), e;
}, Nu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function YP(e, t) {
  const n = J(() => qP(e), [e]), r = z(null), o = z(null), i = G(de((d) => {
    const f = o.current;
    f || B(!1), f.textContent = d;
  }), []), s = G((d) => {
    const f = r.current;
    f || B(!1), f.textContent = d;
  }, []);
  Ue(() => {
    !r.current && !o.current || B(!1);
    const d = Nu(t), f = Nu(t);
    return r.current = d, o.current = f, d.setAttribute(`${An}-always`, e), f.setAttribute(`${An}-dynamic`, e), es().appendChild(d), es().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || B(!1), es().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = G(() => i(n.dragging), [i, n.dragging]), c = G((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), l = G(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return J(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function wm(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var xm = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function vi(e) {
  return e instanceof xm(e).HTMLElement;
}
function JP(e, t) {
  const n = `[${$n.contextId}="${e}"]`, r = wm(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute($n.draggableId) === t);
  return !o || !vi(o) ? null : o;
}
function XP(e) {
  const t = z({}), n = z(null), r = z(null), o = z(!1), i = G(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), s = G(function(f) {
    const p = JP(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = G(function(f, p) {
    n.current === f && (n.current = p);
  }, []), c = G(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), l = G(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute($n.draggableId) === f && (n.current = f);
  }, []);
  return Ue(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), J(() => ({
    register: i,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [i, l, c, a]);
}
function QP() {
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
function ZP() {
  const e = J(QP, []);
  return W(() => function() {
    b.version.startsWith("16") || b.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var Dc = b.createContext(null), So = () => {
  const e = document.body;
  return e || B(!1), e;
};
const eD = {
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
var tD = eD;
const nD = (e) => `rfd-announcement-${e}`;
function rD(e) {
  const t = J(() => nD(e), [e]), n = z(null);
  return W(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Bt(i.style, tD), So().appendChild(i), function() {
      setTimeout(function() {
        const c = So();
        c.contains(i) && c.removeChild(i), i === n.current && (n.current = null);
      });
    };
  }, [t]), G((o) => {
    const i = n.current;
    if (i) {
      i.textContent = o;
      return;
    }
  }, []);
}
let oD = 0;
const Sm = {
  separator: "::"
};
function iD(e, t = Sm) {
  return J(() => `${e}${t.separator}${oD++}`, [t.separator, e]);
}
function sD(e, t = Sm) {
  const n = b.useId();
  return J(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var Ic = "useId" in b ? sD : iD;
function aD({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function cD({
  contextId: e,
  text: t
}) {
  const n = Ic("hidden-text", {
    separator: "-"
  }), r = J(() => aD({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return W(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", So().appendChild(i), function() {
      const a = So();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var wi = b.createContext(null);
function Cm(e) {
  const t = z(e);
  return W(() => {
    t.current = e;
  }), t;
}
function lD() {
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
function hr(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const uD = 9, dD = 13, Rc = 27, Em = 32, fD = 33, pD = 34, mD = 35, gD = 36, hD = 37, bD = 38, yD = 39, vD = 40, wD = {
  [dD]: !0,
  [uD]: !0
};
var Pm = (e) => {
  wD[e.keyCode] && e.preventDefault();
};
const xD = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var xi = xD;
const Dm = 0, Tu = 5;
function SD(e, t) {
  return Math.abs(t.x - e.x) >= Tu || Math.abs(t.y - e.y) >= Tu;
}
const Lu = {
  type: "IDLE"
};
function CD({
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
      if (i !== Dm)
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
      if (!SD(u, c))
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
      if (o.keyCode === Rc) {
        o.preventDefault(), e();
        return;
      }
      Pm(o);
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
    eventName: xi,
    fn: e
  }];
}
function ED(e) {
  const t = z(Lu), n = z(jt), r = J(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== Dm || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
  }), [e]), o = J(() => ({
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
  }), [e]), i = G(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = tt(window, [o, r], d);
  }, [o, r]), s = G(() => {
    t.current.type !== "IDLE" && (t.current = Lu, n.current(), i());
  }, [i]), a = G(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), c = G(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = CD({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = tt(window, f, d);
  }, [a, s]), l = G(function(d, f) {
    t.current.type !== "IDLE" && B(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, c();
  }, [c]);
  Ue(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function PD() {
}
const DD = {
  [pD]: !0,
  [fD]: !0,
  [gD]: !0,
  [mD]: !0
};
function ID(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === Rc) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === Em) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === vD) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === bD) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === yD) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === hD) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (DD[o.keyCode]) {
        o.preventDefault();
        return;
      }
      Pm(o);
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
    eventName: xi,
    fn: n
  }];
}
function RD(e) {
  const t = z(PD), n = J(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== Em)
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
      t.current = tt(window, ID(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = G(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = tt(window, [n], i);
  }, [n]);
  Ue(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const ts = {
  type: "IDLE"
}, OD = 120, AD = 0.15;
function $D({
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
      n.keyCode === Rc && n.preventDefault(), e();
    }
  }, {
    eventName: xi,
    fn: e
  }];
}
function ND({
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
      if (!i || !(i.force >= AD))
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
    eventName: xi,
    fn: e
  }];
}
function TD(e) {
  const t = z(ts), n = z(jt), r = G(function() {
    return t.current;
  }, []), o = G(function(p) {
    t.current = p;
  }, []), i = J(() => ({
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
  }), [e]), s = G(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = tt(window, [i], p);
  }, [i]), a = G(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(ts), n.current(), s());
  }, [s, o]), c = G(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), l = G(function() {
    const p = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: c,
      completed: a,
      getPhase: r
    }, g = tt(window, ND(m), p), h = tt(window, $D(m), p);
    n.current = function() {
      g(), h();
    };
  }, [c, r, a]), u = G(function() {
    const p = r();
    p.type !== "PENDING" && B(!1);
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = G(function(p, m) {
    r().type !== "IDLE" && B(!1);
    const g = setTimeout(u, OD);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), l();
  }, [l, r, o, u]);
  Ue(function() {
    return s(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(ts));
    };
  }, [r, s, o]), Ue(function() {
    return tt(window, [{
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
const LD = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function Im(e, t) {
  if (t == null)
    return !1;
  if (LD.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : Im(e, t.parentElement);
}
function MD(e, t) {
  const n = t.target;
  return vi(n) ? Im(e, n) : !1;
}
var kD = (e) => dt(e.getBoundingClientRect()).center;
function _D(e) {
  return e instanceof xm(e).Element;
}
const FD = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function Rm(e, t) {
  return e == null ? null : e[FD](t) ? e : Rm(e.parentElement, t);
}
function BD(e, t) {
  return e.closest ? e.closest(t) : Rm(e, t);
}
function jD(e) {
  return `[${$n.contextId}="${e}"]`;
}
function VD(e, t) {
  const n = t.target;
  if (!_D(n))
    return null;
  const r = jD(e), o = BD(n, r);
  return !o || !vi(o) ? null : o;
}
function zD(e, t) {
  const n = VD(e, t);
  return n ? n.getAttribute($n.draggableId) : null;
}
function GD(e, t) {
  const n = `[${Ns.contextId}="${e}"]`, o = wm(document, n).find((i) => i.getAttribute(Ns.id) === t);
  return !o || !vi(o) ? null : o;
}
function WD(e) {
  e.preventDefault();
}
function Vr({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return !(!n() || e !== t);
}
function Om({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !hm(t.getState(), r));
}
function HD({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!Om({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = GD(t, c.descriptor.id);
  if (!l || s && !c.options.canDragInteractiveElements && MD(l, s))
    return null;
  const u = e.claim(i || jt);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(S, C) {
    Vr({
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
    d !== "PRE_DRAG" && (C(), B(!1)), n.dispatch(OE(S.liftActionArgs)), d = "DRAGGING";
    function P(E, N = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), N.shouldBlockNextClick) {
        const T = tt(window, [{
          eventName: "click",
          fn: WD,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(T);
      }
      C(), n.dispatch(cm({
        reason: E
      }));
    }
    return {
      isActive: () => Vr({
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
    const C = ur((E) => {
      g(() => am({
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
      moveUp: () => g(FE),
      moveRight: () => g(jE),
      moveDown: () => g(BE),
      moveLeft: () => g(VE)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: kD(l),
        movementMode: "SNAP"
      },
      cleanup: jt,
      actions: S
    });
  }
  function y() {
    Vr({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => Vr({
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
const UD = [ED, RD, TD];
function qD({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? UD : [], ...r || []], s = q(() => lD())[0], a = G(function(h, w) {
    hr(h) && !hr(w) && s.tryAbandon();
  }, [s]);
  Ue(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [s, t, a]), Ue(() => s.tryAbandon, [s.tryAbandon]);
  const c = G((g) => Om({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), l = G((g, h, w) => HD({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, s, n, t]), u = G((g) => zD(e, g), [e]), d = G((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = G(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(vc()));
  }, [s, t]), p = G(() => s.isClaimed(), [s]), m = J(() => ({
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
const KD = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    b.version.startsWith("16") || b.version.startsWith("17") ? n() : Ls(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), YD = (e) => ({
  ...gr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...gr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function qn(e) {
  return e.current || B(!1), e.current;
}
function JD(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = z(null), a = Cm(e), c = G(() => KD(a.current), [a]), l = G(() => YD(a.current), [a]), u = rD(t), d = cD({
    contextId: t,
    text: i
  }), f = YP(t, o), p = G((T) => {
    qn(s).dispatch(T);
  }, []), m = J(() => ou({
    publishWhileDragging: $E,
    updateDroppableScroll: TE,
    updateDroppableIsEnabled: LE,
    updateDroppableIsCombineEnabled: ME,
    collectionStarting: NE
  }, p), [p]), g = ZP(), h = J(() => DP(g, m), [g, m]), w = J(() => GP({
    scrollWindow: IP,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...ou({
      move: am
    }, p)
  }), [h.scrollDroppable, p, l]), x = XP(t), y = J(() => SP({
    announce: u,
    autoScroller: w,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: f
  }), [u, w, h, x, c, f]);
  s.current = y;
  const v = G(() => {
    const T = qn(s);
    T.getState().phase !== "IDLE" && T.dispatch(vc());
  }, []), S = G(() => {
    const T = qn(s).getState();
    return T.phase === "DROP_ANIMATING" ? !0 : T.phase === "IDLE" ? !1 : T.isDragging;
  }, []), C = J(() => ({
    isDragging: S,
    tryAbort: v
  }), [S, v]);
  n(C);
  const P = G((T) => hm(qn(s).getState(), T), []), E = G(() => tn(qn(s).getState()), []), N = J(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: P,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, x, P, E, g]);
  return qD({
    contextId: t,
    store: y,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), W(() => v, [v]), b.createElement(wi.Provider, {
    value: N
  }, b.createElement(i1, {
    context: Dc,
    store: y
  }, e.children));
}
let XD = 0;
function QD() {
  return J(() => `${XD++}`, []);
}
function ZD() {
  return b.useId();
}
var eI = "useId" in b ? ZD : QD;
function tI(e) {
  const t = eI(), n = e.dragHandleUsageInstructions || Kr.dragHandleUsageInstructions;
  return b.createElement(b1, null, (r) => b.createElement(JD, {
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
const Mu = {
  dragging: 5e3,
  dropAnimating: 4500
}, nI = (e, t) => t ? Zn.drop(t.duration) : e ? Zn.snap : Zn.fluid, rI = (e, t) => {
  if (e)
    return t ? mr.opacity.drop : mr.opacity.combining;
}, oI = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function iI(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = oI(e), c = !!i, l = c ? As.drop(r, s) : As.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: nI(a, i),
    transform: l,
    opacity: rI(s, c),
    zIndex: c ? Mu.dropAnimating : Mu.dragging,
    pointerEvents: "none"
  };
}
function sI(e) {
  return {
    transform: As.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function aI(e) {
  return e.type === "DRAGGING" ? iI(e) : sI(e);
}
function cI(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = kp(o, r), s = yo(i, n), a = {
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
function lI(e) {
  const t = Ic("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, c = J(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), l = G((p) => {
    const m = o();
    return m || B(!1), cI(n, m, p);
  }, [n, o]), u = J(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = z(u), f = z(!0);
  Ue(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Ue(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var Oc = b.createContext(null);
function Co(e) {
  const t = mt(e);
  return t || B(!1), t;
}
function uI(e) {
  e.preventDefault();
}
const dI = (e) => {
  const t = z(null), n = G((C = null) => {
    t.current = C;
  }, []), r = G(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = Co(wi), {
    type: a,
    droppableId: c
  } = Co(Oc), l = J(() => ({
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
    const C = J(() => ({
      descriptor: l,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, s, r, m, p, f]);
    lI(C);
  }
  const x = J(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: uI
  } : null, [o, i, d, f]), y = G((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (b.version.startsWith("16") || b.version.startsWith("17") ? w() : Ls(w));
  }, [w, h]), v = J(() => {
    const C = aI(h), P = h.type === "DRAGGING" && h.dropping ? y : void 0;
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
  }, [o, x, d, h, y, n]), S = J(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return b.createElement(b.Fragment, null, u(v, h.snapshot, S));
};
var fI = dI, Am = (e, t) => e === t, $m = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const pI = (e) => e.combine ? e.combine.draggableId : null, mI = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function gI() {
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
    if (hr(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], c = He(o.impact), l = mI(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, c = o.dimensions.draggables[i.draggableId], l = s.result, u = l.mode, d = $m(l), f = pI(l), m = {
        duration: o.dropDuration,
        curve: xc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? mr.opacity.drop : null,
        scale: f ? mr.scale.drop : null
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
function Nm(e = null) {
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
const hI = {
  mapped: {
    type: "SECONDARY",
    offset: fe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: Nm(null)
  }
};
function bI() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(Nm), n = de((s, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(fe, s, !0) : null, o = (s, a, c, l) => {
    const u = c.displaced.visible[s], d = !!(l.inVirtualList && l.effected[s]), f = hi(c), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (c.displaced.invisible[s])
        return null;
      const h = _n(l.displacedBy.point), w = e(h.x, h.y);
      return n(w, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (hr(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const c = s.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const yI = () => {
  const e = gI(), t = bI();
  return (r, o) => e(r, o) || t(r, o) || hI;
}, vI = {
  dropAnimationFinished: lm
}, wI = Lp(yI, vI, null, {
  context: Dc,
  areStatePropsEqual: Am
})(fI);
var xI = wI;
function Tm(e) {
  return Co(Oc).isUsingCloneFor === e.draggableId && !e.isClone ? null : b.createElement(xI, e);
}
function SI(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return b.createElement(Tm, Bt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const Lm = (e) => (t) => e === t, CI = Lm("scroll"), EI = Lm("auto"), ku = (e, t) => t(e.overflowX) || t(e.overflowY), PI = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return ku(n, CI) || ku(n, EI);
}, DI = () => !1, Mm = (e) => e == null ? null : e === document.body ? DI() ? e : null : e === document.documentElement ? null : PI(e) ? e : Mm(e.parentElement);
var II = Mm, Ts = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const km = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : km(e.parentElement) : !1;
var RI = (e) => {
  const t = II(e), n = km(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, OI = ({
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
    } = a, m = pm({
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
  })(), l = o === "vertical" ? mc : Up, u = On({
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
const AI = (e, t) => {
  const n = _p(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, c = uc({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return dc({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var $I = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = AI(e, c), u = yo(l, r), d = (() => {
    if (!c)
      return null;
    const p = _p(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: yo(p, r),
      scroll: Ts(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return OI({
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
const NI = {
  passive: !1
}, TI = {
  passive: !0
};
var _u = (e) => e.shouldPublishImmediately ? NI : TI;
const zr = (e) => e && e.env.closestScrollable || null;
function LI(e) {
  const t = z(null), n = Co(wi), r = Ic("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Cm(e), a = J(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = z(a), l = J(() => de((v, S) => {
    t.current || B(!1);
    const C = {
      x: v,
      y: S
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = G(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? fe : Ts(v.env.closestScrollable);
  }, []), d = G(() => {
    const v = u();
    l(v.x, v.y);
  }, [u, l]), f = J(() => ur(d), [d]), p = G(() => {
    const v = t.current, S = zr(v);
    if (v && S || B(!1), v.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = G((v, S) => {
    t.current && B(!1);
    const C = s.current, P = C.getDroppableRef();
    P || B(!1);
    const E = RI(P), N = {
      ref: P,
      descriptor: a,
      env: E,
      scrollOptions: S
    };
    t.current = N;
    const T = $I({
      ref: P,
      descriptor: a,
      env: E,
      windowScroll: v,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), L = E.closestScrollable;
    return L && (L.setAttribute($u.contextId, n.contextId), L.addEventListener("scroll", p, _u(N.scrollOptions))), T;
  }, [n.contextId, a, p, s]), g = G(() => {
    const v = t.current, S = zr(v);
    return v && S || B(!1), Ts(S);
  }, []), h = G(() => {
    const v = t.current;
    v || B(!1);
    const S = zr(v);
    t.current = null, S && (f.cancel(), S.removeAttribute($u.contextId), S.removeEventListener("scroll", p, _u(v.scrollOptions)));
  }, [p, f]), w = G((v) => {
    const S = t.current;
    S || B(!1);
    const C = zr(S);
    C || B(!1), C.scrollTop += v.y, C.scrollLeft += v.x;
  }, []), x = J(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: w
  }), [h, m, g, w]), y = J(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: x
  }), [x, a, r]);
  Ue(() => (c.current = y.descriptor, o.droppable.register(y), () => {
    t.current && h(), o.droppable.unregister(y);
  }), [x, a, h, y, i, o.droppable]), Ue(() => {
    t.current && i.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Ue(() => {
    t.current && i.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ns() {
}
const Fu = {
  width: 0,
  height: 0,
  margin: E1
}, MI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? Fu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, kI = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = MI({
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
    transition: n !== "none" ? Zn.placeholder : null
  };
}, _I = (e) => {
  const t = z(null), n = G(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, c] = q(e.animate === "open");
  W(() => a ? r !== "open" ? (n(), c(!1), ns) : t.current ? ns : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : ns, [r, a, n]);
  const l = G((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = kI({
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
var FI = b.memo(_I);
class BI extends b.PureComponent {
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
const jI = (e) => {
  const t = mt(wi);
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
  } = e, x = G(() => o.current, []), y = G((L = null) => {
    o.current = L;
  }, []);
  G(() => i.current, []);
  const v = G((L = null) => {
    i.current = L;
  }, []), S = G(() => {
    r() && h({
      maxScroll: gm()
    });
  }, [r, h]);
  LI({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = J(() => b.createElement(BI, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: L,
    data: k,
    animate: _
  }) => b.createElement(FI, {
    placeholder: k,
    onClose: L,
    innerRef: v,
    animate: _,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, v]), P = J(() => ({
    innerRef: y,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, y]), E = g ? g.dragging.draggableId : null, N = J(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: E
  }), [a, E, c]);
  function T() {
    if (!g)
      return null;
    const {
      dragging: L,
      render: k
    } = g, _ = b.createElement(Tm, {
      draggableId: L.draggableId,
      index: L.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (A, M) => k(A, M, L));
    return zu.createPortal(_, w());
  }
  return b.createElement(Oc.Provider, {
    value: N
  }, s(P, m), T());
};
var VI = jI;
function zI() {
  return document.body || B(!1), document.body;
}
const Bu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: zI
}, _m = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Bu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Bu[n]
    });
  return t;
}, rs = (e, t) => e === t.droppable.type, ju = (e, t) => t.draggables[e.draggable.id], GI = () => {
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
    const a = _m(s), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (hr(i)) {
      const f = i.critical;
      if (!rs(l, f))
        return t;
      const p = ju(f, i.dimensions), m = He(i.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!rs(l, f.critical))
        return t;
      const p = ju(f.critical, i.dimensions);
      return r(c, u, $m(f.result) === c, He(f.impact) === c, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!rs(l, f.critical))
        return t;
      const p = He(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, WI = {
  updateViewportMaxScroll: _E
}, HI = Lp(GI, WI, (e, t, n) => ({
  ..._m(n),
  ...e,
  ...t
}), {
  context: Dc,
  areStatePropsEqual: Am
})(VI);
var UI = HI;
function Fm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Fm(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function qI() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Fm(e)) && (r && (r += " "), r += t);
  return r;
}
const KI = "_item_1o9ja_1", YI = "_itemDragging_1o9ja_12", JI = "_symbol_1o9ja_16", XI = "_dragHandle_1o9ja_22", Gr = {
  item: KI,
  itemDragging: YI,
  symbol: JI,
  dragHandle: XI
};
function QI({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = St(), i = t ? t.filterDictionaries : [], s = (c) => {
    if (!t || !c.destination)
      return;
    const l = Array.from(i), [u] = l.splice(c.source.index, 1);
    l.splice(c.destination.index, 0, u), n({ ...t, filterDictionaries: l }), r(!0);
  }, a = i.map((c, l) => /* @__PURE__ */ I.jsx(SI, { index: l, draggableId: c.ifcClassification.location, children: (u, d) => /* @__PURE__ */ I.jsxs(
    "div",
    {
      className: qI(Gr.item, { [Gr.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ I.jsx("div", { ...u.dragHandleProps, className: Gr.dragHandle, children: /* @__PURE__ */ I.jsx(K0, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ I.jsx(Se, { className: Gr.uri, children: c.ifcClassification.location })
      ]
    }
  ) }, c.ifcClassification.location));
  return /* @__PURE__ */ I.jsxs(ne.Item, { value: e.toString(), children: [
    /* @__PURE__ */ I.jsxs(ne.Control, { children: [
      /* @__PURE__ */ I.jsx(pn, { order: 5, children: o("sortFilterDictionariesLabel") }),
      /* @__PURE__ */ I.jsx(Se, { size: "xs", c: "dimmed", children: o("sortFilterDictionariesInstruction") })
    ] }),
    /* @__PURE__ */ I.jsx(ne.Panel, { children: /* @__PURE__ */ I.jsx(tI, { onDragEnd: s, children: /* @__PURE__ */ I.jsx(UI, { droppableId: "dnd-list", direction: "vertical", children: (c) => /* @__PURE__ */ I.jsxs("div", { ...c.droppableProps, ref: c.innerRef, children: [
      a,
      c.placeholder
    ] }) }) }) })
  ] }, e);
}
function ZI({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = St(), i = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ I.jsx(
    Ba,
    {
      label: r("language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("selectLanguageInstruction")
    }
  );
}
function eR({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = St(), i = Xa(), s = et(dp), a = et(pS), c = z();
  return W(() => {
    s && i(ES(s));
  }, [i, s]), W(() => {
    if (!s || a === null)
      return;
    const l = {
      bsddApiEnvironment: s,
      includeTestDictionaries: a
    };
    c.current && c.current.bsddApiEnvironment === l.bsddApiEnvironment && c.current.includeTestDictionaries === l.includeTestDictionaries || (i(Ps(l)), c.current = l);
  }, [i, s, a]), /* @__PURE__ */ I.jsxs(ne.Item, { value: e.toString(), children: [
    /* @__PURE__ */ I.jsxs(ne.Control, { children: [
      /* @__PURE__ */ I.jsx(pn, { order: 5, children: o("generalSettingsLabel") }),
      /* @__PURE__ */ I.jsx(Se, { size: "xs", c: "dimmed", children: o("generalSettingsInstruction") })
    ] }),
    /* @__PURE__ */ I.jsxs(ne.Panel, { children: [
      /* @__PURE__ */ I.jsx(ZI, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ I.jsx(ir, { h: "xs" }),
      /* @__PURE__ */ I.jsx(
        Ir,
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
function tR({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r
}) {
  const { t: o } = St(), { mainDictionary: i, filterDictionaries: s } = t, [a, c] = q([]);
  W(() => {
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
  return /* @__PURE__ */ I.jsxs(ne.Item, { value: e.toString(), children: [
    /* @__PURE__ */ I.jsxs(ne.Control, { children: [
      /* @__PURE__ */ I.jsx(pn, { order: 5, children: o("parameterMappingLabel") }),
      /* @__PURE__ */ I.jsx(Se, { size: "xs", c: "dimmed", children: o("parameterMappingInstruction") })
    ] }),
    /* @__PURE__ */ I.jsx(ne.Panel, { children: a.map((u, d) => {
      const f = u.ifcClassification.location || d;
      return /* @__PURE__ */ I.jsxs("div", { style: { marginBottom: "1em" }, children: [
        /* @__PURE__ */ I.jsx(
          Wa,
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
function nR() {
  var u, d;
  const e = Xa(), t = et((f) => f.settings), [n, r] = q(t), [o, i] = q(!1), [s, a] = q(!0);
  W(() => {
    r(t);
  }, [t]);
  const c = () => {
    var f;
    console.log("Saving", n), n && (e(Qa(n)), (f = window == null ? void 0 : window.bsddBridge) == null || f.saveSettings(JSON.stringify(n)), i(!1));
  }, l = () => {
    r(t), i(!1);
  };
  return /* @__PURE__ */ I.jsxs(ut.Panel, { value: "settings", children: [
    /* @__PURE__ */ I.jsxs(ne, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ I.jsx(HS, { id: 0 }),
      /* @__PURE__ */ I.jsx(
        eR,
        {
          id: 1,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ I.jsx(
        YS,
        {
          id: 2,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i,
          setIsLoading: a
        }
      ),
      /* @__PURE__ */ I.jsx(
        tR,
        {
          id: 3,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ I.jsx(
        QI,
        {
          id: 4,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      )
    ] }),
    /* @__PURE__ */ I.jsxs(En, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ I.jsx(
        nr,
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
      /* @__PURE__ */ I.jsx(nr, { fullWidth: !0, variant: "light", onClick: l, disabled: !o, children: "Cancel" })
    ] })
  ] });
}
let rR;
const oR = (e) => async (t, n) => {
  const r = n(), o = Xl(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Xl(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(Qa(s));
};
function iR() {
  const e = Xa(), { t } = St(), n = et(SS), [r, o] = q(null), [i, s] = q(null), [a, c] = q(!0);
  return W(() => {
    (async () => {
      try {
      } catch (u) {
        console.error("Error connecting to bsddBridge:", u);
      }
    })();
  }, []), W(() => {
    r && (n ? (e(oR(r)), o(null), c(!1)) : (r != null && r.bsddApiEnvironment && e(mS(r.bsddApiEnvironment)), (r == null ? void 0 : r.includeTestDictionaries) !== null && e(hS(r.includeTestDictionaries)), r != null && r.language && e(gS(r.language))));
  }, [n, r, e]), W(() => {
    !a && i && (e(kS(i)), s(null));
  }, [a, i, e]), W(() => {
    s([]);
  }, []), W(() => {
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
  }, /* @__PURE__ */ I.jsx($a, { size: "40rem", children: /* @__PURE__ */ I.jsxs(ut, { defaultValue: "link", children: [
    /* @__PURE__ */ I.jsxs(ut.List, { grow: !0, children: [
      /* @__PURE__ */ I.jsx(ut.Tab, { value: "link", children: t("linkTabTitle") }),
      /* @__PURE__ */ I.jsx(ut.Tab, { value: "settings", children: t("settingsTabTitle") })
    ] }),
    /* @__PURE__ */ I.jsx(WS, { loading: a }),
    /* @__PURE__ */ I.jsx(nR, {})
  ] }) });
}
function sR() {
  return /* @__PURE__ */ I.jsx(yd, { theme: Z0, children: /* @__PURE__ */ I.jsx(iR, {}) });
}
const aR = _x({
  reducer: {
    settings: bS,
    ifcData: _S,
    bsdd: PS
  }
});
os.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ I.jsx(b.StrictMode, { children: /* @__PURE__ */ I.jsx($g, { store: aR, children: /* @__PURE__ */ I.jsx(sR, {}) }) })
);
