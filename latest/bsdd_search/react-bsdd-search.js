var th = Object.defineProperty;
var rh = (r, e, t) => e in r ? th(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => (rh(r, typeof e != "symbol" ? e + "" : e, t), t);
import * as se from "react";
import zo, { createContext as Pr, useContext as sr, useState as Z, useRef as ue, useEffect as W, Fragment as yl, useMemo as ho, useCallback as me, useLayoutEffect as fa, useId as vl, forwardRef as ye, cloneElement as $o, Children as Mi, createElement as xi } from "react";
import * as nh from "react-dom";
import bl, { flushSync as oh, createPortal as ih } from "react-dom";
function ah(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Cl = { exports: {} }, Ko = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sh = zo, ch = Symbol.for("react.element"), lh = Symbol.for("react.fragment"), uh = Object.prototype.hasOwnProperty, dh = sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hh = { key: !0, ref: !0, __self: !0, __source: !0 };
function wl(r, e, t) {
  var n, o = {}, i = null, a = null;
  t !== void 0 && (i = "" + t), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (n in e)
    uh.call(e, n) && !hh.hasOwnProperty(n) && (o[n] = e[n]);
  if (r && r.defaultProps)
    for (n in e = r.defaultProps, e)
      o[n] === void 0 && (o[n] = e[n]);
  return { $$typeof: ch, type: r, key: i, ref: a, props: o, _owner: dh.current };
}
Ko.Fragment = lh;
Ko.jsx = wl;
Ko.jsxs = wl;
Cl.exports = Ko;
var y = Cl.exports, Li = {}, xs = bl;
Li.createRoot = xs.createRoot, Li.hydrateRoot = xs.hydrateRoot;
var Sl = { exports: {} }, El = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn = zo;
function fh(r, e) {
  return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
}
var ph = typeof Object.is == "function" ? Object.is : fh, gh = zn.useSyncExternalStore, mh = zn.useRef, yh = zn.useEffect, vh = zn.useMemo, bh = zn.useDebugValue;
El.useSyncExternalStoreWithSelector = function(r, e, t, n, o) {
  var i = mh(null);
  if (i.current === null) {
    var a = { hasValue: !1, value: null };
    i.current = a;
  } else
    a = i.current;
  i = vh(function() {
    function c(f) {
      if (!l) {
        if (l = !0, u = f, f = n(f), o !== void 0 && a.hasValue) {
          var p = a.value;
          if (o(p, f))
            return h = p;
        }
        return h = f;
      }
      if (p = h, ph(u, f))
        return p;
      var g = n(f);
      return o !== void 0 && o(p, g) ? p : (u = f, h = g);
    }
    var l = !1, u, h, d = t === void 0 ? null : t;
    return [function() {
      return c(e());
    }, d === null ? void 0 : function() {
      return c(d());
    }];
  }, [e, t, n, o]);
  var s = gh(r, i[0], i[1]);
  return yh(function() {
    a.hasValue = !0, a.value = s;
  }, [s]), bh(s), s;
};
Sl.exports = El;
var Ch = Sl.exports, tt = (
  // prettier-ignore
  // @ts-ignore
  "default" in se ? se.default : se
), Ls = Symbol.for("react-redux-context"), Ds = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function wh() {
  if (!tt.createContext)
    return {};
  const r = Ds[Ls] ?? (Ds[Ls] = /* @__PURE__ */ new Map());
  let e = r.get(tt.createContext);
  return e || (e = tt.createContext(
    null
  ), r.set(tt.createContext, e)), e;
}
var rr = /* @__PURE__ */ wh(), Sh = () => {
  throw new Error("uSES not initialized!");
};
function pa(r = rr) {
  return function() {
    return tt.useContext(r);
  };
}
var Tl = /* @__PURE__ */ pa(), Il = Sh, Eh = (r) => {
  Il = r;
}, Th = (r, e) => r === e;
function Ih(r = rr) {
  const e = r === rr ? Tl : pa(r), t = (n, o = {}) => {
    const { equalityFn: i = Th, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o, {
      store: s,
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: h
    } = e();
    tt.useRef(!0);
    const d = tt.useCallback(
      {
        [n.name](p) {
          return n(p);
        }
      }[n.name],
      [n, u, a.stabilityCheck]
    ), f = Il(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      d,
      i
    );
    return tt.useDebugValue(f), f;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Nn = /* @__PURE__ */ Ih();
function _h(r) {
  r();
}
function kh() {
  let r = null, e = null;
  return {
    clear() {
      r = null, e = null;
    },
    notify() {
      _h(() => {
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
var js = {
  notify() {
  },
  get: () => []
};
function Ah(r, e) {
  let t, n = js, o = 0, i = !1;
  function a(g) {
    u();
    const m = n.subscribe(g);
    let C = !1;
    return () => {
      C || (C = !0, m(), h());
    };
  }
  function s() {
    n.notify();
  }
  function c() {
    p.onStateChange && p.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, t || (t = e ? e.addNestedSub(c) : r.subscribe(c), n = kh());
  }
  function h() {
    o--, t && o === 0 && (t(), t = void 0, n.clear(), n = js);
  }
  function d() {
    i || (i = !0, u());
  }
  function f() {
    i && (i = !1, h());
  }
  const p = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: d,
    tryUnsubscribe: f,
    getListeners: () => n
  };
  return p;
}
var Rh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ph = typeof navigator < "u" && navigator.product === "ReactNative", Nh = Rh || Ph ? tt.useLayoutEffect : tt.useEffect;
function Oh({
  store: r,
  context: e,
  children: t,
  serverState: n,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = tt.useMemo(() => {
    const l = Ah(r);
    return {
      store: r,
      subscription: l,
      getServerState: n ? () => n : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [r, n, o, i]), s = tt.useMemo(() => r.getState(), [r]);
  Nh(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== r.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = e || rr;
  return /* @__PURE__ */ tt.createElement(c.Provider, { value: a }, t);
}
var Mh = Oh;
function _l(r = rr) {
  const e = r === rr ? Tl : (
    // @ts-ignore
    pa(r)
  ), t = () => {
    const { store: n } = e();
    return n;
  };
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var xh = /* @__PURE__ */ _l();
function Lh(r = rr) {
  const e = r === rr ? xh : _l(r), t = () => e().dispatch;
  return Object.assign(t, {
    withTypes: () => t
  }), t;
}
var Dh = /* @__PURE__ */ Lh();
Eh(Ch.useSyncExternalStoreWithSelector);
const jh = {
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
let Fh = class Di {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = t.prefix || "i18next:", this.logger = e || jh, this.options = t, this.debug = t.debug;
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
    return new Di(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new Di(this.logger, e);
  }
};
var At = new Fh();
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
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((a) => {
      let [s, c] = a;
      for (let l = 0; l < c; l++)
        s(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((a) => {
      let [s, c] = a;
      for (let l = 0; l < c; l++)
        s.apply(s, [e, ...n]);
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
function Fs(r) {
  return r == null ? "" : "" + r;
}
function Uh(r, e, t) {
  r.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
const Hh = /###/g;
function Sn(r, e, t) {
  function n(s) {
    return s && s.indexOf("###") > -1 ? s.replace(Hh, ".") : s;
  }
  function o() {
    return !r || typeof r == "string";
  }
  const i = typeof e != "string" ? e : e.split(".");
  let a = 0;
  for (; a < i.length - 1; ) {
    if (o())
      return {};
    const s = n(i[a]);
    !r[s] && t && (r[s] = new t()), Object.prototype.hasOwnProperty.call(r, s) ? r = r[s] : r = {}, ++a;
  }
  return o() ? {} : {
    obj: r,
    k: n(i[a])
  };
}
function Us(r, e, t) {
  const {
    obj: n,
    k: o
  } = Sn(r, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[o] = t;
    return;
  }
  let i = e[e.length - 1], a = e.slice(0, e.length - 1), s = Sn(r, a, Object);
  for (; s.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), s = Sn(r, a, Object), s && s.obj && typeof s.obj[`${s.k}.${i}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = t;
}
function Bh(r, e, t, n) {
  const {
    obj: o,
    k: i
  } = Sn(r, e, Object);
  o[i] = o[i] || [], n && (o[i] = o[i].concat(t)), n || o[i].push(t);
}
function fo(r, e) {
  const {
    obj: t,
    k: n
  } = Sn(r, e);
  if (t)
    return t[n];
}
function zh(r, e, t) {
  const n = fo(r, t);
  return n !== void 0 ? n : fo(e, t);
}
function kl(r, e, t) {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in r ? typeof r[n] == "string" || r[n] instanceof String || typeof e[n] == "string" || e[n] instanceof String ? t && (r[n] = e[n]) : kl(r[n], e[n], t) : r[n] = e[n]);
  return r;
}
function Ur(r) {
  return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var $h = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Kh(r) {
  return typeof r == "string" ? r.replace(/[&<>"'\/]/g, (e) => $h[e]) : r;
}
class qh {
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
const Vh = [" ", ",", "?", "!", ";"], Gh = new qh(20);
function Wh(r, e, t) {
  e = e || "", t = t || "";
  const n = Vh.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
  if (n.length === 0)
    return !0;
  const o = Gh.getRegExp(`(${n.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !o.test(r);
  if (!i) {
    const a = r.indexOf(t);
    a > 0 && !o.test(r.substring(0, a)) && (i = !0);
  }
  return i;
}
function ji(r, e) {
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
    let a, s = "";
    for (let c = i; c < n.length; ++c)
      if (c !== i && (s += t), s += n[c], a = o[s], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && c < n.length - 1)
          continue;
        i += c - i + 1;
        break;
      }
    o = a;
  }
  return o;
}
function po(r) {
  return r && r.indexOf("_") > 0 ? r.replace("_", "-") : r;
}
class Hs extends qo {
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
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, a = o.ignoreJSONStructure !== void 0 ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1 ? s = e.split(".") : (s = [e, t], n && (Array.isArray(n) ? s.push(...n) : typeof n == "string" && i ? s.push(...n.split(i)) : s.push(n)));
    const c = fo(this.data, s);
    return !c && !t && !n && e.indexOf(".") > -1 && (e = s[0], t = s[1], n = s.slice(2).join(".")), c || !a || typeof n != "string" ? c : ji(this.data && this.data[e] && this.data[e][t], n, i);
  }
  addResource(e, t, n, o) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [e, t];
    n && (s = s.concat(a ? n.split(a) : n)), e.indexOf(".") > -1 && (s = e.split("."), o = t, t = s[1]), this.addNamespaces(t), Us(this.data, s, o), i.silent || this.emit("added", e, t, n, o);
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
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, s = [e, t];
    e.indexOf(".") > -1 && (s = e.split("."), o = n, n = t, t = s[1]), this.addNamespaces(t);
    let c = fo(this.data, s) || {};
    a.skipCopy || (n = JSON.parse(JSON.stringify(n))), o ? kl(c, n, i) : c = {
      ...c,
      ...n
    }, Us(this.data, s, c), a.silent || this.emit("added", e, t, n);
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
var Al = {
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
const Bs = {};
class go extends qo {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Uh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = At.create("translator");
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
    const a = n && e.indexOf(n) > -1, s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !Wh(e, n, o);
    if (a && !s) {
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
      key: a,
      namespaces: s
    } = this.extractFromKey(e[e.length - 1], t), c = s[s.length - 1], l = t.lng || this.language, u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (u) {
        const w = t.nsSeparator || this.options.nsSeparator;
        return o ? {
          res: `${c}${w}${a}`,
          usedKey: a,
          exactUsedKey: a,
          usedLng: l,
          usedNS: c,
          usedParams: this.getUsedParamsDetails(t)
        } : `${c}${w}${a}`;
      }
      return o ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: l,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(t)
      } : a;
    }
    const h = this.resolve(e, t);
    let d = h && h.res;
    const f = h && h.usedKey || a, p = h && h.exactUsedKey || a, g = Object.prototype.toString.apply(d), m = ["[object Number]", "[object Function]", "[object RegExp]"], C = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays, v = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (v && d && (typeof d != "string" && typeof d != "boolean" && typeof d != "number") && m.indexOf(g) < 0 && !(typeof C == "string" && Array.isArray(d))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, d, {
          ...t,
          ns: s
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return o ? (h.res = w, h.usedParams = this.getUsedParamsDetails(t), h) : w;
      }
      if (i) {
        const w = Array.isArray(d), E = w ? [] : {}, T = w ? p : f;
        for (const k in d)
          if (Object.prototype.hasOwnProperty.call(d, k)) {
            const I = `${T}${i}${k}`;
            E[k] = this.translate(I, {
              ...t,
              joinArrays: !1,
              ns: s
            }), E[k] === I && (E[k] = d[k]);
          }
        d = E;
      }
    } else if (v && typeof C == "string" && Array.isArray(d))
      d = d.join(C), d && (d = this.extendTranslation(d, e, t, n));
    else {
      let w = !1, E = !1;
      const T = t.count !== void 0 && typeof t.count != "string", k = go.hasDefaultValue(t), I = T ? this.pluralResolver.getSuffix(l, t.count, t) : "", D = t.ordinal && T ? this.pluralResolver.getSuffix(l, t.count, {
        ordinal: !1
      }) : "", U = T && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), Y = U && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${I}`] || t[`defaultValue${D}`] || t.defaultValue;
      !this.isValidLookup(d) && k && (w = !0, d = Y), this.isValidLookup(d) || (E = !0, d = a);
      const ae = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && E ? void 0 : d, $ = k && Y !== d && this.options.updateMissing;
      if (E || w || $) {
        if (this.logger.log($ ? "updateKey" : "missingKey", l, c, a, $ ? Y : d), i) {
          const L = this.resolve(a, {
            ...t,
            keySeparator: !1
          });
          L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let q = [];
        const M = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && M && M[0])
          for (let L = 0; L < M.length; L++)
            q.push(M[L]);
        else
          this.options.saveMissingTo === "all" ? q = this.languageUtils.toResolveHierarchy(t.lng || this.language) : q.push(t.lng || this.language);
        const j = (L, H, te) => {
          const Ee = k && te !== d ? te : ae;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(L, c, H, Ee, $, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, c, H, Ee, $, t), this.emit("missingKey", L, c, H, d);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && T ? q.forEach((L) => {
          const H = this.pluralResolver.getSuffixes(L, t);
          U && t[`defaultValue${this.options.pluralSeparator}zero`] && H.indexOf(`${this.options.pluralSeparator}zero`) < 0 && H.push(`${this.options.pluralSeparator}zero`), H.forEach((te) => {
            j([L], a + te, t[`defaultValue${te}`] || Y);
          });
        }) : j(q, a, Y));
      }
      d = this.extendTranslation(d, e, t, h, n), E && d === a && this.options.appendNamespaceToMissingKey && (d = `${c}:${a}`), (E || w) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? d = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}:${a}` : a, w ? d : void 0) : d = this.options.parseMissingKeyHandler(d));
    }
    return o ? (h.res = d, h.usedParams = this.getUsedParamsDetails(t), h) : d;
  }
  extendTranslation(e, t, n, o, i) {
    var a = this;
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
        const d = e.match(this.interpolator.nestingRegexp);
        u = d && d.length;
      }
      let h = n.replace && typeof n.replace != "string" ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (h = {
        ...this.options.interpolation.defaultVariables,
        ...h
      }), e = this.interpolator.interpolate(e, h, n.lng || this.language, n), l) {
        const d = e.match(this.interpolator.nestingRegexp), f = d && d.length;
        u < f && (n.nest = !1);
      }
      !n.lng && this.options.compatibilityAPI !== "v1" && o && o.res && (n.lng = o.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++)
          f[p] = arguments[p];
        return i && i[0] === f[0] && !n.context ? (a.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${t[0]}`), null) : a.translate(...f, t);
      }, n)), n.interpolation && this.interpolator.reset();
    }
    const s = n.postProcess || this.options.postProcess, c = typeof s == "string" ? [s] : s;
    return e != null && c && c.length && n.applyPostProcessor !== !1 && (e = Al.handle(c, e, t, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...o,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n, o, i, a, s;
    return typeof e == "string" && (e = [e]), e.forEach((c) => {
      if (this.isValidLookup(n))
        return;
      const l = this.extractFromKey(c, t), u = l.key;
      o = u;
      let h = l.namespaces;
      this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
      const d = t.count !== void 0 && typeof t.count != "string", f = d && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(), p = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "", g = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
      h.forEach((m) => {
        this.isValidLookup(n) || (s = m, !Bs[`${g[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(s) && (Bs[`${g[0]}-${m}`] = !0, this.logger.warn(`key "${o}" for languages "${g.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), g.forEach((C) => {
          if (this.isValidLookup(n))
            return;
          a = C;
          const v = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(v, u, C, m, t);
          else {
            let w;
            d && (w = this.pluralResolver.getSuffix(C, t.count, t));
            const E = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (d && (v.push(u + w), t.ordinal && w.indexOf(T) === 0 && v.push(u + w.replace(T, this.options.pluralSeparator)), f && v.push(u + E)), p) {
              const k = `${u}${this.options.contextSeparator}${t.context}`;
              v.push(k), d && (v.push(k + w), t.ordinal && w.indexOf(T) === 0 && v.push(k + w.replace(T, this.options.pluralSeparator)), f && v.push(k + E));
            }
          }
          let b;
          for (; b = v.pop(); )
            this.isValidLookup(n) || (i = b, n = this.getResource(C, m, b, t));
        }));
      });
    }), {
      res: n,
      usedKey: o,
      exactUsedKey: i,
      usedLng: a,
      usedNS: s
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
function pi(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
class zs {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = At.create("languageUtils");
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
      return this.options.lowerCaseLng ? n = n.map((o) => o.toLowerCase()) : n.length === 2 ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = pi(n[1].toLowerCase()))) : n.length === 3 && (n[0] = n[0].toLowerCase(), n[1].length === 2 && (n[1] = n[1].toUpperCase()), n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = pi(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = pi(n[2].toLowerCase()))), n.join("-");
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
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e), o = [], i = (a) => {
      a && (this.isSupportedCode(a) ? o.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : typeof e == "string" && i(this.formatLanguageCode(e)), n.forEach((a) => {
      o.indexOf(a) < 0 && i(this.formatLanguageCode(a));
    }), o;
  }
}
let Yh = [{
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
}], Qh = {
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
const Jh = ["v1", "v2", "v3"], Xh = ["v4"], $s = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function Zh() {
  const r = {};
  return Yh.forEach((e) => {
    e.lngs.forEach((t) => {
      r[t] = {
        numbers: e.nr,
        plurals: Qh[e.fc]
      };
    });
  }), r;
}
class ef {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = t, this.logger = At.create("pluralResolver"), (!this.options.compatibilityJSON || Xh.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Zh();
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
    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((o, i) => $s[o] - $s[i]).map((o) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${o}`) : n.numbers.map((o) => this.getSuffix(e, o, t)) : [];
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
    return !Jh.includes(this.options.compatibilityJSON);
  }
}
function Ks(r, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = zh(r, e, t);
  return !i && o && typeof t == "string" && (i = ji(r, t, n), i === void 0 && (i = ji(e, t, n))), i;
}
class tf {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = At.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((t) => t), this.init(e);
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
      prefixEscaped: a,
      suffix: s,
      suffixEscaped: c,
      formatSeparator: l,
      unescapeSuffix: u,
      unescapePrefix: h,
      nestingPrefix: d,
      nestingPrefixEscaped: f,
      nestingSuffix: p,
      nestingSuffixEscaped: g,
      nestingOptionsSeparator: m,
      maxReplaces: C,
      alwaysFormat: v
    } = e.interpolation;
    this.escape = t !== void 0 ? t : Kh, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = o !== void 0 ? o : !1, this.prefix = i ? Ur(i) : a || "{{", this.suffix = s ? Ur(s) : c || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? Ur(d) : f || Ur("$t("), this.nestingSuffix = p ? Ur(p) : g || Ur(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = v !== void 0 ? v : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) => t && t.source === n ? (t.lastIndex = 0, t) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, t, n, o) {
    let i, a, s;
    const c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function l(p) {
      return p.replace(/\$/g, "$$$$");
    }
    const u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const v = Ks(t, c, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, n, {
          ...o,
          ...t,
          interpolationkey: p
        }) : v;
      }
      const g = p.split(this.formatSeparator), m = g.shift().trim(), C = g.join(this.formatSeparator).trim();
      return this.format(Ks(t, c, m, this.options.keySeparator, this.options.ignoreJSONStructure), C, n, {
        ...o,
        ...t,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const h = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler, d = o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => l(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? l(this.escape(p)) : l(p)
    }].forEach((p) => {
      for (s = 0; i = p.regex.exec(e); ) {
        const g = i[1].trim();
        if (a = u(g), a === void 0)
          if (typeof h == "function") {
            const C = h(e, i, o);
            a = typeof C == "string" ? C : "";
          } else if (o && Object.prototype.hasOwnProperty.call(o, g))
            a = "";
          else if (d) {
            a = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`), a = "";
        else
          typeof a != "string" && !this.useRawValueToEscape && (a = Fs(a));
        const m = p.safeValue(a);
        if (e = e.replace(i[0], m), d ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, i, a;
    function s(c, l) {
      const u = this.nestingOptionsSeparator;
      if (c.indexOf(u) < 0)
        return c;
      const h = c.split(new RegExp(`${u}[ ]*{`));
      let d = `{${h[1]}`;
      c = h[0], d = this.interpolate(d, a);
      const f = d.match(/'/g), p = d.match(/"/g);
      (f && f.length % 2 === 0 && !p || p.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        a = JSON.parse(d), l && (a = {
          ...l,
          ...a
        });
      } catch (g) {
        return this.logger.warn(`failed parsing options string in nesting for key ${c}`, g), `${c}${u}${d}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, c;
    }
    for (; o = this.nestingRegexp.exec(e); ) {
      let c = [];
      a = {
        ...n
      }, a = a.replace && typeof a.replace != "string" ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let l = !1;
      if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
        const u = o[1].split(this.formatSeparator).map((h) => h.trim());
        o[1] = u.shift(), c = u, l = !0;
      }
      if (i = t(s.call(this, o[1].trim(), a), a), i && o[0] === e && typeof i != "string")
        return i;
      typeof i != "string" && (i = Fs(i)), i || (this.logger.warn(`missed to resolve ${o[1]} for nesting ${e}`), i = ""), l && (i = c.reduce((u, h) => this.format(u, h, n.lng, {
        ...n,
        interpolationkey: o[1].trim()
      }), i.trim())), e = e.replace(o[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
function rf(r) {
  let e = r.toLowerCase().trim();
  const t = {};
  if (r.indexOf("(") > -1) {
    const n = r.split("(");
    e = n[0].toLowerCase().trim();
    const o = n[1].substring(0, n[1].length - 1);
    e === "currency" && o.indexOf(":") < 0 ? t.currency || (t.currency = o.trim()) : e === "relativetime" && o.indexOf(":") < 0 ? t.range || (t.range = o.trim()) : o.split(";").forEach((a) => {
      if (a) {
        const [s, ...c] = a.split(":"), l = c.join(":").trim().replace(/^'+|'+$/g, ""), u = s.trim();
        t[u] || (t[u] = l), l === "false" && (t[u] = !1), l === "true" && (t[u] = !0), isNaN(l) || (t[u] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: t
  };
}
function Hr(r) {
  const e = {};
  return function(n, o, i) {
    const a = o + JSON.stringify(i);
    let s = e[a];
    return s || (s = r(po(o), i), e[a] = s), s(n);
  };
}
class nf {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = At.create("formatter"), this.options = e, this.formats = {
      number: Hr((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n
        });
        return (i) => o.format(i);
      }),
      currency: Hr((t, n) => {
        const o = new Intl.NumberFormat(t, {
          ...n,
          style: "currency"
        });
        return (i) => o.format(i);
      }),
      datetime: Hr((t, n) => {
        const o = new Intl.DateTimeFormat(t, {
          ...n
        });
        return (i) => o.format(i);
      }),
      relativetime: Hr((t, n) => {
        const o = new Intl.RelativeTimeFormat(t, {
          ...n
        });
        return (i) => o.format(i, n.range || "day");
      }),
      list: Hr((t, n) => {
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
    this.formats[e.toLowerCase().trim()] = Hr(t);
  }
  format(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((s, c) => {
      const {
        formatName: l,
        formatOptions: u
      } = rf(c);
      if (this.formats[l]) {
        let h = s;
        try {
          const d = o && o.formatParams && o.formatParams[o.interpolationkey] || {}, f = d.locale || d.lng || o.locale || o.lng || n;
          h = this.formats[l](s, f, {
            ...u,
            ...o,
            ...d
          });
        } catch (d) {
          this.logger.warn(d);
        }
        return h;
      } else
        this.logger.warn(`there was no format function for ${l}`);
      return s;
    }, e);
  }
}
function of(r, e) {
  r.pending[e] !== void 0 && (delete r.pending[e], r.pendingCount--);
}
class af extends qo {
  constructor(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = o, this.logger = At.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = o.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = o.maxRetries >= 0 ? o.maxRetries : 5, this.retryTimeout = o.retryTimeout >= 1 ? o.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, o.backend, o);
  }
  queueLoad(e, t, n, o) {
    const i = {}, a = {}, s = {}, c = {};
    return e.forEach((l) => {
      let u = !0;
      t.forEach((h) => {
        const d = `${l}|${h}`;
        !n.reload && this.store.hasResourceBundle(l, h) ? this.state[d] = 2 : this.state[d] < 0 || (this.state[d] === 1 ? a[d] === void 0 && (a[d] = !0) : (this.state[d] = 1, u = !1, a[d] === void 0 && (a[d] = !0), i[d] === void 0 && (i[d] = !0), c[h] === void 0 && (c[h] = !0)));
      }), u || (s[l] = !0);
    }), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: o
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(c)
    };
  }
  loaded(e, t, n) {
    const o = e.split("|"), i = o[0], a = o[1];
    t && this.emit("failedLoading", i, a, t), n && this.store.addResourceBundle(i, a, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = t ? -1 : 2;
    const s = {};
    this.queue.forEach((c) => {
      Bh(c.loaded, [i], a), of(c, e), t && c.errors.push(t), c.pendingCount === 0 && !c.done && (Object.keys(c.loaded).forEach((l) => {
        s[l] || (s[l] = {});
        const u = c.loaded[l];
        u.length && u.forEach((h) => {
          s[l][h] === void 0 && (s[l][h] = !0);
        });
      }), c.done = !0, c.errors.length ? c.callback(c.errors) : c.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((c) => !c.done);
  }
  read(e, t, n) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length)
      return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: o,
        wait: i,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const s = (l, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const h = this.waitingReads.shift();
        this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
      }
      if (l && u && o < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, t, n, o + 1, i * 2, a);
        }, i);
        return;
      }
      a(l, u);
    }, c = this.backend[n].bind(this.backend);
    if (c.length === 2) {
      try {
        const l = c(e, t);
        l && typeof l.then == "function" ? l.then((u) => s(null, u)).catch(s) : s(null, l);
      } catch (l) {
        s(l);
      }
      return;
    }
    return c(e, t, s);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
    const i = this.queueLoad(e, t, n, o);
    if (!i.toLoad.length)
      return i.pending.length || o(), null;
    i.toLoad.forEach((a) => {
      this.loadOne(a);
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
    this.read(o, i, "read", void 0, void 0, (a, s) => {
      a && this.logger.warn(`${t}loading namespace ${i} for language ${o} failed`, a), !a && s && this.logger.log(`${t}loaded namespace ${i} for language ${o}`, s), this.loaded(e, a, s);
    });
  }
  saveMissing(e, t, n, o, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
      this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend && this.backend.create) {
        const c = {
          ...a,
          isUpdate: i
        }, l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let u;
            l.length === 5 ? u = l(e, t, n, o, c) : u = l(e, t, n, o), u && typeof u.then == "function" ? u.then((h) => s(null, h)).catch(s) : s(null, u);
          } catch (u) {
            s(u);
          }
        else
          l(e, t, n, o, s, c);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, o);
    }
  }
}
function qs() {
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
function Vs(r) {
  return typeof r.ns == "string" && (r.ns = [r.ns]), typeof r.fallbackLng == "string" && (r.fallbackLng = [r.fallbackLng]), typeof r.fallbackNS == "string" && (r.fallbackNS = [r.fallbackNS]), r.supportedLngs && r.supportedLngs.indexOf("cimode") < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), r;
}
function Zn() {
}
function sf(r) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((t) => {
    typeof r[t] == "function" && (r[t] = r[t].bind(r));
  });
}
class On extends qo {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Vs(e), this.services = {}, this.logger = At, this.modules = {
      external: []
    }, sf(this), t && !this.isInitialized && !e.isClone) {
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
    const o = qs();
    this.options = {
      ...o,
      ...this.options,
      ...Vs(t)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...o.interpolation,
      ...this.options.interpolation
    }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    function i(u) {
      return u ? typeof u == "function" ? new u() : u : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? At.init(i(this.modules.logger), this.options) : At.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = nf);
      const h = new zs(this.options);
      this.store = new Hs(this.options.resources, this.options);
      const d = this.services;
      d.logger = At, d.resourceStore = this.store, d.languageUtils = h, d.pluralResolver = new ef(h, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === o.interpolation.format) && (d.formatter = i(u), d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new tf(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new af(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", function(f) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new go(this.services, this.options), this.translator.on("*", function(f) {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), m = 1; m < p; m++)
          g[m - 1] = arguments[m];
        e.emit(f, ...g);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = Zn), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
      const u = (h, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), c.resolve(d), n(h, d);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), c;
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zn;
    const o = typeof e == "string" ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (o && o.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return n();
      const i = [], a = (s) => {
        if (!s || s === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(s).forEach((l) => {
          l !== "cimode" && i.indexOf(l) < 0 && i.push(l);
        });
      };
      o ? a(o) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((c) => a(c)), this.options.preload && this.options.preload.forEach((s) => a(s)), this.services.backendConnector.load(i, this.options.ns, (s) => {
        !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(s);
      });
    } else
      n(null);
  }
  reloadResources(e, t, n) {
    const o = pn();
    return e || (e = this.languages), t || (t = this.options.ns), n || (n = Zn), this.services.backendConnector.reload(e, t, (i) => {
      o.resolve(), n(i);
    }), o;
  }
  use(e) {
    if (!e)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && Al.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
    }, a = (c, l) => {
      l ? (i(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, o.resolve(function() {
        return n.t(...arguments);
      }), t && t(c, function() {
        return n.t(...arguments);
      });
    }, s = (c) => {
      !e && !c && this.services.languageDetector && (c = []);
      const l = typeof c == "string" ? c : this.services.languageUtils.getBestMatchFromCodes(c);
      l && (this.language || i(l), this.translator.language || this.translator.changeLanguage(l), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(l)), this.loadResources(l, (u) => {
        a(u, l);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? s(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e), o;
  }
  getFixedT(e, t, n) {
    var o = this;
    const i = function(a, s) {
      let c;
      if (typeof s != "object") {
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), h = 2; h < l; h++)
          u[h - 2] = arguments[h];
        c = o.options.overloadTranslationOptionHandler([a, s].concat(u));
      } else
        c = {
          ...s
        };
      c.lng = c.lng || i.lng, c.lngs = c.lngs || i.lngs, c.ns = c.ns || i.ns, c.keyPrefix = c.keyPrefix || n || i.keyPrefix;
      const d = o.options.keySeparator || ".";
      let f;
      return c.keyPrefix && Array.isArray(a) ? f = a.map((p) => `${c.keyPrefix}${d}${p}`) : f = c.keyPrefix ? `${c.keyPrefix}${d}${a}` : a, o.t(f, c);
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
    const a = (s, c) => {
      const l = this.services.backendConnector.state[`${s}|${c}`];
      return l === -1 || l === 2;
    };
    if (t.precheck) {
      const s = t.precheck(this, a);
      if (s !== void 0)
        return s;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(n, e) && (!o || a(i, e)));
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
    const o = this.options.preload || [], i = e.filter((a) => o.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = o.concat(i), this.loadResources((a) => {
      n.resolve(), t && t(a);
    }), n) : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e)
      return "rtl";
    const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = this.services && this.services.languageUtils || new zs(qs());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
    return new On(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zn;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const o = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new On(o);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((s) => {
      i[s] = this[s];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, n && (i.store = new Hs(this.store.data, o), i.services.resourceStore = i.store), i.translator = new go(i.services, o), i.translator.on("*", function(s) {
      for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++)
        l[u - 1] = arguments[u];
      i.emit(s, ...l);
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
function cf() {
  if (console && console.warn) {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e);
  }
}
const Gs = {};
function Fi() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  typeof e[0] == "string" && Gs[e[0]] || (typeof e[0] == "string" && (Gs[e[0]] = /* @__PURE__ */ new Date()), cf(...e));
}
const Rl = (r, e) => () => {
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
function Ws(r, e, t) {
  r.loadNamespaces(e, Rl(r, t));
}
function Ys(r, e, t, n) {
  typeof t == "string" && (t = [t]), t.forEach((o) => {
    r.options.ns.indexOf(o) < 0 && r.options.ns.push(o);
  }), r.loadLanguages(e, Rl(r, n));
}
function lf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = e.languages[0], o = e.options ? e.options.fallbackLng : !1, i = e.languages[e.languages.length - 1];
  if (n.toLowerCase() === "cimode")
    return !0;
  const a = (s, c) => {
    const l = e.services.backendConnector.state[`${s}|${c}`];
    return l === -1 || l === 2;
  };
  return t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !a(e.isLanguageChangingTo, r) ? !1 : !!(e.hasResourceBundle(n, r) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || a(n, r) && (!o || a(i, r)));
}
function uf(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length ? (Fi("i18n.languages were undefined or empty", e.languages), !0) : e.options.ignoreJSONStructure !== void 0 ? e.hasLoadedNamespace(r, {
    lng: t.lng,
    precheck: (o, i) => {
      if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !i(o.isLanguageChangingTo, r))
        return !1;
    }
  }) : lf(r, e, t);
}
const df = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, hf = {
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
}, ff = (r) => hf[r], pf = (r) => r.replace(df, ff);
let Ui = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: pf
};
function gf() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Ui = {
    ...Ui,
    ...r
  };
}
function mf() {
  return Ui;
}
let Pl;
function yf(r) {
  Pl = r;
}
function vf() {
  return Pl;
}
const bf = {
  type: "3rdParty",
  init(r) {
    gf(r.options.react), yf(r);
  }
}, Cf = Pr();
class wf {
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
const Sf = (r, e) => {
  const t = ue();
  return W(() => {
    t.current = e ? t.current : r;
  }, [r, e]), t.current;
};
function ga(r) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: t
  } = e, {
    i18n: n,
    defaultNS: o
  } = sr(Cf) || {}, i = t || n || vf();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new wf()), !i) {
    Fi("You will need to pass in an i18next instance by using initReactI18next");
    const b = (E, T) => typeof T == "string" ? T : T && typeof T == "object" && typeof T.defaultValue == "string" ? T.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, w = [b, {}, !1];
    return w.t = b, w.i18n = {}, w.ready = !1, w;
  }
  i.options.react && i.options.react.wait !== void 0 && Fi("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...mf(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: s,
    keyPrefix: c
  } = a;
  let l = r || o || i.options && i.options.defaultNS;
  l = typeof l == "string" ? [l] : l || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(l);
  const u = (i.isInitialized || i.initializedStoreOnce) && l.every((b) => uf(b, i, a));
  function h() {
    return i.getFixedT(e.lng || null, a.nsMode === "fallback" ? l : l[0], c);
  }
  const [d, f] = Z(h);
  let p = l.join();
  e.lng && (p = `${e.lng}${p}`);
  const g = Sf(p), m = ue(!0);
  W(() => {
    const {
      bindI18n: b,
      bindI18nStore: w
    } = a;
    m.current = !0, !u && !s && (e.lng ? Ys(i, e.lng, l, () => {
      m.current && f(h);
    }) : Ws(i, l, () => {
      m.current && f(h);
    })), u && g && g !== p && m.current && f(h);
    function E() {
      m.current && f(h);
    }
    return b && i && i.on(b, E), w && i && i.store.on(w, E), () => {
      m.current = !1, b && i && b.split(" ").forEach((T) => i.off(T, E)), w && i && w.split(" ").forEach((T) => i.store.off(T, E));
    };
  }, [i, p]);
  const C = ue(!0);
  W(() => {
    m.current && !C.current && f(h), C.current = !1;
  }, [i, c]);
  const v = [d, i, u];
  if (v.t = d, v.i18n = i, v.ready = u, u || !u && !s)
    return v;
  throw new Promise((b) => {
    e.lng ? Ys(i, e.lng, l, () => b()) : Ws(i, l, () => b());
  });
}
const Ef = {
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
}, Tf = {
  translation: Ef
}, If = {
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
}, _f = {
  translation: If
}, kf = {
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
}, Af = {
  translation: kf
}, Rf = {
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
}, Pf = {
  translation: Rf
}, Nf = {
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
}, Of = {
  translation: Nf
}, Mf = {
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
}, xf = {
  translation: Mf
}, Lf = {
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
}, Df = {
  translation: Lf
}, jf = {
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
}, Ff = {
  translation: jf
}, Uf = {
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
}, Hf = {
  translation: Uf
}, Bf = {
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
}, zf = {
  translation: Bf
}, $f = {
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
}, Kf = {
  translation: $f
}, qf = {
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
}, Vf = {
  translation: qf
}, Gf = {
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
}, Wf = {
  translation: Gf
}, Yf = {
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
}, Qf = {
  translation: Yf
}, Jf = {
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
}, Xf = {
  translation: Jf
}, Zf = {
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
}, ep = {
  translation: Zf
}, tp = {
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
}, rp = {
  translation: tp
}, np = {
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
}, op = {
  translation: np
}, ip = {
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
}, ap = {
  translation: ip
}, sp = {
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
}, cp = {
  translation: sp
}, lp = {
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
}, up = {
  translation: lp
}, dp = {
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
}, hp = {
  translation: dp
}, fp = {
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
}, pp = {
  translation: fp
}, gp = {
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
}, mp = {
  translation: gp
}, yp = {
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
}, vp = {
  translation: yp
}, bp = {
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
}, Cp = {
  translation: bp
};
xe.use(bf).init({
  resources: {
    "en-GB": Of,
    "nl-NL": ep,
    "ar-SA": Tf,
    "zh-CN": Cp,
    "hr-HR": zf,
    "cs-CZ": _f,
    "da-DK": Af,
    "fi-FI": Df,
    "fr-FR": Ff,
    "de-DE": Pf,
    "hi-IN": Hf,
    "is-IS": Kf,
    "it-IT": Vf,
    "ja-JP": Wf,
    "ko-KR": Qf,
    "lt-LT": Xf,
    "no-NO": rp,
    "pl-PL": op,
    "pt-PT": cp,
    "pt-BR": ap,
    "ro-RO": up,
    "sr-SP": pp,
    "sl-SI": hp,
    "es-ES": xf,
    "sv-SE": mp,
    "tr-TR": vp
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
function Le(r, e) {
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
function Qs(r, e) {
  var t = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(r); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[o]) && (t[n[o]] = r[n[o]]);
  return t;
}
function R(r, e, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(n.next(u));
      } catch (h) {
        a(h);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (h) {
        a(h);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((n = n.apply(r, e || [])).next());
  });
}
function P(r, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
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
function wp(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var n = t.call(r), o, i = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return i;
}
function ma() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(wp(arguments[e]));
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
var Bi = function(r, e) {
  return Bi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Bi(r, e);
};
function Ze(r, e) {
  Bi(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function ne(r, e, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(u) {
      try {
        l(n.next(u));
      } catch (h) {
        a(h);
      }
    }
    function c(u) {
      try {
        l(n.throw(u));
      } catch (h) {
        a(h);
      }
    }
    function l(u) {
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((n = n.apply(r, e || [])).next());
  });
}
function oe(r, e) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
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
function Vo() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var n = Array(r), o = 0, e = 0; e < t; e++)
    for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
      n[o] = i[a];
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
}, $n = [
  S.OPENID_SCOPE,
  S.PROFILE_SCOPE,
  S.OFFLINE_ACCESS_SCOPE
], Js = Vo($n, [
  S.EMAIL_SCOPE
]), ot;
(function(r) {
  r.CONTENT_TYPE = "Content-Type", r.RETRY_AFTER = "Retry-After", r.CCS_HEADER = "X-AnchorMailbox", r.WWWAuthenticate = "WWW-Authenticate", r.AuthenticationInfo = "Authentication-Info", r.X_MS_REQUEST_ID = "x-ms-request-id", r.X_MS_HTTP_VERSION = "x-ms-httpver";
})(ot || (ot = {}));
var _e;
(function(r) {
  r.ID_TOKEN = "idtoken", r.CLIENT_INFO = "client.info", r.ADAL_ID_TOKEN = "adal.idtoken", r.ERROR = "error", r.ERROR_DESC = "error.description", r.ACTIVE_ACCOUNT = "active-account", r.ACTIVE_ACCOUNT_FILTERS = "active-account-filters";
})(_e || (_e = {}));
var wr;
(function(r) {
  r.COMMON = "common", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers";
})(wr || (wr = {}));
var ie;
(function(r) {
  r.CLIENT_ID = "client_id", r.REDIRECT_URI = "redirect_uri", r.RESPONSE_TYPE = "response_type", r.RESPONSE_MODE = "response_mode", r.GRANT_TYPE = "grant_type", r.CLAIMS = "claims", r.SCOPE = "scope", r.ERROR = "error", r.ERROR_DESCRIPTION = "error_description", r.ACCESS_TOKEN = "access_token", r.ID_TOKEN = "id_token", r.REFRESH_TOKEN = "refresh_token", r.EXPIRES_IN = "expires_in", r.STATE = "state", r.NONCE = "nonce", r.PROMPT = "prompt", r.SESSION_STATE = "session_state", r.CLIENT_INFO = "client_info", r.CODE = "code", r.CODE_CHALLENGE = "code_challenge", r.CODE_CHALLENGE_METHOD = "code_challenge_method", r.CODE_VERIFIER = "code_verifier", r.CLIENT_REQUEST_ID = "client-request-id", r.X_CLIENT_SKU = "x-client-SKU", r.X_CLIENT_VER = "x-client-VER", r.X_CLIENT_OS = "x-client-OS", r.X_CLIENT_CPU = "x-client-CPU", r.X_CLIENT_CURR_TELEM = "x-client-current-telemetry", r.X_CLIENT_LAST_TELEM = "x-client-last-telemetry", r.X_MS_LIB_CAPABILITY = "x-ms-lib-capability", r.X_APP_NAME = "x-app-name", r.X_APP_VER = "x-app-ver", r.POST_LOGOUT_URI = "post_logout_redirect_uri", r.ID_TOKEN_HINT = "id_token_hint", r.DEVICE_CODE = "device_code", r.CLIENT_SECRET = "client_secret", r.CLIENT_ASSERTION = "client_assertion", r.CLIENT_ASSERTION_TYPE = "client_assertion_type", r.TOKEN_TYPE = "token_type", r.REQ_CNF = "req_cnf", r.OBO_ASSERTION = "assertion", r.REQUESTED_TOKEN_USE = "requested_token_use", r.ON_BEHALF_OF = "on_behalf_of", r.FOCI = "foci", r.CCS_HEADER = "X-AnchorMailbox", r.RETURN_SPA_CODE = "return_spa_code", r.NATIVE_BROKER = "nativebroker", r.LOGOUT_HINT = "logout_hint";
})(ie || (ie = {}));
var Kr;
(function(r) {
  r.ACCESS_TOKEN = "access_token", r.XMS_CC = "xms_cc";
})(Kr || (Kr = {}));
var Ue = {
  LOGIN: "login",
  SELECT_ACCOUNT: "select_account",
  CONSENT: "consent",
  NONE: "none",
  CREATE: "create",
  NO_SESSION: "no_session"
}, En;
(function(r) {
  r.ACCOUNT = "account", r.SID = "sid", r.LOGIN_HINT = "login_hint", r.ID_TOKEN = "id_token", r.DOMAIN_HINT = "domain_hint", r.ORGANIZATIONS = "organizations", r.CONSUMERS = "consumers", r.ACCOUNT_ID = "accountIdentifier", r.HOMEACCOUNT_ID = "homeAccountIdentifier";
})(En || (En = {}));
var Xs = {
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
var br;
(function(r) {
  r.MSSTS_ACCOUNT_TYPE = "MSSTS", r.ADFS_ACCOUNT_TYPE = "ADFS", r.MSAV1_ACCOUNT_TYPE = "MSA", r.GENERIC_ACCOUNT_TYPE = "Generic";
})(br || (br = {}));
var ke;
(function(r) {
  r.CACHE_KEY_SEPARATOR = "-", r.CLIENT_INFO_SEPARATOR = ".";
})(ke || (ke = {}));
var Q;
(function(r) {
  r.ID_TOKEN = "IdToken", r.ACCESS_TOKEN = "AccessToken", r.ACCESS_TOKEN_WITH_AUTH_SCHEME = "AccessToken_With_AuthScheme", r.REFRESH_TOKEN = "RefreshToken";
})(Q || (Q = {}));
var Tn;
(function(r) {
  r[r.ADFS = 1001] = "ADFS", r[r.MSA = 1002] = "MSA", r[r.MSSTS = 1003] = "MSSTS", r[r.GENERIC = 1004] = "GENERIC", r[r.ACCESS_TOKEN = 2001] = "ACCESS_TOKEN", r[r.REFRESH_TOKEN = 2002] = "REFRESH_TOKEN", r[r.ID_TOKEN = 2003] = "ID_TOKEN", r[r.APP_METADATA = 3001] = "APP_METADATA", r[r.UNDEFINED = 9999] = "UNDEFINED";
})(Tn || (Tn = {}));
var zi = "appmetadata", Sp = "client_info", In = "1", _n = {
  CACHE_KEY: "authority-metadata",
  REFRESH_TIME_SECONDS: 3600 * 24
  // 24 Hours
}, dt;
(function(r) {
  r.CONFIG = "config", r.CACHE = "cache", r.NETWORK = "network", r.HARDCODED_VALUES = "hardcoded_values";
})(dt || (dt = {}));
var Ne = {
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
}, ge;
(function(r) {
  r.BEARER = "Bearer", r.POP = "pop", r.SSH = "ssh-cert";
})(ge || (ge = {}));
var kn = {
  // Default time to throttle RequestThumbprint in seconds
  DEFAULT_THROTTLE_TIME_SECONDS: 60,
  // Default maximum time to throttle in seconds, overrides what the server sends back
  DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
  // Prefix for storing throttling entries
  THROTTLING_PREFIX: "throttling",
  // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
  X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
}, Zs = {
  INVALID_GRANT_ERROR: "invalid_grant",
  CLIENT_MISMATCH_ERROR: "client_mismatch"
}, vo;
(function(r) {
  r.username = "username", r.password = "password";
})(vo || (vo = {}));
var qr;
(function(r) {
  r[r.httpSuccess = 200] = "httpSuccess", r[r.httpBadRequest = 400] = "httpBadRequest";
})(qr || (qr = {}));
var Jt;
(function(r) {
  r.FAILED_AUTO_DETECTION = "1", r.INTERNAL_CACHE = "2", r.ENVIRONMENT_VARIABLE = "3", r.IMDS = "4";
})(Jt || (Jt = {}));
var An;
(function(r) {
  r.CONFIGURED_MATCHES_DETECTED = "1", r.CONFIGURED_NO_AUTO_DETECTION = "2", r.CONFIGURED_NOT_DETECTED = "3", r.AUTO_DETECTION_REQUESTED_SUCCESSFUL = "4", r.AUTO_DETECTION_REQUESTED_FAILED = "5";
})(An || (An = {}));
var Zt;
(function(r) {
  r.NO_CACHE_HIT = "0", r.FORCE_REFRESH = "1", r.NO_CACHED_ACCESS_TOKEN = "2", r.CACHED_ACCESS_TOKEN_EXPIRED = "3", r.REFRESH_CACHED_ACCESS_TOKEN = "4", r.CLAIMS_REQUESTED_CACHE_SKIPPED = "5";
})(Zt || (Zt = {}));
var $i;
(function(r) {
  r.Jwt = "JWT", r.Jwk = "JWK", r.Pop = "pop";
})($i || ($i = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var eo = {
  unexpectedError: {
    code: "unexpected_error",
    desc: "Unexpected error in authentication."
  },
  postRequestFailed: {
    code: "post_request_failed",
    desc: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
  }
}, V = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n, o) {
      var i = this, a = n ? t + ": " + n : t;
      return i = r.call(this, a) || this, Object.setPrototypeOf(i, e.prototype), i.errorCode = t || S.EMPTY_STRING, i.errorMessage = n || S.EMPTY_STRING, i.subError = o || S.EMPTY_STRING, i.name = "AuthError", i;
    }
    return e.prototype.setCorrelationId = function(t) {
      this.correlationId = t;
    }, e.createUnexpectedError = function(t) {
      return new e(eo.unexpectedError.code, eo.unexpectedError.desc + ": " + t);
    }, e.createPostRequestFailed = function(t) {
      return new e(eo.postRequestFailed.code, eo.postRequestFailed.desc + ": " + t);
    }, e;
  }(Error)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var bo = {
  createNewGuid: function() {
    var r = "Crypto interface - createNewGuid() has not been implemented";
    throw V.createUnexpectedError(r);
  },
  base64Decode: function() {
    var r = "Crypto interface - base64Decode() has not been implemented";
    throw V.createUnexpectedError(r);
  },
  base64Encode: function() {
    var r = "Crypto interface - base64Encode() has not been implemented";
    throw V.createUnexpectedError(r);
  },
  generatePkceCodes: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Crypto interface - generatePkceCodes() has not been implemented", V.createUnexpectedError(r);
      });
    });
  },
  getPublicKeyThumbprint: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Crypto interface - getPublicKeyThumbprint() has not been implemented", V.createUnexpectedError(r);
      });
    });
  },
  removeTokenBindingKey: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Crypto interface - removeTokenBindingKey() has not been implemented", V.createUnexpectedError(r);
      });
    });
  },
  clearKeystore: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Crypto interface - clearKeystore() has not been implemented", V.createUnexpectedError(r);
      });
    });
  },
  signJwt: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Crypto interface - signJwt() has not been implemented", V.createUnexpectedError(r);
      });
    });
  },
  hashString: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Crypto interface - hashString() has not been implemented", V.createUnexpectedError(r);
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
}, z = (
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
  }(V)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var F = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeAuthToken = function(e) {
      if (r.isEmpty(e))
        throw z.createTokenNullOrEmptyError(e);
      var t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/, n = t.exec(e);
      if (!n || n.length < 4)
        throw z.createTokenParsingError("Given token is malformed: " + JSON.stringify(e));
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
          var a = i.split(/=(.+)/g, 2), s = a[0], c = a[1];
          s && c && (t[o(s)] = o(c));
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
var we;
(function(r) {
  r[r.Error = 0] = "Error", r[r.Warning = 1] = "Warning", r[r.Info = 2] = "Info", r[r.Verbose = 3] = "Verbose", r[r.Trace = 4] = "Trace";
})(we || (we = {}));
var ya = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.level = we.Info;
      var o = function() {
      }, i = e || r.createDefaultLoggerOptions();
      this.localCallback = i.loggerCallback || o, this.piiLoggingEnabled = i.piiLoggingEnabled || !1, this.level = typeof i.logLevel == "number" ? i.logLevel : we.Info, this.correlationId = i.correlationId || S.EMPTY_STRING, this.packageName = t || S.EMPTY_STRING, this.packageVersion = n || S.EMPTY_STRING;
    }
    return r.createDefaultLoggerOptions = function() {
      return {
        loggerCallback: function() {
        },
        piiLoggingEnabled: !1,
        logLevel: we.Info
      };
    }, r.prototype.clone = function(e, t, n) {
      return new r({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: n || this.correlationId }, e, t);
    }, r.prototype.logMessage = function(e, t) {
      if (!(t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii)) {
        var n = (/* @__PURE__ */ new Date()).toUTCString(), o;
        F.isEmpty(t.correlationId) ? F.isEmpty(this.correlationId) ? o = "[" + n + "]" : o = "[" + n + "] : [" + this.correlationId + "]" : o = "[" + n + "] : [" + t.correlationId + "]";
        var i = o + " : " + this.packageName + "@" + this.packageVersion + " : " + we[t.logLevel] + " - " + e;
        this.executeCallback(t.logLevel, i, t.containsPii || !1);
      }
    }, r.prototype.executeCallback = function(e, t, n) {
      this.localCallback && this.localCallback(e, t, n);
    }, r.prototype.error = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Error,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.errorPii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Error,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.warning = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Warning,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.warningPii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Warning,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.info = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Info,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.infoPii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Info,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.verbose = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Verbose,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.verbosePii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Verbose,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.trace = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Trace,
        containsPii: !1,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.tracePii = function(e, t) {
      this.logMessage(e, {
        logLevel: we.Trace,
        containsPii: !0,
        correlationId: t || S.EMPTY_STRING
      });
    }, r.prototype.isPiiLoggingEnabled = function() {
      return this.piiLoggingEnabled || !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Nl = "@azure/msal-common", va = "13.3.3";
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Mn;
(function(r) {
  r[r.None = 0] = "None", r.AzurePublic = "https://login.microsoftonline.com", r.AzurePpe = "https://login.windows-ppe.net", r.AzureChina = "https://login.chinacloudapi.cn", r.AzureGermany = "https://login.microsoftonline.de", r.AzureUsGovernment = "https://login.microsoftonline.us";
})(Mn || (Mn = {}));
/*! @azure/msal-common v13.3.3 2024-06-06 */
var re = {
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
}, be = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "ClientConfigurationError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(re.redirectUriNotSet.code, re.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(re.postLogoutUriNotSet.code, re.postLogoutUriNotSet.desc);
    }, e.createClaimsRequestParsingError = function(t) {
      return new e(re.claimsRequestParsingError.code, re.claimsRequestParsingError.desc + " Given value: " + t);
    }, e.createInsecureAuthorityUriError = function(t) {
      return new e(re.authorityUriInsecure.code, re.authorityUriInsecure.desc + " Given URI: " + t);
    }, e.createUrlParseError = function(t) {
      return new e(re.urlParseError.code, re.urlParseError.desc + " Given Error: " + t);
    }, e.createUrlEmptyError = function() {
      return new e(re.urlEmptyError.code, re.urlEmptyError.desc);
    }, e.createEmptyScopesArrayError = function() {
      return new e(re.emptyScopesError.code, "" + re.emptyScopesError.desc);
    }, e.createClientIdSingleScopeError = function(t) {
      return new e(re.clientIdSingleScopeError.code, re.clientIdSingleScopeError.desc + " Given Scopes: " + t);
    }, e.createInvalidPromptError = function(t) {
      return new e(re.invalidPrompt.code, re.invalidPrompt.desc + " Given value: " + t);
    }, e.createInvalidClaimsRequestError = function() {
      return new e(re.invalidClaimsRequest.code, re.invalidClaimsRequest.desc);
    }, e.createEmptyLogoutRequestError = function() {
      return new e(re.logoutRequestEmptyError.code, re.logoutRequestEmptyError.desc);
    }, e.createEmptyTokenRequestError = function() {
      return new e(re.tokenRequestEmptyError.code, re.tokenRequestEmptyError.desc);
    }, e.createInvalidCodeChallengeMethodError = function() {
      return new e(re.invalidCodeChallengeMethod.code, re.invalidCodeChallengeMethod.desc);
    }, e.createInvalidCodeChallengeParamsError = function() {
      return new e(re.invalidCodeChallengeParams.code, re.invalidCodeChallengeParams.desc);
    }, e.createInvalidCloudDiscoveryMetadataError = function() {
      return new e(re.invalidCloudDiscoveryMetadata.code, re.invalidCloudDiscoveryMetadata.desc);
    }, e.createInvalidAuthorityMetadataError = function() {
      return new e(re.invalidAuthorityMetadata.code, re.invalidAuthorityMetadata.desc);
    }, e.createUntrustedAuthorityError = function() {
      return new e(re.untrustedAuthority.code, re.untrustedAuthority.desc);
    }, e.createInvalidAzureCloudInstanceError = function() {
      return new e(re.invalidAzureCloudInstance.code, re.invalidAzureCloudInstance.desc);
    }, e.createMissingSshJwkError = function() {
      return new e(re.missingSshJwk.code, re.missingSshJwk.desc);
    }, e.createMissingSshKidError = function() {
      return new e(re.missingSshKid.code, re.missingSshKid.desc);
    }, e.createMissingNonceAuthenticationHeadersError = function() {
      return new e(re.missingNonceAuthenticationHeader.code, re.missingNonceAuthenticationHeader.desc);
    }, e.createInvalidAuthenticationHeaderError = function(t, n) {
      return new e(re.invalidAuthenticationHeader.code, re.invalidAuthenticationHeader.desc + ". Invalid header: " + t + ". Details: " + n);
    }, e.createAuthorityMismatchError = function() {
      return new e(re.authorityMismatch.code, re.authorityMismatch.desc);
    }, e;
  }(z)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var je = (
  /** @class */
  function() {
    function r(e) {
      var t = this, n = e ? F.trimArrayEntries(Vo(e)) : [], o = n ? F.removeEmptyStringsFromArray(n) : [];
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
        throw be.createEmptyScopesArrayError();
    }, r.prototype.containsScope = function(e) {
      var t = this.printScopesLowerCase().split(" "), n = new r(t);
      return F.isEmpty(e) ? !1 : n.scopes.has(e.toLowerCase());
    }, r.prototype.containsScopeSet = function(e) {
      var t = this;
      return !e || e.scopes.size <= 0 ? !1 : this.scopes.size >= e.scopes.size && e.asArray().every(function(n) {
        return t.containsScope(n);
      });
    }, r.prototype.containsOnlyOIDCScopes = function() {
      var e = this, t = 0;
      return Js.forEach(function(n) {
        e.containsScope(n) && (t += 1);
      }), this.scopes.size === t;
    }, r.prototype.appendScope = function(e) {
      F.isEmpty(e) || this.scopes.add(e.trim());
    }, r.prototype.appendScopes = function(e) {
      var t = this;
      try {
        e.forEach(function(n) {
          return t.appendScope(n);
        });
      } catch (n) {
        throw z.createAppendScopeSetError(n);
      }
    }, r.prototype.removeScope = function(e) {
      if (F.isEmpty(e))
        throw z.createRemoveEmptyScopeFromSetError(e);
      this.scopes.delete(e.trim());
    }, r.prototype.removeOIDCScopes = function() {
      var e = this;
      Js.forEach(function(t) {
        e.scopes.delete(t);
      });
    }, r.prototype.unionScopeSets = function(e) {
      if (!e)
        throw z.createEmptyInputScopeSetError();
      var t = /* @__PURE__ */ new Set();
      return e.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), this.scopes.forEach(function(n) {
        return t.add(n.toLowerCase());
      }), t;
    }, r.prototype.intersectingScopeSets = function(e) {
      if (!e)
        throw z.createEmptyInputScopeSetError();
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
function Co(r, e) {
  if (F.isEmpty(r))
    throw z.createClientInfoEmptyError();
  try {
    var t = e.base64Decode(r);
    return JSON.parse(t);
  } catch (n) {
    throw z.createClientInfoDecodingError(n.message);
  }
}
function Vr(r) {
  if (F.isEmpty(r))
    throw z.createClientInfoDecodingError("Home account ID was empty.");
  var e = r.split(ke.CLIENT_INFO_SEPARATOR, 2);
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
var He = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAccountId = function() {
      var e = [this.homeAccountId, this.environment];
      return e.join(ke.CACHE_KEY_SEPARATOR).toLowerCase();
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
      return t.join(ke.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAccount = function(e, t) {
      var n = new r();
      t.authorityType === We.Adfs ? n.authorityType = br.ADFS_ACCOUNT_TYPE : t.protocolMode === Zr.AAD ? n.authorityType = br.MSSTS_ACCOUNT_TYPE : n.authorityType = br.GENERIC_ACCOUNT_TYPE, n.clientInfo = e.clientInfo, n.homeAccountId = e.homeAccountId, n.nativeAccountId = e.nativeAccountId;
      var o = e.environment || t && t.getPreferredCache();
      if (!o)
        throw z.createInvalidCacheEnvironmentError();
      if (n.environment = o, n.realm = e.idTokenClaims.tid || S.EMPTY_STRING, n.idTokenClaims = e.idTokenClaims, n.localAccountId = e.idTokenClaims.oid || e.idTokenClaims.sub || S.EMPTY_STRING, n.authorityType === br.MSSTS_ACCOUNT_TYPE) {
        var i = e.idTokenClaims.preferred_username, a = e.idTokenClaims.emails ? e.idTokenClaims.emails[0] : null;
        n.username = i || a || "";
      } else
        n.username = e.idTokenClaims.upn || "";
      return n.name = e.idTokenClaims.name, n.cloudGraphHostName = e.cloudGraphHostName, n.msGraphHost = e.msGraphHost, n;
    }, r.createFromAccountInfo = function(e, t, n) {
      var o = new r();
      return o.authorityType = e.authorityType || br.GENERIC_ACCOUNT_TYPE, o.homeAccountId = e.homeAccountId, o.localAccountId = e.localAccountId, o.nativeAccountId = e.nativeAccountId, o.realm = e.tenantId, o.environment = e.environment, o.username = e.username, o.name = e.name, o.idTokenClaims = e.idTokenClaims, o.cloudGraphHostName = t, o.msGraphHost = n, o;
    }, r.generateHomeAccountId = function(e, t, n, o, i) {
      var a = i != null && i.sub ? i.sub : S.EMPTY_STRING;
      if (t === We.Adfs || t === We.Dsts)
        return a;
      if (e)
        try {
          var s = Co(e, o);
          if (!F.isEmpty(s.uid) && !F.isEmpty(s.utid))
            return "" + s.uid + ke.CLIENT_INFO_SEPARATOR + s.utid;
        } catch {
        }
      return n.verbose("No client info in response"), a;
    }, r.isAccountEntity = function(e) {
      return e ? e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType") : !1;
    }, r.accountInfoIsEqual = function(e, t, n) {
      if (!e || !t)
        return !1;
      var o = !0;
      if (n) {
        var i = e.idTokenClaims || {}, a = t.idTokenClaims || {};
        o = i.iat === a.iat && i.nonce === a.nonce;
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
      if (F.isEmpty(e))
        throw z.createTokenNullOrEmptyError(e);
      this.rawToken = e, this.claims = r.extractTokenClaims(e, t);
    }
    return r.extractTokenClaims = function(e, t) {
      var n = F.decodeAuthToken(e);
      try {
        var o = n.JWSPayload, i = t.base64Decode(o);
        return JSON.parse(i);
      } catch (a) {
        throw z.createTokenParsingError(a);
      }
    }, r.checkMaxAge = function(e, t) {
      var n = 3e5;
      if (t === 0 || Date.now() - n > e + t)
        throw z.createMaxAgeTranspiredError();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ge = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.clientId = e, this.cryptoImpl = t, this.commonLogger = n.clone(Nl, va);
    }
    return r.prototype.getAllAccounts = function() {
      var e = this, t = this.getAccountKeys();
      if (t.length < 1)
        return [];
      var n = t.reduce(function(i, a) {
        var s = e.getAccount(a);
        return s && i.push(s), i;
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
      return ne(this, void 0, void 0, function() {
        return oe(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                throw z.createNullOrUndefinedCacheRecord();
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
      return ne(this, void 0, void 0, function() {
        var t, n, o, i, a = this;
        return oe(this, function(s) {
          switch (s.label) {
            case 0:
              return t = {
                clientId: e.clientId,
                credentialType: e.credentialType,
                environment: e.environment,
                homeAccountId: e.homeAccountId,
                realm: e.realm,
                tokenType: e.tokenType,
                requestedClaimsHash: e.requestedClaimsHash
              }, n = this.getTokenKeys(), o = je.fromString(e.target), i = [], n.accessToken.forEach(function(c) {
                if (a.accessTokenKeyMatchesFilter(c, t, !1)) {
                  var l = a.getAccessTokenCredential(c);
                  if (l && a.credentialMatchesFilter(l, t)) {
                    var u = je.fromString(l.target);
                    u.intersectingScopeSets(o) && i.push(a.removeAccessToken(c));
                  }
                }
              }), [4, Promise.all(i)];
            case 1:
              return s.sent(), this.setAccessTokenCredential(e), [
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
          var a = t.getAccount(i);
          a && (e.homeAccountId && !t.matchHomeAccountId(a, e.homeAccountId) || e.localAccountId && !t.matchLocalAccountId(a, e.localAccountId) || e.username && !t.matchUsername(a, e.username) || e.environment && !t.matchEnvironment(a, e.environment) || e.realm && !t.matchRealm(a, e.realm) || e.nativeAccountId && !t.matchNativeAccountId(a, e.nativeAccountId) || o.push(a));
        }
      }), o;
    }, r.prototype.isAccountKey = function(e, t, n) {
      return !(e.split(ke.CACHE_KEY_SEPARATOR).length < 3 || t && !e.toLowerCase().includes(t.toLowerCase()) || n && !e.toLowerCase().includes(n.toLowerCase()));
    }, r.prototype.isCredentialKey = function(e) {
      if (e.split(ke.CACHE_KEY_SEPARATOR).length < 6)
        return !1;
      var t = e.toLowerCase();
      if (t.indexOf(Q.ID_TOKEN.toLowerCase()) === -1 && t.indexOf(Q.ACCESS_TOKEN.toLowerCase()) === -1 && t.indexOf(Q.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) === -1 && t.indexOf(Q.REFRESH_TOKEN.toLowerCase()) === -1)
        return !1;
      if (t.indexOf(Q.REFRESH_TOKEN.toLowerCase()) > -1) {
        var n = "" + Q.REFRESH_TOKEN + ke.CACHE_KEY_SEPARATOR + this.clientId + ke.CACHE_KEY_SEPARATOR, o = "" + Q.REFRESH_TOKEN + ke.CACHE_KEY_SEPARATOR + In + ke.CACHE_KEY_SEPARATOR;
        if (t.indexOf(n.toLowerCase()) === -1 && t.indexOf(o.toLowerCase()) === -1)
          return !1;
      } else if (t.indexOf(this.clientId.toLowerCase()) === -1)
        return !1;
      return !0;
    }, r.prototype.credentialMatchesFilter = function(e, t) {
      return !(t.clientId && !this.matchClientId(e, t.clientId) || t.userAssertionHash && !this.matchUserAssertionHash(e, t.userAssertionHash) || typeof t.homeAccountId == "string" && !this.matchHomeAccountId(e, t.homeAccountId) || t.environment && !this.matchEnvironment(e, t.environment) || t.realm && !this.matchRealm(e, t.realm) || t.credentialType && !this.matchCredentialType(e, t.credentialType) || t.familyId && !this.matchFamilyId(e, t.familyId) || t.target && !this.matchTarget(e, t.target) || (t.requestedClaimsHash || e.requestedClaimsHash) && e.requestedClaimsHash !== t.requestedClaimsHash || e.credentialType === Q.ACCESS_TOKEN_WITH_AUTH_SCHEME && (t.tokenType && !this.matchTokenType(e, t.tokenType) || t.tokenType === ge.SSH && t.keyId && !this.matchKeyId(e, t.keyId)));
    }, r.prototype.getAppMetadataFilteredBy = function(e) {
      return this.getAppMetadataFilteredByInternal(e.environment, e.clientId);
    }, r.prototype.getAppMetadataFilteredByInternal = function(e, t) {
      var n = this, o = this.getKeys(), i = {};
      return o.forEach(function(a) {
        if (n.isAppMetadata(a)) {
          var s = n.getAppMetadata(a);
          s && (e && !n.matchEnvironment(s, e) || t && !n.matchClientId(s, t) || (i[a] = s));
        }
      }), i;
    }, r.prototype.getAuthorityMetadataByAlias = function(e) {
      var t = this, n = this.getAuthorityMetadataKeys(), o = null;
      return n.forEach(function(i) {
        if (!(!t.isAuthorityMetadata(i) || i.indexOf(t.clientId) === -1)) {
          var a = t.getAuthorityMetadata(i);
          a && a.aliases.indexOf(e) !== -1 && (o = a);
        }
      }), o;
    }, r.prototype.removeAllAccounts = function() {
      return ne(this, void 0, void 0, function() {
        var e, t, n = this;
        return oe(this, function(o) {
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
      return ne(this, void 0, void 0, function() {
        var t;
        return oe(this, function(n) {
          switch (n.label) {
            case 0:
              if (t = this.getAccount(e), !t)
                throw z.createNoAccountFoundError();
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
      return ne(this, void 0, void 0, function() {
        var t, n, o, i = this;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return t = this.getTokenKeys(), n = e.generateAccountId(), o = [], t.idToken.forEach(function(s) {
                s.indexOf(n) === 0 && i.removeIdToken(s);
              }), t.accessToken.forEach(function(s) {
                s.indexOf(n) === 0 && o.push(i.removeAccessToken(s));
              }), t.refreshToken.forEach(function(s) {
                s.indexOf(n) === 0 && i.removeRefreshToken(s);
              }), [4, Promise.all(o)];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.removeAccessToken = function(e) {
      return ne(this, void 0, void 0, function() {
        var t, n, o;
        return oe(this, function(i) {
          switch (i.label) {
            case 0:
              if (t = this.getAccessTokenCredential(e), !t)
                return [
                  2
                  /*return*/
                ];
              if (t.credentialType.toLowerCase() !== Q.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())
                return [3, 4];
              if (t.tokenType !== ge.POP)
                return [3, 4];
              if (n = t, o = n.keyId, !o)
                return [3, 4];
              i.label = 1;
            case 1:
              return i.trys.push([1, 3, , 4]), [4, this.cryptoImpl.removeTokenBindingKey(o)];
            case 2:
              return i.sent(), [3, 4];
            case 3:
              throw i.sent(), z.createBindingKeyNotRemovedError();
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
      var o = this.getTokenKeys(), i = this.readAccountFromCache(e), a = this.getIdToken(e, o), s = this.getAccessToken(e, t, o), c = this.getRefreshToken(e, !1, o), l = this.readAppMetadataFromCache(n);
      return i && a && (i.idTokenClaims = new Ot(a.secret, this.cryptoImpl).claims), {
        account: i,
        idToken: a,
        accessToken: s,
        refreshToken: c,
        appMetadata: l
      };
    }, r.prototype.readAccountFromCache = function(e) {
      var t = He.generateAccountCacheKey(e);
      return this.getAccount(t);
    }, r.prototype.getIdToken = function(e, t) {
      var n = this;
      this.commonLogger.trace("CacheManager - getIdToken called");
      var o = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: Q.ID_TOKEN,
        clientId: this.clientId,
        realm: e.tenantId
      }, i = this.getIdTokensByFilter(o, t), a = i.length;
      return a < 1 ? (this.commonLogger.info("CacheManager:getIdToken - No token found"), null) : a > 1 ? (this.commonLogger.info("CacheManager:getIdToken - Multiple id tokens found, clearing them"), i.forEach(function(s) {
        n.removeIdToken(s.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getIdToken - Returning id token"), i[0]);
    }, r.prototype.getIdTokensByFilter = function(e, t) {
      var n = this, o = t && t.idToken || this.getTokenKeys().idToken, i = [];
      return o.forEach(function(a) {
        if (n.idTokenKeyMatchesFilter(a, fe({ clientId: n.clientId }, e))) {
          var s = n.getIdTokenCredential(a);
          s && n.credentialMatchesFilter(s, e) && i.push(s);
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
      var i = je.createSearchScopes(t.scopes), a = t.authenticationScheme || ge.BEARER, s = a && a.toLowerCase() !== ge.BEARER.toLowerCase() ? Q.ACCESS_TOKEN_WITH_AUTH_SCHEME : Q.ACCESS_TOKEN, c = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: s,
        clientId: this.clientId,
        realm: e.tenantId,
        target: i,
        tokenType: a,
        keyId: t.sshKid,
        requestedClaimsHash: t.requestedClaimsHash
      }, l = n && n.accessToken || this.getTokenKeys().accessToken, u = [];
      l.forEach(function(d) {
        if (o.accessTokenKeyMatchesFilter(d, c, !0)) {
          var f = o.getAccessTokenCredential(d);
          f && o.credentialMatchesFilter(f, c) && u.push(f);
        }
      });
      var h = u.length;
      return h < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : h > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), u.forEach(function(d) {
        o.removeAccessToken(d.generateCredentialKey());
      }), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), u[0]);
    }, r.prototype.accessTokenKeyMatchesFilter = function(e, t, n) {
      var o = e.toLowerCase();
      if (t.clientId && o.indexOf(t.clientId.toLowerCase()) === -1 || t.homeAccountId && o.indexOf(t.homeAccountId.toLowerCase()) === -1 || t.realm && o.indexOf(t.realm.toLowerCase()) === -1 || t.requestedClaimsHash && o.indexOf(t.requestedClaimsHash.toLowerCase()) === -1)
        return !1;
      if (t.target)
        for (var i = t.target.asArray(), a = 0; a < i.length; a++) {
          if (n && !o.includes(i[a].toLowerCase()))
            return !1;
          if (!n && o.includes(i[a].toLowerCase()))
            return !0;
        }
      return !0;
    }, r.prototype.getAccessTokensByFilter = function(e) {
      var t = this, n = this.getTokenKeys(), o = [];
      return n.accessToken.forEach(function(i) {
        if (t.accessTokenKeyMatchesFilter(i, e, !0)) {
          var a = t.getAccessTokenCredential(i);
          a && t.credentialMatchesFilter(a, e) && o.push(a);
        }
      }), o;
    }, r.prototype.getRefreshToken = function(e, t, n) {
      var o = this;
      this.commonLogger.trace("CacheManager - getRefreshToken called");
      var i = t ? In : void 0, a = {
        homeAccountId: e.homeAccountId,
        environment: e.environment,
        credentialType: Q.REFRESH_TOKEN,
        clientId: this.clientId,
        familyId: i
      }, s = n && n.refreshToken || this.getTokenKeys().refreshToken, c = [];
      s.forEach(function(u) {
        if (o.refreshTokenKeyMatchesFilter(u, a)) {
          var h = o.getRefreshTokenCredential(u);
          h && o.credentialMatchesFilter(h, a) && c.push(h);
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
      }, n = this.getAppMetadataFilteredBy(t), o = Object.keys(n).map(function(a) {
        return n[a];
      }), i = o.length;
      if (i < 1)
        return null;
      if (i > 1)
        throw z.createMultipleMatchingAppMetadataInCacheError();
      return o[0];
    }, r.prototype.isAppMetadataFOCI = function(e) {
      var t = this.readAppMetadataFromCache(e);
      return !!(t && t.familyId === In);
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
      var n = e.credentialType !== Q.ACCESS_TOKEN && e.credentialType !== Q.ACCESS_TOKEN_WITH_AUTH_SCHEME;
      if (n || !e.target)
        return !1;
      var o = je.fromString(e.target);
      return o.containsScopeSet(t);
    }, r.prototype.matchTokenType = function(e, t) {
      return !!(e.tokenType && e.tokenType === t);
    }, r.prototype.matchKeyId = function(e, t) {
      return !!(e.keyId && e.keyId === t);
    }, r.prototype.isAppMetadata = function(e) {
      return e.indexOf(zi) !== -1;
    }, r.prototype.isAuthorityMetadata = function(e) {
      return e.indexOf(_n.CACHE_KEY) !== -1;
    }, r.prototype.generateAuthorityMetadataCacheKey = function(e) {
      return _n.CACHE_KEY + "-" + this.clientId + "-" + e;
    }, r.toObject = function(e, t) {
      for (var n in t)
        e[n] = t[n];
      return e;
    }, r;
  }()
), Ep = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.setAccount = function() {
      var t = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getAccount = function() {
      var t = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setIdTokenCredential = function() {
      var t = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getIdTokenCredential = function() {
      var t = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setAccessTokenCredential = function() {
      var t = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getAccessTokenCredential = function() {
      var t = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setRefreshTokenCredential = function() {
      var t = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getRefreshTokenCredential = function() {
      var t = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setAppMetadata = function() {
      var t = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getAppMetadata = function() {
      var t = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setServerTelemetry = function() {
      var t = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getServerTelemetry = function() {
      var t = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setAuthorityMetadata = function() {
      var t = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadata = function() {
      var t = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getAuthorityMetadataKeys = function() {
      var t = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.setThrottlingCache = function() {
      var t = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getThrottlingCache = function() {
      var t = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.removeItem = function() {
      var t = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.containsKey = function() {
      var t = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getKeys = function() {
      var t = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getAccountKeys = function() {
      var t = "Storage interface - getAccountKeys() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.getTokenKeys = function() {
      var t = "Storage interface - getTokenKeys() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e.prototype.clear = function() {
      return ne(this, void 0, void 0, function() {
        var t;
        return oe(this, function(n) {
          throw t = "Storage interface - clear() has not been implemented for the cacheStorage interface.", V.createUnexpectedError(t);
        });
      });
    }, e.prototype.updateCredentialCacheKey = function() {
      var t = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
      throw V.createUnexpectedError(t);
    }, e;
  }(Ge)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Tp = 300, Ol = {
  tokenRenewalOffsetSeconds: Tp,
  preventCorsPreflight: !1
}, Ip = {
  loggerCallback: function() {
  },
  piiLoggingEnabled: !1,
  logLevel: we.Info,
  correlationId: S.EMPTY_STRING
}, _p = {
  claimsBasedCachingEnabled: !0
}, kp = {
  sendGetRequestAsync: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Network interface - sendGetRequestAsync() has not been implemented", V.createUnexpectedError(r);
      });
    });
  },
  sendPostRequestAsync: function() {
    return ne(this, void 0, void 0, function() {
      var r;
      return oe(this, function(e) {
        throw r = "Network interface - sendPostRequestAsync() has not been implemented", V.createUnexpectedError(r);
      });
    });
  }
}, Ap = {
  sku: S.SKU,
  version: va,
  cpu: S.EMPTY_STRING,
  os: S.EMPTY_STRING
}, Rp = {
  clientSecret: S.EMPTY_STRING,
  clientAssertion: void 0
}, Pp = {
  azureCloudInstance: Mn.None,
  tenant: "" + S.DEFAULT_COMMON_TENANT
}, Np = {
  application: {
    appName: "",
    appVersion: ""
  }
};
function Op(r) {
  var e = r.authOptions, t = r.systemOptions, n = r.loggerOptions, o = r.cacheOptions, i = r.storageInterface, a = r.networkInterface, s = r.cryptoInterface, c = r.clientCredentials, l = r.libraryInfo, u = r.telemetry, h = r.serverTelemetryManager, d = r.persistencePlugin, f = r.serializableCache, p = fe(fe({}, Ip), n);
  return {
    authOptions: Mp(e),
    systemOptions: fe(fe({}, Ol), t),
    loggerOptions: p,
    cacheOptions: fe(fe({}, _p), o),
    storageInterface: i || new Ep(e.clientId, bo, new ya(p)),
    networkInterface: a || kp,
    cryptoInterface: s || bo,
    clientCredentials: c || Rp,
    libraryInfo: fe(fe({}, Ap), l),
    telemetry: fe(fe({}, Np), u),
    serverTelemetryManager: h || null,
    persistencePlugin: d || null,
    serializableCache: f || null
  };
}
function Mp(r) {
  return fe({ clientCapabilities: [], azureCloudOptions: Pp, skipAuthorityMetadataCache: !1 }, r);
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ir = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n, o) {
      var i = r.call(this, t, n, o) || this;
      return i.name = "ServerError", Object.setPrototypeOf(i, e.prototype), i;
    }
    return e;
  }(V)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var wo = (
  /** @class */
  function() {
    function r() {
    }
    return r.generateThrottlingStorageKey = function(e) {
      return kn.THROTTLING_PREFIX + "." + JSON.stringify(e);
    }, r.preProcess = function(e, t) {
      var n, o = r.generateThrottlingStorageKey(t), i = e.getThrottlingCache(o);
      if (i) {
        if (i.throttleTime < Date.now()) {
          e.removeItem(o);
          return;
        }
        throw new Ir(((n = i.errorCodes) === null || n === void 0 ? void 0 : n.join(" ")) || S.EMPTY_STRING, i.errorMessage, i.subError);
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
      return Math.floor(Math.min(n + (t || kn.DEFAULT_THROTTLE_TIME_SECONDS), n + kn.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1e3);
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
      }, a = this.generateThrottlingStorageKey(i);
      e.removeItem(a);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xp = (
  /** @class */
  function() {
    function r(e, t) {
      this.networkClient = e, this.cacheManager = t;
    }
    return r.prototype.sendPostRequest = function(e, t, n) {
      return ne(this, void 0, void 0, function() {
        var o, i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              wo.preProcess(this.cacheManager, e), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, this.networkClient.sendPostRequestAsync(t, n)];
            case 2:
              return o = a.sent(), [3, 4];
            case 3:
              throw i = a.sent(), i instanceof V ? i : z.createNetworkError(t, i);
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
      if (F.isEmpty(e))
        throw be.createRedirectUriEmptyError();
    }, r.validatePrompt = function(e) {
      var t = [];
      for (var n in Ue)
        t.push(Ue[n]);
      if (t.indexOf(e) < 0)
        throw be.createInvalidPromptError(e);
    }, r.validateClaims = function(e) {
      try {
        JSON.parse(e);
      } catch {
        throw be.createInvalidClaimsRequestError();
      }
    }, r.validateCodeChallengeParams = function(e, t) {
      if (F.isEmpty(e) || F.isEmpty(t))
        throw be.createInvalidCodeChallengeParamsError();
      this.validateCodeChallengeMethod(t);
    }, r.validateCodeChallengeMethod = function(e) {
      if ([
        Xs.PLAIN,
        Xs.S256
      ].indexOf(e) < 0)
        throw be.createInvalidCodeChallengeMethodError();
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
var Rn = (
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
      var n = t ? Vo(e || [], $n) : e || [], o = new je(n);
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
      this.parameters.set(En.DOMAIN_HINT, encodeURIComponent(e));
    }, r.prototype.addLoginHint = function(e) {
      this.parameters.set(En.LOGIN_HINT, encodeURIComponent(e));
    }, r.prototype.addCcsUpn = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("UPN:" + e));
    }, r.prototype.addCcsOid = function(e) {
      this.parameters.set(ot.CCS_HEADER, encodeURIComponent("Oid:" + e.uid + "@" + e.utid));
    }, r.prototype.addSid = function(e) {
      this.parameters.set(En.SID, encodeURIComponent(e));
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
      F.isEmpty(e) || this.parameters.set(ie.STATE, encodeURIComponent(e));
    }, r.prototype.addNonce = function(e) {
      this.parameters.set(ie.NONCE, encodeURIComponent(e));
    }, r.prototype.addCodeChallengeParams = function(e, t) {
      if (yr.validateCodeChallengeParams(e, t), e && t)
        this.parameters.set(ie.CODE_CHALLENGE, encodeURIComponent(e)), this.parameters.set(ie.CODE_CHALLENGE_METHOD, encodeURIComponent(t));
      else
        throw be.createInvalidCodeChallengeParamsError();
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
      F.isEmpty(e) || this.parameters.set(ie.CLIENT_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addClientAssertionType = function(e) {
      F.isEmpty(e) || this.parameters.set(ie.CLIENT_ASSERTION_TYPE, encodeURIComponent(e));
    }, r.prototype.addOboAssertion = function(e) {
      this.parameters.set(ie.OBO_ASSERTION, encodeURIComponent(e));
    }, r.prototype.addRequestTokenUse = function(e) {
      this.parameters.set(ie.REQUESTED_TOKEN_USE, encodeURIComponent(e));
    }, r.prototype.addGrantType = function(e) {
      this.parameters.set(ie.GRANT_TYPE, encodeURIComponent(e));
    }, r.prototype.addClientInfo = function() {
      this.parameters.set(Sp, "1");
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
          throw be.createInvalidClaimsRequestError();
        }
      return t && t.length > 0 && (n.hasOwnProperty(Kr.ACCESS_TOKEN) || (n[Kr.ACCESS_TOKEN] = {}), n[Kr.ACCESS_TOKEN][Kr.XMS_CC] = {
        values: t
      }), JSON.stringify(n);
    }, r.prototype.addUsername = function(e) {
      this.parameters.set(vo.username, encodeURIComponent(e));
    }, r.prototype.addPassword = function(e) {
      this.parameters.set(vo.password, encodeURIComponent(e));
    }, r.prototype.addPopToken = function(e) {
      F.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ge.POP), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addSshJwk = function(e) {
      F.isEmpty(e) || (this.parameters.set(ie.TOKEN_TYPE, ge.SSH), this.parameters.set(ie.REQ_CNF, encodeURIComponent(e)));
    }, r.prototype.addServerTelemetry = function(e) {
      this.parameters.set(ie.X_CLIENT_CURR_TELEM, e.generateCurrentRequestHeaderValue()), this.parameters.set(ie.X_CLIENT_LAST_TELEM, e.generateLastRequestHeaderValue());
    }, r.prototype.addThrottling = function() {
      this.parameters.set(ie.X_MS_LIB_CAPABILITY, kn.X_MS_LIB_CAPABILITY_VALUE);
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
var ba = (
  /** @class */
  function() {
    function r(e, t) {
      this.config = Op(e), this.logger = new ya(this.config.loggerOptions, Nl, va), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.networkManager = new xp(this.networkClient, this.cacheManager), this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t;
    }
    return r.prototype.createTokenRequestHeaders = function(e) {
      var t = {};
      if (t[ot.CONTENT_TYPE] = S.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e)
        switch (e.type) {
          case rt.HOME_ACCOUNT_ID:
            try {
              var n = Vr(e.credential);
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
      return ne(this, void 0, void 0, function() {
        var i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, this.networkManager.sendPostRequest(o, e, { body: t, headers: n })];
            case 1:
              return i = a.sent(), this.config.serverTelemetryManager && i.status < 500 && i.status !== 429 && this.config.serverTelemetryManager.clearTelemetryCache(), [2, i];
          }
        });
      });
    }, r.prototype.updateAuthority = function(e) {
      if (!e.discoveryComplete())
        throw z.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
      this.authority = e;
    }, r.prototype.createTokenQueryParameters = function(e) {
      var t = new Rn();
      return e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.createQueryString();
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ca = (
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
        case Q.ID_TOKEN:
          return Tn.ID_TOKEN;
        case Q.ACCESS_TOKEN:
        case Q.ACCESS_TOKEN_WITH_AUTH_SCHEME:
          return Tn.ACCESS_TOKEN;
        case Q.REFRESH_TOKEN:
          return Tn.REFRESH_TOKEN;
        default:
          throw z.createUnexpectedCredentialTypeError();
      }
    }, r.generateCredentialCacheKey = function(e, t, n, o, i, a, s, c, l) {
      var u = [
        this.generateAccountIdForCacheKey(e, t),
        this.generateCredentialIdForCacheKey(n, o, i, s),
        this.generateTargetForCacheKey(a),
        this.generateClaimsHashForCacheKey(l),
        this.generateSchemeForCacheKey(c)
      ];
      return u.join(ke.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateAccountIdForCacheKey = function(e, t) {
      var n = [e, t];
      return n.join(ke.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateCredentialIdForCacheKey = function(e, t, n, o) {
      var i = e === Q.REFRESH_TOKEN && o || t, a = [
        e,
        i,
        n || S.EMPTY_STRING
      ];
      return a.join(ke.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.generateTargetForCacheKey = function(e) {
      return (e || S.EMPTY_STRING).toLowerCase();
    }, r.generateClaimsHashForCacheKey = function(e) {
      return (e || S.EMPTY_STRING).toLowerCase();
    }, r.generateSchemeForCacheKey = function(e) {
      return e && e.toLowerCase() !== ge.BEARER.toLowerCase() ? e.toLowerCase() : S.EMPTY_STRING;
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
    return e.createIdTokenEntity = function(t, n, o, i, a) {
      var s = new e();
      return s.credentialType = Q.ID_TOKEN, s.homeAccountId = t, s.environment = n, s.clientId = i, s.secret = o, s.realm = a, s;
    }, e.isIdTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === Q.ID_TOKEN : !1;
    }, e;
  }(Ca)
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
    return e.createAccessTokenEntity = function(t, n, o, i, a, s, c, l, u, h, d, f, p, g, m) {
      var C, v, b = new e();
      b.homeAccountId = t, b.credentialType = Q.ACCESS_TOKEN, b.secret = o;
      var w = ht.nowSeconds();
      if (b.cachedAt = w.toString(), b.expiresOn = c.toString(), b.extendedExpiresOn = l.toString(), h && (b.refreshOn = h.toString()), b.environment = n, b.clientId = i, b.realm = a, b.target = s, b.userAssertionHash = f, b.tokenType = F.isEmpty(d) ? ge.BEARER : d, g && (b.requestedClaims = g, b.requestedClaimsHash = m), ((C = b.tokenType) === null || C === void 0 ? void 0 : C.toLowerCase()) !== ge.BEARER.toLowerCase())
        switch (b.credentialType = Q.ACCESS_TOKEN_WITH_AUTH_SCHEME, b.tokenType) {
          case ge.POP:
            var E = Ot.extractTokenClaims(o, u);
            if (!(!((v = E == null ? void 0 : E.cnf) === null || v === void 0) && v.kid))
              throw z.createTokenClaimsRequiredError();
            b.keyId = E.cnf.kid;
            break;
          case ge.SSH:
            b.keyId = p;
        }
      return b;
    }, e.isAccessTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("realm") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.hasOwnProperty("target") && (t.credentialType === Q.ACCESS_TOKEN || t.credentialType === Q.ACCESS_TOKEN_WITH_AUTH_SCHEME) : !1;
    }, e;
  }(Ca)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Gr = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.createRefreshTokenEntity = function(t, n, o, i, a, s) {
      var c = new e();
      return c.clientId = i, c.credentialType = Q.REFRESH_TOKEN, c.environment = n, c.homeAccountId = t, c.secret = o, c.userAssertionHash = s, a && (c.familyId = a), c;
    }, e.isRefreshTokenEntity = function(t) {
      return t ? t.hasOwnProperty("homeAccountId") && t.hasOwnProperty("environment") && t.hasOwnProperty("credentialType") && t.hasOwnProperty("clientId") && t.hasOwnProperty("secret") && t.credentialType === Q.REFRESH_TOKEN : !1;
    }, e;
  }(Ca)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var ec = [
  "interaction_required",
  "consent_required",
  "login_required"
], Lp = [
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
    function e(t, n, o, i, a, s, c) {
      var l = r.call(this, t, n, o) || this;
      return Object.setPrototypeOf(l, e.prototype), l.timestamp = i || S.EMPTY_STRING, l.traceId = a || S.EMPTY_STRING, l.correlationId = s || S.EMPTY_STRING, l.claims = c || S.EMPTY_STRING, l.name = "InteractionRequiredAuthError", l;
    }
    return e.isInteractionRequiredError = function(t, n, o) {
      var i = !!t && ec.indexOf(t) > -1, a = !!o && Lp.indexOf(o) > -1, s = !!n && ec.some(function(c) {
        return n.indexOf(c) > -1;
      });
      return i || s || a;
    }, e.createNoTokensFoundError = function() {
      return new e(Wr.noTokensFoundError.code, Wr.noTokensFoundError.desc);
    }, e.createNativeAccountUnavailableError = function() {
      return new e(Wr.native_account_unavailable.code, Wr.native_account_unavailable.desc);
    }, e;
  }(V)
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
var Ht = (
  /** @class */
  function() {
    function r() {
    }
    return r.setRequestState = function(e, t, n) {
      var o = r.generateLibraryState(e, n);
      return F.isEmpty(t) ? o : "" + o + S.RESOURCE_DELIM + t;
    }, r.generateLibraryState = function(e, t) {
      if (!e)
        throw z.createNoCryptoObjectError("generateLibraryState");
      var n = {
        id: e.createNewGuid()
      };
      t && (n.meta = t);
      var o = JSON.stringify(n);
      return e.base64Encode(o);
    }, r.parseRequestState = function(e, t) {
      if (!e)
        throw z.createNoCryptoObjectError("parseRequestState");
      if (F.isEmpty(t))
        throw z.createInvalidStateError(t, "Null, undefined or empty state");
      try {
        var n = t.split(S.RESOURCE_DELIM), o = n[0], i = n.length > 1 ? n.slice(1).join(S.RESOURCE_DELIM) : S.EMPTY_STRING, a = e.base64Decode(o), s = JSON.parse(a);
        return {
          userRequestState: F.isEmpty(i) ? S.EMPTY_STRING : i,
          libraryState: s
        };
      } catch (c) {
        throw z.createInvalidStateError(t, c);
      }
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var de = (
  /** @class */
  function() {
    function r(e) {
      if (this._urlString = e, F.isEmpty(this._urlString))
        throw be.createUrlEmptyError();
      F.isEmpty(this.getHash()) && (this._urlString = r.canonicalizeUri(e));
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
        return F.endsWith(t, "?") ? t = t.slice(0, -1) : F.endsWith(t, "?/") && (t = t.slice(0, -2)), F.endsWith(t, "/") || (t += "/"), t;
      }
      return e;
    }, r.prototype.validateAsUri = function() {
      var e;
      try {
        e = this.getUrlComponents();
      } catch (t) {
        throw be.createUrlParseError(t);
      }
      if (!e.HostNameAndPort || !e.PathSegments)
        throw be.createUrlParseError("Given url string: " + this.urlString);
      if (!e.Protocol || e.Protocol.toLowerCase() !== "https:")
        throw be.createInsecureAuthorityUriError(this.urlString);
    }, r.appendQueryString = function(e, t) {
      return F.isEmpty(t) ? e : e.indexOf("?") < 0 ? e + "?" + t : e + "&" + t;
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
        throw be.createUrlParseError("Given url string: " + this.urlString);
      var n = {
        Protocol: t[1],
        HostNameAndPort: t[4],
        AbsolutePath: t[5],
        QueryString: t[7]
      }, o = n.AbsolutePath.split("/");
      return o = o.filter(function(i) {
        return i && i.length > 0;
      }), n.PathSegments = o, !F.isEmpty(n.QueryString) && n.QueryString.endsWith("/") && (n.QueryString = n.QueryString.substring(0, n.QueryString.length - 1)), n;
    }, r.getDomainFromUrl = function(e) {
      var t = RegExp("^([^:/?#]+://)?([^/?#]*)"), n = e.match(t);
      if (!n)
        throw be.createUrlParseError("Given url string: " + e);
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
      if (F.isEmpty(e))
        return {};
      var t = r.parseHash(e), n = F.queryStringToObject(F.isEmpty(t) ? e : t);
      if (!n)
        throw z.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.getDeserializedQueryString = function(e) {
      if (F.isEmpty(e))
        return {};
      var t = r.parseQueryString(e), n = F.queryStringToObject(F.isEmpty(t) ? e : t);
      if (!n)
        throw z.createHashNotDeserializedError(JSON.stringify(n));
      return n;
    }, r.hashContainsKnownProperties = function(e) {
      if (F.isEmpty(e) || e.indexOf("=") < 0)
        return !1;
      var t = r.getDeserializedHash(e);
      return !!(t.code || t.error_description || t.error || t.state);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var _;
(function(r) {
  r.AcquireTokenByCode = "acquireTokenByCode", r.AcquireTokenByRefreshToken = "acquireTokenByRefreshToken", r.AcquireTokenSilent = "acquireTokenSilent", r.AcquireTokenSilentAsync = "acquireTokenSilentAsync", r.AcquireTokenPopup = "acquireTokenPopup", r.CryptoOptsGetPublicKeyThumbprint = "cryptoOptsGetPublicKeyThumbprint", r.CryptoOptsSignJwt = "cryptoOptsSignJwt", r.SilentCacheClientAcquireToken = "silentCacheClientAcquireToken", r.SilentIframeClientAcquireToken = "silentIframeClientAcquireToken", r.SilentRefreshClientAcquireToken = "silentRefreshClientAcquireToken", r.SsoSilent = "ssoSilent", r.StandardInteractionClientGetDiscoveredAuthority = "standardInteractionClientGetDiscoveredAuthority", r.FetchAccountIdWithNativeBroker = "fetchAccountIdWithNativeBroker", r.NativeInteractionClientAcquireToken = "nativeInteractionClientAcquireToken", r.BaseClientCreateTokenRequestHeaders = "baseClientCreateTokenRequestHeaders", r.BrokerHandhshake = "brokerHandshake", r.AcquireTokenByRefreshTokenInBroker = "acquireTokenByRefreshTokenInBroker", r.AcquireTokenByBroker = "acquireTokenByBroker", r.RefreshTokenClientExecuteTokenRequest = "refreshTokenClientExecuteTokenRequest", r.RefreshTokenClientAcquireToken = "refreshTokenClientAcquireToken", r.RefreshTokenClientAcquireTokenWithCachedRefreshToken = "refreshTokenClientAcquireTokenWithCachedRefreshToken", r.RefreshTokenClientAcquireTokenByRefreshToken = "refreshTokenClientAcquireTokenByRefreshToken", r.RefreshTokenClientCreateTokenRequestBody = "refreshTokenClientCreateTokenRequestBody", r.AcquireTokenFromCache = "acquireTokenFromCache", r.AcquireTokenBySilentIframe = "acquireTokenBySilentIframe", r.InitializeBaseRequest = "initializeBaseRequest", r.InitializeSilentRequest = "initializeSilentRequest", r.InitializeClientApplication = "initializeClientApplication", r.SilentIframeClientTokenHelper = "silentIframeClientTokenHelper", r.SilentHandlerInitiateAuthRequest = "silentHandlerInitiateAuthRequest", r.SilentHandlerMonitorIframeForHash = "silentHandlerMonitorIframeForHash", r.SilentHandlerLoadFrame = "silentHandlerLoadFrame", r.StandardInteractionClientCreateAuthCodeClient = "standardInteractionClientCreateAuthCodeClient", r.StandardInteractionClientGetClientConfiguration = "standardInteractionClientGetClientConfiguration", r.StandardInteractionClientInitializeAuthorizationRequest = "standardInteractionClientInitializeAuthorizationRequest", r.StandardInteractionClientInitializeAuthorizationCodeRequest = "standardInteractionClientInitializeAuthorizationCodeRequest", r.GetAuthCodeUrl = "getAuthCodeUrl", r.HandleCodeResponseFromServer = "handleCodeResponseFromServer", r.HandleCodeResponseFromHash = "handleCodeResponseFromHash", r.UpdateTokenEndpointAuthority = "updateTokenEndpointAuthority", r.AuthClientAcquireToken = "authClientAcquireToken", r.AuthClientExecuteTokenRequest = "authClientExecuteTokenRequest", r.AuthClientCreateTokenRequestBody = "authClientCreateTokenRequestBody", r.AuthClientCreateQueryString = "authClientCreateQueryString", r.PopTokenGenerateCnf = "popTokenGenerateCnf", r.PopTokenGenerateKid = "popTokenGenerateKid", r.HandleServerTokenResponse = "handleServerTokenResponse", r.AuthorityFactoryCreateDiscoveredInstance = "authorityFactoryCreateDiscoveredInstance", r.AuthorityResolveEndpointsAsync = "authorityResolveEndpointsAsync", r.AuthorityGetCloudDiscoveryMetadataFromNetwork = "authorityGetCloudDiscoveryMetadataFromNetwork", r.AuthorityUpdateCloudDiscoveryMetadata = "authorityUpdateCloudDiscoveryMetadata", r.AuthorityGetEndpointMetadataFromNetwork = "authorityGetEndpointMetadataFromNetwork", r.AuthorityUpdateEndpointMetadata = "authorityUpdateEndpointMetadata", r.AuthorityUpdateMetadataWithRegionalInformation = "authorityUpdateMetadataWithRegionalInformation", r.RegionDiscoveryDetectRegion = "regionDiscoveryDetectRegion", r.RegionDiscoveryGetRegionFromIMDS = "regionDiscoveryGetRegionFromIMDS", r.RegionDiscoveryGetCurrentVersion = "regionDiscoveryGetCurrentVersion", r.AcquireTokenByCodeAsync = "acquireTokenByCodeAsync", r.GetEndpointMetadataFromNetwork = "getEndpointMetadataFromNetwork", r.GetCloudDiscoveryMetadataFromNetworkMeasurement = "getCloudDiscoveryMetadataFromNetworkMeasurement", r.HandleRedirectPromiseMeasurement = "handleRedirectPromiseMeasurement", r.UpdateCloudDiscoveryMetadataMeasurement = "updateCloudDiscoveryMetadataMeasurement", r.UsernamePasswordClientAcquireToken = "usernamePasswordClientAcquireToken", r.NativeMessageHandlerHandshake = "nativeMessageHandlerHandshake", r.ClearTokensAndKeysWithClaims = "clearTokensAndKeysWithClaims";
})(_ || (_ = {}));
var So;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.InProgress = 1] = "InProgress", r[r.Completed = 2] = "Completed";
})(So || (So = {}));
var Dp = /* @__PURE__ */ new Set([
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
var Ki;
(function(r) {
  r.SW = "sw", r.UHW = "uhw";
})(Ki || (Ki = {}));
var en = (
  /** @class */
  function() {
    function r(e, t) {
      this.cryptoUtils = e, this.performanceClient = t;
    }
    return r.prototype.generateCnf = function(e) {
      var t, n;
      return ne(this, void 0, void 0, function() {
        var o, i, a;
        return oe(this, function(s) {
          switch (s.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.PopTokenGenerateCnf, e.correlationId), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(_.PopTokenGenerateKid, e.correlationId), [4, this.generateKid(e)];
            case 1:
              return o = s.sent(), i = this.cryptoUtils.base64Encode(JSON.stringify(o)), a = {
                kid: o.kid,
                reqCnfString: i
              }, [4, this.cryptoUtils.hashString(i)];
            case 2:
              return [2, (a.reqCnfHash = s.sent(), a)];
          }
        });
      });
    }, r.prototype.generateKid = function(e) {
      var t;
      return ne(this, void 0, void 0, function() {
        var n;
        return oe(this, function(o) {
          switch (o.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.PopTokenGenerateKid, e.correlationId), [4, this.cryptoUtils.getPublicKeyThumbprint(e)];
            case 1:
              return n = o.sent(), [2, {
                kid: n,
                xms_ksl: Ki.SW
              }];
          }
        });
      });
    }, r.prototype.signPopToken = function(e, t, n) {
      return ne(this, void 0, void 0, function() {
        return oe(this, function(o) {
          return [2, this.signPayload(e, t, n)];
        });
      });
    }, r.prototype.signPayload = function(e, t, n, o) {
      return ne(this, void 0, void 0, function() {
        var i, a, s, c, l, u;
        return oe(this, function(h) {
          switch (h.label) {
            case 0:
              return i = n.resourceRequestMethod, a = n.resourceRequestUri, s = n.shrClaims, c = n.shrNonce, l = a ? new de(a) : void 0, u = l == null ? void 0 : l.getUrlComponents(), [4, this.cryptoUtils.signJwt(fe({ at: e, ts: ht.nowSeconds(), m: i == null ? void 0 : i.toUpperCase(), u: u == null ? void 0 : u.HostNameAndPort, nonce: c || this.cryptoUtils.createNewGuid(), p: u == null ? void 0 : u.AbsolutePath, q: u != null && u.QueryString ? [[], u.QueryString] : void 0, client_claims: s || void 0 }, o), t, n.correlationId)];
            case 1:
              return [2, h.sent()];
          }
        });
      });
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var qi = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.generateAppMetadataKey = function() {
      return r.generateAppMetadataCacheKey(this.environment, this.clientId);
    }, r.generateAppMetadataCacheKey = function(e, t) {
      var n = [
        zi,
        e,
        t
      ];
      return n.join(ke.CACHE_KEY_SEPARATOR).toLowerCase();
    }, r.createAppMetadataEntity = function(e, t, n) {
      var o = new r();
      return o.clientId = e, o.environment = t, n && (o.familyId = n), o;
    }, r.isAppMetadataEntity = function(e, t) {
      return t ? e.indexOf(zi) === 0 && t.hasOwnProperty("clientId") && t.hasOwnProperty("environment") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var jp = (
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
var Eo = (
  /** @class */
  function() {
    function r(e, t, n, o, i, a, s) {
      this.clientId = e, this.cacheStorage = t, this.cryptoObj = n, this.logger = o, this.serializableCache = i, this.persistencePlugin = a, this.performanceClient = s;
    }
    return r.prototype.validateServerAuthorizationCodeResponse = function(e, t, n) {
      if (!e.state || !t)
        throw e.state ? z.createStateNotFoundError("Cached State") : z.createStateNotFoundError("Server State");
      if (decodeURIComponent(e.state) !== decodeURIComponent(t))
        throw z.createStateMismatchError();
      if (e.error || e.error_description || e.suberror)
        throw wt.isInteractionRequiredError(e.error, e.error_description, e.suberror) ? new wt(e.error || S.EMPTY_STRING, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING) : new Ir(e.error || S.EMPTY_STRING, e.error_description, e.suberror);
      e.client_info && Co(e.client_info, n);
    }, r.prototype.validateTokenResponse = function(e) {
      if (e.error || e.error_description || e.suberror) {
        if (wt.isInteractionRequiredError(e.error, e.error_description, e.suberror))
          throw new wt(e.error, e.error_description, e.suberror, e.timestamp || S.EMPTY_STRING, e.trace_id || S.EMPTY_STRING, e.correlation_id || S.EMPTY_STRING, e.claims || S.EMPTY_STRING);
        var t = e.error_codes + " - [" + e.timestamp + "]: " + e.error_description + " - Correlation ID: " + e.correlation_id + " - Trace ID: " + e.trace_id;
        throw new Ir(e.error, t, e.suberror);
      }
    }, r.prototype.handleServerTokenResponse = function(e, t, n, o, i, a, s, c, l) {
      var u;
      return ne(this, void 0, void 0, function() {
        var h, d, f, p, g, m, C;
        return oe(this, function(v) {
          switch (v.label) {
            case 0:
              if ((u = this.performanceClient) === null || u === void 0 || u.addQueueMeasurement(_.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                if (h = new Ot(e.id_token || S.EMPTY_STRING, this.cryptoObj), i && !F.isEmpty(i.nonce) && h.claims.nonce !== i.nonce)
                  throw z.createNonceMismatchError();
                if (o.maxAge || o.maxAge === 0) {
                  if (d = h.claims.auth_time, !d)
                    throw z.createAuthTimeNotFoundError();
                  Ot.checkMaxAge(d, o.maxAge);
                }
              }
              this.homeAccountIdentifier = He.generateHomeAccountId(e.client_info || S.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, h == null ? void 0 : h.claims), i && i.state && (f = Ht.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || o.sshKid || void 0, p = this.generateCacheRecord(e, t, n, o, h, a, i), v.label = 1;
            case 1:
              return v.trys.push([1, , 5, 8]), this.persistencePlugin && this.serializableCache ? (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), g = new jp(this.serializableCache, !0), [4, this.persistencePlugin.beforeCacheAccess(g)]) : [3, 3];
            case 2:
              v.sent(), v.label = 3;
            case 3:
              return s && !c && p.account && (m = p.account.generateAccountKey(), C = this.cacheStorage.getAccount(m), !C) ? (this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), [2, r.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, h, f, void 0, l)]) : [4, this.cacheStorage.saveCacheRecord(p)];
            case 4:
              return v.sent(), [3, 8];
            case 5:
              return this.persistencePlugin && this.serializableCache && g ? (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), [4, this.persistencePlugin.afterCacheAccess(g)]) : [3, 7];
            case 6:
              v.sent(), v.label = 7;
            case 7:
              return [
                7
                /*endfinally*/
              ];
            case 8:
              return [2, r.generateAuthenticationResult(this.cryptoObj, t, p, !1, o, h, f, e, l)];
          }
        });
      });
    }, r.prototype.generateCacheRecord = function(e, t, n, o, i, a, s) {
      var c = t.getPreferredCache();
      if (F.isEmpty(c))
        throw z.createInvalidCacheEnvironmentError();
      var l, u;
      !F.isEmpty(e.id_token) && i && (l = er.createIdTokenEntity(this.homeAccountIdentifier, c, e.id_token || S.EMPTY_STRING, this.clientId, i.claims.tid || S.EMPTY_STRING), u = He.createAccount({
        homeAccountId: this.homeAccountIdentifier,
        idTokenClaims: i.claims,
        clientInfo: e.client_info || S.EMPTY_STRING,
        cloudGraphHostName: s == null ? void 0 : s.cloud_graph_host_name,
        msGraphHost: s == null ? void 0 : s.msgraph_host
      }, t));
      var h = null;
      if (!F.isEmpty(e.access_token)) {
        var d = e.scope ? je.fromString(e.scope) : new je(o.scopes || []), f = (typeof e.expires_in == "string" ? parseInt(e.expires_in, 10) : e.expires_in) || 0, p = (typeof e.ext_expires_in == "string" ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0, g = (typeof e.refresh_in == "string" ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0, m = n + f, C = m + p, v = g && g > 0 ? n + g : void 0;
        h = tr.createAccessTokenEntity(this.homeAccountIdentifier, c, e.access_token || S.EMPTY_STRING, this.clientId, i ? i.claims.tid || S.EMPTY_STRING : t.tenant, d.printScopes(), m, C, this.cryptoObj, v, e.token_type, a, e.key_id, o.claims, o.requestedClaimsHash);
      }
      var b = null;
      F.isEmpty(e.refresh_token) || (b = Gr.createRefreshTokenEntity(this.homeAccountIdentifier, c, e.refresh_token || S.EMPTY_STRING, this.clientId, e.foci, a));
      var w = null;
      return F.isEmpty(e.foci) || (w = qi.createAppMetadataEntity(this.clientId, c, e.foci)), new Qr(u, l, h, b, w);
    }, r.generateAuthenticationResult = function(e, t, n, o, i, a, s, c, l) {
      var u, h, d;
      return ne(this, void 0, void 0, function() {
        var f, p, g, m, C, v, b, w, E, T, k;
        return oe(this, function(I) {
          switch (I.label) {
            case 0:
              if (f = S.EMPTY_STRING, p = [], g = null, C = S.EMPTY_STRING, !n.accessToken)
                return [3, 4];
              if (n.accessToken.tokenType !== ge.POP)
                return [3, 2];
              if (v = new en(e), b = n.accessToken, w = b.secret, E = b.keyId, !E)
                throw z.createKeyIdMissingError();
              return [4, v.signPopToken(w, E, i)];
            case 1:
              return f = I.sent(), [3, 3];
            case 2:
              f = n.accessToken.secret, I.label = 3;
            case 3:
              p = je.fromString(n.accessToken.target).asArray(), g = new Date(Number(n.accessToken.expiresOn) * 1e3), m = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3), I.label = 4;
            case 4:
              return n.appMetadata && (C = n.appMetadata.familyId === In ? In : S.EMPTY_STRING), T = (a == null ? void 0 : a.claims.oid) || (a == null ? void 0 : a.claims.sub) || S.EMPTY_STRING, k = (a == null ? void 0 : a.claims.tid) || S.EMPTY_STRING, c != null && c.spa_accountid && n.account && (n.account.nativeAccountId = c == null ? void 0 : c.spa_accountid), [2, {
                authority: t.canonicalAuthority,
                uniqueId: T,
                tenantId: k,
                scopes: p,
                account: n.account ? n.account.getAccountInfo() : null,
                idToken: a ? a.rawToken : S.EMPTY_STRING,
                idTokenClaims: a ? a.claims : {},
                accessToken: f,
                fromCache: o,
                expiresOn: g,
                correlationId: i.correlationId,
                requestId: l || S.EMPTY_STRING,
                extExpiresOn: m,
                familyId: C,
                tokenType: ((u = n.accessToken) === null || u === void 0 ? void 0 : u.tokenType) || S.EMPTY_STRING,
                state: s ? s.userRequestState : S.EMPTY_STRING,
                cloudGraphHostName: ((h = n.account) === null || h === void 0 ? void 0 : h.cloudGraphHostName) || S.EMPTY_STRING,
                msGraphHost: ((d = n.account) === null || d === void 0 ? void 0 : d.msGraphHost) || S.EMPTY_STRING,
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
var Ml = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.includeRedirectUri = !0, o;
    }
    return e.prototype.getAuthCodeUrl = function(t) {
      var n, o;
      return ne(this, void 0, void 0, function() {
        var i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.GetAuthCodeUrl, t.correlationId), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.AuthClientCreateQueryString, t.correlationId), [4, this.createAuthCodeUrlQueryString(t)];
            case 1:
              return i = a.sent(), [2, de.appendQueryString(this.authority.authorizationEndpoint, i)];
          }
        });
      });
    }, e.prototype.acquireToken = function(t, n) {
      var o, i, a, s, c, l;
      return ne(this, void 0, void 0, function() {
        var u, h, d, f, p, g, m = this;
        return oe(this, function(C) {
          switch (C.label) {
            case 0:
              if (!t || !t.code)
                throw z.createTokenRequestCannotBeMadeError();
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.AuthClientAcquireToken, t.correlationId), u = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement("AuthCodeClientAcquireToken", t.correlationId), this.logger.info("in acquireToken call in auth-code client"), h = ht.nowSeconds(), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.AuthClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(this.authority, t)];
            case 1:
              return d = C.sent(), f = (s = d.headers) === null || s === void 0 ? void 0 : s[ot.X_MS_REQUEST_ID], p = (c = d.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_HTTP_VERSION], p && (u == null || u.addStaticFields({
                httpVerAuthority: p
              })), g = new Eo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(_.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, h, t, n, void 0, void 0, void 0, f).then(function(v) {
                return u == null || u.endMeasurement({
                  success: !0
                }), v;
              }).catch(function(v) {
                throw m.logger.verbose("Error in fetching token in ACC", t.correlationId), u == null || u.endMeasurement({
                  errorCode: v.errorCode,
                  subErrorCode: v.subError,
                  success: !1
                }), v;
              })];
          }
        });
      });
    }, e.prototype.handleFragmentResponse = function(t, n) {
      var o = new Eo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null), i = new de(t), a = de.getDeserializedHash(i.getHash());
      if (o.validateServerAuthorizationCodeResponse(a, n, this.cryptoUtils), !a.code)
        throw z.createNoAuthCodeInServerResponseError();
      return fe(fe({}, a), {
        // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
        code: a.code
      });
    }, e.prototype.getLogoutUri = function(t) {
      if (!t)
        throw be.createEmptyLogoutRequestError();
      var n = this.createLogoutUrlQueryString(t);
      return de.appendQueryString(this.authority.endSessionEndpoint, n);
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, i;
      return ne(this, void 0, void 0, function() {
        var a, s, c, l, u, h, d;
        return oe(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.AuthClientExecuteTokenRequest, n.correlationId), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.AuthClientCreateTokenRequestBody, n.correlationId), a = this.createTokenQueryParameters(n), s = de.appendQueryString(t.tokenEndpoint, a), [4, this.createTokenRequestBody(n)];
            case 1:
              if (c = f.sent(), l = void 0, n.clientInfo)
                try {
                  u = Co(n.clientInfo, this.cryptoUtils), l = {
                    credential: "" + u.uid + ke.CLIENT_INFO_SEPARATOR + u.utid,
                    type: rt.HOME_ACCOUNT_ID
                  };
                } catch (p) {
                  this.logger.verbose("Could not parse client info for CCS Header: " + p);
                }
              return h = this.createTokenRequestHeaders(l || n.ccsCredential), d = {
                clientId: this.config.authOptions.clientId,
                authority: t.canonicalAuthority,
                scopes: n.scopes,
                claims: n.claims,
                authenticationScheme: n.authenticationScheme,
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                sshKid: n.sshKid
              }, [2, this.executePostToTokenEndpoint(s, c, h, d)];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o;
      return ne(this, void 0, void 0, function() {
        var i, a, s, c, l, u, h, h, d;
        return oe(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.AuthClientCreateTokenRequestBody, t.correlationId), i = new Rn(), i.addClientId(this.config.authOptions.clientId), this.includeRedirectUri ? i.addRedirectUri(t.redirectUri) : yr.validateRedirectUri(t.redirectUri), i.addScopes(t.scopes), i.addAuthorizationCode(t.code), i.addLibraryInfo(this.config.libraryInfo), i.addApplicationTelemetry(this.config.telemetry.application), i.addThrottling(), this.serverTelemetryManager && i.addServerTelemetry(this.serverTelemetryManager), t.codeVerifier && i.addCodeVerifier(t.codeVerifier), this.config.clientCredentials.clientSecret && i.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (a = this.config.clientCredentials.clientAssertion, i.addClientAssertion(a.assertion), i.addClientAssertionType(a.assertionType)), i.addGrantType(yo.AUTHORIZATION_CODE_GRANT), i.addClientInfo(), t.authenticationScheme !== ge.POP ? [3, 2] : (s = new en(this.cryptoUtils, this.performanceClient), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.PopTokenGenerateCnf, t.correlationId), [4, s.generateCnf(t)]);
            case 1:
              return c = f.sent(), i.addPopToken(c.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ge.SSH)
                if (t.sshJwk)
                  i.addSshJwk(t.sshJwk);
                else
                  throw be.createMissingSshJwkError();
              f.label = 3;
            case 3:
              if (l = t.correlationId || this.config.cryptoInterface.createNewGuid(), i.addCorrelationId(l), (!F.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && i.addClaims(t.claims, this.config.authOptions.clientCapabilities), u = void 0, t.clientInfo)
                try {
                  h = Co(t.clientInfo, this.cryptoUtils), u = {
                    credential: "" + h.uid + ke.CLIENT_INFO_SEPARATOR + h.utid,
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
                      h = Vr(u.credential), i.addCcsOid(h);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case rt.UPN:
                    i.addCcsUpn(u.credential);
                    break;
                }
              return t.tokenBodyParameters && i.addExtraQueryParameters(t.tokenBodyParameters), t.enableSpaAuthorizationCode && (!t.tokenBodyParameters || !t.tokenBodyParameters[ie.RETURN_SPA_CODE]) && i.addExtraQueryParameters((d = {}, d[ie.RETURN_SPA_CODE] = "1", d)), [2, i.createQueryString()];
          }
        });
      });
    }, e.prototype.createAuthCodeUrlQueryString = function(t) {
      var n;
      return ne(this, void 0, void 0, function() {
        var o, i, a, s, c, l, l, l, u, h;
        return oe(this, function(d) {
          switch (d.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.AuthClientCreateQueryString, t.correlationId), o = new Rn(), o.addClientId(this.config.authOptions.clientId), i = Vo(t.scopes || [], t.extraScopesToConsent || []), o.addScopes(i), o.addRedirectUri(t.redirectUri), a = t.correlationId || this.config.cryptoInterface.createNewGuid(), o.addCorrelationId(a), o.addResponseMode(t.responseMode), o.addResponseTypeCode(), o.addLibraryInfo(this.config.libraryInfo), o.addApplicationTelemetry(this.config.telemetry.application), o.addClientInfo(), t.codeChallenge && t.codeChallengeMethod && o.addCodeChallengeParams(t.codeChallenge, t.codeChallengeMethod), t.prompt && o.addPrompt(t.prompt), t.domainHint && o.addDomainHint(t.domainHint), t.prompt !== Ue.SELECT_ACCOUNT)
                if (t.sid && t.prompt === Ue.NONE)
                  this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), o.addSid(t.sid);
                else if (t.account) {
                  if (s = this.extractAccountSid(t.account), c = this.extractLoginHint(t.account), c) {
                    this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), o.addLoginHint(c);
                    try {
                      l = Vr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (s && t.prompt === Ue.NONE) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), o.addSid(s);
                    try {
                      l = Vr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  } else if (t.loginHint)
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint);
                  else if (t.account.username) {
                    this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), o.addLoginHint(t.account.username);
                    try {
                      l = Vr(t.account.homeAccountId), o.addCcsOid(l);
                    } catch {
                      this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header");
                    }
                  }
                } else
                  t.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), o.addLoginHint(t.loginHint), o.addCcsUpn(t.loginHint));
              else
                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
              return t.nonce && o.addNonce(t.nonce), t.state && o.addState(t.state), (!F.isEmpty(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && o.addClaims(t.claims, this.config.authOptions.clientCapabilities), t.extraQueryParameters && o.addExtraQueryParameters(t.extraQueryParameters), t.nativeBroker ? (o.addNativeBroker(), t.authenticationScheme !== ge.POP ? [3, 2] : (u = new en(this.cryptoUtils), [4, u.generateCnf(t)])) : [3, 2];
            case 1:
              h = d.sent(), o.addPopToken(h.reqCnfString), d.label = 2;
            case 2:
              return [2, o.createQueryString()];
          }
        });
      });
    }, e.prototype.createLogoutUrlQueryString = function(t) {
      var n = new Rn();
      return t.postLogoutRedirectUri && n.addPostLogoutRedirectUri(t.postLogoutRedirectUri), t.correlationId && n.addCorrelationId(t.correlationId), t.idTokenHint && n.addIdTokenHint(t.idTokenHint), t.state && n.addState(t.state), t.logoutHint && n.addLogoutHint(t.logoutHint), t.extraQueryParameters && n.addExtraQueryParameters(t.extraQueryParameters), n.createQueryString();
    }, e.prototype.extractAccountSid = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.sid) || null;
    }, e.prototype.extractLoginHint = function(t) {
      var n;
      return ((n = t.idTokenClaims) === null || n === void 0 ? void 0 : n.login_hint) || null;
    }, e;
  }(ba)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var xl = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      var n, o, i, a, s, c, l;
      return ne(this, void 0, void 0, function() {
        var u, h, d, f, p, g, m = this;
        return oe(this, function(C) {
          switch (C.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RefreshTokenClientAcquireToken, t.correlationId), u = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.RefreshTokenClientAcquireToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireToken called", t.correlationId), h = ht.nowSeconds(), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), [4, this.executeTokenRequest(t, this.authority)];
            case 1:
              return d = C.sent(), f = (a = d.headers) === null || a === void 0 ? void 0 : a[ot.X_MS_HTTP_VERSION], u == null || u.addStaticFields({
                refreshTokenSize: ((s = d.body.refresh_token) === null || s === void 0 ? void 0 : s.length) || 0
              }), f && (u == null || u.addStaticFields({
                httpVerToken: f
              })), p = (c = d.headers) === null || c === void 0 ? void 0 : c[ot.X_MS_REQUEST_ID], g = new Eo(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin), g.validateTokenResponse(d.body), (l = this.performanceClient) === null || l === void 0 || l.setPreQueueTime(_.HandleServerTokenResponse, t.correlationId), [2, g.handleServerTokenResponse(d.body, this.authority, h, t, void 0, void 0, !0, t.forceCache, p).then(function(v) {
                return u == null || u.endMeasurement({
                  success: !0
                }), v;
              }).catch(function(v) {
                throw m.logger.verbose("Error in fetching refresh token", t.correlationId), u == null || u.endMeasurement({
                  errorCode: v.errorCode,
                  subErrorCode: v.subError,
                  success: !1
                }), v;
              })];
          }
        });
      });
    }, e.prototype.acquireTokenByRefreshToken = function(t) {
      var n, o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l;
        return oe(this, function(u) {
          if (!t)
            throw be.createEmptyTokenRequestError();
          if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), !t.account)
            throw z.createNoAccountInSilentRequestError();
          if (s = this.cacheManager.isAppMetadataFOCI(t.account.environment), s)
            try {
              return (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !0)];
            } catch (h) {
              if (c = h instanceof wt && h.errorCode === Wr.noTokensFoundError.code, l = h instanceof Ir && h.errorCode === Zs.INVALID_GRANT_ERROR && h.subError === Zs.CLIENT_MISMATCH_ERROR, c || l)
                return (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
              throw h;
            }
          return (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), [2, this.acquireTokenWithCachedRefreshToken(t, !1)];
        });
      });
    }, e.prototype.acquireTokenWithCachedRefreshToken = function(t, n) {
      var o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l;
        return oe(this, function(u) {
          if ((o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), s = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(_.RefreshTokenClientAcquireTokenWithCachedRefreshToken, t.correlationId), this.logger.verbose("RefreshTokenClientAcquireTokenWithCachedRefreshToken called", t.correlationId), c = this.cacheManager.getRefreshToken(t.account, n), !c)
            throw s == null || s.discardMeasurement(), wt.createNoTokensFoundError();
          return s == null || s.endMeasurement({
            success: !0
          }), l = fe(fe({}, t), { refreshToken: c.secret, authenticationScheme: t.authenticationScheme || ge.BEARER, ccsCredential: {
            credential: t.account.homeAccountId,
            type: rt.HOME_ACCOUNT_ID
          } }), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientAcquireToken, t.correlationId), [2, this.acquireToken(l)];
        });
      });
    }, e.prototype.executeTokenRequest = function(t, n) {
      var o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l, u, h, d;
        return oe(this, function(f) {
          switch (f.label) {
            case 0:
              return (o = this.performanceClient) === null || o === void 0 || o.addQueueMeasurement(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), s = (i = this.performanceClient) === null || i === void 0 ? void 0 : i.startMeasurement(_.RefreshTokenClientExecuteTokenRequest, t.correlationId), (a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RefreshTokenClientCreateTokenRequestBody, t.correlationId), c = this.createTokenQueryParameters(t), l = de.appendQueryString(n.tokenEndpoint, c), [4, this.createTokenRequestBody(t)];
            case 1:
              return u = f.sent(), h = this.createTokenRequestHeaders(t.ccsCredential), d = {
                clientId: this.config.authOptions.clientId,
                authority: n.canonicalAuthority,
                scopes: t.scopes,
                claims: t.claims,
                authenticationScheme: t.authenticationScheme,
                resourceRequestMethod: t.resourceRequestMethod,
                resourceRequestUri: t.resourceRequestUri,
                shrClaims: t.shrClaims,
                sshKid: t.sshKid
              }, [2, this.executePostToTokenEndpoint(l, u, h, d).then(function(p) {
                return s == null || s.endMeasurement({
                  success: !0
                }), p;
              }).catch(function(p) {
                throw s == null || s.endMeasurement({
                  success: !1
                }), p;
              })];
          }
        });
      });
    }, e.prototype.createTokenRequestBody = function(t) {
      var n, o, i;
      return ne(this, void 0, void 0, function() {
        var a, s, c, l, u, h, d;
        return oe(this, function(f) {
          switch (f.label) {
            case 0:
              return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RefreshTokenClientCreateTokenRequestBody, t.correlationId), a = t.correlationId, s = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.BaseClientCreateTokenRequestHeaders, a), c = new Rn(), c.addClientId(this.config.authOptions.clientId), c.addScopes(t.scopes), c.addGrantType(yo.REFRESH_TOKEN_GRANT), c.addClientInfo(), c.addLibraryInfo(this.config.libraryInfo), c.addApplicationTelemetry(this.config.telemetry.application), c.addThrottling(), this.serverTelemetryManager && c.addServerTelemetry(this.serverTelemetryManager), c.addCorrelationId(a), c.addRefreshToken(t.refreshToken), this.config.clientCredentials.clientSecret && c.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion && (l = this.config.clientCredentials.clientAssertion, c.addClientAssertion(l.assertion), c.addClientAssertionType(l.assertionType)), t.authenticationScheme !== ge.POP ? [3, 2] : (u = new en(this.cryptoUtils, this.performanceClient), (i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.PopTokenGenerateCnf, t.correlationId), [4, u.generateCnf(t)]);
            case 1:
              return h = f.sent(), c.addPopToken(h.reqCnfString), [3, 3];
            case 2:
              if (t.authenticationScheme === ge.SSH)
                if (t.sshJwk)
                  c.addSshJwk(t.sshJwk);
                else
                  throw s == null || s.endMeasurement({
                    success: !1
                  }), be.createMissingSshJwkError();
              f.label = 3;
            case 3:
              if ((!F.isEmptyObj(t.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && c.addClaims(t.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && t.ccsCredential)
                switch (t.ccsCredential.type) {
                  case rt.HOME_ACCOUNT_ID:
                    try {
                      d = Vr(t.ccsCredential.credential), c.addCcsOid(d);
                    } catch (p) {
                      this.logger.verbose("Could not parse home account ID for CCS Header: " + p);
                    }
                    break;
                  case rt.UPN:
                    c.addCcsUpn(t.ccsCredential.credential);
                    break;
                }
              return s == null || s.endMeasurement({
                success: !0
              }), [2, c.createQueryString()];
          }
        });
      });
    }, e;
  }(ba)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Fp = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      return r.call(this, t, n) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return ne(this, void 0, void 0, function() {
        var n, o;
        return oe(this, function(i) {
          switch (i.label) {
            case 0:
              return i.trys.push([0, 2, , 3]), [4, this.acquireCachedToken(t)];
            case 1:
              return [2, i.sent()];
            case 2:
              if (n = i.sent(), n instanceof z && n.errorCode === O.tokenRefreshRequired.code)
                return o = new xl(this.config, this.performanceClient), [2, o.acquireTokenByRefreshToken(t)];
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
      var n, o, i, a, s;
      return ne(this, void 0, void 0, function() {
        var c, l;
        return oe(this, function(u) {
          switch (u.label) {
            case 0:
              if (!t)
                throw be.createEmptyTokenRequestError();
              if (t.forceRefresh)
                throw (n = this.serverTelemetryManager) === null || n === void 0 || n.setCacheOutcome(Zt.FORCE_REFRESH), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true."), z.createRefreshRequiredError();
              if (!this.config.cacheOptions.claimsBasedCachingEnabled && !F.isEmptyObj(t.claims))
                throw (o = this.serverTelemetryManager) === null || o === void 0 || o.setCacheOutcome(Zt.CLAIMS_REQUESTED_CACHE_SKIPPED), this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because claims-based caching is disabled and claims were requested."), z.createRefreshRequiredError();
              if (!t.account)
                throw z.createNoAccountInSilentRequestError();
              if (c = t.authority || this.authority.getPreferredCache(), l = this.cacheManager.readCacheRecord(t.account, t, c), l.accessToken) {
                if (ht.wasClockTurnedBack(l.accessToken.cachedAt) || ht.isTokenExpired(l.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds))
                  throw (a = this.serverTelemetryManager) === null || a === void 0 || a.setCacheOutcome(Zt.CACHED_ACCESS_TOKEN_EXPIRED), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds."), z.createRefreshRequiredError();
                if (l.accessToken.refreshOn && ht.isTokenExpired(l.accessToken.refreshOn, 0))
                  throw (s = this.serverTelemetryManager) === null || s === void 0 || s.setCacheOutcome(Zt.REFRESH_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'."), z.createRefreshRequiredError();
              } else
                throw (i = this.serverTelemetryManager) === null || i === void 0 || i.setCacheOutcome(Zt.NO_CACHED_ACCESS_TOKEN), this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties."), z.createRefreshRequiredError();
              return this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [4, this.generateResultFromCacheRecord(l, t)];
            case 1:
              return [2, u.sent()];
          }
        });
      });
    }, e.prototype.generateResultFromCacheRecord = function(t, n) {
      return ne(this, void 0, void 0, function() {
        var o, i;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              if (t.idToken && (o = new Ot(t.idToken.secret, this.config.cryptoInterface)), n.maxAge || n.maxAge === 0) {
                if (i = o == null ? void 0 : o.claims.auth_time, !i)
                  throw z.createAuthTimeNotFoundError();
                Ot.checkMaxAge(i, n.maxAge);
              }
              return [4, Eo.generateAuthenticationResult(this.cryptoUtils, this.authority, t, !0, n, o)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, e;
  }(ba)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Up(r) {
  return r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("jwks_uri");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Ll = { endpointMetadata: { "https://login.microsoftonline.com/common/": { token_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/common/": { token_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/common/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/common/": { token_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/common/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/common/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/common/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/consumers/": { token_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/consumers/": { token_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/consumers/": { token_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/consumers/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/consumers/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/consumers/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" }, "https://login.microsoftonline.com/organizations/": { token_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.com/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.com/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.com/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.com/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.com", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pas.windows.net" }, "https://login.chinacloudapi.cn/organizations/": { token_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.chinacloudapi.cn/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://microsoftgraph.chinacloudapi.cn/oidc/userinfo", authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.chinacloudapi.cn/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.chinacloudapi.cn/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "partner.microsoftonline.cn", cloud_graph_host_name: "graph.chinacloudapi.cn", msgraph_host: "microsoftgraph.chinacloudapi.cn", rbac_url: "https://pas.chinacloudapi.cn" }, "https://login.microsoftonline.us/organizations/": { token_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/token", token_endpoint_auth_methods_supported: ["client_secret_post", "private_key_jwt", "client_secret_basic"], jwks_uri: "https://login.microsoftonline.us/organizations/discovery/v2.0/keys", response_modes_supported: ["query", "fragment", "form_post"], subject_types_supported: ["pairwise"], id_token_signing_alg_values_supported: ["RS256"], response_types_supported: ["code", "id_token", "code id_token", "id_token token"], scopes_supported: ["openid", "profile", "email", "offline_access"], issuer: "https://login.microsoftonline.us/{tenantid}/v2.0", request_uri_parameter_supported: !1, userinfo_endpoint: "https://graph.microsoft.com/oidc/userinfo", authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/authorize", device_authorization_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/devicecode", http_logout_supported: !0, frontchannel_logout_supported: !0, end_session_endpoint: "https://login.microsoftonline.us/organizations/oauth2/v2.0/logout", claims_supported: ["sub", "iss", "cloud_instance_name", "cloud_instance_host_name", "cloud_graph_host_name", "msgraph_host", "aud", "exp", "iat", "auth_time", "acr", "nonce", "preferred_username", "name", "tid", "ver", "at_hash", "c_hash", "email"], kerberos_endpoint: "https://login.microsoftonline.us/organizations/kerberos", tenant_region_scope: null, cloud_instance_name: "microsoftonline.us", cloud_graph_host_name: "graph.windows.net", msgraph_host: "graph.microsoft.com", rbac_url: "https://pasff.usgovcloudapi.net" } }, instanceDiscoveryMetadata: { "https://login.microsoftonline.com/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/common/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/common/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/common/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/consumers/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/consumers/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/consumers/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.com/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.com/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.chinacloudapi.cn/organizations/": { tenant_discovery_endpoint: "https://login.chinacloudapi.cn/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] }, "https://login.microsoftonline.us/organizations/": { tenant_discovery_endpoint: "https://login.microsoftonline.us/organizations/v2.0/.well-known/openid-configuration", "api-version": "1.1", metadata: [{ preferred_network: "login.microsoftonline.com", preferred_cache: "login.windows.net", aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"] }, { preferred_network: "login.partner.microsoftonline.cn", preferred_cache: "login.partner.microsoftonline.cn", aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"] }, { preferred_network: "login.microsoftonline.de", preferred_cache: "login.microsoftonline.de", aliases: ["login.microsoftonline.de"] }, { preferred_network: "login.microsoftonline.us", preferred_cache: "login.microsoftonline.us", aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"] }, { preferred_network: "login-us.microsoftonline.com", preferred_cache: "login-us.microsoftonline.com", aliases: ["login-us.microsoftonline.com"] }] } } }, tc = Ll.endpointMetadata, rc = Ll.instanceDiscoveryMetadata;
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Vi = (
  /** @class */
  function() {
    function r() {
      this.expiresAt = ht.nowSeconds() + _n.REFRESH_TIME_SECONDS;
    }
    return r.prototype.updateCloudDiscoveryMetadata = function(e, t) {
      this.aliases = e.aliases, this.preferred_cache = e.preferred_cache, this.preferred_network = e.preferred_network, this.aliasesFromNetwork = t;
    }, r.prototype.updateEndpointMetadata = function(e, t) {
      this.authorization_endpoint = e.authorization_endpoint, this.token_endpoint = e.token_endpoint, this.end_session_endpoint = e.end_session_endpoint, this.issuer = e.issuer, this.endpointsFromNetwork = t, this.jwks_uri = e.jwks_uri;
    }, r.prototype.updateCanonicalAuthority = function(e) {
      this.canonical_authority = e;
    }, r.prototype.resetExpiresAt = function() {
      this.expiresAt = ht.nowSeconds() + _n.REFRESH_TIME_SECONDS;
    }, r.prototype.isExpired = function() {
      return this.expiresAt <= ht.nowSeconds();
    }, r.isAuthorityMetadataEntity = function(e, t) {
      return t ? e.indexOf(_n.CACHE_KEY) === 0 && t.hasOwnProperty("aliases") && t.hasOwnProperty("preferred_cache") && t.hasOwnProperty("preferred_network") && t.hasOwnProperty("canonical_authority") && t.hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("aliasesFromNetwork") && t.hasOwnProperty("endpointsFromNetwork") && t.hasOwnProperty("expiresAt") && t.hasOwnProperty("jwks_uri") : !1;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Hp(r) {
  return r.hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
function Bp(r) {
  return r.hasOwnProperty("error") && r.hasOwnProperty("error_description");
}
/*! @azure/msal-common v13.3.3 2024-06-06 */
var zp = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.networkInterface = e, this.performanceClient = t, this.correlationId = n;
    }
    return r.prototype.detectRegion = function(e, t) {
      var n, o, i, a;
      return ne(this, void 0, void 0, function() {
        var s, c, l, u, h;
        return oe(this, function(d) {
          switch (d.label) {
            case 0:
              if ((n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RegionDiscoveryDetectRegion, this.correlationId), s = e, s)
                return [3, 8];
              c = r.IMDS_OPTIONS, d.label = 1;
            case 1:
              return d.trys.push([1, 6, , 7]), (o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(S.IMDS_VERSION, c)];
            case 2:
              return l = d.sent(), l.status === qr.httpSuccess && (s = l.body, t.region_source = Jt.IMDS), l.status !== qr.httpBadRequest ? [3, 5] : ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.RegionDiscoveryGetCurrentVersion, this.correlationId), [4, this.getCurrentVersion(c)]);
            case 3:
              return u = d.sent(), u ? ((a = this.performanceClient) === null || a === void 0 || a.setPreQueueTime(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [4, this.getRegionFromIMDS(u, c)]) : (t.region_source = Jt.FAILED_AUTO_DETECTION, [2, null]);
            case 4:
              h = d.sent(), h.status === qr.httpSuccess && (s = h.body, t.region_source = Jt.IMDS), d.label = 5;
            case 5:
              return [3, 7];
            case 6:
              return d.sent(), t.region_source = Jt.FAILED_AUTO_DETECTION, [2, null];
            case 7:
              return [3, 9];
            case 8:
              t.region_source = Jt.ENVIRONMENT_VARIABLE, d.label = 9;
            case 9:
              return s || (t.region_source = Jt.FAILED_AUTO_DETECTION), [2, s || null];
          }
        });
      });
    }, r.prototype.getRegionFromIMDS = function(e, t) {
      var n;
      return ne(this, void 0, void 0, function() {
        return oe(this, function(o) {
          return (n = this.performanceClient) === null || n === void 0 || n.addQueueMeasurement(_.RegionDiscoveryGetRegionFromIMDS, this.correlationId), [2, this.networkInterface.sendGetRequestAsync(S.IMDS_ENDPOINT + "?api-version=" + e + "&format=text", t, S.IMDS_TIMEOUT)];
        });
      });
    }, r.prototype.getCurrentVersion = function(e) {
      var t;
      return ne(this, void 0, void 0, function() {
        var n;
        return oe(this, function(o) {
          switch (o.label) {
            case 0:
              (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.RegionDiscoveryGetCurrentVersion, this.correlationId), o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(S.IMDS_ENDPOINT + "?format=json", e)];
            case 2:
              return n = o.sent(), n.status === qr.httpBadRequest && n.body && n.body["newest-versions"] && n.body["newest-versions"].length > 0 ? [2, n.body["newest-versions"][0]] : [2, null];
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
var xn = (
  /** @class */
  function() {
    function r(e, t, n, o, i, a, s) {
      this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = n, this.authorityOptions = o, this.regionDiscoveryMetadata = { region_used: void 0, region_source: void 0, region_outcome: void 0 }, this.logger = i, this.performanceClient = a, this.correlationId = s, this.regionDiscovery = new zp(t, this.performanceClient, this.correlationId);
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
        this._canonicalAuthority = new de(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null;
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
        throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "deviceCodeEndpoint", {
      get: function() {
        if (this.discoveryComplete())
          return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
            throw z.createLogoutNotSupportedError();
          return this.replacePath(this.metadata.end_session_endpoint);
        } else
          throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
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
        throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.canReplaceTenant = function(e) {
      return e.PathSegments.length === 1 && !r.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === We.Default && this.protocolMode === Zr.AAD;
    }, r.prototype.replaceTenant = function(e) {
      return e.replace(/{tenant}|{tenantid}/g, this.tenant);
    }, r.prototype.replacePath = function(e) {
      var t = this, n = e, o = new de(this.metadata.canonical_authority), i = o.getUrlComponents(), a = i.PathSegments, s = this.canonicalAuthorityUrlComponents.PathSegments;
      return s.forEach(function(c, l) {
        var u = a[l];
        if (l === 0 && t.canReplaceTenant(i)) {
          var h = new de(t.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
          u !== h && (t.logger.verbose("Replacing tenant domain name " + u + " with id " + h), u = h);
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
      return ne(this, void 0, void 0, function() {
        var o, i, a, s;
        return oe(this, function(c) {
          switch (c.label) {
            case 0:
              return (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityResolveEndpointsAsync, this.correlationId), o = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort), o || (o = new Vi(), o.updateCanonicalAuthority(this.canonicalAuthority)), (t = this.performanceClient) === null || t === void 0 || t.setPreQueueTime(_.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), [4, this.updateCloudDiscoveryMetadata(o)];
            case 1:
              return i = c.sent(), this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, o.preferred_network), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(_.AuthorityUpdateEndpointMetadata, this.correlationId), [4, this.updateEndpointMetadata(o)];
            case 2:
              return a = c.sent(), i !== dt.CACHE && a !== dt.CACHE && (o.resetExpiresAt(), o.updateCanonicalAuthority(this.canonicalAuthority)), s = this.cacheManager.generateAuthorityMetadataCacheKey(o.preferred_cache), this.cacheManager.setAuthorityMetadata(s, o), this.metadata = o, [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.updateEndpointMetadata = function(e) {
      var t, n, o, i, a, s;
      return ne(this, void 0, void 0, function() {
        var c, l;
        return oe(this, function(u) {
          switch (u.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateEndpointMetadata, this.correlationId), c = this.getEndpointMetadataFromConfig(), c ? (e.updateEndpointMetadata(c, !1), [2, dt.CONFIG]) : this.isAuthoritySameType(e) && e.endpointsFromNetwork && !e.isExpired() ? [2, dt.CACHE] : ((n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(_.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), [4, this.getEndpointMetadataFromNetwork()]);
            case 1:
              return c = u.sent(), c ? !((o = this.authorityOptions.azureRegionConfiguration) === null || o === void 0) && o.azureRegion ? ((i = this.performanceClient) === null || i === void 0 || i.setPreQueueTime(_.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(c)]) : [3, 3] : [3, 4];
            case 2:
              c = u.sent(), u.label = 3;
            case 3:
              return e.updateEndpointMetadata(c, !0), [2, dt.NETWORK];
            case 4:
              return l = this.getEndpointMetadataFromHardcodedValues(), l && !this.authorityOptions.skipAuthorityMetadataCache ? !((a = this.authorityOptions.azureRegionConfiguration) === null || a === void 0) && a.azureRegion ? ((s = this.performanceClient) === null || s === void 0 || s.setPreQueueTime(_.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), [4, this.updateMetadataWithRegionalInformation(l)]) : [3, 6] : [3, 7];
            case 5:
              l = u.sent(), u.label = 6;
            case 6:
              return e.updateEndpointMetadata(l, !1), [2, dt.HARDCODED_VALUES];
            case 7:
              throw z.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
          }
        });
      });
    }, r.prototype.isAuthoritySameType = function(e) {
      var t = new de(e.canonical_authority), n = t.getUrlComponents().PathSegments;
      return n.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
    }, r.prototype.getEndpointMetadataFromConfig = function() {
      if (this.authorityOptions.authorityMetadata)
        try {
          return JSON.parse(this.authorityOptions.authorityMetadata);
        } catch {
          throw be.createInvalidAuthorityMetadataError();
        }
      return null;
    }, r.prototype.getEndpointMetadataFromNetwork = function() {
      var e;
      return ne(this, void 0, void 0, function() {
        var t, n;
        return oe(this, function(o) {
          switch (o.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityGetEndpointMetadataFromNetwork, this.correlationId), t = {}, o.label = 1;
            case 1:
              return o.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, t)];
            case 2:
              return n = o.sent(), [2, Up(n.body) ? n.body : null];
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
      return this.canonicalAuthority in tc ? tc[this.canonicalAuthority] : null;
    }, r.prototype.updateMetadataWithRegionalInformation = function(e) {
      var t, n, o, i;
      return ne(this, void 0, void 0, function() {
        var a, s;
        return oe(this, function(c) {
          switch (c.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId), a = (n = this.authorityOptions.azureRegionConfiguration) === null || n === void 0 ? void 0 : n.azureRegion, a ? a !== S.AZURE_REGION_AUTO_DISCOVER_FLAG ? (this.regionDiscoveryMetadata.region_outcome = An.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = a, [2, r.replaceWithRegionalInformation(e, a)]) : ((o = this.performanceClient) === null || o === void 0 || o.setPreQueueTime(_.RegionDiscoveryDetectRegion, this.correlationId), [4, this.regionDiscovery.detectRegion((i = this.authorityOptions.azureRegionConfiguration) === null || i === void 0 ? void 0 : i.environmentRegion, this.regionDiscoveryMetadata)]) : [3, 2];
            case 1:
              if (s = c.sent(), s)
                return this.regionDiscoveryMetadata.region_outcome = An.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = s, [2, r.replaceWithRegionalInformation(e, s)];
              this.regionDiscoveryMetadata.region_outcome = An.AUTO_DETECTION_REQUESTED_FAILED, c.label = 2;
            case 2:
              return [2, e];
          }
        });
      });
    }, r.prototype.updateCloudDiscoveryMetadata = function(e) {
      var t, n;
      return ne(this, void 0, void 0, function() {
        var o, i, a;
        return oe(this, function(s) {
          switch (s.label) {
            case 0:
              return (t = this.performanceClient) === null || t === void 0 || t.addQueueMeasurement(_.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId), this.logger.verbose("Attempting to get cloud discovery metadata in the config"), this.logger.verbosePii("Known Authorities: " + (this.authorityOptions.knownAuthorities || S.NOT_APPLICABLE)), this.logger.verbosePii("Authority Metadata: " + (this.authorityOptions.authorityMetadata || S.NOT_APPLICABLE)), this.logger.verbosePii("Canonical Authority: " + (e.canonical_authority || S.NOT_APPLICABLE)), o = this.getCloudDiscoveryMetadataFromConfig(), o ? (this.logger.verbose("Found cloud discovery metadata in the config."), e.updateCloudDiscoveryMetadata(o, !1), [2, dt.CONFIG]) : (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the cache."), i = e.isExpired(), this.isAuthoritySameType(e) && e.aliasesFromNetwork && !i ? (this.logger.verbose("Found metadata in the cache."), [2, dt.CACHE]) : (i && this.logger.verbose("The metadata entity is expired."), this.logger.verbose("Did not find cloud discovery metadata in the cache... Attempting to get cloud discovery metadata from the network."), (n = this.performanceClient) === null || n === void 0 || n.setPreQueueTime(_.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), [4, this.getCloudDiscoveryMetadataFromNetwork()]));
            case 1:
              if (o = s.sent(), o)
                return this.logger.verbose("cloud discovery metadata was successfully returned from getCloudDiscoveryMetadataFromNetwork()"), e.updateCloudDiscoveryMetadata(o, !0), [2, dt.NETWORK];
              if (this.logger.verbose("Did not find cloud discovery metadata from the network... Attempting to get cloud discovery metadata from hardcoded values."), a = this.getCloudDiscoveryMetadataFromHarcodedValues(), a && !this.options.skipAuthorityMetadataCache)
                return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), e.updateCloudDiscoveryMetadata(a, !1), [2, dt.HARDCODED_VALUES];
              throw this.logger.error("Did not find cloud discovery metadata from hardcoded values... Metadata could not be obtained from config, cache, network or hardcoded values. Throwing Untrusted Authority Error."), be.createUntrustedAuthorityError();
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
          throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), be.createInvalidCloudDiscoveryMetadataError();
        }
      }
      return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), r.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null;
    }, r.prototype.getCloudDiscoveryMetadataFromNetwork = function() {
      var e;
      return ne(this, void 0, void 0, function() {
        var t, n, o, i, a, s, c, l;
        return oe(this, function(u) {
          switch (u.label) {
            case 0:
              (e = this.performanceClient) === null || e === void 0 || e.addQueueMeasurement(_.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId), t = "" + S.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize", n = {}, o = null, u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), [4, this.networkInterface.sendGetRequestAsync(t, n)];
            case 2:
              if (i = u.sent(), a = void 0, s = void 0, Hp(i.body))
                a = i.body, s = a.metadata, this.logger.verbosePii("tenant_discovery_endpoint is: " + a.tenant_discovery_endpoint);
              else if (Bp(i.body)) {
                if (this.logger.warning("A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: " + i.status), a = i.body, a.error === S.INVALID_INSTANCE)
                  return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), [2, null];
                this.logger.warning("The CloudInstanceDiscoveryErrorResponse error is " + a.error), this.logger.warning("The CloudInstanceDiscoveryErrorResponse error description is " + a.error_description), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), s = [];
              } else
                return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), [2, null];
              return this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), o = r.getCloudDiscoveryMetadataFromNetworkResponse(s, this.hostnameAndPort), [3, 4];
            case 3:
              return c = u.sent(), c instanceof V ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
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
      return this.canonicalAuthority in rc ? rc[this.canonicalAuthority] : null;
    }, r.prototype.isInKnownAuthorities = function() {
      var e = this, t = this.authorityOptions.knownAuthorities.filter(function(n) {
        return de.getDomainFromUrl(n).toLowerCase() === e.hostnameAndPort;
      });
      return t.length > 0;
    }, r.generateAuthority = function(e, t) {
      var n;
      if (t && t.azureCloudInstance !== Mn.None) {
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
      throw z.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
    }, r.prototype.isAlias = function(e) {
      return this.metadata.aliases.indexOf(e) > -1;
    }, r.isPublicCloudAuthority = function(e) {
      return S.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0;
    }, r.buildRegionalAuthorityString = function(e, t, n) {
      var o = new de(e);
      o.validateAsUri();
      var i = o.getUrlComponents(), a = t + "." + i.HostNameAndPort;
      this.isPublicCloudAuthority(i.HostNameAndPort) && (a = t + "." + S.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX);
      var s = de.constructAuthorityUriFromObject(fe(fe({}, o.getUrlComponents()), { HostNameAndPort: a })).urlString;
      return n ? s + "?" + n : s;
    }, r.replaceWithRegionalInformation = function(e, t) {
      return e.authorization_endpoint = r.buildRegionalAuthorityString(e.authorization_endpoint, t), e.token_endpoint = r.buildRegionalAuthorityString(e.token_endpoint, t, S.REGIONAL_AUTH_NON_MSI_QUERY_STRING), e.end_session_endpoint && (e.end_session_endpoint = r.buildRegionalAuthorityString(e.end_session_endpoint, t)), e;
    }, r.transformCIAMAuthority = function(e) {
      var t = e.endsWith(S.FORWARD_SLASH) ? e : "" + e + S.FORWARD_SLASH, n = new de(e), o = n.getUrlComponents();
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
    return r.createDiscoveredInstance = function(e, t, n, o, i, a, s) {
      return ne(this, void 0, void 0, function() {
        var c, l, u;
        return oe(this, function(h) {
          switch (h.label) {
            case 0:
              a == null || a.addQueueMeasurement(_.AuthorityFactoryCreateDiscoveredInstance, s), c = xn.transformCIAMAuthority(e), l = r.createInstance(c, t, n, o, i, a, s), h.label = 1;
            case 1:
              return h.trys.push([1, 3, , 4]), a == null || a.setPreQueueTime(_.AuthorityResolveEndpointsAsync, s), [4, l.resolveEndpointsAsync()];
            case 2:
              return h.sent(), [2, l];
            case 3:
              throw u = h.sent(), z.createEndpointDiscoveryIncompleteError(u);
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.createInstance = function(e, t, n, o, i, a, s) {
      if (F.isEmpty(e))
        throw be.createUrlEmptyError();
      return new xn(e, t, n, o, i, a, s);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Io = (
  /** @class */
  function() {
    function r() {
      this.failedRequests = [], this.errors = [], this.cacheHits = 0;
    }
    return r.isServerTelemetryEntity = function(e, t) {
      var n = e.indexOf(Ne.CACHE_KEY) === 0, o = !0;
      return t && (o = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var nc = (
  /** @class */
  function() {
    function r() {
    }
    return r.isThrottlingEntity = function(e, t) {
      var n = !1;
      e && (n = e.indexOf(kn.THROTTLING_PREFIX) === 0);
      var o = !0;
      return t && (o = t.hasOwnProperty("throttleTime")), n && o;
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var $p = {
  sendGetRequestAsync: function() {
    var r = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(V.createUnexpectedError(r));
  },
  sendPostRequestAsync: function() {
    var r = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
    return Promise.reject(V.createUnexpectedError(r));
  }
};
/*! @azure/msal-common v13.3.3 2024-06-06 */
var to = {
  missingKidError: {
    code: "missing_kid_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
  },
  missingAlgError: {
    code: "missing_alg_error",
    desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
  }
}, oc = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "JoseHeaderError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createMissingKidError = function() {
      return new e(to.missingKidError.code, to.missingKidError.desc);
    }, e.createMissingAlgError = function() {
      return new e(to.missingAlgError.code, to.missingAlgError.desc);
    }, e;
  }(V)
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var Kp = (
  /** @class */
  function() {
    function r(e) {
      this.typ = e.typ, this.alg = e.alg, this.kid = e.kid;
    }
    return r.getShrHeaderString = function(e) {
      if (!e.kid)
        throw oc.createMissingKidError();
      if (!e.alg)
        throw oc.createMissingAlgError();
      var t = new r({
        // Access Token PoP headers must have type pop, but the type header can be overriden for special cases
        typ: e.typ || $i.Pop,
        kid: e.kid,
        alg: e.alg
      });
      return JSON.stringify(t);
    }, r;
  }()
);
/*! @azure/msal-common v13.3.3 2024-06-06 */
var qp = (
  /** @class */
  function() {
    function r(e, t) {
      this.cacheOutcome = Zt.NO_CACHE_HIT, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || S.EMPTY_STRING, this.wrapperVer = e.wrapperVer || S.EMPTY_STRING, this.telemetryCacheKey = Ne.CACHE_KEY + ke.CACHE_KEY_SEPARATOR + e.clientId;
    }
    return r.prototype.generateCurrentRequestHeaderValue = function() {
      var e = "" + this.apiId + Ne.VALUE_SEPARATOR + this.cacheOutcome, t = [this.wrapperSKU, this.wrapperVer].join(Ne.VALUE_SEPARATOR), n = this.getRegionDiscoveryFields(), o = [e, n].join(Ne.VALUE_SEPARATOR);
      return [Ne.SCHEMA_VERSION, o, t].join(Ne.CATEGORY_SEPARATOR);
    }, r.prototype.generateLastRequestHeaderValue = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.failedRequests.slice(0, 2 * t).join(Ne.VALUE_SEPARATOR), o = e.errors.slice(0, t).join(Ne.VALUE_SEPARATOR), i = e.errors.length, a = t < i ? Ne.OVERFLOW_TRUE : Ne.OVERFLOW_FALSE, s = [i, a].join(Ne.VALUE_SEPARATOR);
      return [Ne.SCHEMA_VERSION, e.cacheHits, n, o, s].join(Ne.CATEGORY_SEPARATOR);
    }, r.prototype.cacheFailedRequest = function(e) {
      var t = this.getLastRequests();
      t.errors.length >= Ne.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), F.isEmpty(e.subError) ? F.isEmpty(e.errorCode) ? e && e.toString() ? t.errors.push(e.toString()) : t.errors.push(Ne.UNKNOWN_ERROR) : t.errors.push(e.errorCode) : t.errors.push(e.subError), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t);
    }, r.prototype.incrementCacheHits = function() {
      var e = this.getLastRequests();
      return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e), e.cacheHits;
    }, r.prototype.getLastRequests = function() {
      var e = new Io(), t = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
      return t || e;
    }, r.prototype.clearTelemetryCache = function() {
      var e = this.getLastRequests(), t = r.maxErrorsToSend(e), n = e.errors.length;
      if (t === n)
        this.cacheManager.removeItem(this.telemetryCacheKey);
      else {
        var o = new Io();
        o.failedRequests = e.failedRequests.slice(t * 2), o.errors = e.errors.slice(t), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, o);
      }
    }, r.maxErrorsToSend = function(e) {
      var t, n = 0, o = 0, i = e.errors.length;
      for (t = 0; t < i; t++) {
        var a = e.failedRequests[2 * t] || S.EMPTY_STRING, s = e.failedRequests[2 * t + 1] || S.EMPTY_STRING, c = e.errors[t] || S.EMPTY_STRING;
        if (o += a.toString().length + s.toString().length + c.length + 3, o < Ne.MAX_LAST_HEADER_BYTES)
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
var Dl = (
  /** @class */
  function() {
    function r(e, t, n, o, i, a) {
      this.authority = t, this.libraryName = o, this.libraryVersion = i, this.applicationTelemetry = a, this.clientId = e, this.logger = n, this.callbacks = /* @__PURE__ */ new Map(), this.eventsByCorrelationId = /* @__PURE__ */ new Map(), this.queueMeasurements = /* @__PURE__ */ new Map(), this.preQueueTimeByCorrelationId = /* @__PURE__ */ new Map();
    }
    return r.prototype.startPerformanceMeasurement = function(e, t) {
      return {};
    }, r.prototype.startPerformanceMeasuremeant = function(e, t) {
      return {};
    }, r.prototype.getIntFields = function() {
      return Dp;
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
      var i = { eventName: e, queueTime: n, manuallyCompleted: o }, a = this.queueMeasurements.get(t);
      if (a)
        a.push(i), this.queueMeasurements.set(t, a);
      else {
        this.logger.trace("PerformanceClient.addQueueMeasurement: adding correlationId " + t + " to queue measurements");
        var s = [i];
        this.queueMeasurements.set(t, s);
      }
      this.preQueueTimeByCorrelationId.delete(t);
    }, r.prototype.startMeasurement = function(e, t) {
      var n = this, o, i, a = t || this.generateId();
      t || this.logger.info("PerformanceClient: No correlation id provided for " + e + ", generating", a), this.logger.trace("PerformanceClient: Performance measurement started for " + e, a);
      var s = this.startPerformanceMeasuremeant(e, a);
      s.startMeasurement();
      var c = {
        eventId: this.generateId(),
        status: So.InProgress,
        authority: this.authority,
        libraryName: this.libraryName,
        libraryVersion: this.libraryVersion,
        clientId: this.clientId,
        name: e,
        startTimeMs: Date.now(),
        correlationId: a,
        appName: (o = this.applicationTelemetry) === null || o === void 0 ? void 0 : o.appName,
        appVersion: (i = this.applicationTelemetry) === null || i === void 0 ? void 0 : i.appVersion
      };
      return this.cacheEventByCorrelationId(c), {
        endMeasurement: function(l) {
          return n.endMeasurement(fe(fe({}, c), l), s);
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
        measurement: s,
        event: c
      };
    }, r.prototype.endMeasurement = function(e, t) {
      var n = this, o, i, a = this.eventsByCorrelationId.get(e.correlationId);
      if (!a)
        return this.logger.trace("PerformanceClient: Measurement not found for " + e.eventId, e.correlationId), null;
      var s = e.eventId === a.eventId, c = {
        totalQueueTime: 0,
        totalQueueCount: 0,
        manuallyCompletedCount: 0
      };
      s ? (c = this.getQueueInfo(e.correlationId), this.discardCache(a.correlationId)) : (o = a.incompleteSubMeasurements) === null || o === void 0 || o.delete(e.eventId), t == null || t.endMeasurement();
      var l = t == null ? void 0 : t.flushMeasurement();
      if (!l)
        return this.logger.trace("PerformanceClient: Performance measurement not taken", a.correlationId), null;
      if (this.logger.trace("PerformanceClient: Performance measurement ended for " + e.name + ": " + l + " ms", e.correlationId), !s)
        return a[e.name + "DurationMs"] = Math.floor(l), fe({}, a);
      var u = fe(fe({}, a), e), h = 0;
      return (i = u.incompleteSubMeasurements) === null || i === void 0 || i.forEach(function(d) {
        n.logger.trace("PerformanceClient: Incomplete submeasurement " + d.name + " found for " + e.name, u.correlationId), h++;
      }), u.incompleteSubMeasurements = void 0, u = fe(fe({}, u), { durationMs: Math.round(l), queuedTimeMs: c.totalQueueTime, queuedCount: c.totalQueueCount, queuedManuallyCompletedCount: c.manuallyCompletedCount, status: So.Completed, incompleteSubsCount: h }), this.truncateIntegralFields(u, this.getIntFields()), this.emitEvents([u], e.correlationId), u;
    }, r.prototype.addStaticFields = function(e, t) {
      this.logger.trace("PerformanceClient: Updating static fields");
      var n = this.eventsByCorrelationId.get(t);
      n ? this.eventsByCorrelationId.set(t, fe(fe({}, n), e)) : this.logger.trace("PerformanceClient: Event not found for", t);
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
      t ? (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " added/updated", e.correlationId), t.incompleteSubMeasurements = t.incompleteSubMeasurements || /* @__PURE__ */ new Map(), t.incompleteSubMeasurements.set(e.eventId, { name: e.name, startTimeMs: e.startTimeMs })) : (this.logger.trace("PerformanceClient: Performance measurement for " + e.name + " started", e.correlationId), this.eventsByCorrelationId.set(e.correlationId, fe({}, e)));
    }, r.prototype.getQueueInfo = function(e) {
      var t = this.queueMeasurements.get(e);
      t || this.logger.trace("PerformanceClient: no queue measurements found for for correlationId: " + e);
      var n = 0, o = 0, i = 0;
      return t == null || t.forEach(function(a) {
        n += a.queueTime, o++, i += a.manuallyCompleted ? 1 : 0;
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
var ic = (
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
), Vp = (
  /** @class */
  function(r) {
    Ze(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.generateId = function() {
      return "callback-id";
    }, e.prototype.startPerformanceMeasuremeant = function() {
      return new ic();
    }, e.prototype.startPerformanceMeasurement = function() {
      return new ic();
    }, e.prototype.calculateQueuedTime = function(t, n) {
      return 0;
    }, e.prototype.addQueueMeasurement = function(t, n, o) {
    }, e.prototype.setPreQueueTime = function(t, n) {
    }, e;
  }(Dl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var N = {
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
}, x = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return Object.setPrototypeOf(o, e.prototype), o.name = "BrowserAuthError", o;
    }
    return e.createPkceNotGeneratedError = function(t) {
      return new e(N.pkceNotGenerated.code, N.pkceNotGenerated.desc + " Detail:" + t);
    }, e.createCryptoNotAvailableError = function(t) {
      return new e(N.cryptoDoesNotExist.code, N.cryptoDoesNotExist.desc + " Detail:" + t);
    }, e.createHttpMethodNotImplementedError = function(t) {
      return new e(N.httpMethodNotImplementedError.code, N.httpMethodNotImplementedError.desc + " Given Method: " + t);
    }, e.createEmptyNavigationUriError = function() {
      return new e(N.emptyNavigateUriError.code, N.emptyNavigateUriError.desc);
    }, e.createEmptyHashError = function(t) {
      return new e(N.hashEmptyError.code, N.hashEmptyError.desc + " Given Url: " + t);
    }, e.createHashDoesNotContainStateError = function() {
      return new e(N.hashDoesNotContainStateError.code, N.hashDoesNotContainStateError.desc);
    }, e.createHashDoesNotContainKnownPropertiesError = function() {
      return new e(N.hashDoesNotContainKnownPropertiesError.code, N.hashDoesNotContainKnownPropertiesError.desc);
    }, e.createUnableToParseStateError = function() {
      return new e(N.unableToParseStateError.code, N.unableToParseStateError.desc);
    }, e.createStateInteractionTypeMismatchError = function() {
      return new e(N.stateInteractionTypeMismatchError.code, N.stateInteractionTypeMismatchError.desc);
    }, e.createInteractionInProgressError = function() {
      return new e(N.interactionInProgress.code, N.interactionInProgress.desc);
    }, e.createPopupWindowError = function(t) {
      var n = N.popupWindowError.desc;
      return n = F.isEmpty(t) ? n : n + " Details: " + t, new e(N.popupWindowError.code, n);
    }, e.createEmptyWindowCreatedError = function() {
      return new e(N.emptyWindowError.code, N.emptyWindowError.desc);
    }, e.createUserCancelledError = function() {
      return new e(N.userCancelledError.code, N.userCancelledError.desc);
    }, e.createMonitorPopupTimeoutError = function() {
      return new e(N.monitorPopupTimeoutError.code, N.monitorPopupTimeoutError.desc);
    }, e.createMonitorIframeTimeoutError = function() {
      return new e(N.monitorIframeTimeoutError.code, N.monitorIframeTimeoutError.desc);
    }, e.createRedirectInIframeError = function(t) {
      return new e(N.redirectInIframeError.code, N.redirectInIframeError.desc + " (window.parent !== window) => " + t);
    }, e.createBlockReloadInHiddenIframeError = function() {
      return new e(N.blockTokenRequestsInHiddenIframeError.code, N.blockTokenRequestsInHiddenIframeError.desc);
    }, e.createBlockAcquireTokenInPopupsError = function() {
      return new e(N.blockAcquireTokenInPopupsError.code, N.blockAcquireTokenInPopupsError.desc);
    }, e.createIframeClosedPrematurelyError = function() {
      return new e(N.iframeClosedPrematurelyError.code, N.iframeClosedPrematurelyError.desc);
    }, e.createSilentLogoutUnsupportedError = function() {
      return new e(N.silentLogoutUnsupportedError.code, N.silentLogoutUnsupportedError.desc);
    }, e.createNoAccountError = function() {
      return new e(N.noAccountError.code, N.noAccountError.desc);
    }, e.createSilentPromptValueError = function(t) {
      return new e(N.silentPromptValueError.code, N.silentPromptValueError.desc + " Given value: " + t);
    }, e.createUnableToParseTokenRequestCacheError = function() {
      return new e(N.unableToParseTokenRequestCacheError.code, N.unableToParseTokenRequestCacheError.desc);
    }, e.createNoTokenRequestCacheError = function() {
      return new e(N.noTokenRequestCacheError.code, N.noTokenRequestCacheError.desc);
    }, e.createAuthRequestNotSetError = function() {
      return new e(N.authRequestNotSet.code, N.authRequestNotSet.desc);
    }, e.createNoCachedAuthorityError = function() {
      return new e(N.noCachedAuthorityError.code, N.noCachedAuthorityError.desc);
    }, e.createInvalidCacheTypeError = function() {
      return new e(N.invalidCacheType.code, "" + N.invalidCacheType.desc);
    }, e.createNonBrowserEnvironmentError = function() {
      return new e(N.notInBrowserEnvironment.code, N.notInBrowserEnvironment.desc);
    }, e.createDatabaseNotOpenError = function() {
      return new e(N.databaseNotOpen.code, N.databaseNotOpen.desc);
    }, e.createNoNetworkConnectivityError = function() {
      return new e(N.noNetworkConnectivity.code, N.noNetworkConnectivity.desc);
    }, e.createPostRequestFailedError = function(t, n) {
      return new e(N.postRequestFailed.code, N.postRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createGetRequestFailedError = function(t, n) {
      return new e(N.getRequestFailed.code, N.getRequestFailed.desc + " | Network client threw: " + t + " | Attempted to reach: " + n.split("?")[0]);
    }, e.createFailedToParseNetworkResponseError = function(t) {
      return new e(N.failedToParseNetworkResponse.code, N.failedToParseNetworkResponse.desc + " | Attempted to reach: " + t.split("?")[0]);
    }, e.createUnableToLoadTokenError = function(t) {
      return new e(N.unableToLoadTokenError.code, N.unableToLoadTokenError.desc + " | " + t);
    }, e.createSigningKeyNotFoundInStorageError = function(t) {
      return new e(N.signingKeyNotFoundInStorage.code, N.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + t);
    }, e.createAuthCodeRequiredError = function() {
      return new e(N.authCodeRequired.code, N.authCodeRequired.desc);
    }, e.createAuthCodeOrNativeAccountIdRequiredError = function() {
      return new e(N.authCodeOrNativeAccountRequired.code, N.authCodeOrNativeAccountRequired.desc);
    }, e.createSpaCodeAndNativeAccountIdPresentError = function() {
      return new e(N.spaCodeAndNativeAccountPresent.code, N.spaCodeAndNativeAccountPresent.desc);
    }, e.createDatabaseUnavailableError = function() {
      return new e(N.databaseUnavailable.code, N.databaseUnavailable.desc);
    }, e.createUnableToAcquireTokenFromNativePlatformError = function() {
      return new e(N.unableToAcquireTokenFromNativePlatform.code, N.unableToAcquireTokenFromNativePlatform.desc);
    }, e.createNativeHandshakeTimeoutError = function() {
      return new e(N.nativeHandshakeTimeout.code, N.nativeHandshakeTimeout.desc);
    }, e.createNativeExtensionNotInstalledError = function() {
      return new e(N.nativeExtensionNotInstalled.code, N.nativeExtensionNotInstalled.desc);
    }, e.createNativeConnectionNotEstablishedError = function() {
      return new e(N.nativeConnectionNotEstablished.code, N.nativeConnectionNotEstablished.desc);
    }, e.createNativeBrokerCalledBeforeInitialize = function() {
      return new e(N.nativeBrokerCalledBeforeInitialize.code, N.nativeBrokerCalledBeforeInitialize.desc);
    }, e.createNativePromptParameterNotSupportedError = function() {
      return new e(N.nativePromptNotSupported.code, N.nativePromptNotSupported.desc);
    }, e;
  }(V)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var bt = {
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
}, Cn = {
  CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
  PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
  MATS_TELEMETRY: "MATS"
}, Ut;
(function(r) {
  r.HandshakeRequest = "Handshake", r.HandshakeResponse = "HandshakeResponse", r.GetToken = "GetToken", r.Response = "Response";
})(Ut || (Ut = {}));
var Ie;
(function(r) {
  r.LocalStorage = "localStorage", r.SessionStorage = "sessionStorage", r.MemoryStorage = "memoryStorage";
})(Ie || (Ie = {}));
var kt;
(function(r) {
  r.GET = "GET", r.POST = "POST";
})(kt || (kt = {}));
var he;
(function(r) {
  r.AUTHORITY = "authority", r.ACQUIRE_TOKEN_ACCOUNT = "acquireToken.account", r.SESSION_STATE = "session.state", r.REQUEST_STATE = "request.state", r.NONCE_IDTOKEN = "nonce.id_token", r.ORIGIN_URI = "request.origin", r.RENEW_STATUS = "token.renew.status", r.URL_HASH = "urlHash", r.REQUEST_PARAMS = "request.params", r.SCOPES = "scopes", r.INTERACTION_STATUS_KEY = "interaction.status", r.CCS_CREDENTIAL = "ccs.credential", r.CORRELATION_ID = "request.correlationId", r.NATIVE_REQUEST = "request.native", r.REDIRECT_CONTEXT = "request.redirect.context";
})(he || (he = {}));
var _t;
(function(r) {
  r.ACCOUNT_KEYS = "msal.account.keys", r.TOKEN_KEYS = "msal.token.keys";
})(_t || (_t = {}));
var Yr;
(function(r) {
  r.WRAPPER_SKU = "wrapper.sku", r.WRAPPER_VER = "wrapper.version";
})(Yr || (Yr = {}));
var ve;
(function(r) {
  r[r.acquireTokenRedirect = 861] = "acquireTokenRedirect", r[r.acquireTokenPopup = 862] = "acquireTokenPopup", r[r.ssoSilent = 863] = "ssoSilent", r[r.acquireTokenSilent_authCode = 864] = "acquireTokenSilent_authCode", r[r.handleRedirectPromise = 865] = "handleRedirectPromise", r[r.acquireTokenByCode = 866] = "acquireTokenByCode", r[r.acquireTokenSilent_silentFlow = 61] = "acquireTokenSilent_silentFlow", r[r.logout = 961] = "logout", r[r.logoutPopup = 962] = "logoutPopup";
})(ve || (ve = {}));
var K;
(function(r) {
  r.Redirect = "redirect", r.Popup = "popup", r.Silent = "silent", r.None = "none";
})(K || (K = {}));
var ac;
(function(r) {
  r.Startup = "startup", r.Login = "login", r.Logout = "logout", r.AcquireToken = "acquireToken", r.SsoSilent = "ssoSilent", r.HandleRedirect = "handleRedirect", r.None = "none";
})(ac || (ac = {}));
var sc = {
  scopes: $n
}, tn = "jwk", cc;
(function(r) {
  r.React = "@azure/msal-react", r.Angular = "@azure/msal-angular";
})(cc || (cc = {}));
var Gi = "msal.db", Gp = 1, Wp = Gi + ".keys", Ye;
(function(r) {
  r[r.Default = 0] = "Default", r[r.AccessToken = 1] = "AccessToken", r[r.AccessTokenAndRefreshToken = 2] = "AccessTokenAndRefreshToken", r[r.RefreshToken = 3] = "RefreshToken", r[r.RefreshTokenAndNetwork = 4] = "RefreshTokenAndNetwork", r[r.Skip = 5] = "Skip";
})(Ye || (Ye = {}));
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ve = {
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
}, _o = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n) {
      var o = r.call(this, t, n) || this;
      return o.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(o, e.prototype), o;
    }
    return e.createRedirectUriEmptyError = function() {
      return new e(Ve.redirectUriNotSet.code, Ve.redirectUriNotSet.desc);
    }, e.createPostLogoutRedirectUriEmptyError = function() {
      return new e(Ve.postLogoutUriNotSet.code, Ve.postLogoutUriNotSet.desc);
    }, e.createStorageNotSupportedError = function(t) {
      return new e(Ve.storageNotSupportedError.code, Ve.storageNotSupportedError.desc + " Given Location: " + t);
    }, e.createRedirectCallbacksNotSetError = function() {
      return new e(Ve.noRedirectCallbacksSet.code, Ve.noRedirectCallbacksSet.desc);
    }, e.createStubPcaInstanceCalledError = function() {
      return new e(Ve.stubPcaInstanceCalled.code, Ve.stubPcaInstanceCalled.desc);
    }, e.createInMemoryRedirectUnavailableError = function() {
      return new e(Ve.inMemRedirectUnavailable.code, Ve.inMemRedirectUnavailable.desc);
    }, e.createEntropyNotProvided = function() {
      return new e(Ve.entropyNotProvided.code, Ve.entropyNotProvided.desc);
    }, e;
  }(V)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var lc = (
  /** @class */
  function() {
    function r(e) {
      this.validateWindowStorage(e), this.windowStorage = window[e];
    }
    return r.prototype.validateWindowStorage = function(e) {
      if (e !== Ie.LocalStorage && e !== Ie.SessionStorage)
        throw _o.createStorageNotSupportedError(e);
      var t = !!window[e];
      if (!t)
        throw _o.createStorageNotSupportedError(e);
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
var Wi = (
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
var jl = (
  /** @class */
  function() {
    function r() {
    }
    return r.extractBrowserRequestState = function(e, t) {
      if (F.isEmpty(t))
        return null;
      try {
        var n = Ht.parseRequestState(e, t);
        return n.libraryState.meta;
      } catch (o) {
        throw z.createInvalidStateError(t, o);
      }
    }, r.parseServerResponseFromHash = function(e) {
      if (!e)
        return {};
      var t = new de(e);
      return de.getDeserializedHash(t.getHash());
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Yi = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i) {
      var a = r.call(this, t, o, i) || this;
      return a.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1e3, a.cacheConfig = n, a.logger = i, a.internalStorage = new Wi(), a.browserStorage = a.setupBrowserStorage(a.cacheConfig.cacheLocation), a.temporaryCacheStorage = a.setupTemporaryCacheStorage(a.cacheConfig.temporaryCacheLocation, a.cacheConfig.cacheLocation), n.cacheMigrationEnabled && (a.migrateCacheEntries(), a.createKeyMaps()), a;
    }
    return e.prototype.setupBrowserStorage = function(t) {
      switch (t) {
        case Ie.LocalStorage:
        case Ie.SessionStorage:
          try {
            return new lc(t);
          } catch (n) {
            this.logger.verbose(n);
            break;
          }
      }
      return this.cacheConfig.cacheLocation = Ie.MemoryStorage, new Wi();
    }, e.prototype.setupTemporaryCacheStorage = function(t, n) {
      switch (n) {
        case Ie.LocalStorage:
        case Ie.SessionStorage:
          try {
            return new lc(t || Ie.SessionStorage);
          } catch (o) {
            return this.logger.verbose(o), this.internalStorage;
          }
        case Ie.MemoryStorage:
        default:
          return this.internalStorage;
      }
    }, e.prototype.migrateCacheEntries = function() {
      var t = this, n = S.CACHE_PREFIX + "." + _e.ID_TOKEN, o = S.CACHE_PREFIX + "." + _e.CLIENT_INFO, i = S.CACHE_PREFIX + "." + _e.ERROR, a = S.CACHE_PREFIX + "." + _e.ERROR_DESC, s = this.browserStorage.getItem(n), c = this.browserStorage.getItem(o), l = this.browserStorage.getItem(i), u = this.browserStorage.getItem(a), h = [s, c, l, u], d = [_e.ID_TOKEN, _e.CLIENT_INFO, _e.ERROR, _e.ERROR_DESC];
      d.forEach(function(f, p) {
        return t.migrateCacheEntry(f, h[p]);
      });
    }, e.prototype.migrateCacheEntry = function(t, n) {
      n && this.setTemporaryCache(t, n, !0);
    }, e.prototype.createKeyMaps = function() {
      var t = this;
      this.logger.trace("BrowserCacheManager - createKeyMaps called.");
      var n = this.getItem(_t.ACCOUNT_KEYS), o = this.getItem(_t.TOKEN_KEYS + "." + this.clientId);
      if (n && o) {
        this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
        return;
      }
      var i = this.browserStorage.getKeys();
      i.forEach(function(a) {
        if (t.isCredentialKey(a)) {
          var s = t.getItem(a);
          if (s) {
            var c = t.validateAndParseJson(s);
            if (c && c.hasOwnProperty("credentialType"))
              switch (c.credentialType) {
                case Q.ID_TOKEN:
                  if (er.isIdTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - idToken with key: " + a + " found, saving key to token key map");
                    var l = Ge.toObject(new er(), c), u = t.updateCredentialCacheKey(a, l);
                    t.addTokenKey(u, Q.ID_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed idToken validation on key: " + a);
                  break;
                case Q.ACCESS_TOKEN:
                case Q.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                  if (tr.isAccessTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - accessToken with key: " + a + " found, saving key to token key map");
                    var h = Ge.toObject(new tr(), c), u = t.updateCredentialCacheKey(a, h);
                    t.addTokenKey(u, Q.ACCESS_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed accessToken validation on key: " + a);
                  break;
                case Q.REFRESH_TOKEN:
                  if (Gr.isRefreshTokenEntity(c)) {
                    t.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - refreshToken with key: " + a + " found, saving key to token key map");
                    var d = Ge.toObject(new Gr(), c), u = t.updateCredentialCacheKey(a, d);
                    t.addTokenKey(u, Q.REFRESH_TOKEN);
                    return;
                  } else
                    t.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."), t.logger.tracePii("BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: " + a);
                  break;
              }
          }
        }
        if (t.isAccountKey(a)) {
          var s = t.getItem(a);
          if (s) {
            var f = t.validateAndParseJson(s);
            f && He.isAccountEntity(f) && (t.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), t.logger.tracePii("BrowserCacheManager:createKeyMaps - account with key: " + a + " found, saving key to account key map"), t.addAccountKeyToMap(a));
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
      return !o || !He.isAccountEntity(o) ? (this.removeAccountKeyFromMap(t), null) : Ge.toObject(new He(), o);
    }, e.prototype.setAccount = function(t) {
      this.logger.trace("BrowserCacheManager.setAccount called");
      var n = t.generateAccountKey();
      this.setItem(n, JSON.stringify(t)), this.addAccountKeyToMap(n);
    }, e.prototype.getAccountKeys = function() {
      this.logger.trace("BrowserCacheManager.getAccountKeys called");
      var t = this.getItem(_t.ACCOUNT_KEYS);
      return t ? JSON.parse(t) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), []);
    }, e.prototype.addAccountKeyToMap = function(t) {
      this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii("BrowserCacheManager.addAccountKeyToMap called with key: " + t);
      var n = this.getAccountKeys();
      n.indexOf(t) === -1 ? (n.push(t), this.setItem(_t.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map");
    }, e.prototype.removeAccountKeyFromMap = function(t) {
      this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii("BrowserCacheManager.removeAccountKeyFromMap called with key: " + t);
      var n = this.getAccountKeys(), o = n.indexOf(t);
      o > -1 ? (n.splice(o, 1), this.setItem(_t.ACCOUNT_KEYS, JSON.stringify(n)), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")) : this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map");
    }, e.prototype.removeAccount = function(t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return r.prototype.removeAccount.call(this, t), this.removeAccountKeyFromMap(t), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeIdToken = function(t) {
      r.prototype.removeIdToken.call(this, t), this.removeTokenKey(t, Q.ID_TOKEN);
    }, e.prototype.removeAccessToken = function(t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return r.prototype.removeAccessToken.call(this, t), this.removeTokenKey(t, Q.ACCESS_TOKEN), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.removeRefreshToken = function(t) {
      r.prototype.removeRefreshToken.call(this, t), this.removeTokenKey(t, Q.REFRESH_TOKEN);
    }, e.prototype.getTokenKeys = function() {
      this.logger.trace("BrowserCacheManager.getTokenKeys called");
      var t = this.getItem(_t.TOKEN_KEYS + "." + this.clientId);
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
        case Q.ID_TOKEN:
          o.idToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), o.idToken.push(t));
          break;
        case Q.ACCESS_TOKEN:
          o.accessToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - accessToken added to map"), o.accessToken.push(t));
          break;
        case Q.REFRESH_TOKEN:
          o.refreshToken.indexOf(t) === -1 && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), o.refreshToken.push(t));
          break;
        default:
          this.logger.error("BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: " + n), z.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.removeTokenKey = function(t, n) {
      this.logger.trace("BrowserCacheManager removeTokenKey called");
      var o = this.getTokenKeys();
      switch (n) {
        case Q.ID_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: " + t + " from map");
          var i = o.idToken.indexOf(t);
          i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), o.idToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case Q.ACCESS_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: " + t + " from map");
          var a = o.accessToken.indexOf(t);
          a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), o.accessToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        case Q.REFRESH_TOKEN:
          this.logger.infoPii("BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: " + t + " from map");
          var s = o.refreshToken.indexOf(t);
          s > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), o.refreshToken.splice(s, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
          break;
        default:
          this.logger.error("BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: " + n), z.createUnexpectedCredentialTypeError();
      }
      this.setItem(_t.TOKEN_KEYS + "." + this.clientId, JSON.stringify(o));
    }, e.prototype.getIdTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, Q.ID_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !er.isIdTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeTokenKey(t, Q.ID_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), Ge.toObject(new er(), o));
    }, e.prototype.setIdTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Q.ID_TOKEN);
    }, e.prototype.getAccessTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, Q.ACCESS_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !tr.isAccessTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(t, Q.ACCESS_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), Ge.toObject(new tr(), o));
    }, e.prototype.setAccessTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Q.ACCESS_TOKEN);
    }, e.prototype.getRefreshTokenCredential = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, Q.REFRESH_TOKEN), null;
      var o = this.validateAndParseJson(n);
      return !o || !Gr.isRefreshTokenEntity(o) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(t, Q.REFRESH_TOKEN), null) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), Ge.toObject(new Gr(), o));
    }, e.prototype.setRefreshTokenCredential = function(t) {
      this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
      var n = t.generateCredentialKey();
      this.setItem(n, JSON.stringify(t)), this.addTokenKey(n, Q.REFRESH_TOKEN);
    }, e.prototype.getAppMetadata = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !qi.isAppMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), Ge.toObject(new qi(), o));
    }, e.prototype.setAppMetadata = function(t) {
      this.logger.trace("BrowserCacheManager.setAppMetadata called");
      var n = t.generateAppMetadataKey();
      this.setItem(n, JSON.stringify(t));
    }, e.prototype.getServerTelemetry = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !Io.isServerTelemetryEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), Ge.toObject(new Io(), o));
    }, e.prototype.setServerTelemetry = function(t, n) {
      this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getAuthorityMetadata = function(t) {
      var n = this.internalStorage.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return o && Vi.isAuthorityMetadataEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), Ge.toObject(new Vi(), o)) : null;
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
      var t = this.generateCacheKey(_e.ACTIVE_ACCOUNT_FILTERS), n = this.getItem(t);
      if (!n) {
        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
        var o = this.generateCacheKey(_e.ACTIVE_ACCOUNT), i = this.getItem(o);
        if (!i)
          return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
        var a = this.getAccountInfoByFilter({ localAccountId: i })[0] || null;
        return a ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(a), a) : null;
      }
      var s = this.validateAndParseJson(n);
      return s ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoByFilter({
        homeAccountId: s.homeAccountId,
        localAccountId: s.localAccountId
      })[0] || null) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null);
    }, e.prototype.setActiveAccount = function(t) {
      var n = this.generateCacheKey(_e.ACTIVE_ACCOUNT_FILTERS), o = this.generateCacheKey(_e.ACTIVE_ACCOUNT);
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
          var a = i.idTokenClaims && i.idTokenClaims.sid;
          return n === a;
        }
        return t ? t === i.username : !1;
      });
      if (o.length === 1)
        return o[0];
      if (o.length > 1)
        throw z.createMultipleMatchingAccountsInCacheError();
      return null;
    }, e.prototype.getThrottlingCache = function(t) {
      var n = this.getItem(t);
      if (!n)
        return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
      var o = this.validateAndParseJson(n);
      return !o || !nc.isThrottlingEntity(t, o) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), Ge.toObject(new nc(), o));
    }, e.prototype.setThrottlingCache = function(t, n) {
      this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(t, JSON.stringify(n));
    }, e.prototype.getTemporaryCache = function(t, n) {
      var o = n ? this.generateCacheKey(t) : t;
      if (this.cacheConfig.storeAuthStateInCookie) {
        var i = this.getItemCookie(o);
        if (i)
          return this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"), i;
      }
      var a = this.temporaryCacheStorage.getItem(o);
      if (!a) {
        if (this.cacheConfig.cacheLocation === Ie.LocalStorage) {
          var s = this.browserStorage.getItem(o);
          if (s)
            return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"), s;
        }
        return this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null;
      }
      return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), a;
    }, e.prototype.setTemporaryCache = function(t, n, o) {
      var i = o ? this.generateCacheKey(t) : t;
      this.temporaryCacheStorage.setItem(i, n), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.setItemCookie(i, n));
    }, e.prototype.removeItem = function(t) {
      this.browserStorage.removeItem(t), this.temporaryCacheStorage.removeItem(t), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.clearItemCookie(t));
    }, e.prototype.containsKey = function(t) {
      return this.browserStorage.containsKey(t) || this.temporaryCacheStorage.containsKey(t);
    }, e.prototype.getKeys = function() {
      return ma(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
    }, e.prototype.clear = function() {
      return R(this, void 0, void 0, function() {
        var t = this;
        return P(this, function(n) {
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
      return R(this, void 0, void 0, function() {
        var t, n, o = this;
        return P(this, function(i) {
          switch (i.label) {
            case 0:
              return this.logger.trace("BrowserCacheManager.clearTokensAndKeysWithClaims called"), t = this.getTokenKeys(), n = [], t.accessToken.forEach(function(a) {
                var s = o.getAccessTokenCredential(a);
                s != null && s.requestedClaimsHash && a.includes(s.requestedClaimsHash.toLowerCase()) && n.push(o.removeAccessToken(a));
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
        var a = this.getCookieExpirationTime(o);
        i += "expires=" + a + ";";
      }
      this.cacheConfig.secureCookies && (i += "Secure;"), document.cookie = i;
    }, e.prototype.getItemCookie = function(t) {
      for (var n = encodeURIComponent(t) + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var a = o[i]; a.charAt(0) === " "; )
          a = a.substring(1);
        if (a.indexOf(n) === 0)
          return decodeURIComponent(a.substring(n.length, a.length));
      }
      return S.EMPTY_STRING;
    }, e.prototype.clearMsalCookies = function() {
      var t = this, n = S.CACHE_PREFIX + "." + this.clientId, o = document.cookie.split(";");
      o.forEach(function(i) {
        for (; i.charAt(0) === " "; )
          i = i.substring(1);
        if (i.indexOf(n) === 0) {
          var a = i.split("=")[0];
          t.clearItemCookie(a);
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
      return n ? JSON.stringify(t) : F.startsWith(t, S.CACHE_PREFIX) || F.startsWith(t, _e.ADAL_ID_TOKEN) ? t : S.CACHE_PREFIX + "." + this.clientId + "." + t;
    }, e.prototype.generateAuthorityKey = function(t) {
      var n = Ht.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(he.AUTHORITY + "." + n);
    }, e.prototype.generateNonceKey = function(t) {
      var n = Ht.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(he.NONCE_IDTOKEN + "." + n);
    }, e.prototype.generateStateKey = function(t) {
      var n = Ht.parseRequestState(this.cryptoImpl, t).libraryState.id;
      return this.generateCacheKey(he.REQUEST_STATE + "." + n);
    }, e.prototype.getCachedAuthority = function(t) {
      var n = this.generateStateKey(t), o = this.getTemporaryCache(n);
      if (!o)
        return null;
      var i = this.generateAuthorityKey(o);
      return this.getTemporaryCache(i);
    }, e.prototype.updateCacheEntries = function(t, n, o, i, a) {
      this.logger.trace("BrowserCacheManager.updateCacheEntries called");
      var s = this.generateStateKey(t);
      this.setTemporaryCache(s, t, !1);
      var c = this.generateNonceKey(t);
      this.setTemporaryCache(c, n, !1);
      var l = this.generateAuthorityKey(t);
      if (this.setTemporaryCache(l, o, !1), a) {
        var u = {
          credential: a.homeAccountId,
          type: rt.HOME_ACCOUNT_ID
        };
        this.setTemporaryCache(he.CCS_CREDENTIAL, JSON.stringify(u), !0);
      } else if (!F.isEmpty(i)) {
        var u = {
          credential: i,
          type: rt.UPN
        };
        this.setTemporaryCache(he.CCS_CREDENTIAL, JSON.stringify(u), !0);
      }
    }, e.prototype.resetRequestCache = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.resetRequestCache called"), F.isEmpty(t) || this.getKeys().forEach(function(o) {
        o.indexOf(t) !== -1 && n.removeItem(o);
      }), t && (this.removeItem(this.generateStateKey(t)), this.removeItem(this.generateNonceKey(t)), this.removeItem(this.generateAuthorityKey(t))), this.removeItem(this.generateCacheKey(he.REQUEST_PARAMS)), this.removeItem(this.generateCacheKey(he.ORIGIN_URI)), this.removeItem(this.generateCacheKey(he.URL_HASH)), this.removeItem(this.generateCacheKey(he.CORRELATION_ID)), this.removeItem(this.generateCacheKey(he.CCS_CREDENTIAL)), this.removeItem(this.generateCacheKey(he.NATIVE_REQUEST)), this.setInteractionInProgress(!1);
    }, e.prototype.cleanRequestByState = function(t) {
      if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), t) {
        var n = this.generateStateKey(t), o = this.temporaryCacheStorage.getItem(n);
        this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + o), this.resetRequestCache(o || S.EMPTY_STRING);
      }
      this.clearMsalCookies();
    }, e.prototype.cleanRequestByInteractionType = function(t) {
      var n = this;
      this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.getKeys().forEach(function(o) {
        if (o.indexOf(he.REQUEST_STATE) !== -1) {
          var i = n.temporaryCacheStorage.getItem(o);
          if (i) {
            var a = jl.extractBrowserRequestState(n.cryptoImpl, i);
            a && a.interactionType === t && (n.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + i), n.resetRequestCache(i));
          }
        }
      }), this.clearMsalCookies(), this.setInteractionInProgress(!1);
    }, e.prototype.cacheCodeRequest = function(t, n) {
      this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
      var o = n.base64Encode(JSON.stringify(t));
      this.setTemporaryCache(he.REQUEST_PARAMS, o, !0);
    }, e.prototype.getCachedRequest = function(t, n) {
      this.logger.trace("BrowserCacheManager.getCachedRequest called");
      var o = this.getTemporaryCache(he.REQUEST_PARAMS, !0);
      if (!o)
        throw x.createNoTokenRequestCacheError();
      var i = this.validateAndParseJson(n.base64Decode(o));
      if (!i)
        throw x.createUnableToParseTokenRequestCacheError();
      if (this.removeItem(this.generateCacheKey(he.REQUEST_PARAMS)), F.isEmpty(i.authority)) {
        var a = this.generateAuthorityKey(t), s = this.getTemporaryCache(a);
        if (!s)
          throw x.createNoCachedAuthorityError();
        i.authority = s;
      }
      return i;
    }, e.prototype.getCachedNativeRequest = function() {
      this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
      var t = this.getTemporaryCache(he.NATIVE_REQUEST, !0);
      if (!t)
        return this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null;
      var n = this.validateAndParseJson(t);
      return n || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null);
    }, e.prototype.isInteractionInProgress = function(t) {
      var n = this.getInteractionInProgress();
      return t ? n === this.clientId : !!n;
    }, e.prototype.getInteractionInProgress = function() {
      var t = S.CACHE_PREFIX + "." + he.INTERACTION_STATUS_KEY;
      return this.getTemporaryCache(t, !1);
    }, e.prototype.setInteractionInProgress = function(t) {
      var n = S.CACHE_PREFIX + "." + he.INTERACTION_STATUS_KEY;
      if (t) {
        if (this.getInteractionInProgress())
          throw x.createInteractionInProgressError();
        this.setTemporaryCache(n, this.clientId, !1);
      } else
        !t && this.getInteractionInProgress() === this.clientId && this.removeItem(n);
    }, e.prototype.getLegacyLoginHint = function() {
      var t = this.getTemporaryCache(_e.ADAL_ID_TOKEN);
      t && (this.browserStorage.removeItem(_e.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
      var n = this.getTemporaryCache(_e.ID_TOKEN, !0);
      n && (this.removeItem(this.generateCacheKey(_e.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
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
      return this.getTemporaryCache(he.REDIRECT_CONTEXT, !0);
    }, e.prototype.setRedirectRequestContext = function(t) {
      this.setTemporaryCache(he.REDIRECT_CONTEXT, t, !0);
    }, e.prototype.hydrateCache = function(t, n) {
      var o, i, a, s, c, l;
      return R(this, void 0, void 0, function() {
        var u, h, d, f;
        return P(this, function(p) {
          switch (p.label) {
            case 0:
              return u = er.createIdTokenEntity(((o = t.account) === null || o === void 0 ? void 0 : o.homeAccountId) || "", ((i = t.account) === null || i === void 0 ? void 0 : i.environment) || "", t.idToken, this.clientId, t.tenantId), n.claims ? [4, this.cryptoImpl.hashString(n.claims)] : [3, 2];
            case 1:
              h = p.sent(), p.label = 2;
            case 2:
              return d = tr.createAccessTokenEntity(
                ((a = t.account) === null || a === void 0 ? void 0 : a.homeAccountId) || "",
                ((s = t.account) === null || s === void 0 ? void 0 : s.environment) || "",
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
                h
              ), f = new Qr(void 0, u, d), [2, this.saveCacheRecord(f)];
          }
        });
      });
    }, e;
  }(Ge)
), Yp = function(r, e) {
  var t = {
    cacheLocation: Ie.MemoryStorage,
    temporaryCacheLocation: Ie.MemoryStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    cacheMigrationEnabled: !1,
    claimsBasedCachingEnabled: !0
  };
  return new Yi(r, t, bo, e);
};
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var gi = "@azure/msal-browser", Pn = "2.39.0";
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Qp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        var n, o, i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, fetch(e, {
                method: kt.GET,
                headers: this.getFetchHeaders(t)
              })];
            case 1:
              return n = a.sent(), [3, 3];
            case 2:
              throw o = a.sent(), window.navigator.onLine ? x.createGetRequestFailedError(o, e) : x.createNoNetworkConnectivityError();
            case 3:
              return a.trys.push([3, 5, , 6]), i = {
                headers: this.getHeaderDict(n.headers)
              }, [4, n.json()];
            case 4:
              return [2, (i.body = a.sent(), i.status = n.status, i)];
            case 5:
              throw a.sent(), x.createFailedToParseNetworkResponseError(e);
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a;
        return P(this, function(s) {
          switch (s.label) {
            case 0:
              n = t && t.body || S.EMPTY_STRING, s.label = 1;
            case 1:
              return s.trys.push([1, 3, , 4]), [4, fetch(e, {
                method: kt.POST,
                headers: this.getFetchHeaders(t),
                body: n
              })];
            case 2:
              return o = s.sent(), [3, 4];
            case 3:
              throw i = s.sent(), window.navigator.onLine ? x.createPostRequestFailedError(i, e) : x.createNoNetworkConnectivityError();
            case 4:
              return s.trys.push([4, 6, , 7]), a = {
                headers: this.getHeaderDict(o.headers)
              }, [4, o.json()];
            case 5:
              return [2, (a.body = s.sent(), a.status = o.status, a)];
            case 6:
              throw s.sent(), x.createFailedToParseNetworkResponseError(e);
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
var Jp = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.sendGetRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, this.sendRequestAsync(e, kt.GET, t)];
        });
      });
    }, r.prototype.sendPostRequestAsync = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, this.sendRequestAsync(e, kt.POST, t)];
        });
      });
    }, r.prototype.sendRequestAsync = function(e, t, n) {
      var o = this;
      return new Promise(function(i, a) {
        var s = new XMLHttpRequest();
        if (s.open(
          t,
          e,
          /* async: */
          !0
        ), o.setXhrHeaders(s, n), s.onload = function() {
          (s.status < 200 || s.status >= 300) && (t === kt.POST ? a(x.createPostRequestFailedError("Failed with status " + s.status, e)) : a(x.createGetRequestFailedError("Failed with status " + s.status, e)));
          try {
            var c = JSON.parse(s.responseText), l = {
              headers: o.getHeaderDict(s),
              body: c,
              status: s.status
            };
            i(l);
          } catch {
            a(x.createFailedToParseNetworkResponseError(e));
          }
        }, s.onerror = function() {
          window.navigator.onLine ? t === kt.POST ? a(x.createPostRequestFailedError("Failed with status " + s.status, e)) : a(x.createGetRequestFailedError("Failed with status " + s.status, e)) : a(x.createNoNetworkConnectivityError());
        }, t === kt.POST && n && n.body)
          s.send(n.body);
        else if (t === kt.GET)
          s.send();
        else
          throw x.createHttpMethodNotImplementedError(t);
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
        var a = i.split(": "), s = a.shift(), c = a.join(": ");
        s && c && (o[s] = c);
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
      return typeof window < "u" && !!window.opener && window.opener !== window && typeof window.name == "string" && window.name.indexOf(bt.POPUP_NAME_PREFIX + ".") === 0;
    }, r.getCurrentUri = function() {
      return window.location.href.split("?")[0].split("#")[0];
    }, r.getHomepage = function() {
      var e = new de(window.location.href), t = e.getUrlComponents();
      return t.Protocol + "//" + t.HostNameAndPort + "/";
    }, r.getBrowserNetworkClient = function() {
      return window.fetch && window.Headers ? new Qp() : new Jp();
    }, r.blockReloadInHiddenIframes = function() {
      var e = de.hashContainsKnownProperties(window.location.hash);
      if (e && r.isInIframe())
        throw x.createBlockReloadInHiddenIframeError();
    }, r.blockRedirectInIframe = function(e, t) {
      var n = r.isInIframe();
      if (e === K.Redirect && n && !t)
        throw x.createRedirectInIframeError(n);
    }, r.blockAcquireTokenInPopups = function() {
      if (r.isInPopup())
        throw x.createBlockAcquireTokenInPopupsError();
    }, r.blockNonBrowserEnvironment = function(e) {
      if (!e)
        throw x.createNonBrowserEnvironmentError();
    }, r.blockNativeBrokerCalledBeforeInitialized = function(e, t) {
      if (e && !t)
        throw x.createNativeBrokerCalledBeforeInitialize();
    }, r.detectIEOrEdge = function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE "), n = e.indexOf("Trident/"), o = e.indexOf("Edge/"), i = t > 0 || n > 0, a = o > 0;
      return i || a;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Fl = (
  /** @class */
  function() {
    function r(e, t, n, o, i, a, s, c, l) {
      this.config = e, this.browserStorage = t, this.browserCrypto = n, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = a, this.nativeMessageHandler = c, this.correlationId = l || this.browserCrypto.createNewGuid(), this.logger = o.clone(bt.MSAL_SKU, Pn, this.correlationId), this.performanceClient = s;
    }
    return r.prototype.clearCacheOnLogout = function(e) {
      return R(this, void 0, void 0, function() {
        return P(this, function(t) {
          switch (t.label) {
            case 0:
              if (!e)
                return [3, 5];
              He.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null)), t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, this.browserStorage.removeAccount(He.generateAccountCacheKey(e))];
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
      return R(this, void 0, void 0, function() {
        var n, o, i, a;
        return P(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.InitializeBaseRequest, e.correlationId), this.logger.verbose("Initializing BaseAuthRequest"), n = e.authority || this.config.auth.authority, t ? [4, this.validateRequestAuthority(n, t)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              if (o = ma(e && e.scopes || []), i = B(B({}, e), {
                correlationId: this.correlationId,
                authority: n,
                scopes: o
              }), !i.authenticationScheme)
                i.authenticationScheme = ge.BEARER, this.logger.verbose(`Authentication Scheme wasn't explicitly set in request, defaulting to "Bearer" request`);
              else {
                if (i.authenticationScheme === ge.SSH) {
                  if (!e.sshJwk)
                    throw be.createMissingSshJwkError();
                  if (!e.sshKid)
                    throw be.createMissingSshKidError();
                }
                this.logger.verbose('Authentication Scheme set to "' + i.authenticationScheme + '" as configured in Auth request');
              }
              return this.config.cache.claimsBasedCachingEnabled && e.claims && !F.isEmptyObj(e.claims) ? (a = i, [4, this.browserCrypto.hashString(e.claims)]) : [3, 4];
            case 3:
              a.requestedClaimsHash = s.sent(), s.label = 4;
            case 4:
              return [2, i];
          }
        });
      });
    }, r.prototype.getRedirectUri = function(e) {
      this.logger.verbose("getRedirectUri called");
      var t = e || this.config.auth.redirectUri || Se.getCurrentUri();
      return de.getAbsoluteUrl(t, Se.getCurrentUri());
    }, r.prototype.validateRequestAuthority = function(e, t) {
      return R(this, void 0, void 0, function() {
        var n;
        return P(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.getDiscoveredAuthority(e)];
            case 1:
              if (n = o.sent(), !n.isAlias(t.environment))
                throw be.createAuthorityMismatchError();
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
      return new qp(n, this.browserStorage);
    }, r.prototype.getDiscoveredAuthority = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return P(this, function(n) {
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
var sn = (
  /** @class */
  function(r) {
    Le(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.initializeAuthorizationCodeRequest = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o;
        return P(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), this.logger.verbose("initializeAuthorizationRequest called", t.correlationId), [4, this.browserCrypto.generatePkceCodes()];
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
      return !t || t.postLogoutRedirectUri !== null ? t && t.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", n.correlationId), n.postLogoutRedirectUri = de.getAbsoluteUrl(t.postLogoutRedirectUri, Se.getCurrentUri())) : this.config.auth.postLogoutRedirectUri === null ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", n.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", n.correlationId), n.postLogoutRedirectUri = de.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, Se.getCurrentUri())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", n.correlationId), n.postLogoutRedirectUri = de.getAbsoluteUrl(Se.getCurrentUri(), Se.getCurrentUri())) : this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", n.correlationId), n;
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
      return R(this, void 0, void 0, function() {
        var i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientCreateAuthCodeClient, this.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = a.sent(), [2, new Ml(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.getClientConfiguration = function(t, n, o) {
      return R(this, void 0, void 0, function() {
        var i, a;
        return P(this, function(s) {
          switch (s.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientGetClientConfiguration, this.correlationId), this.logger.verbose("getClientConfiguration called", this.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), [4, this.getDiscoveredAuthority(n, o)];
            case 1:
              return i = s.sent(), a = this.config.system.loggerOptions, [2, {
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
                  loggerCallback: a.loggerCallback,
                  piiLoggingEnabled: a.piiLoggingEnabled,
                  logLevel: a.logLevel,
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
                  sku: bt.MSAL_SKU,
                  version: Pn,
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
        throw x.createHashDoesNotContainStateError();
      var i = jl.extractBrowserRequestState(this.browserCrypto, t.state);
      if (!i)
        throw x.createUnableToParseStateError();
      if (i.interactionType !== n)
        throw x.createStateInteractionTypeMismatchError();
      return this.logger.verbose("Returning state from hash", o), t.state;
    }, e.prototype.getDiscoveredAuthority = function(t, n) {
      var o;
      return R(this, void 0, void 0, function() {
        var i, a, s, c;
        return P(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), this.logger.verbose("getDiscoveredAuthority called", this.correlationId), i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.StandardInteractionClientGetDiscoveredAuthority, this.correlationId), a = {
                protocolMode: this.config.auth.protocolMode,
                knownAuthorities: this.config.auth.knownAuthorities,
                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                authorityMetadata: this.config.auth.authorityMetadata,
                skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
              }, s = t || this.config.auth.authority, c = xn.generateAuthority(s, n || this.config.auth.azureCloudOptions), this.logger.verbose("Creating discovered authority with configured authority", this.correlationId), this.performanceClient.setPreQueueTime(_.AuthorityFactoryCreateDiscoveredInstance, this.correlationId), [4, To.createDiscoveredInstance(c, this.config.system.networkClient, this.browserStorage, a, this.logger, this.performanceClient, this.correlationId).then(function(u) {
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
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u;
        return P(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId), this.logger.verbose("initializeAuthorizationRequest called", this.correlationId), o = this.getRedirectUri(t.redirectUri), i = {
                interactionType: n
              }, a = Ht.setRequestState(this.browserCrypto, t && t.state || S.EMPTY_STRING, i), this.performanceClient.setPreQueueTime(_.InitializeBaseRequest, this.correlationId), c = [{}], [4, this.initializeBaseRequest(t)];
            case 1:
              return s = B.apply(void 0, [B.apply(void 0, c.concat([h.sent()])), { redirectUri: o, state: a, nonce: t.nonce || this.browserCrypto.createNewGuid(), responseMode: mo.FRAGMENT }]), l = t.account || this.browserStorage.getActiveAccount(), l && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii("Setting validated request account: " + l.homeAccountId, this.correlationId), s.account = l), F.isEmpty(s.loginHint) && !l && (u = this.browserStorage.getLegacyLoginHint(), u && (s.loginHint = u)), [2, s];
          }
        });
      });
    }, e;
  }(Fl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var wa = (
  /** @class */
  function() {
    function r(e, t, n, o, i) {
      this.authModule = e, this.browserStorage = t, this.authCodeRequest = n, this.logger = o, this.performanceClient = i;
    }
    return r.prototype.handleCodeResponseFromHash = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        var i, a, s;
        return P(this, function(c) {
          if (this.performanceClient.addQueueMeasurement(_.HandleCodeResponseFromHash, this.authCodeRequest.correlationId), this.logger.verbose("InteractionHandler.handleCodeResponse called"), F.isEmpty(e))
            throw x.createEmptyHashError(e);
          if (i = this.browserStorage.generateStateKey(t), a = this.browserStorage.getTemporaryCache(i), !a)
            throw z.createStateNotFoundError("Cached State");
          try {
            s = this.authModule.handleFragmentResponse(e, a);
          } catch (l) {
            throw l instanceof Ir && l.subError === N.userCancelledError.code ? x.createUserCancelledError() : l;
          }
          return this.performanceClient.setPreQueueTime(_.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), [2, this.handleCodeResponseFromServer(s, t, n, o)];
        });
      });
    }, r.prototype.handleCodeResponseFromServer = function(e, t, n, o, i) {
      return i === void 0 && (i = !0), R(this, void 0, void 0, function() {
        var a, s, c, l, u, h;
        return P(this, function(d) {
          switch (d.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.HandleCodeResponseFromServer, this.authCodeRequest.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), a = this.browserStorage.generateStateKey(t), s = this.browserStorage.getTemporaryCache(a), !s)
                throw z.createStateNotFoundError("Cached State");
              return c = this.browserStorage.generateNonceKey(s), l = this.browserStorage.getTemporaryCache(c), this.authCodeRequest.code = e.code, e.cloud_instance_host_name ? (this.performanceClient.setPreQueueTime(_.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), [4, this.updateTokenEndpointAuthority(e.cloud_instance_host_name, n, o)]) : [3, 2];
            case 1:
              d.sent(), d.label = 2;
            case 2:
              return i && (e.nonce = l || void 0), e.state = s, e.client_info ? this.authCodeRequest.clientInfo = e.client_info : (u = this.checkCcsCredentials(), u && (this.authCodeRequest.ccsCredential = u)), this.performanceClient.setPreQueueTime(_.AuthClientAcquireToken, this.authCodeRequest.correlationId), [4, this.authModule.acquireToken(this.authCodeRequest, e)];
            case 3:
              return h = d.sent(), this.browserStorage.cleanRequestByState(t), [2, h];
          }
        });
      });
    }, r.prototype.updateTokenEndpointAuthority = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.UpdateTokenEndpointAuthority, this.authCodeRequest.correlationId), o = "https://" + e + "/" + t.tenant + "/", [4, To.createDiscoveredInstance(o, n, this.browserStorage, t.options, this.logger, this.performanceClient, this.authCodeRequest.correlationId)];
            case 1:
              return i = a.sent(), this.authModule.updateAuthority(i), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.checkCcsCredentials = function() {
      var e = this.browserStorage.getTemporaryCache(he.CCS_CREDENTIAL, !0);
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
var uc = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s) {
      var c = r.call(this, t, n, o, i, s) || this;
      return c.browserCrypto = a, c;
    }
    return e.prototype.initiateAuthRequest = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.verbose("RedirectHandler.initiateAuthRequest called"), F.isEmpty(t) ? [3, 7] : (n.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(he.ORIGIN_URI, n.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(he.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto), this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + t), o = {
                apiId: ve.acquireTokenRedirect,
                timeout: n.redirectTimeout,
                noHistory: !1
              }, typeof n.onRedirectNavigate != "function" ? [3, 4] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), i = n.onRedirectNavigate(t), i === !1 ? [3, 2] : (this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), [4, n.navigationClient.navigateExternal(t, o)])));
            case 1:
              return a.sent(), [
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
              return a.sent(), [
                2
                /*return*/
              ];
            case 6:
              return [3, 8];
            case 7:
              throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), x.createEmptyNavigationUriError();
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleCodeResponseFromHash = function(t, n, o, i) {
      return R(this, void 0, void 0, function() {
        var a, s, c, l, u, h, d;
        return P(this, function(f) {
          switch (f.label) {
            case 0:
              if (this.logger.verbose("RedirectHandler.handleCodeResponse called"), F.isEmpty(t))
                throw x.createEmptyHashError(t);
              if (this.browserStorage.setInteractionInProgress(!1), a = this.browserStorage.generateStateKey(n), s = this.browserStorage.getTemporaryCache(a), !s)
                throw z.createStateNotFoundError("Cached State");
              try {
                c = this.authModule.handleFragmentResponse(t, s);
              } catch (p) {
                throw p instanceof Ir && p.subError === N.userCancelledError.code ? x.createUserCancelledError() : p;
              }
              return l = this.browserStorage.generateNonceKey(s), u = this.browserStorage.getTemporaryCache(l), this.authCodeRequest.code = c.code, c.cloud_instance_host_name ? [4, this.updateTokenEndpointAuthority(c.cloud_instance_host_name, o, i)] : [3, 2];
            case 1:
              f.sent(), f.label = 2;
            case 2:
              return c.nonce = u || void 0, c.state = s, c.client_info ? this.authCodeRequest.clientInfo = c.client_info : (h = this.checkCcsCredentials(), h && (this.authCodeRequest.ccsCredential = h)), [4, this.authModule.acquireToken(this.authCodeRequest, c)];
            case 3:
              return d = f.sent(), this.browserStorage.cleanRequestByState(n), [2, d];
          }
        });
      });
    }, e;
  }(wa)
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
}, Rt = (
  /** @class */
  function(r) {
    Le(e, r);
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
            return x.createUserCancelledError();
          case Xt.NO_NETWORK:
            return x.createNoNetworkConnectivityError();
        }
      return new e(t, n, o);
    }, e.createUserSwitchError = function() {
      return new e(gn.userSwitch.code, gn.userSwitch.desc);
    }, e.createTokensNotFoundInCacheError = function() {
      return new e(gn.tokensNotFoundInCache.code, gn.tokensNotFoundInCache.desc);
    }, e;
  }(V)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Ul = (
  /** @class */
  function(r) {
    Le(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s;
        return P(this, function(c) {
          switch (c.label) {
            case 0:
              return n = this.performanceClient.startMeasurement(_.SilentCacheClientAcquireToken, t.correlationId), o = this.initializeServerTelemetryManager(ve.acquireTokenSilent_silentFlow), [4, this.createSilentFlowClient(o, t.authority, t.azureCloudOptions)];
            case 1:
              i = c.sent(), this.logger.verbose("Silent auth client created"), c.label = 2;
            case 2:
              return c.trys.push([2, 4, , 5]), [4, i.acquireCachedToken(t)];
            case 3:
              return a = c.sent(), n.endMeasurement({
                success: !0,
                fromCache: !0
              }), [2, a];
            case 4:
              throw s = c.sent(), s instanceof x && s.errorCode === N.signingKeyNotFoundInStorage.code && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), n.endMeasurement({
                errorCode: s instanceof V && s.errorCode || void 0,
                subErrorCode: s instanceof V && s.subError || void 0,
                success: !1
              }), s;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(x.createSilentLogoutUnsupportedError());
    }, e.prototype.createSilentFlowClient = function(t, n, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = a.sent(), [2, new Fp(i, this.performanceClient)];
          }
        });
      });
    }, e.prototype.initializeSilentRequest = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o;
        return P(this, function(i) {
          switch (i.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.InitializeSilentRequest, this.correlationId), this.performanceClient.setPreQueueTime(_.InitializeBaseRequest, this.correlationId), o = [B({}, t)], [4, this.initializeBaseRequest(t, n)];
            case 1:
              return [2, B.apply(void 0, [B.apply(void 0, o.concat([i.sent()])), { account: n, forceRefresh: t.forceRefresh || !1 }])];
          }
        });
      });
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Jr = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s, c, l, u, h, d, f) {
      var p = r.call(this, t, n, o, i, a, s, l, u, f) || this;
      return p.apiId = c, p.accountId = h, p.nativeMessageHandler = u, p.nativeStorageManager = d, p.silentCacheClient = new Ul(t, p.nativeStorageManager, o, i, a, s, l, u, f), p;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l;
        return P(this, function(u) {
          switch (u.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireToken called."), n = this.performanceClient.startMeasurement(_.NativeInteractionClientAcquireToken, t.correlationId), o = ht.nowSeconds(), [4, this.initializeNativeRequest(t)];
            case 1:
              i = u.sent(), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), [4, this.acquireTokensFromCache(this.accountId, i)];
            case 3:
              return a = u.sent(), n.endMeasurement({
                success: !0,
                isNativeBroker: !1,
                fromCache: !0
              }), [2, a];
            case 4:
              return u.sent(), this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call"), [3, 5];
            case 5:
              return s = {
                method: Ut.GetToken,
                request: i
              }, [4, this.nativeMessageHandler.sendMessage(s)];
            case 6:
              return c = u.sent(), l = this.validateNativeResponse(c), [2, this.handleNativeResponse(l, i, o).then(function(h) {
                return n.endMeasurement({
                  success: !0,
                  isNativeBroker: !0,
                  requestId: h.requestId
                }), h;
              }).catch(function(h) {
                throw n.endMeasurement({
                  success: !1,
                  errorCode: h.errorCode,
                  subErrorCode: h.subError,
                  isNativeBroker: !0
                }), h;
              })];
          }
        });
      });
    }, e.prototype.createSilentCacheRequest = function(t, n) {
      return {
        authority: t.authority,
        correlationId: this.correlationId,
        scopes: je.fromString(t.scope).asArray(),
        account: n,
        forceRefresh: !1
      };
    }, e.prototype.acquireTokensFromCache = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c;
        return P(this, function(l) {
          switch (l.label) {
            case 0:
              if (!t)
                throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), z.createNoAccountFoundError();
              if (o = this.browserStorage.getAccountInfoFilteredBy({ nativeAccountId: t }), !o)
                throw z.createNoAccountFoundError();
              l.label = 1;
            case 1:
              return l.trys.push([1, 3, , 4]), i = this.createSilentCacheRequest(n, o), [4, this.silentCacheClient.acquireToken(i)];
            case 2:
              return a = l.sent(), s = B(B({}, o), { idTokenClaims: a.idTokenClaims }), [2, B(B({}, a), { account: s })];
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
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c;
        return P(this, function(l) {
          switch (l.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - acquireTokenRedirect called."), [4, this.initializeNativeRequest(t)];
            case 1:
              n = l.sent(), o = {
                method: Ut.GetToken,
                request: n
              }, l.label = 2;
            case 2:
              return l.trys.push([2, 4, , 5]), [4, this.nativeMessageHandler.sendMessage(o)];
            case 3:
              return i = l.sent(), this.validateNativeResponse(i), [3, 5];
            case 4:
              if (a = l.sent(), a instanceof Rt && a.isFatal())
                throw a;
              return [3, 5];
            case 5:
              return this.browserStorage.setTemporaryCache(he.NATIVE_REQUEST, JSON.stringify(n), !0), s = {
                apiId: ve.acquireTokenRedirect,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, c = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(t.redirectUri), [4, this.navigationClient.navigateExternal(c, s)];
            case 6:
              return l.sent(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function() {
      return R(this, void 0, void 0, function() {
        var t, n, o, i, a, s, c, l;
        return P(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (t = this.browserStorage.getCachedNativeRequest(), !t)
                return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), [2, null];
              n = t.prompt, o = Qs(t, ["prompt"]), n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(he.NATIVE_REQUEST)), i = {
                method: Ut.GetToken,
                request: o
              }, a = ht.nowSeconds(), u.label = 1;
            case 1:
              return u.trys.push([1, 3, , 4]), this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker."), [4, this.nativeMessageHandler.sendMessage(i)];
            case 2:
              return s = u.sent(), this.validateNativeResponse(s), c = this.handleNativeResponse(s, o, a), this.browserStorage.setInteractionInProgress(!1), [2, c];
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
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l;
        return P(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("NativeInteractionClient - handleNativeResponse called."), t.account.id !== n.accountId)
                throw Rt.createUserSwitchError();
              return [4, this.getDiscoveredAuthority(n.authority)];
            case 1:
              return i = u.sent(), a = this.createIdTokenObj(t), s = this.createHomeAccountIdentifier(t, a), c = He.createAccount({
                homeAccountId: s,
                idTokenClaims: a.claims,
                clientInfo: t.client_info,
                nativeAccountId: t.account.id
              }, i), [4, this.generateAuthenticationResult(t, n, a, c, i.canonicalAuthority, o)];
            case 2:
              return l = u.sent(), this.cacheAccount(c), this.cacheNativeTokens(t, n, s, a, l.accessToken, l.tenantId, o), [2, l];
          }
        });
      });
    }, e.prototype.createIdTokenObj = function(t) {
      return new Ot(t.id_token || S.EMPTY_STRING, this.browserCrypto);
    }, e.prototype.createHomeAccountIdentifier = function(t, n) {
      var o = He.generateHomeAccountId(t.client_info || S.EMPTY_STRING, We.Default, this.logger, this.browserCrypto, n.claims);
      return o;
    }, e.prototype.generateScopes = function(t, n) {
      return t.scope ? je.fromString(t.scope) : je.fromString(n.scope);
    }, e.prototype.generatePopAccessToken = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              if (n.tokenType !== ge.POP)
                return [3, 2];
              if (t.shr)
                return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), [2, t.shr];
              if (o = new en(this.browserCrypto), i = {
                resourceRequestMethod: n.resourceRequestMethod,
                resourceRequestUri: n.resourceRequestUri,
                shrClaims: n.shrClaims,
                shrNonce: n.shrNonce
              }, !n.keyId)
                throw z.createKeyIdMissingError();
              return [4, o.signPopToken(t.access_token, n.keyId, i)];
            case 1:
              return [2, a.sent()];
            case 2:
              return [2, t.access_token];
          }
        });
      });
    }, e.prototype.generateAuthenticationResult = function(t, n, o, i, a, s) {
      return R(this, void 0, void 0, function() {
        var c, l, u, h, d, f, p, g;
        return P(this, function(m) {
          switch (m.label) {
            case 0:
              return c = this.addTelemetryFromNativeResponse(t), l = t.scope ? je.fromString(t.scope) : je.fromString(n.scope), u = t.account.properties || {}, h = u.UID || o.claims.oid || o.claims.sub || S.EMPTY_STRING, d = u.TenantId || o.claims.tid || S.EMPTY_STRING, [4, this.generatePopAccessToken(t, n)];
            case 1:
              return f = m.sent(), p = n.tokenType === ge.POP ? ge.POP : ge.BEARER, g = {
                authority: a,
                uniqueId: h,
                tenantId: d,
                scopes: l.asArray(),
                account: i.getAccountInfo(),
                idToken: t.id_token,
                idTokenClaims: o.claims,
                accessToken: f,
                fromCache: c ? this.isResponseFromCache(c) : !1,
                expiresOn: new Date(Number(s + t.expires_in) * 1e3),
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
    }, e.prototype.cacheNativeTokens = function(t, n, o, i, a, s, c) {
      var l = er.createIdTokenEntity(o, n.authority, t.id_token || S.EMPTY_STRING, n.clientId, i.claims.tid || S.EMPTY_STRING), u = n.tokenType === ge.POP ? S.SHR_NONCE_VALIDITY : (typeof t.expires_in == "string" ? parseInt(t.expires_in, 10) : t.expires_in) || 0, h = c + u, d = this.generateScopes(t, n), f = tr.createAccessTokenEntity(o, n.authority, a, n.clientId, i ? i.claims.tid || S.EMPTY_STRING : s, d.printScopes(), h, 0, this.browserCrypto), p = new Qr(void 0, l, f);
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
      throw Rt.createUnexpectedError("Response missing expected properties.");
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
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l, u, h, d, f = this;
        return P(this, function(p) {
          switch (p.label) {
            case 0:
              return this.logger.trace("NativeInteractionClient - initializeNativeRequest called"), n = t.authority || this.config.auth.authority, t.account ? [4, this.validateRequestAuthority(n, t.account)] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return o = new de(n), o.validateAsUri(), i = t.scopes, a = Qs(t, ["scopes"]), s = new je(i || []), s.appendScopes($n), c = function() {
                switch (f.apiId) {
                  case ve.ssoSilent:
                  case ve.acquireTokenSilent_silentFlow:
                    return f.logger.trace("initializeNativeRequest: silent request sets prompt to none"), Ue.NONE;
                }
                if (!t.prompt) {
                  f.logger.trace("initializeNativeRequest: prompt was not provided");
                  return;
                }
                switch (t.prompt) {
                  case Ue.NONE:
                  case Ue.CONSENT:
                  case Ue.LOGIN:
                    return f.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), t.prompt;
                  default:
                    throw f.logger.trace("initializeNativeRequest: prompt = " + t.prompt + " is not compatible with native flow"), x.createNativePromptParameterNotSupportedError();
                }
              }, l = B(B({}, a), {
                accountId: this.accountId,
                clientId: this.config.auth.clientId,
                authority: o.urlString,
                scope: s.printScopes(),
                redirectUri: this.getRedirectUri(t.redirectUri),
                prompt: c(),
                correlationId: this.correlationId,
                tokenType: t.authenticationScheme,
                windowTitleSubstring: document.title,
                extraParameters: B(B(B({}, t.extraQueryParameters), t.tokenQueryParameters), { telemetry: Cn.MATS_TELEMETRY }),
                extendedExpiryToken: !1
                // Make this configurable?
              }), t.authenticationScheme !== ge.POP ? [3, 4] : (u = {
                resourceRequestUri: t.resourceRequestUri,
                resourceRequestMethod: t.resourceRequestMethod,
                shrClaims: t.shrClaims,
                shrNonce: t.shrNonce
              }, h = new en(this.browserCrypto), [4, h.generateCnf(u)]);
            case 3:
              d = p.sent(), l.reqCnf = d.reqCnfString, l.keyId = d.kid, p.label = 4;
            case 4:
              return [2, l];
          }
        });
      });
    }, e;
  }(Fl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Sr = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = o, this.resolvers = /* @__PURE__ */ new Map(), this.handshakeResolvers = /* @__PURE__ */ new Map(), this.responseId = 0, this.messageChannel = new MessageChannel(), this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = n, this.handshakeEvent = n.startMeasurement(_.NativeMessageHandlerHandshake);
    }
    return r.prototype.sendMessage = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n = this;
        return P(this, function(o) {
          return this.logger.trace("NativeMessageHandler - sendMessage called."), t = {
            channel: Cn.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: e
          }, this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(t)), this.messageChannel.port1.postMessage(t), [2, new Promise(function(i, a) {
            n.resolvers.set(t.responseId, { resolve: i, reject: a });
          })];
        });
      });
    }, r.createProvider = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        var o, i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              e.trace("NativeMessageHandler - createProvider called."), a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 5]), o = new r(e, t, n, Cn.PREFERRED_EXTENSION_ID), [4, o.sendHandshakeRequest()];
            case 2:
              return a.sent(), [2, o];
            case 3:
              return a.sent(), i = new r(e, t, n), [4, i.sendHandshakeRequest()];
            case 4:
              return a.sent(), [2, i];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.sendHandshakeRequest = function() {
      return R(this, void 0, void 0, function() {
        var e, t = this;
        return P(this, function(n) {
          return this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1), e = {
            channel: Cn.CHANNEL_ID,
            extensionId: this.extensionId,
            responseId: this.responseId++,
            body: {
              method: Ut.HandshakeRequest
            }
          }, this.handshakeEvent.addStaticFields({
            extensionId: this.extensionId,
            extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
          }), this.messageChannel.port1.onmessage = function(o) {
            t.onChannelMessage(o);
          }, window.postMessage(e, window.origin, [this.messageChannel.port2]), [2, new Promise(function(o, i) {
            t.handshakeResolvers.set(e.responseId, { resolve: o, reject: i }), t.timeoutId = window.setTimeout(function() {
              window.removeEventListener("message", t.windowListener, !1), t.messageChannel.port1.close(), t.messageChannel.port2.close(), t.handshakeEvent.endMeasurement({ extensionHandshakeTimedOut: !0, success: !1 }), i(x.createNativeHandshakeTimeoutError()), t.handshakeResolvers.delete(e.responseId);
            }, t.handshakeTimeoutMs);
          })];
        });
      });
    }, r.prototype.onWindowMessage = function(e) {
      if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source === window) {
        var t = e.data;
        if (!(!t.channel || t.channel !== Cn.CHANNEL_ID) && !(t.extensionId && t.extensionId !== this.extensionId) && t.body.method === Ut.HandshakeRequest) {
          this.logger.verbose(t.extensionId ? "Extension with id: " + t.extensionId + " not installed" : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1);
          var n = this.handshakeResolvers.get(t.responseId);
          n && (this.handshakeEvent.endMeasurement({ success: !1, extensionInstalled: !1 }), n.reject(x.createNativeExtensionNotInstalledError()));
        }
      }
    }, r.prototype.onChannelMessage = function(e) {
      this.logger.trace("NativeMessageHandler - onChannelMessage called.");
      var t = e.data, n = this.resolvers.get(t.responseId), o = this.handshakeResolvers.get(t.responseId);
      try {
        var i = t.body.method;
        if (i === Ut.Response) {
          if (!n)
            return;
          var a = t.body.response;
          if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(a)), a.status !== "Success")
            n.reject(Rt.createError(a.code, a.description, a.ext));
          else if (a.result)
            a.result.code && a.result.description ? n.reject(Rt.createError(a.result.code, a.result.description, a.result.ext)) : n.resolve(a.result);
          else
            throw V.createUnexpectedError("Event does not contain result.");
          this.resolvers.delete(t.responseId);
        } else if (i === Ut.HandshakeResponse) {
          if (!o)
            return;
          clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = t.extensionId, this.extensionVersion = t.body.version, this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId), this.handshakeEvent.endMeasurement({ extensionInstalled: !0, success: !0 }), o.resolve(), this.handshakeResolvers.delete(t.responseId);
        }
      } catch (s) {
        this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii("Error parsing response from WAM Extension: " + s.toString()), this.logger.errorPii("Unable to parse " + e), n ? n.reject(s) : o && o.reject(s);
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
          case ge.BEARER:
          case ge.POP:
            return t.trace("isNativeAvailable: authenticationScheme is supported, returning true"), !0;
          default:
            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1;
        }
      return !0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Xp = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s, c, l, u, h) {
      var d = r.call(this, t, n, o, i, a, s, c, u, h) || this;
      return d.nativeStorage = l, d;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l, u, h, d = this;
        return P(this, function(f) {
          switch (f.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Redirect)];
            case 1:
              n = f.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || S.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(ve.acquireTokenRedirect), i = function(p) {
                p.persisted && (d.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), d.browserStorage.cleanRequestByState(n.state), d.eventHandler.emitEvent(ee.RESTORE_FROM_BFCACHE, K.Redirect));
              }, f.label = 2;
            case 2:
              return f.trys.push([2, 7, , 8]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 3:
              return a = f.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(o, n.authority, n.azureCloudOptions)];
            case 4:
              return s = f.sent(), this.logger.verbose("Auth code client created"), c = new uc(s, this.browserStorage, a, this.logger, this.browserCrypto, this.performanceClient), [4, s.getAuthCodeUrl(B(B({}, n), { nativeBroker: Sr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme) }))];
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
              throw h = f.sent(), h instanceof V && h.setCorrelationId(this.correlationId), window.removeEventListener("pageshow", i), o.cacheFailedRequest(h), this.browserStorage.cleanRequestByState(n.state), h;
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.handleRedirectPromise = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l, u, h, d, f, p;
        return P(this, function(g) {
          switch (g.label) {
            case 0:
              n = this.initializeServerTelemetryManager(ve.handleRedirectPromise), g.label = 1;
            case 1:
              if (g.trys.push([1, 10, , 11]), !this.browserStorage.isInteractionInProgress(!0))
                return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), [2, null];
              if (o = this.getRedirectResponseHash(t || window.location.hash), !o)
                return this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(K.Redirect), [2, null];
              i = void 0;
              try {
                a = de.getDeserializedHash(o), i = this.validateAndExtractStateFromHash(a, K.Redirect), this.logger.verbose("State extracted from hash");
              } catch (m) {
                return this.logger.info("handleRedirectPromise was unable to extract state due to: " + m), this.browserStorage.cleanRequestByInteractionType(K.Redirect), [2, null];
              }
              return s = this.browserStorage.getTemporaryCache(he.ORIGIN_URI, !0) || S.EMPTY_STRING, c = de.removeHashFromUrl(s), l = de.removeHashFromUrl(window.location.href), c === l && this.config.auth.navigateToLoginRequestUrl ? (this.logger.verbose("Current page is loginRequestUrl, handling hash"), [4, this.handleHash(o, i, n)]) : [3, 3];
            case 2:
              return u = g.sent(), s.indexOf("#") > -1 && Se.replaceHash(s), [2, u];
            case 3:
              return this.config.auth.navigateToLoginRequestUrl ? [3, 4] : (this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash"), [2, this.handleHash(o, i, n)]);
            case 4:
              return !Se.isInIframe() || this.config.system.allowRedirectInIframe ? (this.browserStorage.setTemporaryCache(he.URL_HASH, o, !0), h = {
                apiId: ve.handleRedirectPromise,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !0
              }, d = !0, !s || s === "null" ? (f = Se.getHomepage(), this.browserStorage.setTemporaryCache(he.ORIGIN_URI, f, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), [4, this.navigationClient.navigateInternal(f, h)]) : [3, 6]) : [3, 9];
            case 5:
              return d = g.sent(), [3, 8];
            case 6:
              return this.logger.verbose("Navigating to loginRequestUrl: " + s), [4, this.navigationClient.navigateInternal(s, h)];
            case 7:
              d = g.sent(), g.label = 8;
            case 8:
              if (!d)
                return [2, this.handleHash(o, i, n)];
              g.label = 9;
            case 9:
              return [2, null];
            case 10:
              throw p = g.sent(), p instanceof V && p.setCorrelationId(this.correlationId), n.cacheFailedRequest(p), this.browserStorage.cleanRequestByInteractionType(K.Redirect), p;
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
      var n = de.hashContainsKnownProperties(t);
      if (n)
        return Se.clearHash(window), this.logger.verbose("Hash contains known properties, returning response hash"), t;
      var o = this.browserStorage.getTemporaryCache(he.URL_HASH, !0);
      return this.browserStorage.removeItem(this.browserStorage.generateCacheKey(he.URL_HASH)), this.logger.verbose("Hash does not contain known properties, returning cached hash"), o;
    }, e.prototype.handleHash = function(t, n, o) {
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l, u, h, d = this;
        return P(this, function(f) {
          switch (f.label) {
            case 0:
              if (i = this.browserStorage.getCachedRequest(n, this.browserCrypto), this.logger.verbose("handleHash called, retrieved cached request"), a = de.getDeserializedHash(t), a.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw x.createNativeConnectionNotEstablishedError();
                return s = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, a.accountId, this.nativeStorage, i.correlationId), c = Ht.parseRequestState(this.browserCrypto, n).userRequestState, [2, s.acquireToken(B(B({}, i), {
                  state: c,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  d.browserStorage.cleanRequestByState(n);
                })];
              }
              if (l = this.browserStorage.getCachedAuthority(n), !l)
                throw x.createNoCachedAuthorityError();
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, i.correlationId), [4, this.createAuthCodeClient(o, l)];
            case 1:
              return u = f.sent(), this.logger.verbose("Auth code client created"), wo.removeThrottle(this.browserStorage, this.config.auth.clientId, i), h = new uc(u, this.browserStorage, i, this.logger, this.browserCrypto, this.performanceClient), [4, h.handleCodeResponseFromHash(t, n, u.authority, this.networkClient)];
            case 2:
              return [2, f.sent()];
          }
        });
      });
    }, e.prototype.logout = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l;
        return P(this, function(u) {
          switch (u.label) {
            case 0:
              this.logger.verbose("logoutRedirect called"), n = this.initializeLogoutRequest(t), o = this.initializeServerTelemetryManager(ve.logout), u.label = 1;
            case 1:
              return u.trys.push([1, 10, , 11]), this.eventHandler.emitEvent(ee.LOGOUT_START, K.Redirect, t), [4, this.clearCacheOnLogout(n.account)];
            case 2:
              return u.sent(), i = {
                apiId: ve.logout,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, n.correlationId), [4, this.createAuthCodeClient(o, t && t.authority)];
            case 3:
              return a = u.sent(), this.logger.verbose("Auth code client created"), s = a.getLogoutUri(n), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, K.Redirect, n), t && typeof t.onRedirectNavigate == "function" ? (c = t.onRedirectNavigate(s), c === !1 ? [3, 5] : (this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(s, i)])) : [3, 7];
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
              return this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), [4, this.navigationClient.navigateExternal(s, i)];
            case 8:
              return u.sent(), [
                2
                /*return*/
              ];
            case 9:
              return [3, 11];
            case 10:
              throw l = u.sent(), l instanceof V && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, K.Redirect, null, l), this.eventHandler.emitEvent(ee.LOGOUT_END, K.Redirect), l;
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
      return de.getAbsoluteUrl(n, Se.getCurrentUri());
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Zp = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s, c, l, u, h) {
      var d = r.call(this, t, n, o, i, a, s, c, u, h) || this;
      return d.unloadWindow = d.unloadWindow.bind(d), d.nativeStorage = l, d;
    }
    return e.prototype.acquireToken = function(t) {
      try {
        var n = this.generatePopupName(t.scopes || $n, t.authority || this.config.auth.authority), o = t.popupWindowAttributes || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(t, n, o);
        this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
        var i = this.openSizedPopup("about:blank", n, o);
        return this.acquireTokenPopupAsync(t, n, o, i);
      } catch (a) {
        return Promise.reject(a);
      }
    }, e.prototype.logout = function(t) {
      try {
        this.logger.verbose("logoutPopup called");
        var n = this.initializeLogoutRequest(t), o = this.generateLogoutPopupName(n), i = t && t.authority, a = t && t.mainWindowRedirectUri, s = (t == null ? void 0 : t.popupWindowAttributes) || {};
        if (this.config.system.asyncPopups)
          return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(n, o, s, i, void 0, a);
        this.logger.verbose("asyncPopup set to false, opening popup");
        var c = this.openSizedPopup("about:blank", o, s);
        return this.logoutPopupAsync(n, o, s, i, c, a);
      } catch (l) {
        return Promise.reject(l);
      }
    }, e.prototype.acquireTokenPopupAsync = function(t, n, o, i) {
      return R(this, void 0, void 0, function() {
        var a, s, c, l, u, h, d, f, p, g, m, C, v, b, w, E, T, k = this;
        return P(this, function(I) {
          switch (I.label) {
            case 0:
              return this.logger.verbose("acquireTokenPopupAsync called"), a = this.initializeServerTelemetryManager(ve.acquireTokenPopup), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Popup)];
            case 1:
              s = I.sent(), this.browserStorage.updateCacheEntries(s.state, s.nonce, s.authority, s.loginHint || S.EMPTY_STRING, s.account || null), I.label = 2;
            case 2:
              return I.trys.push([2, 8, , 9]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, t.correlationId), [4, this.initializeAuthorizationCodeRequest(s)];
            case 3:
              return c = I.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(a, s.authority, s.azureCloudOptions)];
            case 4:
              return l = I.sent(), this.logger.verbose("Auth code client created"), u = Sr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme), h = void 0, u && (h = this.performanceClient.startMeasurement(_.FetchAccountIdWithNativeBroker, t.correlationId)), [4, l.getAuthCodeUrl(B(B({}, s), { nativeBroker: u }))];
            case 5:
              return d = I.sent(), f = new wa(l, this.browserStorage, c, this.logger, this.performanceClient), p = {
                popup: i,
                popupName: n,
                popupWindowAttributes: o
              }, g = this.initiateAuthRequest(d, p), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: g }, null), [4, this.monitorPopupForHash(g)];
            case 6:
              if (m = I.sent(), C = de.getDeserializedHash(m), v = this.validateAndExtractStateFromHash(C, K.Popup, s.correlationId), wo.removeThrottle(this.browserStorage, this.config.auth.clientId, c), C.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), h && h.endMeasurement({
                  success: !0,
                  isNativeBroker: !0
                }), !this.nativeMessageHandler)
                  throw x.createNativeConnectionNotEstablishedError();
                return b = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, C.accountId, this.nativeStorage, s.correlationId), w = Ht.parseRequestState(this.browserCrypto, v).userRequestState, [2, b.acquireToken(B(B({}, s), {
                  state: w,
                  prompt: void 0
                  // Server should handle the prompt, ideally native broker can do this part silently
                })).finally(function() {
                  k.browserStorage.cleanRequestByState(v);
                })];
              }
              return [4, f.handleCodeResponseFromHash(m, v, l.authority, this.networkClient)];
            case 7:
              return E = I.sent(), [2, E];
            case 8:
              throw T = I.sent(), i && i.close(), T instanceof V && T.setCorrelationId(this.correlationId), a.cacheFailedRequest(T), this.browserStorage.cleanRequestByState(s.state), T;
            case 9:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logoutPopupAsync = function(t, n, o, i, a, s) {
      return R(this, void 0, void 0, function() {
        var c, l, u, h, d, f, p;
        return P(this, function(g) {
          switch (g.label) {
            case 0:
              this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(ee.LOGOUT_START, K.Popup, t), c = this.initializeServerTelemetryManager(ve.logoutPopup), g.label = 1;
            case 1:
              return g.trys.push([1, 5, , 6]), [4, this.clearCacheOnLogout(t.account)];
            case 2:
              return g.sent(), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(c, i)];
            case 3:
              return l = g.sent(), this.logger.verbose("Auth code client created"), u = l.getLogoutUri(t), this.eventHandler.emitEvent(ee.LOGOUT_SUCCESS, K.Popup, t), h = this.openPopup(u, { popupName: n, popupWindowAttributes: o, popup: a }), this.eventHandler.emitEvent(ee.POPUP_OPENED, K.Popup, { popupWindow: h }, null), [4, this.waitForLogoutPopup(h)];
            case 4:
              return g.sent(), s ? (d = {
                apiId: ve.logoutPopup,
                timeout: this.config.system.redirectNavigationTimeout,
                noHistory: !1
              }, f = de.getAbsoluteUrl(s, Se.getCurrentUri()), this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii("Redirecting main window to: " + f), this.navigationClient.navigateInternal(f, d)) : this.logger.verbose("No main window navigation requested"), [3, 6];
            case 5:
              throw p = g.sent(), a && a.close(), p instanceof V && p.setCorrelationId(this.correlationId), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(ee.LOGOUT_FAILURE, K.Popup, null, p), this.eventHandler.emitEvent(ee.LOGOUT_END, K.Popup), c.cacheFailedRequest(p), p;
            case 6:
              return this.eventHandler.emitEvent(ee.LOGOUT_END, K.Popup), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.initiateAuthRequest = function(t, n) {
      if (F.isEmpty(t))
        throw this.logger.error("Navigate url is empty"), x.createEmptyNavigationUriError();
      return this.logger.infoPii("Navigate to: " + t), this.openPopup(t, n);
    }, e.prototype.monitorPopupForHash = function(t) {
      var n = this;
      return new Promise(function(o, i) {
        var a = n.config.system.windowHashTimeout / n.config.system.pollIntervalMilliseconds, s = 0;
        n.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
        var c = setInterval(function() {
          if (t.closed) {
            n.logger.error("PopupHandler.monitorPopupForHash - window closed"), n.cleanPopup(), clearInterval(c), i(x.createUserCancelledError());
            return;
          }
          var l = S.EMPTY_STRING, u = S.EMPTY_STRING;
          try {
            l = t.location.href, u = t.location.hash;
          } catch {
          }
          F.isEmpty(l) || l === "about:blank" || (n.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), s++, u ? (n.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url"), clearInterval(c), n.cleanPopup(t), de.hashContainsKnownProperties(u) ? (n.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning."), o(u)) : (n.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely."), n.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + u), i(x.createHashDoesNotContainKnownPropertiesError()))) : s > a && (n.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out"), clearInterval(c), i(x.createMonitorPopupTimeoutError())));
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.waitForLogoutPopup = function(t) {
      var n = this;
      return new Promise(function(o) {
        n.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
        var i = setInterval(function() {
          t.closed && (n.logger.error("PopupHandler.waitForLogoutPopup - window closed"), n.cleanPopup(), clearInterval(i), o());
          var a = S.EMPTY_STRING;
          try {
            a = t.location.href;
          } catch {
          }
          F.isEmpty(a) || a === "about:blank" || (n.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing."), clearInterval(i), n.cleanPopup(t), o());
        }, n.config.system.pollIntervalMilliseconds);
      });
    }, e.prototype.openPopup = function(t, n) {
      try {
        var o = void 0;
        if (n.popup ? (o = n.popup, this.logger.verbosePii("Navigating popup window to: " + t), o.location.assign(t)) : typeof n.popup > "u" && (this.logger.verbosePii("Opening popup window to: " + t), o = this.openSizedPopup(t, n.popupName, n.popupWindowAttributes)), !o)
          throw x.createEmptyWindowCreatedError();
        return o.focus && o.focus(), this.currentWindow = o, window.addEventListener("beforeunload", this.unloadWindow), o;
      } catch (i) {
        throw this.logger.error("error opening popup " + i.message), this.browserStorage.setInteractionInProgress(!1), x.createPopupWindowError(i.toString());
      }
    }, e.prototype.openSizedPopup = function(t, n, o) {
      var i, a, s, c, l = window.screenLeft ? window.screenLeft : window.screenX, u = window.screenTop ? window.screenTop : window.screenY, h = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, d = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, f = (i = o.popupSize) === null || i === void 0 ? void 0 : i.width, p = (a = o.popupSize) === null || a === void 0 ? void 0 : a.height, g = (s = o.popupPosition) === null || s === void 0 ? void 0 : s.top, m = (c = o.popupPosition) === null || c === void 0 ? void 0 : c.left;
      return (!f || f < 0 || f > h) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), f = bt.POPUP_WIDTH), (!p || p < 0 || p > d) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), p = bt.POPUP_HEIGHT), (!g || g < 0 || g > d) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), g = Math.max(0, d / 2 - bt.POPUP_HEIGHT / 2 + u)), (!m || m < 0 || m > h) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), m = Math.max(0, h / 2 - bt.POPUP_WIDTH / 2 + l)), window.open(t, n, "width=" + f + ", height=" + p + ", top=" + g + ", left=" + m + ", scrollbars=yes");
    }, e.prototype.unloadWindow = function(t) {
      this.browserStorage.cleanRequestByInteractionType(K.Popup), this.currentWindow && this.currentWindow.close(), t.preventDefault();
    }, e.prototype.cleanPopup = function(t) {
      t && t.close(), window.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1);
    }, e.prototype.generatePopupName = function(t, n) {
      return bt.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + t.join("-") + "." + n + "." + this.correlationId;
    }, e.prototype.generateLogoutPopupName = function(t) {
      var n = t.account && t.account.homeAccountId;
      return bt.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + n + "." + this.correlationId;
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var eg = (
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
var tg = 6e4, Qi = 6e3, rg = 3e4, ng = 2e3;
function og(r, e) {
  var t = r.auth, n = r.cache, o = r.system, i = r.telemetry, a = {
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
      azureCloudInstance: Mn.None,
      tenant: S.EMPTY_STRING
    },
    skipAuthorityMetadataCache: !1
  }, s = {
    cacheLocation: Ie.SessionStorage,
    temporaryCacheLocation: Ie.SessionStorage,
    storeAuthStateInCookie: !1,
    secureCookies: !1,
    // Default cache migration to true if cache location is localStorage since entries are preserved across tabs/windows. Migration has little to no benefit in sessionStorage and memoryStorage
    cacheMigrationEnabled: !!(n && n.cacheLocation === Ie.LocalStorage),
    claimsBasedCachingEnabled: !0
  }, c = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    loggerCallback: function() {
    },
    logLevel: we.Info,
    piiLoggingEnabled: !1
  }, l = B(B({}, Ol), {
    loggerOptions: c,
    networkClient: e ? Se.getBrowserNetworkClient() : $p,
    navigationClient: new eg(),
    loadFrameTimeout: 0,
    // If loadFrameTimeout is provided, use that as default.
    windowHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || tg,
    iframeHashTimeout: (o == null ? void 0 : o.loadFrameTimeout) || Qi,
    navigateFrameWait: e && Se.detectIEOrEdge() ? 500 : 0,
    redirectNavigationTimeout: rg,
    asyncPopups: !1,
    allowRedirectInIframe: !1,
    allowNativeBroker: !1,
    nativeBrokerHandshakeTimeout: (o == null ? void 0 : o.nativeBrokerHandshakeTimeout) || ng,
    pollIntervalMilliseconds: bt.DEFAULT_POLL_INTERVAL_MS,
    cryptoOptions: {
      useMsrCrypto: !1,
      entropy: void 0
    }
  }), u = B(B({}, o), { loggerOptions: (o == null ? void 0 : o.loggerOptions) || c }), h = {
    application: {
      appName: S.EMPTY_STRING,
      appVersion: S.EMPTY_STRING
    }
  }, d = {
    auth: B(B({}, a), t),
    cache: B(B({}, s), n),
    system: B(B({}, l), u),
    telemetry: B(B({}, h), i)
  };
  return d;
}
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Hl = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s) {
      var c = r.call(this, t, n, o, i, s) || this;
      return c.navigateFrameWait = a.navigateFrameWait, c.pollIntervalMilliseconds = a.pollIntervalMilliseconds, c;
    }
    return e.prototype.initiateAuthRequest = function(t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          switch (n.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.SilentHandlerInitiateAuthRequest, this.authCodeRequest.correlationId), F.isEmpty(t))
                throw this.logger.info("Navigate url is empty"), x.createEmptyNavigationUriError();
              return this.navigateFrameWait ? (this.performanceClient.setPreQueueTime(_.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), [4, this.loadFrame(t)]) : [3, 2];
            case 1:
              return [2, n.sent()];
            case 2:
              return [2, this.loadFrameSync(t)];
          }
        });
      });
    }, e.prototype.monitorIframeForHash = function(t, n) {
      var o = this;
      return this.performanceClient.addQueueMeasurement(_.SilentHandlerMonitorIframeForHash, this.authCodeRequest.correlationId), new Promise(function(i, a) {
        n < Qi && o.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + n + "ms) than the default (" + Qi + "ms). This may result in timeouts.");
        var s = window.performance.now(), c = s + n, l = setInterval(function() {
          if (window.performance.now() > c) {
            o.removeHiddenIframe(t), clearInterval(l), a(x.createMonitorIframeTimeoutError());
            return;
          }
          var u = S.EMPTY_STRING, h = t.contentWindow;
          try {
            u = h ? h.location.href : S.EMPTY_STRING;
          } catch {
          }
          if (!F.isEmpty(u)) {
            var d = h ? h.location.hash : S.EMPTY_STRING;
            if (de.hashContainsKnownProperties(d)) {
              o.removeHiddenIframe(t), clearInterval(l), i(d);
              return;
            }
          }
        }, o.pollIntervalMilliseconds);
      });
    }, e.prototype.loadFrame = function(t) {
      var n = this;
      return this.performanceClient.addQueueMeasurement(_.SilentHandlerLoadFrame, this.authCodeRequest.correlationId), new Promise(function(o, i) {
        var a = n.createHiddenIframe();
        setTimeout(function() {
          if (!a) {
            i("Unable to load iframe");
            return;
          }
          a.src = t, o(a);
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
  }(wa)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ig = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s, c, l, u, h, d) {
      var f = r.call(this, t, n, o, i, a, s, l, h, d) || this;
      return f.apiId = c, f.nativeStorage = u, f;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s;
        return P(this, function(c) {
          switch (c.label) {
            case 0:
              if (this.performanceClient.addQueueMeasurement(_.SilentIframeClientAcquireToken, t.correlationId), this.logger.verbose("acquireTokenByIframe called"), n = this.performanceClient.startMeasurement(_.SilentIframeClientAcquireToken, t.correlationId), F.isEmpty(t.loginHint) && F.isEmpty(t.sid) && (!t.account || F.isEmpty(t.account.username)) && this.logger.warning("No user hint provided. The authorization server may need more information to complete this request."), t.prompt && t.prompt !== Ue.NONE && t.prompt !== Ue.NO_SESSION)
                throw n.endMeasurement({
                  success: !1
                }), x.createSilentPromptValueError(t.prompt);
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(B(B({}, t), { prompt: t.prompt || Ue.NONE }), K.Silent)];
            case 1:
              o = c.sent(), this.browserStorage.updateCacheEntries(o.state, o.nonce, o.authority, o.loginHint || S.EMPTY_STRING, o.account || null), i = this.initializeServerTelemetryManager(this.apiId), c.label = 2;
            case 2:
              return c.trys.push([2, 5, , 6]), this.performanceClient.setPreQueueTime(_.StandardInteractionClientCreateAuthCodeClient, t.correlationId), [4, this.createAuthCodeClient(i, o.authority, o.azureCloudOptions)];
            case 3:
              return a = c.sent(), this.logger.verbose("Auth code client created"), this.performanceClient.setPreQueueTime(_.SilentIframeClientTokenHelper, t.correlationId), [4, this.silentTokenHelper(a, o).then(function(l) {
                return n.endMeasurement({
                  success: !0,
                  fromCache: !1,
                  requestId: l.requestId
                }), l;
              })];
            case 4:
              return [2, c.sent()];
            case 5:
              throw s = c.sent(), s instanceof V && s.setCorrelationId(this.correlationId), i.cacheFailedRequest(s), this.browserStorage.cleanRequestByState(o.state), n.endMeasurement({
                errorCode: s instanceof V && s.errorCode || void 0,
                subErrorCode: s instanceof V && s.subError || void 0,
                success: !1
              }), s;
            case 6:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(x.createSilentLogoutUnsupportedError());
    }, e.prototype.silentTokenHelper = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o, i, a, s, c, l, u, h, d, f = this;
        return P(this, function(p) {
          switch (p.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.SilentIframeClientTokenHelper, n.correlationId), this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationCodeRequest, n.correlationId), [4, this.initializeAuthorizationCodeRequest(n)];
            case 1:
              return o = p.sent(), this.performanceClient.setPreQueueTime(_.GetAuthCodeUrl, n.correlationId), [4, t.getAuthCodeUrl(B(B({}, n), { nativeBroker: Sr.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, n.authenticationScheme) }))];
            case 2:
              return i = p.sent(), a = new Hl(t, this.browserStorage, o, this.logger, this.config.system, this.performanceClient), this.performanceClient.setPreQueueTime(_.SilentHandlerInitiateAuthRequest, n.correlationId), [4, a.initiateAuthRequest(i)];
            case 3:
              return s = p.sent(), this.performanceClient.setPreQueueTime(_.SilentHandlerMonitorIframeForHash, n.correlationId), [4, a.monitorIframeForHash(s, this.config.system.iframeHashTimeout)];
            case 4:
              if (c = p.sent(), l = de.getDeserializedHash(c), u = this.validateAndExtractStateFromHash(l, K.Silent, o.correlationId), l.accountId) {
                if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler)
                  throw x.createNativeConnectionNotEstablishedError();
                return h = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, l.accountId, this.browserStorage, this.correlationId), d = Ht.parseRequestState(this.browserCrypto, u).userRequestState, [2, h.acquireToken(B(B({}, n), { state: d, prompt: n.prompt || Ue.NONE })).finally(function() {
                  f.browserStorage.cleanRequestByState(u);
                })];
              }
              return this.performanceClient.setPreQueueTime(_.HandleCodeResponseFromHash, n.correlationId), [2, a.handleCodeResponseFromHash(c, u, t.authority, this.networkClient)];
          }
        });
      });
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var ag = (
  /** @class */
  function(r) {
    Le(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c = this;
        return P(this, function(l) {
          switch (l.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.SilentRefreshClientAcquireToken, t.correlationId), this.performanceClient.setPreQueueTime(_.InitializeBaseRequest, t.correlationId), o = [B({}, t)], [4, this.initializeBaseRequest(t, t.account)];
            case 1:
              return n = B.apply(void 0, o.concat([l.sent()])), i = this.performanceClient.startMeasurement(_.SilentRefreshClientAcquireToken, n.correlationId), a = this.initializeServerTelemetryManager(ve.acquireTokenSilent_silentFlow), [4, this.createRefreshTokenClient(a, n.authority, n.azureCloudOptions)];
            case 2:
              return s = l.sent(), this.logger.verbose("Refresh token client created"), this.performanceClient.setPreQueueTime(_.RefreshTokenClientAcquireTokenByRefreshToken, t.correlationId), [2, s.acquireTokenByRefreshToken(n).then(function(u) {
                return i.endMeasurement({
                  success: !0,
                  fromCache: u.fromCache,
                  requestId: u.requestId
                }), u;
              }).catch(function(u) {
                throw u instanceof V && u.setCorrelationId(c.correlationId), a.cacheFailedRequest(u), i.endMeasurement({
                  errorCode: u.errorCode,
                  subErrorCode: u.subError,
                  success: !1
                }), u;
              })];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(x.createSilentLogoutUnsupportedError());
    }, e.prototype.createRefreshTokenClient = function(t, n, o) {
      return R(this, void 0, void 0, function() {
        var i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, this.correlationId), [4, this.getClientConfiguration(t, n, o)];
            case 1:
              return i = a.sent(), [2, new xl(i, this.performanceClient)];
          }
        });
      });
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var sg = (
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
        var a = {
          eventType: e,
          interactionType: t || null,
          payload: n || null,
          error: o || null,
          timestamp: Date.now()
        };
        this.logger.info("Emitting event: " + e), this.eventCallbacks.forEach(function(s, c) {
          i.logger.verbose("Emitting event to callback " + c + ": " + e), s.apply(null, [a]);
        });
      }
    }, r.prototype.handleAccountCacheChange = function(e) {
      try {
        var t = e.newValue || e.oldValue;
        if (!t)
          return;
        var n = JSON.parse(t);
        if (typeof n != "object" || !He.isAccountEntity(n))
          return;
        var o = Ge.toObject(new He(), n), i = o.getAccountInfo();
        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.emitEvent(ee.ACCOUNT_ADDED, void 0, i)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.emitEvent(ee.ACCOUNT_REMOVED, void 0, i));
      } catch {
        return;
      }
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var De = (
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
var Bl = (
  /** @class */
  function() {
    function r(e) {
      this.cryptoObj = e;
    }
    return r.prototype.generateGuid = function() {
      try {
        var e = new Uint8Array(16);
        return this.cryptoObj.getRandomValues(e), e[6] |= 64, e[6] &= 79, e[8] |= 128, e[8] &= 191, De.decimalToHex(e[0]) + De.decimalToHex(e[1]) + De.decimalToHex(e[2]) + De.decimalToHex(e[3]) + "-" + De.decimalToHex(e[4]) + De.decimalToHex(e[5]) + "-" + De.decimalToHex(e[6]) + De.decimalToHex(e[7]) + "-" + De.decimalToHex(e[8]) + De.decimalToHex(e[9]) + "-" + De.decimalToHex(e[10]) + De.decimalToHex(e[11]) + De.decimalToHex(e[12]) + De.decimalToHex(e[13]) + De.decimalToHex(e[14]) + De.decimalToHex(e[15]);
      } catch {
        for (var t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", n = "0123456789abcdef", o = 0, i = S.EMPTY_STRING, a = 0; a < 36; a++)
          t[a] !== "-" && t[a] !== "4" && (o = Math.random() * 16 | 0), t[a] === "x" ? i += n[o] : t[a] === "y" ? (o &= 3, o |= 8, i += n[o]) : i += t[a];
        return i;
      }
    }, r.prototype.isGuid = function(e) {
      var t = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return t.test(e);
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Bt = (
  /** @class */
  function() {
    function r() {
    }
    return r.stringToUtf8Arr = function(e) {
      for (var t, n = 0, o = e.length, i = 0; i < o; i++)
        t = e.charCodeAt(i), n += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : t < 2097152 ? 4 : t < 67108864 ? 5 : 6;
      for (var a = new Uint8Array(n), s = 0, c = 0; s < n; c++)
        t = e.charCodeAt(c), t < 128 ? a[s++] = t : t < 2048 ? (a[s++] = 192 + (t >>> 6), a[s++] = 128 + (t & 63)) : t < 65536 ? (a[s++] = 224 + (t >>> 12), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63)) : t < 2097152 ? (a[s++] = 240 + (t >>> 18), a[s++] = 128 + (t >>> 12 & 63), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63)) : t < 67108864 ? (a[s++] = 248 + (t >>> 24), a[s++] = 128 + (t >>> 18 & 63), a[s++] = 128 + (t >>> 12 & 63), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63)) : (a[s++] = 252 + (t >>> 30), a[s++] = 128 + (t >>> 24 & 63), a[s++] = 128 + (t >>> 18 & 63), a[s++] = 128 + (t >>> 12 & 63), a[s++] = 128 + (t >>> 6 & 63), a[s++] = 128 + (t & 63));
      return a;
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
var zl = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.urlEncode = function(e) {
      return encodeURIComponent(this.encode(e).replace(/=/g, S.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_"));
    }, r.prototype.urlEncodeArr = function(e) {
      return this.base64EncArr(e).replace(/=/g, S.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_");
    }, r.prototype.encode = function(e) {
      var t = Bt.stringToUtf8Arr(e);
      return this.base64EncArr(t);
    }, r.prototype.base64EncArr = function(e) {
      for (var t = (3 - e.length % 3) % 3, n = S.EMPTY_STRING, o = void 0, i = e.length, a = 0, s = 0; s < i; s++)
        o = s % 3, a |= e[s] << (16 >>> o & 24), (o === 2 || e.length - s === 1) && (n += String.fromCharCode(this.uint6ToB64(a >>> 18 & 63), this.uint6ToB64(a >>> 12 & 63), this.uint6ToB64(a >>> 6 & 63), this.uint6ToB64(a & 63)), a = 0);
      return t === 0 ? n : n.substring(0, n.length - t) + (t === 1 ? "=" : "==");
    }, r.prototype.uint6ToB64 = function(e) {
      return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e === 62 ? 43 : e === 63 ? 47 : 65;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var cg = (
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
      return Bt.utf8ArrToString(n);
    }, r.prototype.base64DecToArr = function(e, t) {
      for (var n = e.replace(/[^A-Za-z0-9\+\/]/g, S.EMPTY_STRING), o = n.length, i = t ? Math.ceil((o * 3 + 1 >>> 2) / t) * t : o * 3 + 1 >>> 2, a = new Uint8Array(i), s = void 0, c = void 0, l = 0, u = 0, h = 0; h < o; h++)
        if (c = h & 3, l |= this.b64ToUint6(n.charCodeAt(h)) << 18 - 6 * c, c === 3 || o - h === 1) {
          for (s = 0; s < 3 && u < i; s++, u++)
            a[u] = l >>> (16 >>> s & 24) & 255;
          l = 0;
        }
      return a;
    }, r.prototype.b64ToUint6 = function(e) {
      return e > 64 && e < 91 ? e - 65 : e > 96 && e < 123 ? e - 71 : e > 47 && e < 58 ? e + 4 : e === 43 ? 62 : e === 47 ? 63 : 0;
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var lg = 32, ug = (
  /** @class */
  function() {
    function r(e) {
      this.base64Encode = new zl(), this.cryptoObj = e;
    }
    return r.prototype.generateCodes = function() {
      return R(this, void 0, void 0, function() {
        var e, t;
        return P(this, function(n) {
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
        var e = new Uint8Array(lg);
        this.cryptoObj.getRandomValues(e);
        var t = this.base64Encode.urlEncodeArr(e);
        return t;
      } catch (n) {
        throw x.createPkceNotGeneratedError(n);
      }
    }, r.prototype.generateCodeChallengeFromVerifier = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n;
        return P(this, function(o) {
          switch (o.label) {
            case 0:
              return o.trys.push([0, 2, , 3]), [4, this.cryptoObj.sha256Digest(e)];
            case 1:
              return t = o.sent(), [2, this.base64Encode.urlEncodeArr(new Uint8Array(t))];
            case 2:
              throw n = o.sent(), x.createPkceNotGeneratedError(n);
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
var dg = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(e) {
      return window.crypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, window.crypto.subtle.generateKey(e, t, n)];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return R(this, void 0, void 0, function() {
        return P(this, function(t) {
          return [2, window.crypto.subtle.exportKey(tn, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        return P(this, function(i) {
          return [2, window.crypto.subtle.importKey(tn, e, t, n, o)];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, window.crypto.subtle.sign(e, t, n)];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, window.crypto.subtle.digest(e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var hg = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.initPrng = function(e) {
      return window.msrCrypto.initPrng(ma(e));
    }, r.prototype.getRandomValues = function(e) {
      return window.msrCrypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, window.msrCrypto.subtle.generateKey(e, t, n)];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return R(this, void 0, void 0, function() {
        return P(this, function(t) {
          return [2, window.msrCrypto.subtle.exportKey(tn, e)];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        return P(this, function(i) {
          return [2, window.msrCrypto.subtle.importKey(tn, e, t, n, o)];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, window.msrCrypto.subtle.sign(e, t, n)];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, window.msrCrypto.subtle.digest(e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var fg = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getRandomValues = function(e) {
      return window.msCrypto.getRandomValues(e);
    }, r.prototype.generateKey = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, new Promise(function(i, a) {
            var s = window.msCrypto.subtle.generateKey(e, t, n);
            s.addEventListener("complete", function(c) {
              i(c.target.result);
            }), s.addEventListener("error", function(c) {
              a(c);
            });
          })];
        });
      });
    }, r.prototype.exportKey = function(e) {
      return R(this, void 0, void 0, function() {
        return P(this, function(t) {
          return [2, new Promise(function(n, o) {
            var i = window.msCrypto.subtle.exportKey(tn, e);
            i.addEventListener("complete", function(a) {
              var s = a.target.result, c = Bt.utf8ArrToString(new Uint8Array(s)).replace(/\r/g, S.EMPTY_STRING).replace(/\n/g, S.EMPTY_STRING).replace(/\t/g, S.EMPTY_STRING).split(" ").join(S.EMPTY_STRING).replace("\0", S.EMPTY_STRING);
              try {
                n(JSON.parse(c));
              } catch (l) {
                o(l);
              }
            }), i.addEventListener("error", function(a) {
              o(a);
            });
          })];
        });
      });
    }, r.prototype.importKey = function(e, t, n, o) {
      return R(this, void 0, void 0, function() {
        var i, a;
        return P(this, function(s) {
          return i = Bt.getSortedObjectString(e), a = Bt.stringToArrayBuffer(i), [2, new Promise(function(c, l) {
            var u = window.msCrypto.subtle.importKey(tn, a, t, n, o);
            u.addEventListener("complete", function(h) {
              c(h.target.result);
            }), u.addEventListener("error", function(h) {
              l(h);
            });
          })];
        });
      });
    }, r.prototype.sign = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, new Promise(function(i, a) {
            var s = window.msCrypto.subtle.sign(e, t, n);
            s.addEventListener("complete", function(c) {
              i(c.target.result);
            }), s.addEventListener("error", function(c) {
              a(c);
            });
          })];
        });
      });
    }, r.prototype.digest = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, new Promise(function(o, i) {
            var a = window.msCrypto.subtle.digest(e, t.buffer);
            a.addEventListener("complete", function(s) {
              o(s.target.result);
            }), a.addEventListener("error", function(s) {
              i(s);
            });
          })];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var pg = "RSASSA-PKCS1-v1_5", dc = "SHA-256", gg = 2048, mg = new Uint8Array([1, 0, 1]), $l = (
  /** @class */
  function() {
    function r(e, t) {
      var n, o;
      if (this.logger = e, this.cryptoOptions = t, this.hasBrowserCrypto())
        this.logger.verbose("BrowserCrypto: modern crypto interface available"), this.subtleCrypto = new dg();
      else if (this.hasIECrypto())
        this.logger.verbose("BrowserCrypto: MS crypto interface available"), this.subtleCrypto = new fg();
      else if (this.hasMsrCrypto() && (!((n = this.cryptoOptions) === null || n === void 0) && n.useMsrCrypto))
        this.logger.verbose("BrowserCrypto: MSR crypto interface available"), this.subtleCrypto = new hg();
      else
        throw this.hasMsrCrypto() && this.logger.info("BrowserCrypto: MSR Crypto interface available but system.cryptoOptions.useMsrCrypto not enabled"), this.logger.error("BrowserCrypto: No crypto interfaces available."), x.createCryptoNotAvailableError("Browser crypto, msCrypto, or msrCrypto interfaces not available.");
      if (this.subtleCrypto.initPrng) {
        if (this.logger.verbose("BrowserCrypto: Interface requires entropy"), !(!((o = this.cryptoOptions) === null || o === void 0) && o.entropy))
          throw this.logger.error("BrowserCrypto: Interface requires entropy but none provided."), _o.createEntropyNotProvided();
        this.logger.verbose("BrowserCrypto: Entropy provided"), this.subtleCrypto.initPrng(this.cryptoOptions.entropy);
      }
      this.keygenAlgorithmOptions = {
        name: pg,
        hash: dc,
        modulusLength: gg,
        publicExponent: mg
      };
    }
    return r.prototype.hasIECrypto = function() {
      return "msCrypto" in window;
    }, r.prototype.hasBrowserCrypto = function() {
      return "crypto" in window;
    }, r.prototype.hasMsrCrypto = function() {
      return "msrCrypto" in window;
    }, r.prototype.sha256Digest = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return P(this, function(n) {
          return t = Bt.stringToUtf8Arr(e), [2, this.subtleCrypto.digest({ name: dc }, t)];
        });
      });
    }, r.prototype.getRandomValues = function(e) {
      return this.subtleCrypto.getRandomValues(e);
    }, r.prototype.generateKeyPair = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, this.subtleCrypto.generateKey(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, r.prototype.exportJwk = function(e) {
      return R(this, void 0, void 0, function() {
        return P(this, function(t) {
          return [2, this.subtleCrypto.exportKey(e)];
        });
      });
    }, r.prototype.importJwk = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          return [2, this.subtleCrypto.importKey(e, this.keygenAlgorithmOptions, t, n)];
        });
      });
    }, r.prototype.sign = function(e, t) {
      return R(this, void 0, void 0, function() {
        return P(this, function(n) {
          return [2, this.subtleCrypto.sign(this.keygenAlgorithmOptions, e, t)];
        });
      });
    }, r;
  }()
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var yg = (
  /** @class */
  function() {
    function r() {
      this.dbName = Gi, this.version = Gp, this.tableName = Wp, this.dbOpen = !1;
    }
    return r.prototype.open = function() {
      return R(this, void 0, void 0, function() {
        var e = this;
        return P(this, function(t) {
          return [2, new Promise(function(n, o) {
            var i = window.indexedDB.open(e.dbName, e.version);
            i.addEventListener("upgradeneeded", function(a) {
              var s = a;
              s.target.result.createObjectStore(e.tableName);
            }), i.addEventListener("success", function(a) {
              var s = a;
              e.db = s.target.result, e.dbOpen = !0, n();
            }), i.addEventListener("error", function() {
              return o(x.createDatabaseUnavailableError());
            });
          })];
        });
      });
    }, r.prototype.closeConnection = function() {
      var e = this.db;
      e && this.dbOpen && (e.close(), this.dbOpen = !1);
    }, r.prototype.validateDbIsOpen = function() {
      return R(this, void 0, void 0, function() {
        return P(this, function(e) {
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
      return R(this, void 0, void 0, function() {
        var t = this;
        return P(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(x.createDatabaseNotOpenError());
                var a = t.db.transaction([t.tableName], "readonly"), s = a.objectStore(t.tableName), c = s.get(e);
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
      return R(this, void 0, void 0, function() {
        var n = this;
        return P(this, function(o) {
          switch (o.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return o.sent(), [2, new Promise(function(i, a) {
                if (!n.db)
                  return a(x.createDatabaseNotOpenError());
                var s = n.db.transaction([n.tableName], "readwrite"), c = s.objectStore(n.tableName), l = c.put(t, e);
                l.addEventListener("success", function() {
                  n.closeConnection(), i();
                }), l.addEventListener("error", function(u) {
                  n.closeConnection(), a(u);
                });
              })];
          }
        });
      });
    }, r.prototype.removeItem = function(e) {
      return R(this, void 0, void 0, function() {
        var t = this;
        return P(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(x.createDatabaseNotOpenError());
                var a = t.db.transaction([t.tableName], "readwrite"), s = a.objectStore(t.tableName), c = s.delete(e);
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
      return R(this, void 0, void 0, function() {
        var e = this;
        return P(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return t.sent(), [2, new Promise(function(n, o) {
                if (!e.db)
                  return o(x.createDatabaseNotOpenError());
                var i = e.db.transaction([e.tableName], "readonly"), a = i.objectStore(e.tableName), s = a.getAllKeys();
                s.addEventListener("success", function(c) {
                  var l = c;
                  e.closeConnection(), n(l.target.result);
                }), s.addEventListener("error", function(c) {
                  e.closeConnection(), o(c);
                });
              })];
          }
        });
      });
    }, r.prototype.containsKey = function(e) {
      return R(this, void 0, void 0, function() {
        var t = this;
        return P(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.validateDbIsOpen()];
            case 1:
              return n.sent(), [2, new Promise(function(o, i) {
                if (!t.db)
                  return i(x.createDatabaseNotOpenError());
                var a = t.db.transaction([t.tableName], "readonly"), s = a.objectStore(t.tableName), c = s.count(e);
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
      return R(this, void 0, void 0, function() {
        return P(this, function(e) {
          return this.db && this.dbOpen && this.closeConnection(), [2, new Promise(function(t, n) {
            var o = window.indexedDB.deleteDatabase(Gi);
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
var hc = (
  /** @class */
  function() {
    function r(e, t) {
      this.inMemoryCache = new Wi(), this.indexedDBCache = new yg(), this.logger = e, this.storeName = t;
    }
    return r.prototype.handleDatabaseAccessError = function(e) {
      if (e instanceof x && e.errorCode === N.databaseUnavailable.code)
        this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
      else
        throw e;
    }, r.prototype.getItem = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n;
        return P(this, function(o) {
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
      return R(this, void 0, void 0, function() {
        var n;
        return P(this, function(o) {
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
      return R(this, void 0, void 0, function() {
        var t;
        return P(this, function(n) {
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
      return R(this, void 0, void 0, function() {
        var e, t;
        return P(this, function(n) {
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
      return R(this, void 0, void 0, function() {
        var t, n;
        return P(this, function(o) {
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
      return R(this, void 0, void 0, function() {
        var e, t;
        return P(this, function(n) {
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
var ko;
(function(r) {
  r.asymmetricKeys = "asymmetricKeys", r.symmetricKeys = "symmetricKeys";
})(ko || (ko = {}));
var vg = (
  /** @class */
  function() {
    function r(e) {
      this.logger = e, this.asymmetricKeys = new hc(this.logger, ko.asymmetricKeys), this.symmetricKeys = new hc(this.logger, ko.symmetricKeys);
    }
    return r.prototype.clear = function() {
      return R(this, void 0, void 0, function() {
        var e;
        return P(this, function(t) {
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
var bg = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.logger = e, this.browserCrypto = new $l(this.logger, n), this.b64Encode = new zl(), this.b64Decode = new cg(), this.guidGenerator = new Bl(this.browserCrypto), this.pkceGenerator = new ug(this.browserCrypto), this.cache = new vg(this.logger), this.performanceClient = t;
    }
    return r.prototype.createNewGuid = function() {
      return this.guidGenerator.generateGuid();
    }, r.prototype.base64Encode = function(e) {
      return this.b64Encode.encode(e);
    }, r.prototype.base64Decode = function(e) {
      return this.b64Decode.decode(e);
    }, r.prototype.generatePkceCodes = function() {
      return R(this, void 0, void 0, function() {
        return P(this, function(e) {
          return [2, this.pkceGenerator.generateCodes()];
        });
      });
    }, r.prototype.getPublicKeyThumbprint = function(e) {
      var t;
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l, u;
        return P(this, function(h) {
          switch (h.label) {
            case 0:
              return n = (t = this.performanceClient) === null || t === void 0 ? void 0 : t.startMeasurement(_.CryptoOptsGetPublicKeyThumbprint, e.correlationId), [4, this.browserCrypto.generateKeyPair(r.EXTRACTABLE, r.POP_KEY_USAGES)];
            case 1:
              return o = h.sent(), [4, this.browserCrypto.exportJwk(o.publicKey)];
            case 2:
              return i = h.sent(), a = {
                e: i.e,
                kty: i.kty,
                n: i.n
              }, s = Bt.getSortedObjectString(a), [4, this.hashString(s)];
            case 3:
              return c = h.sent(), [4, this.browserCrypto.exportJwk(o.privateKey)];
            case 4:
              return l = h.sent(), [4, this.browserCrypto.importJwk(l, !1, ["sign"])];
            case 5:
              return u = h.sent(), [4, this.cache.asymmetricKeys.setItem(c, {
                privateKey: u,
                publicKey: o.publicKey,
                requestMethod: e.resourceRequestMethod,
                requestUri: e.resourceRequestUri
              })];
            case 6:
              return h.sent(), n && n.endMeasurement({
                success: !0
              }), [2, c];
          }
        });
      });
    }, r.prototype.removeTokenBindingKey = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return P(this, function(n) {
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
      return R(this, void 0, void 0, function() {
        return P(this, function(e) {
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
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l, u, h, d, f, p, g, m, C;
        return P(this, function(v) {
          switch (v.label) {
            case 0:
              return i = (o = this.performanceClient) === null || o === void 0 ? void 0 : o.startMeasurement(_.CryptoOptsSignJwt, n), [4, this.cache.asymmetricKeys.getItem(t)];
            case 1:
              if (a = v.sent(), !a)
                throw x.createSigningKeyNotFoundInStorageError(t);
              return [4, this.browserCrypto.exportJwk(a.publicKey)];
            case 2:
              return s = v.sent(), c = Bt.getSortedObjectString(s), l = this.b64Encode.urlEncode(JSON.stringify({ kid: t })), u = Kp.getShrHeaderString({ kid: l, alg: s.alg }), h = this.b64Encode.urlEncode(u), e.cnf = {
                jwk: JSON.parse(c)
              }, d = this.b64Encode.urlEncode(JSON.stringify(e)), f = h + "." + d, p = Bt.stringToArrayBuffer(f), [4, this.browserCrypto.sign(a.privateKey, p)];
            case 3:
              return g = v.sent(), m = this.b64Encode.urlEncodeArr(new Uint8Array(g)), C = f + "." + m, i && i.endMeasurement({
                success: !0
              }), [2, C];
          }
        });
      });
    }, r.prototype.hashString = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n;
        return P(this, function(o) {
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
var fc = (
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
var Cg = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s, c) {
      var l = r.call(this, t, n, o, i, a, s) || this;
      return l.browserCrypto = new $l(l.logger, c), l.guidGenerator = new Bl(l.browserCrypto), l;
    }
    return e.prototype.startPerformanceMeasuremeant = function(t, n) {
      return new fc(t, n);
    }, e.prototype.generateId = function() {
      return this.guidGenerator.generateGuid();
    }, e.prototype.getPageVisibility = function() {
      var t;
      return ((t = document.visibilityState) === null || t === void 0 ? void 0 : t.toString()) || null;
    }, e.prototype.deleteIncompleteSubMeasurements = function(t) {
      var n = this.eventsByCorrelationId.get(t.event.correlationId), o = n && n.eventId === t.event.eventId, i = [];
      o && (n != null && n.incompleteSubMeasurements) && n.incompleteSubMeasurements.forEach(function(a) {
        i.push(B({}, a));
      }), i.length > 0 && fc.flushMeasurements(t.event.correlationId, i);
    }, e.prototype.supportsBrowserPerformanceNow = function() {
      return typeof window < "u" && typeof window.performance < "u" && typeof window.performance.now == "function";
    }, e.prototype.startMeasurement = function(t, n) {
      var o = this, i = this.getPageVisibility(), a = r.prototype.startMeasurement.call(this, t, n);
      return B(B({}, a), { endMeasurement: function(s) {
        var c = a.endMeasurement(B({ startPageVisibility: i, endPageVisibility: o.getPageVisibility() }, s));
        return o.deleteIncompleteSubMeasurements(a), c;
      }, discardMeasurement: function() {
        a.discardMeasurement(), o.deleteIncompleteSubMeasurements(a), a.measurement.flushMeasurement();
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
      var a = r.prototype.getPreQueueTime.call(this, t, n);
      if (a) {
        var s = window.performance.now(), c = o || r.prototype.calculateQueuedTime.call(this, a, s);
        return r.prototype.addQueueMeasurement.call(this, t, n, c, i);
      }
    }, e;
  }(Dl)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var wg = (
  /** @class */
  function() {
    function r(e, t, n, o) {
      this.isBrowserEnvironment = typeof window < "u", this.config = e, this.storage = t, this.logger = n, this.cryptoObj = o;
    }
    return r.prototype.loadExternalTokens = function(e, t, n) {
      if (this.logger.info("TokenCache - loadExternalTokens called"), !t.id_token)
        throw x.createUnableToLoadTokenError("Please ensure server response includes id token.");
      var o = new Ot(t.id_token, this.cryptoObj), i, a, s;
      if (e.account)
        s = He.createFromAccountInfo(e.account), i = new Qr(s, this.loadIdToken(o, s.homeAccountId, e.account.environment, e.account.tenantId), this.loadAccessToken(e, t, s.homeAccountId, e.account.environment, e.account.tenantId, n), this.loadRefreshToken(e, t, s.homeAccountId, e.account.environment));
      else if (e.authority) {
        var c = xn.generateAuthority(e.authority, e.azureCloudOptions), l = {
          protocolMode: this.config.auth.protocolMode,
          knownAuthorities: this.config.auth.knownAuthorities,
          cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
          authorityMetadata: this.config.auth.authorityMetadata,
          skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
        };
        if (a = new xn(c, this.config.system.networkClient, this.storage, l, this.logger), n.clientInfo)
          this.logger.trace("TokenCache - homeAccountId from options"), s = this.loadAccount(o, a, n.clientInfo), i = new Qr(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, n), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else if (t.client_info)
          this.logger.trace("TokenCache - homeAccountId from response"), s = this.loadAccount(o, a, t.client_info), i = new Qr(s, this.loadIdToken(o, s.homeAccountId, a.hostnameAndPort, a.tenant), this.loadAccessToken(e, t, s.homeAccountId, a.hostnameAndPort, a.tenant, n), this.loadRefreshToken(e, t, s.homeAccountId, a.hostnameAndPort));
        else
          throw x.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
      } else
        throw x.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
      return this.generateAuthenticationResult(e, o, i, s, a);
    }, r.prototype.loadAccount = function(e, t, n, o) {
      var i;
      if (o ? i = o : t.authorityType !== void 0 && n && (i = He.generateHomeAccountId(n, t.authorityType, this.logger, this.cryptoObj, e.claims)), !i)
        throw x.createUnableToLoadTokenError("Unexpected missing homeAccountId");
      var a = He.createAccount({ homeAccountId: i, idTokenClaims: e.claims, clientInfo: n, environment: t.hostnameAndPort }, t);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading account"), this.storage.setAccount(a), a;
      throw x.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadIdToken = function(e, t, n, o) {
      var i = er.createIdTokenEntity(t, n, e.rawToken, this.config.auth.clientId, o);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading id token"), this.storage.setIdTokenCredential(i), i;
      throw x.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadAccessToken = function(e, t, n, o, i, a) {
      if (!t.access_token)
        return this.logger.verbose("TokenCache - No access token provided for caching"), null;
      if (!t.expires_in)
        throw x.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
      if (!a.extendedExpiresOn)
        throw x.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
      var s = new je(e.scopes).printScopes(), c = a.expiresOn || t.expires_in + (/* @__PURE__ */ new Date()).getTime() / 1e3, l = a.extendedExpiresOn, u = tr.createAccessTokenEntity(n, o, t.access_token, this.config.auth.clientId, i, s, c, l, this.cryptoObj);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading access token"), this.storage.setAccessTokenCredential(u), u;
      throw x.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.loadRefreshToken = function(e, t, n, o) {
      if (!t.refresh_token)
        return this.logger.verbose("TokenCache - No refresh token provided for caching"), null;
      var i = Gr.createRefreshTokenEntity(n, o, t.refresh_token, this.config.auth.clientId);
      if (this.isBrowserEnvironment)
        return this.logger.verbose("TokenCache - loading refresh token"), this.storage.setRefreshTokenCredential(i), i;
      throw x.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
    }, r.prototype.generateAuthenticationResult = function(e, t, n, o, i) {
      var a, s = S.EMPTY_STRING, c = [], l = null, u;
      n.accessToken && (s = n.accessToken.secret, c = je.fromString(n.accessToken.target).asArray(), l = new Date(Number(n.accessToken.expiresOn) * 1e3), u = new Date(Number(n.accessToken.extendedExpiresOn) * 1e3));
      var h = (t == null ? void 0 : t.claims.oid) || (t == null ? void 0 : t.claims.sub) || S.EMPTY_STRING, d = (t == null ? void 0 : t.claims.tid) || S.EMPTY_STRING;
      return {
        authority: i ? i.canonicalAuthority : S.EMPTY_STRING,
        uniqueId: h,
        tenantId: d,
        scopes: c,
        account: o ? o.getAccountInfo() : null,
        idToken: t ? t.rawToken : S.EMPTY_STRING,
        idTokenClaims: t ? t.claims : {},
        accessToken: s,
        fromCache: !0,
        expiresOn: l,
        correlationId: e.correlationId || S.EMPTY_STRING,
        requestId: S.EMPTY_STRING,
        extExpiresOn: u,
        familyId: S.EMPTY_STRING,
        tokenType: ((a = n == null ? void 0 : n.accessToken) === null || a === void 0 ? void 0 : a.tokenType) || S.EMPTY_STRING,
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
var Sg = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.includeRedirectUri = !1, n;
    }
    return e;
  }(Ml)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Eg = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t, n, o, i, a, s, c, l, u, h) {
      var d = r.call(this, t, n, o, i, a, s, l, u, h) || this;
      return d.apiId = c, d;
    }
    return e.prototype.acquireToken = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l;
        return P(this, function(u) {
          switch (u.label) {
            case 0:
              if (this.logger.trace("SilentAuthCodeClient.acquireToken called"), !t.code)
                throw x.createAuthCodeRequiredError();
              return this.performanceClient.setPreQueueTime(_.StandardInteractionClientInitializeAuthorizationRequest, t.correlationId), [4, this.initializeAuthorizationRequest(t, K.Silent)];
            case 1:
              n = u.sent(), this.browserStorage.updateCacheEntries(n.state, n.nonce, n.authority, n.loginHint || S.EMPTY_STRING, n.account || null), o = this.initializeServerTelemetryManager(this.apiId), u.label = 2;
            case 2:
              return u.trys.push([2, 4, , 5]), i = B(B({}, n), { code: t.code }), this.performanceClient.setPreQueueTime(_.StandardInteractionClientGetClientConfiguration, t.correlationId), [4, this.getClientConfiguration(o, n.authority)];
            case 3:
              return a = u.sent(), s = new Sg(a), this.logger.verbose("Auth code client created"), c = new Hl(s, this.browserStorage, i, this.logger, this.config.system, this.performanceClient), [2, c.handleCodeResponseFromServer({
                code: t.code,
                msgraph_host: t.msGraphHost,
                cloud_graph_host_name: t.cloudGraphHostName,
                cloud_instance_host_name: t.cloudInstanceHostName
              }, n.state, s.authority, this.networkClient, !1)];
            case 4:
              throw l = u.sent(), l instanceof V && l.setCorrelationId(this.correlationId), o.cacheFailedRequest(l), this.browserStorage.cleanRequestByState(n.state), l;
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.logout = function() {
      return Promise.reject(x.createSilentLogoutUnsupportedError());
    }, e;
  }(sn)
);
/*! @azure/msal-browser v2.39.0 2024-06-06 */
var Tg = (
  /** @class */
  function() {
    function r(e) {
      this.isBrowserEnvironment = typeof window < "u", this.config = og(e, this.isBrowserEnvironment), this.initialized = !1, this.logger = new ya(this.config.system.loggerOptions, gi, Pn), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = /* @__PURE__ */ new Map(), this.hybridAuthCodeResponses = /* @__PURE__ */ new Map(), this.performanceClient = this.isBrowserEnvironment ? new Cg(this.config.auth.clientId, this.config.auth.authority, this.logger, gi, Pn, this.config.telemetry.application, this.config.system.cryptoOptions) : new Vp(this.config.auth.clientId, this.config.auth.authority, this.logger, gi, Pn, this.config.telemetry.application), this.browserCrypto = this.isBrowserEnvironment ? new bg(this.logger, this.performanceClient, this.config.system.cryptoOptions) : bo, this.eventHandler = new sg(this.logger, this.browserCrypto), this.browserStorage = this.isBrowserEnvironment ? new Yi(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : Yp(this.config.auth.clientId, this.logger);
      var t = {
        cacheLocation: Ie.MemoryStorage,
        temporaryCacheLocation: Ie.MemoryStorage,
        storeAuthStateInCookie: !1,
        secureCookies: !1,
        cacheMigrationEnabled: !1,
        claimsBasedCachingEnabled: !0
      };
      this.nativeInternalStorage = new Yi(this.config.auth.clientId, t, this.browserCrypto, this.logger), this.tokenCache = new wg(this.config, this.browserStorage, this.logger, this.browserCrypto), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this);
    }
    return r.prototype.initialize = function() {
      return R(this, void 0, void 0, function() {
        var e, t, n, o, i;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              if (this.logger.trace("initialize called"), this.initialized)
                return this.logger.info("initialize has already been called, exiting early."), [
                  2
                  /*return*/
                ];
              if (e = this.config.system.allowNativeBroker, t = this.performanceClient.startMeasurement(_.InitializeClientApplication), this.eventHandler.emitEvent(ee.INITIALIZE_START), !e)
                return [3, 4];
              a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), n = this, [4, Sr.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)];
            case 2:
              return n.nativeExtensionProvider = a.sent(), [3, 4];
            case 3:
              return o = a.sent(), this.logger.verbose(o), [3, 4];
            case 4:
              return this.config.cache.claimsBasedCachingEnabled ? [3, 6] : (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), i = this.performanceClient.startMeasurement(_.ClearTokensAndKeysWithClaims), [4, this.browserStorage.clearTokensAndKeysWithClaims()]);
            case 5:
              a.sent(), i.endMeasurement({ success: !0 }), a.label = 6;
            case 6:
              return this.initialized = !0, this.eventHandler.emitEvent(ee.INITIALIZE_END), t.endMeasurement({ allowNativeBroker: e, success: !0 }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.handleRedirectPromise = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n, o, i, a, s, c, l, u = this;
        return P(this, function(h) {
          return this.logger.verbose("handleRedirectPromise called"), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), t = this.getAllAccounts(), this.isBrowserEnvironment ? (n = e || S.EMPTY_STRING, o = this.redirectResponse.get(n), typeof o > "u" ? (this.eventHandler.emitEvent(ee.HANDLE_REDIRECT_START, K.Redirect), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise"), i = this.browserStorage.getCachedNativeRequest(), a = void 0, i && Sr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e ? (this.logger.trace("handleRedirectPromise - acquiring token from native platform"), s = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, i.accountId, this.nativeInternalStorage, i.correlationId), a = s.handleRedirectPromise()) : (this.logger.trace("handleRedirectPromise - acquiring token from web flow"), c = this.browserStorage.getTemporaryCache(he.CORRELATION_ID, !0) || S.EMPTY_STRING, l = this.createRedirectClient(c), a = l.handleRedirectPromise(e)), o = a.then(function(d) {
            if (d) {
              var f = t.length < u.getAllAccounts().length;
              f ? (u.eventHandler.emitEvent(ee.LOGIN_SUCCESS, K.Redirect, d), u.logger.verbose("handleRedirectResponse returned result, login success")) : (u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, K.Redirect, d), u.logger.verbose("handleRedirectResponse returned result, acquire token success"));
            }
            return u.eventHandler.emitEvent(ee.HANDLE_REDIRECT_END, K.Redirect), d;
          }).catch(function(d) {
            throw t.length > 0 ? u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Redirect, null, d) : u.eventHandler.emitEvent(ee.LOGIN_FAILURE, K.Redirect, null, d), u.eventHandler.emitEvent(ee.HANDLE_REDIRECT_END, K.Redirect), d;
          }), this.redirectResponse.set(n, o)) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), [2, o]) : (this.logger.verbose("handleRedirectPromise returns null, not browser environment"), [2, null]);
        });
      });
    }, r.prototype.acquireTokenRedirect = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n, o, i, a, s = this;
        return P(this, function(c) {
          return t = this.getRequestCorrelationId(e), this.logger.verbose("acquireTokenRedirect called", t), this.preflightBrowserEnvironmentCheck(K.Redirect), n = this.getAllAccounts().length > 0, n ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Redirect, e) : this.eventHandler.emitEvent(ee.LOGIN_START, K.Redirect, e), this.nativeExtensionProvider && this.canUseNative(e) ? (i = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), o = i.acquireTokenRedirect(e).catch(function(l) {
            if (l instanceof Rt && l.isFatal()) {
              s.nativeExtensionProvider = void 0;
              var u = s.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            } else if (l instanceof wt) {
              s.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow");
              var u = s.createRedirectClient(e.correlationId);
              return u.acquireToken(e);
            }
            throw s.browserStorage.setInteractionInProgress(!1), l;
          })) : (a = this.createRedirectClient(e.correlationId), o = a.acquireToken(e)), [2, o.catch(function(l) {
            throw n ? s.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Redirect, null, l) : s.eventHandler.emitEvent(ee.LOGIN_FAILURE, K.Redirect, null, l), l;
          })];
        });
      });
    }, r.prototype.acquireTokenPopup = function(e) {
      var t = this, n = this.getRequestCorrelationId(e), o = this.performanceClient.startMeasurement(_.AcquireTokenPopup, n);
      try {
        this.logger.verbose("acquireTokenPopup called", n), this.preflightBrowserEnvironmentCheck(K.Popup);
      } catch (c) {
        return Promise.reject(c);
      }
      var i = this.getAllAccounts();
      i.length > 0 ? this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Popup, e) : this.eventHandler.emitEvent(ee.LOGIN_START, K.Popup, e);
      var a;
      if (this.canUseNative(e))
        a = this.acquireTokenNative(e, ve.acquireTokenPopup).then(function(c) {
          return t.browserStorage.setInteractionInProgress(!1), o.endMeasurement({
            success: !0,
            isNativeBroker: !0,
            requestId: c.requestId
          }), c;
        }).catch(function(c) {
          if (c instanceof Rt && c.isFatal()) {
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
        var s = this.createPopupClient(e.correlationId);
        a = s.acquireToken(e);
      }
      return a.then(function(c) {
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
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s = this;
        return P(this, function(c) {
          return n = this.getRequestCorrelationId(e), o = B(B({}, e), {
            // will be PromptValue.NONE or PromptValue.NO_SESSION
            prompt: e.prompt,
            correlationId: n
          }), this.preflightBrowserEnvironmentCheck(K.Silent), this.ssoSilentMeasurement = this.performanceClient.startMeasurement(_.SsoSilent, n), (t = this.ssoSilentMeasurement) === null || t === void 0 || t.increment({
            visibilityChangeCount: 0
          }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", n), this.eventHandler.emitEvent(ee.SSO_SILENT_START, K.Silent, o), this.canUseNative(o) ? i = this.acquireTokenNative(o, ve.ssoSilent).catch(function(l) {
            if (l instanceof Rt && l.isFatal()) {
              s.nativeExtensionProvider = void 0;
              var u = s.createSilentIframeClient(o.correlationId);
              return u.acquireToken(o);
            }
            throw l;
          }) : (a = this.createSilentIframeClient(o.correlationId), i = a.acquireToken(o)), [2, i.then(function(l) {
            var u, h;
            return s.eventHandler.emitEvent(ee.SSO_SILENT_SUCCESS, K.Silent, l), (u = s.ssoSilentMeasurement) === null || u === void 0 || u.addStaticFields({
              accessTokenSize: l.accessToken.length,
              idTokenSize: l.idToken.length
            }), (h = s.ssoSilentMeasurement) === null || h === void 0 || h.endMeasurement({
              success: !0,
              isNativeBroker: l.fromNativeBroker,
              requestId: l.requestId
            }), l;
          }).catch(function(l) {
            var u;
            throw s.eventHandler.emitEvent(ee.SSO_SILENT_FAILURE, K.Silent, null, l), (u = s.ssoSilentMeasurement) === null || u === void 0 || u.endMeasurement({
              errorCode: l.errorCode,
              subErrorCode: l.subError,
              success: !1
            }), l;
          }).finally(function() {
            document.removeEventListener("visibilitychange", s.trackPageVisibilityWithMeasurement);
          })];
        });
      });
    }, r.prototype.acquireTokenByCode = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n, o, i, a = this;
        return P(this, function(s) {
          t = this.getRequestCorrelationId(e), this.preflightBrowserEnvironmentCheck(K.Silent), this.logger.trace("acquireTokenByCode called", t), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_START, K.Silent, e), n = this.performanceClient.startMeasurement(_.AcquireTokenByCode, e.correlationId);
          try {
            if (e.code && e.nativeAccountId)
              throw x.createSpaCodeAndNativeAccountIdPresentError();
            if (e.code)
              return o = e.code, i = this.hybridAuthCodeResponses.get(o), i ? (this.logger.verbose("Existing acquireTokenByCode request found", e.correlationId), n.discardMeasurement()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), i = this.acquireTokenByCodeAsync(B(B({}, e), { correlationId: t })).then(function(c) {
                return a.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_SUCCESS, K.Silent, c), a.hybridAuthCodeResponses.delete(o), n.addStaticFields({
                  accessTokenSize: c.accessToken.length,
                  idTokenSize: c.idToken.length
                }), n.endMeasurement({
                  success: !0,
                  isNativeBroker: c.fromNativeBroker,
                  requestId: c.requestId
                }), c;
              }).catch(function(c) {
                throw a.hybridAuthCodeResponses.delete(o), a.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, K.Silent, null, c), n.endMeasurement({
                  errorCode: c.errorCode,
                  subErrorCode: c.subError,
                  success: !1
                }), c;
              }), this.hybridAuthCodeResponses.set(o, i)), [2, i];
            if (e.nativeAccountId) {
              if (this.canUseNative(e, e.nativeAccountId))
                return [2, this.acquireTokenNative(e, ve.acquireTokenByCode, e.nativeAccountId).catch(function(c) {
                  throw c instanceof Rt && c.isFatal() && (a.nativeExtensionProvider = void 0), c;
                })];
              throw x.createUnableToAcquireTokenFromNativePlatformError();
            } else
              throw x.createAuthCodeOrNativeAccountIdRequiredError();
          } catch (c) {
            throw this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_BY_CODE_FAILURE, K.Silent, null, c), n.endMeasurement({
              errorCode: c instanceof V && c.errorCode || void 0,
              subErrorCode: c instanceof V && c.subError || void 0,
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
      return R(this, void 0, void 0, function() {
        var n, o, i = this;
        return P(this, function(a) {
          switch (a.label) {
            case 0:
              return this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(_.AcquireTokenByCodeAsync, e.correlationId), (t = this.acquireTokenByCodeAsyncMeasurement) === null || t === void 0 || t.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), n = this.createSilentAuthCodeClient(e.correlationId), [4, n.acquireToken(e).then(function(s) {
                var c;
                return (c = i.acquireTokenByCodeAsyncMeasurement) === null || c === void 0 || c.endMeasurement({
                  success: !0,
                  fromCache: s.fromCache,
                  isNativeBroker: s.fromNativeBroker,
                  requestId: s.requestId
                }), s;
              }).catch(function(s) {
                var c;
                throw (c = i.acquireTokenByCodeAsyncMeasurement) === null || c === void 0 || c.endMeasurement({
                  errorCode: s.errorCode,
                  subErrorCode: s.subError,
                  success: !1
                }), s;
              }).finally(function() {
                document.removeEventListener("visibilitychange", i.trackPageVisibilityWithMeasurement);
              })];
            case 1:
              return o = a.sent(), [2, o];
          }
        });
      });
    }, r.prototype.acquireTokenFromCache = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        return P(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(_.AcquireTokenFromCache, t.correlationId), n.cacheLookupPolicy) {
            case Ye.Default:
            case Ye.AccessToken:
            case Ye.AccessTokenAndRefreshToken:
              return [2, e.acquireToken(t)];
            default:
              throw z.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenByRefreshToken = function(e, t) {
      return R(this, void 0, void 0, function() {
        var n;
        return P(this, function(o) {
          switch (this.performanceClient.addQueueMeasurement(_.AcquireTokenByRefreshToken, e.correlationId), t.cacheLookupPolicy) {
            case Ye.Default:
            case Ye.AccessTokenAndRefreshToken:
            case Ye.RefreshToken:
            case Ye.RefreshTokenAndNetwork:
              return n = this.createSilentRefreshClient(e.correlationId), this.performanceClient.setPreQueueTime(_.SilentRefreshClientAcquireToken, e.correlationId), [2, n.acquireToken(e)];
            default:
              throw z.createRefreshRequiredError();
          }
          return [
            2
            /*return*/
          ];
        });
      });
    }, r.prototype.acquireTokenBySilentIframe = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return P(this, function(n) {
          return this.performanceClient.addQueueMeasurement(_.AcquireTokenBySilentIframe, e.correlationId), t = this.createSilentIframeClient(e.correlationId), this.performanceClient.setPreQueueTime(_.SilentIframeClientAcquireToken, e.correlationId), [2, t.acquireToken(e)];
        });
      });
    }, r.prototype.logout = function(e) {
      return R(this, void 0, void 0, function() {
        var t;
        return P(this, function(n) {
          return t = this.getRequestCorrelationId(e), this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), [2, this.logoutRedirect(B({ correlationId: t }, e))];
        });
      });
    }, r.prototype.logoutRedirect = function(e) {
      return R(this, void 0, void 0, function() {
        var t, n;
        return P(this, function(o) {
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
      if (t === void 0 && (t = !0), this.logger.verbose("preflightBrowserEnvironmentCheck started"), Se.blockNonBrowserEnvironment(this.isBrowserEnvironment), Se.blockRedirectInIframe(e, this.config.system.allowRedirectInIframe), Se.blockReloadInHiddenIframes(), Se.blockAcquireTokenInPopups(), Se.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized), e === K.Redirect && this.config.cache.cacheLocation === Ie.MemoryStorage && !this.config.cache.storeAuthStateInCookie)
        throw _o.createInMemoryRedirectUnavailableError();
      (e === K.Redirect || e === K.Popup) && this.preflightInteractiveRequest(t);
    }, r.prototype.preflightInteractiveRequest = function(e) {
      this.logger.verbose("preflightInteractiveRequest called, validating app environment"), Se.blockReloadInHiddenIframes(), e && this.browserStorage.setInteractionInProgress(!0);
    }, r.prototype.acquireTokenNative = function(e, t, n) {
      return R(this, void 0, void 0, function() {
        var o;
        return P(this, function(i) {
          if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider)
            throw x.createNativeConnectionNotEstablishedError();
          return o = new Jr(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, n || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId), [2, o.acquireToken(e)];
        });
      });
    }, r.prototype.canUseNative = function(e, t) {
      if (this.logger.trace("canUseNative called"), !Sr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme))
        return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
      if (e.prompt)
        switch (e.prompt) {
          case Ue.NONE:
          case Ue.CONSENT:
          case Ue.LOGIN:
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
      return new Zp(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createRedirectClient = function(e) {
      return new Xp(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentIframeClient = function(e) {
      return new ig(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentCacheClient = function(e) {
      return new Ul(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentRefreshClient = function(e) {
      return new ag(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e);
    }, r.prototype.createSilentAuthCodeClient = function(e) {
      return new Eg(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ve.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e);
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
var Ig = (
  /** @class */
  function(r) {
    Le(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.astsAsyncMeasurement = void 0, n.activeSilentTokenRequests = /* @__PURE__ */ new Map(), n.trackPageVisibility = n.trackPageVisibility.bind(n), n;
    }
    return e.prototype.loginRedirect = function(t) {
      return R(this, void 0, void 0, function() {
        var n;
        return P(this, function(o) {
          return n = this.getRequestCorrelationId(t), this.logger.verbose("loginRedirect called", n), [2, this.acquireTokenRedirect(B({ correlationId: n }, t || sc))];
        });
      });
    }, e.prototype.loginPopup = function(t) {
      var n = this.getRequestCorrelationId(t);
      return this.logger.verbose("loginPopup called", n), this.acquireTokenPopup(B({ correlationId: n }, t || sc));
    }, e.prototype.acquireTokenSilent = function(t) {
      return R(this, void 0, void 0, function() {
        var n, o, i, a, s, c, l, u = this;
        return P(this, function(h) {
          if (n = this.getRequestCorrelationId(t), o = this.performanceClient.startMeasurement(_.AcquireTokenSilent, n), o.addStaticFields({
            cacheLookupPolicy: t.cacheLookupPolicy
          }), this.preflightBrowserEnvironmentCheck(K.Silent), this.logger.verbose("acquireTokenSilent called", n), i = t.account || this.getActiveAccount(), !i)
            throw x.createNoAccountError();
          return a = {
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
          }, s = JSON.stringify(a), c = this.activeSilentTokenRequests.get(s), typeof c > "u" ? (this.logger.verbose("acquireTokenSilent called for the first time, storing active request", n), this.performanceClient.setPreQueueTime(_.AcquireTokenSilentAsync, n), l = this.acquireTokenSilentAsync(B(B({}, t), { correlationId: n }), i).then(function(d) {
            return u.activeSilentTokenRequests.delete(s), o.addStaticFields({
              accessTokenSize: d.accessToken.length,
              idTokenSize: d.idToken.length
            }), o.endMeasurement({
              success: !0,
              fromCache: d.fromCache,
              isNativeBroker: d.fromNativeBroker,
              cacheLookupPolicy: t.cacheLookupPolicy,
              requestId: d.requestId
            }), d;
          }).catch(function(d) {
            throw u.activeSilentTokenRequests.delete(s), o.endMeasurement({
              errorCode: d.errorCode,
              subErrorCode: d.subError,
              success: !1
            }), d;
          }), this.activeSilentTokenRequests.set(s, l), [2, l]) : (this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", n), o.discardMeasurement(), [2, c]);
        });
      });
    }, e.prototype.trackPageVisibility = function() {
      this.astsAsyncMeasurement && (this.logger.info("Perf: Visibility change detected"), this.astsAsyncMeasurement.increment({
        visibilityChangeCount: 1
      }));
    }, e.prototype.acquireTokenSilentAsync = function(t, n) {
      var o;
      return R(this, void 0, void 0, function() {
        var i, a, s, c, l, u = this;
        return P(this, function(h) {
          switch (h.label) {
            case 0:
              return this.performanceClient.addQueueMeasurement(_.AcquireTokenSilentAsync, t.correlationId), this.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_START, K.Silent, t), this.astsAsyncMeasurement = this.performanceClient.startMeasurement(_.AcquireTokenSilentAsync, t.correlationId), (o = this.astsAsyncMeasurement) === null || o === void 0 || o.increment({
                visibilityChangeCount: 0
              }), document.addEventListener("visibilitychange", this.trackPageVisibility), Sr.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, t.authenticationScheme) && n.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), a = B(B({}, t), { account: n }), i = this.acquireTokenNative(a, ve.acquireTokenSilent_silentFlow).catch(function(d) {
                return R(u, void 0, void 0, function() {
                  var f;
                  return P(this, function(p) {
                    if (d instanceof Rt && d.isFatal())
                      return this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, f = this.createSilentIframeClient(t.correlationId), [2, f.acquireToken(t)];
                    throw d;
                  });
                });
              }), [3, 3]) : [3, 1];
            case 1:
              return this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), s = this.createSilentCacheClient(t.correlationId), this.performanceClient.setPreQueueTime(_.InitializeSilentRequest, t.correlationId), [4, s.initializeSilentRequest(t, n)];
            case 2:
              c = h.sent(), l = B(B({}, t), {
                // set the request's CacheLookupPolicy to Default if it was not optionally passed in
                cacheLookupPolicy: t.cacheLookupPolicy || Ye.Default
              }), this.performanceClient.setPreQueueTime(_.AcquireTokenFromCache, c.correlationId), i = this.acquireTokenFromCache(s, c, l).catch(function(d) {
                if (l.cacheLookupPolicy === Ye.AccessToken)
                  throw d;
                return Se.blockReloadInHiddenIframes(), u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_NETWORK_START, K.Silent, c), u.performanceClient.setPreQueueTime(_.AcquireTokenByRefreshToken, c.correlationId), u.acquireTokenByRefreshToken(c, l).catch(function(f) {
                  var p = f instanceof Ir, g = f instanceof wt, m = f.errorCode === Wr.noTokensFoundError.code, C = f.errorCode === bt.INVALID_GRANT_ERROR;
                  if ((!p || !C || g || l.cacheLookupPolicy === Ye.AccessTokenAndRefreshToken || l.cacheLookupPolicy === Ye.RefreshToken) && l.cacheLookupPolicy !== Ye.Skip && !m)
                    throw f;
                  return u.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", t.correlationId), u.performanceClient.setPreQueueTime(_.AcquireTokenBySilentIframe, c.correlationId), u.acquireTokenBySilentIframe(c);
                });
              }), h.label = 3;
            case 3:
              return [2, i.then(function(d) {
                var f;
                return u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_SUCCESS, K.Silent, d), (f = u.astsAsyncMeasurement) === null || f === void 0 || f.endMeasurement({
                  success: !0,
                  fromCache: d.fromCache,
                  isNativeBroker: d.fromNativeBroker,
                  requestId: d.requestId
                }), d;
              }).catch(function(d) {
                var f;
                throw u.eventHandler.emitEvent(ee.ACQUIRE_TOKEN_FAILURE, K.Silent, null, d), (f = u.astsAsyncMeasurement) === null || f === void 0 || f.endMeasurement({
                  errorCode: d.errorCode,
                  subErrorCode: d.subError,
                  success: !1
                }), d;
              }).finally(function() {
                document.removeEventListener("visibilitychange", u.trackPageVisibility);
              })];
          }
        });
      });
    }, e.prototype.hydrateCache = function(t, n) {
      return R(this, void 0, void 0, function() {
        var o;
        return P(this, function(i) {
          return this.logger.verbose("hydrateCache called"), t.account ? (o = He.createFromAccountInfo(t.account, t.cloudGraphHostName, t.msGraphHost), this.browserStorage.setAccount(o), t.fromNativeBroker ? (this.logger.verbose("Response was from native broker, storing in-memory"), [2, this.nativeInternalStorage.hydrateCache(t, n)]) : [2, this.browserStorage.hydrateCache(t, n)]) : [
            2
            /*return*/
          ];
        });
      });
    }, e;
  }(Tg)
);
function Pt(r) {
  return Object.keys(r);
}
function mi(r) {
  return r && typeof r == "object" && !Array.isArray(r);
}
function Sa(r, e) {
  const t = { ...r }, n = e;
  return mi(r) && mi(e) && Object.keys(e).forEach((o) => {
    mi(n[o]) && o in r ? t[o] = Sa(t[o], n[o]) : t[o] = n[o];
  }), t;
}
function _g(r) {
  return r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
function kg(r) {
  var e;
  return typeof r != "string" || !r.includes("var(--mantine-scale)") ? r : (e = r.match(/^calc\((.*?)\)$/)) == null ? void 0 : e[1].split("*")[0].trim();
}
function Ag(r) {
  const e = kg(r);
  return typeof e == "number" ? e : typeof e == "string" ? e.includes("calc") || e.includes("var") ? e : e.includes("px") ? Number(e.replace("px", "")) : e.includes("rem") ? Number(e.replace("rem", "")) * 16 : e.includes("em") ? Number(e.replace("em", "")) * 16 : Number(e) : NaN;
}
function yi(r) {
  return r === "0rem" ? "0rem" : `calc(${r} * var(--mantine-scale))`;
}
function Kl(r, { shouldScale: e = !1 } = {}) {
  function t(n) {
    if (n === 0 || n === "0")
      return `0${r}`;
    if (typeof n == "number") {
      const o = `${n / 16}${r}`;
      return e ? yi(o) : o;
    }
    if (typeof n == "string") {
      if (n === "" || n.startsWith("calc(") || n.startsWith("clamp(") || n.includes("rgba("))
        return n;
      if (n.includes(","))
        return n.split(",").map((i) => t(i)).join(",");
      if (n.includes(" "))
        return n.split(" ").map((i) => t(i)).join(" ");
      if (n.includes(r))
        return e ? yi(n) : n;
      const o = n.replace("px", "");
      if (!Number.isNaN(Number(o))) {
        const i = `${Number(o) / 16}${r}`;
        return e ? yi(i) : i;
      }
    }
    return n;
  }
  return t;
}
const A = Kl("rem", { shouldScale: !0 }), pc = Kl("em");
function Ea(r) {
  return Object.keys(r).reduce((e, t) => (r[t] !== void 0 && (e[t] = r[t]), e), {});
}
function ql(r) {
  return typeof r == "number" ? !0 : typeof r == "string" ? r.startsWith("calc(") || r.startsWith("var(") || r.includes(" ") && r.trim() !== "" ? !0 : /[0-9]/.test(r.trim().replace("-", "")[0]) : !1;
}
function Kn(r) {
  return Array.isArray(r) || r === null ? !1 : typeof r == "object" ? r.type !== yl : !1;
}
function cn(r) {
  const e = Pr(null);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => {
    const o = sr(e);
    if (o === null)
      throw new Error(r);
    return o;
  }];
}
function Vl(r = null) {
  const e = Pr(r);
  return [({ children: o, value: i }) => /* @__PURE__ */ y.jsx(e.Provider, { value: i, children: o }), () => sr(e)];
}
function gc(r, e) {
  return (t) => {
    if (typeof t != "string" || t.trim().length === 0)
      throw new Error(e);
    return `${r}-${t}`;
  };
}
function Ji(r, e) {
  let t = r;
  for (; (t = t.parentElement) && !t.matches(e); )
    ;
  return t;
}
function Rg(r, e, t) {
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
function Pg(r, e, t) {
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
function Ng(r, e, t) {
  return Ji(r, t) === Ji(e, t);
}
function Og({
  parentSelector: r,
  siblingSelector: e,
  onKeyDown: t,
  loop: n = !0,
  activateOnFocus: o = !1,
  dir: i = "rtl",
  orientation: a
}) {
  return (s) => {
    var p;
    t == null || t(s);
    const c = Array.from(
      ((p = Ji(s.currentTarget, r)) == null ? void 0 : p.querySelectorAll(
        e
      )) || []
    ).filter((g) => Ng(s.currentTarget, g, r)), l = c.findIndex((g) => s.currentTarget === g), u = Pg(l, c, n), h = Rg(l, c, n), d = i === "rtl" ? h : u, f = i === "rtl" ? u : h;
    switch (s.key) {
      case "ArrowRight": {
        a === "horizontal" && (s.stopPropagation(), s.preventDefault(), c[d].focus(), o && c[d].click());
        break;
      }
      case "ArrowLeft": {
        a === "horizontal" && (s.stopPropagation(), s.preventDefault(), c[f].focus(), o && c[f].click());
        break;
      }
      case "ArrowUp": {
        a === "vertical" && (s.stopPropagation(), s.preventDefault(), c[h].focus(), o && c[h].click());
        break;
      }
      case "ArrowDown": {
        a === "vertical" && (s.stopPropagation(), s.preventDefault(), c[u].focus(), o && c[u].click());
        break;
      }
      case "Home": {
        s.stopPropagation(), s.preventDefault(), !c[0].disabled && c[0].focus();
        break;
      }
      case "End": {
        s.stopPropagation(), s.preventDefault();
        const g = c.length - 1;
        !c[g].disabled && c[g].focus();
        break;
      }
    }
  };
}
const Mg = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function xg(r) {
  return Mg[r];
}
const Lg = () => {
};
function Dg(r, e = { active: !0 }) {
  return typeof r != "function" || !e.active ? e.onKeyDown || Lg : (t) => {
    var n;
    t.key === "Escape" && (r(t), (n = e.onTrigger) == null || n.call(e));
  };
}
function Ae(r, e = "size", t = !0) {
  if (r !== void 0)
    return ql(r) ? t ? A(r) : r : `var(--${e}-${r})`;
}
function Ta(r) {
  return Ae(r, "mantine-spacing");
}
function It(r) {
  return r === void 0 ? "var(--mantine-radius-default)" : Ae(r, "mantine-radius");
}
function it(r) {
  return Ae(r, "mantine-font-size");
}
function jg(r) {
  return Ae(r, "mantine-line-height", !1);
}
function Gl(r) {
  if (r)
    return Ae(r, "mantine-shadow", !1);
}
function Wl() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}
function Cr(r) {
  const e = ue(r);
  return W(() => {
    e.current = r;
  }), ho(() => (...t) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...t);
  }, []);
}
function Go(r, e) {
  const t = Cr(r), n = ue(0);
  return W(() => () => window.clearTimeout(n.current), []), me(
    (...o) => {
      window.clearTimeout(n.current), n.current = window.setTimeout(() => t(...o), e);
    },
    [t, e]
  );
}
const mc = ["mousedown", "touchstart"];
function Fg(r, e, t) {
  const n = ue();
  return W(() => {
    const o = (i) => {
      const { target: a } = i ?? {};
      if (Array.isArray(t)) {
        const s = (a == null ? void 0 : a.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(a) && a.tagName !== "HTML";
        t.every((l) => !!l && !i.composedPath().includes(l)) && !s && r();
      } else
        n.current && !n.current.contains(a) && r();
    };
    return (e || mc).forEach((i) => document.addEventListener(i, o)), () => {
      (e || mc).forEach((i) => document.removeEventListener(i, o));
    };
  }, [n, r, t]), n;
}
function Ug(r, e) {
  try {
    return r.addEventListener("change", e), () => r.removeEventListener("change", e);
  } catch {
    return r.addListener(e), () => r.removeListener(e);
  }
}
function Hg(r, e) {
  return typeof e == "boolean" ? e : typeof window < "u" && "matchMedia" in window ? window.matchMedia(r).matches : !1;
}
function Bg(r, e, { getInitialValueInEffect: t } = {
  getInitialValueInEffect: !0
}) {
  const [n, o] = Z(
    t ? e : Hg(r)
  ), i = ue();
  return W(() => {
    if ("matchMedia" in window)
      return i.current = window.matchMedia(r), o(i.current.matches), Ug(i.current, (a) => o(a.matches));
  }, [r]), n;
}
function zg(r, e, t = { leading: !1 }) {
  const [n, o] = Z(r), i = ue(!1), a = ue(null), s = ue(!1), c = () => window.clearTimeout(a.current);
  return W(() => {
    i.current && (!s.current && t.leading ? (s.current = !0, o(r)) : (c(), a.current = window.setTimeout(() => {
      s.current = !1, o(r);
    }, e)));
  }, [r, t.leading, e]), W(() => (i.current = !0, c), []), [n, c];
}
const qn = typeof document < "u" ? fa : W;
function _r(r, e) {
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
function $g({ opened: r, shouldReturnFocus: e = !0 }) {
  const t = ue(), n = () => {
    var o;
    t.current && "focus" in t.current && typeof t.current.focus == "function" && ((o = t.current) == null || o.focus({ preventScroll: !0 }));
  };
  return _r(() => {
    let o = -1;
    const i = (a) => {
      a.key === "Tab" && window.clearTimeout(o);
    };
    return document.addEventListener("keydown", i), r ? t.current = document.activeElement : e && (o = window.setTimeout(n, 10)), () => {
      window.clearTimeout(o), document.removeEventListener("keydown", i);
    };
  }, [r, e]), n;
}
function Kg(r, e = "body > :not(script)") {
  const t = Wl(), n = Array.from(
    document.querySelectorAll(e)
  ).map((o) => {
    var c;
    if ((c = o == null ? void 0 : o.shadowRoot) != null && c.contains(r) || o.contains(r))
      return;
    const i = o.getAttribute("aria-hidden"), a = o.getAttribute("data-hidden"), s = o.getAttribute("data-focus-id");
    return o.setAttribute("data-focus-id", t), i === null || i === "false" ? o.setAttribute("aria-hidden", "true") : !a && !s && o.setAttribute("data-hidden", i), {
      node: o,
      ariaHidden: a || null
    };
  });
  return () => {
    n.forEach((o) => {
      !o || t !== o.node.getAttribute("data-focus-id") || (o.ariaHidden === null ? o.node.removeAttribute("aria-hidden") : o.node.setAttribute("aria-hidden", o.ariaHidden), o.node.removeAttribute("data-focus-id"), o.node.removeAttribute("data-hidden"));
    });
  };
}
const qg = /input|select|textarea|button|object/, Yl = "a, input, select, textarea, button, object, [tabindex]";
function Vg(r) {
  return r.style.display === "none";
}
function Gg(r) {
  if (r.getAttribute("aria-hidden") || r.getAttribute("hidden") || r.getAttribute("type") === "hidden")
    return !1;
  let t = r;
  for (; t && !(t === document.body || t.nodeType === 11); ) {
    if (Vg(t))
      return !1;
    t = t.parentNode;
  }
  return !0;
}
function Ql(r) {
  let e = r.getAttribute("tabindex");
  return e === null && (e = void 0), parseInt(e, 10);
}
function Xi(r) {
  const e = r.nodeName.toLowerCase(), t = !Number.isNaN(Ql(r));
  return /* @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition */ (qg.test(e) && !r.disabled || r instanceof HTMLAnchorElement && r.href || t) && Gg(r);
}
function Jl(r) {
  const e = Ql(r);
  return (Number.isNaN(e) || e >= 0) && Xi(r);
}
function Wg(r) {
  return Array.from(r.querySelectorAll(Yl)).filter(Jl);
}
function Yg(r, e) {
  const t = Wg(r);
  if (!t.length) {
    e.preventDefault();
    return;
  }
  const n = t[e.shiftKey ? 0 : t.length - 1], o = r.getRootNode();
  let i = n === o.activeElement || r === o.activeElement;
  const a = o.activeElement;
  if (a.tagName === "INPUT" && a.getAttribute("type") === "radio" && (i = t.filter(
    (u) => u.getAttribute("type") === "radio" && u.getAttribute("name") === a.getAttribute("name")
  ).includes(n)), !i)
    return;
  e.preventDefault();
  const c = t[e.shiftKey ? t.length - 1 : 0];
  c && c.focus();
}
function Qg(r = !0) {
  const e = ue(), t = ue(null), n = (i) => {
    let a = i.querySelector("[data-autofocus]");
    if (!a) {
      const s = Array.from(i.querySelectorAll(Yl));
      a = s.find(Jl) || s.find(Xi) || null, !a && Xi(i) && (a = i);
    }
    a && a.focus({ preventScroll: !0 });
  }, o = me(
    (i) => {
      if (r) {
        if (i === null) {
          t.current && (t.current(), t.current = null);
          return;
        }
        t.current = Kg(i), e.current !== i && (i ? (setTimeout(() => {
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
    const i = (a) => {
      a.key === "Tab" && e.current && Yg(e.current, a);
    };
    return document.addEventListener("keydown", i), () => {
      document.removeEventListener("keydown", i), t.current && t.current();
    };
  }, [r]), o;
}
const Jg = zo["useId".toString()] || (() => {
});
function Xg() {
  const r = Jg();
  return r ? `mantine-${r.replace(/:/g, "")}` : "";
}
function cr(r) {
  const e = Xg(), [t, n] = Z(e);
  return qn(() => {
    n(Wl());
  }, []), typeof r == "string" ? r : typeof window > "u" ? e : t;
}
function Xl(r, e) {
  typeof r == "function" ? r(e) : typeof r == "object" && r !== null && "current" in r && (r.current = e);
}
function Zl(...r) {
  return (e) => {
    r.forEach((t) => Xl(t, e));
  };
}
function ft(...r) {
  return me(Zl(...r), r);
}
function kr({
  value: r,
  defaultValue: e,
  finalValue: t,
  onChange: n = () => {
  }
}) {
  const [o, i] = Z(
    e !== void 0 ? e : t
  ), a = (s, ...c) => {
    i(s), n == null || n(s, ...c);
  };
  return r !== void 0 ? [r, n, !0] : [o, a, !1];
}
function eu(r, e) {
  return Bg("(prefers-reduced-motion: reduce)", r, e);
}
function Zg(r) {
  const e = ue();
  return W(() => {
    e.current = r;
  }, [r]), e.current;
}
function tu(r) {
  var e, t, n = "";
  if (typeof r == "string" || typeof r == "number")
    n += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var o = r.length;
      for (e = 0; e < o; e++)
        r[e] && (t = tu(r[e])) && (n && (n += " "), n += t);
    } else
      for (t in r)
        r[t] && (n && (n += " "), n += t);
  return n;
}
function qt() {
  for (var r, e, t = 0, n = "", o = arguments.length; t < o; t++)
    (r = arguments[t]) && (e = tu(r)) && (n && (n += " "), n += e);
  return n;
}
const em = {};
function tm(r) {
  const e = {};
  return r.forEach((t) => {
    Object.entries(t).forEach(([n, o]) => {
      e[n] ? e[n] = qt(e[n], o) : e[n] = o;
    });
  }), e;
}
function Wo({ theme: r, classNames: e, props: t, stylesCtx: n }) {
  const i = (Array.isArray(e) ? e : [e]).map(
    (a) => typeof a == "function" ? a(r, t, n) : a || em
  );
  return tm(i);
}
function Ao({ theme: r, styles: e, props: t, stylesCtx: n }) {
  return (Array.isArray(e) ? e : [e]).reduce((i, a) => typeof a == "function" ? { ...i, ...a(r, t, n) } : { ...i, ...a }, {});
}
const ru = Pr(null);
function Nr() {
  const r = sr(ru);
  if (!r)
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return r;
}
function rm() {
  return Nr().cssVariablesResolver;
}
function nm() {
  return Nr().classNamesPrefix;
}
function Ia() {
  return Nr().getStyleNonce;
}
function om() {
  return Nr().withStaticClasses;
}
function im() {
  return Nr().headless;
}
function am() {
  var r;
  return (r = Nr().stylesTransform) == null ? void 0 : r.sx;
}
function sm() {
  var r;
  return (r = Nr().stylesTransform) == null ? void 0 : r.styles;
}
function cm(r) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(r);
}
function lm(r) {
  let e = r.replace("#", "");
  if (e.length === 3) {
    const a = e.split("");
    e = [
      a[0],
      a[0],
      a[1],
      a[1],
      a[2],
      a[2]
    ].join("");
  }
  if (e.length === 8) {
    const a = parseInt(e.slice(6, 8), 16) / 255;
    return {
      r: parseInt(e.slice(0, 2), 16),
      g: parseInt(e.slice(2, 4), 16),
      b: parseInt(e.slice(4, 6), 16),
      a
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
function um(r) {
  const [e, t, n, o] = r.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r: e, g: t, b: n, a: o || 1 };
}
function dm(r) {
  const e = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i, t = r.match(e);
  if (!t)
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10) / 100, i = parseInt(t[3], 10) / 100, a = t[5] ? parseFloat(t[5]) : void 0, s = (1 - Math.abs(2 * i - 1)) * o, c = n / 60, l = s * (1 - Math.abs(c % 2 - 1)), u = i - s / 2;
  let h, d, f;
  return c >= 0 && c < 1 ? (h = s, d = l, f = 0) : c >= 1 && c < 2 ? (h = l, d = s, f = 0) : c >= 2 && c < 3 ? (h = 0, d = s, f = l) : c >= 3 && c < 4 ? (h = 0, d = l, f = s) : c >= 4 && c < 5 ? (h = l, d = 0, f = s) : (h = s, d = 0, f = l), {
    r: Math.round((h + u) * 255),
    g: Math.round((d + u) * 255),
    b: Math.round((f + u) * 255),
    a: a || 1
  };
}
function _a(r) {
  return cm(r) ? lm(r) : r.startsWith("rgb") ? um(r) : r.startsWith("hsl") ? dm(r) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function ro(r, e) {
  if (r.startsWith("var("))
    return `color-mix(in srgb, ${r}, black ${e * 100}%)`;
  const { r: t, g: n, b: o, a: i } = _a(r), a = 1 - e, s = (c) => Math.round(c * a);
  return `rgba(${s(t)}, ${s(n)}, ${s(o)}, ${i})`;
}
function Ln(r, e) {
  return typeof r.primaryShade == "number" ? r.primaryShade : e === "dark" ? r.primaryShade.dark : r.primaryShade.light;
}
function vi(r) {
  return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
}
function hm(r) {
  const e = r.match(/oklch\((.*?)%\s/);
  return e ? parseFloat(e[1]) : null;
}
function fm(r) {
  if (r.startsWith("oklch("))
    return (hm(r) || 0) / 100;
  const { r: e, g: t, b: n } = _a(r), o = e / 255, i = t / 255, a = n / 255, s = vi(o), c = vi(i), l = vi(a);
  return 0.2126 * s + 0.7152 * c + 0.0722 * l;
}
function mn(r, e = 0.179) {
  return r.startsWith("var(") ? !1 : fm(r) > e;
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
  const [n, o] = r.split("."), i = o ? Number(o) : void 0, a = n in e.colors;
  if (a) {
    const s = i !== void 0 ? e.colors[n][i] : e.colors[n][Ln(e, t || "light")];
    return {
      color: n,
      value: s,
      shade: i,
      isThemeColor: a,
      isLight: mn(s, e.luminanceThreshold),
      variable: o ? `--mantine-color-${n}-${i}` : `--mantine-color-${n}-filled`
    };
  }
  return {
    color: r,
    value: r,
    isThemeColor: a,
    isLight: mn(r, e.luminanceThreshold),
    shade: i,
    variable: void 0
  };
}
function nr(r, e) {
  const t = Or({ color: r || e.primaryColor, theme: e });
  return t.variable ? `var(${t.variable})` : r;
}
function Zi(r, e) {
  const t = {
    from: (r == null ? void 0 : r.from) || e.defaultGradient.from,
    to: (r == null ? void 0 : r.to) || e.defaultGradient.to,
    deg: (r == null ? void 0 : r.deg) || e.defaultGradient.deg || 0
  }, n = nr(t.from, e), o = nr(t.to, e);
  return `linear-gradient(${t.deg}deg, ${n} 0%, ${o} 100%)`;
}
function Ft(r, e) {
  if (typeof r != "string" || e > 1 || e < 0)
    return "rgba(0, 0, 0, 1)";
  if (r.startsWith("var(")) {
    const i = (1 - e) * 100;
    return `color-mix(in srgb, ${r}, transparent ${i}%)`;
  }
  if (r.startsWith("oklch"))
    return r.includes("/") ? r.replace(/\/\s*[\d.]+\s*\)/, `/ ${e})`) : r.replace(")", ` / ${e})`);
  const { r: t, g: n, b: o } = _a(r);
  return `rgba(${t}, ${n}, ${o}, ${e})`;
}
const Br = Ft, pm = ({
  color: r,
  theme: e,
  variant: t,
  gradient: n,
  autoContrast: o
}) => {
  const i = Or({ color: r, theme: e }), a = typeof o == "boolean" ? o : e.autoContrast;
  if (t === "filled") {
    const s = a && i.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    return i.isThemeColor ? i.shade === void 0 ? {
      background: `var(--mantine-color-${r}-filled)`,
      hover: `var(--mantine-color-${r}-filled-hover)`,
      color: s,
      border: `${A(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${i.color}-${i.shade})`,
      hover: `var(--mantine-color-${i.color}-${i.shade === 9 ? 8 : i.shade + 1})`,
      color: s,
      border: `${A(1)} solid transparent`
    } : {
      background: r,
      hover: ro(r, 0.1),
      color: s,
      border: `${A(1)} solid transparent`
    };
  }
  if (t === "light") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: `var(--mantine-color-${r}-light)`,
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${A(1)} solid transparent`
        };
      const s = e.colors[i.color][i.shade];
      return {
        background: Ft(s, 0.1),
        hover: Ft(s, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${A(1)} solid transparent`
      };
    }
    return {
      background: Ft(r, 0.1),
      hover: Ft(r, 0.12),
      color: r,
      border: `${A(1)} solid transparent`
    };
  }
  if (t === "outline")
    return i.isThemeColor ? i.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${r}-outline-hover)`,
      color: `var(--mantine-color-${r}-outline)`,
      border: `${A(1)} solid var(--mantine-color-${r}-outline)`
    } : {
      background: "transparent",
      hover: Ft(e.colors[i.color][i.shade], 0.05),
      color: `var(--mantine-color-${i.color}-${i.shade})`,
      border: `${A(1)} solid var(--mantine-color-${i.color}-${i.shade})`
    } : {
      background: "transparent",
      hover: Ft(r, 0.05),
      color: r,
      border: `${A(1)} solid ${r}`
    };
  if (t === "subtle") {
    if (i.isThemeColor) {
      if (i.shade === void 0)
        return {
          background: "transparent",
          hover: `var(--mantine-color-${r}-light-hover)`,
          color: `var(--mantine-color-${r}-light-color)`,
          border: `${A(1)} solid transparent`
        };
      const s = e.colors[i.color][i.shade];
      return {
        background: "transparent",
        hover: Ft(s, 0.12),
        color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
        border: `${A(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: Ft(r, 0.12),
      color: r,
      border: `${A(1)} solid transparent`
    };
  }
  return t === "transparent" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${r}-light-color)`,
    border: `${A(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${i.color}-${Math.min(i.shade, 6)})`,
    border: `${A(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: r,
    border: `${A(1)} solid transparent`
  } : t === "white" ? i.isThemeColor ? i.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: ro(e.white, 0.01),
    color: `var(--mantine-color-${r}-filled)`,
    border: `${A(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: ro(e.white, 0.01),
    color: `var(--mantine-color-${i.color}-${i.shade})`,
    border: `${A(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: ro(e.white, 0.01),
    color: r,
    border: `${A(1)} solid transparent`
  } : t === "gradient" ? {
    background: Zi(n, e),
    hover: Zi(n, e),
    color: "var(--mantine-color-white)",
    border: "none"
  } : t === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${A(1)} solid var(--mantine-color-default-border)`
  } : {};
}, gm = {
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
}, yc = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", ka = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: gm,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: pm,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: yc,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: yc,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: A(34), lineHeight: "1.3" },
      h2: { fontSize: A(26), lineHeight: "1.35" },
      h3: { fontSize: A(22), lineHeight: "1.4" },
      h4: { fontSize: A(18), lineHeight: "1.45" },
      h5: { fontSize: A(16), lineHeight: "1.5" },
      h6: { fontSize: A(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: A(12),
    sm: A(14),
    md: A(16),
    lg: A(18),
    xl: A(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: A(2),
    sm: A(4),
    md: A(8),
    lg: A(16),
    xl: A(32)
  },
  spacing: {
    xs: A(10),
    sm: A(12),
    md: A(16),
    lg: A(20),
    xl: A(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${A(1)} ${A(3)} rgba(0, 0, 0, 0.05), 0 ${A(1)} ${A(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${A(1)} ${A(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${A(10)} ${A(
      15
    )} ${A(-5)}, rgba(0, 0, 0, 0.04) 0 ${A(7)} ${A(7)} ${A(-5)}`,
    md: `0 ${A(1)} ${A(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${A(20)} ${A(
      25
    )} ${A(-5)}, rgba(0, 0, 0, 0.04) 0 ${A(10)} ${A(10)} ${A(-5)}`,
    lg: `0 ${A(1)} ${A(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${A(28)} ${A(
      23
    )} ${A(-7)}, rgba(0, 0, 0, 0.04) 0 ${A(12)} ${A(12)} ${A(-7)}`,
    xl: `0 ${A(1)} ${A(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${A(36)} ${A(
      28
    )} ${A(-7)}, rgba(0, 0, 0, 0.04) 0 ${A(17)} ${A(17)} ${A(-7)}`
  },
  other: {},
  components: {}
};
function vc(r) {
  return r === "auto" || r === "dark" || r === "light";
}
function mm({
  key: r = "mantine-color-scheme-value"
} = {}) {
  let e;
  return {
    get: (t) => {
      if (typeof window > "u")
        return t;
      try {
        const n = window.localStorage.getItem(r);
        return vc(n) ? n : t;
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
        n.storageArea === window.localStorage && n.key === r && vc(n.newValue) && t(n.newValue);
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
const ym = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", bc = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function bi(r) {
  return r < 0 || r > 9 ? !1 : parseInt(r.toString(), 10) === r;
}
function Cc(r) {
  if (!(r.primaryColor in r.colors))
    throw new Error(ym);
  if (typeof r.primaryShade == "object" && (!bi(r.primaryShade.dark) || !bi(r.primaryShade.light)))
    throw new Error(bc);
  if (typeof r.primaryShade == "number" && !bi(r.primaryShade))
    throw new Error(bc);
}
function vm(r, e) {
  var n;
  if (!e)
    return Cc(r), r;
  const t = Sa(r, e);
  return e.fontFamily && !((n = e.headings) != null && n.fontFamily) && (t.headings.fontFamily = e.fontFamily), Cc(t), t;
}
const Aa = Pr(null), bm = () => sr(Aa) || ka;
function Vt() {
  const r = sr(Aa);
  if (!r)
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  return r;
}
function nu({
  theme: r,
  children: e,
  inherit: t = !0
}) {
  const n = bm(), o = ho(
    () => vm(t ? n : ka, r),
    [r, n, t]
  );
  return /* @__PURE__ */ y.jsx(Aa.Provider, { value: o, children: e });
}
nu.displayName = "@mantine/core/MantineThemeProvider";
function Cm() {
  const r = Vt(), e = Ia(), t = Pt(r.breakpoints).reduce((n, o) => {
    const i = r.breakpoints[o].includes("px"), a = Ag(r.breakpoints[o]), s = i ? `${a - 0.1}px` : pc(a - 0.1), c = i ? `${a}px` : pc(a);
    return `${n}@media (max-width: ${s}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${c}) {.mantine-hidden-from-${o} {display: none !important;}}`;
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
function wm(r, e) {
  const t = Ci(r.variables), n = t ? yn(e, t) : "", o = Ci(r.dark), i = Ci(r.light), a = o ? yn(e === ":host" ? `${e}([data-mantine-color-scheme="dark"])` : `${e}[data-mantine-color-scheme="dark"]`, o) : "", s = i ? yn(e === ":host" ? `${e}([data-mantine-color-scheme="light"])` : `${e}[data-mantine-color-scheme="light"]`, i) : "";
  return `${n}${a}${s}`;
}
function Ra({ color: r, theme: e, autoContrast: t }) {
  return (typeof t == "boolean" ? t : e.autoContrast) && Or({ color: r || e.primaryColor, theme: e }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function wc(r, e) {
  return Ra({
    color: r.colors[r.primaryColor][Ln(r, e)],
    theme: r,
    autoContrast: null
  });
}
function no({
  theme: r,
  color: e,
  colorScheme: t,
  name: n = e,
  withColorValues: o = !0
}) {
  if (!r.colors[e])
    return {};
  if (t === "light") {
    const s = Ln(r, "light"), c = {
      [`--mantine-color-${n}-text`]: `var(--mantine-color-${n}-filled)`,
      [`--mantine-color-${n}-filled`]: `var(--mantine-color-${n}-${s})`,
      [`--mantine-color-${n}-filled-hover`]: `var(--mantine-color-${n}-${s === 9 ? 8 : s + 1})`,
      [`--mantine-color-${n}-light`]: Br(r.colors[e][s], 0.1),
      [`--mantine-color-${n}-light-hover`]: Br(r.colors[e][s], 0.12),
      [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${s})`,
      [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${s})`,
      [`--mantine-color-${n}-outline-hover`]: Br(r.colors[e][s], 0.05)
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
  const i = Ln(r, "dark"), a = {
    [`--mantine-color-${n}-text`]: `var(--mantine-color-${n}-4)`,
    [`--mantine-color-${n}-filled`]: `var(--mantine-color-${n}-${i})`,
    [`--mantine-color-${n}-filled-hover`]: `var(--mantine-color-${n}-${i === 9 ? 8 : i + 1})`,
    [`--mantine-color-${n}-light`]: Br(
      r.colors[e][Math.max(0, i - 2)],
      0.15
    ),
    [`--mantine-color-${n}-light-hover`]: Br(
      r.colors[e][Math.max(0, i - 2)],
      0.2
    ),
    [`--mantine-color-${n}-light-color`]: `var(--mantine-color-${n}-${Math.max(i - 5, 0)})`,
    [`--mantine-color-${n}-outline`]: `var(--mantine-color-${n}-${Math.max(i - 4, 0)})`,
    [`--mantine-color-${n}-outline-hover`]: Br(
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
    ...a
  } : a;
}
function Sm(r) {
  return !!r && typeof r == "object" && "mantine-virtual-color" in r;
}
function zr(r, e, t) {
  Pt(e).forEach(
    (n) => Object.assign(r, { [`--mantine-${t}-${n}`]: e[n] })
  );
}
const ou = (r) => {
  const e = Ln(r, "light"), t = r.defaultRadius in r.radius ? r.radius[r.defaultRadius] : A(r.defaultRadius), n = {
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
      "--mantine-primary-color-contrast": wc(r, "light"),
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
      "--mantine-primary-color-contrast": wc(r, "dark"),
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
  zr(n.variables, r.breakpoints, "breakpoint"), zr(n.variables, r.spacing, "spacing"), zr(n.variables, r.fontSizes, "font-size"), zr(n.variables, r.lineHeights, "line-height"), zr(n.variables, r.shadows, "shadow"), zr(n.variables, r.radius, "radius"), r.colors[r.primaryColor].forEach((i, a) => {
    n.variables[`--mantine-primary-color-${a}`] = `var(--mantine-color-${r.primaryColor}-${a})`;
  }), Pt(r.colors).forEach((i) => {
    const a = r.colors[i];
    if (Sm(a)) {
      Object.assign(
        n.light,
        no({
          theme: r,
          name: a.name,
          color: a.light,
          colorScheme: "light",
          withColorValues: !0
        })
      ), Object.assign(
        n.dark,
        no({
          theme: r,
          name: a.name,
          color: a.dark,
          colorScheme: "dark",
          withColorValues: !0
        })
      );
      return;
    }
    a.forEach((s, c) => {
      n.variables[`--mantine-color-${i}-${c}`] = s;
    }), Object.assign(
      n.light,
      no({
        theme: r,
        color: i,
        colorScheme: "light",
        withColorValues: !1
      })
    ), Object.assign(
      n.dark,
      no({
        theme: r,
        color: i,
        colorScheme: "dark",
        withColorValues: !1
      })
    );
  });
  const o = r.headings.sizes;
  return Pt(o).forEach((i) => {
    n.variables[`--mantine-${i}-font-size`] = o[i].fontSize, n.variables[`--mantine-${i}-line-height`] = o[i].lineHeight, n.variables[`--mantine-${i}-font-weight`] = o[i].fontWeight || r.headings.fontWeight;
  }), n;
};
function Em({ theme: r, generator: e }) {
  const t = ou(r), n = e == null ? void 0 : e(r);
  return n ? Sa(t, n) : t;
}
const wi = ou(ka);
function Tm(r) {
  const e = {
    variables: {},
    light: {},
    dark: {}
  };
  return Pt(r.variables).forEach((t) => {
    wi.variables[t] !== r.variables[t] && (e.variables[t] = r.variables[t]);
  }), Pt(r.light).forEach((t) => {
    wi.light[t] !== r.light[t] && (e.light[t] = r.light[t]);
  }), Pt(r.dark).forEach((t) => {
    wi.dark[t] !== r.dark[t] && (e.dark[t] = r.dark[t]);
  }), e;
}
function Im(r) {
  return `
  ${r}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${r}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function iu({
  cssVariablesSelector: r,
  deduplicateCssVariables: e
}) {
  const t = Vt(), n = Ia(), o = rm(), i = Em({ theme: t, generator: o }), a = r === ":root" && e, s = a ? Tm(i) : i, c = wm(s, r);
  return c ? /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": !0,
      nonce: n == null ? void 0 : n(),
      dangerouslySetInnerHTML: {
        __html: `${c}${a ? "" : Im(r)}`
      }
    }
  ) : null;
}
iu.displayName = "@mantine/CssVariables";
function _m() {
  const r = console.error;
  console.error = (...e) => {
    e.length > 1 && typeof e[0] == "string" && e[0].toLowerCase().includes("extra attributes from the server") && typeof e[1] == "string" && e[1].toLowerCase().includes("data-mantine-color-scheme") || r(...e);
  };
}
function $r(r, e) {
  var n;
  const t = r !== "auto" ? r : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  (n = e()) == null || n.setAttribute("data-mantine-color-scheme", t);
}
function km({
  manager: r,
  defaultColorScheme: e,
  getRootElement: t,
  forceColorScheme: n
}) {
  const o = ue(), [i, a] = Z(() => r.get(e)), s = n || i, c = me(
    (u) => {
      n || ($r(u, t), a(u), r.set(u));
    },
    [r.set, s, n]
  ), l = me(() => {
    a(e), $r(e, t), r.clear();
  }, [r.clear, e]);
  return W(() => (r.subscribe(c), r.unsubscribe), [r.subscribe, r.unsubscribe]), qn(() => {
    $r(r.get(e), t);
  }, []), W(() => {
    var h;
    if (n)
      return $r(n, t), () => {
      };
    n === void 0 && $r(i, t), o.current = window.matchMedia("(prefers-color-scheme: dark)");
    const u = (d) => {
      i === "auto" && $r(d.matches ? "dark" : "light", t);
    };
    return (h = o.current) == null || h.addEventListener("change", u), () => {
      var d;
      return (d = o.current) == null ? void 0 : d.removeEventListener("change", u);
    };
  }, [i, n]), { colorScheme: s, setColorScheme: c, clearColorScheme: l };
}
function Am({
  respectReducedMotion: r,
  getRootElement: e
}) {
  qn(() => {
    var t;
    r && ((t = e()) == null || t.setAttribute("data-respect-reduced-motion", "true"));
  }, [r]);
}
_m();
function au({
  theme: r,
  children: e,
  getStyleNonce: t,
  withStaticClasses: n = !0,
  withGlobalClasses: o = !0,
  deduplicateCssVariables: i = !0,
  withCssVariables: a = !0,
  cssVariablesSelector: s = ":root",
  classNamesPrefix: c = "mantine",
  colorSchemeManager: l = mm(),
  defaultColorScheme: u = "light",
  getRootElement: h = () => document.documentElement,
  cssVariablesResolver: d,
  forceColorScheme: f,
  stylesTransform: p
}) {
  const { colorScheme: g, setColorScheme: m, clearColorScheme: C } = km({
    defaultColorScheme: u,
    forceColorScheme: f,
    manager: l,
    getRootElement: h
  });
  return Am({
    respectReducedMotion: (r == null ? void 0 : r.respectReducedMotion) || !1,
    getRootElement: h
  }), /* @__PURE__ */ y.jsx(
    ru.Provider,
    {
      value: {
        colorScheme: g,
        setColorScheme: m,
        clearColorScheme: C,
        getRootElement: h,
        classNamesPrefix: c,
        getStyleNonce: t,
        cssVariablesResolver: d,
        cssVariablesSelector: s,
        withStaticClasses: n,
        stylesTransform: p
      },
      children: /* @__PURE__ */ y.jsxs(nu, { theme: r, children: [
        a && /* @__PURE__ */ y.jsx(
          iu,
          {
            cssVariablesSelector: s,
            deduplicateCssVariables: i
          }
        ),
        o && /* @__PURE__ */ y.jsx(Cm, {}),
        e
      ] })
    }
  );
}
au.displayName = "@mantine/core/MantineProvider";
function su({
  classNames: r,
  styles: e,
  props: t,
  stylesCtx: n
}) {
  const o = Vt();
  return {
    resolvedClassNames: Wo({
      theme: o,
      classNames: r,
      props: t,
      stylesCtx: n || void 0
    }),
    resolvedStyles: Ao({
      theme: o,
      styles: e,
      props: t,
      stylesCtx: n || void 0
    })
  };
}
const Rm = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function Pm({ theme: r, options: e, unstyled: t }) {
  return qt(
    (e == null ? void 0 : e.focusable) && !t && (r.focusClassName || Rm[r.focusRing]),
    (e == null ? void 0 : e.active) && !t && r.activeClassName
  );
}
function Nm({
  selector: r,
  stylesCtx: e,
  options: t,
  props: n,
  theme: o
}) {
  return Wo({
    theme: o,
    classNames: t == null ? void 0 : t.classNames,
    props: (t == null ? void 0 : t.props) || n,
    stylesCtx: e
  })[r];
}
function Sc({
  selector: r,
  stylesCtx: e,
  theme: t,
  classNames: n,
  props: o
}) {
  return Wo({ theme: t, classNames: n, props: o, stylesCtx: e })[r];
}
function Om({ rootSelector: r, selector: e, className: t }) {
  return r === e ? t : void 0;
}
function Mm({ selector: r, classes: e, unstyled: t }) {
  return t ? void 0 : e[r];
}
function xm({
  themeName: r,
  classNamesPrefix: e,
  selector: t,
  withStaticClass: n
}) {
  return n === !1 ? [] : r.map((o) => `${e}-${o}-${t}`);
}
function Lm({
  themeName: r,
  theme: e,
  selector: t,
  props: n,
  stylesCtx: o
}) {
  return r.map(
    (i) => {
      var a, s;
      return (s = Wo({
        theme: e,
        classNames: (a = e.components[i]) == null ? void 0 : a.classNames,
        props: n,
        stylesCtx: o
      })) == null ? void 0 : s[t];
    }
  );
}
function Dm({
  options: r,
  classes: e,
  selector: t,
  unstyled: n
}) {
  return r != null && r.variant && !n ? e[`${t}--${r.variant}`] : void 0;
}
function jm({
  theme: r,
  options: e,
  themeName: t,
  selector: n,
  classNamesPrefix: o,
  classNames: i,
  classes: a,
  unstyled: s,
  className: c,
  rootSelector: l,
  props: u,
  stylesCtx: h,
  withStaticClasses: d,
  headless: f,
  transformedStyles: p
}) {
  return qt(
    Pm({ theme: r, options: e, unstyled: s || f }),
    Lm({ theme: r, themeName: t, selector: n, props: u, stylesCtx: h }),
    Dm({ options: e, classes: a, selector: n, unstyled: s }),
    Sc({ selector: n, stylesCtx: h, theme: r, classNames: i, props: u }),
    Sc({ selector: n, stylesCtx: h, theme: r, classNames: p, props: u }),
    Nm({ selector: n, stylesCtx: h, options: e, props: u, theme: r }),
    Om({ rootSelector: l, selector: n, className: c }),
    Mm({ selector: n, classes: a, unstyled: s || f }),
    d && !f && xm({
      themeName: t,
      classNamesPrefix: o,
      selector: n,
      withStaticClass: e == null ? void 0 : e.withStaticClass
    }),
    e == null ? void 0 : e.className
  );
}
function Fm({
  theme: r,
  themeName: e,
  props: t,
  stylesCtx: n,
  selector: o
}) {
  return e.map(
    (i) => {
      var a;
      return Ao({
        theme: r,
        styles: (a = r.components[i]) == null ? void 0 : a.styles,
        props: t,
        stylesCtx: n
      })[o];
    }
  ).reduce((i, a) => ({ ...i, ...a }), {});
}
function ea({ style: r, theme: e }) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...ea({ style: n, theme: e }) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function Um(r) {
  return r.reduce((e, t) => (t && Object.keys(t).forEach((n) => {
    e[n] = { ...e[n], ...Ea(t[n]) };
  }), e), {});
}
function Hm({
  vars: r,
  varsResolver: e,
  theme: t,
  props: n,
  stylesCtx: o,
  selector: i,
  themeName: a,
  headless: s
}) {
  var c;
  return (c = Um([
    s ? {} : e == null ? void 0 : e(t, n, o),
    ...a.map((l) => {
      var u, h, d;
      return (d = (h = (u = t.components) == null ? void 0 : u[l]) == null ? void 0 : h.vars) == null ? void 0 : d.call(h, t, n, o);
    }),
    r == null ? void 0 : r(t, n, o)
  ])) == null ? void 0 : c[i];
}
function Bm({
  theme: r,
  themeName: e,
  selector: t,
  options: n,
  props: o,
  stylesCtx: i,
  rootSelector: a,
  styles: s,
  style: c,
  vars: l,
  varsResolver: u,
  headless: h,
  withStylesTransform: d
}) {
  return {
    ...!d && Fm({ theme: r, themeName: e, props: o, stylesCtx: i, selector: t }),
    ...!d && Ao({ theme: r, styles: s, props: o, stylesCtx: i })[t],
    ...!d && Ao({ theme: r, styles: n == null ? void 0 : n.styles, props: (n == null ? void 0 : n.props) || o, stylesCtx: i })[t],
    ...Hm({ theme: r, props: o, stylesCtx: i, vars: l, varsResolver: u, selector: t, themeName: e, headless: h }),
    ...a === t ? ea({ style: c, theme: r }) : null,
    ...ea({ style: n == null ? void 0 : n.style, theme: r })
  };
}
function zm({ props: r, stylesCtx: e, themeName: t }) {
  var a;
  const n = Vt(), o = (a = sm()) == null ? void 0 : a();
  return {
    getTransformedStyles: (s) => o ? [
      ...s.map(
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
function pe({
  name: r,
  classes: e,
  props: t,
  stylesCtx: n,
  className: o,
  style: i,
  rootSelector: a = "root",
  unstyled: s,
  classNames: c,
  styles: l,
  vars: u,
  varsResolver: h
}) {
  const d = Vt(), f = nm(), p = om(), g = im(), m = (Array.isArray(r) ? r : [r]).filter((b) => b), { withStylesTransform: C, getTransformedStyles: v } = zm({
    props: t,
    stylesCtx: n,
    themeName: m
  });
  return (b, w) => ({
    className: jm({
      theme: d,
      options: w,
      themeName: m,
      selector: b,
      classNamesPrefix: f,
      classNames: c,
      classes: e,
      unstyled: s,
      className: o,
      rootSelector: a,
      props: t,
      stylesCtx: n,
      withStaticClasses: p,
      headless: g,
      transformedStyles: v([w == null ? void 0 : w.styles, l])
    }),
    style: Bm({
      theme: d,
      themeName: m,
      selector: b,
      options: w,
      props: t,
      stylesCtx: n,
      rootSelector: a,
      styles: l,
      style: i,
      vars: u,
      varsResolver: h,
      headless: g,
      withStylesTransform: C
    })
  });
}
function cu(r, e) {
  return typeof r == "boolean" ? r : e.autoContrast;
}
function G(r, e, t) {
  var a;
  const n = Vt(), o = (a = n.components[r]) == null ? void 0 : a.defaultProps, i = typeof o == "function" ? o(n) : o;
  return { ...e, ...i, ...Ea(t) };
}
function Si(r) {
  return Pt(r).reduce(
    (e, t) => r[t] !== void 0 ? `${e}${_g(t)}:${r[t]};` : e,
    ""
  ).trim();
}
function $m({ selector: r, styles: e, media: t, container: n }) {
  const o = e ? Si(e) : "", i = Array.isArray(t) ? t.map((s) => `@media${s.query}{${r}{${Si(s.styles)}}}`) : [], a = Array.isArray(n) ? n.map(
    (s) => `@container ${s.query}{${r}{${Si(s.styles)}}}`
  ) : [];
  return `${o ? `${r}{${o}}` : ""}${i.join("")}${a.join("")}`.trim();
}
function Km(r) {
  const e = Ia();
  return /* @__PURE__ */ y.jsx(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: e == null ? void 0 : e(),
      dangerouslySetInnerHTML: { __html: $m(r) }
    }
  );
}
function Yo(r) {
  const {
    m: e,
    mx: t,
    my: n,
    mt: o,
    mb: i,
    ml: a,
    mr: s,
    me: c,
    ms: l,
    p: u,
    px: h,
    py: d,
    pt: f,
    pb: p,
    pl: g,
    pr: m,
    pe: C,
    ps: v,
    bd: b,
    bg: w,
    c: E,
    opacity: T,
    ff: k,
    fz: I,
    fw: D,
    lts: U,
    ta: Y,
    lh: X,
    fs: ae,
    tt: $,
    td: q,
    w: M,
    miw: j,
    maw: L,
    h: H,
    mih: te,
    mah: Ee,
    bgsz: Ce,
    bgp: qe,
    bgr: yt,
    bga: Re,
    pos: dr,
    top: Qt,
    left: hr,
    bottom: fr,
    right: pr,
    inset: hn,
    display: fn,
    flex: xt,
    hiddenFrom: Te,
    visibleFrom: Lt,
    lightHidden: Dr,
    darkHidden: ze,
    sx: gr,
    ...jr
  } = r;
  return { styleProps: Ea({
    m: e,
    mx: t,
    my: n,
    mt: o,
    mb: i,
    ml: a,
    mr: s,
    me: c,
    ms: l,
    p: u,
    px: h,
    py: d,
    pt: f,
    pb: p,
    pl: g,
    pr: m,
    pe: C,
    ps: v,
    bd: b,
    bg: w,
    c: E,
    opacity: T,
    ff: k,
    fz: I,
    fw: D,
    lts: U,
    ta: Y,
    lh: X,
    fs: ae,
    tt: $,
    td: q,
    w: M,
    miw: j,
    maw: L,
    h: H,
    mih: te,
    mah: Ee,
    bgsz: Ce,
    bgp: qe,
    bgr: yt,
    bga: Re,
    pos: dr,
    top: Qt,
    left: hr,
    bottom: fr,
    right: pr,
    inset: hn,
    display: fn,
    flex: xt,
    hiddenFrom: Te,
    visibleFrom: Lt,
    lightHidden: Dr,
    darkHidden: ze,
    sx: gr
  }), rest: jr };
}
const qm = {
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
function Pa(r, e) {
  const t = Or({ color: r, theme: e });
  return t.color === "dimmed" ? "var(--mantine-color-dimmed)" : t.color === "bright" ? "var(--mantine-color-bright)" : t.variable ? `var(${t.variable})` : t.color;
}
function Vm(r, e) {
  const t = Or({ color: r, theme: e });
  return t.isThemeColor && t.shade === void 0 ? `var(--mantine-color-${t.color}-text)` : Pa(r, e);
}
function Gm(r, e) {
  if (typeof r == "number")
    return A(r);
  if (typeof r == "string") {
    const [t, n, ...o] = r.split(" ").filter((a) => a.trim() !== "");
    let i = `${A(t)}`;
    return n && (i += ` ${n}`), o.length > 0 && (i += ` ${Pa(o.join(" "), e)}`), i.trim();
  }
  return r;
}
const Ec = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function Wm(r) {
  return typeof r == "string" && r in Ec ? Ec[r] : r;
}
const Ym = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Qm(r, e) {
  return typeof r == "string" && r in e.fontSizes ? `var(--mantine-font-size-${r})` : typeof r == "string" && Ym.includes(r) ? `var(--mantine-${r}-font-size)` : typeof r == "number" || typeof r == "string" ? A(r) : r;
}
function Jm(r) {
  return r;
}
const Xm = ["h1", "h2", "h3", "h4", "h5", "h6"];
function Zm(r, e) {
  return typeof r == "string" && r in e.lineHeights ? `var(--mantine-line-height-${r})` : typeof r == "string" && Xm.includes(r) ? `var(--mantine-${r}-line-height)` : r;
}
function ey(r) {
  return typeof r == "number" ? A(r) : r;
}
function ty(r, e) {
  if (typeof r == "number")
    return A(r);
  if (typeof r == "string") {
    const t = r.replace("-", "");
    if (!(t in e.spacing))
      return A(r);
    const n = `--mantine-spacing-${t}`;
    return r.startsWith("-") ? `calc(var(${n}) * -1)` : `var(${n})`;
  }
  return r;
}
const Ei = {
  color: Pa,
  textColor: Vm,
  fontSize: Qm,
  spacing: ty,
  identity: Jm,
  size: ey,
  lineHeight: Zm,
  fontFamily: Wm,
  border: Gm
};
function Tc(r) {
  return r.replace("(min-width: ", "").replace("em)", "");
}
function ry({
  media: r,
  ...e
}) {
  const n = Object.keys(r).sort((o, i) => Number(Tc(o)) - Number(Tc(i))).map((o) => ({ query: o, styles: r[o] }));
  return { ...e, media: n };
}
function ny(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.keys(r);
  return !(e.length === 1 && e[0] === "base");
}
function oy(r) {
  return typeof r == "object" && r !== null ? "base" in r ? r.base : void 0 : r;
}
function iy(r) {
  return typeof r == "object" && r !== null ? Pt(r).filter((e) => e !== "base") : [];
}
function ay(r, e) {
  return typeof r == "object" && r !== null && e in r ? r[e] : r;
}
function sy({
  styleProps: r,
  data: e,
  theme: t
}) {
  return ry(
    Pt(r).reduce(
      (n, o) => {
        if (o === "hiddenFrom" || o === "visibleFrom" || o === "sx")
          return n;
        const i = e[o], a = Array.isArray(i.property) ? i.property : [i.property], s = oy(r[o]);
        if (!ny(r[o]))
          return a.forEach((l) => {
            n.inlineStyles[l] = Ei[i.type](s, t);
          }), n;
        n.hasResponsiveStyles = !0;
        const c = iy(r[o]);
        return a.forEach((l) => {
          s && (n.styles[l] = Ei[i.type](s, t)), c.forEach((u) => {
            const h = `(min-width: ${t.breakpoints[u]})`;
            n.media[h] = {
              ...n.media[h],
              [l]: Ei[i.type](
                ay(r[o], u),
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
function cy() {
  return `__m__-${vl().replace(/:/g, "")}`;
}
function lu(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...lu(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function uu(r) {
  return r.startsWith("data-") ? r : `data-${r}`;
}
function ly(r) {
  return Object.keys(r).reduce((e, t) => {
    const n = r[t];
    return n === void 0 || n === "" || n === !1 || n === null || (e[uu(t)] = r[t]), e;
  }, {});
}
function du(r) {
  return r ? typeof r == "string" ? { [uu(r)]: !0 } : Array.isArray(r) ? [...r].reduce(
    (e, t) => ({ ...e, ...du(t) }),
    {}
  ) : ly(r) : null;
}
function ta(r, e) {
  return Array.isArray(r) ? [...r].reduce(
    (t, n) => ({ ...t, ...ta(n, e) }),
    {}
  ) : typeof r == "function" ? r(e) : r ?? {};
}
function uy({
  theme: r,
  style: e,
  vars: t,
  styleProps: n
}) {
  const o = ta(e, r), i = ta(t, r);
  return { ...o, ...i, ...n };
}
const hu = ye(
  ({
    component: r,
    style: e,
    __vars: t,
    className: n,
    variant: o,
    mod: i,
    size: a,
    hiddenFrom: s,
    visibleFrom: c,
    lightHidden: l,
    darkHidden: u,
    renderRoot: h,
    __size: d,
    ...f
  }, p) => {
    var I;
    const g = Vt(), m = r || "div", { styleProps: C, rest: v } = Yo(f), b = am(), w = (I = b == null ? void 0 : b()) == null ? void 0 : I(C.sx), E = cy(), T = sy({
      styleProps: C,
      theme: g,
      data: qm
    }), k = {
      ref: p,
      style: uy({
        theme: g,
        style: e,
        vars: t,
        styleProps: T.inlineStyles
      }),
      className: qt(n, w, {
        [E]: T.hasResponsiveStyles,
        "mantine-light-hidden": l,
        "mantine-dark-hidden": u,
        [`mantine-hidden-from-${s}`]: s,
        [`mantine-visible-from-${c}`]: c
      }),
      "data-variant": o,
      "data-size": ql(a) ? void 0 : a || void 0,
      size: d,
      ...du(i),
      ...v
    };
    return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      T.hasResponsiveStyles && /* @__PURE__ */ y.jsx(
        Km,
        {
          selector: `.${E}`,
          styles: T.styles,
          media: T.media
        }
      ),
      typeof h == "function" ? h(k) : /* @__PURE__ */ y.jsx(m, { ...k })
    ] });
  }
);
hu.displayName = "@mantine/core/Box";
const J = hu;
function fu(r) {
  return r;
}
function ce(r) {
  const e = ye(r);
  return e.extend = fu, e.withProps = (t) => {
    const n = ye((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e;
}
function Gt(r) {
  const e = ye(r);
  return e.withProps = (t) => {
    const n = ye((o, i) => /* @__PURE__ */ y.jsx(e, { ...t, ...o, ref: i }));
    return n.extend = e.extend, n.displayName = `WithProps(${e.displayName})`, n;
  }, e.extend = fu, e;
}
const dy = Pr({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Na() {
  return sr(dy);
}
function hy(r) {
  if (!r || typeof r == "string")
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Ti(r) {
  return r != null && r.current ? r.current.scrollHeight : "auto";
}
const vn = typeof window < "u" && window.requestAnimationFrame;
function fy({
  transitionDuration: r,
  transitionTimingFunction: e = "ease",
  onTransitionEnd: t = () => {
  },
  opened: n
}) {
  const o = ue(null), i = 0, a = {
    display: "none",
    height: 0,
    overflow: "hidden"
  }, [s, c] = Z(n ? {} : a), l = (p) => {
    oh(() => c(p));
  }, u = (p) => {
    l((g) => ({ ...g, ...p }));
  };
  function h(p) {
    const g = r || hy(p);
    return {
      transition: `height ${g}ms ${e}, opacity ${g}ms ${e}`
    };
  }
  _r(() => {
    typeof vn == "function" && vn(n ? () => {
      u({ willChange: "height", display: "block", overflow: "hidden" }), vn(() => {
        const p = Ti(o);
        u({ ...h(p), height: p });
      });
    } : () => {
      const p = Ti(o);
      u({ ...h(p), willChange: "height", height: p }), vn(() => u({ height: i, overflow: "hidden" }));
    });
  }, [n]);
  const d = (p) => {
    if (!(p.target !== o.current || p.propertyName !== "height"))
      if (n) {
        const g = Ti(o);
        g === s.height ? l({}) : u({ height: g }), t();
      } else
        s.height === i && (l(a), t());
  };
  function f({ style: p = {}, refKey: g = "ref", ...m } = {}) {
    const C = m[g];
    return {
      "aria-hidden": !n,
      ...m,
      [g]: Zl(o, C),
      onTransitionEnd: d,
      style: { boxSizing: "border-box", ...p, ...s }
    };
  }
  return f;
}
const py = {
  transitionDuration: 200,
  transitionTimingFunction: "ease",
  animateOpacity: !0
}, pu = ce((r, e) => {
  const {
    children: t,
    in: n,
    transitionDuration: o,
    transitionTimingFunction: i,
    style: a,
    onTransitionEnd: s,
    animateOpacity: c,
    ...l
  } = G("Collapse", py, r), u = Vt(), h = eu(), f = (u.respectReducedMotion ? h : !1) ? 0 : o, p = fy({
    opened: n,
    transitionDuration: f,
    transitionTimingFunction: i,
    onTransitionEnd: s
  });
  return f === 0 ? n ? /* @__PURE__ */ y.jsx(J, { ...l, children: t }) : null : /* @__PURE__ */ y.jsx(
    J,
    {
      ...p({
        style: {
          opacity: n || !c ? 1 : 0,
          transition: c ? `opacity ${f}ms ${i}` : "none",
          ...lu(a, u)
        },
        ref: e,
        ...l
      }),
      children: t
    }
  );
});
pu.displayName = "@mantine/core/Collapse";
const [gy, pt] = cn(
  "ScrollArea.Root component was not found in tree"
);
function rn(r, e) {
  const t = Cr(e);
  qn(() => {
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
const my = ye((r, e) => {
  const { style: t, ...n } = r, o = pt(), [i, a] = Z(0), [s, c] = Z(0), l = !!(i && s);
  return rn(o.scrollbarX, () => {
    var h;
    const u = ((h = o.scrollbarX) == null ? void 0 : h.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), rn(o.scrollbarY, () => {
    var h;
    const u = ((h = o.scrollbarY) == null ? void 0 : h.offsetWidth) || 0;
    o.onCornerWidthChange(u), a(u);
  }), l ? /* @__PURE__ */ y.jsx("div", { ...n, ref: e, style: { ...t, width: i, height: s } }) : null;
}), yy = ye((r, e) => {
  const t = pt(), n = !!(t.scrollbarX && t.scrollbarY);
  return t.type !== "scroll" && n ? /* @__PURE__ */ y.jsx(my, { ...r, ref: e }) : null;
}), vy = {
  scrollHideDelay: 1e3,
  type: "hover"
}, gu = ye((r, e) => {
  const t = G("ScrollAreaRoot", vy, r), { type: n, scrollHideDelay: o, scrollbars: i, ...a } = t, [s, c] = Z(null), [l, u] = Z(null), [h, d] = Z(null), [f, p] = Z(null), [g, m] = Z(null), [C, v] = Z(0), [b, w] = Z(0), [E, T] = Z(!1), [k, I] = Z(!1), D = ft(e, (U) => c(U));
  return /* @__PURE__ */ y.jsx(
    gy,
    {
      value: {
        type: n,
        scrollHideDelay: o,
        scrollArea: s,
        viewport: l,
        onViewportChange: u,
        content: h,
        onContentChange: d,
        scrollbarX: f,
        onScrollbarXChange: p,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: T,
        scrollbarY: g,
        onScrollbarYChange: m,
        scrollbarYEnabled: k,
        onScrollbarYEnabledChange: I,
        onCornerWidthChange: v,
        onCornerHeightChange: w
      },
      children: /* @__PURE__ */ y.jsx(
        J,
        {
          ...a,
          ref: D,
          __vars: {
            "--sa-corner-width": i !== "xy" ? "0px" : `${C}px`,
            "--sa-corner-height": i !== "xy" ? "0px" : `${b}px`
          }
        }
      )
    }
  );
});
gu.displayName = "@mantine/core/ScrollAreaRoot";
function mu(r, e) {
  const t = r / e;
  return Number.isNaN(t) ? 0 : t;
}
function Qo(r) {
  const e = mu(r.viewport, r.content), t = r.scrollbar.paddingStart + r.scrollbar.paddingEnd, n = (r.scrollbar.size - t) * e;
  return Math.max(n, 18);
}
function yu(r, e) {
  return (t) => {
    if (r[0] === r[1] || e[0] === e[1])
      return e[0];
    const n = (e[1] - e[0]) / (r[1] - r[0]);
    return e[0] + n * (t - r[0]);
  };
}
function by(r, [e, t]) {
  return Math.min(t, Math.max(e, r));
}
function Ic(r, e, t = "ltr") {
  const n = Qo(e), o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, i = e.scrollbar.size - o, a = e.content - e.viewport, s = i - n, c = t === "ltr" ? [0, a] : [a * -1, 0], l = by(r, c);
  return yu([0, a], [0, s])(l);
}
function Cy(r, e, t, n = "ltr") {
  const o = Qo(t), i = o / 2, a = e || i, s = o - a, c = t.scrollbar.paddingStart + a, l = t.scrollbar.size - t.scrollbar.paddingEnd - s, u = t.content - t.viewport, h = n === "ltr" ? [0, u] : [u * -1, 0];
  return yu([c, l], h)(r);
}
function vu(r, e) {
  return r > 0 && r < e;
}
function Ro(r) {
  return r ? parseInt(r, 10) : 0;
}
function Er(r, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return (n) => {
    r == null || r(n), (t === !1 || !n.defaultPrevented) && (e == null || e(n));
  };
}
const [wy, bu] = cn(
  "ScrollAreaScrollbar was not found in tree"
), Cu = ye((r, e) => {
  const {
    sizes: t,
    hasThumb: n,
    onThumbChange: o,
    onThumbPointerUp: i,
    onThumbPointerDown: a,
    onThumbPositionChange: s,
    onDragScroll: c,
    onWheelScroll: l,
    onResize: u,
    ...h
  } = r, d = pt(), [f, p] = Z(null), g = ft(e, (I) => p(I)), m = ue(null), C = ue(""), { viewport: v } = d, b = t.content - t.viewport, w = Cr(l), E = Cr(s), T = Go(u, 10), k = (I) => {
    if (m.current) {
      const D = I.clientX - m.current.left, U = I.clientY - m.current.top;
      c({ x: D, y: U });
    }
  };
  return W(() => {
    const I = (D) => {
      const U = D.target;
      (f == null ? void 0 : f.contains(U)) && w(D, b);
    };
    return document.addEventListener("wheel", I, { passive: !1 }), () => document.removeEventListener("wheel", I, { passive: !1 });
  }, [v, f, b, w]), W(E, [t, E]), rn(f, T), rn(d.content, T), /* @__PURE__ */ y.jsx(
    wy,
    {
      value: {
        scrollbar: f,
        hasThumb: n,
        onThumbChange: Cr(o),
        onThumbPointerUp: Cr(i),
        onThumbPositionChange: E,
        onThumbPointerDown: Cr(a)
      },
      children: /* @__PURE__ */ y.jsx(
        "div",
        {
          ...h,
          ref: g,
          style: { position: "absolute", ...h.style },
          onPointerDown: Er(r.onPointerDown, (I) => {
            I.preventDefault();
            const D = 0;
            I.button === D && (I.target.setPointerCapture(I.pointerId), m.current = f.getBoundingClientRect(), C.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", document.body.style.pointerEvents = "none", k(I));
          }),
          onPointerMove: Er(r.onPointerMove, k),
          onPointerUp: Er(r.onPointerUp, (I) => {
            I.preventDefault();
            const D = I.target;
            D.hasPointerCapture(I.pointerId) && D.releasePointerCapture(I.pointerId), document.body.style.webkitUserSelect = C.current, document.body.style.pointerEvents = "auto", m.current = null;
          })
        }
      )
    }
  );
}), Sy = ye(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, a = pt(), [s, c] = Z(), l = ue(null), u = ft(e, l, a.onScrollbarXChange);
    return W(() => {
      l.current && c(getComputedStyle(l.current));
    }, [l]), /* @__PURE__ */ y.jsx(
      Cu,
      {
        "data-orientation": "horizontal",
        ...i,
        ref: u,
        sizes: t,
        style: {
          ...o,
          "--sa-thumb-width": `${Qo(t)}px`
        },
        onThumbPointerDown: (h) => r.onThumbPointerDown(h.x),
        onDragScroll: (h) => r.onDragScroll(h.x),
        onWheelScroll: (h, d) => {
          if (a.viewport) {
            const f = a.viewport.scrollLeft + h.deltaX;
            r.onWheelScroll(f), vu(f, d) && h.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && n({
            content: a.viewport.scrollWidth,
            viewport: a.viewport.offsetWidth,
            scrollbar: {
              size: l.current.clientWidth,
              paddingStart: Ro(s.paddingLeft),
              paddingEnd: Ro(s.paddingRight)
            }
          });
        }
      }
    );
  }
), Ey = ye(
  (r, e) => {
    const { sizes: t, onSizesChange: n, style: o, ...i } = r, a = pt(), [s, c] = Z(), l = ue(null), u = ft(e, l, a.onScrollbarYChange);
    return W(() => {
      l.current && c(window.getComputedStyle(l.current));
    }, []), /* @__PURE__ */ y.jsx(
      Cu,
      {
        ...i,
        "data-orientation": "vertical",
        ref: u,
        sizes: t,
        style: {
          "--sa-thumb-height": `${Qo(t)}px`,
          ...o
        },
        onThumbPointerDown: (h) => r.onThumbPointerDown(h.y),
        onDragScroll: (h) => r.onDragScroll(h.y),
        onWheelScroll: (h, d) => {
          if (a.viewport) {
            const f = a.viewport.scrollTop + h.deltaY;
            r.onWheelScroll(f), vu(f, d) && h.preventDefault();
          }
        },
        onResize: () => {
          l.current && a.viewport && s && n({
            content: a.viewport.scrollHeight,
            viewport: a.viewport.offsetHeight,
            scrollbar: {
              size: l.current.clientHeight,
              paddingStart: Ro(s.paddingTop),
              paddingEnd: Ro(s.paddingBottom)
            }
          });
        }
      }
    );
  }
), Oa = ye((r, e) => {
  const { orientation: t = "vertical", ...n } = r, { dir: o } = Na(), i = pt(), a = ue(null), s = ue(0), [c, l] = Z({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = mu(c.viewport, c.content), h = {
    ...n,
    sizes: c,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (f) => {
      a.current = f;
    },
    onThumbPointerUp: () => {
      s.current = 0;
    },
    onThumbPointerDown: (f) => {
      s.current = f;
    }
  }, d = (f, p) => Cy(f, s.current, c, p);
  return t === "horizontal" ? /* @__PURE__ */ y.jsx(
    Sy,
    {
      ...h,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const f = i.viewport.scrollLeft, p = Ic(f, c, o);
          a.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (f) => {
        i.viewport && (i.viewport.scrollLeft = f);
      },
      onDragScroll: (f) => {
        i.viewport && (i.viewport.scrollLeft = d(f, o));
      }
    }
  ) : t === "vertical" ? /* @__PURE__ */ y.jsx(
    Ey,
    {
      ...h,
      ref: e,
      onThumbPositionChange: () => {
        if (i.viewport && a.current) {
          const f = i.viewport.scrollTop, p = Ic(f, c);
          c.scrollbar.size === 0 ? a.current.style.opacity = "0" : a.current.style.opacity = "1", a.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (f) => {
        i.viewport && (i.viewport.scrollTop = f);
      },
      onDragScroll: (f) => {
        i.viewport && (i.viewport.scrollTop = d(f));
      }
    }
  ) : null;
}), wu = ye(
  (r, e) => {
    const t = pt(), { forceMount: n, ...o } = r, [i, a] = Z(!1), s = r.orientation === "horizontal", c = Go(() => {
      if (t.viewport) {
        const l = t.viewport.offsetWidth < t.viewport.scrollWidth, u = t.viewport.offsetHeight < t.viewport.scrollHeight;
        a(s ? l : u);
      }
    }, 10);
    return rn(t.viewport, c), rn(t.content, c), n || i ? /* @__PURE__ */ y.jsx(
      Oa,
      {
        "data-state": i ? "visible" : "hidden",
        ...o,
        ref: e
      }
    ) : null;
  }
), Ty = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), [i, a] = Z(!1);
    return W(() => {
      const { scrollArea: s } = o;
      let c = 0;
      if (s) {
        const l = () => {
          window.clearTimeout(c), a(!0);
        }, u = () => {
          c = window.setTimeout(() => a(!1), o.scrollHideDelay);
        };
        return s.addEventListener("pointerenter", l), s.addEventListener("pointerleave", u), () => {
          window.clearTimeout(c), s.removeEventListener("pointerenter", l), s.removeEventListener("pointerleave", u);
        };
      }
    }, [o.scrollArea, o.scrollHideDelay]), t || i ? /* @__PURE__ */ y.jsx(
      wu,
      {
        "data-state": i ? "visible" : "hidden",
        ...n,
        ref: e
      }
    ) : null;
  }
), Iy = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), i = r.orientation === "horizontal", [a, s] = Z("hidden"), c = Go(() => s("idle"), 100);
    return W(() => {
      if (a === "idle") {
        const l = window.setTimeout(() => s("hidden"), o.scrollHideDelay);
        return () => window.clearTimeout(l);
      }
    }, [a, o.scrollHideDelay]), W(() => {
      const { viewport: l } = o, u = i ? "scrollLeft" : "scrollTop";
      if (l) {
        let h = l[u];
        const d = () => {
          const f = l[u];
          h !== f && (s("scrolling"), c()), h = f;
        };
        return l.addEventListener("scroll", d), () => l.removeEventListener("scroll", d);
      }
    }, [o.viewport, i, c]), t || a !== "hidden" ? /* @__PURE__ */ y.jsx(
      Oa,
      {
        "data-state": a === "hidden" ? "hidden" : "visible",
        ...n,
        ref: e,
        onPointerEnter: Er(r.onPointerEnter, () => s("interacting")),
        onPointerLeave: Er(r.onPointerLeave, () => s("idle"))
      }
    ) : null;
  }
), _c = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = pt(), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: a } = o, s = r.orientation === "horizontal";
    return W(() => (s ? i(!0) : a(!0), () => {
      s ? i(!1) : a(!1);
    }), [s, i, a]), o.type === "hover" ? /* @__PURE__ */ y.jsx(Ty, { ...n, ref: e, forceMount: t }) : o.type === "scroll" ? /* @__PURE__ */ y.jsx(Iy, { ...n, ref: e, forceMount: t }) : o.type === "auto" ? /* @__PURE__ */ y.jsx(wu, { ...n, ref: e, forceMount: t }) : o.type === "always" ? /* @__PURE__ */ y.jsx(Oa, { ...n, ref: e }) : null;
  }
);
function _y(r, e = () => {
}) {
  let t = { left: r.scrollLeft, top: r.scrollTop }, n = 0;
  return function o() {
    const i = { left: r.scrollLeft, top: r.scrollTop }, a = t.left !== i.left, s = t.top !== i.top;
    (a || s) && e(), t = i, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
}
const ky = ye((r, e) => {
  const { style: t, ...n } = r, o = pt(), i = bu(), { onThumbPositionChange: a } = i, s = ft(e, (u) => i.onThumbChange(u)), c = ue(), l = Go(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return W(() => {
    const { viewport: u } = o;
    if (u) {
      const h = () => {
        if (l(), !c.current) {
          const d = _y(u, a);
          c.current = d, a();
        }
      };
      return a(), u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, l, a]), /* @__PURE__ */ y.jsx(
    "div",
    {
      "data-state": i.hasThumb ? "visible" : "hidden",
      ...n,
      ref: s,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...t
      },
      onPointerDownCapture: Er(r.onPointerDownCapture, (u) => {
        const d = u.target.getBoundingClientRect(), f = u.clientX - d.left, p = u.clientY - d.top;
        i.onThumbPointerDown({ x: f, y: p });
      }),
      onPointerUp: Er(r.onPointerUp, i.onThumbPointerUp)
    }
  );
}), kc = ye(
  (r, e) => {
    const { forceMount: t, ...n } = r, o = bu();
    return t || o.hasThumb ? /* @__PURE__ */ y.jsx(ky, { ref: e, ...n }) : null;
  }
), Su = ye(
  ({ children: r, style: e, ...t }, n) => {
    const o = pt(), i = ft(n, o.onViewportChange);
    return /* @__PURE__ */ y.jsx(
      J,
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
Su.displayName = "@mantine/core/ScrollAreaViewport";
var Ma = { root: "m_d57069b5", viewport: "m_c0783ff9", viewportInner: "m_f8f631dd", scrollbar: "m_c44ba933", thumb: "m_d8b5e363", corner: "m_21657268" };
const Eu = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Ay = (r, { scrollbarSize: e }) => ({
  root: {
    "--scrollarea-scrollbar-size": A(e)
  }
}), Vn = ce((r, e) => {
  const t = G("ScrollArea", Eu, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    scrollbarSize: c,
    vars: l,
    type: u,
    scrollHideDelay: h,
    viewportProps: d,
    viewportRef: f,
    onScrollPositionChange: p,
    children: g,
    offsetScrollbars: m,
    scrollbars: C,
    ...v
  } = t, [b, w] = Z(!1), E = pe({
    name: "ScrollArea",
    props: t,
    classes: Ma,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: Ay
  });
  return /* @__PURE__ */ y.jsxs(
    gu,
    {
      type: u === "never" ? "always" : u,
      scrollHideDelay: h,
      ref: e,
      scrollbars: C,
      ...E("root"),
      ...v,
      children: [
        /* @__PURE__ */ y.jsx(
          Su,
          {
            ...d,
            ...E("viewport", { style: d == null ? void 0 : d.style }),
            ref: f,
            "data-offset-scrollbars": m === !0 ? "xy" : m || void 0,
            "data-scrollbars": C || void 0,
            onScroll: (T) => {
              var k;
              (k = d == null ? void 0 : d.onScroll) == null || k.call(d, T), p == null || p({ x: T.currentTarget.scrollLeft, y: T.currentTarget.scrollTop });
            },
            children: g
          }
        ),
        (C === "xy" || C === "x") && /* @__PURE__ */ y.jsx(
          _c,
          {
            ...E("scrollbar"),
            orientation: "horizontal",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(kc, { ...E("thumb") })
          }
        ),
        (C === "xy" || C === "y") && /* @__PURE__ */ y.jsx(
          _c,
          {
            ...E("scrollbar"),
            orientation: "vertical",
            "data-hidden": u === "never" || void 0,
            forceMount: !0,
            onMouseEnter: () => w(!0),
            onMouseLeave: () => w(!1),
            children: /* @__PURE__ */ y.jsx(kc, { ...E("thumb") })
          }
        ),
        /* @__PURE__ */ y.jsx(
          yy,
          {
            ...E("corner"),
            "data-hovered": b || void 0,
            "data-hidden": u === "never" || void 0
          }
        )
      ]
    }
  );
});
Vn.displayName = "@mantine/core/ScrollArea";
const xa = ce((r, e) => {
  const {
    children: t,
    classNames: n,
    styles: o,
    scrollbarSize: i,
    scrollHideDelay: a,
    type: s,
    dir: c,
    offsetScrollbars: l,
    viewportRef: u,
    onScrollPositionChange: h,
    unstyled: d,
    variant: f,
    viewportProps: p,
    scrollbars: g,
    style: m,
    vars: C,
    ...v
  } = G("ScrollAreaAutosize", Eu, r);
  return /* @__PURE__ */ y.jsx(J, { ...v, ref: e, style: [{ display: "flex", overflow: "auto" }, m], children: /* @__PURE__ */ y.jsx(J, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ y.jsx(
    Vn,
    {
      classNames: n,
      styles: o,
      scrollHideDelay: a,
      scrollbarSize: i,
      type: s,
      dir: c,
      offsetScrollbars: l,
      viewportRef: u,
      onScrollPositionChange: h,
      unstyled: d,
      variant: f,
      viewportProps: p,
      vars: C,
      scrollbars: g,
      children: t
    }
  ) }) });
});
Vn.classes = Ma;
xa.displayName = "@mantine/core/ScrollAreaAutosize";
xa.classes = Ma;
Vn.Autosize = xa;
var Tu = { root: "m_87cf2631" };
const Ry = {
  __staticSelector: "UnstyledButton"
}, Mr = Gt(
  (r, e) => {
    const t = G("UnstyledButton", Ry, r), {
      className: n,
      component: o = "button",
      __staticSelector: i,
      unstyled: a,
      classNames: s,
      styles: c,
      style: l,
      ...u
    } = t, h = pe({
      name: i,
      props: t,
      classes: Tu,
      className: n,
      style: l,
      classNames: s,
      styles: c,
      unstyled: a
    });
    return /* @__PURE__ */ y.jsx(
      J,
      {
        ...h("root", { focusable: !0 }),
        component: o,
        ref: e,
        type: o === "button" ? "button" : void 0,
        ...u
      }
    );
  }
);
Mr.classes = Tu;
Mr.displayName = "@mantine/core/UnstyledButton";
var Iu = { root: "m_515a97f8" };
const Py = {}, La = ce((r, e) => {
  const t = G("VisuallyHidden", Py, r), { classNames: n, className: o, style: i, styles: a, unstyled: s, vars: c, ...l } = t, u = pe({
    name: "VisuallyHidden",
    classes: Iu,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s
  });
  return /* @__PURE__ */ y.jsx(J, { component: "span", ref: e, ...u("root"), ...l });
});
La.classes = Iu;
La.displayName = "@mantine/core/VisuallyHidden";
var _u = { root: "m_1b7284a3" };
const Ny = {}, Oy = (r, { radius: e, shadow: t }) => ({
  root: {
    "--paper-radius": e === void 0 ? void 0 : It(e),
    "--paper-shadow": Gl(t)
  }
}), Jo = Gt((r, e) => {
  const t = G("Paper", Ny, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    withBorder: c,
    vars: l,
    radius: u,
    shadow: h,
    variant: d,
    mod: f,
    ...p
  } = t, g = pe({
    name: "Paper",
    props: t,
    classes: _u,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: Oy
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      mod: [{ "data-with-border": c }, f],
      ...g("root"),
      variant: d,
      ...p
    }
  );
});
Jo.classes = _u;
Jo.displayName = "@mantine/core/Paper";
function ln(r) {
  return ku(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function at(r) {
  var e;
  return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Wt(r) {
  var e;
  return (e = (ku(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function ku(r) {
  return r instanceof Node || r instanceof at(r).Node;
}
function Qe(r) {
  return r instanceof Element || r instanceof at(r).Element;
}
function Mt(r) {
  return r instanceof HTMLElement || r instanceof at(r).HTMLElement;
}
function Ac(r) {
  return typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof at(r).ShadowRoot;
}
function Gn(r) {
  const {
    overflow: e,
    overflowX: t,
    overflowY: n,
    display: o
  } = Et(r);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(o);
}
function My(r) {
  return ["table", "td", "th"].includes(ln(r));
}
function Xo(r) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return r.matches(e);
    } catch {
      return !1;
    }
  });
}
function Da(r) {
  const e = ja(), t = Et(r);
  return t.transform !== "none" || t.perspective !== "none" || (t.containerType ? t.containerType !== "normal" : !1) || !e && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !e && (t.filter ? t.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function xy(r) {
  let e = or(r);
  for (; Mt(e) && !nn(e); ) {
    if (Xo(e))
      return null;
    if (Da(e))
      return e;
    e = or(e);
  }
  return null;
}
function ja() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function nn(r) {
  return ["html", "body", "#document"].includes(ln(r));
}
function Et(r) {
  return at(r).getComputedStyle(r);
}
function Zo(r) {
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
    Ac(r) && r.host || // Fallback.
    Wt(r)
  );
  return Ac(e) ? e.host : e;
}
function Au(r) {
  const e = or(r);
  return nn(e) ? r.ownerDocument ? r.ownerDocument.body : r.body : Mt(e) && Gn(e) ? e : Au(e);
}
function Dn(r, e, t) {
  var n;
  e === void 0 && (e = []), t === void 0 && (t = !0);
  const o = Au(r), i = o === ((n = r.ownerDocument) == null ? void 0 : n.body), a = at(o);
  return i ? e.concat(a, a.visualViewport || [], Gn(o) ? o : [], a.frameElement && t ? Dn(a.frameElement) : []) : e.concat(o, Dn(o, [], t));
}
const nt = Math.min, Fe = Math.max, Po = Math.round, oo = Math.floor, ir = (r) => ({
  x: r,
  y: r
}), Ly = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Dy = {
  start: "end",
  end: "start"
};
function ra(r, e, t) {
  return Fe(r, nt(e, t));
}
function zt(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Tt(r) {
  return r.split("-")[0];
}
function un(r) {
  return r.split("-")[1];
}
function Fa(r) {
  return r === "x" ? "y" : "x";
}
function Ua(r) {
  return r === "y" ? "height" : "width";
}
function $t(r) {
  return ["top", "bottom"].includes(Tt(r)) ? "y" : "x";
}
function Ha(r) {
  return Fa($t(r));
}
function jy(r, e, t) {
  t === void 0 && (t = !1);
  const n = un(r), o = Ha(r), i = Ua(o);
  let a = o === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (a = No(a)), [a, No(a)];
}
function Fy(r) {
  const e = No(r);
  return [na(r), e, na(e)];
}
function na(r) {
  return r.replace(/start|end/g, (e) => Dy[e]);
}
function Uy(r, e, t) {
  const n = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (r) {
    case "top":
    case "bottom":
      return t ? e ? o : n : e ? n : o;
    case "left":
    case "right":
      return e ? i : a;
    default:
      return [];
  }
}
function Hy(r, e, t, n) {
  const o = un(r);
  let i = Uy(Tt(r), t === "start", n);
  return o && (i = i.map((a) => a + "-" + o), e && (i = i.concat(i.map(na)))), i;
}
function No(r) {
  return r.replace(/left|right|bottom|top/g, (e) => Ly[e]);
}
function By(r) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...r
  };
}
function Ba(r) {
  return typeof r != "number" ? By(r) : {
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
function Rc(r, e, t) {
  let {
    reference: n,
    floating: o
  } = r;
  const i = $t(e), a = Ha(e), s = Ua(a), c = Tt(e), l = i === "y", u = n.x + n.width / 2 - o.width / 2, h = n.y + n.height / 2 - o.height / 2, d = n[s] / 2 - o[s] / 2;
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
        y: h
      };
      break;
    case "left":
      f = {
        x: n.x - o.width,
        y: h
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
      f[a] -= d * (t && l ? -1 : 1);
      break;
    case "end":
      f[a] += d * (t && l ? -1 : 1);
      break;
  }
  return f;
}
const zy = async (r, e, t) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = t, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(e));
  let l = await a.getElementRects({
    reference: r,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: h
  } = Rc(l, n, c), d = n, f = {}, p = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: m,
      fn: C
    } = s[g], {
      x: v,
      y: b,
      data: w,
      reset: E
    } = await C({
      x: u,
      y: h,
      initialPlacement: n,
      placement: d,
      strategy: o,
      middlewareData: f,
      rects: l,
      platform: a,
      elements: {
        reference: r,
        floating: e
      }
    });
    u = v ?? u, h = b ?? h, f = {
      ...f,
      [m]: {
        ...f[m],
        ...w
      }
    }, E && p <= 50 && (p++, typeof E == "object" && (E.placement && (d = E.placement), E.rects && (l = E.rects === !0 ? await a.getElementRects({
      reference: r,
      floating: e,
      strategy: o
    }) : E.rects), {
      x: u,
      y: h
    } = Rc(l, d, c)), g = -1);
  }
  return {
    x: u,
    y: h,
    placement: d,
    strategy: o,
    middlewareData: f
  };
};
async function za(r, e) {
  var t;
  e === void 0 && (e = {});
  const {
    x: n,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = r, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: d = !1,
    padding: f = 0
  } = zt(e, r), p = Ba(f), m = s[d ? h === "floating" ? "reference" : "floating" : h], C = on(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), v = h === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), w = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = on(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: v,
    offsetParent: b,
    strategy: c
  }) : v);
  return {
    top: (C.top - E.top + p.top) / w.y,
    bottom: (E.bottom - C.bottom + p.bottom) / w.y,
    left: (C.left - E.left + p.left) / w.x,
    right: (E.right - C.right + p.right) / w.x
  };
}
const $y = (r) => ({
  name: "arrow",
  options: r,
  async fn(e) {
    const {
      x: t,
      y: n,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = e, {
      element: l,
      padding: u = 0
    } = zt(r, e) || {};
    if (l == null)
      return {};
    const h = Ba(u), d = {
      x: t,
      y: n
    }, f = Ha(o), p = Ua(f), g = await a.getDimensions(l), m = f === "y", C = m ? "top" : "left", v = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", w = i.reference[p] + i.reference[f] - d[f] - i.floating[p], E = d[f] - i.reference[f], T = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let k = T ? T[b] : 0;
    (!k || !await (a.isElement == null ? void 0 : a.isElement(T))) && (k = s.floating[b] || i.floating[p]);
    const I = w / 2 - E / 2, D = k / 2 - g[p] / 2 - 1, U = nt(h[C], D), Y = nt(h[v], D), X = U, ae = k - g[p] - Y, $ = k / 2 - g[p] / 2 + I, q = ra(X, $, ae), M = !c.arrow && un(o) != null && $ !== q && i.reference[p] / 2 - ($ < X ? U : Y) - g[p] / 2 < 0, j = M ? $ < X ? $ - X : $ - ae : 0;
    return {
      [f]: d[f] + j,
      data: {
        [f]: q,
        centerOffset: $ - q - j,
        ...M && {
          alignmentOffset: j
        }
      },
      reset: M
    };
  }
}), Ky = function(r) {
  return r === void 0 && (r = {}), {
    name: "flip",
    options: r,
    async fn(e) {
      var t, n;
      const {
        placement: o,
        middlewareData: i,
        rects: a,
        initialPlacement: s,
        platform: c,
        elements: l
      } = e, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ...m
      } = zt(r, e);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const C = Tt(o), v = $t(s), b = Tt(s) === s, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = d || (b || !g ? [No(s)] : Fy(s)), T = p !== "none";
      !d && T && E.push(...Hy(s, g, p, w));
      const k = [s, ...E], I = await za(e, m), D = [];
      let U = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && D.push(I[C]), h) {
        const $ = jy(o, a, w);
        D.push(I[$[0]], I[$[1]]);
      }
      if (U = [...U, {
        placement: o,
        overflows: D
      }], !D.every(($) => $ <= 0)) {
        var Y, X;
        const $ = (((Y = i.flip) == null ? void 0 : Y.index) || 0) + 1, q = k[$];
        if (q)
          return {
            data: {
              index: $,
              overflows: U
            },
            reset: {
              placement: q
            }
          };
        let M = (X = U.filter((j) => j.overflows[0] <= 0).sort((j, L) => j.overflows[1] - L.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!M)
          switch (f) {
            case "bestFit": {
              var ae;
              const j = (ae = U.filter((L) => {
                if (T) {
                  const H = $t(L.placement);
                  return H === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  H === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((H) => H > 0).reduce((H, te) => H + te, 0)]).sort((L, H) => L[1] - H[1])[0]) == null ? void 0 : ae[0];
              j && (M = j);
              break;
            }
            case "initialPlacement":
              M = s;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function Ru(r) {
  const e = nt(...r.map((i) => i.left)), t = nt(...r.map((i) => i.top)), n = Fe(...r.map((i) => i.right)), o = Fe(...r.map((i) => i.bottom));
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function qy(r) {
  const e = r.slice().sort((o, i) => o.y - i.y), t = [];
  let n = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !n || i.y - n.y > n.height / 2 ? t.push([i]) : t[t.length - 1].push(i), n = i;
  }
  return t.map((o) => on(Ru(o)));
}
const Vy = function(r) {
  return r === void 0 && (r = {}), {
    name: "inline",
    options: r,
    async fn(e) {
      const {
        placement: t,
        elements: n,
        rects: o,
        platform: i,
        strategy: a
      } = e, {
        padding: s = 2,
        x: c,
        y: l
      } = zt(r, e), u = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(n.reference)) || []), h = qy(u), d = on(Ru(u)), f = Ba(s);
      function p() {
        if (h.length === 2 && h[0].left > h[1].right && c != null && l != null)
          return h.find((m) => c > m.left - f.left && c < m.right + f.right && l > m.top - f.top && l < m.bottom + f.bottom) || d;
        if (h.length >= 2) {
          if ($t(t) === "y") {
            const U = h[0], Y = h[h.length - 1], X = Tt(t) === "top", ae = U.top, $ = Y.bottom, q = X ? U.left : Y.left, M = X ? U.right : Y.right, j = M - q, L = $ - ae;
            return {
              top: ae,
              bottom: $,
              left: q,
              right: M,
              width: j,
              height: L,
              x: q,
              y: ae
            };
          }
          const m = Tt(t) === "left", C = Fe(...h.map((U) => U.right)), v = nt(...h.map((U) => U.left)), b = h.filter((U) => m ? U.left === v : U.right === C), w = b[0].top, E = b[b.length - 1].bottom, T = v, k = C, I = k - T, D = E - w;
          return {
            top: w,
            bottom: E,
            left: T,
            right: k,
            width: I,
            height: D,
            x: T,
            y: w
          };
        }
        return d;
      }
      const g = await i.getElementRects({
        reference: {
          getBoundingClientRect: p
        },
        floating: n.floating,
        strategy: a
      });
      return o.reference.x !== g.reference.x || o.reference.y !== g.reference.y || o.reference.width !== g.reference.width || o.reference.height !== g.reference.height ? {
        reset: {
          rects: g
        }
      } : {};
    }
  };
};
async function Gy(r, e) {
  const {
    placement: t,
    platform: n,
    elements: o
  } = r, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = Tt(t), s = un(t), c = $t(t) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = i && c ? -1 : 1, h = zt(e, r);
  let {
    mainAxis: d,
    crossAxis: f,
    alignmentAxis: p
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...h
  };
  return s && typeof p == "number" && (f = s === "end" ? p * -1 : p), c ? {
    x: f * u,
    y: d * l
  } : {
    x: d * l,
    y: f * u
  };
}
const Wy = function(r) {
  return r === void 0 && (r = 0), {
    name: "offset",
    options: r,
    async fn(e) {
      var t, n;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = e, c = await Gy(e, r);
      return a === ((t = s.offset) == null ? void 0 : t.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, Yy = function(r) {
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
        crossAxis: a = !1,
        limiter: s = {
          fn: (m) => {
            let {
              x: C,
              y: v
            } = m;
            return {
              x: C,
              y: v
            };
          }
        },
        ...c
      } = zt(r, e), l = {
        x: t,
        y: n
      }, u = await za(e, c), h = $t(Tt(o)), d = Fa(h);
      let f = l[d], p = l[h];
      if (i) {
        const m = d === "y" ? "top" : "left", C = d === "y" ? "bottom" : "right", v = f + u[m], b = f - u[C];
        f = ra(v, f, b);
      }
      if (a) {
        const m = h === "y" ? "top" : "left", C = h === "y" ? "bottom" : "right", v = p + u[m], b = p - u[C];
        p = ra(v, p, b);
      }
      const g = s.fn({
        ...e,
        [d]: f,
        [h]: p
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
}, Qy = function(r) {
  return r === void 0 && (r = {}), {
    options: r,
    fn(e) {
      const {
        x: t,
        y: n,
        placement: o,
        rects: i,
        middlewareData: a
      } = e, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = zt(r, e), u = {
        x: t,
        y: n
      }, h = $t(o), d = Fa(h);
      let f = u[d], p = u[h];
      const g = zt(s, e), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const b = d === "y" ? "height" : "width", w = i.reference[d] - i.floating[b] + m.mainAxis, E = i.reference[d] + i.reference[b] - m.mainAxis;
        f < w ? f = w : f > E && (f = E);
      }
      if (l) {
        var C, v;
        const b = d === "y" ? "width" : "height", w = ["top", "left"].includes(Tt(o)), E = i.reference[h] - i.floating[b] + (w && ((C = a.offset) == null ? void 0 : C[h]) || 0) + (w ? 0 : m.crossAxis), T = i.reference[h] + i.reference[b] + (w ? 0 : ((v = a.offset) == null ? void 0 : v[h]) || 0) - (w ? m.crossAxis : 0);
        p < E ? p = E : p > T && (p = T);
      }
      return {
        [d]: f,
        [h]: p
      };
    }
  };
}, Jy = function(r) {
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
        apply: a = () => {
        },
        ...s
      } = zt(r, e), c = await za(e, s), l = Tt(t), u = un(t), h = $t(t) === "y", {
        width: d,
        height: f
      } = n.floating;
      let p, g;
      l === "top" || l === "bottom" ? (p = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, p = u === "end" ? "top" : "bottom");
      const m = f - c.top - c.bottom, C = d - c.left - c.right, v = nt(f - c[p], m), b = nt(d - c[g], C), w = !e.middlewareData.shift;
      let E = v, T = b;
      if (h ? T = u || w ? nt(b, C) : C : E = u || w ? nt(v, m) : m, w && !u) {
        const I = Fe(c.left, 0), D = Fe(c.right, 0), U = Fe(c.top, 0), Y = Fe(c.bottom, 0);
        h ? T = d - 2 * (I !== 0 || D !== 0 ? I + D : Fe(c.left, c.right)) : E = f - 2 * (U !== 0 || Y !== 0 ? U + Y : Fe(c.top, c.bottom));
      }
      await a({
        ...e,
        availableWidth: T,
        availableHeight: E
      });
      const k = await o.getDimensions(i.floating);
      return d !== k.width || f !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pu(r) {
  const e = Et(r);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = Mt(r), i = o ? r.offsetWidth : t, a = o ? r.offsetHeight : n, s = Po(t) !== i || Po(n) !== a;
  return s && (t = i, n = a), {
    width: t,
    height: n,
    $: s
  };
}
function $a(r) {
  return Qe(r) ? r : r.contextElement;
}
function Xr(r) {
  const e = $a(r);
  if (!Mt(e))
    return ir(1);
  const t = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: i
  } = Pu(e);
  let a = (i ? Po(t.width) : t.width) / n, s = (i ? Po(t.height) : t.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const Xy = /* @__PURE__ */ ir(0);
function Nu(r) {
  const e = at(r);
  return !ja() || !e.visualViewport ? Xy : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Zy(r, e, t) {
  return e === void 0 && (e = !1), !t || e && t !== at(r) ? !1 : e;
}
function Ar(r, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const o = r.getBoundingClientRect(), i = $a(r);
  let a = ir(1);
  e && (n ? Qe(n) && (a = Xr(n)) : a = Xr(r));
  const s = Zy(i, t, n) ? Nu(i) : ir(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, u = o.width / a.x, h = o.height / a.y;
  if (i) {
    const d = at(i), f = n && Qe(n) ? at(n) : n;
    let p = d, g = p.frameElement;
    for (; g && n && f !== p; ) {
      const m = Xr(g), C = g.getBoundingClientRect(), v = Et(g), b = C.left + (g.clientLeft + parseFloat(v.paddingLeft)) * m.x, w = C.top + (g.clientTop + parseFloat(v.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, h *= m.y, c += b, l += w, p = at(g), g = p.frameElement;
    }
  }
  return on({
    width: u,
    height: h,
    x: c,
    y: l
  });
}
function ev(r) {
  let {
    elements: e,
    rect: t,
    offsetParent: n,
    strategy: o
  } = r;
  const i = o === "fixed", a = Wt(n), s = e ? Xo(e.floating) : !1;
  if (n === a || s && i)
    return t;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ir(1);
  const u = ir(0), h = Mt(n);
  if ((h || !h && !i) && ((ln(n) !== "body" || Gn(a)) && (c = Zo(n)), Mt(n))) {
    const d = Ar(n);
    l = Xr(n), u.x = d.x + n.clientLeft, u.y = d.y + n.clientTop;
  }
  return {
    width: t.width * l.x,
    height: t.height * l.y,
    x: t.x * l.x - c.scrollLeft * l.x + u.x,
    y: t.y * l.y - c.scrollTop * l.y + u.y
  };
}
function tv(r) {
  return Array.from(r.getClientRects());
}
function Ou(r) {
  return Ar(Wt(r)).left + Zo(r).scrollLeft;
}
function rv(r) {
  const e = Wt(r), t = Zo(r), n = r.ownerDocument.body, o = Fe(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Fe(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -t.scrollLeft + Ou(r);
  const s = -t.scrollTop;
  return Et(n).direction === "rtl" && (a += Fe(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function nv(r, e) {
  const t = at(r), n = Wt(r), o = t.visualViewport;
  let i = n.clientWidth, a = n.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = ja();
    (!l || l && e === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function ov(r, e) {
  const t = Ar(r, !0, e === "fixed"), n = t.top + r.clientTop, o = t.left + r.clientLeft, i = Mt(r) ? Xr(r) : ir(1), a = r.clientWidth * i.x, s = r.clientHeight * i.y, c = o * i.x, l = n * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Pc(r, e, t) {
  let n;
  if (e === "viewport")
    n = nv(r, t);
  else if (e === "document")
    n = rv(Wt(r));
  else if (Qe(e))
    n = ov(e, t);
  else {
    const o = Nu(r);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return on(n);
}
function Mu(r, e) {
  const t = or(r);
  return t === e || !Qe(t) || nn(t) ? !1 : Et(t).position === "fixed" || Mu(t, e);
}
function iv(r, e) {
  const t = e.get(r);
  if (t)
    return t;
  let n = Dn(r, [], !1).filter((s) => Qe(s) && ln(s) !== "body"), o = null;
  const i = Et(r).position === "fixed";
  let a = i ? or(r) : r;
  for (; Qe(a) && !nn(a); ) {
    const s = Et(a), c = Da(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Gn(a) && !c && Mu(r, a)) ? n = n.filter((u) => u !== a) : o = s, a = or(a);
  }
  return e.set(r, n), n;
}
function av(r) {
  let {
    element: e,
    boundary: t,
    rootBoundary: n,
    strategy: o
  } = r;
  const a = [...t === "clippingAncestors" ? Xo(e) ? [] : iv(e, this._c) : [].concat(t), n], s = a[0], c = a.reduce((l, u) => {
    const h = Pc(e, u, o);
    return l.top = Fe(h.top, l.top), l.right = nt(h.right, l.right), l.bottom = nt(h.bottom, l.bottom), l.left = Fe(h.left, l.left), l;
  }, Pc(e, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function sv(r) {
  const {
    width: e,
    height: t
  } = Pu(r);
  return {
    width: e,
    height: t
  };
}
function cv(r, e, t) {
  const n = Mt(e), o = Wt(e), i = t === "fixed", a = Ar(r, !0, i, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ir(0);
  if (n || !n && !i)
    if ((ln(e) !== "body" || Gn(o)) && (s = Zo(e)), n) {
      const h = Ar(e, !0, i, e);
      c.x = h.x + e.clientLeft, c.y = h.y + e.clientTop;
    } else
      o && (c.x = Ou(o));
  const l = a.left + s.scrollLeft - c.x, u = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function Ii(r) {
  return Et(r).position === "static";
}
function Nc(r, e) {
  return !Mt(r) || Et(r).position === "fixed" ? null : e ? e(r) : r.offsetParent;
}
function xu(r, e) {
  const t = at(r);
  if (Xo(r))
    return t;
  if (!Mt(r)) {
    let o = or(r);
    for (; o && !nn(o); ) {
      if (Qe(o) && !Ii(o))
        return o;
      o = or(o);
    }
    return t;
  }
  let n = Nc(r, e);
  for (; n && My(n) && Ii(n); )
    n = Nc(n, e);
  return n && nn(n) && Ii(n) && !Da(n) ? t : n || xy(r) || t;
}
const lv = async function(r) {
  const e = this.getOffsetParent || xu, t = this.getDimensions, n = await t(r.floating);
  return {
    reference: cv(r.reference, await e(r.floating), r.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function uv(r) {
  return Et(r).direction === "rtl";
}
const dv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ev,
  getDocumentElement: Wt,
  getClippingRect: av,
  getOffsetParent: xu,
  getElementRects: lv,
  getClientRects: tv,
  getDimensions: sv,
  getScale: Xr,
  isElement: Qe,
  isRTL: uv
};
function hv(r, e) {
  let t = null, n;
  const o = Wt(r);
  function i() {
    var s;
    clearTimeout(n), (s = t) == null || s.disconnect(), t = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: h,
      height: d
    } = r.getBoundingClientRect();
    if (s || e(), !h || !d)
      return;
    const f = oo(u), p = oo(o.clientWidth - (l + h)), g = oo(o.clientHeight - (u + d)), m = oo(l), v = {
      rootMargin: -f + "px " + -p + "px " + -g + "px " + -m + "px",
      threshold: Fe(0, nt(1, c)) || 1
    };
    let b = !0;
    function w(E) {
      const T = E[0].intersectionRatio;
      if (T !== c) {
        if (!b)
          return a();
        T ? a(!1, T) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      b = !1;
    }
    try {
      t = new IntersectionObserver(w, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(w, v);
    }
    t.observe(r);
  }
  return a(!0), i;
}
function fv(r, e, t, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = $a(r), u = o || i ? [...l ? Dn(l) : [], ...Dn(e)] : [];
  u.forEach((C) => {
    o && C.addEventListener("scroll", t, {
      passive: !0
    }), i && C.addEventListener("resize", t);
  });
  const h = l && s ? hv(l, t) : null;
  let d = -1, f = null;
  a && (f = new ResizeObserver((C) => {
    let [v] = C;
    v && v.target === l && f && (f.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var b;
      (b = f) == null || b.observe(e);
    })), t();
  }), l && !c && f.observe(l), f.observe(e));
  let p, g = c ? Ar(r) : null;
  c && m();
  function m() {
    const C = Ar(r);
    g && (C.x !== g.x || C.y !== g.y || C.width !== g.width || C.height !== g.height) && t(), g = C, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var C;
    u.forEach((v) => {
      o && v.removeEventListener("scroll", t), i && v.removeEventListener("resize", t);
    }), h == null || h(), (C = f) == null || C.disconnect(), f = null, c && cancelAnimationFrame(p);
  };
}
const pv = Wy, gv = Yy, mv = Ky, yv = Jy, Oc = $y, vv = Vy, bv = Qy, Cv = (r, e, t) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: dv,
    ...t
  }, i = {
    ...o.platform,
    _c: n
  };
  return zy(r, e, {
    ...o,
    platform: i
  });
};
var lo = typeof document < "u" ? fa : W;
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
function Lu(r) {
  return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mc(r, e) {
  const t = Lu(r);
  return Math.round(e * t) / t;
}
function xc(r) {
  const e = se.useRef(r);
  return lo(() => {
    e.current = r;
  }), e;
}
function wv(r) {
  r === void 0 && (r = {});
  const {
    placement: e = "bottom",
    strategy: t = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = r, [u, h] = se.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: e,
    middlewareData: {},
    isPositioned: !1
  }), [d, f] = se.useState(n);
  Oo(d, n) || f(n);
  const [p, g] = se.useState(null), [m, C] = se.useState(null), v = se.useCallback((j) => {
    j !== T.current && (T.current = j, g(j));
  }, []), b = se.useCallback((j) => {
    j !== k.current && (k.current = j, C(j));
  }, []), w = i || p, E = a || m, T = se.useRef(null), k = se.useRef(null), I = se.useRef(u), D = c != null, U = xc(c), Y = xc(o), X = se.useCallback(() => {
    if (!T.current || !k.current)
      return;
    const j = {
      placement: e,
      strategy: t,
      middleware: d
    };
    Y.current && (j.platform = Y.current), Cv(T.current, k.current, j).then((L) => {
      const H = {
        ...L,
        isPositioned: !0
      };
      ae.current && !Oo(I.current, H) && (I.current = H, nh.flushSync(() => {
        h(H);
      }));
    });
  }, [d, e, t, Y]);
  lo(() => {
    l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, h((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [l]);
  const ae = se.useRef(!1);
  lo(() => (ae.current = !0, () => {
    ae.current = !1;
  }), []), lo(() => {
    if (w && (T.current = w), E && (k.current = E), w && E) {
      if (U.current)
        return U.current(w, E, X);
      X();
    }
  }, [w, E, X, U, D]);
  const $ = se.useMemo(() => ({
    reference: T,
    floating: k,
    setReference: v,
    setFloating: b
  }), [v, b]), q = se.useMemo(() => ({
    reference: w,
    floating: E
  }), [w, E]), M = se.useMemo(() => {
    const j = {
      position: t,
      left: 0,
      top: 0
    };
    if (!q.floating)
      return j;
    const L = Mc(q.floating, u.x), H = Mc(q.floating, u.y);
    return s ? {
      ...j,
      transform: "translate(" + L + "px, " + H + "px)",
      ...Lu(q.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: L,
      top: H
    };
  }, [t, s, q.floating, u.x, u.y]);
  return se.useMemo(() => ({
    ...u,
    update: X,
    refs: $,
    elements: q,
    floatingStyles: M
  }), [u, X, $, q, M]);
}
const Sv = (r) => {
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
      return n && e(n) ? n.current != null ? Oc({
        element: n.current,
        padding: o
      }).fn(t) : {} : n ? Oc({
        element: n,
        padding: o
      }).fn(t) : {};
    }
  };
}, Ev = (r, e) => ({
  ...pv(r),
  options: [r, e]
}), Tv = (r, e) => ({
  ...gv(r),
  options: [r, e]
}), Lc = (r, e) => ({
  ...bv(r),
  options: [r, e]
}), Dc = (r, e) => ({
  ...mv(r),
  options: [r, e]
}), Iv = (r, e) => ({
  ...yv(r),
  options: [r, e]
}), jc = (r, e) => ({
  ...vv(r),
  options: [r, e]
}), _v = (r, e) => ({
  ...Sv(r),
  options: [r, e]
}), Du = {
  ...se
}, kv = Du.useInsertionEffect, Av = kv || ((r) => r());
function Rv(r) {
  const e = se.useRef(() => {
  });
  return Av(() => {
    e.current = r;
  }), se.useCallback(function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return e.current == null ? void 0 : e.current(...n);
  }, []);
}
var oa = typeof document < "u" ? fa : W;
let Fc = !1, Pv = 0;
const Uc = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Pv++
);
function Nv() {
  const [r, e] = se.useState(() => Fc ? Uc() : void 0);
  return oa(() => {
    r == null && e(Uc());
  }, []), se.useEffect(() => {
    Fc = !0;
  }, []), r;
}
const Ov = Du.useId, Mv = Ov || Nv;
function xv() {
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
const Lv = /* @__PURE__ */ se.createContext(null), Dv = /* @__PURE__ */ se.createContext(null), jv = () => {
  var r;
  return ((r = se.useContext(Lv)) == null ? void 0 : r.id) || null;
}, Fv = () => se.useContext(Dv);
function Uv(r) {
  const {
    open: e = !1,
    onOpenChange: t,
    elements: n
  } = r, o = Mv(), i = se.useRef({}), [a] = se.useState(() => xv()), s = jv() != null, [c, l] = se.useState(n.reference), u = Rv((f, p, g) => {
    i.current.openEvent = f ? p : void 0, a.emit("openchange", {
      open: f,
      event: p,
      reason: g,
      nested: s
    }), t == null || t(f, p, g);
  }), h = se.useMemo(() => ({
    setPositionReference: l
  }), []), d = se.useMemo(() => ({
    reference: c || n.reference || null,
    floating: n.floating || null,
    domReference: n.reference
  }), [c, n.reference, n.floating]);
  return se.useMemo(() => ({
    dataRef: i,
    open: e,
    onOpenChange: u,
    elements: d,
    events: a,
    floatingId: o,
    refs: h
  }), [e, u, d, a, o, h]);
}
function Hv(r) {
  r === void 0 && (r = {});
  const {
    nodeId: e
  } = r, t = Uv({
    ...r,
    elements: {
      reference: null,
      floating: null,
      ...r.elements
    }
  }), n = r.rootContext || t, o = n.elements, [i, a] = se.useState(null), [s, c] = se.useState(null), u = (o == null ? void 0 : o.reference) || i, h = se.useRef(null), d = Fv();
  oa(() => {
    u && (h.current = u);
  }, [u]);
  const f = wv({
    ...r,
    elements: {
      ...o,
      ...s && {
        reference: s
      }
    }
  }), p = se.useCallback((b) => {
    const w = Qe(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      contextElement: b
    } : b;
    c(w), f.refs.setReference(w);
  }, [f.refs]), g = se.useCallback((b) => {
    (Qe(b) || b === null) && (h.current = b, a(b)), (Qe(f.refs.reference.current) || f.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !Qe(b)) && f.refs.setReference(b);
  }, [f.refs]), m = se.useMemo(() => ({
    ...f.refs,
    setReference: g,
    setPositionReference: p,
    domReference: h
  }), [f.refs, g, p]), C = se.useMemo(() => ({
    ...f.elements,
    domReference: u
  }), [f.elements, u]), v = se.useMemo(() => ({
    ...f,
    ...n,
    refs: m,
    elements: C,
    nodeId: e
  }), [f, m, C, e, n]);
  return oa(() => {
    n.dataRef.current.floatingContext = v;
    const b = d == null ? void 0 : d.nodesRef.current.find((w) => w.id === e);
    b && (b.context = v);
  }), se.useMemo(() => ({
    ...f,
    context: v,
    refs: m,
    elements: C
  }), [f, m, C, v]);
}
function Bv(r, e) {
  if (r === "rtl" && (e.includes("right") || e.includes("left"))) {
    const [t, n] = e.split("-"), o = t === "right" ? "left" : "right";
    return n === void 0 ? o : `${o}-${n}`;
  }
  return e;
}
function Hc(r, e, t, n) {
  return r === "center" || n === "center" ? { top: e } : r === "end" ? { bottom: t } : r === "start" ? { top: t } : {};
}
function Bc(r, e, t, n, o) {
  return r === "center" || n === "center" ? { left: e } : r === "end" ? { [o === "ltr" ? "right" : "left"]: t } : r === "start" ? { [o === "ltr" ? "left" : "right"]: t } : {};
}
const zv = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function $v({
  position: r,
  arrowSize: e,
  arrowOffset: t,
  arrowRadius: n,
  arrowPosition: o,
  arrowX: i,
  arrowY: a,
  dir: s
}) {
  const [c, l = "center"] = r.split("-"), u = {
    width: e,
    height: e,
    transform: "rotate(45deg)",
    position: "absolute",
    [zv[c]]: n
  }, h = -e / 2;
  return c === "left" ? {
    ...u,
    ...Hc(l, a, t, o),
    right: h,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent"
  } : c === "right" ? {
    ...u,
    ...Hc(l, a, t, o),
    left: h,
    borderRightColor: "transparent",
    borderTopColor: "transparent"
  } : c === "top" ? {
    ...u,
    ...Bc(l, i, t, o, s),
    bottom: h,
    borderTopColor: "transparent",
    borderLeftColor: "transparent"
  } : c === "bottom" ? {
    ...u,
    ...Bc(l, i, t, o, s),
    top: h,
    borderBottomColor: "transparent",
    borderRightColor: "transparent"
  } : {};
}
const ju = ye(
  ({
    position: r,
    arrowSize: e,
    arrowOffset: t,
    arrowRadius: n,
    arrowPosition: o,
    visible: i,
    arrowX: a,
    arrowY: s,
    style: c,
    ...l
  }, u) => {
    const { dir: h } = Na();
    return i ? /* @__PURE__ */ y.jsx(
      "div",
      {
        ...l,
        ref: u,
        style: {
          ...c,
          ...$v({
            position: r,
            arrowSize: e,
            arrowOffset: t,
            arrowRadius: n,
            arrowPosition: o,
            dir: h,
            arrowX: a,
            arrowY: s
          })
        }
      }
    ) : null;
  }
);
ju.displayName = "@mantine/core/FloatingArrow";
const [Kv, Fu] = cn(
  "Popover component was not found in the tree"
);
function Ka({
  children: r,
  active: e = !0,
  refProp: t = "ref"
}) {
  const n = Qg(e), o = ft(n, r == null ? void 0 : r.ref);
  return Kn(r) ? $o(r, { [t]: o }) : r;
}
function Uu(r) {
  return /* @__PURE__ */ y.jsx(La, { tabIndex: -1, "data-autofocus": !0, ...r });
}
Ka.displayName = "@mantine/core/FocusTrap";
Uu.displayName = "@mantine/core/FocusTrapInitialFocus";
Ka.InitialFocus = Uu;
function qv(r) {
  const e = document.createElement("div");
  return e.setAttribute("data-portal", "true"), typeof r.className == "string" && e.classList.add(...r.className.split(" ").filter(Boolean)), typeof r.style == "object" && Object.assign(e.style, r.style), typeof r.id == "string" && e.setAttribute("id", r.id), e;
}
const Vv = {}, Hu = ye((r, e) => {
  const { children: t, target: n, ...o } = G("Portal", Vv, r), [i, a] = Z(!1), s = ue(null);
  return qn(() => (a(!0), s.current = n ? typeof n == "string" ? document.querySelector(n) : n : qv(o), Xl(e, s.current), !n && s.current && document.body.appendChild(s.current), () => {
    !n && s.current && document.body.removeChild(s.current);
  }), [n]), !i || !s.current ? null : ih(/* @__PURE__ */ y.jsx(y.Fragment, { children: t }), s.current);
});
Hu.displayName = "@mantine/core/Portal";
function Bu({ withinPortal: r = !0, children: e, ...t }) {
  return r ? /* @__PURE__ */ y.jsx(Hu, { ...t, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
Bu.displayName = "@mantine/core/OptionalPortal";
const bn = (r) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${A(r === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
}), io = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${A(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${A(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${A(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${A(-30)}` },
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
    out: { opacity: 0, transform: `translateY(${A(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${A(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${A(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${A(20)}) rotate(5deg)` },
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
    ...bn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...bn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...bn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...bn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...bn("top"),
    common: { transformOrigin: "top right" }
  }
}, zc = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function Gv({
  transition: r,
  state: e,
  duration: t,
  timingFunction: n
}) {
  const o = {
    transitionDuration: `${t}ms`,
    transitionTimingFunction: n
  };
  return typeof r == "string" ? r in io ? {
    transitionProperty: io[r].transitionProperty,
    ...o,
    ...io[r].common,
    ...io[r][zc[e]]
  } : {} : {
    transitionProperty: r.transitionProperty,
    ...o,
    ...r.common,
    ...r[zc[e]]
  };
}
function Wv({
  duration: r,
  exitDuration: e,
  timingFunction: t,
  mounted: n,
  onEnter: o,
  onExit: i,
  onEntered: a,
  onExited: s,
  enterDelay: c,
  exitDelay: l
}) {
  const u = Vt(), h = eu(), d = u.respectReducedMotion ? h : !1, [f, p] = Z(d ? 0 : r), [g, m] = Z(n ? "entered" : "exited"), C = ue(-1), v = ue(-1), b = ue(-1), w = (T) => {
    const k = T ? o : i, I = T ? a : s;
    window.clearTimeout(C.current);
    const D = d ? 0 : T ? r : e;
    p(D), D === 0 ? (typeof k == "function" && k(), typeof I == "function" && I(), m(T ? "entered" : "exited")) : b.current = requestAnimationFrame(() => {
      bl.flushSync(() => {
        m(T ? "pre-entering" : "pre-exiting");
      }), b.current = requestAnimationFrame(() => {
        typeof k == "function" && k(), m(T ? "entering" : "exiting"), C.current = window.setTimeout(() => {
          typeof I == "function" && I(), m(T ? "entered" : "exited");
        }, D);
      });
    });
  }, E = (T) => {
    if (window.clearTimeout(v.current), typeof (T ? c : l) != "number") {
      w(T);
      return;
    }
    v.current = window.setTimeout(
      () => {
        w(T);
      },
      T ? c : l
    );
  };
  return _r(() => {
    E(n);
  }, [n]), W(
    () => () => {
      window.clearTimeout(C.current), cancelAnimationFrame(b.current);
    },
    []
  ), {
    transitionDuration: f,
    transitionStatus: g,
    transitionTimingFunction: t || "ease"
  };
}
function ei({
  keepMounted: r,
  transition: e = "fade",
  duration: t = 250,
  exitDuration: n = t,
  mounted: o,
  children: i,
  timingFunction: a = "ease",
  onExit: s,
  onEntered: c,
  onEnter: l,
  onExited: u,
  enterDelay: h,
  exitDelay: d
}) {
  const { transitionDuration: f, transitionStatus: p, transitionTimingFunction: g } = Wv({
    mounted: o,
    exitDuration: n,
    duration: t,
    timingFunction: a,
    onExit: s,
    onEntered: c,
    onEnter: l,
    onExited: u,
    enterDelay: h,
    exitDelay: d
  });
  return f === 0 ? o ? /* @__PURE__ */ y.jsx(y.Fragment, { children: i({}) }) : r ? i({ display: "none" }) : null : p === "exited" ? r ? i({ display: "none" }) : null : /* @__PURE__ */ y.jsx(y.Fragment, { children: i(
    Gv({
      transition: e,
      duration: f,
      state: p,
      timingFunction: g
    })
  ) });
}
ei.displayName = "@mantine/core/Transition";
var zu = { dropdown: "m_38a85659", arrow: "m_a31dc6c1" };
const Yv = {}, qa = ce((r, e) => {
  var m, C, v, b;
  const t = G("PopoverDropdown", Yv, r), {
    className: n,
    style: o,
    vars: i,
    children: a,
    onKeyDownCapture: s,
    variant: c,
    classNames: l,
    styles: u,
    ...h
  } = t, d = Fu(), f = $g({
    opened: d.opened,
    shouldReturnFocus: d.returnFocus
  }), p = d.withRoles ? {
    "aria-labelledby": d.getTargetId(),
    id: d.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, g = ft(e, d.floating);
  return d.disabled ? null : /* @__PURE__ */ y.jsx(Bu, { ...d.portalProps, withinPortal: d.withinPortal, children: /* @__PURE__ */ y.jsx(
    ei,
    {
      mounted: d.opened,
      ...d.transitionProps,
      transition: ((m = d.transitionProps) == null ? void 0 : m.transition) || "fade",
      duration: ((C = d.transitionProps) == null ? void 0 : C.duration) ?? 150,
      keepMounted: d.keepMounted,
      exitDuration: typeof ((v = d.transitionProps) == null ? void 0 : v.exitDuration) == "number" ? d.transitionProps.exitDuration : (b = d.transitionProps) == null ? void 0 : b.duration,
      children: (w) => /* @__PURE__ */ y.jsx(Ka, { active: d.trapFocus, children: /* @__PURE__ */ y.jsxs(
        J,
        {
          ...p,
          ...h,
          variant: c,
          ref: g,
          onKeyDownCapture: Dg(d.onClose, {
            active: d.closeOnEscape,
            onTrigger: f,
            onKeyDown: s
          }),
          "data-position": d.placement,
          "data-fixed": d.floatingStrategy === "fixed" || void 0,
          ...d.getStyles("dropdown", {
            className: n,
            props: t,
            classNames: l,
            styles: u,
            style: [
              {
                ...w,
                zIndex: d.zIndex,
                top: d.y ?? 0,
                left: d.x ?? 0,
                width: d.width === "target" ? void 0 : A(d.width)
              },
              o
            ]
          }),
          children: [
            a,
            /* @__PURE__ */ y.jsx(
              ju,
              {
                ref: d.arrowRef,
                arrowX: d.arrowX,
                arrowY: d.arrowY,
                visible: d.withArrow,
                position: d.placement,
                arrowSize: d.arrowSize,
                arrowRadius: d.arrowRadius,
                arrowOffset: d.arrowOffset,
                arrowPosition: d.arrowPosition,
                ...d.getStyles("arrow", {
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
qa.classes = zu;
qa.displayName = "@mantine/core/PopoverDropdown";
const Qv = {
  refProp: "ref",
  popupType: "dialog"
}, $u = ce((r, e) => {
  const { children: t, refProp: n, popupType: o, ...i } = G(
    "PopoverTarget",
    Qv,
    r
  );
  if (!Kn(t))
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const a = i, s = Fu(), c = ft(s.reference, t.ref, e), l = s.withRoles ? {
    "aria-haspopup": o,
    "aria-expanded": s.opened,
    "aria-controls": s.getDropdownId(),
    id: s.getTargetId()
  } : {};
  return $o(t, {
    ...a,
    ...l,
    ...s.targetProps,
    className: qt(s.targetProps.className, a.className, t.props.className),
    [n]: c,
    ...s.controlled ? null : { onClick: s.onToggle }
  });
});
$u.displayName = "@mantine/core/PopoverTarget";
function Jv({
  opened: r,
  floating: e,
  position: t,
  positionDependencies: n
}) {
  const [o, i] = Z(0);
  W(() => {
    if (e.refs.reference.current && e.refs.floating.current)
      return fv(
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
  ]), _r(() => {
    e.update();
  }, n), _r(() => {
    i((a) => a + 1);
  }, [r]);
}
function Xv(r) {
  if (r === void 0)
    return { shift: !0, flip: !0 };
  const e = { ...r };
  return r.shift === void 0 && (e.shift = !0), r.flip === void 0 && (e.flip = !0), e;
}
function Zv(r, e) {
  const t = Xv(r.middlewares), n = [Ev(r.offset)];
  return t.shift && n.push(
    Tv(
      typeof t.shift == "boolean" ? { limiter: Lc(), padding: 5 } : { limiter: Lc(), padding: 5, ...t.shift }
    )
  ), t.flip && n.push(
    typeof t.flip == "boolean" ? Dc() : Dc(t.flip)
  ), t.inline && n.push(
    typeof t.inline == "boolean" ? jc() : jc(t.inline)
  ), n.push(_v({ element: r.arrowRef, padding: r.arrowOffset })), (t.size || r.width === "target") && n.push(
    Iv({
      ...typeof t.size == "boolean" ? {} : t.size,
      apply({ rects: o, availableWidth: i, availableHeight: a }) {
        var l;
        const c = ((l = e().refs.floating.current) == null ? void 0 : l.style) ?? {};
        t.size && Object.assign(c, {
          maxWidth: `${i}px`,
          maxHeight: `${a}px`
        }), r.width === "target" && Object.assign(c, {
          width: `${o.reference.width}px`
        });
      }
    })
  ), n;
}
function eb(r) {
  const [e, t] = kr({
    value: r.opened,
    defaultValue: r.defaultOpened,
    finalValue: !1,
    onChange: r.onChange
  }), n = () => {
    var a;
    e && ((a = r.onClose) == null || a.call(r), t(!1));
  }, o = () => {
    var a, s;
    e ? ((a = r.onClose) == null || a.call(r), t(!1)) : ((s = r.onOpen) == null || s.call(r), t(!0));
  }, i = Hv({
    strategy: r.strategy,
    placement: r.position,
    middleware: Zv(r, () => i)
  });
  return Jv({
    opened: r.opened,
    position: r.position,
    positionDependencies: r.positionDependencies || [],
    floating: i
  }), _r(() => {
    var a;
    (a = r.onPositionChange) == null || a.call(r, i.placement);
  }, [i.placement]), _r(() => {
    var a, s;
    r.opened ? (s = r.onOpen) == null || s.call(r) : (a = r.onClose) == null || a.call(r);
  }, [r.opened]), {
    floating: i,
    controlled: typeof r.opened == "boolean",
    opened: e,
    onClose: n,
    onToggle: o
  };
}
const tb = {
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
  zIndex: xg("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, rb = (r, { radius: e, shadow: t }) => ({
  dropdown: {
    "--popover-radius": e === void 0 ? void 0 : It(e),
    "--popover-shadow": Gl(t)
  }
});
function lr(r) {
  var ze, gr, jr, $e, Dt, Fr;
  const e = G("Popover", tb, r), {
    children: t,
    position: n,
    offset: o,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    transitionProps: c,
    width: l,
    middlewares: u,
    withArrow: h,
    arrowSize: d,
    arrowOffset: f,
    arrowRadius: p,
    arrowPosition: g,
    unstyled: m,
    classNames: C,
    styles: v,
    closeOnClickOutside: b,
    withinPortal: w,
    portalProps: E,
    closeOnEscape: T,
    clickOutsideEvents: k,
    trapFocus: I,
    onClose: D,
    onOpen: U,
    onChange: Y,
    zIndex: X,
    radius: ae,
    shadow: $,
    id: q,
    defaultOpened: M,
    __staticSelector: j,
    withRoles: L,
    disabled: H,
    returnFocus: te,
    variant: Ee,
    keepMounted: Ce,
    vars: qe,
    floatingStrategy: yt,
    ...Re
  } = e, dr = pe({
    name: j,
    props: e,
    classes: zu,
    classNames: C,
    styles: v,
    unstyled: m,
    rootSelector: "dropdown",
    vars: qe,
    varsResolver: rb
  }), Qt = ue(null), [hr, fr] = Z(null), [pr, hn] = Z(null), { dir: fn } = Na(), xt = cr(q), Te = eb({
    middlewares: u,
    width: l,
    position: Bv(fn, n),
    offset: typeof o == "number" ? o + (h ? d / 2 : 0) : o,
    arrowRef: Qt,
    arrowOffset: f,
    onPositionChange: i,
    positionDependencies: a,
    opened: s,
    defaultOpened: M,
    onChange: Y,
    onOpen: U,
    onClose: D,
    strategy: yt
  });
  Fg(() => b && Te.onClose(), k, [
    hr,
    pr
  ]);
  const Lt = me(
    (lt) => {
      fr(lt), Te.floating.refs.setReference(lt);
    },
    [Te.floating.refs.setReference]
  ), Dr = me(
    (lt) => {
      hn(lt), Te.floating.refs.setFloating(lt);
    },
    [Te.floating.refs.setFloating]
  );
  return /* @__PURE__ */ y.jsx(
    Kv,
    {
      value: {
        returnFocus: te,
        disabled: H,
        controlled: Te.controlled,
        reference: Lt,
        floating: Dr,
        x: Te.floating.x,
        y: Te.floating.y,
        arrowX: (jr = (gr = (ze = Te.floating) == null ? void 0 : ze.middlewareData) == null ? void 0 : gr.arrow) == null ? void 0 : jr.x,
        arrowY: (Fr = (Dt = ($e = Te.floating) == null ? void 0 : $e.middlewareData) == null ? void 0 : Dt.arrow) == null ? void 0 : Fr.y,
        opened: Te.opened,
        arrowRef: Qt,
        transitionProps: c,
        width: l,
        withArrow: h,
        arrowSize: d,
        arrowOffset: f,
        arrowRadius: p,
        arrowPosition: g,
        placement: Te.floating.placement,
        trapFocus: I,
        withinPortal: w,
        portalProps: E,
        zIndex: X,
        radius: ae,
        shadow: $,
        closeOnEscape: T,
        onClose: Te.onClose,
        onToggle: Te.onToggle,
        getTargetId: () => `${xt}-target`,
        getDropdownId: () => `${xt}-dropdown`,
        withRoles: L,
        targetProps: Re,
        __staticSelector: j,
        classNames: C,
        styles: v,
        unstyled: m,
        variant: Ee,
        keepMounted: Ce,
        getStyles: dr,
        floatingStrategy: yt
      },
      children: t
    }
  );
}
lr.Target = $u;
lr.Dropdown = qa;
lr.displayName = "@mantine/core/Popover";
lr.extend = (r) => r;
var St = { root: "m_5ae2e3c", barsLoader: "m_7a2bd4cd", bar: "m_870bb79", "bars-loader-animation": "m_5d2b3b9d", dotsLoader: "m_4e3f22d7", dot: "m_870c4af", "loader-dots-animation": "m_aac34a1", ovalLoader: "m_b34414df", "oval-loader-animation": "m_f8e89c4b" };
const nb = ye(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsxs(J, { component: "span", className: qt(St.barsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: St.bar }),
  /* @__PURE__ */ y.jsx("span", { className: St.bar }),
  /* @__PURE__ */ y.jsx("span", { className: St.bar })
] })), ob = ye(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsxs(J, { component: "span", className: qt(St.dotsLoader, r), ...e, ref: t, children: [
  /* @__PURE__ */ y.jsx("span", { className: St.dot }),
  /* @__PURE__ */ y.jsx("span", { className: St.dot }),
  /* @__PURE__ */ y.jsx("span", { className: St.dot })
] })), ib = ye(({ className: r, ...e }, t) => /* @__PURE__ */ y.jsx(J, { component: "span", className: qt(St.ovalLoader, r), ...e, ref: t })), Ku = {
  bars: nb,
  oval: ib,
  dots: ob
}, ab = {
  loaders: Ku,
  type: "oval"
}, sb = (r, { size: e, color: t }) => ({
  root: {
    "--loader-size": Ae(e, "loader-size"),
    "--loader-color": t ? nr(t, r) : void 0
  }
}), Wn = ce((r, e) => {
  const t = G("Loader", ab, r), {
    size: n,
    color: o,
    type: i,
    vars: a,
    className: s,
    style: c,
    classNames: l,
    styles: u,
    unstyled: h,
    loaders: d,
    variant: f,
    children: p,
    ...g
  } = t, m = pe({
    name: "Loader",
    props: t,
    classes: St,
    className: s,
    style: c,
    classNames: l,
    styles: u,
    unstyled: h,
    vars: a,
    varsResolver: sb
  });
  return p ? /* @__PURE__ */ y.jsx(J, { ...m("root"), ref: e, ...g, children: p }) : /* @__PURE__ */ y.jsx(
    J,
    {
      ...m("root"),
      ref: e,
      component: d[i],
      variant: f,
      size: n,
      ...g
    }
  );
});
Wn.defaultLoaders = Ku;
Wn.classes = St;
Wn.displayName = "@mantine/core/Loader";
var ti = { root: "m_8d3f4000", icon: "m_8d3afb97", loader: "m_302b9fb1", group: "m_1a0f1b21" };
const $c = {
  orientation: "horizontal"
}, cb = (r, { borderWidth: e }) => ({
  group: { "--ai-border-width": A(e) }
}), Va = ce((r, e) => {
  const t = G("ActionIconGroup", $c, r), {
    className: n,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: h,
    mod: d,
    ...f
  } = G("ActionIconGroup", $c, r), p = pe({
    name: "ActionIconGroup",
    props: t,
    classes: ti,
    className: n,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: cb,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ...p("group"),
      ref: e,
      variant: h,
      mod: [{ "data-orientation": c }, d],
      role: "group",
      ...f
    }
  );
});
Va.classes = ti;
Va.displayName = "@mantine/core/ActionIconGroup";
const lb = {}, ub = (r, { size: e, radius: t, variant: n, gradient: o, color: i, autoContrast: a }) => {
  const s = r.variantColorResolver({
    color: i || r.primaryColor,
    theme: r,
    gradient: o,
    variant: n || "filled",
    autoContrast: a
  });
  return {
    root: {
      "--ai-size": Ae(e, "ai-size"),
      "--ai-radius": t === void 0 ? void 0 : It(t),
      "--ai-bg": i || n ? s.background : void 0,
      "--ai-hover": i || n ? s.hover : void 0,
      "--ai-hover-color": i || n ? s.hoverColor : void 0,
      "--ai-color": s.color,
      "--ai-bd": i || n ? s.border : void 0
    }
  };
}, ri = Gt((r, e) => {
  const t = G("ActionIcon", lb, r), {
    className: n,
    unstyled: o,
    variant: i,
    classNames: a,
    styles: s,
    style: c,
    loading: l,
    loaderProps: u,
    size: h,
    color: d,
    radius: f,
    __staticSelector: p,
    gradient: g,
    vars: m,
    children: C,
    disabled: v,
    "data-disabled": b,
    autoContrast: w,
    mod: E,
    ...T
  } = t, k = pe({
    name: ["ActionIcon", p],
    props: t,
    className: n,
    style: c,
    classes: ti,
    classNames: a,
    styles: s,
    unstyled: o,
    vars: m,
    varsResolver: ub
  });
  return /* @__PURE__ */ y.jsxs(
    Mr,
    {
      ...k("root", { active: !v && !l && !b }),
      ...T,
      unstyled: o,
      variant: i,
      size: h,
      disabled: v || l,
      ref: e,
      mod: [{ loading: l, disabled: v || b }, E],
      children: [
        /* @__PURE__ */ y.jsx(ei, { mounted: !!l, transition: "slide-down", duration: 150, children: (I) => /* @__PURE__ */ y.jsx(J, { component: "span", ...k("loader", { style: I }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(Wn, { color: "var(--ai-color)", size: "calc(var(--ai-size) * 0.55)", ...u }) }) }),
        /* @__PURE__ */ y.jsx(J, { component: "span", mod: { loading: l }, ...k("icon"), children: C })
      ]
    }
  );
});
ri.classes = ti;
ri.displayName = "@mantine/core/ActionIcon";
ri.Group = Va;
const qu = ye(
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
qu.displayName = "@mantine/core/CloseIcon";
var Vu = { root: "m_86a44da5", "root--subtle": "m_220c80f2" };
const db = {
  variant: "subtle"
}, hb = (r, { size: e, radius: t, iconSize: n }) => ({
  root: {
    "--cb-size": Ae(e, "cb-size"),
    "--cb-radius": t === void 0 ? void 0 : It(t),
    "--cb-icon-size": A(n)
  }
}), dn = Gt((r, e) => {
  const t = G("CloseButton", db, r), {
    iconSize: n,
    children: o,
    vars: i,
    radius: a,
    className: s,
    classNames: c,
    style: l,
    styles: u,
    unstyled: h,
    "data-disabled": d,
    disabled: f,
    variant: p,
    icon: g,
    mod: m,
    ...C
  } = t, v = pe({
    name: "CloseButton",
    props: t,
    className: s,
    style: l,
    classes: Vu,
    classNames: c,
    styles: u,
    unstyled: h,
    vars: i,
    varsResolver: hb
  });
  return /* @__PURE__ */ y.jsxs(
    Mr,
    {
      ref: e,
      ...C,
      unstyled: h,
      variant: p,
      disabled: f,
      mod: [{ disabled: f || d }, m],
      ...v("root", { variant: p, active: !f && !d }),
      children: [
        g || /* @__PURE__ */ y.jsx(qu, {}),
        o
      ]
    }
  );
});
dn.classes = Vu;
dn.displayName = "@mantine/core/CloseButton";
function fb(r) {
  return Mi.toArray(r).filter(Boolean);
}
var Gu = { root: "m_4081bf90" };
const pb = {
  preventGrowOverflow: !0,
  gap: "md",
  align: "center",
  justify: "flex-start",
  wrap: "wrap"
}, gb = (r, { grow: e, preventGrowOverflow: t, gap: n, align: o, justify: i, wrap: a }, { childWidth: s }) => ({
  root: {
    "--group-child-width": e && t ? s : void 0,
    "--group-gap": Ta(n),
    "--group-align": o,
    "--group-justify": i,
    "--group-wrap": a
  }
}), jn = ce((r, e) => {
  const t = G("Group", pb, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    children: c,
    gap: l,
    align: u,
    justify: h,
    wrap: d,
    grow: f,
    preventGrowOverflow: p,
    vars: g,
    variant: m,
    __size: C,
    mod: v,
    ...b
  } = t, w = fb(c), E = w.length, T = Ta(l ?? "md"), I = { childWidth: `calc(${100 / E}% - (${T} - ${T} / ${E}))` }, D = pe({
    name: "Group",
    props: t,
    stylesCtx: I,
    className: o,
    style: i,
    classes: Gu,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: g,
    varsResolver: gb
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ...D("root"),
      ref: e,
      variant: m,
      mod: [{ grow: f }, v],
      size: C,
      ...b,
      children: w
    }
  );
});
jn.classes = Gu;
jn.displayName = "@mantine/core/Group";
const [mb, Yn] = Vl({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});
var gt = { wrapper: "m_6c018570", input: "m_8fb7ebe7", section: "m_82577fc2", placeholder: "m_88bacfd0", root: "m_46b77525", label: "m_8fdc1311", required: "m_78a94662", error: "m_8f816625", description: "m_fe47ce59" };
const Kc = {}, yb = (r, { size: e }) => ({
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), ni = ce((r, e) => {
  const t = G("InputDescription", Kc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: h = !0,
    variant: d,
    ...f
  } = G("InputDescription", Kc, t), p = Yn(), g = pe({
    name: ["InputWrapper", u],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    rootSelector: "description",
    vars: c,
    varsResolver: yb
  }), m = h && (p == null ? void 0 : p.getStyles) || g;
  return /* @__PURE__ */ y.jsx(
    J,
    {
      component: "p",
      ref: e,
      variant: d,
      size: l,
      ...m("description", p != null && p.getStyles ? { className: o, style: i } : void 0),
      ...f
    }
  );
});
ni.classes = gt;
ni.displayName = "@mantine/core/InputDescription";
const vb = {}, bb = (r, { size: e }) => ({
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), oi = ce((r, e) => {
  const t = G("InputError", vb, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    __staticSelector: u,
    __inheritStyles: h = !0,
    variant: d,
    ...f
  } = t, p = pe({
    name: ["InputWrapper", u],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    rootSelector: "error",
    vars: c,
    varsResolver: bb
  }), g = Yn(), m = h && (g == null ? void 0 : g.getStyles) || p;
  return /* @__PURE__ */ y.jsx(
    J,
    {
      component: "p",
      ref: e,
      variant: d,
      size: l,
      ...m("error", g != null && g.getStyles ? { className: o, style: i } : void 0),
      ...f
    }
  );
});
oi.classes = gt;
oi.displayName = "@mantine/core/InputError";
const qc = {
  labelElement: "label"
}, Cb = (r, { size: e }) => ({
  label: {
    "--input-label-size": it(e),
    "--input-asterisk-color": void 0
  }
}), ii = ce((r, e) => {
  const t = G("InputLabel", qc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    labelElement: l,
    size: u,
    required: h,
    htmlFor: d,
    onMouseDown: f,
    children: p,
    __staticSelector: g,
    variant: m,
    mod: C,
    ...v
  } = G("InputLabel", qc, t), b = pe({
    name: ["InputWrapper", g],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    rootSelector: "label",
    vars: c,
    varsResolver: Cb
  }), w = Yn(), E = (w == null ? void 0 : w.getStyles) || b;
  return /* @__PURE__ */ y.jsxs(
    J,
    {
      ...E("label", w != null && w.getStyles ? { className: o, style: i } : void 0),
      component: l,
      variant: m,
      size: u,
      ref: e,
      htmlFor: l === "label" ? d : void 0,
      mod: [{ required: h }, C],
      onMouseDown: (T) => {
        f == null || f(T), !T.defaultPrevented && T.detail > 1 && T.preventDefault();
      },
      ...v,
      children: [
        p,
        h && /* @__PURE__ */ y.jsx("span", { ...E("required"), "aria-hidden": !0, children: " *" })
      ]
    }
  );
});
ii.classes = gt;
ii.displayName = "@mantine/core/InputLabel";
const Vc = {}, Ga = ce((r, e) => {
  const t = G("InputPlaceholder", Vc, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    __staticSelector: l,
    variant: u,
    error: h,
    mod: d,
    ...f
  } = G("InputPlaceholder", Vc, t), p = pe({
    name: ["InputPlaceholder", l],
    props: t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ...p("placeholder"),
      mod: [{ error: !!h }, d],
      component: "span",
      variant: u,
      ref: e,
      ...f
    }
  );
});
Ga.classes = gt;
Ga.displayName = "@mantine/core/InputPlaceholder";
function wb(r, { hasDescription: e, hasError: t }) {
  const n = r.findIndex((c) => c === "input"), o = r.slice(0, n), i = r.slice(n + 1), a = e && o.includes("description") || t && o.includes("error");
  return { offsetBottom: e && i.includes("description") || t && i.includes("error"), offsetTop: a };
}
const Sb = {
  labelElement: "label",
  inputContainer: (r) => r,
  inputWrapperOrder: ["label", "description", "input", "error"]
}, Eb = (r, { size: e }) => ({
  label: {
    "--input-label-size": it(e),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  },
  description: {
    "--input-description-size": e === void 0 ? void 0 : `calc(${it(e)} - ${A(2)})`
  }
}), Wa = ce((r, e) => {
  const t = G("InputWrapper", Sb, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    size: l,
    variant: u,
    __staticSelector: h,
    inputContainer: d,
    inputWrapperOrder: f,
    label: p,
    error: g,
    description: m,
    labelProps: C,
    descriptionProps: v,
    errorProps: b,
    labelElement: w,
    children: E,
    withAsterisk: T,
    id: k,
    required: I,
    __stylesApiProps: D,
    mod: U,
    ...Y
  } = t, X = pe({
    name: ["InputWrapper", h],
    props: D || t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: Eb
  }), ae = {
    size: l,
    variant: u,
    __staticSelector: h
  }, $ = cr(k), q = typeof T == "boolean" ? T : I, M = (b == null ? void 0 : b.id) || `${$}-error`, j = (v == null ? void 0 : v.id) || `${$}-description`, L = $, H = !!g && typeof g != "boolean", te = !!m, Ee = `${H ? M : ""} ${te ? j : ""}`, Ce = Ee.trim().length > 0 ? Ee.trim() : void 0, qe = (C == null ? void 0 : C.id) || `${$}-label`, yt = p && /* @__PURE__ */ y.jsx(
    ii,
    {
      labelElement: w,
      id: qe,
      htmlFor: L,
      required: q,
      ...ae,
      ...C,
      children: p
    },
    "label"
  ), Re = te && /* @__PURE__ */ y.jsx(
    ni,
    {
      ...v,
      ...ae,
      size: (v == null ? void 0 : v.size) || ae.size,
      id: (v == null ? void 0 : v.id) || j,
      children: m
    },
    "description"
  ), dr = /* @__PURE__ */ y.jsx(yl, { children: d(E) }, "input"), Qt = H && /* @__PURE__ */ xi(
    oi,
    {
      ...b,
      ...ae,
      size: (b == null ? void 0 : b.size) || ae.size,
      key: "error",
      id: (b == null ? void 0 : b.id) || M
    },
    g
  ), hr = f.map((fr) => {
    switch (fr) {
      case "label":
        return yt;
      case "input":
        return dr;
      case "description":
        return Re;
      case "error":
        return Qt;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ y.jsx(
    mb,
    {
      value: {
        getStyles: X,
        describedBy: Ce,
        inputId: L,
        labelId: qe,
        ...wb(f, { hasDescription: te, hasError: H })
      },
      children: /* @__PURE__ */ y.jsx(
        J,
        {
          ref: e,
          variant: u,
          size: l,
          mod: [{ error: !!g }, U],
          ...X("root"),
          ...Y,
          children: hr
        }
      )
    }
  );
});
Wa.classes = gt;
Wa.displayName = "@mantine/core/InputWrapper";
const Tb = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0
}, Ib = (r, e, t) => ({
  wrapper: {
    "--input-margin-top": t.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": t.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": Ae(e.size, "input-height"),
    "--input-fz": it(e.size),
    "--input-radius": e.radius === void 0 ? void 0 : It(e.radius),
    "--input-left-section-width": e.leftSectionWidth !== void 0 ? A(e.leftSectionWidth) : void 0,
    "--input-right-section-width": e.rightSectionWidth !== void 0 ? A(e.rightSectionWidth) : void 0,
    "--input-padding-y": e.multiline ? Ae(e.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": e.leftSectionPointerEvents,
    "--input-right-section-pointer-events": e.rightSectionPointerEvents
  }
}), Be = Gt((r, e) => {
  const t = G("Input", Tb, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    required: c,
    __staticSelector: l,
    __stylesApiProps: u,
    size: h,
    wrapperProps: d,
    error: f,
    disabled: p,
    leftSection: g,
    leftSectionProps: m,
    leftSectionWidth: C,
    rightSection: v,
    rightSectionProps: b,
    rightSectionWidth: w,
    rightSectionPointerEvents: E,
    leftSectionPointerEvents: T,
    variant: k,
    vars: I,
    pointer: D,
    multiline: U,
    radius: Y,
    id: X,
    withAria: ae,
    withErrorStyles: $,
    mod: q,
    inputSize: M,
    ...j
  } = t, { styleProps: L, rest: H } = Yo(j), te = Yn(), Ee = { offsetBottom: te == null ? void 0 : te.offsetBottom, offsetTop: te == null ? void 0 : te.offsetTop }, Ce = pe({
    name: ["Input", l],
    props: u || t,
    classes: gt,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    stylesCtx: Ee,
    rootSelector: "wrapper",
    vars: I,
    varsResolver: Ib
  }), qe = ae ? {
    required: c,
    disabled: p,
    "aria-invalid": !!f,
    "aria-describedby": te == null ? void 0 : te.describedBy,
    id: (te == null ? void 0 : te.inputId) || X
  } : {};
  return /* @__PURE__ */ y.jsxs(
    J,
    {
      ...Ce("wrapper"),
      ...L,
      ...d,
      mod: [
        {
          error: !!f && $,
          pointer: D,
          disabled: p,
          multiline: U,
          "data-with-right-section": !!v,
          "data-with-left-section": !!g
        },
        q
      ],
      variant: k,
      size: h,
      children: [
        g && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...m,
            "data-position": "left",
            ...Ce("section", {
              className: m == null ? void 0 : m.className,
              style: m == null ? void 0 : m.style
            }),
            children: g
          }
        ),
        /* @__PURE__ */ y.jsx(
          J,
          {
            component: "input",
            ...H,
            ...qe,
            ref: e,
            required: c,
            mod: { disabled: p, error: !!f && $ },
            variant: k,
            __size: M,
            ...Ce("input")
          }
        ),
        v && /* @__PURE__ */ y.jsx(
          "div",
          {
            ...b,
            "data-position": "right",
            ...Ce("section", {
              className: b == null ? void 0 : b.className,
              style: b == null ? void 0 : b.style
            }),
            children: v
          }
        )
      ]
    }
  );
});
Be.classes = gt;
Be.Wrapper = Wa;
Be.Label = ii;
Be.Error = oi;
Be.Description = ni;
Be.Placeholder = Ga;
Be.displayName = "@mantine/core/Input";
function _b(r, e, t) {
  const n = G(r, e, t), {
    label: o,
    description: i,
    error: a,
    required: s,
    classNames: c,
    styles: l,
    className: u,
    unstyled: h,
    __staticSelector: d,
    __stylesApiProps: f,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    wrapperProps: C,
    id: v,
    size: b,
    style: w,
    inputContainer: E,
    inputWrapperOrder: T,
    withAsterisk: k,
    variant: I,
    vars: D,
    mod: U,
    ...Y
  } = n, { styleProps: X, rest: ae } = Yo(Y), $ = {
    label: o,
    description: i,
    error: a,
    required: s,
    classNames: c,
    className: u,
    __staticSelector: d,
    __stylesApiProps: f || n,
    errorProps: p,
    labelProps: g,
    descriptionProps: m,
    unstyled: h,
    styles: l,
    size: b,
    style: w,
    inputContainer: E,
    inputWrapperOrder: T,
    withAsterisk: k,
    variant: I,
    id: v,
    mod: U,
    ...C
  };
  return {
    ...ae,
    classNames: c,
    styles: l,
    unstyled: h,
    wrapperProps: { ...$, ...X },
    inputProps: {
      required: s,
      classNames: c,
      styles: l,
      unstyled: h,
      size: b,
      __staticSelector: d,
      __stylesApiProps: f || n,
      error: a,
      variant: I,
      id: v
    }
  };
}
const kb = {
  __staticSelector: "InputBase",
  withAria: !0
}, Yt = Gt((r, e) => {
  const { inputProps: t, wrapperProps: n, ...o } = _b("InputBase", kb, r);
  return /* @__PURE__ */ y.jsx(Be.Wrapper, { ...n, children: /* @__PURE__ */ y.jsx(Be, { ...t, ...o, ref: e }) });
});
Yt.classes = { ...Be.classes, ...Be.Wrapper.classes };
Yt.displayName = "@mantine/core/InputBase";
const [Ab, Ya] = cn(
  "Accordion component was not found in the tree"
);
function Qa({ style: r, size: e = 16, ...t }) {
  return /* @__PURE__ */ y.jsx(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...r, width: A(e), height: A(e), display: "block" },
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
Qa.displayName = "@mantine/core/AccordionChevron";
const [Rb, Wu] = cn("Accordion.Item component was not found in the tree");
var Qn = { root: "m_9bdbb667", panel: "m_df78851f", content: "m_4ba554d4", itemTitle: "m_8fa820a0", control: "m_4ba585b8", "control--default": "m_6939a5e9", "control--contained": "m_4271d21b", label: "m_df3ffa0f", chevron: "m_3f35ae96", icon: "m_9bd771fe", item: "m_9bd7b098", "item--default": "m_fe19b709", "item--contained": "m_1f921b3b", "item--filled": "m_2cdf939a", "item--separated": "m_9f59b069" };
const Pb = {}, Ja = ce((r, e) => {
  const {
    classNames: t,
    className: n,
    style: o,
    styles: i,
    vars: a,
    chevron: s,
    icon: c,
    onClick: l,
    onKeyDown: u,
    children: h,
    disabled: d,
    mod: f,
    ...p
  } = G("AccordionControl", Pb, r), { value: g } = Wu(), m = Ya(), C = m.isItemActive(g), v = typeof m.order == "number", b = `h${m.order}`, w = /* @__PURE__ */ y.jsxs(
    Mr,
    {
      ...p,
      ...m.getStyles("control", { className: n, classNames: t, style: o, styles: i, variant: m.variant }),
      unstyled: m.unstyled,
      mod: [
        "accordion-control",
        { active: C, "chevron-position": m.chevronPosition, disabled: d },
        f
      ],
      ref: e,
      onClick: (E) => {
        l == null || l(E), m.onChange(g);
      },
      type: "button",
      disabled: d,
      "aria-expanded": C,
      "aria-controls": m.getRegionId(g),
      id: m.getControlId(g),
      onKeyDown: Og({
        siblingSelector: "[data-accordion-control]",
        parentSelector: "[data-accordion]",
        activateOnFocus: !1,
        loop: m.loop,
        orientation: "vertical",
        onKeyDown: u
      }),
      children: [
        /* @__PURE__ */ y.jsx(
          J,
          {
            component: "span",
            mod: { rotate: !m.disableChevronRotation && C, position: m.chevronPosition },
            ...m.getStyles("chevron", { classNames: t, styles: i }),
            children: s || m.chevron
          }
        ),
        /* @__PURE__ */ y.jsx("span", { ...m.getStyles("label", { classNames: t, styles: i }), children: h }),
        c && /* @__PURE__ */ y.jsx(
          J,
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
  return v ? /* @__PURE__ */ y.jsx(b, { ...m.getStyles("itemTitle", { classNames: t, styles: i }), children: w }) : w;
});
Ja.displayName = "@mantine/core/AccordionControl";
Ja.classes = Qn;
const Nb = {}, Xa = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, value: s, mod: c, ...l } = G(
    "AccordionItem",
    Nb,
    r
  ), u = Ya();
  return /* @__PURE__ */ y.jsx(Rb, { value: { value: s }, children: /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      mod: [{ active: u.isItemActive(s) }, c],
      ...u.getStyles("item", { className: n, classNames: t, styles: i, style: o, variant: u.variant }),
      ...l
    }
  ) });
});
Xa.displayName = "@mantine/core/AccordionItem";
Xa.classes = Qn;
const Ob = {}, Za = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, children: s, ...c } = G(
    "AccordionPanel",
    Ob,
    r
  ), { value: l } = Wu(), u = Ya();
  return /* @__PURE__ */ y.jsx(
    pu,
    {
      ref: e,
      ...u.getStyles("panel", { className: n, classNames: t, style: o, styles: i }),
      ...c,
      in: u.isItemActive(l),
      transitionDuration: u.transitionDuration ?? 200,
      role: "region",
      id: u.getRegionId(l),
      "aria-labelledby": u.getControlId(l),
      children: /* @__PURE__ */ y.jsx("div", { ...u.getStyles("content", { classNames: t, styles: i }), children: s })
    }
  );
});
Za.displayName = "@mantine/core/AccordionPanel";
Za.classes = Qn;
const Mb = {
  multiple: !1,
  disableChevronRotation: !1,
  chevronPosition: "right",
  variant: "default",
  chevron: /* @__PURE__ */ y.jsx(Qa, {})
}, xb = (r, { transitionDuration: e, chevronSize: t, radius: n }) => ({
  root: {
    "--accordion-transition-duration": e === void 0 ? void 0 : `${e}ms`,
    "--accordion-chevron-size": t === void 0 ? void 0 : A(t),
    "--accordion-radius": n === void 0 ? void 0 : It(n)
  }
});
function Pe(r) {
  const e = G("Accordion", Mb, r), {
    classNames: t,
    className: n,
    style: o,
    styles: i,
    unstyled: a,
    vars: s,
    children: c,
    multiple: l,
    value: u,
    defaultValue: h,
    onChange: d,
    id: f,
    loop: p,
    transitionDuration: g,
    disableChevronRotation: m,
    chevronPosition: C,
    chevronSize: v,
    order: b,
    chevron: w,
    variant: E,
    radius: T,
    ...k
  } = e, I = cr(f), [D, U] = kr({
    value: u,
    defaultValue: h,
    finalValue: l ? [] : null,
    onChange: d
  }), Y = ($) => Array.isArray(D) ? D.includes($) : $ === D, X = ($) => {
    const q = Array.isArray(D) ? D.includes($) ? D.filter((M) => M !== $) : [...D, $] : $ === D ? null : $;
    U(q);
  }, ae = pe({
    name: "Accordion",
    classes: Qn,
    props: e,
    className: n,
    style: o,
    classNames: t,
    styles: i,
    unstyled: a,
    vars: s,
    varsResolver: xb
  });
  return /* @__PURE__ */ y.jsx(
    Ab,
    {
      value: {
        isItemActive: Y,
        onChange: X,
        getControlId: gc(
          `${I}-control`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        getRegionId: gc(
          `${I}-panel`,
          "Accordion.Item component was rendered with invalid value or without value"
        ),
        transitionDuration: g,
        disableChevronRotation: m,
        chevronPosition: C,
        order: b,
        chevron: w,
        loop: p,
        getStyles: ae,
        variant: E,
        unstyled: a
      },
      children: /* @__PURE__ */ y.jsx(J, { ...ae("root"), id: I, ...k, variant: E, "data-accordion": !0, children: c })
    }
  );
}
const Lb = (r) => r;
Pe.extend = Lb;
Pe.classes = Qn;
Pe.displayName = "@mantine/core/Accordion";
Pe.Item = Xa;
Pe.Panel = Za;
Pe.Control = Ja;
Pe.Chevron = Qa;
var Yu = { root: "m_66836ed3", wrapper: "m_a5d60502", body: "m_667c2793", title: "m_6a03f287", label: "m_698f4f23", icon: "m_667f2a6a", message: "m_7fa78076", closeButton: "m_87f54839" };
const Db = {}, jb = (r, { radius: e, color: t, variant: n, autoContrast: o }) => {
  const i = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    variant: n || "light",
    autoContrast: o
  });
  return {
    root: {
      "--alert-radius": e === void 0 ? void 0 : It(e),
      "--alert-bg": t || n ? i.background : void 0,
      "--alert-color": i.color,
      "--alert-bd": t || n ? i.border : void 0
    }
  };
}, es = ce((r, e) => {
  const t = G("Alert", Db, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    radius: l,
    color: u,
    title: h,
    children: d,
    id: f,
    icon: p,
    withCloseButton: g,
    onClose: m,
    closeButtonLabel: C,
    variant: v,
    autoContrast: b,
    ...w
  } = t, E = pe({
    name: "Alert",
    classes: Yu,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: jb
  }), T = cr(f), k = h && `${T}-title` || void 0, I = `${T}-body`;
  return /* @__PURE__ */ y.jsx(
    J,
    {
      id: T,
      ...E("root", { variant: v }),
      variant: v,
      ref: e,
      ...w,
      role: "alert",
      "aria-describedby": I,
      "aria-labelledby": k,
      children: /* @__PURE__ */ y.jsxs("div", { ...E("wrapper"), children: [
        p && /* @__PURE__ */ y.jsx("div", { ...E("icon"), children: p }),
        /* @__PURE__ */ y.jsxs("div", { ...E("body"), children: [
          h && /* @__PURE__ */ y.jsx("div", { ...E("title"), "data-with-close-button": g || void 0, children: /* @__PURE__ */ y.jsx("span", { id: k, ...E("label"), children: h }) }),
          d && /* @__PURE__ */ y.jsx("div", { id: I, ...E("message"), "data-variant": v, children: d })
        ] }),
        g && /* @__PURE__ */ y.jsx(
          dn,
          {
            ...E("closeButton"),
            onClick: m,
            variant: "transparent",
            size: 16,
            iconSize: 16,
            "aria-label": C,
            unstyled: s
          }
        )
      ] })
    }
  );
});
es.classes = Yu;
es.displayName = "@mantine/core/Alert";
var Qu = { root: "m_b6d8b162" };
function Fb(r) {
  if (r === "start")
    return "start";
  if (r === "end" || r)
    return "end";
}
const Ub = {
  inherit: !1
}, Hb = (r, { variant: e, lineClamp: t, gradient: n, size: o, color: i }) => ({
  root: {
    "--text-fz": it(o),
    "--text-lh": jg(o),
    "--text-gradient": e === "gradient" ? Zi(n, r) : void 0,
    "--text-line-clamp": typeof t == "number" ? t.toString() : void 0,
    "--text-color": i ? nr(i, r) : void 0
  }
}), Mo = Gt((r, e) => {
  const t = G("Text", Ub, r), {
    lineClamp: n,
    truncate: o,
    inline: i,
    inherit: a,
    gradient: s,
    span: c,
    __staticSelector: l,
    vars: u,
    className: h,
    style: d,
    classNames: f,
    styles: p,
    unstyled: g,
    variant: m,
    mod: C,
    size: v,
    ...b
  } = t, w = pe({
    name: ["Text", l],
    props: t,
    classes: Qu,
    className: h,
    style: d,
    classNames: f,
    styles: p,
    unstyled: g,
    vars: u,
    varsResolver: Hb
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ...w("root", { focusable: !0 }),
      ref: e,
      component: c ? "span" : "p",
      variant: m,
      mod: [
        {
          "data-truncate": Fb(o),
          "data-line-clamp": typeof n == "number",
          "data-inline": i,
          "data-inherit": a
        },
        C
      ],
      size: v,
      ...b
    }
  );
});
Mo.classes = Qu;
Mo.displayName = "@mantine/core/Text";
function Ju(r) {
  return typeof r == "string" ? { value: r, label: r } : "value" in r && !("label" in r) ? { value: r.value, label: r.value, disabled: r.disabled } : typeof r == "number" ? { value: r.toString(), label: r.toString() } : "group" in r ? {
    group: r.group,
    items: r.items.map((e) => Ju(e))
  } : r;
}
function Xu(r) {
  return r ? r.map((e) => Ju(e)) : [];
}
function ts(r) {
  return r.reduce((e, t) => "group" in t ? { ...e, ...ts(t.items) } : (e[t.value] = t, e), {});
}
var Xe = { dropdown: "m_88b62a41", options: "m_b2821a6e", option: "m_92253aa5", search: "m_985517d8", empty: "m_2530cd1d", header: "m_858f94bd", footer: "m_82b967cb", group: "m_254f3e4f", groupLabel: "m_2bb2e9e5", chevron: "m_2943220b", optionsDropdownOption: "m_390b5f4", optionsDropdownCheckIcon: "m_8ee53fc2" };
const Bb = {
  error: null
}, zb = (r, { size: e }) => ({
  chevron: {
    "--combobox-chevron-size": Ae(e, "combobox-chevron-size")
  }
}), rs = ce((r, e) => {
  const t = G("ComboboxChevron", Bb, r), { size: n, error: o, style: i, className: a, classNames: s, styles: c, unstyled: l, vars: u, mod: h, ...d } = t, f = pe({
    name: "ComboboxChevron",
    classes: Xe,
    props: t,
    style: i,
    className: a,
    classNames: s,
    styles: c,
    unstyled: l,
    vars: u,
    varsResolver: zb,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      component: "svg",
      ...d,
      ...f("chevron"),
      size: n,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error: o }, h],
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
rs.classes = Xe;
rs.displayName = "@mantine/core/ComboboxChevron";
const [$b, mt] = cn(
  "Combobox component was not found in tree"
), Zu = ye(
  ({ size: r, onMouseDown: e, onClick: t, onClear: n, ...o }, i) => /* @__PURE__ */ y.jsx(
    dn,
    {
      ref: i,
      size: r || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": !0,
      ...o,
      onMouseDown: (a) => {
        a.preventDefault(), e == null || e(a);
      },
      onClick: (a) => {
        n(), t == null || t(a);
      }
    }
  )
);
Zu.displayName = "@mantine/core/ComboboxClearButton";
const Kb = {}, ns = ce((r, e) => {
  const { classNames: t, styles: n, className: o, style: i, hidden: a, ...s } = G(
    "ComboboxDropdown",
    Kb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    lr.Dropdown,
    {
      ...s,
      ref: e,
      role: "presentation",
      "data-hidden": a || void 0,
      ...c.getStyles("dropdown", { className: o, style: i, classNames: t, styles: n })
    }
  );
});
ns.classes = Xe;
ns.displayName = "@mantine/core/ComboboxDropdown";
const qb = {
  refProp: "ref"
}, ed = ce((r, e) => {
  const { children: t, refProp: n } = G("ComboboxDropdownTarget", qb, r);
  if (mt(), !Kn(t))
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  return /* @__PURE__ */ y.jsx(lr.Target, { ref: e, refProp: n, children: t });
});
ed.displayName = "@mantine/core/ComboboxDropdownTarget";
const Vb = {}, os = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, ...s } = G(
    "ComboboxEmpty",
    Vb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      ...c.getStyles("empty", { className: n, classNames: t, styles: i, style: o }),
      ...s
    }
  );
});
os.classes = Xe;
os.displayName = "@mantine/core/ComboboxEmpty";
function is({
  onKeyDown: r,
  withKeyboardNavigation: e,
  withAriaAttributes: t,
  withExpandedAttribute: n,
  targetType: o,
  autoComplete: i
}) {
  const a = mt(), [s, c] = Z(null), l = (h) => {
    if (r == null || r(h), !a.readOnly && e) {
      if (h.nativeEvent.isComposing)
        return;
      if (h.nativeEvent.code === "ArrowDown" && (h.preventDefault(), a.store.dropdownOpened ? c(a.store.selectNextOption()) : (a.store.openDropdown("keyboard"), c(a.store.selectActiveOption()))), h.nativeEvent.code === "ArrowUp" && (h.preventDefault(), a.store.dropdownOpened ? c(a.store.selectPreviousOption()) : (a.store.openDropdown("keyboard"), c(a.store.selectActiveOption()))), h.nativeEvent.code === "Enter" || h.nativeEvent.code === "NumpadEnter") {
        if (h.nativeEvent.keyCode === 229)
          return;
        const d = a.store.getSelectedOptionIndex();
        a.store.dropdownOpened && d !== -1 ? (h.preventDefault(), a.store.clickSelectedOption()) : o === "button" && (h.preventDefault(), a.store.openDropdown("keyboard"));
      }
      h.nativeEvent.code === "Escape" && a.store.closeDropdown("keyboard"), h.nativeEvent.code === "Space" && o === "button" && (h.preventDefault(), a.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...t ? {
      "aria-haspopup": "listbox",
      "aria-expanded": n && !!(a.store.listId && a.store.dropdownOpened) || void 0,
      "aria-controls": a.store.listId,
      "aria-activedescendant": a.store.dropdownOpened && s || void 0,
      autoComplete: i,
      "data-expanded": a.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": a.store.dropdownOpened || void 0
    } : {},
    onKeyDown: l
  };
}
const Gb = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, td = ce((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = G("ComboboxEventsTarget", Gb, r);
  if (!Kn(t))
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), h = is({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  });
  return $o(t, {
    ...h,
    ...l,
    [n]: ft(e, u.store.targetRef, t == null ? void 0 : t.ref)
  });
});
td.displayName = "@mantine/core/ComboboxEventsTarget";
const Wb = {}, as = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, ...s } = G(
    "ComboboxFooter",
    Wb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      ...c.getStyles("footer", { className: n, classNames: t, style: o, styles: i }),
      ...s,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
as.classes = Xe;
as.displayName = "@mantine/core/ComboboxFooter";
const Yb = {}, ss = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, children: s, label: c, ...l } = G(
    "ComboboxGroup",
    Yb,
    r
  ), u = mt();
  return /* @__PURE__ */ y.jsxs(
    J,
    {
      ref: e,
      ...u.getStyles("group", { className: n, classNames: t, style: o, styles: i }),
      ...l,
      children: [
        c && /* @__PURE__ */ y.jsx("div", { ...u.getStyles("groupLabel", { classNames: t, styles: i }), children: c }),
        s
      ]
    }
  );
});
ss.classes = Xe;
ss.displayName = "@mantine/core/ComboboxGroup";
const Qb = {}, cs = ce((r, e) => {
  const { classNames: t, className: n, style: o, styles: i, vars: a, ...s } = G(
    "ComboboxHeader",
    Qb,
    r
  ), c = mt();
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      ...c.getStyles("header", { className: n, classNames: t, style: o, styles: i }),
      ...s,
      onMouseDown: (l) => {
        l.preventDefault();
      }
    }
  );
});
cs.classes = Xe;
cs.displayName = "@mantine/core/ComboboxHeader";
function rd({
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
rd.displayName = "@mantine/core/ComboboxHiddenInput";
const Jb = {}, ls = ce((r, e) => {
  const t = G("ComboboxOption", Jb, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    vars: s,
    onClick: c,
    id: l,
    active: u,
    onMouseDown: h,
    onMouseOver: d,
    disabled: f,
    selected: p,
    mod: g,
    ...m
  } = t, C = mt(), v = vl(), b = l || v;
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ...C.getStyles("option", { className: o, classNames: n, styles: a, style: i }),
      ...m,
      ref: e,
      id: b,
      mod: [
        "combobox-option",
        { "combobox-active": u, "combobox-disabled": f, "combobox-selected": p },
        g
      ],
      role: "option",
      onClick: (w) => {
        var E;
        f ? w.preventDefault() : ((E = C.onOptionSubmit) == null || E.call(C, t.value, t), c == null || c(w));
      },
      onMouseDown: (w) => {
        w.preventDefault(), h == null || h(w);
      },
      onMouseOver: (w) => {
        C.resetSelectionOnOptionHover && C.store.resetSelectedOption(), d == null || d(w);
      }
    }
  );
});
ls.classes = Xe;
ls.displayName = "@mantine/core/ComboboxOption";
const Xb = {}, us = ce((r, e) => {
  const t = G("ComboboxOptions", Xb, r), { classNames: n, className: o, style: i, styles: a, id: s, onMouseDown: c, labelledBy: l, ...u } = t, h = mt(), d = cr(s);
  return W(() => {
    h.store.setListId(d);
  }, [d]), /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      ...h.getStyles("options", { className: o, style: i, classNames: n, styles: a }),
      ...u,
      id: d,
      role: "listbox",
      "aria-labelledby": l,
      onMouseDown: (f) => {
        f.preventDefault(), c == null || c(f);
      }
    }
  );
});
us.classes = Xe;
us.displayName = "@mantine/core/ComboboxOptions";
const Zb = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, ds = ce((r, e) => {
  const t = G("ComboboxSearch", Zb, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: a,
    withAriaAttributes: s,
    onKeyDown: c,
    withKeyboardNavigation: l,
    size: u,
    ...h
  } = t, d = mt(), f = d.getStyles("search"), p = is({
    targetType: "input",
    withAriaAttributes: s,
    withKeyboardNavigation: l,
    withExpandedAttribute: !1,
    onKeyDown: c,
    autoComplete: "off"
  });
  return /* @__PURE__ */ y.jsx(
    Be,
    {
      ref: ft(e, d.store.searchRef),
      classNames: [{ input: f.className }, n],
      styles: [{ input: f.style }, o],
      size: u || d.size,
      ...p,
      ...h,
      __staticSelector: "Combobox"
    }
  );
});
ds.classes = Xe;
ds.displayName = "@mantine/core/ComboboxSearch";
const eC = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, nd = ce((r, e) => {
  const {
    children: t,
    refProp: n,
    withKeyboardNavigation: o,
    withAriaAttributes: i,
    withExpandedAttribute: a,
    targetType: s,
    autoComplete: c,
    ...l
  } = G("ComboboxTarget", eC, r);
  if (!Kn(t))
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  const u = mt(), h = is({
    targetType: s,
    withAriaAttributes: i,
    withKeyboardNavigation: o,
    withExpandedAttribute: a,
    onKeyDown: t.props.onKeyDown,
    autoComplete: c
  }), d = $o(t, {
    ...h,
    ...l
  });
  return /* @__PURE__ */ y.jsx(lr.Target, { ref: ft(e, u.store.targetRef), children: d });
});
nd.displayName = "@mantine/core/ComboboxTarget";
function tC(r, e, t) {
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
function rC(r, e, t) {
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
function nC(r) {
  for (let e = 0; e < r.length; e += 1)
    if (!r[e].hasAttribute("data-combobox-disabled"))
      return e;
  return -1;
}
function ai({
  defaultOpened: r,
  opened: e,
  onOpenedChange: t,
  onDropdownClose: n,
  onDropdownOpen: o,
  loop: i = !0,
  scrollBehavior: a = "instant"
} = {}) {
  const [s, c] = kr({
    value: e,
    defaultValue: r,
    finalValue: !1,
    onChange: t
  }), l = ue(null), u = ue(-1), h = ue(null), d = ue(null), f = ue(-1), p = ue(-1), g = ue(-1), m = me(
    (M = "unknown") => {
      s || (c(!0), o == null || o(M));
    },
    [c, o, s]
  ), C = me(
    (M = "unknown") => {
      s && (c(!1), n == null || n(M));
    },
    [c, n, s]
  ), v = me(
    (M = "unknown") => {
      s ? C(M) : m(M);
    },
    [C, m, s]
  ), b = me(() => {
    const M = document.querySelector(`#${l.current} [data-combobox-selected]`);
    M == null || M.removeAttribute("data-combobox-selected"), M == null || M.removeAttribute("aria-selected");
  }, []), w = me(
    (M) => {
      const j = document.getElementById(l.current), L = j == null ? void 0 : j.querySelectorAll("[data-combobox-option]");
      if (!L)
        return null;
      const H = M >= L.length ? 0 : M < 0 ? L.length - 1 : M;
      return u.current = H, L != null && L[H] && !L[H].hasAttribute("data-combobox-disabled") ? (b(), L[H].setAttribute("data-combobox-selected", "true"), L[H].setAttribute("aria-selected", "true"), L[H].scrollIntoView({ block: "nearest", behavior: a }), L[H].id) : null;
    },
    [a, b]
  ), E = me(() => {
    const M = document.querySelector(
      `#${l.current} [data-combobox-active]`
    );
    if (M) {
      const j = document.querySelectorAll(
        `#${l.current} [data-combobox-option]`
      ), L = Array.from(j).findIndex((H) => H === M);
      return w(L);
    }
    return w(0);
  }, [w]), T = me(
    () => w(
      rC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), k = me(
    () => w(
      tC(
        u.current,
        document.querySelectorAll(`#${l.current} [data-combobox-option]`),
        i
      )
    ),
    [w, i]
  ), I = me(
    () => w(
      nC(
        document.querySelectorAll(`#${l.current} [data-combobox-option]`)
      )
    ),
    [w]
  ), D = me(
    (M = "selected", j) => {
      g.current = window.setTimeout(() => {
        var te;
        const L = document.querySelectorAll(
          `#${l.current} [data-combobox-option]`
        ), H = Array.from(L).findIndex(
          (Ee) => Ee.hasAttribute(`data-combobox-${M}`)
        );
        u.current = H, j != null && j.scrollIntoView && ((te = L[H]) == null || te.scrollIntoView({ block: "nearest", behavior: a }));
      }, 0);
    },
    []
  ), U = me(() => {
    u.current = -1, b();
  }, [b]), Y = me(() => {
    const M = document.querySelectorAll(
      `#${l.current} [data-combobox-option]`
    ), j = M == null ? void 0 : M[u.current];
    j == null || j.click();
  }, []), X = me((M) => {
    l.current = M;
  }, []), ae = me(() => {
    f.current = window.setTimeout(() => h.current.focus(), 0);
  }, []), $ = me(() => {
    p.current = window.setTimeout(() => d.current.focus(), 0);
  }, []), q = me(() => u.current, []);
  return W(
    () => () => {
      window.clearTimeout(f.current), window.clearTimeout(p.current), window.clearTimeout(g.current);
    },
    []
  ), {
    dropdownOpened: s,
    openDropdown: m,
    closeDropdown: C,
    toggleDropdown: v,
    selectedOptionIndex: u.current,
    getSelectedOptionIndex: q,
    selectOption: w,
    selectFirstOption: I,
    selectActiveOption: E,
    selectNextOption: T,
    selectPreviousOption: k,
    resetSelectedOption: U,
    updateSelectedOptionIndex: D,
    listId: l.current,
    setListId: X,
    clickSelectedOption: Y,
    searchRef: h,
    focusSearchInput: ae,
    targetRef: d,
    focusTarget: $
  };
}
const oC = {
  keepMounted: !0,
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
}, iC = (r, { size: e, dropdownPadding: t }) => ({
  options: {
    "--combobox-option-fz": it(e),
    "--combobox-option-padding": Ae(e, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": t === void 0 ? void 0 : A(t),
    "--combobox-option-fz": it(e),
    "--combobox-option-padding": Ae(e, "combobox-option-padding")
  }
});
function le(r) {
  const e = G("Combobox", oC, r), {
    classNames: t,
    styles: n,
    unstyled: o,
    children: i,
    store: a,
    vars: s,
    onOptionSubmit: c,
    onClose: l,
    size: u,
    dropdownPadding: h,
    resetSelectionOnOptionHover: d,
    __staticSelector: f,
    readOnly: p,
    ...g
  } = e, m = ai(), C = a || m, v = pe({
    name: f || "Combobox",
    classes: Xe,
    props: e,
    classNames: t,
    styles: n,
    unstyled: o,
    vars: s,
    varsResolver: iC
  }), b = () => {
    l == null || l(), C.closeDropdown();
  };
  return /* @__PURE__ */ y.jsx(
    $b,
    {
      value: {
        getStyles: v,
        store: C,
        onOptionSubmit: c,
        size: u,
        resetSelectionOnOptionHover: d,
        readOnly: p
      },
      children: /* @__PURE__ */ y.jsx(
        lr,
        {
          opened: C.dropdownOpened,
          ...g,
          onClose: b,
          withRoles: !1,
          unstyled: o,
          children: i
        }
      )
    }
  );
}
const aC = (r) => r;
le.extend = aC;
le.classes = Xe;
le.displayName = "@mantine/core/Combobox";
le.Target = nd;
le.Dropdown = ns;
le.Options = us;
le.Option = ls;
le.Search = ds;
le.Empty = os;
le.Chevron = rs;
le.Footer = as;
le.Header = cs;
le.EventsTarget = td;
le.DropdownTarget = ed;
le.Group = ss;
le.ClearButton = Zu;
le.HiddenInput = rd;
var od = { root: "m_5f75b09e", body: "m_5f6e695e", labelWrapper: "m_d3ea56bb", label: "m_8ee546b8", description: "m_328f68c0", error: "m_8e8a99cc" };
const sC = od, id = ye(
  ({
    __staticSelector: r,
    __stylesApiProps: e,
    className: t,
    classNames: n,
    styles: o,
    unstyled: i,
    children: a,
    label: s,
    description: c,
    id: l,
    disabled: u,
    error: h,
    size: d,
    labelPosition: f = "left",
    bodyElement: p = "div",
    labelElement: g = "label",
    variant: m,
    style: C,
    vars: v,
    mod: b,
    ...w
  }, E) => {
    const T = pe({
      name: r,
      props: e,
      className: t,
      style: C,
      classes: od,
      classNames: n,
      styles: o,
      unstyled: i
    });
    return /* @__PURE__ */ y.jsx(
      J,
      {
        ...T("root"),
        ref: E,
        __vars: {
          "--label-fz": it(d),
          "--label-lh": Ae(d, "label-lh")
        },
        mod: [{ "label-position": f }, b],
        variant: m,
        size: d,
        ...w,
        children: /* @__PURE__ */ y.jsxs(
          J,
          {
            component: p,
            htmlFor: p === "label" ? l : void 0,
            ...T("body"),
            children: [
              a,
              /* @__PURE__ */ y.jsxs("div", { ...T("labelWrapper"), "data-disabled": u || void 0, children: [
                s && /* @__PURE__ */ y.jsx(
                  J,
                  {
                    component: g,
                    htmlFor: g === "label" ? l : void 0,
                    ...T("label"),
                    "data-disabled": u || void 0,
                    children: s
                  }
                ),
                c && /* @__PURE__ */ y.jsx(Be.Description, { size: d, __inheritStyles: !1, ...T("description"), children: c }),
                h && typeof h != "boolean" && /* @__PURE__ */ y.jsx(Be.Error, { size: d, __inheritStyles: !1, ...T("error"), children: h })
              ] })
            ]
          }
        )
      }
    );
  }
);
id.displayName = "@mantine/core/InlineInput";
const ad = Pr(null), cC = ad.Provider, sd = () => sr(ad), [lC, uC] = Vl();
var cd = { card: "m_26775b0a" };
const dC = {
  withBorder: !0
}, hC = (r, { radius: e }) => ({
  card: {
    "--card-radius": It(e)
  }
}), hs = ce((r, e) => {
  const t = G("CheckboxCard", dC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    checked: l,
    mod: u,
    withBorder: h,
    value: d,
    onClick: f,
    ...p
  } = t, g = pe({
    name: "CheckboxCard",
    classes: cd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: hC,
    rootSelector: "card"
  }), m = sd(), C = typeof l == "boolean" ? l : (m == null ? void 0 : m.value.includes(d || "")) || !1;
  return /* @__PURE__ */ y.jsx(lC, { value: { checked: C }, children: /* @__PURE__ */ y.jsx(
    Mr,
    {
      ref: e,
      mod: [{ "with-border": h, checked: C }, u],
      ...g("card"),
      ...p,
      role: "checkbox",
      "aria-checked": C,
      onClick: (v) => {
        f == null || f(v), m == null || m.onChange(d || "");
      }
    }
  ) });
});
hs.displayName = "@mantine/core/CheckboxCard";
hs.classes = cd;
function fC({ children: r, role: e }) {
  const t = Yn();
  return t ? /* @__PURE__ */ y.jsx("div", { role: e, "aria-labelledby": t.labelId, "aria-describedby": t.describedBy, children: r }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: r });
}
const pC = {}, fs = ce((r, e) => {
  const { value: t, defaultValue: n, onChange: o, size: i, wrapperProps: a, children: s, readOnly: c, ...l } = G("CheckboxGroup", pC, r), [u, h] = kr({
    value: t,
    defaultValue: n,
    finalValue: [],
    onChange: o
  }), d = (f) => {
    const p = typeof f == "string" ? f : f.currentTarget.value;
    !c && h(
      u.includes(p) ? u.filter((g) => g !== p) : [...u, p]
    );
  };
  return /* @__PURE__ */ y.jsx(cC, { value: { value: u, onChange: d, size: i }, children: /* @__PURE__ */ y.jsx(
    Be.Wrapper,
    {
      size: i,
      ref: e,
      ...a,
      ...l,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: /* @__PURE__ */ y.jsx(fC, { role: "group", children: s })
    }
  ) });
});
fs.classes = Be.Wrapper.classes;
fs.displayName = "@mantine/core/CheckboxGroup";
function ps({ size: r, style: e, ...t }) {
  const n = r !== void 0 ? { width: A(r), height: A(r), ...e } : e;
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
function ld({ indeterminate: r, ...e }) {
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
  ) : /* @__PURE__ */ y.jsx(ps, { ...e });
}
var ud = { indicator: "m_5e5256ee", icon: "m_1b1c543a", "indicator--outline": "m_76e20374" };
const gC = {
  icon: ld
}, mC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: a }) => {
  const s = Or({ color: t || r.primaryColor, theme: r }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    indicator: {
      "--checkbox-size": Ae(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : It(e),
      "--checkbox-color": i === "outline" ? c : nr(t, r),
      "--checkbox-icon-color": o ? nr(o, r) : cu(a, r) ? Ra({ color: t, theme: r, autoContrast: a }) : void 0
    }
  };
}, gs = ce((r, e) => {
  const t = G("CheckboxIndicator", gC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    icon: l,
    indeterminate: u,
    radius: h,
    color: d,
    iconColor: f,
    autoContrast: p,
    checked: g,
    mod: m,
    variant: C,
    disabled: v,
    ...b
  } = t, w = l, E = pe({
    name: "CheckboxIndicator",
    classes: ud,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: mC,
    rootSelector: "indicator"
  }), T = uC(), k = typeof g == "boolean" || typeof u == "boolean" ? g || u : (T == null ? void 0 : T.checked) || !1;
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ref: e,
      ...E("indicator", { variant: C }),
      variant: C,
      mod: [{ checked: k, disabled: v }, m],
      ...b,
      children: /* @__PURE__ */ y.jsx(w, { indeterminate: u, ...E("icon") })
    }
  );
});
gs.displayName = "@mantine/core/CheckboxIndicator";
gs.classes = ud;
var dd = { root: "m_bf2d988c", inner: "m_26062bec", input: "m_26063560", icon: "m_bf295423", "input--outline": "m_215c4542" };
const yC = {
  labelPosition: "right",
  icon: ld
}, vC = (r, { radius: e, color: t, size: n, iconColor: o, variant: i, autoContrast: a }) => {
  const s = Or({ color: t || r.primaryColor, theme: r }), c = s.isThemeColor && s.shade === void 0 ? `var(--mantine-color-${s.color}-outline)` : s.color;
  return {
    root: {
      "--checkbox-size": Ae(n, "checkbox-size"),
      "--checkbox-radius": e === void 0 ? void 0 : It(e),
      "--checkbox-color": i === "outline" ? c : nr(t, r),
      "--checkbox-icon-color": o ? nr(o, r) : cu(a, r) ? Ra({ color: t, theme: r, autoContrast: a }) : void 0
    }
  };
}, xr = ce((r, e) => {
  const t = G("Checkbox", yC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    color: l,
    label: u,
    id: h,
    size: d,
    radius: f,
    wrapperProps: p,
    children: g,
    checked: m,
    labelPosition: C,
    description: v,
    error: b,
    disabled: w,
    variant: E,
    indeterminate: T,
    icon: k,
    rootRef: I,
    iconColor: D,
    onChange: U,
    autoContrast: Y,
    mod: X,
    ...ae
  } = t, $ = sd(), q = d || ($ == null ? void 0 : $.size), M = k, j = pe({
    name: "Checkbox",
    props: t,
    classes: dd,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: vC
  }), { styleProps: L, rest: H } = Yo(ae), te = cr(h), Ee = $ ? {
    checked: $.value.includes(H.value),
    onChange: (Ce) => {
      $.onChange(Ce), U == null || U(Ce);
    }
  } : {};
  return /* @__PURE__ */ y.jsx(
    id,
    {
      ...j("root"),
      __staticSelector: "Checkbox",
      __stylesApiProps: t,
      id: te,
      size: q,
      labelPosition: C,
      label: u,
      description: v,
      error: b,
      disabled: w,
      classNames: n,
      styles: a,
      unstyled: s,
      "data-checked": Ee.checked || m || void 0,
      variant: E,
      ref: I,
      mod: X,
      ...L,
      ...p,
      children: /* @__PURE__ */ y.jsxs(J, { ...j("inner"), mod: { "data-label-position": C }, children: [
        /* @__PURE__ */ y.jsx(
          J,
          {
            component: "input",
            id: te,
            ref: e,
            checked: m,
            disabled: w,
            mod: { error: !!b, indeterminate: T },
            ...j("input", { focusable: !0, variant: E }),
            onChange: U,
            ...H,
            ...Ee,
            type: "checkbox"
          }
        ),
        /* @__PURE__ */ y.jsx(M, { indeterminate: T, ...j("icon") })
      ] })
    }
  );
});
xr.classes = { ...dd, ...sC };
xr.displayName = "@mantine/core/Checkbox";
xr.Group = fs;
xr.Indicator = gs;
xr.Card = hs;
function Fn(r) {
  return "group" in r;
}
function hd({
  options: r,
  search: e,
  limit: t
}) {
  const n = e.trim().toLowerCase(), o = [];
  for (let i = 0; i < r.length; i += 1) {
    const a = r[i];
    if (o.length === t)
      return o;
    Fn(a) && o.push({
      group: a.group,
      items: hd({
        options: a.items,
        search: e,
        limit: t - o.length
      })
    }), Fn(a) || a.label.toLowerCase().includes(n) && o.push(a);
  }
  return o;
}
function bC(r) {
  if (r.length === 0)
    return !0;
  for (const e of r)
    if (!("group" in e) || e.items.length > 0)
      return !1;
  return !0;
}
function fd(r, e = /* @__PURE__ */ new Set()) {
  if (Array.isArray(r))
    for (const t of r)
      if (Fn(t))
        fd(t.items, e);
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
function pd({
  data: r,
  withCheckIcon: e,
  value: t,
  checkIconPosition: n,
  unstyled: o,
  renderOption: i
}) {
  if (!Fn(r)) {
    const s = CC(t, r.value), c = e && s && /* @__PURE__ */ y.jsx(ps, { className: Xe.optionsDropdownCheckIcon }), l = /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      n === "left" && c,
      /* @__PURE__ */ y.jsx("span", { children: r.label }),
      n === "right" && c
    ] });
    return /* @__PURE__ */ y.jsx(
      le.Option,
      {
        value: r.value,
        disabled: r.disabled,
        className: qt({ [Xe.optionsDropdownOption]: !o }),
        "data-reverse": n === "right" || void 0,
        "data-checked": s || void 0,
        "aria-selected": s,
        active: s,
        children: typeof i == "function" ? i({ option: r, checked: s }) : l
      }
    );
  }
  const a = r.items.map((s) => /* @__PURE__ */ y.jsx(
    pd,
    {
      data: s,
      value: t,
      unstyled: o,
      withCheckIcon: e,
      checkIconPosition: n,
      renderOption: i
    },
    s.value
  ));
  return /* @__PURE__ */ y.jsx(le.Group, { label: r.group, children: a });
}
function gd({
  data: r,
  hidden: e,
  hiddenWhenEmpty: t,
  filter: n,
  search: o,
  limit: i,
  maxDropdownHeight: a,
  withScrollArea: s = !0,
  filterOptions: c = !0,
  withCheckIcon: l = !1,
  value: u,
  checkIconPosition: h,
  nothingFoundMessage: d,
  unstyled: f,
  labelId: p,
  renderOption: g,
  scrollAreaProps: m,
  "aria-label": C
}) {
  fd(r);
  const b = typeof o == "string" ? (n || hd)({
    options: r,
    search: c ? o : "",
    limit: i ?? 1 / 0
  }) : r, w = bC(b), E = b.map((T) => /* @__PURE__ */ y.jsx(
    pd,
    {
      data: T,
      withCheckIcon: l,
      value: u,
      checkIconPosition: h,
      unstyled: f,
      renderOption: g
    },
    Fn(T) ? T.group : T.value
  ));
  return /* @__PURE__ */ y.jsx(le.Dropdown, { hidden: e || t && w, children: /* @__PURE__ */ y.jsxs(le.Options, { labelledBy: p, "aria-label": C, children: [
    s ? /* @__PURE__ */ y.jsx(
      Vn.Autosize,
      {
        mah: a ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...m,
        children: E
      }
    ) : E,
    w && d && /* @__PURE__ */ y.jsx(le.Empty, { children: d })
  ] }) });
}
const wC = {}, ms = ce((r, e) => {
  const t = G("Autocomplete", wC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: a,
    dropdownOpened: s,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: h,
    onBlur: d,
    onClick: f,
    onChange: p,
    data: g,
    value: m,
    defaultValue: C,
    selectFirstOptionOnChange: v,
    onOptionSubmit: b,
    comboboxProps: w,
    readOnly: E,
    disabled: T,
    filter: k,
    limit: I,
    withScrollArea: D,
    maxDropdownHeight: U,
    size: Y,
    id: X,
    renderOption: ae,
    autoComplete: $,
    scrollAreaProps: q,
    ...M
  } = t, j = cr(X), L = Xu(g), H = ts(L), [te, Ee] = kr({
    value: m,
    defaultValue: C,
    finalValue: "",
    onChange: p
  }), Ce = ai({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: u,
    onDropdownClose: () => {
      l == null || l(), Ce.resetSelectedOption();
    }
  }), { resolvedClassNames: qe, resolvedStyles: yt } = su({
    props: t,
    styles: o,
    classNames: n
  });
  return W(() => {
    v && Ce.selectFirstOption();
  }, [v, te]), /* @__PURE__ */ y.jsxs(
    le,
    {
      store: Ce,
      __staticSelector: "Autocomplete",
      classNames: qe,
      styles: yt,
      unstyled: i,
      readOnly: E,
      onOptionSubmit: (Re) => {
        b == null || b(Re), Ee(H[Re].label), Ce.closeDropdown();
      },
      size: Y,
      ...w,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { autoComplete: $, children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            ref: e,
            ...M,
            size: Y,
            __staticSelector: "Autocomplete",
            disabled: T,
            readOnly: E,
            value: te,
            onChange: (Re) => {
              Ee(Re.currentTarget.value), Ce.openDropdown(), v && Ce.selectFirstOption();
            },
            onFocus: (Re) => {
              Ce.openDropdown(), h == null || h(Re);
            },
            onBlur: (Re) => {
              Ce.closeDropdown(), d == null || d(Re);
            },
            onClick: (Re) => {
              Ce.openDropdown(), f == null || f(Re);
            },
            classNames: qe,
            styles: yt,
            unstyled: i,
            id: j
          }
        ) }),
        /* @__PURE__ */ y.jsx(
          gd,
          {
            data: L,
            hidden: E || T,
            filter: k,
            search: te,
            limit: I,
            hiddenWhenEmpty: !0,
            withScrollArea: D,
            maxDropdownHeight: U,
            unstyled: i,
            labelId: M.label ? `${j}-label` : void 0,
            "aria-label": M.label ? void 0 : M["aria-label"],
            renderOption: ae,
            scrollAreaProps: q
          }
        )
      ]
    }
  );
});
ms.classes = { ...Yt.classes, ...le.classes };
ms.displayName = "@mantine/core/Autocomplete";
var si = { root: "m_77c9d27d", inner: "m_80f1301b", label: "m_811560b9", section: "m_a74036a", loader: "m_a25b86ee", group: "m_80d6d844" };
const Gc = {
  orientation: "horizontal"
}, SC = (r, { borderWidth: e }) => ({
  group: { "--button-border-width": A(e) }
}), ys = ce((r, e) => {
  const t = G("ButtonGroup", Gc, r), {
    className: n,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    orientation: c,
    vars: l,
    borderWidth: u,
    variant: h,
    mod: d,
    ...f
  } = G("ButtonGroup", Gc, r), p = pe({
    name: "ButtonGroup",
    props: t,
    classes: si,
    className: n,
    style: o,
    classNames: i,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: SC,
    rootSelector: "group"
  });
  return /* @__PURE__ */ y.jsx(
    J,
    {
      ...p("group"),
      ref: e,
      variant: h,
      mod: [{ "data-orientation": c }, d],
      role: "group",
      ...f
    }
  );
});
ys.classes = si;
ys.displayName = "@mantine/core/ButtonGroup";
const EC = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${A(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, TC = {}, IC = (r, { radius: e, color: t, gradient: n, variant: o, size: i, justify: a, autoContrast: s }) => {
  const c = r.variantColorResolver({
    color: t || r.primaryColor,
    theme: r,
    gradient: n,
    variant: o || "filled",
    autoContrast: s
  });
  return {
    root: {
      "--button-justify": a,
      "--button-height": Ae(i, "button-height"),
      "--button-padding-x": Ae(i, "button-padding-x"),
      "--button-fz": i != null && i.includes("compact") ? it(i.replace("compact-", "")) : it(i),
      "--button-radius": e === void 0 ? void 0 : It(e),
      "--button-bg": t || o ? c.background : void 0,
      "--button-hover": t || o ? c.hover : void 0,
      "--button-color": c.color,
      "--button-bd": t || o ? c.border : void 0,
      "--button-hover-color": t || o ? c.hoverColor : void 0
    }
  };
}, Jn = Gt((r, e) => {
  const t = G("Button", TC, r), {
    style: n,
    vars: o,
    className: i,
    color: a,
    disabled: s,
    children: c,
    leftSection: l,
    rightSection: u,
    fullWidth: h,
    variant: d,
    radius: f,
    loading: p,
    loaderProps: g,
    gradient: m,
    classNames: C,
    styles: v,
    unstyled: b,
    "data-disabled": w,
    autoContrast: E,
    mod: T,
    ...k
  } = t, I = pe({
    name: "Button",
    props: t,
    classes: si,
    className: i,
    style: n,
    classNames: C,
    styles: v,
    unstyled: b,
    vars: o,
    varsResolver: IC
  }), D = !!l, U = !!u;
  return /* @__PURE__ */ y.jsxs(
    Mr,
    {
      ref: e,
      ...I("root", { active: !s && !p && !w }),
      unstyled: b,
      variant: d,
      disabled: s || p,
      mod: [
        {
          disabled: s || w,
          loading: p,
          block: h,
          "with-left-section": D,
          "with-right-section": U
        },
        T
      ],
      ...k,
      children: [
        /* @__PURE__ */ y.jsx(ei, { mounted: !!p, transition: EC, duration: 150, children: (Y) => /* @__PURE__ */ y.jsx(J, { component: "span", ...I("loader", { style: Y }), "aria-hidden": !0, children: /* @__PURE__ */ y.jsx(
          Wn,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...g
          }
        ) }) }),
        /* @__PURE__ */ y.jsxs("span", { ...I("inner"), children: [
          l && /* @__PURE__ */ y.jsx(J, { component: "span", ...I("section"), mod: { position: "left" }, children: l }),
          /* @__PURE__ */ y.jsx(J, { component: "span", mod: { loading: p }, ...I("label"), children: c }),
          u && /* @__PURE__ */ y.jsx(J, { component: "span", ...I("section"), mod: { position: "right" }, children: u })
        ] })
      ]
    }
  );
});
Jn.classes = si;
Jn.displayName = "@mantine/core/Button";
Jn.Group = ys;
var md = { root: "m_4451eb3a" };
const _C = {}, vs = Gt((r, e) => {
  const t = G("Center", _C, r), { classNames: n, className: o, style: i, styles: a, unstyled: s, vars: c, inline: l, mod: u, ...h } = t, d = pe({
    name: "Center",
    props: t,
    classes: md,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c
  });
  return /* @__PURE__ */ y.jsx(J, { ref: e, mod: [{ inline: l }, u], ...d("root"), ...h });
});
vs.classes = md;
vs.displayName = "@mantine/core/Center";
var yd = { root: "m_7485cace" };
const kC = {}, AC = (r, { size: e, fluid: t }) => ({
  root: {
    "--container-size": t ? void 0 : Ae(e, "container-size")
  }
}), bs = ce((r, e) => {
  const t = G("Container", kC, r), { classNames: n, className: o, style: i, styles: a, unstyled: s, vars: c, fluid: l, mod: u, ...h } = t, d = pe({
    name: "Container",
    classes: yd,
    props: t,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: AC
  });
  return /* @__PURE__ */ y.jsx(J, { ref: e, mod: [{ fluid: l }, u], ...d("root"), ...h });
});
bs.classes = yd;
bs.displayName = "@mantine/core/Container";
const RC = {
  searchable: !1,
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left"
}, Cs = ce((r, e) => {
  const t = G("Select", RC, r), {
    classNames: n,
    styles: o,
    unstyled: i,
    vars: a,
    dropdownOpened: s,
    defaultDropdownOpened: c,
    onDropdownClose: l,
    onDropdownOpen: u,
    onFocus: h,
    onBlur: d,
    onClick: f,
    onChange: p,
    data: g,
    value: m,
    defaultValue: C,
    selectFirstOptionOnChange: v,
    onOptionSubmit: b,
    comboboxProps: w,
    readOnly: E,
    disabled: T,
    filter: k,
    limit: I,
    withScrollArea: D,
    maxDropdownHeight: U,
    size: Y,
    searchable: X,
    rightSection: ae,
    checkIconPosition: $,
    withCheckIcon: q,
    nothingFoundMessage: M,
    name: j,
    form: L,
    searchValue: H,
    defaultSearchValue: te,
    onSearchChange: Ee,
    allowDeselect: Ce,
    error: qe,
    rightSectionPointerEvents: yt,
    id: Re,
    clearable: dr,
    clearButtonProps: Qt,
    hiddenInputProps: hr,
    renderOption: fr,
    onClear: pr,
    autoComplete: hn,
    scrollAreaProps: fn,
    ...xt
  } = t, Te = ho(() => Xu(g), [g]), Lt = ho(() => ts(Te), [Te]), Dr = cr(Re), [ze, gr, jr] = kr({
    value: m,
    defaultValue: C,
    finalValue: null,
    onChange: p
  }), $e = typeof ze == "string" ? Lt[ze] : void 0, Dt = Zg($e), [Fr, lt] = kr({
    value: H,
    defaultValue: te,
    finalValue: $e ? $e.label : "",
    onChange: Ee
  }), vt = ai({
    opened: s,
    defaultOpened: c,
    onDropdownOpen: () => {
      u == null || u(), vt.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      l == null || l(), vt.resetSelectedOption();
    }
  }), { resolvedClassNames: Ns, resolvedStyles: Os } = su({
    props: t,
    styles: o,
    classNames: n
  });
  W(() => {
    v && vt.selectFirstOption();
  }, [v, ze]), W(() => {
    m === null && lt(""), typeof m == "string" && $e && ((Dt == null ? void 0 : Dt.value) !== $e.value || (Dt == null ? void 0 : Dt.label) !== $e.label) && lt($e.label);
  }, [m, $e]);
  const Ms = dr && !!ze && !T && !E && /* @__PURE__ */ y.jsx(
    le.ClearButton,
    {
      size: Y,
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
        classNames: Ns,
        styles: Os,
        unstyled: i,
        readOnly: E,
        onOptionSubmit: (ut) => {
          b == null || b(ut);
          const jt = Ce && Lt[ut].value === ze ? null : Lt[ut], fi = jt ? jt.value : null;
          fi !== ze && gr(fi, jt), !jr && lt(typeof fi == "string" && (jt == null ? void 0 : jt.label) || ""), vt.closeDropdown();
        },
        size: Y,
        ...w,
        children: [
          /* @__PURE__ */ y.jsx(le.Target, { targetType: X ? "input" : "button", autoComplete: hn, children: /* @__PURE__ */ y.jsx(
            Yt,
            {
              id: Dr,
              ref: e,
              rightSection: ae || Ms || /* @__PURE__ */ y.jsx(le.Chevron, { size: Y, error: qe, unstyled: i }),
              rightSectionPointerEvents: yt || (Ms ? "all" : "none"),
              ...xt,
              size: Y,
              __staticSelector: "Select",
              disabled: T,
              readOnly: E || !X,
              value: Fr,
              onChange: (ut) => {
                lt(ut.currentTarget.value), vt.openDropdown(), v && vt.selectFirstOption();
              },
              onFocus: (ut) => {
                X && vt.openDropdown(), h == null || h(ut);
              },
              onBlur: (ut) => {
                var jt;
                X && vt.closeDropdown(), lt(ze != null && ((jt = Lt[ze]) == null ? void 0 : jt.label) || ""), d == null || d(ut);
              },
              onClick: (ut) => {
                X ? vt.openDropdown() : vt.toggleDropdown(), f == null || f(ut);
              },
              classNames: Ns,
              styles: Os,
              unstyled: i,
              pointer: !X,
              error: qe
            }
          ) }),
          /* @__PURE__ */ y.jsx(
            gd,
            {
              data: Te,
              hidden: E || T,
              filter: k,
              search: Fr,
              limit: I,
              hiddenWhenEmpty: !M,
              withScrollArea: D,
              maxDropdownHeight: U,
              filterOptions: X && ($e == null ? void 0 : $e.label) !== Fr,
              value: ze,
              checkIconPosition: $,
              withCheckIcon: q,
              nothingFoundMessage: M,
              unstyled: i,
              labelId: xt.label ? `${Dr}-label` : void 0,
              "aria-label": xt.label ? void 0 : xt["aria-label"],
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
        value: ze,
        name: j,
        form: L,
        disabled: T,
        ...hr
      }
    )
  ] });
});
Cs.classes = { ...Yt.classes, ...le.classes };
Cs.displayName = "@mantine/core/Select";
const PC = {}, vd = ce((r, e) => {
  const { w: t, h: n, miw: o, mih: i, ...a } = G("Space", PC, r);
  return /* @__PURE__ */ y.jsx(J, { ref: e, ...a, w: t, miw: o ?? t, h: n, mih: i ?? n });
});
vd.displayName = "@mantine/core/Space";
var bd = { root: "m_6d731127" };
const NC = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
}, OC = (r, { gap: e, align: t, justify: n }) => ({
  root: {
    "--stack-gap": Ta(e),
    "--stack-align": t,
    "--stack-justify": n
  }
}), ws = ce((r, e) => {
  const t = G("Stack", NC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    vars: c,
    align: l,
    justify: u,
    gap: h,
    variant: d,
    ...f
  } = t, p = pe({
    name: "Stack",
    props: t,
    classes: bd,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: c,
    varsResolver: OC
  });
  return /* @__PURE__ */ y.jsx(J, { ref: e, ...p("root"), variant: d, ...f });
});
ws.classes = bd;
ws.displayName = "@mantine/core/Stack";
const MC = {}, Tr = ce((r, e) => {
  const t = G("TextInput", MC, r);
  return /* @__PURE__ */ y.jsx(Yt, { component: "input", ref: e, ...t, __staticSelector: "TextInput" });
});
Tr.classes = Yt.classes;
Tr.displayName = "@mantine/core/TextInput";
const xC = ["h1", "h2", "h3", "h4", "h5", "h6"];
function LC(r, e) {
  const t = e !== void 0 ? e : `h${r}`;
  return xC.includes(t) ? {
    fontSize: `var(--mantine-${t}-font-size)`,
    fontWeight: `var(--mantine-${t}-font-weight)`,
    lineHeight: `var(--mantine-${t}-line-height)`
  } : {
    fontSize: A(t),
    fontWeight: `var(--mantine-h${r}-font-weight)`,
    lineHeight: `var(--mantine-h${r}-line-height)`
  };
}
var Cd = { root: "m_8a5d1357" };
const DC = {
  order: 1
}, jC = (r, { order: e, size: t, lineClamp: n, textWrap: o }) => {
  const i = LC(e, t);
  return {
    root: {
      "--title-fw": i.fontWeight,
      "--title-lh": i.lineHeight,
      "--title-fz": i.fontSize,
      "--title-line-clamp": typeof n == "number" ? n.toString() : void 0,
      "--title-text-wrap": o
    }
  };
}, xo = ce((r, e) => {
  const t = G("Title", DC, r), {
    classNames: n,
    className: o,
    style: i,
    styles: a,
    unstyled: s,
    order: c,
    vars: l,
    size: u,
    variant: h,
    lineClamp: d,
    textWrap: f,
    mod: p,
    ...g
  } = t, m = pe({
    name: "Title",
    props: t,
    classes: Cd,
    className: o,
    style: i,
    classNames: n,
    styles: a,
    unstyled: s,
    vars: l,
    varsResolver: jC
  });
  return [1, 2, 3, 4, 5, 6].includes(c) ? /* @__PURE__ */ y.jsx(
    J,
    {
      ...m("root"),
      component: `h${c}`,
      variant: h,
      ref: e,
      mod: [{ order: c, "data-line-clamp": typeof d == "number" }, p],
      size: u,
      ...g
    }
  ) : null;
});
xo.classes = Cd;
xo.displayName = "@mantine/core/Title";
var wd = { exports: {} }, FC = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", UC = FC, HC = UC;
function Sd() {
}
function Ed() {
}
Ed.resetWarningCache = Sd;
var BC = function() {
  function r(n, o, i, a, s, c) {
    if (c !== HC) {
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
    checkPropTypes: Ed,
    resetWarningCache: Sd
  };
  return t.PropTypes = t, t;
};
wd.exports = BC();
var zC = wd.exports;
const mr = /* @__PURE__ */ ah(zC);
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
}, KC = Object.defineProperty, qC = Object.defineProperties, VC = Object.getOwnPropertyDescriptors, Lo = Object.getOwnPropertySymbols, Td = Object.prototype.hasOwnProperty, Id = Object.prototype.propertyIsEnumerable, Wc = (r, e, t) => e in r ? KC(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, Yc = (r, e) => {
  for (var t in e || (e = {}))
    Td.call(e, t) && Wc(r, t, e[t]);
  if (Lo)
    for (var t of Lo(e))
      Id.call(e, t) && Wc(r, t, e[t]);
  return r;
}, GC = (r, e) => qC(r, VC(e)), WC = (r, e) => {
  var t = {};
  for (var n in r)
    Td.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Lo)
    for (var n of Lo(r))
      e.indexOf(n) < 0 && Id.call(r, n) && (t[n] = r[n]);
  return t;
}, Ss = (r, e, t) => {
  const n = ye(
    (o, i) => {
      var a = o, { color: s = "currentColor", size: c = 24, stroke: l = 2, children: u } = a, h = WC(a, ["color", "size", "stroke", "children"]);
      return xi(
        "svg",
        Yc(GC(Yc({
          ref: i
        }, $C), {
          width: c,
          height: c,
          stroke: s,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${r}`
        }), h),
        [...t.map(([d, f]) => xi(d, f)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: mr.string,
    size: mr.oneOfType([mr.string, mr.number]),
    stroke: mr.oneOfType([mr.string, mr.number])
  }, n.displayName = `${e}`, n;
}, YC = Ss("arrow-down", "IconArrowDown", [
  ["path", { d: "M12 5l0 14", key: "svg-0" }],
  ["path", { d: "M18 13l-6 6", key: "svg-1" }],
  ["path", { d: "M6 13l6 6", key: "svg-2" }]
]), QC = Ss("check", "IconCheck", [
  ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]
]), JC = Ss("dots", "IconDots", [
  ["path", { d: "M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
  ["path", { d: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
  ["path", { d: "M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]
]);
function XC({ indeterminate: r, ...e }) {
  return r ? /* @__PURE__ */ y.jsx(JC, { ...e }) : /* @__PURE__ */ y.jsx(QC, { ...e });
}
const ZC = {
  components: {
    Checkbox: xr.extend({
      defaultProps: {
        icon: XC,
        variant: "outline"
      },
      classNames: {
        input: "checkBox"
      }
    })
  }
}, Qc = {
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
}, ew = {
  auth: {
    clientId: "0fcd615b-f2b7-4514-9046-7b3e545ba341",
    authority: Qc.authorities.signUpSignIn.authority,
    knownAuthorities: [Qc.authorityDomain],
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
            case we.Error:
              console.error(e);
              return;
            case we.Info:
              console.info(e);
              return;
            case we.Verbose:
              console.debug(e);
              return;
            case we.Warning:
              console.warn(e);
              return;
            default:
              return;
          }
      }
    }
  }
};
class tw {
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
      format: a,
      baseUrl: s,
      cancelToken: c,
      ...l
    }) => {
      const u = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, h = this.mergeRequestParams(l, u), d = i && this.toQueryString(i), f = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], p = a || h.format;
      return this.customFetch(`${s || this.baseUrl || ""}${n}${d ? `?${d}` : ""}`, {
        ...h,
        headers: {
          ...h.headers || {},
          ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
        },
        signal: (c ? this.createAbortSignal(c) : h.signal) || null,
        body: typeof e > "u" || e === null ? null : f(e)
      }).then(async (g) => {
        const m = g;
        m.data = null, m.error = null;
        const C = p ? await g[p]().then((v) => (m.ok ? m.data = v : m.error = v, m)).catch((v) => (m.error = v, m)) : m;
        if (c && this.abortControllers.delete(c), !g.ok)
          throw C;
        return C;
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
class rw extends tw {
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
      dictionaryV1Update: (t, n, o, i, a = {}) => this.request({
        path: `/api/Dictionary/v1/${t}/${n}/${o}`,
        method: "PUT",
        body: i,
        secure: !0,
        type: "application/json",
        ...a
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
      domainV3Update: (t, n, o, i, a = {}) => this.request({
        path: `/api/Domain/v3/${t}/${n}/${o}`,
        method: "PUT",
        body: i,
        secure: !0,
        type: "application/json",
        ...a
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
class Un extends rw {
  constructor(e) {
    super({ baseUrl: e });
  }
}
const _d = {
  test: "https://test.bsdd.buildingsmart.org",
  production: "https://api.bsdd.buildingsmart.org"
}, nw = "production", Xn = Dh, Me = Nn;
function ow(r) {
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
var iw = /* @__PURE__ */ (() => typeof Symbol == "function" && Symbol.observable || "@@observable")(), Jc = iw, _i = () => Math.random().toString(36).substring(7).split("").join("."), aw = {
  INIT: `@@redux/INIT${_i()}`,
  REPLACE: `@@redux/REPLACE${_i()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${_i()}`
}, Do = aw;
function Es(r) {
  if (typeof r != "object" || r === null)
    return !1;
  let e = r;
  for (; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(r) === e || Object.getPrototypeOf(r) === null;
}
function kd(r, e, t) {
  if (typeof r != "function")
    throw new Error(Oe(2));
  if (typeof e == "function" && typeof t == "function" || typeof t == "function" && typeof arguments[3] == "function")
    throw new Error(Oe(0));
  if (typeof e == "function" && typeof t > "u" && (t = e, e = void 0), typeof t < "u") {
    if (typeof t != "function")
      throw new Error(Oe(1));
    return t(kd)(r, e);
  }
  let n = r, o = e, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((m, C) => {
      a.set(C, m);
    }));
  }
  function u() {
    if (c)
      throw new Error(Oe(3));
    return o;
  }
  function h(m) {
    if (typeof m != "function")
      throw new Error(Oe(4));
    if (c)
      throw new Error(Oe(5));
    let C = !0;
    l();
    const v = s++;
    return a.set(v, m), function() {
      if (C) {
        if (c)
          throw new Error(Oe(6));
        C = !1, l(), a.delete(v), i = null;
      }
    };
  }
  function d(m) {
    if (!Es(m))
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
    return (i = a).forEach((v) => {
      v();
    }), m;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(Oe(10));
    n = m, d({
      type: Do.REPLACE
    });
  }
  function p() {
    const m = h;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(C) {
        if (typeof C != "object" || C === null)
          throw new Error(Oe(11));
        function v() {
          const w = C;
          w.next && w.next(u());
        }
        return v(), {
          unsubscribe: m(v)
        };
      },
      [Jc]() {
        return this;
      }
    };
  }
  return d({
    type: Do.INIT
  }), {
    dispatch: d,
    subscribe: h,
    getState: u,
    replaceReducer: f,
    [Jc]: p
  };
}
function sw(r) {
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
function cw(r) {
  const e = Object.keys(r), t = {};
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    typeof r[a] == "function" && (t[a] = r[a]);
  }
  const n = Object.keys(t);
  let o;
  try {
    sw(t);
  } catch (i) {
    o = i;
  }
  return function(a = {}, s) {
    if (o)
      throw o;
    let c = !1;
    const l = {};
    for (let u = 0; u < n.length; u++) {
      const h = n[u], d = t[h], f = a[h], p = d(f, s);
      if (typeof p > "u")
        throw s && s.type, new Error(Oe(14));
      l[h] = p, c = c || p !== f;
    }
    return c = c || n.length !== Object.keys(a).length, c ? l : a;
  };
}
function jo(...r) {
  return r.length === 0 ? (e) => e : r.length === 1 ? r[0] : r.reduce((e, t) => (...n) => e(t(...n)));
}
function lw(...r) {
  return (e) => (t, n) => {
    const o = e(t, n);
    let i = () => {
      throw new Error(Oe(15));
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = r.map((c) => c(a));
    return i = jo(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function uw(r) {
  return Es(r) && "type" in r && typeof r.type == "string";
}
var Ad = Symbol.for("immer-nothing"), Xc = Symbol.for("immer-draftable"), st = Symbol.for("immer-state");
function Ct(r, ...e) {
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var an = Object.getPrototypeOf;
function ar(r) {
  return !!r && !!r[st];
}
function Kt(r) {
  var e;
  return r ? Rd(r) || Array.isArray(r) || !!r[Xc] || !!((e = r.constructor) != null && e[Xc]) || li(r) || ui(r) : !1;
}
var dw = Object.prototype.constructor.toString();
function Rd(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = an(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === dw;
}
function Fo(r, e) {
  ci(r) === 0 ? Reflect.ownKeys(r).forEach((t) => {
    e(t, r[t], r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function ci(r) {
  const e = r[st];
  return e ? e.type_ : Array.isArray(r) ? 1 : li(r) ? 2 : ui(r) ? 3 : 0;
}
function ia(r, e) {
  return ci(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function Pd(r, e, t) {
  const n = ci(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function hw(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function li(r) {
  return r instanceof Map;
}
function ui(r) {
  return r instanceof Set;
}
function vr(r) {
  return r.copy_ || r.base_;
}
function aa(r, e) {
  if (li(r))
    return new Map(r);
  if (ui(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  const t = Rd(r);
  if (e === !0 || e === "class_only" && !t) {
    const n = Object.getOwnPropertyDescriptors(r);
    delete n[st];
    let o = Reflect.ownKeys(n);
    for (let i = 0; i < o.length; i++) {
      const a = o[i], s = n[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: r[a]
      });
    }
    return Object.create(an(r), n);
  } else {
    const n = an(r);
    if (n !== null && t)
      return { ...r };
    const o = Object.create(n);
    return Object.assign(o, r);
  }
}
function Ts(r, e = !1) {
  return di(r) || ar(r) || !Kt(r) || (ci(r) > 1 && (r.set = r.add = r.clear = r.delete = fw), Object.freeze(r), e && Object.entries(r).forEach(([t, n]) => Ts(n, !0))), r;
}
function fw() {
  Ct(2);
}
function di(r) {
  return Object.isFrozen(r);
}
var pw = {};
function Rr(r) {
  const e = pw[r];
  return e || Ct(0, r), e;
}
var Hn;
function Nd() {
  return Hn;
}
function gw(r, e) {
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
function Zc(r, e) {
  e && (Rr("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function sa(r) {
  ca(r), r.drafts_.forEach(mw), r.drafts_ = null;
}
function ca(r) {
  r === Hn && (Hn = r.parent_);
}
function el(r) {
  return Hn = gw(Hn, r);
}
function mw(r) {
  const e = r[st];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function tl(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[st].modified_ && (sa(e), Ct(4)), Kt(r) && (r = Uo(e, r), e.parent_ || Ho(e, r)), e.patches_ && Rr("Patches").generateReplacementPatches_(
    t[st].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = Uo(e, t, []), sa(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== Ad ? r : void 0;
}
function Uo(r, e, t) {
  if (di(e))
    return e;
  const n = e[st];
  if (!n)
    return Fo(
      e,
      (o, i) => rl(r, n, e, o, i, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return Ho(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let i = o, a = !1;
    n.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Fo(
      i,
      (s, c) => rl(r, n, o, s, c, t, a)
    ), Ho(r, o, !1), t && r.patches_ && Rr("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function rl(r, e, t, n, o, i, a) {
  if (ar(o)) {
    const s = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ia(e.assigned_, n) ? i.concat(n) : void 0, c = Uo(r, o, s);
    if (Pd(t, n, c), ar(c))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    a && t.add(o);
  if (Kt(o) && !di(o)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    Uo(r, o), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(t, n) && Ho(r, o);
  }
}
function Ho(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Ts(e, t);
}
function yw(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Nd(),
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
  let o = n, i = Is;
  t && (o = [n], i = Bn);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return n.draft_ = s, n.revoke_ = a, s;
}
var Is = {
  get(r, e) {
    if (e === st)
      return r;
    const t = vr(r);
    if (!ia(t, e))
      return vw(r, t, e);
    const n = t[e];
    return r.finalized_ || !Kt(n) ? n : n === ki(r.base_, e) ? (Ai(r), r.copy_[e] = ua(n, r)) : n;
  },
  has(r, e) {
    return e in vr(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(vr(r));
  },
  set(r, e, t) {
    const n = Od(vr(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const o = ki(vr(r), e), i = o == null ? void 0 : o[st];
      if (i && i.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (hw(t, o) && (t !== void 0 || ia(r.base_, e)))
        return !0;
      Ai(r), la(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return ki(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, Ai(r), la(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
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
    Ct(11);
  },
  getPrototypeOf(r) {
    return an(r.base_);
  },
  setPrototypeOf() {
    Ct(12);
  }
}, Bn = {};
Fo(Is, (r, e) => {
  Bn[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Bn.deleteProperty = function(r, e) {
  return Bn.set.call(this, r, e, void 0);
};
Bn.set = function(r, e, t) {
  return Is.set.call(this, r[0], e, t, r[0]);
};
function ki(r, e) {
  const t = r[st];
  return (t ? vr(t) : r)[e];
}
function vw(r, e, t) {
  var o;
  const n = Od(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = n.get) == null ? void 0 : o.call(r.draft_)
  ) : void 0;
}
function Od(r, e) {
  if (!(e in r))
    return;
  let t = an(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = an(t);
  }
}
function la(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && la(r.parent_));
}
function Ai(r) {
  r.copy_ || (r.copy_ = aa(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var bw = class {
  constructor(r) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
      if (typeof e == "function" && typeof t != "function") {
        const i = t;
        t = e;
        const a = this;
        return function(c = i, ...l) {
          return a.produce(c, (u) => t.call(this, u, ...l));
        };
      }
      typeof t != "function" && Ct(6), n !== void 0 && typeof n != "function" && Ct(7);
      let o;
      if (Kt(e)) {
        const i = el(this), a = ua(e, void 0);
        let s = !0;
        try {
          o = t(a), s = !1;
        } finally {
          s ? sa(i) : ca(i);
        }
        return Zc(i, n), tl(o, i);
      } else if (!e || typeof e != "object") {
        if (o = t(e), o === void 0 && (o = e), o === Ad && (o = void 0), this.autoFreeze_ && Ts(o, !0), n) {
          const i = [], a = [];
          Rr("Patches").generateReplacementPatches_(e, o, i, a), n(i, a);
        }
        return o;
      } else
        Ct(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (a, ...s) => this.produceWithPatches(a, (c) => e(c, ...s));
      let n, o;
      return [this.produce(e, t, (a, s) => {
        n = a, o = s;
      }), n, o];
    }, typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze), typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    Kt(r) || Ct(8), ar(r) && (r = Md(r));
    const e = el(this), t = ua(r, void 0);
    return t[st].isManual_ = !0, ca(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[st];
    (!t || !t.isManual_) && Ct(9);
    const { scope_: n } = t;
    return Zc(n, e), tl(void 0, n);
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
    const n = Rr("Patches").applyPatches_;
    return ar(r) ? n(r, e) : this.produce(
      r,
      (o) => n(o, e)
    );
  }
};
function ua(r, e) {
  const t = li(r) ? Rr("MapSet").proxyMap_(r, e) : ui(r) ? Rr("MapSet").proxySet_(r, e) : yw(r, e);
  return (e ? e.scope_ : Nd()).drafts_.push(t), t;
}
function Md(r) {
  return ar(r) || Ct(10, r), xd(r);
}
function xd(r) {
  if (!Kt(r) || di(r))
    return r;
  const e = r[st];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = aa(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = aa(r, !0);
  return Fo(t, (n, o) => {
    Pd(t, n, xd(o));
  }), e && (e.finalized_ = !1), t;
}
var ct = new bw(), Ld = ct.produce;
ct.produceWithPatches.bind(
  ct
);
ct.setAutoFreeze.bind(ct);
ct.setUseStrictShallowCopy.bind(ct);
ct.applyPatches.bind(ct);
ct.createDraft.bind(ct);
ct.finishDraft.bind(ct);
function Cw(r, e = `expected a function, instead received ${typeof r}`) {
  if (typeof r != "function")
    throw new TypeError(e);
}
function ww(r, e = `expected an object, instead received ${typeof r}`) {
  if (typeof r != "object")
    throw new TypeError(e);
}
function Sw(r, e = "expected all items to be functions, instead received the following types: ") {
  if (!r.every((t) => typeof t == "function")) {
    const t = r.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${e}[${t}]`);
  }
}
var nl = (r) => Array.isArray(r) ? r : [r];
function Ew(r) {
  const e = Array.isArray(r[0]) ? r[0] : r;
  return Sw(
    e,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), e;
}
function Tw(r, e) {
  const t = [], { length: n } = r;
  for (let o = 0; o < n; o++)
    t.push(r[o].apply(null, e));
  return t;
}
var Iw = class {
  constructor(r) {
    this.value = r;
  }
  deref() {
    return this.value;
  }
}, _w = typeof WeakRef < "u" ? WeakRef : Iw, kw = 0, ol = 1;
function ao() {
  return {
    s: kw,
    v: void 0,
    o: null,
    p: null
  };
}
function _s(r, e = {}) {
  let t = ao();
  const { resultEqualityCheck: n } = e;
  let o, i = 0;
  function a() {
    var h;
    let s = t;
    const { length: c } = arguments;
    for (let d = 0, f = c; d < f; d++) {
      const p = arguments[d];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let g = s.o;
        g === null && (s.o = g = /* @__PURE__ */ new WeakMap());
        const m = g.get(p);
        m === void 0 ? (s = ao(), g.set(p, s)) : s = m;
      } else {
        let g = s.p;
        g === null && (s.p = g = /* @__PURE__ */ new Map());
        const m = g.get(p);
        m === void 0 ? (s = ao(), g.set(p, s)) : s = m;
      }
    }
    const l = s;
    let u;
    if (s.s === ol)
      u = s.v;
    else if (u = r.apply(null, arguments), i++, n) {
      const d = ((h = o == null ? void 0 : o.deref) == null ? void 0 : h.call(o)) ?? o;
      d != null && n(d, u) && (u = d, i !== 0 && i--), o = typeof u == "object" && u !== null || typeof u == "function" ? new _w(u) : u;
    }
    return l.s = ol, l.v = u, u;
  }
  return a.clearCache = () => {
    t = ao(), a.resetResultsCount();
  }, a.resultsCount = () => i, a.resetResultsCount = () => {
    i = 0;
  }, a;
}
function Dd(r, ...e) {
  const t = typeof r == "function" ? {
    memoize: r,
    memoizeOptions: e
  } : r, n = (...o) => {
    let i = 0, a = 0, s, c = {}, l = o.pop();
    typeof l == "object" && (c = l, l = o.pop()), Cw(
      l,
      `createSelector expects an output function after the inputs, but received: [${typeof l}]`
    );
    const u = {
      ...t,
      ...c
    }, {
      memoize: h,
      memoizeOptions: d = [],
      argsMemoize: f = _s,
      argsMemoizeOptions: p = [],
      devModeChecks: g = {}
    } = u, m = nl(d), C = nl(p), v = Ew(o), b = h(function() {
      return i++, l.apply(
        null,
        arguments
      );
    }, ...m), w = f(function() {
      a++;
      const T = Tw(
        v,
        arguments
      );
      return s = b.apply(null, T), s;
    }, ...C);
    return Object.assign(w, {
      resultFunc: l,
      memoizedResultFunc: b,
      dependencies: v,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => s,
      recomputations: () => i,
      resetRecomputations: () => {
        i = 0;
      },
      memoize: h,
      argsMemoize: f
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var ur = /* @__PURE__ */ Dd(_s), Aw = Object.assign(
  (r, e = ur) => {
    ww(
      r,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof r}`
    );
    const t = Object.keys(r), n = t.map(
      (i) => r[i]
    );
    return e(
      n,
      (...i) => i.reduce((a, s, c) => (a[t[c]] = s, a), {})
    );
  },
  { withTypes: () => Aw }
);
function jd(r) {
  return ({ dispatch: t, getState: n }) => (o) => (i) => typeof i == "function" ? i(t, n, r) : o(i);
}
var Rw = jd(), Pw = jd, Nw = (...r) => {
  const e = Dd(...r), t = Object.assign((...n) => {
    const o = e(...n), i = (a, ...s) => o(ar(a) ? Md(a) : a, ...s);
    return Object.assign(i, o), i;
  }, {
    withTypes: () => t
  });
  return t;
};
Nw(_s);
var Ow = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? jo : jo.apply(null, arguments);
}, Mw = (r) => r && typeof r.match == "function";
function Nt(r, e) {
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
  return t.toString = () => `${r}`, t.type = r, t.match = (n) => uw(n) && n.type === r, t;
}
var Fd = class wn extends Array {
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
function il(r) {
  return Kt(r) ? Ld(r, () => {
  }) : r;
}
function al(r, e, t) {
  if (r.has(e)) {
    let o = r.get(e);
    return t.update && (o = t.update(o, e, r), r.set(e, o)), o;
  }
  if (!t.insert)
    throw new Error(Je(10));
  const n = t.insert(e, r);
  return r.set(e, n), n;
}
function xw(r) {
  return typeof r == "boolean";
}
var Lw = () => function(e) {
  const {
    thunk: t = !0,
    immutableCheck: n = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = e ?? {};
  let a = new Fd();
  return t && (xw(t) ? a.push(Rw) : a.push(Pw(t.extraArgument))), a;
}, Dw = "RTK_autoBatch", Ud = (r) => (e) => {
  setTimeout(e, r);
}, jw = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ud(10), Fw = (r = {
  type: "raf"
}) => (e) => (...t) => {
  const n = e(...t);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = r.type === "tick" ? queueMicrotask : r.type === "raf" ? jw : r.type === "callback" ? r.queueNotification : Ud(r.timeout), l = () => {
    a = !1, i && (i = !1, s.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const h = () => o && u(), d = n.subscribe(h);
      return s.add(u), () => {
        d(), s.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var h;
      try {
        return o = !((h = u == null ? void 0 : u.meta) != null && h[Dw]), i = !o, i && (a || (a = !0, c(l))), n.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, Uw = (r) => function(t) {
  const {
    autoBatch: n = !0
  } = t ?? {};
  let o = new Fd(r);
  return n && o.push(Fw(typeof n == "object" ? n : void 0)), o;
}, Hw = !0;
function Bw(r) {
  const e = Lw(), {
    reducer: t = void 0,
    middleware: n,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = r || {};
  let s;
  if (typeof t == "function")
    s = t;
  else if (Es(t))
    s = cw(t);
  else
    throw new Error(Je(1));
  let c;
  typeof n == "function" ? c = n(e) : c = e();
  let l = jo;
  o && (l = Ow({
    // Enable capture of stack traces for dispatched Redux actions
    trace: !Hw,
    ...typeof o == "object" && o
  }));
  const u = lw(...c), h = Uw(u);
  let d = typeof a == "function" ? a(h) : h();
  const f = l(...d);
  return kd(s, i, f);
}
function Hd(r) {
  const e = {}, t = [];
  let n;
  const o = {
    addCase(i, a) {
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(Je(28));
      if (s in e)
        throw new Error(Je(29));
      return e[s] = a, o;
    },
    addMatcher(i, a) {
      return t.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      return n = i, o;
    }
  };
  return r(o), [e, t, n];
}
function zw(r) {
  return typeof r == "function";
}
function $w(r, e) {
  let [t, n, o] = Hd(e), i;
  if (zw(r))
    i = () => il(r());
  else {
    const s = il(r);
    i = () => s;
  }
  function a(s = i(), c) {
    let l = [t[c.type], ...n.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, h) => {
      if (h)
        if (ar(u)) {
          const f = h(u, c);
          return f === void 0 ? u : f;
        } else {
          if (Kt(u))
            return Ld(u, (d) => h(d, c));
          {
            const d = h(u, c);
            if (d === void 0) {
              if (u === null)
                return u;
              throw new Error(Je(9));
            }
            return d;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = i, a;
}
var Kw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Bd = (r = 21) => {
  let e = "", t = r;
  for (; t--; )
    e += Kw[Math.random() * 64 | 0];
  return e;
}, qw = (r, e) => Mw(r) ? r.match(e) : r(e);
function Vw(...r) {
  return (e) => r.some((t) => qw(t, e));
}
var Gw = ["name", "message", "stack", "code"], Ri = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, sl = class {
  constructor(r, e) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Ke(this, "_type");
    this.payload = r, this.meta = e;
  }
}, Ww = (r) => {
  if (typeof r == "object" && r !== null) {
    const e = {};
    for (const t of Gw)
      typeof r[t] == "string" && (e[t] = r[t]);
    return e;
  }
  return {
    message: String(r)
  };
}, Lr = /* @__PURE__ */ (() => {
  function r(e, t, n) {
    const o = Nt(e + "/fulfilled", (c, l, u, h) => ({
      payload: c,
      meta: {
        ...h || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = Nt(e + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), a = Nt(e + "/rejected", (c, l, u, h, d) => ({
      payload: h,
      error: (n && n.serializeError || Ww)(c || "Rejected"),
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        rejectedWithValue: !!h,
        requestStatus: "rejected",
        aborted: (c == null ? void 0 : c.name) === "AbortError",
        condition: (c == null ? void 0 : c.name) === "ConditionError"
      }
    }));
    function s(c) {
      return (l, u, h) => {
        const d = n != null && n.idGenerator ? n.idGenerator(c) : Bd(), f = new AbortController();
        let p, g;
        function m(v) {
          g = v, f.abort();
        }
        const C = async function() {
          var w, E;
          let v;
          try {
            let T = (w = n == null ? void 0 : n.condition) == null ? void 0 : w.call(n, c, {
              getState: u,
              extra: h
            });
            if (Qw(T) && (T = await T), T === !1 || f.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const k = new Promise((I, D) => {
              p = () => {
                D({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, f.signal.addEventListener("abort", p);
            });
            l(i(d, c, (E = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : E.call(n, {
              requestId: d,
              arg: c
            }, {
              getState: u,
              extra: h
            }))), v = await Promise.race([k, Promise.resolve(t(c, {
              dispatch: l,
              getState: u,
              extra: h,
              requestId: d,
              signal: f.signal,
              abort: m,
              rejectWithValue: (I, D) => new Ri(I, D),
              fulfillWithValue: (I, D) => new sl(I, D)
            })).then((I) => {
              if (I instanceof Ri)
                throw I;
              return I instanceof sl ? o(I.payload, d, c, I.meta) : o(I, d, c);
            })]);
          } catch (T) {
            v = T instanceof Ri ? a(null, d, c, T.payload, T.meta) : a(T, d, c);
          } finally {
            p && f.signal.removeEventListener("abort", p);
          }
          return n && !n.dispatchConditionRejection && a.match(v) && v.meta.condition || l(v), v;
        }();
        return Object.assign(C, {
          abort: m,
          requestId: d,
          arg: c,
          unwrap() {
            return C.then(Yw);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: a,
      fulfilled: o,
      settled: Vw(a, o),
      typePrefix: e
    });
  }
  return r.withTypes = () => r, r;
})();
function Yw(r) {
  if (r.meta && r.meta.rejectedWithValue)
    throw r.payload;
  if (r.error)
    throw r.error;
  return r.payload;
}
function Qw(r) {
  return r !== null && typeof r == "object" && typeof r.then == "function";
}
var Jw = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Xw(r, e) {
  return `${r}/${e}`;
}
function Zw({
  creators: r
} = {}) {
  var t;
  const e = (t = r == null ? void 0 : r.asyncThunk) == null ? void 0 : t[Jw];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(Je(11));
    typeof process < "u";
    const s = (typeof o.reducers == "function" ? o.reducers(tS()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(b, w) {
        const E = typeof b == "string" ? b : b.type;
        if (!E)
          throw new Error(Je(12));
        if (E in l.sliceCaseReducersByType)
          throw new Error(Je(13));
        return l.sliceCaseReducersByType[E] = w, u;
      },
      addMatcher(b, w) {
        return l.sliceMatchers.push({
          matcher: b,
          reducer: w
        }), u;
      },
      exposeAction(b, w) {
        return l.actionCreators[b] = w, u;
      },
      exposeCaseReducer(b, w) {
        return l.sliceCaseReducersByName[b] = w, u;
      }
    };
    c.forEach((b) => {
      const w = s[b], E = {
        reducerName: b,
        type: Xw(i, b),
        createNotation: typeof o.reducers == "function"
      };
      nS(w) ? iS(E, w, u, e) : rS(E, w, u);
    });
    function h() {
      const [b = {}, w = [], E = void 0] = typeof o.extraReducers == "function" ? Hd(o.extraReducers) : [o.extraReducers], T = {
        ...b,
        ...l.sliceCaseReducersByType
      };
      return $w(o.initialState, (k) => {
        for (let I in T)
          k.addCase(I, T[I]);
        for (let I of l.sliceMatchers)
          k.addMatcher(I.matcher, I.reducer);
        for (let I of w)
          k.addMatcher(I.matcher, I.reducer);
        E && k.addDefaultCase(E);
      });
    }
    const d = (b) => b, f = /* @__PURE__ */ new Map();
    let p;
    function g(b, w) {
      return p || (p = h()), p(b, w);
    }
    function m() {
      return p || (p = h()), p.getInitialState();
    }
    function C(b, w = !1) {
      function E(k) {
        let I = k[b];
        return typeof I > "u" && w && (I = m()), I;
      }
      function T(k = d) {
        const I = al(f, w, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return al(I, k, {
          insert: () => {
            const D = {};
            for (const [U, Y] of Object.entries(o.selectors ?? {}))
              D[U] = eS(Y, k, m, w);
            return D;
          }
        });
      }
      return {
        reducerPath: b,
        getSelectors: T,
        get selectors() {
          return T(E);
        },
        selectSlice: E
      };
    }
    const v = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: m,
      ...C(a),
      injectInto(b, {
        reducerPath: w,
        ...E
      } = {}) {
        const T = w ?? a;
        return b.inject({
          reducerPath: T,
          reducer: g
        }, E), {
          ...v,
          ...C(T, !0)
        };
      }
    };
    return v;
  };
}
function eS(r, e, t, n) {
  function o(i, ...a) {
    let s = e(i);
    return typeof s > "u" && n && (s = t()), r(s, ...a);
  }
  return o.unwrapped = r, o;
}
var hi = /* @__PURE__ */ Zw();
function tS() {
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
function rS({
  type: r,
  reducerName: e,
  createNotation: t
}, n, o) {
  let i, a;
  if ("reducer" in n) {
    if (t && !oS(n))
      throw new Error(Je(17));
    i = n.reducer, a = n.prepare;
  } else
    i = n;
  o.addCase(r, i).exposeCaseReducer(e, i).exposeAction(e, a ? Nt(r, a) : Nt(r));
}
function nS(r) {
  return r._reducerDefinitionType === "asyncThunk";
}
function oS(r) {
  return r._reducerDefinitionType === "reducerWithPrepare";
}
function iS({
  type: r,
  reducerName: e
}, t, n, o) {
  if (!o)
    throw new Error(Je(18));
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = t, h = o(r, i, u);
  n.exposeAction(e, h), a && n.addCase(h.fulfilled, a), s && n.addCase(h.pending, s), c && n.addCase(h.rejected, c), l && n.addMatcher(h.settled, l), n.exposeCaseReducer(e, {
    fulfilled: a || so,
    pending: s || so,
    rejected: c || so,
    settled: l || so
  });
}
function so() {
}
var aS = (r, e) => {
  if (typeof r != "function")
    throw new Error(Je(32));
}, ks = "listenerMiddleware", sS = (r) => {
  let {
    type: e,
    actionCreator: t,
    matcher: n,
    predicate: o,
    effect: i
  } = r;
  if (e)
    o = Nt(e).match;
  else if (t)
    e = t.type, o = t.match;
  else if (n)
    o = n;
  else if (!o)
    throw new Error(Je(21));
  return aS(i), {
    predicate: o,
    type: e,
    effect: i
  };
}, cS = Object.assign((r) => {
  const {
    type: e,
    predicate: t,
    effect: n
  } = sS(r);
  return {
    id: Bd(),
    effect: n,
    type: e,
    predicate: t,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(Je(22));
    }
  };
}, {
  withTypes: () => cS
}), lS = Object.assign(Nt(`${ks}/add`), {
  withTypes: () => lS
});
Nt(`${ks}/removeAll`);
var uS = Object.assign(Nt(`${ks}/remove`), {
  withTypes: () => uS
});
function Je(r) {
  return `Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `;
}
const dS = {
  bsddApiEnvironment: null,
  mainDictionary: null,
  ifcDictionary: null,
  filterDictionaries: [],
  language: "en-GB",
  includeTestDictionaries: null
}, cl = (r, e) => {
  r.language = e.payload, xe.changeLanguage(e.payload);
}, zd = Nt("settings/setSettings"), $d = hi({
  name: "settings",
  initialState: dS,
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
    setLanguage: cl,
    setIncludeTestDictionaries: (r, e) => {
      r.includeTestDictionaries = e.payload;
    }
  },
  extraReducers: (r) => {
    r.addCase(
      zd,
      (e, {
        payload: {
          bsddApiEnvironment: t,
          mainDictionary: n,
          ifcDictionary: o,
          filterDictionaries: i,
          language: a,
          includeTestDictionaries: s
        }
      }) => {
        JSON.stringify(e.bsddApiEnvironment) !== JSON.stringify(t) && (e.bsddApiEnvironment = t), JSON.stringify(e.mainDictionary) !== JSON.stringify(n) && (e.mainDictionary = n), JSON.stringify(e.ifcDictionary) !== JSON.stringify(o) && (e.ifcDictionary = o), JSON.stringify(e.filterDictionaries) !== JSON.stringify(i) && (e.filterDictionaries = i), JSON.stringify(e.language) !== JSON.stringify(a) && cl(e, { payload: a, type: "setLanguage" }), JSON.stringify(e.includeTestDictionaries) !== JSON.stringify(s) && (e.includeTestDictionaries = s);
      }
    );
  }
}), da = (r) => {
  const e = r.settings.bsddApiEnvironment;
  return e !== null ? _d[e] : null;
}, Kd = ur(
  (r) => r.settings.mainDictionary,
  (r) => r.settings.ifcDictionary,
  (r) => r.settings.filterDictionaries,
  (r, e, t) => {
    const n = [r, e, ...t].filter(Boolean), o = new Map(n.map((i) => [i.ifcClassification.location, i]));
    return Array.from(o.values());
  }
), hS = ur(Kd, (r) => new Map(
  r.map((t) => [t.ifcClassification.location, t.ifcClassification])
)), As = (r) => r.settings.mainDictionary, qd = (r) => r.settings.language, fS = (r) => r.settings.includeTestDictionaries, pS = ur(
  Kd,
  (r) => r.map((e) => e.ifcClassification.location)
);
ur(
  As,
  (r) => r ? r.ifcClassification.location : null
);
$d.actions;
const gS = $d.reducer, ha = 500, mS = 500;
let et = null, co = {};
const ll = {
  mainDictionaryClassification: null,
  classes: {},
  propertyNamesByLanguage: {},
  dictionaries: {},
  dictionaryClasses: {},
  loaded: !1,
  groupedClassRelations: {}
}, yS = (r) => {
  const e = da(r);
  return e && (!et || et.baseUrl !== e) && (et = new Un(e)), et;
}, ul = Lr("bsdd/fetchDictionaries", ({ bsddApiEnvironment: r, includeTestDictionaries: e }, t) => {
  if (!r)
    return t.rejectWithValue("No bsddApiEnvironment provided");
  const n = new Un(r), o = mS;
  let i = 0;
  const a = [];
  return new Promise((s, c) => {
    function l() {
      n.api.dictionaryV1List({ IncludeTestDictionaries: e, Limit: o, Offset: i }).then((u) => {
        u.ok || c(new Error(`HTTP error! status: ${u.status}`));
        const { data: { dictionaries: h, totalCount: d } = {} } = u;
        if (h && typeof d < "u")
          if (a.push(...h), i += o, a.length >= d) {
            const f = a.reduce((p, g) => (p[g.uri] = g, p), {});
            s(f);
          } else
            l();
        else
          c(new Error(`bSDD API error! status: ${u.status}`));
      });
    }
    l();
  });
}), vS = Lr("bsdd/fetchDictionaries", async ({ bsddApiEnvironment: r, dictionaryUris: e }, t) => {
  if (!r || !e || e.length === 0)
    return t.rejectWithValue("Invalid parameters");
  const n = new Un(r), o = {};
  return await Promise.all(
    e.map(async (i) => {
      var a;
      try {
        const s = await n.api.dictionaryV1List({ Uri: i });
        s.ok && s.data ? (a = s.data.dictionaries) == null || a.forEach((c) => {
          o[c.uri] = c;
        }) : console.error(`Failed to fetch dictionaries for URI: ${i}`);
      } catch (s) {
        console.error(`Error fetching dictionaries for URI: ${i}`, s);
      }
    })
  ), o;
});
async function dl(r, e, t, n) {
  console.log("languageCode", n);
  const o = await r.api.dictionaryV1ClassesList({
    Uri: e,
    UseNestedClasses: !1,
    ClassType: "Class",
    Offset: t,
    Limit: ha,
    languageCode: n || void 0
  });
  if (!o.ok)
    throw new Error(`HTTP error! status: ${o.status}`);
  return o.data;
}
const bS = async (r, e, t) => {
  const n = [];
  let o = 0;
  const i = await dl(r, e, o, t), a = i.classesTotalCount;
  if (a == null)
    throw new Error("Total count is null or undefined");
  n.push(...i.classes ?? []);
  const s = [];
  for (o = ha; o < a; o += ha)
    s.push(dl(r, e, o, t));
  return (await Promise.all(s)).forEach((l) => {
    n.push(...l.classes ?? []);
  }), n;
}, Rs = Lr(
  "bsdd/fetchDictionaryClasses",
  async ({ location: r, languageCode: e }, { getState: t, dispatch: n }) => {
    const o = t();
    if (o.bsdd.dictionaryClasses[r])
      return o.bsdd.dictionaryClasses[r];
    if (co[r])
      return co[r];
    const i = yS(o);
    if (!i)
      throw new Error("BsddApi is not initialized");
    const a = bS(i, r, e).then((s) => (n({ type: "bsdd/addDictionaryClasses", payload: { uri: r, data: s } }), s)).finally(() => {
      delete co[r];
    });
    return co[r] = a, a;
  }
), CS = Lr(
  "bsdd/fetchAndStoreAllDictionaryClasses",
  async (r, { dispatch: e, rejectWithValue: t }) => {
    const { dictionaryUris: n, languageCode: o } = r;
    if (!n || n.length === 0)
      return t("No dictionary URIs provided");
    try {
      return await Promise.all(n.map((i) => e(Rs({ location: i, languageCode: o })))), "Successfully fetched and stored all dictionary classes";
    } catch {
      return t("Failed to fetch dictionary classes");
    }
  }
), Vd = Lr(
  "bsdd/updateDictionaries",
  async (r) => r
), Gd = Lr(
  "bsdd/updatePropertyNaturalLanguageNames",
  async ({ classProperties: r, languageCode: e }) => {
    if (!et)
      throw new Error("BsddApi is not initialized");
    const t = {}, n = async (i) => {
      if (et != null && et.api && i.propertyUri)
        try {
          const a = await et.api.propertyV4List({
            uri: i.propertyUri,
            languageCode: e,
            includeClasses: !1
          });
          if (!a.ok)
            throw new Error(`HTTP error! status: ${a.status}`);
          const { data: s } = a;
          t[i.propertyUri] = s.name || i.name;
        } catch (a) {
          console.error("Error fetching property details:", a), t[i.propertyUri] = i.name;
        }
    }, o = r.map(n);
    return await Promise.all(o), { languageCode: e, propertyNames: t };
  }
), Wd = hi({
  name: "bsdd",
  initialState: ll,
  reducers: {
    resetState: () => ll,
    setMainDictionaryClassification: (r, e) => {
      r.mainDictionaryClassification = e.payload;
    },
    setClasses: (r, e) => {
      r.classes = e.payload;
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
      Gd.fulfilled,
      (e, t) => {
        const { languageCode: n, propertyNames: o } = t.payload;
        e.propertyNamesByLanguage[n] = o;
      }
    ).addCase(ul.pending, (e) => {
      e.loaded = !1;
    }).addCase(
      ul.fulfilled,
      (e, t) => {
        e.dictionaries = t.payload, e.loaded = !0;
      }
    ).addCase(Rs.rejected, (e, t) => {
      console.error("fetch dictionary classes failed", t.error), e.loaded = !0;
    }).addCase(Vd.fulfilled, (e, t) => {
      const n = t.payload;
      e.dictionaries = Object.keys(e.dictionaries).filter((o) => n.includes(o)).reduce((o, i) => (o[i] = e.dictionaries[i], o), {});
    });
  }
}), Yd = Lr(
  "bsdd/fetchRelatedClasses",
  async (r, { getState: e, dispatch: t }) => {
    const n = e();
    if (!et)
      throw new Error("BsddApi is not initialized");
    const o = {}, i = async (s) => {
      if (et && et.api) {
        const c = await et.api.classV1List({
          Uri: s,
          // IncludeClassProperties: true,
          // IncludeChildClassReferences: false,
          // IncludeClassRelations: true,
          languageCode: n.settings.language || void 0
        });
        if (!c.ok)
          throw new Error(`HTTP error! status: ${c.status}`);
        const { data: l } = c;
        o[s] = l;
      } else
        throw new Error("bsddApi or bsddApi.api is not initialized");
    }, a = r.map(i);
    await Promise.all(a), t({ type: "bsdd/setClasses", payload: o });
  }
), wS = (r) => r.bsdd.mainDictionaryClassification, Qd = (r) => r.bsdd.dictionaries, SS = (r) => r.bsdd.classes, ES = (r) => r.bsdd.propertyNamesByLanguage, TS = ur([SS], (r) => Object.values(r).reduce((n, o) => {
  const { dictionaryUri: i } = o;
  return i && (n[i] || (n[i] = []), n[i].push(o)), n;
}, {})), { resetState: nE, setMainDictionaryClassification: IS, addDictionaryClasses: oE, addDictionary: iE } = Wd.actions, _S = Wd.reducer, kS = {
  type: void 0,
  name: void 0,
  description: void 0,
  objectType: void 0,
  tag: void 0,
  predefinedType: void 0,
  isDefinedBy: [],
  hasAssociations: []
};
function Pi(r, e, t) {
  e ? !t || t === "NOTDEFINED" ? r.predefinedType = "USERDEFINED" : r.predefinedType = t : (r.objectType = "", !t || t === "USERDEFINED" ? r.predefinedType = "NOTDEFINED" : r.predefinedType = t);
}
function hl(r, e) {
  var n, o, i, a, s, c;
  if (r.isDefinedBy = e || [], !e)
    return;
  const t = e.find((l) => l.name === "Attributes");
  if (t) {
    const l = t.hasProperties.find((h) => h.name === "ObjectType");
    l && (l.type === "IfcPropertySingleValue" ? r.objectType = (n = l.nominalValue) == null ? void 0 : n.value : l.type === "IfcPropertyEnumeratedValue" && (r.objectType = (i = (o = l.enumerationValues) == null ? void 0 : o[0]) == null ? void 0 : i.value));
    const u = t.hasProperties.find(
      (h) => h.name === "PredefinedType"
    );
    u && (u.type === "IfcPropertySingleValue" ? r.predefinedType = (a = u.nominalValue) == null ? void 0 : a.value : u.type === "IfcPropertyEnumeratedValue" && (r.predefinedType = (c = (s = u.enumerationValues) == null ? void 0 : s[0]) == null ? void 0 : c.value));
  }
}
function fl(r, e) {
  const t = JSON.stringify(r.hasAssociations), n = JSON.stringify(e);
  t !== n && (r.hasAssociations = e);
}
const Jd = hi({
  name: "ifcEntity",
  initialState: kS,
  reducers: {
    setIfcEntity: (r, e) => {
      r.type = e.payload.type, r.name = e.payload.name, r.description = e.payload.description, Pi(r, e.payload.objectType, e.payload.predefinedType), r.tag = e.payload.tag, hl(r, e.payload.isDefinedBy), fl(r, e.payload.hasAssociations);
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
      Pi(r, e.payload, r.predefinedType);
    },
    setTag: (r, e) => {
      r.tag = e.payload;
    },
    setPredefinedType: (r, e) => {
      r.predefinedType = e.payload, Pi(r, r.objectType, e.payload);
    },
    setIsDefinedBy: (r, e) => {
      hl(r, e.payload);
    },
    setHasAssociations: (r, e) => {
      fl(r, e.payload);
    }
  }
}), Ps = (r) => r.ifcEntity.isDefinedBy, Xd = (r) => r.ifcEntity.hasAssociations, AS = ur(
  Xd,
  (r) => (r == null ? void 0 : r.filter(
    (n) => n && n.type === "IfcClassificationReference"
  )).reduce((n, o) => {
    var a;
    const i = (a = o == null ? void 0 : o.referencedSource) == null ? void 0 : a.location;
    return i && (n[i] || (n[i] = []), n[i].push(o)), n;
  }, {})
), { setIfcEntity: RS, setName: aE, setDescription: sE, setTag: cE, setPredefinedType: lE, setIsDefinedBy: uo, setHasAssociations: PS } = Jd.actions, NS = Jd.reducer;
function OS({ callback: r, ifcEntity: e }) {
  const { t } = ga();
  Me(Qd);
  const n = Nn(Ps), o = Nn(Xd);
  function i(s) {
    const c = s ? { ...JSON.parse(JSON.stringify(s)) } : { hasAssociations: [], isDefinedBy: [] };
    return c.isDefinedBy = n == null ? void 0 : n.filter((l) => l.name !== "Attributes"), c.hasAssociations = [], o == null || o.forEach((l) => {
      var u, h, d;
      if (l.type === "IfcClassificationReference" && ((h = (u = l == null ? void 0 : l.referencedSource) == null ? void 0 : u.location) != null && h.includes("https://identifier.buildingsmart.org/uri/buildingsmart/ifc/"))) {
        const { type: f, predefinedType: p } = ow(l.identification);
        f && (c.type = f), p && (c.predefinedType = p), c.predefinedType || (c.predefinedType = "NOTDEFINED");
      } else
        (d = c.hasAssociations) == null || d.push(l);
    }), c;
  }
  const a = () => {
    const s = i(e);
    console.log(s), r(s);
  };
  return /* @__PURE__ */ y.jsx(Jn, { color: "gray", fullWidth: !0, onClick: a, variant: "filled", children: t("apply") });
}
const pl = 25, MS = 25;
function xS({ height: r, options: e, label: t, value: n, setValue: o, placeholder: i = "Search values", disabled: a }) {
  const [s, c] = Z(""), [l, u] = Z(e.slice(0, pl)), h = ue(null), d = ai({
    onDropdownClose: () => {
      d.resetSelectedOption(), d.focusTarget();
    },
    onDropdownOpen: () => {
      d.focusSearchInput();
    }
  });
  W(() => {
    c((n == null ? void 0 : n.label) || "");
  }, [n]), W(() => {
    const g = n === null ? e.filter(
      (m) => (m == null ? void 0 : m.label.toLowerCase().includes(s.toLowerCase().trim())) || (m == null ? void 0 : m.value.toString().toLowerCase().includes(s.toLowerCase().trim()))
    ) : e;
    u(g.slice(0, pl));
  }, [e, s, n]);
  const f = (g) => {
    const { scrollTop: m, scrollHeight: C, clientHeight: v } = g.currentTarget, b = 5;
    C - m <= v + b && u((E) => {
      const T = E.length, k = e.filter((I) => I == null ? void 0 : I.label.toLowerCase().includes(s.toLowerCase().trim())).slice(T, T + MS);
      return [...E, ...k];
    });
  }, p = l.map((g) => /* @__PURE__ */ y.jsx(le.Option, { value: g.value, active: (n == null ? void 0 : n.value) === g.value, children: /* @__PURE__ */ y.jsxs(jn, { gap: "sm", children: [
    (n == null ? void 0 : n.value) === g.value ? /* @__PURE__ */ y.jsx(ps, { size: 12 }) : null,
    /* @__PURE__ */ y.jsx(Mo, { fz: "sm", opacity: a ? 0.6 : 1, children: g.label }),
    /* @__PURE__ */ y.jsxs(Mo, { fz: "xs", opacity: 0.6, children: [
      "(",
      g.value,
      ")"
    ] })
  ] }) }, g.value));
  return /* @__PURE__ */ y.jsx("div", { style: { display: "flex", flexDirection: "column", height: "100%" }, children: /* @__PURE__ */ y.jsxs(
    le,
    {
      store: d,
      onOptionSubmit: (g) => {
        if (!a) {
          const m = e.find((v) => v.value === g), C = m && (n == null ? void 0 : n.value) !== m.value ? m : null;
          o(C), d.closeDropdown();
        }
      },
      disabled: a,
      children: [
        /* @__PURE__ */ y.jsx(le.Target, { children: /* @__PURE__ */ y.jsx(
          Yt,
          {
            rightSection: !a && /* @__PURE__ */ y.jsx(
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
            value: s,
            onChange: (g) => {
              a || (o(null), d.updateSelectedOptionIndex(), c(g.currentTarget.value));
            },
            onClick: () => {
              a || d.openDropdown();
            },
            onBlur: () => d.closeDropdown(),
            placeholder: a ? "" : i,
            disabled: a
          }
        ) }),
        r < 80 ? /* @__PURE__ */ y.jsx(
          le.Dropdown,
          {
            style: { maxHeight: "20em", overflowY: "auto" },
            ref: h,
            onScroll: f,
            children: /* @__PURE__ */ y.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        ) : /* @__PURE__ */ y.jsx(
          Jo,
          {
            withBorder: !0,
            my: "0.2em",
            style: {
              flexGrow: 1,
              overflow: "auto",
              backgroundColor: a ? "var(--mantine-color-gray-0)" : "transparent",
              color: a ? "var(--mantine-color-gray-6)" : "inherit",
              pointerEvents: a ? "none" : "auto"
            },
            ref: h,
            onScroll: f,
            children: /* @__PURE__ */ y.jsx(le.Options, { children: p.length > 0 ? p : /* @__PURE__ */ y.jsx(le.Empty, { children: "Nothing found..." }) })
          }
        )
      ]
    }
  ) });
}
function LS({ height: r, mainDictionaryClassification: e, handleMouseDown: t }) {
  const n = Xn(), [o, i] = Z(/* @__PURE__ */ new Map()), [a, s] = Z(/* @__PURE__ */ new Map()), c = Me(hS), l = Me(AS), u = Nn(Qd), h = Nn(TS);
  return W(() => {
    (async () => {
      const p = Array.from(c.entries()).map(async ([v, b]) => {
        let w = [];
        const E = h[v];
        if (E)
          w = E.map((T) => ({
            value: T.code,
            label: T.name,
            uri: T.uri
          }));
        else
          try {
            w = (await n(
              Rs({
                location: v,
                languageCode: "nl-NL"
              })
            ).unwrap()).map(
              (k) => ({
                value: k.code,
                label: k.name || "",
                uri: k.uri
              })
            );
          } catch (T) {
            console.error("Failed to fetch dictionary classes for", v, T), w = [];
          }
        return [v, w];
      }), g = await Promise.all(p), m = new Map(g);
      i(m);
      const C = /* @__PURE__ */ new Map();
      m.forEach((v, b) => {
        if (v.length === 1)
          C.set(b, v[0]);
        else if (b in l) {
          const w = l[b];
          if (w.length === 1) {
            const E = w[0];
            if (v.some((k) => k.value === E.identification)) {
              const k = {
                label: E.name || "",
                value: E.identification || "",
                uri: b
              };
              C.set(b, k);
            }
          }
        }
      }), s(C);
    })();
  }, [c, h, n, l]), W(() => {
    (() => {
      const f = Array.from(a.entries()).map(([p, g]) => {
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
      f.length > 0 && n(PS(f));
    })();
  }, [u, n, a]), W(() => {
    if (e != null && e.classRelations) {
      const d = e.classRelations.map((f) => f.relatedClassUri);
      d.push(e.uri), n(Yd(d));
    }
  }, [e, n]), /* @__PURE__ */ y.jsxs(Jo, { style: { height: `${r}px`, position: "relative" }, children: [
    Array.from(c.entries()).map(([d, f]) => {
      var p;
      return /* @__PURE__ */ y.jsx(
        xS,
        {
          height: r,
          label: f.name,
          options: o.get(d) || [],
          value: a.get(d) || null,
          setValue: (g) => {
            const m = new Map(a);
            m.set(d, g), s(m);
          },
          placeholder: "Search classes",
          disabled: d === (e == null ? void 0 : e.dictionaryUri) || ((p = o.get(d)) == null ? void 0 : p.length) === 1
        },
        d
      );
    }),
    /* @__PURE__ */ y.jsx(vs, { onMouseDown: t, style: { marginTop: "4px" }, children: /* @__PURE__ */ y.jsx(ri, { m: "xxs", variant: "outline", size: "lg", radius: "xl", "aria-label": "Settings", children: /* @__PURE__ */ y.jsx(YC, {}) }) })
  ] });
}
const DS = {
  ifcEntities: []
}, Zd = hi({
  name: "ifcData",
  initialState: DS,
  reducers: {
    setIfcData: (r, e) => {
      r.ifcEntities = e.payload;
    }
  }
}), { setIfcData: jS } = Zd.actions, FS = (r) => r.ifcData.ifcEntities, US = ur(FS, (r) => r[0]), HS = Zd.reducer;
function BS({ label: r, description: e, value: t, setValue: n, disabled: o }) {
  const [i, a] = Z(!1), [s, c] = Z(!0), l = (u) => {
    u.target.indeterminate = !1, n(u.target.checked);
  };
  return W(() => {
    t === !0 ? (a(!0), c(!1)) : t === !1 ? (a(!1), c(!1)) : t === void 0 && (a(!1), c(!0));
  }, [t]), /* @__PURE__ */ y.jsx(
    xr,
    {
      label: r,
      description: e,
      checked: i,
      indeterminate: s,
      type: "checkbox",
      onChange: (u) => l(u),
      disabled: o
    }
  );
}
const Ni = (r, e, t, n) => r.map((o) => {
  if (o.name === e) {
    const i = o.hasProperties.map((a) => a.name === t ? {
      ...a,
      ...n
    } : a);
    return {
      ...o,
      hasProperties: i
    };
  }
  return o;
});
function zS({ propertySet: r, property: e, property_natural_language_name: t }) {
  const n = Xn(), o = Me(Ps), [i, a] = Z();
  return W(() => {
    var s, c, l, u, h;
    switch (e.type) {
      case "IfcPropertySingleValue": {
        e.nominalValue.type === "IfcBoolean" ? a(
          /* @__PURE__ */ y.jsx(
            BS,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              disabled: !1,
              value: e.nominalValue.value,
              setValue: (d) => {
                if (o && r.name) {
                  const f = {
                    nominalValue: { ...e.nominalValue, value: d }
                  }, p = Ni(
                    o,
                    r.name,
                    e.name,
                    f
                  );
                  n(uo(Object.values(p)));
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
              onChange: (d) => {
                if (o && r.name) {
                  const f = {
                    nominalValue: { ...e.nominalValue, value: d.target.value }
                  }, p = Ni(o, r.name, e.name, f);
                  n(uo(Object.values(p)));
                }
              }
            }
          )
        );
        break;
      }
      case "IfcPropertyEnumeratedValue": {
        const d = (c = (s = e.enumerationValues) == null ? void 0 : s[0]) == null ? void 0 : c.value, f = ((l = e.enumerationReference) == null ? void 0 : l.enumerationValues) || [];
        a(
          /* @__PURE__ */ y.jsx(
            Cs,
            {
              label: t,
              description: e.name.length > 0 ? `(${e.name})` : "",
              value: d,
              disabled: ((h = (u = e.enumerationReference) == null ? void 0 : u.enumerationValues) == null ? void 0 : h.length) === 1,
              onChange: (p) => {
                if (o && r.name) {
                  const g = f.find((v) => v.value === p), m = {
                    enumerationValues: g ? [g] : []
                  }, C = Ni(o, r.name, e.name, m);
                  n(uo(Object.values(C)));
                }
              },
              data: f.map((p) => ({
                value: p.value,
                label: p.value
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
  }, [e, r, a, t, n, o]), i;
}
const $S = {
  Boolean: "IfcBoolean",
  Character: "IfcText",
  Integer: "IfcInteger",
  Real: "IfcReal",
  String: "IfcText",
  Time: "IfcDateTime"
};
function Bo(r, e) {
  const t = r && $S[r] || "default";
  let n;
  return r === "Boolean" && typeof e == "string" ? e.toUpperCase() === "TRUE" ? n = !0 : e.toUpperCase() === "FALSE" ? n = !1 : n = void 0 : n = e, {
    type: t,
    value: n
  };
}
function eh(r, e, t) {
  let n;
  if (r && r.isDefinedBy) {
    let o = r.isDefinedBy.find((i) => i.name === e);
    if (o && (n = o.hasProperties.find((i) => i.name === t)), n)
      return n;
    if (o = r.isDefinedBy.find((i) => i.name === ""), o)
      return o.hasProperties.find((i) => i.name === t);
  }
  return n;
}
function KS(r, e, t, n) {
  var a;
  const o = eh(e, t, n), i = ((a = o == null ? void 0 : o.nominalValue) == null ? void 0 : a.value) ?? null;
  return Bo(r, i);
}
function qS(r, e, t, n, o) {
  const i = eh(e, t, n);
  if (i) {
    if (i.type === "IfcPropertyEnumeratedValue")
      return o.filter(
        (a) => i.enumerationValues ? i.enumerationValues.some((s) => s.value === a.value) : !1
      );
    if ("nominalValue" in i && i.nominalValue) {
      const a = o.find(
        (s) => s.value === i.nominalValue.value
      );
      return a ? [a] : [];
    }
  }
  return [];
}
function VS(r, e, t, n) {
  var s;
  const o = ((s = r.allowedValues) == null ? void 0 : s.map(
    (c) => Bo(r.dataType, c.value)
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
  const a = r.predefinedValue ? [Bo(r.dataType, r.predefinedValue)] : qS(
    r.dataType,
    n,
    t,
    e,
    o
  );
  return a.length > 0 && (i.enumerationValues = a), i;
}
function GS(r, e, t, n) {
  const o = {
    type: "IfcPropertySingleValue",
    name: e,
    specification: r.propertyUri || ""
  }, i = r.predefinedValue ? Bo(r.dataType, r.predefinedValue) : KS(r.dataType, n, t, e);
  return i !== null && (o.nominalValue = i), o;
}
function WS(r, e, t) {
  const { propertyCode: n } = r, o = n || "unknown", i = r.allowedValues ? VS(r, o, e, t) : GS(r, o, e, t);
  return i.specification = r.propertyUri || "", i;
}
function YS({ mainDictionaryClassification: r, recursiveMode: e }) {
  const t = Xn(), n = Me(US), o = Me(Ps), i = Me(ES), a = Me(qd), [s, c] = Z({});
  return W(() => {
    if (!r)
      return;
    const l = {};
    [r].forEach((h) => {
      var d;
      (d = h.classProperties) == null || d.forEach((f) => {
        if (!f || !f.propertySet)
          return;
        const p = f.propertySet || h.name;
        l[p] || (l[p] = {
          type: "IfcPropertySet",
          name: p,
          hasProperties: []
        }), l[p].hasProperties.push(WS(f, p, n));
      });
    }), t(uo(Object.values(l)));
  }, [t, n, r]), W(() => {
    if (!r)
      return;
    const l = {};
    [r].forEach((h) => {
      var d;
      (d = h.classProperties) == null || d.forEach((f) => {
        f && f.propertyUri && (a && i && i[a] && i[a][f.propertyUri] ? l[f.propertyUri] = i[a][f.propertyUri] || "" : l[f.propertyUri] = f.name);
      });
    }), c(l);
  }, [r, e, n, i, a]), /* @__PURE__ */ y.jsx("div", { children: Mi.toArray(
    o == null ? void 0 : o.map((l) => /* @__PURE__ */ y.jsx(Pe, { children: /* @__PURE__ */ y.jsxs(Pe.Item, { value: l.name || "Unknown", children: [
      /* @__PURE__ */ y.jsx(Pe.Control, { children: l.name }),
      /* @__PURE__ */ y.jsx(Pe.Panel, { children: /* @__PURE__ */ y.jsx(ws, { children: Mi.toArray(
        l.hasProperties.map((u) => {
          const h = u.specification ? s[u.specification] : "";
          return /* @__PURE__ */ y.jsx(
            zS,
            {
              propertySet: l,
              property: u,
              property_natural_language_name: h
            }
          );
        })
      ) }) })
    ] }, l.name) }))
  ) });
}
function QS({ api: r, defaultValue: e, setActiveClassificationUri: t }) {
  var E;
  const n = Xn(), { t: o } = ga(), [i, a] = Z([]), s = Me(As), c = ue(null), l = ue(e), [u, h] = Z(l.current), [d, f] = Z(((E = l.current) == null ? void 0 : E.label) || ""), [p] = zg(d, 300), [g, m] = Z(!1), C = me((T) => {
    f(T);
  }, []), v = me(
    (T) => {
      const k = i.find((I) => I.value === T);
      k && (h(k), m(!0));
    },
    [i]
  ), b = me(
    (T) => {
      T.key === "Enter" && i[0] && (f(i[0].label), v(i[0].value), c.current && c.current.blur());
    },
    [i, v, c]
  );
  W(() => {
    e && !g && (f(e.label), h(e));
  }, [e, g]), W(() => {
    if (s) {
      n(Yd([]));
      const T = {
        headers: { Accept: "text/plain" }
      }, k = {
        SearchText: p,
        DictionaryUri: s.ifcClassification.location
      };
      r.api.searchInDictionaryV1List(k, T).then((I) => {
        var U;
        const D = I.data;
        if (D) {
          if (D.count) {
            const Y = (U = D.dictionary) == null ? void 0 : U.classes;
            Y && a(
              Y.filter((X) => X.uri && X.name).map(
                (X) => ({
                  value: X.uri,
                  label: X.name
                })
              )
            );
          }
        } else
          console.error("API response data is null", I);
      }).catch((I) => {
        console.error("API request failed", I);
      });
    } else
      a([]);
  }, [r.api, p, n, s]), W(() => {
    c.current && c.current.focus();
  }, []), W(() => {
    u && t(u.value);
  }, [u, t]);
  const w = () => {
    C(""), c.current && c.current.focus();
  };
  return /* @__PURE__ */ y.jsx(
    ms,
    {
      label: `${o("searchMainDictionaryLabel")} ${s ? s.ifcClassification.name : ""}`,
      data: i,
      placeholder: "bSDD search...",
      value: d,
      onChange: C,
      onOptionSubmit: v,
      onKeyDown: b,
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
const Oi = 60.7969;
let gl = 0, ml = 0;
function JS() {
  const { t: r } = ga(), e = Xn(), [t, n] = Z(), [o, i] = Z(), [a, s] = Z(!1), [c, l] = Z(new Un(_d[nw])), u = Me(As), h = Me(qd), [d, f] = Z(null), p = Me(da), g = Me(da), m = Me(fS), C = Me(pS), v = Me((q) => q.ifcEntity), [b, w] = Z(Oi), [E, T] = Z("auto"), k = Me(wS), I = me((q) => {
    var j;
    const M = JSON.stringify(q);
    (j = window == null ? void 0 : window.bsddBridge) == null || j.save(M).then((L) => {
      console.log("Sent to Revit", L);
    });
  }, []), D = me(() => {
    var q;
    (q = window == null ? void 0 : window.bsddBridge) == null || q.cancel();
  }, []), U = (q) => {
    f(q);
  };
  W(() => {
    d && (console.log("settings updated: ", d), e(zd(d)), f(null));
  }, [d, e]), W(() => {
    p && l(new Un(p));
  }, [p]), W(() => {
  }, [e]), W(() => {
    (async () => {
      if (window != null && window.bsddBridge) {
        const M = await window.bsddBridge.loadSettings(), { settings: j, ifcData: L } = JSON.parse(M);
        if (e(jS(L)), U(j), !L || L.length === 0)
          return;
        e(RS(L[0]));
      }
    })();
  }, []), W(() => {
    var M;
    if (!v || !u)
      return;
    const q = u.ifcClassification.location;
    (M = v.hasAssociations) == null || M.forEach((j) => {
      var L;
      if (j.type === "IfcClassificationReference") {
        const H = j;
        (L = H.referencedSource) != null && L.location && H.referencedSource.location === q && (H.location && n(H.location), i({
          label: H.name,
          value: H.location
        }));
      }
    });
  }, [u, v]), W(() => {
    if (p !== null && m !== null) {
      const q = {
        bsddApiEnvironment: p,
        includeTestDictionaries: m,
        languageCode: h,
        dictionaryUris: C
      };
      e(Vd(C)), e(vS(q)), e(CS(q));
    }
  }, [
    p,
    g,
    m,
    e,
    C,
    h
  ]);
  const Y = me(
    (q) => {
      const M = {
        headers: { Accept: "text/plain" }
      };
      new Promise(function(L) {
        const H = {
          Uri: q,
          IncludeClassRelations: !0,
          IncludeClassProperties: !0,
          languageCode: h
        };
        L(
          c.api.classV1List(H, M).then((te) => te.status !== 200 ? (console.error(`API request failed with status ${te.status}`), null) : te.data).catch((te) => (console.error("Error fetching classification:", te), null))
        );
      }).then((L) => {
        e(IS(L));
        const H = L == null ? void 0 : L.classProperties;
        H && (H == null ? void 0 : H.length) > 0 && e(Gd({ classProperties: H, languageCode: h }));
      });
    },
    [c.api, e, h]
  );
  W(() => {
    t && Y(t);
  }, [t, Y]), W(() => {
    T(`${b * C.length + 48}px`);
  }, [C.length, b]);
  const X = (q) => {
    const M = ml + (q.clientY - gl) / C.length;
    w(M > Oi ? M : Oi);
  }, ae = () => {
    document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", ae);
  }, $ = (q) => {
    gl = q.clientY, ml = b, document.addEventListener("mousemove", X), document.addEventListener("mouseup", ae);
  };
  return /* @__PURE__ */ y.jsxs(bs, { children: [
    /* @__PURE__ */ y.jsx(Tr, { type: "hidden", name: "ifcType", id: "ifcType", value: "" }),
    /* @__PURE__ */ y.jsx(Tr, { type: "hidden", name: "name", id: "name", value: "" }),
    /* @__PURE__ */ y.jsx(Tr, { type: "hidden", name: "material", id: "material", value: "" }),
    /* @__PURE__ */ y.jsx(jn, { mx: "md", mt: "lg", mb: "sm", children: /* @__PURE__ */ y.jsx(QS, { api: c, defaultValue: o, setActiveClassificationUri: n }) }),
    t ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsxs(Pe, { defaultValue: ["Classifications"], multiple: !0, children: [
        /* @__PURE__ */ y.jsxs(Pe.Item, { value: "Classifications", children: [
          /* @__PURE__ */ y.jsx(Pe.Control, { children: /* @__PURE__ */ y.jsx(xo, { order: 5, children: r("classificationsLabel") }) }),
          /* @__PURE__ */ y.jsx(Pe.Panel, { style: { height: E }, children: /* @__PURE__ */ y.jsx(
            LS,
            {
              height: b,
              mainDictionaryClassification: k,
              handleMouseDown: $
            }
          ) })
        ] }, "Classifications"),
        /* @__PURE__ */ y.jsxs(Pe.Item, { value: "Propertysets", children: [
          /* @__PURE__ */ y.jsx(Pe.Control, { children: /* @__PURE__ */ y.jsx(xo, { order: 5, children: r("propertysetsLabel") }) }),
          /* @__PURE__ */ y.jsx(Pe.Panel, { children: /* @__PURE__ */ y.jsx(
            YS,
            {
              mainDictionaryClassification: k,
              recursiveMode: a
            }
          ) })
        ] }, "Propertysets")
      ] }),
      /* @__PURE__ */ y.jsxs(jn, { my: "sm", justify: "center", children: [
        /* @__PURE__ */ y.jsx(OS, { callback: I, ifcEntity: v }),
        /* @__PURE__ */ y.jsx(Jn, { fullWidth: !0, variant: "light", color: "gray", onClick: D, children: r("cancel") })
      ] })
    ] }) : /* @__PURE__ */ y.jsxs(es, { mx: "md", title: r("noClassificationSelected"), mt: "xl", children: [
      r("classSearchInstruction"),
      /* @__PURE__ */ y.jsx(vd, { h: "md" }),
      r("needHelp"),
      " ",
      /* @__PURE__ */ y.jsx("a", { href: "https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki", target: "_blank", rel: "noreferrer", children: r("checkDocumentation") })
    ] })
  ] });
}
function XS() {
  const [r, e] = Z(null);
  return W(() => {
    const t = new Ig(ew);
    e(t);
  }, []), r ? /* @__PURE__ */ y.jsx(au, { theme: ZC, children: /* @__PURE__ */ y.jsx(JS, {}) }) : /* @__PURE__ */ y.jsx("div", { children: "Loading..." });
}
const ZS = Bw({
  reducer: {
    settings: gS,
    ifcData: HS,
    ifcEntity: NS,
    bsdd: _S
  }
});
Li.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ y.jsx(zo.StrictMode, { children: /* @__PURE__ */ y.jsx(Mh, { store: ZS, children: /* @__PURE__ */ y.jsx(XS, {}) }) })
);
