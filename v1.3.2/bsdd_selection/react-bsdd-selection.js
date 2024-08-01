var _h = Object.defineProperty;
var Mh = (e, t, n) => t in e ? _h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Le = (e, t, n) => (Mh(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as I from "react";
import Q, { createContext as tn, useContext as wt, useState as q, useRef as z, useEffect as H, Fragment as Pd, useMemo as Ht, useCallback as ee, useLayoutEffect as Fo, useId as Dd, forwardRef as te, cloneElement as bn, Children as kh, createElement as Ci } from "react";
import * as Fh from "react-dom";
import oa, { flushSync as sa, createPortal as Bh, unstable_batchedUpdates as Vh } from "react-dom";
function Ed(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Id = { exports: {} }, Bo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zh = Q, Wh = Symbol.for("react.element"), Gh = Symbol.for("react.fragment"), Hh = Object.prototype.hasOwnProperty, Uh = zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rd(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t)
    Hh.call(t, r) && !qh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Wh, type: e, key: s, ref: i, props: o, _owner: Uh.current };
}
Bo.Fragment = Gh;
Bo.jsx = Rd;
Bo.jsxs = Rd;
Id.exports = Bo;
var y = Id.exports, Pi = {}, pl = oa;
Pi.createRoot = pl.createRoot, Pi.hydrateRoot = pl.hydrateRoot;
var $d = { exports: {} }, Od = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr = Q;
function Kh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Yh = typeof Object.is == "function" ? Object.is : Kh, Xh = Nr.useSyncExternalStore, Jh = Nr.useRef, Qh = Nr.useEffect, Zh = Nr.useMemo, eg = Nr.useDebugValue;
Od.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var s = Jh(null);
  if (s.current === null) {
    var i = { hasValue: !1, value: null };
    s.current = i;
  } else
    i = s.current;
  s = Zh(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && i.hasValue) {
          var m = i.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, Yh(u, p))
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
  var a = Xh(e, s[0], s[1]);
  return Qh(function() {
    i.hasValue = !0, i.value = a;
  }, [a]), eg(a), a;
};
$d.exports = Od;
var tg = $d.exports, He = (
  // prettier-ignore
  // @ts-ignore
  "default" in I ? I.default : I
), ml = Symbol.for("react-redux-context"), hl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function ng() {
  if (!He.createContext)
    return {};
  const e = hl[ml] ?? (hl[ml] = /* @__PURE__ */ new Map());
  let t = e.get(He.createContext);
  return t || (t = He.createContext(
    null
  ), e.set(He.createContext, t)), t;
}
var Yt = /* @__PURE__ */ ng(), rg = () => {
  throw new Error("uSES not initialized!");
};
function ia(e = Yt) {
  return function() {
    return He.useContext(e);
  };
}
var Ad = /* @__PURE__ */ ia(), Nd = rg, og = (e) => {
  Nd = e;
}, sg = (e, t) => e === t;
function ig(e = Yt) {
  const t = e === Yt ? Ad : ia(e), n = (r, o = {}) => {
    const { equalityFn: s = sg, devModeChecks: i = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = t();
    He.useRef(!0);
    const f = He.useCallback(
      {
        [r.name](m) {
          return r(m);
        }
      }[r.name],
      [r, u, i.stabilityCheck]
    ), p = Nd(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      f,
      s
    );
    return He.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ag = /* @__PURE__ */ ig();
function cg(e) {
  e();
}
function lg() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      cg(() => {
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
var gl = {
  notify() {
  },
  get: () => []
};
function ug(e, t) {
  let n, r = gl, o = 0, s = !1;
  function i(g) {
    u();
    const h = r.subscribe(g);
    let b = !1;
    return () => {
      b || (b = !0, h(), d());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return s;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = lg());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = gl);
  }
  function f() {
    s || (s = !0, u());
  }
  function p() {
    s && (s = !1, d());
  }
  const m = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
var dg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fg = typeof navigator < "u" && navigator.product === "ReactNative", pg = dg || fg ? He.useLayoutEffect : He.useEffect;
function mg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: s = "once"
}) {
  const i = He.useMemo(() => {
    const l = ug(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: s
    };
  }, [e, r, o, s]), a = He.useMemo(() => e.getState(), [e]);
  pg(() => {
    const { subscription: l } = i;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [i, a]);
  const c = t || Yt;
  return /* @__PURE__ */ He.createElement(c.Provider, { value: i }, n);
}
var hg = mg;
function Td(e = Yt) {
  const t = e === Yt ? Ad : (
    // @ts-ignore
    ia(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var gg = /* @__PURE__ */ Td();
function yg(e = Yt) {
  const t = e === Yt ? gg : Td(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var bg = /* @__PURE__ */ yg();
og(tg.useSyncExternalStoreWithSelector);
const vg = {
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
class uo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || vg, this.options = n, this.debug = n.debug;
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
    return new uo(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new uo(this.logger, t);
  }
}
var Et = new uo();
class Vo {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const o = this.observers[r].get(n) || 0;
      this.observers[r].set(n, o + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((i) => {
      let [a, c] = i;
      for (let l = 0; l < c; l++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [a, c] = i;
      for (let l = 0; l < c; l++)
        a.apply(a, [t, ...r]);
    });
  }
}
function er() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function yl(e) {
  return e == null ? "" : "" + e;
}
function xg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const wg = /###/g;
function ur(e, t, n) {
  function r(a) {
    return a && a.indexOf("###") > -1 ? a.replace(wg, ".") : a;
  }
  function o() {
    return !e || typeof e == "string";
  }
  const s = typeof t != "string" ? t : t.split(".");
  let i = 0;
  for (; i < s.length - 1; ) {
    if (o())
      return {};
    const a = r(s[i]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++i;
  }
  return o() ? {} : {
    obj: e,
    k: r(s[i])
  };
}
function bl(e, t, n) {
  const {
    obj: r,
    k: o
  } = ur(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[o] = n;
    return;
  }
  let s = t[t.length - 1], i = t.slice(0, t.length - 1), a = ur(e, i, Object);
  for (; a.obj === void 0 && i.length; )
    s = `${i[i.length - 1]}.${s}`, i = i.slice(0, i.length - 1), a = ur(e, i, Object), a && a.obj && typeof a.obj[`${a.k}.${s}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${s}`] = n;
}
function Sg(e, t, n, r) {
  const {
    obj: o,
    k: s
  } = ur(e, t, Object);
  o[s] = o[s] || [], r && (o[s] = o[s].concat(n)), r || o[s].push(n);
}
function fo(e, t) {
  const {
    obj: n,
    k: r
  } = ur(e, t);
  if (n)
    return n[r];
}
function Cg(e, t, n) {
  const r = fo(e, n);
  return r !== void 0 ? r : fo(t, n);
}
function Ld(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : Ld(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function Pn(e) {
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
class Eg {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const Ig = [" ", ",", "?", "!", ";"], Rg = new Eg(20);
function $g(e, t, n) {
  t = t || "", n = n || "";
  const r = Ig.filter((i) => t.indexOf(i) < 0 && n.indexOf(i) < 0);
  if (r.length === 0)
    return !0;
  const o = Rg.getRegExp(`(${r.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let s = !o.test(e);
  if (!s) {
    const i = e.indexOf(n);
    i > 0 && !o.test(e.substring(0, i)) && (s = !0);
  }
  return s;
}
function Di(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e)
    return;
  if (e[t])
    return e[t];
  const r = t.split(n);
  let o = e;
  for (let s = 0; s < r.length; ) {
    if (!o || typeof o != "object")
      return;
    let i, a = "";
    for (let c = s; c < r.length; ++c)
      if (c !== s && (a += n), a += r[c], i = o[a], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && c < r.length - 1)
          continue;
        s += c - s + 1;
        break;
      }
    o = i;
  }
  return o;
}
function po(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class vl extends Vo {
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
    const s = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, i = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && s ? a.push(...r.split(s)) : a.push(r)));
    const c = fo(this.data, a);
    return !c && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), c || !i || typeof r != "string" ? c : Di(this.data && this.data[t] && this.data[t][n], r, s);
  }
  addResource(t, n, r, o) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(i ? r.split(i) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), bl(this.data, a, o), s.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const s in r)
      (typeof r[s] == "string" || Array.isArray(r[s])) && this.addResource(t, n, s, r[s], {
        silent: !0
      });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, s) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), o = r, r = n, n = a[1]), this.addNamespaces(n);
    let c = fo(this.data, a) || {};
    i.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? Ld(c, r, s) : c = {
      ...c,
      ...r
    }, bl(this.data, a, c), i.silent || this.emit("added", t, n, r);
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
var jd = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, o) {
    return e.forEach((s) => {
      this.processors[s] && (t = this.processors[s].process(t, n, r, o));
    }), t;
  }
};
const xl = {};
class mo extends Vo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), xg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Et.create("translator");
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
    let s = n.ns || this.options.defaultNS || [];
    const i = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !$g(t, r, o);
    if (i && !a) {
      const c = t.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: t,
          namespaces: s
        };
      const l = t.split(r);
      (r !== o || r === o && this.options.ns.indexOf(l[0]) > -1) && (s = l.shift()), t = l.join(o);
    }
    return typeof s == "string" && (s = [s]), {
      key: t,
      namespaces: s
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null)
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const o = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: i,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], n), c = a[a.length - 1], l = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (u) {
        const v = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${v}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: l,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(n)
        } : `${c}${v}${i}`;
      }
      return o ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: l,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(n)
      } : i;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const p = d && d.usedKey || i, m = d && d.exactUsedKey || i, g = Object.prototype.toString.apply(f), h = ["[object Number]", "[object Function]", "[object RegExp]"], b = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (x && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && h.indexOf(g) < 0 && !(typeof b == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, {
          ...n,
          ns: a
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = v, d.usedParams = this.getUsedParamsDetails(n), d) : v;
      }
      if (s) {
        const v = Array.isArray(f), S = v ? [] : {}, C = v ? m : p;
        for (const D in f)
          if (Object.prototype.hasOwnProperty.call(f, D)) {
            const P = `${C}${s}${D}`;
            S[D] = this.translate(P, {
              ...n,
              joinArrays: !1,
              ns: a
            }), S[D] === P && (S[D] = f[D]);
          }
        f = S;
      }
    } else if (x && typeof b == "string" && Array.isArray(f))
      f = f.join(b), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let v = !1, S = !1;
      const C = n.count !== void 0 && typeof n.count != "string", D = mo.hasDefaultValue(n), P = C ? this.pluralResolver.getSuffix(l, n.count, n) : "", $ = n.ordinal && C ? this.pluralResolver.getSuffix(l, n.count, {
        ordinal: !1
      }) : "", T = C && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), j = T && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${P}`] || n[`defaultValue${$}`] || n.defaultValue;
      !this.isValidLookup(f) && D && (v = !0, f = j), this.isValidLookup(f) || (S = !0, f = i);
      const W = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, O = D && j !== f && this.options.updateMissing;
      if (S || v || O) {
        if (this.logger.log(O ? "updateKey" : "missingKey", l, c, i, O ? j : f), s) {
          const N = this.resolve(i, {
            ...n,
            keySeparator: !1
          });
          N && N.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let L = [];
        const E = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && E && E[0])
          for (let N = 0; N < E.length; N++)
            L.push(E[N]);
        else
          this.options.saveMissingTo === "all" ? L = this.languageUtils.toResolveHierarchy(n.lng || this.language) : L.push(n.lng || this.language);
        const A = (N, B, M) => {
          const K = D && M !== f ? M : W;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(N, c, B, K, O, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(N, c, B, K, O, n), this.emit("missingKey", N, c, B, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? L.forEach((N) => {
          const B = this.pluralResolver.getSuffixes(N, n);
          T && n[`defaultValue${this.options.pluralSeparator}zero`] && B.indexOf(`${this.options.pluralSeparator}zero`) < 0 && B.push(`${this.options.pluralSeparator}zero`), B.forEach((M) => {
            A([N], i + M, n[`defaultValue${M}`] || j);
          });
        }) : A(L, i, j));
      }
      f = this.extendTranslation(f, t, n, d, r), S && f === i && this.options.appendNamespaceToMissingKey && (f = `${c}:${i}`), (S || v) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${i}` : i, v ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return o ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, o, s) {
    var i = this;
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
        return s && s[0] === p[0] && !r.context ? (i.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`), null) : i.translate(...p, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, c = typeof a == "string" ? [a] : a;
    return t != null && c && c.length && r.applyPostProcessor !== !1 && (t = jd.handle(c, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, o, s, i, a;
    return typeof t == "string" && (t = [t]), t.forEach((c) => {
      if (this.isValidLookup(r))
        return;
      const l = this.extractFromKey(c, n), u = l.key;
      o = u;
      let d = l.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", p = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", g = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((h) => {
        this.isValidLookup(r) || (a = h, !xl[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (xl[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((b) => {
          if (this.isValidLookup(r))
            return;
          i = b;
          const x = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(x, u, b, h, n);
          else {
            let v;
            f && (v = this.pluralResolver.getSuffix(b, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (x.push(u + v), n.ordinal && v.indexOf(C) === 0 && x.push(u + v.replace(C, this.options.pluralSeparator)), p && x.push(u + S)), m) {
              const D = `${u}${this.options.contextSeparator}${n.context}`;
              x.push(D), f && (x.push(D + v), n.ordinal && v.indexOf(C) === 0 && x.push(D + v.replace(C, this.options.pluralSeparator)), p && x.push(D + S));
            }
          }
          let w;
          for (; w = x.pop(); )
            this.isValidLookup(r) || (s = w, r = this.getResource(b, h, w, n));
        }));
      });
    }), {
      res: r,
      usedKey: o,
      exactUsedKey: s,
      usedLng: i,
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
      for (const s of n)
        delete o[s];
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
function Ws(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class wl {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Et.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = po(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = po(t), !t || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ws(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Ws(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Ws(r[2].toLowerCase()))), r.join("-");
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
      n = this.options.supportedLngs.find((s) => {
        if (s === o)
          return s;
        if (!(s.indexOf("-") < 0 && o.indexOf("-") < 0) && (s.indexOf("-") > 0 && o.indexOf("-") < 0 && s.substring(0, s.indexOf("-")) === o || s.indexOf(o) === 0 && o.length > 1))
          return s;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t)
      return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t))
      return t;
    if (!n)
      return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), o = [], s = (i) => {
      i && (this.isSupportedCode(i) ? o.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : typeof t == "string" && s(this.formatLanguageCode(t)), r.forEach((i) => {
      o.indexOf(i) < 0 && s(this.formatLanguageCode(i));
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
const Ng = ["v1", "v2", "v3"], Tg = ["v4"], Sl = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Lg() {
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
class jg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Et.create("pluralResolver"), (!this.options.compatibilityJSON || Tg.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Lg();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(po(t === "dev" ? "en" : t), {
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, s) => Sl[o] - Sl[s]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    const s = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? s() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !Ng.includes(this.options.compatibilityJSON);
  }
}
function Cl(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = Cg(e, t, n);
  return !s && o && typeof n == "string" && (s = Di(e, n, r), s === void 0 && (s = Di(t, n, r))), s;
}
class _g {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Et.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: o,
      prefix: s,
      prefixEscaped: i,
      suffix: a,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: p,
      nestingSuffix: m,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: h,
      maxReplaces: b,
      alwaysFormat: x
    } = t.interpolation;
    this.escape = n !== void 0 ? n : Dg, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = s ? Pn(s) : i || "{{", this.suffix = a ? Pn(a) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? Pn(f) : p || Pn("$t("), this.nestingSuffix = m ? Pn(m) : g || Pn(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = x !== void 0 ? x : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, o) {
    let s, i, a;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const x = Cl(n, c, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : x;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), b = g.join(this.formatSeparator).trim();
      return this.format(Cl(n, c, h, this.options.keySeparator, this.options.ignoreJSONStructure), b, r, {
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
      for (a = 0; s = m.regex.exec(t); ) {
        const g = s[1].trim();
        if (i = u(g), i === void 0)
          if (typeof d == "function") {
            const b = d(t, s, o);
            i = typeof b == "string" ? b : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            i = "";
          else if (f) {
            i = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), i = "";
        else
          typeof i != "string" && !this.useRawValueToEscape && (i = yl(i));
        const h = m.safeValue(i);
        if (t = t.replace(s[0], h), f ? (m.regex.lastIndex += i.length, m.regex.lastIndex -= s[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, i;
    function a(c, l) {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0)
        return c;
      const d = c.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      c = d[0], f = this.interpolate(f, i);
      const p = f.match(/'/g), m = f.match(/"/g);
      (p && p.length % 2 === 0 && !m || m.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        i = JSON.parse(f), l && (i = {
          ...l,
          ...i
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, g), `${c}${u}${f}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, c;
    }
    for (; o = this.nestingRegexp.exec(t); ) {
      let c = [];
      i = {
        ...r
      }, i = i.replace && typeof i.replace != "string" ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((d) => d.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (s = n(a.call(this, o[1].trim(), i), i), s && o[0] === t && typeof s != "string")
        return s;
      typeof s != "string" && (s = yl(s)), s || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), s = ""), l && (s = c.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), s.trim())), t = t.replace(o[0], s), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function Mg(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((i) => {
      if (i) {
        const [a, ...c] = i.split(":"), l = c.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        n[u] || (n[u] = l), l === "false" && (n[u] = !1), l === "true" && (n[u] = !0), isNaN(l) || (n[u] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function Dn(e) {
  const t = {};
  return function(r, o, s) {
    const i = o + JSON.stringify(s);
    let a = t[i];
    return a || (a = e(po(o), s), t[i] = a), a(r);
  };
}
class kg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Et.create("formatter"), this.options = t, this.formats = {
      number: Dn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r
        });
        return (s) => o.format(s);
      }),
      currency: Dn((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (s) => o.format(s);
      }),
      datetime: Dn((n, r) => {
        const o = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (s) => o.format(s);
      }),
      relativetime: Dn((n, r) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (s) => o.format(s, r.range || "day");
      }),
      list: Dn((n, r) => {
        const o = new Intl.ListFormat(n, {
          ...r
        });
        return (s) => o.format(s);
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
    this.formats[t.toLowerCase().trim()] = Dn(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = Mg(c);
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
class Bg extends Vo {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = Et.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
  }
  queueLoad(t, n, r, o) {
    const s = {}, i = {}, a = {}, c = {};
    return t.forEach((l) => {
      let u = !0;
      n.forEach((d) => {
        const f = `${l}|${d}`;
        !r.reload && this.store.hasResourceBundle(l, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? i[f] === void 0 && (i[f] = !0) : (this.state[f] = 1, u = !1, i[f] === void 0 && (i[f] = !0), s[f] === void 0 && (s[f] = !0), c[d] === void 0 && (c[d] = !0)));
      }), u || (a[l] = !0);
    }), (Object.keys(s).length || Object.keys(i).length) && this.queue.push({
      pending: i,
      pendingCount: Object.keys(i).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(i),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(t, n, r) {
    const o = t.split("|"), s = o[0], i = o[1];
    n && this.emit("failedLoading", s, i, n), r && this.store.addResourceBundle(s, i, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((c) => {
      Sg(c.loaded, [s], i), Fg(c, t), n && c.errors.push(n), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((d) => {
          a[l][d] === void 0 && (a[l][d] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((c) => !c.done);
  }
  read(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, i = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length)
      return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: o,
        wait: s,
        callback: i
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
          this.read.call(this, t, n, r, o + 1, s * 2, i);
        }, s);
        return;
      }
      i(l, u);
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
    const s = this.queueLoad(t, n, r, o);
    if (!s.toLoad.length)
      return s.pending.length || o(), null;
    s.toLoad.forEach((i) => {
      this.loadOne(i);
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
    const r = t.split("|"), o = r[0], s = r[1];
    this.read(o, s, "read", void 0, void 0, (i, a) => {
      i && this.logger.warn(`${n}loading namespace ${s} for language ${o} failed`, i), !i && a && this.logger.log(`${n}loaded namespace ${s} for language ${o}`, a), this.loaded(t, i, a);
    });
  }
  saveMissing(t, n, r, o, s) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const c = {
          ...i,
          isUpdate: s
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
function Pl() {
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
      format: (e) => e,
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
function Dl(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Yr() {
}
function Vg(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class mr extends Vo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Dl(t), this.services = {}, this.logger = Et, this.modules = {
      external: []
    }, Vg(this), n && !this.isInitialized && !t.isClone) {
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
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const o = Pl();
    this.options = {
      ...o,
      ...this.options,
      ...Dl(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function s(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Et.init(s(this.modules.logger), this.options) : Et.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = kg);
      const d = new wl(this.options);
      this.store = new vl(this.options.resources, this.options);
      const f = this.services;
      f.logger = Et, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new jg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = s(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new _g(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Bg(s(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = s(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = s(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new mo(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, g = new Array(m > 1 ? m - 1 : 0), h = 1; h < m; h++)
          g[h - 1] = arguments[h];
        t.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Yr), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const c = er(), l = () => {
      const u = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yr;
    const o = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const s = [], i = (a) => {
        if (!a || a === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
          l !== "cimode" && s.indexOf(l) < 0 && s.push(l);
        });
      };
      o ? i(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => i(c)), this.options.preload && this.options.preload.forEach((a) => i(a)), this.services.backendConnector.load(s, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const o = er();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Yr), this.services.backendConnector.reload(t, n, (s) => {
      o.resolve(), r(s);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && jd.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = er();
    this.emit("languageChanging", t);
    const s = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, i = (c, l) => {
      l ? (s(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return r.t(...arguments);
      }), n && n(c, function() {
        return r.t(...arguments);
      });
    }, a = (c) => {
      !t && !c && this.services.languageDetector && (c = []);
      const l = typeof c == "string" ? c : this.services.languageUtils.getBestMatchFromCodes(c);
      l && (this.language || s(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (u) => {
        i(u, l);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), o;
  }
  getFixedT(t, n, r) {
    var o = this;
    const s = function(i, a) {
      let c;
      if (typeof a != "object") {
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), d = 2; d < l; d++)
          u[d - 2] = arguments[d];
        c = o.options.overloadTranslationOptionHandler([i, a].concat(u));
      } else
        c = {
          ...a
        };
      c.lng = c.lng || s.lng, c.lngs = c.lngs || s.lngs, c.ns = c.ns || s.ns, c.keyPrefix = c.keyPrefix || r || s.keyPrefix;
      const f = o.options.keySeparator || ".";
      let p;
      return c.keyPrefix && Array.isArray(i) ? p = i.map((m) => `${c.keyPrefix}${f}${m}`) : p = c.keyPrefix ? `${c.keyPrefix}${f}${i}` : i, o.t(p, c);
    };
    return typeof t == "string" ? s.lng = t : s.lngs = t, s.ns = n, s.keyPrefix = r, s;
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
    const r = n.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
      return !0;
    const i = (a, c) => {
      const l = this.services.backendConnector.state[`${a}|${c}`];
      return l === -1 || l === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, i);
      if (a !== void 0)
        return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(r, t) && (!o || i(s, t)));
  }
  loadNamespaces(t, n) {
    const r = er();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = er();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], s = t.filter((i) => o.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return s.length ? (this.options.preload = o.concat(s), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new wl(Pl());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new mr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yr;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const o = {
      ...this.options,
      ...t,
      isClone: !0
    }, s = new mr(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (s.logger = s.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      s[a] = this[a];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, r && (s.store = new vl(this.store.data, o), s.services.resourceStore = s.store), s.translator = new mo(s.services, o), s.translator.on("*", function(a) {
      for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++)
        l[u - 1] = arguments[u];
      s.emit(a, ...l);
    }), s.init(o, n), s.translator.options = o, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
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
const De = mr.createInstance();
De.createInstance = mr.createInstance;
De.createInstance;
De.dir;
De.init;
De.loadResources;
De.reloadResources;
De.use;
De.changeLanguage;
De.getFixedT;
De.t;
De.exists;
De.setDefaultNamespace;
De.hasLoadedNamespace;
De.loadNamespaces;
De.loadLanguages;
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ut.apply(null, arguments);
}
function zg() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const El = {};
function Ei() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && El[t[0]] || (typeof t[0] == "string" && (El[t[0]] = /* @__PURE__ */ new Date()), zg(...t));
}
const _d = (e, t) => () => {
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
function Il(e, t, n) {
  e.loadNamespaces(t, _d(e, n));
}
function Rl(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, _d(e, r));
}
function Wg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], o = t.options ? t.options.fallbackLng : !1, s = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode")
    return !0;
  const i = (a, c) => {
    const l = t.services.backendConnector.state[`${a}|${c}`];
    return l === -1 || l === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || i(r, e) && (!o || i(s, e)));
}
function Gg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Ei("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, s) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !s(o.isLanguageChangingTo, e))
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
let Ii = {
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
  Ii = {
    ...Ii,
    ...e
  };
}
function Xg() {
  return Ii;
}
let Md;
function Jg(e) {
  Md = e;
}
function Qg() {
  return Md;
}
const Zg = {
  type: "3rdParty",
  init(e) {
    Yg(e.options.react), Jg(e);
  }
}, ey = tn();
class ty {
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
const ny = (e, t) => {
  const n = z();
  return H(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function $t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = wt(ey) || {}, s = n || r || Qg();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new ty()), !s) {
    Ei("You will need to pass in an i18next instance by using initReactI18next");
    const w = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, v = [w, {}, !1];
    return v.t = w, v.i18n = {}, v.ready = !1, v;
  }
  s.options.react && s.options.react.wait !== void 0 && Ei("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const i = {
    ...Xg(),
    ...s.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: c
  } = i;
  let l = e || o || s.options && s.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], s.reportNamespaces.addUsedNamespaces && s.reportNamespaces.addUsedNamespaces(l);
  const u = (s.isInitialized || s.initializedStoreOnce) && l.every((w) => Gg(w, s, i));
  function d() {
    return s.getFixedT(t.lng || null, i.nsMode === "fallback" ? l : l[0], c);
  }
  const [f, p] = q(d);
  let m = l.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = ny(m), h = z(!0);
  H(() => {
    const {
      bindI18n: w,
      bindI18nStore: v
    } = i;
    h.current = !0, !u && !a && (t.lng ? Rl(s, t.lng, l, () => {
      h.current && p(d);
    }) : Il(s, l, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function S() {
      h.current && p(d);
    }
    return w && s && s.on(w, S), v && s && s.store.on(v, S), () => {
      h.current = !1, w && s && w.split(" ").forEach((C) => s.off(C, S)), v && s && v.split(" ").forEach((C) => s.store.off(C, S));
    };
  }, [s, m]);
  const b = z(!0);
  H(() => {
    h.current && !b.current && p(d), b.current = !1;
  }, [s, c]);
  const x = [f, s, u];
  if (x.t = f, x.i18n = s, x.ready = u, u || !u && !a)
    return x;
  throw new Promise((w) => {
    t.lng ? Rl(s, t.lng, l, () => w()) : Il(s, l, () => w());
  });
}
De.use(Zg).init({
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
function Oe(e) {
  return Object.keys(e);
}
function Gs(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function aa(e, t) {
  const n = { ...e }, r = t;
  return Gs(e) && Gs(t) && Object.keys(t).forEach((o) => {
    Gs(r[o]) && o in e ? n[o] = aa(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function ry(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function oy(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function Ri(e) {
  const t = oy(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function Hs(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function kd(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Hs(o) : o;
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba("))
        return r;
      if (r.includes(","))
        return r.split(",").map((s) => n(s)).join(",");
      if (r.includes(" "))
        return r.split(" ").map((s) => n(s)).join(" ");
      if (r.includes(e))
        return t ? Hs(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const s = `${Number(o) / 16}${e}`;
        return t ? Hs(s) : s;
      }
    }
    return r;
  }
  return n;
}
const R = kd("rem", { shouldScale: !0 }), $l = kd("em");
function Tr(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Fd(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function nn(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== Pd : !1;
}
function Bt(e) {
  const t = tn(null);
  return [({ children: o, value: s }) => /* @__PURE__ */ y.jsx(t.Provider, { value: s, children: o }), () => {
    const o = wt(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function zo(e = null) {
  const t = tn(e);
  return [({ children: o, value: s }) => /* @__PURE__ */ y.jsx(t.Provider, { value: s, children: o }), () => wt(t)];
}
function ho(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function $i(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function sy(e, t, n) {
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
function iy(e, t, n) {
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
function ay(e, t, n) {
  return $i(e, n) === $i(t, n);
}
function Bd({
  parentSelector: e,
  siblingSelector: t,
  onKeyDown: n,
  loop: r = !0,
  activateOnFocus: o = !1,
  dir: s = "rtl",
  orientation: i
}) {
  return (a) => {
    var m;
    n == null || n(a);
    const c = Array.from(
      ((m = $i(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => ay(a.currentTarget, g, e)), l = c.findIndex((g) => a.currentTarget === g), u = iy(l, c, r), d = sy(l, c, r), f = s === "rtl" ? d : u, p = s === "rtl" ? u : d;
    switch (a.key) {
      case "ArrowRight": {
        i === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[f].focus(), o && c[f].click());
        break;
      }
      case "ArrowLeft": {
        i === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[p].focus(), o && c[p].click());
        break;
      }
      case "ArrowUp": {
        i === "vertical" && (a.stopPropagation(), a.preventDefault(), c[d].focus(), o && c[d].click());
        break;
      }
      case "ArrowDown": {
        i === "vertical" && (a.stopPropagation(), a.preventDefault(), c[u].focus(), o && c[u].click());
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
const cy = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Lr(e) {
  return cy[e];
}
const ly = () => {
};
function uy(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || ly : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function de(e, t = "size", n = !0) {
  if (e !== void 0)
    return Fd(e) ? n ? R(e) : e : `var(--${t}-${e})`;
}
function go(e) {
  return de(e, "mantine-spacing");
}
function Ne(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : de(e, "mantine-radius");
}
function Ke(e) {
  return de(e, "mantine-font-size");
}
function dy(e) {
  return de(e, "mantine-line-height", !1);
}
function fy(e) {
  if (e)
    return de(e, "mantine-shadow", !1);
}
function yo(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function py(e, t) {
  return e in t.breakpoints ? Ri(t.breakpoints[e]) : Ri(e);
}
function Vd(e, t) {
  const n = e.map((r) => ({
    value: r,
    px: py(r, t)
  }));
  return n.sort((r, o) => r.px - o.px), n;
}
function cr(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function zd() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function un(e) {
  const t = z(e);
  return H(() => {
    t.current = e;
  }), Ht(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Wo(e, t) {
  const n = un(e), r = z(0);
  return H(() => () => window.clearTimeout(r.current), []), ee(
    (...o) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => n(...o), t);
    },
    [n, t]
  );
}
const Ol = ["mousedown", "touchstart"];
function my(e, t, n) {
  const r = z();
  return H(() => {
    const o = (s) => {
      const { target: i } = s ?? {};
      if (Array.isArray(n)) {
        const a = (i == null ? void 0 : i.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(i) && i.tagName !== "HTML";
        n.every((l) => !!l && !s.composedPath().includes(l)) && !a && e();
      } else
        r.current && !r.current.contains(i) && e();
    };
    return (t || Ol).forEach((s) => document.addEventListener(s, o)), () => {
      (t || Ol).forEach((s) => document.removeEventListener(s, o));
    };
  }, [r, e, n]), r;
}
function hy(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function gy(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function yy(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = q(
    n ? t : gy(e)
  ), s = z();
  return H(() => {
    if ("matchMedia" in window)
      return s.current = window.matchMedia(e), o(s.current.matches), hy(s.current, (i) => o(i.matches));
  }, [e]), r;
}
const jr = typeof document < "u" ? Fo : H;
function Xt(e, t) {
  const n = z(!1);
  H(
    () => () => {
      n.current = !1;
    },
    []
  ), H(() => {
    if (n.current)
      return e();
    n.current = !0;
  }, t);
}
function by({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = z(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Xt(() => {
    let o = -1;
    const s = (i) => {
      i.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", s), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", s);
    };
  }, [e, t]), r;
}
function vy(e, t = "body > :not(script)") {
  const n = zd(), r = Array.from(
    document.querySelectorAll(t)
  ).map((o) => {
    var c;
    if ((c = o == null ? void 0 : o.shadowRoot) != null && c.contains(e) || o.contains(e))
      return;
    const s = o.getAttribute("aria-hidden"), i = o.getAttribute("data-hidden"), a = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", n), s === null || s === "false" ? o.setAttribute("aria-hidden", "true") : !i && !a && o.setAttribute("data-hidden", s), {
      node: o,
      ariaHidden: i || null
    };
  });
  return () => {
    r.forEach((o) => {
      !o || n !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const xy = /input|select|textarea|button|object/, Wd = "a, input, select, textarea, button, object, [tabindex]";
function wy(e) {
  return e.style.display === "none";
}
function Sy(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (wy(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function Gd(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Oi(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(Gd(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (xy.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && Sy(e);
}
function Hd(e) {
  const t = Gd(e);
  return (Number.isNaN(t) || t >= 0) && Oi(e);
}
function Cy(e) {
  return Array.from(e.querySelectorAll(Wd)).filter(Hd);
}
function Py(e, t) {
  const n = Cy(e);
  if (!n.length) {
    t.preventDefault();
    return;
  }
  const r = n[t.shiftKey ? 0 : n.length - 1], o = e.getRootNode();
  let s = r === o.activeElement || e === o.activeElement;
  const i = o.activeElement;
  if (i.tagName === "INPUT" && i.getAttribute("type") === "radio" && (s = n.filter(
    (u) => u.getAttribute("type") === "radio" && u.getAttribute("name") === i.getAttribute("name")
  ).includes(r)), !s)
    return;
  t.preventDefault();
  const c = n[t.shiftKey ? n.length - 1 : 0];
  c && c.focus();
}
function Dy(e = !0) {
  const t = z(), n = z(null), r = (s) => {
    let i = s.querySelector("[data-autofocus]");
    if (!i) {
      const a = Array.from(s.querySelectorAll(Wd));
      i = a.find(Hd) || a.find(Oi) || null, !i && Oi(s) && (i = s);
    }
    i && i.focus({ preventScroll: !0 });
  }, o = ee(
    (s) => {
      if (e) {
        if (s === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = vy(s), t.current !== s && (s ? (setTimeout(() => {
          s.getRootNode() && r(s);
        }), t.current = s) : t.current = null);
      }
    },
    [e]
  );
  return H(() => {
    if (!e)
      return;
    t.current && setTimeout(() => r(t.current));
    const s = (i) => {
      i.key === "Tab" && t.current && Py(t.current, i);
    };
    return document.addEventListener("keydown", s), () => {
      document.removeEventListener("keydown", s), n.current && n.current();
    };
  }, [e]), o;
}
const Ey = Q["useId".toString()] || (() => {
});
function Iy() {
  const e = Ey();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Ot(e) {
  const t = Iy(), [n, r] = q(t);
  return jr(() => {
    r(zd());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function Ud(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function qd(...e) {
  return (t) => {
    e.forEach((n) => Ud(n, t));
  };
}
function _e(...e) {
  return ee(qd(...e), e);
}
function jt({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {
  }
}) {
  const [o, s] = q(
    t !== void 0 ? t : n
  ), i = (a, ...c) => {
    s(a), r == null || r(a, ...c);
  };
  return e !== void 0 ? [e, r, !0] : [o, i, !1];
}
function Kd(e, t) {
  return yy("(prefers-reduced-motion: reduce)", e, t);
}
function Ry(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, s] = q(e), i = ee(() => {
    s((l) => l || (n == null || n(), !0));
  }, [n]), a = ee(() => {
    s((l) => l && (r == null || r(), !1));
  }, [r]), c = ee(() => {
    o ? a() : i();
  }, [a, i, o]);
  return [o, { open: i, close: a, toggle: c }];
}
function $y(e) {
  const t = z();
  return H(() => {
    t.current = e;
  }, [e]), t.current;
}
function Yd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Yd(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function at() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Yd(e)) && (r && (r += " "), r += t);
  return r;
}
const Oy = {};
function Ay(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = at(t[r], o) : t[r] = o;
    });
  }), t;
}
function Go({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const s = (Array.isArray(t) ? t : [t]).map(
    (i) => typeof i == "function" ? i(e, n, r) : i || Oy
  );
  return Ay(s);
}
function bo({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((s, i) => typeof i == "function" ? { ...s, ...i(e, n, r) } : { ...s, ...i }, {});
}
const Xd = tn(null);
function vn() {
  const e = wt(Xd);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Ny() {
  return vn().cssVariablesResolver;
}
function Ty() {
  return vn().classNamesPrefix;
}
function ca() {
  return vn().getStyleNonce;
}
function Ly() {
  return vn().withStaticClasses;
}
function jy() {
  return vn().headless;
}
function _y() {
  var e;
  return (e = vn().stylesTransform) == null ? void 0 : e.sx;
}
function My() {
  var e;
  return (e = vn().stylesTransform) == null ? void 0 : e.styles;
}
function ky(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function Fy(e) {
  let t = e.replace("#", "");
  if (t.length === 3) {
    const i = t.split("");
    t = [
      i[0],
      i[0],
      i[1],
      i[1],
      i[2],
      i[2]
    ].join("");
  }
  if (t.length === 8) {
    const i = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: i
    };
  }
  const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, s = n & 255;
  return {
    r,
    g: o,
    b: s,
    a: 1
  };
}
function By(e) {
  const [t, n, r, o] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function Vy(e) {
  const t = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, n = e.match(t);
  if (!n)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const r = parseInt(n[1], 10), o = parseInt(n[2], 10) / 100, s = parseInt(n[3], 10) / 100, i = n[5] ? parseFloat(n[5]) : void 0, a = (1 - Math.abs(2 * s - 1)) * o, c = r / 60, l = a * (1 - Math.abs(c % 2 - 1)), u = s - a / 2;
  let d, f, p;
  return c >= 0 && c < 1 ? (d = a, f = l, p = 0) : c >= 1 && c < 2 ? (d = l, f = a, p = 0) : c >= 2 && c < 3 ? (d = 0, f = a, p = l) : c >= 3 && c < 4 ? (d = 0, f = l, p = a) : c >= 4 && c < 5 ? (d = l, f = 0, p = a) : (d = a, f = 0, p = l), {
    r: Math.round((d + u) * 255),
    g: Math.round((f + u) * 255),
    b: Math.round((p + u) * 255),
    a: i || 1
  };
}
function la(e) {
  return ky(e) ? Fy(e) : e.startsWith("rgb") ? By(e) : e.startsWith("hsl") ? Vy(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Xr(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: s } = la(e), i = 1 - t, a = (c) => Math.round(c * i);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${s})`;
}
function hr(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function Us(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function zy(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function Wy(e) {
  if (e.startsWith("oklch("))
    return (zy(e) || 0) / 100;
  const { r: t, g: n, b: r } = la(e), o = t / 255, s = n / 255, i = r / 255, a = Us(o), c = Us(s), l = Us(i);
  return 0.2126 * a + 0.7152 * c + 0.0722 * l;
}
function tr(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : Wy(e) > t;
}
function xn({
  color: e,
  theme: t,
  colorScheme: n
}) {
  if (typeof e != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`
    );
  if (e === "bright")
    return {
      color: e,
      value: n === "dark" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: tr(
        n === "dark" ? t.white : t.black,
        t.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (e === "dimmed")
    return {
      color: e,
      value: n === "dark" ? t.colors.dark[2] : t.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: tr(
        n === "dark" ? t.colors.dark[2] : t.colors.gray[6],
        t.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (e === "white" || e === "black")
    return {
      color: e,
      value: e === "white" ? t.white : t.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: tr(
        e === "white" ? t.white : t.black,
        t.luminanceThreshold
      ),
      variable: `--mantine-color-${e}`
    };
  const [r, o] = e.split("."), s = o ? Number(o) : void 0, i = r in t.colors;
  if (i) {
    const a = s !== void 0 ? t.colors[r][s] : t.colors[r][hr(t, n || "light")];
    return {
      color: r,
      value: a,
      shade: s,
      isThemeColor: i,
      isLight: tr(a, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${s}` : `--mantine-color-${r}-filled`
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: i,
    isLight: tr(e, t.luminanceThreshold),
    shade: s,
    variable: void 0
  };
}
function st(e, t) {
  const n = xn({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Ai(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = st(n.from, t), o = st(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Dt(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const s = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${s}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = la(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const En = Dt, Gy = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r,
  autoContrast: o
}) => {
  const s = xn({ color: e, theme: t }), i = typeof o == "boolean" ? o : t.autoContrast;
  if (n === "filled") {
    const a = i && s.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return s.isThemeColor ? s.shade === void 0 ? {
      background: `var(--mantine-color-${e}-filled)`,
      hover: `var(--mantine-color-${e}-filled-hover)`,
      color: a,
      border: `${R(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${s.color}-${s.shade})`,
      hover: `var(--mantine-color-${s.color}-${s.shade === 9 ? 8 : s.shade + 1})`,
      color: a,
      border: `${R(1)} solid transparent`
    } : {
      background: e,
      hover: Xr(e, 0.1),
      color: a,
      border: `${R(1)} solid transparent`
    };
  }
  if (n === "light") {
    if (s.isThemeColor) {
      if (s.shade === void 0)
        return {
          background: `var(--mantine-color-${e}-light)`,
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${R(1)} solid transparent`
        };
      const a = t.colors[s.color][s.shade];
      return {
        background: Dt(a, 0.1),
        hover: Dt(a, 0.12),
        color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: Dt(e, 0.1),
      hover: Dt(e, 0.12),
      color: e,
      border: `${R(1)} solid transparent`
    };
  }
  if (n === "outline")
    return s.isThemeColor ? s.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${e}-outline-hover)`,
      color: `var(--mantine-color-${e}-outline)`,
      border: `${R(1)} solid var(--mantine-color-${e}-outline)`
    } : {
      background: "transparent",
      hover: Dt(t.colors[s.color][s.shade], 0.05),
      color: `var(--mantine-color-${s.color}-${s.shade})`,
      border: `${R(1)} solid var(--mantine-color-${s.color}-${s.shade})`
    } : {
      background: "transparent",
      hover: Dt(e, 0.05),
      color: e,
      border: `${R(1)} solid ${e}`
    };
  if (n === "subtle") {
    if (s.isThemeColor) {
      if (s.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${R(1)} solid transparent`
        };
      const a = t.colors[s.color][s.shade];
      return {
        background: "transparent",
        hover: Dt(a, 0.12),
        color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Dt(e, 0.12),
      color: e,
      border: `${R(1)} solid transparent`
    };
  }
  return n === "transparent" ? s.isThemeColor ? s.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${e}-light-color)`,
    border: `${R(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${s.color}-${Math.min(s.shade, 6)})`,
    border: `${R(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: e,
    border: `${R(1)} solid transparent`
  } : n === "white" ? s.isThemeColor ? s.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Xr(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${R(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Xr(t.white, 0.01),
    color: `var(--mantine-color-${s.color}-${s.shade})`,
    border: `${R(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Xr(t.white, 0.01),
    color: e,
    border: `${R(1)} solid transparent`
  } : n === "gradient" ? {
    background: Ai(r, t),
    hover: Ai(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${R(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Hy = {
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
}, Al = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", ua = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Hy,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Gy,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Al,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Al,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: R(34), lineHeight: "1.3" },
      h2: { fontSize: R(26), lineHeight: "1.35" },
      h3: { fontSize: R(22), lineHeight: "1.4" },
      h4: { fontSize: R(18), lineHeight: "1.45" },
      h5: { fontSize: R(16), lineHeight: "1.5" },
      h6: { fontSize: R(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: R(12),
    sm: R(14),
    md: R(16),
    lg: R(18),
    xl: R(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: R(2),
    sm: R(4),
    md: R(8),
    lg: R(16),
    xl: R(32)
  },
  spacing: {
    xs: R(10),
    sm: R(12),
    md: R(16),
    lg: R(20),
    xl: R(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), 0 ${R(1)} ${R(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(10)} ${R(
      15
    )} ${R(-5)}, rgba(0, 0, 0, 0.04) 0 ${R(7)} ${R(7)} ${R(-5)}`,
    md: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(20)} ${R(
      25
    )} ${R(-5)}, rgba(0, 0, 0, 0.04) 0 ${R(10)} ${R(10)} ${R(-5)}`,
    lg: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(28)} ${R(
      23
    )} ${R(-7)}, rgba(0, 0, 0, 0.04) 0 ${R(12)} ${R(12)} ${R(-7)}`,
    xl: `0 ${R(1)} ${R(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${R(36)} ${R(
      28
    )} ${R(-7)}, rgba(0, 0, 0, 0.04) 0 ${R(17)} ${R(17)} ${R(-7)}`
  },
  other: {},
  components: {}
};
function Nl(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Uy({
  key: e = "mantine-color-scheme-value"
} = {}) {
  let t;
  return {
    get: (n) => {
      if (typeof window > "u")
        return n;
      try {
        const r = window.localStorage.getItem(e);
        return Nl(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && Nl(r.newValue) && n(r.newValue);
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
const qy = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", Tl = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function qs(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Ll(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(qy);
  if (typeof e.primaryShade == "object" && (!qs(e.primaryShade.dark) || !qs(e.primaryShade.light)))
    throw new Error(Tl);
  if (typeof e.primaryShade == "number" && !qs(e.primaryShade))
    throw new Error(Tl);
}
function Ky(e, t) {
  var r;
  if (!t)
    return Ll(e), e;
  const n = aa(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Ll(n), n;
}
const da = tn(null), Yy = () => wt(da) || ua;
function We() {
  const e = wt(da);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Jd({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = Yy(), o = Ht(
    () => Ky(n ? r : ua, e),
    [e, r, n]
  );
  return /* @__PURE__ */ y.jsx(da.Provider, { value: o, children: t });
}
Jd.displayName = "@mantine/core/MantineThemeProvider";
function Xy() {
  const e = We(), t = ca(), n = Oe(e.breakpoints).reduce((r, o) => {
    const s = e.breakpoints[o].includes("px"), i = Ri(e.breakpoints[o]), a = s ? `${i - 0.1}px` : $l(i - 0.1), c = s ? `${i}px` : $l(i);
    return `${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function Ks(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function nr(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Jy(e, t) {
  const n = Ks(e.variables), r = n ? nr(t, n) : "", o = Ks(e.dark), s = Ks(e.light), i = o ? nr(t === ":host" ? `${t}([data-mantine-color-scheme="dark"])` : `${t}[data-mantine-color-scheme="dark"]`, o) : "", a = s ? nr(t === ":host" ? `${t}([data-mantine-color-scheme="light"])` : `${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function Ho({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) && xn({ color: e || t.primaryColor, theme: t }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function jl(e, t) {
  return Ho({
    color: e.colors[e.primaryColor][hr(e, t)],
    theme: e,
    autoContrast: null
  });
}
function Jr({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0
}) {
  if (!e.colors[t])
    return {};
  if (n === "light") {
    const a = hr(e, "light"), c = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${a === 9 ? 8 : a + 1})`,
      [`--mantine-color-${r}-light`]: En(e.colors[t][a], 0.1),
      [`--mantine-color-${r}-light-hover`]: En(e.colors[t][a], 0.12),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-outline-hover`]: En(e.colors[t][a], 0.05)
    };
    return o ? {
      [`--mantine-color-${r}-0`]: e.colors[t][0],
      [`--mantine-color-${r}-1`]: e.colors[t][1],
      [`--mantine-color-${r}-2`]: e.colors[t][2],
      [`--mantine-color-${r}-3`]: e.colors[t][3],
      [`--mantine-color-${r}-4`]: e.colors[t][4],
      [`--mantine-color-${r}-5`]: e.colors[t][5],
      [`--mantine-color-${r}-6`]: e.colors[t][6],
      [`--mantine-color-${r}-7`]: e.colors[t][7],
      [`--mantine-color-${r}-8`]: e.colors[t][8],
      [`--mantine-color-${r}-9`]: e.colors[t][9],
      ...c
    } : c;
  }
  const s = hr(e, "dark"), i = {
    [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
    [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${s})`,
    [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${s === 9 ? 8 : s + 1})`,
    [`--mantine-color-${r}-light`]: En(
      e.colors[t][Math.max(0, s - 2)],
      0.15
    ),
    [`--mantine-color-${r}-light-hover`]: En(
      e.colors[t][Math.max(0, s - 2)],
      0.2
    ),
    [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(s - 5, 0)})`,
    [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(s - 4, 0)})`,
    [`--mantine-color-${r}-outline-hover`]: En(
      e.colors[t][Math.max(s - 4, 0)],
      0.05
    )
  };
  return o ? {
    [`--mantine-color-${r}-0`]: e.colors[t][0],
    [`--mantine-color-${r}-1`]: e.colors[t][1],
    [`--mantine-color-${r}-2`]: e.colors[t][2],
    [`--mantine-color-${r}-3`]: e.colors[t][3],
    [`--mantine-color-${r}-4`]: e.colors[t][4],
    [`--mantine-color-${r}-5`]: e.colors[t][5],
    [`--mantine-color-${r}-6`]: e.colors[t][6],
    [`--mantine-color-${r}-7`]: e.colors[t][7],
    [`--mantine-color-${r}-8`]: e.colors[t][8],
    [`--mantine-color-${r}-9`]: e.colors[t][9],
    ...i
  } : i;
}
function Qy(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function In(e, t, n) {
  Oe(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const Qd = (e) => {
  const t = hr(e, "light"), n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : R(e.defaultRadius), r = {
    variables: {
      "--mantine-scale": e.scale.toString(),
      "--mantine-cursor-type": e.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": e.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": e.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": e.white,
      "--mantine-color-black": e.black,
      "--mantine-line-height": e.lineHeights.md,
      "--mantine-font-family": e.fontFamily,
      "--mantine-font-family-monospace": e.fontFamilyMonospace,
      "--mantine-font-family-headings": e.headings.fontFamily,
      "--mantine-heading-font-weight": e.headings.fontWeight,
      "--mantine-heading-text-wrap": e.headings.textWrap,
      "--mantine-radius-default": n,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${e.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${e.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${e.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${e.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${e.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": jl(e, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": e.black,
      "--mantine-color-body": e.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-${t})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": jl(e, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${e.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  In(r.variables, e.breakpoints, "breakpoint"), In(r.variables, e.spacing, "spacing"), In(r.variables, e.fontSizes, "font-size"), In(r.variables, e.lineHeights, "line-height"), In(r.variables, e.shadows, "shadow"), In(r.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((s, i) => {
    r.variables[`--mantine-primary-color-${i}`] = `var(--mantine-color-${e.primaryColor}-${i})`;
  }), Oe(e.colors).forEach((s) => {
    const i = e.colors[s];
    if (Qy(i)) {
      Object.assign(
        r.light,
        Jr({
          theme: e,
          name: i.name,
          color: i.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        r.dark,
        Jr({
          theme: e,
          name: i.name,
          color: i.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    i.forEach((a, c) => {
      r.variables[`--mantine-color-${s}-${c}`] = a;
    }), Object.assign(
      r.light,
      Jr({
        theme: e,
        color: s,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      r.dark,
      Jr({
        theme: e,
        color: s,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = e.headings.sizes;
  return Oe(o).forEach((s) => {
    r.variables[`--mantine-${s}-font-size`] = o[s].fontSize, r.variables[`--mantine-${s}-line-height`] = o[s].lineHeight, r.variables[`--mantine-${s}-font-weight`] = o[s].fontWeight || e.headings.fontWeight;
  }), r;
};
function Zy({ theme: e, generator: t }) {
  const n = Qd(e), r = t == null ? void 0 : t(e);
  return r ? aa(n, r) : n;
}
const Ys = Qd(ua);
function eb(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return Oe(e.variables).forEach((n) => {
    Ys.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), Oe(e.light).forEach((n) => {
    Ys.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), Oe(e.dark).forEach((n) => {
    Ys.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function tb(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Zd({
  cssVariablesSelector: e,
  deduplicateCssVariables: t
}) {
  const n = We(), r = ca(), o = Ny(), s = Zy({ theme: n, generator: o }), i = e === ":root" && t, a = i ? eb(s) : s, c = Jy(a, e);
  return c ? /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: {
        __html: `${c}${i ? "" : tb(e)}`
      }
    }
  ) : null;
}
Zd.displayName = "@mantine/CssVariables";
function nb() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function Rn(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function rb({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = z(), [s, i] = q(() => e.get(t)), a = r || s, c = ee(
    (u) => {
      r || (Rn(u, n), i(u), e.set(u));
    },
    [e.set, a, r]
  ), l = ee(() => {
    i(t), Rn(t, n), e.clear();
  }, [e.clear, t]);
  return H(() => (e.subscribe(c), e.unsubscribe), [e.subscribe, e.unsubscribe]), jr(() => {
    Rn(e.get(t), n);
  }, []), H(() => {
    var d;
    if (r)
      return Rn(r, n), () => {
      };
    r === void 0 && Rn(s, n), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      s === "auto" && Rn(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [s, r]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function ob({
  respectReducedMotion: e,
  getRootElement: t
}) {
  jr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
nb();
function ef({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: s = !0,
  withCssVariables: i = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = Uy(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: p,
  stylesTransform: m
}) {
  const { colorScheme: g, setColorScheme: h, clearColorScheme: b } = rb({
    defaultColorScheme: u,
    forceColorScheme: p,
    manager: l,
    getRootElement: d
  });
  return ob({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: d
  }), /* @__PURE__ */ y.jsx(
    Xd.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: h,
        clearColorScheme: b,
        getRootElement: d,
        classNamesPrefix: c,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: a,
        withStaticClasses: r,
        stylesTransform: m
      },
      children: /* @__PURE__ */ y.jsxs(Jd, { theme: e, children: [
        i && /* @__PURE__ */ y.jsx(
          Zd,
          {
            cssVariablesSelector: a,
            deduplicateCssVariables: s
          }
        ),
        o && /* @__PURE__ */ y.jsx(Xy, {}),
        t
      ] })
    }
  );
}
ef.displayName = "@mantine/core/MantineProvider";
function tf({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = We();
  return {
    resolvedClassNames: Go({
      theme: o,
      classNames: e,
      props: n,
      stylesCtx: r || void 0
    }),
    resolvedStyles: bo({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const sb = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function ib({ theme: e, options: t, unstyled: n }) {
  return at(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || sb[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function ab({
  selector: e,
  stylesCtx: t,
  options: n,
  props: r,
  theme: o
}) {
  return Go({
    theme: o,
    classNames: n == null ? void 0 : n.classNames,
    props: (n == null ? void 0 : n.props) || r,
    stylesCtx: t
  })[e];
}
function _l({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return Go({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function cb({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function lb({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function ub({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function db({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (s) => {
      var i, a;
      return (a = Go({
        theme: t,
        classNames: (i = t.components[s]) == null ? void 0 : i.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function fb({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function pb({
  theme: e,
  options: t,
  themeName: n,
  selector: r,
  classNamesPrefix: o,
  classNames: s,
  classes: i,
  unstyled: a,
  className: c,
  rootSelector: l,
  props: u,
  stylesCtx: d,
  withStaticClasses: f,
  headless: p,
  transformedStyles: m
}) {
  return at(
    ib({ theme: e, options: t, unstyled: a || p }),
    db({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    fb({ options: t, classes: i, selector: r, unstyled: a }),
    _l({ selector: r, stylesCtx: d, theme: e, classNames: s, props: u }),
    _l({ selector: r, stylesCtx: d, theme: e, classNames: m, props: u }),
    ab({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    cb({ rootSelector: l, selector: r, className: c }),
    lb({ selector: r, classes: i, unstyled: a || p }),
    f && !p && ub({
      themeName: n,
      classNamesPrefix: o,
      selector: r,
      withStaticClass: t == null ? void 0 : t.withStaticClass
    }),
    t == null ? void 0 : t.className
  );
}
function mb({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (s) => {
      var i;
      return bo({
        theme: e,
        styles: (i = e.components[s]) == null ? void 0 : i.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((s, i) => ({ ...s, ...i }), {});
}
function Ni({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Ni({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function hb(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...Tr(n[r]) };
  }), t), {});
}
function gb({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: s,
  themeName: i,
  headless: a
}) {
  var c;
  return (c = hb([
    a ? {} : t == null ? void 0 : t(n, r, o),
    ...i.map((l) => {
      var u, d, f;
      return (f = (d = (u = n.components) == null ? void 0 : u[l]) == null ? void 0 : d.vars) == null ? void 0 : f.call(d, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : c[s];
}
function yb({
  theme: e,
  themeName: t,
  selector: n,
  options: r,
  props: o,
  stylesCtx: s,
  rootSelector: i,
  styles: a,
  style: c,
  vars: l,
  varsResolver: u,
  headless: d,
  withStylesTransform: f
}) {
  return {
    ...!f && mb({ theme: e, themeName: t, props: o, stylesCtx: s, selector: n }),
    ...!f && bo({ theme: e, styles: a, props: o, stylesCtx: s })[n],
    ...!f && bo({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: s })[n],
    ...gb({ theme: e, props: o, stylesCtx: s, vars: l, varsResolver: u, selector: n, themeName: t, headless: d }),
    ...i === n ? Ni({ style: c, theme: e }) : null,
    ...Ni({ style: r == null ? void 0 : r.style, theme: e })
  };
}
function bb({ props: e, stylesCtx: t, themeName: n }) {
  var i;
  const r = We(), o = (i = My()) == null ? void 0 : i();
  return {
    getTransformedStyles: (a) => o ? [
      ...a.map(
        (l) => o(l, { props: e, theme: r, ctx: t })
      ),
      ...n.map(
        (l) => {
          var u;
          return o((u = r.components[l]) == null ? void 0 : u.styles, { props: e, theme: r, ctx: t });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!o
  };
}
function Y({
  name: e,
  classes: t,
  props: n,
  stylesCtx: r,
  className: o,
  style: s,
  rootSelector: i = "root",
  unstyled: a,
  classNames: c,
  styles: l,
  vars: u,
  varsResolver: d
}) {
  const f = We(), p = Ty(), m = Ly(), g = jy(), h = (Array.isArray(e) ? e : [e]).filter((w) => w), { withStylesTransform: b, getTransformedStyles: x } = bb({
    props: n,
    stylesCtx: r,
    themeName: h
  });
  return (w, v) => ({
    className: pb({
      theme: f,
      options: v,
      themeName: h,
      selector: w,
      classNamesPrefix: p,
      classNames: c,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: i,
      props: n,
      stylesCtx: r,
      withStaticClasses: m,
      headless: g,
      transformedStyles: x([v == null ? void 0 : v.styles, l])
    }),
    style: yb({
      theme: f,
      themeName: h,
      selector: w,
      options: v,
      props: n,
      stylesCtx: r,
      rootSelector: i,
      styles: l,
      style: s,
      vars: u,
      varsResolver: d,
      headless: g,
      withStylesTransform: b
    })
  });
}
function fa(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function k(e, t, n) {
  var i;
  const r = We(), o = (i = r.components[e]) == null ? void 0 : i.defaultProps, s = typeof o == "function" ? o(r) : o;
  return { ...t, ...s, ...Tr(n) };
}
function Xs(e) {
  return Oe(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${ry(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function vb({ selector: e, styles: t, media: n, container: r }) {
  const o = t ? Xs(t) : "", s = Array.isArray(n) ? n.map((a) => `@media${a.query}{${e}{${Xs(a.styles)}}}`) : [], i = Array.isArray(r) ? r.map(
    (a) => `@container ${a.query}{${e}{${Xs(a.styles)}}}`
  ) : [];
  return `${o ? `${e}{${o}}` : ""}${s.join("")}${i.join("")}`.trim();
}
function pa(e) {
  const t = ca();
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: vb(e) }
    }
  );
}
function _r(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: s,
    ml: i,
    mr: a,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: f,
    pt: p,
    pb: m,
    pl: g,
    pr: h,
    pe: b,
    ps: x,
    bd: w,
    bg: v,
    c: S,
    opacity: C,
    ff: D,
    fz: P,
    fw: $,
    lts: T,
    ta: j,
    lh: F,
    fs: W,
    tt: O,
    td: L,
    w: E,
    miw: A,
    maw: N,
    h: B,
    mih: M,
    mah: K,
    bgsz: Z,
    bgp: ie,
    bgr: ge,
    bga: oe,
    pos: ce,
    top: pe,
    left: Te,
    bottom: ae,
    right: Se,
    inset: Ct,
    display: me,
    flex: he,
    hiddenFrom: fe,
    visibleFrom: ft,
    lightHidden: Pt,
    darkHidden: ye,
    sx: At,
    ...Ee
  } = e;
  return { styleProps: Tr({
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: s,
    ml: i,
    mr: a,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: f,
    pt: p,
    pb: m,
    pl: g,
    pr: h,
    pe: b,
    ps: x,
    bd: w,
    bg: v,
    c: S,
    opacity: C,
    ff: D,
    fz: P,
    fw: $,
    lts: T,
    ta: j,
    lh: F,
    fs: W,
    tt: O,
    td: L,
    w: E,
    miw: A,
    maw: N,
    h: B,
    mih: M,
    mah: K,
    bgsz: Z,
    bgp: ie,
    bgr: ge,
    bga: oe,
    pos: ce,
    top: pe,
    left: Te,
    bottom: ae,
    right: Se,
    inset: Ct,
    display: me,
    flex: he,
    hiddenFrom: fe,
    visibleFrom: ft,
    lightHidden: Pt,
    darkHidden: ye,
    sx: At
  }), rest: Ee };
}
const xb = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
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
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};
function ma(e, t) {
  const n = xn({ color: e, theme: t });
  return n.color === "dimmed" ? "var(--mantine-color-dimmed)" : n.color === "bright" ? "var(--mantine-color-bright)" : n.variable ? `var(${n.variable})` : n.color;
}
function wb(e, t) {
  const n = xn({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : ma(e, t);
}
function Sb(e, t) {
  if (typeof e == "number")
    return R(e);
  if (typeof e == "string") {
    const [n, r, ...o] = e.split(" ").filter((i) => i.trim() !== "");
    let s = `${R(n)}`;
    return r && (s += ` ${r}`), o.length > 0 && (s += ` ${ma(o.join(" "), t)}`), s.trim();
  }
  return e;
}
const Ml = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Cb(e) {
  return typeof e == "string" && e in Ml ? Ml[e] : e;
}
const Pb = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Db(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "string" && Pb.includes(e) ? `var(--mantine-${e}-font-size)` : typeof e == "number" || typeof e == "string" ? R(e) : e;
}
function Eb(e) {
  return e;
}
const Ib = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Rb(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : typeof e == "string" && Ib.includes(e) ? `var(--mantine-${e}-line-height)` : e;
}
function $b(e) {
  return typeof e == "number" ? R(e) : e;
}
function Ob(e, t) {
  if (typeof e == "number")
    return R(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing))
      return R(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const Js = {
  color: ma,
  textColor: wb,
  fontSize: Db,
  spacing: Ob,
  identity: Eb,
  size: $b,
  lineHeight: Rb,
  fontFamily: Cb,
  border: Sb
};
function kl(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function Ab({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, s) => Number(kl(o)) - Number(kl(s))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function Nb(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function Tb(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Lb(e) {
  return typeof e == "object" && e !== null ? Oe(e).filter((t) => t !== "base") : [];
}
function jb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function _b({
  styleProps: e,
  data: t,
  theme: n
}) {
  return Ab(
    Oe(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return r;
        const s = t[o], i = Array.isArray(s.property) ? s.property : [s.property], a = Tb(e[o]);
        if (!Nb(e[o]))
          return i.forEach((l) => {
            r.inlineStyles[l] = Js[s.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const c = Lb(e[o]);
        return i.forEach((l) => {
          a && (r.styles[l] = Js[s.type](a, n)), c.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [l]: Js[s.type](
                jb(e[o], u),
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
function ha() {
  return `__m__-${Dd().replace(/:/g, "")}`;
}
function ga(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ga(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function nf(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function Mb(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[nf(n)] = e[n]), t;
  }, {});
}
function rf(e) {
  return e ? typeof e == "string" ? { [nf(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...rf(n) }),
    {}
  ) : Mb(e) : null;
}
function Ti(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Ti(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function kb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = Ti(t, e), s = Ti(n, e);
  return { ...o, ...s, ...r };
}
const of = te(
  ({
    component: e,
    style: t,
    __vars: n,
    className: r,
    variant: o,
    mod: s,
    size: i,
    hiddenFrom: a,
    visibleFrom: c,
    lightHidden: l,
    darkHidden: u,
    renderRoot: d,
    __size: f,
    ...p
  }, m) => {
    var P;
    const g = We(), h = e || "div", { styleProps: b, rest: x } = _r(p), w = _y(), v = (P = w == null ? void 0 : w()) == null ? void 0 : P(b.sx), S = ha(), C = _b({
      styleProps: b,
      theme: g,
      data: xb
    }), D = {
      ref: m,
      style: kb({
        theme: g,
        style: t,
        vars: n,
        styleProps: C.inlineStyles
      }),
      className: at(r, v, {
        [S]: C.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": Fd(i) ? void 0 : i || void 0,
      size: f,
      ...rf(s),
      ...x
    };
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      C.hasResponsiveStyles && /* @__PURE__ */ y.jsx(
        pa,
        {
          selector: `.${S}`,
          styles: C.styles,
          media: C.media
        }
      ),
      typeof d == "function" ? d(D) : /* @__PURE__ */ y.jsx(h, { ...D })
    ] });
  }
);
of.displayName = "@mantine/core/Box";
const V = of;
function sf(e) {
  return e;
}
function U(e) {
  const t = te(e);
  return t.extend = sf, t.withProps = (n) => {
    const r = te((o, s) => /* @__PURE__ */ y.jsx(t, { ...n, ...o, ref: s }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
  }, t;
}
function Vt(e) {
  const t = te(e);
  return t.withProps = (n) => {
    const r = te((o, s) => /* @__PURE__ */ y.jsx(t, { ...n, ...o, ref: s }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
  }, t.extend = sf, t;
}
const Fb = tn({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Mr() {
  return wt(Fb);
}
function Bb(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Qs(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const rr = typeof window < "u" && window.requestAnimationFrame;
function Vb({
  transitionDuration: e,
  transitionTimingFunction: t = "ease",
  onTransitionEnd: n = () => {
  },
  opened: r
}) {
  const o = z(null), s = 0, i = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [a, c] = q(r ? {} : i), l = (m) => {
    sa(() => c(m));
  }, u = (m) => {
    l((g) => ({ ...g, ...m }));
  };
  function d(m) {
    const g = e || Bb(m);
    return {
      transition: `height ${g}ms ${t}, opacity ${g}ms ${t}`
    };
  }
  Xt(() => {
    typeof rr == "function" && rr(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), rr(() => {
        const m = Qs(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Qs(o);
      u({ ...d(m), willChange: "height", height: m }), rr(() => u({ height: s, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Qs(o);
        g === a.height ? l({}) : u({ height: g }), n();
      } else
        a.height === s && (l(i), n());
  };
  function p({ style: m = {}, refKey: g = "ref", ...h } = {}) {
    const b = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: qd(o, b),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const zb = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, af = U((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: s,
    style: i,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = k("Collapse", zb, e), u = We(), d = Kd(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = Vb({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: s,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ y.jsx(V, { ...l, children: n }) : null : /* @__PURE__ */ y.jsx(
    V,
    {
      ...m({
        style: {
          opacity: r || !c ? 1 : 0,
          transition: c ? `opacity ${p}ms ${s}` : "none",
          ...ga(i, u)
        },
        ref: t,
        ...l
      }),
      children: n
    }
  );
});
af.displayName = "@mantine/core/Collapse";
const [Wb, ct] = Bt(
  "ScrollArea.Root component was not found in tree"
);
function Nn(e, t) {
  const n = un(t);
  jr(() => {
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
const Gb = te((e, t) => {
  const { style: n, ...r } = e, o = ct(), [s, i] = q(0), [a, c] = q(0), l = !!(s && a);
  return Nn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), Nn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), i(u);
  }), l ? /* @__PURE__ */ y.jsx("div", { ...r, ref: t, style: { ...n, width: s, height: a } }) : null;
}), Hb = te((e, t) => {
  const n = ct(), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ y.jsx(Gb, { ...e, ref: t }) : null;
}), Ub = {
  scrollHideDelay: 1e3,
  type: "hover"
}, cf = te((e, t) => {
  const n = k("ScrollAreaRoot", Ub, e), { type: r, scrollHideDelay: o, scrollbars: s, ...i } = n, [a, c] = q(null), [l, u] = q(null), [d, f] = q(null), [p, m] = q(null), [g, h] = q(null), [b, x] = q(0), [w, v] = q(0), [S, C] = q(!1), [D, P] = q(!1), $ = _e(t, (T) => c(T));
  return /* @__PURE__ */ y.jsx(
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
        scrollbarYEnabled: D,
        onScrollbarYEnabledChange: P,
        onCornerWidthChange: x,
        onCornerHeightChange: v
      },
      children: /* @__PURE__ */ y.jsx(
        V,
        {
          ...i,
          ref: $,
          __vars: {
            "--sa-corner-width": s !== "xy" ? "0px" : `${b}px`,
            "--sa-corner-height": s !== "xy" ? "0px" : `${w}px`
          }
        }
      )
    }
  );
});
cf.displayName = "@mantine/core/ScrollAreaRoot";
function lf(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Uo(e) {
  const t = lf(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function uf(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function qb(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Fl(e, t, n = "ltr") {
  const r = Uo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, i = t.content - t.viewport, a = s - r, c = n === "ltr" ? [0, i] : [i * -1, 0], l = qb(e, c);
  return uf([0, i], [0, a])(l);
}
function Kb(e, t, n, r = "ltr") {
  const o = Uo(n), s = o / 2, i = t || s, a = o - i, c = n.scrollbar.paddingStart + i, l = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return uf([c, l], d)(e);
}
function df(e, t) {
  return e > 0 && e < t;
}
function vo(e) {
  return e ? parseInt(e, 10) : 0;
}
function pn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return (r) => {
    e == null || e(r), (n === !1 || !r.defaultPrevented) && (t == null || t(r));
  };
}
const [Yb, ff] = Bt(
  "ScrollAreaScrollbar was not found in tree"
), pf = te((e, t) => {
  const {
    sizes: n,
    hasThumb: r,
    onThumbChange: o,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: a,
    onDragScroll: c,
    onWheelScroll: l,
    onResize: u,
    ...d
  } = e, f = ct(), [p, m] = q(null), g = _e(t, (P) => m(P)), h = z(null), b = z(""), { viewport: x } = f, w = n.content - n.viewport, v = un(l), S = un(a), C = Wo(u, 10), D = (P) => {
    if (h.current) {
      const $ = P.clientX - h.current.left, T = P.clientY - h.current.top;
      c({ x: $, y: T });
    }
  };
  return H(() => {
    const P = ($) => {
      const T = $.target;
      (p == null ? void 0 : p.contains(T)) && v($, w);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [x, p, w, v]), H(S, [n, S]), Nn(p, C), Nn(f.content, C), /* @__PURE__ */ y.jsx(
    Yb,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: un(o),
        onThumbPointerUp: un(s),
        onThumbPositionChange: S,
        onThumbPointerDown: un(i)
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...d,
          ref: g,
          style: { position: "absolute", ...d.style },
          onPointerDown: pn(e.onPointerDown, (P) => {
            P.preventDefault();
            const $ = 0;
            P.button === $ && (P.target.setPointerCapture(P.pointerId), h.current = p.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", D(P));
          }),
          onPointerMove: pn(e.onPointerMove, D),
          onPointerUp: pn(e.onPointerUp, (P) => {
            P.preventDefault();
            const $ = P.target;
            $.hasPointerCapture(P.pointerId) && $.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = b.current, document.body.style.pointerEvents = "auto", h.current = null;
          })
        }
      )
    }
  );
}), Xb = te(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e, i = ct(), [a, c] = q(), l = z(null), u = _e(t, l, i.onScrollbarXChange);
    return H(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ y.jsx(
      pf,
      {
        "data-orientation": "horizontal",
        ...s,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${Uo(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), df(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && i.viewport && a && r({
            content: i.viewport.scrollWidth,
            viewport: i.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: vo(a.paddingLeft),
              paddingEnd: vo(a.paddingRight)
            }
          });
        }
      }
    );
  }
), Jb = te(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...s } = e, i = ct(), [a, c] = q(), l = z(null), u = _e(t, l, i.onScrollbarYChange);
    return H(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ y.jsx(
      pf,
      {
        ...s,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${Uo(n)}px`,
          ...o
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), df(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && i.viewport && a && r({
            content: i.viewport.scrollHeight,
            viewport: i.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: vo(a.paddingTop),
              paddingEnd: vo(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), ya = te((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = Mr(), s = ct(), i = z(null), a = z(0), [c, l] = q({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = lf(c.viewport, c.content), d = {
    ...r,
    sizes: c,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => {
      i.current = p;
    },
    onThumbPointerUp: () => {
      a.current = 0;
    },
    onThumbPointerDown: (p) => {
      a.current = p;
    }
  }, f = (p, m) => Kb(p, a.current, c, m);
  return n === "horizontal" ? /* @__PURE__ */ y.jsx(
    Xb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && i.current) {
          const p = s.viewport.scrollLeft, m = Fl(p, c, o);
          i.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        s.viewport && (s.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        s.viewport && (s.viewport.scrollLeft = f(p, o));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ y.jsx(
    Jb,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (s.viewport && i.current) {
          const p = s.viewport.scrollTop, m = Fl(p, c);
          c.scrollbar.size === 0 ? i.current.style.opacity = "0" : i.current.style.opacity = "1", i.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        s.viewport && (s.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        s.viewport && (s.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), mf = te(
  (e, t) => {
    const n = ct(), { forceMount: r, ...o } = e, [s, i] = q(!1), a = e.orientation === "horizontal", c = Wo(() => {
      if (n.viewport) {
        const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        i(a ? l : u);
      }
    }, 10);
    return Nn(n.viewport, c), Nn(n.content, c), r || s ? /* @__PURE__ */ y.jsx(
      ya,
      {
        "data-state": s ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), Qb = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ct(), [s, i] = q(!1);
    return H(() => {
      const { scrollArea: a } = o;
      let c = 0;
      if (a) {
        const l = () => {
          window.clearTimeout(c), i(!0);
        }, u = () => {
          c = window.setTimeout(() => i(!1), o.scrollHideDelay);
        };
        return a.addEventListener("pointerenter", l), a.addEventListener("pointerleave", u), () => {
          window.clearTimeout(c), a.removeEventListener("pointerenter", l), a.removeEventListener("pointerleave", u);
        };
      }
    }, [o.scrollArea, o.scrollHideDelay]), n || s ? /* @__PURE__ */ y.jsx(
      mf,
      {
        "data-state": s ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Zb = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ct(), s = e.orientation === "horizontal", [i, a] = q("hidden"), c = Wo(() => a("idle"), 100);
    return H(() => {
      if (i === "idle") {
        const l = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [i, o.scrollHideDelay]), H(() => {
      const { viewport: l } = o, u = s ? "scrollLeft" : "scrollTop";
      if (l) {
        let d = l[u];
        const f = () => {
          const p = l[u];
          d !== p && (a("scrolling"), c()), d = p;
        };
        return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
      }
    }, [o.viewport, s, c]), n || i !== "hidden" ? /* @__PURE__ */ y.jsx(
      ya,
      {
        "data-state": i === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: pn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: pn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Bl = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ct(), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o, a = e.orientation === "horizontal";
    return H(() => (a ? s(!0) : i(!0), () => {
      a ? s(!1) : i(!1);
    }), [a, s, i]), o.type === "hover" ? /* @__PURE__ */ y.jsx(Qb, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ y.jsx(Zb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ y.jsx(mf, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ y.jsx(ya, { ...r, ref: t }) : null;
  }
);
function ev(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, a = n.top !== s.top;
    (i || a) && t(), n = s, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const tv = te((e, t) => {
  const { style: n, ...r } = e, o = ct(), s = ff(), { onThumbPositionChange: i } = s, a = _e(t, (u) => s.onThumbChange(u)), c = z(), l = Wo(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return H(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const f = ev(u, i);
          c.current = f, i();
        }
      };
      return i(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, l, i]), /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-state": s.hasThumb ? "visible" : "hidden",
      ...r,
      ref: a,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...n
      },
      onPointerDownCapture: pn(e.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), p = u.clientX - f.left, m = u.clientY - f.top;
        s.onThumbPointerDown({ x: p, y: m });
      }),
      onPointerUp: pn(e.onPointerUp, s.onThumbPointerUp)
    }
  );
}), Vl = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ff();
    return n || o.hasThumb ? /* @__PURE__ */ y.jsx(tv, { ref: t, ...r }) : null;
  }
), hf = te(
  ({ children: e, style: t, ...n }, r) => {
    const o = ct(), s = _e(r, o.onViewportChange);
    return /* @__PURE__ */ y.jsx(
      V,
      {
        ...n,
        ref: s,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        },
        children: /* @__PURE__ */ y.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange, children: e })
      }
    );
  }
);
hf.displayName = "@mantine/core/ScrollAreaViewport";
var ba = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const gf = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, nv = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": R(t)
  }
}), kr = U((e, t) => {
  const n = k("ScrollArea", gf, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    scrollbars: b,
    ...x
  } = n, [w, v] = q(!1), S = Y({
    name: "ScrollArea",
    props: n,
    classes: ba,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: nv
  });
  return /* @__PURE__ */ y.jsxs(
    cf,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: b,
      ...S("root"),
      ...x,
      children: [
        /* @__PURE__ */ y.jsx(
          hf,
          {
            ...f,
            ...S("viewport", { style: f == null ? void 0 : f.style }),
            ref: p,
            "data-offset-scrollbars": h === !0 ? "xy" : h || void 0,
            "data-scrollbars": b || void 0,
            onScroll: (C) => {
              var D;
              (D = f == null ? void 0 : f.onScroll) == null || D.call(f, C), m == null || m({ x: C.currentTarget.scrollLeft, y: C.currentTarget.scrollTop });
            },
            children: g
          }
        ),
        (b === "xy" || b === "x") && /* @__PURE__ */ y.jsx(
          Bl,
          {
            ...S("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: /* @__PURE__ */ y.jsx(Vl, { ...S("thumb") })
          }
        ),
        (b === "xy" || b === "y") && /* @__PURE__ */ y.jsx(
          Bl,
          {
            ...S("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: /* @__PURE__ */ y.jsx(Vl, { ...S("thumb") })
          }
        ),
        /* @__PURE__ */ y.jsx(
          Hb,
          {
            ...S("corner"),
            "data-hovered": w || void 0,
            "data-hidden": u === "never" || void 0
          }
        )
      ]
    }
  );
});
kr.displayName = "@mantine/core/ScrollArea";
const va = U((e, t) => {
  const {
    children: n,
    classNames: r,
    styles: o,
    scrollbarSize: s,
    scrollHideDelay: i,
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
    vars: b,
    ...x
  } = k("ScrollAreaAutosize", gf, e);
  return /* @__PURE__ */ y.jsx(V, { ...x, ref: t, style: [{ display: "flex", overflow: "auto" }, h], children: /* @__PURE__ */ y.jsx(V, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ y.jsx(
    kr,
    {
      classNames: r,
      styles: o,
      scrollHideDelay: i,
      scrollbarSize: s,
      type: a,
      dir: c,
      offsetScrollbars: l,
      viewportRef: u,
      onScrollPositionChange: d,
      unstyled: f,
      variant: p,
      viewportProps: m,
      vars: b,
      scrollbars: g,
      children: n
    }
  ) }) });
});
kr.classes = ba;
va.displayName = "@mantine/core/ScrollAreaAutosize";
va.classes = ba;
kr.Autosize = va;
var yf = { root: "m_87cf2631" };
const rv = {
  __staticSelector: "UnstyledButton"
}, rn = Vt(
  (e, t) => {
    const n = k("UnstyledButton", rv, e), {
      className: r,
      component: o = "button",
      __staticSelector: s,
      unstyled: i,
      classNames: a,
      styles: c,
      style: l,
      ...u
    } = n, d = Y({
      name: s,
      props: n,
      classes: yf,
      className: r,
      style: l,
      classNames: a,
      styles: c,
      unstyled: i
    });
    return /* @__PURE__ */ y.jsx(
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
rn.classes = yf;
rn.displayName = "@mantine/core/UnstyledButton";
var bf = { root: "m_515a97f8" };
const ov = {}, xa = U((e, t) => {
  const n = k("VisuallyHidden", ov, e), { classNames: r, className: o, style: s, styles: i, unstyled: a, vars: c, ...l } = n, u = Y({
    name: "VisuallyHidden",
    classes: bf,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a
  });
  return /* @__PURE__ */ y.jsx(V, { component: "span", ref: t, ...u("root"), ...l });
});
xa.classes = bf;
xa.displayName = "@mantine/core/VisuallyHidden";
function zn(e) {
  return vf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Be(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(e) {
  var t;
  return (t = (vf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vf(e) {
  return e instanceof Node || e instanceof Be(e).Node;
}
function le(e) {
  return e instanceof Element || e instanceof Be(e).Element;
}
function Je(e) {
  return e instanceof HTMLElement || e instanceof Be(e).HTMLElement;
}
function Li(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Be(e).ShadowRoot;
}
function Fr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = it(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function sv(e) {
  return ["table", "td", "th"].includes(zn(e));
}
function qo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function wa(e) {
  const t = Sa(), n = it(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function iv(e) {
  let t = _t(e);
  for (; Je(t) && !Jt(t); ) {
    if (qo(t))
      return null;
    if (wa(t))
      return t;
    t = _t(t);
  }
  return null;
}
function Sa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Jt(e) {
  return ["html", "body", "#document"].includes(zn(e));
}
function it(e) {
  return Be(e).getComputedStyle(e);
}
function Ko(e) {
  return le(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _t(e) {
  if (zn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Li(e) && e.host || // Fallback.
    zt(e)
  );
  return Li(t) ? t.host : t;
}
function xf(e) {
  const t = _t(e);
  return Jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Je(t) && Fr(t) ? t : xf(t);
}
function Lt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = xf(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Be(o);
  return s ? t.concat(i, i.visualViewport || [], Fr(o) ? o : [], i.frameElement && n ? Lt(i.frameElement) : []) : t.concat(o, Lt(o, [], n));
}
function zl(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function gr(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Li(n)) {
    let r = t;
    for (; r; ) {
      if (e === r)
        return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function wf() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function Sf() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
function av(e) {
  return uv() ? !1 : !Wl() && e.width === 0 && e.height === 0 || Wl() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function cv() {
  return /apple/i.test(navigator.vendor);
}
function Wl() {
  const e = /android/i;
  return e.test(wf()) || e.test(Sf());
}
function lv() {
  return wf().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function uv() {
  return Sf().includes("jsdom/");
}
function ji(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function dv(e) {
  return "nativeEvent" in e;
}
function fv(e) {
  return e.matches("html,body");
}
function dn(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Zs(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function On(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const pv = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function mv(e) {
  return Je(e) && e.matches(pv);
}
const Ue = Math.min, Re = Math.max, xo = Math.round, Qr = Math.floor, Qt = (e) => ({
  x: e,
  y: e
}), hv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, gv = {
  start: "end",
  end: "start"
};
function _i(e, t, n) {
  return Re(e, Ue(t, n));
}
function Mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xt(e) {
  return e.split("-")[0];
}
function Wn(e) {
  return e.split("-")[1];
}
function Ca(e) {
  return e === "x" ? "y" : "x";
}
function Pa(e) {
  return e === "y" ? "height" : "width";
}
function kt(e) {
  return ["top", "bottom"].includes(xt(e)) ? "y" : "x";
}
function Da(e) {
  return Ca(kt(e));
}
function yv(e, t, n) {
  n === void 0 && (n = !1);
  const r = Wn(e), o = Da(e), s = Pa(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = wo(i)), [i, wo(i)];
}
function bv(e) {
  const t = wo(e);
  return [Mi(e), t, Mi(t)];
}
function Mi(e) {
  return e.replace(/start|end/g, (t) => gv[t]);
}
function vv(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function xv(e, t, n, r) {
  const o = Wn(e);
  let s = vv(xt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Mi)))), s;
}
function wo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hv[t]);
}
function wv(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ea(e) {
  return typeof e != "number" ? wv(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Tn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Gl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = kt(t), i = Da(t), a = Pa(i), c = xt(t), l = s === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Wn(t)) {
    case "start":
      p[i] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      p[i] += f * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const Sv = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Gl(l, r, c), f = r, p = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: h,
      fn: b
    } = a[g], {
      x,
      y: w,
      data: v,
      reset: S
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, d = w ?? d, p = {
      ...p,
      [h]: {
        ...p[h],
        ...v
      }
    }, S && m <= 50 && (m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (l = S.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: d
    } = Gl(l, f, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function Ia(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Mt(t, e), m = Ea(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], b = Tn(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(h))) == null || n ? h : h.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), v = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Tn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: w,
    strategy: c
  }) : x);
  return {
    top: (b.top - S.top + m.top) / v.y,
    bottom: (S.bottom - b.bottom + m.bottom) / v.y,
    left: (b.left - S.left + m.left) / v.x,
    right: (S.right - b.right + m.right) / v.x
  };
}
const Cv = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Mt(e, t) || {};
    if (l == null)
      return {};
    const d = Ea(u), f = {
      x: n,
      y: r
    }, p = Da(o), m = Pa(p), g = await i.getDimensions(l), h = p === "y", b = h ? "top" : "left", x = h ? "bottom" : "right", w = h ? "clientHeight" : "clientWidth", v = s.reference[m] + s.reference[p] - f[p] - s.floating[m], S = f[p] - s.reference[p], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let D = C ? C[w] : 0;
    (!D || !await (i.isElement == null ? void 0 : i.isElement(C))) && (D = a.floating[w] || s.floating[m]);
    const P = v / 2 - S / 2, $ = D / 2 - g[m] / 2 - 1, T = Ue(d[b], $), j = Ue(d[x], $), F = T, W = D - g[m] - j, O = D / 2 - g[m] / 2 + P, L = _i(F, O, W), E = !c.arrow && Wn(o) != null && O !== L && s.reference[m] / 2 - (O < F ? T : j) - g[m] / 2 < 0, A = E ? O < F ? O - F : O - W : 0;
    return {
      [p]: f[p] + A,
      data: {
        [p]: L,
        centerOffset: O - L - A,
        ...E && {
          alignmentOffset: A
        }
      },
      reset: E
    };
  }
}), Pv = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
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
      } = Mt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const b = xt(o), x = kt(a), w = xt(a) === a, v = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), S = f || (w || !g ? [wo(a)] : bv(a)), C = m !== "none";
      !f && C && S.push(...xv(a, g, m, v));
      const D = [a, ...S], P = await Ia(t, h), $ = [];
      let T = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && $.push(P[b]), d) {
        const O = yv(o, i, v);
        $.push(P[O[0]], P[O[1]]);
      }
      if (T = [...T, {
        placement: o,
        overflows: $
      }], !$.every((O) => O <= 0)) {
        var j, F;
        const O = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1, L = D[O];
        if (L)
          return {
            data: {
              index: O,
              overflows: T
            },
            reset: {
              placement: L
            }
          };
        let E = (F = T.filter((A) => A.overflows[0] <= 0).sort((A, N) => A.overflows[1] - N.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!E)
          switch (p) {
            case "bestFit": {
              var W;
              const A = (W = T.filter((N) => {
                if (C) {
                  const B = kt(N.placement);
                  return B === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  B === "y";
                }
                return !0;
              }).map((N) => [N.placement, N.overflows.filter((B) => B > 0).reduce((B, M) => B + M, 0)]).sort((N, B) => N[1] - B[1])[0]) == null ? void 0 : W[0];
              A && (E = A);
              break;
            }
            case "initialPlacement":
              E = a;
              break;
          }
        if (o !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
function Cf(e) {
  const t = Ue(...e.map((s) => s.left)), n = Ue(...e.map((s) => s.top)), r = Re(...e.map((s) => s.right)), o = Re(...e.map((s) => s.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function Dv(e) {
  const t = e.slice().sort((o, s) => o.y - s.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const s = t[o];
    !r || s.y - r.y > r.height / 2 ? n.push([s]) : n[n.length - 1].push(s), r = s;
  }
  return n.map((o) => Tn(Cf(o)));
}
const Ev = function(e) {
  return e === void 0 && (e = {}), {
    name: "inline",
    options: e,
    async fn(t) {
      const {
        placement: n,
        elements: r,
        rects: o,
        platform: s,
        strategy: i
      } = t, {
        padding: a = 2,
        x: c,
        y: l
      } = Mt(e, t), u = Array.from(await (s.getClientRects == null ? void 0 : s.getClientRects(r.reference)) || []), d = Dv(u), f = Tn(Cf(u)), p = Ea(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((h) => c > h.left - p.left && c < h.right + p.right && l > h.top - p.top && l < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (kt(n) === "y") {
            const T = d[0], j = d[d.length - 1], F = xt(n) === "top", W = T.top, O = j.bottom, L = F ? T.left : j.left, E = F ? T.right : j.right, A = E - L, N = O - W;
            return {
              top: W,
              bottom: O,
              left: L,
              right: E,
              width: A,
              height: N,
              x: L,
              y: W
            };
          }
          const h = xt(n) === "left", b = Re(...d.map((T) => T.right)), x = Ue(...d.map((T) => T.left)), w = d.filter((T) => h ? T.left === x : T.right === b), v = w[0].top, S = w[w.length - 1].bottom, C = x, D = b, P = D - C, $ = S - v;
          return {
            top: v,
            bottom: S,
            left: C,
            right: D,
            width: P,
            height: $,
            x: C,
            y: v
          };
        }
        return f;
      }
      const g = await s.getElementRects({
        reference: {
          getBoundingClientRect: m
        },
        floating: r.floating,
        strategy: i
      });
      return o.reference.x !== g.reference.x || o.reference.y !== g.reference.y || o.reference.width !== g.reference.width || o.reference.height !== g.reference.height ? {
        reset: {
          rects: g
        }
      } : {};
    }
  };
};
async function Iv(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = xt(n), a = Wn(n), c = kt(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, u = s && c ? -1 : 1, d = Mt(t, e);
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
const Rv = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, c = await Iv(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, $v = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (h) => {
            let {
              x: b,
              y: x
            } = h;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = Mt(e, t), l = {
        x: n,
        y: r
      }, u = await Ia(t, c), d = kt(xt(o)), f = Ca(d);
      let p = l[f], m = l[d];
      if (s) {
        const h = f === "y" ? "top" : "left", b = f === "y" ? "bottom" : "right", x = p + u[h], w = p - u[b];
        p = _i(x, p, w);
      }
      if (i) {
        const h = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = m + u[h], w = m - u[b];
        m = _i(x, m, w);
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
}, Ov = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Mt(e, t), u = {
        x: n,
        y: r
      }, d = kt(o), f = Ca(d);
      let p = u[f], m = u[d];
      const g = Mt(a, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const w = f === "y" ? "height" : "width", v = s.reference[f] - s.floating[w] + h.mainAxis, S = s.reference[f] + s.reference[w] - h.mainAxis;
        p < v ? p = v : p > S && (p = S);
      }
      if (l) {
        var b, x;
        const w = f === "y" ? "width" : "height", v = ["top", "left"].includes(xt(o)), S = s.reference[d] - s.floating[w] + (v && ((b = i.offset) == null ? void 0 : b[d]) || 0) + (v ? 0 : h.crossAxis), C = s.reference[d] + s.reference[w] + (v ? 0 : ((x = i.offset) == null ? void 0 : x[d]) || 0) - (v ? h.crossAxis : 0);
        m < S ? m = S : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, Av = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = t, {
        apply: i = () => {
        },
        ...a
      } = Mt(e, t), c = await Ia(t, a), l = xt(n), u = Wn(n), d = kt(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const h = p - c.top - c.bottom, b = f - c.left - c.right, x = Ue(p - c[m], h), w = Ue(f - c[g], b), v = !t.middlewareData.shift;
      let S = x, C = w;
      if (d ? C = u || v ? Ue(w, b) : b : S = u || v ? Ue(x, h) : h, v && !u) {
        const P = Re(c.left, 0), $ = Re(c.right, 0), T = Re(c.top, 0), j = Re(c.bottom, 0);
        d ? C = f - 2 * (P !== 0 || $ !== 0 ? P + $ : Re(c.left, c.right)) : S = p - 2 * (T !== 0 || j !== 0 ? T + j : Re(c.top, c.bottom));
      }
      await i({
        ...t,
        availableWidth: C,
        availableHeight: S
      });
      const D = await o.getDimensions(s.floating);
      return f !== D.width || p !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pf(e) {
  const t = it(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Je(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = xo(n) !== s || xo(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Ra(e) {
  return le(e) ? e : e.contextElement;
}
function An(e) {
  const t = Ra(e);
  if (!Je(t))
    return Qt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Pf(t);
  let i = (s ? xo(n.width) : n.width) / r, a = (s ? xo(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Nv = /* @__PURE__ */ Qt(0);
function Df(e) {
  const t = Be(e);
  return !Sa() || !t.visualViewport ? Nv : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Tv(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Be(e) ? !1 : t;
}
function hn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Ra(e);
  let i = Qt(1);
  t && (r ? le(r) && (i = An(r)) : i = An(e));
  const a = Tv(s, n, r) ? Df(s) : Qt(0);
  let c = (o.left + a.x) / i.x, l = (o.top + a.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = Be(s), p = r && le(r) ? Be(r) : r;
    let m = f, g = m.frameElement;
    for (; g && r && p !== m; ) {
      const h = An(g), b = g.getBoundingClientRect(), x = it(g), w = b.left + (g.clientLeft + parseFloat(x.paddingLeft)) * h.x, v = b.top + (g.clientTop + parseFloat(x.paddingTop)) * h.y;
      c *= h.x, l *= h.y, u *= h.x, d *= h.y, c += w, l += v, m = Be(g), g = m.frameElement;
    }
  }
  return Tn({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Lv(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = zt(r), a = t ? qo(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Qt(1);
  const u = Qt(0), d = Je(r);
  if ((d || !d && !s) && ((zn(r) !== "body" || Fr(i)) && (c = Ko(r)), Je(r))) {
    const f = hn(r);
    l = An(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y
  };
}
function jv(e) {
  return Array.from(e.getClientRects());
}
function Ef(e) {
  return hn(zt(e)).left + Ko(e).scrollLeft;
}
function _v(e) {
  const t = zt(e), n = Ko(e), r = e.ownerDocument.body, o = Re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ef(e);
  const a = -n.scrollTop;
  return it(r).direction === "rtl" && (i += Re(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function Mv(e, t) {
  const n = Be(e), r = zt(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const l = Sa();
    (!l || l && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
function kv(e, t) {
  const n = hn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Je(e) ? An(e) : Qt(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function Hl(e, t, n) {
  let r;
  if (t === "viewport")
    r = Mv(e, n);
  else if (t === "document")
    r = _v(zt(e));
  else if (le(t))
    r = kv(t, n);
  else {
    const o = Df(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Tn(r);
}
function If(e, t) {
  const n = _t(e);
  return n === t || !le(n) || Jt(n) ? !1 : it(n).position === "fixed" || If(n, t);
}
function Fv(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Lt(e, [], !1).filter((a) => le(a) && zn(a) !== "body"), o = null;
  const s = it(e).position === "fixed";
  let i = s ? _t(e) : e;
  for (; le(i) && !Jt(i); ) {
    const a = it(i), c = wa(i);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Fr(i) && !c && If(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = _t(i);
  }
  return t.set(e, r), r;
}
function Bv(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? qo(t) ? [] : Fv(t, this._c) : [].concat(n), r], a = i[0], c = i.reduce((l, u) => {
    const d = Hl(t, u, o);
    return l.top = Re(d.top, l.top), l.right = Ue(d.right, l.right), l.bottom = Ue(d.bottom, l.bottom), l.left = Re(d.left, l.left), l;
  }, Hl(t, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Vv(e) {
  const {
    width: t,
    height: n
  } = Pf(e);
  return {
    width: t,
    height: n
  };
}
function zv(e, t, n) {
  const r = Je(t), o = zt(t), s = n === "fixed", i = hn(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Qt(0);
  if (r || !r && !s)
    if ((zn(t) !== "body" || Fr(o)) && (a = Ko(t)), r) {
      const d = hn(t, !0, s, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else
      o && (c.x = Ef(o));
  const l = i.left + a.scrollLeft - c.x, u = i.top + a.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: i.width,
    height: i.height
  };
}
function ei(e) {
  return it(e).position === "static";
}
function Ul(e, t) {
  return !Je(e) || it(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Rf(e, t) {
  const n = Be(e);
  if (qo(e))
    return n;
  if (!Je(e)) {
    let o = _t(e);
    for (; o && !Jt(o); ) {
      if (le(o) && !ei(o))
        return o;
      o = _t(o);
    }
    return n;
  }
  let r = Ul(e, t);
  for (; r && sv(r) && ei(r); )
    r = Ul(r, t);
  return r && Jt(r) && ei(r) && !wa(r) ? n : r || iv(e) || n;
}
const Wv = async function(e) {
  const t = this.getOffsetParent || Rf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: zv(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Gv(e) {
  return it(e).direction === "rtl";
}
const Hv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lv,
  getDocumentElement: zt,
  getClippingRect: Bv,
  getOffsetParent: Rf,
  getElementRects: Wv,
  getClientRects: jv,
  getDimensions: Vv,
  getScale: An,
  isElement: le,
  isRTL: Gv
};
function Uv(e, t) {
  let n = null, r;
  const o = zt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const {
      left: l,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (a || t(), !d || !f)
      return;
    const p = Qr(u), m = Qr(o.clientWidth - (l + d)), g = Qr(o.clientHeight - (u + f)), h = Qr(l), x = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: Re(0, Ue(1, c)) || 1
    };
    let w = !0;
    function v(S) {
      const C = S[0].intersectionRatio;
      if (C !== c) {
        if (!w)
          return i();
        C ? i(!1, C) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
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
  return i(!0), s;
}
function qv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Ra(e), u = o || s ? [...l ? Lt(l) : [], ...Lt(t)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", n, {
      passive: !0
    }), s && b.addEventListener("resize", n);
  });
  const d = l && a ? Uv(l, n) : null;
  let f = -1, p = null;
  i && (p = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let m, g = c ? hn(e) : null;
  c && h();
  function h() {
    const b = hn(e);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && n(), g = b, m = requestAnimationFrame(h);
  }
  return n(), () => {
    var b;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, c && cancelAnimationFrame(m);
  };
}
const Kv = Rv, Yv = $v, Xv = Pv, Jv = Av, ql = Cv, Qv = Ev, Zv = Ov, ex = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Hv,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Sv(e, t, {
    ...o,
    platform: s
  });
};
var io = typeof document < "u" ? Fo : H;
function So(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!So(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !So(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $f(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kl(e, t) {
  const n = $f(e);
  return Math.round(t * n) / n;
}
function Yl(e) {
  const t = I.useRef(e);
  return io(() => {
    t.current = e;
  }), t;
}
function tx(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
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
  So(f, r) || p(r);
  const [m, g] = I.useState(null), [h, b] = I.useState(null), x = I.useCallback((A) => {
    A !== C.current && (C.current = A, g(A));
  }, []), w = I.useCallback((A) => {
    A !== D.current && (D.current = A, b(A));
  }, []), v = s || m, S = i || h, C = I.useRef(null), D = I.useRef(null), P = I.useRef(u), $ = c != null, T = Yl(c), j = Yl(o), F = I.useCallback(() => {
    if (!C.current || !D.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: f
    };
    j.current && (A.platform = j.current), ex(C.current, D.current, A).then((N) => {
      const B = {
        ...N,
        isPositioned: !0
      };
      W.current && !So(P.current, B) && (P.current = B, Fh.flushSync(() => {
        d(B);
      }));
    });
  }, [f, t, n, j]);
  io(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, d((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const W = I.useRef(!1);
  io(() => (W.current = !0, () => {
    W.current = !1;
  }), []), io(() => {
    if (v && (C.current = v), S && (D.current = S), v && S) {
      if (T.current)
        return T.current(v, S, F);
      F();
    }
  }, [v, S, F, T, $]);
  const O = I.useMemo(() => ({
    reference: C,
    floating: D,
    setReference: x,
    setFloating: w
  }), [x, w]), L = I.useMemo(() => ({
    reference: v,
    floating: S
  }), [v, S]), E = I.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!L.floating)
      return A;
    const N = Kl(L.floating, u.x), B = Kl(L.floating, u.y);
    return a ? {
      ...A,
      transform: "translate(" + N + "px, " + B + "px)",
      ...$f(L.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: B
    };
  }, [n, a, L.floating, u.x, u.y]);
  return I.useMemo(() => ({
    ...u,
    update: F,
    refs: O,
    elements: L,
    floatingStyles: E
  }), [u, F, O, L, E]);
}
const nx = (e) => {
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
      return r && t(r) ? r.current != null ? ql({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ql({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Of = (e, t) => ({
  ...Kv(e),
  options: [e, t]
}), $a = (e, t) => ({
  ...Yv(e),
  options: [e, t]
}), Xl = (e, t) => ({
  ...Zv(e),
  options: [e, t]
}), ki = (e, t) => ({
  ...Xv(e),
  options: [e, t]
}), rx = (e, t) => ({
  ...Jv(e),
  options: [e, t]
}), Fi = (e, t) => ({
  ...Qv(e),
  options: [e, t]
}), Af = (e, t) => ({
  ...nx(e),
  options: [e, t]
}), Nf = {
  ...I
}, ox = Nf.useInsertionEffect, sx = ox || ((e) => e());
function Gt(e) {
  const t = I.useRef(() => {
  });
  return sx(() => {
    t.current = e;
  }), I.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var It = typeof document < "u" ? Fo : H;
let Jl = !1, ix = 0;
const Ql = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + ix++
);
function ax() {
  const [e, t] = I.useState(() => Jl ? Ql() : void 0);
  return It(() => {
    e == null && t(Ql());
  }, []), I.useEffect(() => {
    Jl = !0;
  }, []), e;
}
const cx = Nf.useId, Tf = cx || ax;
function lx() {
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
const ux = /* @__PURE__ */ I.createContext(null), dx = /* @__PURE__ */ I.createContext(null), Oa = () => {
  var e;
  return ((e = I.useContext(ux)) == null ? void 0 : e.id) || null;
}, Aa = () => I.useContext(dx);
function Na(e) {
  return "data-floating-ui-" + e;
}
function ti(e) {
  const t = z(e);
  return It(() => {
    t.current = e;
  }), t;
}
const Zl = /* @__PURE__ */ Na("safe-polygon");
function ao(e, t, n) {
  return n && !ji(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function fx(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: s,
    elements: i
  } = e, {
    enabled: a = !0,
    delay: c = 0,
    handleClose: l = null,
    mouseOnly: u = !1,
    restMs: d = 0,
    move: f = !0
  } = t, p = Aa(), m = Oa(), g = ti(l), h = ti(c), b = ti(n), x = I.useRef(), w = I.useRef(-1), v = I.useRef(), S = I.useRef(-1), C = I.useRef(!0), D = I.useRef(!1), P = I.useRef(() => {
  }), $ = I.useCallback(() => {
    var L;
    const E = (L = o.current.openEvent) == null ? void 0 : L.type;
    return (E == null ? void 0 : E.includes("mouse")) && E !== "mousedown";
  }, [o]);
  I.useEffect(() => {
    if (!a)
      return;
    function L(E) {
      let {
        open: A
      } = E;
      A || (clearTimeout(w.current), clearTimeout(S.current), C.current = !0);
    }
    return s.on("openchange", L), () => {
      s.off("openchange", L);
    };
  }, [a, s]), I.useEffect(() => {
    if (!a || !g.current || !n)
      return;
    function L(A) {
      $() && r(!1, A, "hover");
    }
    const E = dn(i.floating).documentElement;
    return E.addEventListener("mouseleave", L), () => {
      E.removeEventListener("mouseleave", L);
    };
  }, [i.floating, n, r, a, g, $]);
  const T = I.useCallback(function(L, E, A) {
    E === void 0 && (E = !0), A === void 0 && (A = "hover");
    const N = ao(h.current, "close", x.current);
    N && !v.current ? (clearTimeout(w.current), w.current = window.setTimeout(() => r(!1, L, A), N)) : E && (clearTimeout(w.current), r(!1, L, A));
  }, [h, r]), j = Gt(() => {
    P.current(), v.current = void 0;
  }), F = Gt(() => {
    if (D.current) {
      const L = dn(i.floating).body;
      L.style.pointerEvents = "", L.removeAttribute(Zl), D.current = !1;
    }
  });
  I.useEffect(() => {
    if (!a)
      return;
    function L() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function E(M) {
      if (clearTimeout(w.current), C.current = !1, u && !ji(x.current) || d > 0 && !ao(h.current, "open"))
        return;
      const K = ao(h.current, "open", x.current);
      K ? w.current = window.setTimeout(() => {
        b.current || r(!0, M, "hover");
      }, K) : r(!0, M, "hover");
    }
    function A(M) {
      if (L())
        return;
      P.current();
      const K = dn(i.floating);
      if (clearTimeout(S.current), g.current && o.current.floatingContext) {
        n || clearTimeout(w.current), v.current = g.current({
          ...o.current.floatingContext,
          tree: p,
          x: M.clientX,
          y: M.clientY,
          onClose() {
            F(), j(), T(M, !0, "safe-polygon");
          }
        });
        const ie = v.current;
        K.addEventListener("mousemove", ie), P.current = () => {
          K.removeEventListener("mousemove", ie);
        };
        return;
      }
      (x.current === "touch" ? !gr(i.floating, M.relatedTarget) : !0) && T(M);
    }
    function N(M) {
      L() || o.current.floatingContext && (g.current == null || g.current({
        ...o.current.floatingContext,
        tree: p,
        x: M.clientX,
        y: M.clientY,
        onClose() {
          F(), j(), T(M);
        }
      })(M));
    }
    if (le(i.domReference)) {
      var B;
      const M = i.domReference;
      return n && M.addEventListener("mouseleave", N), (B = i.floating) == null || B.addEventListener("mouseleave", N), f && M.addEventListener("mousemove", E, {
        once: !0
      }), M.addEventListener("mouseenter", E), M.addEventListener("mouseleave", A), () => {
        var K;
        n && M.removeEventListener("mouseleave", N), (K = i.floating) == null || K.removeEventListener("mouseleave", N), f && M.removeEventListener("mousemove", E), M.removeEventListener("mouseenter", E), M.removeEventListener("mouseleave", A);
      };
    }
  }, [i, a, e, u, d, f, T, j, F, r, n, b, p, h, g, o]), It(() => {
    var L;
    if (a && n && (L = g.current) != null && L.__options.blockPointerEvents && $()) {
      const A = dn(i.floating).body;
      A.setAttribute(Zl, ""), A.style.pointerEvents = "none", D.current = !0;
      const N = i.floating;
      if (le(i.domReference) && N) {
        var E;
        const B = i.domReference, M = p == null || (E = p.nodesRef.current.find((K) => K.id === m)) == null || (E = E.context) == null ? void 0 : E.elements.floating;
        return M && (M.style.pointerEvents = ""), B.style.pointerEvents = "auto", N.style.pointerEvents = "auto", () => {
          B.style.pointerEvents = "", N.style.pointerEvents = "";
        };
      }
    }
  }, [a, n, m, i, p, g, $]), It(() => {
    n || (x.current = void 0, j(), F());
  }, [n, j, F]), I.useEffect(() => () => {
    j(), clearTimeout(w.current), clearTimeout(S.current), F();
  }, [a, i.domReference, j, F]);
  const W = I.useMemo(() => {
    function L(E) {
      x.current = E.pointerType;
    }
    return {
      onPointerDown: L,
      onPointerEnter: L,
      onMouseMove(E) {
        const {
          nativeEvent: A
        } = E;
        function N() {
          !C.current && !b.current && r(!0, A, "hover");
        }
        u && !ji(x.current) || n || d === 0 || (clearTimeout(S.current), x.current === "touch" ? N() : S.current = window.setTimeout(N, d));
      }
    };
  }, [u, r, n, b, d]), O = I.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(w.current);
    },
    onMouseLeave(L) {
      T(L.nativeEvent, !1);
    }
  }), [T]);
  return I.useMemo(() => a ? {
    reference: W,
    floating: O
  } : {}, [a, W, O]);
}
const Bi = () => {
}, Lf = /* @__PURE__ */ I.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: Bi,
  setState: Bi,
  isInstantPhase: !1
}), jf = () => I.useContext(Lf);
function px(e) {
  const {
    children: t,
    delay: n,
    timeoutMs: r = 0
  } = e, [o, s] = I.useReducer((c, l) => ({
    ...c,
    ...l
  }), {
    delay: n,
    timeoutMs: r,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), i = I.useRef(null), a = I.useCallback((c) => {
    s({
      currentId: c
    });
  }, []);
  return It(() => {
    o.currentId ? i.current === null ? i.current = o.currentId : o.isInstantPhase || s({
      isInstantPhase: !0
    }) : (o.isInstantPhase && s({
      isInstantPhase: !1
    }), i.current = null);
  }, [o.currentId, o.isInstantPhase]), /* @__PURE__ */ I.createElement(Lf.Provider, {
    value: I.useMemo(() => ({
      ...o,
      setState: s,
      setCurrentId: a
    }), [o, a])
  }, t);
}
function mx(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    floatingId: o
  } = e, {
    id: s
  } = t, i = s ?? o, a = jf(), {
    currentId: c,
    setCurrentId: l,
    initialDelay: u,
    setState: d,
    timeoutMs: f
  } = a;
  return It(() => {
    c && (d({
      delay: {
        open: 1,
        close: ao(u, "close")
      }
    }), c !== i && r(!1));
  }, [i, r, d, c, u]), It(() => {
    function p() {
      r(!1), d({
        delay: u,
        currentId: null
      });
    }
    if (c && !n && c === i) {
      if (f) {
        const m = window.setTimeout(p, f);
        return () => {
          clearTimeout(m);
        };
      }
      p();
    }
  }, [n, d, c, i, r, u, f]), It(() => {
    l === Bi || !n || l(i);
  }, [n, l, i]), a;
}
function ni(e, t) {
  let n = e.filter((o) => {
    var s;
    return o.parentId === t && ((s = o.context) == null ? void 0 : s.open);
  }), r = n;
  for (; r.length; )
    r = e.filter((o) => {
      var s;
      return (s = r) == null ? void 0 : s.some((i) => {
        var a;
        return o.parentId === i.id && ((a = o.context) == null ? void 0 : a.open);
      });
    }), n = n.concat(r);
  return n;
}
const hx = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, gx = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
}, eu = (e) => {
  var t, n;
  return {
    escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function yx(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: s
  } = e, {
    enabled: i = !0,
    escapeKey: a = !0,
    outsidePress: c = !0,
    outsidePressEvent: l = "pointerdown",
    referencePress: u = !1,
    referencePressEvent: d = "pointerdown",
    ancestorScroll: f = !1,
    bubbles: p,
    capture: m
  } = t, g = Aa(), h = Gt(typeof c == "function" ? c : () => !1), b = typeof c == "function" ? h : c, x = I.useRef(!1), w = I.useRef(!1), {
    escapeKey: v,
    outsidePress: S
  } = eu(p), {
    escapeKey: C,
    outsidePress: D
  } = eu(m), P = Gt((O) => {
    var L;
    if (!n || !i || !a || O.key !== "Escape")
      return;
    const E = (L = s.current.floatingContext) == null ? void 0 : L.nodeId, A = g ? ni(g.nodesRef.current, E) : [];
    if (!v && (O.stopPropagation(), A.length > 0)) {
      let N = !0;
      if (A.forEach((B) => {
        var M;
        if ((M = B.context) != null && M.open && !B.context.dataRef.current.__escapeKeyBubbles) {
          N = !1;
          return;
        }
      }), !N)
        return;
    }
    r(!1, dv(O) ? O.nativeEvent : O, "escape-key");
  }), $ = Gt((O) => {
    var L;
    const E = () => {
      var A;
      P(O), (A = On(O)) == null || A.removeEventListener("keydown", E);
    };
    (L = On(O)) == null || L.addEventListener("keydown", E);
  }), T = Gt((O) => {
    var L;
    const E = x.current;
    x.current = !1;
    const A = w.current;
    if (w.current = !1, l === "click" && A || E || typeof b == "function" && !b(O))
      return;
    const N = On(O), B = "[" + Na("inert") + "]", M = dn(o.floating).querySelectorAll(B);
    let K = le(N) ? N : null;
    for (; K && !Jt(K); ) {
      const oe = _t(K);
      if (Jt(oe) || !le(oe))
        break;
      K = oe;
    }
    if (M.length && le(N) && !fv(N) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !gr(N, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(M).every((oe) => !gr(K, oe)))
      return;
    if (Je(N) && W) {
      const oe = N.clientWidth > 0 && N.scrollWidth > N.clientWidth, ce = N.clientHeight > 0 && N.scrollHeight > N.clientHeight;
      let pe = ce && O.offsetX > N.clientWidth;
      if (ce && it(N).direction === "rtl" && (pe = O.offsetX <= N.offsetWidth - N.clientWidth), pe || oe && O.offsetY > N.clientHeight)
        return;
    }
    const Z = (L = s.current.floatingContext) == null ? void 0 : L.nodeId, ie = g && ni(g.nodesRef.current, Z).some((oe) => {
      var ce;
      return Zs(O, (ce = oe.context) == null ? void 0 : ce.elements.floating);
    });
    if (Zs(O, o.floating) || Zs(O, o.domReference) || ie)
      return;
    const ge = g ? ni(g.nodesRef.current, Z) : [];
    if (ge.length > 0) {
      let oe = !0;
      if (ge.forEach((ce) => {
        var pe;
        if ((pe = ce.context) != null && pe.open && !ce.context.dataRef.current.__outsidePressBubbles) {
          oe = !1;
          return;
        }
      }), !oe)
        return;
    }
    r(!1, O, "outside-press");
  }), j = Gt((O) => {
    var L;
    const E = () => {
      var A;
      T(O), (A = On(O)) == null || A.removeEventListener(l, E);
    };
    (L = On(O)) == null || L.addEventListener(l, E);
  });
  I.useEffect(() => {
    if (!n || !i)
      return;
    s.current.__escapeKeyBubbles = v, s.current.__outsidePressBubbles = S;
    function O(A) {
      r(!1, A, "ancestor-scroll");
    }
    const L = dn(o.floating);
    a && L.addEventListener("keydown", C ? $ : P, C), b && L.addEventListener(l, D ? j : T, D);
    let E = [];
    return f && (le(o.domReference) && (E = Lt(o.domReference)), le(o.floating) && (E = E.concat(Lt(o.floating))), !le(o.reference) && o.reference && o.reference.contextElement && (E = E.concat(Lt(o.reference.contextElement)))), E = E.filter((A) => {
      var N;
      return A !== ((N = L.defaultView) == null ? void 0 : N.visualViewport);
    }), E.forEach((A) => {
      A.addEventListener("scroll", O, {
        passive: !0
      });
    }), () => {
      a && L.removeEventListener("keydown", C ? $ : P, C), b && L.removeEventListener(l, D ? j : T, D), E.forEach((A) => {
        A.removeEventListener("scroll", O);
      });
    };
  }, [s, o, a, b, l, n, r, f, i, v, S, P, C, $, T, D, j]), I.useEffect(() => {
    x.current = !1;
  }, [b, l]);
  const F = I.useMemo(() => ({
    onKeyDown: P,
    [hx[d]]: (O) => {
      u && r(!1, O.nativeEvent, "reference-press");
    }
  }), [P, r, u, d]), W = I.useMemo(() => ({
    onKeyDown: P,
    onMouseDown() {
      w.current = !0;
    },
    onMouseUp() {
      w.current = !0;
    },
    [gx[l]]: () => {
      x.current = !0;
    }
  }), [P, l]);
  return I.useMemo(() => i ? {
    reference: F,
    floating: W
  } : {}, [i, F, W]);
}
function bx(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = Tf(), s = I.useRef({}), [i] = I.useState(() => lx()), a = Oa() != null, [c, l] = I.useState(r.reference), u = Gt((p, m, g) => {
    s.current.openEvent = p ? m : void 0, i.emit("openchange", {
      open: p,
      event: m,
      reason: g,
      nested: a
    }), n == null || n(p, m, g);
  }), d = I.useMemo(() => ({
    setPositionReference: l
  }), []), f = I.useMemo(() => ({
    reference: c || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [c, r.reference, r.floating]);
  return I.useMemo(() => ({
    dataRef: s,
    open: t,
    onOpenChange: u,
    elements: f,
    events: i,
    floatingId: o,
    refs: d
  }), [t, u, f, i, o, d]);
}
function Ta(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = bx({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [s, i] = I.useState(null), [a, c] = I.useState(null), u = (o == null ? void 0 : o.reference) || s, d = I.useRef(null), f = Aa();
  It(() => {
    u && (d.current = u);
  }, [u]);
  const p = tx({
    ...e,
    elements: {
      ...o,
      ...a && {
        reference: a
      }
    }
  }), m = I.useCallback((w) => {
    const v = le(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    c(v), p.refs.setReference(v);
  }, [p.refs]), g = I.useCallback((w) => {
    (le(w) || w === null) && (d.current = w, i(w)), (le(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !le(w)) && p.refs.setReference(w);
  }, [p.refs]), h = I.useMemo(() => ({
    ...p.refs,
    setReference: g,
    setPositionReference: m,
    domReference: d
  }), [p.refs, g, m]), b = I.useMemo(() => ({
    ...p.elements,
    domReference: u
  }), [p.elements, u]), x = I.useMemo(() => ({
    ...p,
    ...r,
    refs: h,
    elements: b,
    nodeId: t
  }), [p, h, b, t, r]);
  return It(() => {
    r.dataRef.current.floatingContext = x;
    const w = f == null ? void 0 : f.nodesRef.current.find((v) => v.id === t);
    w && (w.context = x);
  }), I.useMemo(() => ({
    ...p,
    context: x,
    refs: h,
    elements: b
  }), [p, h, b, x]);
}
function vx(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    dataRef: s,
    elements: i
  } = e, {
    enabled: a = !0,
    visibleOnly: c = !0
  } = t, l = I.useRef(!1), u = I.useRef(), d = I.useRef(!0);
  I.useEffect(() => {
    if (!a)
      return;
    const p = Be(i.domReference);
    function m() {
      !n && Je(i.domReference) && i.domReference === zl(dn(i.domReference)) && (l.current = !0);
    }
    function g() {
      d.current = !0;
    }
    return p.addEventListener("blur", m), p.addEventListener("keydown", g, !0), () => {
      p.removeEventListener("blur", m), p.removeEventListener("keydown", g, !0);
    };
  }, [i.domReference, n, a]), I.useEffect(() => {
    if (!a)
      return;
    function p(m) {
      let {
        reason: g
      } = m;
      (g === "reference-press" || g === "escape-key") && (l.current = !0);
    }
    return o.on("openchange", p), () => {
      o.off("openchange", p);
    };
  }, [o, a]), I.useEffect(() => () => {
    clearTimeout(u.current);
  }, []);
  const f = I.useMemo(() => ({
    onPointerDown(p) {
      av(p.nativeEvent) || (d.current = !1);
    },
    onMouseLeave() {
      l.current = !1;
    },
    onFocus(p) {
      if (l.current)
        return;
      const m = On(p.nativeEvent);
      if (c && le(m))
        try {
          if (cv() && lv())
            throw Error();
          if (!m.matches(":focus-visible"))
            return;
        } catch {
          if (!d.current && !mv(m))
            return;
        }
      r(!0, p.nativeEvent, "focus");
    },
    onBlur(p) {
      l.current = !1;
      const m = p.relatedTarget, g = p.nativeEvent, h = le(m) && m.hasAttribute(Na("focus-guard")) && m.getAttribute("data-type") === "outside";
      u.current = window.setTimeout(() => {
        var b;
        const x = zl(i.domReference ? i.domReference.ownerDocument : document);
        !m && x === i.domReference || gr((b = s.current.floatingContext) == null ? void 0 : b.refs.floating.current, x) || gr(i.domReference, x) || h || r(!1, g, "focus");
      });
    }
  }), [s, i.domReference, r, c]);
  return I.useMemo(() => a ? {
    reference: f
  } : {}, [a, f]);
}
const tu = "active", nu = "selected";
function ri(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let s = e;
  if (o && e) {
    const {
      [tu]: i,
      [nu]: a,
      ...c
    } = e;
    s = c;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...s,
    ...t.map((i) => {
      const a = i ? i[n] : null;
      return typeof a == "function" ? e ? a(e) : null : a;
    }).concat(e).reduce((i, a) => (a && Object.entries(a).forEach((c) => {
      let [l, u] = c;
      if (!(o && [tu, nu].includes(l)))
        if (l.indexOf("on") === 0) {
          if (r.has(l) || r.set(l, []), typeof u == "function") {
            var d;
            (d = r.get(l)) == null || d.push(u), i[l] = function() {
              for (var f, p = arguments.length, m = new Array(p), g = 0; g < p; g++)
                m[g] = arguments[g];
              return (f = r.get(l)) == null ? void 0 : f.map((h) => h(...m)).find((h) => h !== void 0);
            };
          }
        } else
          i[l] = u;
    }), i), {})
  };
}
function xx(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => a == null ? void 0 : a.reference), n = e.map((a) => a == null ? void 0 : a.floating), r = e.map((a) => a == null ? void 0 : a.item), o = I.useCallback(
    (a) => ri(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), s = I.useCallback(
    (a) => ri(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), i = I.useCallback(
    (a) => ri(a, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return I.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: s,
    getItemProps: i
  }), [o, s, i]);
}
const wx = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function Sx(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: o
  } = e, {
    enabled: s = !0,
    role: i = "dialog"
  } = t, a = (n = wx.get(i)) != null ? n : i, c = Tf(), u = Oa() != null, d = I.useMemo(() => a === "tooltip" || i === "label" ? {
    ["aria-" + (i === "label" ? "labelledby" : "describedby")]: r ? o : void 0
  } : {
    "aria-expanded": r ? "true" : "false",
    "aria-haspopup": a === "alertdialog" ? "dialog" : a,
    "aria-controls": r ? o : void 0,
    ...a === "listbox" && {
      role: "combobox"
    },
    ...a === "menu" && {
      id: c
    },
    ...a === "menu" && u && {
      role: "menuitem"
    },
    ...i === "select" && {
      "aria-autocomplete": "none"
    },
    ...i === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [a, o, u, r, c, i]), f = I.useMemo(() => {
    const m = {
      id: o,
      ...a && {
        role: a
      }
    };
    return a === "tooltip" || i === "label" ? m : {
      ...m,
      ...a === "menu" && {
        "aria-labelledby": c
      }
    };
  }, [a, o, c, i]), p = I.useCallback((m) => {
    let {
      active: g,
      selected: h
    } = m;
    const b = {
      role: "option",
      ...g && {
        id: o + "-option"
      }
    };
    switch (i) {
      case "select":
        return {
          ...b,
          "aria-selected": g && h
        };
      case "combobox":
        return {
          ...b,
          ...g && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [o, i]);
  return I.useMemo(() => s ? {
    reference: d,
    floating: f,
    item: p
  } : {}, [s, d, f, p]);
}
function _f(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function ru(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function ou(e, t, n, r, o) {
  return e === "center" || r === "center" ? { left: t } : e === "end" ? { [o === "ltr" ? "right" : "left"]: n } : e === "start" ? { [o === "ltr" ? "left" : "right"]: n } : {};
}
const Cx = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Px({
  position: e,
  arrowSize: t,
  arrowOffset: n,
  arrowRadius: r,
  arrowPosition: o,
  arrowX: s,
  arrowY: i,
  dir: a
}) {
  const [c, l = "center"] = e.split("-"), u = {
    width: t,
    height: t,
    transform: "rotate(45deg)",
    position: "absolute",
    [Cx[c]]: r
  }, d = -t / 2;
  return c === "left" ? {
    ...u,
    ...ru(l, i, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...ru(l, i, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...ou(l, s, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...ou(l, s, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const La = te(
  ({
    position: e,
    arrowSize: t,
    arrowOffset: n,
    arrowRadius: r,
    arrowPosition: o,
    visible: s,
    arrowX: i,
    arrowY: a,
    style: c,
    ...l
  }, u) => {
    const { dir: d } = Mr();
    return s ? /* @__PURE__ */ y.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...Px({
            position: e,
            arrowSize: t,
            arrowOffset: n,
            arrowRadius: r,
            arrowPosition: o,
            dir: d,
            arrowX: i,
            arrowY: a
          })
        }
      }
    ) : null;
  }
);
La.displayName = "@mantine/core/FloatingArrow";
const [Dx, Mf] = Bt(
  "Popover component was not found in the tree"
);
function ja({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = Dy(t), o = _e(r, e == null ? void 0 : e.ref);
  return nn(e) ? bn(e, { [n]: o }) : e;
}
function kf(e) {
  return /* @__PURE__ */ y.jsx(xa, { tabIndex: -1, "data-autofocus": !0, ...e });
}
ja.displayName = "@mantine/core/FocusTrap";
kf.displayName = "@mantine/core/FocusTrapInitialFocus";
ja.InitialFocus = kf;
function Ex(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const Ix = {}, Ff = te((e, t) => {
  const { children: n, target: r, ...o } = k("Portal", Ix, e), [s, i] = q(!1), a = z(null);
  return jr(() => (i(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : Ex(o), Ud(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !s || !a.current ? null : Bh(/* @__PURE__ */ y.jsx(y.Fragment, { children: n }), a.current);
});
Ff.displayName = "@mantine/core/Portal";
function Yo({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ y.jsx(Ff, { ...n, children: t }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: t });
}
Yo.displayName = "@mantine/core/OptionalPortal";
const or = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${R(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Zr = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${R(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${R(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${R(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${R(-30)}` },
    transitionProperty: "opacity, transform"
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
    out: { opacity: 0, transform: `translateY(${R(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${R(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${R(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${R(20)}) rotate(5deg)` },
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
    ...or("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...or("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...or("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...or("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...or("top"),
    common: { transformOrigin: "top right" }
  }
}, su = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Rx({
  transition: e,
  state: t,
  duration: n,
  timingFunction: r
}) {
  const o = {
    transitionDuration: `${n}ms`,
    transitionTimingFunction: r
  };
  return typeof e == "string" ? e in Zr ? {
    transitionProperty: Zr[e].transitionProperty,
    ...o,
    ...Zr[e].common,
    ...Zr[e][su[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[su[t]]
  };
}
function $x({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: s,
  onEntered: i,
  onExited: a,
  enterDelay: c,
  exitDelay: l
}) {
  const u = We(), d = Kd(), f = u.respectReducedMotion ? d : !1, [p, m] = q(f ? 0 : e), [g, h] = q(r ? "entered" : "exited"), b = z(-1), x = z(-1), w = z(-1), v = (C) => {
    const D = C ? o : s, P = C ? i : a;
    window.clearTimeout(b.current);
    const $ = f ? 0 : C ? e : t;
    m($), $ === 0 ? (typeof D == "function" && D(), typeof P == "function" && P(), h(C ? "entered" : "exited")) : w.current = requestAnimationFrame(() => {
      oa.flushSync(() => {
        h(C ? "pre-entering" : "pre-exiting");
      }), w.current = requestAnimationFrame(() => {
        typeof D == "function" && D(), h(C ? "entering" : "exiting"), b.current = window.setTimeout(() => {
          typeof P == "function" && P(), h(C ? "entered" : "exited");
        }, $);
      });
    });
  }, S = (C) => {
    if (window.clearTimeout(x.current), typeof (C ? c : l) != "number") {
      v(C);
      return;
    }
    x.current = window.setTimeout(
      () => {
        v(C);
      },
      C ? c : l
    );
  };
  return Xt(() => {
    S(r);
  }, [r]), H(
    () => () => {
      window.clearTimeout(b.current), cancelAnimationFrame(w.current);
    },
    []
  ), {
    transitionDuration: p,
    transitionStatus: g,
    transitionTimingFunction: n || "ease"
  };
}
function Gn({
  keepMounted: e,
  transition: t = "fade",
  duration: n = 250,
  exitDuration: r = n,
  mounted: o,
  children: s,
  timingFunction: i = "ease",
  onExit: a,
  onEntered: c,
  onEnter: l,
  onExited: u,
  enterDelay: d,
  exitDelay: f
}) {
  const { transitionDuration: p, transitionStatus: m, transitionTimingFunction: g } = $x({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: i,
    onExit: a,
    onEntered: c,
    onEnter: l,
    onExited: u,
    enterDelay: d,
    exitDelay: f
  });
  return p === 0 ? o ? /* @__PURE__ */ y.jsx(y.Fragment, { children: s({}) }) : e ? s({ display: "none" }) : null : m === "exited" ? e ? s({ display: "none" }) : null : /* @__PURE__ */ y.jsx(y.Fragment, { children: s(
    Rx({
      transition: t,
      duration: p,
      state: m,
      timingFunction: g
    })
  ) });
}
Gn.displayName = "@mantine/core/Transition";
var Bf = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Ox = {}, _a = U((e, t) => {
  var h, b, x, w;
  const n = k("PopoverDropdown", Ox, e), {
    className: r,
    style: o,
    vars: s,
    children: i,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = n, f = Mf(), p = by({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = _e(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ y.jsx(Yo, { ...f.portalProps, withinPortal: f.withinPortal, children: /* @__PURE__ */ y.jsx(
    Gn,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((b = f.transitionProps) == null ? void 0 : b.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((x = f.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? f.transitionProps.exitDuration : (w = f.transitionProps) == null ? void 0 : w.duration,
      children: (v) => /* @__PURE__ */ y.jsx(ja, { active: f.trapFocus, children: /* @__PURE__ */ y.jsxs(
        V,
        {
          ...m,
          ...d,
          variant: c,
          ref: g,
          onKeyDownCapture: uy(f.onClose, {
            active: f.closeOnEscape,
            onTrigger: p,
            onKeyDown: a
          }),
          "data-position": f.placement,
          "data-fixed": f.floatingStrategy === "fixed" || void 0,
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
                width: f.width === "target" ? void 0 : R(f.width)
              },
              o
            ]
          }),
          children: [
            i,
            /* @__PURE__ */ y.jsx(
              La,
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
          ]
        }
      ) })
    }
  ) });
});
_a.classes = Bf;
_a.displayName = "@mantine/core/PopoverDropdown";
const Ax = {
  refProp: "ref",
  popupType: "dialog"
}, Vf = U((e, t) => {
  const { children: n, refProp: r, popupType: o, ...s } = k(
    "PopoverTarget",
    Ax,
    e
  );
  if (!nn(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const i = s, a = Mf(), c = _e(a.reference, n.ref, t), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return bn(n, {
    ...i,
    ...l,
    ...a.targetProps,
    className: at(a.targetProps.className, i.className, n.props.className),
    [r]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
Vf.displayName = "@mantine/core/PopoverTarget";
function zf({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, s] = q(0);
  H(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return qv(
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
  ]), Xt(() => {
    t.update();
  }, r), Xt(() => {
    s((i) => i + 1);
  }, [e]);
}
function Nx(e) {
  if (e === void 0)
    return { shift: !0, flip: !0 };
  const t = { ...e };
  return e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t;
}
function Tx(e, t) {
  const n = Nx(e.middlewares), r = [Of(e.offset)];
  return n.shift && r.push(
    $a(
      typeof n.shift == "boolean" ? { limiter: Xl(), padding: 5 } : { limiter: Xl(), padding: 5, ...n.shift }
    )
  ), n.flip && r.push(
    typeof n.flip == "boolean" ? ki() : ki(n.flip)
  ), n.inline && r.push(
    typeof n.inline == "boolean" ? Fi() : Fi(n.inline)
  ), r.push(Af({ element: e.arrowRef, padding: e.arrowOffset })), (n.size || e.width === "target") && r.push(
    rx({
      ...typeof n.size == "boolean" ? {} : n.size,
      apply({ rects: o, availableWidth: s, availableHeight: i }) {
        var l;
        const c = ((l = t().refs.floating.current) == null ? void 0 : l.style) ?? {};
        n.size && Object.assign(c, {
          maxWidth: `${s}px`,
          maxHeight: `${i}px`
        }), e.width === "target" && Object.assign(c, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), r;
}
function Lx(e) {
  const [t, n] = jt({
    value: e.opened,
    defaultValue: e.defaultOpened,
    finalValue: !1,
    onChange: e.onChange
  }), r = () => {
    var i;
    t && ((i = e.onClose) == null || i.call(e), n(!1));
  }, o = () => {
    var i, a;
    t ? ((i = e.onClose) == null || i.call(e), n(!1)) : ((a = e.onOpen) == null || a.call(e), n(!0));
  }, s = Ta({
    strategy: e.strategy,
    placement: e.position,
    middleware: Tx(e, () => s)
  });
  return zf({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: s
  }), Xt(() => {
    var i;
    (i = e.onPositionChange) == null || i.call(e, s.placement);
  }, [s.placement]), Xt(() => {
    var i, a;
    e.opened ? (a = e.onOpen) == null || a.call(e) : (i = e.onClose) == null || i.call(e);
  }, [e.opened]), {
    floating: s,
    controlled: typeof e.opened == "boolean",
    opened: t,
    onClose: r,
    onToggle: o
  };
}
const jx = {
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
  zIndex: Lr("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, _x = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : Ne(t),
    "--popover-shadow": fy(n)
  }
});
function St(e) {
  var ye, At, Ee, be, pt, Wt;
  const t = k("Popover", jx, e), {
    children: n,
    position: r,
    offset: o,
    onPositionChange: s,
    positionDependencies: i,
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
    classNames: b,
    styles: x,
    closeOnClickOutside: w,
    withinPortal: v,
    portalProps: S,
    closeOnEscape: C,
    clickOutsideEvents: D,
    trapFocus: P,
    onClose: $,
    onOpen: T,
    onChange: j,
    zIndex: F,
    radius: W,
    shadow: O,
    id: L,
    defaultOpened: E,
    __staticSelector: A,
    withRoles: N,
    disabled: B,
    returnFocus: M,
    variant: K,
    keepMounted: Z,
    vars: ie,
    floatingStrategy: ge,
    ...oe
  } = t, ce = Y({
    name: A,
    props: t,
    classes: Bf,
    classNames: b,
    styles: x,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ie,
    varsResolver: _x
  }), pe = z(null), [Te, ae] = q(null), [Se, Ct] = q(null), { dir: me } = Mr(), he = Ot(L), fe = Lx({
    middlewares: u,
    width: l,
    position: _f(me, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: pe,
    arrowOffset: p,
    onPositionChange: s,
    positionDependencies: i,
    opened: a,
    defaultOpened: E,
    onChange: j,
    onOpen: T,
    onClose: $,
    strategy: ge
  });
  my(() => w && fe.onClose(), D, [
    Te,
    Se
  ]);
  const ft = ee(
    (Me) => {
      ae(Me), fe.floating.refs.setReference(Me);
    },
    [fe.floating.refs.setReference]
  ), Pt = ee(
    (Me) => {
      Ct(Me), fe.floating.refs.setFloating(Me);
    },
    [fe.floating.refs.setFloating]
  );
  return /* @__PURE__ */ y.jsx(
    Dx,
    {
      value: {
        returnFocus: M,
        disabled: B,
        controlled: fe.controlled,
        reference: ft,
        floating: Pt,
        x: fe.floating.x,
        y: fe.floating.y,
        arrowX: (Ee = (At = (ye = fe.floating) == null ? void 0 : ye.middlewareData) == null ? void 0 : At.arrow) == null ? void 0 : Ee.x,
        arrowY: (Wt = (pt = (be = fe.floating) == null ? void 0 : be.middlewareData) == null ? void 0 : pt.arrow) == null ? void 0 : Wt.y,
        opened: fe.opened,
        arrowRef: pe,
        transitionProps: c,
        width: l,
        withArrow: d,
        arrowSize: f,
        arrowOffset: p,
        arrowRadius: m,
        arrowPosition: g,
        placement: fe.floating.placement,
        trapFocus: P,
        withinPortal: v,
        portalProps: S,
        zIndex: F,
        radius: W,
        shadow: O,
        closeOnEscape: C,
        onClose: fe.onClose,
        onToggle: fe.onToggle,
        getTargetId: () => `${he}-target`,
        getDropdownId: () => `${he}-dropdown`,
        withRoles: N,
        targetProps: oe,
        __staticSelector: A,
        classNames: b,
        styles: x,
        unstyled: h,
        variant: K,
        keepMounted: Z,
        getStyles: ce,
        floatingStrategy: ge
      },
      children: n
    }
  );
}
St.Target = Vf;
St.Dropdown = _a;
St.displayName = "@mantine/core/Popover";
St.extend = (e) => e;
var gt = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const Mx = te(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsxs(V, { component: "span", className: at(gt.barsLoader, e), ...t, ref: n, children: [
  /* @__PURE__ */ y.jsx("span", { className: gt.bar }),
  /* @__PURE__ */ y.jsx("span", { className: gt.bar }),
  /* @__PURE__ */ y.jsx("span", { className: gt.bar })
] })), kx = te(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsxs(V, { component: "span", className: at(gt.dotsLoader, e), ...t, ref: n, children: [
  /* @__PURE__ */ y.jsx("span", { className: gt.dot }),
  /* @__PURE__ */ y.jsx("span", { className: gt.dot }),
  /* @__PURE__ */ y.jsx("span", { className: gt.dot })
] })), Fx = te(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(V, { component: "span", className: at(gt.ovalLoader, e), ...t, ref: n })), Wf = {
  bars: Mx,
  oval: Fx,
  dots: kx
}, Bx = {
  loaders: Wf,
  type: "oval"
}, Vx = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": de(t, "loader-size"),
    "--loader-color": n ? st(n, e) : void 0
  }
}), Hn = U((e, t) => {
  const n = k("Loader", Bx, e), {
    size: r,
    color: o,
    type: s,
    vars: i,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    loaders: f,
    variant: p,
    children: m,
    ...g
  } = n, h = Y({
    name: "Loader",
    props: n,
    classes: gt,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: Vx
  });
  return m ? /* @__PURE__ */ y.jsx(V, { ...h("root"), ref: t, ...g, children: m }) : /* @__PURE__ */ y.jsx(
    V,
    {
      ...h("root"),
      ref: t,
      component: f[s],
      variant: p,
      size: r,
      ...g
    }
  );
});
Hn.defaultLoaders = Wf;
Hn.classes = gt;
Hn.displayName = "@mantine/core/Loader";
var Xo = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const iu = {
  orientation: "horizontal"
}, zx = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": R(t) }
}), Ma = U((e, t) => {
  const n = k("ActionIconGroup", iu, e), {
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    mod: f,
    ...p
  } = k("ActionIconGroup", iu, e), m = Y({
    name: "ActionIconGroup",
    props: n,
    classes: Xo,
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: zx,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...m("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": c }, f],
      role: "group",
      ...p
    }
  );
});
Ma.classes = Xo;
Ma.displayName = "@mantine/core/ActionIconGroup";
const Wx = {}, Gx = (e, { size: t, radius: n, variant: r, gradient: o, color: s, autoContrast: i }) => {
  const a = e.variantColorResolver({
    color: s || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled",
    autoContrast: i
  });
  return {
    root: {
      "--ai-size": de(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : Ne(n),
      "--ai-bg": s || r ? a.background : void 0,
      "--ai-hover": s || r ? a.hover : void 0,
      "--ai-hover-color": s || r ? a.hoverColor : void 0,
      "--ai-color": a.color,
      "--ai-bd": s || r ? a.border : void 0
    }
  };
}, yr = Vt((e, t) => {
  const n = k("ActionIcon", Wx, e), {
    className: r,
    unstyled: o,
    variant: s,
    classNames: i,
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
    children: b,
    disabled: x,
    "data-disabled": w,
    autoContrast: v,
    mod: S,
    ...C
  } = n, D = Y({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: c,
    classes: Xo,
    classNames: i,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: Gx
  });
  return /* @__PURE__ */ y.jsxs(
    rn,
    {
      ...D("root", { active: !x && !l && !w }),
      ...C,
      unstyled: o,
      variant: s,
      size: d,
      disabled: x || l,
      ref: t,
      mod: [{ loading: l, disabled: x || w }, S],
      children: [
        /* @__PURE__ */ y.jsx(Gn, { mounted: !!l, transition: "slide-down", duration: 150, children: (P) => /* @__PURE__ */ y.jsx(V, { component: "span", ...D("loader", { style: P }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(Hn, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ y.jsx(V, { component: "span", mod: { loading: l }, ...D("icon"), children: b })
      ]
    }
  );
});
yr.classes = Xo;
yr.displayName = "@mantine/core/ActionIcon";
yr.Group = Ma;
const Gf = te(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) => /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
Gf.displayName = "@mantine/core/CloseIcon";
var Hf = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const Hx = {
  variant: "subtle"
}, Ux = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": de(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : Ne(n),
    "--cb-icon-size": R(r)
  }
}), Br = Vt((e, t) => {
  const n = k("CloseButton", Hx, e), {
    iconSize: r,
    children: o,
    vars: s,
    radius: i,
    className: a,
    classNames: c,
    style: l,
    styles: u,
    unstyled: d,
    "data-disabled": f,
    disabled: p,
    variant: m,
    icon: g,
    mod: h,
    ...b
  } = n, x = Y({
    name: "CloseButton",
    props: n,
    className: a,
    style: l,
    classes: Hf,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: Ux
  });
  return /* @__PURE__ */ y.jsxs(
    rn,
    {
      ref: t,
      ...b,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: [{ disabled: p || f }, h],
      ...x("root", { variant: m, active: !p && !f }),
      children: [
        g || /* @__PURE__ */ y.jsx(Gf, {}),
        o
      ]
    }
  );
});
Br.classes = Hf;
Br.displayName = "@mantine/core/CloseButton";
function qx(e) {
  return kh.toArray(e).filter(Boolean);
}
var Uf = { root: "m_4081bf90" };
const Kx = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, Yx = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: s, wrap: i }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": go(r),
    "--group-align": o,
    "--group-justify": s,
    "--group-wrap": i
  }
}), Ln = U((e, t) => {
  const n = k("Group", Kx, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    __size: b,
    mod: x,
    ...w
  } = n, v = qx(c), S = v.length, C = go(l ?? "md"), P = { childWidth: `calc(${100 / S}% - (${C} - ${C} / ${S}))` }, $ = Y({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: s,
    classes: Uf,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: g,
    varsResolver: Yx
  });
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...$("root"),
      ref: t,
      variant: h,
      mod: [{ grow: p }, x],
      size: b,
      ...w,
      children: v
    }
  );
});
Ln.classes = Uf;
Ln.displayName = "@mantine/core/Group";
var qf = { root: "m_9814e45f" };
const Xx = {
  zIndex: Lr("modal")
}, Jx = (e, { gradient: t, color: n, backgroundOpacity: r, blur: o, radius: s, zIndex: i }) => ({
  root: {
    "--overlay-bg": t || (n !== void 0 || r !== void 0) && Dt(n || "#000", r ?? 0.6) || void 0,
    "--overlay-filter": o ? `blur(${R(o)})` : void 0,
    "--overlay-radius": s === void 0 ? void 0 : Ne(s),
    "--overlay-z-index": i == null ? void 0 : i.toString()
  }
}), Co = Vt((e, t) => {
  const n = k("Overlay", Xx, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    backgroundOpacity: b,
    mod: x,
    ...w
  } = n, v = Y({
    name: "Overlay",
    props: n,
    classes: qf,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: Jx
  });
  return /* @__PURE__ */ y.jsx(V, { ref: t, ...v("root"), mod: [{ center: u, fixed: l }, x], ...w, children: d });
});
Co.classes = qf;
Co.displayName = "@mantine/core/Overlay";
const [Qx, Un] = zo({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var lt = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const au = {}, Zx = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${R(2)})`
  }
}), Jo = U((e, t) => {
  const n = k("InputDescription", au, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...p
  } = k("InputDescription", au, n), m = Un(), g = Y({
    name: ["InputWrapper", u],
    props: n,
    classes: lt,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "description",
    vars: c,
    varsResolver: Zx
  }), h = d && (m == null ? void 0 : m.getStyles) || g;
  return /* @__PURE__ */ y.jsx(
    V,
    {
      component: "p",
      ref: t,
      variant: f,
      size: l,
      ...h("description", m != null && m.getStyles ? { className: o, style: s } : void 0),
      ...p
    }
  );
});
Jo.classes = lt;
Jo.displayName = "@mantine/core/InputDescription";
const e0 = {}, t0 = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${R(2)})`
  }
}), Qo = U((e, t) => {
  const n = k("InputError", e0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: f,
    ...p
  } = n, m = Y({
    name: ["InputWrapper", u],
    props: n,
    classes: lt,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "error",
    vars: c,
    varsResolver: t0
  }), g = Un(), h = d && (g == null ? void 0 : g.getStyles) || m;
  return /* @__PURE__ */ y.jsx(
    V,
    {
      component: "p",
      ref: t,
      variant: f,
      size: l,
      ...h("error", g != null && g.getStyles ? { className: o, style: s } : void 0),
      ...p
    }
  );
});
Qo.classes = lt;
Qo.displayName = "@mantine/core/InputError";
const cu = {
  labelElement: "label"
}, n0 = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ke(t),
    "--input-asterisk-color": void 0
  }
}), Zo = U((e, t) => {
  const n = k("InputLabel", cu, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    mod: b,
    ...x
  } = k("InputLabel", cu, n), w = Y({
    name: ["InputWrapper", g],
    props: n,
    classes: lt,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "label",
    vars: c,
    varsResolver: n0
  }), v = Un(), S = (v == null ? void 0 : v.getStyles) || w;
  return /* @__PURE__ */ y.jsxs(
    V,
    {
      ...S("label", v != null && v.getStyles ? { className: o, style: s } : void 0),
      component: l,
      variant: h,
      size: u,
      ref: t,
      htmlFor: l === "label" ? f : void 0,
      mod: [{ required: d }, b],
      onMouseDown: (C) => {
        p == null || p(C), !C.defaultPrevented && C.detail > 1 && C.preventDefault();
      },
      ...x,
      children: [
        m,
        d && /* @__PURE__ */ y.jsx("span", { ...S("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
Zo.classes = lt;
Zo.displayName = "@mantine/core/InputLabel";
const lu = {}, ka = U((e, t) => {
  const n = k("InputPlaceholder", lu, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: d,
    mod: f,
    ...p
  } = k("InputPlaceholder", lu, n), m = Y({
    name: ["InputPlaceholder", l],
    props: n,
    classes: lt,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...m("placeholder"),
      mod: [{ error: !!d }, f],
      component: "span",
      variant: u,
      ref: t,
      ...p
    }
  );
});
ka.classes = lt;
ka.displayName = "@mantine/core/InputPlaceholder";
function r0(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((c) => c === "input"), o = e.slice(0, r), s = e.slice(r + 1), i = t && o.includes("description") || n && o.includes("error");
  return { offsetBottom: t && s.includes("description") || n && s.includes("error"), offsetTop: i };
}
const o0 = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, s0 = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ke(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${R(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${R(2)})`
  }
}), Fa = U((e, t) => {
  const n = k("InputWrapper", o0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    labelProps: b,
    descriptionProps: x,
    errorProps: w,
    labelElement: v,
    children: S,
    withAsterisk: C,
    id: D,
    required: P,
    __stylesApiProps: $,
    mod: T,
    ...j
  } = n, F = Y({
    name: ["InputWrapper", d],
    props: $ || n,
    classes: lt,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: s0
  }), W = {
    size: l,
    variant: u,
    __staticSelector: d
  }, O = Ot(D), L = typeof C == "boolean" ? C : P, E = (w == null ? void 0 : w.id) || `${O}-error`, A = (x == null ? void 0 : x.id) || `${O}-description`, N = O, B = !!g && typeof g != "boolean", M = !!h, K = `${B ? E : ""} ${M ? A : ""}`, Z = K.trim().length > 0 ? K.trim() : void 0, ie = (b == null ? void 0 : b.id) || `${O}-label`, ge = m && /* @__PURE__ */ y.jsx(
    Zo,
    {
      labelElement: v,
      id: ie,
      htmlFor: N,
      required: L,
      ...W,
      ...b,
      children: m
    },
    "label"
  ), oe = M && /* @__PURE__ */ y.jsx(
    Jo,
    {
      ...x,
      ...W,
      size: (x == null ? void 0 : x.size) || W.size,
      id: (x == null ? void 0 : x.id) || A,
      children: h
    },
    "description"
  ), ce = /* @__PURE__ */ y.jsx(Pd, { children: f(S) }, "input"), pe = B && /* @__PURE__ */ Ci(
    Qo,
    {
      ...w,
      ...W,
      size: (w == null ? void 0 : w.size) || W.size,
      key: "error",
      id: (w == null ? void 0 : w.id) || E
    },
    g
  ), Te = p.map((ae) => {
    switch (ae) {
      case "label":
        return ge;
      case "input":
        return ce;
      case "description":
        return oe;
      case "error":
        return pe;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ y.jsx(
    Qx,
    {
      value: {
        getStyles: F,
        describedBy: Z,
        inputId: N,
        labelId: ie,
        ...r0(p, { hasDescription: M, hasError: B })
      },
      children: /* @__PURE__ */ y.jsx(
        V,
        {
          ref: t,
          variant: u,
          size: l,
          mod: [{ error: !!g }, T],
          ...F("root"),
          ...j,
          children: Te
        }
      )
    }
  );
});
Fa.classes = lt;
Fa.displayName = "@mantine/core/InputWrapper";
const i0 = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, a0 = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": de(t.size, "input-height"),
    "--input-fz": Ke(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : Ne(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? R(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? R(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? de(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), Ae = Vt((e, t) => {
  const n = k("Input", i0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    leftSectionWidth: b,
    rightSection: x,
    rightSectionProps: w,
    rightSectionWidth: v,
    rightSectionPointerEvents: S,
    leftSectionPointerEvents: C,
    variant: D,
    vars: P,
    pointer: $,
    multiline: T,
    radius: j,
    id: F,
    withAria: W,
    withErrorStyles: O,
    mod: L,
    inputSize: E,
    ...A
  } = n, { styleProps: N, rest: B } = _r(A), M = Un(), K = { offsetBottom: M == null ? void 0 : M.offsetBottom, offsetTop: M == null ? void 0 : M.offsetTop }, Z = Y({
    name: ["Input", l],
    props: u || n,
    classes: lt,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    stylesCtx: K,
    rootSelector: "wrapper",
    vars: P,
    varsResolver: a0
  }), ie = W ? {
    required: c,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": M == null ? void 0 : M.describedBy,
    id: (M == null ? void 0 : M.inputId) || F
  } : {};
  return /* @__PURE__ */ y.jsxs(
    V,
    {
      ...Z("wrapper"),
      ...N,
      ...f,
      mod: [
        {
          error: !!p && O,
          pointer: $,
          disabled: m,
          multiline: T,
          "data-with-right-section": !!x,
          "data-with-left-section": !!g
        },
        L
      ],
      variant: D,
      size: d,
      children: [
        g && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...h,
            "data-position": "left",
            ...Z("section", {
              className: h == null ? void 0 : h.className,
              style: h == null ? void 0 : h.style
            }),
            children: g
          }
        ),
        /* @__PURE__ */ y.jsx(
          V,
          {
            component: "input",
            ...B,
            ...ie,
            ref: t,
            required: c,
            mod: { disabled: m, error: !!p && O },
            variant: D,
            __size: E,
            ...Z("input")
          }
        ),
        x && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...w,
            "data-position": "right",
            ...Z("section", {
              className: w == null ? void 0 : w.className,
              style: w == null ? void 0 : w.style
            }),
            children: x
          }
        )
      ]
    }
  );
});
Ae.classes = lt;
Ae.Wrapper = Fa;
Ae.Label = Zo;
Ae.Error = Qo;
Ae.Description = Jo;
Ae.Placeholder = ka;
Ae.displayName = "@mantine/core/Input";
function c0(e, t, n) {
  const r = k(e, t, n), {
    label: o,
    description: s,
    error: i,
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
    wrapperProps: b,
    id: x,
    size: w,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: D,
    variant: P,
    vars: $,
    mod: T,
    ...j
  } = r, { styleProps: F, rest: W } = _r(j), O = {
    label: o,
    description: s,
    error: i,
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
    size: w,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: D,
    variant: P,
    id: x,
    mod: T,
    ...b
  };
  return {
    ...W,
    classNames: c,
    styles: l,
    unstyled: d,
    wrapperProps: { ...O, ...F },
    inputProps: {
      required: a,
      classNames: c,
      styles: l,
      unstyled: d,
      size: w,
      __staticSelector: f,
      __stylesApiProps: p || r,
      error: i,
      variant: P,
      id: x
    }
  };
}
const l0 = {
  __staticSelector: "InputBase",
  withAria: !0
}, on = Vt((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = c0("InputBase", l0, e);
  return /* @__PURE__ */ y.jsx(Ae.Wrapper, { ...r, children: /* @__PURE__ */ y.jsx(Ae, { ...n, ...o, ref: t }) });
});
on.classes = { ...Ae.classes, ...Ae.Wrapper.classes };
on.displayName = "@mantine/core/InputBase";
const [u0, Ba] = Bt(
  "Accordion component was not found in the tree"
);
function Va({ style: e, size: t = 16, ...n }) {
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: R(t), height: R(t), display: "block" },
      ...n,
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
Va.displayName = "@mantine/core/AccordionChevron";
const [d0, Kf] = Bt("Accordion.Item component was not found in the tree");
var Vr = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const f0 = {}, za = U((e, t) => {
  const {
    classNames: n,
    className: r,
    style: o,
    styles: s,
    vars: i,
    chevron: a,
    icon: c,
    onClick: l,
    onKeyDown: u,
    children: d,
    disabled: f,
    mod: p,
    ...m
  } = k("AccordionControl", f0, e), { value: g } = Kf(), h = Ba(), b = h.isItemActive(g), x = typeof h.order == "number", w = `h${h.order}`, v = /* @__PURE__ */ y.jsxs(
    rn,
    {
      ...m,
      ...h.getStyles("control", { className: r, classNames: n, style: o, styles: s, variant: h.variant }),
      unstyled: h.unstyled,
      mod: [
        "accordion-control",
        { active: b, "chevron-position": h.chevronPosition, disabled: f },
        p
      ],
      ref: t,
      onClick: (S) => {
        l == null || l(S), h.onChange(g);
      },
      type: "button",
      disabled: f,
      "aria-expanded": b,
      "aria-controls": h.getRegionId(g),
      id: h.getControlId(g),
      onKeyDown: Bd({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: h.loop,
        orientation: "vertical",
        onKeyDown: u
      }),
      children: [
        /* @__PURE__ */ y.jsx(
          V,
          {
            component: "span",
            mod: { rotate: !h.disableChevronRotation && b, position: h.chevronPosition },
            ...h.getStyles("chevron", { classNames: n, styles: s }),
            children: a || h.chevron
          }
        ),
        /* @__PURE__ */ y.jsx("span", { ...h.getStyles("label", { classNames: n, styles: s }), children: d }),
        c && /* @__PURE__ */ y.jsx(
          V,
          {
            component: "span",
            mod: { "chevron-position": h.chevronPosition },
            ...h.getStyles("icon", { classNames: n, styles: s }),
            children: c
          }
        )
      ]
    }
  );
  return x ? /* @__PURE__ */ y.jsx(w, { ...h.getStyles("itemTitle", { classNames: n, styles: s }), children: v }) : v;
});
za.displayName = "@mantine/core/AccordionControl";
za.classes = Vr;
const p0 = {}, Wa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: s, vars: i, value: a, mod: c, ...l } = k(
    "AccordionItem",
    p0,
    e
  ), u = Ba();
  return /* @__PURE__ */ y.jsx(d0, { value: { value: a }, children: /* @__PURE__ */ y.jsx(
    V,
    {
      ref: t,
      mod: [{ active: u.isItemActive(a) }, c],
      ...u.getStyles("item", { className: r, classNames: n, styles: s, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
Wa.displayName = "@mantine/core/AccordionItem";
Wa.classes = Vr;
const m0 = {}, Ga = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: s, vars: i, children: a, ...c } = k(
    "AccordionPanel",
    m0,
    e
  ), { value: l } = Kf(), u = Ba();
  return /* @__PURE__ */ y.jsx(
    af,
    {
      ref: t,
      ...u.getStyles("panel", { className: r, classNames: n, style: o, styles: s }),
      ...c,
      in: u.isItemActive(l),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(l),
      "aria-labelledby": u.getControlId(l),
      children: /* @__PURE__ */ y.jsx("div", { ...u.getStyles("content", { classNames: n, styles: s }), children: a })
    }
  );
});
Ga.displayName = "@mantine/core/AccordionPanel";
Ga.classes = Vr;
const h0 = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ y.jsx(Va, {})
}, g0 = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : R(n),
    "--accordion-radius": r === void 0 ? void 0 : Ne(r)
  }
});
function se(e) {
  const t = k("Accordion", h0, e), {
    classNames: n,
    className: r,
    style: o,
    styles: s,
    unstyled: i,
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
    chevronPosition: b,
    chevronSize: x,
    order: w,
    chevron: v,
    variant: S,
    radius: C,
    ...D
  } = t, P = Ot(p), [$, T] = jt({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: f
  }), j = (O) => Array.isArray($) ? $.includes(O) : O === $, F = (O) => {
    const L = Array.isArray($) ? $.includes(O) ? $.filter((E) => E !== O) : [...$, O] : O === $ ? null : O;
    T(L);
  }, W = Y({
    name: "Accordion",
    classes: Vr,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: s,
    unstyled: i,
    vars: a,
    varsResolver: g0
  });
  return /* @__PURE__ */ y.jsx(
    u0,
    {
      value: {
        isItemActive: j,
        onChange: F,
        getControlId: ho(
          `${P}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: ho(
          `${P}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: h,
        chevronPosition: b,
        order: w,
        chevron: v,
        loop: m,
        getStyles: W,
        variant: S,
        unstyled: i
      },
      children: /* @__PURE__ */ y.jsx(V, { ...W("root"), id: P, ...D, variant: S, "data-accordion": !0, children: c })
    }
  );
}
const y0 = (e) => e;
se.extend = y0;
se.classes = Vr;
se.displayName = "@mantine/core/Accordion";
se.Item = Wa;
se.Panel = Ga;
se.Control = za;
se.Chevron = Va;
var Yf = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const b0 = {}, v0 = (e, { radius: t, color: n, variant: r, autoContrast: o }) => {
  const s = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    variant: r || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": t === void 0 ? void 0 : Ne(t),
      "--alert-bg": n || r ? s.background : void 0,
      "--alert-color": s.color,
      "--alert-bd": n || r ? s.border : void 0
    }
  };
}, Ha = U((e, t) => {
  const n = k("Alert", b0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    closeButtonLabel: b,
    variant: x,
    autoContrast: w,
    ...v
  } = n, S = Y({
    name: "Alert",
    classes: Yf,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: v0
  }), C = Ot(p), D = d && `${C}-title` || void 0, P = `${C}-body`;
  return /* @__PURE__ */ y.jsx(
    V,
    {
      id: C,
      ...S("root", { variant: x }),
      variant: x,
      ref: t,
      ...v,
      role: "alert",
      "aria-describedby": P,
      "aria-labelledby": D,
      children: /* @__PURE__ */ y.jsxs("div", { ...S("wrapper"), children: [
        m && /* @__PURE__ */ y.jsx("div", { ...S("icon"), children: m }),
        /* @__PURE__ */ y.jsxs("div", { ...S("body"), children: [
          d && /* @__PURE__ */ y.jsx("div", { ...S("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ y.jsx("span", { id: D, ...S("label"), children: d }) }),
          f && /* @__PURE__ */ y.jsx("div", { id: P, ...S("message"), "data-variant": x, children: f })
        ] }),
        g && /* @__PURE__ */ y.jsx(
          Br,
          {
            ...S("closeButton"),
            onClick: h,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": b,
            unstyled: a
          }
        )
      ] })
    }
  );
});
Ha.classes = Yf;
Ha.displayName = "@mantine/core/Alert";
var Xf = { root: "m_b6d8b162" };
function x0(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const w0 = {
  inherit: !1
}, S0 = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: s }) => ({
  root: {
    "--text-fz": Ke(o),
    "--text-lh": dy(o),
    "--text-gradient": t === "gradient" ? Ai(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": s ? st(s, e) : void 0
  }
}), $e = Vt((e, t) => {
  const n = k("Text", w0, e), {
    lineClamp: r,
    truncate: o,
    inline: s,
    inherit: i,
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
    mod: b,
    size: x,
    ...w
  } = n, v = Y({
    name: ["Text", l],
    props: n,
    classes: Xf,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: g,
    vars: u,
    varsResolver: S0
  });
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...v("root", { focusable: !0 }),
      ref: t,
      component: c ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": x0(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": s,
          "data-inherit": i
        },
        b
      ],
      size: x,
      ...w
    }
  );
});
$e.classes = Xf;
$e.displayName = "@mantine/core/Text";
function Jf(e) {
  return typeof e == "string" ? { value: e, label: e } : "value" in e && !("label" in e) ? { value: e.value, label: e.value, disabled: e.disabled } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => Jf(t))
  } : e;
}
function Qf(e) {
  return e ? e.map((t) => Jf(t)) : [];
}
function Ua(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...Ua(n.items) } : (t[n.value] = n, t), {});
}
var ze = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const C0 = {
  error: null
}, P0 = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": de(t, "combobox-chevron-size")
  }
}), qa = U((e, t) => {
  const n = k("ComboboxChevron", C0, e), { size: r, error: o, style: s, className: i, classNames: a, styles: c, unstyled: l, vars: u, mod: d, ...f } = n, p = Y({
    name: "ComboboxChevron",
    classes: ze,
    props: n,
    style: s,
    className: i,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: P0,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ y.jsx(
    V,
    {
      component: "svg",
      ...f,
      ...p("chevron"),
      size: r,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, d],
      ref: t,
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
});
qa.classes = ze;
qa.displayName = "@mantine/core/ComboboxChevron";
const [D0, ut] = Bt(
  "Combobox component was not found in tree"
), Zf = te(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, s) => /* @__PURE__ */ y.jsx(
    Br,
    {
      ref: s,
      size: e || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...o,
      onMouseDown: (i) => {
        i.preventDefault(), t == null || t(i);
      },
      onClick: (i) => {
        r(), n == null || n(i);
      }
    }
  )
);
Zf.displayName = "@mantine/core/ComboboxClearButton";
const E0 = {}, Ka = U((e, t) => {
  const { classNames: n, styles: r, className: o, style: s, hidden: i, ...a } = k(
    "ComboboxDropdown",
    E0,
    e
  ), c = ut();
  return /* @__PURE__ */ y.jsx(
    St.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": i || void 0,
      ...c.getStyles("dropdown", { className: o, style: s, classNames: n, styles: r })
    }
  );
});
Ka.classes = ze;
Ka.displayName = "@mantine/core/ComboboxDropdown";
const I0 = {
  refProp: "ref"
}, ep = U((e, t) => {
  const { children: n, refProp: r } = k("ComboboxDropdownTarget", I0, e);
  if (ut(), !nn(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ y.jsx(St.Target, { ref: t, refProp: r, children: n });
});
ep.displayName = "@mantine/core/ComboboxDropdownTarget";
const R0 = {}, Ya = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: s, vars: i, ...a } = k(
    "ComboboxEmpty",
    R0,
    e
  ), c = ut();
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ref: t,
      ...c.getStyles("empty", { className: r, classNames: n, styles: s, style: o }),
      ...a
    }
  );
});
Ya.classes = ze;
Ya.displayName = "@mantine/core/ComboboxEmpty";
function Xa({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: s
}) {
  const i = ut(), [a, c] = q(null), l = (d) => {
    if (e == null || e(d), !i.readOnly && t) {
      if (d.nativeEvent.isComposing)
        return;
      if (d.nativeEvent.code === "ArrowDown" && (d.preventDefault(), i.store.dropdownOpened ? c(i.store.selectNextOption()) : (i.store.openDropdown("keyboard"), c(i.store.selectActiveOption()))), d.nativeEvent.code === "ArrowUp" && (d.preventDefault(), i.store.dropdownOpened ? c(i.store.selectPreviousOption()) : (i.store.openDropdown("keyboard"), c(i.store.selectActiveOption()))), d.nativeEvent.code === "Enter" || d.nativeEvent.code === "NumpadEnter") {
        if (d.nativeEvent.keyCode === 229)
          return;
        const f = i.store.getSelectedOptionIndex();
        i.store.dropdownOpened && f !== -1 ? (d.preventDefault(), i.store.clickSelectedOption()) : o === "button" && (d.preventDefault(), i.store.openDropdown("keyboard"));
      }
      d.nativeEvent.code === "Escape" && i.store.closeDropdown("keyboard"), d.nativeEvent.code === "Space" && o === "button" && (d.preventDefault(), i.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...n ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(i.store.listId && i.store.dropdownOpened) || void 0,
      "aria-controls": i.store.listId,
      "aria-activedescendant": i.store.dropdownOpened && a || void 0,
      autoComplete: s,
      "data-expanded": i.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": i.store.dropdownOpened || void 0
    } : {},
    onKeyDown: l
  };
}
const $0 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, tp = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: s,
    withExpandedAttribute: i,
    targetType: a,
    autoComplete: c,
    ...l
  } = k("ComboboxEventsTarget", $0, e);
  if (!nn(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = ut(), d = Xa({
    targetType: a,
    withAriaAttributes: s,
    withKeyboardNavigation: o,
    withExpandedAttribute: i,
    onKeyDown: n.props.onKeyDown,
    autoComplete: c
  });
  return bn(n, {
    ...d,
    ...l,
    [r]: _e(t, u.store.targetRef, n == null ? void 0 : n.ref)
  });
});
tp.displayName = "@mantine/core/ComboboxEventsTarget";
const O0 = {}, Ja = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: s, vars: i, ...a } = k(
    "ComboboxFooter",
    O0,
    e
  ), c = ut();
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ref: t,
      ...c.getStyles("footer", { className: r, classNames: n, style: o, styles: s }),
      ...a,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
Ja.classes = ze;
Ja.displayName = "@mantine/core/ComboboxFooter";
const A0 = {}, Qa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: s, vars: i, children: a, label: c, ...l } = k(
    "ComboboxGroup",
    A0,
    e
  ), u = ut();
  return /* @__PURE__ */ y.jsxs(
    V,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: s }),
      ...l,
      children: [
        c && /* @__PURE__ */ y.jsx("div", { ...u.getStyles("groupLabel", { classNames: n, styles: s }), children: c }),
        a
      ]
    }
  );
});
Qa.classes = ze;
Qa.displayName = "@mantine/core/ComboboxGroup";
const N0 = {}, Za = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: s, vars: i, ...a } = k(
    "ComboboxHeader",
    N0,
    e
  ), c = ut();
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ref: t,
      ...c.getStyles("header", { className: r, classNames: n, style: o, styles: s }),
      ...a,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
Za.classes = ze;
Za.displayName = "@mantine/core/ComboboxHeader";
function np({
  value: e,
  valuesDivider: t = ",",
  ...n
}) {
  return /* @__PURE__ */ y.jsx(
    "input",
    {
      type: "hidden",
      value: Array.isArray(e) ? e.join(t) : e || "",
      ...n
    }
  );
}
np.displayName = "@mantine/core/ComboboxHiddenInput";
const T0 = {}, ec = U((e, t) => {
  const n = k("ComboboxOption", T0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    vars: a,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: d,
    onMouseOver: f,
    disabled: p,
    selected: m,
    mod: g,
    ...h
  } = n, b = ut(), x = Dd(), w = l || x;
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...b.getStyles("option", { className: o, classNames: r, styles: i, style: s }),
      ...h,
      ref: t,
      id: w,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": p, "combobox-selected": m },
        g
      ],
      role: "option",
      onClick: (v) => {
        var S;
        p ? v.preventDefault() : ((S = b.onOptionSubmit) == null || S.call(b, n.value, n), c == null || c(v));
      },
      onMouseDown: (v) => {
        v.preventDefault(), d == null || d(v);
      },
      onMouseOver: (v) => {
        b.resetSelectionOnOptionHover && b.store.resetSelectedOption(), f == null || f(v);
      }
    }
  );
});
ec.classes = ze;
ec.displayName = "@mantine/core/ComboboxOption";
const L0 = {}, tc = U((e, t) => {
  const n = k("ComboboxOptions", L0, e), { classNames: r, className: o, style: s, styles: i, id: a, onMouseDown: c, labelledBy: l, ...u } = n, d = ut(), f = Ot(a);
  return H(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ y.jsx(
    V,
    {
      ref: t,
      ...d.getStyles("options", { className: o, style: s, classNames: r, styles: i }),
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
tc.classes = ze;
tc.displayName = "@mantine/core/ComboboxOptions";
const j0 = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, nc = U((e, t) => {
  const n = k("ComboboxSearch", j0, e), {
    classNames: r,
    styles: o,
    unstyled: s,
    vars: i,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = n, f = ut(), p = f.getStyles("search"), m = Xa({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c,
    autoComplete: "off"
  });
  return /* @__PURE__ */ y.jsx(
    Ae,
    {
      ref: _e(t, f.store.searchRef),
      classNames: [{ input: p.className }, r],
      styles: [{ input: p.style }, o],
      size: u || f.size,
      ...m,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
nc.classes = ze;
nc.displayName = "@mantine/core/ComboboxSearch";
const _0 = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, rp = U((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: s,
    withExpandedAttribute: i,
    targetType: a,
    autoComplete: c,
    ...l
  } = k("ComboboxTarget", _0, e);
  if (!nn(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = ut(), d = Xa({
    targetType: a,
    withAriaAttributes: s,
    withKeyboardNavigation: o,
    withExpandedAttribute: i,
    onKeyDown: n.props.onKeyDown,
    autoComplete: c
  }), f = bn(n, {
    ...d,
    ...l
  });
  return /* @__PURE__ */ y.jsx(St.Target, { ref: _e(t, u.store.targetRef), children: f });
});
rp.displayName = "@mantine/core/ComboboxTarget";
function M0(e, t, n) {
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
function k0(e, t, n) {
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
function F0(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function rc({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: s = !0,
  scrollBehavior: i = "instant"
} = {}) {
  const [a, c] = jt({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), l = z(null), u = z(-1), d = z(null), f = z(null), p = z(-1), m = z(-1), g = z(-1), h = ee(
    (E = "unknown") => {
      a || (c(!0), o == null || o(E));
    },
    [c, o, a]
  ), b = ee(
    (E = "unknown") => {
      a && (c(!1), r == null || r(E));
    },
    [c, r, a]
  ), x = ee(
    (E = "unknown") => {
      a ? b(E) : h(E);
    },
    [b, h, a]
  ), w = ee(() => {
    const E = document.querySelector(`#${l.current} [data-combobox-selected]`);
    E == null || E.removeAttribute("data-combobox-selected"), E == null || E.removeAttribute("aria-selected");
  }, []), v = ee(
    (E) => {
      const A = document.getElementById(l.current), N = A == null ? void 0 : A.querySelectorAll("[data-combobox-option]");
      if (!N)
        return null;
      const B = E >= N.length ? 0 : E < 0 ? N.length - 1 : E;
      return u.current = B, N != null && N[B] && !N[B].hasAttribute("data-combobox-disabled") ? (w(), N[B].setAttribute("data-combobox-selected", "true"), N[B].setAttribute("aria-selected", "true"), N[B].scrollIntoView({ block: "nearest", behavior: i }), N[B].id) : null;
    },
    [i, w]
  ), S = ee(() => {
    const E = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (E) {
      const A = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), N = Array.from(A).findIndex((B) => B === E);
      return v(N);
    }
    return v(0);
  }, [v]), C = ee(
    () => v(
      k0(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        s
      )
    ),
    [v, s]
  ), D = ee(
    () => v(
      M0(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        s
      )
    ),
    [v, s]
  ), P = ee(
    () => v(
      F0(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), $ = ee(
    (E = "selected", A) => {
      g.current = window.setTimeout(() => {
        var M;
        const N = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), B = Array.from(N).findIndex(
          (K) => K.hasAttribute(`data-combobox-${E}`)
        );
        u.current = B, A != null && A.scrollIntoView && ((M = N[B]) == null || M.scrollIntoView({ block: "nearest", behavior: i }));
      }, 0);
    },
    []
  ), T = ee(() => {
    u.current = -1, w();
  }, [w]), j = ee(() => {
    const E = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), A = E == null ? void 0 : E[u.current];
    A == null || A.click();
  }, []), F = ee((E) => {
    l.current = E;
  }, []), W = ee(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), O = ee(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), L = ee(() => u.current, []);
  return H(
    () => () => {
      window.clearTimeout(p.current), window.clearTimeout(m.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: h,
    closeDropdown: b,
    toggleDropdown: x,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: L,
    selectOption: v,
    selectFirstOption: P,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: D,
    resetSelectedOption: T,
    updateSelectedOptionIndex: $,
    listId: l.current,
    setListId: F,
    clickSelectedOption: j,
    searchRef: d,
    focusSearchInput: W,
    targetRef: f,
    focusTarget: O
  };
}
const B0 = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, V0 = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": Ke(t),
    "--combobox-option-padding": de(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : R(n),
    "--combobox-option-fz": Ke(t),
    "--combobox-option-padding": de(t, "combobox-option-padding")
  }
});
function X(e) {
  const t = k("Combobox", B0, e), {
    classNames: n,
    styles: r,
    unstyled: o,
    children: s,
    store: i,
    vars: a,
    onOptionSubmit: c,
    onClose: l,
    size: u,
    dropdownPadding: d,
    resetSelectionOnOptionHover: f,
    __staticSelector: p,
    readOnly: m,
    ...g
  } = t, h = rc(), b = i || h, x = Y({
    name: p || "Combobox",
    classes: ze,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: V0
  }), w = () => {
    l == null || l(), b.closeDropdown();
  };
  return /* @__PURE__ */ y.jsx(
    D0,
    {
      value: {
        getStyles: x,
        store: b,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: f,
        readOnly: m
      },
      children: /* @__PURE__ */ y.jsx(
        St,
        {
          opened: b.dropdownOpened,
          ...g,
          onClose: w,
          withRoles: !1,
          unstyled: o,
          children: s
        }
      )
    }
  );
}
const z0 = (e) => e;
X.extend = z0;
X.classes = ze;
X.displayName = "@mantine/core/Combobox";
X.Target = rp;
X.Dropdown = Ka;
X.Options = tc;
X.Option = ec;
X.Search = nc;
X.Empty = Ya;
X.Chevron = qa;
X.Footer = Ja;
X.Header = Za;
X.EventsTarget = tp;
X.DropdownTarget = ep;
X.Group = Qa;
X.ClearButton = Zf;
X.HiddenInput = np;
var op = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const W0 = op, sp = te(
  ({
    __staticSelector: e,
    __stylesApiProps: t,
    className: n,
    classNames: r,
    styles: o,
    unstyled: s,
    children: i,
    label: a,
    description: c,
    id: l,
    disabled: u,
    error: d,
    size: f,
    labelPosition: p = "left",
    bodyElement: m = "div",
    labelElement: g = "label",
    variant: h,
    style: b,
    vars: x,
    mod: w,
    ...v
  }, S) => {
    const C = Y({
      name: e,
      props: t,
      className: n,
      style: b,
      classes: op,
      classNames: r,
      styles: o,
      unstyled: s
    });
    return /* @__PURE__ */ y.jsx(
      V,
      {
        ...C("root"),
        ref: S,
        __vars: {
          "--label-fz": Ke(f),
          "--label-lh": de(f, "label-lh")
        },
        mod: [{ "label-position": p }, w],
        variant: h,
        size: f,
        ...v,
        children: /* @__PURE__ */ y.jsxs(
          V,
          {
            component: m,
            htmlFor: m === "label" ? l : void 0,
            ...C("body"),
            children: [
              i,
              /* @__PURE__ */ y.jsxs("div", { ...C("labelWrapper"), "data-disabled": u || void 0, children: [
                a && /* @__PURE__ */ y.jsx(
                  V,
                  {
                    component: g,
                    htmlFor: g === "label" ? l : void 0,
                    ...C("label"),
                    "data-disabled": u || void 0,
                    children: a
                  }
                ),
                c && /* @__PURE__ */ y.jsx(Ae.Description, { size: f, __inheritStyles: !1, ...C("description"), children: c }),
                d && typeof d != "boolean" && /* @__PURE__ */ y.jsx(Ae.Error, { size: f, __inheritStyles: !1, ...C("error"), children: d })
              ] })
            ]
          }
        )
      }
    );
  }
);
sp.displayName = "@mantine/core/InlineInput";
const ip = tn(null), G0 = ip.Provider, ap = () => wt(ip), [H0, U0] = zo();
var cp = { card: "m_26775b0a" };
const q0 = {
  withBorder: !0
}, K0 = (e, { radius: t }) => ({
  card: {
    "--card-radius": Ne(t)
  }
}), oc = U((e, t) => {
  const n = k("CheckboxCard", q0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    checked: l,
    mod: u,
    withBorder: d,
    value: f,
    onClick: p,
    ...m
  } = n, g = Y({
    name: "CheckboxCard",
    classes: cp,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: K0,
    rootSelector: "card"
  }), h = ap(), b = typeof l == "boolean" ? l : (h == null ? void 0 : h.value.includes(f || "")) || !1;
  return /* @__PURE__ */ y.jsx(H0, { value: { checked: b }, children: /* @__PURE__ */ y.jsx(
    rn,
    {
      ref: t,
      mod: [{ "with-border": d, checked: b }, u],
      ...g("card"),
      ...m,
      role: "checkbox",
      "aria-checked": b,
      onClick: (x) => {
        p == null || p(x), h == null || h.onChange(f || "");
      }
    }
  ) });
});
oc.displayName = "@mantine/core/CheckboxCard";
oc.classes = cp;
function Y0({ children: e, role: t }) {
  const n = Un();
  return n ? /* @__PURE__ */ y.jsx("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
const X0 = {}, sc = U((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: s, wrapperProps: i, children: a, readOnly: c, ...l } = k("CheckboxGroup", X0, e), [u, d] = jt({
    value: n,
    defaultValue: r,
    finalValue: [],
    onChange: o
  }), f = (p) => {
    const m = typeof p == "string" ? p : p.currentTarget.value;
    !c && d(
      u.includes(m) ? u.filter((g) => g !== m) : [...u, m]
    );
  };
  return /* @__PURE__ */ y.jsx(G0, { value: { value: u, onChange: f, size: s }, children: /* @__PURE__ */ y.jsx(
    Ae.Wrapper,
    {
      size: s,
      ref: t,
      ...i,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ y.jsx(Y0, { role: "group", children: a })
    }
  ) });
});
sc.classes = Ae.Wrapper.classes;
sc.displayName = "@mantine/core/CheckboxGroup";
function lp({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: R(e), height: R(e), ...t } : t;
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
      "aria-hidden": !0,
      ...n,
      children: /* @__PURE__ */ y.jsx(
        "path",
        {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
function up({ indeterminate: e, ...t }) {
  return e ? /* @__PURE__ */ y.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...t,
      children: /* @__PURE__ */ y.jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    }
  ) : /* @__PURE__ */ y.jsx(lp, { ...t });
}
var dp = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const J0 = {
  icon: up
}, Q0 = (e, { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }) => {
  const a = xn({ color: n || e.primaryColor, theme: e }), c = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    indicator: {
      "--checkbox-size": de(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Ne(t),
      "--checkbox-color": s === "outline" ? c : st(n, e),
      "--checkbox-icon-color": o ? st(o, e) : fa(i, e) ? Ho({ color: n, theme: e, autoContrast: i }) : void 0
    }
  };
}, ic = U((e, t) => {
  const n = k("CheckboxIndicator", J0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    icon: l,
    indeterminate: u,
    radius: d,
    color: f,
    iconColor: p,
    autoContrast: m,
    checked: g,
    mod: h,
    variant: b,
    disabled: x,
    ...w
  } = n, v = l, S = Y({
    name: "CheckboxIndicator",
    classes: dp,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: Q0,
    rootSelector: "indicator"
  }), C = U0(), D = typeof g == "boolean" || typeof u == "boolean" ? g || u : (C == null ? void 0 : C.checked) || !1;
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ref: t,
      ...S("indicator", { variant: b }),
      variant: b,
      mod: [{ checked: D, disabled: x }, h],
      ...w,
      children: /* @__PURE__ */ y.jsx(v, { indeterminate: u, ...S("icon") })
    }
  );
});
ic.displayName = "@mantine/core/CheckboxIndicator";
ic.classes = dp;
var fp = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const Z0 = {
  labelPosition: "right",
  icon: up
}, ew = (e, { radius: t, color: n, size: r, iconColor: o, variant: s, autoContrast: i }) => {
  const a = xn({ color: n || e.primaryColor, theme: e }), c = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    root: {
      "--checkbox-size": de(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Ne(t),
      "--checkbox-color": s === "outline" ? c : st(n, e),
      "--checkbox-icon-color": o ? st(o, e) : fa(i, e) ? Ho({ color: n, theme: e, autoContrast: i }) : void 0
    }
  };
}, wn = U((e, t) => {
  const n = k("Checkbox", Z0, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    labelPosition: b,
    description: x,
    error: w,
    disabled: v,
    variant: S,
    indeterminate: C,
    icon: D,
    rootRef: P,
    iconColor: $,
    onChange: T,
    autoContrast: j,
    mod: F,
    ...W
  } = n, O = ap(), L = f || (O == null ? void 0 : O.size), E = D, A = Y({
    name: "Checkbox",
    props: n,
    classes: fp,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: ew
  }), { styleProps: N, rest: B } = _r(W), M = Ot(d), K = O ? {
    checked: O.value.includes(B.value),
    onChange: (Z) => {
      O.onChange(Z), T == null || T(Z);
    }
  } : {};
  return /* @__PURE__ */ y.jsx(
    sp,
    {
      ...A("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: M,
      size: L,
      labelPosition: b,
      label: u,
      description: x,
      error: w,
      disabled: v,
      classNames: r,
      styles: i,
      unstyled: a,
      "data-checked": K.checked || h || void 0,
      variant: S,
      ref: P,
      mod: F,
      ...N,
      ...m,
      children: /* @__PURE__ */ y.jsxs(V, { ...A("inner"), mod: { "data-label-position": b }, children: [
        /* @__PURE__ */ y.jsx(
          V,
          {
            component: "input",
            id: M,
            ref: t,
            checked: h,
            disabled: v,
            mod: { error: !!w, indeterminate: C },
            ...A("input", { focusable: !0, variant: S }),
            onChange: T,
            ...B,
            ...K,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ y.jsx(E, { indeterminate: C, ...A("icon") })
      ] })
    }
  );
});
wn.classes = { ...fp, ...W0 };
wn.displayName = "@mantine/core/Checkbox";
wn.Group = sc;
wn.Indicator = ic;
wn.Card = oc;
function jn(e) {
  return "group" in e;
}
function pp({
  options: e,
  search: t,
  limit: n
}) {
  const r = t.trim().toLowerCase(), o = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s];
    if (o.length === n)
      return o;
    jn(i) && o.push({
      group: i.group,
      items: pp({
        options: i.items,
        search: t,
        limit: n - o.length
      })
    }), jn(i) || i.label.toLowerCase().includes(r) && o.push(i);
  }
  return o;
}
function tw(e) {
  if (e.length === 0)
    return !0;
  for (const t of e)
    if (!("group" in t) || t.items.length > 0)
      return !1;
  return !0;
}
function mp(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (jn(n))
        mp(n.items, t);
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
function nw(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function hp({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: s
}) {
  if (!jn(e)) {
    const a = nw(n, e.value), c = t && a && /* @__PURE__ */ y.jsx(lp, { className: ze.optionsDropdownCheckIcon }), l = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      r === "left" && c,
      /* @__PURE__ */ y.jsx("span", { children: e.label }),
      r === "right" && c
    ] });
    return /* @__PURE__ */ y.jsx(
      X.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: at({ [ze.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": a || void 0,
        "aria-selected": a,
        active: a,
        children: typeof s == "function" ? s({ option: e, checked: a }) : l
      }
    );
  }
  const i = e.items.map((a) => /* @__PURE__ */ y.jsx(
    hp,
    {
      data: a,
      value: n,
      unstyled: o,
      withCheckIcon: t,
      checkIconPosition: r,
      renderOption: s
    },
    a.value
  ));
  return /* @__PURE__ */ y.jsx(X.Group, { label: e.group, children: i });
}
function gp({
  data: e,
  hidden: t,
  hiddenWhenEmpty: n,
  filter: r,
  search: o,
  limit: s,
  maxDropdownHeight: i,
  withScrollArea: a = !0,
  filterOptions: c = !0,
  withCheckIcon: l = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: f,
  unstyled: p,
  labelId: m,
  renderOption: g,
  scrollAreaProps: h,
  "aria-label": b
}) {
  mp(e);
  const w = typeof o == "string" ? (r || pp)({
    options: e,
    search: c ? o : "",
    limit: s ?? 1 / 0
  }) : e, v = tw(w), S = w.map((C) => /* @__PURE__ */ y.jsx(
    hp,
    {
      data: C,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: p,
      renderOption: g
    },
    jn(C) ? C.group : C.value
  ));
  return /* @__PURE__ */ y.jsx(X.Dropdown, { hidden: t || n && v, children: /* @__PURE__ */ y.jsxs(X.Options, { labelledBy: m, "aria-label": b, children: [
    a ? /* @__PURE__ */ y.jsx(
      kr.Autosize,
      {
        mah: i ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...h,
        children: S
      }
    ) : S,
    v && f && /* @__PURE__ */ y.jsx(X.Empty, { children: f })
  ] }) });
}
var es = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const uu = {
  orientation: "horizontal"
}, rw = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": R(t) }
}), ac = U((e, t) => {
  const n = k("ButtonGroup", uu, e), {
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    mod: f,
    ...p
  } = k("ButtonGroup", uu, e), m = Y({
    name: "ButtonGroup",
    props: n,
    classes: es,
    className: r,
    style: o,
    classNames: s,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: rw,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...m("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": c }, f],
      role: "group",
      ...p
    }
  );
});
ac.classes = es;
ac.displayName = "@mantine/core/ButtonGroup";
const ow = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${R(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, sw = {}, iw = (e, { radius: t, color: n, gradient: r, variant: o, size: s, justify: i, autoContrast: a }) => {
  const c = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    gradient: r,
    variant: o || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--button-justify": i,
      "--button-height": de(s, "button-height"),
      "--button-padding-x": de(s, "button-padding-x"),
      "--button-fz": s != null && s.includes("compact") ? Ke(s.replace("compact-", "")) : Ke(s),
      "--button-radius": t === void 0 ? void 0 : Ne(t),
      "--button-bg": n || o ? c.background : void 0,
      "--button-hover": n || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": n || o ? c.border : void 0,
      "--button-hover-color": n || o ? c.hoverColor : void 0
    }
  };
}, br = Vt((e, t) => {
  const n = k("Button", sw, e), {
    style: r,
    vars: o,
    className: s,
    color: i,
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
    classNames: b,
    styles: x,
    unstyled: w,
    "data-disabled": v,
    autoContrast: S,
    mod: C,
    ...D
  } = n, P = Y({
    name: "Button",
    props: n,
    classes: es,
    className: s,
    style: r,
    classNames: b,
    styles: x,
    unstyled: w,
    vars: o,
    varsResolver: iw
  }), $ = !!l, T = !!u;
  return /* @__PURE__ */ y.jsxs(
    rn,
    {
      ref: t,
      ...P("root", { active: !a && !m && !v }),
      unstyled: w,
      variant: f,
      disabled: a || m,
      mod: [
        {
          disabled: a || v,
          loading: m,
          block: d,
          "with-left-section": $,
          "with-right-section": T
        },
        C
      ],
      ...D,
      children: [
        /* @__PURE__ */ y.jsx(Gn, { mounted: !!m, transition: ow, duration: 150, children: (j) => /* @__PURE__ */ y.jsx(V, { component: "span", ...P("loader", { style: j }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(
          Hn,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("span", { ...P("inner"), children: [
          l && /* @__PURE__ */ y.jsx(V, { component: "span", ...P("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ y.jsx(V, { component: "span", mod: { loading: m }, ...P("label"), children: c }),
          u && /* @__PURE__ */ y.jsx(V, { component: "span", ...P("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
br.classes = es;
br.displayName = "@mantine/core/Button";
br.Group = ac;
var yp = { root: "m_de3d2490", colorOverlay: "m_862f3d1b", shadowOverlay: "m_98ae7f22", alphaOverlay: "m_95709ac0", childrenOverlay: "m_93e74e3" };
const du = {
  withShadow: !0
}, aw = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : Ne(t),
    "--cs-size": R(n)
  }
}), vr = Vt((e, t) => {
  const n = k("ColorSwatch", du, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    color: l,
    size: u,
    radius: d,
    withShadow: f,
    children: p,
    variant: m,
    ...g
  } = k("ColorSwatch", du, n), h = Y({
    name: "ColorSwatch",
    props: n,
    classes: yp,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: aw
  });
  return /* @__PURE__ */ y.jsxs(
    V,
    {
      ref: t,
      variant: m,
      size: u,
      ...h("root", { focusable: !0 }),
      ...g,
      children: [
        /* @__PURE__ */ y.jsx("span", { ...h("alphaOverlay") }),
        f && /* @__PURE__ */ y.jsx("span", { ...h("shadowOverlay") }),
        /* @__PURE__ */ y.jsx("span", { ...h("colorOverlay", { style: { backgroundColor: l } }) }),
        /* @__PURE__ */ y.jsx("span", { ...h("childrenOverlay"), children: p })
      ]
    }
  );
});
vr.classes = yp;
vr.displayName = "@mantine/core/ColorSwatch";
var bp = { root: "m_7485cace" };
const cw = {}, lw = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : de(t, "container-size")
  }
}), cc = U((e, t) => {
  const n = k("Container", cw, e), { classNames: r, className: o, style: s, styles: i, unstyled: a, vars: c, fluid: l, mod: u, ...d } = n, f = Y({
    name: "Container",
    classes: bp,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: lw
  });
  return /* @__PURE__ */ y.jsx(V, { ref: t, mod: [{ fluid: l }, u], ...f("root"), ...d });
});
cc.classes = bp;
cc.displayName = "@mantine/core/Container";
function uw({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = z(-1), s = z(-1), i = () => {
    window.clearTimeout(o.current), window.clearTimeout(s.current);
  }, a = () => {
    i(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, c = () => {
    i(), r === 0 || r === void 0 ? t() : s.current = window.setTimeout(t, r);
  };
  return H(() => i, []), { openDropdown: a, closeDropdown: c };
}
const [dw, vp] = Bt(
  "Grid component was not found in tree"
), Vi = (e, t) => e === "content" ? "auto" : e === "auto" ? "0rem" : e ? `${100 / (t / e)}%` : void 0, fu = (e, t, n) => n || e === "auto" ? "100%" : e === "content" ? "unset" : Vi(e, t), pu = (e, t) => {
  if (e)
    return e === "auto" || t ? "1" : "auto";
}, mu = (e, t) => e === 0 ? "0" : e ? `${100 / (t / e)}%` : void 0;
function fw({ span: e, order: t, offset: n, selector: r }) {
  var f;
  const o = We(), s = vp(), a = cr(e) === void 0 ? 12 : cr(e), c = Tr({
    "--col-order": (f = cr(t)) == null ? void 0 : f.toString(),
    "--col-flex-grow": pu(a, s.grow),
    "--col-flex-basis": Vi(a, s.columns),
    "--col-width": a === "content" ? "auto" : void 0,
    "--col-max-width": fu(a, s.columns, s.grow),
    "--col-offset": mu(cr(n), s.columns)
  }), l = Oe(o.breakpoints).reduce(
    (p, m) => {
      var g;
      return p[m] || (p[m] = {}), typeof t == "object" && t[m] !== void 0 && (p[m]["--col-order"] = (g = t[m]) == null ? void 0 : g.toString()), typeof e == "object" && e[m] !== void 0 && (p[m]["--col-flex-grow"] = pu(e[m], s.grow), p[m]["--col-flex-basis"] = Vi(e[m], s.columns), p[m]["--col-width"] = e[m] === "content" ? "auto" : void 0, p[m]["--col-max-width"] = fu(
        e[m],
        s.columns,
        s.grow
      )), typeof n == "object" && n[m] !== void 0 && (p[m]["--col-offset"] = mu(n[m], s.columns)), p;
    },
    {}
  ), d = Vd(Oe(l), o).filter(
    (p) => Oe(l[p.value]).length > 0
  ).map((p) => ({
    query: `(min-width: ${o.breakpoints[p.value]})`,
    styles: l[p.value]
  }));
  return /* @__PURE__ */ y.jsx(pa, { styles: c, media: d, selector: r });
}
var lc = { root: "m_410352e9", inner: "m_dee7bd2f", col: "m_96bdd299" };
const pw = {
  span: 12
}, uc = U((e, t) => {
  const n = k("GridCol", pw, e), { classNames: r, className: o, style: s, styles: i, vars: a, span: c, order: l, offset: u, ...d } = n, f = vp(), p = ha();
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(
      fw,
      {
        selector: `.${p}`,
        span: c,
        order: l,
        offset: u
      }
    ),
    /* @__PURE__ */ y.jsx(
      V,
      {
        ref: t,
        ...f.getStyles("col", {
          className: at(o, p),
          style: s,
          classNames: r,
          styles: i
        }),
        ...d
      }
    )
  ] });
});
uc.classes = lc;
uc.displayName = "@mantine/core/GridCol";
function mw({ gutter: e, selector: t }) {
  const n = We(), r = Tr({
    "--grid-gutter": go(cr(e))
  }), o = Oe(n.breakpoints).reduce(
    (a, c) => (a[c] || (a[c] = {}), typeof e == "object" && e[c] !== void 0 && (a[c]["--grid-gutter"] = go(e[c])), a),
    {}
  ), i = Vd(Oe(o), n).filter(
    (a) => Oe(o[a.value]).length > 0
  ).map((a) => ({
    query: `(min-width: ${n.breakpoints[a.value]})`,
    styles: o[a.value]
  }));
  return /* @__PURE__ */ y.jsx(pa, { styles: r, media: i, selector: t });
}
const hw = {
  gutter: "md",
  grow: !1,
  columns: 12
}, gw = (e, { justify: t, align: n, overflow: r }) => ({
  root: {
    "--grid-justify": t,
    "--grid-align": n,
    "--grid-overflow": r
  }
}), Tt = U((e, t) => {
  const n = k("Grid", hw, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    grow: l,
    gutter: u,
    columns: d,
    align: f,
    justify: p,
    children: m,
    ...g
  } = n, h = Y({
    name: "Grid",
    classes: lc,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: gw
  }), b = ha();
  return /* @__PURE__ */ y.jsxs(dw, { value: { getStyles: h, grow: l, columns: d }, children: [
    /* @__PURE__ */ y.jsx(mw, { selector: `.${b}`, ...n }),
    /* @__PURE__ */ y.jsx(V, { ref: t, ...h("root", { className: b }), ...g, children: /* @__PURE__ */ y.jsx("div", { ...h("inner"), children: m }) })
  ] });
});
Tt.classes = lc;
Tt.displayName = "@mantine/core/Grid";
Tt.Col = uc;
const [yw, xp] = Bt(
  "HoverCard component was not found in the tree"
), bw = {};
function wp(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = k(
    "HoverCardDropdown",
    bw,
    e
  ), s = xp(), i = yo(n, s.openDropdown), a = yo(r, s.closeDropdown);
  return /* @__PURE__ */ y.jsx(St.Dropdown, { onMouseEnter: i, onMouseLeave: a, ...o, children: t });
}
wp.displayName = "@mantine/core/HoverCardDropdown";
const vw = {
  refProp: "ref"
}, Sp = te((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...s } = k(
    "HoverCardTarget",
    vw,
    e
  );
  if (!nn(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const i = xp(), a = yo(n.props.onMouseEnter, i.openDropdown), c = yo(n.props.onMouseLeave, i.closeDropdown), l = { onMouseEnter: a, onMouseLeave: c };
  return /* @__PURE__ */ y.jsx(St.Target, { refProp: r, ref: t, ...s, children: bn(
    n,
    o ? { [o]: l } : l
  ) });
});
Sp.displayName = "@mantine/core/HoverCardTarget";
const xw = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function mn(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: s, initiallyOpened: i, ...a } = k(
    "HoverCard",
    xw,
    e
  ), [c, { open: l, close: u }] = Ry(i, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = uw({ open: l, close: u, openDelay: o, closeDelay: s });
  return /* @__PURE__ */ y.jsx(yw, { value: { openDropdown: d, closeDropdown: f }, children: /* @__PURE__ */ y.jsx(St, { ...a, opened: c, __staticSelector: "HoverCard", children: t }) });
}
mn.displayName = "@mantine/core/HoverCard";
mn.Target = Sp;
mn.Dropdown = wp;
mn.extend = (e) => e;
function Cp(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0)
        continue;
      n[r] = e[r];
    }
  return n;
}
var Pp = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const hu = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: Lr("overlay")
}, ww = (e, { zIndex: t }) => ({
  root: {
    "--lo-z-index": t == null ? void 0 : t.toString()
  }
}), dc = U((e, t) => {
  const n = k("LoadingOverlay", hu, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    transitionProps: l,
    loaderProps: u,
    overlayProps: d,
    visible: f,
    zIndex: p,
    ...m
  } = n, g = We(), h = Y({
    name: "LoadingOverlay",
    classes: Pp,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: ww
  }), b = { ...hu.overlayProps, ...d };
  return /* @__PURE__ */ y.jsx(Gn, { transition: "fade", ...l, mounted: !!f, children: (x) => /* @__PURE__ */ y.jsxs(V, { ...h("root", { style: x }), ref: t, ...m, children: [
    /* @__PURE__ */ y.jsx(Hn, { ...h("loader"), unstyled: a, ...u }),
    /* @__PURE__ */ y.jsx(
      Co,
      {
        ...b,
        ...h("overlay"),
        darkHidden: !0,
        unstyled: a,
        color: (d == null ? void 0 : d.color) || g.white
      }
    ),
    /* @__PURE__ */ y.jsx(
      Co,
      {
        ...b,
        ...h("overlay"),
        lightHidden: !0,
        unstyled: a,
        color: (d == null ? void 0 : d.color) || g.colors.dark[5]
      }
    )
  ] }) });
});
dc.classes = Pp;
dc.displayName = "@mantine/core/LoadingOverlay";
const [Sw, fc] = zo(), [Cw, Pw] = zo();
var ts = { root: "m_7cda1cd6", "root--default": "m_44da308b", "root--contrast": "m_e3a01f8", label: "m_1e0e6180", remove: "m_ae386778", group: "m_1dcfd90b" };
const Dw = {}, Ew = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? de(t) : de(n, "pg-gap")
  }
}), pc = U((e, t) => {
  const n = k("PillGroup", Dw, e), { classNames: r, className: o, style: s, styles: i, unstyled: a, vars: c, size: l, disabled: u, ...d } = n, f = fc(), p = (f == null ? void 0 : f.size) || l || void 0, m = Y({
    name: "PillGroup",
    classes: ts,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: Ew,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(Cw, { value: { size: p, disabled: u }, children: /* @__PURE__ */ y.jsx(V, { ref: t, size: p, ...m("group"), ...d }) });
});
pc.classes = ts;
pc.displayName = "@mantine/core/PillGroup";
const Iw = {
  variant: "default"
}, Rw = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": de(n, "pill-fz"),
    "--pill-height": de(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : Ne(t)
  }
}), xr = U((e, t) => {
  const n = k("Pill", Iw, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    mod: b,
    ...x
  } = n, w = Pw(), v = fc(), S = g || (w == null ? void 0 : w.size) || void 0, C = (v == null ? void 0 : v.variant) === "filled" ? "contrast" : l || "default", D = Y({
    name: "Pill",
    classes: ts,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: c,
    varsResolver: Rw,
    stylesCtx: { size: S }
  });
  return /* @__PURE__ */ y.jsxs(
    V,
    {
      component: "span",
      ref: t,
      variant: C,
      size: S,
      ...D("root", { variant: C }),
      mod: [
        { "with-remove": d && !h, disabled: h || (w == null ? void 0 : w.disabled) },
        b
      ],
      ...x,
      children: [
        /* @__PURE__ */ y.jsx("span", { ...D("label"), children: u }),
        d && /* @__PURE__ */ y.jsx(
          Br,
          {
            variant: "transparent",
            radius: m,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: a,
            ...p,
            ...D("remove", {
              className: p == null ? void 0 : p.className,
              style: p == null ? void 0 : p.style
            }),
            onMouseDown: (P) => {
              var $;
              P.preventDefault(), P.stopPropagation(), ($ = p == null ? void 0 : p.onMouseDown) == null || $.call(p, P);
            },
            onClick: (P) => {
              var $;
              P.stopPropagation(), f == null || f(), ($ = p == null ? void 0 : p.onClick) == null || $.call(p, P);
            }
          }
        )
      ]
    }
  );
});
xr.classes = ts;
xr.displayName = "@mantine/core/Pill";
xr.Group = pc;
var Dp = { field: "m_45c4369d" };
const $w = {
  type: "visible"
}, mc = U((e, t) => {
  const n = k("PillsInputField", $w, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    vars: c,
    type: l,
    disabled: u,
    id: d,
    pointer: f,
    mod: p,
    ...m
  } = n, g = fc(), h = Un(), b = Y({
    name: "PillsInputField",
    classes: Dp,
    props: n,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    rootSelector: "field"
  }), x = u || (g == null ? void 0 : g.disabled);
  return /* @__PURE__ */ y.jsx(
    V,
    {
      component: "input",
      ref: _e(t, g == null ? void 0 : g.fieldRef),
      "data-type": l,
      disabled: x,
      mod: [{ disabled: x, pointer: f }, p],
      ...b("field"),
      ...m,
      id: (h == null ? void 0 : h.inputId) || d,
      "aria-invalid": g == null ? void 0 : g.hasError,
      "aria-describedby": h == null ? void 0 : h.describedBy,
      type: "text",
      onMouseDown: (w) => !f && w.stopPropagation()
    }
  );
});
mc.classes = Dp;
mc.displayName = "@mantine/core/PillsInputField";
const Ow = {}, Po = U((e, t) => {
  const n = k("PillsInput", Ow, e), {
    children: r,
    onMouseDown: o,
    onClick: s,
    size: i,
    disabled: a,
    __staticSelector: c,
    error: l,
    variant: u,
    ...d
  } = n, f = z();
  return /* @__PURE__ */ y.jsx(Sw, { value: { fieldRef: f, size: i, disabled: a, hasError: !!l, variant: u }, children: /* @__PURE__ */ y.jsx(
    on,
    {
      size: i,
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
        p.preventDefault(), s == null || s(p), (m = f.current) == null || m.focus();
      },
      ...d,
      multiline: !0,
      disabled: a,
      __staticSelector: c || "PillsInput",
      withAria: !1,
      children: r
    }
  ) });
});
Po.displayName = "@mantine/core/PillsInput";
Po.Field = mc;
function Aw({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, s) => (jn(s) ? o.push({
    group: s.group,
    items: s.items.filter(
      (i) => n.indexOf(i.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(s.value.toLowerCase().trim()) === -1 && o.push(s), o), []);
}
const Nw = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, dr = U((e, t) => {
  const n = k("MultiSelect", Nw, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
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
    defaultDropdownOpened: b,
    onDropdownOpen: x,
    onDropdownClose: w,
    selectFirstOptionOnChange: v,
    onOptionSubmit: S,
    comboboxProps: C,
    filter: D,
    limit: P,
    withScrollArea: $,
    maxDropdownHeight: T,
    searchValue: j,
    defaultSearchValue: F,
    onSearchChange: W,
    readOnly: O,
    disabled: L,
    onFocus: E,
    onBlur: A,
    onPaste: N,
    radius: B,
    rightSection: M,
    rightSectionWidth: K,
    rightSectionPointerEvents: Z,
    rightSectionProps: ie,
    leftSection: ge,
    leftSectionWidth: oe,
    leftSectionPointerEvents: ce,
    leftSectionProps: pe,
    inputContainer: Te,
    inputWrapperOrder: ae,
    withAsterisk: Se,
    labelProps: Ct,
    descriptionProps: me,
    errorProps: he,
    wrapperProps: fe,
    description: ft,
    label: Pt,
    error: ye,
    maxValues: At,
    searchable: Ee,
    nothingFoundMessage: be,
    withCheckIcon: pt,
    checkIconPosition: Wt,
    hidePickedOptions: Me,
    withErrorStyles: Ge,
    name: Hr,
    form: Ur,
    id: qr,
    clearable: ke,
    clearButtonProps: mt,
    hiddenInputProps: Qn,
    placeholder: al,
    hiddenInputValuesDivider: Ph,
    required: Dh,
    mod: Eh,
    renderOption: Ih,
    onRemove: Nt,
    onClear: _s,
    scrollAreaProps: Rh,
    ...cl
  } = n, Ms = Ot(qr), ks = Qf(g), Cn = Ua(ks), tt = rc({
    opened: h,
    defaultOpened: b,
    onDropdownOpen: x,
    onDropdownClose: () => {
      w == null || w(), tt.resetSelectedOption();
    }
  }), {
    styleProps: $h,
    rest: { type: D$, autoComplete: Oh, ...Ah }
  } = _r(cl), [Ie, Zn] = jt({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [Fs, Kr] = jt({
    value: j,
    defaultValue: F,
    finalValue: "",
    onChange: W
  }), Bs = Y({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: i,
    unstyled: a
  }), { resolvedClassNames: ll, resolvedStyles: ul } = tf({
    props: n,
    styles: i,
    classNames: r
  }), Nh = (ue) => {
    p == null || p(ue), ue.key === " " && !Ee && (ue.preventDefault(), tt.toggleDropdown()), ue.key === "Backspace" && Fs.length === 0 && Ie.length > 0 && (Nt == null || Nt(Ie[Ie.length - 1]), Zn(Ie.slice(0, Ie.length - 1)));
  }, Th = Ie.map((ue, zs) => {
    var dl, fl;
    return /* @__PURE__ */ y.jsx(
      xr,
      {
        withRemoveButton: !O && !((dl = Cn[ue]) != null && dl.disabled),
        onRemove: () => {
          Zn(Ie.filter((jh) => ue !== jh)), Nt == null || Nt(ue);
        },
        unstyled: a,
        disabled: L,
        ...Bs("pill"),
        children: ((fl = Cn[ue]) == null ? void 0 : fl.label) || ue
      },
      `${ue}-${zs}`
    );
  });
  H(() => {
    v && tt.selectFirstOption();
  }, [v, Ie]);
  const Vs = ke && Ie.length > 0 && !L && !O && /* @__PURE__ */ y.jsx(
    X.ClearButton,
    {
      size: l,
      ...mt,
      onClear: () => {
        _s == null || _s(), Zn([]), Kr("");
      }
    }
  ), Lh = Aw({ data: ks, value: Ie });
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      X,
      {
        store: tt,
        classNames: ll,
        styles: ul,
        unstyled: a,
        size: l,
        readOnly: O,
        __staticSelector: "MultiSelect",
        onOptionSubmit: (ue) => {
          S == null || S(ue), Kr(""), tt.updateSelectedOptionIndex("selected"), Ie.includes(Cn[ue].value) ? (Zn(Ie.filter((zs) => zs !== Cn[ue].value)), Nt == null || Nt(Cn[ue].value)) : Ie.length < At && Zn([...Ie, Cn[ue].value]);
        },
        ...C,
        children: [
          /* @__PURE__ */ y.jsx(X.DropdownTarget, { children: /* @__PURE__ */ y.jsx(
            Po,
            {
              ...$h,
              __staticSelector: "MultiSelect",
              classNames: ll,
              styles: ul,
              unstyled: a,
              size: l,
              className: o,
              style: s,
              variant: m,
              disabled: L,
              radius: B,
              rightSection: M || Vs || /* @__PURE__ */ y.jsx(X.Chevron, { size: l, error: ye, unstyled: a }),
              rightSectionPointerEvents: Z || (Vs ? "all" : "none"),
              rightSectionWidth: K,
              rightSectionProps: ie,
              leftSection: ge,
              leftSectionWidth: oe,
              leftSectionPointerEvents: ce,
              leftSectionProps: pe,
              inputContainer: Te,
              inputWrapperOrder: ae,
              withAsterisk: Se,
              labelProps: Ct,
              descriptionProps: me,
              errorProps: he,
              wrapperProps: fe,
              description: ft,
              label: Pt,
              error: ye,
              multiline: !0,
              withErrorStyles: Ge,
              __stylesApiProps: {
                ...n,
                rightSectionPointerEvents: Z || (Vs ? "all" : "none"),
                multiline: !0
              },
              pointer: !Ee,
              onClick: () => Ee ? tt.openDropdown() : tt.toggleDropdown(),
              "data-expanded": tt.dropdownOpened || void 0,
              id: Ms,
              required: Dh,
              mod: Eh,
              children: /* @__PURE__ */ y.jsxs(xr.Group, { disabled: L, unstyled: a, ...Bs("pillsList"), children: [
                Th,
                /* @__PURE__ */ y.jsx(X.EventsTarget, { autoComplete: Oh, children: /* @__PURE__ */ y.jsx(
                  Po.Field,
                  {
                    ...Ah,
                    ref: t,
                    id: Ms,
                    placeholder: al,
                    type: !Ee && !al ? "hidden" : "visible",
                    ...Bs("inputField"),
                    unstyled: a,
                    onFocus: (ue) => {
                      E == null || E(ue), Ee && tt.openDropdown();
                    },
                    onBlur: (ue) => {
                      A == null || A(ue), tt.closeDropdown(), Kr("");
                    },
                    onKeyDown: Nh,
                    value: Fs,
                    onChange: (ue) => {
                      Kr(ue.currentTarget.value), Ee && tt.openDropdown(), v && tt.selectFirstOption();
                    },
                    disabled: L,
                    readOnly: O || !Ee,
                    pointer: !Ee
                  }
                ) })
              ] })
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            gp,
            {
              data: Me ? Lh : ks,
              hidden: O || L,
              filter: D,
              search: Fs,
              limit: P,
              hiddenWhenEmpty: !be,
              withScrollArea: $,
              maxDropdownHeight: T,
              filterOptions: Ee,
              value: Ie,
              checkIconPosition: Wt,
              withCheckIcon: pt,
              nothingFoundMessage: be,
              unstyled: a,
              labelId: Pt ? `${Ms}-label` : void 0,
              "aria-label": Pt ? void 0 : cl["aria-label"],
              renderOption: Ih,
              scrollAreaProps: Rh
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      X.HiddenInput,
      {
        name: Hr,
        valuesDivider: Ph,
        value: Ie,
        form: Ur,
        disabled: L,
        ...Qn
      }
    )
  ] });
});
dr.classes = { ...on.classes, ...X.classes };
dr.displayName = "@mantine/core/MultiSelect";
const Tw = {
  duration: 100,
  transition: "fade"
};
function Lw(e, t) {
  return { ...Tw, ...t, ...e };
}
function jw({
  offset: e,
  position: t,
  defaultOpened: n
}) {
  const [r, o] = q(n), s = z(), { x: i, y: a, elements: c, refs: l, update: u, placement: d } = Ta({
    placement: t,
    middleware: [
      $a({
        crossAxis: !0,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  }), f = d.includes("right") ? e : t.includes("left") ? e * -1 : 0, p = d.includes("bottom") ? e : t.includes("top") ? e * -1 : 0, m = ee(
    ({ clientX: g, clientY: h }) => {
      l.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: g,
            y: h,
            left: g + f,
            top: h + p,
            right: g,
            bottom: h
          };
        }
      });
    },
    [c.reference]
  );
  return H(() => {
    if (l.floating.current) {
      const g = s.current;
      g.addEventListener("mousemove", m);
      const h = Lt(l.floating.current);
      return h.forEach((b) => {
        b.addEventListener("scroll", u);
      }), () => {
        g.removeEventListener("mousemove", m), h.forEach((b) => {
          b.removeEventListener("scroll", u);
        });
      };
    }
  }, [c.reference, l.floating.current, u, m, r]), { handleMouseMove: m, x: i, y: a, opened: r, setOpened: o, boundaryRef: s, floating: l.setFloating };
}
var ns = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
const _w = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  defaultOpened: !1,
  position: "right",
  zIndex: Lr("popover")
}, Mw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Ne(t),
    "--tooltip-bg": n ? st(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), hc = U((e, t) => {
  const n = k("TooltipFloating", _w, e), {
    children: r,
    refProp: o,
    withinPortal: s,
    style: i,
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
    zIndex: b,
    disabled: x,
    defaultOpened: w,
    variant: v,
    vars: S,
    portalProps: C,
    ...D
  } = n, P = We(), $ = Y({
    name: "TooltipFloating",
    props: n,
    classes: ns,
    className: a,
    style: i,
    classNames: c,
    styles: l,
    unstyled: u,
    rootSelector: "tooltip",
    vars: S,
    varsResolver: Mw
  }), { handleMouseMove: T, x: j, y: F, opened: W, boundaryRef: O, floating: L, setOpened: E } = jw({
    offset: m,
    position: g,
    defaultOpened: w
  });
  if (!nn(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const A = _e(O, r.ref, t), N = (M) => {
    var K, Z;
    (Z = (K = r.props).onMouseEnter) == null || Z.call(K, M), T(M), E(!0);
  }, B = (M) => {
    var K, Z;
    (Z = (K = r.props).onMouseLeave) == null || Z.call(K, M), E(!1);
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(Yo, { ...C, withinPortal: s, children: /* @__PURE__ */ y.jsx(
      V,
      {
        ...D,
        ...$("tooltip", {
          style: {
            ...ga(i, P),
            zIndex: b,
            display: !x && W ? "block" : "none",
            top: (F && Math.round(F)) ?? "",
            left: (j && Math.round(j)) ?? ""
          }
        }),
        variant: v,
        ref: L,
        mod: { multiline: h },
        children: p
      }
    ) }),
    bn(r, {
      ...r.props,
      [o]: A,
      onMouseEnter: N,
      onMouseLeave: B
    })
  ] });
});
hc.classes = ns;
hc.displayName = "@mantine/core/TooltipFloating";
const Ep = tn(!1), kw = Ep.Provider, Fw = () => wt(Ep), Bw = {
  openDelay: 0,
  closeDelay: 0
};
function Ip(e) {
  const { openDelay: t, closeDelay: n, children: r } = k("TooltipGroup", Bw, e);
  return /* @__PURE__ */ y.jsx(kw, { value: !0, children: /* @__PURE__ */ y.jsx(px, { delay: { open: t, close: n }, children: r }) });
}
Ip.displayName = "@mantine/core/TooltipGroup";
function Vw(e) {
  var C, D, P;
  const [t, n] = q(e.defaultOpened), o = typeof e.opened == "boolean" ? e.opened : t, s = Fw(), i = Ot(), { delay: a, currentId: c, setCurrentId: l } = jf(), u = ee(
    ($) => {
      n($), $ && l(i);
    },
    [l, i]
  ), {
    x: d,
    y: f,
    context: p,
    refs: m,
    update: g,
    placement: h,
    middlewareData: { arrow: { x: b, y: x } = {} }
  } = Ta({
    strategy: e.strategy,
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      Of(e.offset),
      $a({ padding: 8 }),
      ki(),
      Af({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [Fi()] : []
    ]
  }), { getReferenceProps: w, getFloatingProps: v } = xx([
    fx(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: s ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((D = e.events) != null && D.touch)
    }),
    vx(p, { enabled: (P = e.events) == null ? void 0 : P.focus, visibleOnly: !0 }),
    Sx(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    yx(p, { enabled: typeof e.opened > "u" }),
    mx(p, { id: i })
  ]);
  zf({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), Xt(() => {
    var $;
    ($ = e.onPositionChange) == null || $.call(e, h);
  }, [h]);
  const S = o && c && c !== i;
  return {
    x: d,
    y: f,
    arrowX: b,
    arrowY: x,
    reference: m.setReference,
    floating: m.setFloating,
    getFloatingProps: v,
    getReferenceProps: w,
    isGroupPhase: S,
    opened: o,
    placement: h
  };
}
const gu = {
  position: "top",
  refProp: "ref",
  withinPortal: !0,
  inline: !1,
  defaultOpened: !1,
  arrowSize: 4,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  offset: 5,
  transitionProps: { duration: 100, transition: "fade" },
  events: { hover: !0, focus: !1, touch: !1 },
  zIndex: Lr("popover"),
  positionDependencies: []
}, zw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Ne(t),
    "--tooltip-bg": n ? st(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), _n = U((e, t) => {
  const n = k("Tooltip", gu, e), {
    children: r,
    position: o,
    refProp: s,
    label: i,
    openDelay: a,
    closeDelay: c,
    onPositionChange: l,
    opened: u,
    defaultOpened: d,
    withinPortal: f,
    radius: p,
    color: m,
    classNames: g,
    styles: h,
    unstyled: b,
    style: x,
    className: w,
    withArrow: v,
    arrowSize: S,
    arrowOffset: C,
    arrowRadius: D,
    arrowPosition: P,
    offset: $,
    transitionProps: T,
    multiline: j,
    events: F,
    zIndex: W,
    disabled: O,
    positionDependencies: L,
    onClick: E,
    onMouseEnter: A,
    onMouseLeave: N,
    inline: B,
    variant: M,
    keepMounted: K,
    vars: Z,
    portalProps: ie,
    mod: ge,
    floatingStrategy: oe,
    ...ce
  } = k("Tooltip", gu, n), { dir: pe } = Mr(), Te = z(null), ae = Vw({
    position: _f(pe, o),
    closeDelay: c,
    openDelay: a,
    onPositionChange: l,
    opened: u,
    defaultOpened: d,
    events: F,
    arrowRef: Te,
    arrowOffset: C,
    offset: typeof $ == "number" ? $ + (v ? S / 2 : 0) : $,
    positionDependencies: [...L, r],
    inline: B,
    strategy: oe
  }), Se = Y({
    name: "Tooltip",
    props: n,
    classes: ns,
    className: w,
    style: x,
    classNames: g,
    styles: h,
    unstyled: b,
    rootSelector: "tooltip",
    vars: Z,
    varsResolver: zw
  });
  if (!nn(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const Ct = _e(ae.reference, r.ref, t), me = Lw(T, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(Yo, { ...ie, withinPortal: f, children: /* @__PURE__ */ y.jsx(
      Gn,
      {
        ...me,
        keepMounted: K,
        mounted: !O && !!ae.opened,
        duration: ae.isGroupPhase ? 10 : me.duration,
        children: (he) => /* @__PURE__ */ y.jsxs(
          V,
          {
            ...ce,
            variant: M,
            mod: [{ multiline: j }, ge],
            ...ae.getFloatingProps({
              ref: ae.floating,
              className: Se("tooltip").className,
              style: {
                ...Se("tooltip").style,
                ...he,
                zIndex: W,
                top: ae.y ?? 0,
                left: ae.x ?? 0
              }
            }),
            children: [
              i,
              /* @__PURE__ */ y.jsx(
                La,
                {
                  ref: Te,
                  arrowX: ae.arrowX,
                  arrowY: ae.arrowY,
                  visible: v,
                  position: ae.placement,
                  arrowSize: S,
                  arrowOffset: C,
                  arrowRadius: D,
                  arrowPosition: P,
                  ...Se("arrow")
                }
              )
            ]
          }
        )
      }
    ) }),
    bn(
      r,
      ae.getReferenceProps({
        onClick: E,
        onMouseEnter: A,
        onMouseLeave: N,
        onMouseMove: n.onMouseMove,
        onPointerDown: n.onPointerDown,
        onPointerEnter: n.onPointerEnter,
        [s]: Ct,
        className: at(w, r.props.className),
        ...r.props
      })
    )
  ] });
});
_n.classes = ns;
_n.displayName = "@mantine/core/Tooltip";
_n.Floating = hc;
_n.Group = Ip;
const Ww = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, gc = U((e, t) => {
  const n = k("Select", Ww, e), {
    classNames: r,
    styles: o,
    unstyled: s,
    vars: i,
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
    defaultValue: b,
    selectFirstOptionOnChange: x,
    onOptionSubmit: w,
    comboboxProps: v,
    readOnly: S,
    disabled: C,
    filter: D,
    limit: P,
    withScrollArea: $,
    maxDropdownHeight: T,
    size: j,
    searchable: F,
    rightSection: W,
    checkIconPosition: O,
    withCheckIcon: L,
    nothingFoundMessage: E,
    name: A,
    form: N,
    searchValue: B,
    defaultSearchValue: M,
    onSearchChange: K,
    allowDeselect: Z,
    error: ie,
    rightSectionPointerEvents: ge,
    id: oe,
    clearable: ce,
    clearButtonProps: pe,
    hiddenInputProps: Te,
    renderOption: ae,
    onClear: Se,
    autoComplete: Ct,
    scrollAreaProps: me,
    ...he
  } = n, fe = Ht(() => Qf(g), [g]), ft = Ht(() => Ua(fe), [fe]), Pt = Ot(oe), [ye, At, Ee] = jt({
    value: h,
    defaultValue: b,
    finalValue: null,
    onChange: m
  }), be = typeof ye == "string" ? ft[ye] : void 0, pt = $y(be), [Wt, Me] = jt({
    value: B,
    defaultValue: M,
    finalValue: be ? be.label : "",
    onChange: K
  }), Ge = rc({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: () => {
      u == null || u(), Ge.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      l == null || l(), Ge.resetSelectedOption();
    }
  }), { resolvedClassNames: Hr, resolvedStyles: Ur } = tf({
    props: n,
    styles: o,
    classNames: r
  });
  H(() => {
    x && Ge.selectFirstOption();
  }, [x, ye]), H(() => {
    h === null && Me(""), typeof h == "string" && be && ((pt == null ? void 0 : pt.value) !== be.value || (pt == null ? void 0 : pt.label) !== be.label) && Me(be.label);
  }, [h, be]);
  const qr = ce && !!ye && !C && !S && /* @__PURE__ */ y.jsx(
    X.ClearButton,
    {
      size: j,
      ...pe,
      onClear: () => {
        At(null, null), Me(""), Se == null || Se();
      }
    }
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      X,
      {
        store: Ge,
        __staticSelector: "Select",
        classNames: Hr,
        styles: Ur,
        unstyled: s,
        readOnly: S,
        onOptionSubmit: (ke) => {
          w == null || w(ke);
          const mt = Z && ft[ke].value === ye ? null : ft[ke], Qn = mt ? mt.value : null;
          Qn !== ye && At(Qn, mt), !Ee && Me(typeof Qn == "string" && (mt == null ? void 0 : mt.label) || ""), Ge.closeDropdown();
        },
        size: j,
        ...v,
        children: [
          /* @__PURE__ */ y.jsx(X.Target, { targetType: F ? "input" : "button", autoComplete: Ct, children: /* @__PURE__ */ y.jsx(
            on,
            {
              id: Pt,
              ref: t,
              rightSection: W || qr || /* @__PURE__ */ y.jsx(X.Chevron, { size: j, error: ie, unstyled: s }),
              rightSectionPointerEvents: ge || (qr ? "all" : "none"),
              ...he,
              size: j,
              __staticSelector: "Select",
              disabled: C,
              readOnly: S || !F,
              value: Wt,
              onChange: (ke) => {
                Me(ke.currentTarget.value), Ge.openDropdown(), x && Ge.selectFirstOption();
              },
              onFocus: (ke) => {
                F && Ge.openDropdown(), d == null || d(ke);
              },
              onBlur: (ke) => {
                var mt;
                F && Ge.closeDropdown(), Me(ye != null && ((mt = ft[ye]) == null ? void 0 : mt.label) || ""), f == null || f(ke);
              },
              onClick: (ke) => {
                F ? Ge.openDropdown() : Ge.toggleDropdown(), p == null || p(ke);
              },
              classNames: Hr,
              styles: Ur,
              unstyled: s,
              pointer: !F,
              error: ie
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            gp,
            {
              data: fe,
              hidden: S || C,
              filter: D,
              search: Wt,
              limit: P,
              hiddenWhenEmpty: !E,
              withScrollArea: $,
              maxDropdownHeight: T,
              filterOptions: F && (be == null ? void 0 : be.label) !== Wt,
              value: ye,
              checkIconPosition: O,
              withCheckIcon: L,
              nothingFoundMessage: E,
              unstyled: s,
              labelId: he.label ? `${Pt}-label` : void 0,
              "aria-label": he.label ? void 0 : he["aria-label"],
              renderOption: ae,
              scrollAreaProps: me
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      X.HiddenInput,
      {
        value: ye,
        name: A,
        form: N,
        disabled: C,
        ...Te
      }
    )
  ] });
});
gc.classes = { ...on.classes, ...X.classes };
gc.displayName = "@mantine/core/Select";
const Gw = {}, wr = U((e, t) => {
  const { w: n, h: r, miw: o, mih: s, ...i } = k("Space", Gw, e);
  return /* @__PURE__ */ y.jsx(V, { ref: t, ...i, w: n, miw: o ?? n, h: r, mih: s ?? r });
});
wr.displayName = "@mantine/core/Space";
const [Hw, yc] = Bt(
  "Tabs component was not found in the tree"
);
var zr = { root: "m_89d60db1", "list--default": "m_576c9d4", list: "m_89d33d6d", panel: "m_b0c91715", tab: "m_4ec4dce6", tabSection: "m_fc420b1f", "tab--default": "m_539e827b", "list--outline": "m_6772fbd5", "tab--outline": "m_b59ab47c", "tab--pills": "m_c3381914" };
const Uw = {}, bc = U((e, t) => {
  const n = k("TabsList", Uw, e), { children: r, className: o, grow: s, justify: i, classNames: a, styles: c, style: l, mod: u, ...d } = n, f = yc();
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...d,
      ...f.getStyles("list", {
        className: o,
        style: l,
        classNames: a,
        styles: c,
        props: n,
        variant: f.variant
      }),
      ref: t,
      role: "tablist",
      variant: f.variant,
      mod: [
        {
          grow: s,
          orientation: f.orientation,
          placement: f.orientation === "vertical" && f.placement,
          inverted: f.inverted
        },
        u
      ],
      "aria-orientation": f.orientation,
      __vars: { "--tabs-justify": i },
      children: r
    }
  );
});
bc.classes = zr;
bc.displayName = "@mantine/core/TabsList";
const qw = {}, vc = U((e, t) => {
  const n = k("TabsPanel", qw, e), { children: r, className: o, value: s, classNames: i, styles: a, style: c, mod: l, ...u } = n, d = yc(), f = d.value === s, p = d.keepMounted || n.keepMounted || f ? r : null;
  return /* @__PURE__ */ y.jsx(
    V,
    {
      ...u,
      ...d.getStyles("panel", {
        className: o,
        classNames: i,
        styles: a,
        style: [c, f ? void 0 : { display: "none" }],
        props: n
      }),
      ref: t,
      mod: [{ orientation: d.orientation }, l],
      role: "tabpanel",
      id: d.getPanelId(s),
      "aria-labelledby": d.getTabId(s),
      children: p
    }
  );
});
vc.classes = zr;
vc.displayName = "@mantine/core/TabsPanel";
const Kw = {}, xc = U((e, t) => {
  const n = k("TabsTab", Kw, e), {
    className: r,
    children: o,
    rightSection: s,
    leftSection: i,
    value: a,
    onClick: c,
    onKeyDown: l,
    disabled: u,
    color: d,
    style: f,
    classNames: p,
    styles: m,
    vars: g,
    mod: h,
    ...b
  } = n, x = We(), { dir: w } = Mr(), v = yc(), S = a === v.value, C = (P) => {
    v.onChange(v.allowTabDeactivation && a === v.value ? null : a), c == null || c(P);
  }, D = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ y.jsxs(
    rn,
    {
      ...b,
      ...v.getStyles("tab", { className: r, style: f, variant: v.variant, ...D }),
      disabled: u,
      unstyled: v.unstyled,
      variant: v.variant,
      mod: [
        {
          active: S,
          disabled: u,
          orientation: v.orientation,
          inverted: v.inverted,
          placement: v.orientation === "vertical" && v.placement
        },
        h
      ],
      ref: t,
      role: "tab",
      id: v.getTabId(a),
      "aria-selected": S,
      tabIndex: S || v.value === null ? 0 : -1,
      "aria-controls": v.getPanelId(a),
      onClick: C,
      __vars: { "--tabs-color": d ? st(d, x) : void 0 },
      onKeyDown: Bd({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: v.activateTabWithKeyboard,
        loop: v.loop,
        orientation: v.orientation || "horizontal",
        dir: w,
        onKeyDown: l
      }),
      children: [
        i && /* @__PURE__ */ y.jsx("span", { ...v.getStyles("tabSection", D), "data-position": "left", children: i }),
        o && /* @__PURE__ */ y.jsx("span", { ...v.getStyles("tabLabel", D), children: o }),
        s && /* @__PURE__ */ y.jsx("span", { ...v.getStyles("tabSection", D), "data-position": "right", children: s })
      ]
    }
  );
});
xc.classes = zr;
xc.displayName = "@mantine/core/TabsTab";
const yu = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", Yw = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, Xw = (e, { radius: t, color: n, autoContrast: r }) => ({
  root: {
    "--tabs-radius": Ne(t),
    "--tabs-color": st(n, e),
    "--tabs-text-color": fa(r, e) ? Ho({ color: n, theme: e, autoContrast: r }) : void 0
  }
}), yt = U((e, t) => {
  const n = k("Tabs", Yw, e), {
    defaultValue: r,
    value: o,
    onChange: s,
    orientation: i,
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
    keepMounted: b,
    classNames: x,
    styles: w,
    unstyled: v,
    className: S,
    style: C,
    vars: D,
    autoContrast: P,
    mod: $,
    ...T
  } = n, j = Ot(l), [F, W] = jt({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: s
  }), O = Y({
    name: "Tabs",
    props: n,
    classes: zr,
    className: S,
    style: C,
    classNames: x,
    styles: w,
    unstyled: v,
    vars: D,
    varsResolver: Xw
  });
  return /* @__PURE__ */ y.jsx(
    Hw,
    {
      value: {
        placement: h,
        value: F,
        orientation: i,
        id: j,
        loop: c,
        activateTabWithKeyboard: u,
        getTabId: ho(`${j}-tab`, yu),
        getPanelId: ho(`${j}-panel`, yu),
        onChange: W,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: b,
        unstyled: v,
        getStyles: O
      },
      children: /* @__PURE__ */ y.jsx(
        V,
        {
          ref: t,
          id: j,
          variant: f,
          mod: [
            {
              orientation: i,
              inverted: i === "horizontal" && g,
              placement: i === "vertical" && h
            },
            $
          ],
          ...O("root"),
          ...T,
          children: a
        }
      )
    }
  );
});
yt.classes = zr;
yt.displayName = "@mantine/core/Tabs";
yt.Tab = xc;
yt.Panel = vc;
yt.List = bc;
const Jw = {}, wc = U((e, t) => {
  const n = k("TextInput", Jw, e);
  return /* @__PURE__ */ y.jsx(on, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
wc.classes = on.classes;
wc.displayName = "@mantine/core/TextInput";
const Qw = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Zw(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return Qw.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: R(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var Rp = { root: "m_8a5d1357" };
const eS = {
  order: 1
}, tS = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
  const s = Zw(t, n);
  return {
    root: {
      "--title-fw": s.fontWeight,
      "--title-lh": s.lineHeight,
      "--title-fz": s.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, Sn = U((e, t) => {
  const n = k("Title", eS, e), {
    classNames: r,
    className: o,
    style: s,
    styles: i,
    unstyled: a,
    order: c,
    vars: l,
    size: u,
    variant: d,
    lineClamp: f,
    textWrap: p,
    mod: m,
    ...g
  } = n, h = Y({
    name: "Title",
    props: n,
    classes: Rp,
    className: o,
    style: s,
    classNames: r,
    styles: i,
    unstyled: a,
    vars: l,
    varsResolver: tS
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ y.jsx(
    V,
    {
      ...h("root"),
      component: `h${c}`,
      variant: d,
      ref: t,
      mod: [{ order: c, "data-line-clamp": typeof f == "number" }, m],
      size: u,
      ...g
    }
  ) : null;
});
Sn.classes = Rp;
Sn.displayName = "@mantine/core/Title";
var $p = { exports: {} }, nS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", rS = nS, oS = rS;
function Op() {
}
function Ap() {
}
Ap.resetWarningCache = Op;
var sS = function() {
  function e(r, o, s, i, a, c) {
    if (c !== oS) {
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
    checkPropTypes: Ap,
    resetWarningCache: Op
  };
  return n.PropTypes = n, n;
};
$p.exports = sS();
var iS = $p.exports;
const sn = /* @__PURE__ */ Ed(iS);
var aS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, cS = Object.defineProperty, lS = Object.defineProperties, uS = Object.getOwnPropertyDescriptors, Do = Object.getOwnPropertySymbols, Np = Object.prototype.hasOwnProperty, Tp = Object.prototype.propertyIsEnumerable, bu = (e, t, n) => t in e ? cS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vu = (e, t) => {
  for (var n in t || (t = {}))
    Np.call(t, n) && bu(e, n, t[n]);
  if (Do)
    for (var n of Do(t))
      Tp.call(t, n) && bu(e, n, t[n]);
  return e;
}, dS = (e, t) => lS(e, uS(t)), fS = (e, t) => {
  var n = {};
  for (var r in e)
    Np.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Do)
    for (var r of Do(e))
      t.indexOf(r) < 0 && Tp.call(e, r) && (n[r] = e[r]);
  return n;
}, qn = (e, t, n) => {
  const r = te(
    (o, s) => {
      var i = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = i, d = fS(i, ["color", "size", "stroke", "children"]);
      return Ci(
        "svg",
        vu(dS(vu({
          ref: s
        }, aS), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => Ci(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: sn.string,
    size: sn.oneOfType([sn.string, sn.number]),
    stroke: sn.oneOfType([sn.string, sn.number])
  }, r.displayName = `${t}`, r;
}, pS = qn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), mS = qn("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]), hS = qn("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), gS = qn("info-circle", "IconInfoCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 9h.01", key: "svg-1" }],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), yS = qn("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), bS = qn("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function vS({ indeterminate: e, ...t }) {
  return e ? /* @__PURE__ */ y.jsx(mS, { ...t }) : /* @__PURE__ */ y.jsx(pS, { ...t });
}
const xS = {
  components: {
    Checkbox: wn.extend({
      defaultProps: {
        icon: vS,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, wS = "v1.2.0";
function Ce(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var SS = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), xu = SS, oi = () => Math.random().toString(36).substring(7).split("").join("."), CS = {
  INIT: `@@redux/INIT${oi()}`,
  REPLACE: `@@redux/REPLACE${oi()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${oi()}`
}, Eo = CS;
function Sc(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Lp(e, t, n) {
  if (typeof e != "function")
    throw new Error(Ce(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Ce(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Ce(1));
    return n(Lp)(e, t);
  }
  let r = e, o = t, s = /* @__PURE__ */ new Map(), i = s, a = 0, c = !1;
  function l() {
    i === s && (i = /* @__PURE__ */ new Map(), s.forEach((h, b) => {
      i.set(b, h);
    }));
  }
  function u() {
    if (c)
      throw new Error(Ce(3));
    return o;
  }
  function d(h) {
    if (typeof h != "function")
      throw new Error(Ce(4));
    if (c)
      throw new Error(Ce(5));
    let b = !0;
    l();
    const x = a++;
    return i.set(x, h), function() {
      if (b) {
        if (c)
          throw new Error(Ce(6));
        b = !1, l(), i.delete(x), s = null;
      }
    };
  }
  function f(h) {
    if (!Sc(h))
      throw new Error(Ce(7));
    if (typeof h.type > "u")
      throw new Error(Ce(8));
    if (typeof h.type != "string")
      throw new Error(Ce(17));
    if (c)
      throw new Error(Ce(9));
    try {
      c = !0, o = r(o, h);
    } finally {
      c = !1;
    }
    return (s = i).forEach((x) => {
      x();
    }), h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(Ce(10));
    r = h, f({
      type: Eo.REPLACE
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
      subscribe(b) {
        if (typeof b != "object" || b === null)
          throw new Error(Ce(11));
        function x() {
          const v = b;
          v.next && v.next(u());
        }
        return x(), {
          unsubscribe: h(x)
        };
      },
      [xu]() {
        return this;
      }
    };
  }
  return f({
    type: Eo.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [xu]: m
  };
}
function PS(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Eo.INIT
    }) > "u")
      throw new Error(Ce(12));
    if (typeof n(void 0, {
      type: Eo.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Ce(13));
  });
}
function DS(e) {
  const t = Object.keys(e), n = {};
  for (let s = 0; s < t.length; s++) {
    const i = t[s];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  const r = Object.keys(n);
  let o;
  try {
    PS(n);
  } catch (s) {
    o = s;
  }
  return function(i = {}, a) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u], f = n[d], p = i[d], m = f(p, a);
      if (typeof m > "u")
        throw a && a.type, new Error(Ce(14));
      l[d] = m, c = c || m !== p;
    }
    return c = c || r.length !== Object.keys(i).length, c ? l : i;
  };
}
function Io(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ES(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let s = () => {
      throw new Error(Ce(15));
    };
    const i = {
      getState: o.getState,
      dispatch: (c, ...l) => s(c, ...l)
    }, a = e.map((c) => c(i));
    return s = Io(...a)(o.dispatch), {
      ...o,
      dispatch: s
    };
  };
}
function IS(e) {
  return Sc(e) && "type" in e && typeof e.type == "string";
}
var jp = Symbol.for("immer-nothing"), wu = Symbol.for("immer-draftable"), Qe = Symbol.for("immer-state");
function ht(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Mn = Object.getPrototypeOf;
function Zt(e) {
  return !!e && !!e[Qe];
}
function Ft(e) {
  var t;
  return e ? _p(e) || Array.isArray(e) || !!e[wu] || !!((t = e.constructor) != null && t[wu]) || os(e) || ss(e) : !1;
}
var RS = Object.prototype.constructor.toString();
function _p(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Mn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === RS;
}
function Ro(e, t) {
  rs(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function rs(e) {
  const t = e[Qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : os(e) ? 2 : ss(e) ? 3 : 0;
}
function zi(e, t) {
  return rs(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Mp(e, t, n) {
  const r = rs(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function $S(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function os(e) {
  return e instanceof Map;
}
function ss(e) {
  return e instanceof Set;
}
function cn(e) {
  return e.copy_ || e.base_;
}
function Wi(e, t) {
  if (os(e))
    return new Map(e);
  if (ss(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = _p(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Qe];
    let o = Reflect.ownKeys(r);
    for (let s = 0; s < o.length; s++) {
      const i = o[s], a = r[i];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[i]
      });
    }
    return Object.create(Mn(e), r);
  } else {
    const r = Mn(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Cc(e, t = !1) {
  return is(e) || Zt(e) || !Ft(e) || (rs(e) > 1 && (e.set = e.add = e.clear = e.delete = OS), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Cc(r, !0))), e;
}
function OS() {
  ht(2);
}
function is(e) {
  return Object.isFrozen(e);
}
var AS = {};
function gn(e) {
  const t = AS[e];
  return t || ht(0, e), t;
}
var Sr;
function kp() {
  return Sr;
}
function NS(e, t) {
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
function Su(e, t) {
  t && (gn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Gi(e) {
  Hi(e), e.drafts_.forEach(TS), e.drafts_ = null;
}
function Hi(e) {
  e === Sr && (Sr = e.parent_);
}
function Cu(e) {
  return Sr = NS(Sr, e);
}
function TS(e) {
  const t = e[Qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Pu(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Qe].modified_ && (Gi(t), ht(4)), Ft(e) && (e = $o(t, e), t.parent_ || Oo(t, e)), t.patches_ && gn("Patches").generateReplacementPatches_(
    n[Qe].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = $o(t, n, []), Gi(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== jp ? e : void 0;
}
function $o(e, t, n) {
  if (is(t))
    return t;
  const r = t[Qe];
  if (!r)
    return Ro(
      t,
      (o, s) => Du(e, r, t, o, s, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Oo(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let s = o, i = !1;
    r.type_ === 3 && (s = new Set(o), o.clear(), i = !0), Ro(
      s,
      (a, c) => Du(e, r, o, a, c, n, i)
    ), Oo(e, o, !1), n && e.patches_ && gn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Du(e, t, n, r, o, s, i) {
  if (Zt(o)) {
    const a = s && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !zi(t.assigned_, r) ? s.concat(r) : void 0, c = $o(e, o, a);
    if (Mp(n, r, c), Zt(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && n.add(o);
  if (Ft(o) && !is(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    $o(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Oo(e, o);
  }
}
function Oo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Cc(t, n);
}
function LS(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : kp(),
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
  let o = r, s = Pc;
  n && (o = [r], s = Cr);
  const { revoke: i, proxy: a } = Proxy.revocable(o, s);
  return r.draft_ = a, r.revoke_ = i, a;
}
var Pc = {
  get(e, t) {
    if (t === Qe)
      return e;
    const n = cn(e);
    if (!zi(n, t))
      return jS(e, n, t);
    const r = n[t];
    return e.finalized_ || !Ft(r) ? r : r === si(e.base_, t) ? (ii(e), e.copy_[t] = qi(r, e)) : r;
  },
  has(e, t) {
    return t in cn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(cn(e));
  },
  set(e, t, n) {
    const r = Fp(cn(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = si(cn(e), t), s = o == null ? void 0 : o[Qe];
      if (s && s.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if ($S(n, o) && (n !== void 0 || zi(e.base_, t)))
        return !0;
      ii(e), Ui(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return si(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ii(e), Ui(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = cn(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ht(11);
  },
  getPrototypeOf(e) {
    return Mn(e.base_);
  },
  setPrototypeOf() {
    ht(12);
  }
}, Cr = {};
Ro(Pc, (e, t) => {
  Cr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Cr.deleteProperty = function(e, t) {
  return Cr.set.call(this, e, t, void 0);
};
Cr.set = function(e, t, n) {
  return Pc.set.call(this, e[0], t, n, e[0]);
};
function si(e, t) {
  const n = e[Qe];
  return (n ? cn(n) : e)[t];
}
function jS(e, t, n) {
  var o;
  const r = Fp(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Fp(e, t) {
  if (!(t in e))
    return;
  let n = Mn(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = Mn(n);
  }
}
function Ui(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ui(e.parent_));
}
function ii(e) {
  e.copy_ || (e.copy_ = Wi(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var _S = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const s = n;
        n = t;
        const i = this;
        return function(c = s, ...l) {
          return i.produce(c, (u) => n.call(this, u, ...l));
        };
      }
      typeof n != "function" && ht(6), r !== void 0 && typeof r != "function" && ht(7);
      let o;
      if (Ft(t)) {
        const s = Cu(this), i = qi(t, void 0);
        let a = !0;
        try {
          o = n(i), a = !1;
        } finally {
          a ? Gi(s) : Hi(s);
        }
        return Su(s, r), Pu(o, s);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === jp && (o = void 0), this.autoFreeze_ && Cc(o, !0), r) {
          const s = [], i = [];
          gn("Patches").generateReplacementPatches_(t, o, s, i), r(s, i);
        }
        return o;
      } else
        ht(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (i, ...a) => this.produceWithPatches(i, (c) => t(c, ...a));
      let r, o;
      return [this.produce(t, n, (i, a) => {
        r = i, o = a;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ft(e) || ht(8), Zt(e) && (e = Bp(e));
    const t = Cu(this), n = qi(e, void 0);
    return n[Qe].isManual_ = !0, Hi(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Qe];
    (!n || !n.isManual_) && ht(9);
    const { scope_: r } = n;
    return Su(r, t), Pu(void 0, r);
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
    const r = gn("Patches").applyPatches_;
    return Zt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function qi(e, t) {
  const n = os(e) ? gn("MapSet").proxyMap_(e, t) : ss(e) ? gn("MapSet").proxySet_(e, t) : LS(e, t);
  return (t ? t.scope_ : kp()).drafts_.push(n), n;
}
function Bp(e) {
  return Zt(e) || ht(10, e), Vp(e);
}
function Vp(e) {
  if (!Ft(e) || is(e))
    return e;
  const t = e[Qe];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Wi(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Wi(e, !0);
  return Ro(n, (r, o) => {
    Mp(n, r, Vp(o));
  }), t && (t.finalized_ = !1), n;
}
var Ze = new _S(), zp = Ze.produce;
Ze.produceWithPatches.bind(
  Ze
);
Ze.setAutoFreeze.bind(Ze);
Ze.setUseStrictShallowCopy.bind(Ze);
Ze.applyPatches.bind(Ze);
Ze.createDraft.bind(Ze);
Ze.finishDraft.bind(Ze);
function MS(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function kS(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function FS(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Eu = (e) => Array.isArray(e) ? e : [e];
function BS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return FS(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function VS(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var zS = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, WS = typeof WeakRef < "u" ? WeakRef : zS, GS = 0, Iu = 1;
function eo() {
  return {
    s: GS,
    v: void 0,
    o: null,
    p: null
  };
}
function Dc(e, t = {}) {
  let n = eo();
  const { resultEqualityCheck: r } = t;
  let o, s = 0;
  function i() {
    var d;
    let a = n;
    const { length: c } = arguments;
    for (let f = 0, p = c; f < p; f++) {
      const m = arguments[f];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let g = a.o;
        g === null && (a.o = g = /* @__PURE__ */ new WeakMap());
        const h = g.get(m);
        h === void 0 ? (a = eo(), g.set(m, a)) : a = h;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const h = g.get(m);
        h === void 0 ? (a = eo(), g.set(m, a)) : a = h;
      }
    }
    const l = a;
    let u;
    if (a.s === Iu)
      u = a.v;
    else if (u = e.apply(null, arguments), s++, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, s !== 0 && s--), o = typeof u == "object" && u !== null || typeof u == "function" ? new WS(u) : u;
    }
    return l.s = Iu, l.v = u, u;
  }
  return i.clearCache = () => {
    n = eo(), i.resetResultsCount();
  }, i.resultsCount = () => s, i.resetResultsCount = () => {
    s = 0;
  }, i;
}
function Wp(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let s = 0, i = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), MS(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...n,
      ...c
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Dc,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = Eu(f), b = Eu(m), x = BS(o), w = d(function() {
      return s++, l.apply(
        null,
        arguments
      );
    }, ...h), v = p(function() {
      i++;
      const C = VS(
        x,
        arguments
      );
      return a = w.apply(null, C), a;
    }, ...b);
    return Object.assign(v, {
      resultFunc: l,
      memoizedResultFunc: w,
      dependencies: x,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => a,
      recomputations: () => s,
      resetRecomputations: () => {
        s = 0;
      },
      memoize: d,
      argsMemoize: p
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Kn = /* @__PURE__ */ Wp(Dc), HS = Object.assign(
  (e, t = Kn) => {
    kS(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (s) => e[s]
    );
    return t(
      r,
      (...s) => s.reduce((i, a, c) => (i[n[c]] = a, i), {})
    );
  },
  { withTypes: () => HS }
);
function Gp(e) {
  return ({ dispatch: n, getState: r }) => (o) => (s) => typeof s == "function" ? s(n, r, e) : o(s);
}
var US = Gp(), qS = Gp, KS = (...e) => {
  const t = Wp(...e), n = Object.assign((...r) => {
    const o = t(...r), s = (i, ...a) => o(Zt(i) ? Bp(i) : i, ...a);
    return Object.assign(s, o), s;
  }, {
    withTypes: () => n
  });
  return n;
};
KS(Dc);
var YS = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Io : Io.apply(null, arguments);
}, XS = (e) => e && typeof e.match == "function";
function Rt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Ve(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => IS(r) && r.type === e, n;
}
var Hp = class lr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, lr.prototype);
  }
  static get [Symbol.species]() {
    return lr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new lr(...t[0].concat(this)) : new lr(...t.concat(this));
  }
};
function Ru(e) {
  return Ft(e) ? zp(e, () => {
  }) : e;
}
function $u(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Ve(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function JS(e) {
  return typeof e == "boolean";
}
var QS = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: s = !0
  } = t ?? {};
  let i = new Hp();
  return n && (JS(n) ? i.push(US) : i.push(qS(n.extraArgument))), i;
}, ZS = "RTK_autoBatch", Up = (e) => (t) => {
  setTimeout(t, e);
}, eC = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Up(10), tC = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, s = !1, i = !1;
  const a = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? eC : e.type === "callback" ? e.queueNotification : Up(e.timeout), l = () => {
    i = !1, s && (s = !1, a.forEach((u) => u()));
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[ZS]), s = !o, s && (i || (i = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, nC = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Hp(e);
  return r && o.push(tC(typeof r == "object" ? r : void 0)), o;
}, rC = !0;
function oC(e) {
  const t = QS(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: s = void 0,
    enhancers: i = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Sc(n))
    a = DS(n);
  else
    throw new Error(Ve(1));
  let c;
  typeof r == "function" ? c = r(t) : c = t();
  let l = Io;
  o && (l = YS({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !rC,
    ...typeof o == "object" && o
  }));
  const u = ES(...c), d = nC(u);
  let f = typeof i == "function" ? i(d) : d();
  const p = l(...f);
  return Lp(a, s, p);
}
function qp(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(s, i) {
      const a = typeof s == "string" ? s : s.type;
      if (!a)
        throw new Error(Ve(28));
      if (a in t)
        throw new Error(Ve(29));
      return t[a] = i, o;
    },
    addMatcher(s, i) {
      return n.push({
        matcher: s,
        reducer: i
      }), o;
    },
    addDefaultCase(s) {
      return r = s, o;
    }
  };
  return e(o), [t, n, r];
}
function sC(e) {
  return typeof e == "function";
}
function iC(e, t) {
  let [n, r, o] = qp(t), s;
  if (sC(e))
    s = () => Ru(e());
  else {
    const a = Ru(e);
    s = () => a;
  }
  function i(a = s(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, d) => {
      if (d)
        if (Zt(u)) {
          const p = d(u, c);
          return p === void 0 ? u : p;
        } else {
          if (Ft(u))
            return zp(u, (f) => d(f, c));
          {
            const f = d(u, c);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(Ve(9));
            }
            return f;
          }
        }
      return u;
    }, a);
  }
  return i.getInitialState = s, i;
}
var aC = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Kp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += aC[Math.random() * 64 | 0];
  return t;
}, cC = (e, t) => XS(e) ? e.match(t) : e(t);
function lC(...e) {
  return (t) => e.some((n) => cC(n, t));
}
var uC = ["name", "message", "stack", "code"], ai = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Le(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Ou = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Le(this, "_type");
    this.payload = e, this.meta = t;
  }
}, dC = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of uC)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, as = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Rt(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), s = Rt(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), i = Rt(t + "/rejected", (c, l, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || dC)(c || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(c) : Kp(), p = new AbortController();
        let m, g;
        function h(x) {
          g = x, p.abort();
        }
        const b = async function() {
          var v, S;
          let x;
          try {
            let C = (v = r == null ? void 0 : r.condition) == null ? void 0 : v.call(r, c, {
              getState: u,
              extra: d
            });
            if (pC(C) && (C = await C), C === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const D = new Promise((P, $) => {
              m = () => {
                $({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, p.signal.addEventListener("abort", m);
            });
            l(s(f, c, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: f,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), x = await Promise.race([D, Promise.resolve(n(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: h,
              rejectWithValue: (P, $) => new ai(P, $),
              fulfillWithValue: (P, $) => new Ou(P, $)
            })).then((P) => {
              if (P instanceof ai)
                throw P;
              return P instanceof Ou ? o(P.payload, f, c, P.meta) : o(P, f, c);
            })]);
          } catch (C) {
            x = C instanceof ai ? i(null, f, c, C.payload, C.meta) : i(C, f, c);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && i.match(x) && x.meta.condition || l(x), x;
        }();
        return Object.assign(b, {
          abort: h,
          requestId: f,
          arg: c,
          unwrap() {
            return b.then(fC);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: s,
      rejected: i,
      fulfilled: o,
      settled: lC(i, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function fC(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function pC(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var mC = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function hC(e, t) {
  return `${e}/${t}`;
}
function gC({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[mC];
  return function(o) {
    const {
      name: s,
      reducerPath: i = s
    } = o;
    if (!s)
      throw new Error(Ve(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(bC()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(w, v) {
        const S = typeof w == "string" ? w : w.type;
        if (!S)
          throw new Error(Ve(12));
        if (S in l.sliceCaseReducersByType)
          throw new Error(Ve(13));
        return l.sliceCaseReducersByType[S] = v, u;
      },
      addMatcher(w, v) {
        return l.sliceMatchers.push({
          matcher: w,
          reducer: v
        }), u;
      },
      exposeAction(w, v) {
        return l.actionCreators[w] = v, u;
      },
      exposeCaseReducer(w, v) {
        return l.sliceCaseReducersByName[w] = v, u;
      }
    };
    c.forEach((w) => {
      const v = a[w], S = {
        reducerName: w,
        type: hC(s, w),
        createNotation: typeof o.reducers == "function"
      };
      xC(v) ? SC(S, v, u, t) : vC(S, v, u);
    });
    function d() {
      const [w = {}, v = [], S = void 0] = typeof o.extraReducers == "function" ? qp(o.extraReducers) : [o.extraReducers], C = {
        ...w,
        ...l.sliceCaseReducersByType
      };
      return iC(o.initialState, (D) => {
        for (let P in C)
          D.addCase(P, C[P]);
        for (let P of l.sliceMatchers)
          D.addMatcher(P.matcher, P.reducer);
        for (let P of v)
          D.addMatcher(P.matcher, P.reducer);
        S && D.addDefaultCase(S);
      });
    }
    const f = (w) => w, p = /* @__PURE__ */ new Map();
    let m;
    function g(w, v) {
      return m || (m = d()), m(w, v);
    }
    function h() {
      return m || (m = d()), m.getInitialState();
    }
    function b(w, v = !1) {
      function S(D) {
        let P = D[w];
        return typeof P > "u" && v && (P = h()), P;
      }
      function C(D = f) {
        const P = $u(p, v, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return $u(P, D, {
          insert: () => {
            const $ = {};
            for (const [T, j] of Object.entries(o.selectors ?? {}))
              $[T] = yC(j, D, h, v);
            return $;
          }
        });
      }
      return {
        reducerPath: w,
        getSelectors: C,
        get selectors() {
          return C(S);
        },
        selectSlice: S
      };
    }
    const x = {
      name: s,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: h,
      ...b(i),
      injectInto(w, {
        reducerPath: v,
        ...S
      } = {}) {
        const C = v ?? i;
        return w.inject({
          reducerPath: C,
          reducer: g
        }, S), {
          ...x,
          ...b(C, !0)
        };
      }
    };
    return x;
  };
}
function yC(e, t, n, r) {
  function o(s, ...i) {
    let a = t(s);
    return typeof a > "u" && r && (a = n()), e(a, ...i);
  }
  return o.unwrapped = e, o;
}
var Ec = /* @__PURE__ */ gC();
function bC() {
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
function vC({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let s, i;
  if ("reducer" in r) {
    if (n && !wC(r))
      throw new Error(Ve(17));
    s = r.reducer, i = r.prepare;
  } else
    s = r;
  o.addCase(e, s).exposeCaseReducer(t, s).exposeAction(t, i ? Rt(e, i) : Rt(e));
}
function xC(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function wC(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function SC({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Ve(18));
  const {
    payloadCreator: s,
    fulfilled: i,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = n, d = o(e, s, u);
  r.exposeAction(t, d), i && r.addCase(d.fulfilled, i), a && r.addCase(d.pending, a), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
    fulfilled: i || to,
    pending: a || to,
    rejected: c || to,
    settled: l || to
  });
}
function to() {
}
var CC = (e, t) => {
  if (typeof e != "function")
    throw new Error(Ve(32));
}, Ic = "listenerMiddleware", PC = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: s
  } = e;
  if (t)
    o = Rt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(Ve(21));
  return CC(s), {
    predicate: o,
    type: t,
    effect: s
  };
}, DC = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = PC(e);
  return {
    id: Kp(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Ve(22));
    }
  };
}, {
  withTypes: () => DC
}), EC = Object.assign(Rt(`${Ic}/add`), {
  withTypes: () => EC
});
Rt(`${Ic}/removeAll`);
var IC = Object.assign(Rt(`${Ic}/remove`), {
  withTypes: () => IC
});
function Ve(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class RC {
  constructor(t = {}) {
    Le(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Le(this, "securityData", null);
    Le(this, "securityWorker");
    Le(this, "abortControllers", /* @__PURE__ */ new Map());
    Le(this, "customFetch", (...t) => fetch(...t));
    Le(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Le(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    Le(this, "contentFormatters", {
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
    Le(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const r = this.abortControllers.get(t);
        return r ? r.signal : void 0;
      }
      const n = new AbortController();
      return this.abortControllers.set(t, n), n.signal;
    });
    Le(this, "abortRequest", (t) => {
      const n = this.abortControllers.get(t);
      n && (n.abort(), this.abortControllers.delete(t));
    });
    Le(this, "request", async ({
      body: t,
      secure: n,
      path: r,
      type: o,
      query: s,
      format: i,
      baseUrl: a,
      cancelToken: c,
      ...l
    }) => {
      const u = (typeof n == "boolean" ? n : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, d = this.mergeRequestParams(l, u), f = s && this.toQueryString(s), p = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], m = i || d.format;
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
        const b = m ? await g[m]().then((x) => (h.ok ? h.data = x : h.error = x, h)).catch((x) => (h.error = x, h)) : h;
        if (c && this.abortControllers.delete(c), !g.ok)
          throw b;
        return b;
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
class $C extends RC {
  constructor() {
    super(...arguments);
    Le(this, "api", {
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
      dictionaryV1Update: (n, r, o, s, i = {}) => this.request({
        path: `/api/Dictionary/v1/${n}/${r}/${o}`,
        method: "PUT",
        body: s,
        secure: !0,
        type: "application/json",
        ...i
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
      dictionaryV1Delete: (n, r, o, s = {}) => this.request({
        path: `/api/Dictionary/v1/${n}/${r}/${o}`,
        method: "DELETE",
        secure: !0,
        ...s
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
      domainV3Update: (n, r, o, s, i = {}) => this.request({
        path: `/api/Domain/v3/${n}/${r}/${o}`,
        method: "PUT",
        body: s,
        secure: !0,
        type: "application/json",
        ...i
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
      domainV3Delete: (n, r, o, s = {}) => this.request({
        path: `/api/Domain/v3/${n}/${r}/${o}`,
        method: "DELETE",
        secure: !0,
        ...s
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
class Rc extends $C {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const OC = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, AC = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Au = (e, t) => {
  e.language = t.payload, De.changeLanguage(t.payload);
}, $c = Rt("settings/setSettings"), Yp = Ec({
  name: "settings",
  initialState: AC,
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
    setLanguage: Au,
    setIncludeTestDictionaries: (e, t) => {
      e.includeTestDictionaries = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(
      $c,
      (t, {
        payload: {
          bsddApiEnvironment: n,
          mainDictionary: r,
          ifcDictionary: o,
          filterDictionaries: s,
          language: i,
          includeTestDictionaries: a
        }
      }) => {
        JSON.stringify(t.bsddApiEnvironment) !== JSON.stringify(n) && (t.bsddApiEnvironment = n), JSON.stringify(t.mainDictionary) !== JSON.stringify(r) && (t.mainDictionary = r), JSON.stringify(t.ifcDictionary) !== JSON.stringify(o) && (t.ifcDictionary = o), JSON.stringify(t.filterDictionaries) !== JSON.stringify(s) && (t.filterDictionaries = s), JSON.stringify(t.language) !== JSON.stringify(i) && Au(t, { payload: i, type: "setLanguage" }), JSON.stringify(t.includeTestDictionaries) !== JSON.stringify(a) && (t.includeTestDictionaries = a);
      }
    );
  }
}), Xp = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? OC[t] : null;
}, Jp = Kn(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.ifcDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t, n) => {
    const r = [e, t, ...n].filter(Boolean), o = new Map(r.map((s) => [s.ifcClassification.location, s]));
    return Array.from(o.values());
  }
);
Kn(
  Jp,
  (e) => e.map((t) => t.ifcClassification.location)
);
const NC = (e) => e.settings.mainDictionary, TC = (e) => e.settings.includeTestDictionaries, {
  setBsddApiEnvironment: LC,
  setMainDictionary: $$,
  setFilterDictionaries: O$,
  setLanguage: jC,
  setIncludeTestDictionaries: _C
} = Yp.actions, MC = Yp.reducer, Ki = 500, kC = 500;
let fn = null, co = {};
const Nu = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, FC = (e) => {
  const t = Xp(e);
  return t && (!fn || fn.baseUrl !== t) && (fn = new Rc(t)), fn;
}, Yi = as("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (!e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new Rc(e), o = kC;
  let s = 0;
  const i = [];
  return new Promise((a, c) => {
    function l() {
      r.api.dictionaryV1List({ IncludeTestDictionaries: t, Limit: o, Offset: s }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: d, totalCount: f } = {} } = u;
        if (d && typeof f < "u")
          if (i.push(...d), s += o, i.length >= f) {
            const p = i.reduce((m, g) => (m[g.uri] = g, m), {});
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
async function Tu(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: Ki,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const Qp = as(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (co[e])
      return await co[e];
    const o = (async () => {
      const s = FC(t());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const i = [];
      let a = 0;
      const c = await Tu(s, e, a), l = c.classesTotalCount;
      if (l == null)
        throw new Error("Total count is null or undefined");
      i.push(...c.classes ?? []);
      const u = [];
      for (a = Ki; a < l; a += Ki)
        u.push(
          Tu(s, e, a).then((d) => {
            i.push(...d.classes ?? []);
          })
        );
      return await Promise.all(u), n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: i } }), i;
    })();
    return co[e] = o, o;
  }
), Zp = Ec({
  name: "bsdd",
  initialState: Nu,
  reducers: {
    resetState: () => Nu,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(Yi.pending, (t) => {
      t.loaded = !1;
    }).addCase(Yi.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Qp.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
as("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
  const r = t();
  if (r.bsdd.classes[e])
    return r.bsdd.classes[e];
  if (!fn)
    throw new Error("BsddApi is not initialized");
  const o = await fn.api.classV1List({
    Uri: e
    // IncludeClassProperties: true,
    // IncludeChildClassReferences: false,
    // IncludeClassRelations: true,
    // IncludeReverseRelations: true,
    // languageCode: languageCode || undefined,
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  const { data: s } = o;
  return n({ type: "bsdd/addClass", payload: { uri: e, data: s } }), s;
});
const em = (e, t) => e.bsdd.dictionaries[t], BC = (e, t) => e.bsdd.dictionaryClasses[t], tm = (e) => e.bsdd.dictionaries, VC = (e) => e.bsdd.loaded, { resetState: zC } = Zp.actions;
function WC(e) {
  return (t) => {
    fn = new Rc(e), co = {}, t(zC());
  };
}
const GC = Zp.reducer;
function Oc(e) {
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
const HC = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = BC(t, e.location);
  if (r)
    return r;
  const o = await n(Qp(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function UC(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function $n(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function qC(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return $n(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await HC(e.referencedSource, n, t);
  if (!r)
    return $n("Failed to fetch classes for the referencedSource location", e);
  const o = UC(e, r);
  if (!o)
    return $n(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      e
    );
  if (!o.uri)
    return $n("Failed to find a URI for the matched class", e);
  const { uri: s, code: i, name: a } = o, c = {
    ...e,
    location: s ?? void 0,
    identification: i ?? void 0,
    name: a ?? void 0
  };
  if (!c.referencedSource || !c.referencedSource.location)
    return $n("referencedSource or its location is missing", c);
  const l = em(n, c.referencedSource.location);
  return l ? (c.referencedSource = Oc(l), {
    ifcClassificationReference: c,
    validationState: "fixed",
    message: null
  }) : $n("Failed to find a matching dictionary for the matched class", c);
}
function Lu(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = em(e, t.ifcClassification.location), r = Oc(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Ac = bg, bt = ag, KC = {
  ifcEntities: null
}, nm = Ec({
  name: "ifcData",
  initialState: KC,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), YC = (e) => e.ifcData.ifcEntities, { setIfcData: XC } = nm.actions;
function JC(e) {
  return e.endsWith("Type") ? e.slice(0, -4) : e;
}
function QC(e, t) {
  return (e ?? "") + ((t !== "NOTDEFINED" && t !== "USERDEFINED" ? t : "") ?? "");
}
function ZC(e, t) {
  return {
    type: "IfcClassificationReference",
    identification: QC(e.type, e.predefinedType),
    referencedSource: t
  };
}
async function e1(e, t, n) {
  return (await Promise.all(
    e.map(async (o) => {
      if (o.type === "IfcClassificationReference") {
        const { ifcClassificationReference: s, validationState: i, message: a } = await qC(
          o,
          t,
          n
        );
        return i === "invalid" ? null : s;
      }
      return o;
    })
  )).filter((o) => o !== null);
}
const t1 = as(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (s) => {
        var c;
        s.type && (s.type = JC(s.type));
        const i = [
          ...s.hasAssociations || [],
          ZC(s, (c = r.settings.ifcDictionary) == null ? void 0 : c.ifcClassification)
        ], a = await e1(i, t, r);
        return { ...s, hasAssociations: a };
      })
    );
    t(XC(o));
  }
), n1 = nm.reducer, Xi = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
function r1(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function o1(e, t) {
  const n = t.referencedSource, r = n == null ? void 0 : n.location;
  return r ? r === e : !1;
}
function s1(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (s) => {
      var i;
      return r1(s) && o1(
        (i = t.ifcClassification) == null ? void 0 : i.location,
        s
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function i1({ item: e, index: t, setCardColor: n }) {
  var m;
  const { t: r } = $t(), o = bt(Jp), s = bt(NC), [i, a] = q("grey"), [c, l] = q([]), [u, d] = q([]);
  H(() => {
    function g(h) {
      a(h), n(t, h);
    }
    c.every((h) => h !== null) ? g("green") : c.some((h) => h !== null) ? g("orange") : g("red");
  }, [c, t, n]), H(() => {
    const g = c.map((h) => h !== null ? "green" : "red");
    d(g);
  }, [c]), H(() => {
    l(
      o.map((g) => s1(e, g))
    );
  }, [e, o]);
  function f(g) {
    var x;
    const h = { ...g };
    h.predefinedType === null && (h.predefinedType = ""), console.log("Open bsddSearch", h);
    const b = JSON.stringify(h);
    (x = window == null ? void 0 : window.bsddBridge) == null || x.bsddSearch(b);
  }
  function p(g) {
    var b;
    const h = JSON.stringify(g);
    (b = window == null ? void 0 : window.bsddBridge) == null || b.bsddSelect(h);
  }
  return /* @__PURE__ */ y.jsxs(Ln, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ y.jsx(vr, { size: "1.5em", color: Xi[i] }),
    /* @__PURE__ */ y.jsxs(mn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ y.jsx(mn.Target, { children: /* @__PURE__ */ y.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ y.jsx($e, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ y.jsxs(mn.Dropdown, { children: [
        /* @__PURE__ */ y.jsxs($e, { children: [
          r("dictionaryValidationSummaryLabel"),
          ":"
        ] }),
        o.map((g, h) => {
          const b = g.ifcClassification.location || h;
          return /* @__PURE__ */ y.jsxs(Ln, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
            /* @__PURE__ */ y.jsx(vr, { size: "1em", color: Xi[u[h]] }),
            /* @__PURE__ */ y.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ y.jsx($e, { className: "truncate", children: g.ifcClassification.name }) })
          ] }, b);
        })
      ] })
    ] }),
    /* @__PURE__ */ y.jsx(_n, { label: r("attachToType"), children: /* @__PURE__ */ y.jsx(
      yr,
      {
        radius: "xl",
        onClick: () => f(e),
        disabled: !((m = s == null ? void 0 : s.ifcClassification) != null && m.location),
        children: /* @__PURE__ */ y.jsx(yS, { size: 20 })
      }
    ) }),
    /* @__PURE__ */ y.jsx(_n, { label: r("selectObjects"), children: /* @__PURE__ */ y.jsx(yr, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ y.jsx(bS, { size: 20 }) }) })
  ] });
}
function a1({ category: e, items: t, index: n }) {
  const { t: r } = $t(), [o, s] = q("grey"), [i, a] = q(new Array(t.length).fill("grey")), c = ee((l, u) => {
    a((d) => {
      const f = [...d];
      return f[l] = u, f;
    });
  }, []);
  return H(() => {
    i.includes("orange") || i.includes("red") && i.includes("green") ? s("orange") : i.every((l) => l === "red") ? s("red") : i.every((l) => l === "green") && s("green");
  }, [i]), /* @__PURE__ */ y.jsxs(se.Item, { value: n, children: [
    /* @__PURE__ */ y.jsx(se.Control, { children: /* @__PURE__ */ y.jsxs(Ln, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ y.jsx(vr, { size: "1.5em", color: Xi[o], children: /* @__PURE__ */ y.jsx($e, { size: "xs", c: "white", children: t.length }) }),
      /* @__PURE__ */ y.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ y.jsx($e, { className: "truncate", children: e.length > 0 ? e : r("noDescription") }) })
    ] }) }),
    /* @__PURE__ */ y.jsx(se.Panel, { mt: "-xs", pl: "xl", children: t.map((l, u) => /* @__PURE__ */ y.jsx(i1, { item: l, index: u, setCardColor: c }, u)) })
  ] }, e);
}
function c1(e, t) {
  const n = e.reduce((r, o) => {
    const s = o[t];
    return s === void 0 || typeof s != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[s] || (r[s] = []), r[s].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function l1({ loading: e }) {
  const { t } = $t(), n = bt(YC), r = Ht(() => n ? Object.entries(c1(n, "description")).map(([i, a], c) => /* @__PURE__ */ y.jsx(a1, { category: i, items: a, index: i || c.toString() }, i)) : [], [n]), o = /* @__PURE__ */ y.jsx(gS, {});
  return /* @__PURE__ */ y.jsx(yt.Panel, { value: "link", children: /* @__PURE__ */ y.jsxs(V, { pos: "relative", style: { height: "100vh" }, children: [
    /* @__PURE__ */ y.jsx(dc, { visible: e || !n }),
    n && r.length === 0 ? /* @__PURE__ */ y.jsxs(Ha, { title: "No entities selected...", icon: o, mt: "xl", children: [
      t("entitySelectionInstruction"),
      /* @__PURE__ */ y.jsx(wr, { h: "md" }),
      t("needHelp"),
      " ",
      /* @__PURE__ */ y.jsx(
        "a",
        {
          href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",
          target: "_blank",
          rel: "noreferrer",
          children: t("checkDocumentation")
        }
      )
    ] }) : /* @__PURE__ */ y.jsx(se, { chevronPosition: "left", children: r })
  ] }) });
}
function u1({ id: e }) {
  const { t } = $t();
  return /* @__PURE__ */ y.jsxs(se.Item, { value: e.toString(), children: [
    /* @__PURE__ */ y.jsx(se.Control, { children: /* @__PURE__ */ y.jsx(Sn, { order: 5, children: t("appInfoLabel") }) }),
    /* @__PURE__ */ y.jsxs(se.Panel, { children: [
      /* @__PURE__ */ y.jsxs(Tt, { gutter: "md", children: [
        /* @__PURE__ */ y.jsx(Tt.Col, { span: 3, children: /* @__PURE__ */ y.jsx($e, { size: "xs", children: "UI App version:" }) }),
        /* @__PURE__ */ y.jsx(Tt.Col, { span: 6, children: /* @__PURE__ */ y.jsx($e, { size: "xs", children: wS }) })
      ] }),
      /* @__PURE__ */ y.jsxs(Tt, { gutter: "md", children: [
        /* @__PURE__ */ y.jsx(Tt.Col, { span: 3, children: /* @__PURE__ */ y.jsx($e, { size: "xs", children: "Documentation:" }) }),
        /* @__PURE__ */ y.jsx(Tt.Col, { span: 6, children: /* @__PURE__ */ y.jsx($e, { size: "xs", children: /* @__PURE__ */ y.jsx(
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
const rm = "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/", d1 = "Export Type to IFC As";
function ju(e, t) {
  return Object.values(e).find((n) => n.uri === t);
}
function ci(e, t, n = "") {
  if (!e)
    return null;
  const r = t.find((o) => o.ifcClassification.location === e.uri);
  return r || {
    ifcClassification: Oc(e),
    parameterMapping: n
  };
}
const Nc = Kn(
  tm,
  (e) => Object.values(e).map(
    (t) => ({
      value: t.uri,
      label: `${t.name} (${t.version})`
    })
  )
), li = (e) => e && e.ifcClassification && e.ifcClassification.location ? [
  {
    value: e.ifcClassification.location,
    label: e.ifcClassification.name || ""
  }
] : [], f1 = Kn(
  Nc,
  (e) => e.filter((t) => t.value.startsWith(rm))
), p1 = Kn(
  Nc,
  (e) => e.filter((t) => !t.value.startsWith(rm))
);
function m1({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r,
  setIsLoading: o
}) {
  const { t: s } = $t(), i = bt(tm), a = bt(Nc), c = bt(f1), l = bt(p1), u = Ht(() => li(t == null ? void 0 : t.mainDictionary), [t == null ? void 0 : t.mainDictionary]), d = Ht(() => li(t == null ? void 0 : t.ifcDictionary), [t == null ? void 0 : t.ifcDictionary]), f = Ht(() => (t == null ? void 0 : t.filterDictionaries.filter((h) => h.ifcClassification && h.ifcClassification.location).map(li).flat()) || [], [t == null ? void 0 : t.filterDictionaries]), p = ee(
    (h) => {
      const b = h[0], x = ju(Object.values(i), b) || null, w = ci(
        x,
        t.mainDictionary ? [t.mainDictionary] : []
      ), v = t.filterDictionaries.filter(
        (S) => S.ifcClassification.location !== b
      );
      n({
        ...t,
        mainDictionary: w || null,
        filterDictionaries: v
      }), r(!0);
    },
    [i, t, n, r]
  ), m = ee(
    (h) => {
      var C;
      const b = h[0], x = ju(Object.values(i), b) || null, w = ((C = t.ifcDictionary) == null ? void 0 : C.parameterMapping) || d1, v = ci(
        x,
        t.ifcDictionary ? [t.ifcDictionary] : [],
        w
      ), S = t.filterDictionaries.filter(
        (D) => D.ifcClassification.location !== b
      );
      n({
        ...t,
        ifcDictionary: v || null,
        filterDictionaries: S
      }), r(!0);
    },
    [i, t, n, r]
  ), g = ee(
    (h) => {
      const b = Object.values(i).filter((S) => h.includes(S.uri)).map((S) => ci(S, (t == null ? void 0 : t.filterDictionaries) || [])).filter(
        (S) => {
          var C, D;
          return S !== null && S.ifcClassification.location !== ((C = t == null ? void 0 : t.mainDictionary) == null ? void 0 : C.ifcClassification.location) && S.ifcClassification.location !== ((D = t == null ? void 0 : t.ifcDictionary) == null ? void 0 : D.ifcClassification.location);
        }
      ), x = (S, C) => {
        var D;
        return S && h.includes((D = S[0]) == null ? void 0 : D.value) ? null : C;
      }, w = x(u, t == null ? void 0 : t.mainDictionary), v = x(d, t == null ? void 0 : t.ifcDictionary);
      n({
        ...t,
        mainDictionary: w || null,
        ifcDictionary: v || null,
        filterDictionaries: b
      }), r(!0);
    },
    [
      i,
      u,
      t,
      d,
      n,
      r
    ]
  );
  return H(() => {
    a.length !== 0 && o(!1);
  }, [a, o]), /* @__PURE__ */ y.jsxs(se.Item, { value: e.toString(), children: [
    /* @__PURE__ */ y.jsxs(se.Control, { children: [
      /* @__PURE__ */ y.jsx(Sn, { order: 5, children: s("dictionarySelectionLabel") }),
      /* @__PURE__ */ y.jsx($e, { size: "xs", c: "dimmed", children: s("dictionarySelectionInstruction") })
    ] }),
    /* @__PURE__ */ y.jsxs(se.Panel, { children: [
      /* @__PURE__ */ y.jsx(
        dr,
        {
          id: "mainDictionary",
          label: s("selectMainDictionary"),
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
      /* @__PURE__ */ y.jsx(wr, { h: "xs" }),
      /* @__PURE__ */ y.jsx(
        dr,
        {
          id: "ifcDictionary",
          label: s("Selection IFC dictionary"),
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
      /* @__PURE__ */ y.jsx(wr, { h: "xs" }),
      /* @__PURE__ */ y.jsx(
        dr,
        {
          id: "filterDictionaries",
          label: s("selectFilterDictionaries"),
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
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function h1(e, t) {
  if (Pr(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pr(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g1(e) {
  var t = h1(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function y1(e, t, n) {
  return (t = g1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _u(Object(n), !0).forEach(function(r) {
      y1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _u(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var ku = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), ui = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Fu = {
  INIT: "@@redux/INIT" + ui(),
  REPLACE: "@@redux/REPLACE" + ui(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + ui();
  }
};
function b1(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function om(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Fe(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Fe(1));
    return n(om)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Fe(2));
  var o = e, s = t, i = [], a = i, c = !1;
  function l() {
    a === i && (a = i.slice());
  }
  function u() {
    if (c)
      throw new Error(Fe(3));
    return s;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Fe(4));
    if (c)
      throw new Error(Fe(5));
    var h = !0;
    return l(), a.push(g), function() {
      if (h) {
        if (c)
          throw new Error(Fe(6));
        h = !1, l();
        var x = a.indexOf(g);
        a.splice(x, 1), i = null;
      }
    };
  }
  function f(g) {
    if (!b1(g))
      throw new Error(Fe(7));
    if (typeof g.type > "u")
      throw new Error(Fe(8));
    if (c)
      throw new Error(Fe(9));
    try {
      c = !0, s = o(s, g);
    } finally {
      c = !1;
    }
    for (var h = i = a, b = 0; b < h.length; b++) {
      var x = h[b];
      x();
    }
    return g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Fe(10));
    o = g, f({
      type: Fu.REPLACE
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
          throw new Error(Fe(11));
        function w() {
          x.next && x.next(u());
        }
        w();
        var v = h(w);
        return {
          unsubscribe: v
        };
      }
    }, g[ku] = function() {
      return this;
    }, g;
  }
  return f({
    type: Fu.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[ku] = m, r;
}
function Bu(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Vu(e, t) {
  if (typeof e == "function")
    return Bu(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Fe(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = Bu(o, t));
  }
  return n;
}
function sm() {
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
function v1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), s = function() {
        throw new Error(Fe(15));
      }, i = {
        getState: o.getState,
        dispatch: function() {
          return s.apply(void 0, arguments);
        }
      }, a = t.map(function(c) {
        return c(i);
      });
      return s = sm.apply(void 0, a)(o.dispatch), Mu(Mu({}, o), {}, {
        dispatch: s
      });
    };
  };
}
var im = { exports: {} }, am = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn = Q;
function x1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var w1 = typeof Object.is == "function" ? Object.is : x1, S1 = kn.useState, C1 = kn.useEffect, P1 = kn.useLayoutEffect, D1 = kn.useDebugValue;
function E1(e, t) {
  var n = t(), r = S1({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, s = r[1];
  return P1(function() {
    o.value = n, o.getSnapshot = t, di(o) && s({ inst: o });
  }, [e, n, t]), C1(function() {
    return di(o) && s({ inst: o }), e(function() {
      di(o) && s({ inst: o });
    });
  }, [e]), D1(n), n;
}
function di(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !w1(e, n);
  } catch {
    return !0;
  }
}
function I1(e, t) {
  return t();
}
var R1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? I1 : E1;
am.useSyncExternalStore = kn.useSyncExternalStore !== void 0 ? kn.useSyncExternalStore : R1;
im.exports = am;
var cm = im.exports, $1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs = Q, O1 = cm;
function A1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var N1 = typeof Object.is == "function" ? Object.is : A1, T1 = O1.useSyncExternalStore, L1 = cs.useRef, j1 = cs.useEffect, _1 = cs.useMemo, M1 = cs.useDebugValue;
$1.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var s = L1(null);
  if (s.current === null) {
    var i = { hasValue: !1, value: null };
    s.current = i;
  } else
    i = s.current;
  s = _1(function() {
    function c(p) {
      if (!l) {
        if (l = !0, u = p, p = r(p), o !== void 0 && i.hasValue) {
          var m = i.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, N1(u, p))
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
  var a = T1(e, s[0], s[1]);
  return j1(function() {
    i.hasValue = !0, i.value = a;
  }, [a]), M1(a), a;
};
function k1(e) {
  e();
}
let lm = k1;
const F1 = (e) => lm = e, B1 = () => lm, zu = Symbol.for("react-redux-context"), Wu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function V1() {
  var e;
  if (!I.createContext)
    return {};
  const t = (e = Wu[zu]) != null ? e : Wu[zu] = /* @__PURE__ */ new Map();
  let n = t.get(I.createContext);
  return n || (n = I.createContext(null), t.set(I.createContext, n)), n;
}
const um = /* @__PURE__ */ V1(), z1 = () => {
  throw new Error("uSES not initialized!");
};
var dm = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we = typeof Symbol == "function" && Symbol.for, Tc = we ? Symbol.for("react.element") : 60103, Lc = we ? Symbol.for("react.portal") : 60106, ls = we ? Symbol.for("react.fragment") : 60107, us = we ? Symbol.for("react.strict_mode") : 60108, ds = we ? Symbol.for("react.profiler") : 60114, fs = we ? Symbol.for("react.provider") : 60109, ps = we ? Symbol.for("react.context") : 60110, jc = we ? Symbol.for("react.async_mode") : 60111, ms = we ? Symbol.for("react.concurrent_mode") : 60111, hs = we ? Symbol.for("react.forward_ref") : 60112, gs = we ? Symbol.for("react.suspense") : 60113, W1 = we ? Symbol.for("react.suspense_list") : 60120, ys = we ? Symbol.for("react.memo") : 60115, bs = we ? Symbol.for("react.lazy") : 60116, G1 = we ? Symbol.for("react.block") : 60121, H1 = we ? Symbol.for("react.fundamental") : 60117, U1 = we ? Symbol.for("react.responder") : 60118, q1 = we ? Symbol.for("react.scope") : 60119;
function et(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Tc:
        switch (e = e.type, e) {
          case jc:
          case ms:
          case ls:
          case ds:
          case us:
          case gs:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ps:
              case hs:
              case bs:
              case ys:
              case fs:
                return e;
              default:
                return t;
            }
        }
      case Lc:
        return t;
    }
  }
}
function fm(e) {
  return et(e) === ms;
}
ne.AsyncMode = jc;
ne.ConcurrentMode = ms;
ne.ContextConsumer = ps;
ne.ContextProvider = fs;
ne.Element = Tc;
ne.ForwardRef = hs;
ne.Fragment = ls;
ne.Lazy = bs;
ne.Memo = ys;
ne.Portal = Lc;
ne.Profiler = ds;
ne.StrictMode = us;
ne.Suspense = gs;
ne.isAsyncMode = function(e) {
  return fm(e) || et(e) === jc;
};
ne.isConcurrentMode = fm;
ne.isContextConsumer = function(e) {
  return et(e) === ps;
};
ne.isContextProvider = function(e) {
  return et(e) === fs;
};
ne.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tc;
};
ne.isForwardRef = function(e) {
  return et(e) === hs;
};
ne.isFragment = function(e) {
  return et(e) === ls;
};
ne.isLazy = function(e) {
  return et(e) === bs;
};
ne.isMemo = function(e) {
  return et(e) === ys;
};
ne.isPortal = function(e) {
  return et(e) === Lc;
};
ne.isProfiler = function(e) {
  return et(e) === ds;
};
ne.isStrictMode = function(e) {
  return et(e) === us;
};
ne.isSuspense = function(e) {
  return et(e) === gs;
};
ne.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ls || e === ms || e === ds || e === us || e === gs || e === W1 || typeof e == "object" && e !== null && (e.$$typeof === bs || e.$$typeof === ys || e.$$typeof === fs || e.$$typeof === ps || e.$$typeof === hs || e.$$typeof === H1 || e.$$typeof === U1 || e.$$typeof === q1 || e.$$typeof === G1);
};
ne.typeOf = et;
dm.exports = ne;
var K1 = dm.exports, _c = K1, Y1 = {
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
}, X1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, J1 = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, pm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Mc = {};
Mc[_c.ForwardRef] = J1;
Mc[_c.Memo] = pm;
function Gu(e) {
  return _c.isMemo(e) ? pm : Mc[e.$$typeof] || Y1;
}
var Q1 = Object.defineProperty, Z1 = Object.getOwnPropertyNames, Hu = Object.getOwnPropertySymbols, eP = Object.getOwnPropertyDescriptor, tP = Object.getPrototypeOf, Uu = Object.prototype;
function mm(e, t, n) {
  if (typeof t != "string") {
    if (Uu) {
      var r = tP(t);
      r && r !== Uu && mm(e, r, n);
    }
    var o = Z1(t);
    Hu && (o = o.concat(Hu(t)));
    for (var s = Gu(e), i = Gu(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!X1[c] && !(n && n[c]) && !(i && i[c]) && !(s && s[c])) {
        var l = eP(t, c);
        try {
          Q1(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
var nP = mm;
const qu = /* @__PURE__ */ Ed(nP);
var hm = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc = Symbol.for("react.element"), Fc = Symbol.for("react.portal"), vs = Symbol.for("react.fragment"), xs = Symbol.for("react.strict_mode"), ws = Symbol.for("react.profiler"), Ss = Symbol.for("react.provider"), Cs = Symbol.for("react.context"), rP = Symbol.for("react.server_context"), Ps = Symbol.for("react.forward_ref"), Ds = Symbol.for("react.suspense"), Es = Symbol.for("react.suspense_list"), Is = Symbol.for("react.memo"), Rs = Symbol.for("react.lazy"), oP = Symbol.for("react.offscreen"), gm;
gm = Symbol.for("react.module.reference");
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case kc:
        switch (e = e.type, e) {
          case vs:
          case ws:
          case xs:
          case Ds:
          case Es:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case rP:
              case Cs:
              case Ps:
              case Rs:
              case Is:
              case Ss:
                return e;
              default:
                return t;
            }
        }
      case Fc:
        return t;
    }
  }
}
re.ContextConsumer = Cs;
re.ContextProvider = Ss;
re.Element = kc;
re.ForwardRef = Ps;
re.Fragment = vs;
re.Lazy = Rs;
re.Memo = Is;
re.Portal = Fc;
re.Profiler = ws;
re.StrictMode = xs;
re.Suspense = Ds;
re.SuspenseList = Es;
re.isAsyncMode = function() {
  return !1;
};
re.isConcurrentMode = function() {
  return !1;
};
re.isContextConsumer = function(e) {
  return dt(e) === Cs;
};
re.isContextProvider = function(e) {
  return dt(e) === Ss;
};
re.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kc;
};
re.isForwardRef = function(e) {
  return dt(e) === Ps;
};
re.isFragment = function(e) {
  return dt(e) === vs;
};
re.isLazy = function(e) {
  return dt(e) === Rs;
};
re.isMemo = function(e) {
  return dt(e) === Is;
};
re.isPortal = function(e) {
  return dt(e) === Fc;
};
re.isProfiler = function(e) {
  return dt(e) === ws;
};
re.isStrictMode = function(e) {
  return dt(e) === xs;
};
re.isSuspense = function(e) {
  return dt(e) === Ds;
};
re.isSuspenseList = function(e) {
  return dt(e) === Es;
};
re.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vs || e === ws || e === xs || e === Ds || e === Es || e === oP || typeof e == "object" && e !== null && (e.$$typeof === Rs || e.$$typeof === Is || e.$$typeof === Ss || e.$$typeof === Cs || e.$$typeof === Ps || e.$$typeof === gm || e.getModuleId !== void 0);
};
re.typeOf = dt;
hm.exports = re;
var sP = hm.exports;
const iP = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function aP(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: s,
  areStatePropsEqual: i
}) {
  let a = !1, c, l, u, d, f;
  function p(x, w) {
    return c = x, l = w, u = e(c, l), d = t(r, l), f = n(u, d, l), a = !0, f;
  }
  function m() {
    return u = e(c, l), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(c, l)), t.dependsOnOwnProps && (d = t(r, l)), f = n(u, d, l), f;
  }
  function h() {
    const x = e(c, l), w = !i(x, u);
    return u = x, w && (f = n(u, d, l)), f;
  }
  function b(x, w) {
    const v = !s(w, l), S = !o(x, c, w, l);
    return c = x, l = w, v && S ? m() : v ? g() : S ? h() : f;
  }
  return function(w, v) {
    return a ? b(w, v) : p(w, v);
  };
}
function cP(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, s = Cp(t, iP);
  const i = n(e, s), a = r(e, s), c = o(e, s);
  return aP(i, a, c, e, s);
}
function lP(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...s) => t(o(...s)));
  }
  return n;
}
function Ji(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Ku(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ym(e, t) {
  return function(r, {
    displayName: o
  }) {
    const s = function(a, c) {
      return s.dependsOnOwnProps ? s.mapToProps(a, c) : s.mapToProps(a, void 0);
    };
    return s.dependsOnOwnProps = !0, s.mapToProps = function(a, c) {
      s.mapToProps = e, s.dependsOnOwnProps = Ku(e);
      let l = s(a, c);
      return typeof l == "function" && (s.mapToProps = l, s.dependsOnOwnProps = Ku(l), l = s(a, c)), l;
    }, s;
  };
}
function Bc(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function uP(e) {
  return e && typeof e == "object" ? Ji((t) => (
    // @ts-ignore
    lP(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ym(e)
  ) : Bc(e, "mapDispatchToProps") : Ji((t) => ({
    dispatch: t
  }));
}
function dP(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ym(e)
  ) : Bc(e, "mapStateToProps") : Ji(() => ({}));
}
function fP(e, t, n) {
  return Ut({}, n, e, t);
}
function pP(e) {
  return function(n, {
    displayName: r,
    areMergedPropsEqual: o
  }) {
    let s = !1, i;
    return function(c, l, u) {
      const d = e(c, l, u);
      return s ? o(d, i) || (i = d) : (s = !0, i = d), i;
    };
  };
}
function mP(e) {
  return e ? typeof e == "function" ? pP(e) : Bc(e, "mergeProps") : () => fP;
}
function hP() {
  const e = B1();
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
      let o = !0, s = n = {
        callback: r,
        next: null,
        prev: n
      };
      return s.prev ? s.prev.next = s : t = s, function() {
        !o || t === null || (o = !1, s.next ? s.next.prev = s.prev : n = s.prev, s.prev ? s.prev.next = s.next : t = s.next);
      };
    }
  };
}
const Yu = {
  notify() {
  },
  get: () => []
};
function bm(e, t) {
  let n, r = Yu, o = 0, s = !1;
  function i(g) {
    u();
    const h = r.subscribe(g);
    let b = !1;
    return () => {
      b || (b = !0, h(), d());
    };
  }
  function a() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return s;
  }
  function u() {
    o++, n || (n = t ? t.addNestedSub(c) : e.subscribe(c), r = hP());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Yu);
  }
  function f() {
    s || (s = !0, u());
  }
  function p() {
    s && (s = !1, d());
  }
  const m = {
    addNestedSub: i,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: f,
    tryUnsubscribe: p,
    getListeners: () => r
  };
  return m;
}
const gP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ao = gP ? I.useLayoutEffect : I.useEffect;
function Xu(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function fi(e, t) {
  if (Xu(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Xu(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const yP = ["reactReduxForwardedRef"];
let vm = z1;
const bP = (e) => {
  vm = e;
}, vP = [null, null];
function xP(e, t, n) {
  Ao(() => e(...t), n);
}
function wP(e, t, n, r, o, s) {
  e.current = r, n.current = !1, o.current && (o.current = null, s());
}
function SP(e, t, n, r, o, s, i, a, c, l, u) {
  if (!e)
    return () => {
    };
  let d = !1, f = null;
  const p = () => {
    if (d || !a.current)
      return;
    const g = t.getState();
    let h, b;
    try {
      h = r(g, o.current);
    } catch (x) {
      b = x, f = x;
    }
    b || (f = null), h === s.current ? i.current || l() : (s.current = h, c.current = h, i.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function CP(e, t) {
  return e === t;
}
function xm(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = CP,
  areOwnPropsEqual: s = fi,
  areStatePropsEqual: i = fi,
  areMergedPropsEqual: a = fi,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: c = !1,
  // the context consumer to use
  context: l = um
} = {}) {
  const u = l, d = dP(e), f = uP(t), p = mP(n), m = !!e;
  return (h) => {
    const b = h.displayName || h.name || "Component", x = `Connect(${b})`, w = {
      shouldHandleStateChanges: m,
      displayName: x,
      wrappedComponentName: b,
      WrappedComponent: h,
      // @ts-ignore
      initMapStateToProps: d,
      // @ts-ignore
      initMapDispatchToProps: f,
      initMergeProps: p,
      areStatesEqual: o,
      areStatePropsEqual: i,
      areOwnPropsEqual: s,
      areMergedPropsEqual: a
    };
    function v(D) {
      const [P, $, T] = I.useMemo(() => {
        const {
          reactReduxForwardedRef: me
        } = D, he = Cp(D, yP);
        return [D.context, me, he];
      }, [D]), j = I.useMemo(() => P && P.Consumer && // @ts-ignore
      sP.isContextConsumer(/* @__PURE__ */ I.createElement(P.Consumer, null)) ? P : u, [P, u]), F = I.useContext(j), W = !!D.store && !!D.store.getState && !!D.store.dispatch, O = !!F && !!F.store, L = W ? D.store : F.store, E = O ? F.getServerState : L.getState, A = I.useMemo(() => cP(L.dispatch, w), [L]), [N, B] = I.useMemo(() => {
        if (!m)
          return vP;
        const me = bm(L, W ? void 0 : F.subscription), he = me.notifyNestedSubs.bind(me);
        return [me, he];
      }, [L, W, F]), M = I.useMemo(() => W ? F : Ut({}, F, {
        subscription: N
      }), [W, F, N]), K = I.useRef(), Z = I.useRef(T), ie = I.useRef(), ge = I.useRef(!1);
      I.useRef(!1);
      const oe = I.useRef(!1), ce = I.useRef();
      Ao(() => (oe.current = !0, () => {
        oe.current = !1;
      }), []);
      const pe = I.useMemo(() => () => ie.current && T === Z.current ? ie.current : A(L.getState(), T), [L, T]), Te = I.useMemo(() => (he) => N ? SP(
        m,
        L,
        N,
        // @ts-ignore
        A,
        Z,
        K,
        ge,
        oe,
        ie,
        B,
        he
      ) : () => {
      }, [N]);
      xP(wP, [Z, K, ge, T, ie, B]);
      let ae;
      try {
        ae = vm(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          Te,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          pe,
          E ? () => A(E(), T) : pe
        );
      } catch (me) {
        throw ce.current && (me.message += `
The error may be correlated with this previous error:
${ce.current.stack}

`), me;
      }
      Ao(() => {
        ce.current = void 0, ie.current = void 0, K.current = ae;
      });
      const Se = I.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ I.createElement(h, Ut({}, ae, {
          ref: $
        }))
      ), [$, h, ae]);
      return I.useMemo(() => m ? /* @__PURE__ */ I.createElement(j.Provider, {
        value: M
      }, Se) : Se, [j, Se, M]);
    }
    const C = I.memo(v);
    if (C.WrappedComponent = h, C.displayName = v.displayName = x, c) {
      const P = I.forwardRef(function(T, j) {
        return /* @__PURE__ */ I.createElement(C, Ut({}, T, {
          reactReduxForwardedRef: j
        }));
      });
      return P.displayName = x, P.WrappedComponent = h, qu(P, h);
    }
    return qu(C, h);
  };
}
function PP({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: s = "once"
}) {
  const i = I.useMemo(() => {
    const l = bm(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: s
    };
  }, [e, r, o, s]), a = I.useMemo(() => e.getState(), [e]);
  Ao(() => {
    const {
      subscription: l
    } = i;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [i, a]);
  const c = t || um;
  return /* @__PURE__ */ I.createElement(c.Provider, {
    value: i
  }, n);
}
bP(cm.useSyncExternalStore);
F1(Vh);
function DP(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function wm(e, t) {
  var n = q(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = z(!0), o = z(n), s = r.current || !!(t && o.current.inputs && DP(t, o.current.inputs)), i = s ? o.current : {
    inputs: t,
    result: e()
  };
  return H(function() {
    r.current = !1, o.current = i;
  }, [i]), i.result;
}
function EP(e, t) {
  return wm(function() {
    return e;
  }, t);
}
var J = wm, G = EP, IP = !0, pi = "Invariant failed";
function RP(e, t) {
  if (!e) {
    if (IP)
      throw new Error(pi);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(pi, ": ").concat(n) : pi;
    throw new Error(r);
  }
}
var vt = function(t) {
  var n = t.top, r = t.right, o = t.bottom, s = t.left, i = r - s, a = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: s,
    width: i,
    height: a,
    x: s,
    y: n,
    center: {
      x: (r + s) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, Vc = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Ju = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, $P = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, mi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, zc = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? mi : r, s = t.border, i = s === void 0 ? mi : s, a = t.padding, c = a === void 0 ? mi : a, l = vt(Vc(n, o)), u = vt(Ju(n, i)), d = vt(Ju(u, c));
  return {
    marginBox: l,
    borderBox: vt(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: i,
    padding: c
  };
}, nt = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && RP(!1), o;
}, OP = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, No = function(t, n) {
  var r = t.borderBox, o = t.border, s = t.margin, i = t.padding, a = $P(r, n);
  return zc({
    borderBox: a,
    border: o,
    margin: s,
    padding: i
  });
}, To = function(t, n) {
  return n === void 0 && (n = OP()), No(t, n);
}, Sm = function(t, n) {
  var r = {
    top: nt(n.marginTop),
    right: nt(n.marginRight),
    bottom: nt(n.marginBottom),
    left: nt(n.marginLeft)
  }, o = {
    top: nt(n.paddingTop),
    right: nt(n.paddingRight),
    bottom: nt(n.paddingBottom),
    left: nt(n.paddingLeft)
  }, s = {
    top: nt(n.borderTopWidth),
    right: nt(n.borderRightWidth),
    bottom: nt(n.borderBottomWidth),
    left: nt(n.borderLeftWidth)
  };
  return zc({
    borderBox: t,
    margin: r,
    padding: o,
    border: s
  });
}, Cm = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Sm(n, r);
}, Qu = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function AP(e, t) {
  return !!(e === t || Qu(e) && Qu(t));
}
function NP(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!AP(e[n], t[n]))
      return !1;
  return !0;
}
function ve(e, t) {
  t === void 0 && (t = NP);
  var n = null;
  function r() {
    for (var o = [], s = 0; s < arguments.length; s++)
      o[s] = arguments[s];
    if (n && n.lastThis === this && t(o, n.lastArgs))
      return n.lastResult;
    var i = e.apply(this, o);
    return n = {
      lastResult: i,
      lastArgs: o,
      lastThis: this
    }, i;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
var TP = function(t) {
  var n = [], r = null, o = function() {
    for (var i = arguments.length, a = new Array(i), c = 0; c < i; c++)
      a[c] = arguments[c];
    n = a, !r && (r = requestAnimationFrame(function() {
      r = null, t.apply(void 0, n);
    }));
  };
  return o.cancel = function() {
    r && (cancelAnimationFrame(r), r = null);
  }, o;
};
const Dr = TP;
function Pm(e, t) {
}
Pm.bind(null, "warn");
Pm.bind(null, "error");
function qt() {
}
function LP(e, t) {
  return {
    ...e,
    ...t
  };
}
function rt(e, t, n) {
  const r = t.map((o) => {
    const s = LP(n, o.options);
    return e.addEventListener(o.eventName, o.fn, s), function() {
      e.removeEventListener(o.eventName, o.fn, s);
    };
  });
  return function() {
    r.forEach((s) => {
      s();
    });
  };
}
const jP = "Invariant failed";
class Lo extends Error {
}
Lo.prototype.toString = function() {
  return this.message;
};
function _(e, t) {
  if (!e)
    throw new Lo(jP);
}
class _P extends Q.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = qt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof Lo && n.preventDefault();
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = rt(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof Lo) {
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
const MP = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, jo = (e) => e + 1, kP = (e) => `
  You have lifted an item in position ${jo(e.source.index)}
`, Dm = (e, t) => {
  const n = e.droppableId === t.droppableId, r = jo(e.index), o = jo(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Em = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, FP = (e) => {
  const t = e.destination;
  if (t)
    return Dm(e.source, t);
  const n = e.combine;
  return n ? Em(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Zu = (e) => `
  The item has returned to its starting position
  of ${jo(e.index)}
`, BP = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Zu(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Dm(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Em(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Zu(e.source)}
  `;
}, VP = {
  dragHandleUsageInstructions: MP,
  onDragStart: kP,
  onDragUpdate: FP,
  onDragEnd: BP
};
var lo = VP;
const xe = {
  x: 0,
  y: 0
}, Pe = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), qe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Kt = (e, t) => e.x === t.x && e.y === t.y, Yn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), yn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Er = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ed = (e, t) => Math.min(...t.map((n) => Er(e, n))), Im = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var zP = (e, t) => {
  const n = vt({
    top: Math.max(t.top, e.top),
    right: Math.min(t.right, e.right),
    bottom: Math.min(t.bottom, e.bottom),
    left: Math.max(t.left, e.left)
  });
  return n.width <= 0 || n.height <= 0 ? null : n;
};
const Wr = (e, t) => ({
  top: e.top + t.y,
  left: e.left + t.x,
  bottom: e.bottom + t.y,
  right: e.right + t.x
}), td = (e) => [{
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
}], WP = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, GP = (e, t) => t ? Wr(e, t.scroll.diff.displacement) : e, HP = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, UP = (e, t) => t && t.shouldClipSubject ? zP(t.pageMarginBox, e) : vt(e);
var Fn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = GP(e.marginBox, r), s = HP(o, n, t), i = UP(s, r);
  return {
    page: e,
    withPlaceholder: t,
    active: i
  };
}, Wc = (e, t) => {
  e.frame || _(!1);
  const n = e.frame, r = qe(t, n.scroll.initial), o = Yn(r), s = {
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
  }, i = Fn({
    page: e.subject.page,
    withPlaceholder: e.subject.withPlaceholder,
    axis: e.axis,
    frame: s
  });
  return {
    ...e,
    frame: s,
    subject: i
  };
};
const Rm = ve((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), $m = ve((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), $s = ve((e) => Object.values(e)), qP = ve((e) => Object.values(e));
var Xn = ve((e, t) => qP(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Gc(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Os(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var As = ve((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), KP = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Gc(o))
    return null;
  function i(p) {
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
    return c ? i(c) : null;
  const l = As(t, r);
  if (!c) {
    if (!l.length)
      return null;
    const p = l[l.length - 1];
    return i(p.descriptor.id);
  }
  const u = l.findIndex((p) => p.descriptor.id === c);
  u === -1 && _(!1);
  const d = u - 1;
  if (d < 0)
    return null;
  const f = l[d];
  return i(f.descriptor.id);
}, Jn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Om = {
  point: xe,
  value: 0
}, Ir = {
  invisible: {},
  visible: {},
  all: []
}, YP = {
  displaced: Ir,
  displacedBy: Om,
  at: null
};
var XP = YP, ot = (e, t) => (n) => e <= n && n <= t, Am = (e) => {
  const t = ot(e.top, e.bottom), n = ot(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const s = t(r.top) || t(r.bottom), i = n(r.left) || n(r.right);
    if (s && i)
      return !0;
    const c = r.top < e.top && r.bottom > e.bottom, l = r.left < e.left && r.right > e.right;
    return c && l ? !0 : c && i || l && s;
  };
}, JP = (e) => {
  const t = ot(e.top, e.bottom), n = ot(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Hc = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Nm = {
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
var QP = (e) => (t) => {
  const n = ot(t.top, t.bottom), r = ot(t.left, t.right);
  return (o) => e === Hc ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const ZP = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : xe;
  return Wr(e, n);
}, eD = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, tD = (e, t, n) => n(t)(e), Uc = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const s = r ? ZP(e, t) : e;
  return eD(s, t, o) && tD(s, n, o);
}, nD = (e) => Uc({
  ...e,
  isVisibleThroughFrameFn: Am
}), Tm = (e) => Uc({
  ...e,
  isVisibleThroughFrameFn: JP
}), rD = (e) => Uc({
  ...e,
  isVisibleThroughFrameFn: QP(e.destination.axis)
}), oD = (e, t, n) => {
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
  const s = o[e];
  return s ? s.shouldAnimate : !0;
};
function sD(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return vt(Vc(n, r));
}
function Rr({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: s
}) {
  return e.reduce(function(a, c) {
    const l = sD(c, n), u = c.descriptor.id;
    if (a.all.push(u), !nD({
      target: l,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[c.descriptor.id] = !0, a;
    const f = oD(u, s, o), p = {
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
function iD(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function nd({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = iD(e, {
    inHomeList: t
  });
  return {
    displaced: Ir,
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
function _o({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: s,
  index: i,
  forceShouldAnimate: a
}) {
  const c = Jn(e, n);
  if (i == null)
    return nd({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const l = t.find((m) => m.descriptor.index === i);
  if (!l)
    return nd({
      insideDestination: t,
      inHomeList: c,
      displacedBy: o,
      destination: n
    });
  const u = As(e, t), d = t.indexOf(l), f = u.slice(d);
  return {
    displaced: Rr({
      afterDragging: f,
      destination: n,
      displacedBy: o,
      last: s,
      viewport: r.frame,
      forceShouldAnimate: a
    }),
    displacedBy: o,
    at: {
      type: "REORDER",
      destination: {
        droppableId: n.descriptor.id,
        index: i
      }
    }
  };
}
function en(e, t) {
  return !!t.effected[e];
}
var aD = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const s = r.draggableId, a = n[s].descriptor.index;
  return en(s, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, cD = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, s = e ? o + 1 : o - 1, i = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, c = t ? a : a + 1;
  return s < i || s > c ? null : s;
}, lD = ({
  isMovingForward: e,
  isInHomeList: t,
  draggable: n,
  draggables: r,
  destination: o,
  insideDestination: s,
  previousImpact: i,
  viewport: a,
  afterCritical: c
}) => {
  const l = i.at;
  if (l || _(!1), l.type === "REORDER") {
    const d = cD({
      isMovingForward: e,
      isInHomeList: t,
      location: l.destination,
      insideDestination: s
    });
    return d == null ? null : _o({
      draggable: n,
      insideDestination: s,
      destination: o,
      viewport: a,
      last: i.displaced,
      displacedBy: i.displacedBy,
      index: d
    });
  }
  const u = aD({
    isMovingForward: e,
    destination: o,
    displaced: i.displaced,
    draggables: r,
    combine: l.combine,
    afterCritical: c
  });
  return u == null ? null : _o({
    draggable: n,
    insideDestination: s,
    destination: o,
    viewport: a,
    last: i.displaced,
    displacedBy: i.displacedBy,
    index: u
  });
}, uD = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return en(n, t) ? o ? xe : Yn(r.point) : o ? r.point : xe;
}, dD = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Os(t);
  r || _(!1);
  const o = r.draggableId, s = n[o].page.borderBox.center, i = uD({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return Pe(s, i);
};
const Lm = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, fD = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, qc = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, rd = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => yn(e.line, t.marginBox[e.end] + Lm(e, n), qc(e, t.marginBox, n)), od = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => yn(e.line, t.marginBox[e.start] - fD(e, n), qc(e, t.marginBox, n)), pD = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => yn(e.line, t.contentBox[e.start] + Lm(e, n), qc(e, t.contentBox, n));
var mD = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const s = Xn(r.descriptor.id, n), i = t.page, a = r.axis;
  if (!s.length)
    return pD({
      axis: a,
      moveInto: r.page,
      isMoving: i
    });
  const {
    displaced: c,
    displacedBy: l
  } = e, u = c.all[0];
  if (u) {
    const f = n[u];
    if (en(u, o))
      return od({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: i
      });
    const p = No(f.page, l.point);
    return od({
      axis: a,
      moveRelativeTo: p,
      isMoving: i
    });
  }
  const d = s[s.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return i.borderBox.center;
  if (en(d.descriptor.id, o)) {
    const f = No(d.page, Yn(o.displacedBy.point));
    return rd({
      axis: a,
      moveRelativeTo: f,
      isMoving: i
    });
  }
  return rd({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: i
  });
}, Qi = (e, t) => {
  const n = e.frame;
  return n ? Pe(t, n.scroll.diff.displacement) : t;
};
const hD = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const s = t.page.borderBox.center, i = e.at;
  return !n || !i ? s : i.type === "REORDER" ? mD({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : dD({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Ns = (e) => {
  const t = hD(e), n = e.droppable;
  return n ? Qi(n, t) : t;
}, jm = (e, t) => {
  const n = qe(t, e.scroll.initial), r = Yn(n);
  return {
    frame: vt({
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
function sd(e, t) {
  return e.map((n) => t[n]);
}
function gD(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var yD = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const s = jm(t, Pe(t.scroll.current, o)), i = n.frame ? Wc(n, Pe(n.frame.scroll.current, o)) : n, a = e.displaced, c = Rr({
    afterDragging: sd(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: s.frame,
    last: a,
    forceShouldAnimate: !1
  }), l = Rr({
    afterDragging: sd(a.all, r),
    destination: i,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, c, l];
  return a.all.forEach((m) => {
    const g = gD(m, f);
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
}, bD = (e, t) => Pe(e.scroll.diff.displacement, t), Kc = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = bD(n, e), o = qe(r, t.page.borderBox.center);
  return Pe(t.client.borderBox.center, o);
}, _m = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: s = !1
}) => {
  const i = qe(n, e.page.borderBox.center), c = {
    target: Wr(e.page.borderBox, i),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return s ? rD(c) : Tm(c);
}, vD = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  draggables: r,
  previousImpact: o,
  viewport: s,
  previousPageBorderBoxCenter: i,
  previousClientSelection: a,
  afterCritical: c
}) => {
  if (!n.isEnabled)
    return null;
  const l = Xn(n.descriptor.id, r), u = Jn(t, n), d = KP({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: l,
    previousImpact: o
  }) || lD({
    isMovingForward: e,
    isInHomeList: u,
    draggable: t,
    draggables: r,
    destination: n,
    insideDestination: l,
    previousImpact: o,
    viewport: s,
    afterCritical: c
  });
  if (!d)
    return null;
  const f = Ns({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: c
  });
  if (_m({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: s.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Kc({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: s
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = qe(f, i), g = yD({
    impact: d,
    viewport: s,
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
const je = (e) => {
  const t = e.subject.active;
  return t || _(!1), t;
};
var xD = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const s = n.subject.active;
  if (!s)
    return null;
  const i = n.axis, a = ot(s[i.start], s[i.end]), c = $s(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Am(o.frame)(je(u))).filter((u) => {
    const d = je(u);
    return e ? s[i.crossAxisEnd] < d[i.crossAxisEnd] : d[i.crossAxisStart] < s[i.crossAxisStart];
  }).filter((u) => {
    const d = je(u), f = ot(d[i.start], d[i.end]);
    return a(d[i.start]) || a(d[i.end]) || f(s[i.start]) || f(s[i.end]);
  }).sort((u, d) => {
    const f = je(u)[i.crossAxisStart], p = je(d)[i.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => je(u)[i.crossAxisStart] === je(f[0])[i.crossAxisStart]);
  if (!c.length)
    return null;
  if (c.length === 1)
    return c[0];
  const l = c.filter((u) => ot(je(u)[i.start], je(u)[i.end])(t[i.line]));
  return l.length === 1 ? l[0] : l.length > 1 ? l.sort((u, d) => je(u)[i.start] - je(d)[i.start])[0] : c.sort((u, d) => {
    const f = ed(t, td(je(u))), p = ed(t, td(je(d)));
    return f !== p ? f - p : je(u)[i.start] - je(d)[i.start];
  })[0];
};
const id = (e, t) => {
  const n = e.page.borderBox.center;
  return en(e.descriptor.id, t) ? qe(n, t.displacedBy.point) : n;
}, wD = (e, t) => {
  const n = e.page.borderBox;
  return en(e.descriptor.id, t) ? Wr(n, Yn(t.displacedBy.point)) : n;
};
var SD = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((i) => Tm({
  target: wD(i, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((i, a) => {
  const c = Er(e, Qi(n, id(i, o))), l = Er(e, Qi(n, id(a, o)));
  return c < l ? -1 : l < c ? 1 : i.descriptor.index - a.descriptor.index;
})[0] || null, Gr = ve(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: yn(t.line, r)
  };
});
const CD = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return yn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], c = Xn(e.descriptor.id, n).reduce((l, u) => l + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return c <= 0 ? null : yn(r.line, c);
}, Mm = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), km = (e, t, n) => {
  const r = e.frame;
  Jn(t, e) && _(!1), e.subject.withPlaceholder && _(!1);
  const o = Gr(e.axis, t.displaceBy).point, s = CD(e, o, n), i = {
    placeholderSize: o,
    increasedBy: s,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = Fn({
      page: e.subject.page,
      withPlaceholder: i,
      axis: e.axis,
      frame: e.frame
    });
    return {
      ...e,
      subject: u
    };
  }
  const a = s ? Pe(r.scroll.max, s) : r.scroll.max, c = Mm(r, a), l = Fn({
    page: e.subject.page,
    withPlaceholder: i,
    axis: e.axis,
    frame: c
  });
  return {
    ...e,
    subject: l,
    frame: c
  };
}, PD = (e) => {
  const t = e.subject.withPlaceholder;
  t || _(!1);
  const n = e.frame;
  if (!n) {
    const i = Fn({
      page: e.subject.page,
      axis: e.axis,
      frame: null,
      withPlaceholder: null
    });
    return {
      ...e,
      subject: i
    };
  }
  const r = t.oldFrameMaxScroll;
  r || _(!1);
  const o = Mm(n, r), s = Fn({
    page: e.subject.page,
    axis: e.axis,
    frame: o,
    withPlaceholder: null
  });
  return {
    ...e,
    subject: s,
    frame: o
  };
};
var DD = ({
  previousPageBorderBoxCenter: e,
  moveRelativeTo: t,
  insideDestination: n,
  draggable: r,
  draggables: o,
  destination: s,
  viewport: i,
  afterCritical: a
}) => {
  if (!t) {
    if (n.length)
      return null;
    const d = {
      displaced: Ir,
      displacedBy: Om,
      at: {
        type: "REORDER",
        destination: {
          droppableId: s.descriptor.id,
          index: 0
        }
      }
    }, f = Ns({
      impact: d,
      draggable: r,
      droppable: s,
      draggables: o,
      afterCritical: a
    }), p = Jn(r, s) ? s : km(s, r, o);
    return _m({
      draggable: r,
      destination: p,
      newPageBorderBoxCenter: f,
      viewport: i.frame,
      withDroppableDisplacement: !1,
      onlyOnMainAxis: !0
    }) ? d : null;
  }
  const c = e[s.axis.line] <= t.page.borderBox.center[s.axis.line], l = (() => {
    const d = t.descriptor.index;
    return t.descriptor.id === r.descriptor.id || c ? d : d + 1;
  })(), u = Gr(s.axis, r.displaceBy);
  return _o({
    draggable: r,
    insideDestination: n,
    destination: s,
    viewport: i,
    displacedBy: u,
    last: Ir,
    index: l
  });
}, ED = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: s,
  viewport: i,
  afterCritical: a
}) => {
  const c = xD({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: s,
    viewport: i
  });
  if (!c)
    return null;
  const l = Xn(c.descriptor.id, o), u = SD({
    pageBorderBoxCenter: t,
    viewport: i,
    destination: c,
    insideDestination: l,
    afterCritical: a
  }), d = DD({
    previousPageBorderBoxCenter: t,
    destination: c,
    draggable: n,
    draggables: o,
    moveRelativeTo: u,
    insideDestination: l,
    viewport: i,
    afterCritical: a
  });
  if (!d)
    return null;
  const f = Ns({
    impact: d,
    draggable: n,
    droppable: c,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Kc({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: i
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ye = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const ID = (e, t) => {
  const n = Ye(e);
  return n ? t[n] : null;
};
var RD = ({
  state: e,
  type: t
}) => {
  const n = ID(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], s = n || o, i = s.axis.direction, a = i === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || i === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const c = t === "MOVE_DOWN" || t === "MOVE_RIGHT", l = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? vD({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    destination: s,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : ED({
    isMovingForward: c,
    previousPageBorderBoxCenter: u,
    draggable: l,
    isOver: s,
    draggables: d,
    droppables: f,
    viewport: e.viewport,
    afterCritical: e.afterCritical
  });
};
function ln(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Fm(e) {
  const t = ot(e.top, e.bottom), n = ot(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function $D(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function OD({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((s) => {
    const i = s.axis, a = yn(s.axis.line, e.center[i.line], s.page.borderBox.center[i.crossAxisLine]);
    return {
      id: s.descriptor.id,
      distance: Er(r, a)
    };
  }).sort((s, i) => i.distance - s.distance);
  return o[0] ? o[0].id : null;
}
function AD({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = $s(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const s = o.subject.active;
    if (!s || !$D(e, s))
      return !1;
    if (Fm(s)(e.center))
      return !0;
    const i = o.axis, a = s.center[i.crossAxisLine], c = e[i.crossAxisStart], l = e[i.crossAxisEnd], u = ot(s[i.crossAxisStart], s[i.crossAxisEnd]), d = u(c), f = u(l);
    return !d && !f ? !0 : d ? c < a : l > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : OD({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Bm = (e, t) => vt(Wr(e, t));
var ND = (e, t) => {
  const n = e.frame;
  return n ? Bm(t, n.scroll.diff.value) : t;
};
function Vm({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function TD({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var LD = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = n.axis, c = Gr(n.axis, t.displaceBy), l = c.value, u = e[a.start], d = e[a.end], p = As(t, r).find((g) => {
    const h = g.descriptor.id, b = g.page.borderBox.center[a.line], x = en(h, i), w = Vm({
      displaced: o,
      id: h
    });
    return x ? w ? d <= b : u < b - l : w ? d <= b + l : u < b;
  }) || null, m = TD({
    draggable: t,
    closest: p,
    inHomeList: Jn(t, n)
  });
  return _o({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: s,
    last: o,
    displacedBy: c,
    index: m
  });
};
const jD = 4;
var _D = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: s
}) => {
  if (!r.isCombineEnabled)
    return null;
  const i = r.axis, a = Gr(r.axis, e.displaceBy), c = a.value, l = t[i.start], u = t[i.end], f = As(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[i.size] / jD, w = en(g, s), v = Vm({
      displaced: n.displaced,
      id: g
    });
    return w ? v ? u > h[i.start] + x && u < h[i.end] - x : l > h[i.start] - c + x && l < h[i.end] - c - x : v ? u > h[i.start] + c + x && u < h[i.end] + c - x : l > h[i.start] + x && l < h[i.end] - x;
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
}, zm = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: s,
  afterCritical: i
}) => {
  const a = Bm(t.page.borderBox, e), c = AD({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!c)
    return XP;
  const l = r[c], u = Xn(l.descriptor.id, n), d = ND(l, a);
  return _D({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: l,
    insideDestination: u,
    afterCritical: i
  }) || LD({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: l,
    insideDestination: u,
    last: o.displaced,
    viewport: s,
    afterCritical: i
  });
}, Yc = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const MD = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ye(e), o = Ye(t);
  if (!r || r === o)
    return n;
  const s = n[r];
  if (!s.subject.withPlaceholder)
    return n;
  const i = PD(s);
  return Yc(n, i);
};
var kD = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const s = MD({
    previousImpact: r,
    impact: o,
    droppables: n
  }), i = Ye(o);
  if (!i)
    return s;
  const a = n[i];
  if (Jn(e, a) || a.subject.withPlaceholder)
    return s;
  const c = km(a, e, t);
  return Yc(s, c);
}, fr = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: s
}) => {
  const i = r || e.viewport, a = n || e.dimensions, c = t || e.current.client.selection, l = qe(c, e.initial.client.selection), u = {
    offset: l,
    selection: c,
    borderBoxCenter: Pe(e.initial.client.borderBoxCenter, l)
  }, d = {
    selection: Pe(u.selection, i.scroll.current),
    borderBoxCenter: Pe(u.borderBoxCenter, i.scroll.current),
    offset: Pe(u.offset, i.scroll.diff.value)
  }, f = {
    client: u,
    page: d
  };
  if (e.phase === "COLLECTING")
    return {
      ...e,
      dimensions: a,
      viewport: i,
      current: f
    };
  const p = a.draggables[e.critical.draggable.id], m = o || zm({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: i,
    afterCritical: e.afterCritical
  }), g = kD({
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
    viewport: i,
    scrollJumpRequest: s || null,
    forceShouldAnimate: s ? !1 : null
  };
};
function FD(e, t) {
  return e.map((n) => t[n]);
}
var Wm = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const s = e.displaced, i = FD(s.all, n), a = Rr({
    afterDragging: i,
    destination: r,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    forceShouldAnimate: o,
    last: s
  });
  return {
    ...e,
    displaced: a
  };
}, Gm = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: s
}) => {
  const i = Ns({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: s
  });
  return Kc({
    pageBorderBoxCenter: i,
    draggable: t,
    viewport: o
  });
}, Hm = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && _(!1);
  const r = e.impact, o = n || e.viewport, s = t || e.dimensions, {
    draggables: i,
    droppables: a
  } = s, c = i[e.critical.draggable.id], l = Ye(r);
  l || _(!1);
  const u = a[l], d = Wm({
    impact: r,
    viewport: o,
    destination: u,
    draggables: i
  }), f = Gm({
    impact: d,
    draggable: c,
    droppable: u,
    draggables: i,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return fr({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: s,
    viewport: o
  });
}, BD = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Um = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Gr(t.axis, e.displaceBy), s = Xn(t.descriptor.id, n), i = s.indexOf(e);
  i === -1 && _(!1);
  const a = s.slice(i + 1), c = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), l = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: c
  };
  return {
    impact: {
      displaced: Rr({
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
        destination: BD(e.descriptor)
      }
    },
    afterCritical: l
  };
}, VD = (e, t) => ({
  draggables: e.draggables,
  droppables: Yc(e.droppables, t)
}), zD = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = No(e.client, t), o = To(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, WD = (e) => {
  const t = e.frame;
  return t || _(!1), t;
}, GD = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const s = o.descriptor.droppableId, i = t[s], c = WD(i).scroll.diff.value, l = Pe(r, c);
    return zD({
      draggable: o,
      offset: l,
      initialWindowScroll: n.scroll.initial
    });
  });
}, HD = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((b) => {
    const x = e.dimensions.droppables[b.droppableId];
    return Wc(x, b.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Rm(n)
  }, o = $m(GD({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), s = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((b) => {
    delete s[b];
  });
  const i = {
    droppables: r,
    draggables: s
  }, a = Ye(e.impact), c = a ? i.droppables[a] : null, l = i.draggables[e.critical.draggable.id], u = i.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Um({
    draggable: l,
    home: u,
    draggables: s,
    viewport: e.viewport
  }), p = c && c.isCombineEnabled ? e.impact : d, m = zm({
    pageOffset: e.current.page.offset,
    draggable: i.draggables[e.critical.draggable.id],
    draggables: i.draggables,
    droppables: i.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  }), g = {
    ...e,
    phase: "DRAGGING",
    impact: m,
    onLiftImpact: d,
    dimensions: i,
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
const Zi = (e) => e.movementMode === "SNAP", hi = (e, t, n) => {
  const r = VD(e.dimensions, t);
  return !Zi(e) || n ? fr({
    state: e,
    dimensions: r
  }) : Hm({
    state: e,
    dimensions: r
  });
};
function gi(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ad = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var UD = (e = ad, t) => {
  if (t.type === "FLUSH")
    return {
      ...ad,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && _(!1);
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: s,
      movementMode: i
    } = t.payload, a = s.draggables[n.draggable.id], c = s.droppables[n.droppable.id], l = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: xe
    }, u = {
      client: l,
      page: {
        selection: Pe(l.selection, o.scroll.initial),
        borderBoxCenter: Pe(l.selection, o.scroll.initial),
        offset: Pe(l.selection, o.scroll.diff.value)
      }
    }, d = $s(s.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Um({
      draggable: a,
      home: c,
      draggables: s.draggables,
      viewport: o
    });
    return {
      phase: "DRAGGING",
      isDragging: !0,
      critical: n,
      movementMode: i,
      dimensions: s,
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && _(!1), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || _(!1), HD({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    ln(e) || _(!1);
    const {
      client: n
    } = t.payload;
    return Kt(n, e.current.client.selection) ? e : fr({
      state: e,
      clientSelection: n,
      impact: Zi(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return gi(e);
    ln(e) || _(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const s = Wc(o, r);
    return hi(e, s, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ln(e) || _(!1);
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || _(!1), o.isEnabled === r && _(!1);
    const s = {
      ...o,
      isEnabled: r
    };
    return hi(e, s, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    ln(e) || _(!1);
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || _(!1), o.isCombineEnabled === r && _(!1);
    const s = {
      ...o,
      isCombineEnabled: r
    };
    return hi(e, s, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    ln(e) || _(!1), e.isWindowScrollAllowed || _(!1);
    const n = t.payload.newScroll;
    if (Kt(e.viewport.scroll.current, n))
      return gi(e);
    const r = jm(e.viewport, n);
    return Zi(e) ? Hm({
      state: e,
      viewport: r
    }) : fr({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!ln(e))
      return e;
    const n = t.payload.maxScroll;
    if (Kt(n, e.viewport.scroll.max))
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
    e.phase !== "DRAGGING" && _(!1);
    const n = RD({
      state: e,
      type: t.type
    });
    return n ? fr({
      state: e,
      impact: n.impact,
      clientSelection: n.clientSelection,
      scrollJumpRequest: n.scrollJumpRequest
    }) : e;
  }
  if (t.type === "DROP_PENDING") {
    const n = t.payload.reason;
    return e.phase !== "COLLECTING" && _(!1), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || _(!1), {
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
const qD = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), KD = (e) => ({
  type: "LIFT",
  payload: e
}), YD = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), XD = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), JD = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), QD = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), ZD = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), eE = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), qm = (e) => ({
  type: "MOVE",
  payload: e
}), tE = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), nE = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), rE = () => ({
  type: "MOVE_UP",
  payload: null
}), oE = () => ({
  type: "MOVE_DOWN",
  payload: null
}), sE = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), iE = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Xc = () => ({
  type: "FLUSH",
  payload: null
}), aE = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Jc = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Km = (e) => ({
  type: "DROP",
  payload: e
}), cE = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ym = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var lE = (e) => ({
  getState: t,
  dispatch: n
}) => (r) => (o) => {
  if (o.type !== "LIFT") {
    r(o);
    return;
  }
  const {
    id: s,
    clientSelection: i,
    movementMode: a
  } = o.payload, c = t();
  c.phase === "DROP_ANIMATING" && n(Jc({
    completed: c.completed
  })), t().phase !== "IDLE" && _(!1), n(Xc()), n(qD({
    draggableId: s,
    movementMode: a
  }));
  const u = {
    draggableId: s,
    scrollOptions: {
      shouldPublishImmediately: a === "SNAP"
    }
  }, {
    critical: d,
    dimensions: f,
    viewport: p
  } = e.startPublishing(u);
  n(YD({
    critical: d,
    dimensions: f,
    clientSelection: i,
    movementMode: a,
    viewport: p
  }));
}, uE = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Qc = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, $r = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Xm = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, an = `${Xm.outOfTheWay}s ${Qc.outOfTheWay}`, pr = {
  fluid: `opacity ${an}`,
  snap: `transform ${an}, opacity ${an}`,
  drop: (e) => {
    const t = `${e}s ${Qc.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${an}`,
  placeholder: `height ${an}, width ${an}, margin ${an}`
}, cd = (e) => Kt(e, xe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ea = {
  moveTo: cd,
  drop: (e, t) => {
    const n = cd(e);
    if (n)
      return t ? `${n} scale(${$r.scale.drop})` : n;
  }
}, {
  minDropTime: ta,
  maxDropTime: Jm
} = Xm, dE = Jm - ta, ld = 1500, fE = 0.6;
var pE = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Er(e, t);
  if (r <= 0)
    return ta;
  if (r >= ld)
    return Jm;
  const o = r / ld, s = ta + dE * o, i = n === "CANCEL" ? s * fE : s;
  return Number(i.toFixed(2));
}, mE = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: s,
    droppables: i
  } = n, a = Ye(e), c = a ? i[a] : null, l = i[t.descriptor.droppableId], u = Gm({
    impact: e,
    draggable: t,
    draggables: s,
    afterCritical: o,
    droppable: c || l,
    viewport: r
  });
  return qe(u, t.client.borderBox.center);
}, hE = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: s
}) => !n.at || t !== "DROP" ? {
  impact: Wm({
    draggables: e,
    impact: s,
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
    displaced: Ir
  },
  didDropInsideDroppable: !0
};
const gE = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), s = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(cE({
      reason: s
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && _(!1), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || _(!1);
  const a = o.critical, c = o.dimensions, l = c.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = hE({
    reason: s,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? Gc(u) : null, p = d ? Os(u) : null, m = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, g = {
    draggableId: l.descriptor.id,
    type: l.descriptor.type,
    source: m,
    reason: s,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, h = mE({
    impact: u,
    draggable: l,
    dimensions: c,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), b = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: g,
    impact: u
  };
  if (!(!Kt(o.current.client.offset, h) || !!g.combine)) {
    t(Jc({
      completed: b
    }));
    return;
  }
  const w = pE({
    current: o.current.client.offset,
    destination: h,
    reason: s
  });
  t(aE({
    newHomeClientOffset: h,
    dropDuration: w,
    completed: b
  }));
};
var yE = gE, Qm = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function bE(e) {
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
function vE({
  onWindowScroll: e
}) {
  function t() {
    e(Qm());
  }
  const n = Dr(t), r = bE(n);
  let o = qt;
  function s() {
    return o !== qt;
  }
  function i() {
    s() && _(!1), o = rt(window, [r]);
  }
  function a() {
    s() || _(!1), n.cancel(), o(), o = qt;
  }
  return {
    start: i,
    stop: a,
    isActive: s
  };
}
const xE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", wE = (e) => {
  const t = vE({
    onWindowScroll: (n) => {
      e.dispatch(tE({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && xE(r) && t.stop(), n(r);
  };
};
var SE = wE, CE = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (s) => {
    t || n || (t = !0, e(s), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, PE = () => {
  const e = [], t = (o) => {
    const s = e.findIndex((a) => a.timerId === o);
    s === -1 && _(!1);
    const [i] = e.splice(s, 1);
    i.callback();
  };
  return {
    add: (o) => {
      const s = setTimeout(() => t(s)), i = {
        timerId: s,
        callback: o
      };
      e.push(i);
    },
    flush: () => {
      if (!e.length)
        return;
      const o = [...e];
      e.length = 0, o.forEach((s) => {
        clearTimeout(s.timerId), s.callback();
      });
    }
  };
};
const DE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, EE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, IE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, sr = (e, t) => {
  t();
}, no = (e, t) => ({
  draggableId: e.draggable.id,
  type: e.droppable.type,
  source: {
    droppableId: e.droppable.id,
    index: e.draggable.index
  },
  mode: t
});
function yi(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = CE(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var RE = (e, t) => {
  const n = PE();
  let r = null;
  const o = (d, f) => {
    r && _(!1), sr("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, s = (d, f) => {
    r && _(!1), sr("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(no(d, f));
    });
  }, i = (d, f) => {
    r && _(!1);
    const p = no(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      sr("onDragStart", () => yi(e().onDragStart, p, t, lo.onDragStart));
    });
  }, a = (d, f) => {
    const p = Gc(f), m = Os(f);
    r || _(!1);
    const g = !IE(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !DE(r.lastLocation, p);
    h && (r.lastLocation = p);
    const b = !EE(r.lastCombine, m);
    if (b && (r.lastCombine = m), !g && !h && !b)
      return;
    const x = {
      ...no(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      sr("onDragUpdate", () => yi(e().onDragUpdate, x, t, lo.onDragUpdate));
    });
  }, c = () => {
    r || _(!1), n.flush();
  }, l = (d) => {
    r || _(!1), r = null, sr("onDragEnd", () => yi(e().onDragEnd, d, t, lo.onDragEnd));
  };
  return {
    beforeCapture: o,
    beforeStart: s,
    start: i,
    update: a,
    flush: c,
    drop: l,
    abort: () => {
      if (!r)
        return;
      const d = {
        ...no(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      l(d);
    }
  };
}, $E = (e, t) => {
  const n = RE(e, t);
  return (r) => (o) => (s) => {
    if (s.type === "BEFORE_INITIAL_CAPTURE") {
      n.beforeCapture(s.payload.draggableId, s.payload.movementMode);
      return;
    }
    if (s.type === "INITIAL_PUBLISH") {
      const a = s.payload.critical;
      n.beforeStart(a, s.payload.movementMode), o(s), n.start(a, s.payload.movementMode);
      return;
    }
    if (s.type === "DROP_COMPLETE") {
      const a = s.payload.completed.result;
      n.flush(), o(s), n.drop(a);
      return;
    }
    if (o(s), s.type === "FLUSH") {
      n.abort();
      return;
    }
    const i = r.getState();
    i.phase === "DRAGGING" && n.update(i.critical, i.impact);
  };
};
const OE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && _(!1), e.dispatch(Jc({
    completed: r.completed
  }));
};
var AE = OE;
const NE = (e) => {
  let t = null, n = null;
  function r() {
    n && (cancelAnimationFrame(n), n = null), t && (t(), t = null);
  }
  return (o) => (s) => {
    if ((s.type === "FLUSH" || s.type === "DROP_COMPLETE" || s.type === "DROP_ANIMATION_FINISHED") && r(), o(s), s.type !== "DROP_ANIMATE")
      return;
    const i = {
      eventName: "scroll",
      options: {
        capture: !0,
        passive: !1,
        once: !0
      },
      fn: function() {
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ym());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = rt(window, [i]);
    });
  };
};
var TE = NE, LE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, jE = (e) => {
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
const _E = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var ME = (e) => (t) => (n) => (r) => {
  if (_E(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && _(!1), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const kE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Km({
    reason: r.reason
  })));
};
var FE = kE;
const BE = sm;
var VE = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: s
}) => om(UD, BE(v1(uE(n), LE(e), lE(e), yE, AE, TE, FE, ME(s), SE, jE(t), $E(r, o))));
const bi = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function zE({
  registry: e,
  callbacks: t
}) {
  let n = bi(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null;
      const {
        additions: c,
        removals: l,
        modified: u
      } = n, d = Object.keys(c).map((m) => e.draggable.getById(m).getDimension(xe)).sort((m, g) => m.descriptor.index - g.descriptor.index), f = Object.keys(u).map((m) => {
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
      n = bi(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = bi());
    }
  };
}
var Zm = ({
  scrollHeight: e,
  scrollWidth: t,
  height: n,
  width: r
}) => {
  const o = qe({
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
}, eh = () => {
  const e = document.documentElement;
  return e || _(!1), e;
}, th = () => {
  const e = eh();
  return Zm({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, WE = () => {
  const e = Qm(), t = th(), n = e.y, r = e.x, o = eh(), s = o.clientWidth, i = o.clientHeight, a = r + s, c = n + i;
  return {
    frame: vt({
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
        value: xe,
        displacement: xe
      }
    }
  };
}, GE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = WE(), o = r.scroll.current, s = e.droppable, i = n.droppable.getAllByType(s.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: $m(a),
      droppables: Rm(i)
    },
    critical: e,
    viewport: r
  };
};
function ud(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var HE = (e, t) => {
  let n = null;
  const r = zE({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || _(!1), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || _(!1), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || _(!1), t.updateDroppableScroll({
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
    n || _(!1);
    const p = n.critical.draggable;
    f.type === "ADDITION" && ud(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && ud(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: s,
    scrollDroppable: a,
    updateDroppableScroll: i,
    startPublishing: (f) => {
      n && _(!1);
      const p = e.draggable.getById(f.draggableId), m = e.droppable.getById(p.descriptor.droppableId), g = {
        draggable: p.descriptor,
        droppable: m.descriptor
      }, h = e.subscribe(l);
      return n = {
        critical: g,
        unsubscribe: h
      }, GE({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: c
  };
}, nh = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", UE = (e) => {
  window.scrollBy(e.x, e.y);
};
const qE = ve((e) => $s(e).filter((t) => !(!t.isEnabled || !t.frame))), KE = (e, t) => qE(t).find((r) => (r.frame || _(!1), Fm(r.frame.pageMarginBox)(e))) || null;
var YE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return KE(e, n);
};
const Or = {
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
var XE = (e, t, n = () => Or) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, s = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: s
  };
}, rh = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, Zc = 1, JE = (e, t, n = () => Or) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Zc;
  const s = 1 - rh({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), i = r.maxPixelScroll * r.ease(s);
  return Math.ceil(i);
}, QE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, s = r.durationDampening.stopDampeningAt, i = t, a = s, l = Date.now() - i;
  if (l >= s)
    return e;
  if (l < o)
    return Zc;
  const u = rh({
    startOfRange: o,
    endOfRange: a,
    current: l
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, dd = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const s = JE(e, t, o);
  return s === 0 ? 0 : r ? Math.max(QE(s, n, o), Zc) : s;
}, fd = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = XE(e, r, s);
  return t[r.end] < t[r.start] ? dd({
    distanceToEdge: t[r.end],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }) : -1 * dd({
    distanceToEdge: t[r.start],
    thresholds: i,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
}, ZE = ({
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
const eI = Im((e) => e === 0 ? 0 : e);
var oh = ({
  dragStartTime: e,
  container: t,
  subject: n,
  center: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = {
    top: r.y - t.top,
    right: t.right - r.x,
    bottom: t.bottom - r.y,
    left: r.x - t.left
  }, a = fd({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: Hc,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), c = fd({
    container: t,
    distanceToEdges: i,
    dragStartTime: e,
    axis: Nm,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  }), l = eI({
    x: c,
    y: a
  });
  if (Kt(l, xe))
    return null;
  const u = ZE({
    container: t,
    subject: n,
    proposedScroll: l
  });
  return u ? Kt(u, xe) ? null : u : null;
};
const tI = Im((e) => e === 0 ? 0 : e > 0 ? 1 : -1), el = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = Pe(t, r), s = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return Kt(s, xe) ? null : s;
  };
})(), sh = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = tI(n), s = el({
    max: r,
    current: t,
    change: o
  });
  return !s || o.x !== 0 && s.x === 0 || o.y !== 0 && s.y === 0;
}, tl = (e, t) => sh({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), nI = (e, t) => {
  if (!tl(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return el({
    current: r,
    max: n,
    change: t
  });
}, nl = (e, t) => {
  const n = e.frame;
  return n ? sh({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, rI = (e, t) => {
  const n = e.frame;
  return !n || !nl(e, t) ? null : el({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var oI = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = oh({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return i && tl(e, i) ? i : null;
}, sI = ({
  droppable: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.frame;
  if (!i)
    return null;
  const a = oh({
    dragStartTime: r,
    container: i.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: s
  });
  return a && nl(e, a) ? a : null;
}, pd = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: s
}) => {
  const i = e.current.page.borderBoxCenter, c = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = oI({
      dragStartTime: t,
      viewport: d,
      subject: c,
      center: i,
      shouldUseTimeDampening: n,
      getAutoScrollerOptions: s
    });
    if (f) {
      r(f);
      return;
    }
  }
  const l = YE({
    center: i,
    destination: Ye(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!l)
    return;
  const u = sI({
    dragStartTime: t,
    droppable: l,
    subject: c,
    center: i,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: s
  });
  u && o(l.descriptor.id, u);
}, iI = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => Or
}) => {
  const r = Dr(e), o = Dr(t);
  let s = null;
  const i = (l) => {
    s || _(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = s;
    pd({
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
      s && _(!1);
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      pd({
        state: l,
        dragStartTime: 0,
        shouldUseTimeDampening: !1,
        scrollWindow: f,
        scrollDroppable: f,
        getAutoScrollerOptions: n
      }), s = {
        dragStartTime: u,
        shouldUseTimeDampening: d
      }, d && i(l);
    },
    stop: () => {
      s && (r.cancel(), o.cancel(), s = null);
    },
    scroll: i
  };
}, aI = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, c) => {
    const l = Pe(a.current.client.selection, c);
    e({
      client: l
    });
  }, o = (a, c) => {
    if (!nl(a, c))
      return c;
    const l = rI(a, c);
    if (!l)
      return t(a.descriptor.id, c), null;
    const u = qe(c, l);
    return t(a.descriptor.id, u), qe(c, u);
  }, s = (a, c, l) => {
    if (!a || !tl(c, l))
      return l;
    const u = nI(c, l);
    if (!u)
      return n(l), null;
    const d = qe(l, u);
    return n(d), qe(l, d);
  };
  return (a) => {
    const c = a.scrollJumpRequest;
    if (!c)
      return;
    const l = Ye(a.impact);
    l || _(!1);
    const u = o(a.dimensions.droppables[l], c);
    if (!u)
      return;
    const d = a.viewport, f = s(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, cI = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = iI({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), s = aI({
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
        c.scrollJumpRequest && s(c);
      }
    },
    start: o.start,
    stop: o.stop
  };
};
const Bn = "data-rfd", Vn = (() => {
  const e = `${Bn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), na = (() => {
  const e = `${Bn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), lI = (() => {
  const e = `${Bn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), md = {
  contextId: `${Bn}-scroll-container-context-id`
}, uI = (e) => (t) => `[${t}="${e}"]`, ir = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), dI = "pointer-events: none;";
var fI = (e) => {
  const t = uI(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Vn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: dI,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${pr.outOfTheWay};
    `;
    return {
      selector: t(na.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(lI.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  }, i = [r, n, o, {
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
    always: ir(i, "always"),
    resting: ir(i, "resting"),
    dragging: ir(i, "dragging"),
    dropAnimating: ir(i, "dropAnimating"),
    userCancel: ir(i, "userCancel")
  };
};
const pI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Fo : H;
var Xe = pI;
const vi = () => {
  const e = document.querySelector("head");
  return e || _(!1), e;
}, hd = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function mI(e, t) {
  const n = J(() => fI(e), [e]), r = z(null), o = z(null), s = G(ve((d) => {
    const f = o.current;
    f || _(!1), f.textContent = d;
  }), []), i = G((d) => {
    const f = r.current;
    f || _(!1), f.textContent = d;
  }, []);
  Xe(() => {
    !r.current && !o.current || _(!1);
    const d = hd(t), f = hd(t);
    return r.current = d, o.current = f, d.setAttribute(`${Bn}-always`, e), f.setAttribute(`${Bn}-dynamic`, e), vi().appendChild(d), vi().appendChild(f), i(n.always), s(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || _(!1), vi().removeChild(g), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, i, s, n.always, n.resting, e]);
  const a = G(() => s(n.dragging), [s, n.dragging]), c = G((d) => {
    if (d === "DROP") {
      s(n.dropAnimating);
      return;
    }
    s(n.userCancel);
  }, [s, n.dropAnimating, n.userCancel]), l = G(() => {
    o.current && s(n.resting);
  }, [s, n.resting]);
  return J(() => ({
    dragging: a,
    dropping: c,
    resting: l
  }), [a, c, l]);
}
function ih(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ah = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function Ts(e) {
  return e instanceof ah(e).HTMLElement;
}
function hI(e, t) {
  const n = `[${Vn.contextId}="${e}"]`, r = ih(document, n);
  if (!r.length)
    return null;
  const o = r.find((s) => s.getAttribute(Vn.draggableId) === t);
  return !o || !Ts(o) ? null : o;
}
function gI(e) {
  const t = z({}), n = z(null), r = z(null), o = z(!1), s = G(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const h = t.current;
      h[f] !== m && delete h[f];
    };
  }, []), i = G(function(f) {
    const p = hI(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = G(function(f, p) {
    n.current === f && (n.current = p);
  }, []), c = G(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && i(f);
    }));
  }, [i]), l = G(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Vn.draggableId) === f && (n.current = f);
  }, []);
  return Xe(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), J(() => ({
    register: s,
    tryRecordFocus: l,
    tryRestoreFocusRecorded: c,
    tryShiftRecord: a
  }), [s, l, c, a]);
}
function yI() {
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
  function s(d) {
    const f = o(d);
    return f || _(!1), f;
  }
  const i = {
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
    getById: s,
    findById: o,
    exists: (d) => !!o(d),
    getAllByType: (d) => Object.values(e.draggables).filter((f) => f.descriptor.type === d)
  };
  function a(d) {
    return e.droppables[d] || null;
  }
  function c(d) {
    const f = a(d);
    return f || _(!1), f;
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
    draggable: i,
    droppable: l,
    subscribe: n,
    clean: u
  };
}
function bI() {
  const e = J(yI, []);
  return H(() => function() {
    Q.version.startsWith("16") || Q.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var rl = Q.createContext(null), Mo = () => {
  const e = document.body;
  return e || _(!1), e;
};
const vI = {
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
var xI = vI;
const wI = (e) => `rfd-announcement-${e}`;
function SI(e) {
  const t = J(() => wI(e), [e]), n = z(null);
  return H(function() {
    const s = document.createElement("div");
    return n.current = s, s.id = t, s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true"), Ut(s.style, xI), Mo().appendChild(s), function() {
      setTimeout(function() {
        const c = Mo();
        c.contains(s) && c.removeChild(s), s === n.current && (n.current = null);
      });
    };
  }, [t]), G((o) => {
    const s = n.current;
    if (s) {
      s.textContent = o;
      return;
    }
  }, []);
}
let CI = 0;
const ch = {
  separator: "::"
};
function PI(e, t = ch) {
  return J(() => `${e}${t.separator}${CI++}`, [t.separator, e]);
}
function DI(e, t = ch) {
  const n = Q.useId();
  return J(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var ol = "useId" in Q ? DI : PI;
function EI({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function II({
  contextId: e,
  text: t
}) {
  const n = ol("hidden-text", {
    separator: "-"
  }), r = J(() => EI({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return H(function() {
    const s = document.createElement("div");
    return s.id = r, s.textContent = t, s.style.display = "none", Mo().appendChild(s), function() {
      const a = Mo();
      a.contains(s) && a.removeChild(s);
    };
  }, [r, t]), r;
}
var Ls = Q.createContext(null);
function lh(e) {
  const t = z(e);
  return H(() => {
    t.current = e;
  }), t;
}
function RI() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(i) {
    return i === e;
  }
  function r(i) {
    e && _(!1);
    const a = {
      abandon: i
    };
    return e = a, a;
  }
  function o() {
    e || _(!1), e = null;
  }
  function s() {
    e && (e.abandon(), o());
  }
  return {
    isClaimed: t,
    isActive: n,
    claim: r,
    release: o,
    tryAbandon: s
  };
}
function Ar(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const $I = 9, OI = 13, sl = 27, uh = 32, AI = 33, NI = 34, TI = 35, LI = 36, jI = 37, _I = 38, MI = 39, kI = 40, FI = {
  [OI]: !0,
  [$I]: !0
};
var dh = (e) => {
  FI[e.keyCode] && e.preventDefault();
};
const BI = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var js = BI;
const fh = 0, gd = 5;
function VI(e, t) {
  return Math.abs(t.x - e.x) >= gd || Math.abs(t.y - e.y) >= gd;
}
const yd = {
  type: "IDLE"
};
function zI({
  cancel: e,
  completed: t,
  getPhase: n,
  setPhase: r
}) {
  return [{
    eventName: "mousemove",
    fn: (o) => {
      const {
        button: s,
        clientX: i,
        clientY: a
      } = o;
      if (s !== fh)
        return;
      const c = {
        x: i,
        y: a
      }, l = n();
      if (l.type === "DRAGGING") {
        o.preventDefault(), l.actions.move(c);
        return;
      }
      l.type !== "PENDING" && _(!1);
      const u = l.point;
      if (!VI(u, c))
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
      const s = n();
      if (s.type !== "DRAGGING") {
        e();
        return;
      }
      o.preventDefault(), s.actions.drop({
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
      if (o.keyCode === sl) {
        o.preventDefault(), e();
        return;
      }
      dh(o);
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
      const s = n();
      if (s.type === "IDLE" && _(!1), s.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: js,
    fn: e
  }];
}
function WI(e) {
  const t = z(yd), n = z(qt), r = J(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== fh || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
        return;
      const f = e.findClosestDraggableId(d);
      if (!f)
        return;
      const p = e.tryGetLock(f, i, {
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
  }), [e]), s = G(function() {
    const d = {
      passive: !1,
      capture: !0
    };
    n.current = rt(window, [o, r], d);
  }, [o, r]), i = G(() => {
    t.current.type !== "IDLE" && (t.current = yd, n.current(), s());
  }, [s]), a = G(() => {
    const u = t.current;
    i(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [i]), c = G(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = zI({
      cancel: a,
      completed: i,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = rt(window, f, d);
  }, [a, i]), l = G(function(d, f) {
    t.current.type !== "IDLE" && _(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, c();
  }, [c]);
  Xe(function() {
    return s(), function() {
      n.current();
    };
  }, [s]);
}
function GI() {
}
const HI = {
  [NI]: !0,
  [AI]: !0,
  [LI]: !0,
  [TI]: !0
};
function UI(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === sl) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === uh) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === kI) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === _I) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === MI) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === jI) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (HI[o.keyCode]) {
        o.preventDefault();
        return;
      }
      dh(o);
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
    eventName: js,
    fn: n
  }];
}
function qI(e) {
  const t = z(GI), n = J(() => ({
    eventName: "keydown",
    fn: function(s) {
      if (s.defaultPrevented || s.keyCode !== uh)
        return;
      const i = e.findClosestDraggableId(s);
      if (!i)
        return;
      const a = e.tryGetLock(i, u, {
        sourceEvent: s
      });
      if (!a)
        return;
      s.preventDefault();
      let c = !0;
      const l = a.snapLift();
      t.current();
      function u() {
        c || _(!1), c = !1, t.current(), r();
      }
      t.current = rt(window, UI(l, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = G(function() {
    const s = {
      passive: !1,
      capture: !0
    };
    t.current = rt(window, [n], s);
  }, [n]);
  Xe(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const xi = {
  type: "IDLE"
}, KI = 120, YI = 0.15;
function XI({
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
      n.keyCode === sl && n.preventDefault(), e();
    }
  }, {
    eventName: js,
    fn: e
  }];
}
function JI({
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
        clientX: s,
        clientY: i
      } = r.touches[0], a = {
        x: s,
        y: i
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
      o.type === "IDLE" && _(!1);
      const s = r.touches[0];
      if (!s || !(s.force >= YI))
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
    eventName: js,
    fn: e
  }];
}
function QI(e) {
  const t = z(xi), n = z(qt), r = G(function() {
    return t.current;
  }, []), o = G(function(p) {
    t.current = p;
  }, []), s = J(() => ({
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
        clientX: b,
        clientY: x
      } = h, w = {
        x: b,
        y: x
      };
      n.current(), d(g, w);
    }
  }), [e]), i = G(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = rt(window, [s], p);
  }, [s]), a = G(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(xi), n.current(), i());
  }, [i, o]), c = G(() => {
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
    }, g = rt(window, JI(m), p), h = rt(window, XI(m), p);
    n.current = function() {
      g(), h();
    };
  }, [c, r, a]), u = G(function() {
    const p = r();
    p.type !== "PENDING" && _(!1);
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = G(function(p, m) {
    r().type !== "IDLE" && _(!1);
    const g = setTimeout(u, KI);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), l();
  }, [l, r, o, u]);
  Xe(function() {
    return i(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(xi));
    };
  }, [r, i, o]), Xe(function() {
    return rt(window, [{
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
const ZI = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function ph(e, t) {
  if (t == null)
    return !1;
  if (ZI.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : ph(e, t.parentElement);
}
function eR(e, t) {
  const n = t.target;
  return Ts(n) ? ph(e, n) : !1;
}
var tR = (e) => vt(e.getBoundingClientRect()).center;
function nR(e) {
  return e instanceof ah(e).Element;
}
const rR = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function mh(e, t) {
  return e == null ? null : e[rR](t) ? e : mh(e.parentElement, t);
}
function oR(e, t) {
  return e.closest ? e.closest(t) : mh(e, t);
}
function sR(e) {
  return `[${Vn.contextId}="${e}"]`;
}
function iR(e, t) {
  const n = t.target;
  if (!nR(n))
    return null;
  const r = sR(e), o = oR(n, r);
  return !o || !Ts(o) ? null : o;
}
function aR(e, t) {
  const n = iR(e, t);
  return n ? n.getAttribute(Vn.draggableId) : null;
}
function cR(e, t) {
  const n = `[${na.contextId}="${e}"]`, o = ih(document, n).find((s) => s.getAttribute(na.id) === t);
  return !o || !Ts(o) ? null : o;
}
function lR(e) {
  e.preventDefault();
}
function ro({
  expected: e,
  phase: t,
  isLockActive: n,
  shouldWarn: r
}) {
  return !(!n() || e !== t);
}
function hh({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !nh(t.getState(), r));
}
function uR({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: s,
  sourceEvent: i
}) {
  if (!hh({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const c = r.draggable.getById(o), l = cR(t, c.descriptor.id);
  if (!l || i && !c.options.canDragInteractiveElements && eR(l, i))
    return null;
  const u = e.claim(s || qt);
  let d = "PRE_DRAG";
  function f() {
    return c.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(S, C) {
    ro({
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
    d !== "PRE_DRAG" && (C(), _(!1)), n.dispatch(KD(S.liftActionArgs)), d = "DRAGGING";
    function D(P, $ = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), $.shouldBlockNextClick) {
        const T = rt(window, [{
          eventName: "click",
          fn: lR,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout(T);
      }
      C(), n.dispatch(Km({
        reason: P
      }));
    }
    return {
      isActive: () => ro({
        expected: "DRAGGING",
        phase: d,
        isLockActive: p,
        shouldWarn: !1
      }),
      shouldRespectForcePress: f,
      drop: (P) => D("DROP", P),
      cancel: (P) => D("CANCEL", P),
      ...S.actions
    };
  }
  function b(S) {
    const C = Dr((P) => {
      g(() => qm({
        client: P
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
      moveUp: () => g(rE),
      moveRight: () => g(sE),
      moveDown: () => g(oE),
      moveLeft: () => g(iE)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: tR(l),
        movementMode: "SNAP"
      },
      cleanup: qt,
      actions: S
    });
  }
  function w() {
    ro({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !0
    }) && e.release();
  }
  return {
    isActive: () => ro({
      expected: "PRE_DRAG",
      phase: d,
      isLockActive: p,
      shouldWarn: !1
    }),
    shouldRespectForcePress: f,
    fluidLift: b,
    snapLift: x,
    abort: w
  };
}
const dR = [WI, qI, QI];
function fR({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const s = [...o ? dR : [], ...r || []], i = q(() => RI())[0], a = G(function(h, b) {
    Ar(h) && !Ar(b) && i.tryAbandon();
  }, [i]);
  Xe(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [i, t, a]), Xe(() => i.tryAbandon, [i.tryAbandon]);
  const c = G((g) => hh({
    lockAPI: i,
    registry: n,
    store: t,
    draggableId: g
  }), [i, n, t]), l = G((g, h, b) => uR({
    lockAPI: i,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: b && b.sourceEvent ? b.sourceEvent : null
  }), [e, i, n, t]), u = G((g) => aR(e, g), [e]), d = G((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = G(function() {
    i.isClaimed() && (i.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Xc()));
  }, [i, t]), p = G(() => i.isClaimed(), [i]), m = J(() => ({
    canGetLock: c,
    tryGetLock: l,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [c, l, u, d, f, p]);
  for (let g = 0; g < s.length; g++)
    s[g](m);
}
const pR = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    Q.version.startsWith("16") || Q.version.startsWith("17") ? n() : sa(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), mR = (e) => ({
  ...Or,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Or.durationDampening,
    ...e.autoScrollerOptions
  }
});
function ar(e) {
  return e.current || _(!1), e.current;
}
function hR(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: s
  } = e, i = z(null), a = lh(e), c = G(() => pR(a.current), [a]), l = G(() => mR(a.current), [a]), u = SI(t), d = II({
    contextId: t,
    text: s
  }), f = mI(t, o), p = G((T) => {
    ar(i).dispatch(T);
  }, []), m = J(() => Vu({
    publishWhileDragging: XD,
    updateDroppableScroll: QD,
    updateDroppableIsEnabled: ZD,
    updateDroppableIsCombineEnabled: eE,
    collectionStarting: JD
  }, p), [p]), g = bI(), h = J(() => HE(g, m), [g, m]), b = J(() => cI({
    scrollWindow: UE,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: l,
    ...Vu({
      move: qm
    }, p)
  }), [h.scrollDroppable, p, l]), x = gI(t), w = J(() => VE({
    announce: u,
    autoScroller: b,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: c,
    styleMarshal: f
  }), [u, b, h, x, c, f]);
  i.current = w;
  const v = G(() => {
    const T = ar(i);
    T.getState().phase !== "IDLE" && T.dispatch(Xc());
  }, []), S = G(() => {
    const T = ar(i).getState();
    return T.phase === "DROP_ANIMATING" ? !0 : T.phase === "IDLE" ? !1 : T.isDragging;
  }, []), C = J(() => ({
    isDragging: S,
    tryAbort: v
  }), [S, v]);
  n(C);
  const D = G((T) => nh(ar(i).getState(), T), []), P = G(() => ln(ar(i).getState()), []), $ = J(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: D,
    isMovementAllowed: P,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, x, D, P, g]);
  return fR({
    contextId: t,
    store: w,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), H(() => v, [v]), Q.createElement(Ls.Provider, {
    value: $
  }, Q.createElement(PP, {
    context: rl,
    store: w
  }, e.children));
}
let gR = 0;
function yR() {
  return J(() => `${gR++}`, []);
}
function bR() {
  return Q.useId();
}
var vR = "useId" in Q ? bR : yR;
function xR(e) {
  const t = vR(), n = e.dragHandleUsageInstructions || lo.dragHandleUsageInstructions;
  return Q.createElement(_P, null, (r) => Q.createElement(hR, {
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
const bd = {
  dragging: 5e3,
  dropAnimating: 4500
}, wR = (e, t) => t ? pr.drop(t.duration) : e ? pr.snap : pr.fluid, SR = (e, t) => {
  if (e)
    return t ? $r.opacity.drop : $r.opacity.combining;
}, CR = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function PR(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: s
  } = e, i = !!o, a = CR(e), c = !!s, l = c ? ea.drop(r, i) : ea.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: wR(a, s),
    transform: l,
    opacity: SR(i, c),
    zIndex: c ? bd.dropAnimating : bd.dragging,
    pointerEvents: "none"
  };
}
function DR(e) {
  return {
    transform: ea.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function ER(e) {
  return e.type === "DRAGGING" ? PR(e) : DR(e);
}
function IR(e, t, n = xe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), s = Sm(o, r), i = To(s, n), a = {
    client: s,
    tagName: t.tagName.toLowerCase(),
    display: r.display
  }, c = {
    x: s.marginBox.width,
    y: s.marginBox.height
  };
  return {
    descriptor: e,
    placeholder: a,
    displaceBy: c,
    client: s,
    page: i
  };
}
function RR(e) {
  const t = ol("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  } = e, c = J(() => ({
    canDragInteractiveElements: s,
    shouldRespectForcePress: i,
    isEnabled: a
  }), [s, a, i]), l = G((p) => {
    const m = o();
    return m || _(!1), IR(n, m, p);
  }, [n, o]), u = J(() => ({
    uniqueId: t,
    descriptor: n,
    options: c,
    getDimension: l
  }), [n, l, c, t]), d = z(u), f = z(!0);
  Xe(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Xe(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var il = Q.createContext(null);
function ko(e) {
  const t = wt(e);
  return t || _(!1), t;
}
function $R(e) {
  e.preventDefault();
}
const OR = (e) => {
  const t = z(null), n = G((C = null) => {
    t.current = C;
  }, []), r = G(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: s,
    registry: i
  } = ko(Ls), {
    type: a,
    droppableId: c
  } = ko(il), l = J(() => ({
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
    dropAnimationFinished: b
  } = e;
  if (!g) {
    const C = J(() => ({
      descriptor: l,
      registry: i,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [l, i, r, m, p, f]);
    RR(C);
  }
  const x = J(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": s,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: $R
  } : null, [o, s, d, f]), w = G((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (Q.version.startsWith("16") || Q.version.startsWith("17") ? b() : sa(b));
  }, [b, h]), v = J(() => {
    const C = ER(h), D = h.type === "DRAGGING" && h.dropping ? w : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: C,
        onTransitionEnd: D
      },
      dragHandleProps: x
    };
  }, [o, x, d, h, w, n]), S = J(() => ({
    draggableId: l.id,
    type: l.type,
    source: {
      index: l.index,
      droppableId: l.droppableId
    }
  }), [l.droppableId, l.id, l.index, l.type]);
  return Q.createElement(Q.Fragment, null, u(v, h.snapshot, S));
};
var AR = OR, gh = (e, t) => e === t, yh = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const NR = (e) => e.combine ? e.combine.draggableId : null, TR = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function LR() {
  const e = ve((o, s) => ({
    x: o,
    y: s
  })), t = ve((o, s, i = null, a = null, c = null) => ({
    isDragging: !0,
    isClone: s,
    isDropAnimating: !!c,
    dropAnimation: c,
    mode: o,
    draggingOver: i,
    combineWith: a,
    combineTargetFor: null
  })), n = ve((o, s, i, a, c = null, l = null, u = null) => ({
    mapped: {
      type: "DRAGGING",
      dropping: null,
      draggingOver: c,
      combineWith: l,
      mode: s,
      offset: o,
      dimension: i,
      forceShouldAnimate: u,
      snapshot: t(s, a, c, l, null)
    }
  }));
  return (o, s) => {
    if (Ar(o)) {
      if (o.critical.draggable.id !== s.draggableId)
        return null;
      const i = o.current.client.offset, a = o.dimensions.draggables[s.draggableId], c = Ye(o.impact), l = TR(o.impact), u = o.forceShouldAnimate;
      return n(e(i.x, i.y), o.movementMode, a, s.isClone, c, l, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const i = o.completed;
      if (i.result.draggableId !== s.draggableId)
        return null;
      const a = s.isClone, c = o.dimensions.draggables[s.draggableId], l = i.result, u = l.mode, d = yh(l), f = NR(l), m = {
        duration: o.dropDuration,
        curve: Qc.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? $r.opacity.drop : null,
        scale: f ? $r.scale.drop : null
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
function bh(e = null) {
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
const jR = {
  mapped: {
    type: "SECONDARY",
    offset: xe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: bh(null)
  }
};
function _R() {
  const e = ve((i, a) => ({
    x: i,
    y: a
  })), t = ve(bh), n = ve((i, a = null, c) => ({
    mapped: {
      type: "SECONDARY",
      offset: i,
      combineTargetFor: a,
      shouldAnimateDisplacement: c,
      snapshot: t(a)
    }
  })), r = (i) => i ? n(xe, i, !0) : null, o = (i, a, c, l) => {
    const u = c.displaced.visible[i], d = !!(l.inVirtualList && l.effected[i]), f = Os(c), p = f && f.draggableId === i ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (c.displaced.invisible[i])
        return null;
      const h = Yn(l.displacedBy.point), b = e(h.x, h.y);
      return n(b, p, !0);
    }
    if (d)
      return r(p);
    const m = c.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (i, a) => {
    if (Ar(i))
      return i.critical.draggable.id === a.draggableId ? null : o(a.draggableId, i.critical.draggable.id, i.impact, i.afterCritical);
    if (i.phase === "DROP_ANIMATING") {
      const c = i.completed;
      return c.result.draggableId === a.draggableId ? null : o(a.draggableId, c.result.draggableId, c.impact, c.afterCritical);
    }
    return null;
  };
}
const MR = () => {
  const e = LR(), t = _R();
  return (r, o) => e(r, o) || t(r, o) || jR;
}, kR = {
  dropAnimationFinished: Ym
}, FR = xm(MR, kR, null, {
  context: rl,
  areStatePropsEqual: gh
})(AR);
var BR = FR;
function vh(e) {
  return ko(il).isUsingCloneFor === e.draggableId && !e.isClone ? null : Q.createElement(BR, e);
}
function VR(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return Q.createElement(vh, Ut({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const xh = (e) => (t) => e === t, zR = xh("scroll"), WR = xh("auto"), vd = (e, t) => t(e.overflowX) || t(e.overflowY), GR = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return vd(n, zR) || vd(n, WR);
}, HR = () => !1, wh = (e) => e == null ? null : e === document.body ? HR() ? e : null : e === document.documentElement ? null : GR(e) ? e : wh(e.parentElement);
var ra = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Sh = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Sh(e.parentElement) : !1;
var UR = (e) => {
  const t = wh(e), n = Sh(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, qR = ({
  descriptor: e,
  isEnabled: t,
  isCombineEnabled: n,
  isFixedOnPage: r,
  direction: o,
  client: s,
  page: i,
  closest: a
}) => {
  const c = (() => {
    if (!a)
      return null;
    const {
      scrollSize: f,
      client: p
    } = a, m = Zm({
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
          value: xe,
          displacement: xe
        }
      }
    };
  })(), l = o === "vertical" ? Hc : Nm, u = Fn({
    page: i,
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
    client: s,
    page: i,
    frame: c,
    subject: u
  };
};
const KR = (e, t) => {
  const n = Cm(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, s = r + t.scrollHeight, i = o + t.scrollWidth, c = Vc({
    top: r,
    right: i,
    bottom: s,
    left: o
  }, n.border);
  return zc({
    borderBox: c,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var YR = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: s,
  isCombineEnabled: i,
  shouldClipSubject: a
}) => {
  const c = n.closestScrollable, l = KR(e, c), u = To(l, r), d = (() => {
    if (!c)
      return null;
    const p = Cm(c), m = {
      scrollHeight: c.scrollHeight,
      scrollWidth: c.scrollWidth
    };
    return {
      client: p,
      page: To(p, r),
      scroll: ra(c),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return qR({
    descriptor: t,
    isEnabled: !s,
    isCombineEnabled: i,
    isFixedOnPage: n.isFixedOnPage,
    direction: o,
    client: l,
    page: u,
    closest: d
  });
};
const XR = {
  passive: !1
}, JR = {
  passive: !0
};
var xd = (e) => e.shouldPublishImmediately ? XR : JR;
const oo = (e) => e && e.env.closestScrollable || null;
function QR(e) {
  const t = z(null), n = ko(Ls), r = ol("droppable"), {
    registry: o,
    marshal: s
  } = n, i = lh(e), a = J(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), c = z(a), l = J(() => ve((v, S) => {
    t.current || _(!1);
    const C = {
      x: v,
      y: S
    };
    s.updateDroppableScroll(a.id, C);
  }), [a.id, s]), u = G(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? xe : ra(v.env.closestScrollable);
  }, []), d = G(() => {
    const v = u();
    l(v.x, v.y);
  }, [u, l]), f = J(() => Dr(d), [d]), p = G(() => {
    const v = t.current, S = oo(v);
    if (v && S || _(!1), v.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = G((v, S) => {
    t.current && _(!1);
    const C = i.current, D = C.getDroppableRef();
    D || _(!1);
    const P = UR(D), $ = {
      ref: D,
      descriptor: a,
      env: P,
      scrollOptions: S
    };
    t.current = $;
    const T = YR({
      ref: D,
      descriptor: a,
      env: P,
      windowScroll: v,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), j = P.closestScrollable;
    return j && (j.setAttribute(md.contextId, n.contextId), j.addEventListener("scroll", p, xd($.scrollOptions))), T;
  }, [n.contextId, a, p, i]), g = G(() => {
    const v = t.current, S = oo(v);
    return v && S || _(!1), ra(S);
  }, []), h = G(() => {
    const v = t.current;
    v || _(!1);
    const S = oo(v);
    t.current = null, S && (f.cancel(), S.removeAttribute(md.contextId), S.removeEventListener("scroll", p, xd(v.scrollOptions)));
  }, [p, f]), b = G((v) => {
    const S = t.current;
    S || _(!1);
    const C = oo(S);
    C || _(!1), C.scrollTop += v.y, C.scrollLeft += v.x;
  }, []), x = J(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: g,
    dragStopped: h,
    scroll: b
  }), [h, m, g, b]), w = J(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: x
  }), [x, a, r]);
  Xe(() => (c.current = w.descriptor, o.droppable.register(w), () => {
    t.current && h(), o.droppable.unregister(w);
  }), [x, a, h, w, s, o.droppable]), Xe(() => {
    t.current && s.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, s]), Xe(() => {
    t.current && s.updateDroppableIsCombineEnabled(c.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, s]);
}
function wi() {
}
const wd = {
  width: 0,
  height: 0,
  margin: WP
}, ZR = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? wd : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, e$ = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = ZR({
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
    transition: n !== "none" ? pr.placeholder : null
  };
}, t$ = (e) => {
  const t = z(null), n = G(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: s,
    contextId: i
  } = e, [a, c] = q(e.animate === "open");
  H(() => a ? r !== "open" ? (n(), c(!1), wi) : t.current ? wi : (t.current = setTimeout(() => {
    t.current = null, c(!1);
  }), n) : wi, [r, a, n]);
  const l = G((d) => {
    d.propertyName === "height" && (o(), r === "close" && s());
  }, [r, s, o]), u = e$({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return Q.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": i,
    onTransitionEnd: l,
    ref: e.innerRef
  });
};
var n$ = Q.memo(t$);
class r$ extends Q.PureComponent {
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
const o$ = (e) => {
  const t = wt(Ls);
  t || _(!1);
  const {
    contextId: n,
    isMovementAllowed: r
  } = t, o = z(null), s = z(null), {
    children: i,
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
    getContainerForClone: b
  } = e, x = G(() => o.current, []), w = G((j = null) => {
    o.current = j;
  }, []);
  G(() => s.current, []);
  const v = G((j = null) => {
    s.current = j;
  }, []), S = G(() => {
    r() && h({
      maxScroll: th()
    });
  }, [r, h]);
  QR({
    droppableId: a,
    type: c,
    mode: l,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = J(() => Q.createElement(r$, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: j,
    data: F,
    animate: W
  }) => Q.createElement(n$, {
    placeholder: F,
    onClose: j,
    innerRef: v,
    animate: W,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, v]), D = J(() => ({
    innerRef: w,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, w]), P = g ? g.dragging.draggableId : null, $ = J(() => ({
    droppableId: a,
    type: c,
    isUsingCloneFor: P
  }), [a, P, c]);
  function T() {
    if (!g)
      return null;
    const {
      dragging: j,
      render: F
    } = g, W = Q.createElement(vh, {
      draggableId: j.draggableId,
      index: j.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (O, L) => F(O, L, j));
    return oa.createPortal(W, b());
  }
  return Q.createElement(il.Provider, {
    value: $
  }, i(D, m), T());
};
var s$ = o$;
function i$() {
  return document.body || _(!1), document.body;
}
const Sd = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: i$
}, Ch = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Sd)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Sd[n]
    });
  return t;
}, Si = (e, t) => e === t.droppable.type, Cd = (e, t) => t.draggables[e.draggable.id], a$ = () => {
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
  }, n = ve((s) => ({
    draggableId: s.id,
    type: s.type,
    source: {
      index: s.index,
      droppableId: s.droppableId
    }
  })), r = ve((s, i, a, c, l, u) => {
    const d = l.descriptor.id;
    if (l.descriptor.droppableId === s) {
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
    if (!i)
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
  return (s, i) => {
    const a = Ch(i), c = a.droppableId, l = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (Ar(s)) {
      const f = s.critical;
      if (!Si(l, f))
        return t;
      const p = Cd(f, s.dimensions), m = Ye(s.impact) === c;
      return r(c, u, m, m, p, d);
    }
    if (s.phase === "DROP_ANIMATING") {
      const f = s.completed;
      if (!Si(l, f.critical))
        return t;
      const p = Cd(f.critical, s.dimensions);
      return r(c, u, yh(f.result) === c, Ye(f.impact) === c, p, d);
    }
    if (s.phase === "IDLE" && s.completed && !s.shouldFlush) {
      const f = s.completed;
      if (!Si(l, f.critical))
        return t;
      const p = Ye(f.impact) === c, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === c;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, c$ = {
  updateViewportMaxScroll: nE
}, l$ = xm(a$, c$, (e, t, n) => ({
  ...Ch(n),
  ...e,
  ...t
}), {
  context: rl,
  areStatePropsEqual: gh
})(s$);
var u$ = l$;
const d$ = "_item_1o9ja_1", f$ = "_itemDragging_1o9ja_12", p$ = "_symbol_1o9ja_16", m$ = "_dragHandle_1o9ja_22", so = {
  item: d$,
  itemDragging: f$,
  symbol: p$,
  dragHandle: m$
};
function h$({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = $t(), s = t ? t.filterDictionaries : [], i = (c) => {
    if (!t || !c.destination)
      return;
    const l = Array.from(s), [u] = l.splice(c.source.index, 1);
    l.splice(c.destination.index, 0, u), n({ ...t, filterDictionaries: l }), r(!0);
  }, a = s.map((c, l) => /* @__PURE__ */ y.jsx(VR, { index: l, draggableId: c.ifcClassification.location, children: (u, d) => /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: at(so.item, { [so.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ y.jsx("div", { ...u.dragHandleProps, className: so.dragHandle, children: /* @__PURE__ */ y.jsx(hS, { style: { width: R(18), height: R(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ y.jsx($e, { className: so.uri, children: c.ifcClassification.location })
      ]
    }
  ) }, c.ifcClassification.location));
  return /* @__PURE__ */ y.jsxs(se.Item, { value: e.toString(), children: [
    /* @__PURE__ */ y.jsxs(se.Control, { children: [
      /* @__PURE__ */ y.jsx(Sn, { order: 5, children: o("sortFilterDictionariesLabel") }),
      /* @__PURE__ */ y.jsx($e, { size: "xs", c: "dimmed", children: o("sortFilterDictionariesInstruction") })
    ] }),
    /* @__PURE__ */ y.jsx(se.Panel, { children: /* @__PURE__ */ y.jsx(xR, { onDragEnd: i, children: /* @__PURE__ */ y.jsx(u$, { droppableId: "dnd-list", direction: "vertical", children: (c) => /* @__PURE__ */ y.jsxs("div", { ...c.droppableProps, ref: c.innerRef, children: [
      a,
      c.placeholder
    ] }) }) }) })
  ] }, e);
}
function g$({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = $t(), s = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], i = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ y.jsx(
    gc,
    {
      label: r("language"),
      data: s,
      value: o.language,
      onChange: i,
      placeholder: r("selectLanguageInstruction")
    }
  );
}
function y$({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = $t(), s = Ac(), i = bt(Xp), a = bt(TC), c = z();
  return H(() => {
    i && s(WC(i));
  }, [s, i]), H(() => {
    if (!i || a === null)
      return;
    const l = {
      bsddApiEnvironment: i,
      includeTestDictionaries: a
    };
    c.current && c.current.bsddApiEnvironment === l.bsddApiEnvironment && c.current.includeTestDictionaries === l.includeTestDictionaries || (s(Yi(l)), c.current = l);
  }, [s, i, a]), /* @__PURE__ */ y.jsxs(se.Item, { value: e.toString(), children: [
    /* @__PURE__ */ y.jsxs(se.Control, { children: [
      /* @__PURE__ */ y.jsx(Sn, { order: 5, children: o("generalSettingsLabel") }),
      /* @__PURE__ */ y.jsx($e, { size: "xs", c: "dimmed", children: o("generalSettingsInstruction") })
    ] }),
    /* @__PURE__ */ y.jsxs(se.Panel, { children: [
      /* @__PURE__ */ y.jsx(g$, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ y.jsx(wr, { h: "xs" }),
      /* @__PURE__ */ y.jsx(
        wn,
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
function b$({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r
}) {
  const { t: o } = $t(), { mainDictionary: s, filterDictionaries: i } = t, [a, c] = q([]);
  H(() => {
    const u = [s, ...i].filter(Boolean), d = new Map(u.map((p) => [p.ifcClassification.location, p])), f = Array.from(d.values());
    c(f);
  }, [s, i]);
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
  return /* @__PURE__ */ y.jsxs(se.Item, { value: e.toString(), children: [
    /* @__PURE__ */ y.jsxs(se.Control, { children: [
      /* @__PURE__ */ y.jsx(Sn, { order: 5, children: o("parameterMappingLabel") }),
      /* @__PURE__ */ y.jsx($e, { size: "xs", c: "dimmed", children: o("parameterMappingInstruction") })
    ] }),
    /* @__PURE__ */ y.jsx(se.Panel, { children: a.map((u, d) => {
      const f = u.ifcClassification.location || d;
      return /* @__PURE__ */ y.jsxs("div", { style: { marginBottom: "1em" }, children: [
        /* @__PURE__ */ y.jsx(
          wc,
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
function v$() {
  var u, d;
  const e = Ac(), t = bt((f) => f.settings), [n, r] = q(t), [o, s] = q(!1), [i, a] = q(!0);
  H(() => {
    r(t);
  }, [t]);
  const c = () => {
    var f;
    console.log("Saving", n), n && (e($c(n)), (f = window == null ? void 0 : window.bsddBridge) == null || f.saveSettings(JSON.stringify(n)), s(!1));
  }, l = () => {
    r(t), s(!1);
  };
  return /* @__PURE__ */ y.jsxs(yt.Panel, { value: "settings", children: [
    /* @__PURE__ */ y.jsxs(se, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ y.jsx(u1, { id: 0 }),
      /* @__PURE__ */ y.jsx(
        y$,
        {
          id: 1,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: s
        }
      ),
      /* @__PURE__ */ y.jsx(
        m1,
        {
          id: 2,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: s,
          setIsLoading: a
        }
      ),
      /* @__PURE__ */ y.jsx(
        b$,
        {
          id: 3,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: s
        }
      ),
      /* @__PURE__ */ y.jsx(
        h$,
        {
          id: 4,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: s
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs(Ln, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ y.jsx(
        br,
        {
          fullWidth: !0,
          loading: i,
          onClick: c,
          disabled: !o || !((d = (u = n == null ? void 0 : n.mainDictionary) == null ? void 0 : u.ifcClassification) != null && d.location),
          variant: i ? "light" : "filled",
          loaderProps: { type: "dots" },
          children: "Save"
        }
      ),
      /* @__PURE__ */ y.jsx(br, { fullWidth: !0, variant: "light", onClick: l, disabled: !o, children: "Cancel" })
    ] })
  ] });
}
let x$;
const w$ = (e) => async (t, n) => {
  const r = n(), o = Lu(r, e.mainDictionary), s = e.filterDictionaries.map((a) => Lu(r, a)).filter((a) => a !== null), i = {
    ...e,
    mainDictionary: o,
    filterDictionaries: s
  };
  t($c(i));
};
function S$() {
  const e = Ac(), { t } = $t(), n = bt(VC), [r, o] = q(null), [s, i] = q(null), [a, c] = q(!0);
  return H(() => {
    (async () => {
      try {
      } catch (u) {
        console.error("Error connecting to bsddBridge:", u);
      }
    })();
  }, []), H(() => {
    r && (n ? (e(w$(r)), o(null), c(!1)) : (r != null && r.bsddApiEnvironment && e(LC(r.bsddApiEnvironment)), (r == null ? void 0 : r.includeTestDictionaries) !== null && e(_C(r.includeTestDictionaries)), r != null && r.language && e(jC(r.language))));
  }, [n, r, e]), H(() => {
    !a && s && (e(t1(s)), i(null));
  }, [a, s, e]), H(() => {
    i([]);
  }, []), H(() => {
    (async () => {
      var d;
      const u = await ((d = window == null ? void 0 : window.bsddBridge) == null ? void 0 : d.loadSettings());
      if (u) {
        const f = JSON.parse(u);
        console.log("initial loadSettings selection", f), o(f);
      }
    })();
  }, []), window.updateSelection = (l) => {
    console.log("updateSelection", l), i(l);
  }, window.updateSettings = (l) => {
    console.log("updateSettings", l), o(l);
  }, /* @__PURE__ */ y.jsx(cc, { size: "40rem", children: /* @__PURE__ */ y.jsxs(yt, { defaultValue: "link", children: [
    /* @__PURE__ */ y.jsxs(yt.List, { grow: !0, children: [
      /* @__PURE__ */ y.jsx(yt.Tab, { value: "link", children: t("linkTabTitle") }),
      /* @__PURE__ */ y.jsx(yt.Tab, { value: "settings", children: t("settingsTabTitle") })
    ] }),
    /* @__PURE__ */ y.jsx(l1, { loading: a }),
    /* @__PURE__ */ y.jsx(v$, {})
  ] }) });
}
function C$() {
  return /* @__PURE__ */ y.jsx(ef, { theme: xS, children: /* @__PURE__ */ y.jsx(S$, {}) });
}
const P$ = oC({
  reducer: {
    settings: MC,
    ifcData: n1,
    bsdd: GC
  }
});
Pi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ y.jsx(Q.StrictMode, { children: /* @__PURE__ */ y.jsx(hg, { store: P$, children: /* @__PURE__ */ y.jsx(C$, {}) }) })
);
