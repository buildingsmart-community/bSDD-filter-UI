var Ng = Object.defineProperty;
var Mg = (e, t, n) => t in e ? Ng(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var je = (e, t, n) => (Mg(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as k from "react";
import Q, { createContext as tn, useContext as wt, useState as q, useRef as V, useEffect as H, Fragment as Dd, useMemo as Ht, useCallback as ee, useLayoutEffect as Fo, useId as Id, forwardRef as te, cloneElement as yn, Children as _g, createElement as Cs } from "react";
import * as Fg from "react-dom";
import oa, { flushSync as ia, createPortal as zg, unstable_batchedUpdates as Bg } from "react-dom";
function Pd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kd = { exports: {} }, zo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vg = Q, Wg = Symbol.for("react.element"), Gg = Symbol.for("react.fragment"), Hg = Object.prototype.hasOwnProperty, Ug = Vg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ed(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Hg.call(t, r) && !qg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Wg, type: e, key: i, ref: s, props: o, _owner: Ug.current };
}
zo.Fragment = Gg;
zo.jsx = Ed;
zo.jsxs = Ed;
kd.exports = zo;
var b = kd.exports, Ds = {}, pc = oa;
Ds.createRoot = pc.createRoot, Ds.hydrateRoot = pc.hydrateRoot;
var Td = { exports: {} }, Rd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr = Q;
function Kg(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Yg = typeof Object.is == "function" ? Object.is : Kg, Jg = Lr.useSyncExternalStore, Xg = Lr.useRef, Qg = Lr.useEffect, Zg = Lr.useMemo, eh = Lr.useDebugValue;
Rd.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Xg(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = Zg(function() {
    function l(p) {
      if (!c) {
        if (c = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, Yg(u, p))
        return m;
      var h = r(p);
      return o !== void 0 && o(m, h) ? m : (u = p, d = h);
    }
    var c = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, o]);
  var a = Jg(e, i[0], i[1]);
  return Qg(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), eh(a), a;
};
Td.exports = Rd;
var th = Td.exports, He = (
  // prettier-ignore
  // @ts-ignore
  "default" in k ? k.default : k
), mc = Symbol.for("react-redux-context"), gc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function nh() {
  if (!He.createContext)
    return {};
  const e = gc[mc] ?? (gc[mc] = /* @__PURE__ */ new Map());
  let t = e.get(He.createContext);
  return t || (t = He.createContext(
    null
  ), e.set(He.createContext, t)), t;
}
var Yt = /* @__PURE__ */ nh(), rh = () => {
  throw new Error("uSES not initialized!");
};
function sa(e = Yt) {
  return function() {
    return He.useContext(e);
  };
}
var Od = /* @__PURE__ */ sa(), Ld = rh, oh = (e) => {
  Ld = e;
}, ih = (e, t) => e === t;
function sh(e = Yt) {
  const t = e === Yt ? Od : sa(e), n = (r, o = {}) => {
    const { equalityFn: i = ih, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: l,
      getServerState: c,
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
      [r, u, s.stabilityCheck]
    ), p = Ld(
      l.addNestedSub,
      a.getState,
      c || a.getState,
      f,
      i
    );
    return He.useDebugValue(p), p;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ah = /* @__PURE__ */ sh();
function lh(e) {
  e();
}
function ch() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      lh(() => {
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
var hc = {
  notify() {
  },
  get: () => []
};
function uh(e, t) {
  let n, r = hc, o = 0, i = !1;
  function s(h) {
    u();
    const g = r.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, g(), d());
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
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = ch());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = hc);
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
var dh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fh = typeof navigator < "u" && navigator.product === "ReactNative", ph = dh || fh ? He.useLayoutEffect : He.useEffect;
function mh({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = He.useMemo(() => {
    const c = uh(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = He.useMemo(() => e.getState(), [e]);
  ph(() => {
    const { subscription: c } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || Yt;
  return /* @__PURE__ */ He.createElement(l.Provider, { value: s }, n);
}
var gh = mh;
function $d(e = Yt) {
  const t = e === Yt ? Od : (
    // @ts-ignore
    sa(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var hh = /* @__PURE__ */ $d();
function bh(e = Yt) {
  const t = e === Yt ? hh : $d(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var yh = /* @__PURE__ */ bh();
oh(th.useSyncExternalStoreWithSelector);
const vh = {
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
    this.prefix = n.prefix || "i18next:", this.logger = t || vh, this.options = n, this.debug = n.debug;
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
var Pt = new uo();
class Bo {
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
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((s) => {
      let [a, l] = s;
      for (let c = 0; c < l; c++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [a, l] = s;
      for (let c = 0; c < l; c++)
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
function bc(e) {
  return e == null ? "" : "" + e;
}
function xh(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const wh = /###/g;
function ur(e, t, n) {
  function r(a) {
    return a && a.indexOf("###") > -1 ? a.replace(wh, ".") : a;
  }
  function o() {
    return !e || typeof e == "string";
  }
  const i = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < i.length - 1; ) {
    if (o())
      return {};
    const a = r(i[s]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++s;
  }
  return o() ? {} : {
    obj: e,
    k: r(i[s])
  };
}
function yc(e, t, n) {
  const {
    obj: r,
    k: o
  } = ur(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[o] = n;
    return;
  }
  let i = t[t.length - 1], s = t.slice(0, t.length - 1), a = ur(e, s, Object);
  for (; a.obj === void 0 && s.length; )
    i = `${s[s.length - 1]}.${i}`, s = s.slice(0, s.length - 1), a = ur(e, s, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = n;
}
function Sh(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = ur(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function fo(e, t) {
  const {
    obj: n,
    k: r
  } = ur(e, t);
  if (n)
    return n[r];
}
function Ch(e, t, n) {
  const r = fo(e, n);
  return r !== void 0 ? r : fo(t, n);
}
function jd(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : jd(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function Dn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Dh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Ih(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Dh[t]) : e;
}
class Ph {
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
const kh = [" ", ",", "?", "!", ";"], Eh = new Ph(20);
function Th(e, t, n) {
  t = t || "", n = n || "";
  const r = kh.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0)
    return !0;
  const o = Eh.getRegExp(`(${r.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let i = !o.test(e);
  if (!i) {
    const s = e.indexOf(n);
    s > 0 && !o.test(e.substring(0, s)) && (i = !0);
  }
  return i;
}
function Is(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e)
    return;
  if (e[t])
    return e[t];
  const r = t.split(n);
  let o = e;
  for (let i = 0; i < r.length; ) {
    if (!o || typeof o != "object")
      return;
    let s, a = "";
    for (let l = i; l < r.length; ++l)
      if (l !== i && (a += n), a += r[l], s = o[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && l < r.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    o = s;
  }
  return o;
}
function po(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class vc extends Bo {
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
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && i ? a.push(...r.split(i)) : a.push(r)));
    const l = fo(this.data, a);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), l || !s || typeof r != "string" ? l : Is(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), yc(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
  }
  addResources(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (typeof r[i] == "string" || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], {
        silent: !0
      });
    o.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), o = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = fo(this.data, a) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))), o ? jd(l, r, i) : l = {
      ...l,
      ...r
    }, yc(this.data, a, l), s.silent || this.emit("added", t, n, r);
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
var Ad = {
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
const xc = {};
class mo extends Bo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), xh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Pt.create("translator");
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
    const s = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Th(t, r, o);
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
        const v = n.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${l}${v}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${v}${s}`;
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
    const p = d && d.usedKey || s, m = d && d.exactUsedKey || s, h = Object.prototype.toString.apply(f), g = ["[object Number]", "[object Function]", "[object RegExp]"], y = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, x = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (x && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && g.indexOf(h) < 0 && !(typeof y == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const v = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, {
          ...n,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = v, d.usedParams = this.getUsedParamsDetails(n), d) : v;
      }
      if (i) {
        const v = Array.isArray(f), S = v ? [] : {}, C = v ? m : p;
        for (const I in f)
          if (Object.prototype.hasOwnProperty.call(f, I)) {
            const D = `${C}${i}${I}`;
            S[I] = this.translate(D, {
              ...n,
              joinArrays: !1,
              ns: a
            }), S[I] === D && (S[I] = f[I]);
          }
        f = S;
      }
    } else if (x && typeof y == "string" && Array.isArray(f))
      f = f.join(y), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let v = !1, S = !1;
      const C = n.count !== void 0 && typeof n.count != "string", I = mo.hasDefaultValue(n), D = C ? this.pluralResolver.getSuffix(c, n.count, n) : "", T = n.ordinal && C ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", $ = C && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), A = $ && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${D}`] || n[`defaultValue${T}`] || n.defaultValue;
      !this.isValidLookup(f) && I && (v = !0, f = A), this.isValidLookup(f) || (S = !0, f = s);
      const W = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, R = I && A !== f && this.options.updateMissing;
      if (S || v || R) {
        if (this.logger.log(R ? "updateKey" : "missingKey", c, l, s, R ? A : f), i) {
          const L = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let j = [];
        const P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && P && P[0])
          for (let L = 0; L < P.length; L++)
            j.push(P[L]);
        else
          this.options.saveMissingTo === "all" ? j = this.languageUtils.toResolveHierarchy(n.lng || this.language) : j.push(n.lng || this.language);
        const O = (L, z, M) => {
          const K = I && M !== f ? M : W;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(L, l, z, K, R, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, l, z, K, R, n), this.emit("missingKey", L, l, z, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? j.forEach((L) => {
          const z = this.pluralResolver.getSuffixes(L, n);
          $ && n[`defaultValue${this.options.pluralSeparator}zero`] && z.indexOf(`${this.options.pluralSeparator}zero`) < 0 && z.push(`${this.options.pluralSeparator}zero`), z.forEach((M) => {
            O([L], s + M, n[`defaultValue${M}`] || A);
          });
        }) : O(j, s, A));
      }
      f = this.extendTranslation(f, t, n, d, r), S && f === s && this.options.appendNamespaceToMissingKey && (f = `${l}:${s}`), (S || v) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${s}` : s, v ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
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
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = Ad.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
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
      const f = n.count !== void 0 && typeof n.count != "string", p = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), m = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", h = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((g) => {
        this.isValidLookup(r) || (a = g, !xc[`${h[0]}-${g}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (xc[`${h[0]}-${g}`] = !0, this.logger.warn(`key "${o}" for languages "${h.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach((y) => {
          if (this.isValidLookup(r))
            return;
          s = y;
          const x = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(x, u, y, g, n);
          else {
            let v;
            f && (v = this.pluralResolver.getSuffix(y, n.count, n));
            const S = `${this.options.pluralSeparator}zero`, C = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (x.push(u + v), n.ordinal && v.indexOf(C) === 0 && x.push(u + v.replace(C, this.options.pluralSeparator)), p && x.push(u + S)), m) {
              const I = `${u}${this.options.contextSeparator}${n.context}`;
              x.push(I), f && (x.push(I + v), n.ordinal && v.indexOf(C) === 0 && x.push(I + v.replace(C, this.options.pluralSeparator)), p && x.push(I + S));
            }
          }
          let w;
          for (; w = x.pop(); )
            this.isValidLookup(r) || (i = w, r = this.getResource(y, g, w, n));
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
function Wi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class wc {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Pt.create("languageUtils");
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
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Wi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Wi(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Wi(r[2].toLowerCase()))), r.join("-");
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
        if (!(i.indexOf("-") < 0 && o.indexOf("-") < 0) && (i.indexOf("-") > 0 && o.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === o || i.indexOf(o) === 0 && o.length > 1))
          return i;
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
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), o = [], i = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), r.forEach((s) => {
      o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
    }), o;
  }
}
let Rh = [{
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
}], Oh = {
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
const Lh = ["v1", "v2", "v3"], $h = ["v4"], Sc = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function jh() {
  const e = {};
  return Rh.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: Oh[t.fc]
      };
    });
  }), e;
}
class Ah {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Pt.create("pluralResolver"), (!this.options.compatibilityJSON || $h.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = jh();
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => Sc[o] - Sc[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
    return !Lh.includes(this.options.compatibilityJSON);
  }
}
function Cc(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Ch(e, t, n);
  return !i && o && typeof n == "string" && (i = Is(e, n, r), i === void 0 && (i = Is(t, n, r))), i;
}
class Nh {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Pt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
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
      prefix: i,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: p,
      nestingSuffix: m,
      nestingSuffixEscaped: h,
      nestingOptionsSeparator: g,
      maxReplaces: y,
      alwaysFormat: x
    } = t.interpolation;
    this.escape = n !== void 0 ? n : Ih, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Dn(i) : s || "{{", this.suffix = a ? Dn(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? Dn(f) : p || Dn("$t("), this.nestingSuffix = m ? Dn(m) : h || Dn(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = y || 1e3, this.alwaysFormat = x !== void 0 ? x : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, o) {
    let i, s, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function c(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const x = Cc(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : x;
      }
      const h = m.split(this.formatSeparator), g = h.shift().trim(), y = h.join(this.formatSeparator).trim();
      return this.format(Cc(n, l, g, this.options.keySeparator, this.options.ignoreJSONStructure), y, r, {
        ...o,
        ...n,
        interpolationkey: g
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
        const h = i[1].trim();
        if (s = u(h), s === void 0)
          if (typeof d == "function") {
            const y = d(t, i, o);
            s = typeof y == "string" ? y : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, h))
            s = "";
          else if (f) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${h} for interpolating ${t}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = bc(s));
        const g = m.safeValue(s);
        if (t = t.replace(i[0], g), f ? (m.regex.lastIndex += s.length, m.regex.lastIndex -= i[0].length) : m.regex.lastIndex = 0, a++, a >= this.maxReplaces)
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
      } catch (h) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, h), `${l}${u}${f}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, l;
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
      typeof i != "string" && (i = bc(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), c && (i = l.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: o[1].trim()
      }), i.trim())), t = t.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function Mh(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const o = r[1].substring(0, r[1].length - 1);
    t === "currency" && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : t === "relativetime" && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((s) => {
      if (s) {
        const [a, ...l] = s.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function In(e) {
  const t = {};
  return function(r, o, i) {
    const s = o + JSON.stringify(i);
    let a = t[s];
    return a || (a = e(po(o), i), t[s] = a), a(r);
  };
}
class _h {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Pt.create("formatter"), this.options = t, this.formats = {
      number: In((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      currency: In((n, r) => {
        const o = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: In((n, r) => {
        const o = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i);
      }),
      relativetime: In((n, r) => {
        const o = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (i) => o.format(i, r.range || "day");
      }),
      list: In((n, r) => {
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
    this.formats[t.toLowerCase().trim()] = In(n);
  }
  format(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((a, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = Mh(l);
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
function Fh(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class zh extends Bo {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = Pt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
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
    n && this.emit("failedLoading", i, s, n), r && this.store.addResourceBundle(i, s, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const a = {};
    this.queue.forEach((l) => {
      Sh(l.loaded, [i], s), Fh(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
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
function Dc() {
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
function Ic(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Yr() {
}
function Bh(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class mr extends Bo {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ic(t), this.services = {}, this.logger = Pt, this.modules = {
      external: []
    }, Bh(this), n && !this.isInitialized && !t.isClone) {
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
    const o = Dc();
    this.options = {
      ...o,
      ...this.options,
      ...Ic(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Pt.init(i(this.modules.logger), this.options) : Pt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = _h);
      const d = new wc(this.options);
      this.store = new vc(this.options.resources, this.options);
      const f = this.services;
      f.logger = Pt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Ah(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Nh(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new zh(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
        for (var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), g = 1; g < m; g++)
          h[g - 1] = arguments[g];
        t.emit(p, ...h);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new mo(this.services, this.options), this.translator.on("*", function(p) {
        for (var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), g = 1; g < m; g++)
          h[g - 1] = arguments[g];
        t.emit(p, ...h);
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
    const l = er(), c = () => {
      const u = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Yr;
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
    const o = er();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Yr), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Ad.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new wc(Dc());
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
    }, i = new mr(o);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new vc(this.store.data, o), i.services.resourceStore = i.store), i.translator = new mo(i.services, o), i.translator.on("*", function(a) {
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
const Ie = mr.createInstance();
Ie.createInstance = mr.createInstance;
Ie.createInstance;
Ie.dir;
Ie.init;
Ie.loadResources;
Ie.reloadResources;
Ie.use;
Ie.changeLanguage;
Ie.getFixedT;
Ie.t;
Ie.exists;
Ie.setDefaultNamespace;
Ie.hasLoadedNamespace;
Ie.loadNamespaces;
Ie.loadLanguages;
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
function Vh() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Pc = {};
function Ps() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Pc[t[0]] || (typeof t[0] == "string" && (Pc[t[0]] = /* @__PURE__ */ new Date()), Vh(...t));
}
const Nd = (e, t) => () => {
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
function kc(e, t, n) {
  e.loadNamespaces(t, Nd(e, n));
}
function Ec(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Nd(e, r));
}
function Wh(e, t) {
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
function Gh(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Ps("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (o, i) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, e))
        return !1;
    }
  }) : Wh(e, t, n);
}
const Hh = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Uh = {
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
}, qh = (e) => Uh[e], Kh = (e) => e.replace(Hh, qh);
let ks = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Kh
};
function Yh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  ks = {
    ...ks,
    ...e
  };
}
function Jh() {
  return ks;
}
let Md;
function Xh(e) {
  Md = e;
}
function Qh() {
  return Md;
}
const Zh = {
  type: "3rdParty",
  init(e) {
    Yh(e.options.react), Xh(e);
  }
}, eb = tn();
class tb {
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
const nb = (e, t) => {
  const n = V();
  return H(() => {
    n.current = t ? n.current : e;
  }, [e, t]), n.current;
};
function Tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: o
  } = wt(eb) || {}, i = n || r || Qh();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new tb()), !i) {
    Ps("You will need to pass in an i18next instance by using initReactI18next");
    const w = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, v = [w, {}, !1];
    return v.t = w, v.i18n = {}, v.ready = !1, v;
  }
  i.options.react && i.options.react.wait !== void 0 && Ps("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Jh(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: l
  } = s;
  let c = e || o || i.options && i.options.defaultNS;
  c = typeof c == "string" ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((w) => Gh(w, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? c : c[0], l);
  }
  const [f, p] = q(d);
  let m = c.join();
  t.lng && (m = `${t.lng}${m}`);
  const h = nb(m), g = V(!0);
  H(() => {
    const {
      bindI18n: w,
      bindI18nStore: v
    } = s;
    g.current = !0, !u && !a && (t.lng ? Ec(i, t.lng, c, () => {
      g.current && p(d);
    }) : kc(i, c, () => {
      g.current && p(d);
    })), u && h && h !== m && g.current && p(d);
    function S() {
      g.current && p(d);
    }
    return w && i && i.on(w, S), v && i && i.store.on(v, S), () => {
      g.current = !1, w && i && w.split(" ").forEach((C) => i.off(C, S)), v && i && v.split(" ").forEach((C) => i.store.off(C, S));
    };
  }, [i, m]);
  const y = V(!0);
  H(() => {
    g.current && !y.current && p(d), y.current = !1;
  }, [i, l]);
  const x = [f, i, u];
  if (x.t = f, x.i18n = i, x.ready = u, u || !u && !a)
    return x;
  throw new Promise((w) => {
    t.lng ? Ec(i, t.lng, c, () => w()) : kc(i, c, () => w());
  });
}
const rb = {
  apply: "تطبيق",
  cancel: "إلغاء",
  classSearchInstruction: "حدد تصنيفًا في مربع البحث أعلاه.",
  noDescription: "لا يوجد وصف",
  linkTabTitle: "رابط",
  settingsTabTitle: "الإعدادات",
  language: "اللغة",
  searchMainDictionaryLabel: "ابحث عن فئة",
  selectLanguageInstruction: "اختر اللغة",
  selectMainDictionary: "القاموس الرئيسي",
  selectIfcDictionary: "قاموس IFC",
  selectFilterDictionaries: "اختيار قواميس التصفية في",
  selectObjects: "حدد الكائنات",
  attachToType: "إرفاق بالنوع",
  generalSettingsLabel: "الإعدادات العامة",
  dictionarySelectionLabel: "اختيار القاموس",
  generalSettingsInstruction: "حدد اللغة وبيئة bSDD.",
  dictionarySelectionInstruction: "حدد القاموس الرئيسي وقواميس التصفية لاستخدامها في اختيار الكائنات. يتم استخدام القاموس الرئيسي لاختيار الكائنات. يتم استخدام قواميس التصفية لتصفية اختيار الكائنات.",
  parameterMappingLabel: "تعيين المعلمات",
  parameterMappingInstruction: "حدد معلمة نوع Revit التي سيتم تخزين الفئات المحددة لهذا القاموس فيها.",
  sortFilterDictionariesLabel: "فرز قواميس التصفية",
  sortFilterDictionariesInstruction: "سيتم عرض القواميس بهذا الترتيب في أي مكان في التطبيق.",
  dictionaryValidationSummaryLabel: "التحقق من القاموس",
  classificationsLabel: "التصنيفات",
  noClassificationSelected: "لم يتم تحديد تصنيف",
  propertysetsLabel: "مجموعات الخصائص",
  ShowPreview: "عرض معاينة القواميس",
  entitySelectionInstruction: "حدد الكيانات باستخدام القائمة المنسدلة في أعلى اللوحة.",
  needHelp: "تحتاج مساعدة؟",
  checkDocumentation: "تحقق من وثائقنا",
  appInfoLabel: "معلومات التطبيق",
  appInfoInstruction: "معلومات حول هذا المكون الإضافي"
}, ob = {
  translation: rb
}, ib = {
  apply: "Použít",
  cancel: "Zrušit",
  classSearchInstruction: "Vyberte klasifikaci v horním vyhledávacím poli.",
  noDescription: "Žádný popis",
  linkTabTitle: "Odkaz",
  settingsTabTitle: "Nastavení",
  language: "Jazyk",
  searchMainDictionaryLabel: "Vyhledat třídu",
  selectLanguageInstruction: "Vyberte jazyk",
  selectMainDictionary: "Hlavní slovník",
  selectIfcDictionary: "Slovník IFC",
  selectFilterDictionaries: "Výběr filtračních slovníků v",
  selectObjects: "Vyberte objekty",
  attachToType: "Připojit k typu",
  generalSettingsLabel: "Obecná nastavení",
  dictionarySelectionLabel: "Výběr slovníku",
  generalSettingsInstruction: "Nastavte jazyk a prostředí bSDD.",
  dictionarySelectionInstruction: "Vyberte hlavní slovník a filtrační slovníky pro výběr objektů. Hlavní slovník se používá k výběru objektů. Filtrační slovníky se používají k filtrování výběru objektů.",
  parameterMappingLabel: "Mapování parametrů",
  parameterMappingInstruction: "Definujte parametr typu Revit, ve kterém budou uloženy vybrané třídy pro tento slovník.",
  sortFilterDictionariesLabel: "Seřadit filtrační slovníky",
  sortFilterDictionariesInstruction: "Slovníky budou zobrazeny v tomto pořadí kdekoli v aplikaci.",
  dictionaryValidationSummaryLabel: "Ověření slovníku",
  classificationsLabel: "Klasifikace",
  noClassificationSelected: "Není vybrána žádná klasifikace",
  propertysetsLabel: "Sady vlastností",
  ShowPreview: "Zobrazit náhled slovníků",
  entitySelectionInstruction: "Vyberte entity pomocí rozbalovací nabídky v horní části panelu.",
  needHelp: "Potřebujete pomoc?",
  checkDocumentation: "Podívejte se na naši dokumentaci",
  appInfoLabel: "Informace o aplikaci",
  appInfoInstruction: "Informace o tomto pluginu"
}, sb = {
  translation: ib
}, ab = {
  apply: "Anvend",
  cancel: "Annuller",
  classSearchInstruction: "Vælg en klassifikation i søgefeltet ovenfor.",
  noDescription: "Ingen beskrivelse",
  linkTabTitle: "Link",
  settingsTabTitle: "Indstillinger",
  language: "Sprog",
  searchMainDictionaryLabel: "Søg en klasse",
  selectLanguageInstruction: "Vælg sprog",
  selectMainDictionary: "Hovedordbog",
  selectIfcDictionary: "IFC-ordbog",
  selectFilterDictionaries: "Valg af filterordbøger i",
  selectObjects: "Vælg objekter",
  attachToType: "Vedhæft til type",
  generalSettingsLabel: "Generelle indstillinger",
  dictionarySelectionLabel: "Ordbogsvalg",
  generalSettingsInstruction: "Indstil sproget og bSDD-miljøet.",
  dictionarySelectionInstruction: "Vælg hovedordbogen og filterordbøgerne til brug for valg af objekter. Hovedordbogen bruges til at vælge objekterne. Filterordbøgerne bruges til at filtrere valget af objekter.",
  parameterMappingLabel: "Parametermapping",
  parameterMappingInstruction: "Definer Revit-typeparameteren, hvor de valgte klasser for denne ordbog skal gemmes.",
  sortFilterDictionariesLabel: "Sorter filterordbøger",
  sortFilterDictionariesInstruction: "Ordbøgerne vises i denne rækkefølge overalt i applikationen.",
  dictionaryValidationSummaryLabel: "Validering pr. ordbog",
  classificationsLabel: "Klassifikationer",
  noClassificationSelected: "Ingen klassifikation valgt",
  propertysetsLabel: "Egenskabssæt",
  ShowPreview: "Vis forhåndsvisning af ordbøger",
  entitySelectionInstruction: "Vælg enheder ved hjælp af rullemenuen øverst i panelet.",
  needHelp: "Brug for hjælp?",
  checkDocumentation: "Tjek vores dokumentation",
  appInfoLabel: "App-info",
  appInfoInstruction: "Information om dette plugin"
}, lb = {
  translation: ab
}, cb = {
  apply: "Anwenden",
  cancel: "Abbrechen",
  classSearchInstruction: "Wählen Sie eine Klassifikation im obigen Suchfeld aus.",
  noDescription: "Keine Beschreibung",
  linkTabTitle: "Verknüpfen",
  settingsTabTitle: "Einstellungen",
  language: "Sprache",
  searchMainDictionaryLabel: "Suche eine Klasse",
  selectLanguageInstruction: "Sprache auswählen",
  selectMainDictionary: "Hauptwörterbuch",
  selectIfcDictionary: "IFC-Wörterbuch",
  selectFilterDictionaries: "Filterwörterbücher auswählen",
  selectObjects: "Objekte auswählen",
  attachToType: "An Typ anhängen",
  generalSettingsLabel: "Allgemeine Einstellungen",
  generalSettingsInstruction: "Legen Sie die Sprache und die bSDD-Umgebung fest.",
  dictionarySelectionLabel: "Wörterbuchauswahl",
  dictionarySelectionInstruction: "Wählen Sie das Hauptwörterbuch und die Filterwörterbücher zur Auswahl der Objekte. Das Hauptwörterbuch wird zur Auswahl der Objekte verwendet. Die Filterwörterbücher werden verwendet, um die Auswahl der Objekte zu filtern.",
  parameterMappingLabel: "Parameterzuordnung",
  parameterMappingInstruction: "Definieren Sie den Revit-Typparameter, in dem die ausgewählten Klassen für dieses Wörterbuch gespeichert werden sollen.",
  sortFilterDictionariesLabel: "Filterwörterbücher sortieren",
  sortFilterDictionariesInstruction: "Die Wörterbücher werden überall in der Anwendung in dieser Reihenfolge angezeigt.",
  dictionaryValidationSummaryLabel: "Validierung pro Wörterbuch",
  classificationsLabel: "Klassifikationen",
  noClassificationSelected: "Keine Klassifikation ausgewählt",
  propertysetsLabel: "Eigenschaftensätze",
  ShowPreview: "Vorschau-Wörterbücher anzeigen",
  entitySelectionInstruction: "Wählen Sie Entitäten über das Dropdown-Menü oben im Panel aus.",
  needHelp: "Brauchen Sie Hilfe?",
  checkDocumentation: "Schauen Sie sich unsere Dokumentation an",
  appInfoLabel: "App-Informationen",
  appInfoInstruction: "Informationen über dieses Plugin"
}, ub = {
  translation: cb
}, db = {
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
  selectIfcDictionary: "IFC dictionary",
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
}, fb = {
  translation: db
}, pb = {
  apply: "Aplicar",
  cancel: "Cancelar",
  classSearchInstruction: "Seleccione una clasificación en el cuadro de búsqueda de arriba.",
  noDescription: "Sin descripción",
  linkTabTitle: "Enlace",
  settingsTabTitle: "Configuraciones",
  language: "Idioma",
  searchMainDictionaryLabel: "Buscar una clase",
  selectLanguageInstruction: "Seleccione el idioma",
  selectMainDictionary: "Diccionario principal",
  selectIfcDictionary: "Diccionario IFC",
  selectFilterDictionaries: "Seleccione diccionarios de filtro",
  selectObjects: "Seleccione objetos",
  attachToType: "Adjuntar al tipo",
  generalSettingsLabel: "Configuraciones generales",
  generalSettingsInstruction: "Configure el idioma y el entorno bSDD.",
  dictionarySelectionLabel: "Selección de diccionario",
  dictionarySelectionInstruction: "Seleccione el diccionario principal y los diccionarios de filtro que se utilizarán para la selección de objetos. El diccionario principal se utiliza para seleccionar los objetos. Los diccionarios de filtro se utilizan para filtrar la selección de objetos.",
  parameterMappingLabel: "Mapeo de parámetros",
  parameterMappingInstruction: "Defina el parámetro de tipo Revit en el que se almacenarán las clases seleccionadas para este diccionario.",
  sortFilterDictionariesLabel: "Ordenar diccionarios de filtro",
  sortFilterDictionariesInstruction: "Los diccionarios se mostrarán en este orden en toda la aplicación.",
  dictionaryValidationSummaryLabel: "Validación por diccionario",
  classificationsLabel: "Clasificaciones",
  noClassificationSelected: "No se ha seleccionado ninguna clasificación",
  propertysetsLabel: "Conjuntos de propiedades",
  ShowPreview: "Mostrar diccionarios de vista previa",
  entitySelectionInstruction: "Seleccione entidades utilizando el menú desplegable en la parte superior del panel.",
  needHelp: "¿Necesitas ayuda?",
  checkDocumentation: "Consulte nuestra documentación",
  appInfoLabel: "Información de la aplicación",
  appInfoInstruction: "Información sobre este complemento"
}, mb = {
  translation: pb
}, gb = {
  apply: "Käytä",
  cancel: "Peruuta",
  classSearchInstruction: "Valitse luokitus yllä olevasta hakukentästä.",
  noDescription: "Ei kuvausta",
  linkTabTitle: "Linkki",
  settingsTabTitle: "Asetukset",
  language: "Kieli",
  searchMainDictionaryLabel: "Hae luokkaa",
  selectLanguageInstruction: "Valitse kieli",
  selectMainDictionary: "Pääsanakirja",
  selectIfcDictionary: "IFC-sanakirja",
  selectFilterDictionaries: "Valitse suodatussanakirjat",
  selectObjects: "Valitse objektit",
  attachToType: "Liitä tyyppiin",
  generalSettingsLabel: "Yleiset asetukset",
  generalSettingsInstruction: "Aseta kieli ja bSDD-ympäristö.",
  dictionarySelectionLabel: "Sanakirjan valinta",
  dictionarySelectionInstruction: "Valitse pääsanakirja ja suodatussanakirjat objektien valintaa varten. Pääsanakirjaa käytetään objektien valintaan. Suodatussanakirjoja käytetään objektien valinnan suodattamiseen.",
  parameterMappingLabel: "Parametrien kartoitus",
  parameterMappingInstruction: "Määritä Revit-tyyppiparametri, johon valitut luokat tallennetaan tälle sanakirjalle.",
  sortFilterDictionariesLabel: "Lajittele suodatussanakirjat",
  sortFilterDictionariesInstruction: "Sanakirjat näytetään tässä järjestyksessä kaikkialla sovelluksessa.",
  dictionaryValidationSummaryLabel: "Sanakirjan validointi",
  classificationsLabel: "Luokitukset",
  noClassificationSelected: "Ei luokitusta valittu",
  propertysetsLabel: "Ominaisuussarjat",
  ShowPreview: "Näytä esikatselusanakirjat",
  entitySelectionInstruction: "Valitse objektit käyttämällä paneelin yläosassa olevaa pudotusvalikkoa.",
  needHelp: "Tarvitsetko apua?",
  checkDocumentation: "Tutustu dokumentaatioomme",
  appInfoLabel: "Sovelluksen tiedot",
  appInfoInstruction: "Tietoa tästä lisäosasta"
}, hb = {
  translation: gb
}, bb = {
  apply: "Appliquer",
  cancel: "Annuler",
  classSearchInstruction: "Sélectionnez une classification dans la boîte de recherche ci-dessus.",
  noDescription: "Pas de description",
  linkTabTitle: "Lien",
  settingsTabTitle: "Paramètres",
  language: "Langue",
  searchMainDictionaryLabel: "Rechercher une classe",
  selectLanguageInstruction: "Sélectionnez la langue",
  selectMainDictionary: "Dictionnaire principal",
  selectIfcDictionary: "Dictionnaire IFC",
  selectFilterDictionaries: "Sélectionner les dictionnaires de filtre",
  selectObjects: "Sélectionner des objets",
  attachToType: "Attacher au type",
  generalSettingsLabel: "Paramètres généraux",
  generalSettingsInstruction: "Définir la langue et l'environnement bSDD.",
  dictionarySelectionLabel: "Sélection du dictionnaire",
  dictionarySelectionInstruction: "Sélectionnez le dictionnaire principal et les dictionnaires de filtre à utiliser pour la sélection des objets. Le dictionnaire principal est utilisé pour sélectionner les objets. Les dictionnaires de filtre sont utilisés pour filtrer la sélection des objets.",
  parameterMappingLabel: "Cartographie des paramètres",
  parameterMappingInstruction: "Définir le paramètre de type Revit dans lequel stocker les classes sélectionnées pour ce dictionnaire.",
  sortFilterDictionariesLabel: "Trier les dictionnaires de filtre",
  sortFilterDictionariesInstruction: "Les dictionnaires seront affichés dans cet ordre partout dans l'application.",
  dictionaryValidationSummaryLabel: "Validation par dictionnaire",
  classificationsLabel: "Classifications",
  noClassificationSelected: "Aucune classification sélectionnée",
  propertysetsLabel: "Ensembles de propriétés",
  ShowPreview: "Afficher les dictionnaires de prévisualisation",
  entitySelectionInstruction: "Sélectionnez des entités en utilisant le menu déroulant en haut du panneau.",
  needHelp: "Besoin d'aide?",
  checkDocumentation: "Consultez notre documentation",
  appInfoLabel: "Infos sur l'application",
  appInfoInstruction: "Informations sur ce plugin"
}, yb = {
  translation: bb
}, vb = {
  apply: "लागू करें",
  cancel: "रद्द करें",
  classSearchInstruction: "ऊपर दिए गए खोज बॉक्स में एक वर्गीकरण चुनें।",
  noDescription: "कोई विवरण नहीं",
  linkTabTitle: "लिंक",
  settingsTabTitle: "सेटिंग्स",
  language: "भाषा",
  searchMainDictionaryLabel: "एक वर्ग खोजें",
  selectLanguageInstruction: "भाषा चुनें",
  selectMainDictionary: "मुख्य शब्दकोश",
  selectIfcDictionary: "IFC शब्दकोश",
  selectFilterDictionaries: "फिल्टर शब्दकोश चुनें",
  selectObjects: "वस्तुएं चुनें",
  attachToType: "प्रकार से संलग्न करें",
  generalSettingsLabel: "सामान्य सेटिंग्स",
  generalSettingsInstruction: "भाषा और bSDD वातावरण सेट करें।",
  dictionarySelectionLabel: "शब्दकोश चयन",
  dictionarySelectionInstruction: "वस्तुओं के चयन के लिए मुख्य शब्दकोश और फिल्टर शब्दकोश चुनें। मुख्य शब्दकोश का उपयोग वस्तुओं के चयन के लिए किया जाता है। फिल्टर शब्दकोश का उपयोग वस्तुओं के चयन को फ़िल्टर करने के लिए किया जाता है।",
  parameterMappingLabel: "पैरामीटर मैपिंग",
  parameterMappingInstruction: "इस शब्दकोश के लिए चयनित वर्गों को संग्रहीत करने के लिए Revit प्रकार पैरामीटर को परिभाषित करें।",
  sortFilterDictionariesLabel: "फिल्टर शब्दकोशों को क्रमबद्ध करें",
  sortFilterDictionariesInstruction: "शब्दकोशों को इस क्रम में कहीं भी एप्लिकेशन में दिखाया जाएगा।",
  dictionaryValidationSummaryLabel: "शब्दकोश के अनुसार मान्यता",
  classificationsLabel: "वर्गीकरण",
  noClassificationSelected: "कोई वर्गीकरण चयनित नहीं",
  propertysetsLabel: "संपत्ति सेट",
  ShowPreview: "पूर्वावलोकन शब्दकोश दिखाएं",
  entitySelectionInstruction: "पैनल के शीर्ष पर ड्रॉपडाउन का उपयोग करके संस्थाओं का चयन करें।",
  needHelp: "मदद चाहिए?",
  checkDocumentation: "हमारे दस्तावेज़ देखें",
  appInfoLabel: "ऐप जानकारी",
  appInfoInstruction: "इस प्लगइन के बारे में जानकारी"
}, xb = {
  translation: vb
}, wb = {
  apply: "Primijeni",
  cancel: "Otkazati",
  classSearchInstruction: "Odaberite klasifikaciju u gornjem okviru za pretraživanje.",
  noDescription: "Nema opisa",
  linkTabTitle: "Poveznica",
  settingsTabTitle: "Postavke",
  language: "Jezik",
  searchMainDictionaryLabel: "Pretraži klasu",
  selectLanguageInstruction: "Odaberite jezik",
  selectMainDictionary: "Glavni rječnik",
  selectIfcDictionary: "IFC rječnik",
  selectFilterDictionaries: "Odabir filtar rječnika u",
  selectObjects: "Odaberite objekte",
  attachToType: "Priloži tipu",
  generalSettingsLabel: "Opće postavke",
  dictionarySelectionLabel: "Odabir rječnika",
  generalSettingsInstruction: "Postavite jezik i bSDD okruženje.",
  dictionarySelectionInstruction: "Odaberite glavni rječnik i filtar rječnike za odabir objekata. Glavni rječnik se koristi za odabir objekata. Filtar rječnici se koriste za filtriranje odabira objekata.",
  parameterMappingLabel: "Mapiranje parametara",
  parameterMappingInstruction: "Definirajte Revit tip parametra u kojem će se pohraniti odabrane klase za ovaj rječnik.",
  sortFilterDictionariesLabel: "Sortiraj filtar rječnike",
  sortFilterDictionariesInstruction: "Rječnici će se prikazivati ​​ovim redoslijedom bilo gdje u aplikaciji.",
  dictionaryValidationSummaryLabel: "Provjera rječnika",
  classificationsLabel: "Klasifikacije",
  noClassificationSelected: "Nije odabrana klasifikacija",
  propertysetsLabel: "Skupovi svojstava",
  ShowPreview: "Prikaži pregled rječnika",
  entitySelectionInstruction: "Odaberite entitete pomoću padajućeg izbornika na vrhu panela.",
  needHelp: "Trebate pomoć?",
  checkDocumentation: "Pogledajte našu dokumentaciju",
  appInfoLabel: "Informacije o aplikaciji",
  appInfoInstruction: "Informacije o ovom dodatku"
}, Sb = {
  translation: wb
}, Cb = {
  apply: "Nota",
  cancel: "Hætta við",
  classSearchInstruction: "Veldu flokkun í leitarglugganum hér að ofan.",
  noDescription: "Engin lýsing",
  linkTabTitle: "Tengja",
  settingsTabTitle: "Stillingar",
  language: "Tungumál",
  searchMainDictionaryLabel: "Leita að flokki",
  selectLanguageInstruction: "Veldu tungumál",
  selectMainDictionary: "Aðalorðabók",
  selectIfcDictionary: "IFC orðabók",
  selectFilterDictionaries: "Veldu síu orðabækur",
  selectObjects: "Veldu hluti",
  attachToType: "Tengja við tegund",
  generalSettingsLabel: "Almennar stillingar",
  generalSettingsInstruction: "Settu tungumál og bSDD umhverfi.",
  dictionarySelectionLabel: "Orðabókarval",
  dictionarySelectionInstruction: "Veldu aðalorðabók og síu orðabækur til að nota við val á hlutum. Aðalorðabókin er notuð til að velja hlutina. Síu orðabækurnar eru notaðar til að sía val á hlutum.",
  parameterMappingLabel: "Færibreytukortlagning",
  parameterMappingInstruction: "Skilgreindu Revit tegundarfæribreytu þar sem valdar flokkanir eru geymdar fyrir þessa orðabók.",
  sortFilterDictionariesLabel: "Raða síu orðabókum",
  sortFilterDictionariesInstruction: "Orðabækurnar verða sýndar í þessari röð alls staðar í forritinu.",
  dictionaryValidationSummaryLabel: "Staðfesting á orðabók",
  classificationsLabel: "Flokkanir",
  noClassificationSelected: "Engin flokkun valin",
  propertysetsLabel: "Eiginleikaskilgreiningar",
  ShowPreview: "Sýna forskoðunarorðabækur",
  entitySelectionInstruction: "Veldu einingar með því að nota fellivalmyndina efst á spjaldinu.",
  needHelp: "Þarftu hjálp?",
  checkDocumentation: "Skoðaðu skjöl okkar",
  appInfoLabel: "Upplýsingar um forrit",
  appInfoInstruction: "Upplýsingar um þetta viðbót"
}, Db = {
  translation: Cb
}, Ib = {
  apply: "Applica",
  cancel: "Annulla",
  classSearchInstruction: "Seleziona una classificazione nella casella di ricerca sopra.",
  noDescription: "Nessuna descrizione",
  linkTabTitle: "Collega",
  settingsTabTitle: "Impostazioni",
  language: "Lingua",
  searchMainDictionaryLabel: "Cerca una classe",
  selectLanguageInstruction: "Seleziona lingua",
  selectMainDictionary: "Dizionario principale",
  selectIfcDictionary: "Dizionario IFC",
  selectFilterDictionaries: "Seleziona dizionari filtro",
  selectObjects: "Seleziona oggetti",
  attachToType: "Collega al tipo",
  generalSettingsLabel: "Impostazioni generali",
  generalSettingsInstruction: "Imposta la lingua e l'ambiente bSDD.",
  dictionarySelectionLabel: "Selezione del dizionario",
  dictionarySelectionInstruction: "Seleziona il dizionario principale e i dizionari filtro da utilizzare per la selezione degli oggetti. Il dizionario principale viene utilizzato per selezionare gli oggetti. I dizionari filtro vengono utilizzati per filtrare la selezione degli oggetti.",
  parameterMappingLabel: "Mappatura dei parametri",
  parameterMappingInstruction: "Definisci il parametro di tipo Revit in cui memorizzare le classi selezionate per questo dizionario.",
  sortFilterDictionariesLabel: "Ordina dizionari filtro",
  sortFilterDictionariesInstruction: "I dizionari verranno mostrati in questo ordine ovunque nell'applicazione.",
  dictionaryValidationSummaryLabel: "Validazione per dizionario",
  classificationsLabel: "Classificazioni",
  noClassificationSelected: "Nessuna classificazione selezionata",
  propertysetsLabel: "Set di proprietà",
  ShowPreview: "Mostra dizionari di anteprima",
  entitySelectionInstruction: "Seleziona entità utilizzando il menu a discesa in alto nel pannello.",
  needHelp: "Hai bisogno di aiuto?",
  checkDocumentation: "Consulta la nostra documentazione",
  appInfoLabel: "Informazioni sull'app",
  appInfoInstruction: "Informazioni su questo plugin"
}, Pb = {
  translation: Ib
}, kb = {
  apply: "適用",
  cancel: "キャンセル",
  classSearchInstruction: "上の検索ボックスで分類を選択してください。",
  noDescription: "説明なし",
  linkTabTitle: "リンク",
  settingsTabTitle: "設定",
  language: "言語",
  searchMainDictionaryLabel: "クラスを検索",
  selectLanguageInstruction: "言語を選択",
  selectMainDictionary: "メイン辞書",
  selectIfcDictionary: "IFC辞書",
  selectFilterDictionaries: "フィルター辞書を選択",
  selectObjects: "オブジェクトを選択",
  attachToType: "タイプに添付",
  generalSettingsLabel: "一般設定",
  generalSettingsInstruction: "言語とbSDD環境を設定します。",
  dictionarySelectionLabel: "辞書の選択",
  dictionarySelectionInstruction: "オブジェクトの選択に使用するメイン辞書とフィルター辞書を選択します。メイン辞書はオブジェクトの選択に使用されます。フィルター辞書はオブジェクトの選択をフィルタリングするために使用されます。",
  parameterMappingLabel: "パラメータマッピング",
  parameterMappingInstruction: "この辞書の選択されたクラスを保存するRevitタイプパラメータを定義します。",
  sortFilterDictionariesLabel: "フィルター辞書を並べ替え",
  sortFilterDictionariesInstruction: "辞書はアプリケーションのどこでもこの順序で表示されます。",
  dictionaryValidationSummaryLabel: "辞書ごとの検証",
  classificationsLabel: "分類",
  noClassificationSelected: "分類が選択されていません",
  propertysetsLabel: "プロパティセット",
  ShowPreview: "プレビューディクショナリを表示",
  entitySelectionInstruction: "パネルの上部にあるドロップダウンを使用してエンティティを選択します。",
  needHelp: "助けが必要ですか？",
  checkDocumentation: "ドキュメントを確認してください",
  appInfoLabel: "アプリ情報",
  appInfoInstruction: "このプラグインに関する情報"
}, Eb = {
  translation: kb
}, Tb = {
  apply: "적용",
  cancel: "취소",
  classSearchInstruction: "위의 검색 상자에서 분류를 선택하세요.",
  noDescription: "설명 없음",
  linkTabTitle: "링크",
  settingsTabTitle: "설정",
  language: "언어",
  searchMainDictionaryLabel: "클래스 검색",
  selectLanguageInstruction: "언어 선택",
  selectMainDictionary: "주요 사전",
  selectIfcDictionary: "IFC 사전",
  selectFilterDictionaries: "필터 사전 선택",
  selectObjects: "객체 선택",
  attachToType: "유형에 첨부",
  generalSettingsLabel: "일반 설정",
  generalSettingsInstruction: "언어와 bSDD 환경을 설정합니다.",
  dictionarySelectionLabel: "사전 선택",
  dictionarySelectionInstruction: "객체 선택에 사용할 주요 사전과 필터 사전을 선택합니다. 주요 사전은 객체 선택에 사용됩니다. 필터 사전은 객체 선택을 필터링하는 데 사용됩니다.",
  parameterMappingLabel: "매개변수 매핑",
  parameterMappingInstruction: "이 사전에 대해 선택된 클래스를 저장할 Revit 유형 매개변수를 정의합니다.",
  sortFilterDictionariesLabel: "필터 사전 정렬",
  sortFilterDictionariesInstruction: "사전은 애플리케이션의 어디에서나 이 순서로 표시됩니다.",
  dictionaryValidationSummaryLabel: "사전별 검증",
  classificationsLabel: "분류",
  noClassificationSelected: "선택된 분류 없음",
  propertysetsLabel: "속성 집합",
  ShowPreview: "미리보기 사전 표시",
  entitySelectionInstruction: "패널 상단의 드롭다운을 사용하여 엔터티를 선택합니다.",
  needHelp: "도움이 필요하십니까?",
  checkDocumentation: "문서를 확인하세요",
  appInfoLabel: "앱 정보",
  appInfoInstruction: "이 플러그인에 대한 정보"
}, Rb = {
  translation: Tb
}, Ob = {
  apply: "Taikyti",
  cancel: "Atšaukti",
  classSearchInstruction: "Pasirinkite klasifikaciją aukščiau esančiame paieškos laukelyje.",
  noDescription: "Nėra aprašymo",
  linkTabTitle: "Nuoroda",
  settingsTabTitle: "Nustatymai",
  language: "Kalba",
  searchMainDictionaryLabel: "Ieškoti klasės",
  selectLanguageInstruction: "Pasirinkite kalbą",
  selectMainDictionary: "Pagrindinis žodynas",
  selectIfcDictionary: "IFC žodynas",
  selectFilterDictionaries: "Pasirinkite filtro žodynus",
  selectObjects: "Pasirinkite objektus",
  attachToType: "Prijungti prie tipo",
  generalSettingsLabel: "Bendrieji nustatymai",
  generalSettingsInstruction: "Nustatykite kalbą ir bSDD aplinką.",
  dictionarySelectionLabel: "Žodyno pasirinkimas",
  dictionarySelectionInstruction: "Pasirinkite pagrindinį žodyną ir filtro žodynus, kuriuos naudosite objektų pasirinkimui. Pagrindinis žodynas naudojamas objektų pasirinkimui. Filtro žodynai naudojami objektų pasirinkimui filtruoti.",
  parameterMappingLabel: "Parametrų susiejimas",
  parameterMappingInstruction: "Nustatykite Revit tipo parametrą, kuriame bus saugomos šiam žodynui pasirinktos klasės.",
  sortFilterDictionariesLabel: "Rūšiuoti filtro žodynus",
  sortFilterDictionariesInstruction: "Žodynai bus rodomi šia tvarka visur programoje.",
  dictionaryValidationSummaryLabel: "Žodyno patvirtinimas",
  classificationsLabel: "Klasifikacijos",
  noClassificationSelected: "Nepasirinkta klasifikacija",
  propertysetsLabel: "Savybių rinkiniai",
  ShowPreview: "Rodyti peržiūros žodynus",
  entitySelectionInstruction: "Pasirinkite objektus naudodami išskleidžiamąjį meniu viršuje.",
  needHelp: "Reikia pagalbos?",
  checkDocumentation: "Peržiūrėkite mūsų dokumentaciją",
  appInfoLabel: "Programos informacija",
  appInfoInstruction: "Informacija apie šį papildinį"
}, Lb = {
  translation: Ob
}, $b = {
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
  selectIfcDictionary: "IFC domein",
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
}, jb = {
  translation: $b
}, Ab = {
  apply: "Bruk",
  cancel: "Avbryt",
  classSearchInstruction: "Velg en klassifisering i søkeboksen ovenfor.",
  noDescription: "Ingen beskrivelse",
  linkTabTitle: "Lenke",
  settingsTabTitle: "Innstillinger",
  language: "Språk",
  searchMainDictionaryLabel: "Søk etter klasse",
  selectLanguageInstruction: "Velg språk",
  selectMainDictionary: "Hovedordbok",
  selectIfcDictionary: "IFC-ordbok",
  selectFilterDictionaries: "Velg filterordbøker",
  selectObjects: "Velg objekter",
  attachToType: "Knytt til type",
  generalSettingsLabel: "Generelle innstillinger",
  generalSettingsInstruction: "Sett språk og bSDD-miljø.",
  dictionarySelectionLabel: "Ordbokvalg",
  dictionarySelectionInstruction: "Velg hovedordbok og filterordbøker som skal brukes til objektvalg. Hovedordboken brukes til å velge objektene. Filterordbøkene brukes til å filtrere objektvalget.",
  parameterMappingLabel: "Parameterkartlegging",
  parameterMappingInstruction: "Definer Revit-typeparameteren der de valgte klassene for denne ordboken lagres.",
  sortFilterDictionariesLabel: "Sorter filterordbøker",
  sortFilterDictionariesInstruction: "Ordbøkene vil bli vist i denne rekkefølgen overalt i applikasjonen.",
  dictionaryValidationSummaryLabel: "Ordbokvalidering",
  classificationsLabel: "Klassifiseringer",
  noClassificationSelected: "Ingen klassifisering valgt",
  propertysetsLabel: "Egenskapssett",
  ShowPreview: "Vis forhåndsvisningsordbøker",
  entitySelectionInstruction: "Velg enheter ved å bruke rullegardinmenyen øverst i panelet.",
  needHelp: "Trenger du hjelp?",
  checkDocumentation: "Sjekk vår dokumentasjon",
  appInfoLabel: "Appinformasjon",
  appInfoInstruction: "Informasjon om denne pluginen"
}, Nb = {
  translation: Ab
}, Mb = {
  apply: "Zastosuj",
  cancel: "Anuluj",
  classSearchInstruction: "Wybierz klasyfikację w polu wyszukiwania powyżej.",
  noDescription: "Brak opisu",
  linkTabTitle: "Link",
  settingsTabTitle: "Ustawienia",
  language: "Język",
  searchMainDictionaryLabel: "Szukaj klasy",
  selectLanguageInstruction: "Wybierz język",
  selectMainDictionary: "Główny słownik",
  selectIfcDictionary: "Słownik IFC",
  selectFilterDictionaries: "Wybierz słowniki filtrów",
  selectObjects: "Wybierz obiekty",
  attachToType: "Dołącz do typu",
  generalSettingsLabel: "Ustawienia ogólne",
  generalSettingsInstruction: "Ustaw język i środowisko bSDD.",
  dictionarySelectionLabel: "Wybór słownika",
  dictionarySelectionInstruction: "Wybierz główny słownik i słowniki filtrów do użycia przy wyborze obiektów. Główny słownik jest używany do wyboru obiektów. Słowniki filtrów są używane do filtrowania wyboru obiektów.",
  parameterMappingLabel: "Mapowanie parametrów",
  parameterMappingInstruction: "Zdefiniuj parametr typu Revit, w którym będą przechowywane wybrane klasy dla tego słownika.",
  sortFilterDictionariesLabel: "Sortuj słowniki filtrów",
  sortFilterDictionariesInstruction: "Słowniki będą wyświetlane w tej kolejności wszędzie w aplikacji.",
  dictionaryValidationSummaryLabel: "Walidacja słownika",
  classificationsLabel: "Klasyfikacje",
  noClassificationSelected: "Nie wybrano klasyfikacji",
  propertysetsLabel: "Zestawy właściwości",
  ShowPreview: "Pokaż słowniki podglądu",
  entitySelectionInstruction: "Wybierz jednostki za pomocą menu rozwijanego u góry panelu.",
  needHelp: "Potrzebujesz pomocy?",
  checkDocumentation: "Sprawdź naszą dokumentację",
  appInfoLabel: "Informacje o aplikacji",
  appInfoInstruction: "Informacje o tej wtyczce"
}, _b = {
  translation: Mb
}, Fb = {
  apply: "Aplicar",
  cancel: "Cancelar",
  classSearchInstruction: "Selecione uma classificação na caixa de pesquisa acima.",
  noDescription: "Sem descrição",
  linkTabTitle: "Link",
  settingsTabTitle: "Configurações",
  language: "Idioma",
  searchMainDictionaryLabel: "Pesquisar classe",
  selectLanguageInstruction: "Selecione o idioma",
  selectMainDictionary: "Dicionário principal",
  selectIfcDictionary: "Dicionário IFC",
  selectFilterDictionaries: "Selecione dicionários de filtro",
  selectObjects: "Selecione objetos",
  attachToType: "Anexar ao tipo",
  generalSettingsLabel: "Configurações gerais",
  generalSettingsInstruction: "Defina o idioma e o ambiente bSDD.",
  dictionarySelectionLabel: "Seleção de dicionário",
  dictionarySelectionInstruction: "Selecione o dicionário principal e os dicionários de filtro a serem usados na seleção de objetos. O dicionário principal é usado para selecionar os objetos. Os dicionários de filtro são usados para filtrar a seleção de objetos.",
  parameterMappingLabel: "Mapeamento de parâmetros",
  parameterMappingInstruction: "Defina o parâmetro de tipo Revit onde as classes selecionadas para este dicionário serão armazenadas.",
  sortFilterDictionariesLabel: "Ordenar dicionários de filtro",
  sortFilterDictionariesInstruction: "Os dicionários serão exibidos nesta ordem em toda a aplicação.",
  dictionaryValidationSummaryLabel: "Validação de dicionário",
  classificationsLabel: "Classificações",
  noClassificationSelected: "Nenhuma classificação selecionada",
  propertysetsLabel: "Conjuntos de propriedades",
  ShowPreview: "Mostrar dicionários de pré-visualização",
  entitySelectionInstruction: "Selecione entidades usando o menu suspenso na parte superior do painel.",
  needHelp: "Precisa de ajuda?",
  checkDocumentation: "Consulte nossa documentação",
  appInfoLabel: "Informações do aplicativo",
  appInfoInstruction: "Informações sobre este plugin"
}, zb = {
  translation: Fb
}, Bb = {
  apply: "Aplicar",
  cancel: "Cancelar",
  classSearchInstruction: "Selecione uma classificação na caixa de pesquisa acima.",
  noDescription: "Sem descrição",
  linkTabTitle: "Link",
  settingsTabTitle: "Configurações",
  language: "Idioma",
  searchMainDictionaryLabel: "Pesquisar classe",
  selectLanguageInstruction: "Selecione o idioma",
  selectMainDictionary: "Dicionário principal",
  selectIfcDictionary: "Dicionário IFC",
  selectFilterDictionaries: "Selecione dicionários de filtro",
  selectObjects: "Selecione objetos",
  attachToType: "Anexar ao tipo",
  generalSettingsLabel: "Configurações gerais",
  generalSettingsInstruction: "Defina o idioma e o ambiente bSDD.",
  dictionarySelectionLabel: "Seleção de dicionário",
  dictionarySelectionInstruction: "Selecione o dicionário principal e os dicionários de filtro a serem usados na seleção de objetos. O dicionário principal é usado para selecionar os objetos. Os dicionários de filtro são usados para filtrar a seleção de objetos.",
  parameterMappingLabel: "Mapeamento de parâmetros",
  parameterMappingInstruction: "Defina o parâmetro de tipo Revit onde as classes selecionadas para este dicionário serão armazenadas.",
  sortFilterDictionariesLabel: "Ordenar dicionários de filtro",
  sortFilterDictionariesInstruction: "Os dicionários serão exibidos nesta ordem em toda a aplicação.",
  dictionaryValidationSummaryLabel: "Validação de dicionário",
  classificationsLabel: "Classificações",
  noClassificationSelected: "Nenhuma classificação selecionada",
  propertysetsLabel: "Conjuntos de propriedades",
  ShowPreview: "Mostrar dicionários de pré-visualização",
  entitySelectionInstruction: "Selecione entidades usando o menu suspenso na parte superior do painel.",
  needHelp: "Precisa de ajuda?",
  checkDocumentation: "Consulte nossa documentação",
  appInfoLabel: "Informações do aplicativo",
  appInfoInstruction: "Informações sobre este plugin"
}, Vb = {
  translation: Bb
}, Wb = {
  apply: "Aplică",
  cancel: "Anulează",
  classSearchInstruction: "Selectați o clasificare în caseta de căutare de mai sus.",
  noDescription: "Fără descriere",
  linkTabTitle: "Link",
  settingsTabTitle: "Setări",
  language: "Limbă",
  searchMainDictionaryLabel: "Căutați o clasă",
  selectLanguageInstruction: "Selectați limba",
  selectMainDictionary: "Dicționar principal",
  selectIfcDictionary: "Dicționar IFC",
  selectFilterDictionaries: "Selectați dicționare de filtrare",
  selectObjects: "Selectați obiecte",
  attachToType: "Atașați la tip",
  generalSettingsLabel: "Setări generale",
  generalSettingsInstruction: "Setați limba și mediul bSDD.",
  dictionarySelectionLabel: "Selecția dicționarului",
  dictionarySelectionInstruction: "Selectați dicționarul principal și dicționarele de filtrare care vor fi utilizate pentru selectarea obiectelor. Dicționarul principal este utilizat pentru selectarea obiectelor. Dicționarele de filtrare sunt utilizate pentru a filtra selecția obiectelor.",
  parameterMappingLabel: "Maparea parametrilor",
  parameterMappingInstruction: "Definiți parametrul de tip Revit în care vor fi stocate clasele selectate pentru acest dicționar.",
  sortFilterDictionariesLabel: "Sortați dicționarele de filtrare",
  sortFilterDictionariesInstruction: "Dicționarele vor fi afișate în această ordine peste tot în aplicație.",
  dictionaryValidationSummaryLabel: "Validarea dicționarului",
  classificationsLabel: "Clasificări",
  noClassificationSelected: "Nicio clasificare selectată",
  propertysetsLabel: "Seturi de proprietăți",
  ShowPreview: "Afișați dicționarele de previzualizare",
  entitySelectionInstruction: "Selectați entități utilizând meniul derulant din partea de sus a panoului.",
  needHelp: "Aveți nevoie de ajutor?",
  checkDocumentation: "Consultați documentația noastră",
  appInfoLabel: "Informații despre aplicație",
  appInfoInstruction: "Informații despre acest plugin"
}, Gb = {
  translation: Wb
}, Hb = {
  apply: "Uporabi",
  cancel: "Prekliči",
  classSearchInstruction: "Izberite klasifikacijo v iskalnem polju zgoraj.",
  noDescription: "Brez opisa",
  linkTabTitle: "Povezava",
  settingsTabTitle: "Nastavitve",
  language: "Jezik",
  searchMainDictionaryLabel: "Išči razred",
  selectLanguageInstruction: "Izberite jezik",
  selectMainDictionary: "Glavni slovar",
  selectIfcDictionary: "IFC slovar",
  selectFilterDictionaries: "Izberite filtre slovarjev",
  selectObjects: "Izberite objekte",
  attachToType: "Pripni na tip",
  generalSettingsLabel: "Splošne nastavitve",
  generalSettingsInstruction: "Nastavite jezik in okolje bSDD.",
  dictionarySelectionLabel: "Izbor slovarja",
  dictionarySelectionInstruction: "Izberite glavni slovar in filtre slovarjev, ki bodo uporabljeni za izbor objektov. Glavni slovar se uporablja za izbor objektov. Filtri slovarjev se uporabljajo za filtriranje izbora objektov.",
  parameterMappingLabel: "Preslikava parametrov",
  parameterMappingInstruction: "Določite parameter tipa Revit, v katerem bodo shranjeni izbrani razredi za ta slovar.",
  sortFilterDictionariesLabel: "Razvrsti filtre slovarjev",
  sortFilterDictionariesInstruction: "Slovarji bodo prikazani v tem vrstnem redu povsod v aplikaciji.",
  dictionaryValidationSummaryLabel: "Validacija po slovarju",
  classificationsLabel: "Klasifikacije",
  noClassificationSelected: "Nobena klasifikacija ni izbrana",
  propertysetsLabel: "Nabori lastnosti",
  ShowPreview: "Prikaži predogled slovarjev",
  entitySelectionInstruction: "Izberite entitete z uporabo spustnega menija na vrhu panela.",
  needHelp: "Potrebujete pomoč?",
  checkDocumentation: "Preverite našo dokumentacijo",
  appInfoLabel: "Informacije o aplikaciji",
  appInfoInstruction: "Informacije o tem dodatku"
}, Ub = {
  translation: Hb
}, qb = {
  apply: "Primeni",
  cancel: "Otkaži",
  classSearchInstruction: "Izaberite klasifikaciju u polju za pretragu iznad.",
  noDescription: "Nema opisa",
  linkTabTitle: "Link",
  settingsTabTitle: "Podešavanja",
  language: "Jezik",
  searchMainDictionaryLabel: "Pretraži klasu",
  selectLanguageInstruction: "Izaberite jezik",
  selectMainDictionary: "Glavni rečnik",
  selectIfcDictionary: "IFC rečnik",
  selectFilterDictionaries: "Izaberite filter rečnike",
  selectObjects: "Izaberite objekte",
  attachToType: "Prikači na tip",
  generalSettingsLabel: "Opšta podešavanja",
  generalSettingsInstruction: "Postavite jezik i bSDD okruženje.",
  dictionarySelectionLabel: "Izbor rečnika",
  dictionarySelectionInstruction: "Izaberite glavni rečnik i filter rečnike koji će se koristiti za izbor objekata. Glavni rečnik se koristi za izbor objekata. Filter rečnici se koriste za filtriranje izbora objekata.",
  parameterMappingLabel: "Mapiranje parametara",
  parameterMappingInstruction: "Definišite Revit tip parametra u kojem će se čuvati izabrane klase za ovaj rečnik.",
  sortFilterDictionariesLabel: "Sortiraj filter rečnike",
  sortFilterDictionariesInstruction: "Rečnici će biti prikazani ovim redosledom svuda u aplikaciji.",
  dictionaryValidationSummaryLabel: "Validacija po rečniku",
  classificationsLabel: "Klasifikacije",
  noClassificationSelected: "Nijedna klasifikacija nije izabrana",
  propertysetsLabel: "Setovi svojstava",
  ShowPreview: "Prikaži pregled rečnika",
  entitySelectionInstruction: "Izaberite entitete koristeći padajući meni na vrhu panela.",
  needHelp: "Potrebna pomoć?",
  checkDocumentation: "Pogledajte našu dokumentaciju",
  appInfoLabel: "Informacije o aplikaciji",
  appInfoInstruction: "Informacije o ovom dodatku"
}, Kb = {
  translation: qb
}, Yb = {
  apply: "Tillämpa",
  cancel: "Avbryt",
  classSearchInstruction: "Välj en klassificering i sökrutan ovan.",
  noDescription: "Ingen beskrivning",
  linkTabTitle: "Länk",
  settingsTabTitle: "Inställningar",
  language: "Språk",
  searchMainDictionaryLabel: "Sök en klass",
  selectLanguageInstruction: "Välj språk",
  selectMainDictionary: "Huvudordbok",
  selectIfcDictionary: "IFC-ordbok",
  selectFilterDictionaries: "Välj filterordböcker",
  selectObjects: "Välj objekt",
  attachToType: "Fäst till typ",
  generalSettingsLabel: "Allmänna inställningar",
  generalSettingsInstruction: "Ställ in språket och bSDD-miljön.",
  dictionarySelectionLabel: "Ordboksval",
  dictionarySelectionInstruction: "Välj huvudordboken och filterordböckerna som ska användas för val av objekt. Huvudordboken används för att välja objekten. Filterordböckerna används för att filtrera valet av objekt.",
  parameterMappingLabel: "Parametermappning",
  parameterMappingInstruction: "Definiera Revit-typens parameter där de valda klasserna för denna ordbok ska lagras.",
  sortFilterDictionariesLabel: "Sortera filterordböcker",
  sortFilterDictionariesInstruction: "Ordböckerna kommer att visas i denna ordning överallt i applikationen.",
  dictionaryValidationSummaryLabel: "Validering per ordbok",
  classificationsLabel: "Klassificeringar",
  noClassificationSelected: "Ingen klassificering vald",
  propertysetsLabel: "Egenskapsuppsättningar",
  ShowPreview: "Visa förhandsgranskningsordböcker",
  entitySelectionInstruction: "Välj entiteter med hjälp av rullgardinsmenyn högst upp i panelen.",
  needHelp: "Behöver du hjälp?",
  checkDocumentation: "Kolla in vår dokumentation",
  appInfoLabel: "Appinfo",
  appInfoInstruction: "Information om detta plugin"
}, Jb = {
  translation: Yb
}, Xb = {
  apply: "Uygula",
  cancel: "İptal",
  classSearchInstruction: "Yukarıdaki arama kutusunda bir sınıflandırma seçin.",
  noDescription: "Açıklama yok",
  linkTabTitle: "Bağlantı",
  settingsTabTitle: "Ayarlar",
  language: "Dil",
  searchMainDictionaryLabel: "Bir sınıf ara",
  selectLanguageInstruction: "Dili seçin",
  selectMainDictionary: "Ana sözlük",
  selectIfcDictionary: "IFC sözlüğü seçin",
  selectFilterDictionaries: "Filtre sözlüklerini seçin",
  selectObjects: "Nesneleri seçin",
  attachToType: "Tipe ekle",
  generalSettingsLabel: "Genel ayarlar",
  generalSettingsInstruction: "Dili ve bSDD ortamını ayarlayın.",
  dictionarySelectionLabel: "Sözlük seçimi",
  dictionarySelectionInstruction: "Nesnelerin seçimi için kullanılacak ana sözlüğü ve filtre sözlüklerini seçin. Ana sözlük nesneleri seçmek için kullanılır. Filtre sözlükleri nesnelerin seçimini filtrelemek için kullanılır.",
  parameterMappingLabel: "Parametre eşleme",
  parameterMappingInstruction: "Bu sözlük için seçilen sınıfların saklanacağı Revit tip parametresini tanımlayın.",
  sortFilterDictionariesLabel: "Filtre sözlüklerini sırala",
  sortFilterDictionariesInstruction: "Sözlükler uygulamanın her yerinde bu sırayla gösterilecektir.",
  dictionaryValidationSummaryLabel: "Sözlük başına doğrulama",
  classificationsLabel: "Sınıflandırmalar",
  noClassificationSelected: "Hiçbir sınıflandırma seçilmedi",
  propertysetsLabel: "Özellik setleri",
  ShowPreview: "Önizleme sözlüklerini göster",
  entitySelectionInstruction: "Panelin üst kısmındaki açılır menüyü kullanarak varlıkları seçin.",
  needHelp: "Yardıma mı ihtiyacınız var?",
  checkDocumentation: "Belgelerimize göz atın",
  appInfoLabel: "Uygulama bilgisi",
  appInfoInstruction: "Bu eklenti hakkında bilgi"
}, Qb = {
  translation: Xb
}, Zb = {
  apply: "应用",
  cancel: "取消",
  classSearchInstruction: "在上面的搜索框中选择一个分类。",
  noDescription: "没有描述",
  linkTabTitle: "链接",
  settingsTabTitle: "设置",
  language: "语言",
  searchMainDictionaryLabel: "搜索分类",
  selectLanguageInstruction: "选择语言",
  selectMainDictionary: "主词典",
  selectIfcDictionary: "IFC词典",
  selectFilterDictionaries: "选择过滤词典",
  selectObjects: "选择对象",
  attachToType: "附加到类型",
  generalSettingsLabel: "常规设置",
  dictionarySelectionLabel: "词典选择",
  generalSettingsInstruction: "设置语言和bSDD环境。",
  dictionarySelectionInstruction: "选择用于选择对象的主词典和过滤词典。主词典用于选择对象。过滤词典用于过滤对象选择。",
  parameterMappingLabel: "参数映射",
  parameterMappingInstruction: "定义用于存储此词典的选定分类的Revit类型参数。",
  sortFilterDictionariesLabel: "排序过滤词典",
  sortFilterDictionariesInstruction: "词典将在应用程序中的任何地方按此顺序显示。",
  dictionaryValidationSummaryLabel: "词典验证摘要",
  classificationsLabel: "分类",
  noClassificationSelected: "未选择分类",
  propertysetsLabel: "属性集",
  ShowPreview: "显示预览词典",
  entitySelectionInstruction: "使用面板顶部的下拉菜单选择实体。",
  needHelp: "需要帮助？",
  checkDocumentation: "查看我们的文档",
  appInfoLabel: "应用信息",
  appInfoInstruction: "关于此插件的信息"
}, ey = {
  translation: Zb
};
Ie.use(Zh).init({
  resources: {
    "en-GB": fb,
    "nl-NL": jb,
    "ar-SA": ob,
    "zh-CN": ey,
    "hr-HR": Sb,
    "cs-CZ": sb,
    "da-DK": lb,
    "fi-FI": hb,
    "fr-FR": yb,
    "de-DE": ub,
    "hi-IN": xb,
    "is-IS": Db,
    "it-IT": Pb,
    "ja-JP": Eb,
    "ko-KR": Rb,
    "lt-LT": Lb,
    "no-NO": Nb,
    "pl-PL": _b,
    "pt-PT": Vb,
    "pt-BR": zb,
    "ro-RO": Gb,
    "sr-SP": Kb,
    "sl-SI": Ub,
    "es-ES": mb,
    "sv-SE": Jb,
    "tr-TR": Qb
  },
  lng: "en-GB",
  fallbackLng: "nl-NL",
  interpolation: {
    escapeValue: !1
  }
});
function Re(e) {
  return Object.keys(e);
}
function Gi(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function aa(e, t) {
  const n = { ...e }, r = t;
  return Gi(e) && Gi(t) && Object.keys(t).forEach((o) => {
    Gi(r[o]) && o in e ? n[o] = aa(n[o], r[o]) : n[o] = r[o];
  }), n;
}
function ty(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
function ny(e) {
  var t;
  return typeof e != "string" || !e.includes("var(--mantine-scale)") ? e : (t = e.match(/^calc\((.*?)\)$/)) == null ? void 0 : t[1].split("*")[0].trim();
}
function Es(e) {
  const t = ny(e);
  return typeof t == "number" ? t : typeof t == "string" ? t.includes("calc") || t.includes("var") ? t : t.includes("px") ? Number(t.replace("px", "")) : t.includes("rem") ? Number(t.replace("rem", "")) * 16 : t.includes("em") ? Number(t.replace("em", "")) * 16 : Number(t) : NaN;
}
function Hi(e) {
  return e === "0rem" ? "0rem" : `calc(${e} * var(--mantine-scale))`;
}
function _d(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return `0${e}`;
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? Hi(o) : o;
    }
    if (typeof r == "string") {
      if (r === "" || r.startsWith("calc(") || r.startsWith("clamp(") || r.includes("rgba("))
        return r;
      if (r.includes(","))
        return r.split(",").map((i) => n(i)).join(",");
      if (r.includes(" "))
        return r.split(" ").map((i) => n(i)).join(" ");
      if (r.includes(e))
        return t ? Hi(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? Hi(i) : i;
      }
    }
    return r;
  }
  return n;
}
const E = _d("rem", { shouldScale: !0 }), Tc = _d("em");
function $r(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function Fd(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function nn(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== Dd : !1;
}
function zt(e) {
  const t = tn(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.jsx(t.Provider, { value: i, children: o }), () => {
    const o = wt(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Vo(e = null) {
  const t = tn(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.jsx(t.Provider, { value: i, children: o }), () => wt(t)];
}
function go(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function Ts(e, t) {
  let n = e;
  for (; (n = n.parentElement) && !n.matches(t); )
    ;
  return n;
}
function ry(e, t, n) {
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
function oy(e, t, n) {
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
function iy(e, t, n) {
  return Ts(e, n) === Ts(t, n);
}
function zd({
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
      ((m = Ts(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((h) => iy(a.currentTarget, h, e)), c = l.findIndex((h) => a.currentTarget === h), u = oy(c, l, r), d = ry(c, l, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
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
        const h = l.length - 1;
        !l[h].disabled && l[h].focus();
        break;
      }
    }
  };
}
const sy = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function jr(e) {
  return sy[e];
}
const ay = () => {
};
function ly(e, t = { active: !0 }) {
  return typeof e != "function" || !t.active ? t.onKeyDown || ay : (n) => {
    var r;
    n.key === "Escape" && (e(n), (r = t.onTrigger) == null || r.call(t));
  };
}
function de(e, t = "size", n = !0) {
  if (e !== void 0)
    return Fd(e) ? n ? E(e) : e : `var(--${t}-${e})`;
}
function ho(e) {
  return de(e, "mantine-spacing");
}
function Le(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : de(e, "mantine-radius");
}
function Ke(e) {
  return de(e, "mantine-font-size");
}
function cy(e) {
  return de(e, "mantine-line-height", !1);
}
function uy(e) {
  if (e)
    return de(e, "mantine-shadow", !1);
}
function bo(e, t) {
  return (n) => {
    e == null || e(n), t == null || t(n);
  };
}
function dy(e, t) {
  return e in t.breakpoints ? Es(t.breakpoints[e]) : Es(e);
}
function Bd(e, t) {
  const n = e.map((r) => ({
    value: r,
    px: dy(r, t)
  }));
  return n.sort((r, o) => r.px - o.px), n;
}
function lr(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Vd() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function un(e) {
  const t = V(e);
  return H(() => {
    t.current = e;
  }), Ht(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Wo(e, t) {
  const n = un(e), r = V(0);
  return H(() => () => window.clearTimeout(r.current), []), ee(
    (...o) => {
      window.clearTimeout(r.current), r.current = window.setTimeout(() => n(...o), t);
    },
    [n, t]
  );
}
const Rc = ["mousedown", "touchstart"];
function fy(e, t, n) {
  const r = V();
  return H(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((c) => !!c && !i.composedPath().includes(c)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || Rc).forEach((i) => document.addEventListener(i, o)), () => {
      (t || Rc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [r, e, n]), r;
}
function py(e, t) {
  try {
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  } catch {
    return e.addListener(t), () => e.removeListener(t);
  }
}
function my(e, t) {
  return typeof t == "boolean" ? t : typeof window < "u" && "matchMedia" in window ? window.matchMedia(e).matches : !1;
}
function gy(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = q(
    n ? t : my(e)
  ), i = V();
  return H(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), py(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const Ar = typeof document < "u" ? Fo : H;
function Jt(e, t) {
  const n = V(!1);
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
function hy({ opened: e, shouldReturnFocus: t = !0 }) {
  const n = V(), r = () => {
    var o;
    n.current && "focus" in n.current && typeof n.current.focus == "function" && ((o = n.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Jt(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), e ? n.current = document.activeElement : t && (o = window.setTimeout(r, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [e, t]), r;
}
function by(e, t = "body > :not(script)") {
  const n = Vd(), r = Array.from(
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
const yy = /input|select|textarea|button|object/, Wd = "a, input, select, textarea, button, object, [tabindex]";
function vy(e) {
  return e.style.display === "none";
}
function xy(e) {
  if (e.getAttribute("aria-hidden") || e.getAttribute("hidden") || e.getAttribute("type") === "hidden")
    return !1;
  let n = e;
  for (; n && !(n === document.body || n.nodeType === 11); ) {
    if (vy(n))
      return !1;
    n = n.parentNode;
  }
  return !0;
}
function Gd(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Rs(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(Gd(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (yy.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && xy(e);
}
function Hd(e) {
  const t = Gd(e);
  return (Number.isNaN(t) || t >= 0) && Rs(e);
}
function wy(e) {
  return Array.from(e.querySelectorAll(Wd)).filter(Hd);
}
function Sy(e, t) {
  const n = wy(e);
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
function Cy(e = !0) {
  const t = V(), n = V(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Wd));
      s = a.find(Hd) || a.find(Rs) || null, !s && Rs(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ee(
    (i) => {
      if (e) {
        if (i === null) {
          n.current && (n.current(), n.current = null);
          return;
        }
        n.current = by(i), t.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && r(i);
        }), t.current = i) : t.current = null);
      }
    },
    [e]
  );
  return H(() => {
    if (!e)
      return;
    t.current && setTimeout(() => r(t.current));
    const i = (s) => {
      s.key === "Tab" && t.current && Sy(t.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), n.current && n.current();
    };
  }, [e]), o;
}
const Dy = Q["useId".toString()] || (() => {
});
function Iy() {
  const e = Dy();
  return e ? `mantine-${e.replace(/:/g, "")}` : "";
}
function Rt(e) {
  const t = Iy(), [n, r] = q(t);
  return Ar(() => {
    r(Vd());
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
function Ne(...e) {
  return ee(qd(...e), e);
}
function At({
  value: e,
  defaultValue: t,
  finalValue: n,
  onChange: r = () => {
  }
}) {
  const [o, i] = q(
    t !== void 0 ? t : n
  ), s = (a, ...l) => {
    i(a), r == null || r(a, ...l);
  };
  return e !== void 0 ? [e, r, !0] : [o, s, !1];
}
function Kd(e, t) {
  return gy("(prefers-reduced-motion: reduce)", e, t);
}
function Py(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = q(e), s = ee(() => {
    i((c) => c || (n == null || n(), !0));
  }, [n]), a = ee(() => {
    i((c) => c && (r == null || r(), !1));
  }, [r]), l = ee(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: l }];
}
function ky(e) {
  const t = V();
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
const Ey = {};
function Ty(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = at(t[r], o) : t[r] = o;
    });
  }), t;
}
function Go({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || Ey
  );
  return Ty(i);
}
function yo({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
const Jd = tn(null);
function vn() {
  const e = wt(Jd);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function Ry() {
  return vn().cssVariablesResolver;
}
function Oy() {
  return vn().classNamesPrefix;
}
function la() {
  return vn().getStyleNonce;
}
function Ly() {
  return vn().withStaticClasses;
}
function $y() {
  return vn().headless;
}
function jy() {
  var e;
  return (e = vn().stylesTransform) == null ? void 0 : e.sx;
}
function Ay() {
  var e;
  return (e = vn().stylesTransform) == null ? void 0 : e.styles;
}
function Ny(e) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e);
}
function My(e) {
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
  if (t.length === 8) {
    const s = parseInt(t.slice(6, 8), 16) / 255;
    return {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
      a: s
    };
  }
  const n = parseInt(t, 16), r = n >> 16 & 255, o = n >> 8 & 255, i = n & 255;
  return {
    r,
    g: o,
    b: i,
    a: 1
  };
}
function _y(e) {
  const [t, n, r, o] = e.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: t, g: n, b: r, a: o || 1 };
}
function Fy(e) {
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
function ca(e) {
  return Ny(e) ? My(e) : e.startsWith("rgb") ? _y(e) : e.startsWith("hsl") ? Fy(e) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Jr(e, t) {
  if (e.startsWith("var("))
    return `color-mix(in srgb, ${e}, black ${t * 100}%)`;
  const { r: n, g: r, b: o, a: i } = ca(e), s = 1 - t, a = (l) => Math.round(l * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function gr(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function Ui(e) {
  return e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
}
function zy(e) {
  const t = e.match(/oklch\((.*?)%\s/);
  return t ? parseFloat(t[1]) : null;
}
function By(e) {
  if (e.startsWith("oklch("))
    return (zy(e) || 0) / 100;
  const { r: t, g: n, b: r } = ca(e), o = t / 255, i = n / 255, s = r / 255, a = Ui(o), l = Ui(i), c = Ui(s);
  return 0.2126 * a + 0.7152 * l + 0.0722 * c;
}
function tr(e, t = 0.179) {
  return e.startsWith("var(") ? !1 : By(e) > t;
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
  const [r, o] = e.split("."), i = o ? Number(o) : void 0, s = r in t.colors;
  if (s) {
    const a = i !== void 0 ? t.colors[r][i] : t.colors[r][gr(t, n || "light")];
    return {
      color: r,
      value: a,
      shade: i,
      isThemeColor: s,
      isLight: tr(a, t.luminanceThreshold),
      variable: o ? `--mantine-color-${r}-${i}` : `--mantine-color-${r}-filled`
    };
  }
  return {
    color: e,
    value: e,
    isThemeColor: s,
    isLight: tr(e, t.luminanceThreshold),
    shade: i,
    variable: void 0
  };
}
function it(e, t) {
  const n = xn({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function Os(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = it(n.from, t), o = it(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function It(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  if (e.startsWith("var(")) {
    const i = (1 - t) * 100;
    return `color-mix(in srgb, ${e}, transparent ${i}%)`;
  }
  if (e.startsWith("oklch"))
    return e.includes("/") ? e.replace(/\/\s*[\d.]+\s*\)/, `/ ${t})`) : e.replace(")", ` / ${t})`);
  const { r: n, g: r, b: o } = ca(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Pn = It, Vy = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r,
  autoContrast: o
}) => {
  const i = xn({ color: e, theme: t }), s = typeof o == "boolean" ? o : t.autoContrast;
  if (n === "filled") {
    const a = s && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return i.isThemeColor ? i.shade === void 0 ? {
      background: `var(--mantine-color-${e}-filled)`,
      hover: `var(--mantine-color-${e}-filled-hover)`,
      color: a,
      border: `${E(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${i.color}-${i.shade})`,
      hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
      color: a,
      border: `${E(1)} solid transparent`
    } : {
      background: e,
      hover: Jr(e, 0.1),
      color: a,
      border: `${E(1)} solid transparent`
    };
  }
  if (n === "light") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: `var(--mantine-color-${e}-light)`,
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${E(1)} solid transparent`
        };
      const a = t.colors[i.color][i.shade];
      return {
        background: It(a, 0.1),
        hover: It(a, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${E(1)} solid transparent`
      };
    }
    return {
      background: It(e, 0.1),
      hover: It(e, 0.12),
      color: e,
      border: `${E(1)} solid transparent`
    };
  }
  if (n === "outline")
    return i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${e}-outline-hover)`,
      color: `var(--mantine-color-${e}-outline)`,
      border: `${E(1)} solid var(--mantine-color-${e}-outline)`
    } : {
      background: "transparent",
      hover: It(t.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${E(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: It(e, 0.05),
      color: e,
      border: `${E(1)} solid ${e}`
    };
  if (n === "subtle") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${e}-light-hover)`,
          color: `var(--mantine-color-${e}-light-color)`,
          border: `${E(1)} solid transparent`
        };
      const a = t.colors[i.color][i.shade];
      return {
        background: "transparent",
        hover: It(a, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${E(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: It(e, 0.12),
      color: e,
      border: `${E(1)} solid transparent`
    };
  }
  return n === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${e}-light-color)`,
    border: `${E(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
    border: `${E(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: e,
    border: `${E(1)} solid transparent`
  } : n === "white" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: Jr(t.white, 0.01),
    color: `var(--mantine-color-${e}-filled)`,
    border: `${E(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Jr(t.white, 0.01),
    color: `var(--mantine-color-${i.color}-${i.shade})`,
    border: `${E(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: Jr(t.white, 0.01),
    color: e,
    border: `${E(1)} solid transparent`
  } : n === "gradient" ? {
    background: Os(r, t),
    hover: Os(r, t),
    color: "var(--mantine-color-white)",
    border: "none"
  } : n === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${E(1)} solid var(--mantine-color-default-border)`
  } : {};
}, Wy = {
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
}, Oc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", ua = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Wy,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Vy,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: Oc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: Oc,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: E(34), lineHeight: "1.3" },
      h2: { fontSize: E(26), lineHeight: "1.35" },
      h3: { fontSize: E(22), lineHeight: "1.4" },
      h4: { fontSize: E(18), lineHeight: "1.45" },
      h5: { fontSize: E(16), lineHeight: "1.5" },
      h6: { fontSize: E(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: E(12),
    sm: E(14),
    md: E(16),
    lg: E(18),
    xl: E(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: E(2),
    sm: E(4),
    md: E(8),
    lg: E(16),
    xl: E(32)
  },
  spacing: {
    xs: E(10),
    sm: E(12),
    md: E(16),
    lg: E(20),
    xl: E(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), 0 ${E(1)} ${E(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(10)} ${E(
      15
    )} ${E(-5)}, rgba(0, 0, 0, 0.04) 0 ${E(7)} ${E(7)} ${E(-5)}`,
    md: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(20)} ${E(
      25
    )} ${E(-5)}, rgba(0, 0, 0, 0.04) 0 ${E(10)} ${E(10)} ${E(-5)}`,
    lg: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(28)} ${E(
      23
    )} ${E(-7)}, rgba(0, 0, 0, 0.04) 0 ${E(12)} ${E(12)} ${E(-7)}`,
    xl: `0 ${E(1)} ${E(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${E(36)} ${E(
      28
    )} ${E(-7)}, rgba(0, 0, 0, 0.04) 0 ${E(17)} ${E(17)} ${E(-7)}`
  },
  other: {},
  components: {}
};
function Lc(e) {
  return e === "auto" || e === "dark" || e === "light";
}
function Gy({
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
const Hy = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", $c = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function qi(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function jc(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Hy);
  if (typeof e.primaryShade == "object" && (!qi(e.primaryShade.dark) || !qi(e.primaryShade.light)))
    throw new Error($c);
  if (typeof e.primaryShade == "number" && !qi(e.primaryShade))
    throw new Error($c);
}
function Uy(e, t) {
  var r;
  if (!t)
    return jc(e), e;
  const n = aa(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), jc(n), n;
}
const da = tn(null), qy = () => wt(da) || ua;
function We() {
  const e = wt(da);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Xd({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = qy(), o = Ht(
    () => Uy(n ? r : ua, e),
    [e, r, n]
  );
  return /* @__PURE__ */ b.jsx(da.Provider, { value: o, children: t });
}
Xd.displayName = "@mantine/core/MantineThemeProvider";
function Ky() {
  const e = We(), t = la(), n = Re(e.breakpoints).reduce((r, o) => {
    const i = e.breakpoints[o].includes("px"), s = Es(e.breakpoints[o]), a = i ? `${s - 0.1}px` : Tc(s - 0.1), l = i ? `${s}px` : Tc(s);
    return `${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${l}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ b.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: n }
    }
  );
}
function Ki(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function nr(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Yy(e, t) {
  const n = Ki(e.variables), r = n ? nr(t, n) : "", o = Ki(e.dark), i = Ki(e.light), s = o ? nr(t === ":host" ? `${t}([data-mantine-color-scheme="dark"])` : `${t}[data-mantine-color-scheme="dark"]`, o) : "", a = i ? nr(t === ":host" ? `${t}([data-mantine-color-scheme="light"])` : `${t}[data-mantine-color-scheme="light"]`, i) : "";
  return `${r}${s}${a}`;
}
function Ho({ color: e, theme: t, autoContrast: n }) {
  return (typeof n == "boolean" ? n : t.autoContrast) && xn({ color: e || t.primaryColor, theme: t }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function Ac(e, t) {
  return Ho({
    color: e.colors[e.primaryColor][gr(e, t)],
    theme: e,
    autoContrast: null
  });
}
function Xr({
  theme: e,
  color: t,
  colorScheme: n,
  name: r = t,
  withColorValues: o = !0
}) {
  if (!e.colors[t])
    return {};
  if (n === "light") {
    const a = gr(e, "light"), l = {
      [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-filled)`,
      [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${a === 9 ? 8 : a + 1})`,
      [`--mantine-color-${r}-light`]: Pn(e.colors[t][a], 0.1),
      [`--mantine-color-${r}-light-hover`]: Pn(e.colors[t][a], 0.12),
      [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${a})`,
      [`--mantine-color-${r}-outline-hover`]: Pn(e.colors[t][a], 0.05)
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
      ...l
    } : l;
  }
  const i = gr(e, "dark"), s = {
    [`--mantine-color-${r}-text`]: `var(--mantine-color-${r}-4)`,
    [`--mantine-color-${r}-filled`]: `var(--mantine-color-${r}-${i})`,
    [`--mantine-color-${r}-filled-hover`]: `var(--mantine-color-${r}-${i === 9 ? 8 : i + 1})`,
    [`--mantine-color-${r}-light`]: Pn(
      e.colors[t][Math.max(0, i - 2)],
      0.15
    ),
    [`--mantine-color-${r}-light-hover`]: Pn(
      e.colors[t][Math.max(0, i - 2)],
      0.2
    ),
    [`--mantine-color-${r}-light-color`]: `var(--mantine-color-${r}-${Math.max(i - 5, 0)})`,
    [`--mantine-color-${r}-outline`]: `var(--mantine-color-${r}-${Math.max(i - 4, 0)})`,
    [`--mantine-color-${r}-outline-hover`]: Pn(
      e.colors[t][Math.max(i - 4, 0)],
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
    ...s
  } : s;
}
function Jy(e) {
  return !!e && typeof e == "object" && "mantine-virtual-color" in e;
}
function kn(e, t, n) {
  Re(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const Qd = (e) => {
  const t = gr(e, "light"), n = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : E(e.defaultRadius), r = {
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
      "--mantine-primary-color-contrast": Ac(e, "light"),
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
      "--mantine-primary-color-contrast": Ac(e, "dark"),
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
  kn(r.variables, e.breakpoints, "breakpoint"), kn(r.variables, e.spacing, "spacing"), kn(r.variables, e.fontSizes, "font-size"), kn(r.variables, e.lineHeights, "line-height"), kn(r.variables, e.shadows, "shadow"), kn(r.variables, e.radius, "radius"), e.colors[e.primaryColor].forEach((i, s) => {
    r.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${e.primaryColor}-${s})`;
  }), Re(e.colors).forEach((i) => {
    const s = e.colors[i];
    if (Jy(s)) {
      Object.assign(
        r.light,
        Xr({
          theme: e,
          name: s.name,
          color: s.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        r.dark,
        Xr({
          theme: e,
          name: s.name,
          color: s.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    s.forEach((a, l) => {
      r.variables[`--mantine-color-${i}-${l}`] = a;
    }), Object.assign(
      r.light,
      Xr({
        theme: e,
        color: i,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      r.dark,
      Xr({
        theme: e,
        color: i,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = e.headings.sizes;
  return Re(o).forEach((i) => {
    r.variables[`--mantine-${i}-font-size`] = o[i].fontSize, r.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, r.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || e.headings.fontWeight;
  }), r;
};
function Xy({ theme: e, generator: t }) {
  const n = Qd(e), r = t == null ? void 0 : t(e);
  return r ? aa(n, r) : n;
}
const Yi = Qd(ua);
function Qy(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return Re(e.variables).forEach((n) => {
    Yi.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), Re(e.light).forEach((n) => {
    Yi.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), Re(e.dark).forEach((n) => {
    Yi.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function Zy(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Zd({
  cssVariablesSelector: e,
  deduplicateCssVariables: t
}) {
  const n = We(), r = la(), o = Ry(), i = Xy({ theme: n, generator: o }), s = e === ":root" && t, a = s ? Qy(i) : i, l = Yy(a, e);
  return l ? /* @__PURE__ */ b.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: r == null ? void 0 : r(),
      dangerouslySetInnerHTML: {
        __html: `${l}${s ? "" : Zy(e)}`
      }
    }
  ) : null;
}
Zd.displayName = "@mantine/CssVariables";
function ev() {
  const e = console.error;
  console.error = (...t) => {
    t.length > 1 && typeof t[0] == "string" && t[0].toLowerCase().includes("extra attributes from the server") && typeof t[1] == "string" && t[1].toLowerCase().includes("data-mantine-color-scheme") || e(...t);
  };
}
function En(e, t) {
  var r;
  const n = e !== "auto" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (r = t()) == null || r.setAttribute("data-mantine-color-scheme", n);
}
function tv({
  manager: e,
  defaultColorScheme: t,
  getRootElement: n,
  forceColorScheme: r
}) {
  const o = V(), [i, s] = q(() => e.get(t)), a = r || i, l = ee(
    (u) => {
      r || (En(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), c = ee(() => {
    s(t), En(t, n), e.clear();
  }, [e.clear, t]);
  return H(() => (e.subscribe(l), e.unsubscribe), [e.subscribe, e.unsubscribe]), Ar(() => {
    En(e.get(t), n);
  }, []), H(() => {
    var d;
    if (r)
      return En(r, n), () => {
      };
    r === void 0 && En(i, n), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (f) => {
      i === "auto" && En(f.matches ? "dark" : "light", n);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var f;
      return (f = o.current) == null ? void 0 : f.removeEventListener("change", u);
    };
  }, [i, r]), { colorScheme: a, setColorScheme: l, clearColorScheme: c };
}
function nv({
  respectReducedMotion: e,
  getRootElement: t
}) {
  Ar(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
ev();
function ef({
  theme: e,
  children: t,
  getStyleNonce: n,
  withStaticClasses: r = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: l = "mantine",
  colorSchemeManager: c = Gy(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: f,
  forceColorScheme: p,
  stylesTransform: m
}) {
  const { colorScheme: h, setColorScheme: g, clearColorScheme: y } = tv({
    defaultColorScheme: u,
    forceColorScheme: p,
    manager: c,
    getRootElement: d
  });
  return nv({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: d
  }), /* @__PURE__ */ b.jsx(
    Jd.Provider,
    {
      value: {
        colorScheme: h,
        setColorScheme: g,
        clearColorScheme: y,
        getRootElement: d,
        classNamesPrefix: l,
        getStyleNonce: n,
        cssVariablesResolver: f,
        cssVariablesSelector: a,
        withStaticClasses: r,
        stylesTransform: m
      },
      children: /* @__PURE__ */ b.jsxs(Xd, { theme: e, children: [
        s && /* @__PURE__ */ b.jsx(
          Zd,
          {
            cssVariablesSelector: a,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ b.jsx(Ky, {}),
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
    resolvedStyles: yo({
      theme: o,
      styles: t,
      props: n,
      stylesCtx: r || void 0
    })
  };
}
const rv = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function ov({ theme: e, options: t, unstyled: n }) {
  return at(
    (t == null ? void 0 : t.focusable) && !n && (e.focusClassName || rv[e.focusRing]),
    (t == null ? void 0 : t.active) && !n && e.activeClassName
  );
}
function iv({
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
function Nc({
  selector: e,
  stylesCtx: t,
  theme: n,
  classNames: r,
  props: o
}) {
  return Go({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
}
function sv({ rootSelector: e, selector: t, className: n }) {
  return e === t ? n : void 0;
}
function av({ selector: e, classes: t, unstyled: n }) {
  return n ? void 0 : t[e];
}
function lv({
  themeName: e,
  classNamesPrefix: t,
  selector: n,
  withStaticClass: r
}) {
  return r === !1 ? [] : e.map((o) => `${t}-${o}-${n}`);
}
function cv({
  themeName: e,
  theme: t,
  selector: n,
  props: r,
  stylesCtx: o
}) {
  return e.map(
    (i) => {
      var s, a;
      return (a = Go({
        theme: t,
        classNames: (s = t.components[i]) == null ? void 0 : s.classNames,
        props: r,
        stylesCtx: o
      })) == null ? void 0 : a[n];
    }
  );
}
function uv({
  options: e,
  classes: t,
  selector: n,
  unstyled: r
}) {
  return e != null && e.variant && !r ? t[`${n}--${e.variant}`] : void 0;
}
function dv({
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
  stylesCtx: d,
  withStaticClasses: f,
  headless: p,
  transformedStyles: m
}) {
  return at(
    ov({ theme: e, options: t, unstyled: a || p }),
    cv({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    uv({ options: t, classes: s, selector: r, unstyled: a }),
    Nc({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    Nc({ selector: r, stylesCtx: d, theme: e, classNames: m, props: u }),
    iv({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    sv({ rootSelector: c, selector: r, className: l }),
    av({ selector: r, classes: s, unstyled: a || p }),
    f && !p && lv({
      themeName: n,
      classNamesPrefix: o,
      selector: r,
      withStaticClass: t == null ? void 0 : t.withStaticClass
    }),
    t == null ? void 0 : t.className
  );
}
function fv({
  theme: e,
  themeName: t,
  props: n,
  stylesCtx: r,
  selector: o
}) {
  return t.map(
    (i) => {
      var s;
      return yo({
        theme: e,
        styles: (s = e.components[i]) == null ? void 0 : s.styles,
        props: n,
        stylesCtx: r
      })[o];
    }
  ).reduce((i, s) => ({ ...i, ...s }), {});
}
function Ls({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...Ls({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function pv(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...$r(n[r]) };
  }), t), {});
}
function mv({
  vars: e,
  varsResolver: t,
  theme: n,
  props: r,
  stylesCtx: o,
  selector: i,
  themeName: s,
  headless: a
}) {
  var l;
  return (l = pv([
    a ? {} : t == null ? void 0 : t(n, r, o),
    ...s.map((c) => {
      var u, d, f;
      return (f = (d = (u = n.components) == null ? void 0 : u[c]) == null ? void 0 : d.vars) == null ? void 0 : f.call(d, n, r, o);
    }),
    e == null ? void 0 : e(n, r, o)
  ])) == null ? void 0 : l[i];
}
function gv({
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
  varsResolver: u,
  headless: d,
  withStylesTransform: f
}) {
  return {
    ...!f && fv({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...!f && yo({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...!f && yo({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...mv({ theme: e, props: o, stylesCtx: i, vars: c, varsResolver: u, selector: n, themeName: t, headless: d }),
    ...s === n ? Ls({ style: l, theme: e }) : null,
    ...Ls({ style: r == null ? void 0 : r.style, theme: e })
  };
}
function hv({ props: e, stylesCtx: t, themeName: n }) {
  var s;
  const r = We(), o = (s = Ay()) == null ? void 0 : s();
  return {
    getTransformedStyles: (a) => o ? [
      ...a.map(
        (c) => o(c, { props: e, theme: r, ctx: t })
      ),
      ...n.map(
        (c) => {
          var u;
          return o((u = r.components[c]) == null ? void 0 : u.styles, { props: e, theme: r, ctx: t });
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
  style: i,
  rootSelector: s = "root",
  unstyled: a,
  classNames: l,
  styles: c,
  vars: u,
  varsResolver: d
}) {
  const f = We(), p = Oy(), m = Ly(), h = $y(), g = (Array.isArray(e) ? e : [e]).filter((w) => w), { withStylesTransform: y, getTransformedStyles: x } = hv({
    props: n,
    stylesCtx: r,
    themeName: g
  });
  return (w, v) => ({
    className: dv({
      theme: f,
      options: v,
      themeName: g,
      selector: w,
      classNamesPrefix: p,
      classNames: l,
      classes: t,
      unstyled: a,
      className: o,
      rootSelector: s,
      props: n,
      stylesCtx: r,
      withStaticClasses: m,
      headless: h,
      transformedStyles: x([v == null ? void 0 : v.styles, c])
    }),
    style: gv({
      theme: f,
      themeName: g,
      selector: w,
      options: v,
      props: n,
      stylesCtx: r,
      rootSelector: s,
      styles: c,
      style: i,
      vars: u,
      varsResolver: d,
      headless: h,
      withStylesTransform: y
    })
  });
}
function fa(e, t) {
  return typeof e == "boolean" ? e : t.autoContrast;
}
function _(e, t, n) {
  var s;
  const r = We(), o = (s = r.components[e]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...$r(n) };
}
function Ji(e) {
  return Re(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${ty(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function bv({ selector: e, styles: t, media: n, container: r }) {
  const o = t ? Ji(t) : "", i = Array.isArray(n) ? n.map((a) => `@media${a.query}{${e}{${Ji(a.styles)}}}`) : [], s = Array.isArray(r) ? r.map(
    (a) => `@container ${a.query}{${e}{${Ji(a.styles)}}}`
  ) : [];
  return `${o ? `${e}{${o}}` : ""}${i.join("")}${s.join("")}`.trim();
}
function pa(e) {
  const t = la();
  return /* @__PURE__ */ b.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: t == null ? void 0 : t(),
      dangerouslySetInnerHTML: { __html: bv(e) }
    }
  );
}
function Nr(e) {
  const {
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    me: l,
    ms: c,
    p: u,
    px: d,
    py: f,
    pt: p,
    pb: m,
    pl: h,
    pr: g,
    pe: y,
    ps: x,
    bd: w,
    bg: v,
    c: S,
    opacity: C,
    ff: I,
    fz: D,
    fw: T,
    lts: $,
    ta: A,
    lh: F,
    fs: W,
    tt: R,
    td: j,
    w: P,
    miw: O,
    maw: L,
    h: z,
    mih: M,
    mah: K,
    bgsz: Z,
    bgp: se,
    bgr: he,
    bga: oe,
    pos: le,
    top: pe,
    left: $e,
    bottom: ae,
    right: Se,
    inset: Ct,
    display: me,
    flex: ge,
    hiddenFrom: fe,
    visibleFrom: ft,
    lightHidden: Dt,
    darkHidden: be,
    sx: Ot,
    ...Pe
  } = e;
  return { styleProps: $r({
    m: t,
    mx: n,
    my: r,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    me: l,
    ms: c,
    p: u,
    px: d,
    py: f,
    pt: p,
    pb: m,
    pl: h,
    pr: g,
    pe: y,
    ps: x,
    bd: w,
    bg: v,
    c: S,
    opacity: C,
    ff: I,
    fz: D,
    fw: T,
    lts: $,
    ta: A,
    lh: F,
    fs: W,
    tt: R,
    td: j,
    w: P,
    miw: O,
    maw: L,
    h: z,
    mih: M,
    mah: K,
    bgsz: Z,
    bgp: se,
    bgr: he,
    bga: oe,
    pos: le,
    top: pe,
    left: $e,
    bottom: ae,
    right: Se,
    inset: Ct,
    display: me,
    flex: ge,
    hiddenFrom: fe,
    visibleFrom: ft,
    lightHidden: Dt,
    darkHidden: be,
    sx: Ot
  }), rest: Pe };
}
const yv = {
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
function vv(e, t) {
  const n = xn({ color: e, theme: t });
  return n.isThemeColor && n.shade === void 0 ? `var(--mantine-color-${n.color}-text)` : ma(e, t);
}
function xv(e, t) {
  if (typeof e == "number")
    return E(e);
  if (typeof e == "string") {
    const [n, r, ...o] = e.split(" ").filter((s) => s.trim() !== "");
    let i = `${E(n)}`;
    return r && (i += ` ${r}`), o.length > 0 && (i += ` ${ma(o.join(" "), t)}`), i.trim();
  }
  return e;
}
const Mc = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function wv(e) {
  return typeof e == "string" && e in Mc ? Mc[e] : e;
}
const Sv = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Cv(e, t) {
  return typeof e == "string" && e in t.fontSizes ? `var(--mantine-font-size-${e})` : typeof e == "string" && Sv.includes(e) ? `var(--mantine-${e}-font-size)` : typeof e == "number" || typeof e == "string" ? E(e) : e;
}
function Dv(e) {
  return e;
}
const Iv = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Pv(e, t) {
  return typeof e == "string" && e in t.lineHeights ? `var(--mantine-line-height-${e})` : typeof e == "string" && Iv.includes(e) ? `var(--mantine-${e}-line-height)` : e;
}
function kv(e) {
  return typeof e == "number" ? E(e) : e;
}
function Ev(e, t) {
  if (typeof e == "number")
    return E(e);
  if (typeof e == "string") {
    const n = e.replace("-", "");
    if (!(n in t.spacing))
      return E(e);
    const r = `--mantine-spacing-${n}`;
    return e.startsWith("-") ? `calc(var(${r}) * -1)` : `var(${r})`;
  }
  return e;
}
const Xi = {
  color: ma,
  textColor: vv,
  fontSize: Cv,
  spacing: Ev,
  identity: Dv,
  size: kv,
  lineHeight: Pv,
  fontFamily: wv,
  border: xv
};
function _c(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function Tv({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(_c(o)) - Number(_c(i))).map((o) => ({ query: o, styles: e[o] }));
  return { ...t, media: r };
}
function Rv(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.keys(e);
  return !(t.length === 1 && t[0] === "base");
}
function Ov(e) {
  return typeof e == "object" && e !== null ? "base" in e ? e.base : void 0 : e;
}
function Lv(e) {
  return typeof e == "object" && e !== null ? Re(e).filter((t) => t !== "base") : [];
}
function $v(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function jv({
  styleProps: e,
  data: t,
  theme: n
}) {
  return Tv(
    Re(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = Ov(e[o]);
        if (!Rv(e[o]))
          return s.forEach((c) => {
            r.inlineStyles[c] = Xi[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const l = Lv(e[o]);
        return s.forEach((c) => {
          a && (r.styles[c] = Xi[i.type](a, n)), l.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [c]: Xi[i.type](
                $v(e[o], u),
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
function ga() {
  return `__m__-${Id().replace(/:/g, "")}`;
}
function ha(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ha(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function nf(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function Av(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[nf(n)] = e[n]), t;
  }, {});
}
function rf(e) {
  return e ? typeof e == "string" ? { [nf(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...rf(n) }),
    {}
  ) : Av(e) : null;
}
function $s(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...$s(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Nv({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = $s(t, e), i = $s(n, e);
  return { ...o, ...i, ...r };
}
const of = te(
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
    __size: f,
    ...p
  }, m) => {
    var D;
    const h = We(), g = e || "div", { styleProps: y, rest: x } = Nr(p), w = jy(), v = (D = w == null ? void 0 : w()) == null ? void 0 : D(y.sx), S = ga(), C = jv({
      styleProps: y,
      theme: h,
      data: yv
    }), I = {
      ref: m,
      style: Nv({
        theme: h,
        style: t,
        vars: n,
        styleProps: C.inlineStyles
      }),
      className: at(r, v, {
        [S]: C.hasResponsiveStyles,
        "mantine-light-hidden": c,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${l}`]: l
      }),
      "data-variant": o,
      "data-size": Fd(s) ? void 0 : s || void 0,
      size: f,
      ...rf(i),
      ...x
    };
    return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      C.hasResponsiveStyles && /* @__PURE__ */ b.jsx(
        pa,
        {
          selector: `.${S}`,
          styles: C.styles,
          media: C.media
        }
      ),
      typeof d == "function" ? d(I) : /* @__PURE__ */ b.jsx(g, { ...I })
    ] });
  }
);
of.displayName = "@mantine/core/Box";
const B = of;
function sf(e) {
  return e;
}
function U(e) {
  const t = te(e);
  return t.extend = sf, t.withProps = (n) => {
    const r = te((o, i) => /* @__PURE__ */ b.jsx(t, { ...n, ...o, ref: i }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
  }, t;
}
function Bt(e) {
  const t = te(e);
  return t.withProps = (n) => {
    const r = te((o, i) => /* @__PURE__ */ b.jsx(t, { ...n, ...o, ref: i }));
    return r.extend = t.extend, r.displayName = `WithProps(${t.displayName})`, r;
  }, t.extend = sf, t;
}
const Mv = tn({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Mr() {
  return wt(Mv);
}
function _v(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Qi(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const rr = typeof window < "u" && window.requestAnimationFrame;
function Fv({
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
  }, [a, l] = q(r ? {} : s), c = (m) => {
    ia(() => l(m));
  }, u = (m) => {
    c((h) => ({ ...h, ...m }));
  };
  function d(m) {
    const h = e || _v(m);
    return {
      transition: `height ${h}ms ${t}, opacity ${h}ms ${t}`
    };
  }
  Jt(() => {
    typeof rr == "function" && rr(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), rr(() => {
        const m = Qi(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Qi(o);
      u({ ...d(m), willChange: "height", height: m }), rr(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const h = Qi(o);
        h === a.height ? c({}) : u({ height: h }), n();
      } else
        a.height === i && (c(s), n());
  };
  function p({ style: m = {}, refKey: h = "ref", ...g } = {}) {
    const y = g[h];
    return {
      "aria-hidden": !r,
      ...g,
      [h]: qd(o, y),
      onTransitionEnd: f,
      style: { boxSizing: "border-box", ...m, ...a }
    };
  }
  return p;
}
const zv = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, af = U((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: l,
    ...c
  } = _("Collapse", zv, e), u = We(), d = Kd(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = Fv({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ b.jsx(B, { ...c, children: n }) : null : /* @__PURE__ */ b.jsx(
    B,
    {
      ...m({
        style: {
          opacity: r || !l ? 1 : 0,
          transition: l ? `opacity ${p}ms ${i}` : "none",
          ...ha(s, u)
        },
        ref: t,
        ...c
      }),
      children: n
    }
  );
});
af.displayName = "@mantine/core/Collapse";
const [Bv, lt] = zt(
  "ScrollArea.Root component was not found in tree"
);
function Ln(e, t) {
  const n = un(t);
  Ar(() => {
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
const Vv = te((e, t) => {
  const { style: n, ...r } = e, o = lt(), [i, s] = q(0), [a, l] = q(0), c = !!(i && a);
  return Ln(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), l(u);
  }), Ln(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), c ? /* @__PURE__ */ b.jsx("div", { ...r, ref: t, style: { ...n, width: i, height: a } }) : null;
}), Wv = te((e, t) => {
  const n = lt(), r = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ b.jsx(Vv, { ...e, ref: t }) : null;
}), Gv = {
  scrollHideDelay: 1e3,
  type: "hover"
}, lf = te((e, t) => {
  const n = _("ScrollAreaRoot", Gv, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, l] = q(null), [c, u] = q(null), [d, f] = q(null), [p, m] = q(null), [h, g] = q(null), [y, x] = q(0), [w, v] = q(0), [S, C] = q(!1), [I, D] = q(!1), T = Ne(t, ($) => l($));
  return /* @__PURE__ */ b.jsx(
    Bv,
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
        scrollbarXEnabled: S,
        onScrollbarXEnabledChange: C,
        scrollbarY: h,
        onScrollbarYChange: g,
        scrollbarYEnabled: I,
        onScrollbarYEnabledChange: D,
        onCornerWidthChange: x,
        onCornerHeightChange: v
      },
      children: /* @__PURE__ */ b.jsx(
        B,
        {
          ...s,
          ref: T,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${y}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${w}px`
          }
        }
      )
    }
  );
});
lf.displayName = "@mantine/core/ScrollAreaRoot";
function cf(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function Uo(e) {
  const t = cf(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
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
function Hv(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Fc(e, t, n = "ltr") {
  const r = Uo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, l = n === "ltr" ? [0, s] : [s * -1, 0], c = Hv(e, l);
  return uf([0, s], [0, a])(c);
}
function Uv(e, t, n, r = "ltr") {
  const o = Uo(n), i = o / 2, s = t || i, a = o - s, l = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return uf([l, c], d)(e);
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
const [qv, ff] = zt(
  "ScrollAreaScrollbar was not found in tree"
), pf = te((e, t) => {
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
  } = e, f = lt(), [p, m] = q(null), h = Ne(t, (D) => m(D)), g = V(null), y = V(""), { viewport: x } = f, w = n.content - n.viewport, v = un(c), S = un(a), C = Wo(u, 10), I = (D) => {
    if (g.current) {
      const T = D.clientX - g.current.left, $ = D.clientY - g.current.top;
      l({ x: T, y: $ });
    }
  };
  return H(() => {
    const D = (T) => {
      const $ = T.target;
      (p == null ? void 0 : p.contains($)) && v(T, w);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [x, p, w, v]), H(S, [n, S]), Ln(p, C), Ln(f.content, C), /* @__PURE__ */ b.jsx(
    qv,
    {
      value: {
        scrollbar: p,
        hasThumb: r,
        onThumbChange: un(o),
        onThumbPointerUp: un(i),
        onThumbPositionChange: S,
        onThumbPointerDown: un(s)
      },
      children: /* @__PURE__ */ b.jsx(
        "div",
        {
          ...d,
          ref: h,
          style: { position: "absolute", ...d.style },
          onPointerDown: pn(e.onPointerDown, (D) => {
            D.preventDefault();
            const T = 0;
            D.button === T && (D.target.setPointerCapture(D.pointerId), g.current = p.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", I(D));
          }),
          onPointerMove: pn(e.onPointerMove, I),
          onPointerUp: pn(e.onPointerUp, (D) => {
            D.preventDefault();
            const T = D.target;
            T.hasPointerCapture(D.pointerId) && T.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = y.current, document.body.style.pointerEvents = "auto", g.current = null;
          })
        }
      )
    }
  );
}), Kv = te(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = lt(), [a, l] = q(), c = V(null), u = Ne(t, c, s.onScrollbarXChange);
    return H(() => {
      c.current && l(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ b.jsx(
      pf,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${Uo(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), df(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          c.current && s.viewport && a && r({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: c.current.clientWidth,
              paddingStart: vo(a.paddingLeft),
              paddingEnd: vo(a.paddingRight)
            }
          });
        }
      }
    );
  }
), Yv = te(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = lt(), [a, l] = q(), c = V(null), u = Ne(t, c, s.onScrollbarYChange);
    return H(() => {
      c.current && l(window.getComputedStyle(c.current));
    }, []), /* @__PURE__ */ b.jsx(
      pf,
      {
        ...i,
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
          if (s.viewport) {
            const p = s.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), df(p, f) && d.preventDefault();
          }
        },
        onResize: () => {
          c.current && s.viewport && a && r({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: c.current.clientHeight,
              paddingStart: vo(a.paddingTop),
              paddingEnd: vo(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), ba = te((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = Mr(), i = lt(), s = V(null), a = V(0), [l, c] = q({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = cf(l.viewport, l.content), d = {
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
  }, f = (p, m) => Uv(p, a.current, l, m);
  return n === "horizontal" ? /* @__PURE__ */ b.jsx(
    Kv,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = Fc(p, l, o);
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
  ) : n === "vertical" ? /* @__PURE__ */ b.jsx(
    Yv,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = Fc(p, l);
          l.scrollbar.size === 0 ? s.current.style.opacity = "0" : s.current.style.opacity = "1", s.current.style.transform = `translate3d(0, ${m}px, 0)`;
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
}), mf = te(
  (e, t) => {
    const n = lt(), { forceMount: r, ...o } = e, [i, s] = q(!1), a = e.orientation === "horizontal", l = Wo(() => {
      if (n.viewport) {
        const c = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? c : u);
      }
    }, 10);
    return Ln(n.viewport, l), Ln(n.content, l), r || i ? /* @__PURE__ */ b.jsx(
      ba,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), Jv = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = lt(), [i, s] = q(!1);
    return H(() => {
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
    }, [o.scrollArea, o.scrollHideDelay]), n || i ? /* @__PURE__ */ b.jsx(
      mf,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Xv = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = lt(), i = e.orientation === "horizontal", [s, a] = q("hidden"), l = Wo(() => a("idle"), 100);
    return H(() => {
      if (s === "idle") {
        const c = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(c);
      }
    }, [s, o.scrollHideDelay]), H(() => {
      const { viewport: c } = o, u = i ? "scrollLeft" : "scrollTop";
      if (c) {
        let d = c[u];
        const f = () => {
          const p = c[u];
          d !== p && (a("scrolling"), l()), d = p;
        };
        return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
      }
    }, [o.viewport, i, l]), n || s !== "hidden" ? /* @__PURE__ */ b.jsx(
      ba,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: pn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: pn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), zc = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = lt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return H(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ b.jsx(Jv, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ b.jsx(Xv, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ b.jsx(mf, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ b.jsx(ba, { ...r, ref: t }) : null;
  }
);
function Qv(e, t = () => {
}) {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const i = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== i.left, a = n.top !== i.top;
    (s || a) && t(), n = i, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
}
const Zv = te((e, t) => {
  const { style: n, ...r } = e, o = lt(), i = ff(), { onThumbPositionChange: s } = i, a = Ne(t, (u) => i.onThumbChange(u)), l = V(), c = Wo(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return H(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (c(), !l.current) {
          const f = Qv(u, s);
          l.current = f, s();
        }
      };
      return s(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, c, s]), /* @__PURE__ */ b.jsx(
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
      onPointerDownCapture: pn(e.onPointerDownCapture, (u) => {
        const f = u.target.getBoundingClientRect(), p = u.clientX - f.left, m = u.clientY - f.top;
        i.onThumbPointerDown({ x: p, y: m });
      }),
      onPointerUp: pn(e.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Bc = te(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ff();
    return n || o.hasThumb ? /* @__PURE__ */ b.jsx(Zv, { ref: t, ...r }) : null;
  }
), gf = te(
  ({ children: e, style: t, ...n }, r) => {
    const o = lt(), i = Ne(r, o.onViewportChange);
    return /* @__PURE__ */ b.jsx(
      B,
      {
        ...n,
        ref: i,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...t
        },
        children: /* @__PURE__ */ b.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange, children: e })
      }
    );
  }
);
gf.displayName = "@mantine/core/ScrollAreaViewport";
var ya = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const hf = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, ex = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": E(t)
  }
}), _r = U((e, t) => {
  const n = _("ScrollArea", hf, e), {
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
    children: h,
    offsetScrollbars: g,
    scrollbars: y,
    ...x
  } = n, [w, v] = q(!1), S = Y({
    name: "ScrollArea",
    props: n,
    classes: ya,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: ex
  });
  return /* @__PURE__ */ b.jsxs(
    lf,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: y,
      ...S("root"),
      ...x,
      children: [
        /* @__PURE__ */ b.jsx(
          gf,
          {
            ...f,
            ...S("viewport", { style: f == null ? void 0 : f.style }),
            ref: p,
            "data-offset-scrollbars": g === !0 ? "xy" : g || void 0,
            "data-scrollbars": y || void 0,
            onScroll: (C) => {
              var I;
              (I = f == null ? void 0 : f.onScroll) == null || I.call(f, C), m == null || m({ x: C.currentTarget.scrollLeft, y: C.currentTarget.scrollTop });
            },
            children: h
          }
        ),
        (y === "xy" || y === "x") && /* @__PURE__ */ b.jsx(
          zc,
          {
            ...S("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: /* @__PURE__ */ b.jsx(Bc, { ...S("thumb") })
          }
        ),
        (y === "xy" || y === "y") && /* @__PURE__ */ b.jsx(
          zc,
          {
            ...S("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => v(!0),
            onMouseLeave: () => v(!1),
            children: /* @__PURE__ */ b.jsx(Bc, { ...S("thumb") })
          }
        ),
        /* @__PURE__ */ b.jsx(
          Wv,
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
_r.displayName = "@mantine/core/ScrollArea";
const va = U((e, t) => {
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
    scrollbars: h,
    style: g,
    vars: y,
    ...x
  } = _("ScrollAreaAutosize", hf, e);
  return /* @__PURE__ */ b.jsx(B, { ...x, ref: t, style: [{ display: "flex", overflow: "auto" }, g], children: /* @__PURE__ */ b.jsx(B, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ b.jsx(
    _r,
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
      vars: y,
      scrollbars: h,
      children: n
    }
  ) }) });
});
_r.classes = ya;
va.displayName = "@mantine/core/ScrollAreaAutosize";
va.classes = ya;
_r.Autosize = va;
var bf = { root: "m_87cf2631" };
const tx = {
  __staticSelector: "UnstyledButton"
}, rn = Bt(
  (e, t) => {
    const n = _("UnstyledButton", tx, e), {
      className: r,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: l,
      style: c,
      ...u
    } = n, d = Y({
      name: i,
      props: n,
      classes: bf,
      className: r,
      style: c,
      classNames: a,
      styles: l,
      unstyled: s
    });
    return /* @__PURE__ */ b.jsx(
      B,
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
rn.classes = bf;
rn.displayName = "@mantine/core/UnstyledButton";
var yf = { root: "m_515a97f8" };
const nx = {}, xa = U((e, t) => {
  const n = _("VisuallyHidden", nx, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, ...c } = n, u = Y({
    name: "VisuallyHidden",
    classes: yf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a
  });
  return /* @__PURE__ */ b.jsx(B, { component: "span", ref: t, ...u("root"), ...c });
});
xa.classes = yf;
xa.displayName = "@mantine/core/VisuallyHidden";
function Vn(e) {
  return vf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vt(e) {
  var t;
  return (t = (vf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vf(e) {
  return e instanceof Node || e instanceof ze(e).Node;
}
function ce(e) {
  return e instanceof Element || e instanceof ze(e).Element;
}
function Xe(e) {
  return e instanceof HTMLElement || e instanceof ze(e).HTMLElement;
}
function js(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ze(e).ShadowRoot;
}
function Fr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = st(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function rx(e) {
  return ["table", "td", "th"].includes(Vn(e));
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
  const t = Sa(), n = st(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function ox(e) {
  let t = Nt(e);
  for (; Xe(t) && !Xt(t); ) {
    if (qo(t))
      return null;
    if (wa(t))
      return t;
    t = Nt(t);
  }
  return null;
}
function Sa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xt(e) {
  return ["html", "body", "#document"].includes(Vn(e));
}
function st(e) {
  return ze(e).getComputedStyle(e);
}
function Ko(e) {
  return ce(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Nt(e) {
  if (Vn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    js(e) && e.host || // Fallback.
    Vt(e)
  );
  return js(t) ? t.host : t;
}
function xf(e) {
  const t = Nt(e);
  return Xt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Xe(t) && Fr(t) ? t : xf(t);
}
function jt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = xf(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ze(o);
  return i ? t.concat(s, s.visualViewport || [], Fr(o) ? o : [], s.frameElement && n ? jt(s.frameElement) : []) : t.concat(o, jt(o, [], n));
}
function Vc(e) {
  let t = e.activeElement;
  for (; ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null; ) {
    var n;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function hr(e, t) {
  if (!e || !t)
    return !1;
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && js(n)) {
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
function ix(e) {
  return lx() ? !1 : !Wc() && e.width === 0 && e.height === 0 || Wc() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch";
}
function sx() {
  return /apple/i.test(navigator.vendor);
}
function Wc() {
  const e = /android/i;
  return e.test(wf()) || e.test(Sf());
}
function ax() {
  return wf().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function lx() {
  return Sf().includes("jsdom/");
}
function As(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function cx(e) {
  return "nativeEvent" in e;
}
function ux(e) {
  return e.matches("html,body");
}
function dn(e) {
  return (e == null ? void 0 : e.ownerDocument) || document;
}
function Zi(e, t) {
  if (t == null)
    return !1;
  if ("composedPath" in e)
    return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function Rn(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const dx = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function fx(e) {
  return Xe(e) && e.matches(dx);
}
const Ue = Math.min, Ee = Math.max, xo = Math.round, Qr = Math.floor, Qt = (e) => ({
  x: e,
  y: e
}), px = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mx = {
  start: "end",
  end: "start"
};
function Ns(e, t, n) {
  return Ee(e, Ue(t, n));
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
function Da(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(xt(e)) ? "y" : "x";
}
function Ia(e) {
  return Ca(_t(e));
}
function gx(e, t, n) {
  n === void 0 && (n = !1);
  const r = Wn(e), o = Ia(e), i = Da(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = wo(s)), [s, wo(s)];
}
function hx(e) {
  const t = wo(e);
  return [Ms(e), t, Ms(t)];
}
function Ms(e) {
  return e.replace(/start|end/g, (t) => mx[t]);
}
function bx(e, t, n) {
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
function yx(e, t, n, r) {
  const o = Wn(e);
  let i = bx(xt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ms)))), i;
}
function wo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => px[t]);
}
function vx(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Pa(e) {
  return typeof e != "number" ? vx(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $n(e) {
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
function Gc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = _t(t), s = Ia(t), a = Da(s), l = xt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (Wn(t)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const xx = async (e, t, n) => {
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
  } = Gc(c, r, l), f = r, p = {}, m = 0;
  for (let h = 0; h < a.length; h++) {
    const {
      name: g,
      fn: y
    } = a[h], {
      x,
      y: w,
      data: v,
      reset: S
    } = await y({
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
    u = x ?? u, d = w ?? d, p = {
      ...p,
      [g]: {
        ...p[g],
        ...v
      }
    }, S && m <= 50 && (m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: d
    } = Gc(c, f, l)), h = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function ka(e, t) {
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
  } = Mt(t, e), m = Pa(p), g = a[f ? d === "floating" ? "reference" : "floating" : d], y = $n(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), x = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), v = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = $n(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: x,
    offsetParent: w,
    strategy: l
  }) : x);
  return {
    top: (y.top - S.top + m.top) / v.y,
    bottom: (S.bottom - y.bottom + m.bottom) / v.y,
    left: (y.left - S.left + m.left) / v.x,
    right: (S.right - y.right + m.right) / v.x
  };
}
const wx = (e) => ({
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
    } = Mt(e, t) || {};
    if (c == null)
      return {};
    const d = Pa(u), f = {
      x: n,
      y: r
    }, p = Ia(o), m = Da(p), h = await s.getDimensions(c), g = p === "y", y = g ? "top" : "left", x = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", v = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let I = C ? C[w] : 0;
    (!I || !await (s.isElement == null ? void 0 : s.isElement(C))) && (I = a.floating[w] || i.floating[m]);
    const D = v / 2 - S / 2, T = I / 2 - h[m] / 2 - 1, $ = Ue(d[y], T), A = Ue(d[x], T), F = $, W = I - h[m] - A, R = I / 2 - h[m] / 2 + D, j = Ns(F, R, W), P = !l.arrow && Wn(o) != null && R !== j && i.reference[m] / 2 - (R < F ? $ : A) - h[m] / 2 < 0, O = P ? R < F ? R - F : R - W : 0;
    return {
      [p]: f[p] + O,
      data: {
        [p]: j,
        centerOffset: R - j - O,
        ...P && {
          alignmentOffset: O
        }
      },
      reset: P
    };
  }
}), Sx = function(e) {
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
        flipAlignment: h = !0,
        ...g
      } = Mt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = xt(o), x = _t(a), w = xt(a) === a, v = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = f || (w || !h ? [wo(a)] : hx(a)), C = m !== "none";
      !f && C && S.push(...yx(a, h, m, v));
      const I = [a, ...S], D = await ka(t, g), T = [];
      let $ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && T.push(D[y]), d) {
        const R = gx(o, s, v);
        T.push(D[R[0]], D[R[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: T
      }], !T.every((R) => R <= 0)) {
        var A, F;
        const R = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, j = I[R];
        if (j)
          return {
            data: {
              index: R,
              overflows: $
            },
            reset: {
              placement: j
            }
          };
        let P = (F = $.filter((O) => O.overflows[0] <= 0).sort((O, L) => O.overflows[1] - L.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!P)
          switch (p) {
            case "bestFit": {
              var W;
              const O = (W = $.filter((L) => {
                if (C) {
                  const z = _t(L.placement);
                  return z === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((z) => z > 0).reduce((z, M) => z + M, 0)]).sort((L, z) => L[1] - z[1])[0]) == null ? void 0 : W[0];
              O && (P = O);
              break;
            }
            case "initialPlacement":
              P = a;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function Cf(e) {
  const t = Ue(...e.map((i) => i.left)), n = Ue(...e.map((i) => i.top)), r = Ee(...e.map((i) => i.right)), o = Ee(...e.map((i) => i.bottom));
  return {
    x: t,
    y: n,
    width: r - t,
    height: o - n
  };
}
function Cx(e) {
  const t = e.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => $n(Cf(o)));
}
const Dx = function(e) {
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
      } = Mt(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = Cx(u), f = $n(Cf(u)), p = Pa(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && l != null && c != null)
          return d.find((g) => l > g.left - p.left && l < g.right + p.right && c > g.top - p.top && c < g.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (_t(n) === "y") {
            const $ = d[0], A = d[d.length - 1], F = xt(n) === "top", W = $.top, R = A.bottom, j = F ? $.left : A.left, P = F ? $.right : A.right, O = P - j, L = R - W;
            return {
              top: W,
              bottom: R,
              left: j,
              right: P,
              width: O,
              height: L,
              x: j,
              y: W
            };
          }
          const g = xt(n) === "left", y = Ee(...d.map(($) => $.right)), x = Ue(...d.map(($) => $.left)), w = d.filter(($) => g ? $.left === x : $.right === y), v = w[0].top, S = w[w.length - 1].bottom, C = x, I = y, D = I - C, T = S - v;
          return {
            top: v,
            bottom: S,
            left: C,
            right: I,
            width: D,
            height: T,
            x: C,
            y: v
          };
        }
        return f;
      }
      const h = await i.getElementRects({
        reference: {
          getBoundingClientRect: m
        },
        floating: r.floating,
        strategy: s
      });
      return o.reference.x !== h.reference.x || o.reference.y !== h.reference.y || o.reference.width !== h.reference.width || o.reference.height !== h.reference.height ? {
        reset: {
          rects: h
        }
      } : {};
    }
  };
};
async function Ix(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = xt(n), a = Wn(n), l = _t(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = Mt(t, e);
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
const Px = function(e) {
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
      } = t, l = await Ix(t, e);
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
}, kx = function(e) {
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
          fn: (g) => {
            let {
              x: y,
              y: x
            } = g;
            return {
              x: y,
              y: x
            };
          }
        },
        ...l
      } = Mt(e, t), c = {
        x: n,
        y: r
      }, u = await ka(t, l), d = _t(xt(o)), f = Ca(d);
      let p = c[f], m = c[d];
      if (i) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", x = p + u[g], w = p - u[y];
        p = Ns(x, p, w);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", x = m + u[g], w = m - u[y];
        m = Ns(x, m, w);
      }
      const h = a.fn({
        ...t,
        [f]: p,
        [d]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r
        }
      };
    }
  };
}, Ex = function(e) {
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
      } = Mt(e, t), u = {
        x: n,
        y: r
      }, d = _t(o), f = Ca(d);
      let p = u[f], m = u[d];
      const h = Mt(a, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const w = f === "y" ? "height" : "width", v = i.reference[f] - i.floating[w] + g.mainAxis, S = i.reference[f] + i.reference[w] - g.mainAxis;
        p < v ? p = v : p > S && (p = S);
      }
      if (c) {
        var y, x;
        const w = f === "y" ? "width" : "height", v = ["top", "left"].includes(xt(o)), S = i.reference[d] - i.floating[w] + (v && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (v ? 0 : g.crossAxis), C = i.reference[d] + i.reference[w] + (v ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (v ? g.crossAxis : 0);
        m < S ? m = S : m > C && (m = C);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, Tx = function(e) {
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
      } = Mt(e, t), l = await ka(t, a), c = xt(n), u = Wn(n), d = _t(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, h;
      c === "top" || c === "bottom" ? (m = c, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = c, m = u === "end" ? "top" : "bottom");
      const g = p - l.top - l.bottom, y = f - l.left - l.right, x = Ue(p - l[m], g), w = Ue(f - l[h], y), v = !t.middlewareData.shift;
      let S = x, C = w;
      if (d ? C = u || v ? Ue(w, y) : y : S = u || v ? Ue(x, g) : g, v && !u) {
        const D = Ee(l.left, 0), T = Ee(l.right, 0), $ = Ee(l.top, 0), A = Ee(l.bottom, 0);
        d ? C = f - 2 * (D !== 0 || T !== 0 ? D + T : Ee(l.left, l.right)) : S = p - 2 * ($ !== 0 || A !== 0 ? $ + A : Ee(l.top, l.bottom));
      }
      await s({
        ...t,
        availableWidth: C,
        availableHeight: S
      });
      const I = await o.getDimensions(i.floating);
      return f !== I.width || p !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Df(e) {
  const t = st(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Xe(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = xo(n) !== i || xo(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Ea(e) {
  return ce(e) ? e : e.contextElement;
}
function On(e) {
  const t = Ea(e);
  if (!Xe(t))
    return Qt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Df(t);
  let s = (i ? xo(n.width) : n.width) / r, a = (i ? xo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Rx = /* @__PURE__ */ Qt(0);
function If(e) {
  const t = ze(e);
  return !Sa() || !t.visualViewport ? Rx : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Ox(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ze(e) ? !1 : t;
}
function gn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Ea(e);
  let s = Qt(1);
  t && (r ? ce(r) && (s = On(r)) : s = On(e));
  const a = Ox(i, n, r) ? If(i) : Qt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = ze(i), p = r && ce(r) ? ze(r) : r;
    let m = f, h = m.frameElement;
    for (; h && r && p !== m; ) {
      const g = On(h), y = h.getBoundingClientRect(), x = st(h), w = y.left + (h.clientLeft + parseFloat(x.paddingLeft)) * g.x, v = y.top + (h.clientTop + parseFloat(x.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, d *= g.y, l += w, c += v, m = ze(h), h = m.frameElement;
    }
  }
  return $n({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Lx(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Vt(r), a = t ? qo(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Qt(1);
  const u = Qt(0), d = Xe(r);
  if ((d || !d && !i) && ((Vn(r) !== "body" || Fr(s)) && (l = Ko(r)), Xe(r))) {
    const f = gn(r);
    c = On(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y
  };
}
function $x(e) {
  return Array.from(e.getClientRects());
}
function Pf(e) {
  return gn(Vt(e)).left + Ko(e).scrollLeft;
}
function jx(e) {
  const t = Vt(e), n = Ko(e), r = e.ownerDocument.body, o = Ee(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ee(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Pf(e);
  const a = -n.scrollTop;
  return st(r).direction === "rtl" && (s += Ee(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Ax(e, t) {
  const n = ze(e), r = Vt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = Sa();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Nx(e, t) {
  const n = gn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Xe(e) ? On(e) : Qt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Hc(e, t, n) {
  let r;
  if (t === "viewport")
    r = Ax(e, n);
  else if (t === "document")
    r = jx(Vt(e));
  else if (ce(t))
    r = Nx(t, n);
  else {
    const o = If(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return $n(r);
}
function kf(e, t) {
  const n = Nt(e);
  return n === t || !ce(n) || Xt(n) ? !1 : st(n).position === "fixed" || kf(n, t);
}
function Mx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = jt(e, [], !1).filter((a) => ce(a) && Vn(a) !== "body"), o = null;
  const i = st(e).position === "fixed";
  let s = i ? Nt(e) : e;
  for (; ce(s) && !Xt(s); ) {
    const a = st(s), l = wa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Fr(s) && !l && kf(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = Nt(s);
  }
  return t.set(e, r), r;
}
function _x(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? qo(t) ? [] : Mx(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const d = Hc(t, u, o);
    return c.top = Ee(d.top, c.top), c.right = Ue(d.right, c.right), c.bottom = Ue(d.bottom, c.bottom), c.left = Ee(d.left, c.left), c;
  }, Hc(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Fx(e) {
  const {
    width: t,
    height: n
  } = Df(e);
  return {
    width: t,
    height: n
  };
}
function zx(e, t, n) {
  const r = Xe(t), o = Vt(t), i = n === "fixed", s = gn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Qt(0);
  if (r || !r && !i)
    if ((Vn(t) !== "body" || Fr(o)) && (a = Ko(t)), r) {
      const d = gn(t, !0, i, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      o && (l.x = Pf(o));
  const c = s.left + a.scrollLeft - l.x, u = s.top + a.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: s.width,
    height: s.height
  };
}
function es(e) {
  return st(e).position === "static";
}
function Uc(e, t) {
  return !Xe(e) || st(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Ef(e, t) {
  const n = ze(e);
  if (qo(e))
    return n;
  if (!Xe(e)) {
    let o = Nt(e);
    for (; o && !Xt(o); ) {
      if (ce(o) && !es(o))
        return o;
      o = Nt(o);
    }
    return n;
  }
  let r = Uc(e, t);
  for (; r && rx(r) && es(r); )
    r = Uc(r, t);
  return r && Xt(r) && es(r) && !wa(r) ? n : r || ox(e) || n;
}
const Bx = async function(e) {
  const t = this.getOffsetParent || Ef, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: zx(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Vx(e) {
  return st(e).direction === "rtl";
}
const Wx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Lx,
  getDocumentElement: Vt,
  getClippingRect: _x,
  getOffsetParent: Ef,
  getElementRects: Bx,
  getClientRects: $x,
  getDimensions: Fx,
  getScale: On,
  isElement: ce,
  isRTL: Vx
};
function Gx(e, t) {
  let n = null, r;
  const o = Vt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
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
    const p = Qr(u), m = Qr(o.clientWidth - (c + d)), h = Qr(o.clientHeight - (u + f)), g = Qr(c), x = {
      rootMargin: -p + "px " + -m + "px " + -h + "px " + -g + "px",
      threshold: Ee(0, Ue(1, l)) || 1
    };
    let w = !0;
    function v(S) {
      const C = S[0].intersectionRatio;
      if (C !== l) {
        if (!w)
          return s();
        C ? s(!1, C) : r = setTimeout(() => {
          s(!1, 1e-7);
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
  return s(!0), i;
}
function Hx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Ea(e), u = o || i ? [...c ? jt(c) : [], ...jt(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), i && y.addEventListener("resize", n);
  });
  const d = c && a ? Gx(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let m, h = l ? gn(e) : null;
  l && g();
  function g() {
    const y = gn(e);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && n(), h = y, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n);
    }), d == null || d(), (y = p) == null || y.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const Ux = Px, qx = kx, Kx = Sx, Yx = Tx, qc = wx, Jx = Dx, Xx = Ex, Qx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Wx,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return xx(e, t, {
    ...o,
    platform: i
  });
};
var so = typeof document < "u" ? Fo : H;
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
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !So(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Tf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kc(e, t) {
  const n = Tf(e);
  return Math.round(t * n) / n;
}
function Yc(e) {
  const t = k.useRef(e);
  return so(() => {
    t.current = e;
  }), t;
}
function Zx(e) {
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
  } = e, [u, d] = k.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = k.useState(r);
  So(f, r) || p(r);
  const [m, h] = k.useState(null), [g, y] = k.useState(null), x = k.useCallback((O) => {
    O !== C.current && (C.current = O, h(O));
  }, []), w = k.useCallback((O) => {
    O !== I.current && (I.current = O, y(O));
  }, []), v = i || m, S = s || g, C = k.useRef(null), I = k.useRef(null), D = k.useRef(u), T = l != null, $ = Yc(l), A = Yc(o), F = k.useCallback(() => {
    if (!C.current || !I.current)
      return;
    const O = {
      placement: t,
      strategy: n,
      middleware: f
    };
    A.current && (O.platform = A.current), Qx(C.current, I.current, O).then((L) => {
      const z = {
        ...L,
        isPositioned: !0
      };
      W.current && !So(D.current, z) && (D.current = z, Fg.flushSync(() => {
        d(z);
      }));
    });
  }, [f, t, n, A]);
  so(() => {
    c === !1 && D.current.isPositioned && (D.current.isPositioned = !1, d((O) => ({
      ...O,
      isPositioned: !1
    })));
  }, [c]);
  const W = k.useRef(!1);
  so(() => (W.current = !0, () => {
    W.current = !1;
  }), []), so(() => {
    if (v && (C.current = v), S && (I.current = S), v && S) {
      if ($.current)
        return $.current(v, S, F);
      F();
    }
  }, [v, S, F, $, T]);
  const R = k.useMemo(() => ({
    reference: C,
    floating: I,
    setReference: x,
    setFloating: w
  }), [x, w]), j = k.useMemo(() => ({
    reference: v,
    floating: S
  }), [v, S]), P = k.useMemo(() => {
    const O = {
      position: n,
      left: 0,
      top: 0
    };
    if (!j.floating)
      return O;
    const L = Kc(j.floating, u.x), z = Kc(j.floating, u.y);
    return a ? {
      ...O,
      transform: "translate(" + L + "px, " + z + "px)",
      ...Tf(j.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: L,
      top: z
    };
  }, [n, a, j.floating, u.x, u.y]);
  return k.useMemo(() => ({
    ...u,
    update: F,
    refs: R,
    elements: j,
    floatingStyles: P
  }), [u, F, R, j, P]);
}
const ew = (e) => {
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
      return r && t(r) ? r.current != null ? qc({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? qc({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Rf = (e, t) => ({
  ...Ux(e),
  options: [e, t]
}), Ta = (e, t) => ({
  ...qx(e),
  options: [e, t]
}), Jc = (e, t) => ({
  ...Xx(e),
  options: [e, t]
}), _s = (e, t) => ({
  ...Kx(e),
  options: [e, t]
}), tw = (e, t) => ({
  ...Yx(e),
  options: [e, t]
}), Fs = (e, t) => ({
  ...Jx(e),
  options: [e, t]
}), Of = (e, t) => ({
  ...ew(e),
  options: [e, t]
}), Lf = {
  ...k
}, nw = Lf.useInsertionEffect, rw = nw || ((e) => e());
function Gt(e) {
  const t = k.useRef(() => {
  });
  return rw(() => {
    t.current = e;
  }), k.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var kt = typeof document < "u" ? Fo : H;
let Xc = !1, ow = 0;
const Qc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + ow++
);
function iw() {
  const [e, t] = k.useState(() => Xc ? Qc() : void 0);
  return kt(() => {
    e == null && t(Qc());
  }, []), k.useEffect(() => {
    Xc = !0;
  }, []), e;
}
const sw = Lf.useId, $f = sw || iw;
function aw() {
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
const lw = /* @__PURE__ */ k.createContext(null), cw = /* @__PURE__ */ k.createContext(null), Ra = () => {
  var e;
  return ((e = k.useContext(lw)) == null ? void 0 : e.id) || null;
}, Oa = () => k.useContext(cw);
function La(e) {
  return "data-floating-ui-" + e;
}
function ts(e) {
  const t = V(e);
  return kt(() => {
    t.current = e;
  }), t;
}
const Zc = /* @__PURE__ */ La("safe-polygon");
function ao(e, t, n) {
  return n && !As(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
}
function uw(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    dataRef: o,
    events: i,
    elements: s
  } = e, {
    enabled: a = !0,
    delay: l = 0,
    handleClose: c = null,
    mouseOnly: u = !1,
    restMs: d = 0,
    move: f = !0
  } = t, p = Oa(), m = Ra(), h = ts(c), g = ts(l), y = ts(n), x = k.useRef(), w = k.useRef(-1), v = k.useRef(), S = k.useRef(-1), C = k.useRef(!0), I = k.useRef(!1), D = k.useRef(() => {
  }), T = k.useCallback(() => {
    var j;
    const P = (j = o.current.openEvent) == null ? void 0 : j.type;
    return (P == null ? void 0 : P.includes("mouse")) && P !== "mousedown";
  }, [o]);
  k.useEffect(() => {
    if (!a)
      return;
    function j(P) {
      let {
        open: O
      } = P;
      O || (clearTimeout(w.current), clearTimeout(S.current), C.current = !0);
    }
    return i.on("openchange", j), () => {
      i.off("openchange", j);
    };
  }, [a, i]), k.useEffect(() => {
    if (!a || !h.current || !n)
      return;
    function j(O) {
      T() && r(!1, O, "hover");
    }
    const P = dn(s.floating).documentElement;
    return P.addEventListener("mouseleave", j), () => {
      P.removeEventListener("mouseleave", j);
    };
  }, [s.floating, n, r, a, h, T]);
  const $ = k.useCallback(function(j, P, O) {
    P === void 0 && (P = !0), O === void 0 && (O = "hover");
    const L = ao(g.current, "close", x.current);
    L && !v.current ? (clearTimeout(w.current), w.current = window.setTimeout(() => r(!1, j, O), L)) : P && (clearTimeout(w.current), r(!1, j, O));
  }, [g, r]), A = Gt(() => {
    D.current(), v.current = void 0;
  }), F = Gt(() => {
    if (I.current) {
      const j = dn(s.floating).body;
      j.style.pointerEvents = "", j.removeAttribute(Zc), I.current = !1;
    }
  });
  k.useEffect(() => {
    if (!a)
      return;
    function j() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function P(M) {
      if (clearTimeout(w.current), C.current = !1, u && !As(x.current) || d > 0 && !ao(g.current, "open"))
        return;
      const K = ao(g.current, "open", x.current);
      K ? w.current = window.setTimeout(() => {
        y.current || r(!0, M, "hover");
      }, K) : r(!0, M, "hover");
    }
    function O(M) {
      if (j())
        return;
      D.current();
      const K = dn(s.floating);
      if (clearTimeout(S.current), h.current && o.current.floatingContext) {
        n || clearTimeout(w.current), v.current = h.current({
          ...o.current.floatingContext,
          tree: p,
          x: M.clientX,
          y: M.clientY,
          onClose() {
            F(), A(), $(M, !0, "safe-polygon");
          }
        });
        const se = v.current;
        K.addEventListener("mousemove", se), D.current = () => {
          K.removeEventListener("mousemove", se);
        };
        return;
      }
      (x.current === "touch" ? !hr(s.floating, M.relatedTarget) : !0) && $(M);
    }
    function L(M) {
      j() || o.current.floatingContext && (h.current == null || h.current({
        ...o.current.floatingContext,
        tree: p,
        x: M.clientX,
        y: M.clientY,
        onClose() {
          F(), A(), $(M);
        }
      })(M));
    }
    if (ce(s.domReference)) {
      var z;
      const M = s.domReference;
      return n && M.addEventListener("mouseleave", L), (z = s.floating) == null || z.addEventListener("mouseleave", L), f && M.addEventListener("mousemove", P, {
        once: !0
      }), M.addEventListener("mouseenter", P), M.addEventListener("mouseleave", O), () => {
        var K;
        n && M.removeEventListener("mouseleave", L), (K = s.floating) == null || K.removeEventListener("mouseleave", L), f && M.removeEventListener("mousemove", P), M.removeEventListener("mouseenter", P), M.removeEventListener("mouseleave", O);
      };
    }
  }, [s, a, e, u, d, f, $, A, F, r, n, y, p, g, h, o]), kt(() => {
    var j;
    if (a && n && (j = h.current) != null && j.__options.blockPointerEvents && T()) {
      const O = dn(s.floating).body;
      O.setAttribute(Zc, ""), O.style.pointerEvents = "none", I.current = !0;
      const L = s.floating;
      if (ce(s.domReference) && L) {
        var P;
        const z = s.domReference, M = p == null || (P = p.nodesRef.current.find((K) => K.id === m)) == null || (P = P.context) == null ? void 0 : P.elements.floating;
        return M && (M.style.pointerEvents = ""), z.style.pointerEvents = "auto", L.style.pointerEvents = "auto", () => {
          z.style.pointerEvents = "", L.style.pointerEvents = "";
        };
      }
    }
  }, [a, n, m, s, p, h, T]), kt(() => {
    n || (x.current = void 0, A(), F());
  }, [n, A, F]), k.useEffect(() => () => {
    A(), clearTimeout(w.current), clearTimeout(S.current), F();
  }, [a, s.domReference, A, F]);
  const W = k.useMemo(() => {
    function j(P) {
      x.current = P.pointerType;
    }
    return {
      onPointerDown: j,
      onPointerEnter: j,
      onMouseMove(P) {
        const {
          nativeEvent: O
        } = P;
        function L() {
          !C.current && !y.current && r(!0, O, "hover");
        }
        u && !As(x.current) || n || d === 0 || (clearTimeout(S.current), x.current === "touch" ? L() : S.current = window.setTimeout(L, d));
      }
    };
  }, [u, r, n, y, d]), R = k.useMemo(() => ({
    onMouseEnter() {
      clearTimeout(w.current);
    },
    onMouseLeave(j) {
      $(j.nativeEvent, !1);
    }
  }), [$]);
  return k.useMemo(() => a ? {
    reference: W,
    floating: R
  } : {}, [a, W, R]);
}
const zs = () => {
}, jf = /* @__PURE__ */ k.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: zs,
  setState: zs,
  isInstantPhase: !1
}), Af = () => k.useContext(jf);
function dw(e) {
  const {
    children: t,
    delay: n,
    timeoutMs: r = 0
  } = e, [o, i] = k.useReducer((l, c) => ({
    ...l,
    ...c
  }), {
    delay: n,
    timeoutMs: r,
    initialDelay: n,
    currentId: null,
    isInstantPhase: !1
  }), s = k.useRef(null), a = k.useCallback((l) => {
    i({
      currentId: l
    });
  }, []);
  return kt(() => {
    o.currentId ? s.current === null ? s.current = o.currentId : o.isInstantPhase || i({
      isInstantPhase: !0
    }) : (o.isInstantPhase && i({
      isInstantPhase: !1
    }), s.current = null);
  }, [o.currentId, o.isInstantPhase]), /* @__PURE__ */ k.createElement(jf.Provider, {
    value: k.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, a])
  }, t);
}
function fw(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    floatingId: o
  } = e, {
    id: i
  } = t, s = i ?? o, a = Af(), {
    currentId: l,
    setCurrentId: c,
    initialDelay: u,
    setState: d,
    timeoutMs: f
  } = a;
  return kt(() => {
    l && (d({
      delay: {
        open: 1,
        close: ao(u, "close")
      }
    }), l !== s && r(!1));
  }, [s, r, d, l, u]), kt(() => {
    function p() {
      r(!1), d({
        delay: u,
        currentId: null
      });
    }
    if (l && !n && l === s) {
      if (f) {
        const m = window.setTimeout(p, f);
        return () => {
          clearTimeout(m);
        };
      }
      p();
    }
  }, [n, d, l, s, r, u, f]), kt(() => {
    c === zs || !n || c(s);
  }, [n, c, s]), a;
}
function ns(e, t) {
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
const pw = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
}, mw = {
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
function gw(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    elements: o,
    dataRef: i
  } = e, {
    enabled: s = !0,
    escapeKey: a = !0,
    outsidePress: l = !0,
    outsidePressEvent: c = "pointerdown",
    referencePress: u = !1,
    referencePressEvent: d = "pointerdown",
    ancestorScroll: f = !1,
    bubbles: p,
    capture: m
  } = t, h = Oa(), g = Gt(typeof l == "function" ? l : () => !1), y = typeof l == "function" ? g : l, x = k.useRef(!1), w = k.useRef(!1), {
    escapeKey: v,
    outsidePress: S
  } = eu(p), {
    escapeKey: C,
    outsidePress: I
  } = eu(m), D = Gt((R) => {
    var j;
    if (!n || !s || !a || R.key !== "Escape")
      return;
    const P = (j = i.current.floatingContext) == null ? void 0 : j.nodeId, O = h ? ns(h.nodesRef.current, P) : [];
    if (!v && (R.stopPropagation(), O.length > 0)) {
      let L = !0;
      if (O.forEach((z) => {
        var M;
        if ((M = z.context) != null && M.open && !z.context.dataRef.current.__escapeKeyBubbles) {
          L = !1;
          return;
        }
      }), !L)
        return;
    }
    r(!1, cx(R) ? R.nativeEvent : R, "escape-key");
  }), T = Gt((R) => {
    var j;
    const P = () => {
      var O;
      D(R), (O = Rn(R)) == null || O.removeEventListener("keydown", P);
    };
    (j = Rn(R)) == null || j.addEventListener("keydown", P);
  }), $ = Gt((R) => {
    var j;
    const P = x.current;
    x.current = !1;
    const O = w.current;
    if (w.current = !1, c === "click" && O || P || typeof y == "function" && !y(R))
      return;
    const L = Rn(R), z = "[" + La("inert") + "]", M = dn(o.floating).querySelectorAll(z);
    let K = ce(L) ? L : null;
    for (; K && !Xt(K); ) {
      const oe = Nt(K);
      if (Xt(oe) || !ce(oe))
        break;
      K = oe;
    }
    if (M.length && ce(L) && !ux(L) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !hr(L, o.floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(M).every((oe) => !hr(K, oe)))
      return;
    if (Xe(L) && W) {
      const oe = L.clientWidth > 0 && L.scrollWidth > L.clientWidth, le = L.clientHeight > 0 && L.scrollHeight > L.clientHeight;
      let pe = le && R.offsetX > L.clientWidth;
      if (le && st(L).direction === "rtl" && (pe = R.offsetX <= L.offsetWidth - L.clientWidth), pe || oe && R.offsetY > L.clientHeight)
        return;
    }
    const Z = (j = i.current.floatingContext) == null ? void 0 : j.nodeId, se = h && ns(h.nodesRef.current, Z).some((oe) => {
      var le;
      return Zi(R, (le = oe.context) == null ? void 0 : le.elements.floating);
    });
    if (Zi(R, o.floating) || Zi(R, o.domReference) || se)
      return;
    const he = h ? ns(h.nodesRef.current, Z) : [];
    if (he.length > 0) {
      let oe = !0;
      if (he.forEach((le) => {
        var pe;
        if ((pe = le.context) != null && pe.open && !le.context.dataRef.current.__outsidePressBubbles) {
          oe = !1;
          return;
        }
      }), !oe)
        return;
    }
    r(!1, R, "outside-press");
  }), A = Gt((R) => {
    var j;
    const P = () => {
      var O;
      $(R), (O = Rn(R)) == null || O.removeEventListener(c, P);
    };
    (j = Rn(R)) == null || j.addEventListener(c, P);
  });
  k.useEffect(() => {
    if (!n || !s)
      return;
    i.current.__escapeKeyBubbles = v, i.current.__outsidePressBubbles = S;
    function R(O) {
      r(!1, O, "ancestor-scroll");
    }
    const j = dn(o.floating);
    a && j.addEventListener("keydown", C ? T : D, C), y && j.addEventListener(c, I ? A : $, I);
    let P = [];
    return f && (ce(o.domReference) && (P = jt(o.domReference)), ce(o.floating) && (P = P.concat(jt(o.floating))), !ce(o.reference) && o.reference && o.reference.contextElement && (P = P.concat(jt(o.reference.contextElement)))), P = P.filter((O) => {
      var L;
      return O !== ((L = j.defaultView) == null ? void 0 : L.visualViewport);
    }), P.forEach((O) => {
      O.addEventListener("scroll", R, {
        passive: !0
      });
    }), () => {
      a && j.removeEventListener("keydown", C ? T : D, C), y && j.removeEventListener(c, I ? A : $, I), P.forEach((O) => {
        O.removeEventListener("scroll", R);
      });
    };
  }, [i, o, a, y, c, n, r, f, s, v, S, D, C, T, $, I, A]), k.useEffect(() => {
    x.current = !1;
  }, [y, c]);
  const F = k.useMemo(() => ({
    onKeyDown: D,
    [pw[d]]: (R) => {
      u && r(!1, R.nativeEvent, "reference-press");
    }
  }), [D, r, u, d]), W = k.useMemo(() => ({
    onKeyDown: D,
    onMouseDown() {
      w.current = !0;
    },
    onMouseUp() {
      w.current = !0;
    },
    [mw[c]]: () => {
      x.current = !0;
    }
  }), [D, c]);
  return k.useMemo(() => s ? {
    reference: F,
    floating: W
  } : {}, [s, F, W]);
}
function hw(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, o = $f(), i = k.useRef({}), [s] = k.useState(() => aw()), a = Ra() != null, [l, c] = k.useState(r.reference), u = Gt((p, m, h) => {
    i.current.openEvent = p ? m : void 0, s.emit("openchange", {
      open: p,
      event: m,
      reason: h,
      nested: a
    }), n == null || n(p, m, h);
  }), d = k.useMemo(() => ({
    setPositionReference: c
  }), []), f = k.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return k.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: u,
    elements: f,
    events: s,
    floatingId: o,
    refs: d
  }), [t, u, f, s, o, d]);
}
function $a(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = hw({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, o = r.elements, [i, s] = k.useState(null), [a, l] = k.useState(null), u = (o == null ? void 0 : o.reference) || i, d = k.useRef(null), f = Oa();
  kt(() => {
    u && (d.current = u);
  }, [u]);
  const p = Zx({
    ...e,
    elements: {
      ...o,
      ...a && {
        reference: a
      }
    }
  }), m = k.useCallback((w) => {
    const v = ce(w) ? {
      getBoundingClientRect: () => w.getBoundingClientRect(),
      contextElement: w
    } : w;
    l(v), p.refs.setReference(v);
  }, [p.refs]), h = k.useCallback((w) => {
    (ce(w) || w === null) && (d.current = w, s(w)), (ce(p.refs.reference.current) || p.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    w !== null && !ce(w)) && p.refs.setReference(w);
  }, [p.refs]), g = k.useMemo(() => ({
    ...p.refs,
    setReference: h,
    setPositionReference: m,
    domReference: d
  }), [p.refs, h, m]), y = k.useMemo(() => ({
    ...p.elements,
    domReference: u
  }), [p.elements, u]), x = k.useMemo(() => ({
    ...p,
    ...r,
    refs: g,
    elements: y,
    nodeId: t
  }), [p, g, y, t, r]);
  return kt(() => {
    r.dataRef.current.floatingContext = x;
    const w = f == null ? void 0 : f.nodesRef.current.find((v) => v.id === t);
    w && (w.context = x);
  }), k.useMemo(() => ({
    ...p,
    context: x,
    refs: g,
    elements: y
  }), [p, g, y, x]);
}
function bw(e, t) {
  t === void 0 && (t = {});
  const {
    open: n,
    onOpenChange: r,
    events: o,
    dataRef: i,
    elements: s
  } = e, {
    enabled: a = !0,
    visibleOnly: l = !0
  } = t, c = k.useRef(!1), u = k.useRef(), d = k.useRef(!0);
  k.useEffect(() => {
    if (!a)
      return;
    const p = ze(s.domReference);
    function m() {
      !n && Xe(s.domReference) && s.domReference === Vc(dn(s.domReference)) && (c.current = !0);
    }
    function h() {
      d.current = !0;
    }
    return p.addEventListener("blur", m), p.addEventListener("keydown", h, !0), () => {
      p.removeEventListener("blur", m), p.removeEventListener("keydown", h, !0);
    };
  }, [s.domReference, n, a]), k.useEffect(() => {
    if (!a)
      return;
    function p(m) {
      let {
        reason: h
      } = m;
      (h === "reference-press" || h === "escape-key") && (c.current = !0);
    }
    return o.on("openchange", p), () => {
      o.off("openchange", p);
    };
  }, [o, a]), k.useEffect(() => () => {
    clearTimeout(u.current);
  }, []);
  const f = k.useMemo(() => ({
    onPointerDown(p) {
      ix(p.nativeEvent) || (d.current = !1);
    },
    onMouseLeave() {
      c.current = !1;
    },
    onFocus(p) {
      if (c.current)
        return;
      const m = Rn(p.nativeEvent);
      if (l && ce(m))
        try {
          if (sx() && ax())
            throw Error();
          if (!m.matches(":focus-visible"))
            return;
        } catch {
          if (!d.current && !fx(m))
            return;
        }
      r(!0, p.nativeEvent, "focus");
    },
    onBlur(p) {
      c.current = !1;
      const m = p.relatedTarget, h = p.nativeEvent, g = ce(m) && m.hasAttribute(La("focus-guard")) && m.getAttribute("data-type") === "outside";
      u.current = window.setTimeout(() => {
        var y;
        const x = Vc(s.domReference ? s.domReference.ownerDocument : document);
        !m && x === s.domReference || hr((y = i.current.floatingContext) == null ? void 0 : y.refs.floating.current, x) || hr(s.domReference, x) || g || r(!1, h, "focus");
      });
    }
  }), [i, s.domReference, r, l]);
  return k.useMemo(() => a ? {
    reference: f
  } : {}, [a, f]);
}
const tu = "active", nu = "selected";
function rs(e, t, n) {
  const r = /* @__PURE__ */ new Map(), o = n === "item";
  let i = e;
  if (o && e) {
    const {
      [tu]: s,
      [nu]: a,
      ...l
    } = e;
    i = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1
    },
    ...i,
    ...t.map((s) => {
      const a = s ? s[n] : null;
      return typeof a == "function" ? e ? a(e) : null : a;
    }).concat(e).reduce((s, a) => (a && Object.entries(a).forEach((l) => {
      let [c, u] = l;
      if (!(o && [tu, nu].includes(c)))
        if (c.indexOf("on") === 0) {
          if (r.has(c) || r.set(c, []), typeof u == "function") {
            var d;
            (d = r.get(c)) == null || d.push(u), s[c] = function() {
              for (var f, p = arguments.length, m = new Array(p), h = 0; h < p; h++)
                m[h] = arguments[h];
              return (f = r.get(c)) == null ? void 0 : f.map((g) => g(...m)).find((g) => g !== void 0);
            };
          }
        } else
          s[c] = u;
    }), s), {})
  };
}
function yw(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => a == null ? void 0 : a.reference), n = e.map((a) => a == null ? void 0 : a.floating), r = e.map((a) => a == null ? void 0 : a.item), o = k.useCallback(
    (a) => rs(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = k.useCallback(
    (a) => rs(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), s = k.useCallback(
    (a) => rs(a, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return k.useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: i,
    getItemProps: s
  }), [o, i, s]);
}
const vw = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
function xw(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    open: r,
    floatingId: o
  } = e, {
    enabled: i = !0,
    role: s = "dialog"
  } = t, a = (n = vw.get(s)) != null ? n : s, l = $f(), u = Ra() != null, d = k.useMemo(() => a === "tooltip" || s === "label" ? {
    ["aria-" + (s === "label" ? "labelledby" : "describedby")]: r ? o : void 0
  } : {
    "aria-expanded": r ? "true" : "false",
    "aria-haspopup": a === "alertdialog" ? "dialog" : a,
    "aria-controls": r ? o : void 0,
    ...a === "listbox" && {
      role: "combobox"
    },
    ...a === "menu" && {
      id: l
    },
    ...a === "menu" && u && {
      role: "menuitem"
    },
    ...s === "select" && {
      "aria-autocomplete": "none"
    },
    ...s === "combobox" && {
      "aria-autocomplete": "list"
    }
  }, [a, o, u, r, l, s]), f = k.useMemo(() => {
    const m = {
      id: o,
      ...a && {
        role: a
      }
    };
    return a === "tooltip" || s === "label" ? m : {
      ...m,
      ...a === "menu" && {
        "aria-labelledby": l
      }
    };
  }, [a, o, l, s]), p = k.useCallback((m) => {
    let {
      active: h,
      selected: g
    } = m;
    const y = {
      role: "option",
      ...h && {
        id: o + "-option"
      }
    };
    switch (s) {
      case "select":
        return {
          ...y,
          "aria-selected": h && g
        };
      case "combobox":
        return {
          ...y,
          ...h && {
            "aria-selected": !0
          }
        };
    }
    return {};
  }, [o, s]);
  return k.useMemo(() => i ? {
    reference: d,
    floating: f,
    item: p
  } : {}, [i, d, f, p]);
}
function Nf(e, t) {
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
const ww = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function Sw({
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
    width: t,
    height: t,
    transform: "rotate(45deg)",
    position: "absolute",
    [ww[l]]: r
  }, d = -t / 2;
  return l === "left" ? {
    ...u,
    ...ru(c, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : l === "right" ? {
    ...u,
    ...ru(c, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : l === "top" ? {
    ...u,
    ...ou(c, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : l === "bottom" ? {
    ...u,
    ...ou(c, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const ja = te(
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
    const { dir: d } = Mr();
    return i ? /* @__PURE__ */ b.jsx(
      "div",
      {
        ...c,
        ref: u,
        style: {
          ...l,
          ...Sw({
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
ja.displayName = "@mantine/core/FloatingArrow";
const [Cw, Mf] = zt(
  "Popover component was not found in the tree"
);
function Aa({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = Cy(t), o = Ne(r, e == null ? void 0 : e.ref);
  return nn(e) ? yn(e, { [n]: o }) : e;
}
function _f(e) {
  return /* @__PURE__ */ b.jsx(xa, { tabIndex: -1, "data-autofocus": !0, ...e });
}
Aa.displayName = "@mantine/core/FocusTrap";
_f.displayName = "@mantine/core/FocusTrapInitialFocus";
Aa.InitialFocus = _f;
function Dw(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const Iw = {}, Ff = te((e, t) => {
  const { children: n, target: r, ...o } = _("Portal", Iw, e), [i, s] = q(!1), a = V(null);
  return Ar(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : Dw(o), Ud(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : zg(/* @__PURE__ */ b.jsx(b.Fragment, { children: n }), a.current);
});
Ff.displayName = "@mantine/core/Portal";
function Yo({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ b.jsx(Ff, { ...n, children: t }) : /* @__PURE__ */ b.jsx(b.Fragment, { children: t });
}
Yo.displayName = "@mantine/core/OptionalPortal";
const or = (e) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${E(e === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), Zr = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${E(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${E(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${E(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${E(-30)}` },
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
    out: { opacity: 0, transform: `translateY(${E(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${E(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${E(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${E(20)}) rotate(5deg)` },
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
}, iu = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Pw({
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
    ...Zr[e][iu[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[iu[t]]
  };
}
function kw({
  duration: e,
  exitDuration: t,
  timingFunction: n,
  mounted: r,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a,
  enterDelay: l,
  exitDelay: c
}) {
  const u = We(), d = Kd(), f = u.respectReducedMotion ? d : !1, [p, m] = q(f ? 0 : e), [h, g] = q(r ? "entered" : "exited"), y = V(-1), x = V(-1), w = V(-1), v = (C) => {
    const I = C ? o : i, D = C ? s : a;
    window.clearTimeout(y.current);
    const T = f ? 0 : C ? e : t;
    m(T), T === 0 ? (typeof I == "function" && I(), typeof D == "function" && D(), g(C ? "entered" : "exited")) : w.current = requestAnimationFrame(() => {
      oa.flushSync(() => {
        g(C ? "pre-entering" : "pre-exiting");
      }), w.current = requestAnimationFrame(() => {
        typeof I == "function" && I(), g(C ? "entering" : "exiting"), y.current = window.setTimeout(() => {
          typeof D == "function" && D(), g(C ? "entered" : "exited");
        }, T);
      });
    });
  }, S = (C) => {
    if (window.clearTimeout(x.current), typeof (C ? l : c) != "number") {
      v(C);
      return;
    }
    x.current = window.setTimeout(
      () => {
        v(C);
      },
      C ? l : c
    );
  };
  return Jt(() => {
    S(r);
  }, [r]), H(
    () => () => {
      window.clearTimeout(y.current), cancelAnimationFrame(w.current);
    },
    []
  ), {
    transitionDuration: p,
    transitionStatus: h,
    transitionTimingFunction: n || "ease"
  };
}
function Gn({
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
  onExited: u,
  enterDelay: d,
  exitDelay: f
}) {
  const { transitionDuration: p, transitionStatus: m, transitionTimingFunction: h } = kw({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: a,
    onEntered: l,
    onEnter: c,
    onExited: u,
    enterDelay: d,
    exitDelay: f
  });
  return p === 0 ? o ? /* @__PURE__ */ b.jsx(b.Fragment, { children: i({}) }) : e ? i({ display: "none" }) : null : m === "exited" ? e ? i({ display: "none" }) : null : /* @__PURE__ */ b.jsx(b.Fragment, { children: i(
    Pw({
      transition: t,
      duration: p,
      state: m,
      timingFunction: h
    })
  ) });
}
Gn.displayName = "@mantine/core/Transition";
var zf = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Ew = {}, Na = U((e, t) => {
  var g, y, x, w;
  const n = _("PopoverDropdown", Ew, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: l,
    classNames: c,
    styles: u,
    ...d
  } = n, f = Mf(), p = hy({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, h = Ne(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ b.jsx(Yo, { ...f.portalProps, withinPortal: f.withinPortal, children: /* @__PURE__ */ b.jsx(
    Gn,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((g = f.transitionProps) == null ? void 0 : g.transition) || "fade",
      duration: ((y = f.transitionProps) == null ? void 0 : y.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((x = f.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? f.transitionProps.exitDuration : (w = f.transitionProps) == null ? void 0 : w.duration,
      children: (v) => /* @__PURE__ */ b.jsx(Aa, { active: f.trapFocus, children: /* @__PURE__ */ b.jsxs(
        B,
        {
          ...m,
          ...d,
          variant: l,
          ref: h,
          onKeyDownCapture: ly(f.onClose, {
            active: f.closeOnEscape,
            onTrigger: p,
            onKeyDown: a
          }),
          "data-position": f.placement,
          "data-fixed": f.floatingStrategy === "fixed" || void 0,
          ...f.getStyles("dropdown", {
            className: r,
            props: n,
            classNames: c,
            styles: u,
            style: [
              {
                ...v,
                zIndex: f.zIndex,
                top: f.y ?? 0,
                left: f.x ?? 0,
                width: f.width === "target" ? void 0 : E(f.width)
              },
              o
            ]
          }),
          children: [
            s,
            /* @__PURE__ */ b.jsx(
              ja,
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
          ]
        }
      ) })
    }
  ) });
});
Na.classes = zf;
Na.displayName = "@mantine/core/PopoverDropdown";
const Tw = {
  refProp: "ref",
  popupType: "dialog"
}, Bf = U((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = _(
    "PopoverTarget",
    Tw,
    e
  );
  if (!nn(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Mf(), l = Ne(a.reference, n.ref, t), c = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return yn(n, {
    ...s,
    ...c,
    ...a.targetProps,
    className: at(a.targetProps.className, s.className, n.props.className),
    [r]: l,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
Bf.displayName = "@mantine/core/PopoverTarget";
function Vf({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = q(0);
  H(() => {
    if (t.refs.reference.current && t.refs.floating.current)
      return Hx(
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
  ]), Jt(() => {
    t.update();
  }, r), Jt(() => {
    i((s) => s + 1);
  }, [e]);
}
function Rw(e) {
  if (e === void 0)
    return { shift: !0, flip: !0 };
  const t = { ...e };
  return e.shift === void 0 && (t.shift = !0), e.flip === void 0 && (t.flip = !0), t;
}
function Ow(e, t) {
  const n = Rw(e.middlewares), r = [Rf(e.offset)];
  return n.shift && r.push(
    Ta(
      typeof n.shift == "boolean" ? { limiter: Jc(), padding: 5 } : { limiter: Jc(), padding: 5, ...n.shift }
    )
  ), n.flip && r.push(
    typeof n.flip == "boolean" ? _s() : _s(n.flip)
  ), n.inline && r.push(
    typeof n.inline == "boolean" ? Fs() : Fs(n.inline)
  ), r.push(Of({ element: e.arrowRef, padding: e.arrowOffset })), (n.size || e.width === "target") && r.push(
    tw({
      ...typeof n.size == "boolean" ? {} : n.size,
      apply({ rects: o, availableWidth: i, availableHeight: s }) {
        var c;
        const l = ((c = t().refs.floating.current) == null ? void 0 : c.style) ?? {};
        n.size && Object.assign(l, {
          maxWidth: `${i}px`,
          maxHeight: `${s}px`
        }), e.width === "target" && Object.assign(l, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), r;
}
function Lw(e) {
  const [t, n] = At({
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
  }, i = $a({
    strategy: e.strategy,
    placement: e.position,
    middleware: Ow(e, () => i)
  });
  return Vf({
    opened: e.opened,
    position: e.position,
    positionDependencies: e.positionDependencies || [],
    floating: i
  }), Jt(() => {
    var s;
    (s = e.onPositionChange) == null || s.call(e, i.placement);
  }, [i.placement]), Jt(() => {
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
const $w = {
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
  zIndex: jr("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, jw = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : Le(t),
    "--popover-shadow": uy(n)
  }
});
function St(e) {
  var be, Ot, Pe, ye, pt, Wt;
  const t = _("Popover", $w, e), {
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
    arrowPosition: h,
    unstyled: g,
    classNames: y,
    styles: x,
    closeOnClickOutside: w,
    withinPortal: v,
    portalProps: S,
    closeOnEscape: C,
    clickOutsideEvents: I,
    trapFocus: D,
    onClose: T,
    onOpen: $,
    onChange: A,
    zIndex: F,
    radius: W,
    shadow: R,
    id: j,
    defaultOpened: P,
    __staticSelector: O,
    withRoles: L,
    disabled: z,
    returnFocus: M,
    variant: K,
    keepMounted: Z,
    vars: se,
    floatingStrategy: he,
    ...oe
  } = t, le = Y({
    name: O,
    props: t,
    classes: zf,
    classNames: y,
    styles: x,
    unstyled: g,
    rootSelector: "dropdown",
    vars: se,
    varsResolver: jw
  }), pe = V(null), [$e, ae] = q(null), [Se, Ct] = q(null), { dir: me } = Mr(), ge = Rt(j), fe = Lw({
    middlewares: u,
    width: c,
    position: Nf(me, r),
    offset: typeof o == "number" ? o + (d ? f / 2 : 0) : o,
    arrowRef: pe,
    arrowOffset: p,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: P,
    onChange: A,
    onOpen: $,
    onClose: T,
    strategy: he
  });
  fy(() => w && fe.onClose(), I, [
    $e,
    Se
  ]);
  const ft = ee(
    (Me) => {
      ae(Me), fe.floating.refs.setReference(Me);
    },
    [fe.floating.refs.setReference]
  ), Dt = ee(
    (Me) => {
      Ct(Me), fe.floating.refs.setFloating(Me);
    },
    [fe.floating.refs.setFloating]
  );
  return /* @__PURE__ */ b.jsx(
    Cw,
    {
      value: {
        returnFocus: M,
        disabled: z,
        controlled: fe.controlled,
        reference: ft,
        floating: Dt,
        x: fe.floating.x,
        y: fe.floating.y,
        arrowX: (Pe = (Ot = (be = fe.floating) == null ? void 0 : be.middlewareData) == null ? void 0 : Ot.arrow) == null ? void 0 : Pe.x,
        arrowY: (Wt = (pt = (ye = fe.floating) == null ? void 0 : ye.middlewareData) == null ? void 0 : pt.arrow) == null ? void 0 : Wt.y,
        opened: fe.opened,
        arrowRef: pe,
        transitionProps: l,
        width: c,
        withArrow: d,
        arrowSize: f,
        arrowOffset: p,
        arrowRadius: m,
        arrowPosition: h,
        placement: fe.floating.placement,
        trapFocus: D,
        withinPortal: v,
        portalProps: S,
        zIndex: F,
        radius: W,
        shadow: R,
        closeOnEscape: C,
        onClose: fe.onClose,
        onToggle: fe.onToggle,
        getTargetId: () => `${ge}-target`,
        getDropdownId: () => `${ge}-dropdown`,
        withRoles: L,
        targetProps: oe,
        __staticSelector: O,
        classNames: y,
        styles: x,
        unstyled: g,
        variant: K,
        keepMounted: Z,
        getStyles: le,
        floatingStrategy: he
      },
      children: n
    }
  );
}
St.Target = Bf;
St.Dropdown = Na;
St.displayName = "@mantine/core/Popover";
St.extend = (e) => e;
var ht = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const Aw = te(({ className: e, ...t }, n) => /* @__PURE__ */ b.jsxs(B, { component: "span", className: at(ht.barsLoader, e), ...t, ref: n, children: [
  /* @__PURE__ */ b.jsx("span", { className: ht.bar }),
  /* @__PURE__ */ b.jsx("span", { className: ht.bar }),
  /* @__PURE__ */ b.jsx("span", { className: ht.bar })
] })), Nw = te(({ className: e, ...t }, n) => /* @__PURE__ */ b.jsxs(B, { component: "span", className: at(ht.dotsLoader, e), ...t, ref: n, children: [
  /* @__PURE__ */ b.jsx("span", { className: ht.dot }),
  /* @__PURE__ */ b.jsx("span", { className: ht.dot }),
  /* @__PURE__ */ b.jsx("span", { className: ht.dot })
] })), Mw = te(({ className: e, ...t }, n) => /* @__PURE__ */ b.jsx(B, { component: "span", className: at(ht.ovalLoader, e), ...t, ref: n })), Wf = {
  bars: Aw,
  oval: Mw,
  dots: Nw
}, _w = {
  loaders: Wf,
  type: "oval"
}, Fw = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": de(t, "loader-size"),
    "--loader-color": n ? it(n, e) : void 0
  }
}), Hn = U((e, t) => {
  const n = _("Loader", _w, e), {
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
    ...h
  } = n, g = Y({
    name: "Loader",
    props: n,
    classes: ht,
    className: a,
    style: l,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: Fw
  });
  return m ? /* @__PURE__ */ b.jsx(B, { ...g("root"), ref: t, ...h, children: m }) : /* @__PURE__ */ b.jsx(
    B,
    {
      ...g("root"),
      ref: t,
      component: f[i],
      variant: p,
      size: r,
      ...h
    }
  );
});
Hn.defaultLoaders = Wf;
Hn.classes = ht;
Hn.displayName = "@mantine/core/Loader";
var Jo = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const su = {
  orientation: "horizontal"
}, zw = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": E(t) }
}), Ma = U((e, t) => {
  const n = _("ActionIconGroup", su, e), {
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: l,
    vars: c,
    borderWidth: u,
    variant: d,
    mod: f,
    ...p
  } = _("ActionIconGroup", su, e), m = Y({
    name: "ActionIconGroup",
    props: n,
    classes: Jo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: zw,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...m("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": l }, f],
      role: "group",
      ...p
    }
  );
});
Ma.classes = Jo;
Ma.displayName = "@mantine/core/ActionIconGroup";
const Bw = {}, Vw = (e, { size: t, radius: n, variant: r, gradient: o, color: i, autoContrast: s }) => {
  const a = e.variantColorResolver({
    color: i || e.primaryColor,
    theme: e,
    gradient: o,
    variant: r || "filled",
    autoContrast: s
  });
  return {
    root: {
      "--ai-size": de(t, "ai-size"),
      "--ai-radius": n === void 0 ? void 0 : Le(n),
      "--ai-bg": i || r ? a.background : void 0,
      "--ai-hover": i || r ? a.hover : void 0,
      "--ai-hover-color": i || r ? a.hoverColor : void 0,
      "--ai-color": a.color,
      "--ai-bd": i || r ? a.border : void 0
    }
  };
}, br = Bt((e, t) => {
  const n = _("ActionIcon", Bw, e), {
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
    gradient: h,
    vars: g,
    children: y,
    disabled: x,
    "data-disabled": w,
    autoContrast: v,
    mod: S,
    ...C
  } = n, I = Y({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: l,
    classes: Jo,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: g,
    varsResolver: Vw
  });
  return /* @__PURE__ */ b.jsxs(
    rn,
    {
      ...I("root", { active: !x && !c && !w }),
      ...C,
      unstyled: o,
      variant: i,
      size: d,
      disabled: x || c,
      ref: t,
      mod: [{ loading: c, disabled: x || w }, S],
      children: [
        /* @__PURE__ */ b.jsx(Gn, { mounted: !!c, transition: "slide-down", duration: 150, children: (D) => /* @__PURE__ */ b.jsx(B, { component: "span", ...I("loader", { style: D }), "aria-hidden": !0, children: /* @__PURE__ */ b.jsx(Hn, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ b.jsx(B, { component: "span", mod: { loading: c }, ...I("icon"), children: y })
      ]
    }
  );
});
br.classes = Jo;
br.displayName = "@mantine/core/ActionIcon";
br.Group = Ma;
const Gf = te(
  ({ size: e = "var(--cb-icon-size, 70%)", style: t, ...n }, r) => /* @__PURE__ */ b.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...t, width: e, height: e },
      ref: r,
      ...n,
      children: /* @__PURE__ */ b.jsx(
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
const Ww = {
  variant: "subtle"
}, Gw = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": de(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : Le(n),
    "--cb-icon-size": E(r)
  }
}), zr = Bt((e, t) => {
  const n = _("CloseButton", Ww, e), {
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
    icon: h,
    mod: g,
    ...y
  } = n, x = Y({
    name: "CloseButton",
    props: n,
    className: a,
    style: c,
    classes: Hf,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: Gw
  });
  return /* @__PURE__ */ b.jsxs(
    rn,
    {
      ref: t,
      ...y,
      unstyled: d,
      variant: m,
      disabled: p,
      mod: [{ disabled: p || f }, g],
      ...x("root", { variant: m, active: !p && !f }),
      children: [
        h || /* @__PURE__ */ b.jsx(Gf, {}),
        o
      ]
    }
  );
});
zr.classes = Hf;
zr.displayName = "@mantine/core/CloseButton";
function Hw(e) {
  return _g.toArray(e).filter(Boolean);
}
var Uf = { root: "m_4081bf90" };
const Uw = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, qw = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": ho(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), jn = U((e, t) => {
  const n = _("Group", Uw, e), {
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
    vars: h,
    variant: g,
    __size: y,
    mod: x,
    ...w
  } = n, v = Hw(l), S = v.length, C = ho(c ?? "md"), D = { childWidth: `calc(${100 / S}% - (${C} - ${C} / ${S}))` }, T = Y({
    name: "Group",
    props: n,
    stylesCtx: D,
    className: o,
    style: i,
    classes: Uf,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: h,
    varsResolver: qw
  });
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...T("root"),
      ref: t,
      variant: g,
      mod: [{ grow: p }, x],
      size: y,
      ...w,
      children: v
    }
  );
});
jn.classes = Uf;
jn.displayName = "@mantine/core/Group";
var qf = { root: "m_9814e45f" };
const Kw = {
  zIndex: jr("modal")
}, Yw = (e, { gradient: t, color: n, backgroundOpacity: r, blur: o, radius: i, zIndex: s }) => ({
  root: {
    "--overlay-bg": t || (n !== void 0 || r !== void 0) && It(n || "#000", r ?? 0.6) || void 0,
    "--overlay-filter": o ? `blur(${E(o)})` : void 0,
    "--overlay-radius": i === void 0 ? void 0 : Le(i),
    "--overlay-z-index": s == null ? void 0 : s.toString()
  }
}), Co = Bt((e, t) => {
  const n = _("Overlay", Kw, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    fixed: c,
    center: u,
    children: d,
    radius: f,
    zIndex: p,
    gradient: m,
    blur: h,
    color: g,
    backgroundOpacity: y,
    mod: x,
    ...w
  } = n, v = Y({
    name: "Overlay",
    props: n,
    classes: qf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Yw
  });
  return /* @__PURE__ */ b.jsx(B, { ref: t, ...v("root"), mod: [{ center: u, fixed: c }, x], ...w, children: d });
});
Co.classes = qf;
Co.displayName = "@mantine/core/Overlay";
const [Jw, Un] = Vo({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var ct = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const au = {}, Xw = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${E(2)})`
  }
}), Xo = U((e, t) => {
  const n = _("InputDescription", au, e), {
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
  } = _("InputDescription", au, n), m = Un(), h = Y({
    name: ["InputWrapper", u],
    props: n,
    classes: ct,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: l,
    varsResolver: Xw
  }), g = d && (m == null ? void 0 : m.getStyles) || h;
  return /* @__PURE__ */ b.jsx(
    B,
    {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...g("description", m != null && m.getStyles ? { className: o, style: i } : void 0),
      ...p
    }
  );
});
Xo.classes = ct;
Xo.displayName = "@mantine/core/InputDescription";
const Qw = {}, Zw = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${E(2)})`
  }
}), Qo = U((e, t) => {
  const n = _("InputError", Qw, e), {
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
  } = n, m = Y({
    name: ["InputWrapper", u],
    props: n,
    classes: ct,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "error",
    vars: l,
    varsResolver: Zw
  }), h = Un(), g = d && (h == null ? void 0 : h.getStyles) || m;
  return /* @__PURE__ */ b.jsx(
    B,
    {
      component: "p",
      ref: t,
      variant: f,
      size: c,
      ...g("error", h != null && h.getStyles ? { className: o, style: i } : void 0),
      ...p
    }
  );
});
Qo.classes = ct;
Qo.displayName = "@mantine/core/InputError";
const lu = {
  labelElement: "label"
}, eS = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ke(t),
    "--input-asterisk-color": void 0
  }
}), Zo = U((e, t) => {
  const n = _("InputLabel", lu, e), {
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
    __staticSelector: h,
    variant: g,
    mod: y,
    ...x
  } = _("InputLabel", lu, n), w = Y({
    name: ["InputWrapper", h],
    props: n,
    classes: ct,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: l,
    varsResolver: eS
  }), v = Un(), S = (v == null ? void 0 : v.getStyles) || w;
  return /* @__PURE__ */ b.jsxs(
    B,
    {
      ...S("label", v != null && v.getStyles ? { className: o, style: i } : void 0),
      component: c,
      variant: g,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
      mod: [{ required: d }, y],
      onMouseDown: (C) => {
        p == null || p(C), !C.defaultPrevented && C.detail > 1 && C.preventDefault();
      },
      ...x,
      children: [
        m,
        d && /* @__PURE__ */ b.jsx("span", { ...S("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
Zo.classes = ct;
Zo.displayName = "@mantine/core/InputLabel";
const cu = {}, _a = U((e, t) => {
  const n = _("InputPlaceholder", cu, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    __staticSelector: c,
    variant: u,
    error: d,
    mod: f,
    ...p
  } = _("InputPlaceholder", cu, n), m = Y({
    name: ["InputPlaceholder", c],
    props: n,
    classes: ct,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ b.jsx(
    B,
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
_a.classes = ct;
_a.displayName = "@mantine/core/InputPlaceholder";
function tS(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((l) => l === "input"), o = e.slice(0, r), i = e.slice(r + 1), s = t && o.includes("description") || n && o.includes("error");
  return { offsetBottom: t && i.includes("description") || n && i.includes("error"), offsetTop: s };
}
const nS = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, rS = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ke(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${E(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ke(t)} - ${E(2)})`
  }
}), Fa = U((e, t) => {
  const n = _("InputWrapper", nS, e), {
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
    error: h,
    description: g,
    labelProps: y,
    descriptionProps: x,
    errorProps: w,
    labelElement: v,
    children: S,
    withAsterisk: C,
    id: I,
    required: D,
    __stylesApiProps: T,
    mod: $,
    ...A
  } = n, F = Y({
    name: ["InputWrapper", d],
    props: T || n,
    classes: ct,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: rS
  }), W = {
    size: c,
    variant: u,
    __staticSelector: d
  }, R = Rt(I), j = typeof C == "boolean" ? C : D, P = (w == null ? void 0 : w.id) || `${R}-error`, O = (x == null ? void 0 : x.id) || `${R}-description`, L = R, z = !!h && typeof h != "boolean", M = !!g, K = `${z ? P : ""} ${M ? O : ""}`, Z = K.trim().length > 0 ? K.trim() : void 0, se = (y == null ? void 0 : y.id) || `${R}-label`, he = m && /* @__PURE__ */ b.jsx(
    Zo,
    {
      labelElement: v,
      id: se,
      htmlFor: L,
      required: j,
      ...W,
      ...y,
      children: m
    },
    "label"
  ), oe = M && /* @__PURE__ */ b.jsx(
    Xo,
    {
      ...x,
      ...W,
      size: (x == null ? void 0 : x.size) || W.size,
      id: (x == null ? void 0 : x.id) || O,
      children: g
    },
    "description"
  ), le = /* @__PURE__ */ b.jsx(Dd, { children: f(S) }, "input"), pe = z && /* @__PURE__ */ Cs(
    Qo,
    {
      ...w,
      ...W,
      size: (w == null ? void 0 : w.size) || W.size,
      key: "error",
      id: (w == null ? void 0 : w.id) || P
    },
    h
  ), $e = p.map((ae) => {
    switch (ae) {
      case "label":
        return he;
      case "input":
        return le;
      case "description":
        return oe;
      case "error":
        return pe;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ b.jsx(
    Jw,
    {
      value: {
        getStyles: F,
        describedBy: Z,
        inputId: L,
        labelId: se,
        ...tS(p, { hasDescription: M, hasError: z })
      },
      children: /* @__PURE__ */ b.jsx(
        B,
        {
          ref: t,
          variant: u,
          size: c,
          mod: [{ error: !!h }, $],
          ...F("root"),
          ...A,
          children: $e
        }
      )
    }
  );
});
Fa.classes = ct;
Fa.displayName = "@mantine/core/InputWrapper";
const oS = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, iS = (e, t, n) => ({
  wrapper: {
    "--input-margin-top": n.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": n.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": de(t.size, "input-height"),
    "--input-fz": Ke(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : Le(t.radius),
    "--input-left-section-width": t.leftSectionWidth !== void 0 ? E(t.leftSectionWidth) : void 0,
    "--input-right-section-width": t.rightSectionWidth !== void 0 ? E(t.rightSectionWidth) : void 0,
    "--input-padding-y": t.multiline ? de(t.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": t.leftSectionPointerEvents,
    "--input-right-section-pointer-events": t.rightSectionPointerEvents
  }
}), Oe = Bt((e, t) => {
  const n = _("Input", oS, e), {
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
    leftSection: h,
    leftSectionProps: g,
    leftSectionWidth: y,
    rightSection: x,
    rightSectionProps: w,
    rightSectionWidth: v,
    rightSectionPointerEvents: S,
    leftSectionPointerEvents: C,
    variant: I,
    vars: D,
    pointer: T,
    multiline: $,
    radius: A,
    id: F,
    withAria: W,
    withErrorStyles: R,
    mod: j,
    inputSize: P,
    ...O
  } = n, { styleProps: L, rest: z } = Nr(O), M = Un(), K = { offsetBottom: M == null ? void 0 : M.offsetBottom, offsetTop: M == null ? void 0 : M.offsetTop }, Z = Y({
    name: ["Input", c],
    props: u || n,
    classes: ct,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    stylesCtx: K,
    rootSelector: "wrapper",
    vars: D,
    varsResolver: iS
  }), se = W ? {
    required: l,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": M == null ? void 0 : M.describedBy,
    id: (M == null ? void 0 : M.inputId) || F
  } : {};
  return /* @__PURE__ */ b.jsxs(
    B,
    {
      ...Z("wrapper"),
      ...L,
      ...f,
      mod: [
        {
          error: !!p && R,
          pointer: T,
          disabled: m,
          multiline: $,
          "data-with-right-section": !!x,
          "data-with-left-section": !!h
        },
        j
      ],
      variant: I,
      size: d,
      children: [
        h && /* @__PURE__ */ b.jsx(
          "div",
          {
            ...g,
            "data-position": "left",
            ...Z("section", {
              className: g == null ? void 0 : g.className,
              style: g == null ? void 0 : g.style
            }),
            children: h
          }
        ),
        /* @__PURE__ */ b.jsx(
          B,
          {
            component: "input",
            ...z,
            ...se,
            ref: t,
            required: l,
            mod: { disabled: m, error: !!p && R },
            variant: I,
            __size: P,
            ...Z("input")
          }
        ),
        x && /* @__PURE__ */ b.jsx(
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
Oe.classes = ct;
Oe.Wrapper = Fa;
Oe.Label = Zo;
Oe.Error = Qo;
Oe.Description = Xo;
Oe.Placeholder = _a;
Oe.displayName = "@mantine/core/Input";
function sS(e, t, n) {
  const r = _(e, t, n), {
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
    labelProps: h,
    descriptionProps: g,
    wrapperProps: y,
    id: x,
    size: w,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: I,
    variant: D,
    vars: T,
    mod: $,
    ...A
  } = r, { styleProps: F, rest: W } = Nr(A), R = {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: l,
    className: u,
    __staticSelector: f,
    __stylesApiProps: p || r,
    errorProps: m,
    labelProps: h,
    descriptionProps: g,
    unstyled: d,
    styles: c,
    size: w,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: I,
    variant: D,
    id: x,
    mod: $,
    ...y
  };
  return {
    ...W,
    classNames: l,
    styles: c,
    unstyled: d,
    wrapperProps: { ...R, ...F },
    inputProps: {
      required: a,
      classNames: l,
      styles: c,
      unstyled: d,
      size: w,
      __staticSelector: f,
      __stylesApiProps: p || r,
      error: s,
      variant: D,
      id: x
    }
  };
}
const aS = {
  __staticSelector: "InputBase",
  withAria: !0
}, on = Bt((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = sS("InputBase", aS, e);
  return /* @__PURE__ */ b.jsx(Oe.Wrapper, { ...r, children: /* @__PURE__ */ b.jsx(Oe, { ...n, ...o, ref: t }) });
});
on.classes = { ...Oe.classes, ...Oe.Wrapper.classes };
on.displayName = "@mantine/core/InputBase";
const [lS, za] = zt(
  "Accordion component was not found in the tree"
);
function Ba({ style: e, size: t = 16, ...n }) {
  return /* @__PURE__ */ b.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: E(t), height: E(t), display: "block" },
      ...n,
      children: /* @__PURE__ */ b.jsx(
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
Ba.displayName = "@mantine/core/AccordionChevron";
const [cS, Kf] = zt("Accordion.Item component was not found in the tree");
var Br = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const uS = {}, Va = U((e, t) => {
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
    mod: p,
    ...m
  } = _("AccordionControl", uS, e), { value: h } = Kf(), g = za(), y = g.isItemActive(h), x = typeof g.order == "number", w = `h${g.order}`, v = /* @__PURE__ */ b.jsxs(
    rn,
    {
      ...m,
      ...g.getStyles("control", { className: r, classNames: n, style: o, styles: i, variant: g.variant }),
      unstyled: g.unstyled,
      mod: [
        "accordion-control",
        { active: y, "chevron-position": g.chevronPosition, disabled: f },
        p
      ],
      ref: t,
      onClick: (S) => {
        c == null || c(S), g.onChange(h);
      },
      type: "button",
      disabled: f,
      "aria-expanded": y,
      "aria-controls": g.getRegionId(h),
      id: g.getControlId(h),
      onKeyDown: zd({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: g.loop,
        orientation: "vertical",
        onKeyDown: u
      }),
      children: [
        /* @__PURE__ */ b.jsx(
          B,
          {
            component: "span",
            mod: { rotate: !g.disableChevronRotation && y, position: g.chevronPosition },
            ...g.getStyles("chevron", { classNames: n, styles: i }),
            children: a || g.chevron
          }
        ),
        /* @__PURE__ */ b.jsx("span", { ...g.getStyles("label", { classNames: n, styles: i }), children: d }),
        l && /* @__PURE__ */ b.jsx(
          B,
          {
            component: "span",
            mod: { "chevron-position": g.chevronPosition },
            ...g.getStyles("icon", { classNames: n, styles: i }),
            children: l
          }
        )
      ]
    }
  );
  return x ? /* @__PURE__ */ b.jsx(w, { ...g.getStyles("itemTitle", { classNames: n, styles: i }), children: v }) : v;
});
Va.displayName = "@mantine/core/AccordionControl";
Va.classes = Br;
const dS = {}, Wa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, mod: l, ...c } = _(
    "AccordionItem",
    dS,
    e
  ), u = za();
  return /* @__PURE__ */ b.jsx(cS, { value: { value: a }, children: /* @__PURE__ */ b.jsx(
    B,
    {
      ref: t,
      mod: [{ active: u.isItemActive(a) }, l],
      ...u.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: u.variant }),
      ...c
    }
  ) });
});
Wa.displayName = "@mantine/core/AccordionItem";
Wa.classes = Br;
const fS = {}, Ga = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...l } = _(
    "AccordionPanel",
    fS,
    e
  ), { value: c } = Kf(), u = za();
  return /* @__PURE__ */ b.jsx(
    af,
    {
      ref: t,
      ...u.getStyles("panel", { className: r, classNames: n, style: o, styles: i }),
      ...l,
      in: u.isItemActive(c),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(c),
      "aria-labelledby": u.getControlId(c),
      children: /* @__PURE__ */ b.jsx("div", { ...u.getStyles("content", { classNames: n, styles: i }), children: a })
    }
  );
});
Ga.displayName = "@mantine/core/AccordionPanel";
Ga.classes = Br;
const pS = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ b.jsx(Ba, {})
}, mS = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : E(n),
    "--accordion-radius": r === void 0 ? void 0 : Le(r)
  }
});
function ie(e) {
  const t = _("Accordion", pS, e), {
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
    transitionDuration: h,
    disableChevronRotation: g,
    chevronPosition: y,
    chevronSize: x,
    order: w,
    chevron: v,
    variant: S,
    radius: C,
    ...I
  } = t, D = Rt(p), [T, $] = At({
    value: u,
    defaultValue: d,
    finalValue: c ? [] : null,
    onChange: f
  }), A = (R) => Array.isArray(T) ? T.includes(R) : R === T, F = (R) => {
    const j = Array.isArray(T) ? T.includes(R) ? T.filter((P) => P !== R) : [...T, R] : R === T ? null : R;
    $(j);
  }, W = Y({
    name: "Accordion",
    classes: Br,
    props: t,
    className: r,
    style: o,
    classNames: n,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: mS
  });
  return /* @__PURE__ */ b.jsx(
    lS,
    {
      value: {
        isItemActive: A,
        onChange: F,
        getControlId: go(
          `${D}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: go(
          `${D}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: h,
        disableChevronRotation: g,
        chevronPosition: y,
        order: w,
        chevron: v,
        loop: m,
        getStyles: W,
        variant: S,
        unstyled: s
      },
      children: /* @__PURE__ */ b.jsx(B, { ...W("root"), id: D, ...I, variant: S, "data-accordion": !0, children: l })
    }
  );
}
const gS = (e) => e;
ie.extend = gS;
ie.classes = Br;
ie.displayName = "@mantine/core/Accordion";
ie.Item = Wa;
ie.Panel = Ga;
ie.Control = Va;
ie.Chevron = Ba;
var Yf = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const hS = {}, bS = (e, { radius: t, color: n, variant: r, autoContrast: o }) => {
  const i = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    variant: r || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": t === void 0 ? void 0 : Le(t),
      "--alert-bg": n || r ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": n || r ? i.border : void 0
    }
  };
}, Ha = U((e, t) => {
  const n = _("Alert", hS, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    radius: c,
    color: u,
    title: d,
    children: f,
    id: p,
    icon: m,
    withCloseButton: h,
    onClose: g,
    closeButtonLabel: y,
    variant: x,
    autoContrast: w,
    ...v
  } = n, S = Y({
    name: "Alert",
    classes: Yf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: bS
  }), C = Rt(p), I = d && `${C}-title` || void 0, D = `${C}-body`;
  return /* @__PURE__ */ b.jsx(
    B,
    {
      id: C,
      ...S("root", { variant: x }),
      variant: x,
      ref: t,
      ...v,
      role: "alert",
      "aria-describedby": D,
      "aria-labelledby": I,
      children: /* @__PURE__ */ b.jsxs("div", { ...S("wrapper"), children: [
        m && /* @__PURE__ */ b.jsx("div", { ...S("icon"), children: m }),
        /* @__PURE__ */ b.jsxs("div", { ...S("body"), children: [
          d && /* @__PURE__ */ b.jsx("div", { ...S("title"), "data-with-close-button": h || void 0, children: /* @__PURE__ */ b.jsx("span", { id: I, ...S("label"), children: d }) }),
          f && /* @__PURE__ */ b.jsx("div", { id: D, ...S("message"), "data-variant": x, children: f })
        ] }),
        h && /* @__PURE__ */ b.jsx(
          zr,
          {
            ...S("closeButton"),
            onClick: g,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": y,
            unstyled: a
          }
        )
      ] })
    }
  );
});
Ha.classes = Yf;
Ha.displayName = "@mantine/core/Alert";
var Jf = { root: "m_b6d8b162" };
function yS(e) {
  if (e === "start")
    return "start";
  if (e === "end" || e)
    return "end";
}
const vS = {
  inherit: !1
}, xS = (e, { variant: t, lineClamp: n, gradient: r, size: o, color: i }) => ({
  root: {
    "--text-fz": Ke(o),
    "--text-lh": cy(o),
    "--text-gradient": t === "gradient" ? Os(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? it(i, e) : void 0
  }
}), Te = Bt((e, t) => {
  const n = _("Text", vS, e), {
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
    unstyled: h,
    variant: g,
    mod: y,
    size: x,
    ...w
  } = n, v = Y({
    name: ["Text", c],
    props: n,
    classes: Jf,
    className: d,
    style: f,
    classNames: p,
    styles: m,
    unstyled: h,
    vars: u,
    varsResolver: xS
  });
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...v("root", { focusable: !0 }),
      ref: t,
      component: l ? "span" : "p",
      variant: g,
      mod: [
        {
          "data-truncate": yS(o),
          "data-line-clamp": typeof r == "number",
          "data-inline": i,
          "data-inherit": s
        },
        y
      ],
      size: x,
      ...w
    }
  );
});
Te.classes = Jf;
Te.displayName = "@mantine/core/Text";
function Xf(e) {
  return typeof e == "string" ? { value: e, label: e } : "value" in e && !("label" in e) ? { value: e.value, label: e.value, disabled: e.disabled } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => Xf(t))
  } : e;
}
function Qf(e) {
  return e ? e.map((t) => Xf(t)) : [];
}
function Ua(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...Ua(n.items) } : (t[n.value] = n, t), {});
}
var Ve = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const wS = {
  error: null
}, SS = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": de(t, "combobox-chevron-size")
  }
}), qa = U((e, t) => {
  const n = _("ComboboxChevron", wS, e), { size: r, error: o, style: i, className: s, classNames: a, styles: l, unstyled: c, vars: u, mod: d, ...f } = n, p = Y({
    name: "ComboboxChevron",
    classes: Ve,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: l,
    unstyled: c,
    vars: u,
    varsResolver: SS,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ b.jsx(
    B,
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
      children: /* @__PURE__ */ b.jsx(
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
qa.classes = Ve;
qa.displayName = "@mantine/core/ComboboxChevron";
const [CS, ut] = zt(
  "Combobox component was not found in tree"
), Zf = te(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ b.jsx(
    zr,
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
Zf.displayName = "@mantine/core/ComboboxClearButton";
const DS = {}, Ka = U((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = _(
    "ComboboxDropdown",
    DS,
    e
  ), l = ut();
  return /* @__PURE__ */ b.jsx(
    St.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": s || void 0,
      ...l.getStyles("dropdown", { className: o, style: i, classNames: n, styles: r })
    }
  );
});
Ka.classes = Ve;
Ka.displayName = "@mantine/core/ComboboxDropdown";
const IS = {
  refProp: "ref"
}, ep = U((e, t) => {
  const { children: n, refProp: r } = _("ComboboxDropdownTarget", IS, e);
  if (ut(), !nn(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ b.jsx(St.Target, { ref: t, refProp: r, children: n });
});
ep.displayName = "@mantine/core/ComboboxDropdownTarget";
const PS = {}, Ya = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = _(
    "ComboboxEmpty",
    PS,
    e
  ), l = ut();
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ref: t,
      ...l.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
Ya.classes = Ve;
Ya.displayName = "@mantine/core/ComboboxEmpty";
function Ja({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o,
  autoComplete: i
}) {
  const s = ut(), [a, l] = q(null), c = (d) => {
    if (e == null || e(d), !s.readOnly && t) {
      if (d.nativeEvent.isComposing)
        return;
      if (d.nativeEvent.code === "ArrowDown" && (d.preventDefault(), s.store.dropdownOpened ? l(s.store.selectNextOption()) : (s.store.openDropdown("keyboard"), l(s.store.selectActiveOption()))), d.nativeEvent.code === "ArrowUp" && (d.preventDefault(), s.store.dropdownOpened ? l(s.store.selectPreviousOption()) : (s.store.openDropdown("keyboard"), l(s.store.selectActiveOption()))), d.nativeEvent.code === "Enter" || d.nativeEvent.code === "NumpadEnter") {
        if (d.nativeEvent.keyCode === 229)
          return;
        const f = s.store.getSelectedOptionIndex();
        s.store.dropdownOpened && f !== -1 ? (d.preventDefault(), s.store.clickSelectedOption()) : o === "button" && (d.preventDefault(), s.store.openDropdown("keyboard"));
      }
      d.nativeEvent.code === "Escape" && s.store.closeDropdown("keyboard"), d.nativeEvent.code === "Space" && o === "button" && (d.preventDefault(), s.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...n ? {
      "aria-haspopup": "listbox",
      "aria-expanded": r && !!(s.store.listId && s.store.dropdownOpened) || void 0,
      "aria-controls": s.store.listId,
      "aria-activedescendant": s.store.dropdownOpened && a || void 0,
      autoComplete: i,
      "data-expanded": s.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": s.store.dropdownOpened || void 0
    } : {},
    onKeyDown: c
  };
}
const kS = {
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
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    autoComplete: l,
    ...c
  } = _("ComboboxEventsTarget", kS, e);
  if (!nn(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = ut(), d = Ja({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown,
    autoComplete: l
  });
  return yn(n, {
    ...d,
    ...c,
    [r]: Ne(t, u.store.targetRef, n == null ? void 0 : n.ref)
  });
});
tp.displayName = "@mantine/core/ComboboxEventsTarget";
const ES = {}, Xa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = _(
    "ComboboxFooter",
    ES,
    e
  ), l = ut();
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ref: t,
      ...l.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a,
      onMouseDown: (c) => {
        c.preventDefault();
      }
    }
  );
});
Xa.classes = Ve;
Xa.displayName = "@mantine/core/ComboboxFooter";
const TS = {}, Qa = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: l, ...c } = _(
    "ComboboxGroup",
    TS,
    e
  ), u = ut();
  return /* @__PURE__ */ b.jsxs(
    B,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: i }),
      ...c,
      children: [
        l && /* @__PURE__ */ b.jsx("div", { ...u.getStyles("groupLabel", { classNames: n, styles: i }), children: l }),
        a
      ]
    }
  );
});
Qa.classes = Ve;
Qa.displayName = "@mantine/core/ComboboxGroup";
const RS = {}, Za = U((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = _(
    "ComboboxHeader",
    RS,
    e
  ), l = ut();
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ref: t,
      ...l.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a,
      onMouseDown: (c) => {
        c.preventDefault();
      }
    }
  );
});
Za.classes = Ve;
Za.displayName = "@mantine/core/ComboboxHeader";
function np({
  value: e,
  valuesDivider: t = ",",
  ...n
}) {
  return /* @__PURE__ */ b.jsx(
    "input",
    {
      type: "hidden",
      value: Array.isArray(e) ? e.join(t) : e || "",
      ...n
    }
  );
}
np.displayName = "@mantine/core/ComboboxHiddenInput";
const OS = {}, el = U((e, t) => {
  const n = _("ComboboxOption", OS, e), {
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
    mod: h,
    ...g
  } = n, y = ut(), x = Id(), w = c || x;
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...y.getStyles("option", { className: o, classNames: r, styles: s, style: i }),
      ...g,
      ref: t,
      id: w,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": p, "combobox-selected": m },
        h
      ],
      role: "option",
      onClick: (v) => {
        var S;
        p ? v.preventDefault() : ((S = y.onOptionSubmit) == null || S.call(y, n.value, n), l == null || l(v));
      },
      onMouseDown: (v) => {
        v.preventDefault(), d == null || d(v);
      },
      onMouseOver: (v) => {
        y.resetSelectionOnOptionHover && y.store.resetSelectedOption(), f == null || f(v);
      }
    }
  );
});
el.classes = Ve;
el.displayName = "@mantine/core/ComboboxOption";
const LS = {}, tl = U((e, t) => {
  const n = _("ComboboxOptions", LS, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: l, labelledBy: c, ...u } = n, d = ut(), f = Rt(a);
  return H(() => {
    d.store.setListId(f);
  }, [f]), /* @__PURE__ */ b.jsx(
    B,
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
tl.classes = Ve;
tl.displayName = "@mantine/core/ComboboxOptions";
const $S = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, nl = U((e, t) => {
  const n = _("ComboboxSearch", $S, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: l,
    withKeyboardNavigation: c,
    size: u,
    ...d
  } = n, f = ut(), p = f.getStyles("search"), m = Ja({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: c,
    withExpandedAttribute: !1,
    onKeyDown: l,
    autoComplete: "off"
  });
  return /* @__PURE__ */ b.jsx(
    Oe,
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
nl.classes = Ve;
nl.displayName = "@mantine/core/ComboboxSearch";
const jS = {
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
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    autoComplete: l,
    ...c
  } = _("ComboboxTarget", jS, e);
  if (!nn(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = ut(), d = Ja({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown,
    autoComplete: l
  }), f = yn(n, {
    ...d,
    ...c
  });
  return /* @__PURE__ */ b.jsx(St.Target, { ref: Ne(t, u.store.targetRef), children: f });
});
rp.displayName = "@mantine/core/ComboboxTarget";
function AS(e, t, n) {
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
function NS(e, t, n) {
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
function MS(e) {
  for (let t = 0; t < e.length; t += 1)
    if (!e[t].hasAttribute("data-combobox-disabled"))
      return t;
  return -1;
}
function rl({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, l] = At({
    value: t,
    defaultValue: e,
    finalValue: !1,
    onChange: n
  }), c = V(null), u = V(-1), d = V(null), f = V(null), p = V(-1), m = V(-1), h = V(-1), g = ee(
    (P = "unknown") => {
      a || (l(!0), o == null || o(P));
    },
    [l, o, a]
  ), y = ee(
    (P = "unknown") => {
      a && (l(!1), r == null || r(P));
    },
    [l, r, a]
  ), x = ee(
    (P = "unknown") => {
      a ? y(P) : g(P);
    },
    [y, g, a]
  ), w = ee(() => {
    const P = document.querySelector(`#${c.current} [data-combobox-selected]`);
    P == null || P.removeAttribute("data-combobox-selected"), P == null || P.removeAttribute("aria-selected");
  }, []), v = ee(
    (P) => {
      const O = document.getElementById(c.current), L = O == null ? void 0 : O.querySelectorAll("[data-combobox-option]");
      if (!L)
        return null;
      const z = P >= L.length ? 0 : P < 0 ? L.length - 1 : P;
      return u.current = z, L != null && L[z] && !L[z].hasAttribute("data-combobox-disabled") ? (w(), L[z].setAttribute("data-combobox-selected", "true"), L[z].setAttribute("aria-selected", "true"), L[z].scrollIntoView({ block: "nearest", behavior: s }), L[z].id) : null;
    },
    [s, w]
  ), S = ee(() => {
    const P = document.querySelector(
      `#${c.current} [data-combobox-active]`
    );
    if (P) {
      const O = document.querySelectorAll(
        `#${c.current} [data-combobox-option]`
      ), L = Array.from(O).findIndex((z) => z === P);
      return v(L);
    }
    return v(0);
  }, [v]), C = ee(
    () => v(
      NS(
        u.current,
        document.querySelectorAll(`#${c.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), I = ee(
    () => v(
      AS(
        u.current,
        document.querySelectorAll(`#${c.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), D = ee(
    () => v(
      MS(
        document.querySelectorAll(`#${c.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), T = ee(
    (P = "selected", O) => {
      h.current = window.setTimeout(() => {
        var M;
        const L = document.querySelectorAll(
          `#${c.current} [data-combobox-option]`
        ), z = Array.from(L).findIndex(
          (K) => K.hasAttribute(`data-combobox-${P}`)
        );
        u.current = z, O != null && O.scrollIntoView && ((M = L[z]) == null || M.scrollIntoView({ block: "nearest", behavior: s }));
      }, 0);
    },
    []
  ), $ = ee(() => {
    u.current = -1, w();
  }, [w]), A = ee(() => {
    const P = document.querySelectorAll(
      `#${c.current} [data-combobox-option]`
    ), O = P == null ? void 0 : P[u.current];
    O == null || O.click();
  }, []), F = ee((P) => {
    c.current = P;
  }, []), W = ee(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), R = ee(() => {
    m.current = window.setTimeout(() => f.current.focus(), 0);
  }, []), j = ee(() => u.current, []);
  return H(
    () => () => {
      window.clearTimeout(p.current), window.clearTimeout(m.current), window.clearTimeout(h.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: g,
    closeDropdown: y,
    toggleDropdown: x,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: j,
    selectOption: v,
    selectFirstOption: D,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: I,
    resetSelectedOption: $,
    updateSelectedOptionIndex: T,
    listId: c.current,
    setListId: F,
    clickSelectedOption: A,
    searchRef: d,
    focusSearchInput: W,
    targetRef: f,
    focusTarget: R
  };
}
const _S = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, FS = (e, { size: t, dropdownPadding: n }) => ({
  options: {
    "--combobox-option-fz": Ke(t),
    "--combobox-option-padding": de(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : E(n),
    "--combobox-option-fz": Ke(t),
    "--combobox-option-padding": de(t, "combobox-option-padding")
  }
});
function J(e) {
  const t = _("Combobox", _S, e), {
    classNames: n,
    styles: r,
    unstyled: o,
    children: i,
    store: s,
    vars: a,
    onOptionSubmit: l,
    onClose: c,
    size: u,
    dropdownPadding: d,
    resetSelectionOnOptionHover: f,
    __staticSelector: p,
    readOnly: m,
    ...h
  } = t, g = rl(), y = s || g, x = Y({
    name: p || "Combobox",
    classes: Ve,
    props: t,
    classNames: n,
    styles: r,
    unstyled: o,
    vars: a,
    varsResolver: FS
  }), w = () => {
    c == null || c(), y.closeDropdown();
  };
  return /* @__PURE__ */ b.jsx(
    CS,
    {
      value: {
        getStyles: x,
        store: y,
        onOptionSubmit: l,
        size: u,
        resetSelectionOnOptionHover: f,
        readOnly: m
      },
      children: /* @__PURE__ */ b.jsx(
        St,
        {
          opened: y.dropdownOpened,
          ...h,
          onClose: w,
          withRoles: !1,
          unstyled: o,
          children: i
        }
      )
    }
  );
}
const zS = (e) => e;
J.extend = zS;
J.classes = Ve;
J.displayName = "@mantine/core/Combobox";
J.Target = rp;
J.Dropdown = Ka;
J.Options = tl;
J.Option = el;
J.Search = nl;
J.Empty = Ya;
J.Chevron = qa;
J.Footer = Xa;
J.Header = Za;
J.EventsTarget = tp;
J.DropdownTarget = ep;
J.Group = Qa;
J.ClearButton = Zf;
J.HiddenInput = np;
var op = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const BS = op, ip = te(
  ({
    __staticSelector: e,
    __stylesApiProps: t,
    className: n,
    classNames: r,
    styles: o,
    unstyled: i,
    children: s,
    label: a,
    description: l,
    id: c,
    disabled: u,
    error: d,
    size: f,
    labelPosition: p = "left",
    bodyElement: m = "div",
    labelElement: h = "label",
    variant: g,
    style: y,
    vars: x,
    mod: w,
    ...v
  }, S) => {
    const C = Y({
      name: e,
      props: t,
      className: n,
      style: y,
      classes: op,
      classNames: r,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ b.jsx(
      B,
      {
        ...C("root"),
        ref: S,
        __vars: {
          "--label-fz": Ke(f),
          "--label-lh": de(f, "label-lh")
        },
        mod: [{ "label-position": p }, w],
        variant: g,
        size: f,
        ...v,
        children: /* @__PURE__ */ b.jsxs(
          B,
          {
            component: m,
            htmlFor: m === "label" ? c : void 0,
            ...C("body"),
            children: [
              s,
              /* @__PURE__ */ b.jsxs("div", { ...C("labelWrapper"), "data-disabled": u || void 0, children: [
                a && /* @__PURE__ */ b.jsx(
                  B,
                  {
                    component: h,
                    htmlFor: h === "label" ? c : void 0,
                    ...C("label"),
                    "data-disabled": u || void 0,
                    children: a
                  }
                ),
                l && /* @__PURE__ */ b.jsx(Oe.Description, { size: f, __inheritStyles: !1, ...C("description"), children: l }),
                d && typeof d != "boolean" && /* @__PURE__ */ b.jsx(Oe.Error, { size: f, __inheritStyles: !1, ...C("error"), children: d })
              ] })
            ]
          }
        )
      }
    );
  }
);
ip.displayName = "@mantine/core/InlineInput";
const sp = tn(null), VS = sp.Provider, ap = () => wt(sp), [WS, GS] = Vo();
var lp = { card: "m_26775b0a" };
const HS = {
  withBorder: !0
}, US = (e, { radius: t }) => ({
  card: {
    "--card-radius": Le(t)
  }
}), ol = U((e, t) => {
  const n = _("CheckboxCard", HS, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    checked: c,
    mod: u,
    withBorder: d,
    value: f,
    onClick: p,
    ...m
  } = n, h = Y({
    name: "CheckboxCard",
    classes: lp,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: US,
    rootSelector: "card"
  }), g = ap(), y = typeof c == "boolean" ? c : (g == null ? void 0 : g.value.includes(f || "")) || !1;
  return /* @__PURE__ */ b.jsx(WS, { value: { checked: y }, children: /* @__PURE__ */ b.jsx(
    rn,
    {
      ref: t,
      mod: [{ "with-border": d, checked: y }, u],
      ...h("card"),
      ...m,
      role: "checkbox",
      "aria-checked": y,
      onClick: (x) => {
        p == null || p(x), g == null || g.onChange(f || "");
      }
    }
  ) });
});
ol.displayName = "@mantine/core/CheckboxCard";
ol.classes = lp;
function qS({ children: e, role: t }) {
  const n = Un();
  return n ? /* @__PURE__ */ b.jsx("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy, children: e }) : /* @__PURE__ */ b.jsx(b.Fragment, { children: e });
}
const KS = {}, il = U((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: i, wrapperProps: s, children: a, readOnly: l, ...c } = _("CheckboxGroup", KS, e), [u, d] = At({
    value: n,
    defaultValue: r,
    finalValue: [],
    onChange: o
  }), f = (p) => {
    const m = typeof p == "string" ? p : p.currentTarget.value;
    !l && d(
      u.includes(m) ? u.filter((h) => h !== m) : [...u, m]
    );
  };
  return /* @__PURE__ */ b.jsx(VS, { value: { value: u, onChange: f, size: i }, children: /* @__PURE__ */ b.jsx(
    Oe.Wrapper,
    {
      size: i,
      ref: t,
      ...s,
      ...c,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ b.jsx(qS, { role: "group", children: a })
    }
  ) });
});
il.classes = Oe.Wrapper.classes;
il.displayName = "@mantine/core/CheckboxGroup";
function cp({ size: e, style: t, ...n }) {
  const r = e !== void 0 ? { width: E(e), height: E(e), ...t } : t;
  return /* @__PURE__ */ b.jsx(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: r,
      "aria-hidden": !0,
      ...n,
      children: /* @__PURE__ */ b.jsx(
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
  return e ? /* @__PURE__ */ b.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...t,
      children: /* @__PURE__ */ b.jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    }
  ) : /* @__PURE__ */ b.jsx(cp, { ...t });
}
var dp = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const YS = {
  icon: up
}, JS = (e, { radius: t, color: n, size: r, iconColor: o, variant: i, autoContrast: s }) => {
  const a = xn({ color: n || e.primaryColor, theme: e }), l = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    indicator: {
      "--checkbox-size": de(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Le(t),
      "--checkbox-color": i === "outline" ? l : it(n, e),
      "--checkbox-icon-color": o ? it(o, e) : fa(s, e) ? Ho({ color: n, theme: e, autoContrast: s }) : void 0
    }
  };
}, sl = U((e, t) => {
  const n = _("CheckboxIndicator", YS, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    icon: c,
    indeterminate: u,
    radius: d,
    color: f,
    iconColor: p,
    autoContrast: m,
    checked: h,
    mod: g,
    variant: y,
    disabled: x,
    ...w
  } = n, v = c, S = Y({
    name: "CheckboxIndicator",
    classes: dp,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: JS,
    rootSelector: "indicator"
  }), C = GS(), I = typeof h == "boolean" || typeof u == "boolean" ? h || u : (C == null ? void 0 : C.checked) || !1;
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ref: t,
      ...S("indicator", { variant: y }),
      variant: y,
      mod: [{ checked: I, disabled: x }, g],
      ...w,
      children: /* @__PURE__ */ b.jsx(v, { indeterminate: u, ...S("icon") })
    }
  );
});
sl.displayName = "@mantine/core/CheckboxIndicator";
sl.classes = dp;
var fp = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const XS = {
  labelPosition: "right",
  icon: up
}, QS = (e, { radius: t, color: n, size: r, iconColor: o, variant: i, autoContrast: s }) => {
  const a = xn({ color: n || e.primaryColor, theme: e }), l = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    root: {
      "--checkbox-size": de(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : Le(t),
      "--checkbox-color": i === "outline" ? l : it(n, e),
      "--checkbox-icon-color": o ? it(o, e) : fa(s, e) ? Ho({ color: n, theme: e, autoContrast: s }) : void 0
    }
  };
}, wn = U((e, t) => {
  const n = _("Checkbox", XS, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    color: c,
    label: u,
    id: d,
    size: f,
    radius: p,
    wrapperProps: m,
    children: h,
    checked: g,
    labelPosition: y,
    description: x,
    error: w,
    disabled: v,
    variant: S,
    indeterminate: C,
    icon: I,
    rootRef: D,
    iconColor: T,
    onChange: $,
    autoContrast: A,
    mod: F,
    ...W
  } = n, R = ap(), j = f || (R == null ? void 0 : R.size), P = I, O = Y({
    name: "Checkbox",
    props: n,
    classes: fp,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: QS
  }), { styleProps: L, rest: z } = Nr(W), M = Rt(d), K = R ? {
    checked: R.value.includes(z.value),
    onChange: (Z) => {
      R.onChange(Z), $ == null || $(Z);
    }
  } : {};
  return /* @__PURE__ */ b.jsx(
    ip,
    {
      ...O("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: M,
      size: j,
      labelPosition: y,
      label: u,
      description: x,
      error: w,
      disabled: v,
      classNames: r,
      styles: s,
      unstyled: a,
      "data-checked": K.checked || g || void 0,
      variant: S,
      ref: D,
      mod: F,
      ...L,
      ...m,
      children: /* @__PURE__ */ b.jsxs(B, { ...O("inner"), mod: { "data-label-position": y }, children: [
        /* @__PURE__ */ b.jsx(
          B,
          {
            component: "input",
            id: M,
            ref: t,
            checked: g,
            disabled: v,
            mod: { error: !!w, indeterminate: C },
            ...O("input", { focusable: !0, variant: S }),
            onChange: $,
            ...z,
            ...K,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ b.jsx(P, { indeterminate: C, ...O("icon") })
      ] })
    }
  );
});
wn.classes = { ...fp, ...BS };
wn.displayName = "@mantine/core/Checkbox";
wn.Group = il;
wn.Indicator = sl;
wn.Card = ol;
function An(e) {
  return "group" in e;
}
function pp({
  options: e,
  search: t,
  limit: n
}) {
  const r = t.trim().toLowerCase(), o = [];
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i];
    if (o.length === n)
      return o;
    An(s) && o.push({
      group: s.group,
      items: pp({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), An(s) || s.label.toLowerCase().includes(r) && o.push(s);
  }
  return o;
}
function ZS(e) {
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
      if (An(n))
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
function e0(e, t) {
  return Array.isArray(e) ? e.includes(t) : e === t;
}
function gp({
  data: e,
  withCheckIcon: t,
  value: n,
  checkIconPosition: r,
  unstyled: o,
  renderOption: i
}) {
  if (!An(e)) {
    const a = e0(n, e.value), l = t && a && /* @__PURE__ */ b.jsx(cp, { className: Ve.optionsDropdownCheckIcon }), c = /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      r === "left" && l,
      /* @__PURE__ */ b.jsx("span", { children: e.label }),
      r === "right" && l
    ] });
    return /* @__PURE__ */ b.jsx(
      J.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: at({ [Ve.optionsDropdownOption]: !o }),
        "data-reverse": r === "right" || void 0,
        "data-checked": a || void 0,
        "aria-selected": a,
        active: a,
        children: typeof i == "function" ? i({ option: e, checked: a }) : c
      }
    );
  }
  const s = e.items.map((a) => /* @__PURE__ */ b.jsx(
    gp,
    {
      data: a,
      value: n,
      unstyled: o,
      withCheckIcon: t,
      checkIconPosition: r,
      renderOption: i
    },
    a.value
  ));
  return /* @__PURE__ */ b.jsx(J.Group, { label: e.group, children: s });
}
function hp({
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
  labelId: m,
  renderOption: h,
  scrollAreaProps: g,
  "aria-label": y
}) {
  mp(e);
  const w = typeof o == "string" ? (r || pp)({
    options: e,
    search: l ? o : "",
    limit: i ?? 1 / 0
  }) : e, v = ZS(w), S = w.map((C) => /* @__PURE__ */ b.jsx(
    gp,
    {
      data: C,
      withCheckIcon: c,
      value: u,
      checkIconPosition: d,
      unstyled: p,
      renderOption: h
    },
    An(C) ? C.group : C.value
  ));
  return /* @__PURE__ */ b.jsx(J.Dropdown, { hidden: t || n && v, children: /* @__PURE__ */ b.jsxs(J.Options, { labelledBy: m, "aria-label": y, children: [
    a ? /* @__PURE__ */ b.jsx(
      _r.Autosize,
      {
        mah: s ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...g,
        children: S
      }
    ) : S,
    v && f && /* @__PURE__ */ b.jsx(J.Empty, { children: f })
  ] }) });
}
var ei = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const uu = {
  orientation: "horizontal"
}, t0 = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": E(t) }
}), al = U((e, t) => {
  const n = _("ButtonGroup", uu, e), {
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: l,
    vars: c,
    borderWidth: u,
    variant: d,
    mod: f,
    ...p
  } = _("ButtonGroup", uu, e), m = Y({
    name: "ButtonGroup",
    props: n,
    classes: ei,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: t0,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...m("group"),
      ref: t,
      variant: d,
      mod: [{ "data-orientation": l }, f],
      role: "group",
      ...p
    }
  );
});
al.classes = ei;
al.displayName = "@mantine/core/ButtonGroup";
const n0 = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${E(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, r0 = {}, o0 = (e, { radius: t, color: n, gradient: r, variant: o, size: i, justify: s, autoContrast: a }) => {
  const l = e.variantColorResolver({
    color: n || e.primaryColor,
    theme: e,
    gradient: r,
    variant: o || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": de(i, "button-height"),
      "--button-padding-x": de(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? Ke(i.replace("compact-", "")) : Ke(i),
      "--button-radius": t === void 0 ? void 0 : Le(t),
      "--button-bg": n || o ? l.background : void 0,
      "--button-hover": n || o ? l.hover : void 0,
      "--button-color": l.color,
      "--button-bd": n || o ? l.border : void 0,
      "--button-hover-color": n || o ? l.hoverColor : void 0
    }
  };
}, yr = Bt((e, t) => {
  const n = _("Button", r0, e), {
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
    loaderProps: h,
    gradient: g,
    classNames: y,
    styles: x,
    unstyled: w,
    "data-disabled": v,
    autoContrast: S,
    mod: C,
    ...I
  } = n, D = Y({
    name: "Button",
    props: n,
    classes: ei,
    className: i,
    style: r,
    classNames: y,
    styles: x,
    unstyled: w,
    vars: o,
    varsResolver: o0
  }), T = !!c, $ = !!u;
  return /* @__PURE__ */ b.jsxs(
    rn,
    {
      ref: t,
      ...D("root", { active: !a && !m && !v }),
      unstyled: w,
      variant: f,
      disabled: a || m,
      mod: [
        {
          disabled: a || v,
          loading: m,
          block: d,
          "with-left-section": T,
          "with-right-section": $
        },
        C
      ],
      ...I,
      children: [
        /* @__PURE__ */ b.jsx(Gn, { mounted: !!m, transition: n0, duration: 150, children: (A) => /* @__PURE__ */ b.jsx(B, { component: "span", ...D("loader", { style: A }), "aria-hidden": !0, children: /* @__PURE__ */ b.jsx(
          Hn,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...h
          }
        ) }) }),
        /* @__PURE__ */ b.jsxs("span", { ...D("inner"), children: [
          c && /* @__PURE__ */ b.jsx(B, { component: "span", ...D("section"), mod: { position: "left" }, children: c }),
          /* @__PURE__ */ b.jsx(B, { component: "span", mod: { loading: m }, ...D("label"), children: l }),
          u && /* @__PURE__ */ b.jsx(B, { component: "span", ...D("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
yr.classes = ei;
yr.displayName = "@mantine/core/Button";
yr.Group = al;
var bp = { root: "m_de3d2490", colorOverlay: "m_862f3d1b", shadowOverlay: "m_98ae7f22", alphaOverlay: "m_95709ac0", childrenOverlay: "m_93e74e3" };
const du = {
  withShadow: !0
}, i0 = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : Le(t),
    "--cs-size": E(n)
  }
}), vr = Bt((e, t) => {
  const n = _("ColorSwatch", du, e), {
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
    ...h
  } = _("ColorSwatch", du, n), g = Y({
    name: "ColorSwatch",
    props: n,
    classes: bp,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: i0
  });
  return /* @__PURE__ */ b.jsxs(
    B,
    {
      ref: t,
      variant: m,
      size: u,
      ...g("root", { focusable: !0 }),
      ...h,
      children: [
        /* @__PURE__ */ b.jsx("span", { ...g("alphaOverlay") }),
        f && /* @__PURE__ */ b.jsx("span", { ...g("shadowOverlay") }),
        /* @__PURE__ */ b.jsx("span", { ...g("colorOverlay", { style: { backgroundColor: c } }) }),
        /* @__PURE__ */ b.jsx("span", { ...g("childrenOverlay"), children: p })
      ]
    }
  );
});
vr.classes = bp;
vr.displayName = "@mantine/core/ColorSwatch";
var yp = { root: "m_7485cace" };
const s0 = {}, a0 = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : de(t, "container-size")
  }
}), ll = U((e, t) => {
  const n = _("Container", s0, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, fluid: c, mod: u, ...d } = n, f = Y({
    name: "Container",
    classes: yp,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: a0
  });
  return /* @__PURE__ */ b.jsx(B, { ref: t, mod: [{ fluid: c }, u], ...f("root"), ...d });
});
ll.classes = yp;
ll.displayName = "@mantine/core/Container";
function l0({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = V(-1), i = V(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, l = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return H(() => s, []), { openDropdown: a, closeDropdown: l };
}
const [c0, vp] = zt(
  "Grid component was not found in tree"
), Bs = (e, t) => e === "content" ? "auto" : e === "auto" ? "0rem" : e ? `${100 / (t / e)}%` : void 0, fu = (e, t, n) => n || e === "auto" ? "100%" : e === "content" ? "unset" : Bs(e, t), pu = (e, t) => {
  if (e)
    return e === "auto" || t ? "1" : "auto";
}, mu = (e, t) => e === 0 ? "0" : e ? `${100 / (t / e)}%` : void 0;
function u0({ span: e, order: t, offset: n, selector: r }) {
  var f;
  const o = We(), i = vp(), a = lr(e) === void 0 ? 12 : lr(e), l = $r({
    "--col-order": (f = lr(t)) == null ? void 0 : f.toString(),
    "--col-flex-grow": pu(a, i.grow),
    "--col-flex-basis": Bs(a, i.columns),
    "--col-width": a === "content" ? "auto" : void 0,
    "--col-max-width": fu(a, i.columns, i.grow),
    "--col-offset": mu(lr(n), i.columns)
  }), c = Re(o.breakpoints).reduce(
    (p, m) => {
      var h;
      return p[m] || (p[m] = {}), typeof t == "object" && t[m] !== void 0 && (p[m]["--col-order"] = (h = t[m]) == null ? void 0 : h.toString()), typeof e == "object" && e[m] !== void 0 && (p[m]["--col-flex-grow"] = pu(e[m], i.grow), p[m]["--col-flex-basis"] = Bs(e[m], i.columns), p[m]["--col-width"] = e[m] === "content" ? "auto" : void 0, p[m]["--col-max-width"] = fu(
        e[m],
        i.columns,
        i.grow
      )), typeof n == "object" && n[m] !== void 0 && (p[m]["--col-offset"] = mu(n[m], i.columns)), p;
    },
    {}
  ), d = Bd(Re(c), o).filter(
    (p) => Re(c[p.value]).length > 0
  ).map((p) => ({
    query: `(min-width: ${o.breakpoints[p.value]})`,
    styles: c[p.value]
  }));
  return /* @__PURE__ */ b.jsx(pa, { styles: l, media: d, selector: r });
}
var cl = { root: "m_410352e9", inner: "m_dee7bd2f", col: "m_96bdd299" };
const d0 = {
  span: 12
}, ul = U((e, t) => {
  const n = _("GridCol", d0, e), { classNames: r, className: o, style: i, styles: s, vars: a, span: l, order: c, offset: u, ...d } = n, f = vp(), p = ga();
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      u0,
      {
        selector: `.${p}`,
        span: l,
        order: c,
        offset: u
      }
    ),
    /* @__PURE__ */ b.jsx(
      B,
      {
        ref: t,
        ...f.getStyles("col", {
          className: at(o, p),
          style: i,
          classNames: r,
          styles: s
        }),
        ...d
      }
    )
  ] });
});
ul.classes = cl;
ul.displayName = "@mantine/core/GridCol";
function f0({ gutter: e, selector: t }) {
  const n = We(), r = $r({
    "--grid-gutter": ho(lr(e))
  }), o = Re(n.breakpoints).reduce(
    (a, l) => (a[l] || (a[l] = {}), typeof e == "object" && e[l] !== void 0 && (a[l]["--grid-gutter"] = ho(e[l])), a),
    {}
  ), s = Bd(Re(o), n).filter(
    (a) => Re(o[a.value]).length > 0
  ).map((a) => ({
    query: `(min-width: ${n.breakpoints[a.value]})`,
    styles: o[a.value]
  }));
  return /* @__PURE__ */ b.jsx(pa, { styles: r, media: s, selector: t });
}
const p0 = {
  gutter: "md",
  grow: !1,
  columns: 12
}, m0 = (e, { justify: t, align: n, overflow: r }) => ({
  root: {
    "--grid-justify": t,
    "--grid-align": n,
    "--grid-overflow": r
  }
}), $t = U((e, t) => {
  const n = _("Grid", p0, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    grow: c,
    gutter: u,
    columns: d,
    align: f,
    justify: p,
    children: m,
    ...h
  } = n, g = Y({
    name: "Grid",
    classes: cl,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: m0
  }), y = ga();
  return /* @__PURE__ */ b.jsxs(c0, { value: { getStyles: g, grow: c, columns: d }, children: [
    /* @__PURE__ */ b.jsx(f0, { selector: `.${y}`, ...n }),
    /* @__PURE__ */ b.jsx(B, { ref: t, ...g("root", { className: y }), ...h, children: /* @__PURE__ */ b.jsx("div", { ...g("inner"), children: m }) })
  ] });
});
$t.classes = cl;
$t.displayName = "@mantine/core/Grid";
$t.Col = ul;
const [g0, xp] = zt(
  "HoverCard component was not found in the tree"
), h0 = {};
function wp(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = _(
    "HoverCardDropdown",
    h0,
    e
  ), i = xp(), s = bo(n, i.openDropdown), a = bo(r, i.closeDropdown);
  return /* @__PURE__ */ b.jsx(St.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o, children: t });
}
wp.displayName = "@mantine/core/HoverCardDropdown";
const b0 = {
  refProp: "ref"
}, Sp = te((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = _(
    "HoverCardTarget",
    b0,
    e
  );
  if (!nn(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = xp(), a = bo(n.props.onMouseEnter, s.openDropdown), l = bo(n.props.onMouseLeave, s.closeDropdown), c = { onMouseEnter: a, onMouseLeave: l };
  return /* @__PURE__ */ b.jsx(St.Target, { refProp: r, ref: t, ...i, children: yn(
    n,
    o ? { [o]: c } : c
  ) });
});
Sp.displayName = "@mantine/core/HoverCardTarget";
const y0 = {
  openDelay: 0,
  closeDelay: 150,
  initiallyOpened: !1
};
function mn(e) {
  const { children: t, onOpen: n, onClose: r, openDelay: o, closeDelay: i, initiallyOpened: s, ...a } = _(
    "HoverCard",
    y0,
    e
  ), [l, { open: c, close: u }] = Py(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = l0({ open: c, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ b.jsx(g0, { value: { openDropdown: d, closeDropdown: f }, children: /* @__PURE__ */ b.jsx(St, { ...a, opened: l, __staticSelector: "HoverCard", children: t }) });
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
var Dp = { root: "m_6e45937b", loader: "m_e8eb006c", overlay: "m_df587f17" };
const gu = {
  transitionProps: { transition: "fade", duration: 0 },
  overlayProps: { backgroundOpacity: 0.75 },
  zIndex: jr("overlay")
}, v0 = (e, { zIndex: t }) => ({
  root: {
    "--lo-z-index": t == null ? void 0 : t.toString()
  }
}), dl = U((e, t) => {
  const n = _("LoadingOverlay", gu, e), {
    classNames: r,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: l,
    transitionProps: c,
    loaderProps: u,
    overlayProps: d,
    visible: f,
    zIndex: p,
    ...m
  } = n, h = We(), g = Y({
    name: "LoadingOverlay",
    classes: Dp,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: v0
  }), y = { ...gu.overlayProps, ...d };
  return /* @__PURE__ */ b.jsx(Gn, { transition: "fade", ...c, mounted: !!f, children: (x) => /* @__PURE__ */ b.jsxs(B, { ...g("root", { style: x }), ref: t, ...m, children: [
    /* @__PURE__ */ b.jsx(Hn, { ...g("loader"), unstyled: a, ...u }),
    /* @__PURE__ */ b.jsx(
      Co,
      {
        ...y,
        ...g("overlay"),
        darkHidden: !0,
        unstyled: a,
        color: (d == null ? void 0 : d.color) || h.white
      }
    ),
    /* @__PURE__ */ b.jsx(
      Co,
      {
        ...y,
        ...g("overlay"),
        lightHidden: !0,
        unstyled: a,
        color: (d == null ? void 0 : d.color) || h.colors.dark[5]
      }
    )
  ] }) });
});
dl.classes = Dp;
dl.displayName = "@mantine/core/LoadingOverlay";
const [x0, fl] = Vo(), [w0, S0] = Vo();
var ti = { root: "m_7cda1cd6", "root--default": "m_44da308b", "root--contrast": "m_e3a01f8", label: "m_1e0e6180", remove: "m_ae386778", group: "m_1dcfd90b" };
const C0 = {}, D0 = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? de(t) : de(n, "pg-gap")
  }
}), pl = U((e, t) => {
  const n = _("PillGroup", C0, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, size: c, disabled: u, ...d } = n, f = fl(), p = (f == null ? void 0 : f.size) || c || void 0, m = Y({
    name: "PillGroup",
    classes: ti,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: D0,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.jsx(w0, { value: { size: p, disabled: u }, children: /* @__PURE__ */ b.jsx(B, { ref: t, size: p, ...m("group"), ...d }) });
});
pl.classes = ti;
pl.displayName = "@mantine/core/PillGroup";
const I0 = {
  variant: "default"
}, P0 = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": de(n, "pill-fz"),
    "--pill-height": de(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : Le(t)
  }
}), xr = U((e, t) => {
  const n = _("Pill", I0, e), {
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
    size: h,
    disabled: g,
    mod: y,
    ...x
  } = n, w = S0(), v = fl(), S = h || (w == null ? void 0 : w.size) || void 0, C = (v == null ? void 0 : v.variant) === "filled" ? "contrast" : c || "default", I = Y({
    name: "Pill",
    classes: ti,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: P0,
    stylesCtx: { size: S }
  });
  return /* @__PURE__ */ b.jsxs(
    B,
    {
      component: "span",
      ref: t,
      variant: C,
      size: S,
      ...I("root", { variant: C }),
      mod: [
        { "with-remove": d && !g, disabled: g || (w == null ? void 0 : w.disabled) },
        y
      ],
      ...x,
      children: [
        /* @__PURE__ */ b.jsx("span", { ...I("label"), children: u }),
        d && /* @__PURE__ */ b.jsx(
          zr,
          {
            variant: "transparent",
            radius: m,
            tabIndex: -1,
            "aria-hidden": !0,
            unstyled: a,
            ...p,
            ...I("remove", {
              className: p == null ? void 0 : p.className,
              style: p == null ? void 0 : p.style
            }),
            onMouseDown: (D) => {
              var T;
              D.preventDefault(), D.stopPropagation(), (T = p == null ? void 0 : p.onMouseDown) == null || T.call(p, D);
            },
            onClick: (D) => {
              var T;
              D.stopPropagation(), f == null || f(), (T = p == null ? void 0 : p.onClick) == null || T.call(p, D);
            }
          }
        )
      ]
    }
  );
});
xr.classes = ti;
xr.displayName = "@mantine/core/Pill";
xr.Group = pl;
var Ip = { field: "m_45c4369d" };
const k0 = {
  type: "visible"
}, ml = U((e, t) => {
  const n = _("PillsInputField", k0, e), {
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
    mod: p,
    ...m
  } = n, h = fl(), g = Un(), y = Y({
    name: "PillsInputField",
    classes: Ip,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "field"
  }), x = u || (h == null ? void 0 : h.disabled);
  return /* @__PURE__ */ b.jsx(
    B,
    {
      component: "input",
      ref: Ne(t, h == null ? void 0 : h.fieldRef),
      "data-type": c,
      disabled: x,
      mod: [{ disabled: x, pointer: f }, p],
      ...y("field"),
      ...m,
      id: (g == null ? void 0 : g.inputId) || d,
      "aria-invalid": h == null ? void 0 : h.hasError,
      "aria-describedby": g == null ? void 0 : g.describedBy,
      type: "text",
      onMouseDown: (w) => !f && w.stopPropagation()
    }
  );
});
ml.classes = Ip;
ml.displayName = "@mantine/core/PillsInputField";
const E0 = {}, Do = U((e, t) => {
  const n = _("PillsInput", E0, e), {
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
  return /* @__PURE__ */ b.jsx(x0, { value: { fieldRef: f, size: s, disabled: a, hasError: !!c, variant: u }, children: /* @__PURE__ */ b.jsx(
    on,
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
      withAria: !1,
      children: r
    }
  ) });
});
Do.displayName = "@mantine/core/PillsInput";
Do.Field = ml;
function T0({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (An(i) ? o.push({
    group: i.group,
    items: i.items.filter(
      (s) => n.indexOf(s.value.toLowerCase().trim()) === -1
    )
  }) : n.indexOf(i.value.toLowerCase().trim()) === -1 && o.push(i), o), []);
}
const R0 = {
  maxValues: 1 / 0,
  withCheckIcon: !0,
  checkIconPosition: "left",
  hiddenInputValuesDivider: ","
}, dr = U((e, t) => {
  const n = _("MultiSelect", R0, e), {
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
    data: h,
    dropdownOpened: g,
    defaultDropdownOpened: y,
    onDropdownOpen: x,
    onDropdownClose: w,
    selectFirstOptionOnChange: v,
    onOptionSubmit: S,
    comboboxProps: C,
    filter: I,
    limit: D,
    withScrollArea: T,
    maxDropdownHeight: $,
    searchValue: A,
    defaultSearchValue: F,
    onSearchChange: W,
    readOnly: R,
    disabled: j,
    onFocus: P,
    onBlur: O,
    onPaste: L,
    radius: z,
    rightSection: M,
    rightSectionWidth: K,
    rightSectionPointerEvents: Z,
    rightSectionProps: se,
    leftSection: he,
    leftSectionWidth: oe,
    leftSectionPointerEvents: le,
    leftSectionProps: pe,
    inputContainer: $e,
    inputWrapperOrder: ae,
    withAsterisk: Se,
    labelProps: Ct,
    descriptionProps: me,
    errorProps: ge,
    wrapperProps: fe,
    description: ft,
    label: Dt,
    error: be,
    maxValues: Ot,
    searchable: Pe,
    nothingFoundMessage: ye,
    withCheckIcon: pt,
    checkIconPosition: Wt,
    hidePickedOptions: Me,
    withErrorStyles: Ge,
    name: Hr,
    form: Ur,
    id: qr,
    clearable: _e,
    clearButtonProps: mt,
    hiddenInputProps: Qn,
    placeholder: ac,
    hiddenInputValuesDivider: Dg,
    required: Ig,
    mod: Pg,
    renderOption: kg,
    onRemove: Lt,
    onClear: Ni,
    scrollAreaProps: Eg,
    ...lc
  } = n, Mi = Rt(qr), _i = Qf(h), Cn = Ua(_i), tt = rl({
    opened: g,
    defaultOpened: y,
    onDropdownOpen: x,
    onDropdownClose: () => {
      w == null || w(), tt.resetSelectedOption();
    }
  }), {
    styleProps: Tg,
    rest: { type: CR, autoComplete: Rg, ...Og }
  } = Nr(lc), [ke, Zn] = At({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [Fi, Kr] = At({
    value: A,
    defaultValue: F,
    finalValue: "",
    onChange: W
  }), zi = Y({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: cc, resolvedStyles: uc } = tf({
    props: n,
    styles: s,
    classNames: r
  }), Lg = (ue) => {
    p == null || p(ue), ue.key === " " && !Pe && (ue.preventDefault(), tt.toggleDropdown()), ue.key === "Backspace" && Fi.length === 0 && ke.length > 0 && (Lt == null || Lt(ke[ke.length - 1]), Zn(ke.slice(0, ke.length - 1)));
  }, $g = ke.map((ue, Vi) => {
    var dc, fc;
    return /* @__PURE__ */ b.jsx(
      xr,
      {
        withRemoveButton: !R && !((dc = Cn[ue]) != null && dc.disabled),
        onRemove: () => {
          Zn(ke.filter((Ag) => ue !== Ag)), Lt == null || Lt(ue);
        },
        unstyled: a,
        disabled: j,
        ...zi("pill"),
        children: ((fc = Cn[ue]) == null ? void 0 : fc.label) || ue
      },
      `${ue}-${Vi}`
    );
  });
  H(() => {
    v && tt.selectFirstOption();
  }, [v, ke]);
  const Bi = _e && ke.length > 0 && !j && !R && /* @__PURE__ */ b.jsx(
    J.ClearButton,
    {
      size: c,
      ...mt,
      onClear: () => {
        Ni == null || Ni(), Zn([]), Kr("");
      }
    }
  ), jg = T0({ data: _i, value: ke });
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsxs(
      J,
      {
        store: tt,
        classNames: cc,
        styles: uc,
        unstyled: a,
        size: c,
        readOnly: R,
        __staticSelector: "MultiSelect",
        onOptionSubmit: (ue) => {
          S == null || S(ue), Kr(""), tt.updateSelectedOptionIndex("selected"), ke.includes(Cn[ue].value) ? (Zn(ke.filter((Vi) => Vi !== Cn[ue].value)), Lt == null || Lt(Cn[ue].value)) : ke.length < Ot && Zn([...ke, Cn[ue].value]);
        },
        ...C,
        children: [
          /* @__PURE__ */ b.jsx(J.DropdownTarget, { children: /* @__PURE__ */ b.jsx(
            Do,
            {
              ...Tg,
              __staticSelector: "MultiSelect",
              classNames: cc,
              styles: uc,
              unstyled: a,
              size: c,
              className: o,
              style: i,
              variant: m,
              disabled: j,
              radius: z,
              rightSection: M || Bi || /* @__PURE__ */ b.jsx(J.Chevron, { size: c, error: be, unstyled: a }),
              rightSectionPointerEvents: Z || (Bi ? "all" : "none"),
              rightSectionWidth: K,
              rightSectionProps: se,
              leftSection: he,
              leftSectionWidth: oe,
              leftSectionPointerEvents: le,
              leftSectionProps: pe,
              inputContainer: $e,
              inputWrapperOrder: ae,
              withAsterisk: Se,
              labelProps: Ct,
              descriptionProps: me,
              errorProps: ge,
              wrapperProps: fe,
              description: ft,
              label: Dt,
              error: be,
              multiline: !0,
              withErrorStyles: Ge,
              __stylesApiProps: {
                ...n,
                rightSectionPointerEvents: Z || (Bi ? "all" : "none"),
                multiline: !0
              },
              pointer: !Pe,
              onClick: () => Pe ? tt.openDropdown() : tt.toggleDropdown(),
              "data-expanded": tt.dropdownOpened || void 0,
              id: Mi,
              required: Ig,
              mod: Pg,
              children: /* @__PURE__ */ b.jsxs(xr.Group, { disabled: j, unstyled: a, ...zi("pillsList"), children: [
                $g,
                /* @__PURE__ */ b.jsx(J.EventsTarget, { autoComplete: Rg, children: /* @__PURE__ */ b.jsx(
                  Do.Field,
                  {
                    ...Og,
                    ref: t,
                    id: Mi,
                    placeholder: ac,
                    type: !Pe && !ac ? "hidden" : "visible",
                    ...zi("inputField"),
                    unstyled: a,
                    onFocus: (ue) => {
                      P == null || P(ue), Pe && tt.openDropdown();
                    },
                    onBlur: (ue) => {
                      O == null || O(ue), tt.closeDropdown(), Kr("");
                    },
                    onKeyDown: Lg,
                    value: Fi,
                    onChange: (ue) => {
                      Kr(ue.currentTarget.value), Pe && tt.openDropdown(), v && tt.selectFirstOption();
                    },
                    disabled: j,
                    readOnly: R || !Pe,
                    pointer: !Pe
                  }
                ) })
              ] })
            }
          ) }),
          /* @__PURE__ */ b.jsx(
            hp,
            {
              data: Me ? jg : _i,
              hidden: R || j,
              filter: I,
              search: Fi,
              limit: D,
              hiddenWhenEmpty: !ye,
              withScrollArea: T,
              maxDropdownHeight: $,
              filterOptions: Pe,
              value: ke,
              checkIconPosition: Wt,
              withCheckIcon: pt,
              nothingFoundMessage: ye,
              unstyled: a,
              labelId: Dt ? `${Mi}-label` : void 0,
              "aria-label": Dt ? void 0 : lc["aria-label"],
              renderOption: kg,
              scrollAreaProps: Eg
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ b.jsx(
      J.HiddenInput,
      {
        name: Hr,
        valuesDivider: Dg,
        value: ke,
        form: Ur,
        disabled: j,
        ...Qn
      }
    )
  ] });
});
dr.classes = { ...on.classes, ...J.classes };
dr.displayName = "@mantine/core/MultiSelect";
const O0 = {
  duration: 100,
  transition: "fade"
};
function L0(e, t) {
  return { ...O0, ...t, ...e };
}
function $0({
  offset: e,
  position: t,
  defaultOpened: n
}) {
  const [r, o] = q(n), i = V(), { x: s, y: a, elements: l, refs: c, update: u, placement: d } = $a({
    placement: t,
    middleware: [
      Ta({
        crossAxis: !0,
        padding: 5,
        rootBoundary: "document"
      })
    ]
  }), f = d.includes("right") ? e : t.includes("left") ? e * -1 : 0, p = d.includes("bottom") ? e : t.includes("top") ? e * -1 : 0, m = ee(
    ({ clientX: h, clientY: g }) => {
      c.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: h,
            y: g,
            left: h + f,
            top: g + p,
            right: h,
            bottom: g
          };
        }
      });
    },
    [l.reference]
  );
  return H(() => {
    if (c.floating.current) {
      const h = i.current;
      h.addEventListener("mousemove", m);
      const g = jt(c.floating.current);
      return g.forEach((y) => {
        y.addEventListener("scroll", u);
      }), () => {
        h.removeEventListener("mousemove", m), g.forEach((y) => {
          y.removeEventListener("scroll", u);
        });
      };
    }
  }, [l.reference, c.floating.current, u, m, r]), { handleMouseMove: m, x: s, y: a, opened: r, setOpened: o, boundaryRef: i, floating: c.setFloating };
}
var ni = { tooltip: "m_1b3c8819", arrow: "m_f898399f" };
const j0 = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  defaultOpened: !1,
  position: "right",
  zIndex: jr("popover")
}, A0 = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Le(t),
    "--tooltip-bg": n ? it(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), gl = U((e, t) => {
  const n = _("TooltipFloating", j0, e), {
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
    position: h,
    multiline: g,
    zIndex: y,
    disabled: x,
    defaultOpened: w,
    variant: v,
    vars: S,
    portalProps: C,
    ...I
  } = n, D = We(), T = Y({
    name: "TooltipFloating",
    props: n,
    classes: ni,
    className: a,
    style: s,
    classNames: l,
    styles: c,
    unstyled: u,
    rootSelector: "tooltip",
    vars: S,
    varsResolver: A0
  }), { handleMouseMove: $, x: A, y: F, opened: W, boundaryRef: R, floating: j, setOpened: P } = $0({
    offset: m,
    position: h,
    defaultOpened: w
  });
  if (!nn(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const O = Ne(R, r.ref, t), L = (M) => {
    var K, Z;
    (Z = (K = r.props).onMouseEnter) == null || Z.call(K, M), $(M), P(!0);
  }, z = (M) => {
    var K, Z;
    (Z = (K = r.props).onMouseLeave) == null || Z.call(K, M), P(!1);
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(Yo, { ...C, withinPortal: i, children: /* @__PURE__ */ b.jsx(
      B,
      {
        ...I,
        ...T("tooltip", {
          style: {
            ...ha(s, D),
            zIndex: y,
            display: !x && W ? "block" : "none",
            top: (F && Math.round(F)) ?? "",
            left: (A && Math.round(A)) ?? ""
          }
        }),
        variant: v,
        ref: j,
        mod: { multiline: g },
        children: p
      }
    ) }),
    yn(r, {
      ...r.props,
      [o]: O,
      onMouseEnter: L,
      onMouseLeave: z
    })
  ] });
});
gl.classes = ni;
gl.displayName = "@mantine/core/TooltipFloating";
const Pp = tn(!1), N0 = Pp.Provider, M0 = () => wt(Pp), _0 = {
  openDelay: 0,
  closeDelay: 0
};
function kp(e) {
  const { openDelay: t, closeDelay: n, children: r } = _("TooltipGroup", _0, e);
  return /* @__PURE__ */ b.jsx(N0, { value: !0, children: /* @__PURE__ */ b.jsx(dw, { delay: { open: t, close: n }, children: r }) });
}
kp.displayName = "@mantine/core/TooltipGroup";
function F0(e) {
  var C, I, D;
  const [t, n] = q(e.defaultOpened), o = typeof e.opened == "boolean" ? e.opened : t, i = M0(), s = Rt(), { delay: a, currentId: l, setCurrentId: c } = Af(), u = ee(
    (T) => {
      n(T), T && c(s);
    },
    [c, s]
  ), {
    x: d,
    y: f,
    context: p,
    refs: m,
    update: h,
    placement: g,
    middlewareData: { arrow: { x: y, y: x } = {} }
  } = $a({
    strategy: e.strategy,
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      Rf(e.offset),
      Ta({ padding: 8 }),
      _s(),
      Of({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [Fs()] : []
    ]
  }), { getReferenceProps: w, getFloatingProps: v } = yw([
    uw(p, {
      enabled: (C = e.events) == null ? void 0 : C.hover,
      delay: i ? a : { open: e.openDelay, close: e.closeDelay },
      mouseOnly: !((I = e.events) != null && I.touch)
    }),
    bw(p, { enabled: (D = e.events) == null ? void 0 : D.focus, visibleOnly: !0 }),
    xw(p, { role: "tooltip" }),
    // cannot be used with controlled tooltip, page jumps
    gw(p, { enabled: typeof e.opened > "u" }),
    fw(p, { id: s })
  ]);
  Vf({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: h }
  }), Jt(() => {
    var T;
    (T = e.onPositionChange) == null || T.call(e, g);
  }, [g]);
  const S = o && l && l !== s;
  return {
    x: d,
    y: f,
    arrowX: y,
    arrowY: x,
    reference: m.setReference,
    floating: m.setFloating,
    getFloatingProps: v,
    getReferenceProps: w,
    isGroupPhase: S,
    opened: o,
    placement: g
  };
}
const hu = {
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
  zIndex: jr("popover"),
  positionDependencies: []
}, z0 = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : Le(t),
    "--tooltip-bg": n ? it(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Nn = U((e, t) => {
  const n = _("Tooltip", hu, e), {
    children: r,
    position: o,
    refProp: i,
    label: s,
    openDelay: a,
    closeDelay: l,
    onPositionChange: c,
    opened: u,
    defaultOpened: d,
    withinPortal: f,
    radius: p,
    color: m,
    classNames: h,
    styles: g,
    unstyled: y,
    style: x,
    className: w,
    withArrow: v,
    arrowSize: S,
    arrowOffset: C,
    arrowRadius: I,
    arrowPosition: D,
    offset: T,
    transitionProps: $,
    multiline: A,
    events: F,
    zIndex: W,
    disabled: R,
    positionDependencies: j,
    onClick: P,
    onMouseEnter: O,
    onMouseLeave: L,
    inline: z,
    variant: M,
    keepMounted: K,
    vars: Z,
    portalProps: se,
    mod: he,
    floatingStrategy: oe,
    ...le
  } = _("Tooltip", hu, n), { dir: pe } = Mr(), $e = V(null), ae = F0({
    position: Nf(pe, o),
    closeDelay: l,
    openDelay: a,
    onPositionChange: c,
    opened: u,
    defaultOpened: d,
    events: F,
    arrowRef: $e,
    arrowOffset: C,
    offset: typeof T == "number" ? T + (v ? S / 2 : 0) : T,
    positionDependencies: [...j, r],
    inline: z,
    strategy: oe
  }), Se = Y({
    name: "Tooltip",
    props: n,
    classes: ni,
    className: w,
    style: x,
    classNames: h,
    styles: g,
    unstyled: y,
    rootSelector: "tooltip",
    vars: Z,
    varsResolver: z0
  });
  if (!nn(r))
    throw new Error(
      "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const Ct = Ne(ae.reference, r.ref, t), me = L0($, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(Yo, { ...se, withinPortal: f, children: /* @__PURE__ */ b.jsx(
      Gn,
      {
        ...me,
        keepMounted: K,
        mounted: !R && !!ae.opened,
        duration: ae.isGroupPhase ? 10 : me.duration,
        children: (ge) => /* @__PURE__ */ b.jsxs(
          B,
          {
            ...le,
            variant: M,
            mod: [{ multiline: A }, he],
            ...ae.getFloatingProps({
              ref: ae.floating,
              className: Se("tooltip").className,
              style: {
                ...Se("tooltip").style,
                ...ge,
                zIndex: W,
                top: ae.y ?? 0,
                left: ae.x ?? 0
              }
            }),
            children: [
              s,
              /* @__PURE__ */ b.jsx(
                ja,
                {
                  ref: $e,
                  arrowX: ae.arrowX,
                  arrowY: ae.arrowY,
                  visible: v,
                  position: ae.placement,
                  arrowSize: S,
                  arrowOffset: C,
                  arrowRadius: I,
                  arrowPosition: D,
                  ...Se("arrow")
                }
              )
            ]
          }
        )
      }
    ) }),
    yn(
      r,
      ae.getReferenceProps({
        onClick: P,
        onMouseEnter: O,
        onMouseLeave: L,
        onMouseMove: n.onMouseMove,
        onPointerDown: n.onPointerDown,
        onPointerEnter: n.onPointerEnter,
        [i]: Ct,
        className: at(w, r.props.className),
        ...r.props
      })
    )
  ] });
});
Nn.classes = ni;
Nn.displayName = "@mantine/core/Tooltip";
Nn.Floating = gl;
Nn.Group = kp;
const B0 = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, hl = U((e, t) => {
  const n = _("Select", B0, e), {
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
    data: h,
    value: g,
    defaultValue: y,
    selectFirstOptionOnChange: x,
    onOptionSubmit: w,
    comboboxProps: v,
    readOnly: S,
    disabled: C,
    filter: I,
    limit: D,
    withScrollArea: T,
    maxDropdownHeight: $,
    size: A,
    searchable: F,
    rightSection: W,
    checkIconPosition: R,
    withCheckIcon: j,
    nothingFoundMessage: P,
    name: O,
    form: L,
    searchValue: z,
    defaultSearchValue: M,
    onSearchChange: K,
    allowDeselect: Z,
    error: se,
    rightSectionPointerEvents: he,
    id: oe,
    clearable: le,
    clearButtonProps: pe,
    hiddenInputProps: $e,
    renderOption: ae,
    onClear: Se,
    autoComplete: Ct,
    scrollAreaProps: me,
    ...ge
  } = n, fe = Ht(() => Qf(h), [h]), ft = Ht(() => Ua(fe), [fe]), Dt = Rt(oe), [be, Ot, Pe] = At({
    value: g,
    defaultValue: y,
    finalValue: null,
    onChange: m
  }), ye = typeof be == "string" ? ft[be] : void 0, pt = ky(ye), [Wt, Me] = At({
    value: z,
    defaultValue: M,
    finalValue: ye ? ye.label : "",
    onChange: K
  }), Ge = rl({
    opened: a,
    defaultOpened: l,
    onDropdownOpen: () => {
      u == null || u(), Ge.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      c == null || c(), Ge.resetSelectedOption();
    }
  }), { resolvedClassNames: Hr, resolvedStyles: Ur } = tf({
    props: n,
    styles: o,
    classNames: r
  });
  H(() => {
    x && Ge.selectFirstOption();
  }, [x, be]), H(() => {
    g === null && Me(""), typeof g == "string" && ye && ((pt == null ? void 0 : pt.value) !== ye.value || (pt == null ? void 0 : pt.label) !== ye.label) && Me(ye.label);
  }, [g, ye]);
  const qr = le && !!be && !C && !S && /* @__PURE__ */ b.jsx(
    J.ClearButton,
    {
      size: A,
      ...pe,
      onClear: () => {
        Ot(null, null), Me(""), Se == null || Se();
      }
    }
  );
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsxs(
      J,
      {
        store: Ge,
        __staticSelector: "Select",
        classNames: Hr,
        styles: Ur,
        unstyled: i,
        readOnly: S,
        onOptionSubmit: (_e) => {
          w == null || w(_e);
          const mt = Z && ft[_e].value === be ? null : ft[_e], Qn = mt ? mt.value : null;
          Qn !== be && Ot(Qn, mt), !Pe && Me(typeof Qn == "string" && (mt == null ? void 0 : mt.label) || ""), Ge.closeDropdown();
        },
        size: A,
        ...v,
        children: [
          /* @__PURE__ */ b.jsx(J.Target, { targetType: F ? "input" : "button", autoComplete: Ct, children: /* @__PURE__ */ b.jsx(
            on,
            {
              id: Dt,
              ref: t,
              rightSection: W || qr || /* @__PURE__ */ b.jsx(J.Chevron, { size: A, error: se, unstyled: i }),
              rightSectionPointerEvents: he || (qr ? "all" : "none"),
              ...ge,
              size: A,
              __staticSelector: "Select",
              disabled: C,
              readOnly: S || !F,
              value: Wt,
              onChange: (_e) => {
                Me(_e.currentTarget.value), Ge.openDropdown(), x && Ge.selectFirstOption();
              },
              onFocus: (_e) => {
                F && Ge.openDropdown(), d == null || d(_e);
              },
              onBlur: (_e) => {
                var mt;
                F && Ge.closeDropdown(), Me(be != null && ((mt = ft[be]) == null ? void 0 : mt.label) || ""), f == null || f(_e);
              },
              onClick: (_e) => {
                F ? Ge.openDropdown() : Ge.toggleDropdown(), p == null || p(_e);
              },
              classNames: Hr,
              styles: Ur,
              unstyled: i,
              pointer: !F,
              error: se
            }
          ) }),
          /* @__PURE__ */ b.jsx(
            hp,
            {
              data: fe,
              hidden: S || C,
              filter: I,
              search: Wt,
              limit: D,
              hiddenWhenEmpty: !P,
              withScrollArea: T,
              maxDropdownHeight: $,
              filterOptions: F && (ye == null ? void 0 : ye.label) !== Wt,
              value: be,
              checkIconPosition: R,
              withCheckIcon: j,
              nothingFoundMessage: P,
              unstyled: i,
              labelId: ge.label ? `${Dt}-label` : void 0,
              "aria-label": ge.label ? void 0 : ge["aria-label"],
              renderOption: ae,
              scrollAreaProps: me
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ b.jsx(
      J.HiddenInput,
      {
        value: be,
        name: O,
        form: L,
        disabled: C,
        ...$e
      }
    )
  ] });
});
hl.classes = { ...on.classes, ...J.classes };
hl.displayName = "@mantine/core/Select";
const V0 = {}, wr = U((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = _("Space", V0, e);
  return /* @__PURE__ */ b.jsx(B, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
wr.displayName = "@mantine/core/Space";
const [W0, bl] = zt(
  "Tabs component was not found in the tree"
);
var Vr = { root: "m_89d60db1", "list--default": "m_576c9d4", list: "m_89d33d6d", panel: "m_b0c91715", tab: "m_4ec4dce6", tabSection: "m_fc420b1f", "tab--default": "m_539e827b", "list--outline": "m_6772fbd5", "tab--outline": "m_b59ab47c", "tab--pills": "m_c3381914" };
const G0 = {}, yl = U((e, t) => {
  const n = _("TabsList", G0, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: l, style: c, mod: u, ...d } = n, f = bl();
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...d,
      ...f.getStyles("list", {
        className: o,
        style: c,
        classNames: a,
        styles: l,
        props: n,
        variant: f.variant
      }),
      ref: t,
      role: "tablist",
      variant: f.variant,
      mod: [
        {
          grow: i,
          orientation: f.orientation,
          placement: f.orientation === "vertical" && f.placement,
          inverted: f.inverted
        },
        u
      ],
      "aria-orientation": f.orientation,
      __vars: { "--tabs-justify": s },
      children: r
    }
  );
});
yl.classes = Vr;
yl.displayName = "@mantine/core/TabsList";
const H0 = {}, vl = U((e, t) => {
  const n = _("TabsPanel", H0, e), { children: r, className: o, value: i, classNames: s, styles: a, style: l, mod: c, ...u } = n, d = bl(), f = d.value === i, p = d.keepMounted || n.keepMounted || f ? r : null;
  return /* @__PURE__ */ b.jsx(
    B,
    {
      ...u,
      ...d.getStyles("panel", {
        className: o,
        classNames: s,
        styles: a,
        style: [l, f ? void 0 : { display: "none" }],
        props: n
      }),
      ref: t,
      mod: [{ orientation: d.orientation }, c],
      role: "tabpanel",
      id: d.getPanelId(i),
      "aria-labelledby": d.getTabId(i),
      children: p
    }
  );
});
vl.classes = Vr;
vl.displayName = "@mantine/core/TabsPanel";
const U0 = {}, xl = U((e, t) => {
  const n = _("TabsTab", U0, e), {
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
    vars: h,
    mod: g,
    ...y
  } = n, x = We(), { dir: w } = Mr(), v = bl(), S = a === v.value, C = (D) => {
    v.onChange(v.allowTabDeactivation && a === v.value ? null : a), l == null || l(D);
  }, I = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ b.jsxs(
    rn,
    {
      ...y,
      ...v.getStyles("tab", { className: r, style: f, variant: v.variant, ...I }),
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
        g
      ],
      ref: t,
      role: "tab",
      id: v.getTabId(a),
      "aria-selected": S,
      tabIndex: S || v.value === null ? 0 : -1,
      "aria-controls": v.getPanelId(a),
      onClick: C,
      __vars: { "--tabs-color": d ? it(d, x) : void 0 },
      onKeyDown: zd({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: v.activateTabWithKeyboard,
        loop: v.loop,
        orientation: v.orientation || "horizontal",
        dir: w,
        onKeyDown: c
      }),
      children: [
        s && /* @__PURE__ */ b.jsx("span", { ...v.getStyles("tabSection", I), "data-position": "left", children: s }),
        o && /* @__PURE__ */ b.jsx("span", { ...v.getStyles("tabLabel", I), children: o }),
        i && /* @__PURE__ */ b.jsx("span", { ...v.getStyles("tabSection", I), "data-position": "right", children: i })
      ]
    }
  );
});
xl.classes = Vr;
xl.displayName = "@mantine/core/TabsTab";
const bu = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", q0 = {
  keepMounted: !0,
  orientation: "horizontal",
  loop: !0,
  activateTabWithKeyboard: !0,
  allowTabDeactivation: !1,
  unstyled: !1,
  inverted: !1,
  variant: "default",
  placement: "left"
}, K0 = (e, { radius: t, color: n, autoContrast: r }) => ({
  root: {
    "--tabs-radius": Le(t),
    "--tabs-color": it(n, e),
    "--tabs-text-color": fa(r, e) ? Ho({ color: n, theme: e, autoContrast: r }) : void 0
  }
}), bt = U((e, t) => {
  const n = _("Tabs", q0, e), {
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
    inverted: h,
    placement: g,
    keepMounted: y,
    classNames: x,
    styles: w,
    unstyled: v,
    className: S,
    style: C,
    vars: I,
    autoContrast: D,
    mod: T,
    ...$
  } = n, A = Rt(c), [F, W] = At({
    value: o,
    defaultValue: r,
    finalValue: null,
    onChange: i
  }), R = Y({
    name: "Tabs",
    props: n,
    classes: Vr,
    className: S,
    style: C,
    classNames: x,
    styles: w,
    unstyled: v,
    vars: I,
    varsResolver: K0
  });
  return /* @__PURE__ */ b.jsx(
    W0,
    {
      value: {
        placement: g,
        value: F,
        orientation: s,
        id: A,
        loop: l,
        activateTabWithKeyboard: u,
        getTabId: go(`${A}-tab`, bu),
        getPanelId: go(`${A}-panel`, bu),
        onChange: W,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: h,
        keepMounted: y,
        unstyled: v,
        getStyles: R
      },
      children: /* @__PURE__ */ b.jsx(
        B,
        {
          ref: t,
          id: A,
          variant: f,
          mod: [
            {
              orientation: s,
              inverted: s === "horizontal" && h,
              placement: s === "vertical" && g
            },
            T
          ],
          ...R("root"),
          ...$,
          children: a
        }
      )
    }
  );
});
bt.classes = Vr;
bt.displayName = "@mantine/core/Tabs";
bt.Tab = xl;
bt.Panel = vl;
bt.List = yl;
const Y0 = {}, wl = U((e, t) => {
  const n = _("TextInput", Y0, e);
  return /* @__PURE__ */ b.jsx(on, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
wl.classes = on.classes;
wl.displayName = "@mantine/core/TextInput";
const J0 = ["h1", "h2", "h3", "h4", "h5", "h6"];
function X0(e, t) {
  const n = t !== void 0 ? t : `h${e}`;
  return J0.includes(n) ? {
    fontSize: `var(--mantine-${n}-font-size)`,
    fontWeight: `var(--mantine-${n}-font-weight)`,
    lineHeight: `var(--mantine-${n}-line-height)`
  } : {
    fontSize: E(n),
    fontWeight: `var(--mantine-h${e}-font-weight)`,
    lineHeight: `var(--mantine-h${e}-line-height)`
  };
}
var Ep = { root: "m_8a5d1357" };
const Q0 = {
  order: 1
}, Z0 = (e, { order: t, size: n, lineClamp: r, textWrap: o }) => {
  const i = X0(t, n);
  return {
    root: {
      "--title-fw": i.fontWeight,
      "--title-lh": i.lineHeight,
      "--title-fz": i.fontSize,
      "--title-line-clamp": typeof r == "number" ? r.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, Sn = U((e, t) => {
  const n = _("Title", Q0, e), {
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
    textWrap: p,
    mod: m,
    ...h
  } = n, g = Y({
    name: "Title",
    props: n,
    classes: Ep,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Z0
  });
  return [1, 2, 3, 4, 5, 6].includes(l) ? /* @__PURE__ */ b.jsx(
    B,
    {
      ...g("root"),
      component: `h${l}`,
      variant: d,
      ref: t,
      mod: [{ order: l, "data-line-clamp": typeof f == "number" }, m],
      size: u,
      ...h
    }
  ) : null;
});
Sn.classes = Ep;
Sn.displayName = "@mantine/core/Title";
var Tp = { exports: {} }, eC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", tC = eC, nC = tC;
function Rp() {
}
function Op() {
}
Op.resetWarningCache = Rp;
var rC = function() {
  function e(r, o, i, s, a, l) {
    if (l !== nC) {
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
    checkPropTypes: Op,
    resetWarningCache: Rp
  };
  return n.PropTypes = n, n;
};
Tp.exports = rC();
var oC = Tp.exports;
const sn = /* @__PURE__ */ Pd(oC);
var iC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, sC = Object.defineProperty, aC = Object.defineProperties, lC = Object.getOwnPropertyDescriptors, Io = Object.getOwnPropertySymbols, Lp = Object.prototype.hasOwnProperty, $p = Object.prototype.propertyIsEnumerable, yu = (e, t, n) => t in e ? sC(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vu = (e, t) => {
  for (var n in t || (t = {}))
    Lp.call(t, n) && yu(e, n, t[n]);
  if (Io)
    for (var n of Io(t))
      $p.call(t, n) && yu(e, n, t[n]);
  return e;
}, cC = (e, t) => aC(e, lC(t)), uC = (e, t) => {
  var n = {};
  for (var r in e)
    Lp.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Io)
    for (var r of Io(e))
      t.indexOf(r) < 0 && $p.call(e, r) && (n[r] = e[r]);
  return n;
}, qn = (e, t, n) => {
  const r = te(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: l = 24, stroke: c = 2, children: u } = s, d = uC(s, ["color", "size", "stroke", "children"]);
      return Cs(
        "svg",
        vu(cC(vu({
          ref: i
        }, iC), {
          width: l,
          height: l,
          stroke: a,
          strokeWidth: c,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => Cs(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: sn.string,
    size: sn.oneOfType([sn.string, sn.number]),
    stroke: sn.oneOfType([sn.string, sn.number])
  }, r.displayName = `${t}`, r;
}, dC = qn("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), fC = qn("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]), pC = qn("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), mC = qn("info-circle", "IconInfoCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 9h.01", key: "svg-1" }],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), gC = qn("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), hC = qn("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function bC({ indeterminate: e, ...t }) {
  return e ? /* @__PURE__ */ b.jsx(fC, { ...t }) : /* @__PURE__ */ b.jsx(dC, { ...t });
}
const yC = {
  components: {
    Checkbox: wn.extend({
      defaultProps: {
        icon: bC,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, vC = "v1.2.0";
function Ce(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var xC = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), xu = xC, os = () => Math.random().toString(36).substring(7).split("").join("."), wC = {
  INIT: `@@redux/INIT${os()}`,
  REPLACE: `@@redux/REPLACE${os()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${os()}`
}, Po = wC;
function Sl(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function jp(e, t, n) {
  if (typeof e != "function")
    throw new Error(Ce(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Ce(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Ce(1));
    return n(jp)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), s = i, a = 0, l = !1;
  function c() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((g, y) => {
      s.set(y, g);
    }));
  }
  function u() {
    if (l)
      throw new Error(Ce(3));
    return o;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Ce(4));
    if (l)
      throw new Error(Ce(5));
    let y = !0;
    c();
    const x = a++;
    return s.set(x, g), function() {
      if (y) {
        if (l)
          throw new Error(Ce(6));
        y = !1, c(), s.delete(x), i = null;
      }
    };
  }
  function f(g) {
    if (!Sl(g))
      throw new Error(Ce(7));
    if (typeof g.type > "u")
      throw new Error(Ce(8));
    if (typeof g.type != "string")
      throw new Error(Ce(17));
    if (l)
      throw new Error(Ce(9));
    try {
      l = !0, o = r(o, g);
    } finally {
      l = !1;
    }
    return (i = s).forEach((x) => {
      x();
    }), g;
  }
  function p(g) {
    if (typeof g != "function")
      throw new Error(Ce(10));
    r = g, f({
      type: Po.REPLACE
    });
  }
  function m() {
    const g = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(Ce(11));
        function x() {
          const v = y;
          v.next && v.next(u());
        }
        return x(), {
          unsubscribe: g(x)
        };
      },
      [xu]() {
        return this;
      }
    };
  }
  return f({
    type: Po.INIT
  }), {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p,
    [xu]: m
  };
}
function SC(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: Po.INIT
    }) > "u")
      throw new Error(Ce(12));
    if (typeof n(void 0, {
      type: Po.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Ce(13));
  });
}
function CC(e) {
  const t = Object.keys(e), n = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  try {
    SC(n);
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
        throw a && a.type, new Error(Ce(14));
      c[d] = m, l = l || m !== p;
    }
    return l = l || r.length !== Object.keys(s).length, l ? c : s;
  };
}
function ko(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function DC(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(Ce(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (l, ...c) => i(l, ...c)
    }, a = e.map((l) => l(s));
    return i = ko(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function IC(e) {
  return Sl(e) && "type" in e && typeof e.type == "string";
}
var Ap = Symbol.for("immer-nothing"), wu = Symbol.for("immer-draftable"), Qe = Symbol.for("immer-state");
function gt(e, ...t) {
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
  return e ? Np(e) || Array.isArray(e) || !!e[wu] || !!((t = e.constructor) != null && t[wu]) || oi(e) || ii(e) : !1;
}
var PC = Object.prototype.constructor.toString();
function Np(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Mn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === PC;
}
function Eo(e, t) {
  ri(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function ri(e) {
  const t = e[Qe];
  return t ? t.type_ : Array.isArray(e) ? 1 : oi(e) ? 2 : ii(e) ? 3 : 0;
}
function Vs(e, t) {
  return ri(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Mp(e, t, n) {
  const r = ri(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function kC(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function oi(e) {
  return e instanceof Map;
}
function ii(e) {
  return e instanceof Set;
}
function ln(e) {
  return e.copy_ || e.base_;
}
function Ws(e, t) {
  if (oi(e))
    return new Map(e);
  if (ii(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Np(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Qe];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], a = r[s];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (r[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: e[s]
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
function Cl(e, t = !1) {
  return si(e) || Zt(e) || !Ft(e) || (ri(e) > 1 && (e.set = e.add = e.clear = e.delete = EC), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Cl(r, !0))), e;
}
function EC() {
  gt(2);
}
function si(e) {
  return Object.isFrozen(e);
}
var TC = {};
function hn(e) {
  const t = TC[e];
  return t || gt(0, e), t;
}
var Sr;
function _p() {
  return Sr;
}
function RC(e, t) {
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
  t && (hn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Gs(e) {
  Hs(e), e.drafts_.forEach(OC), e.drafts_ = null;
}
function Hs(e) {
  e === Sr && (Sr = e.parent_);
}
function Cu(e) {
  return Sr = RC(Sr, e);
}
function OC(e) {
  const t = e[Qe];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Du(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Qe].modified_ && (Gs(t), gt(4)), Ft(e) && (e = To(t, e), t.parent_ || Ro(t, e)), t.patches_ && hn("Patches").generateReplacementPatches_(
    n[Qe].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = To(t, n, []), Gs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ap ? e : void 0;
}
function To(e, t, n) {
  if (si(t))
    return t;
  const r = t[Qe];
  if (!r)
    return Eo(
      t,
      (o, i) => Iu(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Ro(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, s = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Eo(
      i,
      (a, l) => Iu(e, r, o, a, l, n, s)
    ), Ro(e, o, !1), n && e.patches_ && hn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Iu(e, t, n, r, o, i, s) {
  if (Zt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Vs(t.assigned_, r) ? i.concat(r) : void 0, l = To(e, o, a);
    if (Mp(n, r, l), Zt(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && n.add(o);
  if (Ft(o) && !si(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    To(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Ro(e, o);
  }
}
function Ro(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Cl(t, n);
}
function LC(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : _p(),
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
  let o = r, i = Dl;
  n && (o = [r], i = Cr);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var Dl = {
  get(e, t) {
    if (t === Qe)
      return e;
    const n = ln(e);
    if (!Vs(n, t))
      return $C(e, n, t);
    const r = n[t];
    return e.finalized_ || !Ft(r) ? r : r === is(e.base_, t) ? (ss(e), e.copy_[t] = qs(r, e)) : r;
  },
  has(e, t) {
    return t in ln(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ln(e));
  },
  set(e, t, n) {
    const r = Fp(ln(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = is(ln(e), t), i = o == null ? void 0 : o[Qe];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (kC(n, o) && (n !== void 0 || Vs(e.base_, t)))
        return !0;
      ss(e), Us(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return is(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, ss(e), Us(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = ln(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    gt(11);
  },
  getPrototypeOf(e) {
    return Mn(e.base_);
  },
  setPrototypeOf() {
    gt(12);
  }
}, Cr = {};
Eo(Dl, (e, t) => {
  Cr[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Cr.deleteProperty = function(e, t) {
  return Cr.set.call(this, e, t, void 0);
};
Cr.set = function(e, t, n) {
  return Dl.set.call(this, e[0], t, n, e[0]);
};
function is(e, t) {
  const n = e[Qe];
  return (n ? ln(n) : e)[t];
}
function $C(e, t, n) {
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
function Us(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Us(e.parent_));
}
function ss(e) {
  e.copy_ || (e.copy_ = Ws(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var jC = class {
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
      typeof n != "function" && gt(6), r !== void 0 && typeof r != "function" && gt(7);
      let o;
      if (Ft(t)) {
        const i = Cu(this), s = qs(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? Gs(i) : Hs(i);
        }
        return Su(i, r), Du(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === Ap && (o = void 0), this.autoFreeze_ && Cl(o, !0), r) {
          const i = [], s = [];
          hn("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        gt(1, t);
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
    Ft(e) || gt(8), Zt(e) && (e = zp(e));
    const t = Cu(this), n = qs(e, void 0);
    return n[Qe].isManual_ = !0, Hs(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Qe];
    (!n || !n.isManual_) && gt(9);
    const { scope_: r } = n;
    return Su(r, t), Du(void 0, r);
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
    const r = hn("Patches").applyPatches_;
    return Zt(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function qs(e, t) {
  const n = oi(e) ? hn("MapSet").proxyMap_(e, t) : ii(e) ? hn("MapSet").proxySet_(e, t) : LC(e, t);
  return (t ? t.scope_ : _p()).drafts_.push(n), n;
}
function zp(e) {
  return Zt(e) || gt(10, e), Bp(e);
}
function Bp(e) {
  if (!Ft(e) || si(e))
    return e;
  const t = e[Qe];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ws(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ws(e, !0);
  return Eo(n, (r, o) => {
    Mp(n, r, Bp(o));
  }), t && (t.finalized_ = !1), n;
}
var Ze = new jC(), Vp = Ze.produce;
Ze.produceWithPatches.bind(
  Ze
);
Ze.setAutoFreeze.bind(Ze);
Ze.setUseStrictShallowCopy.bind(Ze);
Ze.applyPatches.bind(Ze);
Ze.createDraft.bind(Ze);
Ze.finishDraft.bind(Ze);
function AC(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function NC(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function MC(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Pu = (e) => Array.isArray(e) ? e : [e];
function _C(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return MC(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function FC(e, t) {
  const n = [], { length: r } = e;
  for (let o = 0; o < r; o++)
    n.push(e[o].apply(null, t));
  return n;
}
var zC = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, BC = typeof WeakRef < "u" ? WeakRef : zC, VC = 0, ku = 1;
function eo() {
  return {
    s: VC,
    v: void 0,
    o: null,
    p: null
  };
}
function Il(e, t = {}) {
  let n = eo();
  const { resultEqualityCheck: r } = t;
  let o, i = 0;
  function s() {
    var d;
    let a = n;
    const { length: l } = arguments;
    for (let f = 0, p = l; f < p; f++) {
      const m = arguments[f];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let h = a.o;
        h === null && (a.o = h = /* @__PURE__ */ new WeakMap());
        const g = h.get(m);
        g === void 0 ? (a = eo(), h.set(m, a)) : a = g;
      } else {
        let h = a.p;
        h === null && (a.p = h = /* @__PURE__ */ new Map());
        const g = h.get(m);
        g === void 0 ? (a = eo(), h.set(m, a)) : a = g;
      }
    }
    const c = a;
    let u;
    if (a.s === ku)
      u = a.v;
    else if (u = e.apply(null, arguments), i++, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new BC(u) : u;
    }
    return c.s = ku, c.v = u, u;
  }
  return s.clearCache = () => {
    n = eo(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Wp(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, l = {}, c = o.pop();
    typeof c == "object" && (l = c, c = o.pop()), AC(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const u = {
      ...n,
      ...l
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Il,
      argsMemoizeOptions: m = [],
      devModeChecks: h = {}
    } = u, g = Pu(f), y = Pu(m), x = _C(o), w = d(function() {
      return i++, c.apply(
        null,
        arguments
      );
    }, ...g), v = p(function() {
      s++;
      const C = FC(
        x,
        arguments
      );
      return a = w.apply(null, C), a;
    }, ...y);
    return Object.assign(v, {
      resultFunc: c,
      memoizedResultFunc: w,
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
var Kn = /* @__PURE__ */ Wp(Il), WC = Object.assign(
  (e, t = Kn) => {
    NC(
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
  { withTypes: () => WC }
);
function Gp(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var GC = Gp(), HC = Gp, UC = (...e) => {
  const t = Wp(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(Zt(s) ? zp(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
UC(Il);
var qC = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ko : ko.apply(null, arguments);
}, KC = (e) => e && typeof e.match == "function";
function Et(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Be(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => IC(r) && r.type === e, n;
}
var Hp = class cr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, cr.prototype);
  }
  static get [Symbol.species]() {
    return cr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new cr(...t[0].concat(this)) : new cr(...t.concat(this));
  }
};
function Eu(e) {
  return Ft(e) ? Vp(e, () => {
  }) : e;
}
function Tu(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Be(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function YC(e) {
  return typeof e == "boolean";
}
var JC = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let s = new Hp();
  return n && (YC(n) ? s.push(GC) : s.push(HC(n.extraArgument))), s;
}, XC = "RTK_autoBatch", Up = (e) => (t) => {
  setTimeout(t, e);
}, QC = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Up(10), ZC = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? QC : e.type === "callback" ? e.queueNotification : Up(e.timeout), c = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[XC]), i = !o, i && (s || (s = !0, l(c))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, eD = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new Hp(e);
  return r && o.push(ZC(typeof r == "object" ? r : void 0)), o;
}, tD = !0;
function nD(e) {
  const t = JC(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = e || {};
  let a;
  if (typeof n == "function")
    a = n;
  else if (Sl(n))
    a = CC(n);
  else
    throw new Error(Be(1));
  let l;
  typeof r == "function" ? l = r(t) : l = t();
  let c = ko;
  o && (c = qC({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !tD,
    ...typeof o == "object" && o
  }));
  const u = DC(...l), d = eD(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = c(...f);
  return jp(a, i, p);
}
function qp(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(Be(28));
      if (a in t)
        throw new Error(Be(29));
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
function rD(e) {
  return typeof e == "function";
}
function oD(e, t) {
  let [n, r, o] = qp(t), i;
  if (rD(e))
    i = () => Eu(e());
  else {
    const a = Eu(e);
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
        if (Zt(u)) {
          const p = d(u, l);
          return p === void 0 ? u : p;
        } else {
          if (Ft(u))
            return Vp(u, (f) => d(f, l));
          {
            const f = d(u, l);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(Be(9));
            }
            return f;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var iD = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Kp = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += iD[Math.random() * 64 | 0];
  return t;
}, sD = (e, t) => KC(e) ? e.match(t) : e(t);
function aD(...e) {
  return (t) => e.some((n) => sD(n, t));
}
var lD = ["name", "message", "stack", "code"], as = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    je(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Ru = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    je(this, "_type");
    this.payload = e, this.meta = t;
  }
}, cD = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of lD)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, ai = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Et(t + "/fulfilled", (l, c, u, d) => ({
      payload: l,
      meta: {
        ...d || {},
        arg: u,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), i = Et(t + "/pending", (l, c, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: c,
        requestId: l,
        requestStatus: "pending"
      }
    })), s = Et(t + "/rejected", (l, c, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || cD)(l || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(l) : Kp(), p = new AbortController();
        let m, h;
        function g(x) {
          h = x, p.abort();
        }
        const y = async function() {
          var v, S;
          let x;
          try {
            let C = (v = r == null ? void 0 : r.condition) == null ? void 0 : v.call(r, l, {
              getState: u,
              extra: d
            });
            if (dD(C) && (C = await C), C === !1 || p.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const I = new Promise((D, T) => {
              m = () => {
                T({
                  name: "AbortError",
                  message: h || "Aborted"
                });
              }, p.signal.addEventListener("abort", m);
            });
            c(i(f, l, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: f,
              arg: l
            }, {
              getState: u,
              extra: d
            }))), x = await Promise.race([I, Promise.resolve(n(l, {
              dispatch: c,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: g,
              rejectWithValue: (D, T) => new as(D, T),
              fulfillWithValue: (D, T) => new Ru(D, T)
            })).then((D) => {
              if (D instanceof as)
                throw D;
              return D instanceof Ru ? o(D.payload, f, l, D.meta) : o(D, f, l);
            })]);
          } catch (C) {
            x = C instanceof as ? s(null, f, l, C.payload, C.meta) : s(C, f, l);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(x) && x.meta.condition || c(x), x;
        }();
        return Object.assign(y, {
          abort: g,
          requestId: f,
          arg: l,
          unwrap() {
            return y.then(uD);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: aD(s, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function uD(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function dD(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var fD = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function pD(e, t) {
  return `${e}/${t}`;
}
function mD({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[fD];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Be(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(hD()) : o.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(w, v) {
        const S = typeof w == "string" ? w : w.type;
        if (!S)
          throw new Error(Be(12));
        if (S in c.sliceCaseReducersByType)
          throw new Error(Be(13));
        return c.sliceCaseReducersByType[S] = v, u;
      },
      addMatcher(w, v) {
        return c.sliceMatchers.push({
          matcher: w,
          reducer: v
        }), u;
      },
      exposeAction(w, v) {
        return c.actionCreators[w] = v, u;
      },
      exposeCaseReducer(w, v) {
        return c.sliceCaseReducersByName[w] = v, u;
      }
    };
    l.forEach((w) => {
      const v = a[w], S = {
        reducerName: w,
        type: pD(i, w),
        createNotation: typeof o.reducers == "function"
      };
      yD(v) ? xD(S, v, u, t) : bD(S, v, u);
    });
    function d() {
      const [w = {}, v = [], S = void 0] = typeof o.extraReducers == "function" ? qp(o.extraReducers) : [o.extraReducers], C = {
        ...w,
        ...c.sliceCaseReducersByType
      };
      return oD(o.initialState, (I) => {
        for (let D in C)
          I.addCase(D, C[D]);
        for (let D of c.sliceMatchers)
          I.addMatcher(D.matcher, D.reducer);
        for (let D of v)
          I.addMatcher(D.matcher, D.reducer);
        S && I.addDefaultCase(S);
      });
    }
    const f = (w) => w, p = /* @__PURE__ */ new Map();
    let m;
    function h(w, v) {
      return m || (m = d()), m(w, v);
    }
    function g() {
      return m || (m = d()), m.getInitialState();
    }
    function y(w, v = !1) {
      function S(I) {
        let D = I[w];
        return typeof D > "u" && v && (D = g()), D;
      }
      function C(I = f) {
        const D = Tu(p, v, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Tu(D, I, {
          insert: () => {
            const T = {};
            for (const [$, A] of Object.entries(o.selectors ?? {}))
              T[$] = gD(A, I, g, v);
            return T;
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
      name: i,
      reducer: h,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: g,
      ...y(s),
      injectInto(w, {
        reducerPath: v,
        ...S
      } = {}) {
        const C = v ?? s;
        return w.inject({
          reducerPath: C,
          reducer: h
        }, S), {
          ...x,
          ...y(C, !0)
        };
      }
    };
    return x;
  };
}
function gD(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var Pl = /* @__PURE__ */ mD();
function hD() {
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
function bD({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, s;
  if ("reducer" in r) {
    if (n && !vD(r))
      throw new Error(Be(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? Et(e, s) : Et(e));
}
function yD(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function vD(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function xD({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(Be(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: l,
    settled: c,
    options: u
  } = n, d = o(e, i, u);
  r.exposeAction(t, d), s && r.addCase(d.fulfilled, s), a && r.addCase(d.pending, a), l && r.addCase(d.rejected, l), c && r.addMatcher(d.settled, c), r.exposeCaseReducer(t, {
    fulfilled: s || to,
    pending: a || to,
    rejected: l || to,
    settled: c || to
  });
}
function to() {
}
var wD = (e, t) => {
  if (typeof e != "function")
    throw new Error(Be(32));
}, kl = "listenerMiddleware", SD = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = Et(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(Be(21));
  return wD(i), {
    predicate: o,
    type: t,
    effect: i
  };
}, CD = Object.assign((e) => {
  const {
    type: t,
    predicate: n,
    effect: r
  } = SD(e);
  return {
    id: Kp(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Be(22));
    }
  };
}, {
  withTypes: () => CD
}), DD = Object.assign(Et(`${kl}/add`), {
  withTypes: () => DD
});
Et(`${kl}/removeAll`);
var ID = Object.assign(Et(`${kl}/remove`), {
  withTypes: () => ID
});
function Be(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
class PD {
  constructor(t = {}) {
    je(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    je(this, "securityData", null);
    je(this, "securityWorker");
    je(this, "abortControllers", /* @__PURE__ */ new Map());
    je(this, "customFetch", (...t) => fetch(...t));
    je(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    je(this, "setSecurityData", (t) => {
      this.securityData = t;
    });
    je(this, "contentFormatters", {
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
    je(this, "createAbortSignal", (t) => {
      if (this.abortControllers.has(t)) {
        const r = this.abortControllers.get(t);
        return r ? r.signal : void 0;
      }
      const n = new AbortController();
      return this.abortControllers.set(t, n), n.signal;
    });
    je(this, "abortRequest", (t) => {
      const n = this.abortControllers.get(t);
      n && (n.abort(), this.abortControllers.delete(t));
    });
    je(this, "request", async ({
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
      }).then(async (h) => {
        const g = h;
        g.data = null, g.error = null;
        const y = m ? await h[m]().then((x) => (g.ok ? g.data = x : g.error = x, g)).catch((x) => (g.error = x, g)) : g;
        if (l && this.abortControllers.delete(l), !h.ok)
          throw y;
        return y;
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
class kD extends PD {
  constructor() {
    super(...arguments);
    je(this, "api", {
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
class El extends kD {
  constructor(t) {
    super({ baseUrl: t });
  }
}
const ED = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, TD = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, Ou = (e, t) => {
  e.language = t.payload, Ie.changeLanguage(t.payload);
}, Tl = Et("settings/setSettings"), Yp = Pl({
  name: "settings",
  initialState: TD,
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
    setLanguage: Ou,
    setIncludeTestDictionaries: (e, t) => {
      e.includeTestDictionaries = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(
      Tl,
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
        JSON.stringify(t.bsddApiEnvironment) !== JSON.stringify(n) && (t.bsddApiEnvironment = n), JSON.stringify(t.mainDictionary) !== JSON.stringify(r) && (t.mainDictionary = r), JSON.stringify(t.ifcDictionary) !== JSON.stringify(o) && (t.ifcDictionary = o), JSON.stringify(t.filterDictionaries) !== JSON.stringify(i) && (t.filterDictionaries = i), JSON.stringify(t.language) !== JSON.stringify(s) && Ou(t, { payload: s, type: "setLanguage" }), JSON.stringify(t.includeTestDictionaries) !== JSON.stringify(a) && (t.includeTestDictionaries = a);
      }
    );
  }
}), Jp = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? ED[t] : null;
}, Xp = Kn(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.ifcDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t, n) => {
    const r = [e, t, ...n].filter(Boolean), o = new Map(r.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
);
Kn(
  Xp,
  (e) => e.map((t) => t.ifcClassification.location)
);
const RD = (e) => e.settings.mainDictionary, OD = (e) => e.settings.includeTestDictionaries, {
  setBsddApiEnvironment: LD,
  setMainDictionary: kR,
  setFilterDictionaries: ER,
  setLanguage: $D,
  setIncludeTestDictionaries: jD
} = Yp.actions, AD = Yp.reducer, Ks = 500, ND = 500;
let fn = null, lo = {};
const Lu = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, MD = (e) => {
  const t = Jp(e);
  return t && (!fn || fn.baseUrl !== t) && (fn = new El(t)), fn;
}, Ys = ai("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (!e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new El(e), o = ND;
  let i = 0;
  const s = [];
  return new Promise((a, l) => {
    function c() {
      r.api.dictionaryV1List({ IncludeTestDictionaries: t, Limit: o, Offset: i }).then((u) => {
        u.ok || l(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: d, totalCount: f } = {} } = u;
        if (d && typeof f < "u")
          if (s.push(...d), i += o, s.length >= f) {
            const p = s.reduce((m, h) => (m[h.uri] = h, m), {});
            a(p);
          } else
            c();
        else
          l(new Error(`bSDD API error! status: ${u.status}`));
      });
    }
    c();
  });
});
async function $u(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: Ks,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const Qp = ai(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (lo[e])
      return await lo[e];
    const o = (async () => {
      const i = MD(t());
      if (!i)
        throw new Error("BsddApi is not initialized");
      const s = [];
      let a = 0;
      const l = await $u(i, e, a), c = l.classesTotalCount;
      if (c == null)
        throw new Error("Total count is null or undefined");
      s.push(...l.classes ?? []);
      const u = [];
      for (a = Ks; a < c; a += Ks)
        u.push(
          $u(i, e, a).then((d) => {
            s.push(...d.classes ?? []);
          })
        );
      return await Promise.all(u), n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: s } }), s;
    })();
    return lo[e] = o, o;
  }
), Zp = Pl({
  name: "bsdd",
  initialState: Lu,
  reducers: {
    resetState: () => Lu,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(Ys.pending, (t) => {
      t.loaded = !1;
    }).addCase(Ys.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Qp.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
ai("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
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
  const { data: i } = o;
  return n({ type: "bsdd/addClass", payload: { uri: e, data: i } }), i;
});
const em = (e, t) => e.bsdd.dictionaries[t], _D = (e, t) => e.bsdd.dictionaryClasses[t], tm = (e) => e.bsdd.dictionaries, FD = (e) => e.bsdd.loaded, { resetState: zD } = Zp.actions;
function BD(e) {
  return (t) => {
    fn = new El(e), lo = {}, t(zD());
  };
}
const VD = Zp.reducer;
function Rl(e) {
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
const WD = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = _D(t, e.location);
  if (r)
    return r;
  const o = await n(Qp(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function GD(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function Tn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function HD(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return Tn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await WD(e.referencedSource, n, t);
  if (!r)
    return Tn("Failed to fetch classes for the referencedSource location", e);
  const o = GD(e, r);
  if (!o)
    return Tn(
      "Failed to find a match for the IfcClassificationReference code or name in the classes",
      e
    );
  if (!o.uri)
    return Tn("Failed to find a URI for the matched class", e);
  const { uri: i, code: s, name: a } = o, l = {
    ...e,
    location: i ?? void 0,
    identification: s ?? void 0,
    name: a ?? void 0
  };
  if (!l.referencedSource || !l.referencedSource.location)
    return Tn("referencedSource or its location is missing", l);
  const c = em(n, l.referencedSource.location);
  return c ? (l.referencedSource = Rl(c), {
    ifcClassificationReference: l,
    validationState: "fixed",
    message: null
  }) : Tn("Failed to find a matching dictionary for the matched class", l);
}
function ju(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = em(e, t.ifcClassification.location), r = Rl(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Ol = yh, yt = ah, UD = {
  ifcEntities: null
}, nm = Pl({
  name: "ifcData",
  initialState: UD,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), qD = (e) => e.ifcData.ifcEntities, { setIfcData: KD } = nm.actions;
function YD(e) {
  return e.endsWith("Type") ? e.slice(0, -4) : e;
}
function JD(e, t) {
  return (e ?? "") + ((t !== "NOTDEFINED" && t !== "USERDEFINED" ? t : "") ?? "");
}
function XD(e, t) {
  return {
    type: "IfcClassificationReference",
    identification: JD(e.type, e.predefinedType),
    referencedSource: t
  };
}
async function QD(e, t, n) {
  return (await Promise.all(
    e.map(async (o) => {
      if (o.type === "IfcClassificationReference") {
        const { ifcClassificationReference: i, validationState: s, message: a } = await HD(
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
const ZD = ai(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        var l;
        i.type && (i.type = YD(i.type));
        const s = [
          ...i.hasAssociations || [],
          XD(i, (l = r.settings.ifcDictionary) == null ? void 0 : l.ifcClassification)
        ], a = await QD(s, t, r);
        return { ...i, hasAssociations: a };
      })
    );
    t(KD(o));
  }
), e1 = nm.reducer, Js = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
function t1(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function n1(e, t) {
  const n = t.referencedSource, r = n == null ? void 0 : n.location;
  return r ? r === e : !1;
}
function r1(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return t1(i) && n1(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function o1({ item: e, index: t, setCardColor: n }) {
  var m;
  const { t: r } = Tt(), o = yt(Xp), i = yt(RD), [s, a] = q("grey"), [l, c] = q([]), [u, d] = q([]);
  H(() => {
    function h(g) {
      a(g), n(t, g);
    }
    l.every((g) => g !== null) ? h("green") : l.some((g) => g !== null) ? h("orange") : h("red");
  }, [l, t, n]), H(() => {
    const h = l.map((g) => g !== null ? "green" : "red");
    d(h);
  }, [l]), H(() => {
    c(
      o.map((h) => r1(e, h))
    );
  }, [e, o]);
  function f(h) {
    var x;
    const g = { ...h };
    g.predefinedType === null && (g.predefinedType = ""), console.log("Open bsddSearch", g);
    const y = JSON.stringify(g);
    (x = window == null ? void 0 : window.bsddBridge) == null || x.bsddSearch(y);
  }
  function p(h) {
    var y;
    const g = JSON.stringify(h);
    (y = window == null ? void 0 : window.bsddBridge) == null || y.bsddSelect(g);
  }
  return /* @__PURE__ */ b.jsxs(jn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ b.jsx(vr, { size: "1.5em", color: Js[s] }),
    /* @__PURE__ */ b.jsxs(mn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ b.jsx(mn.Target, { children: /* @__PURE__ */ b.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ b.jsx(Te, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ b.jsxs(mn.Dropdown, { children: [
        /* @__PURE__ */ b.jsxs(Te, { children: [
          r("dictionaryValidationSummaryLabel"),
          ":"
        ] }),
        o.map((h, g) => {
          const y = h.ifcClassification.location || g;
          return /* @__PURE__ */ b.jsxs(jn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
            /* @__PURE__ */ b.jsx(vr, { size: "1em", color: Js[u[g]] }),
            /* @__PURE__ */ b.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ b.jsx(Te, { className: "truncate", children: h.ifcClassification.name }) })
          ] }, y);
        })
      ] })
    ] }),
    /* @__PURE__ */ b.jsx(Nn, { label: r("attachToType"), children: /* @__PURE__ */ b.jsx(
      br,
      {
        radius: "xl",
        onClick: () => f(e),
        disabled: !((m = i == null ? void 0 : i.ifcClassification) != null && m.location),
        children: /* @__PURE__ */ b.jsx(gC, { size: 20 })
      }
    ) }),
    /* @__PURE__ */ b.jsx(Nn, { label: r("selectObjects"), children: /* @__PURE__ */ b.jsx(br, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ b.jsx(hC, { size: 20 }) }) })
  ] });
}
function i1({ category: e, items: t, index: n }) {
  const { t: r } = Tt(), [o, i] = q("grey"), [s, a] = q(new Array(t.length).fill("grey")), l = ee((c, u) => {
    a((d) => {
      const f = [...d];
      return f[c] = u, f;
    });
  }, []);
  return H(() => {
    s.includes("orange") || s.includes("red") && s.includes("green") ? i("orange") : s.every((c) => c === "red") ? i("red") : s.every((c) => c === "green") && i("green");
  }, [s]), /* @__PURE__ */ b.jsxs(ie.Item, { value: n, children: [
    /* @__PURE__ */ b.jsx(ie.Control, { children: /* @__PURE__ */ b.jsxs(jn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ b.jsx(vr, { size: "1.5em", color: Js[o], children: /* @__PURE__ */ b.jsx(Te, { size: "xs", c: "white", children: t.length }) }),
      /* @__PURE__ */ b.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ b.jsx(Te, { className: "truncate", children: e.length > 0 ? e : r("noDescription") }) })
    ] }) }),
    /* @__PURE__ */ b.jsx(ie.Panel, { mt: "-xs", pl: "xl", children: t.map((c, u) => /* @__PURE__ */ b.jsx(o1, { item: c, index: u, setCardColor: l }, u)) })
  ] }, e);
}
function s1(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function a1({ loading: e }) {
  const { t } = Tt(), n = yt(qD), r = Ht(() => n ? Object.entries(s1(n, "description")).map(([s, a], l) => /* @__PURE__ */ b.jsx(i1, { category: s, items: a, index: s || l.toString() }, s)) : [], [n]), o = /* @__PURE__ */ b.jsx(mC, {});
  return /* @__PURE__ */ b.jsx(bt.Panel, { value: "link", children: /* @__PURE__ */ b.jsxs(B, { pos: "relative", style: { height: "100vh" }, children: [
    /* @__PURE__ */ b.jsx(dl, { visible: e || !n }),
    n && r.length === 0 ? /* @__PURE__ */ b.jsxs(Ha, { title: "No entities selected...", icon: o, mt: "xl", children: [
      t("entitySelectionInstruction"),
      /* @__PURE__ */ b.jsx(wr, { h: "md" }),
      t("needHelp"),
      " ",
      /* @__PURE__ */ b.jsx(
        "a",
        {
          href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki",
          target: "_blank",
          rel: "noreferrer",
          children: t("checkDocumentation")
        }
      )
    ] }) : /* @__PURE__ */ b.jsx(ie, { chevronPosition: "left", children: r })
  ] }) });
}
function l1({ id: e }) {
  const { t } = Tt();
  return /* @__PURE__ */ b.jsxs(ie.Item, { value: e.toString(), children: [
    /* @__PURE__ */ b.jsx(ie.Control, { children: /* @__PURE__ */ b.jsx(Sn, { order: 5, children: t("appInfoLabel") }) }),
    /* @__PURE__ */ b.jsxs(ie.Panel, { children: [
      /* @__PURE__ */ b.jsxs($t, { gutter: "md", children: [
        /* @__PURE__ */ b.jsx($t.Col, { span: 3, children: /* @__PURE__ */ b.jsx(Te, { size: "xs", children: "UI App version:" }) }),
        /* @__PURE__ */ b.jsx($t.Col, { span: 6, children: /* @__PURE__ */ b.jsx(Te, { size: "xs", children: vC }) })
      ] }),
      /* @__PURE__ */ b.jsxs($t, { gutter: "md", children: [
        /* @__PURE__ */ b.jsx($t.Col, { span: 3, children: /* @__PURE__ */ b.jsx(Te, { size: "xs", children: "Documentation:" }) }),
        /* @__PURE__ */ b.jsx($t.Col, { span: 6, children: /* @__PURE__ */ b.jsx(Te, { size: "xs", children: /* @__PURE__ */ b.jsx(
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
const rm = "https://identifier.buildingsmart.org/uri/buildingsmart/ifc/", c1 = "Export Type to IFC As";
function Au(e, t) {
  return Object.values(e).find((n) => n.uri === t);
}
function ls(e, t, n = "") {
  if (!e)
    return null;
  const r = t.find((o) => o.ifcClassification.location === e.uri);
  return r || {
    ifcClassification: Rl(e),
    parameterMapping: n
  };
}
const Ll = Kn(
  tm,
  (e) => Object.values(e).map(
    (t) => ({
      value: t.uri,
      label: `${t.name} (${t.version})`
    })
  )
), cs = (e) => e && e.ifcClassification && e.ifcClassification.location ? [
  {
    value: e.ifcClassification.location,
    label: e.ifcClassification.name || ""
  }
] : [], u1 = Kn(
  Ll,
  (e) => e.filter((t) => t.value.startsWith(rm))
), d1 = Kn(
  Ll,
  (e) => e.filter((t) => !t.value.startsWith(rm))
);
function f1({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r,
  setIsLoading: o
}) {
  const { t: i } = Tt(), s = yt(tm), a = yt(Ll), l = yt(u1), c = yt(d1), u = Ht(() => cs(t == null ? void 0 : t.mainDictionary), [t == null ? void 0 : t.mainDictionary]), d = Ht(() => cs(t == null ? void 0 : t.ifcDictionary), [t == null ? void 0 : t.ifcDictionary]), f = Ht(() => (t == null ? void 0 : t.filterDictionaries.filter((g) => g.ifcClassification && g.ifcClassification.location).map(cs).flat()) || [], [t == null ? void 0 : t.filterDictionaries]), p = ee(
    (g) => {
      const y = g[0], x = Au(Object.values(s), y) || null, w = ls(
        x,
        t.mainDictionary ? [t.mainDictionary] : []
      ), v = t.filterDictionaries.filter(
        (S) => S.ifcClassification.location !== y
      );
      n({
        ...t,
        mainDictionary: w || null,
        filterDictionaries: v
      }), r(!0);
    },
    [s, t, n, r]
  ), m = ee(
    (g) => {
      var C;
      const y = g[0], x = Au(Object.values(s), y) || null, w = ((C = t.ifcDictionary) == null ? void 0 : C.parameterMapping) || c1, v = ls(
        x,
        t.ifcDictionary ? [t.ifcDictionary] : [],
        w
      ), S = t.filterDictionaries.filter(
        (I) => I.ifcClassification.location !== y
      );
      n({
        ...t,
        ifcDictionary: v || null,
        filterDictionaries: S
      }), r(!0);
    },
    [s, t, n, r]
  ), h = ee(
    (g) => {
      const y = Object.values(s).filter((S) => g.includes(S.uri)).map((S) => ls(S, (t == null ? void 0 : t.filterDictionaries) || [])).filter(
        (S) => {
          var C, I;
          return S !== null && S.ifcClassification.location !== ((C = t == null ? void 0 : t.mainDictionary) == null ? void 0 : C.ifcClassification.location) && S.ifcClassification.location !== ((I = t == null ? void 0 : t.ifcDictionary) == null ? void 0 : I.ifcClassification.location);
        }
      ), x = (S, C) => {
        var I;
        return S && g.includes((I = S[0]) == null ? void 0 : I.value) ? null : C;
      }, w = x(u, t == null ? void 0 : t.mainDictionary), v = x(d, t == null ? void 0 : t.ifcDictionary);
      n({
        ...t,
        mainDictionary: w || null,
        ifcDictionary: v || null,
        filterDictionaries: y
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
  return H(() => {
    a.length !== 0 && o(!1);
  }, [a, o]), /* @__PURE__ */ b.jsxs(ie.Item, { value: e.toString(), children: [
    /* @__PURE__ */ b.jsxs(ie.Control, { children: [
      /* @__PURE__ */ b.jsx(Sn, { order: 5, children: i("dictionarySelectionLabel") }),
      /* @__PURE__ */ b.jsx(Te, { size: "xs", c: "dimmed", children: i("dictionarySelectionInstruction") })
    ] }),
    /* @__PURE__ */ b.jsxs(ie.Panel, { children: [
      /* @__PURE__ */ b.jsx(
        dr,
        {
          id: "mainDictionary",
          label: i("selectMainDictionary"),
          value: u.map((g) => g.value),
          onChange: p,
          placeholder: "Select main dictionary",
          data: c,
          maxValues: 1,
          searchable: !0,
          clearable: !0
        },
        "mainDictionary-select"
      ),
      /* @__PURE__ */ b.jsx(wr, { h: "xs" }),
      /* @__PURE__ */ b.jsx(
        dr,
        {
          id: "ifcDictionary",
          label: i("Selection IFC dictionary"),
          value: d.map((g) => g.value),
          onChange: m,
          placeholder: "Select filter dictionaries",
          data: l,
          maxValues: 1,
          searchable: !0,
          clearable: !0
        },
        "ifcDictionary-select"
      ),
      /* @__PURE__ */ b.jsx(wr, { h: "xs" }),
      /* @__PURE__ */ b.jsx(
        dr,
        {
          id: "filterDictionaries",
          label: i("selectFilterDictionaries"),
          value: f.map((g) => g.value),
          onChange: h,
          placeholder: "Select filter dictionaries",
          data: c,
          searchable: !0,
          clearable: !0
        },
        "filterDictionaries-select"
      )
    ] })
  ] }, e);
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function p1(e, t) {
  if (Dr(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Dr(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m1(e) {
  var t = p1(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function g1(e, t, n) {
  return (t = m1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Nu(e, t) {
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
    t % 2 ? Nu(Object(n), !0).forEach(function(r) {
      g1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var _u = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), us = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, Fu = {
  INIT: "@@redux/INIT" + us(),
  REPLACE: "@@redux/REPLACE" + us(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + us();
  }
};
function h1(e) {
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
  var o = e, i = t, s = [], a = s, l = !1;
  function c() {
    a === s && (a = s.slice());
  }
  function u() {
    if (l)
      throw new Error(Fe(3));
    return i;
  }
  function d(h) {
    if (typeof h != "function")
      throw new Error(Fe(4));
    if (l)
      throw new Error(Fe(5));
    var g = !0;
    return c(), a.push(h), function() {
      if (g) {
        if (l)
          throw new Error(Fe(6));
        g = !1, c();
        var x = a.indexOf(h);
        a.splice(x, 1), s = null;
      }
    };
  }
  function f(h) {
    if (!h1(h))
      throw new Error(Fe(7));
    if (typeof h.type > "u")
      throw new Error(Fe(8));
    if (l)
      throw new Error(Fe(9));
    try {
      l = !0, i = o(i, h);
    } finally {
      l = !1;
    }
    for (var g = s = a, y = 0; y < g.length; y++) {
      var x = g[y];
      x();
    }
    return h;
  }
  function p(h) {
    if (typeof h != "function")
      throw new Error(Fe(10));
    o = h, f({
      type: Fu.REPLACE
    });
  }
  function m() {
    var h, g = d;
    return h = {
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
        var v = g(w);
        return {
          unsubscribe: v
        };
      }
    }, h[_u] = function() {
      return this;
    }, h;
  }
  return f({
    type: Fu.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[_u] = m, r;
}
function zu(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Bu(e, t) {
  if (typeof e == "function")
    return zu(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Fe(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = zu(o, t));
  }
  return n;
}
function im() {
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
function b1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function(r) {
    return function() {
      var o = r.apply(void 0, arguments), i = function() {
        throw new Error(Fe(15));
      }, s = {
        getState: o.getState,
        dispatch: function() {
          return i.apply(void 0, arguments);
        }
      }, a = t.map(function(l) {
        return l(s);
      });
      return i = im.apply(void 0, a)(o.dispatch), Mu(Mu({}, o), {}, {
        dispatch: i
      });
    };
  };
}
var sm = { exports: {} }, am = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n = Q;
function y1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var v1 = typeof Object.is == "function" ? Object.is : y1, x1 = _n.useState, w1 = _n.useEffect, S1 = _n.useLayoutEffect, C1 = _n.useDebugValue;
function D1(e, t) {
  var n = t(), r = x1({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return S1(function() {
    o.value = n, o.getSnapshot = t, ds(o) && i({ inst: o });
  }, [e, n, t]), w1(function() {
    return ds(o) && i({ inst: o }), e(function() {
      ds(o) && i({ inst: o });
    });
  }, [e]), C1(n), n;
}
function ds(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !v1(e, n);
  } catch {
    return !0;
  }
}
function I1(e, t) {
  return t();
}
var P1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? I1 : D1;
am.useSyncExternalStore = _n.useSyncExternalStore !== void 0 ? _n.useSyncExternalStore : P1;
sm.exports = am;
var lm = sm.exports, k1 = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li = Q, E1 = lm;
function T1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var R1 = typeof Object.is == "function" ? Object.is : T1, O1 = E1.useSyncExternalStore, L1 = li.useRef, $1 = li.useEffect, j1 = li.useMemo, A1 = li.useDebugValue;
k1.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = L1(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = j1(function() {
    function l(p) {
      if (!c) {
        if (c = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, R1(u, p))
        return m;
      var h = r(p);
      return o !== void 0 && o(m, h) ? m : (u = p, d = h);
    }
    var c = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, o]);
  var a = O1(e, i[0], i[1]);
  return $1(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), A1(a), a;
};
function N1(e) {
  e();
}
let cm = N1;
const M1 = (e) => cm = e, _1 = () => cm, Vu = Symbol.for("react-redux-context"), Wu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function F1() {
  var e;
  if (!k.createContext)
    return {};
  const t = (e = Wu[Vu]) != null ? e : Wu[Vu] = /* @__PURE__ */ new Map();
  let n = t.get(k.createContext);
  return n || (n = k.createContext(null), t.set(k.createContext, n)), n;
}
const um = /* @__PURE__ */ F1(), z1 = () => {
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
var we = typeof Symbol == "function" && Symbol.for, $l = we ? Symbol.for("react.element") : 60103, jl = we ? Symbol.for("react.portal") : 60106, ci = we ? Symbol.for("react.fragment") : 60107, ui = we ? Symbol.for("react.strict_mode") : 60108, di = we ? Symbol.for("react.profiler") : 60114, fi = we ? Symbol.for("react.provider") : 60109, pi = we ? Symbol.for("react.context") : 60110, Al = we ? Symbol.for("react.async_mode") : 60111, mi = we ? Symbol.for("react.concurrent_mode") : 60111, gi = we ? Symbol.for("react.forward_ref") : 60112, hi = we ? Symbol.for("react.suspense") : 60113, B1 = we ? Symbol.for("react.suspense_list") : 60120, bi = we ? Symbol.for("react.memo") : 60115, yi = we ? Symbol.for("react.lazy") : 60116, V1 = we ? Symbol.for("react.block") : 60121, W1 = we ? Symbol.for("react.fundamental") : 60117, G1 = we ? Symbol.for("react.responder") : 60118, H1 = we ? Symbol.for("react.scope") : 60119;
function et(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $l:
        switch (e = e.type, e) {
          case Al:
          case mi:
          case ci:
          case di:
          case ui:
          case hi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case pi:
              case gi:
              case yi:
              case bi:
              case fi:
                return e;
              default:
                return t;
            }
        }
      case jl:
        return t;
    }
  }
}
function fm(e) {
  return et(e) === mi;
}
ne.AsyncMode = Al;
ne.ConcurrentMode = mi;
ne.ContextConsumer = pi;
ne.ContextProvider = fi;
ne.Element = $l;
ne.ForwardRef = gi;
ne.Fragment = ci;
ne.Lazy = yi;
ne.Memo = bi;
ne.Portal = jl;
ne.Profiler = di;
ne.StrictMode = ui;
ne.Suspense = hi;
ne.isAsyncMode = function(e) {
  return fm(e) || et(e) === Al;
};
ne.isConcurrentMode = fm;
ne.isContextConsumer = function(e) {
  return et(e) === pi;
};
ne.isContextProvider = function(e) {
  return et(e) === fi;
};
ne.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $l;
};
ne.isForwardRef = function(e) {
  return et(e) === gi;
};
ne.isFragment = function(e) {
  return et(e) === ci;
};
ne.isLazy = function(e) {
  return et(e) === yi;
};
ne.isMemo = function(e) {
  return et(e) === bi;
};
ne.isPortal = function(e) {
  return et(e) === jl;
};
ne.isProfiler = function(e) {
  return et(e) === di;
};
ne.isStrictMode = function(e) {
  return et(e) === ui;
};
ne.isSuspense = function(e) {
  return et(e) === hi;
};
ne.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ci || e === mi || e === di || e === ui || e === hi || e === B1 || typeof e == "object" && e !== null && (e.$$typeof === yi || e.$$typeof === bi || e.$$typeof === fi || e.$$typeof === pi || e.$$typeof === gi || e.$$typeof === W1 || e.$$typeof === G1 || e.$$typeof === H1 || e.$$typeof === V1);
};
ne.typeOf = et;
dm.exports = ne;
var U1 = dm.exports, Nl = U1, q1 = {
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
}, K1 = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Y1 = {
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
}, Ml = {};
Ml[Nl.ForwardRef] = Y1;
Ml[Nl.Memo] = pm;
function Gu(e) {
  return Nl.isMemo(e) ? pm : Ml[e.$$typeof] || q1;
}
var J1 = Object.defineProperty, X1 = Object.getOwnPropertyNames, Hu = Object.getOwnPropertySymbols, Q1 = Object.getOwnPropertyDescriptor, Z1 = Object.getPrototypeOf, Uu = Object.prototype;
function mm(e, t, n) {
  if (typeof t != "string") {
    if (Uu) {
      var r = Z1(t);
      r && r !== Uu && mm(e, r, n);
    }
    var o = X1(t);
    Hu && (o = o.concat(Hu(t)));
    for (var i = Gu(e), s = Gu(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!K1[l] && !(n && n[l]) && !(s && s[l]) && !(i && i[l])) {
        var c = Q1(t, l);
        try {
          J1(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var eI = mm;
const qu = /* @__PURE__ */ Pd(eI);
var gm = { exports: {} }, re = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l = Symbol.for("react.element"), Fl = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), xi = Symbol.for("react.strict_mode"), wi = Symbol.for("react.profiler"), Si = Symbol.for("react.provider"), Ci = Symbol.for("react.context"), tI = Symbol.for("react.server_context"), Di = Symbol.for("react.forward_ref"), Ii = Symbol.for("react.suspense"), Pi = Symbol.for("react.suspense_list"), ki = Symbol.for("react.memo"), Ei = Symbol.for("react.lazy"), nI = Symbol.for("react.offscreen"), hm;
hm = Symbol.for("react.module.reference");
function dt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case _l:
        switch (e = e.type, e) {
          case vi:
          case wi:
          case xi:
          case Ii:
          case Pi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case tI:
              case Ci:
              case Di:
              case Ei:
              case ki:
              case Si:
                return e;
              default:
                return t;
            }
        }
      case Fl:
        return t;
    }
  }
}
re.ContextConsumer = Ci;
re.ContextProvider = Si;
re.Element = _l;
re.ForwardRef = Di;
re.Fragment = vi;
re.Lazy = Ei;
re.Memo = ki;
re.Portal = Fl;
re.Profiler = wi;
re.StrictMode = xi;
re.Suspense = Ii;
re.SuspenseList = Pi;
re.isAsyncMode = function() {
  return !1;
};
re.isConcurrentMode = function() {
  return !1;
};
re.isContextConsumer = function(e) {
  return dt(e) === Ci;
};
re.isContextProvider = function(e) {
  return dt(e) === Si;
};
re.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _l;
};
re.isForwardRef = function(e) {
  return dt(e) === Di;
};
re.isFragment = function(e) {
  return dt(e) === vi;
};
re.isLazy = function(e) {
  return dt(e) === Ei;
};
re.isMemo = function(e) {
  return dt(e) === ki;
};
re.isPortal = function(e) {
  return dt(e) === Fl;
};
re.isProfiler = function(e) {
  return dt(e) === wi;
};
re.isStrictMode = function(e) {
  return dt(e) === xi;
};
re.isSuspense = function(e) {
  return dt(e) === Ii;
};
re.isSuspenseList = function(e) {
  return dt(e) === Pi;
};
re.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vi || e === wi || e === xi || e === Ii || e === Pi || e === nI || typeof e == "object" && e !== null && (e.$$typeof === Ei || e.$$typeof === ki || e.$$typeof === Si || e.$$typeof === Ci || e.$$typeof === Di || e.$$typeof === hm || e.getModuleId !== void 0);
};
re.typeOf = dt;
gm.exports = re;
var rI = gm.exports;
const oI = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function iI(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, l, c, u, d, f;
  function p(x, w) {
    return l = x, c = w, u = e(l, c), d = t(r, c), f = n(u, d, c), a = !0, f;
  }
  function m() {
    return u = e(l, c), t.dependsOnOwnProps && (d = t(r, c)), f = n(u, d, c), f;
  }
  function h() {
    return e.dependsOnOwnProps && (u = e(l, c)), t.dependsOnOwnProps && (d = t(r, c)), f = n(u, d, c), f;
  }
  function g() {
    const x = e(l, c), w = !s(x, u);
    return u = x, w && (f = n(u, d, c)), f;
  }
  function y(x, w) {
    const v = !i(w, c), S = !o(x, l, w, c);
    return l = x, c = w, v && S ? m() : v ? h() : S ? g() : f;
  }
  return function(w, v) {
    return a ? y(w, v) : p(w, v);
  };
}
function sI(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = Cp(t, oI);
  const s = n(e, i), a = r(e, i), l = o(e, i);
  return iI(s, a, l, e, i);
}
function aI(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function Xs(e) {
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
function bm(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, l) {
      return i.dependsOnOwnProps ? i.mapToProps(a, l) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Ku(e);
      let c = i(a, l);
      return typeof c == "function" && (i.mapToProps = c, i.dependsOnOwnProps = Ku(c), c = i(a, l)), c;
    }, i;
  };
}
function zl(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function lI(e) {
  return e && typeof e == "object" ? Xs((t) => (
    // @ts-ignore
    aI(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    bm(e)
  ) : zl(e, "mapDispatchToProps") : Xs((t) => ({
    dispatch: t
  }));
}
function cI(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    bm(e)
  ) : zl(e, "mapStateToProps") : Xs(() => ({}));
}
function uI(e, t, n) {
  return Ut({}, n, e, t);
}
function dI(e) {
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
function fI(e) {
  return e ? typeof e == "function" ? dI(e) : zl(e, "mergeProps") : () => uI;
}
function pI() {
  const e = _1();
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
const Yu = {
  notify() {
  },
  get: () => []
};
function ym(e, t) {
  let n, r = Yu, o = 0, i = !1;
  function s(h) {
    u();
    const g = r.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, g(), d());
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
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = pI());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Yu);
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
const mI = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Oo = mI ? k.useLayoutEffect : k.useEffect;
function Ju(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function fs(e, t) {
  if (Ju(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !Ju(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const gI = ["reactReduxForwardedRef"];
let vm = z1;
const hI = (e) => {
  vm = e;
}, bI = [null, null];
function yI(e, t, n) {
  Oo(() => e(...t), n);
}
function vI(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function xI(e, t, n, r, o, i, s, a, l, c, u) {
  if (!e)
    return () => {
    };
  let d = !1, f = null;
  const p = () => {
    if (d || !a.current)
      return;
    const h = t.getState();
    let g, y;
    try {
      g = r(h, o.current);
    } catch (x) {
      y = x, f = x;
    }
    y || (f = null), g === i.current ? s.current || c() : (i.current = g, l.current = g, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function wI(e, t) {
  return e === t;
}
function xm(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = wI,
  areOwnPropsEqual: i = fs,
  areStatePropsEqual: s = fs,
  areMergedPropsEqual: a = fs,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: c = um
} = {}) {
  const u = c, d = cI(e), f = lI(t), p = fI(n), m = !!e;
  return (g) => {
    const y = g.displayName || g.name || "Component", x = `Connect(${y})`, w = {
      shouldHandleStateChanges: m,
      displayName: x,
      wrappedComponentName: y,
      WrappedComponent: g,
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
    function v(I) {
      const [D, T, $] = k.useMemo(() => {
        const {
          reactReduxForwardedRef: me
        } = I, ge = Cp(I, gI);
        return [I.context, me, ge];
      }, [I]), A = k.useMemo(() => D && D.Consumer && // @ts-ignore
      rI.isContextConsumer(/* @__PURE__ */ k.createElement(D.Consumer, null)) ? D : u, [D, u]), F = k.useContext(A), W = !!I.store && !!I.store.getState && !!I.store.dispatch, R = !!F && !!F.store, j = W ? I.store : F.store, P = R ? F.getServerState : j.getState, O = k.useMemo(() => sI(j.dispatch, w), [j]), [L, z] = k.useMemo(() => {
        if (!m)
          return bI;
        const me = ym(j, W ? void 0 : F.subscription), ge = me.notifyNestedSubs.bind(me);
        return [me, ge];
      }, [j, W, F]), M = k.useMemo(() => W ? F : Ut({}, F, {
        subscription: L
      }), [W, F, L]), K = k.useRef(), Z = k.useRef($), se = k.useRef(), he = k.useRef(!1);
      k.useRef(!1);
      const oe = k.useRef(!1), le = k.useRef();
      Oo(() => (oe.current = !0, () => {
        oe.current = !1;
      }), []);
      const pe = k.useMemo(() => () => se.current && $ === Z.current ? se.current : O(j.getState(), $), [j, $]), $e = k.useMemo(() => (ge) => L ? xI(
        m,
        j,
        L,
        // @ts-ignore
        O,
        Z,
        K,
        he,
        oe,
        se,
        z,
        ge
      ) : () => {
      }, [L]);
      yI(vI, [Z, K, he, $, se, z]);
      let ae;
      try {
        ae = vm(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          $e,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          pe,
          P ? () => O(P(), $) : pe
        );
      } catch (me) {
        throw le.current && (me.message += `
The error may be correlated with this previous error:
${le.current.stack}

`), me;
      }
      Oo(() => {
        le.current = void 0, se.current = void 0, K.current = ae;
      });
      const Se = k.useMemo(() => (
        // @ts-ignore
        /* @__PURE__ */ k.createElement(g, Ut({}, ae, {
          ref: T
        }))
      ), [T, g, ae]);
      return k.useMemo(() => m ? /* @__PURE__ */ k.createElement(A.Provider, {
        value: M
      }, Se) : Se, [A, Se, M]);
    }
    const C = k.memo(v);
    if (C.WrappedComponent = g, C.displayName = v.displayName = x, l) {
      const D = k.forwardRef(function($, A) {
        return /* @__PURE__ */ k.createElement(C, Ut({}, $, {
          reactReduxForwardedRef: A
        }));
      });
      return D.displayName = x, D.WrappedComponent = g, qu(D, g);
    }
    return qu(C, g);
  };
}
function SI({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = k.useMemo(() => {
    const c = ym(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = k.useMemo(() => e.getState(), [e]);
  Oo(() => {
    const {
      subscription: c
    } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || um;
  return /* @__PURE__ */ k.createElement(l.Provider, {
    value: s
  }, n);
}
hI(lm.useSyncExternalStore);
M1(Bg);
function CI(e, t) {
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
  })[0], r = V(!0), o = V(n), i = r.current || !!(t && o.current.inputs && CI(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return H(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function DI(e, t) {
  return wm(function() {
    return e;
  }, t);
}
var X = wm, G = DI, II = !0, ps = "Invariant failed";
function PI(e, t) {
  if (!e) {
    if (II)
      throw new Error(ps);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(ps, ": ").concat(n) : ps;
    throw new Error(r);
  }
}
var vt = function(t) {
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
}, Bl = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Xu = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, kI = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, ms = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Vl = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? ms : r, i = t.border, s = i === void 0 ? ms : i, a = t.padding, l = a === void 0 ? ms : a, c = vt(Bl(n, o)), u = vt(Xu(n, s)), d = vt(Xu(u, l));
  return {
    marginBox: c,
    borderBox: vt(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: l
  };
}, nt = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && PI(!1), o;
}, EI = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, Lo = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = kI(r, n);
  return Vl({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, $o = function(t, n) {
  return n === void 0 && (n = EI()), Lo(t, n);
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
  }, i = {
    top: nt(n.borderTopWidth),
    right: nt(n.borderRightWidth),
    bottom: nt(n.borderBottomWidth),
    left: nt(n.borderLeftWidth)
  };
  return Vl({
    borderBox: t,
    margin: r,
    padding: o,
    border: i
  });
}, Cm = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Sm(n, r);
}, Qu = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function TI(e, t) {
  return !!(e === t || Qu(e) && Qu(t));
}
function RI(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!TI(e[n], t[n]))
      return !1;
  return !0;
}
function ve(e, t) {
  t === void 0 && (t = RI);
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
var OI = function(t) {
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
const Ir = OI;
function Dm(e, t) {
}
Dm.bind(null, "warn");
Dm.bind(null, "error");
function qt() {
}
function LI(e, t) {
  return {
    ...e,
    ...t
  };
}
function rt(e, t, n) {
  const r = t.map((o) => {
    const i = LI(n, o.options);
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
const $I = "Invariant failed";
class jo extends Error {
}
jo.prototype.toString = function() {
  return this.message;
};
function N(e, t) {
  if (!e)
    throw new jo($I);
}
class jI extends Q.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = qt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof jo && n.preventDefault();
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
    if (t instanceof jo) {
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
const AI = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, Ao = (e) => e + 1, NI = (e) => `
  You have lifted an item in position ${Ao(e.source.index)}
`, Im = (e, t) => {
  const n = e.droppableId === t.droppableId, r = Ao(e.index), o = Ao(t.index);
  return n ? `
      You have moved the item from position ${r}
      to position ${o}
    ` : `
    You have moved the item from position ${r}
    in list ${e.droppableId}
    to list ${t.droppableId}
    in position ${o}
  `;
}, Pm = (e, t, n) => t.droppableId === n.droppableId ? `
      The item ${e}
      has been combined with ${n.draggableId}` : `
      The item ${e}
      in list ${t.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `, MI = (e) => {
  const t = e.destination;
  if (t)
    return Im(e.source, t);
  const n = e.combine;
  return n ? Pm(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Zu = (e) => `
  The item has returned to its starting position
  of ${Ao(e.index)}
`, _I = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Zu(e.source)}
    `;
  const t = e.destination, n = e.combine;
  return t ? `
      You have dropped the item.
      ${Im(e.source, t)}
    ` : n ? `
      You have dropped the item.
      ${Pm(e.draggableId, e.source, n)}
    ` : `
    The item has been dropped while not over a drop area.
    ${Zu(e.source)}
  `;
}, FI = {
  dragHandleUsageInstructions: AI,
  onDragStart: NI,
  onDragUpdate: MI,
  onDragEnd: _I
};
var co = FI;
const xe = {
  x: 0,
  y: 0
}, De = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), qe = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), Kt = (e, t) => e.x === t.x && e.y === t.y, Yn = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), bn = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, Pr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), ed = (e, t) => Math.min(...t.map((n) => Pr(e, n))), km = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var zI = (e, t) => {
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
}], BI = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, VI = (e, t) => t ? Wr(e, t.scroll.diff.displacement) : e, WI = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, GI = (e, t) => t && t.shouldClipSubject ? zI(t.pageMarginBox, e) : vt(e);
var Fn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = VI(e.marginBox, r), i = WI(o, n, t), s = GI(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Wl = (e, t) => {
  e.frame || N(!1);
  const n = e.frame, r = qe(t, n.scroll.initial), o = Yn(r), i = {
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
  }, s = Fn({
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
const Em = ve((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Tm = ve((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), Ti = ve((e) => Object.values(e)), HI = ve((e) => Object.values(e));
var Jn = ve((e, t) => HI(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Gl(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function Ri(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var Oi = ve((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), UI = ({
  isMovingForward: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  previousImpact: o
}) => {
  if (!n.isCombineEnabled || !Gl(o))
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
  const c = Oi(t, r);
  if (!l) {
    if (!c.length)
      return null;
    const p = c[c.length - 1];
    return s(p.descriptor.id);
  }
  const u = c.findIndex((p) => p.descriptor.id === l);
  u === -1 && N(!1);
  const d = u - 1;
  if (d < 0)
    return null;
  const f = c[d];
  return s(f.descriptor.id);
}, Xn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const Rm = {
  point: xe,
  value: 0
}, kr = {
  invisible: {},
  visible: {},
  all: []
}, qI = {
  displaced: kr,
  displacedBy: Rm,
  at: null
};
var KI = qI, ot = (e, t) => (n) => e <= n && n <= t, Om = (e) => {
  const t = ot(e.top, e.bottom), n = ot(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const l = r.top < e.top && r.bottom > e.bottom, c = r.left < e.left && r.right > e.right;
    return l && c ? !0 : l && s || c && i;
  };
}, YI = (e) => {
  const t = ot(e.top, e.bottom), n = ot(e.left, e.right);
  return (r) => t(r.top) && t(r.bottom) && n(r.left) && n(r.right);
};
const Hl = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
}, Lm = {
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
var JI = (e) => (t) => {
  const n = ot(t.top, t.bottom), r = ot(t.left, t.right);
  return (o) => e === Hl ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const XI = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : xe;
  return Wr(e, n);
}, QI = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, ZI = (e, t, n) => n(t)(e), Ul = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? XI(e, t) : e;
  return QI(i, t, o) && ZI(i, n, o);
}, eP = (e) => Ul({
  ...e,
  isVisibleThroughFrameFn: Om
}), $m = (e) => Ul({
  ...e,
  isVisibleThroughFrameFn: YI
}), tP = (e) => Ul({
  ...e,
  isVisibleThroughFrameFn: JI(e.destination.axis)
}), nP = (e, t, n) => {
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
function rP(e, t) {
  const n = e.page.marginBox, r = {
    top: t.point.y,
    right: 0,
    bottom: 0,
    left: t.point.x
  };
  return vt(Bl(n, r));
}
function Er({
  afterDragging: e,
  destination: t,
  displacedBy: n,
  viewport: r,
  forceShouldAnimate: o,
  last: i
}) {
  return e.reduce(function(a, l) {
    const c = rP(l, n), u = l.descriptor.id;
    if (a.all.push(u), !eP({
      target: c,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[l.descriptor.id] = !0, a;
    const f = nP(u, i, o), p = {
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
function oP(e, t) {
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
  const o = oP(e, {
    inHomeList: t
  });
  return {
    displaced: kr,
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
function No({
  draggable: e,
  insideDestination: t,
  destination: n,
  viewport: r,
  displacedBy: o,
  last: i,
  index: s,
  forceShouldAnimate: a
}) {
  const l = Xn(e, n);
  if (s == null)
    return nd({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const c = t.find((m) => m.descriptor.index === s);
  if (!c)
    return nd({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const u = Oi(e, t), d = t.indexOf(c), f = u.slice(d);
  return {
    displaced: Er({
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
function en(e, t) {
  return !!t.effected[e];
}
var iP = ({
  isMovingForward: e,
  destination: t,
  draggables: n,
  combine: r,
  afterCritical: o
}) => {
  if (!t.isCombineEnabled)
    return null;
  const i = r.draggableId, a = n[i].descriptor.index;
  return en(i, o) ? e ? a : a - 1 : e ? a + 1 : a;
}, sP = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, l = t ? a : a + 1;
  return i < s || i > l ? null : i;
}, aP = ({
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
  if (c || N(!1), c.type === "REORDER") {
    const d = sP({
      isMovingForward: e,
      isInHomeList: t,
      location: c.destination,
      insideDestination: i
    });
    return d == null ? null : No({
      draggable: n,
      insideDestination: i,
      destination: o,
      viewport: a,
      last: s.displaced,
      displacedBy: s.displacedBy,
      index: d
    });
  }
  const u = iP({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: c.combine,
    afterCritical: l
  });
  return u == null ? null : No({
    draggable: n,
    insideDestination: i,
    destination: o,
    viewport: a,
    last: s.displaced,
    displacedBy: s.displacedBy,
    index: u
  });
}, lP = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return en(n, t) ? o ? xe : Yn(r.point) : o ? r.point : xe;
}, cP = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = Ri(t);
  r || N(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = lP({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return De(i, s);
};
const jm = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, uP = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, ql = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, rd = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => bn(e.line, t.marginBox[e.end] + jm(e, n), ql(e, t.marginBox, n)), od = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => bn(e.line, t.marginBox[e.start] - uP(e, n), ql(e, t.marginBox, n)), dP = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => bn(e.line, t.contentBox[e.start] + jm(e, n), ql(e, t.contentBox, n));
var fP = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Jn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return dP({
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
    if (en(u, o))
      return od({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = Lo(f.page, c.point);
    return od({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (en(d.descriptor.id, o)) {
    const f = Lo(d.page, Yn(o.displacedBy.point));
    return rd({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return rd({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, Qs = (e, t) => {
  const n = e.frame;
  return n ? De(t, n.scroll.diff.displacement) : t;
};
const pP = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? fP({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : cP({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var Li = (e) => {
  const t = pP(e), n = e.droppable;
  return n ? Qs(n, t) : t;
}, Am = (e, t) => {
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
function id(e, t) {
  return e.map((n) => t[n]);
}
function mP(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var gP = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Am(t, De(t.scroll.current, o)), s = n.frame ? Wl(n, De(n.frame.scroll.current, o)) : n, a = e.displaced, l = Er({
    afterDragging: id(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), c = Er({
    afterDragging: id(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, l, c];
  return a.all.forEach((m) => {
    const h = mP(m, f);
    if (h) {
      d[m] = h;
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
}, hP = (e, t) => De(e.scroll.diff.displacement, t), Kl = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = hP(n, e), o = qe(r, t.page.borderBox.center);
  return De(t.client.borderBox.center, o);
}, Nm = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = qe(n, e.page.borderBox.center), l = {
    target: Wr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? tP(l) : $m(l);
}, bP = ({
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
  const c = Jn(n.descriptor.id, r), u = Xn(t, n), d = UI({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: c,
    previousImpact: o
  }) || aP({
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
  const f = Li({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: l
  });
  if (Nm({
    draggable: t,
    destination: n,
    newPageBorderBoxCenter: f,
    viewport: i.frame,
    withDroppableDisplacement: !1,
    onlyOnMainAxis: !0
  }))
    return {
      clientSelection: Kl({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = qe(f, s), h = gP({
    impact: d,
    viewport: i,
    destination: n,
    draggables: r,
    maxScrollChange: m
  });
  return {
    clientSelection: a,
    impact: h,
    scrollJumpRequest: m
  };
};
const Ae = (e) => {
  const t = e.subject.active;
  return t || N(!1), t;
};
var yP = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = ot(i[s.start], i[s.end]), l = Ti(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => Om(o.frame)(Ae(u))).filter((u) => {
    const d = Ae(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = Ae(u), f = ot(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = Ae(u)[s.crossAxisStart], p = Ae(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => Ae(u)[s.crossAxisStart] === Ae(f[0])[s.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const c = l.filter((u) => ot(Ae(u)[s.start], Ae(u)[s.end])(t[s.line]));
  return c.length === 1 ? c[0] : c.length > 1 ? c.sort((u, d) => Ae(u)[s.start] - Ae(d)[s.start])[0] : l.sort((u, d) => {
    const f = ed(t, td(Ae(u))), p = ed(t, td(Ae(d)));
    return f !== p ? f - p : Ae(u)[s.start] - Ae(d)[s.start];
  })[0];
};
const sd = (e, t) => {
  const n = e.page.borderBox.center;
  return en(e.descriptor.id, t) ? qe(n, t.displacedBy.point) : n;
}, vP = (e, t) => {
  const n = e.page.borderBox;
  return en(e.descriptor.id, t) ? Wr(n, Yn(t.displacedBy.point)) : n;
};
var xP = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => $m({
  target: vP(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const l = Pr(e, Qs(n, sd(s, o))), c = Pr(e, Qs(n, sd(a, o)));
  return l < c ? -1 : c < l ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, Gr = ve(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: bn(t.line, r)
  };
});
const wP = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return bn(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], l = Jn(e.descriptor.id, n).reduce((c, u) => c + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return l <= 0 ? null : bn(r.line, l);
}, Mm = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), _m = (e, t, n) => {
  const r = e.frame;
  Xn(t, e) && N(!1), e.subject.withPlaceholder && N(!1);
  const o = Gr(e.axis, t.displaceBy).point, i = wP(e, o, n), s = {
    placeholderSize: o,
    increasedBy: i,
    oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
  };
  if (!r) {
    const u = Fn({
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
  const a = i ? De(r.scroll.max, i) : r.scroll.max, l = Mm(r, a), c = Fn({
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
}, SP = (e) => {
  const t = e.subject.withPlaceholder;
  t || N(!1);
  const n = e.frame;
  if (!n) {
    const s = Fn({
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
  r || N(!1);
  const o = Mm(n, r), i = Fn({
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
var CP = ({
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
      displaced: kr,
      displacedBy: Rm,
      at: {
        type: "REORDER",
        destination: {
          droppableId: i.descriptor.id,
          index: 0
        }
      }
    }, f = Li({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = Xn(r, i) ? i : _m(i, r, o);
    return Nm({
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
  })(), u = Gr(i.axis, r.displaceBy);
  return No({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: kr,
    index: c
  });
}, DP = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const l = yP({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!l)
    return null;
  const c = Jn(l.descriptor.id, o), u = xP({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: l,
    insideDestination: c,
    afterCritical: a
  }), d = CP({
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
  const f = Li({
    impact: d,
    draggable: n,
    droppable: l,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: Kl({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ye = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const IP = (e, t) => {
  const n = Ye(e);
  return n ? t[n] : null;
};
var PP = ({
  state: e,
  type: t
}) => {
  const n = IP(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", c = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? bP({
    isMovingForward: l,
    previousPageBorderBoxCenter: u,
    draggable: c,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : DP({
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
function cn(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Fm(e) {
  const t = ot(e.top, e.bottom), n = ot(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function kP(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function EP({
  pageBorderBox: e,
  draggable: t,
  candidates: n
}) {
  const r = t.page.borderBox.center, o = n.map((i) => {
    const s = i.axis, a = bn(i.axis.line, e.center[s.line], i.page.borderBox.center[s.crossAxisLine]);
    return {
      id: i.descriptor.id,
      distance: Pr(r, a)
    };
  }).sort((i, s) => s.distance - i.distance);
  return o[0] ? o[0].id : null;
}
function TP({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = Ti(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !kP(e, i))
      return !1;
    if (Fm(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], l = e[s.crossAxisStart], c = e[s.crossAxisEnd], u = ot(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(l), f = u(c);
    return !d && !f ? !0 : d ? l < a : c > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : EP({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const zm = (e, t) => vt(Wr(e, t));
var RP = (e, t) => {
  const n = e.frame;
  return n ? zm(t, n.scroll.diff.value) : t;
};
function Bm({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function OP({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var LP = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, l = Gr(n.axis, t.displaceBy), c = l.value, u = e[a.start], d = e[a.end], p = Oi(t, r).find((h) => {
    const g = h.descriptor.id, y = h.page.borderBox.center[a.line], x = en(g, s), w = Bm({
      displaced: o,
      id: g
    });
    return x ? w ? d <= y : u < y - c : w ? d <= y + c : u < y;
  }) || null, m = OP({
    draggable: t,
    closest: p,
    inHomeList: Xn(t, n)
  });
  return No({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: l,
    index: m
  });
};
const $P = 4;
var jP = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = Gr(r.axis, e.displaceBy), l = a.value, c = t[s.start], u = t[s.end], f = Oi(e, o).find((m) => {
    const h = m.descriptor.id, g = m.page.borderBox, x = g[s.size] / $P, w = en(h, i), v = Bm({
      displaced: n.displaced,
      id: h
    });
    return w ? v ? u > g[s.start] + x && u < g[s.end] - x : c > g[s.start] - l + x && c < g[s.end] - l - x : v ? u > g[s.start] + l + x && u < g[s.end] + l - x : c > g[s.start] + x && c < g[s.end] - x;
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
}, Vm = ({
  pageOffset: e,
  draggable: t,
  draggables: n,
  droppables: r,
  previousImpact: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = zm(t.page.borderBox, e), l = TP({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!l)
    return KI;
  const c = r[l], u = Jn(c.descriptor.id, n), d = RP(c, a);
  return jP({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }) || LP({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: c,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, Yl = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const AP = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ye(e), o = Ye(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = SP(i);
  return Yl(n, s);
};
var NP = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = AP({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = Ye(o);
  if (!s)
    return i;
  const a = n[s];
  if (Xn(e, a) || a.subject.withPlaceholder)
    return i;
  const l = _m(a, e, t);
  return Yl(i, l);
}, fr = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, l = t || e.current.client.selection, c = qe(l, e.initial.client.selection), u = {
    offset: c,
    selection: l,
    borderBoxCenter: De(e.initial.client.borderBoxCenter, c)
  }, d = {
    selection: De(u.selection, s.scroll.current),
    borderBoxCenter: De(u.borderBoxCenter, s.scroll.current),
    offset: De(u.offset, s.scroll.diff.value)
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
  const p = a.draggables[e.critical.draggable.id], m = o || Vm({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), h = NP({
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
      droppables: h
    },
    impact: m,
    viewport: s,
    scrollJumpRequest: i || null,
    forceShouldAnimate: i ? !1 : null
  };
};
function MP(e, t) {
  return e.map((n) => t[n]);
}
var Wm = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = MP(i.all, n), a = Er({
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
}, Gm = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  viewport: o,
  afterCritical: i
}) => {
  const s = Li({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return Kl({
    pageBorderBoxCenter: s,
    draggable: t,
    viewport: o
  });
}, Hm = ({
  state: e,
  dimensions: t,
  viewport: n
}) => {
  e.movementMode !== "SNAP" && N(!1);
  const r = e.impact, o = n || e.viewport, i = t || e.dimensions, {
    draggables: s,
    droppables: a
  } = i, l = s[e.critical.draggable.id], c = Ye(r);
  c || N(!1);
  const u = a[c], d = Wm({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Gm({
    impact: d,
    draggable: l,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return fr({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, _P = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), Um = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = Gr(t.axis, e.displaceBy), i = Jn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && N(!1);
  const a = i.slice(s + 1), l = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), c = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
  };
  return {
    impact: {
      displaced: Er({
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
        destination: _P(e.descriptor)
      }
    },
    afterCritical: c
  };
}, FP = (e, t) => ({
  draggables: e.draggables,
  droppables: Yl(e.droppables, t)
}), zP = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = Lo(e.client, t), o = $o(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, BP = (e) => {
  const t = e.frame;
  return t || N(!1), t;
}, VP = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], l = BP(s).scroll.diff.value, c = De(r, l);
    return zP({
      draggable: o,
      offset: c,
      initialWindowScroll: n.scroll.initial
    });
  });
}, WP = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((y) => {
    const x = e.dimensions.droppables[y.droppableId];
    return Wl(x, y.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...Em(n)
  }, o = Tm(VP({
    additions: t.additions,
    updatedDroppables: r,
    viewport: e.viewport
  })), i = {
    ...e.dimensions.draggables,
    ...o
  };
  t.removals.forEach((y) => {
    delete i[y];
  });
  const s = {
    droppables: r,
    draggables: i
  }, a = Ye(e.impact), l = a ? s.droppables[a] : null, c = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = Um({
    draggable: c,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : d, m = Vm({
    pageOffset: e.current.page.offset,
    draggable: s.draggables[e.critical.draggable.id],
    draggables: s.draggables,
    droppables: s.droppables,
    previousImpact: p,
    viewport: e.viewport,
    afterCritical: f
  }), h = {
    ...e,
    phase: "DRAGGING",
    impact: m,
    onLiftImpact: d,
    dimensions: s,
    afterCritical: f,
    forceShouldAnimate: !1
  };
  return e.phase === "COLLECTING" ? h : {
    ...h,
    phase: "DROP_PENDING",
    reason: e.reason,
    isWaiting: !1
  };
};
const Zs = (e) => e.movementMode === "SNAP", gs = (e, t, n) => {
  const r = FP(e.dimensions, t);
  return !Zs(e) || n ? fr({
    state: e,
    dimensions: r
  }) : Hm({
    state: e,
    dimensions: r
  });
};
function hs(e) {
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
var GP = (e = ad, t) => {
  if (t.type === "FLUSH")
    return {
      ...ad,
      shouldFlush: !0
    };
  if (t.type === "INITIAL_PUBLISH") {
    e.phase !== "IDLE" && N(!1);
    const {
      critical: n,
      clientSelection: r,
      viewport: o,
      dimensions: i,
      movementMode: s
    } = t.payload, a = i.draggables[n.draggable.id], l = i.droppables[n.droppable.id], c = {
      selection: r,
      borderBoxCenter: a.client.borderBox.center,
      offset: xe
    }, u = {
      client: c,
      page: {
        selection: De(c.selection, o.scroll.initial),
        borderBoxCenter: De(c.selection, o.scroll.initial),
        offset: De(c.selection, o.scroll.diff.value)
      }
    }, d = Ti(i.droppables).every((h) => !h.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = Um({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && N(!1), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || N(!1), WP({
      state: e,
      published: t.payload
    });
  if (t.type === "MOVE") {
    if (e.phase === "DROP_PENDING")
      return e;
    cn(e) || N(!1);
    const {
      client: n
    } = t.payload;
    return Kt(n, e.current.client.selection) ? e : fr({
      state: e,
      clientSelection: n,
      impact: Zs(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return hs(e);
    cn(e) || N(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Wl(o, r);
    return gs(e, i, !1);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    cn(e) || N(!1);
    const {
      id: n,
      isEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || N(!1), o.isEnabled === r && N(!1);
    const i = {
      ...o,
      isEnabled: r
    };
    return gs(e, i, !0);
  }
  if (t.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (e.phase === "DROP_PENDING")
      return e;
    cn(e) || N(!1);
    const {
      id: n,
      isCombineEnabled: r
    } = t.payload, o = e.dimensions.droppables[n];
    o || N(!1), o.isCombineEnabled === r && N(!1);
    const i = {
      ...o,
      isCombineEnabled: r
    };
    return gs(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    cn(e) || N(!1), e.isWindowScrollAllowed || N(!1);
    const n = t.payload.newScroll;
    if (Kt(e.viewport.scroll.current, n))
      return hs(e);
    const r = Am(e.viewport, n);
    return Zs(e) ? Hm({
      state: e,
      viewport: r
    }) : fr({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!cn(e))
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
    e.phase !== "DRAGGING" && N(!1);
    const n = PP({
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
    return e.phase !== "COLLECTING" && N(!1), {
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
    return e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || N(!1), {
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
const HP = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), UP = (e) => ({
  type: "LIFT",
  payload: e
}), qP = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), KP = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), YP = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), JP = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), XP = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), QP = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), qm = (e) => ({
  type: "MOVE",
  payload: e
}), ZP = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), ek = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), tk = () => ({
  type: "MOVE_UP",
  payload: null
}), nk = () => ({
  type: "MOVE_DOWN",
  payload: null
}), rk = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), ok = () => ({
  type: "MOVE_LEFT",
  payload: null
}), Jl = () => ({
  type: "FLUSH",
  payload: null
}), ik = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), Xl = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Km = (e) => ({
  type: "DROP",
  payload: e
}), sk = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Ym = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var ak = (e) => ({
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
  l.phase === "DROP_ANIMATING" && n(Xl({
    completed: l.completed
  })), t().phase !== "IDLE" && N(!1), n(Jl()), n(HP({
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
  n(qP({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, lk = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const Ql = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
}, Tr = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
}, Jm = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
}, an = `${Jm.outOfTheWay}s ${Ql.outOfTheWay}`, pr = {
  fluid: `opacity ${an}`,
  snap: `transform ${an}, opacity ${an}`,
  drop: (e) => {
    const t = `${e}s ${Ql.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${an}`,
  placeholder: `height ${an}, width ${an}, margin ${an}`
}, ld = (e) => Kt(e, xe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, ea = {
  moveTo: ld,
  drop: (e, t) => {
    const n = ld(e);
    if (n)
      return t ? `${n} scale(${Tr.scale.drop})` : n;
  }
}, {
  minDropTime: ta,
  maxDropTime: Xm
} = Jm, ck = Xm - ta, cd = 1500, uk = 0.6;
var dk = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = Pr(e, t);
  if (r <= 0)
    return ta;
  if (r >= cd)
    return Xm;
  const o = r / cd, i = ta + ck * o, s = n === "CANCEL" ? i * uk : i;
  return Number(s.toFixed(2));
}, fk = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = Ye(e), l = a ? s[a] : null, c = s[t.descriptor.droppableId], u = Gm({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || c,
    viewport: r
  });
  return qe(u, t.client.borderBox.center);
}, pk = ({
  draggables: e,
  reason: t,
  lastImpact: n,
  home: r,
  viewport: o,
  onLiftImpact: i
}) => !n.at || t !== "DROP" ? {
  impact: Wm({
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
    displaced: kr
  },
  didDropInsideDroppable: !0
};
const mk = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(sk({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && N(!1), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || N(!1);
  const a = o.critical, l = o.dimensions, c = l.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = pk({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? Gl(u) : null, p = d ? Ri(u) : null, m = {
    index: a.draggable.index,
    droppableId: a.droppable.id
  }, h = {
    draggableId: c.descriptor.id,
    type: c.descriptor.type,
    source: m,
    reason: i,
    mode: o.movementMode,
    destination: f,
    combine: p
  }, g = fk({
    impact: u,
    draggable: c,
    dimensions: l,
    viewport: o.viewport,
    afterCritical: o.afterCritical
  }), y = {
    critical: o.critical,
    afterCritical: o.afterCritical,
    result: h,
    impact: u
  };
  if (!(!Kt(o.current.client.offset, g) || !!h.combine)) {
    t(Xl({
      completed: y
    }));
    return;
  }
  const w = dk({
    current: o.current.client.offset,
    destination: g,
    reason: i
  });
  t(ik({
    newHomeClientOffset: g,
    dropDuration: w,
    completed: y
  }));
};
var gk = mk, Qm = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function hk(e) {
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
function bk({
  onWindowScroll: e
}) {
  function t() {
    e(Qm());
  }
  const n = Ir(t), r = hk(n);
  let o = qt;
  function i() {
    return o !== qt;
  }
  function s() {
    i() && N(!1), o = rt(window, [r]);
  }
  function a() {
    i() || N(!1), n.cancel(), o(), o = qt;
  }
  return {
    start: s,
    stop: a,
    isActive: i
  };
}
const yk = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", vk = (e) => {
  const t = bk({
    onWindowScroll: (n) => {
      e.dispatch(ZP({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && yk(r) && t.stop(), n(r);
  };
};
var xk = vk, wk = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, Sk = () => {
  const e = [], t = (o) => {
    const i = e.findIndex((a) => a.timerId === o);
    i === -1 && N(!1);
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
const Ck = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, Dk = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, Ik = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, ir = (e, t) => {
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
function bs(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = wk(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var Pk = (e, t) => {
  const n = Sk();
  let r = null;
  const o = (d, f) => {
    r && N(!1), ir("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && N(!1), ir("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(no(d, f));
    });
  }, s = (d, f) => {
    r && N(!1);
    const p = no(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      ir("onDragStart", () => bs(e().onDragStart, p, t, co.onDragStart));
    });
  }, a = (d, f) => {
    const p = Gl(f), m = Ri(f);
    r || N(!1);
    const h = !Ik(d, r.lastCritical);
    h && (r.lastCritical = d);
    const g = !Ck(r.lastLocation, p);
    g && (r.lastLocation = p);
    const y = !Dk(r.lastCombine, m);
    if (y && (r.lastCombine = m), !h && !g && !y)
      return;
    const x = {
      ...no(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      ir("onDragUpdate", () => bs(e().onDragUpdate, x, t, co.onDragUpdate));
    });
  }, l = () => {
    r || N(!1), n.flush();
  }, c = (d) => {
    r || N(!1), r = null, ir("onDragEnd", () => bs(e().onDragEnd, d, t, co.onDragEnd));
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
        ...no(r.lastCritical, r.mode),
        combine: null,
        destination: null,
        reason: "CANCEL"
      };
      c(d);
    }
  };
}, kk = (e, t) => {
  const n = Pk(e, t);
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
const Ek = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && N(!1), e.dispatch(Xl({
    completed: r.completed
  }));
};
var Tk = Ek;
const Rk = (e) => {
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
        e.getState().phase === "DROP_ANIMATING" && e.dispatch(Ym());
      }
    };
    n = requestAnimationFrame(() => {
      n = null, t = rt(window, [s]);
    });
  };
};
var Ok = Rk, Lk = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, $k = (e) => {
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
const jk = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var Ak = (e) => (t) => (n) => (r) => {
  if (jk(r)) {
    e.stop(), n(r);
    return;
  }
  if (r.type === "INITIAL_PUBLISH") {
    n(r);
    const o = t.getState();
    o.phase !== "DRAGGING" && N(!1), e.start(o);
    return;
  }
  n(r), e.scroll(t.getState());
};
const Nk = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Km({
    reason: r.reason
  })));
};
var Mk = Nk;
const _k = im;
var Fk = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => om(GP, _k(b1(lk(n), Lk(e), ak(e), gk, Tk, Ok, Mk, Ak(i), xk, $k(t), kk(r, o))));
const ys = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function zk({
  registry: e,
  callbacks: t
}) {
  let n = ys(), r = null;
  const o = () => {
    r || (t.collectionStarting(), r = requestAnimationFrame(() => {
      r = null;
      const {
        additions: l,
        removals: c,
        modified: u
      } = n, d = Object.keys(l).map((m) => e.draggable.getById(m).getDimension(xe)).sort((m, h) => m.descriptor.index - h.descriptor.index), f = Object.keys(u).map((m) => {
        const g = e.droppable.getById(m).callbacks.getScrollWhileDragging();
        return {
          droppableId: m,
          scroll: g
        };
      }), p = {
        additions: d,
        removals: Object.keys(c),
        modified: f
      };
      n = ys(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = ys());
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
}, eg = () => {
  const e = document.documentElement;
  return e || N(!1), e;
}, tg = () => {
  const e = eg();
  return Zm({
    scrollHeight: e.scrollHeight,
    scrollWidth: e.scrollWidth,
    width: e.clientWidth,
    height: e.clientHeight
  });
}, Bk = () => {
  const e = Qm(), t = tg(), n = e.y, r = e.x, o = eg(), i = o.clientWidth, s = o.clientHeight, a = r + i, l = n + s;
  return {
    frame: vt({
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
        value: xe,
        displacement: xe
      }
    }
  };
}, Vk = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = Bk(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: Tm(a),
      droppables: Em(s)
    },
    critical: e,
    viewport: r
  };
};
function ud(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var Wk = (e, t) => {
  let n = null;
  const r = zk({
    callbacks: {
      publish: t.publishWhileDragging,
      collectionStarting: t.collectionStarting
    },
    registry: e
  }), o = (f, p) => {
    e.droppable.exists(f) || N(!1), n && t.updateDroppableIsEnabled({
      id: f,
      isEnabled: p
    });
  }, i = (f, p) => {
    n && (e.droppable.exists(f) || N(!1), t.updateDroppableIsCombineEnabled({
      id: f,
      isCombineEnabled: p
    }));
  }, s = (f, p) => {
    n && (e.droppable.exists(f) || N(!1), t.updateDroppableScroll({
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
    n || N(!1);
    const p = n.critical.draggable;
    f.type === "ADDITION" && ud(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && ud(e, p, f.value) && r.remove(f.value);
  };
  return {
    updateDroppableIsEnabled: o,
    updateDroppableIsCombineEnabled: i,
    scrollDroppable: a,
    updateDroppableScroll: s,
    startPublishing: (f) => {
      n && N(!1);
      const p = e.draggable.getById(f.draggableId), m = e.droppable.getById(p.descriptor.droppableId), h = {
        draggable: p.descriptor,
        droppable: m.descriptor
      }, g = e.subscribe(c);
      return n = {
        critical: h,
        unsubscribe: g
      }, Vk({
        critical: h,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: l
  };
}, ng = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", Gk = (e) => {
  window.scrollBy(e.x, e.y);
};
const Hk = ve((e) => Ti(e).filter((t) => !(!t.isEnabled || !t.frame))), Uk = (e, t) => Hk(t).find((r) => (r.frame || N(!1), Fm(r.frame.pageMarginBox)(e))) || null;
var qk = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return Uk(e, n);
};
const Rr = {
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
var Kk = (e, t, n = () => Rr) => {
  const r = n(), o = e[t.size] * r.startFromPercentage, i = e[t.size] * r.maxScrollAtPercentage;
  return {
    startScrollingFrom: o,
    maxScrollValueAt: i
  };
}, rg = ({
  startOfRange: e,
  endOfRange: t,
  current: n
}) => {
  const r = t - e;
  return r === 0 ? 0 : (n - e) / r;
}, Zl = 1, Yk = (e, t, n = () => Rr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return Zl;
  const i = 1 - rg({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, Jk = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, c = Date.now() - s;
  if (c >= i)
    return e;
  if (c < o)
    return Zl;
  const u = rg({
    startOfRange: o,
    endOfRange: a,
    current: c
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, dd = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = Yk(e, t, o);
  return i === 0 ? 0 : r ? Math.max(Jk(i, n, o), Zl) : i;
}, fd = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = Kk(e, r, i);
  return t[r.end] < t[r.start] ? dd({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * dd({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, Xk = ({
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
const Qk = km((e) => e === 0 ? 0 : e);
var og = ({
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
  }, a = fd({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Hl,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = fd({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Lm,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = Qk({
    x: l,
    y: a
  });
  if (Kt(c, xe))
    return null;
  const u = Xk({
    container: t,
    subject: n,
    proposedScroll: c
  });
  return u ? Kt(u, xe) ? null : u : null;
};
const Zk = km((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ec = (() => {
  const e = (t, n) => t < 0 ? t : t > n ? t - n : 0;
  return ({
    current: t,
    max: n,
    change: r
  }) => {
    const o = De(t, r), i = {
      x: e(o.x, n.x),
      y: e(o.y, n.y)
    };
    return Kt(i, xe) ? null : i;
  };
})(), ig = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = Zk(n), i = ec({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, tc = (e, t) => ig({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), eE = (e, t) => {
  if (!tc(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return ec({
    current: r,
    max: n,
    change: t
  });
}, nc = (e, t) => {
  const n = e.frame;
  return n ? ig({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, tE = (e, t) => {
  const n = e.frame;
  return !n || !nc(e, t) ? null : ec({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var nE = ({
  viewport: e,
  subject: t,
  center: n,
  dragStartTime: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = og({
    dragStartTime: r,
    container: e.frame,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return s && tc(e, s) ? s : null;
}, rE = ({
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
  const a = og({
    dragStartTime: r,
    container: s.pageMarginBox,
    subject: t,
    center: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
  return a && nc(e, a) ? a : null;
}, pd = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = nE({
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
  const c = qk({
    center: s,
    destination: Ye(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!c)
    return;
  const u = rE({
    dragStartTime: t,
    droppable: c,
    subject: l,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(c.descriptor.id, u);
}, oE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => Rr
}) => {
  const r = Ir(e), o = Ir(t);
  let i = null;
  const s = (c) => {
    i || N(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    pd({
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
      i && N(!1);
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      pd({
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
}, iE = ({
  move: e,
  scrollDroppable: t,
  scrollWindow: n
}) => {
  const r = (a, l) => {
    const c = De(a.current.client.selection, l);
    e({
      client: c
    });
  }, o = (a, l) => {
    if (!nc(a, l))
      return l;
    const c = tE(a, l);
    if (!c)
      return t(a.descriptor.id, l), null;
    const u = qe(l, c);
    return t(a.descriptor.id, u), qe(l, u);
  }, i = (a, l, c) => {
    if (!a || !tc(l, c))
      return c;
    const u = eE(l, c);
    if (!u)
      return n(c), null;
    const d = qe(c, u);
    return n(d), qe(c, d);
  };
  return (a) => {
    const l = a.scrollJumpRequest;
    if (!l)
      return;
    const c = Ye(a.impact);
    c || N(!1);
    const u = o(a.dimensions.droppables[c], l);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, sE = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = oE({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = iE({
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
const zn = "data-rfd", Bn = (() => {
  const e = `${zn}-drag-handle`;
  return {
    base: e,
    draggableId: `${e}-draggable-id`,
    contextId: `${e}-context-id`
  };
})(), na = (() => {
  const e = `${zn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), aE = (() => {
  const e = `${zn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), md = {
  contextId: `${zn}-scroll-container-context-id`
}, lE = (e) => (t) => `[${t}="${e}"]`, sr = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), cE = "pointer-events: none;";
var uE = (e) => {
  const t = lE(e), n = (() => {
    const a = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
    return {
      selector: t(Bn.contextId),
      styles: {
        always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
        resting: a,
        dragging: cE,
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
    selector: t(aE.contextId),
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
    always: sr(s, "always"),
    resting: sr(s, "resting"),
    dragging: sr(s, "dragging"),
    dropAnimating: sr(s, "dropAnimating"),
    userCancel: sr(s, "userCancel")
  };
};
const dE = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Fo : H;
var Je = dE;
const vs = () => {
  const e = document.querySelector("head");
  return e || N(!1), e;
}, gd = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function fE(e, t) {
  const n = X(() => uE(e), [e]), r = V(null), o = V(null), i = G(ve((d) => {
    const f = o.current;
    f || N(!1), f.textContent = d;
  }), []), s = G((d) => {
    const f = r.current;
    f || N(!1), f.textContent = d;
  }, []);
  Je(() => {
    !r.current && !o.current || N(!1);
    const d = gd(t), f = gd(t);
    return r.current = d, o.current = f, d.setAttribute(`${zn}-always`, e), f.setAttribute(`${zn}-dynamic`, e), vs().appendChild(d), vs().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const h = m.current;
        h || N(!1), vs().removeChild(h), m.current = null;
      };
      p(r), p(o);
    };
  }, [t, s, i, n.always, n.resting, e]);
  const a = G(() => i(n.dragging), [i, n.dragging]), l = G((d) => {
    if (d === "DROP") {
      i(n.dropAnimating);
      return;
    }
    i(n.userCancel);
  }, [i, n.dropAnimating, n.userCancel]), c = G(() => {
    o.current && i(n.resting);
  }, [i, n.resting]);
  return X(() => ({
    dragging: a,
    dropping: l,
    resting: c
  }), [a, l, c]);
}
function sg(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var ag = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function $i(e) {
  return e instanceof ag(e).HTMLElement;
}
function pE(e, t) {
  const n = `[${Bn.contextId}="${e}"]`, r = sg(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(Bn.draggableId) === t);
  return !o || !$i(o) ? null : o;
}
function mE(e) {
  const t = V({}), n = V(null), r = V(null), o = V(!1), i = G(function(f, p) {
    const m = {
      id: f,
      focus: p
    };
    return t.current[f] = m, function() {
      const g = t.current;
      g[f] !== m && delete g[f];
    };
  }, []), s = G(function(f) {
    const p = pE(e, f);
    p && p !== document.activeElement && p.focus();
  }, [e]), a = G(function(f, p) {
    n.current === f && (n.current = p);
  }, []), l = G(function() {
    r.current || o.current && (r.current = requestAnimationFrame(() => {
      r.current = null;
      const f = n.current;
      f && s(f);
    }));
  }, [s]), c = G(function(f) {
    n.current = null;
    const p = document.activeElement;
    p && p.getAttribute(Bn.draggableId) === f && (n.current = f);
  }, []);
  return Je(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), X(() => ({
    register: i,
    tryRecordFocus: c,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: a
  }), [i, c, l, a]);
}
function gE() {
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
    return f || N(!1), f;
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
    return f || N(!1), f;
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
function hE() {
  const e = X(gE, []);
  return H(() => function() {
    Q.version.startsWith("16") || Q.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var rc = Q.createContext(null), Mo = () => {
  const e = document.body;
  return e || N(!1), e;
};
const bE = {
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
var yE = bE;
const vE = (e) => `rfd-announcement-${e}`;
function xE(e) {
  const t = X(() => vE(e), [e]), n = V(null);
  return H(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Ut(i.style, yE), Mo().appendChild(i), function() {
      setTimeout(function() {
        const l = Mo();
        l.contains(i) && l.removeChild(i), i === n.current && (n.current = null);
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
let wE = 0;
const lg = {
  separator: "::"
};
function SE(e, t = lg) {
  return X(() => `${e}${t.separator}${wE++}`, [t.separator, e]);
}
function CE(e, t = lg) {
  const n = Q.useId();
  return X(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var oc = "useId" in Q ? CE : SE;
function DE({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function IE({
  contextId: e,
  text: t
}) {
  const n = oc("hidden-text", {
    separator: "-"
  }), r = X(() => DE({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return H(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", Mo().appendChild(i), function() {
      const a = Mo();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var ji = Q.createContext(null);
function cg(e) {
  const t = V(e);
  return H(() => {
    t.current = e;
  }), t;
}
function PE() {
  let e = null;
  function t() {
    return !!e;
  }
  function n(s) {
    return s === e;
  }
  function r(s) {
    e && N(!1);
    const a = {
      abandon: s
    };
    return e = a, a;
  }
  function o() {
    e || N(!1), e = null;
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
function Or(e) {
  return e.phase === "IDLE" || e.phase === "DROP_ANIMATING" ? !1 : e.isDragging;
}
const kE = 9, EE = 13, ic = 27, ug = 32, TE = 33, RE = 34, OE = 35, LE = 36, $E = 37, jE = 38, AE = 39, NE = 40, ME = {
  [EE]: !0,
  [kE]: !0
};
var dg = (e) => {
  ME[e.keyCode] && e.preventDefault();
};
const _E = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var Ai = _E;
const fg = 0, hd = 5;
function FE(e, t) {
  return Math.abs(t.x - e.x) >= hd || Math.abs(t.y - e.y) >= hd;
}
const bd = {
  type: "IDLE"
};
function zE({
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
      if (i !== fg)
        return;
      const l = {
        x: s,
        y: a
      }, c = n();
      if (c.type === "DRAGGING") {
        o.preventDefault(), c.actions.move(l);
        return;
      }
      c.type !== "PENDING" && N(!1);
      const u = c.point;
      if (!FE(u, l))
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
      if (o.keyCode === ic) {
        o.preventDefault(), e();
        return;
      }
      dg(o);
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
      if (i.type === "IDLE" && N(!1), i.actions.shouldRespectForcePress()) {
        e();
        return;
      }
      o.preventDefault();
    }
  }, {
    eventName: Ai,
    fn: e
  }];
}
function BE(e) {
  const t = V(bd), n = V(qt), r = X(() => ({
    eventName: "mousedown",
    fn: function(d) {
      if (d.defaultPrevented || d.button !== fg || d.ctrlKey || d.metaKey || d.shiftKey || d.altKey)
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
  }), [e]), o = X(() => ({
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
    n.current = rt(window, [o, r], d);
  }, [o, r]), s = G(() => {
    t.current.type !== "IDLE" && (t.current = bd, n.current(), i());
  }, [i]), a = G(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), l = G(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = zE({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = rt(window, f, d);
  }, [a, s]), c = G(function(d, f) {
    t.current.type !== "IDLE" && N(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, l();
  }, [l]);
  Je(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function VE() {
}
const WE = {
  [RE]: !0,
  [TE]: !0,
  [LE]: !0,
  [OE]: !0
};
function GE(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === ic) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === ug) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === NE) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === jE) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === AE) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === $E) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (WE[o.keyCode]) {
        o.preventDefault();
        return;
      }
      dg(o);
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
    eventName: Ai,
    fn: n
  }];
}
function HE(e) {
  const t = V(VE), n = X(() => ({
    eventName: "keydown",
    fn: function(i) {
      if (i.defaultPrevented || i.keyCode !== ug)
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
        l || N(!1), l = !1, t.current(), r();
      }
      t.current = rt(window, GE(c, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = G(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = rt(window, [n], i);
  }, [n]);
  Je(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const xs = {
  type: "IDLE"
}, UE = 120, qE = 0.15;
function KE({
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
      n.keyCode === ic && n.preventDefault(), e();
    }
  }, {
    eventName: Ai,
    fn: e
  }];
}
function YE({
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
      o.type === "IDLE" && N(!1);
      const i = r.touches[0];
      if (!i || !(i.force >= qE))
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
    eventName: Ai,
    fn: e
  }];
}
function JE(e) {
  const t = V(xs), n = V(qt), r = G(function() {
    return t.current;
  }, []), o = G(function(p) {
    t.current = p;
  }, []), i = X(() => ({
    eventName: "touchstart",
    fn: function(p) {
      if (p.defaultPrevented)
        return;
      const m = e.findClosestDraggableId(p);
      if (!m)
        return;
      const h = e.tryGetLock(m, a, {
        sourceEvent: p
      });
      if (!h)
        return;
      const g = p.touches[0], {
        clientX: y,
        clientY: x
      } = g, w = {
        x: y,
        y: x
      };
      n.current(), d(h, w);
    }
  }), [e]), s = G(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = rt(window, [i], p);
  }, [i]), a = G(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(xs), n.current(), s());
  }, [s, o]), l = G(() => {
    const f = t.current;
    a(), f.type === "DRAGGING" && f.actions.cancel({
      shouldBlockNextClick: !0
    }), f.type === "PENDING" && f.actions.abort();
  }, [a]), c = G(function() {
    const p = {
      capture: !0,
      passive: !1
    }, m = {
      cancel: l,
      completed: a,
      getPhase: r
    }, h = rt(window, YE(m), p), g = rt(window, KE(m), p);
    n.current = function() {
      h(), g();
    };
  }, [l, r, a]), u = G(function() {
    const p = r();
    p.type !== "PENDING" && N(!1);
    const m = p.actions.fluidLift(p.point);
    o({
      type: "DRAGGING",
      actions: m,
      hasMoved: !1
    });
  }, [r, o]), d = G(function(p, m) {
    r().type !== "IDLE" && N(!1);
    const h = setTimeout(u, UE);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: h
    }), c();
  }, [c, r, o, u]);
  Je(function() {
    return s(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(xs));
    };
  }, [r, s, o]), Je(function() {
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
const XE = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function pg(e, t) {
  if (t == null)
    return !1;
  if (XE.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : pg(e, t.parentElement);
}
function QE(e, t) {
  const n = t.target;
  return $i(n) ? pg(e, n) : !1;
}
var ZE = (e) => vt(e.getBoundingClientRect()).center;
function eT(e) {
  return e instanceof ag(e).Element;
}
const tT = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function mg(e, t) {
  return e == null ? null : e[tT](t) ? e : mg(e.parentElement, t);
}
function nT(e, t) {
  return e.closest ? e.closest(t) : mg(e, t);
}
function rT(e) {
  return `[${Bn.contextId}="${e}"]`;
}
function oT(e, t) {
  const n = t.target;
  if (!eT(n))
    return null;
  const r = rT(e), o = nT(n, r);
  return !o || !$i(o) ? null : o;
}
function iT(e, t) {
  const n = oT(e, t);
  return n ? n.getAttribute(Bn.draggableId) : null;
}
function sT(e, t) {
  const n = `[${na.contextId}="${e}"]`, o = sg(document, n).find((i) => i.getAttribute(na.id) === t);
  return !o || !$i(o) ? null : o;
}
function aT(e) {
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
function gg({
  lockAPI: e,
  store: t,
  registry: n,
  draggableId: r
}) {
  if (e.isClaimed())
    return !1;
  const o = n.draggable.findById(r);
  return !(!o || !o.options.isEnabled || !ng(t.getState(), r));
}
function lT({
  lockAPI: e,
  contextId: t,
  store: n,
  registry: r,
  draggableId: o,
  forceSensorStop: i,
  sourceEvent: s
}) {
  if (!gg({
    lockAPI: e,
    store: n,
    registry: r,
    draggableId: o
  }))
    return null;
  const l = r.draggable.getById(o), c = sT(t, l.descriptor.id);
  if (!c || s && !l.options.canDragInteractiveElements && QE(c, s))
    return null;
  const u = e.claim(i || qt);
  let d = "PRE_DRAG";
  function f() {
    return l.options.shouldRespectForcePress;
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
  const h = m.bind(null, "DRAGGING");
  function g(S) {
    function C() {
      e.release(), d = "COMPLETED";
    }
    d !== "PRE_DRAG" && (C(), N(!1)), n.dispatch(UP(S.liftActionArgs)), d = "DRAGGING";
    function I(D, T = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), T.shouldBlockNextClick) {
        const $ = rt(window, [{
          eventName: "click",
          fn: aT,
          options: {
            once: !0,
            passive: !1,
            capture: !0
          }
        }]);
        setTimeout($);
      }
      C(), n.dispatch(Km({
        reason: D
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
      drop: (D) => I("DROP", D),
      cancel: (D) => I("CANCEL", D),
      ...S.actions
    };
  }
  function y(S) {
    const C = Ir((D) => {
      h(() => qm({
        client: D
      }));
    });
    return {
      ...g({
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
      moveUp: () => h(tk),
      moveRight: () => h(rk),
      moveDown: () => h(nk),
      moveLeft: () => h(ok)
    };
    return g({
      liftActionArgs: {
        id: o,
        clientSelection: ZE(c),
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
    fluidLift: y,
    snapLift: x,
    abort: w
  };
}
const cT = [BE, HE, JE];
function uT({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? cT : [], ...r || []], s = q(() => PE())[0], a = G(function(g, y) {
    Or(g) && !Or(y) && s.tryAbandon();
  }, [s]);
  Je(function() {
    let g = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(g, x), g = x;
    });
  }, [s, t, a]), Je(() => s.tryAbandon, [s.tryAbandon]);
  const l = G((h) => gg({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: h
  }), [s, n, t]), c = G((h, g, y) => lT({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: h,
    forceSensorStop: g || null,
    sourceEvent: y && y.sourceEvent ? y.sourceEvent : null
  }), [e, s, n, t]), u = G((h) => iT(e, h), [e]), d = G((h) => {
    const g = n.draggable.findById(h);
    return g ? g.options : null;
  }, [n.draggable]), f = G(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(Jl()));
  }, [s, t]), p = G(() => s.isClaimed(), [s]), m = X(() => ({
    canGetLock: l,
    tryGetLock: c,
    findClosestDraggableId: u,
    findOptionsForDraggable: d,
    tryReleaseLock: f,
    isLockClaimed: p
  }), [l, c, u, d, f, p]);
  for (let h = 0; h < i.length; h++)
    i[h](m);
}
const dT = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    Q.version.startsWith("16") || Q.version.startsWith("17") ? n() : ia(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), fT = (e) => ({
  ...Rr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...Rr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function ar(e) {
  return e.current || N(!1), e.current;
}
function pT(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = V(null), a = cg(e), l = G(() => dT(a.current), [a]), c = G(() => fT(a.current), [a]), u = xE(t), d = IE({
    contextId: t,
    text: i
  }), f = fE(t, o), p = G(($) => {
    ar(s).dispatch($);
  }, []), m = X(() => Bu({
    publishWhileDragging: KP,
    updateDroppableScroll: JP,
    updateDroppableIsEnabled: XP,
    updateDroppableIsCombineEnabled: QP,
    collectionStarting: YP
  }, p), [p]), h = hE(), g = X(() => Wk(h, m), [h, m]), y = X(() => sE({
    scrollWindow: Gk,
    scrollDroppable: g.scrollDroppable,
    getAutoScrollerOptions: c,
    ...Bu({
      move: qm
    }, p)
  }), [g.scrollDroppable, p, c]), x = mE(t), w = X(() => Fk({
    announce: u,
    autoScroller: y,
    dimensionMarshal: g,
    focusMarshal: x,
    getResponders: l,
    styleMarshal: f
  }), [u, y, g, x, l, f]);
  s.current = w;
  const v = G(() => {
    const $ = ar(s);
    $.getState().phase !== "IDLE" && $.dispatch(Jl());
  }, []), S = G(() => {
    const $ = ar(s).getState();
    return $.phase === "DROP_ANIMATING" ? !0 : $.phase === "IDLE" ? !1 : $.isDragging;
  }, []), C = X(() => ({
    isDragging: S,
    tryAbort: v
  }), [S, v]);
  n(C);
  const I = G(($) => ng(ar(s).getState(), $), []), D = G(() => cn(ar(s).getState()), []), T = X(() => ({
    marshal: g,
    focus: x,
    contextId: t,
    canLift: I,
    isMovementAllowed: D,
    dragHandleUsageInstructionsId: d,
    registry: h
  }), [t, g, d, x, I, D, h]);
  return uT({
    contextId: t,
    store: w,
    registry: h,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), H(() => v, [v]), Q.createElement(ji.Provider, {
    value: T
  }, Q.createElement(SI, {
    context: rc,
    store: w
  }, e.children));
}
let mT = 0;
function gT() {
  return X(() => `${mT++}`, []);
}
function hT() {
  return Q.useId();
}
var bT = "useId" in Q ? hT : gT;
function yT(e) {
  const t = bT(), n = e.dragHandleUsageInstructions || co.dragHandleUsageInstructions;
  return Q.createElement(jI, null, (r) => Q.createElement(pT, {
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
const yd = {
  dragging: 5e3,
  dropAnimating: 4500
}, vT = (e, t) => t ? pr.drop(t.duration) : e ? pr.snap : pr.fluid, xT = (e, t) => {
  if (e)
    return t ? Tr.opacity.drop : Tr.opacity.combining;
}, wT = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function ST(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = wT(e), l = !!i, c = l ? ea.drop(r, s) : ea.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: vT(a, i),
    transform: c,
    opacity: xT(s, l),
    zIndex: l ? yd.dropAnimating : yd.dragging,
    pointerEvents: "none"
  };
}
function CT(e) {
  return {
    transform: ea.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function DT(e) {
  return e.type === "DRAGGING" ? ST(e) : CT(e);
}
function IT(e, t, n = xe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = Sm(o, r), s = $o(i, n), a = {
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
function PT(e) {
  const t = oc("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, l = X(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), c = G((p) => {
    const m = o();
    return m || N(!1), IT(n, m, p);
  }, [n, o]), u = X(() => ({
    uniqueId: t,
    descriptor: n,
    options: l,
    getDimension: c
  }), [n, c, l, t]), d = V(u), f = V(!0);
  Je(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), Je(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var sc = Q.createContext(null);
function _o(e) {
  const t = wt(e);
  return t || N(!1), t;
}
function kT(e) {
  e.preventDefault();
}
const ET = (e) => {
  const t = V(null), n = G((C = null) => {
    t.current = C;
  }, []), r = G(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = _o(ji), {
    type: a,
    droppableId: l
  } = _o(sc), c = X(() => ({
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
    isClone: h,
    mapped: g,
    dropAnimationFinished: y
  } = e;
  if (!h) {
    const C = X(() => ({
      descriptor: c,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [c, s, r, m, p, f]);
    PT(C);
  }
  const x = X(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: kT
  } : null, [o, i, d, f]), w = G((C) => {
    g.type === "DRAGGING" && g.dropping && C.propertyName === "transform" && (Q.version.startsWith("16") || Q.version.startsWith("17") ? y() : ia(y));
  }, [y, g]), v = X(() => {
    const C = DT(g), I = g.type === "DRAGGING" && g.dropping ? w : void 0;
    return {
      innerRef: n,
      draggableProps: {
        "data-rfd-draggable-context-id": o,
        "data-rfd-draggable-id": d,
        style: C,
        onTransitionEnd: I
      },
      dragHandleProps: x
    };
  }, [o, x, d, g, w, n]), S = X(() => ({
    draggableId: c.id,
    type: c.type,
    source: {
      index: c.index,
      droppableId: c.droppableId
    }
  }), [c.droppableId, c.id, c.index, c.type]);
  return Q.createElement(Q.Fragment, null, u(v, g.snapshot, S));
};
var TT = ET, hg = (e, t) => e === t, bg = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const RT = (e) => e.combine ? e.combine.draggableId : null, OT = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function LT() {
  const e = ve((o, i) => ({
    x: o,
    y: i
  })), t = ve((o, i, s = null, a = null, l = null) => ({
    isDragging: !0,
    isClone: i,
    isDropAnimating: !!l,
    dropAnimation: l,
    mode: o,
    draggingOver: s,
    combineWith: a,
    combineTargetFor: null
  })), n = ve((o, i, s, a, l = null, c = null, u = null) => ({
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
    if (Or(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], l = Ye(o.impact), c = OT(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, l, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, l = o.dimensions.draggables[i.draggableId], c = s.result, u = c.mode, d = bg(c), f = RT(c), m = {
        duration: o.dropDuration,
        curve: Ql.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? Tr.opacity.drop : null,
        scale: f ? Tr.scale.drop : null
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
function yg(e = null) {
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
const $T = {
  mapped: {
    type: "SECONDARY",
    offset: xe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: yg(null)
  }
};
function jT() {
  const e = ve((s, a) => ({
    x: s,
    y: a
  })), t = ve(yg), n = ve((s, a = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: l,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(xe, s, !0) : null, o = (s, a, l, c) => {
    const u = l.displaced.visible[s], d = !!(c.inVirtualList && c.effected[s]), f = Ri(l), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (l.displaced.invisible[s])
        return null;
      const g = Yn(c.displacedBy.point), y = e(g.x, g.y);
      return n(y, p, !0);
    }
    if (d)
      return r(p);
    const m = l.displacedBy.point, h = e(m.x, m.y);
    return n(h, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (Or(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const l = s.completed;
      return l.result.draggableId === a.draggableId ? null : o(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const AT = () => {
  const e = LT(), t = jT();
  return (r, o) => e(r, o) || t(r, o) || $T;
}, NT = {
  dropAnimationFinished: Ym
}, MT = xm(AT, NT, null, {
  context: rc,
  areStatePropsEqual: hg
})(TT);
var _T = MT;
function vg(e) {
  return _o(sc).isUsingCloneFor === e.draggableId && !e.isClone ? null : Q.createElement(_T, e);
}
function FT(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return Q.createElement(vg, Ut({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const xg = (e) => (t) => e === t, zT = xg("scroll"), BT = xg("auto"), vd = (e, t) => t(e.overflowX) || t(e.overflowY), VT = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return vd(n, zT) || vd(n, BT);
}, WT = () => !1, wg = (e) => e == null ? null : e === document.body ? WT() ? e : null : e === document.documentElement ? null : VT(e) ? e : wg(e.parentElement);
var ra = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const Sg = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : Sg(e.parentElement) : !1;
var GT = (e) => {
  const t = wg(e), n = Sg(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, HT = ({
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
  })(), c = o === "vertical" ? Hl : Lm, u = Fn({
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
const UT = (e, t) => {
  const n = Cm(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, l = Bl({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Vl({
    borderBox: l,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var qT = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const l = n.closestScrollable, c = UT(e, l), u = $o(c, r), d = (() => {
    if (!l)
      return null;
    const p = Cm(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: $o(p, r),
      scroll: ra(l),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return HT({
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
const KT = {
  passive: !1
}, YT = {
  passive: !0
};
var xd = (e) => e.shouldPublishImmediately ? KT : YT;
const oo = (e) => e && e.env.closestScrollable || null;
function JT(e) {
  const t = V(null), n = _o(ji), r = oc("droppable"), {
    registry: o,
    marshal: i
  } = n, s = cg(e), a = X(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = V(a), c = X(() => ve((v, S) => {
    t.current || N(!1);
    const C = {
      x: v,
      y: S
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = G(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? xe : ra(v.env.closestScrollable);
  }, []), d = G(() => {
    const v = u();
    c(v.x, v.y);
  }, [u, c]), f = X(() => Ir(d), [d]), p = G(() => {
    const v = t.current, S = oo(v);
    if (v && S || N(!1), v.scrollOptions.shouldPublishImmediately) {
      d();
      return;
    }
    f();
  }, [f, d]), m = G((v, S) => {
    t.current && N(!1);
    const C = s.current, I = C.getDroppableRef();
    I || N(!1);
    const D = GT(I), T = {
      ref: I,
      descriptor: a,
      env: D,
      scrollOptions: S
    };
    t.current = T;
    const $ = qT({
      ref: I,
      descriptor: a,
      env: D,
      windowScroll: v,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), A = D.closestScrollable;
    return A && (A.setAttribute(md.contextId, n.contextId), A.addEventListener("scroll", p, xd(T.scrollOptions))), $;
  }, [n.contextId, a, p, s]), h = G(() => {
    const v = t.current, S = oo(v);
    return v && S || N(!1), ra(S);
  }, []), g = G(() => {
    const v = t.current;
    v || N(!1);
    const S = oo(v);
    t.current = null, S && (f.cancel(), S.removeAttribute(md.contextId), S.removeEventListener("scroll", p, xd(v.scrollOptions)));
  }, [p, f]), y = G((v) => {
    const S = t.current;
    S || N(!1);
    const C = oo(S);
    C || N(!1), C.scrollTop += v.y, C.scrollLeft += v.x;
  }, []), x = X(() => ({
    getDimensionAndWatchScroll: m,
    getScrollWhileDragging: h,
    dragStopped: g,
    scroll: y
  }), [g, m, h, y]), w = X(() => ({
    uniqueId: r,
    descriptor: a,
    callbacks: x
  }), [x, a, r]);
  Je(() => (l.current = w.descriptor, o.droppable.register(w), () => {
    t.current && g(), o.droppable.unregister(w);
  }), [x, a, g, w, i, o.droppable]), Je(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), Je(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function ws() {
}
const wd = {
  width: 0,
  height: 0,
  margin: BI
}, XT = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? wd : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, QT = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = XT({
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
}, ZT = (e) => {
  const t = V(null), n = G(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, l] = q(e.animate === "open");
  H(() => a ? r !== "open" ? (n(), l(!1), ws) : t.current ? ws : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), n) : ws, [r, a, n]);
  const c = G((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = QT({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return Q.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: c,
    ref: e.innerRef
  });
};
var eR = Q.memo(ZT);
class tR extends Q.PureComponent {
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
const nR = (e) => {
  const t = wt(ji);
  t || N(!1);
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
    useClone: h,
    updateViewportMaxScroll: g,
    getContainerForClone: y
  } = e, x = G(() => o.current, []), w = G((A = null) => {
    o.current = A;
  }, []);
  G(() => i.current, []);
  const v = G((A = null) => {
    i.current = A;
  }, []), S = G(() => {
    r() && g({
      maxScroll: tg()
    });
  }, [r, g]);
  JT({
    droppableId: a,
    type: l,
    mode: c,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = X(() => Q.createElement(tR, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: A,
    data: F,
    animate: W
  }) => Q.createElement(eR, {
    placeholder: F,
    onClose: A,
    innerRef: v,
    animate: W,
    contextId: n,
    onTransitionEnd: S
  })), [n, S, e.placeholder, e.shouldAnimatePlaceholder, v]), I = X(() => ({
    innerRef: w,
    placeholder: C,
    droppableProps: {
      "data-rfd-droppable-id": a,
      "data-rfd-droppable-context-id": n
    }
  }), [n, a, C, w]), D = h ? h.dragging.draggableId : null, T = X(() => ({
    droppableId: a,
    type: l,
    isUsingCloneFor: D
  }), [a, D, l]);
  function $() {
    if (!h)
      return null;
    const {
      dragging: A,
      render: F
    } = h, W = Q.createElement(vg, {
      draggableId: A.draggableId,
      index: A.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (R, j) => F(R, j, A));
    return oa.createPortal(W, y());
  }
  return Q.createElement(sc.Provider, {
    value: T
  }, s(I, m), $());
};
var rR = nR;
function oR() {
  return document.body || N(!1), document.body;
}
const Sd = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: oR
}, Cg = (e) => {
  let t = {
    ...e
  }, n;
  for (n in Sd)
    e[n] === void 0 && (t = {
      ...t,
      [n]: Sd[n]
    });
  return t;
}, Ss = (e, t) => e === t.droppable.type, Cd = (e, t) => t.draggables[e.draggable.id], iR = () => {
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
  }, n = ve((i) => ({
    draggableId: i.id,
    type: i.type,
    source: {
      index: i.index,
      droppableId: i.droppableId
    }
  })), r = ve((i, s, a, l, c, u) => {
    const d = c.descriptor.id;
    if (c.descriptor.droppableId === i) {
      const m = u ? {
        render: u,
        dragging: n(c.descriptor)
      } : null, h = {
        isDraggingOver: a,
        draggingOverWith: a ? d : null,
        draggingFromThisWith: d,
        isUsingPlaceholder: !0
      };
      return {
        placeholder: c.placeholder,
        shouldAnimatePlaceholder: !1,
        snapshot: h,
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
    const a = Cg(s), l = a.droppableId, c = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (Or(i)) {
      const f = i.critical;
      if (!Ss(c, f))
        return t;
      const p = Cd(f, i.dimensions), m = Ye(i.impact) === l;
      return r(l, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!Ss(c, f.critical))
        return t;
      const p = Cd(f.critical, i.dimensions);
      return r(l, u, bg(f.result) === l, Ye(f.impact) === l, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!Ss(c, f.critical))
        return t;
      const p = Ye(f.impact) === l, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), h = f.critical.droppable.id === l;
      return p ? m ? e : t : h ? e : t;
    }
    return t;
  };
}, sR = {
  updateViewportMaxScroll: ek
}, aR = xm(iR, sR, (e, t, n) => ({
  ...Cg(n),
  ...e,
  ...t
}), {
  context: rc,
  areStatePropsEqual: hg
})(rR);
var lR = aR;
const cR = "_item_1o9ja_1", uR = "_itemDragging_1o9ja_12", dR = "_symbol_1o9ja_16", fR = "_dragHandle_1o9ja_22", io = {
  item: cR,
  itemDragging: uR,
  symbol: dR,
  dragHandle: fR
};
function pR({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Tt(), i = t ? t.filterDictionaries : [], s = (l) => {
    if (!t || !l.destination)
      return;
    const c = Array.from(i), [u] = c.splice(l.source.index, 1);
    c.splice(l.destination.index, 0, u), n({ ...t, filterDictionaries: c }), r(!0);
  }, a = i.map((l, c) => /* @__PURE__ */ b.jsx(FT, { index: c, draggableId: l.ifcClassification.location, children: (u, d) => /* @__PURE__ */ b.jsxs(
    "div",
    {
      className: at(io.item, { [io.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ b.jsx("div", { ...u.dragHandleProps, className: io.dragHandle, children: /* @__PURE__ */ b.jsx(pC, { style: { width: E(18), height: E(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ b.jsx(Te, { className: io.uri, children: l.ifcClassification.location })
      ]
    }
  ) }, l.ifcClassification.location));
  return /* @__PURE__ */ b.jsxs(ie.Item, { value: e.toString(), children: [
    /* @__PURE__ */ b.jsxs(ie.Control, { children: [
      /* @__PURE__ */ b.jsx(Sn, { order: 5, children: o("sortFilterDictionariesLabel") }),
      /* @__PURE__ */ b.jsx(Te, { size: "xs", c: "dimmed", children: o("sortFilterDictionariesInstruction") })
    ] }),
    /* @__PURE__ */ b.jsx(ie.Panel, { children: /* @__PURE__ */ b.jsx(yT, { onDragEnd: s, children: /* @__PURE__ */ b.jsx(lR, { droppableId: "dnd-list", direction: "vertical", children: (l) => /* @__PURE__ */ b.jsxs("div", { ...l.droppableProps, ref: l.innerRef, children: [
      a,
      l.placeholder
    ] }) }) }) })
  ] }, e);
}
function mR({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = Tt(), i = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ b.jsx(
    hl,
    {
      label: r("language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("selectLanguageInstruction")
    }
  );
}
function gR({ id: e, localSettings: t, setLocalSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Tt(), i = Ol(), s = yt(Jp), a = yt(OD), l = V();
  return H(() => {
    s && i(BD(s));
  }, [i, s]), H(() => {
    if (!s || a === null)
      return;
    const c = {
      bsddApiEnvironment: s,
      includeTestDictionaries: a
    };
    l.current && l.current.bsddApiEnvironment === c.bsddApiEnvironment && l.current.includeTestDictionaries === c.includeTestDictionaries || (i(Ys(c)), l.current = c);
  }, [i, s, a]), /* @__PURE__ */ b.jsxs(ie.Item, { value: e.toString(), children: [
    /* @__PURE__ */ b.jsxs(ie.Control, { children: [
      /* @__PURE__ */ b.jsx(Sn, { order: 5, children: o("generalSettingsLabel") }),
      /* @__PURE__ */ b.jsx(Te, { size: "xs", c: "dimmed", children: o("generalSettingsInstruction") })
    ] }),
    /* @__PURE__ */ b.jsxs(ie.Panel, { children: [
      /* @__PURE__ */ b.jsx(mR, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ b.jsx(wr, { h: "xs" }),
      /* @__PURE__ */ b.jsx(
        wn,
        {
          label: o("ShowPreview"),
          checked: t && t.includeTestDictionaries ? t.includeTestDictionaries : !1,
          indeterminate: !t || t.includeTestDictionaries === null,
          type: "checkbox",
          onChange: (c) => {
            t && (n({ ...t, includeTestDictionaries: c.currentTarget.checked }), r(!0));
          }
        }
      )
    ] })
  ] }, e);
}
function hR({
  id: e,
  localSettings: t,
  setLocalSettings: n,
  setUnsavedChanges: r
}) {
  const { t: o } = Tt(), { mainDictionary: i, filterDictionaries: s } = t, [a, l] = q([]);
  H(() => {
    const u = [i, ...s].filter(Boolean), d = new Map(u.map((p) => [p.ifcClassification.location, p])), f = Array.from(d.values());
    l(f);
  }, [i, s]);
  const c = (u, d) => {
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
  return /* @__PURE__ */ b.jsxs(ie.Item, { value: e.toString(), children: [
    /* @__PURE__ */ b.jsxs(ie.Control, { children: [
      /* @__PURE__ */ b.jsx(Sn, { order: 5, children: o("parameterMappingLabel") }),
      /* @__PURE__ */ b.jsx(Te, { size: "xs", c: "dimmed", children: o("parameterMappingInstruction") })
    ] }),
    /* @__PURE__ */ b.jsx(ie.Panel, { children: a.map((u, d) => {
      const f = u.ifcClassification.location || d;
      return /* @__PURE__ */ b.jsxs("div", { style: { marginBottom: "1em" }, children: [
        /* @__PURE__ */ b.jsx(
          wl,
          {
            label: u.ifcClassification.location,
            placeholder: "Enter a revit type parameter",
            value: u.parameterMapping,
            onChange: (p) => c(u.ifcClassification.location, p.currentTarget.value)
          }
        ),
        " "
      ] }, f);
    }) })
  ] }, e);
}
function bR() {
  var u, d;
  const e = Ol(), t = yt((f) => f.settings), [n, r] = q(t), [o, i] = q(!1), [s, a] = q(!0);
  H(() => {
    r(t);
  }, [t]);
  const l = () => {
    var f;
    console.log("Saving", n), n && (e(Tl(n)), (f = window == null ? void 0 : window.bsddBridge) == null || f.saveSettings(JSON.stringify(n)), i(!1));
  }, c = () => {
    r(t), i(!1);
  };
  return /* @__PURE__ */ b.jsxs(bt.Panel, { value: "settings", children: [
    /* @__PURE__ */ b.jsxs(ie, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ b.jsx(l1, { id: 0 }),
      /* @__PURE__ */ b.jsx(
        gR,
        {
          id: 1,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ b.jsx(
        f1,
        {
          id: 2,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i,
          setIsLoading: a
        }
      ),
      /* @__PURE__ */ b.jsx(
        hR,
        {
          id: 3,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      ),
      /* @__PURE__ */ b.jsx(
        pR,
        {
          id: 4,
          localSettings: n,
          setLocalSettings: r,
          setUnsavedChanges: i
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs(jn, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ b.jsx(
        yr,
        {
          fullWidth: !0,
          loading: s,
          onClick: l,
          disabled: !o || !((d = (u = n == null ? void 0 : n.mainDictionary) == null ? void 0 : u.ifcClassification) != null && d.location),
          variant: s ? "light" : "filled",
          loaderProps: { type: "dots" },
          children: "Save"
        }
      ),
      /* @__PURE__ */ b.jsx(yr, { fullWidth: !0, variant: "light", onClick: c, disabled: !o, children: "Cancel" })
    ] })
  ] });
}
let yR;
const vR = (e) => async (t, n) => {
  const r = n(), o = ju(r, e.mainDictionary), i = e.filterDictionaries.map((a) => ju(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(Tl(s));
};
function xR() {
  const e = Ol(), { t } = Tt(), n = yt(FD), [r, o] = q(null), [i, s] = q(null), [a, l] = q(!0);
  return H(() => {
    (async () => {
      try {
      } catch (u) {
        console.error("Error connecting to bsddBridge:", u);
      }
    })();
  }, []), H(() => {
    r && (n ? (e(vR(r)), o(null), l(!1)) : (r != null && r.bsddApiEnvironment && e(LD(r.bsddApiEnvironment)), (r == null ? void 0 : r.includeTestDictionaries) !== null && e(jD(r.includeTestDictionaries)), r != null && r.language && e($D(r.language))));
  }, [n, r, e]), H(() => {
    !a && i && (e(ZD(i)), s(null));
  }, [a, i, e]), H(() => {
    s([]);
  }, []), H(() => {
    (async () => {
      var d;
      const u = await ((d = window == null ? void 0 : window.bsddBridge) == null ? void 0 : d.loadSettings());
      if (u) {
        const f = JSON.parse(u);
        console.log("initial loadSettings selection", f), o(f);
      }
    })();
  }, []), window.updateSelection = (c) => {
    console.log("updateSelection", c), s(c);
  }, window.updateSettings = (c) => {
    console.log("updateSettings", c), o(c);
  }, /* @__PURE__ */ b.jsx(ll, { size: "40rem", children: /* @__PURE__ */ b.jsxs(bt, { defaultValue: "link", children: [
    /* @__PURE__ */ b.jsxs(bt.List, { grow: !0, children: [
      /* @__PURE__ */ b.jsx(bt.Tab, { value: "link", children: t("linkTabTitle") }),
      /* @__PURE__ */ b.jsx(bt.Tab, { value: "settings", children: t("settingsTabTitle") })
    ] }),
    /* @__PURE__ */ b.jsx(a1, { loading: a }),
    /* @__PURE__ */ b.jsx(bR, {})
  ] }) });
}
function wR() {
  return /* @__PURE__ */ b.jsx(ef, { theme: yC, children: /* @__PURE__ */ b.jsx(xR, {}) });
}
const SR = nD({
  reducer: {
    settings: AD,
    ifcData: e1,
    bsdd: VD
  }
});
Ds.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ b.jsx(Q.StrictMode, { children: /* @__PURE__ */ b.jsx(gh, { store: SR, children: /* @__PURE__ */ b.jsx(wR, {}) }) })
);
