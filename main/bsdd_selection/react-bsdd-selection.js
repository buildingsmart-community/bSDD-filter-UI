var Am = Object.defineProperty;
var Om = (e, t, n) => t in e ? Am(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var De = (e, t, n) => (Om(e, typeof t != "symbol" ? t + "" : t, n), n);
import * as R from "react";
import b, { createContext as Gt, useContext as ft, useState as U, useRef as V, useEffect as G, useMemo as Hn, useCallback as Z, useLayoutEffect as po, useId as xu, forwardRef as ie, cloneElement as ln, Children as $m, createElement as xl } from "react";
import * as Nm from "react-dom";
import Su, { flushSync as ws, createPortal as Tm, unstable_batchedUpdates as Lm } from "react-dom";
function Cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Eu = { exports: {} }, mo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mm = b, km = Symbol.for("react.element"), _m = Symbol.for("react.fragment"), Fm = Object.prototype.hasOwnProperty, Bm = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pu(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t)
    Fm.call(t, r) && !jm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: km, type: e, key: i, ref: s, props: o, _owner: Bm.current };
}
mo.Fragment = _m;
mo.jsx = Pu;
mo.jsxs = Pu;
Eu.exports = mo;
var _ = Eu.exports, Ki = {}, Sl = Su;
Ki.createRoot = Sl.createRoot, Ki.hydrateRoot = Sl.hydrateRoot;
var Du = { exports: {} }, Ru = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = b;
function Vm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zm = typeof Object.is == "function" ? Object.is : Vm, Gm = lr.useSyncExternalStore, Wm = lr.useRef, Hm = lr.useEffect, Um = lr.useMemo, qm = lr.useDebugValue;
Ru.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = Wm(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = Um(function() {
    function l(p) {
      if (!c) {
        if (c = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
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
    var c = !1, u, d, f = n === void 0 ? null : n;
    return [function() {
      return l(t());
    }, f === null ? void 0 : function() {
      return l(f());
    }];
  }, [t, n, r, o]);
  var a = Gm(e, i[0], i[1]);
  return Hm(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), qm(a), a;
};
Du.exports = Ru;
var Km = Du.exports, Be = (
  // prettier-ignore
  // @ts-ignore
  "default" in R ? R.default : R
), Cl = Symbol.for("react-redux-context"), El = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ym() {
  if (!Be.createContext)
    return {};
  const e = El[Cl] ?? (El[Cl] = /* @__PURE__ */ new Map());
  let t = e.get(Be.createContext);
  return t || (t = Be.createContext(
    null
  ), e.set(Be.createContext, t)), t;
}
var _t = /* @__PURE__ */ Ym(), Xm = () => {
  throw new Error("uSES not initialized!");
};
function xs(e = _t) {
  return function() {
    return Be.useContext(e);
  };
}
var Iu = /* @__PURE__ */ xs(), Au = Xm, Jm = (e) => {
  Au = e;
}, Qm = (e, t) => e === t;
function Zm(e = _t) {
  const t = e === _t ? Iu : xs(e), n = (r, o = {}) => {
    const { equalityFn: i = Qm, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: l,
      getServerState: c,
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
    ), p = Au(
      l.addNestedSub,
      a.getState,
      c || a.getState,
      f,
      i
    );
    return Be.useDebugValue(p), p;
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
var Pl = {
  notify() {
  },
  get: () => []
};
function rg(e, t) {
  let n, r = Pl, o = 0, i = !1;
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
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = ng());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Pl);
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
var og = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ig = og ? Be.useLayoutEffect : Be.useEffect;
function sg({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = Be.useMemo(() => {
    const c = rg(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), a = Be.useMemo(() => e.getState(), [e]);
  ig(() => {
    const { subscription: c } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || _t;
  return /* @__PURE__ */ Be.createElement(l.Provider, { value: s }, n);
}
var ag = sg;
function Ou(e = _t) {
  const t = e === _t ? Iu : (
    // @ts-ignore
    xs(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var lg = /* @__PURE__ */ Ou();
function cg(e = _t) {
  const t = e === _t ? lg : Ou(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ug = /* @__PURE__ */ cg();
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
var mt = new Br();
class go {
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
function Mn() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
function Dl(e) {
  return e == null ? "" : "" + e;
}
function fg(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
function Ss(e, t, n) {
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
function Rl(e, t, n) {
  const {
    obj: r,
    k: o
  } = Ss(e, t, Object);
  r[o] = n;
}
function pg(e, t, n, r) {
  const {
    obj: o,
    k: i
  } = Ss(e, t, Object);
  o[i] = o[i] || [], r && (o[i] = o[i].concat(n)), r || o[i].push(n);
}
function jr(e, t) {
  const {
    obj: n,
    k: r
  } = Ss(e, t);
  if (n)
    return n[r];
}
function mg(e, t, n) {
  const r = jr(e, n);
  return r !== void 0 ? r : jr(t, n);
}
function $u(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : $u(e[r], t[r], n) : e[r] = t[r]);
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
class Il extends go {
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
    r && (a = a.concat(s ? r.split(s) : r)), t.indexOf(".") > -1 && (a = t.split("."), o = n, n = a[1]), this.addNamespaces(n), Rl(this.data, a, o), i.silent || this.emit("added", t, n, r, o);
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
    o ? $u(l, r, i) : l = {
      ...l,
      ...r
    }, Rl(this.data, a, l), s.silent || this.emit("added", t, n, r);
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
var Nu = {
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
const Al = {};
class Gr extends go {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), fg(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = mt.create("translator");
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
      const C = n.count !== void 0 && typeof n.count != "string", P = Gr.hasDefaultValue(n), E = C ? this.pluralResolver.getSuffix(c, n.count, n) : "", $ = n.ordinal && C ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", N = n[`defaultValue${E}`] || n[`defaultValue${$}`] || n.defaultValue;
      !this.isValidLookup(f) && P && (v = !0, f = N), this.isValidLookup(f) || (S = !0, f = s);
      const M = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && S ? void 0 : f, k = P && N !== f && this.options.updateMissing;
      if (S || v || k) {
        if (this.logger.log(k ? "updateKey" : "missingKey", c, l, s, k ? N : f), i) {
          const F = this.resolve(s, {
            ...n,
            keySeparator: !1
          });
          F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let A = [];
        const L = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && L && L[0])
          for (let F = 0; F < L.length; F++)
            A.push(L[F]);
        else
          this.options.saveMissingTo === "all" ? A = this.languageUtils.toResolveHierarchy(n.lng || this.language) : A.push(n.lng || this.language);
        const I = (F, O, H) => {
          const K = P && H !== f ? H : M;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(F, l, O, K, k, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(F, l, O, K, k, n), this.emit("missingKey", F, l, O, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && C ? A.forEach((F) => {
          this.pluralResolver.getSuffixes(F, n).forEach((O) => {
            I([F], s + O, n[`defaultValue${O}`] || N);
          });
        }) : I(A, s, N));
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
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = Nu.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
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
        this.isValidLookup(r) || (a = h, !Al[`${g[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Al[`${g[0]}-${h}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((w) => {
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
function yi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Ol {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = mt.create("languageUtils");
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
      return this.options.lowerCaseLng ? r = r.map((o) => o.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = yi(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = yi(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = yi(r[2].toLowerCase()))), r.join("-");
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
const xg = ["v1", "v2", "v3"], Sg = ["v4"], $l = {
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
    this.languageUtils = t, this.options = n, this.logger = mt.create("pluralResolver"), (!this.options.compatibilityJSON || Sg.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Cg();
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
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((o, i) => $l[o] - $l[i]).map((o) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : r.numbers.map((o) => this.getSuffix(t, o, n)) : [];
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
function Nl(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = mg(e, t, n);
  return !i && o && typeof n == "string" && (i = Vr(e, n, r), i === void 0 && (i = Vr(t, n, r))), i;
}
class Pg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = mt.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
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
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function c(m) {
      return m.replace(/\$/g, "$$$$");
    }
    const u = (m) => {
      if (m.indexOf(this.formatSeparator) < 0) {
        const x = Nl(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, r, {
          ...o,
          ...n,
          interpolationkey: m
        }) : x;
      }
      const g = m.split(this.formatSeparator), h = g.shift().trim(), w = g.join(this.formatSeparator).trim();
      return this.format(Nl(n, l, h, this.options.keySeparator, this.options.ignoreJSONStructure), w, r, {
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
          typeof s != "string" && !this.useRawValueToEscape && (s = Dl(s));
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
      typeof i != "string" && (i = Dl(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`), i = ""), c && (i = l.reduce((u, d) => this.format(u, d, r.lng, {
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
class Rg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = mt.create("formatter"), this.options = t, this.formats = {
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
      } = Dg(l);
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
function Ig(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class Ag extends go {
  constructor(t, n, r) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = o, this.logger = mt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, o.backend, o);
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
      pg(l.loaded, [i], s), Ig(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
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
function Tl() {
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
function Ll(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function Cr() {
}
function Og(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Un extends go {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ll(t), this.services = {}, this.logger = mt, this.modules = {
      external: []
    }, Og(this), n && !this.isInitialized && !t.isClone) {
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
    const o = Tl();
    this.options = {
      ...o,
      ...this.options,
      ...Ll(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? mt.init(i(this.modules.logger), this.options) : mt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = Rg);
      const d = new Ol(this.options);
      this.store = new Il(this.options.resources, this.options);
      const f = this.services;
      f.logger = mt, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new Eg(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Pg(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Ag(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(p) {
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
    const l = Mn(), c = () => {
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
    const o = Mn();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = Cr), this.services.backendConnector.reload(t, n, (i) => {
      o.resolve(), r(i);
    }), o;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Nu.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
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
    const o = Mn();
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
    const r = Mn();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Mn();
    typeof t == "string" && (t = [t]);
    const o = this.options.preload || [], i = t.filter((s) => o.indexOf(s) < 0);
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Ol(Tl());
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
    }, r && (i.store = new Il(this.store.data, o), i.services.resourceStore = i.store), i.translator = new Gr(i.services, o), i.translator.on("*", function(a) {
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
const Ml = {};
function Yi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Ml[t[0]] || (typeof t[0] == "string" && (Ml[t[0]] = /* @__PURE__ */ new Date()), $g(...t));
}
const Tu = (e, t) => () => {
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
function kl(e, t, n) {
  e.loadNamespaces(t, Tu(e, n));
}
function _l(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((o) => {
    e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
  }), e.loadLanguages(t, Tu(e, r));
}
function Ng(e, t) {
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
function Tg(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Yi("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
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
}, kg = (e) => Mg[e], _g = (e) => e.replace(Lg, kg);
let Xi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: _g
};
function Fg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Xi = {
    ...Xi,
    ...e
  };
}
function Bg() {
  return Xi;
}
let Lu;
function jg(e) {
  Lu = e;
}
function Vg() {
  return Lu;
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
  } = ft(Gg) || {}, i = n || r || Vg();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new Wg()), !i) {
    Yi("You will need to pass in an i18next instance by using initReactI18next");
    const y = (S, C) => typeof C == "string" ? C : C && typeof C == "object" && typeof C.defaultValue == "string" ? C.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, v = [y, {}, !1];
    return v.t = y, v.i18n = {}, v.ready = !1, v;
  }
  i.options.react && i.options.react.wait !== void 0 && Yi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...Bg(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: a,
    keyPrefix: l
  } = s;
  let c = e || o || i.options && i.options.defaultNS;
  c = typeof c == "string" ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((y) => Tg(y, i, s));
  function d() {
    return i.getFixedT(t.lng || null, s.nsMode === "fallback" ? c : c[0], l);
  }
  const [f, p] = U(d);
  let m = c.join();
  t.lng && (m = `${t.lng}${m}`);
  const g = Hg(m), h = V(!0);
  G(() => {
    const {
      bindI18n: y,
      bindI18nStore: v
    } = s;
    h.current = !0, !u && !a && (t.lng ? _l(i, t.lng, c, () => {
      h.current && p(d);
    }) : kl(i, c, () => {
      h.current && p(d);
    })), u && g && g !== m && h.current && p(d);
    function S() {
      h.current && p(d);
    }
    return y && i && i.on(y, S), v && i && i.store.on(v, S), () => {
      h.current = !1, y && i && y.split(" ").forEach((C) => i.off(C, S)), v && i && v.split(" ").forEach((C) => i.store.off(C, S));
    };
  }, [i, m]);
  const w = V(!0);
  G(() => {
    h.current && !w.current && p(d), w.current = !1;
  }, [i, l]);
  const x = [f, i, u];
  if (x.t = f, x.i18n = i, x.ready = u, u || !u && !a)
    return x;
  throw new Promise((y) => {
    t.lng ? _l(i, t.lng, c, () => y()) : kl(i, c, () => y());
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
function ht(e) {
  return Object.keys(e);
}
function vi(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Cs(e, t) {
  const n = { ...e }, r = t;
  return vi(e) && vi(t) && Object.keys(t).forEach((o) => {
    vi(r[o]) && o in e ? n[o] = Cs(n[o], r[o]) : n[o] = r[o];
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
function wi(e) {
  return `calc(${e} * var(--mantine-scale))`;
}
function Mu(e, { shouldScale: t = !1 } = {}) {
  function n(r) {
    if (r === 0 || r === "0")
      return "0";
    if (typeof r == "number") {
      const o = `${r / 16}${e}`;
      return t ? wi(o) : o;
    }
    if (typeof r == "string") {
      if (r.startsWith("calc(") || r.startsWith("var(") || r.startsWith("clamp("))
        return r;
      if (r.includes(" "))
        return r.split(" ").map((i) => n(i)).join(" ");
      if (r.includes(e))
        return t ? wi(r) : r;
      const o = r.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${e}`;
        return t ? wi(i) : i;
      }
    }
    return r;
  }
  return n;
}
const D = Mu("rem", { shouldScale: !0 }), Fl = Mu("em");
function Es(e) {
  return Object.keys(e).reduce((t, n) => (e[n] !== void 0 && (t[n] = e[n]), t), {});
}
function ku(e) {
  return typeof e == "number" ? !0 : typeof e == "string" ? e.startsWith("calc(") || e.startsWith("var(") || e.includes(" ") && e.trim() !== "" ? !0 : /[0-9]/.test(e.trim().replace("-", "")[0]) : !1;
}
function Ht(e) {
  return Array.isArray(e) || e === null ? !1 : typeof e == "object" ? e.type !== b.Fragment : !1;
}
function Ut(e) {
  const t = Gt(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => {
    const o = ft(t);
    if (o === null)
      throw new Error(e);
    return o;
  }];
}
function Ps(e = null) {
  const t = Gt(e);
  return [({ children: o, value: i }) => /* @__PURE__ */ b.createElement(t.Provider, { value: i }, o), () => ft(t)];
}
function Wr(e, t) {
  return (n) => {
    if (typeof n != "string" || n.trim().length === 0)
      throw new Error(t);
    return `${e}-${n}`;
  };
}
function Ji(e, t) {
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
  return Ji(e, n) === Ji(t, n);
}
function _u({
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
      ((m = Ji(a.currentTarget, e)) == null ? void 0 : m.querySelectorAll(
        t
      )) || []
    ).filter((g) => Jg(a.currentTarget, g, e)), c = l.findIndex((g) => a.currentTarget === g), u = Xg(c, l, r), d = Yg(c, l, r), f = i === "rtl" ? d : u, p = i === "rtl" ? u : d;
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
const Qg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function Ds(e) {
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
    return ku(e) ? n ? D(e) : e : `var(--${t}-${e})`;
}
function Fu(e) {
  return se(e, "mantine-spacing");
}
function tt(e) {
  return e === void 0 ? "var(--mantine-radius-default)" : se(e, "mantine-radius");
}
function Ve(e) {
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
function Bu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Bu(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function wt() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Bu(e)) && (r && (r += " "), r += t);
  return r;
}
const rh = {};
function oh(e) {
  const t = {};
  return e.forEach((n) => {
    Object.entries(n).forEach(([r, o]) => {
      t[r] ? t[r] = wt(t[r], o) : t[r] = o;
    });
  }), t;
}
function ho({ theme: e, classNames: t, props: n, stylesCtx: r }) {
  const i = (Array.isArray(t) ? t : [t]).map(
    (s) => typeof s == "function" ? s(e, n, r) : s || rh
  );
  return oh(i);
}
function Ur({ theme: e, styles: t, props: n, stylesCtx: r }) {
  return (Array.isArray(t) ? t : [t]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(e, n, r) } : { ...i, ...s }, {});
}
function ju() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function en(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), Hn(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function bo(e, t) {
  const n = en(e), r = V(0);
  return G(() => () => window.clearTimeout(r.current), []), Z(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
const Bl = ["mousedown", "touchstart"];
function ih(e, t, n) {
  const r = V();
  return G(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(n)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        n.every((c) => !!c && !i.composedPath().includes(c)) && !a && e();
      } else
        r.current && !r.current.contains(s) && e();
    };
    return (t || Bl).forEach((i) => document.addEventListener(i, o)), () => {
      (t || Bl).forEach((i) => document.removeEventListener(i, o));
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
function lh(e, t, { getInitialValueInEffect: n } = {
  getInitialValueInEffect: !0
}) {
  const [r, o] = U(
    n ? t : ah(e, t)
  ), i = V();
  return G(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(e), o(i.current.matches), sh(i.current, (s) => o(s.matches));
  }, [e]), r;
}
const cr = typeof document < "u" ? po : G;
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
function ch({ opened: e, shouldReturnFocus: t = !0 }) {
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
  const n = ju(), r = Array.from(
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
const dh = /input|select|textarea|button|object/, Vu = "a, input, select, textarea, button, object, [tabindex]";
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
function zu(e) {
  let t = e.getAttribute("tabindex");
  return t === null && (t = void 0), parseInt(t, 10);
}
function Qi(e) {
  const t = e.nodeName.toLowerCase(), n = !Number.isNaN(zu(e));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (dh.test(t) && !e.disabled || e instanceof HTMLAnchorElement && e.href || n) && ph(e);
}
function Gu(e) {
  const t = zu(e);
  return (Number.isNaN(t) || t >= 0) && Qi(e);
}
function mh(e) {
  return Array.from(e.querySelectorAll(Vu)).filter(Gu);
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
  const l = n[t.shiftKey ? n.length - 1 : 0];
  l && l.focus();
}
function hh(e = !0) {
  const t = V(), n = V(null), r = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Vu));
      s = a.find(Gu) || a.find(Qi) || null, !s && Qi(i) && (s = i);
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
  const t = yh(), [n, r] = U(t);
  return cr(() => {
    r(ju());
  }, []), typeof e == "string" ? e : typeof window > "u" ? t : n;
}
function Wu(e, t) {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}
function Hu(...e) {
  return (t) => {
    e.forEach((n) => Wu(n, t));
  };
}
function Oe(...e) {
  return Z(Hu(...e), e);
}
function Et({
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
function Uu(e, t) {
  return lh("(prefers-reduced-motion: reduce)", e, t);
}
function vh(e = !1, t) {
  const { onOpen: n, onClose: r } = t || {}, [o, i] = U(e), s = Z(() => {
    i((c) => c || (n == null || n(), !0));
  }, [n]), a = Z(() => {
    i((c) => c && (r == null || r(), !1));
  }, [r]), l = Z(() => {
    o ? a() : s();
  }, [a, s, o]);
  return [o, { open: s, close: a, toggle: l }];
}
const qu = Gt(null);
function Rs() {
  const e = ft(qu);
  if (!e)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return e;
}
function wh() {
  return Rs().cssVariablesResolver;
}
function xh() {
  return Rs().classNamesPrefix;
}
function Is() {
  return Rs().getStyleNonce;
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
  const r = parseInt(n[1], 10), o = parseInt(n[2], 10) / 100, i = parseInt(n[3], 10) / 100, s = n[5] ? parseFloat(n[5]) : void 0, a = (1 - Math.abs(2 * i - 1)) * o, l = r / 60, c = a * (1 - Math.abs(l % 2 - 1)), u = i - a / 2;
  let d, f, p;
  return l >= 0 && l < 1 ? (d = a, f = c, p = 0) : l >= 1 && l < 2 ? (d = c, f = a, p = 0) : l >= 2 && l < 3 ? (d = 0, f = a, p = c) : l >= 3 && l < 4 ? (d = 0, f = c, p = a) : l >= 4 && l < 5 ? (d = c, f = 0, p = a) : (d = a, f = 0, p = c), {
    r: Math.round((d + u) * 255),
    g: Math.round((f + u) * 255),
    b: Math.round((p + u) * 255),
    a: s || 1
  };
}
function Ku(e) {
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
  const { r: n, g: r, b: o, a: i } = Ku(e), s = 1 - t, a = (l) => Math.round(l * s);
  return `rgba(${a(n)}, ${a(r)}, ${a(o)}, ${i})`;
}
function Zi(e, t) {
  return typeof e.primaryShade == "number" ? e.primaryShade : t === "dark" ? e.primaryShade.dark : e.primaryShade.light;
}
function yo({
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
    value: i !== void 0 ? t.colors[r][i] : t.colors[r][Zi(t, n || "light")],
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
function yt(e, t) {
  const n = yo({ color: e || t.primaryColor, theme: t });
  return n.variable ? `var(${n.variable})` : e;
}
function es(e, t) {
  const n = {
    from: (e == null ? void 0 : e.from) || t.defaultGradient.from,
    to: (e == null ? void 0 : e.to) || t.defaultGradient.to,
    deg: (e == null ? void 0 : e.deg) || t.defaultGradient.deg || 0
  }, r = yt(n.from, t), o = yt(n.to, t);
  return `linear-gradient(${n.deg}deg, ${r} 0%, ${o} 100%)`;
}
function Le(e, t) {
  if (typeof e != "string" || t > 1 || t < 0)
    return "rgba(0, 0, 0, 1)";
  const { r: n, g: r, b: o } = Ku(e);
  return `rgba(${n}, ${r}, ${o}, ${t})`;
}
const Dh = ({
  color: e,
  theme: t,
  variant: n,
  gradient: r
}) => {
  const o = yo({ color: e, theme: t });
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
        background: Le(i, 0.1),
        hover: Le(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: Le(e, 0.1),
      hover: Le(e, 0.12),
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
      hover: Le(t.colors[o.color][o.shade], 0.05),
      color: `var(--mantine-color-${o.color}-${o.shade})`,
      border: `${D(1)} solid var(--mantine-color-${o.color}-${o.shade})`
    } : {
      background: "transparent",
      hover: Le(e, 0.05),
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
        hover: Le(i, 0.12),
        color: `var(--mantine-color-${o.color}-${Math.min(o.shade, 6)})`,
        border: `${D(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Le(e, 0.12),
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
    background: es(r, t),
    hover: es(r, t),
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
}, jl = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", As = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: Rh,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: Dh,
  fontFamily: jl,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: jl,
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
function Vl(e) {
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
        return Vl(r) ? r : n;
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
        r.storageArea === window.localStorage && r.key === e && Vl(r.newValue) && n(r.newValue);
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
const Ah = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", zl = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function xi(e) {
  return e < 0 || e > 9 ? !1 : parseInt(e.toString(), 10) === e;
}
function Gl(e) {
  if (!(e.primaryColor in e.colors))
    throw new Error(Ah);
  if (typeof e.primaryShade == "object" && (!xi(e.primaryShade.dark) || !xi(e.primaryShade.light)))
    throw new Error(zl);
  if (typeof e.primaryShade == "number" && !xi(e.primaryShade))
    throw new Error(zl);
}
function Oh(e, t) {
  var r;
  if (!t)
    return Gl(e), e;
  const n = Cs(e, t);
  return t.fontFamily && !((r = t.headings) != null && r.fontFamily) && (n.headings.fontFamily = t.fontFamily), Gl(n), n;
}
const Os = Gt(null), $h = () => ft(Os) || As;
function xt() {
  const e = ft(Os);
  if (!e)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return e;
}
function Yu({
  theme: e,
  children: t,
  inherit: n = !0
}) {
  const r = $h(), o = Hn(
    () => Oh(n ? r : As, e),
    [e, r, n]
  );
  return /* @__PURE__ */ b.createElement(Os.Provider, { value: o }, t);
}
Yu.displayName = "@mantine/core/MantineThemeProvider";
function Nh() {
  const e = xt(), t = Is(), n = ht(e.breakpoints).reduce((r, o) => {
    const i = Kg(e.breakpoints[o]);
    return `${r}@media (max-width: ${Fl(
      i - 0.1
    )}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${Fl(
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
function Si(e) {
  return Object.entries(e).map(([t, n]) => `${t}: ${n};`).join("");
}
function Ci(e, t) {
  return (Array.isArray(e) ? e : [e]).reduce((r, o) => `${o}{${r}}`, t);
}
function Th(e, t) {
  const n = Si(e.variables), r = n ? Ci(t, n) : "", o = Si(e.dark), i = o ? Ci(`${t}[data-mantine-color-scheme="dark"]`, o) : "", s = Si(e.light), a = s ? Ci(`${t}[data-mantine-color-scheme="light"]`, s) : "";
  return `${r}${i}${a}`;
}
function mn(e, t, n) {
  ht(t).forEach(
    (r) => Object.assign(e, { [`--mantine-${n}-${r}`]: t[r] })
  );
}
const Xu = (e) => {
  const t = Zi(e, "dark"), n = Zi(e, "light"), r = e.defaultRadius in e.radius ? e.radius[e.defaultRadius] : D(e.defaultRadius), o = {
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
  }), ht(e.colors).forEach((s) => {
    e.colors[s].forEach((c, u) => {
      o.variables[`--mantine-color-${s}-${u}`] = c;
    });
    const a = `var(--mantine-color-${s}-${n === 9 ? 8 : n + 1})`, l = `var(--mantine-color-${s}-${t === 9 ? 8 : t + 1})`;
    o.light["--mantine-color-dimmed"] = "var(--mantine-color-gray-6)", o.light[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-filled)`, o.light[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-filled-hover`] = a, o.light[`--mantine-color-${s}-light`] = Le(
      e.colors[s][n],
      0.1
    ), o.light[`--mantine-color-${s}-light-hover`] = Le(
      e.colors[s][n],
      0.12
    ), o.light[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${n})`, o.light[`--mantine-color-${s}-outline-hover`] = Le(
      e.colors[s][n],
      0.05
    ), o.dark["--mantine-color-dimmed"] = "var(--mantine-color-dark-2)", o.dark[`--mantine-color-${s}-text`] = `var(--mantine-color-${s}-4)`, o.dark[`--mantine-color-${s}-filled`] = `var(--mantine-color-${s}-${t})`, o.dark[`--mantine-color-${s}-filled-hover`] = l, o.dark[`--mantine-color-${s}-light`] = Le(
      e.colors[s][Math.max(0, t - 2)],
      0.15
    ), o.dark[`--mantine-color-${s}-light-hover`] = Le(
      e.colors[s][Math.max(0, t - 2)],
      0.2
    ), o.dark[`--mantine-color-${s}-light-color`] = `var(--mantine-color-${s}-${Math.max(
      t - 5,
      0
    )})`, o.dark[`--mantine-color-${s}-outline`] = `var(--mantine-color-${s}-${Math.max(
      t - 4,
      0
    )})`, o.dark[`--mantine-color-${s}-outline-hover`] = Le(
      e.colors[s][Math.max(t - 4, 0)],
      0.05
    );
  });
  const i = e.headings.sizes;
  return ht(i).forEach((s) => {
    o.variables[`--mantine-${s}-font-size`] = i[s].fontSize, o.variables[`--mantine-${s}-line-height`] = i[s].lineHeight, o.variables[`--mantine-${s}-font-weight`] = i[s].fontWeight || e.headings.fontWeight;
  }), o;
};
function Lh({ theme: e, generator: t }) {
  const n = Xu(e), r = t == null ? void 0 : t(e);
  return r ? Cs(n, r) : n;
}
const Ei = Xu(As);
function Mh(e) {
  const t = {
    variables: {},
    light: {},
    dark: {}
  };
  return ht(e.variables).forEach((n) => {
    Ei.variables[n] !== e.variables[n] && (t.variables[n] = e.variables[n]);
  }), ht(e.light).forEach((n) => {
    Ei.light[n] !== e.light[n] && (t.light[n] = e.light[n]);
  }), ht(e.dark).forEach((n) => {
    Ei.dark[n] !== e.dark[n] && (t.dark[n] = e.dark[n]);
  }), t;
}
function kh(e) {
  return `
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function Ju({ cssVariablesSelector: e }) {
  const t = xt(), n = Is(), r = wh(), o = Lh({ theme: t, generator: r }), i = e === ":root", s = i ? Mh(o) : o, a = Th(s, e);
  return a ? /* @__PURE__ */ b.createElement(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${a}${i ? "" : kh(e)}`
      }
    }
  ) : null;
}
Ju.displayName = "@mantine/CssVariables";
function _h() {
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
  const o = V(), [i, s] = U(() => e.get(t)), a = r || i, l = Z(
    (u) => {
      r || (kn(u, n), s(u), e.set(u));
    },
    [e.set, a, r]
  ), c = Z(() => {
    s(t), kn(t, n), e.clear();
  }, [e.clear, t]);
  return G(() => (e.subscribe(l), e.unsubscribe), [e.subscribe, e.unsubscribe]), cr(() => {
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
  }, [i, r]), { colorScheme: a, setColorScheme: l, clearColorScheme: c };
}
function Bh({
  respectReducedMotion: e,
  getRootElement: t
}) {
  cr(() => {
    var n;
    e && ((n = t()) == null || n.setAttribute("data-respect-reduced-motion", "true"));
  }, [e]);
}
_h();
function Qu({
  theme: e,
  children: t,
  getStyleNonce: n,
  withCssVariables: r = !0,
  cssVariablesSelector: o = ":root",
  classNamesPrefix: i = "mantine",
  colorSchemeManager: s = Ih(),
  defaultColorScheme: a = "light",
  getRootElement: l = () => document.documentElement,
  cssVariablesResolver: c,
  forceColorScheme: u
}) {
  const { colorScheme: d, setColorScheme: f, clearColorScheme: p } = Fh({
    defaultColorScheme: a,
    forceColorScheme: u,
    manager: s,
    getRootElement: l
  });
  return Bh({
    respectReducedMotion: (e == null ? void 0 : e.respectReducedMotion) || !1,
    getRootElement: l
  }), /* @__PURE__ */ b.createElement(
    qu.Provider,
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
    /* @__PURE__ */ b.createElement(Yu, { theme: e }, r && /* @__PURE__ */ b.createElement(Ju, { cssVariablesSelector: o }), /* @__PURE__ */ b.createElement(Nh, null), t)
  );
}
Qu.displayName = "@mantine/core/MantineProvider";
function Zu({
  classNames: e,
  styles: t,
  props: n,
  stylesCtx: r
}) {
  const o = xt();
  return {
    resolvedClassNames: ho({
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
  return wt(
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
  return ho({
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
  return ho({ theme: n, classNames: r, props: o, stylesCtx: t })[e];
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
      return (a = ho({
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
  className: l,
  rootSelector: c,
  props: u,
  stylesCtx: d
}) {
  return wt(
    Vh({ theme: e, options: t, unstyled: a }),
    qh({ theme: e, themeName: n, selector: r, props: u, stylesCtx: d }),
    Kh({ options: t, classes: s, selector: r, unstyled: a }),
    Gh({ selector: r, stylesCtx: d, theme: e, classNames: i, props: u }),
    zh({ selector: r, stylesCtx: d, options: t, props: u, theme: e }),
    Wh({ rootSelector: c, selector: r, className: l }),
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
function ts({ style: e, theme: t }) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ts({ style: r, theme: t }) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function Jh(e) {
  return e.reduce((t, n) => (n && Object.keys(n).forEach((r) => {
    t[r] = { ...t[r], ...Es(n[r]) };
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
    ...s.map((l) => {
      var c, u, d;
      return (d = (u = (c = n.components) == null ? void 0 : c[l]) == null ? void 0 : u.vars) == null ? void 0 : d.call(u, n, r, o);
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
  style: l,
  vars: c,
  varsResolver: u
}) {
  return {
    ...Xh({ theme: e, themeName: t, props: o, stylesCtx: i, selector: n }),
    ...Ur({ theme: e, styles: a, props: o, stylesCtx: i })[n],
    ...Ur({ theme: e, styles: r == null ? void 0 : r.styles, props: (r == null ? void 0 : r.props) || o, stylesCtx: i })[n],
    ...Qh({ theme: e, props: o, stylesCtx: i, vars: c, varsResolver: u, selector: n, themeName: t }),
    ...s === n ? ts({ style: l, theme: e }) : null,
    ...ts({ style: r == null ? void 0 : r.style, theme: e })
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
  const f = xt(), p = xh(), m = (Array.isArray(e) ? e : [e]).filter((g) => g);
  return (g, h) => ({
    className: Yh({
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
    style: Zh({
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
  const r = xt(), o = (s = r.components[e]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(r) : o;
  return { ...t, ...i, ...Es(n) };
}
function Wl(e) {
  return ht(e).reduce(
    (t, n) => e[n] !== void 0 ? `${t}${Ug(n)}:${e[n]};` : t,
    ""
  ).trim();
}
function eb({ selector: e, styles: t, media: n }) {
  const r = t ? Wl(t) : "", o = Array.isArray(n) ? n.map((i) => `@media${i.query}{${e}{${Wl(i.styles)}}}`) : [];
  return `${r ? `${e}{${r}}` : ""}${o.join("")}`.trim();
}
function tb({ selector: e, styles: t, media: n }) {
  const r = Is();
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
    ff: x,
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
    maw: k,
    h: A,
    mih: L,
    mah: I,
    bgsz: F,
    bgp: O,
    bgr: H,
    bga: K,
    pos: ne,
    top: ye,
    left: ue,
    bottom: $e,
    right: ve,
    inset: re,
    display: we,
    hiddenFrom: ke,
    visibleFrom: Ce,
    lightHidden: Ee,
    darkHidden: _e,
    ...le
  } = e;
  return { styleProps: Es({
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
    ff: x,
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
    maw: k,
    h: A,
    mih: L,
    mah: I,
    bgsz: F,
    bgp: O,
    bgr: H,
    bga: K,
    pos: ne,
    top: ye,
    left: ue,
    bottom: $e,
    right: ve,
    inset: re,
    display: we,
    hiddenFrom: ke,
    visibleFrom: Ce,
    lightHidden: Ee,
    darkHidden: _e
  }), rest: le };
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
  const n = yo({ color: e, theme: t });
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
function lb(e, t) {
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
const Pi = {
  color: rb,
  fontSize: ob,
  spacing: lb,
  identity: ib,
  size: ab,
  lineHeight: sb
};
function Hl(e) {
  return e.replace("(min-width: ", "").replace("em)", "");
}
function cb({
  media: e,
  ...t
}) {
  const r = Object.keys(e).sort((o, i) => Number(Hl(o)) - Number(Hl(i))).map((o) => ({ query: o, styles: e[o] }));
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
  return typeof e == "object" && e !== null ? ht(e).filter((t) => t !== "base") : [];
}
function pb(e, t) {
  return typeof e == "object" && e !== null && t in e ? e[t] : e;
}
function mb({
  styleProps: e,
  data: t,
  theme: n
}) {
  return cb(
    ht(e).reduce(
      (r, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom")
          return r;
        const i = t[o], s = Array.isArray(i.property) ? i.property : [i.property], a = db(e[o]);
        if (!ub(e[o]))
          return s.forEach((c) => {
            r.inlineStyles[c] = Pi[i.type](a, n);
          }), r;
        r.hasResponsiveStyles = !0;
        const l = fb(e[o]);
        return s.forEach((c) => {
          a && (r.styles[c] = Pi[i.type](a, n)), l.forEach((u) => {
            const d = `(min-width: ${n.breakpoints[u]})`;
            r.media[d] = {
              ...r.media[d],
              [c]: Pi[i.type](
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
  return `__m__-${xu().replace(/:/g, "")}`;
}
function $s(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...$s(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function ed(e) {
  return e.startsWith("data-") ? e : `data-${e}`;
}
function hb(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return r === void 0 || r === "" || r === !1 || r === null || (t[ed(n)] = e[n]), t;
  }, {});
}
function td(e) {
  return e ? typeof e == "string" ? { [ed(e)]: !0 } : Array.isArray(e) ? [...e].reduce(
    (t, n) => ({ ...t, ...td(n) }),
    {}
  ) : hb(e) : null;
}
function ns(e, t) {
  return Array.isArray(e) ? [...e].reduce(
    (n, r) => ({ ...n, ...ns(r, t) }),
    {}
  ) : typeof e == "function" ? e(t) : e ?? {};
}
function bb({
  theme: e,
  style: t,
  vars: n,
  styleProps: r
}) {
  const o = ns(t, e), i = ns(n, e);
  return { ...o, ...i, ...r };
}
const nd = ie(
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
    const m = xt(), g = e || "div", { styleProps: h, rest: w } = ur(f), x = gb(), y = mb({
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
      className: wt(r, {
        [x]: y.hasResponsiveStyles,
        "mantine-light-hidden": c,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${l}`]: l
      }),
      "data-variant": o,
      "data-size": ku(s) ? void 0 : s || void 0,
      ...td(i),
      ...w
    };
    return /* @__PURE__ */ b.createElement(b.Fragment, null, y.hasResponsiveStyles && /* @__PURE__ */ b.createElement(
      tb,
      {
        selector: `.${x}`,
        styles: y.styles,
        media: y.media
      }
    ), typeof d == "function" ? d(v) : /* @__PURE__ */ b.createElement(g, { ...v }));
  }
);
nd.displayName = "@mantine/core/Box";
const W = nd;
function rd(e) {
  return e;
}
function q(e) {
  const t = ie(e);
  return t.extend = rd, t;
}
function qt(e) {
  const t = ie(e);
  return t.extend = rd, t;
}
const yb = Gt({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function dr() {
  return ft(yb);
}
function vb(e) {
  if (!e || typeof e == "string")
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Di(e) {
  return e != null && e.current ? e.current.scrollHeight : "auto";
}
const _n = typeof window < "u" && window.requestAnimationFrame;
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
  }, [a, l] = U(r ? {} : s), c = (m) => {
    ws(() => l(m));
  }, u = (m) => {
    c((g) => ({ ...g, ...m }));
  };
  function d(m) {
    return {
      transition: `height ${e || vb(m)}ms ${t}`
    };
  }
  Ft(() => {
    typeof _n == "function" && _n(r ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), _n(() => {
        const m = Di(o);
        u({ ...d(m), height: m });
      });
    } : () => {
      const m = Di(o);
      u({ ...d(m), willChange: "height", height: m }), _n(() => u({ height: i, overflow: "hidden" }));
    });
  }, [r]);
  const f = (m) => {
    if (!(m.target !== o.current || m.propertyName !== "height"))
      if (r) {
        const g = Di(o);
        g === a.height ? c({}) : u({ height: g }), n();
      } else
        a.height === i && (c(s), n());
  };
  function p({ style: m = {}, refKey: g = "ref", ...h } = {}) {
    const w = h[g];
    return {
      "aria-hidden": !r,
      ...h,
      [g]: Hu(o, w),
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
}, od = q((e, t) => {
  const {
    children: n,
    in: r,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: l,
    ...c
  } = j("Collapse", xb, e), u = xt(), d = Uu(), p = (u.respectReducedMotion ? d : !1) ? 0 : o, m = wb({
    opened: r,
    transitionDuration: p,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return p === 0 ? r ? /* @__PURE__ */ b.createElement(W, { ...c }, n) : null : /* @__PURE__ */ b.createElement(W, { ...m({ style: $s(s, u), ref: t, ...c }) }, /* @__PURE__ */ b.createElement(
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
od.displayName = "@mantine/core/Collapse";
const [Sb, nt] = Ut(
  "ScrollArea.Root component was not found in tree"
);
function bn(e, t) {
  const n = en(t);
  cr(() => {
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
  const { style: n, ...r } = e, o = nt(), [i, s] = b.useState(0), [a, l] = b.useState(0), c = !!(i && a);
  return bn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), l(u);
  }), bn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), c ? /* @__PURE__ */ b.createElement("div", { ...r, ref: t, style: { ...n, width: i, height: a } }) : null;
}), Eb = b.forwardRef(
  (e, t) => {
    const n = nt(), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ b.createElement(Cb, { ...e, ref: t }) : null;
  }
), Pb = {
  scrollHideDelay: 1e3,
  type: "hover"
}, id = ie((e, t) => {
  const n = j("ScrollAreaRoot", Pb, e), { type: r, scrollHideDelay: o, scrollbars: i, ...s } = n, [a, l] = U(null), [c, u] = U(null), [d, f] = U(null), [p, m] = U(null), [g, h] = U(null), [w, x] = U(0), [y, v] = U(0), [S, C] = U(!1), [P, E] = U(!1), $ = Oe(t, (N) => l(N));
  return /* @__PURE__ */ b.createElement(
    Sb,
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
        scrollbarY: g,
        onScrollbarYChange: h,
        scrollbarYEnabled: P,
        onScrollbarYEnabledChange: E,
        onCornerWidthChange: x,
        onCornerHeightChange: v
      }
    },
    /* @__PURE__ */ b.createElement(
      W,
      {
        ...s,
        ref: $,
        __vars: {
          "--sa-corner-width": i !== "xy" ? "0px" : `${w}px`,
          "--sa-corner-height": i !== "xy" ? "0px" : `${y}px`
        }
      }
    )
  );
});
id.displayName = "@mantine/core/ScrollAreaRoot";
function sd(e, t) {
  const n = e / t;
  return Number.isNaN(n) ? 0 : n;
}
function vo(e) {
  const t = sd(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function ad(e, t) {
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
function Ul(e, t, n = "ltr") {
  const r = vo(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - o, s = t.content - t.viewport, a = i - r, l = n === "ltr" ? [0, s] : [s * -1, 0], c = Db(e, l);
  return ad([0, s], [0, a])(c);
}
function Rb(e, t, n, r = "ltr") {
  const o = vo(n), i = o / 2, s = t || i, a = o - s, l = n.scrollbar.paddingStart + s, c = n.scrollbar.size - n.scrollbar.paddingEnd - a, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return ad([l, c], d)(e);
}
function ld(e, t) {
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
const [Ib, cd] = Ut(
  "ScrollAreaScrollbar was not found in tree"
), ud = ie((e, t) => {
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
  } = e, f = nt(), [p, m] = b.useState(null), g = Oe(t, (E) => m(E)), h = b.useRef(null), w = b.useRef(""), { viewport: x } = f, y = n.content - n.viewport, v = en(c), S = en(a), C = bo(u, 10), P = (E) => {
    if (h.current) {
      const $ = E.clientX - h.current.left, N = E.clientY - h.current.top;
      l({ x: $, y: N });
    }
  };
  return G(() => {
    const E = ($) => {
      const N = $.target;
      (p == null ? void 0 : p.contains(N)) && v($, y);
    };
    return document.addEventListener("wheel", E, { passive: !1 }), () => document.removeEventListener("wheel", E, { passive: !1 });
  }, [x, p, y, v]), G(S, [n, S]), bn(p, C), bn(f.content, C), /* @__PURE__ */ b.createElement(
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
          E.button === 0 && (E.target.setPointerCapture(E.pointerId), h.current = p.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", P(E));
        }),
        onPointerMove: nn(e.onPointerMove, P),
        onPointerUp: nn(e.onPointerUp, (E) => {
          const $ = E.target;
          $.hasPointerCapture(E.pointerId) && $.releasePointerCapture(E.pointerId), document.body.style.webkitUserSelect = w.current, h.current = null;
        })
      }
    )
  );
}), Ab = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = nt(), [a, l] = U(), c = V(null), u = Oe(t, c, s.onScrollbarXChange);
    return G(() => {
      c.current && l(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ b.createElement(
      ud,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: n,
        style: {
          ...o,
          "--sa-thumb-width": `${vo(n)}px`
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
        onDragScroll: (d) => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollLeft + d.deltaX;
            e.onWheelScroll(p), ld(p, f) && d.preventDefault();
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
), Ob = ie(
  (e, t) => {
    const { sizes: n, onSizesChange: r, style: o, ...i } = e, s = nt(), [a, l] = b.useState(), c = V(null), u = Oe(t, c, s.onScrollbarYChange);
    return G(() => {
      c.current && l(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ b.createElement(
      ud,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: n,
        style: {
          "--sa-thumb-height": `${vo(n)}px`,
          ...o
        },
        onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
        onDragScroll: (d) => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (s.viewport) {
            const p = s.viewport.scrollTop + d.deltaY;
            e.onWheelScroll(p), ld(p, f) && d.preventDefault();
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
), Ns = ie((e, t) => {
  const { orientation: n = "vertical", ...r } = e, { dir: o } = dr(), i = nt(), s = V(null), a = V(0), [l, c] = U({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = sd(l.viewport, l.content), d = {
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
  }, f = (p, m) => Rb(p, a.current, l, m);
  return n === "horizontal" ? /* @__PURE__ */ b.createElement(
    Ab,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollLeft, m = Ul(p, l, o);
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
    Ob,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const p = i.viewport.scrollTop, m = Ul(p, l);
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
}), dd = ie(
  (e, t) => {
    const n = nt(), { forceMount: r, ...o } = e, [i, s] = U(!1), a = e.orientation === "horizontal", l = bo(() => {
      if (n.viewport) {
        const c = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
        s(a ? c : u);
      }
    }, 10);
    return bn(n.viewport, l), bn(n.content, l), r || i ? /* @__PURE__ */ b.createElement(
      Ns,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: t
      }
    ) : null;
  }
), $b = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = nt(), [i, s] = U(!1);
    return G(() => {
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
    }, [o.scrollArea, o.scrollHideDelay]), n || i ? /* @__PURE__ */ b.createElement(
      dd,
      {
        "data-state": i ? "visible" : "hidden",
        ...r,
        ref: t
      }
    ) : null;
  }
), Nb = ie(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = nt(), i = e.orientation === "horizontal", [s, a] = U("hidden"), l = bo(() => a("idle"), 100);
    return G(() => {
      if (s === "idle") {
        const c = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(c);
      }
    }, [s, o.scrollHideDelay]), G(() => {
      const { viewport: c } = o, u = i ? "scrollLeft" : "scrollTop";
      if (c) {
        let d = c[u];
        const f = () => {
          const p = c[u];
          d !== p && (a("scrolling"), l()), d = p;
        };
        return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
      }
    }, [o.viewport, i, l]), n || s !== "hidden" ? /* @__PURE__ */ b.createElement(
      Ns,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...r,
        ref: t,
        onPointerEnter: nn(e.onPointerEnter, () => a("interacting")),
        onPointerLeave: nn(e.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), ql = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = nt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = e.orientation === "horizontal";
    return b.useEffect(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ b.createElement($b, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ b.createElement(Nb, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ b.createElement(dd, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ b.createElement(Ns, { ...r, ref: t }) : null;
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
  const { style: n, ...r } = e, o = nt(), i = cd(), { onThumbPositionChange: s } = i, a = Oe(t, (u) => i.onThumbChange(u)), l = V(), c = bo(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return G(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (c(), !l.current) {
          const f = Tb(u, s);
          l.current = f, s();
        }
      };
      return s(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, c, s]), /* @__PURE__ */ b.createElement(
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
}), Kl = b.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = cd();
    return n || o.hasThumb ? /* @__PURE__ */ b.createElement(Lb, { ref: t, ...r }) : null;
  }
), fd = ie(
  ({ children: e, style: t, ...n }, r) => {
    const o = nt(), i = Oe(r, o.onViewportChange);
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
fd.displayName = "@mantine/core/ScrollAreaViewport";
var Ts = { root: "m-d57069b5", viewport: "m-c0783ff9", viewportInner: "m-f8f631dd", scrollbar: "m-c44ba933", thumb: "m-d8b5e363", corner: "m-21657268" };
const pd = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Mb = (e, { scrollbarSize: t }) => ({
  root: {
    "--scrollarea-scrollbar-size": D(t)
  }
}), fr = q((e, t) => {
  const n = j("ScrollArea", pd, e), {
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
    ...x
  } = n, [y, v] = U(!1), S = Q({
    name: "ScrollArea",
    props: n,
    classes: Ts,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Mb
  });
  return /* @__PURE__ */ b.createElement(
    id,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: t,
      scrollbars: w,
      ...S("root"),
      ...x
    },
    /* @__PURE__ */ b.createElement(
      fd,
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
      ql,
      {
        ...S("scrollbar"),
        orientation: "horizontal",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(Kl, { ...S("thumb") })
    ),
    (w === "xy" || w === "y") && /* @__PURE__ */ b.createElement(
      ql,
      {
        ...S("scrollbar"),
        orientation: "vertical",
        "data-hidden": u === "never" || void 0,
        forceMount: !0,
        onMouseEnter: () => v(!0),
        onMouseLeave: () => v(!1)
      },
      /* @__PURE__ */ b.createElement(Kl, { ...S("thumb") })
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
const Ls = q((e, t) => {
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
    ...x
  } = j("ScrollAreaAutosize", pd, e);
  return /* @__PURE__ */ b.createElement(W, { ...x, ref: t, style: [{ display: "flex" }, h] }, /* @__PURE__ */ b.createElement(W, { style: { display: "flex", flexDirection: "column", flex: 1 } }, /* @__PURE__ */ b.createElement(
    fr,
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
fr.classes = Ts;
Ls.displayName = "@mantine/core/ScrollAreaAutosize";
Ls.classes = Ts;
fr.Autosize = Ls;
var md = { root: "m-87cf2631" };
const kb = {
  __staticSelector: "UnstyledButton"
}, cn = qt(
  (e, t) => {
    const n = j("UnstyledButton", kb, e), {
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
      classes: md,
      className: r,
      style: c,
      classNames: a,
      styles: l,
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
cn.classes = md;
cn.displayName = "@mantine/core/UnstyledButton";
const ut = Math.min, xe = Math.max, Kr = Math.round, Pr = Math.floor, Bt = (e) => ({
  x: e,
  y: e
}), _b = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fb = {
  start: "end",
  end: "start"
};
function rs(e, t, n) {
  return xe(e, ut(t, n));
}
function Pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dt(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function Ms(e) {
  return e === "x" ? "y" : "x";
}
function ks(e) {
  return e === "y" ? "height" : "width";
}
function un(e) {
  return ["top", "bottom"].includes(dt(e)) ? "y" : "x";
}
function _s(e) {
  return Ms(un(e));
}
function Bb(e, t, n) {
  n === void 0 && (n = !1);
  const r = In(e), o = _s(e), i = ks(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Yr(s)), [s, Yr(s)];
}
function jb(e) {
  const t = Yr(e);
  return [os(e), t, os(t)];
}
function os(e) {
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
  const o = In(e);
  let i = Vb(dt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(os)))), i;
}
function Yr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => _b[t]);
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
function Fs(e) {
  return typeof e != "number" ? Gb(e) : {
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
function Yl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = un(t), s = _s(t), a = ks(s), l = dt(t), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
const Wb = async (e, t, n) => {
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
  } = Yl(c, r, l), f = r, p = {}, m = 0;
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
      rects: c,
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
      m++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (c = S.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : S.rects), {
        x: u,
        y: d
      } = Yl(c, f, l)), g = -1;
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
async function Bs(e, t) {
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
  } = Pt(t, e), m = Fs(p), h = a[f ? d === "floating" ? "reference" : "floating" : d], w = yn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
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
  }, S = yn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: x,
    offsetParent: y,
    strategy: l
  }) : x);
  return {
    top: (w.top - S.top + m.top) / v.y,
    bottom: (S.bottom - w.bottom + m.bottom) / v.y,
    left: (w.left - S.left + m.left) / v.x,
    right: (S.right - w.right + m.right) / v.x
  };
}
const Xl = (e) => ({
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
    } = Pt(e, t) || {};
    if (c == null)
      return {};
    const d = Fs(u), f = {
      x: n,
      y: r
    }, p = _s(o), m = ks(p), g = await s.getDimensions(c), h = p === "y", w = h ? "top" : "left", x = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", v = i.reference[m] + i.reference[p] - f[p] - i.floating[m], S = f[p] - i.reference[p], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let P = C ? C[y] : 0;
    (!P || !await (s.isElement == null ? void 0 : s.isElement(C))) && (P = a.floating[y] || i.floating[m]);
    const E = v / 2 - S / 2, $ = P / 2 - g[m] / 2 - 1, N = ut(d[w], $), T = ut(d[x], $), M = N, k = P - g[m] - T, A = P / 2 - g[m] / 2 + E, L = rs(M, A, k), I = !l.arrow && In(o) != null && A != L && i.reference[m] / 2 - (A < M ? N : T) - g[m] / 2 < 0, F = I ? A < M ? A - M : A - k : 0;
    return {
      [p]: f[p] + F,
      data: {
        [p]: L,
        centerOffset: A - L - F,
        ...I && {
          alignmentOffset: F
        }
      },
      reset: I
    };
  }
}), gd = function(e) {
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
      } = Pt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = dt(o), x = dt(a) === a, y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), v = f || (x || !g ? [Yr(a)] : jb(a));
      !f && m !== "none" && v.push(...zb(a, g, m, y));
      const S = [a, ...v], C = await Bs(t, h), P = [];
      let E = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(C[w]), d) {
        const M = Bb(o, s, y);
        P.push(C[M[0]], C[M[1]]);
      }
      if (E = [...E, {
        placement: o,
        overflows: P
      }], !P.every((M) => M <= 0)) {
        var $, N;
        const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, k = S[M];
        if (k)
          return {
            data: {
              index: M,
              overflows: E
            },
            reset: {
              placement: k
            }
          };
        let A = (N = E.filter((L) => L.overflows[0] <= 0).sort((L, I) => L.overflows[1] - I.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var T;
              const L = (T = E.map((I) => [I.placement, I.overflows.filter((F) => F > 0).reduce((F, O) => F + O, 0)]).sort((I, F) => I[1] - F[1])[0]) == null ? void 0 : T[0];
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
function hd(e) {
  const t = ut(...e.map((i) => i.left)), n = ut(...e.map((i) => i.top)), r = xe(...e.map((i) => i.right)), o = xe(...e.map((i) => i.bottom));
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
  return n.map((o) => yn(hd(o)));
}
const bd = function(e) {
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
      } = Pt(e, t), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), d = Hb(u), f = yn(hd(u)), p = Fs(a);
      function m() {
        if (d.length === 2 && d[0].left > d[1].right && l != null && c != null)
          return d.find((h) => l > h.left - p.left && l < h.right + p.right && c > h.top - p.top && c < h.bottom + p.bottom) || f;
        if (d.length >= 2) {
          if (un(n) === "y") {
            const N = d[0], T = d[d.length - 1], M = dt(n) === "top", k = N.top, A = T.bottom, L = M ? N.left : T.left, I = M ? N.right : T.right, F = I - L, O = A - k;
            return {
              top: k,
              bottom: A,
              left: L,
              right: I,
              width: F,
              height: O,
              x: L,
              y: k
            };
          }
          const h = dt(n) === "left", w = xe(...d.map((N) => N.right)), x = ut(...d.map((N) => N.left)), y = d.filter((N) => h ? N.left === x : N.right === w), v = y[0].top, S = y[y.length - 1].bottom, C = x, P = w, E = P - C, $ = S - v;
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
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = dt(n), a = In(n), l = un(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, u = i && l ? -1 : 1, d = Pt(t, e);
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
const yd = function(e) {
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
      } = t, l = await Ub(t, e);
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
}, js = function(e) {
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
        ...l
      } = Pt(e, t), c = {
        x: n,
        y: r
      }, u = await Bs(t, l), d = un(dt(o)), f = Ms(d);
      let p = c[f], m = c[d];
      if (i) {
        const h = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", x = p + u[h], y = p - u[w];
        p = rs(x, p, y);
      }
      if (s) {
        const h = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", x = m + u[h], y = m - u[w];
        m = rs(x, m, y);
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
        mainAxis: l = !0,
        crossAxis: c = !0
      } = Pt(e, t), u = {
        x: n,
        y: r
      }, d = un(o), f = Ms(d);
      let p = u[f], m = u[d];
      const g = Pt(a, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const y = f === "y" ? "height" : "width", v = i.reference[f] - i.floating[y] + h.mainAxis, S = i.reference[f] + i.reference[y] - h.mainAxis;
        p < v ? p = v : p > S && (p = S);
      }
      if (c) {
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
      } = Pt(e, t), l = await Bs(t, a), c = dt(n), u = In(n), d = un(n) === "y", {
        width: f,
        height: p
      } = r.floating;
      let m, g;
      c === "top" || c === "bottom" ? (m = c, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = c, m = u === "end" ? "top" : "bottom");
      const h = p - l[m], w = f - l[g], x = !t.middlewareData.shift;
      let y = h, v = w;
      if (d) {
        const C = f - l.left - l.right;
        v = u || x ? ut(w, C) : C;
      } else {
        const C = p - l.top - l.bottom;
        y = u || x ? ut(h, C) : C;
      }
      if (x && !u) {
        const C = xe(l.left, 0), P = xe(l.right, 0), E = xe(l.top, 0), $ = xe(l.bottom, 0);
        d ? v = f - 2 * (C !== 0 || P !== 0 ? C + P : xe(l.left, l.right)) : y = p - 2 * (E !== 0 || $ !== 0 ? E + $ : xe(l.top, l.bottom));
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
  return vd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ze(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  var t;
  return (t = (vd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function vd(e) {
  return e instanceof Node || e instanceof ze(e).Node;
}
function Dt(e) {
  return e instanceof Element || e instanceof ze(e).Element;
}
function vt(e) {
  return e instanceof HTMLElement || e instanceof ze(e).HTMLElement;
}
function Jl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ze(e).ShadowRoot;
}
function pr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = et(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Yb(e) {
  return ["table", "td", "th"].includes(jt(e));
}
function Vs(e) {
  const t = zs(), n = et(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Xb(e) {
  let t = vn(e);
  for (; vt(t) && !wo(t); ) {
    if (Vs(t))
      return t;
    t = vn(t);
  }
  return null;
}
function zs() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function wo(e) {
  return ["html", "body", "#document"].includes(jt(e));
}
function et(e) {
  return ze(e).getComputedStyle(e);
}
function xo(e) {
  return Dt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function vn(e) {
  if (jt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jl(e) && e.host || // Fallback.
    At(e)
  );
  return Jl(t) ? t.host : t;
}
function wd(e) {
  const t = vn(e);
  return wo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : vt(t) && pr(t) ? t : wd(t);
}
function St(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = wd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = ze(o);
  return i ? t.concat(s, s.visualViewport || [], pr(o) ? o : [], s.frameElement && n ? St(s.frameElement) : []) : t.concat(o, St(o, [], n));
}
function xd(e) {
  const t = et(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = vt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Kr(n) !== i || Kr(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Gs(e) {
  return Dt(e) ? e : e.contextElement;
}
function hn(e) {
  const t = Gs(e);
  if (!vt(t))
    return Bt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = xd(t);
  let s = (i ? Kr(n.width) : n.width) / r, a = (i ? Kr(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Jb = /* @__PURE__ */ Bt(0);
function Sd(e) {
  const t = ze(e);
  return !zs() || !t.visualViewport ? Jb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ze(e) ? !1 : t;
}
function on(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Gs(e);
  let s = Bt(1);
  t && (r ? Dt(r) && (s = hn(r)) : s = hn(e));
  const a = Qb(i, n, r) ? Sd(i) : Bt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = ze(i), p = r && Dt(r) ? ze(r) : r;
    let m = f.frameElement;
    for (; m && r && p !== f; ) {
      const g = hn(m), h = m.getBoundingClientRect(), w = et(m), x = h.left + (m.clientLeft + parseFloat(w.paddingLeft)) * g.x, y = h.top + (m.clientTop + parseFloat(w.paddingTop)) * g.y;
      l *= g.x, c *= g.y, u *= g.x, d *= g.y, l += x, c += y, m = ze(m).frameElement;
    }
  }
  return yn({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Zb(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = vt(n), i = At(n);
  if (n === i)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Bt(1);
  const l = Bt(0);
  if ((o || !o && r !== "fixed") && ((jt(n) !== "body" || pr(i)) && (s = xo(n)), vt(n))) {
    const c = on(n);
    a = hn(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + l.x,
    y: t.y * a.y - s.scrollTop * a.y + l.y
  };
}
function ey(e) {
  return Array.from(e.getClientRects());
}
function Cd(e) {
  return on(At(e)).left + xo(e).scrollLeft;
}
function ty(e) {
  const t = At(e), n = xo(e), r = e.ownerDocument.body, o = xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Cd(e);
  const a = -n.scrollTop;
  return et(r).direction === "rtl" && (s += xe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ny(e, t) {
  const n = ze(e), r = At(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = zs();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function ry(e, t) {
  const n = on(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = vt(e) ? hn(e) : Bt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Ql(e, t, n) {
  let r;
  if (t === "viewport")
    r = ny(e, n);
  else if (t === "document")
    r = ty(At(e));
  else if (Dt(t))
    r = ry(t, n);
  else {
    const o = Sd(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return yn(r);
}
function Ed(e, t) {
  const n = vn(e);
  return n === t || !Dt(n) || wo(n) ? !1 : et(n).position === "fixed" || Ed(n, t);
}
function oy(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = St(e, [], !1).filter((a) => Dt(a) && jt(a) !== "body"), o = null;
  const i = et(e).position === "fixed";
  let s = i ? vn(e) : e;
  for (; Dt(s) && !wo(s); ) {
    const a = et(s), l = Vs(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || pr(s) && !l && Ed(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = vn(s);
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
  const s = [...n === "clippingAncestors" ? oy(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((c, u) => {
    const d = Ql(t, u, o);
    return c.top = xe(d.top, c.top), c.right = ut(d.right, c.right), c.bottom = ut(d.bottom, c.bottom), c.left = xe(d.left, c.left), c;
  }, Ql(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function sy(e) {
  return xd(e);
}
function ay(e, t, n) {
  const r = vt(t), o = At(t), i = n === "fixed", s = on(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Bt(0);
  if (r || !r && !i)
    if ((jt(t) !== "body" || pr(o)) && (a = xo(t)), r) {
      const c = on(t, !0, i, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      o && (l.x = Cd(o));
  return {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Zl(e, t) {
  return !vt(e) || et(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Pd(e, t) {
  const n = ze(e);
  if (!vt(e))
    return n;
  let r = Zl(e, t);
  for (; r && Yb(r) && et(r).position === "static"; )
    r = Zl(r, t);
  return r && (jt(r) === "html" || jt(r) === "body" && et(r).position === "static" && !Vs(r)) ? n : r || Xb(e) || n;
}
const ly = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Pd, i = this.getDimensions;
  return {
    reference: ay(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await i(n)
    }
  };
};
function cy(e) {
  return et(e).direction === "rtl";
}
const uy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zb,
  getDocumentElement: At,
  getClippingRect: iy,
  getOffsetParent: Pd,
  getElementRects: ly,
  getClientRects: ey,
  getDimensions: sy,
  getScale: hn,
  isElement: Dt,
  isRTL: cy
};
function dy(e, t) {
  let n = null, r;
  const o = At(e);
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
    const p = Pr(u), m = Pr(o.clientWidth - (c + d)), g = Pr(o.clientHeight - (u + f)), h = Pr(c), x = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: xe(0, ut(1, l)) || 1
    };
    let y = !0;
    function v(S) {
      const C = S[0].intersectionRatio;
      if (C !== l) {
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
function fy(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Gs(e), u = o || i ? [...c ? St(c) : [], ...St(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = c && a ? dy(c, n) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      p && p.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let m, g = l ? on(e) : null;
  l && h();
  function h() {
    const w = on(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(h);
  }
  return n(), () => {
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), d && d(), p && p.disconnect(), p = null, l && cancelAnimationFrame(m);
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
}, Dd = (e) => {
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
      return r && t(r) ? r.current != null ? Xl({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Xl({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Tr = typeof document < "u" ? po : G;
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
function Rd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ec(e, t) {
  const n = Rd(e);
  return Math.round(t * n) / n;
}
function tc(e) {
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
  const [m, g] = R.useState(null), [h, w] = R.useState(null), x = R.useCallback((I) => {
    I != C.current && (C.current = I, g(I));
  }, [g]), y = R.useCallback((I) => {
    I !== P.current && (P.current = I, w(I));
  }, [w]), v = i || m, S = s || h, C = R.useRef(null), P = R.useRef(null), E = R.useRef(u), $ = tc(l), N = tc(o), T = R.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const I = {
      placement: t,
      strategy: n,
      middleware: f
    };
    N.current && (I.platform = N.current), py(C.current, P.current, I).then((F) => {
      const O = {
        ...F,
        isPositioned: !0
      };
      M.current && !Xr(E.current, O) && (E.current = O, Nm.flushSync(() => {
        d(O);
      }));
    });
  }, [f, t, n, N]);
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
    if (v && (C.current = v), S && (P.current = S), v && S) {
      if ($.current)
        return $.current(v, S, T);
      T();
    }
  }, [v, S, T, $]);
  const k = R.useMemo(() => ({
    reference: C,
    floating: P,
    setReference: x,
    setFloating: y
  }), [x, y]), A = R.useMemo(() => ({
    reference: v,
    floating: S
  }), [v, S]), L = R.useMemo(() => {
    const I = {
      position: n,
      left: 0,
      top: 0
    };
    if (!A.floating)
      return I;
    const F = ec(A.floating, u.x), O = ec(A.floating, u.y);
    return a ? {
      ...I,
      transform: "translate(" + F + "px, " + O + "px)",
      ...Rd(A.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: F,
      top: O
    };
  }, [n, a, A.floating, u.x, u.y]);
  return R.useMemo(() => ({
    ...u,
    update: T,
    refs: k,
    elements: A,
    floatingStyles: L
  }), [u, T, k, A, L]);
}
var Ct = typeof document < "u" ? po : G;
let Ri = !1, gy = 0;
const nc = () => "floating-ui-" + gy++;
function hy() {
  const [e, t] = R.useState(() => Ri ? nc() : void 0);
  return Ct(() => {
    e == null && t(nc());
  }, []), R.useEffect(() => {
    Ri || (Ri = !0);
  }, []), e;
}
const by = R[/* @__PURE__ */ "useId".toString()], Id = by || hy;
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
const vy = /* @__PURE__ */ R.createContext(null), wy = /* @__PURE__ */ R.createContext(null), Ad = () => {
  var e;
  return ((e = R.useContext(vy)) == null ? void 0 : e.id) || null;
}, Ws = () => R.useContext(wy);
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
function So(e) {
  return Tt(e).defaultView || window;
}
function gt(e) {
  return e ? e instanceof Element || e instanceof So(e).Element : !1;
}
function Od(e) {
  return e ? e instanceof HTMLElement || e instanceof So(e).HTMLElement : !1;
}
function Cy(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  const t = So(e).ShadowRoot;
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
function $d(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function Dy(e) {
  return "nativeEvent" in e;
}
function is(e, t) {
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
function Nd(e) {
  return "data-floating-ui-" + e;
}
function rc(e) {
  const t = V(e);
  return Ct(() => {
    t.current = e;
  }), t;
}
const oc = /* @__PURE__ */ Nd("safe-polygon");
function Lr(e, t, n) {
  return n && !$d(n) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t];
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
    refs: l
  } = e, {
    enabled: c = !0,
    delay: u = 0,
    handleClose: d = null,
    mouseOnly: f = !1,
    restMs: p = 0,
    move: m = !0
  } = t, g = Ws(), h = Ad(), w = rc(d), x = rc(u), y = R.useRef(), v = R.useRef(), S = R.useRef(), C = R.useRef(), P = R.useRef(!0), E = R.useRef(!1), $ = R.useRef(() => {
  }), N = R.useCallback(() => {
    var A;
    const L = (A = o.current.openEvent) == null ? void 0 : A.type;
    return (L == null ? void 0 : L.includes("mouse")) && L !== "mousedown";
  }, [o]);
  R.useEffect(() => {
    if (!c)
      return;
    function A() {
      clearTimeout(v.current), clearTimeout(C.current), P.current = !0;
    }
    return i.on("dismiss", A), () => {
      i.off("dismiss", A);
    };
  }, [c, i]), R.useEffect(() => {
    if (!c || !w.current || !n)
      return;
    function A(I) {
      N() && r(!1, I);
    }
    const L = Tt(a).documentElement;
    return L.addEventListener("mouseleave", A), () => {
      L.removeEventListener("mouseleave", A);
    };
  }, [a, n, r, c, w, o, N]);
  const T = R.useCallback(function(A, L) {
    L === void 0 && (L = !0);
    const I = Lr(x.current, "close", y.current);
    I && !S.current ? (clearTimeout(v.current), v.current = setTimeout(() => r(!1, A), I)) : L && (clearTimeout(v.current), r(!1, A));
  }, [x, r]), M = R.useCallback(() => {
    $.current(), S.current = void 0;
  }, []), k = R.useCallback(() => {
    if (E.current) {
      const A = Tt(l.floating.current).body;
      A.style.pointerEvents = "", A.removeAttribute(oc), E.current = !1;
    }
  }, [l]);
  return R.useEffect(() => {
    if (!c)
      return;
    function A() {
      return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1;
    }
    function L(O) {
      if (clearTimeout(v.current), P.current = !1, f && !$d(y.current) || p > 0 && Lr(x.current, "open") === 0)
        return;
      const H = Lr(x.current, "open", y.current);
      H ? v.current = setTimeout(() => {
        r(!0, O);
      }, H) : r(!0, O);
    }
    function I(O) {
      if (A())
        return;
      $.current();
      const H = Tt(a);
      if (clearTimeout(C.current), w.current) {
        n || clearTimeout(v.current), S.current = w.current({
          ...e,
          tree: g,
          x: O.clientX,
          y: O.clientY,
          onClose() {
            k(), M(), T(O);
          }
        });
        const ne = S.current;
        H.addEventListener("mousemove", ne), $.current = () => {
          H.removeEventListener("mousemove", ne);
        };
        return;
      }
      (y.current === "touch" ? !is(a, O.relatedTarget) : !0) && T(O);
    }
    function F(O) {
      A() || w.current == null || w.current({
        ...e,
        tree: g,
        x: O.clientX,
        y: O.clientY,
        onClose() {
          k(), M(), T(O);
        }
      })(O);
    }
    if (gt(s)) {
      const O = s;
      return n && O.addEventListener("mouseleave", F), a == null || a.addEventListener("mouseleave", F), m && O.addEventListener("mousemove", L, {
        once: !0
      }), O.addEventListener("mouseenter", L), O.addEventListener("mouseleave", I), () => {
        n && O.removeEventListener("mouseleave", F), a == null || a.removeEventListener("mouseleave", F), m && O.removeEventListener("mousemove", L), O.removeEventListener("mouseenter", L), O.removeEventListener("mouseleave", I);
      };
    }
  }, [s, a, c, e, f, p, m, T, M, k, r, n, g, x, w, o]), Ct(() => {
    var A;
    if (c && n && (A = w.current) != null && A.__options.blockPointerEvents && N()) {
      const F = Tt(a).body;
      if (F.setAttribute(oc, ""), F.style.pointerEvents = "none", E.current = !0, gt(s) && a) {
        var L, I;
        const O = s, H = g == null || (L = g.nodesRef.current.find((K) => K.id === h)) == null || (I = L.context) == null ? void 0 : I.elements.floating;
        return H && (H.style.pointerEvents = ""), O.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
          O.style.pointerEvents = "", a.style.pointerEvents = "";
        };
      }
    }
  }, [c, n, h, a, s, g, w, o, N]), Ct(() => {
    n || (y.current = void 0, M(), k());
  }, [n, M, k]), R.useEffect(() => () => {
    M(), clearTimeout(v.current), clearTimeout(C.current), k();
  }, [c, M, k]), R.useMemo(() => {
    if (!c)
      return {};
    function A(L) {
      y.current = L.pointerType;
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
  }, [i, c, p, n, r, T]);
}
const Td = /* @__PURE__ */ R.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: !1
}), Ld = () => R.useContext(Td), Iy = (e) => {
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
  return Ct(() => {
    o.currentId ? s.current === null ? s.current = o.currentId : i({
      isInstantPhase: !0
    }) : (i({
      isInstantPhase: !1
    }), s.current = null);
  }, [o.currentId]), /* @__PURE__ */ R.createElement(Td.Provider, {
    value: R.useMemo(() => ({
      ...o,
      setState: i,
      setCurrentId: a
    }), [o, i, a])
  }, t);
}, Ay = (e, t) => {
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
  } = Ld();
  Ct(() => {
    i && (l({
      delay: {
        open: 1,
        close: Lr(a, "close")
      }
    }), i !== o && r(!1));
  }, [o, r, l, i, a]), Ct(() => {
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
  }, [n, l, i, o, r, a, c]), Ct(() => {
    n && s(o);
  }, [n, s, o]);
};
function Oy(e) {
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
function kr(e, t) {
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
}, ky = (e) => {
  var t, n;
  return {
    escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
    outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
  };
};
function _y(e, t) {
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
  } = t, x = Ws(), y = Ad() != null, v = Mr(typeof f == "function" ? f : () => !1), S = typeof f == "function" ? v : f, C = R.useRef(!1), {
    escapeKeyBubbles: P,
    outsidePressBubbles: E
  } = ky(w), $ = Mr((T) => {
    if (!n || !u || !d || T.key !== "Escape")
      return;
    const M = x ? Ii(x.nodesRef.current, i) : [];
    if (!P && (T.stopPropagation(), M.length > 0)) {
      let k = !0;
      if (M.forEach((A) => {
        var L;
        if ((L = A.context) != null && L.open && !A.context.dataRef.current.__escapeKeyBubbles) {
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
    }), r(!1, Dy(T) ? T.nativeEvent : T);
  }), N = Mr((T) => {
    const M = C.current;
    if (C.current = !1, M || typeof S == "function" && !S(T))
      return;
    const k = $y(T);
    if (Od(k) && l) {
      const I = k.clientWidth > 0 && k.scrollWidth > k.clientWidth, F = k.clientHeight > 0 && k.scrollHeight > k.clientHeight;
      let O = F && T.offsetX > k.clientWidth;
      if (F && So(l).getComputedStyle(k).direction === "rtl" && (O = T.offsetX <= k.offsetWidth - k.clientWidth), O || I && T.offsetY > k.clientHeight)
        return;
    }
    const A = x && Ii(x.nodesRef.current, i).some((I) => {
      var F;
      return kr(T, (F = I.context) == null ? void 0 : F.elements.floating);
    });
    if (kr(T, l) || kr(T, a) || A)
      return;
    const L = x ? Ii(x.nodesRef.current, i) : [];
    if (L.length > 0) {
      let I = !0;
      if (L.forEach((F) => {
        var O;
        if ((O = F.context) != null && O.open && !F.context.dataRef.current.__outsidePressBubbles) {
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
    c.current.__escapeKeyBubbles = P, c.current.__outsidePressBubbles = E;
    function T(A) {
      r(!1, A);
    }
    const M = Tt(l);
    d && M.addEventListener("keydown", $), S && M.addEventListener(p, N);
    let k = [];
    return h && (gt(a) && (k = St(a)), gt(l) && (k = k.concat(St(l))), !gt(s) && s && s.contextElement && (k = k.concat(St(s.contextElement)))), k = k.filter((A) => {
      var L;
      return A !== ((L = M.defaultView) == null ? void 0 : L.visualViewport);
    }), k.forEach((A) => {
      A.addEventListener("scroll", T, {
        passive: !0
      });
    }), () => {
      d && M.removeEventListener("keydown", $), S && M.removeEventListener(p, N), k.forEach((A) => {
        A.removeEventListener("scroll", T);
      });
    };
  }, [c, l, a, s, d, S, p, n, r, h, u, P, E, $, N]), R.useEffect(() => {
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
function Hs(e) {
  var t;
  e === void 0 && (e = {});
  const {
    open: n = !1,
    onOpenChange: r,
    nodeId: o
  } = e, [i, s] = R.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || i, l = my(e), c = Ws(), u = Mr((v, S) => {
    v && (f.current.openEvent = S), r == null || r(v, S);
  }), d = R.useRef(null), f = R.useRef({}), p = R.useState(() => yy())[0], m = Id(), g = R.useCallback((v) => {
    const S = gt(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    l.refs.setReference(S);
  }, [l.refs]), h = R.useCallback((v) => {
    (gt(v) || v === null) && (d.current = v, s(v)), (gt(l.refs.reference.current) || l.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !gt(v)) && l.refs.setReference(v);
  }, [l.refs]), w = R.useMemo(() => ({
    ...l.refs,
    setReference: h,
    setPositionReference: g,
    domReference: d
  }), [l.refs, h, g]), x = R.useMemo(() => ({
    ...l.elements,
    domReference: a
  }), [l.elements, a]), y = R.useMemo(() => ({
    ...l,
    refs: w,
    elements: x,
    dataRef: f,
    nodeId: o,
    floatingId: m,
    events: p,
    open: n,
    onOpenChange: u
  }), [l, o, m, p, n, u, w, x]);
  return Ct(() => {
    const v = c == null ? void 0 : c.nodesRef.current.find((S) => S.id === o);
    v && (v.context = y);
  }), R.useMemo(() => ({
    ...l,
    context: y,
    refs: w,
    elements: x
  }), [l, w, x, y]);
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
      domReference: l
    }
  } = e, {
    enabled: c = !0,
    keyboardOnly: u = !0
  } = t, d = R.useRef(""), f = R.useRef(!1), p = R.useRef();
  return R.useEffect(() => {
    if (!c)
      return;
    const g = Tt(a).defaultView || window;
    function h() {
      !n && Od(l) && l === Oy(Tt(l)) && (f.current = !0);
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
        f.current || m.type === "focus" && ((g = o.current.openEvent) == null ? void 0 : g.type) === "mousedown" && kr(o.current.openEvent, l) || r(!0, m.nativeEvent);
      },
      onBlur(m) {
        f.current = !1;
        const g = m.relatedTarget, h = gt(g) && g.hasAttribute(Nd("focus-guard")) && g.getAttribute("data-type") === "outside";
        p.current = setTimeout(() => {
          is(s.floating.current, g) || is(l, g) || h || r(!1, m.nativeEvent);
        });
      }
    }
  } : {}, [c, u, l, s, o, r]);
}
function Ai(e, t, n) {
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
function By(e) {
  e === void 0 && (e = []);
  const t = e, n = R.useCallback(
    (i) => Ai(i, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), r = R.useCallback(
    (i) => Ai(i, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), o = R.useCallback(
    (i) => Ai(i, e, "item"),
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
  } = t, s = Id();
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
function Md(e, t) {
  if (e === "rtl" && (t.includes("right") || t.includes("left"))) {
    const [n, r] = t.split("-"), o = n === "right" ? "left" : "right";
    return r === void 0 ? o : `${o}-${r}`;
  }
  return t;
}
function ic(e, t, n, r) {
  return e === "center" || r === "center" ? { top: t } : e === "end" ? { bottom: n } : e === "start" ? { top: n } : {};
}
function sc(e, t, n, r, o) {
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
  const [l, c = "center"] = e.split("-"), u = {
    width: D(t),
    height: D(t),
    transform: "rotate(45deg)",
    position: "absolute",
    [Vy[l]]: D(r)
  }, d = D(-t / 2);
  return l === "left" ? {
    ...u,
    ...ic(c, s, n, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : l === "right" ? {
    ...u,
    ...ic(c, s, n, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : l === "top" ? {
    ...u,
    ...sc(c, i, n, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : l === "bottom" ? {
    ...u,
    ...sc(c, i, n, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Us = ie(
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
    const { dir: d } = dr();
    return i ? /* @__PURE__ */ b.createElement(
      "div",
      {
        ...c,
        ref: u,
        style: {
          ...l,
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
Us.displayName = "@mantine/core/FloatingArrow";
const [Gy, kd] = Ut(
  "Popover component was not found in the tree"
);
function _d({
  children: e,
  active: t = !0,
  refProp: n = "ref"
}) {
  const r = hh(t), o = Oe(r, e == null ? void 0 : e.ref);
  return Ht(e) ? ln(e, { [n]: o }) : e;
}
_d.displayName = "@mantine/core/FocusTrap";
function Wy(e) {
  const t = document.createElement("div");
  return t.setAttribute("data-portal", "true"), typeof e.className == "string" && t.classList.add(...e.className.split(" ").filter(Boolean)), typeof e.style == "object" && Object.assign(t.style, e.style), typeof e.id == "string" && t.setAttribute("id", e.id), t;
}
const Hy = {}, Fd = ie((e, t) => {
  const { children: n, target: r, ...o } = j("Portal", Hy, e), [i, s] = U(!1), a = V(null);
  return cr(() => (s(!0), a.current = r ? typeof r == "string" ? document.querySelector(r) : r : Wy(o), Wu(t, a.current), !r && a.current && document.body.appendChild(a.current), () => {
    !r && a.current && document.body.removeChild(a.current);
  }), [r]), !i || !a.current ? null : Tm(/* @__PURE__ */ b.createElement(b.Fragment, null, n), a.current);
});
Fd.displayName = "@mantine/core/Portal";
function Co({ withinPortal: e = !0, children: t, ...n }) {
  return e ? /* @__PURE__ */ b.createElement(Fd, { ...n }, t) : /* @__PURE__ */ b.createElement(b.Fragment, null, t);
}
Co.displayName = "@mantine/core/OptionalPortal";
const Fn = (e) => ({
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
    ...Fn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Fn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Fn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Fn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Fn("top"),
    common: { transformOrigin: "top right" }
  }
}, ac = {
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
    ...Dr[e][ac[t]]
  } : {} : {
    transitionProperty: e.transitionProperty,
    ...o,
    ...e.common,
    ...e[ac[t]]
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
  const l = xt(), c = Uu(), u = l.respectReducedMotion ? c : !1, [d, f] = U(u ? 0 : e), [p, m] = U(r ? "entered" : "exited"), g = V(-1), h = (w) => {
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
  return Ft(() => {
    h(r);
  }, [r]), G(() => () => window.clearTimeout(g.current), []), {
    transitionDuration: d,
    transitionStatus: p,
    transitionTimingFunction: n || "ease"
  };
}
function qs({
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
  const { transitionDuration: d, transitionStatus: f, transitionTimingFunction: p } = qy({
    mounted: o,
    exitDuration: r,
    duration: n,
    timingFunction: s,
    onExit: a,
    onEntered: l,
    onEnter: c,
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
qs.displayName = "@mantine/core/Transition";
var Bd = { dropdown: "m-38a85659", arrow: "m-a31dc6c1" };
const Ky = {}, Ks = q((e, t) => {
  var h, w, x, y;
  const n = j("PopoverDropdown", Ky, e), {
    className: r,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: l,
    classNames: c,
    styles: u,
    ...d
  } = n, f = kd(), p = ch({
    opened: f.opened,
    shouldReturnFocus: f.returnFocus
  }), m = f.withRoles ? {
    "aria-labelledby": f.getTargetId(),
    id: f.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = Oe(t, f.floating);
  return f.disabled ? null : /* @__PURE__ */ b.createElement(Co, { ...f.portalProps, withinPortal: f.withinPortal }, /* @__PURE__ */ b.createElement(
    qs,
    {
      mounted: f.opened,
      ...f.transitionProps,
      transition: ((h = f.transitionProps) == null ? void 0 : h.transition) || "fade",
      duration: ((w = f.transitionProps) == null ? void 0 : w.duration) ?? 150,
      keepMounted: f.keepMounted,
      exitDuration: typeof ((x = f.transitionProps) == null ? void 0 : x.exitDuration) == "number" ? f.transitionProps.exitDuration : (y = f.transitionProps) == null ? void 0 : y.duration
    },
    (v) => /* @__PURE__ */ b.createElement(_d, { active: f.trapFocus }, /* @__PURE__ */ b.createElement(
      W,
      {
        ...m,
        ...d,
        variant: l,
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
          classNames: c,
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
        Us,
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
Ks.classes = Bd;
Ks.displayName = "@mantine/core/PopoverDropdown";
const Yy = {
  refProp: "ref",
  popupType: "dialog"
}, jd = q((e, t) => {
  const { children: n, refProp: r, popupType: o, ...i } = j(
    "PopoverTarget",
    Yy,
    e
  );
  if (!Ht(n))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = kd(), l = Oe(a.reference, n.ref, t), c = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return ln(n, {
    ...s,
    ...c,
    ...a.targetProps,
    className: wt(a.targetProps.className, s.className, n.props.className),
    [r]: l,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
jd.displayName = "@mantine/core/PopoverTarget";
function Vd({
  opened: e,
  floating: t,
  position: n,
  positionDependencies: r
}) {
  const [o, i] = U(0);
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
  const n = [yd(e.offset)];
  return (r = e.middlewares) != null && r.shift && n.push(js({ limiter: qb() })), (o = e.middlewares) != null && o.flip && n.push(gd()), (i = e.middlewares) != null && i.inline && n.push(bd()), n.push(Dd({ element: e.arrowRef, padding: e.arrowOffset })), ((s = e.middlewares) != null && s.size || e.width === "target") && n.push(
    Kb({
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
  }, i = Hs({
    placement: e.position,
    middleware: Xy(e, () => i)
  });
  return Vd({
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
  zIndex: Ds("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, Zy = (e, { radius: t, shadow: n }) => ({
  dropdown: {
    "--popover-radius": t === void 0 ? void 0 : tt(t),
    "--popover-shadow": nh(n)
  }
});
function pt(e) {
  var Ot, Ye, Pe, me, $t, Yt;
  const t = j("Popover", Qy, e), {
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
    styles: x,
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
    radius: k,
    shadow: A,
    id: L,
    defaultOpened: I,
    __staticSelector: F,
    withRoles: O,
    disabled: H,
    returnFocus: K,
    variant: ne,
    keepMounted: ye,
    vars: ue,
    ...$e
  } = t, ve = Q({
    name: F,
    props: t,
    classes: Bd,
    classNames: w,
    styles: x,
    unstyled: h,
    rootSelector: "dropdown",
    vars: ue,
    varsResolver: Zy
  }), re = V(null), [we, ke] = U(null), [Ce, Ee] = U(null), { dir: _e } = dr(), le = It(L), X = Jy({
    middlewares: u,
    width: c,
    position: Md(_e, r),
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
      ke(ae), X.floating.refs.setReference(ae);
    },
    [X.floating.refs.setReference]
  ), Ke = Z(
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
        floating: Ke,
        x: X.floating.x,
        y: X.floating.y,
        arrowX: (Pe = (Ye = (Ot = X.floating) == null ? void 0 : Ot.middlewareData) == null ? void 0 : Ye.arrow) == null ? void 0 : Pe.x,
        arrowY: (Yt = ($t = (me = X.floating) == null ? void 0 : me.middlewareData) == null ? void 0 : $t.arrow) == null ? void 0 : Yt.y,
        opened: X.opened,
        arrowRef: re,
        transitionProps: l,
        width: c,
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
        radius: k,
        shadow: A,
        closeOnEscape: C,
        onClose: X.onClose,
        onToggle: X.onToggle,
        getTargetId: () => `${le}-target`,
        getDropdownId: () => `${le}-dropdown`,
        withRoles: O,
        targetProps: $e,
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
pt.Target = jd;
pt.Dropdown = Ks;
pt.displayName = "@mantine/core/Popover";
pt.extend = (e) => e;
var at = { root: "m-5ae2e3c", barsLoader: "m-7a2bd4cd", bar: "m-870bb79", "bars-loader-animation": "m-5d2b3b9d", dotsLoader: "m-4e3f22d7", dot: "m-870c4af", "loader-dots-animation": "m-aac34a1", ovalLoader: "m-b34414df", "oval-loader-animation": "m-f8e89c4b" };
const ev = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(W, { component: "span", className: wt(at.barsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: at.bar }), /* @__PURE__ */ b.createElement("span", { className: at.bar }), /* @__PURE__ */ b.createElement("span", { className: at.bar }))), tv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(W, { component: "span", className: wt(at.dotsLoader, e), ...t, ref: n }, /* @__PURE__ */ b.createElement("span", { className: at.dot }), /* @__PURE__ */ b.createElement("span", { className: at.dot }), /* @__PURE__ */ b.createElement("span", { className: at.dot }))), nv = ie(({ className: e, ...t }, n) => /* @__PURE__ */ b.createElement(W, { component: "span", className: wt(at.ovalLoader, e), ...t, ref: n })), zd = {
  bars: ev,
  oval: nv,
  dots: tv
}, rv = {
  loaders: zd,
  type: "oval"
}, ov = (e, { size: t, color: n }) => ({
  root: {
    "--loader-size": se(t, "loader-size"),
    "--loader-color": n ? yt(n, e) : void 0
  }
}), mr = q((e, t) => {
  const n = j("Loader", rv, e), {
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
    classes: at,
    className: a,
    style: l,
    classNames: c,
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
mr.defaultLoaders = zd;
mr.classes = at;
mr.displayName = "@mantine/core/Loader";
var Eo = { root: "m-8d3f4000", loader: "m-302b9fb1", group: "m-1a0f1b21" };
const lc = {
  orientation: "horizontal"
}, iv = (e, { borderWidth: t }) => ({
  group: { "--ai-border-width": D(t) }
}), Ys = q((e, t) => {
  const n = j("ActionIconGroup", lc, e), {
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
  } = j("ActionIconGroup", lc, e), p = Q({
    name: "ActionIconGroup",
    props: n,
    classes: Eo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: iv,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(
    W,
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
Ys.classes = Eo;
Ys.displayName = "@mantine/core/ActionIconGroup";
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
      "--ai-radius": n === void 0 ? void 0 : tt(n),
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
    disabled: x,
    "data-disabled": y,
    ...v
  } = n, S = Q({
    name: ["ActionIcon", m],
    props: n,
    className: r,
    style: l,
    classes: Eo,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: h,
    varsResolver: av
  });
  return /* @__PURE__ */ b.createElement(
    cn,
    {
      ...S("root", { active: !x && !c && !y }),
      ...v,
      unstyled: o,
      variant: i,
      size: d,
      disabled: x || c,
      ref: t,
      mod: { loading: c, disabled: x || y }
    },
    c ? /* @__PURE__ */ b.createElement(
      mr,
      {
        ...S("loader"),
        color: "var(--ai-color)",
        size: "calc(var(--ai-size) * 0.55)",
        ...u
      }
    ) : w
  );
});
qn.classes = Eo;
qn.displayName = "@mantine/core/ActionIcon";
qn.Group = Ys;
const Gd = ie(
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
Gd.displayName = "@mantine/core/CloseIcon";
var Wd = { root: "m-86a44da5", "root--subtle": "m-220c80f2" };
const lv = {
  variant: "subtle"
}, cv = (e, { size: t, radius: n, iconSize: r }) => ({
  root: {
    "--cb-size": se(t, "cb-size"),
    "--cb-radius": n === void 0 ? void 0 : tt(n),
    "--cb-icon-size": D(r)
  }
}), Po = qt((e, t) => {
  const n = j("CloseButton", lv, e), {
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
    classes: Wd,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: cv
  });
  return /* @__PURE__ */ b.createElement(
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
    /* @__PURE__ */ b.createElement(Gd, null),
    o
  );
});
Po.classes = Wd;
Po.displayName = "@mantine/core/CloseButton";
function uv(e) {
  return $m.toArray(e).filter(Boolean);
}
var Hd = { root: "m-4081bf90" };
const dv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, fv = (e, { grow: t, preventGrowOverflow: n, gap: r, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": t && n ? a : void 0,
    "--group-gap": Fu(r),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), wn = q((e, t) => {
  const n = j("Group", dv, e), {
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
    ...x
  } = n, y = uv(l), v = y.length, S = Fu(c ?? "md"), P = { childWidth: `calc(${100 / v}% - (${S} - ${S} / ${v}))` }, E = Q({
    name: "Group",
    props: n,
    stylesCtx: P,
    className: o,
    style: i,
    classes: Hd,
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
      size: w,
      ...x
    },
    y
  );
});
wn.classes = Hd;
wn.displayName = "@mantine/core/Group";
const [pv, An] = Ps({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var rt = { wrapper: "m-6c018570", input: "m-8fb7ebe7", section: "m-82577fc2", placeholder: "m-88bacfd0", root: "m-46b77525", label: "m-8fdc1311", required: "m-78a94662", error: "m-8f816625", description: "m-fe47ce59" };
const cc = {}, mv = (e, { size: t }) => ({
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ve(t)} - ${D(2)})`
  }
}), Do = q((e, t) => {
  const n = j("InputDescription", cc, e), {
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
  } = j("InputDescription", cc, n), m = An(), g = Q({
    name: ["InputWrapper", u],
    props: n,
    classes: rt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: l,
    varsResolver: mv
  }), h = d && (m == null ? void 0 : m.getStyles) || g;
  return /* @__PURE__ */ b.createElement(
    W,
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
Do.classes = rt;
Do.displayName = "@mantine/core/InputDescription";
const gv = {}, hv = (e, { size: t }) => ({
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ve(t)} - ${D(2)})`
  }
}), Ro = q((e, t) => {
  const n = j("InputError", gv, e), {
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
    classes: rt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "error",
    vars: l,
    varsResolver: hv
  }), g = An(), h = d && (g == null ? void 0 : g.getStyles) || m;
  return /* @__PURE__ */ b.createElement(
    W,
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
Ro.classes = rt;
Ro.displayName = "@mantine/core/InputError";
const uc = {
  labelElement: "label"
}, bv = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ve(t),
    "--input-asterisk-color": void 0
  }
}), Io = q((e, t) => {
  const n = j("InputLabel", uc, e), {
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
  } = j("InputLabel", uc, n), x = Q({
    name: ["InputWrapper", g],
    props: n,
    classes: rt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: l,
    varsResolver: bv
  }), y = An(), v = (y == null ? void 0 : y.getStyles) || x;
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...v("label"),
      component: c,
      variant: h,
      size: u,
      ref: t,
      htmlFor: c === "label" ? f : void 0,
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
Io.classes = rt;
Io.displayName = "@mantine/core/InputLabel";
const dc = {}, Xs = q((e, t) => {
  const n = j("InputPlaceholder", dc, e), {
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
  } = j("InputPlaceholder", dc, n), p = Q({
    name: ["InputPlaceholder", c],
    props: n,
    classes: rt,
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
Xs.classes = rt;
Xs.displayName = "@mantine/core/InputPlaceholder";
function yv(e, { hasDescription: t, hasError: n }) {
  const r = e.findIndex((l) => l === "input"), o = e[r - 1], i = e[r + 1];
  return { offsetBottom: t && i === "description" || n && i === "error", offsetTop: t && o === "description" || n && o === "error" };
}
const vv = {
  labelElement: "label",
  inputContainer: (e) => e,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, wv = (e, { size: t }) => ({
  label: {
    "--input-label-size": Ve(t),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": t === void 0 ? void 0 : `calc(${Ve(t)} - ${D(2)})`
  },
  description: {
    "--input-description-size": t === void 0 ? void 0 : `calc(${Ve(t)} - ${D(2)})`
  }
}), Js = q((e, t) => {
  const n = j("InputWrapper", vv, e), {
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
    descriptionProps: x,
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
    classes: rt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: wv
  }), M = {
    size: c,
    variant: u,
    __staticSelector: d
  }, k = It(P), A = typeof C == "boolean" ? C : E, L = (y == null ? void 0 : y.id) || `${k}-error`, I = (x == null ? void 0 : x.id) || `${k}-description`, F = k, O = !!g && typeof g != "boolean", H = !!h, K = `${O ? L : ""} ${H ? I : ""}`, ne = K.trim().length > 0 ? K.trim() : void 0, ye = (w == null ? void 0 : w.id) || `${k}-label`, ue = m && /* @__PURE__ */ b.createElement(
    Io,
    {
      key: "label",
      labelElement: v,
      id: ye,
      htmlFor: F,
      required: A,
      ...M,
      ...w
    },
    m
  ), $e = H && /* @__PURE__ */ b.createElement(
    Do,
    {
      key: "description",
      ...x,
      ...M,
      size: (x == null ? void 0 : x.size) || M.size,
      id: (x == null ? void 0 : x.id) || I
    },
    h
  ), ve = /* @__PURE__ */ b.createElement(b.Fragment, { key: "input" }, f(S)), re = O && /* @__PURE__ */ b.createElement(
    Ro,
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
        return $e;
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
        ...yv(p, { hasDescription: H, hasError: O })
      }
    },
    /* @__PURE__ */ b.createElement(
      W,
      {
        ref: t,
        variant: u,
        size: c,
        mod: { error: !!g },
        ...T("root"),
        ...N
      },
      we
    )
  );
});
Js.classes = rt;
Js.displayName = "@mantine/core/InputWrapper";
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
    "--input-fz": Ve(t.size),
    "--input-radius": t.radius === void 0 ? void 0 : tt(t.radius),
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
    rightSection: x,
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
    withAria: k,
    withErrorStyles: A,
    ...L
  } = n, { styleProps: I, rest: F } = ur(L), O = An(), H = { offsetBottom: O == null ? void 0 : O.offsetBottom, offsetTop: O == null ? void 0 : O.offsetTop }, K = Q({
    name: ["Input", c],
    props: u || n,
    classes: rt,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    stylesCtx: H,
    rootSelector: "wrapper",
    vars: E,
    varsResolver: Sv
  }), ne = k ? {
    required: l,
    disabled: m,
    "aria-invalid": !!p,
    "aria-describedby": O == null ? void 0 : O.describedBy,
    id: (O == null ? void 0 : O.inputId) || M
  } : {};
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ...K("wrapper"),
      ...I,
      ...f,
      mod: {
        error: !!p && A,
        pointer: $,
        disabled: m,
        multiline: N,
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
      W,
      {
        component: "input",
        ...F,
        ...ne,
        ref: t,
        required: l,
        mod: { disabled: m, error: !!p && A },
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
Se.classes = rt;
Se.Wrapper = Js;
Se.Label = Io;
Se.Error = Ro;
Se.Description = Do;
Se.Placeholder = Xs;
Se.displayName = "@mantine/core/Input";
function Cv(e, t, n) {
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
    id: x,
    size: y,
    style: v,
    inputContainer: S,
    inputWrapperOrder: C,
    withAsterisk: P,
    variant: E,
    vars: $,
    ...N
  } = r, { styleProps: T, rest: M } = ur(N), k = {
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
    ...M,
    classNames: l,
    styles: c,
    unstyled: d,
    wrapperProps: { ...k, ...T },
    inputProps: {
      required: a,
      classNames: l,
      styles: c,
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
const Ev = {
  __staticSelector: "InputBase",
  withAria: !0
}, Kt = qt((e, t) => {
  const { inputProps: n, wrapperProps: r, ...o } = Cv("InputBase", Ev, e);
  return /* @__PURE__ */ b.createElement(Se.Wrapper, { ...r }, /* @__PURE__ */ b.createElement(Se, { ...n, ...o, ref: t }));
});
Kt.classes = { ...Se.classes, ...Se.Wrapper.classes };
Kt.displayName = "@mantine/core/InputBase";
const [Pv, Qs] = Ut(
  "Accordion component was not found in the tree"
);
function Zs({ style: e, size: t = 16, ...n }) {
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
Zs.displayName = "@mantine/core/AccordionChevron";
const [Dv, Ud] = Ut("Accordion.Item component was not found in the tree");
var gr = { root: "m-9bdbb667", panel: "m-df78851f", content: "m-4ba554d4", itemTitle: "m-8fa820a0", control: "m-4ba585b8", "control--default": "m-6939a5e9", "control--contained": "m-4271d21b", label: "m-df3ffa0f", chevron: "m-3f35ae96", icon: "m-9bd771fe", item: "m-9bd7b098", "item--default": "m-fe19b709", "item--contained": "m-1f921b3b", "item--filled": "m-2cdf939a", "item--separated": "m-9f59b069" };
const Rv = {}, ea = q((e, t) => {
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
  } = j("AccordionControl", Rv, e), { value: m } = Ud(), g = Qs(), h = g.isItemActive(m), w = typeof g.order == "number", x = `h${g.order}`, y = /* @__PURE__ */ b.createElement(
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
      onClick: (v) => {
        c == null || c(v), g.onChange(m);
      },
      type: "button",
      disabled: f,
      "aria-expanded": h,
      "aria-controls": g.getRegionId(m),
      id: g.getControlId(m),
      onKeyDown: _u({
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
    l && /* @__PURE__ */ b.createElement(
      W,
      {
        component: "span",
        mod: { "chevron-position": g.chevronPosition },
        ...g.getStyles("icon", { classNames: n, styles: i })
      },
      l
    )
  );
  return w ? /* @__PURE__ */ b.createElement(x, { ...g.getStyles("itemTitle", { classNames: n, styles: i }) }, y) : y;
});
ea.displayName = "@mantine/core/AccordionControl";
ea.classes = gr;
const Iv = {}, ta = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, value: a, ...l } = j(
    "AccordionItem",
    Iv,
    e
  ), c = Qs();
  return /* @__PURE__ */ b.createElement(Dv, { value: { value: a } }, /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      mod: { active: c.isItemActive(a) },
      ...c.getStyles("item", { className: r, classNames: n, styles: i, style: o, variant: c.variant }),
      ...l
    }
  ));
});
ta.displayName = "@mantine/core/AccordionItem";
ta.classes = gr;
const Av = {}, na = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, ...l } = j(
    "AccordionPanel",
    Av,
    e
  ), { value: c } = Ud(), u = Qs();
  return /* @__PURE__ */ b.createElement(
    od,
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
    /* @__PURE__ */ b.createElement("div", { ...u.getStyles("content", { classNames: n, styles: i }) }, a)
  );
});
na.displayName = "@mantine/core/AccordionPanel";
na.classes = gr;
const Ov = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ b.createElement(Zs, null)
}, $v = (e, { transitionDuration: t, chevronSize: n, radius: r }) => ({
  root: {
    "--accordion-transition-duration": t === void 0 ? void 0 : `${t}ms`,
    "--accordion-chevron-size": n === void 0 ? void 0 : D(n),
    "--accordion-radius": r === void 0 ? void 0 : tt(r)
  }
});
function oe(e) {
  const t = j("Accordion", Ov, e), {
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
    chevronSize: x,
    order: y,
    chevron: v,
    variant: S,
    radius: C,
    ...P
  } = t, E = It(p), [$, N] = Et({
    value: u,
    defaultValue: d,
    finalValue: c ? [] : null,
    onChange: f
  }), T = (A) => Array.isArray($) ? $.includes(A) : A === $, M = (A) => {
    const L = Array.isArray($) ? $.includes(A) ? $.filter((I) => I !== A) : [...$, A] : A === $ ? null : A;
    N(L);
  }, k = Q({
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
        chevronPosition: w,
        order: y,
        chevron: v,
        loop: m,
        getStyles: k,
        variant: S,
        unstyled: s
      }
    },
    /* @__PURE__ */ b.createElement(W, { ...k("root"), id: E, ...P, variant: S, "data-accordion": !0 }, l)
  );
}
const Nv = (e) => e;
oe.extend = Nv;
oe.classes = gr;
oe.displayName = "@mantine/core/Accordion";
oe.Item = ta;
oe.Panel = na;
oe.Control = ea;
oe.Chevron = Zs;
var qd = { root: "m-b6d8b162" };
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
    "--text-fz": Ve(o),
    "--text-lh": th(o),
    "--text-gradient": t === "gradient" ? es(r, e) : void 0,
    "--text-line-clamp": typeof n == "number" ? n.toString() : void 0,
    "--text-color": i ? yt(i, e) : void 0
  }
}), Qe = qt((e, t) => {
  const n = j("Text", Lv, e), {
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
    size: x,
    ...y
  } = n, v = Q({
    name: ["Text", c],
    props: n,
    classes: qd,
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
      component: l ? "span" : "p",
      variant: h,
      mod: [
        {
          "data-truncate": Tv(o),
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
Qe.classes = qd;
Qe.displayName = "@mantine/core/Text";
function Kd(e) {
  return typeof e == "string" ? { value: e, label: e } : typeof e == "number" ? { value: e.toString(), label: e.toString() } : "group" in e ? {
    group: e.group,
    items: e.items.map((t) => Kd(t))
  } : e;
}
function Yd(e) {
  return e ? e.map(Kd) : [];
}
function ra(e) {
  return e.reduce((t, n) => "group" in n ? { ...t, ...ra(n.items) } : (t[n.value] = n, t), {});
}
var Ae = { dropdown: "m-88b62a41", options: "m-b2821a6e", option: "m-92253aa5", search: "m-985517d8", empty: "m-2530cd1d", header: "m-858f94bd", footer: "m-82b967cb", group: "m-254f3e4f", groupLabel: "m-2bb2e9e5", chevron: "m-2943220b", optionsDropdownScrollArea: "m-71d052f9", optionsDropdownOption: "m-390b5f4", optionsDropdownCheckIcon: "m-8ee53fc2" };
const kv = {
  error: null
}, _v = (e, { size: t }) => ({
  chevron: {
    "--combobox-chevron-size": se(t, "combobox-chevron-size")
  }
}), oa = q((e, t) => {
  const n = j("ComboboxChevron", kv, e), { size: r, error: o, style: i, className: s, classNames: a, styles: l, unstyled: c, vars: u, ...d } = n, f = Q({
    name: "ComboboxChevron",
    classes: Ae,
    props: n,
    style: i,
    className: s,
    classNames: a,
    styles: l,
    unstyled: c,
    vars: u,
    varsResolver: _v,
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
oa.classes = Ae;
oa.displayName = "@mantine/core/ComboboxChevron";
const [Fv, ot] = Ut(
  "Combobox component was not found in tree"
), Xd = ie(
  ({ size: e, onMouseDown: t, onClick: n, onClear: r, ...o }, i) => /* @__PURE__ */ b.createElement(
    Po,
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
Xd.displayName = "@mantine/core/ComboboxClearButton";
const Bv = {}, ia = q((e, t) => {
  const { classNames: n, styles: r, className: o, style: i, hidden: s, ...a } = j(
    "ComboboxDropdown",
    Bv,
    e
  ), l = ot();
  return /* @__PURE__ */ b.createElement(
    pt.Dropdown,
    {
      ...a,
      ref: t,
      role: "presentation",
      "data-hidden": s || void 0,
      ...l.getStyles("dropdown", { className: o, style: i, classNames: n, styles: r })
    }
  );
});
ia.classes = Ae;
ia.displayName = "@mantine/core/ComboboxDropdown";
const jv = {
  refProp: "ref"
}, Jd = q((e, t) => {
  const { children: n, refProp: r } = j("ComboboxDropdownTarget", jv, e);
  if (ot(), !Ht(n))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ b.createElement(pt.Target, { ref: t, refProp: r }, n);
});
Jd.displayName = "@mantine/core/ComboboxDropdownTarget";
const Vv = {}, sa = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxEmpty",
    Vv,
    e
  ), l = ot();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...l.getStyles("empty", { className: r, classNames: n, styles: i, style: o }),
      ...a
    }
  );
});
sa.classes = Ae;
sa.displayName = "@mantine/core/ComboboxEmpty";
function aa({
  onKeyDown: e,
  withKeyboardNavigation: t,
  withAriaAttributes: n,
  withExpandedAttribute: r,
  targetType: o
}) {
  const i = ot(), [s, a] = U(null), l = (u) => {
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
const zv = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Qd = q((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...l
  } = j("ComboboxEventsTarget", zv, e);
  if (!Ht(n))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const c = ot(), u = aa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  });
  return ln(n, {
    ...u,
    ...l,
    [r]: Oe(t, c.store.targetRef, n == null ? void 0 : n.ref)
  });
});
Qd.displayName = "@mantine/core/ComboboxEventsTarget";
const Gv = {}, la = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxFooter",
    Gv,
    e
  ), l = ot();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...l.getStyles("footer", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
la.classes = Ae;
la.displayName = "@mantine/core/ComboboxFooter";
const Wv = {}, ca = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, children: a, label: l, ...c } = j(
    "ComboboxGroup",
    Wv,
    e
  ), u = ot();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...u.getStyles("group", { className: r, classNames: n, style: o, styles: i }),
      ...c
    },
    l && /* @__PURE__ */ b.createElement("div", { ...u.getStyles("groupLabel", { classNames: n, styles: i }) }, l),
    a
  );
});
ca.classes = Ae;
ca.displayName = "@mantine/core/ComboboxGroup";
const Hv = {}, ua = q((e, t) => {
  const { classNames: n, className: r, style: o, styles: i, vars: s, ...a } = j(
    "ComboboxHeader",
    Hv,
    e
  ), l = ot();
  return /* @__PURE__ */ b.createElement(
    W,
    {
      ref: t,
      ...l.getStyles("header", { className: r, classNames: n, style: o, styles: i }),
      ...a
    }
  );
});
ua.classes = Ae;
ua.displayName = "@mantine/core/ComboboxHeader";
const Uv = {}, da = q((e, t) => {
  const n = j("ComboboxOption", Uv, e), {
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
  } = n, h = ot(), w = xu(), x = c || w;
  return /* @__PURE__ */ b.createElement(
    W,
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
        p ? y.preventDefault() : ((v = h.onOptionSubmit) == null || v.call(h, n.value, n), l == null || l(y));
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
da.classes = Ae;
da.displayName = "@mantine/core/ComboboxOption";
const qv = {}, fa = q((e, t) => {
  const n = j("ComboboxOptions", qv, e), { classNames: r, className: o, style: i, styles: s, id: a, onMouseDown: l, labelledBy: c, ...u } = n, d = ot(), f = It(a);
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
      "aria-labelledby": c,
      onMouseDown: (p) => {
        p.preventDefault(), l == null || l(p);
      }
    }
  );
});
fa.classes = Ae;
fa.displayName = "@mantine/core/ComboboxOptions";
const Kv = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, pa = q((e, t) => {
  const n = j("ComboboxSearch", Kv, e), {
    classNames: r,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: l,
    withKeyboardNavigation: c,
    size: u,
    ...d
  } = n, f = ot(), p = f.getStyles("search"), m = aa({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: c,
    withExpandedAttribute: !1,
    onKeyDown: l
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
pa.classes = Ae;
pa.displayName = "@mantine/core/ComboboxSearch";
const Yv = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1
}, Zd = q((e, t) => {
  const {
    children: n,
    refProp: r,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    ...l
  } = j("ComboboxTarget", Yv, e);
  if (!Ht(n))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const c = ot(), u = aa({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: n.props.onKeyDown
  }), d = ln(n, {
    ...u,
    ...l
  });
  return /* @__PURE__ */ b.createElement(pt.Target, { ref: Oe(t, c.store.targetRef) }, d);
});
Zd.displayName = "@mantine/core/ComboboxTarget";
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
function ma({
  defaultOpened: e,
  opened: t,
  onOpenedChange: n,
  onDropdownClose: r,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, l] = Et({
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
  ), x = Z(
    (I = "unknown") => {
      a ? w(I) : h(I);
    },
    [w, h, a]
  ), y = Z(() => {
    const I = document.querySelector(`#${c.current} [data-combobox-selected]`);
    I == null || I.removeAttribute("data-combobox-selected"), I == null || I.removeAttribute("aria-selected");
  }, []), v = Z(
    (I) => {
      const F = document.getElementById(c.current), O = F == null ? void 0 : F.querySelectorAll("[data-combobox-option]");
      if (!O)
        return null;
      const H = I >= O.length ? 0 : I < 0 ? O.length - 1 : I;
      return u.current = H, O != null && O[H] && !O[H].hasAttribute("data-combobox-disabled") ? (y(), O[H].setAttribute("data-combobox-selected", "true"), O[H].setAttribute("aria-selected", "true"), O[H].scrollIntoView({ block: "nearest", behavior: s }), O[H].id) : null;
    },
    [s, y]
  ), S = Z(() => {
    const I = document.querySelector(
      `#${c.current} [data-combobox-active]`
    );
    if (I) {
      const F = document.querySelectorAll(
        `#${c.current} [data-combobox-option]`
      ), O = Array.from(F).findIndex((H) => H === I);
      return v(O);
    }
    return v(0);
  }, [v]), C = Z(
    () => v(
      Jv(
        u.current,
        document.querySelectorAll(`#${c.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), P = Z(
    () => v(
      Xv(
        u.current,
        document.querySelectorAll(`#${c.current} [data-combobox-option]`),
        i
      )
    ),
    [v, i]
  ), E = Z(
    () => v(
      Qv(
        document.querySelectorAll(`#${c.current} [data-combobox-option]`)
      )
    ),
    [v]
  ), $ = Z((I = "selected") => {
    g.current = window.setTimeout(() => {
      const F = document.querySelectorAll(
        `#${c.current} [data-combobox-option]`
      ), O = Array.from(F).findIndex(
        (H) => H.hasAttribute(`data-combobox-${I}`)
      );
      u.current = O;
    }, 0);
  }, []), N = Z(() => {
    u.current = -1, y();
  }, [y]), T = Z(() => {
    const I = document.querySelectorAll(
      `#${c.current} [data-combobox-option]`
    ), F = I == null ? void 0 : I[u.current];
    F == null || F.click();
  }, []), M = Z((I) => {
    c.current = I;
  }, []), k = Z(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), A = Z(() => {
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
    closeDropdown: w,
    toggleDropdown: x,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: L,
    selectOption: v,
    selectFirstOption: E,
    selectActiveOption: S,
    selectNextOption: C,
    selectPreviousOption: P,
    resetSelectedOption: N,
    updateSelectedOptionIndex: $,
    listId: c.current,
    setListId: M,
    clickSelectedOption: T,
    searchRef: d,
    focusSearchInput: k,
    targetRef: f,
    focusTarget: A
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
    "--combobox-option-fz": Ve(t),
    "--combobox-option-padding": se(t, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": n === void 0 ? void 0 : D(n),
    "--combobox-option-fz": Ve(t),
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
    onOptionSubmit: l,
    size: c,
    dropdownPadding: u,
    resetSelectionOnOptionHover: d,
    __staticSelector: f,
    readOnly: p,
    ...m
  } = t, g = ma(), h = s || g, w = Q({
    name: f || "Combobox",
    classes: Ae,
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
        getStyles: w,
        store: h,
        onOptionSubmit: l,
        size: c,
        resetSelectionOnOptionHover: d,
        readOnly: p
      }
    },
    /* @__PURE__ */ b.createElement(
      pt,
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
J.classes = Ae;
J.displayName = "@mantine/core/Combobox";
J.Target = Zd;
J.Dropdown = ia;
J.Options = fa;
J.Option = da;
J.Search = pa;
J.Empty = sa;
J.Chevron = oa;
J.Footer = la;
J.Header = ua;
J.EventsTarget = Qd;
J.DropdownTarget = Jd;
J.Group = ca;
J.ClearButton = Xd;
var ef = { root: "m-5f75b09e", body: "m-5f6e695e", labelWrapper: "m-d3ea56bb", label: "m-8ee546b8", description: "m-328f68c0", error: "m-8e8a99cc" };
const nw = ef, tf = ie(
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
    variant: m,
    style: g,
    vars: h,
    ...w
  }, x) => {
    const y = Q({
      name: e,
      props: t,
      className: n,
      style: g,
      classes: ef,
      classNames: r,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ b.createElement(
      W,
      {
        ...y("root"),
        ref: x,
        __vars: {
          "--label-fz": Ve(f),
          "--label-lh": se(f, "label-lh")
        },
        mod: { "label-position": p },
        variant: m,
        size: f,
        ...w
      },
      /* @__PURE__ */ b.createElement("div", { ...y("body") }, s, /* @__PURE__ */ b.createElement("div", { ...y("labelWrapper"), "data-disabled": u || void 0 }, a && /* @__PURE__ */ b.createElement("label", { ...y("label"), "data-disabled": u || void 0, htmlFor: c }, a), l && /* @__PURE__ */ b.createElement(Se.Description, { size: f, __inheritStyles: !1, ...y("description") }, l), d && d !== "boolean" && /* @__PURE__ */ b.createElement(Se.Error, { size: f, __inheritStyles: !1, ...y("error") }, d)))
    );
  }
);
tf.displayName = "@mantine/core/InlineInput";
const nf = Gt(null), rw = nf.Provider, ow = () => ft(nf);
function iw({ children: e, role: t }) {
  const n = An();
  return n ? /* @__PURE__ */ b.createElement("div", { role: t, "aria-labelledby": n.labelId, "aria-describedby": n.describedBy }, e) : /* @__PURE__ */ b.createElement(b.Fragment, null, e);
}
const sw = {}, ga = q((e, t) => {
  const { value: n, defaultValue: r, onChange: o, size: i, wrapperProps: s, children: a, ...l } = j(
    "CheckboxGroup",
    sw,
    e
  ), [c, u] = Et({
    value: n,
    defaultValue: r,
    finalValue: [],
    onChange: o
  }), d = (f) => {
    const p = f.currentTarget.value;
    u(
      c.includes(p) ? c.filter((m) => m !== p) : [...c, p]
    );
  };
  return /* @__PURE__ */ b.createElement(rw, { value: { value: c, onChange: d, size: i } }, /* @__PURE__ */ b.createElement(
    Se.Wrapper,
    {
      size: i,
      ref: t,
      ...s,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup"
    },
    /* @__PURE__ */ b.createElement(iw, { role: "group" }, a)
  ));
});
ga.classes = Se.Wrapper.classes;
ga.displayName = "@mantine/core/CheckboxGroup";
function rf({ size: e, style: t, ...n }) {
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
  ) : /* @__PURE__ */ b.createElement(rf, { ...t });
}
var of = { root: "m-bf2d988c", inner: "m-26062bec", input: "m-26063560", icon: "m-bf295423", "input--outline": "m-215c4542" };
const lw = {
  labelPosition: "right",
  icon: aw
}, cw = (e, { radius: t, color: n, size: r, iconColor: o, variant: i }) => {
  const s = yo({ color: n || e.primaryColor, theme: e }), a = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": se(r, "checkbox-size"),
      "--checkbox-radius": t === void 0 ? void 0 : tt(t),
      "--checkbox-color": i === "outline" ? a : yt(n, e),
      "--checkbox-icon-color": o ? yt(o, e) : void 0
    }
  };
}, Ao = q((e, t) => {
  const n = j("Checkbox", lw, e), {
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
    iconColor: $,
    onChange: N,
    ...T
  } = n, M = ow(), k = f || (M == null ? void 0 : M.size), A = P, L = Q({
    name: "Checkbox",
    props: n,
    classes: of,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: cw
  }), { styleProps: I, rest: F } = ur(T), O = It(d), H = M ? {
    checked: M.value.includes(F.value),
    onChange: (K) => {
      M.onChange(K), N == null || N(K);
    }
  } : {};
  return /* @__PURE__ */ b.createElement(
    tf,
    {
      ...L("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: n,
      id: O,
      size: k,
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
      ...I,
      ...m
    },
    /* @__PURE__ */ b.createElement(W, { ...L("inner"), mod: { "data-label-position": w } }, /* @__PURE__ */ b.createElement(
      W,
      {
        component: "input",
        id: O,
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
    ), /* @__PURE__ */ b.createElement(A, { indeterminate: C, ...L("icon") }))
  );
});
Ao.classes = { ...of, ...nw };
Ao.displayName = "@mantine/core/Checkbox";
Ao.Group = ga;
function xn(e) {
  return "group" in e;
}
function sf({
  options: e,
  search: t,
  limit: n
}) {
  const r = t.trim().toLowerCase(), o = [];
  for (let i = 0; i < e.length; i += 1) {
    const s = e[i];
    if (o.length === n)
      return o;
    xn(s) && o.push({
      group: s.group,
      items: sf({
        options: s.items,
        search: t,
        limit: n - o.length
      })
    }), xn(s) || s.label.toLowerCase().includes(r) && o.push(s);
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
function af(e, t = /* @__PURE__ */ new Set()) {
  if (Array.isArray(e))
    for (const n of e)
      if (xn(n))
        af(n.items, t);
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
function lf({ data: e, withCheckIcon: t, value: n, checkIconPosition: r, unstyled: o }) {
  if (!xn(e)) {
    const s = t && Oi(n, e.value) && /* @__PURE__ */ b.createElement(rf, { className: Ae.optionsDropdownCheckIcon });
    return /* @__PURE__ */ b.createElement(
      J.Option,
      {
        value: e.value,
        disabled: e.disabled,
        className: wt({ [Ae.optionsDropdownOption]: !o }),
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
    lf,
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
function cf({
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
  af(e);
  const h = typeof o == "string" ? (r || sf)({
    options: e,
    search: l ? o : "",
    limit: i ?? 1 / 0
  }) : e, w = uw(h), x = h.map((y) => /* @__PURE__ */ b.createElement(
    lf,
    {
      data: y,
      key: xn(y) ? y.group : y.value,
      withCheckIcon: c,
      value: u,
      checkIconPosition: d,
      unstyled: p
    }
  ));
  return /* @__PURE__ */ b.createElement(J.Dropdown, { hidden: t || n && w }, /* @__PURE__ */ b.createElement(J.Options, { labelledBy: m }, a ? /* @__PURE__ */ b.createElement(
    fr.Autosize,
    {
      mah: s ?? 220,
      type: "scroll",
      scrollbarSize: "var(--_combobox-padding)",
      offsetScrollbars: "y",
      className: Ae.optionsDropdownScrollArea
    },
    x
  ) : x, w && f && /* @__PURE__ */ b.createElement(J.Empty, null, f)));
}
var Oo = { root: "m-77c9d27d", inner: "m-80f1301b", loader: "m-a25b86ee", label: "m-811560b9", section: "m-a74036a", group: "m-80d6d844" };
const fc = {
  orientation: "horizontal"
}, dw = (e, { borderWidth: t }) => ({
  group: { "--button-border-width": D(t) }
}), ha = q((e, t) => {
  const n = j("ButtonGroup", fc, e), {
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
  } = j("ButtonGroup", fc, e), p = Q({
    name: "ButtonGroup",
    props: n,
    classes: Oo,
    className: r,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: dw,
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(
    W,
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
ha.classes = Oo;
ha.displayName = "@mantine/core/ButtonGroup";
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
      "--button-fz": i != null && i.includes("compact") ? Ve(i.replace("compact-", "")) : Ve(i),
      "--button-radius": t === void 0 ? void 0 : tt(t),
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
    styles: x,
    unstyled: y,
    "data-disabled": v,
    ...S
  } = n, C = Q({
    name: "Button",
    props: n,
    classes: Oo,
    className: i,
    style: r,
    classNames: w,
    styles: x,
    unstyled: y,
    vars: o,
    varsResolver: pw
  }), P = !!c, E = !!u;
  return /* @__PURE__ */ b.createElement(
    cn,
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
    /* @__PURE__ */ b.createElement("span", { ...C("inner") }, c && /* @__PURE__ */ b.createElement(W, { component: "span", ...C("section"), mod: { position: "left" } }, c), /* @__PURE__ */ b.createElement(W, { component: "span", mod: { loading: m }, ...C("label") }, l), u && /* @__PURE__ */ b.createElement(W, { component: "span", ...C("section"), mod: { position: "right" } }, u))
  );
});
Kn.classes = Oo;
Kn.displayName = "@mantine/core/Button";
Kn.Group = ha;
var uf = { root: "m-de3d2490", colorOverlay: "m-862f3d1b", shadowOverlay: "m-98ae7f22", alphaOverlay: "m-95709ac0", childrenOverlay: "m-93e74e3" };
const pc = {
  withShadow: !0
}, mw = (e, { radius: t, size: n }) => ({
  root: {
    "--cs-radius": t === void 0 ? void 0 : tt(t),
    "--cs-size": D(n)
  }
}), Yn = qt((e, t) => {
  const n = j("ColorSwatch", pc, e), {
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
  } = j("ColorSwatch", pc, n), h = Q({
    name: "ColorSwatch",
    props: n,
    classes: uf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
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
    /* @__PURE__ */ b.createElement("span", { ...h("colorOverlay", { style: { backgroundColor: c } }) }),
    /* @__PURE__ */ b.createElement("span", { ...h("childrenOverlay") }, p)
  );
});
Yn.classes = uf;
Yn.displayName = "@mantine/core/ColorSwatch";
var df = { root: "m-7485cace" };
const gw = {}, hw = (e, { size: t, fluid: n }) => ({
  root: {
    "--container-size": n ? void 0 : se(t, "container-size")
  }
}), ba = q((e, t) => {
  const n = j("Container", gw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, fluid: c, ...u } = n, d = Q({
    name: "Container",
    classes: df,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: hw
  });
  return /* @__PURE__ */ b.createElement(W, { ref: t, mod: { fluid: c }, ...d("root"), ...u });
});
ba.classes = df;
ba.displayName = "@mantine/core/Container";
function bw({ open: e, close: t, openDelay: n, closeDelay: r }) {
  const o = V(-1), i = V(-1), s = () => {
    window.clearTimeout(o.current), window.clearTimeout(i.current);
  }, a = () => {
    s(), n === 0 || n === void 0 ? e() : o.current = window.setTimeout(e, n);
  }, l = () => {
    s(), r === 0 || r === void 0 ? t() : i.current = window.setTimeout(t, r);
  };
  return G(() => s, []), { openDropdown: a, closeDropdown: l };
}
const [yw, ff] = Ut(
  "HoverCard component was not found in the tree"
), vw = {};
function pf(e) {
  const { children: t, onMouseEnter: n, onMouseLeave: r, ...o } = j(
    "HoverCardDropdown",
    vw,
    e
  ), i = ff(), s = Hr(n, i.openDropdown), a = Hr(r, i.closeDropdown);
  return /* @__PURE__ */ b.createElement(pt.Dropdown, { onMouseEnter: s, onMouseLeave: a, ...o }, t);
}
pf.displayName = "@mantine/core/HoverCardDropdown";
const ww = {
  refProp: "ref"
}, mf = ie((e, t) => {
  const { children: n, refProp: r, eventPropsWrapperName: o, ...i } = j(
    "HoverCardTarget",
    ww,
    e
  );
  if (!Ht(n))
    throw new Error(
      "HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = ff(), a = Hr(n.props.onMouseEnter, s.openDropdown), l = Hr(n.props.onMouseLeave, s.closeDropdown), c = { onMouseEnter: a, onMouseLeave: l };
  return /* @__PURE__ */ b.createElement(pt.Target, { refProp: r, ref: t, ...i }, ln(
    n,
    o ? { [o]: c } : c
  ));
});
mf.displayName = "@mantine/core/HoverCardTarget";
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
  ), [l, { open: c, close: u }] = vh(s, { onClose: r, onOpen: n }), { openDropdown: d, closeDropdown: f } = bw({ open: c, close: u, openDelay: o, closeDelay: i });
  return /* @__PURE__ */ b.createElement(yw, { value: { openDropdown: d, closeDropdown: f } }, /* @__PURE__ */ b.createElement(pt, { ...a, opened: l, __staticSelector: "HoverCard" }, t));
}
rn.displayName = "@mantine/core/HoverCard";
rn.Target = mf;
rn.Dropdown = pf;
rn.extend = (e) => e;
function gf(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const [Sw, ya] = Ps(), [Cw, Ew] = Ps();
var $o = { root: "m-7cda1cd6", "root--default": "m-44da308b", "root--contrast": "m-e3a01f8", label: "m-1e0e6180", remove: "m-ae386778", group: "m-1dcfd90b" };
const Pw = {}, Dw = (e, { gap: t }, { size: n }) => ({
  group: {
    "--pg-gap": t !== void 0 ? se(t) : se(n, "pg-gap")
  }
}), va = q((e, t) => {
  const n = j("PillGroup", Pw, e), { classNames: r, className: o, style: i, styles: s, unstyled: a, vars: l, size: c, disabled: u, ...d } = n, f = ya(), p = (f == null ? void 0 : f.size) || c || void 0, m = Q({
    name: "PillGroup",
    classes: $o,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Dw,
    stylesCtx: { size: p },
    rootSelector: "group"
  });
  return /* @__PURE__ */ b.createElement(Cw, { value: { size: p, disabled: u } }, /* @__PURE__ */ b.createElement(W, { ref: t, size: p, ...m("group"), ...d }));
});
va.classes = $o;
va.displayName = "@mantine/core/PillGroup";
const Rw = {
  variant: "default"
}, Iw = (e, { radius: t }, { size: n }) => ({
  root: {
    "--pill-fz": se(n, "pill-fz"),
    "--pill-height": se(n, "pill-height"),
    "--pill-radius": t === void 0 ? void 0 : tt(t)
  }
}), Xn = q((e, t) => {
  const n = j("Pill", Rw, e), {
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
  } = n, x = Ew(), y = ya(), v = g || (x == null ? void 0 : x.size) || void 0, S = (y == null ? void 0 : y.variant) === "filled" ? "contrast" : c || "default", C = Q({
    name: "Pill",
    classes: $o,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: l,
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
      mod: { "with-remove": d, disabled: h || (x == null ? void 0 : x.disabled) },
      ...w
    },
    /* @__PURE__ */ b.createElement("span", { ...C("label") }, u),
    d && /* @__PURE__ */ b.createElement(
      Po,
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
Xn.classes = $o;
Xn.displayName = "@mantine/core/Pill";
Xn.Group = va;
var hf = { field: "m-45c4369d" };
const Aw = {
  type: "visible"
}, wa = q((e, t) => {
  const n = j("PillsInputField", Aw, e), {
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
  } = n, m = ya(), g = An(), h = Q({
    name: "PillsInputField",
    classes: hf,
    props: n,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    rootSelector: "field"
  }), w = u || (m == null ? void 0 : m.disabled);
  return /* @__PURE__ */ b.createElement(
    W,
    {
      component: "input",
      ref: Oe(t, m == null ? void 0 : m.fieldRef),
      "data-type": c,
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
wa.classes = hf;
wa.displayName = "@mantine/core/PillsInputField";
const Ow = {}, Jr = q((e, t) => {
  const n = j("PillsInput", Ow, e), {
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
  return /* @__PURE__ */ b.createElement(Sw, { value: { fieldRef: f, size: s, disabled: a, hasError: !!c, variant: u } }, /* @__PURE__ */ b.createElement(
    Kt,
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
Jr.Field = wa;
function $w({ data: e, value: t }) {
  const n = t.map((o) => o.trim().toLowerCase());
  return e.reduce((o, i) => (xn(i) ? o.push({
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
}, xa = q((e, t) => {
  const n = j("MultiSelect", Nw, e), {
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
    onDropdownOpen: x,
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
    onSearchChange: k,
    readOnly: A,
    disabled: L,
    onFocus: I,
    onBlur: F,
    onPaste: O,
    radius: H,
    rightSection: K,
    rightSectionWidth: ne,
    rightSectionPointerEvents: ye,
    rightSectionProps: ue,
    leftSection: $e,
    leftSectionWidth: ve,
    leftSectionPointerEvents: re,
    leftSectionProps: we,
    inputContainer: ke,
    inputWrapperOrder: Ce,
    withAsterisk: Ee,
    labelProps: _e,
    descriptionProps: le,
    errorProps: X,
    wrapperProps: dn,
    description: Ke,
    label: Ot,
    error: Ye,
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
    placeholder: gl,
    hiddenInputValuesDivider: Sm,
    ...Cm
  } = n, mi = It(ym), gi = Yd(g), wr = ra(gi), Fe = ma({
    opened: h,
    defaultOpened: w,
    onDropdownOpen: x,
    onDropdownClose: () => {
      y == null || y(), Fe.resetSelectedOption();
    }
  }), {
    styleProps: Em,
    rest: { type: hR, ...Pm }
  } = ur(Cm), [Ne, Ln] = Et({
    value: u,
    defaultValue: d,
    finalValue: [],
    onChange: f
  }), [xr, Sr] = Et({
    value: T,
    defaultValue: M,
    finalValue: "",
    onChange: k
  }), hi = Q({
    name: "MultiSelect",
    classes: {},
    props: n,
    classNames: r,
    styles: s,
    unstyled: a
  }), { resolvedClassNames: hl, resolvedStyles: bl } = Zu({
    props: n,
    styles: s,
    classNames: r
  }), Dm = (ce) => {
    p == null || p(ce), ce.key === " " && !me && (ce.preventDefault(), Fe.toggleDropdown()), ce.key === "Backspace" && xr.length === 0 && Ne.length > 0 && Ln(Ne.slice(0, Ne.length - 1));
  }, Rm = Ne.map((ce, bi) => {
    var wl;
    return /* @__PURE__ */ b.createElement(
      Xn,
      {
        key: `${ce}-${bi}`,
        withRemoveButton: !A,
        onRemove: () => Ln(Ne.filter((Im) => ce !== Im)),
        unstyled: a,
        ...hi("pill")
      },
      ((wl = wr[ce]) == null ? void 0 : wl.label) || ce
    );
  });
  G(() => {
    v && Fe.selectFirstOption();
  }, [v, Ne]);
  const yl = vm && Ne.length > 0 && !L && !A && /* @__PURE__ */ b.createElement(
    J.ClearButton,
    {
      size: c,
      ...wm,
      onClear: () => {
        Ln([]), Sr("");
      }
    }
  ), vl = $w({ data: gi, value: Ne });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(
    J,
    {
      store: Fe,
      classNames: hl,
      styles: bl,
      unstyled: a,
      size: c,
      readOnly: A,
      __staticSelector: "MultiSelect",
      onOptionSubmit: (ce) => {
        S == null || S(ce), Sr(""), Fe.updateSelectedOptionIndex("selected"), Ne.includes(wr[ce].value) ? Ln(Ne.filter((bi) => bi !== wr[ce].value)) : Ne.length < Pe && Ln([...Ne, wr[ce].value]);
      },
      ...C
    },
    /* @__PURE__ */ b.createElement(J.DropdownTarget, null, /* @__PURE__ */ b.createElement(
      Jr,
      {
        ...Em,
        __staticSelector: "MultiSelect",
        classNames: hl,
        styles: bl,
        unstyled: a,
        size: c,
        className: o,
        style: i,
        variant: m,
        disabled: L,
        radius: H,
        rightSection: K || yl || /* @__PURE__ */ b.createElement(J.Chevron, { size: c, error: Ye, unstyled: a }),
        rightSectionPointerEvents: ye || (yl ? "all" : "none"),
        rightSectionWidth: ne,
        rightSectionProps: ue,
        leftSection: $e,
        leftSectionWidth: ve,
        leftSectionPointerEvents: re,
        leftSectionProps: we,
        inputContainer: ke,
        inputWrapperOrder: Ce,
        withAsterisk: Ee,
        labelProps: _e,
        descriptionProps: le,
        errorProps: X,
        wrapperProps: dn,
        description: Ke,
        label: Ot,
        error: Ye,
        multiline: !0,
        withErrorStyles: gm,
        __stylesApiProps: { ...n, multiline: !0 },
        pointer: !me,
        onClick: () => me ? Fe.openDropdown() : Fe.toggleDropdown(),
        "data-expanded": Fe.dropdownOpened || void 0,
        id: mi
      },
      /* @__PURE__ */ b.createElement(Xn.Group, { disabled: L, unstyled: a, ...hi("pillsList") }, Rm, /* @__PURE__ */ b.createElement(J.EventsTarget, null, /* @__PURE__ */ b.createElement(
        Jr.Field,
        {
          ...Pm,
          ref: t,
          id: mi,
          placeholder: gl,
          type: !me && !gl ? "hidden" : "visible",
          ...hi("inputField"),
          unstyled: a,
          onFocus: (ce) => {
            I == null || I(ce), me && Fe.openDropdown();
          },
          onBlur: (ce) => {
            F == null || F(ce), Fe.closeDropdown(), me && Fe.closeDropdown(), Sr("");
          },
          onKeyDown: Dm,
          value: xr,
          onChange: (ce) => {
            Sr(ce.currentTarget.value), me && Fe.openDropdown(), v && Fe.selectFirstOption();
          },
          disabled: L,
          readOnly: A || !me,
          pointer: !me
        }
      )))
    )),
    /* @__PURE__ */ b.createElement(
      cf,
      {
        data: Nt ? vl : gi,
        hidden: A || L,
        filter: P,
        search: xr,
        limit: E,
        hiddenWhenEmpty: !me || !$t || Nt && vl.length === 0 && xr.trim().length === 0,
        withScrollArea: $,
        maxDropdownHeight: N,
        filterOptions: me,
        value: Ne,
        checkIconPosition: ae,
        withCheckIcon: Yt,
        nothingFoundMessage: $t,
        unstyled: a,
        labelId: `${mi}-label`
      }
    )
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "hidden",
      name: hm,
      value: Ne.join(Sm),
      form: bm,
      disabled: L,
      ...xm
    }
  ));
});
xa.classes = { ...Kt.classes, ...J.classes };
xa.displayName = "@mantine/core/MultiSelect";
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
  const [n, r] = U(!1), o = V(), { x: i, y: s, elements: a, refs: l, update: c, placement: u } = Hs({
    placement: t,
    middleware: [
      js({
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
  return G(() => {
    if (l.floating.current) {
      const m = o.current;
      m.addEventListener("mousemove", p);
      const g = St(l.floating.current);
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
var No = { tooltip: "m-1b3c8819", arrow: "m-f898399f" };
const kw = {
  refProp: "ref",
  withinPortal: !0,
  offset: 10,
  position: "right",
  zIndex: Ds("popover")
}, _w = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : tt(t),
    "--tooltip-bg": n ? yt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Sa = q((e, t) => {
  const n = j("TooltipFloating", kw, e), {
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
    disabled: x,
    variant: y,
    vars: v,
    portalProps: S,
    ...C
  } = n, P = xt(), E = Q({
    name: "TooltipFloating",
    props: n,
    classes: No,
    className: a,
    style: s,
    classNames: l,
    styles: c,
    unstyled: u,
    rootSelector: "tooltip",
    vars: v,
    varsResolver: _w
  }), { handleMouseMove: $, x: N, y: T, opened: M, boundaryRef: k, floating: A, setOpened: L } = Mw({
    offset: m,
    position: g
  });
  if (!Ht(r))
    throw new Error(
      "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"
    );
  const I = Oe(k, r.ref, t), F = (H) => {
    var K, ne;
    (ne = (K = r.props).onMouseEnter) == null || ne.call(K, H), $(H), L(!0);
  }, O = (H) => {
    var K, ne;
    (ne = (K = r.props).onMouseLeave) == null || ne.call(K, H), L(!1);
  };
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Co, { ...S, withinPortal: i }, /* @__PURE__ */ b.createElement(
    W,
    {
      ...C,
      ...E("tooltip", {
        style: {
          ...$s(s, P),
          zIndex: w,
          display: !x && M ? "block" : "none",
          top: (T && Math.round(T)) ?? "",
          left: (N && Math.round(N)) ?? ""
        }
      }),
      variant: y,
      ref: A
    },
    p
  )), ln(r, {
    ...r.props,
    [o]: I,
    onMouseEnter: F,
    onMouseLeave: O
  }));
});
Sa.classes = No;
Sa.displayName = "@mantine/core/TooltipFloating";
const bf = Gt(!1), Fw = bf.Provider, Bw = () => ft(bf), jw = {
  openDelay: 0,
  closeDelay: 0
};
function yf(e) {
  const { openDelay: t, closeDelay: n, children: r } = j("TooltipGroup", jw, e);
  return /* @__PURE__ */ b.createElement(Fw, { value: !0 }, /* @__PURE__ */ b.createElement(Iy, { delay: { open: t, close: n } }, r));
}
yf.displayName = "@mantine/core/TooltipGroup";
function Vw(e) {
  var C, P, E;
  const [t, n] = U(!1), o = typeof e.opened == "boolean" ? e.opened : t, i = Bw(), s = It(), { delay: a, currentId: l, setCurrentId: c } = Ld(), u = Z(
    ($) => {
      n($), $ && c(s);
    },
    [c, s]
  ), {
    x: d,
    y: f,
    context: p,
    refs: m,
    update: g,
    placement: h,
    middlewareData: { arrow: { x: w, y: x } = {} }
  } = Hs({
    placement: e.position,
    open: o,
    onOpenChange: u,
    middleware: [
      yd(e.offset),
      js({ padding: 8 }),
      gd(),
      Dd({ element: e.arrowRef, padding: e.arrowOffset }),
      ...e.inline ? [bd()] : []
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
    _y(p, { enabled: typeof e.opened > "u" }),
    Ay(p, { id: s })
  ]);
  Vd({
    opened: o,
    position: e.position,
    positionDependencies: e.positionDependencies,
    floating: { refs: m, update: g }
  }), Ft(() => {
    var $;
    ($ = e.onPositionChange) == null || $.call(e, h);
  }, [h]);
  const S = o && l && l !== s;
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
const mc = {
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
  zIndex: Ds("popover"),
  positionDependencies: []
}, zw = (e, { radius: t, color: n }) => ({
  tooltip: {
    "--tooltip-radius": t === void 0 ? void 0 : tt(t),
    "--tooltip-bg": n ? yt(n, e) : void 0,
    "--tooltip-color": n ? "var(--mantine-color-white)" : void 0
  }
}), Sn = q((e, t) => {
  const n = j("Tooltip", mc, e), {
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
    className: x,
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
    disabled: k,
    positionDependencies: A,
    onClick: L,
    onMouseEnter: I,
    onMouseLeave: F,
    inline: O,
    variant: H,
    keepMounted: K,
    vars: ne,
    portalProps: ye,
    ...ue
  } = j("Tooltip", mc, n), { dir: $e } = dr(), ve = V(null), re = Vw({
    position: Md($e, o),
    closeDelay: l,
    openDelay: a,
    onPositionChange: c,
    opened: u,
    events: T,
    arrowRef: ve,
    arrowOffset: S,
    offset: typeof E == "number" ? E + (y ? v / 2 : 0) : E,
    positionDependencies: [...A, r],
    inline: O
  }), we = Q({
    name: "Tooltip",
    props: n,
    classes: No,
    className: x,
    style: w,
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
  const ke = Oe(re.reference, r.ref, t), Ce = Lw($, { duration: 100, transition: "fade" });
  return /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Co, { ...ye, withinPortal: d }, /* @__PURE__ */ b.createElement(
    qs,
    {
      ...Ce,
      keepMounted: K,
      mounted: !k && !!re.opened,
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
        Us,
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
      onMouseEnter: I,
      onMouseLeave: F,
      onMouseMove: n.onMouseMove,
      onPointerDown: n.onPointerDown,
      onPointerEnter: n.onPointerEnter,
      [i]: ke,
      className: wt(x, r.props.className),
      ...r.props
    })
  ));
});
Sn.classes = No;
Sn.displayName = "@mantine/core/Tooltip";
Sn.Floating = Sa;
Sn.Group = yf;
const Gw = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, To = q((e, t) => {
  const n = j("Select", Gw, e), {
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
    selectFirstOptionOnChange: x,
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
    rightSection: k,
    checkIconPosition: A,
    withCheckIcon: L,
    nothingFoundMessage: I,
    name: F,
    form: O,
    searchValue: H,
    defaultSearchValue: K,
    onSearchChange: ne,
    allowDeselect: ye,
    error: ue,
    rightSectionPointerEvents: $e,
    id: ve,
    clearable: re,
    clearButtonProps: we,
    hiddenInputProps: ke,
    ...Ce
  } = n, Ee = Hn(() => Yd(g), [g]), _e = Hn(() => ra(Ee), [Ee]), le = It(ve), [X, dn] = Et({
    value: h,
    defaultValue: w,
    finalValue: null,
    onChange: m
  }), Ke = typeof X == "string" ? _e[X] : void 0, [Ot, Ye] = Et({
    value: H,
    defaultValue: K,
    finalValue: Ke ? Ke.label : "",
    onChange: ne
  }), Pe = ma({
    opened: a,
    defaultOpened: l,
    onDropdownOpen: u,
    onDropdownClose: () => {
      c == null || c(), Pe.resetSelectedOption();
    }
  }), { resolvedClassNames: me, resolvedStyles: $t } = Zu({
    props: n,
    styles: o,
    classNames: r
  });
  G(() => {
    x && Pe.selectFirstOption();
  }, [x, X]), G(() => {
    h === null && Ye(""), typeof h == "string" && Ke && Ye(Ke.label);
  }, [h, Ke]);
  const Yt = re && !!X && !C && !S && /* @__PURE__ */ b.createElement(
    J.ClearButton,
    {
      size: T,
      ...we,
      onClear: () => {
        dn(null), Ye("");
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
        dn(Nt), Ye(typeof Nt == "string" ? _e[ae].label : ""), Pe.closeDropdown();
      },
      size: T,
      ...v
    },
    /* @__PURE__ */ b.createElement(J.Target, { targetType: M ? "input" : "button" }, /* @__PURE__ */ b.createElement(
      Kt,
      {
        id: le,
        ref: t,
        rightSection: k || Yt || /* @__PURE__ */ b.createElement(J.Chevron, { size: T, error: ue, unstyled: i }),
        rightSectionPointerEvents: $e || (Yt ? "all" : "none"),
        ...Ce,
        size: T,
        __staticSelector: "Select",
        disabled: C,
        readOnly: S || !M,
        value: Ot,
        onChange: (ae) => {
          Ye(ae.currentTarget.value), Pe.openDropdown(), x && Pe.selectFirstOption();
        },
        onFocus: (ae) => {
          M && Pe.openDropdown(), d == null || d(ae);
        },
        onBlur: (ae) => {
          var Nt;
          M && Pe.closeDropdown(), Ye(X != null && ((Nt = _e[X]) == null ? void 0 : Nt.label) || ""), f == null || f(ae);
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
      cf,
      {
        data: Ee,
        hidden: S || C,
        filter: P,
        search: Ot,
        limit: E,
        hiddenWhenEmpty: !M || !I,
        withScrollArea: $,
        maxDropdownHeight: N,
        filterOptions: M && (Ke == null ? void 0 : Ke.label) !== Ot,
        value: X,
        checkIconPosition: A,
        withCheckIcon: L,
        nothingFoundMessage: I,
        unstyled: i,
        labelId: `${le}-label`
      }
    )
  ), /* @__PURE__ */ b.createElement(
    "input",
    {
      type: "hidden",
      name: F,
      value: X || "",
      form: O,
      disabled: C,
      ...ke
    }
  ));
});
To.classes = { ...Kt.classes, ...J.classes };
To.displayName = "@mantine/core/Select";
const Ww = {}, Ca = q((e, t) => {
  const { w: n, h: r, miw: o, mih: i, ...s } = j("Space", Ww, e);
  return /* @__PURE__ */ b.createElement(W, { ref: t, ...s, w: n, miw: o ?? n, h: r, mih: i ?? r });
});
Ca.displayName = "@mantine/core/Space";
const [Hw, Ea] = Ut(
  "Tabs component was not found in the tree"
);
var hr = { root: "m-89d60db1", "list--default": "m-576c9d4", list: "m-89d33d6d", panel: "m-b0c91715", tab: "m-4ec4dce6", tabSection: "m-fc420b1f", "tab--default": "m-539e827b", "list--outline": "m-6772fbd5", "tab--outline": "m-b59ab47c", "tab--pills": "m-c3381914" };
const Uw = {}, Pa = q((e, t) => {
  const n = j("TabsList", Uw, e), { children: r, className: o, grow: i, justify: s, classNames: a, styles: l, style: c, ...u } = n, d = Ea();
  return /* @__PURE__ */ b.createElement(
    W,
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
Pa.classes = hr;
Pa.displayName = "@mantine/core/TabsList";
const qw = {}, Da = q((e, t) => {
  const n = j("TabsPanel", qw, e), { children: r, className: o, value: i, classNames: s, styles: a, style: l, ...c } = n, u = Ea(), d = u.value === i, f = u.keepMounted || n.keepMounted || d ? r : null;
  return /* @__PURE__ */ b.createElement(
    W,
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
Da.classes = hr;
Da.displayName = "@mantine/core/TabsPanel";
const Kw = {}, Ra = q((e, t) => {
  const n = j("TabsTab", Kw, e), {
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
  } = n, w = xt(), { dir: x } = dr(), y = Ea(), v = a === y.value, S = (P) => {
    y.onChange(y.allowTabDeactivation && a === y.value ? null : a), l == null || l(P);
  }, C = { classNames: p, styles: m, props: n };
  return /* @__PURE__ */ b.createElement(
    cn,
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
      __vars: { "--tabs-color": d ? yt(d, w) : void 0 },
      onKeyDown: _u({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: y.activateTabWithKeyboard,
        loop: y.loop,
        orientation: y.orientation || "horizontal",
        dir: x,
        onKeyDown: c
      })
    },
    s && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabSection", C), "data-position": "left" }, s),
    o && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabLabel", C) }, o),
    i && /* @__PURE__ */ b.createElement("span", { ...y.getStyles("tabSection", C), "data-position": "right" }, i)
  );
});
Ra.classes = hr;
Ra.displayName = "@mantine/core/TabsTab";
const gc = "Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value", Yw = {
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
    "--tabs-radius": tt(t),
    "--tabs-color": yt(n, e)
  }
}), lt = q((e, t) => {
  const n = j("Tabs", Yw, e), {
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
    classNames: x,
    styles: y,
    unstyled: v,
    className: S,
    style: C,
    vars: P,
    ...E
  } = n, $ = It(c), [N, T] = Et({
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
    classNames: x,
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
        loop: l,
        activateTabWithKeyboard: u,
        getTabId: Wr(`${$}-tab`, gc),
        getPanelId: Wr(`${$}-panel`, gc),
        onChange: T,
        allowTabDeactivation: d,
        variant: f,
        color: p,
        radius: m,
        inverted: g,
        keepMounted: w,
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
lt.classes = hr;
lt.displayName = "@mantine/core/Tabs";
lt.Tab = Ra;
lt.Panel = Da;
lt.List = Pa;
const Jw = {}, Ia = q((e, t) => {
  const n = j("TextInput", Jw, e);
  return /* @__PURE__ */ b.createElement(Kt, { component: "input", ref: t, ...n, __staticSelector: "TextInput" });
});
Ia.classes = Kt.classes;
Ia.displayName = "@mantine/core/TextInput";
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
var vf = { root: "m-8a5d1357" };
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
}, On = q((e, t) => {
  const n = j("Title", e0, e), {
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
    classes: vf,
    className: o,
    style: i,
    classNames: r,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: t0
  });
  return [1, 2, 3, 4, 5, 6].includes(l) ? /* @__PURE__ */ b.createElement(
    W,
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
On.classes = vf;
On.displayName = "@mantine/core/Title";
const n0 = {
  /** Put your mantine theme override here */
}, r0 = "production";
function ge(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var o0 = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), hc = o0, $i = () => Math.random().toString(36).substring(7).split("").join("."), i0 = {
  INIT: `@@redux/INIT${$i()}`,
  REPLACE: `@@redux/REPLACE${$i()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${$i()}`
}, Qr = i0;
function Aa(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function wf(e, t, n) {
  if (typeof e != "function")
    throw new Error(ge(2));
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(ge(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(ge(1));
    return n(wf)(e, t);
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
    const x = a++;
    return s.set(x, h), function() {
      if (w) {
        if (l)
          throw new Error(ge(6));
        w = !1, c(), s.delete(x), i = null;
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
    if (l)
      throw new Error(ge(9));
    try {
      l = !0, o = r(o, h);
    } finally {
      l = !1;
    }
    return (i = s).forEach((x) => {
      x();
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
        function x() {
          const v = w;
          v.next && v.next(u());
        }
        return x(), {
          unsubscribe: h(x)
        };
      },
      [hc]() {
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
    [hc]: m
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
function l0(...e) {
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
function c0(e) {
  return Aa(e) && "type" in e && typeof e.type == "string";
}
var xf = Symbol.for("immer-nothing"), bc = Symbol.for("immer-draftable"), He = Symbol.for("immer-state");
function st(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Cn = Object.getPrototypeOf;
function Vt(e) {
  return !!e && !!e[He];
}
function Rt(e) {
  var t;
  return e ? Sf(e) || Array.isArray(e) || !!e[bc] || !!((t = e.constructor) != null && t[bc]) || Mo(e) || ko(e) : !1;
}
var u0 = Object.prototype.constructor.toString();
function Sf(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Cn(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === u0;
}
function Jn(e, t) {
  Lo(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
    t(n, r, e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Lo(e) {
  const t = e[He];
  return t ? t.type_ : Array.isArray(e) ? 1 : Mo(e) ? 2 : ko(e) ? 3 : 0;
}
function ss(e, t) {
  return Lo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Cf(e, t, n) {
  const r = Lo(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function d0(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Mo(e) {
  return e instanceof Map;
}
function ko(e) {
  return e instanceof Set;
}
function Qt(e) {
  return e.copy_ || e.base_;
}
function as(e, t) {
  if (Mo(e))
    return new Map(e);
  if (ko(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Sf(e))
    return Cn(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
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
  return Object.create(Cn(e), n);
}
function Oa(e, t = !1) {
  return _o(e) || Vt(e) || !Rt(e) || (Lo(e) > 1 && (e.set = e.add = e.clear = e.delete = f0), Object.freeze(e), t && Jn(e, (n, r) => Oa(r, !0))), e;
}
function f0() {
  st(2);
}
function _o(e) {
  return Object.isFrozen(e);
}
var p0 = {};
function sn(e) {
  const t = p0[e];
  return t || st(0, e), t;
}
var Qn;
function Ef() {
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
function yc(e, t) {
  t && (sn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ls(e) {
  cs(e), e.drafts_.forEach(g0), e.drafts_ = null;
}
function cs(e) {
  e === Qn && (Qn = e.parent_);
}
function vc(e) {
  return Qn = m0(Qn, e);
}
function g0(e) {
  const t = e[He];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function wc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[He].modified_ && (ls(t), st(4)), Rt(e) && (e = eo(t, e), t.parent_ || to(t, e)), t.patches_ && sn("Patches").generateReplacementPatches_(
    n[He].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = eo(t, n, []), ls(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== xf ? e : void 0;
}
function eo(e, t, n) {
  if (_o(t))
    return t;
  const r = t[He];
  if (!r)
    return Jn(
      t,
      (o, i) => xc(e, r, t, o, i, n)
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
      (a, l) => xc(e, r, o, a, l, n, s)
    ), to(e, o, !1), n && e.patches_ && sn("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function xc(e, t, n, r, o, i, s) {
  if (Vt(o)) {
    const a = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ss(t.assigned_, r) ? i.concat(r) : void 0, l = eo(e, o, a);
    if (Cf(n, r, l), Vt(l))
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
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Oa(t, n);
}
function h0(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ef(),
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
  let o = r, i = $a;
  n && (o = [r], i = Zn);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return r.draft_ = a, r.revoke_ = s, a;
}
var $a = {
  get(e, t) {
    if (t === He)
      return e;
    const n = Qt(e);
    if (!ss(n, t))
      return b0(e, n, t);
    const r = n[t];
    return e.finalized_ || !Rt(r) ? r : r === Ni(e.base_, t) ? (Ti(e), e.copy_[t] = ds(r, e)) : r;
  },
  has(e, t) {
    return t in Qt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Qt(e));
  },
  set(e, t, n) {
    const r = Pf(Qt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Ni(Qt(e), t), i = o == null ? void 0 : o[He];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (d0(n, o) && (n !== void 0 || ss(e.base_, t)))
        return !0;
      Ti(e), us(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ni(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ti(e), us(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    st(11);
  },
  getPrototypeOf(e) {
    return Cn(e.base_);
  },
  setPrototypeOf() {
    st(12);
  }
}, Zn = {};
Jn($a, (e, t) => {
  Zn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Zn.deleteProperty = function(e, t) {
  return Zn.set.call(this, e, t, void 0);
};
Zn.set = function(e, t, n) {
  return $a.set.call(this, e[0], t, n, e[0]);
};
function Ni(e, t) {
  const n = e[He];
  return (n ? Qt(n) : e)[t];
}
function b0(e, t, n) {
  var o;
  const r = Pf(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function Pf(e, t) {
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
function us(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && us(e.parent_));
}
function Ti(e) {
  e.copy_ || (e.copy_ = as(
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
        return function(l = i, ...c) {
          return s.produce(l, (u) => n.call(this, u, ...c));
        };
      }
      typeof n != "function" && st(6), r !== void 0 && typeof r != "function" && st(7);
      let o;
      if (Rt(t)) {
        const i = vc(this), s = ds(t, void 0);
        let a = !0;
        try {
          o = n(s), a = !1;
        } finally {
          a ? ls(i) : cs(i);
        }
        return yc(i, r), wc(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === xf && (o = void 0), this.autoFreeze_ && Oa(o, !0), r) {
          const i = [], s = [];
          sn("Patches").generateReplacementPatches_(t, o, i, s), r(i, s);
        }
        return o;
      } else
        st(1, t);
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
    Rt(e) || st(8), Vt(e) && (e = Df(e));
    const t = vc(this), n = ds(e, void 0);
    return n[He].isManual_ = !0, cs(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[He];
    (!n || !n.isManual_) && st(9);
    const { scope_: r } = n;
    return yc(r, t), wc(void 0, r);
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
function ds(e, t) {
  const n = Mo(e) ? sn("MapSet").proxyMap_(e, t) : ko(e) ? sn("MapSet").proxySet_(e, t) : h0(e, t);
  return (t ? t.scope_ : Ef()).drafts_.push(n), n;
}
function Df(e) {
  return Vt(e) || st(10, e), Rf(e);
}
function Rf(e) {
  if (!Rt(e) || _o(e))
    return e;
  const t = e[He];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = as(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = as(e, !0);
  return Jn(n, (r, o) => {
    Cf(n, r, Rf(o));
  }), t && (t.finalized_ = !1), n;
}
var Ue = new y0(), If = Ue.produce;
Ue.produceWithPatches.bind(
  Ue
);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
Ue.applyPatches.bind(Ue);
Ue.createDraft.bind(Ue);
Ue.finishDraft.bind(Ue);
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
var Sc = (e) => Array.isArray(e) ? e : [e];
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
}, P0 = typeof WeakRef < "u" ? WeakRef : E0, D0 = 0, Cc = 1;
function Rr() {
  return {
    s: D0,
    v: void 0,
    o: null,
    p: null
  };
}
function Na(e, t = {}) {
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
    if (a.s === Cc ? u = a.v : (u = e.apply(null, arguments), i++), c.s = Cc, r) {
      const f = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      f != null && r(f, u) && (u = f, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new P0(u) : u;
    }
    return c.v = u, u;
  }
  return s.clearCache = () => {
    n = Rr(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function Af(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...o) => {
    let i = 0, s = 0, a, l = {}, c = o.pop();
    typeof c == "object" && (l = c, c = o.pop()), v0(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const u = {
      ...n,
      ...l
    }, {
      memoize: d,
      memoizeOptions: f = [],
      argsMemoize: p = Na,
      argsMemoizeOptions: m = [],
      devModeChecks: g = {}
    } = u, h = Sc(f), w = Sc(m), x = S0(o), y = d(function() {
      return i++, c.apply(
        null,
        arguments
      );
    }, ...h), v = p(function() {
      s++;
      const C = C0(
        x,
        arguments
      );
      return a = y.apply(null, C), a;
    }, ...w);
    return Object.assign(v, {
      resultFunc: c,
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
var Ta = /* @__PURE__ */ Af(Na), R0 = Object.assign(
  (e, t = Ta) => {
    w0(
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
  { withTypes: () => R0 }
);
function Of(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var I0 = Of(), A0 = Of, O0 = (...e) => {
  const t = Af(...e), n = Object.assign((...r) => {
    const o = t(...r), i = (s, ...a) => o(Vt(s) ? Df(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => n
  });
  return n;
};
O0(Na);
var $0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Zr : Zr.apply(null, arguments);
}, N0 = (e) => e && typeof e.match == "function";
function bt(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(Me(0));
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => c0(r) && r.type === e, n;
}
var $f = class zn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, zn.prototype);
  }
  static get [Symbol.species]() {
    return zn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new zn(...t[0].concat(this)) : new zn(...t.concat(this));
  }
};
function Ec(e) {
  return Rt(e) ? If(e, () => {
  }) : e;
}
function Pc(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert)
    throw new Error(Me(10));
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
  let s = new $f();
  return n && (T0(n) ? s.push(I0) : s.push(A0(n.extraArgument))), s;
}, M0 = "RTK_autoBatch", Nf = (e) => (t) => {
  setTimeout(t, e);
}, k0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Nf(10), _0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? k0 : e.type === "callback" ? e.queueNotification : Nf(e.timeout), c = () => {
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
        return o = !((d = u == null ? void 0 : u.meta) != null && d[M0]), i = !o, i && (s || (s = !0, l(c))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, F0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new $f(e);
  return r && o.push(_0(typeof r == "object" ? r : void 0)), o;
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
    throw new Error(Me(1));
  let l;
  typeof r == "function" ? l = r(t) : l = t();
  let c = Zr;
  o && (c = $0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !B0,
    ...typeof o == "object" && o
  }));
  const u = l0(...l), d = F0(u);
  let f = typeof s == "function" ? s(d) : d();
  const p = c(...f);
  return wf(a, i, p);
}
function Tf(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(Me(28));
      if (a in t)
        throw new Error(Me(29));
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
  let [n, r, o] = Tf(t), i;
  if (V0(e))
    i = () => Ec(e());
  else {
    const a = Ec(e);
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
        if (Vt(u)) {
          const p = d(u, l);
          return p === void 0 ? u : p;
        } else {
          if (Rt(u))
            return If(u, (f) => d(f, l));
          {
            const f = d(u, l);
            if (f === void 0) {
              if (u === null)
                return u;
              throw new Error(Me(9));
            }
            return f;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var G0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Lf = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += G0[Math.random() * 64 | 0];
  return t;
}, W0 = (e, t) => N0(e) ? e.match(t) : e(t);
function H0(...e) {
  return (t) => e.some((n) => W0(n, t));
}
var U0 = ["name", "message", "stack", "code"], Li = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    De(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Dc = class {
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
}, Fo = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = bt(t + "/fulfilled", (l, c, u, d) => ({
      payload: l,
      meta: {
        ...d || {},
        arg: u,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), i = bt(t + "/pending", (l, c, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: c,
        requestId: l,
        requestStatus: "pending"
      }
    })), s = bt(t + "/rejected", (l, c, u, d, f) => ({
      payload: d,
      error: (r && r.serializeError || q0)(l || "Rejected"),
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
        const f = r != null && r.idGenerator ? r.idGenerator(l) : Lf(), p = new AbortController();
        let m, g;
        function h(x) {
          g = x, p.abort();
        }
        const w = async function() {
          var v, S;
          let x;
          try {
            let C = (v = r == null ? void 0 : r.condition) == null ? void 0 : v.call(r, l, {
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
            c(i(f, l, (S = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : S.call(r, {
              requestId: f,
              arg: l
            }, {
              getState: u,
              extra: d
            }))), x = await Promise.race([P, Promise.resolve(n(l, {
              dispatch: c,
              getState: u,
              extra: d,
              requestId: f,
              signal: p.signal,
              abort: h,
              rejectWithValue: (E, $) => new Li(E, $),
              fulfillWithValue: (E, $) => new Dc(E, $)
            })).then((E) => {
              if (E instanceof Li)
                throw E;
              return E instanceof Dc ? o(E.payload, f, l, E.meta) : o(E, f, l);
            })]);
          } catch (C) {
            x = C instanceof Li ? s(null, f, l, C.payload, C.meta) : s(C, f, l);
          } finally {
            m && p.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && s.match(x) && x.meta.condition || c(x), x;
        }();
        return Object.assign(w, {
          abort: h,
          requestId: f,
          arg: l,
          unwrap() {
            return w.then(K0);
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
      throw new Error(Me(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(ex()) : o.reducers) || {}, l = Object.keys(a), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(y, v) {
        const S = typeof y == "string" ? y : y.type;
        if (!S)
          throw new Error(Me(12));
        if (S in c.sliceCaseReducersByType)
          throw new Error(Me(13));
        return c.sliceCaseReducersByType[S] = v, u;
      },
      addMatcher(y, v) {
        return c.sliceMatchers.push({
          matcher: y,
          reducer: v
        }), u;
      },
      exposeAction(y, v) {
        return c.actionCreators[y] = v, u;
      },
      exposeCaseReducer(y, v) {
        return c.sliceCaseReducersByName[y] = v, u;
      }
    };
    l.forEach((y) => {
      const v = a[y], S = {
        reducerName: y,
        type: J0(i, y),
        createNotation: typeof o.reducers == "function"
      };
      nx(v) ? ox(S, v, u, t) : tx(S, v, u);
    });
    function d() {
      const [y = {}, v = [], S = void 0] = typeof o.extraReducers == "function" ? Tf(o.extraReducers) : [o.extraReducers], C = {
        ...y,
        ...c.sliceCaseReducersByType
      };
      return z0(o.initialState, (P) => {
        for (let E in C)
          P.addCase(E, C[E]);
        for (let E of c.sliceMatchers)
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
        const E = Pc(p, v, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Pc(E, P, {
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
    const x = {
      name: i,
      reducer: g,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
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
function Z0(e, t, n, r) {
  function o(i, ...s) {
    let a = t(i);
    return typeof a > "u" && r && (a = n()), e(a, ...s);
  }
  return o.unwrapped = e, o;
}
var La = Q0();
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
      throw new Error(Me(17));
    i = r.reducer, s = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, s ? bt(e, s) : bt(e));
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
    throw new Error(Me(18));
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
var ix = (e, t) => {
  if (typeof e != "function")
    throw new Error(Me(32));
}, Ma = "listenerMiddleware", sx = (e) => {
  let {
    type: t,
    actionCreator: n,
    matcher: r,
    predicate: o,
    effect: i
  } = e;
  if (t)
    o = bt(t).match;
  else if (n)
    t = n.type, o = n.match;
  else if (r)
    o = r;
  else if (!o)
    throw new Error(Me(21));
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
    id: Lf(),
    effect: r,
    type: t,
    predicate: n,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Me(22));
    }
  };
}, {
  withTypes: () => ax
}), lx = Object.assign(bt(`${Ma}/add`), {
  withTypes: () => lx
});
bt(`${Ma}/removeAll`);
var cx = Object.assign(bt(`${Ma}/remove`), {
  withTypes: () => cx
});
function Me(e) {
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
        const w = m ? await g[m]().then((x) => (h.ok ? h.data = x : h.error = x, h)).catch((x) => (h.error = x, h)) : h;
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
}, Rc = (e, t) => {
  e.language = t.payload, be.changeLanguage(t.payload);
}, ka = bt("settings/setSettings"), Mf = La({
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
    setLanguage: Rc,
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
        t.bsddApiEnvironment = n, t.mainDictionary = r, t.filterDictionaries = o, Rc(t, { payload: i, type: "setLanguage" }), t.includeTestDictionaries = s;
      }
    );
  }
}), Bo = (e) => {
  const t = e.settings.bsddApiEnvironment;
  return t !== null ? fx[t] : null;
}, kf = Ta(
  (e) => e.settings.mainDictionary,
  (e) => e.settings.filterDictionaries,
  (e, t) => e ? [e, ...t] : t
);
Ta(
  kf,
  (e) => e.map((t) => t.ifcClassification.location)
);
const mx = (e) => e.settings.bsddApiEnvironment, _a = (e) => e.settings.mainDictionary, _f = (e) => e.settings.filterDictionaries, gx = (e) => e.settings.language, hx = (e) => e.settings.includeTestDictionaries;
Mf.actions;
const bx = Mf.reducer, Ff = 500, yx = 500;
let tn = null, _r = {};
const Ic = {
  classes: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1
}, vx = (e) => {
  const t = Bo(e);
  return t && (!tn || tn.baseUrl !== t) && (tn = new br(t)), tn;
}, no = Fo("bsdd/fetchDictionaries", ({ bsddApiEnvironment: e, includeTestDictionaries: t }, n) => {
  if (console.log("fetchDictionaries", e), !e)
    return n.rejectWithValue("No bsddApiEnvironment provided");
  const r = new br(e), o = yx;
  let i = 0;
  const s = [];
  return new Promise((a, l) => {
    function c() {
      r.api.dictionaryV1List({ IncludeTestDictionaries: t, Limit: o, Offset: i }).then((u) => {
        u.ok || l(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: d, totalCount: f } = {} } = u;
        if (d && typeof f < "u")
          if (s.push(...d), i += o, s.length >= f) {
            const p = s.reduce((m, g) => (m[g.uri] = g, m), {});
            a(p);
          } else
            c();
        else
          l(new Error(`bSDD API error! status: ${u.status}`));
      });
    }
    c();
  });
}), Bf = Fo(
  "bsdd/fetchDictionaryClasses",
  async (e, { getState: t, dispatch: n }) => {
    const r = t();
    if (r.bsdd.dictionaryClasses[e])
      return r.bsdd.dictionaryClasses[e];
    if (_r[e])
      return await _r[e];
    const o = (async () => {
      const s = vx(t());
      if (!s)
        throw new Error("BsddApi is not initialized");
      const a = [];
      let l = 0, c;
      for (; ; ) {
        const u = await wx(s, e, l), d = u.classes ?? [];
        if (a.push(...d), l === 0 && (c = u.classesTotalCount, c == null))
          throw new Error("Total count is null or undefined");
        if (c != null && a.length >= c)
          break;
        l += Ff;
      }
      return n({ type: "bsdd/addDictionaryClasses", payload: { uri: e, classes: a } }), a;
    })();
    return _r[e] = o, await o;
  }
), jf = La({
  name: "bsdd",
  initialState: Ic,
  reducers: {
    resetState: () => Ic,
    addClass: (e, t) => {
      e.classes[t.payload.uri] = t.payload.data;
    },
    addDictionaryClasses: (e, t) => {
      e.dictionaryClasses[t.payload.uri] = t.payload.data;
    }
  },
  extraReducers: (e) => {
    e.addCase(no.pending, (t) => {
      t.loaded = !1;
    }).addCase(no.fulfilled, (t, n) => {
      console.log("fetch dictionaries fulfilled", n.payload), t.dictionaries = n.payload, t.loaded = !0;
    }).addCase(Bf.rejected, (t, n) => {
      console.error("fetch dictionary classes failed", n.error), t.loaded = !0;
    });
  }
});
Fo("bsdd/fetchClass", async (e, { getState: t, dispatch: n }) => {
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
async function wx(e, t, n) {
  const r = await e.api.dictionaryV1ClassesList({
    Uri: t,
    UseNestedClasses: !1,
    Limit: Ff,
    Offset: n
    // languageCode: languageCode || undefined,
  });
  if (!r.ok)
    throw new Error(`HTTP error! status: ${r.status}`);
  return r.data;
}
const Vf = (e, t) => e.bsdd.dictionaries[t], xx = (e, t) => e.bsdd.dictionaryClasses[t], Sx = (e) => e.bsdd.dictionaries, Cx = (e) => e.bsdd.loaded, { resetState: Ex } = jf.actions;
function Px(e) {
  return (t) => {
    tn = new br(e), _r = {}, t(Ex());
  };
}
const Dx = jf.reducer;
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
const Rx = async (e, t, n) => {
  if (!(e != null && e.location))
    return null;
  const r = xx(t, e.location);
  if (r)
    return r;
  const o = await n(Bf(e.location));
  return o.payload ? o.payload : (console.error("Failed to fetch dictionary classes"), null);
};
function Ix(e, t) {
  return e.identification ? t.find((n) => n.code === e.identification) : t.find((n) => n.name === e.name);
}
function gn(e, t) {
  return console.error(e), { ifcClassificationReference: t, validationState: "invalid", message: e };
}
async function Ax(e, t, n) {
  if (e.location)
    return { ifcClassificationReference: e, validationState: "valid", message: "Location is already set" };
  if (!e.referencedSource || !e.referencedSource.location)
    return gn(
      "Cannot patch IfcClassificationReference: missing referencedSource or its location",
      e
    );
  const r = await Rx(e.referencedSource, n, t);
  if (!r)
    return gn("Failed to fetch classes for the referencedSource location", e);
  const o = Ix(e, r);
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
  const c = Vf(n, l.referencedSource.location);
  return c ? (l.referencedSource = Fa(c), {
    ifcClassificationReference: l,
    validationState: "fixed",
    message: null
  }) : gn("Failed to find a matching dictionary for the matched class", l);
}
function Ac(e, t) {
  if (!(t != null && t.ifcClassification.location))
    return null;
  const n = Vf(e, t.ifcClassification.location), r = Fa(n);
  return {
    parameterMapping: t.parameterMapping,
    ifcClassification: r
  };
}
const Ba = ug, Ie = eg, Ox = {
  ifcEntities: []
}, zf = La({
  name: "ifcData",
  initialState: Ox,
  reducers: {
    setIfcData: (e, t) => {
      e.ifcEntities = t.payload;
    }
  }
}), $x = (e) => e.ifcData.ifcEntities, { setIfcData: Nx } = zf.actions, Tx = Fo(
  "ifcData/setValidated",
  async (e, { dispatch: t, getState: n }) => {
    const r = n(), o = await Promise.all(
      e.map(async (i) => {
        const { hasAssociations: s } = i;
        if (s) {
          const a = (await Promise.all(
            s.map(async (l) => {
              if (l.type === "IfcClassificationReference") {
                const { validationState: c, ifcClassificationReference: u, message: d } = await Ax(l, t, r);
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
    t(Nx(o));
  }
), Lx = zf.reducer;
const fs = {
  grey: "#B0B0B0",
  // grey for undefined
  red: "#FF0000",
  // bright red
  orange: "#FFA500",
  // bright orange
  green: "#00C853"
  // bright green
};
var Gf = { exports: {} }, Mx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", kx = Mx, _x = kx;
function Wf() {
}
function Hf() {
}
Hf.resetWarningCache = Wf;
var Fx = function() {
  function e(r, o, i, s, a, l) {
    if (l !== _x) {
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
    checkPropTypes: Hf,
    resetWarningCache: Wf
  };
  return n.PropTypes = n, n;
};
Gf.exports = Fx();
var Bx = Gf.exports;
const Xt = /* @__PURE__ */ Cu(Bx);
var jx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, Vx = Object.defineProperty, zx = Object.defineProperties, Gx = Object.getOwnPropertyDescriptors, ro = Object.getOwnPropertySymbols, Uf = Object.prototype.hasOwnProperty, qf = Object.prototype.propertyIsEnumerable, Oc = (e, t, n) => t in e ? Vx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $c = (e, t) => {
  for (var n in t || (t = {}))
    Uf.call(t, n) && Oc(e, n, t[n]);
  if (ro)
    for (var n of ro(t))
      qf.call(t, n) && Oc(e, n, t[n]);
  return e;
}, Wx = (e, t) => zx(e, Gx(t)), Hx = (e, t) => {
  var n = {};
  for (var r in e)
    Uf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ro)
    for (var r of ro(e))
      t.indexOf(r) < 0 && qf.call(e, r) && (n[r] = e[r]);
  return n;
}, ja = (e, t, n) => {
  const r = ie(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: l = 24, stroke: c = 2, children: u } = s, d = Hx(s, ["color", "size", "stroke", "children"]);
      return xl(
        "svg",
        $c(Wx($c({
          ref: i
        }, jx), {
          width: l,
          height: l,
          stroke: a,
          strokeWidth: c,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, p]) => xl(f, p)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: Xt.string,
    size: Xt.oneOfType([Xt.string, Xt.number]),
    stroke: Xt.oneOfType([Xt.string, Xt.number])
  }, r.displayName = `${t}`, r;
}, Ux = ja("grip-vertical", "IconGripVertical", [
  ["path", { d: "M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
  ["path", { d: "M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-3" }],
  ["path", { d: "M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-4" }],
  ["path", { d: "M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-5" }]
]), qx = ja("pencil", "IconPencil", [
  [
    "path",
    {
      d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",
      key: "svg-0"
    }
  ],
  ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]
]), Kx = ja("pointer", "IconPointer", [
  [
    "path",
    {
      d: "M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z",
      key: "svg-0"
    }
  ]
]);
function Yx(e) {
  const { type: t } = e;
  return t === "IfcClassificationReference";
}
function Xx(e, t) {
  const n = t.referencedSource;
  return n && n.location ? n.location === e : !1;
}
function Jx(e, t) {
  var o;
  const n = e.hasAssociations;
  return n && n.find(
    (i) => {
      var s;
      return Yx(i) && Xx(
        (s = t.ifcClassification) == null ? void 0 : s.location,
        i
      );
    }
  ) ? (o = t.ifcClassification) == null ? void 0 : o.location : null;
}
function Qx({ item: e, bsddClass: t, index: n, setCardColor: r }) {
  const { t: o } = Wt(), i = Ie(kf), [s, a] = U("grey"), [l, c] = U([]), [u, d] = U([]);
  G(() => {
    function m(g) {
      a(g), r(n, g);
    }
    l.every((g) => g !== null) ? m("green") : l.some((g) => g !== null) ? m("orange") : m("red");
  }, [l, n, r]), G(() => {
    const m = l.map((g) => g !== null ? "green" : "red");
    d(m);
  }, [l]), G(() => {
    c(
      i.map((m) => Jx(e, m))
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
  return /* @__PURE__ */ _.jsxs(wn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
    /* @__PURE__ */ _.jsx(Yn, { size: "1.5em", color: fs[s] }),
    /* @__PURE__ */ _.jsxs(rn, { position: "bottom-end", shadow: "md", children: [
      /* @__PURE__ */ _.jsx(rn.Target, { children: /* @__PURE__ */ _.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ _.jsx(Qe, { className: "truncate", children: e.name }) }) }),
      /* @__PURE__ */ _.jsxs(rn.Dropdown, { children: [
        /* @__PURE__ */ _.jsxs(Qe, { children: [
          o("Validation per dictionary"),
          ":"
        ] }),
        i.map((m, g) => /* @__PURE__ */ _.jsxs(wn, { mt: "xs", justify: "space-between", className: "flexGroup", children: [
          /* @__PURE__ */ _.jsx(Yn, { size: "1em", color: fs[u[g]] }),
          /* @__PURE__ */ _.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ _.jsx(Qe, { className: "truncate", children: m.ifcClassification.name }) })
        ] }, m.ifcClassification.location))
      ] })
    ] }),
    /* @__PURE__ */ _.jsx(Sn, { label: o("Attach to type"), children: /* @__PURE__ */ _.jsx(qn, { radius: "xl", onClick: () => f(e), children: /* @__PURE__ */ _.jsx(qx, { size: 20 }) }) }),
    /* @__PURE__ */ _.jsx(Sn, { label: o("Select objects"), children: /* @__PURE__ */ _.jsx(qn, { radius: "xl", onClick: () => p(e), children: /* @__PURE__ */ _.jsx(Kx, { size: 20 }) }) })
  ] });
}
function Zx(e, t) {
  const n = t.find((r) => r.code === e);
  return n || !1;
}
function eS({ category: e, bbbr: t, items: n, index: r }) {
  const { t: o } = Wt(), [i, s] = U(), [a, l] = U("grey"), [c, u] = U(new Array(n.length).fill("grey")), d = Ie(Bo), f = Z((p, m) => {
    u((g) => {
      const h = [...g];
      return h[p] = m, h;
    });
  }, []);
  return G(() => {
    const p = Zx(e, t);
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
    c.includes("orange") || c.includes("red") && c.includes("green") ? l("orange") : c.every((p) => p === "red") ? l("red") : c.every((p) => p === "green") && l("green");
  }, [c]), /* @__PURE__ */ _.jsxs(oe.Item, { value: r, children: [
    /* @__PURE__ */ _.jsx(oe.Control, { children: /* @__PURE__ */ _.jsxs(wn, { justify: "space-between", className: "flexGroup", children: [
      /* @__PURE__ */ _.jsx(Yn, { size: "1.5em", color: fs[a], children: /* @__PURE__ */ _.jsx(Qe, { size: "xs", c: "white", children: n.length }) }),
      /* @__PURE__ */ _.jsx("div", { className: "flexTextContainer", children: /* @__PURE__ */ _.jsx(Qe, { className: "truncate", children: e.length > 0 ? e : o("No description") }) })
    ] }) }),
    /* @__PURE__ */ _.jsx(oe.Panel, { mt: "-xs", pl: "xl", children: n.map((p, m) => /* @__PURE__ */ _.jsx(
      Qx,
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
let tS;
function nS(e, t) {
  const n = e.reduce((r, o) => {
    const i = o[t];
    return i === void 0 || typeof i != "string" ? (r[""] || (r[""] = []), r[""].push(o)) : (r[i] || (r[i] = []), r[i].push(o)), r;
  }, {});
  return Object.keys(n).sort((r, o) => r.localeCompare(o, void 0, { numeric: !1 })).reduce((r, o) => (r[o] = n[o], r), {});
}
function rS() {
  const e = Ie(_a), t = Ie(Bo), n = Ie($x), r = Hn(() => nS(n, "description"), [n]), [o, i] = U([]);
  return G(() => {
    (async () => {
      try {
      } catch (a) {
        console.error(a.message);
      }
    })();
  }, []), G(() => {
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
  }, [e, t]), /* @__PURE__ */ _.jsx(lt.Panel, { value: "link", children: /* @__PURE__ */ _.jsx(oe, { chevronPosition: "left", children: Object.entries(r).map(([s, a], l) => /* @__PURE__ */ _.jsx(
    eS,
    {
      category: s,
      items: a,
      bbbr: o,
      index: s || l.toString()
    },
    s
  )) }) });
}
function Nc(e, t) {
  const n = t.find((r) => r.ifcClassification.location === e.uri);
  return n || {
    ifcClassification: Fa(e),
    parameterMapping: ""
  };
}
function oS({ id: e, settings: t, setSettings: n, setUnsavedChanges: r, setIsLoading: o }) {
  var m;
  const { t: i } = Wt(), s = Ie(Sx), a = Ie(_a), [l, c] = U([]), [u, d] = U([]);
  G(() => {
    c(
      Object.values(s).map((g) => ({ value: g.uri, label: `${g.name} (${g.version})` }))
    );
  }, [s, c]), G(() => {
    t && d(
      t.filterDictionaries.map((g) => ({
        value: g.ifcClassification.location || "",
        label: g.ifcClassification.location || ""
      }))
    );
  }, [t, d]), G(() => {
    l.length === 0 || !a || o(!1);
  }, [l, a, o]);
  const f = (g) => {
    const h = Object.values(s).find(
      (x) => x.uri === g
    );
    if (!h || !t)
      return;
    const w = [];
    t.mainDictionary && w.push(t.mainDictionary), n({ ...t, mainDictionary: Nc(h, w) }), r(!0);
  }, p = (g) => {
    if (t) {
      const h = Object.values(s).filter((w) => g.includes(w.uri)).map((w) => Nc(w, t.filterDictionaries));
      n({ ...t, filterDictionaries: h }), r(!0);
    }
  };
  return /* @__PURE__ */ _.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ _.jsxs(oe.Control, { children: [
      /* @__PURE__ */ _.jsx(On, { order: 5, children: i("Dictionary selection") }),
      /* @__PURE__ */ _.jsx(Qe, { size: "xs", c: "dimmed", children: i("Dictionary selection help text") })
    ] }),
    /* @__PURE__ */ _.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ _.jsx(
        To,
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
      /* @__PURE__ */ _.jsx(Ca, { h: "xs" }),
      /* @__PURE__ */ _.jsx(
        xa,
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
function er(e) {
  "@babel/helpers - typeof";
  return er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, er(e);
}
function iS(e, t) {
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
function sS(e) {
  var t = iS(e, "string");
  return er(t) == "symbol" ? t : String(t);
}
function aS(e, t, n) {
  return t = sS(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Tc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tc(Object(n), !0).forEach(function(r) {
      aS(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tc(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Te(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Mc = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Mi = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, kc = {
  INIT: "@@redux/INIT" + Mi(),
  REPLACE: "@@redux/REPLACE" + Mi(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Mi();
  }
};
function lS(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Kf(e, t, n) {
  var r;
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(Te(0));
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(Te(1));
    return n(Kf)(e, t);
  }
  if (typeof e != "function")
    throw new Error(Te(2));
  var o = e, i = t, s = [], a = s, l = !1;
  function c() {
    a === s && (a = s.slice());
  }
  function u() {
    if (l)
      throw new Error(Te(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function")
      throw new Error(Te(4));
    if (l)
      throw new Error(Te(5));
    var h = !0;
    return c(), a.push(g), function() {
      if (h) {
        if (l)
          throw new Error(Te(6));
        h = !1, c();
        var x = a.indexOf(g);
        a.splice(x, 1), s = null;
      }
    };
  }
  function f(g) {
    if (!lS(g))
      throw new Error(Te(7));
    if (typeof g.type > "u")
      throw new Error(Te(8));
    if (l)
      throw new Error(Te(9));
    try {
      l = !0, i = o(i, g);
    } finally {
      l = !1;
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
      type: kc.REPLACE
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
    }, g[Mc] = function() {
      return this;
    }, g;
  }
  return f({
    type: kc.INIT
  }), r = {
    dispatch: f,
    subscribe: d,
    getState: u,
    replaceReducer: p
  }, r[Mc] = m, r;
}
function _c(e, t) {
  return function() {
    return t(e.apply(this, arguments));
  };
}
function Fc(e, t) {
  if (typeof e == "function")
    return _c(e, t);
  if (typeof e != "object" || e === null)
    throw new Error(Te(16));
  var n = {};
  for (var r in e) {
    var o = e[r];
    typeof o == "function" && (n[r] = _c(o, t));
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
function cS() {
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
      }, a = t.map(function(l) {
        return l(s);
      });
      return i = Yf.apply(void 0, a)(o.dispatch), Lc(Lc({}, o), {}, {
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
var En = b;
function uS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dS = typeof Object.is == "function" ? Object.is : uS, fS = En.useState, pS = En.useEffect, mS = En.useLayoutEffect, gS = En.useDebugValue;
function hS(e, t) {
  var n = t(), r = fS({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return mS(function() {
    o.value = n, o.getSnapshot = t, ki(o) && i({ inst: o });
  }, [e, n, t]), pS(function() {
    return ki(o) && i({ inst: o }), e(function() {
      ki(o) && i({ inst: o });
    });
  }, [e]), gS(n), n;
}
function ki(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dS(e, n);
  } catch {
    return !0;
  }
}
function bS(e, t) {
  return t();
}
var yS = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? bS : hS;
Jf.useSyncExternalStore = En.useSyncExternalStore !== void 0 ? En.useSyncExternalStore : yS;
Xf.exports = Jf;
var Qf = Xf.exports, vS = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo = b, wS = Qf;
function xS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var SS = typeof Object.is == "function" ? Object.is : xS, CS = wS.useSyncExternalStore, ES = jo.useRef, PS = jo.useEffect, DS = jo.useMemo, RS = jo.useDebugValue;
vS.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
  var i = ES(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = DS(function() {
    function l(p) {
      if (!c) {
        if (c = !0, u = p, p = r(p), o !== void 0 && s.hasValue) {
          var m = s.value;
          if (o(m, p))
            return d = m;
        }
        return d = p;
      }
      if (m = d, SS(u, p))
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
  var a = CS(e, i[0], i[1]);
  return PS(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), RS(a), a;
};
function IS(e) {
  e();
}
let Zf = IS;
const AS = (e) => Zf = e, OS = () => Zf, Bc = Symbol.for("react-redux-context"), jc = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function $S() {
  var e;
  if (!R.createContext)
    return {};
  const t = (e = jc[Bc]) != null ? e : jc[Bc] = /* @__PURE__ */ new Map();
  let n = t.get(R.createContext);
  return n || (n = R.createContext(null), t.set(R.createContext, n)), n;
}
const ep = /* @__PURE__ */ $S(), NS = () => {
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
var pe = typeof Symbol == "function" && Symbol.for, Va = pe ? Symbol.for("react.element") : 60103, za = pe ? Symbol.for("react.portal") : 60106, Vo = pe ? Symbol.for("react.fragment") : 60107, zo = pe ? Symbol.for("react.strict_mode") : 60108, Go = pe ? Symbol.for("react.profiler") : 60114, Wo = pe ? Symbol.for("react.provider") : 60109, Ho = pe ? Symbol.for("react.context") : 60110, Ga = pe ? Symbol.for("react.async_mode") : 60111, Uo = pe ? Symbol.for("react.concurrent_mode") : 60111, qo = pe ? Symbol.for("react.forward_ref") : 60112, Ko = pe ? Symbol.for("react.suspense") : 60113, TS = pe ? Symbol.for("react.suspense_list") : 60120, Yo = pe ? Symbol.for("react.memo") : 60115, Xo = pe ? Symbol.for("react.lazy") : 60116, LS = pe ? Symbol.for("react.block") : 60121, MS = pe ? Symbol.for("react.fundamental") : 60117, kS = pe ? Symbol.for("react.responder") : 60118, _S = pe ? Symbol.for("react.scope") : 60119;
function qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Va:
        switch (e = e.type, e) {
          case Ga:
          case Uo:
          case Vo:
          case Go:
          case zo:
          case Ko:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ho:
              case qo:
              case Xo:
              case Yo:
              case Wo:
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
  return qe(e) === Uo;
}
ee.AsyncMode = Ga;
ee.ConcurrentMode = Uo;
ee.ContextConsumer = Ho;
ee.ContextProvider = Wo;
ee.Element = Va;
ee.ForwardRef = qo;
ee.Fragment = Vo;
ee.Lazy = Xo;
ee.Memo = Yo;
ee.Portal = za;
ee.Profiler = Go;
ee.StrictMode = zo;
ee.Suspense = Ko;
ee.isAsyncMode = function(e) {
  return np(e) || qe(e) === Ga;
};
ee.isConcurrentMode = np;
ee.isContextConsumer = function(e) {
  return qe(e) === Ho;
};
ee.isContextProvider = function(e) {
  return qe(e) === Wo;
};
ee.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Va;
};
ee.isForwardRef = function(e) {
  return qe(e) === qo;
};
ee.isFragment = function(e) {
  return qe(e) === Vo;
};
ee.isLazy = function(e) {
  return qe(e) === Xo;
};
ee.isMemo = function(e) {
  return qe(e) === Yo;
};
ee.isPortal = function(e) {
  return qe(e) === za;
};
ee.isProfiler = function(e) {
  return qe(e) === Go;
};
ee.isStrictMode = function(e) {
  return qe(e) === zo;
};
ee.isSuspense = function(e) {
  return qe(e) === Ko;
};
ee.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Vo || e === Uo || e === Go || e === zo || e === Ko || e === TS || typeof e == "object" && e !== null && (e.$$typeof === Xo || e.$$typeof === Yo || e.$$typeof === Wo || e.$$typeof === Ho || e.$$typeof === qo || e.$$typeof === MS || e.$$typeof === kS || e.$$typeof === _S || e.$$typeof === LS);
};
ee.typeOf = qe;
tp.exports = ee;
var FS = tp.exports, Wa = FS, BS = {
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
}, jS = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, VS = {
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
Ha[Wa.ForwardRef] = VS;
Ha[Wa.Memo] = rp;
function Vc(e) {
  return Wa.isMemo(e) ? rp : Ha[e.$$typeof] || BS;
}
var zS = Object.defineProperty, GS = Object.getOwnPropertyNames, zc = Object.getOwnPropertySymbols, WS = Object.getOwnPropertyDescriptor, HS = Object.getPrototypeOf, Gc = Object.prototype;
function op(e, t, n) {
  if (typeof t != "string") {
    if (Gc) {
      var r = HS(t);
      r && r !== Gc && op(e, r, n);
    }
    var o = GS(t);
    zc && (o = o.concat(zc(t)));
    for (var i = Vc(e), s = Vc(t), a = 0; a < o.length; ++a) {
      var l = o[a];
      if (!jS[l] && !(n && n[l]) && !(s && s[l]) && !(i && i[l])) {
        var c = WS(t, l);
        try {
          zS(e, l, c);
        } catch {
        }
      }
    }
  }
  return e;
}
var US = op;
const Wc = /* @__PURE__ */ Cu(US);
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
var Ua = Symbol.for("react.element"), qa = Symbol.for("react.portal"), Jo = Symbol.for("react.fragment"), Qo = Symbol.for("react.strict_mode"), Zo = Symbol.for("react.profiler"), ei = Symbol.for("react.provider"), ti = Symbol.for("react.context"), qS = Symbol.for("react.server_context"), ni = Symbol.for("react.forward_ref"), ri = Symbol.for("react.suspense"), oi = Symbol.for("react.suspense_list"), ii = Symbol.for("react.memo"), si = Symbol.for("react.lazy"), KS = Symbol.for("react.offscreen"), sp;
sp = Symbol.for("react.module.reference");
function it(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ua:
        switch (e = e.type, e) {
          case Jo:
          case Zo:
          case Qo:
          case ri:
          case oi:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case qS:
              case ti:
              case ni:
              case si:
              case ii:
              case ei:
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
te.ContextConsumer = ti;
te.ContextProvider = ei;
te.Element = Ua;
te.ForwardRef = ni;
te.Fragment = Jo;
te.Lazy = si;
te.Memo = ii;
te.Portal = qa;
te.Profiler = Zo;
te.StrictMode = Qo;
te.Suspense = ri;
te.SuspenseList = oi;
te.isAsyncMode = function() {
  return !1;
};
te.isConcurrentMode = function() {
  return !1;
};
te.isContextConsumer = function(e) {
  return it(e) === ti;
};
te.isContextProvider = function(e) {
  return it(e) === ei;
};
te.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
};
te.isForwardRef = function(e) {
  return it(e) === ni;
};
te.isFragment = function(e) {
  return it(e) === Jo;
};
te.isLazy = function(e) {
  return it(e) === si;
};
te.isMemo = function(e) {
  return it(e) === ii;
};
te.isPortal = function(e) {
  return it(e) === qa;
};
te.isProfiler = function(e) {
  return it(e) === Zo;
};
te.isStrictMode = function(e) {
  return it(e) === Qo;
};
te.isSuspense = function(e) {
  return it(e) === ri;
};
te.isSuspenseList = function(e) {
  return it(e) === oi;
};
te.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Jo || e === Zo || e === Qo || e === ri || e === oi || e === KS || typeof e == "object" && e !== null && (e.$$typeof === si || e.$$typeof === ii || e.$$typeof === ei || e.$$typeof === ti || e.$$typeof === ni || e.$$typeof === sp || e.getModuleId !== void 0);
};
te.typeOf = it;
ip.exports = te;
var YS = ip.exports;
const XS = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function JS(e, t, n, r, {
  areStatesEqual: o,
  areOwnPropsEqual: i,
  areStatePropsEqual: s
}) {
  let a = !1, l, c, u, d, f;
  function p(x, y) {
    return l = x, c = y, u = e(l, c), d = t(r, c), f = n(u, d, c), a = !0, f;
  }
  function m() {
    return u = e(l, c), t.dependsOnOwnProps && (d = t(r, c)), f = n(u, d, c), f;
  }
  function g() {
    return e.dependsOnOwnProps && (u = e(l, c)), t.dependsOnOwnProps && (d = t(r, c)), f = n(u, d, c), f;
  }
  function h() {
    const x = e(l, c), y = !s(x, u);
    return u = x, y && (f = n(u, d, c)), f;
  }
  function w(x, y) {
    const v = !i(y, c), S = !o(x, l, y, c);
    return l = x, c = y, v && S ? m() : v ? g() : S ? h() : f;
  }
  return function(y, v) {
    return a ? w(y, v) : p(y, v);
  };
}
function QS(e, t) {
  let {
    initMapStateToProps: n,
    initMapDispatchToProps: r,
    initMergeProps: o
  } = t, i = gf(t, XS);
  const s = n(e, i), a = r(e, i), l = o(e, i);
  return JS(s, a, l, e, i);
}
function ZS(e, t) {
  const n = {};
  for (const r in e) {
    const o = e[r];
    typeof o == "function" && (n[r] = (...i) => t(o(...i)));
  }
  return n;
}
function ps(e) {
  return function(n) {
    const r = e(n);
    function o() {
      return r;
    }
    return o.dependsOnOwnProps = !1, o;
  };
}
function Hc(e) {
  return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1;
}
function ap(e, t) {
  return function(r, {
    displayName: o
  }) {
    const i = function(a, l) {
      return i.dependsOnOwnProps ? i.mapToProps(a, l) : i.mapToProps(a, void 0);
    };
    return i.dependsOnOwnProps = !0, i.mapToProps = function(a, l) {
      i.mapToProps = e, i.dependsOnOwnProps = Hc(e);
      let c = i(a, l);
      return typeof c == "function" && (i.mapToProps = c, i.dependsOnOwnProps = Hc(c), c = i(a, l)), c;
    }, i;
  };
}
function Ka(e, t) {
  return (n, r) => {
    throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${r.wrappedComponentName}.`);
  };
}
function eC(e) {
  return e && typeof e == "object" ? ps((t) => (
    // @ts-ignore
    ZS(e, t)
  )) : e ? typeof e == "function" ? (
    // @ts-ignore
    ap(e)
  ) : Ka(e, "mapDispatchToProps") : ps((t) => ({
    dispatch: t
  }));
}
function tC(e) {
  return e ? typeof e == "function" ? (
    // @ts-ignore
    ap(e)
  ) : Ka(e, "mapStateToProps") : ps(() => ({}));
}
function nC(e, t, n) {
  return Lt({}, n, e, t);
}
function rC(e) {
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
function oC(e) {
  return e ? typeof e == "function" ? rC(e) : Ka(e, "mergeProps") : () => nC;
}
function iC() {
  const e = OS();
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
const Uc = {
  notify() {
  },
  get: () => []
};
function lp(e, t) {
  let n, r = Uc, o = 0, i = !1;
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
    o++, n || (n = t ? t.addNestedSub(l) : e.subscribe(l), r = iC());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = Uc);
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
const sC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", oo = sC ? R.useLayoutEffect : R.useEffect;
function qc(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _i(e, t) {
  if (qc(e, t))
    return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (!Object.prototype.hasOwnProperty.call(t, n[o]) || !qc(e[n[o]], t[n[o]]))
      return !1;
  return !0;
}
const aC = ["reactReduxForwardedRef"];
let cp = NS;
const lC = (e) => {
  cp = e;
}, cC = [null, null];
function uC(e, t, n) {
  oo(() => e(...t), n);
}
function dC(e, t, n, r, o, i) {
  e.current = r, n.current = !1, o.current && (o.current = null, i());
}
function fC(e, t, n, r, o, i, s, a, l, c, u) {
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
    w || (f = null), h === i.current ? s.current || c() : (i.current = h, l.current = h, s.current = !0, u());
  };
  return n.onStateChange = p, n.trySubscribe(), p(), () => {
    if (d = !0, n.tryUnsubscribe(), n.onStateChange = null, f)
      throw f;
  };
}
function pC(e, t) {
  return e === t;
}
function up(e, t, n, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure: r,
  areStatesEqual: o = pC,
  areOwnPropsEqual: i = _i,
  areStatePropsEqual: s = _i,
  areMergedPropsEqual: a = _i,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef: l = !1,
  // the context consumer to use
  context: c = ep
} = {}) {
  const u = c, d = tC(e), f = eC(t), p = oC(n), m = !!e;
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
      const [E, $, N] = R.useMemo(() => {
        const {
          reactReduxForwardedRef: le
        } = P, X = gf(P, aC);
        return [P.context, le, X];
      }, [P]), T = R.useMemo(() => E && E.Consumer && // @ts-ignore
      YS.isContextConsumer(/* @__PURE__ */ R.createElement(E.Consumer, null)) ? E : u, [E, u]), M = R.useContext(T), k = !!P.store && !!P.store.getState && !!P.store.dispatch, A = !!M && !!M.store, L = k ? P.store : M.store, I = A ? M.getServerState : L.getState, F = R.useMemo(() => QS(L.dispatch, y), [L]), [O, H] = R.useMemo(() => {
        if (!m)
          return cC;
        const le = lp(L, k ? void 0 : M.subscription), X = le.notifyNestedSubs.bind(le);
        return [le, X];
      }, [L, k, M]), K = R.useMemo(() => k ? M : Lt({}, M, {
        subscription: O
      }), [k, M, O]), ne = R.useRef(), ye = R.useRef(N), ue = R.useRef(), $e = R.useRef(!1);
      R.useRef(!1);
      const ve = R.useRef(!1), re = R.useRef();
      oo(() => (ve.current = !0, () => {
        ve.current = !1;
      }), []);
      const we = R.useMemo(() => () => ue.current && N === ye.current ? ue.current : F(L.getState(), N), [L, N]), ke = R.useMemo(() => (X) => O ? fC(
        m,
        L,
        O,
        // @ts-ignore
        F,
        ye,
        ne,
        $e,
        ve,
        ue,
        H,
        X
      ) : () => {
      }, [O]);
      uC(dC, [ye, ne, $e, N, ue, H]);
      let Ce;
      try {
        Ce = cp(
          // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
          ke,
          // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
          // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
          we,
          I ? () => F(I(), N) : we
        );
      } catch (le) {
        throw re.current && (le.message += `
The error may be correlated with this previous error:
${re.current.stack}

`), le;
      }
      oo(() => {
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
    if (C.WrappedComponent = h, C.displayName = v.displayName = x, l) {
      const E = R.forwardRef(function(N, T) {
        return /* @__PURE__ */ R.createElement(C, Lt({}, N, {
          reactReduxForwardedRef: T
        }));
      });
      return E.displayName = x, E.WrappedComponent = h, Wc(E, h);
    }
    return Wc(C, h);
  };
}
function mC({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  noopCheck: i = "once"
}) {
  const s = R.useMemo(() => {
    const c = lp(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      noopCheck: i
    };
  }, [e, r, o, i]), a = R.useMemo(() => e.getState(), [e]);
  oo(() => {
    const {
      subscription: c
    } = s;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), a !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [s, a]);
  const l = t || ep;
  return /* @__PURE__ */ R.createElement(l.Provider, {
    value: s
  }, n);
}
lC(Qf.useSyncExternalStore);
AS(Lm);
function gC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function dp(e, t) {
  var n = U(function() {
    return {
      inputs: t,
      result: e()
    };
  })[0], r = V(!0), o = V(n), i = r.current || !!(t && o.current.inputs && gC(t, o.current.inputs)), s = i ? o.current : {
    inputs: t,
    result: e()
  };
  return G(function() {
    r.current = !1, o.current = s;
  }, [s]), s.result;
}
function hC(e, t) {
  return dp(function() {
    return e;
  }, t);
}
var Y = dp, z = hC, bC = !0, Fi = "Invariant failed";
function yC(e, t) {
  if (!e) {
    if (bC)
      throw new Error(Fi);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Fi, ": ").concat(n) : Fi;
    throw new Error(r);
  }
}
var ct = function(t) {
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
}, Ya = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, Kc = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, vC = function(t, n) {
  return {
    top: t.top + n.y,
    left: t.left + n.x,
    bottom: t.bottom + n.y,
    right: t.right + n.x
  };
}, Bi = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Xa = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Bi : r, i = t.border, s = i === void 0 ? Bi : i, a = t.padding, l = a === void 0 ? Bi : a, c = ct(Ya(n, o)), u = ct(Kc(n, s)), d = ct(Kc(u, l));
  return {
    marginBox: c,
    borderBox: ct(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: l
  };
}, Xe = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && yC(!1), o;
}, wC = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}, io = function(t, n) {
  var r = t.borderBox, o = t.border, i = t.margin, s = t.padding, a = vC(r, n);
  return Xa({
    borderBox: a,
    border: o,
    margin: i,
    padding: s
  });
}, so = function(t, n) {
  return n === void 0 && (n = wC()), io(t, n);
}, fp = function(t, n) {
  var r = {
    top: Xe(n.marginTop),
    right: Xe(n.marginRight),
    bottom: Xe(n.marginBottom),
    left: Xe(n.marginLeft)
  }, o = {
    top: Xe(n.paddingTop),
    right: Xe(n.paddingRight),
    bottom: Xe(n.paddingBottom),
    left: Xe(n.paddingLeft)
  }, i = {
    top: Xe(n.borderTopWidth),
    right: Xe(n.borderRightWidth),
    bottom: Xe(n.borderBottomWidth),
    left: Xe(n.borderLeftWidth)
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
}, Yc = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function xC(e, t) {
  return !!(e === t || Yc(e) && Yc(t));
}
function SC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!xC(e[n], t[n]))
      return !1;
  return !0;
}
function de(e, t) {
  t === void 0 && (t = SC);
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
var CC = function(t) {
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
const tr = CC;
function mp(e, t) {
}
mp.bind(null, "warn");
mp.bind(null, "error");
function Mt() {
}
function EC(e, t) {
  return {
    ...e,
    ...t
  };
}
function Je(e, t, n) {
  const r = t.map((o) => {
    const i = EC(n, o.options);
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
const PC = "Invariant failed";
class ao extends Error {
}
ao.prototype.toString = function() {
  return this.message;
};
function B(e, t) {
  if (!e)
    throw new ao(PC);
}
class DC extends b.Component {
  constructor(...t) {
    super(...t), this.callbacks = null, this.unbind = Mt, this.onWindowError = (n) => {
      const r = this.getCallbacks();
      r.isDragging() && r.tryAbort(), n.error instanceof ao && n.preventDefault();
    }, this.getCallbacks = () => {
      if (!this.callbacks)
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      return this.callbacks;
    }, this.setCallbacks = (n) => {
      this.callbacks = n;
    };
  }
  componentDidMount() {
    this.unbind = Je(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  }
  componentDidCatch(t) {
    if (t instanceof ao) {
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
const RC = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`, lo = (e) => e + 1, IC = (e) => `
  You have lifted an item in position ${lo(e.source.index)}
`, gp = (e, t) => {
  const n = e.droppableId === t.droppableId, r = lo(e.index), o = lo(t.index);
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
    `, AC = (e) => {
  const t = e.destination;
  if (t)
    return gp(e.source, t);
  const n = e.combine;
  return n ? hp(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on";
}, Xc = (e) => `
  The item has returned to its starting position
  of ${lo(e.index)}
`, OC = (e) => {
  if (e.reason === "CANCEL")
    return `
      Movement cancelled.
      ${Xc(e.source)}
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
    ${Xc(e.source)}
  `;
}, $C = {
  dragHandleUsageInstructions: RC,
  onDragStart: IC,
  onDragUpdate: AC,
  onDragEnd: OC
};
var Fr = $C;
const fe = {
  x: 0,
  y: 0
}, he = (e, t) => ({
  x: e.x + t.x,
  y: e.y + t.y
}), je = (e, t) => ({
  x: e.x - t.x,
  y: e.y - t.y
}), kt = (e, t) => e.x === t.x && e.y === t.y, $n = (e) => ({
  x: e.x !== 0 ? -e.x : 0,
  y: e.y !== 0 ? -e.y : 0
}), an = (e, t, n = 0) => e === "x" ? {
  x: t,
  y: n
} : {
  x: n,
  y: t
}, nr = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2), Jc = (e, t) => Math.min(...t.map((n) => nr(e, n))), bp = (e) => (t) => ({
  x: e(t.x),
  y: e(t.y)
});
var NC = (e, t) => {
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
}), Qc = (e) => [{
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
}], TC = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, LC = (e, t) => t ? yr(e, t.scroll.diff.displacement) : e, MC = (e, t, n) => n && n.increasedBy ? {
  ...e,
  [t.end]: e[t.end] + n.increasedBy[t.line]
} : e, kC = (e, t) => t && t.shouldClipSubject ? NC(t.pageMarginBox, e) : ct(e);
var Pn = ({
  page: e,
  withPlaceholder: t,
  axis: n,
  frame: r
}) => {
  const o = LC(e.marginBox, r), i = MC(o, n, t), s = kC(i, r);
  return {
    page: e,
    withPlaceholder: t,
    active: s
  };
}, Ja = (e, t) => {
  e.frame || B(!1);
  const n = e.frame, r = je(t, n.scroll.initial), o = $n(r), i = {
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
const yp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), vp = de((e) => e.reduce((t, n) => (t[n.descriptor.id] = n, t), {})), ai = de((e) => Object.values(e)), _C = de((e) => Object.values(e));
var Nn = de((e, t) => _C(t).filter((r) => e === r.descriptor.droppableId).sort((r, o) => r.descriptor.index - o.descriptor.index));
function Qa(e) {
  return e.at && e.at.type === "REORDER" ? e.at.destination : null;
}
function li(e) {
  return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
}
var ci = de((e, t) => t.filter((n) => n.descriptor.id !== e.descriptor.id)), FC = ({
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
  const a = o.displaced.all, l = a.length ? a[0] : null;
  if (e)
    return l ? s(l) : null;
  const c = ci(t, r);
  if (!l) {
    if (!c.length)
      return null;
    const p = c[c.length - 1];
    return s(p.descriptor.id);
  }
  const u = c.findIndex((p) => p.descriptor.id === l);
  u === -1 && B(!1);
  const d = u - 1;
  if (d < 0)
    return null;
  const f = c[d];
  return s(f.descriptor.id);
}, Tn = (e, t) => e.descriptor.droppableId === t.descriptor.id;
const wp = {
  point: fe,
  value: 0
}, rr = {
  invisible: {},
  visible: {},
  all: []
}, BC = {
  displaced: rr,
  displacedBy: wp,
  at: null
};
var jC = BC, Ze = (e, t) => (n) => e <= n && n <= t, xp = (e) => {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return (r) => {
    if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right))
      return !0;
    const i = t(r.top) || t(r.bottom), s = n(r.left) || n(r.right);
    if (i && s)
      return !0;
    const l = r.top < e.top && r.bottom > e.bottom, c = r.left < e.left && r.right > e.right;
    return l && c ? !0 : l && s || c && i;
  };
}, VC = (e) => {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
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
var zC = (e) => (t) => {
  const n = Ze(t.top, t.bottom), r = Ze(t.left, t.right);
  return (o) => e === Za ? n(o.top) && n(o.bottom) : r(o.left) && r(o.right);
};
const GC = (e, t) => {
  const n = t.frame ? t.frame.scroll.diff.displacement : fe;
  return yr(e, n);
}, WC = (e, t, n) => t.subject.active ? n(t.subject.active)(e) : !1, HC = (e, t, n) => n(t)(e), el = ({
  target: e,
  destination: t,
  viewport: n,
  withDroppableDisplacement: r,
  isVisibleThroughFrameFn: o
}) => {
  const i = r ? GC(e, t) : e;
  return WC(i, t, o) && HC(i, n, o);
}, UC = (e) => el({
  ...e,
  isVisibleThroughFrameFn: xp
}), Cp = (e) => el({
  ...e,
  isVisibleThroughFrameFn: VC
}), qC = (e) => el({
  ...e,
  isVisibleThroughFrameFn: zC(e.destination.axis)
}), KC = (e, t, n) => {
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
function YC(e, t) {
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
  return e.reduce(function(a, l) {
    const c = YC(l, n), u = l.descriptor.id;
    if (a.all.push(u), !UC({
      target: c,
      destination: t,
      viewport: r,
      withDroppableDisplacement: !0
    }))
      return a.invisible[l.descriptor.id] = !0, a;
    const f = KC(u, i, o), p = {
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
function XC(e, t) {
  if (!e.length)
    return 0;
  const n = e[e.length - 1].descriptor.index;
  return t.inHomeList ? n : n + 1;
}
function Zc({
  insideDestination: e,
  inHomeList: t,
  displacedBy: n,
  destination: r
}) {
  const o = XC(e, {
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
  const l = Tn(e, n);
  if (s == null)
    return Zc({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const c = t.find((m) => m.descriptor.index === s);
  if (!c)
    return Zc({
      insideDestination: t,
      inHomeList: l,
      displacedBy: o,
      destination: n
    });
  const u = ci(e, t), d = t.indexOf(c), f = u.slice(d);
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
var JC = ({
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
}, QC = ({
  isMovingForward: e,
  isInHomeList: t,
  insideDestination: n,
  location: r
}) => {
  if (!n.length)
    return null;
  const o = r.index, i = e ? o + 1 : o - 1, s = n[0].descriptor.index, a = n[n.length - 1].descriptor.index, l = t ? a : a + 1;
  return i < s || i > l ? null : i;
}, ZC = ({
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
  if (c || B(!1), c.type === "REORDER") {
    const d = QC({
      isMovingForward: e,
      isInHomeList: t,
      location: c.destination,
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
  const u = JC({
    isMovingForward: e,
    destination: o,
    displaced: s.displaced,
    draggables: r,
    combine: c.combine,
    afterCritical: l
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
}, e1 = ({
  displaced: e,
  afterCritical: t,
  combineWith: n,
  displacedBy: r
}) => {
  const o = !!(e.visible[n] || e.invisible[n]);
  return zt(n, t) ? o ? fe : $n(r.point) : o ? r.point : fe;
}, t1 = ({
  afterCritical: e,
  impact: t,
  draggables: n
}) => {
  const r = li(t);
  r || B(!1);
  const o = r.draggableId, i = n[o].page.borderBox.center, s = e1({
    displaced: t.displaced,
    afterCritical: e,
    combineWith: o,
    displacedBy: t.displacedBy
  });
  return he(i, s);
};
const Ep = (e, t) => t.margin[e.start] + t.borderBox[e.size] / 2, n1 = (e, t) => t.margin[e.end] + t.borderBox[e.size] / 2, tl = (e, t, n) => t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2, eu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => an(e.line, t.marginBox[e.end] + Ep(e, n), tl(e, t.marginBox, n)), tu = ({
  axis: e,
  moveRelativeTo: t,
  isMoving: n
}) => an(e.line, t.marginBox[e.start] - n1(e, n), tl(e, t.marginBox, n)), r1 = ({
  axis: e,
  moveInto: t,
  isMoving: n
}) => an(e.line, t.contentBox[e.start] + Ep(e, n), tl(e, t.contentBox, n));
var o1 = ({
  impact: e,
  draggable: t,
  draggables: n,
  droppable: r,
  afterCritical: o
}) => {
  const i = Nn(r.descriptor.id, n), s = t.page, a = r.axis;
  if (!i.length)
    return r1({
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
    if (zt(u, o))
      return tu({
        axis: a,
        moveRelativeTo: f.page,
        isMoving: s
      });
    const p = io(f.page, c.point);
    return tu({
      axis: a,
      moveRelativeTo: p,
      isMoving: s
    });
  }
  const d = i[i.length - 1];
  if (d.descriptor.id === t.descriptor.id)
    return s.borderBox.center;
  if (zt(d.descriptor.id, o)) {
    const f = io(d.page, $n(o.displacedBy.point));
    return eu({
      axis: a,
      moveRelativeTo: f,
      isMoving: s
    });
  }
  return eu({
    axis: a,
    moveRelativeTo: d.page,
    isMoving: s
  });
}, ms = (e, t) => {
  const n = e.frame;
  return n ? he(t, n.scroll.diff.displacement) : t;
};
const i1 = ({
  impact: e,
  draggable: t,
  droppable: n,
  draggables: r,
  afterCritical: o
}) => {
  const i = t.page.borderBox.center, s = e.at;
  return !n || !s ? i : s.type === "REORDER" ? o1({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: o
  }) : t1({
    impact: e,
    draggables: r,
    afterCritical: o
  });
};
var ui = (e) => {
  const t = i1(e), n = e.droppable;
  return n ? ms(n, t) : t;
}, Pp = (e, t) => {
  const n = je(t, e.scroll.initial), r = $n(n);
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
function nu(e, t) {
  return e.map((n) => t[n]);
}
function s1(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n].visible[e];
    if (r)
      return r;
  }
  return null;
}
var a1 = ({
  impact: e,
  viewport: t,
  destination: n,
  draggables: r,
  maxScrollChange: o
}) => {
  const i = Pp(t, he(t.scroll.current, o)), s = n.frame ? Ja(n, he(n.frame.scroll.current, o)) : n, a = e.displaced, l = or({
    afterDragging: nu(a.all, r),
    destination: n,
    displacedBy: e.displacedBy,
    viewport: i.frame,
    last: a,
    forceShouldAnimate: !1
  }), c = or({
    afterDragging: nu(a.all, r),
    destination: s,
    displacedBy: e.displacedBy,
    viewport: t.frame,
    last: a,
    forceShouldAnimate: !1
  }), u = {}, d = {}, f = [a, l, c];
  return a.all.forEach((m) => {
    const g = s1(m, f);
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
}, l1 = (e, t) => he(e.scroll.diff.displacement, t), nl = ({
  pageBorderBoxCenter: e,
  draggable: t,
  viewport: n
}) => {
  const r = l1(n, e), o = je(r, t.page.borderBox.center);
  return he(t.client.borderBox.center, o);
}, Dp = ({
  draggable: e,
  destination: t,
  newPageBorderBoxCenter: n,
  viewport: r,
  withDroppableDisplacement: o,
  onlyOnMainAxis: i = !1
}) => {
  const s = je(n, e.page.borderBox.center), l = {
    target: yr(e.page.borderBox, s),
    destination: t,
    withDroppableDisplacement: o,
    viewport: r
  };
  return i ? qC(l) : Cp(l);
}, c1 = ({
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
  const c = Nn(n.descriptor.id, r), u = Tn(t, n), d = FC({
    isMovingForward: e,
    draggable: t,
    destination: n,
    insideDestination: c,
    previousImpact: o
  }) || ZC({
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
  const f = ui({
    impact: d,
    draggable: t,
    droppable: n,
    draggables: r,
    afterCritical: l
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
      clientSelection: nl({
        pageBorderBoxCenter: f,
        draggable: t,
        viewport: i
      }),
      impact: d,
      scrollJumpRequest: null
    };
  const m = je(f, s), g = a1({
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
var u1 = ({
  isMovingForward: e,
  pageBorderBoxCenter: t,
  source: n,
  droppables: r,
  viewport: o
}) => {
  const i = n.subject.active;
  if (!i)
    return null;
  const s = n.axis, a = Ze(i[s.start], i[s.end]), l = ai(r).filter((u) => u !== n).filter((u) => u.isEnabled).filter((u) => !!u.subject.active).filter((u) => xp(o.frame)(Re(u))).filter((u) => {
    const d = Re(u);
    return e ? i[s.crossAxisEnd] < d[s.crossAxisEnd] : d[s.crossAxisStart] < i[s.crossAxisStart];
  }).filter((u) => {
    const d = Re(u), f = Ze(d[s.start], d[s.end]);
    return a(d[s.start]) || a(d[s.end]) || f(i[s.start]) || f(i[s.end]);
  }).sort((u, d) => {
    const f = Re(u)[s.crossAxisStart], p = Re(d)[s.crossAxisStart];
    return e ? f - p : p - f;
  }).filter((u, d, f) => Re(u)[s.crossAxisStart] === Re(f[0])[s.crossAxisStart]);
  if (!l.length)
    return null;
  if (l.length === 1)
    return l[0];
  const c = l.filter((u) => Ze(Re(u)[s.start], Re(u)[s.end])(t[s.line]));
  return c.length === 1 ? c[0] : c.length > 1 ? c.sort((u, d) => Re(u)[s.start] - Re(d)[s.start])[0] : l.sort((u, d) => {
    const f = Jc(t, Qc(Re(u))), p = Jc(t, Qc(Re(d)));
    return f !== p ? f - p : Re(u)[s.start] - Re(d)[s.start];
  })[0];
};
const ru = (e, t) => {
  const n = e.page.borderBox.center;
  return zt(e.descriptor.id, t) ? je(n, t.displacedBy.point) : n;
}, d1 = (e, t) => {
  const n = e.page.borderBox;
  return zt(e.descriptor.id, t) ? yr(n, $n(t.displacedBy.point)) : n;
};
var f1 = ({
  pageBorderBoxCenter: e,
  viewport: t,
  destination: n,
  insideDestination: r,
  afterCritical: o
}) => r.filter((s) => Cp({
  target: d1(s, o),
  destination: n,
  viewport: t.frame,
  withDroppableDisplacement: !0
})).sort((s, a) => {
  const l = nr(e, ms(n, ru(s, o))), c = nr(e, ms(n, ru(a, o)));
  return l < c ? -1 : c < l ? 1 : s.descriptor.index - a.descriptor.index;
})[0] || null, vr = de(function(t, n) {
  const r = n[t.line];
  return {
    value: r,
    point: an(t.line, r)
  };
});
const p1 = (e, t, n) => {
  const r = e.axis;
  if (e.descriptor.mode === "virtual")
    return an(r.line, t[r.line]);
  const o = e.subject.page.contentBox[r.size], l = Nn(e.descriptor.id, n).reduce((c, u) => c + u.client.marginBox[r.size], 0) + t[r.line] - o;
  return l <= 0 ? null : an(r.line, l);
}, Rp = (e, t) => ({
  ...e,
  scroll: {
    ...e.scroll,
    max: t
  }
}), Ip = (e, t, n) => {
  const r = e.frame;
  Tn(t, e) && B(!1), e.subject.withPlaceholder && B(!1);
  const o = vr(e.axis, t.displaceBy).point, i = p1(e, o, n), s = {
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
  const a = i ? he(r.scroll.max, i) : r.scroll.max, l = Rp(r, a), c = Pn({
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
}, m1 = (e) => {
  const t = e.subject.withPlaceholder;
  t || B(!1);
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
  r || B(!1);
  const o = Rp(n, r), i = Pn({
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
var g1 = ({
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
    }, f = ui({
      impact: d,
      draggable: r,
      droppable: i,
      draggables: o,
      afterCritical: a
    }), p = Tn(r, i) ? i : Ip(i, r, o);
    return Dp({
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
  return co({
    draggable: r,
    insideDestination: n,
    destination: i,
    viewport: s,
    displacedBy: u,
    last: rr,
    index: c
  });
}, h1 = ({
  isMovingForward: e,
  previousPageBorderBoxCenter: t,
  draggable: n,
  isOver: r,
  draggables: o,
  droppables: i,
  viewport: s,
  afterCritical: a
}) => {
  const l = u1({
    isMovingForward: e,
    pageBorderBoxCenter: t,
    source: r,
    droppables: i,
    viewport: s
  });
  if (!l)
    return null;
  const c = Nn(l.descriptor.id, o), u = f1({
    pageBorderBoxCenter: t,
    viewport: s,
    destination: l,
    insideDestination: c,
    afterCritical: a
  }), d = g1({
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
  const f = ui({
    impact: d,
    draggable: n,
    droppable: l,
    draggables: o,
    afterCritical: a
  });
  return {
    clientSelection: nl({
      pageBorderBoxCenter: f,
      draggable: n,
      viewport: s
    }),
    impact: d,
    scrollJumpRequest: null
  };
}, Ge = (e) => {
  const t = e.at;
  return t ? t.type === "REORDER" ? t.destination.droppableId : t.combine.droppableId : null;
};
const b1 = (e, t) => {
  const n = Ge(e);
  return n ? t[n] : null;
};
var y1 = ({
  state: e,
  type: t
}) => {
  const n = b1(e.impact, e.dimensions.droppables), r = !!n, o = e.dimensions.droppables[e.critical.droppable.id], i = n || o, s = i.axis.direction, a = s === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN") || s === "horizontal" && (t === "MOVE_LEFT" || t === "MOVE_RIGHT");
  if (a && !r)
    return null;
  const l = t === "MOVE_DOWN" || t === "MOVE_RIGHT", c = e.dimensions.draggables[e.critical.draggable.id], u = e.current.page.borderBoxCenter, {
    draggables: d,
    droppables: f
  } = e.dimensions;
  return a ? c1({
    isMovingForward: l,
    previousPageBorderBoxCenter: u,
    draggable: c,
    destination: i,
    draggables: d,
    viewport: e.viewport,
    previousClientSelection: e.current.client.selection,
    previousImpact: e.impact,
    afterCritical: e.afterCritical
  }) : h1({
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
function Zt(e) {
  return e.phase === "DRAGGING" || e.phase === "COLLECTING";
}
function Ap(e) {
  const t = Ze(e.top, e.bottom), n = Ze(e.left, e.right);
  return function(o) {
    return t(o.y) && n(o.x);
  };
}
function v1(e, t) {
  return e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top;
}
function w1({
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
function x1({
  pageBorderBox: e,
  draggable: t,
  droppables: n
}) {
  const r = ai(n).filter((o) => {
    if (!o.isEnabled)
      return !1;
    const i = o.subject.active;
    if (!i || !v1(e, i))
      return !1;
    if (Ap(i)(e.center))
      return !0;
    const s = o.axis, a = i.center[s.crossAxisLine], l = e[s.crossAxisStart], c = e[s.crossAxisEnd], u = Ze(i[s.crossAxisStart], i[s.crossAxisEnd]), d = u(l), f = u(c);
    return !d && !f ? !0 : d ? l < a : c > a;
  });
  return r.length ? r.length === 1 ? r[0].descriptor.id : w1({
    pageBorderBox: e,
    draggable: t,
    candidates: r
  }) : null;
}
const Op = (e, t) => ct(yr(e, t));
var S1 = (e, t) => {
  const n = e.frame;
  return n ? Op(t, n.scroll.diff.value) : t;
};
function $p({
  displaced: e,
  id: t
}) {
  return !!(e.visible[t] || e.invisible[t]);
}
function C1({
  draggable: e,
  closest: t,
  inHomeList: n
}) {
  return t ? n && t.descriptor.index > e.descriptor.index ? t.descriptor.index - 1 : t.descriptor.index : null;
}
var E1 = ({
  pageBorderBoxWithDroppableScroll: e,
  draggable: t,
  destination: n,
  insideDestination: r,
  last: o,
  viewport: i,
  afterCritical: s
}) => {
  const a = n.axis, l = vr(n.axis, t.displaceBy), c = l.value, u = e[a.start], d = e[a.end], p = ci(t, r).find((g) => {
    const h = g.descriptor.id, w = g.page.borderBox.center[a.line], x = zt(h, s), y = $p({
      displaced: o,
      id: h
    });
    return x ? y ? d <= w : u < w - c : y ? d <= w + c : u < w;
  }) || null, m = C1({
    draggable: t,
    closest: p,
    inHomeList: Tn(t, n)
  });
  return co({
    draggable: t,
    insideDestination: r,
    destination: n,
    viewport: i,
    last: o,
    displacedBy: l,
    index: m
  });
};
const P1 = 4;
var D1 = ({
  draggable: e,
  pageBorderBoxWithDroppableScroll: t,
  previousImpact: n,
  destination: r,
  insideDestination: o,
  afterCritical: i
}) => {
  if (!r.isCombineEnabled)
    return null;
  const s = r.axis, a = vr(r.axis, e.displaceBy), l = a.value, c = t[s.start], u = t[s.end], f = ci(e, o).find((m) => {
    const g = m.descriptor.id, h = m.page.borderBox, x = h[s.size] / P1, y = zt(g, i), v = $p({
      displaced: n.displaced,
      id: g
    });
    return y ? v ? u > h[s.start] + x && u < h[s.end] - x : c > h[s.start] - l + x && c < h[s.end] - l - x : v ? u > h[s.start] + l + x && u < h[s.end] + l - x : c > h[s.start] + x && c < h[s.end] - x;
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
  const a = Op(t.page.borderBox, e), l = x1({
    pageBorderBox: a,
    draggable: t,
    droppables: r
  });
  if (!l)
    return jC;
  const c = r[l], u = Nn(c.descriptor.id, n), d = S1(c, a);
  return D1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    previousImpact: o,
    destination: c,
    insideDestination: u,
    afterCritical: s
  }) || E1({
    pageBorderBoxWithDroppableScroll: d,
    draggable: t,
    destination: c,
    insideDestination: u,
    last: o.displaced,
    viewport: i,
    afterCritical: s
  });
}, rl = (e, t) => ({
  ...e,
  [t.descriptor.id]: t
});
const R1 = ({
  previousImpact: e,
  impact: t,
  droppables: n
}) => {
  const r = Ge(e), o = Ge(t);
  if (!r || r === o)
    return n;
  const i = n[r];
  if (!i.subject.withPlaceholder)
    return n;
  const s = m1(i);
  return rl(n, s);
};
var I1 = ({
  draggable: e,
  draggables: t,
  droppables: n,
  previousImpact: r,
  impact: o
}) => {
  const i = R1({
    previousImpact: r,
    impact: o,
    droppables: n
  }), s = Ge(o);
  if (!s)
    return i;
  const a = n[s];
  if (Tn(e, a) || a.subject.withPlaceholder)
    return i;
  const l = Ip(a, e, t);
  return rl(i, l);
}, Gn = ({
  state: e,
  clientSelection: t,
  dimensions: n,
  viewport: r,
  impact: o,
  scrollJumpRequest: i
}) => {
  const s = r || e.viewport, a = n || e.dimensions, l = t || e.current.client.selection, c = je(l, e.initial.client.selection), u = {
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
  const p = a.draggables[e.critical.draggable.id], m = o || Np({
    pageOffset: d.offset,
    draggable: p,
    draggables: a.draggables,
    droppables: a.droppables,
    previousImpact: e.impact,
    viewport: s,
    afterCritical: e.afterCritical
  }), g = I1({
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
function A1(e, t) {
  return e.map((n) => t[n]);
}
var Tp = ({
  impact: e,
  viewport: t,
  draggables: n,
  destination: r,
  forceShouldAnimate: o
}) => {
  const i = e.displaced, s = A1(i.all, n), a = or({
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
  const s = ui({
    impact: e,
    draggable: t,
    draggables: r,
    droppable: n,
    afterCritical: i
  });
  return nl({
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
  } = i, l = s[e.critical.draggable.id], c = Ge(r);
  c || B(!1);
  const u = a[c], d = Tp({
    impact: r,
    viewport: o,
    destination: u,
    draggables: s
  }), f = Lp({
    impact: d,
    draggable: l,
    droppable: u,
    draggables: s,
    viewport: o,
    afterCritical: e.afterCritical
  });
  return Gn({
    impact: d,
    clientSelection: f,
    state: e,
    dimensions: i,
    viewport: o
  });
}, O1 = (e) => ({
  index: e.index,
  droppableId: e.droppableId
}), kp = ({
  draggable: e,
  home: t,
  draggables: n,
  viewport: r
}) => {
  const o = vr(t.axis, e.displaceBy), i = Nn(t.descriptor.id, n), s = i.indexOf(e);
  s === -1 && B(!1);
  const a = i.slice(s + 1), l = a.reduce((f, p) => (f[p.descriptor.id] = !0, f), {}), c = {
    inVirtualList: t.descriptor.mode === "virtual",
    displacedBy: o,
    effected: l
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
        destination: O1(e.descriptor)
      }
    },
    afterCritical: c
  };
}, $1 = (e, t) => ({
  draggables: e.draggables,
  droppables: rl(e.droppables, t)
}), N1 = ({
  draggable: e,
  offset: t,
  initialWindowScroll: n
}) => {
  const r = io(e.client, t), o = so(r, n);
  return {
    ...e,
    placeholder: {
      ...e.placeholder,
      client: r
    },
    client: r,
    page: o
  };
}, T1 = (e) => {
  const t = e.frame;
  return t || B(!1), t;
}, L1 = ({
  additions: e,
  updatedDroppables: t,
  viewport: n
}) => {
  const r = n.scroll.diff.value;
  return e.map((o) => {
    const i = o.descriptor.droppableId, s = t[i], l = T1(s).scroll.diff.value, c = he(r, l);
    return N1({
      draggable: o,
      offset: c,
      initialWindowScroll: n.scroll.initial
    });
  });
}, M1 = ({
  state: e,
  published: t
}) => {
  const n = t.modified.map((w) => {
    const x = e.dimensions.droppables[w.droppableId];
    return Ja(x, w.scroll);
  }), r = {
    ...e.dimensions.droppables,
    ...yp(n)
  }, o = vp(L1({
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
  }, a = Ge(e.impact), l = a ? s.droppables[a] : null, c = s.draggables[e.critical.draggable.id], u = s.droppables[e.critical.droppable.id], {
    impact: d,
    afterCritical: f
  } = kp({
    draggable: c,
    home: u,
    draggables: i,
    viewport: e.viewport
  }), p = l && l.isCombineEnabled ? e.impact : d, m = Np({
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
const gs = (e) => e.movementMode === "SNAP", ji = (e, t, n) => {
  const r = $1(e.dimensions, t);
  return !gs(e) || n ? Gn({
    state: e,
    dimensions: r
  }) : Mp({
    state: e,
    dimensions: r
  });
};
function Vi(e) {
  return e.isDragging && e.movementMode === "SNAP" ? {
    ...e,
    scrollJumpRequest: null
  } : e;
}
const ou = {
  phase: "IDLE",
  completed: null,
  shouldFlush: !1
};
var k1 = (e = ou, t) => {
  if (t.type === "FLUSH")
    return {
      ...ou,
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
    }, d = ai(i.droppables).every((g) => !g.isFixedOnPage), {
      impact: f,
      afterCritical: p
    } = kp({
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
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" ? e : (e.phase !== "DRAGGING" && B(!1), {
      ...e,
      phase: "COLLECTING"
    });
  if (t.type === "PUBLISH_WHILE_DRAGGING")
    return e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || B(!1), M1({
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
    return kt(n, e.current.client.selection) ? e : Gn({
      state: e,
      clientSelection: n,
      impact: gs(e) ? e.impact : null
    });
  }
  if (t.type === "UPDATE_DROPPABLE_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
      return Vi(e);
    Zt(e) || B(!1);
    const {
      id: n,
      newScroll: r
    } = t.payload, o = e.dimensions.droppables[n];
    if (!o)
      return e;
    const i = Ja(o, r);
    return ji(e, i, !1);
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
    return ji(e, i, !0);
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
    return ji(e, i, !0);
  }
  if (t.type === "MOVE_BY_WINDOW_SCROLL") {
    if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
      return e;
    Zt(e) || B(!1), e.isWindowScrollAllowed || B(!1);
    const n = t.payload.newScroll;
    if (kt(e.viewport.scroll.current, n))
      return Vi(e);
    const r = Pp(e.viewport, n);
    return gs(e) ? Mp({
      state: e,
      viewport: r
    }) : Gn({
      state: e,
      viewport: r
    });
  }
  if (t.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!Zt(e))
      return e;
    const n = t.payload.maxScroll;
    if (kt(n, e.viewport.scroll.max))
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
    const n = y1({
      state: e,
      type: t.type
    });
    return n ? Gn({
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
const _1 = (e) => ({
  type: "BEFORE_INITIAL_CAPTURE",
  payload: e
}), F1 = (e) => ({
  type: "LIFT",
  payload: e
}), B1 = (e) => ({
  type: "INITIAL_PUBLISH",
  payload: e
}), j1 = (e) => ({
  type: "PUBLISH_WHILE_DRAGGING",
  payload: e
}), V1 = () => ({
  type: "COLLECTION_STARTING",
  payload: null
}), z1 = (e) => ({
  type: "UPDATE_DROPPABLE_SCROLL",
  payload: e
}), G1 = (e) => ({
  type: "UPDATE_DROPPABLE_IS_ENABLED",
  payload: e
}), W1 = (e) => ({
  type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
  payload: e
}), _p = (e) => ({
  type: "MOVE",
  payload: e
}), H1 = (e) => ({
  type: "MOVE_BY_WINDOW_SCROLL",
  payload: e
}), U1 = (e) => ({
  type: "UPDATE_VIEWPORT_MAX_SCROLL",
  payload: e
}), q1 = () => ({
  type: "MOVE_UP",
  payload: null
}), K1 = () => ({
  type: "MOVE_DOWN",
  payload: null
}), Y1 = () => ({
  type: "MOVE_RIGHT",
  payload: null
}), X1 = () => ({
  type: "MOVE_LEFT",
  payload: null
}), ol = () => ({
  type: "FLUSH",
  payload: null
}), J1 = (e) => ({
  type: "DROP_ANIMATE",
  payload: e
}), il = (e) => ({
  type: "DROP_COMPLETE",
  payload: e
}), Fp = (e) => ({
  type: "DROP",
  payload: e
}), Q1 = (e) => ({
  type: "DROP_PENDING",
  payload: e
}), Bp = () => ({
  type: "DROP_ANIMATION_FINISHED",
  payload: null
});
var Z1 = (e) => ({
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
  l.phase === "DROP_ANIMATING" && n(il({
    completed: l.completed
  })), t().phase !== "IDLE" && B(!1), n(ol()), n(_1({
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
  n(B1({
    critical: d,
    dimensions: f,
    clientSelection: s,
    movementMode: a,
    viewport: p
  }));
}, eE = (e) => () => (t) => (n) => {
  n.type === "INITIAL_PUBLISH" && e.dragging(), n.type === "DROP_ANIMATE" && e.dropping(n.payload.completed.result.reason), (n.type === "FLUSH" || n.type === "DROP_COMPLETE") && e.resting(), t(n);
};
const sl = {
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
}, Jt = `${jp.outOfTheWay}s ${sl.outOfTheWay}`, Wn = {
  fluid: `opacity ${Jt}`,
  snap: `transform ${Jt}, opacity ${Jt}`,
  drop: (e) => {
    const t = `${e}s ${sl.drop}`;
    return `transform ${t}, opacity ${t}`;
  },
  outOfTheWay: `transform ${Jt}`,
  placeholder: `height ${Jt}, width ${Jt}, margin ${Jt}`
}, iu = (e) => kt(e, fe) ? void 0 : `translate(${e.x}px, ${e.y}px)`, hs = {
  moveTo: iu,
  drop: (e, t) => {
    const n = iu(e);
    if (n)
      return t ? `${n} scale(${ir.scale.drop})` : n;
  }
}, {
  minDropTime: bs,
  maxDropTime: Vp
} = jp, tE = Vp - bs, su = 1500, nE = 0.6;
var rE = ({
  current: e,
  destination: t,
  reason: n
}) => {
  const r = nr(e, t);
  if (r <= 0)
    return bs;
  if (r >= su)
    return Vp;
  const o = r / su, i = bs + tE * o, s = n === "CANCEL" ? i * nE : i;
  return Number(s.toFixed(2));
}, oE = ({
  impact: e,
  draggable: t,
  dimensions: n,
  viewport: r,
  afterCritical: o
}) => {
  const {
    draggables: i,
    droppables: s
  } = n, a = Ge(e), l = a ? s[a] : null, c = s[t.descriptor.droppableId], u = Lp({
    impact: e,
    draggable: t,
    draggables: i,
    afterCritical: o,
    droppable: l || c,
    viewport: r
  });
  return je(u, t.client.borderBox.center);
}, iE = ({
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
const sE = ({
  getState: e,
  dispatch: t
}) => (n) => (r) => {
  if (r.type !== "DROP") {
    n(r);
    return;
  }
  const o = e(), i = r.payload.reason;
  if (o.phase === "COLLECTING") {
    t(Q1({
      reason: i
    }));
    return;
  }
  if (o.phase === "IDLE")
    return;
  o.phase === "DROP_PENDING" && o.isWaiting && B(!1), o.phase === "DRAGGING" || o.phase === "DROP_PENDING" || B(!1);
  const a = o.critical, l = o.dimensions, c = l.draggables[o.critical.draggable.id], {
    impact: u,
    didDropInsideDroppable: d
  } = iE({
    reason: i,
    lastImpact: o.impact,
    afterCritical: o.afterCritical,
    onLiftImpact: o.onLiftImpact,
    home: o.dimensions.droppables[o.critical.droppable.id],
    viewport: o.viewport,
    draggables: o.dimensions.draggables
  }), f = d ? Qa(u) : null, p = d ? li(u) : null, m = {
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
  }, h = oE({
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
  if (!(!kt(o.current.client.offset, h) || !!g.combine)) {
    t(il({
      completed: w
    }));
    return;
  }
  const y = rE({
    current: o.current.client.offset,
    destination: h,
    reason: i
  });
  t(J1({
    newHomeClientOffset: h,
    dropDuration: y,
    completed: w
  }));
};
var aE = sE, zp = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});
function lE(e) {
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
function cE({
  onWindowScroll: e
}) {
  function t() {
    e(zp());
  }
  const n = tr(t), r = lE(n);
  let o = Mt;
  function i() {
    return o !== Mt;
  }
  function s() {
    i() && B(!1), o = Je(window, [r]);
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
const uE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH", dE = (e) => {
  const t = cE({
    onWindowScroll: (n) => {
      e.dispatch(H1({
        newScroll: n
      }));
    }
  });
  return (n) => (r) => {
    !t.isActive() && r.type === "INITIAL_PUBLISH" && t.start(), t.isActive() && uE(r) && t.stop(), n(r);
  };
};
var fE = dE, pE = (e) => {
  let t = !1, n = !1;
  const r = setTimeout(() => {
    n = !0;
  }), o = (i) => {
    t || n || (t = !0, e(i), clearTimeout(r));
  };
  return o.wasCalled = () => t, o;
}, mE = () => {
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
const gE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.droppableId === t.droppableId && e.index === t.index, hE = (e, t) => e == null && t == null ? !0 : e == null || t == null ? !1 : e.draggableId === t.draggableId && e.droppableId === t.droppableId, bE = (e, t) => {
  if (e === t)
    return !0;
  const n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index, r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
  return n && r;
}, Bn = (e, t) => {
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
function zi(e, t, n, r) {
  if (!e) {
    n(r(t));
    return;
  }
  const o = pE(n);
  e(t, {
    announce: o
  }), o.wasCalled() || n(r(t));
}
var yE = (e, t) => {
  const n = mE();
  let r = null;
  const o = (d, f) => {
    r && B(!1), Bn("onBeforeCapture", () => {
      const p = e().onBeforeCapture;
      p && p({
        draggableId: d,
        mode: f
      });
    });
  }, i = (d, f) => {
    r && B(!1), Bn("onBeforeDragStart", () => {
      const p = e().onBeforeDragStart;
      p && p(Ar(d, f));
    });
  }, s = (d, f) => {
    r && B(!1);
    const p = Ar(d, f);
    r = {
      mode: f,
      lastCritical: d,
      lastLocation: p.source,
      lastCombine: null
    }, n.add(() => {
      Bn("onDragStart", () => zi(e().onDragStart, p, t, Fr.onDragStart));
    });
  }, a = (d, f) => {
    const p = Qa(f), m = li(f);
    r || B(!1);
    const g = !bE(d, r.lastCritical);
    g && (r.lastCritical = d);
    const h = !gE(r.lastLocation, p);
    h && (r.lastLocation = p);
    const w = !hE(r.lastCombine, m);
    if (w && (r.lastCombine = m), !g && !h && !w)
      return;
    const x = {
      ...Ar(d, r.mode),
      combine: m,
      destination: p
    };
    n.add(() => {
      Bn("onDragUpdate", () => zi(e().onDragUpdate, x, t, Fr.onDragUpdate));
    });
  }, l = () => {
    r || B(!1), n.flush();
  }, c = (d) => {
    r || B(!1), r = null, Bn("onDragEnd", () => zi(e().onDragEnd, d, t, Fr.onDragEnd));
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
}, vE = (e, t) => {
  const n = yE(e, t);
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
const wE = (e) => (t) => (n) => {
  if (n.type !== "DROP_ANIMATION_FINISHED") {
    t(n);
    return;
  }
  const r = e.getState();
  r.phase !== "DROP_ANIMATING" && B(!1), e.dispatch(il({
    completed: r.completed
  }));
};
var xE = wE;
const SE = (e) => {
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
      n = null, t = Je(window, [s]);
    });
  };
};
var CE = SE, EE = (e) => () => (t) => (n) => {
  (n.type === "DROP_COMPLETE" || n.type === "FLUSH" || n.type === "DROP_ANIMATE") && e.stopPublishing(), t(n);
}, PE = (e) => {
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
const DE = (e) => e.type === "DROP_COMPLETE" || e.type === "DROP_ANIMATE" || e.type === "FLUSH";
var RE = (e) => (t) => (n) => (r) => {
  if (DE(r)) {
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
const IE = (e) => (t) => (n) => {
  if (t(n), n.type !== "PUBLISH_WHILE_DRAGGING")
    return;
  const r = e.getState();
  r.phase === "DROP_PENDING" && (r.isWaiting || e.dispatch(Fp({
    reason: r.reason
  })));
};
var AE = IE;
const OE = Yf;
var $E = ({
  dimensionMarshal: e,
  focusMarshal: t,
  styleMarshal: n,
  getResponders: r,
  announce: o,
  autoScroller: i
}) => Kf(k1, OE(cS(eE(n), EE(e), Z1(e), aE, xE, CE, AE, RE(i), fE, PE(t), vE(r, o))));
const Gi = () => ({
  additions: {},
  removals: {},
  modified: {}
});
function NE({
  registry: e,
  callbacks: t
}) {
  let n = Gi(), r = null;
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
      n = Gi(), t.publish(p);
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
      r && (cancelAnimationFrame(r), r = null, n = Gi());
    }
  };
}
var Gp = ({
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
}, TE = () => {
  const e = zp(), t = Hp(), n = e.y, r = e.x, o = Wp(), i = o.clientWidth, s = o.clientHeight, a = r + i, l = n + s;
  return {
    frame: ct({
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
}, LE = ({
  critical: e,
  scrollOptions: t,
  registry: n
}) => {
  const r = TE(), o = r.scroll.current, i = e.droppable, s = n.droppable.getAllByType(i.type).map((u) => u.callbacks.getDimensionAndWatchScroll(o, t)), a = n.draggable.getAllByType(e.draggable.type).map((u) => u.getDimension(o));
  return {
    dimensions: {
      draggables: vp(a),
      droppables: yp(s)
    },
    critical: e,
    viewport: r
  };
};
function au(e, t, n) {
  return !(n.descriptor.id === t.id || n.descriptor.type !== t.type || e.droppable.getById(n.descriptor.droppableId).descriptor.mode !== "virtual");
}
var ME = (e, t) => {
  let n = null;
  const r = NE({
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
  }, l = () => {
    if (!n)
      return;
    r.stop();
    const f = n.critical.droppable;
    e.droppable.getAllByType(f.type).forEach((p) => p.callbacks.dragStopped()), n.unsubscribe(), n = null;
  }, c = (f) => {
    n || B(!1);
    const p = n.critical.draggable;
    f.type === "ADDITION" && au(e, p, f.value) && r.add(f.value), f.type === "REMOVAL" && au(e, p, f.value) && r.remove(f.value);
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
      }, h = e.subscribe(c);
      return n = {
        critical: g,
        unsubscribe: h
      }, LE({
        critical: g,
        registry: e,
        scrollOptions: f.scrollOptions
      });
    },
    stopPublishing: l
  };
}, Up = (e, t) => e.phase === "IDLE" ? !0 : e.phase !== "DROP_ANIMATING" || e.completed.result.draggableId === t ? !1 : e.completed.result.reason === "DROP", kE = (e) => {
  window.scrollBy(e.x, e.y);
};
const _E = de((e) => ai(e).filter((t) => !(!t.isEnabled || !t.frame))), FE = (e, t) => _E(t).find((r) => (r.frame || B(!1), Ap(r.frame.pageMarginBox)(e))) || null;
var BE = ({
  center: e,
  destination: t,
  droppables: n
}) => {
  if (t) {
    const o = n[t];
    return o.frame ? o : null;
  }
  return FE(e, n);
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
var jE = (e, t, n = () => sr) => {
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
}, al = 1, VE = (e, t, n = () => sr) => {
  const r = n();
  if (e > t.startScrollingFrom)
    return 0;
  if (e <= t.maxScrollValueAt)
    return r.maxPixelScroll;
  if (e === t.startScrollingFrom)
    return al;
  const i = 1 - qp({
    startOfRange: t.maxScrollValueAt,
    endOfRange: t.startScrollingFrom,
    current: e
  }), s = r.maxPixelScroll * r.ease(i);
  return Math.ceil(s);
}, zE = (e, t, n) => {
  const r = n(), o = r.durationDampening.accelerateAt, i = r.durationDampening.stopDampeningAt, s = t, a = i, c = Date.now() - s;
  if (c >= i)
    return e;
  if (c < o)
    return al;
  const u = qp({
    startOfRange: o,
    endOfRange: a,
    current: c
  }), d = e * r.ease(u);
  return Math.ceil(d);
}, lu = ({
  distanceToEdge: e,
  thresholds: t,
  dragStartTime: n,
  shouldUseTimeDampening: r,
  getAutoScrollerOptions: o
}) => {
  const i = VE(e, t, o);
  return i === 0 ? 0 : r ? Math.max(zE(i, n, o), al) : i;
}, cu = ({
  container: e,
  distanceToEdges: t,
  dragStartTime: n,
  axis: r,
  shouldUseTimeDampening: o,
  getAutoScrollerOptions: i
}) => {
  const s = jE(e, r, i);
  return t[r.end] < t[r.start] ? lu({
    distanceToEdge: t[r.end],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }) : -1 * lu({
    distanceToEdge: t[r.start],
    thresholds: s,
    dragStartTime: n,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  });
}, GE = ({
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
const WE = bp((e) => e === 0 ? 0 : e);
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
  }, a = cu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Za,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), l = cu({
    container: t,
    distanceToEdges: s,
    dragStartTime: e,
    axis: Sp,
    shouldUseTimeDampening: o,
    getAutoScrollerOptions: i
  }), c = WE({
    x: l,
    y: a
  });
  if (kt(c, fe))
    return null;
  const u = GE({
    container: t,
    subject: n,
    proposedScroll: c
  });
  return u ? kt(u, fe) ? null : u : null;
};
const HE = bp((e) => e === 0 ? 0 : e > 0 ? 1 : -1), ll = (() => {
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
    return kt(i, fe) ? null : i;
  };
})(), Yp = ({
  max: e,
  current: t,
  change: n
}) => {
  const r = {
    x: Math.max(t.x, e.x),
    y: Math.max(t.y, e.y)
  }, o = HE(n), i = ll({
    max: r,
    current: t,
    change: o
  });
  return !i || o.x !== 0 && i.x === 0 || o.y !== 0 && i.y === 0;
}, cl = (e, t) => Yp({
  current: e.scroll.current,
  max: e.scroll.max,
  change: t
}), UE = (e, t) => {
  if (!cl(e, t))
    return null;
  const n = e.scroll.max, r = e.scroll.current;
  return ll({
    current: r,
    max: n,
    change: t
  });
}, ul = (e, t) => {
  const n = e.frame;
  return n ? Yp({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  }) : !1;
}, qE = (e, t) => {
  const n = e.frame;
  return !n || !ul(e, t) ? null : ll({
    current: n.scroll.current,
    max: n.scroll.max,
    change: t
  });
};
var KE = ({
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
  return s && cl(e, s) ? s : null;
}, YE = ({
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
  return a && ul(e, a) ? a : null;
}, uu = ({
  state: e,
  dragStartTime: t,
  shouldUseTimeDampening: n,
  scrollWindow: r,
  scrollDroppable: o,
  getAutoScrollerOptions: i
}) => {
  const s = e.current.page.borderBoxCenter, l = e.dimensions.draggables[e.critical.draggable.id].page.marginBox;
  if (e.isWindowScrollAllowed) {
    const d = e.viewport, f = KE({
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
  const c = BE({
    center: s,
    destination: Ge(e.impact),
    droppables: e.dimensions.droppables
  });
  if (!c)
    return;
  const u = YE({
    dragStartTime: t,
    droppable: c,
    subject: l,
    center: s,
    shouldUseTimeDampening: n,
    getAutoScrollerOptions: i
  });
  u && o(c.descriptor.id, u);
}, XE = ({
  scrollWindow: e,
  scrollDroppable: t,
  getAutoScrollerOptions: n = () => sr
}) => {
  const r = tr(e), o = tr(t);
  let i = null;
  const s = (c) => {
    i || B(!1);
    const {
      shouldUseTimeDampening: u,
      dragStartTime: d
    } = i;
    uu({
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
      i && B(!1);
      const u = Date.now();
      let d = !1;
      const f = () => {
        d = !0;
      };
      uu({
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
}, JE = ({
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
    if (!ul(a, l))
      return l;
    const c = qE(a, l);
    if (!c)
      return t(a.descriptor.id, l), null;
    const u = je(l, c);
    return t(a.descriptor.id, u), je(l, u);
  }, i = (a, l, c) => {
    if (!a || !cl(l, c))
      return c;
    const u = UE(l, c);
    if (!u)
      return n(c), null;
    const d = je(c, u);
    return n(d), je(c, d);
  };
  return (a) => {
    const l = a.scrollJumpRequest;
    if (!l)
      return;
    const c = Ge(a.impact);
    c || B(!1);
    const u = o(a.dimensions.droppables[c], l);
    if (!u)
      return;
    const d = a.viewport, f = i(a.isWindowScrollAllowed, d, u);
    f && r(a, f);
  };
}, QE = ({
  scrollDroppable: e,
  scrollWindow: t,
  move: n,
  getAutoScrollerOptions: r
}) => {
  const o = XE({
    scrollWindow: t,
    scrollDroppable: e,
    getAutoScrollerOptions: r
  }), i = JE({
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
})(), ys = (() => {
  const e = `${Dn}-draggable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), ZE = (() => {
  const e = `${Dn}-droppable`;
  return {
    base: e,
    contextId: `${e}-context-id`,
    id: `${e}-id`
  };
})(), du = {
  contextId: `${Dn}-scroll-container-context-id`
}, eP = (e) => (t) => `[${t}="${e}"]`, jn = (e, t) => e.map((n) => {
  const r = n.styles[t];
  return r ? `${n.selector} { ${r} }` : "";
}).join(" "), tP = "pointer-events: none;";
var nP = (e) => {
  const t = eP(e), n = (() => {
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
        dragging: tP,
        dropAnimating: a
      }
    };
  })(), r = (() => {
    const a = `
      transition: ${Wn.outOfTheWay};
    `;
    return {
      selector: t(ys.contextId),
      styles: {
        dragging: a,
        dropAnimating: a,
        userCancel: a
      }
    };
  })(), o = {
    selector: t(ZE.contextId),
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
    always: jn(s, "always"),
    resting: jn(s, "resting"),
    dragging: jn(s, "dragging"),
    dropAnimating: jn(s, "dropAnimating"),
    userCancel: jn(s, "userCancel")
  };
};
const rP = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? po : G;
var We = rP;
const Wi = () => {
  const e = document.querySelector("head");
  return e || B(!1), e;
}, fu = (e) => {
  const t = document.createElement("style");
  return e && t.setAttribute("nonce", e), t.type = "text/css", t;
};
function oP(e, t) {
  const n = Y(() => nP(e), [e]), r = V(null), o = V(null), i = z(de((d) => {
    const f = o.current;
    f || B(!1), f.textContent = d;
  }), []), s = z((d) => {
    const f = r.current;
    f || B(!1), f.textContent = d;
  }, []);
  We(() => {
    !r.current && !o.current || B(!1);
    const d = fu(t), f = fu(t);
    return r.current = d, o.current = f, d.setAttribute(`${Dn}-always`, e), f.setAttribute(`${Dn}-dynamic`, e), Wi().appendChild(d), Wi().appendChild(f), s(n.always), i(n.resting), () => {
      const p = (m) => {
        const g = m.current;
        g || B(!1), Wi().removeChild(g), m.current = null;
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
  return Y(() => ({
    dragging: a,
    dropping: l,
    resting: c
  }), [a, l, c]);
}
function Xp(e, t) {
  return Array.from(e.querySelectorAll(t));
}
var Jp = (e) => e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
function di(e) {
  return e instanceof Jp(e).HTMLElement;
}
function iP(e, t) {
  const n = `[${Rn.contextId}="${e}"]`, r = Xp(document, n);
  if (!r.length)
    return null;
  const o = r.find((i) => i.getAttribute(Rn.draggableId) === t);
  return !o || !di(o) ? null : o;
}
function sP(e) {
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
    const p = iP(e, f);
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
  return We(() => (o.current = !0, function() {
    o.current = !1;
    const f = r.current;
    f && cancelAnimationFrame(f);
  }), []), Y(() => ({
    register: i,
    tryRecordFocus: c,
    tryRestoreFocusRecorded: l,
    tryShiftRecord: a
  }), [i, c, l, a]);
}
function aP() {
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
  function l(d) {
    const f = a(d);
    return f || B(!1), f;
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
function lP() {
  const e = Y(aP, []);
  return G(() => function() {
    b.version.startsWith("16") || b.version.startsWith("17") ? requestAnimationFrame(e.clean) : e.clean();
  }, [e]), e;
}
var dl = b.createContext(null), uo = () => {
  const e = document.body;
  return e || B(!1), e;
};
const cP = {
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
var uP = cP;
const dP = (e) => `rfd-announcement-${e}`;
function fP(e) {
  const t = Y(() => dP(e), [e]), n = V(null);
  return G(function() {
    const i = document.createElement("div");
    return n.current = i, i.id = t, i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true"), Lt(i.style, uP), uo().appendChild(i), function() {
      setTimeout(function() {
        const l = uo();
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
let pP = 0;
const Qp = {
  separator: "::"
};
function mP(e, t = Qp) {
  return Y(() => `${e}${t.separator}${pP++}`, [t.separator, e]);
}
function gP(e, t = Qp) {
  const n = b.useId();
  return Y(() => `${e}${t.separator}${n}`, [t.separator, e, n]);
}
var fl = "useId" in b ? gP : mP;
function hP({
  contextId: e,
  uniqueId: t
}) {
  return `rfd-hidden-text-${e}-${t}`;
}
function bP({
  contextId: e,
  text: t
}) {
  const n = fl("hidden-text", {
    separator: "-"
  }), r = Y(() => hP({
    contextId: e,
    uniqueId: n
  }), [n, e]);
  return G(function() {
    const i = document.createElement("div");
    return i.id = r, i.textContent = t, i.style.display = "none", uo().appendChild(i), function() {
      const a = uo();
      a.contains(i) && a.removeChild(i);
    };
  }, [r, t]), r;
}
var fi = b.createContext(null);
function Zp(e) {
  const t = V(e);
  return G(() => {
    t.current = e;
  }), t;
}
function yP() {
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
const vP = 9, wP = 13, pl = 27, em = 32, xP = 33, SP = 34, CP = 35, EP = 36, PP = 37, DP = 38, RP = 39, IP = 40, AP = {
  [wP]: !0,
  [vP]: !0
};
var tm = (e) => {
  AP[e.keyCode] && e.preventDefault();
};
const OP = (() => {
  const e = "visibilitychange";
  return typeof document > "u" ? e : [e, `ms${e}`, `webkit${e}`, `moz${e}`, `o${e}`].find((r) => `on${r}` in document) || e;
})();
var pi = OP;
const nm = 0, pu = 5;
function $P(e, t) {
  return Math.abs(t.x - e.x) >= pu || Math.abs(t.y - e.y) >= pu;
}
const mu = {
  type: "IDLE"
};
function NP({
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
      const l = {
        x: s,
        y: a
      }, c = n();
      if (c.type === "DRAGGING") {
        o.preventDefault(), c.actions.move(l);
        return;
      }
      c.type !== "PENDING" && B(!1);
      const u = c.point;
      if (!$P(u, l))
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
      if (o.keyCode === pl) {
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
    eventName: pi,
    fn: e
  }];
}
function TP(e) {
  const t = V(mu), n = V(Mt), r = Y(() => ({
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
      n.current(), c(p, m);
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
    n.current = Je(window, [o, r], d);
  }, [o, r]), s = z(() => {
    t.current.type !== "IDLE" && (t.current = mu, n.current(), i());
  }, [i]), a = z(() => {
    const u = t.current;
    s(), u.type === "DRAGGING" && u.actions.cancel({
      shouldBlockNextClick: !0
    }), u.type === "PENDING" && u.actions.abort();
  }, [s]), l = z(function() {
    const d = {
      capture: !0,
      passive: !1
    }, f = NP({
      cancel: a,
      completed: s,
      getPhase: () => t.current,
      setPhase: (p) => {
        t.current = p;
      }
    });
    n.current = Je(window, f, d);
  }, [a, s]), c = z(function(d, f) {
    t.current.type !== "IDLE" && B(!1), t.current = {
      type: "PENDING",
      point: f,
      actions: d
    }, l();
  }, [l]);
  We(function() {
    return i(), function() {
      n.current();
    };
  }, [i]);
}
function LP() {
}
const MP = {
  [SP]: !0,
  [xP]: !0,
  [EP]: !0,
  [CP]: !0
};
function kP(e, t) {
  function n() {
    t(), e.cancel();
  }
  function r() {
    t(), e.drop();
  }
  return [{
    eventName: "keydown",
    fn: (o) => {
      if (o.keyCode === pl) {
        o.preventDefault(), n();
        return;
      }
      if (o.keyCode === em) {
        o.preventDefault(), r();
        return;
      }
      if (o.keyCode === IP) {
        o.preventDefault(), e.moveDown();
        return;
      }
      if (o.keyCode === DP) {
        o.preventDefault(), e.moveUp();
        return;
      }
      if (o.keyCode === RP) {
        o.preventDefault(), e.moveRight();
        return;
      }
      if (o.keyCode === PP) {
        o.preventDefault(), e.moveLeft();
        return;
      }
      if (MP[o.keyCode]) {
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
    eventName: pi,
    fn: n
  }];
}
function _P(e) {
  const t = V(LP), n = Y(() => ({
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
      let l = !0;
      const c = a.snapLift();
      t.current();
      function u() {
        l || B(!1), l = !1, t.current(), r();
      }
      t.current = Je(window, kP(c, u), {
        capture: !0,
        passive: !1
      });
    }
  }), [e]), r = z(function() {
    const i = {
      passive: !1,
      capture: !0
    };
    t.current = Je(window, [n], i);
  }, [n]);
  We(function() {
    return r(), function() {
      t.current();
    };
  }, [r]);
}
const Hi = {
  type: "IDLE"
}, FP = 120, BP = 0.15;
function jP({
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
      n.keyCode === pl && n.preventDefault(), e();
    }
  }, {
    eventName: pi,
    fn: e
  }];
}
function VP({
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
      if (!i || !(i.force >= BP))
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
    eventName: pi,
    fn: e
  }];
}
function zP(e) {
  const t = V(Hi), n = V(Mt), r = z(function() {
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
        clientX: w,
        clientY: x
      } = h, y = {
        x: w,
        y: x
      };
      n.current(), d(g, y);
    }
  }), [e]), s = z(function() {
    const p = {
      capture: !0,
      passive: !1
    };
    n.current = Je(window, [i], p);
  }, [i]), a = z(() => {
    const f = t.current;
    f.type !== "IDLE" && (f.type === "PENDING" && clearTimeout(f.longPressTimerId), o(Hi), n.current(), s());
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
    }, g = Je(window, VP(m), p), h = Je(window, jP(m), p);
    n.current = function() {
      g(), h();
    };
  }, [l, r, a]), u = z(function() {
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
    const g = setTimeout(u, FP);
    o({
      type: "PENDING",
      point: m,
      actions: p,
      longPressTimerId: g
    }), c();
  }, [c, r, o, u]);
  We(function() {
    return s(), function() {
      n.current();
      const m = r();
      m.type === "PENDING" && (clearTimeout(m.longPressTimerId), o(Hi));
    };
  }, [r, s, o]), We(function() {
    return Je(window, [{
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
const GP = ["input", "button", "textarea", "select", "option", "optgroup", "video", "audio"];
function rm(e, t) {
  if (t == null)
    return !1;
  if (GP.includes(t.tagName.toLowerCase()))
    return !0;
  const r = t.getAttribute("contenteditable");
  return r === "true" || r === "" ? !0 : t === e ? !1 : rm(e, t.parentElement);
}
function WP(e, t) {
  const n = t.target;
  return di(n) ? rm(e, n) : !1;
}
var HP = (e) => ct(e.getBoundingClientRect()).center;
function UP(e) {
  return e instanceof Jp(e).Element;
}
const qP = (() => {
  const e = "matches";
  return typeof document > "u" ? e : [e, "msMatchesSelector", "webkitMatchesSelector"].find((r) => r in Element.prototype) || e;
})();
function om(e, t) {
  return e == null ? null : e[qP](t) ? e : om(e.parentElement, t);
}
function KP(e, t) {
  return e.closest ? e.closest(t) : om(e, t);
}
function YP(e) {
  return `[${Rn.contextId}="${e}"]`;
}
function XP(e, t) {
  const n = t.target;
  if (!UP(n))
    return null;
  const r = YP(e), o = KP(n, r);
  return !o || !di(o) ? null : o;
}
function JP(e, t) {
  const n = XP(e, t);
  return n ? n.getAttribute(Rn.draggableId) : null;
}
function QP(e, t) {
  const n = `[${ys.contextId}="${e}"]`, o = Xp(document, n).find((i) => i.getAttribute(ys.id) === t);
  return !o || !di(o) ? null : o;
}
function ZP(e) {
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
function eD({
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
  const l = r.draggable.getById(o), c = QP(t, l.descriptor.id);
  if (!c || s && !l.options.canDragInteractiveElements && WP(c, s))
    return null;
  const u = e.claim(i || Mt);
  let d = "PRE_DRAG";
  function f() {
    return l.options.shouldRespectForcePress;
  }
  function p() {
    return e.isActive(u);
  }
  function m(S, C) {
    Or({
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
    d !== "PRE_DRAG" && (C(), B(!1)), n.dispatch(F1(S.liftActionArgs)), d = "DRAGGING";
    function P(E, $ = {
      shouldBlockNextClick: !1
    }) {
      if (S.cleanup(), $.shouldBlockNextClick) {
        const N = Je(window, [{
          eventName: "click",
          fn: ZP,
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
      isActive: () => Or({
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
    const C = tr((E) => {
      g(() => _p({
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
      moveUp: () => g(q1),
      moveRight: () => g(Y1),
      moveDown: () => g(K1),
      moveLeft: () => g(X1)
    };
    return h({
      liftActionArgs: {
        id: o,
        clientSelection: HP(c),
        movementMode: "SNAP"
      },
      cleanup: Mt,
      actions: S
    });
  }
  function y() {
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
    snapLift: x,
    abort: y
  };
}
const tD = [TP, _P, zP];
function nD({
  contextId: e,
  store: t,
  registry: n,
  customSensors: r,
  enableDefaultSensors: o
}) {
  const i = [...o ? tD : [], ...r || []], s = U(() => yP())[0], a = z(function(h, w) {
    ar(h) && !ar(w) && s.tryAbandon();
  }, [s]);
  We(function() {
    let h = t.getState();
    return t.subscribe(() => {
      const x = t.getState();
      a(h, x), h = x;
    });
  }, [s, t, a]), We(() => s.tryAbandon, [s.tryAbandon]);
  const l = z((g) => im({
    lockAPI: s,
    registry: n,
    store: t,
    draggableId: g
  }), [s, n, t]), c = z((g, h, w) => eD({
    lockAPI: s,
    registry: n,
    contextId: e,
    store: t,
    draggableId: g,
    forceSensorStop: h || null,
    sourceEvent: w && w.sourceEvent ? w.sourceEvent : null
  }), [e, s, n, t]), u = z((g) => JP(e, g), [e]), d = z((g) => {
    const h = n.draggable.findById(g);
    return h ? h.options : null;
  }, [n.draggable]), f = z(function() {
    s.isClaimed() && (s.tryAbandon(), t.getState().phase !== "IDLE" && t.dispatch(ol()));
  }, [s, t]), p = z(() => s.isClaimed(), [s]), m = Y(() => ({
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
const rD = (e) => ({
  onBeforeCapture: (t) => {
    const n = () => {
      e.onBeforeCapture && e.onBeforeCapture(t);
    };
    b.version.startsWith("16") || b.version.startsWith("17") ? n() : ws(n);
  },
  onBeforeDragStart: e.onBeforeDragStart,
  onDragStart: e.onDragStart,
  onDragEnd: e.onDragEnd,
  onDragUpdate: e.onDragUpdate
}), oD = (e) => ({
  ...sr,
  ...e.autoScrollerOptions,
  durationDampening: {
    ...sr.durationDampening,
    ...e.autoScrollerOptions
  }
});
function Vn(e) {
  return e.current || B(!1), e.current;
}
function iD(e) {
  const {
    contextId: t,
    setCallbacks: n,
    sensors: r,
    nonce: o,
    dragHandleUsageInstructions: i
  } = e, s = V(null), a = Zp(e), l = z(() => rD(a.current), [a]), c = z(() => oD(a.current), [a]), u = fP(t), d = bP({
    contextId: t,
    text: i
  }), f = oP(t, o), p = z((N) => {
    Vn(s).dispatch(N);
  }, []), m = Y(() => Fc({
    publishWhileDragging: j1,
    updateDroppableScroll: z1,
    updateDroppableIsEnabled: G1,
    updateDroppableIsCombineEnabled: W1,
    collectionStarting: V1
  }, p), [p]), g = lP(), h = Y(() => ME(g, m), [g, m]), w = Y(() => QE({
    scrollWindow: kE,
    scrollDroppable: h.scrollDroppable,
    getAutoScrollerOptions: c,
    ...Fc({
      move: _p
    }, p)
  }), [h.scrollDroppable, p, c]), x = sP(t), y = Y(() => $E({
    announce: u,
    autoScroller: w,
    dimensionMarshal: h,
    focusMarshal: x,
    getResponders: l,
    styleMarshal: f
  }), [u, w, h, x, l, f]);
  s.current = y;
  const v = z(() => {
    const N = Vn(s);
    N.getState().phase !== "IDLE" && N.dispatch(ol());
  }, []), S = z(() => {
    const N = Vn(s).getState();
    return N.phase === "DROP_ANIMATING" ? !0 : N.phase === "IDLE" ? !1 : N.isDragging;
  }, []), C = Y(() => ({
    isDragging: S,
    tryAbort: v
  }), [S, v]);
  n(C);
  const P = z((N) => Up(Vn(s).getState(), N), []), E = z(() => Zt(Vn(s).getState()), []), $ = Y(() => ({
    marshal: h,
    focus: x,
    contextId: t,
    canLift: P,
    isMovementAllowed: E,
    dragHandleUsageInstructionsId: d,
    registry: g
  }), [t, h, d, x, P, E, g]);
  return nD({
    contextId: t,
    store: y,
    registry: g,
    customSensors: r || null,
    enableDefaultSensors: e.enableDefaultSensors !== !1
  }), G(() => v, [v]), b.createElement(fi.Provider, {
    value: $
  }, b.createElement(mC, {
    context: dl,
    store: y
  }, e.children));
}
let sD = 0;
function aD() {
  return Y(() => `${sD++}`, []);
}
function lD() {
  return b.useId();
}
var cD = "useId" in b ? lD : aD;
function uD(e) {
  const t = cD(), n = e.dragHandleUsageInstructions || Fr.dragHandleUsageInstructions;
  return b.createElement(DC, null, (r) => b.createElement(iD, {
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
const gu = {
  dragging: 5e3,
  dropAnimating: 4500
}, dD = (e, t) => t ? Wn.drop(t.duration) : e ? Wn.snap : Wn.fluid, fD = (e, t) => {
  if (e)
    return t ? ir.opacity.drop : ir.opacity.combining;
}, pD = (e) => e.forceShouldAnimate != null ? e.forceShouldAnimate : e.mode === "SNAP";
function mD(e) {
  const n = e.dimension.client, {
    offset: r,
    combineWith: o,
    dropping: i
  } = e, s = !!o, a = pD(e), l = !!i, c = l ? hs.drop(r, s) : hs.moveTo(r);
  return {
    position: "fixed",
    top: n.marginBox.top,
    left: n.marginBox.left,
    boxSizing: "border-box",
    width: n.borderBox.width,
    height: n.borderBox.height,
    transition: dD(a, i),
    transform: c,
    opacity: fD(s, l),
    zIndex: l ? gu.dropAnimating : gu.dragging,
    pointerEvents: "none"
  };
}
function gD(e) {
  return {
    transform: hs.moveTo(e.offset),
    transition: e.shouldAnimateDisplacement ? void 0 : "none"
  };
}
function hD(e) {
  return e.type === "DRAGGING" ? mD(e) : gD(e);
}
function bD(e, t, n = fe) {
  const r = window.getComputedStyle(t), o = t.getBoundingClientRect(), i = fp(o, r), s = so(i, n), a = {
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
function yD(e) {
  const t = fl("draggable"), {
    descriptor: n,
    registry: r,
    getDraggableRef: o,
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  } = e, l = Y(() => ({
    canDragInteractiveElements: i,
    shouldRespectForcePress: s,
    isEnabled: a
  }), [i, a, s]), c = z((p) => {
    const m = o();
    return m || B(!1), bD(n, m, p);
  }, [n, o]), u = Y(() => ({
    uniqueId: t,
    descriptor: n,
    options: l,
    getDimension: c
  }), [n, c, l, t]), d = V(u), f = V(!0);
  We(() => (r.draggable.register(d.current), () => r.draggable.unregister(d.current)), [r.draggable]), We(() => {
    if (f.current) {
      f.current = !1;
      return;
    }
    const p = d.current;
    d.current = u, r.draggable.update(u, p);
  }, [u, r.draggable]);
}
var ml = b.createContext(null);
function fo(e) {
  const t = ft(e);
  return t || B(!1), t;
}
function vD(e) {
  e.preventDefault();
}
const wD = (e) => {
  const t = V(null), n = z((C = null) => {
    t.current = C;
  }, []), r = z(() => t.current, []), {
    contextId: o,
    dragHandleUsageInstructionsId: i,
    registry: s
  } = fo(fi), {
    type: a,
    droppableId: l
  } = fo(ml), c = Y(() => ({
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
    const C = Y(() => ({
      descriptor: c,
      registry: s,
      getDraggableRef: r,
      canDragInteractiveElements: m,
      shouldRespectForcePress: p,
      isEnabled: f
    }), [c, s, r, m, p, f]);
    yD(C);
  }
  const x = Y(() => f ? {
    tabIndex: 0,
    role: "button",
    "aria-describedby": i,
    "data-rfd-drag-handle-draggable-id": d,
    "data-rfd-drag-handle-context-id": o,
    draggable: !1,
    onDragStart: vD
  } : null, [o, i, d, f]), y = z((C) => {
    h.type === "DRAGGING" && h.dropping && C.propertyName === "transform" && (b.version.startsWith("16") || b.version.startsWith("17") ? w() : ws(w));
  }, [w, h]), v = Y(() => {
    const C = hD(h), P = h.type === "DRAGGING" && h.dropping ? y : void 0;
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
    draggableId: c.id,
    type: c.type,
    source: {
      index: c.index,
      droppableId: c.droppableId
    }
  }), [c.droppableId, c.id, c.index, c.type]);
  return b.createElement(b.Fragment, null, u(v, h.snapshot, S));
};
var xD = wD, sm = (e, t) => e === t, am = (e) => {
  const {
    combine: t,
    destination: n
  } = e;
  return n ? n.droppableId : t ? t.droppableId : null;
};
const SD = (e) => e.combine ? e.combine.draggableId : null, CD = (e) => e.at && e.at.type === "COMBINE" ? e.at.combine.draggableId : null;
function ED() {
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
    if (ar(o)) {
      if (o.critical.draggable.id !== i.draggableId)
        return null;
      const s = o.current.client.offset, a = o.dimensions.draggables[i.draggableId], l = Ge(o.impact), c = CD(o.impact), u = o.forceShouldAnimate;
      return n(e(s.x, s.y), o.movementMode, a, i.isClone, l, c, u);
    }
    if (o.phase === "DROP_ANIMATING") {
      const s = o.completed;
      if (s.result.draggableId !== i.draggableId)
        return null;
      const a = i.isClone, l = o.dimensions.draggables[i.draggableId], c = s.result, u = c.mode, d = am(c), f = SD(c), m = {
        duration: o.dropDuration,
        curve: sl.drop,
        moveTo: o.newHomeClientOffset,
        opacity: f ? ir.opacity.drop : null,
        scale: f ? ir.scale.drop : null
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
function lm(e = null) {
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
const PD = {
  mapped: {
    type: "SECONDARY",
    offset: fe,
    combineTargetFor: null,
    shouldAnimateDisplacement: !0,
    snapshot: lm(null)
  }
};
function DD() {
  const e = de((s, a) => ({
    x: s,
    y: a
  })), t = de(lm), n = de((s, a = null, l) => ({
    mapped: {
      type: "SECONDARY",
      offset: s,
      combineTargetFor: a,
      shouldAnimateDisplacement: l,
      snapshot: t(a)
    }
  })), r = (s) => s ? n(fe, s, !0) : null, o = (s, a, l, c) => {
    const u = l.displaced.visible[s], d = !!(c.inVirtualList && c.effected[s]), f = li(l), p = f && f.draggableId === s ? a : null;
    if (!u) {
      if (!d)
        return r(p);
      if (l.displaced.invisible[s])
        return null;
      const h = $n(c.displacedBy.point), w = e(h.x, h.y);
      return n(w, p, !0);
    }
    if (d)
      return r(p);
    const m = l.displacedBy.point, g = e(m.x, m.y);
    return n(g, p, u.shouldAnimate);
  };
  return (s, a) => {
    if (ar(s))
      return s.critical.draggable.id === a.draggableId ? null : o(a.draggableId, s.critical.draggable.id, s.impact, s.afterCritical);
    if (s.phase === "DROP_ANIMATING") {
      const l = s.completed;
      return l.result.draggableId === a.draggableId ? null : o(a.draggableId, l.result.draggableId, l.impact, l.afterCritical);
    }
    return null;
  };
}
const RD = () => {
  const e = ED(), t = DD();
  return (r, o) => e(r, o) || t(r, o) || PD;
}, ID = {
  dropAnimationFinished: Bp
}, AD = up(RD, ID, null, {
  context: dl,
  areStatePropsEqual: sm
})(xD);
var OD = AD;
function cm(e) {
  return fo(ml).isUsingCloneFor === e.draggableId && !e.isClone ? null : b.createElement(OD, e);
}
function $D(e) {
  const t = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0, n = !!e.disableInteractiveElementBlocking, r = !!e.shouldRespectForcePress;
  return b.createElement(cm, Lt({}, e, {
    isClone: !1,
    isEnabled: t,
    canDragInteractiveElements: n,
    shouldRespectForcePress: r
  }));
}
const um = (e) => (t) => e === t, ND = um("scroll"), TD = um("auto"), hu = (e, t) => t(e.overflowX) || t(e.overflowY), LD = (e) => {
  const t = window.getComputedStyle(e), n = {
    overflowX: t.overflowX,
    overflowY: t.overflowY
  };
  return hu(n, ND) || hu(n, TD);
}, MD = () => !1, dm = (e) => e == null ? null : e === document.body ? MD() ? e : null : e === document.documentElement ? null : LD(e) ? e : dm(e.parentElement);
var kD = dm, vs = (e) => ({
  x: e.scrollLeft,
  y: e.scrollTop
});
const fm = (e) => e ? window.getComputedStyle(e).position === "fixed" ? !0 : fm(e.parentElement) : !1;
var _D = (e) => {
  const t = kD(e), n = fm(e);
  return {
    closestScrollable: t,
    isFixedOnPage: n
  };
}, FD = ({
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
  })(), c = o === "vertical" ? Za : Sp, u = Pn({
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
const BD = (e, t) => {
  const n = pp(e);
  if (!t || e !== t)
    return n;
  const r = n.paddingBox.top - t.scrollTop, o = n.paddingBox.left - t.scrollLeft, i = r + t.scrollHeight, s = o + t.scrollWidth, l = Ya({
    top: r,
    right: s,
    bottom: i,
    left: o
  }, n.border);
  return Xa({
    borderBox: l,
    margin: n.margin,
    border: n.border,
    padding: n.padding
  });
};
var jD = ({
  ref: e,
  descriptor: t,
  env: n,
  windowScroll: r,
  direction: o,
  isDropDisabled: i,
  isCombineEnabled: s,
  shouldClipSubject: a
}) => {
  const l = n.closestScrollable, c = BD(e, l), u = so(c, r), d = (() => {
    if (!l)
      return null;
    const p = pp(l), m = {
      scrollHeight: l.scrollHeight,
      scrollWidth: l.scrollWidth
    };
    return {
      client: p,
      page: so(p, r),
      scroll: vs(l),
      scrollSize: m,
      shouldClipSubject: a
    };
  })();
  return FD({
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
const VD = {
  passive: !1
}, zD = {
  passive: !0
};
var bu = (e) => e.shouldPublishImmediately ? VD : zD;
const $r = (e) => e && e.env.closestScrollable || null;
function GD(e) {
  const t = V(null), n = fo(fi), r = fl("droppable"), {
    registry: o,
    marshal: i
  } = n, s = Zp(e), a = Y(() => ({
    id: e.droppableId,
    type: e.type,
    mode: e.mode
  }), [e.droppableId, e.mode, e.type]), l = V(a), c = Y(() => de((v, S) => {
    t.current || B(!1);
    const C = {
      x: v,
      y: S
    };
    i.updateDroppableScroll(a.id, C);
  }), [a.id, i]), u = z(() => {
    const v = t.current;
    return !v || !v.env.closestScrollable ? fe : vs(v.env.closestScrollable);
  }, []), d = z(() => {
    const v = u();
    c(v.x, v.y);
  }, [u, c]), f = Y(() => tr(d), [d]), p = z(() => {
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
    const E = _D(P), $ = {
      ref: P,
      descriptor: a,
      env: E,
      scrollOptions: S
    };
    t.current = $;
    const N = jD({
      ref: P,
      descriptor: a,
      env: E,
      windowScroll: v,
      direction: C.direction,
      isDropDisabled: C.isDropDisabled,
      isCombineEnabled: C.isCombineEnabled,
      shouldClipSubject: !C.ignoreContainerClipping
    }), T = E.closestScrollable;
    return T && (T.setAttribute(du.contextId, n.contextId), T.addEventListener("scroll", p, bu($.scrollOptions))), N;
  }, [n.contextId, a, p, s]), g = z(() => {
    const v = t.current, S = $r(v);
    return v && S || B(!1), vs(S);
  }, []), h = z(() => {
    const v = t.current;
    v || B(!1);
    const S = $r(v);
    t.current = null, S && (f.cancel(), S.removeAttribute(du.contextId), S.removeEventListener("scroll", p, bu(v.scrollOptions)));
  }, [p, f]), w = z((v) => {
    const S = t.current;
    S || B(!1);
    const C = $r(S);
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
  We(() => (l.current = y.descriptor, o.droppable.register(y), () => {
    t.current && h(), o.droppable.unregister(y);
  }), [x, a, h, y, i, o.droppable]), We(() => {
    t.current && i.updateDroppableIsEnabled(l.current.id, !e.isDropDisabled);
  }, [e.isDropDisabled, i]), We(() => {
    t.current && i.updateDroppableIsCombineEnabled(l.current.id, e.isCombineEnabled);
  }, [e.isCombineEnabled, i]);
}
function Ui() {
}
const yu = {
  width: 0,
  height: 0,
  margin: TC
}, WD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => e || n === "close" ? yu : {
  height: t.client.borderBox.height,
  width: t.client.borderBox.width,
  margin: t.client.margin
}, HD = ({
  isAnimatingOpenOnMount: e,
  placeholder: t,
  animate: n
}) => {
  const r = WD({
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
}, UD = (e) => {
  const t = V(null), n = z(() => {
    t.current && (clearTimeout(t.current), t.current = null);
  }, []), {
    animate: r,
    onTransitionEnd: o,
    onClose: i,
    contextId: s
  } = e, [a, l] = U(e.animate === "open");
  G(() => a ? r !== "open" ? (n(), l(!1), Ui) : t.current ? Ui : (t.current = setTimeout(() => {
    t.current = null, l(!1);
  }), n) : Ui, [r, a, n]);
  const c = z((d) => {
    d.propertyName === "height" && (o(), r === "close" && i());
  }, [r, i, o]), u = HD({
    isAnimatingOpenOnMount: a,
    animate: e.animate,
    placeholder: e.placeholder
  });
  return b.createElement(e.placeholder.tagName, {
    style: u,
    "data-rfd-placeholder-context-id": s,
    onTransitionEnd: c,
    ref: e.innerRef
  });
};
var qD = b.memo(UD);
class KD extends b.PureComponent {
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
const YD = (e) => {
  const t = ft(fi);
  t || B(!1);
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
  } = e, x = z(() => o.current, []), y = z((T = null) => {
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
  GD({
    droppableId: a,
    type: l,
    mode: c,
    direction: u,
    isDropDisabled: f,
    isCombineEnabled: p,
    ignoreContainerClipping: d,
    getDroppableRef: x
  });
  const C = Y(() => b.createElement(KD, {
    on: e.placeholder,
    shouldAnimate: e.shouldAnimatePlaceholder
  }, ({
    onClose: T,
    data: M,
    animate: k
  }) => b.createElement(qD, {
    placeholder: M,
    onClose: T,
    innerRef: v,
    animate: k,
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
    type: l,
    isUsingCloneFor: E
  }), [a, E, l]);
  function N() {
    if (!g)
      return null;
    const {
      dragging: T,
      render: M
    } = g, k = b.createElement(cm, {
      draggableId: T.draggableId,
      index: T.source.index,
      isClone: !0,
      isEnabled: !0,
      shouldRespectForcePress: !1,
      canDragInteractiveElements: !0
    }, (A, L) => M(A, L, T));
    return Su.createPortal(k, w());
  }
  return b.createElement(ml.Provider, {
    value: $
  }, s(P, m), N());
};
var XD = YD;
function JD() {
  return document.body || B(!1), document.body;
}
const vu = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: !1,
  isCombineEnabled: !1,
  ignoreContainerClipping: !1,
  renderClone: null,
  getContainerForClone: JD
}, pm = (e) => {
  let t = {
    ...e
  }, n;
  for (n in vu)
    e[n] === void 0 && (t = {
      ...t,
      [n]: vu[n]
    });
  return t;
}, qi = (e, t) => e === t.droppable.type, wu = (e, t) => t.draggables[e.draggable.id], QD = () => {
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
    const a = pm(s), l = a.droppableId, c = a.type, u = !a.isDropDisabled, d = a.renderClone;
    if (ar(i)) {
      const f = i.critical;
      if (!qi(c, f))
        return t;
      const p = wu(f, i.dimensions), m = Ge(i.impact) === l;
      return r(l, u, m, m, p, d);
    }
    if (i.phase === "DROP_ANIMATING") {
      const f = i.completed;
      if (!qi(c, f.critical))
        return t;
      const p = wu(f.critical, i.dimensions);
      return r(l, u, am(f.result) === l, Ge(f.impact) === l, p, d);
    }
    if (i.phase === "IDLE" && i.completed && !i.shouldFlush) {
      const f = i.completed;
      if (!qi(c, f.critical))
        return t;
      const p = Ge(f.impact) === l, m = !!(f.impact.at && f.impact.at.type === "COMBINE"), g = f.critical.droppable.id === l;
      return p ? m ? e : t : g ? e : t;
    }
    return t;
  };
}, ZD = {
  updateViewportMaxScroll: U1
}, eR = up(QD, ZD, (e, t, n) => ({
  ...pm(n),
  ...e,
  ...t
}), {
  context: dl,
  areStatePropsEqual: sm
})(XD);
var tR = eR;
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
function nR() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = mm(e)) && (r && (r += " "), r += t);
  return r;
}
const rR = "_item_1o9ja_1", oR = "_itemDragging_1o9ja_12", iR = "_symbol_1o9ja_16", sR = "_dragHandle_1o9ja_22", Nr = {
  item: rR,
  itemDragging: oR,
  symbol: iR,
  dragHandle: sR
};
function aR({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Wt(), i = Ie(_f), s = (l) => {
    if (!t || !l.destination)
      return;
    const c = Array.from(i), [u] = c.splice(l.source.index, 1);
    c.splice(l.destination.index, 0, u), n({ ...t, filterDictionaries: c }), r(!0);
  }, a = i.map((l, c) => /* @__PURE__ */ _.jsx($D, { index: c, draggableId: l.ifcClassification.location, children: (u, d) => /* @__PURE__ */ _.jsxs(
    "div",
    {
      className: nR(Nr.item, { [Nr.itemDragging]: d.isDragging }),
      ref: u.innerRef,
      ...u.draggableProps,
      children: [
        /* @__PURE__ */ _.jsx("div", { ...u.dragHandleProps, className: Nr.dragHandle, children: /* @__PURE__ */ _.jsx(Ux, { style: { width: D(18), height: D(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ _.jsx(Qe, { className: Nr.uri, children: l.ifcClassification.location })
      ]
    }
  ) }, l.ifcClassification.location));
  return /* @__PURE__ */ _.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ _.jsxs(oe.Control, { children: [
      /* @__PURE__ */ _.jsx(On, { order: 5, children: o("Sort filter dictionaries") }),
      /* @__PURE__ */ _.jsx(Qe, { size: "xs", c: "dimmed", children: o("Sort filter dictionaries help text") })
    ] }),
    /* @__PURE__ */ _.jsx(oe.Panel, { children: /* @__PURE__ */ _.jsx(uD, { onDragEnd: s, children: /* @__PURE__ */ _.jsx(tR, { droppableId: "dnd-list", direction: "vertical", children: (l) => /* @__PURE__ */ _.jsxs("div", { ...l.droppableProps, ref: l.innerRef, children: [
      a,
      l.placeholder
    ] }) }) }) })
  ] }, e);
}
function lR({ settings: e, setSettings: t, setUnsavedChanges: n }) {
  const { t: r, i18n: o } = Wt(), i = [
    { value: "en-GB", label: "English" },
    { value: "nl-NL", label: "Nederlands" }
  ], s = (a) => {
    !a || !e || (o.changeLanguage(a), t({ ...e, language: a }), n(!0));
  };
  return /* @__PURE__ */ _.jsx(
    To,
    {
      label: r("Language"),
      data: i,
      value: o.language,
      onChange: s,
      placeholder: r("Select language")
    }
  );
}
function cR({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Wt(), i = Ba(), s = Ie(Bo);
  return G(() => {
    s && (i(Px(s)), i(
      no({
        bsddApiEnvironment: s,
        includeTestDictionaries: (t == null ? void 0 : t.includeTestDictionaries) || !1
      })
    ));
  }, [i, s, t == null ? void 0 : t.includeTestDictionaries]), /* @__PURE__ */ _.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ _.jsxs(oe.Control, { children: [
      /* @__PURE__ */ _.jsx(On, { order: 5, children: o("General settings") }),
      /* @__PURE__ */ _.jsx(Qe, { size: "xs", c: "dimmed", children: o("General settings help text") })
    ] }),
    /* @__PURE__ */ _.jsxs(oe.Panel, { children: [
      /* @__PURE__ */ _.jsx(lR, { settings: t, setSettings: n, setUnsavedChanges: r }),
      " ",
      /* @__PURE__ */ _.jsx(Ca, { h: "xs" }),
      /* @__PURE__ */ _.jsx(
        Ao,
        {
          label: o("ShowPreview"),
          checked: (t == null ? void 0 : t.includeTestDictionaries) || !1,
          type: "checkbox",
          onChange: (a) => {
            const l = a.currentTarget.checked;
            s && i(no({ bsddApiEnvironment: s, includeTestDictionaries: l })), n({ ...t, includeTestDictionaries: l }), r(!0);
          }
        }
      )
    ] })
  ] }, e);
}
function uR({ id: e, settings: t, setSettings: n, setUnsavedChanges: r }) {
  const { t: o } = Wt(), { mainDictionary: i, filterDictionaries: s } = t || { mainDictionary: null, filterDictionaries: [] }, a = i ? [i, ...s] : s, l = (c, u) => {
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
  return /* @__PURE__ */ _.jsxs(oe.Item, { value: e.toString(), children: [
    /* @__PURE__ */ _.jsxs(oe.Control, { children: [
      /* @__PURE__ */ _.jsx(On, { order: 5, children: o("Parameter mapping") }),
      /* @__PURE__ */ _.jsx(Qe, { size: "xs", c: "dimmed", children: o("Parameter mapping help text") })
    ] }),
    /* @__PURE__ */ _.jsx(oe.Panel, { children: a.map((c) => /* @__PURE__ */ _.jsxs("div", { style: { marginBottom: "1em" }, children: [
      /* @__PURE__ */ _.jsx(
        Ia,
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
function dR() {
  const e = Ba(), t = Ie(_a), n = Ie(_f), r = Ie(gx), o = Ie(mx), i = Ie(hx), [s, a] = U(), [l, c] = U(!1), [u, d] = U(!0);
  G(() => {
    a({
      bsddApiEnvironment: o,
      mainDictionary: t,
      filterDictionaries: n,
      language: r,
      includeTestDictionaries: i
    });
  }, [t, n, o, r, i]);
  const f = () => {
    var m;
    s && (e(ka(s)), (m = window == null ? void 0 : window.bsddBridge) == null || m.saveSettings(JSON.stringify(s)), c(!1));
  }, p = () => {
    c(!1);
  };
  return /* @__PURE__ */ _.jsxs(lt.Panel, { value: "settings", children: [
    /* @__PURE__ */ _.jsxs(oe, { defaultValue: ["2"], multiple: !0, children: [
      /* @__PURE__ */ _.jsx(
        cR,
        {
          id: 1,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c
        }
      ),
      /* @__PURE__ */ _.jsx(
        oS,
        {
          id: 2,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c,
          setIsLoading: d
        }
      ),
      /* @__PURE__ */ _.jsx(
        uR,
        {
          id: 3,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c
        }
      ),
      /* @__PURE__ */ _.jsx(
        aR,
        {
          id: 4,
          settings: s,
          setSettings: a,
          setUnsavedChanges: c
        }
      )
    ] }),
    /* @__PURE__ */ _.jsxs(wn, { my: "sm", justify: "center", children: [
      /* @__PURE__ */ _.jsx(
        Kn,
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
      /* @__PURE__ */ _.jsx(Kn, { fullWidth: !0, variant: "light", onClick: p, disabled: !l, children: "Cancel" })
    ] })
  ] });
}
const fR = (e) => async (t, n) => {
  const r = n(), o = Ac(r, e.mainDictionary), i = e.filterDictionaries.map((a) => Ac(r, a)).filter((a) => a !== null), s = {
    ...e,
    mainDictionary: o,
    filterDictionaries: i
  };
  t(ka(s));
};
function pR() {
  const e = Ba(), { t } = Wt(), n = Ie(Cx), [r, o] = U(null), i = (s) => {
    o(s);
  };
  return G(() => {
    n && r && (e(fR(r)), o(null));
  }, [n, r, e]), G(() => {
  }, [e]), G(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const a = await window.bsddBridge.loadSettings(), l = JSON.parse(a);
        console.log("initial loadSettings", l), i(l);
      }
    })();
  }, []), window.updateSelection = (s) => {
    console.log("updateSelection", s), e(Tx(s));
  }, window.updateSettings = (s) => {
    console.log("updateSettings", s), i(s);
  }, /* @__PURE__ */ _.jsx(ba, { size: "40rem", children: /* @__PURE__ */ _.jsxs(lt, { defaultValue: "link", children: [
    /* @__PURE__ */ _.jsxs(lt.List, { grow: !0, children: [
      /* @__PURE__ */ _.jsx(lt.Tab, { value: "link", children: t("Link") }),
      /* @__PURE__ */ _.jsx(lt.Tab, { value: "settings", children: t("Settings") })
    ] }),
    /* @__PURE__ */ _.jsx(rS, {}),
    /* @__PURE__ */ _.jsx(dR, {})
  ] }) });
}
function mR() {
  return /* @__PURE__ */ _.jsx(Qu, { theme: n0, children: /* @__PURE__ */ _.jsx(pR, {}) });
}
const gR = j0({
  reducer: {
    settings: bx,
    ifcData: Lx,
    bsdd: Dx
  }
});
Ki.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ _.jsx(b.StrictMode, { children: /* @__PURE__ */ _.jsx(ag, { store: gR, children: /* @__PURE__ */ _.jsx(mR, {}) }) })
);
