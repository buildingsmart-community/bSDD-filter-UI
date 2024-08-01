var Xd = Object.defineProperty;
var Zd = (r, e, t) => e in r ? Xd(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => (Zd(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as ae from "react";
import jo, { createContext as Nr, useContext as ar, useState as X, useRef as ue, useEffect as W, Fragment as pl, useMemo as ho, useCallback as ve, useLayoutEffect as ds, useId as gl, forwardRef as Ce, cloneElement as $o, Children as Pi, createElement as Oi } from "react";
import * as eh from "react-dom";
import ml, { flushSync as th, createPortal as rh } from "react-dom";
function nh(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var yl = { exports: {} }, Ko = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh = jo, ih = Symbol.for("react.element"), sh = Symbol.for("react.fragment"), ah = Object.prototype.hasOwnProperty, ch = oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function vl(r, e, t) {
  var n, o = {}, i = null, s = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (s = e.ref);
  for (n in e)
    ah.call(e, n) && !lh.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: ih, type: r, key: i, ref: s, props: o, _owner: ch.current };
}
Ko.Fragment = sh;
Ko.jsx = vl;
Ko.jsxs = vl;
yl.exports = Ko;
var y = yl.exports, xi = {}, Pa = ml;
xi.createRoot = Pa.createRoot, xi.hydrateRoot = Pa.hydrateRoot;
var Cl = { exports: {} }, bl = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn = jo;
function uh(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var dh = typeof Object.is == "function" ? Object.is : uh, hh = Kn.useSyncExternalStore, fh = Kn.useRef, ph = Kn.useEffect, gh = Kn.useMemo, mh = Kn.useDebugValue;
bl.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var i = fh(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else
    s = i.current;
  i = gh(function() {
    function c(f) {
      if (!l) {
        if (l = !0, u = f, f = n(f), o !== void 0 && s.hasValue) {
          var p = s.value;
          if (o(p, f))
            return d = p;
        }
        return d = f;
      }
      if (p = d, dh(u, f))
        return p;
      var g = n(f);
      return o !== void 0 && o(p, g) ? p : (u = f, d = g);
    }
    var l = !1, u, d, h = t === void 0 ? null : t;
    return [function() {
      return c(e());
    }, h === null ? void 0 : function() {
      return c(h());
    }];
  }, [e, t, n, o]);
  var a = hh(r, i[0], i[1]);
  return ph(function() {
    s.hasValue = !0, s.value = a;
  }, [a]), mh(a), a;
};
Cl.exports = bl;
var yh = Cl.exports, tt = (
  // prettier-ignore
  // @ts-ignore
  "default" in ae ? ae.default : ae
), Oa = Symbol.for("react-redux-context"), xa = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function vh() {
  if (!tt.createContext)
    return {};
  const r = xa[Oa] ?? (xa[Oa] = /* @__PURE__ */ new Map());
  let e = r.get(tt.createContext);
  return e || (e = tt.createContext(
    null
  ), r.set(tt.createContext, e)), e;
}
var rr = /* @__PURE__ */ vh(), Ch = () => {
  throw new Error("uSES not initialized!");
};
function hs(r = rr) {
  return function() {
    return tt.useContext(r);
  };
}
var wl = /* @__PURE__ */ hs(), El = Ch, bh = (r) => {
  El = r;
}, wh = (r, e) => r === e;
function Eh(r = rr) {
  const e = r === rr ? wl : hs(r), t = (n, o = {}) => {
    const { equalityFn: i = wh, devModeChecks: s = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: a,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = e();
    tt.useRef(!0);
    const h = tt.useCallback(
      {
        [n.name](p) {
          return n(p);
        }
      }[n.name],
      [n, u, s.stabilityCheck]
    ), f = El(
      c.addNestedSub,
      a.getState,
      l || a.getState,
      h,
      i
    );
    return tt.useDebugValue(f), f;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Pn = /* @__PURE__ */ Eh();
function Sh(r) {
  r();
}
function Th() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      Sh(() => {
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
var Ma = {
  notify() {
  },
  get: () => []
};
function _h(r, e) {
  let t, n = Ma, o = 0, i = !1;
  function s(g) {
    u();
    const m = n.subscribe(g);
    let b = !1;
    return () => {
      b || (b = !0, m(), d());
    };
  }
  function a() {
    n.notify();
  }
  function c() {
    p.onStateChange && p.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, t || (t = e ? e.addNestedSub(c) : r.subscribe(c), n = Th());
  }
  function d() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = Ma);
  }
  function h() {
    i || (i = !0, u());
  }
  function f() {
    i && (i = !1, d());
  }
  const p = {
    addNestedSub: s,
    notifyNestedSubs: a,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: h,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return p;
}
var Ih = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ah = typeof navigator < "u" && navigator.product === "ReactNative", Rh = Ih || Ah ? tt.useLayoutEffect : tt.useEffect;
function kh({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const s = tt.useMemo(() => {
    const l = _h(r);
    return {
      store: r,
      subscription: l,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [r, n, o, i]), a = tt.useMemo(() => r.getState(), [r]);
  Rh(() => {
    const { subscription: l } = s;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), a !== r.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [s, a]);
  const c = e || rr;
  return /* @__PURE__ */ tt.createElement(c.Provider, { value: s }, t);
}
var Nh = kh;
function Sl(r = rr) {
  const e = r === rr ? wl : (
    // @ts-ignore
    hs(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Ph = /* @__PURE__ */ Sl();
function Oh(r = rr) {
  const e = r === rr ? Ph : Sl(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var xh = /* @__PURE__ */ Oh();
bh(yh.useSyncExternalStoreWithSelector);
const Mh = {
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
let Lh = class Mi {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || Mh, this.options = t, this.debug = t.debug;
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
    return new Mi(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Mi(this.logger, e);
  }
};
var Rt = new Lh();
class qo {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const o = this.observers[n].get(t) || 0;
      this.observers[n].set(t, o + 1);
    }), this;
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((s) => {
      let [a, c] = s;
      for (let l = 0; l < c; l++)
        a(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((s) => {
      let [a, c] = s;
      for (let l = 0; l < c; l++)
        a.apply(a, [e, ...n]);
    });
  }
}
function pn() {
  let r, e;
  const t = new Promise((n, o) => {
    r = n, e = o;
  });
  return t.resolve = r, t.reject = e, t;
}
function La(r) {
  return r == null ? "" : "" + r;
}
function Dh(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
const Uh = /###/g;
function En(r, e, t) {
  function n(a) {
    return a && a.indexOf("###") > -1 ? a.replace(Uh, ".") : a;
  }
  function o() {
    return !r || typeof r == "string";
  }
  const i = typeof e != "string" ? e : e.split(".");
  let s = 0;
  for (; s < i.length - 1; ) {
    if (o())
      return {};
    const a = n(i[s]);
    !r[a] && t && (r[a] = new t()), Object.prototype.hasOwnProperty.call(r, a) ? r = r[a] : r = {}, ++s;
  }
  return o() ? {} : {
    obj: r,
    k: n(i[s])
  };
}
function Da(r, e, t) {
  const {
    obj: n,
    k: o
  } = En(r, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[o] = t;
    return;
  }
  let i = e[e.length - 1], s = e.slice(0, e.length - 1), a = En(r, s, Object);
  for (; a.obj === void 0 && s.length; )
    i = `${s[s.length - 1]}.${i}`, s = s.slice(0, s.length - 1), a = En(r, s, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = t;
}
function Hh(r, e, t, n) {
  const {
    obj: o,
    k: i
  } = En(r, e, Object);
  o[i] = o[i] || [], n && (o[i] = o[i].concat(t)), n || o[i].push(t);
}
function fo(r, e) {
  const {
    obj: t,
    k: n
  } = En(r, e);
  if (t)
    return t[n];
}
function Fh(r, e, t) {
  const n = fo(r, t);
  return n !== void 0 ? n : fo(e, t);
}
function Tl(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : Tl(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function Fr(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Bh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function jh(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => Bh[e]) : r;
}
class $h {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0)
      return t;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const Kh = [" ", ",", "?", "!", ";"], qh = new $h(20);
function zh(r, e, t) {
  e = e || "", t = t || "";
  const n = Kh.filter((s) => e.indexOf(s) < 0 && t.indexOf(s) < 0);
  if (n.length === 0)
    return !0;
  const o = qh.getRegExp(`(${n.map((s) => s === "?" ? "\\?" : s).join("|")})`);
  let i = !o.test(r);
  if (!i) {
    const s = r.indexOf(t);
    s > 0 && !o.test(r.substring(0, s)) && (i = !0);
  }
  return i;
}
function Li(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!r)
    return;
  if (r[e])
    return r[e];
  const n = e.split(t);
  let o = r;
  for (let i = 0; i < n.length; ) {
    if (!o || typeof o != "object")
      return;
    let s, a = "";
    for (let c = i; c < n.length; ++c)
      if (c !== i && (a += t), a += n[c], s = o[a], s !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof s) > -1 && c < n.length - 1)
          continue;
        i += c - i + 1;
        break;
      }
    o = s;
  }
  return o;
}
function po(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class Ua extends qo {
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
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, s = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, t], n && (Array.isArray(n) ? a.push(...n) : typeof n == "string" && i ? a.push(...n.split(i)) : a.push(n)));
    const c = fo(this.data, a);
    return !c && !t && !n && e.indexOf(".") > -1 && (e = a[0], t = a[1], n = a.slice(2).join(".")), c || !s || typeof n != "string" ? c : Li(this.data && this.data[e] && this.data[e][t], n, i);
  }
  addResource(e, t, n, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, t];
    n && (a = a.concat(s ? n.split(s) : n)), e.indexOf(".") > -1 && (a = e.split("."), o = t, t = a[1]), this.addNamespaces(t), Da(this.data, a, o), i.silent || this.emit("added", e, t, n, o);
  }
  addResources(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in n)
      (typeof n[i] == "string" || Array.isArray(n[i])) && this.addResource(e, t, i, n[i], {
        silent: !0
      });
    o.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, t];
    e.indexOf(".") > -1 && (a = e.split("."), o = n, n = t, t = a[1]), this.addNamespaces(t);
    let c = fo(this.data, a) || {};
    s.skipCopy || (n = JSON.parse(JSON.stringify(n))), o ? Tl(c, n, i) : c = {
      ...c,
      ...n
    }, Da(this.data, a, c), s.silent || this.emit("added", e, t, n);
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
var _l = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, e, t, n, o) {
    return r.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, t, n, o));
    }), e;
  }
};
const Ha = {};
class go extends qo {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Dh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Rt.create("translator");
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
    let i = t.ns || this.options.defaultNS || [];
    const s = n && e.indexOf(n) > -1, a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !zh(e, n, o);
    if (s && !a) {
      const c = e.match(this.interpolator.nestingRegexp);
      if (c && c.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const l = e.split(n);
      (n !== o || n === o && this.options.ns.indexOf(l[0]) > -1) && (i = l.shift()), e = l.join(o);
    }
    return typeof i == "string" && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, t, n) {
    if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = {
      ...t
    }), t || (t = {}), e == null)
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const o = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails, i = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], t), c = a[a.length - 1], l = t.lng || this.language, u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (u) {
        const w = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${w}${s}`,
          usedKey: s,
          exactUsedKey: s,
          usedLng: l,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(t)
        } : `${c}${w}${s}`;
      }
      return o ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: l,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(t)
      } : s;
    }
    const d = this.resolve(e, t);
    let h = d && d.res;
    const f = d && d.usedKey || s, p = d && d.exactUsedKey || s, g = Object.prototype.toString.apply(h), m = ["[object Number]", "[object Function]", "[object RegExp]"], b = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (C && h && (typeof h != "string" && typeof h != "boolean" && typeof h != "number") && m.indexOf(g) < 0 && !(typeof b == "string" && Array.isArray(h))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, h, {
          ...t,
          ns: a
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return o ? (d.res = w, d.usedParams = this.getUsedParamsDetails(t), d) : w;
      }
      if (i) {
        const w = Array.isArray(h), E = w ? [] : {}, T = w ? p : f;
        for (const A in h)
          if (Object.prototype.hasOwnProperty.call(h, A)) {
            const _ = `${T}${i}${A}`;
            E[A] = this.translate(_, {
              ...t,
              joinArrays: !1,
              ns: a
            }), E[A] === _ && (E[A] = h[A]);
          }
        h = E;
      }
    } else if (C && typeof b == "string" && Array.isArray(h))
      h = h.join(b), h && (h = this.extendTranslation(h, e, t, n));
    else {
      let w = !1, E = !1;
      const T = t.count !== void 0 && typeof t.count != "string", A = go.hasDefaultValue(t), _ = T ? this.pluralResolver.getSuffix(l, t.count, t) : "", L = t.ordinal && T ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", F = T && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), J = F && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${_}`] || t[`defaultValue${L}`] || t.defaultValue;
      !this.isValidLookup(h) && A && (w = !0, h = J), this.isValidLookup(h) || (E = !0, h = s);
      const se = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : h, $ = A && J !== h && this.options.updateMissing;
      if (E || w || $) {
        if (this.logger.log($ ? "updateKey" : "missingKey", l, c, s, $ ? J : h), i) {
          const D = this.resolve(s, {
            ...t,
            keySeparator: !1
          });
          D && D.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let oe = [];
        const U = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && U && U[0])
          for (let D = 0; D < U.length; D++)
            oe.push(U[D]);
        else
          this.options.saveMissingTo === "all" ? oe = this.languageUtils.toResolveHierarchy(t.lng || this.language) : oe.push(t.lng || this.language);
        const x = (D, q, V) => {
          const de = A && V !== h ? V : se;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(D, c, q, de, $, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(D, c, q, de, $, t), this.emit("missingKey", D, c, q, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && T ? oe.forEach((D) => {
          const q = this.pluralResolver.getSuffixes(D, t);
          F && t[`defaultValue${this.options.pluralSeparator}zero`] && q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && q.push(`${this.options.pluralSeparator}zero`), q.forEach((V) => {
            x([D], s + V, t[`defaultValue${V}`] || J);
          });
        }) : x(oe, s, J));
      }
      h = this.extendTranslation(h, e, t, d, n), E && h === s && this.options.appendNamespaceToMissingKey && (h = `${c}:${s}`), (E || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${s}` : s, w ? h : void 0) : h = this.options.parseMissingKeyHandler(h));
    }
    return o ? (d.res = h, d.usedParams = this.getUsedParamsDetails(t), d) : h;
  }
  extendTranslation(e, t, n, o, i) {
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
      const l = typeof e == "string" && (n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (l) {
        const h = e.match(this.interpolator.nestingRegexp);
        u = h && h.length;
      }
      let d = n.replace && typeof n.replace != "string" ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), e = this.interpolator.interpolate(e, d, n.lng || this.language, n), l) {
        const h = e.match(this.interpolator.nestingRegexp), f = h && h.length;
        u < f && (n.nest = !1);
      }
      !n.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (n.lng = o.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var h = arguments.length, f = new Array(h), p = 0; p < h; p++)
          f[p] = arguments[p];
        return i && i[0] === f[0] && !n.context ? (s.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : s.translate(...f, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const a = n.postProcess || this.options.postProcess, c = typeof a == "string" ? [a] : a;
    return e != null && c && c.length && n.applyPostProcessor !== !1 && (e = _l.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, i, s, a;
    return typeof e == "string" && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(n))
        return;
      const l = this.extractFromKey(c, t), u = l.key;
      o = u;
      let d = l.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const h = t.count !== void 0 && typeof t.count != "string", f = h && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), p = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      d.forEach((m) => {
        this.isValidLookup(n) || (a = m, !Ha[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Ha[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((b) => {
          if (this.isValidLookup(n))
            return;
          s = b;
          const C = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(C, u, b, m, t);
          else {
            let w;
            h && (w = this.pluralResolver.getSuffix(b, t.count, t));
            const E = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (C.push(u + w), t.ordinal && w.indexOf(T) === 0 && C.push(u + w.replace(T, this.options.pluralSeparator)), f && C.push(u + E)), p) {
              const A = `${u}${this.options.contextSeparator}${t.context}`;
              C.push(A), h && (C.push(A + w), t.ordinal && w.indexOf(T) === 0 && C.push(A + w.replace(T, this.options.pluralSeparator)), f && C.push(A + E));
            }
          }
          let v;
          for (; v = C.pop(); )
            this.isValidLookup(n) || (i = v, n = this.getResource(b, m, v, t));
        }));
      });
    }), {
      res: n,
      usedKey: o,
      exactUsedKey: i,
      usedLng: s,
      usedNS: a
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
      for (const i of t)
        delete o[i];
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
function fi(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class Fa {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Rt.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = po(e), !e || e.indexOf("-") < 0)
      return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = po(e), !e || e.indexOf("-") < 0)
      return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n = e.split("-");
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = fi(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = fi(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = fi(n[2].toLowerCase()))), n.join("-");
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
      t = this.options.supportedLngs.find((i) => {
        if (i === o)
          return i;
        if (!(i.indexOf("-") < 0 && o.indexOf("-") < 0) && (i.indexOf("-") > 0 && o.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === o || i.indexOf(o) === 0 && o.length > 1))
          return i;
      });
    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t;
  }
  getFallbackCodes(e, t) {
    if (!e)
      return [];
    if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Array.isArray(e))
      return e;
    if (!t)
      return e.default || [];
    let n = e[t];
    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], i = (s) => {
      s && (this.isSupportedCode(s) ? o.push(s) : this.logger.warn(`rejecting language code not found in supportedLngs: ${s}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), n.forEach((s) => {
      o.indexOf(s) < 0 && i(this.formatLanguageCode(s));
    }), o;
  }
}
let Gh = [{
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
}], Vh = {
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
const Wh = ["v1", "v2", "v3"], Yh = ["v4"], Ba = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Qh() {
  const r = {};
  return Gh.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: Vh[e.fc]
      };
    });
  }), r;
}
class Jh {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = Rt.create("pluralResolver"), (!this.options.compatibilityJSON || Yh.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Qh();
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(po(e === "dev" ? "en" : e), {
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, i) => Ba[o] - Ba[i]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    const i = () => this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString();
    return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? `_plural_${o.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
  }
  shouldUseIntlApi() {
    return !Wh.includes(this.options.compatibilityJSON);
  }
}
function ja(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Fh(r, e, t);
  return !i && o && typeof t == "string" && (i = Li(r, t, n), i === void 0 && (i = Li(e, t, n))), i;
}
class Xh {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Rt.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: o,
      prefix: i,
      prefixEscaped: s,
      suffix: a,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: h,
      nestingPrefixEscaped: f,
      nestingSuffix: p,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: b,
      alwaysFormat: C
    } = e.interpolation;
    this.escape = t !== void 0 ? t : jh, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Fr(i) : s || "{{", this.suffix = a ? Fr(a) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = h ? Fr(h) : f || Fr("$t("), this.nestingSuffix = p ? Fr(p) : g || Fr(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = C !== void 0 ? C : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => t && t.source === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, o) {
    let i, s, a;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(p) {
      return p.replace(/\$/g, "$$$$");
    }
    const u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const C = ja(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, n, {
          ...o,
          ...t,
          interpolationkey: p
        }) : C;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), b = g.join(this.formatSeparator).trim();
      return this.format(ja(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), b, n, {
        ...o,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const d = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, h = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => l(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? l(this.escape(p)) : l(p)
    }].forEach((p) => {
      for (a = 0; i = p.regex.exec(e); ) {
        const g = i[1].trim();
        if (s = u(g), s === void 0)
          if (typeof d == "function") {
            const b = d(e, i, o);
            s = typeof b == "string" ? b : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            s = "";
          else if (h) {
            s = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), s = "";
        else
          typeof s != "string" && !this.useRawValueToEscape && (s = La(s));
        const m = p.safeValue(s);
        if (e = e.replace(i[0], m), h ? (p.regex.lastIndex += s.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, i, s;
    function a(c, l) {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0)
        return c;
      const d = c.split(new RegExp(`${u}[ ]*{`));
      let h = `{${d[1]}`;
      c = d[0], h = this.interpolate(h, s);
      const f = h.match(/'/g), p = h.match(/"/g);
      (f && f.length % 2 === 0 && !p || p.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        s = JSON.parse(h), l && (s = {
          ...l,
          ...s
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, g), `${c}${u}${h}`;
      }
      return s.defaultValue && s.defaultValue.indexOf(this.prefix) > -1 && delete s.defaultValue, c;
    }
    for (; o = this.nestingRegexp.exec(e); ) {
      let c = [];
      s = {
        ...n
      }, s = s.replace && typeof s.replace != "string" ? s.replace : s, s.applyPostProcessor = !1, delete s.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((d) => d.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (i = t(a.call(this, o[1].trim(), s), s), i && o[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = La(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), i = ""), l && (i = c.reduce((u, d) => this.format(u, d, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function Zh(r) {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.indexOf("(") > -1) {
    const n = r.split("(");
    e = n[0].toLowerCase().trim();
    const o = n[1].substring(0, n[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? t.currency || (t.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? t.range || (t.range = o.trim()) : o.split(";").forEach((s) => {
      if (s) {
        const [a, ...c] = s.split(":"), l = c.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        t[u] || (t[u] = l), l === "false" && (t[u] = !1), l === "true" && (t[u] = !0), isNaN(l) || (t[u] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function Br(r) {
  const e = {};
  return function(n, o, i) {
    const s = o + JSON.stringify(i);
    let a = e[s];
    return a || (a = r(po(o), i), e[s] = a), a(n);
  };
}
class ef {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Rt.create("formatter"), this.options = e, this.formats = {
      number: Br((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (i) => o.format(i);
      }),
      currency: Br((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: Br((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (i) => o.format(i);
      }),
      relativetime: Br((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (i) => o.format(i, n.range || "day");
      }),
      list: Br((t, n) => {
        const o = new Intl.ListFormat(t, {
          ...n
        });
        return (i) => o.format(i);
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
    this.formats[e.toLowerCase().trim()] = Br(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((a, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = Zh(c);
      if (this.formats[l]) {
        let d = a;
        try {
          const h = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, f = h.locale || h.lng || o.locale || o.lng || n;
          d = this.formats[l](a, f, {
            ...u,
            ...o,
            ...h
          });
        } catch (h) {
          this.logger.warn(h);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return a;
    }, e);
  }
}
function tf(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class rf extends qo {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = Rt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
  }
  queueLoad(e, t, n, o) {
    const i = {}, s = {}, a = {}, c = {};
    return e.forEach((l) => {
      let u = !0;
      t.forEach((d) => {
        const h = `${l}|${d}`;
        !n.reload && this.store.hasResourceBundle(l, d) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? s[h] === void 0 && (s[h] = !0) : (this.state[h] = 1, u = !1, s[h] === void 0 && (s[h] = !0), i[h] === void 0 && (i[h] = !0), c[d] === void 0 && (c[d] = !0)));
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
  loaded(e, t, n) {
    const o = e.split("|"), i = o[0], s = o[1];
    t && this.emit("failedLoading", i, s, t), n && this.store.addResourceBundle(i, s, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2;
    const a = {};
    this.queue.forEach((c) => {
      Hh(c.loaded, [i], s), tf(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        a[l] || (a[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((d) => {
          a[l][d] === void 0 && (a[l][d] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, s = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
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
          this.read.call(this, e, t, n, o + 1, i * 2, s);
        }, i);
        return;
      }
      s(l, u);
    }, c = this.backend[n].bind(this.backend);
    if (c.length === 2) {
      try {
        const l = c(e, t);
        l && typeof l.then == "function" ? l.then((u) => a(null, u)).catch(a) : a(null, l);
      } catch (l) {
        a(l);
      }
      return;
    }
    return c(e, t, a);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const i = this.queueLoad(e, t, n, o);
    if (!i.toLoad.length)
      return i.pending.length || o(), null;
    i.toLoad.forEach((s) => {
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
    const n = e.split("|"), o = n[0], i = n[1];
    this.read(o, i, "read", void 0, void 0, (s, a) => {
      s && this.logger.warn(`${t}loading namespace ${i} for language ${o} failed`, s), !s && a && this.logger.log(`${t}loaded namespace ${i} for language ${o}`, a), this.loaded(e, s, a);
    });
  }
  saveMissing(e, t, n, o, i) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend && this.backend.create) {
        const c = {
          ...s,
          isUpdate: i
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let u;
            l.length === 5 ? u = l(e, t, n, o, c) : u = l(e, t, n, o), u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          l(e, t, n, o, a, c);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, o);
    }
  }
}
function $a() {
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
      format: (r) => r,
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
function Ka(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function eo() {
}
function nf(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class On extends qo {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ka(e), this.services = {}, this.logger = Rt, this.modules = {
      external: []
    }, nf(this), t && !this.isInitialized && !e.isClone) {
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
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const o = $a();
    this.options = {
      ...o,
      ...this.options,
      ...Ka(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? Rt.init(i(this.modules.logger), this.options) : Rt.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = ef);
      const d = new Fa(this.options);
      this.store = new Ua(this.options.resources, this.options);
      const h = this.services;
      h.logger = Rt, h.resourceStore = this.store, h.languageUtils = d, h.pluralResolver = new Jh(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (h.formatter = i(u), h.formatter.init(h, this.options), this.options.interpolation.format = h.formatter.format.bind(h.formatter)), h.interpolator = new Xh(this.options), h.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, h.backendConnector = new rf(i(this.modules.backend), h.resourceStore, h, this.options), h.backendConnector.on("*", function(f) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.languageDetector && (h.languageDetector = i(this.modules.languageDetector), h.languageDetector.init && h.languageDetector.init(h, this.options.detection, this.options)), this.modules.i18nFormat && (h.i18nFormat = i(this.modules.i18nFormat), h.i18nFormat.init && h.i18nFormat.init(this)), this.translator = new go(this.services, this.options), this.translator.on("*", function(f) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = eo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments), e;
      };
    });
    const c = pn(), l = () => {
      const u = (d, h) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(h), n(d, h);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : eo;
    const o = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return n();
      const i = [], s = (a) => {
        if (!a || a === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((l) => {
          l !== "cimode" && i.indexOf(l) < 0 && i.push(l);
        });
      };
      o ? s(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => s(c)), this.options.preload && this.options.preload.forEach((a) => s(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(a);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const o = pn();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = eo), this.services.backendConnector.reload(e, t, (i) => {
      o.resolve(), n(i);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && _l.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    const o = pn();
    this.emit("languageChanging", e);
    const i = (c) => {
      this.language = c, this.languages = this.services.languageUtils.toResolveHierarchy(c), this.resolvedLanguage = void 0, this.setResolvedLanguage(c);
    }, s = (c, l) => {
      l ? (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return n.t(...arguments);
      }), t && t(c, function() {
        return n.t(...arguments);
      });
    }, a = (c) => {
      !e && !c && this.services.languageDetector && (c = []);
      const l = typeof c == "string" ? c : this.services.languageUtils.getBestMatchFromCodes(c);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (u) => {
        s(u, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), o;
  }
  getFixedT(e, t, n) {
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
      c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix = c.keyPrefix || n || i.keyPrefix;
      const h = o.options.keySeparator || ".";
      let f;
      return c.keyPrefix && Array.isArray(s) ? f = s.map((p) => `${c.keyPrefix}${h}${p}`) : f = c.keyPrefix ? `${c.keyPrefix}${h}${s}` : s, o.t(f, c);
    };
    return typeof e == "string" ? i.lng = e : i.lngs = e, i.ns = t, i.keyPrefix = n, i;
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
    const n = t.lng || this.resolvedLanguage || this.languages[0], o = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode")
      return !0;
    const s = (a, c) => {
      const l = this.services.backendConnector.state[`${a}|${c}`];
      return l === -1 || l === 2;
    };
    if (t.precheck) {
      const a = t.precheck(this, s);
      if (a !== void 0)
        return a;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || s(n, e) && (!o || s(i, e)));
  }
  loadNamespaces(e, t) {
    const n = pn();
    return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach((o) => {
      this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
    }), this.loadResources((o) => {
      n.resolve(), t && t(o);
    }), n) : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = pn();
    typeof e == "string" && (e = [e]);
    const o = this.options.preload || [], i = e.filter((s) => o.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((s) => {
      n.resolve(), t && t(s);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new Fa($a());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new On(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : eo;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new On(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, n && (i.store = new Ua(this.store.data, o), i.services.resourceStore = i.store), i.translator = new go(i.services, o), i.translator.on("*", function(a) {
      for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++)
        l[u - 1] = arguments[u];
      i.emit(a, ...l);
    }), i.init(o, t), i.translator.options = o, i.translator.backendConnector.services.utils = {
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
const xe = On.createInstance();
xe.createInstance = On.createInstance;
xe.createInstance;
xe.dir;
xe.init;
xe.loadResources;
xe.reloadResources;
xe.use;
xe.changeLanguage;
xe.getFixedT;
xe.t;
xe.exists;
xe.setDefaultNamespace;
xe.hasLoadedNamespace;
xe.loadNamespaces;
xe.loadLanguages;
function of() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const qa = {};
function Di() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && qa[e[0]] || (typeof e[0] == "string" && (qa[e[0]] = /* @__PURE__ */ new Date()), of(...e));
}
const Il = (r, e) => () => {
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
function za(r, e, t) {
  r.loadNamespaces(e, Il(r, t));
}
function Ga(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, Il(r, n));
}
function sf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = e.languages[0], o = e.options ? e.options.fallbackLng : !1, i = e.languages[e.languages.length - 1];
  if (n.toLowerCase() === "cimode")
    return !0;
  const s = (a, c) => {
    const l = e.services.backendConnector.state[`${a}|${c}`];
    return l === -1 || l === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !s(e.isLanguageChangingTo, r) ? !1 : !!(e.hasResourceBundle(n, r) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || s(n, r) && (!o || s(i, r)));
}
function af(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Di("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : sf(r, e, t);
}
const cf = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, lf = {
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
}, uf = (r) => lf[r], df = (r) => r.replace(cf, uf);
let Ui = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: df
};
function hf() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Ui = {
    ...Ui,
    ...r
  };
}
function ff() {
  return Ui;
}
let Al;
function pf(r) {
  Al = r;
}
function gf() {
  return Al;
}
const mf = {
  type: "3rdParty",
  init(r) {
    hf(r.options.react), pf(r);
  }
}, yf = Nr();
class vf {
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
const Cf = (r, e) => {
  const t = ue();
  return W(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function fs(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = ar(yf) || {}, i = t || n || gf();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new vf()), !i) {
    Di("You will need to pass in an i18next instance by using initReactI18next");
    const v = (E, T) => typeof T == "string" ? T : T && typeof T == "object" && typeof T.defaultValue == "string" ? T.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, w = [v, {}, !1];
    return w.t = v, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && Di("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const s = {
    ...ff(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: c
  } = s;
  let l = r || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((v) => af(v, i, s));
  function d() {
    return i.getFixedT(e.lng || null, s.nsMode === "fallback" ? l : l[0], c);
  }
  const [h, f] = X(d);
  let p = l.join();
  e.lng && (p = `${e.lng}${p}`);
  const g = Cf(p), m = ue(!0);
  W(() => {
    const {
      bindI18n: v,
      bindI18nStore: w
    } = s;
    m.current = !0, !u && !a && (e.lng ? Ga(i, e.lng, l, () => {
      m.current && f(d);
    }) : za(i, l, () => {
      m.current && f(d);
    })), u && g && g !== p && m.current && f(d);
    function E() {
      m.current && f(d);
    }
    return v && i && i.on(v, E), w && i && i.store.on(w, E), () => {
      m.current = !1, v && i && v.split(" ").forEach((T) => i.off(T, E)), w && i && w.split(" ").forEach((T) => i.store.off(T, E));
    };
  }, [i, p]);
  const b = ue(!0);
  W(() => {
    m.current && !b.current && f(d), b.current = !1;
  }, [i, c]);
  const C = [h, i, u];
  if (C.t = h, C.i18n = i, C.ready = u, u || !u && !a)
    return C;
  throw new Promise((v) => {
    e.lng ? Ga(i, e.lng, l, () => v()) : za(i, l, () => v());
  });
}
xe.use(mf).init({
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
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
var Hi = function(r, e) {
  return Hi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Hi(r, e);
};
function Me(r, e) {
  Hi(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var B = function() {
  return B = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, B.apply(this, arguments);
};
function Va(r, e) {
  var t = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(r); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[o]) && (t[n[o]] = r[n[o]]);
  return t;
}
function k(r, e, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        l(n.next(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(a, c);
    }
    l((n = n.apply(r, e || [])).next());
  });
}
function N(r, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (n = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
          return i;
        switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return t.label++, { value: l[1], done: !1 };
          case 5:
            t.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = l;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(l);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(r, t);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function bf(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var n = t.call(r), o, i = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function ps() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(bf(arguments[e]));
  return r;
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
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
var Fi = function(r, e) {
  return Fi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Fi(r, e);
};
function Ze(r, e) {
  Fi(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ge = function() {
  return ge = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, ge.apply(this, arguments);
};
function re(r, e, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(s) {
      s(i);
    });
  }
  return new (t || (t = Promise))(function(i, s) {
    function a(u) {
      try {
        l(n.next(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(a, c);
    }
    l((n = n.apply(r, e || [])).next());
  });
}
function ne(r, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, s;
  return s = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (n = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done)
          return i;
        switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
          case 0:
          case 1:
            i = l;
            break;
          case 4:
            return t.label++, { value: l[1], done: !1 };
          case 5:
            t.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              t = 0;
              continue;
            }
            if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
              t.label = l[1];
              break;
            }
            if (l[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = l;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(l);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        l = e.call(r, t);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        n = i = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function zo() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var n = Array(r), o = 0, e = 0; e < t; e++)
    for (var i = arguments[e], s = 0, a = i.length; s < a; s++, o++)
      n[o] = i[s];
  return n;
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var S = {
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
}, qn = [
  S.OPENID_SCOPE,
  S.PROFILE_SCOPE,
  S.OFFLINE_ACCESS_SCOPE
], Wa = zo(qn, [
  S.EMAIL_SCOPE
]), ot;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(ot || (ot = {}));
var Ie;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(Ie || (Ie = {}));
var wr;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(wr || (wr = {}));
var ie;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(ie || (ie = {}));
var qr;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(qr || (qr = {}));
var He = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, Sn;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(Sn || (Sn = {}));
var Ya = {
  PLAIN: "plain",
  S256: "S256"
}, mo;
(function(r) {
  r.QUERY = "query", r.FRAGMENT = "fragment", r.FORM_POST = "form_post";
})(mo || (mo = {}));
var yo;
(function(r) {
  r.IMPLICIT_GRANT = "implicit", r.AUTHORIZATION_CODE_GRANT = "authorization_code", r.CLIENT_CREDENTIALS_GRANT = "client_credentials", r.RESOURCE_OWNER_PASSWORD_GRANT = "password", r.REFRESH_TOKEN_GRANT = "refresh_token", r.DEVICE_CODE_GRANT = "device_code", r.JWT_BEARER = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(yo || (yo = {}));
var Cr;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(Cr || (Cr = {}));
var Ae;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(Ae || (Ae = {}));
var Y;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(Y || (Y = {}));
var Tn;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(Tn || (Tn = {}));
var Bi = "appmetadata", wf = "client_info", _n = "1", In = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, dt;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(dt || (dt = {}));
var Pe = {
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
}, ye;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(ye || (ye = {}));
var An = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Qa = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, vo;
(function(r) {
  r.username = "username", r.password = "password";
})(vo || (vo = {}));
var zr;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(zr || (zr = {}));
var Jt;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Jt || (Jt = {}));
var Rn;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(Rn || (Rn = {}));
var Zt;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(Zt || (Zt = {}));
var ji;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})(ji || (ji = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var to = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, z = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n, o) {
      var i = this, s = n ? t + ": " + n : t;
      return i = r.call(this, s) || this, Object.setPrototypeOf(i, e.prototype), i.errorCode = t || S.EMPTY_STRING, i.errorMessage = n || S.EMPTY_STRING, i.subError = o || S.EMPTY_STRING, i.name = "AuthError", i;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(to.unexpectedError.code, to.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(to.postRequestFailed.code, to.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Co = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw z.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw z.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw z.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", z.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", z.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", z.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", z.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", z.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", z.createUnexpectedError(r);
      });
    });
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var O = {
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
}, j = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createClientInfoDecodingError = function(t) {
      return new e(O.clientInfoDecodingError.code, O.clientInfoDecodingError.desc + " Failed with error: " + t);
    }, e.createClientInfoEmptyError = function() {
      return new e(O.clientInfoEmptyError.code, "" + O.clientInfoEmptyError.desc);
    }, e.createTokenParsingError = function(t) {
      return new e(O.tokenParsingError.code, O.tokenParsingError.desc + " Failed with error: " + t);
    }, e.createTokenNullOrEmptyError = function(t) {
      return new e(O.nullOrEmptyToken.code, O.nullOrEmptyToken.desc + " Raw Token Value: " + t);
    }, e.createEndpointDiscoveryIncompleteError = function(t) {
      return new e(O.endpointResolutionError.code, O.endpointResolutionError.desc + " Detail: " + t);
    }, e.createNetworkError = function(t, n) {
      return new e(O.networkError.code, O.networkError.desc + " | Fetch client threw: " + n + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToGetOpenidConfigError = function(t) {
      return new e(O.unableToGetOpenidConfigError.code, O.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + t);
    }, e.createHashNotDeserializedError = function(t) {
      return new e(O.hashNotDeserialized.code, O.hashNotDeserialized.desc + " Given Object: " + t);
    }, e.createInvalidStateError = function(t, n) {
      return new e(O.invalidStateError.code, O.invalidStateError.desc + " Invalid State: " + t + ", Root Err: " + n);
    }, e.createStateMismatchError = function() {
      return new e(O.stateMismatchError.code, O.stateMismatchError.desc);
    }, e.createStateNotFoundError = function(t) {
      return new e(O.stateNotFoundError.code, O.stateNotFoundError.desc + ":  " + t);
    }, e.createNonceMismatchError = function() {
      return new e(O.nonceMismatchError.code, O.nonceMismatchError.desc);
    }, e.createAuthTimeNotFoundError = function() {
      return new e(O.authTimeNotFoundError.code, O.authTimeNotFoundError.desc);
    }, e.createMaxAgeTranspiredError = function() {
      return new e(O.maxAgeTranspiredError.code, O.maxAgeTranspiredError.desc);
    }, e.createNonceNotFoundError = function(t) {
      return new e(O.nonceNotFoundError.code, O.nonceNotFoundError.desc + ":  " + t);
    }, e.createMultipleMatchingTokensInCacheError = function() {
      return new e(O.multipleMatchingTokens.code, O.multipleMatchingTokens.desc + ".");
    }, e.createMultipleMatchingAccountsInCacheError = function() {
      return new e(O.multipleMatchingAccounts.code, O.multipleMatchingAccounts.desc);
    }, e.createMultipleMatchingAppMetadataInCacheError = function() {
      return new e(O.multipleMatchingAppMetadata.code, O.multipleMatchingAppMetadata.desc);
    }, e.createTokenRequestCannotBeMadeError = function() {
      return new e(O.tokenRequestCannotBeMade.code, O.tokenRequestCannotBeMade.desc);
    }, e.createAppendEmptyScopeToSetError = function(t) {
      return new e(O.appendEmptyScopeError.code, O.appendEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createRemoveEmptyScopeFromSetError = function(t) {
      return new e(O.removeEmptyScopeError.code, O.removeEmptyScopeError.desc + " Given Scope: " + t);
    }, e.createAppendScopeSetError = function(t) {
      return new e(O.appendScopeSetError.code, O.appendScopeSetError.desc + " Detail Error: " + t);
    }, e.createEmptyInputScopeSetError = function() {
      return new e(O.emptyInputScopeSetError.code, "" + O.emptyInputScopeSetError.desc);
    }, e.createDeviceCodeCancelledError = function() {
      return new e(O.DeviceCodePollingCancelled.code, "" + O.DeviceCodePollingCancelled.desc);
    }, e.createDeviceCodeExpiredError = function() {
      return new e(O.DeviceCodeExpired.code, "" + O.DeviceCodeExpired.desc);
    }, e.createDeviceCodeUnknownError = function() {
      return new e(O.DeviceCodeUnknownError.code, "" + O.DeviceCodeUnknownError.desc);
    }, e.createNoAccountInSilentRequestError = function() {
      return new e(O.NoAccountInSilentRequest.code, "" + O.NoAccountInSilentRequest.desc);
    }, e.createNullOrUndefinedCacheRecord = function() {
      return new e(O.invalidCacheRecord.code, O.invalidCacheRecord.desc);
    }, e.createInvalidCacheEnvironmentError = function() {
      return new e(O.invalidCacheEnvironment.code, O.invalidCacheEnvironment.desc);
    }, e.createNoAccountFoundError = function() {
      return new e(O.noAccountFound.code, O.noAccountFound.desc);
    }, e.createCachePluginError = function() {
      return new e(O.CachePluginError.code, "" + O.CachePluginError.desc);
    }, e.createNoCryptoObjectError = function(t) {
      return new e(O.noCryptoObj.code, "" + O.noCryptoObj.desc + t);
    }, e.createInvalidCacheTypeError = function() {
      return new e(O.invalidCacheType.code, "" + O.invalidCacheType.desc);
    }, e.createUnexpectedAccountTypeError = function() {
      return new e(O.unexpectedAccountType.code, "" + O.unexpectedAccountType.desc);
    }, e.createUnexpectedCredentialTypeError = function() {
      return new e(O.unexpectedCredentialType.code, "" + O.unexpectedCredentialType.desc);
    }, e.createInvalidAssertionError = function() {
      return new e(O.invalidAssertion.code, "" + O.invalidAssertion.desc);
    }, e.createInvalidCredentialError = function() {
      return new e(O.invalidClientCredential.code, "" + O.invalidClientCredential.desc);
    }, e.createRefreshRequiredError = function() {
      return new e(O.tokenRefreshRequired.code, O.tokenRefreshRequired.desc);
    }, e.createUserTimeoutReachedError = function() {
      return new e(O.userTimeoutReached.code, O.userTimeoutReached.desc);
    }, e.createTokenClaimsRequiredError = function() {
      return new e(O.tokenClaimsRequired.code, O.tokenClaimsRequired.desc);
    }, e.createNoAuthCodeInServerResponseError = function() {
      return new e(O.noAuthorizationCodeFromServer.code, O.noAuthorizationCodeFromServer.desc);
    }, e.createBindingKeyNotRemovedError = function() {
      return new e(O.bindingKeyNotRemovedError.code, O.bindingKeyNotRemovedError.desc);
    }, e.createLogoutNotSupportedError = function() {
      return new e(O.logoutNotSupported.code, O.logoutNotSupported.desc);
    }, e.createKeyIdMissingError = function() {
      return new e(O.keyIdMissing.code, O.keyIdMissing.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(O.noNetworkConnectivity.code, O.noNetworkConnectivity.desc);
    }, e.createUserCanceledError = function() {
      return new e(O.userCanceledError.code, O.userCanceledError.desc);
    }, e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var H = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw j.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw j.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
      var t = {}, n = e.split("&"), o = function(i) {
        return decodeURIComponent(i.replace(/\+/g, " "));
      };
      return n.forEach(function(i) {
        if (i.trim()) {
          var s = i.split(/=(.+)/g, 2), a = s[0], c = s[1];
          a && c && (t[o(a)] = o(c));
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
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ee;
(function(r) {
  r[r.Error = 0] = "Error", r[r.Warning = 1] = "Warning", r[r.Info = 2] = "Info", r[r.Verbose = 3] = "Verbose", r[r.Trace = 4] = "Trace";
})(Ee || (Ee = {}));
var gs = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.level = Ee.Info;
      var o = function() {
      }, i = e || r.createDefaultLoggerOptions();
      this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || !1, this.level = typeof i.logLevel == "number" ? i.logLevel : Ee.Info, this.correlationId = i.correlationId || S.EMPTY_STRING, this.packageName = t || S.EMPTY_STRING, this.packageVersion = n || S.EMPTY_STRING;
    }
    return r.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: Ee.Info
      };
    }, r.prototype.clone = function(e, t, n) {
      return new r({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, e, t);
    }, r.prototype.logMessage = function(e, t) {
      if (!(t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii)) {
        var n = (/* @__PURE__ */ new Date()).toUTCString(), o;
        H.isEmpty(t.correlationId) ? H.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
        var i = o + " : " + this.packageName + "@" + this.packageVersion + " : " + Ee[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, i, t.containsPii || !1);
      }
    }, r.prototype.executeCallback = function(e, t, n) {
      this.localCallback && this.localCallback(e, t, n);
    }, r.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Error,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Error,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Warning,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Warning,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Info,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Info,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Verbose,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Verbose,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Trace,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: Ee.Trace,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Rl = "@azure/msal-common", ms = "13.3.3";
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xn;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(xn || (xn = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var te = {
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
}, we = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientConfigurationError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(te.redirectUriNotSet.code, te.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(te.postLogoutUriNotSet.code, te.postLogoutUriNotSet.desc);
    }, e.createClaimsRequestParsingError = function(t) {
      return new e(te.claimsRequestParsingError.code, te.claimsRequestParsingError.desc + " Given value: " + t);
    }, e.createInsecureAuthorityUriError = function(t) {
      return new e(te.authorityUriInsecure.code, te.authorityUriInsecure.desc + " Given URI: " + t);
    }, e.createUrlParseError = function(t) {
      return new e(te.urlParseError.code, te.urlParseError.desc + " Given Error: " + t);
    }, e.createUrlEmptyError = function() {
      return new e(te.urlEmptyError.code, te.urlEmptyError.desc);
    }, e.createEmptyScopesArrayError = function() {
      return new e(te.emptyScopesError.code, "" + te.emptyScopesError.desc);
    }, e.createClientIdSingleScopeError = function(t) {
      return new e(te.clientIdSingleScopeError.code, te.clientIdSingleScopeError.desc + " Given Scopes: " + t);
    }, e.createInvalidPromptError = function(t) {
      return new e(te.invalidPrompt.code, te.invalidPrompt.desc + " Given value: " + t);
    }, e.createInvalidClaimsRequestError = function() {
      return new e(te.invalidClaimsRequest.code, te.invalidClaimsRequest.desc);
    }, e.createEmptyLogoutRequestError = function() {
      return new e(te.logoutRequestEmptyError.code, te.logoutRequestEmptyError.desc);
    }, e.createEmptyTokenRequestError = function() {
      return new e(te.tokenRequestEmptyError.code, te.tokenRequestEmptyError.desc);
    }, e.createInvalidCodeChallengeMethodError = function() {
      return new e(te.invalidCodeChallengeMethod.code, te.invalidCodeChallengeMethod.desc);
    }, e.createInvalidCodeChallengeParamsError = function() {
      return new e(te.invalidCodeChallengeParams.code, te.invalidCodeChallengeParams.desc);
    }, e.createInvalidCloudDiscoveryMetadataError = function() {
      return new e(te.invalidCloudDiscoveryMetadata.code, te.invalidCloudDiscoveryMetadata.desc);
    }, e.createInvalidAuthorityMetadataError = function() {
      return new e(te.invalidAuthorityMetadata.code, te.invalidAuthorityMetadata.desc);
    }, e.createUntrustedAuthorityError = function() {
      return new e(te.untrustedAuthority.code, te.untrustedAuthority.desc);
    }, e.createInvalidAzureCloudInstanceError = function() {
      return new e(te.invalidAzureCloudInstance.code, te.invalidAzureCloudInstance.desc);
    }, e.createMissingSshJwkError = function() {
      return new e(te.missingSshJwk.code, te.missingSshJwk.desc);
    }, e.createMissingSshKidError = function() {
      return new e(te.missingSshKid.code, te.missingSshKid.desc);
    }, e.createMissingNonceAuthenticationHeadersError = function() {
      return new e(te.missingNonceAuthenticationHeader.code, te.missingNonceAuthenticationHeader.desc);
    }, e.createInvalidAuthenticationHeaderError = function(t, n) {
      return new e(te.invalidAuthenticationHeader.code, te.invalidAuthenticationHeader.desc + ". Invalid header: " + t + ". Details: " + n);
    }, e.createAuthorityMismatchError = function() {
      return new e(te.authorityMismatch.code, te.authorityMismatch.desc);
    }, e;
  }(j)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var De = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? H.trimArrayEntries(zo(e)) : [], o = n ? H.removeEmptyStringsFromArray(n) : [];
      this.validateInputScopes(o), this.scopes = /* @__PURE__ */ new Set(), o.forEach(function(i) {
        return t.scopes.add(i);
      });
    }
    return r.fromString = function(e) {
      var t = e || S.EMPTY_STRING, n = t.split(" ");
      return new r(n);
    }, r.createSearchScopes = function(e) {
      var t = new r(e);
      return t.containsOnlyOIDCScopes() ? t.removeScope(S.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t;
    }, r.prototype.validateInputScopes = function(e) {
      if (!e || e.length < 1)
        throw we.createEmptyScopesArrayError();
    }, r.prototype.containsScope = function(e) {
      var t = this.printScopesLowerCase().split(" "), n = new r(t);
      return H.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Wa.forEach(function(n) {
        e.containsScope(n) && (t += 1);
      }), this.scopes.size === t;
    }, r.prototype.appendScope = function(e) {
      H.isEmpty(e) || this.scopes.add(e.trim());
    }, r.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(n) {
          return t.appendScope(n);
        });
      } catch (n) {
        throw j.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (H.isEmpty(e))
        throw j.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Wa.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw j.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw j.createEmptyInputScopeSetError();
      e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
      var t = this.unionScopeSets(e), n = e.getScopeCount(), o = this.getScopeCount(), i = t.size;
      return i < o + n;
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
      return S.EMPTY_STRING;
    }, r.prototype.printScopesLowerCase = function() {
      return this.printScopes().toLowerCase();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function bo(r, e) {
  if (H.isEmpty(r))
    throw j.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw j.createClientInfoDecodingError(n.message);
  }
}
function Gr(r) {
  if (H.isEmpty(r))
    throw j.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(Ae.CLIENT_INFO_SEPARATOR, 2);
  return {
    uid: e[0],
    utid: e.length < 2 ? S.EMPTY_STRING : e[1]
  };
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var We;
(function(r) {
  r[r.Default = 0] = "Default", r[r.Adfs = 1] = "Adfs", r[r.Dsts = 2] = "Dsts", r[r.Ciam = 3] = "Ciam";
})(We || (We = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Zr;
(function(r) {
  r.AAD = "AAD", r.OIDC = "OIDC";
})(Zr || (Zr = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Fe = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAccountId = function() {
      var e = [this.homeAccountId, this.environment];
      return e.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.prototype.generateAccountKey = function() {
      return r.generateAccountCacheKey({
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId
      });
    }, r.prototype.getAccountInfo = function() {
      return {
        homeAccountId: this.homeAccountId,
        environment: this.environment,
        tenantId: this.realm,
        username: this.username,
        localAccountId: this.localAccountId,
        name: this.name,
        idTokenClaims: this.idTokenClaims,
        nativeAccountId: this.nativeAccountId,
        authorityType: this.authorityType
      };
    }, r.generateAccountCacheKey = function(e) {
      var t = [
        e.homeAccountId,
        e.environment || S.EMPTY_STRING,
        e.tenantId || S.EMPTY_STRING
      ];
      return t.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAccount = function(e, t) {
      var n = new r();
      t.authorityType === We.Adfs ? n.authorityType = Cr.ADFS_ACCOUNT_TYPE : t.protocolMode === Zr.AAD ? n.authorityType = Cr.MSSTS_ACCOUNT_TYPE : n.authorityType = Cr.GENERIC_ACCOUNT_TYPE, n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
      var o = e.environment || t && t.getPreferredCache();
      if (!o)
        throw j.createInvalidCacheEnvironmentError();
      if (n.environment = o, n.realm = e.idTokenClaims.tid || S.EMPTY_STRING, n.idTokenClaims = e.idTokenClaims, n.localAccountId = e.idTokenClaims.oid || e.idTokenClaims.sub || S.EMPTY_STRING, n.authorityType === Cr.MSSTS_ACCOUNT_TYPE) {
        var i = e.idTokenClaims.preferred_username, s = e.idTokenClaims.emails ? e.idTokenClaims.emails[0] : null;
        n.username = i || s || "";
      } else
        n.username = e.idTokenClaims.upn || "";
      return n.name = e.idTokenClaims.name, n.cloudGraphHostName = e.cloudGraphHostName, n.msGraphHost = e.msGraphHost, n;
    }, r.createFromAccountInfo = function(e, t, n) {
      var o = new r();
      return o.authorityType = e.authorityType || Cr.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.idTokenClaims = e.idTokenClaims, o.cloudGraphHostName = t, o.msGraphHost = n, o;
    }, r.generateHomeAccountId = function(e, t, n, o, i) {
      var s = i != null && i.sub ? i.sub : S.EMPTY_STRING;
      if (t === We.Adfs || t === We.Dsts)
        return s;
      if (e)
        try {
          var a = bo(e, o);
          if (!H.isEmpty(a.uid) && !H.isEmpty(a.utid))
            return "" + a.uid + Ae.CLIENT_INFO_SEPARATOR + a.utid;
        } catch {
        }
      return n.verbose("No client info in response"), s;
    }, r.isAccountEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType") : !1;
    }, r.accountInfoIsEqual = function(e, t, n) {
      if (!e || !t)
        return !1;
      var o = !0;
      if (n) {
        var i = e.idTokenClaims || {}, s = t.idTokenClaims || {};
        o = i.iat === s.iat && i.nonce === s.nonce;
      }
      return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ot = (
  /** @class */
  function() {
    function r(e, t) {
      if (H.isEmpty(e))
        throw j.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = H.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, i = t.base64Decode(o);
        return JSON.parse(i);
      } catch (s) {
        throw j.createTokenParsingError(s);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw j.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ve = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Rl, ms);
    }
    return r.prototype.getAllAccounts = function() {
      var e = this, t = this.getAccountKeys();
      if (t.length < 1)
        return [];
      var n = t.reduce(function(i, s) {
        var a = e.getAccount(s);
        return a && i.push(a), i;
      }, []);
      if (n.length < 1)
        return [];
      var o = n.map(function(i) {
        return e.getAccountInfoFromEntity(i);
      });
      return o;
    }, r.prototype.getAccountInfoFilteredBy = function(e) {
      var t = this.getAccountsFilteredBy(e);
      return t.length > 0 ? this.getAccountInfoFromEntity(t[0]) : null;
    }, r.prototype.getAccountInfoFromEntity = function(e) {
      var t = e.getAccountInfo(), n = this.getIdToken(t);
      return n && (t.idToken = n.secret, t.idTokenClaims = new Ot(n.secret, this.cryptoImpl).claims), t;
    }, r.prototype.saveCacheRecord = function(e) {
      return re(this, void 0, void 0, function() {
        return ne(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw j.createNullOrUndefinedCacheRecord();
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
      return re(this, void 0, void 0, function() {
        var t, n, o, i, s = this;
        return ne(this, function(a) {
          switch (a.label) {
            case 0:
              return t = {
                clientId: e.clientId,
                credentialType: e.credentialType,
                environment: e.environment,
                homeAccountId: e.homeAccountId,
                realm: e.realm,
                tokenType: e.tokenType,
                requestedClaimsHash: e.requestedClaimsHash
              }, n = this.getTokenKeys(), o = De.fromString(e.target), i = [], n.accessToken.forEach(function(c) {
                if (s.accessTokenKeyMatchesFilter(c, t, !1)) {
                  var l = s.getAccessTokenCredential(c);
                  if (l && s.credentialMatchesFilter(l, t)) {
                    var u = De.fromString(l.target);
                    u.intersectingScopeSets(o) && i.push(s.removeAccessToken(c));
                  }
                }
              }), [4, Promise.all(i)];
            case 1:
              return a.sent(), this.setAccessTokenCredential(e), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getAccountsFilteredBy = function(e) {
      var t = this, n = this.getAccountKeys(), o = [];
      return n.forEach(function(i) {
        if (t.isAccountKey(i, e.homeAccountId, e.realm)) {
          var s = t.getAccount(i);
          s && (e.homeAccountId && !t.matchHomeAccountId(s, e.homeAccountId) || e.localAccountId && !t.matchLocalAccountId(s, e.localAccountId) || e.username && !t.matchUsername(s, e.username) || e.environment && !t.matchEnvironment(s, e.environment) || e.realm && !t.matchRealm(s, e.realm) || e.nativeAccountId && !t.matchNativeAccountId(s, e.nativeAccountId) || o.push(s));
        }
      }), o;
    }, r.prototype.isAccountKey = function(e, t, n) {
      return !(e.split(Ae.CACHE_KEY_SEPARATOR).length < 3 || t && !e.toLowerCase().includes(t.toLowerCase()) || n && !e.toLowerCase().includes(n.toLowerCase()));
    }, r.prototype.isCredentialKey = function(e) {
      if (e.split(Ae.CACHE_KEY_SEPARATOR).length < 6)
        return !1;
      var t = e.toLowerCase();
      if (t.indexOf(Y.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(Y.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(Y.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(Y.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(Y.REFRESH_TOKEN.toLowerCase()) > -1) {
        var n = "" + Y.REFRESH_TOKEN + Ae.CACHE_KEY_SEPARATOR + this.clientId + Ae.CACHE_KEY_SEPARATOR, o = "" + Y.REFRESH_TOKEN + Ae.CACHE_KEY_SEPARATOR + _n + Ae.CACHE_KEY_SEPARATOR;
        if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === Y.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === ye.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
    }, r.prototype.getAppMetadataFilteredBy = function(e) {
      return this.getAppMetadataFilteredByInternal(e.environment, e.clientId);
    }, r.prototype.getAppMetadataFilteredByInternal = function(e, t) {
      var n = this, o = this.getKeys(), i = {};
      return o.forEach(function(s) {
        if (n.isAppMetadata(s)) {
          var a = n.getAppMetadata(s);
          a && (e && !n.matchEnvironment(a, e) || t && !n.matchClientId(a, t) || (i[s] = a));
        }
      }), i;
    }, r.prototype.getAuthorityMetadataByAlias = function(e) {
      var t = this, n = this.getAuthorityMetadataKeys(), o = null;
      return n.forEach(function(i) {
        if (!(!t.isAuthorityMetadata(i) || i.indexOf(t.clientId) === -1)) {
          var s = t.getAuthorityMetadata(i);
          s && s.aliases.indexOf(e) !== -1 && (o = s);
        }
      }), o;
    }, r.prototype.removeAllAccounts = function() {
      return re(this, void 0, void 0, function() {
        var e, t, n = this;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              return e = this.getAccountKeys(), t = [], e.forEach(function(i) {
                t.push(n.removeAccount(i));
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
      return re(this, void 0, void 0, function() {
        var t;
        return ne(this, function(n) {
          switch (n.label) {
            case 0:
              if (t = this.getAccount(e), !t)
                throw j.createNoAccountFoundError();
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
      return re(this, void 0, void 0, function() {
        var t, n, o, i = this;
        return ne(this, function(s) {
          switch (s.label) {
            case 0:
              return t = this.getTokenKeys(), n = e.generateAccountId(), o = [], t.idToken.forEach(function(a) {
                a.indexOf(n) === 0 && i.removeIdToken(a);
              }), t.accessToken.forEach(function(a) {
                a.indexOf(n) === 0 && o.push(i.removeAccessToken(a));
              }), t.refreshToken.forEach(function(a) {
                a.indexOf(n) === 0 && i.removeRefreshToken(a);
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
      return re(this, void 0, void 0, function() {
        var t, n, o;
        return ne(this, function(i) {
          switch (i.label) {
            case 0:
              if (t = this.getAccessTokenCredential(e), !t)
                return [
                  2
                  /*return*/
                ];
              if (t.credentialType.toLowerCase() !== Y.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (t.tokenType !== ye.POP)
                return [3, 4];
              if (n = t, o = n.keyId, !o)
                return [3, 4];
              i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(o)];
            case 2:
              return i.sent(), [3, 4];
            case 3:
              throw i.sent(), j.createBindingKeyNotRemovedError();
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
      var o = this.getTokenKeys(), i = this.readAccountFromCache(e), s = this.getIdToken(e, o), a = this.getAccessToken(e, t, o), c = this.getRefreshToken(e, !1, o), l = this.readAppMetadataFromCache(n);
      return i && s && (i.idTokenClaims = new Ot(s.secret, this.cryptoImpl).claims), {
        account: i,
        idToken: s,
        accessToken: a,
        refreshToken: c,
        appMetadata: l
      };
    }, r.prototype.readAccountFromCache = function(e) {
      var t = Fe.generateAccountCacheKey(e);
      return this.getAccount(t);
    }, r.prototype.getIdToken = function(e, t) {
      var n = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: Y.ID_TOKEN,
        clientId: this.clientId,
        realm: e.tenantId
      }, i = this.getIdTokensByFilter(o, t), s = i.length;
      return s < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : s > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), i.forEach(function(a) {
        n.removeIdToken(a.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), i[0]);
    }, r.prototype.getIdTokensByFilter = function(e, t) {
      var n = this, o = t && t.idToken || this.getTokenKeys().idToken, i = [];
      return o.forEach(function(s) {
        if (n.idTokenKeyMatchesFilter(s, ge({ clientId: n.clientId }, e))) {
          var a = n.getIdTokenCredential(s);
          a && n.credentialMatchesFilter(a, e) && i.push(a);
        }
      }), i;
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
      var i = De.createSearchScopes(t.scopes), s = t.authenticationScheme || ye.BEARER, a = s && s.toLowerCase() !== ye.BEARER.toLowerCase() ? Y.ACCESS_TOKEN_WITH_AUTH_SCHEME : Y.ACCESS_TOKEN, c = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: a,
        clientId: this.clientId,
        realm: e.tenantId,
        target: i,
        tokenType: s,
        keyId: t.sshKid,
        requestedClaimsHash: t.requestedClaimsHash
      }, l = n && n.accessToken || this.getTokenKeys().accessToken, u = [];
      l.forEach(function(h) {
        if (o.accessTokenKeyMatchesFilter(h, c, !0)) {
          var f = o.getAccessTokenCredential(h);
          f && o.credentialMatchesFilter(f, c) && u.push(f);
        }
      });
      var d = u.length;
      return d < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : d > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), u.forEach(function(h) {
        o.removeAccessToken(h.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), u[0]);
    }, r.prototype.accessTokenKeyMatchesFilter = function(e, t, n) {
      var o = e.toLowerCase();
      if (t.clientId && o.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && o.indexOf(t.homeAccountId.toLowerCase()) === -1 || t.realm && o.indexOf(t.realm.toLowerCase()) === -1 || t.requestedClaimsHash && o.indexOf(t.requestedClaimsHash.toLowerCase()) === -1)
        return !1;
      if (t.target)
        for (var i = t.target.asArray(), s = 0; s < i.length; s++) {
          if (n && !o.includes(i[s].toLowerCase()))
            return !1;
          if (!n && o.includes(i[s].toLowerCase()))
            return !0;
        }
      return !0;
    }, r.prototype.getAccessTokensByFilter = function(e) {
      var t = this, n = this.getTokenKeys(), o = [];
      return n.accessToken.forEach(function(i) {
        if (t.accessTokenKeyMatchesFilter(i, e, !0)) {
          var s = t.getAccessTokenCredential(i);
          s && t.credentialMatchesFilter(s, e) && o.push(s);
        }
      }), o;
    }, r.prototype.getRefreshToken = function(e, t, n) {
      var o = this;
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      var i = t ? _n : void 0, s = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: Y.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: i
      }, a = n && n.refreshToken || this.getTokenKeys().refreshToken, c = [];
      a.forEach(function(u) {
        if (o.refreshTokenKeyMatchesFilter(u, s)) {
          var d = o.getRefreshTokenCredential(u);
          d && o.credentialMatchesFilter(d, s) && c.push(d);
        }
      });
      var l = c.length;
      return l < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), c[0]);
    }, r.prototype.refreshTokenKeyMatchesFilter = function(e, t) {
      var n = e.toLowerCase();
      return !(t.familyId && n.indexOf(t.familyId.toLowerCase()) === -1 || !t.familyId && t.clientId && n.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && n.indexOf(t.homeAccountId.toLowerCase()) === -1);
    }, r.prototype.readAppMetadataFromCache = function(e) {
      var t = {
        environment: e,
        clientId: this.clientId
      }, n = this.getAppMetadataFilteredBy(t), o = Object.keys(n).map(function(s) {
        return n[s];
      }), i = o.length;
      if (i < 1)
        return null;
      if (i > 1)
        throw j.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, r.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === _n);
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
      var n = e.credentialType !== Y.ACCESS_TOKEN && e.credentialType !== Y.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (n || !e.target)
        return !1;
      var o = De.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(Bi) !== -1;
    }, r.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(In.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return In.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, r.toObject = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    }, r;
  }()
), Ef = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return re(this, void 0, void 0, function() {
        var t;
        return ne(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", z.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw z.createUnexpectedError(t);
    }, e;
  }(Ve)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Sf = 300, kl = {
  tokenRenewalOffsetSeconds: Sf,
  preventCorsPreflight: !1
}, Tf = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: Ee.Info,
  correlationId: S.EMPTY_STRING
}, _f = {
  claimsBasedCachingEnabled: !0
}, If = {
  sendGetRequestAsync: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", z.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return re(this, void 0, void 0, function() {
      var r;
      return ne(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", z.createUnexpectedError(r);
      });
    });
  }
}, Af = {
  sku: S.SKU,
  version: ms,
  cpu: S.EMPTY_STRING,
  os: S.EMPTY_STRING
}, Rf = {
  clientSecret: S.EMPTY_STRING,
  clientAssertion: void 0
}, kf = {
  azureCloudInstance: xn.None,
  tenant: "" + S.DEFAULT_COMMON_TENANT
}, Nf = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function Pf(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, i = r.storageInterface, s = r.networkInterface, a = r.cryptoInterface, c = r.clientCredentials, l = r.libraryInfo, u = r.telemetry, d = r.serverTelemetryManager, h = r.persistencePlugin, f = r.serializableCache, p = ge(ge({}, Tf), n);
  return {
    authOptions: Of(e),
    systemOptions: ge(ge({}, kl), t),
    loggerOptions: p,
    cacheOptions: ge(ge({}, _f), o),
    storageInterface: i || new Ef(e.clientId, Co, new gs(p)),
    networkInterface: s || If,
    cryptoInterface: a || Co,
    clientCredentials: c || Rf,
    libraryInfo: ge(ge({}, Af), l),
    telemetry: ge(ge({}, Nf), u),
    serverTelemetryManager: d || null,
    persistencePlugin: h || null,
    serializableCache: f || null
  };
}
function Of(r) {
  return ge({ clientCapabilities: [], azureCloudOptions: kf, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _r = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n, o) {
      var i = r.call(this, t, n, o) || this;
      return i.name = "ServerError", Object.setPrototypeOf(i, e.prototype), i;
    }
    return e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var wo = (
  /** @class */
  function() {
    function r() {
    }
    return r.generateThrottlingStorageKey = function(e) {
      return An.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, r.preProcess = function(e, t) {
      var n, o = r.generateThrottlingStorageKey(t), i = e.getThrottlingCache(o);
      if (i) {
        if (i.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new _r(((n = i.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || S.EMPTY_STRING, i.errorMessage, i.subError);
      }
    }, r.postProcess = function(e, t, n) {
      if (r.checkResponseStatus(n) || r.checkResponseForRetryAfter(n)) {
        var o = {
          throttleTime: r.calculateThrottleTime(parseInt(n.headers[ot.RETRY_AFTER])),
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
      return e.headers ? e.headers.hasOwnProperty(ot.RETRY_AFTER) && (e.status < 200 || e.status >= 300) : !1;
    }, r.calculateThrottleTime = function(e) {
      var t = e <= 0 ? 0 : e, n = Date.now() / 1e3;
      return Math.floor(Math.min(n + (t || An.DEFAULT_THROTTLE_TIME_SECONDS), n + An.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
    }, r.removeThrottle = function(e, t, n, o) {
      var i = {
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
      }, s = this.generateThrottlingStorageKey(i);
      e.removeItem(s);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xf = (
  /** @class */
  function() {
    function r(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return r.prototype.sendPostRequest = function(e, t, n) {
      return re(this, void 0, void 0, function() {
        var o, i;
        return ne(this, function(s) {
          switch (s.label) {
            case 0:
              wo.preProcess(this.cacheManager, e), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw i = s.sent(), i instanceof z ? i : j.createNetworkError(t, i);
            case 4:
              return wo.postProcess(this.cacheManager, e, o), [2, o];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var rt;
(function(r) {
  r.HOME_ACCOUNT_ID = "home_account_id", r.UPN = "UPN";
})(rt || (rt = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var yr = (
  /** @class */
  function() {
    function r() {
    }
    return r.validateRedirectUri = function(e) {
      if (H.isEmpty(e))
        throw we.createRedirectUriEmptyError();
    }, r.validatePrompt = function(e) {
      var t = [];
      for (var n in He)
        t.push(He[n]);
      if (t.indexOf(e) < 0)
        throw we.createInvalidPromptError(e);
    }, r.validateClaims = function(e) {
      try {
        JSON.parse(e);
      } catch {
        throw we.createInvalidClaimsRequestError();
      }
    }, r.validateCodeChallengeParams = function(e, t) {
      if (H.isEmpty(e) || H.isEmpty(t))
        throw we.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        Ya.PLAIN,
        Ya.S256
      ].indexOf(e) < 0)
        throw we.createInvalidCodeChallengeMethodError();
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
/*! @azure/msal-common v13.3.3 2024-06-06 */
var kn = (
  /** @class */
  function() {
    function r() {
      this.parameters = /* @__PURE__ */ new Map();
    }
    return r.prototype.addResponseTypeCode = function() {
      this.parameters.set(ie.RESPONSE_TYPE, encodeURIComponent(S.CODE_RESPONSE_TYPE));
    }, r.prototype.addResponseTypeForTokenAndIdToken = function() {
      this.parameters.set(ie.RESPONSE_TYPE, encodeURIComponent(S.TOKEN_RESPONSE_TYPE + " " + S.ID_TOKEN_RESPONSE_TYPE));
    }, r.prototype.addResponseMode = function(e) {
      this.parameters.set(ie.RESPONSE_MODE, encodeURIComponent(e || mo.QUERY));
    }, r.prototype.addNativeBroker = function() {
      this.parameters.set(ie.NATIVE_BROKER, encodeURIComponent("1"));
    }, r.prototype.addScopes = function(e, t) {
      t === void 0 && (t = !0);
      var n = t ? zo(e || [], qn) : e || [], o = new De(n);
      this.parameters.set(ie.SCOPE, encodeURIComponent(o.printScopes()));
    }, r.prototype.addClientId = function(e) {
      this.parameters.set(ie.CLIENT_ID, encodeURIComponent(e));
    }, r.prototype.addRedirectUri = function(e) {
      yr.validateRedirectUri(e), this.parameters.set(ie.REDIRECT_URI, encodeURIComponent(e));
    }, r.prototype.addPostLogoutRedirectUri = function(e) {
      yr.validateRedirectUri(e), this.parameters.set(ie.POST_LOGOUT_URI, encodeURIComponent(e));
    }, r.prototype.addIdTokenHint = function(e) {
      this.parameters.set(ie.ID_TOKEN_HINT, encodeURIComponent(e));
    }, r.prototype.addDomainHint = function(e) {
      this.parameters.set(Sn.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(Sn.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(Sn.SID, encodeURIComponent(e));
    }, r.prototype.addClaims = function(e, t) {
      var n = this.addClientCapabilitiesToClaims(e, t);
      yr.validateClaims(n), this.parameters.set(ie.CLAIMS, encodeURIComponent(n));
    }, r.prototype.addCorrelationId = function(e) {
      this.parameters.set(ie.CLIENT_REQUEST_ID, encodeURIComponent(e));
    }, r.prototype.addLibraryInfo = function(e) {
      this.parameters.set(ie.X_CLIENT_SKU, e.sku), this.parameters.set(ie.X_CLIENT_VER, e.version), e.os && this.parameters.set(ie.X_CLIENT_OS, e.os), e.cpu && this.parameters.set(ie.X_CLIENT_CPU, e.cpu);
    }, r.prototype.addApplicationTelemetry = function(e) {
      e != null && e.appName && this.parameters.set(ie.X_APP_NAME, e.appName), e != null && e.appVersion && this.parameters.set(ie.X_APP_VER, e.appVersion);
    }, r.prototype.addPrompt = function(e) {
      yr.validatePrompt(e), this.parameters.set("" + ie.PROMPT, encodeURIComponent(e));
    }, r.prototype.addState = function(e) {
      H.isEmpty(e) || this.parameters.set(ie.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(ie.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (yr.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(ie.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(ie.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw we.createInvalidCodeChallengeParamsError();
    }, r.prototype.addAuthorizationCode = function(e) {
      this.parameters.set(ie.CODE, encodeURIComponent(e));
    }, r.prototype.addDeviceCode = function(e) {
      this.parameters.set(ie.DEVICE_CODE, encodeURIComponent(e));
    }, r.prototype.addRefreshToken = function(e) {
      this.parameters.set(ie.REFRESH_TOKEN, encodeURIComponent(e));
    }, r.prototype.addCodeVerifier = function(e) {
      this.parameters.set(ie.CODE_VERIFIER, encodeURIComponent(e));
    }, r.prototype.addClientSecret = function(e) {
      this.parameters.set(ie.CLIENT_SECRET, encodeURIComponent(e));
    }, r.prototype.addClientAssertion = function(e) {
      H.isEmpty(e) || this.parameters.set(ie.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      H.isEmpty(e) || this.parameters.set(ie.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(ie.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(ie.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(ie.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(wf, "1");
    }, r.prototype.addExtraQueryParameters = function(e) {
      var t = this, n = yr.sanitizeEQParams(e, this.parameters);
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
          throw we.createInvalidClaimsRequestError();
        }
      return t && t.length > 0 && (n.hasOwnProperty(qr.ACCESS_TOKEN) || (n[qr.ACCESS_TOKEN] = {}), n[qr.ACCESS_TOKEN][qr.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(vo.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(vo.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      H.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ye.POP), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      H.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ye.SSH), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addServerTelemetry = function(e) {
      this.parameters.set(ie.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(ie.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(ie.X_MS_LIB_CAPABILITY, An.X_MS_LIB_CAPABILITY_VALUE);
    }, r.prototype.addLogoutHint = function(e) {
      this.parameters.set(ie.LOGOUT_HINT, encodeURIComponent(e));
    }, r.prototype.createQueryString = function() {
      var e = new Array();
      return this.parameters.forEach(function(t, n) {
        e.push(n + "=" + t);
      }), e.join("&");
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ys = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = Pf(e), this.logger = new gs(this.config.loggerOptions, Rl, ms), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new xf(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[ot.CONTENT_TYPE] = S.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case rt.HOME_ACCOUNT_ID:
            try {
              var n = Gr(e.credential);
              t[ot.CCS_HEADER] = "Oid:" + n.uid + "@" + n.utid;
            } catch (o) {
              this.logger.verbose("Could not parse home account ID for CCS Header: " + o);
            }
            break;
          case rt.UPN:
            t[ot.CCS_HEADER] = "UPN: " + e.credential;
            break;
        }
      return t;
    }, r.prototype.executePostToTokenEndpoint = function(e, t, n, o) {
      return re(this, void 0, void 0, function() {
        var i;
        return ne(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(o, e, { body: t, headers: n })];
            case 1:
              return i = s.sent(), this.config.serverTelemetryManager && i.status < 500 && i.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), [2, i];
          }
        });
      });
    }, r.prototype.updateAuthority = function(e) {
      if (!e.discoveryComplete())
        throw j.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new kn();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var vs = (
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
        case Y.ID_TOKEN:
          return Tn.ID_TOKEN;
        case Y.ACCESS_TOKEN:
        case Y.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return Tn.ACCESS_TOKEN;
        case Y.REFRESH_TOKEN:
          return Tn.REFRESH_TOKEN;
        default:
          throw j.createUnexpectedCredentialTypeError();
      }
    }, r.generateCredentialCacheKey = function(e, t, n, o, i, s, a, c, l) {
      var u = [
        this.generateAccountIdForCacheKey(e, t),
        this.generateCredentialIdForCacheKey(n, o, i, a),
        this.generateTargetForCacheKey(s),
        this.generateClaimsHashForCacheKey(l),
        this.generateSchemeForCacheKey(c)
      ];
      return u.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateAccountIdForCacheKey = function(e, t) {
      var n = [e, t];
      return n.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateCredentialIdForCacheKey = function(e, t, n, o) {
      var i = e === Y.REFRESH_TOKEN && o || t, s = [
        e,
        i,
        n || S.EMPTY_STRING
      ];
      return s.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateTargetForCacheKey = function(e) {
      return (e || S.EMPTY_STRING).toLowerCase();
    }, r.generateClaimsHashForCacheKey = function(e) {
      return (e || S.EMPTY_STRING).toLowerCase();
    }, r.generateSchemeForCacheKey = function(e) {
      return e && e.toLowerCase() !== ye.BEARER.toLowerCase() ? e.toLowerCase() : S.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var er = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createIdTokenEntity = function(t, n, o, i, s) {
      var a = new e();
      return a.credentialType = Y.ID_TOKEN, a.homeAccountId = t, a.environment = n, a.clientId = i, a.secret = o, a.realm = s, a;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === Y.ID_TOKEN : !1;
    }, e;
  }(vs)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ht = (
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
/*! @azure/msal-common v13.3.3 2024-06-06 */
var tr = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createAccessTokenEntity = function(t, n, o, i, s, a, c, l, u, d, h, f, p, g, m) {
      var b, C, v = new e();
      v.homeAccountId = t, v.credentialType = Y.ACCESS_TOKEN, v.secret = o;
      var w = ht.nowSeconds();
      if (v.cachedAt = w.toString(), v.expiresOn = c.toString(), v.extendedExpiresOn = l.toString(), d && (v.refreshOn = d.toString()), v.environment = n, v.clientId = i, v.realm = s, v.target = a, v.userAssertionHash = f, v.tokenType = H.isEmpty(h) ? ye.BEARER : h, g && (v.requestedClaims = g, v.requestedClaimsHash = m), ((b = v.tokenType) === null || b === void 0 ? void 0 : b.toLowerCase()) !== ye.BEARER.toLowerCase())
        switch (v.credentialType = Y.ACCESS_TOKEN_WITH_AUTH_SCHEME, v.tokenType) {
          case ye.POP:
            var E = Ot.extractTokenClaims(o, u);
            if (!(!((C = E == null ? void 0 : E.cnf) === null || C === void 0) && C.kid))
              throw j.createTokenClaimsRequiredError();
            v.keyId = E.cnf.kid;
            break;
          case ye.SSH:
            v.keyId = p;
        }
      return v;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === Y.ACCESS_TOKEN || t.credentialType === Y.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(vs)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Vr = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, n, o, i, s, a) {
      var c = new e();
      return c.clientId = i, c.credentialType = Y.REFRESH_TOKEN, c.environment = n, c.homeAccountId = t, c.secret = o, c.userAssertionHash = a, s && (c.familyId = s), c;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === Y.REFRESH_TOKEN : !1;
    }, e;
  }(vs)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ja = [
  "interaction_required",
  "consent_required",
  "login_required"
], Mf = [
  "message_only",
  "additional_action",
  "basic_action",
  "user_password_expired",
  "consent_required"
], Wr = {
  noTokensFoundError: {
    code: "no_tokens_found",
    desc: "No refresh token found in the cache. Please sign-in."
  },
  native_account_unavailable: {
    code: "native_account_unavailable",
    desc: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API."
  }
}, wt = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n, o, i, s, a, c) {
      var l = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(l, e.prototype), l.timestamp = i || S.EMPTY_STRING, l.traceId = s || S.EMPTY_STRING, l.correlationId = a || S.EMPTY_STRING, l.claims = c || S.EMPTY_STRING, l.name = "InteractionRequiredAuthError", l;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var i = !!t && Ja.indexOf(t) > -1, s = !!o && Mf.indexOf(o) > -1, a = !!n && Ja.some(function(c) {
        return n.indexOf(c) > -1;
      });
      return i || a || s;
    }, e.createNoTokensFoundError = function() {
      return new e(Wr.noTokensFoundError.code, Wr.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Wr.native_account_unavailable.code, Wr.native_account_unavailable.desc);
    }, e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Qr = (
  /** @class */
  function() {
    function r(e, t, n, o, i) {
      this.account = e || null, this.idToken = t || null, this.accessToken = n || null, this.refreshToken = o || null, this.appMetadata = i || null;
    }
    return r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Bt = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(e, t, n) {
      var o = r.generateLibraryState(e, n);
      return H.isEmpty(t) ? o : "" + o + S.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw j.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw j.createNoCryptoObjectError("parseRequestState");
      if (H.isEmpty(t))
        throw j.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(S.RESOURCE_DELIM), o = n[0], i = n.length > 1 ? n.slice(1).join(S.RESOURCE_DELIM) : S.EMPTY_STRING, s = e.base64Decode(o), a = JSON.parse(s);
        return {
          userRequestState: H.isEmpty(i) ? S.EMPTY_STRING : i,
          libraryState: a
        };
      } catch (c) {
        throw j.createInvalidStateError(t, c);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var he = (
  /** @class */
  function() {
    function r(e) {
      if (this._urlString = e, H.isEmpty(this._urlString))
        throw we.createUrlEmptyError();
      H.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
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
        return H.endsWith(t, "?") ? t = t.slice(0, -1) : H.endsWith(t, "?/") && (t = t.slice(0, -2)), H.endsWith(t, "/") || (t += "/"), t;
      }
      return e;
    }, r.prototype.validateAsUri = function() {
      var e;
      try {
        e = this.getUrlComponents();
      } catch (t) {
        throw we.createUrlParseError(t);
      }
      if (!e.HostNameAndPort || !e.PathSegments)
        throw we.createUrlParseError("Given url string: " + this.urlString);
      if (!e.Protocol || e.Protocol.toLowerCase() !== "https:")
        throw we.createInsecureAuthorityUriError(this.urlString);
    }, r.appendQueryString = function(e, t) {
      return H.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
    }, r.removeHashFromUrl = function(e) {
      return r.canonicalizeUri(e.split("#")[0]);
    }, r.prototype.replaceTenantPath = function(e) {
      var t = this.getUrlComponents(), n = t.PathSegments;
      return e && n.length !== 0 && (n[0] === wr.COMMON || n[0] === wr.ORGANIZATIONS) && (n[0] = e), r.constructAuthorityUriFromObject(t);
    }, r.prototype.getHash = function() {
      return r.parseHash(this.urlString);
    }, r.prototype.getUrlComponents = function() {
      var e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"), t = this.urlString.match(e);
      if (!t)
        throw we.createUrlParseError("Given url string: " + this.urlString);
      var n = {
        Protocol: t[1],
        HostNameAndPort: t[4],
        AbsolutePath: t[5],
        QueryString: t[7]
      }, o = n.AbsolutePath.split("/");
      return o = o.filter(function(i) {
        return i && i.length > 0;
      }), n.PathSegments = o, !H.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
    }, r.getDomainFromUrl = function(e) {
      var t = RegExp("^([^:/?#]+://)?([^/?#]*)"), n = e.match(t);
      if (!n)
        throw we.createUrlParseError("Given url string: " + e);
      return n[2];
    }, r.getAbsoluteUrl = function(e, t) {
      if (e[0] === S.FORWARD_SLASH) {
        var n = new r(t), o = n.getUrlComponents();
        return o.Protocol + "//" + o.HostNameAndPort + e;
      }
      return e;
    }, r.parseHash = function(e) {
      var t = e.indexOf("#"), n = e.indexOf("#/");
      return n > -1 ? e.substring(n + 2) : t > -1 ? e.substring(t + 1) : S.EMPTY_STRING;
    }, r.parseQueryString = function(e) {
      var t = e.indexOf("?"), n = e.indexOf("/?");
      return n > -1 ? e.substring(n + 2) : t > -1 ? e.substring(t + 1) : S.EMPTY_STRING;
    }, r.constructAuthorityUriFromObject = function(e) {
      return new r(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"));
    }, r.getDeserializedHash = function(e) {
      if (H.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = H.queryStringToObject(H.isEmpty(t) ? e : t);
      if (!n)
        throw j.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (H.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = H.queryStringToObject(H.isEmpty(t) ? e : t);
      if (!n)
        throw j.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (H.isEmpty(e) || e.indexOf("=") < 0)
        return !1;
      var t = r.getDeserializedHash(e);
      return !!(t.code || t.error_description || t.error || t.state);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var I;
(function(r) {
  r.AcquireTokenByCode = "acquireTokenByCode", r.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", r.AcquireTokenSilent = "acquireTokenSilent", r.AcquireTokenSilentAsync = "acquireTokenSilentAsync", r.AcquireTokenPopup = "acquireTokenPopup", r.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", r.CryptoOptsSignJwt = "cryptoOptsSignJwt", r.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", r.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", r.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", r.SsoSilent = "ssoSilent", r.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", r.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", r.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", r.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", r.BrokerHandhshake = "brokerHandshake", r.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", r.AcquireTokenByBroker = "acquireTokenByBroker", r.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", r.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", r.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", r.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", r.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", r.AcquireTokenFromCache = "acquireTokenFromCache", r.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", r.InitializeBaseRequest = "initializeBaseRequest", r.InitializeSilentRequest = "initializeSilentRequest", r.InitializeClientApplication = "initializeClientApplication", r.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", r.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", r.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", r.SilentHandlerLoadFrame = "silentHandlerLoadFrame", r.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", r.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", r.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", r.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", r.GetAuthCodeUrl = "getAuthCodeUrl", r.HandleCodeResponseFromServer = "handleCodeResponseFromServer", r.HandleCodeResponseFromHash = "handleCodeResponseFromHash", r.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", r.AuthClientAcquireToken = "authClientAcquireToken", r.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", r.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", r.AuthClientCreateQueryString = "authClientCreateQueryString", r.PopTokenGenerateCnf = "popTokenGenerateCnf", r.PopTokenGenerateKid = "popTokenGenerateKid", r.HandleServerTokenResponse = "handleServerTokenResponse", r.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", r.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", r.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", r.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", r.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", r.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", r.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", r.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", r.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", r.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", r.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", r.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", r.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", r.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", r.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", r.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", r.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", r.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(I || (I = {}));
var Eo;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(Eo || (Eo = {}));
var Lf = /* @__PURE__ */ new Set([
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
/*! @azure/msal-common v13.3.3 2024-06-06 */
var $i;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})($i || ($i = {}));
var en = (
  /** @class */
  function() {
    function r(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return r.prototype.generateCnf = function(e) {
      var t, n;
      return re(this, void 0, void 0, function() {
        var o, i, s;
        return ne(this, function(a) {
          switch (a.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.PopTokenGenerateCnf, e.correlationId), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(I.PopTokenGenerateKid, e.correlationId), [4, this.generateKid(e)];
            case 1:
              return o = a.sent(), i = this.cryptoUtils.base64Encode(JSON.stringify(o)), s = {
                kid: o.kid,
                reqCnfString: i
              }, [4, this.cryptoUtils.hashString(i)];
            case 2:
              return [2, (s.reqCnfHash = a.sent(), s)];
          }
        });
      });
    }, r.prototype.generateKid = function(e) {
      var t;
      return re(this, void 0, void 0, function() {
        var n;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: $i.SW
              }];
          }
        });
      });
    }, r.prototype.signPopToken = function(e, t, n) {
      return re(this, void 0, void 0, function() {
        return ne(this, function(o) {
          return [2, this.signPayload(e, t, n)];
        });
      });
    }, r.prototype.signPayload = function(e, t, n, o) {
      return re(this, void 0, void 0, function() {
        var i, s, a, c, l, u;
        return ne(this, function(d) {
          switch (d.label) {
            case 0:
              return i = n.resourceRequestMethod, s = n.resourceRequestUri, a = n.shrClaims, c = n.shrNonce, l = s ? new he(s) : void 0, u = l == null ? void 0 : l.getUrlComponents(), [4, this.cryptoUtils.signJwt(ge({ at: e, ts: ht.nowSeconds(), m: i == null ? void 0 : i.toUpperCase(), u: u == null ? void 0 : u.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: u == null ? void 0 : u.AbsolutePath, q: u != null && u.QueryString ? [[], u.QueryString] : void 0, client_claims: a || void 0 }, o), t, n.correlationId)];
            case 1:
              return [2, d.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ki = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(e, t) {
      var n = [
        Bi,
        e,
        t
      ];
      return n.join(Ae.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(e, t, n) {
      var o = new r();
      return o.clientId = e, o.environment = t, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(Bi) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Df = (
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
/*! @azure/msal-common v13.3.3 2024-06-06 */
var So = (
  /** @class */
  function() {
    function r(e, t, n, o, i, s, a) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = i, this.persistencePlugin = s, this.performanceClient = a;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(e, t, n) {
      if (!e.state || !t)
        throw e.state ? j.createStateNotFoundError("Cached State") : j.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw j.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw wt.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new wt(e.error || S.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING) : new _r(e.error || S.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && bo(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (wt.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new wt(e.error, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new _r(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, i, s, a, c, l) {
      var u;
      return re(this, void 0, void 0, function() {
        var d, h, f, p, g, m, b;
        return ne(this, function(C) {
          switch (C.label) {
            case 0:
              if ((u = this.performanceClient) === null || u === void 0 || u.addQueueMeasurement(I.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (d = new Ot(e.id_token || S.EMPTY_STRING, this.cryptoObj), i && !H.isEmpty(i.nonce) && d.claims.nonce !== i.nonce)
                  throw j.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (h = d.claims.auth_time, !h)
                    throw j.createAuthTimeNotFoundError();
                  Ot.checkMaxAge(h, o.maxAge);
                }
              }
              this.homeAccountIdentifier = Fe.generateHomeAccountId(e.client_info || S.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, d == null ? void 0 : d.claims), i && i.state && (f = Bt.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0, p = this.generateCacheRecord(e, t, n, o, d, s, i), C.label = 1;
            case 1:
              return C.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), g = new Df(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(g)]) : [3, 3];
            case 2:
              C.sent(), C.label = 3;
            case 3:
              return a && !c && p.account && (m = p.account.generateAccountKey(), b = this.cacheStorage.getAccount(m), !b) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, d, f, void 0, l)]) : [4, this.cacheStorage.saveCacheRecord(p)];
            case 4:
              return C.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && g ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(g)]) : [3, 7];
            case 6:
              C.sent(), C.label = 7;
            case 7:
              return [
                7
                /*endfinally*/
              ];
            case 8:
              return [2, r.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, d, f, e, l)];
          }
        });
      });
    }, r.prototype.generateCacheRecord = function(e, t, n, o, i, s, a) {
      var c = t.getPreferredCache();
      if (H.isEmpty(c))
        throw j.createInvalidCacheEnvironmentError();
      var l, u;
      !H.isEmpty(e.id_token) && i && (l = er.createIdTokenEntity(this.homeAccountIdentifier, c, e.id_token || S.EMPTY_STRING, this.clientId, i.claims.tid || S.EMPTY_STRING), u = Fe.createAccount({
        homeAccountId: this.homeAccountIdentifier,
        idTokenClaims: i.claims,
        clientInfo: e.client_info || S.EMPTY_STRING,
        cloudGraphHostName: a == null ? void 0 : a.cloud_graph_host_name,
        msGraphHost: a == null ? void 0 : a.msgraph_host
      }, t));
      var d = null;
      if (!H.isEmpty(e.access_token)) {
        var h = e.scope ? De.fromString(e.scope) : new De(o.scopes || []), f = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, p = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, g = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, m = n + f, b = m + p, C = g && g > 0 ? n + g : void 0;
        d = tr.createAccessTokenEntity(this.homeAccountIdentifier, c, e.access_token || S.EMPTY_STRING, this.clientId, i ? i.claims.tid || S.EMPTY_STRING : t.tenant, h.printScopes(), m, b, this.cryptoObj, C, e.token_type, s, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var v = null;
      H.isEmpty(e.refresh_token) || (v = Vr.createRefreshTokenEntity(this.homeAccountIdentifier, c, e.refresh_token || S.EMPTY_STRING, this.clientId, e.foci, s));
      var w = null;
      return H.isEmpty(e.foci) || (w = Ki.createAppMetadataEntity(this.clientId, c, e.foci)), new Qr(u, l, d, v, w);
    }, r.generateAuthenticationResult = function(e, t, n, o, i, s, a, c, l) {
      var u, d, h;
      return re(this, void 0, void 0, function() {
        var f, p, g, m, b, C, v, w, E, T, A;
        return ne(this, function(_) {
          switch (_.label) {
            case 0:
              if (f = S.EMPTY_STRING, p = [], g = null, b = S.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== ye.POP)
                return [3, 2];
              if (C = new en(e), v = n.accessToken, w = v.secret, E = v.keyId, !E)
                throw j.createKeyIdMissingError();
              return [4, C.signPopToken(w, E, i)];
            case 1:
              return f = _.sent(), [3, 3];
            case 2:
              f = n.accessToken.secret, _.label = 3;
            case 3:
              p = De.fromString(n.accessToken.target).asArray(), g = new Date(Number(n.accessToken.expiresOn) * 1e3), m = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), _.label = 4;
            case 4:
              return n.appMetadata && (b = n.appMetadata.familyId === _n ? _n : S.EMPTY_STRING), T = (s == null ? void 0 : s.claims.oid) || (s == null ? void 0 : s.claims.sub) || S.EMPTY_STRING, A = (s == null ? void 0 : s.claims.tid) || S.EMPTY_STRING, c != null && c.spa_accountid && n.account && (n.account.nativeAccountId = c == null ? void 0 : c.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: T,
                tenantId: A,
                scopes: p,
                account: n.account ? n.account.getAccountInfo() : null,
                idToken: s ? s.rawToken : S.EMPTY_STRING,
                idTokenClaims: s ? s.claims : {},
                accessToken: f,
                fromCache: o,
                expiresOn: g,
                correlationId: i.correlationId,
                requestId: l || S.EMPTY_STRING,
                extExpiresOn: m,
                familyId: b,
                tokenType: ((u = n.accessToken) === null || u === void 0 ? void 0 : u.tokenType) || S.EMPTY_STRING,
                state: a ? a.userRequestState : S.EMPTY_STRING,
                cloudGraphHostName: ((d = n.account) === null || d === void 0 ? void 0 : d.cloudGraphHostName) || S.EMPTY_STRING,
                msGraphHost: ((h = n.account) === null || h === void 0 ? void 0 : h.msGraphHost) || S.EMPTY_STRING,
                code: c == null ? void 0 : c.spa_code,
                fromNativeBroker: !1
              }];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Nl = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var n, o;
      return re(this, void 0, void 0, function() {
        var i;
        return ne(this, function(s) {
          switch (s.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.GetAuthCodeUrl, t.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.AuthClientCreateQueryString, t.correlationId), [4, this.createAuthCodeUrlQueryString(t)];
            case 1:
              return i = s.sent(), [2, he.appendQueryString(this.authority.authorizationEndpoint, i)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, n) {
      var o, i, s, a, c, l;
      return re(this, void 0, void 0, function() {
        var u, d, h, f, p, g, m = this;
        return ne(this, function(b) {
          switch (b.label) {
            case 0:
              if (!t || !t.code)
                throw j.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.AuthClientAcquireToken, t.correlationId), u = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), d = ht.nowSeconds(), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return h = b.sent(), f = (a = h.headers) === null || a === void 0 ? void 0 : a[ot.X_MS_REQUEST_ID], p = (c = h.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_HTTP_VERSION], p && (u == null || u.addStaticFields({
                httpVerAuthority: p
              })), g = new So(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), g.validateTokenResponse(h.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(I.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(h.body, this.authority, d, t, n, void 0, void 0, void 0, f).then(function(C) {
                return u == null || u.endMeasurement({
                  success: !0
                }), C;
              }).catch(function(C) {
                throw m.logger.verbose("Error in fetching token in ACC", t.correlationId), u == null || u.endMeasurement({
                  errorCode: C.errorCode,
                  subErrorCode: C.subError,
                  success: !1
                }), C;
              })];
          }
        });
      });
    }, e.prototype.handleFragmentResponse = function(t, n) {
      var o = new So(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), i = new he(t), s = he.getDeserializedHash(i.getHash());
      if (o.validateServerAuthorizationCodeResponse(s, n, this.cryptoUtils), !s.code)
        throw j.createNoAuthCodeInServerResponseError();
      return ge(ge({}, s), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: s.code
      });
    }, e.prototype.getLogoutUri = function(t) {
      if (!t)
        throw we.createEmptyLogoutRequestError();
      var n = this.createLogoutUrlQueryString(t);
      return he.appendQueryString(this.authority.endSessionEndpoint, n);
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, i;
      return re(this, void 0, void 0, function() {
        var s, a, c, l, u, d, h;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.AuthClientExecuteTokenRequest, n.correlationId), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.AuthClientCreateTokenRequestBody, n.correlationId), s = this.createTokenQueryParameters(n), a = he.appendQueryString(t.tokenEndpoint, s), [4, this.createTokenRequestBody(n)];
            case 1:
              if (c = f.sent(), l = void 0, n.clientInfo)
                try {
                  u = bo(n.clientInfo, this.cryptoUtils), l = {
                    credential: "" + u.uid + Ae.CLIENT_INFO_SEPARATOR + u.utid,
                    type: rt.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              return d = this.createTokenRequestHeaders(l || n.ccsCredential), h = {
                clientId: this.config.authOptions.clientId,
                authority: t.canonicalAuthority,
                scopes: n.scopes,
                claims: n.claims,
                authenticationScheme: n.authenticationScheme,
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                sshKid: n.sshKid
              }, [2, this.executePostToTokenEndpoint(a, c, d, h)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o;
      return re(this, void 0, void 0, function() {
        var i, s, a, c, l, u, d, d, h;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.AuthClientCreateTokenRequestBody, t.correlationId), i = new kn(), i.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? i.addRedirectUri(t.redirectUri) : yr.validateRedirectUri(t.redirectUri), i.addScopes(t.scopes), i.addAuthorizationCode(t.code), i.addLibraryInfo(this.config.libraryInfo), i.addApplicationTelemetry(this.config.telemetry.application), i.addThrottling(), this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && i.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (s = this.config.clientCredentials.clientAssertion, i.addClientAssertion(s.assertion), i.addClientAssertionType(s.assertionType)), i.addGrantType(yo.AUTHORIZATION_CODE_GRANT), i.addClientInfo(), t.authenticationScheme !== ye.POP ? [3, 2] : (a = new en(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.PopTokenGenerateCnf, t.correlationId), [4, a.generateCnf(t)]);
            case 1:
              return c = f.sent(), i.addPopToken(c.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ye.SSH)
                if (t.sshJwk)
                  i.addSshJwk(t.sshJwk);
                else
                  throw we.createMissingSshJwkError();
              f.label = 3;
            case 3:
              if (l = t.correlationId || this.config.cryptoInterface.createNewGuid(), i.addCorrelationId(l), (!H.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities), u = void 0, t.clientInfo)
                try {
                  d = bo(t.clientInfo, this.cryptoUtils), u = {
                    credential: "" + d.uid + Ae.CLIENT_INFO_SEPARATOR + d.utid,
                    type: rt.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              else
                u = t.ccsCredential;
              if (this.config.systemOptions.preventCorsPreflight && u)
                switch (u.type) {
                  case rt.HOME_ACCOUNT_ID:
                    try {
                      d = Gr(u.credential), i.addCcsOid(d);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case rt.UPN:
                    i.addCcsUpn(u.credential);
                    break;
                }
              return t.tokenBodyParameters && i.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[ie.RETURN_SPA_CODE]) && i.addExtraQueryParameters((h = {}, h[ie.RETURN_SPA_CODE] = "1", h)), [2, i.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var n;
      return re(this, void 0, void 0, function() {
        var o, i, s, a, c, l, l, l, u, d;
        return ne(this, function(h) {
          switch (h.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.AuthClientCreateQueryString, t.correlationId), o = new kn(), o.addClientId(this.config.authOptions.clientId), i = zo(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(i), o.addRedirectUri(t.redirectUri), s = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(s), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== He.SELECT_ACCOUNT)
                if (t.sid && t.prompt === He.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (a = this.extractAccountSid(t.account), c = this.extractLoginHint(t.account), c) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(c);
                    try {
                      l = Gr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (a && t.prompt === He.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(a);
                    try {
                      l = Gr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      l = Gr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!H.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== ye.POP ? [3, 2] : (u = new en(this.cryptoUtils), [4, u.generateCnf(t)])) : [3, 2];
            case 1:
              d = h.sent(), o.addPopToken(d.reqCnfString), h.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var n = new kn();
      return t.postLogoutRedirectUri && n.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && n.addCorrelationId(t.correlationId), t.idTokenHint && n.addIdTokenHint(t.idTokenHint), t.state && n.addState(t.state), t.logoutHint && n.addLogoutHint(t.logoutHint), t.extraQueryParameters && n.addExtraQueryParameters(t.extraQueryParameters), n.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, e;
  }(ys)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Pl = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, i, s, a, c, l;
      return re(this, void 0, void 0, function() {
        var u, d, h, f, p, g, m = this;
        return ne(this, function(b) {
          switch (b.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RefreshTokenClientAcquireToken, t.correlationId), u = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), d = ht.nowSeconds(), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return h = b.sent(), f = (s = h.headers) === null || s === void 0 ? void 0 : s[ot.X_MS_HTTP_VERSION], u == null || u.addStaticFields({
                refreshTokenSize: ((a = h.body.refresh_token) === null || a === void 0 ? void 0 : a.length) || 0
              }), f && (u == null || u.addStaticFields({
                httpVerToken: f
              })), p = (c = h.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_REQUEST_ID], g = new So(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), g.validateTokenResponse(h.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(I.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(h.body, this.authority, d, t, void 0, void 0, !0, t.forceCache, p).then(function(C) {
                return u == null || u.endMeasurement({
                  success: !0
                }), C;
              }).catch(function(C) {
                throw m.logger.verbose("Error in fetching refresh token", t.correlationId), u == null || u.endMeasurement({
                  errorCode: C.errorCode,
                  subErrorCode: C.subError,
                  success: !1
                }), C;
              })];
          }
        });
      });
    }, e.prototype.acquireTokenByRefreshToken = function(t) {
      var n, o, i, s;
      return re(this, void 0, void 0, function() {
        var a, c, l;
        return ne(this, function(u) {
          if (!t)
            throw we.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw j.createNoAccountInSilentRequestError();
          if (a = this.cacheManager.isAppMetadataFOCI(t.account.environment), a)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (d) {
              if (c = d instanceof wt && d.errorCode === Wr.noTokensFoundError.code, l = d instanceof _r && d.errorCode === Qa.INVALID_GRANT_ERROR && d.subError === Qa.CLIENT_MISMATCH_ERROR, c || l)
                return (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw d;
            }
          return (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, n) {
      var o, i, s;
      return re(this, void 0, void 0, function() {
        var a, c, l;
        return ne(this, function(u) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), a = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(I.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", t.correlationId), c = this.cacheManager.getRefreshToken(t.account, n), !c)
            throw a == null || a.discardMeasurement(), wt.createNoTokensFoundError();
          return a == null || a.endMeasurement({
            success: !0
          }), l = ge(ge({}, t), { refreshToken: c.secret, authenticationScheme: t.authenticationScheme || ye.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: rt.HOME_ACCOUNT_ID
          } }), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(l)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, i, s;
      return re(this, void 0, void 0, function() {
        var a, c, l, u, d, h;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(I.RefreshTokenClientExecuteTokenRequest, t.correlationId), a = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(I.RefreshTokenClientExecuteTokenRequest, t.correlationId), (s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RefreshTokenClientCreateTokenRequestBody, t.correlationId), c = this.createTokenQueryParameters(t), l = he.appendQueryString(n.tokenEndpoint, c), [4, this.createTokenRequestBody(t)];
            case 1:
              return u = f.sent(), d = this.createTokenRequestHeaders(t.ccsCredential), h = {
                clientId: this.config.authOptions.clientId,
                authority: n.canonicalAuthority,
                scopes: t.scopes,
                claims: t.claims,
                authenticationScheme: t.authenticationScheme,
                resourceRequestMethod: t.resourceRequestMethod,
                resourceRequestUri: t.resourceRequestUri,
                shrClaims: t.shrClaims,
                sshKid: t.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, d, h).then(function(p) {
                return a == null || a.endMeasurement({
                  success: !0
                }), p;
              }).catch(function(p) {
                throw a == null || a.endMeasurement({
                  success: !1
                }), p;
              })];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o, i;
      return re(this, void 0, void 0, function() {
        var s, a, c, l, u, d, h;
        return ne(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RefreshTokenClientCreateTokenRequestBody, t.correlationId), s = t.correlationId, a = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.BaseClientCreateTokenRequestHeaders, s), c = new kn(), c.addClientId(this.config.authOptions.clientId), c.addScopes(t.scopes), c.addGrantType(yo.REFRESH_TOKEN_GRANT), c.addClientInfo(), c.addLibraryInfo(this.config.libraryInfo), c.addApplicationTelemetry(this.config.telemetry.application), c.addThrottling(), this.serverTelemetryManager && c.addServerTelemetry(this.serverTelemetryManager), c.addCorrelationId(s), c.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && c.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (l = this.config.clientCredentials.clientAssertion, c.addClientAssertion(l.assertion), c.addClientAssertionType(l.assertionType)), t.authenticationScheme !== ye.POP ? [3, 2] : (u = new en(this.cryptoUtils, this.performanceClient), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.PopTokenGenerateCnf, t.correlationId), [4, u.generateCnf(t)]);
            case 1:
              return d = f.sent(), c.addPopToken(d.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ye.SSH)
                if (t.sshJwk)
                  c.addSshJwk(t.sshJwk);
                else
                  throw a == null || a.endMeasurement({
                    success: !1
                  }), we.createMissingSshJwkError();
              f.label = 3;
            case 3:
              if ((!H.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && c.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case rt.HOME_ACCOUNT_ID:
                    try {
                      h = Gr(t.ccsCredential.credential), c.addCcsOid(h);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case rt.UPN:
                    c.addCcsUpn(t.ccsCredential.credential);
                    break;
                }
              return a == null || a.endMeasurement({
                success: !0
              }), [2, c.createQueryString()];
          }
        });
      });
    }, e;
  }(ys)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Uf = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return re(this, void 0, void 0, function() {
        var n, o;
        return ne(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(t)];
            case 1:
              return [2, i.sent()];
            case 2:
              if (n = i.sent(), n instanceof j && n.errorCode === O.tokenRefreshRequired.code)
                return o = new Pl(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
      var n, o, i, s, a;
      return re(this, void 0, void 0, function() {
        var c, l;
        return ne(this, function(u) {
          switch (u.label) {
            case 0:
              if (!t)
                throw we.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(Zt.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), j.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !H.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(Zt.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), j.createRefreshRequiredError();
              if (!t.account)
                throw j.createNoAccountInSilentRequestError();
              if (c = t.authority || this.authority.getPreferredCache(), l = this.cacheManager.readCacheRecord(t.account, t, c), l.accessToken) {
                if (ht.wasClockTurnedBack(l.accessToken.cachedAt) || ht.isTokenExpired(l.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(Zt.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), j.createRefreshRequiredError();
                if (l.accessToken.refreshOn && ht.isTokenExpired(l.accessToken.refreshOn, 0))
                  throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(Zt.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), j.createRefreshRequiredError();
              } else
                throw (i = this.serverTelemetryManager) === null || i === void 0 || i.setCacheOutcome(Zt.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), j.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(l, t)];
            case 1:
              return [2, u.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, n) {
      return re(this, void 0, void 0, function() {
        var o, i;
        return ne(this, function(s) {
          switch (s.label) {
            case 0:
              if (t.idToken && (o = new Ot(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (i = o == null ? void 0 : o.claims.auth_time, !i)
                  throw j.createAuthTimeNotFoundError();
                Ot.checkMaxAge(i, n.maxAge);
              }
              return [4, So.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, s.sent()];
          }
        });
      });
    }, e;
  }(ys)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Hf(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ol = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, Xa = Ol.endpointMetadata, Za = Ol.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.3 2024-06-06 */
var qi = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = ht.nowSeconds() + In.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = ht.nowSeconds() + In.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= ht.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(In.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Ff(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Bf(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var jf = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, i, s;
      return re(this, void 0, void 0, function() {
        var a, c, l, u, d;
        return ne(this, function(h) {
          switch (h.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RegionDiscoveryDetectRegion, this.correlationId), a = e, a)
                return [3, 8];
              c = r.IMDS_OPTIONS, h.label = 1;
            case 1:
              return h.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(S.IMDS_VERSION, c)];
            case 2:
              return l = h.sent(), l.status === zr.httpSuccess && (a = l.body, t.region_source = Jt.IMDS), l.status !== zr.httpBadRequest ? [3, 5] : ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(c)]);
            case 3:
              return u = h.sent(), u ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(I.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(u, c)]) : (t.region_source = Jt.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              d = h.sent(), d.status === zr.httpSuccess && (a = d.body, t.region_source = Jt.IMDS), h.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return h.sent(), t.region_source = Jt.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Jt.ENVIRONMENT_VARIABLE, h.label = 9;
            case 9:
              return a || (t.region_source = Jt.FAILED_AUTO_DETECTION), [2, a || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(e, t) {
      var n;
      return re(this, void 0, void 0, function() {
        return ne(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(I.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(S.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, S.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(e) {
      var t;
      return re(this, void 0, void 0, function() {
        var n;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(S.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return n = o.sent(), n.status === zr.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Mn = (
  /** @class */
  function() {
    function r(e, t, n, o, i, s, a) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = s, this.correlationId = a, this.regionDiscovery = new jf(t, this.performanceClient, this.correlationId);
    }
    return r.prototype.getAuthorityType = function(e) {
      if (e.HostNameAndPort.endsWith(S.CIAM_AUTH_URL))
        return We.Ciam;
      var t = e.PathSegments;
      if (t.length)
        switch (t[0].toLowerCase()) {
          case S.ADFS:
            return We.Adfs;
          case S.DSTS:
            return We.Dsts;
        }
      return We.Default;
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
        this._canonicalAuthority = new he(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
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
        throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw j.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === We.Default && this.protocolMode === Zr.AAD;
    }, r.prototype.replaceTenant = function(e) {
      return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, r.prototype.replacePath = function(e) {
      var t = this, n = e, o = new he(this.metadata.canonical_authority), i = o.getUrlComponents(), s = i.PathSegments, a = this.canonicalAuthorityUrlComponents.PathSegments;
      return a.forEach(function(c, l) {
        var u = s[l];
        if (l === 0 && t.canReplaceTenant(i)) {
          var d = new he(t.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          u !== d && (t.logger.verbose("Replacing tenant domain name " + u + " with id " + d), u = d);
        }
        c !== u && (n = n.replace("/" + u + "/", "/" + c + "/"));
      }), this.replaceTenant(n);
    }, Object.defineProperty(r.prototype, "defaultOpenIdConfigurationEndpoint", {
      /**
       * The default open id configuration endpoint for any canonical authority.
       */
      get: function() {
        return this.authorityType === We.Adfs || this.authorityType === We.Dsts || this.protocolMode === Zr.OIDC ? this.canonicalAuthority + ".well-known/openid-configuration" : this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.discoveryComplete = function() {
      return !!this.metadata;
    }, r.prototype.resolveEndpointsAsync = function() {
      var e, t, n;
      return re(this, void 0, void 0, function() {
        var o, i, s, a;
        return ne(this, function(c) {
          switch (c.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(I.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new qi(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(I.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return i = c.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(I.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
            case 2:
              return s = c.sent(), i !== dt.CACHE && s !== dt.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), a = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(a, o), this.metadata = o, [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.updateEndpointMetadata = function(e) {
      var t, n, o, i, s, a;
      return re(this, void 0, void 0, function() {
        var c, l;
        return ne(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.AuthorityUpdateEndpointMetadata, this.correlationId), c = this.getEndpointMetadataFromConfig(), c ? (e.updateEndpointMetadata(c, !1), [2, dt.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, dt.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(I.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return c = u.sent(), c ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(I.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(c)]) : [3, 3] : [3, 4];
            case 2:
              c = u.sent(), u.label = 3;
            case 3:
              return e.updateEndpointMetadata(c, !0), [2, dt.NETWORK];
            case 4:
              return l = this.getEndpointMetadataFromHardcodedValues(), l && !this.authorityOptions.skipAuthorityMetadataCache ? !((s = this.authorityOptions.azureRegionConfiguration) === null || s === void 0) && s.azureRegion ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(I.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(l)]) : [3, 6] : [3, 7];
            case 5:
              l = u.sent(), u.label = 6;
            case 6:
              return e.updateEndpointMetadata(l, !1), [2, dt.HARDCODED_VALUES];
            case 7:
              throw j.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
          }
        });
      });
    }, r.prototype.isAuthoritySameType = function(e) {
      var t = new he(e.canonical_authority), n = t.getUrlComponents().PathSegments;
      return n.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }, r.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata)
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch {
          throw we.createInvalidAuthorityMetadataError();
        }
      return null;
    }, r.prototype.getEndpointMetadataFromNetwork = function() {
      var e;
      return re(this, void 0, void 0, function() {
        var t, n;
        return ne(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(I.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return n = o.sent(), [2, Hf(n.body) ? n.body : null];
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
      return this.canonicalAuthority in Xa ? Xa[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, i;
      return re(this, void 0, void 0, function() {
        var s, a;
        return ne(this, function(c) {
          switch (c.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), s = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, s ? s !== S.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = Rn.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(I.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((i = this.authorityOptions.azureRegionConfiguration) === null || i === void 0 ? void 0 : i.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (a = c.sent(), a)
                return this.regionDiscoveryMetadata.region_outcome = Rn.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = a, [2, r.replaceWithRegionalInformation(e, a)];
              this.regionDiscoveryMetadata.region_outcome = Rn.AUTO_DETECTION_REQUESTED_FAILED, c.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, r.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, n;
      return re(this, void 0, void 0, function() {
        var o, i, s;
        return ne(this, function(a) {
          switch (a.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(I.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || S.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || S.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || S.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, dt.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), i = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !i ? (this.logger.verbose("Found metadata in the cache."), [2, dt.CACHE]) : (i && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(I.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = a.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, dt.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), s = this.getCloudDiscoveryMetadataFromHarcodedValues(), s && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(s, !1), [2, dt.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), we.createUntrustedAuthorityError();
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromConfig = function() {
      if (this.authorityType === We.Ciam)
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
          throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), we.createInvalidCloudDiscoveryMetadataError();
        }
      }
      return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
    }, r.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var e;
      return re(this, void 0, void 0, function() {
        var t, n, o, i, s, a, c, l;
        return ne(this, function(u) {
          switch (u.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(I.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + S.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (i = u.sent(), s = void 0, a = void 0, Ff(i.body))
                s = i.body, a = s.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + s.tenant_discovery_endpoint);
              else if (Bf(i.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + i.status), s = i.body, s.error === S.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + s.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + s.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), a = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(a, this.hostnameAndPort), [3, 4];
            case 3:
              return c = u.sent(), c instanceof z ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ` + c.errorCode + `
Error Description: ` + c.errorMessage) : (l = c, this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ` + l.name + `
Error Description: ` + l.message)), [2, null];
            case 4:
              return o || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), o = r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), [2, o];
          }
        });
      });
    }, r.prototype.getCloudDiscoveryMetadataFromHarcodedValues = function() {
      return this.canonicalAuthority in Za ? Za[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return he.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== xn.None) {
        var o = t.tenant ? t.tenant : S.DEFAULT_COMMON_TENANT;
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
      throw j.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, r.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, r.isPublicCloudAuthority = function(e) {
      return S.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, r.buildRegionalAuthorityString = function(e, t, n) {
      var o = new he(e);
      o.validateAsUri();
      var i = o.getUrlComponents(), s = t + "." + i.HostNameAndPort;
      this.isPublicCloudAuthority(i.HostNameAndPort) && (s = t + "." + S.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var a = he.constructAuthorityUriFromObject(ge(ge({}, o.getUrlComponents()), { HostNameAndPort: s })).urlString;
      return n ? a + "?" + n : a;
    }, r.replaceWithRegionalInformation = function(e, t) {
      return e.authorization_endpoint = r.buildRegionalAuthorityString(e.authorization_endpoint, t), e.token_endpoint = r.buildRegionalAuthorityString(e.token_endpoint, t, S.REGIONAL_AUTH_NON_MSI_QUERY_STRING), e.end_session_endpoint && (e.end_session_endpoint = r.buildRegionalAuthorityString(e.end_session_endpoint, t)), e;
    }, r.transformCIAMAuthority = function(e) {
      var t = e.endsWith(S.FORWARD_SLASH) ? e : "" + e + S.FORWARD_SLASH, n = new he(e), o = n.getUrlComponents();
      if (o.PathSegments.length === 0 && o.HostNameAndPort.endsWith(S.CIAM_AUTH_URL)) {
        var i = o.HostNameAndPort.split(".")[0];
        t = "" + t + i + S.AAD_TENANT_DOMAIN_SUFFIX;
      }
      return t;
    }, r.reservedTenantDomains = /* @__PURE__ */ new Set([
      "{tenant}",
      "{tenantid}",
      wr.COMMON,
      wr.CONSUMERS,
      wr.ORGANIZATIONS
    ]), r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var To = (
  /** @class */
  function() {
    function r() {
    }
    return r.createDiscoveredInstance = function(e, t, n, o, i, s, a) {
      return re(this, void 0, void 0, function() {
        var c, l, u;
        return ne(this, function(d) {
          switch (d.label) {
            case 0:
              s == null || s.addQueueMeasurement(I.AuthorityFactoryCreateDiscoveredInstance, a), c = Mn.transformCIAMAuthority(e), l = r.createInstance(c, t, n, o, i, s, a), d.label = 1;
            case 1:
              return d.trys.push([1, 3, , 4]), s == null || s.setPreQueueTime(I.AuthorityResolveEndpointsAsync, a), [4, l.resolveEndpointsAsync()];
            case 2:
              return d.sent(), [2, l];
            case 3:
              throw u = d.sent(), j.createEndpointDiscoveryIncompleteError(u);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(e, t, n, o, i, s, a) {
      if (H.isEmpty(e))
        throw we.createUrlEmptyError();
      return new Mn(e, t, n, o, i, s, a);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _o = (
  /** @class */
  function() {
    function r() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return r.isServerTelemetryEntity = function(e, t) {
      var n = e.indexOf(Pe.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ec = (
  /** @class */
  function() {
    function r() {
    }
    return r.isThrottlingEntity = function(e, t) {
      var n = !1;
      e && (n = e.indexOf(An.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var $f = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(z.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(z.createUnexpectedError(r));
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ro = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, tc = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(ro.missingKidError.code, ro.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(ro.missingAlgError.code, ro.missingAlgError.desc);
    }, e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Kf = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw tc.createMissingKidError();
      if (!e.alg)
        throw tc.createMissingAlgError();
      var t = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || ji.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var qf = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = Zt.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || S.EMPTY_STRING, this.wrapperVer = e.wrapperVer || S.EMPTY_STRING, this.telemetryCacheKey = Pe.CACHE_KEY + Ae.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Pe.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Pe.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(Pe.VALUE_SEPARATOR);
      return [Pe.SCHEMA_VERSION, o, t].join(Pe.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(Pe.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Pe.VALUE_SEPARATOR), i = e.errors.length, s = t < i ? Pe.OVERFLOW_TRUE : Pe.OVERFLOW_FALSE, a = [i, s].join(Pe.VALUE_SEPARATOR);
      return [Pe.SCHEMA_VERSION, e.cacheHits, n, o, a].join(Pe.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Pe.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), H.isEmpty(e.subError) ? H.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Pe.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new _o(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new _o();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(e) {
      var t, n = 0, o = 0, i = e.errors.length;
      for (t = 0; t < i; t++) {
        var s = e.failedRequests[2 * t] || S.EMPTY_STRING, a = e.failedRequests[2 * t + 1] || S.EMPTY_STRING, c = e.errors[t] || S.EMPTY_STRING;
        if (o += s.toString().length + a.toString().length + c.length + 3, o < Pe.MAX_LAST_HEADER_BYTES)
          n += 1;
        else
          break;
      }
      return n;
    }, r.prototype.getRegionDiscoveryFields = function() {
      var e = [];
      return e.push(this.regionUsed || S.EMPTY_STRING), e.push(this.regionSource || S.EMPTY_STRING), e.push(this.regionOutcome || S.EMPTY_STRING), e.join(",");
    }, r.prototype.updateRegionDiscoveryMetadata = function(e) {
      this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome;
    }, r.prototype.setCacheOutcome = function(e) {
      this.cacheOutcome = e;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xl = (
  /** @class */
  function() {
    function r(e, t, n, o, i, s) {
      this.authority = t, this.libraryName = o, this.libraryVersion = i, this.applicationTelemetry = s, this.clientId = e, this.logger = n, this.callbacks = /* @__PURE__ */ new Map(), this.eventsByCorrelationId = /* @__PURE__ */ new Map(), this.queueMeasurements = /* @__PURE__ */ new Map(), this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    }
    return r.prototype.startPerformanceMeasurement = function(e, t) {
      return {};
    }, r.prototype.startPerformanceMeasuremeant = function(e, t) {
      return {};
    }, r.prototype.getIntFields = function() {
      return Lf;
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
      var i = { eventName: e, queueTime: n, manuallyCompleted: o }, s = this.queueMeasurements.get(t);
      if (s)
        s.push(i), this.queueMeasurements.set(t, s);
      else {
        this.logger.trace("PerformanceClient.addQueueMeasurement: adding correlationId " + t + " to queue measurements");
        var a = [i];
        this.queueMeasurements.set(t, a);
      }
      this.preQueueTimeByCorrelationId.delete(t);
    }, r.prototype.startMeasurement = function(e, t) {
      var n = this, o, i, s = t || this.generateId();
      t || this.logger.info("PerformanceClient: No correlation id provided for " + e + ", generating", s), this.logger.trace("PerformanceClient: Performance measurement started for " + e, s);
      var a = this.startPerformanceMeasuremeant(e, s);
      a.startMeasurement();
      var c = {
        eventId: this.generateId(),
        status: Eo.InProgress,
        authority: this.authority,
        libraryName: this.libraryName,
        libraryVersion: this.libraryVersion,
        clientId: this.clientId,
        name: e,
        startTimeMs: Date.now(),
        correlationId: s,
        appName: (o = this.applicationTelemetry) === null || o === void 0 ? void 0 : o.appName,
        appVersion: (i = this.applicationTelemetry) === null || i === void 0 ? void 0 : i.appVersion
      };
      return this.cacheEventByCorrelationId(c), {
        endMeasurement: function(l) {
          return n.endMeasurement(ge(ge({}, c), l), a);
        },
        discardMeasurement: function() {
          return n.discardMeasurements(c.correlationId);
        },
        addStaticFields: function(l) {
          return n.addStaticFields(l, c.correlationId);
        },
        increment: function(l) {
          return n.increment(l, c.correlationId);
        },
        measurement: a,
        event: c
      };
    }, r.prototype.endMeasurement = function(e, t) {
      var n = this, o, i, s = this.eventsByCorrelationId.get(e.correlationId);
      if (!s)
        return this.logger.trace("PerformanceClient: Measurement not found for " + e.eventId, e.correlationId), null;
      var a = e.eventId === s.eventId, c = {
        totalQueueTime: 0,
        totalQueueCount: 0,
        manuallyCompletedCount: 0
      };
      a ? (c = this.getQueueInfo(e.correlationId), this.discardCache(s.correlationId)) : (o = s.incompleteSubMeasurements) === null || o === void 0 || o.delete(e.eventId), t == null || t.endMeasurement();
      var l = t == null ? void 0 : t.flushMeasurement();
      if (!l)
        return this.logger.trace("PerformanceClient: Performance measurement not taken", s.correlationId), null;
      if (this.logger.trace("PerformanceClient: Performance measurement ended for " + e.name + ": " + l + " ms", e.correlationId), !a)
        return s[e.name + "DurationMs"] = Math.floor(l), ge({}, s);
      var u = ge(ge({}, s), e), d = 0;
      return (i = u.incompleteSubMeasurements) === null || i === void 0 || i.forEach(function(h) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + h.name + " found for " + e.name, u.correlationId), d++;
      }), u.incompleteSubMeasurements = void 0, u = ge(ge({}, u), { durationMs: Math.round(l), queuedTimeMs: c.totalQueueTime, queuedCount: c.totalQueueCount, queuedManuallyCompletedCount: c.manuallyCompletedCount, status: Eo.Completed, incompleteSubsCount: d }), this.truncateIntegralFields(u, this.getIntFields()), this.emitEvents([u], e.correlationId), u;
    }, r.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var n = this.eventsByCorrelationId.get(t);
      n ? this.eventsByCorrelationId.set(t, ge(ge({}, n), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
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
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, ge({}, e)));
    }, r.prototype.getQueueInfo = function(e) {
      var t = this.queueMeasurements.get(e);
      t || this.logger.trace("PerformanceClient: no queue measurements found for for correlationId: " + e);
      var n = 0, o = 0, i = 0;
      return t == null || t.forEach(function(s) {
        n += s.queueTime, o++, i += s.manuallyCompleted ? 1 : 0;
      }), {
        totalQueueTime: n,
        totalQueueCount: o,
        manuallyCompletedCount: i
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
      this.logger.verbose("PerformanceClient: Emitting performance events", t), this.callbacks.forEach(function(o, i) {
        n.logger.trace("PerformanceClient: Emitting event to callback " + i, t), o.apply(null, [e]);
      });
    }, r.prototype.truncateIntegralFields = function(e, t) {
      t.forEach(function(n) {
        n in e && typeof e[n] == "number" && (e[n] = Math.floor(e[n]));
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var rc = (
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
), zf = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new rc();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new rc();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(xl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var P = {
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
}, M = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return Object.setPrototypeOf(o, e.prototype), o.name = "BrowserAuthError", o;
    }
    return e.createPkceNotGeneratedError = function(t) {
      return new e(P.pkceNotGenerated.code, P.pkceNotGenerated.desc + " Detail:" + t);
    }, e.createCryptoNotAvailableError = function(t) {
      return new e(P.cryptoDoesNotExist.code, P.cryptoDoesNotExist.desc + " Detail:" + t);
    }, e.createHttpMethodNotImplementedError = function(t) {
      return new e(P.httpMethodNotImplementedError.code, P.httpMethodNotImplementedError.desc + " Given Method: " + t);
    }, e.createEmptyNavigationUriError = function() {
      return new e(P.emptyNavigateUriError.code, P.emptyNavigateUriError.desc);
    }, e.createEmptyHashError = function(t) {
      return new e(P.hashEmptyError.code, P.hashEmptyError.desc + " Given Url: " + t);
    }, e.createHashDoesNotContainStateError = function() {
      return new e(P.hashDoesNotContainStateError.code, P.hashDoesNotContainStateError.desc);
    }, e.createHashDoesNotContainKnownPropertiesError = function() {
      return new e(P.hashDoesNotContainKnownPropertiesError.code, P.hashDoesNotContainKnownPropertiesError.desc);
    }, e.createUnableToParseStateError = function() {
      return new e(P.unableToParseStateError.code, P.unableToParseStateError.desc);
    }, e.createStateInteractionTypeMismatchError = function() {
      return new e(P.stateInteractionTypeMismatchError.code, P.stateInteractionTypeMismatchError.desc);
    }, e.createInteractionInProgressError = function() {
      return new e(P.interactionInProgress.code, P.interactionInProgress.desc);
    }, e.createPopupWindowError = function(t) {
      var n = P.popupWindowError.desc;
      return n = H.isEmpty(t) ? n : n + " Details: " + t, new e(P.popupWindowError.code, n);
    }, e.createEmptyWindowCreatedError = function() {
      return new e(P.emptyWindowError.code, P.emptyWindowError.desc);
    }, e.createUserCancelledError = function() {
      return new e(P.userCancelledError.code, P.userCancelledError.desc);
    }, e.createMonitorPopupTimeoutError = function() {
      return new e(P.monitorPopupTimeoutError.code, P.monitorPopupTimeoutError.desc);
    }, e.createMonitorIframeTimeoutError = function() {
      return new e(P.monitorIframeTimeoutError.code, P.monitorIframeTimeoutError.desc);
    }, e.createRedirectInIframeError = function(t) {
      return new e(P.redirectInIframeError.code, P.redirectInIframeError.desc + " (window.parent !== window) => " + t);
    }, e.createBlockReloadInHiddenIframeError = function() {
      return new e(P.blockTokenRequestsInHiddenIframeError.code, P.blockTokenRequestsInHiddenIframeError.desc);
    }, e.createBlockAcquireTokenInPopupsError = function() {
      return new e(P.blockAcquireTokenInPopupsError.code, P.blockAcquireTokenInPopupsError.desc);
    }, e.createIframeClosedPrematurelyError = function() {
      return new e(P.iframeClosedPrematurelyError.code, P.iframeClosedPrematurelyError.desc);
    }, e.createSilentLogoutUnsupportedError = function() {
      return new e(P.silentLogoutUnsupportedError.code, P.silentLogoutUnsupportedError.desc);
    }, e.createNoAccountError = function() {
      return new e(P.noAccountError.code, P.noAccountError.desc);
    }, e.createSilentPromptValueError = function(t) {
      return new e(P.silentPromptValueError.code, P.silentPromptValueError.desc + " Given value: " + t);
    }, e.createUnableToParseTokenRequestCacheError = function() {
      return new e(P.unableToParseTokenRequestCacheError.code, P.unableToParseTokenRequestCacheError.desc);
    }, e.createNoTokenRequestCacheError = function() {
      return new e(P.noTokenRequestCacheError.code, P.noTokenRequestCacheError.desc);
    }, e.createAuthRequestNotSetError = function() {
      return new e(P.authRequestNotSet.code, P.authRequestNotSet.desc);
    }, e.createNoCachedAuthorityError = function() {
      return new e(P.noCachedAuthorityError.code, P.noCachedAuthorityError.desc);
    }, e.createInvalidCacheTypeError = function() {
      return new e(P.invalidCacheType.code, "" + P.invalidCacheType.desc);
    }, e.createNonBrowserEnvironmentError = function() {
      return new e(P.notInBrowserEnvironment.code, P.notInBrowserEnvironment.desc);
    }, e.createDatabaseNotOpenError = function() {
      return new e(P.databaseNotOpen.code, P.databaseNotOpen.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(P.noNetworkConnectivity.code, P.noNetworkConnectivity.desc);
    }, e.createPostRequestFailedError = function(t, n) {
      return new e(P.postRequestFailed.code, P.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, n) {
      return new e(P.getRequestFailed.code, P.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createFailedToParseNetworkResponseError = function(t) {
      return new e(P.failedToParseNetworkResponse.code, P.failedToParseNetworkResponse.desc + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToLoadTokenError = function(t) {
      return new e(P.unableToLoadTokenError.code, P.unableToLoadTokenError.desc + " | " + t);
    }, e.createSigningKeyNotFoundInStorageError = function(t) {
      return new e(P.signingKeyNotFoundInStorage.code, P.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + t);
    }, e.createAuthCodeRequiredError = function() {
      return new e(P.authCodeRequired.code, P.authCodeRequired.desc);
    }, e.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new e(P.authCodeOrNativeAccountRequired.code, P.authCodeOrNativeAccountRequired.desc);
    }, e.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new e(P.spaCodeAndNativeAccountPresent.code, P.spaCodeAndNativeAccountPresent.desc);
    }, e.createDatabaseUnavailableError = function() {
      return new e(P.databaseUnavailable.code, P.databaseUnavailable.desc);
    }, e.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new e(P.unableToAcquireTokenFromNativePlatform.code, P.unableToAcquireTokenFromNativePlatform.desc);
    }, e.createNativeHandshakeTimeoutError = function() {
      return new e(P.nativeHandshakeTimeout.code, P.nativeHandshakeTimeout.desc);
    }, e.createNativeExtensionNotInstalledError = function() {
      return new e(P.nativeExtensionNotInstalled.code, P.nativeExtensionNotInstalled.desc);
    }, e.createNativeConnectionNotEstablishedError = function() {
      return new e(P.nativeConnectionNotEstablished.code, P.nativeConnectionNotEstablished.desc);
    }, e.createNativeBrokerCalledBeforeInitialize = function() {
      return new e(P.nativeBrokerCalledBeforeInitialize.code, P.nativeBrokerCalledBeforeInitialize.desc);
    }, e.createNativePromptParameterNotSupportedError = function() {
      return new e(P.nativePromptNotSupported.code, P.nativePromptNotSupported.desc);
    }, e;
  }(z)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ct = {
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
}, bn = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, Ft;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(Ft || (Ft = {}));
var _e;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(_e || (_e = {}));
var At;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(At || (At = {}));
var fe;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(fe || (fe = {}));
var It;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(It || (It = {}));
var Yr;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Yr || (Yr = {}));
var be;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(be || (be = {}));
var K;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(K || (K = {}));
var nc;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(nc || (nc = {}));
var oc = {
  scopes: qn
}, tn = "jwk", ic;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(ic || (ic = {}));
var zi = "msal.db", Gf = 1, Vf = zi + ".keys", Ye;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
})(Ye || (Ye = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ge = {
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
}, Io = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(Ge.redirectUriNotSet.code, Ge.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(Ge.postLogoutUriNotSet.code, Ge.postLogoutUriNotSet.desc);
    }, e.createStorageNotSupportedError = function(t) {
      return new e(Ge.storageNotSupportedError.code, Ge.storageNotSupportedError.desc + " Given Location: " + t);
    }, e.createRedirectCallbacksNotSetError = function() {
      return new e(Ge.noRedirectCallbacksSet.code, Ge.noRedirectCallbacksSet.desc);
    }, e.createStubPcaInstanceCalledError = function() {
      return new e(Ge.stubPcaInstanceCalled.code, Ge.stubPcaInstanceCalled.desc);
    }, e.createInMemoryRedirectUnavailableError = function() {
      return new e(Ge.inMemRedirectUnavailable.code, Ge.inMemRedirectUnavailable.desc);
    }, e.createEntropyNotProvided = function() {
      return new e(Ge.entropyNotProvided.code, Ge.entropyNotProvided.desc);
    }, e;
  }(z)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var sc = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== _e.LocalStorage && e !== _e.SessionStorage)
        throw Io.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw Io.createStorageNotSupportedError(e);
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Gi = (
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ml = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (H.isEmpty(t))
        return null;
      try {
        var n = Bt.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw j.createInvalidStateError(t, o);
      }
    }, r.parseServerResponseFromHash = function(e) {
      if (!e)
        return {};
      var t = new he(e);
      return he.getDeserializedHash(t.getHash());
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Vi = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i) {
      var s = r.call(this, t, o, i) || this;
      return s.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, s.cacheConfig = n, s.logger = i, s.internalStorage = new Gi(), s.browserStorage = s.setupBrowserStorage(s.cacheConfig.cacheLocation), s.temporaryCacheStorage = s.setupTemporaryCacheStorage(s.cacheConfig.temporaryCacheLocation, s.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (s.migrateCacheEntries(), s.createKeyMaps()), s;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case _e.LocalStorage:
        case _e.SessionStorage:
          try {
            return new sc(t);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = _e.MemoryStorage, new Gi();
    }, e.prototype.setupTemporaryCacheStorage = function(t, n) {
      switch (n) {
        case _e.LocalStorage:
        case _e.SessionStorage:
          try {
            return new sc(t || _e.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case _e.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, n = S.CACHE_PREFIX + "." + Ie.ID_TOKEN, o = S.CACHE_PREFIX + "." + Ie.CLIENT_INFO, i = S.CACHE_PREFIX + "." + Ie.ERROR, s = S.CACHE_PREFIX + "." + Ie.ERROR_DESC, a = this.browserStorage.getItem(n), c = this.browserStorage.getItem(o), l = this.browserStorage.getItem(i), u = this.browserStorage.getItem(s), d = [a, c, l, u], h = [Ie.ID_TOKEN, Ie.CLIENT_INFO, Ie.ERROR, Ie.ERROR_DESC];
      h.forEach(function(f, p) {
        return t.migrateCacheEntry(f, d[p]);
      });
    }, e.prototype.migrateCacheEntry = function(t, n) {
      n && this.setTemporaryCache(t, n, !0);
    }, e.prototype.createKeyMaps = function() {
      var t = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var n = this.getItem(It.ACCOUNT_KEYS), o = this.getItem(It.TOKEN_KEYS + "." + this.clientId);
      if (n && o) {
        this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
        return;
      }
      var i = this.browserStorage.getKeys();
      i.forEach(function(s) {
        if (t.isCredentialKey(s)) {
          var a = t.getItem(s);
          if (a) {
            var c = t.validateAndParseJson(a);
            if (c && c.hasOwnProperty("credentialType"))
              switch (c.credentialType) {
                case Y.ID_TOKEN:
                  if (er.isIdTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + s + " found, saving key to token key map");
                    var l = Ve.toObject(new er(), c), u = t.updateCredentialCacheKey(s, l);
                    t.addTokenKey(u, Y.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + s);
                  break;
                case Y.ACCESS_TOKEN:
                case Y.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (tr.isAccessTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + s + " found, saving key to token key map");
                    var d = Ve.toObject(new tr(), c), u = t.updateCredentialCacheKey(s, d);
                    t.addTokenKey(u, Y.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + s);
                  break;
                case Y.REFRESH_TOKEN:
                  if (Vr.isRefreshTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + s + " found, saving key to token key map");
                    var h = Ve.toObject(new Vr(), c), u = t.updateCredentialCacheKey(s, h);
                    t.addTokenKey(u, Y.REFRESH_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: " + s);
                  break;
              }
          }
        }
        if (t.isAccountKey(s)) {
          var a = t.getItem(s);
          if (a) {
            var f = t.validateAndParseJson(a);
            f && Fe.isAccountEntity(f) && (t.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + s + " found, saving key to account key map"), t.addAccountKeyToMap(s));
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
      return !o || !Fe.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : Ve.toObject(new Fe(), o);
    }, e.prototype.setAccount = function(t) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var n = t.generateAccountKey();
      this.setItem(n, JSON.stringify(t)), this.addAccountKeyToMap(n);
    }, e.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var t = this.getItem(It.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var n = this.getAccountKeys();
      n.indexOf(t) === -1 ? (n.push(t), this.setItem(It.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var n = this.getAccountKeys(), o = n.indexOf(t);
      o > -1 ? (n.splice(o, 1), this.setItem(It.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }, e.prototype.removeAccount = function(t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return r.prototype.removeAccount.call(this, t), this.removeAccountKeyFromMap(t), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeIdToken = function(t) {
      r.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, Y.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return r.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, Y.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      r.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, Y.REFRESH_TOKEN);
    }, e.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var t = this.getItem(It.TOKEN_KEYS + "." + this.clientId);
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
        case Y.ID_TOKEN:
          o.idToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(t));
          break;
        case Y.ACCESS_TOKEN:
          o.accessToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(t));
          break;
        case Y.REFRESH_TOKEN:
          o.refreshToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(t));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), j.createUnexpectedCredentialTypeError();
      }
      this.setItem(It.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, n) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case Y.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var i = o.idToken.indexOf(t);
          i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case Y.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var s = o.accessToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case Y.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var a = o.refreshToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), j.createUnexpectedCredentialTypeError();
      }
      this.setItem(It.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !er.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), Ve.toObject(new er(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Y.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !tr.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), Ve.toObject(new tr(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Y.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Vr.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, Y.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), Ve.toObject(new Vr(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Y.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Ki.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), Ve.toObject(new Ki(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !_o.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), Ve.toObject(new _o(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && qi.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), Ve.toObject(new qi(), o)) : null;
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = this, n = this.internalStorage.getKeys();
      return n.filter(function(o) {
        return t.isAuthorityMetadata(o);
      });
    }, e.prototype.setWrapperMetadata = function(t, n) {
      this.internalStorage.setItem(Yr.WRAPPER_SKU, t), this.internalStorage.setItem(Yr.WRAPPER_VER, n);
    }, e.prototype.getWrapperMetadata = function() {
      var t = this.internalStorage.getItem(Yr.WRAPPER_SKU) || S.EMPTY_STRING, n = this.internalStorage.getItem(Yr.WRAPPER_VER) || S.EMPTY_STRING;
      return [t, n];
    }, e.prototype.setAuthorityMetadata = function(t, n) {
      this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(t, JSON.stringify(n));
    }, e.prototype.getActiveAccount = function() {
      var t = this.generateCacheKey(Ie.ACTIVE_ACCOUNT_FILTERS), n = this.getItem(t);
      if (!n) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var o = this.generateCacheKey(Ie.ACTIVE_ACCOUNT), i = this.getItem(o);
        if (!i)
          return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
        var s = this.getAccountInfoByFilter({ localAccountId: i })[0] || null;
        return s ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(s), s) : null;
      }
      var a = this.validateAndParseJson(n);
      return a ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoByFilter({
        homeAccountId: a.homeAccountId,
        localAccountId: a.localAccountId
      })[0] || null) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null);
    }, e.prototype.setActiveAccount = function(t) {
      var n = this.generateCacheKey(Ie.ACTIVE_ACCOUNT_FILTERS), o = this.generateCacheKey(Ie.ACTIVE_ACCOUNT);
      if (t) {
        this.logger.verbose("setActiveAccount: Active account set");
        var i = {
          homeAccountId: t.homeAccountId,
          localAccountId: t.localAccountId
        };
        this.browserStorage.setItem(n, JSON.stringify(i)), this.browserStorage.setItem(o, t.localAccountId);
      } else
        this.logger.verbose("setActiveAccount: No account passed, active account not set"), this.browserStorage.removeItem(n), this.browserStorage.removeItem(o);
    }, e.prototype.getAccountInfoByFilter = function(t) {
      var n = this.getAllAccounts();
      return this.logger.trace("BrowserCacheManager.getAccountInfoByFilter: total " + n.length + " accounts found"), n.filter(function(o) {
        return !(t.username && t.username.toLowerCase() !== o.username.toLowerCase() || t.homeAccountId && t.homeAccountId !== o.homeAccountId || t.localAccountId && t.localAccountId !== o.localAccountId || t.tenantId && t.tenantId !== o.tenantId || t.environment && t.environment !== o.environment);
      });
    }, e.prototype.getAccountInfoByHints = function(t, n) {
      var o = this.getAllAccounts().filter(function(i) {
        if (n) {
          var s = i.idTokenClaims && i.idTokenClaims.sid;
          return n === s;
        }
        return t ? t === i.username : !1;
      });
      if (o.length === 1)
        return o[0];
      if (o.length > 1)
        throw j.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !ec.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), Ve.toObject(new ec(), o));
    }, e.prototype.setThrottlingCache = function(t, n) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getTemporaryCache = function(t, n) {
      var o = n ? this.generateCacheKey(t) : t;
      if (this.cacheConfig.storeAuthStateInCookie) {
        var i = this.getItemCookie(o);
        if (i)
          return this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"), i;
      }
      var s = this.temporaryCacheStorage.getItem(o);
      if (!s) {
        if (this.cacheConfig.cacheLocation === _e.LocalStorage) {
          var a = this.browserStorage.getItem(o);
          if (a)
            return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"), a;
        }
        return this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null;
      }
      return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), s;
    }, e.prototype.setTemporaryCache = function(t, n, o) {
      var i = o ? this.generateCacheKey(t) : t;
      this.temporaryCacheStorage.setItem(i, n), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.setItemCookie(i, n));
    }, e.prototype.removeItem = function(t) {
      this.browserStorage.removeItem(t), this.temporaryCacheStorage.removeItem(t), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.clearItemCookie(t));
    }, e.prototype.containsKey = function(t) {
      return this.browserStorage.containsKey(t) || this.temporaryCacheStorage.containsKey(t);
    }, e.prototype.getKeys = function() {
      return ps(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, e.prototype.clear = function() {
      return k(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.removeAllAccounts()];
            case 1:
              return n.sent(), this.removeAppMetadata(), this.getKeys().forEach(function(o) {
                (t.browserStorage.containsKey(o) || t.temporaryCacheStorage.containsKey(o)) && (o.indexOf(S.CACHE_PREFIX) !== -1 || o.indexOf(t.clientId) !== -1) && t.removeItem(o);
              }), this.internalStorage.clear(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.clearTokensAndKeysWithClaims = function() {
      return k(this, void 0, void 0, function() {
        var t, n, o = this;
        return N(this, function(i) {
          switch (i.label) {
            case 0:
              return this.logger.trace("BrowserCacheManager.clearTokensAndKeysWithClaims called"), t = this.getTokenKeys(), n = [], t.accessToken.forEach(function(s) {
                var a = o.getAccessTokenCredential(s);
                a != null && a.requestedClaimsHash && s.includes(a.requestedClaimsHash.toLowerCase()) && n.push(o.removeAccessToken(s));
              }), [4, Promise.all(n)];
            case 1:
              return i.sent(), n.length > 0 && this.logger.warning(n.length + " access tokens with claims in the cache keys have been removed from the cache."), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.setItemCookie = function(t, n, o) {
      var i = encodeURIComponent(t) + "=" + encodeURIComponent(n) + ";path=/;SameSite=Lax;";
      if (o) {
        var s = this.getCookieExpirationTime(o);
        i += "expires=" + s + ";";
      }
      this.cacheConfig.secureCookies && (i += "Secure;"), document.cookie = i;
    }, e.prototype.getItemCookie = function(t) {
      for (var n = encodeURIComponent(t) + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var s = o[i]; s.charAt(0) === " "; )
          s = s.substring(1);
        if (s.indexOf(n) === 0)
          return decodeURIComponent(s.substring(n.length, s.length));
      }
      return S.EMPTY_STRING;
    }, e.prototype.clearMsalCookies = function() {
      var t = this, n = S.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(i) {
        for (; i.charAt(0) === " "; )
          i = i.substring(1);
        if (i.indexOf(n) === 0) {
          var s = i.split("=")[0];
          t.clearItemCookie(s);
        }
      });
    }, e.prototype.clearItemCookie = function(t) {
      this.setItemCookie(t, S.EMPTY_STRING, -1);
    }, e.prototype.getCookieExpirationTime = function(t) {
      var n = /* @__PURE__ */ new Date(), o = new Date(n.getTime() + t * this.COOKIE_LIFE_MULTIPLIER);
      return o.toUTCString();
    }, e.prototype.getCache = function() {
      return this.browserStorage;
    }, e.prototype.setCache = function() {
    }, e.prototype.generateCacheKey = function(t) {
      var n = this.validateAndParseJson(t);
      return n ? JSON.stringify(t) : H.startsWith(t, S.CACHE_PREFIX) || H.startsWith(t, Ie.ADAL_ID_TOKEN) ? t : S.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var n = Bt.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(fe.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = Bt.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(fe.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = Bt.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(fe.REQUEST_STATE + "." + n);
    }, e.prototype.getCachedAuthority = function(t) {
      var n = this.generateStateKey(t), o = this.getTemporaryCache(n);
      if (!o)
        return null;
      var i = this.generateAuthorityKey(o);
      return this.getTemporaryCache(i);
    }, e.prototype.updateCacheEntries = function(t, n, o, i, s) {
      this.logger.trace("BrowserCacheManager.updateCacheEntries called");
      var a = this.generateStateKey(t);
      this.setTemporaryCache(a, t, !1);
      var c = this.generateNonceKey(t);
      this.setTemporaryCache(c, n, !1);
      var l = this.generateAuthorityKey(t);
      if (this.setTemporaryCache(l, o, !1), s) {
        var u = {
          credential: s.homeAccountId,
          type: rt.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(fe.CCS_CREDENTIAL, JSON.stringify(u), !0);
      } else if (!H.isEmpty(i)) {
        var u = {
          credential: i,
          type: rt.UPN
        };
        this.setTemporaryCache(fe.CCS_CREDENTIAL, JSON.stringify(u), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), H.isEmpty(t) || this.getKeys().forEach(function(o) {
        o.indexOf(t) !== -1 && n.removeItem(o);
      }), t && (this.removeItem(this.generateStateKey(t)), this.removeItem(this.generateNonceKey(t)), this.removeItem(this.generateAuthorityKey(t))), this.removeItem(this.generateCacheKey(fe.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(fe.ORIGIN_URI)), this.removeItem(this.generateCacheKey(fe.URL_HASH)), this.removeItem(this.generateCacheKey(fe.CORRELATION_ID)), this.removeItem(this.generateCacheKey(fe.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(fe.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, e.prototype.cleanRequestByState = function(t) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), t) {
        var n = this.generateStateKey(t), o = this.temporaryCacheStorage.getItem(n);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || S.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(fe.REQUEST_STATE) !== -1) {
          var i = n.temporaryCacheStorage.getItem(o);
          if (i) {
            var s = Ml.extractBrowserRequestState(n.cryptoImpl, i);
            s && s.interactionType === t && (n.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + i), n.resetRequestCache(i));
          }
        }
      }), this.clearMsalCookies(), this.setInteractionInProgress(!1);
    }, e.prototype.cacheCodeRequest = function(t, n) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var o = n.base64Encode(JSON.stringify(t));
      this.setTemporaryCache(fe.REQUEST_PARAMS, o, !0);
    }, e.prototype.getCachedRequest = function(t, n) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var o = this.getTemporaryCache(fe.REQUEST_PARAMS, !0);
      if (!o)
        throw M.createNoTokenRequestCacheError();
      var i = this.validateAndParseJson(n.base64Decode(o));
      if (!i)
        throw M.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(fe.REQUEST_PARAMS)), H.isEmpty(i.authority)) {
        var s = this.generateAuthorityKey(t), a = this.getTemporaryCache(s);
        if (!a)
          throw M.createNoCachedAuthorityError();
        i.authority = a;
      }
      return i;
    }, e.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var t = this.getTemporaryCache(fe.NATIVE_REQUEST, !0);
      if (!t)
        return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null;
      var n = this.validateAndParseJson(t);
      return n || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null);
    }, e.prototype.isInteractionInProgress = function(t) {
      var n = this.getInteractionInProgress();
      return t ? n === this.clientId : !!n;
    }, e.prototype.getInteractionInProgress = function() {
      var t = S.CACHE_PREFIX + "." + fe.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(t, !1);
    }, e.prototype.setInteractionInProgress = function(t) {
      var n = S.CACHE_PREFIX + "." + fe.INTERACTION_STATUS_KEY;
      if (t) {
        if (this.getInteractionInProgress())
          throw M.createInteractionInProgressError();
        this.setTemporaryCache(n, this.clientId, !1);
      } else
        !t && this.getInteractionInProgress() === this.clientId && this.removeItem(n);
    }, e.prototype.getLegacyLoginHint = function() {
      var t = this.getTemporaryCache(Ie.ADAL_ID_TOKEN);
      t && (this.browserStorage.removeItem(Ie.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
      var n = this.getTemporaryCache(Ie.ID_TOKEN, !0);
      n && (this.removeItem(this.generateCacheKey(Ie.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
      var o = n || t;
      if (o) {
        var i = new Ot(o, this.cryptoImpl);
        if (i.claims && i.claims.preferred_username)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"), i.claims.preferred_username;
        if (i.claims && i.claims.upn)
          return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"), i.claims.upn;
        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
      }
      return null;
    }, e.prototype.updateCredentialCacheKey = function(t, n) {
      var o = n.generateCredentialKey();
      if (t !== o) {
        var i = this.getItem(t);
        if (i)
          return this.removeItem(t), this.setItem(o, i), this.logger.verbose("Updated an outdated " + n.credentialType + " cache key"), o;
        this.logger.error("Attempted to update an outdated " + n.credentialType + " cache key but no item matching the outdated key was found in storage");
      }
      return t;
    }, e.prototype.getRedirectRequestContext = function() {
      return this.getTemporaryCache(fe.REDIRECT_CONTEXT, !0);
    }, e.prototype.setRedirectRequestContext = function(t) {
      this.setTemporaryCache(fe.REDIRECT_CONTEXT, t, !0);
    }, e.prototype.hydrateCache = function(t, n) {
      var o, i, s, a, c, l;
      return k(this, void 0, void 0, function() {
        var u, d, h, f;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return u = er.createIdTokenEntity(((o = t.account) === null || o === void 0 ? void 0 : o.homeAccountId) || "", ((i = t.account) === null || i === void 0 ? void 0 : i.environment) || "", t.idToken, this.clientId, t.tenantId), n.claims ? [4, this.cryptoImpl.hashString(n.claims)] : [3, 2];
            case 1:
              d = p.sent(), p.label = 2;
            case 2:
              return h = tr.createAccessTokenEntity(
                ((s = t.account) === null || s === void 0 ? void 0 : s.homeAccountId) || "",
                ((a = t.account) === null || a === void 0 ? void 0 : a.environment) || "",
                t.accessToken,
                this.clientId,
                t.tenantId,
                t.scopes.join(" "),
                ((c = t.expiresOn) === null || c === void 0 ? void 0 : c.getTime()) || 0,
                ((l = t.extExpiresOn) === null || l === void 0 ? void 0 : l.getTime()) || 0,
                this.cryptoImpl,
                void 0,
                // refreshOn
                t.tokenType,
                void 0,
                // userAssertionHash
                n.sshKid,
                n.claims,
                d
              ), f = new Qr(void 0, u, h), [2, this.saveCacheRecord(f)];
          }
        });
      });
    }, e;
  }(Ve)
), Wf = function(r, e) {
  var t = {
    cacheLocation: _e.MemoryStorage,
    temporaryCacheLocation: _e.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new Vi(r, t, Co, e);
};
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var pi = "@azure/msal-browser", Nn = "2.39.0";
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Yf = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return k(this, void 0, void 0, function() {
        var n, o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return s.trys.push([0, 2, , 3]), [4, fetch(e, {
                method: At.GET,
                headers: this.getFetchHeaders(t)
              })];
            case 1:
              return n = s.sent(), [3, 3];
            case 2:
              throw o = s.sent(), window.navigator.onLine ? M.createGetRequestFailedError(o, e) : M.createNoNetworkConnectivityError();
            case 3:
              return s.trys.push([3, 5, , 6]), i = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (i.body = s.sent(), i.status = n.status, i)];
            case 5:
              throw s.sent(), M.createFailedToParseNetworkResponseError(e);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              n = t && t.body || S.EMPTY_STRING, a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, fetch(e, {
                method: At.POST,
                headers: this.getFetchHeaders(t),
                body: n
              })];
            case 2:
              return o = a.sent(), [3, 4];
            case 3:
              throw i = a.sent(), window.navigator.onLine ? M.createPostRequestFailedError(i, e) : M.createNoNetworkConnectivityError();
            case 4:
              return a.trys.push([4, 6, , 7]), s = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (s.body = a.sent(), s.status = o.status, s)];
            case 6:
              throw a.sent(), M.createFailedToParseNetworkResponseError(e);
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Qf = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, this.sendRequestAsync(e, At.GET, t)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, this.sendRequestAsync(e, At.POST, t)];
        });
      });
    }, r.prototype.sendRequestAsync = function(e, t, n) {
      var o = this;
      return new Promise(function(i, s) {
        var a = new XMLHttpRequest();
        if (a.open(
          t,
          e,
          /* async: */
          !0
        ), o.setXhrHeaders(a, n), a.onload = function() {
          (a.status < 200 || a.status >= 300) && (t === At.POST ? s(M.createPostRequestFailedError("Failed with status " + a.status, e)) : s(M.createGetRequestFailedError("Failed with status " + a.status, e)));
          try {
            var c = JSON.parse(a.responseText), l = {
              headers: o.getHeaderDict(a),
              body: c,
              status: a.status
            };
            i(l);
          } catch {
            s(M.createFailedToParseNetworkResponseError(e));
          }
        }, a.onerror = function() {
          window.navigator.onLine ? t === At.POST ? s(M.createPostRequestFailedError("Failed with status " + a.status, e)) : s(M.createGetRequestFailedError("Failed with status " + a.status, e)) : s(M.createNoNetworkConnectivityError());
        }, t === At.POST && n && n.body)
          a.send(n.body);
        else if (t === At.GET)
          a.send();
        else
          throw M.createHttpMethodNotImplementedError(t);
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
      return n.forEach(function(i) {
        var s = i.split(": "), a = s.shift(), c = s.join(": ");
        a && c && (o[a] = c);
      }), o;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Se = (
  /** @class */
  function() {
    function r() {
    }
    return r.clearHash = function(e) {
      e.location.hash = S.EMPTY_STRING, typeof e.history.replaceState == "function" && e.history.replaceState(null, S.EMPTY_STRING, "" + e.location.origin + e.location.pathname + e.location.search);
    }, r.replaceHash = function(e) {
      var t = e.split("#");
      t.shift(), window.location.hash = t.length > 0 ? t.join("#") : S.EMPTY_STRING;
    }, r.isInIframe = function() {
      return window.parent !== window;
    }, r.isInPopup = function() {
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(Ct.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var e = new he(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new Yf() : new Qf();
    }, r.blockReloadInHiddenIframes = function() {
      var e = he.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw M.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === K.Redirect && n && !t)
        throw M.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw M.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw M.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw M.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/"), o = e.indexOf("Edge/"), i = t > 0 || n > 0, s = o > 0;
      return i || s;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ll = (
  /** @class */
  function() {
    function r(e, t, n, o, i, s, a, c, l) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = s, this.nativeMessageHandler = c, this.correlationId = l || this.browserCrypto.createNewGuid(), this.logger = o.clone(Ct.MSAL_SKU, Nn, this.correlationId), this.performanceClient = a;
    }
    return r.prototype.clearCacheOnLogout = function(e) {
      return k(this, void 0, void 0, function() {
        return N(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                return [3, 5];
              Fe.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)), t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(Fe.generateAccountCacheKey(e))];
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
      return k(this, void 0, void 0, function() {
        var n, o, i, s;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.InitializeBaseRequest, e.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), n = e.authority || this.config.auth.authority, t ? [4, this.validateRequestAuthority(n, t)] : [3, 2];
            case 1:
              a.sent(), a.label = 2;
            case 2:
              if (o = ps(e && e.scopes || []), i = B(B({}, e), {
                correlationId: this.correlationId,
                authority: n,
                scopes: o
              }), !i.authenticationScheme)
                i.authenticationScheme = ye.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (i.authenticationScheme === ye.SSH) {
                  if (!e.sshJwk)
                    throw we.createMissingSshJwkError();
                  if (!e.sshKid)
                    throw we.createMissingSshKidError();
                }
                this.logger.verbose('Authentication Scheme set to "' + i.authenticationScheme + '" as configured in Auth request');
              }
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !H.isEmptyObj(e.claims) ? (s = i, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
            case 3:
              s.requestedClaimsHash = a.sent(), a.label = 4;
            case 4:
              return [2, i];
          }
        });
      });
    }, r.prototype.getRedirectUri = function(e) {
      this.logger.verbose("getRedirectUri called");
      var t = e || this.config.auth.redirectUri || Se.getCurrentUri();
      return he.getAbsoluteUrl(t, Se.getCurrentUri());
    }, r.prototype.validateRequestAuthority = function(e, t) {
      return k(this, void 0, void 0, function() {
        var n;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(e)];
            case 1:
              if (n = o.sent(), !n.isAlias(t.environment))
                throw we.createAuthorityMismatchError();
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
      return new qf(n, this.browserStorage);
    }, r.prototype.getDiscoveredAuthority = function(e) {
      return k(this, void 0, void 0, function() {
        var t;
        return N(this, function(n) {
          switch (n.label) {
            case 0:
              return this.logger.verbose("getDiscoveredAuthority called"), t = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata
              }, e ? (this.logger.verbose("Creating discovered authority with request authority"), [4, To.createDiscoveredInstance(e, this.config.system.networkClient, this.browserStorage, t, this.logger)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return this.logger.verbose("Creating discovered authority with configured authority"), [4, To.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, t, this.logger)];
            case 3:
              return [2, n.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var an = (
  /** @class */
  function(r) {
    Me(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.initializeAuthorizationCodeRequest = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o;
        return N(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), this.logger.verbose("initializeAuthorizationRequest called", t.correlationId), [4, this.browserCrypto.generatePkceCodes()];
            case 1:
              return n = i.sent(), o = B(B({}, t), { redirectUri: t.redirectUri, code: S.EMPTY_STRING, codeVerifier: n.verifier }), t.codeChallenge = n.challenge, t.codeChallengeMethod = S.S256_CODE_CHALLENGE_METHOD, [2, o];
          }
        });
      });
    }, e.prototype.initializeLogoutRequest = function(t) {
      this.logger.verbose("initializeLogoutRequest called", t == null ? void 0 : t.correlationId);
      var n = B({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, t);
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
      return !t || t.postLogoutRedirectUri !== null ? t && t.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", n.correlationId), n.postLogoutRedirectUri = he.getAbsoluteUrl(t.postLogoutRedirectUri, Se.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", n.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", n.correlationId), n.postLogoutRedirectUri = he.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, Se.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", n.correlationId), n.postLogoutRedirectUri = he.getAbsoluteUrl(Se.getCurrentUri(), Se.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", n.correlationId), n;
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
      return k(this, void 0, void 0, function() {
        var i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(I.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = s.sent(), [2, new Nl(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.getClientConfiguration = function(t, n, o) {
      return k(this, void 0, void 0, function() {
        var i, s;
        return N(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(I.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(n, o)];
            case 1:
              return i = a.sent(), s = this.config.system.loggerOptions, [2, {
                authOptions: {
                  clientId: this.config.auth.clientId,
                  authority: i,
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
                  sku: Ct.MSAL_SKU,
                  version: Nn,
                  cpu: S.EMPTY_STRING,
                  os: S.EMPTY_STRING
                },
                telemetry: this.config.telemetry
              }];
          }
        });
      });
    }, e.prototype.validateAndExtractStateFromHash = function(t, n, o) {
      if (this.logger.verbose("validateAndExtractStateFromHash called", o), !t.state)
        throw M.createHashDoesNotContainStateError();
      var i = Ml.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!i)
        throw M.createUnableToParseStateError();
      if (i.interactionType !== n)
        throw M.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), t.state;
    }, e.prototype.getDiscoveredAuthority = function(t, n) {
      var o;
      return k(this, void 0, void 0, function() {
        var i, s, a, c;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), s = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, a = t || this.config.auth.authority, c = Mn.generateAuthority(a, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(I.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, To.createDiscoveredInstance(c, this.config.system.networkClient, this.browserStorage, s, this.logger, this.performanceClient, this.correlationId).then(function(u) {
                return i.endMeasurement({
                  success: !0
                }), u;
              }).catch(function(u) {
                throw i.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              })];
            case 1:
              return [2, l.sent()];
          }
        });
      });
    }, e.prototype.initializeAuthorizationRequest = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o, i, s, a, c, l, u;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), i = {
                interactionType: n
              }, s = Bt.setRequestState(this.browserCrypto, t && t.state || S.EMPTY_STRING, i), this.performanceClient.setPreQueueTime(I.InitializeBaseRequest, this.correlationId), c = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return a = B.apply(void 0, [B.apply(void 0, c.concat([d.sent()])), { redirectUri: o, state: s, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: mo.FRAGMENT }]), l = t.account || this.browserStorage.getActiveAccount(), l && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + l.homeAccountId, this.correlationId), a.account = l), H.isEmpty(a.loginHint) && !l && (u = this.browserStorage.getLegacyLoginHint(), u && (a.loginHint = u)), [2, a];
          }
        });
      });
    }, e;
  }(Ll)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Cs = (
  /** @class */
  function() {
    function r(e, t, n, o, i) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = n, this.logger = o, this.performanceClient = i;
    }
    return r.prototype.handleCodeResponseFromHash = function(e, t, n, o) {
      return k(this, void 0, void 0, function() {
        var i, s, a;
        return N(this, function(c) {
          if (this.performanceClient.addQueueMeasurement(I.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), H.isEmpty(e))
            throw M.createEmptyHashError(e);
          if (i = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(i), !s)
            throw j.createStateNotFoundError("Cached State");
          try {
            a = this.authModule.handleFragmentResponse(e, s);
          } catch (l) {
            throw l instanceof _r && l.subError === P.userCancelledError.code ? M.createUserCancelledError() : l;
          }
          return this.performanceClient.setPreQueueTime(I.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(a, t, n, o)];
        });
      });
    }, r.prototype.handleCodeResponseFromServer = function(e, t, n, o, i) {
      return i === void 0 && (i = !0), k(this, void 0, void 0, function() {
        var s, a, c, l, u, d;
        return N(this, function(h) {
          switch (h.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(I.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), s = this.browserStorage.generateStateKey(t), a = this.browserStorage.getTemporaryCache(s), !a)
                throw j.createStateNotFoundError("Cached State");
              return c = this.browserStorage.generateNonceKey(a), l = this.browserStorage.getTemporaryCache(c), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(I.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              h.sent(), h.label = 2;
            case 2:
              return i && (e.nonce = l || void 0), e.state = a, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (u = this.checkCcsCredentials(), u && (this.authCodeRequest.ccsCredential = u)), this.performanceClient.setPreQueueTime(I.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return d = h.sent(), this.browserStorage.cleanRequestByState(t), [2, d];
          }
        });
      });
    }, r.prototype.updateTokenEndpointAuthority = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, To.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              return i = s.sent(), this.authModule.updateAuthority(i), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.checkCcsCredentials = function() {
      var e = this.browserStorage.getTemporaryCache(fe.CCS_CREDENTIAL, !0);
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ac = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a) {
      var c = r.call(this, t, n, o, i, a) || this;
      return c.browserCrypto = s, c;
    }
    return e.prototype.initiateAuthRequest = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), H.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(fe.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(fe.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
                apiId: be.acquireTokenRedirect,
                timeout: n.redirectTimeout,
                noHistory: !1
              }, typeof n.onRedirectNavigate != "function" ? [3, 4] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), i = n.onRedirectNavigate(t), i === !1 ? [3, 2] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), [4, n.navigationClient.navigateExternal(t, o)])));
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
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), M.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleCodeResponseFromHash = function(t, n, o, i) {
      return k(this, void 0, void 0, function() {
        var s, a, c, l, u, d, h;
        return N(this, function(f) {
          switch (f.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), H.isEmpty(t))
                throw M.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), s = this.browserStorage.generateStateKey(n), a = this.browserStorage.getTemporaryCache(s), !a)
                throw j.createStateNotFoundError("Cached State");
              try {
                c = this.authModule.handleFragmentResponse(t, a);
              } catch (p) {
                throw p instanceof _r && p.subError === P.userCancelledError.code ? M.createUserCancelledError() : p;
              }
              return l = this.browserStorage.generateNonceKey(a), u = this.browserStorage.getTemporaryCache(l), this.authCodeRequest.code = c.code, c.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(c.cloud_instance_host_name, o, i)] : [3, 2];
            case 1:
              f.sent(), f.label = 2;
            case 2:
              return c.nonce = u || void 0, c.state = a, c.client_info ? this.authCodeRequest.clientInfo = c.client_info : (d = this.checkCcsCredentials(), d && (this.authCodeRequest.ccsCredential = d)), [4, this.authModule.acquireToken(this.authCodeRequest, c)];
            case 3:
              return h = f.sent(), this.browserStorage.cleanRequestByState(n), [2, h];
          }
        });
      });
    }, e;
  }(Cs)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ee;
(function(r) {
  r.INITIALIZE_START = "msal:initializeStart", r.INITIALIZE_END = "msal:initializeEnd", r.ACCOUNT_ADDED = "msal:accountAdded", r.ACCOUNT_REMOVED = "msal:accountRemoved", r.LOGIN_START = "msal:loginStart", r.LOGIN_SUCCESS = "msal:loginSuccess", r.LOGIN_FAILURE = "msal:loginFailure", r.ACQUIRE_TOKEN_START = "msal:acquireTokenStart", r.ACQUIRE_TOKEN_SUCCESS = "msal:acquireTokenSuccess", r.ACQUIRE_TOKEN_FAILURE = "msal:acquireTokenFailure", r.ACQUIRE_TOKEN_NETWORK_START = "msal:acquireTokenFromNetworkStart", r.SSO_SILENT_START = "msal:ssoSilentStart", r.SSO_SILENT_SUCCESS = "msal:ssoSilentSuccess", r.SSO_SILENT_FAILURE = "msal:ssoSilentFailure", r.ACQUIRE_TOKEN_BY_CODE_START = "msal:acquireTokenByCodeStart", r.ACQUIRE_TOKEN_BY_CODE_SUCCESS = "msal:acquireTokenByCodeSuccess", r.ACQUIRE_TOKEN_BY_CODE_FAILURE = "msal:acquireTokenByCodeFailure", r.HANDLE_REDIRECT_START = "msal:handleRedirectStart", r.HANDLE_REDIRECT_END = "msal:handleRedirectEnd", r.POPUP_OPENED = "msal:popupOpened", r.LOGOUT_START = "msal:logoutStart", r.LOGOUT_SUCCESS = "msal:logoutSuccess", r.LOGOUT_FAILURE = "msal:logoutFailure", r.LOGOUT_END = "msal:logoutEnd", r.RESTORE_FROM_BFCACHE = "msal:restoreFromBFCache";
})(ee || (ee = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Xt;
(function(r) {
  r.USER_INTERACTION_REQUIRED = "USER_INTERACTION_REQUIRED", r.USER_CANCEL = "USER_CANCEL", r.NO_NETWORK = "NO_NETWORK", r.TRANSIENT_ERROR = "TRANSIENT_ERROR", r.PERSISTENT_ERROR = "PERSISTENT_ERROR", r.DISABLED = "DISABLED", r.ACCOUNT_UNAVAILABLE = "ACCOUNT_UNAVAILABLE";
})(Xt || (Xt = {}));
var gn = {
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
}, kt = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o) {
      var i = r.call(this, t, n) || this;
      return Object.setPrototypeOf(i, e.prototype), i.name = "NativeAuthError", i.ext = o, i;
    }
    return e.prototype.isFatal = function() {
      if (this.ext && this.ext.status && (this.ext.status === Xt.PERSISTENT_ERROR || this.ext.status === Xt.DISABLED))
        return !0;
      switch (this.errorCode) {
        case gn.extensionError.code:
          return !0;
        default:
          return !1;
      }
    }, e.createError = function(t, n, o) {
      if (o && o.status)
        switch (o.status) {
          case Xt.ACCOUNT_UNAVAILABLE:
            return wt.createNativeAccountUnavailableError();
          case Xt.USER_INTERACTION_REQUIRED:
            return new wt(t, n);
          case Xt.USER_CANCEL:
            return M.createUserCancelledError();
          case Xt.NO_NETWORK:
            return M.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(gn.userSwitch.code, gn.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(gn.tokensNotFoundInCache.code, gn.tokensNotFoundInCache.desc);
    }, e;
  }(z)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Dl = (
  /** @class */
  function(r) {
    Me(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a;
        return N(this, function(c) {
          switch (c.label) {
            case 0:
              return n = this.performanceClient.startMeasurement(I.SilentCacheClientAcquireToken, t.correlationId), o = this.initializeServerTelemetryManager(be.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, t.authority, t.azureCloudOptions)];
            case 1:
              i = c.sent(), this.logger.verbose("Silent auth client created"), c.label = 2;
            case 2:
              return c.trys.push([2, 4, , 5]), [4, i.acquireCachedToken(t)];
            case 3:
              return s = c.sent(), n.endMeasurement({
                success: !0,
                fromCache: !0
              }), [2, s];
            case 4:
              throw a = c.sent(), a instanceof M && a.errorCode === P.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
                errorCode: a instanceof z && a.errorCode || void 0,
                subErrorCode: a instanceof z && a.subError || void 0,
                success: !1
              }), a;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(M.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, n, o) {
      return k(this, void 0, void 0, function() {
        var i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = s.sent(), [2, new Uf(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o;
        return N(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(I.InitializeBaseRequest, this.correlationId), o = [B({}, t)], [4, this.initializeBaseRequest(t, n)];
            case 1:
              return [2, B.apply(void 0, [B.apply(void 0, o.concat([i.sent()])), { account: n, forceRefresh: t.forceRefresh || !1 }])];
          }
        });
      });
    }, e;
  }(an)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Jr = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, d, h, f) {
      var p = r.call(this, t, n, o, i, s, a, l, u, f) || this;
      return p.apiId = c, p.accountId = d, p.nativeMessageHandler = u, p.nativeStorageManager = h, p.silentCacheClient = new Dl(t, p.nativeStorageManager, o, i, s, a, l, u, f), p;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(I.NativeInteractionClientAcquireToken, t.correlationId), o = ht.nowSeconds(), [4, this.initializeNativeRequest(t)];
            case 1:
              i = u.sent(), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), [4, this.acquireTokensFromCache(this.accountId, i)];
            case 3:
              return s = u.sent(), n.endMeasurement({
                success: !0,
                isNativeBroker: !1,
                fromCache: !0
              }), [2, s];
            case 4:
              return u.sent(), this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call"), [3, 5];
            case 5:
              return a = {
                method: Ft.GetToken,
                request: i
              }, [4, this.nativeMessageHandler.sendMessage(a)];
            case 6:
              return c = u.sent(), l = this.validateNativeResponse(c), [2, this.handleNativeResponse(l, i, o).then(function(d) {
                return n.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: d.requestId
                }), d;
              }).catch(function(d) {
                throw n.endMeasurement({
                  success: !1,
                  errorCode: d.errorCode,
                  subErrorCode: d.subError,
                  isNativeBroker: !0
                }), d;
              })];
          }
        });
      });
    }, e.prototype.createSilentCacheRequest = function(t, n) {
      return {
        authority: t.authority,
        correlationId: this.correlationId,
        scopes: De.fromString(t.scope).asArray(),
        account: n,
        forceRefresh: !1
      };
    }, e.prototype.acquireTokensFromCache = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o, i, s, a, c;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              if (!t)
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), j.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw j.createNoAccountFoundError();
              l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), i = this.createSilentCacheRequest(n, o), [4, this.silentCacheClient.acquireToken(i)];
            case 2:
              return s = l.sent(), a = B(B({}, o), { idTokenClaims: s.idTokenClaims }), [2, B(B({}, s), { account: a })];
            case 3:
              throw c = l.sent(), c;
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.acquireTokenRedirect = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireTokenRedirect called."), [4, this.initializeNativeRequest(t)];
            case 1:
              n = l.sent(), o = {
                method: Ft.GetToken,
                request: n
              }, l.label = 2;
            case 2:
              return l.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return i = l.sent(), this.validateNativeResponse(i), [3, 5];
            case 4:
              if (s = l.sent(), s instanceof kt && s.isFatal())
                throw s;
              return [3, 5];
            case 5:
              return this.browserStorage.setTemporaryCache(fe.NATIVE_REQUEST, JSON.stringify(n), !0), a = {
                apiId: be.acquireTokenRedirect,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, c = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(t.redirectUri), [4, this.navigationClient.navigateExternal(c, a)];
            case 6:
              return l.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function() {
      return k(this, void 0, void 0, function() {
        var t, n, o, i, s, a, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (t = this.browserStorage.getCachedNativeRequest(), !t)
                return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), [2, null];
              n = t.prompt, o = Va(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(fe.NATIVE_REQUEST)), i = {
                method: Ft.GetToken,
                request: o
              }, s = ht.nowSeconds(), u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker."), [4, this.nativeMessageHandler.sendMessage(i)];
            case 2:
              return a = u.sent(), this.validateNativeResponse(a), c = this.handleNativeResponse(a, o, s), this.browserStorage.setInteractionInProgress(!1), [2, c];
            case 3:
              throw l = u.sent(), this.browserStorage.setInteractionInProgress(!1), l;
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
      return k(this, void 0, void 0, function() {
        var i, s, a, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleNativeResponse called."), t.account.id !== n.accountId)
                throw kt.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(n.authority)];
            case 1:
              return i = u.sent(), s = this.createIdTokenObj(t), a = this.createHomeAccountIdentifier(t, s), c = Fe.createAccount({
                homeAccountId: a,
                idTokenClaims: s.claims,
                clientInfo: t.client_info,
                nativeAccountId: t.account.id
              }, i), [4, this.generateAuthenticationResult(t, n, s, c, i.canonicalAuthority, o)];
            case 2:
              return l = u.sent(), this.cacheAccount(c), this.cacheNativeTokens(t, n, a, s, l.accessToken, l.tenantId, o), [2, l];
          }
        });
      });
    }, e.prototype.createIdTokenObj = function(t) {
      return new Ot(t.id_token || S.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = Fe.generateHomeAccountId(t.client_info || S.EMPTY_STRING, We.Default, this.logger, this.browserCrypto, n.claims);
      return o;
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? De.fromString(t.scope) : De.fromString(n.scope);
    }, e.prototype.generatePopAccessToken = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              if (n.tokenType !== ye.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new en(this.browserCrypto), i = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw j.createKeyIdMissingError();
              return [4, o.signPopToken(t.access_token, n.keyId, i)];
            case 1:
              return [2, s.sent()];
            case 2:
              return [2, t.access_token];
          }
        });
      });
    }, e.prototype.generateAuthenticationResult = function(t, n, o, i, s, a) {
      return k(this, void 0, void 0, function() {
        var c, l, u, d, h, f, p, g;
        return N(this, function(m) {
          switch (m.label) {
            case 0:
              return c = this.addTelemetryFromNativeResponse(t), l = t.scope ? De.fromString(t.scope) : De.fromString(n.scope), u = t.account.properties || {}, d = u.UID || o.claims.oid || o.claims.sub || S.EMPTY_STRING, h = u.TenantId || o.claims.tid || S.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return f = m.sent(), p = n.tokenType === ye.POP ? ye.POP : ye.BEARER, g = {
                authority: s,
                uniqueId: d,
                tenantId: h,
                scopes: l.asArray(),
                account: i.getAccountInfo(),
                idToken: t.id_token,
                idTokenClaims: o.claims,
                accessToken: f,
                fromCache: c ? this.isResponseFromCache(c) : !1,
                expiresOn: new Date(Number(a + t.expires_in) * 1e3),
                tokenType: p,
                correlationId: this.correlationId,
                state: t.state,
                fromNativeBroker: !0
              }, [2, g];
          }
        });
      });
    }, e.prototype.cacheAccount = function(t) {
      var n = this;
      this.browserStorage.setAccount(t), this.browserStorage.removeAccountContext(t).catch(function(o) {
        n.logger.error("Error occurred while removing account context from browser storage. " + o);
      });
    }, e.prototype.cacheNativeTokens = function(t, n, o, i, s, a, c) {
      var l = er.createIdTokenEntity(o, n.authority, t.id_token || S.EMPTY_STRING, n.clientId, i.claims.tid || S.EMPTY_STRING), u = n.tokenType === ye.POP ? S.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, d = c + u, h = this.generateScopes(t, n), f = tr.createAccessTokenEntity(o, n.authority, s, n.clientId, i ? i.claims.tid || S.EMPTY_STRING : a, h.printScopes(), d, 0, this.browserCrypto), p = new Qr(void 0, l, f);
      this.nativeStorageManager.saveCacheRecord(p);
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
      throw kt.createUnexpectedError("Response missing expected properties.");
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
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u, d, h, f = this;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(n, t.account)] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return o = new he(n), o.validateAsUri(), i = t.scopes, s = Va(t, ["scopes"]), a = new De(i || []), a.appendScopes(qn), c = function() {
                switch (f.apiId) {
                  case be.ssoSilent:
                  case be.acquireTokenSilent_silentFlow:
                    return f.logger.trace("initializeNativeRequest: silent request sets prompt to none"), He.NONE;
                }
                if (!t.prompt) {
                  f.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case He.NONE:
                  case He.CONSENT:
                  case He.LOGIN:
                    return f.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), t.prompt;
                  default:
                    throw f.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), M.createNativePromptParameterNotSupportedError();
                }
              }, l = B(B({}, s), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: a.printScopes(),
                redirectUri: this.getRedirectUri(t.redirectUri),
                prompt: c(),
                correlationId: this.correlationId,
                tokenType: t.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: B(B(B({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: bn.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== ye.POP ? [3, 4] : (u = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, d = new en(this.browserCrypto), [4, d.generateCnf(u)]);
            case 3:
              h = p.sent(), l.reqCnf = h.reqCnfString, l.keyId = h.kid, p.label = 4;
            case 4:
              return [2, l];
          }
        });
      });
    }, e;
  }(Ll)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Er = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = n, this.handshakeEvent = n.startMeasurement(I.NativeMessageHandlerHandshake);
    }
    return r.prototype.sendMessage = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n = this;
        return N(this, function(o) {
          return this.logger.trace("NativeMessageHandler - sendMessage called."), t = {
            channel: bn.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: e
          }, this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(t)), this.messageChannel.port1.postMessage(t), [2, new Promise(function(i, s) {
            n.resolvers.set(t.responseId, { resolve: i, reject: s });
          })];
        });
      });
    }, r.createProvider = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        var o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              e.trace("NativeMessageHandler - createProvider called."), s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 5]), o = new r(e, t, n, bn.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
            case 2:
              return s.sent(), [2, o];
            case 3:
              return s.sent(), i = new r(e, t, n), [4, i.sendHandshakeRequest()];
            case 4:
              return s.sent(), [2, i];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendHandshakeRequest = function() {
      return k(this, void 0, void 0, function() {
        var e, t = this;
        return N(this, function(n) {
          return this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1), e = {
            channel: bn.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: Ft.HandshakeRequest
            }
          }, this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          }), this.messageChannel.port1.onmessage = function(o) {
            t.onChannelMessage(o);
          }, window.postMessage(e, window.origin, [this.messageChannel.port2]), [2, new Promise(function(o, i) {
            t.handshakeResolvers.set(e.responseId, { resolve: o, reject: i }), t.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), i(M.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
            }, t.handshakeTimeoutMs);
          })];
        });
      });
    }, r.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== bn.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Ft.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var n = this.handshakeResolvers.get(t.responseId);
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(M.createNativeExtensionNotInstalledError()));
        }
      }
    }, r.prototype.onChannelMessage = function(e) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var t = e.data, n = this.resolvers.get(t.responseId), o = this.handshakeResolvers.get(t.responseId);
      try {
        var i = t.body.method;
        if (i === Ft.Response) {
          if (!n)
            return;
          var s = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(s)), s.status !== "Success")
            n.reject(kt.createError(s.code, s.description, s.ext));
          else if (s.result)
            s.result.code && s.result.description ? n.reject(kt.createError(s.result.code, s.result.description, s.result.ext)) : n.resolve(s.result);
          else
            throw z.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (i === Ft.HandshakeResponse) {
          if (!o)
            return;
          clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = t.extensionId, this.extensionVersion = t.body.version, this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId), this.handshakeEvent.endMeasurement({ extensionInstalled: !0, success: !0 }), o.resolve(), this.handshakeResolvers.delete(t.responseId);
        }
      } catch (a) {
        this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii("Error parsing response from WAM Extension: " + a.toString()), this.logger.errorPii("Unable to parse " + e), n ? n.reject(a) : o && o.reject(a);
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
          case ye.BEARER:
          case ye.POP:
            return t.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Jf = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, d) {
      var h = r.call(this, t, n, o, i, s, a, c, u, d) || this;
      return h.nativeStorage = l, h;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u, d, h = this;
        return N(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Redirect)];
            case 1:
              n = f.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || S.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(be.acquireTokenRedirect), i = function(p) {
                p.persisted && (h.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), h.browserStorage.cleanRequestByState(n.state), h.eventHandler.emitEvent(ee.RESTORE_FROM_BFCACHE, K.Redirect));
              }, f.label = 2;
            case 2:
              return f.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return s = f.sent(), this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return a = f.sent(), this.logger.verbose("Auth code client created"), c = new ac(a, this.browserStorage, s, this.logger, this.browserCrypto, this.performanceClient), [4, a.getAuthCodeUrl(B(B({}, n), { nativeBroker: Er.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
            case 5:
              return l = f.sent(), u = this.getRedirectStartPage(t.redirectStartPage), this.logger.verbosePii("Redirect start page: " + u), window.addEventListener("pageshow", i), [4, c.initiateAuthRequest(l, {
                navigationClient: this.navigationClient,
                redirectTimeout: this.config.system.redirectNavigationTimeout,
                redirectStartPage: u,
                onRedirectNavigate: t.onRedirectNavigate
              })];
            case 6:
              return [2, f.sent()];
            case 7:
              throw d = f.sent(), d instanceof z && d.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", i), o.cacheFailedRequest(d), this.browserStorage.cleanRequestByState(n.state), d;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u, d, h, f, p;
        return N(this, function(g) {
          switch (g.label) {
            case 0:
              n = this.initializeServerTelemetryManager(be.handleRedirectPromise), g.label = 1;
            case 1:
              if (g.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(t || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(K.Redirect), [2, null];
              i = void 0;
              try {
                s = he.getDeserializedHash(o), i = this.validateAndExtractStateFromHash(s, K.Redirect), this.logger.verbose("State extracted from hash");
              } catch (m) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + m), this.browserStorage.cleanRequestByInteractionType(K.Redirect), [2, null];
              }
              return a = this.browserStorage.getTemporaryCache(fe.ORIGIN_URI, !0) || S.EMPTY_STRING, c = he.removeHashFromUrl(a), l = he.removeHashFromUrl(window.location.href), c === l && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, i, n)]) : [3, 3];
            case 2:
              return u = g.sent(), a.indexOf("#") > -1 && Se.replaceHash(a), [2, u];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, i, n)]);
            case 4:
              return !Se.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(fe.URL_HASH, o, !0), d = {
                apiId: be.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, h = !0, !a || a === "null" ? (f = Se.getHomepage(), this.browserStorage.setTemporaryCache(fe.ORIGIN_URI, f, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(f, d)]) : [3, 6]) : [3, 9];
            case 5:
              return h = g.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + a), [4, this.navigationClient.navigateInternal(a, d)];
            case 7:
              h = g.sent(), g.label = 8;
            case 8:
              if (!h)
                return [2, this.handleHash(o, i, n)];
              g.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw p = g.sent(), p instanceof z && p.setCorrelationId(this.correlationId), n.cacheFailedRequest(p), this.browserStorage.cleanRequestByInteractionType(K.Redirect), p;
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
      var n = he.hashContainsKnownProperties(t);
      if (n)
        return Se.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
      var o = this.browserStorage.getTemporaryCache(fe.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(fe.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, e.prototype.handleHash = function(t, n, o) {
      return k(this, void 0, void 0, function() {
        var i, s, a, c, l, u, d, h = this;
        return N(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), s = he.getDeserializedHash(t), s.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw M.createNativeConnectionNotEstablishedError();
                return a = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, s.accountId, this.nativeStorage, i.correlationId), c = Bt.parseRequestState(this.browserCrypto, n).userRequestState, [2, a.acquireToken(B(B({}, i), {
                  state: c,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  h.browserStorage.cleanRequestByState(n);
                })];
              }
              if (l = this.browserStorage.getCachedAuthority(n), !l)
                throw M.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, i.correlationId), [4, this.createAuthCodeClient(o, l)];
            case 1:
              return u = f.sent(), this.logger.verbose("Auth code client created"), wo.removeThrottle(this.browserStorage, this.config.auth.clientId, i), d = new ac(u, this.browserStorage, i, this.logger, this.browserCrypto, this.performanceClient), [4, d.handleCodeResponseFromHash(t, n, u.authority, this.networkClient)];
            case 2:
              return [2, f.sent()];
          }
        });
      });
    }, e.prototype.logout = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              this.logger.verbose("logoutRedirect called"), n = this.initializeLogoutRequest(t), o = this.initializeServerTelemetryManager(be.logout), u.label = 1;
            case 1:
              return u.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(ee.LOGOUT_START, K.Redirect, t), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return u.sent(), i = {
                apiId: be.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return s = u.sent(), this.logger.verbose("Auth code client created"), a = s.getLogoutUri(n), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, K.Redirect, n), t && typeof t.onRedirectNavigate == "function" ? (c = t.onRedirectNavigate(a), c === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(a, i)])) : [3, 7];
            case 4:
              return u.sent(), [
                2
                /*return*/
              ];
            case 5:
              this.browserStorage.setInteractionInProgress(!1), this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation"), u.label = 6;
            case 6:
              return [3, 9];
            case 7:
              return this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(a, i)];
            case 8:
              return u.sent(), [
                2
                /*return*/
              ];
            case 9:
              return [3, 11];
            case 10:
              throw l = u.sent(), l instanceof z && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, K.Redirect, null, l), this.eventHandler.emitEvent(ee.LOGOUT_END, K.Redirect), l;
            case 11:
              return this.eventHandler.emitEvent(ee.LOGOUT_END, K.Redirect), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRedirectStartPage = function(t) {
      var n = t || window.location.href;
      return he.getAbsoluteUrl(n, Se.getCurrentUri());
    }, e;
  }(an)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Xf = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, d) {
      var h = r.call(this, t, n, o, i, s, a, c, u, d) || this;
      return h.unloadWindow = h.unloadWindow.bind(h), h.nativeStorage = l, h;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var n = this.generatePopupName(t.scopes || qn, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(t, n, o);
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        var i = this.openSizedPopup("about:blank", n, o);
        return this.acquireTokenPopupAsync(t, n, o, i);
      } catch (s) {
        return Promise.reject(s);
      }
    }, e.prototype.logout = function(t) {
      try {
        this.logger.verbose("logoutPopup called");
        var n = this.initializeLogoutRequest(t), o = this.generateLogoutPopupName(n), i = t && t.authority, s = t && t.mainWindowRedirectUri, a = (t == null ? void 0 : t.popupWindowAttributes) || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(n, o, a, i, void 0, s);
        this.logger.verbose("asyncPopup set to false, opening popup");
        var c = this.openSizedPopup("about:blank", o, a);
        return this.logoutPopupAsync(n, o, a, i, c, s);
      } catch (l) {
        return Promise.reject(l);
      }
    }, e.prototype.acquireTokenPopupAsync = function(t, n, o, i) {
      return k(this, void 0, void 0, function() {
        var s, a, c, l, u, d, h, f, p, g, m, b, C, v, w, E, T, A = this;
        return N(this, function(_) {
          switch (_.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), s = this.initializeServerTelemetryManager(be.acquireTokenPopup), this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Popup)];
            case 1:
              a = _.sent(), this.browserStorage.updateCacheEntries(a.state, a.nonce, a.authority, a.loginHint || S.EMPTY_STRING, a.account || null), _.label = 2;
            case 2:
              return _.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(a)];
            case 3:
              return c = _.sent(), this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(s, a.authority, a.azureCloudOptions)];
            case 4:
              return l = _.sent(), this.logger.verbose("Auth code client created"), u = Er.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), d = void 0, u && (d = this.performanceClient.startMeasurement(I.FetchAccountIdWithNativeBroker, t.correlationId)), [4, l.getAuthCodeUrl(B(B({}, a), { nativeBroker: u }))];
            case 5:
              return h = _.sent(), f = new Cs(l, this.browserStorage, c, this.logger, this.performanceClient), p = {
                popup: i,
                popupName: n,
                popupWindowAttributes: o
              }, g = this.initiateAuthRequest(h, p), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: g }, null), [4, this.monitorPopupForHash(g)];
            case 6:
              if (m = _.sent(), b = he.getDeserializedHash(m), C = this.validateAndExtractStateFromHash(b, K.Popup, a.correlationId), wo.removeThrottle(this.browserStorage, this.config.auth.clientId, c), b.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), d && d.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw M.createNativeConnectionNotEstablishedError();
                return v = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, b.accountId, this.nativeStorage, a.correlationId), w = Bt.parseRequestState(this.browserCrypto, C).userRequestState, [2, v.acquireToken(B(B({}, a), {
                  state: w,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  A.browserStorage.cleanRequestByState(C);
                })];
              }
              return [4, f.handleCodeResponseFromHash(m, C, l.authority, this.networkClient)];
            case 7:
              return E = _.sent(), [2, E];
            case 8:
              throw T = _.sent(), i && i.close(), T instanceof z && T.setCorrelationId(this.correlationId), s.cacheFailedRequest(T), this.browserStorage.cleanRequestByState(a.state), T;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logoutPopupAsync = function(t, n, o, i, s, a) {
      return k(this, void 0, void 0, function() {
        var c, l, u, d, h, f, p;
        return N(this, function(g) {
          switch (g.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(ee.LOGOUT_START, K.Popup, t), c = this.initializeServerTelemetryManager(be.logoutPopup), g.label = 1;
            case 1:
              return g.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return g.sent(), this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(c, i)];
            case 3:
              return l = g.sent(), this.logger.verbose("Auth code client created"), u = l.getLogoutUri(t), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, K.Popup, t), d = this.openPopup(u, { popupName: n, popupWindowAttributes: o, popup: s }), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: d }, null), [4, this.waitForLogoutPopup(d)];
            case 4:
              return g.sent(), a ? (h = {
                apiId: be.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, f = he.getAbsoluteUrl(a, Se.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + f), this.navigationClient.navigateInternal(f, h)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw p = g.sent(), s && s.close(), p instanceof z && p.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, K.Popup, null, p), this.eventHandler.emitEvent(ee.LOGOUT_END, K.Popup), c.cacheFailedRequest(p), p;
            case 6:
              return this.eventHandler.emitEvent(ee.LOGOUT_END, K.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (H.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), M.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, n);
    }, e.prototype.monitorPopupForHash = function(t) {
      var n = this;
      return new Promise(function(o, i) {
        var s = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, a = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var c = setInterval(function() {
          if (t.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(c), i(M.createUserCancelledError());
            return;
          }
          var l = S.EMPTY_STRING, u = S.EMPTY_STRING;
          try {
            l = t.location.href, u = t.location.hash;
          } catch {
          }
          H.isEmpty(l) || l === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), a++, u ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(c), n.cleanPopup(t), he.hashContainsKnownProperties(u) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(u)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + u), i(M.createHashDoesNotContainKnownPropertiesError()))) : a > s && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(c), i(M.createMonitorPopupTimeoutError())));
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.waitForLogoutPopup = function(t) {
      var n = this;
      return new Promise(function(o) {
        n.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var i = setInterval(function() {
          t.closed && (n.logger.error("PopupHandler.waitForLogoutPopup - window closed"), n.cleanPopup(), clearInterval(i), o());
          var s = S.EMPTY_STRING;
          try {
            s = t.location.href;
          } catch {
          }
          H.isEmpty(s) || s === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(i), n.cleanPopup(t), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, n.popupName, n.popupWindowAttributes)), !o)
          throw M.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (i) {
        throw this.logger.error("error opening popup " + i.message), this.browserStorage.setInteractionInProgress(!1), M.createPopupWindowError(i.toString());
      }
    }, e.prototype.openSizedPopup = function(t, n, o) {
      var i, s, a, c, l = window.screenLeft ? window.screenLeft : window.screenX, u = window.screenTop ? window.screenTop : window.screenY, d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, f = (i = o.popupSize) === null || i === void 0 ? void 0 : i.width, p = (s = o.popupSize) === null || s === void 0 ? void 0 : s.height, g = (a = o.popupPosition) === null || a === void 0 ? void 0 : a.top, m = (c = o.popupPosition) === null || c === void 0 ? void 0 : c.left;
      return (!f || f < 0 || f > d) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), f = Ct.POPUP_WIDTH), (!p || p < 0 || p > h) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), p = Ct.POPUP_HEIGHT), (!g || g < 0 || g > h) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), g = Math.max(0, h / 2 - Ct.POPUP_HEIGHT / 2 + u)), (!m || m < 0 || m > d) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), m = Math.max(0, d / 2 - Ct.POPUP_WIDTH / 2 + l)), window.open(t, n, "width=" + f + ", height=" + p + ", top=" + g + ", left=" + m + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(K.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, n) {
      return Ct.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + n + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var n = t.account && t.account.homeAccountId;
      return Ct.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + n + "." + this.correlationId;
    }, e;
  }(an)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Zf = (
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ep = 6e4, Wi = 6e3, tp = 3e4, rp = 2e3;
function np(r, e) {
  var t = r.auth, n = r.cache, o = r.system, i = r.telemetry, s = {
    clientId: S.EMPTY_STRING,
    authority: "" + S.DEFAULT_AUTHORITY,
    knownAuthorities: [],
    cloudDiscoveryMetadata: S.EMPTY_STRING,
    authorityMetadata: S.EMPTY_STRING,
    redirectUri: S.EMPTY_STRING,
    postLogoutRedirectUri: S.EMPTY_STRING,
    navigateToLoginRequestUrl: !0,
    clientCapabilities: [],
    protocolMode: Zr.AAD,
    azureCloudOptions: {
      azureCloudInstance: xn.None,
      tenant: S.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, a = {
    cacheLocation: _e.SessionStorage,
    temporaryCacheLocation: _e.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(n && n.cacheLocation === _e.LocalStorage),
    claimsBasedCachingEnabled: !0
  }, c = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: Ee.Info,
    piiLoggingEnabled: !1
  }, l = B(B({}, kl), {
    loggerOptions: c,
    networkClient: e ? Se.getBrowserNetworkClient() : $f,
    navigationClient: new Zf(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || ep,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Wi,
    navigateFrameWait: e && Se.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: tp,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || rp,
    pollIntervalMilliseconds: Ct.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), u = B(B({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || c }), d = {
    application: {
      appName: S.EMPTY_STRING,
      appVersion: S.EMPTY_STRING
    }
  }, h = {
    auth: B(B({}, s), t),
    cache: B(B({}, a), n),
    system: B(B({}, l), u),
    telemetry: B(B({}, d), i)
  };
  return h;
}
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ul = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a) {
      var c = r.call(this, t, n, o, i, a) || this;
      return c.navigateFrameWait = s.navigateFrameWait, c.pollIntervalMilliseconds = s.pollIntervalMilliseconds, c;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(I.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), H.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), M.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(I.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(t)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return [2, this.loadFrameSync(t)];
          }
        });
      });
    }, e.prototype.monitorIframeForHash = function(t, n) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(I.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(i, s) {
        n < Wi && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + Wi + "ms). This may result in timeouts.");
        var a = window.performance.now(), c = a + n, l = setInterval(function() {
          if (window.performance.now() > c) {
            o.removeHiddenIframe(t), clearInterval(l), s(M.createMonitorIframeTimeoutError());
            return;
          }
          var u = S.EMPTY_STRING, d = t.contentWindow;
          try {
            u = d ? d.location.href : S.EMPTY_STRING;
          } catch {
          }
          if (!H.isEmpty(u)) {
            var h = d ? d.location.hash : S.EMPTY_STRING;
            if (he.hashContainsKnownProperties(h)) {
              o.removeHiddenIframe(t), clearInterval(l), i(h);
              return;
            }
          }
        }, o.pollIntervalMilliseconds);
      });
    }, e.prototype.loadFrame = function(t) {
      var n = this;
      return this.performanceClient.addQueueMeasurement(I.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, i) {
        var s = n.createHiddenIframe();
        setTimeout(function() {
          if (!s) {
            i("Unable to load iframe");
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
      return t.className = "msalSilentIframe", t.style.visibility = "hidden", t.style.position = "absolute", t.style.width = t.style.height = "0", t.style.border = "0", t.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), document.getElementsByTagName("body")[0].appendChild(t), t;
    }, e.prototype.removeHiddenIframe = function(t) {
      document.body === t.parentNode && document.body.removeChild(t);
    }, e;
  }(Cs)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var op = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, d, h) {
      var f = r.call(this, t, n, o, i, s, a, l, d, h) || this;
      return f.apiId = c, f.nativeStorage = u, f;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a;
        return N(this, function(c) {
          switch (c.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(I.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(I.SilentIframeClientAcquireToken, t.correlationId), H.isEmpty(t.loginHint) && H.isEmpty(t.sid) && (!t.account || H.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== He.NONE && t.prompt !== He.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), M.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(B(B({}, t), { prompt: t.prompt || He.NONE }), K.Silent)];
            case 1:
              o = c.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || S.EMPTY_STRING, o.account || null), i = this.initializeServerTelemetryManager(this.apiId), c.label = 2;
            case 2:
              return c.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(I.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(i, o.authority, o.azureCloudOptions)];
            case 3:
              return s = c.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(I.SilentIframeClientTokenHelper, t.correlationId), [4, this.silentTokenHelper(s, o).then(function(l) {
                return n.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: l.requestId
                }), l;
              })];
            case 4:
              return [2, c.sent()];
            case 5:
              throw a = c.sent(), a instanceof z && a.setCorrelationId(this.correlationId), i.cacheFailedRequest(a), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: a instanceof z && a.errorCode || void 0,
                subErrorCode: a instanceof z && a.subError || void 0,
                success: !1
              }), a;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(M.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o, i, s, a, c, l, u, d, h, f = this;
        return N(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = p.sent(), this.performanceClient.setPreQueueTime(I.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(B(B({}, n), { nativeBroker: Er.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return i = p.sent(), s = new Ul(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(I.SilentHandlerInitiateAuthRequest, n.correlationId), [4, s.initiateAuthRequest(i)];
            case 3:
              return a = p.sent(), this.performanceClient.setPreQueueTime(I.SilentHandlerMonitorIframeForHash, n.correlationId), [4, s.monitorIframeForHash(a, this.config.system.iframeHashTimeout)];
            case 4:
              if (c = p.sent(), l = he.getDeserializedHash(c), u = this.validateAndExtractStateFromHash(l, K.Silent, o.correlationId), l.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw M.createNativeConnectionNotEstablishedError();
                return d = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId), h = Bt.parseRequestState(this.browserCrypto, u).userRequestState, [2, d.acquireToken(B(B({}, n), { state: h, prompt: n.prompt || He.NONE })).finally(function() {
                  f.browserStorage.cleanRequestByState(u);
                })];
              }
              return this.performanceClient.setPreQueueTime(I.HandleCodeResponseFromHash, n.correlationId), [2, s.handleCodeResponseFromHash(c, u, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(an)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ip = (
  /** @class */
  function(r) {
    Me(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c = this;
        return N(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(I.InitializeBaseRequest, t.correlationId), o = [B({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return n = B.apply(void 0, o.concat([l.sent()])), i = this.performanceClient.startMeasurement(I.SilentRefreshClientAcquireToken, n.correlationId), s = this.initializeServerTelemetryManager(be.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(s, n.authority, n.azureCloudOptions)];
            case 2:
              return a = l.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(I.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, a.acquireTokenByRefreshToken(n).then(function(u) {
                return i.endMeasurement({
                  success: !0,
                  fromCache: u.fromCache,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw u instanceof z && u.setCorrelationId(c.correlationId), s.cacheFailedRequest(u), i.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              })];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(M.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, n, o) {
      return k(this, void 0, void 0, function() {
        var i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = s.sent(), [2, new Pl(i, this.performanceClient)];
          }
        });
      });
    }, e;
  }(an)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var sp = (
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
      var i = this;
      if (typeof window < "u") {
        var s = {
          eventType: e,
          interactionType: t || null,
          payload: n || null,
          error: o || null,
          timestamp: Date.now()
        };
        this.logger.info("Emitting event: " + e), this.eventCallbacks.forEach(function(a, c) {
          i.logger.verbose("Emitting event to callback " + c + ": " + e), a.apply(null, [s]);
        });
      }
    }, r.prototype.handleAccountCacheChange = function(e) {
      try {
        var t = e.newValue || e.oldValue;
        if (!t)
          return;
        var n = JSON.parse(t);
        if (typeof n != "object" || !Fe.isAccountEntity(n))
          return;
        var o = Ve.toObject(new Fe(), n), i = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(ee.ACCOUNT_ADDED, void 0, i)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(ee.ACCOUNT_REMOVED, void 0, i));
      } catch {
        return;
      }
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Le = (
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Hl = (
  /** @class */
  function() {
    function r(e) {
      this.cryptoObj = e;
    }
    return r.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, Le.decimalToHex(e[0]) + Le.decimalToHex(e[1]) + Le.decimalToHex(e[2]) + Le.decimalToHex(e[3]) + "-" + Le.decimalToHex(e[4]) + Le.decimalToHex(e[5]) + "-" + Le.decimalToHex(e[6]) + Le.decimalToHex(e[7]) + "-" + Le.decimalToHex(e[8]) + Le.decimalToHex(e[9]) + "-" + Le.decimalToHex(e[10]) + Le.decimalToHex(e[11]) + Le.decimalToHex(e[12]) + Le.decimalToHex(e[13]) + Le.decimalToHex(e[14]) + Le.decimalToHex(e[15]);
      } catch {
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef", o = 0, i = S.EMPTY_STRING, s = 0; s < 36; s++)
          t[s] !== "-" && t[s] !== "4" && (o = Math.random() * 16 | 0), t[s] === "x" ? i += n[o] : t[s] === "y" ? (o &= 3, o |= 8, i += n[o]) : i += t[s];
        return i;
      }
    }, r.prototype.isGuid = function(e) {
      var t = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return t.test(e);
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var jt = (
  /** @class */
  function() {
    function r() {
    }
    return r.stringToUtf8Arr = function(e) {
      for (var t, n = 0, o = e.length, i = 0; i < o; i++)
        t = e.charCodeAt(i), n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
      for (var s = new Uint8Array(n), a = 0, c = 0; a < n; c++)
        t = e.charCodeAt(c), t < 128 ? s[a++] = t : t < 2048 ? (s[a++] = 192 + (t >>> 6), s[a++] = 128 + (t & 63)) : t < 65536 ? (s[a++] = 224 + (t >>> 12), s[a++] = 128 + (t >>> 6 & 63), s[a++] = 128 + (t & 63)) : t < 2097152 ? (s[a++] = 240 + (t >>> 18), s[a++] = 128 + (t >>> 12 & 63), s[a++] = 128 + (t >>> 6 & 63), s[a++] = 128 + (t & 63)) : t < 67108864 ? (s[a++] = 248 + (t >>> 24), s[a++] = 128 + (t >>> 18 & 63), s[a++] = 128 + (t >>> 12 & 63), s[a++] = 128 + (t >>> 6 & 63), s[a++] = 128 + (t & 63)) : (s[a++] = 252 + (t >>> 30), s[a++] = 128 + (t >>> 24 & 63), s[a++] = 128 + (t >>> 18 & 63), s[a++] = 128 + (t >>> 12 & 63), s[a++] = 128 + (t >>> 6 & 63), s[a++] = 128 + (t & 63));
      return s;
    }, r.stringToArrayBuffer = function(e) {
      for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), o = 0; o < e.length; o++)
        n[o] = e.charCodeAt(o);
      return t;
    }, r.utf8ArrToString = function(e) {
      for (var t = S.EMPTY_STRING, n = void 0, o = e.length, i = 0; i < o; i++)
        n = e[i], t += String.fromCharCode(n > 251 && n < 254 && i + 5 < o ? (
          /* six bytes */
          /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
          (n - 252) * 1073741824 + (e[++i] - 128 << 24) + (e[++i] - 128 << 18) + (e[++i] - 128 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : n > 247 && n < 252 && i + 4 < o ? (
          /* five bytes */
          (n - 248 << 24) + (e[++i] - 128 << 18) + (e[++i] - 128 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : n > 239 && n < 248 && i + 3 < o ? (
          /* four bytes */
          (n - 240 << 18) + (e[++i] - 128 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : n > 223 && n < 240 && i + 2 < o ? (
          /* three bytes */
          (n - 224 << 12) + (e[++i] - 128 << 6) + e[++i] - 128
        ) : n > 191 && n < 224 && i + 1 < o ? (
          /* two bytes */
          (n - 192 << 6) + e[++i] - 128
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Fl = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, S.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, S.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(e) {
      var t = jt.stringToUtf8Arr(e);
      return this.base64EncArr(t);
    }, r.prototype.base64EncArr = function(e) {
      for (var t = (3 - e.length % 3) % 3, n = S.EMPTY_STRING, o = void 0, i = e.length, s = 0, a = 0; a < i; a++)
        o = a % 3, s |= e[a] << (16 >>> o & 24), (o === 2 || e.length - a === 1) && (n += String.fromCharCode(this.uint6ToB64(s >>> 18 & 63), this.uint6ToB64(s >>> 12 & 63), this.uint6ToB64(s >>> 6 & 63), this.uint6ToB64(s & 63)), s = 0);
      return t === 0 ? n : n.substring(0, n.length - t) + (t === 1 ? "=" : "==");
    }, r.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ap = (
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
      return jt.utf8ArrToString(n);
    }, r.prototype.base64DecToArr = function(e, t) {
      for (var n = e.replace(/[^A-Za-z0-9\+\/]/g, S.EMPTY_STRING), o = n.length, i = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, s = new Uint8Array(i), a = void 0, c = void 0, l = 0, u = 0, d = 0; d < o; d++)
        if (c = d & 3, l |= this.b64ToUint6(n.charCodeAt(d)) << 18 - 6 * c, c === 3 || o - d === 1) {
          for (a = 0; a < 3 && u < i; a++, u++)
            s[u] = l >>> (16 >>> a & 24) & 255;
          l = 0;
        }
      return s;
    }, r.prototype.b64ToUint6 = function(e) {
      return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : e === 43 ? 62 : e === 47 ? 63 : 0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var cp = 32, lp = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new Fl(), this.cryptoObj = e;
    }
    return r.prototype.generateCodes = function() {
      return k(this, void 0, void 0, function() {
        var e, t;
        return N(this, function(n) {
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
        var e = new Uint8Array(cp);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (n) {
        throw M.createPkceNotGeneratedError(n);
      }
    }, r.prototype.generateCodeChallengeFromVerifier = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(e)];
            case 1:
              return t = o.sent(), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
            case 2:
              throw n = o.sent(), M.createPkceNotGeneratedError(n);
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var up = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(e) {
      return window.crypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.crypto.subtle.generateKey(e, t, n)];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return k(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, window.crypto.subtle.exportKey(tn, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return k(this, void 0, void 0, function() {
        return N(this, function(i) {
          return [2, window.crypto.subtle.importKey(tn, e, t, n, o)];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.crypto.subtle.sign(e, t, n)];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, window.crypto.subtle.digest(e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var dp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(ps(e));
    }, r.prototype.getRandomValues = function(e) {
      return window.msrCrypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.msrCrypto.subtle.generateKey(e, t, n)];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return k(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, window.msrCrypto.subtle.exportKey(tn, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return k(this, void 0, void 0, function() {
        return N(this, function(i) {
          return [2, window.msrCrypto.subtle.importKey(tn, e, t, n, o)];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, window.msrCrypto.subtle.sign(e, t, n)];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, window.msrCrypto.subtle.digest(e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(e) {
      return window.msCrypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, new Promise(function(i, s) {
            var a = window.msCrypto.subtle.generateKey(e, t, n);
            a.addEventListener("complete", function(c) {
              i(c.target.result);
            }), a.addEventListener("error", function(c) {
              s(c);
            });
          })];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return k(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, new Promise(function(n, o) {
            var i = window.msCrypto.subtle.exportKey(tn, e);
            i.addEventListener("complete", function(s) {
              var a = s.target.result, c = jt.utf8ArrToString(new Uint8Array(a)).replace(/\r/g, S.EMPTY_STRING).replace(/\n/g, S.EMPTY_STRING).replace(/\t/g, S.EMPTY_STRING).split(" ").join(S.EMPTY_STRING).replace("\0", S.EMPTY_STRING);
              try {
                n(JSON.parse(c));
              } catch (l) {
                o(l);
              }
            }), i.addEventListener("error", function(s) {
              o(s);
            });
          })];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return k(this, void 0, void 0, function() {
        var i, s;
        return N(this, function(a) {
          return i = jt.getSortedObjectString(e), s = jt.stringToArrayBuffer(i), [2, new Promise(function(c, l) {
            var u = window.msCrypto.subtle.importKey(tn, s, t, n, o);
            u.addEventListener("complete", function(d) {
              c(d.target.result);
            }), u.addEventListener("error", function(d) {
              l(d);
            });
          })];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, new Promise(function(i, s) {
            var a = window.msCrypto.subtle.sign(e, t, n);
            a.addEventListener("complete", function(c) {
              i(c.target.result);
            }), a.addEventListener("error", function(c) {
              s(c);
            });
          })];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, new Promise(function(o, i) {
            var s = window.msCrypto.subtle.digest(e, t.buffer);
            s.addEventListener("complete", function(a) {
              o(a.target.result);
            }), s.addEventListener("error", function(a) {
              i(a);
            });
          })];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var fp = "RSASSA-PKCS1-v1_5", cc = "SHA-256", pp = 2048, gp = new Uint8Array([1, 0, 1]), Bl = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new up();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new hp();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new dp();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), M.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), Io.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: fp,
        hash: cc,
        modulusLength: pp,
        publicExponent: gp
      };
    }
    return r.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    }, r.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    }, r.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    }, r.prototype.sha256Digest = function(e) {
      return k(this, void 0, void 0, function() {
        var t;
        return N(this, function(n) {
          return t = jt.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: cc }, t)];
        });
      });
    }, r.prototype.getRandomValues = function(e) {
      return this.subtleCrypto.getRandomValues(e);
    }, r.prototype.generateKeyPair = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, r.prototype.exportJwk = function(e) {
      return k(this, void 0, void 0, function() {
        return N(this, function(t) {
          return [2, this.subtleCrypto.exportKey(e)];
        });
      });
    }, r.prototype.importJwk = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          return [2, this.subtleCrypto.importKey(e, this.keygenAlgorithmOptions, t, n)];
        });
      });
    }, r.prototype.sign = function(e, t) {
      return k(this, void 0, void 0, function() {
        return N(this, function(n) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var mp = (
  /** @class */
  function() {
    function r() {
      this.dbName = zi, this.version = Gf, this.tableName = Vf, this.dbOpen = !1;
    }
    return r.prototype.open = function() {
      return k(this, void 0, void 0, function() {
        var e = this;
        return N(this, function(t) {
          return [2, new Promise(function(n, o) {
            var i = window.indexedDB.open(e.dbName, e.version);
            i.addEventListener("upgradeneeded", function(s) {
              var a = s;
              a.target.result.createObjectStore(e.tableName);
            }), i.addEventListener("success", function(s) {
              var a = s;
              e.db = a.target.result, e.dbOpen = !0, n();
            }), i.addEventListener("error", function() {
              return o(M.createDatabaseUnavailableError());
            });
          })];
        });
      });
    }, r.prototype.closeConnection = function() {
      var e = this.db;
      e && this.dbOpen && (e.close(), this.dbOpen = !1);
    }, r.prototype.validateDbIsOpen = function() {
      return k(this, void 0, void 0, function() {
        return N(this, function(e) {
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
      return k(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(M.createDatabaseNotOpenError());
                var s = t.db.transaction([t.tableName], "readonly"), a = s.objectStore(t.tableName), c = a.get(e);
                c.addEventListener("success", function(l) {
                  var u = l;
                  t.closeConnection(), o(u.target.result);
                }), c.addEventListener("error", function(l) {
                  t.closeConnection(), i(l);
                });
              })];
          }
        });
      });
    }, r.prototype.setItem = function(e, t) {
      return k(this, void 0, void 0, function() {
        var n = this;
        return N(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return o.sent(), [2, new Promise(function(i, s) {
                if (!n.db)
                  return s(M.createDatabaseNotOpenError());
                var a = n.db.transaction([n.tableName], "readwrite"), c = a.objectStore(n.tableName), l = c.put(t, e);
                l.addEventListener("success", function() {
                  n.closeConnection(), i();
                }), l.addEventListener("error", function(u) {
                  n.closeConnection(), s(u);
                });
              })];
          }
        });
      });
    }, r.prototype.removeItem = function(e) {
      return k(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(M.createDatabaseNotOpenError());
                var s = t.db.transaction([t.tableName], "readwrite"), a = s.objectStore(t.tableName), c = a.delete(e);
                c.addEventListener("success", function() {
                  t.closeConnection(), o();
                }), c.addEventListener("error", function(l) {
                  t.closeConnection(), i(l);
                });
              })];
          }
        });
      });
    }, r.prototype.getKeys = function() {
      return k(this, void 0, void 0, function() {
        var e = this;
        return N(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return t.sent(), [2, new Promise(function(n, o) {
                if (!e.db)
                  return o(M.createDatabaseNotOpenError());
                var i = e.db.transaction([e.tableName], "readonly"), s = i.objectStore(e.tableName), a = s.getAllKeys();
                a.addEventListener("success", function(c) {
                  var l = c;
                  e.closeConnection(), n(l.target.result);
                }), a.addEventListener("error", function(c) {
                  e.closeConnection(), o(c);
                });
              })];
          }
        });
      });
    }, r.prototype.containsKey = function(e) {
      return k(this, void 0, void 0, function() {
        var t = this;
        return N(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(M.createDatabaseNotOpenError());
                var s = t.db.transaction([t.tableName], "readonly"), a = s.objectStore(t.tableName), c = a.count(e);
                c.addEventListener("success", function(l) {
                  var u = l;
                  t.closeConnection(), o(u.target.result === 1);
                }), c.addEventListener("error", function(l) {
                  t.closeConnection(), i(l);
                });
              })];
          }
        });
      });
    }, r.prototype.deleteDatabase = function() {
      return k(this, void 0, void 0, function() {
        return N(this, function(e) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(t, n) {
            var o = window.indexedDB.deleteDatabase(zi);
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var lc = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new Gi(), this.indexedDBCache = new mp(), this.logger = e, this.storeName = t;
    }
    return r.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof M && e.errorCode === P.databaseUnavailable.code)
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      else
        throw e;
    }, r.prototype.getItem = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n;
        return N(this, function(o) {
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
      return k(this, void 0, void 0, function() {
        var n;
        return N(this, function(o) {
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
      return k(this, void 0, void 0, function() {
        var t;
        return N(this, function(n) {
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
      return k(this, void 0, void 0, function() {
        var e, t;
        return N(this, function(n) {
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
      return k(this, void 0, void 0, function() {
        var t, n;
        return N(this, function(o) {
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
      return k(this, void 0, void 0, function() {
        var e, t;
        return N(this, function(n) {
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ao;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(Ao || (Ao = {}));
var yp = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new lc(this.logger, Ao.asymmetricKeys), this.symmetricKeys = new lc(this.logger, Ao.symmetricKeys);
    }
    return r.prototype.clear = function() {
      return k(this, void 0, void 0, function() {
        var e;
        return N(this, function(t) {
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var vp = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new Bl(this.logger, n), this.b64Encode = new Fl(), this.b64Decode = new ap(), this.guidGenerator = new Hl(this.browserCrypto), this.pkceGenerator = new lp(this.browserCrypto), this.cache = new yp(this.logger), this.performanceClient = t;
    }
    return r.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    }, r.prototype.base64Encode = function(e) {
      return this.b64Encode.encode(e);
    }, r.prototype.base64Decode = function(e) {
      return this.b64Decode.decode(e);
    }, r.prototype.generatePkceCodes = function() {
      return k(this, void 0, void 0, function() {
        return N(this, function(e) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    }, r.prototype.getPublicKeyThumbprint = function(e) {
      var t;
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              return n = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(I.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(r.EXTRACTABLE, r.POP_KEY_USAGES)];
            case 1:
              return o = d.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return i = d.sent(), s = {
                e: i.e,
                kty: i.kty,
                n: i.n
              }, a = jt.getSortedObjectString(s), [4, this.hashString(a)];
            case 3:
              return c = d.sent(), [4, this.browserCrypto.exportJwk(o.privateKey)];
            case 4:
              return l = d.sent(), [4, this.browserCrypto.importJwk(l, !1, ["sign"])];
            case 5:
              return u = d.sent(), [4, this.cache.asymmetricKeys.setItem(c, {
                privateKey: u,
                publicKey: o.publicKey,
                requestMethod: e.resourceRequestMethod,
                requestUri: e.resourceRequestUri
              })];
            case 6:
              return d.sent(), n && n.endMeasurement({
                success: !0
              }), [2, c];
          }
        });
      });
    }, r.prototype.removeTokenBindingKey = function(e) {
      return k(this, void 0, void 0, function() {
        var t;
        return N(this, function(n) {
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
      return k(this, void 0, void 0, function() {
        return N(this, function(e) {
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
      return k(this, void 0, void 0, function() {
        var i, s, a, c, l, u, d, h, f, p, g, m, b;
        return N(this, function(C) {
          switch (C.label) {
            case 0:
              return i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(I.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (s = C.sent(), !s)
                throw M.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(s.publicKey)];
            case 2:
              return a = C.sent(), c = jt.getSortedObjectString(a), l = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), u = Kf.getShrHeaderString({ kid: l, alg: a.alg }), d = this.b64Encode.urlEncode(u), e.cnf = {
                jwk: JSON.parse(c)
              }, h = this.b64Encode.urlEncode(JSON.stringify(e)), f = d + "." + h, p = jt.stringToArrayBuffer(f), [4, this.browserCrypto.sign(s.privateKey, p)];
            case 3:
              return g = C.sent(), m = this.b64Encode.urlEncodeArr(new Uint8Array(g)), b = f + "." + m, i && i.endMeasurement({
                success: !0
              }), [2, b];
          }
        });
      });
    }, r.prototype.hashString = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n;
        return N(this, function(o) {
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var uc = (
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
            var o = r.makeMeasureName(n.name, e), i = window.performance.getEntriesByName(o, "measure");
            i.length > 0 && (window.performance.clearMeasures(o), window.performance.clearMarks(r.makeStartMark(o, e)), window.performance.clearMarks(r.makeEndMark(o, e)));
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
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Cp = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c) {
      var l = r.call(this, t, n, o, i, s, a) || this;
      return l.browserCrypto = new Bl(l.logger, c), l.guidGenerator = new Hl(l.browserCrypto), l;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new uc(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, i = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(s) {
        i.push(B({}, s));
      }), i.length > 0 && uc.flushMeasurements(t.event.correlationId, i);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, n) {
      var o = this, i = this.getPageVisibility(), s = r.prototype.startMeasurement.call(this, t, n);
      return B(B({}, s), { endMeasurement: function(a) {
        var c = s.endMeasurement(B({ startPageVisibility: i, endPageVisibility: o.getPageVisibility() }, a));
        return o.deleteIncompleteSubMeasurements(s), c;
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
    }, e.prototype.addQueueMeasurement = function(t, n, o, i) {
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
        var a = window.performance.now(), c = o || r.prototype.calculateQueuedTime.call(this, s, a);
        return r.prototype.addQueueMeasurement.call(this, t, n, c, i);
      }
    }, e;
  }(xl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var bp = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw M.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new Ot(t.id_token, this.cryptoObj), i, s, a;
      if (e.account)
        a = Fe.createFromAccountInfo(e.account), i = new Qr(a, this.loadIdToken(o, a.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, a.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, a.homeAccountId, e.account.environment));
      else if (e.authority) {
        var c = Mn.generateAuthority(e.authority, e.azureCloudOptions), l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (s = new Mn(c, this.config.system.networkClient, this.storage, l, this.logger), n.clientInfo)
          this.logger.trace("TokenCache - homeAccountId from options"), a = this.loadAccount(o, s, n.clientInfo), i = new Qr(a, this.loadIdToken(o, a.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, a.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, a.homeAccountId, s.hostnameAndPort));
        else if (t.client_info)
          this.logger.trace("TokenCache - homeAccountId from response"), a = this.loadAccount(o, s, t.client_info), i = new Qr(a, this.loadIdToken(o, a.homeAccountId, s.hostnameAndPort, s.tenant), this.loadAccessToken(e, t, a.homeAccountId, s.hostnameAndPort, s.tenant, n), this.loadRefreshToken(e, t, a.homeAccountId, s.hostnameAndPort));
        else
          throw M.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw M.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, i, a, s);
    }, r.prototype.loadAccount = function(e, t, n, o) {
      var i;
      if (o ? i = o : t.authorityType !== void 0 && n && (i = Fe.generateHomeAccountId(n, t.authorityType, this.logger, this.cryptoObj, e.claims)), !i)
        throw M.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var s = Fe.createAccount({ homeAccountId: i, idTokenClaims: e.claims, clientInfo: n, environment: t.hostnameAndPort }, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(s), s;
      throw M.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(e, t, n, o) {
      var i = er.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(i), i;
      throw M.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(e, t, n, o, i, s) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw M.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!s.extendedExpiresOn)
        throw M.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var a = new De(e.scopes).printScopes(), c = s.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, l = s.extendedExpiresOn, u = tr.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, i, a, c, l, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u), u;
      throw M.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var i = Vr.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(i), i;
      throw M.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o, i) {
      var s, a = S.EMPTY_STRING, c = [], l = null, u;
      n.accessToken && (a = n.accessToken.secret, c = De.fromString(n.accessToken.target).asArray(), l = new Date(Number(n.accessToken.expiresOn) * 1e3), u = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var d = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || S.EMPTY_STRING, h = (t == null ? void 0 : t.claims.tid) || S.EMPTY_STRING;
      return {
        authority: i ? i.canonicalAuthority : S.EMPTY_STRING,
        uniqueId: d,
        tenantId: h,
        scopes: c,
        account: o ? o.getAccountInfo() : null,
        idToken: t ? t.rawToken : S.EMPTY_STRING,
        idTokenClaims: t ? t.claims : {},
        accessToken: a,
        fromCache: !0,
        expiresOn: l,
        correlationId: e.correlationId || S.EMPTY_STRING,
        requestId: S.EMPTY_STRING,
        extExpiresOn: u,
        familyId: S.EMPTY_STRING,
        tokenType: ((s = n == null ? void 0 : n.accessToken) === null || s === void 0 ? void 0 : s.tokenType) || S.EMPTY_STRING,
        state: S.EMPTY_STRING,
        cloudGraphHostName: o.cloudGraphHostName || S.EMPTY_STRING,
        msGraphHost: o.msGraphHost || S.EMPTY_STRING,
        code: void 0,
        fromNativeBroker: !1
      };
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var wp = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(Nl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ep = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t, n, o, i, s, a, c, l, u, d) {
      var h = r.call(this, t, n, o, i, s, a, l, u, d) || this;
      return h.apiId = c, h;
    }
    return e.prototype.acquireToken = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l;
        return N(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !t.code)
                throw M.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(I.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Silent)];
            case 1:
              n = u.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || S.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), i = B(B({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(I.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return s = u.sent(), a = new wp(s), this.logger.verbose("Auth code client created"), c = new Ul(a, this.browserStorage, i, this.logger, this.config.system, this.performanceClient), [2, c.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, a.authority, this.networkClient, !1)];
            case 4:
              throw l = u.sent(), l instanceof z && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(n.state), l;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(M.createSilentLogoutUnsupportedError());
    }, e;
  }(an)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Sp = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = np(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new gs(this.config.system.loggerOptions, pi, Nn), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new Cp(this.config.auth.clientId, this.config.auth.authority, this.logger, pi, Nn, this.config.telemetry.application, this.config.system.cryptoOptions) : new zf(this.config.auth.clientId, this.config.auth.authority, this.logger, pi, Nn, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new vp(this.logger, this.performanceClient, this.config.system.cryptoOptions) : Co, this.eventHandler = new sp(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new Vi(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : Wf(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: _e.MemoryStorage,
        temporaryCacheLocation: _e.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new Vi(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new bp(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    return r.prototype.initialize = function() {
      return k(this, void 0, void 0, function() {
        var e, t, n, o, i;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              if (this.logger.trace("initialize called"), this.initialized)
                return this.logger.info("initialize has already been called, exiting early."), [
                  2
                  /*return*/
                ];
              if (e = this.config.system.allowNativeBroker, t = this.performanceClient.startMeasurement(I.InitializeClientApplication), this.eventHandler.emitEvent(ee.INITIALIZE_START), !e)
                return [3, 4];
              s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), n = this, [4, Er.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return n.nativeExtensionProvider = s.sent(), [3, 4];
            case 3:
              return o = s.sent(), this.logger.verbose(o), [3, 4];
            case 4:
              return this.config.cache.claimsBasedCachingEnabled ? [3, 6] : (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), i = this.performanceClient.startMeasurement(I.ClearTokensAndKeysWithClaims), [4, this.browserStorage.clearTokensAndKeysWithClaims()]);
            case 5:
              s.sent(), i.endMeasurement({ success: !0 }), s.label = 6;
            case 6:
              return this.initialized = !0, this.eventHandler.emitEvent(ee.INITIALIZE_END), t.endMeasurement({ allowNativeBroker: e, success: !0 }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.handleRedirectPromise = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n, o, i, s, a, c, l, u = this;
        return N(this, function(d) {
          return this.logger.verbose("handleRedirectPromise called"), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || S.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(ee.HANDLE_REDIRECT_START, K.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), i = this.browserStorage.getCachedNativeRequest(), s = void 0, i && Er.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), a = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId), s = a.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), c = this.browserStorage.getTemporaryCache(fe.CORRELATION_ID, !0) || S.EMPTY_STRING, l = this.createRedirectClient(c), s = l.handleRedirectPromise(e)), o = s.then(function(h) {
            if (h) {
              var f = t.length < u.getAllAccounts().length;
              f ? (u.eventHandler.emitEvent(ee.LOGIN_SUCCESS, K.Redirect, h), u.logger.verbose("handleRedirectResponse returned result, login success")) : (u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, K.Redirect, h), u.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return u.eventHandler.emitEvent(ee.HANDLE_REDIRECT_END, K.Redirect), h;
          }).catch(function(h) {
            throw t.length > 0 ? u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Redirect, null, h) : u.eventHandler.emitEvent(ee.LOGIN_FAILURE, K.Redirect, null, h), u.eventHandler.emitEvent(ee.HANDLE_REDIRECT_END, K.Redirect), h;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n, o, i, s, a = this;
        return N(this, function(c) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(K.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Redirect, e) : this.eventHandler.emitEvent(ee.LOGIN_START, K.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (i = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = i.acquireTokenRedirect(e).catch(function(l) {
            if (l instanceof kt && l.isFatal()) {
              a.nativeExtensionProvider = void 0;
              var u = a.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            } else if (l instanceof wt) {
              a.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var u = a.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            }
            throw a.browserStorage.setInteractionInProgress(!1), l;
          })) : (s = this.createRedirectClient(e.correlationId), o = s.acquireToken(e)), [2, o.catch(function(l) {
            throw n ? a.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Redirect, null, l) : a.eventHandler.emitEvent(ee.LOGIN_FAILURE, K.Redirect, null, l), l;
          })];
        });
      });
    }, r.prototype.acquireTokenPopup = function(e) {
      var t = this, n = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(I.AcquireTokenPopup, n);
      try {
        this.logger.verbose("acquireTokenPopup called", n), this.preflightBrowserEnvironmentCheck(K.Popup);
      } catch (c) {
        return Promise.reject(c);
      }
      var i = this.getAllAccounts();
      i.length > 0 ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Popup, e) : this.eventHandler.emitEvent(ee.LOGIN_START, K.Popup, e);
      var s;
      if (this.canUseNative(e))
        s = this.acquireTokenNative(e, be.acquireTokenPopup).then(function(c) {
          return t.browserStorage.setInteractionInProgress(!1), o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: c.requestId
          }), c;
        }).catch(function(c) {
          if (c instanceof kt && c.isFatal()) {
            t.nativeExtensionProvider = void 0;
            var l = t.createPopupClient(e.correlationId);
            return l.acquireToken(e);
          } else if (c instanceof wt) {
            t.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow");
            var l = t.createPopupClient(e.correlationId);
            return l.acquireToken(e);
          }
          throw t.browserStorage.setInteractionInProgress(!1), c;
        });
      else {
        var a = this.createPopupClient(e.correlationId);
        s = a.acquireToken(e);
      }
      return s.then(function(c) {
        var l = i.length < t.getAllAccounts().length;
        return l ? t.eventHandler.emitEvent(ee.LOGIN_SUCCESS, K.Popup, c) : t.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, K.Popup, c), o.addStaticFields({
          accessTokenSize: c.accessToken.length,
          idTokenSize: c.idToken.length
        }), o.endMeasurement({
          success: !0,
          requestId: c.requestId
        }), c;
      }).catch(function(c) {
        return i.length > 0 ? t.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Popup, null, c) : t.eventHandler.emitEvent(ee.LOGIN_FAILURE, K.Popup, null, c), o.endMeasurement({
          errorCode: c.errorCode,
          subErrorCode: c.subError,
          success: !1
        }), Promise.reject(c);
      });
    }, r.prototype.trackPageVisibilityWithMeasurement = function() {
      var e = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
      e && (this.logger.info("Perf: Visibility change detected in ", e.event.name), e.increment({
        visibilityChangeCount: 1
      }));
    }, r.prototype.ssoSilent = function(e) {
      var t;
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a = this;
        return N(this, function(c) {
          return n = this.getRequestCorrelationId(e), o = B(B({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: n
          }), this.preflightBrowserEnvironmentCheck(K.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(I.SsoSilent, n), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(ee.SSO_SILENT_START, K.Silent, o), this.canUseNative(o) ? i = this.acquireTokenNative(o, be.ssoSilent).catch(function(l) {
            if (l instanceof kt && l.isFatal()) {
              a.nativeExtensionProvider = void 0;
              var u = a.createSilentIframeClient(o.correlationId);
              return u.acquireToken(o);
            }
            throw l;
          }) : (s = this.createSilentIframeClient(o.correlationId), i = s.acquireToken(o)), [2, i.then(function(l) {
            var u, d;
            return a.eventHandler.emitEvent(ee.SSO_SILENT_SUCCESS, K.Silent, l), (u = a.ssoSilentMeasurement) === null || u === void 0 || u.addStaticFields({
              accessTokenSize: l.accessToken.length,
              idTokenSize: l.idToken.length
            }), (d = a.ssoSilentMeasurement) === null || d === void 0 || d.endMeasurement({
              success: !0,
              isNativeBroker: l.fromNativeBroker,
              requestId: l.requestId
            }), l;
          }).catch(function(l) {
            var u;
            throw a.eventHandler.emitEvent(ee.SSO_SILENT_FAILURE, K.Silent, null, l), (u = a.ssoSilentMeasurement) === null || u === void 0 || u.endMeasurement({
              errorCode: l.errorCode,
              subErrorCode: l.subError,
              success: !1
            }), l;
          }).finally(function() {
            document.removeEventListener("visibilitychange", a.trackPageVisibilityWithMeasurement);
          })];
        });
      });
    }, r.prototype.acquireTokenByCode = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n, o, i, s = this;
        return N(this, function(a) {
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(K.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_START, K.Silent, e), n = this.performanceClient.startMeasurement(I.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw M.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, i = this.hybridAuthCodeResponses.get(o), i ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), i = this.acquireTokenByCodeAsync(B(B({}, e), { correlationId: t })).then(function(c) {
                return s.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_SUCCESS, K.Silent, c), s.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: c.accessToken.length,
                  idTokenSize: c.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: c.fromNativeBroker,
                  requestId: c.requestId
                }), c;
              }).catch(function(c) {
                throw s.hybridAuthCodeResponses.delete(o), s.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, K.Silent, null, c), n.endMeasurement({
                  errorCode: c.errorCode,
                  subErrorCode: c.subError,
                  success: !1
                }), c;
              }), this.hybridAuthCodeResponses.set(o, i)), [2, i];
            if (e.nativeAccountId) {
              if (this.canUseNative(e, e.nativeAccountId))
                return [2, this.acquireTokenNative(e, be.acquireTokenByCode, e.nativeAccountId).catch(function(c) {
                  throw c instanceof kt && c.isFatal() && (s.nativeExtensionProvider = void 0), c;
                })];
              throw M.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw M.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (c) {
            throw this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, K.Silent, null, c), n.endMeasurement({
              errorCode: c instanceof z && c.errorCode || void 0,
              subErrorCode: c instanceof z && c.subError || void 0,
              success: !1
            }), c;
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByCodeAsync = function(e) {
      var t;
      return k(this, void 0, void 0, function() {
        var n, o, i = this;
        return N(this, function(s) {
          switch (s.label) {
            case 0:
              return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(I.AcquireTokenByCodeAsync, e.correlationId), (t = this.acquireTokenByCodeAsyncMeasurement) === null || t === void 0 || t.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), n = this.createSilentAuthCodeClient(e.correlationId), [4, n.acquireToken(e).then(function(a) {
                var c;
                return (c = i.acquireTokenByCodeAsyncMeasurement) === null || c === void 0 || c.endMeasurement({
                  success: !0,
                  fromCache: a.fromCache,
                  isNativeBroker: a.fromNativeBroker,
                  requestId: a.requestId
                }), a;
              }).catch(function(a) {
                var c;
                throw (c = i.acquireTokenByCodeAsyncMeasurement) === null || c === void 0 || c.endMeasurement({
                  errorCode: a.errorCode,
                  subErrorCode: a.subError,
                  success: !1
                }), a;
              }).finally(function() {
                document.removeEventListener("visibilitychange", i.trackPageVisibilityWithMeasurement);
              })];
            case 1:
              return o = s.sent(), [2, o];
          }
        });
      });
    }, r.prototype.acquireTokenFromCache = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        return N(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(I.AcquireTokenFromCache, t.correlationId), n.cacheLookupPolicy) {
            case Ye.Default:
            case Ye.AccessToken:
            case Ye.AccessTokenAndRefreshToken:
              return [2, e.acquireToken(t)];
            default:
              throw j.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByRefreshToken = function(e, t) {
      return k(this, void 0, void 0, function() {
        var n;
        return N(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(I.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case Ye.Default:
            case Ye.AccessTokenAndRefreshToken:
            case Ye.RefreshToken:
            case Ye.RefreshTokenAndNetwork:
              return n = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(I.SilentRefreshClientAcquireToken, e.correlationId), [2, n.acquireToken(e)];
            default:
              throw j.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenBySilentIframe = function(e) {
      return k(this, void 0, void 0, function() {
        var t;
        return N(this, function(n) {
          return this.performanceClient.addQueueMeasurement(I.AcquireTokenBySilentIframe, e.correlationId), t = this.createSilentIframeClient(e.correlationId), this.performanceClient.setPreQueueTime(I.SilentIframeClientAcquireToken, e.correlationId), [2, t.acquireToken(e)];
        });
      });
    }, r.prototype.logout = function(e) {
      return k(this, void 0, void 0, function() {
        var t;
        return N(this, function(n) {
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(B({ correlationId: t }, e))];
        });
      });
    }, r.prototype.logoutRedirect = function(e) {
      return k(this, void 0, void 0, function() {
        var t, n;
        return N(this, function(o) {
          return t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(K.Redirect), n = this.createRedirectClient(t), [2, n.logout(e)];
        });
      });
    }, r.prototype.logoutPopup = function(e) {
      try {
        var t = this.getRequestCorrelationId(e);
        this.preflightBrowserEnvironmentCheck(K.Popup);
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), Se.blockNonBrowserEnvironment(this.isBrowserEnvironment), Se.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), Se.blockReloadInHiddenIframes(), Se.blockAcquireTokenInPopups(), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === K.Redirect && this.config.cache.cacheLocation === _e.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw Io.createInMemoryRedirectUnavailableError();
      (e === K.Redirect || e === K.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), Se.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return k(this, void 0, void 0, function() {
        var o;
        return N(this, function(i) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw M.createNativeConnectionNotEstablishedError();
          return o = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !Er.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (e.prompt)
        switch (e.prompt) {
          case He.NONE:
          case He.CONSENT:
          case He.LOGIN:
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
      return new Xf(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new Jf(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new op(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new Dl(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new ip(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new Ep(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, be.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
      return e != null && e.correlationId ? e.correlationId : this.isBrowserEnvironment ? this.browserCrypto.createNewGuid() : S.EMPTY_STRING;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Tp = (
  /** @class */
  function(r) {
    Me(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return e.prototype.loginRedirect = function(t) {
      return k(this, void 0, void 0, function() {
        var n;
        return N(this, function(o) {
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(B({ correlationId: n }, t || oc))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(B({ correlationId: n }, t || oc));
    }, e.prototype.acquireTokenSilent = function(t) {
      return k(this, void 0, void 0, function() {
        var n, o, i, s, a, c, l, u = this;
        return N(this, function(d) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(I.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(K.Silent), this.logger.verbose("acquireTokenSilent called", n), i = t.account || this.getActiveAccount(), !i)
            throw M.createNoAccountError();
          return s = {
            clientId: this.config.auth.clientId,
            authority: t.authority || S.EMPTY_STRING,
            scopes: t.scopes,
            homeAccountIdentifier: i.homeAccountId,
            claims: t.claims,
            authenticationScheme: t.authenticationScheme,
            resourceRequestMethod: t.resourceRequestMethod,
            resourceRequestUri: t.resourceRequestUri,
            shrClaims: t.shrClaims,
            sshKid: t.sshKid
          }, a = JSON.stringify(s), c = this.activeSilentTokenRequests.get(a), typeof c > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(I.AcquireTokenSilentAsync, n), l = this.acquireTokenSilentAsync(B(B({}, t), { correlationId: n }), i).then(function(h) {
            return u.activeSilentTokenRequests.delete(a), o.addStaticFields({
              accessTokenSize: h.accessToken.length,
              idTokenSize: h.idToken.length
            }), o.endMeasurement({
              success: !0,
              fromCache: h.fromCache,
              isNativeBroker: h.fromNativeBroker,
              cacheLookupPolicy: t.cacheLookupPolicy,
              requestId: h.requestId
            }), h;
          }).catch(function(h) {
            throw u.activeSilentTokenRequests.delete(a), o.endMeasurement({
              errorCode: h.errorCode,
              subErrorCode: h.subError,
              success: !1
            }), h;
          }), this.activeSilentTokenRequests.set(a, l), [2, l]) : (this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", n), o.discardMeasurement(), [2, c]);
        });
      });
    }, e.prototype.trackPageVisibility = function() {
      this.astsAsyncMeasurement && (this.logger.info("Perf: Visibility change detected"), this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      }));
    }, e.prototype.acquireTokenSilentAsync = function(t, n) {
      var o;
      return k(this, void 0, void 0, function() {
        var i, s, a, c, l, u = this;
        return N(this, function(d) {
          switch (d.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(I.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(I.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), Er.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), s = B(B({}, t), { account: n }), i = this.acquireTokenNative(s, be.acquireTokenSilent_silentFlow).catch(function(h) {
                return k(u, void 0, void 0, function() {
                  var f;
                  return N(this, function(p) {
                    if (h instanceof kt && h.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, f = this.createSilentIframeClient(t.correlationId), [2, f.acquireToken(t)];
                    throw h;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), a = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(I.InitializeSilentRequest, t.correlationId), [4, a.initializeSilentRequest(t, n)];
            case 2:
              c = d.sent(), l = B(B({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || Ye.Default
              }), this.performanceClient.setPreQueueTime(I.AcquireTokenFromCache, c.correlationId), i = this.acquireTokenFromCache(a, c, l).catch(function(h) {
                if (l.cacheLookupPolicy === Ye.AccessToken)
                  throw h;
                return Se.blockReloadInHiddenIframes(), u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_NETWORK_START, K.Silent, c), u.performanceClient.setPreQueueTime(I.AcquireTokenByRefreshToken, c.correlationId), u.acquireTokenByRefreshToken(c, l).catch(function(f) {
                  var p = f instanceof _r, g = f instanceof wt, m = f.errorCode === Wr.noTokensFoundError.code, b = f.errorCode === Ct.INVALID_GRANT_ERROR;
                  if ((!p || !b || g || l.cacheLookupPolicy === Ye.AccessTokenAndRefreshToken || l.cacheLookupPolicy === Ye.RefreshToken) && l.cacheLookupPolicy !== Ye.Skip && !m)
                    throw f;
                  return u.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), u.performanceClient.setPreQueueTime(I.AcquireTokenBySilentIframe, c.correlationId), u.acquireTokenBySilentIframe(c);
                });
              }), d.label = 3;
            case 3:
              return [2, i.then(function(h) {
                var f;
                return u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, K.Silent, h), (f = u.astsAsyncMeasurement) === null || f === void 0 || f.endMeasurement({
                  success: !0,
                  fromCache: h.fromCache,
                  isNativeBroker: h.fromNativeBroker,
                  requestId: h.requestId
                }), h;
              }).catch(function(h) {
                var f;
                throw u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Silent, null, h), (f = u.astsAsyncMeasurement) === null || f === void 0 || f.endMeasurement({
                  errorCode: h.errorCode,
                  subErrorCode: h.subError,
                  success: !1
                }), h;
              }).finally(function() {
                document.removeEventListener("visibilitychange", u.trackPageVisibility);
              })];
          }
        });
      });
    }, e.prototype.hydrateCache = function(t, n) {
      return k(this, void 0, void 0, function() {
        var o;
        return N(this, function(i) {
          return this.logger.verbose("hydrateCache called"), t.account ? (o = Fe.createFromAccountInfo(t.account, t.cloudGraphHostName, t.msGraphHost), this.browserStorage.setAccount(o), t.fromNativeBroker ? (this.logger.verbose("Response was from native broker, storing in-memory"), [2, this.nativeInternalStorage.hydrateCache(t, n)]) : [2, this.browserStorage.hydrateCache(t, n)]) : [
            2
            /*return*/
          ];
        });
      });
    }, e;
  }(Sp)
);
function Nt(r) {
  return Object.keys(r);
}
function gi(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function bs(r, e) {
  const t = { ...r }, n = e;
  return gi(r) && gi(e) && Object.keys(e).forEach((o) => {
    gi(n[o]) && o in r ? t[o] = bs(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function _p(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function Ip(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function Ap(r) {
  const e = Ip(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function mi(r) {
  return r === "0rem" ? "0rem" : `calc(${r} * var(--mantine-scale))`;
}
function jl(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return `0${r}`;
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? mi(o) : o;
    }
    if (typeof n == "string") {
      if (n === "" || n.startsWith("calc(") || n.startsWith("clamp(") || n.includes("rgba("))
        return n;
      if (n.includes(","))
        return n.split(",").map((i) => t(i)).join(",");
      if (n.includes(" "))
        return n.split(" ").map((i) => t(i)).join(" ");
      if (n.includes(r))
        return e ? mi(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${r}`;
        return e ? mi(i) : i;
      }
    }
    return n;
  }
  return t;
}
const R = jl("rem", { shouldScale: !0 }), dc = jl("em");
function ws(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function $l(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function zn(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== pl : !1;
}
function cn(r) {
  const e = Nr(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => {
    const o = ar(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function Kl(r = null) {
  const e = Nr(r);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => ar(e)];
}
function hc(r, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${r}-${t}`;
  };
}
function Yi(r, e) {
  let t = r;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function Rp(r, e, t) {
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
function kp(r, e, t) {
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
function Np(r, e, t) {
  return Yi(r, t) === Yi(e, t);
}
function Pp({
  parentSelector: r,
  siblingSelector: e,
  onKeyDown: t,
  loop: n = !0,
  activateOnFocus: o = !1,
  dir: i = "rtl",
  orientation: s
}) {
  return (a) => {
    var p;
    t == null || t(a);
    const c = Array.from(
      ((p = Yi(a.currentTarget, r)) == null ? void 0 : p.querySelectorAll(
        e
      )) || []
    ).filter((g) => Np(a.currentTarget, g, r)), l = c.findIndex((g) => a.currentTarget === g), u = kp(l, c, n), d = Rp(l, c, n), h = i === "rtl" ? d : u, f = i === "rtl" ? u : d;
    switch (a.key) {
      case "ArrowRight": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[h].focus(), o && c[h].click());
        break;
      }
      case "ArrowLeft": {
        s === "horizontal" && (a.stopPropagation(), a.preventDefault(), c[f].focus(), o && c[f].click());
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
const Op = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function xp(r) {
  return Op[r];
}
const Mp = () => {
};
function Lp(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || Mp : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Re(r, e = "size", t = !0) {
  if (r !== void 0)
    return $l(r) ? t ? R(r) : r : `var(--${e}-${r})`;
}
function Es(r) {
  return Re(r, "mantine-spacing");
}
function _t(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Re(r, "mantine-radius");
}
function it(r) {
  return Re(r, "mantine-font-size");
}
function Dp(r) {
  return Re(r, "mantine-line-height", !1);
}
function ql(r) {
  if (r)
    return Re(r, "mantine-shadow", !1);
}
function zl() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function br(r) {
  const e = ue(r);
  return W(() => {
    e.current = r;
  }), ho(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Go(r, e) {
  const t = br(r), n = ue(0);
  return W(() => () => window.clearTimeout(n.current), []), ve(
    (...o) => {
      window.clearTimeout(n.current), n.current = window.setTimeout(() => t(...o), e);
    },
    [t, e]
  );
}
const fc = ["mousedown", "touchstart"];
function Up(r, e, t) {
  const n = ue();
  return W(() => {
    const o = (i) => {
      const { target: s } = i ?? {};
      if (Array.isArray(t)) {
        const a = (s == null ? void 0 : s.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(s) && s.tagName !== "HTML";
        t.every((l) => !!l && !i.composedPath().includes(l)) && !a && r();
      } else
        n.current && !n.current.contains(s) && r();
    };
    return (e || fc).forEach((i) => document.addEventListener(i, o)), () => {
      (e || fc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [n, r, t]), n;
}
function Hp(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function Fp(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function Bp(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = X(
    t ? e : Fp(r)
  ), i = ue();
  return W(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(r), o(i.current.matches), Hp(i.current, (s) => o(s.matches));
  }, [r]), n;
}
function jp(r, e, t = { leading: !1 }) {
  const [n, o] = X(r), i = ue(!1), s = ue(null), a = ue(!1), c = () => window.clearTimeout(s.current);
  return W(() => {
    i.current && (!a.current && t.leading ? (a.current = !0, o(r)) : (c(), s.current = window.setTimeout(() => {
      a.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), W(() => (i.current = !0, c), []), [n, c];
}
const Gn = typeof document < "u" ? ds : W;
function Ir(r, e) {
  const t = ue(!1);
  W(
    () => () => {
      t.current = !1;
    },
    []
  ), W(() => {
    if (t.current)
      return r();
    t.current = !0;
  }, e);
}
function $p({ opened: r, shouldReturnFocus: e = !0 }) {
  const t = ue(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return Ir(() => {
    let o = -1;
    const i = (s) => {
      s.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), r ? t.current = document.activeElement : e && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [r, e]), n;
}
function Kp(r, e = "body > :not(script)") {
  const t = zl(), n = Array.from(
    document.querySelectorAll(e)
  ).map((o) => {
    var c;
    if ((c = o == null ? void 0 : o.shadowRoot) != null && c.contains(r) || o.contains(r))
      return;
    const i = o.getAttribute("aria-hidden"), s = o.getAttribute("data-hidden"), a = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", t), i === null || i === "false" ? o.setAttribute("aria-hidden", "true") : !s && !a && o.setAttribute("data-hidden", i), {
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
const qp = /input|select|textarea|button|object/, Gl = "a, input, select, textarea, button, object, [tabindex]";
function zp(r) {
  return r.style.display === "none";
}
function Gp(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (zp(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function Vl(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function Qi(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(Vl(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (qp.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && Gp(r);
}
function Wl(r) {
  const e = Vl(r);
  return (Number.isNaN(e) || e >= 0) && Qi(r);
}
function Vp(r) {
  return Array.from(r.querySelectorAll(Gl)).filter(Wl);
}
function Wp(r, e) {
  const t = Vp(r);
  if (!t.length) {
    e.preventDefault();
    return;
  }
  const n = t[e.shiftKey ? 0 : t.length - 1], o = r.getRootNode();
  let i = n === o.activeElement || r === o.activeElement;
  const s = o.activeElement;
  if (s.tagName === "INPUT" && s.getAttribute("type") === "radio" && (i = t.filter(
    (u) => u.getAttribute("type") === "radio" && u.getAttribute("name") === s.getAttribute("name")
  ).includes(n)), !i)
    return;
  e.preventDefault();
  const c = t[e.shiftKey ? t.length - 1 : 0];
  c && c.focus();
}
function Yp(r = !0) {
  const e = ue(), t = ue(null), n = (i) => {
    let s = i.querySelector("[data-autofocus]");
    if (!s) {
      const a = Array.from(i.querySelectorAll(Gl));
      s = a.find(Wl) || a.find(Qi) || null, !s && Qi(i) && (s = i);
    }
    s && s.focus({ preventScroll: !0 });
  }, o = ve(
    (i) => {
      if (r) {
        if (i === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = Kp(i), e.current !== i && (i ? (setTimeout(() => {
          i.getRootNode() && n(i);
        }), e.current = i) : e.current = null);
      }
    },
    [r]
  );
  return W(() => {
    if (!r)
      return;
    e.current && setTimeout(() => n(e.current));
    const i = (s) => {
      s.key === "Tab" && e.current && Wp(e.current, s);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), t.current && t.current();
    };
  }, [r]), o;
}
const Qp = jo["useId".toString()] || (() => {
});
function Jp() {
  const r = Qp();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function cr(r) {
  const e = Jp(), [t, n] = X(e);
  return Gn(() => {
    n(zl());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function Yl(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function Ql(...r) {
  return (e) => {
    r.forEach((t) => Yl(t, e));
  };
}
function ft(...r) {
  return ve(Ql(...r), r);
}
function Ar({
  value: r,
  defaultValue: e,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, i] = X(
    e !== void 0 ? e : t
  ), s = (a, ...c) => {
    i(a), n == null || n(a, ...c);
  };
  return r !== void 0 ? [r, n, !0] : [o, s, !1];
}
function Jl(r, e) {
  return Bp("(prefers-reduced-motion: reduce)", r, e);
}
function Xp(r) {
  const e = ue();
  return W(() => {
    e.current = r;
  }, [r]), e.current;
}
function Xl(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (t = Xl(r[e])) && (n && (n += " "), n += t);
    } else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function zt() {
  for (var r, e, t = 0, n = "", o = arguments.length; t < o; t++)
    (r = arguments[t]) && (e = Xl(r)) && (n && (n += " "), n += e);
  return n;
}
const Zp = {};
function eg(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = zt(e[n], o) : e[n] = o;
    });
  }), e;
}
function Vo({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const i = (Array.isArray(e) ? e : [e]).map(
    (s) => typeof s == "function" ? s(r, t, n) : s || Zp
  );
  return eg(i);
}
function Ro({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((i, s) => typeof s == "function" ? { ...i, ...s(r, t, n) } : { ...i, ...s }, {});
}
const Zl = Nr(null);
function Pr() {
  const r = ar(Zl);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function tg() {
  return Pr().cssVariablesResolver;
}
function rg() {
  return Pr().classNamesPrefix;
}
function Ss() {
  return Pr().getStyleNonce;
}
function ng() {
  return Pr().withStaticClasses;
}
function og() {
  return Pr().headless;
}
function ig() {
  var r;
  return (r = Pr().stylesTransform) == null ? void 0 : r.sx;
}
function sg() {
  var r;
  return (r = Pr().stylesTransform) == null ? void 0 : r.styles;
}
function ag(r) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(r);
}
function cg(r) {
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
  if (e.length === 8) {
    const s = parseInt(e.slice(6, 8), 16) / 255;
    return {
      r: parseInt(e.slice(0, 2), 16),
      g: parseInt(e.slice(2, 4), 16),
      b: parseInt(e.slice(4, 6), 16),
      a: s
    };
  }
  const t = parseInt(e, 16), n = t >> 16 & 255, o = t >> 8 & 255, i = t & 255;
  return {
    r: n,
    g: o,
    b: i,
    a: 1
  };
}
function lg(r) {
  const [e, t, n, o] = r.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function ug(r) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = r.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, i = parseInt(t[3], 10) / 100, s = t[5] ? parseFloat(t[5]) : void 0, a = (1 - Math.abs(2 * i - 1)) * o, c = n / 60, l = a * (1 - Math.abs(c % 2 - 1)), u = i - a / 2;
  let d, h, f;
  return c >= 0 && c < 1 ? (d = a, h = l, f = 0) : c >= 1 && c < 2 ? (d = l, h = a, f = 0) : c >= 2 && c < 3 ? (d = 0, h = a, f = l) : c >= 3 && c < 4 ? (d = 0, h = l, f = a) : c >= 4 && c < 5 ? (d = l, h = 0, f = a) : (d = a, h = 0, f = l), {
    r: Math.round((d + u) * 255),
    g: Math.round((h + u) * 255),
    b: Math.round((f + u) * 255),
    a: s || 1
  };
}
function Ts(r) {
  return ag(r) ? cg(r) : r.startsWith("rgb") ? lg(r) : r.startsWith("hsl") ? ug(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function no(r, e) {
  if (r.startsWith("var("))
    return `color-mix(in srgb, ${r}, black ${e * 100}%)`;
  const { r: t, g: n, b: o, a: i } = Ts(r), s = 1 - e, a = (c) => Math.round(c * s);
  return `rgba(${a(t)}, ${a(n)}, ${a(o)}, ${i})`;
}
function Ln(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function yi(r) {
  return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
}
function dg(r) {
  const e = r.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function hg(r) {
  if (r.startsWith("oklch("))
    return (dg(r) || 0) / 100;
  const { r: e, g: t, b: n } = Ts(r), o = e / 255, i = t / 255, s = n / 255, a = yi(o), c = yi(i), l = yi(s);
  return 0.2126 * a + 0.7152 * c + 0.0722 * l;
}
function mn(r, e = 0.179) {
  return r.startsWith("var(") ? !1 : hg(r) > e;
}
function Or({
  color: r,
  theme: e,
  colorScheme: t
}) {
  if (typeof r != "string")
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof r}`
    );
  if (r === "bright")
    return {
      color: r,
      value: t === "dark" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: mn(
        t === "dark" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  if (r === "dimmed")
    return {
      color: r,
      value: t === "dark" ? e.colors.dark[2] : e.colors.gray[7],
      shade: void 0,
      isThemeColor: !1,
      isLight: mn(
        t === "dark" ? e.colors.dark[2] : e.colors.gray[6],
        e.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  if (r === "white" || r === "black")
    return {
      color: r,
      value: r === "white" ? e.white : e.black,
      shade: void 0,
      isThemeColor: !1,
      isLight: mn(
        r === "white" ? e.white : e.black,
        e.luminanceThreshold
      ),
      variable: `--mantine-color-${r}`
    };
  const [n, o] = r.split("."), i = o ? Number(o) : void 0, s = n in e.colors;
  if (s) {
    const a = i !== void 0 ? e.colors[n][i] : e.colors[n][Ln(e, t || "light")];
    return {
      color: n,
      value: a,
      shade: i,
      isThemeColor: s,
      isLight: mn(a, e.luminanceThreshold),
      variable: o ? `--mantine-color-${n}-${i}` : `--mantine-color-${n}-filled`
    };
  }
  return {
    color: r,
    value: r,
    isThemeColor: s,
    isLight: mn(r, e.luminanceThreshold),
    shade: i,
    variable: void 0
  };
}
function nr(r, e) {
  const t = Or({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Ji(r, e) {
  const t = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, n = nr(t.from, e), o = nr(t.to, e);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function Ht(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (r.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${r}, transparent ${i}%)`;
  }
  if (r.startsWith("oklch"))
    return r.includes("/") ? r.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : r.replace(")", ` / ${e})`);
  const { r: t, g: n, b: o } = Ts(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const jr = Ht, fg = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n,
  autoContrast: o
}) => {
  const i = Or({ color: r, theme: e }), s = typeof o == "boolean" ? o : e.autoContrast;
  if (t === "filled") {
    const a = s && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return i.isThemeColor ? i.shade === void 0 ? {
      background: `var(--mantine-color-${r}-filled)`,
      hover: `var(--mantine-color-${r}-filled-hover)`,
      color: a,
      border: `${R(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${i.color}-${i.shade})`,
      hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
      color: a,
      border: `${R(1)} solid transparent`
    } : {
      background: r,
      hover: no(r, 0.1),
      color: a,
      border: `${R(1)} solid transparent`
    };
  }
  if (t === "light") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: `var(--mantine-color-${r}-light)`,
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${R(1)} solid transparent`
        };
      const a = e.colors[i.color][i.shade];
      return {
        background: Ht(a, 0.1),
        hover: Ht(a, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: Ht(r, 0.1),
      hover: Ht(r, 0.12),
      color: r,
      border: `${R(1)} solid transparent`
    };
  }
  if (t === "outline")
    return i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${r}-outline-hover)`,
      color: `var(--mantine-color-${r}-outline)`,
      border: `${R(1)} solid var(--mantine-color-${r}-outline)`
    } : {
      background: "transparent",
      hover: Ht(e.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${R(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: Ht(r, 0.05),
      color: r,
      border: `${R(1)} solid ${r}`
    };
  if (t === "subtle") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${R(1)} solid transparent`
        };
      const a = e.colors[i.color][i.shade];
      return {
        background: "transparent",
        hover: Ht(a, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${R(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Ht(r, 0.12),
      color: r,
      border: `${R(1)} solid transparent`
    };
  }
  return t === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${r}-light-color)`,
    border: `${R(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
    border: `${R(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: r,
    border: `${R(1)} solid transparent`
  } : t === "white" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: no(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${R(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: no(e.white, 0.01),
    color: `var(--mantine-color-${i.color}-${i.shade})`,
    border: `${R(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: no(e.white, 0.01),
    color: r,
    border: `${R(1)} solid transparent`
  } : t === "gradient" ? {
    background: Ji(n, e),
    hover: Ji(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${R(1)} solid var(--mantine-color-default-border)`
  } : {};
}, pg = {
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
}, pc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", _s = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: pg,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: fg,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: pc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: pc,
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
function gc(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function gg({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return gc(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && gc(n.newValue) && t(n.newValue);
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
const mg = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", mc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function vi(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function yc(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(mg);
  if (typeof r.primaryShade == "object" && (!vi(r.primaryShade.dark) || !vi(r.primaryShade.light)))
    throw new Error(mc);
  if (typeof r.primaryShade == "number" && !vi(r.primaryShade))
    throw new Error(mc);
}
function yg(r, e) {
  var n;
  if (!e)
    return yc(r), r;
  const t = bs(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), yc(t), t;
}
const Is = Nr(null), vg = () => ar(Is) || _s;
function Gt() {
  const r = ar(Is);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function eu({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = vg(), o = ho(
    () => yg(t ? n : _s, r),
    [r, n, t]
  );
  return /* @__PURE__ */ y.jsx(Is.Provider, { value: o, children: e });
}
eu.displayName = "@mantine/core/MantineThemeProvider";
function Cg() {
  const r = Gt(), e = Ss(), t = Nt(r.breakpoints).reduce((n, o) => {
    const i = r.breakpoints[o].includes("px"), s = Ap(r.breakpoints[o]), a = i ? `${s - 0.1}px` : dc(s - 0.1), c = i ? `${s}px` : dc(s);
    return `${n}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${o} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: t }
    }
  );
}
function Ci(r) {
  return Object.entries(r).map(([e, t]) => `${e}: ${t};`).join("");
}
function yn(r, e) {
  return (Array.isArray(r) ? r : [r]).reduce((n, o) => `${o}{${n}}`, e);
}
function bg(r, e) {
  const t = Ci(r.variables), n = t ? yn(e, t) : "", o = Ci(r.dark), i = Ci(r.light), s = o ? yn(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, o) : "", a = i ? yn(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, i) : "";
  return `${n}${s}${a}`;
}
function As({ color: r, theme: e, autoContrast: t }) {
  return (typeof t == "boolean" ? t : e.autoContrast) && Or({ color: r || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function vc(r, e) {
  return As({
    color: r.colors[r.primaryColor][Ln(r, e)],
    theme: r,
    autoContrast: null
  });
}
function oo({
  theme: r,
  color: e,
  colorScheme: t,
  name: n = e,
  withColorValues: o = !0
}) {
  if (!r.colors[e])
    return {};
  if (t === "light") {
    const a = Ln(r, "light"), c = {
      [`--mantine-color-${n}-text`]: `var(--mantine-color-${n}-filled)`,
      [`--mantine-color-${n}-filled`]: `var(--mantine-color-${n}-${a})`,
      [`--mantine-color-${n}-filled-hover`]: `var(--mantine-color-${n}-${a === 9 ? 8 : a + 1})`,
      [`--mantine-color-${n}-light`]: jr(r.colors[e][a], 0.1),
      [`--mantine-color-${n}-light-hover`]: jr(r.colors[e][a], 0.12),
      [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${a})`,
      [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${a})`,
      [`--mantine-color-${n}-outline-hover`]: jr(r.colors[e][a], 0.05)
    };
    return o ? {
      [`--mantine-color-${n}-0`]: r.colors[e][0],
      [`--mantine-color-${n}-1`]: r.colors[e][1],
      [`--mantine-color-${n}-2`]: r.colors[e][2],
      [`--mantine-color-${n}-3`]: r.colors[e][3],
      [`--mantine-color-${n}-4`]: r.colors[e][4],
      [`--mantine-color-${n}-5`]: r.colors[e][5],
      [`--mantine-color-${n}-6`]: r.colors[e][6],
      [`--mantine-color-${n}-7`]: r.colors[e][7],
      [`--mantine-color-${n}-8`]: r.colors[e][8],
      [`--mantine-color-${n}-9`]: r.colors[e][9],
      ...c
    } : c;
  }
  const i = Ln(r, "dark"), s = {
    [`--mantine-color-${n}-text`]: `var(--mantine-color-${n}-4)`,
    [`--mantine-color-${n}-filled`]: `var(--mantine-color-${n}-${i})`,
    [`--mantine-color-${n}-filled-hover`]: `var(--mantine-color-${n}-${i === 9 ? 8 : i + 1})`,
    [`--mantine-color-${n}-light`]: jr(
      r.colors[e][Math.max(0, i - 2)],
      0.15
    ),
    [`--mantine-color-${n}-light-hover`]: jr(
      r.colors[e][Math.max(0, i - 2)],
      0.2
    ),
    [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${Math.max(i - 5, 0)})`,
    [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${Math.max(i - 4, 0)})`,
    [`--mantine-color-${n}-outline-hover`]: jr(
      r.colors[e][Math.max(i - 4, 0)],
      0.05
    )
  };
  return o ? {
    [`--mantine-color-${n}-0`]: r.colors[e][0],
    [`--mantine-color-${n}-1`]: r.colors[e][1],
    [`--mantine-color-${n}-2`]: r.colors[e][2],
    [`--mantine-color-${n}-3`]: r.colors[e][3],
    [`--mantine-color-${n}-4`]: r.colors[e][4],
    [`--mantine-color-${n}-5`]: r.colors[e][5],
    [`--mantine-color-${n}-6`]: r.colors[e][6],
    [`--mantine-color-${n}-7`]: r.colors[e][7],
    [`--mantine-color-${n}-8`]: r.colors[e][8],
    [`--mantine-color-${n}-9`]: r.colors[e][9],
    ...s
  } : s;
}
function wg(r) {
  return !!r && typeof r == "object" && "mantine-virtual-color" in r;
}
function $r(r, e, t) {
  Nt(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const tu = (r) => {
  const e = Ln(r, "light"), t = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : R(r.defaultRadius), n = {
    variables: {
      "--mantine-scale": r.scale.toString(),
      "--mantine-cursor-type": r.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": r.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": r.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": r.white,
      "--mantine-color-black": r.black,
      "--mantine-line-height": r.lineHeights.md,
      "--mantine-font-family": r.fontFamily,
      "--mantine-font-family-monospace": r.fontFamilyMonospace,
      "--mantine-font-family-headings": r.headings.fontFamily,
      "--mantine-heading-font-weight": r.headings.fontWeight,
      "--mantine-heading-text-wrap": r.headings.textWrap,
      "--mantine-radius-default": t,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${r.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${r.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${r.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${r.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${r.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": vc(r, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": r.black,
      "--mantine-color-body": r.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-${e})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": vc(r, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${r.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  $r(n.variables, r.breakpoints, "breakpoint"), $r(n.variables, r.spacing, "spacing"), $r(n.variables, r.fontSizes, "font-size"), $r(n.variables, r.lineHeights, "line-height"), $r(n.variables, r.shadows, "shadow"), $r(n.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((i, s) => {
    n.variables[`--mantine-primary-color-${s}`] = `var(--mantine-color-${r.primaryColor}-${s})`;
  }), Nt(r.colors).forEach((i) => {
    const s = r.colors[i];
    if (wg(s)) {
      Object.assign(
        n.light,
        oo({
          theme: r,
          name: s.name,
          color: s.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        n.dark,
        oo({
          theme: r,
          name: s.name,
          color: s.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    s.forEach((a, c) => {
      n.variables[`--mantine-color-${i}-${c}`] = a;
    }), Object.assign(
      n.light,
      oo({
        theme: r,
        color: i,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      n.dark,
      oo({
        theme: r,
        color: i,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = r.headings.sizes;
  return Nt(o).forEach((i) => {
    n.variables[`--mantine-${i}-font-size`] = o[i].fontSize, n.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, n.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || r.headings.fontWeight;
  }), n;
};
function Eg({ theme: r, generator: e }) {
  const t = tu(r), n = e == null ? void 0 : e(r);
  return n ? bs(t, n) : t;
}
const bi = tu(_s);
function Sg(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return Nt(r.variables).forEach((t) => {
    bi.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), Nt(r.light).forEach((t) => {
    bi.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), Nt(r.dark).forEach((t) => {
    bi.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function Tg(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function ru({
  cssVariablesSelector: r,
  deduplicateCssVariables: e
}) {
  const t = Gt(), n = Ss(), o = tg(), i = Eg({ theme: t, generator: o }), s = r === ":root" && e, a = s ? Sg(i) : i, c = bg(a, r);
  return c ? /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${c}${s ? "" : Tg(r)}`
      }
    }
  ) : null;
}
ru.displayName = "@mantine/CssVariables";
function _g() {
  const r = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || r(...e);
  };
}
function Kr(r, e) {
  var n;
  const t = r !== "auto" ? r : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (n = e()) == null || n.setAttribute("data-mantine-color-scheme", t);
}
function Ig({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = ue(), [i, s] = X(() => r.get(e)), a = n || i, c = ve(
    (u) => {
      n || (Kr(u, t), s(u), r.set(u));
    },
    [r.set, a, n]
  ), l = ve(() => {
    s(e), Kr(e, t), r.clear();
  }, [r.clear, e]);
  return W(() => (r.subscribe(c), r.unsubscribe), [r.subscribe, r.unsubscribe]), Gn(() => {
    Kr(r.get(e), t);
  }, []), W(() => {
    var d;
    if (n)
      return Kr(n, t), () => {
      };
    n === void 0 && Kr(i, t), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (h) => {
      i === "auto" && Kr(h.matches ? "dark" : "light", t);
    };
    return (d = o.current) == null || d.addEventListener("change", u), () => {
      var h;
      return (h = o.current) == null ? void 0 : h.removeEventListener("change", u);
    };
  }, [i, n]), { colorScheme: a, setColorScheme: c, clearColorScheme: l };
}
function Ag({
  respectReducedMotion: r,
  getRootElement: e
}) {
  Gn(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
_g();
function nu({
  theme: r,
  children: e,
  getStyleNonce: t,
  withStaticClasses: n = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: s = !0,
  cssVariablesSelector: a = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = gg(),
  defaultColorScheme: u = "light",
  getRootElement: d = () => document.documentElement,
  cssVariablesResolver: h,
  forceColorScheme: f,
  stylesTransform: p
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: b } = Ig({
    defaultColorScheme: u,
    forceColorScheme: f,
    manager: l,
    getRootElement: d
  });
  return Ag({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: d
  }), /* @__PURE__ */ y.jsx(
    Zl.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: m,
        clearColorScheme: b,
        getRootElement: d,
        classNamesPrefix: c,
        getStyleNonce: t,
        cssVariablesResolver: h,
        cssVariablesSelector: a,
        withStaticClasses: n,
        stylesTransform: p
      },
      children: /* @__PURE__ */ y.jsxs(eu, { theme: r, children: [
        s && /* @__PURE__ */ y.jsx(
          ru,
          {
            cssVariablesSelector: a,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ y.jsx(Cg, {}),
        e
      ] })
    }
  );
}
nu.displayName = "@mantine/core/MantineProvider";
function ou({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = Gt();
  return {
    resolvedClassNames: Vo({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: Ro({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const Rg = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function kg({ theme: r, options: e, unstyled: t }) {
  return zt(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || Rg[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function Ng({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Vo({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function Cc({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Vo({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function Pg({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function Og({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function xg({
  themeName: r,
  classNamesPrefix: e,
  selector: t,
  withStaticClass: n
}) {
  return n === !1 ? [] : r.map((o) => `${e}-${o}-${t}`);
}
function Mg({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (i) => {
      var s, a;
      return (a = Vo({
        theme: e,
        classNames: (s = e.components[i]) == null ? void 0 : s.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : a[t];
    }
  );
}
function Lg({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function Dg({
  theme: r,
  options: e,
  themeName: t,
  selector: n,
  classNamesPrefix: o,
  classNames: i,
  classes: s,
  unstyled: a,
  className: c,
  rootSelector: l,
  props: u,
  stylesCtx: d,
  withStaticClasses: h,
  headless: f,
  transformedStyles: p
}) {
  return zt(
    kg({ theme: r, options: e, unstyled: a || f }),
    Mg({ theme: r, themeName: t, selector: n, props: u, stylesCtx: d }),
    Lg({ options: e, classes: s, selector: n, unstyled: a }),
    Cc({ selector: n, stylesCtx: d, theme: r, classNames: i, props: u }),
    Cc({ selector: n, stylesCtx: d, theme: r, classNames: p, props: u }),
    Ng({ selector: n, stylesCtx: d, options: e, props: u, theme: r }),
    Pg({ rootSelector: l, selector: n, className: c }),
    Og({ selector: n, classes: s, unstyled: a || f }),
    h && !f && xg({
      themeName: t,
      classNamesPrefix: o,
      selector: n,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function Ug({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (i) => {
      var s;
      return Ro({
        theme: r,
        styles: (s = r.components[i]) == null ? void 0 : s.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((i, s) => ({ ...i, ...s }), {});
}
function Xi({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...Xi({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Hg(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...ws(t[n]) };
  }), e), {});
}
function Fg({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: i,
  themeName: s,
  headless: a
}) {
  var c;
  return (c = Hg([
    a ? {} : e == null ? void 0 : e(t, n, o),
    ...s.map((l) => {
      var u, d, h;
      return (h = (d = (u = t.components) == null ? void 0 : u[l]) == null ? void 0 : d.vars) == null ? void 0 : h.call(d, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : c[i];
}
function Bg({
  theme: r,
  themeName: e,
  selector: t,
  options: n,
  props: o,
  stylesCtx: i,
  rootSelector: s,
  styles: a,
  style: c,
  vars: l,
  varsResolver: u,
  headless: d,
  withStylesTransform: h
}) {
  return {
    ...!h && Ug({ theme: r, themeName: e, props: o, stylesCtx: i, selector: t }),
    ...!h && Ro({ theme: r, styles: a, props: o, stylesCtx: i })[t],
    ...!h && Ro({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: i })[t],
    ...Fg({ theme: r, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: t, themeName: e, headless: d }),
    ...s === t ? Xi({ style: c, theme: r }) : null,
    ...Xi({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function jg({ props: r, stylesCtx: e, themeName: t }) {
  var s;
  const n = Gt(), o = (s = sg()) == null ? void 0 : s();
  return {
    getTransformedStyles: (a) => o ? [
      ...a.map(
        (l) => o(l, { props: r, theme: n, ctx: e })
      ),
      ...t.map(
        (l) => {
          var u;
          return o((u = n.components[l]) == null ? void 0 : u.styles, { props: r, theme: n, ctx: e });
        }
      )
    ].filter(Boolean) : [],
    withStylesTransform: !!o
  };
}
function me({
  name: r,
  classes: e,
  props: t,
  stylesCtx: n,
  className: o,
  style: i,
  rootSelector: s = "root",
  unstyled: a,
  classNames: c,
  styles: l,
  vars: u,
  varsResolver: d
}) {
  const h = Gt(), f = rg(), p = ng(), g = og(), m = (Array.isArray(r) ? r : [r]).filter((v) => v), { withStylesTransform: b, getTransformedStyles: C } = jg({
    props: t,
    stylesCtx: n,
    themeName: m
  });
  return (v, w) => ({
    className: Dg({
      theme: h,
      options: w,
      themeName: m,
      selector: v,
      classNamesPrefix: f,
      classNames: c,
      classes: e,
      unstyled: a,
      className: o,
      rootSelector: s,
      props: t,
      stylesCtx: n,
      withStaticClasses: p,
      headless: g,
      transformedStyles: C([w == null ? void 0 : w.styles, l])
    }),
    style: Bg({
      theme: h,
      themeName: m,
      selector: v,
      options: w,
      props: t,
      stylesCtx: n,
      rootSelector: s,
      styles: l,
      style: i,
      vars: u,
      varsResolver: d,
      headless: g,
      withStylesTransform: b
    })
  });
}
function iu(r, e) {
  return typeof r == "boolean" ? r : e.autoContrast;
}
function G(r, e, t) {
  var s;
  const n = Gt(), o = (s = n.components[r]) == null ? void 0 : s.defaultProps, i = typeof o == "function" ? o(n) : o;
  return { ...e, ...i, ...ws(t) };
}
function wi(r) {
  return Nt(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${_p(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function $g({ selector: r, styles: e, media: t, container: n }) {
  const o = e ? wi(e) : "", i = Array.isArray(t) ? t.map((a) => `@media${a.query}{${r}{${wi(a.styles)}}}`) : [], s = Array.isArray(n) ? n.map(
    (a) => `@container ${a.query}{${r}{${wi(a.styles)}}}`
  ) : [];
  return `${o ? `${r}{${o}}` : ""}${i.join("")}${s.join("")}`.trim();
}
function Kg(r) {
  const e = Ss();
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: $g(r) }
    }
  );
}
function Wo(r) {
  const {
    m: e,
    mx: t,
    my: n,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: h,
    pt: f,
    pb: p,
    pl: g,
    pr: m,
    pe: b,
    ps: C,
    bd: v,
    bg: w,
    c: E,
    opacity: T,
    ff: A,
    fz: _,
    fw: L,
    lts: F,
    ta: J,
    lh: Z,
    fs: se,
    tt: $,
    td: oe,
    w: U,
    miw: x,
    maw: D,
    h: q,
    mih: V,
    mah: de,
    bgsz: pe,
    bgp: ze,
    bgr: yt,
    bga: ke,
    pos: dr,
    top: Qt,
    left: hr,
    bottom: fr,
    right: pr,
    inset: hn,
    display: fn,
    flex: Mt,
    hiddenFrom: Te,
    visibleFrom: Lt,
    lightHidden: Dr,
    darkHidden: je,
    sx: gr,
    ...Ur
  } = r;
  return { styleProps: ws({
    m: e,
    mx: t,
    my: n,
    mt: o,
    mb: i,
    ml: s,
    mr: a,
    me: c,
    ms: l,
    p: u,
    px: d,
    py: h,
    pt: f,
    pb: p,
    pl: g,
    pr: m,
    pe: b,
    ps: C,
    bd: v,
    bg: w,
    c: E,
    opacity: T,
    ff: A,
    fz: _,
    fw: L,
    lts: F,
    ta: J,
    lh: Z,
    fs: se,
    tt: $,
    td: oe,
    w: U,
    miw: x,
    maw: D,
    h: q,
    mih: V,
    mah: de,
    bgsz: pe,
    bgp: ze,
    bgr: yt,
    bga: ke,
    pos: dr,
    top: Qt,
    left: hr,
    bottom: fr,
    right: pr,
    inset: hn,
    display: fn,
    flex: Mt,
    hiddenFrom: Te,
    visibleFrom: Lt,
    lightHidden: Dr,
    darkHidden: je,
    sx: gr
  }), rest: Ur };
}
const qg = {
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
function Rs(r, e) {
  const t = Or({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function zg(r, e) {
  const t = Or({ color: r, theme: e });
  return t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : Rs(r, e);
}
function Gg(r, e) {
  if (typeof r == "number")
    return R(r);
  if (typeof r == "string") {
    const [t, n, ...o] = r.split(" ").filter((s) => s.trim() !== "");
    let i = `${R(t)}`;
    return n && (i += ` ${n}`), o.length > 0 && (i += ` ${Rs(o.join(" "), e)}`), i.trim();
  }
  return r;
}
const bc = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Vg(r) {
  return typeof r == "string" && r in bc ? bc[r] : r;
}
const Wg = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Yg(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "string" && Wg.includes(r) ? `var(--mantine-${r}-font-size)` : typeof r == "number" || typeof r == "string" ? R(r) : r;
}
function Qg(r) {
  return r;
}
const Jg = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Xg(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : typeof r == "string" && Jg.includes(r) ? `var(--mantine-${r}-line-height)` : r;
}
function Zg(r) {
  return typeof r == "number" ? R(r) : r;
}
function em(r, e) {
  if (typeof r == "number")
    return R(r);
  if (typeof r == "string") {
    const t = r.replace("-", "");
    if (!(t in e.spacing))
      return R(r);
    const n = `--mantine-spacing-${t}`;
    return r.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return r;
}
const Ei = {
  color: Rs,
  textColor: zg,
  fontSize: Yg,
  spacing: em,
  identity: Qg,
  size: Zg,
  lineHeight: Xg,
  fontFamily: Vg,
  border: Gg
};
function wc(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function tm({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, i) => Number(wc(o)) - Number(wc(i))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function rm(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function nm(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function om(r) {
  return typeof r == "object" && r !== null ? Nt(r).filter((e) => e !== "base") : [];
}
function im(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function sm({
  styleProps: r,
  data: e,
  theme: t
}) {
  return tm(
    Nt(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return n;
        const i = e[o], s = Array.isArray(i.property) ? i.property : [i.property], a = nm(r[o]);
        if (!rm(r[o]))
          return s.forEach((l) => {
            n.inlineStyles[l] = Ei[i.type](a, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const c = om(r[o]);
        return s.forEach((l) => {
          a && (n.styles[l] = Ei[i.type](a, t)), c.forEach((u) => {
            const d = `(min-width: ${t.breakpoints[u]})`;
            n.media[d] = {
              ...n.media[d],
              [l]: Ei[i.type](
                im(r[o], u),
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
function am() {
  return `__m__-${gl().replace(/:/g, "")}`;
}
function su(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...su(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function au(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function cm(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[au(t)] = r[t]), e;
  }, {});
}
function cu(r) {
  return r ? typeof r == "string" ? { [au(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...cu(t) }),
    {}
  ) : cm(r) : null;
}
function Zi(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...Zi(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function lm({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = Zi(e, r), i = Zi(t, r);
  return { ...o, ...i, ...n };
}
const lu = Ce(
  ({
    component: r,
    style: e,
    __vars: t,
    className: n,
    variant: o,
    mod: i,
    size: s,
    hiddenFrom: a,
    visibleFrom: c,
    lightHidden: l,
    darkHidden: u,
    renderRoot: d,
    __size: h,
    ...f
  }, p) => {
    var _;
    const g = Gt(), m = r || "div", { styleProps: b, rest: C } = Wo(f), v = ig(), w = (_ = v == null ? void 0 : v()) == null ? void 0 : _(b.sx), E = am(), T = sm({
      styleProps: b,
      theme: g,
      data: qg
    }), A = {
      ref: p,
      style: lm({
        theme: g,
        style: e,
        vars: t,
        styleProps: T.inlineStyles
      }),
      className: zt(n, w, {
        [E]: T.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${a}`]: a,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": $l(s) ? void 0 : s || void 0,
      size: h,
      ...cu(i),
      ...C
    };
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      T.hasResponsiveStyles && /* @__PURE__ */ y.jsx(
        Kg,
        {
          selector: `.${E}`,
          styles: T.styles,
          media: T.media
        }
      ),
      typeof d == "function" ? d(A) : /* @__PURE__ */ y.jsx(m, { ...A })
    ] });
  }
);
lu.displayName = "@mantine/core/Box";
const Q = lu;
function uu(r) {
  return r;
}
function ce(r) {
  const e = Ce(r);
  return e.extend = uu, e.withProps = (t) => {
    const n = Ce((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e;
}
function Vt(r) {
  const e = Ce(r);
  return e.withProps = (t) => {
    const n = Ce((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e.extend = uu, e;
}
const um = Nr({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function ks() {
  return ar(um);
}
function dm(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Si(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const vn = typeof window < "u" && window.requestAnimationFrame;
function hm({
  transitionDuration: r,
  transitionTimingFunction: e = "ease",
  onTransitionEnd: t = () => {
  },
  opened: n
}) {
  const o = ue(null), i = 0, s = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [a, c] = X(n ? {} : s), l = (p) => {
    th(() => c(p));
  }, u = (p) => {
    l((g) => ({ ...g, ...p }));
  };
  function d(p) {
    const g = r || dm(p);
    return {
      transition: `height ${g}ms ${e}, opacity ${g}ms ${e}`
    };
  }
  Ir(() => {
    typeof vn == "function" && vn(n ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), vn(() => {
        const p = Si(o);
        u({ ...d(p), height: p });
      });
    } : () => {
      const p = Si(o);
      u({ ...d(p), willChange: "height", height: p }), vn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [n]);
  const h = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (n) {
        const g = Si(o);
        g === a.height ? l({}) : u({ height: g }), t();
      } else
        a.height === i && (l(s), t());
  };
  function f({ style: p = {}, refKey: g = "ref", ...m } = {}) {
    const b = m[g];
    return {
      "aria-hidden": !n,
      ...m,
      [g]: Ql(o, b),
      onTransitionEnd: h,
      style: { boxSizing: "border-box", ...p, ...a }
    };
  }
  return f;
}
const fm = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, du = ce((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: s,
    onTransitionEnd: a,
    animateOpacity: c,
    ...l
  } = G("Collapse", fm, r), u = Gt(), d = Jl(), f = (u.respectReducedMotion ? d : !1) ? 0 : o, p = hm({
    opened: n,
    transitionDuration: f,
    transitionTimingFunction: i,
    onTransitionEnd: a
  });
  return f === 0 ? n ? /* @__PURE__ */ y.jsx(Q, { ...l, children: t }) : null : /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p({
        style: {
          opacity: n || !c ? 1 : 0,
          transition: c ? `opacity ${f}ms ${i}` : "none",
          ...su(s, u)
        },
        ref: e,
        ...l
      }),
      children: t
    }
  );
});
du.displayName = "@mantine/core/Collapse";
const [pm, pt] = cn(
  "ScrollArea.Root component was not found in tree"
);
function rn(r, e) {
  const t = br(e);
  Gn(() => {
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
const gm = Ce((r, e) => {
  const { style: t, ...n } = r, o = pt(), [i, s] = X(0), [a, c] = X(0), l = !!(i && a);
  return rn(o.scrollbarX, () => {
    var d;
    const u = ((d = o.scrollbarX) == null ? void 0 : d.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), rn(o.scrollbarY, () => {
    var d;
    const u = ((d = o.scrollbarY) == null ? void 0 : d.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ y.jsx("div", { ...n, ref: e, style: { ...t, width: i, height: a } }) : null;
}), mm = Ce((r, e) => {
  const t = pt(), n = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && n ? /* @__PURE__ */ y.jsx(gm, { ...r, ref: e }) : null;
}), ym = {
  scrollHideDelay: 1e3,
  type: "hover"
}, hu = Ce((r, e) => {
  const t = G("ScrollAreaRoot", ym, r), { type: n, scrollHideDelay: o, scrollbars: i, ...s } = t, [a, c] = X(null), [l, u] = X(null), [d, h] = X(null), [f, p] = X(null), [g, m] = X(null), [b, C] = X(0), [v, w] = X(0), [E, T] = X(!1), [A, _] = X(!1), L = ft(e, (F) => c(F));
  return /* @__PURE__ */ y.jsx(
    pm,
    {
      value: {
        type: n,
        scrollHideDelay: o,
        scrollArea: a,
        viewport: l,
        onViewportChange: u,
        content: d,
        onContentChange: h,
        scrollbarX: f,
        onScrollbarXChange: p,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: T,
        scrollbarY: g,
        onScrollbarYChange: m,
        scrollbarYEnabled: A,
        onScrollbarYEnabledChange: _,
        onCornerWidthChange: C,
        onCornerHeightChange: w
      },
      children: /* @__PURE__ */ y.jsx(
        Q,
        {
          ...s,
          ref: L,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${b}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${v}px`
          }
        }
      )
    }
  );
});
hu.displayName = "@mantine/core/ScrollAreaRoot";
function fu(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Yo(r) {
  const e = fu(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function pu(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function vm(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function Ec(r, e, t = "ltr") {
  const n = Yo(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, s = e.content - e.viewport, a = i - n, c = t === "ltr" ? [0, s] : [s * -1, 0], l = vm(r, c);
  return pu([0, s], [0, a])(l);
}
function Cm(r, e, t, n = "ltr") {
  const o = Yo(t), i = o / 2, s = e || i, a = o - s, c = t.scrollbar.paddingStart + s, l = t.scrollbar.size - t.scrollbar.paddingEnd - a, u = t.content - t.viewport, d = n === "ltr" ? [0, u] : [u * -1, 0];
  return pu([c, l], d)(r);
}
function gu(r, e) {
  return r > 0 && r < e;
}
function ko(r) {
  return r ? parseInt(r, 10) : 0;
}
function Sr(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [bm, mu] = cn(
  "ScrollAreaScrollbar was not found in tree"
), yu = Ce((r, e) => {
  const {
    sizes: t,
    hasThumb: n,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: s,
    onThumbPositionChange: a,
    onDragScroll: c,
    onWheelScroll: l,
    onResize: u,
    ...d
  } = r, h = pt(), [f, p] = X(null), g = ft(e, (_) => p(_)), m = ue(null), b = ue(""), { viewport: C } = h, v = t.content - t.viewport, w = br(l), E = br(a), T = Go(u, 10), A = (_) => {
    if (m.current) {
      const L = _.clientX - m.current.left, F = _.clientY - m.current.top;
      c({ x: L, y: F });
    }
  };
  return W(() => {
    const _ = (L) => {
      const F = L.target;
      (f == null ? void 0 : f.contains(F)) && w(L, v);
    };
    return document.addEventListener("wheel", _, { passive: !1 }), () => document.removeEventListener("wheel", _, { passive: !1 });
  }, [C, f, v, w]), W(E, [t, E]), rn(f, T), rn(h.content, T), /* @__PURE__ */ y.jsx(
    bm,
    {
      value: {
        scrollbar: f,
        hasThumb: n,
        onThumbChange: br(o),
        onThumbPointerUp: br(i),
        onThumbPositionChange: E,
        onThumbPointerDown: br(s)
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...d,
          ref: g,
          style: { position: "absolute", ...d.style },
          onPointerDown: Sr(r.onPointerDown, (_) => {
            _.preventDefault();
            const L = 0;
            _.button === L && (_.target.setPointerCapture(_.pointerId), m.current = f.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", A(_));
          }),
          onPointerMove: Sr(r.onPointerMove, A),
          onPointerUp: Sr(r.onPointerUp, (_) => {
            _.preventDefault();
            const L = _.target;
            L.hasPointerCapture(_.pointerId) && L.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = b.current, document.body.style.pointerEvents = "auto", m.current = null;
          })
        }
      )
    }
  );
}), wm = Ce(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, s = pt(), [a, c] = X(), l = ue(null), u = ft(e, l, s.onScrollbarXChange);
    return W(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ y.jsx(
      yu,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Yo(t)}px`
        },
        onThumbPointerDown: (d) => r.onThumbPointerDown(d.x),
        onDragScroll: (d) => r.onDragScroll(d.x),
        onWheelScroll: (d, h) => {
          if (s.viewport) {
            const f = s.viewport.scrollLeft + d.deltaX;
            r.onWheelScroll(f), gu(f, h) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && n({
            content: s.viewport.scrollWidth,
            viewport: s.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: ko(a.paddingLeft),
              paddingEnd: ko(a.paddingRight)
            }
          });
        }
      }
    );
  }
), Em = Ce(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, s = pt(), [a, c] = X(), l = ue(null), u = ft(e, l, s.onScrollbarYChange);
    return W(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ y.jsx(
      yu,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Yo(t)}px`,
          ...o
        },
        onThumbPointerDown: (d) => r.onThumbPointerDown(d.y),
        onDragScroll: (d) => r.onDragScroll(d.y),
        onWheelScroll: (d, h) => {
          if (s.viewport) {
            const f = s.viewport.scrollTop + d.deltaY;
            r.onWheelScroll(f), gu(f, h) && d.preventDefault();
          }
        },
        onResize: () => {
          l.current && s.viewport && a && n({
            content: s.viewport.scrollHeight,
            viewport: s.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: ko(a.paddingTop),
              paddingEnd: ko(a.paddingBottom)
            }
          });
        }
      }
    );
  }
), Ns = Ce((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = ks(), i = pt(), s = ue(null), a = ue(0), [c, l] = X({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = fu(c.viewport, c.content), d = {
    ...n,
    sizes: c,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (f) => {
      s.current = f;
    },
    onThumbPointerUp: () => {
      a.current = 0;
    },
    onThumbPointerDown: (f) => {
      a.current = f;
    }
  }, h = (f, p) => Cm(f, a.current, c, p);
  return t === "horizontal" ? /* @__PURE__ */ y.jsx(
    wm,
    {
      ...d,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const f = i.viewport.scrollLeft, p = Ec(f, c, o);
          s.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        i.viewport && (i.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        i.viewport && (i.viewport.scrollLeft = h(f, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ y.jsx(
    Em,
    {
      ...d,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && s.current) {
          const f = i.viewport.scrollTop, p = Ec(f, c);
          c.scrollbar.size === 0 ? s.current.style.opacity = "0" : s.current.style.opacity = "1", s.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (f) => {
        i.viewport && (i.viewport.scrollTop = f);
      },
      onDragScroll: (f) => {
        i.viewport && (i.viewport.scrollTop = h(f));
      }
    }
  ) : null;
}), vu = Ce(
  (r, e) => {
    const t = pt(), { forceMount: n, ...o } = r, [i, s] = X(!1), a = r.orientation === "horizontal", c = Go(() => {
      if (t.viewport) {
        const l = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
        s(a ? l : u);
      }
    }, 10);
    return rn(t.viewport, c), rn(t.content, c), n || i ? /* @__PURE__ */ y.jsx(
      Ns,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), Sm = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), [i, s] = X(!1);
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
    }, [o.scrollArea, o.scrollHideDelay]), t || i ? /* @__PURE__ */ y.jsx(
      vu,
      {
        "data-state": i ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), Tm = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), i = r.orientation === "horizontal", [s, a] = X("hidden"), c = Go(() => a("idle"), 100);
    return W(() => {
      if (s === "idle") {
        const l = window.setTimeout(() => a("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [s, o.scrollHideDelay]), W(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let d = l[u];
        const h = () => {
          const f = l[u];
          d !== f && (a("scrolling"), c()), d = f;
        };
        return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
      }
    }, [o.viewport, i, c]), t || s !== "hidden" ? /* @__PURE__ */ y.jsx(
      Ns,
      {
        "data-state": s === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: Sr(r.onPointerEnter, () => a("interacting")),
        onPointerLeave: Sr(r.onPointerLeave, () => a("idle"))
      }
    ) : null;
  }
), Sc = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: s } = o, a = r.orientation === "horizontal";
    return W(() => (a ? i(!0) : s(!0), () => {
      a ? i(!1) : s(!1);
    }), [a, i, s]), o.type === "hover" ? /* @__PURE__ */ y.jsx(Sm, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ y.jsx(Tm, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ y.jsx(vu, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ y.jsx(Ns, { ...n, ref: e }) : null;
  }
);
function _m(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const i = { left: r.scrollLeft, top: r.scrollTop }, s = t.left !== i.left, a = t.top !== i.top;
    (s || a) && e(), t = i, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const Im = Ce((r, e) => {
  const { style: t, ...n } = r, o = pt(), i = mu(), { onThumbPositionChange: s } = i, a = ft(e, (u) => i.onThumbChange(u)), c = ue(), l = Go(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: u } = o;
    if (u) {
      const d = () => {
        if (l(), !c.current) {
          const h = _m(u, s);
          c.current = h, s();
        }
      };
      return s(), u.addEventListener("scroll", d), () => u.removeEventListener("scroll", d);
    }
  }, [o.viewport, l, s]), /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...n,
      ref: a,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...t
      },
      onPointerDownCapture: Sr(r.onPointerDownCapture, (u) => {
        const h = u.target.getBoundingClientRect(), f = u.clientX - h.left, p = u.clientY - h.top;
        i.onThumbPointerDown({ x: f, y: p });
      }),
      onPointerUp: Sr(r.onPointerUp, i.onThumbPointerUp)
    }
  );
}), Tc = Ce(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = mu();
    return t || o.hasThumb ? /* @__PURE__ */ y.jsx(Im, { ref: e, ...n }) : null;
  }
), Cu = Ce(
  ({ children: r, style: e, ...t }, n) => {
    const o = pt(), i = ft(n, o.onViewportChange);
    return /* @__PURE__ */ y.jsx(
      Q,
      {
        ...t,
        ref: i,
        style: {
          overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
          ...e
        },
        children: /* @__PURE__ */ y.jsx("div", { style: { minWidth: "100%", display: "table" }, ref: o.onContentChange, children: r })
      }
    );
  }
);
Cu.displayName = "@mantine/core/ScrollAreaViewport";
var Ps = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const bu = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Am = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": R(e)
  }
}), Vn = ce((r, e) => {
  const t = G("ScrollArea", bu, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    scrollbarSize: c,
    vars: l,
    type: u,
    scrollHideDelay: d,
    viewportProps: h,
    viewportRef: f,
    onScrollPositionChange: p,
    children: g,
    offsetScrollbars: m,
    scrollbars: b,
    ...C
  } = t, [v, w] = X(!1), E = me({
    name: "ScrollArea",
    props: t,
    classes: Ps,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Am
  });
  return /* @__PURE__ */ y.jsxs(
    hu,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: d,
      ref: e,
      scrollbars: b,
      ...E("root"),
      ...C,
      children: [
        /* @__PURE__ */ y.jsx(
          Cu,
          {
            ...h,
            ...E("viewport", { style: h == null ? void 0 : h.style }),
            ref: f,
            "data-offset-scrollbars": m === !0 ? "xy" : m || void 0,
            "data-scrollbars": b || void 0,
            onScroll: (T) => {
              var A;
              (A = h == null ? void 0 : h.onScroll) == null || A.call(h, T), p == null || p({ x: T.currentTarget.scrollLeft, y: T.currentTarget.scrollTop });
            },
            children: g
          }
        ),
        (b === "xy" || b === "x") && /* @__PURE__ */ y.jsx(
          Sc,
          {
            ...E("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Tc, { ...E("thumb") })
          }
        ),
        (b === "xy" || b === "y") && /* @__PURE__ */ y.jsx(
          Sc,
          {
            ...E("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(Tc, { ...E("thumb") })
          }
        ),
        /* @__PURE__ */ y.jsx(
          mm,
          {
            ...E("corner"),
            "data-hovered": v || void 0,
            "data-hidden": u === "never" || void 0
          }
        )
      ]
    }
  );
});
Vn.displayName = "@mantine/core/ScrollArea";
const Os = ce((r, e) => {
  const {
    children: t,
    classNames: n,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: s,
    type: a,
    dir: c,
    offsetScrollbars: l,
    viewportRef: u,
    onScrollPositionChange: d,
    unstyled: h,
    variant: f,
    viewportProps: p,
    scrollbars: g,
    style: m,
    vars: b,
    ...C
  } = G("ScrollAreaAutosize", bu, r);
  return /* @__PURE__ */ y.jsx(Q, { ...C, ref: e, style: [{ display: "flex", overflow: "auto" }, m], children: /* @__PURE__ */ y.jsx(Q, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ y.jsx(
    Vn,
    {
      classNames: n,
      styles: o,
      scrollHideDelay: s,
      scrollbarSize: i,
      type: a,
      dir: c,
      offsetScrollbars: l,
      viewportRef: u,
      onScrollPositionChange: d,
      unstyled: h,
      variant: f,
      viewportProps: p,
      vars: b,
      scrollbars: g,
      children: t
    }
  ) }) });
});
Vn.classes = Ps;
Os.displayName = "@mantine/core/ScrollAreaAutosize";
Os.classes = Ps;
Vn.Autosize = Os;
var wu = { root: "m_87cf2631" };
const Rm = {
  __staticSelector: "UnstyledButton"
}, xr = Vt(
  (r, e) => {
    const t = G("UnstyledButton", Rm, r), {
      className: n,
      component: o = "button",
      __staticSelector: i,
      unstyled: s,
      classNames: a,
      styles: c,
      style: l,
      ...u
    } = t, d = me({
      name: i,
      props: t,
      classes: wu,
      className: n,
      style: l,
      classNames: a,
      styles: c,
      unstyled: s
    });
    return /* @__PURE__ */ y.jsx(
      Q,
      {
        ...d("root", { focusable: !0 }),
        component: o,
        ref: e,
        type: o === "button" ? "button" : void 0,
        ...u
      }
    );
  }
);
xr.classes = wu;
xr.displayName = "@mantine/core/UnstyledButton";
var Eu = { root: "m_515a97f8" };
const km = {}, xs = ce((r, e) => {
  const t = G("VisuallyHidden", km, r), { classNames: n, className: o, style: i, styles: s, unstyled: a, vars: c, ...l } = t, u = me({
    name: "VisuallyHidden",
    classes: Eu,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a
  });
  return /* @__PURE__ */ y.jsx(Q, { component: "span", ref: e, ...u("root"), ...l });
});
xs.classes = Eu;
xs.displayName = "@mantine/core/VisuallyHidden";
var Su = { root: "m_1b7284a3" };
const Nm = {}, Pm = (r, { radius: e, shadow: t }) => ({
  root: {
    "--paper-radius": e === void 0 ? void 0 : _t(e),
    "--paper-shadow": ql(t)
  }
}), Qo = Vt((r, e) => {
  const t = G("Paper", Nm, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    withBorder: c,
    vars: l,
    radius: u,
    shadow: d,
    variant: h,
    mod: f,
    ...p
  } = t, g = me({
    name: "Paper",
    props: t,
    classes: Su,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: Pm
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      mod: [{ "data-with-border": c }, f],
      ...g("root"),
      variant: h,
      ...p
    }
  );
});
Qo.classes = Su;
Qo.displayName = "@mantine/core/Paper";
function ln(r) {
  return Tu(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function st(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Wt(r) {
  var e;
  return (e = (Tu(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function Tu(r) {
  return r instanceof Node || r instanceof st(r).Node;
}
function Qe(r) {
  return r instanceof Element || r instanceof st(r).Element;
}
function xt(r) {
  return r instanceof HTMLElement || r instanceof st(r).HTMLElement;
}
function _c(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof st(r).ShadowRoot;
}
function Wn(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = St(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function Om(r) {
  return ["table", "td", "th"].includes(ln(r));
}
function Jo(r) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return r.matches(e);
    } catch {
      return !1;
    }
  });
}
function Ms(r) {
  const e = Ls(), t = St(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function xm(r) {
  let e = or(r);
  for (; xt(e) && !nn(e); ) {
    if (Jo(e))
      return null;
    if (Ms(e))
      return e;
    e = or(e);
  }
  return null;
}
function Ls() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function nn(r) {
  return ["html", "body", "#document"].includes(ln(r));
}
function St(r) {
  return st(r).getComputedStyle(r);
}
function Xo(r) {
  return Qe(r) ? {
    scrollLeft: r.scrollLeft,
    scrollTop: r.scrollTop
  } : {
    scrollLeft: r.scrollX,
    scrollTop: r.scrollY
  };
}
function or(r) {
  if (ln(r) === "html")
    return r;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    r.assignedSlot || // DOM Element detected.
    r.parentNode || // ShadowRoot detected.
    _c(r) && r.host || // Fallback.
    Wt(r)
  );
  return _c(e) ? e.host : e;
}
function _u(r) {
  const e = or(r);
  return nn(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : xt(e) && Wn(e) ? e : _u(e);
}
function Dn(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = _u(r), i = o === ((n = r.ownerDocument) == null ? void 0 : n.body), s = st(o);
  return i ? e.concat(s, s.visualViewport || [], Wn(o) ? o : [], s.frameElement && t ? Dn(s.frameElement) : []) : e.concat(o, Dn(o, [], t));
}
const nt = Math.min, Ue = Math.max, No = Math.round, io = Math.floor, ir = (r) => ({
  x: r,
  y: r
}), Mm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Lm = {
  start: "end",
  end: "start"
};
function es(r, e, t) {
  return Ue(r, nt(e, t));
}
function $t(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Tt(r) {
  return r.split("-")[0];
}
function un(r) {
  return r.split("-")[1];
}
function Ds(r) {
  return r === "x" ? "y" : "x";
}
function Us(r) {
  return r === "y" ? "height" : "width";
}
function Kt(r) {
  return ["top", "bottom"].includes(Tt(r)) ? "y" : "x";
}
function Hs(r) {
  return Ds(Kt(r));
}
function Dm(r, e, t) {
  t === void 0 && (t = !1);
  const n = un(r), o = Hs(r), i = Us(o);
  let s = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Po(s)), [s, Po(s)];
}
function Um(r) {
  const e = Po(r);
  return [ts(r), e, ts(e)];
}
function ts(r) {
  return r.replace(/start|end/g, (e) => Lm[e]);
}
function Hm(r, e, t) {
  const n = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return t ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? i : s;
    default:
      return [];
  }
}
function Fm(r, e, t, n) {
  const o = un(r);
  let i = Hm(Tt(r), t === "start", n);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(ts)))), i;
}
function Po(r) {
  return r.replace(/left|right|bottom|top/g, (e) => Mm[e]);
}
function Bm(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Fs(r) {
  return typeof r != "number" ? Bm(r) : {
    top: r,
    right: r,
    bottom: r,
    left: r
  };
}
function on(r) {
  const {
    x: e,
    y: t,
    width: n,
    height: o
  } = r;
  return {
    width: n,
    height: o,
    top: t,
    left: e,
    right: e + n,
    bottom: t + o,
    x: e,
    y: t
  };
}
function Ic(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const i = Kt(e), s = Hs(e), a = Us(s), c = Tt(e), l = i === "y", u = n.x + n.width / 2 - o.width / 2, d = n.y + n.height / 2 - o.height / 2, h = n[a] / 2 - o[a] / 2;
  let f;
  switch (c) {
    case "top":
      f = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      f = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: n.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: n.x,
        y: n.y
      };
  }
  switch (un(e)) {
    case "start":
      f[s] -= h * (t && l ? -1 : 1);
      break;
    case "end":
      f[s] += h * (t && l ? -1 : 1);
      break;
  }
  return f;
}
const jm = async (r, e, t) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = t, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let l = await s.getElementRects({
    reference: r,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: d
  } = Ic(l, n, c), h = n, f = {}, p = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: m,
      fn: b
    } = a[g], {
      x: C,
      y: v,
      data: w,
      reset: E
    } = await b({
      x: u,
      y: d,
      initialPlacement: n,
      placement: h,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: s,
      elements: {
        reference: r,
        floating: e
      }
    });
    u = C ?? u, d = v ?? d, f = {
      ...f,
      [m]: {
        ...f[m],
        ...w
      }
    }, E && p <= 50 && (p++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (l = E.rects === !0 ? await s.getElementRects({
      reference: r,
      floating: e,
      strategy: o
    }) : E.rects), {
      x: u,
      y: d
    } = Ic(l, h, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: f
  };
};
async function Bs(r, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = r, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: f = 0
  } = $t(e, r), p = Fs(f), m = a[h ? d === "floating" ? "reference" : "floating" : d], b = on(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), C = d === "floating" ? {
    x: n,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), w = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = on(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: C,
    offsetParent: v,
    strategy: c
  }) : C);
  return {
    top: (b.top - E.top + p.top) / w.y,
    bottom: (E.bottom - b.bottom + p.bottom) / w.y,
    left: (b.left - E.left + p.left) / w.x,
    right: (E.right - b.right + p.right) / w.x
  };
}
const $m = (r) => ({
  name: "arrow",
  options: r,
  async fn(e) {
    const {
      x: t,
      y: n,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = e, {
      element: l,
      padding: u = 0
    } = $t(r, e) || {};
    if (l == null)
      return {};
    const d = Fs(u), h = {
      x: t,
      y: n
    }, f = Hs(o), p = Us(f), g = await s.getDimensions(l), m = f === "y", b = m ? "top" : "left", C = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[f] - h[f] - i.floating[p], E = h[f] - i.reference[f], T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let A = T ? T[v] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = a.floating[v] || i.floating[p]);
    const _ = w / 2 - E / 2, L = A / 2 - g[p] / 2 - 1, F = nt(d[b], L), J = nt(d[C], L), Z = F, se = A - g[p] - J, $ = A / 2 - g[p] / 2 + _, oe = es(Z, $, se), U = !c.arrow && un(o) != null && $ !== oe && i.reference[p] / 2 - ($ < Z ? F : J) - g[p] / 2 < 0, x = U ? $ < Z ? $ - Z : $ - se : 0;
    return {
      [f]: h[f] + x,
      data: {
        [f]: oe,
        centerOffset: $ - oe - x,
        ...U && {
          alignmentOffset: x
        }
      },
      reset: U
    };
  }
}), Km = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(e) {
      var t, n;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = e, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...m
      } = $t(r, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = Tt(o), C = Kt(a), v = Tt(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = h || (v || !g ? [Po(a)] : Um(a)), T = p !== "none";
      !h && T && E.push(...Fm(a, g, p, w));
      const A = [a, ...E], _ = await Bs(e, m), L = [];
      let F = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && L.push(_[b]), d) {
        const $ = Dm(o, s, w);
        L.push(_[$[0]], _[$[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: L
      }], !L.every(($) => $ <= 0)) {
        var J, Z;
        const $ = (((J = i.flip) == null ? void 0 : J.index) || 0) + 1, oe = A[$];
        if (oe)
          return {
            data: {
              index: $,
              overflows: F
            },
            reset: {
              placement: oe
            }
          };
        let U = (Z = F.filter((x) => x.overflows[0] <= 0).sort((x, D) => x.overflows[1] - D.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!U)
          switch (f) {
            case "bestFit": {
              var se;
              const x = (se = F.filter((D) => {
                if (T) {
                  const q = Kt(D.placement);
                  return q === C || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((q) => q > 0).reduce((q, V) => q + V, 0)]).sort((D, q) => D[1] - q[1])[0]) == null ? void 0 : se[0];
              x && (U = x);
              break;
            }
            case "initialPlacement":
              U = a;
              break;
          }
        if (o !== U)
          return {
            reset: {
              placement: U
            }
          };
      }
      return {};
    }
  };
};
function Iu(r) {
  const e = nt(...r.map((i) => i.left)), t = nt(...r.map((i) => i.top)), n = Ue(...r.map((i) => i.right)), o = Ue(...r.map((i) => i.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function qm(r) {
  const e = r.slice().sort((o, i) => o.y - i.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !n || i.y - n.y > n.height / 2 ? t.push([i]) : t[t.length - 1].push(i), n = i;
  }
  return t.map((o) => on(Iu(o)));
}
const zm = function(r) {
  return r === void 0 && (r = {}), {
    name: "inline",
    options: r,
    async fn(e) {
      const {
        placement: t,
        elements: n,
        rects: o,
        platform: i,
        strategy: s
      } = e, {
        padding: a = 2,
        x: c,
        y: l
      } = $t(r, e), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(n.reference)) || []), d = qm(u), h = on(Iu(u)), f = Fs(a);
      function p() {
        if (d.length === 2 && d[0].left > d[1].right && c != null && l != null)
          return d.find((m) => c > m.left - f.left && c < m.right + f.right && l > m.top - f.top && l < m.bottom + f.bottom) || h;
        if (d.length >= 2) {
          if (Kt(t) === "y") {
            const F = d[0], J = d[d.length - 1], Z = Tt(t) === "top", se = F.top, $ = J.bottom, oe = Z ? F.left : J.left, U = Z ? F.right : J.right, x = U - oe, D = $ - se;
            return {
              top: se,
              bottom: $,
              left: oe,
              right: U,
              width: x,
              height: D,
              x: oe,
              y: se
            };
          }
          const m = Tt(t) === "left", b = Ue(...d.map((F) => F.right)), C = nt(...d.map((F) => F.left)), v = d.filter((F) => m ? F.left === C : F.right === b), w = v[0].top, E = v[v.length - 1].bottom, T = C, A = b, _ = A - T, L = E - w;
          return {
            top: w,
            bottom: E,
            left: T,
            right: A,
            width: _,
            height: L,
            x: T,
            y: w
          };
        }
        return h;
      }
      const g = await i.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: n.floating,
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
async function Gm(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), s = Tt(t), a = un(t), c = Kt(t) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = i && c ? -1 : 1, d = $t(e, r);
  let {
    mainAxis: h,
    crossAxis: f,
    alignmentAxis: p
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
  return a && typeof p == "number" && (f = a === "end" ? p * -1 : p), c ? {
    x: f * u,
    y: h * l
  } : {
    x: h * l,
    y: f * u
  };
}
const Vm = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(e) {
      var t, n;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = e, c = await Gm(e, r);
      return s === ((t = a.offset) == null ? void 0 : t.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Wm = function(r) {
  return r === void 0 && (r = {}), {
    name: "shift",
    options: r,
    async fn(e) {
      const {
        x: t,
        y: n,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (m) => {
            let {
              x: b,
              y: C
            } = m;
            return {
              x: b,
              y: C
            };
          }
        },
        ...c
      } = $t(r, e), l = {
        x: t,
        y: n
      }, u = await Bs(e, c), d = Kt(Tt(o)), h = Ds(d);
      let f = l[h], p = l[d];
      if (i) {
        const m = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", C = f + u[m], v = f - u[b];
        f = es(C, f, v);
      }
      if (s) {
        const m = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", C = p + u[m], v = p - u[b];
        p = es(C, p, v);
      }
      const g = a.fn({
        ...e,
        [h]: f,
        [d]: p
      });
      return {
        ...g,
        data: {
          x: g.x - t,
          y: g.y - n
        }
      };
    }
  };
}, Ym = function(r) {
  return r === void 0 && (r = {}), {
    options: r,
    fn(e) {
      const {
        x: t,
        y: n,
        placement: o,
        rects: i,
        middlewareData: s
      } = e, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = $t(r, e), u = {
        x: t,
        y: n
      }, d = Kt(o), h = Ds(d);
      let f = u[h], p = u[d];
      const g = $t(a, e), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const v = h === "y" ? "height" : "width", w = i.reference[h] - i.floating[v] + m.mainAxis, E = i.reference[h] + i.reference[v] - m.mainAxis;
        f < w ? f = w : f > E && (f = E);
      }
      if (l) {
        var b, C;
        const v = h === "y" ? "width" : "height", w = ["top", "left"].includes(Tt(o)), E = i.reference[d] - i.floating[v] + (w && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (w ? 0 : m.crossAxis), T = i.reference[d] + i.reference[v] + (w ? 0 : ((C = s.offset) == null ? void 0 : C[d]) || 0) - (w ? m.crossAxis : 0);
        p < E ? p = E : p > T && (p = T);
      }
      return {
        [h]: f,
        [d]: p
      };
    }
  };
}, Qm = function(r) {
  return r === void 0 && (r = {}), {
    name: "size",
    options: r,
    async fn(e) {
      const {
        placement: t,
        rects: n,
        platform: o,
        elements: i
      } = e, {
        apply: s = () => {
        },
        ...a
      } = $t(r, e), c = await Bs(e, a), l = Tt(t), u = un(t), d = Kt(t) === "y", {
        width: h,
        height: f
      } = n.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = u === "end" ? "top" : "bottom");
      const m = f - c.top - c.bottom, b = h - c.left - c.right, C = nt(f - c[p], m), v = nt(h - c[g], b), w = !e.middlewareData.shift;
      let E = C, T = v;
      if (d ? T = u || w ? nt(v, b) : b : E = u || w ? nt(C, m) : m, w && !u) {
        const _ = Ue(c.left, 0), L = Ue(c.right, 0), F = Ue(c.top, 0), J = Ue(c.bottom, 0);
        d ? T = h - 2 * (_ !== 0 || L !== 0 ? _ + L : Ue(c.left, c.right)) : E = f - 2 * (F !== 0 || J !== 0 ? F + J : Ue(c.top, c.bottom));
      }
      await s({
        ...e,
        availableWidth: T,
        availableHeight: E
      });
      const A = await o.getDimensions(i.floating);
      return h !== A.width || f !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Au(r) {
  const e = St(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = xt(r), i = o ? r.offsetWidth : t, s = o ? r.offsetHeight : n, a = No(t) !== i || No(n) !== s;
  return a && (t = i, n = s), {
    width: t,
    height: n,
    $: a
  };
}
function js(r) {
  return Qe(r) ? r : r.contextElement;
}
function Xr(r) {
  const e = js(r);
  if (!xt(e))
    return ir(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Au(e);
  let s = (i ? No(t.width) : t.width) / n, a = (i ? No(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Jm = /* @__PURE__ */ ir(0);
function Ru(r) {
  const e = st(r);
  return !Ls() || !e.visualViewport ? Jm : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Xm(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== st(r) ? !1 : e;
}
function Rr(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), i = js(r);
  let s = ir(1);
  e && (n ? Qe(n) && (s = Xr(n)) : s = Xr(r));
  const a = Xm(i, t, n) ? Ru(i) : ir(0);
  let c = (o.left + a.x) / s.x, l = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const h = st(i), f = n && Qe(n) ? st(n) : n;
    let p = h, g = p.frameElement;
    for (; g && n && f !== p; ) {
      const m = Xr(g), b = g.getBoundingClientRect(), C = St(g), v = b.left + (g.clientLeft + parseFloat(C.paddingLeft)) * m.x, w = b.top + (g.clientTop + parseFloat(C.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, d *= m.y, c += v, l += w, p = st(g), g = p.frameElement;
    }
  }
  return on({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Zm(r) {
  let {
    elements: e,
    rect: t,
    offsetParent: n,
    strategy: o
  } = r;
  const i = o === "fixed", s = Wt(n), a = e ? Jo(e.floating) : !1;
  if (n === s || a && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ir(1);
  const u = ir(0), d = xt(n);
  if ((d || !d && !i) && ((ln(n) !== "body" || Wn(s)) && (c = Xo(n)), xt(n))) {
    const h = Rr(n);
    l = Xr(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function ey(r) {
  return Array.from(r.getClientRects());
}
function ku(r) {
  return Rr(Wt(r)).left + Xo(r).scrollLeft;
}
function ty(r) {
  const e = Wt(r), t = Xo(r), n = r.ownerDocument.body, o = Ue(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Ue(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -t.scrollLeft + ku(r);
  const a = -t.scrollTop;
  return St(n).direction === "rtl" && (s += Ue(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function ry(r, e) {
  const t = st(r), n = Wt(r), o = t.visualViewport;
  let i = n.clientWidth, s = n.clientHeight, a = 0, c = 0;
  if (o) {
    i = o.width, s = o.height;
    const l = Ls();
    (!l || l && e === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function ny(r, e) {
  const t = Rr(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, i = xt(r) ? Xr(r) : ir(1), s = r.clientWidth * i.x, a = r.clientHeight * i.y, c = o * i.x, l = n * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Ac(r, e, t) {
  let n;
  if (e === "viewport")
    n = ry(r, t);
  else if (e === "document")
    n = ty(Wt(r));
  else if (Qe(e))
    n = ny(e, t);
  else {
    const o = Ru(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return on(n);
}
function Nu(r, e) {
  const t = or(r);
  return t === e || !Qe(t) || nn(t) ? !1 : St(t).position === "fixed" || Nu(t, e);
}
function oy(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Dn(r, [], !1).filter((a) => Qe(a) && ln(a) !== "body"), o = null;
  const i = St(r).position === "fixed";
  let s = i ? or(r) : r;
  for (; Qe(s) && !nn(s); ) {
    const a = St(s), c = Ms(s);
    !c && a.position === "fixed" && (o = null), (i ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Wn(s) && !c && Nu(r, s)) ? n = n.filter((u) => u !== s) : o = a, s = or(s);
  }
  return e.set(r, n), n;
}
function iy(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const s = [...t === "clippingAncestors" ? Jo(e) ? [] : oy(e, this._c) : [].concat(t), n], a = s[0], c = s.reduce((l, u) => {
    const d = Ac(e, u, o);
    return l.top = Ue(d.top, l.top), l.right = nt(d.right, l.right), l.bottom = nt(d.bottom, l.bottom), l.left = Ue(d.left, l.left), l;
  }, Ac(e, a, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function sy(r) {
  const {
    width: e,
    height: t
  } = Au(r);
  return {
    width: e,
    height: t
  };
}
function ay(r, e, t) {
  const n = xt(e), o = Wt(e), i = t === "fixed", s = Rr(r, !0, i, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ir(0);
  if (n || !n && !i)
    if ((ln(e) !== "body" || Wn(o)) && (a = Xo(e)), n) {
      const d = Rr(e, !0, i, e);
      c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
    } else
      o && (c.x = ku(o));
  const l = s.left + a.scrollLeft - c.x, u = s.top + a.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: s.width,
    height: s.height
  };
}
function Ti(r) {
  return St(r).position === "static";
}
function Rc(r, e) {
  return !xt(r) || St(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function Pu(r, e) {
  const t = st(r);
  if (Jo(r))
    return t;
  if (!xt(r)) {
    let o = or(r);
    for (; o && !nn(o); ) {
      if (Qe(o) && !Ti(o))
        return o;
      o = or(o);
    }
    return t;
  }
  let n = Rc(r, e);
  for (; n && Om(n) && Ti(n); )
    n = Rc(n, e);
  return n && nn(n) && Ti(n) && !Ms(n) ? t : n || xm(r) || t;
}
const cy = async function(r) {
  const e = this.getOffsetParent || Pu, t = this.getDimensions, n = await t(r.floating);
  return {
    reference: ay(r.reference, await e(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ly(r) {
  return St(r).direction === "rtl";
}
const uy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zm,
  getDocumentElement: Wt,
  getClippingRect: iy,
  getOffsetParent: Pu,
  getElementRects: cy,
  getClientRects: ey,
  getDimensions: sy,
  getScale: Xr,
  isElement: Qe,
  isRTL: ly
};
function dy(r, e) {
  let t = null, n;
  const o = Wt(r);
  function i() {
    var a;
    clearTimeout(n), (a = t) == null || a.disconnect(), t = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: d,
      height: h
    } = r.getBoundingClientRect();
    if (a || e(), !d || !h)
      return;
    const f = io(u), p = io(o.clientWidth - (l + d)), g = io(o.clientHeight - (u + h)), m = io(l), C = {
      rootMargin: -f + "px " + -p + "px " + -g + "px " + -m + "px",
      threshold: Ue(0, nt(1, c)) || 1
    };
    let v = !0;
    function w(E) {
      const T = E[0].intersectionRatio;
      if (T !== c) {
        if (!v)
          return s();
        T ? s(!1, T) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      v = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, C);
    }
    t.observe(r);
  }
  return s(!0), i;
}
function hy(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = js(r), u = o || i ? [...l ? Dn(l) : [], ...Dn(e)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const d = l && a ? dy(l, t) : null;
  let h = -1, f = null;
  s && (f = new ResizeObserver((b) => {
    let [C] = b;
    C && C.target === l && f && (f.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var v;
      (v = f) == null || v.observe(e);
    })), t();
  }), l && !c && f.observe(l), f.observe(e));
  let p, g = c ? Rr(r) : null;
  c && m();
  function m() {
    const b = Rr(r);
    g && (b.x !== g.x || b.y !== g.y || b.width !== g.width || b.height !== g.height) && t(), g = b, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var b;
    u.forEach((C) => {
      o && C.removeEventListener("scroll", t), i && C.removeEventListener("resize", t);
    }), d == null || d(), (b = f) == null || b.disconnect(), f = null, c && cancelAnimationFrame(p);
  };
}
const fy = Vm, py = Wm, gy = Km, my = Qm, kc = $m, yy = zm, vy = Ym, Cy = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: uy,
    ...t
  }, i = {
    ...o.platform,
    _c: n
  };
  return jm(r, e, {
    ...o,
    platform: i
  });
};
var uo = typeof document < "u" ? ds : W;
function Oo(r, e) {
  if (r === e)
    return !0;
  if (typeof r != typeof e)
    return !1;
  if (typeof r == "function" && r.toString() === e.toString())
    return !0;
  let t, n, o;
  if (r && e && typeof r == "object") {
    if (Array.isArray(r)) {
      if (t = r.length, t !== e.length)
        return !1;
      for (n = t; n-- !== 0; )
        if (!Oo(r[n], e[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(r), t = o.length, t !== Object.keys(e).length)
      return !1;
    for (n = t; n-- !== 0; )
      if (!{}.hasOwnProperty.call(e, o[n]))
        return !1;
    for (n = t; n-- !== 0; ) {
      const i = o[n];
      if (!(i === "_owner" && r.$$typeof) && !Oo(r[i], e[i]))
        return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
}
function Ou(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nc(r, e) {
  const t = Ou(r);
  return Math.round(e * t) / t;
}
function Pc(r) {
  const e = ae.useRef(r);
  return uo(() => {
    e.current = r;
  }), e;
}
function by(r) {
  r === void 0 && (r = {});
  const {
    placement: e = "bottom",
    strategy: t = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = r, [u, d] = ae.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [h, f] = ae.useState(n);
  Oo(h, n) || f(n);
  const [p, g] = ae.useState(null), [m, b] = ae.useState(null), C = ae.useCallback((x) => {
    x !== T.current && (T.current = x, g(x));
  }, []), v = ae.useCallback((x) => {
    x !== A.current && (A.current = x, b(x));
  }, []), w = i || p, E = s || m, T = ae.useRef(null), A = ae.useRef(null), _ = ae.useRef(u), L = c != null, F = Pc(c), J = Pc(o), Z = ae.useCallback(() => {
    if (!T.current || !A.current)
      return;
    const x = {
      placement: e,
      strategy: t,
      middleware: h
    };
    J.current && (x.platform = J.current), Cy(T.current, A.current, x).then((D) => {
      const q = {
        ...D,
        isPositioned: !0
      };
      se.current && !Oo(_.current, q) && (_.current = q, eh.flushSync(() => {
        d(q);
      }));
    });
  }, [h, e, t, J]);
  uo(() => {
    l === !1 && _.current.isPositioned && (_.current.isPositioned = !1, d((x) => ({
      ...x,
      isPositioned: !1
    })));
  }, [l]);
  const se = ae.useRef(!1);
  uo(() => (se.current = !0, () => {
    se.current = !1;
  }), []), uo(() => {
    if (w && (T.current = w), E && (A.current = E), w && E) {
      if (F.current)
        return F.current(w, E, Z);
      Z();
    }
  }, [w, E, Z, F, L]);
  const $ = ae.useMemo(() => ({
    reference: T,
    floating: A,
    setReference: C,
    setFloating: v
  }), [C, v]), oe = ae.useMemo(() => ({
    reference: w,
    floating: E
  }), [w, E]), U = ae.useMemo(() => {
    const x = {
      position: t,
      left: 0,
      top: 0
    };
    if (!oe.floating)
      return x;
    const D = Nc(oe.floating, u.x), q = Nc(oe.floating, u.y);
    return a ? {
      ...x,
      transform: "translate(" + D + "px, " + q + "px)",
      ...Ou(oe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: D,
      top: q
    };
  }, [t, a, oe.floating, u.x, u.y]);
  return ae.useMemo(() => ({
    ...u,
    update: Z,
    refs: $,
    elements: oe,
    floatingStyles: U
  }), [u, Z, $, oe, U]);
}
const wy = (r) => {
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
      return n && e(n) ? n.current != null ? kc({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? kc({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
}, Ey = (r, e) => ({
  ...fy(r),
  options: [r, e]
}), Sy = (r, e) => ({
  ...py(r),
  options: [r, e]
}), Oc = (r, e) => ({
  ...vy(r),
  options: [r, e]
}), xc = (r, e) => ({
  ...gy(r),
  options: [r, e]
}), Ty = (r, e) => ({
  ...my(r),
  options: [r, e]
}), Mc = (r, e) => ({
  ...yy(r),
  options: [r, e]
}), _y = (r, e) => ({
  ...wy(r),
  options: [r, e]
}), xu = {
  ...ae
}, Iy = xu.useInsertionEffect, Ay = Iy || ((r) => r());
function Ry(r) {
  const e = ae.useRef(() => {
  });
  return Ay(() => {
    e.current = r;
  }), ae.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var rs = typeof document < "u" ? ds : W;
let Lc = !1, ky = 0;
const Dc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + ky++
);
function Ny() {
  const [r, e] = ae.useState(() => Lc ? Dc() : void 0);
  return rs(() => {
    r == null && e(Dc());
  }, []), ae.useEffect(() => {
    Lc = !0;
  }, []), r;
}
const Py = xu.useId, Oy = Py || Ny;
function xy() {
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
const My = /* @__PURE__ */ ae.createContext(null), Ly = /* @__PURE__ */ ae.createContext(null), Dy = () => {
  var r;
  return ((r = ae.useContext(My)) == null ? void 0 : r.id) || null;
}, Uy = () => ae.useContext(Ly);
function Hy(r) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: n
  } = r, o = Oy(), i = ae.useRef({}), [s] = ae.useState(() => xy()), a = Dy() != null, [c, l] = ae.useState(n.reference), u = Ry((f, p, g) => {
    i.current.openEvent = f ? p : void 0, s.emit("openchange", {
      open: f,
      event: p,
      reason: g,
      nested: a
    }), t == null || t(f, p, g);
  }), d = ae.useMemo(() => ({
    setPositionReference: l
  }), []), h = ae.useMemo(() => ({
    reference: c || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [c, n.reference, n.floating]);
  return ae.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: h,
    events: s,
    floatingId: o,
    refs: d
  }), [e, u, h, s, o, d]);
}
function Fy(r) {
  r === void 0 && (r = {});
  const {
    nodeId: e
  } = r, t = Hy({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), n = r.rootContext || t, o = n.elements, [i, s] = ae.useState(null), [a, c] = ae.useState(null), u = (o == null ? void 0 : o.reference) || i, d = ae.useRef(null), h = Uy();
  rs(() => {
    u && (d.current = u);
  }, [u]);
  const f = by({
    ...r,
    elements: {
      ...o,
      ...a && {
        reference: a
      }
    }
  }), p = ae.useCallback((v) => {
    const w = Qe(v) ? {
      getBoundingClientRect: () => v.getBoundingClientRect(),
      contextElement: v
    } : v;
    c(w), f.refs.setReference(w);
  }, [f.refs]), g = ae.useCallback((v) => {
    (Qe(v) || v === null) && (d.current = v, s(v)), (Qe(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    v !== null && !Qe(v)) && f.refs.setReference(v);
  }, [f.refs]), m = ae.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: p,
    domReference: d
  }), [f.refs, g, p]), b = ae.useMemo(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), C = ae.useMemo(() => ({
    ...f,
    ...n,
    refs: m,
    elements: b,
    nodeId: e
  }), [f, m, b, e, n]);
  return rs(() => {
    n.dataRef.current.floatingContext = C;
    const v = h == null ? void 0 : h.nodesRef.current.find((w) => w.id === e);
    v && (v.context = C);
  }), ae.useMemo(() => ({
    ...f,
    context: C,
    refs: m,
    elements: b
  }), [f, m, b, C]);
}
function By(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function Uc(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function Hc(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const jy = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function $y({
  position: r,
  arrowSize: e,
  arrowOffset: t,
  arrowRadius: n,
  arrowPosition: o,
  arrowX: i,
  arrowY: s,
  dir: a
}) {
  const [c, l = "center"] = r.split("-"), u = {
    width: e,
    height: e,
    transform: "rotate(45deg)",
    position: "absolute",
    [jy[c]]: n
  }, d = -e / 2;
  return c === "left" ? {
    ...u,
    ...Uc(l, s, t, o),
    right: d,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...Uc(l, s, t, o),
    left: d,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...Hc(l, i, t, o, a),
    bottom: d,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...Hc(l, i, t, o, a),
    top: d,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const Mu = Ce(
  ({
    position: r,
    arrowSize: e,
    arrowOffset: t,
    arrowRadius: n,
    arrowPosition: o,
    visible: i,
    arrowX: s,
    arrowY: a,
    style: c,
    ...l
  }, u) => {
    const { dir: d } = ks();
    return i ? /* @__PURE__ */ y.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...$y({
            position: r,
            arrowSize: e,
            arrowOffset: t,
            arrowRadius: n,
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
Mu.displayName = "@mantine/core/FloatingArrow";
const [Ky, Lu] = cn(
  "Popover component was not found in the tree"
);
function $s({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = Yp(e), o = ft(n, r == null ? void 0 : r.ref);
  return zn(r) ? $o(r, { [t]: o }) : r;
}
function Du(r) {
  return /* @__PURE__ */ y.jsx(xs, { tabIndex: -1, "data-autofocus": !0, ...r });
}
$s.displayName = "@mantine/core/FocusTrap";
Du.displayName = "@mantine/core/FocusTrapInitialFocus";
$s.InitialFocus = Du;
function qy(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const zy = {}, Uu = Ce((r, e) => {
  const { children: t, target: n, ...o } = G("Portal", zy, r), [i, s] = X(!1), a = ue(null);
  return Gn(() => (s(!0), a.current = n ? typeof n == "string" ? document.querySelector(n) : n : qy(o), Yl(e, a.current), !n && a.current && document.body.appendChild(a.current), () => {
    !n && a.current && document.body.removeChild(a.current);
  }), [n]), !i || !a.current ? null : rh(/* @__PURE__ */ y.jsx(y.Fragment, { children: t }), a.current);
});
Uu.displayName = "@mantine/core/Portal";
function Hu({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ y.jsx(Uu, { ...t, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
Hu.displayName = "@mantine/core/OptionalPortal";
const Cn = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${R(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), so = {
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
    ...Cn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...Cn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...Cn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...Cn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...Cn("top"),
    common: { transformOrigin: "top right" }
  }
}, Fc = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Gy({
  transition: r,
  state: e,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in so ? {
    transitionProperty: so[r].transitionProperty,
    ...o,
    ...so[r].common,
    ...so[r][Fc[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[Fc[e]]
  };
}
function Vy({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: i,
  onEntered: s,
  onExited: a,
  enterDelay: c,
  exitDelay: l
}) {
  const u = Gt(), d = Jl(), h = u.respectReducedMotion ? d : !1, [f, p] = X(h ? 0 : r), [g, m] = X(n ? "entered" : "exited"), b = ue(-1), C = ue(-1), v = ue(-1), w = (T) => {
    const A = T ? o : i, _ = T ? s : a;
    window.clearTimeout(b.current);
    const L = h ? 0 : T ? r : e;
    p(L), L === 0 ? (typeof A == "function" && A(), typeof _ == "function" && _(), m(T ? "entered" : "exited")) : v.current = requestAnimationFrame(() => {
      ml.flushSync(() => {
        m(T ? "pre-entering" : "pre-exiting");
      }), v.current = requestAnimationFrame(() => {
        typeof A == "function" && A(), m(T ? "entering" : "exiting"), b.current = window.setTimeout(() => {
          typeof _ == "function" && _(), m(T ? "entered" : "exited");
        }, L);
      });
    });
  }, E = (T) => {
    if (window.clearTimeout(C.current), typeof (T ? c : l) != "number") {
      w(T);
      return;
    }
    C.current = window.setTimeout(
      () => {
        w(T);
      },
      T ? c : l
    );
  };
  return Ir(() => {
    E(n);
  }, [n]), W(
    () => () => {
      window.clearTimeout(b.current), cancelAnimationFrame(v.current);
    },
    []
  ), {
    transitionDuration: f,
    transitionStatus: g,
    transitionTimingFunction: t || "ease"
  };
}
function Zo({
  keepMounted: r,
  transition: e = "fade",
  duration: t = 250,
  exitDuration: n = t,
  mounted: o,
  children: i,
  timingFunction: s = "ease",
  onExit: a,
  onEntered: c,
  onEnter: l,
  onExited: u,
  enterDelay: d,
  exitDelay: h
}) {
  const { transitionDuration: f, transitionStatus: p, transitionTimingFunction: g } = Vy({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: s,
    onExit: a,
    onEntered: c,
    onEnter: l,
    onExited: u,
    enterDelay: d,
    exitDelay: h
  });
  return f === 0 ? o ? /* @__PURE__ */ y.jsx(y.Fragment, { children: i({}) }) : r ? i({ display: "none" }) : null : p === "exited" ? r ? i({ display: "none" }) : null : /* @__PURE__ */ y.jsx(y.Fragment, { children: i(
    Gy({
      transition: e,
      duration: f,
      state: p,
      timingFunction: g
    })
  ) });
}
Zo.displayName = "@mantine/core/Transition";
var Fu = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Wy = {}, Ks = ce((r, e) => {
  var m, b, C, v;
  const t = G("PopoverDropdown", Wy, r), {
    className: n,
    style: o,
    vars: i,
    children: s,
    onKeyDownCapture: a,
    variant: c,
    classNames: l,
    styles: u,
    ...d
  } = t, h = Lu(), f = $p({
    opened: h.opened,
    shouldReturnFocus: h.returnFocus
  }), p = h.withRoles ? {
    "aria-labelledby": h.getTargetId(),
    id: h.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = ft(e, h.floating);
  return h.disabled ? null : /* @__PURE__ */ y.jsx(Hu, { ...h.portalProps, withinPortal: h.withinPortal, children: /* @__PURE__ */ y.jsx(
    Zo,
    {
      mounted: h.opened,
      ...h.transitionProps,
      transition: ((m = h.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((b = h.transitionProps) == null ? void 0 : b.duration) ?? 150,
      keepMounted: h.keepMounted,
      exitDuration: typeof ((C = h.transitionProps) == null ? void 0 : C.exitDuration) == "number" ? h.transitionProps.exitDuration : (v = h.transitionProps) == null ? void 0 : v.duration,
      children: (w) => /* @__PURE__ */ y.jsx($s, { active: h.trapFocus, children: /* @__PURE__ */ y.jsxs(
        Q,
        {
          ...p,
          ...d,
          variant: c,
          ref: g,
          onKeyDownCapture: Lp(h.onClose, {
            active: h.closeOnEscape,
            onTrigger: f,
            onKeyDown: a
          }),
          "data-position": h.placement,
          "data-fixed": h.floatingStrategy === "fixed" || void 0,
          ...h.getStyles("dropdown", {
            className: n,
            props: t,
            classNames: l,
            styles: u,
            style: [
              {
                ...w,
                zIndex: h.zIndex,
                top: h.y ?? 0,
                left: h.x ?? 0,
                width: h.width === "target" ? void 0 : R(h.width)
              },
              o
            ]
          }),
          children: [
            s,
            /* @__PURE__ */ y.jsx(
              Mu,
              {
                ref: h.arrowRef,
                arrowX: h.arrowX,
                arrowY: h.arrowY,
                visible: h.withArrow,
                position: h.placement,
                arrowSize: h.arrowSize,
                arrowRadius: h.arrowRadius,
                arrowOffset: h.arrowOffset,
                arrowPosition: h.arrowPosition,
                ...h.getStyles("arrow", {
                  props: t,
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
Ks.classes = Fu;
Ks.displayName = "@mantine/core/PopoverDropdown";
const Yy = {
  refProp: "ref",
  popupType: "dialog"
}, Bu = ce((r, e) => {
  const { children: t, refProp: n, popupType: o, ...i } = G(
    "PopoverTarget",
    Yy,
    r
  );
  if (!zn(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const s = i, a = Lu(), c = ft(a.reference, t.ref, e), l = a.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": a.opened,
    "aria-controls": a.getDropdownId(),
    id: a.getTargetId()
  } : {};
  return $o(t, {
    ...s,
    ...l,
    ...a.targetProps,
    className: zt(a.targetProps.className, s.className, t.props.className),
    [n]: c,
    ...a.controlled ? null : { onClick: a.onToggle }
  });
});
Bu.displayName = "@mantine/core/PopoverTarget";
function Qy({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, i] = X(0);
  W(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return hy(
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
  ]), Ir(() => {
    e.update();
  }, n), Ir(() => {
    i((s) => s + 1);
  }, [r]);
}
function Jy(r) {
  if (r === void 0)
    return { shift: !0, flip: !0 };
  const e = { ...r };
  return r.shift === void 0 && (e.shift = !0), r.flip === void 0 && (e.flip = !0), e;
}
function Xy(r, e) {
  const t = Jy(r.middlewares), n = [Ey(r.offset)];
  return t.shift && n.push(
    Sy(
      typeof t.shift == "boolean" ? { limiter: Oc(), padding: 5 } : { limiter: Oc(), padding: 5, ...t.shift }
    )
  ), t.flip && n.push(
    typeof t.flip == "boolean" ? xc() : xc(t.flip)
  ), t.inline && n.push(
    typeof t.inline == "boolean" ? Mc() : Mc(t.inline)
  ), n.push(_y({ element: r.arrowRef, padding: r.arrowOffset })), (t.size || r.width === "target") && n.push(
    Ty({
      ...typeof t.size == "boolean" ? {} : t.size,
      apply({ rects: o, availableWidth: i, availableHeight: s }) {
        var l;
        const c = ((l = e().refs.floating.current) == null ? void 0 : l.style) ?? {};
        t.size && Object.assign(c, {
          maxWidth: `${i}px`,
          maxHeight: `${s}px`
        }), r.width === "target" && Object.assign(c, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), n;
}
function Zy(r) {
  const [e, t] = Ar({
    value: r.opened,
    defaultValue: r.defaultOpened,
    finalValue: !1,
    onChange: r.onChange
  }), n = () => {
    var s;
    e && ((s = r.onClose) == null || s.call(r), t(!1));
  }, o = () => {
    var s, a;
    e ? ((s = r.onClose) == null || s.call(r), t(!1)) : ((a = r.onOpen) == null || a.call(r), t(!0));
  }, i = Fy({
    strategy: r.strategy,
    placement: r.position,
    middleware: Xy(r, () => i)
  });
  return Qy({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: i
  }), Ir(() => {
    var s;
    (s = r.onPositionChange) == null || s.call(r, i.placement);
  }, [i.placement]), Ir(() => {
    var s, a;
    r.opened ? (a = r.onOpen) == null || a.call(r) : (s = r.onClose) == null || s.call(r);
  }, [r.opened]), {
    floating: i,
    controlled: typeof r.opened == "boolean",
    opened: e,
    onClose: n,
    onToggle: o
  };
}
const ev = {
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
  zIndex: xp("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, tv = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : _t(e),
    "--popover-shadow": ql(t)
  }
});
function lr(r) {
  var je, gr, Ur, $e, Dt, Hr;
  const e = G("Popover", ev, r), {
    children: t,
    position: n,
    offset: o,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    transitionProps: c,
    width: l,
    middlewares: u,
    withArrow: d,
    arrowSize: h,
    arrowOffset: f,
    arrowRadius: p,
    arrowPosition: g,
    unstyled: m,
    classNames: b,
    styles: C,
    closeOnClickOutside: v,
    withinPortal: w,
    portalProps: E,
    closeOnEscape: T,
    clickOutsideEvents: A,
    trapFocus: _,
    onClose: L,
    onOpen: F,
    onChange: J,
    zIndex: Z,
    radius: se,
    shadow: $,
    id: oe,
    defaultOpened: U,
    __staticSelector: x,
    withRoles: D,
    disabled: q,
    returnFocus: V,
    variant: de,
    keepMounted: pe,
    vars: ze,
    floatingStrategy: yt,
    ...ke
  } = e, dr = me({
    name: x,
    props: e,
    classes: Fu,
    classNames: b,
    styles: C,
    unstyled: m,
    rootSelector: "dropdown",
    vars: ze,
    varsResolver: tv
  }), Qt = ue(null), [hr, fr] = X(null), [pr, hn] = X(null), { dir: fn } = ks(), Mt = cr(oe), Te = Zy({
    middlewares: u,
    width: l,
    position: By(fn, n),
    offset: typeof o == "number" ? o + (d ? h / 2 : 0) : o,
    arrowRef: Qt,
    arrowOffset: f,
    onPositionChange: i,
    positionDependencies: s,
    opened: a,
    defaultOpened: U,
    onChange: J,
    onOpen: F,
    onClose: L,
    strategy: yt
  });
  Up(() => v && Te.onClose(), A, [
    hr,
    pr
  ]);
  const Lt = ve(
    (lt) => {
      fr(lt), Te.floating.refs.setReference(lt);
    },
    [Te.floating.refs.setReference]
  ), Dr = ve(
    (lt) => {
      hn(lt), Te.floating.refs.setFloating(lt);
    },
    [Te.floating.refs.setFloating]
  );
  return /* @__PURE__ */ y.jsx(
    Ky,
    {
      value: {
        returnFocus: V,
        disabled: q,
        controlled: Te.controlled,
        reference: Lt,
        floating: Dr,
        x: Te.floating.x,
        y: Te.floating.y,
        arrowX: (Ur = (gr = (je = Te.floating) == null ? void 0 : je.middlewareData) == null ? void 0 : gr.arrow) == null ? void 0 : Ur.x,
        arrowY: (Hr = (Dt = ($e = Te.floating) == null ? void 0 : $e.middlewareData) == null ? void 0 : Dt.arrow) == null ? void 0 : Hr.y,
        opened: Te.opened,
        arrowRef: Qt,
        transitionProps: c,
        width: l,
        withArrow: d,
        arrowSize: h,
        arrowOffset: f,
        arrowRadius: p,
        arrowPosition: g,
        placement: Te.floating.placement,
        trapFocus: _,
        withinPortal: w,
        portalProps: E,
        zIndex: Z,
        radius: se,
        shadow: $,
        closeOnEscape: T,
        onClose: Te.onClose,
        onToggle: Te.onToggle,
        getTargetId: () => `${Mt}-target`,
        getDropdownId: () => `${Mt}-dropdown`,
        withRoles: D,
        targetProps: ke,
        __staticSelector: x,
        classNames: b,
        styles: C,
        unstyled: m,
        variant: de,
        keepMounted: pe,
        getStyles: dr,
        floatingStrategy: yt
      },
      children: t
    }
  );
}
lr.Target = Bu;
lr.Dropdown = Ks;
lr.displayName = "@mantine/core/Popover";
lr.extend = (r) => r;
var Et = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const rv = Ce(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsxs(Q, { component: "span", className: zt(Et.barsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: Et.bar }),
  /* @__PURE__ */ y.jsx("span", { className: Et.bar }),
  /* @__PURE__ */ y.jsx("span", { className: Et.bar })
] })), nv = Ce(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsxs(Q, { component: "span", className: zt(Et.dotsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: Et.dot }),
  /* @__PURE__ */ y.jsx("span", { className: Et.dot }),
  /* @__PURE__ */ y.jsx("span", { className: Et.dot })
] })), ov = Ce(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsx(Q, { component: "span", className: zt(Et.ovalLoader, r), ...e, ref: t })), ju = {
  bars: rv,
  oval: ov,
  dots: nv
}, iv = {
  loaders: ju,
  type: "oval"
}, sv = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Re(e, "loader-size"),
    "--loader-color": t ? nr(t, r) : void 0
  }
}), Yn = ce((r, e) => {
  const t = G("Loader", iv, r), {
    size: n,
    color: o,
    type: i,
    vars: s,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    loaders: h,
    variant: f,
    children: p,
    ...g
  } = t, m = me({
    name: "Loader",
    props: t,
    classes: Et,
    className: a,
    style: c,
    classNames: l,
    styles: u,
    unstyled: d,
    vars: s,
    varsResolver: sv
  });
  return p ? /* @__PURE__ */ y.jsx(Q, { ...m("root"), ref: e, ...g, children: p }) : /* @__PURE__ */ y.jsx(
    Q,
    {
      ...m("root"),
      ref: e,
      component: h[i],
      variant: f,
      size: n,
      ...g
    }
  );
});
Yn.defaultLoaders = ju;
Yn.classes = Et;
Yn.displayName = "@mantine/core/Loader";
var ei = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const Bc = {
  orientation: "horizontal"
}, av = (r, { borderWidth: e }) => ({
  group: { "--ai-border-width": R(e) }
}), qs = ce((r, e) => {
  const t = G("ActionIconGroup", Bc, r), {
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    mod: h,
    ...f
  } = G("ActionIconGroup", Bc, r), p = me({
    name: "ActionIconGroup",
    props: t,
    classes: ei,
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: av,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p("group"),
      ref: e,
      variant: d,
      mod: [{ "data-orientation": c }, h],
      role: "group",
      ...f
    }
  );
});
qs.classes = ei;
qs.displayName = "@mantine/core/ActionIconGroup";
const cv = {}, lv = (r, { size: e, radius: t, variant: n, gradient: o, color: i, autoContrast: s }) => {
  const a = r.variantColorResolver({
    color: i || r.primaryColor,
    theme: r,
    gradient: o,
    variant: n || "filled",
    autoContrast: s
  });
  return {
    root: {
      "--ai-size": Re(e, "ai-size"),
      "--ai-radius": t === void 0 ? void 0 : _t(t),
      "--ai-bg": i || n ? a.background : void 0,
      "--ai-hover": i || n ? a.hover : void 0,
      "--ai-hover-color": i || n ? a.hoverColor : void 0,
      "--ai-color": a.color,
      "--ai-bd": i || n ? a.border : void 0
    }
  };
}, ti = Vt((r, e) => {
  const t = G("ActionIcon", cv, r), {
    className: n,
    unstyled: o,
    variant: i,
    classNames: s,
    styles: a,
    style: c,
    loading: l,
    loaderProps: u,
    size: d,
    color: h,
    radius: f,
    __staticSelector: p,
    gradient: g,
    vars: m,
    children: b,
    disabled: C,
    "data-disabled": v,
    autoContrast: w,
    mod: E,
    ...T
  } = t, A = me({
    name: ["ActionIcon", p],
    props: t,
    className: n,
    style: c,
    classes: ei,
    classNames: s,
    styles: a,
    unstyled: o,
    vars: m,
    varsResolver: lv
  });
  return /* @__PURE__ */ y.jsxs(
    xr,
    {
      ...A("root", { active: !C && !l && !v }),
      ...T,
      unstyled: o,
      variant: i,
      size: d,
      disabled: C || l,
      ref: e,
      mod: [{ loading: l, disabled: C || v }, E],
      children: [
        /* @__PURE__ */ y.jsx(Zo, { mounted: !!l, transition: "slide-down", duration: 150, children: (_) => /* @__PURE__ */ y.jsx(Q, { component: "span", ...A("loader", { style: _ }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(Yn, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ y.jsx(Q, { component: "span", mod: { loading: l }, ...A("icon"), children: b })
      ]
    }
  );
});
ti.classes = ei;
ti.displayName = "@mantine/core/ActionIcon";
ti.Group = qs;
const $u = Ce(
  ({ size: r = "var(--cb-icon-size, 70%)", style: e, ...t }, n) => /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...e, width: r, height: r },
      ref: n,
      ...t,
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
$u.displayName = "@mantine/core/CloseIcon";
var Ku = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const uv = {
  variant: "subtle"
}, dv = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Re(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : _t(t),
    "--cb-icon-size": R(n)
  }
}), dn = Vt((r, e) => {
  const t = G("CloseButton", uv, r), {
    iconSize: n,
    children: o,
    vars: i,
    radius: s,
    className: a,
    classNames: c,
    style: l,
    styles: u,
    unstyled: d,
    "data-disabled": h,
    disabled: f,
    variant: p,
    icon: g,
    mod: m,
    ...b
  } = t, C = me({
    name: "CloseButton",
    props: t,
    className: a,
    style: l,
    classes: Ku,
    classNames: c,
    styles: u,
    unstyled: d,
    vars: i,
    varsResolver: dv
  });
  return /* @__PURE__ */ y.jsxs(
    xr,
    {
      ref: e,
      ...b,
      unstyled: d,
      variant: p,
      disabled: f,
      mod: [{ disabled: f || h }, m],
      ...C("root", { variant: p, active: !f && !h }),
      children: [
        g || /* @__PURE__ */ y.jsx($u, {}),
        o
      ]
    }
  );
});
dn.classes = Ku;
dn.displayName = "@mantine/core/CloseButton";
function hv(r) {
  return Pi.toArray(r).filter(Boolean);
}
var qu = { root: "m_4081bf90" };
const fv = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, pv = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: i, wrap: s }, { childWidth: a }) => ({
  root: {
    "--group-child-width": e && t ? a : void 0,
    "--group-gap": Es(n),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": s
  }
}), Un = ce((r, e) => {
  const t = G("Group", fv, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    children: c,
    gap: l,
    align: u,
    justify: d,
    wrap: h,
    grow: f,
    preventGrowOverflow: p,
    vars: g,
    variant: m,
    __size: b,
    mod: C,
    ...v
  } = t, w = hv(c), E = w.length, T = Es(l ?? "md"), _ = { childWidth: `calc(${100 / E}% - (${T} - ${T} / ${E}))` }, L = me({
    name: "Group",
    props: t,
    stylesCtx: _,
    className: o,
    style: i,
    classes: qu,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: g,
    varsResolver: pv
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...L("root"),
      ref: e,
      variant: m,
      mod: [{ grow: f }, C],
      size: b,
      ...v,
      children: w
    }
  );
});
Un.classes = qu;
Un.displayName = "@mantine/core/Group";
const [gv, Qn] = Kl({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var gt = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const jc = {}, mv = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${it(e)} - ${R(2)})`
  }
}), ri = ce((r, e) => {
  const t = G("InputDescription", jc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: h,
    ...f
  } = G("InputDescription", jc, t), p = Qn(), g = me({
    name: ["InputWrapper", u],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "description",
    vars: c,
    varsResolver: mv
  }), m = d && (p == null ? void 0 : p.getStyles) || g;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      component: "p",
      ref: e,
      variant: h,
      size: l,
      ...m("description", p != null && p.getStyles ? { className: o, style: i } : void 0),
      ...f
    }
  );
});
ri.classes = gt;
ri.displayName = "@mantine/core/InputDescription";
const yv = {}, vv = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${it(e)} - ${R(2)})`
  }
}), ni = ce((r, e) => {
  const t = G("InputError", yv, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: d = !0,
    variant: h,
    ...f
  } = t, p = me({
    name: ["InputWrapper", u],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "error",
    vars: c,
    varsResolver: vv
  }), g = Qn(), m = d && (g == null ? void 0 : g.getStyles) || p;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      component: "p",
      ref: e,
      variant: h,
      size: l,
      ...m("error", g != null && g.getStyles ? { className: o, style: i } : void 0),
      ...f
    }
  );
});
ni.classes = gt;
ni.displayName = "@mantine/core/InputError";
const $c = {
  labelElement: "label"
}, Cv = (r, { size: e }) => ({
  label: {
    "--input-label-size": it(e),
    "--input-asterisk-color": void 0
  }
}), oi = ce((r, e) => {
  const t = G("InputLabel", $c, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    labelElement: l,
    size: u,
    required: d,
    htmlFor: h,
    onMouseDown: f,
    children: p,
    __staticSelector: g,
    variant: m,
    mod: b,
    ...C
  } = G("InputLabel", $c, t), v = me({
    name: ["InputWrapper", g],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "label",
    vars: c,
    varsResolver: Cv
  }), w = Qn(), E = (w == null ? void 0 : w.getStyles) || v;
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ...E("label", w != null && w.getStyles ? { className: o, style: i } : void 0),
      component: l,
      variant: m,
      size: u,
      ref: e,
      htmlFor: l === "label" ? h : void 0,
      mod: [{ required: d }, b],
      onMouseDown: (T) => {
        f == null || f(T), !T.defaultPrevented && T.detail > 1 && T.preventDefault();
      },
      ...C,
      children: [
        p,
        d && /* @__PURE__ */ y.jsx("span", { ...E("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
oi.classes = gt;
oi.displayName = "@mantine/core/InputLabel";
const Kc = {}, zs = ce((r, e) => {
  const t = G("InputPlaceholder", Kc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: d,
    mod: h,
    ...f
  } = G("InputPlaceholder", Kc, t), p = me({
    name: ["InputPlaceholder", l],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p("placeholder"),
      mod: [{ error: !!d }, h],
      component: "span",
      variant: u,
      ref: e,
      ...f
    }
  );
});
zs.classes = gt;
zs.displayName = "@mantine/core/InputPlaceholder";
function bv(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((c) => c === "input"), o = r.slice(0, n), i = r.slice(n + 1), s = e && o.includes("description") || t && o.includes("error");
  return { offsetBottom: e && i.includes("description") || t && i.includes("error"), offsetTop: s };
}
const wv = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Ev = (r, { size: e }) => ({
  label: {
    "--input-label-size": it(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${it(e)} - ${R(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${it(e)} - ${R(2)})`
  }
}), Gs = ce((r, e) => {
  const t = G("InputWrapper", wv, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    size: l,
    variant: u,
    __staticSelector: d,
    inputContainer: h,
    inputWrapperOrder: f,
    label: p,
    error: g,
    description: m,
    labelProps: b,
    descriptionProps: C,
    errorProps: v,
    labelElement: w,
    children: E,
    withAsterisk: T,
    id: A,
    required: _,
    __stylesApiProps: L,
    mod: F,
    ...J
  } = t, Z = me({
    name: ["InputWrapper", d],
    props: L || t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Ev
  }), se = {
    size: l,
    variant: u,
    __staticSelector: d
  }, $ = cr(A), oe = typeof T == "boolean" ? T : _, U = (v == null ? void 0 : v.id) || `${$}-error`, x = (C == null ? void 0 : C.id) || `${$}-description`, D = $, q = !!g && typeof g != "boolean", V = !!m, de = `${q ? U : ""} ${V ? x : ""}`, pe = de.trim().length > 0 ? de.trim() : void 0, ze = (b == null ? void 0 : b.id) || `${$}-label`, yt = p && /* @__PURE__ */ y.jsx(
    oi,
    {
      labelElement: w,
      id: ze,
      htmlFor: D,
      required: oe,
      ...se,
      ...b,
      children: p
    },
    "label"
  ), ke = V && /* @__PURE__ */ y.jsx(
    ri,
    {
      ...C,
      ...se,
      size: (C == null ? void 0 : C.size) || se.size,
      id: (C == null ? void 0 : C.id) || x,
      children: m
    },
    "description"
  ), dr = /* @__PURE__ */ y.jsx(pl, { children: h(E) }, "input"), Qt = q && /* @__PURE__ */ Oi(
    ni,
    {
      ...v,
      ...se,
      size: (v == null ? void 0 : v.size) || se.size,
      key: "error",
      id: (v == null ? void 0 : v.id) || U
    },
    g
  ), hr = f.map((fr) => {
    switch (fr) {
      case "label":
        return yt;
      case "input":
        return dr;
      case "description":
        return ke;
      case "error":
        return Qt;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ y.jsx(
    gv,
    {
      value: {
        getStyles: Z,
        describedBy: pe,
        inputId: D,
        labelId: ze,
        ...bv(f, { hasDescription: V, hasError: q })
      },
      children: /* @__PURE__ */ y.jsx(
        Q,
        {
          ref: e,
          variant: u,
          size: l,
          mod: [{ error: !!g }, F],
          ...Z("root"),
          ...J,
          children: hr
        }
      )
    }
  );
});
Gs.classes = gt;
Gs.displayName = "@mantine/core/InputWrapper";
const Sv = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Tv = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Re(e.size, "input-height"),
    "--input-fz": it(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : _t(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? R(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? R(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Re(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Be = Vt((r, e) => {
  const t = G("Input", Sv, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    required: c,
    __staticSelector: l,
    __stylesApiProps: u,
    size: d,
    wrapperProps: h,
    error: f,
    disabled: p,
    leftSection: g,
    leftSectionProps: m,
    leftSectionWidth: b,
    rightSection: C,
    rightSectionProps: v,
    rightSectionWidth: w,
    rightSectionPointerEvents: E,
    leftSectionPointerEvents: T,
    variant: A,
    vars: _,
    pointer: L,
    multiline: F,
    radius: J,
    id: Z,
    withAria: se,
    withErrorStyles: $,
    mod: oe,
    inputSize: U,
    ...x
  } = t, { styleProps: D, rest: q } = Wo(x), V = Qn(), de = { offsetBottom: V == null ? void 0 : V.offsetBottom, offsetTop: V == null ? void 0 : V.offsetTop }, pe = me({
    name: ["Input", l],
    props: u || t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    stylesCtx: de,
    rootSelector: "wrapper",
    vars: _,
    varsResolver: Tv
  }), ze = se ? {
    required: c,
    disabled: p,
    "aria-invalid": !!f,
    "aria-describedby": V == null ? void 0 : V.describedBy,
    id: (V == null ? void 0 : V.inputId) || Z
  } : {};
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ...pe("wrapper"),
      ...D,
      ...h,
      mod: [
        {
          error: !!f && $,
          pointer: L,
          disabled: p,
          multiline: F,
          "data-with-right-section": !!C,
          "data-with-left-section": !!g
        },
        oe
      ],
      variant: A,
      size: d,
      children: [
        g && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...m,
            "data-position": "left",
            ...pe("section", {
              className: m == null ? void 0 : m.className,
              style: m == null ? void 0 : m.style
            }),
            children: g
          }
        ),
        /* @__PURE__ */ y.jsx(
          Q,
          {
            component: "input",
            ...q,
            ...ze,
            ref: e,
            required: c,
            mod: { disabled: p, error: !!f && $ },
            variant: A,
            __size: U,
            ...pe("input")
          }
        ),
        C && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...v,
            "data-position": "right",
            ...pe("section", {
              className: v == null ? void 0 : v.className,
              style: v == null ? void 0 : v.style
            }),
            children: C
          }
        )
      ]
    }
  );
});
Be.classes = gt;
Be.Wrapper = Gs;
Be.Label = oi;
Be.Error = ni;
Be.Description = ri;
Be.Placeholder = zs;
Be.displayName = "@mantine/core/Input";
function _v(r, e, t) {
  const n = G(r, e, t), {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: c,
    styles: l,
    className: u,
    unstyled: d,
    __staticSelector: h,
    __stylesApiProps: f,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    wrapperProps: b,
    id: C,
    size: v,
    style: w,
    inputContainer: E,
    inputWrapperOrder: T,
    withAsterisk: A,
    variant: _,
    vars: L,
    mod: F,
    ...J
  } = n, { styleProps: Z, rest: se } = Wo(J), $ = {
    label: o,
    description: i,
    error: s,
    required: a,
    classNames: c,
    className: u,
    __staticSelector: h,
    __stylesApiProps: f || n,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    unstyled: d,
    styles: l,
    size: v,
    style: w,
    inputContainer: E,
    inputWrapperOrder: T,
    withAsterisk: A,
    variant: _,
    id: C,
    mod: F,
    ...b
  };
  return {
    ...se,
    classNames: c,
    styles: l,
    unstyled: d,
    wrapperProps: { ...$, ...Z },
    inputProps: {
      required: a,
      classNames: c,
      styles: l,
      unstyled: d,
      size: v,
      __staticSelector: h,
      __stylesApiProps: f || n,
      error: s,
      variant: _,
      id: C
    }
  };
}
const Iv = {
  __staticSelector: "InputBase",
  withAria: !0
}, Yt = Vt((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = _v("InputBase", Iv, r);
  return /* @__PURE__ */ y.jsx(Be.Wrapper, { ...n, children: /* @__PURE__ */ y.jsx(Be, { ...t, ...o, ref: e }) });
});
Yt.classes = { ...Be.classes, ...Be.Wrapper.classes };
Yt.displayName = "@mantine/core/InputBase";
const [Av, Vs] = cn(
  "Accordion component was not found in the tree"
);
function Ws({ style: r, size: e = 16, ...t }) {
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: R(e), height: R(e), display: "block" },
      ...t,
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
Ws.displayName = "@mantine/core/AccordionChevron";
const [Rv, zu] = cn("Accordion.Item component was not found in the tree");
var Jn = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const kv = {}, Ys = ce((r, e) => {
  const {
    classNames: t,
    className: n,
    style: o,
    styles: i,
    vars: s,
    chevron: a,
    icon: c,
    onClick: l,
    onKeyDown: u,
    children: d,
    disabled: h,
    mod: f,
    ...p
  } = G("AccordionControl", kv, r), { value: g } = zu(), m = Vs(), b = m.isItemActive(g), C = typeof m.order == "number", v = `h${m.order}`, w = /* @__PURE__ */ y.jsxs(
    xr,
    {
      ...p,
      ...m.getStyles("control", { className: n, classNames: t, style: o, styles: i, variant: m.variant }),
      unstyled: m.unstyled,
      mod: [
        "accordion-control",
        { active: b, "chevron-position": m.chevronPosition, disabled: h },
        f
      ],
      ref: e,
      onClick: (E) => {
        l == null || l(E), m.onChange(g);
      },
      type: "button",
      disabled: h,
      "aria-expanded": b,
      "aria-controls": m.getRegionId(g),
      id: m.getControlId(g),
      onKeyDown: Pp({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: m.loop,
        orientation: "vertical",
        onKeyDown: u
      }),
      children: [
        /* @__PURE__ */ y.jsx(
          Q,
          {
            component: "span",
            mod: { rotate: !m.disableChevronRotation && b, position: m.chevronPosition },
            ...m.getStyles("chevron", { classNames: t, styles: i }),
            children: a || m.chevron
          }
        ),
        /* @__PURE__ */ y.jsx("span", { ...m.getStyles("label", { classNames: t, styles: i }), children: d }),
        c && /* @__PURE__ */ y.jsx(
          Q,
          {
            component: "span",
            mod: { "chevron-position": m.chevronPosition },
            ...m.getStyles("icon", { classNames: t, styles: i }),
            children: c
          }
        )
      ]
    }
  );
  return C ? /* @__PURE__ */ y.jsx(v, { ...m.getStyles("itemTitle", { classNames: t, styles: i }), children: w }) : w;
});
Ys.displayName = "@mantine/core/AccordionControl";
Ys.classes = Jn;
const Nv = {}, Qs = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, value: a, mod: c, ...l } = G(
    "AccordionItem",
    Nv,
    r
  ), u = Vs();
  return /* @__PURE__ */ y.jsx(Rv, { value: { value: a }, children: /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      mod: [{ active: u.isItemActive(a) }, c],
      ...u.getStyles("item", { className: n, classNames: t, styles: i, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
Qs.displayName = "@mantine/core/AccordionItem";
Qs.classes = Jn;
const Pv = {}, Js = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, children: a, ...c } = G(
    "AccordionPanel",
    Pv,
    r
  ), { value: l } = zu(), u = Vs();
  return /* @__PURE__ */ y.jsx(
    du,
    {
      ref: e,
      ...u.getStyles("panel", { className: n, classNames: t, style: o, styles: i }),
      ...c,
      in: u.isItemActive(l),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(l),
      "aria-labelledby": u.getControlId(l),
      children: /* @__PURE__ */ y.jsx("div", { ...u.getStyles("content", { classNames: t, styles: i }), children: a })
    }
  );
});
Js.displayName = "@mantine/core/AccordionPanel";
Js.classes = Jn;
const Ov = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ y.jsx(Ws, {})
}, xv = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : R(t),
    "--accordion-radius": n === void 0 ? void 0 : _t(n)
  }
});
function Ne(r) {
  const e = G("Accordion", Ov, r), {
    classNames: t,
    className: n,
    style: o,
    styles: i,
    unstyled: s,
    vars: a,
    children: c,
    multiple: l,
    value: u,
    defaultValue: d,
    onChange: h,
    id: f,
    loop: p,
    transitionDuration: g,
    disableChevronRotation: m,
    chevronPosition: b,
    chevronSize: C,
    order: v,
    chevron: w,
    variant: E,
    radius: T,
    ...A
  } = e, _ = cr(f), [L, F] = Ar({
    value: u,
    defaultValue: d,
    finalValue: l ? [] : null,
    onChange: h
  }), J = ($) => Array.isArray(L) ? L.includes($) : $ === L, Z = ($) => {
    const oe = Array.isArray(L) ? L.includes($) ? L.filter((U) => U !== $) : [...L, $] : $ === L ? null : $;
    F(oe);
  }, se = me({
    name: "Accordion",
    classes: Jn,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: i,
    unstyled: s,
    vars: a,
    varsResolver: xv
  });
  return /* @__PURE__ */ y.jsx(
    Av,
    {
      value: {
        isItemActive: J,
        onChange: Z,
        getControlId: hc(
          `${_}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: hc(
          `${_}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: m,
        chevronPosition: b,
        order: v,
        chevron: w,
        loop: p,
        getStyles: se,
        variant: E,
        unstyled: s
      },
      children: /* @__PURE__ */ y.jsx(Q, { ...se("root"), id: _, ...A, variant: E, "data-accordion": !0, children: c })
    }
  );
}
const Mv = (r) => r;
Ne.extend = Mv;
Ne.classes = Jn;
Ne.displayName = "@mantine/core/Accordion";
Ne.Item = Qs;
Ne.Panel = Js;
Ne.Control = Ys;
Ne.Chevron = Ws;
var Gu = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const Lv = {}, Dv = (r, { radius: e, color: t, variant: n, autoContrast: o }) => {
  const i = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    variant: n || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : _t(e),
      "--alert-bg": t || n ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": t || n ? i.border : void 0
    }
  };
}, Xs = ce((r, e) => {
  const t = G("Alert", Lv, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    radius: l,
    color: u,
    title: d,
    children: h,
    id: f,
    icon: p,
    withCloseButton: g,
    onClose: m,
    closeButtonLabel: b,
    variant: C,
    autoContrast: v,
    ...w
  } = t, E = me({
    name: "Alert",
    classes: Gu,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: Dv
  }), T = cr(f), A = d && `${T}-title` || void 0, _ = `${T}-body`;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      id: T,
      ...E("root", { variant: C }),
      variant: C,
      ref: e,
      ...w,
      role: "alert",
      "aria-describedby": _,
      "aria-labelledby": A,
      children: /* @__PURE__ */ y.jsxs("div", { ...E("wrapper"), children: [
        p && /* @__PURE__ */ y.jsx("div", { ...E("icon"), children: p }),
        /* @__PURE__ */ y.jsxs("div", { ...E("body"), children: [
          d && /* @__PURE__ */ y.jsx("div", { ...E("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ y.jsx("span", { id: A, ...E("label"), children: d }) }),
          h && /* @__PURE__ */ y.jsx("div", { id: _, ...E("message"), "data-variant": C, children: h })
        ] }),
        g && /* @__PURE__ */ y.jsx(
          dn,
          {
            ...E("closeButton"),
            onClick: m,
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
Xs.classes = Gu;
Xs.displayName = "@mantine/core/Alert";
var Vu = { root: "m_b6d8b162" };
function Uv(r) {
  if (r === "start")
    return "start";
  if (r === "end" || r)
    return "end";
}
const Hv = {
  inherit: !1
}, Fv = (r, { variant: e, lineClamp: t, gradient: n, size: o, color: i }) => ({
  root: {
    "--text-fz": it(o),
    "--text-lh": Dp(o),
    "--text-gradient": e === "gradient" ? Ji(n, r) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": i ? nr(i, r) : void 0
  }
}), xo = Vt((r, e) => {
  const t = G("Text", Hv, r), {
    lineClamp: n,
    truncate: o,
    inline: i,
    inherit: s,
    gradient: a,
    span: c,
    __staticSelector: l,
    vars: u,
    className: d,
    style: h,
    classNames: f,
    styles: p,
    unstyled: g,
    variant: m,
    mod: b,
    size: C,
    ...v
  } = t, w = me({
    name: ["Text", l],
    props: t,
    classes: Vu,
    className: d,
    style: h,
    classNames: f,
    styles: p,
    unstyled: g,
    vars: u,
    varsResolver: Fv
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...w("root", { focusable: !0 }),
      ref: e,
      component: c ? "span" : "p",
      variant: m,
      mod: [
        {
          "data-truncate": Uv(o),
          "data-line-clamp": typeof n == "number",
          "data-inline": i,
          "data-inherit": s
        },
        b
      ],
      size: C,
      ...v
    }
  );
});
xo.classes = Vu;
xo.displayName = "@mantine/core/Text";
function Wu(r) {
  return typeof r == "string" ? { value: r, label: r } : "value" in r && !("label" in r) ? { value: r.value, label: r.value, disabled: r.disabled } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => Wu(e))
  } : r;
}
function Yu(r) {
  return r ? r.map((e) => Wu(e)) : [];
}
function Zs(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...Zs(t.items) } : (e[t.value] = t, e), {});
}
var Xe = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Bv = {
  error: null
}, jv = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Re(e, "combobox-chevron-size")
  }
}), ea = ce((r, e) => {
  const t = G("ComboboxChevron", Bv, r), { size: n, error: o, style: i, className: s, classNames: a, styles: c, unstyled: l, vars: u, mod: d, ...h } = t, f = me({
    name: "ComboboxChevron",
    classes: Xe,
    props: t,
    style: i,
    className: s,
    classNames: a,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: jv,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      component: "svg",
      ...h,
      ...f("chevron"),
      size: n,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, d],
      ref: e,
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
ea.classes = Xe;
ea.displayName = "@mantine/core/ComboboxChevron";
const [$v, mt] = cn(
  "Combobox component was not found in tree"
), Qu = Ce(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, i) => /* @__PURE__ */ y.jsx(
    dn,
    {
      ref: i,
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
Qu.displayName = "@mantine/core/ComboboxClearButton";
const Kv = {}, ta = ce((r, e) => {
  const { classNames: t, styles: n, className: o, style: i, hidden: s, ...a } = G(
    "ComboboxDropdown",
    Kv,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    lr.Dropdown,
    {
      ...a,
      ref: e,
      role: "presentation",
      "data-hidden": s || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: t, styles: n })
    }
  );
});
ta.classes = Xe;
ta.displayName = "@mantine/core/ComboboxDropdown";
const qv = {
  refProp: "ref"
}, Ju = ce((r, e) => {
  const { children: t, refProp: n } = G("ComboboxDropdownTarget", qv, r);
  if (mt(), !zn(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ y.jsx(lr.Target, { ref: e, refProp: n, children: t });
});
Ju.displayName = "@mantine/core/ComboboxDropdownTarget";
const zv = {}, ra = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, ...a } = G(
    "ComboboxEmpty",
    zv,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("empty", { className: n, classNames: t, styles: i, style: o }),
      ...a
    }
  );
});
ra.classes = Xe;
ra.displayName = "@mantine/core/ComboboxEmpty";
function na({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o,
  autoComplete: i
}) {
  const s = mt(), [a, c] = X(null), l = (d) => {
    if (r == null || r(d), !s.readOnly && e) {
      if (d.nativeEvent.isComposing)
        return;
      if (d.nativeEvent.code === "ArrowDown" && (d.preventDefault(), s.store.dropdownOpened ? c(s.store.selectNextOption()) : (s.store.openDropdown("keyboard"), c(s.store.selectActiveOption()))), d.nativeEvent.code === "ArrowUp" && (d.preventDefault(), s.store.dropdownOpened ? c(s.store.selectPreviousOption()) : (s.store.openDropdown("keyboard"), c(s.store.selectActiveOption()))), d.nativeEvent.code === "Enter" || d.nativeEvent.code === "NumpadEnter") {
        if (d.nativeEvent.keyCode === 229)
          return;
        const h = s.store.getSelectedOptionIndex();
        s.store.dropdownOpened && h !== -1 ? (d.preventDefault(), s.store.clickSelectedOption()) : o === "button" && (d.preventDefault(), s.store.openDropdown("keyboard"));
      }
      d.nativeEvent.code === "Escape" && s.store.closeDropdown("keyboard"), d.nativeEvent.code === "Space" && o === "button" && (d.preventDefault(), s.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...t ? {
      "aria-haspopup": "listbox",
      "aria-expanded": n && !!(s.store.listId && s.store.dropdownOpened) || void 0,
      "aria-controls": s.store.listId,
      "aria-activedescendant": s.store.dropdownOpened && a || void 0,
      autoComplete: i,
      "data-expanded": s.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": s.store.dropdownOpened || void 0
    } : {},
    onKeyDown: l
  };
}
const Gv = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, Xu = ce((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    autoComplete: c,
    ...l
  } = G("ComboboxEventsTarget", Gv, r);
  if (!zn(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), d = na({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  });
  return $o(t, {
    ...d,
    ...l,
    [n]: ft(e, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
Xu.displayName = "@mantine/core/ComboboxEventsTarget";
const Vv = {}, oa = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, ...a } = G(
    "ComboboxFooter",
    Vv,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("footer", { className: n, classNames: t, style: o, styles: i }),
      ...a,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
oa.classes = Xe;
oa.displayName = "@mantine/core/ComboboxFooter";
const Wv = {}, ia = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, children: a, label: c, ...l } = G(
    "ComboboxGroup",
    Wv,
    r
  ), u = mt();
  return /* @__PURE__ */ y.jsxs(
    Q,
    {
      ref: e,
      ...u.getStyles("group", { className: n, classNames: t, style: o, styles: i }),
      ...l,
      children: [
        c && /* @__PURE__ */ y.jsx("div", { ...u.getStyles("groupLabel", { classNames: t, styles: i }), children: c }),
        a
      ]
    }
  );
});
ia.classes = Xe;
ia.displayName = "@mantine/core/ComboboxGroup";
const Yv = {}, sa = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: s, ...a } = G(
    "ComboboxHeader",
    Yv,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...c.getStyles("header", { className: n, classNames: t, style: o, styles: i }),
      ...a,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
sa.classes = Xe;
sa.displayName = "@mantine/core/ComboboxHeader";
function Zu({
  value: r,
  valuesDivider: e = ",",
  ...t
}) {
  return /* @__PURE__ */ y.jsx(
    "input",
    {
      type: "hidden",
      value: Array.isArray(r) ? r.join(e) : r || "",
      ...t
    }
  );
}
Zu.displayName = "@mantine/core/ComboboxHiddenInput";
const Qv = {}, aa = ce((r, e) => {
  const t = G("ComboboxOption", Qv, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    vars: a,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: d,
    onMouseOver: h,
    disabled: f,
    selected: p,
    mod: g,
    ...m
  } = t, b = mt(), C = gl(), v = l || C;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...b.getStyles("option", { className: o, classNames: n, styles: s, style: i }),
      ...m,
      ref: e,
      id: v,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": f, "combobox-selected": p },
        g
      ],
      role: "option",
      onClick: (w) => {
        var E;
        f ? w.preventDefault() : ((E = b.onOptionSubmit) == null || E.call(b, t.value, t), c == null || c(w));
      },
      onMouseDown: (w) => {
        w.preventDefault(), d == null || d(w);
      },
      onMouseOver: (w) => {
        b.resetSelectionOnOptionHover && b.store.resetSelectedOption(), h == null || h(w);
      }
    }
  );
});
aa.classes = Xe;
aa.displayName = "@mantine/core/ComboboxOption";
const Jv = {}, ca = ce((r, e) => {
  const t = G("ComboboxOptions", Jv, r), { classNames: n, className: o, style: i, styles: s, id: a, onMouseDown: c, labelledBy: l, ...u } = t, d = mt(), h = cr(a);
  return W(() => {
    d.store.setListId(h);
  }, [h]), /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...d.getStyles("options", { className: o, style: i, classNames: n, styles: s }),
      ...u,
      id: h,
      role: "listbox",
      "aria-labelledby": l,
      onMouseDown: (f) => {
        f.preventDefault(), c == null || c(f);
      }
    }
  );
});
ca.classes = Xe;
ca.displayName = "@mantine/core/ComboboxOptions";
const Xv = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, la = ce((r, e) => {
  const t = G("ComboboxSearch", Xv, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: s,
    withAriaAttributes: a,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...d
  } = t, h = mt(), f = h.getStyles("search"), p = na({
    targetType: "input",
    withAriaAttributes: a,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c,
    autoComplete: "off"
  });
  return /* @__PURE__ */ y.jsx(
    Be,
    {
      ref: ft(e, h.store.searchRef),
      classNames: [{ input: f.className }, n],
      styles: [{ input: f.style }, o],
      size: u || h.size,
      ...p,
      ...d,
      __staticSelector: "Combobox"
    }
  );
});
la.classes = Xe;
la.displayName = "@mantine/core/ComboboxSearch";
const Zv = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, ed = ce((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: s,
    targetType: a,
    autoComplete: c,
    ...l
  } = G("ComboboxTarget", Zv, r);
  if (!zn(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), d = na({
    targetType: a,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: s,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  }), h = $o(t, {
    ...d,
    ...l
  });
  return /* @__PURE__ */ y.jsx(lr.Target, { ref: ft(e, u.store.targetRef), children: h });
});
ed.displayName = "@mantine/core/ComboboxTarget";
function eC(r, e, t) {
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
function tC(r, e, t) {
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
function rC(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function ii({
  defaultOpened: r,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: s = "instant"
} = {}) {
  const [a, c] = Ar({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), l = ue(null), u = ue(-1), d = ue(null), h = ue(null), f = ue(-1), p = ue(-1), g = ue(-1), m = ve(
    (U = "unknown") => {
      a || (c(!0), o == null || o(U));
    },
    [c, o, a]
  ), b = ve(
    (U = "unknown") => {
      a && (c(!1), n == null || n(U));
    },
    [c, n, a]
  ), C = ve(
    (U = "unknown") => {
      a ? b(U) : m(U);
    },
    [b, m, a]
  ), v = ve(() => {
    const U = document.querySelector(`#${l.current} [data-combobox-selected]`);
    U == null || U.removeAttribute("data-combobox-selected"), U == null || U.removeAttribute("aria-selected");
  }, []), w = ve(
    (U) => {
      const x = document.getElementById(l.current), D = x == null ? void 0 : x.querySelectorAll("[data-combobox-option]");
      if (!D)
        return null;
      const q = U >= D.length ? 0 : U < 0 ? D.length - 1 : U;
      return u.current = q, D != null && D[q] && !D[q].hasAttribute("data-combobox-disabled") ? (v(), D[q].setAttribute("data-combobox-selected", "true"), D[q].setAttribute("aria-selected", "true"), D[q].scrollIntoView({ block: "nearest", behavior: s }), D[q].id) : null;
    },
    [s, v]
  ), E = ve(() => {
    const U = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (U) {
      const x = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), D = Array.from(x).findIndex((q) => q === U);
      return w(D);
    }
    return w(0);
  }, [w]), T = ve(
    () => w(
      tC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), A = ve(
    () => w(
      eC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), _ = ve(
    () => w(
      rC(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
  ), L = ve(
    (U = "selected", x) => {
      g.current = window.setTimeout(() => {
        var V;
        const D = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), q = Array.from(D).findIndex(
          (de) => de.hasAttribute(`data-combobox-${U}`)
        );
        u.current = q, x != null && x.scrollIntoView && ((V = D[q]) == null || V.scrollIntoView({ block: "nearest", behavior: s }));
      }, 0);
    },
    []
  ), F = ve(() => {
    u.current = -1, v();
  }, [v]), J = ve(() => {
    const U = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), x = U == null ? void 0 : U[u.current];
    x == null || x.click();
  }, []), Z = ve((U) => {
    l.current = U;
  }, []), se = ve(() => {
    f.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), $ = ve(() => {
    p.current = window.setTimeout(() => h.current.focus(), 0);
  }, []), oe = ve(() => u.current, []);
  return W(
    () => () => {
      window.clearTimeout(f.current), window.clearTimeout(p.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: a,
    openDropdown: m,
    closeDropdown: b,
    toggleDropdown: C,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: oe,
    selectOption: w,
    selectFirstOption: _,
    selectActiveOption: E,
    selectNextOption: T,
    selectPreviousOption: A,
    resetSelectedOption: F,
    updateSelectedOptionIndex: L,
    listId: l.current,
    setListId: Z,
    clickSelectedOption: J,
    searchRef: d,
    focusSearchInput: se,
    targetRef: h,
    focusTarget: $
  };
}
const nC = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, oC = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": it(e),
    "--combobox-option-padding": Re(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : R(t),
    "--combobox-option-fz": it(e),
    "--combobox-option-padding": Re(e, "combobox-option-padding")
  }
});
function le(r) {
  const e = G("Combobox", nC, r), {
    classNames: t,
    styles: n,
    unstyled: o,
    children: i,
    store: s,
    vars: a,
    onOptionSubmit: c,
    onClose: l,
    size: u,
    dropdownPadding: d,
    resetSelectionOnOptionHover: h,
    __staticSelector: f,
    readOnly: p,
    ...g
  } = e, m = ii(), b = s || m, C = me({
    name: f || "Combobox",
    classes: Xe,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: a,
    varsResolver: oC
  }), v = () => {
    l == null || l(), b.closeDropdown();
  };
  return /* @__PURE__ */ y.jsx(
    $v,
    {
      value: {
        getStyles: C,
        store: b,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: h,
        readOnly: p
      },
      children: /* @__PURE__ */ y.jsx(
        lr,
        {
          opened: b.dropdownOpened,
          ...g,
          onClose: v,
          withRoles: !1,
          unstyled: o,
          children: i
        }
      )
    }
  );
}
const iC = (r) => r;
le.extend = iC;
le.classes = Xe;
le.displayName = "@mantine/core/Combobox";
le.Target = ed;
le.Dropdown = ta;
le.Options = ca;
le.Option = aa;
le.Search = la;
le.Empty = ra;
le.Chevron = ea;
le.Footer = oa;
le.Header = sa;
le.EventsTarget = Xu;
le.DropdownTarget = Ju;
le.Group = ia;
le.ClearButton = Qu;
le.HiddenInput = Zu;
var td = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const sC = td, rd = Ce(
  ({
    __staticSelector: r,
    __stylesApiProps: e,
    className: t,
    classNames: n,
    styles: o,
    unstyled: i,
    children: s,
    label: a,
    description: c,
    id: l,
    disabled: u,
    error: d,
    size: h,
    labelPosition: f = "left",
    bodyElement: p = "div",
    labelElement: g = "label",
    variant: m,
    style: b,
    vars: C,
    mod: v,
    ...w
  }, E) => {
    const T = me({
      name: r,
      props: e,
      className: t,
      style: b,
      classes: td,
      classNames: n,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ y.jsx(
      Q,
      {
        ...T("root"),
        ref: E,
        __vars: {
          "--label-fz": it(h),
          "--label-lh": Re(h, "label-lh")
        },
        mod: [{ "label-position": f }, v],
        variant: m,
        size: h,
        ...w,
        children: /* @__PURE__ */ y.jsxs(
          Q,
          {
            component: p,
            htmlFor: p === "label" ? l : void 0,
            ...T("body"),
            children: [
              s,
              /* @__PURE__ */ y.jsxs("div", { ...T("labelWrapper"), "data-disabled": u || void 0, children: [
                a && /* @__PURE__ */ y.jsx(
                  Q,
                  {
                    component: g,
                    htmlFor: g === "label" ? l : void 0,
                    ...T("label"),
                    "data-disabled": u || void 0,
                    children: a
                  }
                ),
                c && /* @__PURE__ */ y.jsx(Be.Description, { size: h, __inheritStyles: !1, ...T("description"), children: c }),
                d && typeof d != "boolean" && /* @__PURE__ */ y.jsx(Be.Error, { size: h, __inheritStyles: !1, ...T("error"), children: d })
              ] })
            ]
          }
        )
      }
    );
  }
);
rd.displayName = "@mantine/core/InlineInput";
const nd = Nr(null), aC = nd.Provider, od = () => ar(nd), [cC, lC] = Kl();
var id = { card: "m_26775b0a" };
const uC = {
  withBorder: !0
}, dC = (r, { radius: e }) => ({
  card: {
    "--card-radius": _t(e)
  }
}), ua = ce((r, e) => {
  const t = G("CheckboxCard", uC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    checked: l,
    mod: u,
    withBorder: d,
    value: h,
    onClick: f,
    ...p
  } = t, g = me({
    name: "CheckboxCard",
    classes: id,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: dC,
    rootSelector: "card"
  }), m = od(), b = typeof l == "boolean" ? l : (m == null ? void 0 : m.value.includes(h || "")) || !1;
  return /* @__PURE__ */ y.jsx(cC, { value: { checked: b }, children: /* @__PURE__ */ y.jsx(
    xr,
    {
      ref: e,
      mod: [{ "with-border": d, checked: b }, u],
      ...g("card"),
      ...p,
      role: "checkbox",
      "aria-checked": b,
      onClick: (C) => {
        f == null || f(C), m == null || m.onChange(h || "");
      }
    }
  ) });
});
ua.displayName = "@mantine/core/CheckboxCard";
ua.classes = id;
function hC({ children: r, role: e }) {
  const t = Qn();
  return t ? /* @__PURE__ */ y.jsx("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy, children: r }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: r });
}
const fC = {}, da = ce((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: i, wrapperProps: s, children: a, readOnly: c, ...l } = G("CheckboxGroup", fC, r), [u, d] = Ar({
    value: t,
    defaultValue: n,
    finalValue: [],
    onChange: o
  }), h = (f) => {
    const p = typeof f == "string" ? f : f.currentTarget.value;
    !c && d(
      u.includes(p) ? u.filter((g) => g !== p) : [...u, p]
    );
  };
  return /* @__PURE__ */ y.jsx(aC, { value: { value: u, onChange: h, size: i }, children: /* @__PURE__ */ y.jsx(
    Be.Wrapper,
    {
      size: i,
      ref: e,
      ...s,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ y.jsx(hC, { role: "group", children: a })
    }
  ) });
});
da.classes = Be.Wrapper.classes;
da.displayName = "@mantine/core/CheckboxGroup";
function ha({ size: r, style: e, ...t }) {
  const n = r !== void 0 ? { width: R(r), height: R(r), ...e } : e;
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: n,
      "aria-hidden": !0,
      ...t,
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
function sd({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ y.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 6",
      "aria-hidden": !0,
      ...e,
      children: /* @__PURE__ */ y.jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
    }
  ) : /* @__PURE__ */ y.jsx(ha, { ...e });
}
var ad = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const pC = {
  icon: sd
}, gC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: s }) => {
  const a = Or({ color: t || r.primaryColor, theme: r }), c = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    indicator: {
      "--checkbox-size": Re(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : _t(e),
      "--checkbox-color": i === "outline" ? c : nr(t, r),
      "--checkbox-icon-color": o ? nr(o, r) : iu(s, r) ? As({ color: t, theme: r, autoContrast: s }) : void 0
    }
  };
}, fa = ce((r, e) => {
  const t = G("CheckboxIndicator", pC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    icon: l,
    indeterminate: u,
    radius: d,
    color: h,
    iconColor: f,
    autoContrast: p,
    checked: g,
    mod: m,
    variant: b,
    disabled: C,
    ...v
  } = t, w = l, E = me({
    name: "CheckboxIndicator",
    classes: ad,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: gC,
    rootSelector: "indicator"
  }), T = lC(), A = typeof g == "boolean" || typeof u == "boolean" ? g || u : (T == null ? void 0 : T.checked) || !1;
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ref: e,
      ...E("indicator", { variant: b }),
      variant: b,
      mod: [{ checked: A, disabled: C }, m],
      ...v,
      children: /* @__PURE__ */ y.jsx(w, { indeterminate: u, ...E("icon") })
    }
  );
});
fa.displayName = "@mantine/core/CheckboxIndicator";
fa.classes = ad;
var cd = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const mC = {
  labelPosition: "right",
  icon: sd
}, yC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: s }) => {
  const a = Or({ color: t || r.primaryColor, theme: r }), c = a.isThemeColor && a.shade === void 0 ? `var(--mantine-color-${a.color}-outline)` : a.color;
  return {
    root: {
      "--checkbox-size": Re(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : _t(e),
      "--checkbox-color": i === "outline" ? c : nr(t, r),
      "--checkbox-icon-color": o ? nr(o, r) : iu(s, r) ? As({ color: t, theme: r, autoContrast: s }) : void 0
    }
  };
}, Mr = ce((r, e) => {
  const t = G("Checkbox", mC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    color: l,
    label: u,
    id: d,
    size: h,
    radius: f,
    wrapperProps: p,
    children: g,
    checked: m,
    labelPosition: b,
    description: C,
    error: v,
    disabled: w,
    variant: E,
    indeterminate: T,
    icon: A,
    rootRef: _,
    iconColor: L,
    onChange: F,
    autoContrast: J,
    mod: Z,
    ...se
  } = t, $ = od(), oe = h || ($ == null ? void 0 : $.size), U = A, x = me({
    name: "Checkbox",
    props: t,
    classes: cd,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: yC
  }), { styleProps: D, rest: q } = Wo(se), V = cr(d), de = $ ? {
    checked: $.value.includes(q.value),
    onChange: (pe) => {
      $.onChange(pe), F == null || F(pe);
    }
  } : {};
  return /* @__PURE__ */ y.jsx(
    rd,
    {
      ...x("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: V,
      size: oe,
      labelPosition: b,
      label: u,
      description: C,
      error: v,
      disabled: w,
      classNames: n,
      styles: s,
      unstyled: a,
      "data-checked": de.checked || m || void 0,
      variant: E,
      ref: _,
      mod: Z,
      ...D,
      ...p,
      children: /* @__PURE__ */ y.jsxs(Q, { ...x("inner"), mod: { "data-label-position": b }, children: [
        /* @__PURE__ */ y.jsx(
          Q,
          {
            component: "input",
            id: V,
            ref: e,
            checked: m,
            disabled: w,
            mod: { error: !!v, indeterminate: T },
            ...x("input", { focusable: !0, variant: E }),
            onChange: F,
            ...q,
            ...de,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ y.jsx(U, { indeterminate: T, ...x("icon") })
      ] })
    }
  );
});
Mr.classes = { ...cd, ...sC };
Mr.displayName = "@mantine/core/Checkbox";
Mr.Group = da;
Mr.Indicator = fa;
Mr.Card = ua;
function Hn(r) {
  return "group" in r;
}
function ld({
  options: r,
  search: e,
  limit: t
}) {
  const n = e.trim().toLowerCase(), o = [];
  for (let i = 0; i < r.length; i += 1) {
    const s = r[i];
    if (o.length === t)
      return o;
    Hn(s) && o.push({
      group: s.group,
      items: ld({
        options: s.items,
        search: e,
        limit: t - o.length
      })
    }), Hn(s) || s.label.toLowerCase().includes(n) && o.push(s);
  }
  return o;
}
function vC(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function ud(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Hn(t))
        ud(t.items, e);
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
function CC(r, e) {
  return Array.isArray(r) ? r.includes(e) : r === e;
}
function dd({
  data: r,
  withCheckIcon: e,
  value: t,
  checkIconPosition: n,
  unstyled: o,
  renderOption: i
}) {
  if (!Hn(r)) {
    const a = CC(t, r.value), c = e && a && /* @__PURE__ */ y.jsx(ha, { className: Xe.optionsDropdownCheckIcon }), l = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      n === "left" && c,
      /* @__PURE__ */ y.jsx("span", { children: r.label }),
      n === "right" && c
    ] });
    return /* @__PURE__ */ y.jsx(
      le.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: zt({ [Xe.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": a || void 0,
        "aria-selected": a,
        active: a,
        children: typeof i == "function" ? i({ option: r, checked: a }) : l
      }
    );
  }
  const s = r.items.map((a) => /* @__PURE__ */ y.jsx(
    dd,
    {
      data: a,
      value: t,
      unstyled: o,
      withCheckIcon: e,
      checkIconPosition: n,
      renderOption: i
    },
    a.value
  ));
  return /* @__PURE__ */ y.jsx(le.Group, { label: r.group, children: s });
}
function hd({
  data: r,
  hidden: e,
  hiddenWhenEmpty: t,
  filter: n,
  search: o,
  limit: i,
  maxDropdownHeight: s,
  withScrollArea: a = !0,
  filterOptions: c = !0,
  withCheckIcon: l = !1,
  value: u,
  checkIconPosition: d,
  nothingFoundMessage: h,
  unstyled: f,
  labelId: p,
  renderOption: g,
  scrollAreaProps: m,
  "aria-label": b
}) {
  ud(r);
  const v = typeof o == "string" ? (n || ld)({
    options: r,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : r, w = vC(v), E = v.map((T) => /* @__PURE__ */ y.jsx(
    dd,
    {
      data: T,
      withCheckIcon: l,
      value: u,
      checkIconPosition: d,
      unstyled: f,
      renderOption: g
    },
    Hn(T) ? T.group : T.value
  ));
  return /* @__PURE__ */ y.jsx(le.Dropdown, { hidden: e || t && w, children: /* @__PURE__ */ y.jsxs(le.Options, { labelledBy: p, "aria-label": b, children: [
    a ? /* @__PURE__ */ y.jsx(
      Vn.Autosize,
      {
        mah: s ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...m,
        children: E
      }
    ) : E,
    w && h && /* @__PURE__ */ y.jsx(le.Empty, { children: h })
  ] }) });
}
const bC = {}, pa = ce((r, e) => {
  const t = G("Autocomplete", bC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: s,
    dropdownOpened: a,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: d,
    onBlur: h,
    onClick: f,
    onChange: p,
    data: g,
    value: m,
    defaultValue: b,
    selectFirstOptionOnChange: C,
    onOptionSubmit: v,
    comboboxProps: w,
    readOnly: E,
    disabled: T,
    filter: A,
    limit: _,
    withScrollArea: L,
    maxDropdownHeight: F,
    size: J,
    id: Z,
    renderOption: se,
    autoComplete: $,
    scrollAreaProps: oe,
    ...U
  } = t, x = cr(Z), D = Yu(g), q = Zs(D), [V, de] = Ar({
    value: m,
    defaultValue: b,
    finalValue: "",
    onChange: p
  }), pe = ii({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), pe.resetSelectedOption();
    }
  }), { resolvedClassNames: ze, resolvedStyles: yt } = ou({
    props: t,
    styles: o,
    classNames: n
  });
  return W(() => {
    C && pe.selectFirstOption();
  }, [C, V]), /* @__PURE__ */ y.jsxs(
    le,
    {
      store: pe,
      __staticSelector: "Autocomplete",
      classNames: ze,
      styles: yt,
      unstyled: i,
      readOnly: E,
      onOptionSubmit: (ke) => {
        v == null || v(ke), de(q[ke].label), pe.closeDropdown();
      },
      size: J,
      ...w,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { autoComplete: $, children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            ref: e,
            ...U,
            size: J,
            __staticSelector: "Autocomplete",
            disabled: T,
            readOnly: E,
            value: V,
            onChange: (ke) => {
              de(ke.currentTarget.value), pe.openDropdown(), C && pe.selectFirstOption();
            },
            onFocus: (ke) => {
              pe.openDropdown(), d == null || d(ke);
            },
            onBlur: (ke) => {
              pe.closeDropdown(), h == null || h(ke);
            },
            onClick: (ke) => {
              pe.openDropdown(), f == null || f(ke);
            },
            classNames: ze,
            styles: yt,
            unstyled: i,
            id: x
          }
        ) }),
        /* @__PURE__ */ y.jsx(
          hd,
          {
            data: D,
            hidden: E || T,
            filter: A,
            search: V,
            limit: _,
            hiddenWhenEmpty: !0,
            withScrollArea: L,
            maxDropdownHeight: F,
            unstyled: i,
            labelId: U.label ? `${x}-label` : void 0,
            "aria-label": U.label ? void 0 : U["aria-label"],
            renderOption: se,
            scrollAreaProps: oe
          }
        )
      ]
    }
  );
});
pa.classes = { ...Yt.classes, ...le.classes };
pa.displayName = "@mantine/core/Autocomplete";
var si = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const qc = {
  orientation: "horizontal"
}, wC = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": R(e) }
}), ga = ce((r, e) => {
  const t = G("ButtonGroup", qc, r), {
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: d,
    mod: h,
    ...f
  } = G("ButtonGroup", qc, r), p = me({
    name: "ButtonGroup",
    props: t,
    classes: si,
    className: n,
    style: o,
    classNames: i,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: wC,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    Q,
    {
      ...p("group"),
      ref: e,
      variant: d,
      mod: [{ "data-orientation": c }, h],
      role: "group",
      ...f
    }
  );
});
ga.classes = si;
ga.displayName = "@mantine/core/ButtonGroup";
const EC = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${R(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, SC = {}, TC = (r, { radius: e, color: t, gradient: n, variant: o, size: i, justify: s, autoContrast: a }) => {
  const c = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    gradient: n,
    variant: o || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--button-justify": s,
      "--button-height": Re(i, "button-height"),
      "--button-padding-x": Re(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? it(i.replace("compact-", "")) : it(i),
      "--button-radius": e === void 0 ? void 0 : _t(e),
      "--button-bg": t || o ? c.background : void 0,
      "--button-hover": t || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": t || o ? c.border : void 0,
      "--button-hover-color": t || o ? c.hoverColor : void 0
    }
  };
}, Xn = Vt((r, e) => {
  const t = G("Button", SC, r), {
    style: n,
    vars: o,
    className: i,
    color: s,
    disabled: a,
    children: c,
    leftSection: l,
    rightSection: u,
    fullWidth: d,
    variant: h,
    radius: f,
    loading: p,
    loaderProps: g,
    gradient: m,
    classNames: b,
    styles: C,
    unstyled: v,
    "data-disabled": w,
    autoContrast: E,
    mod: T,
    ...A
  } = t, _ = me({
    name: "Button",
    props: t,
    classes: si,
    className: i,
    style: n,
    classNames: b,
    styles: C,
    unstyled: v,
    vars: o,
    varsResolver: TC
  }), L = !!l, F = !!u;
  return /* @__PURE__ */ y.jsxs(
    xr,
    {
      ref: e,
      ..._("root", { active: !a && !p && !w }),
      unstyled: v,
      variant: h,
      disabled: a || p,
      mod: [
        {
          disabled: a || w,
          loading: p,
          block: d,
          "with-left-section": L,
          "with-right-section": F
        },
        T
      ],
      ...A,
      children: [
        /* @__PURE__ */ y.jsx(Zo, { mounted: !!p, transition: EC, duration: 150, children: (J) => /* @__PURE__ */ y.jsx(Q, { component: "span", ..._("loader", { style: J }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(
          Yn,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("span", { ..._("inner"), children: [
          l && /* @__PURE__ */ y.jsx(Q, { component: "span", ..._("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ y.jsx(Q, { component: "span", mod: { loading: p }, ..._("label"), children: c }),
          u && /* @__PURE__ */ y.jsx(Q, { component: "span", ..._("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
Xn.classes = si;
Xn.displayName = "@mantine/core/Button";
Xn.Group = ga;
var fd = { root: "m_4451eb3a" };
const _C = {}, ma = Vt((r, e) => {
  const t = G("Center", _C, r), { classNames: n, className: o, style: i, styles: s, unstyled: a, vars: c, inline: l, mod: u, ...d } = t, h = me({
    name: "Center",
    props: t,
    classes: fd,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, mod: [{ inline: l }, u], ...h("root"), ...d });
});
ma.classes = fd;
ma.displayName = "@mantine/core/Center";
var pd = { root: "m_7485cace" };
const IC = {}, AC = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Re(e, "container-size")
  }
}), ya = ce((r, e) => {
  const t = G("Container", IC, r), { classNames: n, className: o, style: i, styles: s, unstyled: a, vars: c, fluid: l, mod: u, ...d } = t, h = me({
    name: "Container",
    classes: pd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: AC
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, mod: [{ fluid: l }, u], ...h("root"), ...d });
});
ya.classes = pd;
ya.displayName = "@mantine/core/Container";
const RC = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, va = ce((r, e) => {
  const t = G("Select", RC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: s,
    dropdownOpened: a,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: d,
    onBlur: h,
    onClick: f,
    onChange: p,
    data: g,
    value: m,
    defaultValue: b,
    selectFirstOptionOnChange: C,
    onOptionSubmit: v,
    comboboxProps: w,
    readOnly: E,
    disabled: T,
    filter: A,
    limit: _,
    withScrollArea: L,
    maxDropdownHeight: F,
    size: J,
    searchable: Z,
    rightSection: se,
    checkIconPosition: $,
    withCheckIcon: oe,
    nothingFoundMessage: U,
    name: x,
    form: D,
    searchValue: q,
    defaultSearchValue: V,
    onSearchChange: de,
    allowDeselect: pe,
    error: ze,
    rightSectionPointerEvents: yt,
    id: ke,
    clearable: dr,
    clearButtonProps: Qt,
    hiddenInputProps: hr,
    renderOption: fr,
    onClear: pr,
    autoComplete: hn,
    scrollAreaProps: fn,
    ...Mt
  } = t, Te = ho(() => Yu(g), [g]), Lt = ho(() => Zs(Te), [Te]), Dr = cr(ke), [je, gr, Ur] = Ar({
    value: m,
    defaultValue: b,
    finalValue: null,
    onChange: p
  }), $e = typeof je == "string" ? Lt[je] : void 0, Dt = Xp($e), [Hr, lt] = Ar({
    value: q,
    defaultValue: V,
    finalValue: $e ? $e.label : "",
    onChange: de
  }), vt = ii({
    opened: a,
    defaultOpened: c,
    onDropdownOpen: () => {
      u == null || u(), vt.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      l == null || l(), vt.resetSelectedOption();
    }
  }), { resolvedClassNames: Ra, resolvedStyles: ka } = ou({
    props: t,
    styles: o,
    classNames: n
  });
  W(() => {
    C && vt.selectFirstOption();
  }, [C, je]), W(() => {
    m === null && lt(""), typeof m == "string" && $e && ((Dt == null ? void 0 : Dt.value) !== $e.value || (Dt == null ? void 0 : Dt.label) !== $e.label) && lt($e.label);
  }, [m, $e]);
  const Na = dr && !!je && !T && !E && /* @__PURE__ */ y.jsx(
    le.ClearButton,
    {
      size: J,
      ...Qt,
      onClear: () => {
        gr(null, null), lt(""), pr == null || pr();
      }
    }
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      le,
      {
        store: vt,
        __staticSelector: "Select",
        classNames: Ra,
        styles: ka,
        unstyled: i,
        readOnly: E,
        onOptionSubmit: (ut) => {
          v == null || v(ut);
          const Ut = pe && Lt[ut].value === je ? null : Lt[ut], hi = Ut ? Ut.value : null;
          hi !== je && gr(hi, Ut), !Ur && lt(typeof hi == "string" && (Ut == null ? void 0 : Ut.label) || ""), vt.closeDropdown();
        },
        size: J,
        ...w,
        children: [
          /* @__PURE__ */ y.jsx(le.Target, { targetType: Z ? "input" : "button", autoComplete: hn, children: /* @__PURE__ */ y.jsx(
            Yt,
            {
              id: Dr,
              ref: e,
              rightSection: se || Na || /* @__PURE__ */ y.jsx(le.Chevron, { size: J, error: ze, unstyled: i }),
              rightSectionPointerEvents: yt || (Na ? "all" : "none"),
              ...Mt,
              size: J,
              __staticSelector: "Select",
              disabled: T,
              readOnly: E || !Z,
              value: Hr,
              onChange: (ut) => {
                lt(ut.currentTarget.value), vt.openDropdown(), C && vt.selectFirstOption();
              },
              onFocus: (ut) => {
                Z && vt.openDropdown(), d == null || d(ut);
              },
              onBlur: (ut) => {
                var Ut;
                Z && vt.closeDropdown(), lt(je != null && ((Ut = Lt[je]) == null ? void 0 : Ut.label) || ""), h == null || h(ut);
              },
              onClick: (ut) => {
                Z ? vt.openDropdown() : vt.toggleDropdown(), f == null || f(ut);
              },
              classNames: Ra,
              styles: ka,
              unstyled: i,
              pointer: !Z,
              error: ze
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            hd,
            {
              data: Te,
              hidden: E || T,
              filter: A,
              search: Hr,
              limit: _,
              hiddenWhenEmpty: !U,
              withScrollArea: L,
              maxDropdownHeight: F,
              filterOptions: Z && ($e == null ? void 0 : $e.label) !== Hr,
              value: je,
              checkIconPosition: $,
              withCheckIcon: oe,
              nothingFoundMessage: U,
              unstyled: i,
              labelId: Mt.label ? `${Dr}-label` : void 0,
              "aria-label": Mt.label ? void 0 : Mt["aria-label"],
              renderOption: fr,
              scrollAreaProps: fn
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y.jsx(
      le.HiddenInput,
      {
        value: je,
        name: x,
        form: D,
        disabled: T,
        ...hr
      }
    )
  ] });
});
va.classes = { ...Yt.classes, ...le.classes };
va.displayName = "@mantine/core/Select";
const kC = {}, gd = ce((r, e) => {
  const { w: t, h: n, miw: o, mih: i, ...s } = G("Space", kC, r);
  return /* @__PURE__ */ y.jsx(Q, { ref: e, ...s, w: t, miw: o ?? t, h: n, mih: i ?? n });
});
gd.displayName = "@mantine/core/Space";
var md = { root: "m_6d731127" };
const NC = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, PC = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Es(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), Ca = ce((r, e) => {
  const t = G("Stack", NC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    vars: c,
    align: l,
    justify: u,
    gap: d,
    variant: h,
    ...f
  } = t, p = me({
    name: "Stack",
    props: t,
    classes: md,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: c,
    varsResolver: PC
  });
  return /* @__PURE__ */ y.jsx(Q, { ref: e, ...p("root"), variant: h, ...f });
});
Ca.classes = md;
Ca.displayName = "@mantine/core/Stack";
const OC = {}, Tr = ce((r, e) => {
  const t = G("TextInput", OC, r);
  return /* @__PURE__ */ y.jsx(Yt, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Tr.classes = Yt.classes;
Tr.displayName = "@mantine/core/TextInput";
const xC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function MC(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return xC.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: R(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var yd = { root: "m_8a5d1357" };
const LC = {
  order: 1
}, DC = (r, { order: e, size: t, lineClamp: n, textWrap: o }) => {
  const i = MC(e, t);
  return {
    root: {
      "--title-fw": i.fontWeight,
      "--title-lh": i.lineHeight,
      "--title-fz": i.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, Mo = ce((r, e) => {
  const t = G("Title", LC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: s,
    unstyled: a,
    order: c,
    vars: l,
    size: u,
    variant: d,
    lineClamp: h,
    textWrap: f,
    mod: p,
    ...g
  } = t, m = me({
    name: "Title",
    props: t,
    classes: yd,
    className: o,
    style: i,
    classNames: n,
    styles: s,
    unstyled: a,
    vars: l,
    varsResolver: DC
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ y.jsx(
    Q,
    {
      ...m("root"),
      component: `h${c}`,
      variant: d,
      ref: e,
      mod: [{ order: c, "data-line-clamp": typeof h == "number" }, p],
      size: u,
      ...g
    }
  ) : null;
});
Mo.classes = yd;
Mo.displayName = "@mantine/core/Title";
var vd = { exports: {} }, UC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", HC = UC, FC = HC;
function Cd() {
}
function bd() {
}
bd.resetWarningCache = Cd;
var BC = function() {
  function r(n, o, i, s, a, c) {
    if (c !== FC) {
      var l = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw l.name = "Invariant Violation", l;
    }
  }
  r.isRequired = r;
  function e() {
    return r;
  }
  var t = {
    array: r,
    bigint: r,
    bool: r,
    func: r,
    number: r,
    object: r,
    string: r,
    symbol: r,
    any: r,
    arrayOf: e,
    element: r,
    elementType: r,
    instanceOf: e,
    node: r,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: bd,
    resetWarningCache: Cd
  };
  return t.PropTypes = t, t;
};
vd.exports = BC();
var jC = vd.exports;
const mr = /* @__PURE__ */ nh(jC);
var $C = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, KC = Object.defineProperty, qC = Object.defineProperties, zC = Object.getOwnPropertyDescriptors, Lo = Object.getOwnPropertySymbols, wd = Object.prototype.hasOwnProperty, Ed = Object.prototype.propertyIsEnumerable, zc = (r, e, t) => e in r ? KC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Gc = (r, e) => {
  for (var t in e || (e = {}))
    wd.call(e, t) && zc(r, t, e[t]);
  if (Lo)
    for (var t of Lo(e))
      Ed.call(e, t) && zc(r, t, e[t]);
  return r;
}, GC = (r, e) => qC(r, zC(e)), VC = (r, e) => {
  var t = {};
  for (var n in r)
    wd.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Lo)
    for (var n of Lo(r))
      e.indexOf(n) < 0 && Ed.call(r, n) && (t[n] = r[n]);
  return t;
}, ba = (r, e, t) => {
  const n = Ce(
    (o, i) => {
      var s = o, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = VC(s, ["color", "size", "stroke", "children"]);
      return Oi(
        "svg",
        Gc(GC(Gc({
          ref: i
        }, $C), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${r}`
        }), d),
        [...t.map(([h, f]) => Oi(h, f)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: mr.string,
    size: mr.oneOfType([mr.string, mr.number]),
    stroke: mr.oneOfType([mr.string, mr.number])
  }, n.displayName = `${e}`, n;
}, WC = ba("arrow-down", "IconArrowDown", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M18 13l-6 6", key: "svg-1" }],
  ["path", { d: "M6 13l6 6", key: "svg-2" }]
]), YC = ba("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), QC = ba("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function JC({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ y.jsx(QC, { ...e }) : /* @__PURE__ */ y.jsx(YC, { ...e });
}
const XC = {
  components: {
    Checkbox: Mr.extend({
      defaultProps: {
        icon: JC,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, Vc = {
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
}, ZC = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Vc.authorities.signUpSignIn.authority,
    knownAuthorities: [Vc.authorityDomain],
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
            case Ee.Error:
              console.error(e);
              return;
            case Ee.Info:
              console.info(e);
              return;
            case Ee.Verbose:
              console.debug(e);
              return;
            case Ee.Warning:
              console.warn(e);
              return;
            default:
              return;
          }
      }
    }
  }
};
class eb {
  constructor(e = {}) {
    Ke(this, "baseUrl", "https://api.bsdd.buildingsmart.org/");
    Ke(this, "securityData", null);
    Ke(this, "securityWorker");
    Ke(this, "abortControllers", /* @__PURE__ */ new Map());
    Ke(this, "customFetch", (...e) => fetch(...e));
    Ke(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    Ke(this, "setSecurityData", (e) => {
      this.securityData = e;
    });
    Ke(this, "contentFormatters", {
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
    Ke(this, "createAbortSignal", (e) => {
      if (this.abortControllers.has(e)) {
        const n = this.abortControllers.get(e);
        return n ? n.signal : void 0;
      }
      const t = new AbortController();
      return this.abortControllers.set(e, t), t.signal;
    });
    Ke(this, "abortRequest", (e) => {
      const t = this.abortControllers.get(e);
      t && (t.abort(), this.abortControllers.delete(e));
    });
    Ke(this, "request", async ({
      body: e,
      secure: t,
      path: n,
      type: o,
      query: i,
      format: s,
      baseUrl: a,
      cancelToken: c,
      ...l
    }) => {
      const u = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, d = this.mergeRequestParams(l, u), h = i && this.toQueryString(i), f = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], p = s || d.format;
      return this.customFetch(`${a || this.baseUrl || ""}${n}${h ? `?${h}` : ""}`, {
        ...d,
        headers: {
          ...d.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (c ? this.createAbortSignal(c) : d.signal) || null,
        body: typeof e > "u" || e === null ? null : f(e)
      }).then(async (g) => {
        const m = g;
        m.data = null, m.error = null;
        const b = p ? await g[p]().then((C) => (m.ok ? m.data = C : m.error = C, m)).catch((C) => (m.error = C, m)) : m;
        if (c && this.abortControllers.delete(c), !g.ok)
          throw b;
        return b;
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
class tb extends eb {
  constructor() {
    super(...arguments);
    Ke(this, "api", {
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
      dictionaryV1Update: (t, n, o, i, s = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${n}/${o}`,
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
      dictionaryV1Delete: (t, n, o, i = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${n}/${o}`,
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
      domainV3Update: (t, n, o, i, s = {}) => this.request({
        path: `/api/Domain/v3/${t}/${n}/${o}`,
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
      domainV3Delete: (t, n, o, i = {}) => this.request({
        path: `/api/Domain/v3/${t}/${n}/${o}`,
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
class Fn extends tb {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const Sd = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, rb = "production", Zn = xh, qe = Pn;
function nb(r) {
  if (!r)
    return { type: void 0, predefinedType: void 0 };
  const e = r.length - [...r].reverse().findIndex((o) => o === o.toLowerCase()), [t, n] = [
    r.slice(0, e),
    r.slice(e)
  ].map((o) => o || void 0);
  return { type: t, predefinedType: n };
}
function Oe(r) {
  return `Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
var ob = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Wc = ob, _i = () => Math.random().toString(36).substring(7).split("").join("."), ib = {
  INIT: `@@redux/INIT${_i()}`,
  REPLACE: `@@redux/REPLACE${_i()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_i()}`
}, Do = ib;
function wa(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function Td(r, e, t) {
  if (typeof r != "function")
    throw new Error(Oe(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(Oe(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(Oe(1));
    return t(Td)(r, e);
  }
  let n = r, o = e, i = /* @__PURE__ */ new Map(), s = i, a = 0, c = !1;
  function l() {
    s === i && (s = /* @__PURE__ */ new Map(), i.forEach((m, b) => {
      s.set(b, m);
    }));
  }
  function u() {
    if (c)
      throw new Error(Oe(3));
    return o;
  }
  function d(m) {
    if (typeof m != "function")
      throw new Error(Oe(4));
    if (c)
      throw new Error(Oe(5));
    let b = !0;
    l();
    const C = a++;
    return s.set(C, m), function() {
      if (b) {
        if (c)
          throw new Error(Oe(6));
        b = !1, l(), s.delete(C), i = null;
      }
    };
  }
  function h(m) {
    if (!wa(m))
      throw new Error(Oe(7));
    if (typeof m.type > "u")
      throw new Error(Oe(8));
    if (typeof m.type != "string")
      throw new Error(Oe(17));
    if (c)
      throw new Error(Oe(9));
    try {
      c = !0, o = n(o, m);
    } finally {
      c = !1;
    }
    return (i = s).forEach((C) => {
      C();
    }), m;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(Oe(10));
    n = m, h({
      type: Do.REPLACE
    });
  }
  function p() {
    const m = d;
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
          throw new Error(Oe(11));
        function C() {
          const w = b;
          w.next && w.next(u());
        }
        return C(), {
          unsubscribe: m(C)
        };
      },
      [Wc]() {
        return this;
      }
    };
  }
  return h({
    type: Do.INIT
  }), {
    dispatch: h,
    subscribe: d,
    getState: u,
    replaceReducer: f,
    [Wc]: p
  };
}
function sb(r) {
  Object.keys(r).forEach((e) => {
    const t = r[e];
    if (typeof t(void 0, {
      type: Do.INIT
    }) > "u")
      throw new Error(Oe(12));
    if (typeof t(void 0, {
      type: Do.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Oe(13));
  });
}
function ab(r) {
  const e = Object.keys(r), t = {};
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    typeof r[s] == "function" && (t[s] = r[s]);
  }
  const n = Object.keys(t);
  let o;
  try {
    sb(t);
  } catch (i) {
    o = i;
  }
  return function(s = {}, a) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < n.length; u++) {
      const d = n[u], h = t[d], f = s[d], p = h(f, a);
      if (typeof p > "u")
        throw a && a.type, new Error(Oe(14));
      l[d] = p, c = c || p !== f;
    }
    return c = c || n.length !== Object.keys(s).length, c ? l : s;
  };
}
function Uo(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function cb(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let i = () => {
      throw new Error(Oe(15));
    };
    const s = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, a = r.map((c) => c(s));
    return i = Uo(...a)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function lb(r) {
  return wa(r) && "type" in r && typeof r.type == "string";
}
var _d = Symbol.for("immer-nothing"), Yc = Symbol.for("immer-draftable"), at = Symbol.for("immer-state");
function bt(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var sn = Object.getPrototypeOf;
function sr(r) {
  return !!r && !!r[at];
}
function qt(r) {
  var e;
  return r ? Id(r) || Array.isArray(r) || !!r[Yc] || !!((e = r.constructor) != null && e[Yc]) || ci(r) || li(r) : !1;
}
var ub = Object.prototype.constructor.toString();
function Id(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = sn(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === ub;
}
function Ho(r, e) {
  ai(r) === 0 ? Reflect.ownKeys(r).forEach((t) => {
    e(t, r[t], r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function ai(r) {
  const e = r[at];
  return e ? e.type_ : Array.isArray(r) ? 1 : ci(r) ? 2 : li(r) ? 3 : 0;
}
function ns(r, e) {
  return ai(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Ad(r, e, t) {
  const n = ai(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function db(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function ci(r) {
  return r instanceof Map;
}
function li(r) {
  return r instanceof Set;
}
function vr(r) {
  return r.copy_ || r.base_;
}
function os(r, e) {
  if (ci(r))
    return new Map(r);
  if (li(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  const t = Id(r);
  if (e === !0 || e === "class_only" && !t) {
    const n = Object.getOwnPropertyDescriptors(r);
    delete n[at];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const s = o[i], a = n[s];
      a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: a.enumerable,
        value: r[s]
      });
    }
    return Object.create(sn(r), n);
  } else {
    const n = sn(r);
    if (n !== null && t)
      return { ...r };
    const o = Object.create(n);
    return Object.assign(o, r);
  }
}
function Ea(r, e = !1) {
  return ui(r) || sr(r) || !qt(r) || (ai(r) > 1 && (r.set = r.add = r.clear = r.delete = hb), Object.freeze(r), e && Object.entries(r).forEach(([t, n]) => Ea(n, !0))), r;
}
function hb() {
  bt(2);
}
function ui(r) {
  return Object.isFrozen(r);
}
var fb = {};
function kr(r) {
  const e = fb[r];
  return e || bt(0, r), e;
}
var Bn;
function Rd() {
  return Bn;
}
function pb(r, e) {
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
function Qc(r, e) {
  e && (kr("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function is(r) {
  ss(r), r.drafts_.forEach(gb), r.drafts_ = null;
}
function ss(r) {
  r === Bn && (Bn = r.parent_);
}
function Jc(r) {
  return Bn = pb(Bn, r);
}
function gb(r) {
  const e = r[at];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Xc(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[at].modified_ && (is(e), bt(4)), qt(r) && (r = Fo(e, r), e.parent_ || Bo(e, r)), e.patches_ && kr("Patches").generateReplacementPatches_(
    t[at].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Fo(e, t, []), is(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== _d ? r : void 0;
}
function Fo(r, e, t) {
  if (ui(e))
    return e;
  const n = e[at];
  if (!n)
    return Ho(
      e,
      (o, i) => Zc(r, n, e, o, i, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return Bo(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, s = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), s = !0), Ho(
      i,
      (a, c) => Zc(r, n, o, a, c, t, s)
    ), Bo(r, o, !1), t && r.patches_ && kr("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function Zc(r, e, t, n, o, i, s) {
  if (sr(o)) {
    const a = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ns(e.assigned_, n) ? i.concat(n) : void 0, c = Fo(r, o, a);
    if (Ad(t, n, c), sr(c))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    s && t.add(o);
  if (qt(o) && !ui(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Fo(r, o), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(t, n) && Bo(r, o);
  }
}
function Bo(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Ea(e, t);
}
function mb(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Rd(),
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
  let o = n, i = Sa;
  t && (o = [n], i = jn);
  const { revoke: s, proxy: a } = Proxy.revocable(o, i);
  return n.draft_ = a, n.revoke_ = s, a;
}
var Sa = {
  get(r, e) {
    if (e === at)
      return r;
    const t = vr(r);
    if (!ns(t, e))
      return yb(r, t, e);
    const n = t[e];
    return r.finalized_ || !qt(n) ? n : n === Ii(r.base_, e) ? (Ai(r), r.copy_[e] = cs(n, r)) : n;
  },
  has(r, e) {
    return e in vr(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(vr(r));
  },
  set(r, e, t) {
    const n = kd(vr(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = Ii(vr(r), e), i = o == null ? void 0 : o[at];
      if (i && i.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (db(t, o) && (t !== void 0 || ns(r.base_, e)))
        return !0;
      Ai(r), as(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return Ii(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Ai(r), as(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = vr(r), n = Reflect.getOwnPropertyDescriptor(t, e);
    return n && {
      writable: !0,
      configurable: r.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    bt(11);
  },
  getPrototypeOf(r) {
    return sn(r.base_);
  },
  setPrototypeOf() {
    bt(12);
  }
}, jn = {};
Ho(Sa, (r, e) => {
  jn[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
jn.deleteProperty = function(r, e) {
  return jn.set.call(this, r, e, void 0);
};
jn.set = function(r, e, t) {
  return Sa.set.call(this, r[0], e, t, r[0]);
};
function Ii(r, e) {
  const t = r[at];
  return (t ? vr(t) : r)[e];
}
function yb(r, e, t) {
  var o;
  const n = kd(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function kd(r, e) {
  if (!(e in r))
    return;
  let t = sn(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = sn(t);
  }
}
function as(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && as(r.parent_));
}
function Ai(r) {
  r.copy_ || (r.copy_ = os(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var vb = class {
  constructor(r) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
      if (typeof e == "function" && typeof t != "function") {
        const i = t;
        t = e;
        const s = this;
        return function(c = i, ...l) {
          return s.produce(c, (u) => t.call(this, u, ...l));
        };
      }
      typeof t != "function" && bt(6), n !== void 0 && typeof n != "function" && bt(7);
      let o;
      if (qt(e)) {
        const i = Jc(this), s = cs(e, void 0);
        let a = !0;
        try {
          o = t(s), a = !1;
        } finally {
          a ? is(i) : ss(i);
        }
        return Qc(i, n), Xc(o, i);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === _d && (o = void 0), this.autoFreeze_ && Ea(o, !0), n) {
          const i = [], s = [];
          kr("Patches").generateReplacementPatches_(e, o, i, s), n(i, s);
        }
        return o;
      } else
        bt(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (s, ...a) => this.produceWithPatches(s, (c) => e(c, ...a));
      let n, o;
      return [this.produce(e, t, (s, a) => {
        n = s, o = a;
      }), n, o];
    }, typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze), typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    qt(r) || bt(8), sr(r) && (r = Nd(r));
    const e = Jc(this), t = cs(r, void 0);
    return t[at].isManual_ = !0, ss(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[at];
    (!t || !t.isManual_) && bt(9);
    const { scope_: n } = t;
    return Qc(n, e), Xc(void 0, n);
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
    const n = kr("Patches").applyPatches_;
    return sr(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function cs(r, e) {
  const t = ci(r) ? kr("MapSet").proxyMap_(r, e) : li(r) ? kr("MapSet").proxySet_(r, e) : mb(r, e);
  return (e ? e.scope_ : Rd()).drafts_.push(t), t;
}
function Nd(r) {
  return sr(r) || bt(10, r), Pd(r);
}
function Pd(r) {
  if (!qt(r) || ui(r))
    return r;
  const e = r[at];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = os(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = os(r, !0);
  return Ho(t, (n, o) => {
    Ad(t, n, Pd(o));
  }), e && (e.finalized_ = !1), t;
}
var ct = new vb(), Od = ct.produce;
ct.produceWithPatches.bind(
  ct
);
ct.setAutoFreeze.bind(ct);
ct.setUseStrictShallowCopy.bind(ct);
ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);
function Cb(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function bb(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function wb(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var el = (r) => Array.isArray(r) ? r : [r];
function Eb(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return wb(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function Sb(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var Tb = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, _b = typeof WeakRef < "u" ? WeakRef : Tb, Ib = 0, tl = 1;
function ao() {
  return {
    s: Ib,
    v: void 0,
    o: null,
    p: null
  };
}
function Ta(r, e = {}) {
  let t = ao();
  const { resultEqualityCheck: n } = e;
  let o, i = 0;
  function s() {
    var d;
    let a = t;
    const { length: c } = arguments;
    for (let h = 0, f = c; h < f; h++) {
      const p = arguments[h];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = a.o;
        g === null && (a.o = g = /* @__PURE__ */ new WeakMap());
        const m = g.get(p);
        m === void 0 ? (a = ao(), g.set(p, a)) : a = m;
      } else {
        let g = a.p;
        g === null && (a.p = g = /* @__PURE__ */ new Map());
        const m = g.get(p);
        m === void 0 ? (a = ao(), g.set(p, a)) : a = m;
      }
    }
    const l = a;
    let u;
    if (a.s === tl)
      u = a.v;
    else if (u = r.apply(null, arguments), i++, n) {
      const h = ((d = o == null ? void 0 : o.deref) == null ? void 0 : d.call(o)) ?? o;
      h != null && n(h, u) && (u = h, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new _b(u) : u;
    }
    return l.s = tl, l.v = u, u;
  }
  return s.clearCache = () => {
    t = ao(), s.resetResultsCount();
  }, s.resultsCount = () => i, s.resetResultsCount = () => {
    i = 0;
  }, s;
}
function xd(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let i = 0, s = 0, a, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), Cb(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...t,
      ...c
    }, {
      memoize: d,
      memoizeOptions: h = [],
      argsMemoize: f = Ta,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, m = el(h), b = el(p), C = Eb(o), v = d(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), w = f(function() {
      s++;
      const T = Sb(
        C,
        arguments
      );
      return a = v.apply(null, T), a;
    }, ...b);
    return Object.assign(w, {
      resultFunc: l,
      memoizedResultFunc: v,
      dependencies: C,
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
      argsMemoize: f
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ur = /* @__PURE__ */ xd(Ta), Ab = Object.assign(
  (r, e = ur) => {
    bb(
      r,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof r}`
    );
    const t = Object.keys(r), n = t.map(
      (i) => r[i]
    );
    return e(
      n,
      (...i) => i.reduce((s, a, c) => (s[t[c]] = a, s), {})
    );
  },
  { withTypes: () => Ab }
);
function Md(r) {
  return ({ dispatch: t, getState: n }) => (o) => (i) => typeof i == "function" ? i(t, n, r) : o(i);
}
var Rb = Md(), kb = Md, Nb = (...r) => {
  const e = xd(...r), t = Object.assign((...n) => {
    const o = e(...n), i = (s, ...a) => o(sr(s) ? Nd(s) : s, ...a);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => t
  });
  return t;
};
Nb(Ta);
var Pb = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Uo : Uo.apply(null, arguments);
}, Ob = (r) => r && typeof r.match == "function";
function Pt(r, e) {
  function t(...n) {
    if (e) {
      let o = e(...n);
      if (!o)
        throw new Error(Je(0));
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => lb(n) && n.type === r, t;
}
var Ld = class wn extends Array {
  constructor(...e) {
    super(...e), Object.setPrototypeOf(this, wn.prototype);
  }
  static get [Symbol.species]() {
    return wn;
  }
  concat(...e) {
    return super.concat.apply(this, e);
  }
  prepend(...e) {
    return e.length === 1 && Array.isArray(e[0]) ? new wn(...e[0].concat(this)) : new wn(...e.concat(this));
  }
};
function rl(r) {
  return qt(r) ? Od(r, () => {
  }) : r;
}
function nl(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(Je(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function xb(r) {
  return typeof r == "boolean";
}
var Mb = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = e ?? {};
  let s = new Ld();
  return t && (xb(t) ? s.push(Rb) : s.push(kb(t.extraArgument))), s;
}, Lb = "RTK_autoBatch", Dd = (r) => (e) => {
  setTimeout(e, r);
}, Db = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Dd(10), Ub = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, i = !1, s = !1;
  const a = /* @__PURE__ */ new Set(), c = r.type === "tick" ? queueMicrotask : r.type === "raf" ? Db : r.type === "callback" ? r.queueNotification : Dd(r.timeout), l = () => {
    s = !1, i && (i = !1, a.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => o && u(), h = n.subscribe(d);
      return a.add(u), () => {
        h(), a.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var d;
      try {
        return o = !((d = u == null ? void 0 : u.meta) != null && d[Lb]), i = !o, i && (s || (s = !0, c(l))), n.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Hb = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Ld(r);
  return n && o.push(Ub(typeof n == "object" ? n : void 0)), o;
}, Fb = !0;
function Bb(r) {
  const e = Mb(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: s = void 0
  } = r || {};
  let a;
  if (typeof t == "function")
    a = t;
  else if (wa(t))
    a = ab(t);
  else
    throw new Error(Je(1));
  let c;
  typeof n == "function" ? c = n(e) : c = e();
  let l = Uo;
  o && (l = Pb({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Fb,
    ...typeof o == "object" && o
  }));
  const u = cb(...c), d = Hb(u);
  let h = typeof s == "function" ? s(d) : d();
  const f = l(...h);
  return Td(a, i, f);
}
function Ud(r) {
  const e = {}, t = [];
  let n;
  const o = {
    addCase(i, s) {
      const a = typeof i == "string" ? i : i.type;
      if (!a)
        throw new Error(Je(28));
      if (a in e)
        throw new Error(Je(29));
      return e[a] = s, o;
    },
    addMatcher(i, s) {
      return t.push({
        matcher: i,
        reducer: s
      }), o;
    },
    addDefaultCase(i) {
      return n = i, o;
    }
  };
  return r(o), [e, t, n];
}
function jb(r) {
  return typeof r == "function";
}
function $b(r, e) {
  let [t, n, o] = Ud(e), i;
  if (jb(r))
    i = () => rl(r());
  else {
    const a = rl(r);
    i = () => a;
  }
  function s(a = i(), c) {
    let l = [t[c.type], ...n.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, d) => {
      if (d)
        if (sr(u)) {
          const f = d(u, c);
          return f === void 0 ? u : f;
        } else {
          if (qt(u))
            return Od(u, (h) => d(h, c));
          {
            const h = d(u, c);
            if (h === void 0) {
              if (u === null)
                return u;
              throw new Error(Je(9));
            }
            return h;
          }
        }
      return u;
    }, a);
  }
  return s.getInitialState = i, s;
}
var Kb = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Hd = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Kb[Math.random() * 64 | 0];
  return e;
}, qb = (r, e) => Ob(r) ? r.match(e) : r(e);
function zb(...r) {
  return (e) => r.some((t) => qb(t, e));
}
var Gb = ["name", "message", "stack", "code"], Ri = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, ol = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, Vb = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of Gb)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, Lr = /* @__PURE__ */ (() => {
  function r(e, t, n) {
    const o = Pt(e + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = Pt(e + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), s = Pt(e + "/rejected", (c, l, u, d, h) => ({
      payload: d,
      error: (n && n.serializeError || Vb)(c || "Rejected"),
      meta: {
        ...h || {},
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
        const h = n != null && n.idGenerator ? n.idGenerator(c) : Hd(), f = new AbortController();
        let p, g;
        function m(C) {
          g = C, f.abort();
        }
        const b = async function() {
          var w, E;
          let C;
          try {
            let T = (w = n == null ? void 0 : n.condition) == null ? void 0 : w.call(n, c, {
              getState: u,
              extra: d
            });
            if (Yb(T) && (T = await T), T === !1 || f.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const A = new Promise((_, L) => {
              p = () => {
                L({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, f.signal.addEventListener("abort", p);
            });
            l(i(h, c, (E = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : E.call(n, {
              requestId: h,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), C = await Promise.race([A, Promise.resolve(t(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: h,
              signal: f.signal,
              abort: m,
              rejectWithValue: (_, L) => new Ri(_, L),
              fulfillWithValue: (_, L) => new ol(_, L)
            })).then((_) => {
              if (_ instanceof Ri)
                throw _;
              return _ instanceof ol ? o(_.payload, h, c, _.meta) : o(_, h, c);
            })]);
          } catch (T) {
            C = T instanceof Ri ? s(null, h, c, T.payload, T.meta) : s(T, h, c);
          } finally {
            p && f.signal.removeEventListener("abort", p);
          }
          return n && !n.dispatchConditionRejection && s.match(C) && C.meta.condition || l(C), C;
        }();
        return Object.assign(b, {
          abort: m,
          requestId: h,
          arg: c,
          unwrap() {
            return b.then(Wb);
          }
        });
      };
    }
    return Object.assign(a, {
      pending: i,
      rejected: s,
      fulfilled: o,
      settled: zb(s, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function Wb(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function Yb(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var Qb = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Jb(r, e) {
  return `${r}/${e}`;
}
function Xb({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[Qb];
  return function(o) {
    const {
      name: i,
      reducerPath: s = i
    } = o;
    if (!i)
      throw new Error(Je(11));
    typeof process < "u";
    const a = (typeof o.reducers == "function" ? o.reducers(ew()) : o.reducers) || {}, c = Object.keys(a), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(v, w) {
        const E = typeof v == "string" ? v : v.type;
        if (!E)
          throw new Error(Je(12));
        if (E in l.sliceCaseReducersByType)
          throw new Error(Je(13));
        return l.sliceCaseReducersByType[E] = w, u;
      },
      addMatcher(v, w) {
        return l.sliceMatchers.push({
          matcher: v,
          reducer: w
        }), u;
      },
      exposeAction(v, w) {
        return l.actionCreators[v] = w, u;
      },
      exposeCaseReducer(v, w) {
        return l.sliceCaseReducersByName[v] = w, u;
      }
    };
    c.forEach((v) => {
      const w = a[v], E = {
        reducerName: v,
        type: Jb(i, v),
        createNotation: typeof o.reducers == "function"
      };
      rw(w) ? ow(E, w, u, e) : tw(E, w, u);
    });
    function d() {
      const [v = {}, w = [], E = void 0] = typeof o.extraReducers == "function" ? Ud(o.extraReducers) : [o.extraReducers], T = {
        ...v,
        ...l.sliceCaseReducersByType
      };
      return $b(o.initialState, (A) => {
        for (let _ in T)
          A.addCase(_, T[_]);
        for (let _ of l.sliceMatchers)
          A.addMatcher(_.matcher, _.reducer);
        for (let _ of w)
          A.addMatcher(_.matcher, _.reducer);
        E && A.addDefaultCase(E);
      });
    }
    const h = (v) => v, f = /* @__PURE__ */ new Map();
    let p;
    function g(v, w) {
      return p || (p = d()), p(v, w);
    }
    function m() {
      return p || (p = d()), p.getInitialState();
    }
    function b(v, w = !1) {
      function E(A) {
        let _ = A[v];
        return typeof _ > "u" && w && (_ = m()), _;
      }
      function T(A = h) {
        const _ = nl(f, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return nl(_, A, {
          insert: () => {
            const L = {};
            for (const [F, J] of Object.entries(o.selectors ?? {}))
              L[F] = Zb(J, A, m, w);
            return L;
          }
        });
      }
      return {
        reducerPath: v,
        getSelectors: T,
        get selectors() {
          return T(E);
        },
        selectSlice: E
      };
    }
    const C = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: m,
      ...b(s),
      injectInto(v, {
        reducerPath: w,
        ...E
      } = {}) {
        const T = w ?? s;
        return v.inject({
          reducerPath: T,
          reducer: g
        }, E), {
          ...C,
          ...b(T, !0)
        };
      }
    };
    return C;
  };
}
function Zb(r, e, t, n) {
  function o(i, ...s) {
    let a = e(i);
    return typeof a > "u" && n && (a = t()), r(a, ...s);
  }
  return o.unwrapped = r, o;
}
var di = /* @__PURE__ */ Xb();
function ew() {
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
function tw({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let i, s;
  if ("reducer" in n) {
    if (t && !nw(n))
      throw new Error(Je(17));
    i = n.reducer, s = n.prepare;
  } else
    i = n;
  o.addCase(r, i).exposeCaseReducer(e, i).exposeAction(e, s ? Pt(r, s) : Pt(r));
}
function rw(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function nw(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function ow({
  type: r,
  reducerName: e
}, t, n, o) {
  if (!o)
    throw new Error(Je(18));
  const {
    payloadCreator: i,
    fulfilled: s,
    pending: a,
    rejected: c,
    settled: l,
    options: u
  } = t, d = o(r, i, u);
  n.exposeAction(e, d), s && n.addCase(d.fulfilled, s), a && n.addCase(d.pending, a), c && n.addCase(d.rejected, c), l && n.addMatcher(d.settled, l), n.exposeCaseReducer(e, {
    fulfilled: s || co,
    pending: a || co,
    rejected: c || co,
    settled: l || co
  });
}
function co() {
}
var iw = (r, e) => {
  if (typeof r != "function")
    throw new Error(Je(32));
}, _a = "listenerMiddleware", sw = (r) => {
  let {
    type: e,
    actionCreator: t,
    matcher: n,
    predicate: o,
    effect: i
  } = r;
  if (e)
    o = Pt(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(Je(21));
  return iw(i), {
    predicate: o,
    type: e,
    effect: i
  };
}, aw = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = sw(r);
  return {
    id: Hd(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Je(22));
    }
  };
}, {
  withTypes: () => aw
}), cw = Object.assign(Pt(`${_a}/add`), {
  withTypes: () => cw
});
Pt(`${_a}/removeAll`);
var lw = Object.assign(Pt(`${_a}/remove`), {
  withTypes: () => lw
});
function Je(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const uw = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, il = (r, e) => {
  r.language = e.payload, xe.changeLanguage(e.payload);
}, Fd = Pt("settings/setSettings"), Bd = di({
  name: "settings",
  initialState: uw,
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
    setLanguage: il,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      Fd,
      (e, {
        payload: {
          bsddApiEnvironment: t,
          mainDictionary: n,
          ifcDictionary: o,
          filterDictionaries: i,
          language: s,
          includeTestDictionaries: a
        }
      }) => {
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(i) && (e.filterDictionaries = i), JSON.stringify(e.language) !== JSON.stringify(s) && il(e, { payload: s, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(a) && (e.includeTestDictionaries = a);
      }
    );
  }
}), ls = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? Sd[e] : null;
}, jd = ur(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
), dw = ur(jd, (r) => new Map(
  r.map((t) => [t.ifcClassification.location, t.ifcClassification])
)), Ia = (r) => r.settings.mainDictionary, $d = (r) => r.settings.language, hw = (r) => r.settings.includeTestDictionaries, fw = ur(
  jd,
  (r) => r.map((e) => e.ifcClassification.location)
);
ur(
  Ia,
  (r) => r ? r.ifcClassification.location : null
);
Bd.actions;
const pw = Bd.reducer, us = 500, gw = 500;
let et = null, lo = {};
const sl = {
  mainDictionaryClassification: null,
  classes: {},
  propertyNamesByLanguage: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1,
  groupedClassRelations: {}
}, mw = (r) => {
  const e = ls(r);
  return e && (!et || et.baseUrl !== e) && (et = new Fn(e)), et;
}, al = Lr("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new Fn(r), o = gw;
  let i = 0;
  const s = [];
  return new Promise((a, c) => {
    function l() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: i }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: d, totalCount: h } = {} } = u;
        if (d && typeof h < "u")
          if (s.push(...d), i += o, s.length >= h) {
            const f = s.reduce((p, g) => (p[g.uri] = g, p), {});
            a(f);
          } else
            l();
        else
          c(new Error(`bSDD API error! status: ${u.status}`));
      });
    }
    l();
  });
}), yw = Lr("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
  if (!r || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const n = new Fn(r), o = {};
  return await Promise.all(
    e.map(async (i) => {
      var s;
      try {
        const a = await n.api.dictionaryV1List({ Uri: i });
        a.ok && a.data ? (s = a.data.dictionaries) == null || s.forEach((c) => {
          o[c.uri] = c;
        }) : console.error(`Failed to fetch dictionaries for URI: ${i}`);
      } catch (a) {
        console.error(`Error fetching dictionaries for URI: ${i}`, a);
      }
    })
  ), o;
});
async function cl(r, e, t, n) {
  console.log("languageCode", n);
  const o = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    ClassType: "Class",
    Offset: t,
    Limit: us,
    languageCode: n || void 0
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const vw = async (r, e, t) => {
  const n = [];
  let o = 0;
  const i = await cl(r, e, o, t), s = i.classesTotalCount;
  if (s == null)
    throw new Error("Total count is null or undefined");
  n.push(...i.classes ?? []);
  const a = [];
  for (o = us; o < s; o += us)
    a.push(cl(r, e, o, t));
  return (await Promise.all(a)).forEach((l) => {
    n.push(...l.classes ?? []);
  }), n;
}, Aa = Lr(
  "bsdd/fetchDictionaryClasses",
  async ({ location: r, languageCode: e }, { getState: t, dispatch: n }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[r])
      return o.bsdd.dictionaryClasses[r];
    if (lo[r])
      return lo[r];
    const i = mw(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const s = vw(i, r, e).then((a) => (n({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: a } }), a)).finally(() => {
      delete lo[r];
    });
    return lo[r] = s, s;
  }
), Cw = Lr(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n, languageCode: o } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((i) => e(Aa({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), Kd = Lr(
  "bsdd/updateDictionaries",
  async (r) => r
), qd = Lr(
  "bsdd/updatePropertyNaturalLanguageNames",
  async ({ classProperties: r, languageCode: e }) => {
    if (!et)
      throw new Error("BsddApi is not initialized");
    const t = {}, n = async (i) => {
      if (et != null && et.api && i.propertyUri)
        try {
          const s = await et.api.propertyV4List({
            uri: i.propertyUri,
            languageCode: e,
            includeClasses: !1
          });
          if (!s.ok)
            throw new Error(`HTTP error! status: ${s.status}`);
          const { data: a } = s;
          t[i.propertyUri] = a.name || i.name;
        } catch (s) {
          console.error("Error fetching property details:", s), t[i.propertyUri] = i.name;
        }
    }, o = r.map(n);
    return await Promise.all(o), { languageCode: e, propertyNames: t };
  }
), zd = di({
  name: "bsdd",
  initialState: sl,
  reducers: {
    resetState: () => sl,
    setMainDictionaryClassification: (r, e) => {
      r.mainDictionaryClassification = e.payload;
    },
    setClasses: (r, e) => {
      console.log("setClasses", e.payload), r.classes = e.payload;
    },
    // addClass: (state, action: PayloadAction<{ uri: string; data: ClassContractV1 }>) => {
    //   console.log('addClass', action.payload);
    //   state.classes[action.payload.uri] = action.payload.data;
    // },
    addDictionaryClasses: (r, e) => {
      r.dictionaryClasses[e.payload.uri] ? r.dictionaryClasses[e.payload.uri] = [
        ...r.dictionaryClasses[e.payload.uri],
        ...e.payload.data
      ] : r.dictionaryClasses[e.payload.uri] = e.payload.data;
    },
    addDictionary: (r, e) => {
      r.dictionaries[e.payload.uri] = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      qd.fulfilled,
      (e, t) => {
        const { languageCode: n, propertyNames: o } = t.payload;
        e.propertyNamesByLanguage[n] = o;
      }
    ).addCase(al.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      al.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(Aa.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(Kd.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, i) => (o[i] = e.dictionaries[i], o), {});
    });
  }
}), Gd = Lr(
  "bsdd/fetchRelatedClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (!et)
      throw new Error("BsddApi is not initialized");
    const o = {}, i = async (a) => {
      if (et && et.api) {
        const c = await et.api.classV1List({
          Uri: a,
          // IncludeClassProperties: true,
          // IncludeChildClassReferences: false,
          // IncludeClassRelations: true,
          languageCode: n.settings.language || void 0
        });
        if (!c.ok)
          throw new Error(`HTTP error! status: ${c.status}`);
        const { data: l } = c;
        o[a] = l;
      } else
        throw new Error("bsddApi or bsddApi.api is not initialized");
    }, s = r.map(i);
    await Promise.all(s), t({ type: "bsdd/setClasses", payload: o });
  }
), bw = (r) => r.bsdd.mainDictionaryClassification, Vd = (r) => r.bsdd.dictionaries, ww = (r) => r.bsdd.classes, Ew = (r) => r.bsdd.propertyNamesByLanguage, Sw = ur([ww], (r) => Object.values(r).reduce((n, o) => {
  const { dictionaryUri: i } = o;
  return i && (n[i] || (n[i] = []), n[i].push(o)), n;
}, {})), { resetState: oE, setMainDictionaryClassification: Tw, addDictionaryClasses: iE, addDictionary: sE } = zd.actions, _w = zd.reducer, Iw = {
  type: void 0,
  name: void 0,
  description: void 0,
  objectType: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
};
function ki(r, e, t) {
  e ? !t || t === "NOTDEFINED" ? r.predefinedType = "USERDEFINED" : r.predefinedType = t : (r.objectType = "", !t || t === "USERDEFINED" ? r.predefinedType = "NOTDEFINED" : r.predefinedType = t);
}
function ll(r, e) {
  var n, o, i, s, a, c;
  if (r.isDefinedBy = e || [], !e)
    return;
  const t = e.find((l) => l.name === "Attributes");
  if (t) {
    const l = t.hasProperties.find((d) => d.name === "ObjectType");
    l && (l.type === "IfcPropertySingleValue" ? r.objectType = (n = l.nominalValue) == null ? void 0 : n.value : l.type === "IfcPropertyEnumeratedValue" && (r.objectType = (i = (o = l.enumerationValues) == null ? void 0 : o[0]) == null ? void 0 : i.value));
    const u = t.hasProperties.find(
      (d) => d.name === "PredefinedType"
    );
    u && (u.type === "IfcPropertySingleValue" ? r.predefinedType = (s = u.nominalValue) == null ? void 0 : s.value : u.type === "IfcPropertyEnumeratedValue" && (r.predefinedType = (c = (a = u.enumerationValues) == null ? void 0 : a[0]) == null ? void 0 : c.value));
  }
}
function ul(r, e) {
  const t = JSON.stringify(r.hasAssociations), n = JSON.stringify(e);
  t !== n && (r.hasAssociations = e);
}
const Wd = di({
  name: "ifcEntity",
  initialState: Iw,
  reducers: {
    setIfcEntity: (r, e) => {
      r.type = e.payload.type, r.name = e.payload.name, r.description = e.payload.description, ki(r, e.payload.objectType, e.payload.predefinedType), r.tag = e.payload.tag, ll(r, e.payload.isDefinedBy), ul(r, e.payload.hasAssociations);
    },
    setType: (r, e) => {
      r.type = e.payload;
    },
    setName: (r, e) => {
      r.name = e.payload;
    },
    setDescription: (r, e) => {
      r.description = e.payload;
    },
    setObjectType: (r, e) => {
      ki(r, e.payload, r.predefinedType);
    },
    setTag: (r, e) => {
      r.tag = e.payload;
    },
    setPredefinedType: (r, e) => {
      r.predefinedType = e.payload, ki(r, r.objectType, e.payload);
    },
    setIsDefinedBy: (r, e) => {
      ll(r, e.payload);
    },
    setHasAssociations: (r, e) => {
      ul(r, e.payload);
    }
  }
}), Aw = (r) => r.ifcEntity.isDefinedBy, Yd = (r) => r.ifcEntity.hasAssociations, Rw = ur(
  Yd,
  (r) => (r == null ? void 0 : r.filter(
    (n) => n && n.type === "IfcClassificationReference"
  )).reduce((n, o) => {
    var s;
    const i = (s = o == null ? void 0 : o.referencedSource) == null ? void 0 : s.location;
    return i && (n[i] || (n[i] = []), n[i].push(o)), n;
  }, {})
), { setIfcEntity: kw, setName: aE, setDescription: cE, setTag: lE, setPredefinedType: uE, setIsDefinedBy: Nw, setHasAssociations: Pw } = Wd.actions, Ow = Wd.reducer;
function xw({ callback: r, ifcEntity: e }) {
  const { t } = fs();
  qe(Vd);
  const n = Pn(Aw), o = Pn(Yd);
  function i(a) {
    const c = a ? { ...JSON.parse(JSON.stringify(a)) } : { hasAssociations: [], isDefinedBy: [] };
    return c.isDefinedBy = n == null ? void 0 : n.filter((l) => l.name !== "Attributes"), c.hasAssociations = [], o == null || o.forEach((l) => {
      var u, d, h;
      if (l.type === "IfcClassificationReference" && ((d = (u = l == null ? void 0 : l.referencedSource) == null ? void 0 : u.location) != null && d.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))) {
        const { type: f, predefinedType: p } = nb(l.identification);
        f && (c.type = f), p && (c.predefinedType = p), c.predefinedType || (c.predefinedType = "NOTDEFINED");
      } else
        (h = c.hasAssociations) == null || h.push(l);
    }), c;
  }
  const s = () => {
    const a = i(e);
    console.log(a), r(a);
  };
  return /* @__PURE__ */ y.jsx(Xn, { color: "gray", fullWidth: !0, onClick: s, variant: "filled", children: t("apply") });
}
const dl = 25, Mw = 25;
function Lw({ height: r, options: e, label: t, value: n, setValue: o, placeholder: i = "Search values", disabled: s }) {
  const [a, c] = X(""), [l, u] = X(e.slice(0, dl)), d = ue(null), h = ii({
    onDropdownClose: () => {
      h.resetSelectedOption(), h.focusTarget();
    },
    onDropdownOpen: () => {
      h.focusSearchInput();
    }
  });
  W(() => {
    c((n == null ? void 0 : n.label) || "");
  }, [n]), W(() => {
    const g = n === null ? e.filter(
      (m) => (m == null ? void 0 : m.label.toLowerCase().includes(a.toLowerCase().trim())) || (m == null ? void 0 : m.value.toString().toLowerCase().includes(a.toLowerCase().trim()))
    ) : e;
    u(g.slice(0, dl));
  }, [e, a, n]);
  const f = (g) => {
    const { scrollTop: m, scrollHeight: b, clientHeight: C } = g.currentTarget, v = 5;
    b - m <= C + v && u((E) => {
      const T = E.length, A = e.filter((_) => _ == null ? void 0 : _.label.toLowerCase().includes(a.toLowerCase().trim())).slice(T, T + Mw);
      return [...E, ...A];
    });
  }, p = l.map((g) => /* @__PURE__ */ y.jsx(le.Option, { value: g.value, active: (n == null ? void 0 : n.value) === g.value, children: /* @__PURE__ */ y.jsxs(Un, { gap: "sm", children: [
    (n == null ? void 0 : n.value) === g.value ? /* @__PURE__ */ y.jsx(ha, { size: 12 }) : null,
    /* @__PURE__ */ y.jsx(xo, { fz: "sm", opacity: s ? 0.6 : 1, children: g.label }),
    /* @__PURE__ */ y.jsxs(xo, { fz: "xs", opacity: 0.6, children: [
      "(",
      g.value,
      ")"
    ] })
  ] }) }, g.value));
  return /* @__PURE__ */ y.jsx("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: /* @__PURE__ */ y.jsxs(
    le,
    {
      store: h,
      onOptionSubmit: (g) => {
        if (!s) {
          const m = e.find((C) => C.value === g), b = m && (n == null ? void 0 : n.value) !== m.value ? m : null;
          o(b), h.closeDropdown();
        }
      },
      disabled: s,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            rightSection: !s && /* @__PURE__ */ y.jsx(
              dn,
              {
                size: "sm",
                onMouseDown: (g) => {
                  g.preventDefault();
                },
                onClick: () => {
                  c(""), o(null);
                },
                "aria-label": "Clear value"
              }
            ),
            label: t,
            value: a,
            onChange: (g) => {
              s || (o(null), h.updateSelectedOptionIndex(), c(g.currentTarget.value));
            },
            onClick: () => {
              s || h.openDropdown();
            },
            onBlur: () => h.closeDropdown(),
            placeholder: s ? "" : i,
            disabled: s
          }
        ) }),
        r < 80 ? /* @__PURE__ */ y.jsx(
          le.Dropdown,
          {
            style: { maxHeight: "20em", overflowY: "auto" },
            ref: d,
            onScroll: f,
            children: /* @__PURE__ */ y.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        ) : /* @__PURE__ */ y.jsx(
          Qo,
          {
            withBorder: !0,
            my: "0.2em",
            style: {
              flexGrow: 1,
              overflow: "auto",
              backgroundColor: s ? "var(--mantine-color-gray-0)" : "transparent",
              color: s ? "var(--mantine-color-gray-6)" : "inherit",
              pointerEvents: s ? "none" : "auto"
            },
            ref: d,
            onScroll: f,
            children: /* @__PURE__ */ y.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        )
      ]
    }
  ) });
}
function Dw({ height: r, mainDictionaryClassification: e, handleMouseDown: t }) {
  const n = Zn(), [o, i] = X(/* @__PURE__ */ new Map()), [s, a] = X(/* @__PURE__ */ new Map()), c = qe(dw), l = qe(Rw), u = Pn(Vd), d = Pn(Sw);
  return W(() => {
    (async () => {
      const p = Array.from(c.entries()).map(async ([C, v]) => {
        let w = [];
        const E = d[C];
        if (E)
          w = E.map((T) => ({
            value: T.code,
            label: T.name,
            uri: T.uri
          }));
        else
          try {
            w = (await n(
              Aa({
                location: C,
                languageCode: "nl-NL"
              })
            ).unwrap()).map(
              (A) => ({
                value: A.code,
                label: A.name || "",
                uri: A.uri
              })
            );
          } catch (T) {
            console.error("Failed to fetch dictionary classes for", C, T), w = [];
          }
        return [C, w];
      }), g = await Promise.all(p), m = new Map(g);
      i(m);
      const b = /* @__PURE__ */ new Map();
      m.forEach((C, v) => {
        if (C.length === 1)
          b.set(v, C[0]);
        else if (v in l) {
          const w = l[v];
          if (w.length === 1) {
            const E = w[0];
            if (C.some((A) => A.value === E.identification)) {
              const A = {
                label: E.name || "",
                value: E.identification || "",
                uri: v
              };
              b.set(v, A);
            }
          }
        }
      }), a(b);
    })();
  }, [c, d, n, l]), W(() => {
    (() => {
      const f = Array.from(s.entries()).map(([p, g]) => {
        if (!g || !g.value)
          return null;
        const m = u[p];
        return {
          type: "IfcClassificationReference",
          name: g.label,
          location: g.uri,
          identification: g.value,
          referencedSource: {
            type: "IfcClassification",
            name: m.name,
            location: m.uri,
            edition: m.version,
            editionDate: m.releaseDate
          }
        };
      }).filter((p) => p !== null);
      f.length > 0 && n(Pw(f));
    })();
  }, [u, n, s]), W(() => {
    if (e != null && e.classRelations) {
      const h = e.classRelations.map((f) => f.relatedClassUri);
      h.push(e.uri), n(Gd(h));
    }
  }, [e, n]), /* @__PURE__ */ y.jsxs(Qo, { style: { height: `${r}px`, position: "relative" }, children: [
    Array.from(c.entries()).map(([h, f]) => {
      var p;
      return /* @__PURE__ */ y.jsx(
        Lw,
        {
          height: r,
          label: f.name,
          options: o.get(h) || [],
          value: s.get(h) || null,
          setValue: (g) => {
            const m = new Map(s);
            m.set(h, g), a(m);
          },
          placeholder: "Search classes",
          disabled: h === (e == null ? void 0 : e.dictionaryUri) || ((p = o.get(h)) == null ? void 0 : p.length) === 1
        },
        h
      );
    }),
    /* @__PURE__ */ y.jsx(ma, { onMouseDown: t, style: { marginTop: "4px" }, children: /* @__PURE__ */ y.jsx(ti, { m: "xxs", variant: "outline", size: "lg", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ y.jsx(WC, {}) }) })
  ] });
}
const Uw = {
  ifcEntities: []
}, Qd = di({
  name: "ifcData",
  initialState: Uw,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: Hw } = Qd.actions, Fw = (r) => r.ifcData.ifcEntities, Bw = ur(Fw, (r) => r[0]), jw = Qd.reducer;
function $w({ label: r, description: e, value: t, setValue: n, disabled: o }) {
  const [i, s] = X(!1), [a, c] = X(!0), l = (u) => {
    u.target.indeterminate = !1, n(u.target.checked);
  };
  return W(() => {
    t === !0 ? (s(!0), c(!1)) : t === !1 ? (s(!1), c(!1)) : t === void 0 && (s(!1), c(!0));
  }, [t]), /* @__PURE__ */ y.jsx(
    Mr,
    {
      label: r,
      description: e,
      checked: i,
      indeterminate: a,
      type: "checkbox",
      onChange: (u) => l(u),
      disabled: o
    }
  );
}
function Kw({
  propertySet: r,
  property: e,
  property_natural_language_name: t,
  propertySets: n,
  setPropertySets: o
}) {
  const i = Zn(), [s, a] = X();
  return W(() => {
    var c, l, u, d, h;
    switch (e.type) {
      case "IfcPropertySingleValue": {
        e.nominalValue.type === "IfcBoolean" ? a(
          /* @__PURE__ */ y.jsx(
            $w,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              disabled: !1,
              value: e.nominalValue.value,
              setValue: (f) => {
                const p = { ...n }, g = { ...r };
                if (g.name) {
                  const m = { ...e }, b = { ...m.nominalValue, value: f };
                  m.nominalValue = b;
                  const C = g.hasProperties.findIndex(
                    (v) => v.name === e.name
                  );
                  if (C !== -1) {
                    const v = [...g.hasProperties];
                    v[C] = m, g.hasProperties = v, p[g.name] = g, JSON.stringify(n) !== JSON.stringify(p) && o(p);
                  }
                }
              }
            }
          )
        ) : a(
          /* @__PURE__ */ y.jsx(
            Tr,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              placeholder: e.nominalValue.value,
              value: e.nominalValue.value || "",
              onChange: (f) => {
                const p = JSON.parse(JSON.stringify(n)), g = p[r.name];
                if (g && g.name) {
                  const m = g.hasProperties.findIndex(
                    (b) => b.name === e.name
                  );
                  m !== -1 && (g.hasProperties[m] = {
                    ...g.hasProperties[m],
                    nominalValue: {
                      ...g.hasProperties[m].nominalValue,
                      value: f.target.value
                    }
                  }, JSON.stringify(n) !== JSON.stringify(p) && o(p));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const f = (l = (c = e.enumerationValues) == null ? void 0 : c[0]) == null ? void 0 : l.value, p = ((u = e.enumerationReference) == null ? void 0 : u.enumerationValues) || [];
        a(
          /* @__PURE__ */ y.jsx(
            va,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              value: f,
              disabled: ((h = (d = e.enumerationReference) == null ? void 0 : d.enumerationValues) == null ? void 0 : h.length) === 1,
              onChange: (g) => {
                const m = p.find((w) => w.value === g), b = m ? [m] : [], C = { ...n }, v = { ...r };
                if (v.name) {
                  const w = { ...e };
                  w.enumerationValues = b;
                  const E = v.hasProperties.findIndex(
                    (T) => T.name === e.name
                  );
                  if (E !== -1) {
                    const T = v.hasProperties.map(
                      (A, _) => _ === E ? w : A
                    );
                    v.hasProperties = T, C[v.name] = v, JSON.stringify(n) !== JSON.stringify(C) && o(C);
                  }
                }
              },
              data: p.map((g) => ({
                value: g.value,
                label: g.value
              }))
            }
          )
        );
        break;
      }
      default: {
        a(/* @__PURE__ */ y.jsx(Tr, { placeholder: e.name, value: "{ifcProperty.nominalValue}" }));
        break;
      }
    }
  }, [e, r, a, n, o, t, i]), s;
}
const qw = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function $n(r, e) {
  const t = r && qw[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function Jd(r, e, t) {
  if (r && r.isDefinedBy) {
    let n = r.isDefinedBy.find((o) => o.name === e);
    if (n || (n = r.isDefinedBy.find((o) => o.name === "")), n)
      return n.hasProperties.find(
        (o) => o.name === t
      );
  }
}
function zw(r, e, t, n) {
  const o = Jd(e, t, n);
  return o && "nominalValue" in o ? $n(r, o.nominalValue.value) : $n(r);
}
function Gw(r, e, t, n, o) {
  const i = Jd(e, t, n);
  if (i) {
    if (i.type === "IfcPropertyEnumeratedValue")
      return o.filter(
        (s) => i.enumerationValues ? i.enumerationValues.some((a) => a.value === s.value) : !1
      );
    if ("nominalValue" in i && i.nominalValue) {
      const s = o.find(
        (a) => a.value === i.nominalValue.value
      );
      return s ? [s] : [];
    }
  }
  return [];
}
function Vw(r, e, t, n) {
  var a;
  const o = ((a = r.allowedValues) == null ? void 0 : a.map(
    (c) => $n(r.dataType, c.value)
  )) || [], i = {
    type: "IfcPropertyEnumeratedValue",
    name: e,
    enumerationReference: {
      type: "IfcPropertyEnumeration",
      name: e,
      // TODO get the right property enum name
      enumerationValues: o
    },
    enumerationValues: o
  };
  r.propertyUri && (i.specification = r.propertyUri);
  const s = r.predefinedValue ? [$n(r.dataType, r.predefinedValue)] : Gw(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return s.length > 0 && (i.enumerationValues = s), i;
}
function Ww(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e
  };
  r.propertyUri && (o.specification = r.propertyUri);
  const i = r.predefinedValue ? $n(r.dataType, r.predefinedValue) : zw(r.dataType, n, t, e);
  return i !== null && (o.nominalValue = i), o;
}
function Yw(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown", i = r.allowedValues ? Vw(r, o, e, t) : Ww(r, o, e, t);
  return i.specification = r.propertyUri || void 0, i;
}
function Qw({
  mainDictionaryClassification: r,
  propertySets: e,
  setPropertySets: t,
  recursiveMode: n
}) {
  const o = Zn(), i = qe(Bw), s = qe(Ew), a = qe($d), [c, l] = X({});
  return W(() => {
    r && o(Nw(Object.values(e)));
  }, [e, o, r]), W(() => {
    if (!r)
      return;
    const u = {}, d = {};
    [r].forEach((f) => {
      var p;
      (p = f.classProperties) == null || p.forEach((g) => {
        if (!g)
          return;
        const m = g.propertySet || f.name;
        u[m] || (u[m] = {
          type: "IfcPropertySet",
          name: m,
          hasProperties: []
        }), u[m].hasProperties.push(Yw(g, m, i)), g.propertyUri && a && s && s[a] && s[a][g.propertyUri] ? d[g.propertyUri] = s[a][g.propertyUri] : g.propertyCode && (d[g.propertyCode] = g.name);
      });
    }), JSON.stringify(e) !== JSON.stringify(u) && t(u), l(d);
  }, [r, t, n, i]), /* @__PURE__ */ y.jsx("div", { children: Pi.toArray(
    Object.values(e).map((u) => /* @__PURE__ */ y.jsx(Ne, { children: /* @__PURE__ */ y.jsxs(Ne.Item, { value: u.name || "Unknown", children: [
      /* @__PURE__ */ y.jsx(Ne.Control, { children: u.name }),
      /* @__PURE__ */ y.jsx(Ne.Panel, { children: /* @__PURE__ */ y.jsx(Ca, { children: Pi.toArray(
        u.hasProperties.map((d) => /* @__PURE__ */ y.jsx(
          Kw,
          {
            propertySet: u,
            property: d,
            property_natural_language_name: c[d.name] || "",
            propertySets: e,
            setPropertySets: t
          }
        ))
      ) }) })
    ] }, u.name) }))
  ) });
}
function Jw({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var E;
  const n = Zn(), { t: o } = fs(), [i, s] = X([]), a = qe(Ia), c = ue(null), l = ue(e), [u, d] = X(l.current), [h, f] = X(((E = l.current) == null ? void 0 : E.label) || ""), [p] = jp(h, 300), [g, m] = X(!1), b = ve((T) => {
    f(T);
  }, []), C = ve(
    (T) => {
      const A = i.find((_) => _.value === T);
      A && (d(A), m(!0));
    },
    [i]
  ), v = ve(
    (T) => {
      T.key === "Enter" && i[0] && (f(i[0].label), C(i[0].value), c.current && c.current.blur());
    },
    [i, C, c]
  );
  W(() => {
    e && !g && (f(e.label), d(e));
  }, [e, g]), W(() => {
    if (a) {
      n(Gd([]));
      const T = {
        headers: { Accept: "text/plain" }
      }, A = {
        SearchText: p,
        DictionaryUri: a.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(A, T).then((_) => {
        var F;
        const L = _.data;
        if (L) {
          if (L.count) {
            const J = (F = L.dictionary) == null ? void 0 : F.classes;
            J && s(
              J.filter((Z) => Z.uri && Z.name).map(
                (Z) => ({
                  value: Z.uri,
                  label: Z.name
                })
              )
            );
          }
        } else
          console.error("API response data is null", _);
      }).catch((_) => {
        console.error("API request failed", _);
      });
    } else
      s([]);
  }, [r.api, p, n, a]), W(() => {
    c.current && c.current.focus();
  }, []), W(() => {
    u && t(u.value);
  }, [u, t]);
  const w = () => {
    b(""), c.current && c.current.focus();
  };
  return /* @__PURE__ */ y.jsx(
    pa,
    {
      label: `${o("searchMainDictionaryLabel")} ${a ? a.ifcClassification.name : ""}`,
      data: i,
      placeholder: "bSDD search...",
      value: h,
      onChange: b,
      onOptionSubmit: C,
      onKeyDown: v,
      ref: c,
      style: { width: "100%" },
      rightSection: /* @__PURE__ */ y.jsx(
        dn,
        {
          size: "sm",
          onMouseDown: (T) => {
            T.preventDefault();
          },
          onClick: () => {
            w();
          },
          "aria-label": "Clear value"
        }
      )
    }
  );
}
const Ni = 60.7969;
let hl = 0, fl = 0;
function Xw() {
  const { t: r } = fs(), e = Zn(), [t, n] = X(), [o, i] = X(), [s, a] = X(!1), [c, l] = X({}), [u, d] = X(new Fn(Sd[rb])), h = qe(Ia), f = qe($d), [p, g] = X(null), m = qe(ls), b = qe(ls), C = qe(hw), v = qe(fw), w = qe((x) => x.ifcEntity), [E, T] = X(Ni), [A, _] = X("auto"), L = qe(bw), F = ve((x) => {
    var q;
    const D = JSON.stringify(x);
    (q = window == null ? void 0 : window.bsddBridge) == null || q.save(D).then((V) => {
      console.log("Sent to Revit", V);
    });
  }, []), J = ve(() => {
    var x;
    (x = window == null ? void 0 : window.bsddBridge) == null || x.cancel();
  }, []), Z = (x) => {
    g(x);
  };
  W(() => {
    p && (console.log("settings updated: ", p), e(Fd(p)), g(null));
  }, [p, e]), W(() => {
    m && d(new Fn(m));
  }, [m]), W(() => {
  }, [e]), W(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const D = await window.bsddBridge.loadSettings(), { settings: q, ifcData: V } = JSON.parse(D);
        if (e(Hw(V)), Z(q), !V || V.length === 0)
          return;
        e(kw(V[0]));
      }
    })();
  }, []), W(() => {
    var D;
    if (!w || !h)
      return;
    const x = h.ifcClassification.location;
    (D = w.hasAssociations) == null || D.forEach((q) => {
      var V;
      if (q.type === "IfcClassificationReference") {
        const de = q;
        (V = de.referencedSource) != null && V.location && de.referencedSource.location === x && (de.location && n(de.location), i({
          label: de.name,
          value: de.location
        }));
      }
    });
  }, [h, w]), W(() => {
    if (m !== null && C !== null) {
      const x = {
        bsddApiEnvironment: m,
        includeTestDictionaries: C,
        languageCode: f,
        dictionaryUris: v
      };
      e(Kd(v)), e(yw(x)), e(Cw(x));
    }
  }, [
    m,
    b,
    C,
    e,
    v,
    f
  ]);
  const se = ve(
    (x) => {
      const D = {
        headers: { Accept: "text/plain" }
      };
      new Promise(function(V) {
        const de = {
          Uri: x,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0,
          languageCode: f
        };
        V(
          u.api.classV1List(de, D).then((pe) => pe.status !== 200 ? (console.error(`API request failed with status ${pe.status}`), null) : pe.data).catch((pe) => (console.error("Error fetching classification:", pe), null))
        );
      }).then((V) => {
        e(Tw(V));
        const de = V == null ? void 0 : V.classProperties;
        de && (de == null ? void 0 : de.length) > 0 && e(qd({ classProperties: de, languageCode: f }));
      });
    },
    [u.api, e, f]
  );
  W(() => {
    t && se(t);
  }, [t, se]), W(() => {
    _(`${E * v.length + 48}px`);
  }, [v.length, E]);
  const $ = (x) => {
    const D = fl + (x.clientY - hl) / v.length;
    T(D > Ni ? D : Ni);
  }, oe = () => {
    document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", oe);
  }, U = (x) => {
    hl = x.clientY, fl = E, document.addEventListener("mousemove", $), document.addEventListener("mouseup", oe);
  };
  return /* @__PURE__ */ y.jsxs(ya, { children: [
    /* @__PURE__ */ y.jsx(Tr, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ y.jsx(Tr, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ y.jsx(Tr, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ y.jsx(Un, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ y.jsx(Jw, { api: u, defaultValue: o, setActiveClassificationUri: n }) }),
    t ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs(Ne, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ y.jsxs(Ne.Item, { value: "Classifications", children: [
          /* @__PURE__ */ y.jsx(Ne.Control, { children: /* @__PURE__ */ y.jsx(Mo, { order: 5, children: r("classificationsLabel") }) }),
          /* @__PURE__ */ y.jsx(Ne.Panel, { style: { height: A }, children: /* @__PURE__ */ y.jsx(
            Dw,
            {
              height: E,
              mainDictionaryClassification: L,
              handleMouseDown: U
            }
          ) })
        ] }, "Classifications"),
        /* @__PURE__ */ y.jsxs(Ne.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ y.jsx(Ne.Control, { children: /* @__PURE__ */ y.jsx(Mo, { order: 5, children: r("propertysetsLabel") }) }),
          /* @__PURE__ */ y.jsx(Ne.Panel, { children: /* @__PURE__ */ y.jsx(
            Qw,
            {
              mainDictionaryClassification: L,
              propertySets: c,
              setPropertySets: l,
              recursiveMode: s
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ y.jsxs(Un, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ y.jsx(xw, { callback: F, ifcEntity: w }),
        /* @__PURE__ */ y.jsx(Xn, { fullWidth: !0, variant: "light", color: "gray", onClick: J, children: r("cancel") })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs(Xs, { mx: "md", title: r("noClassificationSelected"), mt: "xl", children: [
      r("classSearchInstruction"),
      /* @__PURE__ */ y.jsx(gd, { h: "md" }),
      r("needHelp"),
      " ",
      /* @__PURE__ */ y.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: r("checkDocumentation") })
    ] })
  ] });
}
function Zw() {
  const [r, e] = X(null);
  return W(() => {
    const t = new Tp(ZC);
    e(t);
  }, []), r ? /* @__PURE__ */ y.jsx(nu, { theme: XC, children: /* @__PURE__ */ y.jsx(Xw, {}) }) : /* @__PURE__ */ y.jsx("div", { children: "Loading..." });
}
const eE = Bb({
  reducer: {
    settings: pw,
    ifcData: jw,
    ifcEntity: Ow,
    bsdd: _w
  }
});
xi.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ y.jsx(jo.StrictMode, { children: /* @__PURE__ */ y.jsx(Nh, { store: eE, children: /* @__PURE__ */ y.jsx(Zw, {}) }) })
);
